// Backend address and demo switch, set at build time through .env / Railway variables.
export const API_URL: string = import.meta.env.VITE_BASE_URL || 'https://talentscorebackend-production.up.railway.app/'
export const DEMO_MODE: boolean = import.meta.env.VITE_DEMO_MODE === 'true'
