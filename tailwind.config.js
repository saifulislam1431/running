/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#98FF98",

          "secondary": "#FFF44F",

          "accent": "#87CEEB",

          "neutral": "#2b1d2f",

          "base-100": "#F7F7F7",

          "info": "#333333",

          "success": "#7fe6d0",

          "warning": "#f3c672",

          "error": "#f22e1c",
        },
      },
      "night"
    ],
  },
  plugins: [require("daisyui")],
}

