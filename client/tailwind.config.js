import { banner } from './src/assets/images';

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
        'MonumentExtended': ['MonumentExtended', 'sans-serif'],
        'Epilogue': ['Epilogue', 'sans-serif'],
        'ClashDisplay': ['ClashDisplay', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#4640DE',
        'secondary': '#CCCCF5',
        'tertiary': '#E7F6FD',

        'footer': '#202430',

        'active': '#4640DE',

        'neutrals-100': '#25324B',
        'neutrals-80': '#515B6F',
        'neutrals-60': '#7C8493',
        'neutrals-40': '#A8ADB7',
        'neutrals-20': '#E4E5E7',
        'neutrals-10': '#F9FAFC',
        'neutrals-0': '#F8F8FD',
        
        'accent-yellow': '#FFB836',
        'accent-green': '#56CDAD',
        'accent-red': '#FF6550',
        'accent-blue': '#26A4FF',
        'accent-purple': '#7B61FF',
      },
      borderColor: {
        'primary': '#4640DE',
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
        
        'accent-yellow': '#FFB836',
        'accent-green': '#56CDAD',
        'accent-red': '#FF6550',
        'accent-blue': '#26A4FF',
        'accent-purple': '#7B61FF',
      },
      textColor: {
        'primary': '#4640DE',
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

        'accent-yellow': '#FFB836',
        'accent-green': '#56CDAD',
        'accent-red': '#FF6550',
        'accent-blue': '#26A4FF',
        'accent-purple': '#7B61FF',
      },
      margin: {
        'content-admin': '273px',
        'header': '75px', 
      },
      width: {
        'sidebar': '273px'
      },
      height: {
        'header': '75px',
        'banner': 'calc(100% -75px)'
      },
      backgroundImage: {
        'banner': 'url(./src/assets/images/background/banner.png)',
        'grid': 'url(./src/assets/images/background/bg_grid_auth.svg)',
        'banner-child': 'url(./src/assets/images/background/banner_0.png)',
        'test-cv': 'url(https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/experts.png?v=1.0.6)'
      },
      boxShadow:{
        'hover': '20px 20px 60px #3c36bd, -20px -20px 60px #514aff'
      }
    },
  },
  plugins: [],
}
