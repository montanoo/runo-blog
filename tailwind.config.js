/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['PT-Sans'],
      roboto: ['Roboto'],
      lora: ['Lora'],
      noto: ['Noto Sans Linear B']
    },
    extend: {}
  },
  plugins: []
}
