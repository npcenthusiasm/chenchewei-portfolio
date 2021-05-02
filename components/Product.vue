<template>
  <div class="mb-16">
    <div style="height: 280px; background-color: #f5f5f5;" @click="goProduct">
      <img src="~assets/img/chair.jpg" alt="" class="w-full h-full object-cover">
    </div>
    <!-- <nuxt-link style="height: 280px; background-color: #f5f5f5;"
      :to="{ name: 'projects-id', params: { id: item.title }}">
      <img src="~assets/img/chair.jpg" alt="" class="w-full h-full object-cover">
    </nuxt-link> -->
    <div v-if="item">{{ item.title }}</div>
    <div v-if="item">{{ item.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goProduct () {
      this.$router.push(`/projects/${this.item.title}`)
    }
  }
}
</script>

<style>

</style>