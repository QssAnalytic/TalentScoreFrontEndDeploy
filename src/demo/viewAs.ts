// "Kimi bax" — view the site as one of the demo personas.
// The signed-in account stays the same (the demo account); only the person shown
// changes. Each persona's results live in this browser under their own email key.
import { PERSONAS } from './personas'
import { Persona } from './types'

const KEY = 'ts_view_as'
export const DEMO_DOMAIN = 'demo.talentscore.az'
const SEED_VERSION = 'v5'

export const personaEmail = (id: string) => `${id}@${DEMO_DOMAIN}`

export function viewingAs(): string | null {
	try {
		return sessionStorage.getItem(KEY)
	} catch {
		return null
	}
}

export function getPersona(id: string | null): Persona | null {
	const p = id ? PERSONAS.find(x => x.id === id) : null
	return p ? { ...p, email: personaEmail(p.id) } : null
}

// The user object the rest of the app sees while viewing as a persona.
export function personaUser(p: Persona) {
	return {
		first_name: p.first_name,
		last_name: p.last_name,
		email: p.email,
		birth_date: p.birth_date,
		gender: p.gender,
		report_test: p.completed.includes('talent'),
		profile_photo: '',
		city: p.city,
		phone: p.phone,
		demo: true
	}
}

export async function startViewAs(id: string, force = false) {
	const p = getPersona(id)
	if (!p) return
	const stamp = `ts_demo_seed::${p.id}`
	let fresh = false
	try {
		fresh = localStorage.getItem(stamp) === SEED_VERSION
	} catch {
		/* storage blocked */
	}
	if (!fresh || force) {
		const { seedPersona } = await import('./build')
		await seedPersona(p)
		try {
			localStorage.setItem(stamp, SEED_VERSION)
		} catch {
			/* ignore */
		}
	}
	try {
		sessionStorage.setItem(KEY, id)
	} catch {
		/* ignore */
	}
	window.location.hash = '#/profile'
	window.location.reload()
}

export function stopViewAs(to = '#/profile/personas') {
	try {
		sessionStorage.removeItem(KEY)
	} catch {
		/* ignore */
	}
	window.location.hash = to
	window.location.reload()
}
