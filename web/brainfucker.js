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
!function(){return function r(e,t,n){function a(i,u){if(!t[i]){if(!e[i]){var f="function"==typeof require&&require;if(!u&&f)return f(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var s=t[i]={exports:{}};e[i][0].call(s.exports,function(r){return a(e[i][1][r]||r)},s,s.exports,r,e,t,n)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}}()({1:[function(r,e,t){var n=r("./brainfucker.js");function a(r){let e=r.innerText;var t="",a=!1,o=!1,i=!1;if(r.hasAttributes()){let e=r.attributes;for(var u=e.length-1;u>=0;u--)e[u].name+"->"+e[u].value,"reversefuck"==e[u].name&&(a=!0),"ng"==e[u].name&&(o=!0),"data"==e[u].name&&(t=e[u].value),"oenv"==e[u].name&&(i=!0)}let f=n.run(e,t,o,a);r.innerHTML=i?f.env:f.out}document.addEventListener("DOMContentLoaded",function(){let r=document.getElementsByTagName("brainfuck");for(var e=0,t=r.length;e<t;e++)a(r[e])},!1)},{"./brainfucker.js":2}],2:[function(r,e,t){e.exports=new class{char2bf(r){var e="";let t=r.charCodeAt(0),n=Math.floor(t/10),a=t%10;return e+=Array(11).join("+"),e+="[>",e+=Array(n+1).join("+"),e+="<-]>",e+=Array(a+1).join("+"),e+=".[-]"}string2bf(r){for(var e="",t=0;t<r.length;t++)e+=this.char2bf(r.charAt(t));return e}pretty_bf(r){return this.string2bf(r).match(/.{1,5}/g).join(" ")}trr(r,e){return e?{"+":"-","-":"+",".":",",",":".","!":"?","?":"!","<":">",">":"<","[":"]","]":"["}[r]:r}run(r,e,t,n){void 0===t&&(t=!1),void 0===e&&(e=null),void 0===n&&(n=!1);var a=0,o=0,i=[];i=null==e?[]:[...e].map(r=>r.charCodeAt(0));for(var u="";a<r.length;){switch(isNaN(i[o])&&(i[o]=0),this.trr(r[a],n),this.trr(r[a],n)){case"+":i[o]++;break;case"-":i[o]--;break;case">":++o;break;case"<":--o;break;case".":u+=String.fromCharCode(i[o]);break;case",":i[o]=prompt("input a character",0);break;case"!":t&&(u+=i[o]);break;case"[":if(0==i[o]){var f=1;for(a++;f;)"["==this.trr(r[a],n)&&f++,"]"==this.trr(r[a],n)&&f--,++a;a-=2}break;case"]":if(0!=i[o])for(f=1,a--;f;)"]"==this.trr(r[a],n)&&f++,"["==this.trr(r[a],n)&&f--,--a}a++}return{out:u,env:e=i.map(r=>String.fromCharCode(r)).join("")}}out(r,e,t,n){return this.run(r,e,t,n).out}}},{}]},{},[1]);
},{}]},{},[1]);
