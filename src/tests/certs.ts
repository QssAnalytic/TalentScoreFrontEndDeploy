import { viewingAs } from 'demo/viewAs'

// Registers an issued certificate so anyone can verify it by ID on the "Sertifikatı yoxla" page.
const sent = new Set<string>()

export function registerCertificate(c: { id: string; type: string; name: string; value: string; band?: string; issued: string }) {
	// Demo profiles are invented people: never put their certificates in the public registry.
	if (!c.id || sent.has(c.id) || viewingAs()) return
	sent.add(c.id)
	fetch('/cert', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(c) }).catch(() => sent.delete(c.id))
}

export async function lookupCertificate(id: string) {
	const res = await fetch(`/cert/${encodeURIComponent(id.trim().toUpperCase())}`)
	if (!res.ok) return null
	return (await res.json()) as { id: string; type: string; name: string; value: string; band: string; issued: string }
}
