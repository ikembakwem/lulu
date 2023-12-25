/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        containerXs: "calc(100% - 24px)",
        containerSm: "calc(100% - 48px)",
        containerMd: "calc(100% - 64px)",
        container: "calc(100% - 96px)",
        containerXl: "1280px",
      },
    },
  },
  plugins: [],
};
