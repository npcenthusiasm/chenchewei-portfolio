<template>
  <div class="bg-shonwhite layout-container">
    <Navbar />
    <Nuxt keep-alive class="layout-main"/>
    <Footer class="layout-footer"/>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>
<style lang="css">

.layout-container {
  /* position: relative;
  min-height:100%; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
}
.layout-footer {
  margin-top: auto;
}
/* 
.layout-main {
  padding-bottom: 216px;
} */

/* .layout-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 216px;
} */


</style>