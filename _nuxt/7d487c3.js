(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6],{700:function(t,n,e){"use strict";e.r(n);var r={props:{icon:{type:String,default:""},title:{type:String,default:""},desc:{type:String,default:""}}},l=e(16),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-full text-center"},[e("div",{staticClass:"\n      gradient\n      rounded-lg\n      flex\n      items-center\n      justify-center\n      border border-gray-200\n    "},[e("div",{staticClass:"\n        w-1/3\n        bg-transparent\n        h-20\n        flex\n        items-center\n        justify-center\n        icon-step\n      "},[e("span",{staticClass:"font-extrabold text-4xl",domProps:{innerHTML:t._s(t.icon)}})]),t._v(" "),e("div",{staticClass:"\n        w-2/3\n        bg-gray-200\n        h-24\n        flex flex-col\n        items-center\n        justify-center\n        px-1\n        rounded-r-lg\n        body-step\n      "},[e("h2",{staticClass:"font-bold text-sm text-primary"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"text-xs text-gray-600",domProps:{innerHTML:t._s(t.desc)}})])])])}),[],!1,null,null,null);n.default=component.exports},707:function(t,n,e){t.exports=e.p+"img/staking-on-defi.1748da1.gif"},717:function(t,n,e){"use strict";e.r(n);var r=e(16),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("transition",{attrs:{name:"fade"}},["defi"===t.$store.state.step?r("section",{staticClass:"bg-transparent border-b pb-10 px-4",attrs:{id:t.$t("pages.how_to_stake_cro.steps_id")}},[r("div",{staticClass:"container max-w-5xl mt-32 mx-auto m-8"},[r("h1",{staticClass:"\n          w-full\n          my-2\n          text-5xl\n          font-bold\n          leading-tight\n          text-center text-gray-200\n        "},[t._v("\n        "+t._s(t.$t("pages.how_to_stake_cro.title"))+"\n      ")]),t._v(" "),r("div",{staticClass:"w-full mb-4"},[r("div",{staticClass:"\n            flex flex-wrap\n            md:flex-no-wrap\n            space-y-2\n            md:space-y-0 md:space-x-5\n            content-between\n          "},t._l(t.$t("pages.how_to_stake_cro.steps.defi.steps"),(function(t){return r("cards-step",{key:t.title,attrs:{title:t.title,icon:t.icon,desc:t.desc}})})),1)]),t._v(" "),r("div",[r("img",{staticClass:"rounded-xl",attrs:{alt:"How to stake CRO",src:e(707)}})]),t._v(" "),r("div",{staticClass:"text-center w-full"},[r("a",{staticClass:"\n            rounded-full\n            flex flex-row\n            content-center\n            cursor-pointer\n            justify-center\n            w-1/5\n            p-1\n            mt-6\n            mb-32\n            bg-white\n            text-gray-800\n            font-bold\n            shadow-lg\n            focus:outline-none\n            focus:shadow-outline\n            transform\n            transition\n            hover:scale-105\n            duration-200\n            ease-in-out\n          ",on:{click:function(n){return n.preventDefault(),t.$store.commit("set",{name:"step",value:"first"})}}},[r("svg",{staticClass:"text-gray-800 stroke-2 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32",height:"32"}},[r("path",{staticClass:"heroicon-ui",attrs:{d:"M14.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L11.42 12l3.3 3.3z"}})]),t._v(" "),r("span",{staticClass:"text-xl"},[t._v("\n            "+t._s(t.$t("pages.how_to_stake_cro.back_button"))+"\n          ")])])])])]):t._e()])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CardsStep:e(700).default})}}]);