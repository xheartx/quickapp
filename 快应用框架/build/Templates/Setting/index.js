!function(){var t=function(){return function(t){function e(o){if(i[o])return i[o].exports;var r=i[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){var o=i(142),r=i(143),n=i(144);$app_define$("@app-component/index",[],function(t,e,i){n(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=r}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},142:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"div",attr:{},classList:["setting-content"],children:[{type:"div",attr:{},classList:["mine-header","mine-common"],children:[{type:"image",attr:{src:"/Common/img/mi_logo.png"},classList:["mine-header-logo"]},{type:"text",attr:{value:"请登录"}},{type:"image",attr:{src:"/Common/img/arrow_right.png"},classList:["mine-header-arrow"]}]},{type:"div",attr:{},classList:["mine-safe","mine-common"],children:[{type:"text",attr:{value:"账号与安全"}},{type:"image",attr:{src:"/Common/img/arrow_right.png"}}]},{type:"list",attr:{},classList:["mine-list"],children:[{type:"list-item",attr:{type:"mine"},repeat:function(){return this.list},classList:["mine-item-list","line"],children:[{type:"text",attr:{value:function(){return this.$item}}},{type:"image",attr:{src:"/Common/img/arrow_right.png"}}]}]}]}]}},143:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"90px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column",flex:1},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"},".doc-page":{backgroundColor:"#EFEFF4"},".setting-content":{flexDirection:"column",flex:1},".line":{borderBottomWidth:"1px",borderBottomColor:"#C8C8CB"},".mine-header-logo":{marginLeft:"30px",width:"90px"},".mine-header text":{paddingLeft:"20px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"mine-header"},{t:"d"},{t:"t",n:"text"}]}},".mine-header-arrow":{marginLeft:"479px",width:"20px",height:"20px"},".mine-list":{height:"270px",width:"750px",backgroundColor:"#ffffff",marginTop:"25px",borderTopColor:"#C8C8CB",borderRightColor:"#C8C8CB",borderBottomColor:"#C8C8CB",borderLeftColor:"#C8C8CB",borderBottomWidth:"1px",borderTopWidth:"1px"},".mine-header":{marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",justifyContent:"flex-start",alignItems:"center"},".mine-common":{width:"750px",backgroundColor:"#ffffff",borderTopColor:"#C8C8CB",borderRightColor:"#C8C8CB",borderBottomColor:"#C8C8CB",borderLeftColor:"#C8C8CB",borderTopWidth:"1px",borderBottomWidth:"1px",flexDirection:"row"},".mine-safe":{marginTop:"50px"},".mine-item-list":{width:"720px",height:"90px",marginLeft:"30px",flexDirection:"row"},".mine-safe text":{width:"200px",height:"90px",textAlign:"left",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"mine-safe"},{t:"d"},{t:"t",n:"text"}]},paddingLeft:"30px"},".mine-item-list text":{width:"200px",height:"90px",textAlign:"left",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"mine-item-list"},{t:"d"},{t:"t",n:"text"}]}},".mine-safe image":{width:"16px",height:"30px",marginLeft:"509px",marginTop:"35px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"mine-safe"},{t:"d"},{t:"t",n:"image"}]}},".mine-item-list image":{width:"16px",height:"30px",marginLeft:"479px",marginTop:"35px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"mine-item-list"},{t:"d"},{t:"t",n:"image"}]}}}},144:function(t,e){t.exports=function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=i("@app-module/system.prompt");o(n);t.exports={data:function(){return{list:["新消息通知","隐私","通用"]}},onInit:function(t){this.$page.setTitleBar({text:"设置"})}};var a=e.default||t.exports,p=["public","protected","private"];if(a.data&&p.some(function(t){return a[t]}))throw new Error('页面VM对象中的属性data不可与"'+p.join(",")+'"同时存在，请使用private替换data名称');a.data||(a.data={},a._descriptor={},p.forEach(function(t){var e=r(a[t]);if("object"===e){a.data=Object.assign(a.data,a[t]);for(var i in a[t])a._descriptor[i]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();