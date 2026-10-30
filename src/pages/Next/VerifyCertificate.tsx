import { useState } from 'react'
import PageShell from './PageShell'
import { lookupCertificate } from 'tests/certs'

// Public page: an employer enters a Certification ID printed on a Talent Score certificate.
const VerifyCertificate = () => {
	const [code, setCode] = useState('')
	const [busy, setBusy] = useState(false)
	const [result, setResult] = useState<null | { ok: false } | { ok: true; c: Awaited<ReturnType<typeof lookupCertificate>> }>(null)

	const check = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!code.trim()) return
		setBusy(true)
		try {
			const c = await lookupCertificate(code)
			setResult(c ? { ok: true, c } : { ok: false })
		} catch {
			setResult({ ok: false })
		} finally {
			setBusy(false)
		}
	}

	return (
		<PageShell badge="Açıq səhifə" title="Sertifikatı yoxla" subtitle="Talent Score sertifikatının aşağısında yazılmış Sertifikat ID-ni daxil edin və onun sistemimiz tərəfindən verildiyini təsdiqləyin.">
			<form onSubmit={check} className="rounded-xl bg-white shadow p-8 flex flex-wrap items-end gap-4 max-w-2xl">
				<label htmlFor="cert-id" className="flex-1 min-w-[220px] flex flex-col gap-2 text-sm text-qss-inputText">
					Sertifikat ID
					<input id="cert-id" value={code} onChange={e => setCode(e.target.value)} placeholder="məs. IQ-7KQ2M9XA" className="bg-qss-input rounded-[25px] px-5 py-3 outline-none text-qss-primary uppercase" />
				</label>
				<button type="submit" disabled={busy} className="text-[14px] text-white py-[12px] px-[32px] rounded-[25px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop disabled:opacity-60">
					{busy ? 'Yoxlanılır…' : 'Yoxla'}
				</button>
			</form>

			{result && result.ok && result.c && (
				<div className="rounded-xl bg-white shadow p-8 max-w-2xl flex gap-6 items-start border-2 border-qss-secondary">
					<svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<circle cx="12" cy="12" r="11" fill="#038477" />
						<path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<div className="flex flex-col gap-2">
						<p className="font-manrope text-xl font-semibold text-qss-primary">Sertifikat etibarlıdır</p>
						<p className="text-qss-inputText">
							{result.c.type} — <span className="font-semibold text-qss-primary">{result.c.name}</span>
						</p>
						<div className="grid grid-cols-2 gap-x-10 gap-y-1 text-sm text-qss-inputText mt-2">
							<span>Nəticə</span>
							<span className="text-qss-primary">{result.c.value}</span>
							{result.c.band && (
								<>
									<span>Dərəcə</span>
									<span className="text-qss-primary">{result.c.band}</span>
								</>
							)}
							<span>Verilmə tarixi</span>
							<span className="text-qss-primary">{result.c.issued}</span>
							<span>Sertifikat ID</span>
							<span className="text-qss-primary">{result.c.id}</span>
						</div>
					</div>
				</div>
			)}
			{result && !result.ok && (
				<div className="rounded-xl bg-white shadow p-8 max-w-2xl border border-red-300">
					<p className="font-semibold text-red-700">Bu ID ilə sertifikat tapılmadı.</p>
					<p className="text-sm text-qss-inputText mt-1">ID-ni sertifikatdakı kimi, defislə birlikdə daxil edin (məs. IQ-7KQ2M9XA).</p>
				</div>
			)}
		</PageShell>
	)
}

export default VerifyCertificate
