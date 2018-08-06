!function(){"use strict";(global.__proto__||global).regeneratorRuntime=require("babel-runtime/regenerator");const e=Object.prototype.toString,t=e=>"function"==typeof e,r=t=>"[object Object]"===e.call(t),a=[],n=function(){return a.length&&a[a.length-1]},o=function(){return a},s=function(e){const t=a.indexOf(this);~t&&a.splice(t,1),a.push(e)},c=function(){a.pop()},i=(e,t)=>(Object.keys(t).forEach(r=>e[r]=t[r]),()=>e);var l={input:{change:{detail:function(e){return{value:e.value||e.text}}}},picker:{change:{detail:function(e){switch(e.target.attr.type){case"time":return e.minute=e.minute<10?"0"+e.minute:e.minute,e.hour=e.hour<10?"0"+e.hour:e.hour,{value:e.hour+":"+e.minute};case"date":return e.month=e.month<10?"0"+e.month:e.month,e.day=e.day<10?"0"+e.day:e.day,{value:e.year+"-"+e.month+"-"+e.day};case"text":return{value:e.newSelected};default:return{value:""}}}}},radio:{change:{detail:function(e){return{value:e.value}}}},slider:{change:{detail:function(e){return{value:e.progress}}}},swiper:{change:{detail:function(e){return{current:e.index}}}},switch:{change:{detail:function(e){return{value:e.checked}}}},textarea:{change:{detail:function(e){return{value:e.value,cursor:e.value.length}}},focus:{detail:function(e){return{value:"",height:""}}},blur:{detail:function(e){return{value:"",cursor:""}}}},video:{timeupdate:{detail:function(e){return{currentTime:e.currenttime,duration:""}}},fullscreenchange:{detail:function(e){return{fullScreen:e.fullscreen,direction:"horizontal"}}}}};const u=e=>{let t="",r="";const a=e.attrs;if(a){const e=Object.keys(a);e.length&&(t=" "+e.map(e=>`${e}="${a[e]}"`).join(" "))}return e.children&&(r=e.children.map(e=>u(e)).join("")),`<${e.name||e.type}${t}>${e.text||""}${r}</${e.name||e.type}>`},h=e=>(Array.isArray(e)||(e=[e]),e.map(e=>u(e)).join("\r\n"));function d(e){if(e){if("string"==typeof e)return 0===e.indexOf("ESCAPE:")?unescape(e.substr(7)):e;if(Array.isArray(e))return h(e)}return""}const p=(e,t)=>{const r=e.split("/"),a=t.split("/");r.pop();for(var n=0;n<a.length;n++)"."!=a[n]&&(".."==a[n]?r.pop():r.push(a[n]));return r.pop(),r.join("/")};function g(e,t){const r=e.split("?");return r.length>1?p(t||"",r[0])+"?"+r[1]:p(t||"",r[0])}function f(e,t){return function(r,a){if(!t){const e=n();t=e?e._$path$_:""}const o=e("@app-module/system.router");if("navigateBack"===r)o.back();else{let e=a.target.attr&&a.target.attr.dataUrl;if(e)switch(r){case"navigate":o.push({uri:g(e,t)});break;case"redirect":o.replace({uri:g(e,t)});break;case"switchTab":o.replace({uri:g(e)}),o.clear()}}}}const m=function(e){return function(e,t){return 0!==(e=unescape(e)).trim().indexOf("[")&&(e="{"+e+"}"),new Function(`with(this){return ${e}}`).call(t)}(e,this)},y=function(e){this.pageIsRefreshing=e.refreshing,e.refreshing&&t(this.onPullDownRefresh)&&this.onPullDownRefresh()},b=/data([A-Z$](?:[A-Za-z_$]*))/,w=function(e,r,a,n){let o={};if(n.target&&n.target.type){const e=l[n.target.type];e&&e[n.type]&&t(e[n.type].detail)&&(o=e[n.type].detail(n)||{})}n.target.dataset={},n.target.attr&&Object.keys(n.target.attr).forEach(e=>{const t=e.match(b);if(t&&2===t.length){let r=t[1];r=r.substr(0,1).toLowerCase()+r.substr(1,r.length),n.target.dataset[r]=n.target.attr[e]}}),n.currentTarget=n.target,n.detail=o,this[e](n)},$=(e,t,r)=>{v(e,t,r)},v=(e,t,r)=>{e.$handleRichText=d,e.$handleMustache=m,e.$handlePageEvent=w,e.$handlePageRefresh=y,e.$handleRouterEvent=f(r,t)},x=["methods","properties","data","behaviors","relations","externalClasses","created","attached","ready","moved","detached"];function k(e,{wxs:r,type:a,path:n,module:o,exports:i,$app_require$:l}){$(e,n,l);e.onInit;e.update=function(){},e.setData=function(e){e&&Object.keys(e).forEach(t=>{this.data[t]=e[t],this.$set("data"===t?"proxyDataKey":t,e[t])})},e.onInit=function(){this._$path$_=n,Object.keys(r).forEach(e=>this[e]=r[e]),this.$set("pageIsRefreshing",!1);const a=this.$getPageInitData();Object.keys(a).forEach(e=>{this.$set("data"===e?"proxyDataKey":e,a[e])}),this.data=a,t(e.onLoad)&&e.onLoad.call(this)};const u=e.onShow;e.onShow=function(){"Page"===a&&s(this),t(u)&&u.call(this)},e.onDestroy=function(){"Page"===a&&c(),t(e.onUnload)&&e.onUnload.call(this)};const h=[];Object.keys(e).forEach(r=>{~x.indexOf(r)||t(e[r])||h.push(r)}),h.length&&(e.data||(e.data={}),h.forEach(t=>{e.data[t]=e[t],delete e[t]}));const d=e.data||{};delete e.data,e.$getPageInitData=function(){return d}}const S=["properties","data","methods","relations"],_=["created","attached","ready","moved","detached"],P=(e,t)=>t?(Object.keys(t).forEach(a=>{const n=e[a],o=t[a];r(n)&&r(o)?P(n,o):e[a]=o}),e):e,C=(e,t)=>{const r={},a=a=>{~_.indexOf(a)?r[a]=((e,t)=>t?e?e.concat(t):Array.isArray(t)?t:[t]:e)(e[a],t[a]):~S.indexOf(a)?r[a]=P(e[a]||{},t[a]):r[a]=void 0===t[a]?e[a]:t[a]};return Object.keys(e).forEach(e=>a(e)),Object.keys(t).forEach(t=>!e.hasOwnProperty(t)&&a(t)),r};function V(e){let t=e.behaviors;t||(t=[]);let a={};return(t=t.filter(e=>r(e))).forEach(e=>a=C(a,e)),C(a,e)}const O=function(e){Array.isArray(this[e])&&this[e].forEach(e=>e.call(this))};const T={name:"set",args:e=>({value:e.data}),returnValue:()=>({})},D={name:"get",returnValue:e=>({data:e})},R={name:"delete",returnValue:()=>({})},j={name:"clear"};var E={barcode:{scanCode:{name:"scan"}},brightness:{setScreenBrightness:{name:"setValue"},getScreenBrightness:{name:"getValue",returnValue:e=>({value:String(e.value/255).substring(0,7)})}},clipboard:{setClipboardData:{name:"set",args:e=>({text:e.data})},getClipboardData:{name:"get",returnValue:e=>({data:e.text})}},device:{getSystemInfo:{name:"getInfo",returnValue:e=>({brand:e.brand,model:e.model,screenWidth:e.screenWidth,screenHeight:e.screenHeight,system:e.osVersionCode,platform:e.platformVersionName,pixelRatio:"",windowWidth:"",windowHeight:"",statusBarHeight:"",language:"",version:"",fontSizeSetting:"",SDKVersion:""})}},fetch:{request:{name:"fetch",returnValue(e){let t=null;try{t=JSON.parse(e.data)}catch(r){t=e.data}return{data:t,statusCode:e.code,header:e.headers}}}},file:{getSavedFileInfo:{name:"get",args:e=>({uri:e.filePath}),returnValue:e=>({createTime:e.lastModifiedTime,size:e.length})},removeSavedFile:{name:"delete",args:e=>({uri:e.filePath})}},geolocation:{getLocation:{name:"getLocation",args:{},returnValue:{}}},media:{chooseImage:{name:"pickImage",returnValue:e=>({tempFilePaths:[e.uri]})},chooseVideo:{name:"pickVideo",returnValue:e=>({tempFilePath:e.uri})}},network:{getNetworkType:{name:"getType",returnValue:e=>({networkType:e.type})},onNetworkStatusChange:{name:"subscribe",args:e=>({callback:e}),returnValue:e=>({networkType:e.type})}},prompt:{showToast:{name:"showToast",args:e=>({message:e.title,duration:e.duration>2e3?1:0})},showModal:{name:"showDialog",args(e){var t={title:e.title,message:e.content,buttons:[{text:"确定",color:""},{text:"取消",color:""}]};return e.title||delete t.title,e.content||delete e.content,e.showCancel||"boolean"!=typeof e.showCancel||t.buttons.pop(),t.buttons[1]&&e.cancelText&&(t.buttons[1].text=e.cancelText),t.buttons[1]&&e.cancelColor&&(t.buttons[1].color=e.cancelColor),e.confirmText&&(t.buttons[0].text=e.confirmText),e.confirmColor&&(t.buttons[0].color=e.confirmColor),t},returnValue:e=>0==e.index?{confirm:!0,cancel:!1}:{confirm:!1,cancel:!0}},showActionSheet:{name:"showContextMenu",returnValue:e=>({tapIndex:e.index})}},request:{uploadFile:{name:"upload",args(e){let t={uri:e.filePath};return{url:e.url,header:e.header,files:[t]}},returnValue:e=>({data:e.data,statusCode:e.code})},downloadFile:{name:"download",returnValue:e=>({statusCode:e.token})}},router:{navigateTo:{name:"push",args:e=>({uri:e.url})},redirectTo:{name:"replace",args:e=>({uri:e.url})},navigateBack:{name:"back"},switchTab:{name:"replace"}},sensor:{onCompassChange:{name:"subscribeCompass",args:e=>({callback:e})},stopCompass:{name:"unsubscribeCompass"},onAccelerometerChange:{name:"subscribeAccelerometer",args:e=>({callback:e})},stopAccelerometer:{name:"unsubscribeAccelerometer"}},storage:{setStorage:T,setStorageSync:T,getStorage:D,getStorageSync:D,removeStorage:R,removeStorageSync:R,clearStorage:j,clearStorageSync:j},vibrator:{vibrateLong:{name:"vibrate"},vibrateShort:{name:"vibrate"}}};const A={};Object.keys(E).forEach(e=>{const t=E[e];Object.keys(t).forEach(r=>{const a=t[r];a.module=e,A[r]=a})});const I=(e,t,r)=>a=>e(M(a,t,r)),M=(e,t,a)=>(e=t(e),r(e)&&!e.errMsg&&(e.errMsg=`${a}:ok`),e);const q=$app_require$("@app-module/system.storage");const B=$app_require$("@app-module/system.app");var H=Object.freeze({getSystemInfoSync:async function(){return new Promise((e,t)=>{B.getInfo({success(t){e({brand:t.brand,model:t.model,screenWidth:t.screenWidth,screenHeight:t.screenHeight,system:t.osVersionCode,platform:t.platformVersionName,pixelRatio:"",windowWidth:"",windowHeight:"",statusBarHeight:"",language:"",version:"",fontSizeSetting:"",SDKVersion:""})}})})},startPullDownRefresh:({success:e,complete:r})=>{const a=n();a&&(a.pageIsRefreshing=!0),t(e)&&e({errMsg:"startPullDownRefresh:ok"}),t(r)&&r({errMsg:"startPullDownRefresh:ok"})},stopPullDownRefresh:({success:e,complete:r})=>{const a=n();a&&(a.pageIsRefreshing=!1),t(e)&&e({errMsg:"stopPullDownRefresh:ok"}),t(r)&&r({errMsg:"stopPullDownRefresh:ok"})},getStorageSync:async function(e){return new Promise((t,r)=>{q.get({key:e,success(e){t(e)},fail(e,t){r(e)}})})},setStorageSync:async function(e,t){return new Promise((r,a)=>{q.set({key:e,value:t,success(e){r(e)},fail(e,t){a(e)}})})},removeStorageSync:async function(e){return new Promise((t,r)=>{q.delete({key:e,success(e){t(e)},fail(e,t){r(e)}})})},clearStorageSync:async function(){return new Promise((e,t)=>{q.clear({success(t){e(t)},fail(e,r){t(e)}})})},setNavigationBarTitle:({title:e,success:r,complete:a})=>{const o=n();o&&o.$page.setTitleBar({text:e||""}),t(r)&&r({errMsg:"startPullDownRefresh:ok"}),t(a)&&a({errMsg:"startPullDownRefresh:ok"})},setNavigationBarColor:({frontColor:e,backgroundColor:r,success:a,complete:o})=>{const s=n();s&&s.$page.setTitleBar({textColor:e||"",backgroundColor:r||""}),t(a)&&a({errMsg:"stopPullDownRefresh:ok"}),t(o)&&o({errMsg:"stopPullDownRefresh:ok"})}}),L=new Proxy({},{get:(e,r)=>(function({fail:e,complete:a}={}){const n={errMsg:r+":fail"};t(e)&&e(n),t(a)&&a(n),console.error(`暂不支持wx.${r}调用`)})});const F=global.__proto__||global;F.wx=L,F.App=function(e,{module:r,exports:a,$app_require$:n}){const s=[];Object.keys(e).forEach(r=>{"data"===r||"manifest"===r||t(e[r])||s.push(r)});const c={};s.forEach(t=>{c[t]=e[t],delete e[t]}),e.onCreate=function(){(global.__proto__||global).getApp=i(this,c);const e={path:"",scene:1001,query:{}};t(this.onLaunch)&&this.onLaunch(e),t(this.onShow)&&this.onShow(e),"undefined"!=typeof dc_stat&&dc_stat.report()},e.getCurrentPages=o,a.default?a.default=e:r.exports&&(r.exports=e)},F.Page=function(e,{wxs:t,path:r,module:a,exports:n,$app_require$:o}){k(e,{wxs:t,type:"Page",path:r,module:a,exports:n,$app_require$:o}),n.default?n.default=e:a.exports&&(a.exports=e)},F.Behavior=V,F.Component=function(e,{wxs:r,path:a,module:n,exports:o,$app_require$:s}){k(e=V(e),{wxs:r,type:"Component",path:a,module:n,exports:o,$app_require$:s}),e.props=[],e.properties&&(Object.keys(e.properties).forEach(t=>e.props.push(t)),delete e.properties),e.methods&&(Object.keys(e.methods).forEach(t=>{e[t]=e.methods[t]}),delete e.methods);const c=e.onReady;e.onReady=function(){t(c)&&c.call(this),O.call(this,"created"),O.call(this,"attached"),O.call(this,"ready")};const i=e.onDestroy;e.onDestroy=function(){t(i)&&i.call(this),O.call(this,"detached")},e.hasBehavior=function(e){return!!~behaviors.indexOf(e)},e.triggerEvent=function(e,t,{bubbles:r=!1,composed:a=!1,capturePhase:n=!1}={}){this.$dispatch(e,t)},o.default?o.default=e:n.exports&&(n.exports=e)},F._$$polyfill$$_=H,F._$$parseArgs$$_=function(e,r){const a=A[r.method];if(a&&(t(a.returnValue)||(a.returnValue=(e=>e)),t(e.success)&&(e.success=I(e.success,a.returnValue,r.method)),t(e.complete)&&(e.complete=I(e.complete,a.returnValue,r.method)),t(a.args)&&(Object.assign(e,a.args(e,r)),t(e.callback)&&(e.callback=I(e.callback,a.returnValue,r.method)))),~["navigateTo","redirectTo","switchTab"].indexOf(r.method)&&e.uri)if("switchTab"===r.method)e.uri=g(e.uri);else{const t=n();t&&t._$path$_&&(e.uri=g(e.uri,t._$path$_))}return e},F._$$handleRouterEvent$$_=f}();
