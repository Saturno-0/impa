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
                "primary": "#17cf17",
                "background-light": "#f6f8f6",
                "background-dark": "#112111",
                "text-light": "#111811",
                "text-dark": "#f6f8f6",
                "subtle-light": "#dce5dc",
                "subtle-dark": "#2a3c2a",
                "placeholder-light": "#638863",
                "placeholder-dark": "#a3c3a3",
                // Nuevos colores detectados en tu HTML:
                "card-light": "#ffffff",
                "card-dark": "#1a2c1a",
                "muted-light": "#586e58",
                "muted-dark": "#a3c3a3",
                "border-light": "#e5e7eb",
                "border-dark": "#2a3c2a",
            },
            fontFamily: {
                "display": ["var(--font-work-sans)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;