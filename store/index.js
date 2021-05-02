export const state = () => ({
  products: [
    {
      title: 'Plate',
      cn_description: '藉由暖白圓潤的櫃體，與前後通透的玻璃，讓防潮箱有了櫥窗的意象，保存收藏品同時也展示出來。木質握把與腳座賦予家居感，讓防潮箱也成為家中的家具。而為了讓箱體可以完全貼平牆面，收藏家團隊特別開發適合安裝在底部的除濕主機。另外，也重新規劃了濕度顯示介面與功能操作介面，讓資訊的閱讀與功能操作更容易。',
      description: 'statement statement statement statement'
    },
    {
      title: 'Plate2',
      cn_description: '藉由暖白圓潤的櫃體，與前後通透的玻璃，讓防潮箱有了櫥窗的意象，保存收藏品同時也展示出來。木質握把與腳座賦予家居感，讓防潮箱也成為家中的家具。而為了讓箱體可以完全貼平牆面，收藏家團隊特別開發適合安裝在底部的除濕主機。另外，也重新規劃了濕度顯示介面與功能操作介面，讓資訊的閱讀與功能操作更容易。',
      description: 'statement statement statement statement'
    },
    {
      title: 'Plate3',
      cn_description: '藉由暖白圓潤的櫃體，與前後通透的玻璃，讓防潮箱有了櫥窗的意象，保存收藏品同時也展示出來。木質握把與腳座賦予家居感，讓防潮箱也成為家中的家具。而為了讓箱體可以完全貼平牆面，收藏家團隊特別開發適合安裝在底部的除濕主機。另外，也重新規劃了濕度顯示介面與功能操作介面，讓資訊的閱讀與功能操作更容易。',
      description: 'statement statement statement statement'
    }
  ]
})

export const getters = {
  getProductById: (state) => (id) => state.products.find(p => p.title === id)
}