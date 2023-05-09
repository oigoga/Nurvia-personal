/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#02411B',
      'bg-color': '#232137',
      'green2': '#3baa34',

    }, 
    fontFamily: {
      'Open-sans': ['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}