<template>
  <nuxt-link :to="`/projects/${title}`">
    <div class="bg-no-repeat bg-cover bg-center mb-4" style="padding-bottom:68%; background-color:#f5f5f5" :style="`background-image:url(${require('~/assets/img/room.jpg')})`"></div>
    <div class="text-sm ">{{ title }}</div>
    <p class="text-sm line-clamp-1" style="color:rgba(26, 26, 26, 0.5)">{{ description }}</p>
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
    },
    img: {
      type: String
    }
  },
  methods: {
    goProduct () {
      this.$router.push(`/projects/${this.title}`)
    },
    bindImg () {
      if (this.img !== '') {
        return require(`~/assets/img/${this.img}`)
      } else {
        return ''
      }
    }
  }
}
</script>

<style>

</style>