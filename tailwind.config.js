/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#ffffff",
        "primary-blue": {
          DEFAULT: "#9b7d9e",
          100: "#F5F8FF",
        },
        "chatgpt-100": "#3a3b45",
        "primary-blue": {
          DEFAULT: "#3a3b45",
          100: "#3a3b45",
        },
        "white-100": "#94a3b8",
        "primary-blue": {
          DEFAULT: "#9b7d9e",
          100: "#F5F8FF",
        },
        "primary-grey": {
          DEFAULT: "#E0A458",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/Pattern2.jpg')",
        "hero-bg": "url('/hero-bg.png')",
        subscribe: "url('/pattern1.png')",
      },
    },
  },
  plugins: [],
};
