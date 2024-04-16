/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        darkbg: '#1a1a15'
      }
    },
  },
  plugins: [],
}
