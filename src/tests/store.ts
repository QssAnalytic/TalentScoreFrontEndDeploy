// Per-user storage for test results, in-progress answers and the profile photo.
// Kept in this browser (localStorage), keyed by the signed-in email, because the
// backend has no tables for the new tests yet.
import { useEffect, useState } from 'react'

export interface TalentResult {
	data: Record<string, { text: string; score: number; result: string }>
	report_key?: string
	date: string
	answers?: any[] // the stage answers, used to prefill the CV
}

export interface IqResult {
	date: string
	iq: number
	percentile: number
	theta: number
	band: string
	domains: Record<string, { correct: number; total: number; index: number }>
	answers: Record<string, string>
	correct: number
	total: number
	seconds: number
	certificateId: string
}

export interface MbtiResult {
	date: string
	code: string
	axes: Record<string, { pole: string; percent: number }> // percent toward the winning pole (50–100)
	answers: Record<string, number>
}

export interface EnneaResult {
	date: string
	type: number
	wing: number
	scores: Record<string, number> // 0–100 per type
	centers: Record<string, number>
	answers: Record<string, number>
}

export interface Big5Result {
	date: string
	domains: Record<string, number> // O C E A N → 0–100
	answers: Record<string, number>
}

export interface RiasecResult {
	date: string
	scores: Record<string, number> // R I A S E C → 0–100
	code: string // top three letters, e.g. 'IAS'
	answers: Record<string, number>
}

export interface UserResults {
	talent?: TalentResult
	iq?: IqResult
	mbti?: MbtiResult
	ennea?: EnneaResult
	big5?: Big5Result
	riasec?: RiasecResult
	photo?: string // data URL, small JPEG
	cv?: any // the person's edited CV
	progress?: Record<string, any> // unfinished tests
}

const KEY = (email: string) => `ts_results::${(email || 'guest').toLowerCase()}`
const EVENT = 'ts-results-change'

export function loadResults(email: string): UserResults {
	try {
		const raw = localStorage.getItem(KEY(email))
		return raw ? JSON.parse(raw) : {}
	} catch {
		return {}
	}
}

export function saveResults(email: string, patch: Partial<UserResults>) {
	const next = { ...loadResults(email), ...patch }
	try {
		localStorage.setItem(KEY(email), JSON.stringify(next))
	} catch {
		/* storage full or blocked: results stay for this session only */
	}
	window.dispatchEvent(new CustomEvent(EVENT))
	return next
}

export function saveProgress(email: string, test: string, value: any) {
	const cur = loadResults(email)
	saveResults(email, { progress: { ...(cur.progress || {}), [test]: value } })
}

export function clearProgress(email: string, test: string) {
	const cur = loadResults(email)
	const progress = { ...(cur.progress || {}) }
	delete progress[test]
	saveResults(email, { progress })
}

// React hook: re-renders whenever results change anywhere in the app.
export function useResults(email: string): UserResults {
	const [state, setState] = useState<UserResults>(() => loadResults(email))
	useEffect(() => {
		setState(loadResults(email))
		const on = () => setState(loadResults(email))
		window.addEventListener(EVENT, on)
		window.addEventListener('storage', on)
		return () => {
			window.removeEventListener(EVENT, on)
			window.removeEventListener('storage', on)
		}
	}, [email])
	return state
}

// Shrink an uploaded image to a square JPEG data URL (for reports and share cards).
export function imageToDataUrl(file: Blob, size = 360): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onerror = () => reject(new Error('read failed'))
		reader.onload = () => {
			const img = new Image()
			img.onerror = () => reject(new Error('not an image'))
			img.onload = () => {
				const canvas = document.createElement('canvas')
				canvas.width = size
				canvas.height = size
				const ctx = canvas.getContext('2d')!
				const s = Math.min(img.width, img.height)
				ctx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size)
				resolve(canvas.toDataURL('image/jpeg', 0.86))
			}
			img.src = String(reader.result)
		}
		reader.readAsDataURL(file)
	})
}

export function shortId(prefix = 'TS') {
	const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
	let s = ''
	for (let i = 0; i < 8; i++) s += alphabet[Math.floor(Math.random() * alphabet.length)]
	return `${prefix}-${s}`
}

export function ageFrom(birth?: string) {
	if (!birth) return null
	const d = new Date(birth)
	if (isNaN(d.getTime())) return null
	const now = new Date()
	let a = now.getFullYear() - d.getFullYear()
	if (now.getMonth() < d.getMonth() || (now.getMonth() === d.getMonth() && now.getDate() < d.getDate())) a--
	return a
}

export function formatDate(iso?: string) {
	if (!iso) return ''
	const d = new Date(iso)
	return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`
}

// The backend returns talent scores either as fractions (0–1) or percentages; normalise to 0–100.
export function talentPercent(score: unknown) {
	const n = Number(score)
	if (!isFinite(n)) return 0
	return Math.round(Math.max(0, Math.min(100, n <= 1 ? n * 100 : n)))
}

// Azerbaijani ordinal suffix by vowel harmony of the last spoken word: 1-ci, 3-cü, 6-cı, 9-cu, 10-cu, 40-cı, 100-cü.
export function ordinalAz(n: number) {
	const v = Math.round(n)
	const ones: Record<number, string> = { 1: 'ci', 2: 'ci', 3: 'cü', 4: 'cü', 5: 'ci', 6: 'cı', 7: 'ci', 8: 'ci', 9: 'cu' }
	const tens: Record<number, string> = { 1: 'cu', 2: 'ci', 3: 'cu', 4: 'cı', 5: 'ci', 6: 'cı', 7: 'ci', 8: 'ci', 9: 'cı' }
	let suffix = 'cü'
	if (v % 100 === 0 && v > 0) suffix = 'cü'
	else if (v % 10 !== 0) suffix = ones[v % 10]
	else if (v % 100 !== 0) suffix = tens[(v % 100) / 10]
	return `${v}-${suffix}`
}
