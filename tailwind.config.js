/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",
        'primary-dark': "#B8960C",
        'primary-light': "#F0D875",
        dark: "#000000",
        light: "#FFFFFF",
        gray: "#333333",
        'gray-light': "#666666",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/background.jpg')",
        'diagonal-pattern': "linear-gradient(45deg, #000000 25%, transparent 25%, transparent 50%, #000000 50%, #000000 75%, transparent 75%, transparent)",
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gold': {
          '0%, 100%': { 
            opacity: 1,
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)' 
          },
          '50%': { 
            opacity: 0.8,
            boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' 
          },
        }
      },
    },
  },
  plugins: [],
};