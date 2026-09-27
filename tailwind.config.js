/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F3D2B",
          dark: "#152B1D",
          light: "#2F5540",
        },
        moss: "#5C7A5F",
        water: {
          DEFAULT: "#2E6E85",
          light: "#5D97A9",
        },
        sand: "#F5F0E4",
        mist: "#E9EFE7",
        stone: "#232420",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-worksans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "38rem",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0.9)", opacity: "0.5" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        ripple: "ripple 3.5s ease-out infinite",
        rise: "rise 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
