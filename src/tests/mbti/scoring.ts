import { MbtiAxis, MbtiPole, MbtiQuestion } from 'tests/types'
import { MbtiResult } from 'tests/store'

const POLES: Record<MbtiAxis, [MbtiPole, MbtiPole]> = {
	EI: ['E', 'I'],
	SN: ['S', 'N'],
	TF: ['T', 'F'],
	JP: ['J', 'P']
}

// Each answer 1–5 is centred to −2…+2 and signed toward the keyed pole.
// The axis total is turned into a 0–100 share for the first pole; the winning pole gets ≥50%.
export function scoreMbti(questions: MbtiQuestion[], answers: Record<string, number>): MbtiResult {
	const axes: MbtiResult['axes'] = {}
	let code = ''
	;(Object.keys(POLES) as MbtiAxis[]).forEach(axis => {
		const [a, b] = POLES[axis]
		const qs = questions.filter(q => q.axis === axis)
		let sum = 0
		let max = 0
		qs.forEach(q => {
			const v = answers[q.id]
			if (!v) return
			const centred = v - 3
			sum += q.keyed === a ? centred : -centred
			max += 2
		})
		const shareA = max ? 50 + (50 * sum) / max : 50
		// Ties go to the second pole (I, N, F, P) by convention.
		const pole = shareA > 50 ? a : b
		const percent = Math.round(pole === a ? shareA : 100 - shareA)
		axes[axis] = { pole, percent: Math.max(50, percent) }
		code += pole
	})
	return { date: new Date().toISOString(), code, axes, answers }
}

export function clarityLabel(percent: number) {
	if (percent >= 80) return 'çox aydın'
	if (percent >= 65) return 'aydın'
	if (percent >= 56) return 'orta'
	return 'zəif (balanslı)'
}
