const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/Vue-Nuxt-example/'
  }
} : {}

function getPathLink (path) {
  return process.env.DEPLOY_ENV === 'GH_PAGES' ? '/Vue-Nuxt-example/' + path : path
}
// const target = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/Vue-Nuxt-example/'
//   }
// } : {}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: process.env.DEPLOY_ENV === 'GH_PAGES' ? 'static' : 'server',
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  ...routerBase,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Chewei',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '陳哲瑋，台灣產品設計師。 從事產品規劃及設計。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: getPathLink('/favicon.ico') }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // import style (>= Swiper 6.x)
    // 'swiper/swiper-bundle.css'
    // import style (<= Swiper 5.x)
    // 'swiper/dist/css/swiper.css'
    // 'swiper/dist/css/swiper.css'
    { src: "swiper/swiper-bundle.css" }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/VueAwesomeSwiper.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'swiper' // 避免多次引入多次加载swiper资源文件
    ]
  },
  generate: {
    exclude: [
      /^\/admin/ // path starts with /admin
    ]
  },
  // Defaults options
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: true,
    exposeConfig: false,
    config: {}
  }
}
