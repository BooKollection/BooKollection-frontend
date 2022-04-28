const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
  path: '.env'
})

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR', 'en-US', 'fr-FR', 'es-ES'],
    defaultLocale: 'pt-BR'
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  }
}
