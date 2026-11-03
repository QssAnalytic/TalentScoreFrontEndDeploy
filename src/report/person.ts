import useAuth from 'hooks/useAuth'
import { ageFrom, formatDate, useResults } from 'tests/store'
import { Person } from './ReportDoc'

export const genderAz = (g?: string) => (g === 'Male' ? 'Kişi' : g === 'Female' ? 'Qadın' : '')

// The person a report is about (the signed-in user, or the demo / sample persona being viewed).
export function usePerson() {
	const { user } = useAuth()
	const results = useResults(user?.email)
	const u: any = user || {}
	const person: Person = {
		name: `${u.first_name || ''} ${u.last_name || ''}`.trim() || 'Talent Score istifadəçisi',
		birth: u.birth_date ? formatDate(u.birth_date) : undefined,
		age: ageFrom(u.birth_date),
		gender: genderAz(u.gender),
		city: u.city,
		language: u.native_language,
		photo: results.photo || (u.profile_photo && !String(u.profile_photo).includes('null') ? u.profile_photo : undefined)
	}
	const first = u.first_name || person.name.split(' ')[0]
	return { person, results, first }
}

export const fmt = (v: number, d = 0) => (Math.round(v * 10 ** d) / 10 ** d).toFixed(d)
