<template>
  <div class="container lgs:max-w-screen-lgs">
  
    <div class="mt-11 md:mt-12 mx-auto" v-if="product"  style="max-width: 600px">
      <div class="mb-5 md:mb-6 last:mb-0">
        <div class="bg-no-repeat bg-cover bg-center mb-2 md:mb-3" style="padding-bottom:66.666%; background-color:#f5f5f5" :style="`background-image:url(${product.detail_imgs[0].img})`"></div>
        <p class="text-sm tracking-widest" style="line-height:1.8" v-html="product.detail_imgs[0].desc"></p>
      </div>
    </div>

    <hr class="mt-12 mb-11 md:mt-33 md:mb-17  bg-customgray">

  <div class=" mb-30" v-if="products.length > 0">
      <client-only>
        <div v-swiper="swiperOption" class="swiper-pb">
          <div class="swiper-wrapper">
            <nuxt-link v-for="(p, i) in products" :key="i"
              class="swiper-slide"
              :to="{ name: 'read-id', params: { id: p.id }}">
              <div class="product-hover bg-no-repeat bg-cover bg-center mb-3" style="padding-bottom:100%; background-color:#f5f5f5" :style="`background-image:url(${p.img})`"></div>
              <h3 class="text-sm">{{ p.cn_title }}</h3>
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

const breakpoints  = {
  768: {
    slidesPerView: 4,
    slidesPerGroup: 4,
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
  data () {
    return {
      title: '',
      description: '',
      image: '',
      swiperOption: new SwiperOption(breakpoints)
    }
  },
  watch: {
    product: {
      handler (p) {
        // console.log('p: ', p)
        if (p) {
          this.title = `${p.cn_title} | ${p.category} | CHEWEI`
          const REGEX_BR = new RegExp('<br/>', 'gi')
          const desc = p.detail_imgs[0].desc.replace(REGEX_BR, ' ')
          this.description = `${desc}`,
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
        let products = this.$store.getters.getProductByCategory(this.product.category)
        // 注意 read 跟 try 是 list_sort
        products.sort((a, b) => a.list_sort > b.list_sort ? 1 : -1)
        const ps = getSwiperProducts(products, this.product.id)
        return ps
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