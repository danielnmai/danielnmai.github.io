/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
    colors: {
      primary: "hsla(160, 100%, 37%, 0.4)",
      gray: "#d1d5db",
      red: "#FFFFFF",
      primaryHover: "hsla(160, 100%, 37%, 0.3)",
    },
  },
  plugins: [],
};
