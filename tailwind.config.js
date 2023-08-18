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
      },
      boxShadow: {
        'black' : '3px 4px 0px 0px rgba(0, 0, 0, 0.6)',
      }
    },

  },
  plugins: [],
}