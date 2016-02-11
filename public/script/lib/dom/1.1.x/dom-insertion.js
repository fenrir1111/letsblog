/*!
 * JRaiser 2 Javascript Library
 * dom-insertion - v1.1.1 (2015-04-27T15:37:51+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("dom/1.1.x/dom-insertion",["base/1.1.x/","dom/1.1.x/sizzle","dom/1.1.x/dom-base","dom/1.1.x/dom-data","dom/1.1.x/dom-traversal"],function(n,e,t){"use strict";function r(n,e){e=e||document;var t=e.createElement("div"),r=e.createDocumentFragment();for(t.innerHTML=n;t.firstChild;)r.appendChild(t.firstChild);return t=null,m.toArray(r.childNodes)}function i(n,e){var t=n.length;if(t){for(var r=(e||document).createDocumentFragment(),i=-1;++i<t;)C.isNode(n[i])&&r.appendChild(n[i]);return r}}function o(n,e){return!n||C.isNode(n)?n:("string"==typeof n&&(n=r(n)),1!==n.length?i(n,e):C.isNode(n[0])?n[0]:void 0)}function u(n,e,t){var r=n.cloneNode(!0);if(e)if(t){var i=A.selfAndDescendants(n);if(i)for(var o=A.selfAndDescendants(r),u=i.length-1;u>=0;u--)g.removeUniqueId(o[u]),g.cloneAll(o[u],i[u])}else g.removeUniqueId(r),g.cloneAll(r,n);return r}function c(n,e){return e.appendChild(n)}function s(n,e){var t=e.firstChild;return t?e.insertBefore(n,t):e.appendChild(n),n}function l(n,e){return e.parentNode.insertBefore(n,e)}function f(n,e){var t=e.nextSibling;return t?e.parentNode.insertBefore(n,t):e.parentNode.appendChild(n),n}function a(n,e){return g.clearAll(e),e.parentNode.replaceChild(n,e)}function d(n,e,t,r){var i=-1,c=e.length;if(c&&(n=o(n)))for(;++i<c;)r&&r.call(this,e[i])===!1||t.call(this,i===c-1?n:u(n,!0,!0),e[i]);return e}function h(n,e,t,r){var o=[];if("string"==typeof e)e=N(e);else{if(null==e||C.isWindow(e))return o;e=C.isNode(e)?[e]:m.toArray(e)}var c=e.length;if(c&&(n=i(n)))for(var s,l=-1;++l<c;)r&&r.call(this,e[l])===!1||(s=l===c-1?n:u(n,!0,!0),m.merge(o,s.childNodes),t.call(this,s,e[l]));return N.uniqueSort(o)}function p(n){return null!=n.parentNode}function v(n){return 1===n.nodeType||11===n.nodeType}var m=n("base/1.1.x/"),N=n("./sizzle"),C=n("./dom-base"),g=n("./dom-data"),A=n("./dom-traversal");return{htmlToNodes:r,shortcuts:{append:function(n){return d(n,this,c,v)},appendTo:function(n){return new this.constructor(h(this,n,c,v))},prepend:function(n){return d(n,this,s,v)},prependTo:function(n){return new this.constructor(h(this,n,s,v))},before:function(n){return d(n,this,l,p)},insertBefore:function(n){return new this.constructor(h(this,n,l,p))},after:function(n){return d(n,this,f,p)},insertAfter:function(n){return new this.constructor(h(this,n,f,p))},replaceWith:function(n){return d(n,this,a,p)},replaceAll:function(n){return new this.constructor(h(this,n,a,p))},detach:function(){return this.forEach(function(n){n.parentNode.removeChild(n)}),this},remove:function(){return this.forEach(function(n){var e=A.selfAndDescendants(n);if(e){for(var t=e.length-1;t>=0;t--)g.clearAll(e[t]);e=null}n.parentNode&&n.parentNode.removeChild(n)}),this},empty:function(){return this.forEach(function(n){var e=A.selfAndDescendants(n);if(e)for(var t=e.length-1;t>=1;t--)g.clearAll(e[t]);for(e=null;n.firstChild;)n.removeChild(n.firstChild);n.options&&"SELECT"===n.nodeName&&(n.options.length=0)}),this},clone:function(n,e){var t=[];return this.forEach(function(r,i){t[i]=u(r,n,e)}),new this.constructor(t)}}}});