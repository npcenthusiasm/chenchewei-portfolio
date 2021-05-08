<template>
  <div class="container mx-auto">
  
  <div class="mx-7 md:mx-auto" style="max-width: 720px">
    <div class="bg-no-repeat bg-cover bg-center" style="padding-bottom:66.666%; background-color:#f5f5f5" :style="`background-image:url()`"></div>
    <p>敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述。</p>
    <div class="bg-no-repeat bg-cover bg-center" style="padding-bottom:66.666%; background-color:#f5f5f5" :style="`background-image:url()`"></div>
    <p>敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述。</p>
    <p>敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述。</p>
  </div>

  <hr class="mx-0 my-11 md:my-4 bg-customgray">

  <div v-swiper="swiperOption">
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
    <div class="swiper-pagination swiper-pagination-bullets"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  </div>
</template>

<script>
const products = [
  {
    url: '',
    ename: 'light',
    title: '長春市場的光'
  },
  {
    url: '',
    ename: 'light2',
    title: '長春市場'
  },
  {
    url: '',
    ename: 'light3',
    title: '市場的光'
  },
  {
    url: '',
    ename: 'light4',
    title: '長春市場的光'
  }
]
import SwiperOption from '@/utils/SwiperOption'

export default {
  data () {
    return {
      products,
      swiperOption: new SwiperOption()
    }
  }
}
</script>

<style>

</style>