<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="text-lg h-21 px-7 md:px-20 flex justify-between items-center">
    <nuxt-link class="text-gray-900 tracking-wide font-medium" to="/">CHEWEI</nuxt-link>
    <div class="hidden md:flex" :class="{'open': open}">
      <div class="flex">
        <div class="relative group">
          <nuxt-link class="px-10 text-base" to="/projects">Projects</nuxt-link>
          <div class="mt-4 flex absolute z-10 opacity-0 transform -translate-y-6  h-0 bg-grey-200
            group-hover:h-20 group-hover:opacity-100 transition duration-200
            group-hover:translate-y-0
          ">
            <nuxt-link class="pl-10 pr-10 text-base whitespace-nowrap" to="/product-design">Product Design</nuxt-link>
            <nuxt-link class="pr-10 text-base whitespace-nowrap" to="/interface-design">Interface Design</nuxt-link>
            <nuxt-link class="pr-10 text-base whitespace-nowrap" to="/logo">Logo</nuxt-link>
          </div>
          <div class="fixed max-h-0 h-full  top-16 w-full left-0 right-0 transition-all duration-200 opacity-0 bg-shonwhite
            group-hover:opacity-100 group-hover:max-h-20"></div>
        </div>
        <nuxt-link class="mx-10 text-base" to="/about" @click.native="close">About</nuxt-link>
        <nuxt-link class="mx-10 text-base" to="/services" @click.native="close">Services</nuxt-link>
        <nuxt-link class="mx-10 text-base" to="/contact" @click.native="close">Contact</nuxt-link>
      </div>
      <div class="flex">
        <div class="mx-10">Try</div>
        <div class="ml-10">Read</div>
      </div>
    </div>
    <div class="flex md:hidden">
      <Burger
        :open="open"
        @toggle="toggle"/>
    </div>
  </nav>

</template>

<script>
  export default {
    data() {
      return {
        open: false
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      },
      close () {
        this.open = false
      }
    }
  }
</script>

<style>

.open {
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;
  top: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aqua;
}

.open a {
  display: block;
  text-align: center;
  width: 100%;
  padding: 20px 0;
}
</style>
