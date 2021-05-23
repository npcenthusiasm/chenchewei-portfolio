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
        '14': '3.50rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.50rem',
        '23': '5.75rem',
        '30': '7.5rem',
        '33': '8.25rem',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        'shonwhite': '#fcfcfc',
        'customgray': '#DCDCDC',
        black: {
            900: 'rgba(0, 0, 0, 0.9)',
            800: 'rgba(0, 0, 0, 0.8)',
            700: 'rgba(0, 0, 0, 0.7)',
            600: 'rgba(0, 0, 0, 0.6)',
            500: 'rgba(0, 0, 0, 0.5)',
            400: 'rgba(0, 0, 0, 0.4)',
            300: 'rgba(0, 0, 0, 0.3)',
            200: 'rgba(0, 0, 0, 0.2)',
            100: 'rgba(0, 0, 0, 0.1)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
