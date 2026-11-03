import { Link } from 'react-router-dom'
import { formatDate, UserResults } from 'tests/store'
import { TESTS } from 'tests/registry'
import { rankCombined } from 'tests/careers'
import { MBTI_TYPES } from 'tests/mbti/data'
import { ENNEA_TYPES } from 'tests/enneagram/data'
import { BIG5_DOMAINS, BIG5_ORDER } from 'tests/big5/data'
import { RIASEC_TYPES } from 'tests/riasec/data'
import { RiasecType } from 'tests/types'
import { DOMAIN_LABEL } from 'tests/iq/scoring'
import { traitScores, TRAIT_LABEL } from 'jobs/match'
import { Trait } from 'jobs/types'
import { RiasecHexagon } from 'pages/Tests/riasec/RiasecTest'
import { MBTI_EXTRA } from '../content/mbti'
import { ENNEA_EXTRA } from '../content/ennea'
import { TALENT_AREAS } from '../content/talent'
import { BIG5_COLOR, CATEGORY, CDS, IQ_COLOR, TALENT_COLOR, iqToPct, levelOf } from '../design'
import { BarBoard } from '../charts'
import { Cover, H2, List, P, Page, Panel, PlanGrid, Quote, ReportDoc } from '../ReportDoc'
import { fmt, usePerson } from '../person'
import { talentScores } from './TalentFull'

const PATH: Record<string, string> = { talent: '/profile/report', iq: '/profile/tests/iq', mbti: '/profile/tests/mbti', ennea: '/profile/tests/enneagram', big5: '/profile/tests/big5', riasec: '/profile/tests/riasec' }

const CombinedFull = ({ r, done }: { r: UserResults; done: Record<string, boolean> }) => {
	const { person, first } = usePerson()
	const count = TESTS.filter(t => done[t.id]).length
	const talent = r.talent ? talentScores(r.talent) : []
	const talentAvg = talent.length ? talent.reduce((a, s) => a + s.value, 0) / talent.length : null
	const mbti = r.mbti ? MBTI_TYPES[r.mbti.code] : undefined
	const ennea = r.ennea ? ENNEA_TYPES[r.ennea.type] : undefined
	const careers = rankCombined(r, 8)
	const traits = traitScores(r)
	const traitRows = (Object.keys(traits) as Trait[]).sort((a, b) => traits[b] - traits[a])
	const colors = Object.values(CATEGORY)
	const tiles = [
		talentAvg != null && { label: 'Talant', value: fmt(talentAvg, 0), color: CATEGORY.navy },
		r.iq && { label: 'IQ', value: r.iq.iq, color: CATEGORY.orange },
		r.mbti && { label: '16 tip', value: r.mbti.code, color: CATEGORY.purple },
		r.ennea && { label: 'Enneaqram', value: `${r.ennea.type}w${r.ennea.wing}`, color: CATEGORY.steel },
		r.big5 && { label: 'Big Five', value: Math.max(...BIG5_ORDER.filter(k => k !== 'N').map(k => r.big5!.domains[k])), color: CATEGORY.green },
		r.riasec && { label: 'Maraqlar', value: r.riasec.code, color: CATEGORY.red }
	].filter(Boolean) as { label: string; value: string | number; color: string }[]
	const strengths = [
		...(talent.length ? [...talent].sort((a, b) => b.value - a.value).slice(0, 2).map(s => `${TALENT_AREAS[s.id]?.name}: ${s.value}% — ${TALENT_AREAS[s.id]?.levels[levelOf(s.value)].title}`) : []),
		...(r.iq ? Object.entries(r.iq.domains).filter(([, d]) => d.index >= 110).map(([k, d]) => `${DOMAIN_LABEL[k as 'verbal']} təfəkkür (indeks ${d.index})`) : []),
		...(mbti?.strengths.slice(0, 3) || []),
		...(ennea?.strengths.slice(0, 2) || [])
	]
	const growth = [...(mbti?.growth.slice(0, 2) || []), ...(ennea?.growthTips.slice(0, 2) || []), ...(talent.length ? [...talent].sort((a, b) => a.value - b.value).slice(0, 1).map(s => TALENT_AREAS[s.id]?.levels[levelOf(s.value)].actions[0]) : [])].filter(Boolean) as string[]
	const plan = r.mbti && MBTI_EXTRA[r.mbti.code] ? MBTI_EXTRA[r.mbti.code].developmentPlan : r.ennea && ENNEA_EXTRA[r.ennea.type] ? ENNEA_EXTRA[r.ennea.type].developmentPlan : null
	let n = 2
	return (
		<ReportDoc person={person} score={talentAvg != null ? fmt(talentAvg, 1) : `${count}/6`} fileName={`Tam-hesabat-${person.name}`}>
			<Cover
				title="Tam Profil Hesabatı"
				date={formatDate(new Date().toISOString())}
				tiles={tiles}
				overall={(count / 6) * 100}
				overallLabel="Testlər"
				overallDisplay={`${count}/6`}
				summary={
					<>
						<p>
							Bu hesabat {person.name} tərəfindən tamamlanmış <b>{count} testin</b> nəticələrini birləşdirir: bacarıqlar, intellekt, şəxsiyyət, motivasiya və karyera maraqları bir yerdə.
						</p>
						<p>
							{[
								r.iq && `İntellektual göstərici ${r.iq.iq} (${r.iq.band.toLowerCase()}).`,
								mbti && `Şəxsiyyət tipi ${r.mbti!.code} — ${mbti.name}: ${mbti.tagline}`,
								ennea && `Əsas motivasiya (Enneaqram ${r.ennea!.type}): ${ennea.coreDesire}`,
								r.riasec && `Karyera kodu ${r.riasec.code}.`
							]
								.filter(Boolean)
								.join(' ')}
						</p>
						{careers[0] && (
							<p>
								Ən uyğun karyera istiqaməti: <b>{careers[0].career.name}</b> ({careers[0].score}%).
							</p>
						)}
					</>
				}
			/>

			<Page section="Testlər" n={n++}>
				<H2>Hesabatın tərkibi</H2>
				<div className="grid sm:grid-cols-2 gap-4">
					{TESTS.map((t, i) => (
						<Link key={t.id} to={PATH[t.id]} className={`rounded-md border p-4 flex gap-3 items-start hover:border-cds-teal ${done[t.id] ? 'border-cds-line bg-white' : 'border-dashed border-cds-line bg-cds-paper'}`}>
							<span className="w-9 h-9 rounded grid place-items-center text-white font-bold shrink-0" style={{ background: done[t.id] ? colors[i % 6] : '#C9CFD1' }}>
								{t.number}
							</span>
							<span className="flex-1">
								<span className="block font-semibold">{t.title}</span>
								<span className="text-[13px] text-cds-muted">{done[t.id] ? 'Tamamlanıb — ətraflı hesabata keçin →' : 'Hələ keçilməyib'}</span>
							</span>
						</Link>
					))}
				</div>
				<Panel title="Ən uyğun karyera istiqamətləri">
					<P>Hər istiqamət tamamlanmış bütün testlərə görə qiymətləndirilib: IQ profili (40%), talant balları (25%), karyera maraqları (25%), 16 tip (20%), Enneaqram (15%). Bir neçə testin eyni sahəni göstərməsi ən güclü siqnaldır.</P>
					<div className="flex flex-col gap-3 mt-4">
						{careers.map((c, i) => (
							<div key={c.career.id} className="grid grid-cols-[1fr_minmax(120px,35%)_52px] items-center gap-4 bg-white rounded-md border border-cds-line px-4 py-3">
								<div>
									<p className="font-semibold">
										{i + 1}. {c.career.name}
									</p>
									<p className="text-[12px] text-cds-muted">{c.reasons.slice(0, 2).join(' · ') || c.career.field}</p>
								</div>
								<div className="h-3 rounded-full bg-[#EDEFEF]">
									<div className="h-full rounded-full" style={{ width: `${c.score}%`, background: CDS.gradient }} />
								</div>
								<span className="font-bold tabular-nums text-right">{c.score}%</span>
							</div>
						))}
					</div>
				</Panel>
			</Page>

			{(talent.length > 0 || r.iq) && (
				<Page section="Bacarıqlar" n={n++}>
					{talent.length > 0 && (
						<Panel title="Talant balları">
							<BarBoard rows={talent.map(s => ({ label: TALENT_AREAS[s.id]?.name || s.id, value: s.value, color: TALENT_COLOR[s.id] }))} average={talentAvg!} />
						</Panel>
					)}
					{r.iq && (
						<Panel title={`İntellektual profil · IQ ${r.iq.iq}`}>
							<BarBoard rows={Object.entries(r.iq.domains).map(([k, d]) => ({ label: DOMAIN_LABEL[k as 'verbal'], value: iqToPct(d.index), color: IQ_COLOR[k], display: String(d.index) }))} />
						</Panel>
					)}
				</Page>
			)}

			{(mbti || r.big5 || ennea || r.riasec) && (
				<Page section="Şəxsiyyət və maraqlar" n={n++}>
					{mbti && (
						<Panel title={`${r.mbti!.code} — ${mbti.name}`}>
							<P>{mbti.summary}</P>
						</Panel>
					)}
					<div className="grid md:grid-cols-2 gap-6 items-start">
						{r.big5 && (
							<div className="flex flex-col gap-3">
								<p className="font-bold" style={{ color: CDS.heading }}>
									Big Five
								</p>
								<BarBoard rows={BIG5_ORDER.map(k => ({ label: BIG5_DOMAINS[k].name, value: r.big5!.domains[k], color: BIG5_COLOR[k] }))} />
							</div>
						)}
						{r.riasec && (
							<div className="flex flex-col items-center gap-2">
								<p className="font-bold self-start" style={{ color: CDS.heading }}>
									Karyera kodu {r.riasec.code}
								</p>
								<RiasecHexagon scores={r.riasec.scores} size={250} />
								<p className="text-[13px] text-cds-muted text-center">{(r.riasec.code.split('') as RiasecType[]).map(k => RIASEC_TYPES[k].name).join(' · ')}</p>
							</div>
						)}
					</div>
					{ennea && (
						<Panel title={`Enneaqram ${r.ennea!.type}w${r.ennea!.wing} — ${ennea.name}`}>
							<P>{ennea.summary}</P>
						</Panel>
					)}
				</Page>
			)}

			<Page section="İş tərzi xüsusiyyətləri" n={n++}>
				<H2>İş tərzi xüsusiyyətləri</H2>
				<P>Testlərin nəticələri vakansiya uyğunluğunda istifadə olunan 8 iş xüsusiyyətinə çevrilir. Vakansiyanın tələb etdiyi xüsusiyyətlər sizdə nə qədər güclüdürsə, “Şəxsiyyət uyğunluğu” balı o qədər yüksək olur.</P>
				<BarBoard rows={traitRows.map((k, i) => ({ label: TRAIT_LABEL[k].charAt(0).toUpperCase() + TRAIT_LABEL[k].slice(1), value: Math.round(traits[k] * 100), color: colors[i % 6] }))} />
				<div className="grid md:grid-cols-2 gap-6">
					<div>
						<p className="font-bold mb-2" style={{ color: CDS.heading }}>
							Güclü tərəflər
						</p>
						<List items={strengths.slice(0, 8)} />
					</div>
					<div>
						<p className="font-bold mb-2" style={{ color: CDS.heading }}>
							İnkişaf sahələri
						</p>
						<List items={growth.slice(0, 6)} color="#B7791F" />
					</div>
				</div>
			</Page>

			{plan && (
				<Page section="İnkişaf planı" n={n++}>
					<H2>{first} üçün inkişaf planı</H2>
					<PlanGrid
						plan={[
							{ title: 'İlk 30 gün', items: plan.d30 },
							{ title: '90 gün', items: plan.d90 },
							{ title: '1 il', items: plan.y1 }
						]}
					/>
					<Quote>Ən yaxşı karyera qərarı — özünüzü tanıyaraq verdiyiniz qərardır.</Quote>
					<p className="text-[12px] text-cds-muted">Hesabat Talent Score testlərinin nəticələrinə əsaslanır və istiqamət vermək üçündür. IQ göstəricisi təxminidir; şəxsiyyət tipləri meyli göstərir, bacarığı yox.</p>
				</Page>
			)}
		</ReportDoc>
	)
}

export default CombinedFull
