<template>
  <div class="container mx-auto max-w-screen-lgs">
  
    <div class="mx-7 mt-11 md:mt-12 md:mx-auto" style="max-width: 720px">
      <div class="mb-5 md:mb-6 last:mb-0" v-for="(item, index) in 2" :key="index">
        <div class="bg-no-repeat bg-cover bg-center mb-2 md:mb-6" style="padding-bottom:66.666%; background-color:#f5f5f5" :style="`background-image:url()`"></div>
        <p class="text-sm">敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述。</p>
      </div>
    </div>

    <hr class="mx-0 mt-12 mb-11 md:mt-33 md:mb-17  bg-customgray">

  <div class="mx-7 md:mx-0 mb-30" v-if="products.length > 0">
      <div v-swiper="swiperOption" class="swiper-pb">
        <!-- // TODO:  swiper distance -->
        <div class="swiper-wrapper">
          <nuxt-link v-for="(p, i) in products" :key="i"
            class="swiper-slide"
            :to="{ name: 'try-id', params: { id: p.id }}">
            <div class="bg-no-repeat bg-cover bg-center mb-3" style="padding-bottom:100%; background-color:#f5f5f5" :style="`background-image:url(${p.img})`"></div>
            <h3 class="text-sm font-medium">{{ p.cn_title }}</h3>
          </nuxt-link>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

  </div>
</template>

<script>
import SwiperOption from '@/utils/SwiperOption'

export default {
  data () {
    return {
      // products,
      swiperOption: new SwiperOption()
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