const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        sky: colors.sky,
        blue: colors.blue,
        zinc: colors.zinc,
        red: colors.rose,
      },
    },
  },
  plugins: [],
}
