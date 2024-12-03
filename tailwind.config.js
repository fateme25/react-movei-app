/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-brand-1": "#ff0303",
        "color-brand-2": "#ec8d1e",

        "color-grey-1": "#afafaf",
        "color-grey-2": " #cccccc",
        "color-grey-3": "#d9d9d9",

        "color-light-1": "#ffffff",
        "color-light-2": "#f5f5f5",
        "color-dark-blue": "#17304f",
      },
      fontFamily: {
        inter: ["Inter", "sans - serif"],
      },

      screens: {
        sm: "300px",
        md: "640px",
      },
    },
  },
  plugins: [require("daisyui")],
};
