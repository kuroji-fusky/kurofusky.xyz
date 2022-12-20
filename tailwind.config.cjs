/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			inter: ['var(--font-inter)', 'sans-serif'],
			'open-sans': ['var(--font-open-sans)', 'sans-serif'],
			'jetbrains-mono': ['var(--font-jetbrains)', 'sans-serif']
		},
		extend: {
			colors: {
				'borahae-dark': '#110D17',
				'sona-royalblue': {
					50: '#E4F0FB',
					100: '#CEE4F8',
					200: '#9DC8F0',
					300: '#6CADE9',
					400: '#3D92E1',
					500: '#2076C5',
					600: '#195E9F',
					700: '#124778',
					800: '#0D3254',
					900: '#061A2D'
				},
				'sona-skycyan': {
					50: '#EBFCFE',
					100: '#DCF9FE',
					200: '#B5F2FD',
					300: '#92ECFB',
					400: '#6CE4F9',
					500: '#48DDF7',
					600: '#09D2F6',
					700: '#06A0BC',
					800: '#046E80',
					900: '#023741'
				},
				'sona-pale': {
					50: '#FFFBF5',
					100: '#FFF7EB',
					200: '#FEEFD2',
					300: '#FEEBBE',
					400: '#FDE6A5',
					500: '#FCE392',
					600: '#FBC941',
					700: '#E29F04',
					800: '#916203',
					900: '#3C2701'
				},
				'sona-yellow': {
					50: '#FFFBE6',
					100: '#FEF8D2',
					200: '#FDEFA0',
					300: '#FCE873',
					400: '#FADF42',
					500: '#F8D817',
					600: '#D1B205',
					700: '#A08803',
					800: '#695A02',
					900: '#372F01'
				},
				'sona-borahae': {
					50: '#F9ECFE',
					100: '#F2D9FC',
					200: '#E4AFF8',
					300: '#D789F5',
					400: '#C964F1',
					500: '#BB3EED',
					600: '#A313DC',
					700: '#7A0DA5',
					800: '#50096C',
					900: '#2A0439'
				},
				'sona-borahaealt': {
					50: '#F8F1FE',
					100: '#EFDFFC',
					200: '#E1C3F9',
					300: '#D2A3F5',
					400: '#C183F1',
					500: '#B266ED',
					600: '#9427E7',
					700: '#7113B9',
					800: '#4C0D7D',
					900: '#25063C'
				},
				'sona-magenta': {
					50: '#FFF5FF',
					100: '#FFF0FF',
					200: '#FFDBFF',
					300: '#FFCCFF',
					400: '#FFBDFF',
					500: '#FFABFF',
					600: '#FF57FF',
					700: '#FF00FF',
					800: '#A800A8',
					900: '#570057'
				},
				neutral: {
					50: '#E0E1DF',
					100: '#CECFCE',
					200: '#B0AFB1',
					300: '#918995',
					400: '#716477',
					500: '#514557',
					600: '#3F3842',
					700: '#2C292E',
					800: '#1A191A',
					900: '#080808'
				},
				borderRadius: {
					sm: '.125rem',
					md: '6px',
					full: '50%'
				}
			}
		}
	},
	plugins: []
};
