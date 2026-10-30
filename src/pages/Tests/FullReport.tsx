import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { ageFrom, formatDate, talentPercent } from 'tests/store'
import { TESTS, talentLabel } from 'tests/registry'
import { rankCombined } from 'tests/careers'
import { MBTI_TYPES } from 'tests/mbti/data'
import { ENNEA_TYPES } from 'tests/enneagram/data'
import { DOMAIN_LABEL } from 'tests/iq/scoring'
import { domainTraining } from 'tests/iq/report'
import { IqDomain } from 'tests/types'
import { useTestStatus } from 'components/AppShell/AppShell'
import { IconCheck } from 'components/AppShell/icons'
import TestHeader from './components/TestHeader'
import { IqGauge, ScoreBar } from './components/Charts'
import { useExport } from './components/useExport'
import { ExportBar } from './iq/IqTest'
import { EnneaDiagram } from './enneagram/EnneaTest'
import { Bullets, Chips, Section } from './mbti/MbtiTest'
import ShareButton from 'share/ShareButton'
import { FullShareCard } from 'share/cards'

const genderAz = (g?: string) => (g === 'Male' ? 'Kişi' : g === 'Female' ? 'Qadın' : '')

const FullReport = () => {
	const { user } = useAuth()
	const { done, results: r, count } = useTestStatus()
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, 'Talent-Score-tam-hesabat')
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	const age = ageFrom(user?.birth_date)
	const mbti = r.mbti ? MBTI_TYPES[r.mbti.code] : undefined
	const ennea = r.ennea ? ENNEA_TYPES[r.ennea.type] : undefined
	const careers = rankCombined(r, 8)

	const chain = (
		<ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
			{TESTS.map(t => (
				<li key={t.id}>
					<Link to={t.path} className={`flex items-center gap-3 rounded-xl border px-4 py-3 h-full ${done[t.id] ? 'border-qss-base-400 bg-qss-transbg' : 'border-qss-border bg-white hover:border-qss-secondary'}`}>
						<span className={`w-7 h-7 shrink-0 rounded-full grid place-items-center text-xs font-bold ${done[t.id] ? 'bg-qss-secondary text-white' : 'bg-qss-input text-qss-inputText'}`}>{done[t.id] ? <IconCheck /> : t.number}</span>
						<span className="text-sm text-qss-primary leading-snug">{t.short}</span>
					</Link>
				</li>
			))}
		</ol>
	)

	if (count < 2)
		return (
			<div className="px-6 py-10 lg:px-12">
				<div className="max-w-[1120px] mx-auto flex flex-col gap-8">
					<TestHeader eyebrow="Nəticələr" title="Tam hesabat" subtitle="Bütün testlərin nəticələrini birləşdirən şəxsi hesabat: intellekt, şəxsiyyət, motivasiya və bacarıqlar bir yerdə, ümumi karyera tövsiyələri ilə." />
					{chain}
					<div className="rounded-2xl bg-white border border-qss-border p-8 max-w-2xl">
						<p className="font-semibold text-qss-primary">Tam hesabat üçün ən azı 2 test tamamlayın.</p>
						<p className="text-sm text-qss-inputText mt-2">Hazırda tamamlanıb: {count} / 4. Nə qədər çox test keçsəniz, tövsiyələr bir o qədər dəqiq olur.</p>
					</div>
				</div>
			</div>
		)

	const strengths = [
		...(r.iq
			? (Object.keys(r.iq.domains) as IqDomain[])
					.filter(d => r.iq!.domains[d].index >= 110)
					.map(d => `${DOMAIN_LABEL[d]} təfəkkür (indeks ${r.iq!.domains[d].index})`)
			: []),
		...(mbti?.strengths.slice(0, 3) || []),
		...(ennea?.strengths.slice(0, 3) || [])
	]
	const growth = [
		...(r.iq
			? (() => {
					const d = (Object.keys(r.iq.domains) as IqDomain[]).sort((a, b) => r.iq!.domains[a].index - r.iq!.domains[b].index)[0]
					return [`${DOMAIN_LABEL[d]} bacarıqları: ${domainTraining(d)[0]}`]
			  })()
			: []),
		...(mbti?.growth.slice(0, 2) || []),
		...(ennea?.growthTips.slice(0, 2) || [])
	]

	return (
		<div className="px-6 py-10 lg:px-12">
			<div className="max-w-[1120px] mx-auto flex flex-col gap-8">
				<TestHeader
					eyebrow="Nəticələr"
					title="Tam hesabat"
					subtitle={`${count} testin nəticəsi birləşdirilib.${count < 4 ? ' Qalan testləri keçsəniz hesabat avtomatik yenilənəcək.' : ''}`}
					actions={<ShareButton title="Tam profilim" text="Talent Score tam profil hesabatım" card={<FullShareCard />} />}
				/>
				{chain}
				<ExportBar onPrint={print} />

				<div ref={ref} className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
					<div className="bg-gradient-to-br from-qss-gradientTop via-qss-primary to-qss-alternative text-white px-10 py-10 flex flex-wrap items-center gap-8">
						{r.photo && <img src={r.photo} alt="" className="w-28 h-28 rounded-full object-cover border-4 border-white/80" />}
						<div className="flex-1 min-w-[240px]">
							<p className="font-manrope text-sm font-extrabold tracking-[0.25em] text-white/80">TALENT SCORE · TAM PROFİL HESABATI</p>
							<p className="font-manrope text-4xl font-extrabold mt-2">{name}</p>
							<p className="text-white/75 mt-1">{[age != null ? `${age} yaş` : '', genderAz(user?.gender), formatDate(new Date().toISOString())].filter(Boolean).join(' · ')}</p>
						</div>
						<div className="grid grid-cols-2 gap-3 min-w-[280px]">
							{r.iq && <Stat label="IQ" value={`${r.iq.iq}`} sub={r.iq.band} />}
							{r.mbti && <Stat label="Şəxsiyyət tipi" value={r.mbti.code} sub={mbti?.name} />}
							{r.ennea && <Stat label="Enneaqram" value={`${r.ennea.type}w${r.ennea.wing}`} sub={ennea?.name} />}
							{r.talent && <Stat label="Talant" value={`${Math.round(Object.values(r.talent.data).reduce((a, v) => a + talentPercent(v.score), 0) / Math.max(1, Object.values(r.talent.data).length))}%`} sub="ümumi" />}
						</div>
					</div>

					<div className="px-10 py-10 flex flex-col gap-12">
						<Section title="Xülasə">
							<p className="text-qss-inputText leading-relaxed text-[17px]">
								{[
									r.iq && `İntellektual göstəriciniz ${r.iq.iq} (${r.iq.band.toLowerCase()}); ən güclü sahəniz ${DOMAIN_LABEL[(Object.keys(r.iq.domains) as IqDomain[]).sort((a, b) => r.iq!.domains[b].index - r.iq!.domains[a].index)[0]].toLowerCase()} təfəkkürdür.`,
									mbti && `Şəxsiyyət tipiniz ${r.mbti!.code} — ${mbti.name}: ${mbti.tagline}`,
									ennea && `Enneaqrama görə əsas motivasiyanız: ${ennea.coreDesire.charAt(0).toLowerCase()}${ennea.coreDesire.slice(1)}`
								]
									.filter(Boolean)
									.join(' ')}
							</p>
						</Section>

						<Section title="Ən uyğun karyera istiqamətləri">
							<p className="text-qss-inputText">Hər istiqamət tamamladığınız bütün testlərə görə qiymətləndirilib: intellektual profil, talant balları, şəxsiyyət tipi və motivasiya. Bir neçə testin eyni sahəni göstərməsi ən güclü siqnaldır.</p>
							<div className="grid md:grid-cols-2 gap-4">
								{careers.map((c, i) => (
									<div key={c.career.id} className="rounded-xl border border-qss-border p-5 flex flex-col gap-2">
										<div className="flex items-baseline justify-between gap-3">
											<p className="font-semibold text-qss-primary">
												<span className="text-qss-secondary tabular-nums mr-2">{i + 1}.</span>
												{c.career.name}
											</p>
											<span className="text-sm font-bold text-qss-alternative tabular-nums">{c.score}%</span>
										</div>
										<div className="h-1.5 rounded-full bg-qss-base-400">
											<div className="h-full rounded-full bg-qss-secondary" style={{ width: `${c.score}%` }} />
										</div>
										{c.reasons.length > 0 && (
											<ul className="text-xs text-qss-inputText list-disc pl-4">
												{c.reasons.map(x => (
													<li key={x}>{x}</li>
												))}
											</ul>
										)}
										<p className="text-xs text-qss-primary">
											<b>İxtisaslar:</b> {c.career.majors.join(', ')}
										</p>
									</div>
								))}
							</div>
						</Section>

						{(r.iq || r.talent) && (
							<Section title="Bacarıq profili">
								<div className="grid md:grid-cols-2 gap-10 items-start">
									{r.iq && (
										<div className="flex flex-col gap-4">
											<div className="flex justify-center">
												<IqGauge value={r.iq.iq} size={220} />
											</div>
											{(Object.keys(r.iq.domains) as IqDomain[]).map(d => (
												<ScoreBar key={d} label={DOMAIN_LABEL[d]} value={r.iq!.domains[d].index - 55} max={95} display={String(r.iq!.domains[d].index)} />
											))}
										</div>
									)}
									{r.talent && (
										<div className="flex flex-col gap-4">
											<p className="font-semibold text-qss-primary">Talant balları (yaşıdlarla müqayisədə)</p>
											{Object.values(r.talent.data).map(v => (
												<ScoreBar key={v.text} label={talentLabel(v.text)} value={talentPercent(v.score)} display={`${talentPercent(v.score)}%`} />
											))}
										</div>
									)}
								</div>
							</Section>
						)}

						{(mbti || ennea) && (
							<Section title="Şəxsiyyət və motivasiya">
								<div className="grid md:grid-cols-2 gap-8 items-start">
									{mbti && (
										<div className="flex flex-col gap-3">
											<p className="font-manrope text-2xl font-bold text-qss-primary">
												{r.mbti!.code} · {mbti.name}
											</p>
											<p className="text-qss-inputText leading-relaxed">{mbti.summary}</p>
											<Link to="/profile/tests/mbti" className="text-sm font-semibold text-qss-secondary">
												MBTI hesabatı →
											</Link>
										</div>
									)}
									{ennea && (
										<div className="flex flex-col gap-3">
											<div className="flex items-center gap-4">
												<EnneaDiagram r={r.ennea!} size={140} />
												<p className="font-manrope text-2xl font-bold text-qss-primary">
													{r.ennea!.type}w{r.ennea!.wing} · {ennea.name}
												</p>
											</div>
											<p className="text-qss-inputText leading-relaxed">{ennea.summary}</p>
											<Link to="/profile/tests/enneagram" className="text-sm font-semibold text-qss-secondary">
												Enneaqram hesabatı →
											</Link>
										</div>
									)}
								</div>
							</Section>
						)}

						{(mbti || ennea) && (
							<Section title="Ünsiyyət və komanda işi">
								<div className="grid md:grid-cols-2 gap-6">
									{mbti && (
										<div className="flex flex-col gap-3">
											<p className="text-qss-inputText leading-relaxed">{mbti.communication}</p>
											<p className="text-qss-inputText leading-relaxed">{mbti.workStyle}</p>
										</div>
									)}
									{ennea && (
										<div className="flex flex-col gap-3">
											<p className="text-qss-inputText leading-relaxed">{ennea.communication}</p>
											<p className="text-qss-inputText leading-relaxed">{ennea.workStyle}</p>
										</div>
									)}
								</div>
							</Section>
						)}

						{(mbti || ennea) && (
							<Section title="Münasibətlər">
								<div className="grid md:grid-cols-2 gap-6">
									{mbti && <p className="text-qss-inputText leading-relaxed">{mbti.relationships}</p>}
									{ennea && <p className="text-qss-inputText leading-relaxed">{ennea.relationships}</p>}
								</div>
							</Section>
						)}

						<Section title="Güclü tərəflər və inkişaf planı">
							<div className="grid md:grid-cols-2 gap-6">
								<div className="rounded-xl bg-qss-transbg p-5">
									<p className="font-semibold text-qss-primary mb-3">Güclü tərəflər</p>
									<Bullets items={strengths.slice(0, 8)} />
								</div>
								<div className="rounded-xl bg-[#FFF8EC] p-5">
									<p className="font-semibold text-qss-primary mb-3">Növbəti 3 ay üçün</p>
									<Bullets items={growth.slice(0, 6)} tone="amber" />
								</div>
							</div>
							{mbti && (
								<>
									<p className="font-semibold text-qss-primary">Tövsiyə olunan ixtisaslar</p>
									<Chips items={Array.from(new Set([...careers.slice(0, 4).flatMap(c => c.career.majors.slice(0, 2)), ...mbti.majors.slice(0, 3)]))} />
								</>
							)}
						</Section>

						<p className="text-xs text-qss-base-300 leading-relaxed">Hesabat Talent Score testlərinin nəticələrinə əsaslanır və karyera seçimində istiqamət vermək üçündür. IQ göstəricisi təxminidir; şəxsiyyət tipləri meyli göstərir, bacarığı yox. Qərarı verərkən maraqlarınızı, dəyərlərinizi və real təcrübənizi də nəzərə alın.</p>
					</div>
					<div className="px-10 py-4 bg-qss-input text-xs text-qss-base-300 flex justify-between">
						<span>TALENT SCORE · Süni intellekt sistemi</span>
						<span>{formatDate(new Date().toISOString())}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

const Stat = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
	<div className="rounded-xl bg-white/10 px-4 py-3">
		<p className="text-xs text-white/70">{label}</p>
		<p className="font-manrope text-2xl font-extrabold">{value}</p>
		{sub && <p className="text-xs text-qss-gradientBottom">{sub}</p>}
	</div>
)

export default FullReport
