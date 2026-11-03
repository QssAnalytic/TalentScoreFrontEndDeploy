// Public site header and footer (AssessFirst-style layout, CDS-ES colours).
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import darklogo from 'assets/darklogo.svg'
import useAuth from 'hooks/useAuth'
import { TESTS } from 'tests/registry'
import { IconBig5, IconBrain, IconCompass, IconEnnea, IconHex, IconTalent } from 'components/AppShell/icons'

export const TEST_ICON: Record<string, () => JSX.Element> = { talent: IconTalent, iq: IconBrain, mbti: IconCompass, ennea: IconEnnea, big5: IconBig5, riasec: IconHex }
export const btnMain = 'whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:brightness-110 bg-[linear-gradient(90deg,#0B5F5F,#0A9384)]'
export const btnLine = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold border-2 border-cds-teal text-cds-heading hover:bg-[#E9F5F3] transition'

const NAV: [string, string][] = [
	['Necə işləyir', 'how'],
	['Nümunə hesabatlar', 'samples'],
	['Karyera', 'career'],
	['Qiymətlər', 'pricing'],
	['Suallar', 'faq']
]

// Scroll to a landing-page section (the app uses hash routing, so plain #anchors would be read as routes).
export function useSection() {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	return (id: string) => {
		if (pathname !== '/') return navigate('/', { state: { scrollTo: id } })
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}

const SectionLink = ({ id, className, children, onDone }: { id: string; className?: string; children: React.ReactNode; onDone?: () => void }) => {
	const go = useSection()
	return (
		<button
			type="button"
			className={`text-left ${className || ''}`}
			onClick={() => {
				go(id)
				onDone?.()
			}}
		>
			{children}
		</button>
	)
}

export const SiteHeader = () => {
	const { accessToken } = useAuth()
	const [menu, setMenu] = useState(false)
	const [open, setOpen] = useState(false)
	return (
		<header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-cds-line">
			<div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[72px] flex items-center gap-6">
				<Link to="/" aria-label="Talent Score — ana səhifə">
					<img src={darklogo} alt="Talent Score" className="h-6 sm:h-7" />
				</Link>
				<nav className="hidden lg:flex items-center gap-0.5 text-[15px] text-cds-ink whitespace-nowrap" aria-label="Əsas menyu">
					<div className="relative" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
						<button type="button" className="px-3 py-2 rounded-lg hover:bg-cds-paper flex items-center gap-1" aria-expanded={menu} onClick={() => setMenu(v => !v)}>
							Testlər <span aria-hidden="true">▾</span>
						</button>
						{menu && (
							<div className="absolute left-0 top-full pt-2 w-[640px]">
								<div className="rounded-2xl bg-white shadow-xl border border-cds-line p-4 grid grid-cols-2 gap-2">
									{TESTS.map(t => {
										const I = TEST_ICON[t.id]
										return (
											<SectionLink key={t.id} id={`test-${t.id}`} onDone={() => setMenu(false)} className="flex gap-3 rounded-xl p-3 hover:bg-cds-paper">
												<span className="w-10 h-10 rounded-xl grid place-items-center bg-[#E9F5F3] text-cds-teal shrink-0">
													<I />
												</span>
												<span>
													<span className="block font-semibold text-cds-heading">{t.title}</span>
													<span className="block text-[13px] text-cds-muted leading-snug line-clamp-2">{t.measures}</span>
												</span>
											</SectionLink>
										)
									})}
								</div>
							</div>
						)}
					</div>
					{NAV.map(([l, h]) => (
						<SectionLink key={h} id={h} className="px-3 py-2 rounded-lg hover:bg-cds-paper">
							{l}
						</SectionLink>
					))}
				</nav>
				<div className="ml-auto flex items-center gap-2 sm:gap-3">
					<Link to="/verify" className="hidden xl:inline whitespace-nowrap text-[14px] text-cds-muted hover:text-cds-heading">
						Sertifikatı yoxla
					</Link>
					{accessToken ? (
						<Link to="/profile" className={btnMain}>
							Profilim
						</Link>
					) : (
						<>
							<Link to="/login" className="hidden sm:inline whitespace-nowrap text-[15px] font-semibold text-cds-heading px-3 py-2">
								Daxil ol
							</Link>
							<Link to="/register" className={btnMain}>
								Pulsuz başla
							</Link>
						</>
					)}
					<button type="button" className="lg:hidden p-2 text-cds-heading" aria-label="Menyu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
							<path d="M4 7h16M4 12h16M4 17h16" />
						</svg>
					</button>
				</div>
			</div>
			{open && (
				<div className="lg:hidden border-t border-cds-line bg-white px-4 py-4 flex flex-col gap-1">
					{TESTS.map(t => (
						<SectionLink key={t.id} id={`test-${t.id}`} onDone={() => setOpen(false)} className="py-2 text-cds-heading">
							{t.title}
						</SectionLink>
					))}
					<hr className="my-2 border-cds-line" />
					{NAV.map(([l, h]) => (
						<SectionLink key={h} id={h} onDone={() => setOpen(false)} className="py-2 text-cds-ink">
							{l}
						</SectionLink>
					))}
					<Link to="/login" className="py-2 font-semibold text-cds-heading">
						Daxil ol
					</Link>
				</div>
			)}
		</header>
	)
}

export const SiteFooter = () => (
	<footer className="bg-[#0A2E33] text-white/80">
		<div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
			<div className="flex flex-col gap-4">
				<p className="font-manrope text-2xl font-extrabold tracking-[0.12em] text-white">
					TALENT SC<span className="text-cds-mint">O</span>RE
				</p>
				<p className="text-[14px] leading-relaxed max-w-sm">Süni intellekt əsaslı talant qiymətləndirmə sistemi: testlər, ətraflı hesabatlar, sertifikatlar, CV və hər gün sizə uyğun vakansiyalar.</p>
			</div>
			<div className="flex flex-col gap-2 text-[14px]">
				<p className="text-white font-semibold mb-1">Testlər</p>
				{TESTS.map(t => (
					<SectionLink key={t.id} id={`test-${t.id}`} className="hover:text-white">
						{t.short}
					</SectionLink>
				))}
			</div>
			<div className="flex flex-col gap-2 text-[14px]">
				<p className="text-white font-semibold mb-1">Platforma</p>
				<SectionLink id="samples" className="hover:text-white">
					Nümunə hesabatlar
				</SectionLink>
				<SectionLink id="career" className="hover:text-white">
					Vakansiyalar və avto-müraciət
				</SectionLink>
				<Link to="/verify" className="hover:text-white">
					Sertifikatı yoxla
				</Link>
				<SectionLink id="pricing" className="hover:text-white">
					Qiymətlər
				</SectionLink>
			</div>
			<div className="flex flex-col gap-2 text-[14px]">
				<p className="text-white font-semibold mb-1">Hesab</p>
				<Link to="/register" className="hover:text-white">
					Qeydiyyat
				</Link>
				<Link to="/login" className="hover:text-white">
					Daxil ol
				</Link>
				<SectionLink id="faq" className="hover:text-white">
					Tez-tez verilən suallar
				</SectionLink>
			</div>
		</div>
		<div className="border-t border-white/10">
			<div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-5 flex flex-wrap gap-3 justify-between text-[12px] text-white/50">
				<span>© {new Date().getFullYear()} Talent Score</span>
				<span>Nəticələr məlumat xarakterlidir və peşəkar psixoloji və ya tibbi qiymətləndirməni əvəz etmir.</span>
			</div>
		</div>
	</footer>
)
