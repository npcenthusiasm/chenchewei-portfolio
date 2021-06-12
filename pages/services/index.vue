<template>
  <div class="container mx-auto max-w-screen-lgs">
    <div class="mx-7 mb-15 md:mb-12 md:mx-0 h-52 md:h-96 flex flex-col md:flex-row" style="background-color:#f5f5f5">
      <div class="w-full md:w-4/12">
        <div class="hidden md:flex w-full h-full justify-end items-center pr-3" style="background-color:#dceff7">
          <p class="bg-text-vertical text-white text-sm">Every teeny-tiny drop builds up the connection.</p>
        </div>
      </div>
      <div class="w-full md:w-8/12">
        <div class="h-full flex justify-center items-center">
          <video
            class="md:rounded-2xl w-80 h-55"
            playsinline
            autoplay
            muted
            src="https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/about%2Fservice%20-%20mobile%2002.mp4?alt=media&token=2bb244d1-1736-4fb7-8a9c-845f6df05306"></video>
          </div>
      </div>
    </div>

    <div class="mx-7 mb-15 md:mb-12 lg:mx-0">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-4/12">
          <h3 class="text-2xl mb-10 md:text-lg font-normal">Services</h3>
        </div>
        <div class="w-full md:w-8/12 text-sm">
          <p v-for="s in services" :key="s.title"
            class="mb-3 last:mb-0">
            <span>{{ s.en_title }}</span>
            <span class="mx-2">|</span>
            <span class="tracking-widest">{{ s.cn_title }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- <hr class="mx-7 my-11 md:mx-0 md:my-4 bg-customgray"> -->

    <!-- <div class="mx-7 py-4 md:py-12">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-4/12">
          <h3 class="text-2xl mb-10 md:text-lg font-normal">Process</h3>
        </div>
        <div class="w-full md:w-8/12">
          <div v-for="(item, i) in process" :key="item.id">
            <p class="font-medium"><span class="mr-4 md:mr-5">0{{ item.id }}</span>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
            <hr v-if="process.length - 1 !== i" class="my-11 md:mx-0 md:my-10 bg-customgray">
          </div>
        </div>
      </div>
    </div> -->

    <hr class="mx-7 mb-15 md:mb-12 lg:mx-0 bg-customgray">

    <div class="mx-7 mb-15 md:mb-11 lg:mx-0">
      <div class="flex flex-col md:flex-row">
        <div class="w-full mb-11 md:mb-0 md:w-4/12 pr-0 md:pr-22">
          <h3 class="text-2xl mb-3 md:text-lg font-normal">Friends</h3>
          <p class="text-black-700 text-base md:text-sm">They are some of my dearest friends from different fields. Feel free to make contact with them and find out more about their expertises.</p>
        </div>
        <div class="w-full md:w-8/12 text-sm">
          <div v-for="f in friends" :key="f.name" class="mb-5 md:mb-4 last:mb-0">
            <span class="text-black-700 mr-2">{{ f.pos }}</span>
            <a :href="f.link" target="_blank" class="font-medium">{{ f.name }}</a>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
const services = [
  {
    en_title: 'Product Design',
    cn_title: '產品設計'
  },
  {
    en_title: 'Web Design',
    cn_title: '網頁設計'
  },
  {
    en_title: 'App Design',
    cn_title: 'App 設計'
  },
  {
    en_title: 'Logo',
    cn_title: '標誌設計'
  }
]

const process = [
  {
    id: 1,
    title: 'Demands | 需求',
    desc: '相較於畫面的設計，更喜歡參與內容的規劃，以及架構流程的安排，'
  },
  {
    id: 2,
    title: 'Evalue | 估價',
    desc: '相較於畫面的設計，更喜歡參與內容的規劃，以及架構流程的安排，'
  },
  {
    id: 3,
    title: 'Research | 資料分析',
    desc: '相較於畫面的設計，更喜歡參與內容的規劃，以及架構流程的安排，'
  },
  {
    id: 4,
    title: 'Design | 估價',
    desc: '相較於畫面的設計，更喜歡參與內容的規劃，以及架構流程的安排，'
  },
  {
    id: 5,
    title: 'Final | 結案',
    desc: '相較於畫面的設計，更喜歡參與內容的規劃，以及架構流程的安排，'
  }
]

const friends = [
  {
    pos: 'Atelier',
    name: 'Studio Shul',
    link: 'https://studioshul.com/'
  },
  {
    pos: 'Graphic Designer',
    name: 'Wei-Cheng Liao',
    link: 'https://www.liaoweicheng.com/'
  },
  {
    pos: 'Graphic Designer',
    name: 'Chi-Fan Chung',
    link: 'https://chungchifan.com'
    },
  {
    pos: 'Illustrator',
    name: 'Chih-Yi Lin',
    link: 'https://chihyicc.co'
  }
]

export default {
  data () {
    return {
      services,
      process,
      friends
    }
  }
}
</script>


<style lang="css" scoped>
.bg-text-vertical {
  text-orientation: mixed;
  writing-mode: tb-rl;
}
</style>