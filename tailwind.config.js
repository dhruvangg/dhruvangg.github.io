export default {
    darkMode: 'selector',
    content: ["./src/**/*.{html,js,md,11ty.js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
};
