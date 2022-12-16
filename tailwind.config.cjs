/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "twhb-",
  content: ["./pages/*.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
};
