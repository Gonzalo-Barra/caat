(function(t){function e(e){for(var n,l,a=e[0],s=e[1],u=e[2],f=0,p=[];f<a.length;f++)l=a[f],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},i={app:0},r=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/caat/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"035a":function(t,e,o){"use strict";o("2c5a")},"2c5a":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},r=[],l=(o("034f"),o("2877")),a={},s=Object(l["a"])(a,i,r,!1,null,null,null),u=s.exports,c=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Formulario")],1)},p=[],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"formulario"},[o("form",[o("div",{staticClass:"d-flex justify-content-between"},[o("label",[t._v("Título: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.giftitulo,expression:"giftitulo"}],attrs:{type:"text"},domProps:{value:t.giftitulo},on:{input:function(e){e.target.composing||(t.giftitulo=e.target.value)}}})]),o("div",{staticClass:"d-flex justify-content-between"},[o("label",{attrs:{for:""}},[t._v("Filtro: ")]),o("select",{on:{change:t.changeFilter}},[o("option",[t._v("Elija un filtro para la imagen")]),t._l(t.filter,(function(e){return o("option",{key:e.value,domProps:{value:e.value,textContent:t._s(e.filtro)}})}))],2)]),o("div",{staticClass:"d-flex justify-content-between"},[o("label",[t._v("Color: ")]),o("select",{staticClass:"input-color",on:{change:t.changeColor}},[o("option",[t._v("Elija un color para el título")]),t._l(t.fontColor,(function(e){return o("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.color)+" ")])}))],2)]),o("div",{staticClass:"color-box d-flex",style:t.styles}),o("div",{staticClass:"d-flex justify-content-between"},[o("label",[t._v("Tamaño: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"text"},domProps:{value:t.fontSize},on:{input:function(e){e.target.composing||(t.fontSize=e.target.value)}}})])])]),o("div",{staticClass:"image-card"},[o("button",{staticClass:"btn btn-light mb-4",on:{click:function(e){return e.target!==e.currentTarget?null:t.getGif.apply(null,arguments)}}},[t._v(" Obtener mi gato ")]),o("br"),o("img",{style:t.imgstyle,attrs:{src:t.gifImage,alt:""}})])])},v=[],m=(o("4de4"),o("d3b7"),o("99af"),{name:"form-component",data:function(){return{}},computed:{filter:function(){return this.$store.state.filter},titlestyle:function(){return this.$store.state.titlestyle},fontColor:function(){return this.$store.state.fontColor},imgstyle:function(){return this.$store.state.imgstyle},styles:function(){return this.$store.state.styles},fontSize:{get:function(){return this.$store.state.fontSize},set:function(t){this.$store.commit("UPDATE_FONTSIZE",t)}},giftitulo:{get:function(){return this.$store.state.giftitulo},set:function(t){this.$store.commit("UPDATE_TITULO",t)}},gifImage:{get:function(){return this.$store.state.gifImage},set:function(t){this.$store.commit("UPDATE_GIFIMAGE",t)}}},methods:{changeColor:function(t){this.styles.background=t.target.value,this.titlestyle.color=t.target.value},changeFilter:function(t){this.imgstyle.filter=t.target.value},getGif:function(){this.gifImage="",this.gifImage="https://cataas.com/cat/gif/says/".concat(this.giftitulo,"?filter=").concat(this.imgstyle.filter,"&c=").concat(this.titlestyle.color,"&size=").concat(this.fontSize,"&width=400")},created:function(){this.gifImage()}}}),d=m,h=(o("035a"),Object(l["a"])(d,g,v,!1,null,"3175aabb",null)),y=h.exports,b={name:"Home",components:{Formulario:y}},_=b,w=Object(l["a"])(_,f,p,!1,null,null,null),x=w.exports;n["a"].use(c["a"]);var j=[{path:"/",name:"Home",component:x}],O=new c["a"]({routes:j}),C=O,S=o("2f62");n["a"].use(S["a"]);var T=new S["a"].Store({state:{giftitulo:null,itulo:null,gifImage:null,fontSize:null,fontColor:[{color:"azul",value:"blue"},{color:"rojo",value:"red"},{color:"verde",value:"green"},{color:"amarillo",value:"yellow"},{color:"naranjo",value:"orange"}],filter:[{filtro:"sepia",value:"sepia"},{filtro:"invert",value:"invert"},{filtro:"blur",value:"blur"},{filtro:"opacity",value:"opacity"},{filtro:"blanco/negro",value:"grayscale"}],titlestyle:{color:"black",fontSize:"30px"},imgstyle:{filter:"none",width:"100%",height:"auto"},styles:{background:"white"}},getters:{},mutations:{UPDATE_TITULO:function(t,e){t.giftitulo=e},UPDATE_FONTSIZE:function(t,e){t.fontSize=e},UPDATE_GIFIMAGE:function(t,e){t.gifImage=e}},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:C,store:T,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.5aa09cdf.js.map