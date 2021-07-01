const path = require('path')
const fs = require('fs')

const productsJSON = require('./data-generator/dist/products.json')

const tagsMap = require('./model/tagsMap')
// console.log('tagsMap: ', tagsMap);
const workerMap = require('./model/workerMap')


function getTag(ename) {
  for (const [key, value] of tagsMap) {
    if (value.ename === ename) {
      return key
    }
  }
  console.log(`not found: ${ename}`)
}

function getWorker(cname) {
  for (const [key, value] of workerMap) {
    if (value.cname === cname) {
      return key
    }
  }
  console.log(`not found: ${cname}`)
}

// const interfaceData = productsJSON.filter(p => p.category === 'interface')
const CATEGORY = 'all'
const logoData = productsJSON.filter(p => p.id !== '')
// const logoData = productsJSON.filter(p => p.category === CATEGORY)


const data = logoData.map((product, index) => {
  const data = {}
  const items = []
  let detail_imgs = {}

  Object.keys(product).forEach(key => {
    // console.log('product: ', product);
    const DESC_REGEX = new RegExp(/^img_\d{1,2}_description$/, 'i')
    const IMG_REGEX = new RegExp(/^img_\d{1,2}$/, 'i')

    if (IMG_REGEX.test(key)) {
      if (product[key].trim() !== '') {
        const [, id] = key.split('_')
        detail_imgs[id] = {}
        detail_imgs[id].img = product[key]
      }
    } 

    if (DESC_REGEX.test(key)) {
      // 有圖片才給 desc
      const [, id,] = key.split('_')
      if (detail_imgs[id]) {
        detail_imgs[id].desc = product[key]
      }
    } 
    
    switch (key) {
      case 'position':
        data[key] = parseInt(product[key])
        break
      case 'show':
        data[key] = product[key] === 'y'
        break
      case 'id':
        data[key] = parseInt(product[key])
        break
      case 'category':
      case 'title':
      case 'img':
      case 'simple_desc':
      case 'date':
      case 'device':
      case 'cn_title':
      case 'en_desc':
      case 'cn_desc':
        data[key] = product[key]
        break
      case 'Brand':
      case 'Client':
      case 'Planning':
      case 'Design':
      case 'Engineering':
      case 'Production':
      case 'Model':
      case 'Photography':
      case 'Illustration':
      case 'Music':
      case 'Programming':
      case 'Cooperation':
      case 'Date':

      // case 'Product manager':
      // case 'Product design':
      // case 'ux design':
      // case 'ui design':
      // case 'print':
        if (product[key].trim() === '') {
          break
        }

        const workers = product[key].split('、').map(value => getWorker(value))
        const tagId = getTag(key)
      
        if (tagId !== null) {
          items.push({
            tag: tagId,
            workers: workers
          })
        }

        break

      default:
        // console.log(`no match key: ${key}`)
        break
    }
  })


  detail_imgs = Object.keys(detail_imgs).map(key => {
    return {
      img: detail_imgs[key].img,
      desc: detail_imgs[key].desc,
    }
  })

  data.items = items
  data.detail_imgs = detail_imgs

  return data
})


console.log('formate success !!');
// console.log('data: ', data);
// console.log('data: ', data.length);
// console.log('data: ', data[0].items);
// console.log('data: ', data[7].items);

fs.writeFileSync(path.resolve(__dirname + '/data-generator/dist/', `${CATEGORY}.json`), JSON.stringify(data))