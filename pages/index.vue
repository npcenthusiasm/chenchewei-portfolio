<template>
  <div>
    <!-- <Banner class="mb-15 lg:mb-20"/> -->

    <div class="container mx-auto mt-24 lg:mt-35">
      <CategoryTitle
        title="Product Design"
        subTitle="for Daily Utilities"
      />
      
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-7 md:gap-5">
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
      <hr class="mt-6 mb-21 md:mb-19 md:mt-7 md:mb-30 bg-customgray">
    </div>

    <div class="flex items-center justify-center mx-7 lg:mx-0 mb-17 md:mb-23">
      <!-- <img loading="lazy" src="@/assets/img/square.svg" alt="arrow" style="width: 7.6px"> -->
      <div class="text-black-900 w-full md:text-center text-lg md:text-lg font-medium">
        <div class="hidden md:block">When I am not working on products, I am working on...</div>
        <div class="block md:hidden">
          <div>When I am not working on products,</div>
          <div>I am working on...</div>
        </div>
      </div>
      <!-- <img loading="lazy" src="@/assets/img/square.svg" alt="arrow" style="width: 7.6px"> -->
    </div>

    <div class="container mx-auto">
      <CategoryTitle
        title="Interface Design"
        subTitle="for Web & App"
      />
      
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1   md:grid-cols-3 gap-7 md:gap-5">
        <Product v-for="(p, i) in interfaces.slice(0,3)" :key="i"
          :id="p.id"
          :title="p.title"
          :img="p.img"
          :description="p.simple_desc"
        />
      </div>
      <div class="h-10 md:h-15"></div>
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
        subTitle=""
      />
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-7 md:gap-5">
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

