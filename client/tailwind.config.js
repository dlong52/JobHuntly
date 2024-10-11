/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'RedHatDisplay': ['RedHatDisplay', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#018DF0',
        'secondary': '#CCCCF5',
        'tertiary': '#E7F6FD',

        'active': '#4640DE',

        'neutrals-100': '#25324B',
        'neutrals-80': '#515B6F',
        'neutrals-60': '#7C8493',
        'neutrals-40': '#A8ADB7',
        'neutrals-20': '#E4E5E7',
        'neutrals-10': '#F9FAFC',
        'neutrals-0': '#F8F8FD',
      },
      borderColor: {
        'primary': '#018DF0',
        'secondary': '#CCCCF5',
        'tertiary': '#E7F6FD',

        'active': '#4640DE',

        'neutrals-100': '#25324B',
        'neutrals-80': '#515B6F',
        'neutrals-60': '#7C8493',
        'neutrals-40': '#A8ADB7',
        'neutrals-20': '#E4E5E7',
        'neutrals-10': '#F9FAFC',
        'neutrals-0': '#F8F8FD',
      },
      textColor: {
        'primary': '#018DF0',
        'secondary': '#CCCCF5',
        'tertiary': '#E7F6FD',

        'active': '#4640DE',

        'neutrals-100': '#25324B',
        'neutrals-80': '#515B6F',
        'neutrals-60': '#7C8493',
        'neutrals-40': '#A8ADB7',
        'neutrals-20': '#E4E5E7',
        'neutrals-10': '#F9FAFC',
        'neutrals-0': '#F8F8FD',
      },
      margin: {
        'content-admin': '273px'
      },
      width: {
        'sidebar': '273px'
      }
    },
  },
  plugins: [],
}
