/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia Sans Condensed", "sans-serif"],
      },
    },
    colors: {
      "theme-black": "#020204",
      "theme-primary": "#2a9df4",
      "theme-secondary": "#2078BC",
      "theme-border": "#020204",
      "theme-text": "#FAF9F6",
    },
  },
  plugins: [],
};
