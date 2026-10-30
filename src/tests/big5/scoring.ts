import { Big5Domain, Big5Question, RiasecQuestion, RiasecType } from 'tests/types'
import { Big5Result, RiasecResult } from 'tests/store'

// Big Five: each answer 1–5, reversed for '-' items, averaged per domain and rescaled to 0–100.
export function scoreBig5(questions: Big5Question[], answers: Record<string, number>): Big5Result {
	const domains: Record<string, number> = {}
	;(['O', 'C', 'E', 'A', 'N'] as Big5Domain[]).forEach(d => {
		const vals = questions
			.filter(q => q.domain === d && answers[q.id])
			.map(q => (q.keyed === '+' ? answers[q.id] : 6 - answers[q.id]))
		const mean = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 3
		domains[d] = Math.round(((mean - 1) / 4) * 100)
	})
	return { date: new Date().toISOString(), domains, answers }
}

export const big5Level = (v: number): 'low' | 'mid' | 'high' => (v >= 65 ? 'high' : v <= 35 ? 'low' : 'mid')
export const levelWord = { low: 'Aşağı', mid: 'Orta', high: 'Yüksək' }

// RIASEC: mean liking per type → 0–100; the Holland code is the three highest letters.
export function scoreRiasec(questions: RiasecQuestion[], answers: Record<string, number>): RiasecResult {
	const scores: Record<string, number> = {}
	const order: RiasecType[] = ['R', 'I', 'A', 'S', 'E', 'C']
	order.forEach(t => {
		const vals = questions.filter(q => q.type === t && answers[q.id]).map(q => answers[q.id])
		const mean = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 1
		scores[t] = Math.round(((mean - 1) / 4) * 100)
	})
	const code = [...order].sort((a, b) => scores[b] - scores[a] || order.indexOf(a) - order.indexOf(b)).slice(0, 3).join('')
	return { date: new Date().toISOString(), scores, code, answers }
}
