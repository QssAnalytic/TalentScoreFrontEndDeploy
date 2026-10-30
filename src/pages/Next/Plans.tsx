import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { useTestStatus } from 'components/AppShell/AppShell'
import { BADGE_BUNDLE_PRICE, BADGE_PRICE, BADGE_TESTS, CheckoutItem, completePurchase, PLANS } from 'jobs/billing'
import { azn, useCareer } from 'jobs/store'
import { formatDate } from 'tests/store'
import { TESTS } from 'tests/registry'
import { btnGhost, btnPrimary, card, Checkout, Page, TestModeNote } from 'pages/Jobs/ui'

const Plans = () => {
	const { user } = useAuth()
	const { done } = useTestStatus()
	const c = useCareer(user?.email)
	const [checkout, setCheckout] = useState<CheckoutItem | null>(null)
	const missingBadges = BADGE_TESTS.filter(t => done[t.id] && !c.badges[t.id])
	const pathOf = (id: string) => TESTS.find(t => t.id === id)?.path || '/profile'

	return (
		<Page eyebrow="Hesab" title="Planlar və ödənişlər" subtitle="Testlər və hesabatlar pulsuzdur. Ödənişli xidmətlər: təsdiqlənmiş nişanlar və avtomatik müraciət.">
			<section className="grid gap-5 md:grid-cols-3">
				<div className={`${card} p-7 flex flex-col gap-4`}>
					<p className="font-manrope text-xl font-bold text-qss-primary">Pulsuz</p>
					<p className="font-manrope text-4xl font-bold text-qss-primary">0 ₼</p>
					<ul className="flex flex-col gap-2 text-sm text-qss-inputText flex-1">
						<li>✓ 6 test və hər biri üçün ətraflı hesabat</li>
						<li>✓ Tam hesabat və karyera tövsiyələri</li>
						<li>✓ CV şablonları, sosial şəbəkədə paylaşma</li>
						<li>✓ Gündəlik vakansiyalar və uyğunluq faizi</li>
						<li>✓ Əl ilə müraciət və müraciət məktubu</li>
					</ul>
					<p className="text-center text-[14px] py-[10px] rounded-[25px] bg-qss-transbg text-qss-alternative font-semibold">Hamı üçün aktivdir</p>
				</div>
				{(['start', 'pro'] as const).map(id => {
					const p = PLANS[id]
					const active = c.subscription?.plan === id && c.subscription.active
					return (
						<div key={id} className={`${card} p-7 flex flex-col gap-4 ${id === 'pro' ? 'border-2 border-qss-secondary' : ''}`}>
							<p className="font-manrope text-xl font-bold text-qss-primary">{p.name}</p>
							<p className="font-manrope text-4xl font-bold text-qss-primary">
								{azn(p.price)}
								<span className="text-base font-normal text-qss-inputText"> / ay</span>
							</p>
							<ul className="flex flex-col gap-2 text-sm text-qss-inputText flex-1">
								{p.features.map(f => (
									<li key={f}>✓ {f}</li>
								))}
							</ul>
							{active ? (
								<Link to="/profile/jobs/auto" className={btnGhost}>
									Aktivdir · idarə et
								</Link>
							) : (
								<button type="button" className={btnPrimary} onClick={() => setCheckout({ item: `plan:${id}`, label: `${p.name} (1 ay)`, amount: p.price })}>
									Aktiv et
								</button>
							)}
						</div>
					)
				})}
			</section>

			<section className={`${card} p-7 flex flex-col gap-5`}>
				<div className="flex flex-wrap items-end justify-between gap-4">
					<div>
						<h2 className="font-manrope text-xl font-bold text-qss-primary">Təsdiqlənmiş nişanlar</h2>
						<p className="text-sm text-qss-inputText max-w-2xl mt-1">
							Nişan test nəticənizi profilinizdə və müraciətlərinizdə “təsdiqlənmiş” kimi göstərir; işəgötürən sertifikat ID ilə yoxlaya bilər. Hər test üçün {azn(BADGE_PRICE)}, hamısı birlikdə {azn(BADGE_BUNDLE_PRICE)}.
						</p>
					</div>
					{missingBadges.length > 1 && (
						<button type="button" className={btnPrimary} onClick={() => setCheckout({ item: 'badges:all', label: `Bütün tamamlanmış testlər üçün nişan (${missingBadges.length})`, amount: BADGE_BUNDLE_PRICE })}>
							Hamısı · {azn(BADGE_BUNDLE_PRICE)}
						</button>
					)}
				</div>
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{BADGE_TESTS.map(t => {
						const has = c.badges[t.id]
						return (
							<div key={t.id} className={`rounded-xl border p-4 flex items-center gap-3 ${has ? 'border-[#F5B301] bg-[#FFFBEB]' : 'border-qss-border'}`}>
								<span className={`w-10 h-10 rounded-full grid place-items-center shrink-0 text-lg ${has ? 'bg-[#F5B301] text-white' : 'bg-qss-input text-qss-base-300'}`} aria-hidden="true">
									★
								</span>
								<div className="flex-1 min-w-0">
									<p className="font-semibold text-qss-primary text-sm">{t.label}</p>
									<p className="text-xs text-qss-inputText">{has ? `Təsdiqləndi · ${formatDate(has)}` : done[t.id] ? 'Test tamamlanıb' : 'Əvvəlcə testi keçin'}</p>
								</div>
								{!has &&
									(done[t.id] ? (
										<button type="button" className="text-[13px] font-semibold text-qss-secondary" onClick={() => setCheckout({ item: `badge:${t.id}`, label: `${t.label} — təsdiqlənmiş nişan`, amount: BADGE_PRICE })}>
											{azn(BADGE_PRICE)}
										</button>
									) : (
										<Link to={pathOf(t.id)} className="text-[13px] font-semibold text-qss-inputText">
											Testə keç
										</Link>
									))}
							</div>
						)
					})}
				</div>
			</section>

			<section className={`${card} p-7 flex flex-col gap-4`}>
				<h2 className="font-manrope text-xl font-bold text-qss-primary">Ödəniş tarixçəsi</h2>
				{c.purchases.length === 0 ? (
					<p className="text-sm text-qss-inputText">Hələ ödəniş yoxdur.</p>
				) : (
					<table className="w-full text-sm">
						<thead>
							<tr className="text-left text-qss-inputText border-b border-qss-border">
								<th className="py-2 font-normal">Tarix</th>
								<th className="py-2 font-normal">Xidmət</th>
								<th className="py-2 font-normal">Kart</th>
								<th className="py-2 font-normal text-right">Məbləğ</th>
							</tr>
						</thead>
						<tbody>
							{c.purchases.map(p => (
								<tr key={p.id} className="border-b border-qss-border/60">
									<td className="py-2.5 text-qss-inputText">{formatDate(p.date)}</td>
									<td className="py-2.5 text-qss-primary">
										{p.label} <span className="text-xs text-[#8A5300]">(test rejimi · {p.id})</span>
									</td>
									<td className="py-2.5 text-qss-inputText">•••• {p.card}</td>
									<td className="py-2.5 text-right font-semibold text-qss-primary tabular-nums">{azn(p.amount)}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
				<TestModeNote />
			</section>

			{checkout && <Checkout item={checkout} onClose={() => setCheckout(null)} onPaid={cardNo => completePurchase(user.email, checkout, cardNo, done)} />}
		</Page>
	)
}

export default Plans
