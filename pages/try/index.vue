<template>
  <div class="container mx-auto lgs:max-w-screen-lgs">

    <div class="mx-7 xl:mx-0 mt-18 mb-13 md:mt-35 md:mb-14">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 text-base md:text-sm">
          <p class="tracking-widest">試著以不同的方式將日常記錄下來，</p>
          <p class="tracking-widest">希望透過自由的嘗試維持對生活有感，</p>
          <p class="tracking-widest">也從嘗試的過程中加深印象。</p>
        </div>
      </div>
    </div>

    <div class="mx-7 xl:mx-0 mb-25 md:mb-34 lg:px-0 grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-2 md:gap-5 mb-10">
      <nuxt-link v-for="(p, i) in items" :key="i"
        :to="{ name: 'try-id', params: { id: p.id }}">
        <div class="bg-no-repeat bg-cover bg-center mb-2 md:mb-3" style="padding-bottom:100%; background-color:#f5f5f5" :style="`background-image:url(${p.img})`"></div>

        <h3 class="text-sm tracking-widest mb-5 md:mb-0">{{ p.cn_title }}</h3>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // products
    }
  },
  computed: {
    items () {
      const items = this.$store.getters.getProductByCategory('try')
      items.sort((a, b) => a.position > b.position ? 1 : -1)

      return items
    }
  }
}
</script>

<style>

</style>