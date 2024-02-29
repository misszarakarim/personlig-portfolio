/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      colors: {
        reod1: "#461220",
        reod2: "#8C2F39",
        reod3: "#B13A48",
        reod4: "#E0003C",
        pinky: "#FCB9B2",
        back: "#FED0BB",
      },
      fontFamily: {
        cinzel: ["Cinzel"],
        rokkitt: ["Rokkitt"],
      },
    },
  },
};
