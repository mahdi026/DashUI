/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        bgbody: "#0f172a",
        bgsection: "#1e293b",
        textdarky: "#cbd5e1",
        org: "#624bff",
      },
      
    },
  },
  plugins: [],
};
