<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="text-lg h-21 px-20 flex justify-between items-center">
    <nuxt-link class="text-gray-900 tracking-wide font-medium" to="/">CHEWEI</nuxt-link>
    <div class="flex">
      <nuxt-link class="mx-10 text-base" to="/projects">Projects</nuxt-link>
      <nuxt-link class="mx-10 text-base" to="/about">About</nuxt-link>
      <nuxt-link class="mx-10 text-base" to="/services">Services</nuxt-link>
      <nuxt-link class="mx-10 text-base" to="/contact">Contact</nuxt-link>
    </div>
    <div class="flex">
      <div class="mx-10">Try</div>
      <div class="ml-10">Read</div>
    </div>
  </nav>

</template>

<script>
  export default {

  }

</script>

<style>

</style>
