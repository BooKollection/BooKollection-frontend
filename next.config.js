/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
  path: '.env'
})
console.log(myEnv.dev)
module.exports = {
  images: {
    domains: ['images-na.ssl-images-amazon.com', 'i.imgur.com']
  },
  reactStrictMode: myEnv.dev === 'true',
  i18n: {
    locales: ['pt-BR', 'en-US', 'fr-FR', 'es-ES'],
    defaultLocale: 'en-US'
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  }
}
