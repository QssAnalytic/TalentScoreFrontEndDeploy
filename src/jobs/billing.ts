// Prices and purchases. Payment runs in TEST MODE: no card is charged and no
// payment provider is connected yet. Prices are working assumptions in AZN.
import { TestId } from 'tests/registry'
import { saveCareer, bakuDay } from './store'
import { CareerState, PlanId, Purchase, Subscription } from './types'

export const BADGE_PRICE = 5
export const BADGE_BUNDLE_PRICE = 19

export const PLANS: Record<PlanId, { name: string; price: number; dailyLimit: number; features: string[] }> = {
	start: {
		name: 'Avto-müraciət Start',
		price: 15,
		dailyLimit: 5,
		features: ['Gündə 5-ə qədər avtomatik müraciət', 'Hər vakansiya üçün fərdi müraciət məktubu', 'Gündəlik hesabat', 'Dəvətlərə hazır cavab mətnləri', '3 müsahibə hazırlığı hesabatı / ay']
	},
	pro: {
		name: 'Avto-müraciət Pro',
		price: 35,
		dailyLimit: 20,
		features: ['Gündə 20-yə qədər avtomatik müraciət', 'Beynəlxalq (uzaqdan) vakansiyalar daxil', 'Limitsiz müsahibə hazırlığı hesabatı', 'Müsahibədən sonra izləmə və koç tövsiyələri', 'Bütün testlər üçün təsdiqlənmiş nişanlar']
	}
}

export const BADGE_TESTS: { id: TestId; label: string }[] = [
	{ id: 'talent', label: 'Talant qiymətləndirməsi' },
	{ id: 'iq', label: 'IQ' },
	{ id: 'mbti', label: '16 tip şəxsiyyət' },
	{ id: 'ennea', label: 'Enneaqram' },
	{ id: 'big5', label: 'Big Five' },
	{ id: 'riasec', label: 'Karyera maraqları' }
]

export interface CheckoutItem {
	item: string // 'plan:start' | 'badge:iq' | 'badges:all'
	label: string
	amount: number
}

function purchaseId() {
	return `P-${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).slice(2, 5).toUpperCase()}`
}

// Records a successful test-mode payment and applies what was bought.
export function completePurchase(email: string, it: CheckoutItem, card: string, done: Record<string, boolean>): CareerState {
	const p: Purchase = { id: purchaseId(), item: it.item, label: it.label, amount: it.amount, date: new Date().toISOString(), card: card.replace(/\D/g, '').slice(-4), testMode: true }
	return saveCareer(email, cur => {
		const badges = { ...cur.badges }
		const now = new Date().toISOString()
		let subscription = cur.subscription
		if (it.item.startsWith('plan:')) {
			const plan = it.item.split(':')[1] as PlanId
			const renews = new Date()
			renews.setMonth(renews.getMonth() + 1)
			subscription = {
				plan,
				active: true,
				since: now,
				renews: renews.toISOString(),
				dailyLimit: PLANS[plan].dailyLimit,
				minMatch: cur.subscription?.minMatch ?? 65,
				includeExternal: plan === 'pro' ? cur.subscription?.includeExternal ?? true : false
			} as Subscription
			if (plan === 'pro') BADGE_TESTS.forEach(t => done[t.id] && !badges[t.id] && (badges[t.id] = now))
		}
		if (it.item.startsWith('badge:')) badges[it.item.split(':')[1]] = now
		if (it.item === 'badges:all') BADGE_TESTS.forEach(t => done[t.id] && !badges[t.id] && (badges[t.id] = now))
		// A fresh subscription runs today's batch straight away.
		return { purchases: [p, ...cur.purchases], badges, subscription, lastAutoRun: it.item.startsWith('plan:') ? undefined : cur.lastAutoRun, seenDay: cur.seenDay || bakuDay() }
	})
}
