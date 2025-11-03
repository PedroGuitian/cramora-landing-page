/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            600: "#493dc6",
            650: "#4438b9",
            700: "#332b8d",
            900: "#191545",
          },
        },
      },
    },
    plugins: [],
  };
  export default config;
  