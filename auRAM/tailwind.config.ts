import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        auram: {
          blue: "#3B82F6",
          "blue-soft": "#60A5FA"
        }
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.45)"
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top, rgba(59,130,246,0.25), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;

