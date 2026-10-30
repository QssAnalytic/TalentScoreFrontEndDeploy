// Small stroke icons used by the app shell and the test pages (inline, no network).
const base = {
	width: 20,
	height: 20,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 1.8,
	strokeLinecap: 'round' as const,
	strokeLinejoin: 'round' as const,
	'aria-hidden': true
}

export const IconHome = () => (
	<svg {...base}>
		<path d="M3 11l9-7 9 7" />
		<path d="M5 10v10h14V10" />
	</svg>
)
export const IconTalent = () => (
	<svg {...base}>
		<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z" />
	</svg>
)
export const IconBrain = () => (
	<svg {...base}>
		<path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 006 0V7a3 3 0 00-3-3z" />
		<path d="M15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-6 0" />
	</svg>
)
export const IconCompass = () => (
	<svg {...base}>
		<circle cx="12" cy="12" r="9" />
		<path d="M15.5 8.5l-2 5-5 2 2-5z" />
	</svg>
)
export const IconEnnea = () => (
	<svg {...base}>
		<circle cx="12" cy="12" r="9" />
		<path d="M12 3l7.8 13.5H4.2z" />
	</svg>
)
export const IconReport = () => (
	<svg {...base}>
		<path d="M7 3h7l5 5v13H7z" />
		<path d="M14 3v5h5M10 13h6M10 17h6" />
	</svg>
)
export const IconAward = () => (
	<svg {...base}>
		<circle cx="12" cy="9" r="5" />
		<path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5" />
	</svg>
)
export const IconCv = () => (
	<svg {...base}>
		<rect x="4" y="3" width="16" height="18" rx="2" />
		<circle cx="12" cy="9" r="2.5" />
		<path d="M8 17c.8-2 2.2-3 4-3s3.2 1 4 3" />
	</svg>
)
export const IconPlan = () => (
	<svg {...base}>
		<path d="M5 18h14M5 14h14l1-9-4 3-4-5-4 5-4-3z" />
	</svg>
)
export const IconShield = () => (
	<svg {...base}>
		<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
		<path d="M9 12l2 2 4-4" />
	</svg>
)
export const IconLogout = () => (
	<svg {...base}>
		<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10" />
	</svg>
)
export const IconCheck = () => (
	<svg {...base} width={16} height={16} strokeWidth={2.4}>
		<path d="M5 12.5l4.5 4.5L19 7.5" />
	</svg>
)
export const IconLock = () => (
	<svg {...base} width={16} height={16}>
		<rect x="5" y="11" width="14" height="9" rx="2" />
		<path d="M8 11V8a4 4 0 018 0v3" />
	</svg>
)
export const IconMenu = () => (
	<svg {...base} width={24} height={24}>
		<path d="M4 7h16M4 12h16M4 17h16" />
	</svg>
)
export const IconShare = () => (
	<svg {...base} width={18} height={18}>
		<circle cx="18" cy="5" r="2.5" />
		<circle cx="6" cy="12" r="2.5" />
		<circle cx="18" cy="19" r="2.5" />
		<path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4" />
	</svg>
)
export const IconDownload = () => (
	<svg {...base} width={18} height={18}>
		<path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
	</svg>
)
export const IconClock = () => (
	<svg {...base} width={18} height={18}>
		<circle cx="12" cy="12" r="9" />
		<path d="M12 7v5l3 2" />
	</svg>
)
export const IconArrow = () => (
	<svg {...base} width={18} height={18}>
		<path d="M5 12h14M13 6l6 6-6 6" />
	</svg>
)
