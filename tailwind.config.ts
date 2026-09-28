import type { Config } from "tailwindcss";

/**
 * Paleta do portfólio, no estilo da referência Lozy Creative: creme de papel
 * como fundo, vinho escuro nos blocos de peso, cobre só na palavra em itálico.
 */
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        creme: { DEFAULT: "#EAE3D6", 2: "#E0D7C7" },
        vinho: { DEFAULT: "#4E1A1D", 2: "#3A1316" },
        tinta: "#1A1B1D",
        cobre: "#8C4530",
        areia: "#877F72",
      },
      fontFamily: {
        display: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: { painel: "20px" },
    },
  },
  plugins: [],
};

export default config;
