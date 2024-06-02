/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gray-linear":
          "linear-gradient(180deg, #FBFBFB 0%, #EDEDED 52%, #C5C4C4 100%)",
        "gradient-white-linear":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)",
        "gradient-progressbar-bg":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)",
        "gradient-progressbar-thumb":
          "linear-gradient(180deg, #47B0FF 0%, #3E9ADF 49%, #3587CB 100%)",
        "gradient-progressbar-thumb-dark":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.66) 51%, rgba(0, 0, 0, 0.88) 97%)",
      },
      boxShadow: {
        "dark-purple": "0 2px 0 0 #4940AE",
        "light-gray": "0 0 4px 0 #00000055",
        card: "0 8px 20px 0 #00000011",
      },
      colors: {
        primary: "#6255E5",
        "custom-dark-purple": "#4940AE",
        "custom-light-gray": "#FAFAFA",
        "custom-dark": "#151A1E",
        "custom-gray": "#667085",
        "custom-border": "#D9D9D9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        laira: ["Laira", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1490px",
        "2xl": "1920px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
};
