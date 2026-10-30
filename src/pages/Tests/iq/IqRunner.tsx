import { useEffect, useMemo, useRef, useState } from 'react'
import useAuth from 'hooks/useAuth'
import { IqItem } from 'tests/types'
import { clearProgress, loadResults, saveProgress } from 'tests/store'
import { DOMAIN_LABEL } from 'tests/iq/scoring'
import { IconClock } from 'components/AppShell/icons'

interface Props {
	items: IqItem[]
	limitMin: number
	onFinish: (answers: Record<string, string>, seconds: number) => void
}

interface Progress {
	startedAt: number
	index: number
	answers: Record<string, string>
	seen: Record<string, boolean> // memory items whose content was already shown
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.max(0, s % 60)).padStart(2, '0')}`

// The item figures are static SVG strings from tests/iq — our own data, not user input.
const Svg = ({ markup, className }: { markup: string; className?: string }) => <span className={`inline-block [&>svg]:max-w-full [&>svg]:h-auto ${className || ''}`} dangerouslySetInnerHTML={{ __html: markup }} />

const IqRunner = ({ items, limitMin, onFinish }: Props) => {
	const { user } = useAuth()
	const saved: Progress | undefined = useMemo(() => loadResults(user?.email).progress?.iq, [])
	const [p, setP] = useState<Progress>(saved || { startedAt: Date.now(), index: 0, answers: {}, seen: {} })
	const [now, setNow] = useState(Date.now())
	const [memoLeft, setMemoLeft] = useState<number | null>(null)
	const [confirmEnd, setConfirmEnd] = useState(false)
	const finished = useRef(false)

	const item = items[p.index]
	const elapsed = Math.floor((now - p.startedAt) / 1000)
	const remaining = limitMin * 60 - elapsed
	const answeredCount = Object.keys(p.answers).length

	const finish = () => {
		if (finished.current) return
		finished.current = true
		clearProgress(user?.email, 'iq')
		onFinish(p.answers, Math.min(elapsed, limitMin * 60))
	}

	useEffect(() => {
		const t = setInterval(() => setNow(Date.now()), 1000)
		return () => clearInterval(t)
	}, [])

	useEffect(() => {
		if (remaining <= 0) finish()
	}, [remaining])

	useEffect(() => {
		saveProgress(user?.email, 'iq', p)
	}, [p])

	// Memory items: show the content once, count down, then hide it for good.
	useEffect(() => {
		if (!item?.memorize || p.seen[item.id]) {
			setMemoLeft(null)
			return
		}
		setMemoLeft(item.memorize.seconds)
		const t = setInterval(() => {
			setMemoLeft(s => {
				if (s === null) return s
				if (s <= 1) {
					clearInterval(t)
					setP(prev => ({ ...prev, seen: { ...prev.seen, [item.id]: true } }))
					return null
				}
				return s - 1
			})
		}, 1000)
		return () => clearInterval(t)
	}, [item?.id])

	const choose = (opt: string) => setP(prev => ({ ...prev, answers: { ...prev.answers, [item.id]: opt } }))
	const go = (i: number) => setP(prev => ({ ...prev, index: Math.max(0, Math.min(items.length - 1, i)) }))
	const visual = item.options.some(o => o.figure)
	const memorizing = memoLeft !== null

	return (
		<div className="flex flex-col gap-6">
			<div className="sticky top-0 z-10 bg-qss-background/95 backdrop-blur py-3 flex flex-wrap items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<span className="text-sm font-semibold text-qss-primary tabular-nums">
						Sual {p.index + 1} / {items.length}
					</span>
					<span className="text-xs rounded-full px-3 py-1 bg-qss-transbg text-qss-alternative">{DOMAIN_LABEL[item.domain]}</span>
				</div>
				<span className={`flex items-center gap-2 text-sm font-semibold tabular-nums rounded-full px-4 py-1.5 ${remaining < 300 ? 'bg-[#FDECEC] text-[#9B1C1C]' : 'bg-white text-qss-primary border border-qss-border'}`} aria-live="polite">
					<IconClock /> {fmt(remaining)}
				</span>
			</div>

			<div className="rounded-2xl bg-white border border-qss-border shadow-sm p-6 md:p-8 flex flex-col gap-6 min-h-[420px]">
				{memorizing ? (
					<div className="flex flex-col items-center gap-6 py-10">
						<p className="text-sm font-semibold uppercase tracking-[0.12em] text-qss-secondary">Yadda saxlayın — {memoLeft} san</p>
						{item.memorize!.content.trim().startsWith('<svg') ? (
							<Svg markup={item.memorize!.content} />
						) : (
							<p className="font-manrope text-3xl md:text-4xl font-bold text-qss-primary tracking-[0.15em] text-center leading-relaxed">{item.memorize!.content}</p>
						)}
						<div className="w-64 h-1.5 rounded-full bg-qss-base-400 overflow-hidden">
							<div className="h-full bg-qss-secondary transition-all duration-1000 ease-linear" style={{ width: `${((memoLeft || 0) / item.memorize!.seconds) * 100}%` }} />
						</div>
					</div>
				) : (
					<>
						<p className="text-qss-primary text-lg leading-relaxed whitespace-pre-line">{item.prompt}</p>
						{item.figure && (
							<div className="flex justify-center">
								<Svg markup={item.figure} className="w-full max-w-[520px] text-center" />
							</div>
						)}
						<div role="radiogroup" aria-label="Cavab variantları" className={`grid gap-3 ${visual ? 'grid-cols-3 sm:grid-cols-3 md:grid-cols-6' : 'sm:grid-cols-2'}`}>
							{item.options.map(o => {
								const sel = p.answers[item.id] === o.id
								return (
									<button
										key={o.id}
										type="button"
										role="radio"
										aria-checked={sel}
										onClick={() => choose(o.id)}
										className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors ${visual ? 'flex-col justify-center' : ''} ${sel ? 'border-qss-secondary bg-qss-transbg' : 'border-qss-border hover:border-qss-base-300'}`}
									>
										<span className={`w-7 h-7 shrink-0 rounded-full grid place-items-center text-sm font-bold uppercase ${sel ? 'bg-qss-secondary text-white' : 'bg-qss-input text-qss-primary'}`}>{o.id}</span>
										{o.figure ? <Svg markup={o.figure} className="w-[84px]" /> : <span className="text-qss-primary">{o.label}</span>}
									</button>
								)
							})}
						</div>
					</>
				)}
			</div>

			<div className="flex flex-wrap items-center justify-between gap-4">
				<button type="button" onClick={() => go(p.index - 1)} disabled={p.index === 0 || memorizing} className="text-[14px] py-[11px] px-[26px] rounded-[25px] border border-qss-secondary text-qss-secondary disabled:opacity-40">
					Əvvəlki
				</button>
				<div className="flex gap-3">
					<button type="button" onClick={() => setConfirmEnd(true)} disabled={memorizing} className="text-[14px] py-[11px] px-[22px] rounded-[25px] text-qss-inputText hover:text-qss-primary disabled:opacity-40">
						Testi bitir
					</button>
					{p.index < items.length - 1 ? (
						<button type="button" onClick={() => go(p.index + 1)} disabled={memorizing} className="text-[15px] text-white py-[11px] px-[32px] rounded-[25px] bg-qss-secondary hover:bg-qss-alternative disabled:opacity-40">
							{p.answers[item.id] ? 'Növbəti' : 'Keç'}
						</button>
					) : (
						<button type="button" onClick={() => setConfirmEnd(true)} className="text-[15px] text-white py-[11px] px-[32px] rounded-[25px] bg-qss-secondary hover:bg-qss-alternative">
							Bitir və nəticəni gör
						</button>
					)}
				</div>
			</div>

			{confirmEnd && (
				<div className="rounded-2xl border-2 border-qss-secondary bg-white p-6 flex flex-wrap items-center justify-between gap-4">
					<p className="text-qss-primary">
						{answeredCount < items.length ? `${items.length - answeredCount} sual cavabsız qalıb. Cavabsız suallar səhv sayılır.` : 'Bütün suallar cavablandı.'} Testi bitirmək istəyirsiniz?
					</p>
					<div className="flex gap-3">
						<button type="button" onClick={() => setConfirmEnd(false)} className="text-[14px] py-[9px] px-[22px] rounded-[25px] border border-qss-border text-qss-primary">
							Davam et
						</button>
						<button type="button" onClick={finish} className="text-[14px] py-[9px] px-[22px] rounded-[25px] bg-qss-secondary text-white">
							Bəli, bitir
						</button>
					</div>
				</div>
			)}

			<nav aria-label="Suallar" className="rounded-2xl bg-white border border-qss-border p-4">
				<p className="text-xs text-qss-inputText mb-3">
					Cavablandı: <b className="tabular-nums">{answeredCount}</b> / {items.length}. İstənilən suala qayıda bilərsiniz (yaddaş tapşırıqlarının məzmunu yalnız bir dəfə göstərilir).
				</p>
				<div className="grid grid-cols-12 gap-1.5">
					{items.map((it, i) => (
						<button
							key={it.id}
							type="button"
							onClick={() => !memorizing && go(i)}
							aria-label={`Sual ${i + 1}`}
							aria-current={i === p.index ? 'step' : undefined}
							className={`h-8 rounded-md text-xs tabular-nums ${i === p.index ? 'bg-qss-primary text-white' : p.answers[it.id] ? 'bg-qss-secondary/80 text-white' : 'bg-qss-input text-qss-inputText hover:bg-qss-base-400'}`}
						>
							{i + 1}
						</button>
					))}
				</div>
			</nav>
		</div>
	)
}

export default IqRunner
