/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindAttributes: ["class", "className"],
  tailwindConfig: "./tailwind.config.js",
  tabWidth: 2,
};
