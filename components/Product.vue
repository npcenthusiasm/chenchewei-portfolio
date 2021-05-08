<template>
  <nuxt-link class="" :to="`/projects/${title}`">
    <div class="bg-no-repeat bg-cover bg-center" style="padding-bottom:68%; background-color:#f5f5f5" :style="`background-image:url(${''}})`"></div>
    <div>{{ title }}</div>
    <p>{{ description }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  methods: {
    goProduct () {
      this.$router.push(`/projects/${this.title}`)
    }
  }
}
</script>

<style>

</style>