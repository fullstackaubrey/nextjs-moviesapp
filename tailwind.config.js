/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.(js,ts,jsx,tsx",
    "./src/**/*.{html,js}",
    "./pages/**/*.(js,ts,jsx,tsx)",
    "./components/**/*.(js,ts,jsx,tsx)"
  ],
  theme: {
    extend: {
      fontFamily: {
        oxygen: ["variable(--font-oxygen"],
        poppins: ["variable(--font-poppins"],
      },
    },
  },
  plugins: [],
}