import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        "main": '#7DB434',
        "second": '#202225',
        'blck': '#000000',
        'white': '#ffffff',
        "grey":"#333"
      },
      boxShadow: {
        'custom': '0 1px 2px 1px rgba(236, 236, 236, 0.5)',
        'sidebar':'0 -7px 8px 1px #FFFFFF'
      },
    },
  },
  plugins: [],
};
export default config;
