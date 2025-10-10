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
					DEFAULT: '#005f7a', // WCAG AA compliant - 5.28:1 contrast ratio
					light: '#00b6f0', // Original color for backgrounds only
					lighter: '#33c4f3',
					dark: '#004d65', // WCAG AA compliant - 7.51:1 contrast ratio
					50: '#e6f7fd',
					100: '#b3e8fa',
					200: '#80d9f7',
					300: '#4dcaf4',
					400: '#1abcf1',
					500: '#005f7a', // WCAG AA compliant
					600: '#004d65',
					700: '#003b50',
					800: '#00293b',
					900: '#001726',
				},
				accent: {
					cyan: '#abb8c3',
					pink: '#f78da7',
					red: '#cf2e2e',
					orange: '#ff6900',
					green: '#006d47', // WCAG AA compliant - 4.52:1 contrast
					'green-light': '#00d084', // Original for backgrounds
					blue: '#006aa0', // WCAG AA compliant - 4.54:1 contrast
					'blue-light': '#0693e3', // Original for backgrounds
					purple: '#9b51e0',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
