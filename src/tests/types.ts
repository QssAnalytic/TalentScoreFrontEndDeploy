// Shared data formats for the IQ, MBTI-type and Enneagram tests.
// Question banks and report texts live in src/tests/<test>/data.ts and are plain data.

// ---------- IQ ----------
export type IqDomain = 'verbal' | 'numerical' | 'logical' | 'spatial' | 'memory'

export interface IqOption {
	id: string // 'a' | 'b' | ...
	label?: string // text option (Azerbaijani)
	figure?: string // inline <svg>…</svg> markup for a visual option
}

export interface IqItem {
	id: string // e.g. 'v01', 'n07', 's12'
	domain: IqDomain
	difficulty: 1 | 2 | 3 | 4 | 5 // 1 = very easy … 5 = very hard
	prompt: string // Azerbaijani question text
	figure?: string // inline <svg>…</svg> stem for visual items (matrix, series, rotation…)
	// Memory items: this content is shown first for `seconds`, then hidden before the question appears.
	memorize?: { content: string; seconds: number }
	options: IqOption[] // 4–6 options
	answer: string // id of the correct option
	explanation: string // one or two Azerbaijani sentences shown when reviewing results
}

// ---------- MBTI-type (16 types) ----------
export type MbtiPole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'
export type MbtiAxis = 'EI' | 'SN' | 'TF' | 'JP'

export interface MbtiQuestion {
	id: string
	axis: MbtiAxis
	text: string // a statement; answered on a 5-point agree scale
	keyed: MbtiPole // agreeing moves the score toward this pole
}

export interface MbtiPoleText {
	pole: MbtiPole
	title: string // e.g. 'Ekstraversiya'
	short: string // one line
	description: string // 2–3 sentences
}

export interface MbtiTypeProfile {
	code: string // 'INTJ'
	name: string // Azerbaijani nickname, e.g. 'Strateq'
	tagline: string // one sentence
	summary: string // 4–6 sentences
	strengths: string[] // 5–6
	weaknesses: string[] // 4–5
	communication: string // 3–4 sentences: how they communicate
	communicationTips: string[] // 3–4 tips for talking WITH this type / for them
	career: string // 3–4 sentences: what work suits them and why
	careers: string[] // 8–10 concrete professions
	majors: string[] // 5–6 university majors
	workStyle: string // 2–3 sentences: as a colleague / in teams
	leadership: string // 2–3 sentences
	relationships: string // 3–4 sentences: romantic and close relationships
	friendship: string // 2–3 sentences
	stress: string // 2–3 sentences: under stress
	growth: string[] // 4–5 concrete development recommendations
}

// ---------- Enneagram ----------
export type EnneaType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface EnneaQuestion {
	id: string
	type: EnneaType // agreeing raises this type's score
	text: string // a first-person statement, 5-point agree scale
}

export interface EnneaTypeProfile {
	type: EnneaType
	name: string // e.g. 'Mükəmməliyyətçi'
	tagline: string
	coreDesire: string
	coreFear: string
	summary: string // 4–6 sentences
	strengths: string[] // 5–6
	blindSpots: string[] // 4–5
	communication: string
	communicationTips: string[] // 3–4
	career: string
	careers: string[] // 8–10
	workStyle: string
	relationships: string
	stressDirection: EnneaType // disintegration line
	stress: string // behaviour under stress (moves toward stressDirection)
	growthDirection: EnneaType // integration line
	growth: string // behaviour when growing (moves toward growthDirection)
	growthTips: string[] // 4–5
	wings: { wing: EnneaType; name: string; description: string }[] // exactly the two adjacent wings
}

export interface EnneaCenter {
	id: 'gut' | 'heart' | 'head'
	name: string // 'Bədən (instinkt) mərkəzi'
	types: EnneaType[]
	description: string
}
