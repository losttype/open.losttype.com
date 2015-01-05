(function(){"use strict";function e(e){e&&(this.status=e.status,this._parseHeaders(e.getAllResponseHeaders()),this.body=this.headers["Content-Type"]&&/application\/json/.test(this.headers["Content-Type"])?JSON.parse(e.responseText):e.responseText||"")}function t(e,t){t=t||{},this.url=e,this.headers=t.headers||{},this.method=t.method||"get"}function n(e){e=e||{},this.baseUrl="https://api.github.com",this.cacheNamespace=e.cacheNamespace||"ghapi"}!function(){function e(e,r){s(e,r.id+".initialised")||(u(e,r.id+".initialised",!0),t(e,r,function(){n(e,r)}))}function t(e,t,n){var r=/^[^(]+\([^,)]+,/;return n=n||function(){},s(e,t.id+".ready-called")?n():(u(e,t.id+".ready-called",!0),t.template&&t.template(e),c(e,t.prototype),a(e,t),void(t.ready&&r.test(t.ready)?t.ready(e,n):t.ready?(t.ready(e),n()):n()))}function n(e,t){e.parentNode&&(s(e,t.id+".insert-called")||(u(e,t.id+".insert-called",!0),d(e,t.classname),t.insert&&t.insert(e),o(e,t)))}function r(e,t){s(e,t.id+".remove-called")||(u(e,t.id+".remove-called",!0),t.remove&&t.remove(e))}function o(e,t){function n(n,r,o,a){var i;t.attributes&&t.attributes[r]&&"function"==typeof t.attributes[r][n]?i=t.attributes[r][n]:t.attributes&&"function"==typeof t.attributes[r]?i=t.attributes[r]:"function"==typeof t.attributes&&(i=t.attributes),i&&i(e,{type:n,name:r,newValue:o,oldValue:a})}var r=e.attributes,o=r.length,a=new K(function(e){e.forEach(function(e){var t,o=e.attributeName,a=r[o];a&&null===e.oldValue?t="insert":a&&null!==e.oldValue?t="update":a||(t="remove"),n(t,o,a?a.value||a.nodeValue:void 0,e.oldValue)})});a.observe(e,{attributes:!0,attributeOldValue:!0});for(var i=0;o>i;i++){var s=r[i];s&&n("insert",s.nodeName,s.value||s.nodeValue)}}function a(e,t){function n(t,n){return function(r){(!n||j.call(r.target,n))&&t(e,r)}}"object"==typeof t.events&&p(t.events,function(t,r){var o=i(r);e.addEventListener(o.name,n(t,o.delegate))})}function i(e){var t=e.split(" ");return{name:t.shift(),delegate:t.join(" ")}}function s(e,t){return e.__SKATE_DATA?e.__SKATE_DATA[t]:void 0}function u(e,t,n){e.__SKATE_DATA||(e.__SKATE_DATA={}),e.__SKATE_DATA[t]=n}function d(e,t){e.classList?e.classList.add(t):e.className+=e.className?" "+t:t}function l(e){var t=e.classList;if(t)return t;var n=e.attributes;return n["class"]&&n["class"].nodeValue.split(/\s+/)||[]}function c(e,t){return p(t,function(t,n){void 0===e[n]&&(e[n]=t)}),e}function f(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function p(e,t){for(var n in e)f(e,n)&&t(e[n],n)}function h(e){function n(){var r=document.createElement(e.id);return e.prototype=n.prototype,t(r,e),r}return n.prototype=e.prototype,n}function m(e){for(var t=e;t&&t!==document;){if(t.hasAttribute(V))return t;t=t.parentNode}}function v(e,t,n){var r=t.indexOf(H.types.TAG)>-1,o=t.indexOf(H.types.ATTR)>-1,a=t.indexOf(H.types.CLASS)>-1,i=[];return n=n?":not("+n+")":"",r&&(i.push(e+n),i.push("[is="+e+"]"+n)),o&&i.push("["+e+"]"+n),a&&i.push("."+e+n),i.join(",")}function g(e,t){return f(F,e)&&F[e].type.indexOf(t)>-1}function y(e,t){if(t){for(var n=e.querySelectorAll(t),r=n.length,o=[],a=0;r>a;a++){var i=n[a];i.parentNode===e&&o.push(i)}return o}return e.childNodes||[]}function b(e){var t={caption:"table",dd:"dl",dt:"dl",li:"ul",tbody:"table",td:"tr",thead:"table",tr:"tbody"},n=e.match(/\s*<([^\s>]+)/),r=document.createDocumentFragment(),o=document.createElement(n&&t[n[1]]||"div");return o.innerHTML=e,N(r,o.childNodes),r}function N(e,t){var n=t.length;if(t&&n)for(var r=n-1;r>=0;r--){var o=t[r],a=e.childNodes[0];a?e.insertBefore(o,a):e.appendChild(o)}}function T(e,t){var n=t.length;if(t&&n)for(var r=0;n>r;r++){var o=t[r];e.removeChild(o)}}function w(e,t){return 1!==e.nodeType?!1:e.contains?e.contains(t):I.call(e,t)}function A(t){if(1===t.nodeType&&!t.attributes[V]){for(var n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,O,!0),r=H.components(t),o=r.length,a=0;o>a;a++)e(t,r[a]);for(;n.nextNode();)for(var i=n.currentNode,s=H.components(i),u=s.length,d=0;u>d;d++)e(i,s[d])}}function E(e){for(var t=e.length,n=0;t>n;n++)A(e[n])}function L(e){for(var t=e.length,n=0;t>n;n++){var r=e[n];if(1===r.nodeType){var o=r.childNodes;L(o),H.components(r).forEach(S(r))}}}function S(e){return function(t){r(e,t)}}function M(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},1))}}function O(e){var t=e.attributes;return t&&t[V]?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}function _(e,t){return{addedNodes:null,attributeName:null,attributeNamespace:null,nextSibling:null,oldValue:null,previousSibling:null,removedNodes:null,target:e,type:t||"childList"}}function H(e,t){if(t=c(t||{},H.defaults),t.id=e,f(F,t.id))throw new Error('A component of type "'+t.type+'" with the ID of "'+e+'" already exists.');return t.template&&"string"==typeof t.template&&(t.template=H.template.html(t.template)),(t.ready||t.template)&&G.sheet.insertRule(v(t.id,t.type,"."+t.classname)+"{display:none}",G.sheet.cssRules.length),F[t.id]=t,q&&R(),t.type.indexOf(H.types.TAG)>-1?h(t):void 0}var k,R=M(function(){A(document.getElementsByTagName("html")[0])}),C="data-skate-content",V="data-skate-ignore",x=/^[\s\r\n]*$/,D=window.HTMLElement.prototype,I=D.contains,j=D.matches||D.msMatchesSelector||D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector,q=!1,G=document.createElement("style"),F={},K=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver;K||(K=function(e){this.callback=e,this.elements=[]},K.prototype={observe:function(e,t){function n(e){d.push(e),c()}function r(e){var t=e.target;if(t){var n=t.parentNode;a(n)&&(i&&w(i,t)||(s||l.push(s=_(n)),n?(s.addedNodes||(s.addedNodes=[]),s.addedNodes.push(t)):(s.removedNodes||(s.removedNodes=[]),s.removedNodes.push(t)),i=t))}}function o(t){return t===e}function a(n){return t.childList&&(t.subtree||n===e)}var i,s,u=this,d=[],l=[],c=M(function(){for(var e=d.length,t=0;e>t;t++)r(d[t]);u.callback(l),d=[],l=[],i=void 0,s=void 0}),f={},p=[],h=M(function(){var e=p.length;u.callback(p),p.splice(0,e)}),m={target:e,options:t,insertHandler:n,removeHandler:n,attributeHandler:function(e){var n=e.target;if(o(n)){var r=e.attrName,a=e.prevValue,i=e.newValue,s=_(n,"attributes");s.attributeName=r,t.attributeOldValue&&(s.oldValue=f[r]||a||null),p.push(s),t.attributeOldValue&&(f[r]=i),h()}}};return this.elements.push(m),t.childList&&(e.addEventListener("DOMNodeInserted",m.insertHandler),e.addEventListener("DOMNodeRemoved",m.removeHandler)),t.attributes&&e.addEventListener("DOMAttrModified",m.attributeHandler),this},disconnect:function(){return p(this.elements,function(e){e.target.removeEventListener("DOMNodeInserted",e.insertHandler),e.target.removeEventListener("DOMNodeRemoved",e.removeHandler),e.target.removeEventListener("DOMAttrModified",e.attributeHandler)}),this.elements=[],this}}),H.components=function(e){var t=e.attributes,n=t.length,r=[],o=t.is,a=o&&(o.value||o.nodeValue)||e.tagName.toLowerCase();g(a,H.types.TAG)&&r.push(F[a]);for(var i=0;n>i;i++){var s=t[i].nodeName;g(s,H.types.ATTR)&&r.push(F[s])}for(var u=l(e),d=u.length,c=0;d>c;c++){var f=u[c];g(f,H.types.CLASS)&&r.push(F[f])}return r},H.destroy=function(){return F={},H},H.init=function(e){return"undefined"==typeof e.length&&(e=[e]),E(e),arguments[0]},H.template={},H.template.html=function(e){var t=b(e),n=!1,r=new K(function(e){if(n)return void(n=!1);n=!0;for(var t=0;t<e.length;t++){var r=e[t],o=r.target,a=s(o,"default-content");r.addedNodes&&T(o,a),r.removedNodes&&o.innerHTML.match(x)&&(o.innerHTML="",N(o,a))}});return function(e){var n=b(e.innerHTML),o=t.cloneNode(!0),a=o.querySelectorAll("["+C+"]"),i=a.length;if(i)for(var s=0;i>s;s++){var d=a[s],l=y(n,d.getAttribute(C));u(d,"default-content",[].slice.call(d.childNodes)),l.length&&(d.innerHTML="",N(d,l)),r.observe(d,{childList:!0})}e.innerHTML="",e.appendChild(o)}},H.types={ANY:"act",ATTR:"a",CLASS:"c",NOATTR:"ct",NOCLASS:"at",NOTAG:"ac",TAG:"t"},H.unregister=function(e){return delete F[e],H},H.version="0.9.3",H.defaults={attributes:!1,classname:"__skate",events:!1,id:"",prototype:{},template:!1,type:H.types.ANY},document.getElementsByTagName("head")[0].appendChild(G),document.addEventListener("DOMContentLoaded",function(){R(),k=new K(function(e){for(var t=e.length,n=0;t>n;n++){var r=e[n],o=r.addedNodes,a=r.removedNodes;o&&o.length&&!m(o[0].parentNode)&&E(o),a&&a.length&&L(a)}}),k.observe(document,{childList:!0,subtree:!0}),q=!0}),window.skate=H,"function"==typeof define&&define.amd?define(function(){return H}):"object"==typeof exports&&(module.exports=H)}(),e.prototype._parseHeaders=function(e){var t=e.split("\n"),n=/^(.*):(.*)$/,r={};return t.forEach(function(e){var t=e.replace(/\s/gm,""),o=n.exec(t);o&&o.length>=3&&(r[o[1]]=o[2])}),this.headers=r,this},t.prototype.send=function(t){var n=new XMLHttpRequest,r=this;return n.onload=function(){var o=new e(n);t.call(r,o)},n.open(this.method,this.url),Object.keys(this.headers).forEach(function(e){n.setRequestHeader(e,this.headers[e])},this),n.send(),this},t.get=function(e,n,r){return arguments.length<3&&(r=n),new t(e,{method:"get",headers:n||{}}).send(r)},n.prototype.repo=function(e,t){var r=this.baseUrl+"/repos/"+e;return this._requestOrReadCache(r,function(r){if(!r)throw new Error("No repository found for "+e+" !");return t(new n.Repository({name:r.name,fullName:r.full_name,forks:r.forks_count,description:r.description,url:r.html_url,stars:r.stargazers_count,language:r.language}))}),this},n.prototype._requestOrReadCache=function(e,n){var r=this.cacheNamespace+"-"+e+"-",o=r+"etag",a=r+"content",i=localStorage.getItem(o);return i?(t.get(e,{"If-None-Match":i},function(t){return 304!==t.status?(window.localStorage.removeItem(o),window.localStorage.removeItem(a),this._requestOrReadCache(e,n)):n(JSON.parse(localStorage.getItem(a)))}.bind(this)),this):(t.get(e,function(e){return 200!==e.status?void n(null):(window.localStorage.setItem(o,e.headers.ETag),window.localStorage.setItem(a,JSON.stringify(e.body)),n(e.body))}),this)},n.Repository=function(e){e=e||{},this.name=e.name,this.fullName=e.fullName,this.description=e.description,this.forks=e.forks,this.language=e.language,this.url=e.url,this.stars=e.stars},function(e,t){"function"==typeof define&&define.amd?define(["skate"],t):"object"==typeof exports?module.exports=t(require("skate")):e.GithubRepoElement=t(e.skate,e.skateTemplateHtml)}(this,function(e){if("function"!=typeof e)throw new Error(["Github-repo-element requires Skate.js! Make sure you either include","it in on your page, or use the bundled version. See","https://github.com/stevenschobert/github-repo-element#installing"].join(" "));var t=['<a class="ghrepo" data-ghrepo="url">','<div class="ghrepo-title" data-ghrepo="fullName"></div>','<div class="ghrepo-description">','<div data-ghrepo="description"></div>',"</div>",'<div class="ghrepo-meta">','<span class="ghrepo-stars">','<span data-ghrepo="stars"></span> stars',"</span>",'<span class="ghrepo-forks">','<span data-ghrepo="forks"></span> forks',"</span>","</div>","</a>"].join(""),r=new n,o=e("github-repo",{template:function(e){0===e.innerHTML.replace(/\s/,"").length&&(e.innerHTML=t)},attributes:{src:function(e,t){r.repo(t.newValue,function(t){e.displayRepo(t)})}},prototype:{displayRepo:function(e){var t=this.querySelector('[data-ghrepo="url"]');t&&t.setAttribute("href",e.url),["name","fullName","description","watchers","forks","language","stars"].forEach(function(t){var n=this.querySelector('[data-ghrepo="'+t+'"]');n&&(n.innerHTML=e[t])},this)}}});return o})}).bind("undefined"!=typeof window?window:{})();