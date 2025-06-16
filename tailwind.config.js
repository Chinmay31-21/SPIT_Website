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
        // Light mode colors - Professional palette
        'light': {
          'bg-primary': '#f8fafc',
          'bg-secondary': '#f1f5f9',
          'bg-tertiary': '#e2e8f0',
          'text-primary': '#1e293b',
          'text-secondary': '#334155',
          'text-tertiary': '#64748b',
          'border-primary': '#e2e8f0',
          'border-secondary': '#cbd5e1',
          'accent-primary': '#1e40af',
          'accent-secondary': '#92400e',
          'accent-gold': '#a16207',
        },
        
        // Dark mode colors (existing)
        'dark': {
          'bg-primary': '#0D0D0D',
          'bg-secondary': '#1a1a1a',
          'bg-tertiary': '#2a2a2a',
          'text-primary': '#ffffff',
          'text-secondary': '#cccccc',
          'text-tertiary': '#999999',
          'border-primary': '#333333',
          'border-secondary': '#444444',
          'accent-primary': '#00BFFF',
          'accent-secondary': '#FFD700',
          'accent-gold': '#DAA520',
        },
        
        // Shared accent colors
        'accent-gold': '#FFD700',
        'accent-teal': '#00BFFF',
        'accent-red': '#8B3A3A',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'light-card': 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.9) 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'light-sm': '0 1px 2px 0 rgba(30, 41, 59, 0.05)',
        'light-md': '0 4px 6px -1px rgba(30, 41, 59, 0.1), 0 2px 4px -1px rgba(30, 41, 59, 0.06)',
        'light-lg': '0 10px 15px -3px rgba(30, 41, 59, 0.1), 0 4px 6px -2px rgba(30, 41, 59, 0.05)',
        'light-xl': '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      },
    },
  },
  plugins: [],
};