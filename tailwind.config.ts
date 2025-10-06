import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#00b6f0',
					50: '#e6f7fd',
					100: '#b3e8fa',
					200: '#80d9f7',
					300: '#4dcaf4',
					400: '#1abcf1',
					500: '#00b6f0',
					600: '#0092c0',
					700: '#006d90',
					800: '#004960',
					900: '#002430',
				},
				accent: {
					cyan: '#abb8c3',
					pink: '#f78da7',
					red: '#cf2e2e',
					orange: '#ff6900',
					green: '#00d084',
					blue: '#0693e3',
					purple: '#9b51e0',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
