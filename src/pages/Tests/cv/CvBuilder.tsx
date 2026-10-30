import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { axiosPrivateInstance } from 'axioss'
import { ageFrom, loadResults, saveResults } from 'tests/store'
import { MBTI_TYPES } from 'tests/mbti/data'
import { useTestStatus } from 'components/AppShell/AppShell'
import { IconLock } from 'components/AppShell/icons'
import TestHeader from '../components/TestHeader'
import { useExport } from '../components/useExport'
import { ExportBar } from '../iq/IqTest'

interface Entry {
	title: string
	org: string
	period: string
	details: string
}
interface Cv {
	name: string
	title: string
	email: string
	phone: string
	city: string
	link: string
	summary: string
	experience: Entry[]
	education: Entry[]
	skills: string[]
	languages: string[]
	achievements: string[]
}

const LABELS = {
	az: { profile: 'Haqqımda', experience: 'İş təcrübəsi', education: 'Təhsil', skills: 'Bacarıqlar', languages: 'Dillər', achievements: 'Nailiyyətlər', contact: 'Əlaqə', present: 'hazırda' },
	en: { profile: 'Profile', experience: 'Experience', education: 'Education', skills: 'Skills', languages: 'Languages', achievements: 'Achievements', contact: 'Contact', present: 'present' }
}
type Lang = keyof typeof LABELS
type Template = 'classic' | 'modern' | 'minimal'

const ans = (v: any) => (typeof v === 'string' ? v : v?.answer || '')
const period = (start?: string, end?: string, present = 'hazırda') => [start, end && end !== 'currently working' ? end : start ? present : ''].filter(Boolean).join(' – ')

// Builds a first draft from the talent-test answers (stored locally or fetched from the backend).
async function draftCv(user: any, results: any): Promise<Cv> {
	const stages: any[] = results.talent?.answers || []
	const st = (name: string) => stages.find(s => s?.name === name)?.formData
	let edu = st('orta-texniki-ve-ali-tehsil-suallari')?.education
	let work = st('is-tecrubesi-substage')?.experiences
	let programs = st('proqram-bilikleri-substage')?.programSkills
	if (!edu || !work || !programs) {
		try {
			const { data } = await axiosPrivateInstance.get('user/get-cv-info/')
			edu = edu || data?.secondary_education_questions?.formData?.education
			work = work || data?.work_experience_questions?.formData?.experiences
			programs = programs || data?.program_questions?.formData?.programSkills
		} catch {
			/* no stored answers on the server */
		}
	}
	const langs = st('dil-bilikleri-substage')?.languageSkills || []
	const special = st('xususi-bacariqlar-substage')
	const olymp = st('olimpiada-suallari')
	const experience: Entry[] = (work || []).map((w: any) => ({
		title: w.profession || '',
		org: w.company || '',
		period: period(w.startDate, w.currentWorking ? '' : w.endDate),
		details: [ans(w.workingActivityForm), ans(w.degreeOfProfes)].filter(Boolean).join(' · ')
	}))
	const education: Entry[] = (edu || []).map((e: any) => ({
		title: [ans(e.tehsil), ans(e.specialty)].filter(Boolean).join(' — '),
		org: [e.university, ans(e.country)].filter(Boolean).join(', '),
		period: period(e.date?.start, e.date?.end),
		details: ''
	}))
	const skills: string[] = (programs || []).flatMap((p: any) => (p.whichLevel || []).map((l: any) => [l.name, ans(l.value)].filter(Boolean).join(' — ')))
	;(special?.skills || []).forEach((s: any) => skills.push(ans(s) || s?.name || ''))
	const languages: string[] = langs.map((l: any) => [ans(l.language), ans(l.langLevel) || ans(l.engLangCert)].filter(Boolean).join(' — '))
	const achievements: string[] = []
	if (olymp && ans(olymp.wonOlympics) && ans(olymp.wonOlympics) !== 'Xeyr') achievements.push([ans(olymp.subjectOlympiad), ans(olymp.highestOlympiad), ans(olymp.rankOlympiad)].filter(Boolean).join(' olimpiadası, '))
	if (results.iq) achievements.push(`Talent Score IQ testi: ${results.iq.iq} (${results.iq.band}), sertifikat ${results.iq.certificateId}`)
	const title = experience[0]?.title || (education[0]?.title.split(' — ')[1] ?? '') || ''
	const mbti = results.mbti ? MBTI_TYPES[results.mbti.code] : undefined
	const summaryParts = [
		title ? `${title} istiqamətində inkişaf edən mütəxəssis.` : 'Məqsədyönlü və öyrənməyə açıq mütəxəssis.',
		experience.length ? `${experience.length} iş yerində təcrübə qazanmışam.` : '',
		languages.length ? `${languages.length} dildə ünsiyyət qururam.` : '',
		mbti ? `Güclü tərəflərim: ${mbti.strengths.slice(0, 2).join(', ').toLowerCase()}.` : ''
	]
	return {
		name: `${user?.first_name || ''} ${user?.last_name || ''}`.trim(),
		title,
		email: user?.email || '',
		phone: '',
		city: '',
		link: '',
		summary: summaryParts.filter(Boolean).join(' '),
		experience,
		education,
		skills: skills.filter(Boolean),
		languages: languages.filter(Boolean),
		achievements
	}
}

const CvBuilder = () => {
	const { user } = useAuth()
	const { done, results } = useTestStatus()
	const [cv, setCv] = useState<Cv | null>(null)
	const [template, setTemplate] = useState<Template>('modern')
	const [lang, setLang] = useState<Lang>('az')
	const ref = useRef<HTMLDivElement>(null)
	const { print, png } = useExport(ref, 'CV')

	useEffect(() => {
		if (!done.talent || !user?.email) return
		const saved = loadResults(user.email).cv
		if (saved) setCv(saved)
		else draftCv(user, loadResults(user.email)).then(setCv)
	}, [done.talent, user?.email])

	useEffect(() => {
		if (cv && user?.email) saveResults(user.email, { cv })
	}, [cv])

	if (!done.talent)
		return (
			<div className="px-6 py-10 lg:px-12">
				<div className="max-w-[1120px] mx-auto flex flex-col gap-8">
					<TestHeader eyebrow="Nəticələr" title="CV" />
					<div className="rounded-2xl bg-white border border-qss-border p-8 max-w-2xl flex gap-4">
						<span className="text-qss-secondary mt-1">
							<IconLock />
						</span>
						<div>
							<p className="font-semibold text-qss-primary">CV bölməsi talant testindən sonra açılır.</p>
							<p className="text-sm text-qss-inputText mt-2">Təhsil, təcrübə, dil və proqram bilikləriniz testdən avtomatik CV-yə köçürüləcək.</p>
							<Link to="/profile/tests/talent" className="inline-block mt-4 text-[14px] text-white py-[9px] px-[22px] rounded-[25px] bg-qss-secondary">
								Talant testinə keç
							</Link>
						</div>
					</div>
				</div>
			</div>
		)

	if (!cv) return <p className="p-10 text-qss-inputText">CV hazırlanır…</p>

	const set = <K extends keyof Cv>(k: K, v: Cv[K]) => setCv({ ...cv, [k]: v })
	const L = LABELS[lang]
	const photo = results.photo

	return (
		<div className="px-6 py-10 lg:px-12">
			<div className="max-w-[1280px] mx-auto flex flex-col gap-6">
				<TestHeader eyebrow="Nəticələr" title="CV" subtitle="Talant testindəki cavablarınızdan hazırlanıb. Soldan redaktə edin, şablon seçin və PDF və ya şəkil kimi yükləyin." />
				<div className="flex flex-wrap items-center gap-3">
					<div className="flex gap-1 bg-qss-input rounded-[25px] p-1" role="tablist" aria-label="Şablon">
						{(
							[
								['modern', 'Müasir'],
								['classic', 'Klassik'],
								['minimal', 'Minimal']
							] as [Template, string][]
						).map(([id, label]) => (
							<button key={id} type="button" role="tab" aria-selected={template === id} onClick={() => setTemplate(id)} className={`px-4 py-1.5 rounded-[25px] text-sm ${template === id ? 'bg-qss-primary text-white' : 'text-qss-primary'}`}>
								{label}
							</button>
						))}
					</div>
					<div className="flex gap-1 bg-qss-input rounded-[25px] p-1" aria-label="Başlıqların dili">
						{(['az', 'en'] as Lang[]).map(l => (
							<button key={l} type="button" onClick={() => setLang(l)} className={`px-3 py-1.5 rounded-[25px] text-sm uppercase ${lang === l ? 'bg-qss-primary text-white' : 'text-qss-primary'}`}>
								{l}
							</button>
						))}
					</div>
					<ExportBar onPrint={print} onPng={png} />
					<button type="button" onClick={() => draftCv(user, loadResults(user.email)).then(setCv)} className="text-sm text-qss-inputText hover:text-qss-primary">
						Testdən yenidən doldur
					</button>
				</div>

				<div className="grid xl:grid-cols-[420px_1fr] gap-6 items-start">
					<form className="rounded-2xl bg-white border border-qss-border p-5 flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
						<Field id="cv-name" label="Ad, soyad" value={cv.name} onChange={v => set('name', v)} />
						<Field id="cv-title" label="Vəzifə / istiqamət" value={cv.title} onChange={v => set('title', v)} />
						<div className="grid grid-cols-2 gap-3">
							<Field id="cv-email" label="E-poçt" value={cv.email} onChange={v => set('email', v)} />
							<Field id="cv-phone" label="Telefon" value={cv.phone} onChange={v => set('phone', v)} />
							<Field id="cv-city" label="Şəhər" value={cv.city} onChange={v => set('city', v)} />
							<Field id="cv-link" label="LinkedIn / sayt" value={cv.link} onChange={v => set('link', v)} />
						</div>
						<Field id="cv-summary" label={L.profile} value={cv.summary} onChange={v => set('summary', v)} multiline />
						<EntryList label={L.experience} items={cv.experience} onChange={v => set('experience', v)} />
						<EntryList label={L.education} items={cv.education} onChange={v => set('education', v)} />
						<Field id="cv-skills" label={`${L.skills} (hər sətirdə biri)`} value={cv.skills.join('\n')} onChange={v => set('skills', v.split('\n'))} multiline />
						<Field id="cv-langs" label={`${L.languages} (hər sətirdə biri)`} value={cv.languages.join('\n')} onChange={v => set('languages', v.split('\n'))} multiline />
						<Field id="cv-ach" label={`${L.achievements} (hər sətirdə biri)`} value={cv.achievements.join('\n')} onChange={v => set('achievements', v.split('\n'))} multiline />
					</form>

					<div className="overflow-x-auto">
						<div ref={ref} className="bg-white shadow-md mx-auto" style={{ width: 794, minHeight: 1123 }}>
							<CvDoc cv={{ ...cv, skills: cv.skills.filter(Boolean), languages: cv.languages.filter(Boolean), achievements: cv.achievements.filter(Boolean) }} photo={photo} template={template} L={L} age={ageFrom(user?.birth_date)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Field = ({ id, label, value, onChange, multiline }: { id: string; label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) => (
	<label htmlFor={id} className="flex flex-col gap-1.5 text-xs font-semibold text-qss-inputText">
		{label}
		{multiline ? (
			<textarea id={id} value={value} onChange={e => onChange(e.target.value)} rows={4} className="bg-qss-input rounded-xl px-4 py-2.5 text-sm font-normal text-qss-primary outline-none focus:ring-2 focus:ring-qss-secondary" />
		) : (
			<input id={id} value={value} onChange={e => onChange(e.target.value)} className="bg-qss-input rounded-[25px] px-4 py-2.5 text-sm font-normal text-qss-primary outline-none focus:ring-2 focus:ring-qss-secondary" />
		)}
	</label>
)

const EntryList = ({ label, items, onChange }: { label: string; items: Entry[]; onChange: (v: Entry[]) => void }) => (
	<fieldset className="flex flex-col gap-3">
		<legend className="text-xs font-semibold text-qss-inputText mb-1.5">{label}</legend>
		{items.map((it, i) => (
			<div key={i} className="rounded-xl border border-qss-border p-3 grid grid-cols-2 gap-2">
				{(['title', 'org', 'period', 'details'] as (keyof Entry)[]).map(k => (
					<input
						key={k}
						aria-label={`${label} ${i + 1} — ${k}`}
						placeholder={{ title: 'Vəzifə / ixtisas', org: 'Şirkət / universitet', period: 'Müddət', details: 'Qeyd' }[k]}
						value={it[k]}
						onChange={e => onChange(items.map((x, j) => (j === i ? { ...x, [k]: e.target.value } : x)))}
						className="bg-qss-input rounded-lg px-3 py-2 text-sm text-qss-primary outline-none focus:ring-2 focus:ring-qss-secondary"
					/>
				))}
				<button type="button" onClick={() => onChange(items.filter((_, j) => j !== i))} className="col-span-2 text-xs text-[#9B1C1C] text-left">
					Sil
				</button>
			</div>
		))}
		<button type="button" onClick={() => onChange([...items, { title: '', org: '', period: '', details: '' }])} className="self-start text-sm text-qss-secondary font-semibold">
			+ Əlavə et
		</button>
	</fieldset>
)

// ---------- templates (A4 at 96 dpi: 794 × 1123) ----------
interface DocProps {
	cv: Cv
	photo?: string
	template: Template
	L: (typeof LABELS)['az']
	age: number | null
}

const CvDoc = ({ cv, photo, template, L }: DocProps) => {
	const contact = [cv.email, cv.phone, cv.city, cv.link].filter(Boolean)
	const entries = (list: Entry[], accent: string) =>
		list.map((e, i) => (
			<div key={i} style={{ marginBottom: 14 }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
					<b style={{ fontSize: 14, color: '#111' }}>{e.title}</b>
					<span style={{ fontSize: 12, color: '#666', whiteSpace: 'nowrap' }}>{e.period}</span>
				</div>
				<div style={{ fontSize: 13, color: accent }}>{e.org}</div>
				{e.details && <div style={{ fontSize: 12, color: '#444', marginTop: 2 }}>{e.details}</div>}
			</div>
		))
	const H = ({ children, color, line }: { children: string; color: string; line?: string }) => (
		<div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.6, textTransform: 'uppercase', color, borderBottom: line ? `2px solid ${line}` : undefined, paddingBottom: 4, margin: '18px 0 10px' }}>{children}</div>
	)

	if (template === 'modern')
		return (
			<div style={{ display: 'flex', minHeight: 1123, fontFamily: 'Inter, Arial, sans-serif' }}>
				<div style={{ width: 250, background: '#103557', color: '#fff', padding: '36px 24px', boxSizing: 'border-box' }}>
					{photo && <img src={photo} alt="" style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', border: '4px solid #08D0B0', display: 'block', margin: '0 auto 22px' }} />}
					<H color="#08D0B0">{L.contact}</H>
					{contact.map(c => (
						<div key={c} style={{ fontSize: 12, marginBottom: 6, wordBreak: 'break-word' }}>
							{c}
						</div>
					))}
					{cv.skills.length > 0 && <H color="#08D0B0">{L.skills}</H>}
					{cv.skills.map(s => (
						<div key={s} style={{ fontSize: 12, marginBottom: 6 }}>
							{s}
						</div>
					))}
					{cv.languages.length > 0 && <H color="#08D0B0">{L.languages}</H>}
					{cv.languages.map(s => (
						<div key={s} style={{ fontSize: 12, marginBottom: 6 }}>
							{s}
						</div>
					))}
				</div>
				<div style={{ flex: 1, padding: '44px 40px', boxSizing: 'border-box' }}>
					<div style={{ fontFamily: 'Manrope, Inter, sans-serif', fontSize: 34, fontWeight: 800, color: '#103557', lineHeight: 1.1 }}>{cv.name}</div>
					<div style={{ fontSize: 17, color: '#038477', marginTop: 6, fontWeight: 600 }}>{cv.title}</div>
					<H color="#103557" line="#E1EEED">
						{L.profile}
					</H>
					<div style={{ fontSize: 13, color: '#333', lineHeight: 1.6 }}>{cv.summary}</div>
					{cv.experience.length > 0 && (
						<H color="#103557" line="#E1EEED">
							{L.experience}
						</H>
					)}
					{entries(cv.experience, '#038477')}
					{cv.education.length > 0 && (
						<H color="#103557" line="#E1EEED">
							{L.education}
						</H>
					)}
					{entries(cv.education, '#038477')}
					{cv.achievements.length > 0 && (
						<H color="#103557" line="#E1EEED">
							{L.achievements}
						</H>
					)}
					{cv.achievements.map(a => (
						<div key={a} style={{ fontSize: 13, color: '#333', marginBottom: 6 }}>
							• {a}
						</div>
					))}
				</div>
			</div>
		)

	if (template === 'classic')
		return (
			<div style={{ padding: '48px 56px', fontFamily: 'Georgia, "Times New Roman", serif', color: '#222', minHeight: 1123, boxSizing: 'border-box' }}>
				<div style={{ textAlign: 'center', borderBottom: '2px solid #222', paddingBottom: 16 }}>
					<div style={{ fontSize: 32, letterSpacing: 2 }}>{cv.name.toUpperCase()}</div>
					<div style={{ fontSize: 16, fontStyle: 'italic', marginTop: 4 }}>{cv.title}</div>
					<div style={{ fontSize: 12, marginTop: 8, color: '#444' }}>{contact.join('  ·  ')}</div>
				</div>
				<H color="#222">{L.profile}</H>
				<div style={{ fontSize: 13, lineHeight: 1.6 }}>{cv.summary}</div>
				{cv.experience.length > 0 && <H color="#222">{L.experience}</H>}
				{entries(cv.experience, '#444')}
				{cv.education.length > 0 && <H color="#222">{L.education}</H>}
				{entries(cv.education, '#444')}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
					<div>
						{cv.skills.length > 0 && <H color="#222">{L.skills}</H>}
						{cv.skills.map(s => (
							<div key={s} style={{ fontSize: 13, marginBottom: 4 }}>
								• {s}
							</div>
						))}
					</div>
					<div>
						{cv.languages.length > 0 && <H color="#222">{L.languages}</H>}
						{cv.languages.map(s => (
							<div key={s} style={{ fontSize: 13, marginBottom: 4 }}>
								• {s}
							</div>
						))}
					</div>
				</div>
				{cv.achievements.length > 0 && <H color="#222">{L.achievements}</H>}
				{cv.achievements.map(a => (
					<div key={a} style={{ fontSize: 13, marginBottom: 4 }}>
						• {a}
					</div>
				))}
			</div>
		)

	return (
		<div style={{ padding: '56px 64px', fontFamily: 'Inter, Arial, sans-serif', color: '#1F2A37', minHeight: 1123, boxSizing: 'border-box' }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
				{photo && <img src={photo} alt="" style={{ width: 92, height: 92, borderRadius: 12, objectFit: 'cover' }} />}
				<div>
					<div style={{ fontSize: 30, fontWeight: 300, letterSpacing: 0.5 }}>{cv.name}</div>
					<div style={{ fontSize: 15, color: '#038477', marginTop: 4 }}>{cv.title}</div>
					<div style={{ fontSize: 12, color: '#666', marginTop: 6 }}>{contact.join('   |   ')}</div>
				</div>
			</div>
			<div style={{ fontSize: 13, lineHeight: 1.7, marginTop: 24, color: '#333' }}>{cv.summary}</div>
			{cv.experience.length > 0 && <H color="#038477">{L.experience}</H>}
			{entries(cv.experience, '#666')}
			{cv.education.length > 0 && <H color="#038477">{L.education}</H>}
			{entries(cv.education, '#666')}
			{cv.skills.length > 0 && <H color="#038477">{L.skills}</H>}
			<div style={{ fontSize: 13, lineHeight: 1.8 }}>{cv.skills.join('  ·  ')}</div>
			{cv.languages.length > 0 && <H color="#038477">{L.languages}</H>}
			<div style={{ fontSize: 13, lineHeight: 1.8 }}>{cv.languages.join('  ·  ')}</div>
			{cv.achievements.length > 0 && <H color="#038477">{L.achievements}</H>}
			{cv.achievements.map(a => (
				<div key={a} style={{ fontSize: 13, marginBottom: 4 }}>
					— {a}
				</div>
			))}
		</div>
	)
}

export default CvBuilder
