<template>
  <div class="container mt-24 lg:mt-35">
    <CategoryTitle
      title="Product Design"
      subTitle="for Daily Utilities"
    />
      
    <div class=" grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-7 md:gap-5 mb-17">
    <!-- <div class=" grid grid-rows-1 grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-8 md:gap-5 mb-22 md:mb-17"> -->
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
      products.sort((a, b) => a.page_sort > b.page_sort ? 1 : -1)
      return products
    }
  }
}
</script>

<style>

</style>