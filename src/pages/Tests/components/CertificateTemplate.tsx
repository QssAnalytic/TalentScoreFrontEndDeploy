import { forwardRef, ReactNode } from 'react'
import 'pages/Auth/Profile/Certificate/certificate.css'
import numbers from 'pages/Auth/Profile/Certificate/assets/img/numbers.png'
import logo from 'pages/Auth/Profile/Certificate/assets/img/logo.png'

// Same layout as the original Talent Excellence Certificate (842×595, A4 landscape),
// parameterised so the IQ and talent certificates share it.
interface Props {
	title: string
	designation: string
	name: string
	photo?: string
	text: string
	summaryTitle?: string
	summary: ReactNode
	issued: string
	valid: string
	id: string
	metric?: { value: string; label: string }
}

const CertificateTemplate = forwardRef<HTMLDivElement, Props>(({ title, designation, name, photo, text, summaryTitle = 'SERTİFİKATIN XÜLASƏSİ', summary, issued, valid, id, metric }, ref) => (
	<div ref={ref} className="certificate" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>
		<div className="certificate-inner" style={{ display: 'flex', flexDirection: 'column' }}>
			<div className="certificate-header" style={{ background: 'linear-gradient(90deg, #00404C 0%, #038477 55%, #08D0B0 100%)', flexShrink: 0, height: 130 }}>
				<h1 style={{ fontSize: 38, maxWidth: 480, lineHeight: 1.1 }}>{title}</h1>
				<img src={numbers} alt="" style={{ width: 280 }} />
			</div>
			<div className="certificate-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 22 }}>
				<div className="certificate-svg">
					<svg xmlns="http://www.w3.org/2000/svg" width="250" height="27" viewBox="0 0 250 27" fill="none">
						<path d="M0 0H250V27H29.994C25.2455 27 20.7424 24.8908 17.7025 21.243L0 0Z" fill="#003F4D" />
						<text fill="white" x="55%" y="55%" dominantBaseline="middle" textAnchor="middle" style={{ font: '500 13px Montserrat, sans-serif' }}>
							{designation}
						</text>
					</svg>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
					{photo && <img src={photo} alt="" style={{ width: 54, height: 54, borderRadius: '50%', objectFit: 'cover', border: '2px solid #08D0B0' }} />}
					<h2 className="certificate-fullName" style={{ margin: 0 }}>
						{name}
					</h2>
					{metric && (
						<div style={{ marginLeft: 'auto', marginRight: 8, marginTop: 18, textAlign: 'right' }}>
							<div style={{ font: '700 40px Montserrat, sans-serif', color: '#003F4D', lineHeight: 1 }}>{metric.value}</div>
							<div style={{ font: '500 11px Inter, sans-serif', color: '#038477', letterSpacing: 1, textTransform: 'uppercase' }}>{metric.label}</div>
						</div>
					)}
				</div>
				<p className="certificate-text" style={{ margin: '14px 0 14px', lineHeight: 1.5 }}>
					{text}
				</p>
				<h3 className="certificate-summary">{summaryTitle}</h3>
				<div className="certificate-summary-text" style={{ font: '400 12px Inter, sans-serif', lineHeight: 1.5, marginTop: 6 }}>
					{summary}
				</div>
				<div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
					<div style={{ font: '400 10px Inter, sans-serif', color: '#333', lineHeight: 1.6 }}>
						<div>
							Verilmə tarixi: <b>{issued}</b> · Etibarlılıq müddəti: <b>{valid}</b> · Sertifikat ID: <b>{id}</b>
						</div>
						<div>Sertifikatın etibarlılığını yoxlamaq üçün: talentscore → Sertifikatı yoxla, ID ilə.</div>
					</div>
					<div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
						<div style={{ textAlign: 'center', font: '400 10px Inter, sans-serif', color: '#333' }}>
							<div style={{ borderBottom: '1px solid rgba(0,0,0,.6)', width: 130, marginBottom: 4 }} />
							Talent Score Test Mərkəzi
						</div>
						<img src={logo} alt="Talent Score" style={{ width: 90 }} />
					</div>
				</div>
			</div>
		</div>
	</div>
))

export default CertificateTemplate
