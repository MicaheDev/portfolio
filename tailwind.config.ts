import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "victor-mono": ["victor-mono", "mono"],
        "vina-sans": ["vina-sans", "sans-serif"],
        "terminal-grotesque": ["terminal-grotesque"]
      },
      colors: {
        red: {
          300: "#FF4747",
        },
        gray: {
          300: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
