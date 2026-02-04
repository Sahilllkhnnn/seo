/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f2ea",
        beige: "#e9dfd1",
        ink: "#111111",
        gold: "#c8a96a",
        champagne: "#f4e7cf",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        luxe: "0 25px 60px -35px rgba(17, 17, 17, 0.6)",
        glow: "0 0 40px rgba(200, 169, 106, 0.35)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, rgba(200, 169, 106, 0.18), rgba(255, 255, 255, 0))",
      },
    },
  },
  plugins: [],
};
