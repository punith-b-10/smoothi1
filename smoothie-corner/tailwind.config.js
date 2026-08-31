/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF5E9",
          soft: "#F6EEDD",
          deep: "#EFE3C8",
        },
        ink: "#20291E",
        orange: {
          DEFAULT: "#FF7A33",
          dark: "#E8621E",
        },
        pink: {
          DEFAULT: "#ED4F8C",
          dark: "#D6357A",
        },
        leaf: {
          DEFAULT: "#2F8F5B",
          dark: "#256F47",
          light: "#DCEFDF",
        },
        grape: {
          DEFAULT: "#8B5CF6",
          dark: "#6D3FD1",
        },
        honey: "#FFC94A",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
        brush: ["Caveat", "cursive"],
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 43% 47% 53% 57%",
        "blob-2": "37% 63% 46% 54% / 57% 43% 57% 43%",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(4deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(-3deg)" },
        },
        blobMorph: {
          "0%, 100%": { borderRadius: "63% 37% 54% 46% / 43% 47% 53% 57%" },
          "50%": { borderRadius: "37% 63% 46% 54% / 57% 43% 57% 43%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.08)", opacity: "0.85" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite",
        blob: "blobMorph 12s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(32, 41, 30, 0.25)",
        card: "0 12px 30px -10px rgba(32, 41, 30, 0.18)",
      },
    },
  },
  plugins: [],
};
