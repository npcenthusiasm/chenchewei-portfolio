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
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'lgs': '1090px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    letterSpacing: {
    //   tightest: '-.075em',
    //   tighter: '-.05em',
    //  tight: '-.025em',
    //   normal: '0',
    //  wide: '.025em',
    //   wider: '.05em',
    //  widest: '.1em',
    //  widest: '.25em',
      'wide': '0.3px',
      'wider': '0.5px',
      'widest': '1px'
    },
    extend: {
      fontSize: {
        'xss': ['10px', '1.7'],
        'xs': ['12px', '1.7'],
        'sm': ['14px', '1.7'],
        'base': ['16px', '1.7'],
        'lg': ['18px', '1.7'],
        'xl': ['20px', '1.7'],
        '1xl': ['22px', '1.7'],
        '2xl': ['24px', '1.7'],
      },
      spacing: {
        '13': '3.25rem',
        '14': '3.50rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '19': '4.75rem',
        '18': '5rem',
        '21': '5.25rem',
        '22': '5.50rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '35': '8.75rem',
        '37': '9.25rem',
        '45': '11.25rem',
        '55': '13.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        'shonwhite': '#fcfcfc',
        'customgray': '#DCDCDC',
        black: {
          DEFAULT: 'rgba(0, 0, 0, 1)',
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
