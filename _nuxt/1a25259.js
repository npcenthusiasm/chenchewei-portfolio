(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{285:function(t,e,r){"use strict";r.r(e);var n=r(9),c=r(23),o=(r(45),r(182),{data:function(){var t;return{newProduct:(t={category:"",title:"",cn_desc:"",en_desc:"",simple_desc:"",date:"",img:""},Object(c.a)(t,"simple_desc",""),Object(c.a)(t,"position",0),Object(c.a)(t,"items",[{tag:"",workers:[]}]),t),products:[],tags:[],workers:[]}},mounted:function(){this.fetchTags(),this.fetchWorkers()},methods:{addMember:function(){this.newProduct.items.push({tag:"",workers:[]})},removeMember:function(t){this.newProduct.items.splice(t,1)},sendData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("res: ",res);case 1:case"end":return t.stop()}}),t)})))()},fetchSomething:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(123123),e.next=3,t.$axios.$get("http://localhost:8080/api/products");case 3:r=e.sent,t.products=r;case 5:case"end":return e.stop()}}),e)})))()},fetchTags:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(123123),e.next=3,t.$axios.$get("http://localhost:8080/api/tags");case 3:r=e.sent,console.log("tags: ",r),t.tags=r;case 6:case"end":return e.stop()}}),e)})))()},fetchWorkers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(123123),e.next=3,t.$axios.$get("http://localhost:8080/api/workers");case 3:r=e.sent,t.workers=r;case 5:case"end":return e.stop()}}),e)})))()}}}),l=r(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("button",{staticClass:"py-2 px-6 bg-red-400",on:{click:t.fetchSomething}},[t._v("fetchSomething")]),t._v(" "),r("button",{staticClass:"py-2 px-6 bg-red-400",on:{click:t.fetchTags}},[t._v("fetchTags")]),t._v(" "),r("br"),t._v(" "),t._e(),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},[r("div",{staticClass:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},[r("div",{staticClass:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},[r("table",{staticClass:"min-w-full divide-y divide-gray-200"},[t._m(0),t._v(" "),r("tbody",{staticClass:"bg-white divide-y divide-gray-200"},t._l(t.products,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},[t._v("\n                  "+t._s(e.id)+"\n                ")]),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap"},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap"},[t._v("\n                  "+t._s(e.description)+"\n                ")]),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap"},[r("div",[r("select",{attrs:{name:"",id:""}},t._l(t.tags,(function(e){return r("option",{key:e.ename,domProps:{value:e.ename}},[t._v(t._s(e.cname))])})),0),t._v(" "),r("select",{attrs:{name:"",id:""}},t._l(t.workers,(function(e){return r("option",{key:e.ename,domProps:{value:e.ename}},[t._v(t._s(e.cname))])})),0)])]),t._v(" "),t._m(1,!0),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},[t._v("\n                  "+t._s(e.category)+"\n                ")]),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},[r("div",{staticClass:"flex flex-wrap"},t._l(e.detail_imgs,(function(img,e){return r("div",{key:e},[t._v("\n                      "+t._s(img)+"\n                    ")])})),0)]),t._v(" "),t._m(2,!0)])})),0)])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"bg-gray-50"},[r("tr",[r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                  Id\n                ")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                  Title\n                ")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                  Desc\n                ")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                  Worker\n                ")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                  Status\n                ")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                  Category\n                ")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                  Detail_imgs\n                ")]),t._v(" "),r("th",{staticClass:"relative px-6 py-3",attrs:{scope:"col"}},[r("span",{staticClass:"sr-only"},[t._v("Edit")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"px-6 py-4 whitespace-nowrap"},[r("span",{staticClass:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},[t._v("\n                    Active\n                  ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},[r("a",{staticClass:"text-indigo-600 hover:text-indigo-900",attrs:{href:"#"}},[t._v("Edit")])])}],!1,null,null,null);e.default=component.exports}}]);