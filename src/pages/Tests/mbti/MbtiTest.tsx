import { ReactNode, useRef, useState } from 'react'
import useAuth from 'hooks/useAuth'
import { MBTI_POLES, MBTI_QUESTIONS, MBTI_TYPES } from 'tests/mbti/data'
import { clarityLabel, scoreMbti } from 'tests/mbti/scoring'
import { formatDate, MbtiResult, saveResults, useResults } from 'tests/store'
import TestHeader from '../components/TestHeader'
import LikertRunner from '../components/LikertRunner'
import { AxisBar } from '../components/Charts'
import { useExport } from '../components/useExport'
import { ExportBar } from '../iq/IqTest'
import ShareButton from 'share/ShareButton'
import { MbtiShareCard } from 'share/cards'

const AXES: [string, string, string][] = [
	['EI', 'E', 'I'],
	['SN', 'S', 'N'],
	['TF', 'T', 'F'],
	['JP', 'J', 'P']
]

const poleTitle = (p: string) => MBTI_POLES.find(x => x.pole === p)?.title || p

export const Section = ({ title, children }: { title: string; children: ReactNode }) => (
	<section className="flex flex-col gap-4 break-inside-avoid">
		<h2 className="font-manrope text-xl font-bold text-qss-primary uppercase tracking-wide">{title}</h2>
		{children}
	</section>
)

export const Bullets = ({ items, tone = 'teal' }: { items: string[]; tone?: 'teal' | 'amber' }) => (
	<ul className="flex flex-col gap-2">
		{items.map(t => (
			<li key={t} className="flex gap-3 text-qss-inputText leading-relaxed">
				<span className={`mt-2 w-2 h-2 shrink-0 rounded-full ${tone === 'teal' ? 'bg-qss-secondary' : 'bg-[#EA9A3E]'}`} />
				{t}
			</li>
		))}
	</ul>
)

export const Chips = ({ items }: { items: string[] }) => (
	<div className="flex flex-wrap gap-2">
		{items.map(t => (
			<span key={t} className="text-sm text-qss-alternative bg-qss-transbg rounded-[25px] px-4 py-1.5">
				{t}
			</span>
		))}
	</div>
)

const MbtiTest = () => {
	const { user } = useAuth()
	const results = useResults(user?.email)
	const [running, setRunning] = useState(!!results.progress?.mbti)
	const m = results.mbti

	const finish = (answers: Record<string, number>) => {
		saveResults(user.email, { mbti: scoreMbti(MBTI_QUESTIONS, answers) })
		setRunning(false)
		window.scrollTo({ top: 0 })
	}

	return (
		<div className="px-6 py-10 lg:px-12">
			<div className={`${running ? 'max-w-[860px]' : 'max-w-[1120px]'} mx-auto flex flex-col gap-8`}>
				<TestHeader
					number={3}
					title="16 tip şəxsiyyət testi"
					compact={running}
					subtitle={running ? undefined : '16 şəxsiyyət tipi modelinə əsaslanır. Enerjinizi haradan aldığınızı, məlumatı necə qəbul etdiyinizi, qərarları necə verdiyinizi və həyatınızı necə təşkil etdiyinizi göstərir.'}
					actions={
						m && !running ? (
							<>
								<ShareButton title="Şəxsiyyət tipim" text={`Mənim şəxsiyyət tipim: ${m.code} — ${MBTI_TYPES[m.code]?.name}`} card={<MbtiShareCard />} />
								<button type="button" onClick={() => setRunning(true)} className="text-[14px] py-[10px] px-[22px] rounded-[25px] text-qss-inputText hover:text-qss-primary">
									Yenidən keç
								</button>
							</>
						) : undefined
					}
				/>
				{running ? (
					<LikertRunner testKey="mbti" questions={MBTI_QUESTIONS} onFinish={finish} onCancel={m ? () => setRunning(false) : undefined} />
				) : m ? (
					<MbtiReport m={m} />
				) : (
					<div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
						<div className="rounded-2xl bg-white border border-qss-border shadow-sm p-7 flex flex-col gap-5">
							<div className="grid sm:grid-cols-2 gap-4">
								{AXES.map(([axis, a, b]) => (
									<div key={axis}>
										<p className="font-semibold text-qss-primary text-sm">
											{poleTitle(a)} ↔ {poleTitle(b)}
										</p>
										<p className="text-xs text-qss-inputText mt-0.5">{MBTI_POLES.find(x => x.pole === a)?.short}</p>
									</div>
								))}
							</div>
							<button type="button" onClick={() => setRunning(true)} className="self-start text-[15px] text-white py-[12px] px-[30px] rounded-[25px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop">
								Testə başla · {MBTI_QUESTIONS.length} ifadə
							</button>
						</div>
						<div className="rounded-2xl bg-qss-transbg p-7 flex flex-col gap-3 text-sm text-qss-inputText leading-relaxed">
							<p className="font-semibold text-qss-primary text-base">Necə cavab verməli</p>
							<p>Hər ifadə ilə nə dərəcədə razı olduğunuzu seçin. “Doğru” və ya “yanlış” cavab yoxdur.</p>
							<p>Olmaq istədiyiniz kimi yox, adətən necə davrandığınız kimi cavab verin.</p>
							<p>Çox düşünməyin — ilk reaksiyanız adətən ən dəqiqidir. Neytral cavabı az istifadə edin.</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export const MbtiReport = ({ m }: { m: MbtiResult }) => {
	const { user } = useAuth()
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, `MBTI-${m.code}`)
	const t = MBTI_TYPES[m.code]
	if (!t) return <p>Tip məlumatı tapılmadı: {m.code}</p>
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	return (
		<div className="flex flex-col gap-4 items-start">
			<ExportBar onPrint={print} />
			<div ref={ref} className="w-full max-w-[960px] bg-white rounded-2xl shadow-sm overflow-hidden">
				<div className="bg-gradient-to-br from-qss-gradientTop via-qss-primary to-qss-alternative text-white px-10 py-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
					<div>
						<p className="text-white/70 text-xs tracking-[0.2em]">ŞƏXSİYYƏT TİPİ</p>
						<p className="font-manrope text-7xl font-extrabold tracking-[0.12em] mt-2">{m.code}</p>
						<p className="font-manrope text-2xl font-bold text-qss-gradientBottom mt-1">{t.name}</p>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-lg leading-relaxed">{t.tagline}</p>
						<p className="text-white/70 text-sm">
							{name} · {formatDate(m.date)}
						</p>
					</div>
				</div>

				<div className="px-10 py-10 flex flex-col gap-12">
					<Section title="Tipinizin dörd ölçüsü">
						<div className="flex flex-col gap-5">
							{AXES.map(([axis, a, b]) => {
								const ax = m.axes[axis]
								const pole = MBTI_POLES.find(x => x.pole === ax.pole)
								return (
									<div key={axis} className="flex flex-col gap-2">
										<AxisBar left={a} right={b} leftLabel={poleTitle(a)} rightLabel={poleTitle(b)} pole={ax.pole} percent={ax.percent} />
										<p className="text-sm text-qss-inputText">
											<b className="text-qss-primary">{pole?.title}</b> ({clarityLabel(ax.percent)} üstünlük): {pole?.description}
										</p>
									</div>
								)
							})}
						</div>
					</Section>

					<Section title="Ümumi xarakteristika">
						<p className="text-qss-inputText leading-relaxed text-[17px]">{t.summary}</p>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="rounded-xl bg-qss-transbg p-5">
								<p className="font-semibold text-qss-primary mb-3">Güclü tərəflər</p>
								<Bullets items={t.strengths} />
							</div>
							<div className="rounded-xl bg-[#FFF8EC] p-5">
								<p className="font-semibold text-qss-primary mb-3">Diqqət tələb edən tərəflər</p>
								<Bullets items={t.weaknesses} tone="amber" />
							</div>
						</div>
					</Section>

					<Section title="Ünsiyyət">
						<p className="text-qss-inputText leading-relaxed">{t.communication}</p>
						<div className="rounded-xl border border-qss-border p-5">
							<p className="font-semibold text-qss-primary mb-3">Effektiv ünsiyyət üçün</p>
							<Bullets items={t.communicationTips} />
						</div>
					</Section>

					<Section title="Karyera">
						<p className="text-qss-inputText leading-relaxed">{t.career}</p>
						<p className="font-semibold text-qss-primary">Uyğun peşələr</p>
						<Chips items={t.careers} />
						<p className="font-semibold text-qss-primary">Uyğun ixtisaslar</p>
						<Chips items={t.majors} />
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<p className="font-semibold text-qss-primary mb-2">İş tərzi</p>
								<p className="text-qss-inputText leading-relaxed">{t.workStyle}</p>
							</div>
							<div>
								<p className="font-semibold text-qss-primary mb-2">Liderlik</p>
								<p className="text-qss-inputText leading-relaxed">{t.leadership}</p>
							</div>
						</div>
					</Section>

					<Section title="Münasibətlər">
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<p className="font-semibold text-qss-primary mb-2">Yaxın münasibətlər</p>
								<p className="text-qss-inputText leading-relaxed">{t.relationships}</p>
							</div>
							<div>
								<p className="font-semibold text-qss-primary mb-2">Dostluq</p>
								<p className="text-qss-inputText leading-relaxed">{t.friendship}</p>
							</div>
						</div>
					</Section>

					<Section title="Stress və inkişaf">
						<p className="text-qss-inputText leading-relaxed">{t.stress}</p>
						<div className="rounded-xl bg-qss-transbg p-5">
							<p className="font-semibold text-qss-primary mb-3">İnkişaf tövsiyələri</p>
							<Bullets items={t.growth} />
						</div>
					</Section>

					<p className="text-xs text-qss-base-300 leading-relaxed">
						Bu test 16 şəxsiyyət tipi tipologiyasına əsaslanan Talent Score qiymətləndirməsidir; rəsmi MBTI® alətini əvəz etmir. Tip davranışınıza meyli göstərir, bacarıq və ya dəyər ölçüsü deyil. Zaman keçdikcə və həyat şəraitinə görə nəticələr dəyişə bilər.
					</p>
				</div>
			</div>
		</div>
	)
}

export default MbtiTest
