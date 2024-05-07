/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey": "#0000001a",
        "lightgreen": "#27aa7e",
        "lightgrey": "#27aa7e1f",
      },
    },
  },
  plugins: [],
}

