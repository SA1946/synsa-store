/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "night-bg": "#202020",
        "day-bg": "#E9F8FD",
        sun: "#F5EC59",
        moon: "#FFFDF2",
      },
    },
  },
  plugins: [],
};
