module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'Lato', 'Arial', 'sans-serif'
      ],
      'serif': ['Georgia', 'Cambria'],
      'padauk': ['padauk'],
      'roboto': ['roboto'],
      'poppins': ['poppins'],
      'staatliches': ['staatliches'],
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