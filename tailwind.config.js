/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'banner': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      screens:{
        '1xl': '1440px',
      }
    },
  },
  plugins: [],
}

