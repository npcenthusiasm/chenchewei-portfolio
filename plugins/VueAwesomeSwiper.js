import Vue from 'vue'

import SwiperClass, { Navigation, Pagination, /* add some modules if you need */ } from "swiper";
SwiperClass.use([Navigation, Pagination]);

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)