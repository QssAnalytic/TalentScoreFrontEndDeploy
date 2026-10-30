import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { useFeed } from 'jobs/api'
import { bakuDay, dateTime, dayMonth, salaryLabel, saveCareer, useCareer, weekdayShort } from 'jobs/store'
import { currentStatus, isInvitation, isReply, STATUS_LABEL, STATUS_TONE, timeline } from 'jobs/status'
import { invitationReply } from 'jobs/letters'
import { Application, AppStatus } from 'jobs/types'
import { btnGhost, btnPrimary, btnText, card, CopyBox, Empty, Page, SourceTag, Stat, Tag } from './ui'

const when = dateTime
const dayLabel = (d: string) => {
	const x = new Date(`${d}T12:00:00`)
	return `${weekdayShort(x)} ${x.getDate()}`
}

const Applications = () => {
	const { user } = useAuth()
	const career = useCareer(user?.email)
	const { feed } = useFeed()
	const [filter, setFilter] = useState<'all' | 'action' | 'replies'>('all')
	const [openId, setOpenId] = useState<string | null>(null)
	const [, tick] = useState(0)
	const today = bakuDay()
	const apps = career.applications
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()

	// Daily report: last 7 days.
	const days = useMemo(() => {
		const out: { day: string; applied: number; replies: number; invites: number }[] = []
		for (let i = 6; i >= 0; i--) {
			const d = bakuDay(new Date(Date.now() - i * 86400_000))
			const applied = apps.filter(a => a.day === d).length
			const evs = apps.flatMap(a => timeline(a)).filter(e => bakuDay(new Date(e.at)) === d)
			out.push({ day: d, applied, replies: evs.filter(e => isReply(e.status)).length, invites: evs.filter(e => isInvitation(e.status)).length })
		}
		return out
	}, [apps])
	const statuses = apps.map(a => currentStatus(a))
	const todayApps = apps.filter(a => a.day === today)
	const replies = apps.filter(a => timeline(a).some(e => isReply(e.status))).length
	const invites = apps.filter(a => timeline(a).some(e => isInvitation(e.status))).length
	const pendingInvites = apps.filter(a => isInvitation(currentStatus(a)) && !a.replySent)
	const newToday = feed?.jobs.filter(j => j.firstSeen === today).length ?? 0
	const max = Math.max(1, ...days.map(d => Math.max(d.applied, d.replies)))

	const update = (id: string, patch: Partial<Application> | ((a: Application) => Partial<Application>)) => {
		saveCareer(user.email, cur => ({ applications: cur.applications.map(a => (a.id === id ? { ...a, ...(typeof patch === 'function' ? patch(a) : patch) } : a)) }))
		tick(t => t + 1)
	}
	const addEvent = (id: string, status: AppStatus, note?: string) => update(id, a => ({ events: [...a.events, { at: new Date().toISOString(), status, note }] }))

	const shown = apps.filter((a, i) => {
		const s = statuses[i]
		if (filter === 'action') return s === 'ready' || (isInvitation(s) && !a.replySent)
		if (filter === 'replies') return isReply(s)
		return true
	})

	return (
		<Page
			eyebrow="Karyera"
			title="Müraciətlərim"
			subtitle="Gündəlik hesabat, işəgötürən cavabları və dəvətlərə hazır cavablar."
			actions={
				<Link to="/profile/jobs" className={btnGhost}>
					Vakansiyalar
				</Link>
			}
		>
			<section className="flex flex-col gap-4">
				<h2 className="font-manrope text-xl font-bold text-qss-primary">Gündəlik hesabat · {dayMonth(new Date())}</h2>
				<div className="grid gap-3 grid-cols-2 md:grid-cols-5">
					<Stat label="Bu gün yeni vakansiya" value={newToday} sub="06:00-da toplanıb" />
					<Stat label="Bu gün müraciət" value={todayApps.length} sub={`${todayApps.filter(a => a.mode === 'auto').length} avtomatik`} />
					<Stat label="Cəmi müraciət" value={apps.length} />
					<Stat label="Cavab gələn" value={replies} sub={apps.length ? `${Math.round((replies / apps.length) * 100)}% cavab nisbəti` : undefined} />
					<Stat label="Dəvətlər" value={invites} tone="text-qss-secondary" sub="test və müsahibə" />
				</div>
				<div className={`${card} p-5`}>
					<div className="flex items-center justify-between mb-4 text-sm">
						<p className="font-semibold text-qss-primary">Son 7 gün</p>
						<div className="flex gap-4 text-qss-inputText">
							<span className="flex items-center gap-1.5">
								<span className="w-3 h-3 rounded-sm bg-qss-secondary" />
								Müraciət
							</span>
							<span className="flex items-center gap-1.5">
								<span className="w-3 h-3 rounded-sm bg-[#7C5CD6]" />
								Cavab
							</span>
						</div>
					</div>
					<div className="grid grid-cols-7 gap-3 items-end h-36">
						{days.map(d => (
							<div key={d.day} className="flex flex-col items-center gap-1 h-full justify-end">
								<div className="flex items-end gap-1 h-full">
									<div className="w-4 rounded-t bg-qss-secondary" style={{ height: `${(d.applied / max) * 100}%`, minHeight: d.applied ? 4 : 0 }} title={`${d.applied} müraciət`} />
									<div className="w-4 rounded-t bg-[#7C5CD6]" style={{ height: `${(d.replies / max) * 100}%`, minHeight: d.replies ? 4 : 0 }} title={`${d.replies} cavab`} />
								</div>
								<span className={`text-[11px] ${d.day === today ? 'font-bold text-qss-primary' : 'text-qss-inputText'}`}>{dayLabel(d.day)}</span>
								<span className="text-[11px] tabular-nums text-qss-inputText">
									{d.applied}/{d.replies}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{pendingInvites.length > 0 && (
				<section className="flex flex-col gap-3">
					<h2 className="font-manrope text-xl font-bold text-qss-primary">Cavab gözləyən dəvətlər</h2>
					{pendingInvites.map(a => {
						const kind = currentStatus(a) as 'test' | 'interview'
						const last = timeline(a).slice(-1)[0]
						return (
							<div key={a.id} className={`${card} p-5 border-[#F59E0B] flex flex-col gap-3`}>
								<div className="flex flex-wrap items-center gap-2">
									<Tag tone={kind === 'test' ? 'violet' : 'teal'}>{STATUS_LABEL[kind]}</Tag>
									<span className="font-semibold text-qss-primary">
										{a.job.title} — {a.job.company}
									</span>
									<span className="text-xs text-qss-inputText">{when(last.at)}</span>
								</div>
								{last.note && <p className="text-sm text-qss-inputText italic">“{last.note}”</p>}
								<p className="text-sm text-qss-primary font-semibold">Sistemin hazırladığı cavab:</p>
								<CopyBox text={invitationReply(kind, a.job.company, a.job.title, name)} label="Cavabı kopyala" />
								<div className="flex flex-wrap gap-3">
									<button type="button" className={btnPrimary} onClick={() => update(a.id, { replySent: new Date().toISOString() })}>
										Cavabı göndərdim
									</button>
									<Link to={`/profile/jobs/coach/${a.id}`} className={btnGhost}>
										Hazırlıq hesabatı
									</Link>
								</div>
							</div>
						)
					})}
				</section>
			)}

			<section className="flex flex-col gap-3">
				<div className="flex flex-wrap items-center justify-between gap-3">
					<h2 className="font-manrope text-xl font-bold text-qss-primary">Bütün müraciətlər</h2>
					<div className="flex gap-2">
						{(
							[
								['all', 'Hamısı'],
								['action', 'Addım tələb edən'],
								['replies', 'Cavablar']
							] as const
						).map(([id, label]) => (
							<button key={id} type="button" onClick={() => setFilter(id)} className={`text-[13px] px-3.5 py-1.5 rounded-full ${filter === id ? 'bg-qss-primary text-white' : 'bg-white border border-qss-border text-qss-inputText'}`}>
								{label}
							</button>
						))}
					</div>
				</div>
				{apps.length === 0 && (
					<Empty
						title="Hələ müraciət yoxdur"
						text="Vakansiyalar səhifəsindən müraciət edin və ya avto-müraciəti aktiv edin — sistem hər gün uyğun vakansiyalara özü müraciət hazırlayacaq."
						action={
							<div className="flex gap-3">
								<Link to="/profile/jobs" className={btnPrimary}>
									Vakansiyalara bax
								</Link>
								<Link to="/profile/jobs/auto" className={btnGhost}>
									Avto-müraciət
								</Link>
							</div>
						}
					/>
				)}
				{shown.map(a => {
					const s = currentStatus(a)
					const tl = timeline(a)
					const isOpen = openId === a.id
					return (
						<div key={a.id} className={`${card} p-5 flex flex-col gap-3`}>
							<div className="flex flex-wrap items-start gap-4">
								<div className="flex-1 min-w-[220px]">
									<div className="flex flex-wrap items-center gap-2">
										<span className="font-semibold text-qss-primary">{a.job.title}</span>
										<span className={`text-[12px] font-semibold rounded-full px-2.5 py-1 ${STATUS_TONE[s]}`}>{STATUS_LABEL[s]}</span>
									</div>
									<p className="text-sm text-qss-inputText mt-1">
										{a.job.company} · {a.job.city} · {salaryLabel(a.job)} · uyğunluq <b className="text-qss-primary">{a.match}%</b>
									</p>
									<div className="flex flex-wrap gap-1.5 mt-2">
										<SourceTag job={a.job} />
										<Tag>{a.mode === 'auto' ? 'Avtomatik' : 'Əl ilə'}</Tag>
										<Tag>{when(a.createdAt)}</Tag>
									</div>
								</div>
								<div className="flex flex-wrap gap-2 items-center">
									{s === 'ready' && a.job.url && (
										<a href={a.job.url} target="_blank" rel="noopener noreferrer" className={btnGhost}>
											Elanı aç ↗
										</a>
									)}
									{s === 'ready' && (
										<button type="button" className={btnPrimary} onClick={() => addEvent(a.id, 'sent', 'Müraciəti işəgötürənin saytında göndərdiniz.')}>
											Göndərdim
										</button>
									)}
									{(isInvitation(s) || s === 'offer') && (
										<Link to={`/profile/jobs/coach/${a.id}`} className={btnPrimary}>
											Hazırlıq
										</Link>
									)}
									<button type="button" className={btnText} onClick={() => setOpenId(isOpen ? null : a.id)}>
										{isOpen ? 'Bağla' : 'Ətraflı'}
									</button>
								</div>
							</div>
							{isOpen && (
								<div className="grid md:grid-cols-[1fr_1.2fr] gap-5 border-t border-qss-border pt-4">
									<div className="flex flex-col gap-3">
										<p className="text-sm font-semibold text-qss-primary">Tarixçə</p>
										<ol className="flex flex-col gap-2.5 border-l-2 border-qss-base-400 pl-4">
											{tl.map((e, i) => (
												<li key={i} className="text-sm">
													<span className={`text-[11px] font-semibold rounded-full px-2 py-0.5 ${STATUS_TONE[e.status]}`}>{STATUS_LABEL[e.status]}</span>
													<span className="text-qss-inputText ml-2">{when(e.at)}</span>
													{e.note && <p className="text-qss-inputText mt-0.5">{e.note}</p>}
												</li>
											))}
										</ol>
										{a.job.sample && <p className="text-xs text-[#8A5300]">Nümunə vakansiya: işəgötürən cavabları simulyasiyadır.</p>}
										{!a.job.sample && (
											<label className="flex flex-col gap-1.5 text-sm text-qss-inputText">
												İşəgötürəndən cavab gəldisə, qeyd edin:
												<select
													className="bg-qss-input rounded-[12px] px-3 py-2 text-qss-primary outline-none"
													value=""
													onChange={e => e.target.value && addEvent(a.id, e.target.value as AppStatus, 'Siz qeyd etdiniz.')}
												>
													<option value="">Status seçin…</option>
													{(['viewed', 'test', 'interview', 'offer', 'rejected'] as AppStatus[]).map(x => (
														<option key={x} value={x}>
															{STATUS_LABEL[x]}
														</option>
													))}
												</select>
											</label>
										)}
										{s !== 'withdrawn' && (
											<button type="button" className={`${btnText} self-start`} onClick={() => addEvent(a.id, 'withdrawn', 'Müraciəti geri götürdünüz.')}>
												Müraciəti geri götür
											</button>
										)}
									</div>
									<div className="flex flex-col gap-2">
										<p className="text-sm font-semibold text-qss-primary">Müraciət məktubu</p>
										<CopyBox text={a.coverLetter} label="Məktubu kopyala" />
									</div>
								</div>
							)}
						</div>
					)
				})}
			</section>
		</Page>
	)
}

export default Applications
