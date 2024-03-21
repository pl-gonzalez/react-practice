/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-icon': "url('/src/assets/img/search-icon.svg')",
        'cooking-food': "url('/src/assets/img/cooking-food.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  plugins: [],
}