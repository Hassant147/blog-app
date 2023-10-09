/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            screens: {
                'desktop': '1101px',

            }
        },
    },
    plugins: [],
}