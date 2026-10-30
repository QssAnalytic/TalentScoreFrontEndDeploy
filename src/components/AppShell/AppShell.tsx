import { createContext, useContext, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import useLogout from 'hooks/useLogout'
import { useResults } from 'tests/store'
import { TESTS, TestId } from 'tests/registry'
import { useCareer } from 'jobs/store'
import { currentStatus, isInvitation } from 'jobs/status'
import { useAutoApply } from 'jobs/useAutoApply'
import { ReactComponent as LogoWhite } from 'assets/logo.svg'
import {
	IconAward,
	IconBig5,
	IconBolt,
	IconBrain,
	IconBriefcase,
	IconCoach,
	IconHex,
	IconSend,
	IconUser,
	IconCheck,
	IconCompass,
	IconCv,
	IconEnnea,
	IconHome,
	IconLock,
	IconLogout,
	IconMenu,
	IconPlan,
	IconReport,
	IconShield,
	IconTalent
} from './icons'

// Pages rendered inside the shell hide the old top NavBar and Footer.
export const ShellContext = createContext(false)
export const useInShell = () => useContext(ShellContext)

const testIcon: Record<TestId, () => JSX.Element> = {
	talent: IconTalent,
	iq: IconBrain,
	mbti: IconCompass,
	ennea: IconEnnea,
	big5: IconBig5,
	riasec: IconHex
}

export function useTestStatus() {
	const { user } = useAuth()
	const results = useResults(user?.email)
	const done: Record<TestId, boolean> = {
		talent: !!user?.report_test || !!results.talent,
		iq: !!results.iq,
		mbti: !!results.mbti,
		ennea: !!results.ennea,
		big5: !!results.big5,
		riasec: !!results.riasec
	}
	const started: Record<string, boolean> = Object.fromEntries(Object.keys(results.progress || {}).map(k => [k, true]))
	return { done, started, results, count: Object.values(done).filter(Boolean).length, total: TESTS.length }
}

const linkBase = 'flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] leading-snug transition-colors duration-200'
const linkClass = ({ isActive }: { isActive: boolean }) =>
	`${linkBase} ${isActive ? 'bg-white/10 text-white' : 'text-white/75 hover:text-white hover:bg-white/5'}`

const SectionLabel = ({ children }: { children: string }) => (
	<p className="px-3 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">{children}</p>
)

const AppShell = () => {
	const { user } = useAuth()
	const { done, count, total, results } = useTestStatus()
	const career = useCareer(user?.email)
	const invites = career.applications.filter(a => isInvitation(currentStatus(a)) && !a.replySent).length
	useAutoApply()
	const [open, setOpen] = useState(false)
	const logout = useLogout()
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const photo = results.photo || (user?.profile_photo && !String(user.profile_photo).includes('null') ? user.profile_photo : '')
	const initials = `${user?.first_name?.[0] || ''}${user?.last_name?.[0] || ''}`.toUpperCase()

	const onLogout = async () => {
		try {
			await logout()
		} catch {
			/* signed out locally anyway */
		}
		localStorage.removeItem('access_token')
		navigate('/')
		window.location.reload()
	}

	const nav = (
		<nav className="flex flex-col h-full" aria-label="Əsas menyu">
			<div className="px-5 pt-7 pb-4">
				<NavLink to="/profile" onClick={() => setOpen(false)} aria-label="Talent Score — panel">
					<LogoWhite className="w-40 h-6" />
				</NavLink>
				<p className="text-white/50 text-xs mt-1.5">Süni intellekt sistemi</p>
			</div>

			<div className="flex-1 overflow-y-auto px-3 pb-4">
				<NavLink to="/profile" end className={linkClass} onClick={() => setOpen(false)}>
					<IconHome />
					Panel
				</NavLink>

				<SectionLabel>Testlər</SectionLabel>
				<div className="flex flex-col gap-1">
					{TESTS.map(t => {
						const Icon = testIcon[t.id]
						const active = pathname.startsWith(t.path) || (t.id === 'talent' && pathname.startsWith('/profile/stages'))
						return (
							<NavLink
								key={t.id}
								to={t.path}
								onClick={() => setOpen(false)}
								className={() => linkClass({ isActive: active })}
							>
								<span className="grid place-items-center w-7 h-7 shrink-0 rounded-lg bg-white/10 text-qss-gradientBottom">
									<Icon />
								</span>
								<span className="flex-1 min-w-0">{t.title}</span>
								{done[t.id] && (
									<span className="text-qss-gradientBottom" aria-label="Tamamlanıb">
										<IconCheck />
									</span>
								)}
							</NavLink>
						)
					})}
				</div>

				<SectionLabel>Karyera</SectionLabel>
				<div className="flex flex-col gap-1">
					<NavLink to="/profile/jobs" end className={linkClass} onClick={() => setOpen(false)}>
						<IconBriefcase />
						<span className="flex-1">Vakansiyalar</span>
						<span className="text-[10px] rounded-full bg-qss-gradientBottom/20 text-qss-gradientBottom px-2 py-0.5">hər gün</span>
					</NavLink>
					<NavLink to="/profile/jobs/applications" className={linkClass} onClick={() => setOpen(false)}>
						<IconSend />
						<span className="flex-1">Müraciətlərim</span>
						{invites > 0 && <span className="text-[11px] rounded-full bg-[#F59E0B] text-white px-2 py-0.5 tabular-nums">{invites}</span>}
						{!invites && career.applications.length > 0 && <span className="text-[11px] rounded-full bg-white/10 px-2 py-0.5 tabular-nums">{career.applications.length}</span>}
					</NavLink>
					<NavLink to="/profile/jobs/auto" className={linkClass} onClick={() => setOpen(false)}>
						<IconBolt />
						<span className="flex-1">Avto-müraciət</span>
						{career.subscription?.active && <span className="w-2 h-2 rounded-full bg-qss-gradientBottom" aria-label="Aktiv" />}
					</NavLink>
					<NavLink to="/profile/jobs/coach" className={linkClass} onClick={() => setOpen(false)}>
						<IconCoach />
						Karyera koçu
					</NavLink>
					<NavLink to="/profile/jobs/profile" className={linkClass} onClick={() => setOpen(false)}>
						<IconUser />
						Karyera profili
					</NavLink>
				</div>

				<SectionLabel>Nəticələr</SectionLabel>
				<div className="flex flex-col gap-1">
					<NavLink to="/profile/full-report" className={linkClass} onClick={() => setOpen(false)}>
						<IconReport />
						<span className="flex-1">Tam hesabat</span>
						<span className="text-[11px] rounded-full bg-white/10 px-2 py-0.5 tabular-nums">{count}/{total}</span>
					</NavLink>
					<NavLink to="/profile/certificates" className={linkClass} onClick={() => setOpen(false)}>
						<IconAward />
						Sertifikatlar
					</NavLink>
					<NavLink to="/profile/cv" className={linkClass} onClick={() => setOpen(false)}>
						<IconCv />
						<span className="flex-1">CV</span>
						{!done.talent && (
							<span className="text-white/50" aria-label="Talant testindən sonra açılır">
								<IconLock />
							</span>
						)}
					</NavLink>
				</div>

				<SectionLabel>Hesab</SectionLabel>
				<div className="flex flex-col gap-1">
					<NavLink to="/profile/plans" className={linkClass} onClick={() => setOpen(false)}>
						<IconPlan />
						Planlar və ödənişlər
					</NavLink>
					<NavLink to="/profile/verification" className={linkClass} onClick={() => setOpen(false)}>
						<IconShield />
						Sənədlərin təsdiqi
					</NavLink>
				</div>
			</div>

			<div className="border-t border-white/10 px-4 py-4 flex items-center gap-3">
				{photo ? (
					<img src={photo} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-qss-gradientBottom" />
				) : (
					<span className="w-10 h-10 rounded-full grid place-items-center bg-qss-secondary text-white text-sm font-semibold">{initials || '?'}</span>
				)}
				<div className="flex-1 min-w-0">
					<p className="text-white text-sm font-semibold truncate">
						{user?.first_name} {user?.last_name}
					</p>
					<p className="text-white/50 text-xs truncate">{user?.email}</p>
				</div>
				<button type="button" onClick={onLogout} className="text-white/60 hover:text-white p-2 rounded-lg" aria-label="Çıxış">
					<IconLogout />
				</button>
			</div>
		</nav>
	)

	return (
		<ShellContext.Provider value={true}>
			<div className="min-h-screen bg-qss-background lg:pl-[288px]">
				<aside className="hidden lg:block fixed inset-y-0 left-0 w-[288px] bg-qss-primary z-30">{nav}</aside>

				<div className="lg:hidden sticky top-0 z-30 bg-qss-primary flex items-center justify-between px-4 py-3">
					<LogoWhite className="w-32 h-5" />
					<button type="button" onClick={() => setOpen(true)} className="text-white p-1" aria-label="Menyunu aç">
						<IconMenu />
					</button>
				</div>
				{open && (
					<div className="lg:hidden fixed inset-0 z-40 flex">
						<div className="w-[288px] max-w-[85vw] bg-qss-primary">{nav}</div>
						<button type="button" className="flex-1 bg-black/40" aria-label="Menyunu bağla" onClick={() => setOpen(false)} />
					</div>
				)}

				<main className="min-w-0">
					<Outlet />
				</main>
			</div>
		</ShellContext.Provider>
	)
}

export default AppShell
