import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { loadResults } from 'tests/store'
import { draftCv } from '../Tests/cv/CvBuilder'
import { saveCareer, useCareer } from 'jobs/store'
import { JobProfile as Profile } from 'jobs/types'
import { btnGhost, btnPrimary, card, Page } from './ui'

const SECTORS = ['İT və proqramlaşdırma', 'Data və analitika', 'Maliyyə və bank', 'Satış və marketinq', 'Təhsil', 'Səhiyyə', 'Mühəndislik və istehsal', 'Logistika', 'İnsan resursları', 'Dizayn və media', 'Hüquq', 'Turizm və xidmət', 'Dövlət və QHT', 'Neft-qaz və enerji', 'Kənd təsərrüfatı', 'Müştəri xidmətləri']
const CITIES = ['Bakı', 'Sumqayıt', 'Gəncə', 'Lənkəran', 'Şəki', 'Mingəçevir']
const EDU = ['Orta', 'Peşə', 'Bakalavr', 'Magistr', 'Doktorantura']
const field = 'bg-qss-input rounded-[14px] px-4 py-3 outline-none text-qss-primary focus:ring-2 focus:ring-qss-secondary/40'

const lines = (s: string) =>
	s
		.split(/\n|,/)
		.map(x => x.trim())
		.filter(Boolean)

// Years of experience from CV periods like "2019 – 2022" or "2021 – hazırda".
function yearsFrom(periods: string[]) {
	const now = new Date().getFullYear()
	let total = 0
	periods.forEach(p => {
		const ys = (p.match(/(19|20)\d{2}/g) || []).map(Number)
		if (!ys.length) return
		const end = ys[1] || (/hazırda|present|currently/i.test(p) ? now : ys[0] + 1)
		total += Math.max(0, end - ys[0])
	})
	return Math.min(40, total)
}

const JobProfile = () => {
	const { user } = useAuth()
	const navigate = useNavigate()
	const c = useCareer(user?.email)
	const p: Profile = c.profile || { titles: [], sectors: [], cities: ['Bakı'], remoteOk: true, skills: [], languages: ['Azərbaycan dili'], years: 0, education: 'Bakalavr', minSalary: 0 }
	const [titles, setTitles] = useState(p.titles.join(', '))
	const [sectors, setSectors] = useState<string[]>(p.sectors)
	const [cities, setCities] = useState<string[]>(p.cities)
	const [remoteOk, setRemoteOk] = useState(p.remoteOk)
	const [skills, setSkills] = useState(p.skills.join('\n'))
	const [languages, setLanguages] = useState(p.languages.join('\n'))
	const [years, setYears] = useState(p.years)
	const [education, setEducation] = useState(p.education)
	const [minSalary, setMinSalary] = useState(p.minSalary)
	const [note, setNote] = useState('')

	const toggle = (list: string[], set: (v: string[]) => void, v: string) => set(list.includes(v) ? list.filter(x => x !== v) : [...list, v])

	const fromCv = async () => {
		setNote('CV məlumatları oxunur…')
		const r = loadResults(user.email)
		const cv = r.cv || (await draftCv(user, r))
		if (cv?.skills?.length) setSkills(cv.skills.map((s: string) => s.split(' — ')[0]).join('\n'))
		if (cv?.languages?.length) setLanguages(cv.languages.map((s: string) => s.split(' — ')[0]).join('\n'))
		if (cv?.experience?.length) setYears(yearsFrom(cv.experience.map((e: any) => e.period || '')))
		if (cv?.title) setTitles(t => t || cv.title)
		if (cv?.education?.some((e: any) => /magistr/i.test(`${e.title} ${e.details}`))) setEducation('Magistr')
		setNote(cv ? 'CV-dən dolduruldu — yoxlayıb yadda saxlayın.' : 'CV məlumatı tapılmadı.')
	}

	const save = (e: React.FormEvent) => {
		e.preventDefault()
		saveCareer(user.email, {
			profile: { titles: lines(titles), sectors, cities, remoteOk, skills: lines(skills), languages: lines(languages), years: Number(years) || 0, education, minSalary: Number(minSalary) || 0, updatedAt: new Date().toISOString() }
		})
		navigate('/profile/jobs')
	}

	return (
		<Page eyebrow="Karyera" title="Karyera profili" subtitle="Vakansiyalarla uyğunluq bu məlumatlarla və test nəticələrinizlə hesablanır." wide={false}>
			<form onSubmit={save} className={`${card} p-7 flex flex-col gap-6`}>
				<div className="flex flex-wrap items-center justify-between gap-3">
					<p className="text-sm text-qss-inputText">{note || 'Talant testindəki və ya CV-dəki məlumatlarla avtomatik doldura bilərsiniz.'}</p>
					<button type="button" className={btnGhost} onClick={fromCv}>
						CV-dən doldur
					</button>
				</div>
				<label className="flex flex-col gap-2 text-sm text-qss-inputText">
					İstədiyiniz vəzifələr (vergüllə)
					<input className={field} value={titles} onChange={e => setTitles(e.target.value)} placeholder="məs. Data analitik, Biznes analitik" />
				</label>
				<fieldset className="flex flex-col gap-2">
					<legend className="text-sm text-qss-inputText mb-2">Maraqlandığınız sahələr</legend>
					<div className="flex flex-wrap gap-2">
						{SECTORS.map(s => (
							<button key={s} type="button" onClick={() => toggle(sectors, setSectors, s)} aria-pressed={sectors.includes(s)} className={`text-[13px] px-3 py-1.5 rounded-full border transition-colors ${sectors.includes(s) ? 'bg-qss-secondary border-qss-secondary text-white' : 'border-qss-border text-qss-inputText hover:border-qss-secondary'}`}>
								{s}
							</button>
						))}
					</div>
				</fieldset>
				<fieldset className="flex flex-col gap-2">
					<legend className="text-sm text-qss-inputText mb-2">Harada işləmək istəyirsiniz</legend>
					<div className="flex flex-wrap gap-2 items-center">
						{CITIES.map(s => (
							<button key={s} type="button" onClick={() => toggle(cities, setCities, s)} aria-pressed={cities.includes(s)} className={`text-[13px] px-3 py-1.5 rounded-full border transition-colors ${cities.includes(s) ? 'bg-qss-secondary border-qss-secondary text-white' : 'border-qss-border text-qss-inputText hover:border-qss-secondary'}`}>
								{s}
							</button>
						))}
						<label className="flex items-center gap-2 text-sm text-qss-primary ml-2">
							<input type="checkbox" className="w-5 h-5 accent-[#038477]" checked={remoteOk} onChange={e => setRemoteOk(e.target.checked)} />
							Uzaqdan iş də uyğundur
						</label>
					</div>
				</fieldset>
				<div className="grid md:grid-cols-2 gap-5">
					<label className="flex flex-col gap-2 text-sm text-qss-inputText">
						Bacarıqlar (hər sətirdə biri)
						<textarea className={`${field} min-h-[160px]`} value={skills} onChange={e => setSkills(e.target.value)} placeholder={'Excel\nSQL\nSatış danışıqları'} />
					</label>
					<label className="flex flex-col gap-2 text-sm text-qss-inputText">
						Dillər (hər sətirdə biri)
						<textarea className={`${field} min-h-[160px]`} value={languages} onChange={e => setLanguages(e.target.value)} />
					</label>
				</div>
				<div className="grid md:grid-cols-3 gap-5">
					<label className="flex flex-col gap-2 text-sm text-qss-inputText">
						İş təcrübəsi (il)
						<input type="number" min={0} max={45} className={field} value={years} onChange={e => setYears(Number(e.target.value))} />
					</label>
					<label className="flex flex-col gap-2 text-sm text-qss-inputText">
						Təhsil səviyyəsi
						<select className={field} value={education} onChange={e => setEducation(e.target.value)}>
							{EDU.map(x => (
								<option key={x}>{x}</option>
							))}
						</select>
					</label>
					<label className="flex flex-col gap-2 text-sm text-qss-inputText">
						Minimum maaş (₼/ay)
						<input type="number" min={0} step={50} className={field} value={minSalary} onChange={e => setMinSalary(Number(e.target.value))} />
					</label>
				</div>
				<button type="submit" className={`${btnPrimary} self-start`}>
					Yadda saxla və vakansiyalara bax
				</button>
			</form>
		</Page>
	)
}

export default JobProfile
