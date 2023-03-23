/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': 'rgb(255, 31, 31)',
        'custom-red-bg': 'rgb(225, 0, 60)',
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
