/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontSize: {
				tiny: '.5rem'
			},
			animation: {
				wiggle: 'wiggle 300ms ease-in-out 0s infinite'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
