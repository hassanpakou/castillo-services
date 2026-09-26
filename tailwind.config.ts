import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Tokens qui changent selon le thème
        ink: "rgb(var(--ink) / <alpha-value>)",
        porcelain: "rgb(var(--porcelain) / <alpha-value>)",
        brass: "rgb(var(--brass) / <alpha-value>)",
        "brass-light": "rgb(var(--brass-light) / <alpha-value>)",
        steel: "rgb(var(--steel) / <alpha-value>)",
        "steel-light": "rgb(var(--steel-light) / <alpha-value>)",
        schema: "rgb(var(--schema) / <alpha-value>)",
        navy: "rgb(var(--navy) / <alpha-value>)",
        "navy-dark": "rgb(var(--navy-dark) / <alpha-value>)",
        electric: "rgb(var(--electric) / <alpha-value>)",
        "electric-light": "rgb(var(--electric-light) / <alpha-value>)",
        cyan: "rgb(var(--cyan) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      maxWidth: { content: "1180px" },
      boxShadow: {
        glow: "0 0 40px rgba(var(--electric-rgb) / 0.35)",
        "glow-sm": "0 0 20px rgba(var(--electric-rgb) / 0.25)",
        card: "0 8px 30px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;