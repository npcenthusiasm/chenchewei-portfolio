<template>
  <div class="container mx-auto">
    <div class="mx-7 md:mx-0 h-52 md:h-96" style="background-color:#f5f5f5"></div>

    <div class="mx-7 py-4 md:py-12">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-4/12">
          <h3>Services</h3>
        </div>
        <div class="w-full md:w-8/12">
          <p v-for="s in services" :key="s.title"
            class="mb-3">{{ s.title }}</p>
        </div>
      </div>
    </div>

    <hr class="mx-7 my-11 md:mx-0 md:my-4 bg-customgray">

    <div class="mx-7 py-4 md:py-12">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-4/12">
          <h3>Process</h3>
        </div>
        <div class="w-full md:w-8/12">
          <div v-for="(item, i) in process" :key="item.id">
            <p class="font-medium"><span class="mr-4 md:mr-5">0{{ item.id }}</span>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
            <hr v-if="process.length - 1 !== i" class="my-11 md:mx-0 md:my-10 bg-customgray">
          </div>
        </div>
      </div>
    </div>

    <hr class="mx-7 my-11 md:mx-0 md:my-4 bg-customgray">

    <div class="mx-7 py-4 md:py-12">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-4/12 pr-0 md:pr-24">
          <h3>Friends</h3>
          <p class="">They are my friends in different fields, please feel free to contact them if there is any need.</p>
        </div>
        <div class="w-full md:w-8/12">
          <p v-for="f in friends" :key="f.name">{{ f.pos }} <span class="font-medium">{{ f.name }}</span></p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
const services = [
  {
    title: 'Product Design | 產品設計',
  },
  {
    title: 'Web Design | 網頁設計',
  },
  {
    title: 'App Design | App 設計',
  },
  {
    title: 'Logo | 標誌設計',
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
    name: 'totle Studio Shul'
  },
  {
    pos: 'Graphic Designer',
    name: 'totle Wei-Cheng Liao'
    },
  {
    pos: 'Graphic Designer',
    name: 'totle Chi-Fan Chung'
    },
  {
    pos: 'Illustrator',
    name: 'totle Chih-Yi Lin'
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
