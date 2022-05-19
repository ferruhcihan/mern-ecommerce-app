module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        purple: "#ff00ff",
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
