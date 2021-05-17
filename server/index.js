'use strict'

const express = require('express')

const app = express()
const config = require('./config')
const productRoutes = require('./routes/product-routes')

app.use(express.json())

app.use('/api', productRoutes.routes)
app.listen(config.port, () => {
  console.log('listening on port ' + config.port)
})