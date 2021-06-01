<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="" :class="open ? 'fixed bg-white top-0 left-0 right-0' : ''" style="background-color:#fcfcfc">
    <div class="container mx-auto px-7 lg:px-0">
       <!-- mb-12 -->
      
      <nav class="text-base h-21 flex justify-between items-center">
        <div class="w-4/12">
          <nuxt-link class="text-lg text-gray-900 tracking-wide font-medium" to="/" @click.native="close">CHEWEI</nuxt-link>
        </div>
        <div class="hidden lg:flex">
          <ul class="flex">
            <li class="nav-link">
              <!-- <div class="py-4 mr-19">Projects</div> -->
              <nuxt-link class="py-4 mr-19" to="/projects/product-design" @click.native="close">Projects</nuxt-link>

              <!-- <div class="mt-4 border-2 pt-0 flex absolute z-0 opacity-0 transform -translate-y-6  h-0 bg-grey-200
                group-hover:h-20 group-hover:opacity-100 transition duration-200
                group-hover:pt-8
                group-hover:z-10
              ">
              </div> -->
              <div class="nav-child">
                <ul class="nav-links-child">
                  <li class="nav-link-child"><nuxt-link class="py-4 mr-19 whitespace-nowrap" to="/projects/product-design">Product Design</nuxt-link></li>
                  <li class="nav-link-child"><nuxt-link class="py-4 mr-19 whitespace-nowrap" to="/projects/interface-design">Interface Design</nuxt-link></li>
                  <li class="nav-link-child"><nuxt-link class="py-4 mr-19 whitespace-nowrap" to="/projects/logo-design">Logo Design</nuxt-link></li>
                </ul>
              </div>
              <!-- <div class="fixed max-h-0 h-full  top-16 w-full left-0 right-0 transition-all duration-200 opacity-0 bg-shonwhite
                group-hover:opacity-100 group-hover:max-h-20"></div> -->
            </li>
            <li class="nav-link">
              <nuxt-link class="py-4 mr-19" to="/about" @click.native="close">About</nuxt-link>
            </li>
            <li>
              <nuxt-link class="py-4 mr-19" to="/services" @click.native="close">Services</nuxt-link>
            </li>
            <li>
              <nuxt-link class="py-4 mr-19" to="/contact" @click.native="close">Contact</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="hidden lg:flex">
          <nuxt-link class="mr-19" to="/try" @click.native="close">Try</nuxt-link>
          <nuxt-link to="/read" @click.native="close">Read</nuxt-link>
        </div>
        <div class="flex lg:hidden">
          <Burger
            :open="open"
            @toggle="toggle"/>
        </div>
      </nav>
    </div>

    <div id="mobile-nav" class="fixed lg:hidden" style="top:84px"  :class="open ? 'block' : 'hidden'">
      
      <div class="flex flex-col lg:flex-row">
        <div class="nav-li relative group mb-17" :class="showNav1 ? 'active' : ''">
          <div class="px-10 text-2xl flex items-center" to="/product-design" @click="toggleNav">
            <div class="title py-2">Projects</div>
            <ArrowUp class="ml-4 text-gray-900 w-7 h-7 inline-block transform" :class="showNav1 ? 'rotate-0 text-black-500' : 'rotate-180'" />
          </div>

          <ul class="flex flex-col lg:flex-row" :class="showNav1 ? 'block' : 'hidden'">
            <li class="mt-3 py-2">
              <nuxt-link class="ml-14 text-lg text-black-900 whitespace-nowrap block" to="/projects/product-design" @click.native="close">Product Design</nuxt-link>
            </li>
            <li class="py-2"><nuxt-link class="ml-14 text-lg text-black-900 whitespace-nowrap block" to="/projects/interface-design" @click.native="close">Interface Design</nuxt-link></li>
            <li class="py-2"><nuxt-link class="ml-14 text-lg text-black-900 whitespace-nowrap block" to="/projects/logo" @click.native="close">Logo</nuxt-link></li>
          </ul>
        </div>
        <nuxt-link class="ml-10 mb-17 py-2 text-2xl" to="/about" @click.native="close">About</nuxt-link>
        <nuxt-link class="ml-10 mb-17 py-2 text-2xl" to="/services" @click.native="close">Services</nuxt-link>
        <nuxt-link class="ml-10 mb-17 py-2 text-2xl" to="/contact" @click.native="close">Contact</nuxt-link>
      </div>
      <div class="flex flex-col lg:flex-row">
        <nuxt-link class="ml-10 mb-17 py-2 text-2xl" to="/try" @click.native="close">Try</nuxt-link>
        <nuxt-link class="ml-10 mb-17 py-2 text-2xl" to="/read" @click.native="close">Read</nuxt-link>
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
        open: false,
        showNav1: false,
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
  align-items: center;
  background-color: aqua;
}


.nav-li.active .title {
  @apply text-black-500;
  /* color: grey; */
}

#mobile-nav {
  @apply bg-white w-full h-full left-0 right-0 container mx-auto;
}

/* .open a {
  display: block;
  text-align: center;
  width: 100%;
  padding: 20px 0;
} */

.nav-link {
  position: relative;
  z-index: 1;
}
.nav-child {
  position: absolute;
  /* top: 20px; */
  /* border: 2px solid black; */
  /* z-index: 2; */
  opacity: 0;
  padding-top: 5px;
  /* pointer-events: none; */
  transition-property: opacity transform height;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(.215,.61,.355,1);
  transform: translateY(-20px);
  width: 400px;
  /* height: 100%; */
}

.nav-links-child {
  width: 100%;
}

li a {
  /* height: 60px; */
}
.nav-link:hover >.nav-child {
  /* top: 60px; */
  display: block;
  transform: translateY(0px);
  opacity: 1;
  /* z-index: 2; */
}

.nav-links-child {
  float: left;
  /* margin: 0 0 0 13px; */
  width: 530px;
}

.nav-link-child {
  float: left;
  position: relative;
  z-index: 1;
}
</style>
