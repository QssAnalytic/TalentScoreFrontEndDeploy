// Matching a person to a vacancy. The score (0–100) blends what the vacancy asks for
// (skills, experience, education, languages) with what the tests say about the person
// (work-style traits, career interests, cognitive score) and their own preferences.
import { UserResults } from 'tests/store'
import { Job, JobProfile, Trait } from './types'

export const TRAIT_LABEL: Record<Trait, string> = {
	analytical: 'analitik düşüncə',
	creative: 'yaradıcılıq',
	social: 'ünsiyyətcillik',
	leader: 'liderlik',
	organized: 'təşkilatçılıq',
	practical: 'praktiklik',
	calm: 'stressə davamlılıq',
	detail: 'dəqiqlik'
}

const EDU_RANK: Record<string, number> = { Orta: 1, Peşə: 2, Bakalavr: 3, Magistr: 4, Doktorantura: 5 }

const norm = (s: string) =>
	s
		.toLowerCase()
		.replace(/[—–-].*$/, '') // "Python — Orta" → "python"
		.replace(/[^a-z0-9əğıöüşç+#.]+/gi, ' ')
		.trim()

export function skillMatches(have: string[], need: string) {
	const n = norm(need)
	if (!n) return false
	return have.some(h => {
		const x = norm(h)
		return !!x && (x === n || (x.length > 2 && n.includes(x)) || (n.length > 2 && x.includes(n)))
	})
}

// 0–1 per trait, averaged over whichever tests the person has taken (0.5 when unknown).
export function traitScores(r: UserResults): Record<Trait, number> {
	const acc: Record<Trait, number[]> = { analytical: [], creative: [], social: [], leader: [], organized: [], practical: [], calm: [], detail: [] }
	const add = (t: Trait, v: number) => acc[t].push(Math.max(0, Math.min(1, v)))
	if (r.mbti) {
		const p = (axis: string, pole: string) => {
			const a = r.mbti!.axes[axis]
			if (!a) return 0.5
			return a.pole === pole ? a.percent / 100 : 1 - a.percent / 100
		}
		add('analytical', p('TF', 'T'))
		add('creative', p('SN', 'N'))
		add('social', p('EI', 'E'))
		add('organized', p('JP', 'J'))
		add('detail', (p('JP', 'J') + p('SN', 'S')) / 2)
		add('practical', p('SN', 'S'))
		add('leader', (p('EI', 'E') + p('TF', 'T') + p('JP', 'J')) / 3)
	}
	if (r.big5) {
		const d = (k: string) => (r.big5!.domains[k] ?? 50) / 100
		add('creative', d('O'))
		add('analytical', (d('O') + d('C')) / 2)
		add('organized', d('C'))
		add('detail', d('C'))
		add('social', (d('E') + d('A')) / 2)
		add('leader', (d('E') + d('C') + (1 - d('N'))) / 3)
		add('calm', 1 - d('N'))
	}
	if (r.riasec) {
		const d = (k: string) => (r.riasec!.scores[k] ?? 50) / 100
		add('practical', d('R'))
		add('analytical', d('I'))
		add('creative', d('A'))
		add('social', d('S'))
		add('leader', d('E'))
		add('organized', d('C'))
		add('detail', d('C'))
	}
	if (r.ennea) {
		const s = (t: number) => (r.ennea!.scores[t] ?? 50) / 100
		add('detail', s(1))
		add('social', s(2))
		add('leader', (s(3) + s(8)) / 2)
		add('creative', (s(4) + s(7)) / 2)
		add('analytical', s(5))
		add('organized', (s(1) + s(6)) / 2)
		add('calm', s(9))
	}
	const out = {} as Record<Trait, number>
	;(Object.keys(acc) as Trait[]).forEach(t => (out[t] = acc[t].length ? acc[t].reduce((a, b) => a + b, 0) / acc[t].length : 0.5))
	return out
}

// RIASEC letters → 0–1, from the interest test or estimated from the other tests.
function interestScores(r: UserResults, traits: Record<Trait, number>): Record<string, number> {
	if (r.riasec) return Object.fromEntries(Object.entries(r.riasec.scores).map(([k, v]) => [k, v / 100]))
	return { R: traits.practical, I: traits.analytical, A: traits.creative, S: traits.social, E: traits.leader, C: traits.organized }
}

export interface MatchResult {
	score: number
	parts: { key: string; label: string; value: number; weight: number }[]
	matchedSkills: string[]
	missingSkills: string[]
	reasons: string[]
	gaps: string[]
	confidence: 'aşağı' | 'orta' | 'yüksək'
}

export function matchJob(job: Job, profile: JobProfile | undefined, r: UserResults): MatchResult {
	const p: JobProfile = profile || { titles: [], sectors: [], cities: [], remoteOk: true, skills: [], languages: [], years: 0, education: 'Bakalavr', minSalary: 0 }
	const traits = traitScores(r)
	const interests = interestScores(r, traits)
	const reasons: string[] = []
	const gaps: string[] = []

	const need = job.skills || []
	const matchedSkills = need.filter(s => skillMatches(p.skills, s))
	const missingSkills = need.filter(s => !matchedSkills.includes(s))
	// Titles the person wants also count as relevant experience for the role.
	const titleHit = p.titles.some(t => t && (job.title.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(job.title.toLowerCase().split(' ')[0])))
	const skills = need.length ? Math.min(1, matchedSkills.length / Math.max(3, need.length * 0.8)) : 0.6
	if (matchedSkills.length) reasons.push(`Tələb olunan bacarıqlardan ${matchedSkills.length}-i sizdə var: ${matchedSkills.slice(0, 4).join(', ')}`)
	if (missingSkills.length) gaps.push(`Çatışmayan bacarıqlar: ${missingSkills.slice(0, 4).join(', ')}`)

	const exp = job.minYears <= p.years ? 1 : Math.max(0, 1 - (job.minYears - p.years) / Math.max(2, job.minYears))
	if (job.minYears > p.years) gaps.push(`${job.minYears} il təcrübə tələb olunur, sizdə ${p.years} il`)
	else if (job.minYears > 0) reasons.push(`Təcrübəniz (${p.years} il) tələbə uyğundur`)

	const edu = (EDU_RANK[p.education] || 3) >= (EDU_RANK[job.education] || 1) ? 1 : 0.4
	if (edu < 1) gaps.push(`Təhsil tələbi: ${job.education}`)

	const langNeed = job.languages || []
	const langHave = langNeed.filter(l => p.languages.some(x => norm(x).startsWith(norm(l).split(' ')[0])))
	const lang = langNeed.length ? langHave.length / langNeed.length : 1
	langNeed.filter(l => !langHave.includes(l)).forEach(l => gaps.push(`${l} bilikləri göstərilməyib`))

	const jt = job.traits || []
	const personality = jt.length ? jt.reduce((a, t) => a + (traits[t] ?? 0.5), 0) / jt.length : 0.6
	const strongTraits = jt.filter(t => (traits[t] ?? 0) >= 0.62)
	if (strongTraits.length) reasons.push(`Testlərinizə görə güclü tərəfləriniz bu rola uyğundur: ${strongTraits.map(t => TRAIT_LABEL[t]).join(', ')}`)
	const code = (job.riasec || '').split('')
	const interest = code.length ? code.reduce((a, c, i) => a + (interests[c] ?? 0.5) * (i === 0 ? 0.6 : 0.4), 0) : 0.6
	if (interest >= 0.65) reasons.push('Karyera maraqlarınız bu sahə ilə üst-üstə düşür')

	let cognitive = 0.7
	if (job.minIq && r.iq) {
		cognitive = r.iq.iq >= job.minIq ? 1 : Math.max(0.2, 1 - (job.minIq - r.iq.iq) / 20)
		if (r.iq.iq >= job.minIq) reasons.push(`IQ nəticəniz (${r.iq.iq}) rolun analitik tələblərinə cavab verir`)
	} else if (r.iq) cognitive = Math.min(1, 0.55 + (r.iq.iq - 85) / 60)

	const remote = /uzaqdan/i.test(job.city)
	const cityOk = !p.cities.length || p.cities.some(c => job.city.toLowerCase().includes(c.toLowerCase())) || (remote && p.remoteOk)
	const sectorOk = !p.sectors.length || p.sectors.includes(job.sector)
	const salaryOk = !p.minSalary || !job.salaryMax || job.salaryMax >= p.minSalary
	const prefs = ((cityOk ? 1 : 0) + (sectorOk ? 1 : 0.3) + (salaryOk ? 1 : 0.2) + (titleHit ? 1 : 0.5)) / 4
	if (!cityOk) gaps.push(`Yer: ${job.city}`)
	if (!salaryOk) gaps.push('Maaş gözləntinizdən aşağıdır')

	const parts = [
		{ key: 'skills', label: 'Bacarıqlar', value: titleHit ? Math.max(skills, 0.55) : skills, weight: 0.32 },
		{ key: 'experience', label: 'Təcrübə', value: exp, weight: 0.14 },
		{ key: 'education', label: 'Təhsil', value: edu, weight: 0.07 },
		{ key: 'languages', label: 'Dillər', value: lang, weight: 0.08 },
		{ key: 'personality', label: 'Şəxsiyyət uyğunluğu', value: personality, weight: 0.14 },
		{ key: 'interest', label: 'Maraqlar', value: interest, weight: 0.1 },
		{ key: 'cognitive', label: 'Analitik qabiliyyət', value: cognitive, weight: 0.07 },
		{ key: 'prefs', label: 'Seçimləriniz', value: prefs, weight: 0.08 }
	]
	const score = Math.round(parts.reduce((a, x) => a + x.value * x.weight, 0) * 100)
	const taken = [r.iq, r.mbti, r.ennea, r.big5, r.riasec].filter(Boolean).length + (profile?.skills.length ? 1 : 0)
	return { score, parts, matchedSkills, missingSkills, reasons, gaps, confidence: taken >= 4 ? 'yüksək' : taken >= 2 ? 'orta' : 'aşağı' }
}

export const matchTone = (s: number) => (s >= 75 ? 'text-qss-secondary' : s >= 60 ? 'text-[#B7791F]' : 'text-qss-base-300')
export const matchWord = (s: number) => (s >= 80 ? 'Çox uyğun' : s >= 70 ? 'Uyğun' : s >= 60 ? 'Qismən uyğun' : 'Zəif uyğun')
