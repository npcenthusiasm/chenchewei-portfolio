<template>
  <div class="container mx-auto mt-25 md:mt-34">
    <div class="mx-7 mb-9 lg:mb-7 l lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
      <h3 class="text-1xl md:text-xl font-normal text-black-900">Logo Design</h3>
    </div>
    <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-6 mb-17">
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
export default {
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