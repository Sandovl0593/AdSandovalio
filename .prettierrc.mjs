/** @type {import("prettier").Config} */
export default {
    plugins: [
      "prettier-plugin-svelte",
      "prettier-plugin-astro",
      "prettier-plugin-tailwindcss"
    ],
    tailwindAttributes: ['class', 'className'],
    tailwindConfig: './tailwind.config.js',
    tabWidth: 4,
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
        },
      },
    ],
  };