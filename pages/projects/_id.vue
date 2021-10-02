<template>
  <div class="container md:py-0  lgs:lgs:max-w-screen-lgs">
    <!-- 96 -->
    <!-- (1290 - 1090) / 2 = 95 -->
    
    <div v-if="product" class="mt-12">
      <div class="mb-5 md:mb-15">
        <div class="bg-no-repeat bg-cover bg-center"
          style="padding-bottom:64.2%; background-color:#f5f5f5"
          :style="`background-image:url(${product.detail_imgs[0].img})`"></div>
      </div>

      <div class="text-black-900 mb-6 md:mb-4 flex items-baseline flex-wrap md:flex-nowrap">
        <h1 class="leading-none text-xl font-normal">{{ product.title }}</h1>
        <p class="w-full mt-1 md:mt-0 text-sm md:w-auto md:ml-3" v-if="product.device">{{ product.device }}</p>
      </div>

      <div class="flex flex-col md:flex-row md:flex-wrap">

        <div class="order-1 w-auto mb-6 md:w-7/12 md:mb-15">
          <div class="">
            <p class="text-sm mb-8 mb-3 md:mb-5" v-if="product.en_desc">{{ product.en_desc }}</p>
            <p class="text-sm tracking-widest" style="line-height: 1.8;" v-if="product.cn_desc">{{ product.cn_desc }}</p>
          </div>

        </div>
        <div class="hidden md:block md:order-2 md:w-2/12"></div>

        <div class="order-4 w-auto mb-12 md:order-3 md:w-3/12">
          <ul class="mb-8 md:mb-2 scale-font-area">
            <li class="mb-1 leading-none" v-for="(member, index) in product.en_member_info" :key="index">
              <span class="text-xs capitalize text-black-500 mr-2">{{ member.key }}</span>
              <span class="text-xs text-black-900 font-bold">{{ member.value.join(', ') }}</span>
            </li>
          </ul>

          <ul class="scale-font-area">
            <li class="mb-1 tracking-wider leading-none" v-for="(member, index) in product.cn_member_info" :key="index">
              <span class="text-xs capitalize text-black-500 mr-2">{{ member.key }}</span>
              <span class="text-xs text-black-900 font-bold">{{ member.value.join('、') }}</span>
            </li>
          </ul>
        </div>

        <div class="order-3 w-full mb-17 md:order-4 md:mb-33">
          <div v-for="(imgData, index) in product.detail_imgs.slice(1)" :key="index"
            class="last:mb-0"
            :class="imgData.desc !== '' ? 'mb-6 mb:mb-8' : 'mb-4'">
            <div
              class="bg-no-repeat bg-cover bg-center"
              style="padding-bottom:64.2%; background-color:#f5f5f5"
              :style="`background-image:url(${imgData.img})`"
              :class="imgData.desc !== '' ? 'mb-2 md:mb-3' : ''">
            </div>
            <p v-if="imgData.desc" class="text-sm tracking-widest">{{ imgData.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      prodcut no found
    </div>

    <hr class="mb-11 md:mb-17 bg-customgray">
    <div class="mb-30" v-if="products.length > 0">
      <client-only>
        <div v-swiper="swiperOption" class="swiper-pb">
          <div class="swiper-wrapper">
            <nuxt-link v-for="(p, i) in products" :key="i"
              class="swiper-slide"
              :to="{ name: 'projects-id', params: { id: p.id }}">
              <div class="product-hover bg-no-repeat bg-cover bg-center mb-3" style="padding-bottom:68.5%; background-color:#f5f5f5" :style="`background-image:url(${p.img})`"></div>
              <h3 class="text-sm md:text-sm">{{ p.title }}</h3>
            </nuxt-link>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import SwiperOption from '@/utils/SwiperOption'
import { getSwiperProducts } from '@/utils/getSwiperProducts'

const breakpoints = {
  768: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20
  }
} 

export default {
  head () {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:title'  , property: 'og:title'  , content: this.title},
        { hid: 'og:description' , property: 'og:description' , content: this.description},
        { hid: 'og:url' , property: 'og:url' , content: this.url},
        { hid: 'og:image' , property: 'og:image' , content: this.image},
        { hid: 'og:type' , property: 'og:type' , content: 'website'},
      ],
    }
  },
  data() {
    return {
      title: '',
      description: '',
      image: '',
      swiperOption: new SwiperOption({ breakpoints })
    }
  },
  watch: {
    product: {
      handler (p) {
        // console.log('p: ', p)
        if (p) {
          this.title = `${p.title} | ${p.category} | CHEWEI`
          this.description = `${p.en_desc}, ${p.cn_desc}`,
          this.image = p.img
          const domain = 'https://www.chenchewei.com'
          this.url = domain + this.$route.fullPath
        }
      },
      immediate: true
    }
  },
  computed: {
    product () {
      return this.$store.getters.getProductById(this.$route.params.id)
    },
    products () {
      if (this.product) {

        if (this.product && this.product.id === '16') {
          return [
            this.$store.getters.getProductById('17'),
            this.$store.getters.getProductById('19')
          ]
        } else {
          let products = this.$store.getters.getProductByCategory(this.product.category)
          const k = products.filter(it => it.id !== '16')
          const ps = getSwiperProducts(k, this.product.id)

          return ps
        }
      }
      
      return []
    }
  }
}
</script>

<style scoped>
@media (min-width: 768px){
  .scale-font-area {
    font-size: 12px;
    transform: scale(0.834);
    transform-origin: left top;
  }
}

.scale-font-left {
  position: relative;
  left: -4px;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48 ;
}

.swiper-pb {
  @apply pb-22;
}

/deep/ .swiper-pagination-bullet {
  opacity: 1;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  background-color: black;
  margin: 0 12px !important;
}

/deep/ .swiper-pagination-bullet-active {
  opacity: 1;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  background-color: white;
  border: 1px solid black;
}
</style>