import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchJob, Scored, useMatches } from 'jobs/api'
import { matchWord } from 'jobs/match'
import { bakuDay, dateTime, salaryLabel, saveCareer } from 'jobs/store'
import { makeApplication } from 'jobs/useAutoApply'
import { nextSteps } from 'jobs/coach'
import { useTestStatus } from 'components/AppShell/AppShell'
import { Job } from 'jobs/types'
import { viewingAs } from 'demo/viewAs'
import { formatDate } from 'tests/store'
import { Bullets } from '../Tests/mbti/MbtiTest'
import { btnGhost, btnPrimary, btnText, card, CopyBox, Empty, MatchRing, Page, SourceTag, Tag } from './ui'

type Tab = 'fit' | 'new' | 'all'

const timeAz = dateTime

const Vacancies = () => {
	const { feed, error, scored, results, career, user } = useMatches()
	const { done } = useTestStatus()
	const [tab, setTab] = useState<Tab>('fit')
	const [sector, setSector] = useState('')
	const [place, setPlace] = useState('')
	const [kind, setKind] = useState('')
	const [q, setQ] = useState('')
	const [openId, setOpenId] = useState<string | null>(null)
	const today = feed?.today || bakuDay()
	const applied = useMemo(() => new Map(career.applications.map(a => [a.job.id, a])), [career.applications])
	const steps = useMemo(() => nextSteps(results, career, done.talent, scored).slice(0, 3), [results, career, done.talent, scored])

	const list = scored.filter(({ job, m }) => {
		if (tab === 'fit' && m.score < 60) return false
		if (tab === 'new' && job.firstSeen !== today) return false
		if (sector && job.sector !== sector) return false
		if (place === 'baku' && !/bakı/i.test(job.city)) return false
		if (place === 'remote' && !/uzaqdan/i.test(job.city)) return false
		if (place === 'regions' && (/bakı|uzaqdan/i.test(job.city))) return false
		if (kind === 'real' && job.sample) return false
		if (kind === 'sample' && !job.sample) return false
		if (q && !`${job.title} ${job.company} ${job.skills.join(' ')}`.toLowerCase().includes(q.toLowerCase())) return false
		return true
	})
	const newToday = scored.filter(x => x.job.firstSeen === today).length
	const fitCount = scored.filter(x => x.m.score >= 60).length
	const sectors = useMemo(() => [...new Set(scored.map(x => x.job.sector))].sort(), [scored])
	const open = scored.find(x => x.job.id === openId)

	return (
		<Page
			eyebrow="Karyera · Hər gün 06:00-da yenilənir"
			title="Vakansiyalar"
			subtitle={
				feed ? (
					<span>
						Son yenilənmə: <b className="text-qss-primary">{timeAz(feed.updatedAt)}</b> · bu gün <b className="text-qss-primary">{newToday}</b> yeni vakansiya · sizə uyğun <b className="text-qss-secondary">{fitCount}</b> · növbəti yenilənmə {timeAz(feed.nextUpdate)}
					</span>
				) : (
					'Hər gün yeni vakansiyalar toplanır və profilinizlə avtomatik müqayisə olunur.'
				)
			}
			actions={
				<>
					<Link to="/profile/jobs/auto" className={btnPrimary}>
						Avto-müraciət
					</Link>
					<Link to="/profile/jobs/profile" className={btnGhost}>
						Karyera profili
					</Link>
				</>
			}
		>
			{!career.profile && (
				<div className="rounded-2xl bg-[#FFF8EC] border border-[#F4D9A8] p-5 flex flex-wrap items-center justify-between gap-4">
					<p className="text-qss-primary">
						<b>Uyğunluq hələ təxminidir.</b> Bacarıqlarınızı, təcrübə ilinizi və istədiyiniz sahələri əlavə edin — faizlər dəqiqləşəcək.
					</p>
					<Link to="/profile/jobs/profile" className={btnPrimary}>
						Profili doldur
					</Link>
				</div>
			)}

			{steps.length > 0 && (
				<div className="grid gap-3 md:grid-cols-3">
					{steps.map(s => (
						<Link key={s.id} to={s.to} className={`${card} p-4 flex flex-col gap-1 hover:border-qss-secondary transition-colors ${s.tone === 'urgent' ? 'border-[#F59E0B]' : ''}`}>
							<span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-qss-secondary">Koçun tövsiyəsi</span>
							<span className="font-semibold text-qss-primary">{s.title}</span>
							<span className="text-sm text-qss-inputText line-clamp-2">{s.text}</span>
						</Link>
					))}
				</div>
			)}

			{feed && (
				<div className="flex flex-wrap gap-2 text-xs text-qss-inputText items-center">
					<span>Mənbələr:</span>
					{feed.sources.map(s => (
						<span key={s.name} className="rounded-full bg-white border border-qss-border px-3 py-1">
							{s.name} · {s.ok ? s.count : 'əlçatan deyil'} {s.real ? '' : '(nümunə)'}
						</span>
					))}
				</div>
			)}

			<div className={`${card} p-4 flex flex-col gap-3`}>
				<div className="flex flex-wrap gap-2" role="tablist">
					{(
						[
							['fit', `Mənə uyğun (${fitCount})`],
							['new', `Bu gün yeni (${newToday})`],
							['all', `Hamısı (${scored.length})`]
						] as [Tab, string][]
					).map(([id, label]) => (
						<button
							key={id}
							type="button"
							role="tab"
							aria-selected={tab === id}
							onClick={() => setTab(id)}
							className={`text-[14px] px-4 py-2 rounded-full transition-colors ${tab === id ? 'bg-qss-primary text-white' : 'bg-qss-background text-qss-inputText hover:text-qss-primary'}`}
						>
							{label}
						</button>
					))}
				</div>
				<div className="grid gap-3 md:grid-cols-4">
					<input value={q} onChange={e => setQ(e.target.value)} placeholder="Vəzifə, şirkət və ya bacarıq" aria-label="Axtarış" className="bg-qss-input rounded-[14px] px-4 py-2.5 outline-none text-qss-primary" />
					<select value={sector} onChange={e => setSector(e.target.value)} aria-label="Sahə" className="bg-qss-input rounded-[14px] px-4 py-2.5 outline-none text-qss-primary">
						<option value="">Bütün sahələr</option>
						{sectors.map(s => (
							<option key={s}>{s}</option>
						))}
					</select>
					<select value={place} onChange={e => setPlace(e.target.value)} aria-label="Yer" className="bg-qss-input rounded-[14px] px-4 py-2.5 outline-none text-qss-primary">
						<option value="">Bütün yerlər</option>
						<option value="baku">Bakı</option>
						<option value="regions">Regionlar</option>
						<option value="remote">Uzaqdan</option>
					</select>
					<select value={kind} onChange={e => setKind(e.target.value)} aria-label="Mənbə" className="bg-qss-input rounded-[14px] px-4 py-2.5 outline-none text-qss-primary">
						<option value="">Bütün mənbələr</option>
						<option value="real">Real (beynəlxalq, uzaqdan)</option>
						<option value="sample">Nümunə (yerli)</option>
					</select>
				</div>
			</div>

			{error && <Empty title="Lent yüklənmədi" text={error} />}
			{!feed && !error && <p className="text-qss-inputText">Vakansiyalar yüklənir…</p>}
			{feed && list.length === 0 && <Empty title="Bu filtrlərlə vakansiya yoxdur" text="Filtrləri dəyişin və ya “Hamısı” bölməsinə baxın." />}

			<div className="flex flex-col gap-3">
				{list.slice(0, 80).map(x => (
					<JobRow key={x.job.id} x={x} today={today} applied={!!applied.get(x.job.id)} onOpen={() => setOpenId(x.job.id)} />
				))}
			</div>

			<p className="text-xs text-qss-base-300 leading-relaxed">
				“Real” vakansiyalar Arbeitnow-un açıq iş elanı API-sindən gündəlik toplanır (yalnız uzaqdan işlər) və orijinal elana keçidlə göstərilir. “Nümunə” işarəli yerli vakansiyalar uydurma şirkətlərlə sistemin necə işlədiyini göstərmək üçündür; onlara verilən cavablar simulyasiyadır. Yerli iş saytları icazə verdikdə real mənbə kimi əlavə olunacaq.
			</p>

			{open && <JobDrawer x={open} onClose={() => setOpenId(null)} appliedId={applied.get(open.job.id)?.id} email={user?.email} name={`${user?.first_name || ''} ${user?.last_name || ''}`.trim()} />}
		</Page>
	)
}

const JobRow = ({ x, today, applied, onOpen }: { x: Scored; today: string; applied: boolean; onOpen: () => void }) => {
	const { job, m } = x
	return (
		<button type="button" onClick={onOpen} className={`${card} p-5 text-left flex gap-4 items-start hover:border-qss-secondary transition-colors w-full`}>
			<MatchRing value={m.score} />
			<div className="flex-1 min-w-0 flex flex-col gap-1.5">
				<div className="flex flex-wrap items-center gap-2">
					<span className="font-manrope text-[17px] font-semibold text-qss-primary">{job.title}</span>
					{job.firstSeen === today && <Tag tone="teal">Yeni</Tag>}
					{applied && <Tag tone="violet">Müraciət edilib</Tag>}
				</div>
				<p className="text-sm text-qss-inputText">
					{job.company} · {job.city} · {job.level} · <span className="text-qss-primary">{salaryLabel(job)}</span>
				</p>
				<div className="flex flex-wrap gap-1.5 mt-1">
					<SourceTag job={job} />
					<Tag>{job.sector}</Tag>
					{job.skills.slice(0, 4).map(s => (
						<Tag key={s} tone={m.matchedSkills.includes(s) ? 'teal' : 'gray'}>
							{m.matchedSkills.includes(s) ? '✓ ' : ''}
							{s}
						</Tag>
					))}
				</div>
			</div>
			<span className="hidden sm:block text-sm text-qss-secondary font-semibold whitespace-nowrap">{matchWord(m.score)} →</span>
		</button>
	)
}

const JobDrawer = ({ x, onClose, appliedId, email, name }: { x: Scored; onClose: () => void; appliedId?: string; email: string; name: string }) => {
	const [full, setFull] = useState<Job>(x.job)
	const [letter, setLetter] = useState<string | null>(null)
	const { job, m } = { job: full, m: x.m }
	useEffect(() => {
		fetchJob(x.job.id)
			.then(setFull)
			.catch(() => {})
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [x.job.id])

	const apply = () => {
		const a = makeApplication(full, m, 'manual', email, name)
		saveCareer(email, cur => ({ applications: [a, ...cur.applications] }))
		setLetter(a.coverLetter)
		if (full.external && full.url) window.open(full.url, '_blank', 'noopener')
	}

	return (
		<div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={job.title}>
			<button type="button" aria-label="Bağla" className="flex-1 bg-black/40" onClick={onClose} />
			<div className="w-full max-w-[720px] bg-qss-background h-full overflow-y-auto shadow-2xl">
				<div className="sticky top-0 z-10 bg-white border-b border-qss-border px-6 py-4 flex items-center gap-4">
					<MatchRing value={m.score} size={60} />
					<div className="flex-1 min-w-0">
						<p className="font-manrope text-lg font-bold text-qss-primary leading-snug">{job.title}</p>
						<p className="text-sm text-qss-inputText truncate">
							{job.company} · {job.city}
						</p>
					</div>
					<button type="button" onClick={onClose} className="text-2xl leading-none text-qss-inputText px-2" aria-label="Bağla">
						×
					</button>
				</div>
				<div className="p-6 flex flex-col gap-6">
					<div className="flex flex-wrap gap-2">
						<SourceTag job={job} />
						<Tag>{job.sector}</Tag>
						<Tag>{job.level}</Tag>
						<Tag>{job.employment}</Tag>
						<Tag tone="teal">{salaryLabel(job)}</Tag>
						<Tag>Dərc: {formatDate(job.posted)}</Tag>
					</div>

					<section className={`${card} p-5 flex flex-col gap-4`}>
						<p className="font-semibold text-qss-primary">Niyə {m.score}% uyğundur</p>
						<div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
							{m.parts.map(p => (
								<div key={p.key} className="flex items-center gap-3 text-sm">
									<span className="w-36 text-qss-inputText">{p.label}</span>
									<span className="flex-1 h-2 rounded-full bg-qss-base-400 overflow-hidden">
										<span className="block h-full bg-qss-secondary rounded-full" style={{ width: `${Math.round(p.value * 100)}%` }} />
									</span>
								</div>
							))}
						</div>
						{m.reasons.length > 0 && <Bullets items={m.reasons} />}
						{m.gaps.length > 0 && <Bullets items={m.gaps} tone="amber" />}
						<p className="text-xs text-qss-base-300">Etibarlılıq: {m.confidence} — nə qədər çox test və profil məlumatı olsa, hesablama o qədər dəqiqdir.</p>
					</section>

					{job.summary && <p className="text-qss-inputText leading-relaxed">{job.summary}</p>}
					{job.responsibilities?.length ? (
						<section className="flex flex-col gap-2">
							<p className="font-semibold text-qss-primary">Vəzifələr</p>
							<Bullets items={job.responsibilities} />
						</section>
					) : null}
					{job.requirements?.length ? (
						<section className="flex flex-col gap-2">
							<p className="font-semibold text-qss-primary">Tələblər</p>
							<Bullets items={job.requirements} />
						</section>
					) : null}
					{job.description && !job.responsibilities?.length && (
						<section className="flex flex-col gap-2">
							<p className="font-semibold text-qss-primary">Elanın mətni (orijinal dildə)</p>
							<p className="text-sm text-qss-inputText leading-relaxed whitespace-pre-line">{job.description.slice(0, 1800)}{job.description.length > 1800 ? '…' : ''}</p>
						</section>
					)}
					{job.process?.length ? (
						<p className="text-sm text-qss-inputText">
							<b className="text-qss-primary">Seçim prosesi: </b>
							{job.process.join(' → ')}
						</p>
					) : null}
					{job.companyAbout && (
						<p className="text-sm text-qss-inputText">
							<b className="text-qss-primary">Şirkət haqqında: </b>
							{job.companyAbout}
						</p>
					)}

					{letter ? (
						<section className={`${card} p-5 flex flex-col gap-3`}>
							<p className="font-semibold text-qss-secondary">Müraciət qeydə alındı ✓</p>
							<p className="text-sm text-qss-inputText">
								{job.external
									? 'Orijinal elan yeni pəncərədə açıldı. Bu məktubu kopyalayıb işəgötürənin formasına yapışdırın, sonra “Müraciətlərim”də “Göndərdim” düyməsini basın.'
									: 'Nümunə vakansiya: müraciət sistem daxilində göndərildi, işəgötürənin cavabı “Müraciətlərim” bölməsində görünəcək.'}
							</p>
							<CopyBox text={letter} label="Məktubu kopyala" />
							<Link to="/profile/jobs/applications" className={btnText}>
								Müraciətlərimə keç →
							</Link>
						</section>
					) : (
						<div className="flex flex-wrap gap-3 items-center sticky bottom-0 bg-qss-background py-4">
							{appliedId ? (
								<>
									<Tag tone="violet">Bu vakansiyaya müraciət etmisiniz</Tag>
									<Link to={`/profile/jobs/coach/${appliedId}`} className={btnGhost}>
										Müsahibəyə hazırlıq
									</Link>
								</>
							) : viewingAs() ? (
								<span className="text-sm text-[#8A5300] bg-[#FFF4E0] rounded-xl px-4 py-2.5">Demo profil: buradan müraciət edilmir — hazır müraciətlərə “Müraciətlərim”də baxın.</span>
							) : (
								<button type="button" className={btnPrimary} onClick={apply}>
									{job.external ? 'Müraciət paketini hazırla və elanı aç' : 'Müraciət et'}
								</button>
							)}
							{job.external && job.url && (
								<a href={job.url} target="_blank" rel="noopener noreferrer" className={btnText}>
									Orijinal elan ({job.source}) ↗
								</a>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Vacancies
