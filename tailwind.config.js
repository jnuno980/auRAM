/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        auram: {
          black: "#0B0B0B",
          gold: "#D4AF37",
          white: "#F5F5F5"
        }
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"]
      },
      backgroundImage: {
        "auram-radial-gold":
          "radial-gradient(circle at top, rgba(212,175,55,0.20), transparent 55%)"
      },
      boxShadow: {
        "auram-glow": "0 0 80px rgba(212,175,55,0.35)"
      }
    }
  },
  plugins: []
};

