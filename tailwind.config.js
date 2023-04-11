/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      header: ["Poppins", "sans-serif"],
      body: ["Droid Serif", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        primary: "rgb(51,94,234)",
        secondary: "rgb(153 246 228)",
        background: "rgb(254 242 242)",
        white: "#ffffff",
        black: "#000000",
        yellow: "#FF7F50",
        lila: "#e6e5ec",
        "grey-10": "#6c6b6d",
        "grey-20": "#7c7c7c",
        "grey-30": "#919091",
        "grey-40": "#929293",
        "grey-50": "#f4f3f8",
        "grey-60": "#edebf6",
        "grey-70": "#d8d8d8",
        "hero-gradient-from": "rgb(254 226 226)",
        // "hero-gradient-to": " rgb(209 250 229)",
        "blog-gradient-from": "#8f9098",
        "blog-gradient-to": "#222222",
      },
      shadows: {
        default: "0 2px 18px rgba(0, 0, 0, 0.06)",
        md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
