/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chaviera': ['Chaviera', 'sans-serif'],
        'des-morgan': ['Des-Morgan', 'sans-serif'],
        'glamore': ['Glamore', 'sans-serif'],
        'madyntha-geradine': ['Madyntha-Geradine', 'sans-serif'],
        'nolluqa': ['Nolluqa', 'sans-serif'],
        'redemption': ['Redemption', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
