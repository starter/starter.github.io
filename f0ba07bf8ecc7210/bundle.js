!function(){var e={},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=Object.create||function(e){var t=function(){};return t.prototype=e,new t},r=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return n},o=Function.prototype.bind||function(e){var t=this;return function(){return t.apply(e,arguments)}};function i(){this._events&&Object.prototype.hasOwnProperty.call(this,"_events")||(this._events=n(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}e=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0;var a,u=10;try{var l={};Object.defineProperty&&Object.defineProperty(l,"x",{value:0}),a=0===l.x}catch(e){a=!1}function s(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function c(e,r,o,i){var a,u,l;if("function"!=typeof o)throw new TypeError('"listener" argument must be a function');if((u=e._events)?(u.newListener&&(e.emit("newListener",r,o.listener?o.listener:o),u=e._events),l=u[r]):(u=e._events=n(null),e._eventsCount=0),l){if("function"==typeof l?l=u[r]=i?[o,l]:[l,o]:i?l.unshift(o):l.push(o),!l.warned&&(a=s(e))&&a>0&&l.length>a){l.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+l.length+' "'+String(r)+'" listeners added. Use emitter.setMaxListeners() to increase limit.');c.name="MaxListenersExceededWarning",c.emitter=e,c.type=r,c.count=l.length,"object"===("undefined"==typeof console?"undefined":t(console))&&console.warn&&console.warn("%s: %s",c.name,c.message)}}else l=u[r]=o,++e._eventsCount;return e}function f(){if(!this.fired)switch(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];this.listener.apply(this.target,e)}}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=o.call(f,r);return i.listener=n,r.wrapFn=i,i}function p(e,t,n){var r=e._events;if(!r)return[];var o=r[t];return o?"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):h(o,o.length):[]}function y(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}a?Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e||e<0||e!=e)throw new TypeError('"defaultMaxListeners" must be a positive number');u=e}}):i.defaultMaxListeners=u,i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return s(this)},i.prototype.emit=function(e){var t,n,r,o,i,a,u="error"===e;if(a=this._events)u=u&&null==a.error;else if(!u)return!1;if(u){if(arguments.length>1&&(t=arguments[1]),t instanceof Error)throw t;var l=new Error('Unhandled "error" event. ('+t+")");throw l.context=t,l}if(!(n=a[e]))return!1;var s="function"==typeof n;switch(r=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,o=h(e,r),i=0;i<r;++i)o[i].call(n)}(n,s,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var o=e.length,i=h(e,o),a=0;a<o;++a)i[a].call(n,r)}(n,s,this,arguments[1]);break;case 3:!function(e,t,n,r,o){if(t)e.call(n,r,o);else for(var i=e.length,a=h(e,i),u=0;u<i;++u)a[u].call(n,r,o)}(n,s,this,arguments[1],arguments[2]);break;case 4:!function(e,t,n,r,o,i){if(t)e.call(n,r,o,i);else for(var a=e.length,u=h(e,a),l=0;l<a;++l)u[l].call(n,r,o,i)}(n,s,this,arguments[1],arguments[2],arguments[3]);break;default:for(o=new Array(r-1),i=1;i<r;i++)o[i-1]=arguments[i];!function(e,t,n,r){if(t)e.apply(n,r);else for(var o=e.length,i=h(e,o),a=0;a<o;++a)i[a].apply(n,r)}(n,s,this,o)}return!0},i.prototype.addListener=function(e,t){return c(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return c(this,e,t,!0)},i.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,d(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,d(this,e,t)),this},i.prototype.removeListener=function(e,t){var r,o,i,a,u;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(o=this._events))return this;if(!(r=o[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=n(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,a=r.length-1;a>=0;a--)if(r[a]===t||r[a].listener===t){u=r[a].listener,i=a;break}if(i<0)return this;0===i?r.shift():function(e,t){for(var n=i,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}(r),1===r.length&&(o[e]=r[0]),o.removeListener&&this.emit("removeListener",e,u||t)}return this},i.prototype.removeAllListeners=function(e){var t,o,i;if(!(o=this._events))return this;if(!o.removeListener)return 0===arguments.length?(this._events=n(null),this._eventsCount=0):o[e]&&(0==--this._eventsCount?this._events=n(null):delete o[e]),this;if(0===arguments.length){var a,u=r(o);for(i=0;i<u.length;++i)"removeListener"!==(a=u[i])&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=n(null),this._eventsCount=0,this}if("function"==typeof(t=o[e]))this.removeListener(e,t);else if(t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},i.prototype.listeners=function(e){return p(this,e,!0)},i.prototype.rawListeners=function(e){return p(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):y.call(e,t)},i.prototype.listenerCount=y,i.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var v={},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(v,"__esModule",{value:!0});var m=new WeakMap,b=Symbol("iteration key");function w(e,t,n){var r=t.get(n);r&&r.forEach(e.add,e)}function A(e){e.cleaners&&e.cleaners.forEach(O,e),e.cleaners=[]}function O(e){e.delete(this)}var k=[],_=!1;function E(e){var t=k[k.length-1];t&&(S(t,e),function(e,t){var n=t.target,r=t.key;"iterate"===t.type&&(r=b);var o=m.get(n),i=o.get(r);i||(i=new Set,o.set(r,i)),i.has(e)||(i.add(e),e.cleaners.push(i))}(t,e))}function L(e){(function(e){var t=e.target,n=e.key,r=e.type,o=m.get(t),i=new Set;if("clear"===r?o.forEach(function(e,t){w(i,o,t)}):w(i,o,n),"add"===r||"delete"===r||"clear"===r){var a=Array.isArray(t)?"length":b;w(i,o,a)}return i})(e).forEach(N,e)}function N(e){S(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"===g(e.scheduler)?e.scheduler.add(e):e()}function S(e,t){if(e.debugger&&!_)try{_=!0,e.debugger(t)}finally{_=!1}}var C=Symbol("is reaction"),x=new WeakMap,P=new WeakMap,R=Object.prototype.hasOwnProperty,V={has:function(e){var t=x.get(this),n=Reflect.getPrototypeOf(this);return E({target:t,key:e,type:"has"}),n.has.apply(t,arguments)},get:function(e){var t=x.get(this),n=Reflect.getPrototypeOf(this);return E({target:t,key:e,type:"get"}),n.get.apply(t,arguments)},add:function(e){var t=x.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.add.apply(t,arguments);return r||L({target:t,key:e,value:e,type:"add"}),o},set:function(e,t){var n=x.get(this),r=Reflect.getPrototypeOf(this),o=r.has.call(n,e),i=r.get.call(n,e),a=r.set.apply(n,arguments);return o?t!==i&&L({target:n,key:e,value:t,oldValue:i,type:"set"}):L({target:n,key:e,value:t,type:"add"}),a},delete:function(e){var t=x.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.get?n.get.call(t,e):void 0,i=n.delete.apply(t,arguments);return r&&L({target:t,key:e,oldValue:o,type:"delete"}),i},clear:function(){var e=x.get(this),t=Reflect.getPrototypeOf(this),n=0!==e.size,r=e instanceof Map?new Map(e):new Set(e),o=t.clear.apply(e,arguments);return n&&L({target:e,oldTarget:r,type:"clear"}),o},forEach:function(){var e=x.get(this),t=Reflect.getPrototypeOf(this);return E({target:e,type:"iterate"}),t.forEach.apply(e,arguments)},keys:function(){var e=x.get(this),t=Reflect.getPrototypeOf(this);return E({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=x.get(this),t=Reflect.getPrototypeOf(this);return E({target:e,type:"iterate"}),t.values.apply(e,arguments)},entries:function(){var e=x.get(this),t=Reflect.getPrototypeOf(this);return E({target:e,type:"iterate"}),t.entries.apply(e,arguments)},get size(){var e=x.get(this),t=Reflect.getPrototypeOf(this);return E({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};V[Symbol.iterator]=function(){var e=x.get(this),t=Reflect.getPrototypeOf(this);return E({target:e,type:"iterate"}),t[Symbol.iterator].apply(e,arguments)};var j={get:function(e,t,n){return e=R.call(V,t)?V:e,Reflect.get(e,t,n)}},M=Function("return this")(),T=new Map([[Map,j],[Set,j],[WeakMap,j],[WeakSet,j],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);function U(e){return T.get(e.constructor)}var I=Object.prototype.hasOwnProperty,D=new Set(Object.getOwnPropertyNames(Symbol).map(function(e){return Symbol[e]}).filter(function(e){return"symbol"===(void 0===e?"undefined":g(e))})),F={get:function(e,t,n){var r=Reflect.get(e,t,n);if("symbol"===(void 0===t?"undefined":g(t))&&D.has(t))return r;E({target:e,key:t,receiver:n,type:"get"});var o=P.get(r);if(k.length>0&&"object"===(void 0===r?"undefined":g(r))&&null!==r){if(o)return o;var i=Reflect.getOwnPropertyDescriptor(e,t);if(!i||!1!==i.writable||!1!==i.configurable)return W(r)}return o||r},has:function(e,t){var n=Reflect.has(e,t);return E({target:e,key:t,type:"has"}),n},ownKeys:function(e){return E({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,n,r){"object"===(void 0===n?"undefined":g(n))&&null!==n&&(n=x.get(n)||n);var o=I.call(e,t),i=e[t],a=Reflect.set(e,t,n,r);return e!==x.get(r)?a:(o?n!==i&&L({target:e,key:t,value:n,oldValue:i,receiver:r,type:"set"}):L({target:e,key:t,value:n,receiver:r,type:"add"}),a)},deleteProperty:function(e,t){var n=I.call(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return n&&L({target:e,key:t,oldValue:r,type:"delete"}),o}};function W(e){return void 0===e&&(e={}),x.has(e)||"function"==typeof(t=e.constructor)&&t.name in M&&M[t.name]===t&&!T.has(t)?e:P.get(e)||function(e){var t=U(e)||F,n=new Proxy(e,t);return P.set(e,n),x.set(n,e),function(e){m.set(e,new Map)}(e),n}(e);var t}v.observe=function(e,t){void 0===t&&(t={});var n=e[C]?e:function t(){return function(e,t,n,r){if(e.unobserved)return Reflect.apply(t,n,r);if(-1===k.indexOf(e)){A(e);try{return k.push(e),Reflect.apply(t,n,r)}finally{k.pop()}}}(t,e,this,arguments)};return n.scheduler=t.scheduler,n.debugger=t.debugger,n[C]=!0,t.lazy||n(),n},v.unobserve=function(e){e.unobserved||(e.unobserved=!0,A(e)),"object"===g(e.scheduler)&&e.scheduler.delete(e)},v.observable=W,v.isObservable=function(e){return x.has(e)},v.raw=function(e){return x.get(e)||e};var K=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onmouseenter","onmouseleave","ontouchcancel","ontouchend","ontouchmove","ontouchstart","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"],z=K.length;function B(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Y=function(e,t){var n=e.nodeType,r=e.nodeName;1===n&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,u=null,l=r.length-1;l>=0;--l)a=(u=r[l]).name,o=u.namespaceURI,i=u.value,o?(a=u.localName||a,t.getAttributeNS(o,a)!==i&&t.setAttributeNS(o,a,i)):t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var s=n.length-1;s>=0;--s)!1!==(u=n[s]).specified&&(a=u.name,(o=u.namespaceURI)?(a=u.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),3!==n&&8!==n||t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;B(e,t,"checked"),B(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n),"null"===n&&(t.value="",t.removeAttribute("value")),e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?function(e,t){B(e,t,"selected")}(e,t):"TEXTAREA"===r&&function(e,t){var n=e.value;if(n!==t.value&&(t.value=n),t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t),function(e,t){for(var n=0;n<z;n++){var r=K[n];e[r]?t[r]=e[r]:t[r]&&(t[r]=void 0)}}(e,t)};"function"==typeof Symbol&&Symbol.iterator;var G=3;function H(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&e.type===G&&e.nodeValue===t.nodeValue}var $=function(e,t){return function e(t,n){return n?t?t.isSameNode&&t.isSameNode(n)?n:t.tagName!==n.tagName?t:(Y(t,n),function(t,n){for(var r,o,i,a,u=0,l=0;r=n.childNodes[l],o=t.childNodes[l-u],r||o;l++)if(o)if(r)if(H(o,r))(i=e(o,r))!==r&&(n.replaceChild(i,r),u++);else{a=null;for(var s=l;s<n.childNodes.length;s++)if(H(n.childNodes[s],o)){a=n.childNodes[s];break}a?((i=e(o,a))!==a&&u++,n.insertBefore(i,r)):o.id||r.id?(n.insertBefore(o,r),u++):(i=e(o,r))!==r&&(n.replaceChild(i,r),u++)}else n.appendChild(o),u++;else n.removeChild(r),l--}(t,n),n):null:t}(t,e)},q={},X={};(function(e){var t,n=void 0!==e?e:"undefined"!=typeof window?window:{};"undefined"!=typeof document?t=document:(t=n["__GLOBAL_DOCUMENT_CACHE@4"])||(t=n["__GLOBAL_DOCUMENT_CACHE@4"]=q),X=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var J={};(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},J=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Q={},Z=Object.create(null),ee="onloadid"+(new Date%9e6).toString(36),te="data-"+ee,ne=0;function re(e,t){Z[e][0]&&0===Z[e][2]&&(Z[e][0](t),Z[e][2]=1)}function oe(e,t){Z[e][1]&&1===Z[e][2]&&(Z[e][1](t),Z[e][2]=0)}function ie(e,t){for(var n=Object.keys(Z),r=0;r<e.length;r++){if(e[r]&&e[r].getAttribute&&e[r].getAttribute(te)){var o=e[r].getAttribute(te);n.forEach(function(n){o===n&&t(n,e[r])})}e[r]&&e[r].childNodes.length>0&&ie(e[r].childNodes,t)}}J&&J.MutationObserver&&new MutationObserver(function(e){if(!(Object.keys(Z).length<1))for(var t=0;t<e.length;t++)e[t].attributeName!==te?(ie(e[t].removedNodes,function(e,t){X.documentElement.contains(t)||oe(e,t)}),ie(e[t].addedNodes,function(e,t){X.documentElement.contains(t)&&re(e,t)})):(n=e[t],r=re,o=oe,void 0,i=n.target.getAttribute(te),function(e,t){return!(!e||!t)&&Z[e][3]===Z[t][3]}(n.oldValue,i)?Z[i]=Z[n.oldValue]:(Z[n.oldValue]&&o(n.oldValue,n.target),Z[i]&&r(i,n.target)));var n,r,o,i}).observe(X.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[te]}),(Q=function e(t,n,r,o){return n=n||function(){},r=r||function(){},t.setAttribute(te,"o"+ne),Z["o"+ne]=[n,r,0,o||e.caller],ne+=1,t}).KEY_ATTR=te,Q.KEY_ID=ee;var ae={};function ue(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var le=v.observable,se=v.observe,ce=v.unobserve,fe=v.isObservable,de="data-"+Q.KEY_ID,pe=1;function ye(t){if("function"!=typeof t)return le(t);var n=this,r=new WeakMap,o=new WeakMap,i=function e(){var i=Array.from(arguments),a=i.map(function(e){return ye.raw(e)}),u=i[0],l=void 0;return r.has(u)?l=r.get(u):(l=t.apply(n,a)).id=pe++,Q(l,function(l){if(fe(u)){if(o.has(u))return;r.set(u,l)}var s=!1,c=l.id,f=se(function(){e.emit.apply(e,["premorph",ye.raw(n),l].concat(ue(a)));var o=t.apply(n,i);o.id=o.id||c,o.setAttribute(de,(r.get(u)||l).getAttribute(de)),$(l,o),s?e.emit.apply(e,["morph",ye.raw(n),l].concat(ue(a))):(e.emit.apply(e,["load",ye.raw(n),l].concat(ue(a))),s=!0)});fe(u)&&o.set(u,f)},function(t){o.has(u)&&(e.emit.apply(e,["unload",ye.raw(n),t].concat(ue(a))),ce(o.get(u)),o.delete(u))},pe)};return e.call(i),Object.assign(i,e.prototype),i}Object.assign(ye,v),ae=ye;var he=/\n[\s]+$/,ve=/^\n[\s]+/,ge=/[\s]+$/,me=/^[\s]+/,be=/[\n\s]+/g,we=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ae=["code","pre","textarea"],Oe=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,u=0,l=n.length;u<l;u++){var s=n[u];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),c=s),u===l-1&&(a=!1,-1===we.indexOf(i)&&-1===Ae.indexOf(i)?""===(r=c.nodeValue.replace(ve,"").replace(ge,"").replace(he,"").replace(be," "))?t.removeChild(c):c.nodeValue=r:-1===Ae.indexOf(i)&&(o=0===u?"":" ",r=c.nodeValue.replace(ve,o).replace(me," ").replace(ge,"").replace(he,"").replace(be," "),c.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===we.indexOf(i)&&-1===Ae.indexOf(i)?""===(r=c.nodeValue.replace(ve,"").replace(he,"").replace(be," "))?t.removeChild(c):c.nodeValue=r:-1===Ae.indexOf(i)&&(r=c.nodeValue.replace(me," ").replace(ve,"").replace(he,"").replace(be," "),c.nodeValue=r));var f=s.nodeName;f&&(i=f.toLowerCase()),t.appendChild(s)}}}},ke={};function _e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var Ee=v.observable,Le=v.observe,Ne=v.unobserve,Se="data-"+Q.KEY_ID,Ce=1;function xe(t){if("function"!=typeof t)return Ee(t);var n=Ce++,r=void 0,o=void 0,i=this,a=function e(){var a=Array.from(arguments),u=a.map(function(e){return xe.raw(e)}),l=o||t.apply(i,u);return l.id=l.id||n,Q(l,function(l){r||(o=l,e.emit.apply(e,["load",xe.raw(i),l].concat(_e(u))),r=Le(function(){e.emit.apply(e,["morph",xe.raw(i),l].concat(_e(u)));var r=t.apply(i,a);r.id=r.id||n,r.setAttribute(Se,o.getAttribute(Se)),$(l,r)}))},function(t){r&&(e.emit.apply(e,["unload",xe.raw(i),t].concat(_e(u))),Ne(r),r=null)},n)};return e.call(a),Object.assign(a,e.prototype),a}Object.assign(xe,v),ke=xe;var Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("function"==typeof e)return ke(e);var t=[],n=o(ke(e)),r=function(){return ke.apply(n,arguments)};return r.use=function(r){var o=Object.assign({},e);t.push(r),n=t.reduce(function(e,t){return t(e)||e},o)},r.observable=function(e){return o(ke(e))},r;function o(e){var t=new Set;return new Proxy(e,{get:function(r,o,i){return"function"==typeof r[o]&&e.hasOwnProperty(o)?function(){t.add(r[o]);var e=r[o].apply(n,arguments);return t.delete(r[o]),e}:r[o]},set:function(n,r,o,i){if(0===t.size)throw new Error("Cannot mutate state outside of an action");return void 0===e[r]&&console.warn("Adding new observable property "+r+" dynamically in unsupported by proxy-polyfill"),n[r]=o,!0}})}},Re=Pe({title:"404 route not found"})(function(e){return function(){var e=document.createElement("main");e.setAttribute("id","404");var t=document.createElement("header"),n=document.createElement("h1");Oe(n,[arguments[0],arguments[1]]);var r=document.createElement("h2");Oe(r,[arguments[2]]),Oe(t,["\n        ",n,"\n        ",r,"\n      "]);var o=document.createElement("a");return o.setAttribute("href","/"),o.setAttribute("class","pt2"),Oe(o,["Back to main."]),Oe(e,["\n      ",t,"\n      ",o,"\n    "]),e}(e.title,e.location,this.title)}),Ve=Pe({title:"main",clicks:0,handleClick:function(){this.clicks++,console.log(this.clicks)}})(function(e){return function(){var e=document.createElement("main");e.setAttribute("id","main"),e.setAttribute("class",arguments[1]);var t=document.createElement("img");return t.onclick=arguments[0],t.setAttribute("src","/assets/bonfire.svg"),t.setAttribute("alt","digital bonfire"),Oe(e,["\n      ",t,"\n    "]),e}(this.handleClick,je)}),je="_71a23d1e",Me=Pe({location:window.location.pathname,route:function(e){switch(e||this.location){case"/":return Ve;default:return Re}}})(function(e){return function(){var e=document.createElement("body");return e.setAttribute("class","code lh-copy"),Oe(e,["\n      ",arguments[0],"\n    "]),e}(this.route(e.location)())}),Te=ae({title:"starter"});ae.observe(function(){return document.title=Te.title}),document.body=Me(Te)}();
//# sourceMappingURL=bundle.js.map