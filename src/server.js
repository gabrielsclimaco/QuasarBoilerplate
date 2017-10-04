import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import * as db from './db'
import config from './config'
import api from './api'
import path from 'path'

const port = process.env.PORT || config.port || 3000

let app = express()
let server = require('http').Server(app)
let io = require('socket.io')(server)
require('./api/socket/socket')(io)
server.listen(4000)

app.use(morgan('dev'))

app.use(bodyParser.json({
  limit: '5mb'
}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '15mb'
}))

db.init()
.then(db => {
  app.use('/api', api({ config, db }))
  app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
  app.listen(port)
  console.log('Server started on', port, '!')
})

export default app
