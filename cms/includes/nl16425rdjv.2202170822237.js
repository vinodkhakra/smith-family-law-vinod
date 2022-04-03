(function(){function o(n,t,i){var f,r,u,e,o;if(typeof i=="string"&&(f=i,i=function(n){n.classList.add(f)}),typeof IntersectionObserver=="undefined"){i(n);return}t<0?(r=-t*200+"px",u=0):(r="0px",u=t||0);e={root:null,rootMargin:r,threshold:u};o=new IntersectionObserver(function(t,r){var u=t.find(function(n){return n.isIntersecting});u&&(i(n),r.unobserve(n),r.disconnect())},e);o.observe(n)}function u(){for(var n,r=[],i=document.querySelectorAll("img[data-src],img[data-bg],video[data-src],source[data-src]"),t=0;t<i.length;t++){if(n=i[t],n.parentNode.nodeName.toLowerCase()==="picture")if(n=n.parentNode,r.indexOf(n)>=0)continue;else r.push(n);o(n,-.5,a)}}function a(n){var t,r,i=n.getAttribute("data-src"),e=n.getAttribute("data-bg"),o=(n.nodeName||"").toLowerCase(),u;switch(o){case"img":e?n.style.backgroundImage="url('"+e+"')":i&&(n.setAttribute("src",i),t=n);n.removeAttribute("data-src");n.removeAttribute("data-bg");break;case"video":i&&n.setAttribute("poster",i);n.removeAttribute("data-src");break;case"picture":for(u=0;u<n.children.length;u++)r=n.children[u],i=r.getAttribute("data-src"),r.removeAttribute("data-src"),(r.nodeName||"").toLowerCase()=="img"?(t=r,i&&(l?t.setAttribute("src",i):(t.style.backgroundImage="url('"+i+"')",t=null))):i&&r.setAttribute("srcset",i)}if(t){if(t.$loading)return}else t=document.createElement("img"),t.style.position="absolute",t.style.opacity=0,t.style.pointerEvents="none",t.style.left="-100%",t.style.top="-100%",t.$placeholder=!0,document.body.appendChild(t),t.setAttribute("src",e||i||c);t.$loading=n;t.complete?f.call(t):(n.classList.add("loading"),t.addEventListener("load",f))}function f(){var n=this.$loading;n?(delete this.$loading,n.classList.remove("loading")):this.classList.remove("loading");this.removeEventListener("load",f);this.$placeholder&&(delete this.$placeholder,this.parentNode&&this.parentNode.removeChild(this))}var s=document.documentElement.getAttribute("data-anim")!=="0",h=document.documentElement.getAttribute("data-prlx")!=="0",c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",l="objectFit"in document.body.style,n,e,t,i,r;if(document&&document.querySelectorAll){for(n=document.querySelectorAll("[data-onvisible]"),e=n&&n.length,t=0;t<e;t++)(i=n[t],r=i.getAttribute("data-onvisible"),r)&&(s?o(i,.33,r):i.classList.add(r));h&&window.matchMedia("(prefers-reduced-motion)").matches===!1&&(n=document.querySelectorAll("[data-parallax]"),n&&n.length>0&&rrequire("usc/p/parallax",function(){USC.parallax(n)}))}window.LazyLoad=u;u();setTimeout(u,1e3)})();
(function(n){function u(n){for(var t=n;t&&t.parentNode;){if(t.nodeName==="svg"||t.nodeName==="SVG")return t;t=t.parentNode}return null}function f(n){n.readyState===4?i.call(n):n.onreadystatechange||(n.onreadystatechange=function(){n.readyState===4&&i.call(n)},n.onreadystatechange())}function i(){var n,t=this._document,i;for(t||(this._document=t=document.implementation.createHTMLDocument(""),t.body.innerHTML=this.responseText,this._target={});n=this._embeds.pop();)i=this._target[n.id],i||(this._target[n.id]=i=t.getElementById(n.id)),r(n.use,n.parent,n.svg,i)}function r(n,t,i,r){var u,f,e;if(r&&n.parentNode===t){for(t.removeChild(n),u=document.createDocumentFragment(),f=!i.hasAttribute("viewBox")&&r.getAttribute("viewBox"),f&&i.setAttribute("viewBox",f),e=r.cloneNode(!0);e.childNodes.length;)u.appendChild(e.firstChild);t.appendChild(u)}}var t={};n.USE={Replace:function(n){var y,s,i,a,h,v,p,c,l,w,o,e;if(n&&n.getElementsByTagName||(n=document),n.nodeName==="USE"||n.nodeName==="use")s=[n];else for(y=n.getElementsByTagName("use"),s=new Array(y.length),e=0;e<s.length;e++)s[e]=y[e];for(e=0;e<s.length;e++){if(i=s[e],i._replacing)continue;else i._replacing=1;(a=i.parentNode,h=u(a),v=h&&(i.getAttribute("data-href")||i.getAttribute("xlink:href")||i.getAttribute("href")),v)&&(p=v.split("#"),c=p[0],l=p[1],!l&&(w=/icon_(\w+)\./.exec(c))&&(l=w[1]),c?(o=t[c],o||(t[c]=o=new XMLHttpRequest,o.open("GET",c),o.send(),o._embeds=[]),h.attributes["data-use"]||h.setAttribute("data-use",v),o._embeds.push({use:i,parent:a,svg:h,id:l}),f(o)):r(i,a,h,document.getElementById(l)))}}};(n.requestAnimationFrame||n.setTimeout)(USE.Replace,0);window.register&&window.register("svg")})(window);
"use strict";(function(){function s(n){return decodeURIComponent(n.replace(/\+/g,"%20"))}function t(n){return encodeURIComponent(String(n)).replace(/['"\(\)]/g,function(n){switch(n){case"'":return"%27";case'"':return"%22";case"(":return"%28";case")":return"%29";default:return n}})}function n(n,i,r){var o,c,e,h;if(!u)for(u={},o=document.cookie?document.cookie.split("; "):[],e=0;e<o.length;e++){var l=o[e].split("="),c=s(l.shift()),f=l.join("=");switch(f[0]){case"#":f=+f.substring(1);break;case":":f=new Date(+f.substring(1));break;case"!":f=f==="!!";break;case"'":f=s(f.substring(1));break;default:f=s(f)}u[c]=f}if(c=String(n),i===undefined)return u[c];if(i===null){document.cookie=item.name+"=; path=/; expires="+new Date(0).toUTCString();delete u[c];return}if(typeof i=="number")i="#"+i;else if(typeof i=="boolean")i=i?"!!":"!";else if(i)if(i.constructor===Date)i=":"+i.getTime();else if(ut(i))if(i.length)if(typeof i[0]=="number"){for(o=new Array(i.length),e=0;e<i.length;e++)if(o[e]=parseFloat(i[e]),isNaN(o[e])){o=null;break}i=o?JSON.stringify(o):t(String(i))}else i=encode(String(i));else i="[]";else i=typeof i=="string"?t(i):typeof i=="object"?JSON.stringify(i):String(i);else i="";r?r.constructor===Date||(h=new Date,typeof r=="number"?h.setDate(h.getDate()+r):h.setDate(h.getDate()+30)):h=null;u[c]=i;document.cookie=[c+"="+i,"; path=/",h?"; expires = "+h.toUTCString():"",y?"; domain="+y:""].join("")}function g(n){var i,t;if(!o)for(o={},i=window.location.search.substr(1).split("&"),t=0;t<i.length;t++){var r=i[t++].split("="),u=r.shift().toLowerCase(),f=r.join("=");o[u]=s(f)}return o[String(n).toLowerCase()]}function h(n){if(window.navigator.sendBeacon){window.navigator.sendBeacon(n);return}var t=document.createElement("img");t.style.display="none";t.src="about:blank";document.body.appendChild(t);t.src=n}function f(t,i,r){if(t===undefined){var u=n("_sa");return+(u||0)}n("_sa",t);c(i);tt(t,r)}function c(n){if(typeof localStorage=="undefined")return null;if(n===undefined){var t=+localStorage._vid_;return isNaN(t)&&(t=0),t}n>0&&(localStorage._vid_=n)}function nt(){var n=new Date,t=new Date(n.getFullYear(),0,1),i=new Date(n.getFullYear(),6,1);return Math.max(t.getTimezoneOffset(),i.getTimezoneOffset())/60}function l(){var n,t,r,i;if(document.getElementsByTagName)n=document.getElementsByTagName("a");else if(window.$)n=$("a");else return"";for(t=0,r=n.length;t<r;t++){var u=n[t],f=u&&u.getAttribute("href"),e=f&&/^tel:(.+)$/.exec(f);if(e&&(i=e[1].replace(/\D+/g,""),i&&i.length>=10))return i}return""}function ft(){var n;if(window.Process&&window.Process.Phones)try{n=window.Process.Phones()}catch(t){}return n||""}function p(){var i,f,r,u,n;if(document.getElementsByClassName)i=document.getElementsByClassName("ui-track-version");else if(window.$)i=$(".ui-track-version");else return"";for(f={},r=[],u=0;u<i.length;u++)n=i[u].getAttribute("id"),n&&!f[n]&&(f[n]=!0,r.push(n));return r.length?t(r.join("|")):""}function et(u,f){var e=document.createElement("script"),o=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,s=window.innerHeight||document.documentElement.offsetHeight||document.body.offsetHeight||0;e.type="text/javascript";e.async=!0;e.src=r+"/sa4.js?"+i+","+u+","+c()+","+f+","+o+"x"+s+","+nt()+","+l()+","+t(window.location.href)+","+(n("L")||"0")+","+(p()||"0")+","+(n("SEOD")||"");document.head.appendChild(e)}function ot(t,i,u,e,o,s,c,a,v,y,p,w,b,k){var nt,tt,d,g,it,rt,ut;if(t&&i){for(f(t,i,u),nt={SPPC:u,PPCAD:e,PPCEX:o,PPCCMP:s,SEOD:c,SEOK:a,PPCP1:v,PPCP2:y,PPCTR:p,L:w},tt=Object.keys(nt),d=0;d<tt.length;d++)g=tt[d],it=nt[g],it?n(g,it,k||!0):n(g,null);if(window.Process){try{window.Process.Delayed()}catch(ft){}rt=l();rt!=b&&(ut=r+"/sa6.js?"+__said+","+t+","+b+","+v,h(ut))}}}function tt(t,i){if(t){if(d)return;if(location.search&&/&(?:testmode|scid|noshrt)=/.test(location.search))return;i===undefined&&(i=n("SPPC")||g("SPPC")||"")}else return;if(i){var r="#~"+it(parseInt(t));window.location.hash!=r&&(window.history&&window.history.replaceState?(window.location.search&&window.location.search.indexOf("SPPC=")>0&&(r=window.location.pathname+r),window.history.replaceState(undefined,undefined,r)):window.location.replace&&window.location.replace(r))}}function it(n){var t,u,i=!1,r=1,e,o,s,f;if(typeof n=="number"){if(isNaN(n))return undefined;for(t=n,e=[];t>0;)u=i?r*62:r*10,i=!i,o=t%u,s=st(o/r),e.push(s),t-=o,r=u;return e.join("")}if(typeof n=="string"){if(!n)return 0;for(t=0,f=0;f<n.length;f++)u=ht(n,f),t+=u*r,r*=i?62:10,i=!i;return t}return undefined}function st(n){return n<10?String.fromCharCode(n+48):n<36?String.fromCharCode(n+55):String.fromCharCode(n+61)}function ht(n,t){var i=n.charCodeAt(t);return i<58?i-48:i<91?i-55:i-61}function w(n,t){var i,r;if(n&&n.closest)return n.closest(t);for(i=n;i&&i.parentNode&&i!==document.body&&i!==document.documentElement;){if(r=i.nodeName,r&&r.toLowerCase()===t)return i;i=i.parentNode}return null}function ct(n){var t=n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length);return!!t}function lt(n){var r,i,t;if(n&&n.getElementsByTagName)for(r=n.getElementsByTagName("input"),i=0;i<r.length;i++)if(t=r[i],t&&t.getAttribute("type")==="text"&&ct(t))return t.value;return null}function at(n){var t=(n.getAttribute("class")||"").trim();return t?t.replace(/(\s+)|([^\w\-])/g,function(n,t,i){return t?".":i?"\\"+i:""}):""}function vt(n){for(var i=[],t=n,r,u,f;t&&t.parentNode&&t!==document.body&&t!==document.documentElement;)r=t.getAttribute("id"),r&&i.push({id:r,el:t}),u=at(t),f=(t.nodeName||"").toLowerCase(),(u||f==="li"||!i.length)&&i.push({cls:u,node:f,el:t}),t=t.parentNode;return i}function yt(n){for(var t,i,e,o,s=vt(n),r=[],u=document,f=0;f<s.length;f++){if(t=s[f],t.id){r.unshift("#"+t.id);u=t.el;break}else i=t.cls?t.node+"."+t.cls:t.node;e=u.querySelectorAll(i);e.length>1&&(o=Array.prototype.indexOf.call(e,t.el),o>-1&&(i+=":nth-child("+(o+1)+")"));r.unshift(i);u=t.el}return r}function pt(n){var i=w(n.target,"a"),e=i&&i.getAttribute("href"),u=w(n.target,"button"),t=w(u,"form"),o=t&&t.getAttribute("action"),h=t&&t.getAttribute("method")==="post",r,f,s;if(i)r=i;else if(u)r=u,e=o;else if(n.target)r=n.target;else return;if(v)try{f=v(n)}catch(c){}else f=o&&t.getAttribute("data-search")&&lt(t);return s=yt(r),{selector:s.join(" "),href:e||"",post:h?"1":"",search:f||""}}function wt(n,t,i){var u=window.jwplayer,r=n&&document.getElementById(n);r&&r.nodeName&&/video/i.test(r.nodeName)?player=r:u&&(player=u(n));player&&t&&i&&(player.sa||(player.sa={}),player.sa.vvid=t,player.sa.vpid=i)}function bt(){var u=document.createElement("script"),f=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,e=window.innerHeight||document.documentElement.offsetHeight||document.body.offsetHeight||0;u.type="text/javascript";u.async=!0;u.src=r+"/sa.js?"+i+","+rt+","+(n("SPPC")||"")+","+(n("SEOD")||"")+","+t(n("SEOK")||"")+","+f+"x"+e+","+nt()+","+l()+","+t(window.location.href)+","+c()+","+(n("PPCAD")||"")+","+(n("PPCEX")||"")+","+(n("PPCCMP")||"")+","+(n("L")||"0")+","+(p()||"0")+","+(ft()||"0");document.head.appendChild(u)}function kt(u){var f=r+"/sa2.js?"+i+","+u+","+l()+","+t(window.location.href)+","+(n("L")||"0")+","+(p()||"0");h(f)}function dt(u){var o=f(),e,s;o&&(e=pt(u),s=r+"/sa3.js?"+i+","+o+","+t(e.selector)+","+(window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0)+","+(window.innerHeight||document.documentElement.offsetHeight||document.body.offsetHeight||0)+","+Math.max(document.documentElement.scrollTop,document.body.scrollTop)+","+(u.pageX||u.clientX||0)+","+(u.pageY||u.clientY||0)+","+t(e.href)+","+t(e.post)+","+t(e.search)+","+(n("L")||"0"),h(s))}function gt(u,e,o,s,h,c){var a=f(),l;a&&(l=document.createElement("script"),l.type="text/javascript",l.async=!0,l.src=r+"/va.js?"+i+","+a+","+u+","+t(o||"")+s+","+h+","+e+","+c+","+(n("L")||"0"),document.head.appendChild(l))}function ni(t,i,u,f){var e=r+"/va2.js?"+t+","+i+","+u+","+f+","+(n("L")||"0");h(e)}var i,d,e,a,b,k;if(!(document.cookie.indexOf("COOK=NO!")>-1)&&(i=document.documentElement.getAttribute("data-sa"),d=!!document.documentElement.getAttribute("data-sd"),i&&!/google|bing|yahoo|spider|crawl|monitor|site24|bots\b|bot\b/i.test(window.navigator.userAgent||""))){var u=null,o=null,rt="https:"===window.location.protocol?"1":"",r="https://sa.scorpion.co",ut=Array.isArray||function(n){return n&&n.constructor===Array},v=null,y;window.location.host&&window.location.host.indexOf("www.")===0&&(y=window.location.host.substr(3));window.SA={Cookie:n,Query:g};window._said_=f;window._vaid_=c;window._raid_=ot;window._vvid_=wt;window._sa_videoStart=gt;window._sa_videoPlay=ni;window._sa_overrideSearch=function(n){v=n};e=f();a=n("SPPC");!a&&window.location.hash&&(k=window.location.hash,k[1]==="~"&&(b=it(k.substr(2))));b?(n("SPPC","true"),et(e,b)):e?(kt(e),a&&tt(e,a),window.Process&&window.Process.Delayed()):(bt(),window.Process&&window.Process.Delayed());window.navigator.sendBeacon&&document.addEventListener&&document.addEventListener("click",dt,!0)}})();
window.USC||(window.USC={});rrequire("usc/p/poly",function(){function r(n){var r;if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(isNaN(r=+n)||n!==String(r)){if(i.test(n))try{return t(n)}catch(u){}}else return r;return n}var t=function(n,t){return(window.JSON2||JSON).parse(n,t)},i=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,n;USC.elementData=function(n){var i,t,u,f;if(!n||!n.attributes)return undefined;for(i={},t=0;t<n.attributes.length;t++){u=n.attributes[t];const e=String(u.name);e.indexOf("data-")===0&&(f=e.substring(5).replace(/\-([a-z])/g,function(n,t){return t.toUpperCase()}),i[f]=r(u.value))}return i};USC.linkData=function(n){var e=n&&n.target,t=e&&e.closest("a,button"),u=t&&t.getAttribute("href"),i=u&&/^javascript:(\w+)(?:\('([^']+)')?(?:\s*,\s*(\d+?)\))?/i.exec(u),o=i&&i[1],r=o==="void"?i[2]:undefined,f;return r&&r!=="0"||(r=t&&t.getAttribute("data-action")),r&&(i&&i[3]?f=+i[3]:t.getAttribute("data-id")&&(f=+t.getAttribute("data-id"))),{link:t,href:u,fn:o,action:r,id:f}};USC.setAttributes=function(n,t){var i,r;for(i in t)t.hasOwnProperty(i)&&(r=t[i],typeof r!="undefined"&&n.setAttribute(i,r))};USC.onVisible=function(n,t,i,r){var u,f,e,o;typeof IntersectionObserver!="undefined"&&(t<0?(u=-t+"px",f=0):(u="0px",f=t),e={root:null,rootMargin:u,threshold:f},o=new IntersectionObserver(function(t,u){var f=t.find(function(n){return n.isIntersecting});if(!r){f&&(i(n),u.unobserve(n),u.disconnect());return}f?i(n):r(n)},e),o.observe(n))};USC.docReady=function(t){if(t){if(!n)switch(document.readyState){case"complete":case"loaded":case"interactive":n=!0;return}if(n)t();else{var i=function(){n=!0;window.removeEventListener("DOMContentLoaded",i);t()};window.addEventListener("DOMContentLoaded",i)}}};USC.uuid=function(){var n=performance.now();return"_xxxxxxxxxxxxxxxx".replace(/x/g,function(){var t=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),t.toString(16)})};USC.guid=function(){var n=performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var i=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),(t=="x"?i:i&3|8).toString(16)})};USC.urlfriendly=function(n){return n?(""+n).replace(/([a-z])(?:'s|s')\b/gi,"$1s").replace(/\W+/gi,"-").toLowerCase():""};USC.logError=function(n,t){if(n&&n.stack&&(console.error(n.stack),t))try{console.error(JSON.stringify(Array.prototype.slice.call(t)))}catch(n){}};USC.getKey=function(n){var i=n.code&&n.code.replace(/Key|Digit/,""),r=n.ctrlKey,u=n.altKey,f=n.shiftKey,t;switch(i){case"AltLeft":case"AltRight":u=!1;break;case"ShiftLeft":case"ShiftRight":f=!1;case"ControlLeft":case"ControlRight":r=!1}return t="",r&&(t+="CTRL-"),u&&(t+="ALT-"),f&&(t+="SHIFT-"),t+i.toUpperCase()};window.register&&window.register("usc/p/utils")});
window.USC||(window.USC={}),function(){function n(n){var t=getComputedStyle(n);return{paddingTop:parseFloat(t.paddingTop),paddingBottom:parseFloat(t.paddingBottom),marginTop:parseFloat(t.marginTop),marginBottom:parseFloat(t.marginBottom),height:t.height==="auto"?0:parseFloat(t.height)}}function t(t,i){t.style.cssText="";t.style.transition="none";t.style.display="block";t.style.height="auto";var r=n(t);return t.style.removeProperty("display"),t.style.removeProperty("height"),t.style.removeProperty("transition"),t.style.cssText=i,t.offsetHeight,r}function i(n){n.style.cssText="";n.removeAttribute("animating")}function r(n,t,r,u){var f="overflow: hidden; display: block; visibility: visible; padding-top: 0; padding-bottom: 0; margin-top: 0; margin-bottom: 0; height:"+(n.dataset.start?n.dataset.start:"0"),e;n.style.cssText=u?u:f;n.offsetHeight;t?(e="overflow: hidden; display: block; visibility: visible; padding-top: "+r.paddingTop+"px; padding-bottom: "+r.paddingBottom+"px; margin-top: "+r.marginTop+"px; margin-bottom: "+r.marginBottom+"px; height: "+r.height+"px;",n.style.cssText=e,n.classList.add("sld-opn")):(n.style.cssText=f,n.classList.remove("sld-opn"));n.setAttribute("animating",!0);n.hasAttribute("bound")||(n.setAttribute("bound",!0),n.addEventListener("transitionend",i.bind(null,n)))}USC.slideToggle=function(i,u){var f,e;i&&(f=n(i),f=f="overflow: hidden; display: block; visibility: visible; padding-top: "+f.paddingTop+"px; padding-bottom: "+f.paddingBottom+"px; margin-top: "+f.marginTop+"px; margin-bottom: "+f.marginBottom+"px; height: "+f.height+"px;",u&&(e=t(i,f)),r(i,u,e,f))};window.register&&window.register("usc/p/slide-toggle")}();
window.USC||(window.USC={});require2(["usc/p/utils","usc/p/slide-toggle"],function(){function t(t){var e=t.closest("[data-showhide]")||t,o;(this.els={box:e,btns:Array.from(e.querySelectorAll('[data-role="btn"]')),panel:e.querySelector('[data-role="panel"]')},this.els.btns&&this.els.panel)&&(o=USC.elementData(this.els.box),this.options=Object.assign({},n,o),this.els.lastFocus=Array.from(this.els.panel.querySelectorAll('a, button, input, select, [tabindex="0"], video')).pop(),this.els.lastFocus||(this.els.lastFocus=this.els.panel),this.active=!1,this.handleAria=i.bind(this),this.handleClick=r.bind(this),this.handleKeyDown=u.bind(this),this.toggleActive=f.bind(this),this.handleAria(),this.els.returnSpot=this.els.returnSpot?this.els.returnSpot:this.els.btns[0],this.els.box.addEventListener("keydown",this.handleKeyDown),this.els.box.addEventListener("click",this.handleClick))}function i(){this.els.box.setAttribute("role","dialog");USC.setAttributes(this.els.panel,{"aria-hidden":!0,tabindex:0});for(var n=0;n<this.els.btns.length;n++)USC.setAttributes(this.els.btns[n],{role:"button",tabindex:0,"aria-pressed":!1,"aria-haspopup":!1}),this.els.returnSpot||this.els.btns[n].getAttribute("data-type")!=="open"||(this.els.returnSpot=this.els.btns[n])}function r(n){n.target.closest('[data-role="btn"]')&&this.toggleActive()}function u(n){var t;n.keyCode===27&&this.active&&(t=!0);n.keyCode===13&&this.els.btns.includes(n.target)&&(t=!0);n.keyCode===9&&this.els.panel.contains(n.target)&&(n.shiftKey&&this.els.panel==n.target?(t=!0,n.preventDefault()):n.shiftKey||this.els.lastFocus!=n.target||(t=!0,this.els.lastFocus=this.els.panel));t===!0&&this.toggleActive()}function f(){var n,t;if(this.options.slider===!0&&USC.slideToggle(this.els.panel,!this.active),n=this.els.panel.querySelectorAll("video"),this.active)n.forEach(function(n){try{n.pause()}catch(t){}});else try{n[0].readyState>=1&&n[0].play()}catch(i){}for(this.els.box.classList.toggle(this.options.className),this.els.panel.setAttribute("aria-hidden",this.active),t=0;t<this.els.btns.length;t++)this.els.btns[t].setAttribute("aria-pressed",this.active?!1:!0);this.options.htmlClass&&document.querySelector("html").classList.toggle(this.options.className);this.active?this.els.returnSpot.focus():this.els.panel.focus();this.active=this.active?!1:!0}var n={className:"show",htmlClass:!1,slider:!1};window.USC.showHide=function(n){if(n instanceof HTMLElement){if(n.$showHide){console.log("showHide already initialized.");return}n.$showHide=new t(n)}else throw new Error("Need an HTMLElement to initialize a showHide.");};window.register&&window.register("usc/p/show-hide")});
window.USC||(window.USC={}),function(){function t(){for(var i=document.cookie.split(";"),t=0;t<i.length;t++)i[t].indexOf("AO=")>0&&(this.cookieData=n(i[t].match(/[\{].+[}]/g)),this.cookieData.contrast&&document.documentElement.classList.add("high-contrast"),this.cookieData.text&&(this.cookieData.text==1?document.documentElement.classList.add("x1"):this.cookieData.text==2&&document.documentElement.classList.add("x2")))}function i(){var n=new Date;n.setTime(n.getTime()+2592e6);document.cookie="AO="+JSON.stringify(this.cookieData)+"; expires="+n+";path=/"}function r(){document.documentElement.classList.contains("x2")?(document.documentElement.classList.remove("x2"),this.cookieData.text=!1):document.documentElement.classList.contains("x1")?(document.documentElement.classList.remove("x1"),document.documentElement.classList.add("x2"),this.cookieData.text=2):(document.documentElement.classList.add("x1"),this.cookieData.text=1);window.dispatchEvent(new CustomEvent("scroll"))}function u(){this.content.setAttribute("tabindex",0);this.content.focus()}function f(n){var t=n.target.closest("[data-action]");if(t&&(n.type!=="keydown"||n.keyCode===13)){switch(t.getAttribute("data-action")){case"content":this.skipToContent();break;case"highContrast":document.documentElement.classList.toggle("high-contrast");this.cookieData.contrast=document.documentElement.classList.contains("high-contrast")?!0:!1;break;case"largeText":this.textSize();break;case"clear":document.documentElement.classList.remove("high-contrast","x1","x2");this.cookieData.contrast=!1;this.cookieData.text=!1}this.setCookie()}}var n=function(n,t){return(window.JSON2||JSON).parse(n,t)};USC.accessMenu=function(n){this.content=document.querySelector('[data-content="true"]');this.content||n.querySelector('[data-action="content"]').remove();this.cookieData={contrast:!1,text:!1};this.handleClick=f.bind(this);this.cookieFinder=t.bind(this);this.skipToContent=u.bind(this);this.textSize=r.bind(this);this.setCookie=i.bind(this);this.cookieFinder();n.addEventListener("click",this.handleClick);n.addEventListener("keydown",this.handleClick)};window.register&&window.register("usc/p/accessibility-menu")}();
require2(["usc/p/show-hide","usc/p/accessibility-menu"],function(){var n=document.getElementById("AccessibilityOptionsV1"),t=n.querySelector(".acc-mnu");n&&(USC.showHide(n),USC.accessMenu(t))});
(function(){Element.prototype.scrollParent||(Element.prototype.scrollParent=function(){for(var n=this.parentNode,t=this.ownerDocument,i=t&&t.defaultView;i&&n;){if(n.parentNode&&n.parentNode!==t.body&&n.parentNode!==t.documentElement&&n.parentNode!==t&&n.parentNode!==t.defaultView){if(i.getComputedStyle(n).getPropertyValue("overflow")!=="visible")return n}else return null;n=n.parentNode}return null});Element.prototype.scrollTo||(Element.prototype.scrollTo=function(n,t){this.scrollLeft=n;this.scrollTop=t});Element.prototype.scrolling||(Element.prototype.scrolling=function(n,t,i,r,u){var e,f,s;if(!n&&!t){if(r)try{r.call(this)}catch(l){}return}if(e=this.cancelAnimationFrame?this:this.ownerDocument.defaultView,e){if(this.$scrolling&&this.$scrolling.frame&&(e.cancelAnimationFrame(this.$scrolling.frame),u)){var o=this.$scrolling,h=o.diffX-((this.pageXOffset||this.scrollLeft||0)-o.startX),c=o.diffY-((this.pageYOffset||this.scrollTop||0)-o.startY);h&&(n+=h);c&&(t+=c)}if(delete this.$scrolling,f={startX:this.pageXOffset||this.scrollLeft||0,startY:this.pageYOffset||this.scrollTop||0,diffX:n,diffY:t,dur:i||Math.min(500,Math.max(250,Math.abs(t/4))),frame:0,style:this.constructor===Window?e.document.documentElement.style:this.style},r&&typeof r=="function"&&(f.callback=r),f.diffY<0&&f.startY===0&&(f.diffY=0),f.diffX<0&&f.startX===0&&(f.diffX=0),!f.diffY&&!f.diffX){if(f.callback)try{f.callback.call(this)}catch(l){}f=null;return}if(f.dur<0){n=f.diffX+f.startX;t=f.diffY+f.startY;this.scrollTo(n,t);return}this.$scrolling=f;s=function(n){var r,i,u,f,t=this.$scrolling;if(t.begin){if(r=n-t.begin,i=Math.min(1,r/t.dur),i=.5-Math.cos(i*Math.PI)/2,u=i*t.diffX+t.startX,f=i*t.diffY+t.startY,this.scrollTo(u,f),i===1){if(t.style&&(t.style.removeProperty("scroll-behavior"),delete t.style),t.callback)try{t.callback.call(this)}catch(o){}delete this.$scrolling;return}}else t.begin=n,t.style&&t.style.setProperty("scroll-behavior","auto");this.$scrolling.frame=e.requestAnimationFrame(s)}.bind(this);this.$scrolling.frame=e.requestAnimationFrame(s)}});Window.prototype.scrolling||(Window.prototype.scrolling=Element.prototype.scrolling);Document.prototype.getFixedElements||(Document.prototype.getFixedElements=function(){for(var n,r,t,u=this.querySelectorAll("aside,div,header,nav,ul"),f=[],i=0;i<u.length;i++)n=u[i],r=getComputedStyle(n),t=r.getPropertyValue("position"),(t==="fixed"||t==="sticky")&&f.push(n);return f});Document.prototype.fixedOffset||(Document.prototype.fixedOffset=function(){for(var n,u=this.documentElement.clientWidth/2,r=this.getFixedElements(),t=0,i=0;i<r.length;i++)n=r[i].getBoundingClientRect(),n.top===0&&n.left===0&&n.width>u&&n.height>t&&(t=n.height);return t});Element.prototype.scrollIntoViewport||(Element.prototype.scrollIntoViewport=function(n){var o=this.getBoundingClientRect(),i={top:o.top,right:o.right,bottom:o.bottom,left:o.left,width:o.width,height:o.height},f,e,r,t,l,s,u,h,c,a,v;if(n&&n.height&&(i.height=n.height,i.bottom=i.top+i.height),i.height===0&&i.top===0){if(f=this.previousElementSibling&&this.previousElementSibling.getBoundingClientRect(),f&&f.height?i={top:f.bottom+1,right:f.right,bottom:f.bottom+2,left:f.left,width:f.width,height:1}:e=this.nextElementSibling&&this.nextElementSibling.getBoundingClientRect(),e&&e.height)i={top:e.top-2,right:e.right,bottom:e.top-1,left:e.left,width:e.width,height:1};else if(!i&&(i=this.parentNode.getBoundingClientRect(),!i.height))return}else if(i.height===0&&this.nodeName==="INPUT"&&(i=this.parentNode.getBoundingClientRect(),!i.height))return;if(r=n&&n.container,r!==!1)if(r)if(r.ownerDocument){if(!r.contains(this)){console.error("Element not found in container",this,r);return}}else{console.error("Invalid container",r);return}else if(r=this.scrollParent(),!r)return;if(t={},r){if(t.height=r.clientHeight,!t.height)return;t.width=r.clientWidth;l=r.getBoundingClientRect();t.top=l.top;t.left=l.left;t.topOffset=0}else{if(s=this.ownerDocument,!s||!s.documentElement)return;t.height=s.documentElement.clientHeight;t.width=s.documentElement.clientWidth;t.top=0;t.left=0;t.topOffset=n&&n.fixed?s.fixedOffset():0}u=n&&n.margin||0;h=0;n&&n.top?h=i.top-t.topOffset-t.top-u:i.top>t.top+t.height?h=i.height>t.height-1?i.top-t.topOffset-t.top-u:i.bottom-t.top-t.height+u:i.bottom<t.top+t.topOffset+u&&(h=i.height>t.height-1?i.bottom-t.top-t.height+u:i.top-t.topOffset-t.top-u);c=0;i.left>t.left+t.width?c=i.width>t.width-1?i.left-t.left-u:i.right-t.left-t.width+u:i.right<t.left+u&&(c=i.width>t.width-1?i.right-t.left-t.width+u:i.left-t.left-u);a=n&&n.instant?-1:n&&n.duration;v=n&&n.callback;(r||this.ownerDocument.defaultView).scrolling(c,h,a,v)});window.register&&window.register("usc/p/scroll")})();
window.USC||(window.USC={});require2(["usc/p/utils","usc/p/scroll"],function(){function t(n){for(var t=n.closest("[data-header]")||n,r,u,f,i;t&&t!==document.body;){if(f=getComputedStyle(t),i=f.getPropertyValue("position"),i==="fixed"||i==="sticky"||i==="absolute"||t.matches("header")){r=t;(i==="fixed"||i==="absolute")&&(u=document.querySelector("main>form:first-child>section")||document.querySelector("main>section:first-child")||document.querySelector("main"));break}t=t.parentNode}return{header:r,padding:u}}function i(n){this.element=n;this.els=t(n);this.state={over:!1,rtimer:0,stimer:0,htimer:0,h_height:0,wn_height:0,wn_width:0,scroll:0,collapsed:!1};this.evt={measure:function(){this.measure()}.bind(this),scroll:function(){clearTimeout(this.state.stimer);clearTimeout(this.state.htimer);this.state.stimer=setTimeout(this.adjust,100)}.bind(this)};this.hide=c.bind(this);this.measure=l.bind(this);this.adjust=v.bind(this);this.element.addEventListener("focusin",r.bind(this));this.element.addEventListener("mouseover",u.bind(this));this.element.addEventListener("mouseleave",f.bind(this));this.element.addEventListener("click",e.bind(this));this.els.header&&(this.measure(),this.adjust(),this.els.header.addEventListener("mouseenter",o.bind(this)),this.els.header.addEventListener("mouseleave",s.bind(this)),window.addEventListener("resize",h.bind(this)),window.addEventListener("scroll",a.bind(this),{passive:!0}))}function r(t){var r=t.target.closest("li"),i;if(r&&!r.classList.contains("active"))for(this.element.querySelectorAll("li.active").forEach(n),r.classList.add("active"),i=r.parentNode;i&&i!==this.element;)i.nodeName==="LI"&&i.classList.add("active"),i=i.parentNode}function u(n){var t=n.target.closest("a");t&&t.focus()}function f(){this.element.querySelectorAll("li.active").forEach(n);var t=document.activeElement;t&&this.element.contains(t)&&t.blur()}function e(n){var t=USC.linkData(n),i,r;if(t.href&&t.href[0]==="#"&&(i=t.href.substring(1))&&(r=document.querySelector("a[name='"+i+"']"),r))throw new Error("Need to implement the simple show/hide.");}function o(){this.state.over=!0}function s(){this.state.over=!1;this.state.htimer&&(clearTimeout(this.state.htimer),this.state.htimer=setTimeout(this.hide,4e3))}function h(){clearTimeout(this.state.rtimer);this.state.rtimer=setTimeout(this.measure,250)}function c(){this.state.over||(clearTimeout(this.state.htimer),this.state.htimer=0,this.adjust(!0))}function l(){if(this.els.header){var n=this.els.header.getBoundingClientRect();this.state.h_height=n.height;this.state.wn_height=window.innerHeight;this.state.wn_width=window.innerWidth;this.state.scroll=window.scrollY;this.els.padding&&(this.els.padding.style.paddingTop=this.state.h_height+"px")}}function a(){clearTimeout(this.state.stimer);clearTimeout(this.state.htimer);this.state.stimer=setTimeout(this.adjust,100)}function v(n){var r,u,i,t;this.els.header&&(r=window.scrollY,u=r-this.state.scroll,clearTimeout(this.state.htimer),r<this.state.h_height?i=!1:n===!0?i=!0:u<this.state.wn_height/-3?(i=!1,this.state.htimer=setTimeout(this.evt.hide,4e3)):i=!0,this.state.scroll=r,t=document.documentElement,i?(t.classList.remove("header-show"),t.classList.add("header-hide")):r?(t.classList.remove("header-hide"),t.classList.add("header-show")):(t.classList.remove("header-hide"),t.classList.remove("header-show")),this.state.collapsed=i)}var n=function(n){n.classList.remove("active")};window.USC.siteHeader=function(n){if(n instanceof HTMLElement){if(n.$siteHeader){console.log("SiteHeader already initialized.");return}n.$siteHeader=new i(n)}else throw new Error("Need an HTMLElement to initialize a SiteHeader.");};window.register&&window.register("usc/p/site-header")});
require2('usc/p/site-header',function(){USC.siteHeader(document.getElementById('HeaderV1TopNav'))});
window.USC||(window.USC={});require2(["usc/p/utils","usc/p/slide-toggle"],function(){function e(t){var i,w,e,b;if((this.element=t,i=t.closest(".el-tab-box")||t,this.els={tabBox:i,tabs:Array.from(i.querySelectorAll(".el-tab")),panels:Array.from(i.querySelectorAll(".el-panel")),secTabs:Array.from(i.querySelectorAll(".el-sec-tab")),tabbable:[]},!this.els.panels.length||!this.els.tabs.length)||(w=USC.elementData(t),this.options=Object.assign({},u,w),this.handleAria=s.bind(this),this.getTabbable=h.bind(this),this.handleSubs=o.bind(this),this.tabState=y.bind(this),this.firstActive=a.bind(this),this.toggleActive=p.bind(this),this.checkValidity=l.bind(this),this.handleClick=n.bind(this),e=Array.from(this.els.tabBox.querySelectorAll(".el-tab-box")),e.length&&this.handleSubs(e),!this.els.panels.length||!this.els.tabs.length)||(this.els.secTabs.length&&(this.options.secTabs=!0),b=v(this.els.panels),!b))return!1;this.options.nextPrev&&(this.els.next=i.querySelector(".el-next-btn"),this.els.prev=i.querySelector(".el-prev-btn"));this.handleAria();this.options.firstActive===!0&&this.firstActive();this.getTabbable();this.els.tabBox.addEventListener("keydown",c.bind(this));this.els.tabBox.addEventListener("click",n.bind(this));this.options.hovers&&(f.matches||(this.els.tabBox.addEventListener("mouseover",n.bind(this)),this.els.tabBox.addEventListener("focusin",n.bind(this))),this.options.hoverStay||(this.els.tabBox.addEventListener("mouseleave",r.bind(this)),this.els.tabBox.addEventListener("focusout",r.bind(this))))}function t(n,t,i,r){for(var u=0;u<n.length;u++)if(n[u].contains(t)&&t!=n[u]){i.splice(r,1);break}}function o(n){for(var i,r,f,e=this.els.tabs.slice(0),o=this.els.panels.slice(0),s=this.els.secTabs.slice(0),u=this.els.tabs.length-1;u>=0;u--)t(n,this.els.tabs[u],e,u);for(this.els.tabs=e,i=this.els.panels.length-1;i>=0;i--)t(n,this.els.panels[i],o,i);for(this.els.panels=o,r=this.els.secTabs.length-1;r>=0;r--)t(n,this.els.secTabs[r],s,r);for(this.els.secTabs=s,f=0;f<n.length;f++)new window.USC.tabbable(n[f])}function i(n,t){for(var i=0;i<n.length;i++)if(n[i].getAttribute("aria-controls")===t)return n[i]}function s(){var o=this.els.tabs[0],s=this.els.panels[0],h=o&&o.closest("ul"),r,u,c,f,n,t,e;if(h&&h.setAttribute("role","tablist"),this.options.siblings===!1)for(r=0;r<this.els.panels.length;r++)this.els.panels[r].setAttribute("tabindex",0);else s&&getComputedStyle(s).position!=="absolute"&&this.options.hovers===!1&&(this.options.slider=!0);if(this.els.panelIds=s&&this.els.panels[0].getAttribute("id")?!0:!1,this.els.tabControls=o&&this.els.tabs[0].getAttribute("aria-controls")?!0:!1,!h&&this.els.panelIds&&this.els.tabControls){for(u=[],c=[],k=0;k<this.els.panels.length;k++)u.push(i(this.els.tabs,this.els.panels[k].getAttribute("id"))),this.options.secTabs&&u.push(i(this.els.secTabs,this.els.panels[k].getAttribute("id")));this.els.tabs=u;this.options.secTabs&&(this.els.secTabs=c)}for(f=0;f<this.els.panels;f++)if(this.els.panels[f].contains(this.els.tabs[0])){this.els.tabsInPanels=!0;break}for(n=0;n<this.els.tabs.length;n++){if(!this.els.tabs[n].classList){console.warn("This node does not support the classList property",this.els.tabs[n]);continue}if(!this.els.panels[n]){console.warn("No panel found for this tab",this.els.tabs[n]);continue}t=this.els.tabs[n].classList.contains("active")?!0:!1;e=this.els.panelIds?this.els.panels[n].getAttribute("id"):this.element.getAttribute("id")?this.element.getAttribute("id"):Math.floor(Math.random()*100)+"Panel"+n;USC.setAttributes(this.els.tabs[n],{role:"tab",tabindex:0,"aria-selected":t,"aria-expanded":t,"aria-controls":e,index:n});this.options.secTabs&&USC.setAttributes(this.els.secTabs[n],{role:"tab",tabindex:0,"aria-selected":t,"aria-expanded":t,"aria-controls":e,index:n});USC.setAttributes(this.els.panels[n],{role:"tabpanel","aria-hidden":t?!1:!0,id:e})}this.els.next&&USC.setAttributes(this.els.next,{role:"button",title:"View the Next Panel"});this.els.prev&&USC.setAttributes(this.els.prev,{role:"button",title:"View the Previous Panel"})}function h(){for(var i=Array.from(this.els.tabBox.querySelectorAll("a,button,input,select,[tabindex]")),n,u,r,t;i.length;)if((n=i.shift(),this.els.tabbable.push(n),u=this.els.tabs.indexOf(n),!(u<0))&&(r=this.els.panels[u],r))for(t=0;t<i.length;t++)n=i[t],(r===n||r.contains(n))&&(this.els.tabbable.push(n),i.splice(t,1),t--)}function n(n){var i=n.target.closest(".el-tab"),r=n.target.closest(".el-sec-tab"),o=n.target.closest(".el-next-btn"),s=n.target.closest(".el-prev-btn"),u=n.target.closest(".ui-novalidate"),f,e,t;if(o){if(this.activeIndex+1<=this.els.panels.length-1){if(this.options.stepForm&&!u&&(t=this.checkValidity(),!t))return;this.tabState(this.activeIndex+1)}}else if(s){if(this.activeIndex-1>=0){if(this.options.stepForm&&!u&&(t=this.checkValidity(),!t))return;this.tabState(this.activeIndex-1)}}else if(i||r){if(f=r&&this.els.secTabs.indexOf(r),r&&f>-1&&(i=this.els.tabs[parseInt(r.getAttribute("index"))]),e=this.els.tabs.indexOf(i),e<0)return;if(this.options.stepForm&&(t=this.checkValidity(),!t))return;if(i.classList.contains("active"))if(this.options.closing)this.tabState(-1);else return;else this.tabState(this.els.tabs.indexOf(i))}else{this.options.hover&&!this.options.hoverStay&&this.tabState(-1);return}}function c(n){var e,u,i,f,t,r;if(n.keyCode===13){if(n.shiftKey&&n.ctrlKey&&n.altKey)return;if((e=n.target.closest(".el-tab"))||(e=n.target.closest(".el-sec-tab"))){this.handleClick(n);return}return}if(n.keyCode===9&&(u=this.els.tabbable.indexOf(n.target),!(u<0))&&!this.els.tabsInPanels){for(t=u+(n.shiftKey?-1:1);t<this.els.tabbable.length&&t>=0;n.shiftKey?t--:t++)if(i=this.els.tabbable[t],f=i.getBoundingClientRect(),f.width&&f.height)break;else{i=undefined;continue}i?(i.focus(),n.preventDefault()):n.shiftKey||(r=document.createElement("span"),r.setAttribute("tabindex",0),this.els.tabBox.appendChild(r),r.focus(),r.remove())}}function r(){this.tabState(-1)}function l(){for(var t,i,r,n=0;n<this.els.panels.length;n++)if(this.els.panels[n].classList.contains("active")){r=this.els.panels[n];continue}if(t=Array.from(r.querySelectorAll("input, select, textarea")),t)for(i=0;i<t.length;i++)if(!t[i].trigger("invalid"))return!1;return!0}function a(){for(var r,i,t=0,n=0;n<this.els.tabs.length;n++)if(r=this.els.tabs[n],i=r.getBoundingClientRect(),i.width||i.height){t=parseInt(n);break}this.activeIndex=t;this.tabState(t)}function v(n){for(var i,r,t=0;t<n.length;t++)if((i=n[t],!i.classList.contains("active"))&&(r=i.getBoundingClientRect(),r.width||r.height))return!1;return!0}function y(n){for(var i,r,t=0;t<this.els.tabs.length;t++)i=this.els.tabs[t],r=this.els.panels[t],this.toggleActive(i,r,t===n),t===n&&(this.activeIndex=n);this.activeIndex===0?(this.els.tabBox.classList.add("tab-start"),this.els.tabBox.classList.remove("tab-end")):this.activeIndex===this.els.panels.length-1?(this.els.tabBox.classList.remove("tab-start"),this.els.tabBox.classList.add("tab-end")):this.els.tabBox.classList.remove("tab-start","tab-end")}function p(n,t,i){i&&n.classList.contains("active")||(i||n.classList.contains("active"))&&(this.options.slider===!0&&USC.slideToggle(t,i),n.classList.toggle("active"),t.classList.toggle("active"),USC.setAttributes(n,{"aria-selected":i,"aria-expanded":i}),t.setAttribute("aria-hidden",i?!1:!0),this.options.secTabs&&(secTab=this.els.secTabs[n.getAttribute("index")],secTab.classList.toggle("active"),USC.setAttributes(secTab,{"aria-selected":i,"aria-expanded":i}),i||n.focus()),i&&this.els.tabsInPanels&&t.focus(),i&&t.dispatchEvent(new Event("resize")),this.options.lazy===!0&&i&&t.querySelector("img[data-src],img[data-bg],video[data-src],source[data-src]").length>0&&window.dispatchEvent(new Event("resize")),this.options.video!==!0||i||t.querySelectorAll("video").forEach(function(n){try{n.pause()}catch(t){}}))}var u={slider:!1,speed:500,siblings:!0,closing:!1,hovers:!1,hoverStay:!0,video:!1,lazy:!1,firstActive:!1,stepForm:!1,nextPrev:!1},f=window.matchMedia("(hover:none)");window.USC.tabbable=function(n){if(n instanceof HTMLElement){if(n.$tabbable){console.log("Tabbable already initialized.");return}n.$tabbable=new e(n)}else throw new Error("Need an HTMLElement to initialize a Tabbable.");};window.USC.setTabbableActive=function(n){var i=n.closest(".el-panel"),r,t,u;if(i&&!i.offsetHeight){for(t=n;t;)if(t.$tabbable){r=t.$tabbable;break}else if(t===i)break;else if(t.parentNode)t=t.parentNode;else break;r&&(u=r.els.panels.indexOf(i),u!==-1&&r.tabState(u))}};window.register&&window.register("usc/p/tabbable")});
require2('usc/p/tabbable',function(){USC.tabbable(document.getElementById('HeaderV1TopNav'))});
require2('usc/p/show-hide',function(){USC.showHide(document.getElementById('HeaderV1TopNav'))});