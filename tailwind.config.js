/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {

    extend: {
      colors: {
        'dark-gray': '#151829',
        'gray': '#282F44',
        'green': '#00CC92',
        'white': '#FCFCFC',
      },
    },
  },
  plugins: [],
}
