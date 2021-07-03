<template>
  <div class="container mx-auto mt-24 lg:mt-35">
    <CategoryTitle
      title="Logo Design"
      subTitle=""
    />
      
    <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-7 mb-17">
      <Product v-for="(p, i) in logos" :key="i"
        :id="p.id"
        :title="p.title"
        :img="p.img"
        :description="p.description"
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
    logos () {
      const logos = this.$store.getters.getProductByCategory('logo')
      logos.sort((a, b) => a.position > b.position ? 1 : -1)
      return logos
    }
  }
}
</script>

<style>

</style>