import { ReactNode, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTestStatus } from 'components/AppShell/AppShell'
import { IQ_ITEMS } from 'tests/iq/data'
import { DOMAIN_DESC, DOMAIN_LABEL } from 'tests/iq/scoring'
import { MBTI_POLES, MBTI_QUESTIONS } from 'tests/mbti/data'
import { ENNEA_QUESTIONS, ENNEA_TYPES } from 'tests/enneagram/data'
import { BIG5_DOMAINS, BIG5_QUESTIONS } from 'tests/big5/data'
import { RIASEC_QUESTIONS, RIASEC_SCALE, RIASEC_TYPES } from 'tests/riasec/data'
import { SCALE } from 'pages/Tests/components/LikertRunner'
import { getPersona, viewingAs } from 'demo/viewAs'
import { card, Page, Tag } from 'pages/Jobs/ui'
import { Bullets } from 'pages/Tests/mbti/MbtiTest'

type TabId = 'flow' | 'talent' | 'iq' | 'mbti' | 'ennea' | 'big5' | 'riasec' | 'jobs'

const TABS: [TabId, string][] = [
	['flow', 'Sistem necə işləyir'],
	['talent', '1 · Talant'],
	['iq', '2 · IQ'],
	['mbti', '3 · 16 tip'],
	['ennea', '4 · Enneaqram'],
	['big5', '5 · Big Five'],
	['riasec', '6 · Maraqlar'],
	['jobs', 'Vakansiya prosesi']
]

const poleTitle = (p: string) => MBTI_POLES.find(x => x.pole === p)?.title || p
const OPP: Record<string, string> = { E: 'I', I: 'E', S: 'N', N: 'S', T: 'F', F: 'T', J: 'P', P: 'J' }

// ---------- per-test explanations ----------
const ABOUT: Record<Exclude<TabId, 'flow' | 'jobs'>, { why: string; how: string; used: string[] }> = {
	talent: {
		why: 'Şəxsin real keçmişini — təhsil, dil, xüsusi bacarıq, idman, iş və proqram biliklərini — toplayır və hər sahədə yaşıdları ilə müqayisə edir.',
		how: 'Cavablar serverdə hər sahə üçün bala çevrilir (məs. universitetin və ixtisasın çəkisi, dil səviyyəsi və sertifikat, iş stajı və vəzifə dərəcəsi) və eyni yaş qrupundakı istifadəçilərlə müqayisə olunaraq faizə çevrilir.',
		used: ['Talant hesabatı (6 sahə və ümumi faiz)', 'Talant sertifikatı və yaşa görə ad (məs. “Dinamik Töhfəçi”)', 'CV — təhsil, iş, bacarıq və dillər birbaşa bu cavablardan doldurulur', 'Karyera profili — “CV-dən doldur” düyməsi', 'Tam hesabat — karyera istiqamətlərində 25% çəki', 'TalentBot — sahələr üzrə suallara cavab']
	},
	iq: {
		why: 'Öyrənmə sürətini və analitik qabiliyyəti 5 sahədə ölçür: verbal, rəqəmsal, məntiqi, məkan və yaddaş.',
		how: 'Hər sualın çətinliyi var (1–5). Rasch modelində (IRT) düzgün cavabların hansı çətinlikdə olduğuna görə qabiliyyət (θ) hesablanır və IQ = 100 + 15·θ şkalasına çevrilir. Çətin sualın düzgün cavabı asan sualdan çox təsir edir. Hər sahə üçün ayrıca indeks çıxır.',
		used: ['IQ hesabatı, persentil və 5 sahə indeksi', 'IQ sertifikatı (ID ilə yoxlanılır)', 'Tam hesabat — karyera istiqamətlərində 40% çəki', 'Vakansiya uyğunluğu — “Analitik qabiliyyət” (7%) və bəzi vakansiyalarda minimum IQ', 'CV — “Nailiyyətlər” bölməsi', 'Koç — IQ ≥ 110 olduqda güclü tərəf kimi']
	},
	mbti: {
		why: 'Enerji mənbəyini (E/I), məlumatı necə qəbul etdiyini (S/N), qərar vermə üsulunu (T/F) və həyat tərzini (J/P) göstərir — ünsiyyət və iş tərzi üçün.',
		how: 'Hər ifadə bir oxa aiddir və bir qütbə yönəlib. Cavab −2…+2 kimi hesablanır (Neytral = 0) və həmin qütbə əlavə olunur. Hər oxda üstün gələn qütb tipin hərfini verir; faiz — üstünlüyün aydınlığıdır.',
		used: ['16 tip hesabatı: ünsiyyət, karyera, münasibətlər, stress', 'Vakansiya uyğunluğu — “Şəxsiyyət uyğunluğu” (14%): analitik, yaradıcı, ünsiyyətcil, təşkilatçı və s.', 'Müraciət məktubu və CV xülasəsi — güclü tərəflər', 'Koç — müsahibədə ünsiyyət tövsiyələri, “zəif tərəfiniz” sualına cavab', 'Tam hesabat — karyera istiqamətlərində 20% çəki']
	},
	ennea: {
		why: 'Davranışın arxasındakı əsas motivasiyanı və qorxunu, stressdə və inkişafda hansı istiqamətə getdiyini göstərir.',
		how: 'Hər ifadə 9 tipdən birinə aiddir. Hər tipin orta razılıq balı 0–100-ə çevrilir; ən yüksək tip əsas tipdir, qonşu tiplərdən yüksək olanı “qanad”dır (məs. 3w2).',
		used: ['Enneaqram hesabatı və diaqram', 'Vakansiya uyğunluğu — xüsusiyyət balları (məs. 1 → dəqiqlik, 8 → liderlik)', 'Koç — stress altında davranış barədə xəbərdarlıq', 'Tam hesabat — motivasiya və 15% karyera çəkisi']
	},
	big5: {
		why: 'Elmi cəhətdən ən etibarlı şəxsiyyət modeli: açıqlıq, məsuliyyətlilik, ekstraversiya, xoşniyyətlilik, emosional həssaslıq.',
		how: 'Hər ifadə bir ölçüyə aiddir; təxminən yarısı tərs ifadədir (razılıq balı azaldır). Ölçü üzrə orta 0–100-ə çevrilir: 65+ yüksək, 35− aşağı.',
		used: ['Big Five hesabatı və tövsiyələr', 'Vakansiya uyğunluğu — məsuliyyət → təşkilatçılıq/dəqiqlik, aşağı həssaslıq → stressə davamlılıq', 'Koç — güclü tərəflər və stresli rollar üçün xəbərdarlıq', 'Tam hesabat — inkişaf planı']
	},
	riasec: {
		why: 'Hansı fəaliyyətlərdən zövq aldığını göstərir: Realist, Tədqiqatçı, Yaradıcı, Sosial, Təşəbbüskar, Təşkilatçı.',
		how: 'Hər fəaliyyət bir tipə aiddir; tip üzrə orta “xoşlama” balı 0–100-ə çevrilir. Ən yüksək üç hərf karyera kodudur (məs. IAS).',
		used: ['Karyera maraqları hesabatı, peşə və ixtisas siyahıları', 'Vakansiya uyğunluğu — “Maraqlar” (10%): vakansiyanın Holland kodu ilə müqayisə', 'Tam hesabat — karyera istiqamətlərində 25% çəki']
	}
}

// ---------- talent test questions (from the backend question bank) ----------
type Stage = { name: string; formData: any }
const fd = (stages: Stage[] | undefined, name: string) => stages?.find(s => s?.name === name)?.formData
const a = (v: any) => (typeof v === 'string' ? v : v?.answer || '')

const TALENT_STAGES: { stage: string; area: string; purpose: string; questions: { q: string; why: string; get?: (s: Stage[]) => string }[] }[] = [
	{
		stage: 'Ümumi suallar',
		area: 'Təhsil',
		purpose: 'Şəxsin hazırkı vəziyyətini müəyyən edir və hansı sonrakı sualların göstəriləcəyini seçir.',
		questions: [
			{ q: 'Hazırda məşğuliyyətiniz:', why: 'Məktəbli, tələbə, işləyən və ya iş axtaran — müqayisə qrupunu və sonrakı sualları seçir.', get: s => a(fd(s, 'umumi-suallar')?.occupation) },
			{ q: 'Təhsiliniz:', why: 'Ən yüksək təhsil səviyyəsi — Təhsil balının əsasıdır; vakansiyalarda təhsil tələbi ilə müqayisə olunur.', get: s => a(fd(s, 'umumi-suallar')?.education) },
			{ q: 'Orta məktəb göstəriciləriniz aşağıdakılardan hansına uyğun gəlir?', why: 'Ali təhsili olmayanlar üçün akademik səviyyənin göstəricisi.', get: s => a(fd(s, 'umumi-suallar')?.schoolPerformance) }
		]
	},
	{
		stage: 'Orta texniki və ali təhsil',
		area: 'Təhsil',
		purpose: 'Universitetin, ixtisasın və qəbul nəticəsinin çəkisi Təhsil balını formalaşdırır; CV-nin “Təhsil” bölməsi buradan yaranır.',
		questions: [
			{ q: 'Təhsilinizlə bağlı detalları qeyd edin (səviyyə)', why: 'Bakalavr / magistr / doktorantura — hər pillə bala əlavə edir.', get: s => (fd(s, 'orta-texniki-ve-ali-tehsil-suallari')?.education || []).map((e: any) => a(e.tehsil)).join(', ') },
			{ q: 'Universitetin adı', why: 'Universitetin reytinqi Təhsil balına təsir edir; CV-də göstərilir.', get: s => (fd(s, 'orta-texniki-ve-ali-tehsil-suallari')?.education || []).map((e: any) => e.university).join(', ') },
			{ q: 'İxtisas', why: 'CV və vakansiya uyğunluğu üçün sahəni müəyyən edir.', get: s => (fd(s, 'orta-texniki-ve-ali-tehsil-suallari')?.education || []).map((e: any) => a(e.specialty)).join(', ') },
			{ q: 'Universitetə qəbul və bitirmə tarixi', why: 'Təhsilin davam edib-etmədiyini və CV-dəki dövrü göstərir.', get: s => (fd(s, 'orta-texniki-ve-ali-tehsil-suallari')?.education || []).map((e: any) => `${e.date?.start || ''} – ${e.date?.end || ''}`).join(', ') },
			{ q: 'Hansı meyarlarla qəbul olmusunuz', why: 'Qəbul imtahanı, olimpiada və ya xaricdə müraciət — qəbulun rəqabət səviyyəsini göstərir.', get: s => (fd(s, 'orta-texniki-ve-ali-tehsil-suallari')?.education || []).map((e: any) => a(e.admission)).join(', ') },
			{ q: 'Lokal imtahanın adını, topladığınız bal və maksimal bal', why: 'Qəbul balı yaşıdlarla müqayisədə Təhsil balını dəqiqləşdirir.', get: s => (fd(s, 'orta-texniki-ve-ali-tehsil-suallari')?.education || []).map((e: any) => e.examScore).filter(Boolean).join(', ') },
			{ q: 'Müraciət zamanı hansı kriteriyalarla qiymətləndirildiniz', why: 'Xaricdə təhsil üçün (GPA, SAT, esse və s.) — eyni məqsədlə.' }
		]
	},
	{
		stage: 'Olimpiada sualları',
		area: 'Təhsil',
		purpose: 'Olimpiada uğurları Təhsil balını əhəmiyyətli dərəcədə artırır və CV-nin “Nailiyyətlər” bölməsinə yazılır.',
		questions: [
			{ q: 'Olimpiada qalibi olmusunuzmu?', why: 'Bəli olduqda növbəti suallar açılır.', get: s => a(fd(s, 'olimpiada-suallari')?.wonOlympics) },
			{ q: 'Hansı fənn üzrə?', why: 'Fənn sahəsi karyera istiqamətinə işarədir.', get: s => a(fd(s, 'olimpiada-suallari')?.subjectOlympiad) },
			{ q: 'Ən yüksək hansı mərhələ?', why: 'Rayon → respublika → beynəlxalq: hər mərhələ daha çox bal verir.', get: s => a(fd(s, 'olimpiada-suallari')?.highestOlympiad) },
			{ q: 'Neçənci yer?', why: 'Yer balın son düzəlişidir.', get: s => a(fd(s, 'olimpiada-suallari')?.rankOlympiad) }
		]
	},
	{
		stage: 'Dil bilikləri',
		area: 'Dil bilikləri',
		purpose: 'Dil sayı, səviyyə və beynəlxalq sertifikat Dil balını verir; vakansiyalardakı dil tələbləri ilə müqayisə olunur; CV-nin “Dillər” bölməsi.',
		questions: [
			{ q: 'Xarici diliniz varmı? Xarici dilinizi qeyd edin', why: 'Hər dil ayrıca qiymətləndirilir.', get: s => (fd(s, 'dil-bilikleri-substage')?.languageSkills || []).map((l: any) => a(l.language)).join(', ') },
			{ q: 'Dil üzrə səviyyənizi qeyd edin', why: 'A1–C2 səviyyəsi balın əsas hissəsidir.', get: s => (fd(s, 'dil-bilikleri-substage')?.languageSkills || []).map((l: any) => `${a(l.language)}: ${a(l.langLevel)}`).join(', ') },
			{ q: 'Beynəlxalq sertifikatınız var? (IELTS, TOEFL və s.) Nəticəniz', why: 'Sertifikat səviyyəni təsdiqləyir və balı artırır; “Sənədlərin təsdiqi”ndə yüklənə bilər.', get: s => (fd(s, 'dil-bilikleri-substage')?.languageSkills || []).map((l: any) => a(l.engLangCert)).filter(Boolean).join(', ') }
		]
	},
	{
		stage: 'Xüsusi bacarıqlar',
		area: 'Xüsusi bacarıqlar',
		purpose: 'Yaradıcı bacarıqlar və onların nailiyyətləri Xüsusi bacarıq balını verir; CV-nin “Bacarıqlar” bölməsinə düşür.',
		questions: [
			{ q: 'Xüsusi bacarığınız var? Bacarığınızı qeyd edin', why: 'Musiqi, rəsm, rəqs, yazıçılıq və s.', get: s => (fd(s, 'xususi-bacariqlar-substage')?.skills || []).map((x: any) => x.answer).join(', ') },
			{ q: 'Hansı səviyyədə məşğulsunuz?', why: 'Həvəskar → peşəkar: balın əsas hissəsi.', get: s => (fd(s, 'xususi-bacariqlar-substage')?.skills || []).map((x: any) => x.level).filter(Boolean).join(', ') },
			{ q: 'Bacarığınıza görə əldə etdiyiniz nailiyyət', why: 'Müsabiqə, sərgi və ya mükafat balı xeyli artırır.', get: s => (fd(s, 'xususi-bacariqlar-substage')?.skills || []).map((x: any) => x.achievement).filter(Boolean).join('; ') }
		]
	},
	{
		stage: 'İdman',
		area: 'İdman',
		purpose: 'İdman fəaliyyəti intizam və rəqabət göstəricisidir; İdman balını verir.',
		questions: [
			{ q: 'İdmanla məşğul olursunuz? Hansı idman növləri?', why: 'Növ sayı və müntəzəmlik.', get: s => (fd(s, 'idman-substage')?.sports || []).map((x: any) => a(x.sport)).join(', ') },
			{ q: 'Hansı səviyyədə məşğulsunuz?', why: 'Həvəskar, peşəkar, millimizdə və s.', get: s => (fd(s, 'idman-substage')?.sports || []).map((x: any) => a(x.level)).join(', ') },
			{ q: 'Hansı turda, neçənci yer əldə etmisiniz?', why: 'Yarış nəticəsi balı artırır.', get: s => (fd(s, 'idman-substage')?.sports || []).map((x: any) => x.result).filter(Boolean).join('; ') }
		]
	},
	{
		stage: 'İş təcrübəsi',
		area: 'İş təcrübəsi',
		purpose: 'İş stajı, vəzifə və peşəkarlıq dərəcəsi İş təcrübəsi balını verir; CV-nin “İş təcrübəsi” bölməsi və karyera profilindəki təcrübə ili buradan gəlir.',
		questions: [
			{ q: 'İş təcrübəniz var? Müəssisənin adı', why: 'Hər iş yeri CV-də ayrıca bənd olur.', get: s => (fd(s, 'is-tecrubesi-substage')?.experiences || []).map((w: any) => w.company).join(', ') },
			{ q: 'Əmək fəaliyyəti forması', why: 'Tam ştat, yarımştat, təcrübə, frilans — staja fərqli təsir edir.', get: s => (fd(s, 'is-tecrubesi-substage')?.experiences || []).map((w: any) => a(w.workingActivityForm)).join(', ') },
			{ q: 'İşə başlama və ayrılma tarixi', why: 'Staj hesablanır; vakansiyaların “minimum təcrübə” tələbi ilə müqayisə olunur.', get: s => (fd(s, 'is-tecrubesi-substage')?.experiences || []).map((w: any) => `${w.startDate} – ${w.currentWorking ? 'hazırda' : w.endDate}`).join(', ') },
			{ q: 'Vəzifənizi qeyd edin', why: 'CV başlığı və istədiyiniz vəzifələrin ilkin təklifi.', get: s => (fd(s, 'is-tecrubesi-substage')?.experiences || []).map((w: any) => w.profession).join(', ') },
			{ q: 'Peşəkarlıq dərəcəsi', why: 'Təcrübəçi → rəhbər: məsuliyyət səviyyəsini göstərir.', get: s => (fd(s, 'is-tecrubesi-substage')?.experiences || []).map((w: any) => a(w.degreeOfProfes)).join(', ') }
		]
	},
	{
		stage: 'Proqram bilikləri',
		area: 'Proqram bilikləri',
		purpose: 'Ofis, dizayn, ixtisas proqramları və proqramlaşdırma dilləri — Proqram balı; CV bacarıqları və vakansiyalardakı bacarıq tələbləri ilə birbaşa müqayisə (uyğunluğun 32%-i).',
		questions: [
			{ q: 'Hansı proqram növləri üzrə təcrübəniz var? (MS Office, dizayn, proqramlaşdırma, digər)', why: 'Kateqoriyalar balı və vakansiya bacarıqlarını müəyyən edir.', get: s => (fd(s, 'proqram-bilikleri-substage')?.programSkills || []).flatMap((p: any) => p.whichLevel || []).map((l: any) => l.name).join(', ') },
			{ q: 'Proqram üzrə təcrübənizi qeyd edin (səviyyə)', why: 'Başlanğıc → peşəkar.', get: s => (fd(s, 'proqram-bilikleri-substage')?.programSkills || []).flatMap((p: any) => p.whichLevel || []).map((l: any) => `${l.name}: ${a(l.value)}`).join(', ') }
		]
	}
]

// ---------- UI ----------
const Q = ({ n, text, meta, why, answer, effect, children }: { n: number | string; text: ReactNode; meta?: ReactNode; why: ReactNode; answer?: ReactNode; effect?: ReactNode; children?: ReactNode }) => (
	<li className="rounded-xl border border-qss-border bg-white p-4 flex flex-col gap-2">
		<div className="flex gap-3">
			<span className="text-qss-base-300 tabular-nums text-sm w-8 shrink-0">{n}.</span>
			<div className="flex-1 flex flex-col gap-2">
				<p className="text-qss-primary font-semibold leading-snug">{text}</p>
				{children}
				{meta && <div className="flex flex-wrap gap-1.5">{meta}</div>}
				<p className="text-sm text-qss-inputText">
					<b className="text-qss-primary">Nə üçün: </b>
					{why}
				</p>
				{answer !== undefined && (
					<p className="text-sm rounded-lg bg-qss-transbg px-3 py-2 text-qss-alternative">
						<b>Cavab: </b>
						{answer || <span className="text-qss-inputText">cavab yoxdur</span>}
						{effect && <span className="text-qss-primary"> → {effect}</span>}
					</p>
				)}
			</div>
		</div>
	</li>
)

const About = ({ id }: { id: keyof typeof ABOUT }) => {
	const x = ABOUT[id]
	return (
		<div className={`${card} p-6 grid md:grid-cols-3 gap-6`}>
			<div>
				<p className="font-semibold text-qss-primary mb-1">Nə üçündür</p>
				<p className="text-sm text-qss-inputText leading-relaxed">{x.why}</p>
			</div>
			<div>
				<p className="font-semibold text-qss-primary mb-1">Necə hesablanır</p>
				<p className="text-sm text-qss-inputText leading-relaxed">{x.how}</p>
			</div>
			<div>
				<p className="font-semibold text-qss-primary mb-1">Nəticə harada istifadə olunur</p>
				<ul className="text-sm text-qss-inputText flex flex-col gap-1 list-disc pl-4">
					{x.used.map(u => (
						<li key={u}>{u}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

const Guide = () => {
	const { hash } = useLocation()
	const [tab, setTab] = useState<TabId>('flow')
	const [q, setQ] = useState('')
	const { results: r } = useTestStatus()
	const persona = getPersona(viewingAs())
	const who = persona ? `${persona.first_name}-in` : 'Sizin'
	useEffect(() => {
		const h = hash.replace('#', '') as TabId
		if (TABS.some(t => t[0] === h)) setTab(h)
	}, [hash])
	const match = (s: string) => !q || s.toLowerCase().includes(q.toLowerCase())
	const scaleLabel = (v?: number) => SCALE.find(x => x.value === v)?.label
	const stages = r.talent?.answers as Stage[] | undefined

	const body = useMemo(() => {
		switch (tab) {
			case 'flow':
				return <Flow />
			case 'talent':
				return (
					<>
						<About id="talent" />
						{!stages && <p className="text-sm text-qss-inputText">Bu profil talant testini tamamlamayıb — suallar və məqsədləri aşağıdadır, cavablar yoxdur.</p>}
						{TALENT_STAGES.map(st => (
							<section key={st.stage} className="flex flex-col gap-3">
								<h3 className="font-manrope text-lg font-bold text-qss-primary">
									{st.stage} <span className="text-sm font-normal text-qss-inputText">→ {st.area} balı</span>
								</h3>
								<p className="text-sm text-qss-inputText">{st.purpose}</p>
								<ol className="flex flex-col gap-2">
									{st.questions
										.filter(x => match(x.q))
										.map((x, i) => (
											<Q key={x.q} n={i + 1} text={x.q} why={x.why} answer={stages && x.get ? x.get(stages) : undefined} />
										))}
								</ol>
							</section>
						))}
					</>
				)
			case 'iq':
				return (
					<>
						<About id="iq" />
						<div className="grid md:grid-cols-5 gap-3">
							{(Object.keys(DOMAIN_LABEL) as (keyof typeof DOMAIN_LABEL)[]).map(d => (
								<div key={d} className="rounded-xl bg-qss-transbg p-3 text-sm">
									<p className="font-semibold text-qss-primary">{DOMAIN_LABEL[d]}</p>
									<p className="text-qss-inputText text-xs mt-1">{DOMAIN_DESC[d]}</p>
									{r.iq?.domains[d] && <p className="text-qss-alternative text-xs mt-1 font-semibold">{who} indeksi: {r.iq.domains[d].index} ({r.iq.domains[d].correct}/{r.iq.domains[d].total})</p>}
								</div>
							))}
						</div>
						<ol className="flex flex-col gap-2">
							{IQ_ITEMS.filter(it => match(`${it.prompt} ${DOMAIN_LABEL[it.domain]}`)).map((it, i) => {
								const given = r.iq?.answers[it.id]
								const ok = given === it.answer
								const opt = (id?: string) => {
									const o = it.options.find(x => x.id === id)
									return o ? `${o.id.toUpperCase()}${o.label ? ` — ${o.label}` : ''}` : ''
								}
								return (
									<Q
										key={it.id}
										n={i + 1}
										text={it.prompt}
										meta={
											<>
												<Tag tone="teal">{DOMAIN_LABEL[it.domain]}</Tag>
												<Tag>Çətinlik {it.difficulty}/5</Tag>
												<Tag tone="blue">Düzgün: {opt(it.answer)}</Tag>
												{it.memorize && <Tag tone="violet">Yaddaş: {it.memorize.seconds} san göstərilir</Tag>}
											</>
										}
										why={`${DOMAIN_LABEL[it.domain]} bacarığını ölçür. ${it.explanation}`}
										answer={r.iq ? (given ? `${opt(given)} ${ok ? '✓ düzgün' : '✗ səhv'}` : '') : undefined}
										effect={r.iq ? (ok ? `θ artır (${it.difficulty >= 4 ? 'çətin sual — güclü təsir' : 'asan/orta sual'})` : `θ azalır${it.difficulty <= 2 ? ' (asan sualda səhv daha çox təsir edir)' : ''}`) : undefined}
									>
										{(it.figure || it.memorize) && (
											<div className="flex flex-wrap gap-3 items-center">
												{it.memorize && <div className="text-sm bg-qss-background rounded-lg p-2 max-w-md" dangerouslySetInnerHTML={{ __html: it.memorize.content }} />}
												{it.figure && <div className="w-40 [&_svg]:w-full [&_svg]:h-auto" dangerouslySetInnerHTML={{ __html: it.figure }} />}
												{it.options.some(o => o.figure) && (
													<div className="flex gap-2">
														{it.options.map(o => (
															<div key={o.id} className={`w-14 rounded border ${o.id === it.answer ? 'border-qss-secondary' : 'border-qss-border'} [&_svg]:w-full [&_svg]:h-auto`} title={o.id} dangerouslySetInnerHTML={{ __html: o.figure || '' }} />
														))}
													</div>
												)}
											</div>
										)}
									</Q>
								)
							})}
						</ol>
					</>
				)
			case 'mbti':
				return (
					<>
						<About id="mbti" />
						<ol className="flex flex-col gap-2">
							{MBTI_QUESTIONS.filter(x => match(x.text)).map((x, i) => {
								const v = r.mbti?.answers[x.id]
								const c = v ? v - 3 : 0
								return (
									<Q
										key={x.id}
										n={i + 1}
										text={x.text}
										meta={
											<>
												<Tag tone="teal">
													{poleTitle(x.keyed)} ↔ {poleTitle(OPP[x.keyed])}
												</Tag>
												<Tag>Razılıq → {x.keyed}</Tag>
											</>
										}
										why={`${x.axis} oxunu ölçür. Razılaşmaq ${poleTitle(x.keyed)} (${x.keyed}) tərəfə, razılaşmamaq ${poleTitle(OPP[x.keyed])} (${OPP[x.keyed]}) tərəfə aparır.`}
										answer={r.mbti ? scaleLabel(v) : undefined}
										effect={r.mbti && v ? (c === 0 ? 'heç bir tərəfə təsir etmir' : `${c > 0 ? x.keyed : OPP[x.keyed]} tərəfə +${Math.abs(c)}`) : undefined}
									/>
								)
							})}
						</ol>
					</>
				)
			case 'ennea':
				return (
					<>
						<About id="ennea" />
						<ol className="flex flex-col gap-2">
							{ENNEA_QUESTIONS.filter(x => match(x.text)).map((x, i) => {
								const v = r.ennea?.answers[x.id]
								return (
									<Q
										key={x.id}
										n={i + 1}
										text={x.text}
										meta={<Tag tone="teal">Tip {x.type} — {ENNEA_TYPES[x.type]?.name}</Tag>}
										why={`Tip ${x.type} (${ENNEA_TYPES[x.type]?.name}) motivasiyasını ölçür: ${ENNEA_TYPES[x.type]?.coreDesire}`}
										answer={r.ennea ? scaleLabel(v) : undefined}
										effect={r.ennea && v ? `Tip ${x.type} balına ${v - 1}/4 qatqı` : undefined}
									/>
								)
							})}
						</ol>
					</>
				)
			case 'big5':
				return (
					<>
						<About id="big5" />
						<ol className="flex flex-col gap-2">
							{BIG5_QUESTIONS.filter(x => match(x.text)).map((x, i) => {
								const v = r.big5?.answers[x.id]
								const d = BIG5_DOMAINS[x.domain]
								return (
									<Q
										key={x.id}
										n={i + 1}
										text={x.text}
										meta={
											<>
												<Tag tone="teal">{d.name}</Tag>
												{x.keyed === '-' && <Tag tone="amber">Tərs ifadə</Tag>}
											</>
										}
										why={`${d.name}: ${d.short}${x.keyed === '-' ? ' Bu ifadə ilə razılaşmaq balı AZALDIR.' : ''}`}
										answer={r.big5 ? scaleLabel(v) : undefined}
										effect={r.big5 && v ? `${d.name} balına ${x.keyed === '+' ? v : 6 - v}/5` : undefined}
									/>
								)
							})}
						</ol>
					</>
				)
			case 'riasec':
				return (
					<>
						<About id="riasec" />
						<ol className="flex flex-col gap-2">
							{RIASEC_QUESTIONS.filter(x => match(x.text)).map((x, i) => {
								const v = r.riasec?.answers[x.id]
								const t = RIASEC_TYPES[x.type]
								return (
									<Q
										key={x.id}
										n={i + 1}
										text={x.text}
										meta={<Tag tone="teal">{t.name}</Tag>}
										why={`${t.name} maraq tipini ölçür: ${t.short}`}
										answer={r.riasec ? RIASEC_SCALE.find(s => s.value === v)?.label : undefined}
										effect={r.riasec && v ? `${t.name} balına ${v}/5` : undefined}
									/>
								)
							})}
						</ol>
					</>
				)
			case 'jobs':
				return <JobsFlow />
		}
	}, [tab, q, r])

	return (
		<Page
			eyebrow="İzahlar"
			title="Suallar bələdçisi"
			subtitle={
				<>
					Hər testin hər sualı: nəyi ölçür, cavab hansı nəticəyə necə təsir edir və bu nəticə saytın harasında istifadə olunur.
					{persona ? ` Cavablar — ${persona.first_name} ${persona.last_name} profilinə aiddir.` : ' Cavablarınız varsa, yanında göstərilir.'}
				</>
			}
		>
			<div className="flex flex-wrap gap-2" role="tablist">
				{TABS.map(([id, label]) => (
					<button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={`text-[14px] px-4 py-2 rounded-full transition-colors ${tab === id ? 'bg-qss-primary text-white' : 'bg-white border border-qss-border text-qss-inputText hover:text-qss-primary'}`}>
						{label}
					</button>
				))}
			</div>
			{tab !== 'flow' && tab !== 'jobs' && <input value={q} onChange={e => setQ(e.target.value)} placeholder="Sualda axtar" aria-label="Sualda axtar" className="bg-white border border-qss-border rounded-[14px] px-4 py-2.5 outline-none text-qss-primary max-w-md" />}
			<div className="flex flex-col gap-5">{body}</div>
		</Page>
	)
}

const Flow = () => {
	const rows: [string, string, string][] = [
		['Qeydiyyat', 'Ad, cins, doğum tarixi, şəkil', 'Bütün hesabatların başlığı, sertifikat, CV, yaş qrupu müqayisəsi'],
		['1 · Talant testi', 'Təhsil, dil, bacarıq, idman, iş, proqramlar', 'Talant hesabatı, talant sertifikatı, CV, karyera profili'],
		['2 · IQ', '48 sual, 5 sahə', 'IQ hesabatı və sertifikatı, karyera istiqamətləri, analitik rollarda uyğunluq'],
		['3 · 16 tip', '64 ifadə, 4 ox', 'Ünsiyyət/karyera/münasibət hesabatı, müraciət məktubu, koç tövsiyələri'],
		['4 · Enneaqram', '63 ifadə, 9 tip', 'Motivasiya hesabatı, stress xəbərdarlığı, xüsusiyyət balları'],
		['5 · Big Five', '50 ifadə, 5 ölçü', 'Şəxsiyyət profili, uyğunluqda xüsusiyyətlər, inkişaf planı'],
		['6 · Maraqlar', '48 fəaliyyət, 6 tip', 'Karyera kodu, peşə/ixtisas siyahıları, uyğunluqda maraqlar'],
		['Karyera profili', 'Bacarıqlar, il, sahələr, şəhər, maaş', 'Hər vakansiya ilə uyğunluq faizi, avto-müraciət seçimi'],
		['Gündəlik lent (06:00)', 'Real (Arbeitnow) + nümunə vakansiyalar', 'Vakansiyalar, “Bu gün yeni”, avto-müraciət'],
		['Müraciət', 'Uyğunluq + profil + testlər', 'Fərdi müraciət məktubu, status izləmə, gündəlik hesabat'],
		['Dəvət', 'İşəgötürən cavabı', 'Hazır cavab mətni, müsahibə hazırlığı hesabatı, təşəkkür məktubu'],
		['TalentBot', 'Bütün yuxarıdakılar', 'Şəxsin öz nəticələri ilə cavab verir']
	]
	return (
		<>
			<div className={`${card} p-6 overflow-x-auto`}>
				<table className="w-full text-sm min-w-[640px]">
					<thead>
						<tr className="text-left text-qss-inputText border-b border-qss-border">
							<th className="py-2 pr-4 font-semibold">Addım</th>
							<th className="py-2 pr-4 font-semibold">Nə daxil edilir</th>
							<th className="py-2 font-semibold">Nəyi yaradır</th>
						</tr>
					</thead>
					<tbody>
						{rows.map(([a1, b, c]) => (
							<tr key={a1} className="border-b border-qss-border/60 align-top">
								<td className="py-2.5 pr-4 font-semibold text-qss-primary whitespace-nowrap">{a1}</td>
								<td className="py-2.5 pr-4 text-qss-inputText">{b}</td>
								<td className="py-2.5 text-qss-inputText">{c}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className={`${card} p-6 flex flex-col gap-3`}>
				<p className="font-semibold text-qss-primary">Tam hesabatda karyera istiqamətləri necə sıralanır</p>
				<Bullets items={['IQ profili — 40% (istiqamətin tələb etdiyi sahələr: məs. proqramçı üçün məntiqi 40%, rəqəmsal 25%)', 'Talant balları — 25% (məs. proqram bilikləri, təhsil)', 'Karyera maraqları (RIASEC) — 25%', '16 tip — 20% (tipin tövsiyə olunan peşələri arasında olub-olmaması)', 'Enneaqram — 15%', 'Yalnız keçilmiş testlər nəzərə alınır; çəkilər onların cəminə görə bölünür.']} />
			</div>
			<div className={`${card} p-6 flex flex-col gap-3`}>
				<p className="font-semibold text-qss-primary">Sertifikatlar</p>
				<Bullets items={['IQ sertifikatı: IQ testi tamamlananda; 2 il etibarlı; unikal ID ilə “Sertifikatı yoxla” səhifəsində təsdiqlənir.', 'Talant sertifikatı: talant testindən sonra; yaşa və ümumi faizə görə ad (məs. 23–29 yaş, 70%+ → “Erkən Karyera Lideri”).', 'Təsdiqlənmiş nişan (ödənişli): nəticəni profil və müraciətlərdə “təsdiqlənmiş” kimi göstərir.', 'Demo profillərin sertifikatları ictimai reyestrə yazılmır.']} />
			</div>
			<div className={`${card} p-6 flex flex-col gap-3`}>
				<p className="font-semibold text-qss-primary">CV necə yaranır</p>
				<Bullets items={['Təhsil, iş təcrübəsi, bacarıqlar və dillər talant testinin cavablarından avtomatik yazılır.', 'Xülasəyə 16 tip testinin güclü tərəfləri, “Nailiyyətlər”ə olimpiada və IQ nəticəsi əlavə olunur.', 'Şəxs hər bölməni redaktə edə, 3 şablondan birini seçib PDF/PNG yükləyə bilər; Azərbaycan və ingilis dilində.']} />
			</div>
			<p className="text-sm text-qss-inputText">
				Hər sualın izahı üçün yuxarıdakı test bölmələrinə keçin. Demo profilləri <Link to="/profile/personas" className="text-qss-secondary font-semibold">buradan</Link> seçin.
			</p>
		</>
	)
}

const JobsFlow = () => {
	const steps: [string, string][] = [
		['1. Hər gün 06:00 — lent yenilənir', 'Server Arbeitnow-un açıq API-sindən uzaqdan iş elanlarını (real, orijinal elana keçidlə) və nümunə bazasından 14 yerli vakansiyanı (uydurma şirkətlər, “Nümunə” işarəli) götürür. Son 21 gün saxlanılır.'],
		['2. Uyğunluq hesablanır', 'Hər vakansiya şəxsin profili və test nəticələri ilə müqayisə olunur: Bacarıqlar 32%, Təcrübə 14%, Şəxsiyyət uyğunluğu 14%, Maraqlar 10%, Dillər 8%, Seçimlər (şəhər, sahə, maaş, vəzifə) 8%, Təhsil 7%, Analitik qabiliyyət 7%. Nəticə 0–100%; səbəblər və çatışmayan bacarıqlar göstərilir.'],
		['3. Müraciət', 'Əl ilə: “Müraciət et” düyməsi. Avtomatik (Start/Pro plan): sistem gün ərzində ilk girişdə həddən (məs. 65%) yuxarı yeni vakansiyalara müraciət edir, gündəlik limitə qədər. Hər müraciətə profilə və testlərə əsaslanan fərdi məktub yazılır.'],
		['4. Göndəriş', 'Nümunə vakansiyalar: müraciət sistem daxilində göndərilir. Real beynəlxalq vakansiyalar: işəgötürənin öz forması olduğu üçün paket hazırlanır, şəxs elanı açıb göndərir və “Göndərdim” basır.'],
		['5. Statuslar', 'Göndərildi → Baxıldı → Testə dəvət / Müsahibəyə dəvət → Təklif və ya Rədd. Nümunə vakansiyalarda cavablar simulyasiyadır (uyğunluq yüksəkdirsə dəvət ehtimalı artır); demo profillərdə statuslar əvvəlcədən təyin olunub. Real vakansiyalarda şəxs statusu özü qeyd edir.'],
		['6. Dəvət gələndə', 'Sistem 3 uyğun vaxtla cavab mətni hazırlayır, “Müraciətlərim”də və koçda xəbərdarlıq çıxır, sidebar-da narıncı say görünür.'],
		['7. Müsahibəyə hazırlıq', 'Koç hesabatı: işəgötürən nə axtarır, vurğulanacaq güclü tərəflər, zəif nöqtələrə cavab, 10–12 gözlənilən sual və ipuçları, STAR şablonu, seçim mərhələləri üzrə məsləhət, ünsiyyət tərzi, şirkət araşdırması, 5 günlük plan.'],
		['8. Müsahibədən sonra', '“Müsahibə keçdi” qeyd olunur → təşəkkür məktubu, 5–7 gün sonra xatırlatma, nəticə qeydi.'],
		['9. Gündəlik hesabat', 'Bu gün yeni vakansiya, bu gün müraciət (avtomatik/əl ilə), cəmi, cavab nisbəti, dəvətlər və son 7 günün qrafiki.'],
		['10. Ödəniş', 'Planlar və nişanlar test rejimindədir — forma işləyir, kartdan pul tutulmur.']
	]
	return (
		<ol className="flex flex-col gap-3">
			{steps.map(([t, d]) => (
				<li key={t} className={`${card} p-5`}>
					<p className="font-semibold text-qss-primary">{t}</p>
					<p className="text-sm text-qss-inputText mt-1 leading-relaxed">{d}</p>
				</li>
			))}
		</ol>
	)
}

export default Guide
