import { Link } from 'react-router-dom'
import { getPersona, stopViewAs, viewingAs } from 'demo/viewAs'
import { useResults } from 'tests/store'

// Shown on every page while viewing as a persona.
export const ViewAsBanner = () => {
	const p = getPersona(viewingAs())
	const photo = useResults(p?.email || '').photo
	if (!p) return null
	const links: [string, string][] = [
		['Panel', '/profile'],
		['Talant hesabatı', '/profile/report'],
		['Tam hesabat', '/profile/full-report'],
		['Sertifikatlar', '/profile/certificates'],
		['CV', '/profile/cv'],
		['Vakansiyalar', '/profile/jobs'],
		['Müraciətlər', '/profile/jobs/applications'],
		['Koç', '/profile/jobs/coach'],
		['Suallar bələdçisi', '/profile/guide']
	]
	return (
		<div className="sticky top-0 lg:top-0 z-40 bg-[#1F2A37] text-white px-4 lg:px-8 py-2.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
			{photo && <img src={photo} alt="" className="w-8 h-8 rounded-full bg-white/10" />}
			<span>
				<b>{p.first_name} {p.last_name}</b> kimi baxırsınız <span className="text-white/60">(demo profil)</span>
			</span>
			<nav className="flex flex-wrap gap-1.5" aria-label="Demo profil keçidləri">
				{links.map(([label, to]) => (
					<Link key={to} to={to} className="rounded-full bg-white/10 hover:bg-white/20 px-3 py-1 text-[13px]">
						{label}
					</Link>
				))}
			</nav>
			<span className="flex-1" />
			<Link to="/profile/personas" className="rounded-full border border-white/30 px-3 py-1 text-[13px] hover:bg-white/10">
				Başqa profil
			</Link>
			<button type="button" className="rounded-full bg-qss-gradientBottom text-[#00404C] font-semibold px-3 py-1 text-[13px]" onClick={() => stopViewAs('#/profile')}>
				Öz hesabıma qayıt
			</button>
		</div>
	)
}

export default ViewAsBanner
