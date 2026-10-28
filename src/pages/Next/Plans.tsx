import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import PageShell from './PageShell'
import { getDemoState, saveDb } from 'mock/mockApi'

// Prices are taken from the Account page sketch in Drive and are not confirmed.
const plans = [
	{
		id: 'free',
		name: 'Free plan',
		price: '$0',
		note: 'Available to everyone',
		features: ["Talent report with applicant's overall and peer percentile scores", 'Limited CV templates']
	},
	{
		id: 'paid',
		name: 'Paid certifications',
		price: '$99.99',
		note: 'Pick the documents you need',
		features: ['Verified certification', 'Career planning', 'Job fit assessment', 'Professional development guide']
	},
	{
		id: 'premium',
		name: 'Premium package',
		price: '$149.99',
		note: 'All the certifications and reports in one package',
		features: ['Verified certification', 'Career planning', 'Job fit assessment', 'Professional development guide', 'Talent bot', 'All CV templates']
	}
]

const Check = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-[2px]">
		<path d="M5 12.5L10 17L19 7" stroke="#038477" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const Plans = () => {
	const { user, setUser } = useAuth()
	const db = getDemoState()
	const [current, setCurrent] = useState(db.plan || 'free')
	const [firstName, setFirstName] = useState(user?.first_name || '')
	const [lastName, setLastName] = useState(user?.last_name || '')
	const [emailNotes, setEmailNotes] = useState(true)
	const [saved, setSaved] = useState(false)

	const choose = (id: string) => {
		setCurrent(id)
		db.plan = id
		saveDb()
	}

	const saveProfile = (e: React.FormEvent) => {
		e.preventDefault()
		const u = db.session ? db.users[db.session] : null
		if (u) {
			u.first_name = firstName
			u.last_name = lastName
			saveDb()
		}
		setUser({ ...user, first_name: firstName, last_name: lastName })
		setSaved(true)
		setTimeout(() => setSaved(false), 2000)
	}

	return (
		<PageShell
			badge="Account"
			title="My plan"
			subtitle="Upgrade your plan for a verified certificate, AI career advice, personalised chat support and more."
		>
			<div className="grid grid-cols-3 gap-6">
				{plans.map(plan => {
					const active = current === plan.id
					return (
						<div
							key={plan.id}
							className={`rounded-xl bg-white p-8 flex flex-col gap-5 shadow ${active ? 'border-2 border-qss-secondary' : 'border border-qss-border'}`}
						>
							<div className="flex items-center justify-between">
								<h2 className="font-manrope text-xl font-semibold text-qss-primary">{plan.name}</h2>
								{plan.id === 'premium' && (
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
										<path d="M5 18H19M5 14H19L20 5L16 8L12 3L8 8L4 5L5 14Z" stroke="#FFA723" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								)}
							</div>
							<div>
								<p className="font-manrope text-4xl font-bold text-qss-primary">{plan.price}</p>
								<p className="text-sm text-qss-inputText mt-1">{plan.note}</p>
							</div>
							<ul className="flex flex-col gap-3 flex-1">
								{plan.features.map(f => (
									<li key={f} className="flex gap-2 text-sm text-qss-inputText">
										<Check />
										{f}
									</li>
								))}
							</ul>
							{active ? (
								<p className="text-center text-[14px] text-white py-[10px] px-[24px] rounded-[25px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop">Current plan</p>
							) : (
								<button
									type="button"
									onClick={() => choose(plan.id)}
									className="text-[14px] py-[10px] px-[24px] rounded-[25px] border border-qss-secondary text-qss-secondary hover:bg-qss-secondary hover:text-white transition duration-300"
								>
									{plan.id === 'free' ? 'Switch to free' : 'Choose plan'}
								</button>
							)}
						</div>
					)
				})}
			</div>
			<p className="text-xs text-qss-inputText -mt-4">Demo: choosing a plan here does not take a payment — billing is not connected yet.</p>

			<div className="grid grid-cols-2 gap-6">
				<form onSubmit={saveProfile} className="rounded-xl bg-white p-8 shadow flex flex-col gap-5">
					<h2 className="font-manrope text-xl font-semibold text-qss-primary">Account settings</h2>
					<div className="grid grid-cols-2 gap-4">
						<label className="flex flex-col gap-2 text-sm text-qss-inputText">
							First name
							<input value={firstName} onChange={e => setFirstName(e.target.value)} className="bg-qss-input rounded-[25px] px-5 py-3 outline-none text-qss-primary" />
						</label>
						<label className="flex flex-col gap-2 text-sm text-qss-inputText">
							Last name
							<input value={lastName} onChange={e => setLastName(e.target.value)} className="bg-qss-input rounded-[25px] px-5 py-3 outline-none text-qss-primary" />
						</label>
					</div>
					<label className="flex flex-col gap-2 text-sm text-qss-inputText">
						Email
						<input value={user?.email || ''} readOnly className="bg-qss-input rounded-[25px] px-5 py-3 outline-none text-qss-base-300" />
					</label>
					<label className="flex items-center justify-between gap-4 text-sm text-qss-primary">
						Send me notifications by email
						<input type="checkbox" checked={emailNotes} onChange={e => setEmailNotes(e.target.checked)} className="w-5 h-5 accent-[#038477]" />
					</label>
					<button type="submit" className="self-start text-[14px] text-white py-[10px] px-[32px] rounded-[25px] bg-qss-secondary">
						{saved ? 'Saved' : 'Save changes'}
					</button>
				</form>

				<div className="rounded-xl bg-white p-8 shadow flex flex-col gap-4">
					<h2 className="font-manrope text-xl font-semibold text-qss-primary">Your documents</h2>
					<Link to="/profile/report" className="flex justify-between items-center rounded-xl bg-qss-transbg px-5 py-4 text-qss-primary hover:text-qss-secondary">
						<span>
							<span className="block font-semibold">Talent report</span>
							<span className="text-sm text-qss-inputText">Open to see your overall and peer percentile and interpretation</span>
						</span>
						<span aria-hidden="true">→</span>
					</Link>
					<Link to="/profile/cv" className="flex justify-between items-center rounded-xl bg-qss-transbg px-5 py-4 text-qss-primary hover:text-qss-secondary">
						<span>
							<span className="block font-semibold">CV</span>
							<span className="text-sm text-qss-inputText">Edit it yourself or let ChatGPT improve and paraphrase the content</span>
						</span>
						<span aria-hidden="true">→</span>
					</Link>
					<Link to="/profile/career" className="flex justify-between items-center rounded-xl bg-qss-transbg px-5 py-4 text-qss-primary hover:text-qss-secondary">
						<span>
							<span className="block font-semibold">Career Advancement Report</span>
							<span className="text-sm text-qss-inputText">Career planning, job fit and professional development</span>
						</span>
						<span aria-hidden="true">→</span>
					</Link>
					<Link to="/profile/verification" className="flex justify-between items-center rounded-xl bg-qss-transbg px-5 py-4 text-qss-primary hover:text-qss-secondary">
						<span>
							<span className="block font-semibold">Verification</span>
							<span className="text-sm text-qss-inputText">Upload documents to get a verified certificate</span>
						</span>
						<span aria-hidden="true">→</span>
					</Link>
				</div>
			</div>
		</PageShell>
	)
}

export default Plans
