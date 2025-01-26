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
        "departure-mono": ["departure-mono", "mono"],
        "m42": ["m42"]
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
