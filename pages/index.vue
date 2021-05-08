<template>
  <div>
    <Banner />
    <div class="container mx-auto">
      <!-- <h3 class="mx-7 lg:mx-0 flex flex-wrap">Product Design <span></span></h3> -->
      <div class="mx-7 lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
        <h3>Product Design</h3>
        <p class="w-full md:w-auto md:ml-4">for Daily Utilities</p>
      </div>
      
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-5">
        <Product v-for="i in 9" :key="i"
          title="apple"
          description="descriptiondescriptiondescription"
        />
      </div>
    </div>

    <hr class="mx-7 my-11 md:my-11 bg-customgray">


    <div class="container mx-auto">
      <div class="mx-7 lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
        <h3>Interface Design</h3>
        <p class="w-full md:w-auto md:ml-4">for Web & App</p>
      </div>
      
     
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1   md:grid-cols-3 gap-5">
        <Product v-for="i in 3" :key="i"
          title="apple"
          description="descriptiondescriptiondescription"
        />
      </div>
    </div>
    
    <hr class="mx-7 my-11 md:my-11 bg-customgray">

    <div class="container mx-auto">
      <div class="mx-7 lg:mx-0 flex items-center flex-wrap md:flex-nowrap">
        <h3>Logo Design</h3>
        <p class="w-full md:w-auto md:ml-4">for Web & App</p>
      </div>
      <div class="mx-7 lg:mx-0 grid grid-rows-1 grid-cols-1 md:grid-rows-1   md:grid-cols-3 gap-5">
        <Product v-for="i in 3" :key="i"
          title="apple"
          description="descriptiondescriptiondescription"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'my nuxt project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
      { property: 'og:title', content: '甜點電商' },
      { property: 'og:description', content: '六角學院的甜點電商' },
      { property: 'og:site_name', content: '甜點電商' },
      { property: 'og:locale', content: 'zh_TW' }
    ],
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

