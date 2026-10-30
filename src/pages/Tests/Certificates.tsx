import { useEffect, useRef } from 'react'
import { registerCertificate } from 'tests/certs'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { ageFrom, formatDate, talentPercent } from 'tests/store'
import { talentLabel } from 'tests/registry'
import { DOMAIN_LABEL } from 'tests/iq/scoring'
import { IqDomain } from 'tests/types'
import { useTestStatus } from 'components/AppShell/AppShell'
import TestHeader from './components/TestHeader'
import CertificateTemplate from './components/CertificateTemplate'
import { useExport } from './components/useExport'
import { ExportBar } from './iq/IqTest'
import ShareButton from 'share/ShareButton'
import { IqShareCard, TalentShareCard } from 'share/cards'

// Designations from the Certification content doc, by life stage.
function designation(age: number | null, overall: number) {
	const tier = overall >= 70 ? 0 : overall >= 45 ? 1 : 2
	if (age != null && age < 18) return ['Gələcəyin Novatoru', 'Gənc İstedad Kəşfiyyatçısı', 'Yüksələn Ulduz'][tier]
	if (age != null && age < 23) return ['Perspektivli Peşəkar', 'Bacarıqlı Öyrənən', 'Yüksələn İstedad'][tier]
	if (age != null && age < 30) return ['Erkən Karyera Lideri', 'Dinamik Töhfəçi', 'İstedadlı Praktik'][tier]
	if (age != null && age < 45) return ['Təcrübəli Ekspert', 'Təcrübəli Mütəxəssis', 'Bacarıqlı Peşəkar'][tier]
	return ['Veteran Lider', 'Ekspert Mentor', 'Ömürboyu Nailiyyətçi'][tier]
}

const Certificates = () => {
	const { user } = useAuth()
	const { done, results: r } = useTestStatus()
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	return (
		<div className="px-6 py-10 lg:px-12">
			<div className="max-w-[1120px] mx-auto flex flex-col gap-10">
				<TestHeader
					eyebrow="Nəticələr"
					title="Sertifikatlar"
					subtitle="Hər sertifikatın unikal ID-si var — işəgötürən onu “Sertifikatı yoxla” səhifəsində təsdiqləyə bilər."
					actions={
						<Link to="/verify" className="text-[14px] py-[10px] px-[22px] rounded-[25px] border border-qss-secondary text-qss-secondary">
							Sertifikatı yoxla
						</Link>
					}
				/>
				{!r.iq && !done.talent && (
					<div className="rounded-2xl bg-white border border-qss-border p-8 max-w-2xl">
						<p className="font-semibold text-qss-primary">Hələ sertifikatınız yoxdur.</p>
						<p className="text-sm text-qss-inputText mt-2">Talant testini və ya IQ testini tamamladıqdan sonra sertifikat burada görünəcək.</p>
					</div>
				)}
				{r.iq && <IqCert name={name} />}
				{r.talent && <TalentCert name={name} />}
				{done.talent && !r.talent && (
					<div className="rounded-2xl bg-white border border-qss-border p-6 max-w-2xl text-sm text-qss-inputText">
						Talant sertifikatı üçün hesabatınızı bir dəfə açın:{' '}
						<Link to="/profile/report" className="text-qss-secondary font-semibold">
							Talant hesabatı
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

const IqCert = ({ name }: { name: string }) => {
	const { results: r } = useTestStatus()
	const ref = useRef<HTMLDivElement>(null)
	const { print, png } = useExport(ref, 'IQ-sertifikat')
	const iq = r.iq!
	useEffect(() => {
		registerCertificate({ id: iq.certificateId, type: 'İntellektual Qabiliyyət Sertifikatı', name, value: `IQ ${iq.iq}`, band: iq.band, issued: formatDate(iq.date) })
	}, [iq.certificateId])
	const domains = (Object.keys(iq.domains) as IqDomain[]).sort((a, b) => iq.domains[b].index - iq.domains[a].index)
	const valid = new Date(iq.date)
	valid.setFullYear(valid.getFullYear() + 2)
	return (
		<section className="flex flex-col gap-4">
			<div className="flex flex-wrap items-center justify-between gap-3 max-w-[842px]">
				<h2 className="font-manrope text-xl font-bold text-qss-primary">İntellektual Qabiliyyət Sertifikatı</h2>
				<div className="flex flex-wrap gap-3">
					<ExportBar onPrint={print} onPng={png} />
					<ShareButton title="IQ sertifikatım" card={<IqShareCard />} />
				</div>
			</div>
			<div className="overflow-x-auto">
				<CertificateTemplate
					ref={ref}
					title="İntellektual Qabiliyyət Sertifikatı"
					designation={iq.band}
					name={name}
					photo={r.photo}
					metric={{ value: String(iq.iq), label: 'IQ göstəricisi' }}
					text={`Bu sertifikat təsdiq edir ki, ${name} Talent Score sisteminin intellektual qabiliyyət testində verbal, rəqəmsal, məntiqi, məkan və yaddaş bacarıqları üzrə qiymətləndirilmiş və iştirakçıların təxminən ${Math.round(iq.percentile)}%-dən yüksək nəticə göstərmişdir.`}
					summary={
						<>
							Ən güclü sahələr: <b>{domains.slice(0, 2).map(d => `${DOMAIN_LABEL[d]} (${iq.domains[d].index})`).join(', ')}</b>. Düzgün cavablar: {iq.correct} / {iq.total}.
						</>
					}
					issued={formatDate(iq.date)}
					valid={formatDate(valid.toISOString())}
					id={iq.certificateId}
				/>
			</div>
		</section>
	)
}

const TalentCert = ({ name }: { name: string }) => {
	const { user } = useAuth()
	const { results: r } = useTestStatus()
	const ref = useRef<HTMLDivElement>(null)
	const { print, png } = useExport(ref, 'Talant-sertifikati')
	const t = r.talent!
	const vals = Object.values(t.data)
	const overall = Math.round(vals.reduce((a, v) => a + talentPercent(v.score), 0) / Math.max(1, vals.length))
	const top = [...vals].sort((a, b) => talentPercent(b.score) - talentPercent(a.score)).slice(0, 2)
	const valid = new Date(t.date)
	valid.setMonth(valid.getMonth() + 10)
	const certId = `TL-${(t.report_key || 'TALENT').replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(0, 8).padEnd(6, '0')}`
	useEffect(() => {
		registerCertificate({ id: certId, type: 'Talant Mükəmməlliyi Sertifikatı', name, value: `${overall}%`, band: designation(ageFrom(user?.birth_date), overall), issued: formatDate(t.date) })
	}, [certId])
	return (
		<section className="flex flex-col gap-4">
			<div className="flex flex-wrap items-center justify-between gap-3 max-w-[842px]">
				<h2 className="font-manrope text-xl font-bold text-qss-primary">Talant Mükəmməlliyi Sertifikatı</h2>
				<div className="flex flex-wrap gap-3">
					<ExportBar onPrint={print} onPng={png} />
					<ShareButton title="Talant sertifikatım" card={<TalentShareCard />} />
				</div>
			</div>
			<div className="overflow-x-auto">
				<CertificateTemplate
					ref={ref}
					title="Talant Mükəmməlliyi Sertifikatı"
					designation={designation(ageFrom(user?.birth_date), overall)}
					name={name}
					photo={r.photo}
					metric={{ value: `${overall}%`, label: 'Ümumi talant göstəricisi' }}
					text={`Bu sertifikat təsdiq edir ki, ${name} karyera nailiyyətlərini, təhsilini, xüsusi bacarıqlarını, idman fəaliyyətini, dil və proqram biliklərini əhatə edən Talent Score qiymətləndirmə sistemi ilə hərtərəfli qiymətləndirilmiş və geniş bacarıq və qabiliyyətlər nümayiş etdirmişdir.`}
					summary={
						<>
							{overall}% ümumi talant göstəricisi ilə {name} yaşıdları arasında öz yerini müəyyən etmişdir. Ən güclü sahələr: <b>{top.map(v => `${talentLabel(v.text)} (${talentPercent(v.score)}%)`).join(', ')}</b>.
						</>
					}
					issued={formatDate(t.date)}
					valid={formatDate(valid.toISOString())}
					id={certId}
				/>
			</div>
		</section>
	)
}

export default Certificates
