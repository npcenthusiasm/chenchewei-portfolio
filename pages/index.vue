<template>
  <div>
    <Banner class="mb-15 lg:mb-20"/>
    <div class="container mx-auto">
      <!-- <h3 class="mx-7 lg:mx-0 flex flex-wrap">Product Design <span></span></h3> -->
      <div class="mx-7 mb-9 lg:mb-7 l lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
        <h3 class="text-2xl font-normal text-black-900">Product Design</h3>
        <p class="w-full text-sm  md:w-auto md:ml-4">for Daily Utilities</p>
      </div>
      
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-5">
        <Product v-for="(p, i) in products.slice(0,9)" :key="i"
          :title="p.title"
          :img="p.img"
          :description="p.description"
        />
      </div>
    </div>

    <div class="container mx-auto px-7 md:px-0">
      <hr class="my-11 lg:my-14 bg-customgray">
    </div>




    <div class="container mx-auto">
      <div class="mx-7 mb-9 lg:mb-7 lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
        <h3 class="text-2xl font-normal text-black-900">Interface Design</h3>
        <p class="w-full text-sm  md:w-auto md:ml-4">for Web & App</p>
      </div>
      
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1   md:grid-cols-3 gap-5">
        <Product v-for="(p, i) in interfaces.slice(0,3)" :key="i"
          :title="p.title"
          :img="p.img"
          :description="p.description"
        />
      </div>
    </div>
    
    <div class="container mx-auto px-7 md:px-0">
      <hr class="my-11 lg:my-14 bg-customgray">
    </div>

    <div class="container mx-auto mb-28">
      <div class="mx-7 mb-9 lg:mb-7 lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
        <h3 class="text-2xl font-normal text-black-900">Logo Design</h3>
        <p class="w-full text-sm md:w-auto md:ml-4">for Web & App</p>
      </div>
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1   md:grid-cols-3 gap-5">
        <Product v-for="(p, i) in logos.slice(0,3)" :key="i"
          :title="p.title"
          :img="p.img"
          :description="p.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '陳哲瑋 - 作品集',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
      { property: 'og:title', content: '陳哲瑋 - 作品集' },
      { property: 'og:description', content: '陳哲瑋，台灣產品設計師。負責產品定位、使用體驗、外觀設計、內容規劃的工作。' },
      // { property: 'og:image', content: 'todo' },
      // { property: 'og:url', content: 'todo' },
      { property: 'og:site_name', content: '甜點電商' },
      { property: 'og:locale', content: 'zh_TW' }
    ],
  },
  computed: {
    products () {
      return this.$store.getters.getProductByCategory('product')
    },
    interfaces () {
      return this.$store.getters.getProductByCategory('interface')
    },
    logos () {
      return this.$store.getters.getProductByCategory('logo')
    },
    // products () {
    //   return this.$store.state.products
    // }
  }
}
</script>

