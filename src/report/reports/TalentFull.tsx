import { talentPercent, formatDate, TalentResult } from 'tests/store'
import { talentLabel } from 'tests/registry'
import { rankCombined } from 'tests/careers'
import { TALENT_AREAS } from '../content/talent'
import { TalentArea } from '../content/types'
import { CDS, TALENT_COLOR, levelName, levelOf } from '../design'
import { BarBoard, Dimension, GradeTable, Ladder } from '../charts'
import { Cover, H2, List, P, Page, Panel, PlanGrid, Quote, ReportDoc } from '../ReportDoc'
import { fmt, usePerson } from '../person'

const KEY: Record<string, TalentArea> = { Education: 'education', 'Language skills': 'language', 'Special talent': 'special', 'Sport skills': 'sport', 'Work experience': 'work', 'Program skills': 'program' }
const ORDER: TalentArea[] = ['education', 'language', 'special', 'work', 'sport', 'program']

export function talentScores(t: TalentResult) {
	const out: Partial<Record<TalentArea, number>> = {}
	Object.entries(t.data).forEach(([k, v]) => {
		const id = (KEY[v.text] || k) as TalentArea
		out[id] = talentPercent(v.score)
	})
	return ORDER.filter(a => out[a] != null).map(a => ({ id: a, value: out[a]! }))
}

const TalentFull = ({ t }: { t: TalentResult }) => {
	const { person, results, first } = usePerson()
	const scores = talentScores(t)
	const avg = scores.reduce((a, s) => a + s.value, 0) / Math.max(1, scores.length)
	const sorted = [...scores].sort((a, b) => b.value - a.value)
	const top = sorted.slice(0, 2)
	const low = sorted.slice(-2).reverse()
	const careers = rankCombined(results, 6)
	let n = 2
	const name = (id: TalentArea) => TALENT_AREAS[id]?.name || talentLabel(id)
	const plan = low.map(s => TALENT_AREAS[s.id].levels[levelOf(s.value)].actions)
	return (
		<ReportDoc person={person} score={fmt(avg, 1)} fileName={`Talant-hesabati-${person.name}`}>
			<Cover
				title="Talant Hesabatı"
				date={formatDate(t.date)}
				tiles={scores.map(s => ({ label: name(s.id), value: s.value, color: TALENT_COLOR[s.id] }))}
				overall={avg}
				overallDisplay={fmt(avg, 1)}
				summary={
					<>
						<p>
							{person.name} 6 sahə üzrə yaşıdları ilə müqayisə olunub. Ümumi talant göstəricisi <b>{fmt(avg, 1)}</b>-dir — bu, yaşıd qrupunda <b>{levelName(levelOf(avg))}</b> səviyyəyə uyğundur.
						</p>
						<p>
							Ən güclü sahələr: <b>{top.map(s => `${name(s.id)} (${s.value})`).join(' və ')}</b>. {TALENT_AREAS[top[0].id]?.levels[levelOf(top[0].value)].summary}
						</p>
						<p>
							İnkişaf üçün ən böyük potensial: <b>{low.map(s => `${name(s.id)} (${s.value})`).join(' və ')}</b>. Hesabatın sonunda bu sahələr üçün 30 gün, 90 gün və 1 illik fərdi plan verilib.
						</p>
					</>
				}
			/>

			<Page section="Hesabat haqqında" n={n++}>
				<H2>Talant Hesabatı nədir</H2>
				<P>
					Talent Score Talant Hesabatı şəxsin real keçmişini — təhsilini, dil biliklərini, xüsusi bacarıqlarını, idman fəaliyyətini, iş təcrübəsini və proqram biliklərini — eyni yaş qrupundakı istifadəçilərlə müqayisə edərək ölçür. Hər cavab ölçülə bilən çəkiyə çevrilir: daha nadir və daha güclü nailiyyət (nüfuzlu universitet, olimpiada qələbəsi, beynəlxalq dil sertifikatı, peşəkar səviyyəli idman və ya incəsənət, uzun və məsuliyyətli iş təcrübəsi, irəli səviyyəli proqramlaşdırma) daha yüksək bal verir.
				</P>
				<P>
					Nəticə hər sahə üçün 0–100 arasında persentildir: məsələn, 85 o deməkdir ki, şəxs yaşıdlarının təxminən 85%-dən güclü göstəriciyə malikdir. Ballar beş səviyyəli şkala üzrə şərh olunur: Ekspert, İrəli, Orta, Başlanğıc və İlkin.
				</P>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="rounded-md bg-cds-paper p-5 flex flex-col gap-2">
						<p className="font-bold" style={{ color: CDS.heading }}>
							Hesabatın bölmələri
						</p>
						<List items={['Talant xülasəsi və orta göstərici', 'Hər sahə üzrə ətraflı təhlil, səviyyə və tövsiyələr', 'Qiymət cədvəli (transkript)', 'Karyera istiqamətləri', 'Fərdi inkişaf planı']} />
					</div>
					<div className="rounded-md bg-cds-paper p-5 flex flex-col gap-3">
						<p className="font-bold" style={{ color: CDS.heading }}>
							Səviyyə şkalası
						</p>
						<Ladder score={avg} />
						<p className="text-[13px] text-cds-muted">Ekspert 85+, İrəli 70–84, Orta 50–69, Başlanğıc 30–49, İlkin 0–29</p>
					</div>
				</div>
			</Page>

			<Page section="Talant xülasəsi" n={n++}>
				<Panel title="Talant xülasəsi">
					<BarBoard rows={scores.map(s => ({ label: name(s.id), value: s.value, color: TALENT_COLOR[s.id] }))} average={avg} />
				</Panel>
				<div className="flex flex-col gap-6">
					{sorted.map(s => (
						<Dimension key={s.id} title={name(s.id)} value={s.value} color={TALENT_COLOR[s.id]}>
							{TALENT_AREAS[s.id]?.levels[levelOf(s.value)].summary}
						</Dimension>
					))}
				</div>
			</Page>

			{sorted.map(s => {
				const a = TALENT_AREAS[s.id]
				if (!a) return null
				const lv = a.levels[levelOf(s.value)]
				const color = TALENT_COLOR[s.id]
				return (
					<Page key={s.id} section={a.name} n={n++}>
						<div className="grid md:grid-cols-[1fr_190px] gap-8 items-start">
							<div className="flex flex-col gap-4">
								<Dimension title={a.name} value={s.value} color={color} />
								<p className="text-[17px] font-semibold" style={{ color }}>
									{lv.title}
								</p>
								<P>{lv.summary}</P>
								<P>{lv.detail}</P>
							</div>
							<div className="rounded-md bg-cds-paper p-4">
								<Ladder score={s.value} color={color} />
							</div>
						</div>
						<div className="grid md:grid-cols-3 gap-4 text-[14px]">
							<div className="rounded-md border border-cds-line p-4">
								<p className="font-bold mb-1" style={{ color: CDS.heading }}>
									Nəyi ölçür
								</p>
								<p className="text-cds-muted leading-relaxed">{a.what}</p>
							</div>
							<div className="rounded-md border border-cds-line p-4">
								<p className="font-bold mb-1" style={{ color: CDS.heading }}>
									Necə hesablanır
								</p>
								<p className="text-cds-muted leading-relaxed">{a.how}</p>
							</div>
							<div className="rounded-md border border-cds-line p-4">
								<p className="font-bold mb-1" style={{ color: CDS.heading }}>
									Niyə vacibdir
								</p>
								<p className="text-cds-muted leading-relaxed">{a.why}</p>
							</div>
						</div>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="flex flex-col gap-2">
								<p className="font-bold" style={{ color: CDS.heading }}>
									Güclü tərəflər
								</p>
								<List items={lv.strengths} color={color} />
							</div>
							<div className="flex flex-col gap-2">
								<p className="font-bold" style={{ color: CDS.heading }}>
									Diqqət tələb edənlər
								</p>
								<List items={lv.risks} color="#B7791F" />
							</div>
						</div>
						<Panel title="Növbəti addımlar">
							<List items={lv.actions} color={color} />
						</Panel>
						<div className="grid md:grid-cols-2 gap-6 text-[14px]">
							<div>
								<p className="font-bold mb-2" style={{ color: CDS.heading }}>
									Faydalı resurslar
								</p>
								<List items={a.resources} />
							</div>
							<div>
								<p className="font-bold mb-2" style={{ color: CDS.heading }}>
									Karyera ilə əlaqəsi
								</p>
								<P>{a.careerLink}</P>
							</div>
						</div>
					</Page>
				)
			})}

			<Page section="Transkript" n={n++}>
				<H2>Qiymət cədvəli</H2>
				<P>Cədvəl hər sahə üzrə balı, hərf qiymətini və vizual qiyməti göstərir. A: 90+, B: 80–89, C: 70–79, D: 60–69, E: 50–59, F: 50-dən aşağı.</P>
				<GradeTable rows={scores.map(s => ({ label: name(s.id), value: s.value, color: TALENT_COLOR[s.id] }))} />
				<Panel title="Karyera istiqamətləri">
					<P>Talant balları digər tamamlanmış testlərlə birlikdə nəzərə alınaraq ən uyğun istiqamətlər hesablanıb.</P>
					<div className="grid sm:grid-cols-2 gap-3 mt-4">
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
								<p className="text-[13px] text-cds-muted mt-1">İxtisaslar: {c.career.majors.join(', ')}</p>
							</div>
						))}
					</div>
				</Panel>
			</Page>

			<Page section="İnkişaf planı" n={n++}>
				<H2>Fərdi inkişaf planı</H2>
				<P>
					Plan {first} üçün ən çox inkişaf potensialı olan iki sahəyə — {low.map(s => name(s.id)).join(' və ')} — əsaslanır. Hər mərhələ əvvəlkinin üzərində qurulur; 90 gündən sonra talant testini yenidən keçmək tövsiyə olunur.
				</P>
				<PlanGrid
					plan={[
						{ title: 'İlk 30 gün', items: [plan[0]?.[0], plan[1]?.[0], plan[0]?.[1]].filter(Boolean) as string[] },
						{ title: '90 gün', items: [plan[0]?.[2], plan[1]?.[1], plan[1]?.[2]].filter(Boolean) as string[] },
						{ title: '1 il', items: [plan[0]?.[3], plan[1]?.[3], plan[0]?.[4] || plan[1]?.[4]].filter(Boolean) as string[] }
					]}
				/>
				<Quote>İstedad başlanğıcdır; onu nəticəyə çevirən sistemli inkişafdır.</Quote>
				<p className="text-center text-[13px] text-cds-muted">Talent Score · Süni intellekt sistemi · Bakı, Azərbaycan</p>
			</Page>
		</ReportDoc>
	)
}

export default TalentFull
