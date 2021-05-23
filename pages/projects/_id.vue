<template>
  <div class="container mx-auto px-24">
    <!-- 96 -->
    <!-- (1290 - 1090) / 2 = 95 -->
    
    <div v-if="product" class="mt-12">
      <div class="mb-15">
        <div class="bg-no-repeat bg-cover bg-center"
          style="padding-bottom:64.2%; background-color:#f5f5f5"
          :style="`background-image:url(${product.detail_main_img})`"></div>
      </div>

      <h2 class="mb-4 text-xl lg:text-2xl text-black-900">{{ product.title }}</h2>

      <div class="flex flex-col lg:flex-row text-black-900 mb-15">
        <div class="w-auto lg:w-7/12">
          <p class="mb-8 lg:mb-5">{{ product.en_desc }}</p>
          <p>{{ product.cn_desc }}</p>
        </div>
        <div class="w-auto lg:w-2/12"></div>

        <div class="w-auto lg:w-3/12">
          <ul class="mb-8 lg:mb-5">
            <li class="text-xs mb-2" v-for="(member, index) in product.en_member_info" :key="index">
              <span class="capitalize text-black-500 mr-2">{{ member.key }}</span>
              <span class="text-black-900 font-semibold">{{ member.value.join(', ') }}</span>
            </li>
          </ul>

          <ul class="mb-8 lg:mb-5">
            <li class="text-xs mb-2" v-for="(member, index) in product.cn_member_info" :key="index">
              <span class="capitalize text-black-500 mr-2">{{ member.key }}</span>
              <span class="text-black-900 font-semibold">{{ member.value.join(', ') }}</span>
            </li>
          </ul>
        </div>
      </div>

    <div
      v-for="(img, index) in product.detail_imgs" :key="index"
      class="bg-no-repeat bg-cover bg-center mb-4"
      style="padding-bottom:64.2%; background-color:#f5f5f5"
      :style="`background-image:url(${img})`"></div>
    </div>

    <div v-else>
      prodcut no found
    </div>

    <hr class="mt-11 lg:mt-33 lg:mb-17 bg-customgray">
    <div class="mb-30" v-if="products.length > 0">
      <div v-swiper="swiperOption" class="swiper-pb">
        <div class="swiper-wrapper">
          <nuxt-link v-for="(p, i) in products" :key="i"
            class="swiper-slide"
            :to="{ name: 'try-id', params: { id: p.id }}">
            <div class="bg-no-repeat bg-cover bg-center mb-3" style="padding-bottom:68.5%; background-color:#f5f5f5" :style="`background-image:url(${p.img})`"></div>
            <h3 class="text-sm text-black-900 md:text-sm">{{ p.title }}</h3>
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
        return [this.product, this.product, this.product, this.product, this.product, this.product]
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