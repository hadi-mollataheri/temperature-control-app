/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    borderRadius: {
      '20px': '20px',
    },
    extend: {
      height: {
        '400px': '400px',
      },
      width: {
        '300px': '300px',
      },
      colors: {
        'silver-blue': '#2b5870',
      },
      boxShadow: {
        'temperatureApp': '10px 10px 38px 0px rgba(0, 0, 0, 0.75)'
      }
    },
  },
  plugins: [],
}

