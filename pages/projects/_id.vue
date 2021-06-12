<template>
  <div class="container mx-auto px-7 md:py-0 max-w-screen-lgs">
    <!-- 96 -->
    <!-- (1290 - 1090) / 2 = 95 -->
    
    <div v-if="product" class="mt-12">
      <div class="mb-5 md:mb-15">
        <div class="bg-no-repeat bg-cover bg-center"
          style="padding-bottom:64.2%; background-color:#f5f5f5"
          :style="`background-image:url(${product.detail_main_img.img})`"></div>
      </div>

      <h2 class="mb-4 text-1xl lg:text-2xl text-black-900">{{ product.title }}</h2>

      <div class="flex flex-col md:flex-row md:flex-wrap">

        <div class="order-1 w-auto mb-6 md:w-7/12 md:mb-15">
          <div class="">
            <p class="text-sm mb-8 mb-3 md:mb-5">{{ product.en_desc }}</p>
            <p class="text-sm tracking-widest">{{ product.cn_desc }}</p>
          </div>

        </div>
        <div class="hidden md:block md:order-2 md:w-2/12"></div>

        <div class="order-4 w-auto mb-12 md:order-3 md:w-3/12 text-xss">
          <ul class="mb-8 md:mb-4">
            <li class="mb-1 leading-none" v-for="(member, index) in product.en_member_info" :key="index">
              <span class="text-xss capitalize text-black-500 mr-2">{{ member.key }}</span>
              <span class="text-xss text-black-900 font-bold">{{ member.value.join(', ') }}</span>
            </li>
          </ul>

          <ul class="">
            <li class="mb-1 tracking-wider leading-none" v-for="(member, index) in product.cn_member_info" :key="index">
              <span class="text-xss capitalize text-black-500 mr-2">{{ member.key }}</span>
              <span class="text-xss text-black-900 font-bold">{{ member.value.join('、') }}</span>
            </li>
          </ul>
        </div>

        <div class="order-3 w-full mb-17 md:order-4 md:mb-33">
          <div
            v-for="(imgData, index) in product.detail_imgs" :key="index"
            class="bg-no-repeat bg-cover bg-center mb-4 last:mb-0"
            style="padding-bottom:64.2%; background-color:#f5f5f5"
            :style="`background-image:url(${imgData.img})`">
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      prodcut no found
    </div>

    <hr class="mb-11 md:mb-17 bg-customgray">
    <div class="mb-30" v-if="products.length > 0">
      <div v-swiper="swiperOption" class="swiper-pb">
        <div class="swiper-wrapper">
          <nuxt-link v-for="(p, i) in products" :key="i"
            class="swiper-slide"
            :to="{ name: 'projects-id', params: { id: p.id }}">
            <div class="bg-no-repeat bg-cover bg-center mb-3" style="padding-bottom:68.5%; background-color:#f5f5f5" :style="`background-image:url(${p.img})`"></div>
            <h3 class="text-sm font-medium md:text-sm">{{ p.title }}</h3>
          </nuxt-link>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperOption from '@/utils/SwiperOption'

const swpOpt = new SwiperOption()
const customOpt = {
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20
    }
  }
}

Object.assign(swpOpt, customOpt)

export default {
  head () {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
        // { property: 'og:title', content: '陳哲瑋 - 作品集' },
        { property: 'og:description', content: this.description },
        // { property: 'og:image', content: 'todo' },
        // { property: 'og:url', content: 'todo' },
        // { property: 'og:site_name', content: '甜點電商' },
        // { property: 'og:locale', content: 'zh_TW' }
      ],
    }
  },
  data() {
    return {
      title: '陳哲瑋 - 作品集',
      description: '陳哲瑋，台灣產品設計師。負責產品定位、使用體驗、外觀設計、內容規劃的工作。',
      swiperOption: swpOpt
    }
  },
  watch: {
    product(p) {
      // console.log('p: ', p)
      if (p) {
        this.title = `${p.title} | ${p.category}`
        this.description = `${p.en_desc}, ${p.cn_desc}`
      }
    }
  },
  computed: {
    product () {
      return this.$store.getters.getProductById(this.$route.params.id)
    },
    products () {
      if (this.product) {
        const products = this.$store.getters.getProductByCategory(this.product.category)
        return products.filter(p => p.id !== this.product.id)
      }
      return []
    }
  }
}
</script>

<style scoped>
.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48 ;
}

.swiper-pb {
  @apply pb-22;
}

/deep/ .swiper-pagination-bullet {
  opacity: 1;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  border: 1px solid black;
  background-color: white;
  margin: 0 12px !important;
}

/deep/ .swiper-pagination-bullet-active {
    opacity: 1;
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    background-color: black;
}
</style>