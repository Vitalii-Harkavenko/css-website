/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'main' : '#1C241C',
        'secondary' : '#15181A',
        'contrast' : '#CCD5D0',
        'gradient' : '#003C1B',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'montserrat-thin': ['Montserrat-Thin', 'sans-serif'],
        'montserrat-semi-bold': ['Montserrat-SemiBold', 'sans-serif'],
        'forum': ['Forum', 'sans-serif'],
        'glamore': ['Glamore', 'sans-serif'],
        'nolluqa': ['Nolluqa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
