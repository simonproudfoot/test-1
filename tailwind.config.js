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

    colors: {
      secondary: 'hsl(233, 47%, 7%)',
      primary: 'hsl(244, 38%, 16%)',
      accent: 'hsl(277, 64%, 61%)',
      whiteA: 'hsl(0, 0%, 100%)',
      whiteB: 'hsla(0, 0%, 100%, 0.75)',
      whiteC: 'hsla(0, 0%, 100%, 0.6)',
    },

  }

}
