/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        // Light mode colors
        'background-light': '#ffffff',
        'surface-light': '#f8fafc',
        'text-light': '#0f172a',
        'text-secondary-light': '#64748b',
        
        // Dark mode colors
        'background-dark': '#0D0D0D',
        'surface-dark': '#1a1a1a',
        'text-dark': '#ffffff',
        'text-secondary-dark': '#cccccc',
        
        // Accent colors (same for both themes)
        'accent-gold': '#FFD700',
        'accent-teal': '#00BFFF',
        'accent-red': '#8B3A3A',
      },
    },
  },
  plugins: [],
};