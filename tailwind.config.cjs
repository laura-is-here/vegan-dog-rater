/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#011627",
        light: "#FDFFFC",
        "accent-blue": "#2EC4B6",
        "accent-red": "#E71D36",
        theme: "#FF9F1C",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
