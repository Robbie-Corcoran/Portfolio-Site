/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "theme-black": "#020204",
      "theme-primary": "#3B1F6C",
      "theme-secondary": "#4C2EA9",
      "theme-border": "#792C75",
      "theme-text": "#544561",
    },
  },
  plugins: [],
};
