(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(537),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(741),t.b),l=new URL(t(654),t.b),u=i()(o()),p=s()(d),A=s()(l);u.push([n.id,"\n@font-face {\n  font-family: projectFont;\n  src: url("+p+");\n}\n\nbody {\n  background-color: salmon;\n  margin: 0;\n  background-image: url("+A+");\n  overflow: hidden;\n  font-family: projectFont;\n}\n\n#content {\n  display: grid;\n  place-items: center;\n  place-content: center;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n}\n\n.header {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: whitesmoke;\n  font-size: 5rem;\n  padding: 1rem;\n}\n\n.tab {\n  font-size: 2.5rem;\n  color: sandybrown;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.tab:hover {\n  transform: scale(1.2);\n}\n\n.mainContent {\n  grid-row: 3 / 6;\n  grid-column: 2 / 3;\n  font-size: 30px;\n  width: 900px;\n  line-height: 40px;\n  font-style: italic;\n  background-color: rgba(0,0,0,0.4);\n  color: bisque;\n  padding: 15px;\n  border-radius: 30px;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n.none {\n  display: none;\n}\n\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:";AACA;EACE,wBAAwB;EACxB,4CAA0C;AAC5C;;AAEA;EACE,wBAAwB;EACxB,SAAS;EACT,yDAAuD;EACvD,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,iCAAiC;EACjC,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,sEAAsE;AACxE;;AAEA;EACE,aAAa;AACf",sourcesContent:["\n@font-face {\n  font-family: projectFont;\n  src: url('../assets/Queensides-3z7Ey.ttf');\n}\n\nbody {\n  background-color: salmon;\n  margin: 0;\n  background-image: url('../assets/background-image.jpg');\n  overflow: hidden;\n  font-family: projectFont;\n}\n\n#content {\n  display: grid;\n  place-items: center;\n  place-content: center;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n}\n\n.header {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: whitesmoke;\n  font-size: 5rem;\n  padding: 1rem;\n}\n\n.tab {\n  font-size: 2.5rem;\n  color: sandybrown;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.tab:hover {\n  transform: scale(1.2);\n}\n\n.mainContent {\n  grid-row: 3 / 6;\n  grid-column: 2 / 3;\n  font-size: 30px;\n  width: 900px;\n  line-height: 40px;\n  font-style: italic;\n  background-color: rgba(0,0,0,0.4);\n  color: bisque;\n  padding: 15px;\n  border-radius: 30px;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n.none {\n  display: none;\n}\n\n"],sourceRoot:""}]);const f=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(A);else{var f=o(A,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},741:(n,e,t)=>{n.exports=t.p+"7d9a9d8c0a15cfdd1c15.ttf"},654:(n,e,t)=>{n.exports=t.p+"9949fae21bf0634da117.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),A=t(890),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(A.Z,f),A.Z&&A.Z.locals&&A.Z.locals;window.addEventListener("load",(function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("header"),e.innerText="Ratatotuile",n.append(e)}(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","menuTab"),e.innerText="Menu",e.classList.add("tab"),n.append(e)}(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","homeTab"),e.innerText="Home",e.classList.add("tab"),n.append(e)}(),function(){const n=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","contactUs"),e.innerText="Contact us",e.classList.add("tab"),n.append(e)}(),void function(){const n=document.querySelector("#content"),e=document.createElement("div");e.innerText="Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.\n",e.classList.add("mainContent"),n.append(e)}()))})()})();
//# sourceMappingURL=index.superMain.js.map