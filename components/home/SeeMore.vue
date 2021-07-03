<template>
  <div class="text-right mt-10 lg:mt-5">
    <router-link :to="to"
      class="inline-block text-black-900 text-sm">
      <div class="flex items-center">
        <span class="mr-2">see more</span>
        <div class="w-5">
          <img loading="lazy" src="@/assets/img/arrow.svg" alt="arrow">
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String
    }
  }
}
</script>

<style>

</style>