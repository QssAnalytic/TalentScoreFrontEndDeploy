import { IqDomain } from 'tests/types'
import { IqResult, UserResults, talentPercent } from 'tests/store'
import { DOMAIN_LABEL } from 'tests/iq/scoring'
import { MBTI_TYPES } from 'tests/mbti/data'
import { ENNEA_TYPES } from 'tests/enneagram/data'

// Career directions with the cognitive profile each one leans on, the majors that lead there,
// and keywords used to recognise the same direction in the MBTI / Enneagram career lists.
export interface CareerDirection {
	id: string
	name: string
	field: string
	majors: string[]
	weights: Partial<Record<IqDomain, number>> // sums to 1
	talent?: Partial<Record<'education' | 'language' | 'special' | 'sport' | 'work' | 'program', number>>
	keywords: string[]
	minIq: number // typical lower bound for comfortable entry into the field
}

export const CAREERS: CareerDirection[] = [
	{ id: 'software', name: 'Proqram mühəndisi', field: 'İnformasiya texnologiyaları', majors: ['Kompüter elmləri', 'Proqram mühəndisliyi', 'İnformasiya texnologiyaları'], weights: { logical: 0.4, numerical: 0.25, spatial: 0.15, memory: 0.2 }, talent: { program: 0.6, education: 0.4 }, keywords: ['proqram', 'developer', 'tərtibatçı', 'yazılım'], minIq: 105 },
	{ id: 'data', name: 'Data analitik / Data scientist', field: 'Analitika', majors: ['Statistika', 'Tətbiqi riyaziyyat', 'Data elmi', 'İqtisadiyyat'], weights: { numerical: 0.4, logical: 0.35, verbal: 0.1, memory: 0.15 }, talent: { program: 0.5, education: 0.5 }, keywords: ['data', 'analitik', 'statistik'], minIq: 108 },
	{ id: 'engineer', name: 'Mühəndis (mexanika, elektrik, inşaat)', field: 'Mühəndislik', majors: ['Mexanika mühəndisliyi', 'Elektrik mühəndisliyi', 'İnşaat mühəndisliyi'], weights: { spatial: 0.35, numerical: 0.35, logical: 0.3 }, talent: { education: 0.7, program: 0.3 }, keywords: ['mühəndis'], minIq: 105 },
	{ id: 'architect', name: 'Memar', field: 'Memarlıq və dizayn', majors: ['Memarlıq', 'Şəhərsalma', 'Dizayn'], weights: { spatial: 0.55, numerical: 0.15, logical: 0.15, verbal: 0.15 }, talent: { special: 0.5, education: 0.5 }, keywords: ['memar'], minIq: 105 },
	{ id: 'designer', name: 'Qrafik / UX dizayner', field: 'Dizayn', majors: ['Qrafik dizayn', 'İnteraktiv dizayn', 'Təsviri incəsənət'], weights: { spatial: 0.5, verbal: 0.2, logical: 0.15, memory: 0.15 }, talent: { special: 0.6, program: 0.4 }, keywords: ['dizayn'], minIq: 95 },
	{ id: 'finance', name: 'Maliyyə analitiki / Auditor', field: 'Maliyyə', majors: ['Maliyyə', 'Mühasibat uçotu və audit', 'Bank işi'], weights: { numerical: 0.5, logical: 0.3, memory: 0.2 }, talent: { education: 0.6, program: 0.4 }, keywords: ['maliyyə', 'audit', 'mühasib', 'bank', 'investisiya'], minIq: 105 },
	{ id: 'actuary', name: 'Aktuari / Risk analitiki', field: 'Maliyyə və sığorta', majors: ['Riyaziyyat', 'Aktuar riyaziyyatı', 'Statistika'], weights: { numerical: 0.55, logical: 0.35, memory: 0.1 }, talent: { education: 1 }, keywords: ['aktuar', 'risk'], minIq: 115 },
	{ id: 'researcher', name: 'Elmi tədqiqatçı', field: 'Elm', majors: ['Fizika', 'Kimya', 'Biologiya', 'Riyaziyyat'], weights: { logical: 0.35, numerical: 0.25, verbal: 0.2, memory: 0.2 }, talent: { education: 1 }, keywords: ['tədqiqat', 'alim', 'elmi'], minIq: 115 },
	{ id: 'doctor', name: 'Həkim', field: 'Səhiyyə', majors: ['Müalicə işi', 'Stomatologiya', 'Əczaçılıq'], weights: { memory: 0.3, logical: 0.3, verbal: 0.2, numerical: 0.2 }, talent: { education: 0.8, language: 0.2 }, keywords: ['həkim', 'tibb', 'cərrah', 'stomatoloq'], minIq: 110 },
	{ id: 'lawyer', name: 'Hüquqşünas', field: 'Hüquq', majors: ['Hüquqşünaslıq', 'Beynəlxalq hüquq'], weights: { verbal: 0.5, logical: 0.35, memory: 0.15 }, talent: { education: 0.6, language: 0.4 }, keywords: ['hüquq', 'vəkil', 'hakim', 'prokuror'], minIq: 105 },
	{ id: 'journalist', name: 'Jurnalist / Kontent müəllifi', field: 'Media', majors: ['Jurnalistika', 'Filologiya', 'Kütləvi kommunikasiya'], weights: { verbal: 0.6, memory: 0.2, logical: 0.2 }, talent: { language: 0.7, special: 0.3 }, keywords: ['jurnalist', 'yazıçı', 'redaktor', 'kontent', 'müəllif'], minIq: 98 },
	{ id: 'translator', name: 'Tərcüməçi / Dilçi', field: 'Dillər', majors: ['Tərcümə', 'Xarici dil və ədəbiyyat', 'Dilçilik'], weights: { verbal: 0.6, memory: 0.3, logical: 0.1 }, talent: { language: 1 }, keywords: ['tərcümə', 'dilçi', 'linqvist'], minIq: 98 },
	{ id: 'diplomat', name: 'Diplomat / Beynəlxalq münasibətlər üzrə mütəxəssis', field: 'Dövlət və beynəlxalq əlaqələr', majors: ['Beynəlxalq münasibətlər', 'Regionşünaslıq', 'Politologiya'], weights: { verbal: 0.5, logical: 0.3, memory: 0.2 }, talent: { language: 0.7, education: 0.3 }, keywords: ['diplomat', 'beynəlxalq'], minIq: 105 },
	{ id: 'teacher', name: 'Müəllim / Təlimçi', field: 'Təhsil', majors: ['Pedaqogika', 'İxtisas fənni üzrə müəllimlik'], weights: { verbal: 0.45, memory: 0.2, logical: 0.2, numerical: 0.15 }, talent: { education: 0.6, language: 0.4 }, keywords: ['müəllim', 'təlimçi', 'pedaqoq', 'mentor'], minIq: 95 },
	{ id: 'psychologist', name: 'Psixoloq / HR mütəxəssisi', field: 'İnsan resursları və psixologiya', majors: ['Psixologiya', 'İnsan resurslarının idarə edilməsi'], weights: { verbal: 0.5, logical: 0.25, memory: 0.25 }, talent: { education: 0.6, language: 0.4 }, keywords: ['psixoloq', 'hr', 'insan resurs', 'kouç', 'məsləhətçi'], minIq: 100 },
	{ id: 'marketing', name: 'Marketoloq / Brend meneceri', field: 'Marketinq', majors: ['Marketinq', 'Biznesin idarə edilməsi', 'Reklam və PR'], weights: { verbal: 0.4, numerical: 0.25, spatial: 0.15, logical: 0.2 }, talent: { language: 0.5, program: 0.2, work: 0.3 }, keywords: ['marketinq', 'marketoloq', 'brend', 'reklam', 'pr', 'satış'], minIq: 98 },
	{ id: 'manager', name: 'Layihə meneceri', field: 'İdarəetmə', majors: ['Menecment', 'Biznesin idarə edilməsi', 'Sənaye mühəndisliyi'], weights: { logical: 0.35, verbal: 0.3, numerical: 0.2, memory: 0.15 }, talent: { work: 0.6, education: 0.4 }, keywords: ['menecer', 'layihə', 'rəhbər', 'idarə'], minIq: 102 },
	{ id: 'entrepreneur', name: 'Sahibkar / Biznes inkişafı', field: 'Biznes', majors: ['Biznesin idarə edilməsi', 'İqtisadiyyat', 'Sahibkarlıq'], weights: { logical: 0.3, verbal: 0.3, numerical: 0.3, memory: 0.1 }, talent: { work: 0.7, language: 0.3 }, keywords: ['sahibkar', 'biznes', 'startap'], minIq: 100 },
	{ id: 'pilot', name: 'Pilot / Hava hərəkəti dispetçeri', field: 'Aviasiya', majors: ['Aviasiya', 'Uçuş istismarı', 'Aerokosmik mühəndislik'], weights: { spatial: 0.35, memory: 0.3, numerical: 0.2, logical: 0.15 }, talent: { sport: 0.4, education: 0.6 }, keywords: ['pilot', 'dispetçer', 'aviasiya'], minIq: 108 },
	{ id: 'cyber', name: 'Kibertəhlükəsizlik mütəxəssisi', field: 'İnformasiya texnologiyaları', majors: ['İnformasiya təhlükəsizliyi', 'Kompüter elmləri'], weights: { logical: 0.45, memory: 0.2, numerical: 0.2, spatial: 0.15 }, talent: { program: 0.8, education: 0.2 }, keywords: ['kiber', 'təhlükəsizlik'], minIq: 108 },
	{ id: 'coach', name: 'İdman məşqçisi / İdman menecmenti', field: 'İdman', majors: ['Bədən tərbiyəsi və idman', 'İdman menecmenti'], weights: { spatial: 0.3, memory: 0.25, verbal: 0.25, logical: 0.2 }, talent: { sport: 0.8, work: 0.2 }, keywords: ['məşqçi', 'idman', 'trener'], minIq: 90 },
	{ id: 'artist', name: 'Musiqiçi / Rəssam / Aktyor', field: 'İncəsənət', majors: ['Musiqi', 'Təsviri sənət', 'Aktyorluq sənəti'], weights: { spatial: 0.35, memory: 0.3, verbal: 0.35 }, talent: { special: 1 }, keywords: ['musiqi', 'rəssam', 'aktyor', 'sənət', 'yaradıcı'], minIq: 90 }
]

export interface RankedCareer {
	career: CareerDirection
	score: number // 0–100
	reasons: string[]
}

function iqFit(c: CareerDirection, iq: IqResult) {
	let s = 0
	Object.entries(c.weights).forEach(([d, w]) => {
		const idx = iq.domains[d]?.index ?? iq.iq
		s += (w || 0) * idx
	})
	// Weighted domain index, softly penalised when the overall score is far under the typical entry level.
	const gap = Math.max(0, c.minIq - iq.iq)
	return s - gap * 0.6
}

function strongestDomains(c: CareerDirection, iq: IqResult) {
	return Object.entries(c.weights)
		.sort((a, b) => (b[1] || 0) - (a[1] || 0))
		.slice(0, 2)
		.map(([d]) => `${DOMAIN_LABEL[d as IqDomain]} ${iq.domains[d]?.index ?? '—'}`)
}

export function rankByIq(iq: IqResult, n = 6): RankedCareer[] {
	return CAREERS.map(c => {
		const raw = iqFit(c, iq)
		return { career: c, score: Math.round(Math.max(0, Math.min(100, ((raw - 70) / 60) * 100))), reasons: [`Əsas tələb olunan bacarıqlar: ${strongestDomains(c, iq).join(', ')}`] }
	})
		.sort((a, b) => b.score - a.score)
		.slice(0, n)
}

const norm = (s: string) => s.toLocaleLowerCase('az')
const listMentions = (list: string[] | undefined, c: CareerDirection) => !!list?.some(item => c.keywords.some(k => norm(item).includes(k)))

const talentKey: Record<string, string> = {
	education: 'education',
	language: 'language',
	special: 'special',
	sport: 'sport',
	work: 'work',
	program: 'program'
}

// Combined ranking: every completed test contributes; the more tests agree on a direction, the higher it ranks.
export function rankCombined(r: UserResults, n = 8): RankedCareer[] {
	const mbti = r.mbti ? MBTI_TYPES[r.mbti.code] : undefined
	const ennea = r.ennea ? ENNEA_TYPES[r.ennea.type] : undefined
	return CAREERS.map(c => {
		let total = 0
		let weight = 0
		const reasons: string[] = []
		if (r.iq) {
			const fit = Math.max(0, Math.min(1, (iqFit(c, r.iq) - 70) / 60))
			total += fit * 0.4
			weight += 0.4
			if (fit >= 0.6) reasons.push(`IQ profili: ${strongestDomains(c, r.iq).join(', ')}`)
		}
		if (r.talent?.data && c.talent) {
			let s = 0
			Object.entries(c.talent).forEach(([k, w]) => {
				s += (w || 0) * talentPercent(r.talent!.data[talentKey[k]]?.score)
			})
			total += (s / 100) * 0.25
			weight += 0.25
			if (s >= 60) reasons.push('Təhsil və bacarıq balları bu sahəni dəstəkləyir')
		}
		if (mbti) {
			const hit = listMentions(mbti.careers, c)
			total += (hit ? 1 : 0.35) * 0.2
			weight += 0.2
			if (hit) reasons.push(`${r.mbti!.code} tipinə uyğun sahələr arasındadır`)
		}
		if (ennea) {
			const hit = listMentions(ennea.careers, c)
			total += (hit ? 1 : 0.35) * 0.15
			weight += 0.15
			if (hit) reasons.push(`Enneaqram ${r.ennea!.type} tipinin motivasiyasına uyğundur`)
		}
		return { career: c, score: weight ? Math.round((total / weight) * 100) : 0, reasons }
	})
		.sort((a, b) => b.score - a.score || b.reasons.length - a.reasons.length)
		.slice(0, n)
}
