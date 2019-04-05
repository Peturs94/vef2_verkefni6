require('dotenv').config();
/* todo setja upp css og env fyrir api url */
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  publicRuntimeConfig: {
      apiUrl: 'http://localhost:5000'
    }
  });