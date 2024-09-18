/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        clickerScript: ["Clicker Script", "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        "white-25": "#F8F8F8",
        "brown": "#603809",
        "yellow-350": "#F9C06A"
      },
      backgroundImage: {
        "hero": "url('/coffee-bg.svg')",
      },
      height: {
        "halfScreen": "50vh",
      }
    },
  },

  plugins: [],
};
