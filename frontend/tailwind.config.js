/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 👈 Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#6b8ddb',
      },
    },
  },
  plugins: [],
};




