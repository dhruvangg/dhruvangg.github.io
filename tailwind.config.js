/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,liquid,md,js}", '_site/**/*.liquid'],
  theme: {
    max-w-screen-xl mx-auto: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

