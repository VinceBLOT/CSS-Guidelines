window.Modernizr=function(e,t,n){function i(e){h.cssText=e}function r(e,t){return typeof e===t}var o,s,a,c="2.6.2",u={},l=!0,f=t.documentElement,d="modernizr",p=t.createElement(d),h=p.style,m={}.toString,g=" -webkit- -moz- -o- -ms- ".split(" "),v={svg:"http://www.w3.org/2000/svg"},y={},b=[],x=b.slice,w=function(e,n,i,r){var o,s,a,c,u=t.createElement("div"),l=t.body,p=l||t.createElement("body");if(parseInt(i,10))for(;i--;)a=t.createElement("div"),a.id=r?r[i]:d+(i+1),u.appendChild(a);return o=["&#173;",'<style id="s',d,'">',e,"</style>"].join(""),u.id=d,(l?u:p).innerHTML+=o,p.appendChild(u),l||(p.style.background="",p.style.overflow="hidden",c=f.style.overflow,f.style.overflow="hidden",f.appendChild(p)),s=n(u,e),l?u.parentNode.removeChild(u):(p.parentNode.removeChild(p),f.style.overflow=c),!!s},T=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var i;return w("@media "+t+" { #"+d+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},_={}.hasOwnProperty;a=r(_,"undefined")||r(_.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return _.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=t.prototype;var o=new r,s=t.apply(o,n.concat(x.call(arguments)));return Object(s)===s?s:o}return t.apply(e,n.concat(x.call(arguments)))};return i}),y.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:w(["@media (",g.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(v.svg,"svg").createSVGRect},y.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==v.svg},y.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(m.call(t.createElementNS(v.svg,"clipPath")))};for(var C in y)a(y,C)&&(s=C.toLowerCase(),u[s]=y[C](),b.push((u[s]?"":"no-")+s));return u.addTest=function(e,t){if("object"==typeof e)for(var i in e)a(e,i)&&u.addTest(i,e[i]);else{if(e=e.toLowerCase(),u[e]!==n)return u;t="function"==typeof t?t():t,"undefined"!=typeof l&&l&&(f.className+=" "+(t?"":"no-")+e),u[e]=t}return u},i(""),p=o=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=g[e[h]];return t||(t={},m++,e[h]=m,g[m]=t),t}function o(e,n,i){if(n||(n=t),l)return n.createElement(e);i||(i=r(n));var o;return o=i.cache[e]?i.cache[e].cloneNode():p.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),o.canHaveChildren&&!d.test(e)?i.frag.appendChild(o):o}function s(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),s=0,a=i(),c=a.length;c>s;s++)o.createElement(a[s]);return o}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var i=r(e);return v.shivCSS&&!u&&!i.hasCSS&&(i.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||a(e,i),e}var u,l,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:s};e.html5=v,c(t)}(this,t),u._version=c,u._prefixes=g,u.mq=T,u.testStyles=w,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(l?" js "+b.join(" "):""),u}(this,this.document),function(e,t,n){function i(e){return"[object Function]"==g.call(e)}function r(e){return"string"==typeof e}function o(){}function s(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function a(){var e=v.shift();y=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),a()):y=0}function c(e,n,i,r,o,c,u){function l(t){if(!p&&s(f.readyState)&&(b.r=p=1,!y&&a(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(f)},50);for(var i in E[n])E[n].hasOwnProperty(i)&&E[n][i].onload()}}var u=u||d.errorTimeout,f=t.createElement(e),p=0,g=0,b={t:i,s:n,e:o,a:c,x:u};1===E[n]&&(g=1,E[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,g)},v.splice(r,0,b),"img"!=e&&(g||2===E[n]?(w.insertBefore(f,x?null:m),h(l,u)):E[n].push(f))}function u(e,t,n,i,o){return y=0,t=t||"j",r(e)?c("c"==t?_:T,e,t,this.i++,n,i,o):(v.splice(this.i++,0,e),1==v.length&&a()),this}function l(){var e=d;return e.loader={load:u,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,w=x?p:m.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,T=b?"object":p?"script":"img",_=p?"script":T,C=Array.isArray||function(e){return"[object Array]"==g.call(e)},N=[],E={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,i,e=e.split("!"),r=N.length,o=e.pop(),s=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;s>n;n++)i=e[n].split("="),(t=k[i.shift()])&&(o=t(o,i));for(n=0;r>n;n++)o=N[n](o);return o}function s(e,r,o,s,a){var c=t(e),u=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(r&&(r=i(r)?r:r[e]||r[s]||r[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,r,o,s,a):(E[c.url]?c.noexec=!0:E[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(i(r)||i(u))&&o.load(function(){l(),r&&r(c.origUrl,a,s),u&&u(c.origUrl,a,s),E[c.url]=2})))}function a(e,t){function n(e,n){if(e){if(r(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),s(e,f,t,0,u);else if(Object(e)===e)for(c in a=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--a&&(i(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[c])),s(e[c],f,t,c,u))}else!n&&p()}var a,c,u=!!e.test,l=e.load||e.both,f=e.callback||o,d=f,p=e.complete||o;n(u?e.yep:e.nope,!!l),l&&n(l)}var c,u,f=this.yepnope.loader;if(r(e))s(e,0,f,0);else if(C(e))for(c=0;c<e.length;c++)u=e[c],r(u)?s(u,0,f,0):C(u)?d(u):Object(u)===u&&a(u,f);else Object(e)===e&&a(e,f)},d.addPrefix=function(e,t){k[e]=t},d.addFilter=function(e){N.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=a,e.yepnope.injectJs=function(e,n,i,r,c,u){var l,f,p=t.createElement("script"),r=r||d.errorTimeout;p.src=e;for(f in i)p.setAttribute(f,i[f]);n=u?a:n||o,p.onreadystatechange=p.onload=function(){!l&&s(p.readyState)&&(l=1,n(),p.onload=p.onreadystatechange=null)},h(function(){l||(l=1,n(1))},r),c?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,i,r,s,c){var u,r=t.createElement("link"),n=c?a:n||o;r.href=e,r.rel="stylesheet",r.type="text/css";for(u in i)r.setAttribute(u,i[u]);s||(m.parentNode.insertBefore(r,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});