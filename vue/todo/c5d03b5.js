(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4],{247:function(e,t,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(128).default)("b5bfe7ce",content,!0,{sourceMap:!1})},248:function(e,t,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(128).default)("17960bc6",content,!0,{sourceMap:!1})},249:function(e,t,n){"use strict";var r=n(11),o=n(0),c=n(3),d=n(102),l=n(19),f=n(15),m=n(180),h=n(39),v=n(101),y=n(179),x=n(5),I=n(74).f,k=n(31).f,_=n(17).f,O=n(250),w=n(251).trim,N="Number",E=o.Number,S=E.prototype,T=o.TypeError,j=c("".slice),C=c("".charCodeAt),A=function(e){var t=y(e,"number");return"bigint"==typeof t?t:M(t)},M=function(e){var t,n,r,o,c,d,l,code,f=y(e,"number");if(v(f))throw T("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=w(f),43===(t=C(f,0))||45===t){if(88===(n=C(f,2))||120===n)return NaN}else if(48===t){switch(C(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(d=(c=j(f,2)).length,l=0;l<d;l++)if((code=C(c,l))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(d(N,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var P,L=function(e){var t=arguments.length<1?0:E(A(e)),n=this;return h(S,n)&&x((function(){O(n)}))?m(Object(t),n,L):t},$=r?I(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;$.length>F;F++)f(E,P=$[F])&&!f(L,P)&&_(L,P,k(E,P));L.prototype=S,S.constructor=L,l(o,N,L)}},250:function(e,t,n){var r=n(3);e.exports=r(1..valueOf)},251:function(e,t,n){var r=n(3),o=n(22),c=n(12),d=n(252),l=r("".replace),f="["+d+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(e){return function(t){var n=c(o(t));return 1&e&&(n=l(n,m,"")),2&e&&(n=l(n,h,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},252:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},253:function(e,t,n){"use strict";n(247)},254:function(e,t,n){var r=n(127)(!1);r.push([e.i,".remove[data-v-e23693ec]{fill:red}.remove[data-v-e23693ec]:hover{cursor:pointer}.item[data-v-e23693ec]{font-size:18px;padding:5px}.item[data-v-e23693ec],.item>span[data-v-e23693ec]{display:flex;align-items:center}.item>span[data-v-e23693ec]{margin-left:auto}.item>span>svg[data-v-e23693ec]{height:20px}input[type=checkbox][data-v-e23693ec]{cursor:pointer}",""]),e.exports=r},255:function(e,t,n){"use strict";n.r(t);n(41),n(32),n(40),n(14),n(58),n(33),n(59);var r=n(26);n(249);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=n(2).a.extend({name:"TodoItem",props:{item:{type:Object,default:function(){return{uid:"defaultUID",text:"Untitled",checked:!1}}},uid:{type:Number,default:void 0},doneTodo:{type:Array,default:function(){return[]}}},data:function(){return{mutableItem:c({},this.item)}},methods:{removeEntry:function(){this.$emit("removeItem",this.item.uid)},updateCheck:function(){this.$emit("updateCheck",this.item.uid)}}}),l=(n(253),n(45)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mutableItem.checked,expression:"mutableItem.checked"}],attrs:{type:"checkbox"},domProps:{value:e.item.uid+e.item,checked:Array.isArray(e.mutableItem.checked)?e._i(e.mutableItem.checked,e.item.uid+e.item)>-1:e.mutableItem.checked},on:{change:[function(t){var n=e.mutableItem.checked,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e.item.uid+e.item,d=e._i(n,c);r.checked?d<0&&e.$set(e.mutableItem,"checked",n.concat([c])):d>-1&&e.$set(e.mutableItem,"checked",n.slice(0,d).concat(n.slice(d+1)))}else e.$set(e.mutableItem,"checked",o)},e.updateCheck]}}),e._v("\n   \n  "+e._s(e.item.text)+"\n  "),n("span",{staticClass:"remove",on:{click:e.removeEntry}},[n("svg",{attrs:{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}})])])])}),[],!1,null,"e23693ec",null);t.default=component.exports},256:function(e,t,n){"use strict";var r=n(6),o=n(73).findIndex,c=n(129),d="findIndex",l=!0;d in[]&&Array(1).findIndex((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c(d)},257:function(e,t,n){"use strict";var r=n(6),o=n(73).find,c=n(129),d="find",l=!0;d in[]&&Array(1).find((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c(d)},258:function(e,t,n){"use strict";n(248)},259:function(e,t,n){var r=n(127)(!1);r.push([e.i,"h1[data-v-19f05228]{margin:0}.container[data-v-19f05228]{display:flex;flex-flow:column;align-items:center;min-height:80vh;height:auto;background-color:#fff;width:650px;padding:10px;border-radius:3px}input[type=text][data-v-19f05228]{padding:7px;border-radius:3px;border:1px solid grey;width:550px;margin-bottom:10px;font-size:18px}.item-container[data-v-19f05228]{width:560px;background-color:#fff}.grid[data-v-19f05228]{display:grid;background:grey;grid-gap:1px;border:1px solid grey}.filter-area[data-v-19f05228]{margin:10px 0;width:560px;display:flex}",""]),e.exports=r},260:function(e,t,n){var content=n(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(128).default)("1b7833da",content,!0,{sourceMap:!1})},262:function(e,t,n){"use strict";n.r(t);n(75),n(256),n(181),n(257),n(14);var r=n(2),o="todo1",c=r.a.extend({name:"TodoList",data:function(){return{items:[]}},mounted:function(){this.items=localStorage.getItem(o)?JSON.parse(localStorage.getItem(o)):[]},methods:{addToList:function(e){var t=e.target;this.items.push({uid:"".concat(Math.floor(1e11*Math.random())).concat(Date.now()),text:t.value||"Untitled",checked:!1}),t.value="",localStorage.setItem(o,JSON.stringify(this.items))},removeItem:function(e){var t=this.items.findIndex((function(i){return i.uid===e}));this.items.splice(t,1),localStorage.setItem(o,JSON.stringify(this.items))},updateCheck:function(e){var t=this.items.find((function(i){return i.uid===e}))||{checked:!1};t.checked=!t.checked,localStorage.setItem(o,JSON.stringify(this.items))}}}),d=(n(258),n(45)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("STUFF TO DO")]),e._v(" "),n("br"),e._v(" "),n("div",[n("input",{attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addToList.apply(null,arguments)}}})]),e._v(" "),e.items.length?n("div",{staticClass:"filter-area"},[e.items.filter((function(e){return!e.checked})).length?n("div",[e._v("\n      "+e._s(e.items.filter((function(e){return!e.checked})).length)+"\n      "+e._s(e.items.filter((function(e){return!e.checked})).length>1?"items":"item")+"\n      left\n    ")]):e._e()]):e._e(),e._v(" "),e.items.length?e._e():n("div",[e._v("There are no todo items for today.")]),e._v(" "),n("div",{staticClass:"grid"},e._l(e.items,(function(t,r){return n("div",{key:t.uid,staticClass:"item-container"},[n("TodoItem",{attrs:{uid:r,item:t},on:{removeItem:e.removeItem,updateCheck:e.updateCheck}})],1)})),0)])}),[],!1,null,"19f05228",null);t.default=component.exports;installComponents(component,{TodoItem:n(255).default})},263:function(e,t,n){"use strict";n(260)},264:function(e,t,n){var r=n(127)(!1);r.push([e.i,"body{margin:0}.bg-main{background-color:#475e67;display:flex;justify-content:center;align-items:center;min-height:100vh;height:auto}",""]),e.exports=r},267:function(e,t,n){"use strict";n.r(t);var r=n(2).a.extend({name:"IndexPage"}),o=(n(263),n(45)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bg-main"},[t("TodoList")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TodoList:n(262).default})}}]);