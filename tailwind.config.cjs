/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        saner: "#2b3548"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
