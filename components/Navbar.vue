<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- <div
    :class="open ? 'fixed w-full h-full top-0 z-10' : ''"
    :style="open ? 'background-color:#ffffff' : 'background-color:#fcfcfc'"> -->
    <div>
  <!-- <div class="" :class="open ? 'fixed bg-white top-0 left-0 right-0' : ''" style="background-color:#fcfcfc"> -->

    <div class="hidden lg:block desktop-nav" :class="{'hide': !showNav}">
      <div class="container">
        <!-- style="max-width: 1440px" -->
        
        <nav class="text-base w-full h-21 flex justify-between items-center">
          <div class="w-4/12">
            <nuxt-link class="text-lg text-gray-900 tracking-wide font-medium" to="/" style="letter-spacing: 0.8px;" @click.native="close">
            <!-- CHEWEI -->
              <img loading="lazy" src="@/assets/img/logo.svg" alt="logo" style="height:22px">
            </nuxt-link>
          </div>
          <div class="w-8/12 flex">
            <div class="w-1/2 flex justify-start">
              <ul class="flex">
                <li class="nav-link">
                  <nuxt-link class="text-base py-4 mr-19" to="/projects/product-design" @click.native="close">Projects</nuxt-link>
                  <div class="nav-child">
                    <ul class="nav-links-child">
                      <li class="nav-link-child">
                        <nuxt-link class="text-sm mr-10 whitespace-nowrap" to="/projects/product-design">Product Design</nuxt-link>
                      </li>
                      <li class="nav-link-child">
                        <nuxt-link class="text-sm mr-10 whitespace-nowrap" to="/projects/interface-design">Interface Design</nuxt-link>
                      </li>
                      <li class="nav-link-child">
                        <nuxt-link class="text-sm mr-10 whitespace-nowrap" to="/projects/logo-design">Logo Design</nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <!-- <div class="fixed max-h-0 h-full  top-16 w-full left-0 right-0 transition-all duration-200 opacity-0 bg-shonwhite
                    group-hover:opacity-100 group-hover:max-h-20"></div> -->
                </li>
                <li class="nav-link">
                  <nuxt-link class="text-base py-4 mr-19" to="/about" @click.native="close">About</nuxt-link>
                </li>
                <li class="nav-link">
                  <nuxt-link class="text-base py-4 mr-19" to="/services" @click.native="close">Services</nuxt-link>
                </li>
                <li class="nav-link">
                  <nuxt-link class="text-base py-4 mr-19" to="/contact" @click.native="close">Contact</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="w-1/2 flex justify-end">
              <ul class="flex">
                <li class="nav-link">
                  <nuxt-link class="text-base py-4 mr-19" to="/try" @click.native="close">Try</nuxt-link>
                </li>
                <li class="nav-link">
                  <nuxt-link class="text-base py-4" to="/read" @click.native="close">Read</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
<!-- 
    <div class="flex lg:hidden mobile-nav" :class="{'open-mob-menu': open}">
      <div class="container">
        <div class="flex justify-between lg:hidden">
          <nuxt-link class="text-lg text-gray-900 tracking-wide font-medium" to="/" style="letter-spacing: 0.8px;" @click.native="close">
            <img loading="lazy" src="@/assets/img/logo.svg" alt="logo" style="height:22px">
          </nuxt-link>
          <div></div>
        </div>
      </div>
    </div> -->

    <div class="flex lg:hidden mobile-nav-burger">
      <Burger
        :open="open"
        @toggle="toggle"
        @close="close"
      />
    </div>

    <MobileNavbar :show="open" @close="toggle"/>
  </div>
</template>

<script>
import  ArrowUp from '@/components/icon/ArrowUp'
import throttle from 'lodash.throttle'

  export default {
    components: {
      ArrowUp
    },
    data() {
      return {
        open: false,
        showNav1: false,
        showNav: true,
        scrollY: 0,
        scrollDeriction: 'down',
        scrollFn: function () {}
      }
    },
    beforeMount () {
      this.scrollFn = throttle(this.handleBodyScroll, 150)
      window.addEventListener('scroll', this.scrollFn)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.scrollFn)
    },
    methods: {
      handleBodyScroll (e) {

        if (this.scrollY - window.scrollY < 0) {
          this.scrollDeriction = 'down'
          // 往上捲
        } else if (this.scrollY - window.scrollY > 0) {
          this.scrollDeriction = 'up'
        }

        this.scrollY = window.scrollY

        if(this.scrollDeriction === 'up') {
          this.showNav = true
        } else {
          // down
          if (this.scrollY > 100) {
            this.showNav =  false
          } else {
            this.showNav = true
          }
        }


      },
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

.desktop-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color:#fcfcfc;
  transition: transform .3s ease-in-out;
  transform: translateY(0);
  z-index: 1000;
}

.desktop-nav.hide {
  transform: translateY(-100%);
}


.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 84px;
  width: 100%;
  z-index: 19999;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background-color:transparent;

}

.mobile-nav.open-mob-menu {
  background-color:transparent;
}

.mobile-nav-burger {
  position: fixed;
  z-index: 19999;
  top: 30px;
  right: 28px;
}




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

.nav-link:hover >.nav-child .nav-link-child:hover {
  color: rgba(26, 26, 26, 0.5);
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
