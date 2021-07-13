module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			brightness: {
				40: '.40'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
