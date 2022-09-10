require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const app = express()
const router = require('./router/router')

app.use(helmet())
app.use(express.json())
app.use(router)

module.exports = app