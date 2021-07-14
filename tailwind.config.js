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
				40: ".40",
			},
			fontFamily: {
				mont: ["Montserrat", "sans-serif"],
				body: ["Open Sans", "sans-serif"],
			},
			fontWeight: {
				normal: 500,
				bold: 700,
				extrabold: 800,
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
