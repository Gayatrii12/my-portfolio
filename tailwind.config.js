/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      primary: ["IBM Plex Mono", "Times", "serif"],
      secondary: ["Space Grotesk", "Helvetica", "sans-serif"],
      gilmer: ["Gilmer", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      circular: ["Circular", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      animation: {
        bounceslow: "bounce 0.5s linear infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Images/sky.png')",
      },
    },
  },
  plugins: [],
};

