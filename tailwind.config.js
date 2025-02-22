/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        custom: {
          100: "#F5E7E4",
          200: "#D2BEBF",
          300: "#AFA7B2",
          400: "#049CB3",
          500: "#213341",
        },
      },
    },
  },
  plugins: [],
};
