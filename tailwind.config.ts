import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Aquí recuperamos tus colores personalizados
        primary: "#17cf17",
        "background-light": "#f6f8f6",
        "background-dark": "#112111",
      },
      fontFamily: {
        display: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [
    // Activamos el plugin para que los inputs se vean bien
    require("@tailwindcss/forms"),
  ],
};
export default config;