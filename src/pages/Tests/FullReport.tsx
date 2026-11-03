import CombinedFull from 'report/reports/CombinedFull'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { ageFrom, formatDate, talentPercent } from 'tests/store'
import { TESTS, talentLabel } from 'tests/registry'
import { rankCombined } from 'tests/careers'
import { MBTI_TYPES } from 'tests/mbti/data'
import { ENNEA_TYPES } from 'tests/enneagram/data'
import { DOMAIN_LABEL } from 'tests/iq/scoring'
import { domainTraining } from 'tests/iq/report'
import { IqDomain } from 'tests/types'
import { useTestStatus } from 'components/AppShell/AppShell'
import { IconCheck } from 'components/AppShell/icons'
import TestHeader from './components/TestHeader'
import { IqGauge, ScoreBar } from './components/Charts'
import { useExport } from './components/useExport'
import { ExportBar } from './iq/IqTest'
import { EnneaDiagram } from './enneagram/EnneaTest'
import { Bullets, Chips, Section } from './mbti/MbtiTest'
import ShareButton from 'share/ShareButton'
import { FullShareCard } from 'share/cards'
import { BIG5_DOMAINS, BIG5_ORDER } from 'tests/big5/data'
import { big5Level } from 'tests/big5/scoring'
import { RIASEC_TYPES } from 'tests/riasec/data'
import { RiasecType } from 'tests/types'
import { RiasecHexagon } from './riasec/RiasecTest'

const genderAz = (g?: string) => (g === 'Male' ? 'Kişi' : g === 'Female' ? 'Qadın' : '')

const FullReport = () => {
	const { user } = useAuth()
	const { done, results: r, count, total } = useTestStatus()
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, 'Talent-Score-tam-hesabat')
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	const age = ageFrom(user?.birth_date)
	const mbti = r.mbti ? MBTI_TYPES[r.mbti.code] : undefined
	const ennea = r.ennea ? ENNEA_TYPES[r.ennea.type] : undefined
	const careers = rankCombined(r, 8)

	const chain = (
		<ol className="grid sm:grid-cols-3 lg:grid-cols-6 gap-3">
			{TESTS.map(t => (
				<li key={t.id}>
					<Link to={t.path} className={`flex items-center gap-3 rounded-xl border px-4 py-3 h-full ${done[t.id] ? 'border-qss-base-400 bg-qss-transbg' : 'border-qss-border bg-white hover:border-qss-secondary'}`}>
						<span className={`w-7 h-7 shrink-0 rounded-full grid place-items-center text-xs font-bold ${done[t.id] ? 'bg-qss-secondary text-white' : 'bg-qss-input text-qss-inputText'}`}>{done[t.id] ? <IconCheck /> : t.number}</span>
						<span className="text-sm text-qss-primary leading-snug">{t.short}</span>
					</Link>
				</li>
			))}
		</ol>
	)

	if (count < 2)
		return (
			<div className="px-6 py-10 lg:px-12">
				<div className="max-w-[1120px] mx-auto flex flex-col gap-8">
					<TestHeader eyebrow="Nəticələr" title="Tam hesabat" subtitle="Bütün testlərin nəticələrini birləşdirən şəxsi hesabat: intellekt, şəxsiyyət, motivasiya və bacarıqlar bir yerdə, ümumi karyera tövsiyələri ilə." />
					{chain}
					<div className="rounded-2xl bg-white border border-qss-border p-8 max-w-2xl">
						<p className="font-semibold text-qss-primary">Tam hesabat üçün ən azı 2 test tamamlayın.</p>
						<p className="text-sm text-qss-inputText mt-2">Hazırda tamamlanıb: {count} / {total}. Nə qədər çox test keçsəniz, tövsiyələr bir o qədər dəqiq olur.</p>
					</div>
				</div>
			</div>
		)

	const strengths = [
		...(r.iq
			? (Object.keys(r.iq.domains) as IqDomain[])
					.filter(d => r.iq!.domains[d].index >= 110)
					.map(d => `${DOMAIN_LABEL[d]} təfəkkür (indeks ${r.iq!.domains[d].index})`)
			: []),
		...(mbti?.strengths.slice(0, 3) || []),
		...(ennea?.strengths.slice(0, 3) || []),
		...(r.riasec ? RIASEC_TYPES[r.riasec.code[0] as RiasecType].strengths.slice(0, 2) : [])
	]
	const growth = [
		...(r.iq
			? (() => {
					const d = (Object.keys(r.iq.domains) as IqDomain[]).sort((a, b) => r.iq!.domains[a].index - r.iq!.domains[b].index)[0]
					return [`${DOMAIN_LABEL[d]} bacarıqları: ${domainTraining(d)[0]}`]
			  })()
			: []),
		...(mbti?.growth.slice(0, 2) || []),
		...(ennea?.growthTips.slice(0, 2) || []),
		...(r.big5
			? (() => {
					const d = (['C', 'E', 'A', 'O'] as const).reduce((a, b) => (r.big5!.domains[b] < r.big5!.domains[a] ? b : a))
					return BIG5_DOMAINS[d].levels[big5Level(r.big5.domains[d])].tips.slice(0, 1)
			  })()
			: [])
	]

	return (
		<div className="px-4 sm:px-6 py-10 lg:px-12">
			<div className="max-w-[1120px] mx-auto flex flex-col gap-8">
				<TestHeader
					eyebrow="Nəticələr"
					title="Tam hesabat"
					subtitle={`${count} testin nəticəsi birləşdirilib.${count < total ? ' Qalan testləri keçsəniz hesabat avtomatik yenilənəcək.' : ''}`}
					actions={<ShareButton title="Tam profilim" text="Talent Score tam profil hesabatım" card={<FullShareCard />} />}
				/>
				{chain}
				<CombinedFull r={r} done={done} />
			</div>
		</div>
	)
}

const Stat = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
	<div className="rounded-xl bg-white/10 px-4 py-3">
		<p className="text-xs text-white/70">{label}</p>
		<p className="font-manrope text-2xl font-extrabold">{value}</p>
		{sub && <p className="text-xs text-qss-gradientBottom">{sub}</p>}
	</div>
)

export default FullReport
