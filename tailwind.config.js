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
      },
      animation: {
        'infinite-regular': 'scroll 20s linear infinite',
        'infinite-reverse': 'scroll 15s  reverse linear  infinite',
      },
    },
  },
  plugins: [],
};
