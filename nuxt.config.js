const pkg = require('./package');

module.exports = {
  /*
  ** Basic configuration
  */
  mode: 'universal',

  srcDir: 'src/',
  extension: ['js', 'ts'],

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '~/modules/typescript',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {},
  },
  mongo:{
    URL_BBDD: "mongodb://localhost:27017/ExampleBBDD", // Database path for mongoDB
    options: { /* Mongoose option for database in mongo db   */
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  }
};
