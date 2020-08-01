/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const express = require('express')
const app = express()
app.use(express.json())
const { Nuxt } = require('nuxt')
const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)
// console.log([nuxt.options.privateRuntimeConfig])

// It is important that the full path is specified here
app.get('/get', function (_req, res) {
  res.status(200).json({ a: 'vien dep trai' }).end()
})
app.get('/ok', (_req, res) => {
  const x = 2 + 3
  // console.log('api call')
  res.send(`get ok ${x}`)
})
app.get('/users', (_req, res) => {
  const x = 2 + 3
  // console.log('api call')
  res.send(`đã lấy được la user3 ${x}`)
})

module.exports = app
