/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,md,js}", '_site/**/*.liquid'],
  theme: {
    container: {
      center: true,
      maxWidth: '1200px'
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

