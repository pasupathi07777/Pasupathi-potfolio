// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}",],
//   theme: {
//     extend: {
//       borderColor: {
//         'bg-color-2': 'rgb(85 81 227)',
//         'bg-color-1': '#2b2d77'
//       }

//     },
//     fontFamily: {
//       'hero-font': 'Sedan'
//     }
//   },
//   plugins: [require('tailwindcss'),
//   require('autoprefixer'),],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        'bg-color-2': 'rgb(85 81 227)',
        'bg-color-1': '#2b2d77',
      },
      fontFamily: {
        'hero-font': ['Sedan', 'sans-serif'], // Modified to add fallback
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slide: 'slide 2s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
