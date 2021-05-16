<template>
  <div class="container mx-auto">

    <div class="mx-7 py-4 mb-4 md:py-12">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2">
          <p>2021 年在一場講座中，聽到日本設計師安次富 隆先生談及他希望未來沒有一個行業叫設計，因為每個人本身就有設計的能力，他稱之為設計的民主化。我們每天遇到問題，並想辦法改善，這是他認為的設計的源頭。</p>
        </div>
      </div>
    </div>

    <div class="mx-7 lg:px-0 grid grid-rows-2 grid-cols-2 md:grid-rows-2 md:grid-cols-4 gap-5 mb-10">
      <nuxt-link v-for="(p, i) in products" :key="i"
        :to="{ name: 'try-id', params: { id: p.ename }}">
        <div class="bg-no-repeat bg-cover bg-center" style="padding-bottom:100%; background-color:#f5f5f5" :style="`background-image:url(${p.url})`"></div>
        <h3 class="text-base md:text-sm">{{ p.title }}</h3>
      </nuxt-link>
    </div>

  </div>
</template>

<script>
const products = [
  {
    url: '',
    ename: 'light',
    title: '長春市場的光'
  },
  {
    url: '',
    ename: 'light2',
    title: '長春市場'
  },
  {
    url: '',
    ename: 'light3',
    title: '市場的光'
  },
  {
    url: '',
    ename: 'light4',
    title: '長春市場的光'
  }
]
export default {
  data () {
    return {
      products
    }
  }
}
</script>

<style>

</style>