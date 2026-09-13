import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: "#7A0C0C",
          red: "#9E1B1B",
          gold: "#D4AF37",
          amber: "#F59E0B",
          cream: "#FAF8F5",
        },
        ink: {
          900: "#1F2937",
          600: "#5D4037",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 20px -6px rgba(122, 12, 12, 0.15)",
        "card-hover": "0 16px 36px -8px rgba(122, 12, 12, 0.28)",
        glow: "0 0 0 1px rgba(212, 175, 55, 0.4), 0 10px 30px -8px rgba(212, 175, 55, 0.55)",
      },
      keyframes: {
        steam: {
          "0%, 100%": { transform: "translateY(0) scaleX(1)", opacity: "0.35" },
          "50%": { transform: "translateY(-10px) scaleX(1.15)", opacity: "0.6" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        steam: "steam 3.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
