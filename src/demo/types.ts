// Demo personas: invented people used to show how every part of Talent Score
// behaves for different profiles. None of them is a real person.
import { IqDomain } from 'tests/types'
import { TestId } from 'tests/registry'

export type DemoStatus = 'sent' | 'viewed' | 'test' | 'interview' | 'offer' | 'rejected'

export interface PersonaSpec {
	id: string // 'p01'…'p20'
	first_name: string
	last_name: string
	gender: 'Male' | 'Female'
	birth_date: string // YYYY-MM-DD
	city: string
	phone: string // invented, format '+994 50 000 00 00' with zeros in the last 7 digits, e.g. '+994 50 000 00 01'
	headline: string // one line, e.g. 'İqtisadiyyat tələbəsi, maliyyə analitikasına maraqlıdır'
	story: string // 2–3 sentences: background, situation, career goal
	avatar: { skin: 'light' | 'medium' | 'tan' | 'dark'; hair: 'short' | 'curly' | 'long' | 'bun' | 'hijab' | 'bald' | 'wavy'; hairColor: 'black' | 'brown' | 'blonde' | 'auburn' | 'grey'; facialHair?: 'beard' | 'moustache' | 'none'; glasses?: boolean }

	// ---- Talent test (test 1) inputs, as the person typed them ----
	occupation: string // answer to 'Hazırda məşğuliyyətiniz:' e.g. 'Tələbə', 'İşləyirəm', 'Məktəbli', 'İş axtarıram'
	schoolPerformance: string // answer to 'Orta məktəb göstəriciləriniz…' e.g. 'Əla', 'Yaxşı', 'Kafi'
	education: { level: 'Orta' | 'Peşə' | 'Bakalavr' | 'Magistr' | 'Doktorantura'; university: string; specialty: string; country: string; start: string; end: string; admission: string; examScore?: string }[] // university: real Azerbaijani/foreign universities are fine (public institutions); start/end 'YYYY-MM' ; empty array for schoolchildren
	olympiad?: { subject: string; level: string; rank: string } // e.g. { subject: 'Riyaziyyat', level: 'Respublika', rank: '2-ci yer' }
	languages: { language: string; level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Ana dili'; certificate?: string }[] // include native language
	special: { skill: string; level: string; achievement?: string }[] // e.g. { skill: 'Musiqi (piano)', level: 'Həvəskar', achievement: '…' }
	sports: { sport: string; level: string; result?: string }[]
	work: { profession: string; company: string; form: 'Tam ştat' | 'Yarım ştat' | 'Təcrübə' | 'Frilans' | 'Könüllü'; level: 'Təcrübəçi' | 'Kiçik mütəxəssis' | 'Mütəxəssis' | 'Böyük mütəxəssis' | 'Rəhbər'; start: string; end: string | null }[] // company: invented names only; end null = currently working
	programs: { name: string; level: 'Başlanğıc' | 'Orta' | 'Yaxşı' | 'Peşəkar' }[] // e.g. Excel, Python, Figma, 1C, AutoCAD

	// ---- Target results (the demo generates real answers that produce these) ----
	completed: TestId[] // which of the 6 tests this person has finished ('talent','iq','mbti','ennea','big5','riasec'); vary it
	talent: { education: number; language: number; special: number; sport: number; work: number; program: number } // 0–100 peer percentile, consistent with the inputs above
	iq: number // 78–142
	iqTilt?: Partial<Record<IqDomain, number>> // −12…+12 domain offsets (verbal, numerical, logical, spatial, memory)
	mbti: string // e.g. 'ENFJ'
	mbtiClarity: [number, number, number, number] // 55–92 per axis E/I, S/N, T/F, J/P
	ennea: { type: number; wing: number } // wing adjacent to type
	big5: { O: number; C: number; E: number; A: number; N: number } // 0–100, consistent with MBTI/Enneagram
	riasec: { R: number; I: number; A: number; S: number; E: number; C: number } // 0–100

	// ---- Career side ----
	jobProfile: { titles: string[]; sectors: string[]; cities: string[]; remoteOk: boolean; years: number; education: string; minSalary: number }
	plan: 'none' | 'start' | 'pro'
	badges: TestId[] // verified badges bought (subset of completed)
	applications: { vacancy: string; status: DemoStatus; daysAgo: number; mode: 'auto' | 'manual'; replySent?: boolean; interviewDone?: boolean; note?: string }[] // vacancy = id in jobs/sample-vacancies.json (s001…s072) that suits the person
}

export interface Persona extends PersonaSpec {
	email: string
}
