'use strict'

const db = require('../db')

const firestore = db.firestore()

const tagsMap = require('../model/tagsMap')
const workerMap = require('../model/workerMap')

for (const [key, value] of workerMap) {
  console.log(value.cname)
}

for (const [key, value] of tagsMap) {
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

const try30 = {
  id: '30',
  desc: '計程車的亮黃車身、人行道的灰紅地磚、紅綠燈的綠色燈殼，街道上還有什麼顏色呢？',
  music: 'Sweet Sue, Just You - Single Version',
  album: 'The Essential Ray Conniff',
  previewImg: 'https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/try%2F01%20%E4%BF%A1%E7%BE%A9%E5%AE%89%E5%92%8C%E7%AB%99%2Fresize.jpeg?alt=media&token=8a11031f-1ee3-4173-bd40-c5f65a16b3a1'
}

const try31 = {
  id: '31',
  desc: '午後的陽光在長春市場大樓的曲面上形成一道道直線，像光的通道般。',
  music: 'Lazy Mississippi Moon',
  album: 'Oliver’s Twist',
  previewImg: 'https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/try%2F02%20%E9%95%B7%E6%98%A5%E5%B8%82%E5%A0%B4%2Fresize.jpeg?alt=media&token=fbbebe74-cbb8-44f9-9531-867a00a023c2'
}

const try32 = {
  id: '32',
  desc: '台北市立體育館的屋頂像由弱漸強的聲音。',
  music: 'You Took Advantage of Me',
  album: 'Oscar Peterson & The Greatest Singers, Vol.9',
  previewImg: 'https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/try%2F03%20%E5%8F%B0%E5%8C%97%E5%B8%82%E7%AB%8B%E9%AB%94%E8%82%B2%E9%A4%A8%2Fresize.jpeg?alt=media&token=5c3052e8-da19-42b7-adba-f72874010c6e'
}

const try33 = {
  id: '33',
  desc: '清晨陽光下的窗戶、紗窗網、窗框。',
  music: 'Sympathique',
  album: 'En Français',
  previewImg: 'https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/try%2F04%20%E6%B8%85%E6%99%A8%E7%9A%84%E7%AA%97%2Fresize.jpeg?alt=media&token=2d45d870-55c9-4697-9b72-20632cf995d4'
}

const tryMap = {
  '30': try30,
  '31': try31,
  '32': try32,
  '33': try33
}
const getProducts = async (req, res, next) => {
  // console.log('req: ', req)

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
          cn_title: doc.data().cn_title || '',
          position: doc.data().position || 0,
          detail_main_img: doc.data().detail_imgs[0] || {}, // 單一頁面最上面一張 img
          detail_imgs: doc.data().detail_imgs || [],// 單一頁面其他張 img
          Try_Read_Desc: doc.data().Try_Read_Desc,
          en_member_info: doc.data().items.map(it => new EnMember(it.tag, it.workers)),
          cn_member_info: doc.data().items.map(it => new CnMember(it.tag, it.workers))
        }

        if (tryMap[product.id]) {
          product.detail_imgs[0].desc = tryMap[product.id].desc
          product.music = tryMap[product.id].music
          product.album = tryMap[product.id].album
          product.previewImg = tryMap[product.id].previewImg
        }
        p.push(product)
      })

      // product 1 2
      // interface 18 20 21 22 23
      // read
      const noDisplay = ['1', '2', '18', '20', '21', '22', '23']
      p = p.filter(pro => noDisplay.indexOf(pro.id + '') === -1)

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