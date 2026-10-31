import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchJob, useMatches } from 'jobs/api'
import { nextSteps, prepReport } from 'jobs/coach'
import { invitationReply, thankYou } from 'jobs/letters'
import { matchJob } from 'jobs/match'
import { saveCareer } from 'jobs/store'
import { currentStatus, isInvitation, STATUS_LABEL, STATUS_TONE } from 'jobs/status'
import { Job } from 'jobs/types'
import { useTestStatus } from 'components/AppShell/AppShell'
import { Bullets, Section } from '../Tests/mbti/MbtiTest'
import { useExport } from '../Tests/components/useExport'
import { ExportBar } from '../Tests/iq/IqTest'
import { btnGhost, btnPrimary, card, CopyBox, Empty, MatchRing, Page, SourceTag, Tag } from './ui'

export const CoachHome = () => {
	const { scored, results, career } = useMatches()
	const { done } = useTestStatus()
	const steps = useMemo(() => nextSteps(results, career, done.talent, scored), [results, career, done.talent, scored])
	const apps = career.applications
	return (
		<Page eyebrow="Karyera" title="Karyera koçu" subtitle="Test nəticələriniz, profiliniz və müraciətləriniz əsasında növbəti addımlar və hər vakansiya üçün müsahibəyə hazırlıq.">
			<section className="flex flex-col gap-3">
				<h2 className="font-manrope text-xl font-bold text-qss-primary">Növbəti addımlarınız</h2>
				{steps.length === 0 && <Empty title="Hər şey qaydasındadır" text="Yeni dəvət və ya tövsiyə yoxdur. Sabah 06:00-da yeni vakansiyalar gələndə yenidən baxın." />}
				{steps.map((s, i) => (
					<div key={s.id} className={`${card} p-5 flex flex-wrap items-center gap-4 ${s.tone === 'urgent' ? 'border-[#F59E0B]' : ''}`}>
						<span className={`w-9 h-9 rounded-full grid place-items-center font-bold shrink-0 ${s.tone === 'urgent' ? 'bg-[#F59E0B] text-white' : 'bg-qss-transbg text-qss-secondary'}`}>{i + 1}</span>
						<div className="flex-1 min-w-[220px]">
							<p className="font-semibold text-qss-primary">{s.title}</p>
							<p className="text-sm text-qss-inputText">{s.text}</p>
						</div>
						<Link to={s.to} className={s.tone === 'urgent' ? btnPrimary : btnGhost}>
							{s.cta}
						</Link>
					</div>
				))}
			</section>
			<section className="flex flex-col gap-3">
				<h2 className="font-manrope text-xl font-bold text-qss-primary">Müsahibəyə hazırlıq hesabatları</h2>
				{apps.length === 0 ? (
					<Empty title="Müraciət yoxdur" text="Müraciət etdiyiniz hər vakansiya üçün burada fərdi hazırlıq hesabatı yaranacaq." />
				) : (
					<div className="grid gap-3 md:grid-cols-2">
						{apps.slice(0, 30).map(a => {
							const s = currentStatus(a)
							return (
								<Link key={a.id} to={`/profile/jobs/coach/${a.id}`} className={`${card} p-4 flex items-center gap-3 hover:border-qss-secondary`}>
									<MatchRing value={a.match} size={46} />
									<div className="flex-1 min-w-0">
										<p className="font-semibold text-qss-primary truncate">{a.job.title}</p>
										<p className="text-sm text-qss-inputText truncate">{a.job.company}</p>
									</div>
									<span className={`text-[11px] font-semibold rounded-full px-2 py-0.5 ${STATUS_TONE[s]}`}>{STATUS_LABEL[s]}</span>
								</Link>
							)
						})}
					</div>
				)}
			</section>
		</Page>
	)
}

export const CoachReport = () => {
	const { appId } = useParams()
	const { feed, results, career, user } = useMatches()
	const a = career.applications.find(x => x.id === appId)
	const [job, setJob] = useState<Job | null>(null)
	const [topic, setTopic] = useState('')
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, 'Musahibe-hazirligi')
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()

	useEffect(() => {
		if (!a) return
		if (a.full) return setJob(a.full) // demo profiles carry the vacancy with them
		const fromFeed = feed?.jobs.find(j => j.id === a.job.id)
		if (fromFeed) setJob(fromFeed)
		fetchJob(a.job.id)
			.then(setJob)
			.catch(() => {
				// Older than the feed window: rebuild a minimal vacancy from the application.
				if (!fromFeed) setJob({ ...a.job, minYears: 0, education: 'Orta', languages: [], skills: [], traits: [], riasec: '', employment: '', summary: '', posted: a.createdAt, firstSeen: a.day } as Job)
			})
	}, [a?.id, feed])

	if (!a) return <Page eyebrow="Karyera koçu" title="Müraciət tapılmadı" children={<Link to="/profile/jobs/coach" className={btnGhost}>Koça qayıt</Link>} />
	if (!job) return <Page eyebrow="Karyera koçu" title={a.job.title} children={<p className="text-qss-inputText">Hesabat hazırlanır…</p>} />

	const m = matchJob(job, career.profile, results)
	const rep = prepReport(job, m, career.profile, results)
	const s = currentStatus(a)
	const invited = isInvitation(s)
	const update = (patch: object) => saveCareer(user.email, cur => ({ applications: cur.applications.map(x => (x.id === a.id ? { ...x, ...patch } : x)) }))

	return (
		<Page
			eyebrow="Karyera koçu · Müsahibəyə hazırlıq"
			title={`${job.title} — ${job.company}`}
			subtitle={
				<span className="flex flex-wrap gap-2 items-center">
					<SourceTag job={job} />
					<span className={`text-[12px] font-semibold rounded-full px-2.5 py-1 ${STATUS_TONE[s]}`}>{STATUS_LABEL[s]}</span>
					<Tag>Uyğunluq {m.score}%</Tag>
				</span>
			}
			actions={<ExportBar onPrint={print} />}
			wide={false}
		>
			{invited && !a.replySent && (
				<section className={`${card} p-6 border-[#F59E0B] flex flex-col gap-3`}>
					<p className="font-semibold text-qss-primary">1-ci addım: dəvətə cavab verin (24 saat ərzində)</p>
					<CopyBox text={invitationReply(s as 'test' | 'interview', job.company, job.title, name)} label="Cavabı kopyala" />
					<button type="button" className={`${btnPrimary} self-start`} onClick={() => update({ replySent: new Date().toISOString() })}>
						Cavabı göndərdim
					</button>
				</section>
			)}

			<div ref={ref} className="bg-white rounded-2xl shadow-sm overflow-hidden">
				<div className="bg-gradient-to-br from-qss-gradientTop via-qss-primary to-qss-alternative text-white px-8 py-8 flex items-center gap-6">
					<div className="rounded-full bg-white p-1">
						<MatchRing value={m.score} size={88} />
					</div>
					<div>
						<p className="text-white/70 text-xs tracking-[0.2em]">FƏRDİ HAZIRLIQ HESABATI</p>
						<p className="font-manrope text-2xl font-bold mt-1">{name}</p>
						<p className="text-white/85 mt-2 leading-relaxed max-w-2xl">{rep.verdict}</p>
					</div>
				</div>
				<div className="px-8 py-8 flex flex-col gap-10">
					<Section title="İşəgötürən nə axtarır">
						<Bullets items={rep.lookFor.length ? rep.lookFor : ['Elanın tələblərini orijinal mətndən oxuyun.']} />
					</Section>
					<Section title="Vurğulamalı olduğunuz güclü tərəflər">
						<Bullets items={rep.strengths.length ? rep.strengths : ['Testləri tamamladıqca burada fərdi güclü tərəfləriniz görünəcək.']} />
					</Section>
					{rep.gaps.length > 0 && (
						<Section title="Zəif nöqtələr və necə cavab vermək">
							<div className="flex flex-col gap-3">
								{rep.gaps.map(g => (
									<div key={g.gap} className="rounded-xl bg-[#FFF8EC] p-4">
										<p className="font-semibold text-qss-primary">{g.gap}</p>
										<p className="text-sm text-qss-inputText mt-1 leading-relaxed">{g.answer}</p>
									</div>
								))}
							</div>
						</Section>
					)}
					<Section title="Gözlənilən suallar">
						<ol className="flex flex-col gap-3 list-decimal pl-5">
							{rep.questions.map(q => (
								<li key={q.q} className="text-qss-primary">
									<p className="font-semibold">{q.q}</p>
									<p className="text-sm text-qss-inputText mt-0.5">{q.hint}</p>
								</li>
							))}
						</ol>
					</Section>
					{rep.star.length > 0 && (
						<Section title="STAR üsulu ilə cavab şablonu">
							{rep.star.map(x => (
								<div key={x.q} className="rounded-xl border border-qss-border p-4 flex flex-col gap-1.5 text-sm text-qss-inputText">
									<p className="font-semibold text-qss-primary">{x.q}</p>
									<p>
										<b className="text-qss-secondary">S</b> — {x.s}
									</p>
									<p>
										<b className="text-qss-secondary">T</b> — {x.t}
									</p>
									<p>
										<b className="text-qss-secondary">A</b> — {x.a}
									</p>
									<p>
										<b className="text-qss-secondary">R</b> — {x.r}
									</p>
								</div>
							))}
						</Section>
					)}
					<Section title="Seçim mərhələləri üzrə məsləhət">
						<div className="flex flex-col gap-2">
							{rep.process.map((p, i) => (
								<div key={p.step} className="flex gap-3">
									<span className="w-7 h-7 rounded-full bg-qss-transbg text-qss-secondary grid place-items-center text-sm font-bold shrink-0">{i + 1}</span>
									<div>
										<p className="font-semibold text-qss-primary">{p.step}</p>
										<p className="text-sm text-qss-inputText">{p.tip}</p>
									</div>
								</div>
							))}
						</div>
					</Section>
					<Section title="Ünsiyyət tərziniz müsahibədə">
						<Bullets items={rep.style} />
					</Section>
					<div className="grid md:grid-cols-2 gap-8">
						<Section title="Müsahibçiyə verin">
							<Bullets items={rep.ask} />
						</Section>
						<Section title="Şirkəti araşdırın">
							<Bullets items={rep.research} />
						</Section>
					</div>
					<Section title="Hazırlıq planı">
						<div className="grid md:grid-cols-5 gap-3">
							{rep.plan.map(d => (
								<div key={d.day} className="rounded-xl bg-qss-transbg p-4">
									<p className="font-semibold text-qss-primary text-sm">{d.day}</p>
									<ul className="mt-2 flex flex-col gap-1.5 text-[13px] text-qss-inputText">
										{d.tasks.map(t => (
											<li key={t}>• {t}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</Section>
					<Section title="Müsahibədən sonra">
						<Bullets items={rep.after} />
					</Section>
				</div>
			</div>

			<section className={`${card} p-6 flex flex-col gap-4`}>
				<p className="font-manrope text-lg font-semibold text-qss-primary">Müsahibədən sonrakı izləmə</p>
				{a.interviewDone ? (
					<>
						<p className="text-sm text-qss-inputText">Müsahibə qeyd olundu. Bu təşəkkür məktubunu 24 saat ərzində göndərin. 5–7 iş günü cavab gəlməsə, “Müraciətlərim”dən xatırlatma edin; nəticə gələndə statusu yeniləyin.</p>
						<label className="flex flex-col gap-1.5 text-sm text-qss-inputText">
							Müsahibədə xüsusilə maraqlı olan mövzu (istəyə bağlı)
							<input className="bg-qss-input rounded-[14px] px-4 py-2.5 outline-none text-qss-primary" value={topic} onChange={e => setTopic(e.target.value)} placeholder="məs. komandanın yeni analitika layihəsi" />
						</label>
						<CopyBox text={thankYou(job.company, job.title, name, topic || undefined)} label="Təşəkkür məktubunu kopyala" />
					</>
				) : (
					<>
						<p className="text-sm text-qss-inputText">Müsahibə bitəndən sonra qeyd edin — sistem təşəkkür məktubunu və növbəti addımları hazırlayacaq.</p>
						<button type="button" className={`${btnGhost} self-start`} onClick={() => update({ interviewDone: new Date().toISOString() })}>
							Müsahibə keçdi
						</button>
					</>
				)}
			</section>
		</Page>
	)
}
