/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        greenDark: '#064e3b', // Hijau gelap
        greenLight: '#6ee7b7', // Hijau terang
      },
    },
  },
  plugins: [],
}
