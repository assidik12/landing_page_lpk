/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      screens: {
        xl: "1320px",
        sm: "450px",
      },
    },
  },
  plugins: [],
};
