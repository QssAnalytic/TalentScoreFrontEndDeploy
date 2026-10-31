// TalentBot replies built from the signed-in person's own data (or the demo
// persona being viewed): test results, career profile and applications.
// Rule-based: it recognises the topic and answers with that person's numbers.
import { UserResults, talentPercent } from 'tests/store'
import { talentLabel } from 'tests/registry'
import { rankCombined } from 'tests/careers'
import { MBTI_TYPES } from 'tests/mbti/data'
import { ENNEA_TYPES } from 'tests/enneagram/data'
import { BIG5_DOMAINS, BIG5_ORDER } from 'tests/big5/data'
import { big5Level, levelWord } from 'tests/big5/scoring'
import { RIASEC_TYPES } from 'tests/riasec/data'
import { DOMAIN_LABEL } from 'tests/iq/scoring'
import { CareerState } from 'jobs/types'
import { currentStatus, isInvitation, STATUS_LABEL } from 'jobs/status'
import { nextSteps } from 'jobs/coach'
import { PLANS } from 'jobs/billing'

export interface BotContext {
	firstName: string
	results: UserResults
	career: CareerState
	talentDone: boolean
}

export const BOT_TOPICS = ['Mənim nəticələrim', 'Hansı peşə mənə uyğundur?', 'Müraciətlərim nə yerdədir?', 'Müsahibəyə necə hazırlaşım?', 'Güclü və zəif tərəflərim', 'Növbəti addımım nədir?']

export function greeting(c: BotContext) {
	const n = [c.results.iq, c.results.mbti, c.results.ennea, c.results.big5, c.results.riasec].filter(Boolean).length + (c.talentDone ? 1 : 0)
	return `Salam, ${c.firstName}! Mən TalentBot-am. ${n ? `${n} testinin nəticəsini və ${c.career.applications.length} müraciətini görürəm.` : 'Hələ test nəticən yoxdur — testləri keçəndən sonra onları sənə izah edəcəm.'} Nə haqqında danışaq?`
}

const has = (t: string, re: RegExp) => re.test(t)
const list = (xs: string[]) => xs.filter(Boolean).join(', ')

function talentArea(c: BotContext, key: string, label: string) {
	const d = c.results.talent?.data?.[key]
	if (!d) return c.talentDone ? `${label} balın serverdəki hesabatdadır — “Talant hesabatı”nı aç.` : `${label} üçün əvvəlcə talant testini keçməlisən.`
	return `${label}: ${talentPercent(d.score)}% (${d.result}). Bu o deməkdir ki, yaşıdlarının təxminən ${talentPercent(d.score)}%-dən yüksəksən.`
}

export function personalReply(input: string, c: BotContext): string {
	const t = input.toLocaleLowerCase('az')
	const r = c.results
	const mbti = r.mbti ? MBTI_TYPES[r.mbti.code] : undefined
	const ennea = r.ennea ? ENNEA_TYPES[r.ennea.type] : undefined
	const apps = c.career.applications

	if (has(t, /^(salam|hello|hi|hey|sağ ol|sag ol|təşəkkür)/)) return /sağ|sag|təşəkkür/.test(t) ? `Dəyməz, ${c.firstName}! Başqa sualın olsa, buradayam.` : greeting(c)

	if (has(t, /müsahib|musahib|hazırlaş|hazirlas|interview/)) {
		const inv = apps.filter(a => isInvitation(currentStatus(a)))
		if (!inv.length) return 'Hazırda dəvətin yoxdur. Dəvət gələndə “Karyera koçu”nda həmin vakansiyaya xüsusi hazırlıq hesabatı açılacaq: gözlənilən suallar, STAR şablonu və 5 günlük plan.'
		const a = inv[0]
		return `${a.job.company} şirkətindən “${a.job.title}” üzrə ${currentStatus(a) === 'test' ? 'test' : 'müsahibə'} dəvətin var (uyğunluq ${a.match}%). ${a.replySent ? 'Cavabı artıq göndərmisən.' : 'Əvvəlcə 24 saat ərzində dəvətə cavab ver — mətn hazırdır.'} ${mbti ? `${r.mbti!.code} tipi kimi müsahibədə: ${mbti.communicationTips[0]}` : ''} Tam hazırlıq hesabatı: Karyera koçu → ${a.job.title}.`
	}
	if (has(t, /müraciət|muraciet|status|dəvət|devet|cavab gəl|application/)) {
		if (!apps.length) return 'Hələ müraciətin yoxdur. “Vakansiyalar” bölməsində sənə uyğun olanlara bax və ya avto-müraciəti aktiv et.'
		const st = apps.map(a => currentStatus(a))
		const count = (s: string) => st.filter(x => x === s).length
		const inv = apps.filter((a, i) => isInvitation(st[i]))
		return `${apps.length} müraciətin var: ${list([count('sent') && `${count('sent')} göndərilib`, count('viewed') && `${count('viewed')} baxılıb`, count('test') && `${count('test')} testə dəvət`, count('interview') && `${count('interview')} müsahibəyə dəvət`, count('offer') && `${count('offer')} təklif`, count('rejected') && `${count('rejected')} rədd`] as string[])}.${inv.length ? ` Diqqət: ${inv.map(a => `${a.job.company} (${STATUS_LABEL[currentStatus(a)]})`).join(', ')} — cavab gözləyir.` : ''} Ən yüksək uyğunluq: ${apps.slice().sort((a, b) => b.match - a.match)[0].job.title} — ${apps.slice().sort((a, b) => b.match - a.match)[0].match}%.`
	}
	if (has(t, /vakansiya|iş tap|is tap|iş elan|uyğun iş|job/)) {
		const p = c.career.profile
		return `${p ? `Profilinə görə ${list(p.titles)} kimi vəzifələri, ${list(p.sectors) || 'bütün sahələri'} axtarıram${p.minSalary ? `, minimum ${p.minSalary} ₼` : ''}.` : 'Karyera profilini doldursan, uyğunluq daha dəqiq olacaq.'} Vakansiyalar hər səhər 06:00-da yenilənir; “Mənə uyğun” bölməsi 60%+ olanları göstərir.${c.career.subscription?.active ? ` Avto-müraciətin aktivdir (${PLANS[c.career.subscription.plan].name}, gündə ${c.career.subscription.dailyLimit}, hədd ${c.career.subscription.minMatch}%).` : ''}`
	}
	if (has(t, /peşə|pese|ixtisas|karyera|career|nə işləyim|universitet|hansı sahə/)) {
		const top = rankCombined(r, 3)
		if (!top.length || !top[0].score) return 'Karyera tövsiyəsi üçün ən azı bir test (IQ, 16 tip və ya maraqlar testi) lazımdır.'
		return `Bütün nəticələrinə görə ən uyğun istiqamətlər: ${top.map(x => `${x.career.name} (${x.score}%)`).join(', ')}.${r.riasec ? ` Maraq kodun ${r.riasec.code} — ${RIASEC_TYPES[r.riasec.code[0] as 'R'].careers.slice(0, 3).join(', ')} kimi peşələrə uyğun gəlir.` : ''} İxtisaslar: ${top[0].career.majors.slice(0, 3).join(', ')}.`
	}
	if (has(t, /\biq\b|intellekt|zəka|zeka|ağıl/)) {
		if (!r.iq) return 'IQ testini hələ keçməmisən. 45 dəqiqəlik testdir, 5 sahəni ölçür.'
		const ds = Object.entries(r.iq.domains).sort((a, b) => b[1].index - a[1].index)
		return `IQ göstəricin ${r.iq.iq}-dir (${r.iq.band.toLowerCase()}), iştirakçıların təxminən ${Math.round(r.iq.percentile)}%-dən yüksək. Ən güclü sahən — ${DOMAIN_LABEL[ds[0][0] as 'verbal'].toLowerCase()} (${ds[0][1].index}), ən zəif — ${DOMAIN_LABEL[ds[ds.length - 1][0] as 'verbal'].toLowerCase()} (${ds[ds.length - 1][1].index}). ${r.iq.correct}/${r.iq.total} düzgün cavab.`
	}
	if (has(t, /enneaq|ennea|motivasiya|qorxu/)) {
		if (!ennea) return 'Enneaqram testini keçsən, əsas motivasiyanı və qorxunu izah edərəm.'
		return `Enneaqram tipin ${r.ennea!.type}w${r.ennea!.wing} — ${ennea.name}. Əsas istəyin: ${ennea.coreDesire.toLowerCase()} Əsas qorxun: ${ennea.coreFear.toLowerCase()} Stress altında ${r.ennea!.type}-dən ${ennea.stressDirection}-ə doğru gedirsən; inkişafda isə ${ennea.growthDirection} tipinin keyfiyyətlərini qazanırsan.`
	}
	if (has(t, /big ?five|açıqlıq|aciqliq|məsuliyyət|ekstravers|xoşniyyət|emosional/)) {
		if (!r.big5) return 'Big Five testini keçməmisən — 50 ifadə, 8–10 dəqiqə.'
		return `Big Five profilin: ${BIG5_ORDER.map(d => `${BIG5_DOMAINS[d].name} ${r.big5!.domains[d]} (${levelWord[big5Level(r.big5!.domains[d])].toLowerCase()})`).join(', ')}.`
	}
	if (has(t, /maraq|riasec|holland|kod/)) {
		if (!r.riasec) return 'Karyera maraqları testini keçsən, sənə uyğun iş mühitini deyərəm.'
		const top = r.riasec.code.split('') as ('R' | 'I' | 'A' | 'S' | 'E' | 'C')[]
		return `Karyera kodun ${r.riasec.code}: ${top.map(x => RIASEC_TYPES[x].name).join(', ')}. ${RIASEC_TYPES[top[0]].workEnvironment}`
	}
	if (has(t, /mbti|16 tip|şəxsiyyət|sexsiyyet|tipim|introvert|ekstravert/)) {
		if (!mbti) return '16 tip şəxsiyyət testini keçsən, ünsiyyət və iş tərzini izah edərəm.'
		return `Şəxsiyyət tipin ${r.mbti!.code} — ${mbti.name}. ${mbti.tagline} ${mbti.workStyle}`
	}
	if (has(t, /ünsiyyət|unsiyyet|münasibət|munasibet|dost|ailə/)) {
		if (!mbti && !ennea) return 'Bunun üçün 16 tip və ya Enneaqram testinin nəticəsi lazımdır.'
		return [mbti && mbti.communication, mbti && `Dostluqda: ${mbti.friendship}`, ennea && ennea.relationships].filter(Boolean).join(' ')
	}
	if (has(t, /stress|gərgin|gergin|yorğun/)) {
		if (!mbti && !ennea && !r.big5) return 'Stress reaksiyanı izah etmək üçün şəxsiyyət testlərindən biri lazımdır.'
		return [mbti && mbti.stress, ennea && `Enneaqrama görə: ${ennea.stress}`, r.big5 && (r.big5.domains.N >= 65 ? 'Big Five-a görə emosional həssaslığın yüksəkdir — gərgin rollarda planlama və fasilələr vacibdir.' : r.big5.domains.N <= 35 ? 'Big Five-a görə stressə davamlısan.' : '')].filter(Boolean).join(' ')
	}
	if (has(t, /güclü|guclu|zəif|zeif|inkişaf|inkisaf|tərəf/)) {
		const s = [...(mbti?.strengths.slice(0, 3) || []), ...(ennea?.strengths.slice(0, 2) || [])]
		const w = [...(mbti?.weaknesses.slice(0, 2) || []), ...(ennea?.blindSpots.slice(0, 1) || [])]
		if (!s.length) return 'Güclü və zəif tərəflər üçün 16 tip və ya Enneaqram testini keç.'
		return `Güclü tərəflərin: ${s.join('; ')}. Diqqət etməli olduğun: ${w.join('; ')}.${mbti ? ` İnkişaf üçün: ${mbti.growth[0]}` : ''}`
	}
	if (has(t, /təhsil|tehsil/)) return talentArea(c, 'education', 'Təhsil')
	if (has(t, /\bdil|ingilis|rus dili|ielts|toefl/)) return talentArea(c, 'language', 'Dil bilikləri')
	if (has(t, /idman|sport/)) return talentArea(c, 'sport', 'İdman')
	if (has(t, /proqram|kompüter|excel|python/)) return talentArea(c, 'program', 'Proqram bilikləri')
	if (has(t, /iş təcrübə|is tecrube|təcrübəm|staj/)) return talentArea(c, 'work', 'İş təcrübəsi')
	if (has(t, /bacarıq|bacariq|xüsusi|talant/)) {
		const d = r.talent?.data
		if (!d) return talentArea(c, 'special', 'Xüsusi bacarıqlar')
		return `Talant balların: ${Object.values(d).map(v => `${talentLabel(v.text)} ${talentPercent(v.score)}%`).join(', ')}.`
	}
	if (has(t, /\bcv\b|rezyume|resume/)) return c.talentDone ? 'CV-n talant testindəki cavablarından avtomatik hazırlanıb: təhsil, iş, bacarıqlar, dillər. 3 şablon var, PDF kimi yükləyə bilərsən. Bölmələri redaktə etmək olar.' : 'CV bölməsi talant testindən sonra açılır — cavablarından avtomatik CV hazırlanır.'
	if (has(t, /sertifikat|nişan|nisan|badge/)) {
		const b = Object.keys(c.career.badges)
		return `${r.iq ? `IQ sertifikatın var (ID ${r.iq.certificateId}). ` : ''}${r.talent ? 'Talant sertifikatın da hazırdır. ' : ''}${b.length ? `${b.length} təsdiqlənmiş nişanın var.` : 'Təsdiqlənmiş nişanın yoxdur — “Planlar və ödənişlər”də ala bilərsən.'}`
	}
	if (has(t, /plan|ödəniş|odenis|abunə|qiymət|pul/)) return c.career.subscription?.active ? `${PLANS[c.career.subscription.plan].name} planın aktivdir (${PLANS[c.career.subscription.plan].price} ₼/ay, test rejimi).` : 'Pulsuz plandasan: bütün testlər, hesabatlar, vakansiyalar və əl ilə müraciət pulsuzdur. Avto-müraciət 15–35 ₼/ay (hazırda test rejimi).'
	if (has(t, /nəticə|netice|haqqımda|özüm|kiməm|ümumi/)) {
		const parts = [
			r.talent && `talant ${Math.round(Object.values(r.talent.data).reduce((a, v) => a + talentPercent(v.score), 0) / Object.values(r.talent.data).length)}%`,
			r.iq && `IQ ${r.iq.iq}`,
			r.mbti && `${r.mbti.code} (${mbti?.name})`,
			r.ennea && `Enneaqram ${r.ennea.type}w${r.ennea.wing}`,
			r.riasec && `maraq kodu ${r.riasec.code}`
		].filter(Boolean)
		return parts.length ? `Qısa profilin: ${parts.join(', ')}. Hər biri haqqında ayrıca soruşa bilərsən, məsələn “IQ-m necədir?” və ya “hansı peşə uyğundur?”.` : 'Hələ nəticən yoxdur. Testlərdən birini keç — sonra izah edərəm.'
	}
	if (has(t, /növbəti|novbeti|nə edim|ne edim|məsləhət|meslehet|addım/)) {
		const steps = nextSteps(r, c.career, c.talentDone, [])
		return steps.length ? `Növbəti addımların: ${steps.slice(0, 3).map((s, i) => `${i + 1}) ${s.title}`).join('; ')}.` : 'Hər şey qaydasındadır! Yeni vakansiyalara sabah 06:00-dan sonra bax.'
	}
	return `Bunu tam başa düşmədim, ${c.firstName}. Mənə nəticələrin (IQ, şəxsiyyət tipi, Enneaqram, Big Five, maraqlar, talant balları), uyğun peşələr, müraciətlər, müsahibəyə hazırlıq, CV və ya sertifikat haqqında sual ver.`
}
