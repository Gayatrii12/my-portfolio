/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      primary: ["IBM Plex Mono", "Times", "serif"],
      secondary: ["Space Grotesk", "Helvetica", "sans-serif"],
      gilmer: ["Gilmer", "sans-serif"],
      robo: ['"Roboto Condensed"'],
      poppins: ["poppins", "Verdana", "sans-serif"],
      circular: ["Circular Book", "sans-serif"],
    },
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

