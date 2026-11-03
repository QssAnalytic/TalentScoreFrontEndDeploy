// Detailed CDS-ES reports for the Enneagram, Big Five and RIASEC tests.
import { Big5Result, EnneaResult, formatDate, RiasecResult } from 'tests/store'
import { ENNEA_CENTERS, ENNEA_TYPES } from 'tests/enneagram/data'
import { BIG5_DOMAINS, BIG5_ORDER } from 'tests/big5/data'
import { big5Level, levelWord } from 'tests/big5/scoring'
import { RIASEC_ORDER, RIASEC_TYPES } from 'tests/riasec/data'
import { RiasecType } from 'tests/types'
import { EnneaDiagram } from 'pages/Tests/enneagram/EnneaTest'
import { RiasecHexagon } from 'pages/Tests/riasec/RiasecTest'
import { ENNEA_EXTRA } from '../content/ennea'
import { BIG5_EXTRA } from '../content/big5'
import { RIASEC_EXTRA } from '../content/riasec'
import { BIG5_COLOR, CDS, ENNEA_COLOR, RIASEC_COLOR } from '../design'
import { BarBoard, Dimension, Scale } from '../charts'
import { Cover, H2, List, P, Page, Panel, PlanGrid, Quote, ReportDoc } from '../ReportDoc'
import { usePerson } from '../person'

const Box = ({ h, children }: { h: string; children: React.ReactNode }) => (
	<div className="rounded-md border border-cds-line p-5 flex flex-col gap-2 break-inside-avoid">
		<p className="font-bold" style={{ color: CDS.heading }}>
			{h}
		</p>
		<div className="text-[15px] leading-relaxed text-cds-ink/90">{children}</div>
	</div>
)

// ---------------- Enneagram ----------------
export const EnneaFull = ({ e }: { e: EnneaResult }) => {
	const { person, first } = usePerson()
	const t = ENNEA_TYPES[e.type]
	const x = ENNEA_EXTRA[e.type]
	if (!t) return null
	const types = Array.from({ length: 9 }, (_, i) => i + 1).sort((a, b) => e.scores[b] - e.scores[a])
	let n = 2
	return (
		<ReportDoc person={person} score={`${e.type}w${e.wing}`} fileName={`Enneaqram-${person.name}`}>
			<Cover
				title="Enneaqram Hesabatı"
				date={formatDate(e.date)}
				tiles={types.slice(0, 6).map(k => ({ label: `${k}. ${ENNEA_TYPES[k]?.name || ''}`, value: e.scores[k], color: ENNEA_COLOR(k) }))}
				overall={e.scores[e.type]}
				overallLabel="Tip"
				overallDisplay={`${e.type}w${e.wing}`}
				summary={
					<>
						<p>
							<b>
								Tip {e.type} — {t.name}
							</b>
							, qanad {e.wing} ({ENNEA_TYPES[e.wing]?.name}). {t.tagline}
						</p>
						<p>{t.summary}</p>
					</>
				}
				note="Enneaqram davranışın arxasındakı motivasiyanı göstərir; diaqnoz deyil. Tip zamanla daha sağlam və ya daha gərgin səviyyədə özünü göstərə bilər."
			/>
			<Page section="Tip balları" n={n++}>
				<Panel title="Doqquz tip üzrə ballar">
					<BarBoard rows={types.map(k => ({ label: `${k}. ${ENNEA_TYPES[k]?.name}`, value: e.scores[k], color: ENNEA_COLOR(k) }))} />
				</Panel>
				<div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
					<EnneaDiagram r={e} size={260} />
					<div className="flex flex-col gap-3">
						{ENNEA_CENTERS.map(c => (
							<div key={c.id} className="flex flex-col gap-1">
								<div className="flex justify-between text-[15px]">
									<b>{c.name}</b>
									<span className="tabular-nums">{e.centers[c.id] ?? '—'}</span>
								</div>
								<Scale value={e.centers[c.id] ?? 0} color={CDS.teal} />
								<p className="text-[13px] text-cds-muted">{c.description}</p>
							</div>
						))}
					</div>
				</div>
			</Page>
			<Page section="Əsas motivasiya" n={n++}>
				<H2>
					Tip {e.type} — {t.name}
				</H2>
				<div className="grid md:grid-cols-2 gap-5">
					<Box h="Əsas istək">{t.coreDesire}</Box>
					<Box h="Əsas qorxu">{t.coreFear}</Box>
				</div>
				<div className="grid md:grid-cols-2 gap-5">
					<Box h="Güclü tərəflər">
						<List items={t.strengths} />
					</Box>
					<Box h="Kor nöqtələr">
						<List items={t.blindSpots} color="#B7791F" />
					</Box>
				</div>
				{x && (
					<Panel title="Sağlamlıq səviyyələri">
						<div className="flex flex-col gap-4">
							{(
								[
									['Ən yaxşı halınızda', x.healthy, '#1F925A'],
									['Gündəlik həyatda', x.average, '#538CA8'],
									['Gərginlik altında', x.unhealthy, '#A6262B']
								] as const
							).map(([h, txt, c]) => (
								<div key={h} className="grid grid-cols-[6px_1fr] gap-4">
									<span className="rounded" style={{ background: c }} />
									<div>
										<p className="font-bold" style={{ color: c }}>
											{h}
										</p>
										<p className="text-[15px] leading-relaxed text-cds-ink/90">{txt}</p>
									</div>
								</div>
							))}
						</div>
					</Panel>
				)}
			</Page>
			<Page section="İş və ünsiyyət" n={n++}>
				<H2>İşdə</H2>
				{x && (
					<div className="grid md:grid-cols-2 gap-5">
						<Box h="İş tərzi">{x.atWork}</Box>
						<Box h="Lider kimi">{x.asLeader}</Box>
						<Box h="İdeal mühit">{x.idealEnvironment}</Box>
						<Box h="Stress tətikləyiciləri">
							<List items={x.triggers} color="#B7791F" />
						</Box>
					</div>
				)}
				<Box h="Ünsiyyət">
					<p>{t.communication}</p>
					<div className="mt-3">
						<List items={t.communicationTips} />
					</div>
				</Box>
				<Box h="Karyera">
					<p>{t.career}</p>
					<p className="mt-2 text-cds-muted">{t.careers.join(', ')}</p>
				</Box>
			</Page>
			<Page section="Stress və inkişaf" n={n++}>
				<div className="grid md:grid-cols-2 gap-5">
					<Box h={`Stressdə → ${t.stressDirection}-ci tipə doğru`}>{t.stress}</Box>
					<Box h={`İnkişafda → ${t.growthDirection}-ci tipə doğru`}>{t.growth}</Box>
				</div>
				<Panel title="Qanadlar">
					<div className="grid md:grid-cols-2 gap-5">
						{t.wings.map(w => (
							<div key={w.wing} className={`rounded-md bg-white p-4 border ${w.wing === e.wing ? 'border-cds-teal' : 'border-cds-line'}`}>
								<p className="font-bold">
									{e.type}w{w.wing} — {w.name} {w.wing === e.wing ? '(sizin qanad)' : ''}
								</p>
								<p className="text-[14px] text-cds-muted mt-1">{w.description}</p>
							</div>
						))}
					</div>
				</Panel>
				<Box h="İnkişaf tövsiyələri">
					<List items={t.growthTips} />
				</Box>
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
				<Quote>Motivasiyanı anlamaq — davranışı dəyişməyin ən qısa yoludur.</Quote>
			</Page>
		</ReportDoc>
	)
}

// ---------------- Big Five ----------------
function big5Insights(d: Record<string, number>) {
	const h = (k: string) => d[k] >= 65
	const l = (k: string) => d[k] <= 35
	const out: string[] = []
	if (h('O') && h('C')) out.push('Yüksək açıqlıq və yüksək məsuliyyət birlikdə yaradıcı ideyaları sona çatdırmaq bacarığı verir — innovasiya layihələri, tədqiqat və məhsul inkişafı üçün güclü birləşmədir.')
	if (h('E') && h('A')) out.push('Yüksək ekstraversiya və xoşniyyətlilik insanlarla işləyən rollarda (müştəri əlaqələri, təhsil, HR) təbii üstünlük yaradır.')
	if (h('C') && l('N')) out.push('Yüksək məsuliyyət və aşağı emosional həssaslıq təzyiqli, son tarixli işlərdə sabit performans göstərməyə imkan verir.')
	if (h('N') && h('C')) out.push('Məsuliyyətli və emosional həssassınız: işi yaxşı görmək istəyi narahatlığı artıra bilər — prioritetləri yazılı planlamaq stressi azaldır.')
	if (l('E') && h('O')) out.push('İntrovert və maraqlı profil: dərin, müstəqil düşüncə tələb edən işlərdə (analitika, yazı, dizayn) parlayırsınız.')
	if (h('E') && l('A')) out.push('Enerjili və rəqabətcil profil: satış, danışıqlar və nəticə yönümlü rəhbərlikdə güclüsünüz; komanda ilə münasibətdə empatiyaya diqqət edin.')
	if (l('C') && h('O')) out.push('Çoxlu ideya, amma struktura ehtiyac: işinizi kiçik mərhələlərə bölmək və hesabatlılıq partnyoru tapmaq nəticəni gücləndirər.')
	if (!out.length) out.push('Profiliniz balanslıdır: heç bir ölçü ifrat deyil, bu da müxtəlif rollara və komandalara uyğunlaşmağı asanlaşdırır.')
	return out
}

export const Big5Full = ({ b }: { b: Big5Result }) => {
	const { person, first } = usePerson()
	const top = [...BIG5_ORDER].filter(k => k !== 'N').sort((x, y) => b.domains[y] - b.domains[x])[0]
	let n = 2
	return (
		<ReportDoc person={person} score={`${BIG5_DOMAINS[top].name} ${b.domains[top]}`} fileName={`Big-Five-${person.name}`}>
			<Cover
				title="Big Five Şəxsiyyət Hesabatı"
				date={formatDate(b.date)}
				tiles={BIG5_ORDER.map(k => ({ label: BIG5_DOMAINS[k].name, value: b.domains[k], color: BIG5_COLOR[k] }))}
				overall={b.domains[top]}
				overallLabel={BIG5_DOMAINS[top].name.split(' ')[0]}
				overallDisplay={String(b.domains[top])}
				summary={
					<>
						<p>
							Beş böyük şəxsiyyət ölçüsü üzrə profiliniz. Ən güclü ölçü — <b>{BIG5_DOMAINS[top].name}</b> ({b.domains[top]}/100): {BIG5_DOMAINS[top].levels[big5Level(b.domains[top])].summary}
						</p>
						<p>{big5Insights(b.domains)[0]}</p>
					</>
				}
				note="Big Five nəticələri davranış meylini göstərir; tibbi və ya psixoloji diaqnoz deyil. İctimai IPIP maddələrinə əsaslanır."
			/>
			<Page section="Profil" n={n++}>
				<Panel title="Beş ölçü üzrə profil">
					<BarBoard rows={BIG5_ORDER.map(k => ({ label: BIG5_DOMAINS[k].name, value: b.domains[k], color: BIG5_COLOR[k] }))} />
				</Panel>
				<H2>Ölçülərin birləşməsi</H2>
				<List items={big5Insights(b.domains)} />
			</Page>
			{BIG5_ORDER.map(k => {
				const d = BIG5_DOMAINS[k]
				const lv = big5Level(b.domains[k])
				const txt = d.levels[lv]
				const x = BIG5_EXTRA?.[k]?.[lv]
				const color = BIG5_COLOR[k]
				return (
					<Page key={k} section={d.name} n={n++}>
						<Dimension title={d.name} value={b.domains[k]} color={color}>
							{d.short}
						</Dimension>
						<div className="flex justify-between text-[13px] text-cds-muted -mt-4">
							<span>{d.lowLabel}</span>
							<span>{d.highLabel}</span>
						</div>
						<p className="text-[17px] font-semibold" style={{ color }}>
							{levelWord[lv]} səviyyə · {b.domains[k]}/100
						</p>
						<P>{txt.summary}</P>
						<div className="grid md:grid-cols-2 gap-5">
							<Box h="İşdə və təhsildə">{txt.work}</Box>
							<Box h="Münasibətlərdə">{txt.relationships}</Box>
							{x && <Box h="Karyera uyğunluğu">{x.careerFit}</Box>}
							{x && <Box h="Stress altında">{x.underStress}</Box>}
						</div>
						{x && (
							<Panel title="Uyğun rollar">
								<div className="flex flex-wrap gap-2">
									{x.idealRoles.map(r => (
										<span key={r} className="rounded-full bg-white border border-cds-line px-3 py-1 text-[14px]">
											{r}
										</span>
									))}
								</div>
								<p className="text-[14px] text-cds-muted mt-3">
									<b className="text-cds-ink">Diqqət: </b>
									{x.watchOut}
								</p>
							</Panel>
						)}
						<Box h="Tövsiyələr">
							<List items={txt.tips} color={color} />
						</Box>
					</Page>
				)
			})}
			<Page section="Nəticə" n={n++}>
				<H2>{first} üçün əsas çıxarışlar</H2>
				<List
					items={BIG5_ORDER.map(k => {
						const lv = big5Level(b.domains[k])
						return `${BIG5_DOMAINS[k].name} (${levelWord[lv].toLowerCase()}): ${BIG5_DOMAINS[k].levels[lv].tips[0]}`
					})}
				/>
				<Quote>Xarakter dəyişməz deyil — vərdişlər onu hər gün yenidən formalaşdırır.</Quote>
			</Page>
		</ReportDoc>
	)
}

// ---------------- RIASEC ----------------
export const RiasecFull = ({ r }: { r: RiasecResult }) => {
	const { person, first } = usePerson()
	const top = r.code.split('') as RiasecType[]
	const sorted = [...RIASEC_ORDER].sort((a, b) => r.scores[b] - r.scores[a])
	let n = 2
	return (
		<ReportDoc person={person} score={r.code} fileName={`Karyera-maraqlari-${r.code}-${person.name}`}>
			<Cover
				title="Karyera Maraqları Hesabatı"
				date={formatDate(r.date)}
				tiles={RIASEC_ORDER.map(k => ({ label: RIASEC_TYPES[k].name, value: r.scores[k], color: RIASEC_COLOR[k] }))}
				overall={r.scores[top[0]]}
				overallLabel="Kod"
				overallDisplay={r.code}
				summary={
					<>
						<p>
							Karyera maraqları kodunuz <b>{r.code}</b>: {top.map(k => RIASEC_TYPES[k].name).join(', ')}. {RIASEC_TYPES[top[0]].description}
						</p>
						<p>{RIASEC_EXTRA?.[top[0]]?.pairs?.[top[1]]}</p>
					</>
				}
			/>
			<Page section="Maraq profili" n={n++}>
				<H2>Hollandın altı maraq tipi</H2>
				<P>Model insanların iş mühitini altı tipə bölür. Ən yüksək üç tipiniz karyera kodunuzu verir; ilk hərf ən güclü marağınızdır. Kod, iş mühitinin sizə nə qədər “doğma” gələcəyini göstərir.</P>
				<div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
					<RiasecHexagon scores={r.scores} size={280} />
					<BarBoard rows={sorted.map(k => ({ label: RIASEC_TYPES[k].name, value: r.scores[k], color: RIASEC_COLOR[k] }))} />
				</div>
			</Page>
			{top.map((k, i) => {
				const t = RIASEC_TYPES[k]
				const x = RIASEC_EXTRA?.[k]
				return (
					<Page key={k} section={t.name} n={n++}>
						<Dimension title={`${i + 1}. ${t.name}`} value={r.scores[k]} color={RIASEC_COLOR[k]}>
							{t.short}
						</Dimension>
						<P>{t.description}</P>
						<div className="grid md:grid-cols-2 gap-5">
							<Box h="İş mühiti">{t.workEnvironment}</Box>
							{x && <Box h="Tipik məmnun iş günü">{x.typicalDay}</Box>}
							<Box h="Güclü tərəflər">
								<List items={t.strengths} color={RIASEC_COLOR[k]} />
							</Box>
							{x && (
								<Box h="Dəyərlər">
									<List items={x.values} color={RIASEC_COLOR[k]} />
								</Box>
							)}
						</div>
						<Panel title="Uyğun peşələr və ixtisaslar">
							<p className="text-[15px]">{t.careers.join(', ')}</p>
							<p className="text-[14px] text-cds-muted mt-2">İxtisaslar: {t.majors.join(', ')}</p>
						</Panel>
						{x && (
							<div className="grid md:grid-cols-2 gap-5">
								<Box h="Öyrənmə tərzi">{x.learningStyle}</Box>
								<Box h="İnkişaf tövsiyələri">
									<List items={x.developmentTips} />
								</Box>
							</div>
						)}
					</Page>
				)
			})}
			<Page section="Kombinasiya" n={n++}>
				<H2>Kodunuzun birləşmələri</H2>
				{[
					[top[0], top[1]],
					[top[0], top[2]],
					[top[1], top[2]]
				].map(([a, b2]) => (
					<Box key={a + b2} h={`${a}${b2} — ${RIASEC_TYPES[a].name} + ${RIASEC_TYPES[b2].name}`}>
						{RIASEC_EXTRA?.[a]?.pairs?.[b2] || ''}
					</Box>
				))}
				<Quote>Sevdiyiniz işi tapın — o zaman hər gün öyrənməyə dəyər.</Quote>
				<p className="text-[13px] text-cds-muted">{first}, bu kod “Vakansiyalar” bölməsində uyğunluğun 10%-ni müəyyən edir.</p>
			</Page>
		</ReportDoc>
	)
}
