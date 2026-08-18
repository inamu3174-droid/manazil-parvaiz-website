/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f5f0",
        "warm-black": "#1a1614",
        burgundy: "#6b2c3e",
        "dusty-rose": "#c9a9a6",
        "muted-gray": "#8a8178",
        earth: "#a67c5d",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
