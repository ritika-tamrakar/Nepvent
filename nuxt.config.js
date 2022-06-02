export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nepvent Restaurant Management',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: 'Nepvent' },
      { name: 'full-screen', content: 'yes' },
      { name: 'theme-color', content: '#eeeeee' },
      {
        property: 'og:image',
        content:
          'https://res.cloudinary.com/dudbkhnf3/image/upload/v1633346809/nepvent-company-site/logo.png',
      },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/icon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/reset.css', '~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    '~/plugins/vue-sanitize',
    { src: '~/plugins/vue-carousel', mode: 'client' },
    '~/plugins/vue-select',
    '~plugins/vue-js-modal',
    { src: '~/plugins/vue-infinite-loading', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components', extensions: ['vue'], ignore: ['*.client.vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/fontawesome',
    // for scss
    '@nuxtjs/style-resources',
    // for google fonts
    '@nuxtjs/google-fonts',
    // for date fns
    '@nuxtjs/date-fns',
  ],

  styleResources: {
    scss: ['~assets/scss/mixins.scss', '~assets/scss/variables.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-social-sharing/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://192.168.1.64:3000',
    baseURL: 'http://192.168.1.74:8080',
  },

  // fontawsome
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },

  // google fonts
  googleFonts: {
    families: {
      Manrope: {
        wght: [300, 400, 700, 800],
        ital: [400],
      },
      RobotoMono: {
        wght: [300, 500, 700],
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
