import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D6A2E8',
        'secondary': '#FAD7A0',
        'dark': '#2C3E50',
        'light': '#ECF0F1',
        'accent': '#E74C3C',
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;