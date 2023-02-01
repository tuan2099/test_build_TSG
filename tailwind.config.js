/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'smoblie': '321px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: "#0F2447",
        secondary: "#DBDCDE",
        greenColor: "#0F2447",
        blueColor: "#EBF0EB",
        subMenuColor: "#222222",
        bgPrimary: "RGBA(15, 36, 71, 0.7)",
      },
    },
  },
  plugins: [],
};
