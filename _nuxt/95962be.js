(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{289:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{}},computed:{items:function(){var t=this.$store.getters.getProductByCategory("try");return t.sort((function(a,b){return a.list_sort>b.list_sort?1:-1})),t}}},c=r(11),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container lgs:max-w-screen-lgs"},[t._m(0),t._v(" "),r("div",{staticClass:" mb-25 md:mb-34 lg:px-0 grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-2 md:gap-5 mb-10"},t._l(t.items,(function(p,i){return r("nuxt-link",{key:i,attrs:{to:{name:"try-id",params:{id:p.id}}}},[r("div",{staticClass:"product-hover bg-no-repeat bg-cover bg-center mb-2 md:mb-3",staticStyle:{"padding-bottom":"100%","background-color":"#f5f5f5"},style:"background-image:url("+p.img+")"}),t._v(" "),r("h3",{staticClass:"text-sm tracking-widest mb-5 md:mb-0"},[t._v(t._s(p.cn_title))])])})),1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:" mt-18 mb-13 md:mt-35 md:mb-14"},[r("div",{staticClass:"flex flex-col md:flex-row"},[r("div",{staticClass:"w-full md:w-1/2 text-base md:text-sm"},[r("p",{staticClass:"tracking-widest"},[t._v("試著以不同的方式將日常記錄下來，")]),t._v(" "),r("p",{staticClass:"tracking-widest"},[t._v("希望透過自由的嘗試維持對生活有感，")]),t._v(" "),r("p",{staticClass:"tracking-widest"},[t._v("也從嘗試的過程中加深印象。")])])])])}],!1,null,null,null);e.default=component.exports}}]);