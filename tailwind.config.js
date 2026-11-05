/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      },
      colors: {
        violet: { 500: '#6542df', 600: '#5635cd' }
      }
    }
  },
  plugins: []
}
