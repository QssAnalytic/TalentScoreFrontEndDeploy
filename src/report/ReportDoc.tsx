// The CDS-ES report frame: A4-proportioned pages, a cover page, running headers
// ("NAME | SECTION | TALENT SCORE • 85") and page breaks for print / PDF.
import { createContext, ReactNode, useContext, useRef } from 'react'
import darklogo from 'assets/darklogo.svg'
import { useExport } from 'pages/Tests/components/useExport'
import { ExportBar } from 'pages/Tests/iq/IqTest'
import { CDS } from './design'
import { OverallRing, ScoreTiles } from './charts'

export interface Person {
	name: string
	birth?: string // dd.mm.yyyy
	age?: number | null
	gender?: string // already in Azerbaijani
	city?: string
	language?: string
	photo?: string
}

interface DocCtx {
	person: Person
	score: string // shown in the running header, e.g. '85.30'
}
const Ctx = createContext<DocCtx>({ person: { name: '' }, score: '' })

const PRINT_CSS = `
@media print {
  @page { size: A4; margin: 0; }
  .cds-page { box-shadow: none !important; margin: 0 !important; border-radius: 0 !important; break-after: page; page-break-after: always; }
  .cds-page:last-child { break-after: auto; page-break-after: auto; }
  .cds-doc { gap: 0 !important; background: #fff !important; padding: 0 !important; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}`

export const ReportDoc = ({ person, score, fileName, children, toolbar }: { person: Person; score: string; fileName: string; children: ReactNode; toolbar?: ReactNode }) => {
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, fileName)
	return (
		<Ctx.Provider value={{ person, score }}>
			<div className="flex flex-col gap-4 items-start w-full">
				<div className="flex flex-wrap gap-3 items-center">
					<ExportBar onPrint={print} />
					{toolbar}
				</div>
				<div ref={ref} className="cds-doc w-full flex flex-col items-center gap-8 font-inter" style={{ color: CDS.ink }}>
					<style>{PRINT_CSS}</style>
					{children}
				</div>
			</div>
		</Ctx.Provider>
	)
}

const Logo = ({ className = 'h-7' }: { className?: string }) => <img src={darklogo} alt="Talent Score" className={`${className} self-start w-auto`} />

// A content page with the running header at the bottom.
export const Page = ({ section, n, children, logo = true }: { section: string; n?: number; children: ReactNode; logo?: boolean }) => {
	const { person, score } = useContext(Ctx)
	return (
		<article className="cds-page relative w-full max-w-[860px] bg-white shadow-[0_6px_30px_rgba(13,79,79,0.10)] rounded-md px-6 sm:px-12 pt-10 pb-16 flex flex-col gap-8">
			{logo && <Logo />}
			{children}
			<footer className="absolute left-6 right-6 sm:left-12 sm:right-12 bottom-5 flex justify-between items-center text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-cds-muted">
				<span className="truncate">
					{person.name} | {section} | Talent Score • {score}
				</span>
				{n != null && <span className="tabular-nums">{n}</span>}
			</footer>
		</article>
	)
}

const Field = ({ label, value, wide }: { label: string; value?: ReactNode; wide?: boolean }) => (
	<div className={`grid grid-cols-[120px_1fr] sm:grid-cols-[170px_1fr] items-center gap-3 ${wide ? '' : ''}`}>
		<span className="text-right text-[15px] sm:text-[17px]" style={{ color: CDS.heading }}>
			{label}
		</span>
		<span className="rounded-md border border-cds-line bg-white px-4 py-2 text-[15px] min-h-[42px] flex items-center">{value || '—'}</span>
	</div>
)

// Cover page: brand, date band, person block, note + signature, tiles, overall ring + summary, verification band.
export const Cover = ({
	title,
	date,
	tiles,
	overall,
	overallLabel = 'Ümumi',
	overallDisplay,
	overallMax = 100,
	summary,
	note,
	certificateId
}: {
	title: string
	date: string
	tiles: { label: string; value: string | number; color: string }[]
	overall: number
	overallLabel?: string
	overallDisplay?: string
	overallMax?: number
	summary: ReactNode
	note?: string
	certificateId?: string
}) => {
	const { person } = useContext(Ctx)
	return (
		<article className="cds-page relative w-full max-w-[860px] bg-white shadow-[0_6px_30px_rgba(13,79,79,0.10)] rounded-md pb-6 flex flex-col gap-8 overflow-hidden">
			<div className="px-6 sm:px-10 pt-8 flex items-start gap-4">
				<span className="w-1 self-stretch rounded" style={{ background: CDS.teal }} />
				<div>
					<Logo className="h-8" />
					<p className="text-sm mt-1" style={{ color: CDS.teal }}>
						Süni intellekt sistemi
					</p>
				</div>
				<p className="ml-auto text-right font-manrope text-lg sm:text-xl font-bold" style={{ color: CDS.heading }}>
					{title}
				</p>
			</div>
			<div className="mx-4 sm:mx-8 flex items-center justify-between gap-4 px-6 py-4 text-white rounded-sm" style={{ background: CDS.gradient }}>
				<span className="flex items-center gap-3 text-lg">
					Tarix <span className="rounded bg-white text-cds-ink px-3 py-1 text-base tabular-nums">{date}</span>
				</span>
				<span className="text-base sm:text-lg">Talent Score tərəfindən verilib</span>
			</div>
			<div className="mx-4 sm:mx-8 rounded-sm bg-cds-paper p-5 sm:p-7 grid md:grid-cols-[1fr_190px] gap-6 items-center">
				<div className="flex flex-col gap-3">
					<Field label="Ad, soyad" value={person.name} />
					<div className="grid sm:grid-cols-2 gap-3">
						<Field label="Doğum tarixi" value={person.birth} />
						<Field label="Cins" value={person.gender} />
					</div>
					<Field label="Şəhər" value={person.city || 'Azərbaycan'} />
					<Field label="Ana dili" value={person.language || 'Azərbaycan dili'} />
				</div>
				<div className="justify-self-center w-[170px] h-[200px] rounded-md overflow-hidden border border-cds-line bg-white grid place-items-center">
					{person.photo ? <img src={person.photo} alt="" className="w-full h-full object-cover" /> : <span className="text-cds-muted text-sm">Şəkil yoxdur</span>}
				</div>
			</div>
			<div className="mx-6 sm:mx-10 grid sm:grid-cols-[1fr_auto] gap-6 items-end">
				<p className="text-[14px] leading-relaxed">
					<b>Qeyd:</b> {note || 'Bu hesabatda göstərilən nəticələrin iki ildən sonra yenidən qiymətləndirilməsi tövsiyə olunur.'}
				</p>
				<div className="text-[14px]">
					<p className="font-bold">İmza:</p>
					<p className="flex items-end gap-3">
						Talent Score Test Mərkəzi <span className="inline-block w-36 border-b border-cds-ink" />
					</p>
				</div>
			</div>
			<div className="mx-6 sm:mx-10 flex flex-col gap-4">
				<h2 className="text-xl font-bold">Test nəticələri</h2>
				<ScoreTiles items={tiles} />
			</div>
			<div className="mx-4 sm:mx-8 rounded-sm bg-cds-paper p-5 sm:p-7 grid md:grid-cols-[260px_1fr] gap-6 items-center">
				<div className="bg-white rounded-md p-3 grid place-items-center">
					<OverallRing value={overall} max={overallMax} label={overallLabel} display={overallDisplay} />
				</div>
				<div className="text-[15px] leading-relaxed text-justify flex flex-col gap-3">{summary}</div>
			</div>
			<div className="mx-4 sm:mx-8 px-6 py-4 text-white text-[14px] sm:text-[15px] rounded-sm" style={{ background: CDS.gradient }}>
				Bu hesabatın etibarlılığını Talent Score saytında yoxlamaq olar{certificateId ? ` — Sertifikat ID: ${certificateId}` : ''}: talentscore · Sertifikatı yoxla
			</div>
		</article>
	)
}

// Section heading inside a page (teal band with rounded top, content panel under it).
export const Panel = ({ title, right, children }: { title: string; right?: ReactNode; children: ReactNode }) => (
	<section className="break-inside-avoid">
		<div className="flex items-center justify-between gap-4 px-6 sm:px-7 py-4 text-white rounded-t-md" style={{ background: CDS.gradient }}>
			<h2 className="text-[20px] sm:text-[22px] font-medium">{title}</h2>
			{right}
		</div>
		<div className="bg-cds-paper rounded-b-md px-5 sm:px-8 py-6">{children}</div>
	</section>
)

export const H2 = ({ children }: { children: ReactNode }) => (
	<h2 className="font-manrope text-[24px] font-bold" style={{ color: CDS.heading }}>
		{children}
	</h2>
)

export const P = ({ children }: { children: ReactNode }) => <p className="text-[15px] leading-relaxed text-justify text-cds-ink/90">{children}</p>

export const List = ({ items, color = CDS.teal }: { items: string[]; color?: string }) => (
	<ul className="flex flex-col gap-2">
		{items.map(t => (
			<li key={t} className="flex gap-3 text-[15px] leading-relaxed text-cds-ink/90">
				<span className="mt-2 w-2 h-2 shrink-0 rounded-sm" style={{ background: color }} />
				<span>{t}</span>
			</li>
		))}
	</ul>
)

export const Quote = ({ children }: { children: ReactNode }) => (
	<blockquote className="text-center font-manrope text-2xl sm:text-3xl font-semibold leading-snug px-6 py-10" style={{ color: CDS.heading }}>
		“{children}”
	</blockquote>
)

// Two- or three-column "plan" grid (30 days / 90 days / 1 year).
export const PlanGrid = ({ plan }: { plan: { title: string; items: string[] }[] }) => (
	<div className="grid md:grid-cols-3 gap-4">
		{plan.map(col => (
			<div key={col.title} className="rounded-md border border-cds-line bg-white p-4 flex flex-col gap-2">
				<p className="text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: CDS.teal }}>
					{col.title}
				</p>
				<List items={col.items} />
			</div>
		))}
	</div>
)
