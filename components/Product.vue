<template>
  <nuxt-link :to="`/projects/${id}`" class="text-sm">
    <div class="product-hover bg-no-repeat bg-cover bg-center mb-3" style="padding-bottom:68%; background-color:#f5f5f5" :style="`background-image:url(${img})`"></div>
    <h3 class="text-sm text-black-900">{{ title }}</h3>
    <p v-if="description" class="text-sm mb-0 md:mb-10" style="color:rgba(26, 26, 26, 0.5)">{{ description }}</p>
  </nuxt-link>
</template>
<script>

export default {
  props: {
    id: {
      type: String
    },
    title: {
      type: String
    },
        title: {
      type: String
    },
    description: {
      type: String
    },
    img: {
      type: String
    }
  }
}
</script>

<style>

</style>