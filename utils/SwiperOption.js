class SwiperOption {
  constructor () {
    this.slidesPerView = 2
    this.spaceBetween = 30
    this.slidesPerGroup = 2
    this.loop = true
    this.loopFillGroupWithBlank = true
    this.pagination = {
      el: '.swiper-pagination',
      clickable: true
    },
    this.navigation = {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    this.breakpoints = {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      },
    }
  }
}

export default SwiperOption