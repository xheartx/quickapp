!function(){var t=function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){var o=i(91),n=i(92),r=i(93);$app_define$("@app-component/index",[],function(t,e,i){r(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=n}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},91:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"div",attr:{},classList:["item-title"],children:[{type:"text",attr:{value:"device"}}]},{type:"div",attr:{},classList:["item-content"],children:[{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{value:function(){return this.$item}},classList:["item-group-text"],repeat:function(){return this.infos}},{type:"input",attr:{type:"button",name:"device",value:"获取设备信息"},classList:["item-group-button"],events:{click:"getDeviceInfos"}}]},{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{show:function(){return this.show},value:function(){return this.devideId}},classList:["item-group-text"]},{type:"input",attr:{type:"button",name:"deviceId",value:"获取设备ID"},classList:["item-group-button"],events:{click:"getDeviceId"}}]}]}]}},92:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"90px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column",flex:1},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"}}},93:function(t,e){t.exports=function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=i("@app-module/system.device"),p=o(r);t.exports={data:function(){return{infos:[],devideId:"",show:!1}},onInit:function(t){this.$page.setTitleBar({text:"Device"})},getDeviceInfos:function(){var t=this;p.default.getInfo({success:function(e){var i=[];i.push("设备品牌："+e.brand),i.push("设备型号："+e.model),i.push("设备代号："+e.product),i.push("操作系统版本名称："+e.osVersionName),i.push("操作系统版本号："+e.osVersionCode),i.push("屏幕宽："+e.screenWidth),i.push("屏幕高："+e.screenHeight),t.infos=i}})},getDeviceId:function(){var t=this;p.default.getId({type:["device","mac"],success:function(e){t.show=!0,t.devideId="设备Id："+e.device}})}};var a=e.default||t.exports,d=["public","protected","private"];if(a.data&&d.some(function(t){return a[t]}))throw new Error('页面VM对象中的属性data不可与"'+d.join(",")+'"同时存在，请使用private替换data名称');a.data||(a.data={},a._descriptor={},d.forEach(function(t){var e=n(a[t]);if("object"===e){a.data=Object.assign(a.data,a[t]);for(var i in a[t])a._descriptor[i]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();