import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { RIASEC_ORDER, RIASEC_QUESTIONS, RIASEC_SCALE, RIASEC_TYPES } from 'tests/riasec/data'
import { scoreRiasec } from 'tests/big5/scoring'
import { RiasecResult, formatDate, saveResults, useResults } from 'tests/store'
import { RiasecType } from 'tests/types'
import TestHeader from '../components/TestHeader'
import LikertRunner from '../components/LikertRunner'
import { useExport } from '../components/useExport'
import { ExportBar } from '../iq/IqTest'
import { Bullets, Chips, Section } from '../mbti/MbtiTest'
import ShareButton from 'share/ShareButton'
import { RiasecShareCard } from 'share/cards'

// Hexagon: R I A S E C clockwise, as in Holland's model.
export const RiasecHexagon = ({ scores, size = 300, light = false }: { scores: Record<string, number>; size?: number; light?: boolean }) => {
	const c = size / 2
	const R = size * 0.36
	const pt = (i: number, f: number) => {
		const a = -Math.PI / 2 + (i * Math.PI) / 3
		return [c + Math.cos(a) * R * f, c + Math.sin(a) * R * f]
	}
	const poly = RIASEC_ORDER.map((t, i) => pt(i, Math.max(0.06, scores[t] / 100)).join(',')).join(' ')
	const stroke = light ? 'rgba(255,255,255,.35)' : '#D7E3E8'
	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Karyera maraqları altıbucaqlısı">
			{[0.25, 0.5, 0.75, 1].map(f => (
				<polygon key={f} points={RIASEC_ORDER.map((_, i) => pt(i, f).join(',')).join(' ')} fill="none" stroke={stroke} strokeWidth="1" />
			))}
			<polygon points={poly} fill={light ? 'rgba(8,208,176,.45)' : 'rgba(3,132,119,.25)'} stroke={light ? '#08D0B0' : '#038477'} strokeWidth="2.5" />
			{RIASEC_ORDER.map((t, i) => {
				const [x, y] = pt(i, 1.2)
				return (
					<text key={t} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={size * 0.045} fontWeight="700" fill={light ? '#fff' : '#103557'}>
						{RIASEC_TYPES[t].name}
					</text>
				)
			})}
		</svg>
	)
}

const RiasecTest = () => {
	const { user } = useAuth()
	const results = useResults(user?.email)
	const [running, setRunning] = useState(!!results.progress?.riasec)
	const r = results.riasec

	const finish = (answers: Record<string, number>) => {
		saveResults(user.email, { riasec: scoreRiasec(RIASEC_QUESTIONS, answers) })
		setRunning(false)
		window.scrollTo({ top: 0 })
	}

	return (
		<div className="px-6 py-10 lg:px-12">
			<div className={`${running ? 'max-w-[860px]' : 'max-w-[1120px]'} mx-auto flex flex-col gap-8`}>
				<TestHeader
					number={6}
					title="Karyera maraqları testi (RIASEC)"
					compact={running}
					subtitle={running ? undefined : 'Hollandın altı maraq tipi əsasında hansı fəaliyyətlərdən zövq aldığınızı və hansı iş mühitinin sizə uyğun olduğunu göstərir.'}
					actions={
						r && !running ? (
							<>
								<ShareButton title="Karyera kodum" text={`Mənim karyera kodum: ${r.code}`} card={<RiasecShareCard />} />
								<button type="button" onClick={() => setRunning(true)} className="text-[14px] py-[10px] px-[22px] rounded-[25px] text-qss-inputText hover:text-qss-primary">
									Yenidən keç
								</button>
							</>
						) : undefined
					}
				/>
				{running ? (
					<LikertRunner testKey="riasec" questions={RIASEC_QUESTIONS} scale={RIASEC_SCALE} ends={['Xoşlamazdım', 'Xoşlayardım']} onFinish={finish} onCancel={r ? () => setRunning(false) : undefined} />
				) : r ? (
					<RiasecReport r={r} />
				) : (
					<div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
						<div className="rounded-2xl bg-white border border-qss-border shadow-sm p-7 flex flex-col gap-5">
							<div className="grid sm:grid-cols-2 gap-4">
								{RIASEC_ORDER.map(t => (
									<div key={t}>
										<p className="font-semibold text-qss-primary text-sm">
											{t} — {RIASEC_TYPES[t].name}
										</p>
										<p className="text-xs text-qss-inputText mt-0.5">{RIASEC_TYPES[t].short}</p>
									</div>
								))}
							</div>
							<button type="button" onClick={() => setRunning(true)} className="self-start text-[15px] text-white py-[12px] px-[30px] rounded-[25px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop">
								Testə başla · {RIASEC_QUESTIONS.length} fəaliyyət
							</button>
						</div>
						<div className="rounded-2xl bg-qss-transbg p-7 flex flex-col gap-3 text-sm text-qss-inputText leading-relaxed">
							<p className="font-semibold text-qss-primary text-base">Necə cavab verməli</p>
							<p>Hər fəaliyyəti nə qədər xoşlayacağınızı seçin — bacarıb-bacarmamağınızdan və ya qazancından asılı olmayaraq.</p>
							<p>Heç etmədiyiniz işləri də təsəvvür edin: “bunu bir gün etsəydim, xoşuma gələrdimi?”</p>
							<p>Təxminən 8 dəqiqə çəkir.</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export const RiasecReport = ({ r }: { r: RiasecResult }) => {
	const { user } = useAuth()
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, `RIASEC-${r.code}`)
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	const top = r.code.split('') as RiasecType[]
	const sorted = [...RIASEC_ORDER].sort((a, b) => r.scores[b] - r.scores[a])
	return (
		<div className="flex flex-col gap-4 items-start">
			<ExportBar onPrint={print} />
			<div ref={ref} className="w-full max-w-[960px] bg-white rounded-2xl shadow-sm overflow-hidden">
				<div className="bg-gradient-to-br from-qss-gradientTop via-qss-primary to-qss-alternative text-white px-10 py-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
					<div>
						<p className="text-white/70 text-xs tracking-[0.2em]">KARYERA MARAQLARI KODU</p>
						<p className="font-manrope text-7xl font-extrabold tracking-[0.12em] mt-2">{r.code}</p>
						<p className="font-manrope text-xl font-bold text-qss-gradientBottom mt-1">{top.map(t => RIASEC_TYPES[t].name).join(' · ')}</p>
						<p className="text-white/70 text-sm mt-3">
							{name} · {formatDate(r.date)}
						</p>
					</div>
					<RiasecHexagon scores={r.scores} size={260} light />
				</div>
				<div className="px-10 py-10 flex flex-col gap-12">
					<Section title="Maraq profiliniz">
						<div className="flex flex-col gap-3">
							{sorted.map(t => (
								<div key={t} className="grid grid-cols-[150px_1fr_48px] items-center gap-4">
									<span className="text-sm font-semibold text-qss-primary">{RIASEC_TYPES[t].name}</span>
									<div className="h-3 rounded-full bg-qss-base-400 overflow-hidden">
										<div className={`h-full rounded-full ${top.includes(t) ? 'bg-qss-secondary' : 'bg-qss-base-300'}`} style={{ width: `${r.scores[t]}%` }} />
									</div>
									<span className="text-sm tabular-nums text-qss-inputText text-right">{r.scores[t]}</span>
								</div>
							))}
						</div>
					</Section>
					{top.map((t, i) => {
						const p = RIASEC_TYPES[t]
						return (
							<Section key={t} title={`${i + 1}. ${p.name}`}>
								<p className="text-qss-inputText leading-relaxed">{p.description}</p>
								<p className="text-qss-inputText leading-relaxed">
									<b className="text-qss-primary">İş mühiti: </b>
									{p.workEnvironment}
								</p>
								<div className="rounded-xl bg-qss-transbg p-5">
									<p className="font-semibold text-qss-primary mb-3">Güclü tərəflər</p>
									<Bullets items={p.strengths} />
								</div>
								<p className="font-semibold text-qss-primary">Uyğun peşələr</p>
								<Chips items={p.careers} />
								<p className="font-semibold text-qss-primary">Uyğun ixtisaslar</p>
								<Chips items={p.majors} />
							</Section>
						)
					})}
					<div className="rounded-xl border border-qss-border p-6 flex flex-wrap items-center justify-between gap-4">
						<p className="text-qss-inputText">Kodunuz vakansiyalarla uyğunluğun hesablanmasında istifadə olunur.</p>
						<Link to="/profile/jobs" className="text-[14px] text-white py-[10px] px-[24px] rounded-[25px] bg-qss-secondary">
							Uyğun vakansiyalara bax
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RiasecTest
