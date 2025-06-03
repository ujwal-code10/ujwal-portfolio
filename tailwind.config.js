/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#f2f8ff',
          100: '#e6f1ff',
          200: '#bfdeff',
          300: '#99cbff',
          400: '#4da2ff',
          500: '#0079ff',
          600: '#006de6',
          700: '#005bbf',
          800: '#004899',
          900: '#003a7d'
        },
        coral: {
          50: '#fff5f2',
          100: '#ffece6',
          200: '#ffcfbf',
          300: '#ffb399',
          400: '#ff794d',
          500: '#ff4000',
          600: '#e63a00',
          700: '#bf3000',
          800: '#992600',
          900: '#7d1f00'
        },
        navy: {
          50: '#f2f5f9',
          100: '#e6ebf2',
          200: '#bfcce0',
          300: '#99adcd',
          400: '#4d6fa6',
          500: '#003180',
          600: '#002c73',
          700: '#002560',
          800: '#001d4d',
          900: '#00183f'
        }
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      },
      animation: {
        blob: 'blob 7s infinite',
      }
    },
  },
  plugins: [],
} 