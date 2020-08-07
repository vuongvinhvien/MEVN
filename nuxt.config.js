// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'universal',
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  server: {
    // host: '113.23.17.119',
    port: 3001, // default: 3000
    // host: '0.0.0.0', // default: localhost
  },
  dev: process.env.NODE_ENV !== 'production',
  // serverMiddleware: [
  //   // '~/api/index.js',

  //   { path: '/api', handler: '~/server2/index.js' },
  //   // { path: '/api', handler: '~/server2/index.js' },
  //   // { path: '/api', handler: '~/servers/middleware/index.js' },
  // ],
  // env: {
  //   baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  // },
  /*
   ** watch file
   ** See https://nuxtjs.org/api/configuration-watch/
   */
  watch: ['~/servers/**/*.js'],
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css', '@/assets/scss/client/main.scss'],
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    beforeEnter(el) {
      // eslint-disable-next-line no-console
      console.log('Before enter...')
    },
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/antd-ui'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseUrl: 'https://nuxtjs.org/',
    // baseURL: process.env.baseUrl || 'http://localhost:3000', // Used as fallback if no runtime config is provided
  },
  // for client
  publicRuntimeConfig: {
    axios: {
      // default axios URL
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
    vien: false,
  },
  // only server
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
    vien: true,
  },
  /*
   **  Customising the Progress Bar
   ** See https://nuxtjs.org/guides/features/loading#customising-the-progress-bar
   */
  // loading: {
  //   color: 'DimGrey',
  //   height: '1px',
  //   continuous: true,
  // },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config, { isDev, isClient }) {
      // error : fs not found in nodemodule ....
      // https://github.com/nuxt-community/dotenv-module/issues/11
      config.node = {
        fs: 'empty',
      }
      /*
       **  check by eslint on save
       ** See https://nuxtjs.org/guide/development-tools#eslint-and-prettier
       */
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }

      // ....
    },
    babel: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      presets({ isServer }) {
        return [['@nuxt/babel-preset-app', { loose: true }]]
      },
    },
  },
  /*
   **  remove anonymous
   ** See https://nuxtjs.org/api/configuration-telemetry
   */
  telemetry: false,
}
