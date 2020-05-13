function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function asyncGeneratorStep(n,t,e,r,o,c,i){try{var a=n[c](i),u=a.value}catch(s){return void e(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var c=n.apply(t,e);function i(n){asyncGeneratorStep(c,r,o,i,a,"next",n)}function a(n){asyncGeneratorStep(c,r,o,i,a,"throw",n)}i(void 0)}))}}function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var r="".concat(n*t/e-n,"ms"),o=2*Math.PI*t/e;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var r=t/e,o="".concat(n*r-n,"ms"),c=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(c),"px"),left:"".concat(9*Math.cos(c),"px"),"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:"".concat(9-9*t,"px"),"animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(n*t/e-n,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(n*t/e-n,"ms")}}}}}},KwJk:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return a}));var r=function(n,t){return null!==t.closest(n)},o=function(n){return"string"==typeof n&&n.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(n),!0):void 0},c=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},i=/^[a-z][a-z0-9+\-.]*:/,a=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,r){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||i.test(t)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),o.push(t,r)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}()},NqGI:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));var r=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,r,o,c){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,r,c,o));case 2:if("string"==typeof r||r instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:if(i="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,o&&o.forEach((function(n){return i.classList.add(n)})),c&&Object.assign(i,c),e.appendChild(i),n.t0=i.componentOnReady,!n.t0){n.next=12;break}return n.next=12,i.componentOnReady();case 12:return n.abrupt("return",i);case 13:case"end":return n.stop()}}),n)})));return function(t,e,r,o,c){return n.apply(this,arguments)}}(),o=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},QQAA:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("fXoL"),o=function(){var n=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Db({type:n,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(n,t){1&n&&(r.Mb(0,"div",0),r.Mb(1,"strong"),r.bc(2),r.Lb(),r.Mb(3,"p"),r.bc(4,"Explore "),r.Mb(5,"a",1),r.bc(6,"UI Components"),r.Lb(),r.Lb(),r.Lb()),2&n&&(r.zb(2),r.cc(t.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n}()},fzvj:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return r}));var r=function(){var n=window.TapticEngine;n&&n.selection()},o=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},c=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},qtYk:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("ofXK"),o=e("3Pt+"),c=e("TEn/"),i=e("fXoL"),a=function(){var n=function n(){_classCallCheck(this,n)};return n.\u0275mod=i.Hb({type:n}),n.\u0275inj=i.Gb({factory:function(t){return new(t||n)},imports:[[r.b,o.a,c.l]]}),n}()}}]);