/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(24ch, 1fr))'
			},
			colors: {
				'accent-light': '#e0ccfa'
			},
			maxWidth: {
				'semifull': '50%'
			},
		},
	},
	plugins: [],
}
