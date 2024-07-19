/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        'forest-light-green': '#00FF7F',
        'forest-teal': '#00CED1',
        'forest-dark-green': '#006400',
        'forest-background': '#111111',
        'forest-yellow': '#FFD700',
      },
    },
  },
  plugins: [],
}
