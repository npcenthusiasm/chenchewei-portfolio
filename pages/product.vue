<template>
  <div>

    porduct
  </div>  
</template>

<script>


export default {
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData ({ $axios }) {
      console.log($axios)
    }
  }
}
</script>

<style>

</style>