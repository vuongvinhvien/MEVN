const { Router } = require('express')
const router = Router()
const consola = require('consola')
// const users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }]

router.get('/users', (_req, res) => {
  const x = 2 + 3

  consola.log('api call')
  res.send(`đã lấy được user ${x}`)
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/get', (req, res) => {
  consola.log('get hello')
  res.send('hello Vien yeu <3')
})

module.exports = router
