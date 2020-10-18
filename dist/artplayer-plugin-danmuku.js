/*!
 * artplayer-plugin-danmuku.js v3.5.17
 * Github: https://github.com/zhw2590582/ArtPlayer#readme
 * (c) 2017-2020 Harvey Zack
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).artplayerPluginDanmuku=e()}(this,(function(){"use strict";var t=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};var e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t},r={"zh-cn":{"Danmu opacity":"弹幕透明度","Danmu speed":"弹幕速度","Danmu size":"弹幕大小","Danmu text cannot be empty":"弹幕文本不能为空","The length of the danmu does not exceed":"弹幕文本字数不能超过","Danmu speed synchronous playback multiple":"弹幕速度同步播放倍数"},"zh-tw":{"Danmu opacity":"彈幕透明度","Danmu speed":"彈幕速度","Danmu size":"弹幕大小","Danmu text cannot be empty":"彈幕文本不能為空","The length of the danmu does not exceed":"彈幕文本字數不能超過","Danmu speed synchronous playback multiple":"彈幕速度同步播放倍數"}};function a(t){var e=t.i18n,n=t.events.proxy;return{name:"danmuku-opacity",index:10,html:'<div class="art-setting-header">'.concat(e.get("Danmu opacity"),': <span class="art-value">100</span>%</div><div class="art-setting-range"><input type="range" value="1" min="0.1" max="1" step="0.1"></div>'),mounted:function(e){var i=e.querySelector("input[type=range]"),r=e.querySelector(".art-value");n(i,"change",(function(){var e=i.value;r.innerText=100*Number(e),t.plugins.artplayerPluginDanmuku.config({opacity:Number(e)})})),t.on("artplayerPluginDanmuku:config",(function(t){i.value!==t.opacity&&(i.value=t.opacity,r.innerText=100*t.opacity)}))}}}function o(t){var e=t.i18n,n=t.events.proxy;return{name:"danmuku-size",index:11,html:'<div class="art-setting-header">'.concat(e.get("Danmu size"),': <span class="art-value">25</span>px</div><div class="art-setting-range"><input type="range" value="25" min="14" max="30" step="1"></div>'),mounted:function(e){var i=e.querySelector("input[type=range]"),r=e.querySelector(".art-value");n(i,"change",(function(){var e=i.value;r.innerText=e,t.plugins.artplayerPluginDanmuku.config({fontSize:Number(e)})})),t.on("artplayerPluginDanmuku:config",(function(t){i.value!==t.fontSize&&(i.value=t.fontSize,r.innerText=t.fontSize)}))}}}function u(t){var e=t.i18n,n=t.events.proxy;return{name:"danmuku-speed",index:12,html:'<div class="art-setting-header">'.concat(e.get("Danmu speed"),': <span class="art-value">5</span>s</div><div class="art-setting-range"><input type="range" value="5" min="1" max="10" step="1"></div>'),mounted:function(e){var i=e.querySelector("input[type=range]"),r=e.querySelector(".art-value");n(i,"change",(function(){var e=i.value;r.innerText=e,t.plugins.artplayerPluginDanmuku.config({speed:Number(e)})})),t.on("artplayerPluginDanmuku:config",(function(t){i.value!==t.speed&&(i.value=t.speed,r.innerText=t.speed)}))}}}function s(t){var e=t.i18n,n=t.events.proxy;return{name:"danmuku-synchronousPlayback",index:13,html:'<label class="art-setting-checkbox"><input type="checkbox"/>'.concat(e.get("Danmu speed synchronous playback multiple"),"</label>"),mounted:function(e){var i=e.querySelector("input[type=checkbox]");n(i,"change",(function(){t.plugins.artplayerPluginDanmuku.config({synchronousPlayback:i.checked})})),t.on("artplayerPluginDanmuku:config",(function(t){i.checked!==t.synchronousPlayback&&(i.checked=t.synchronousPlayback)}))}}}function l(t,e,n){return t.filter((function(t){return t.$state===e})).map(n)}function c(t,e){var n=t.getBoundingClientRect();return e?n[e]:n}var p=function(t){if(Array.isArray(t))return t};var f=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(i=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{i||null==u.return||u.return()}finally{if(r)throw a}}return n}};var m=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i};var h=function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}};var d=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var y=function(t,e){return p(t)||f(t,e)||h(t,e)||d()};function g(t){switch(t){case 1:case 2:case 3:return 0;case 4:case 5:return 1;default:return 0}}function v(t){return fetch(t).then((function(t){return t.text()})).then((function(t){return function(t){if("string"!=typeof t)return[];var e=t.match(/<d([\S ]*?>[\S ]*?)<\/d>/gi);return e.length?e.map((function(t){var e=t.match(/<d p="(.+)">(.+)<\/d>/),n=y(e,3),i=n[1],r=n[2],a=i.split(",");return 8===a.length&&r.trim()?{text:r,time:Number(a[0]),mode:g(Number(a[1])),fontSize:Number(a[2]),color:"#".concat(Number(a[3]).toString(16)),timestamp:Number(a[4]),pool:Number(a[5]),userID:a[6],rowID:Number(a[7])}:null})):[]}(t)}))}function b(t,e){var n=y(t.option.margin,2),i=n[0],r=n[1],a=c(t.art.template.$player),o=t.queue.filter((function(t){return t.mode===e.mode&&"emit"===t.$state&&t.$ref&&t.$ref.style.fontSize===e.$ref.style.fontSize&&parseFloat(t.$ref.style.top)<=a.height-r})).map((function(t){var e=c(t.$ref),n=e.width,i=e.height,r=e.top-a.top,o=e.left-a.left;return{top:r,left:o,height:i,width:n,right:a.width-o-n}})).sort((function(t,e){return t.top-e.top}));return 0===o.length?i:(o.unshift({top:0,left:0,right:0,height:i,width:a.width}),o.push({top:a.height-r,left:0,right:0,height:r,width:a.width}),function(t){for(var e=0,n={},i=0;i<t.length;i+=1){var r=t[i];n[r.top]?n[r.top].push(r):n[r.top]=[r]}for(var a=Object.keys(n),o=0,u=1;u<t.length;u+=1){var s=t[u],l=t[u-1],c=l.top+l.height,p=s.top-c;p>o&&(e=c,o=p)}if(0===e)for(var f=0,m=0;m<a.length;m+=1){for(var h=t[0].width,d=a[m],g=n[d],v=0;v<g.length;v+=1){var b=g[v];b.right<h&&(h=b.right)}h>f&&(f=h,e=y(g,1)[0].top)}if(0===e){var x=a.filter((function(t,e){return 0!==e&&e!==a.length-1})).sort((function(t,e){return n[t].length-n[e].length}));e=y(x,1)[0]}return e}(o))}function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function $(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?x(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var k=function(){function t(n,i){var l=this;e(this,t),n.i18n.update(r),n.setting.add(a),n.setting.add(o),n.setting.add(u),n.setting.add(s),this.art=n,this.queue=[],this.option={},this.config(i),this.isStop=!1,this.isHide=!1,this.animationFrameTimer=null,this.$danmuku=n.template.$danmuku,n.on("video:play",this.start.bind(this)),n.on("video:playing",this.start.bind(this)),n.on("video:pause",this.stop.bind(this)),n.on("video:waiting",this.stop.bind(this)),n.on("resize",this.resize.bind(this)),n.on("destroy",this.stop.bind(this)),"function"==typeof this.option.danmuku?this.option.danmuku().then((function(t){t.forEach(l.emit.bind(l)),n.emit("artplayerPluginDanmuku:loaded")})):"string"==typeof this.option.danmuku?v(this.option.danmuku).then((function(t){t.forEach(l.emit.bind(l)),n.emit("artplayerPluginDanmuku:loaded")})):(this.option.danmuku.forEach(this.emit.bind(this)),n.emit("artplayerPluginDanmuku:loaded"))}return i(t,[{key:"config",value:function(e){var n=this.art.constructor,i=n.utils.clamp,r=n.validator;this.option=Object.assign({},t.option,this.option,e),r(this.option,t.scheme),this.option.speed=i(this.option.speed,1,10),this.option.maxlength=i(this.option.maxlength,10,100),this.option.margin[0]=i(this.option.margin[0],0,100),this.option.margin[1]=i(this.option.margin[1],0,100),this.option.opacity=i(this.option.opacity,0,1),this.option.fontSize=i(this.option.fontSize,12,30),this.art.emit("artplayerPluginDanmuku:config",this.option)}},{key:"continue",value:function(){l(this.queue,"stop",(function(t){switch(t.$state="emit",t.$lastStartTime=Date.now(),t.mode){case 0:t.$ref.style.transform="translateX(".concat(-t.$restWidth,"px) translateY(0px) translateZ(0px)"),t.$ref.style.transition="transform ".concat(t.$restTime,"s linear 0s")}}))}},{key:"suspend",value:function(){var t=this.art.template.$player;l(this.queue,"emit",(function(e){switch(e.$state="stop",e.mode){case 0:var n=c(t),i=n.left,r=n.width-(c(e.$ref).left-i)+5;e.$ref.style.transform="translateX(".concat(-r,"px) translateY(0px) translateZ(0px)"),e.$ref.style.transition="transform 0s linear 0s"}}))}},{key:"resize",value:function(){var t=c(this.art.template.$player,"width");l(this.queue,"wait",(function(e){e.$ref&&(e.$ref.style.border="none",e.$ref.style.left="".concat(t,"px"),e.$ref.style.marginLeft="0px",e.$ref.style.transform="translateX(0px) translateY(0px) translateZ(0px)",e.$ref.style.transition="transform 0s linear 0s")}))}},{key:"update",value:function(){var t=this,e=this.art,n=e.player,i=e.template.$player;this.animationFrameTimer=window.requestAnimationFrame((function(){if(n.playing&&!t.isHide){var e=c(i,"width");l(t.queue,"emit",(function(t){t.$restTime-=(Date.now()-t.$lastStartTime)/1e3,t.$lastStartTime=Date.now(),t.$restTime<=0&&(t.$state="wait",t.$ref.style.border="none",t.$ref.style.left="".concat(e,"px"),t.$ref.style.marginLeft="0px",t.$ref.style.transform="translateX(0px) translateY(0px) translateZ(0px)",t.$ref.style.transition="transform 0s linear 0s")})),t.queue.filter((function(t){return n.currentTime+.1>=t.time&&t.time>=n.currentTime-.1&&"wait"===t.$state})).forEach((function(i){i.$ref=function(t){var e=t.find((function(t){return t.$ref&&"wait"===t.$state}));if(e){var n=e.$ref;return e.$ref=null,n}var i=document.createElement("div");return i.style.cssText='\n        user-select: none;\n        position: absolute;\n        white-space: pre;\n        pointer-events: none;\n        perspective: 500px;\n        display: inline-block;\n        will-change: transform;\n        font-family: SimHei, "Microsoft JhengHei", Arial, Helvetica, sans-serif;\n        font-weight: normal;\n        line-height: 1.125;\n        text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;\n    ',i}(t.queue),t.$danmuku.appendChild(i.$ref),i.$ref.style.opacity=t.option.opacity,i.$ref.style.fontSize="".concat(t.option.fontSize,"px"),i.$ref.innerText=i.text,i.$ref.style.color=i.color||"#fff",i.$ref.style.border=i.border?"1px solid ".concat(i.color||"#fff"):"none",i.$restTime=t.option.synchronousPlayback&&n.playbackRate?t.option.speed/Number(n.playbackRate):t.option.speed,i.$lastStartTime=Date.now();var r=c(i.$ref,"width"),a=b(t,i);switch(i.$state="emit",i.mode){case 0:i.$restWidth=e+r+5,i.$ref.style.left="".concat(e,"px"),i.$ref.style.top="".concat(a,"px"),i.$ref.style.transform="translateX(".concat(-i.$restWidth,"px) translateY(0px) translateZ(0px)"),i.$ref.style.transition="transform ".concat(i.$restTime,"s linear 0s");break;case 1:i.$ref.style.top="".concat(a,"px"),i.$ref.style.left="50%",i.$ref.style.marginLeft="-".concat(r/2,"px")}}))}t.isStop||t.update()}))}},{key:"stop",value:function(){this.isStop=!0,this.suspend(),window.cancelAnimationFrame(this.animationFrameTimer),this.art.emit("artplayerPluginDanmuku:stop")}},{key:"start",value:function(){this.isStop=!1,this.continue(),this.update(),this.art.emit("artplayerPluginDanmuku:start")}},{key:"show",value:function(){this.isHide=!1,this.$danmuku.style.display="block",this.art.emit("artplayerPluginDanmuku:show")}},{key:"hide",value:function(){this.isHide=!0,this.$danmuku.style.display="none",this.art.emit("artplayerPluginDanmuku:hide")}},{key:"emit",value:function(t){var e=this.art,n=e.notice,i=e.player,r=e.i18n,a=this.art.constructor,o=a.utils.clamp;(0,a.validator)(t,{text:"string",mode:"number|undefined",color:"string|undefined",time:"number|undefined",border:"boolean|undefined"}),t.text.trim()?t.text.length>this.option.maxlength?n.show="".concat(r.get("The length of the danmu does not exceed")," ").concat(this.option.maxlength):(t.time?t.time=o(t.time,0,1/0):t.time=i.currentTime+.5,this.queue.push($($({mode:0},t),{},{$state:"wait",$ref:null,$restTime:0,$lastStartTime:0,$restWidth:0}))):n.show=r.get("Danmu text cannot be empty")}}],[{key:"option",get:function(){return{danmuku:[],speed:5,maxlength:50,margin:[10,100],opacity:1,fontSize:25,synchronousPlayback:!1}}},{key:"scheme",get:function(){return{danmuku:"array|function|string",speed:"number",maxlength:"number",margin:"array",opacity:"number",fontSize:"number",synchronousPlayback:"boolean"}}}]),t}();return function(t){return function(e){var n=new k(e,t);return{name:"artplayerPluginDanmuku",emit:n.emit.bind(n),config:n.config.bind(n),hide:n.hide.bind(n),show:n.show.bind(n),get isHide(){return n.isHide}}}}}));
