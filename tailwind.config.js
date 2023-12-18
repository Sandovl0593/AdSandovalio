/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ptgreen: {
          50: "#f1fdf0",
          100: "#dffbdd",
          200: "#bff5bd",
          300: "#6fe66b",
          400: "#53d94f",
          500: "#2cbf28",
          600: "#1f9e1b",
          700: "#1b7c19",
          800: "#1a6219",
          900: "#165116",
          950: "#062d07",
        },
      },
    },
    plugins: [],
  },
};
