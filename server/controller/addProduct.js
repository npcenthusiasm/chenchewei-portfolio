'use strict'

const db = require('../db')

const firestore = db.firestore()

const tagsMap = require('../model/tagsMap')
const workerMap = require('../model/workerMap')

for (const [key, value] of workerMap) {
  console.log(value.cname)
}


const addProduct = async(req, res, next) => {
  try {
    const data = req.body
    // console.log('data: ', data);

    await firestore.collection('products').doc().set(data)
    res.send(data)
    // res.send('Success')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// class Members {
//   constructor (tag, workers) {
//     const type = tagsMap.get(tag)
//     const member = workers.map(w => workerMap.get(w))
//     this.  = {
//       key: type.ename,
//       value: member.map(w => w.ename)
//     }
//     this.cmTag = {
//       key: type.cname,
//       value: member.map(w => w.cname)
//     }
//   }
// }

class EnMember {
  constructor (tag, workers) {
    try {
      const type = tagsMap.get(tag)
      const member = workers.map(w => workerMap.get(w))

      this.key = type.ename
      this.value = member.map(w => w.ename)
    } catch (err) {
      console.log(err)
      this.value = []
    }
  }
}

class CnMember {
  constructor (tag, workers) {
    try {

      const type = tagsMap.get(tag)
      const member = workers.map(w => workerMap.get(w))
      
      this.key = type.cname

      this.value = member.map(w => w.cname)
    } catch (err) {
      console.log(err)
      this.value = []
    }
  }
}


const getProducts = async (req, res, next) => {
  console.log('req: ', req)

  try {
    const products = await firestore.collection('testProducts')
    // const products = await firestore.collection('products')
    // console.log('products: ', products);
    const data = await products.get()
    if (data.empty) {
      
      res.status(400).send('empty')
    } else {

      let p = []

      data.forEach(doc => {
        const product = {
          id: doc.id,
          img: doc.data().img || '',
          category: doc.data().category,
          cn_desc: doc.data().cn_desc,
          show :doc.data().show,
          device:doc.data().device || '',
          en_desc: doc.data().en_desc,
          simple_desc: doc.data().simple_desc,
          title: doc.data().title,
          position: doc.data().position || 0,
          detail_main_img: doc.data().img || '', // 單一頁面最上面一張 img
          detail_imgs: doc.data().detail_imgs || [],// 單一頁面其他張 img
          en_member_info: doc.data().items.map(it => new EnMember(it.tag, it.workers)),
          cn_member_info: doc.data().items.map(it => new CnMember(it.tag, it.workers))
        }
        p.push(product)
      })

      // p.sort((a, b) => a.position > b.position ? 1 : -1)
      // p = p.filter(product => product.active !== false)
      res.send(p)
    }

  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getTags = async (req, res, next) => {
  const tags = []
  for (const [key, value] of tagsMap) {
    tags.push({
      id: key,
      ...value
    })
  }

  res.send(tags)
}

const getWorker = async (req, res, next) => {
  const tags = []
  for (const [key, value] of workerMap) {
    tags.push({
      id: key,
      ...value
    })
  }

  res.send(tags)
}

// TODO get single product
// TODO update product
// TODO delete product

// TODO all product


module.exports = {
  addProduct,
  getProducts,
  getTags,
  getWorker
}