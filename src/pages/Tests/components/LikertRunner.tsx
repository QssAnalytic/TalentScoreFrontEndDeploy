import { useEffect, useMemo, useRef, useState } from 'react'
import useAuth from 'hooks/useAuth'
import { clearProgress, loadResults, saveProgress } from 'tests/store'

export const SCALE = [
	{ value: 1, label: 'Qətiyyən razı deyiləm' },
	{ value: 2, label: 'Razı deyiləm' },
	{ value: 3, label: 'Neytral' },
	{ value: 4, label: 'Razıyam' },
	{ value: 5, label: 'Tamamilə razıyam' }
]

const sizes = ['w-11 h-11', 'w-9 h-9', 'w-7 h-7', 'w-9 h-9', 'w-11 h-11']
const tones = [
	'border-[#C2410C] peer-checked:bg-[#C2410C]',
	'border-[#C2410C] peer-checked:bg-[#C2410C]',
	'border-qss-base-300 peer-checked:bg-qss-base-300',
	'border-qss-secondary peer-checked:bg-qss-secondary',
	'border-qss-secondary peer-checked:bg-qss-secondary'
]

interface Props {
	testKey: string
	questions: { id: string; text: string }[]
	perPage?: number
	onFinish: (answers: Record<string, number>) => void
	onCancel?: () => void
	scale?: { value: number; label: string }[]
	ends?: [string, string]
}

const LikertRunner = ({ testKey, questions, perPage = 8, onFinish, onCancel, scale = SCALE, ends = ['Razı deyiləm', 'Razıyam'] }: Props) => {
	const { user } = useAuth()
	const saved = useMemo(() => loadResults(user?.email).progress?.[testKey], [])
	const [answers, setAnswers] = useState<Record<string, number>>(saved?.answers || {})
	const [page, setPage] = useState<number>(saved?.page || 0)
	const [showMissing, setShowMissing] = useState(false)
	const topRef = useRef<HTMLDivElement>(null)
	const pages = Math.ceil(questions.length / perPage)
	const slice = questions.slice(page * perPage, page * perPage + perPage)
	const answered = Object.keys(answers).length
	const missing = slice.filter(q => !answers[q.id])

	useEffect(() => {
		saveProgress(user?.email, testKey, { answers, page })
	}, [answers, page])

	useEffect(() => {
		topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}, [page])

	const next = () => {
		if (missing.length) {
			setShowMissing(true)
			document.getElementById(`q-${missing[0].id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
			return
		}
		setShowMissing(false)
		if (page < pages - 1) setPage(page + 1)
		else {
			clearProgress(user?.email, testKey)
			onFinish(answers)
		}
	}

	return (
		<div ref={topRef} className="flex flex-col gap-6 scroll-mt-6">
			<div className="sticky top-0 lg:top-0 z-10 bg-qss-background/95 backdrop-blur py-3">
				<div className="flex justify-between text-sm mb-2">
					<span className="font-semibold text-qss-primary">
						Səhifə {page + 1} / {pages}
					</span>
					<span className="text-qss-inputText tabular-nums">
						{answered} / {questions.length} cavablandı
					</span>
				</div>
				<div className="h-2 rounded-full bg-qss-base-400 overflow-hidden">
					<div className="h-full bg-qss-secondary rounded-full transition-all duration-300" style={{ width: `${(answered / questions.length) * 100}%` }} />
				</div>
			</div>

			<div className="hidden md:flex justify-between text-xs font-semibold px-6">
				<span className="text-[#C2410C]">{ends[0]}</span>
				<span className="text-qss-secondary">{ends[1]}</span>
			</div>

			<ol className="flex flex-col gap-4" start={page * perPage + 1}>
				{slice.map((q, i) => {
					const n = page * perPage + i + 1
					const isMissing = showMissing && !answers[q.id]
					return (
						<li
							key={q.id}
							id={`q-${q.id}`}
							className={`rounded-2xl bg-white border p-6 flex flex-col gap-5 transition-colors ${isMissing ? 'border-[#C2410C]' : answers[q.id] ? 'border-qss-base-400' : 'border-qss-border'}`}
						>
							<p className="text-qss-primary text-[17px] leading-relaxed text-center">
								<span className="text-qss-base-300 tabular-nums mr-2">{n}.</span>
								{q.text}
							</p>
							<fieldset className="flex items-center justify-center gap-3 sm:gap-6">
								<legend className="sr-only">{q.text}</legend>
								{scale.map((s, k) => (
									<label key={s.value} className="cursor-pointer grid place-items-center" title={s.label}>
										<input
											type="radio"
											name={q.id}
											value={s.value}
											checked={answers[q.id] === s.value}
											onChange={() => setAnswers(a => ({ ...a, [q.id]: s.value }))}
											className="peer sr-only"
										/>
										<span className={`${sizes[k]} rounded-full border-2 ${tones[k]} transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-qss-primary hover:scale-110`} />
										<span className="sr-only">{s.label}</span>
									</label>
								))}
							</fieldset>
							{isMissing && <p className="text-xs text-[#C2410C] text-center">Bu ifadəyə cavab seçin.</p>}
						</li>
					)
				})}
			</ol>

			<div className="flex items-center justify-between gap-4 pb-10">
				{page > 0 ? (
					<button type="button" onClick={() => setPage(page - 1)} className="text-[14px] py-[11px] px-[26px] rounded-[25px] border border-qss-secondary text-qss-secondary">
						Geri
					</button>
				) : onCancel ? (
					<button type="button" onClick={onCancel} className="text-[14px] py-[11px] px-[26px] rounded-[25px] text-qss-inputText">
						Ləğv et
					</button>
				) : (
					<span />
				)}
				<button type="button" onClick={next} className="text-[15px] text-white py-[12px] px-[34px] rounded-[25px] bg-qss-secondary hover:bg-qss-alternative transition-colors">
					{page < pages - 1 ? 'Növbəti' : 'Nəticəni göstər'}
				</button>
			</div>
		</div>
	)
}

export default LikertRunner
