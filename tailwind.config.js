/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hasbara-red': '#e63946',
        'orwell-dark': '#1a1a1a',
        'orwell-gray': '#2d2d2d',
        'orwell-light': '#cccccc',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

