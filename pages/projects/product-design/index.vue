<template>
  <div class="container mx-auto mt-25 md:mt-34">
    <div class="mx-7 mb-9 lg:mb-7 l lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
      <h3 class="text-2xl font-normal text-black-900">Product Design</h3>
      <p class="w-full text-sm  md:w-auto md:ml-4">for Daily Utilities</p>
    </div>
    <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-8 md:gap-5 mb-22 md:mb-17">
      <Product v-for="(p, i) in products" :key="i"
        :id="p.id"
        :title="p.title"
        :img="p.img"
        :description="p.simple_desc"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      const products = this.$store.getters.getProductByCategory('product')
      products.sort((a, b) => a.position > b.position ? 1 : -1)
      return products
    }
  }
}
</script>

<style>

</style>