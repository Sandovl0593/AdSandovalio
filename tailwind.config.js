/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        md: { max: "1100px" },
        lmd: { max: "850px" },
      },
      plugins: [],
    },
  },
};
