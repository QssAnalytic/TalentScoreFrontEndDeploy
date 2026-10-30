import { useRef, useState } from 'react'
import useAuth from 'hooks/useAuth'
import { BIG5_DOMAINS, BIG5_ORDER, BIG5_QUESTIONS } from 'tests/big5/data'
import { big5Level, levelWord, scoreBig5 } from 'tests/big5/scoring'
import { Big5Result, formatDate, saveResults, useResults } from 'tests/store'
import TestHeader from '../components/TestHeader'
import LikertRunner from '../components/LikertRunner'
import { useExport } from '../components/useExport'
import { ExportBar } from '../iq/IqTest'
import { Bullets, Section } from '../mbti/MbtiTest'
import ShareButton from 'share/ShareButton'
import { Big5ShareCard } from 'share/cards'

const Big5Test = () => {
	const { user } = useAuth()
	const results = useResults(user?.email)
	const [running, setRunning] = useState(!!results.progress?.big5)
	const b = results.big5

	const finish = (answers: Record<string, number>) => {
		saveResults(user.email, { big5: scoreBig5(BIG5_QUESTIONS, answers) })
		setRunning(false)
		window.scrollTo({ top: 0 })
	}

	return (
		<div className="px-6 py-10 lg:px-12">
			<div className={`${running ? 'max-w-[860px]' : 'max-w-[1120px]'} mx-auto flex flex-col gap-8`}>
				<TestHeader
					number={5}
					title="Big Five şəxsiyyət testi"
					compact={running}
					subtitle={running ? undefined : 'Elmi araşdırmalarda və işə qəbulda ən çox istifadə olunan şəxsiyyət modeli: açıqlıq, məsuliyyətlilik, ekstraversiya, xoşniyyətlilik və emosional həssaslıq.'}
					actions={
						b && !running ? (
							<>
								<ShareButton title="Big Five profilim" card={<Big5ShareCard />} />
								<button type="button" onClick={() => setRunning(true)} className="text-[14px] py-[10px] px-[22px] rounded-[25px] text-qss-inputText hover:text-qss-primary">
									Yenidən keç
								</button>
							</>
						) : undefined
					}
				/>
				{running ? (
					<LikertRunner testKey="big5" questions={BIG5_QUESTIONS} onFinish={finish} onCancel={b ? () => setRunning(false) : undefined} />
				) : b ? (
					<Big5Report b={b} />
				) : (
					<div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
						<div className="rounded-2xl bg-white border border-qss-border shadow-sm p-7 flex flex-col gap-5">
							<div className="grid sm:grid-cols-2 gap-4">
								{BIG5_ORDER.map(d => (
									<div key={d}>
										<p className="font-semibold text-qss-primary text-sm">{BIG5_DOMAINS[d].name}</p>
										<p className="text-xs text-qss-inputText mt-0.5">{BIG5_DOMAINS[d].short}</p>
									</div>
								))}
							</div>
							<button type="button" onClick={() => setRunning(true)} className="self-start text-[15px] text-white py-[12px] px-[30px] rounded-[25px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop">
								Testə başla · {BIG5_QUESTIONS.length} ifadə
							</button>
						</div>
						<div className="rounded-2xl bg-qss-transbg p-7 flex flex-col gap-3 text-sm text-qss-inputText leading-relaxed">
							<p className="font-semibold text-qss-primary text-base">Necə cavab verməli</p>
							<p>Hər ifadənin sizə nə dərəcədə aid olduğunu seçin. Doğru və ya yanlış cavab yoxdur.</p>
							<p>Özünüzü bu gün olduğunuz kimi, yaşıdlarınızla müqayisədə qiymətləndirin.</p>
							<p>Təxminən 8–10 dəqiqə çəkir. Yarımçıq qalsa, cavablarınız yadda saxlanılır.</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export const Big5Report = ({ b }: { b: Big5Result }) => {
	const { user } = useAuth()
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, 'Big-Five')
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	return (
		<div className="flex flex-col gap-4 items-start">
			<ExportBar onPrint={print} />
			<div ref={ref} className="w-full max-w-[960px] bg-white rounded-2xl shadow-sm overflow-hidden">
				<div className="bg-gradient-to-br from-qss-gradientTop via-qss-primary to-qss-alternative text-white px-10 py-10">
					<p className="text-white/70 text-xs tracking-[0.2em]">BIG FIVE ŞƏXSİYYƏT PROFİLİ</p>
					<p className="font-manrope text-3xl font-bold mt-2">{name}</p>
					<p className="text-white/70 text-sm mt-1">{formatDate(b.date)}</p>
					<div className="grid grid-cols-5 gap-3 mt-8">
						{BIG5_ORDER.map(d => (
							<div key={d} className="flex flex-col items-center gap-2">
								<div className="h-32 w-10 rounded-full bg-white/15 flex items-end overflow-hidden">
									<div className="w-full bg-qss-gradientBottom rounded-full" style={{ height: `${Math.max(6, b.domains[d])}%` }} />
								</div>
								<p className="font-manrope text-2xl font-bold tabular-nums">{b.domains[d]}</p>
								<p className="text-xs text-white/80 text-center leading-tight">{BIG5_DOMAINS[d].name}</p>
							</div>
						))}
					</div>
				</div>
				<div className="px-10 py-10 flex flex-col gap-12">
					{BIG5_ORDER.map(d => {
						const p = BIG5_DOMAINS[d]
						const lv = big5Level(b.domains[d])
						const t = p.levels[lv]
						return (
							<Section key={d} title={p.name}>
								<div className="flex flex-col gap-2">
									<div className="flex justify-between text-xs text-qss-inputText">
										<span>{p.lowLabel}</span>
										<span>{p.highLabel}</span>
									</div>
									<div className="relative h-3 rounded-full bg-qss-base-400">
										<div className="absolute inset-y-0 left-0 rounded-full bg-qss-secondary" style={{ width: `${b.domains[d]}%` }} />
									</div>
									<p className="text-sm text-qss-primary font-semibold">
										{levelWord[lv]} · {b.domains[d]} / 100
									</p>
								</div>
								<p className="text-qss-inputText leading-relaxed">{t.summary}</p>
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<p className="font-semibold text-qss-primary mb-2">İşdə və təhsildə</p>
										<p className="text-qss-inputText leading-relaxed">{t.work}</p>
									</div>
									<div>
										<p className="font-semibold text-qss-primary mb-2">Münasibətlərdə</p>
										<p className="text-qss-inputText leading-relaxed">{t.relationships}</p>
									</div>
								</div>
								<div className="rounded-xl bg-qss-transbg p-5">
									<p className="font-semibold text-qss-primary mb-3">Tövsiyələr</p>
									<Bullets items={t.tips} />
								</div>
							</Section>
						)
					})}
					<p className="text-xs text-qss-base-300 leading-relaxed">
						Bu qiymətləndirmə ictimai istifadədə olan IPIP Big Five maddələrinə əsaslanır. Nəticələr tibbi və ya psixoloji diaqnoz deyil; davranış meyllərinizi göstərir və zamanla dəyişə bilər.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Big5Test
