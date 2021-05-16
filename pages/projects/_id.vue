<template>
  <div class="container mx-auto px-7">
    <!-- <nuxt-link class="mx-10 text-base" to="projects/product-design">product-design</nuxt-link> -->

    <div v-if="product">
      <!-- <div class="w-full mb-14" style="height: 700px; background-color: #f5f5f5;"></div> -->
      <div class="mb-14">
        <div class="bg-no-repeat bg-cover bg-center" style="height: 700px;padding-bottom:68%; background-color:#f5f5f5" :style="`background-image:url(${require('~/assets/img/room.jpg')})`"></div>
      </div>

      <h2 class="mb-4 text-xl lg:text-2xl text-black-900">{{ product.title }}</h2>

      <div class="flex flex-col lg:flex-row text-black-900">
        <div class="w-auto lg:w-7/12">
          <p class="mb-8 lg:mb-5">{{ product.description }}</p>
          <p class="mb-8 lg:mb-5">{{ product.cn_description }}</p>
        </div>
        <div class="w-auto lg:w-2/12"></div>

        <div class="w-auto lg:w-3/12">
          <ul class="mb-8 lg:mb-5">
            <li class="text-xs"><span class="capitalize text-gray-500">brand</span> {{ product.brand }}</li>
            <li class="text-xs"><span class="capitalize text-gray-500">engineering</span> {{ product.engineering }}</li>
            <li class="text-xs"><span class="capitalize text-gray-500">photography</span> {{ product.photography }}</li>
          </ul>

          <ul class="mb-8 lg:mb-5">
            <li class="text-xs"><span class="capitalize text-gray-500">品牌</span> {{ product.cn_brand }}</li>
            <li class="text-xs"><span class="capitalize text-gray-500">工程</span> {{ product.cn_engineering }}</li>
            <li class="text-xs"><span class="capitalize text-gray-500">攝影</span> {{ product.cn_photography }}</li>
          </ul>
        </div>
      </div>

      <div class="w-full mb-14" style="height: 700px; background-color: #f5f5f5;"></div>
      <div class="w-full mb-14" style="height: 700px; background-color: #f5f5f5;"></div>
    </div>

    <div v-else>
      prodcut no found
    </div>


    <div v-swiper="swiperOption" class="swiper-pb-10">
      <div class="swiper-wrapper">

        <!-- <div class="px-7 lg:px-0 grid grid-rows-2 grid-cols-2 md:grid-rows-2 md:grid-cols-4 gap-5"> -->
        <nuxt-link v-for="(p, i) in products" :key="i"
          class="swiper-slide"
          :to="{ name: 'try-id', params: { id: p.ename }}">
          <div class="bg-no-repeat bg-cover bg-center" style="padding-bottom:100%; background-color:#f5f5f5" :style="`background-image:url(${p.url})`"></div>
          <h3 class="text-base md:text-sm">{{ p.title }}</h3>
        </nuxt-link>
        <!-- </div> -->
      </div>
      <div class="swiper-pagination"></div>
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </div>
  </div>
</template>

<script>
import SwiperOption from '@/utils/SwiperOption'

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
  data() {
    return {
      title: this.title,
      swiperOption: new SwiperOption()
    }
  },
  // watch: {
  //   product (p) {
  //     console.log('p: ', p);
  //     if (p) {
  //       this.title = this.product.ename

  //     }
  //   }
  // },
  computed: {
    product () {
      return this.$store.getters.getProductById(this.$route.params.id)
    },
    products () {
      return [this.product, this.product, this.product]
    }
  }
}
</script>

<style>
.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48 ;
}

.swiper-pb-10 {
  @apply pb-10;
}
</style>