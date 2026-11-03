import { formatDate, MbtiResult } from 'tests/store'
import { MBTI_POLES, MBTI_TYPES } from 'tests/mbti/data'
import { clarityLabel } from 'tests/mbti/scoring'
import { MBTI_EXTRA, MBTI_POLE_DETAIL } from '../content/mbti'
import { CDS, MBTI_COLOR } from '../design'
import { SegBar } from '../charts'
import { Cover, H2, List, P, Page, Panel, PlanGrid, Quote, ReportDoc } from '../ReportDoc'
import { usePerson } from '../person'

const AXES: [string, string, string][] = [
	['EI', 'E', 'I'],
	['SN', 'S', 'N'],
	['TF', 'T', 'F'],
	['JP', 'J', 'P']
]
const title = (p: string) => MBTI_POLES.find(x => x.pole === p)?.title || p

const Box = ({ h, children }: { h: string; children: React.ReactNode }) => (
	<div className="rounded-md border border-cds-line p-5 flex flex-col gap-2">
		<p className="font-bold" style={{ color: CDS.heading }}>
			{h}
		</p>
		<div className="text-[15px] leading-relaxed text-cds-ink/90">{children}</div>
	</div>
)

const MbtiFull = ({ m }: { m: MbtiResult }) => {
	const { person, first } = usePerson()
	const t = MBTI_TYPES[m.code]
	const x = MBTI_EXTRA[m.code]
	if (!t) return null
	const clarity = Math.round(AXES.reduce((a, [ax]) => a + (m.axes[ax]?.percent || 50), 0) / 4)
	let n = 2
	return (
		<ReportDoc person={person} score={m.code} fileName={`16-tip-${m.code}-${person.name}`}>
			<Cover
				title="Şəxsiyyət Tipi Hesabatı"
				date={formatDate(m.date)}
				tiles={AXES.map(([ax]) => ({ label: title(m.axes[ax].pole), value: `${m.axes[ax].pole} · ${m.axes[ax].percent}%`, color: MBTI_COLOR[ax] }))}
				overall={clarity}
				overallLabel="Tip"
				overallDisplay={m.code}
				summary={
					<>
						<p>
							<b>
								{m.code} — {t.name}.
							</b>{' '}
							{t.tagline}
						</p>
						<p>{t.summary}</p>
					</>
				}
				note="Şəxsiyyət tipi davranış meylini göstərir, bacarıq və ya dəyər ölçüsü deyil. Həyat təcrübəsi ilə dəyişə bilər; 1–2 ildən bir yenidən keçmək tövsiyə olunur."
			/>

			<Page section="Dörd ölçü" n={n++}>
				<H2>Tipinizin dörd ölçüsü</H2>
				<P>Hər ox iki qütb arasında seçimdir. Faiz üstün gələn qütbün aydınlığını göstərir: 50–64% — zəif, 65–79% — aydın, 80%+ — çox aydın üstünlük.</P>
				{AXES.map(([ax, a, b]) => {
					const v = m.axes[ax]
					const d = MBTI_POLE_DETAIL[v.pole]
					const color = MBTI_COLOR[ax]
					const toward = v.pole === a ? 100 - v.percent : v.percent
					return (
						<section key={ax} className="flex flex-col gap-3 break-inside-avoid">
							<div className="grid grid-cols-[110px_1fr_110px] items-center gap-4 text-[14px]">
								<span className={`text-right ${v.pole === a ? 'font-bold' : 'text-cds-muted'}`}>
									{title(a)} ({a})
								</span>
								<div className="relative">
									<SegBar value={100} color={color} />
									<span className="absolute -top-2 w-2 h-[30px] rounded bg-cds-ink" style={{ left: `calc(${toward}% - 4px)` }} />
								</div>
								<span className={v.pole === b ? 'font-bold' : 'text-cds-muted'}>
									{title(b)} ({b})
								</span>
							</div>
							<p className="text-[16px] font-semibold" style={{ color }}>
								{title(v.pole)} — {v.percent}% ({clarityLabel(v.percent)} üstünlük)
							</p>
							{d && (
								<div className="grid md:grid-cols-2 gap-4 text-[14px] text-cds-muted">
									<p>
										<b className="text-cds-ink">İşdə: </b>
										{d.atWork}
									</p>
									<p>
										<b className="text-cds-ink">Ünsiyyətdə: </b>
										{d.inCommunication}
									</p>
									<p>
										<b className="text-cds-ink">Kor nöqtə: </b>
										{d.blindSpot}
									</p>
									<p>
										<b className="text-cds-ink">Tövsiyə: </b>
										{d.tip}
									</p>
								</div>
							)}
						</section>
					)
				})}
			</Page>

			<Page section="Profil" n={n++}>
				<Panel title={`${m.code} — ${t.name}`}>
					<P>{t.summary}</P>
				</Panel>
				<div className="grid md:grid-cols-2 gap-6">
					<Box h="Güclü tərəflər">
						<List items={t.strengths} />
					</Box>
					<Box h="Diqqət tələb edən tərəflər">
						<List items={t.weaknesses} color="#B7791F" />
					</Box>
				</div>
				{x && (
					<div className="grid md:grid-cols-2 gap-6">
						<Box h="Sizi motivasiya edənlər">
							<List items={x.motivators} />
						</Box>
						<Box h="Motivasiyanı azaldanlar">
							<List items={x.demotivators} color="#B7791F" />
						</Box>
					</div>
				)}
			</Page>

			<Page section="İş tərzi" n={n++}>
				<H2>İşdə və komandada</H2>
				<P>{t.workStyle}</P>
				{x && (
					<div className="grid md:grid-cols-2 gap-5">
						<Box h="İdeal iş mühiti">{x.idealEnvironment}</Box>
						<Box h="Komandadakı rolu">{x.teamRole}</Box>
						<Box h="Rəhbər kimi">{x.asManager}</Box>
						<Box h="Qərar vermə">{x.decisionMaking}</Box>
					</div>
				)}
				<Box h="Liderlik">{t.leadership}</Box>
			</Page>

			<Page section="Ünsiyyət və münasibətlər" n={n++}>
				<H2>Ünsiyyət</H2>
				<P>{t.communication}</P>
				<Panel title="Effektiv ünsiyyət üçün">
					<List items={t.communicationTips} />
				</Panel>
				{x && <Box h="Konfliktdə">{x.conflict}</Box>}
				<div className="grid md:grid-cols-2 gap-5">
					<Box h="Yaxın münasibətlər">{t.relationships}</Box>
					<Box h="Dostluq">{t.friendship}</Box>
				</div>
			</Page>

			<Page section="Karyera" n={n++}>
				<H2>Karyera</H2>
				<P>{t.career}</P>
				{x && (
					<Panel title="Tövsiyə olunan karyera yolları">
						<div className="flex flex-col gap-3">
							{x.careerPaths.map((c, i) => (
								<div key={c.title} className="grid grid-cols-[28px_1fr] gap-3">
									<span className="w-7 h-7 rounded-full grid place-items-center text-white text-sm font-bold" style={{ background: CDS.teal }}>
										{i + 1}
									</span>
									<p className="text-[15px]">
										<b>{c.title}.</b> <span className="text-cds-muted">{c.why}</span>
									</p>
								</div>
							))}
						</div>
					</Panel>
				)}
				<div className="grid md:grid-cols-2 gap-5">
					<Box h="Uyğun peşələr">{t.careers.join(', ')}</Box>
					<Box h="Uyğun ixtisaslar">{t.majors.join(', ')}</Box>
				</div>
				{x && (
					<Box h="Müsahibədə">
						<List items={x.interviewTips} />
					</Box>
				)}
			</Page>

			<Page section="Stress və inkişaf" n={n++}>
				<H2>Stress və inkişaf</H2>
				<P>{t.stress}</P>
				{x && (
					<div className="grid md:grid-cols-2 gap-5">
						<Box h="Təzyiq altında">
							<List items={x.underPressureTips} />
						</Box>
						<Box h="Öyrənmə tərzi">{x.learningStyle}</Box>
					</div>
				)}
				<Panel title="İnkişaf tövsiyələri">
					<List items={t.growth} />
				</Panel>
				{x && (
					<>
						<H2>{first} üçün inkişaf planı</H2>
						<PlanGrid
							plan={[
								{ title: 'İlk 30 gün', items: x.developmentPlan.d30 },
								{ title: '90 gün', items: x.developmentPlan.d90 },
								{ title: '1 il', items: x.developmentPlan.y1 }
							]}
						/>
					</>
				)}
				<Quote>Özünü tanımaq — hər yaxşı qərarın başlanğıcıdır.</Quote>
				<p className="text-[12px] text-cds-muted">Bu test 16 şəxsiyyət tipi tipologiyasına əsaslanan Talent Score qiymətləndirməsidir; rəsmi MBTI® alətini əvəz etmir.</p>
			</Page>
		</ReportDoc>
	)
}

export default MbtiFull
