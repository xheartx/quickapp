!function(){var t=function(){return function(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}({0:function(t,e,r){var i=r(55),a=r(56),o=r(57);$app_define$("@app-component/index",[],function(t,e,r){o(r,e,t),e.__esModule&&e.default&&(r.exports=e.default),r.exports.template=i,r.exports.style=a}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},55:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"swiper",attr:{},children:[{type:"div",attr:{},classList:["item-grid"],children:[{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c1.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c2.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c3.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c4.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c5.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c6.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c7.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c8.png"}},{type:"text",attr:{value:"grid"}}]}]},{type:"div",attr:{},classList:["item-grid"],children:[{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c1.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c2.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c3.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c4.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c5.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c6.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c7.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c8.png"}},{type:"text",attr:{value:"grid"}}]}]},{type:"div",attr:{},classList:["item-grid"],children:[{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c1.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c2.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c3.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c4.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c5.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c6.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c7.png"}},{type:"text",attr:{value:"grid"}}]},{type:"div",attr:{},classList:["item"],children:[{type:"image",attr:{src:"/Common/img/c8.png"}},{type:"text",attr:{value:"grid"}}]}]}]}]}},56:function(t,e){t.exports={".container":{flex:1},swiper:{width:"750px",height:"375px",backgroundColor:"#FBF9FE"},".item-grid":{width:"750px",flexDirection:"row",flexWrap:"wrap"},".item":{width:"187.5px",height:"187.5px",flexDirection:"column",alignItems:"center",borderTopColor:"#DDDDDD",borderRightColor:"#DDDDDD",borderBottomColor:"#DDDDDD",borderLeftColor:"#DDDDDD"},".item-border-nobottom":{borderTopWidth:"1px",borderRightWidth:"1px",borderBottomWidth:"0px",borderLeftWidth:"1px"},".item-border":{borderTopWidth:"1px",borderRightWidth:"1px",borderBottomWidth:"1px",borderLeftWidth:"1px"},".item-border-top-bottom":{borderTopWidth:"1px",borderBottomWidth:"1px"},".item-border-bottom":{borderBottomWidth:"1px"},".item image":{width:"100px",height:"100px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"image"}]}},".item text":{width:"187.5px",height:"50px",textAlign:"center",fontSize:"23px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item"},{t:"d"},{t:"t",n:"text"}]}}}},57:function(t,e){t.exports=function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r("@app-module/system.router"),p=i(o);t.exports={onInit:function(t){this.$page.setTitleBar({text:"可左右拖动的9宫导航"})},onMenuPress:function(){p.default.push({uri:"Examples/About"})}};var n=e.default||t.exports,m=["public","protected","private"];if(n.data&&m.some(function(t){return n[t]}))throw new Error('页面VM对象中的属性data不可与"'+m.join(",")+'"同时存在，请使用private替换data名称');n.data||(n.data={},n._descriptor={},m.forEach(function(t){var e=a(n[t]);if("object"===e){n.data=Object.assign(n.data,n[t]);for(var r in n[t])n._descriptor[r]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();