import { useState } from 'react'
import { resetDemo } from 'mock/mockApi'
import { DEMO_MODE } from 'config'

const DemoBanner = () => {
	const [open, setOpen] = useState(true)
	if (!open || !DEMO_MODE) return null
	return (
		<div className="w-full bg-qss-primary text-white text-xs px-6 py-2 flex items-center justify-center gap-4 relative z-50">
			<span>
				Demo version — the backend is offline, so sign-in accepts any email, stage questions come from the real database and scores are sample values.
			</span>
			<button
				type="button"
				className="underline underline-offset-2 hover:text-qss-gradientBottom"
				onClick={() => {
					resetDemo()
					window.location.hash = '#/'
					window.location.reload()
				}}
			>
				Reset demo
			</button>
			<button type="button" aria-label="Hide demo notice" className="absolute right-4 text-base leading-none" onClick={() => setOpen(false)}>
				×
			</button>
		</div>
	)
}

export default DemoBanner
