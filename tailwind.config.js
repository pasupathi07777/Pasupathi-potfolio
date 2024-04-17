/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor: {
        'bg-color-2': 'rgb(85 81 227)',
        'bg-color-1': '#2b2d77'
      }

    },
    fontFamily: {
      'hero-font': 'Sedan'
    }
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer'),],
}

