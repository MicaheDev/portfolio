/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        terminal: ['Terminal Grotesque', 'sans-serif'],
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.75, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
};
