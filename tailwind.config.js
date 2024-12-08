/** @type {import('tailwindcss').Config} */
const daisyUIThemes = require('daisyui/src/theming/themes');
module.exports = {
  content: [
    "./public/**/*.{js,css}",
    "./views/*.ejs",
  ],
  theme: {
    theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // New custom primary color
        secondary: '#FBBF24', // New custom secondary color
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')
  ],
  daisyui: {
    themes: [
      
      {
        retro: {
          ...daisyUIThemes["retro"],
          primary: "#fff",
        },
      },
      "coffee"
    ],
    darkTheme: "dark"
  },
  light: {
    ...require("daisyui/src/theming/themes")["light"],
    primary: "blue",
    secondary: "teal",
  },
}
}
