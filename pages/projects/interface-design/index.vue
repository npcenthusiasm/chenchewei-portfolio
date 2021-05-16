<template>
  <div class="container mx-auto">
    <div class="mx-7 mb-9 lg:mb-7 l lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
      <h3 class="text-2xl font-normal text-black-900">Product Design</h3>
      <p class="w-full text-sm  md:w-auto md:ml-4">for Daily Utilities</p>
    </div>
    <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-5 mb-20">
      <Product v-for="(p, i) in interfaces" :key="i"
        :title="p.title"
        :img="p.img"
        :description="p.description"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    interfaces () {
      return this.$store.getters.getProductByCategory('interface')
    },
  }
}
</script>

<style>

</style>