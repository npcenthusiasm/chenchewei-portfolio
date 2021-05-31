const express = require('express')

const { addProduct, getProducts, getTags, getWorker } = require('../controller/addProduct')
const router = express.Router()
router.post('/product', addProduct)
router.get('/products', getProducts)
router.get('/tags', getTags)
router.get('/workers', getWorker)


module.exports = {
  routes: router
}