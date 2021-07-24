import productsJSON from '@/static/products.json'
// console.log('productsJSON: ', productsJSON);
// console.log('productsJSON: ', JSON.parse(productsJSON));

// const IS_GH_PAGE = process.env.DEPLOY_ENV === 'GH_PAGES'

export const state = () => ({
  products: []
})

export const actions = {
  async getProducts ({ commit }) {
    // if (IS_GH_PAGE) {
    commit('SET_PRODUCTS', productsJSON)
    // } else {
    //   const products = await this.$axios.$get('http://localhost:8080/api/products')
    //   commit('SET_PRODUCTS', products)
    // }
  }
}

export const mutations = {
  SET_PRODUCTS (state, products) {
    // console.log('products: ', products);
    state.products = products
  }
}



export const getters = {
  getProductById: (state) => (id) => state.products.find(p => p.id === id),
  getProductByCategory: (state) => (category) => state.products.filter(p => p.category === category)
}