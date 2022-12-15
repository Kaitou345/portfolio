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
      },
      animation: {
        "ping-slow": "pingSlow 1s ease-in-out infinite",
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
