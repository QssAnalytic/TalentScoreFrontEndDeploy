// Serves the built site and forwards /api/* to the Django backend, so the
// browser sees one address. Sign-in cookies then stay first-party and survive
// a page refresh, which cross-site cookies on two Railway domains did not.
import http from 'node:http'
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const PORT = Number(process.env.PORT || 3000)
const BACKEND_URL = (process.env.BACKEND_URL || 'https://talentscorebackend-production.up.railway.app').replace(/\/+$/, '')
const DIST = join(fileURLToPath(new URL('.', import.meta.url)), 'dist')

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

async function sendFile(res, file, cache) {
	res.writeHead(200, { 'content-type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream', 'cache-control': cache })
	createReadStream(file).pipe(res)
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
		if (req.method !== 'GET' && req.method !== 'HEAD') {
			res.writeHead(405)
			return res.end()
		}
		return serveStatic(req, res)
	})
	.listen(PORT, '0.0.0.0', () => console.log(`Talent Score site on :${PORT}, API -> ${BACKEND_URL}`))
