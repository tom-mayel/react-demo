module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        50: "12.5rem",
        62.5: "15.625rem"
      },
      height: {
        50: "12.5rem",
        62.5: "15.625rem",
        175: "43.75rem"
      },
      fontFamily: {
        oxygen: ["Oxygen"],
        inter: ["Inter"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
