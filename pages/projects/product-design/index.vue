<template>
  <div class="container mx-auto">
    <h3>Product Design <span>for Daily Utilities</span></h3>
    <div class="flex flex-wrap m-auto">
      <Product v-for="i in 9" :key="i" class="w-4/12 " :class="(i) % 3 === 0 ? 'pr-0': 'pr-6'"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>