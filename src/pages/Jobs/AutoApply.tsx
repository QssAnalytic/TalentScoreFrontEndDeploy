import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { useTestStatus } from 'components/AppShell/AppShell'
import { CheckoutItem, completePurchase, PLANS } from 'jobs/billing'
import { azn, bakuDay, saveCareer, useCareer } from 'jobs/store'
import { runAutoApply } from 'jobs/useAutoApply'
import { PlanId } from 'jobs/types'
import { viewingAs } from 'demo/viewAs'
import { formatDate } from 'tests/store'
import { btnGhost, btnPrimary, btnText, card, Checkout, Page, TestModeNote } from './ui'

const STEPS = [
	['06:00', 'Yeni vakansiyalar toplanır', 'Hər səhər real və nümunə mənbələrdən yeni elanlar lentə əlavə olunur.'],
	['06:05', 'Uyğunluq hesablanır', 'Bacarıqlarınız, təcrübəniz, test nəticələriniz və seçimləriniz hər vakansiya ilə müqayisə olunur.'],
	['Siz daxil olanda', 'Müraciətlər hazırlanır', 'Həddinizdən yüksək uyğunluğu olan vakansiyalar üçün fərdi müraciət məktubu yazılır və müraciət edilir.'],
	['Gün ərzində', 'Cavablar izlənir', 'Baxış, test və müsahibə dəvətləri, rədd cavabları gündəlik hesabatda görünür.'],
	['Dəvət gələndə', 'Koç sizi hazırlayır', 'Cavab mətni, uyğun vaxtlar və vakansiyaya xüsusi müsahibə hazırlığı hesabatı hazırlanır.']
]

const AutoApply = () => {
	const { user } = useAuth()
	const { done } = useTestStatus()
	const c = useCareer(user?.email)
	const sub = c.subscription
	const [checkout, setCheckout] = useState<CheckoutItem | null>(null)
	const [ran, setRan] = useState<string>('')
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	const today = bakuDay()
	const todayAuto = c.applications.filter(a => a.mode === 'auto' && a.day === today).length
	const totalAuto = c.applications.filter(a => a.mode === 'auto').length

	const setSub = (patch: Partial<NonNullable<typeof sub>>) => sub && saveCareer(user.email, { subscription: { ...sub, ...patch } })
	const runNow = async () => {
		setRan('İşləyir…')
		try {
			const n = await runAutoApply(user.email, name, true)
			setRan(n ? `${n} yeni müraciət hazırlandı.` : 'Hazırda həddinizdən yuxarı yeni vakansiya yoxdur. Həddi azaldın və ya sabah 06:00-dan sonra yoxlayın.')
		} catch {
			setRan('Vakansiya lenti əlçatan olmadı. Bir az sonra yenidən yoxlayın.')
		}
	}

	return (
		<Page eyebrow="Karyera" title="Avto-müraciət" subtitle="Sistem hər gün yeni vakansiyaları sizin profilinizlə müqayisə edir və ən uyğunlarına sizin adınızdan müraciət hazırlayır.">
			<div className="grid gap-3 md:grid-cols-5">
				{STEPS.map(([time, title, text], i) => (
					<div key={title} className={`${card} p-4 flex flex-col gap-1.5 relative`}>
						<span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-qss-secondary">
							{i + 1} · {time}
						</span>
						<span className="font-semibold text-qss-primary leading-snug">{title}</span>
						<span className="text-[13px] text-qss-inputText leading-relaxed">{text}</span>
					</div>
				))}
			</div>

			{sub ? (
				<section className={`${card} p-6 flex flex-col gap-5`}>
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div>
							<p className="text-xs uppercase tracking-[0.12em] text-qss-secondary font-semibold">Abunəliyiniz</p>
							<p className="font-manrope text-2xl font-bold text-qss-primary mt-1">{PLANS[sub.plan].name}</p>
							<p className="text-sm text-qss-inputText">
								{sub.active ? 'Aktivdir' : 'Dayandırılıb'} · {formatDate(sub.since)} tarixindən · yenilənmə {formatDate(sub.renews)}
							</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<button type="button" className={btnPrimary} onClick={runNow} disabled={!sub.active || !!viewingAs()} title={viewingAs() ? 'Demo profildə söndürülüb' : undefined}>
								İndi işə sal
							</button>
							<button type="button" className={btnGhost} onClick={() => setSub({ active: !sub.active })}>
								{sub.active ? 'Dayandır' : 'Davam etdir'}
							</button>
						</div>
					</div>
					{ran && <p className="text-sm text-qss-secondary font-semibold">{ran}</p>}
					<div className="grid md:grid-cols-3 gap-5">
						<div className="rounded-xl bg-qss-transbg p-4">
							<p className="text-sm text-qss-inputText">Bu gün</p>
							<p className="font-manrope text-3xl font-bold text-qss-primary tabular-nums">
								{todayAuto} / {sub.dailyLimit}
							</p>
							<p className="text-xs text-qss-inputText">avtomatik müraciət</p>
						</div>
						<label className="flex flex-col gap-2 text-sm text-qss-inputText">
							Minimum uyğunluq: <b className="text-qss-primary text-lg">{sub.minMatch}%</b>
							<input type="range" min={50} max={90} step={5} value={sub.minMatch} onChange={e => setSub({ minMatch: Number(e.target.value) })} className="accent-[#038477]" />
							<span className="text-xs">Yüksək hədd — az, amma daha uyğun müraciət.</span>
						</label>
						<label className="flex items-start gap-3 text-sm text-qss-inputText">
							<input type="checkbox" className="w-5 h-5 mt-0.5 accent-[#038477]" checked={sub.includeExternal} disabled={sub.plan !== 'pro'} onChange={e => setSub({ includeExternal: e.target.checked })} />
							<span>
								<b className="text-qss-primary">Beynəlxalq uzaqdan vakansiyalar</b>
								<br />
								{sub.plan === 'pro' ? 'Müraciət paketi hazırlanır, göndərişi işəgötürənin saytında bir kliklə edirsiniz.' : 'Yalnız Pro planda.'}
							</span>
						</label>
					</div>
					<div className="flex flex-wrap gap-4 text-sm">
						<Link to="/profile/jobs/applications" className={btnText}>
							Gündəlik hesabat və müraciətlər ({totalAuto} avtomatik) →
						</Link>
						{sub.plan === 'start' && (
							<button type="button" className={btnText} onClick={() => setCheckout({ item: 'plan:pro', label: PLANS.pro.name + ' (1 ay)', amount: PLANS.pro.price })}>
								Pro plana keç →
							</button>
						)}
						<button type="button" className={btnText} onClick={() => window.confirm('Abunəliyi ləğv etmək istəyirsiniz?') && saveCareer(user.email, { subscription: undefined })}>
							Abunəliyi ləğv et
						</button>
					</div>
				</section>
			) : (
				<section className="grid gap-5 md:grid-cols-2">
					{(Object.keys(PLANS) as PlanId[]).map(id => {
						const p = PLANS[id]
						return (
							<div key={id} className={`${card} p-7 flex flex-col gap-5 ${id === 'pro' ? 'border-2 border-qss-secondary' : ''}`}>
								<div className="flex items-center justify-between">
									<p className="font-manrope text-xl font-bold text-qss-primary">{p.name}</p>
									{id === 'pro' && <span className="text-xs font-semibold rounded-full bg-qss-secondary text-white px-3 py-1">Tövsiyə olunur</span>}
								</div>
								<p className="font-manrope text-4xl font-bold text-qss-primary">
									{azn(p.price)}
									<span className="text-base font-normal text-qss-inputText"> / ay</span>
								</p>
								<ul className="flex flex-col gap-2 flex-1">
									{p.features.map(f => (
										<li key={f} className="flex gap-2 text-sm text-qss-inputText">
											<span className="text-qss-secondary font-bold">✓</span>
											{f}
										</li>
									))}
								</ul>
								<button type="button" className={btnPrimary} onClick={() => setCheckout({ item: `plan:${id}`, label: `${p.name} (1 ay)`, amount: p.price })}>
									Aktiv et
								</button>
							</div>
						)
					})}
				</section>
			)}

			{!c.profile && (
				<p className="text-sm text-qss-inputText">
					Avto-müraciətin düzgün işləməsi üçün{' '}
					<Link to="/profile/jobs/profile" className="text-qss-secondary font-semibold">
						karyera profilinizi
					</Link>{' '}
					doldurun.
				</p>
			)}
			<TestModeNote />
			<p className="text-xs text-qss-base-300 leading-relaxed">
				Necə göndərilir: nümunə (yerli) vakansiyalara müraciət sistem daxilində göndərilir və cavablar simulyasiyadır. Real beynəlxalq vakansiyalarda işəgötürənin öz forması olduğuna görə sistem müraciət məktubunu və uyğunluq qeydini hazırlayır, siz isə elanı açıb göndərirsiniz. Yerli iş saytları ilə tərəfdaşlıq qurulduqda müraciətlər birbaşa göndəriləcək.
			</p>

			{checkout && <Checkout item={checkout} onClose={() => setCheckout(null)} onPaid={card => completePurchase(user.email, checkout, card, done)} />}
		</Page>
	)
}

export default AutoApply
