import { ReactNode } from 'react'
import NavBar from 'pages/Landing/components/NavBar'
import Footer from 'pages/Landing/components/Footer'

interface Props {
	title: string
	subtitle?: string
	badge?: string
	children: ReactNode
}

// Shared frame for the new screens: same NavBar, teal header band and Footer
// the existing Profile page uses.
const PageShell = ({ title, subtitle, badge, children }: Props) => {
	return (
		<>
			<div className="w-full z-10 relative px-[220px]">
				<NavBar />
			</div>
			<div className="bg-qss-transbg py-12 flex justify-center">
				<div className="w-[1090px] flex flex-col gap-3">
					{badge && (
						<span className="self-start text-xs font-semibold uppercase tracking-wider text-qss-alternative bg-white rounded-[25px] px-4 py-1 border border-qss-base-400">
							{badge}
						</span>
					)}
					<h1 className="font-manrope text-3xl font-bold text-qss-primary">{title}</h1>
					{subtitle && <p className="text-qss-inputText max-w-3xl leading-relaxed">{subtitle}</p>}
				</div>
			</div>
			<div className="relative w-full py-12">
				<div className="w-[1090px] m-auto flex flex-col gap-10">{children}</div>
			</div>
			<Footer />
		</>
	)
}

export default PageShell
