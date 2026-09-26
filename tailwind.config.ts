import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#EAF1FB",          // texte principal (clair)
        porcelain: "#0D1B30",    // surfaces sombres (inputs, boutons inversés)
        brass: "#3B82F6",        // accent bleu électrique
        "brass-light": "#7DB0FB",
        steel: "#A9B8CE",        // texte secondaire
        "steel-light": "#7E90AB",
        schema: "#22D3EE",       // cyan "bientôt disponible"
        navy: "#12365F",         // bleu intermédiaire
        "navy-dark": "#060F1C",  // bleu très profond (hero, footer)
        electric: "#3B82F6",
        "electric-light": "#7DB0FB",
        cyan: "#22D3EE",
        surface: "#0F2036",      // fond des cartes & sections
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      maxWidth: { content: "1180px" },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.35)",
        "glow-sm": "0 0 20px rgba(59, 130, 246, 0.25)",
        card: "0 8px 30px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;