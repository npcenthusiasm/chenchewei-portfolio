<template>
  <div class="container mx-auto max-w-screen-lgs  mt-11">
    <div class="mx-7 mb-8 md:mx-0 md:mb-12 h-52 md:h-96 bg-img banner-cs" style="background-color:#f5f5f5"></div>

    <div class="mx-7 mb-15 md:mb-12 mt-0 md:mx-0">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-4/12">
          <img class="hidden md:block w-20 h-20" src="https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/about%2Fabout_self_blue.png?alt=media&token=76e589c7-473e-415c-b9d7-4e7c7ae33cd2" alt="">
        </div>
        <div class="w-full md:w-8/12">
          <div class="">
            <p class="tracking-widest">陳哲瑋，台灣設計師。</p>
            <p class="mb-5 tracking-widest">1989 年出生於高雄，大學畢業於長庚工業設計系，之後在台北從事設計工作。</p>
            <p class="mb-5 md:mb-5 tracking-widest">工作前三年從事生活用品的設計，經歷了筆、衛浴廚具、腳踏車的產業。接著踏入介面設計的領域，參與了餐飲訂餐、嬰幼兒成長紀錄、房產趨勢分析服務等專案。之後回到生活用品的設計，也參與介面設計的專案。</p>
          </div>
          <p>Chewei Chen, a product designer based in Taiwan. Born in 1989 in Kaohsiung, later on kicked off his designer life based in Taipei after finishing the study of industrial design in Chang Gung University. The design journey started with designing daily necessities and tools, including pen, household utilities, tools and bicycle. Few years in, he extended the profession into interface design, including user’s platforms such as online food order system, baby nursing log, and real estate analysis report, etc. He is now focusing on designing both daily necessities and interface design.</p>
        </div>
      </div>
    </div>

    <hr class="mx-7 mb-15 md:mx-0 md:mb-12 bg-customgray">

    <div class="mx-7 mb-15 md:mx-0 md:mb-12">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-4/12">
        <h3 class="text-2xl mb-10 md:text-lg font-normal">Product Design</h3>

        </div>
        <div class="w-full md:w-8/12">
          <div class="hidden md:block md:mb-5">
            <p class="tracking-widest">喜歡透過黏土、紙張、保麗龍等方式製作草模，從實際量體感受並思考其使用性、觸感、比例，透過手去思考如何改善，而不僅僅是用眼睛判斷物品的好壞。希望產品被使用時，因為好用，而有了比圖片上更美的感受。</p>
          </div>
          <!-- <div class="block mb-8 md:hidden">
            <p class="tracking-widest">喜歡透過黏土、紙張、保麗龍等方式製作草模，從實際量體感受並思考其使用性、觸感、比例，透過手去思考如何改善，而不僅僅是用眼睛判斷物品的好壞。希望產品實際被使用時，因為好用，而有了比圖片上更美的感受。</p>
          </div> -->
          <p>Every design will be made into real-size model with clay, paper or styrofoam to craftly verify that design details are all catering to practicality. A fine product design is more than just aesthetics, it should be easy to apply on daily basis and fit into our lives. </p>
        </div>
      </div>
    </div>

    <hr class="mx-7 mb-15 md:mx-0 md:mb-12 bg-customgray">

    <div class="mx-7 mb-12 md:mx-0">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-4/12">
          <h3 class="text-2xl mb-10 md:text-lg font-normal">Interface Design</h3>

        </div>
        <div class="w-full mb-8 md:w-8/12 md:mb-4">
          <p class="tracking-widest">相較於畫面的設計，更喜歡參與內容的規劃，以及架構流程的安排，例如課程的內容、遊戲互動的方式、產品的分類、產品的層級關係。希望先滿足功能的使用面，再美化畫面。</p>
          <div class="h-4"></div>
          <p>User experience is the priority. Instead of solely emphasize on the external design, we believe that only when the designer understands the purpose and meaning behind the product completely, that the design can be truly satisfied to the end users.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.bg-img {
  @apply bg-no-repeat bg-cover bg-center;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/about%2Fabout%20-%20mobile.jpeg?alt=media&token=3e9a992b-91aa-4ffd-871c-ee2569e2d936);
}

@screen md {
  .bg-img {
    background-image: url(https://firebasestorage.googleapis.com/v0/b/profile-a4697.appspot.com/o/about%2Fabout%20-%20web.jpeg?alt=media&token=fad6c175-e206-46b6-a445-0863ede05dbc);
  }
}


.banner-cs {
  height: 220px;
}
@media (min-width: 768px) {
  .banner-cs {
    height: 430px;
  }
}
</style>