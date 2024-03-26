const colors = require('./colors');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Lexend Deca', 'sans-serif']
      }
    },

    letterSpacing: {
      normal: '0',
      wider: '.05em',
      widest: '.2em',
    },

    screens: {
      sm: '375px',
      md: '640px',
      lg: '1024px',
      xl: '1440px',
    },

    colors: colors.colors,

  }

}
