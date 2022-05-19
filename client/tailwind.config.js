module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        teal: "#008080",
        gray1: "lightgray",
      },
      screens: {
        xs: "380px",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    options: {},
  },
};
