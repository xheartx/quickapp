!function(){var t=function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){var o=i(100),n=i(101),r=i(102);$app_define$("@app-component/index",[],function(t,e,i){r(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=n}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},100:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"div",attr:{},classList:["item-title"],children:[{type:"text",attr:{value:"geolocation"}}]},{type:"div",attr:{},classList:["item-content"],children:[{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{value:function(){return"longitude："+this.longitude}},classList:["item-group-text"]},{type:"text",attr:{value:function(){return"latitude："+this.latitude}},classList:["item-group-text"]},{type:"input",attr:{type:"button",name:"gettype",value:"获取地理位置"},classList:["item-group-button"],events:{click:"getLocation"}}]},{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{value:function(){return"longitude："+this.sub_longitude}},classList:["item-group-text"]},{type:"text",attr:{value:function(){return"latitude："+this.sub_latitude}},classList:["item-group-text"]},{type:"input",attr:{type:"button",name:"subscribe",value:"监听地理位置"},classList:["item-group-button"],events:{click:"subscribe"}},{type:"input",attr:{type:"button",name:"unsubscribe",value:"取消监听地理位置"},classList:["item-group-button"],events:{click:"unsubscribe"}}]}]}]}},101:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"90px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column",flex:1},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"}}},102:function(t,e){t.exports=function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=i("@app-module/system.geolocation"),a=o(r);t.exports={data:function(){return{longitude:"",latitude:"",sub_longitude:"",sub_latitude:""}},onInit:function(t){this.$page.setTitleBar({text:"Geolocation"})},getLocation:function(){var t=this;a.default.getLocation({timeout:3e3,success:function(e){t.longitude=e.longitude,t.latitude=e.latitude}})},subscribe:function(){var t=this;a.default.subscribe({callback:function(e){t.sub_longitude=e.longitude,t.sub_latitude=e.latitude}})},unsubscribe:function(){a.default.unsubscribe()}};var u=e.default||t.exports,p=["public","protected","private"];if(u.data&&p.some(function(t){return u[t]}))throw new Error('页面VM对象中的属性data不可与"'+p.join(",")+'"同时存在，请使用private替换data名称');u.data||(u.data={},u._descriptor={},p.forEach(function(t){var e=n(u[t]);if("object"===e){u.data=Object.assign(u.data,u[t]);for(var i in u[t])u._descriptor[i]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();