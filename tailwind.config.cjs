/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik-puddles': ['"Rubik Puddles"', 'system-ui'],
        'love-light':['"Love Light"', 'cursive']
      },
    },
  },
  plugins: [],
}