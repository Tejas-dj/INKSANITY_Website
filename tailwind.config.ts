import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E8D1A7', // Golden Batter
        foreground: '#442D1C', // Cowhide Cocoa
        primary: '#743014',    // Spiced Wine
        secondary: '#9D9167',  // Olive Harvest (Borders)
        muted: '#FDF6E3',      // Lighter Paper (for Cards)
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'serif'],
        mono: ['var(--font-courier)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;