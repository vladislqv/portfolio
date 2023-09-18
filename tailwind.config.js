/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Red Hat Display", "sans-serif"],
        p: ['Roboto Mono', 'monospace'],
        title: ['Concert One', 'cursive'],
        chakra: ['Chakra Petch', 'sans-serif']
      }
    },
  },
  plugins: [],
}

