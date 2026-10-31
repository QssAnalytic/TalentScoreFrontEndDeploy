// Application status. Real (external) vacancies only change when the person records
// what happened. Sample vacancies have invented companies, so their employer replies
// are simulated from the match score and the time since applying, and the UI says so.
import { AppEvent, AppStatus, Application } from './types'

export const STATUS_LABEL: Record<AppStatus, string> = {
	ready: 'Göndərilməyə hazır',
	sent: 'Göndərildi',
	viewed: 'Baxıldı',
	test: 'Testə dəvət',
	interview: 'Müsahibəyə dəvət',
	offer: 'Təklif',
	rejected: 'Rədd cavabı',
	withdrawn: 'Geri götürüldü'
}

export const STATUS_TONE: Record<AppStatus, string> = {
	ready: 'bg-[#FFF4E0] text-[#9A5B00]',
	sent: 'bg-qss-transbg text-qss-alternative',
	viewed: 'bg-[#E8F0FB] text-[#1F4E8C]',
	test: 'bg-[#EDE7FB] text-[#5B3BB5]',
	interview: 'bg-[#E3F7EF] text-[#0B7A50]',
	offer: 'bg-[#0B7A50] text-white',
	rejected: 'bg-[#FDECEC] text-[#A12B2B]',
	withdrawn: 'bg-qss-base-400 text-qss-inputText'
}

function hash(s: string) {
	let h = 2166136261
	for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
	return (h >>> 0) / 4294967296
}

const MIN = 60_000

// Simulated employer replies for sample vacancies.
function simulated(a: Application): AppEvent[] {
	const t0 = new Date(a.createdAt).getTime()
	const now = Date.now()
	const r = hash(a.id + a.job.id)
	const out: AppEvent[] = []
	const viewAt = t0 + (20 + Math.round(r * 70)) * MIN
	if (now < viewAt) return out
	out.push({ at: new Date(viewAt).toISOString(), status: 'viewed', note: 'İşəgötürən müraciətinizə baxdı.' })
	const decideAt = viewAt + (90 + Math.round(r * 240)) * MIN
	if (now < decideAt) return out
	// Better matches are more likely to be invited.
	const p = (a.match - 50) / 50 // 0 at 50%, 1 at 100%
	if (r < 0.25 + 0.45 * p) {
		const kind: AppStatus = r < 0.12 + 0.2 * p ? 'test' : 'interview'
		out.push({
			at: new Date(decideAt).toISOString(),
			status: kind,
			note: kind === 'test' ? 'Sizi onlayn qiymətləndirmə tapşırığına dəvət edirik. Uyğun vaxtı bildirin.' : 'Sizi ilkin müsahibəyə dəvət edirik. Bu həftə üçün uyğun vaxtlarınızı göndərin.'
		})
	} else if (r > 0.72) {
		out.push({ at: new Date(decideAt).toISOString(), status: 'rejected', note: 'Təşəkkür edirik, bu mərhələdə başqa namizədlərlə davam edirik.' })
	}
	return out
}

export function timeline(a: Application): AppEvent[] {
	const base: AppEvent[] = [{ at: a.createdAt, status: a.job.external ? 'ready' : 'sent', note: a.mode === 'auto' ? 'Avto-müraciət sistemi tərəfindən hazırlandı.' : 'Siz müraciət etdiniz.' }]
	const sim = a.job.sample && !a.scripted ? simulated(a) : []
	return [...base, ...sim, ...a.events].sort((x, y) => x.at.localeCompare(y.at))
}

export function currentStatus(a: Application): AppStatus {
	const t = timeline(a)
	return t[t.length - 1].status
}

export const isInvitation = (s: AppStatus) => s === 'test' || s === 'interview'
export const isReply = (s: AppStatus) => ['test', 'interview', 'offer', 'rejected'].includes(s)
