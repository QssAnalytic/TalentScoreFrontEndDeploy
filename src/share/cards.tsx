import { ReactNode } from 'react'
import useAuth from 'hooks/useAuth'
import { ageFrom, formatDate, talentPercent, useResults } from 'tests/store'
import { MBTI_TYPES } from 'tests/mbti/data'
import { ENNEA_TYPES } from 'tests/enneagram/data'
import { DOMAIN_LABEL } from 'tests/iq/scoring'
import { talentLabel } from 'tests/registry'
import { IqDomain } from 'tests/types'
import { BIG5_DOMAINS, BIG5_ORDER } from 'tests/big5/data'
import { RIASEC_ORDER, RIASEC_TYPES } from 'tests/riasec/data'

// 1200×630 cards (the Open Graph size) rendered to PNG for sharing.
// Inline styles only, so html2canvas reproduces them exactly.
const C = {
	navy: '#103557',
	deep: '#00404C',
	teal: '#038477',
	mint: '#08D0B0',
	pale: '#EBF5F4',
	ink: '#1F2A37',
	muted: '#5B6B79',
	white: '#FFFFFF'
}

function usePerson() {
	const { user } = useAuth()
	const r = useResults(user?.email)
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	return { name, age: ageFrom(user?.birth_date), photo: r.photo, r }
}

interface FrameProps {
	eyebrow: string
	headline: ReactNode
	sub: string
	children?: ReactNode
	footer?: string
}

export const CardFrame = ({ eyebrow, headline, sub, children, footer }: FrameProps) => {
	const { name, age, photo } = usePerson()
	const initials = name
		.split(' ')
		.map(p => p[0])
		.join('')
		.slice(0, 2)
		.toUpperCase()
	return (
		<div style={{ width: 1200, height: 630, display: 'flex', fontFamily: 'Manrope, Inter, Arial, sans-serif', background: C.white, overflow: 'hidden' }}>
			<div
				style={{
					width: 420,
					height: 630,
					background: `linear-gradient(160deg, ${C.deep} 0%, ${C.navy} 55%, ${C.teal} 100%)`,
					color: C.white,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					padding: 40,
					boxSizing: 'border-box'
				}}
			>
				<div style={{ position: 'absolute', top: 36, left: 40, fontSize: 22, fontWeight: 800, letterSpacing: 4 }}>
					TALENT SC<span style={{ color: C.mint }}>O</span>RE
				</div>
				<div style={{ width: 210, height: 210, borderRadius: '50%', padding: 6, background: `linear-gradient(0deg, ${C.mint}, ${C.deep})` }}>
					{photo ? (
						<img src={photo} alt="" style={{ width: 198, height: 198, borderRadius: '50%', objectFit: 'cover', display: 'block', background: C.white }} />
					) : (
						<div style={{ width: 198, height: 198, borderRadius: '50%', background: C.pale, color: C.navy, fontSize: 72, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{initials || '★'}</div>
					)}
				</div>
				<div style={{ marginTop: 28, fontSize: 34, fontWeight: 800, textAlign: 'center', lineHeight: 1.15 }}>{name || 'Talent Score istifadəçisi'}</div>
				{age != null && <div style={{ marginTop: 8, fontSize: 20, opacity: 0.75 }}>{age} yaş</div>}
				<div style={{ position: 'absolute', bottom: 34, left: 40, right: 40, fontSize: 15, opacity: 0.6, textAlign: 'center' }}>Süni intellekt əsaslı qiymətləndirmə sistemi</div>
			</div>
			<div style={{ flex: 1, padding: '54px 60px 40px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', background: `linear-gradient(180deg, ${C.white} 0%, ${C.pale} 100%)` }}>
				<div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 3, color: C.teal, textTransform: 'uppercase' }}>{eyebrow}</div>
				<div style={{ marginTop: 14, color: C.navy, lineHeight: 1.02 }}>{headline}</div>
				<div style={{ marginTop: 14, fontSize: 24, color: C.ink, lineHeight: 1.35, maxWidth: 680 }}>{sub}</div>
				<div style={{ marginTop: 26, flex: 1 }}>{children}</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, color: C.muted, borderTop: `2px solid ${C.pale}`, paddingTop: 16 }}>
					<span>{footer}</span>
					<span style={{ fontWeight: 700, color: C.teal }}>talentscore · nəticəni yoxla</span>
				</div>
			</div>
		</div>
	)
}

const Bar = ({ label, value, max = 100, display }: { label: string; value: number; max?: number; display?: string }) => (
	<div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
		<div style={{ width: 210, fontSize: 19, color: C.ink }}>{label}</div>
		<div style={{ flex: 1, height: 14, borderRadius: 7, background: '#D6E8E5' }}>
			<div style={{ width: `${Math.max(3, Math.min(100, (value / max) * 100))}%`, height: 14, borderRadius: 7, background: `linear-gradient(90deg, ${C.teal}, ${C.mint})` }} />
		</div>
		<div style={{ width: 70, textAlign: 'right', fontSize: 19, fontWeight: 800, color: C.navy }}>{display ?? Math.round(value)}</div>
	</div>
)

export const IqShareCard = () => {
	const { r } = usePerson()
	const iq = r.iq
	if (!iq) return null
	return (
		<CardFrame
			eyebrow="IQ testi nəticəsi"
			headline={
				<span style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
					<span style={{ fontSize: 132, fontWeight: 800 }}>{iq.iq}</span>
					<span style={{ fontSize: 34, fontWeight: 700, color: C.teal }}>{iq.band}</span>
				</span>
			}
			sub={`İştirakçıların təxminən ${Math.round(iq.percentile)}%-dən yüksək nəticə`}
			footer={`${formatDate(iq.date)} · Sertifikat ${iq.certificateId}`}
		>
			{(Object.keys(iq.domains) as IqDomain[]).map(d => (
				<Bar key={d} label={DOMAIN_LABEL[d]} value={iq.domains[d].index - 55} max={95} display={String(iq.domains[d].index)} />
			))}
		</CardFrame>
	)
}

export const MbtiShareCard = () => {
	const { r } = usePerson()
	const m = r.mbti
	if (!m) return null
	const p = MBTI_TYPES[m.code]
	const poleName: Record<string, string> = { E: 'Ekstravert', I: 'İntrovert', S: 'Hissiyyatçı', N: 'İntuitiv', T: 'Düşünən', F: 'Hiss edən', J: 'Planlı', P: 'Çevik' }
	return (
		<CardFrame
			eyebrow="Şəxsiyyət tipi"
			headline={
				<span style={{ display: 'flex', alignItems: 'baseline', gap: 22 }}>
					<span style={{ fontSize: 124, fontWeight: 800, letterSpacing: 6 }}>{m.code}</span>
					<span style={{ fontSize: 38, fontWeight: 700, color: C.teal }}>{p?.name}</span>
				</span>
			}
			sub={p?.tagline || ''}
			footer={formatDate(m.date)}
		>
			{Object.values(m.axes).map(a => (
				<Bar key={a.pole} label={poleName[a.pole] || a.pole} value={a.percent} display={`${a.percent}%`} />
			))}
		</CardFrame>
	)
}

export const EnneaShareCard = () => {
	const { r } = usePerson()
	const e = r.ennea
	if (!e) return null
	const p = ENNEA_TYPES[e.type]
	const top = Object.entries(e.scores)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 3)
	return (
		<CardFrame
			eyebrow="Enneaqram tipi"
			headline={
				<span style={{ display: 'flex', alignItems: 'baseline', gap: 22 }}>
					<span style={{ fontSize: 118, fontWeight: 800 }}>
						{e.type}
						<span style={{ fontSize: 56, color: C.teal }}>w{e.wing}</span>
					</span>
					<span style={{ fontSize: 40, fontWeight: 700, color: C.teal }}>{p?.name}</span>
				</span>
			}
			sub={p?.tagline || ''}
			footer={formatDate(e.date)}
		>
			{top.map(([t, s]) => (
				<Bar key={t} label={`${t}. ${ENNEA_TYPES[Number(t)]?.name || ''}`} value={s} display={`${s}%`} />
			))}
		</CardFrame>
	)
}

export const Big5ShareCard = () => {
	const { r } = usePerson()
	const b = r.big5
	if (!b) return null
	const top = [...BIG5_ORDER].filter(d => d !== 'N').sort((x, y) => b.domains[y] - b.domains[x])[0]
	return (
		<CardFrame
			eyebrow="Big Five şəxsiyyət profili"
			headline={<span style={{ fontSize: 64, fontWeight: 800 }}>{BIG5_DOMAINS[top].highLabel}</span>}
			sub={`Ən güclü ölçü: ${BIG5_DOMAINS[top].name} (${b.domains[top]}/100)`}
			footer={formatDate(b.date)}
		>
			{BIG5_ORDER.map(d => (
				<Bar key={d} label={BIG5_DOMAINS[d].name} value={b.domains[d]} />
			))}
		</CardFrame>
	)
}

export const RiasecShareCard = () => {
	const { r } = usePerson()
	const x = r.riasec
	if (!x) return null
	return (
		<CardFrame
			eyebrow="Karyera maraqları kodu"
			headline={
				<span style={{ display: 'flex', alignItems: 'baseline', gap: 22 }}>
					<span style={{ fontSize: 124, fontWeight: 800, letterSpacing: 8 }}>{x.code}</span>
				</span>
			}
			sub={x.code
				.split('')
				.map(t => RIASEC_TYPES[t as keyof typeof RIASEC_TYPES].name)
				.join(' · ')}
			footer={formatDate(x.date)}
		>
			{[...RIASEC_ORDER]
				.sort((a, b) => x.scores[b] - x.scores[a])
				.slice(0, 4)
				.map(t => (
					<Bar key={t} label={RIASEC_TYPES[t].name} value={x.scores[t]} />
				))}
		</CardFrame>
	)
}

export const TalentShareCard = () => {
	const { r } = usePerson()
	const t = r.talent
	if (!t) return null
	const vals = Object.values(t.data)
	const overall = Math.round(vals.reduce((a, v) => a + talentPercent(v.score), 0) / Math.max(1, vals.length))
	return (
		<CardFrame
			eyebrow="Talant qiymətləndirməsi"
			headline={
				<span style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
					<span style={{ fontSize: 124, fontWeight: 800 }}>{overall}%</span>
					<span style={{ fontSize: 32, fontWeight: 700, color: C.teal }}>ümumi göstərici</span>
				</span>
			}
			sub="Yaşıdlarla müqayisədə təhsil, dil, bacarıq və təcrübə profili"
			footer={formatDate(t.date)}
		>
			{vals.slice(0, 4).map(v => (
				<Bar key={v.text} label={talentLabel(v.text)} value={talentPercent(v.score)} display={`${talentPercent(v.score)}%`} />
			))}
		</CardFrame>
	)
}

export const FullShareCard = () => {
	const { r } = usePerson()
	const items: [string, string][] = []
	if (r.iq) items.push(['IQ', `${r.iq.iq} · ${r.iq.band}`])
	if (r.mbti) items.push(['Şəxsiyyət tipi', `${r.mbti.code} · ${MBTI_TYPES[r.mbti.code]?.name || ''}`])
	if (r.ennea) items.push(['Enneaqram', `${r.ennea.type}w${r.ennea.wing} · ${ENNEA_TYPES[r.ennea.type]?.name || ''}`])
	if (r.talent) {
		const vals = Object.values(r.talent.data)
		items.push(['Talant göstəricisi', `${Math.round(vals.reduce((a, v) => a + talentPercent(v.score), 0) / Math.max(1, vals.length))}%`])
	}
	return (
		<CardFrame
			eyebrow="Tam profil hesabatı"
			headline={<span style={{ fontSize: 64, fontWeight: 800 }}>Bacarıq və şəxsiyyət profili</span>}
			sub={`${items.length} test üzrə birləşdirilmiş nəticə`}
			footer={formatDate(new Date().toISOString())}
		>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
				{items.map(([k, v]) => (
					<div key={k} style={{ background: C.white, border: `2px solid ${C.pale}`, borderRadius: 18, padding: '16px 22px' }}>
						<div style={{ fontSize: 17, color: C.muted }}>{k}</div>
						<div style={{ fontSize: 30, fontWeight: 800, color: C.navy, marginTop: 4 }}>{v}</div>
					</div>
				))}
			</div>
		</CardFrame>
	)
}
