!function(){var t=function(){return function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}({0:function(t,e,o){var i=o(49),n=o(50),r=o(51);$app_define$("@app-component/index",[],function(t,e,o){r(o,e,t),e.__esModule&&e.default&&(o.exports=e.default),o.exports.template=i,o.exports.style=n}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},49:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"div",attr:{},classList:["item-title"],children:[{type:"text",attr:{value:"stack"}}]},{type:"div",attr:{},classList:["item-content"],children:[{type:"stack",attr:{},children:[{type:"image",attr:{src:"/Common/img/stack1.png"},classList:["item-stack-img"]},{type:"text",attr:{value:"我是stack。子组件排列方式为层叠排列，每个直接子组件按照先后顺序依次堆叠，覆盖前一个子组件。"},classList:["item-stack-text"]}]}]}]}},50:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"90px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column",flex:1},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"},".item-stack-img":{width:"670px",height:"400px"},".item-stack-text":{color:"#ffffff",paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px"}}},51:function(t,e){t.exports=function(t,e,o){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports={onInit:function(t){this.$page.setTitleBar({text:"Stack"})}};var n=e.default||t.exports,r=["public","protected","private"];if(n.data&&r.some(function(t){return n[t]}))throw new Error('页面VM对象中的属性data不可与"'+r.join(",")+'"同时存在，请使用private替换data名称');n.data||(n.data={},n._descriptor={},r.forEach(function(t){var e=i(n[t]);if("object"===e){n.data=Object.assign(n.data,n[t]);for(var o in n[t])n._descriptor[o]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();