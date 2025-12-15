/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Fraunces', 'serif'],
            },
            colors: {
                noche: '#070A14',
                profundo: '#0B1430',
                'texto-principal': '#F5F7FF',
                'texto-suave': '#C9D3F2',
                dorado: '#F6E6A8',
                celeste: '#A7D8F5',
                lavanda: '#C9B8FF',
            },
            borderRadius: {
                '2xl': '1.5rem', // 24px
                '3xl': '1.75rem', // 28px
            },
            boxShadow: {
                'glow': '0 0 20px rgba(246, 230, 168, 0.15)',
            }
        },
    },
    plugins: [],
}
