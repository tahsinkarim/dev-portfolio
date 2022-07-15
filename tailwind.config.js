/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'white': '#fff',
        'black': '#252525',
        'pink' : '#E91E63',
        'gray' : 'e8e8e8',
        'dark-gray' : 'd2d2d2',
      },
      fontFamily: {
        'primary': ['Poppins-Regular'],
        'semiBold': ['Poppins-SemiBold'],
        'header': ['Gilroy-ExtraBold'],
      },
    },
  },
  plugins: [],
}
