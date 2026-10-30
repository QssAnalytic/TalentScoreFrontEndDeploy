import { EnneaQuestion, EnneaType } from 'tests/types'
import { EnneaResult } from 'tests/store'

export const WINGS: Record<number, [EnneaType, EnneaType]> = {
	1: [9, 2],
	2: [1, 3],
	3: [2, 4],
	4: [3, 5],
	5: [4, 6],
	6: [5, 7],
	7: [6, 8],
	8: [7, 9],
	9: [8, 1]
}

const CENTERS: Record<string, EnneaType[]> = { gut: [8, 9, 1], heart: [2, 3, 4], head: [5, 6, 7] }

// Type score = mean agreement (1–5) rescaled to 0–100. The highest type wins;
// the wing is the higher-scoring neighbour.
export function scoreEnnea(questions: EnneaQuestion[], answers: Record<string, number>): EnneaResult {
	const scores: Record<string, number> = {}
	for (let t = 1; t <= 9; t++) {
		const vals = questions.filter(q => q.type === t).map(q => answers[q.id]).filter(Boolean) as number[]
		const mean = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 1
		scores[t] = Math.round(((mean - 1) / 4) * 100)
	}
	const type = Number(Object.entries(scores).sort((a, b) => b[1] - a[1] || Number(a[0]) - Number(b[0]))[0][0])
	const [w1, w2] = WINGS[type]
	const wing = scores[w1] >= scores[w2] ? w1 : w2
	const centers: Record<string, number> = {}
	Object.entries(CENTERS).forEach(([k, ts]) => {
		centers[k] = Math.round(ts.reduce((a, t) => a + scores[t], 0) / ts.length)
	})
	return { date: new Date().toISOString(), type, wing, scores, centers, answers }
}
