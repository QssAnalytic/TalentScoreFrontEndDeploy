// Vacancies as served by GET /jobs/feed (see jobs/feed.mjs on the server).
export type Trait = 'analytical' | 'creative' | 'social' | 'leader' | 'organized' | 'practical' | 'calm' | 'detail'

export interface Job {
	id: string
	baseId?: string
	title: string
	company: string
	sector: string
	city: string
	level: string
	minYears: number
	education: string
	languages: string[]
	skills: string[]
	traits: Trait[]
	riasec: string
	minIq?: number
	salaryMin?: number
	salaryMax?: number
	salaryText?: string
	employment: string
	summary: string
	description?: string
	responsibilities?: string[]
	requirements?: string[]
	process?: string[]
	companyAbout?: string
	url?: string
	source: string
	posted: string
	firstSeen: string
	sample: boolean
	external: boolean
}

export interface Feed {
	today: string
	day: string | null
	updatedAt: string | null
	nextUpdate: string
	sources: { name: string; real: boolean; count: number; ok: boolean; error?: string }[]
	jobs: Job[]
}

export interface JobProfile {
	titles: string[] // desired roles, free text
	sectors: string[]
	cities: string[]
	remoteOk: boolean
	skills: string[]
	languages: string[]
	years: number
	education: string // 'Orta' | 'Peşə' | 'Bakalavr' | 'Magistr' | 'Doktorantura'
	minSalary: number
	updatedAt?: string
}

export type AppStatus = 'ready' | 'sent' | 'viewed' | 'test' | 'interview' | 'offer' | 'rejected' | 'withdrawn'

export interface AppEvent {
	at: string
	status: AppStatus
	note?: string
}

export interface Application {
	id: string
	job: Pick<Job, 'id' | 'title' | 'company' | 'sector' | 'city' | 'url' | 'source' | 'sample' | 'external' | 'level' | 'salaryMin' | 'salaryMax' | 'salaryText'>
	match: number
	mode: 'auto' | 'manual'
	createdAt: string
	day: string // Baku date the application was made
	coverLetter: string
	events: AppEvent[] // manual updates; sample jobs also get simulated replies (see status.ts)
	replySent?: string // when the person answered an invitation
	interviewDone?: string
	scripted?: boolean // demo profiles: the events are fixed, nothing is simulated
	full?: Job // demo profiles: the vacancy itself, since it is not in the live feed
}

export type PlanId = 'start' | 'pro'

export interface Subscription {
	plan: PlanId
	active: boolean
	since: string
	renews: string
	dailyLimit: number
	minMatch: number
	includeExternal: boolean
}

export interface Purchase {
	id: string
	item: string
	label: string
	amount: number // AZN
	date: string
	card: string // last four digits
	testMode: true
}

export interface CareerState {
	profile?: JobProfile
	subscription?: Subscription
	purchases: Purchase[]
	badges: Record<string, string> // test id → date the verified badge was issued
	applications: Application[]
	lastAutoRun?: string
	seenDay?: string
}
