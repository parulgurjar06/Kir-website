/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1A1A2E',
          blue: '#2563EB',
        },
        secondary: {
          blue: '#3B82F6',
        },
        neutral: {
          white: '#FAFAFA',
        },
        warm: {
          gray: '#F3F4F6',
        },
        charcoal: '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 600ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
