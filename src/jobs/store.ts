// Per-user career data (job profile, applications, purchases), kept in this browser
// next to the test results and keyed by the signed-in email.
import { useEffect, useState } from 'react'
import { CareerState } from './types'

const KEY = (email: string) => `ts_career::${(email || 'guest').toLowerCase()}`
const EVENT = 'ts-career-change'
const EMPTY: CareerState = { purchases: [], badges: {}, applications: [] }

export function loadCareer(email: string): CareerState {
	try {
		const raw = localStorage.getItem(KEY(email))
		return raw ? { ...EMPTY, ...JSON.parse(raw) } : { ...EMPTY }
	} catch {
		return { ...EMPTY }
	}
}

export function saveCareer(email: string, patch: Partial<CareerState> | ((cur: CareerState) => Partial<CareerState>)) {
	const cur = loadCareer(email)
	const next = { ...cur, ...(typeof patch === 'function' ? patch(cur) : patch) }
	try {
		localStorage.setItem(KEY(email), JSON.stringify(next))
	} catch {
		/* storage blocked: kept for this page only */
	}
	window.dispatchEvent(new CustomEvent(EVENT))
	return next
}

export function useCareer(email: string): CareerState {
	const [state, setState] = useState<CareerState>(() => loadCareer(email))
	useEffect(() => {
		setState(loadCareer(email))
		const on = () => setState(loadCareer(email))
		window.addEventListener(EVENT, on)
		window.addEventListener('storage', on)
		return () => {
			window.removeEventListener(EVENT, on)
			window.removeEventListener('storage', on)
		}
	}, [email])
	return state
}

// Today's date in Baku (UTC+4), used for "new today" and the daily report.
export const bakuDay = (d = new Date()) => new Date(d.getTime() + 4 * 3600_000).toISOString().slice(0, 10)

// Azerbaijani dates and numbers without relying on the browser's locale data.
const MONTHS = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr']
const WEEKDAYS = ['bazar', 'bazar ertəsi', 'çərşənbə axşamı', 'çərşənbə', 'cümə axşamı', 'cümə', 'şənbə']
const WEEKDAYS_SHORT = ['Baz', 'B.e', 'Ç.a', 'Çər', 'C.a', 'Cüm', 'Şən']
const pad = (n: number) => String(n).padStart(2, '0')
export const num = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
export const dayMonth = (d: Date) => `${d.getDate()} ${MONTHS[d.getMonth()]}`
export const dateTime = (iso?: string | null) => {
	if (!iso) return '—'
	const d = new Date(iso)
	return `${dayMonth(d)}, ${pad(d.getHours())}:${pad(d.getMinutes())}`
}
export const weekdayLong = (d: Date) => WEEKDAYS[d.getDay()]
export const weekdayShort = (d: Date) => WEEKDAYS_SHORT[d.getDay()]

export const azn = (n: number) => `${Number.isInteger(n) ? num(n) : n.toFixed(2)} ₼`

export function salaryLabel(j: { salaryMin?: number; salaryMax?: number; salaryText?: string }) {
	if (j.salaryMin && j.salaryMax) return `${num(j.salaryMin)}–${num(j.salaryMax)} ₼`
	if (j.salaryMin) return `${num(j.salaryMin)} ₼-dan`
	return j.salaryText || 'Razılaşma ilə'
}
