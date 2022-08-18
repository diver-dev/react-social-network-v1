module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "light-primary": "#F0F5FA",
        deepBlue: "#2B6BED",
      },
      boxShadow: {
        custom: "0 3px 15px rgb(0 0 0 / 7%)",
        box: "0 3px 20px rgb(0 0 0 / 4%)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  // Options passed to PurgeCSS
  // },
  // Filenames to scan for classes
  // content: {
  //   "./src/**/*.html",
  //   "./src/**/*.js",
  //   "./src/**/*.jsx",
  //   "./src/**/*.ts",
  //   "./src/**/*.tsx",
  //   "./public/index.html",
  // // Options passed to PurgeCSS
  // },
  options: {
    // Whitelist specific selectors by name
    // safelist: [],
  },
};
