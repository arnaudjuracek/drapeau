!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var n=e(function(e,n){var r="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="[object Map]",u="[object Set]",c=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[a]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[u]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var h="object"==typeof self&&self&&self.Object===Object&&self,p="object"==typeof t&&t&&t.Object===Object&&t||h||Function("return this")(),d=n&&!n.nodeType&&n,v=d&&e&&!e.nodeType&&e,b=v&&v.exports===d;function g(t,e){return t.set(e[0],e[1]),t}function y(t,e){return t.add(e),t}function _(t,e,n,r){var o=-1,i=t?t.length:0;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function j(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function m(t,e){return function(n){return t(e(n))}}function A(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var x,O=Array.prototype,S=Function.prototype,E=Object.prototype,M=p["__core-js_shared__"],F=(x=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",z=S.toString,I=E.hasOwnProperty,T=E.toString,U=RegExp("^"+z.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),k=b?p.Buffer:void 0,N=p.Symbol,D=p.Uint8Array,P=m(Object.getPrototypeOf,Object),R=Object.create,C=E.propertyIsEnumerable,H=O.splice,L=Object.getOwnPropertySymbols,W=k?k.isBuffer:void 0,$=m(Object.keys,Object),B=pt(p,"DataView"),q=pt(p,"Map"),V=pt(p,"Promise"),G=pt(p,"Set"),X=pt(p,"WeakMap"),Q=pt(Object,"create"),J=yt(B),K=yt(q),Y=yt(V),Z=yt(G),tt=yt(X),et=N?N.prototype:void 0,nt=et?et.valueOf:void 0;function rt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function it(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function at(t){this.__data__=new ot(t)}function ut(t,e,n){var r=t[e];I.call(t,e)&&_t(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function ct(t,e){for(var n=t.length;n--;)if(_t(t[n][0],e))return n;return-1}function ft(t,e,n,f,s,h,p){var d;if(f&&(d=h?f(t,s,h,p):f(t)),void 0!==d)return d;if(!xt(t))return t;var v=wt(t);if(v){if(d=function(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&I.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(t),!e)return function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t,d)}else{var b=vt(t),m=b==o||b==i;if(mt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if("[object Object]"==b||b==r||m&&!h){if(w(t))return h?t:{};if(d=function(t){return"function"!=typeof t.constructor||gt(t)?{}:xt(e=P(t))?R(e):{};var e}(m?{}:t),!e)return function(t,e){return lt(t,dt(t),e)}(t,function(t,e){return t&&lt(e,Ot(e),t)}(d,t))}else{if(!l[b])return h?t:{};d=function(t,e,n,r){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return st(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var n=e?st(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var n=e?st(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case a:return function(t,e,n){return _(e?n(j(t),!0):j(t),g,new t.constructor)}(t,r,n);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,c.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,n){return _(e?n(A(t),!0):A(t),y,new t.constructor)}(t,r,n);case"[object Symbol]":return nt?Object(nt.call(t)):{}}}(t,b,ft,e)}}p||(p=new at);var x=p.get(t);if(x)return x;if(p.set(t,d),!v)var O=n?function(t){return function(t,e,n){var r=e(t);return wt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Ot,dt)}(t):Ot(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n););}(O||t,function(r,o){O&&(r=t[o=r]),ut(d,o,ft(r,e,n,f,o,t,p))}),d}function st(t){var e=new t.constructor(t.byteLength);return new D(e).set(new D(t)),e}function lt(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var a=e[o],u=r?r(n[a],t[a],a,n,t):void 0;ut(n,a,void 0===u?t[a]:u)}return n}function ht(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function pt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!xt(t)||(e=t,F&&F in e))&&(At(t)||w(t)?U:f).test(yt(t));var e}(n)?n:void 0}rt.prototype.clear=function(){this.__data__=Q?Q(null):{}},rt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},rt.prototype.get=function(t){var e=this.__data__;if(Q){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return I.call(e,t)?e[t]:void 0},rt.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:I.call(e,t)},rt.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},ot.prototype.clear=function(){this.__data__=[]},ot.prototype.delete=function(t){var e=this.__data__,n=ct(e,t);return!(n<0||(n==e.length-1?e.pop():H.call(e,n,1),0))},ot.prototype.get=function(t){var e=this.__data__,n=ct(e,t);return n<0?void 0:e[n][1]},ot.prototype.has=function(t){return ct(this.__data__,t)>-1},ot.prototype.set=function(t,e){var n=this.__data__,r=ct(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},it.prototype.clear=function(){this.__data__={hash:new rt,map:new(q||ot),string:new rt}},it.prototype.delete=function(t){return ht(this,t).delete(t)},it.prototype.get=function(t){return ht(this,t).get(t)},it.prototype.has=function(t){return ht(this,t).has(t)},it.prototype.set=function(t,e){return ht(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new ot},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var n=this.__data__;if(n instanceof ot){var r=n.__data__;if(!q||r.length<199)return r.push([t,e]),this;n=this.__data__=new it(r)}return n.set(t,e),this};var dt=L?m(L,Object):function(){return[]},vt=function(t){return T.call(t)};function bt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function gt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||E)}function yt(t){if(null!=t){try{return z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function _t(t,e){return t===e||t!=t&&e!=e}(B&&"[object DataView]"!=vt(new B(new ArrayBuffer(1)))||q&&vt(new q)!=a||V&&"[object Promise]"!=vt(V.resolve())||G&&vt(new G)!=u||X&&"[object WeakMap]"!=vt(new X))&&(vt=function(t){var e=T.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?yt(n):void 0;if(r)switch(r){case J:return"[object DataView]";case K:return a;case Y:return"[object Promise]";case Z:return u;case tt:return"[object WeakMap]"}return e});var wt=Array.isArray;function jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!At(t)}var mt=W||function(){return!1};function At(t){var e=xt(t)?T.call(t):"";return e==o||e==i}function xt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ot(t){return jt(t)?function(t,e){var n=wt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&jt(t)}(t)&&I.call(t,"callee")&&(!C.call(t,"callee")||T.call(t)==r)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],o=n.length,i=!!o;for(var a in t)!I.call(t,a)||i&&("length"==a||bt(a,o))||n.push(a);return n}(t):function(t){if(!gt(t))return $(t);var e=[];for(var n in Object(t))I.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}e.exports=function(t){return ft(t,!0,!0)}}),r=e(function(t){var e=/\n/,n=/\s/;function r(t,e,n,r){var o=t.indexOf(e,n);return-1===o||o>r?r:o}function o(t){return n.test(t)}function i(t,e,n,r){return{start:e,end:e+Math.min(r,n-e)}}t.exports=function(e,n){return t.exports.lines(e,n).map(function(t){return e.substring(t.start,t.end)}).join("\n")},t.exports.lines=function(t,n){if(0===(n=n||{}).width&&"nowrap"!==n.mode)return[];t=t||"";var a="number"==typeof n.width?n.width:Number.MAX_VALUE,u=Math.max(0,n.start||0),c="number"==typeof n.end?n.end:t.length,f=n.mode,s=n.measure||i;return"pre"===f?function(t,n,r,o,i){for(var a=[],u=r,c=r;c<o&&c<n.length;c++){var f=n.charAt(c),s=e.test(f);if(s||c===o-1){var l=t(n,u,s?c:c+1,i);a.push(l),u=c+1}}return a}(s,t,u,c,a):function(t,e,n,i,a,u){var c=[],f=a;for("nowrap"===u&&(f=Number.MAX_VALUE);n<i&&n<e.length;){for(var s=r(e,"\n",n,i);n<s&&o(e.charAt(n));)n++;var l=t(e,n,s,f),h=n+(l.end-l.start),p=h+"\n".length;if(h<s){for(;h>n&&!o(e.charAt(h));)h--;if(h===n)p>n+"\n".length&&p--,h=p;else for(p=h;h>n&&o(e.charAt(h-"\n".length));)h--}if(h>=n){var d=t(e,n,h,f);c.push(d)}n=p}return c}(s,t,u,c,a,f)}}),o={HANGING_PUNCTUATION:{illegal:function(t){return t.lines.find(function(t){return/^\W/.test(t.value)})}},TRUNCATIONS:{illegal:function(t){var e=t.lines;return t.words.filter(function(t){return!e.find(function(e){return e.value.includes(t)})}).length>0}},WIDOWS:{weight:.01,value:function(){return 1},ignore:function(t){var e=t.lines,n=t.words;return!(e[e.length-1]===n[n.length-1])}},EOL_SHORT_WORDS:{weight:.5,ignore:function(t){return t.lines.length<=2},value:function(t){var e=t.lines;return 1-e.filter(function(t){return/\b\w{1,3}\s?$/.test(t.value)}).length/e.length}},UNBALANCED_LINES:{weight:.5,ignore:function(t){return t.lines.length<=2},value:function(t){var e=t.lines,n=Math.max.apply(Math,e.map(function(t){return t.width})),r=e.map(function(t){return t.width/n}),o=r.reduce(function(t,e){return t+e},0)/e.length;return 1-Math.sqrt(1/e.length*r.reduce(function(t,e){return t+Math.pow(e-o,2)}),0)/o}}},i="Changer d’ère: \nquels paysages climatiques de l’anthropocène ?",a=document.querySelector("canvas"),u=a.getContext("2d"),c=window.devicePixelRatio||1;function f(t,e){void 0===t&&(t=window.innerWidth),void 0===e&&(e=window.innerHeight),a.style.setProperty("--margin","20px"),a.width=(t-80)*c,a.height=(e-80)*c,a.style.width=a.width/c+"px",a.style.height=a.height/c+"px";var f=function(t,e){var i=void 0===e?{}:e,a=i.step,u=void 0===a?1:a,c=i.minFontSize,f=void 0===c?12:c,s=i.maxFontSize,l=void 0===s?72:s,h=i.width,p=void 0===h?300:h,d=i.measure,v=void 0===d?function(t,e){return{width:1,height:1}}:d,b=i.penalties,g=void 0===b?function(t){return t}:b;g=g(n(o));for(var y=[],_=t.split(/\s/),w=f;w<l;w+=u){for(var j={words:_,maxFontSize:l,minFontSize:f,fontSize:w,lines:r.lines(t,{width:p,mode:"wrap",measure:S(w)})},m=1,A=0,x=Object.values(g);A<x.length;A++){var O=x[A];if(!(O.weight<=0||O.ignore&&O.ignore(j))){if(O.illegal&&O.illegal(j)){m=0;break}O.value&&(m*=O.value(j)*(O.weight||1))}}y.push(Object.assign({},j,{score:m}))}return y.sort(function(t,e){return e.score-t.score}),Object.assign({},y[0],{candidates:y});function S(t){return function(e,n,r,o){for(var i=0,a=0,u=n;u<r;u++){var c=e.charAt(u),f=v(c,t);if(f.height>a&&(a=f.height),(i+=f.width)>=o)break}return{start:n,end:u,value:e.substring(n,r),width:i,height:a}}}}(i,{step:1,minFontSize:30,maxFontSize:50,width:a.width/c,measure:function(t,e){return u.font=e+'px "Helvetica"',{width:u.measureText(t).width,height:e}},penalties:function(t){return t.HEIGHT_DIFFERENCE={weight:.1,value:function(t){var e=Math.max.apply(Math,t.lines.map(function(t){return t.height}));return 1-(a.height-e)/a.height},illegal:function(t){var e=Math.max.apply(Math,t.lines.map(function(t){return t.height}));return(a.height-e)/a.height<0}},t.OUT_OF_SQUARE={weight:.25,value:function(t){var e=t.lines,n=t.fontSize,r=Math.max.apply(Math,e.map(function(t){return t.width})),o=e.length*n/r;return o>1?1/o:o}},t}});console.log(f),u.scale(c,c),f.candidates.forEach(function(t,e){u.strokeStyle=t.score?"rgba(75, 150, 255, 0.3)":"rgba(255, 75, 78, 0.3)",u.font=t.fontSize+'px "Helvetica"',t.lines.forEach(function(e,n){u.strokeText(e.value,0,(n+1)*t.fontSize)})}),u.fillStyle=f.score?"black":"rgb(255, 75, 78)",u.font=f.fontSize+'px "Helvetica"',f.lines.forEach(function(t,e){u.fillText(t.value,0,(e+1)*f.fontSize)}),u.fillStyle="black",u.font='14px "Helvetica"',u.fillText("font-size: "+f.fontSize,10,a.height/c-26),u.fillText("score: "+(1e3*f.score).toFixed(4),10,a.height/c-10)}f(),window.addEventListener("resize",function(){return requestAnimationFrame(function(){return f()})}),a.addEventListener("click",function(){i=prompt(i)||i,f()})});
//# sourceMappingURL=drapeau.umd.js.map
