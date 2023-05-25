/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#1B2E59",
        'secondary': '#3B75FC'
      }
    },
  },
  plugins: [],
}