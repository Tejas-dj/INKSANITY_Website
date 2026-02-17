import type { Config } from "tailwindcss";

const config: Config = {
content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Scans root app folder
    "./src/**/*.{js,ts,jsx,tsx,mdx}",      // Scans src folder (components & lib)
],
theme: {
    extend: {
    colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        muted: "var(--muted)",
        border: "var(--border)",
    },
    fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
    },
    },
},
plugins: [],
};
export default config;