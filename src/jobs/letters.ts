// Texts the system drafts for the person: cover letter, reply to an invitation,
// and the thank-you note after an interview.
import { UserResults } from 'tests/store'
import { MBTI_TYPES } from 'tests/mbti/data'
import { Job, JobProfile } from './types'
import { MatchResult, TRAIT_LABEL } from './match'
import { dayMonth, weekdayLong } from './store'

interface Person {
	name: string
	email: string
}

export function coverLetter(job: Job, m: MatchResult, profile: JobProfile | undefined, r: UserResults, who: Person) {
	const en = job.external
	const skills = m.matchedSkills.slice(0, 4)
	const strengths = m.reasons.find(x => x.startsWith('Testlərinizə'))?.split(': ')[1]
	if (en) {
		return [
			`Dear ${job.company} hiring team,`,
			'',
			`I am applying for the ${job.title} position. ${profile?.years ? `I bring ${profile.years} year${profile.years === 1 ? '' : 's'} of relevant experience` : 'I bring strong motivation and a fast learning curve'}${skills.length ? `, with hands-on skills in ${skills.join(', ')}` : ''}.`,
			r.iq || r.mbti || r.big5
				? `My Talent Score assessments${r.iq ? ` (cognitive index ${r.iq.iq})` : ''}${r.mbti ? `, ${r.mbti.code} work style` : ''} point to ${strengths ? 'strengths that fit this role' : 'a profile that fits remote, self-directed work'}. Verified certificates can be checked by ID at talentscore.az.`
				: '',
			`I would welcome the chance to discuss how I can contribute to ${job.company}.`,
			'',
			'Kind regards,',
			who.name,
			who.email
		]
			.filter((l, i, a) => l !== '' || a[i - 1] !== '')
			.join('\n')
	}
	return [
		`Hörmətli ${job.company} komandası,`,
		'',
		`“${job.title}” vakansiyasına müraciət edirəm. ${profile?.years ? `${profile.years} illik təcrübəm` : 'Öyrənməyə hazır olmağım və motivasiyam'}${skills.length ? ` və ${skills.join(', ')} bacarıqlarım` : ''} bu rolun tələbləri ilə üst-üstə düşür.`,
		strengths ? `Talent Score qiymətləndirmələrinə görə güclü tərəflərim — ${strengths} — bu vəzifədə xüsusilə faydalı olacaq.` : '',
		r.mbti ? `Şəxsiyyət tipim ${r.mbti.code} (${MBTI_TYPES[r.mbti.code]?.name || ''}) komanda daxilində ${MBTI_TYPES[r.mbti.code]?.workStyle?.split('.')[0]?.toLowerCase() || 'məhsuldar işləməyə'} imkan verir.` : '',
		'Təsdiqlənmiş sertifikatlarımı Talent Score saytında ID ilə yoxlaya bilərsiniz.',
		'Müsahibədə təcrübəm barədə ətraflı danışmağa şad olaram.',
		'',
		'Hörmətlə,',
		who.name,
		who.email
	]
		.filter((l, i, a) => l !== '' || a[i - 1] !== '')
		.join('\n')
}

// Three weekday slots starting tomorrow (Baku time), for replying to an invitation.
export function proposeSlots(from = new Date()) {
	const out: string[] = []
	const d = new Date(from)
	const hours = ['10:00', '14:30', '11:00']
	while (out.length < 3) {
		d.setDate(d.getDate() + 1)
		const wd = d.getDay()
		if (wd === 0 || wd === 6) continue
		const day = `${dayMonth(d)}, ${weekdayLong(d)}`
		out.push(`${day}, ${hours[out.length]}`)
	}
	return out
}

export function invitationReply(kind: 'test' | 'interview', company: string, title: string, name: string, slots = proposeSlots()) {
	return [
		`Hörmətli ${company} komandası,`,
		'',
		`“${title}” vakansiyası üzrə ${kind === 'test' ? 'qiymətləndirmə tapşırığına' : 'müsahibəyə'} dəvətiniz üçün təşəkkür edirəm. Məmnuniyyətlə iştirak edəcəm.`,
		'Mənim üçün uyğun vaxtlar:',
		...slots.map(s => `• ${s}`),
		'Bu vaxtlar uyğun deyilsə, sizin təklif etdiyiniz istənilən vaxta uyğunlaşa bilərəm.',
		'',
		'Hörmətlə,',
		name
	].join('\n')
}

export function thankYou(company: string, title: string, name: string, topic?: string) {
	return [
		`Hörmətli ${company} komandası,`,
		'',
		`Bu gün “${title}” vəzifəsi üzrə müsahibəyə ayırdığınız vaxt üçün təşəkkür edirəm.${topic ? ` Xüsusilə ${topic} barədə söhbətimiz mənim üçün maraqlı oldu.` : ''}`,
		'Söhbətimizdən sonra bu rola və komandanıza qoşulmaq istəyim daha da artdı. Əlavə məlumat və ya sənəd lazım olarsa, məmnuniyyətlə təqdim edərəm.',
		'Növbəti mərhələ barədə xəbərinizi gözləyirəm.',
		'',
		'Hörmətlə,',
		name
	].join('\n')
}

export const traitList = (ts: string[]) => ts.map(t => TRAIT_LABEL[t as keyof typeof TRAIT_LABEL] || t).join(', ')
