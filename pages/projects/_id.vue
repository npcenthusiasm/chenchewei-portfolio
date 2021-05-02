<template>
  <div class="container mx-auto">
    <!-- <nuxt-link class="mx-10 text-base" to="projects/product-design">product-design</nuxt-link> -->

    <div v-if="product">
      <div class="w-full mb-14" style="height: 700px; background-color: #f5f5f5;"></div>
      <h2>{{ product.title }}</h2>

      <div class="flex">
        <div class="w-7/12">
          <p>{{ product.cn_description }}</p>
          <p>{{ product.description }}</p>
        </div>
        <div class="w-2/12"></div>

        <div class="w-3/12">
          <div>
            Brand: 123
          </div>
          <div>
            Brand: 123
          </div>
        </div>
      </div>

      <div class="w-full mb-14" style="height: 700px; background-color: #f5f5f5;"></div>
      <div class="w-full mb-14" style="height: 700px; background-color: #f5f5f5;"></div>
    </div>

    <div v-else>
      prodcut no found
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product () {
      return this.$store.getters.getProductById(this.$route.params.id)
    }
  }
}
</script>

<style>

</style>