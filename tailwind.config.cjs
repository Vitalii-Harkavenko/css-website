/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        'blue-1200' : '#0c121e',
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
