/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-light": "#514CFF",
        "purple-dark": "#2A27C9",
        "dark-100": "#060714",
        "dark-90": "#262840",
        "gray-100": "#7780A1",
        "gray-50": "#BBC0D0",
        "gray-20": "#E2E2ED",
        "gray-10": "#F2F3F6",
        green: "#76DECC",
        pink: "#EA6CBC",
        red: "#FB4539",
      },
      fontFamily: {
        sans: ["Sora", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        background: "url('./assets/background.svg')",
      },
    },
  },
  plugins: [],
};
