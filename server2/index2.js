// const express = require('express')
// const app = express()
// app.use(express.json())
// const { Nuxt } = require('nuxt')
// const config = require('../nuxt.config.js')
// const nuxt = new Nuxt(config)
// export default function (req, res, next) {
//   // req is the Node.js http request object
//   console.log('22222')

//   // res is the Node.js http response object

//   // next is a function to call to invoke the next middleware
//   // Don't forget to call next at the end if your middleware is not an endpoint!
//   //   next()
//   app.get('/get', function (_req, res) {
//     res.status(200).json({ a: 'vien dep trai' }).end()
//   })
//   app.get('/ok', (_req, res) => {
//     const x = 2 + 3
//     console.log('api call')
//     res.send(`get ok ${x}`)
//   })
//   app.get('/users', (_req, res) => {
//     const x = 2 + 3
//     console.log('api call')
//     res.send(`đã lấy được la user3 ${x}`)
//   })
// }
