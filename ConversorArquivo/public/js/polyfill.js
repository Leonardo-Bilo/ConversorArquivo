/*!
  * Native JavaScript for Bootstrap Polyfill v4.0.8 (https://thednp.github.io/bootstrap.native/)
  * Copyright 2015-2021 © dnp_theme
  * Licensed under MIT (https://github.com/thednp/bootstrap.native/blob/master/LICENSE)
  */ "use strict";Array.prototype.some||(Array.prototype.some=function(t,e){if(this==null)throw TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof t)throw TypeError();for(var o=Object(this),n=o.length>>>0,r=0;r<n;r++)if(r in o&&t.call(e,o[r],r,o))return!0;return!1}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(this==null)throw TypeError('"this" is null or not defined');var e=Object(this),o=e.length>>>0;if("function"!=typeof t)throw TypeError("predicate must be a function");for(var n=arguments[1],r=0;r<o;){var i=e[r];if(t.call(n,i,r,e))return i;r++}},configurable:!0,writable:!0}),Array.prototype.includes||(Array.prototype.includes=function(t){var e,o,n=Object(this),r=parseInt(n.length)||0;if(0===r)return!1;var i=parseInt(arguments[1])||0;for(i>=0?e=i:(e=r+i)<0&&(e=0);e<r;){if(t===(o=n[e])||t!=t&&o!=o)return!0;e++}return!1}),Array.from||(Array.from=function(){var t=Object.prototype.toString,e=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},o=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e};return function t(n){var r,i,u=Object(n);if(null==n)throw TypeError("Array.from requires an array-like object - not null or undefined");var a,p=arguments.length>1?arguments[1]:void 0;if(void 0!==p){if(!e(p))throw TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var l=(r=u.length,Math.min(Math.max(o(r),0),9007199254740991)),f=e(this)?Object(new this(l)):Array(l),c=0;c<l;)i=u[c],p?f[c]=void 0===a?p(i,c):p.call(a,i,c):f[c]=i,c+=1;return f.length=l,f}}()),Object.keys||(Object.keys=function(t){var e=[];for(var o in t)t.hasOwnProperty(o)&&e.push(o);return e}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function t(e,o){var n=arguments;if(null==e)throw TypeError("Cannot convert undefined or null to object");for(var r=Object(e),i=1;i<arguments.length;i++){var u=n[i];if(null!=u)for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(r[a]=u[a])}return r},writable:!0,configurable:!0}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function t(e){for(var o=this;o;){if(o.matches(e))return o;o="SVGElement"in window&&o instanceof SVGElement?o.parentNode:o.parentElement}return null}),window.Event&&Window.prototype.Event||(window.Event=Window.prototype.Event=Document.prototype.Event=Element.prototype.Event=function t(e,o){if(!e)throw Error("Not enough arguments");var n,r=!!o&&void 0!==o.bubbles&&o.bubbles,i=!!o&&void 0!==o.cancelable&&o.cancelable;return"createEvent"in document?(n=document.createEvent("Event")).initEvent(e,r,i):((n=document.createEventObject()).type=e,n.bubbles=r,n.cancelable=i),n}),window.CustomEvent&&Window.prototype.CustomEvent||(window.CustomEvent=Window.prototype.CustomEvent=Document.prototype.CustomEvent=Element.prototype.CustomEvent=function t(e,o){if(!e)throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');var n=new Event(e,o);return n.detail=o&&o.detail||null,n}),Node.prototype.contains||(Node.prototype.contains=function(t){for(;t=t.parentNode;)if(t===this)return!0;return!1}),Number.isNaN||(Number.isNaN=function(t){return"number"==typeof t&&t!=t}),String.prototype.includes||(String.prototype.includes=function(t,e){if(t instanceof RegExp)throw TypeError("first argument must not be a RegExp");return void 0===e&&(e=0),-1!==this.indexOf(t,e)});