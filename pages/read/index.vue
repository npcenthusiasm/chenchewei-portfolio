<template>
  <div class="container mx-auto max-w-screen-lgs">

    <div class="mx-7 md:mx-0 mt-18 mb-13 md:mt-35 md:mb-14">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 text-base md:text-sm">
          <p class="tracking-widest">每隔一段時間整理一些喜歡的書，</p>
          <p class="tracking-widest">並且紀錄下書裡對我很重要的內容，</p>
          <p class="tracking-widest">也希望這些書被更多人知道。</p>
        </div>
      </div>
    </div>

    <div class="mx-7 md:mx-0 mb-25 md:mb-34 lg:px-0 grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-2 md:gap-5 mb-10">
      <nuxt-link v-for="(p, i) in items" :key="i"
        :to="{ name: 'read-id', params: { id: p.id }}">
        <div class="bg-no-repeat bg-cover bg-center mb-2 md:mb-3" style="padding-bottom:100%; background-color:#f5f5f5" :style="`background-image:url(${p.img})`"></div>

        <h3 class="text-sm tracking-widest mb-5 md:mb-0">{{ p.cn_title }}</h3>
      </nuxt-link>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      // products
    }
  },
  computed: {
    items () {
      const items = this.$store.getters.getProductByCategory('read')
      return items
    }
  }
}
</script>

<style>

</style>