/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shooting: {
          "0%": { transform: "translate(0,0) rotate(45deg)", opacity: 0 },
          "10%": { opacity: 1 },
          "100%": { transform: "translate(-1000px, 800px) rotate(45deg)", opacity: 0 },
        },
      },
      animation: {
        shooting: "shooting linear infinite",
      },
    },
  },
  plugins: [],
};
