/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      clash: ['Clash Display', 'sans-serif'],
    },
    extend: {
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(-100% - 20px))' },
        },
        'marquee': {
          '0%': { transform: 'translate(0%, -50%)' },
          '50%': { transform: 'translate(-5%, -50%)' },
          '50.5%': { transform: 'translate(-5%, -50%)' },
          '100%': { transform: 'translate(0%, -50%)' },
        },
      },
      animation: {
        'infinite-regular': 'scroll 120s linear infinite',
        'infinite-reverse': 'scroll 15s  reverse linear  infinite',
        'marquee': 'marquee 10s linear infinite'
      },
      backgroundImage: {
        'noise': "url('/noise.gif')",
      },
    },
  },
  plugins: [],
};