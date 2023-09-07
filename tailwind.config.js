
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    variants: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#1c232b",
        accent: "#1275bb", //rgb: 18,117,187
        secondary: "#c9e8fa",
        blanco: "#fafafa",
        gris: "#37424f",
      },
      backgroundImage: {
       
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
      },
      dropShadow:{
        'glow': '0 0 15px rgba(18, 117, 187, .5)'
      }
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  
  plugins: [require("tailwind-scrollbar")],
};
