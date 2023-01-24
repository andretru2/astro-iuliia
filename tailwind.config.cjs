const defaultTheme = require("tailwindcss/defaultTheme");
// const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["poppins", ...defaultTheme.fontFamily.sans],
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      sanchez: ["sanchez", "sans-serif"],
      syne: ["Syne", "mono"],
    },
    extend: {
      colors: {
        primary: "#F1B198", //B5826E
        secondary: "#0E183E",
        lightblue: "#9AA6DA",
        blue: "#3D4D8B",
        unicyclePrimary: "#2FD6CC",
        unicycleSecondary: "#4D47C6",
        designsystem: {
          DEFAULT: "#3368FF",
          500: "#4F75FF",
          800: "#000B95",
        },
      },
      animation: {
        // fadeInUp: " 0.75s ease-in-out 1 normal both running fadeInUp",
        fadeInUp: " 0.75s ease-in 1 normal both running  fadeInUp",
        fadeInRight: " 0.75s ease-in-out 1 normal both running fadeInRight",
        fadeInLeft: " 0.75s ease-in-out 1 normal both running fadeInLeft",
        hello: " 1s ease-in 1 normal both running hello",
        ripple: "ripple 1s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "50%": { opacity: "0.5", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        hello: {
          "0%": { transform: "translateX(-20px) translateY(-100px)" },
          "50%": { transform: "translateX(-40px) translateY(-120px)" },
          "100%": { transform: "translateX(-60px) translateY(-150px)" },
        },
        ripple: {
          "0%": { width: "0px", height: "0px", opacity: 0.5 },
          "100%": { width: "500px", height: "500px", opacity: 0 },
        },
      },
      // keyframes: {
      //   loop: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(-50%)" },
      //   },
      // },
      // animation: {
      //   loop: "linear 300ms infinite",
      // },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
