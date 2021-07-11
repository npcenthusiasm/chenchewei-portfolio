<template>
  <div class="text-black-900 mx-7 xl:mx-0 mb-7 md:mb-6 flex items-baseline flex-wrap md:flex-nowrap">
    <h2 class="leading-none text-xl md:text-xl font-normal">{{ title }}</h2>
    <p class="w-full text-sm md:w-auto md:ml-3 mt-2" v-if="subTitle">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    }
  }
}
</script>

<style>

</style>