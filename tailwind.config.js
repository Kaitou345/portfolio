/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pingSlow: {
          "0%, 100%": { transform: "scale(1.3)" },
          "50%": { transform: "scale(1.1)" },
        },
        slideLeft: {
          "0%": { transform: "translate(300px)", opacity: "0" },
          "100%": { transform: "translate(0)", opacity: "1" },
        },

        slideRight: {
          "0%": { transform: "translate(-300px)", opacity: "0" },
          "100%": { transform: "translate(0)", opacity: "1" },
        },
      },
      animation: {
        "ping-slow": "pingSlow 1s ease-in-out infinite",
        "slide-from-right":
          "slideLeft 1s cubic-bezier(0.860, 0.000, 0.070, 1.000)",
        "slide-from-left":
          "slideRight 1s cubic-bezier(0.860, 0.000, 0.070, 1.000)",
      },
      textColor: {
        Purple: "#8800ff",
        Black: "#00030e",
      },
      colors: {
        Purple: "#8800ff",
        Black: "#00030e",
      },
      backgroundColor: {
        Purple: "#8800ff",
        Black: "#00030e",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
