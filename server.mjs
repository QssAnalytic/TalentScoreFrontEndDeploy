// Serves the built site and forwards /api/* to the Django backend, so the
// browser sees one address. Sign-in cookies then stay first-party and survive
// a page refresh, which cross-site cookies on two Railway domains did not.
import http from 'node:http'
import { createReadStream } from 'node:fs'
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { randomBytes } from 'node:crypto'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const PORT = Number(process.env.PORT || 3000)
const BACKEND_URL = (process.env.BACKEND_URL || 'https://talentscorebackend-production.up.railway.app').replace(/\/+$/, '')
const ROOT = fileURLToPath(new URL('.', import.meta.url))
const DIST = join(ROOT, 'dist')
// Shared result cards live here; point DATA_DIR at a Railway volume so they survive redeploys.
const SHARE_DIR = join(process.env.DATA_DIR || join(ROOT, 'data'), 'shares')
const MAX_SHARE_BYTES = 4 * 1024 * 1024

const TYPES = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.webp': 'image/webp',
	'.ico': 'image/x-icon',
	'.json': 'application/json',
	'.woff2': 'font/woff2',
	'.woff': 'font/woff',
	'.ttf': 'font/ttf'
}

// Request headers that belong to this hop only.
const HOP = new Set(['host', 'connection', 'keep-alive', 'transfer-encoding', 'upgrade', 'proxy-connection', 'te', 'trailer', 'content-length', 'accept-encoding'])

async function readBody(req) {
	const chunks = []
	for await (const c of req) chunks.push(c)
	return chunks.length ? Buffer.concat(chunks) : undefined
}

async function proxy(req, res) {
	const target = BACKEND_URL + req.url.replace(/^\/api/, '')
	const headers = {}
	for (const [k, v] of Object.entries(req.headers)) if (!HOP.has(k)) headers[k] = v
	try {
		const body = ['GET', 'HEAD'].includes(req.method) ? undefined : await readBody(req)
		const upstream = await fetch(target, { method: req.method, headers, body, redirect: 'follow' })
		const out = {}
		upstream.headers.forEach((v, k) => {
			if (!['content-encoding', 'content-length', 'transfer-encoding', 'connection', 'set-cookie'].includes(k)) out[k] = v
		})
		const cookies = upstream.headers.getSetCookie ? upstream.headers.getSetCookie() : []
		if (cookies.length) out['set-cookie'] = cookies
		const buf = Buffer.from(await upstream.arrayBuffer())
		res.writeHead(upstream.status, out)
		res.end(buf)
	} catch (err) {
		console.error('proxy error', req.method, req.url, err?.message)
		res.writeHead(502, { 'content-type': 'application/json' })
		res.end(JSON.stringify({ detail: 'The Talent Score backend could not be reached.' }))
	}
}


// ---------- shared result cards ----------
const recent = new Map() // ip -> timestamps (simple rate limit)
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
const origin = req => `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers['x-forwarded-host'] || req.headers.host}`

async function createShare(req, res) {
	const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim()
	const now = Date.now()
	const hits = (recent.get(ip) || []).filter(t => now - t < 3600_000)
	if (hits.length >= 40) {
		res.writeHead(429, { 'content-type': 'application/json' })
		return res.end(JSON.stringify({ detail: 'Too many shares, try again later.' }))
	}
	recent.set(ip, [...hits, now])
	try {
		const body = await readBody(req)
		if (!body || body.length > MAX_SHARE_BYTES * 1.4) throw new Error('too large')
		const { image, title, description } = JSON.parse(body.toString('utf8'))
		const m = /^data:image\/png;base64,(.+)$/.exec(image || '')
		if (!m) throw new Error('not a png')
		const png = Buffer.from(m[1], 'base64')
		if (png.length > MAX_SHARE_BYTES || png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error('bad png')
		const id = randomBytes(6).toString('base64url')
		await mkdir(SHARE_DIR, { recursive: true })
		await writeFile(join(SHARE_DIR, `${id}.png`), png)
		await writeFile(join(SHARE_DIR, `${id}.json`), JSON.stringify({ title: String(title || 'Talent Score').slice(0, 140), description: String(description || '').slice(0, 300), created: new Date().toISOString() }))
		res.writeHead(201, { 'content-type': 'application/json' })
		res.end(JSON.stringify({ id, url: `${origin(req)}/s/${id}` }))
	} catch (err) {
		res.writeHead(400, { 'content-type': 'application/json' })
		res.end(JSON.stringify({ detail: 'Invalid share image.' }))
	}
}

async function serveShare(req, res, id, ext) {
	if (!/^[A-Za-z0-9_-]{6,16}$/.test(id)) return notFound(res)
	try {
		if (ext === '.png') return sendFile(res, join(SHARE_DIR, `${id}.png`), 'public, max-age=31536000, immutable')
		const meta = JSON.parse(await readFile(join(SHARE_DIR, `${id}.json`), 'utf8'))
		await stat(join(SHARE_DIR, `${id}.png`))
		const host = origin(req)
		const img = `${host}/s/${id}.png`
		const html = `<!doctype html><html lang="az"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.description)}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Talent Score">
<meta property="og:title" content="${esc(meta.title)}"><meta property="og:description" content="${esc(meta.description)}">
<meta property="og:url" content="${host}/s/${id}"><meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(meta.title)}"><meta name="twitter:image" content="${img}">
<style>body{margin:0;background:#EBF5F4;font-family:Manrope,Inter,Arial,sans-serif;color:#103557;display:flex;min-height:100vh;align-items:center;justify-content:center;padding:24px;box-sizing:border-box}
main{max-width:960px;width:100%;display:flex;flex-direction:column;gap:20px;align-items:center}img{width:100%;height:auto;border-radius:16px;box-shadow:0 10px 40px rgba(16,53,87,.15)}
a{background:#038477;color:#fff;text-decoration:none;padding:14px 30px;border-radius:30px;font-weight:700}p{margin:0;color:#5B6B79;text-align:center}</style></head>
<body><main><img src="${img}" alt="${esc(meta.title)}"><p>Bu nəticə Talent Score sistemində əldə edilib.</p><a href="${host}/">Öz testinizi keçin</a></main></body></html>`
		res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=300' })
		res.end(html)
	} catch {
		notFound(res)
	}
}

// ---------- certificate registry (public verification by ID) ----------
const CERT_DIR = join(process.env.DATA_DIR || join(ROOT, 'data'), 'certs')

async function registerCert(req, res) {
	try {
		const body = await readBody(req)
		const c = JSON.parse(String(body || '{}'))
		if (!/^[A-Z]{2}-[A-Z0-9]{6,10}$/.test(c.id || '')) throw new Error('bad id')
		const record = {
			id: c.id,
			type: String(c.type || '').slice(0, 60),
			name: String(c.name || '').slice(0, 80),
			value: String(c.value || '').slice(0, 40),
			band: String(c.band || '').slice(0, 60),
			issued: String(c.issued || '').slice(0, 30)
		}
		await mkdir(CERT_DIR, { recursive: true })
		const file = join(CERT_DIR, `${record.id}.json`)
		try {
			await stat(file) // first registration wins; IDs cannot be overwritten
		} catch {
			await writeFile(file, JSON.stringify(record))
		}
		res.writeHead(201, { 'content-type': 'application/json' })
		res.end(JSON.stringify({ ok: true }))
	} catch {
		res.writeHead(400, { 'content-type': 'application/json' })
		res.end(JSON.stringify({ detail: 'Invalid certificate.' }))
	}
}

async function lookupCert(res, id) {
	try {
		if (!/^[A-Z]{2}-[A-Z0-9]{6,10}$/.test(id)) throw new Error('bad id')
		const data = await readFile(join(CERT_DIR, `${id}.json`), 'utf8')
		res.writeHead(200, { 'content-type': 'application/json' })
		res.end(data)
	} catch {
		res.writeHead(404, { 'content-type': 'application/json' })
		res.end(JSON.stringify({ detail: 'Not found' }))
	}
}

function notFound(res) {
	res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
	res.end('Not found')
}

async function sendFile(res, file, cache) {
	try {
		await stat(file)
	} catch {
		return notFound(res)
	}
	res.writeHead(200, { 'content-type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream', 'cache-control': cache })
	createReadStream(file)
		.on('error', () => res.end())
		.pipe(res)
}

async function serveStatic(req, res) {
	const path = decodeURIComponent(new URL(req.url, 'http://x').pathname)
	const file = normalize(join(DIST, path))
	if (file.startsWith(DIST)) {
		try {
			const s = await stat(file)
			if (s.isFile()) return sendFile(res, file, path.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache')
		} catch {
			/* fall through to the app shell */
		}
	}
	return sendFile(res, join(DIST, 'index.html'), 'no-cache')
}

http
	.createServer((req, res) => {
		if (req.url === '/api' || req.url.startsWith('/api/')) return proxy(req, res)
		if (req.url === '/share' && req.method === 'POST') return createShare(req, res)
		if (req.url === '/cert' && req.method === 'POST') return registerCert(req, res)
		const cert = /^\/cert\/([A-Za-z0-9-]+)$/.exec(req.url)
		if (cert && req.method === 'GET') return lookupCert(res, decodeURIComponent(cert[1]).toUpperCase())
		const shared = /^\/s\/([^/.?]+)(\.png)?(?:\?.*)?$/.exec(req.url)
		if (shared && req.method === 'GET') return serveShare(req, res, shared[1], shared[2])
		// Plain paths that always load a fresh copy of the app (hash links don't reload an open tab).
		const shortcut = { '/demo': '/#/demo', '/login': '/#/login', '/register': '/#/register', '/verify': '/#/verify', '/profile': '/#/profile' }[req.url.split('?')[0].replace(/\/+$/, '')]
		if (shortcut && req.method === 'GET') {
			res.writeHead(302, { location: shortcut, 'cache-control': 'no-store' })
			return res.end()
		}
		if (req.method !== 'GET' && req.method !== 'HEAD') {
			res.writeHead(405)
			return res.end()
		}
		return serveStatic(req, res)
	})
	.listen(PORT, '0.0.0.0', () => console.log(`Talent Score site on :${PORT}, API -> ${BACKEND_URL}`))
