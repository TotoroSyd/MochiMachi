module.exports = {
  // To make tailwind css loaded when deploying with Vercel
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
