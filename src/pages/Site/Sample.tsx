// Public sample reports: a demo persona's real, computed reports, viewable without signing in.
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { ensureSeeded, getPersona, personaUser } from 'demo/viewAs'
import { AVATARS } from 'demo/avatars'
import { PERSONAS } from 'demo/personas'
import { useResults } from 'tests/store'
import TalentFull from 'report/reports/TalentFull'
import IqFull from 'report/reports/IqFull'
import MbtiFull from 'report/reports/MbtiFull'
import CombinedFull from 'report/reports/CombinedFull'
import { Big5Full, EnneaFull, RiasecFull } from 'report/reports/PersonalityFull'
import Certificates from 'pages/Tests/Certificates'
import { CDS } from 'report/design'
import { btnMain, SiteFooter, SiteHeader } from './Chrome'
import { SAMPLE_LABEL, SAMPLE_PEOPLE } from './Home'

const svg = (s?: string) => (s ? `data:image/svg+xml;utf8,${encodeURIComponent(s)}` : '')
const KINDS = ['full', 'talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec', 'certificates'] as const
type Kind = (typeof KINDS)[number]

const Body = ({ kind }: { kind: Kind }) => {
	const { user } = useAuth()
	const r = useResults(user?.email)
	const done: Record<string, boolean> = { talent: !!r.talent, iq: !!r.iq, mbti: !!r.mbti, ennea: !!r.ennea, big5: !!r.big5, riasec: !!r.riasec }
	const missing = <p className="text-cds-muted bg-white rounded-xl p-6">Bu demo profil bu testi keçməyib. Yuxarıdan başqa hesabat seçin.</p>
	switch (kind) {
		case 'full':
			return <CombinedFull r={r} done={done} />
		case 'talent':
			return r.talent ? <TalentFull t={r.talent} /> : missing
		case 'iq':
			return r.iq ? <IqFull r={r.iq} /> : missing
		case 'mbti':
			return r.mbti ? <MbtiFull m={r.mbti} /> : missing
		case 'ennea':
			return r.ennea ? <EnneaFull e={r.ennea} /> : missing
		case 'big5':
			return r.big5 ? <Big5Full b={r.big5} /> : missing
		case 'riasec':
			return r.riasec ? <RiasecFull r={r.riasec} /> : missing
		case 'certificates':
			return <Certificates />
	}
}

const Sample = () => {
	const { pid = SAMPLE_PEOPLE[0], kind = 'full' } = useParams()
	const navigate = useNavigate()
	const { setSampleUser } = useAuth()
	const [ready, setReady] = useState(false)
	const p = getPersona(pid)
	const k = (KINDS as readonly string[]).includes(kind) ? (kind as Kind) : 'full'

	useEffect(() => {
		let live = true
		setReady(false)
		if (!p) return
		ensureSeeded(p.id).then(() => {
			if (!live) return
			setSampleUser(personaUser(p))
			setReady(true)
		})
		return () => {
			live = false
			setSampleUser(null) // leaving the sample: the site shows the real user again
		}
	}, [pid])

	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [pid, kind])

	if (!p)
		return (
			<div className="min-h-screen bg-white">
				<SiteHeader />
				<p className="max-w-[900px] mx-auto px-6 py-20">Nümunə tapılmadı.</p>
			</div>
		)

	return (
		<div className="min-h-screen bg-[#EEF3F3] font-inter">
			<SiteHeader />
			<div className="text-white" style={{ background: CDS.gradient }}>
				<div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center gap-4">
					<img src={svg(AVATARS[p.id])} alt="" className="w-14 h-14 rounded-full bg-white/20" />
					<div className="flex-1 min-w-[200px]">
						<p className="text-[12px] uppercase tracking-[0.16em] text-white/70">Nümunə hesabat · uydurma demo profil</p>
						<p className="font-manrope text-2xl font-bold">
							{p.first_name} {p.last_name}
						</p>
						<p className="text-white/80 text-[14px]">{p.headline}</p>
					</div>
					<select
						aria-label="Başqa demo profil"
						value={p.id}
						onChange={e => navigate(`/sample/${e.target.value}/${k}`)}
						className="rounded-full bg-white border border-white px-4 py-2 text-cds-heading max-w-full"
					>
						{PERSONAS.map(x => (
							<option key={x.id} value={x.id}>
								{x.first_name} {x.last_name} — {x.occupation}
							</option>
						))}
					</select>
				</div>
				<nav className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-4 flex gap-2 overflow-x-auto" aria-label="Hesabat növü">
					{KINDS.map(x => (
						<Link key={x} to={`/sample/${p.id}/${x}`} className={`shrink-0 rounded-full px-4 py-1.5 text-[14px] ${x === k ? 'bg-white text-cds-heading font-semibold' : 'bg-white/10 hover:bg-white/20'}`}>
							{SAMPLE_LABEL[x]}
						</Link>
					))}
				</nav>
			</div>
			<main className="max-w-[1100px] mx-auto px-3 sm:px-6 py-8 flex flex-col items-center gap-6">
				{ready ? <Body kind={k} /> : <p className="text-cds-muted py-20">Nümunə hesabat hazırlanır…</p>}
				<div className="w-full max-w-[860px] rounded-3xl bg-white p-8 flex flex-wrap items-center justify-between gap-4 shadow-sm">
					<div>
						<p className="font-manrope text-xl font-bold text-cds-heading">Öz hesabatınızı alın</p>
						<p className="text-cds-muted text-[15px]">Testlər və hesabatlar pulsuzdur. Eyni formatda hesabat sizin adınıza hazırlanacaq.</p>
					</div>
					<Link to="/register" className={btnMain}>
						Pulsuz başla →
					</Link>
				</div>
			</main>
			<SiteFooter />
		</div>
	)
}

export default Sample
