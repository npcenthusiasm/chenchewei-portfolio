<template>
  <div>
    <Banner />
    <div class="container mx-auto">
      <h3>Product Design <span>for Daily Utilities</span></h3>
      <div class="flex flex-wrap m-auto">
        <Product v-for="i in 9" :key="i" class="w-4/12 " :class="(i) % 3 === 0 ? 'pr-0': 'pr-6'"/>
      </div>
    </div>

    <div class="container mx-auto">
      <h3>Interface Design <span>for Web & App</span></h3>
      <div class="flex flex-wrap m-auto">
        <Product v-for="i in 3" :key="i" class="w-4/12 " :class="(i) % 3 === 0 ? 'pr-0': 'pr-6'"/>
      </div>
    </div>

    <div class="container mx-auto">
      <h3>Logo Design <span>for Web & App</span></h3>
      <div class="flex flex-wrap m-auto" v-if="products.length > 0">
        <Product v-for="(p, i) in products" :key="i"
          class="w-4/12 " :class="(i) % 3 === 0 ? 'pr-0': 'pr-6'"
          :item="p"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'my nuxt project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
      { property: 'og:title', content: '甜點電商' },
      { property: 'og:description', content: '六角學院的甜點電商' },
      { property: 'og:site_name', content: '甜點電商' },
      { property: 'og:locale', content: 'zh_TW' }
    ],
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

