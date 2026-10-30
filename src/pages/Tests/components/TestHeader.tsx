import { ReactNode } from 'react'

interface Props {
	number?: number
	eyebrow?: string
	title: string
	subtitle?: string
	compact?: boolean
	actions?: ReactNode
}

const TestHeader = ({ number, eyebrow, title, subtitle, compact, actions }: Props) => (
	<header className="flex flex-wrap items-end justify-between gap-4">
		<div className="flex flex-col gap-2 max-w-3xl">
			<p className="text-xs font-semibold uppercase tracking-[0.14em] text-qss-secondary">{eyebrow || (number ? `Test ${number}` : '')}</p>
			<h1 className={`font-manrope font-bold text-qss-primary leading-tight ${compact ? 'text-2xl' : 'text-3xl'}`} style={{ textWrap: 'balance' } as any}>
				{title}
			</h1>
			{subtitle && <p className="text-qss-inputText leading-relaxed">{subtitle}</p>}
		</div>
		{actions && <div className="flex flex-wrap gap-3">{actions}</div>}
	</header>
)

export default TestHeader
