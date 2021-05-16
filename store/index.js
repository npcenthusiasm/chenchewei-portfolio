import productsJSON from '@/static/products.json'
// console.log('productsJSON: ', productsJSON);
// console.log('productsJSON: ', JSON.parse(productsJSON));

export const state = () => ({
  products: productsJSON
})

export const getters = {
  getProductById: (state) => (id) => state.products.find(p => p.title === id),
  getProductByCategory: (state) => (category) => state.products.filter(p => p.category === category)
}