import { IqDomain, IqItem } from 'tests/types'
import { IqResult, shortId } from 'tests/store'

// Scoring model (Rasch / one-parameter IRT):
//   P(correct | θ) = 1 / (1 + e^-(θ - b)),  b = item difficulty mapped from 1…5 to −1.8…+1.8.
// θ is estimated by maximum a posteriori with a N(0,1) prior (so all-right / all-wrong stay finite),
// then reported on the IQ scale: IQ = 100 + 15·θ. Each domain gets its own index the same way.
// The items are not normed on a population sample, so the result is an estimate, not a clinical IQ.

const b = (d: number) => (d - 3) * 0.9

function mapTheta(items: IqItem[], answers: Record<string, string>) {
	let theta = 0
	for (let it = 0; it < 50; it++) {
		let grad = -theta // prior N(0,1)
		let hess = -1
		items.forEach(item => {
			const p = 1 / (1 + Math.exp(-(theta - b(item.difficulty))))
			const x = answers[item.id] === item.answer ? 1 : 0
			grad += x - p
			hess -= p * (1 - p)
		})
		const step = grad / hess
		theta -= step
		if (Math.abs(step) < 1e-6) break
	}
	return Math.max(-3.5, Math.min(3.5, theta))
}

// Standard normal CDF (Abramowitz–Stegun 7.1.26).
export function phi(z: number) {
	const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2)
	const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-(z * z) / 2)
	return z >= 0 ? (1 + y) / 2 : (1 - y) / 2
}

export function iqBand(iq: number) {
	if (iq >= 130) return 'Çox yüksək'
	if (iq >= 120) return 'Yüksək'
	if (iq >= 110) return 'Ortadan yuxarı'
	if (iq >= 90) return 'Orta'
	if (iq >= 80) return 'Ortadan aşağı'
	return 'Aşağı'
}

export const IQ_BANDS = [
	{ min: 0, max: 79, label: 'Aşağı', color: '#C2410C' },
	{ min: 80, max: 89, label: 'Ortadan aşağı', color: '#EA9A3E' },
	{ min: 90, max: 109, label: 'Orta', color: '#E6C229' },
	{ min: 110, max: 119, label: 'Ortadan yuxarı', color: '#5CC26B' },
	{ min: 120, max: 129, label: 'Yüksək', color: '#08B89A' },
	{ min: 130, max: 160, label: 'Çox yüksək', color: '#038477' }
]

export const DOMAIN_LABEL: Record<IqDomain, string> = {
	verbal: 'Verbal',
	numerical: 'Rəqəmsal',
	logical: 'Məntiqi',
	spatial: 'Məkan (vizual)',
	memory: 'Yaddaş'
}

export const DOMAIN_DESC: Record<IqDomain, string> = {
	verbal: 'Söz ehtiyatı, anlayışlar arasındakı əlaqələri görmə, mətndən nəticə çıxarma.',
	numerical: 'Ədədlərlə düşünmə, ardıcıllıq qanunauyğunluqları, faiz və nisbət hesabı.',
	logical: 'Deduktiv düşünmə, qaydaları tapma və tətbiq etmə, şərtlərdən nəticə çıxarma.',
	spatial: 'Fiqur və nümunələri zehnən çevirmə, vizual qanunauyğunluqları tanıma.',
	memory: 'Qısamüddətli və işçi yaddaş: məlumatı yadda saxlayıb onunla işləmə.'
}

export function scoreIq(items: IqItem[], answers: Record<string, string>, seconds: number): IqResult {
	const theta = mapTheta(items, answers)
	const iq = Math.round(Math.max(55, Math.min(150, 100 + 15 * theta)))
	const domains: IqResult['domains'] = {}
	;(Object.keys(DOMAIN_LABEL) as IqDomain[]).forEach(d => {
		const its = items.filter(i => i.domain === d)
		if (!its.length) return
		const t = mapTheta(its, answers)
		domains[d] = {
			correct: its.filter(i => answers[i.id] === i.answer).length,
			total: its.length,
			index: Math.round(Math.max(55, Math.min(150, 100 + 15 * t)))
		}
	})
	return {
		date: new Date().toISOString(),
		iq,
		theta,
		percentile: Math.round(phi(theta) * 1000) / 10,
		band: iqBand(iq),
		domains,
		answers,
		correct: items.filter(i => answers[i.id] === i.answer).length,
		total: items.length,
		seconds,
		certificateId: shortId('IQ')
	}
}
