<template>
  <div class="container mx-auto mt-24 lg:mt-35">
    <CategoryTitle
      title="Product Design"
      subTitle="for Daily Utilities"
    />
      
    <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-7 mb-17">
    <!-- <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-8 md:gap-5 mb-22 md:mb-17"> -->
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
import CategoryTitle from '@/components/home/CategoryTitle'

export default {
  components: {
    CategoryTitle
  },
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