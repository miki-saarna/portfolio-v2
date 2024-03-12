/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmth: '#fffef1',
        text: {
          light: '#57534E',
          DEFAULT: '#292524'
        }
      },
    },
  },
  plugins: [],
}

