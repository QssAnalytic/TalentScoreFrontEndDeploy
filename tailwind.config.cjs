const {transform} = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true
			},
			fontFamily: {
				inter: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
				manrope: ['Manrope', 'Inter', 'system-ui', 'Arial', 'sans-serif']
			},
			colors: {
				// CDS-ES report palette (see src/report/design.ts)
				cds: {
					deep: '#0B5F5F',
					teal: '#0A9384',
					mint: '#5CCBB8',
					heading: '#0D4F4F',
					navy: '#12355B',
					orange: '#F7931E',
					purple: '#8A4FA5',
					steel: '#538CA8',
					green: '#1F925A',
					red: '#A6262B',
					paper: '#F7F7F7',
					line: '#E4E7E7',
					ink: '#1F2A2E',
					muted: '#5E6B70'
				},
				qss: {
					saveBtn: '#103557',
					primary: '#103557',
					white: '#FFFFFF',
					secondary: '#038477',
					alternative: '#025C60',
					background: '#FBFBFB',
					input: '#F2F6F6',
					inputText: '#444444',
					transbg: '#EBF5F4',
					gradientTop: '#00404C',
					gradientBottom: '#08D0B0',
					border: '#F4F4F4',
					'base-100': '#CACACA',
					'base-200': '#D9D9D9',
					'base-300': '#ADADAD',
					'base-400': '#E1EEED',
					"base-500": "#22BBAD"
				}
			},

			animation: {
				heart: 'heart 4s ease-in-out infinite',
				'fade-in': 'fade-in 0.2s ease-in'
			},
			keyframes: {
				heart: {
					'0%,100%': {transform: 'translate(-1%,-2%)'},
					'50%': {transform: 'translate(0)'}
				},

				'fade-in': {
					'0%': {opacity: 0},
					'100%': {opacity: 1}
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};
