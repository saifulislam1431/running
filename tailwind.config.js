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

          "primary": "#808000",

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
      {
        night: {
          
          "primary": "#808000",

          "secondary": "#FFF44F",
                   
          "accent": "#f471b5",
                   
          "neutral": "#1d283a",
                   
          "base-100": "#0f1729",
                   
          "info": "#87CEEB",
                   
          "success": "#2bd4bd",
                   
          "warning": "#f4c152",
                   
          "error": "#fb6f84",
                   },
      }
    ],
  },
  plugins: [require("daisyui")],
}

