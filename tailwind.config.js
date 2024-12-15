/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add all JavaScript, TypeScript, JSX, and TSX files in the src directory
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite", // Defines the animation duration and infinite scroll
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },  // Start at the right side of the container
          "100%": { transform: "translateX(-100%)" }, // End at the left side of the container
        },
      },

      colors: {
        luxuryGold: '#D4AF37', // A custom gold color
        darkBlack: '#1A1A1A',  // A custom dark black color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins font
        playfair: ["Playfair Display", "serif"], // Playfair Display font
      },
    },
  },
  plugins: [], // Add any plugins if needed (e.g., forms, typography, etc.)
};
