(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var bf=require('./brainfucker.js');

function process_bf(elem){
	let code=elem.innerText;
	var data='';
	var reverse=false;
	var ng=false;
	var oenv=false;
	if (elem.hasAttributes()) {
       let attrs = elem.attributes;
       var output = "";
       for(var i = attrs.length - 1; i >= 0; i--) {
         output += attrs[i].name + "->" + attrs[i].value;
         if(attrs[i].name=='reversefuck') reverse=true;
         if(attrs[i].name=='ng') ng=true;
         if(attrs[i].name=='data') data=attrs[i].value;
         if(attrs[i].name=='oenv') oenv=true;;
       }
     }
     let ret=bf.run(code,data,ng,reverse);
     if(oenv) elem.innerHTML=ret.env; else elem.innerHTML=ret.out;
}
function bf_loader(){
	let x=document.getElementsByTagName('brainfuck');
	for (var i = 0, len = x.length; i < len; i++) {
  	process_bf(x[i]);
	}
}
document.addEventListener('DOMContentLoaded', bf_loader, false);

},{"./brainfucker.js":2}],2:[function(require,module,exports){
!function(){return function r(e,n,t){function a(u,i){if(!n[u]){if(!e[u]){var f="function"==typeof require&&require;if(!i&&f)return f(u,!0);if(o)return o(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[u]={exports:{}};e[u][0].call(s.exports,function(r){return a(e[u][1][r]||r)},s,s.exports,r,e,n,t)}return n[u].exports}for(var o="function"==typeof require&&require,u=0;u<t.length;u++)a(t[u]);return a}}()({1:[function(r,e,n){var t=r("./brainfucker.js");function a(r){let e=r.innerText;var n="",a=!1,o=!1,u=!1;if(r.hasAttributes()){let e=r.attributes;for(var i=e.length-1;i>=0;i--)e[i].name+"->"+e[i].value,"reversefuck"==e[i].name&&(a=!0),"ng"==e[i].name&&(o=!0),"data"==e[i].name&&(n=e[i].value),"oenv"==e[i].name&&(u=!0)}let f=t.run(e,n,o,a);r.innerHTML=u?f.env:f.out}document.addEventListener("DOMContentLoaded",function(){let r=document.getElementsByTagName("brainfuck");for(var e=0,n=r.length;e<n;e++)a(r[e])},!1)},{"./brainfucker.js":2}],2:[function(r,e,n){!function e(n,t,a){function o(i,f){if(!t[i]){if(!n[i]){var c="function"==typeof r&&r;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var v=t[i]={exports:{}};n[i][0].call(v.exports,function(r){return o(n[i][1][r]||r)},v,v.exports,e,n,t,a)}return t[i].exports}for(var u="function"==typeof r&&r,i=0;i<a.length;i++)o(a[i]);return o}({1:[function(r,e,n){var t=r("./brainfucker.js");function a(r){let e=r.innerText;var n="",a=!1,o=!1,u=!1;if(r.hasAttributes()){let e=r.attributes;for(var i=e.length-1;i>=0;i--)e[i].name,e[i].value,"reversefuck"==e[i].name&&(a=!0),"ng"==e[i].name&&(o=!0),"data"==e[i].name&&(n=e[i].value),"oenv"==e[i].name&&(u=!0)}let f=t.run(e,n,o,a);r.innerHTML=u?f.env:f.out}document.addEventListener("DOMContentLoaded",function(){let r=document.getElementsByTagName("brainfuck");for(var e=0,n=r.length;e<n;e++)a(r[e])},!1)},{"./brainfucker.js":2}],2:[function(r,e,n){!function e(n,t,a){function o(i,f){if(!t[i]){if(!n[i]){var c="function"==typeof r&&r;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var v=t[i]={exports:{}};n[i][0].call(v.exports,function(r){return o(n[i][1][r]||r)},v,v.exports,e,n,t,a)}return t[i].exports}for(var u="function"==typeof r&&r,i=0;i<a.length;i++)o(a[i]);return o}({1:[function(r,e,n){var t=r("./brainfucker.js");function a(r){let e=r.innerText;var n="",a=!1,o=!1,u=!1;if(r.hasAttributes()){let e=r.attributes;for(var i=e.length-1;i>=0;i--)e[i].name,e[i].value,"reversefuck"==e[i].name&&(a=!0),"ng"==e[i].name&&(o=!0),"data"==e[i].name&&(n=e[i].value),"oenv"==e[i].name&&(u=!0)}let f=t.run(e,n,o,a);r.innerHTML=u?f.env:f.out}document.addEventListener("DOMContentLoaded",function(){let r=document.getElementsByTagName("brainfuck");for(var e=0,n=r.length;e<n;e++)a(r[e])},!1)},{"./brainfucker.js":2}],2:[function(r,e,n){e.exports=new class{char2bf(r){var e="";let n=r.charCodeAt(0),t=Math.floor(n/10),a=n%10;return e+=Array(11).join("+"),e+="[>",e+=Array(t+1).join("+"),e+="<-]>",(e+=Array(a+1).join("+"))+".[-]"}string2bf(r){for(var e="",n=0;n<r.length;n++)e+=this.char2bf(r.charAt(n));return e}pretty_bf(r){return this.string2bf(r).match(/.{1,5}/g).join(" ")}trr(r,e){return e?{"+":"-","-":"+",".":",",",":".","!":"?","?":"!","<":">",">":"<","[":"]","]":"["}[r]:r}run(r,e,n,t){void 0===n&&(n=!1),void 0===e&&(e=null),void 0===t&&(t=!1);var a=0,o=0,u=[];u=null==e?[]:[...e].map(r=>r.charCodeAt(0));for(var i="";a<r.length;){switch(isNaN(u[o])&&(u[o]=0),this.trr(r[a],t),this.trr(r[a],t)){case"+":u[o]++;break;case"-":u[o]--;break;case">":++o;break;case"<":--o;break;case".":i+=String.fromCharCode(u[o]);break;case",":u[o]=prompt("input a character",0);break;case"!":n&&(i+=u[o]);break;case"[":if(0==u[o]){var f=1;for(a++;f;)"["==this.trr(r[a],t)&&f++,"]"==this.trr(r[a],t)&&f--,++a;a-=2}break;case"]":if(0!=u[o])for(f=1,a--;f;)"]"==this.trr(r[a],t)&&f++,"["==this.trr(r[a],t)&&f--,--a}a++}return{out:i,env:e=u.map(r=>String.fromCharCode(r)).join("")}}out(r,e,n,t){return this.run(r,e,n,t).out}}},{}]},{},[1])},{}]},{},[1])},{}]},{},[1]);
},{}]},{},[1]);
