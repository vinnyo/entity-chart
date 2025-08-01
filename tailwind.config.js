const {
  palette,
  gradient,
  product,
  states,
} = require("./src/tailwind/tailwind.theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  important: "#padua",
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        ...palette,
        ...product,
        ...states,
      },
      backgroundImage: {
        ...gradient,
      },
      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(1.4)",
            opacity: "0",
          },
        },
      },
      screens: {
        "3xl": "1980px",
      },
    },
  },
  safelist: [
    { pattern: /(bg|text|border)-scopes_in(-bg|-border|-bg2)?/ },
    { pattern: /(bg|text|border)-scopes_out(-bg|-border|-bg2)?/ },
    { pattern: /(bg|text|border)-scopes_na(-bg|-border|-bg2)?/ },
    { pattern: /border-(joint|client1|client2)-primary/ },
    { pattern: /bg-manage_request-.*/ },
  ],
  plugins: [],
};
