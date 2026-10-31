import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PERSONAS } from 'demo/personas'
import { AVATARS } from 'demo/avatars'
import { buildPersona } from 'demo/build'
import { personaEmail, startViewAs, viewingAs } from 'demo/viewAs'
import { ageFrom } from 'tests/store'
import { TESTS } from 'tests/registry'
import { MBTI_TYPES } from 'tests/mbti/data'
import { ENNEA_TYPES } from 'tests/enneagram/data'
import { currentStatus, STATUS_LABEL } from 'jobs/status'
import { PLANS } from 'jobs/billing'
import { btnGhost, btnPrimary, card, Page, Tag } from 'pages/Jobs/ui'

const svgUrl = (svg?: string) => (svg ? `data:image/svg+xml;utf8,${encodeURIComponent(svg)}` : '')

const Personas = () => {
	const [filter, setFilter] = useState('')
	const [open, setOpen] = useState<string | null>(null)
	const [busy, setBusy] = useState<string | null>(null)
	const current = viewingAs()
	const built = useMemo(
		() =>
			PERSONAS.map(spec => {
				const p = { ...spec, email: personaEmail(spec.id) }
				return { p, ...buildPersona(p) }
			}),
		[]
	)
	const shown = built.filter(({ p }) => !filter || `${p.first_name} ${p.last_name} ${p.headline} ${p.city} ${p.occupation} ${p.mbti}`.toLowerCase().includes(filter.toLowerCase()))
	const go = async (id: string) => {
		setBusy(id)
		await startViewAs(id, true)
	}

	return (
		<Page
			eyebrow="Yalnız sizin üçün · Demo"
			title="Demo profillər"
			subtitle={
				<>
					20 uydurma insan — fərqli yaş, təhsil, iş təcrübəsi və test nəticələri ilə. <b className="text-qss-primary">“Kimi bax”</b> düyməsini basın: sayt həmin şəxsin gözü ilə açılacaq — panel, hesabatlar, sertifikatlar, CV, vakansiyalar, müraciətlər, koç və TalentBot onun məlumatları ilə işləyəcək. Nəticələr saytın öz hesablama qaydaları ilə, şəxsin cavablarından yaradılıb. Heç bir vakansiyaya real müraciət edilmir.
				</>
			}
			actions={
				<Link to="/profile/guide" className={btnGhost}>
					Suallar bələdçisi
				</Link>
			}
		>
			<input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Ad, şəhər, peşə və ya tip (məs. INTJ) ilə axtar" aria-label="Axtarış" className="bg-white border border-qss-border rounded-[14px] px-4 py-3 outline-none text-qss-primary max-w-lg" />
			<div className="grid gap-4 md:grid-cols-2">
				{shown.map(({ p, results: r, career: c }) => {
					const age = ageFrom(p.birth_date)
					const isOpen = open === p.id
					const statuses = c.applications.map(a => currentStatus(a))
					return (
						<article key={p.id} className={`${card} p-5 flex flex-col gap-4 ${current === p.id ? 'border-2 border-qss-secondary' : ''}`}>
							<div className="flex gap-4 items-start">
								<img src={svgUrl(AVATARS[p.id])} alt="" className="w-20 h-20 rounded-full shrink-0 bg-qss-transbg" />
								<div className="flex-1 min-w-0">
									<p className="font-manrope text-lg font-bold text-qss-primary leading-snug">
										{p.first_name} {p.last_name}
									</p>
									<p className="text-sm text-qss-inputText">
										{age} yaş · {p.gender === 'Female' ? 'Qadın' : 'Kişi'} · {p.city} · {p.occupation}
									</p>
									<p className="text-sm text-qss-primary mt-1 leading-snug">{p.headline}</p>
								</div>
							</div>
							<div className="flex flex-wrap gap-1.5">
								{TESTS.map(t => (
									<Tag key={t.id} tone={p.completed.includes(t.id) ? 'teal' : 'gray'}>
										{p.completed.includes(t.id) ? '✓ ' : ''}
										{t.short}
									</Tag>
								))}
							</div>
							<div className="grid grid-cols-3 gap-2 text-center">
								{[
									['IQ', r.iq ? String(r.iq.iq) : '—'],
									['16 tip', r.mbti?.code || '—'],
									['Enneaqram', r.ennea ? `${r.ennea.type}w${r.ennea.wing}` : '—'],
									['Karyera kodu', r.riasec?.code || '—'],
									['Plan', p.plan === 'none' ? 'Pulsuz' : PLANS[p.plan].name.replace('Avto-müraciət ', '')],
									['Müraciət', String(c.applications.length)]
								].map(([k, v]) => (
									<div key={k} className="rounded-xl bg-qss-background py-2">
										<p className="text-[11px] text-qss-inputText">{k}</p>
										<p className="font-manrope font-bold text-qss-primary">{v}</p>
									</div>
								))}
							</div>
							{isOpen && (
								<div className="flex flex-col gap-3 text-sm text-qss-inputText border-t border-qss-border pt-4">
									<p className="leading-relaxed">{p.story}</p>
									<p>
										<b className="text-qss-primary">Təhsil: </b>
										{p.education.length ? p.education.map(e => `${e.level}, ${e.specialty} — ${e.university} (${e.start.slice(0, 4)}–${e.end.slice(0, 4)})`).join('; ') : 'Orta məktəb'}
									</p>
									<p>
										<b className="text-qss-primary">İş: </b>
										{p.work.length ? p.work.map(w => `${w.profession}, ${w.company}`).join('; ') : 'İş təcrübəsi yoxdur'}
									</p>
									<p>
										<b className="text-qss-primary">Dillər: </b>
										{p.languages.map(l => `${l.language} (${l.level}${l.certificate ? `, ${l.certificate}` : ''})`).join(', ')}
									</p>
									<p>
										<b className="text-qss-primary">Proqramlar: </b>
										{p.programs.map(x => `${x.name} (${x.level})`).join(', ') || '—'}
									</p>
									{r.mbti && (
										<p>
											<b className="text-qss-primary">Şəxsiyyət: </b>
											{r.mbti.code} — {MBTI_TYPES[r.mbti.code]?.name}
											{r.ennea ? `; Enneaqram ${r.ennea.type} — ${ENNEA_TYPES[r.ennea.type]?.name}` : ''}
										</p>
									)}
									{c.applications.length > 0 && (
										<p>
											<b className="text-qss-primary">Müraciətlər: </b>
											{c.applications.map((a, i) => `${a.job.title} (${STATUS_LABEL[statuses[i]]})`).join(', ')}
										</p>
									)}
								</div>
							)}
							<div className="flex flex-wrap items-center gap-3 mt-auto">
								<button type="button" className={btnPrimary} onClick={() => go(p.id)} disabled={!!busy}>
									{busy === p.id ? 'Açılır…' : current === p.id ? 'Yenidən aç' : 'Kimi bax'}
								</button>
								<button type="button" className="text-[14px] text-qss-inputText hover:text-qss-primary" onClick={() => setOpen(isOpen ? null : p.id)}>
									{isOpen ? 'Gizlət' : 'Daxil etdiyi məlumatlar'}
								</button>
							</div>
						</article>
					)
				})}
			</div>
			<p className="text-xs text-qss-base-300">Bütün profillər uydurmadır; şəkillər illüstrasiyadır (DiceBear “Avataaars”, Pablo Stanley). Telefon nömrələri, şirkət adları və e-poçtlar real deyil.</p>
		</Page>
	)
}

export default Personas
