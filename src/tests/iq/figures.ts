// Inline SVG generators for the IQ test question bank.
// Every exported "figure" function returns a complete <svg>…</svg> string; the lower-level helpers
// (shape, dots, polyomino, …) return SVG fragments drawn in a local 0..100 coordinate box.

export const INK = '#103557'
export const ACCENT = '#08D0B0'

export type Fill = 'solid' | 'empty' | 'accent'
export type ShapeKind =
	| 'circle'
	| 'square'
	| 'triangle'
	| 'diamond'
	| 'star'
	| 'pentagon'
	| 'hexagon'
	| 'heptagon'
	| 'arrow'

const r2 = (n: number): number => Math.round(n * 100) / 100
const fillOf = (f: Fill = 'empty'): string => (f === 'solid' ? INK : f === 'accent' ? ACCENT : 'none')
const pts = (list: [number, number][]): string => list.map(([x, y]) => `${r2(x)},${r2(y)}`).join(' ')

/** Wrap SVG content into a complete, standalone <svg> element. */
export function svg(inner: string, vbW: number, vbH: number, width: number = vbW, height: number = vbH): string {
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" width="${r2(width)}" height="${r2(height)}">${inner}</svg>`
}

/** Points of a regular polygon (first vertex at `startDeg`, 0° = 3 o'clock, -90° = top). */
function regular(n: number, cx: number, cy: number, r: number, startDeg = -90): [number, number][] {
	const out: [number, number][] = []
	for (let i = 0; i < n; i++) {
		const a = ((startDeg + (360 / n) * i) * Math.PI) / 180
		out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)])
	}
	return out
}

export interface ShapeOpts {
	x: number // centre
	y: number
	size: number // bounding size
	fill?: Fill
	rotate?: number // degrees, clockwise
	sw?: number // stroke width
}

/** A single geometric shape centred at (x, y). */
export function shape(kind: ShapeKind, o: ShapeOpts): string {
	const { x, y, size } = o
	const h = size / 2
	const sw = o.sw ?? 2.5
	const attrs = `fill="${fillOf(o.fill)}" stroke="${INK}" stroke-width="${sw}" stroke-linejoin="round"`
	let el: string
	switch (kind) {
		case 'circle':
			el = `<circle cx="${r2(x)}" cy="${r2(y)}" r="${r2(h * 0.92)}" ${attrs}/>`
			break
		case 'square': {
			const s = size * 0.8
			el = `<rect x="${r2(x - s / 2)}" y="${r2(y - s / 2)}" width="${r2(s)}" height="${r2(s)}" ${attrs}/>`
			break
		}
		case 'diamond':
			el = `<polygon points="${pts([
				[x, y - h],
				[x + h * 0.8, y],
				[x, y + h],
				[x - h * 0.8, y],
			])}" ${attrs}/>`
			break
		case 'triangle':
			// shifted down slightly so the triangle looks optically centred
			el = `<polygon points="${pts(regular(3, x, y + h * 0.12, h * 1.05))}" ${attrs}/>`
			break
		case 'pentagon':
			el = `<polygon points="${pts(regular(5, x, y, h))}" ${attrs}/>`
			break
		case 'hexagon':
			el = `<polygon points="${pts(regular(6, x, y, h))}" ${attrs}/>`
			break
		case 'heptagon':
			el = `<polygon points="${pts(regular(7, x, y, h))}" ${attrs}/>`
			break
		case 'star': {
			const outer = regular(5, x, y, h)
			const inner = regular(5, x, y, h * 0.42, -90 + 36)
			const star: [number, number][] = []
			for (let i = 0; i < 5; i++) star.push(outer[i], inner[i])
			el = `<polygon points="${pts(star)}" ${attrs}/>`
			break
		}
		case 'arrow':
			// points straight up when rotate = 0
			el = `<polygon points="${pts([
				[x, y - h],
				[x + h * 0.6, y - h * 0.15],
				[x + h * 0.22, y - h * 0.15],
				[x + h * 0.22, y + h],
				[x - h * 0.22, y + h],
				[x - h * 0.22, y - h * 0.15],
				[x - h * 0.6, y - h * 0.15],
			])}" ${attrs}/>`
			break
	}
	return o.rotate ? `<g transform="rotate(${r2(o.rotate)} ${r2(x)} ${r2(y)})">${el}</g>` : el
}

/** The only text allowed inside figures: a question mark. */
export function qmark(cx: number, cy: number, size = 46): string {
	return `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="700" fill="${INK}">?</text>`
}

// ---------------------------------------------------------------------------
// Layout wrappers (complete SVGs)
// ---------------------------------------------------------------------------

/** 3×3 (or n×m) matrix stem; each cell is content in a 0..100 box, `null` is the "?" cell. Rendered ~300×300. */
export function matrix(cells: (string | null)[][]): string {
	const pad = 4
	const rows = cells.length
	const cols = cells[0].length
	const vbW = pad * 2 + cols * 100
	const vbH = pad * 2 + rows * 100
	let inner = `<rect x="${pad}" y="${pad}" width="${cols * 100}" height="${rows * 100}" rx="6" fill="none" stroke="${INK}" stroke-width="2.5"/>`
	for (let c = 1; c < cols; c++)
		inner += `<line x1="${pad + c * 100}" y1="${pad}" x2="${pad + c * 100}" y2="${pad + rows * 100}" stroke="${INK}" stroke-width="2"/>`
	for (let r = 1; r < rows; r++)
		inner += `<line x1="${pad}" y1="${pad + r * 100}" x2="${pad + cols * 100}" y2="${pad + r * 100}" stroke="${INK}" stroke-width="2"/>`
	cells.forEach((row, r) =>
		row.forEach((content, c) => {
			const ox = pad + c * 100
			const oy = pad + r * 100
			inner +=
				content === null
					? `<rect x="${ox + 8}" y="${oy + 8}" width="84" height="84" rx="6" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-dasharray="6 5"/>${qmark(ox + 50, oy + 52)}`
					: `<g transform="translate(${ox} ${oy})">${content}</g>`
		}),
	)
	return svg(inner, vbW, vbH, (vbW * 300) / 308, (vbH * 300) / 308)
}

/** Horizontal figure series; `null` frames show "?". */
export function series(frames: (string | null)[], scale = 0.85, framed = true): string {
	const pad = 4
	const gap = 14
	const n = frames.length
	const vbW = pad * 2 + n * 100 + (n - 1) * gap
	const vbH = pad * 2 + 100
	let inner = ''
	frames.forEach((content, i) => {
		const ox = pad + i * (100 + gap)
		if (content === null) {
			inner += `<rect x="${ox}" y="${pad}" width="100" height="100" rx="8" fill="none" stroke="${ACCENT}" stroke-width="2.5" stroke-dasharray="6 5"/>${qmark(ox + 50, pad + 52)}`
		} else {
			if (framed)
				inner += `<rect x="${ox}" y="${pad}" width="100" height="100" rx="8" fill="none" stroke="${INK}" stroke-width="2"/>`
			inner += `<g transform="translate(${ox} ${pad})">${content}</g>`
		}
	})
	return svg(inner, vbW, vbH, vbW * scale, vbH * scale)
}

/** One answer-option figure, ~90×90. */
export function option(content: string): string {
	return svg(content, 100, 100, 90, 90)
}

/** A single stand-alone stem figure (e.g. the shape to rotate). */
export function single(content: string, px = 150): string {
	return svg(content, 100, 100, px, px)
}

// ---------------------------------------------------------------------------
// Cell content helpers (0..100 box)
// ---------------------------------------------------------------------------

const LAYOUTS: Record<number, [number, number][]> = {
	1: [[50, 50]],
	2: [
		[31, 50],
		[69, 50],
	],
	3: [
		[50, 29],
		[29, 69],
		[71, 69],
	],
	4: [
		[31, 31],
		[69, 31],
		[31, 69],
		[69, 69],
	],
	5: [
		[27, 27],
		[73, 27],
		[50, 50],
		[27, 73],
		[73, 73],
	],
	6: [
		[31, 24],
		[69, 24],
		[31, 50],
		[69, 50],
		[31, 76],
		[69, 76],
	],
}

/** `n` (1..6) identical shapes laid out like dice pips. */
export function dots(n: number, kind: ShapeKind = 'circle', fill: Fill = 'solid', size = 18): string {
	return LAYOUTS[n].map(([x, y]) => shape(kind, { x, y, size, fill, sw: 2 })).join('')
}

/** A regular polygon (outline) with `dotCount` small solid dots arranged on a ring inside it. */
export function polygonWithDots(sides: number, dotCount: number): string {
	const start = sides === 4 ? -135 : -90
	const poly = `<polygon points="${pts(regular(sides, 50, sides === 3 ? 56 : 50, sides === 3 ? 44 : 40, start))}" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`
	const cy = sides === 3 ? 60 : 50
	const ring = regular(dotCount, 50, cy, dotCount <= 3 ? 9 : dotCount <= 5 ? 13 : 17, -90)
		.map(([x, y]) => `<circle cx="${r2(x)}" cy="${r2(y)}" r="3.6" fill="${INK}"/>`)
		.join('')
	return poly + ring
}

/** 2×2 grid; positions clockwise from top-left: 0 TL, 1 TR, 2 BR, 3 BL. */
export function quad(solidPos: number, accentPos: number): string {
	const origin: [number, number][] = [
		[16, 16],
		[50, 16],
		[50, 50],
		[16, 50],
	]
	return origin
		.map(([x, y], i) => {
			const f: Fill = i === solidPos ? 'solid' : i === accentPos ? 'accent' : 'empty'
			return `<rect x="${x}" y="${y}" width="34" height="34" fill="${fillOf(f)}" stroke="${INK}" stroke-width="2.5"/>`
		})
		.join('')
}

/** Perimeter positions of a 3×3 grid, clockwise from the top-left corner: [col, row]. */
export const PERIMETER: [number, number][] = [
	[0, 0],
	[1, 0],
	[2, 0],
	[2, 1],
	[2, 2],
	[1, 2],
	[0, 2],
	[0, 1],
]

/** 3×3 grid with a solid circle and an accent square on perimeter positions. */
export function perimeterGrid(circlePos: number, squarePos: number): string {
	let out = ''
	for (let r = 0; r < 3; r++)
		for (let c = 0; c < 3; c++)
			out += `<rect x="${11 + c * 26}" y="${11 + r * 26}" width="26" height="26" fill="none" stroke="${INK}" stroke-width="1.5"/>`
	const [cc, cr] = PERIMETER[circlePos]
	const [sc, sr] = PERIMETER[squarePos]
	out += `<circle cx="${24 + cc * 26}" cy="${24 + cr * 26}" r="8" fill="${INK}"/>`
	out += `<rect x="${24 + sc * 26 - 8}" y="${24 + sr * 26 - 8}" width="16" height="16" fill="${ACCENT}" stroke="${INK}" stroke-width="2"/>`
	return out
}

export type Seg = 'top' | 'right' | 'bottom' | 'left' | 'd1' | 'd2' | 'vmid' | 'hmid'
const SEG: Record<Seg, [number, number, number, number]> = {
	top: [20, 20, 80, 20],
	right: [80, 20, 80, 80],
	bottom: [20, 80, 80, 80],
	left: [20, 20, 20, 80],
	d1: [20, 20, 80, 80],
	d2: [80, 20, 20, 80],
	vmid: [50, 20, 50, 80],
	hmid: [20, 50, 80, 50],
}

/** Line segments on a square frame (sides, diagonals, middle lines). */
export function segments(set: Seg[]): string {
	return set
		.map((s) => {
			const [x1, y1, x2, y2] = SEG[s]
			return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`
		})
		.join('')
}

/** Lines that are present in exactly one of the two sets. */
export function xorSeg(a: Seg[], b: Seg[]): Seg[] {
	return [...a.filter((s) => !b.includes(s)), ...b.filter((s) => !a.includes(s))]
}

// ---------------------------------------------------------------------------
// Polyominoes (rotation / mirror items)
// ---------------------------------------------------------------------------

export type Cell = [number, number] // [col, row]
export type Rot = 0 | 90 | 180 | 270

/**
 * Mirror (left↔right) first if requested, then rotate clockwise by `rot` (screen coordinates, y down),
 * then normalise so the minimum col/row is 0. Cell order is preserved (so a marked cell keeps its index).
 */
export function transformCells(cells: Cell[], rot: Rot = 0, mirror = false): Cell[] {
	let p: Cell[] = cells.map(([c, r]) => [mirror ? -c : c, r])
	for (let k = 0; k < rot / 90; k++) p = p.map(([c, r]) => [-r, c])
	const minC = Math.min(...p.map((q) => q[0]))
	const minR = Math.min(...p.map((q) => q[1]))
	return p.map(([c, r]) => [c - minC, r - minR])
}

/** Mirror top↔bottom (horizontal axis). */
export function flipVertical(cells: Cell[]): Cell[] {
	const maxR = Math.max(...cells.map((q) => q[1]))
	return cells.map(([c, r]) => [c, maxR - r])
}

/** Draw a polyomino centred in the 0..100 box. `accent` = index of a cell drawn in the accent colour. */
export function polyomino(cells: Cell[], accent = -1, unit = 20): string {
	const w = Math.max(...cells.map((q) => q[0])) + 1
	const h = Math.max(...cells.map((q) => q[1])) + 1
	const ox = 50 - (w * unit) / 2
	const oy = 50 - (h * unit) / 2
	return cells
		.map(
			([c, r], i) =>
				`<rect x="${r2(ox + c * unit)}" y="${r2(oy + r * unit)}" width="${unit}" height="${unit}" fill="${i === accent ? ACCENT : INK}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>`,
		)
		.join('')
}

/** Stem for a mirror item: the shape on the left and a dashed vertical mirror line on the right. */
export function mirrorStem(cells: Cell[], accent = -1): string {
	const shapeG = `<g transform="translate(-14 0)">${polyomino(cells, accent)}</g>`
	const line = `<line x1="90" y1="8" x2="90" y2="92" stroke="${ACCENT}" stroke-width="3" stroke-dasharray="7 5"/>`
	return svg(shapeG + line, 100, 100, 160, 160)
}

// ---------------------------------------------------------------------------
// Paper folding
// ---------------------------------------------------------------------------

/** Map paper coordinates (0..100) into the 0..100 frame with a 10-unit margin. */
const P = (v: number): number => 10 + v * 0.8

function arrowHead(x: number, y: number, dx: number, dy: number): string {
	const len = Math.hypot(dx, dy)
	const ux = dx / len
	const uy = dy / len
	const s = 7
	const a: [number, number] = [x, y]
	const b: [number, number] = [x - ux * s * 1.4 + -uy * s * 0.75, y - uy * s * 1.4 + ux * s * 0.75]
	const c: [number, number] = [x - ux * s * 1.4 - -uy * s * 0.75, y - uy * s * 1.4 - ux * s * 0.75]
	return `<polygon points="${pts([a, b, c])}" fill="${ACCENT}" stroke="${ACCENT}" stroke-width="1.5" stroke-linejoin="round"/>`
}

const ghost = (x: number, y: number, w: number, h: number): string =>
	`<rect x="${r2(P(x))}" y="${r2(P(y))}" width="${r2(w * 0.8)}" height="${r2(h * 0.8)}" fill="none" stroke="${INK}" stroke-opacity="0.25" stroke-width="1.5" stroke-dasharray="4 4"/>`
const paper = (x: number, y: number, w: number, h: number): string =>
	`<rect x="${r2(P(x))}" y="${r2(P(y))}" width="${r2(w * 0.8)}" height="${r2(h * 0.8)}" fill="none" stroke="${INK}" stroke-width="2.5"/>`
const hole = (x: number, y: number): string => `<circle cx="${r2(P(x))}" cy="${r2(P(y))}" r="5" fill="${INK}"/>`

/**
 * Three panels: (1) fold the left half onto the right half, (2) fold the top half down onto the bottom half,
 * (3) punch a hole at paper point `punch` (must lie in the bottom-right quarter).
 */
export function paperFoldStem(punch: [number, number]): string {
	const p1 =
		paper(0, 0, 100, 100) +
		`<line x1="${P(50)}" y1="${P(0)}" x2="${P(50)}" y2="${P(100)}" stroke="${INK}" stroke-width="2" stroke-dasharray="5 4"/>` +
		`<path d="M ${P(22)} ${P(45)} Q ${P(50)} ${P(8)} ${P(78)} ${P(45)}" fill="none" stroke="${ACCENT}" stroke-width="3"/>` +
		arrowHead(P(78), P(45), 28, 37)
	const p2 =
		ghost(0, 0, 50, 100) +
		paper(50, 0, 50, 100) +
		`<line x1="${P(50)}" y1="${P(50)}" x2="${P(100)}" y2="${P(50)}" stroke="${INK}" stroke-width="2" stroke-dasharray="5 4"/>` +
		`<path d="M ${P(62)} ${P(22)} Q ${P(104)} ${P(50)} ${P(62)} ${P(78)}" fill="none" stroke="${ACCENT}" stroke-width="3"/>` +
		arrowHead(P(62), P(78), -42, 28)
	const p3 = ghost(0, 0, 100, 100) + paper(50, 50, 50, 50) + hole(punch[0], punch[1])
	return series([p1, p2, p3], 0.9, false)
}

/** The unfolded sheet with holes at the given paper coordinates. */
export function paperUnfolded(holes: [number, number][]): string {
	return (
		paper(0, 0, 100, 100) +
		`<line x1="${P(50)}" y1="${P(0)}" x2="${P(50)}" y2="${P(100)}" stroke="${INK}" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4 4"/>` +
		`<line x1="${P(0)}" y1="${P(50)}" x2="${P(100)}" y2="${P(50)}" stroke="${INK}" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4 4"/>` +
		holes.map(([x, y]) => hole(x, y)).join('')
	)
}

// ---------------------------------------------------------------------------
// Memory: symbol grid
// ---------------------------------------------------------------------------

export interface GridSymbol {
	row: number
	col: number
	kind: ShapeKind
	fill: Fill
}

function grid3(highlight?: [number, number]): string {
	let out = ''
	for (let r = 0; r < 3; r++)
		for (let c = 0; c < 3; c++) {
			const hl = highlight && highlight[0] === r && highlight[1] === c
			out += `<rect x="${8 + c * 28}" y="${8 + r * 28}" width="28" height="28" fill="${hl ? ACCENT : 'none'}" stroke="${INK}" stroke-width="1.6"/>`
		}
	return out
}

/** 3×3 grid with symbols — shown during the memorise phase. */
export function symbolGrid(items: GridSymbol[], px = 220): string {
	const inner =
		grid3() +
		items.map((s) => shape(s.kind, { x: 22 + s.col * 28, y: 22 + s.row * 28, size: 18, fill: s.fill, sw: 2 })).join('')
	return svg(inner, 100, 100, px, px)
}

/** Empty 3×3 grid with one highlighted cell — answer option for "where was …?". */
export function gridCellOption(row: number, col: number): string {
	return option(grid3([row, col]))
}
