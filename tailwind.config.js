module.exports = {
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '21': '5.25rem',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        'shonwhite': '#fcfcfc',
        'customgray': '#DCDCDC'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
