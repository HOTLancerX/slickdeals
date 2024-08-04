import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
      },
    },
    extend: {
      colors: {
        main: "#149777",
        primary: "#10846f",
        secondary: "#ffc800",
      },
    },
  },
  plugins: [],
};

export default config;
