/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'main' : '#1c1f24',
        'secondary' : '#15151a',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'montserrat-thin': ['Montserrat-Thin', 'sans-serif'],
        'forum': ['Forum', 'sans-serif'],
        'glamore': ['Glamore', 'sans-serif'],
        'nolluqa': ['Nolluqa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
