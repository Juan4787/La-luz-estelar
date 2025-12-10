/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,svelte}",
    ],
    theme: {
        extend: {
            colors: {
                'eva-dark': '#050608',
                'eva-card': '#14141A',
                'eva-text': '#F5F5F7',
                'eva-text-secondary': '#A1A1AA',
                'eva-neon': '#00FFB3',
                'eva-yellow': '#FFE95A',
                'eva-magenta': '#FF2FB5',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
