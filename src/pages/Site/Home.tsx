// Public landing page: AssessFirst-style structure, Assessivo-style test explanations,
// CDS-ES colours and charts. Every figure on this page is a fact about Talent Score.
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TESTS } from 'tests/registry'
import { IQ_ITEMS } from 'tests/iq/data'
import { MBTI_QUESTIONS } from 'tests/mbti/data'
import { ENNEA_QUESTIONS } from 'tests/enneagram/data'
import { BIG5_QUESTIONS } from 'tests/big5/data'
import { RIASEC_QUESTIONS } from 'tests/riasec/data'
import { PLANS, BADGE_PRICE } from 'jobs/billing'
import { AVATARS } from 'demo/avatars'
import { PERSONAS } from 'demo/personas'
import { CATEGORY, CDS, TALENT_COLOR } from 'report/design'
import { OverallRing, SegBar } from 'report/charts'
import { btnLine, btnMain, SiteFooter, SiteHeader, TEST_ICON } from './Chrome'

export const SAMPLE_PEOPLE = ['p16', 'p04', 'p12']
const svg = (s?: string) => (s ? `data:image/svg+xml;utf8,${encodeURIComponent(s)}` : '')
const TALENT_Q = 46
const TOTAL_Q = TALENT_Q + IQ_ITEMS.length + MBTI_QUESTIONS.length + ENNEA_QUESTIONS.length + BIG5_QUESTIONS.length + RIASEC_QUESTIONS.length

const SAMPLE_Q: Record<string, string> = {
	talent: 'Hazırda məşğuliyyətiniz: məktəbli, tələbə, işləyirəm, iş axtarıram…',
	iq: IQ_ITEMS.find(i => !i.figure && !i.memorize)?.prompt || '',
	mbti: MBTI_QUESTIONS[0].text,
	ennea: ENNEA_QUESTIONS[0].text,
	big5: BIG5_QUESTIONS[0].text,
	riasec: RIASEC_QUESTIONS[0].text
}
const GETS: Record<string, string[]> = {
	talent: ['6 sahə üzrə persentil', 'Talant sertifikatı', 'Cavablardan hazır CV'],
	iq: ['IQ və persentil', '5 sahə indeksi', 'IQ sertifikatı, məşq planı'],
	mbti: ['4 hərfli tip', 'İş, ünsiyyət, münasibət', 'Karyera yolları'],
	ennea: ['Əsas tip və qanad', 'Motivasiya və qorxu', 'Stress və inkişaf yolu'],
	big5: ['5 ölçü üzrə profil', 'Uyğun rollar', 'Fərdi tövsiyələr'],
	riasec: ['3 hərfli karyera kodu', 'Peşə və ixtisaslar', 'Uyğun iş mühiti']
}
const COLORS = Object.values(CATEGORY)

const Eyebrow = ({ children }: { children: string }) => <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-cds-teal">{children}</p>
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="font-manrope text-[30px] sm:text-[40px] font-extrabold leading-[1.1] text-cds-heading" style={{ textWrap: 'balance' } as any}>{children}</h2>

// Hero visual: a small CDS-ES result card for a demo person.
const HeroCard = () => {
	const p = PERSONAS.find(x => x.id === 'p16')!
	const rows: [string, number, string][] = [
		['Təhsil', p.talent.education, TALENT_COLOR.education],
		['Dil', p.talent.language, TALENT_COLOR.language],
		['Bacarıq', p.talent.special, TALENT_COLOR.special],
		['İş', p.talent.work, TALENT_COLOR.work],
		['İdman', p.talent.sport, TALENT_COLOR.sport],
		['Proqram', p.talent.program, TALENT_COLOR.program]
	]
	const avg = rows.reduce((a, r) => a + r[1], 0) / rows.length
	const code = (Object.keys(p.riasec) as (keyof typeof p.riasec)[]).sort((a, b) => p.riasec[b] - p.riasec[a]).slice(0, 3).join('')
	return (
		<div className="relative">
			<div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,#D9F1EC,transparent_60%),radial-gradient(circle_at_80%_80%,#E8E0F3,transparent_55%)]" aria-hidden="true" />
			<div className="relative rounded-3xl bg-white shadow-[0_20px_60px_rgba(13,79,79,0.18)] overflow-hidden">
				<div className="px-6 py-4 text-white flex items-center justify-between" style={{ background: CDS.gradient }}>
					<span className="font-medium">Talant Hesabatı</span>
					<span className="text-[12px] bg-white/20 rounded-full px-3 py-1">Nümunə · demo profil</span>
				</div>
				<div className="p-6 grid grid-cols-[auto_1fr] gap-5 items-center">
					<img src={svg(AVATARS.p16)} alt="" className="w-16 h-16 rounded-full bg-cds-paper" />
					<div>
						<p className="font-manrope text-xl font-bold text-cds-heading">
							{p.first_name} {p.last_name}
						</p>
						<p className="text-[13px] text-cds-muted">{p.headline}</p>
					</div>
				</div>
				<div className="px-6 grid grid-cols-6 gap-2">
					{rows.map(([l, v, c]) => (
						<div key={l} className="flex flex-col gap-1 min-w-0">
							<span className="text-[11px] text-cds-muted truncate">{l}</span>
							<span className="rounded py-1 text-center text-white text-[13px] font-semibold" style={{ background: c }}>
								{v}
							</span>
						</div>
					))}
				</div>
				<div className="p-6 grid grid-cols-[150px_1fr] gap-5 items-center">
					<OverallRing value={avg} size={150} display={avg.toFixed(1)} />
					<div className="flex flex-col gap-3">
						{rows.slice(0, 3).map(([l, v, c]) => (
							<div key={l} className="flex flex-col gap-1">
								<div className="flex justify-between text-[12px] font-semibold text-cds-ink">
									<span>{l}</span>
									<span>{v}%</span>
								</div>
								<SegBar value={v} color={c} height={9} />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="absolute -bottom-6 -left-4 sm:-left-8 rounded-2xl bg-white shadow-xl px-4 py-3 flex items-center gap-3">
				<span className="w-10 h-10 rounded-full grid place-items-center text-white font-bold" style={{ background: CATEGORY.purple }}>
					{p.mbti[0]}
				</span>
				<span className="text-[13px] leading-tight">
					<b className="block text-cds-heading">16 tip: {p.mbti}</b>
					<span className="text-cds-muted">Karyera kodu {code}</span>
				</span>
			</div>
		</div>
	)
}

// Vacancy cards as they appear in the app (sample data, invented companies).
const JobsMock = () => {
	const jobs: [string, string, number, string[], string][] = [
		['Data analitik', 'Rəqəm Laboratoriyası · Bakı', 86, ['SQL', 'Python', 'Power BI'], CATEGORY.navy],
		['Texniki rəhbər (Tech Lead)', 'Lumenkod Studiya · Bakı', 79, ['Node.js', 'Bulud', 'Komanda idarəetməsi'], CATEGORY.purple],
		['Maliyyə analitiki', 'Mərmər Kredit · Bakı', 64, ['Excel', '1C', 'Hesabatlılıq'], CATEGORY.orange]
	]
	return (
		<div className="relative">
			<div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle_at_20%_30%,#E8E0F3,transparent_60%),radial-gradient(circle_at_80%_70%,#D9F1EC,transparent_55%)]" aria-hidden="true" />
			<div className="relative rounded-3xl bg-white shadow-[0_20px_60px_rgba(13,79,79,0.15)] p-5 flex flex-col gap-3">
				<div className="flex items-center justify-between px-1">
					<p className="font-manrope font-bold text-cds-heading">Vakansiyalar · bu gün 14 yeni</p>
					<span className="text-[12px] rounded-full bg-[#E9F5F3] text-cds-teal font-semibold px-3 py-1">Sizə uyğun: 6</span>
				</div>
				{jobs.map(([t, c, m, sk, col]) => (
					<div key={t} className="rounded-2xl border border-cds-line p-4 flex gap-4 items-center">
						<div className="relative w-14 h-14 shrink-0">
							<svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90" aria-hidden="true">
								<circle cx="18" cy="18" r="15" fill="none" stroke="#EEF1F1" strokeWidth="4" />
								<circle cx="18" cy="18" r="15" fill="none" stroke={m >= 75 ? CDS.teal : '#D69E2E'} strokeWidth="4" strokeLinecap="round" strokeDasharray={`${(m / 100) * 94.2} 94.2`} />
							</svg>
							<span className="absolute inset-0 grid place-items-center text-[13px] font-bold text-cds-heading">{m}%</span>
						</div>
						<div className="flex-1 min-w-0">
							<p className="font-semibold text-cds-heading truncate">{t}</p>
							<p className="text-[13px] text-cds-muted">{c}</p>
							<div className="flex flex-wrap gap-1.5 mt-1.5">
								{sk.map(x => (
									<span key={x} className="text-[11px] font-semibold rounded-full px-2 py-0.5 text-white" style={{ background: col }}>
										{x}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
				<div className="rounded-2xl p-4 text-white flex items-center justify-between" style={{ background: CDS.gradient }}>
					<span className="text-[14px]">Avto-müraciət: bu gün 3 müraciət hazırlandı</span>
					<span className="text-[12px] bg-white/20 rounded-full px-3 py-1">Pro</span>
				</div>
			</div>
		</div>
	)
}

const Home = () => {
	const { state } = useLocation() as { state?: { scrollTo?: string } }
	const [faq, setFaq] = useState<number | null>(0)
	useEffect(() => {
		if (state?.scrollTo) setTimeout(() => document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: 'smooth' }), 60)
	}, [state?.scrollTo])

	const faqs: [string, string][] = [
		['Talent Score nədir?', 'Talent Score Azərbaycan dilində işləyən talant qiymətləndirmə platformasıdır: 6 test, CDS-ES standartında ətraflı hesabatlar, sertifikatlar, avtomatik CV, gündəlik vakansiyalar və profilə uyğun avto-müraciət.'],
		['Testlər pulsuzdurmu?', 'Bəli. Bütün 6 test, hesabatlar, tam hesabat, sertifikatlar, CV və vakansiyalarla uyğunluq pulsuzdur. Ödənişli olan yalnız təsdiqlənmiş nişanlar və avto-müraciət planlarıdır.'],
		['Nəticələr nə qədər dəqiqdir?', 'IQ testi Rasch (IRT) modeli ilə hesablanır və təxmini göstəricidir; klinik IQ testini əvəz etmir. Şəxsiyyət testləri davranış meylini göstərir, bacarığı yox. Ən dəqiq mənzərə bir neçə testin birlikdə nəticəsindən yaranır.'],
		['Hesabatda nə olur?', 'Hər test üçün 8–12 səhifəlik hesabat: titul səhifə, sahələr üzrə ballar və səviyyələr, güclü tərəflər, risklər, konkret addımlar, karyera istiqamətləri və 30 gün / 90 gün / 1 il inkişaf planı. PDF kimi yükləmək olar.'],
		['Sertifikatı işəgötürən necə yoxlayır?', 'Hər sertifikatın unikal ID-si var. İşəgötürən “Sertifikatı yoxla” səhifəsində ID-ni daxil edib sertifikatın Talent Score tərəfindən verildiyini təsdiqləyir.'],
		['Vakansiyalar haradan gəlir?', 'Hər gün səhər 06:00-da lent yenilənir: açıq iş elanı API-sindən real uzaqdan vakansiyalar və “Nümunə” işarəli yerli vakansiyalar. Hər vakansiya üçün profilinizlə uyğunluq faizi hesablanır.'],
		['Məlumatlarım kimə görünür?', 'Nəticələriniz yalnız sizə görünür. Paylaşma kartı, sertifikat və ya müraciət yalnız siz göndərdikdə başqasına çatır.']
	]

	return (
		<div className="min-h-screen bg-white text-cds-ink font-inter overflow-x-hidden">
			<SiteHeader />

			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(180deg,#F2FAF8_0%,#FFFFFF_100%)]" aria-hidden="true" />
				<div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 pt-14 pb-20 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
					<div className="flex flex-col gap-6">
						<Eyebrow>İnsan + Süni intellekt</Eyebrow>
						<h1 className="font-manrope text-[40px] sm:text-[56px] font-extrabold leading-[1.04] text-cds-heading" style={{ textWrap: 'balance' } as any}>
							Potensialınızı ölçün. <span className="bg-clip-text text-transparent" style={{ backgroundImage: CDS.gradient }}>Karyeranızı ağıllı qurun.</span>
						</h1>
						<p className="text-[18px] leading-relaxed text-cds-muted max-w-xl">
							6 elmi əsaslı test, CDS-ES standartında ətraflı hesabatlar, yoxlanıla bilən sertifikat, avtomatik CV və hər gün sizə uyğun vakansiyalar — hamısı Azərbaycan dilində.
						</p>
						<div className="flex flex-wrap gap-3">
							<Link to="/register" className={btnMain}>
								Pulsuz başla →
							</Link>
							<Link to={`/sample/${SAMPLE_PEOPLE[0]}/full`} className={btnLine}>
								Nümunə hesabata bax
							</Link>
						</div>
						<ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-cds-muted">
							{['Qeydiyyat 1 dəqiqə', 'Nəticə dərhal', 'Hesabat və sertifikat pulsuz'].map(t => (
								<li key={t} className="flex items-center gap-2">
									<span className="w-5 h-5 rounded-full grid place-items-center text-white text-[11px]" style={{ background: CDS.teal }}>
										✓
									</span>
									{t}
								</li>
							))}
						</ul>
					</div>
					<HeroCard />
				</div>
			</section>

			{/* Models strip */}
			<section className="border-y border-cds-line bg-white">
				<div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-4 items-center">
					<p className="text-[14px] text-cds-muted">Testlər tanınmış elmi modellərə əsaslanır</p>
					<div className="flex flex-wrap justify-center gap-3">
						{['Rasch / IRT', 'Big Five (IPIP)', 'Holland RIASEC', 'Enneaqram', '16 şəxsiyyət tipi', 'CDS-ES hesabat standartı'].map(t => (
							<span key={t} className="rounded-full border border-cds-line px-4 py-2 text-[14px] font-semibold text-cds-heading bg-cds-paper">
								{t}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* How it works */}
			<section id="how" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-10 scroll-mt-24">
				<div className="flex flex-col gap-3 max-w-3xl">
					<Eyebrow>Necə işləyir</Eyebrow>
					<H2>Testdən işə qədər dörd addım</H2>
				</div>
				<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
					{[
						['01', 'Qeydiyyat və profil', 'Ad, cins, yaş və şəkil — hesabat və sertifikatlar sizin adınıza hazırlanır.'],
						['02', 'Testlər', 'İstədiyiniz ardıcıllıqla 6 testi keçin; yarımçıq test yadda saxlanılır.'],
						['03', 'Hesabat, sertifikat, CV', 'Hər test üçün ətraflı hesabat, ID ilə yoxlanılan sertifikat və cavablarınızdan CV.'],
						['04', 'Vakansiya və müraciət', 'Hər gün yeni vakansiyalar, uyğunluq faizi, avto-müraciət və müsahibəyə hazırlıq.']
					].map(([n, t, d], i) => (
						<div key={n} className="rounded-3xl p-7 flex flex-col gap-4 border border-cds-line bg-white hover:shadow-lg transition">
							<span className="font-manrope text-[44px] font-extrabold leading-none" style={{ color: COLORS[i] }}>
								{n}
							</span>
							<p className="font-manrope text-xl font-bold text-cds-heading">{t}</p>
							<p className="text-[15px] text-cds-muted leading-relaxed">{d}</p>
						</div>
					))}
				</div>
			</section>

			{/* Stat band */}
			<section style={{ background: CDS.gradient }}>
				<div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
					{[
						['6', 'test — bacarıq, intellekt, şəxsiyyət, maraq'],
						[`${TOTAL_Q}+`, 'sual və ifadə'],
						['8–12', 'səhifəlik hesabat hər test üçün'],
						['06:00', 'hər gün yeni vakansiyalar']
					].map(([v, l]) => (
						<div key={l} className="flex flex-col gap-2">
							<span className="font-manrope text-[44px] sm:text-[56px] font-extrabold leading-none">{v}</span>
							<span className="text-white/80 text-[15px]">{l}</span>
						</div>
					))}
				</div>
			</section>

			{/* Tests */}
			<section id="tests" className="bg-cds-paper scroll-mt-24">
				<div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-10">
					<div className="flex flex-col gap-3 max-w-3xl">
						<Eyebrow>Testlər</Eyebrow>
						<H2>Altı test, bir tam profil</H2>
						<p className="text-[17px] text-cds-muted">Hər test ayrıca hesabat verir. İki və daha çox test keçdikdə nəticələr bir tam hesabatda birləşir və karyera tövsiyələri dəqiqləşir.</p>
					</div>
					<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
						{TESTS.map((t, i) => {
							const I = TEST_ICON[t.id]
							return (
								<article key={t.id} id={`test-${t.id}`} className="scroll-mt-28 rounded-3xl bg-white p-7 flex flex-col gap-5 shadow-sm border border-cds-line">
									<div className="flex items-center gap-3">
										<span className="w-12 h-12 rounded-2xl grid place-items-center text-white" style={{ background: COLORS[i] }}>
											<I />
										</span>
										<div>
											<p className="text-[12px] font-bold uppercase tracking-[0.14em] text-cds-muted">Test {t.number}</p>
											<h3 className="font-manrope text-lg font-bold text-cds-heading leading-snug">{t.title}</h3>
										</div>
									</div>
									<p className="text-[15px] text-cds-muted leading-relaxed">{t.measures}</p>
									<div className="flex gap-2 text-[13px] font-semibold">
										<span className="rounded-full bg-cds-paper px-3 py-1">{t.questions}</span>
										<span className="rounded-full bg-cds-paper px-3 py-1">{t.minutes}</span>
									</div>
									<div className="rounded-2xl bg-[#F2FAF8] p-4 text-[14px]">
										<p className="text-[12px] font-bold uppercase tracking-[0.12em] text-cds-teal mb-1">Nümunə sual</p>
										<p className="text-cds-ink leading-snug">“{SAMPLE_Q[t.id]}”</p>
									</div>
									<ul className="flex flex-col gap-1.5 text-[14px] text-cds-ink flex-1">
										{GETS[t.id].map(g => (
											<li key={g} className="flex gap-2">
												<span style={{ color: COLORS[i] }}>●</span>
												{g}
											</li>
										))}
									</ul>
									<div className="flex flex-wrap gap-3">
										<Link to="/register" className="text-[14px] font-semibold text-white rounded-full px-4 py-2" style={{ background: COLORS[i] }}>
											Testə başla
										</Link>
										<Link to={`/sample/${SAMPLE_PEOPLE[0]}/${t.id}`} className="text-[14px] font-semibold text-cds-heading rounded-full px-4 py-2 border border-cds-line hover:border-cds-teal">
											Nümunə hesabat
										</Link>
									</div>
								</article>
							)
						})}
					</div>
				</div>
			</section>

			{/* Samples */}
			<section id="samples" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-10 scroll-mt-24">
				<div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-end">
					<div className="flex flex-col gap-3">
						<Eyebrow>Nə alacaqsınız</Eyebrow>
						<H2>Hesabatları əvvəlcədən görün</H2>
					</div>
					<p className="text-[17px] text-cds-muted">Aşağıdakılar demo profillərin (uydurma şəxslər) real hesablanmış hesabatlarıdır. Siz də testləri keçəndən sonra eyni formatda, öz adınıza hesabat alacaqsınız.</p>
				</div>
				<div className="grid gap-6 lg:grid-cols-3">
					{SAMPLE_PEOPLE.map((id, i) => {
						const p = PERSONAS.find(x => x.id === id)!
						return (
							<div key={id} className="rounded-3xl border border-cds-line overflow-hidden bg-white flex flex-col">
								<Link to={`/sample/${id}/full`} className="block bg-cds-paper aspect-[4/3] overflow-hidden relative group">
									<img src={`/samples/${id}-full.png`} alt={`${p.first_name} ${p.last_name} — tam hesabatın titul səhifəsi`} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition" loading="lazy" onError={e => ((e.currentTarget.style.display = 'none'))} />
									<span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-cds-heading">Tam hesabat · nümunə</span>
								</Link>
								<div className="p-6 flex flex-col gap-4 flex-1">
									<div className="flex items-center gap-3">
										<img src={svg(AVATARS[id])} alt="" className="w-12 h-12 rounded-full bg-cds-paper" />
										<div>
											<p className="font-bold text-cds-heading">
												{p.first_name} {p.last_name}
											</p>
											<p className="text-[13px] text-cds-muted">{p.headline}</p>
										</div>
									</div>
									<div className="flex flex-wrap gap-2 mt-auto">
										{(['full', 'talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec', 'certificates'] as const).map(k => (
											<Link key={k} to={`/sample/${id}/${k}`} className="text-[13px] rounded-full border border-cds-line px-3 py-1 hover:border-cds-teal hover:text-cds-teal">
												{SAMPLE_LABEL[k]}
											</Link>
										))}
									</div>
								</div>
								<div className="h-1.5" style={{ background: COLORS[i * 2] }} />
							</div>
						)
					})}
				</div>
			</section>

			{/* What you receive */}
			<section className="bg-cds-paper">
				<div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
					<div className="flex flex-col gap-5">
						<Eyebrow>Hər hesabatda</Eyebrow>
						<H2>Qısa nəticə yox — tam şərh</H2>
						<p className="text-[17px] text-cds-muted">Hesabatlar CDS-ES standartında qurulub: titul səhifə, rəngli bal kartları, seqmentli göstəricilər, səviyyə nərdivanı, qiymət cədvəli və hər ölçü üçün ayrıca səhifə.</p>
						<Link to={`/sample/${SAMPLE_PEOPLE[0]}/iq`} className={`${btnMain} self-start`}>
							IQ nümunə hesabatı
						</Link>
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						{[
							['Titul səhifə', 'Şəxsi məlumat, şəkil, imza, bal kartları və ümumi göstərici.'],
							['Səviyyə və şərh', 'Hər ölçü üçün Ekspert → İlkin şkalası, ətraflı təsvir.'],
							['Güclü tərəflər və risklər', 'Nə üzərində qurmalı, nəyə diqqət etməli.'],
							['Konkret addımlar', 'Hər səviyyə üçün atılacaq 4–5 addım və resurslar.'],
							['Karyera istiqamətləri', 'Uyğun peşələr, ixtisaslar və səbəbləri.'],
							['İnkişaf planı', '30 gün, 90 gün və 1 il üçün fərdi plan.']
						].map(([t, d], i) => (
							<div key={t} className="rounded-2xl bg-white p-5 border border-cds-line flex flex-col gap-2">
								<span className="w-8 h-1.5 rounded-full" style={{ background: COLORS[i] }} />
								<p className="font-bold text-cds-heading">{t}</p>
								<p className="text-[14px] text-cds-muted">{d}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Career */}
			<section id="career" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center scroll-mt-24">
				<JobsMock />
				<div className="flex flex-col gap-5">
					<Eyebrow>Karyera</Eyebrow>
					<H2>Nəticələriniz sizin üçün iş axtarsın</H2>
					<ul className="flex flex-col gap-4">
						{[
							['Hər gün 06:00', 'Yeni vakansiyalar avtomatik toplanır.'],
							['Uyğunluq faizi', 'Bacarıq, təcrübə, test nəticələri və seçimləriniz əsasında 0–100%.'],
							['Avto-müraciət', 'Həddən yuxarı vakansiyalara fərdi məktubla müraciət hazırlanır.'],
							['Gündəlik hesabat', 'Neçə müraciət, neçə cavab, hansı dəvətlər.'],
							['Karyera koçu', 'Dəvət gələndə cavab mətni və vakansiyaya xüsusi müsahibə hazırlığı.']
						].map(([t, d], i) => (
							<li key={t} className="flex gap-4">
								<span className="w-9 h-9 rounded-xl grid place-items-center text-white font-bold shrink-0" style={{ background: COLORS[i] }}>
									{i + 1}
								</span>
								<span>
									<b className="block text-cds-heading">{t}</b>
									<span className="text-[15px] text-cds-muted">{d}</span>
								</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Approach */}
			<section className="bg-[#0A2E33] text-white">
				<div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-10">
					<div className="flex flex-col gap-3 max-w-3xl">
						<p className="text-[13px] font-bold uppercase tracking-[0.16em] text-cds-mint">Yanaşmamız</p>
						<h2 className="font-manrope text-[30px] sm:text-[40px] font-extrabold leading-[1.1]">Dürüst nəticə, aydın sərhədlər</h2>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="rounded-3xl bg-white/5 border border-white/10 p-7">
							<p className="font-bold text-cds-mint mb-3">Nəyi göstərə bilər</p>
							<ul className="flex flex-col gap-2 text-white/85">
								{['Yaşıdlarla müqayisədə güclü və zəif sahələriniz', 'Öyrənmə və düşünmə üslubunuz', 'Sizə uyğun iş mühiti və rollar', 'İnkişaf üçün konkret addımlar'].map(t => (
									<li key={t}>✓ {t}</li>
								))}
							</ul>
						</div>
						<div className="rounded-3xl bg-white/5 border border-white/10 p-7">
							<p className="font-bold text-[#F7B267] mb-3">Nəyi göstərə bilməz</p>
							<ul className="flex flex-col gap-2 text-white/85">
								{['Klinik və ya tibbi diaqnoz', 'Gələcək uğurun zəmanəti', 'Rəsmi imtahan nəticələrinin əvəzi', 'İnsanın dəyəri — testlər meyli ölçür, şəxsiyyəti yox'].map(t => (
									<li key={t}>✕ {t}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section id="pricing" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-10 scroll-mt-24">
				<div className="flex flex-col gap-3 max-w-3xl">
					<Eyebrow>Qiymətlər</Eyebrow>
					<H2>Testlər pulsuz. Ödəniş yalnız əlavə xidmətlərə.</H2>
				</div>
				<div className="grid gap-5 md:grid-cols-3">
					{[
						{ name: 'Pulsuz', price: '0 ₼', items: ['6 test və ətraflı hesabatlar', 'Tam hesabat və sertifikatlar', 'CV şablonları', 'Vakansiyalar və uyğunluq', 'Əl ilə müraciət'], hi: false },
						{ name: PLANS.start.name, price: `${PLANS.start.price} ₼ / ay`, items: PLANS.start.features, hi: false },
						{ name: PLANS.pro.name, price: `${PLANS.pro.price} ₼ / ay`, items: PLANS.pro.features, hi: true }
					].map(p => (
						<div key={p.name} className={`rounded-3xl p-7 flex flex-col gap-5 ${p.hi ? 'text-white shadow-xl' : 'border border-cds-line bg-white'}`} style={p.hi ? { background: CDS.gradient } : undefined}>
							<p className="font-manrope text-xl font-bold">{p.name}</p>
							<p className="font-manrope text-4xl font-extrabold">{p.price}</p>
							<ul className={`flex flex-col gap-2 text-[15px] flex-1 ${p.hi ? 'text-white/90' : 'text-cds-muted'}`}>
								{p.items.map(t => (
									<li key={t}>✓ {t}</li>
								))}
							</ul>
							<Link to="/register" className={p.hi ? 'rounded-full bg-white text-cds-heading font-semibold text-center py-3' : btnLine}>
								Başla
							</Link>
						</div>
					))}
				</div>
				<p className="text-[13px] text-cds-muted">Təsdiqlənmiş nişan: hər test üçün {BADGE_PRICE} ₼. Ödəniş sistemi hazırda test rejimindədir.</p>
			</section>

			{/* FAQ */}
			<section id="faq" className="bg-cds-paper scroll-mt-24">
				<div className="max-w-[900px] mx-auto px-4 sm:px-6 py-20 flex flex-col gap-8">
					<div className="flex flex-col gap-3 text-center items-center">
						<Eyebrow>Suallar</Eyebrow>
						<H2>Tez-tez verilən suallar</H2>
					</div>
					<div className="flex flex-col gap-3">
						{faqs.map(([q, a], i) => (
							<div key={q} className="rounded-2xl bg-white border border-cds-line">
								<button type="button" className="w-full text-left px-6 py-5 flex justify-between gap-4 font-semibold text-cds-heading" aria-expanded={faq === i} onClick={() => setFaq(faq === i ? null : i)}>
									{q}
									<span aria-hidden="true">{faq === i ? '−' : '+'}</span>
								</button>
								{faq === i && <p className="px-6 pb-5 text-[15px] text-cds-muted leading-relaxed">{a}</p>}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Closing CTA */}
			<section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20">
				<div className="rounded-[36px] px-6 sm:px-14 py-14 text-white flex flex-col items-center gap-6 text-center" style={{ background: CDS.gradient }}>
					<div className="flex -space-x-3">
						{PERSONAS.slice(0, 7).map(p => (
							<img key={p.id} src={svg(AVATARS[p.id])} alt="" className="w-12 h-12 rounded-full border-2 border-white bg-white" />
						))}
					</div>
					<h2 className="font-manrope text-[30px] sm:text-[40px] font-extrabold leading-tight max-w-2xl">Potensialınızı kəşf etməyə hazırsınız?</h2>
					<p className="text-white/85 max-w-xl">Qeydiyyatdan keçin, ilk testi bu gün tamamlayın və hesabatınızı dərhal alın.</p>
					<Link to="/register" className="rounded-full bg-white text-cds-heading font-bold px-8 py-3.5">
						Pulsuz başla →
					</Link>
				</div>
			</section>

			<SiteFooter />
		</div>
	)
}

export const SAMPLE_LABEL: Record<string, string> = {
	full: 'Tam hesabat',
	talent: 'Talant',
	iq: 'IQ',
	mbti: '16 tip',
	ennea: 'Enneaqram',
	big5: 'Big Five',
	riasec: 'Maraqlar',
	certificates: 'Sertifikatlar'
}

export default Home
