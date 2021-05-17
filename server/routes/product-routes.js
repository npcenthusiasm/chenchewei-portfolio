const express = require('express')

const { addProduct, getProducts } = require('../controller/addProduct')
const router = express.Router()
router.post('/products', addProduct)
router.get('/getProducts', getProducts)

module.exports = {
  routes: router
}