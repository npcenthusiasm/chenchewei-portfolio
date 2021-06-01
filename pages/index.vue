<template>
  <div>
    <Banner class="mb-15 lg:mb-20"/>

    <div class="container mx-auto">
      <CategoryTitle
        title="Product Design"
        subTitle="for Daily Utilities"
      />
      
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-6 md:gap-5">
        <Product v-for="(p, i) in products.slice(0,9)" :key="i"
          :id="p.id"
          :title="p.title"
          :img="p.img"
          :description="p.simple_desc"
        />
      </div>
      <div class="mx-7 lg:mx-0">
        <SeeMore to="/projects/product-design"/>
      </div>
    </div>

    <div class="container mx-auto px-7 md:px-0">
      <hr class="mt-6 mb-19 md:mt-7 md:mb-30 bg-customgray">
    </div>

    <div class="flex items-center justify-center mb-15 md:mb-23">
      <img loading="lazy" src="@/assets/img/square.svg" alt="arrow" class="w-2">
      <div class="mx-4 text-black-900 text-lg font-semibold">Sometimes I also do</div>
      <img loading="lazy" src="@/assets/img/square.svg" alt="arrow" class="w-2">
    </div>

    <div class="container mx-auto">
      <CategoryTitle
        title="Interface Design"
        subTitle="for Web & App"
      />
      
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1   md:grid-cols-3 gap-6 md:gap-5">
        <Product v-for="(p, i) in interfaces.slice(0,3)" :key="i"
          :id="p.id"
          :title="p.title"
          :img="p.img"
          :description="p.simple_desc"
        />
      </div>
      <div class="mx-7 lg:mx-0">
        <SeeMore to="/projects/interface-design"/>
      </div>
    </div>
    
    <div class="container mx-auto px-7 md:px-0">
      <!-- <hr class="my-11 lg:my-14 bg-customgray"> -->
      <hr class="mt-6 mb-15 md:mt-7 md:mb-30 bg-customgray">

    </div>

    <div class="container mx-auto mb-7">
      <CategoryTitle
        title="Logo Design"
        subTitle="for Web & App"
      />
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-6 md:gap-5">
        <Product v-for="(p, i) in logos.slice(0,3)" :key="i"
          :id="p.id"
          :title="p.title"
          :img="p.img"
          :description="p.simple_desc"
        />
      </div>
      <div class="mx-7 lg:mx-0">
        <SeeMore to="/projects/logo-design"/>
      </div>
    </div>
  </div>
</template>

<script>

import CategoryTitle from '@/components/home/CategoryTitle'
import SeeMore from '@/components/home/SeeMore'

export default {
  components: {
    CategoryTitle,
    SeeMore
  },
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
      { property: 'og:site_name', content: '陳哲瑋作品集' },
      { property: 'og:locale', content: 'zh_TW' }
    ],
  },
  computed: {
    products () {
      const products = this.$store.getters.getProductByCategory('product')
      products.sort((a, b) => a.position > b.position ? 1 : -1)
      const items = products.filter(product => product.show)
      return items
    },
    interfaces () {
      const products = this.$store.getters.getProductByCategory('interface')
      products.sort((a, b) => a.position > b.position ? 1 : -1)
      const items = products.filter(product => product.show)
      return items
    },
    logos () {
      const products = this.$store.getters.getProductByCategory('logo')
      products.sort((a, b) => a.position > b.position ? 1 : -1)
      const items = products.filter(product => product.show)
      return items
    },
    // products () {
    //   return this.$store.state.products
    // }
  }
}
</script>

