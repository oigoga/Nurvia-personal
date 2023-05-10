/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#02411B',
      'bg-color': '#181423',
      'navy': '#232137',
      'green2': '#3baa34',
      'white': '#FFFFFF',
      'violet': '#554E77',
      'grey': '#AEAEB7',
      'green3': '#33AA5433',
      'green4': '#79F09A',
      'green5': '#0c8e36',
      'transparent': 'transparent'

    }, 
    fontFamily: {
      'Open-sans': ['Open Sans', 'sans-serif']
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
       light: 300,
       normal: 400,
       medium: 500,
      semibold: 600,
       bold: 700,
      extrabold: 800,
      'extra-bold': 800,
       black: 900,
     },
    extend: {},
  },
  plugins: [],
}