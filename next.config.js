/* eslint-disable @typescript-eslint/no-var-requires */
const result = require('dotenv').config()
module.exports = {
  env: result.parsed,
  images: {
    domains: ['images-na.ssl-images-amazon.com', 'i.imgur.com']
  },
  reactStrictMode: false,
  i18n: {
    locales: ['pt-BR', 'en-US', 'fr-FR', 'es-ES'],
    defaultLocale: 'en-US'
  }
}
