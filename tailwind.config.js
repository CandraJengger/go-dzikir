module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1E8668',
        background: '#F3F6FA',
        secondary: '#202739',
        label: '#9EAEBE',
        accent: '#B7C8E3',
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
