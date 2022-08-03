/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        font: ['Montserrat'],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require('flowbite/plugin')],
}
