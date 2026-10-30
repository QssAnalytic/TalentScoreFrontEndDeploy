import { useRef, useState } from 'react'
import useAuth from 'hooks/useAuth'
import { ENNEA_CENTERS, ENNEA_QUESTIONS, ENNEA_TYPES } from 'tests/enneagram/data'
import { scoreEnnea } from 'tests/enneagram/scoring'
import { EnneaResult, formatDate, saveResults, useResults } from 'tests/store'
import TestHeader from '../components/TestHeader'
import LikertRunner from '../components/LikertRunner'
import { ScoreBar } from '../components/Charts'
import { useExport } from '../components/useExport'
import { ExportBar } from '../iq/IqTest'
import { Bullets, Chips, Section } from '../mbti/MbtiTest'
import ShareButton from 'share/ShareButton'
import { EnneaShareCard } from 'share/cards'

// Enneagram symbol: 9 points on a circle (9 at the top), inner lines 1-4-2-8-5-7-1 and 3-6-9.
export const EnneaDiagram = ({ r, size = 320 }: { r: EnneaResult; size?: number }) => {
	const t = ENNEA_TYPES[r.type]
	const C = 160
	const R = 120
	const pt = (n: number) => {
		const a = (-90 + (n % 9) * 40) * (Math.PI / 180)
		return [C + R * Math.cos(a), C + R * Math.sin(a)]
	}
	const line = (a: number, b: number) => {
		const [x1, y1] = pt(a)
		const [x2, y2] = pt(b)
		return `M${x1} ${y1} L${x2} ${y2}`
	}
	const hexad = [1, 4, 2, 8, 5, 7, 1]
	const arrow = (from: number, to: number, color: string, id: string) => {
		const [x1, y1] = pt(from)
		const [x2, y2] = pt(to)
		const k = 0.82
		return (
			<g>
				<defs>
					<marker id={id} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
						<path d="M0 0L10 5L0 10z" fill={color} />
					</marker>
				</defs>
				<line x1={x1} y1={y1} x2={x1 + (x2 - x1) * k} y2={y1 + (y2 - y1) * k} stroke={color} strokeWidth="3.5" markerEnd={`url(#${id})`} />
			</g>
		)
	}
	return (
		<svg viewBox="0 0 320 320" width={size} height={size} role="img" aria-label={`Enneaqram: tip ${r.type}, qanad ${r.wing}`}>
			<circle cx={C} cy={C} r={R} fill="none" stroke="#D9D9D9" strokeWidth="2" />
			<path d={hexad.slice(0, -1).map((n, i) => line(n, hexad[i + 1])).join(' ')} stroke="#D9D9D9" strokeWidth="1.5" fill="none" />
			<path d={`${line(3, 6)} ${line(6, 9)} ${line(9, 3)}`} stroke="#D9D9D9" strokeWidth="1.5" fill="none" />
			{t && arrow(r.type, t.growthDirection, '#038477', 'g-arrow')}
			{t && arrow(r.type, t.stressDirection, '#EA9A3E', 's-arrow')}
			{Array.from({ length: 9 }, (_, i) => i + 1).map(n => {
				const [x, y] = pt(n)
				const main = n === r.type
				const wing = n === r.wing
				const score = r.scores[n] ?? 0
				return (
					<g key={n}>
						<circle cx={x} cy={y} r={main ? 22 : wing ? 17 : 10 + score / 12} fill={main ? '#103557' : wing ? '#08D0B0' : '#EBF5F4'} stroke={main ? '#103557' : '#038477'} strokeWidth="2" />
						<text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={main ? 18 : 13} fontWeight="700" fill={main ? '#fff' : '#103557'}>
							{n}
						</text>
					</g>
				)
			})}
		</svg>
	)
}

const EnneaTest = () => {
	const { user } = useAuth()
	const results = useResults(user?.email)
	const [running, setRunning] = useState(!!results.progress?.ennea)
	const e = results.ennea

	const finish = (answers: Record<string, number>) => {
		saveResults(user.email, { ennea: scoreEnnea(ENNEA_QUESTIONS, answers) })
		setRunning(false)
		window.scrollTo({ top: 0 })
	}

	return (
		<div className="px-6 py-10 lg:px-12">
			<div className={`${running ? 'max-w-[860px]' : 'max-w-[1120px]'} mx-auto flex flex-col gap-8`}>
				<TestHeader
					number={4}
					title="Enneaqram testi"
					compact={running}
					subtitle={running ? undefined : 'Davranışınızın arxasındakı əsas motivasiyanı göstərir: nəyə can atdığınızı, nədən qaçdığınızı, stress altında və inkişaf edərkən necə dəyişdiyinizi.'}
					actions={
						e && !running ? (
							<>
								<ShareButton title="Enneaqram tipim" text={`Enneaqram tipim: ${e.type}w${e.wing} — ${ENNEA_TYPES[e.type]?.name}`} card={<EnneaShareCard />} />
								<button type="button" onClick={() => setRunning(true)} className="text-[14px] py-[10px] px-[22px] rounded-[25px] text-qss-inputText hover:text-qss-primary">
									Yenidən keç
								</button>
							</>
						) : undefined
					}
				/>
				{running ? (
					<LikertRunner testKey="ennea" questions={ENNEA_QUESTIONS} onFinish={finish} onCancel={e ? () => setRunning(false) : undefined} />
				) : e ? (
					<EnneaReport e={e} />
				) : (
					<div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
						<div className="rounded-2xl bg-white border border-qss-border shadow-sm p-7 flex flex-col gap-5">
							<div className="grid sm:grid-cols-3 gap-4">
								{ENNEA_CENTERS.map(c => (
									<div key={c.id}>
										<p className="font-semibold text-qss-primary text-sm">{c.name}</p>
										<p className="text-xs text-qss-inputText mt-0.5">Tiplər {c.types.join(', ')}</p>
									</div>
								))}
							</div>
							<button type="button" onClick={() => setRunning(true)} className="self-start text-[15px] text-white py-[12px] px-[30px] rounded-[25px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop">
								Testə başla · {ENNEA_QUESTIONS.length} ifadə
							</button>
						</div>
						<div className="rounded-2xl bg-qss-transbg p-7 flex flex-col gap-3 text-sm text-qss-inputText leading-relaxed">
							<p className="font-semibold text-qss-primary text-base">Necə cavab verməli</p>
							<p>İfadələr hisslərinizi və səbəblərinizi soruşur. Son illərdə özünüzü necə tanıyırsınızsa, elə cavab verin.</p>
							<p>Hər tip həm güclü, həm də çətin tərəflərə malikdir — “daha yaxşı” tip yoxdur.</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export const EnneaReport = ({ e }: { e: EnneaResult }) => {
	const { user } = useAuth()
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, `Enneaqram-${e.type}w${e.wing}`)
	const t = ENNEA_TYPES[e.type]
	if (!t) return null
	const wing = t.wings.find(w => w.wing === e.wing)
	const ranked = Object.entries(e.scores).sort((a, b) => b[1] - a[1])
	const center = ENNEA_CENTERS.find(c => c.types.includes(e.type as any))
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	return (
		<div className="flex flex-col gap-4 items-start">
			<ExportBar onPrint={print} />
			<div ref={ref} className="w-full max-w-[960px] bg-white rounded-2xl shadow-sm overflow-hidden">
				<div className="bg-gradient-to-br from-qss-gradientTop via-qss-primary to-qss-alternative text-white px-10 py-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
					<div>
						<p className="text-white/70 text-xs tracking-[0.2em]">ENNEAQRAM TİPİ</p>
						<p className="font-manrope text-7xl font-extrabold mt-2">
							{e.type}
							<span className="text-4xl text-qss-gradientBottom">w{e.wing}</span>
						</p>
						<p className="font-manrope text-2xl font-bold text-qss-gradientBottom mt-1">{t.name}</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-lg leading-relaxed">{t.tagline}</p>
						<p className="text-white/70 text-sm">
							{name} · {formatDate(e.date)}
						</p>
					</div>
				</div>

				<div className="px-10 py-10 flex flex-col gap-12">
					<section className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
						<div className="flex flex-col items-center gap-3">
							<EnneaDiagram r={e} />
							<div className="flex gap-4 text-xs text-qss-inputText">
								<span className="flex items-center gap-1.5">
									<span className="w-3 h-1 bg-qss-secondary inline-block" /> İnkişaf → {t.growthDirection}
								</span>
								<span className="flex items-center gap-1.5">
									<span className="w-3 h-1 bg-[#EA9A3E] inline-block" /> Stress → {t.stressDirection}
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-3">
							{ranked.slice(0, 9).map(([n, s]) => (
								<ScoreBar key={n} label={`${n}. ${ENNEA_TYPES[Number(n)]?.name}`} value={s} display={`${s}%`} />
							))}
						</div>
					</section>

					<Section title="Əsas motivasiya">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="rounded-xl bg-qss-transbg p-5">
								<p className="text-xs font-semibold uppercase tracking-wide text-qss-alternative mb-1">Əsas istək</p>
								<p className="text-qss-primary leading-relaxed">{t.coreDesire}</p>
							</div>
							<div className="rounded-xl bg-[#FFF8EC] p-5">
								<p className="text-xs font-semibold uppercase tracking-wide text-[#8A4B00] mb-1">Əsas qorxu</p>
								<p className="text-qss-primary leading-relaxed">{t.coreFear}</p>
							</div>
						</div>
						<p className="text-qss-inputText leading-relaxed text-[17px]">{t.summary}</p>
						{wing && (
							<div className="rounded-xl border border-qss-border p-5">
								<p className="font-semibold text-qss-primary mb-1">
									Qanad: {e.type}w{e.wing} — {wing.name}
								</p>
								<p className="text-qss-inputText leading-relaxed">{wing.description}</p>
							</div>
						)}
						{center && (
							<p className="text-sm text-qss-inputText">
								<b className="text-qss-primary">{center.name}:</b> {center.description}
							</p>
						)}
					</Section>

					<Section title="Güclü tərəflər və kor nöqtələr">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="rounded-xl bg-qss-transbg p-5">
								<Bullets items={t.strengths} />
							</div>
							<div className="rounded-xl bg-[#FFF8EC] p-5">
								<Bullets items={t.blindSpots} tone="amber" />
							</div>
						</div>
					</Section>

					<Section title="Ünsiyyət">
						<p className="text-qss-inputText leading-relaxed">{t.communication}</p>
						<Bullets items={t.communicationTips} />
					</Section>

					<Section title="Karyera və iş tərzi">
						<p className="text-qss-inputText leading-relaxed">{t.career}</p>
						<Chips items={t.careers} />
						<p className="text-qss-inputText leading-relaxed">{t.workStyle}</p>
					</Section>

					<Section title="Münasibətlər">
						<p className="text-qss-inputText leading-relaxed">{t.relationships}</p>
					</Section>

					<Section title="Stress və inkişaf istiqamətləri">
						<div className="grid md:grid-cols-2 gap-6">
							<div className="rounded-xl bg-[#FFF8EC] p-5">
								<p className="font-semibold text-qss-primary mb-2">
									Stress altında → {t.stressDirection} ({ENNEA_TYPES[t.stressDirection]?.name})
								</p>
								<p className="text-qss-inputText leading-relaxed">{t.stress}</p>
							</div>
							<div className="rounded-xl bg-qss-transbg p-5">
								<p className="font-semibold text-qss-primary mb-2">
									İnkişaf edərkən → {t.growthDirection} ({ENNEA_TYPES[t.growthDirection]?.name})
								</p>
								<p className="text-qss-inputText leading-relaxed">{t.growth}</p>
							</div>
						</div>
						<div className="rounded-xl border border-qss-border p-5">
							<p className="font-semibold text-qss-primary mb-3">İnkişaf tövsiyələri</p>
							<Bullets items={t.growthTips} />
						</div>
					</Section>

					<p className="text-xs text-qss-base-300 leading-relaxed">Enneaqram motivasiya modelidir; tip insanın dəyərini və bacarığını ölçmür. Ən dəqiq nəticə üçün hesabatı oxuyub özünüzü ən çox tanıdığınız tipi də nəzərə alın — çox vaxt ilk iki-üç tip yaxın ballar alır.</p>
				</div>
			</div>
		</div>
	)
}

export default EnneaTest
