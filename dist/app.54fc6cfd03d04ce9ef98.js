(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t}var n,r,o;return n=e,(r=[{key:"saludo",value:function(){return"hola desde webpack con ".concat(this.name)}}])&&t(n.prototype,r),o&&t(n,o),e}();const r=e.p+"assets/img1.jpg";alert("undefined"),document.getElementById("img").innerHTML='<img src="'.concat(r,' "/>');var o,a=[1,2,3];console.log("holaa"),(o=console).log.apply(o,a);var c=document.getElementById("app"),i=new n("javaScript");c.innerHTML="".concat(i.saludo())})();