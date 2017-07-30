const prod = process.env.NODE_ENV === 'production'

module.exports = {
  STATIC_PATH: prod ? '/PixivDeck-web/static' : '/static',
}
