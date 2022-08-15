/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {},
    corePlugins: {
      preflight: false,
    },
    plugins: [require('flowbite/plugin')],
  },
}
