/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00BFFF',
          dark: '#00BFFF',
          light: '#0088cc'
        },
        accent: {
          DEFAULT: '#FFD700',
          dark: '#FFD700',
          light: '#FFC000'
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0D0D0D',
          light: '#ffffff'
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.3)',
          light: 'rgba(255, 255, 255, 0.9)'
        },
        text: {
          DEFAULT: '#1a1a1a',
          dark: '#ffffff',
          light: '#1a1a1a'
        },
        border: {
          DEFAULT: 'rgba(0, 191, 255, 0.3)',
          dark: 'rgba(0, 191, 255, 0.3)',
          light: 'rgba(0, 136, 204, 0.3)'
        }
      }
    }
  },
  plugins: []
};