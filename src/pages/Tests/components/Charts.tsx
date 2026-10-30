import { IQ_BANDS } from 'tests/iq/scoring'

// Semicircle gauge on the IQ scale 55–145, coloured by band like the free report's percentile gauges.
export const IqGauge = ({ value, size = 280 }: { value: number; size?: number }) => {
	const min = 55
	const max = 145
	const cx = 150
	const cy = 150
	const r = 120
	const ang = (v: number) => Math.PI * (1 - (Math.max(min, Math.min(max, v)) - min) / (max - min))
	const pt = (v: number, rad = r) => [cx + rad * Math.cos(ang(v)), cy - rad * Math.sin(ang(v))]
	const arc = (a: number, b: number) => {
		const [x1, y1] = pt(a)
		const [x2, y2] = pt(b)
		return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`
	}
	const [nx, ny] = pt(value, r - 30)
	const ticks = [55, 70, 85, 100, 115, 130, 145]
	return (
		<svg viewBox="0 0 300 180" width={size} height={(size * 180) / 300} role="img" aria-label={`IQ ${value}`}>
			{IQ_BANDS.map(bd => (
				<path key={bd.label} d={arc(Math.max(min, bd.min), Math.min(max, bd.max + 1))} stroke={bd.color} strokeWidth="16" fill="none" />
			))}
			{ticks.map(t => {
				const [x, y] = pt(t, r + 18)
				return (
					<text key={t} x={x} y={y} fontSize="10" textAnchor="middle" dominantBaseline="middle" fill="#5B6B79">
						{t}
					</text>
				)
			})}
			<line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#103557" strokeWidth="4" strokeLinecap="round" />
			<circle cx={cx} cy={cy} r="8" fill="#103557" />
			<text x={cx} y={cy - 38} fontSize="40" fontWeight="800" textAnchor="middle" fill="#103557" fontFamily="Manrope, sans-serif">
				{value}
			</text>
		</svg>
	)
}

// Normal distribution (mean 100, SD 15) with the area below the score shaded.
export const BellCurve = ({ value, width = 520 }: { value: number; width?: number }) => {
	const W = 520
	const H = 170
	const pad = 20
	const x = (iq: number) => pad + ((iq - 55) / 90) * (W - 2 * pad)
	const y = (iq: number) => H - 30 - Math.exp(-0.5 * ((iq - 100) / 15) ** 2) * (H - 50)
	const pts: string[] = []
	for (let iq = 55; iq <= 145; iq += 1) pts.push(`${x(iq)},${y(iq)}`)
	const shade: string[] = [`${x(55)},${H - 30}`]
	for (let iq = 55; iq <= Math.min(145, value); iq += 1) shade.push(`${x(iq)},${y(iq)}`)
	shade.push(`${x(Math.min(145, value))},${H - 30}`)
	return (
		<svg viewBox={`0 0 ${W} ${H}`} width={width} height={(width * H) / W} role="img" aria-label="Normal paylanma əyrisi üzərində nəticə">
			<polygon points={shade.join(' ')} fill="#08D0B0" opacity="0.25" />
			<polyline points={pts.join(' ')} fill="none" stroke="#103557" strokeWidth="2.5" />
			<line x1={pad} x2={W - pad} y1={H - 30} y2={H - 30} stroke="#ADADAD" />
			{[70, 85, 100, 115, 130].map(t => (
				<g key={t}>
					<line x1={x(t)} x2={x(t)} y1={H - 30} y2={H - 25} stroke="#ADADAD" />
					<text x={x(t)} y={H - 12} fontSize="11" textAnchor="middle" fill="#5B6B79">
						{t}
					</text>
				</g>
			))}
			<line x1={x(value)} x2={x(value)} y1={y(value) - 12} y2={H - 30} stroke="#038477" strokeWidth="2.5" strokeDasharray="4 3" />
			<circle cx={x(value)} cy={y(value)} r="6" fill="#038477" />
			<text x={x(value)} y={Math.max(12, y(value) - 18)} fontSize="12" fontWeight="700" textAnchor="middle" fill="#038477">
				Siz · {value}
			</text>
		</svg>
	)
}

export const ScoreBar = ({ label, value, max = 100, display, sub }: { label: string; value: number; max?: number; display?: string; sub?: string }) => (
	<div className="flex flex-col gap-1.5">
		<div className="flex justify-between gap-4 text-sm">
			<span className="text-qss-primary font-semibold">{label}</span>
			<span className="font-bold text-qss-primary tabular-nums">{display ?? value}</span>
		</div>
		<div className="h-2.5 rounded-full bg-qss-base-400 overflow-hidden">
			<div className="h-full rounded-full bg-gradient-to-r from-qss-secondary to-qss-gradientBottom" style={{ width: `${Math.max(2, Math.min(100, (value / max) * 100))}%` }} />
		</div>
		{sub && <span className="text-xs text-qss-inputText">{sub}</span>}
	</div>
)

// Two-sided bar for MBTI axes: the side the person leans to fills from the centre.
export const AxisBar = ({ left, right, leftLabel, rightLabel, pole, percent }: { left: string; right: string; leftLabel: string; rightLabel: string; pole: string; percent: number }) => {
	const toLeft = pole === left
	const share = toLeft ? percent : 100 - percent
	return (
		<div className="flex flex-col gap-1.5">
			<div className="flex justify-between text-sm">
				<span className={toLeft ? 'font-bold text-qss-primary' : 'text-qss-inputText'}>
					{leftLabel} ({left}) {toLeft && <span className="tabular-nums">· {percent}%</span>}
				</span>
				<span className={!toLeft ? 'font-bold text-qss-primary' : 'text-qss-inputText'}>
					{!toLeft && <span className="tabular-nums">{percent}% · </span>}
					{rightLabel} ({right})
				</span>
			</div>
			<div className="relative h-3 rounded-full bg-qss-base-400 overflow-hidden">
				<div className="absolute top-0 bottom-0 bg-qss-secondary" style={toLeft ? { right: '50%', width: `${share - 50}%` } : { left: '50%', width: `${50 - share}%` }} />
				<div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white" />
			</div>
		</div>
	)
}
