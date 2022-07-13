/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontSize: {
				tiny: '.5rem'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
