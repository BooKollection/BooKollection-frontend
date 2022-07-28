module.exports = {
  images: {
    domains: ['images-na.ssl-images-amazon.com', 'i.imgur.com']
  },
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'en-US'
  },
  env: {
    OAUTH_GOOGLE_ID: process.env.OAUTH_GOOGLE_ID,
    BACKEND_URI: process.env.BACKEND_URI,
    TOKEN_NAME: process.env.TOKEN_NAME
  }
}
