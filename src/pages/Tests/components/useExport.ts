import { RefObject } from 'react'
import html2canvas from 'html2canvas'
import { useReactToPrint } from 'react-to-print'

// Download a DOM node as PNG, or print it (the browser's print dialog also saves as PDF).
export function useExport(ref: RefObject<HTMLElement>, name: string) {
	const print = useReactToPrint({ content: () => ref.current, documentTitle: name })
	const png = async () => {
		if (!ref.current) return
		try {
			await (document as any).fonts?.ready
		} catch {
			/* ignore */
		}
		const canvas = await html2canvas(ref.current, { scale: 2, backgroundColor: '#ffffff', useCORS: true, logging: false })
		const a = document.createElement('a')
		a.href = canvas.toDataURL('image/png')
		a.download = `${name}.png`
		a.click()
	}
	return { print, png }
}
