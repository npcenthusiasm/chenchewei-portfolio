'use strict'

const db = require('../db')

const firestore = db.firestore()

const addProduct = async(req, res, next) => {
  try {
    // const data = req
    const data = {
      category: '測試category',
      title: '測試title',
    }
    await firestore.collection('products').doc().set(data)
    res.send('Success')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getProducts = async (req, res, next) => {
  try {
    const products = await firestore.collection('products')
    const data = await products.get()
    const p = []
    if (data.empty) {

      res.status(400).send('empty')
    } else {
      data.forEach(doc => {
        const product = {
          id: doc.id,
          category: doc.data().category,
          title: doc.data().title,
        }
        p.push(product)
      })
      res.send(p)
    }

  } catch (error) {
    res.status(400).send(error.message)
  }
}

// TODO get single product
// TODO update product
// TODO delete product

// TODO all product


module.exports = {
  addProduct,
  getProducts
}