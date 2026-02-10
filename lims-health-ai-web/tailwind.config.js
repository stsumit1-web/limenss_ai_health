/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  safelist: [
    'bg-healthcare-bg',
    'text-healthcare-blue',
    'from-healthcare-teal/20',
    'to-healthcare-mint/20',
    'from-healthcare-mint/20',
    'to-healthcare-teal/10',
    'from-healthcare-sky/20',
    'to-healthcare-teal/10',
  ],
  theme: {
    extend: {
      colors: {
        healthcare: {
          blue: '#184E77',
          blueDark: '#0f3550',
          teal: '#34A0A4',
          mint: '#76C893',
          sky: '#5B9EAD',
          cream: '#F8FAFA',
          ice: '#F0F7F7',
          bg: '#E5ECF0',
          bgDark: '#D8E2E8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '1rem',
        'pill': '2rem',
      },
    },
  },
  plugins: [],
}
