/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#ffffff",
        "base-200": "#F5F6F9",
        "base-content": "#313140",
        "base-content-secondary": "#9C9CAC",
        primary: "#4b92db",
        "primary-content": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
