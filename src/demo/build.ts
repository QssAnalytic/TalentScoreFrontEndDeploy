// Turns a persona's description into the same data a real person would produce:
// answers to every question, scored by the site's own scoring code, plus a career
// profile and applications. Answers are generated from the persona's target
// results with a fixed random seed, so a persona always looks the same.
import SAMPLE_VACANCIES from '../../jobs/sample-vacancies.json'
import { IQ_ITEMS } from 'tests/iq/data'
import { scoreIq } from 'tests/iq/scoring'
import { MBTI_QUESTIONS } from 'tests/mbti/data'
import { scoreMbti } from 'tests/mbti/scoring'
import { ENNEA_QUESTIONS } from 'tests/enneagram/data'
import { scoreEnnea } from 'tests/enneagram/scoring'
import { BIG5_QUESTIONS } from 'tests/big5/data'
import { RIASEC_QUESTIONS } from 'tests/riasec/data'
import { scoreBig5, scoreRiasec } from 'tests/big5/scoring'
import { imageToDataUrl, saveResults, UserResults } from 'tests/store'
import { IqDomain } from 'tests/types'
import { bakuDay, saveCareer } from 'jobs/store'
import { matchJob } from 'jobs/match'
import { coverLetter } from 'jobs/letters'
import { PLANS } from 'jobs/billing'
import { AppEvent, Application, CareerState, Job, JobProfile } from 'jobs/types'
import { AVATARS } from './avatars'
import { Persona } from './types'

function rng(seed: string) {
	let h = 2166136261
	for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
	return () => {
		h = Math.imul(h ^ (h >>> 15), 2246822507)
		h = Math.imul(h ^ (h >>> 13), 3266489909)
		return ((h ^= h >>> 16) >>> 0) / 4294967296
	}
}
const clamp = (v: number, lo = 1, hi = 5) => Math.max(lo, Math.min(hi, v))
const daysAgo = (n: number, hour = 10) => {
	const d = new Date(Date.now() - n * 86400_000)
	d.setHours(hour, Math.floor((n * 37) % 60), 0, 0)
	// "Today at 10:00" may still be ahead early in the morning: never date things in the future.
	return new Date(Math.min(d.getTime(), Date.now() - (n <= 0 ? 3 : 0) * 3600_000)).toISOString()
}

// A 1–5 answer whose expected value matches a 0–100 target.
function likert(target: number, r: () => number, spread = 0.9) {
	const mean = 1 + (4 * target) / 100
	return clamp(Math.round(mean + (r() - 0.5) * 2 * spread))
}

function genBig5(p: Persona) {
	const r = rng(p.id + 'b5')
	const a: Record<string, number> = {}
	BIG5_QUESTIONS.forEach(q => {
		const v = likert(p.big5[q.domain], r)
		a[q.id] = q.keyed === '+' ? v : 6 - v
	})
	return scoreBig5(BIG5_QUESTIONS, a)
}

function genRiasec(p: Persona) {
	const r = rng(p.id + 'ri')
	const a: Record<string, number> = {}
	RIASEC_QUESTIONS.forEach(q => (a[q.id] = likert(p.riasec[q.type], r)))
	return scoreRiasec(RIASEC_QUESTIONS, a)
}

function genMbti(p: Persona) {
	const axes = ['EI', 'SN', 'TF', 'JP']
	for (let attempt = 0; attempt < 30; attempt++) {
		const r = rng(`${p.id}mb${attempt}`)
		const a: Record<string, number> = {}
		MBTI_QUESTIONS.forEach(q => {
			const i = axes.indexOf(q.axis)
			const pole = p.mbti[i]
			const share = p.mbtiClarity[i] // % toward the person's pole
			const toward = q.keyed === pole ? share : 100 - share
			a[q.id] = likert(toward, r, attempt > 10 ? 0.6 : 0.9)
		})
		const res = scoreMbti(MBTI_QUESTIONS, a)
		if (res.code === p.mbti) return res
	}
	// Fall back to exact answers (no noise).
	const a: Record<string, number> = {}
	MBTI_QUESTIONS.forEach(q => {
		const i = axes.indexOf(q.axis)
		a[q.id] = q.keyed === p.mbti[i] ? 4 : 2
	})
	return scoreMbti(MBTI_QUESTIONS, a)
}

function genEnnea(p: Persona) {
	for (let attempt = 0; attempt < 30; attempt++) {
		const r = rng(`${p.id}en${attempt}`)
		const target: Record<number, number> = {}
		for (let t = 1; t <= 9; t++) target[t] = 22 + Math.round(r() * 38)
		target[p.ennea.type] = 86
		target[p.ennea.wing] = 70
		const a: Record<string, number> = {}
		ENNEA_QUESTIONS.forEach(q => (a[q.id] = likert(target[q.type], r, 0.7)))
		const res = scoreEnnea(ENNEA_QUESTIONS, a)
		if (res.type === p.ennea.type && res.wing === p.ennea.wing) return res
	}
	const a: Record<string, number> = {}
	ENNEA_QUESTIONS.forEach(q => (a[q.id] = q.type === p.ennea.type ? 5 : q.type === p.ennea.wing ? 4 : 2))
	return scoreEnnea(ENNEA_QUESTIONS, a)
}

function genIq(p: Persona) {
	const best = { diff: 999, res: null as ReturnType<typeof scoreIq> | null }
	for (let attempt = 0; attempt < 25; attempt++) {
		const r = rng(`${p.id}iq${attempt}`)
		const answers: Record<string, string> = {}
		IQ_ITEMS.forEach(it => {
			const theta = (p.iq - 100 + (p.iqTilt?.[it.domain as IqDomain] || 0)) / 15
			const pc = 1 / (1 + Math.exp(-(theta - (it.difficulty - 3) * 0.9)))
			if (r() < pc) answers[it.id] = it.answer
			else {
				const wrong = it.options.filter(o => o.id !== it.answer)
				answers[it.id] = wrong[Math.floor(r() * wrong.length)].id
			}
		})
		const res = scoreIq(IQ_ITEMS, answers, 1500 + Math.round(r() * 900))
		const diff = Math.abs(res.iq - p.iq)
		if (diff < best.diff) {
			best.diff = diff
			best.res = res
		}
		if (diff <= 2) break
	}
	return best.res!
}

const TALENT_TEXT: Record<string, string> = { education: 'Education', language: 'Language skills', special: 'Special talent', sport: 'Sport skills', work: 'Work experience', program: 'Program skills' }
export const talentWord = (v: number) => (v >= 85 ? 'Çox yüksək' : v >= 65 ? 'Yüksək' : v >= 40 ? 'Orta' : v >= 20 ? 'Aşağı' : 'Məhdud')

// Answers in the same shape the talent-test stages store, so the CV builder reads them.
export function talentAnswers(p: Persona) {
	const ans = (answer: string) => ({ answer })
	return [
		{ name: 'umumi-suallar', formData: { occupation: ans(p.occupation), education: ans(p.education[p.education.length - 1]?.level || 'Orta'), schoolPerformance: ans(p.schoolPerformance) } },
		{
			name: 'orta-texniki-ve-ali-tehsil-suallari',
			formData: {
				education: p.education.map(e => ({ tehsil: ans(e.level), university: e.university, specialty: ans(e.specialty), country: ans(e.country), date: { start: e.start, end: e.end }, admission: ans(e.admission), examScore: e.examScore }))
			}
		},
		{ name: 'olimpiada-suallari', formData: p.olympiad ? { wonOlympics: ans('Bəli'), subjectOlympiad: ans(p.olympiad.subject), highestOlympiad: ans(p.olympiad.level), rankOlympiad: ans(p.olympiad.rank) } : { wonOlympics: ans('Xeyr') } },
		{ name: 'dil-bilikleri-substage', formData: { languageSkills: p.languages.map(l => ({ language: ans(l.language), langLevel: ans(l.level), engLangCert: l.certificate ? ans(l.certificate) : undefined })) } },
		{ name: 'xususi-bacariqlar-substage', formData: { skills: p.special.map(s => ({ answer: s.skill, level: s.level, achievement: s.achievement })) } },
		{ name: 'idman-substage', formData: { sports: p.sports.map(s => ({ sport: ans(s.sport), level: ans(s.level), result: s.result })) } },
		{
			name: 'is-tecrubesi-substage',
			formData: {
				experiences: p.work.map(w => ({
					profession: w.profession,
					company: w.company,
					startDate: w.start,
					endDate: w.end || '',
					currentWorking: !w.end,
					workingActivityForm: ans(w.form),
					degreeOfProfes: ans(w.level)
				}))
			}
		},
		{ name: 'proqram-bilikleri-substage', formData: { programSkills: [{ whichLevel: p.programs.map(x => ({ name: x.name, value: ans(x.level) })) }] } }
	]
}

const STEP_NOTES: Record<string, string> = {
	viewed: 'İşəgötürən müraciətinizə baxdı.',
	test: 'Sizi onlayn qiymətləndirmə tapşırığına dəvət edirik.',
	interview: 'Sizi müsahibəyə dəvət edirik. Uyğun vaxtlarınızı bildirin.',
	offer: 'Sizə iş təklifi göndəririk. Şərtlər əlavə olunub.',
	rejected: 'Təşəkkür edirik, bu mərhələdə başqa namizədlərlə davam edirik.'
}

function events(status: string, created: string, note?: string): AppEvent[] {
	const path: Record<string, string[]> = { sent: [], viewed: ['viewed'], test: ['viewed', 'test'], interview: ['viewed', 'interview'], offer: ['viewed', 'interview', 'offer'], rejected: ['viewed', 'rejected'] }
	const t0 = new Date(created).getTime()
	const span = Math.max(2 * 3600_000, Date.now() - t0 - 30 * 60_000) // replies fall between applying and now
	const steps = path[status] || []
	return steps.map((s, i) => ({ at: new Date(t0 + (span * (i + 1)) / steps.length).toISOString(), status: s as AppEvent['status'], note: i === steps.length - 1 && note ? note : STEP_NOTES[s] }))
}

export function buildPersona(p: Persona) {
	const results: UserResults = {}
	const done = (t: string) => p.completed.includes(t as any)
	let day = 40
	if (done('talent'))
		results.talent = {
			data: Object.fromEntries(Object.entries(p.talent).map(([k, v]) => [k, { text: TALENT_TEXT[k], score: v / 100, result: talentWord(v) }])),
			report_key: `DEMO${p.id.toUpperCase()}`,
			date: daysAgo((day -= 4)),
			answers: talentAnswers(p)
		}
	else results.talent = undefined
	if (done('iq')) results.iq = { ...genIq(p), date: daysAgo((day -= 4)), certificateId: `IQ-DEMO${p.id.toUpperCase()}` }
	if (done('mbti')) results.mbti = { ...genMbti(p), date: daysAgo((day -= 3)) }
	if (done('ennea')) results.ennea = { ...genEnnea(p), date: daysAgo((day -= 3)) }
	if (done('big5')) results.big5 = { ...genBig5(p), date: daysAgo((day -= 3)) }
	if (done('riasec')) results.riasec = { ...genRiasec(p), date: daysAgo((day -= 3)) }

	const profile: JobProfile = {
		...p.jobProfile,
		skills: p.programs.map(x => x.name).concat(p.special.map(s => s.skill)),
		languages: p.languages.map(l => l.language),
		updatedAt: daysAgo(15)
	}
	const name = `${p.first_name} ${p.last_name}`
	const catalog = SAMPLE_VACANCIES as unknown as Job[]
	const applications: Application[] = p.applications
		.map((a, i) => {
			const base = catalog.find(v => v.id === a.vacancy)
			if (!base) return null
			const job: Job = { ...base, id: `${base.id}-demo`, baseId: base.id, source: 'Talent Score nümunə bazası', posted: daysAgo(a.daysAgo + 1), firstSeen: bakuDay(new Date(Date.now() - (a.daysAgo + 1) * 86400_000)), sample: true, external: false }
			const m = matchJob(job, profile, results)
			const createdAt = daysAgo(a.daysAgo, 9 + (i % 6))
			return {
				id: `A-${p.id}-${i + 1}`,
				job: { id: job.id, title: job.title, company: job.company, sector: job.sector, city: job.city, url: job.url, source: job.source, sample: true, external: false, level: job.level, salaryMin: job.salaryMin, salaryMax: job.salaryMax, salaryText: job.salaryText },
				match: m.score,
				mode: a.mode,
				createdAt,
				day: bakuDay(new Date(createdAt)),
				coverLetter: coverLetter(job, m, profile, results, { name, email: p.email }),
				events: events(a.status, createdAt, a.note),
				replySent: a.replySent ? daysAgo(Math.max(0, a.daysAgo - 1)) : undefined,
				interviewDone: a.interviewDone ? daysAgo(Math.max(0, a.daysAgo - 2)) : undefined,
				scripted: true,
				full: job
			} as Application
		})
		.filter(Boolean) as Application[]

	const career: CareerState = {
		profile,
		subscription:
			p.plan === 'none'
				? undefined
				: { plan: p.plan, active: true, since: daysAgo(20), renews: new Date(Date.now() + 10 * 86400_000).toISOString(), dailyLimit: PLANS[p.plan].dailyLimit, minMatch: 65, includeExternal: p.plan === 'pro' },
		purchases: [
			...(p.plan !== 'none' ? [{ id: `P-DEMO-${p.id}`, item: `plan:${p.plan}`, label: `${PLANS[p.plan].name} (1 ay)`, amount: PLANS[p.plan].price, date: daysAgo(20), card: '4242', testMode: true as const }] : []),
			...p.badges.map((b, i) => ({ id: `P-DEMO-${p.id}-B${i}`, item: `badge:${b}`, label: `${b} — təsdiqlənmiş nişan`, amount: 5, date: daysAgo(18), card: '4242', testMode: true as const }))
		],
		badges: Object.fromEntries(p.badges.map(b => [b, daysAgo(18)])),
		applications,
		lastAutoRun: bakuDay()
	}
	return { results, career }
}

// Writes the persona's results and career data into this browser.
export async function seedPersona(p: Persona) {
	const { results, career } = buildPersona(p)
	let photo = ''
	try {
		// Give the SVG a fixed size so it rasterises as a full square, not a 300×150 crop.
		const svg = AVATARS[p.id]?.replace(/<svg\b(?![^>]*\bwidth=)/, '<svg width="360" height="360"')
		if (svg) photo = await imageToDataUrl(new Blob([svg], { type: 'image/svg+xml' }), 360)
	} catch {
		/* no photo */
	}
	try {
		localStorage.removeItem(`ts_results::${p.email}`)
		localStorage.removeItem(`ts_career::${p.email}`)
	} catch {
		/* ignore */
	}
	saveResults(p.email, { ...results, photo, cv: undefined })
	saveCareer(p.email, career)
}
