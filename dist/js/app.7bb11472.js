(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"097e":function(t,e){!function(t){var e=t.document,n=e.documentElement,a=720,s=a/100,i="orientationchange"in t?"orientationchange":"resize",r=function(){var t=n.clientWidth||320;t>720&&(t=720),n.style.fontSize=t/s+"px"};e.addEventListener&&(t.addEventListener(i,r,!1),e.addEventListener("DOMContentLoaded",r,!1))}(window)},"0a46":function(t,e,n){"use strict";n("bdc9")},"42ba":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:"/"}}),n("router-view")],1)},i=[],r=n("2877"),o={},l=Object(r["a"])(o,s,i,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-sticky",{attrs:{"offset-top":0}},[n("div",{staticClass:"header"},[n("input",{staticClass:"search",attrs:{type:"text",placeholder:"请输入商家或商品名称"}})])]),n("category"),n("div",{staticClass:"title"},[t._v("附近的商家")]),n("list")],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("ul",{staticClass:"cate-box"},t._l(t.cateList,(function(e){return n("li",{key:e.id,staticClass:"cate-list"},[n("img",{staticClass:"cate-img",attrs:{src:e.img,alt:""}}),n("p",{staticClass:"cate-title"},[t._v(t._s(e.name))])])})),0)])},v=[],h=(n("d3b7"),n("bc3a")),m=n.n(h),g="/tender/test",b=function(t){var e=t.url,n=t.data,a=void 0===n?{}:n;return new Promise((function(t){m.a.get(g+e,{params:a}).then((function(e){200==e.data.errcode?t(e.data):console.log(e.errmsg)})).catch((function(t){console.log(t)}))}))};function _(t,e){return b({url:t,data:e})}var y={data:function(){return{cateList:[]}},created:function(){var t=this;_("/get_type").then((function(e){t.cateList=e.data}))}},x=y,w=(n("0a46"),Object(r["a"])(x,p,v,!1,null,null,null)),C=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getDate},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("ul",{staticClass:"list-shop-box"},t._l(t.shopList,(function(e,a){return n("li",{key:e.id,staticClass:"list-shop-list"},[n("div",{staticClass:"list-img-box"},[n("img",{attrs:{src:e.img,alt:""}})]),n("div",{staticClass:"list-info-box"},[n("div",{staticClass:"list-shop-title"},[n("h3",[t._v(t._s(e.name))])]),n("div",{staticClass:"list-rate-box"},[n("div",[n("span",[n("van-rate",{staticStyle:{"padding-top":"0.02rem"},attrs:{"allow-half":"",gutter:"0.01rem",size:"0.2rem",color:"#ffd21e",readonly:""},model:{value:t.value[a],callback:function(e){t.$set(t.value,a,e)},expression:"value[index]"}})],1),n("span",{staticClass:"list-rate"},[t._v(t._s(e.score)+"分")]),n("span",[t._v("月销"+t._s(e.num))])]),n("div",[n("span",{staticStyle:{"margin-right":"0.1rem"}},[t._v(t._s(e.minute)+"分钟")]),n("span",[t._v(t._s(e.distance))])])]),n("div",{staticClass:"list-distri"},[n("span",[t._v("起送"+t._s(e.per_capita))]),n("span",[t._v("配送"+t._s(e.fee))]),n("span",[t._v("人均"+t._s(e.price))])])])])})),0)])],1)},j=[],L=(n("99af"),n("a9e3"),{data:function(){return{current:0,size:10,shopList:[],value:[],loading:!1,finished:!1,total:0}},methods:{getDate:function(){var t=this;_("/get_store",{current:this.current,size:this.size}).then((function(e){for(var n=0;n<e.data.list.length;n++){var a=e.data.list[n].score.substring(2,4);Number(a)>5?t.value=t.value.concat(Math.ceil(e.data.list[n].score)):Number(a)<5&&Number(a)>0?t.value=t.value.concat(Number(parseInt(e.data.list[n].score)+.5)):t.value=t.value.concat(Number(e.data.list[n].score))}t.loading=!1,t.current++,t.total=e.data.total,t.shopList=t.shopList.concat(e.data.list),t.shopList.length>=t.total&&(t.finished=!0)}))}}}),k=L,S=(n("a819"),Object(r["a"])(k,O,j,!1,null,null,null)),E=S.exports,P={components:{category:C,list:E}},z=P,M=(n("a4f2"),Object(r["a"])(z,d,f,!1,null,null,null)),$=M.exports;a["a"].use(u["a"]);var N=[{path:"/",name:"Index",component:$}],D=new u["a"]({mode:"hash",routes:N}),T=D,I=n("2f62");a["a"].use(I["a"]);var J,R=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=(n("097e"),n("8e92"),n("b970"));n("157a");a["a"].use(U["a"]),J="http://admin.gxxmglzx.com",m.a.defaults.baseURL=J,a["a"].config.productionTip=!1,new a["a"]({router:T,store:R,render:function(t){return t(c)}}).$mount("#app")},"8e92":function(t,e,n){},a4f2:function(t,e,n){"use strict";n("a799")},a799:function(t,e,n){},a819:function(t,e,n){"use strict";n("42ba")},bdc9:function(t,e,n){}});
//# sourceMappingURL=app.7bb11472.js.map