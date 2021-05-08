<template>
  <div>
    <div class="relative sm:max-w-xl mx-auto">
      <nav>
        <button class="text-gray-500 w-10 h-10 relative focus:outline-none" @click="toggle">
          <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true"
              class="block absolute h-px w-5 bg-current transform transition duration-200 ease-in-out"
              :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
            <span aria-hidden="true"
              class="block absolute h-px w-5 bg-current transform transition duration-200 ease-in-out"
              :class="{'opacity-0': open } "></span>
            <span aria-hidden="true"
              class="block absolute h-px w-5 bg-current transform transition duration-200 ease-in-out"
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
