import type { Config } from "tailwindcss";

const config: Config = {
content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
    extend: {
    colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        black: "var(--black)",
        white: "var(--white)",
    },
    fontFamily: {
        serif: ["var(--font-cinzel)", "serif"],
        mono: ["var(--font-courier)", "monospace"],
    },
    },
},
plugins: [],
};
export default config;