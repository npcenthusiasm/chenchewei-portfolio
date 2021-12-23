<template>
  <div class="container lgs:max-w-screen-lgs" v-if="product">
  
    <div class="mt-11 md:mt-12 mx-auto" style="max-width: 600px">
      <!-- <div class="mb-5 md:mb-6 last:mb-0" v-for="(item, index) in 2" :key="index">
        <div class="bg-no-repeat bg-cover bg-center mb-2 md:mb-6" style="padding-bottom:66.666%; background-color:#f5f5f5" :style="`background-image:url()`"></div>
        <p class="text-sm">敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述。</p>
      </div> -->
      <div v-for="(imgData, index) in product.detail_imgs" :key="index"
          class="last:mb-0"
          :class="imgData.desc !== '' ? 'mb-6 mb:mb-8' : 'mb-4'">
          <!-- <div
            class="bg-no-repeat bg-cover bg-center"
            style="padding-bottom:64.2%; background-color:#f5f5f5"
            :style="`background-image:url(${imgData.img})`"
            :class="imgData.desc !== '' ? 'mb-2 md:mb-3' : ''">
          </div> -->
          <!-- style="padding-bottom:64.2%; background-color:#f5f5f5" -->
          <template v-if="imgData.type === 'video'">
            <video
              controlslist="nodownload"
              controls
              class="w-full"
              :poster="product.previewImg" 
              :class="imgData.desc !== '' ? 'mb-2 md:mb-3' : ''"
              :src="imgData.img"></video>
          </template>

          <template v-else>
      
            <div
              class="bg-no-repeat bg-cover bg-center"
              style="padding-bottom:64.2%; background-color:#f5f5f5"
              :style="`background-image:url(${imgData.img})`"
              :class="imgData.desc !== '' ? 'mb-2 md:mb-3' : ''">
            </div>
          </template>
          
          <p v-if="imgData.desc" v-html="imgData.desc" class="text-sm tracking-widest"></p>
        </div>
        <p class="text-sm tracking-widest" v-if="product.music">music: {{ product.music }}</p>
        <p class="text-sm tracking-widest" v-if="product.album">album: {{ product.album }}</p>
    </div>

    <hr class="mt-12 mb-11 md:mt-33 md:mb-17  bg-customgray">

    <div class=" mb-30" v-if="products.length > 0">
      <client-only>
        <div v-swiper="swiperOption" class="swiper-pb">
          <div class="swiper-wrapper">
            <nuxt-link v-for="(p, i) in products" :key="i"
              class="swiper-slide"
              :to="{ name: 'try-id', params: { id: p.id }}">
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
      swiperOption: new SwiperOption({ breakpoints })
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