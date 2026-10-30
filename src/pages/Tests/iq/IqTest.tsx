import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { IQ_ITEMS, IQ_TIME_LIMIT_MIN } from 'tests/iq/data'
import { DOMAIN_DESC, DOMAIN_LABEL, IQ_BANDS, scoreIq } from 'tests/iq/scoring'
import { domainText, domainTraining, LEVEL_LABEL, levelOf, METHOD_NOTE, overallText } from 'tests/iq/report'
import { rankByIq } from 'tests/careers'
import { ageFrom, formatDate, IqResult, ordinalAz, saveResults, useResults } from 'tests/store'
import { IqDomain } from 'tests/types'
import TestHeader from '../components/TestHeader'
import IqRunner from './IqRunner'
import { BellCurve, IqGauge, ScoreBar } from '../components/Charts'
import CertificateTemplate from '../components/CertificateTemplate'
import { useExport } from '../components/useExport'
import ShareButton from 'share/ShareButton'
import { IqShareCard } from 'share/cards'
import { IconDownload } from 'components/AppShell/icons'
import { registerCertificate } from 'tests/certs'

type Tab = 'snapshot' | 'report' | 'certificate'

const IqTest = () => {
	const { user } = useAuth()
	const results = useResults(user?.email)
	const [running, setRunning] = useState(!!results.progress?.iq)
	const [tab, setTab] = useState<Tab>('snapshot')
	const iq = results.iq

	const finish = (answers: Record<string, string>, seconds: number) => {
		const r = scoreIq(IQ_ITEMS, answers, seconds)
		saveResults(user.email, { iq: r })
		registerCertificate({ id: r.certificateId, type: 'İntellektual Qabiliyyət Sertifikatı', name: `${user.first_name} ${user.last_name}`.trim(), value: `IQ ${r.iq}`, band: r.band, issued: formatDate(r.date) })
		setRunning(false)
		setTab('snapshot')
		window.scrollTo({ top: 0 })
	}

	if (running)
		return (
			<div className="px-6 py-8 lg:px-12">
				<div className="max-w-[920px] mx-auto flex flex-col gap-6">
					<TestHeader number={2} title="IQ testi" compact />
					<IqRunner items={IQ_ITEMS} limitMin={IQ_TIME_LIMIT_MIN} onFinish={finish} />
				</div>
			</div>
		)

	return (
		<div className="px-6 py-10 lg:px-12">
			<div className="max-w-[1120px] mx-auto flex flex-col gap-8">
				<TestHeader
					number={2}
					title="IQ testi"
					subtitle="Verbal, rəqəmsal, məntiqi, məkan və yaddaş bacarıqlarınızı ölçür. Nəticədə IQ göstəricisi, sahələr üzrə profil, karyera və ixtisas tövsiyələri və sertifikat alırsınız."
					actions={
						iq ? (
							<>
								<ShareButton title="IQ nəticəm" text={`Talent Score IQ testində ${iq.iq} bal topladım`} card={<IqShareCard />} />
								<button type="button" onClick={() => setRunning(true)} className="text-[14px] py-[10px] px-[22px] rounded-[25px] text-qss-inputText hover:text-qss-primary">
									Yenidən keç
								</button>
							</>
						) : undefined
					}
				/>

				{!iq ? (
					<Intro onStart={() => setRunning(true)} />
				) : (
					<>
						<div className="flex gap-2 bg-qss-input rounded-[25px] p-1 self-start" role="tablist">
							{(
								[
									['snapshot', 'Nəticə'],
									['report', 'Ətraflı hesabat'],
									['certificate', 'Sertifikat']
								] as [Tab, string][]
							).map(([id, label]) => (
								<button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={`px-5 py-2 rounded-[25px] text-sm ${tab === id ? 'bg-qss-primary text-white' : 'text-qss-primary'}`}>
									{label}
								</button>
							))}
						</div>
						{tab === 'snapshot' && <Snapshot r={iq} />}
						{tab === 'report' && <Detailed r={iq} />}
						{tab === 'certificate' && <IqCertificate r={iq} />}
					</>
				)}
			</div>
		</div>
	)
}

const Intro = ({ onStart }: { onStart: () => void }) => {
	const counts = IQ_ITEMS.reduce<Record<string, number>>((a, i) => ({ ...a, [i.domain]: (a[i.domain] || 0) + 1 }), {})
	return (
		<div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
			<div className="rounded-2xl bg-white border border-qss-border shadow-sm p-7 flex flex-col gap-5">
				<div className="grid sm:grid-cols-2 gap-4">
					{(Object.keys(DOMAIN_LABEL) as IqDomain[]).map(d => (
						<div key={d}>
							<p className="font-semibold text-qss-primary text-sm">
								{DOMAIN_LABEL[d]} <span className="text-qss-base-300 font-normal">· {counts[d] || 0} sual</span>
							</p>
							<p className="text-xs text-qss-inputText leading-relaxed mt-0.5">{DOMAIN_DESC[d]}</p>
						</div>
					))}
				</div>
				<button type="button" onClick={onStart} className="self-start text-[15px] text-white py-[12px] px-[30px] rounded-[25px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop">
					Testə başla · {IQ_ITEMS.length} sual, {IQ_TIME_LIMIT_MIN} dəq
				</button>
			</div>
			<div className="rounded-2xl bg-qss-transbg p-7 flex flex-col gap-3 text-sm text-qss-inputText leading-relaxed">
				<p className="font-semibold text-qss-primary text-base">Başlamazdan əvvəl</p>
				<p>Sakit yerdə, fasiləsiz keçin. Vaxt test başlayandan sayılır və dayanmır.</p>
				<p>Kalkulyator və qeyd vərəqi istifadə etməyin — nəticənin dəqiqliyi buna bağlıdır.</p>
				<p>Yaddaş tapşırıqlarında məlumat bir neçə saniyə göstərilir və bir daha görünmür.</p>
				<p>Bilmədiyiniz sualı keçib sonra qayıda bilərsiniz. Cavabsız suallar səhv sayılır.</p>
			</div>
		</div>
	)
}

function usePerson() {
	const { user } = useAuth()
	const r = useResults(user?.email)
	return { name: `${user?.first_name || ''} ${user?.last_name || ''}`.trim(), first: user?.first_name || '', age: ageFrom(user?.birth_date), photo: r.photo, gender: user?.gender }
}

// One-page score sheet, styled after the free talent report.
const Snapshot = ({ r }: { r: IqResult }) => {
	const p = usePerson()
	const ref = useRef<HTMLDivElement>(null)
	const { print, png } = useExport(ref, 'IQ-netice')
	const domains = Object.keys(r.domains) as IqDomain[]
	const best = [...domains].sort((a, b) => r.domains[b].index - r.domains[a].index)[0]
	return (
		<div className="flex flex-col gap-4 items-start">
			<ExportBar onPrint={print} onPng={png} />
			<div ref={ref} className="w-full max-w-[820px] bg-white shadow-md overflow-hidden" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
				<div className="bg-gradient-to-br from-qss-gradientTop via-qss-alternative to-qss-gradientBottom text-white px-10 py-8 flex items-center gap-6">
					{p.photo && <img src={p.photo} alt="" className="w-20 h-20 rounded-full object-cover border-[3px] border-white/80" />}
					<div className="flex-1">
						<p className="font-manrope text-2xl font-extrabold tracking-[0.2em]">TALENT SCORE</p>
						<p className="text-white/80 text-xs tracking-[0.2em] mt-1">IQ TEST NƏTİCƏSİ</p>
					</div>
					<div className="text-right text-sm leading-6">
						<p className="font-semibold text-base">
							{p.name}
							{p.age != null ? `, ${p.age} yaş` : ''}
						</p>
						<p>Test tarixi: {formatDate(r.date)}</p>
						<p>Test ID: {r.certificateId}</p>
					</div>
				</div>
				<div className="px-10 py-8 grid md:grid-cols-[1fr_1fr] gap-8 items-center">
					<div className="flex flex-col items-center gap-2">
						<IqGauge value={r.iq} />
						<p className="font-semibold text-qss-primary">{r.band}</p>
						<p className="text-xs text-qss-inputText">IQ göstəricisi</p>
					</div>
					<div className="flex flex-col gap-3 text-sm">
						<p className="text-qss-primary leading-relaxed">
							{p.first} test nəticəsinə görə <b>{ordinalAz(r.percentile)} persentildədir</b>: iştirakçıların təxminən {Math.round(r.percentile)}%-dən yüksək nəticə göstərib.
						</p>
						<p className="text-qss-primary leading-relaxed">
							Ən güclü sahə: <b>{DOMAIN_LABEL[best]}</b> ({r.domains[best].index}). Düzgün cavablar: <b className="tabular-nums">{r.correct}</b> / {r.total}.
						</p>
						<div className="mt-1">
							<p className="text-xs font-bold tracking-[0.12em] text-qss-primary mb-2">IQ DİAPAZONLARI</p>
							<div className="grid grid-cols-2 gap-x-4 gap-y-1">
								{IQ_BANDS.map(b => (
									<span key={b.label} className="flex items-center gap-2 text-xs text-qss-inputText">
										<span className="w-2.5 h-2.5 rounded-full" style={{ background: b.color }} />
										<span className="tabular-nums w-14">{b.min === 0 ? '<80' : b.max >= 160 ? '130+' : `${b.min}–${b.max}`}</span>
										{b.label}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="px-10 pb-6 flex justify-center">
					<BellCurve value={r.iq} width={560} />
				</div>
				<div className="px-10 pb-8">
					<p className="text-center font-bold text-qss-primary mb-4">Sahələr üzrə göstəricilər</p>
					<div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
						{domains.map(d => (
							<ScoreBar key={d} label={DOMAIN_LABEL[d]} value={r.domains[d].index - 55} max={95} display={`${r.domains[d].index}`} sub={`${r.domains[d].correct}/${r.domains[d].total} düzgün · ${LEVEL_LABEL[levelOf(r.domains[d].index)]}`} />
						))}
					</div>
				</div>
				<div className="px-10 py-4 bg-qss-input flex justify-between text-[11px] text-qss-base-300">
					<span>TALENT SCORE · Süni intellekt sistemi</span>
					<span>Təxmini göstərici — klinik diaqnoz deyil</span>
				</div>
			</div>
		</div>
	)
}

const Detailed = ({ r }: { r: IqResult }) => {
	const p = usePerson()
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, 'IQ-etrafli-hesabat')
	const domains = (Object.keys(r.domains) as IqDomain[]).sort((a, b) => r.domains[b].index - r.domains[a].index)
	const careers = rankByIq(r, 6)
	const weakest = domains[domains.length - 1]
	const [review, setReview] = useState(false)
	const wrong = IQ_ITEMS.filter(i => r.answers[i.id] !== i.answer)
	return (
		<div className="flex flex-col gap-4 items-start">
			<ExportBar onPrint={print} />
			<div ref={ref} className="w-full max-w-[920px] bg-white shadow-sm rounded-2xl overflow-hidden">
				<div className="bg-gradient-to-r from-qss-gradientTop to-qss-alternative text-white px-10 py-8 flex justify-between items-end gap-6">
					<div>
						<p className="font-manrope text-3xl font-extrabold tracking-[0.15em]">TALENT SCORE</p>
						<p className="mt-2 text-white/80 text-sm tracking-widest">İNTELLEKTUAL PERFORMANS HESABATI</p>
					</div>
					<div className="text-right text-sm leading-6">
						<p className="font-semibold text-base">{p.name}</p>
						<p>Tarix: {formatDate(r.date)}</p>
						<p>ID: {r.certificateId}</p>
					</div>
				</div>

				<div className="px-10 py-10 flex flex-col gap-12">
					<section className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
						<IqGauge value={r.iq} size={240} />
						<div className="flex flex-col gap-3">
							<p className="text-xs font-bold tracking-[0.14em] text-qss-secondary">ÜMUMİ NƏTİCƏ</p>
							<p className="font-manrope text-2xl font-bold text-qss-primary">
								IQ {r.iq} · {r.band}
							</p>
							<p className="text-qss-inputText leading-relaxed">{overallText(r.iq, p.first)}</p>
							<p className="text-sm text-qss-inputText">
								Persentil: <b className="text-qss-primary tabular-nums">{r.percentile}</b> · Düzgün: <b className="text-qss-primary tabular-nums">{r.correct}/{r.total}</b> · Sərf olunan vaxt: <b className="text-qss-primary tabular-nums">{Math.round(r.seconds / 60)} dəq</b>
							</p>
						</div>
					</section>

					<section className="flex flex-col gap-6">
						<h2 className="font-manrope text-xl font-bold text-qss-primary uppercase tracking-wide">Sahələr üzrə təhlil</h2>
						{domains.map(d => (
							<div key={d} className="grid md:grid-cols-[240px_1fr] gap-6 rounded-xl border border-qss-border p-6">
								<div className="flex flex-col gap-2">
									<span className="self-start text-xs font-semibold uppercase tracking-wide text-qss-alternative bg-qss-transbg rounded-full px-3 py-1">{LEVEL_LABEL[levelOf(r.domains[d].index)]}</span>
									<p className="font-manrope text-lg font-semibold text-qss-primary">{DOMAIN_LABEL[d]}</p>
									<ScoreBar label="İndeks" value={r.domains[d].index - 55} max={95} display={String(r.domains[d].index)} sub={`${r.domains[d].correct}/${r.domains[d].total} düzgün`} />
								</div>
								<div className="flex flex-col gap-3">
									<p className="text-qss-inputText leading-relaxed">{domainText(d, r.domains[d].index)}</p>
									<p className="text-xs text-qss-base-300">{DOMAIN_DESC[d]}</p>
								</div>
							</div>
						))}
					</section>

					<section className="flex flex-col gap-5">
						<h2 className="font-manrope text-xl font-bold text-qss-primary uppercase tracking-wide">Uyğun karyera istiqamətləri</h2>
						<p className="text-qss-inputText">İntellektual profilinizin ən çox uyğun gəldiyi sahələr. Uyğunluq hər sahənin əsasən tələb etdiyi bacarıqlarla sizin sahə indekslərinizin müqayisəsinə əsaslanır.</p>
						<div className="grid md:grid-cols-2 gap-4">
							{careers.map((c, i) => (
								<div key={c.career.id} className="rounded-xl bg-qss-transbg p-5 flex flex-col gap-2">
									<div className="flex items-baseline justify-between gap-3">
										<p className="font-semibold text-qss-primary">
											<span className="text-qss-secondary tabular-nums mr-2">{i + 1}.</span>
											{c.career.name}
										</p>
										<span className="text-sm font-bold text-qss-alternative tabular-nums">{c.score}%</span>
									</div>
									<p className="text-xs text-qss-inputText">{c.reasons[0]}</p>
									<p className="text-xs text-qss-primary">
										<b>İxtisaslar:</b> {c.career.majors.join(', ')}
									</p>
								</div>
							))}
						</div>
						<p className="text-xs text-qss-base-300">Şəxsiyyət testlərini (MBTI, Enneaqram) də keçsəniz, tam hesabatda bu siyahı maraq və motivasiyanıza görə dəqiqləşdiriləcək.</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="font-manrope text-xl font-bold text-qss-primary uppercase tracking-wide">İnkişaf planı</h2>
						<p className="text-qss-inputText">
							Ən çox inkişaf potensialı olan sahə: <b className="text-qss-primary">{DOMAIN_LABEL[weakest]}</b>. Tövsiyələr:
						</p>
						<ul className="list-disc pl-5 flex flex-col gap-1.5 text-qss-inputText">
							{domainTraining(weakest).map(t => (
								<li key={t}>{t}</li>
							))}
						</ul>
					</section>

					<section className="rounded-xl bg-qss-input p-5 text-xs text-qss-inputText leading-relaxed">
						<b className="text-qss-primary">Metodologiya.</b> {METHOD_NOTE}
					</section>
				</div>
				<div className="px-10 py-4 bg-qss-input text-xs text-qss-base-300 flex justify-between">
					<span>TALENT SCORE · Süni intellekt sistemi</span>
					<span>{formatDate(r.date)}</span>
				</div>
			</div>

			<div className="w-full max-w-[920px] rounded-2xl bg-white border border-qss-border p-6">
				<button type="button" onClick={() => setReview(v => !v)} className="font-semibold text-qss-primary">
					{review ? '▾' : '▸'} Səhv və cavabsız suallar ({wrong.length})
				</button>
				{review && (
					<ol className="mt-4 flex flex-col gap-3">
						{wrong.map(i => (
							<li key={i.id} className="text-sm border-t border-qss-border pt-3">
								<p className="text-qss-primary">
									<span className="text-qss-base-300 mr-2">{DOMAIN_LABEL[i.domain]}</span>
									{i.prompt}
								</p>
								<p className="text-qss-inputText mt-1">
									Düzgün cavab: <b className="uppercase">{i.answer}</b>
									{i.options.find(o => o.id === i.answer)?.label ? ` — ${i.options.find(o => o.id === i.answer)?.label}` : ''}. {i.explanation}
								</p>
							</li>
						))}
					</ol>
				)}
			</div>
		</div>
	)
}

const IqCertificate = ({ r }: { r: IqResult }) => {
	const p = usePerson()
	const ref = useRef<HTMLDivElement>(null)
	const { print, png } = useExport(ref, 'IQ-sertifikat')
	const domains = (Object.keys(r.domains) as IqDomain[]).sort((a, b) => r.domains[b].index - r.domains[a].index)
	const careers = rankByIq(r, 3)
	const valid = new Date(r.date)
	valid.setFullYear(valid.getFullYear() + 2)
	return (
		<div className="flex flex-col gap-4 items-start">
			<ExportBar onPrint={print} onPng={png} />
			<div className="w-full overflow-x-auto">
				<CertificateTemplate
					ref={ref}
					title="İntellektual Qabiliyyət Sertifikatı"
					designation={r.band}
					name={p.name}
					photo={p.photo}
					metric={{ value: String(r.iq), label: 'IQ göstəricisi' }}
					text={`Bu sertifikat təsdiq edir ki, ${p.name} Talent Score sisteminin intellektual qabiliyyət testində verbal, rəqəmsal, məntiqi, məkan və yaddaş bacarıqları üzrə qiymətləndirilmiş və iştirakçıların təxminən ${Math.round(r.percentile)}%-dən yüksək nəticə göstərmişdir.`}
					summary={
						<>
							Ən güclü sahələr: <b>{domains.slice(0, 2).map(d => `${DOMAIN_LABEL[d]} (${r.domains[d].index})`).join(', ')}</b>. Profilə ən uyğun istiqamətlər: {careers.map(c => c.career.name).join(', ')}.
						</>
					}
					issued={formatDate(r.date)}
					valid={formatDate(valid.toISOString())}
					id={r.certificateId}
				/>
			</div>
			<p className="text-xs text-qss-base-300 max-w-[842px]">Sertifikat Talent Score testinin nəticəsini təsdiq edir; klinik IQ qiymətləndirməsini əvəz etmir.</p>
		</div>
	)
}

export const ExportBar = ({ onPrint, onPng }: { onPrint: () => void; onPng?: () => void }) => (
	<div className="flex flex-wrap gap-3">
		<button type="button" onClick={onPrint} className="flex items-center gap-2 text-[14px] py-[9px] px-[20px] rounded-[25px] bg-qss-primary text-white">
			<IconDownload /> PDF yüklə / çap et
		</button>
		{onPng && (
			<button type="button" onClick={onPng} className="flex items-center gap-2 text-[14px] py-[9px] px-[20px] rounded-[25px] border border-qss-primary text-qss-primary">
				<IconDownload /> Şəkil (PNG)
			</button>
		)}
	</div>
)

export default IqTest

export const IqLink = () => (
	<Link to="/profile/tests/iq" className="text-sm font-semibold text-qss-secondary">
		IQ testinə keç →
	</Link>
)
