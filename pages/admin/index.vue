<template>
  <div class="container">

    <button class="py-2 px-6 bg-red-400" @click="fetchSomething">fetchSomething</button>
    <button class="py-2 px-6 bg-red-400" @click="fetchTags">fetchTags</button>
    <br>

    <div class="w-full" v-if="false">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            category
          </label>
          <select v-model="newProduct.category" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username">
            <option value="product">product</option>
            <option value="interface">interface</option>
            <option value="logo">logo</option>
          </select>
          <!-- <input v-model="newProduct.category" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username"> -->
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            title
          </label>
          <input v-model="newProduct.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            position
          </label>
          <input v-model="newProduct.position" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            simple_desc
          </label>
          <input v-model="newProduct.simple_desc" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            cn_desc
          </label>
          <input v-model="newProduct.cn_desc" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            en_desc
          </label>
          <input v-model="newProduct.en_desc" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            date
          </label>
          <input v-model="newProduct.date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            img
          </label>
          <input v-model="newProduct.img" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            items
          </label>

          <div v-for="(member, index) in newProduct.items" :key="index">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
              @click="removeMember(index)">
              removeMember
            </button>
            <select v-model="member.tag" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username">
              <option v-for="tag in tags" :key="tag.ename" :value="tag.id">{{ tag.cname }}</option>
            </select>
            <div class="w-full flex flex-wrap">
              <div v-for="worker in workers" :key="worker.id" class="mr-2 my-2 border
              flex items-center
              px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                
                <div class="mr-2">{{ worker.cname }}</div>
                <input type="checkbox" v-model="member.workers"  :value="worker.id">
              </div>
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
            @click="addMember">
            addMember
          </button>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
            @click="sendData">
            sendData
          </button>
        </div>
      </form>
    </div>
  <br>
  <!-- {{ newProduct }} -->
  <br>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Id
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Desc
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Worker
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Detail_imgs
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="product in products" :key="product.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ product.id }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ product.title }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ product.description }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div>
                      <select name="" id="" >
                        <option v-for="tag in tags" :key="tag.ename" :value="tag.ename">{{ tag.cname }}</option>
                      </select>
                      <select name="" id="">
                        <option v-for="worker in workers" :key="worker.ename" :value="worker.ename">{{ worker.cname }}</option>
                      </select>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ product.category }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="flex flex-wrap">
                      <div v-for="(img, index) in product.detail_imgs" :key="index">
                        {{ img }}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      // products: JSON.parse(localStorage.getItem('products') || '[]') 
      newProduct: {
        category: '',
        title: '',
        cn_desc: '',
        en_desc: '',
        simple_desc: '',
        date: '',
        img: '',
        simple_desc: '',
        position: 0,
        items: [{
          tag: '',
          workers: []
        }]
      },
      products: [],
      tags: [],
      // tags: [
      //   { id: "1", ename: 'brand', cname: '品牌' },
      //   { id: "2", ename: 'client', cname: '客戶' }
      // ],
      workers: [],
    }
  },
  mounted () {
    this.fetchTags()
    this.fetchWorkers()
  },
  methods: {
    addMember () {
      const data = {
        tag: '',
        workers: []
      }
      this.newProduct.items.push(data)
    },
    removeMember (index) {
      this.newProduct.items.splice(index, 1)
    },
    // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    //   const tags = await this.$axios.$get('http://localhost:8080/api/tags')
    //   this.tags = tags
    // },
    async sendData () {
      // const datas = [{
      //   "category": "interface",
      //   "title": "Li Jin",
      //   "img": "https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/interface%2FLi%20Jin.jpeg?alt=media&token=3856f3c7-3bd5-4c7c-98ff-0179fb1c048f",
      //   "position": "",
      //   "simple_desc": "",
      //   "device": "Web",
      //   "date": "2020",
      //   "items": [{
      //     "tag": "2",
      //     "workers": ["21"]
      //   }, {
      //     "tag": "16",
      //     "workers": ["26"]
      //   }, {
      //     "tag": "5",
      //     "workers": ["5"]
      //   }, {
      //     "tag": "14",
      //     "workers": ["41"]
      //   }]
      //   }, {
      //     "category": "interface",
      //     "title": "Above",
      //     "img": "https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/interface%2FAbove.jpeg?alt=media",
      //     "position": "",
      //     "simple_desc": "",
      //     "device": "Web",
      //     "date": "2021",
      //     "items": [{
      //       "tag": "2",
      //       "workers": ["22"]
      //     }, {
      //       "tag": "16",
      //       "workers": ["22"]
      //     }, {
      //       "tag": "5",
      //       "workers": ["5"]
      //     }, {
      //       "tag": "14",
      //       "workers": ["22"]
      //     }]
      //   }, {
      //     "category": "interface",
      //     "title": "ChihYi",
      //     "img": "https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/interface%2FChihYi.jpeg?alt=media&token=730bd523-6706-4169-921b-2d0dbf0f91b4",
      //     "position": "",
      //     "simple_desc": "",
      //     "device": "Web",
      //     "date": "2021",
      //     "items": [{
      //       "tag": "2",
      //       "workers": ["23"]
      //     }, {
      //       "tag": "5",
      //       "workers": ["5"]
      //     }, {
      //       "tag": "12",
      //       "workers": ["23"]
      //     }, {
      //       "tag": "14",
      //       "workers": ["41"]
      //     }]
      //   }, {
      //     "category": "interface",
      //     "title": "Surco Smart Home Remote",
      //     "img": "https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/interface%2Fsurco_gif.gif?alt=media&token=4a00f7b3-df0e-4624-82af-43f20db295dd",
      //     "position": "",
      //     "simple_desc": "",
      //     "device": "App for Phone",
      //     "date": "2018",
      //     "items": [{
      //       "tag": "1",
      //       "workers": ["1"]
      //     }, {
      //       "tag": "5",
      //       "workers": ["5", "29"]
      //     }, {
      //       "tag": "14",
      //       "workers": ["33"]
      //     }]
      //   }, {
      //     "category": "interface",
      //     "title": "unipapa",
      //     "img": "https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/interface%2Funipapa.jpeg?alt=media&token=659d83a6-c4d6-49a4-a770-e3ef9d108d70",
      //     "position": "",
      //     "simple_desc": "",
      //     "device": "Web",
      //     "date": "2019",
      //     "items": [{
      //       "tag": "1",
      //       "workers": ["10"]
      //     }, {
      //       "tag": "5",
      //       "workers": ["5", "10"]
      //     }, {
      //       "tag": "14",
      //       "workers": ["10"]
      //     }]
      //   }, {
      //     "category": "interface",
      //     "title": "LanVece",
      //     "img": "https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/interface%2Flanvece.jpeg?alt=media&token=4ef0ea91-6b61-4337-ae1b-8dd9b1a2e558",
      //     "position": "",
      //     "simple_desc": "",
      //     "device": "Web",
      //     "date": "2017",
      //     "items": [{
      //       "tag": "1",
      //       "workers": ["16"]
      //     }, {
      //       "tag": "5",
      //       "workers": ["5", "30"]
      //     }, {
      //       "tag": "14",
      //       "workers": ["41"]
      //     }]
      //   }, {
      //     "category": "interface",
      //     "title": "Lingda",
      //     "img": "https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/interface%2Flingda%2002.jpeg?alt=media&token=5908f140-6e2e-4171-84a1-dfff1db32670",
      //     "position": "",
      //     "simple_desc": "",
      //     "device": "Web",
      //     "date": "2016",
      //     "items": [{
      //       "tag": "1",
      //       "workers": ["17"]
      //     }, {
      //       "tag": "5",
      //       "workers": ["5", "31"]
      //     }]
      //   }]
      // datas.forEach(it => {
      //   setTimeout(async () => {
      //     const res = await this.$axios.$post('http://localhost:8080/api/product', it)
      //   }, 1000)
      // })
      // console.log(this.newProduct)
      // const res = await this.$axios.$post('http://localhost:8080/api/product', this.newProduct)
      console.log('res: ', res);

    },
    async fetchSomething() {
      console.log(123123)
      const products = await this.$axios.$get('http://localhost:8080/api/products')
      // localStorage.setItem('products', JSON.stringify(products))
      // console.log('ip: ', ip);
      this.products = products
    },
    async fetchTags () {
      console.log(123123)
      const tags = await this.$axios.$get('http://localhost:8080/api/tags')
      console.log('tags: ', tags)
      // localStorage.setItem('tags', JSON.stringify(tags))
      // console.log('ip: ', ip);
      this.tags = tags
    },
    async fetchWorkers () {
      console.log(123123)
      const workers = await this.$axios.$get('http://localhost:8080/api/workers')
      // console.log('tags: ', tags)
      // localStorage.setItem('tags', JSON.stringify(tags))
      // console.log('ip: ', ip);
      this.workers = workers
    },
  }
}
</script>

<style>

</style>