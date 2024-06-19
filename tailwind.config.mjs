/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      light: {
        100: "#FFFFFF",
        200: "#101214",
        300: "#000000",
      },
      dark: {
        100: "#C1E8FF",
        200: "#7DA0CA",
        300: "#5483B3",
        400: "#007EFF",
        500: "#002242",
        600: "#021024",
      },
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
