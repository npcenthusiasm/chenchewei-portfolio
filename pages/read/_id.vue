<template>
  <div class="container mx-auto">
  
  <div class="mx-7 md:mx-auto" style="max-width: 720px">
    <div class="bg-no-repeat bg-cover bg-center" style="padding-bottom:66.666%; background-color:#f5f5f5" :style="`background-image:url()`"></div>
    <p>敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述。</p>
    <div class="bg-no-repeat bg-cover bg-center" style="padding-bottom:66.666%; background-color:#f5f5f5" :style="`background-image:url()`"></div>
    <p>敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述。</p>
  </div>

  <hr class="mx-0 my-11 md:my-4 bg-customgray">

  <div class="mb-10 mx-7 lg:mx-0">
    <div v-swiper="swiperOption" class="swiper-pb">
      <div class="swiper-wrapper">
        <nuxt-link v-for="(p, i) in products" :key="i"
          class="swiper-slide"
          :to="{ name: 'read-id', params: { id: p.id }}">
          <div class="bg-no-repeat bg-cover bg-center" style="padding-bottom:100%; background-color:#f5f5f5" :style="`background-image:url(${p.img})`"></div>
          <h3 class="text-base md:text-sm">{{ p.cn_title }}</h3>
        </nuxt-link>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
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