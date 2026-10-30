import { useEffect, useMemo, useState } from 'react'
import useAuth from 'hooks/useAuth'
import { useResults } from 'tests/store'
import { Feed, Job, JobProfile } from './types'
import { matchJob, MatchResult } from './match'
import { useCareer } from './store'

let cache: { at: number; feed: Feed } | null = null
let inflight: Promise<Feed> | null = null

export async function fetchFeed(force = false): Promise<Feed> {
	if (!force && cache && Date.now() - cache.at < 5 * 60_000) return cache.feed
	if (inflight) return inflight
	inflight = fetch('/jobs/feed')
		.then(r => {
			if (!r.ok) throw new Error(`HTTP ${r.status}`)
			return r.json()
		})
		.then((feed: Feed) => {
			cache = { at: Date.now(), feed }
			return feed
		})
		.finally(() => {
			inflight = null
		})
	return inflight
}

export async function fetchJob(id: string): Promise<Job> {
	const r = await fetch(`/jobs/item/${encodeURIComponent(id)}`)
	if (!r.ok) throw new Error(`HTTP ${r.status}`)
	return r.json()
}

export function useFeed() {
	const [feed, setFeed] = useState<Feed | null>(cache?.feed || null)
	const [error, setError] = useState('')
	useEffect(() => {
		let live = true
		fetchFeed()
			.then(f => live && setFeed(f))
			.catch(() => live && setError('Vakansiya lenti hazırda yüklənmədi. Bir az sonra yenidən yoxlayın.'))
		return () => {
			live = false
		}
	}, [])
	return { feed, error }
}

export interface Scored {
	job: Job
	m: MatchResult
}

export function scoreAll(jobs: Job[], profile: JobProfile | undefined, results: any): Scored[] {
	return jobs.map(job => ({ job, m: matchJob(job, profile, results) })).sort((a, b) => b.m.score - a.m.score)
}

// Feed + matching for the signed-in person, best matches first.
export function useMatches() {
	const { user } = useAuth()
	const results = useResults(user?.email)
	const career = useCareer(user?.email)
	const { feed, error } = useFeed()
	const scored = useMemo(() => (feed ? scoreAll(feed.jobs, career.profile, results) : []), [feed, career.profile, results])
	return { feed, error, scored, results, career, user }
}
