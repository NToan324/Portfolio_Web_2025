/** @type {import('tailwindcss').Config} */
const filters = require("tailwindcss-filters");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        primary: "#170F35",
        hover: "#ffffff13",
        blue: "02c4ff",
        purple: "9124ff",
      },
      fontSize: {
        titleText: "clamp(2.25rem, 5vw, 3.75rem)",
        linkText: "clamp(1rem, 3vw, 1.5rem)",
      },
      textColor: {
        primary: "#fff",
        secondary: "#000",
        blue: "#02c4ff",
        purple: "#9124ff",
      },
    },
  },
  plugins: [filters],
  variants: {
    extend: {
      backdropBlur: ["responsive", "hover", "focus"], // Bật backdrop-blur
    },
  },
};
