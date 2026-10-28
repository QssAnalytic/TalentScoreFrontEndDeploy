import { useState } from 'react'
import PageShell from './PageShell'
import { getDemoState } from 'mock/mockApi'

// Public page behind the link printed on every certificate
// ("The validity of this certificate can be verified online at talentscoring.az/verification").
const VerifyCertificate = () => {
	const [code, setCode] = useState('')
	const [result, setResult] = useState<null | { ok: boolean; name?: string }>(null)

	const check = (e: React.FormEvent) => {
		e.preventDefault()
		const db = getDemoState()
		const known = code.trim() === '2359874'
		const u = db.session ? db.users[db.session] : Object.values(db.users)[0]
		setResult(known ? { ok: true, name: `${u?.first_name || ''} ${u?.last_name || ''}`.trim() } : { ok: false })
	}

	return (
		<PageShell
			badge="Public"
			title="Verify a certificate"
			subtitle="Enter the Certification ID printed at the bottom of a Talent Excellence Certificate to confirm it was issued by Talent Score."
		>
			<form onSubmit={check} className="rounded-xl bg-white shadow p-8 flex items-end gap-4 max-w-2xl">
				<label className="flex-1 flex flex-col gap-2 text-sm text-qss-inputText">
					Certification ID
					<input
						value={code}
						onChange={e => setCode(e.target.value)}
						placeholder="e.g. 2359874"
						className="bg-qss-input rounded-[25px] px-5 py-3 outline-none text-qss-primary"
					/>
				</label>
				<button type="submit" className="text-[14px] text-white py-[12px] px-[32px] rounded-[25px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop">
					Verify
				</button>
			</form>

			{result && result.ok && (
				<div className="rounded-xl bg-white shadow p-8 max-w-2xl flex gap-6 items-start border-2 border-qss-secondary">
					<svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<circle cx="12" cy="12" r="11" fill="#038477" />
						<path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<div className="flex flex-col gap-2">
						<p className="font-manrope text-xl font-semibold text-qss-primary">Valid certificate</p>
						<p className="text-qss-inputText">Talent Excellence Certificate issued to <span className="font-semibold text-qss-primary">{result.name}</span></p>
						<div className="grid grid-cols-2 gap-x-10 gap-y-1 text-sm text-qss-inputText mt-2">
							<span>Designation</span><span className="text-qss-primary">Aspiring Professional</span>
							<span>Overall talent score</span><span className="text-qss-primary">68%</span>
							<span>Peer percentile</span><span className="text-qss-primary">74%</span>
							<span>Certification ID</span><span className="text-qss-primary">2359874</span>
						</div>
					</div>
				</div>
			)}
			{result && !result.ok && (
				<div className="rounded-xl bg-white shadow p-8 max-w-2xl border border-red-300">
					<p className="font-semibold text-red-700">No certificate found with this ID.</p>
					<p className="text-sm text-qss-inputText mt-1">Check the number and try again. In this demo, ID 2359874 is valid.</p>
				</div>
			)}
		</PageShell>
	)
}

export default VerifyCertificate
