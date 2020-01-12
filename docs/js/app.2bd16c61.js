(function(t){function e(e){for(var n,a,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/mauritius-fuel-prices/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"212c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex min-h-screen flex-col"},[r("main-menu"),r("router-view",{staticClass:"container mx-auto flex-grow"}),r("footer-section")],1)},s=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"},[r("div"),r("ul",{staticClass:"flex mr-3"},[r("li",[r("a",{attrs:{href:"https://mrsunshyne.gitlab.io",target:"_blank"}},[t._v("View other projects →")])])])])}],c=(r("a7c8"),r("2877")),l={},u=Object(c["a"])(l,a,o,!1,null,"04e1d5f0",null),p=u.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto text-sm uppercase tracking-wide py-10 flex justify-center md:justify-between"},[r("div"),r("ul",{staticClass:"menu"},[r("li",[r("a",{staticClass:"underline",attrs:{target:"_blank",href:"https://github.com/MrSunshyne/mauritius-fuel-prices"}},[t._v("Contribute on GitHub")])])])])}],h={},m=Object(c["a"])(h,f,d,!1,null,null,null),v=m.exports,b={components:{MainMenu:p,FooterSection:v}},x=b,g=(r("5c0b"),Object(c["a"])(x,i,s,!1,null,null,null)),_=g.exports,y=r("8c4f"),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("MauritiusFuelPrices")],1)},w=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container page-fuel"},[r("div",{staticClass:"top-section md:flex justify-between"},[r("div",{staticClass:"left"},[r("h1",{staticClass:"text-3xl md:text-5xl text-center md:text-left font-black pt-10"},[t._v("Mauritius Fuel Prices")]),r("p",{staticClass:"text-xl text-center md:text-left"},[t._v("Progression of fuel prices in Mauritius (2002 - Present)")]),t.latestPrices?r("div",{staticClass:"text-sm text-center md:text-left font-normal pb-4"},[t._v("Last Updated : "+t._s(new Date(t.latestPrices.petrol[0]).toDateString()))]):t._e()]),t.latestPrices?r("CurrentPrice",{attrs:{prices:t.latestPrices}}):t._e()],1),t.loading?r("div",[t._v("Loading data...")]):r("div",{staticClass:"chart-container flex flex-col text-blue-500"},[r("highcharts",{attrs:{updateArgs:[!0,!1],options:t.chartOptions}})],1),t._m(0),t._m(1)])},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Source : "),r("a",{staticClass:"underline",attrs:{target:"_blank",href:"https://www.stcmu.com/ppm/retail-prices"}},[t._v("STC")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Cache : "),r("a",{staticClass:"underline",attrs:{target:"_blank",href:"https://docs.google.com/spreadsheets/d/19xdGb9OyWLV9zpQKqT66EGG-1fGoc5JIvZXdVRj0C1w/edit?usp=sharing"}},[t._v("Google Sheets API")])])}],O=(r("4de4"),r("4160"),r("caad"),r("d81d"),r("b64b"),r("d3b7"),r("e6cf"),r("ac1f"),r("2532"),r("5319"),r("159b"),r("4452")),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"right text-center md:text-right"},[r("div",{staticClass:"uppercase md:text-md font-black pt-5 pb-2 text-gray-600"},[t._v("Current Price")]),r("div",{staticClass:"flex justify-center pb-10"},[r("div",{staticClass:"px-4 mr-2 py-2 border diesel-border"},[r("div",{staticClass:"uppercase text-md text-left font-bold tracking-widest"},[t._v("Diesel")]),r("div",[r("span",{staticClass:"text-3xl font-bold"},[t._v(t._s(t.prices.diesel[1]))]),r("span",{staticClass:"text-xl"},[t._v("Rs/L")])])]),r("div",{staticClass:"px-4 py-2 border petrol-border"},[r("div",{staticClass:"uppercase text-md text-left font-bold tracking-widest"},[t._v("Petrol")]),r("div",[r("span",{staticClass:"text-3xl font-bold"},[t._v(t._s(t.prices.petrol[1]))]),r("span",{staticClass:"text-xl"},[t._v("Rs/L")])])])])])},S=[],k={props:["prices"]},M=k,$=(r("77b3"),Object(c["a"])(M,E,S,!1,null,"49762c15",null)),D=$.exports,G={components:{highcharts:O["Chart"],CurrentPrice:D},data:function(){return{loading:!0,chartOptions:{series:[{data:[],name:"Petrol",lineWidth:3,color:"var(--petrol)"},{data:[],name:"Diesel",lineWidth:3,color:"var(--diesel)"}],labels:{style:{color:"currentColor"}},caption:{style:{color:"red"}},setOptions:{},chart:{backgroundColor:"transparent"},title:{text:"",style:{color:"currentColor",fontSize:"32px"}},xAxis:{type:"datetime",tickPixelInterval:100,plotLines:[{width:5,color:"#808080"}]},yAxis:{min:0,max:100,title:{text:"Price Rs/Litre"}}},latestPrices:null,URL:"https://spreadsheets.google.com/feeds/list/19xdGb9OyWLV9zpQKqT66EGG-1fGoc5JIvZXdVRj0C1w/1/public/values?alt=json"}},methods:{extractData:function(t){return t.map(this.extractObject)},extractObject:function(t){var e=Object.keys(t).filter((function(t){return t.includes("gsx$")})),r={};return e.forEach((function(e){var n=e.replace("gsx$","");r[n]=t[e]["$t"]})),r},fetchDataFromGoogleSheet:function(){var t=this;fetch(this.URL).then((function(t){return t.json()})).then((function(e){var r=e.feed;return t.extractData(r.entry)})).then((function(e){var r=e.map((function(t){return[new Date(t["_cn6ca"]).getTime()+144e5,parseInt(t["_cokwr"])]})),n=e.map((function(t){return[new Date(t["_cn6ca"]).getTime()+144e5,parseInt(t["_cpzh4"])]}));t.latestPrices={petrol:r[0],diesel:n[0]},t.chartOptions.series[0].data=r,t.chartOptions.series[1].data=n,t.loading=!1})).catch((function(t){throw new Error("Error should be caught by Vue global error handler."+t)}))}},mounted:function(){this.fetchDataFromGoogleSheet()},head:function(){return{title:"Mauritius Fuel Price",meta:[{hid:"description",name:"description",content:"Progression of fuel prices in Mauritius (2002 - Present)"},{hid:"og:type",property:"og:type",content:"page"},{hid:"og:title",property:"og:title",content:"Mauritius Fuel Price"},{hid:"og:image",property:"og:image",content:Object({NODE_ENV:"production",BASE_URL:"/mauritius-fuel-prices/"}).siteUrl+"/data/og-image/mauritius-fuel-prices.jpg"},{hid:"og:description",property:"og:description",content:"Progression of fuel prices in Mauritius (2002 - Present)"},{hid:"og:url",property:"og:url",content:this.replaceWithAbsolute(Object({NODE_ENV:"production",BASE_URL:"/mauritius-fuel-prices/"}).siteUrl+this.$route.path)}]}}},L=G,R=(r("a3b8"),Object(c["a"])(L,j,P,!1,null,null,null)),F=R.exports,T={name:"home",components:{MauritiusFuelPrices:F}},V=T,A=Object(c["a"])(V,C,w,!1,null,null,null),U=A.exports;n["a"].use(y["a"]);var I=[{path:"/",name:"home",component:U}],W=new y["a"]({mode:"history",base:"/mauritius-fuel-prices/",routes:I}),z=W,J=r("2f62");n["a"].use(J["a"]);var N=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}});r("ba8c");n["a"].config.productionTip=!1,new n["a"]({router:z,store:N,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),i=r.n(n);i.a},"77b3":function(t,e,r){"use strict";var n=r("7d26"),i=r.n(n);i.a},"7d26":function(t,e,r){},"95f8":function(t,e,r){},"9c0c":function(t,e,r){},a3b8:function(t,e,r){"use strict";var n=r("212c"),i=r.n(n);i.a},a7c8:function(t,e,r){"use strict";var n=r("95f8"),i=r.n(n);i.a},ba8c:function(t,e,r){}});
//# sourceMappingURL=app.2bd16c61.js.map