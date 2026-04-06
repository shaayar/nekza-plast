/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-dark": "var(--primary-dark)",
        "primary-pale": "var(--primary-pale)",
        "primary-light": "var(--primary-light)",
        accent: "var(--accent-color)",
        "alt-yellow": "var(--alt-yellow)",
        "yellow-dark": "var(--yellow-dark)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "warm-bg": "var(--warm-bg)",
        cream: "var(--cream)",
        "cream-dark": "var(--cream-dark)",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
      },
      keyframes: {
        fillBar: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fill-bar": "fillBar 5s linear forwards",
        "ken-burns": "kenBurns 8s ease forwards",
        "slide-up": "slideUp 0.8s ease 0.3s both",
      },
    },
  },
  plugins: [],
};
