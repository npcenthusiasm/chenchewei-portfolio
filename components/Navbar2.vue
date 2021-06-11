<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <nav class="text-lg h-21 px-7 md:px-20 flex justify-between items-center">
      <nuxt-link class="text-gray-900 tracking-wide font-medium" to="/">CHEWEI</nuxt-link>
      <div class="hidden  lg:flex">
        <div class="flex flex-col lg:flex-row">
          <div class="relative group">
            <div class="flex items-center">
              <nuxt-link class="px-10 text-base" to="/product-design">Projects</nuxt-link>
            </div>
            <ul class="lg:absolute z-10 bg-red-100 flex flex-col lg:flex-row ">
              
              <!-- mt-4 flex absolute z-10 opacity-0 transform -translate-y-6  h-0 bg-grey-200
              group-hover:h-20 group-hover:opacity-100 transition duration-200
              group-hover:translate-y-0
            -->
              <li><nuxt-link class="ml-14 lg:ml-10 text-base whitespace-nowrap block" to="/product-design">Product Design</nuxt-link></li>
              <li><nuxt-link class="ml-14 lg:ml-10 text-base whitespace-nowrap block" to="/interface-design">Interface Design</nuxt-link></li>
              <li><nuxt-link class="ml-14 lg:ml-10 text-base whitespace-nowrap block" to="/logo">Logo</nuxt-link></li>
            </ul>
            <!-- <div class="fixed max-h-0 h-full  top-16 w-full left-0 right-0 transition-all duration-200 opacity-0 bg-shonwhite
              group-hover:opacity-100 group-hover:max-h-20"></div> -->
          </div>
          <!-- <nuxt-link class="mr-10 text-base" to="/about" @click.native="close">About</nuxt-link>
          <nuxt-link class="mr-10 text-base" to="/services" @click.native="close">Services</nuxt-link>
          <nuxt-link class="mr-10 text-base" to="/contact" @click.native="close">Contact</nuxt-link> -->
        </div>
        <div class="flex flex-col lg:flex-row">
          <!-- <nuxt-link class="mr-10" to="/try" @click.native="close">Try</nuxt-link>
          <nuxt-link class="mr-10" to="/read" @click.native="close">Read</nuxt-link> -->
        </div>
      </div>
      <div class="flex lg:hidden">
        <Burger
          :open="open"
          @toggle="toggle"/>
      </div>


    </nav>
    <div id="mobile-nav" class="fixed lg:hidden" style="top:84px"  :class="open ? 'block' : 'hidden'">
      <div class="flex flex-col lg:flex-row">
        <div class="nav-li relative group" :class="showNav1 ? 'active' : ''">
          <div class="px-10 text-base flex items-center" to="/product-design" @click="toggleNav">
            <div class="title py-2">Projects</div>
            <ArrowUp class="ml-4 text-gray-900 w-7 h-7 inline-block transform" :class="showNav1 ? 'rotate-0 text-black-500' : 'rotate-180'" />
          </div>

          <ul class="flex flex-col lg:flex-row" :class="showNav1 ? 'block' : 'hidden'">
            <li class="mt-3 py-2"><nuxt-link class="ml-14 text-base text-black-900 whitespace-nowrap block" to="/product-design">Product Design</nuxt-link></li>
            <li class="py-2"><nuxt-link class="ml-14 text-base text-black-900 whitespace-nowrap block" to="/interface-design">Interface Design</nuxt-link></li>
            <li class="py-2"><nuxt-link class="ml-14 text-base text-black-900 whitespace-nowrap block" to="/logo">Logo</nuxt-link></li>
          </ul>
        </div>
        <nuxt-link class="ml-10 my-6 py-2 text-base" to="/about" @click.native="close">About</nuxt-link>
        <nuxt-link class="ml-10 my-6 py-2 text-base" to="/services" @click.native="close">Services</nuxt-link>
        <nuxt-link class="ml-10 my-6 py-2 text-base" to="/contact" @click.native="close">Contact</nuxt-link>
      </div>
      <div class="flex flex-col lg:flex-row">
        <nuxt-link class="ml-10 my-6 py-2" to="/try" @click.native="close">Try</nuxt-link>
        <nuxt-link class="ml-10 my-6 py-2" to="/read" @click.native="close">Read</nuxt-link>
      </div>
    </div>
  </div>



</template>
<script>
import  ArrowUp from '@/components/icon/ArrowUp'

  export default {
    components: {
      ArrowUp
    },
    data() {
      return {
        showNav1: false,
        open: false,
        // <li><nuxt-link class="ml-14 lg:ml-10 text-base whitespace-nowrap block" to="/product-design">Product Design</nuxt-link></li>
        //     <li><nuxt-link class="ml-14 lg:ml-10 text-base whitespace-nowrap block" to="/interface-design">Interface Design</nuxt-link></li>
        //     <li><nuxt-link class="ml-14 lg:ml-10 text-base whitespace-nowrap block" to="/logo">Logo</nuxt-link></li>
        nav: [
          {
            to: '/try', text: 'Try'
          }
        ]
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      },
      toggleNav () {
        this.showNav1 = !this.showNav1
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
  align-items: flex-start;
  background-color: rgb(77, 77, 77);
}

.nav-li.active .title {
  @apply text-black-500;
  /* color: grey; */
}

#mobile-nav {
  @apply bg-white w-full h-full;
}
.open a {
  /* display: block;
  text-align: center;
  width: 100%;
  padding: 20px 0; */
}
</style>
