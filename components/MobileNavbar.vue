<template>
  <div id="mobile-nav" class="" v-show="show">
    <div class="container">
      <!-- style="top:84px" -->
      <div class="flex items-center" style="height: 84px">
        <nuxt-link class="text-lg text-gray-900 tracking-wide font-medium" to="/" style="letter-spacing: 0.8px;" @click.native="$emit('close')">
          <img loading="lazy" src="@/assets/img/logo.svg" alt="logo" style="height:22px">
        </nuxt-link>
      </div>
      <div class="flex flex-col lg:flex-row mt-14">
        <div class="nav-li relative group mb-14" :class="showNav1 ? 'active' : ''">
          <div class="text-xl flex items-center" to="/product-design" @click="toggleNav">
            <div class="title">Projects</div>
            <ArrowUp class="ml-3 text-gray-900 w-7 h-7 inline-block transform" :class="showNav1 ? 'rotate-0 text-black-500' : 'rotate-180'" />
          </div>

          <ul class="mt-10 flex flex-col lg:flex-row" :class="showNav1 ? 'block' : 'hidden'">
            <li class="mb-8">
              <nuxt-link class="ml-8 text-lg text-black-900 whitespace-nowrap block" to="/projects/product-design" @click.native="close">Product Design</nuxt-link>
            </li>
            <li class="mb-8">
              <nuxt-link class="ml-8 text-lg text-black-900 whitespace-nowrap block" to="/projects/interface-design" @click.native="close">Interface Design</nuxt-link></li>
            <li class="mb-8">
              <nuxt-link class="ml-8 text-lg text-black-900 whitespace-nowrap block" to="/projects/logo-design" @click.native="close">Logo</nuxt-link>
            </li>
          </ul>
        </div>
        <nuxt-link class="mb-14 text-xl" to="/about" @click.native="close">About</nuxt-link>
        <nuxt-link class="mb-14 text-xl" to="/services" @click.native="close">Services</nuxt-link>
        <nuxt-link class="mb-14 text-xl" to="/contact" @click.native="close">Contact</nuxt-link>
      </div>
      <div class="flex flex-col lg:flex-row">
        <nuxt-link class="mb-14 text-xl" to="/try" @click.native="close">Try</nuxt-link>
        <nuxt-link class="mb-14 text-xl" to="/read" @click.native="close">Read</nuxt-link>
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
    props: {
      show: {
        type: Boolean
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
        this.$emit('close')
        this.open = false
        this.showNav1 = false
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
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  position: fixed;
  background-color: #fff;
}

.nav-link {
  /* border: 1px solid red; */
  position: relative;
  z-index: 2;
}
.nav-child {
  position: absolute;
  /* border: 1px solid red; */
  opacity: 0;
  width: 520px;
  padding-top: 5px;
  padding-bottom: 20px;
  font-size:16px;
  transition-property: opacity transform height;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(.215,.61,.355,1);
  transform: translateY(-20px);
}

.nav-links-child {
  width: 100%;
}

.nav-link:hover {
  color: rgba(26, 26, 26, 0.5);
}

.nav-link:hover >.nav-child {
  display: block;
  transform: translateY(0px);
  opacity: 1;
  z-index: 1;
}

.nav-link:hover >.nav-child .nav-link-child {
  display: block;
  color: rgba(0, 0, 0, 0.9);
}

.nav-link-child {
  padding: 4px 0;
}

.nav-links-child {
  float: left;
}

.nav-link-child {
  display: none;
  float: left;
  position: relative;
  z-index: 0;
}
</style>
