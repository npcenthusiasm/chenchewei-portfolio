<template>
  <div>
    <div class="relative sm:max-w-xl mx-auto">
      <nav class="flex items-center">
        <button class="text-gray-500 w-6 h-6 relative focus:outline-none" @click="toggle">
          <div class="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <!-- :style="open ? `top: initial` : `top: -2px`" -->
            <span aria-hidden="true"
              class="block absolute h-px w-6 bg-current transform transition duration-200 ease-in-out"
              :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
            <span aria-hidden="true"
              class="block absolute h-px w-6 bg-current transform transition duration-200 ease-in-out"
              :class="{'opacity-0': open } "></span>
              <!-- :style="open ? `bottom: initial` : `bottom: -2px`" -->
            <span aria-hidden="true"
              class="block absolute h-px w-6 bg-current transform transition duration-200 ease-in-out"
              :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
          </div>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      open: {
        type: Boolean
      }
    },
    methods: {
      toggle() {
        this.$emit('toggle')
      }
    }
  }

</script>

<style>

</style>
