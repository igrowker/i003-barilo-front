/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#FF66C4',
        'primary-blue': '#37B6FF',
        'primary-purple': '#8C53FF',
        'background-light': '#F7FAFC',
        'background-dark': '#08121F',
      },
      fontFamily: {
        'primary': ['League Spartan', 'sans-serif'],
        'secondary': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
