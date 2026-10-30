// Daily vacancy feed.
//
// Once a day (06:00 Baku time) the server collects new vacancies and keeps the
// last 21 days of them in DATA_DIR/jobs/index.json. Two kinds of sources:
//   1. Arbeitnow's free public job board API (no key, no usage restrictions
//      published). Only remote roles are kept; each links to the original posting.
//      Remotive was considered and left out: its terms forbid showing its jobs
//      on a site that requires sign-up.
//   2. A catalogue of sample Azerbaijani vacancies (jobs/sample-vacancies.json)
//      with invented companies. A rotating subset is published each day and is
//      always flagged `sample: true`, so the UI labels it "Nümunə".
// Local job boards can be added as further sources once their owners allow it.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = fileURLToPath(new URL('.', import.meta.url))
const KEEP_DAYS = 21
const SAMPLES_PER_DAY = 14
const BAKU_OFFSET_H = 4

const bakuDate = (d = new Date()) => new Date(d.getTime() + BAKU_OFFSET_H * 3600_000).toISOString().slice(0, 10)

const stripHtml = s =>
	String(s || '')
		.replace(/<\s*(br|\/p|\/li|\/h\d)\s*\/?>/gi, '\n')
		.replace(/<li[^>]*>/gi, '• ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&#39;|&rsquo;/g, "'")
		.replace(/&quot;|&ldquo;|&rdquo;/g, '"')
		.replace(/[ \t]+/g, ' ')
		.replace(/\n\s*\n+/g, '\n')
		.trim()

// ---------- mapping helpers for international postings ----------
const SECTORS = [
	[/data|analyt|machine learning|\bml\b|\bai\b|scientist|\bbi\b/i, 'Data və analitika'],
	[/design|ux|ui\b|graphic|video|content creator|illustrat/i, 'Dizayn və media'],
	[/market|seo|growth|social media|brand|sales|account exec|business develop/i, 'Satış və marketinq'],
	[/support|customer|success|service desk|helpdesk/i, 'Müştəri xidmətləri'],
	[/recruit|talent|\bhr\b|people/i, 'İnsan resursları'],
	[/financ|account|bookkeep|controller|tax|audit/i, 'Maliyyə və bank'],
	[/legal|lawyer|counsel|compliance/i, 'Hüquq'],
	[/teach|tutor|educat|instructor|curriculum/i, 'Təhsil'],
	[/nurse|medical|health|clinic|pharma/i, 'Səhiyyə'],
	[/logist|supply chain|warehouse|operations/i, 'Logistika'],
	[/engineer|developer|devops|software|frontend|backend|full.?stack|qa\b|tester|security|cloud|mobile|ios|android/i, 'İT və proqramlaşdırma']
]
const sectorOf = text => (SECTORS.find(([re]) => re.test(text)) || [null, 'Digər'])[1]

const levelOf = title => {
	if (/intern|trainee|praktik|werkstudent|working student/i.test(title)) return ['Təcrübəçi', 0]
	if (/junior|entry|graduate|associate/i.test(title)) return ['Kiçik mütəxəssis', 1]
	if (/head of|director|vp\b|chief|manager|lead/i.test(title)) return ['Rəhbər', 5]
	if (/senior|sr\.|principal|staff/i.test(title)) return ['Böyük mütəxəssis', 5]
	return ['Mütəxəssis', 2]
}

const TRAIT_HINTS = [
	[/analy|data|research|scien|engineer|developer/i, 'analytical'],
	[/design|creative|content|brand|writer/i, 'creative'],
	[/sales|customer|support|recruit|teacher|community/i, 'social'],
	[/lead|manager|head|director/i, 'leader'],
	[/account|finance|operations|project|compliance|qa\b/i, 'organized']
]
const RIASEC_HINTS = [
	[/engineer|developer|data|scien|research|analyt/i, 'IC'],
	[/design|content|writer|video|creative/i, 'AE'],
	[/sales|market|business|growth|account exec/i, 'ES'],
	[/support|customer|teacher|recruit|hr\b|people|nurse/i, 'SE'],
	[/account|finance|operations|admin|compliance/i, 'CE']
]

const SKILL_WORDS = ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'Excel', 'Java', 'Go', 'PHP', 'AWS', 'Docker', 'Kubernetes', 'Figma', 'SEO', 'Salesforce', 'HubSpot', 'Power BI', 'Tableau', 'Django', 'C#', '.NET', 'Swift', 'Kotlin', 'Linux', 'Git', 'Jira', 'Google Ads', 'Photoshop', 'Machine Learning', 'English']
const skillsFrom = (tags, text) => {
	const out = new Set((tags || []).map(t => String(t).trim()).filter(t => t && t.length < 28))
	for (const w of SKILL_WORDS) if (new RegExp(`\\b${w.replace(/[.+#]/g, m => '\\' + m)}\\b`, 'i').test(text)) out.add(w)
	return [...out].slice(0, 8)
}

function normaliseExternal({ id, title, company, location, tags, description, url, source, posted, employment, salary }) {
	const text = `${title} ${(tags || []).join(' ')}`
	const [level, minYears] = levelOf(title)
	const desc = stripHtml(description)
	return {
		id,
		title: String(title).trim(),
		company: String(company || '').trim() || 'Şirkət göstərilməyib',
		sector: sectorOf(text),
		city: location ? `Uzaqdan · ${String(location).slice(0, 60)}` : 'Uzaqdan',
		level,
		minYears,
		education: 'Bakalavr',
		languages: ['İngilis dili'],
		skills: skillsFrom(tags, `${title} ${desc.slice(0, 3000)}`),
		traits: TRAIT_HINTS.filter(([re]) => re.test(text)).map(([, t]) => t).slice(0, 3),
		riasec: (RIASEC_HINTS.find(([re]) => re.test(text)) || [null, 'IC'])[1],
		salaryText: salary ? String(salary).slice(0, 60) : '',
		employment: employment || 'Tam ştat',
		summary: desc.split('\n').filter(l => l.length > 40).slice(0, 2).join(' ').slice(0, 400),
		description: desc.slice(0, 2400),
		url,
		source,
		posted: posted || new Date().toISOString(),
		sample: false,
		external: true
	}
}

async function getJson(url) {
	const ctrl = new AbortController()
	const t = setTimeout(() => ctrl.abort(), 20000)
	try {
		const r = await fetch(url, { signal: ctrl.signal, headers: { 'user-agent': 'TalentScore/1.0 (+jobs feed)', accept: 'application/json' } })
		if (!r.ok) throw new Error(`HTTP ${r.status}`)
		return await r.json()
	} finally {
		clearTimeout(t)
	}
}

async function fromArbeitnow() {
	const data = await getJson('https://www.arbeitnow.com/api/job-board-api')
	return (data.data || [])
		.filter(j => j.remote)
		.slice(0, 40)
		.map(j =>
			normaliseExternal({
				id: `an-${j.slug}`,
				title: j.title,
				company: j.company_name,
				location: j.location,
				tags: j.tags,
				description: j.description,
				url: j.url,
				source: 'Arbeitnow',
				posted: j.created_at ? new Date(j.created_at * 1000).toISOString() : undefined,
				employment: (j.job_types || []).some(t => /part/i.test(t)) ? 'Yarım ştat' : 'Tam ştat'
			})
		)
}

// Deterministic daily pick so every visitor sees the same sample set for a given day.
function seeded(seed) {
	let h = 2166136261
	for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
	return () => {
		h = Math.imul(h ^ (h >>> 15), 2246822507)
		h = Math.imul(h ^ (h >>> 13), 3266489909)
		return ((h ^= h >>> 16) >>> 0) / 4294967296
	}
}

async function sampleForDay(day) {
	const all = JSON.parse(await readFile(join(HERE, 'sample-vacancies.json'), 'utf8'))
	const rnd = seeded(day)
	const pool = [...all].sort(() => rnd() - 0.5).slice(0, SAMPLES_PER_DAY)
	return pool.map(v => ({
		...v,
		id: `${v.id}-${day.replace(/-/g, '')}`,
		baseId: v.id,
		source: 'Talent Score nümunə bazası',
		posted: `${day}T06:00:00+04:00`,
		sample: true,
		external: false
	}))
}

export function createJobFeed(dataDir) {
	const dir = join(dataDir, 'jobs')
	const indexFile = join(dir, 'index.json')
	let state = null // { updatedAt, day, sources: [], jobs: { id: job } }
	let running = null

	async function load() {
		if (state) return state
		try {
			state = JSON.parse(await readFile(indexFile, 'utf8'))
		} catch {
			state = { updatedAt: null, day: null, sources: [], jobs: {} }
		}
		return state
	}

	async function refresh(reason = 'schedule') {
		if (running) return running
		running = (async () => {
			const s = await load()
			const day = bakuDate()
			const sources = []
			const incoming = []
			for (const [name, fn, real] of [
				['Arbeitnow', fromArbeitnow, true],
				['Talent Score nümunə bazası', () => sampleForDay(day), false]
			]) {
				try {
					const list = await fn()
					incoming.push(...list)
					sources.push({ name, real, count: list.length, ok: true })
				} catch (err) {
					sources.push({ name, real, count: 0, ok: false, error: String(err?.message || err).slice(0, 120) })
				}
			}
			let added = 0
			for (const j of incoming) {
				if (!s.jobs[j.id]) {
					s.jobs[j.id] = { ...j, firstSeen: day }
					added++
				} else s.jobs[j.id] = { ...j, firstSeen: s.jobs[j.id].firstSeen }
			}
			const cutoff = bakuDate(new Date(Date.now() - KEEP_DAYS * 86400_000))
			for (const [id, j] of Object.entries(s.jobs)) if (j.firstSeen < cutoff) delete s.jobs[id]
			s.updatedAt = new Date().toISOString()
			s.day = day
			s.sources = sources
			await mkdir(dir, { recursive: true })
			await writeFile(indexFile, JSON.stringify(s))
			console.log(`jobs feed ${reason}: ${added} new, ${Object.keys(s.jobs).length} kept`, sources.map(x => `${x.name}=${x.ok ? x.count : 'error'}`).join(' '))
			return s
		})().finally(() => {
			running = null
		})
		return running
	}

	function nextRunAt(now = new Date()) {
		// 06:00 Baku = 02:00 UTC
		const t = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 6 - BAKU_OFFSET_H, 0, 0))
		if (t <= now) t.setUTCDate(t.getUTCDate() + 1)
		return t
	}

	function schedule() {
		const at = nextRunAt()
		setTimeout(() => {
			refresh().catch(e => console.error('jobs feed failed', e?.message)).finally(schedule)
		}, at.getTime() - Date.now())
	}

	async function start() {
		const s = await load()
		if (s.day !== bakuDate()) refresh('startup').catch(e => console.error('jobs feed failed', e?.message))
		schedule()
	}

	async function feed() {
		let s = await load()
		if (!s.day) s = await refresh('first request')
		const jobs = Object.values(s.jobs).sort((a, b) => (a.firstSeen === b.firstSeen ? String(b.posted).localeCompare(String(a.posted)) : b.firstSeen.localeCompare(a.firstSeen)))
		return { today: bakuDate(), day: s.day, updatedAt: s.updatedAt, nextUpdate: nextRunAt().toISOString(), sources: s.sources, jobs }
	}

	return { start, feed, refresh }
}
