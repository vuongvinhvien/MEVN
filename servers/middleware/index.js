/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const { Nuxt, Builder } = require('nuxt')
const app = require('express')()

const consola = require('consola')
const config = require('../../nuxt.config.js')
const users = require('../controller/users/users')
const articles = require('../controller/articles/articles')
// We instantiate Nuxt.js with the options
consola.info('server init: --------------------------------')
const port = process.env.PORT || 3000

async function start() {
  const nuxt = new Nuxt(config)
  const { host } = nuxt.options.server
  consola.info(`${host} : ${port}`)
  app.use(articles)
  app.use(users)
  app.use(nuxt.render)
  consola.info(`is dev ${config.dev}`)
  if (config.dev) {
    consola.info('builder for dev')
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    consola.info('is Production')
    await nuxt.ready()
  }
  consola.info(`we come back http://${host}:${port}`)
  // app.listen(port, () =>
  //   consola.log(`vuong vinh vien at http://${host}:${port}`)
  // )
}
start()

// module.exports = { path: '/api', handler: app }
module.exports = app
