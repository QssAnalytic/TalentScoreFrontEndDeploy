// CDS-ES design tokens: the colours and scales used by every report and chart.
import { Level5 } from './content/types'

export const CDS = {
	deep: '#0B5F5F',
	teal: '#0A9384',
	mint: '#5CCBB8',
	heading: '#0D4F4F',
	paper: '#F7F7F7',
	line: '#E4E7E7',
	ink: '#1F2A2E',
	muted: '#5E6B70',
	gradient: 'linear-gradient(90deg, #0B5F5F 0%, #0A9384 100%)'
}

// The six talent-area colours from the CDS-ES report, reused as the site's categorical palette.
export const CATEGORY = {
	navy: '#12355B',
	orange: '#F7931E',
	purple: '#8A4FA5',
	steel: '#538CA8',
	green: '#1F925A',
	red: '#A6262B'
}
const C = CATEGORY

export const TALENT_COLOR: Record<string, string> = { education: C.navy, language: C.orange, special: C.purple, work: C.steel, sport: C.green, program: C.red }
export const IQ_COLOR: Record<string, string> = { verbal: C.navy, numerical: C.orange, logical: C.purple, spatial: C.steel, memory: C.green }
export const BIG5_COLOR: Record<string, string> = { O: C.purple, C: C.navy, E: C.orange, A: C.green, N: C.red }
export const RIASEC_COLOR: Record<string, string> = { R: C.steel, I: C.navy, A: C.purple, S: C.green, E: C.orange, C: C.red }
export const MBTI_COLOR: Record<string, string> = { EI: C.orange, SN: C.purple, TF: C.navy, JP: C.green }
export const ENNEA_COLOR = (t: number) => [C.navy, C.orange, C.purple, C.steel, C.green, C.red, '#C2185B', '#6D4C41', '#00838F'][(t - 1) % 9]

// Light → dark ramp of one colour, for the segmented bars.
export function ramp(hex: string, steps = 11) {
	const n = parseInt(hex.slice(1), 16)
	const rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255]
	return Array.from({ length: steps }, (_, i) => {
		const t = 0.62 * (1 - i / (steps - 1)) // lighter at the start
		const c = rgb.map(v => Math.round(v + (255 - v) * t))
		return `rgb(${c[0]},${c[1]},${c[2]})`
	})
}

// Proficiency ladder (CDS-ES): Expert / Advanced / Intermediate / Novice / Fundamental awareness.
export const LEVELS: { id: Level5; name: string; min: number }[] = [
	{ id: 'expert', name: 'Ekspert', min: 85 },
	{ id: 'advanced', name: 'İrəli', min: 70 },
	{ id: 'intermediate', name: 'Orta', min: 50 },
	{ id: 'novice', name: 'Başlanğıc', min: 30 },
	{ id: 'basic', name: 'İlkin', min: 0 }
]
export const levelOf = (score: number): Level5 => (LEVELS.find(l => score >= l.min) || LEVELS[4]).id
export const levelName = (id: Level5) => LEVELS.find(l => l.id === id)?.name || id

// Letter grade as on the CDS-ES transcript.
export const letter = (v: number) => (v >= 90 ? 'A' : v >= 80 ? 'B' : v >= 70 ? 'C' : v >= 60 ? 'D' : v >= 50 ? 'E' : 'F')

// IQ index (55–150) → 0–100 for bars and ladders.
export const iqToPct = (index: number) => Math.max(0, Math.min(100, Math.round(((index - 55) / 95) * 100)))
