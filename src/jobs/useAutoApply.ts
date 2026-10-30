// Runs the daily auto-apply batch when the signed-in person opens the app:
// new vacancies above their match threshold get an application with a tailored
// cover letter, up to the plan's daily limit.
import { useEffect } from 'react'
import useAuth from 'hooks/useAuth'
import { loadResults } from 'tests/store'
import { fetchFeed, scoreAll } from './api'
import { bakuDay, loadCareer, saveCareer } from './store'
import { coverLetter } from './letters'
import { Application, Job } from './types'
import { MatchResult } from './match'

let runningFor = ''

export function makeApplication(job: Job, m: MatchResult, mode: 'auto' | 'manual', email: string, name: string): Application {
	const results = loadResults(email)
	const career = loadCareer(email)
	return {
		id: `A-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
		job: { id: job.id, title: job.title, company: job.company, sector: job.sector, city: job.city, url: job.url, source: job.source, sample: job.sample, external: job.external, level: job.level, salaryMin: job.salaryMin, salaryMax: job.salaryMax, salaryText: job.salaryText },
		match: m.score,
		mode,
		createdAt: new Date().toISOString(),
		day: bakuDay(),
		coverLetter: coverLetter(job, m, career.profile, results, { name, email }),
		events: []
	}
}

export async function runAutoApply(email: string, name: string, force = false) {
	const c = loadCareer(email)
	const sub = c.subscription
	const today = bakuDay()
	if (!sub?.active || (!force && c.lastAutoRun === today)) return 0
	const feed = await fetchFeed(true)
	const results = loadResults(email)
	const applied = new Set(c.applications.map(a => a.job.id))
	const alreadyToday = c.applications.filter(a => a.mode === 'auto' && a.day === today).length
	const room = Math.max(0, sub.dailyLimit - alreadyToday)
	// New in the last two days, not yet applied, above the threshold.
	const since = bakuDay(new Date(Date.now() - 2 * 86400_000))
	const picks = scoreAll(
		feed.jobs.filter(j => j.firstSeen >= since && !applied.has(j.id) && (sub.includeExternal || !j.external)),
		c.profile,
		results
	)
		.filter(x => x.m.score >= sub.minMatch)
		.slice(0, room)
	const apps = picks.map(({ job, m }) => makeApplication(job, m, 'auto', email, name))
	saveCareer(email, cur => ({ applications: [...apps, ...cur.applications], lastAutoRun: today }))
	return apps.length
}

export function useAutoApply() {
	const { user } = useAuth()
	useEffect(() => {
		const email = user?.email
		if (!email || runningFor === email) return
		runningFor = email
		const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
		runAutoApply(email, name)
			.catch(() => {
				/* feed unavailable; tries again on next visit */
			})
			.finally(() => {
				runningFor = ''
			})
	}, [user?.email])
}
