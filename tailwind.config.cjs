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
        'chaviera': ['Chaviera', 'sans-serif'],
        'des-morgan': ['Des-Morgan', 'sans-serif'],
        'glamore': ['Glamore', 'sans-serif'],
        'twilight-darling': ['twilight-darling', 'sans-serif'],
        'nolluqa': ['Nolluqa', 'sans-serif'],
        'redemption': ['Redemption', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
