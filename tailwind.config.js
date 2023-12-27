const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        medium: "0 7px 6px rgba(0, 0, 0, 0.16)",
      },
      colors: {
        primary: "var(--primary)",
        crystalVeil: "var(--crystal-veil)",
        abyssalNightfall: "var(--abyssal-nightfall)",
        sereneSlate: "var(--serene-slate)",
        radiantJade: "var(--radiant-jade)",
        arcticGlow: "var(--arctic-glow)",
      },
      fontFamily: {
        sans: ["var(--font-body)", ...fontFamily.sans],
      },
      maxWidth: {
        containerXs: "calc(100% - 24px)",
        containerSm: "calc(100% - 48px)",
        containerMd: "calc(100% - 64px)",
        container: "calc(100% - 96px)",
        containerXl: "1280px",
      },
      width: {
        menuButton: "calc(100% - 16px)",
        ctaButton: "calc(100% - 8px)",
      },
    },
  },
  plugins: [],
};
