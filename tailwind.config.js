/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#010409',
        sidebarBg: '#030a1c',
        accentBlue: '#0ea5e9',
        cardBg: '#0d1117',
      }
    },
  },
  plugins: [],
}