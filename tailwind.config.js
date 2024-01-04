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
      backgroundImage: {
        backdropGradient: "linear-gradient(135deg,#231437,#2c385e 50%,#336e6b)",
      },
      colors: {
        primary: "var(--primary)",
        crystalVeil: "var(--crystal-veil)",
        abyssalNightfall: "var(--abyssal-nightfall)",
        sereneSlate: "var(--serene-slate)",
        radiantJade: "var(--radiant-jade)",
        arcticGlow: "var(--arctic-glow)",
        smokyHarbor: "var(--smoky-harbor)",
        duskSteel: "var(--dusk-steel)",
        onyxVelvet: "var(--onyx-velvet)",
        backdropImageGradient: `linear-gradient(0deg, transparent 60%, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 0.4) 100%)`,
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
      screens: {
        xs: "390px",
      },
      width: {
        menuButton: "calc(100% - 16px)",
        ctaButton: "calc(100% - 8px)",
      },
    },
  },
  plugins: [],
};
