// Extended report texts (Azerbaijani). Plain data, read by the detailed reports.
import { Big5Domain, IqDomain, RiasecType } from 'tests/types'

// Five proficiency levels, as on the CDS-ES ladder (top to bottom).
export type Level5 = 'expert' | 'advanced' | 'intermediate' | 'novice' | 'basic'

export interface LevelNarrative {
	title: string // short level headline, e.g. 'Ekspert səviyyə — yaşıdlarınızın ən güclü 10%-i'
	summary: string // 3–4 sentences, second person ("Siz")
	detail: string // 4–6 sentences: what this level looks like in practice
	strengths: string[] // 3–4 bullets
	risks: string[] // 2–3 bullets: what to watch out for at this level
	actions: string[] // 4–5 concrete next steps for this level
}

// ---------- Talent test (6 areas) ----------
export type TalentArea = 'education' | 'language' | 'special' | 'sport' | 'work' | 'program'

export interface TalentAreaContent {
	id: TalentArea
	name: string // 'Təhsil'
	what: string // 2–3 sentences: what the area measures
	how: string // 2–3 sentences: how the answers become a score (weights, comparison with peers of the same age)
	why: string // 2–3 sentences: why employers and universities care
	levels: Record<Level5, LevelNarrative>
	resources: string[] // 4–5 kinds of resources (no brand links), e.g. 'Beynəlxalq dil sertifikatı (IELTS/TOEFL) hazırlıq kursları'
	careerLink: string // 2 sentences: how this area connects to career choice
}

// ---------- IQ ----------
export interface IqDomainContent {
	id: IqDomain
	name: string
	what: string // 2–3 sentences
	everyday: string // 2–3 sentences: how it shows in daily life
	work: string // 2–3 sentences: where it matters at work and study
	levels: Record<Level5, LevelNarrative>
	exercises: string[] // 6 concrete training exercises
}

export interface IqBandContent {
	band: string // exactly one of: 'Çox yüksək' | 'Yüksək' | 'Ortadan yuxarı' | 'Orta' | 'Ortadan aşağı' | 'Aşağı'
	narrative: string // 5–6 sentences overall interpretation
	learning: string // 3–4 sentences: how this person learns best
	careers: string // 3–4 sentences: career implications (respectful, never discouraging)
	caution: string // 2 sentences: limits of an online estimate
}

// ---------- 16 types ----------
export interface MbtiExtra {
	code: string // 'INTJ'
	idealEnvironment: string // 3–4 sentences
	teamRole: string // 3–4 sentences
	asManager: string // 3–4 sentences
	decisionMaking: string // 3–4 sentences
	learningStyle: string // 3–4 sentences
	conflict: string // 3–4 sentences: how they handle conflict + advice
	motivators: string[] // 5
	demotivators: string[] // 4
	underPressureTips: string[] // 4
	careerPaths: { title: string; why: string }[] // 5, why = 1–2 sentences
	developmentPlan: { d30: string[]; d90: string[]; y1: string[] } // 3 items each
	interviewTips: string[] // 4
}

export interface MbtiPoleDetail {
	pole: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'
	atWork: string // 2–3 sentences
	inCommunication: string // 2–3 sentences
	blindSpot: string // 2 sentences
	tip: string // 1–2 sentences
}

// ---------- Enneagram ----------
export interface EnneaExtra {
	type: number // 1–9
	healthy: string // 3–4 sentences: at their best
	average: string // 3–4 sentences: everyday
	unhealthy: string // 3–4 sentences: under strain (non-clinical)
	atWork: string // 3–4 sentences
	asLeader: string // 3 sentences
	idealEnvironment: string // 2–3 sentences
	triggers: string[] // 4 stress triggers
	developmentPlan: { d30: string[]; d90: string[]; y1: string[] } // 3 each
}

// ---------- Big Five ----------
export interface Big5LevelExtra {
	careerFit: string // 2–3 sentences
	underStress: string // 2 sentences
	idealRoles: string[] // 5
	watchOut: string // 1–2 sentences
}
export type Big5Extra = Record<Big5Domain, { low: Big5LevelExtra; mid: Big5LevelExtra; high: Big5LevelExtra }>

// ---------- RIASEC ----------
export interface RiasecExtra {
	id: RiasecType
	typicalDay: string // 3 sentences: a typical satisfying workday
	values: string[] // 4
	learningStyle: string // 2–3 sentences
	developmentTips: string[] // 4
	pairs: Partial<Record<RiasecType, string>> // for each OTHER type as second letter: 2 sentences describing the combination (e.g. I + A)
}
