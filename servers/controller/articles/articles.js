const { Router } = require('express')
const articleRouter = Router()
const consola = require('consola')

const article = {
  title: 'Alexandre',
  content: 'Pooya',
  signature: Date(),
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
articleRouter.get('/articles', (req, res) => {
  consola.log(req.params)
  consola.log(req.params)
  res.status(200).send(article)
})

module.exports = articleRouter
