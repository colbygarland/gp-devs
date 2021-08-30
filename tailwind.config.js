module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00a1de',
        secondary: '#f1e854',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
