import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Importante para el soporte dark mode del HTML
  theme: {
    extend: {
      colors: {
        // Estos son los colores extraídos de tu script HTML
        primary: "#17cf17",
        "background-light": "#f6f8f6",
        "background-dark": "#112111",
      },
      fontFamily: {
        // Asegúrate de importar la fuente o usar una por defecto
        display: ["var(--font-work-sans)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;