import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { axiosPrivateInstance } from 'axioss'
import { TESTS } from 'tests/registry'
import { ageFrom, imageToDataUrl, saveResults } from 'tests/store'
import { useTestStatus } from 'components/AppShell/AppShell'
import { IconArrow, IconCheck, IconClock, IconLock } from 'components/AppShell/icons'
import { MBTI_TYPES } from 'tests/mbti/data'
import { ENNEA_TYPES } from 'tests/enneagram/data'

export async function uploadProfilePhoto(email: string, file: File) {
	const dataUrl = await imageToDataUrl(file)
	saveResults(email, { photo: dataUrl })
	try {
		const form = new FormData()
		form.append('profile_photo', file)
		await axiosPrivateInstance.post('user/upload-profile-photo/', form, { headers: { 'Content-Type': 'multipart/form-data' } })
	} catch {
		/* the photo is still kept on this device for reports */
	}
	return dataUrl
}

const genderAz = (g?: string) => (g === 'Male' ? 'Kişi' : g === 'Female' ? 'Qadın' : '')

const Dashboard = () => {
	const { user } = useAuth()
	const { done, started, results, count } = useTestStatus()
	const fileRef = useRef<HTMLInputElement>(null)
	const [busy, setBusy] = useState(false)
	const photo = results.photo
	const age = ageFrom(user?.birth_date)

	const summary: Record<string, string> = {
		talent: results.talent ? 'Hesabat hazırdır' : done.talent ? 'Tamamlanıb' : '',
		iq: results.iq ? `IQ ${results.iq.iq} · ${results.iq.band}` : '',
		mbti: results.mbti ? `${results.mbti.code} · ${MBTI_TYPES[results.mbti.code]?.name || ''}` : '',
		ennea: results.ennea ? `Tip ${results.ennea.type}w${results.ennea.wing} · ${ENNEA_TYPES[results.ennea.type]?.name || ''}` : ''
	}

	const onPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const f = e.target.files?.[0]
		if (!f) return
		setBusy(true)
		try {
			await uploadProfilePhoto(user.email, f)
		} finally {
			setBusy(false)
		}
	}

	return (
		<div className="px-6 py-10 lg:px-12">
			<div className="max-w-[1120px] mx-auto flex flex-col gap-10">
				<section className="flex flex-wrap items-center gap-6">
					<button
						type="button"
						onClick={() => fileRef.current?.click()}
						className="relative w-24 h-24 rounded-full p-[3px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop shrink-0"
						aria-label={photo ? 'Profil şəklini dəyiş' : 'Profil şəkli əlavə et'}
					>
						{photo ? (
							<img src={photo} alt="" className="w-full h-full rounded-full object-cover bg-white" />
						) : (
							<span className="w-full h-full rounded-full bg-white grid place-items-center text-qss-secondary text-xs px-2 leading-tight">
								{busy ? '…' : 'Şəkil əlavə et'}
							</span>
						)}
					</button>
					<input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onPhoto} />
					<div className="flex-1 min-w-[240px]">
						<p className="text-qss-inputText">Xoş gəlmisiniz,</p>
						<h1 className="font-manrope text-3xl font-bold text-qss-primary">
							{user?.first_name} {user?.last_name}
						</h1>
						<p className="text-sm text-qss-inputText mt-1">
							{[age != null ? `${age} yaş` : '', genderAz(user?.gender), user?.email].filter(Boolean).join(' · ')}
						</p>
						{!photo && <p className="text-xs text-[#8A4B00] mt-2">Hesabatlarda və sertifikatlarda görünməsi üçün profil şəkli əlavə edin.</p>}
					</div>
					<Link
						to="/profile/full-report"
						className="flex items-center gap-4 rounded-2xl bg-white shadow-sm border border-qss-border px-5 py-4 hover:border-qss-secondary transition-colors"
					>
						<span className="relative w-14 h-14">
							<svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90" aria-hidden="true">
								<circle cx="18" cy="18" r="15.5" fill="none" stroke="#E1EEED" strokeWidth="4" />
								<circle cx="18" cy="18" r="15.5" fill="none" stroke="#038477" strokeWidth="4" strokeDasharray={`${(count / 4) * 97.4} 97.4`} strokeLinecap="round" />
							</svg>
							<span className="absolute inset-0 grid place-items-center text-sm font-bold text-qss-primary tabular-nums">{count}/4</span>
						</span>
						<span>
							<span className="block font-semibold text-qss-primary">Tam hesabat</span>
							<span className="text-sm text-qss-inputText">{count >= 2 ? 'Bütün nəticələriniz bir hesabatda' : 'Ən azı 2 test tamamlayın'}</span>
						</span>
					</Link>
				</section>

				<section className="flex flex-col gap-4">
					<h2 className="font-manrope text-xl font-bold text-qss-primary">Testlər</h2>
					<div className="grid gap-5 md:grid-cols-2">
						{TESTS.map(t => (
							<div key={t.id} className="rounded-2xl bg-white border border-qss-border shadow-sm p-6 flex flex-col gap-4">
								<div className="flex items-start justify-between gap-4">
									<div className="flex items-center gap-3">
										<span className="w-9 h-9 rounded-xl grid place-items-center bg-qss-transbg text-qss-alternative font-bold tabular-nums">{t.number}</span>
										<h3 className="font-manrope text-lg font-bold text-qss-primary leading-snug">{t.title}</h3>
									</div>
									{done[t.id] ? (
										<span className="shrink-0 flex items-center gap-1 text-xs font-semibold text-qss-alternative bg-qss-transbg rounded-full px-3 py-1">
											<IconCheck /> Tamamlanıb
										</span>
									) : started[t.id] ? (
										<span className="shrink-0 text-xs font-semibold text-[#8A4B00] bg-[#FFF4E5] rounded-full px-3 py-1">Davam edir</span>
									) : (
										<span className="shrink-0 text-xs font-semibold text-qss-inputText bg-qss-input rounded-full px-3 py-1">Başlanmayıb</span>
									)}
								</div>
								<p className="text-sm text-qss-inputText leading-relaxed">{t.measures}</p>
								<div className="flex items-center gap-4 text-xs text-qss-inputText">
									<span className="flex items-center gap-1">
										<IconClock /> {t.minutes}
									</span>
									<span>{t.questions}</span>
								</div>
								<div className="flex items-center justify-between gap-4 mt-auto pt-2">
									<span className="text-sm font-semibold text-qss-primary">{summary[t.id]}</span>
									<Link
										to={t.path}
										className={`flex items-center gap-2 text-[14px] py-[9px] px-[22px] rounded-[25px] ${done[t.id] ? 'border border-qss-secondary text-qss-secondary hover:bg-qss-secondary hover:text-white' : 'bg-qss-secondary text-white hover:bg-qss-alternative'} transition-colors`}
									>
										{done[t.id] ? 'Nəticəyə bax' : started[t.id] ? 'Davam et' : 'Testə başla'}
										<IconArrow />
									</Link>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="grid gap-5 md:grid-cols-2">
					<Link to="/profile/cv" className="rounded-2xl bg-white border border-qss-border shadow-sm p-6 flex items-center justify-between gap-4 hover:border-qss-secondary transition-colors">
						<span>
							<span className="block font-manrope text-lg font-bold text-qss-primary">CV</span>
							<span className="text-sm text-qss-inputText">
								{done.talent ? 'Cavablarınızdan hazırlanmış CV — bir neçə şablonla yükləyin' : 'Talant testini tamamladıqdan sonra açılır'}
							</span>
						</span>
						{done.talent ? <IconArrow /> : <IconLock />}
					</Link>
					<Link to="/profile/certificates" className="rounded-2xl bg-white border border-qss-border shadow-sm p-6 flex items-center justify-between gap-4 hover:border-qss-secondary transition-colors">
						<span>
							<span className="block font-manrope text-lg font-bold text-qss-primary">Sertifikatlar</span>
							<span className="text-sm text-qss-inputText">IQ və talant sertifikatlarınız, paylaşmağa hazır</span>
						</span>
						<IconArrow />
					</Link>
				</section>
			</div>
		</div>
	)
}

export default Dashboard
