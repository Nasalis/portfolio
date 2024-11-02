import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'black-100': "#151312",
        'black-200': '#1C1A19',
        'gray-100': '#A9B1D633',
        'gray-200': '#11182733',
        'gray-light-100': '#C4C4C4',
        'green-100': '#7EE081',
        'green-200': '#5EF167',
        'yellow-100': '#E5C07B',
        'turquoise-100': '#48E5C2',
        'cian-100': '#3DB9C9',
        'red-100': '#F15E5E'
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
	},
	plugins: [],
}
