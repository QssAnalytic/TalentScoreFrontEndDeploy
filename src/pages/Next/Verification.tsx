import { useState } from 'react'
import PageShell from './PageShell'
import { getDemoState, saveDb } from 'mock/mockApi'

// Document list from the "Senedler" sheet of Mərhələlər (Talent Score QSS › Content).
const documents = [
	{ id: 'id-card', title: 'Şəxsiyyət vəsiqəniz', who: 'Hamıdan', required: true },
	{ id: 'grade9', title: '9-cu sinif attestatınız', who: 'İşsiz / çalışıram və orta təhsil seçənlərdən', required: false },
	{ id: 'grade11', title: '11-ci sinif attestatınız', who: 'İşsiz / çalışıram və orta təhsil seçənlərdən', required: false },
	{ id: 'student-card', title: 'Tələbə biletiniz', who: 'Hazırda ali və ya orta texniki təhsil alanlardan', required: true },
	{ id: 'bachelor', title: '[Universitet] – [ixtisas] üzrə Bakalavr diplomunuz', who: 'Bitirdiyi hər universitet üçün ayrıca', required: true },
	{ id: 'master', title: '[Universitet] – [ixtisas] üzrə Magistr diplomunuz', who: 'Bitirdiyi hər universitet üçün ayrıca', required: true },
	{ id: 'phd', title: '[Universitet] – [ixtisas] üzrə Doktorantura diplomunuz', who: 'Bitirdiyi hər universitet üçün ayrıca', required: true },
	{ id: 'olympiad', title: 'Olimpiada nailiyyətinizi təsdiq edən diplom və ya sənəd', who: 'Yalnız ən yüksək olimpiada nəticəsi üçün', required: true },
	{ id: 'ielts', title: 'IELTS sertifikatınız', who: 'IELTS qeyd edənlərdən', required: true },
	{ id: 'toefl', title: 'TOEFL sertifikatınız', who: 'TOEFL qeyd edənlərdən', required: true },
	{ id: 'other-lang', title: 'Digər dil sertifikatlarınız', who: '"Əlavə et" ilə sertifikat daxil edənlərdən', required: false },
	{ id: 'work', title: '[Şirkət] şirkətində [vəzifə] vəzifəsi üzrə fəaliyyətinizi təsdiq edən sənəd', who: 'Ən az bir iş təcrübəsi qeyd edənlərdən — əmək kitabçası və ya e-gov sənədi', required: true },
	{ id: 'program', title: '[Proqram] üzrə sertifikatınız', who: '"Bilirəm" qeyd etdiyi proqramlar üçün', required: false },
	{ id: 'sport', title: '[İdman növü] üzrə nailiyyətinizi təsdiq edən sənəd', who: 'Peşəkar idman nailiyyəti qeyd edənlərdən', required: true },
	{ id: 'skill', title: '[Xüsusi bacarıq] üzrə nailiyyətinizi təsdiq edən sənəd', who: 'Hər peşəkar nailiyyət üçün ayrıca', required: true }
]

const Verification = () => {
	const db = getDemoState()
	const [uploads, setUploads] = useState<Record<string, string>>(() => {
		const map: Record<string, string> = {}
		;(db.verification || []).forEach((v: any) => (map[v.type] = v.name))
		return map
	})

	const onFile = (docId: string, e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return
		const next = { ...uploads, [docId]: file.name }
		setUploads(next)
		db.verification = Object.entries(next).map(([type, name]) => ({ type, name, size: 0, status: 'review' }))
		saveDb()
	}

	const done = Object.keys(uploads).length
	const pct = Math.round((done / documents.length) * 100)

	return (
		<PageShell
			badge="Verification · Təsdiq etmə mərhələsi"
			title="Aşağıdakı sənədləri yükləyin"
			subtitle="Sənədləriniz yoxlanıldıqdan sonra sertifikatınız “Verified” statusu alacaq. Yalnız cavablarınıza uyğun sənədlər tələb olunur."
		>
			<div className="rounded-xl bg-white shadow p-6 flex items-center gap-6">
				<div className="flex-1">
					<div className="flex justify-between text-sm mb-2">
						<span className="text-qss-primary font-semibold">Yüklənib: {done} / {documents.length}</span>
						<span className="text-qss-inputText">{pct}%</span>
					</div>
					<div className="h-2 rounded-full bg-qss-base-400 overflow-hidden">
						<div className="h-full bg-qss-secondary rounded-full transition-all" style={{ width: `${pct}%` }} />
					</div>
				</div>
			</div>

			<div className="rounded-xl bg-white shadow overflow-hidden">
				<div className="grid grid-cols-[48px_1fr_1fr_190px] gap-4 px-6 py-4 bg-qss-input text-sm font-semibold text-qss-primary">
					<span>№</span>
					<span>Hansı sənəd tələb olunur</span>
					<span>Kimdən tələb olunur</span>
					<span>Yükləmə</span>
				</div>
				{documents.map((d, i) => {
					const uploaded = uploads[d.id]
					return (
						<div key={d.id} className="grid grid-cols-[48px_1fr_1fr_190px] gap-4 px-6 py-4 border-t border-qss-border items-center text-sm">
							<span className="text-qss-base-300">{i + 1}</span>
							<span className="text-qss-primary">
								{d.title}
								{!d.required && <span className="ml-2 text-xs text-qss-alternative bg-qss-transbg rounded-full px-2 py-[2px]">optional</span>}
							</span>
							<span className="text-qss-inputText">{d.who}</span>
							{uploaded ? (
								<label className="cursor-pointer flex flex-col gap-1">
									<span className="text-xs font-semibold text-[#8A4B00] bg-[#FFF4E5] rounded-full px-3 py-1 self-start">Yoxlanılır</span>
									<span className="text-xs text-qss-inputText truncate">{uploaded}</span>
									<input type="file" className="hidden" onChange={e => onFile(d.id, e)} />
								</label>
							) : (
								<label className="cursor-pointer text-center text-xs py-[8px] px-[13px] rounded-[15px] border border-qss-secondary text-qss-secondary hover:bg-qss-secondary hover:text-white transition duration-300">
									Fayl seçin
									<input type="file" className="hidden" onChange={e => onFile(d.id, e)} />
								</label>
							)}
						</div>
					)
				})}
			</div>
		</PageShell>
	)
}

export default Verification
