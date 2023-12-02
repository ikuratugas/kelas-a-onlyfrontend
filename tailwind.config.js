/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      fireshibold:["Nunito", "sans-serif"],
      fireshipnormal:["Nunito", "sans-serif"],
      caprasimo:["Titan One", "sans-serif"]
    }
  },
  plugins: [],
}

