/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	plugins: [
		require('@tailwindcss/forms'),
	],
	theme: {
		extend: {
			fontFamily: {
				'serif': ['Noto Serif SC', ...defaultTheme.fontFamily.serif],
			},
		}
	},
	plugins: []
};
