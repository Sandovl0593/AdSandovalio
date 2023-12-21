/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        md: { max: "950px" },
        // lmd: { max: "850px" },<
      },
      colors: {
        mantis: {
          50: "#f2fbf3",
          100: "#e0f8e2",
          200: "#c2f0c6",
          300: "#93e29b",
          400: "#5ccc69",
          500: "#3bc44b",
          600: "#279233",
          700: "#22732c",
          800: "#1f5c27",
          900: "#1c4b23",
          950: "#0a290f",
          980: "#071a0a",
        },
      },
      plugins: [],
    },
  },
};
