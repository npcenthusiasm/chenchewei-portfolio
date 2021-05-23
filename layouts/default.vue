<template>
  <div class="bg-shonwhite">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>
<style lang="css">

</style>