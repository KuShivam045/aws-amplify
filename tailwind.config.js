/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        colors: {
          'lighta': '#D3D3D3',
          'yellow': "#f8f6ef"
        },
      },
      // animation: {
      //   'animate-spin': 'spin 1s linear infinite',
      // },
      // keyframes: {
      //   'animate-spin': {
      //     '0%, 100%': { transform: 'rotate(0deg)' },
      //     '50%': { transform: 'rotate(3deg)' },
      //   }
      // }
    },
  },
  
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],
}
