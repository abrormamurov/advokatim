/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "107.3px": "107.3px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
