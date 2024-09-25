/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    darkMode: "class",
    colors: {
      transparent: "transparent",
      primary: "#457b9d",
      secondary: "#a8dadc",
      accent: "#e63946",
      background: "#f1faee",
      text: "#1d3557",
       darkPrimary: "#457b9d",
      darkSecondary: "#a8dadc",
      darkAccent: "#e63946",
      darkBackground: "#f1faee",
      darkText: "#1d3557",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    fontFamily: {
      poppins: ['"Poppins"', "sans-serif"],
      roboto: ['"Roboto"', "sans-serif"],
    },
  },
  plugins: [],
};
