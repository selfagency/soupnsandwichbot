#!/usr/bin/env node
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){var n=this,a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,u=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){var e=c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.next=4,g("https://en.wikipedia.org/wiki/List_of_soups");case 4:return e.t1=e.sent,e.next=7,g("https://en.wikipedia.org/wiki/List_of_sandwiches");case 7:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.abrupt("return",e.t0.all.call(e.t0,e.t3));case 12:throw e.prev=12,e.t4=e.catch(0),e.t4;case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}(),o=function(){var e=c(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=new RegExp(/(?:\.)([0-9a-z]+$)/),n=void 0,a=void 0,!d.str(t)){e.next=21;break}if(n=r.exec(t),d.bad(n)){e.next=9;break}n=n[1].toLowerCase(),e.next=10;break;case 9:return e.abrupt("return",null);case 10:if(!d.str(n)){e.next=18;break}if(t=t.replace(/thumb\//g,"").replace(/(\/\d*px-)/g,"/").replace(/\/[a-zA-Z0-9%$!#^&()_.-]*.{3,4}$/,""),a="./img/"+t.replace(/\/|\./g,"_")+"."+n,!l.existsSync(a)){e.next=15;break}return e.abrupt("return",a);case 15:return e.abrupt("return",p({responseType:"stream",url:"https://"+t,method:"get"}).then(function(e){return e.data.pipe(l.createWriteStream(a)),a}));case 18:return e.abrupt("return",null);case 19:e.next=22;break;case 21:return e.abrupt("return",null);case 22:e.next=27;break;case 24:throw e.prev=24,e.t0=e.catch(0),e.t0;case 27:case"end":return e.stop()}},e,this,[[0,24]])}));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=c(regeneratorRuntime.mark(function e(t){var r,n,a,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=[],e.prev=1,n=0;case 3:if(!(n<=t.length)){e.next=15;break}if(n!==t.length){e.next=6;break}return e.abrupt("return",r);case 6:if(a=t[n],d.bad(a)){e.next=12;break}return e.next=10,b.post("media",{file:l.createReadStream(a)});case 10:u=e.sent,/missing/g.test(u.data.url)?r.push(void 0):r.push(u.data.id);case 12:n++,e.next=3;break;case 15:e.next=20;break;case 17:throw e.prev=17,e.t0=e.catch(1),e.t0;case 20:case"end":return e.stop()}},e,this,[[1,17]])}));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=c(regeneratorRuntime.mark(function e(t,r){var n,u,p,f,l,h,v,m,x,g,k,R,_,O=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=w(t),u=a(n,2),p=u[0],f=u[1],l=w(r),h=a(l,2),v=h[0],m=h[1],x=[f,m],e.next=6,Promise.all([o(x[0]),o(x[1])]);case 6:return g=e.sent,e.next=9,i(g);case 9:return k=e.sent,R="🥣  "+y(p.Name)+(d.bad(p.Origin)?"":" ["+y(p.Origin)+"]")+" n' 🥪  "+y(v.Name)+(d.bad(v.Origin)?"":" ["+y(v.Origin)+"]"),console.log("status: "+R),e.next=14,b.post("statuses",{status:R,media_ids:k});case 14:_=e.sent,/error/.test(_.data)&&console.log(_.data),setTimeout(c(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t,r);case 2:case"end":return e.stop()}},e,O)})),432e5),e.next=22;break;case 19:throw e.prev=19,e.t0=e.catch(0),e.t0;case 22:case"end":return e.stop()}},e,this,[[0,19]])}));return function(t,r){return e.apply(this,arguments)}}();function c(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(a,u){try{var o=t[a](u),i=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}}r(3).config();var p=r(4),f=r(5).XmlEntities,l=r(6),d=r(7),h=r(8),v=r(9),m=r(10),x=new f,b=new h({access_token:process.env.ACCESS_TOKEN,api_url:"https://bofa.lol/api/v1/"});function g(e){var t=this;try{return new Promise(function(){var r=c(regeneratorRuntime.mark(function r(n,a){var u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get(e);case 2:u=(u=t.sent).data,u=m.convert(u,{stripHtmlFromCells:!1,stripHtmlFromHeadings:!0}),/error/.test(u)&&a(u),n(u[0]);case 7:case"end":return t.stop()}},r,t)}));return function(e,t){return r.apply(this,arguments)}}())}catch(e){throw e}}function w(e){var t=new RegExp(/(?:src=\"\/\/)(.*?)(?:\")/g);try{var r=e[Math.floor(Math.random()*e.length)],n=t.exec(r.Image);return[r,d.bad(n)?null:n[1]]}catch(e){throw e}}function y(e){return v(x.decode(e).replace(/\[.*\]/,"").replace(/\n/,""))}c(regeneratorRuntime.mark(function e(){var t,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:return t=e.sent,r=a(t,2),o=r[0],i=r[1],e.next=9,s(o,i);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}},e,n,[[0,11]])}))()},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("html-entities")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("typa")},function(e,t){e.exports=require("mastodon-api")},function(e,t){e.exports=require("striptags")},function(e,t){e.exports=require("tabletojson")}]);
//# sourceMappingURL=index.js.map