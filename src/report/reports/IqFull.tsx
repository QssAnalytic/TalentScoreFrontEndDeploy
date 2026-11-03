import { formatDate, IqResult } from 'tests/store'
import { IqDomain } from 'tests/types'
import { DOMAIN_LABEL } from 'tests/iq/scoring'
import { IQ_ITEMS } from 'tests/iq/data'
import { rankByIq } from 'tests/careers'
import { BellCurve } from 'pages/Tests/components/Charts'
import { IQ_BANDS, IQ_DOMAINS } from '../content/iq'
import { CDS, IQ_COLOR, iqToPct, levelName, levelOf } from '../design'
import { BarBoard, Dimension, GradeTable, Ladder } from '../charts'
import { Cover, H2, List, P, Page, Panel, PlanGrid, Quote, ReportDoc } from '../ReportDoc'
import { usePerson } from '../person'

const ORDER: IqDomain[] = ['verbal', 'numerical', 'logical', 'spatial', 'memory']

const IqFull = ({ r }: { r: IqResult }) => {
	const { person, first } = usePerson()
	const band = IQ_BANDS.find(b => b.band === r.band) || IQ_BANDS.find(b => b.band === 'Orta')!
	const doms = ORDER.filter(d => r.domains[d]).map(d => ({ ...r.domains[d], id: d, pct: iqToPct(r.domains[d].index) }))
	const sorted = [...doms].sort((a, b) => b.index - a.index)
	const weak = sorted.slice(-2).reverse()
	const careers = rankByIq(r, 6)
	const mins = Math.round(r.seconds / 60)
	let n = 2
	return (
		<ReportDoc person={person} score={String(r.iq)} fileName={`IQ-hesabati-${person.name}`}>
			<Cover
				title="İntellektual Qabiliyyət Hesabatı"
				date={formatDate(r.date)}
				tiles={doms.map(d => ({ label: DOMAIN_LABEL[d.id], value: d.index, color: IQ_COLOR[d.id] }))}
				overall={r.iq - 55}
				overallMax={95}
				overallLabel="IQ"
				overallDisplay={String(r.iq)}
				certificateId={r.certificateId}
				summary={
					<>
						<p>
							{person.name} 5 sahədə {r.total} sualı cavablandırıb: <b>{r.correct} düzgün cavab</b>, {mins} dəqiqə. Təxmini IQ göstəricisi <b>{r.iq}</b> ({r.band.toLowerCase()}) — iştirakçıların təxminən <b>{Math.round(r.percentile)}%</b>-dən yüksək.
						</p>
						<p>{band.narrative}</p>
					</>
				}
			/>

			<Page section="Testin metodikası" n={n++}>
				<H2>Nəticə necə hesablanır</H2>
				<P>
					Talent Score IQ testi beş bacarıq sahəsini ölçür: verbal, rəqəmsal, məntiqi, məkan və yaddaş. Hər sualın 1-dən 5-ə qədər çətinlik dərəcəsi var. Nəticə Rasch modeli (bir parametrli IRT) ilə hesablanır: yalnız düzgün cavabların sayı yox, hansı çətinlikdəki suallara düzgün cavab verildiyi də nəzərə alınır. Qabiliyyət (θ) IQ şkalasına çevrilir: IQ = 100 + 15·θ.
				</P>
				<div className="rounded-md bg-cds-paper p-5 grid md:grid-cols-[1fr_220px] gap-6 items-center">
					<div className="overflow-x-auto">
						<BellCurve value={r.iq} width={460} />
					</div>
					<div className="flex flex-col gap-2 text-[14px]">
						<p>
							<b>IQ:</b> {r.iq}
						</p>
						<p>
							<b>Persentil:</b> {Math.round(r.percentile)}
						</p>
						<p>
							<b>Dərəcə:</b> {r.band}
						</p>
						<p>
							<b>Düzgün cavab:</b> {r.correct}/{r.total}
						</p>
						<p>
							<b>Müddət:</b> {mins} dəq
						</p>
					</div>
				</div>
				<P>{band.caution}</P>
				<Panel title="Sahələr üzrə xülasə">
					<BarBoard rows={doms.map(d => ({ label: DOMAIN_LABEL[d.id], value: d.pct, color: IQ_COLOR[d.id], display: String(d.index) }))} />
				</Panel>
			</Page>

			{sorted.map(d => {
				const c = IQ_DOMAINS[d.id]
				if (!c) return null
				const lv = c.levels[levelOf(d.pct)]
				const color = IQ_COLOR[d.id]
				return (
					<Page key={d.id} section={c.name} n={n++}>
						<div className="grid md:grid-cols-[1fr_190px] gap-8 items-start">
							<div className="flex flex-col gap-4">
								<Dimension title={c.name} value={d.pct} color={color} display={String(d.index)} />
								<p className="text-[14px] text-cds-muted">
									Düzgün cavab: {d.correct}/{d.total} · İndeks {d.index} · Səviyyə: {levelName(levelOf(d.pct))}
								</p>
								<p className="text-[17px] font-semibold" style={{ color }}>
									{lv.title}
								</p>
								<P>{lv.summary}</P>
								<P>{lv.detail}</P>
							</div>
							<div className="rounded-md bg-cds-paper p-4">
								<Ladder score={d.pct} color={color} />
							</div>
						</div>
						<div className="grid md:grid-cols-3 gap-4 text-[14px]">
							{[
								['Nəyi ölçür', c.what],
								['Gündəlik həyatda', c.everyday],
								['İş və təhsildə', c.work]
							].map(([h, t]) => (
								<div key={h} className="rounded-md border border-cds-line p-4">
									<p className="font-bold mb-1" style={{ color: CDS.heading }}>
										{h}
									</p>
									<p className="text-cds-muted leading-relaxed">{t}</p>
								</div>
							))}
						</div>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<p className="font-bold mb-2" style={{ color: CDS.heading }}>
									Güclü tərəflər
								</p>
								<List items={lv.strengths} color={color} />
							</div>
							<div>
								<p className="font-bold mb-2" style={{ color: CDS.heading }}>
									Diqqət tələb edənlər
								</p>
								<List items={lv.risks} color="#B7791F" />
							</div>
						</div>
						<Panel title="Məşq və inkişaf">
							<div className="grid md:grid-cols-2 gap-6">
								<List items={lv.actions} color={color} />
								<List items={c.exercises} color={color} />
							</div>
						</Panel>
					</Page>
				)
			})}

			<Page section="Cavabların təhlili" n={n++}>
				<H2>Sual-sual nəticə</H2>
				<P>Hər xana bir sualdır: yaşıl — düzgün, boz — səhv və ya cavabsız. Rəqəm sualın çətinliyidir (1 — asan, 5 — çətin). Çətin suallarda düzgün cavab nəticəyə daha çox təsir edir.</P>
				<div className="flex flex-col gap-4">
					{ORDER.map(d => {
						const items = IQ_ITEMS.filter(i => i.domain === d)
						return (
							<div key={d} className="grid grid-cols-[110px_1fr] gap-3 items-center">
								<span className="text-[14px] font-semibold" style={{ color: IQ_COLOR[d] }}>
									{DOMAIN_LABEL[d]}
								</span>
								<div className="flex flex-wrap gap-1.5">
									{items.map(it => {
										const ok = r.answers[it.id] === it.answer
										return (
											<span key={it.id} title={`${it.prompt} — ${ok ? 'düzgün' : 'səhv'}`} className="w-8 h-8 rounded grid place-items-center text-[12px] font-bold" style={{ background: ok ? IQ_COLOR[d] : '#E6E9E9', color: ok ? '#fff' : '#7A868A' }}>
												{it.difficulty}
											</span>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>
				<GradeTable rows={doms.map(d => ({ label: DOMAIN_LABEL[d.id], value: d.pct, color: IQ_COLOR[d.id] }))} />
			</Page>

			<Page section="Öyrənmə və karyera" n={n++}>
				<H2>Öyrənmə tərzi və karyera</H2>
				<P>{band.learning}</P>
				<P>{band.careers}</P>
				<Panel title="Profilə uyğun istiqamətlər">
					<div className="grid sm:grid-cols-2 gap-3">
						{careers.map((c, i) => (
							<div key={c.career.id} className="rounded-md bg-white border border-cds-line p-3">
								<div className="flex justify-between gap-3">
									<p className="font-semibold">
										{i + 1}. {c.career.name}
									</p>
									<span className="font-bold tabular-nums" style={{ color: CDS.teal }}>
										{c.score}%
									</span>
								</div>
								<p className="text-[13px] text-cds-muted mt-1">{c.reasons[0]}</p>
								<p className="text-[13px] text-cds-muted">İxtisaslar: {c.career.majors.join(', ')}</p>
							</div>
						))}
					</div>
				</Panel>
				<H2>{first} üçün məşq planı</H2>
				<PlanGrid
					plan={[
						{ title: 'İlk 30 gün', items: [IQ_DOMAINS[weak[0].id]?.exercises[0], IQ_DOMAINS[weak[1]?.id]?.exercises[0], IQ_DOMAINS[weak[0].id]?.exercises[1]].filter(Boolean) as string[] },
						{ title: '90 gün', items: [IQ_DOMAINS[weak[0].id]?.exercises[2], IQ_DOMAINS[weak[1]?.id]?.exercises[1], IQ_DOMAINS[sorted[0].id]?.exercises[0]].filter(Boolean) as string[] },
						{ title: '1 il', items: [IQ_DOMAINS[weak[0].id]?.exercises[3], IQ_DOMAINS[weak[1]?.id]?.exercises[2], 'Testi 6–12 aydan sonra yenidən keçib irəliləyişi müqayisə edin.'].filter(Boolean) as string[] }
					]}
				/>
				<Quote>Düşünmə bacarığı sabit ölçü deyil — düzgün məşqlə hər gün güclənir.</Quote>
			</Page>
		</ReportDoc>
	)
}

export default IqFull
