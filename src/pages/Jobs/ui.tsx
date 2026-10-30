import { ReactNode, useEffect, useState } from 'react'
import { matchTone } from 'jobs/match'
import { azn } from 'jobs/store'
import { CheckoutItem } from 'jobs/billing'

export const btnPrimary = 'inline-flex items-center justify-center gap-2 text-[14px] text-white py-[10px] px-[22px] rounded-[25px] bg-qss-secondary hover:bg-qss-alternative transition-colors disabled:opacity-50'
export const btnGhost = 'inline-flex items-center justify-center gap-2 text-[14px] py-[10px] px-[22px] rounded-[25px] border border-qss-secondary text-qss-secondary hover:bg-qss-transbg transition-colors'
export const btnText = 'text-[14px] text-qss-inputText hover:text-qss-primary underline-offset-4 hover:underline'
export const card = 'rounded-2xl bg-white border border-qss-border shadow-sm'

export const Page = ({ eyebrow, title, subtitle, actions, children, wide = true }: { eyebrow: string; title: string; subtitle?: ReactNode; actions?: ReactNode; children: ReactNode; wide?: boolean }) => (
	<div className="px-5 py-8 lg:px-12 lg:py-10">
		<div className={`${wide ? 'max-w-[1180px]' : 'max-w-[900px]'} mx-auto flex flex-col gap-7`}>
			<header className="flex flex-wrap items-end justify-between gap-4">
				<div className="flex flex-col gap-2 max-w-3xl">
					<p className="text-xs font-semibold uppercase tracking-[0.14em] text-qss-secondary">{eyebrow}</p>
					<h1 className="font-manrope font-bold text-qss-primary leading-tight text-3xl">{title}</h1>
					{subtitle && <div className="text-qss-inputText leading-relaxed">{subtitle}</div>}
				</div>
				{actions && <div className="flex flex-wrap gap-3">{actions}</div>}
			</header>
			{children}
		</div>
	</div>
)

export const MatchRing = ({ value, size = 56 }: { value: number; size?: number }) => {
	const r = size / 2 - 5
	const len = 2 * Math.PI * r
	const color = value >= 75 ? '#038477' : value >= 60 ? '#D69E2E' : '#9AA8B4'
	return (
		<div className="relative shrink-0" style={{ width: size, height: size }} aria-label={`Uyğunluq ${value}%`}>
			<svg width={size} height={size} className="-rotate-90">
				<circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E6EEF0" strokeWidth="5" />
				<circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={`${(len * value) / 100} ${len}`} />
			</svg>
			<span className={`absolute inset-0 grid place-items-center font-manrope font-bold tabular-nums ${matchTone(value)}`} style={{ fontSize: size * 0.27 }}>
				{value}%
			</span>
		</div>
	)
}

export const Tag = ({ children, tone = 'gray' }: { children: ReactNode; tone?: 'gray' | 'teal' | 'amber' | 'blue' | 'violet' }) => {
	const t = {
		gray: 'bg-qss-base-400/60 text-qss-inputText',
		teal: 'bg-qss-transbg text-qss-alternative',
		amber: 'bg-[#FFF4E0] text-[#8A5300]',
		blue: 'bg-[#E8F0FB] text-[#1F4E8C]',
		violet: 'bg-[#EDE7FB] text-[#5B3BB5]'
	}[tone]
	return <span className={`inline-flex items-center gap-1 text-[12px] font-semibold rounded-full px-2.5 py-1 whitespace-nowrap ${t}`}>{children}</span>
}

export const SourceTag = ({ job }: { job: { sample: boolean; source: string } }) =>
	job.sample ? (
		<Tag tone="amber">Nümunə</Tag>
	) : (
		<Tag tone="blue">
			Real · {job.source}
		</Tag>
	)

export const Stat = ({ label, value, sub, tone }: { label: string; value: ReactNode; sub?: string; tone?: string }) => (
	<div className={`${card} p-5 flex flex-col gap-1`}>
		<span className="text-[13px] text-qss-inputText">{label}</span>
		<span className={`font-manrope text-3xl font-bold tabular-nums ${tone || 'text-qss-primary'}`}>{value}</span>
		{sub && <span className="text-xs text-qss-base-300">{sub}</span>}
	</div>
)

export const CopyBox = ({ text, label = 'Mətni kopyala' }: { text: string; label?: string }) => {
	const [copied, setCopied] = useState(false)
	return (
		<div className="flex flex-col gap-2">
			<pre className="whitespace-pre-wrap font-sans text-[14px] leading-relaxed text-qss-primary bg-qss-background rounded-xl p-4 border border-qss-border max-h-[340px] overflow-auto">{text}</pre>
			<button
				type="button"
				className={`${btnGhost} self-start`}
				onClick={() => {
					navigator.clipboard?.writeText(text).then(
						() => {
							setCopied(true)
							setTimeout(() => setCopied(false), 1800)
						},
						() => {}
					)
				}}
			>
				{copied ? 'Kopyalandı ✓' : label}
			</button>
		</div>
	)
}

export const Empty = ({ title, text, action }: { title: string; text: string; action?: ReactNode }) => (
	<div className={`${card} p-8 flex flex-col gap-3 items-start`}>
		<p className="font-manrope text-lg font-semibold text-qss-primary">{title}</p>
		<p className="text-qss-inputText max-w-2xl">{text}</p>
		{action}
	</div>
)

export const TestModeNote = () => (
	<p className="text-xs text-[#8A5300] bg-[#FFF4E0] rounded-xl px-4 py-3 leading-relaxed">
		<b>Test rejimi:</b> ödəniş sistemi hələ bank/ödəniş provayderinə qoşulmayıb. Ödəniş forması necə işləyəcəyini göstərir — kartdan pul tutulmur.
	</p>
)

// Test-mode checkout: looks and behaves like the real flow, charges nothing.
export const Checkout = ({ item, onClose, onPaid }: { item: CheckoutItem; onClose: () => void; onPaid: (card: string) => void }) => {
	const [cardNo, setCardNo] = useState('4242 4242 4242 4242')
	const [exp, setExp] = useState('12/28')
	const [cvc, setCvc] = useState('123')
	const [holder, setHolder] = useState('')
	const [stage, setStage] = useState<'form' | 'paying' | 'done'>('form')
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && stage !== 'paying' && onClose()
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [stage])
	const valid = cardNo.replace(/\D/g, '').length >= 15 && /^\d{2}\/\d{2}$/.test(exp) && cvc.length >= 3
	const pay = (e: React.FormEvent) => {
		e.preventDefault()
		if (!valid) return
		setStage('paying')
		setTimeout(() => {
			onPaid(cardNo)
			setStage('done')
		}, 1300)
	}
	const field = 'bg-qss-input rounded-[14px] px-4 py-3 outline-none text-qss-primary focus:ring-2 focus:ring-qss-secondary/40'
	return (
		<div className="fixed inset-0 z-50 bg-black/45 grid place-items-center p-4" role="dialog" aria-modal="true" aria-label="Ödəniş">
			<div className="w-full max-w-[460px] bg-white rounded-2xl shadow-xl overflow-hidden">
				<div className="bg-qss-primary text-white px-6 py-5 flex items-start justify-between gap-4">
					<div>
						<p className="text-white/60 text-xs uppercase tracking-[0.14em]">Ödəniş</p>
						<p className="font-manrope text-lg font-semibold mt-1">{item.label}</p>
					</div>
					<p className="font-manrope text-2xl font-bold tabular-nums">{azn(item.amount)}</p>
				</div>
				{stage === 'done' ? (
					<div className="p-6 flex flex-col gap-4 items-start">
						<p className="font-manrope text-xl font-semibold text-qss-secondary">Ödəniş uğurla tamamlandı ✓</p>
						<p className="text-qss-inputText text-sm">Test rejimində qeydə alındı. Qəbz “Planlar və ödənişlər” səhifəsindədir.</p>
						<button type="button" className={btnPrimary} onClick={onClose}>
							Davam et
						</button>
					</div>
				) : (
					<form onSubmit={pay} className="p-6 flex flex-col gap-4">
						<TestModeNote />
						<label className="flex flex-col gap-1.5 text-sm text-qss-inputText">
							Kart nömrəsi
							<input className={field} inputMode="numeric" value={cardNo} onChange={e => setCardNo(e.target.value)} autoComplete="off" />
						</label>
						<div className="grid grid-cols-2 gap-3">
							<label className="flex flex-col gap-1.5 text-sm text-qss-inputText">
								Bitmə tarixi
								<input className={field} value={exp} onChange={e => setExp(e.target.value)} placeholder="AA/İİ" autoComplete="off" />
							</label>
							<label className="flex flex-col gap-1.5 text-sm text-qss-inputText">
								CVC
								<input className={field} inputMode="numeric" value={cvc} onChange={e => setCvc(e.target.value.slice(0, 4))} autoComplete="off" />
							</label>
						</div>
						<label className="flex flex-col gap-1.5 text-sm text-qss-inputText">
							Kart sahibinin adı
							<input className={field} value={holder} onChange={e => setHolder(e.target.value)} autoComplete="off" />
						</label>
						<div className="flex items-center justify-between gap-3 pt-2">
							<button type="button" className={btnText} onClick={onClose} disabled={stage === 'paying'}>
								Ləğv et
							</button>
							<button type="submit" className={btnPrimary} disabled={!valid || stage === 'paying'}>
								{stage === 'paying' ? 'Ödənilir…' : `${azn(item.amount)} ödə`}
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	)
}
