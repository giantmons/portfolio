/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'], // Add your custom font
      },
      colors: {
        'dark-111': '#111111',
        'gray-111': '#2f2f2f'
      }
    },
  },
  plugins: [],
  darkMode: "class"
};
