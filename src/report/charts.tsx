// CDS-ES chart primitives. Inline styles where colours are data-driven, so prints
// and html2canvas exports look exactly like the screen.
import { ReactNode } from 'react'
import { CDS, LEVELS, levelOf, ramp, letter } from './design'

// Segmented bar: 11 cells, light to dark, filled up to the value.
export const SegBar = ({ value, color, cells = 11, height = 14 }: { value: number; color: string; cells?: number; height?: number }) => {
	const shades = ramp(color, cells)
	const filled = (Math.max(0, Math.min(100, value)) / 100) * cells
	return (
		<div className="flex gap-[5px] w-full" role="img" aria-label={`${Math.round(value)}%`}>
			{shades.map((c, i) => {
				const part = Math.max(0, Math.min(1, filled - i))
				return (
					<span key={i} className="flex-1 rounded-[4px] overflow-hidden" style={{ height, background: '#EFEFEF' }}>
						<span className="block h-full rounded-[4px]" style={{ width: `${part * 100}%`, background: c }} />
					</span>
				)
			})}
		</div>
	)
}

// Plain rounded bar (the "Soft Skills Report" bars).
export const SolidBar = ({ value, color, height = 14 }: { value: number; color: string; height?: number }) => (
	<div className="w-full rounded-full" style={{ height, background: '#EDEFEF' }}>
		<div className="h-full rounded-full" style={{ width: `${Math.max(2, Math.min(100, value))}%`, background: color }} />
	</div>
)

// Labelled list of solid bars with a multi-colour "Average" row, as on the CDS-ES summary.
export const BarBoard = ({ rows, average, averageLabel = 'Orta göstərici' }: { rows: { label: string; value: number; color: string; display?: string }[]; average?: number; averageLabel?: string }) => (
	<div className="flex flex-col gap-4">
		{rows.map(r => (
			<div key={r.label} className="grid grid-cols-[minmax(96px,170px)_1fr_56px] items-center gap-4">
				<span className="text-right text-[15px] text-cds-ink">{r.label}</span>
				<SolidBar value={r.value} color={r.color} />
				<span className="text-[15px] tabular-nums text-cds-ink">{r.display ?? Math.round(r.value)}</span>
			</div>
		))}
		{average != null && (
			<div className="grid grid-cols-[minmax(96px,170px)_1fr_56px] items-center gap-4 pt-2">
				<span className="text-right text-lg font-bold text-cds-ink">{averageLabel}</span>
				<div className="flex gap-1.5 rounded-lg border border-cds-line bg-white p-1.5">
					{rows.map(r => (
						<span key={r.label} className="flex-1 h-3 rounded" style={{ background: r.color }} />
					))}
				</div>
				<span className="text-lg font-bold tabular-nums text-cds-ink">{average.toFixed(1)}</span>
			</div>
		)}
	</div>
)

// Coloured score tiles (cover page "Test results").
export const ScoreTiles = ({ items }: { items: { label: string; value: string | number; color: string }[] }) => (
	<div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 6)}, minmax(0, 1fr))` }}>
		{items.map(t => (
			<div key={t.label} className="flex flex-col gap-2 min-w-0">
				<span className="text-[15px] text-cds-ink truncate">{t.label}</span>
				<span className="rounded-md py-2 text-center text-white text-lg tabular-nums" style={{ background: t.color }}>
					{t.value}
				</span>
			</div>
		))}
	</div>
)

// Overall ring with the arrow, as on the CDS-ES cover.
export const OverallRing = ({ value, label = 'Ümumi', size = 220, max = 100, display }: { value: number; label?: string; size?: number; max?: number; display?: string }) => {
	const r = size * 0.36
	const c = size / 2
	const len = 2 * Math.PI * r
	const pct = Math.max(0, Math.min(1, value / max))
	const id = `ring-${Math.round(value * 100)}-${size}`
	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${label} ${display ?? value}`}>
			<defs>
				<linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
					<stop offset="0%" stopColor="#1F7A3A" />
					<stop offset="100%" stopColor="#24427A" />
				</linearGradient>
			</defs>
			<circle cx={c} cy={c} r={size * 0.46} fill="none" stroke="#F0F0F0" strokeWidth="1.5" />
			<circle cx={c} cy={c} r={size * 0.27} fill="none" stroke="#F0F0F0" strokeWidth="1.5" />
			<circle cx={c} cy={c} r={r} fill="none" stroke="#EEF1F1" strokeWidth={size * 0.045} />
			<circle
				cx={c}
				cy={c}
				r={r}
				fill="none"
				stroke={`url(#${id})`}
				strokeWidth={size * 0.045}
				strokeLinecap="round"
				strokeDasharray={`${len * pct * 0.94} ${len}`}
				transform={`rotate(-80 ${c} ${c})`}
			/>
			<text x={c} y={c - size * 0.05} textAnchor="middle" fontSize={size * 0.085} fill="#1B2A6B">
				{label}
			</text>
			<text x={c} y={c + size * 0.1} textAnchor="middle" fontSize={size * 0.17} fontWeight="700" fill="#1B2A6B">
				{display ?? value}
			</text>
		</svg>
	)
}

// Vertical proficiency ladder with a marker at the person's level.
export const Ladder = ({ score, color = CDS.teal, labels }: { score: number; color?: string; labels?: string[] }) => {
	const lv = levelOf(score)
	const names = labels || LEVELS.map(l => l.name)
	return (
		<div className="flex flex-col gap-1.5 min-w-[150px]" aria-label={`Səviyyə: ${LEVELS.find(l => l.id === lv)?.name}`}>
			{LEVELS.map((l, i) => {
				const on = l.id === lv
				return (
					<div key={l.id} className="flex items-center gap-2">
						<span className="w-3 h-3 rounded-full border-2" style={{ borderColor: color, background: on ? color : 'transparent' }} />
						<span className={`text-[13px] ${on ? 'font-bold' : 'text-cds-muted'}`} style={on ? { color } : undefined}>
							{names[i]}
						</span>
						{on && (
							<span className="ml-auto text-[13px] font-bold tabular-nums rounded px-1.5" style={{ background: color, color: '#fff' }}>
								{Math.round(score)}
							</span>
						)}
					</div>
				)
			})}
		</div>
	)
}

// Transcript-style table: subject, score, letter grade, visual grade on a 50–100 scale.
export const GradeTable = ({ rows }: { rows: { label: string; value: number; color: string }[] }) => (
	<table className="w-full text-[14px] border-collapse">
		<thead>
			<tr className="text-left text-white" style={{ background: CDS.gradient }}>
				<th className="py-2.5 px-3 font-semibold">Sahə</th>
				<th className="py-2.5 px-3 font-semibold w-24">Bal</th>
				<th className="py-2.5 px-3 font-semibold w-24">Qiymət</th>
				<th className="py-2.5 px-3 font-semibold">Vizual qiymət</th>
			</tr>
		</thead>
		<tbody>
			{rows.map((r, i) => (
				<tr key={r.label} className={i % 2 ? 'bg-cds-paper' : 'bg-white'}>
					<td className="py-2.5 px-3 text-cds-ink">{r.label}</td>
					<td className="py-2.5 px-3 tabular-nums font-semibold text-cds-ink">{Math.round(r.value)}</td>
					<td className="py-2.5 px-3">
						<span className="inline-grid place-items-center w-8 h-8 rounded-full text-white font-bold" style={{ background: r.color }}>
							{letter(r.value)}
						</span>
					</td>
					<td className="py-2.5 px-3">
						<div className="relative">
							<SolidBar value={Math.max(0, (r.value - 0) * 1)} color={r.color} height={10} />
						</div>
					</td>
				</tr>
			))}
		</tbody>
	</table>
)

// Gradient section band (the teal header strips).
export const Band = ({ children, right }: { children: ReactNode; right?: ReactNode }) => (
	<div className="flex items-center justify-between gap-4 px-7 py-5 text-white rounded-t-md" style={{ background: CDS.gradient }}>
		<h2 className="text-[22px] font-medium">{children}</h2>
		{right}
	</div>
)

// One dimension block: "Education - 92" + segmented bar + % + text.
export const Dimension = ({ title, value, color, children, display }: { title: string; value: number; color: string; children?: ReactNode; display?: string }) => (
	<section className="flex flex-col gap-2 break-inside-avoid">
		<div className="grid grid-cols-[1fr_minmax(160px,45%)_64px] items-center gap-4">
			<h3 className="text-[19px] font-bold text-cds-ink">
				{title} - {display ?? Math.round(value)}
			</h3>
			<SegBar value={value} color={color} />
			<span className="text-[19px] font-bold tabular-nums text-cds-ink text-right">{Math.round(value)}%</span>
		</div>
		{children && <div className="text-[15px] leading-relaxed text-cds-muted text-justify">{children}</div>}
	</section>
)

// Horizontal 0–100 scale with ticks (used next to ladders).
export const Scale = ({ value, color }: { value: number; color: string }) => (
	<div className="w-full">
		<div className="relative h-3 rounded-full" style={{ background: '#EEF1F1' }}>
			<div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${value}%`, background: color }} />
			<div className="absolute -top-1.5 w-1 h-6 rounded bg-cds-ink" style={{ left: `calc(${value}% - 2px)` }} />
		</div>
		<div className="flex justify-between text-[11px] text-cds-muted mt-1 tabular-nums">
			{[0, 25, 50, 75, 100].map(t => (
				<span key={t}>{t}</span>
			))}
		</div>
	</div>
)

export { letter }
