!function(){var t=function(){return function(t){function e(r){if(a[r])return a[r].exports;var o=a[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}({0:function(t,e,a){var r=a(73),o=a(74),n=a(75);$app_define$("@app-component/index",[],function(t,e,a){n(a,e,t),e.__esModule&&e.default&&(a.exports=e.default),a.exports.template=r,a.exports.style=o}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},73:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"text",attr:{value:"有底色"},classList:["item-title"]},{type:"div",attr:{},classList:["badge-content"],children:[{type:"text",attr:{value:"1"},classList:["badge"]},{type:"text",attr:{value:"12"},classList:["badge","badge-primary"]},{type:"text",attr:{value:"123"},classList:["badge","badge-success"]},{type:"text",attr:{value:"3"},classList:["badge","badge-warning"]},{type:"text",attr:{value:"45"},classList:["badge","badge-danger"]},{type:"text",attr:{value:"456"},classList:["badge","badge-purple"]}]},{type:"text",attr:{value:"无底色"},classList:["item-title"]},{type:"div",attr:{},classList:["badge-content"],children:[{type:"text",attr:{value:"1"},classList:["badge","badge-inverted"]},{type:"text",attr:{value:"2"},classList:["badge","badge-primary-inverted","badge-inverted"]},{type:"text",attr:{value:"3"},classList:["badge","badge-success-inverted","badge-inverted"]},{type:"text",attr:{value:"4"},classList:["badge","badge-warning-inverted","badge-inverted"]},{type:"text",attr:{value:"5"},classList:["badge","badge-danger-inverted","badge-inverted"]},{type:"text",attr:{value:"6"},classList:["badge","badge-purple-inverted","badge-inverted"]}]}]}},74:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"50px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",fontSize:"30px"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column",flex:1},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"},".badge-content":{flexDirection:"row"},".badge-content text":{marginLeft:"30px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"badge-content"},{t:"d"},{t:"t",n:"text"}]}},".badge":{fontSize:"22px",paddingTop:"3px",paddingRight:"6px",paddingBottom:"3px",paddingLeft:"6px",borderRadius:"100px",backgroundColor:"rgba(0,0,0,0.15)",color:"#929292"},".badge-primary":{color:"#ffffff",backgroundColor:"#007aff"},".badge-success":{color:"#ffffff",backgroundColor:"#4cd964"},".badge-warning":{color:"#ffffff",backgroundColor:"#f0ad4e"},".badge-danger":{color:"#ffffff",backgroundColor:"#dd524d"},".badge-purple":{color:"#ffffff",backgroundColor:"#8a6de9"},".badge-inverted":{backgroundColor:"rgba(0,0,0,0)"},".badge-primary-inverted":{color:"#007aff"},".badge-success-inverted":{color:"#4cd964"},".badge-warning-inverted":{color:"#f0ad4e"},".badge-danger-inverted":{color:"#dd524d"},".badge-purple-inverted":{color:"#8a6de9"}}},75:function(t,e){t.exports=function(t,e,a){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports={onInit:function(t){this.$page.setTitleBar({text:"数字角标"})}};var o=e.default||t.exports,n=["public","protected","private"];if(o.data&&n.some(function(t){return o[t]}))throw new Error('页面VM对象中的属性data不可与"'+n.join(",")+'"同时存在，请使用private替换data名称');o.data||(o.data={},o._descriptor={},n.forEach(function(t){var e=r(o[t]);if("object"===e){o.data=Object.assign(o.data,o[t]);for(var a in o[t])o._descriptor[a]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();