<template>
  <div class="container mx-auto max-w-screen-lgs" v-if="product">
  
    <div class="mx-7 mt-11 md:mt-12 md:mx-auto" style="max-width: 600px">
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
            <video
            controlslist="nodownload"
            controls
            class="w-full"
            :class="imgData.desc !== '' ? 'mb-2 md:mb-3' : ''"
            :src="imgData.img"></video>
          <p v-if="imgData.desc" class="text-sm tracking-widest">{{ imgData.desc }}</p>
        </div>
        <p class="text-sm tracking-widest" v-if="product.music">music: {{ product.music }}</p>
        <p class="text-sm tracking-widest" v-if="product.album">album: {{ product.album }}</p>
    </div>

    <hr class="mx-0 mt-12 mb-11 md:mt-33 md:mb-17  bg-customgray">

    <div class="mx-7 md:mx-0 mb-30" v-if="products.length > 0">
      <client-only>
        <div v-swiper="swiperOption" class="swiper-pb">
          <div class="swiper-wrapper">
            <nuxt-link v-for="(p, i) in products" :key="i"
              class="swiper-slide"
              :to="{ name: 'try-id', params: { id: p.id }}">
              <div class="bg-no-repeat bg-cover bg-center mb-3" style="padding-bottom:100%; background-color:#f5f5f5" :style="`background-image:url(${p.img})`"></div>
              <h3 class="text-sm">{{ p.cn_title }}</h3>
            </nuxt-link>
          </div>
          <div class="swiper-pagination" v-if="products.length > 3"></div>
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
  data () {
    return {
      swiperOption: new SwiperOption({ breakpoints })
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