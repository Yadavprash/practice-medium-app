/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
          'lato': ['Lato', 'sans-serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
          'helvetica' : ['Helvetica','sans-serif'],
          'vollkorn':['Vollkorn','sans-serif'],
          'courier' :['Courier Prime','sans-serif'],
          'book':['Rokkitt','sans-serif']
      },
    },
  },
  plugins: [],
}