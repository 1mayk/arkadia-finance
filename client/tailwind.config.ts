import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "10px 10px 0px -1px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
