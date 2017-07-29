const prod = process.env.NODE_ENV === 'production'

module.exports = {
  STATIC_PATH: prod ? '/demo-next-static-export/static' : '/static',
}
