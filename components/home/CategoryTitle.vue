<template>
  <div class="text-black-900 mx-7 mb-9 lg:mb-7 l lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
    <h3 class="text-2xl font-normal">{{ title }}</h3>
    <p class="w-full text-sm md:w-auto md:ml-3">{{ subTitle }}</p>
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