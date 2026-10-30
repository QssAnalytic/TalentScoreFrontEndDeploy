// Career coach: next-step advice and the interview preparation report.
// Rule-based: it combines the vacancy's requirements with the person's test results,
// job profile and application history.
import { UserResults } from 'tests/store'
import { MBTI_TYPES } from 'tests/mbti/data'
import { ENNEA_TYPES } from 'tests/enneagram/data'
import { Application, CareerState, Job, JobProfile, Trait } from './types'
import { MatchResult, TRAIT_LABEL, traitScores } from './match'
import { currentStatus, isInvitation } from './status'

export interface Step {
	id: string
	title: string
	text: string
	to: string
	cta: string
	tone: 'urgent' | 'normal' | 'done'
}

export function nextSteps(r: UserResults, c: CareerState, talentDone: boolean, topMatches: { job: Job; m: MatchResult }[]): Step[] {
	const steps: Step[] = []
	const apps = c.applications
	const invites = apps.filter(a => isInvitation(currentStatus(a)) && !a.replySent)
	invites.forEach(a =>
		steps.push({
			id: `invite-${a.id}`,
			title: `${a.job.company}: ${currentStatus(a) === 'test' ? 'testə' : 'müsahibəyə'} dəvət`,
			text: 'Dəvətə 24 saat ərzində cavab verin. Cavab mətni və hazırlıq hesabatı hazırdır.',
			to: `/profile/jobs/coach/${a.id}`,
			cta: 'Cavab ver və hazırlaş',
			tone: 'urgent'
		})
	)
	const toFollow = apps.filter(a => a.replySent && !a.interviewDone && currentStatus(a) === 'interview')
	toFollow.forEach(a =>
		steps.push({ id: `after-${a.id}`, title: `${a.job.company} müsahibəsindən sonra`, text: 'Müsahibə bitdikdən sonra qeyd edin — təşəkkür məktubu və növbəti addımlar hazırlanacaq.', to: `/profile/jobs/coach/${a.id}`, cta: 'Hesabatı aç', tone: 'normal' })
	)
	const ready = apps.filter(a => currentStatus(a) === 'ready')
	if (ready.length)
		steps.push({ id: 'ready', title: `${ready.length} müraciət göndərilməyi gözləyir`, text: 'Beynəlxalq vakansiyalarda müraciət paketi hazırdır: məktubu kopyalayıb işəgötürənin səhifəsində göndərin.', to: '/profile/jobs/applications', cta: 'Müraciətlərə bax', tone: 'urgent' })

	if (!talentDone) steps.push({ id: 'talent', title: 'Talant testini tamamlayın', text: 'Təhsil, dil və iş təcrübəniz uyğunluq hesablamasının əsasıdır.', to: '/profile/tests/talent', cta: 'Başla', tone: 'normal' })
	if (!c.profile?.skills.length) steps.push({ id: 'profile', title: 'Karyera profilinizi doldurun', text: 'Bacarıqlar, təcrübə ili və istədiyiniz sahələr olmadan vakansiyalarla uyğunluq dəqiq hesablanmır.', to: '/profile/jobs/profile', cta: 'Profili doldur', tone: 'normal' })
	if (!r.riasec) steps.push({ id: 'riasec', title: 'Karyera maraqları testini keçin', text: 'Hansı iş mühitində xoşbəxt olacağınızı göstərir və uyğunluğu dəqiqləşdirir. 8 dəqiqə.', to: '/profile/tests/riasec', cta: 'Testə keç', tone: 'normal' })
	if (!r.big5) steps.push({ id: 'big5', title: 'Big Five testini keçin', text: 'İşəgötürənlərin ən çox etibar etdiyi şəxsiyyət modeli. 8–10 dəqiqə.', to: '/profile/tests/big5', cta: 'Testə keç', tone: 'normal' })
	if (!r.iq) steps.push({ id: 'iq', title: 'IQ testini keçin', text: 'Analitik rollarda minimum göstərici tələb olunur; nəticə uyğunluğa təsir edir.', to: '/profile/tests/iq', cta: 'Testə keç', tone: 'normal' })

	// Most frequent missing skill among the best matches.
	const missing: Record<string, number> = {}
	topMatches.slice(0, 15).forEach(({ m }) => m.missingSkills.forEach(s => (missing[s] = (missing[s] || 0) + 1)))
	const top = Object.entries(missing).sort((a, b) => b[1] - a[1]).slice(0, 3)
	if (top.length && top[0][1] >= 2)
		steps.push({
			id: 'skills',
			title: `Ən çox tələb olunan bacarıq: ${top[0][0]}`,
			text: `Sizə uyğun ${top[0][1]} vakansiyada ${top[0][0]} istənilir${top[1] ? `, ardınca ${top.slice(1).map(x => x[0]).join(' və ')}` : ''}. Bu bacarığı öyrənib profilə əlavə etsəniz, uyğunluq artacaq.`,
			to: '/profile/jobs/profile',
			cta: 'Bacarıq əlavə et',
			tone: 'normal'
		})
	if (!c.subscription?.active && topMatches.filter(x => x.m.score >= 70).length >= 3)
		steps.push({ id: 'auto', title: 'Avto-müraciəti aktiv edin', text: `Bu gün sizə ${topMatches.filter(x => x.m.score >= 70).length} uyğun vakansiya var. Sistem hər gün yeni uyğun vakansiyalara özü müraciət hazırlasın.`, to: '/profile/jobs/auto', cta: 'Planlara bax', tone: 'normal' })
	if (!apps.length && topMatches.length) steps.push({ id: 'first', title: 'İlk müraciətinizi edin', text: `Ən uyğun vakansiya: ${topMatches[0].job.title} — ${topMatches[0].job.company} (${topMatches[0].m.score}%).`, to: '/profile/jobs', cta: 'Vakansiyalara bax', tone: 'normal' })
	return steps
}

// ---------- interview preparation report ----------
const TRAIT_QUESTIONS: Record<Trait, string[]> = {
	analytical: ['Mürəkkəb problemi hissələrə ayırıb həll etdiyiniz bir halı danışın.', 'Qərarı hansı məlumatlara əsasən verdiyinizi nümunə ilə izah edin.'],
	creative: ['Mövcud prosesi yeni yanaşma ilə yaxşılaşdırdığınız bir nümunə deyin.', 'Məhdud resursla yaradıcı həll tapdığınız vəziyyəti danışın.'],
	social: ['Çətin müştəri və ya həmkarla münasibəti necə qurduğunuzu danışın.', 'Fərqli fikirdə olan insanları razılığa gətirdiyiniz halı izah edin.'],
	leader: ['Komandanı çətin hədəfə apardığınız bir təcrübəni danışın.', 'Komandada konflikti necə həll etdiyinizi izah edin.'],
	organized: ['Eyni anda bir neçə tapşırığı necə prioritetləşdirirsiniz?', 'Son tarixi riskdə olan layihəni vaxtında bitirdiyiniz halı danışın.'],
	practical: ['Nəzəri planın praktikada işləmədiyi bir halda nə etdiniz?', 'Əllə və ya texniki problemi yerində həll etdiyiniz nümunəni danışın.'],
	calm: ['Yüksək təzyiq altında işlədiyiniz zaman özünüzü necə idarə etdiniz?', 'Səhv etdiyiniz və onu düzəltdiyiniz bir halı danışın.'],
	detail: ['Kiçik bir səhvi vaxtında aşkar etdiyiniz halı danışın.', 'İşinizin keyfiyyətini necə yoxlayırsınız?']
}

const STEP_TIPS: [RegExp, string][] = [
	[/cv|seçim/i, 'CV-də vakansiyanın açar sözlərini (bacarıqlar, alətlər) eyni formada işlədin; nəticələri rəqəmlə göstərin.'],
	[/telefon|onlayn müsahibə|ilkin/i, 'Sakit yer seçin, 60 saniyəlik “özünüzü təqdim edin” cavabını əvvəlcədən məşq edin, maaş gözləntinizi aralıq kimi deyin.'],
	[/texniki|tapşırıq|test|case|kейс/i, 'Tapşırığın tələblərini yazılı təsdiqləyin, fərziyyələrinizi qeyd edin, sadə və işlək həll təqdim edin, sonra təkmilləşdirin.'],
	[/rəhbər|panel|final|direktor/i, 'Rolun ilk 90 günü üçün qısa plan hazırlayın; şirkətin məqsədləri ilə öz töhfənizi əlaqələndirin.'],
	[/qiymətləndirmə mərkəzi|assessment|qrup/i, 'Qrup tapşırığında həm fikir verin, həm də başqalarını dinləyin; vaxtı və nəticəni izləyən rolu öz üzərinizə götürün.']
]

export interface PrepReport {
	verdict: string
	lookFor: string[]
	strengths: string[]
	gaps: { gap: string; answer: string }[]
	questions: { q: string; hint: string }[]
	star: { q: string; s: string; t: string; a: string; r: string }[]
	ask: string[]
	research: string[]
	process: { step: string; tip: string }[]
	style: string[]
	plan: { day: string; tasks: string[] }[]
	after: string[]
}

export function prepReport(job: Job, m: MatchResult, profile: JobProfile | undefined, r: UserResults): PrepReport {
	const traits = traitScores(r)
	const mt = r.mbti ? MBTI_TYPES[r.mbti.code] : undefined
	const et = r.ennea ? ENNEA_TYPES[r.ennea.type as keyof typeof ENNEA_TYPES] : undefined
	const jt = (job.traits || []) as Trait[]

	const verdict =
		m.score >= 80
			? `Profiliniz bu vakansiya ilə ${m.score}% uyğundur — güclü namizədsiniz. Müsahibədə əsas məqsəd: uyğunluğu konkret nəticələrlə sübut etmək.`
			: m.score >= 65
				? `Uyğunluq ${m.score}%-dir. Güclü tərəfləriniz var, amma bir neçə boşluğu əvvəlcədən izah etməyə hazır olun.`
				: `Uyğunluq ${m.score}%-dir. Şansınızı artırmaq üçün motivasiyanızı və öyrənmə sürətinizi xüsusi vurğulayın.`

	const lookFor = [
		...(job.requirements || []).slice(0, 5),
		...(jt.length ? [`Şəxsi keyfiyyətlər: ${jt.map(t => TRAIT_LABEL[t]).join(', ')}`] : []),
		...(job.minYears ? [`Minimum ${job.minYears} il təcrübə`] : []),
		...(job.languages?.length ? [`Dillər: ${job.languages.join(', ')}`] : [])
	]

	const strengths = [
		...m.reasons,
		...(mt ? mt.strengths.slice(0, 2).map(s => `${r.mbti!.code} tipi kimi: ${s}`) : []),
		...(r.big5
			? Object.entries(r.big5.domains)
					.filter(([k, v]) => k !== 'N' && v >= 65)
					.map(([k]) => ({ O: 'Yeni ideyalara açıqlıq', C: 'Yüksək məsuliyyət və nizam', E: 'Enerjili ünsiyyət', A: 'Komandada əməkdaşlıq' })[k as 'O'] + ' (Big Five)')
			: []),
		...(r.iq && r.iq.iq >= 110 ? [`Yüksək analitik qabiliyyət (IQ ${r.iq.iq})`] : [])
	].slice(0, 7)

	const gaps = [
		...m.missingSkills.slice(0, 3).map(s => ({
			gap: `${s} tələb olunur, profilinizdə yoxdur`,
			answer: `Dürüst olun: “${s} ilə hələ peşəkar səviyyədə işləməmişəm, amma oxşar ${m.matchedSkills[0] || 'alətləri'} tez öyrəndim; ${s} üzrə öyrənmə planım var.” Müsahibəyədək qısa kurs və ya kiçik layihə ilə başlayın.`
		})),
		...(job.minYears > (profile?.years || 0)
			? [{ gap: `Tələb olunan təcrübə ${job.minYears} il, sizdə ${profile?.years || 0} il`, answer: 'Təcrübə ilini deyil, nəticələri danışın: layihələr, təcrübə proqramları, könüllü iş və ölçülə bilən uğurlar.' }]
			: []),
		...(r.big5 && (r.big5.domains.N ?? 0) >= 65 && jt.includes('calm')
			? [{ gap: 'Rol yüksək təzyiqlidir, testə görə stressə həssassınız', answer: 'Stressi idarə etmə üsulunuzu (planlama, prioritetləşdirmə, fasilə) konkret nümunə ilə göstərin.' }]
			: [])
	]

	const roleQs = (job.responsibilities || []).slice(0, 3).map(x => ({ q: `Bu vəzifədə “${x.replace(/\.$/, '').toLowerCase()}” tələb olunur. Bununla bağlı təcrübənizi danışın.`, hint: 'Konkret layihə, sizin rolunuz və nəticə (rəqəmlə) — 1,5–2 dəqiqə.' }))
	const skillQs = m.matchedSkills.slice(0, 2).map(s => ({ q: `${s} ilə işlədiyiniz ən çətin tapşırıq hansı olub?`, hint: 'Problemi, seçdiyiniz yanaşmanı və nə öyrəndiyinizi deyin.' }))
	const traitQs = jt.slice(0, 3).map(t => ({ q: TRAIT_QUESTIONS[t][0], hint: traits[t] >= 0.6 ? `Bu sizin güclü tərəfinizdir (${TRAIT_LABEL[t]}) — ən yaxşı nümunənizi seçin.` : `Testə görə ${TRAIT_LABEL[t]} sizin üçün təbii deyil — bu bacarığı inkişaf etdirdiyinizi göstərən nümunə hazırlayın.` }))
	const questions = [
		{ q: 'Özünüz haqqında danışın.', hint: `60–90 saniyə: indiki rol → əsas nailiyyət → niyə məhz “${job.title}”.` },
		{ q: `Niyə ${job.company}?`, hint: job.companyAbout ? `Şirkət haqqında bildiklərinizi istifadə edin: ${job.companyAbout}` : 'Şirkətin məhsulunu, bazarını və dəyərlərini araşdırın, öz məqsədinizlə əlaqələndirin.' },
		...roleQs,
		...skillQs,
		...traitQs,
		{ q: 'Zəif tərəfiniz nədir?', hint: mt ? `Real, amma rolu təhlükəyə atmayan bir zəiflik seçin, məsələn: “${mt.weaknesses[0]}” — və onu necə idarə etdiyinizi deyin.` : 'Real zəiflik + onu necə idarə etdiyiniz + son nəticə.' },
		{ q: 'Maaş gözləntiniz nədir?', hint: job.salaryMin && job.salaryMax ? `Bazar aralığı: ${job.salaryMin}–${job.salaryMax} ₼. Aralıq deyin və bütöv paketi soruşun.` : 'Əvvəlcə rolun məsuliyyətlərini dəqiqləşdirin, sonra bazar araşdırmasına əsaslanan aralıq deyin.' }
	]

	const star = traitQs.slice(0, 2).map(x => ({
		q: x.q,
		s: 'Vəziyyət: harada, nə vaxt, hansı komanda ilə (1 cümlə).',
		t: 'Tapşırıq: sizdən nə gözlənilirdi, çətinlik nə idi.',
		a: 'Hərəkət: məhz SİZ nə etdiniz — 2–3 konkret addım.',
		r: 'Nəticə: rəqəm və ya ölçülə bilən təsir, və nə öyrəndiniz.'
	}))

	const ask = [
		'Bu rolda ilk 3 ayda uğur necə ölçüləcək?',
		'Komanda neçə nəfərdir və kimə hesabat verəcəyəm?',
		'Bu vəzifədə ən böyük çətinlik nədir?',
		job.process?.length ? `Seçim prosesinin növbəti mərhələsi (${job.process[job.process.length - 1]}) necə keçir?` : 'Seçim prosesinin növbəti mərhələləri hansılardır?',
		'Komandada öyrənmə və inkişaf imkanları necədir?'
	]

	const research = [
		job.companyAbout ? `Şirkət haqqında: ${job.companyAbout}` : `${job.company} haqqında rəsmi sayt və son xəbərləri oxuyun.`,
		'Şirkətin məhsul və xidmətlərini sınayın və ya müştəri rəylərinə baxın.',
		'LinkedIn-də komanda üzvlərini və rəhbəri tapın, onların keçmişinə baxın.',
		`${job.sector} sahəsində son trend və rəqibləri qeyd edin — 1–2 fikir söyləmək üçün.`,
		job.sample ? 'Qeyd: bu, nümunə vakansiyadır; şirkət uydurmadır və hazırlıq məşqi üçündür.' : `Orijinal elanı yenidən oxuyun: ${job.url || ''}`
	]

	const process = (job.process?.length ? job.process : ['CV seçimi', 'İlkin müsahibə', 'Rəhbərlə müsahibə']).map(step => ({ step, tip: (STEP_TIPS.find(([re]) => re.test(step)) || [null, 'Bu mərhələ üçün tələbləri əvvəlcədən soruşun və hazırlaşın.'])[1] as string }))

	const style = [
		...(mt ? [`Ünsiyyət tərziniz (${r.mbti!.code}): ${mt.communication.split('.')[0]}.`, `Müsahibədə: ${mt.communicationTips[0]}`] : []),
		...(r.mbti?.code.startsWith('I') ? ['İntrovert kimi cavablarınızı əvvəlcədən qısa qeydlərlə hazırlayın; fikirləşmək üçün 2–3 saniyə fasilə vermək normaldır.'] : []),
		...(r.mbti?.code.startsWith('E') ? ['Ekstravert kimi cavablarınızı qısa saxlayın və müsahibçiyə sual vermək üçün yer qoyun.'] : []),
		...(et ? [`Enneaqram ${r.ennea!.type}: stress altında ${et.stress.split('.')[0].toLowerCase()} — müsahibədən əvvəl buna diqqət edin.`] : []),
		...(!mt && !et ? ['Şəxsiyyət testlərini keçsəniz, burada ünsiyyət tərzinizə uyğun fərdi tövsiyələr görünəcək.'] : [])
	]

	const plan = [
		{ day: '1-ci gün', tasks: ['Vakansiya və şirkət araşdırması', 'Rolun tələbləri ilə öz təcrübənizi cədvəldə uyğunlaşdırın'] },
		{ day: '2-ci gün', tasks: ['“Özünüz haqqında” və “Niyə bu şirkət” cavablarını yazın və səsli məşq edin', ...(m.missingSkills[0] ? [`${m.missingSkills[0]} üzrə 2 saatlıq giriş materialı`] : [])] },
		{ day: '3-cü gün', tasks: ['3 STAR hekayəsi hazırlayın (yuxarıdakı suallara uyğun)', 'Zəif tərəf və maaş cavablarını hazırlayın'] },
		{ day: '4-cü gün', tasks: ['Dost və ya güzgü qarşısında tam müsahibə məşqi (30 dəq)', 'Müsahibçiyə veriləcək 3 sualı seçin'] },
		{ day: 'Müsahibə günü', tasks: ['15 dəqiqə əvvəl hazır olun; onlayn olarsa kamera, səs və interneti yoxlayın', 'CV, portfel və sertifikat ID-lərini əl altında saxlayın'] }
	]

	const after = [
		'24 saat ərzində qısa təşəkkür məktubu göndərin (aşağıda hazırdır).',
		'Müsahibədə verilən sualları və öz cavablarınızı dərhal qeyd edin — növbəti mərhələ üçün lazım olacaq.',
		'Razılaşdırılan müddətdə cavab gəlməsə, 5–7 iş günündən sonra nəzakətli xatırlatma göndərin.',
		'Nəticədən asılı olmayaraq rəy istəyin: bu, növbəti müsahibəni yaxşılaşdırır.'
	]

	return { verdict, lookFor, strengths, gaps, questions, star, ask, research, process, style, plan, after }
}

export const appInvitation = (a: Application) => isInvitation(currentStatus(a))
