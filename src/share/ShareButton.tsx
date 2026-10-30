import { ReactElement, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import html2canvas from 'html2canvas'
import { IconShare } from 'components/AppShell/icons'

interface Props {
	title: string // e.g. "IQ nəticəm"
	text?: string // post text
	card: ReactElement // 1200×630 card component
	className?: string
	label?: string
}

type Network = { id: string; name: string; color: string; url?: (link: string, text: string) => string }

const NETWORKS: Network[] = [
	{ id: 'linkedin', name: 'LinkedIn', color: '#0A66C2', url: link => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}` },
	{ id: 'facebook', name: 'Facebook', color: '#1877F2', url: link => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}` },
	{ id: 'x', name: 'X', color: '#0F1419', url: (link, text) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}` },
	{ id: 'telegram', name: 'Telegram', color: '#229ED9', url: (link, text) => `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(text)}` },
	{ id: 'whatsapp', name: 'WhatsApp', color: '#25D366', url: (link, text) => `https://wa.me/?text=${encodeURIComponent(`${text} ${link}`)}` },
	{ id: 'instagram', name: 'Instagram', color: '#C13584' }
]

async function renderPng(node: HTMLElement) {
	try {
		await (document as any).fonts?.ready
	} catch {
		/* fonts API unavailable */
	}
	const canvas = await html2canvas(node, { scale: 1, width: 1200, height: 630, backgroundColor: '#ffffff', useCORS: true, logging: false })
	return canvas.toDataURL('image/png')
}

const ShareButton = ({ title, text, card, className, label = 'Paylaş' }: Props) => {
	const [open, setOpen] = useState(false)
	const [png, setPng] = useState('')
	const [link, setLink] = useState('')
	const [status, setStatus] = useState('')
	const [copied, setCopied] = useState(false)
	const cardRef = useRef<HTMLDivElement>(null)
	const postText = text || `${title} — Talent Score`

	useEffect(() => {
		if (!open) return
		setPng('')
		setLink('')
		setStatus('Kart hazırlanır…')
		const t = setTimeout(async () => {
			try {
				if (!cardRef.current) return
				const img = await renderPng(cardRef.current)
				setPng(img)
				setStatus('')
			} catch {
				setStatus('Kart şəkli yaradılmadı. Səhifəni yeniləyib yenidən cəhd edin.')
			}
		}, 250)
		return () => clearTimeout(t)
	}, [open])

	// Uploads the card once and returns its public page (with link preview tags).
	const ensureLink = async () => {
		if (link) return link
		const res = await fetch('/share', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ image: png, title: postText, description: 'Talent Score — süni intellekt əsaslı bacarıq və şəxsiyyət qiymətləndirməsi' })
		})
		if (!res.ok) throw new Error('upload failed')
		const data = await res.json()
		setLink(data.url)
		return data.url as string
	}

	const download = () => {
		const a = document.createElement('a')
		a.href = png
		a.download = `${title.replace(/\s+/g, '-').toLowerCase()}.png`
		a.click()
	}

	const shareTo = async (n: Network) => {
		if (!png) return
		if (n.id === 'instagram') {
			if (await nativeShare()) return
			download()
			setStatus('Şəkil yükləndi. Instagram-da yeni paylaşım və ya hekayə yaradıb bu şəkli seçin.')
			return
		}
		const win = window.open('', '_blank')
		try {
			setStatus('Link hazırlanır…')
			const l = await ensureLink()
			setStatus('')
			if (win) win.location.href = n.url!(l, postText)
			else window.location.href = n.url!(l, postText)
		} catch {
			win?.close()
			setStatus('Paylaşım linki yaradılmadı. Şəkli yükləyib özünüz paylaşa bilərsiniz.')
		}
	}

	const canNative = typeof navigator !== 'undefined' && !!(navigator as any).canShare
	const nativeShare = async () => {
		try {
			const blob = await (await fetch(png)).blob()
			const file = new File([blob], 'talent-score.png', { type: 'image/png' })
			if ((navigator as any).canShare?.({ files: [file] })) {
				await (navigator as any).share({ files: [file], title: postText, text: postText })
				return true
			}
		} catch {
			/* cancelled or unsupported */
		}
		return false
	}

	const copy = async () => {
		try {
			const l = await ensureLink()
			await navigator.clipboard.writeText(l)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch {
			setStatus('Link kopyalanmadı.')
		}
	}

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className={className || 'flex items-center gap-2 text-[14px] py-[10px] px-[22px] rounded-[25px] border border-qss-secondary text-qss-secondary hover:bg-qss-secondary hover:text-white transition-colors'}
			>
				<IconShare /> {label}
			</button>
			{open &&
				createPortal(
					<div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Nəticəni paylaş">
						<div className="bg-white rounded-2xl w-full max-w-[680px] max-h-[92vh] overflow-y-auto p-6 flex flex-col gap-5">
							<div className="flex justify-between items-center">
								<h2 className="font-manrope text-xl font-bold text-qss-primary">{title} — paylaş</h2>
								<button type="button" onClick={() => setOpen(false)} className="text-2xl leading-none text-qss-inputText px-2" aria-label="Bağla">
									×
								</button>
							</div>
							<div className="rounded-xl overflow-hidden border border-qss-border bg-qss-input aspect-[1200/630] grid place-items-center">
								{png ? <img src={png} alt={`${title} kartı`} className="w-full h-full object-contain" /> : <span className="text-sm text-qss-inputText">Kart hazırlanır…</span>}
							</div>
							<div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
								{NETWORKS.map(n => (
									<button
										key={n.id}
										type="button"
										disabled={!png}
										onClick={() => shareTo(n)}
										className="flex flex-col items-center gap-2 rounded-xl border border-qss-border py-3 hover:border-qss-secondary disabled:opacity-40 transition-colors"
									>
										<span className="w-9 h-9 rounded-full grid place-items-center text-white text-sm font-bold" style={{ background: n.color }}>
											{n.name[0]}
										</span>
										<span className="text-xs text-qss-primary">{n.name}</span>
									</button>
								))}
							</div>
							<div className="flex flex-wrap gap-3">
								<button type="button" disabled={!png} onClick={download} className="text-[14px] py-[9px] px-[20px] rounded-[25px] bg-qss-secondary text-white disabled:opacity-40">
									Şəkli yüklə
								</button>
								<button type="button" disabled={!png} onClick={copy} className="text-[14px] py-[9px] px-[20px] rounded-[25px] border border-qss-secondary text-qss-secondary disabled:opacity-40">
									{copied ? 'Kopyalandı' : 'Linki kopyala'}
								</button>
								{canNative && (
									<button type="button" disabled={!png} onClick={nativeShare} className="text-[14px] py-[9px] px-[20px] rounded-[25px] border border-qss-border text-qss-primary disabled:opacity-40">
										Telefonla paylaş
									</button>
								)}
							</div>
							{status && <p className="text-sm text-qss-inputText">{status}</p>}
							<p className="text-xs text-qss-base-300">Paylaşılan linkdə yalnız bu kart görünür — cavablarınız və tam hesabatınız gizli qalır.</p>
						</div>
						<div style={{ position: 'fixed', left: -12000, top: 0, width: 1200, height: 630 }} aria-hidden="true">
							<div ref={cardRef}>{card}</div>
						</div>
					</div>,
					document.body
				)}
		</>
	)
}

export default ShareButton
