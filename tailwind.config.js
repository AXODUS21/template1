/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#6528D7",
      secondary: "#DBB30F",
      bgColor: "#000000",
      default: "#FFFFFF",
      navBorder: "#848383",
      cardBg: "#6528D77a",
    },
    fontFamily: {
      main: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
