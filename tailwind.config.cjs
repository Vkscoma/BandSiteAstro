/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#DCBAB5',
				secondary: '#FFE5DE',
				third: '#F2E8E9',
				fourth: '#697798',
				background: '#535C71',
				background2: '#25282a',
				backgroundNav: '#131820',
				light: '#F2F2F2',
				dark: '#111111',
			},
			fontSize: {
				'h1': '3.5rem',
				'h2': '3rem',
				'h3': '2.75rem',
				'h4': '2.5rem',
				'h5': '2rem',
				'h6': '1.5rem',
				'p': '1.5rem',
			},
			plugins: [
				require('@tailwindcss/typography'),
			],
		}
	}
}
