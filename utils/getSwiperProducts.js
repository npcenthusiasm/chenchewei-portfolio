// 
// const a = [1, 2, 3, 4]
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function getSwiperProducts (a, id = 5) {
  let products = a.slice()
  
  let index = products.findIndex(pro => pro.id === id)
  // console.log('index: ', index);
  if (index === -1) {
    index = 0
  }
  // const index = 0
  const isFirst = index === 0
  const isLast = index === products.length -1
  if (isFirst) {
    const last = products[products.length - 1]
    products = [last, ...products.slice(index + 1, products.length - 1 )]
  } else if (isLast) {
    products = [products[index - 1], ...products.slice(0, products.length - 2)]
  } else {
    const pTemp  = [products[index-1],...products.slice(index + 1)]
    const remore = [...products.slice(0, index - 1)]
    products = pTemp.concat(remore)
  }

  const sc = 10
  products = products.slice(0, sc)
  return products
}


// const res = getSwiperProducts(a, 9)
// const len = res.length
// len
// res