/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Amaranth': ['Amaranth', 'sans-serif'],
        'Alata': ['Alata', 'sans-serif'],
      }
    },

  },
  plugins: [],
}