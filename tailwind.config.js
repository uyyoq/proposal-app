module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'Lato', 'Arial', 'sans-serif'
      ],
      'serif': ['Georgia', 'Cambria'],
      'padauk':['padauk'],
      'roboto':['roboto'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
    },
  },
  variants: {
    extend: {
      display: ['hover'],
      divideColor: ['group-hover'],
      borderCollapse: ['hover', 'focus'],
    }
  },
  plugins: [],
}