/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary palette from logo
          charcoal: '#2F5262',      // Primary - Headers, nav, buttons
          'charcoal-dark': '#2C4A56', // Hover states, darker accents
          gold: '#CF984D',          // Accent - CTAs, highlights, warmth
          silver: '#C9CECD',        // Backgrounds, borders, subtle elements
          steel: '#8BAAB5',         // Secondary text, icons, borders
          // Semantic colors
          primary: '#2F5262',
          'primary-dark': '#2C4A56',
          accent: '#CF984D',
          muted: '#8BAAB5',
          light: '#C9CECD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
