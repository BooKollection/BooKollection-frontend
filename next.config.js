/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
  path: '.env'
})

module.exports = {
  images: {
    domains: ['images-na.ssl-images-amazon.com', 'i.imgur.com']
  },
  reactStrictMode: false,
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'en-US'
  },
  env: {
    OAUTH_GOOGLE_ID: process.env.OAUTH_GOOGLE_ID
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  }
}
