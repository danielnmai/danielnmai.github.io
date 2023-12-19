/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
    colors: {
      primary: "hsla(160, 100%, 37%, 0.4)",
      green: "#166534",
      gray: "#d1d5db",
      white: "#FFFFFF",
      red: "#ef4444",
      primaryHover: "hsla(160, 100%, 37%, 0.3)",
    },
  },
  plugins: [],
};
