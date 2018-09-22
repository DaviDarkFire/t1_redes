__monitoracaoJsuol = "https://www.uol.com.br/camaleao/assets/web/home.js";
;(function(console, undefined) {
  if(console === undefined) {
    var noop = function() {};
    window.console = {
      log: noop,
      info: noop,
      debug: noop,
      error: noop
    };
  }
}(window.console, undefined));
      /*! @source /camaleao/assets/web/javascript/jquery-1.11.1.min.js */
        /*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
        /*! @source /camaleao/assets/web/javascript/jquery.lazyany.js */
        /*!
 * @name jquery.lazyany
 * @description Permite o carregamento atrasado de qualquer elemento.
 * @author gpaes@uolinc.com
 * @version 0.1.3
 */
;(function($, window, document, undefined) {
  'use strict';
  var store = [], poll;
  /**
   * Verifica se o elemento está visível na
   * viewport do navegador.
   *
   * Based on original echo lazy-loading script:
   * https://github.com/toddmotto/echo
   *
   * @param {DOMElement} el Elemento DOM que será verificado
   * @return {Boolean}
   */
  function isVisible(el, opts) {
    var coords = el.getBoundingClientRect(),
      topScroll = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
      offset = opts.offset;
    var c_top = (coords.top >= 0 && coords.left >= 0 && coords.top),
      viewport_height = (window.innerHeight || document.documentElement.clientHeight) + offset;
    return (c_top <= viewport_height) && (topScroll + coords.top + offset >= topScroll);
  }
  /**
   * Percorre todas as instâncias do `lazyany` em busca
   * de elementos visíveis.
   *
   * @param {Int} index Opcional. Index da instância. Quando uma instância
   *                    é criada, apenas os elementos dela são validados.
   */
  function run(index) {
    var instances = isNaN(index) === true ? store : [store[index]];
    for(var i = 0; i < instances.length; i++) {
      var instance = instances[i],
        $els = instance.$els;
      for(var e = 0; e < $els.size(); e++) {
        var el = $els[e];
        if(isVisible(el, instance) === true) {
          // elemento está ativo
          yeah(el, instance);
        }
      }
    }
  }
  /**
   * Executado para cada elemento ativo.
   *
   * @param {DOMElement} el Elemento que está visível
   * @param {lazyany Instance} instance Configuração da instância
   */
  function yeah(el, instance) {
    instance.callback.call(instance.scope, el);
    // remove o elemento da lista, melhorando performance
    // quanto mais elementos forem sendo exibidos
    var els = $.grep(instance.$els, function(_el) {
      return _el !== el;
    });
    instance.$els = $(els);
  }
  /**
   * Remove os eventos registrados para um instância.
   */
  function destroy(instances) {
    for(var i = 0; i < instances.length; i++) {
      var instance = $(instances[i]).data('lazyany');
      for(var s = 0; s < store.length; s++) {
        if(instance === store[s]) {
          instance.$els.data('lazyany', null);
          store.splice(s, 1);
          break;
        }
      }
    }
    return true;
  }
  $.fn.lazyany = function() {
    var options = {}, callback;
    // destroy
    if('destroy' === arguments[0]) {
      destroy(this);
      return this;
    }
    for(var a = 0, t = arguments.length; a < t; a++) {
      if('function' === typeof arguments[a]) {
        callback = arguments[a];
      }
      if('object' === typeof arguments[a]) {
        options = arguments[a];
      }
    }
    if(callback && !options.plugin) {
      options.callback = callback;
    }
    if(options.plugin && $.fn.lazyany.plugins[options.plugin]) {
      options.callback = $.fn.lazyany.plugins[options.plugin];
    }
    options.$els = this;
    var opts = $.extend({}, $.fn.lazyany.defaults, options);
    run(store.push(opts) - 1);
    this.data('lazyany', opts);
    return this;
  };
  // plugins pré-carregados.
  $.fn.lazyany.plugins = {
    // Carregamento atrasado de imagens
    image: function(el) {
      var $el = $(el),
        src = $el.attr('data-original') || $el.attr('data-src');
      if(src) {
        $el.attr('src', src);
      }
    }
  };
  // configurações padrões para cada instância
  $.fn.lazyany.defaults = {
    offset: 250,     // distância para começar a carregar o elemento antes de ser visível
    callback: $.noop // função que será executado quando o elemento for visível
  };
  /**
   * Procura por novos elementos quando houver scroll e resize
   * do window.
   *
   * Evento `onload` é necessário para navegador webkit do IOS, que no
   * reload automático não dispara evento `scroll`
   */
  $(window).on('scroll resize onload', function _run() {
    clearTimeout(poll);
    poll = setTimeout(run, 200);
  });
}(jQuery, window, document, undefined));
        /*! @source /camaleao/assets/web/javascript/tryit.js */
        /*!
 * try it!
 * lib para teste A/B
 * @uol
 */
var tryit = window.tryit || (function(window, document) {
  'use strict';
  /**
   * Número limite para o número randômico. Deve ser múltiplos de 10.
   * LIMIT não pode ser menor que 1000.
   *
   * Quanto maior o número, `melhor` a distribuição.
   *
   * @type {Int}
   */
  var LIMIT = 1000;
  /**
   * Valida se o usuário está habilitado para usar a API localStorage.
   * https://gist.github.com/gustavopaes/6024904
   * @type {Boolean}
   */
  var storageValidation = (function() {
    var validation;
    try {
      // IE <= 9 e demais navegadores devem retornar TRUE
      validation = !!window.localStorage;
      // Se estiver em modo Private no Safari, DOM Exception será retornado,
      // alegando falta de espaço para armazenamento.
      if(validation === true) {
        localStorage.setItem('__test', '');
        localStorage.removeItem('__test');
      }
    } catch(e) {
      // possível erro de Access Denied no IE 10 ou
      // modo private no Safari.
      validation = false;
    }
    return validation;
  }());
  /**
   * Retorna o valor de um cookie.
   * @param {String}
   * @return {String/ Null Object}
   */
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length,c.length));
    }
    return null;
  }
  /**
   * Cria um cookie.
   * @param {String}
   * @param {String}
   * @param {int}
   */
  function saveCookie(name, value, expires) {
    var cookieLifeTime = new Date();
    cookieLifeTime.setDate(cookieLifeTime.getDate()+(expires||365));
    expires = cookieLifeTime ? "; expires=" + cookieLifeTime : "";
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
  }
  /**
   * Retorna valor de um dado guardado no cookie ou no storage.
   * @param {String}
   * @return {String/ Null Object}
   */
  function read(name) {
    if(storageValidation === true) {
      return window.localStorage.getItem(name);
    }
    return readCookie(name);
  }
  function save(name, value) {
    if(storageValidation === true)  {
      window.localStorage.setItem(name, value);
    } else {
      saveCookie(name, value);
    }
    return value;
  }
  /**
   * Transforma uma string em nome de classe CSS
   * @param {String}
   * @return {String}
   */
  function toClass(str) {
    // se começar com número
    if(isNaN(str[0]) === false) {
      str = '_' + str;
    }
    // 1. transforma tudo em caixa baixa
    // 2. remove tudo que não for números (\d), letras (a-z) e espaço
    // 3. transforma letras precedidas de espaço em caixa alta (ie: que legal -> queLegal)
    return str.toLowerCase().replace(/[^\da-z ]/g, '').replace(/( .)/g, function(a, b) {
      return b.trim().toUpperCase();
    });
  }
  /**
   * Função noop
   * @type {Function}
   */
  var noop = function(){};
  /**
   * Retorna a soma dos itens de um array.
   * @param {Array}
   * @return {Int/Float}
   */
  function sum(arr) {
    var a, ret = 0;
    for(a in arr) {
      if(arr.hasOwnProperty(a) === true) {
        // deixa número
        arr[a] = parseFloat(arr[a]);
        ret += arr[a];
      }
    }
    return ret;
  }
  /**
   * Retorna um número randômico de 1 a LIMIT.
   * @return {Int}
   */
  function random() {
    return parseInt(Math.random() * LIMIT) + 1;
  }
  /**
   * Faz o sorteio de um dos testes para o usuário.
   * @param {Array} distribuição do teste
   * @return {Int} índice da distribuição que o usuário caiu
   */
  function pickup(tests) {
    var number = random(),
      range = LIMIT, t;
    for(t in tests) {
      if(tests.hasOwnProperty(t) === true) {
        var value = (tests[t] * LIMIT) / 100;
        range -= value;
        if(number >= range) {
          return t;
        }
      }
    }
    return null;
  }
  // @public
  return function(name, tests, callback) {
    if(sum(tests) !== 100) {
      console.error('[tryid]\tA soma das distribuições deve ser 100.');
      return (callback || noop).call(null, null, false, false);
    }
    // verifica se deve ser registrado cookie
    var saveCookie = name[0] !== '!';
    // verifica se o teste está ativo.
    // se estiver ativo, faz o sorteio.
    // se não estiver ativo, não faz o sorteio, mas quem já
    // caiu no teste, é mantido.
    var activeTest = name[0] !== '^';
    // remove o primeiro caracter se ele for de ativação de serviços
    if(/^[!^]/.test(name) === true) {
      name = name.substr(1);
    }
    // cria id, baseado no nome do teste, para
    // identificação futura
    var id = 'tryit-' + toClass(name);
    // verifica se usuário já possui teste
    var chosen = saveCookie === true ? read(id) : null;
    // indica se o usuário está carregando pela primeira vez a
    // versão sorteada
    var firstTime = chosen === null;
    // faz sorteio
    if(chosen === null && activeTest === true) {
      chosen = pickup(tests);
      // não salva o resultado do sorteio.
      // usado mais para testes, onde o mesmo sorteio
      // deve ser realizado várias vezes
      if(saveCookie === true) {
        save(id, chosen);
      }
    }
    (callback || noop).call({
      // aplica classe CSS do sorteio no body
      addClass: function() {
        document.body.className += ' ' + id + toClass(' '+chosen);
      }
    }, chosen, firstTime, false);
  };
}(window, document));
        /*! @source /camaleao/assets/libs/usocket/dist/usocket.js */
        !function(e){"use strict";"object"!=typeof e.usocket&&(e.usocket=function(f,t){var a=function(){},e=navigator.userAgent,r=void 0!==t.WebSocket&&3===t.WebSocket.CLOSED;!0===/Android (4.[0123]|2.\d)/.test(e)&&!1===/ Chrome\//.test(e)&&(r=!1);var d={},s="rtw.uol.com",c=!1,i=1e3,h=1e4,p=1006,g=1e3,v=4001,m=4002,b={},o=[],C=null,n=null,l=+new Date,u=null,k=function(e){return f.map(e,function(e){return[e]})},y=function(){if(45e3<=+new Date-l&&C&&!0!==C.isFake&&(d.send(""),l=+new Date),!1===d.isConnected()&&C)return C.onerror({code:"TIMEOUT"}),!1;n=setTimeout(y,5e3)},N=function(e,n,o){var t=[];o?b[o]&&t.push(b[o]):t=t.concat(k(b));for(var r=0,i=t.length;r<i;r++)void 0!==t[r]&&"function"==typeof t[r].pub&&t[r].pub(e,n)},O=function(e){if(null!==C){var n=[];if(e){if(b[e]&&n.push(b[e]),!0===C.isFake)return C.removeChannels(e),!0}else n=n.concat(k(b));for(var o=0,t=n.length;o<t;o++)n[o].off(),delete b[n[o].channelName]}},S=function(){O(),clearTimeout(n),C&&(C.onmessage=null,C.onclose=null,C.onerror=null,C=null)},w=function(e){if("string"==typeof e)o.push(e);else for(var n;n=o.shift();)C.send(n)},L=function(e){if(b[e])return b[e];if(this instanceof L==!1)return new L(e);var i={message:[],close:[],error:[],lost:[],open:[]};this.channelName=e;var n,o={};return this.data=function(e){return void 0===e?o:o=e},this.on=function(e,n){if(i[e]){var o;for(o in i[e])if(!0===i[e].hasOwnProperty(o)&&i[e][o]===n)return this;i[e].push(n)}return this},this.off=function(e,n){var o,t;if(e){var r=i[e];if(r)for(o=0,t=r.length;o<t;o++)(n&&r[o]===n||!n)&&(r[o]=null)}else for(o in i)if(!0===i.hasOwnProperty(o))for(;i[o].pop(););return this},this.close=function(){return!0===d.isConnected()&&(this.client_solicitation=!0,C.send("unsubscribe:"+e)),this},this.pub=function(e,n){for(var o=i[e],t=0,r=o.length;t<r;t++)o[t].call(this,n)},n=(n=e)||"",null===C||4===C.readyState?((C=!0===r&&!1===c?new WebSocket("wss://"+s+"/sub?id="+n):new D("wss://"+s+"/sub?id="+n)).reconnect||(C.reconnect=a),C.onopen=function(e){w(),y(),N("open",e)},C.onmessage=d.onmessage,C.onerror=function(e){N("error",e),e.invalidChannel||S()},C.onclose=function(e,n){var o=e&&e.code||n&&n.code||0;o===p||1001===o?N("error",e):!1!==e.triggerClose&&N("close",e),S()}):!0===d.isConnected()?C.send(n):w(n),this};function D(e){var n,o,t,r,i=1,c=0,a=0,s={url:e,channels:[],channelsUpdated:{},openDelay:100},l={URL:e,CONNECTING:0,OPEN:i,CLOSING:2,CLOSED:3,isFake:!0,removeChannels:function(n){if(n)s.channels=f.grep(s.channels,function(e){return e!==n}),delete s.channelsUpdated[n],delete b[n];else for(var e;e=s.channels.pop();)delete s.channelsUpdated[e],delete b[e]},channel:"",setLastModified:function(e){s.channelsUpdated[this.channel]=e},readyState:0,reconnect:function(e,n){!n||"function"==typeof n&&!0===n.call(s)?(clearTimeout(c),c=setTimeout(u,e)):l.close(!1);return!0},send:function(e){var n=e.match(/^unsubscribe:(.+)/);n?d.onmessage('{"unsubscribed":"'+n[1]+'"}'):s.channels.push(e)},close:function(e){this.readyState=2,clearTimeout(n),clearTimeout(c),!(this.readyState=3)!==e?f(l).triggerHandler("close",{code:g}):C=null},onopen:function(){},onmessage:function(){},onerror:function(){},onclose:function(){}};function u(e){var n;if(e?n=e:(l.channel=(a>=s.channels.length&&(a=0),s.channels[a++]),n=l.channel),0===s.channels.length)return f(l).triggerHandler("close",{code:v});f.ajax({type:"GET",url:s.url+"?id="+n+"&ifmod="+(s.channelsUpdated[n]||0)+"&ts="+ +new Date,cache:!0,dataType:"script",timeout:h,success:function(){},error:function(){f(l).triggerHandler("error",{code:p})}})}return r=(t=e).match(/id=([^&]+)$/),o=null!==r&&(s.channels.push(r[1]),s.url=t.replace("wss:","https:").replace(/\?.*/,""),!0),n=setTimeout(function(){!0===o?(l.readyState=i,f(l).triggerHandler("open"),s.channels.length&&u()):f(l).triggerHandler("close",{code:m})},s.openDelay),l}return d.version="2.8.9",d.CONFIG_CHANGES="CONFIG_CHANGES",d.connect=function(e){return b[e]=new L(e),b[e]},d.disconnect=function(e){return C&&C.close(1e3,e||"NORMAL"),d},d.isConnected=function(){return!(!C||C.readyState!==C.OPEN)},d.send=function(e){return!0===this.isConnected()&&C.send(e),this},d.lastMessageTime=function(){return new Date(l)},d.onmessage=function(e){if(!e)return C.reconnect(i);if(!1===d.isConnected())return!1;var n=C.isFake?e:e.data;if(void 0===n)return C.reconnect(i);try{"object"!=typeof n&&(n=JSON.parse(n))}catch(e){return C.reconnect(1e4),N("error",{error:"INVALID_JSON"}),console.error("mensagem precisa ser um JSON válido",n)}if(n.invalidChannel)return N("error",n,n.invalidChannel),O(n.invalidChannel),C&&!0===C.isFake&&C.reconnect(i,function(){return 0<this.channels.length}),console.log("invalidChannel: ",n.invalidChannel);if(n.unsubscribed)return N("close",n,n.unsubscribed),O(n.unsubscribed),C.reconnect(200);if(!n.channelName)return C.reconnect(1e4),N("error",{error:"NO_CHANNEL_NAME"}),console.error('json precisa do atributo "channelName"',n);if(!n.lastModified)return C.reconnect(1e4),N("error",{error:"NO_LAST_MODIFIED"}),console.error('json precisa do atributo "lastModified"',n);if(void 0===b[n.channelName])return!1;var o=b[n.channelName].data().lastModified;void 0!==o&&n.prevModified!==o&&N("lost",{error:"LOST_DATA"}),b[n.channelName].data(n),l=+new Date,N("message",n,n.channelName),!0===C.isFake&&(C.setLastModified(n.lastModified),C.reconnect(200))},d.config=function(e){var n,o={domain:s,forcePolling:c,pollingDelay:i,channels:b,connection:C};if(void 0===e)return o;if("string"==typeof e)return o[e];if(!0===e.parasite&&null!==u)return!1;if(!0===d.isConnected())return console.log("usocket.confg()\tAs configurações só são aplicadas quando não há conexão estabelecida."),!1;for(n in u=e)if(!0===e.hasOwnProperty(n)){var t=e[n];switch(n){case"domain":s=t;break;case"forcePolling":c=t;break;case"pollingDelay":i=t}}return!0},d.polling=function(t,r,i,e){if(void 0!==b[t]&&void 0===e)return console.error("Não é possível fazer polling em canal com conexão WebSocket ativa.");r=r||a;var c=function(e){if(e.channelName===t||e.invalidChannel===t){r.apply(i,[e.hasOwnProperty("invalidChannel"),e]);for(var n=0,o=UOLWebSocketCollection.length;n<o;n++)UOLWebSocketCollection[n]===c&&(UOLWebSocketCollection.splice(n,1),c=null)}};UOLWebSocketCollection.push(c),f.ajax({url:"https://"+s+"/sub?id="+t+"&ifmod=0&ts="+ +new Date,cache:!0,dataType:"script",scriptCharset:"utf-8"})},(t.UOLWebSocketCollection=t.UOLWebSocketCollection||[]).push(d.onmessage),"function"!=typeof t.UOLWebSocketCallback&&(t.UOLWebSocketCallback=function(e){for(var n=t.UOLWebSocketCollection,o=0;o<n.length;o++)n[o].call(null,e)}),d}(jQuery,e)),"function"==typeof define&&define.amd&&define("usocket",[],function(){return usocket}),"undefined"!=typeof angular&&angular.module("usocket",[]).factory("usocket",[function(){return usocket}])}(window);
        /*! @source /camaleao/assets/libs/chrome-alerts/chrome-alerts.js */
        /*!
 * UOL - Service Worker
 * Copyright(c) 2017 Fagner Janderson <fjsilva@uolinc.com>
 */
'use strict';
(function(){
  var that;
  /**
   * Settings
   * @property settings
   * @type {Object}
   */
  var settings = {
    firebase: {
      apiKey: "AIzaSyC7xCg9LEYqiDKkCBsjhMFg-MKTNakYuj8",
      authDomain: "web-alerts-1194.firebaseapp.com",
      databaseURL: "https://web-alerts-1194.firebaseio.com/",
      storageBucket: "gcm-demo-13f40.appspot.com",
      messagingSenderId: "370456186282"
    },
    /**
     * Channel notifications
     *
     * @property CHANNEL
     * @type String
     * @static
     * @final
     */
    CHANNEL: window.location.hostname,
    /**
     * Key to the localStorage
     *
     * @property STORAGE_KEY
     * @type String
     * @static
     * @final
     */
    STORAGE_KEY : 'uolPushNotification',
    /**
     * Log prefix
     *
     * @property LOG_PREFIX
     * @type String
     * @static
     * @final
     */
    LOG_PREFIX : '[NOTIFICATIONS] ',
    /**
     * Tags required in the registration push
     *
     * @property tags
     * @type {Array}
     */
    tags : ['geral'],
    /**
     * Urls of subscription apis and reading push
     *
     * @property api
     * @type {Object}
     */
    api : {
      /**
       * Push registration url
       *
       * @property subscribe
       * @type String
       * @static
       * @final
       */
      subscribe : 'https://push-webalert.conteudo.uol'
    },
    dependencies: [
      'https://www.gstatic.com/firebasejs/3.6.10/firebase.js',
      '/manifest.json'
    ],
    serviceWorker: '/service-worker.js?c=' + window.cacheId
  }
  /* Contructor */
  function Webalerts() {
    this.messaging = null;
    this.data = null;
  }
  /**
   * Load dependencies
   * @method loadDependencies
   * @return {Function} callback
   */
  Webalerts.prototype.loadDependencies = function(items, callback) {
      var ready = 0;
      var addToReady = function () {
        ready++;
      }
      var fire = setInterval(function() {
        if(ready == items.length) {
          clearInterval(fire);
          callback();
        }
      },100);
      Array.prototype.forEach.call(items, function(item, index) {
        var doc;
        if(item.match(/\.css$/)) {
          doc = document.createElement("link")
          doc.type = 'text/css'
          doc.rel = 'stylesheet'
          doc.href = item;
          // solution for the onload of the link tag
          var img = document.createElement('img');
          img.onerror = addToReady
          img.src = item;
        }else if(item.match(/\.js$/)) {
          doc = document.createElement('script');
          doc.type = 'text/javascript';
          doc.src = item;
          doc.onload = addToReady
        }else if(item.match(/\.json$/)) {
          doc = document.createElement('link');
          doc.rel = 'manifest';
          doc.href = item;
          // solution for the onload of the link tag
          var img = document.createElement('img');
          img.onerror = addToReady
          img.src = item;
        }else {
          items.splice(index, 1);
          console.warn('invalid file: ' + item)
        }
        if(doc)
          document.getElementsByTagName("head")[0].appendChild(doc);
      });
  }
  /**
   * It makes a request data
   * @method request
   * @param {String} url Url to request
   * @param {Function} callback Function returned as callback
   * @return {Function} callback Function returned as callback
   */
  Webalerts.prototype.request = function(url, method, params, callback){
    var XMLHttpFactories = [
      function () {return new XMLHttpRequest()},
      function () {return new ActiveXObject("Msxml2.XMLHTTP")},
      function () {return new ActiveXObject("Msxml3.XMLHTTP")},
      function () {return new ActiveXObject("Microsoft.XMLHTTP")}
    ];
    var x = false;
    for (var i=0;i<XMLHttpFactories.length;i++) {
      try {
          x = XMLHttpFactories[i]();
      }
      catch (e) {
          continue;
      }
      break;
    };
    x.open(method || 'GET', url);
    x.onload = function() {
      if (x.readyState === 4) {
        if (x.status === 200 || x.status === 201) {
          callback instanceof Function && callback.call( null, x.response, x.status );
        } else {
          console.warn('Request error');
          callback(null, x.status)
        }
      }
    };
    x.onerror = function() {
      callback instanceof Function && callback.call( null, x.response, x.status );
      console.warn('Request error');
    };
    x.setRequestHeader( "Pragma", "no-cache" );
    x.setRequestHeader( "Cache-Control", "no-cache" );
    if(method == 'POST' || method == 'PUT' || method == 'DELETE'){
      x.setRequestHeader("Content-type", "application/json");
      params = JSON.stringify(params);
    }
    x.send( params || null );
  }
  /**
   * Convert string to slug
   * @method slug
   * @param {String} str
   * @return {String} str
   */
  Webalerts.prototype.slug = function(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes
    return str;
  }
  /**
   * Get browser version
   * @method getBrowserVersion
   * @return {String} browser version
   */
  Webalerts.prototype.getBrowserVersion = function() {
    var ua = navigator.userAgent, tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem =  /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1] || '');
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\bOPR\/(\d+)/)
      if(tem!= null) return 'Opera '+tem[1];
    }
    M = M[2] ? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/([.\d]+)/i))!= null)
      M.splice(1, 1, tem[1]);
    return M.join(' ');
  }
  /**
   * Get localStorage data
   *
   * @method setStorage
   * @return {Object} localStorage data
   */
  Webalerts.prototype.setStorage = function(data){
    if(!data) return false;
    localStorage.setItem(settings.STORAGE_KEY, JSON.stringify(data));
  }
  /**
   * Get localStorage data
   *
   * @method getStorage
   * @return {Object} localStorage data
   */
  Webalerts.prototype.getStorage = function(){
    return JSON.parse( localStorage.getItem(settings.STORAGE_KEY) );
  }
  /**
   * Get the initial data
   * @method getInitialData
   * @param {Function} callback Function returned as callback
   * @return {Void}
   */
  Webalerts.prototype.getInitialData = function(callback) {
    var mobileOs = 'pc';
    if(this.isMobile.any() && this.isMobile.any().length > 0)
      mobileOs = this.isMobile.any()[0].toLowerCase();
    var data = {
      channel : settings.CHANNEL,
      platform: {
        ismobile: this.isMobile.any() ? true : false,
        device: mobileOs,
        browser: this.getBrowserVersion()
      },
      configs : {
        tags : settings.tags
      }
    };
    return callback(data);
  }
  /**
   * Add user configs
   * @method postData
   * @param {String} subscriptionID
   * @param {Function} callback Function returned as callback
   * @return {Void}
   */
  Webalerts.prototype.postData = function(data, callback ) {
    this.request(settings.api.subscribe + '/subscribe', 'POST', data, function ( response, status ) {
      that.setStorage( data );
      callback instanceof Function && callback.call( null, data);
    });
  }
  /**
   * Update user preferences
   * @method putData
   * @memberof Webalerts
   * @param {String} subscriptionID
   * @param {Function} callback Function returned as callback
   * @return {Void}
   */
  Webalerts.prototype.putData = function( data, callback ) {
    that.request(settings.api.subscribe + '/subscribe?id=' + data.subscriptionID, 'PUT', data, function ( response ) {
      that.setStorage( data );
      callback( data );
    });
  }
  /**
   * Removes all user data
   * @method unsetData
   * @param {String} subscriptionID
   * @param {Function} callback Function returned as callback
   * @return {Void}
   */
  Webalerts.prototype.unsetData = function(subscription, callback) {
    localStorage.removeItem( settings.STORAGE_KEY );
    localStorage.removeItem(settings.STORAGE_KEY + 'sentToServer');
    this.request(settings.api.subscribe + '/subscribe?id=' + subscription, 'DELETE', { id : subscription }, function ( response, status ) {
      callback instanceof Function && callback(response, status);
    });
  }
  /**
   * It examines whether it is mobile
   * @property isMobile
   * @type {Object}
   */
  Webalerts.prototype.isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
      return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
    }
  }
  /**
   * Send data to UOL API
   * @method sendToApi
   * @memberof Webalerts
   * @param {String} currentToken
   * @return {Void}
   */
  Webalerts.prototype.sendToApi = function(currentToken, callback) {
    this.getInitialData(function(data) {
      data.subscriptionID = currentToken;
      that.postData(data, function(res){
        console.info(settings.LOG_PREFIX + 'Subscription successful!');
        console.info(settings.LOG_PREFIX, data);
        callback(true)
      });
    });
  }
  /**
   * Make the subscription
   * @method startUI
   * @memberof Webalerts
   * @return {Void}
   */
  Webalerts.prototype.startUI = function() {
    this.messaging.getToken().then(function(currentToken) {
      if (currentToken) {
        that.sendTokenToServer(currentToken);
        localStorage.setItem(settings.STORAGE_KEY + 'FirstEnable', true);
      } else {
        console.info(settings.LOG_PREFIX + 'No Instance ID token available. Request permission to generate one.');
        that.requestPermission();
        that.setTokenSentToServer(false);
      }
    })
    .catch(function(err) {
      console.warn(settings.LOG_PREFIX + 'An error occurred while retrieving token. ', err);
      that.setTokenSentToServer(false);
    });
  }
  /**
   * Send the Instance ID token your application server, so that it can:
   * - send messages back to this app
   * - subscribe/unsubscribe the token from topics
   * @method sendTokenToServer
   * @memberof Webalerts
   * @return {Void}
   */
  Webalerts.prototype.sendTokenToServer = function(currentToken) {
    var smsgs = settings.LOG_PREFIX
      + 'Token already sent to server so won\'t send it again '
      + 'unless it changes'
    if (!that.isTokenSentToServer()) {
      console.info(settings.LOG_PREFIX + 'Sending token to server...');
      if(!that.data || !that.data.subscriptionID) {
        that.sendToApi(currentToken, that.setTokenSentToServer)
      }else if(that.data.subscriptionID != currentToken) {
        that.unsetData(that.data.subscriptionID, function(res, status) {
          that.sendToApi(currentToken, that.setTokenSentToServer);
        });
      }else {
        console.info(smsgs);
        that.setTokenSentToServer(true);
      }
    } else {
      console.info(smsgs);
      that.checkUpdate();
    }
  }
  /**
   * Checks if there has been a change in user theme preference
   * @method checkUpdate
   * @memberof Webalerts
   * @return {Void}
   */
  Webalerts.prototype.checkUpdate = function(data) {
    var curTags = (((that.data||{}).configs||{})).tags
    if(!curTags) return;
    var isEqual = true;
    var newTags = data || settings.tags
    var update = function() {
      that.data.configs.tags = newTags
      that.putData(that.data, function() {
        console.info(settings.LOG_PREFIX + 'Theme preferences have been updated')
      });
    }
    if(newTags.length !== curTags.length)
      return update();
    for(var i = newTags.length; i--;) {
      if(newTags[i] !== curTags[i])
        isEqual = false;
    }
    if(!isEqual) update()
  }
  /**
   * Verifies that the token has been sent to the server
   * @method isTokenSentToServer
   * @memberof Webalerts
   * @return {Void}
   */
  Webalerts.prototype.isTokenSentToServer = function() {
    if (window.localStorage.getItem(settings.STORAGE_KEY + 'sentToServer') == 1) {
      return true;
    }
    return false;
  }
  /**
   * Adds a flag in the localStorage indicating whether the token has already
   * been sent to the server or not
   * @method setTokenSentToServer
   * @memberof Webalerts
   * @return {Void}
   */
  Webalerts.prototype.setTokenSentToServer = function(sent) {
    if (sent) {
      window.localStorage.setItem(settings.STORAGE_KEY + 'sentToServer', 1);
    } else {
      window.localStorage.setItem(settings.STORAGE_KEY + 'sentToServer', 0);
    }
  }
  /**
   * Requires permission for notification
   * @method requestPermission
   * @memberof Webalerts
   * @return {Void}
   */
  Webalerts.prototype.requestPermission = function() {
    console.info(settings.LOG_PREFIX + 'Requesting permission...');
    that.messaging.requestPermission()
    .then(function() {
      console.info(settings.LOG_PREFIX + 'Notification permission granted.');
      that.startUI();
    })
    .catch(function(err) {
      console.info(settings.LOG_PREFIX + 'Unable to get permission to notify.', err);
    });
  }
  /**
   * Delete Instance ID token
   * @method deleteToken
   * @memberof Webalerts
   * @return {Void}
   */
  Webalerts.prototype.deleteToken = function() {
    that.messaging.getToken()
    .then(function(currentToken) {
      that.messaging.deleteToken(currentToken)
      .then(function() {
        console.info(settings.LOG_PREFIX + 'Token deleted from FCM.');
        that.unsetData(currentToken, function(res, status) {
          console.info(settings.LOG_PREFIX + 'Token deleted FROM API UOL');
        })
        that.setTokenSentToServer(false);
      })
      .catch(function(err) {
        console.warn(settings.LOG_PREFIX + 'Unable to delete token. ', err);
      });
    })
    .catch(function(err) {
      console.warn(settings.LOG_PREFIX + 'Error retrieving Instance ID token. ', err);
    });
  }
  /**
   * Binds
   * @method binds
   * @memberof Webalerts
   * @return {Void}
   */
  Webalerts.prototype.binds = function() {
    // Refresh token
    // Callback fired if Instance ID token is updated.
    that.messaging.onTokenRefresh(function() {
      that.messaging.getToken()
      .then(function(refreshedToken) {
        console.info(settings.LOG_PREFIX + 'Token refreshed.');
        setTokenSentToServer(false);
        sendTokenToServer(refreshedToken);
        startUI();
      })
      .catch(function(err) {
        console.warn(settings.LOG_PREFIX + 'Unable to retrieve refreshed token ', err);
      });
    });
    // Receive message
    // Handle incoming messages. Called when:
    // - a message is received while the app has focus
    // - the user clicks on an app notification created by a sevice worker
    //   `messaging.setBackgroundMessageHandler` handler.
    that.messaging.onMessage(function(payload) {
      console.info(settings.LOG_PREFIX + "Message received. ", payload);
      if(payload && payload.notification)
        that.showNotification(payload.notification);
    });
  }
  /**
   * By default, the firebase cloud message does not show the notification if the focus
   * is in the service worker scope window.
   * This method is only called when the firebase sends the notification and the user is
   * focused on the scopo tab
   * @method binds
   * @memberof Webalerts
   * @return {Void}
   */
  Webalerts.prototype.showNotification = function(payload) {
    if (!Notification) {
      console.info(settings.LOG_PREFIX + 'Desktop notifications not available in your browser. Try Chromium.');
      return;
    }
    var notification = new Notification(payload.title, {
      icon: payload.icon,
      body: payload.body,
    });
    notification.onclick = function () {
      window.open(payload.click_action);
      notification.close();
    };
  }
  /**
   * Start Webalerts
   * @method init
   * @return {Void}
   */
  Webalerts.prototype.init = function() {
    that = this;
    //definindo elemento com configurações do widget
    that.widget = document.querySelector('.uol-notifications-widget');
    //se não houver o elemento, retorna
    if(!that.widget)
      return
    // override default channel
    if(that.widget.getAttribute('channel-name'))
      settings.CHANNEL = that.widget.getAttribute('channel-name');
    // override default themes
    if(that.widget.getAttribute('themes'))
      settings.tags = that.widget.getAttribute('themes').split(',');
    that.data = that.getStorage();
    this.loadDependencies(settings.dependencies, function() {
      // Initialize Firebase
      firebase.initializeApp(settings.firebase);
      // Retrieve Firebase Messaging object.
      that.messaging = firebase.messaging();
      var register = function() {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register(settings.serviceWorker)
            .then(function(registration){
              that.messaging.useServiceWorker(registration);
              that.binds();
              that.startUI();
            });
          }
      }
      if(that.data && !localStorage.getItem(settings.STORAGE_KEY + 'FirstEnable')) {
        navigator.serviceWorker.getRegistration().then(function(r) {
          r && r.unregister();
          if(that.data && that.data.subscriptionID)
            that.unsetData(that.data.subscriptionID)
        });
        return;
      }else {
        register();
      }
    });
  }
  /**
   * Inicia o script
   * @method init
   * @type {Function}
   * @return {Void}
   */
  // if(window.onHomeReady) {
    // window.onHomeReady(function(){
  if(typeof hevents !== 'undefined') {
    hevents.on('htmlReady', function(){
      new Webalerts().init();
    });
  } else {
    new Webalerts().init();
  }
}());
        /*! @source /camaleao/assets/web/javascript/mustache.js */
        /*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
/*global define: false*/
(function (global, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else if (typeof define === "function" && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    factory(global.Mustache = {}); // <script>
  }
}(this, function (mustache) {
  var Object_toString = Object.prototype.toString;
  var isArray = Array.isArray || function (object) {
    return Object_toString.call(object) === '[object Array]';
  };
  function isFunction(object) {
    return typeof object === 'function';
  }
  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var RegExp_test = RegExp.prototype.test;
  function testRegExp(re, string) {
    return RegExp_test.call(re, string);
  }
  var nonSpaceRe = /\S/;
  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }
  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };
  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }
  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;
  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate(template, tags) {
    if (!template)
      return [];
    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?
    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }
      hasTag = false;
      nonSpace = false;
    }
    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags(tags) {
      if (typeof tags === 'string')
        tags = tags.split(spaceRe, 2);
      if (!isArray(tags) || tags.length !== 2)
        throw new Error('Invalid tags: ' + tags);
      openingTagRe = new RegExp(escapeRegExp(tags[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tags[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tags[1]));
    }
    compileTags(tags || mustache.tags);
    var scanner = new Scanner(template);
    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;
      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);
      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);
          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }
          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;
          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }
      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;
      hasTag = true;
      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);
      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }
      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);
      token = [ type, value, start, scanner.pos ];
      tokens.push(token);
      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();
        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);
        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }
    // Make sure there are no open sections when we're done.
    openSection = sections.pop();
    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    return nestTokens(squashTokens(tokens));
  }
  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];
    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];
      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }
    return squashedTokens;
  }
  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];
    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];
      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }
    return nestedTokens;
  }
  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }
  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };
  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);
    if (!match || match.index !== 0)
      return '';
    var string = match[0];
    this.tail = this.tail.substring(string.length);
    this.pos += string.length;
    return string;
  };
  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var index = this.tail.search(re), match;
    switch (index) {
    case -1:
      match = this.tail;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }
    this.pos += match.length;
    return match;
  };
  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context(view, parentContext) {
    this.view = view == null ? {} : view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }
  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function (view) {
    return new Context(view, this);
  };
  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function (name) {
    var cache = this.cache;
    var value;
    if (name in cache) {
      value = cache[name];
    } else {
      var context = this, names, index;
      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;
          while (value != null && index < names.length)
            value = value[names[index++]];
        } else {
          value = context.view[name];
        }
        if (value != null)
          break;
        context = context.parent;
      }
      cache[name] = value;
    }
    if (isFunction(value))
      value = value.call(this.view);
    return value;
  };
  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer() {
    this.cache = {};
  }
  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function () {
    this.cache = {};
  };
  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];
    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);
    return tokens;
  };
  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };
  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function (tokens, context, partials, originalTemplate) {
    var buffer = '';
    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    var self = this;
    function subRender(template) {
      return self.render(template, context, partials);
    }
    var token, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];
      switch (token[0]) {
      case '#':
        value = context.lookup(token[1]);
        if (!value)
          continue;
        if (isArray(value)) {
          for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
            buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
          }
        } else if (typeof value === 'object' || typeof value === 'string') {
          buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
        } else if (isFunction(value)) {
          if (typeof originalTemplate !== 'string')
            throw new Error('Cannot use higher-order sections without the original template');
          // Extract the portion of the original template that the section contains.
          value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
          if (value != null)
            buffer += value;
        } else {
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        }
        break;
      case '^':
        value = context.lookup(token[1]);
        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || (isArray(value) && value.length === 0))
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        break;
      case '>':
        if (!partials)
          continue;
        value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value != null)
          buffer += this.renderTokens(this.parse(value), context, partials, value);
        break;
      case '&':
        value = context.lookup(token[1]);
        if (value != null)
          buffer += value;
        break;
      case 'name':
        value = context.lookup(token[1]);
        if (value != null)
          buffer += mustache.escape(value);
        break;
      case 'text':
        buffer += token[1];
        break;
      }
    }
    return buffer;
  };
  mustache.name = "mustache.js";
  mustache.version = "0.8.1";
  mustache.tags = [ "{{", "}}" ];
  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();
  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function () {
    return defaultWriter.clearCache();
  };
  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function (template, tags) {
    return defaultWriter.parse(template, tags);
  };
  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };
  // This is here for backwards compatibility with 0.4.x.
  mustache.to_html = function (template, view, partials, send) {
    var result = mustache.render(template, view, partials);
    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };
  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;
  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;
}));
        /*! @source /camaleao/assets/web/javascript/swfobject.js */
        /*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
        /*! @source /camaleao/assets/web/javascript/core.js */
        var homeUOL = (function init(window, document, undefined) {
  'use strict';
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  /**
   * Objeto com os plugins globais (ie.: jquery)
   * @param {Object}
   */
  var plugins = {};
  /**
   * Registra eventos para o escopo homeUOL.
   * @type {jQuery Object}
   */
  var events = $({});
  /**
   * Módulo Home UOL
   * @type {Object}
   */
  var Core = {};
  /**
   * Versão do script
   * @type {String}
   */
  Core.version = 'camaleao 0.0.5 (2015)';
  /**
   * Indica se todos os processos foram iniciados.
   * @type {Boolean}
   */
  Core.ready = false;
  /**
   * Módulos registrados no escopo do objeto Core.
   * @type {Object}
   */
  Core.modules = {};
  /**
   * Funções callback registradas no escopo do objeto Core.
   * @type {Object}
   */
  Core.callbacks = {};
  /**
   * Recebe um array com o nome dos módulos e retorna um
   * novo array com instâncias para esses módulos.
   * @param {Array} params
   * @return {Array}
   */
  function getModulesInstances(params) {
    var objs = [],
      modules = Core.modules,
      p;
    for(p in params) {
      if(params.hasOwnProperty(p) === true) {
        var modName = params[p],
          modObject = modules[modName] || plugins[modName] || undefined;
        //if(modObject !== undefined) {
          objs.push(modObject);
        //}
      }
    }
    return objs;
  }
  /**
   * Registra os módulos pré-definidos.
   */
  function registerModules() {
    var modules = Core.modules, name, mod;
    for(name in modules) {
      if(modules.hasOwnProperty(name) === true) {
        mod = modules[name];
        modules[name] = mod.f.apply(this, getModulesInstances(mod.params));
      }
    }
  }
  /**
   * Registra e inicia os módulos do app.
   */
  Core.init = function() {
    registerModules();
    startPageModules();
  }
  /**
   * Registra um módulo.
   * @param {String} name Nome do módulo
   * @param {Array} params Lista de parâmetros que serão passados para a função
   * @param {Function} f Função que será executada quando o módulo for requisitado
   * @return {Function}
   */
  Core.register = function(name, params, f) {
    if(name.match(/^callback/) === null) {
      // registra um módulo
      //Core.modules[name] = f.apply(this, getModulesInstances(params));
      Core.modules[name] = {
        f: f,
        params: params
      };
      return Core.modules[name];
    } else {
      // registra um callback
      var callbackName = name.replace(/^callback(.)/, function(match, firstLetter) {
        return firstLetter.toLowerCase();
      });
      Core.callbacks[callbackName] = params; // params é uma function
    }
  };
  /**
   * Registra um serviço externo, que pode ser carregado como
   * dependência por módulos da home.
   * @param {String} name
   * @param {Function} service Função que retorna o Objeto do serviço
   */
  Core.provide = function(name, service) {
    plugins[name] = service.call(null);
  };
  Core.load = function(name, params) {
    var module = Core.modules[name];
    if(typeof module === 'function') {
      return module.apply(null, params || []);
    }
    return module;
  };
  Core.instance = function(name) {
    return Core.modules[name];
  };
  /**
   * Procura e inicia módulos dentro de `container`.
   * Útil para quando um módulo é criado dinamicamente.
   * @param {DOM} container
   */
  Core.rescan = function(container) {
    var $container = container && container.jquery ? container : $(container);
    $container.find('.module').each(initModule);
  }
  /*! Tiny Pub/Sub - v0.7.0 - 2013-01-29
  * https://github.com/cowboy/jquery-tiny-pubsub
  * Copyright (c) 2013 "Cowboy" Ben Alman; Licensed MIT */
  Core.on = function() {
    events.on.apply(events, arguments);
  };
  Core.off = function() {
    events.off.apply(events, arguments);
  };
  Core.pub = function() {
    events.trigger.apply(events, arguments);
  };
  /*****/
  function initModule(container) {
    var uniqueId = Core.instance('uniqueId');
    var $this = $(this);
    var moduleName = this.getAttribute('data-module');
    var wasStarted = this.getAttribute('data-module-started') === "true";
    if(moduleName === null || wasStarted === true) {
      return ;
    }
    if(moduleName === 'app') {
      // inicia o APP
      Core.load(moduleName, [$this]);
    } else {
      var isScript = $this.is('script');
      // inicia demais módulos
      var templateElement = isScript ? $this : $this.find('script[type="text/template"][data-ignore!="true"]');
      var templateMarkup = templateElement.html();
      var templateId = uniqueId('mustache');
      // cria o container onde o template mustache será renderizado
      if(isScript === false) {
        var $container = $(document.createElement('div'));
        $container.insertBefore(templateElement);
      }
      // remove a tag de teplate
      templateElement.remove();
      Core.load(moduleName, [$this, $container, templateMarkup]);
      this.setAttribute('data-module-started', true);
    }
  };
  /**
   * Percorre um container em busca de módulos para carregar 
   * e executar. Útil em elementos criados dinamicamente e após
   * o scan inicial.
   * @param {DOM} container
   */
  function startPageModules() {
    // inicia os módulos
    $('.module').not('.app').each(initModule);
    // inicia o app apenas no fim
    initModule.call($('.app[data-module="app"]').get(0));
    // define que todos os módulos foram carregados
    Core.ready = true;
    // dispara eventos que estavam aguardando o ready
    hevents.emit('ready');
  };
  return Core;
}(window, document, undefined));
        /*! @source /camaleao/assets/web/javascript/json.js */
        var JSON;if(!JSON){JSON={};}(function(){function f(n){return n<10?"0"+n:n;}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key);}if(typeof rep==="function"){value=rep.call(holder,key,value);}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null";}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null";}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v;}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v;}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" ";}}else{if(typeof space==="string"){indent=space;}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify");}return str("",{"":value});};}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j;}throw new SyntaxError("JSON.parse");};}}());
        /*! @source /camaleao/assets/web/javascript/suggest.js */
        /**
 * Suggest Lib
 * data: 07/11/2012 17h07 @ gpaes
 * http://jsuol.com.br/c/_template/v1/web/js/lib.suggest/suggest.js
 */
;(function(window, document, userAgent, slice) {
	function toArray(o) {
		try {
			return slice.call(o, 0);
		} catch(e) {
			var arr = [], i = o.length;
			while(i--)
				arr.push(o.item(i));
			return arr;
		}
		return [];
	}
	/**
	 * Adiciona uma classe em um elemento
	 */
	function addClass(el, names) {
		if(el) {
			names = names.split(" ");
			var t = names.length, name;
			while(t--) {
				name = names[t];
				if( hasClass(el, name) == false ) {
					el.className += (el.className && " " || "") + name;
				}
			}
			return true;
		}
		return false;
	}
	/**
	 * Adiciona uma classe em um elemento
	 */
	function hasClass(el, names) {
		if(el) {
			names = names.split(" ");
			var t = names.length, name;
			while(t--) {
				name = names[t];
				if(new RegExp("( "+name+" |^"+name+" | "+name+"$|^"+name+"$)").test(el.className) == false)
					return false;
			}
			return true;
		}
		return false;
	}
	/**
	 * Remove uma classe em um elemento
	 */
	function removeClass(el, names) {
		if(el) {
			names = names.split(" ");
			var t = names.length, name;
			while(t--) {
				name = names[t];
				if( hasClass(el, name) == true ) {
					el.className = el.className.replace(new RegExp("( "+name+" |^"+name+" | "+name+"$|^"+name+"$)"), " ").replace(/ +/g, ' ');
				}
			}
			return true;
		}
		return false;
	}
	/**
	 * Retorna o tipo da tecla pressionada
	 * @param {Int} code Código da tecla (event.keyCode)
	 * @return {String}
	 */
	function keyAction(code) {
		code = +code;
		if(code >= 48 && code <= 57)
			return "NUMBER";
		if(code >= 65 && code <= 90 || (code == 192 || code == 186 || code == 32))
			return "LETTER";
		if(code == 27)
			return "ESC";
		if(code >= 37 && code <= 40) {
			switch(code) {
				case 37:
					return "ARROW LEFT";
				case 38:
					return "ARROW UP";
				case 39:
					return "ARROW RIGHT";
				case 40:
					return "ARROW DOWN";
			}
		}
		if(code == 13)
			return "ENTER";
		if(code == 8 || code == 46)
			return "REMOVE";
		return "OTHER";
	}
	var events = {
		preventDefault : function(e){
			if(e.preventDefault) e.preventDefault();
			else e.returnValue = false;
		},
		add: function(elem,event,fun){
			if(!elem) return false;
			if(document.attachEvent) {
				event = /touch/.test(event) ? event : 'on'+event;
				elem.attachEvent(event,fun);
			}
			else if(document.addEventListener) {
				elem.addEventListener(event,fun,true);
			}
		},
		del: function(elem,event,fun) {
			if(!elem) return false;
			if(document.detachEvent) {
				event = /touch/.test(event) ? event : 'on'+event;
				elem.detachEvent(event,fun);
			}
			else if(document.removeEventListener) {
				elem.removeEventListener(event,fun,true);
			}
		}
	}
	function loadScript(url, charset) {
		var head   = document.getElementsByTagName("head")[0];
	    var sc     = document.createElement('script');
	    sc.type    = 'text/javascript';
	    sc.async   = true;
	    sc.charset = charset || "utf-8";
	    sc.src     = url;
	    sc.onload = sc.onreadystatechange = (function(url, sc){
			return function(){
				if (!sc.readyState || sc.readyState == "loaded" || sc.readyState == "complete") {
					head.removeChild(sc);
					sc.onload = sc.onreadystatechange = null;
				}
			}
		})(url, sc);
		head.insertBefore(sc, head.firstChild);
		return {"o":sc};
	}
	function normalizeString(txt, removeSpace) {
		if(!txt) return;
		removeSpace = typeof removeSpace == 'undefined' ? true : false;
		var Accent 		= /[ÂÁÀÃÄÊÉÈËÎÍÌÏÔÓÒÕÖÛÚÙÜÇÑ\+\-\s]/g;
		var reA 		= /[ÂÁÀÃÄ]/g;
		var reE 		= /[ÊÉÈË]/g;
		var reI			= /[ÎÍÌÏ]/g;
		var reO 		= /[ÔÓÒÕÖ]/g;
		var reU 		= /[ÛÚÙÜ]/g;
		var reC 		= /[Ç]/g;
		var reN 		= /[Ñ]/g;
		var reMAIS		= /\+/g;
		var reOthers	= /[^a-zA-Z0-9_\+]/g;
		var reSpace 	= /[ ]/g;
		var upNome = txt.toLowerCase().toUpperCase();
		if (upNome.indexOf("*") + 1 == upNome.length) {
			upNome = upNome.substr(0, upNome.length - 1);
		}
		if (upNome.search(Accent) != -1) {
			removeSpace && (upNome = upNome.replace(reSpace, "-"));
			upNome = upNome.replace(reA, "A");
			upNome = upNome.replace(reE, "E");
			upNome = upNome.replace(reI, "I");
			upNome = upNome.replace(reO, "O");
			upNome = upNome.replace(reU, "U");
			upNome = upNome.replace(reC, "C");
			upNome = upNome.replace(reN, "N");
			removeSpace && (upNome = upNome.replace(reOthers, "-"));
		}
		upNome = upNome.toLowerCase();
		return upNome.trim && upNome.trim() || upNome.replace(/(^[\s\xA0]+|[\s\xA0]+$)/g, '');
	};
	/**
	 * Navega entre os itens do suggest pelo teclado.
	 * @params {DOMList} items Array com os itens do suggest
	 * @params {}
	 */
	 function navigateItems(instance, items, side) {
	 	var index = items.length,
	 		index_current_item = null,
	 		current_item = null,
	 		index_next_item = null;
	 	// procura o item atual
	 	var atual = instance.thereIsOneSelected(true);
	 	index_current_item = atual.i;
	 	current_item       = atual.v;
	 	// remove a classe do item atual
	 	removeClass(current_item, instance.class_current);
	 	// para cima
	 	if(side == "UP") {
	 		if(index_current_item == null) {
	 			index_next_item = items.length - 1;
	 		}
	 		else if(index_current_item == 0) {
	 			index_next_item = items.length - 1;
	 		}
	 		else {
	 			index_next_item = index_current_item - 1;
	 		}
	 	}
	 	// para baixo
	 	else if(side == "DOWN") {
	 		if(index_current_item == null) {
	 			index_next_item = 0;
	 		}
	 		else if(index_current_item == items.length - 1) {
	 			index_next_item = 0;
	 		}
	 		else {
	 			index_next_item = index_current_item + 1;
	 		}
	 	}
	 	// define classe de ativo no item ativo
	 	addClass(items[index_next_item], instance.class_current);
	 }
	/**
	 * Cria um serviço de suggest em um campo de formulário.
	 * @param {Object} form   DOM do form onde será plicado o suggest
	 * @param {String} source URL do Webserivce de busca de sugestões
	 * @param {Object} source Array com os dados para busca de sugestões
	 */
	var Suggest = window.Suggest = function(form, cfg) {
		this.form   = form;
		this.source = cfg.source;
		// se deve normalizar a string digitada e a string que será validada
		// na base de dados.
		// @type {Boolean}
		this.normalize = typeof cfg.normalize == 'undefined' ? true : cfg.normalize;
		// campo para aplicar o suggest
		// @type {DOMObject}
		this.input = form.q;
		// botão de submit
		this.button = (function() {
			var b = [].concat(toArray(form.getElementsByTagName('button')), toArray(form.getElementsByTagName('input'))), t = b.length;
			while(t--) {
				if(b[t].getAttribute('type') == 'submit')
					return b[t];
			}
			t = b.length;
			while(t--) {
				if(b[t].getAttribute('type') == 'button')
					return b[t];
			}
			return null;
		}());
		this.button && (this.button.setAttribute('type', 'button'));
		// adiciona classe ao input e form, para indicar que aquele input tem suggest
		addClass(this.input, 'suggest-input');
		addClass(this.form, 'suggest-form');
		// charset para o request no webservice
		// @type {String}
		this.charset = cfg.charset;
		// nome da classe que será adicionada no elemento ativo
		// @type {String}
		this.class_current = cfg.class_current || "current";
		// timeout após o fim da digitação
		// @type {Int} ID do timeout
		this.end_of_typing = null;
		// tempo que deve esperar após a última letra digitada
		// para começar a fazer a busca
		// @type {Int} milliseconds
		this.time_to_wait = 500;
		// número mínimo de caracteres
		// @type {Int}
		this.min_length = 3;
		// indica se deve fazer cache de uma busca
		// @type {Boolean}
		this.cache = true;
		// armazena os resultados cacheados
		// @type {Object}
		this.cache_results = {};
		// função para ordenar o resultado
		// @type {Function}
		this.sort = cfg.sort || null;
		// máximo de resultados a ser exibido para o usuário
		// @type {Int}
		this.max_results = cfg.max_results || 5;
		// texto que será exibido quando nenhum item for encontrado
		this.text_not_found = cfg.not_found || "Sua busca não retornou resultado";
		// função com o markup da lista de itens
		// @type {Function}
		this.markup = cfg.markup || function(item, query) {
			return '<li>'+item+'</li>';
		}
		// função para tratar a query de busca para o webservice
		// @type {Function}
		this.query_function = cfg.queryURL || function(query) {
			return encodeURIComponent(normalizeString(query, false));
		}
		// função que retorna o item que deve ser comparado.
		// se o source for um array de string, deve retornar o próprio item.
		// se o source for um array de objetos, então deve retornar um dos itens do objeto.
		// @type {Function}
		// @returns {String}
		this.item_function = cfg.item || function(item) {
			return item;
		}
		// função que trata a escolha do usuário
		// @type {Function}
		this.onselect_function = cfg.onSelect || function(item) {
			return item;
		}
		// função que será executada quando o usuário pressionar enter
		// quando nenhum item estiver selecionado
		this.onblank_function = cfg.onBlank || null;
		// função que é chamada quando o box de suggest é fechado.
		// @type {Function}
		// @param {String} action Descreve o motivo do suggest ser fechado
		this.onclose_function = cfg.onClose || function(action) {
			return true;
		}
		// função que retorna se o item do array da base de dados
		// é igual ao digitado pelo usuário.
		// @type {Function}
		// @returns {Boolean}
		this.match_function = cfg.match || function(item, query) {
			if(this.normalize === true) {
				item  = normalizeString(item);
				query = normalizeString(query);
			}
			return new RegExp("^" + query).test(item);
		}
		// retorna o atributo onde o array de busca está definido no json
		// de resposta do request do webserivce
		// @type {Function}
		this.data = cfg.data || function(data) {
			return data.docs;
		}
		// eventos que serão aplicados em cada um dos items
		// da lista de suggest
		// @type {Object}
		this.events = cfg.events || {};
		// guarda as instancias dos eventos registrados
		// para ser possível removê-las quando o destroy()
		// for chamado.
		this.binds = {};
		// guarda a última tecla pressionada
		this.lastKeyPressed = "";
		if( ! this.input ) {
			return false;
		}
		this.bind();
		// cria a área do suggest
		this.createArea();
		return this;
	}
	/**
	 * Cria um elemento onde a lista de resultados será inserida.
	 * Os estilos CSS devem ser aplicados à essa área.
	 */
	Suggest.prototype.createArea = function() {
		var area = this.area = document.createElement('div');
		area.className = 'suggest-area suggest-area-disabled';
		this.form.appendChild(area);
	}
	/**
	 * Remove o elemento criado para o suggest.
	 */
	Suggest.prototype.removeArea = function() {
		this.form.removeChild(this.area);
		this.area = null;
	}
	/**
	 * Adiciona o bind onde for necessário
	 */
	Suggest.prototype.bind = function() {
		var input = this.input,
			binds = this.binds,
			form  = this.form,
			button = this.button,
			instance = this;
		// trava o submit do formulário
		binds['form_submit'] = function (ev) {
			events.preventDefault(ev);
			// o evento ENTER, no IE, é considerado um evento de submit()
			// e o evento de keyup não é disparado. Então, rodamos manualmente
			// o evento de keyup -- passando o keyCode de enter -- quando o
			// evento de submit for disparado.
			if(/MSIE/.test(userAgent) == true) {
				binds['input_keyup'].apply(null, [{'keyCode' : 13}]);
			}
			return false;
		}
		// adiciona evento de enter no button de submit
		binds['button_click'] = function (ev) {
			binds['input_keyup'].apply(null, [{'keyCode' : 13}]);
		}
		// evento para a digitação no input
		binds['input_keyup'] = function (ev) {
			clearTimeout(instance.end_of_typing);
			var keyPressed = instance.lastKeyPressed = keyAction(ev.keyCode);
			switch(keyPressed) {
				case "ENTER":
					// tenta selecionar o item
					if(instance.select() == false) {
						if(!instance.onblank_function) {
							// se não houver nenhum item selecionado
							// e o suggest estiver inativo, interpreta
							// o enter como um sinal de que o usuário terminou
							// de digitar e quer buscar
							instance.prepareToSearch();
						}
						else {
							instance.onblank_function.apply(instance);
						}
						// se a busca está ativa, verifica se existe ao menos um
						// item no resultado
						//else {
							// se houver um item seleciona ele
						//}
					}
					break;
				case "ARROW UP":
				case "ARROW DOWN":
					if(instance.disabled() == true) {
						// abre a busca se houver itens para exibir
						instance.prepareToSearch();
					}
					else {
						// Navega entre os itens existentes se o suggest estiver aberto
						navigateItems( instance, instance.getItemsDOM(), / (\w+)$/.exec(keyPressed)[1] );
					}
					break;
				case "ESC":
					instance.disable();
					break;
				case "NUMBER":
				case "LETTER":
				case "REMOVE":
					instance.removeSelect();
					addClass(this.input, 'suggest-loading');
					// Aguarda algum tempo para fazer a busca
					instance.end_of_typing = setTimeout(function() {
						instance.prepareToSearch();
					}, instance.source instanceof Array ? 250 : instance.time_to_wait);
					break;
			}
		}
		// evento para click no body
		binds['body_click'] = function(ev) {
			// se está ativo
			if(instance.disabled() == false) {
				var target = ev.srcElement || ev.target;
				// verifica se foi click dentro do suggest
				// se não for, fecha o suggest
				do {
					if(hasClass(target, 'suggest-form')) {
						return true;
					}
				} while( (target = target.parentNode) && target.nodeName != 'BODY' );
				// desativa
				instance.disable();
			}
		}
		events.add(input, 'keyup', this.binds['input_keyup']);
		events.add(form, 'submit', this.binds['form_submit']);
		events.add(button, 'click', this.binds['button_click']);
		events.add(document.body, 'click', this.binds['body_click']);
	}
	/**
	 * Remove a classe de 'current' nos items do suggest
	 */
	Suggest.prototype.removeSelect = function() {
		var items = this.getItemsDOM(),
			i = items.length;
		while(i--) {
			if(hasClass(items[i], this.class_current) == true) {
				removeClass(items[i], this.class_current);
			}
		}
		return true;
	}
	/**
	 * Remove os eventos do formulário e ações de teclado
	 */
	Suggest.prototype.unbind = function() {
		var input = this.input;
		events.del(this.input, 'keyup', this.binds['input_keyup']);
		events.del(this.form, 'click', this.binds['form_submit']);
		events.del(document.body, 'click', this.binds['body_click']);
	}
	/**
	 * Verifica se existe algum item na lista de suggest
	 * selecionado pelo usuário (através da navegação
	 * do teclado ou pelo mouse)
	 * @params {Boolean} return_index Se deve retornar o indice do item
	 * @return {DOM} se encontrar um item com class 'current'
	 * @return {Boolean} false se não encontrar item
	 */
	Suggest.prototype.thereIsOneSelected = function(return_index) {
		var items = this.getItemsDOM(),
			i = items.length;
		while(i--) {
			if(hasClass(items[i], this.class_current) == true) {
				if(return_index) {
					return {
						'i' : i,
						'v' : items[i]
					}
				}
				return items[i];
			}
		}
		return false;
	}
	/**
	 * Realiza a ação de escolha de um dos itens.
	 */
	Suggest.prototype.select = function(item, event) {
		var item = item || this.thereIsOneSelected() || false,
			self = this;
		if(item) {
			this.onselect_function.apply(this, [item, event]);
			setTimeout(function() { self.disable('SELECT ITEM'); }, 10);
			return true;
		}
		return false;
	}
	/**
	 * Verifica se já possui o source para a busca ou se deve fazer
	 * um request para obtê-lo.
	 * Quando o source estiver pronto, executa o filter().
	 */
	Suggest.prototype.prepareToSearch = function() {
		var input = this.input,
			query = input.value,
			lastKeyPressed = this.lastKeyPressed,
			instance = this;
		this.query = query;
		// se não existir nenhum caracter, remove o suggest
		if(query.length == 0) {
			this.disable('EMPTY ENTRY');
			return false;
		}
		if(lastKeyPressed != "REMOVE" && query.length < this.min_length) {
			return false;
		}
		var source = this.source;
		// se não houver cache
		if( this.hasCache() == false ) {
			// verifica se o tipo de source é array já
			if( source instanceof Array ) {
				this.filter();
			}
			// se for webservice
			else {
				var url = source
							.replace('%query', this.query_function.call(this, query))
							.replace('%max', this.max_results)
							.replace('%callback', 'Suggest.callbacks[\'c'+Suggest.total_callbacks+'\']');
				// define o callback do request
				Suggest.callbacks['c'+Suggest.total_callbacks] = (function() {
					// callback atual
					var atual = Suggest.total_callbacks;
					// prepara para aceitar um outro request
					Suggest.total_callbacks += 1;
					// função callback que será executada no retorno
					return function(data) {
						// remove o callback atual para liberar a posição
						delete Suggest.callbacks['c'+atual];
						Suggest.total_callbacks -= 1;
						instance.prepareToShow( instance.data(data) );
					}
				}());
				loadScript(url, instance.charset);
			}
		}
	}
	/**
	 * Verifica se a query já foi cacheada.
	 * Se foi, já chama o método de show.
	 */
	Suggest.prototype.hasCache = function() {
		var has = this.cache,
			cached = this.cache_results,
			query = this.query;
		if(has === true && cached[normalizeString(query)]) {
			this.show(cached[normalizeString(query)]);
			return true;
		}
		return false;
	}
	/**
	 * Faz o filtro do resultado no source.
	 */
	Suggest.prototype.filter = function() {
		var source = this.source,
			query  = this.query,
			match  = this.match_function,
			item   = this.item_function,
			result = [];
		// tenta usar o cache de busca antes de processar algo
		//if(this.cache === true && this.cache_results[normalizeString(query)]) {
		//	this.show(this.cache_results[normalizeString(query)]);
		//	return false;
		//}
		for(var i in source) {
			if( match.call(this, item.call(this, source[i]), query) === true ) {
				result.push(source[i]);
			}
		}
		this.prepareToShow(result);
	}
	/**
	 * Trata o resultado obtido antes de exibir para o usuário.
	 * @param {Array} result
	 */
	Suggest.prototype.prepareToShow = function(result) {
		var query = this.query;
		// ordena o resultado, se houver função para isso
		if(typeof this.sort == 'function') {
			result = this.sort(result);
		}
		// cacheia o resultado
		if(this.cache === true) {
			this.cache_results[normalizeString(query)] = result;
		}
		this.show(result);
	}
	/**
	 * Monta a lista de suggest no formulário.
	 * @param {Array} result
	 */
	Suggest.prototype.show = function(result) {
		var markup = this.markup,
			max = this.max_results,
			area = this.area,
			query = this.query,
			lastKeyPressed = this.lastKeyPressed,
      html   = '<ul>';
    query = query.replace(/^\s+|\s+$/g, "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
		if(result.length == 0) {
			html += '<li class="not-found">'+this.text_not_found+'</li>';
		}
		else {
			var t = 0;
			for(var r in result) {
        if(result.hasOwnProperty(r) === true) {
  				html += markup(result[r], query);
  				// não passa do limite
  				if(++t == max) {
  					break;
  				}
        }
			}
		}
		html += '</ul>';
		area.innerHTML = html;
		removeClass(area, 'suggest-area-disabled');
		// adiciona um valor de z-index superior nos
		// parents do suggest-area
		if(/MSIE 7/.test(userAgent) == true && hasClass(area, 'suggest-area-ie7-workaround') == false) {
			addClass(area, 'suggest-area-ie7-workaround');
			var pai = area, zIndex = area.style.zIndex || 5, n =1;
			while( (pai = pai.parentNode) ) {
				pai.style && (pai.style.zIndex = zIndex + (n++));
			}
		}
		// aplica os eventos
		var evs = this.events,
			instance = this,
			items = area.getElementsByTagName('li'),
			i = items.length, item;
		// registra evento de click obrigatóriamente
		// uma vez que a opção mais comum é clicar e selecionar o item
		if(!evs.click) {
			evs.click = function(item, event) {
				this.select(item, event);
			};
		}
		// registra eventos nos elementos criados
		while(i--) {
			item = items[i];
			for(var e in evs) {
				events.add(item, e, (function(foreach_item, ac) {
					return function(event) {
						ac.apply(instance, [foreach_item, event]);
					}
				}(item, evs[e])));
			}
		}
		// verifica se a última ação do usuário foi teclar ENTER
		// se foi, e só houver um resultado, seleciona o resultado
		if(lastKeyPressed == 'ENTER' && items.length == 1) {
			this.select(items[0]);
		}
	}
	/**
	 * Retorna um array com  os DOM dos li da lista de suggest
	 */
	Suggest.prototype.getItemsDOM = function() {
		return this.area.getElementsByTagName('li');
	}
	/**
	 * Esconde o bloco de sugestões. É o estado inicial. Isso ocorre
	 * quando o usuário preenche algo no input e depois remove todo
	 * o conteúdo, ou quando o usuário escolhe alguma opção do suggest.
	 */
	Suggest.prototype.disable = function(action) {
		addClass(this.area, 'suggest-area-disabled');
		this.area.innerHTML = '';
		this.onclose_function.call(this, action);
		return this;
	}
	/**
	 * Indica se o suggest está desativado
	 * @returns {Boolean};
	 */
	Suggest.prototype.disabled = function() {
		return hasClass(this.area, 'suggest-area-disabled');
	}
	/**
	 * Remove o suggest do formulário. Remove todos os binds registrados
	 * e os markups criados.
	 */
	Suggest.prototype.destroy = function() {
		this.unbind();
		this.removeArea();
		return this;
	}
	/**
	 * Funções callback para quando o source for um webservice
	 */
	Suggest.callbacks       = {};
	Suggest.total_callbacks = 0;
	Suggest.normalizeString = normalizeString;
	Suggest.hasClass        = hasClass;
	Suggest.addClass        = addClass;
	Suggest.removeClass     = removeClass;
}(window, document, navigator.userAgent, Array.prototype.slice));
        /*! @source /camaleao/assets/web/javascript/provider.js */
        ;(function provider() {
  'use strict';
  homeUOL.provide('jquery', function() {
    return jQuery;
  });
  homeUOL.provide('swfobject', function() {
    return swfobject;
  });
  homeUOL.provide('usocket', function() {
    return usocket;
  });
  homeUOL.provide('Mustache', function() {
    return Mustache;
  });
  homeUOL.provide('Suggest', function() {
    return Suggest;
  });
  homeUOL.provide('tryit', function() {
    return tryit;
  });
}());
        /*! @source /camaleao/assets/web/javascript/async.js */
        homeUOL.register('async', [], function() {
  return function runAsync(f) {
    if(f) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          f();
          resolve();
        }, 1);
      });
    }
  }
});
        /*! @source /camaleao/assets/web/javascript/extras/home-links.js */
        homeUOL.register('homelinks', [], function() {
  var hashLinks = {};
  return function(param) {
    if(typeof param === 'string') {
      // retorna se um link existe
      return hashLinks[param] || hashLinks[param.replace('http://', 'https://')];
    }
    if(param === undefined) {
      // retorna todos os links
      return hashLinks;
    }
    // define o hashLinks
    hashLinks = param;
  };
});
        /*! @source /camaleao/assets/web/javascript/extras/css-anim-support.js */
        homeUOL.register('cssAnimSupport', [], function() {
  /* Modernizr 2.8.3 (Custom Build) | MIT & BSD
   * Build: http://modernizr.com/download/#-cssanimations-testprop-testallprops-domprefixes
   */
  var Modernizr = (function( window, document, undefined ) {
      var version = '2.8.3',
      Modernizr = {},
      docElement = document.documentElement,
      mod = 'modernizr',
      modElem = document.createElement(mod),
      mStyle = modElem.style,
      inputElem  ,
      toString = {}.toString,    omPrefixes = 'Webkit Moz O ms',
      cssomPrefixes = omPrefixes.split(' '),
      domPrefixes = omPrefixes.toLowerCase().split(' '),
      tests = {},
      inputs = {},
      attrs = {},
      classes = [],
      slice = classes.slice,
      featureName,
      _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;
      if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
        hasOwnProp = function (object, property) {
          return _hasOwnProperty.call(object, property);
        };
      }
      else {
        hasOwnProp = function (object, property) { 
          return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
        };
      }
      if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {
          var target = this;
          if (typeof target != "function") {
              throw new TypeError();
          }
          var args = slice.call(arguments, 1),
              bound = function () {
              if (this instanceof bound) {
                var F = function(){};
                F.prototype = target.prototype;
                var self = new F();
                var result = target.apply(
                    self,
                    args.concat(slice.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return self;
              } else {
                return target.apply(
                    that,
                    args.concat(slice.call(arguments))
                );
              }
          };
          return bound;
        };
      }
      function setCss( str ) {
          mStyle.cssText = str;
      }
      function setCssAll( str1, str2 ) {
          return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
      }
      function is( obj, type ) {
          return typeof obj === type;
      }
      function contains( str, substr ) {
          return !!~('' + str).indexOf(substr);
      }
      function testProps( props, prefixed ) {
          for ( var i in props ) {
              var prop = props[i];
              if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                  return prefixed == 'pfx' ? prop : true;
              }
          }
          return false;
      }
      function testDOMProps( props, obj, elem ) {
          for ( var i in props ) {
              var item = obj[props[i]];
              if ( item !== undefined) {
                              if (elem === false) return props[i];
                              if (is(item, 'function')){
                                  return item.bind(elem || obj);
                  }
                              return item;
              }
          }
          return false;
      }
      function testPropsAll( prop, prefixed, elem ) {
          var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
              props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');
              if(is(prefixed, "string") || is(prefixed, "undefined")) {
            return testProps(props, prefixed);
              } else {
            props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
            return testDOMProps(props, prefixed, elem);
          }
      }    tests['cssanimations'] = function() {
          return testPropsAll('animationName');
      };
      for ( var feature in tests ) {
          if ( hasOwnProp(tests, feature) ) {
                                      featureName  = feature.toLowerCase();
              Modernizr[featureName] = tests[feature]();
              classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
          }
      }
       Modernizr.addTest = function ( feature, test ) {
         if ( typeof feature == 'object' ) {
           for ( var key in feature ) {
             if ( hasOwnProp( feature, key ) ) {
               Modernizr.addTest( key, feature[ key ] );
             }
           }
         } else {
           feature = feature.toLowerCase();
           if ( Modernizr[feature] !== undefined ) {
                                                return Modernizr;
           }
           test = typeof test == 'function' ? test() : test;
           if (typeof enableClasses !== "undefined" && enableClasses) {
             docElement.className += ' ' + (test ? '' : 'no-') + feature;
           }
           Modernizr[feature] = test;
         }
         return Modernizr; 
       };
      setCss('');
      modElem = inputElem = null;
      Modernizr._version      = version;
      Modernizr._domPrefixes  = domPrefixes;
      Modernizr._cssomPrefixes  = cssomPrefixes;
      Modernizr.testProp      = function(prop){
          return testProps([prop]);
      };
      Modernizr.testAllProps  = testPropsAll;
      return Modernizr;
  })(window, window.document);
  return function() {
    return Modernizr.cssanimations;
  }
});
        /*! @source /camaleao/assets/web/javascript/extras/refresh.js */
        homeUOL.register('refresh', [], function() {
  /**
   * User agent do usuário
   * @type {String}
   */
  var userAgent = navigator.userAgent.toLowerCase();
  /**
   * Id do setTimeout criado para o reload.
   * @type {Int}
   */
  var timer = null;
  /**
   * Tempo para atualizar a home.
   * @type {Int}
   */
  var timeToReload = parseInt(TIME_TO_RELOAD);
  /**
   * Realiza o reload da página.
   *
   * Usa `history.go` no IE pois é o que permite scroll
   * automático a área onde o usuário estava.
   */
  function reload() {
    userAgent.match(/msie|rv:/) ? 
      window.history.go(0) :
        window.location.reload();
  }
  /**
   * Desativa o reload automático.
   */
  function pause() {
    clearTimeout(timer);
    timer = null;
  }
  /**
   * Reinicia o reload automático.
   */
  function start() {
    if(timer === null) {
      timer = setTimeout(reload, timeToReload);
    }
  }
  return {
    pause: pause,
    start: start
  };
});
        /*! @source /camaleao/assets/web/javascript/extras/tailtarget-report.js */
        homeUOL.register('tailtargetreport', [], function() {
  return function(reportValue, channel, value) {
    window.universal_variable.tt = {
      "s1": value
    };
    if (window.triggerUOLTM) {
      storage.setItem('_tt_' + channel, true);
      console.log('[Tail Target Report] Clique no módulo ' + channel + ' com valor ' + value);
      window.triggerUOLTM(reportValue);
    }
  };
});
        /*! @source /camaleao/assets/web/javascript/utils/lightbox.js */
        homeUOL.register('lightbox', ['jquery'], function($) {
  var $body = $('body');
  return function createLightboxContent(name, template) {
    if($body.find('.lightbox-bg').size() === 0) {
      // cria o bg
      $body.prepend('<div class="lightbox-bg"></div>');
    }
    // remove algum lightbox existente
    $body.find('.lightbox-content').remove();
    // cria o conteúdo
    $body.prepend('<div class="lightbox-content"><div class="'+name+'-lightbox-content">'+template+'</div></div>');
    // lightbox criado
    var instance = $body.find('.'+name+'-lightbox-content');
    var closeFn = function closeLightbox() {
      instance.off().parent().off().remove();
      $body.find('.lightbox-bg').fadeOut(function() { $(this).remove(); });
    };
    var triggerClose = function triggerCloseLightbox(event) {
      var $el = $(event.target);
      if($el.hasClass('lightbox-content') === true || $el.closest('.close').size() > 0) {
        instance.trigger('close');
      }
    }
    instance.on('close', closeFn);
    $body.find('.lightbox-content').on('click', triggerClose);
    return instance;
  }
});
        /*! @source /camaleao/assets/web/javascript/utils/clickuol.js */
        homeUOL.register('clickuol', ['jquery'], function($) {
  return function(container) {
    container = container || $('body');
    if(container.jquery === undefined) {
      container = $(container);
    }
    var map = $.noop;
    if(typeof arguments[1] === 'function') {
      map = arguments[1];
    }
    if(typeof arguments[2] === 'function') {
      map = arguments[2];
    }
    container.each(function(i, el) {
      map.call(this);
    });
  };
});
        /*! @source /camaleao/assets/web/javascript/utils/ga.js */
        homeUOL.register('ga', ['jquery'], function($) {
  // função para definir os dados para GA
  function getGA($el, isDebug){
    var dataGA;
    var $el = $($el);
    var testeAb;
    if ($el.attr('data-metrics') && $el.attr('name') &&
      $el.attr('href') && window.hasOwnProperty('UOLPD') &&
      window.UOLPD.hasOwnProperty('Audience2') &&
      window.UOLPD.Audience2.hasOwnProperty('countClick')) {
      var metrics = $el.attr('data-metrics'),
          name = $el.attr('name'),
          href = $el.attr('href'),
          category = false,
          categoryPosition = false,
          action = false,
          label = false,
          area = false,
          position = false;
      action = href.replace(/(.*)(&u=)/, '');
      // Removendo clicklogger à pedido de AI
      if (action.match(/clicklogger/)) {
        action = href.replace(/(.*)(clicklogger)(.*)(redir\=)(.*)/,'$5');
      }
      //var clickuol = href.replace(/(http\:\/\/click\.uol\.com\.br\/\?rf\=)(.*)(&u=)(.*)/, '$2');
      var clickuol = 'homec-'+name;
      area = metrics.replace(/(.*)(;)(.*)/,'$3');
      // obtendo categoryPosition a partir do metrics (mod-)
      categoryPosition = metrics.replace(/(.*)(mod-)(\d*)(.*)/,'$3');
      // obtendo o category
      category = 'bloco-editorial-' + categoryPosition;
      // obtendo o position
      position = 'coluna-' + metrics.replace(/(.*)(_col-|mod-)(\d*)(;.*)/, '$3');
      // obtendo o nome do componente
      label = name.replace('-' + area + '-', '').replace(/(modulo)(\d*)/, '');
      if (area.indexOf('topo-hibrido') >= 0) {
        area = "topo";
        var labelPosition = name.split("|");
        label = labelPosition[0];
        position = labelPosition[1];
        if(name == "previsao-tempo") {
          position = "coluna-3"
        }
      } else if (clickuol.indexOf('homec-menu') >= 0) {
        // Primeiro nível do menu da home
        category = 'menu';
        label = 'menu-topo-nivel-';
        if( clickuol.indexOf('-sub-vitrine') >= 0) {
          // sub-vitrine
          label += '2-vitrine';
          position = 'item-' + metrics.replace(/(sub-)(\d*)(.*)/, '$2');
        } else if (clickuol.indexOf('menu-sub') >= 0) {
          // Item de submenu
          label += '2';
          position = 'item-' + metrics.replace(/(sub-)(\d*)(;.*)/, '$2');
        } else if( clickuol.indexOf('-chapeu') >= 0) {
          label += '2-chapeu-vitrine';
          position = 'titulo';
        } else {
          label += '1';
          var subItem = '.menu-uol-item';
          var parent = $el.closest(subItem);
          var pos = $(subItem).index(parent) + 1;
          position = 'item-' + pos;
        }
      } else if (clickuol.indexOf('homec-button-menu') >= 0) {
        // Menu dos blocos temáticos - nível 2 (Entretenimento, Esporte, Notícias, Mulher, TVUOL)
        category = 'menu';
        label = 'menu-bloco-nivel-2';
        if( clickuol.indexOf('-sub-vitrine') >= 0) {
          // sub-vitrine
          label += '-vitrine';
          position = 'item-' + metrics.replace(/.*(sub-)(\d*)(.*)/, '$2');
        } else if (clickuol.indexOf('menu-sub') >= 0) {
          // Item de submenu
          position = 'item-' + metrics.replace(/.*(sub-)(\d*)(;.*)/, '$2');
        } else if( clickuol.indexOf('-chapeu') >= 0) {
          label += '-chapeu-vitrine';
          position = 'titulo';
        }
      } else if (name == 'header') {
        // Barra preta
        category = 'header';
        position = 'coluna-unica';
      } else if (name.indexOf('coluna-auxiliar-') >= 0) {
        label = label.replace(/(.*)(-item\d*)/, '$1');
      }else if (name == 'rodape') {
        category = 'footer';
        var col = $el.closest('.col');
        position = 'coluna' + (col.length ? '-' + col.attr('class').replace(/.*canal-0(\d).*/,'$1') : '-unica');
      } else if (name.indexOf('mail-') >= 0) {
        category = 'header';
        label = 'email-';
        position = 'coluna-unica';
        if (name.indexOf('checkin-barra') >= 0){
          label += 'checkin-barra';
        } else if (name.indexOf('checkin') >= 0){
          label += 'checkin';
        } else if (name == 'mail-uolmail') {
          label += 'uolmail';
        } else if (name.indexOf('criar-email') >= 0){
          label += 'criar-email';
        } else if (name.indexOf('mail-sair') >= 0){
          label += 'sair';
        }
      } else if (name.indexOf('tab-') >= 0) {
        label = name.indexOf('chamada') >= 0 ? "manchete" : "chamada";
        position = name.indexOf('chamada') >= 0 ? "coluna-unica" : name.replace(/.*item(\d+).*/,"item-$1");
      } else if (name.indexOf('widget-') >= 0) {
        // Widgets da home
        category = 'bloco-customizado-' + categoryPosition;
        // chamadas
        if (name.indexOf('-item') >= 0) {
          label = 'chamada';
          position = 'coluna-' + name.replace(/(.*-item)(\d*)/, '$2');
          if (name.indexOf('widget-horoscopo-item') >= 0){
            label = 'chamada-horoscopo';
            position = 'coluna-unica';
          }
        } else if ( name.indexOf('futebol-compre-fiel-torcedor') >= 0) {
          // comprar ingressos fiel torcedor
          label = 'compre-fiel-torcedor';
          position = 'titulo';
        } else if (name.indexOf('widget-futebol') >= 0) {
          if( name == 'widget-futebol'){
            label = 'titulo-item-selecionado';
            position = 'titulo';
          } else if (name.indexOf('-agenda') >= 0) {
            label = 'proximo-jogo';
            position = 'coluna-3';
          } else if (name.indexOf('-resultado') >= 0) {
            label = 'ultimo-resultado';
            position = 'coluna-3';
          }
        } else if (name == 'widget-novela' || name == 'widget-noticias' || name == 'widget-horoscopo'){
          label = 'titulo-item-selecionado';
          position = 'titulo';
        } else if (name.indexOf('widget-tt') >= 0) {
          label = label.replace(/widget/,'chamada');
          position = 'item-' + (parseInt($('.module-widget-horizontal h2 a').index($el)) + 1);
          testeAb = $el.attr('data-tag') || 'sem cluster';
        }
      } else if (name.indexOf('submanchete') >= 0) {
        // Verificando se é submanchete
        if (name.indexOf('-sub') >= 0) {
          label = 'submanchete-relacionada';
        }
      } else if (name.indexOf('manchete-') >= 0) {
        // Verificando se é manchete
        position = '2-colunas';
        // manchete sub-chamada
        if (name.indexOf('-sub') >= 0) {
          label = 'manchete-relacionada';
        } else if (name.indexOf('especial') >= 0) {
          position = 'coluna-unica';
        }
        else if (name.indexOf('-bbb-') >= 0) {
          label = 'manchete';
        }
      } else if (name.indexOf('chamada-destaque') >= 0) {
        // removendo 'esquerda' e 'direita' das chamadas
        label = 'chamada-destaque';
        position = 'item-' + name.replace(/(.*)(-item)(\d*)(.*)/, '$3');
      } else if (name.indexOf('softnews') >= 0) {
        label = "chamada";
        position = name.replace(/.*item(\d+).*/,"item-$1");
      } else if (name.indexOf('8chamadas') >= 0) {
        // 8 Chamadas
        label = '8-chamadas';
        // Existe de/para de posição pois o 8 chamadas é dividido em 2 módulos
        position =  'item-';
        var itemPos = name.replace(/(.*)(-item)(\d*)/, '$3');
        if (name.indexOf('modulo1-') >= 0) {
          position += name.replace(/(.*)(-item)(\d*)/, '$3');
        } else{
          var deParaItemPos = {
            1: 5,
            2: 6,
            3: 7,
            4: 8
          };
          position += deParaItemPos[itemPos];
        }
      } else if (name.indexOf('tvuol') >= 0) {
        if (name.indexOf('publico') >= 0) {
          label = 'chamada-publico';
        }
        if (name.indexOf('chamada') >= 0) {
          label = 'chamada';
        }
        if (name.indexOf('hoje') >= 0) {
          label = name.indexOf('canal') >= 0 ? 'tvuol-hoje-canal' : 'chamada-hoje';
        }
        if(name.match(/item\d/)){
          position =  'coluna-'+name.replace(/.*-item(\d*).*/, '$1');
        }
      } else if (name.indexOf('chamada-') >= 0) {
        // chamada
        // Chamada tail target
        if(name.indexOf('modulo-tt-carros') >= 0) {
          if(window.universal_variable.aud.abTest.indexOf('carros') >= 0) {
            testeAb = 'carros';
          } else {
             testeAb = 'sem cluster';
          }
        }
        if(name.indexOf('modulo-tt-receitas') >= 0) {
          if(window.universal_variable.aud.abTest.indexOf('receitas') >= 0) {
            testeAb = 'receitas';
          } else {
             testeAb = 'sem cluster';
          }
        }
        if(name.indexOf('modulopatrocinada') >= 0) {
          label = name.replace('-' + area + '-', '').replace(/(modulo)(\d*)/, '-');
        }
        // removendo 'esquerda' e 'direita' das chamadas
        label = label.replace(/-esquerda|-direita|-item\d*/, '');
        if (name.indexOf('-sub') >= 0) {
          // sub de chamada
          label = 'chamada-relacionada';
        }
        if (name.indexOf('-bbb-') >= 0) {
          var itemColuna = name.replace(/(.*)(-item)(\d*)/, '$3');
          label = 'chamada'
          position = 'coluna-' + itemColuna;
        }
        if (name.indexOf('produtos5mods') >= 0) {
          // Produtos 5 mods (chamada)
          category = 'bloco-produtos-' + name.replace(/.*-item(\d*).*/, '$1');
        }
        if (name.indexOf('superfoto') >= 0) {
          // Produtos 5 mods (chamada)
          position = '4-colunas';
          label = 'manchete-superfoto';
        }
        if (name.indexOf('especial') >= 0) {
          // Chamadas do especial
          position = 'coluna-' + name.replace(/(.*)(-item)(\d*)/, '$3');
        }
      } else if (name.indexOf('superfoto-relacionadas') >= 0) {
        // Superfoto relacionadas 5 mods (chamada)
        label = 'manchete-relacionada-superfoto';
        position = '4-colunas';
      } else if (name.indexOf('placar-futebol') >= 0) {
        // Chamada Placar futebol 1 mods
        label = 'chamada-placar-futebol';
      } else if (name.indexOf('placar-carnaval') >= 0) {
        // Chamada Placar futebol 1 mods
        label = 'chamada-placar-carnaval';
      } else if (name.indexOf('rotativo-') >= 0) {
        // rotativo
        label = 'chamada-destaque';
        position = 'item-' + name.replace(/(.*)(-item)(\d*)(.*)/, '$3');
      } else if (name.indexOf('maislidas') >= 0 || name.indexOf('voceviu') >= 0) {
        // Módulo de colunas
        label = 'chamada';
        position = 'item-' + name.replace(/(.*-item)(\d*)/,'$2');
      } else if (name.indexOf('radio') >= 0 || name.indexOf('jogos') >= 0) {
        // Radio e Jogos
        if (name.indexOf('item') >= 0) {
          label = 'chamada';
          position = 'item-' + name.replace(/(.*-item)(\d*)/,'$2');
        } else {
          label = 'cabecalho-bloco';
          position = 'topo-modulo';
        }
      } else if (name.indexOf('horizontal-ecommerce') >= 0) {
        // Ecommerce
        category = 'bloco-produtos-' + name.replace(/.*-modulo(\d*).*/, '$1');
        area = 'ecommerce';
        label = 'horizontal-'+area;
        position = name.indexOf('-item') >= 0 ? 'item-' + name.replace(/.*-item(\d*).*/, '$1') : 'topo-modulo';
      } else if (name.indexOf('produtos5mods') >= 0) {
        // Produtos 5 mods (título)
        category = 'bloco-produtos-' + name.replace(/.*-item(\d*).*/, '$1');
        label = label.replace(/-item.*/,'');
      } else if (name.indexOf('horizontal') >= 0) {
        if (name.indexOf('-descricao') >= 0) {
          label = 'descricao-cabecalho';
          position = 'topo-modulo';
        } else if (name.indexOf('frases') >= 0) {
          label = 'cabecalho-bloco';
          position = 'topo-modulo';
        } else if (name.indexOf('cabecalho') >= 0) {
          label = 'cabecalho-bloco';
          position = 'topo-modulo';
        } else if(name.indexOf('aovivo') >= 0){
          label = 'chamada-ao-vivo';
          position = area.indexOf('aovivo') >= 0 ? '4-colunas' : '2-colunas';
        } else if(name.indexOf('cotacoes') >= 0){
          var suffix = name.replace(/.*cotacoes-/,'')
          label = name.indexOf('-direto') >= 0 ? 'widget-cotacoes-direto-bolsa' : (suffix === name ? 'chamada-cambio' : 'chamada-'+suffix);
          position = name.indexOf('-direto') >= 0 ? 'coluna-unica' : '4-colunas';
        }
      } else if (name.indexOf('frases') >= 0) {
        label = 'chamada';
      } else if (name.indexOf('fotos') >= 0) {
        label = 'chamada';
        position = 'item-'+name.replace(/.*-item(\d*).*/, '$1');
      } else if (name.indexOf('previsao-tempo') >= 0) {
        position = 'coluna-4';
      } else if (name.indexOf('uolhost') >= 0 || name.indexOf('segurancadigital') >= 0 || name.indexOf('dieta') >= 0) {
        if (name.indexOf('cabecalho') >= 0) {
          label = 'cabecalho-bloco';
          position = 'topo-modulo';
        } else {
          label = 'chamada';
          position = 'coluna-unica';
        }
      }
      if (category.indexOf('bloco-editorial-') >= 0 || category.indexOf('bloco-produtos-') >= 0 || category.indexOf('bloco-customizado-') >= 0) {
        category = category.replace(/(bloco-editorial-|bloco-produtos-|bloco-customizado-)(\d*)/, '$1'+ area);
      }
      dataGA = {
        'action': action,
        'category': category,
        'area': area,
        'label': label,
        'position': position
      };
      if(testeAb) {
        dataGA.abTest = testeAb;
      }
      // Habilitando console.log do GA
      if (isDebug) {
        console.group('\n\n\n[VALOR DE CLICK UOL]: homec-%s', name);
        console.log('\tpos: ' + metrics);
        console.log('\thref: ' + action);
        // console.log('\tname: '+ name);
        // console.log('\tclickuol: ' + clickuol);
        console.log('\n\t[DATA GA]');
        for(a in dataGA){
          console.log('\t\t[%s]: %s', a, dataGA[a]);
        }
        console.groupEnd();
      }
    }
    return dataGA;
  }
  window.getGA = getGA;
  // Adiciona clique no elemento
  function addGA(_, el, map) {
    var $el = $(el);
    if($el.prop('nodeName') !== 'A') {
      return insertGA($el.find('a'), map);
    }
    // envia métrica no clique
    $el.bind('click', function(){
      var isDebug = window.location.search.match(/debugGA=true/);
      var dataGA = getGA($(this), isDebug);
      if(dataGA){
        if(isDebug){
          return false;
        }
        UOLPD.Audience2.countClick(dataGA);
      }
    });
  }
  // insere GA
  function insertGA(container) {
    if(container.jquery === undefined) {
      container = $(container);
    }
    var map = $.noop;
    var insertMetricsClickEvent = false;
    if(typeof arguments[1] === 'function') {
      map = arguments[1];
    } else if(typeof arguments[1] === 'boolean') {
      insertMetricsClickEvent = arguments[1];
    }
    if(typeof arguments[2] === 'function') {
      map = arguments[2];
    } else if(typeof arguments[2] === 'boolean') {
      insertMetricsClickEvent = arguments[2];
    }
    container.each(function(i, el) {
      // executa a função map antes de adicionar click
      map.call(this);
      // adiciona click UOL
      addGA(i, el, map);
    });
  }
  return insertGA;
});
        /*! @source /camaleao/assets/web/javascript/utils/metrics-ga.js */
        homeUOL.register('metrics-ga', ['jquery'], function($) {
  "use strict";
  function hit(obj) {
    if(!window.hasOwnProperty('UOLPD')) {
      console.error('metrics: UOLPD is not defined');
    }
    if(!window.UOLPD.hasOwnProperty('Audience2')) {
      console.error('metrics: UOLPD.Audience2() is not defined');
    }
    if(!window.UOLPD.Audience2.hasOwnProperty('countClick')) {
      console.error('metrics: window.UOLPD.Audience2.countClick() is not defined');
    }
    if(!obj) {
      console.error('metrics: esperado objeto ou <a node>');
      return false;
    }
    if(obj.nodeName) {
      execHit(obj);
      return;
    }
    // if(typeof obj.mod !== "string") {
    //   console.error('metrics: `mod` é um atributo obrigatório e deve ser do tipo `string` (recebido: `' + typeof obj.mod + '`)');
    //   return false;
    // }
    execHit(obj);
  }
  // faz um try catch para impedir que algum erro na omniture não pare a execução do script
  function execHit(obj){
    try{
      // Habilitando console.log do GA
      if (window.location.search.match(/debugGA=true/)) {
        console.group('\n\n\n[NÃO POSSUI CLICK UOL, apenas OMNITURE CLICK]');
        console.log('\n\t[DATA GA]');
        for(var a in obj){
          console.log('\t\t[%s]: %s', a, obj[a]);
        }
        console.groupEnd();
      }
      UOLPD.Audience2.countClick(obj);
    } catch (e){
      console.error('metrics: ocorreu um erro ao tentar executar a função', e);
    }
  }
  // Inclui a lib no escopo global
  window.metricsGA = hit;
  return hit;
});
        /*! @source /camaleao/assets/web/javascript/utils/unique-id.js */
        homeUOL.register('uniqueId', [], function() {
  var idCounter = 0;
  // underscore code
  // http://underscorejs.org/underscore.js
  return function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  }
});
        /*! @source /camaleao/assets/web/javascript/utils/normalize-string.js */
        homeUOL.register('normalizeString', [], function() {
  return function normalizeString(txt, removeSpace) {
    removeSpace = typeof removeSpace == 'undefined' ? true : false;
    var Accent  = /[ÂÁÀÃÄÊÉÈËÎÍÌÏÔÓÒÕÖÛÚÙÜÇÑ\+\-\s]/g;
    var reA     = /[ÂÁÀÃÄ]/g;
    var reE     = /[ÊÉÈË]/g;
    var reI     = /[ÎÍÌÏ]/g;
    var reO     = /[ÔÓÒÕÖ]/g;
    var reU     = /[ÛÚÙÜ]/g;
    var reC     = /[Ç]/g;
    var reN     = /[Ñ]/g;
    var reMAIS    = /\+/g;
    var reOthers  = /[^a-zA-Z0-9_\+]/g;
    var reSpace   = /[ ]/g;
    var upNome = txt.toLowerCase().toUpperCase();
    if (upNome.indexOf("*") + 1 == upNome.length) {
      upNome = upNome.substr(0, upNome.length - 1);
    }
    if (upNome.search(Accent) != -1) {
      removeSpace && (upNome = upNome.replace(reSpace, "-"));
      upNome = upNome.replace(reA, "A");
      upNome = upNome.replace(reE, "E");
      upNome = upNome.replace(reI, "I");
      upNome = upNome.replace(reO, "O");
      upNome = upNome.replace(reU, "U");
      upNome = upNome.replace(reC, "C");
      upNome = upNome.replace(reN, "N");
      removeSpace && (upNome = upNome.replace(reOthers, "-"));
    }
    upNome = upNome.toLowerCase();
    return upNome.trim && upNome.trim() || upNome.replace(/(^[\s\xA0]+|[\s\xA0]+$)/g, '');
  };
});
        /*! @source /camaleao/assets/web/javascript/utils/storage.js */
        homeUOL.register('storage', [], function() {
	return storage; // definido no topo
});
        /*! @source /camaleao/assets/web/javascript/utils/geoloc.js */
        homeUOL.register('geoloc', ['jquery', 'storage'], function geoloc($, storage) {
  'use strict';
  /**
   * API de request para obter a geolocalização do usuário
   * @type {String}
   */
  var API_URL = 'https://geoip.home.uol.com/index.jsonp?callback=homeUOL.callbacks.geoloc';
  /**
   * Nome do cookie com a definição de geolocalização do usuário.
   * @type {String}
   */
  var COOKIE_NAME = 'geoloc';
  /**
   * Indica se navegador possuir suporte ao localStorage.
   * @tyoe {Boolean}
   */
  var storageValidation = storage.storageValidation;
  /**
   * Tenta obter no cookie a geolocalização do usuário.
   * @param {String}
   */
  var defined = storage.getCookie('geoloc');
  /**
   * Dicionário de códigos para siglas de estado.
   * @type {Object}
   */
  var statesCodes = {
    '01':'AC',
    '02':'AL',
    '03':'AP',
    '04':'AM',
    '05':'BA',
    '06':'CE',
    '07':'DF',
    '08':'ES',
    '11':'MS',
    '13':'MA',
    '14':'MT',
    '15':'MG',
    '16':'PA',
    '17':'PB',
    '18':'PR',
    '20':'PI',
    '21':'RJ',
    '22':'RN',
    '23':'RS',
    '24':'RO',
    '25':'RR',
    '26':'SC',
    '27':'SP',
    '28':'SE',
    '29':'GO',
    '30':'PE',
    '31':'TO'
  };
  /**
   * Dicionário de siglas para código de estado.
   * @type {Object}
   */
  var codesStates = {
    'AC':'01',
    'AL':'02',
    'AP':'03',
    'AM':'04',
    'BA':'05',
    'CE':'06',
    'DF':'07',
    'ES':'08',
    'MS':'11',
    'MA':'13',
    'MT':'14',
    'MG':'15',
    'PA':'16',
    'PB':'17',
    'PR':'18',
    'PI':'20',
    'RJ':'21',
    'RN':'22',
    'RS':'23',
    'RO':'24',
    'RR':'25',
    'SC':'26',
    'SP':'27',
    'SE':'28',
    'GO':'29',
    'PE':'30',
    'TO':'31'
  };
  /**
   * Indica que a definição da localização foi realizada
   * através do usuário.
   * @type CONT
   */
  var USER_DEFINITION = 1;
  /**
   * Indica que a definição da localização foi realizada
   * através da API.
   * @type CONT
   */
  var API_DEFINITION = 2;
  /**
   * Indica que a definição da localização foi realizada
   * usando a localização padrão (devido à erro).
   * @type CONT
   */
  var API_FALLBACK_DEFINITION = 3;
  /**
   * Dados de uma localização padrão, em caso de erro ou
   * indisponibilidade da API.
   * @type {Array}
   */
  var DEFAULT_LOCATION = ["SA","BR","27","São Paulo"];
  /**
   * Transforma o array retornado pela API em objeto.
   *
   * {
   *   continent: 'SA',   // South America
   *   country: 'BR',
   *   state: 'SP',
   *   city: 'São Paulo'
   * }
   *
   * @param {Array}
   * @return {Object}
   */
  function normalize(arr) {
    return {
      continent: arr[0],
      country: arr[1],
      state: arr[4],
      city: arr[3]
    };
  }
  /**
   * Função callback do retorno da API de Geoloc.
   * @param {Array} [Sigla Região, Sigla, Pais, Código Estado, Nome Cidade]
   */
  homeUOL.register('callbackGeoloc', function apiCallback(result) {
    register(result, API_DEFINITION);
  });
  /**
   * Registra no cookie do usuário a geolocalização dele.
   * @param {jQuery event} _
   * @param {Array}
   */
  function register(result, mode) {
    var expiresDays;
    switch(mode) {
      case USER_DEFINITION:
        expiresDays = 365;
        break;
      case API_FALLBACK_DEFINITION:
        expiresDays = 1;
        break;
      case API_DEFINITION:
      default:
        expiresDays = 5;
        break;
    }
    if(result instanceof Array === false) {
      result = [];
    }
    if(result[1] !== 'BR') {
      // define cidade padrão
      result = DEFAULT_LOCATION;
    }
    // sistema não conseguiu identificar a cidade
    if(result[2] == '' || result[3] == '') {
      result = DEFAULT_LOCATION;
    }
    // adiciona a sigla do estado
    result.push( statesCodes[result[2]] );
    defined = normalize(result);
    // salva no cookie
    storage.setCookie(COOKIE_NAME, result.join(','), expiresDays, 'uol.com.br');
    // divulga que uma nova localização foi definida
    homeUOL.pub('geoloc', defined);
    // remove o listener
    homeUOL.off('geoloc.api');
  }
  function promise(then) {
    return function(_, value) {
      then.call(null, value);
    }
  }
  /**
   * Fallback para o request para a API de geolocalização.
   * Basicamente segue o fluxo, passando o Array de localização padrão.
   */
  function fallback() {
    register(DEFAULT_LOCATION);
  }
  /**
   * Efetua o request para a API.
   * @param {Function} then Executado após obter a localização
   */
  function request(then) {
    homeUOL.on('geoloc.api', promise(then));
    $.ajax({
      'url'          : API_URL,
      'cache'        : true,
      'dataType'     : 'script',
      'timeout'      : 10000,
      'error'        : fallback
    });
  }
  /**
   * Altera a localização do usuário (ie: através da previsão do tempo).
   * @param {jQuery event} _
   * @param {String} uf Sigla do estado da cidade
   * @param {String} city Nome da cidade
   * @return {Boolean}
   */
  function change(_, uf, city) {
    if(!uf || !city) {
      return false;
    }
    uf = uf.toUpperCase();
    register(['SA', 'BR', codesStates[uf], city], USER_DEFINITION);
    return true;
  }
  homeUOL.on('geoloc.change', change);
  return function(then) {
    if(defined === null) {
      return request(then);
    }
    if(typeof defined === 'string') {
      defined = normalize(defined.split(','));
    }
    if(!defined.city) {
      return request(then);
    }
    homeUOL.pub('geoloc', defined);
    return then(defined);
  }
});
        /*! @source /camaleao/assets/web/javascript/utils/basepath.js */
        homeUOL.register('basepath', [], function widgetFutebol($, storage) {
  'use strict';
  return function(url) {
    var basepath = location.pathname;
    if(basepath == '/') {
      return url;
    }
    basepath = basepath.replace(/^(.+)?\/[^.]+\..+$/, '$1');   // remove arquivo da url
    basepath = basepath.replace(/\/preview\/camaleao\/?/, ''); // remove path de preview
    basepath = basepath.replace(/\/$/, '');                    // remove a última barra
    return basepath + url;
  }
});
        /*! @source /camaleao/assets/web/javascript/libs/sawpf.v1.0.js */
        // original: https://github.com/globocom/sawpf
// editado por: UOL
function sawpf(){
  var storage = homeUOL.instance('storage');
  if (document.getElementById('sawpf')) return;
  // ---------------------------------------------------------------------------------------------------
  var browserVersion = function() {
      var version = (userAgent.match(/.+(?:firefox|ie)[\/: ]([\d.]+)/) || [0, 0])[1];
      if(version===0) {
          //Para internet explorer 11 e superiores:
          version = (userAgent.match(/.+rv:([\d.]+)/) || 0)[1];
      }
      return parseFloat(version);
  };
  // based on jquery's browser detection
  var userAgent = navigator.userAgent.toLowerCase();
  var BrowserDetect = {
    version: browserVersion(),
    msie: ((/msie/).test(userAgent)||(/trident/).test(userAgent)) && !(/opera/).test(userAgent),
    firefox: (/firefox/).test(userAgent)||((/mozilla/).test(userAgent) && !(/(compatible|webkit)/).test(userAgent))
  };
  var isFirefox = (BrowserDetect.firefox);
  var isIE = (BrowserDetect.msie);
  // http://blog.orite.com.au/web_development/2009-06-30/jquery-ie-detection-issue-workaround/
  if (isIE && BrowserDetect.version == 6 && (/msie 8/.test(userAgent))) BrowserDetect.version = 8;
  // http://stackoverflow.com/questions/1328963/detect-ie8-compatibility-mode
  // http://social.msdn.microsoft.com/Forums/en-US/netfxjscript/thread/ae715fd2-1ddd-46f7-8c26-9aed6b2103f1/
  if (isIE && BrowserDetect.version < 9 && document.documentMode < 9) {
      var trident = parseInt((userAgent.match(/.+trident\/(\d+)\..*/) || [0,0])[1], 10);
      BrowserDetect.version = trident < 5 ? 8 : 9;
  }
  // ---------------------------------------------------------------------------------------------------
  //if (!(isFirefox || isIE)) return;
  //if (isFirefox && BrowserDetect.version >= 34) return;
  if (isIE === false) return;
  if (isIE && BrowserDetect.version > 10) return;
  // ---------------------------------------------------------------------------------------------------
  // Cookie control
  var Cookie = {
    set: function(name, value, msecs){
      var cookie = [];
      cookie.push(name + "=" + value);
      cookie.push('path=/');
      // TODO: cookie.push('domain=.' + this._getDomain());
      if (msecs) cookie.push('expires=' + this._getExpire(msecs));
      document.cookie = cookie.join("; ");
    },
    // TODO: refactore to not loop through values
    get: function(name){
      var kvPairs = document.cookie.split(';');
      var nameEQ  = name + "=";
      for(var i = 0; i < kvPairs.length; i++) {
        var kvPair = kvPairs[i]; // key=value pair
        while (kvPair.charAt(0) == ' ') kvPair = kvPair.substring(1, kvPair.length);
        if (kvPair.indexOf(nameEQ) == 0) return kvPair.substring(nameEQ.length, kvPair.length);
      }
      return null;
    },
    unset: function(name) {
      Cookie.set(name, '', -1000);
    },
    _getExpire: function(msecs){
      var d = new Date();
      d.setTime(d.getTime() + msecs);
      return d.toGMTString();
    }
  };
  // ---------------------------------------------------------------------------------------------------
  if (Cookie.get('__sawpf_') == '1') return;
  // ---------------------------------------------------------------------------------------------------
  var SPRITE_URL = (window['base_url'] || 'http://sawpf.com') + '/imgs/1.0.gif';
  var css = "#sawpf * {margin: 0; padding: 0}" +
    "#sawpf {text-align: center; overflow: hidden; cursor:pointer; background: yellow; border-width: 0 0 1px 0; border-color: #DCDCDC; border-style: solid; font-family: arial; position: relative; max-width: 100%; min-width: 1190px}" +
    "#sawpf span, #sawpf a, #sawpf strong {font-size: 13px;line-height:26px; }" +
    "#sawpf a {text-decoration:none;color:#000;}" +
    "#sawpf-close {display:inline-block;padding:0 5px;font-weight:bold;}";
  var styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  if(!window['ActiveXObject']) {
    styleTag.innerHTML = css;
  } else {
    styleTag.styleSheet.cssText = css;
  }
  document.getElementsByTagName('head')[0].appendChild(styleTag);
  var LINK_UOL = "http://click.uol.com.br/?rf=homec-barra-nav-antigo&pos=mod-0;header&u=http://tecnologia.uol.com.br/atualize-seu-navegador/";
  var html = '<span id="sawpf-area">O <strong>UOL</strong> detectou que seu navegador está desatualizado. Recomendamos que baixe a versão mais recente para visualizar melhor todo o conteúdo. <a href="' + LINK_UOL + '"><strong>Saiba mais</strong></a></span>' + '<a href="#" id="sawpf-close" title="Fechar">x</a>';
  var container = document.createElement('div');
  container.id = 'sawpf';
  container.innerHTML = html;
  document.body.insertBefore(container, document.body.firstChild);
  document.getElementById("sawpf-area").onclick = function() {
    location.href = LINK_UOL;
  };
  document.getElementById("sawpf-close").onclick = function(event) {
    Cookie.set("__sawpf_", "1", 30 * 24 * 60 * 60 * 1000);
    var s = container.style;
    s.height = 0;
    s.display = "none";
    document.getElementById("sawpf-close").onclick = undefined;
    return false;
  };
};
        /*! @source /camaleao/assets/web/javascript/modules/tailtarget-subject.js */
        ;(function(window) {
  'use strict';
  /**
   * Verifica se usuário tem interesse
   * no conteúdo baseado no ID do assunto (cluster)
   */
  function verifyInterest() {
    var module = $(this);
    var ttInterests = module.find('.subject-interest');
    var found = false;
    ttInterests.each(function() {
      var idSubject = $(this).data('subject');
      // verifica se usuário tem interesse no conteúdo
      if( TTUser.hasInterest(idSubject) ) {
        var ttDefault = module.find('.subject-default');
        // remove chamada padrão
        ttDefault.remove();
        // exibe chamada de interesse
        $(this).removeClass('subject-interest');
        // remove qualquer outro conteúdo de interesse que sobrar
        module.find('.subject-interest').remove();
        found = true;
        return false;
      }
    });
    if(!found) {
      module.find('.subject-default').removeClass('subject-default');
    }
  }
  onHomeReady(function() {
    var $modules = $('[data-tailtarget-container=true]');
    $modules.each(verifyInterest);
  });
})(window);
        /*! @source /camaleao/assets/web/javascript/modules/comunique-erro.js */
        homeUOL.register('comuniqueErro', ['jquery', 'lightbox', 'swfobject'], function($, lightbox, swfobject) {
  'use strict';
  /**
   * Tempo para fechar automaticamente o lightbox
   * @type {Int}
   */
  var TIME_TO_CLOSE = 7 * 1000;
  /**
   * Timeout que fecha o aviso após um tempo.
   * @type {Int}
   */
  var closeTimeout;
  /**
   * Template do conteúdo lightbox de comunique
   * @type {String}
   */
  var template = '';
  /**
   * Instância do lightbox
   * @type {object}
   */
  var lightboxInstance;
  /**
   * Adiciona no campo descrição
   * informações sobre o usuário
   */
  function addInfoUser(boxComunique) {
    if(window.swfobject && swfobject.ua.pv.toString() !== '0,0,0') {
      boxComunique.find('input[name="flash"]').val( 'Sim ' + swfobject.ua.pv.toString() );
    }
    // faz teste para validar se cookie está ativo
    try {
      var expiresCookie = new Date();
      expiresCookie.setSeconds(expiresCookie.getSeconds() + 5);
      document.cookie = 'testCookie=true; expires=' + expiresCookie.toUTCString() + '; path=/;';
      if(document.cookie.indexOf('testCookie=true') !== -1) {
        boxComunique.find('input[name="cookies"]').val('1');
      }
    } catch(e) { }
  }
  /**
   * Valida dados do formulário
   */
  function validaForm(boxComunique) {
    var nome = boxComunique.find('#form_nome'),
      email = boxComunique.find('#form_email'),
      desc = boxComunique.find('#form_descricao');
    if(nome.val() == '') {
      alert('Favor preencher seu nome');
      nome.focus();
      return false;
    }
    if(email.val() == '') {
      alert('Favor preencher seu e-mail');
      email.focus();
      return false;
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())) {
      alert('E-mail inválido');
      email.focus();
      return false;
    }
    if(desc.val().length == 0) {
      alert('Favor preencher a descrição');
      desc.focus();
      return false;
    }
    return true;
  }
  /**
   * Oculta form, exibe mensagem de sucesso
   * e dispara timeout
   */
  function disparaForm() {
    var boxComunique = $('.comuniqueErro');
    // valida dados do formulário
    if(!validaForm(boxComunique)) {
      return;
    }
    // adiciona informações do usuário
    addInfoUser(boxComunique);
    // envia formulário
    boxComunique.find('form').submit();
    // oculta form
    boxComunique.find('.boxFormErro').css('display','none');
    // exibe mensagem de sucesso
    boxComunique.find('#iframeErros').css('display','block');
    // cria timer para fechar lighbox automaticamente
    // closeTimeout = setTimeout(close, TIME_TO_CLOSE);
  }
  /**
   * Fecha o lightbox
   */
  function close() {
    lightboxInstance && lightboxInstance.trigger('close');
    lightboxInstance = undefined;
  }
  return function(module, templateContainer, templateMarkup) {
    if(templateMarkup !== undefined) {
      template = templateMarkup;
      // habilita botão 'comunique erro no rodapé'
      $('a.btnComunicaErro').on('click', function() {
        homeUOL.load('comuniqueErro');
      });
      return;
    }
    // cria uma lightbox
    lightboxInstance = lightbox('comuniqueErro', template);
    // adiciona action no formulário
    lightboxInstance.find('form').attr('action', '//services.uol.com/see/');
    // registra evento do botão submit para envio do form
    $('#btnComunique').on('click.enviaForm', disparaForm);
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/topo-pagina-inicial.js */
        homeUOL.register('topoPaginaInicial', ['jquery', 'lightbox'], function($, lightbox, swfobject) {
	'use strict';
	/**
	 * Template do conteúdo lightbox
	 * @type {String}
	 */
	var template = '';
	/**
	 * Instância do lightbox
	 * @type {object}
	 */
	var  lightboxInstance;
	/**
	 * Identifica browser do usuário e
	 * mostra template especifico
	 *
	 */
	function defineTplBrowser() {
		var boxInstrucoes = $('.topoPaginaInicial');
    var userAgent = navigator.userAgent;
    // iPad
    if( userAgent.match(/iPad/i) != null ) {
      boxInstrucoes.find('.tplIpad').removeClass('hide');
      return;
    }
		// Chrome
		if( !!window.chrome && !(!!window.opera || userAgent.indexOf(' OPR/') >= 0) ) {
			boxInstrucoes.find('.tplChrome').removeClass('hide');
			return;
		}
		// Firefox
		if( typeof InstallTrigger !== 'undefined' ) {
			boxInstrucoes.find('.tplFirefox').removeClass('hide');
			return;
		}
		// Internet Explorer
		var IEAgent = /MSIE/gi;
		var IE11Agent = /rv:\d+/;
		if( IEAgent.test(userAgent) || IE11Agent.test(userAgent) ) {
			boxInstrucoes.find('.tplIE').removeClass('hide');
			return;
		}
		// Safari
		if( Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ) {
			$('.topoPaginaInicial-lightbox-content').css('margin', '3% auto 0');
			boxInstrucoes.find('.tplSafari').removeClass('hide');
			return;
		}
		// Mensagem genérica
		boxInstrucoes.find('.tplGeneric').removeClass('hide');
		return;
	}
	/**
	 * Fecha o lightbox
	 */
	function close() {
		lightboxInstance && lightboxInstance.trigger('close');
		lightboxInstance = undefined;
	}
	/**
	 * Fecha box 'clique para fazer uol página inicial'
	 */
	function closeBoxPaginaInicial() {
		var box = $('#box-pagina-inicial');
		if( box.length != 0 ) {
			box.addClass('hide');
		}
	}
	return function(module, templateContainer, templateMarkup) {
		// botão fechar box pagina inicial
		$('#btnCloseBox').on('click', function() {
			closeBoxPaginaInicial();
		});
		if(templateMarkup !== undefined) {
			template = templateMarkup;
			// habilita botão 'faça do uol sua página inicial' no topo
			$('a.btnPaginaInicial').on('click', function(e) {
				e.preventDefault();
				homeUOL.load('topoPaginaInicial');
				// define template de retorno
				defineTplBrowser();
				// fecha box 'clique para fazer uol página inicial'
				closeBoxPaginaInicial();
			});
			return;
		}
		// cria uma lightbox
		lightboxInstance = lightbox('topoPaginaInicial', template);
	}
});
        /*! @source /camaleao/assets/web/javascript/modules/erro404.js */
        homeUOL.register('erro404', ['jquery', 'lightbox'], function($, lightbox) {
  'use strict';
  /**
   * Tempo para fechar automaticamente o lightbox
   * @type {Int}
   */
  var TIME_TO_CLOSE = 7 * 1000;
  /**
   * Template do conteúdo lightbox de erro 404.
   * @type {String}
   */
  var template = '';
  /**
   * Timeout que fecha o aviso após um tempo.
   * @type {Int}
   */
  var closeTimeout;
  /**
   * Instância do lightbox
   * @type {object}
   */
  var  lightboxInstance;
  /**
   * Remove o hash da url para não exibir mais o alerta 
   * nos outros acessos / reloads.
   */
  function closed() {
    clearTimeout(closeTimeout);
    location.hash = '';
  }
  /**
   * Fecha o lightbox.
   */
  function close() {
    lightboxInstance && lightboxInstance.trigger('close');
    lightboxInstance = undefined;
  }
  return function(module, templateContainer, templateMarkup) {
    if(templateMarkup !== undefined) {
      template = templateMarkup;
      return;
    }
    // cria uma lightbox
    lightboxInstance = lightbox('erro404', template);
    // registra evento de close, para limpar hash da url
    lightboxInstance.on('close', closed);
    // cria timer para fechar lighbox automaticamente
    closeTimeout = setTimeout(close, TIME_TO_CLOSE);
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/contador-comentarios.js */
        homeUOL.register('contadorComentarios', ['jquery', 'homelinks', 'Mustache'], function($, Homelinks, Mustache) {
  "use strict";
  var tpl = '';
  /**
   * Adiciona contador de comentários nos links.
   */
  return function insertCommentsCounter() {
    if(arguments[2] !== undefined) {
      if(window.hevents) {
        hevents.on('updateCommentsCounter', insertCommentsCounter);
      }
      // define template
      tpl = arguments[2];
      return;
    }
    var comments = window.commentsCounter && commentsCounter.data || [];
    var c = comments.length;
    while(c--) {
      var url       = comments[c].url;
      var counter   = comments[c].qtd;
      var $links    = Homelinks(url);
      if($links !== undefined && counter) {
        $links.find('.comentariosContainer')
          .html( Mustache.render(tpl, { qtd: counter }) )
          .addClass('visible');
      }
    }
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/placeholder.js */
        homeUOL.register('checkPlaceholder', [], function() {
// HTML5 Placeholder Attribute Polyfill (Span)
// Author: James Brumond <james@jbrumond.me> (http://www.jbrumond.me)
function checkPlaceholder(container){
  // MSIE8 does not allow vars between functions...
  var regexCache = {};
	// Don't run the polyfill if it isn't needed
	if ('placeholder' in document.createElement('input')) {
	 document.placeholderPolyfill = function(){};
	 document.placeholderPolyfill.active = false;
	 return;
	}
	var inputs, textareas;
  // Fetch NodeLists of the needed element types
  if(container){
  	inputs = container.getElementsByTagName('input');
  	textareas = container.getElementsByTagName('textarea');
  } else {
  	inputs = document.getElementsByTagName('input');
  	textareas = document.getElementsByTagName('textarea');
  }
  // Define the exposed polyfill methods for manual calls
  document.placeholderPolyfill = function(elems) {
	 elems = elems ? validElements(elems) : validElements(inputs, textareas);
	 each(elems, polyfillElement);
  };
  // Expose whether or not the polyfill is in use (false means native support)
  document.placeholderPolyfill.active = true;
  // Run automatically
  document.placeholderPolyfill();
  // Use mutation events for auto-updating
  if (document.addEventListener) {
	 document.addEventListener('DOMAttrModified', document.placeholderPolyfill);
	 document.addEventListener('DOMNodeInserted', document.placeholderPolyfill);
  }
  // Use onpropertychange for auto-updating
  else if (document.attachEvent && 'onpropertychange' in document) {
	 document.attachEvent('onpropertychange', document.placeholderPolyfill);
  }
  // No event-based auto-update
  else {
	 // pass
  }
  // Add some basic default styling for placeholders
  firstStylesheet().addRule('.-placeholder', 'color: #888;', 0);
  // Polyfill a single, specific element
  function polyfillElement(elem) {
	 // If the element is already polyfilled, skip it
	 if (elem.__placeholder) {
		return updatePlaceholder();
	 }
	 // Is there already a value in the field? If so, don't replace it with the placeholder
	 var placeholder;
	 drawPlaceholder();
	 checkPlaceholder();
	 // Define the events that cause these functions to be fired
	 addEvent(elem, 'keyup', checkPlaceholder);
	 addEvent(elem, 'keyDown', checkPlaceholder);
	 addEvent(elem, 'blur', checkPlaceholder);
	 addEvent(elem, 'focus', hidePlaceholder);
	 addEvent(elem, 'click', hidePlaceholder);
	 addEvent(placeholder, 'click', hidePlaceholder);
	 addEvent(window, 'resize', redrawPlaceholder);
	 // Use mutation events for auto-updating
	 if (elem.addEventListener) {
		addEvent(elem, 'DOMAttrModified', updatePlaceholder);
	 }
	 // Use onpropertychange for auto-updating
	 else if (elem.attachEvent && 'onpropertychange' in elem) {
		addEvent(elem, 'propertychange', updatePlaceholder);
	 }
	 // No event-based auto-update
	 else {
		// pass
	 }
	 function drawPlaceholder() {
		placeholder = elem.__placeholder = createElement('span', {
		  innerHTML: getPlaceholderFor(elem),
		  style: {
			 position: 'absolute',
			 display: 'none',
			 margin: '0',
			 padding: '0',
			 cursor: 'text'
		  }
		});
		elem.parentNode.appendChild(placeholder);
		redrawPlaceholder();
	 }
	 function redrawPlaceholder() {
		// Update some basic styles to match that of the input
		var zIndex = getStyle(elem, 'zIndex');
		zIndex = (zIndex === 'auto') ? 99999 : zIndex;
		setStyle(placeholder, {
		  zIndex: (zIndex || 99999) + 1,
		  backgroundColor: 'transparent'
		});
		// Fix an old IE bug
		if (elem.offsetParent && getStyle(elem.offsetParent, 'position') === 'static') {
		  elem.offsetParent.style.position = 'relative';
		}
		// Reposition the span to make sure it stays in place
		var offset = getOffset(elem);
		setStyle(placeholder, {
		  top: offset.top + 'px',
		  left: offset.left + 'px'
		});
	 }
	 function updatePlaceholder() {
		placeholder.innerHTML = getPlaceholderFor(elem);
		redrawPlaceholder();
	 }
	 function checkPlaceholder(event) {
		if (elem.value) {
		  var nofocus = true;
		  if (event && event.type ){
			 nofocus = event.type === 'blur';
		  }
		  hidePlaceholder(event, nofocus);
		} else {
		  showPlaceholder();
		}
	 }
	 function showPlaceholder() {
		placeholder.style.display = 'block';
		addClass(placeholder, '-placeholder');
		addClass(elem, '-placeholder-input');
	 }
	 function hidePlaceholder(event, suppressFocus) {
		placeholder.style.display = 'none';
		removeClass(placeholder, '-placeholder');
		removeClass(elem, '-placeholder-input');
		if (! suppressFocus) {
		  elem.focus();
		}
	 }
  }
  // Build a list of valid (can have a placeholder) elements from the given parameters
  function validElements() {
	 var result = [ ];
	 each(arguments, function(arg) {
		if (typeof arg.length !== 'number') {
		  arg = [ arg ];
		}
		result.push.apply(result, filter(arg, isValidElement));
	 });
	 return result;
  }
  // Check if a given element supports the placeholder attribute
  function isValidElement(elem) {
	 var tag = (elem.nodeName || '').toLowerCase();
	 return (tag === 'textarea' || (tag === 'input' && (elem.type === 'text' || elem.type === 'password')));
  }
  function addEvent(obj, event, func) {
	 if (obj.addEventListener) {
		obj.addEventListener(event, func, false);
	 } else if (obj.attachEvent) {
		obj.attachEvent('on' + event, func);
	 }
  }
  function removeEvent(obj, event, func) {
	 if (obj.removeEventListener) {
		obj.removeEventListener(event, func, false);
	 } else if (obj.detachEvent) {
		obj.detachEvent('on' + event, func);
	 }
  }
  function each(arr, func) {
	 if (arr.forEach) {
		return arr.forEach(func);
	 }
	 for (var i = 0, c = arr.length; i < c; i++) {
		func.call(null, arr[i], i, arr);
	 }
  }
  function filter(arr, func) {
	 if (arr.filter) {
		return arr.filter(func);
	 }
	 var result = [ ];
	 for (var i = 0, c = arr.length; i < c; i++) {
		if (func.call(null, arr[i], i, arr)) {
		  result.push(arr[i]);
		}
	 }
	 return result;
  }
  function classNameRegex(cn) {
	 if (! regexCache[cn]) {
		regexCache[cn] = new RegExp('(^|\\s)+' + cn + '(\\s|$)+', 'g');
	 }
	 return regexCache[cn];
  }
  function addClass(elem, cn) {
	 elem.className += ' ' + cn;
  }
  function removeClass(elem, cn) {
	 elem.className = elem.className.replace(classNameRegex(cn), ' ');
  }
  // Internet Explorer 10 in IE7 mode was giving me the wierest error
  // where e.getAttribute('placeholder') !== e.attributes.placeholder.nodeValue
  function getPlaceholderFor(elem) {
	 return elem.getAttribute('placeholder') || (elem.attributes.placeholder && elem.attributes.placeholder.nodeValue) || '';
  }
  // Get the first stylesheet in the document, or, if there are none, create/inject
  // one and return it.
  function firstStylesheet() {
	 var sheet = document.styleSheets && document.styleSheets[0];
	 if (! sheet) {
		var head = document.head || document.getElementsByTagName('head')[0];
		var style = document.createElement('style');
		style.appendChild(document.createTextNode(''));
		document.head.appendChild(style);
		sheet = style.sheet;
	 }
	 return sheet;
  }
  // Used internally in getStyle()
  function getStyleValue(elem, prop) {
	 if (elem.currentStyle) {
		return elem.currentStyle[prop];
	 } else if (window.getComputedStyle) {
		return document.defaultView.getComputedStyle(elem, null)[prop];
	 } else if (prop in elem.style) {
		return elem.style[prop];
	 }
	 return null;
  }
  // Get a style property from an element
  function getStyle(elem, prop) {
	 var style;
	 if (elem.parentNode == null) {
		elem = document.body.appendChild(elem);
		style = getStyleValue(elem, prop);
		elem = document.body.removeChild(elem);
	 } else {
		style = getStyleValue(elem, prop);
	 }
	 return style;
  }
  // Set style properties to an element
  function setStyle(elem, props) {
	 for (var i in props) {
		if (props.hasOwnProperty(i)) {
		  elem.style[i] = props[i];
		}
	 }
  }
  // Create an element
  function createElement(tag, props) {
	 var elem = document.createElement(tag);
	 for (var i in props) {
		if (props.hasOwnProperty(i)) {
		  if (i === 'style') {
			 setStyle(elem, props[i]);
		  } else if (i === 'innerHTML') {
			 elem.innerHTML = props[i];
		  } else {
			 elem.setAttribute(i, props[i]);
		  }
		}
	 }
	 return elem;
  }
  // Find the offset position of a given element
  function getOffset(elem) {
	 return {
		top:
		elem.offsetTop +
		parseFloat(getStyle(elem, 'paddingTop')) +
		parseFloat(getStyle(elem, 'borderTopWidth')),
		left:
		elem.offsetLeft +
		parseFloat(getStyle(elem, 'paddingLeft')) +
		parseFloat(getStyle(elem, 'borderLeftWidth'))
	 };
  }
};
return checkPlaceholder;
});
        /*! @source /camaleao/assets/web/javascript/modules/menu-horizontal.js */
        homeUOL.register('menuHorizontal', ['jquery'], function($) {
  return function initMenuHorizontal () {
    var $window = $(window);
    var pointerEvents = (function() {
      var ev = 'mouseenter mouseleave';
      var isTouchable = 'ontouchstart' in document.documentElement;
      // ie 10
      if('PointerEvent' in window === true) {
        ev = 'pointerover pointerout';
      } else if('MSPointerEvent' in window === true) {
        ev = 'MSPointerOver MSPointerOut';
      }
      // navegadores sem suporte touch
      if(isTouchable === true) {
        return ev + ' touchend click';
      } else {
        return ev + ' mouseup click';
      }
    }());
    var $body = $('body');
    var isMoz = [];
    /**
     * Container do meni
     * @type {jQuery Object}
     */
    var $menuUOL = $('.menu-uol');
    /**
     * <ul> dos itens do menu
     * @type {jQuery Object}
     */
    var $menuUOLNavList = $menuUOL.find(".menu-uol-nav-list");
    /**
     * Posição do menu na página
     * @type {Float}
     */
    var menuUOLOffsetLeft;
    /**
     * <li>'s do menu
     * @type {jQuery Object}
     */
    var $canais = $menuUOL.find('.menu-uol-item');
    /**
     * links do menu
     * @type {jQuery Object}
     */
    var $canaisLinks = $menuUOL.find(".menu-uol-estacao");
    /**
     * <div>'s dos submenus
     * @type {jQuery Object}
     */
    var $submenus = $menuUOL.find('.menu-uol-item-content');
    /**
     * Cache dos submenus que já tiveram suas posições calculadas
     * (utilizado para realizar os cálculos apenas uma vez)
     * @type {Object}
     */
    var calculatedPositions = {};
    /**
     * Tempo para abrir um submenu
     * @type {Int}
     */
    var timeToOpen = 300;
    /**
     * Tempo para fechar um submenu
     * @type {Int}
     */
    var timeToClose = 150;
    /**
     * Tempo de efeito fadeIn/fadeOut do submenu.
     * @type {Int}
     */
    var fadeTime = 200;
    /**
     * Armazena a referência do setTimeout que fecha o submenu
     * @type {Int}
     */
    var timeoutClose = null;
    /**
     * Armazena a referência do setTimeout que abre o submenu
     * @type {Int}
     */
    var timeoutOpen = null;
    /**
     * Flag que determina se pode ou não fazer o fade na transição entre os menus.
     * O fade só deve ser exibido no primeiro e no último item que o usuário passar o mouse,
     * para que não vire uma bagunça
     * @type {Boolean}
     */
    var opacityTransition = true;
    /**
     * Flag que determina se é a primeira vez que o usuário passou o mouse em um item do menu.
     * @type {Boolean}
     */
    var firstHover = true;
    /**
     * Retorna o espaço entre o primeiro item do menu e a lateral
     * esquerda. Usado para calcular o posicionamento dos menus.
     * @return {Float}
     */
    var getMenuOffsetLeft = function() {
      return $menuUOLNavList.offset().left;
    }
    /**
     * Define a variável `menuUOLOffsetLeft`.
     */
    var setMenuOffsetLeft = function() {
      menuUOLOffsetLeft = getMenuOffsetLeft();
    };
    /**
     * Indica se um evento foi disparado devido à um touch.
     * @param {String} eventType
     */
    function isTouchEvent(event) {
      if(event.originalEvent !== undefined) {
        // firefox
        if(event.originalEvent.mozInputSource) {
          return event.originalEvent.mozInputSource === event.originalEvent.MOZ_SOURCE_TOUCH;
        }
        // API Pointer
        if(event.originalEvent.pointerType !== undefined) {
          return event.originalEvent.pointerType === 'touch';
        }
        // ipad e outros touch devices
        if(!!event.originalEvent.changedTouches === true) {
          return true;
        }
      }
      // verifica pelo tipo de evento
      return event.type.match(/^touch/) !== null;
    }
    function closeAllSub(ev) {
      // fecha algum submenu aberto
      $canaisLinks.removeClass('show');
      $submenus.removeClass('show');
      if(ev !== undefined) {
        $canais.removeClass('hover');
      }
    }
    function normalizeEventType(type) {
      switch(type) {
        case 'pointerover':
        case 'MSPointerOver':
        case 'mouseenter':
          return 'mouseenter';
        case 'pointerout':
        case 'MSPointerOut':
        case 'mouseleave':
          return 'mouseleave';
      }
    }
    /**
     * Função que abre um submenu.
     * @param {Event}
     */
    var openEvent = function(event) {
      //console.log('openEvent() -> touch? ', event.data.isTouch);
      var _this = this;
      // link do menu atual
      //event.$link = $canaisLinks.filter('[data-menu="'+event.data+'"]');
      // limpa o timeout de abertura do submenu
      clearTimeout(timeoutOpen);
      // se for o primeiro hover, cria um timeout para abrir o submenu
      // se não for ele é aberto instantâneamente
      if(firstHover && event.data.isTouch !== true) {
        // não é mais primeiro hover
        firstHover = false;
        // cria o timeout de abertura do submenu
        timeoutOpen = setTimeout(function() {
          open.apply(_this, [event]);
        }, timeToOpen);
      } else {
        // abre o submenu
        open.apply(_this, [event]);
      }
    };
    /**
     * Abre um submenu
     */
    function open(event) {
      var cfg = event.data;
      // $submenu do canal
      var $submenu = cfg.$subEl;
      closeAllSub();
      // cancela o close() do último menu que foi ativado
      clearTimeout(timeoutClose);
      // adiciona classe no link do canal
      cfg.$canalEl.addClass('show');
      // exibe o submenu atual com transição apenas no primeiro
      if(opacityTransition) {
        $submenu.addClass('show').stop().fadeIn(cfg.isTouch === false ? fadeTime : 0);
        opacityTransition = false;
      } else {
        $submenu.addClass('show').show();
      }
      // calcula as posições deste submenu
      calcSubmenuPosition(cfg.canalName, $submenu, cfg.$canalEl);
      window.echo && echo.throttle();
    }
    /**
     * Função que fecha um submenu.
     * @param {Event}
     */
    var closeEvent = function(event) {
      //console.log('closeEvent() -> touch? ', event.data.isTouch);
      var _this = this;
      // limpa o timeout que fecha o submenu
      clearTimeout(timeoutClose);
      // cria o timeout que fecha o submenu
      timeoutClose = setTimeout(function() {
        close.apply(_this, [event]);
      }, event.data.isTouch === false ? timeToClose : 20);
    };
    /**
     * Fecha um submenu
     */
    function close(event) {
      var cfg = event.data;
      // limpa o timeout que fecha o submenu que foi disparado anteriormente
      clearTimeout(timeoutClose);
      cfg.$canalEl.removeClass('show');
      // remove o highlight da <li>
      cfg.$canalEl.parent().removeClass('hover');
      // esconde o submenu
      cfg.$subEl.removeClass('show').fadeOut(200);
      // faz com que o próximo hover em algum link tenha transição na abertura submenu
      opacityTransition = true;
      // faz com que o próximo hover em algum link abra o submenu instantâneamente
      firstHover = true;
    }
    function submenuMouseEvents(event) {
      //console.log('submenuMouseEvents('+normalizeEventType(event.type)+')');
      switch(normalizeEventType(event.type)) {
        case 'mouseenter':
          clearTimeout(timeoutClose);
          break;
        case 'mouseleave':
          $(this).closest('li').find('.menu-uol-estacao').trigger('mouseleave').trigger('pointerout');
          break;
      }
    }
    /**
     * Evita o disparo de um evento padrão e sua propagação.
     * @param {Event} event Evento que deve ser teratado.
     */
    function stopEvent(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    /**
     * Retorna objeto com as configurações do item interagido.
     * @param {Event} Evento de mouse ou click.
     * @return {Object}
     */
    function getMenuObject(originalEvent) {
      var channelName = this.getAttribute('data-menu');
      var $subEl      = $submenus.filter('[data-menu="'+channelName+'"]');
      var $item       = $(this).closest('li');
      var eventType   = originalEvent.type;
      var isTouch     = isTouchEvent(originalEvent);
      // transforma evento mouseup em touchend
      eventType = eventType.replace('mousedown', 'touchend');
      return {
        type      : eventType,
        isTouch   : isTouch,
        canalName : channelName,
        canalEl   : this,
        $canalEl  : $(this),
        $item     : $item,
        $subEl    : $subEl
      };
    }
    function hoverItem(event, toggle) {
      if(toggle === true) {
        event.data.$item.toggleClass('hover');
      } else {
        $canais.removeClass('hover');
        event.data.$item.addClass('hover');
      }
    }
    /**
     * Evento disparado quando há interação no canal.
     */
    function canalMouseEvents(event) {
      // evita propagação de outros eventos
      event.stopPropagation();
      // define alguns atributos ao evento
      event.data = getMenuObject.call(this, event);
      var $this   = $(this);
      var type    = event.data.type;
      var $subEl  = event.data.$subEl;
      var isTouch = isTouchEvent(event);
      var noSub   = $subEl.size() === 0;
      //console.log('canalMouseEvents('+type+')');
      if((isTouch === false && type === 'click') || noSub === true) {
        //console.log('\ttravando evento '+type+' não touch');
        //if(noSub === true) {
        //  //console.log('close all sub')
        //  closeAllSub(event);
        //}
        hoverItem(event, noSub);
        return true;
      }
      hoverItem(event);
      // evento click ou pointer, usando touch:
      // ignora evento e trava propagation
      if(isTouch === true && (type === 'click' || type.match(/pointerover|mouseenter/) !== null)) {
        //console.log('\ttravando evento '+type+' que é touch');
        stopEvent(event);
        return false;
      }
      // evita disparo de eventos padrões para a ação
      event.preventDefault();
      clearTimeout(timeoutOpen);
      // em caso de evento touch, dispara evento mouse equivalente
      if(isTouchEvent(event) === true) {
        event.data.isTouch = true;
        // se houver submenu no canal, dispara evento de mouseenter/mouseleave,
        // abrindo e fechando o submenu.
        if($subEl.size() > 0) {
          event.data.type = $this.hasClass('show') === false ? 'mouseenter' : 'mouseleave';
        }
      }
      switch(normalizeEventType(event.data.type)) {
        case 'mouseenter':
          openEvent.call(this, event);
          break;
        case 'mouseleave':
          closeEvent.call(this, event);
          break;
      }
      return true;
    }
    /*
     * Calcula a posição do menu
     * @param {String} menu identificador do menu
     * @param {jQuery Object} $submenu elemento do submenu
     * @param {jQuery Object} $link elemento do menu ativo
     */
    function calcSubmenuPosition(menu, $submenu, $link) {
      // não permite que o cálculo seja realizado mais de uma vez
      if(calculatedPositions[menu]) {
        return false;
      }
      // distância em px entre o link e a lateral esquerda da página
      var itemOffsetLeft = $link.offset().left;
      // espaço vazio que fica antes do submenu
      var submenuEmptySpaceBefore = itemOffsetLeft - getMenuOffsetLeft();
      // largura do submenu
      var submenuWidth = $submenu.width();
      // o espaço vazio que fica antes do submenu,
      // somado com a largura do submenu cabe dentro do layout
      var left = (submenuEmptySpaceBefore)+submenuWidth < 1180 ?
          // ok, coube. Se não couber ele é colado na lateral direita
          submenuEmptySpaceBefore : -1;
      var css = {};
      if(left >= 0) {
        css.left = left - 5;
        css.right = 'auto';
      } else {
        css.left = 'auto';
        css.right = '-4px';
      }
      $submenu.css(css);
      // configura todos os .content-block do $submenu para que todos tenham o mesmo height
      configBlocksHeight($submenu);
      // faz cache deste menu para que estes calculos não sejam feitos novamente
      calculatedPositions[menu] = true;
    }
    /*
     * Faz com que todos os .content-block do $submenu tenham a mesma altura
     * @param {jQuery Object} $submenu elemento do submenu
     */
    function configBlocksHeight($submenu) {
      var $contentBlocks = $submenu.find('.content-block');
      // aplica a maior altura encontrada a todos .content-block deste $submenu
      $contentBlocks.height(findBlocksMaxHeight($contentBlocks));
    }
    /*
     * Retorna a maior altura da coleção de elementos recebida
     * @param {jQuery Object} $contentBlocks elementos que terão a altura testada
     * @return {Int} maior altura da coleção de elementos
     */
    function findBlocksMaxHeight($contentBlocks) {
      var maxHeight = 0;
      // percorre todos os .content-block procurando pela maior altura
      $contentBlocks.each(function(index, el){
        maxHeight = Math.max(maxHeight, $(el).height());
      });
      return maxHeight;
    }
    //console.log('[menu] registrando eventos -> ', pointerEvents);
    $canaisLinks.on(pointerEvents, canalMouseEvents);
    $submenus.on('mouseenter mouseleave', submenuMouseEvents);
    $window.on('resize', setMenuOffsetLeft);
    $body.on('click', closeAllSub);
    setMenuOffsetLeft();
  };
});
        /*! @source /camaleao/assets/web/javascript/modules/busca.js */
        homeUOL.register('busca', ['jquery', 'metrics-ga'], function($, metricsGA) {
  'use strict';
  /**
   * Tipo de inputs que deve ser procurado dentro de
   * um formulário.
   * @type {String}
   */
  var formInputsType = [
    'input[type="text"]',
    'input[type="password"]',
    'input[type="radio"]',
    'input[type="checkbox"]',
    'input[type="select"]'
  ].join(',');
  /**
   * Regra específica para cada um dos formulários
   * específicos.
   * @type {Object}
   */
  var rules = {
    'formBuscaCursosOnline': trataCursosOnline,
    'formBuscaEmpregoCerto': trataEmpregoCerto,
    'formBuscaShopping'    : trataShopping,
    'formBuscaRadioUOL'    : trataRadioUOL,
    'formBuscaUOLJogos'    : trataUOLJogos,
    'formBuscaEducacao'    : trataEducacao,
    'formBuscaVideos'      : trataVideos,
    'formBusca'            : trataBuscaTopo,
    'formBuscaHost'        : trataBuscaHost
  };
  function input(form, name, value) {
    form = $(form);
    form.prepend('<input type="hidden" name="'+name+'" value="'+value+'" />');
  }
  /**
   * Faz tratamento para a busca do Topo.
   * @scope {DOM Form}
   * @param {jQuery Element} $inputs
   * @return {Boolean}
   */
  function trataBuscaTopo($inputs, data) {
    var $form  = $(this);
    var $input = $inputs.filter('input[name="q"]');
    var query  = $input.val();
    query = encodeURIComponent(query);
    if(query === '') {
      return sendToUrl(data.emptyUrl);
    }
    var type = '';
    type = /\#/.test(this.action) ? this.action.replace(/.*\#/,"").toUpperCase() : type;
    type = /^https:\/\/venda\.host\.uol/.test(this.action) ? 'DOMINIO' : type;
    //remove type do action, caso exista
    this.action = this.action.replace(/\#.*/,'');
    var useInputQ = false;
    switch(type) {
      case 'UOL':
        input(this, 'type', 'all');
        input(this, 'searchon', 'uol');
        //Adicionando campo 'term' com o valor da busca
        input(this, 'term', query);
      break;
      case 'IMAGEM':
        input(this, 'type', 'images');
        input(this, 'searchon', 'all');
        //Adicionando campo 'term' com o valor da busca
        input(this, 'term', query);
      break;
      case 'DICIONARIO':
        input(this, 'redirect', 'dicionario');
        useInputQ = true;
      break;
      case 'DOMINIO':
        input(this, 'extension', '.com.br');
        input(this, 'searchType', 'simples');
        input(this, 'domain1', query);
      break;
      default:
        //Adicionando campo 'term' com o valor da busca
        input(this, 'term', query);
    }
    var queryString = '?';
    $form.find('input').each(function(){
      if(this.name==="q" && !useInputQ)
        return;
      queryString += this.name+'='+ decodeURIComponent(this.value) +'&';
    });
    // remove o último &
    queryString = queryString.substring(0, queryString.length - 1);
    // faz o hit
    hit(this.action + queryString, query, this);
    return sendToUrl(this.action + queryString);
  }
  /**
   * Faz tratamento para a busca de Rádio UOL.
   * @scope {DOM Form}
   * @param {jQuery Element} $inputs
   * @return {Boolean}
   */
  function trataRadioUOL($inputs, data) {
    var $input = $inputs.filter('input[name="q"]');
    var query  = $input.val();
    // faz o hit
    hit(query, this);
    if(query === '') {
      return sendToUrl(data.emptyUrl);
    }
    return sendToUrl(this.action + query);
  }
  /**
   * Faz tratamento para busca de Jogos UOL.
   * @scope {DOM Form}
   * @param {jQuery Element} $inputs
   * @return {Boolean}
   */
  function trataUOLJogos($inputs, data) {
    var $input = $inputs.filter('input[name="keywords"]');
    var query  = $input.val();
    // faz o hit
    hit(query, this);
    if(query === '') {
      return sendToUrl(data.emptyUrl);
    }
    return true;
  }
  /**
   * Faz tratamento para a busca de Rádio UOL.
   * @scope {DOM Form}
   * @param {jQuery Element} $inputs
   * @return {Boolean}
   */
  function trataEducacao($inputs) {
    var $input = $inputs.filter('input[name="q"]');
    return sendToUrl(this.action + encodeURIComponent($input.val()));
  }
  /**
   * Faz tratamento para busca de shopping.
   * @scope {DOM Form}
   * @param {jQuery Element} $inputs
   * @param {Object} parâmetros `data` do DOM do formulário
   * @return {Boolean}
   */
  function trataShopping($inputs, data) {
    var $input = $inputs.filter('input[name="q"]');
    var query  = $input.val();
    // faz o hit
    hit(query, this);
    if(query === '') {
      return sendToUrl(data.emptyUrl);
    }
    return true;
  }
  /**
   * Faz tratamento para busca de curso online.
   * @scope {DOM Form}
   * @param {jQuery Element} $inputs
   * @param {Object} parâmetros `data` do DOM do formulário
   * @return {Boolean}
   */
  function trataCursosOnline($inputs, data) {
    var $input = $inputs.filter('input[name="Titulo"]');
    var query  = $input.val();
    // faz o hit
    hit(query, this);
    if(query === '') {
      return sendToUrl(data.emptyUrl);
    }
    return true;
  }
  /**
   * Faz tratamento para busca de emprego certo.
   * @scope {DOM Form}
   * @param {jQuery Element} $inputs
   * @param {Object} parâmetros `data` do DOM do formulário
   * @return {Boolean}
   */
  function trataEmpregoCerto($inputs, data) {
    var $input = $inputs.filter('input[name="keyword"]');
    var query  = $input.val();
    // faz o hit
    hit(query, this);
    if(query === '') {
      return sendToUrl(data.emptyUrl);
    }
    return true;
  }
  /**
   * Faz tratamento para busca de Vídeos.
   * @scope {DOM Form}
   * @param {jQuery Element} $inputs
   * @param {Object} parâmetros `data` do DOM do formulário
   * @return {Boolean}
   */
  function trataVideos($inputs, data) {
    var $input = $inputs.filter('input[name="q"]');
    var query  = $input.val();
    // faz o hit
    hit(query, this);
    if(query === '') {
      return sendToUrl(data.emptyUrl);
    }
    return true;
  }
  /**
   * Faz tratamento para busca do módulo de UOL Host.
   * @scope {DOM Form}
   * @param {jQuery Element} $inputs
   * @param {Object} parâmetros `data` do DOM do formulário
   * @return {Boolean}
   */
  function trataBuscaHost($inputs, data) {
    var $input = $inputs.filter('input[name="q"]');
    var query  = $input.val();
    if(query === '' || query === undefined || query === 'undefined') {
      window.alert('Por favor, digite uma extensão válida.');
      return false;
    } else {
      window.location.assign('http://clicklogger.rm.uol.com.br/?prd=16&grp=src:13;chn:0;cpg:home_uol_busca_dominios;creative:home_uol_busca_dominios;thm:uol_dominios&msr=Cliques%20de%20Origem:1&oper=11&redir=https://venda.host.uol.com.br/searchDomain.html?campaign=3941b492b8c78a2daecd3dd0b885fe502aa24ba8&domain1=' +
        query +
        '&extension=.com.br');
    }
    metricsGA({
      'action': 'clique',
      'category': 'bloco-editorial-uol-host',
      'area': 'busca',
      'label': query,
      'position': 'topo-modulo'
    });
    return true;
  }
  /**
   * Executado quando um formulário é enviado.
   * @param {jQuery event}
   */
  function submit(event) {
    var form = this;
    var $form = $(this);
    var data = $form.data();
    var $inputs = $form.find(formInputsType);
    if(form.getAttribute('data-prevent-default') == "true") {
      event.preventDefault();
    }
    // faz tratamento especial dependendo do formulário
    if(typeof rules[ form.name ] === 'function') {
      return rules[ form.name ].call(form, $inputs, data);
    } else {
      // este else é necessário pq por algum motivo o ipad
      // não para de executar a função depois do return acima.
      return true;
    }
  }
  /**
   * Redireciona o usuário para uma url.
   * @param {String} url
   */
  function sendToUrl(url) {
    location.href = url;
    return false;
  }
  function hit(urlDest, query, form) {
    var action = '',
      category = false,
      area = false,
      label = false,
      position = false;
    action = form.getAttribute('action');
    category = 'bloco-editorial-' + form.getAttribute('data-metrics').replace(/(mod-)(\d*)(;.*)/, '$2');
    label = 'busca';
    // Busca do header
    if (form.getAttribute('name') == 'formBusca') {
      action = urlDest;
      category = 'header';
      area = 'busca';
      position = 'coluna-unica';
      label = decodeURIComponent(query);
    } else if (form.getAttribute('name') == 'formBuscaRadioUOL') {
      area = 'radio';
      position = 'topo-modulo';
    }
    metricsGA({
      'action': action,
      'category': category,
      'area': area,
      'label': label,
      'position': position
    });
  }
  return function(container) {
    container = container || $('body');
    container.on('submit', submit);
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/super-topo.js */
        homeUOL.register('superTopo', [
	'jquery',
	'clickuol'
], function superTopo($, clickuol) {
	'use strict';
	return function(module, templateContainer, templateMarkup) {
	}
});
        /*! @source /camaleao/assets/web/javascript/modules/previsao-tempo.js */
        homeUOL.register('previsaoTempo', ['jquery', 'geoloc', 'Mustache', 'Suggest', 'normalizeString', 'clickuol', 'ga', 'metrics-ga','basepath'], function previsaoTempo(jquery, geoloc, Mustache, Suggest, normalizeString, clickuol, GA, metricsGA, basepath) {
  'use strict';
  var API_URL = 'https://geoip.home.uol.com/states/';
  window.Weather = {
    callback: apiCallback
  };
  var $body = $('body');
  /**
   * Elemento onde o módulo será aplicado.
   * @type {DOM}
   */
  var moduleElement;
  /**
   * Elemento onde há template mustache.
   * @type {DOM}
   */
  var moduleContainer;
  /**
   * Elemento da seta de busca aberta/fechada
   * @type {DOM}
   */
  var moduleIconEl;
  /**
   * Template Mustache do módulo.
   * @type {Mustache Parsed Template}
   */
  var moduleTemplate;
  /**
   * Elemento do formulário de busca de cidade.
   * @type {DOM}
   */
  var suggestForm;
  /**
   * Instância do suggest de cidades.
   * @type {SuggestIntance}
   */
  var suggestIntance;
  /**
   * Guarda valor da coluna da métrica
   * @type {String}
   */
  var COLUNA_METRIC = 'coluna-4'
  /**
   * Transforma o array retornado pela API em objeto.
   *
   * {
   *   min : Int, // temperatura minima
   *   max : Int, // temperatura máxima
   *   sky : String,  // sigla para a característica do céu
   *   city: {
   *     state: String, // sigla do estado
   *     name : String  // nome da cidade
   *   }
   * }
   *
   * @param {Array}
   * @return {Object}
   */
  function normalize(arr) {
    return {
      min   : arr[2],
      max   : arr[3],
      sky   : arr[4],
      night : +serverDate.hour >= 18 || +serverDate.hour < 6, // entre 18h e 6h
      city: {
        state: arr[0],
        name: arr[1],
        normalized: normalizeCity(arr[1] + ', ' + arr[0]),
        link: arr[5]
      }
    };
  }
  /**
   * Normaliza o nome da cidade para que caiba no template.
   * @param {String} str nome da cidade
   * @return {String}
   */
  function normalizeCity(str) {
    if(str.length > 18) {
      return str.substr(0, 18) + '...';
    }
    return str;
  }
  /**
   * Recebe os dados da API e executa o render.
   * @param {Array}
   */
  function apiCallback(result) {
    var canRender = true;
    if(typeof(result) !== 'object' || result.length !== 6) {
      canRender = false;
    }
    for(var index = 0; index < result.length; ++index) {
      if(result[index] === null || typeof(result[index]) === 'undefined' || result[index] === '') {
        canRender = false;
      }
    }
    if(canRender) {
      render(null, normalize(result));
    } else {
      $('.clima').addClass('previsao-tempo-down');
    }
  }
  /**
   * Retorna o path de request da URL da API.
   * @param {Object} location Objeto de localização
   * @return {String} (ie.: /sp/saopaulo.js)
   */
  function getRequestPath(location) {
    return location.state.toLowerCase() + '/' + normalizeString(location.city).replace(/-/g, '') + '.js';
  }
  /**
   * Faz o request do tempo.
   * @param {jQuery event} _
   * @param {Object} location Objeto de localização
   */
  function request(_, location) {
    $.ajax({
      'url'      : API_URL + getRequestPath(location),
      'cache'    : true,
      'dataType' : 'script'
    });
  }
  /**
   * Faz o request do SVG Sprite.
   */
  function loadSvgs() {
    $.ajax({
      'url'   : basepath('/camaleao/assets/web/svg/icons-weather.svg'),
      'cache' : true
    }).then(function(response) {
      var svg = document.createElement('div');
      svg.className = 'icons-weather';
      svg.style.display = 'none';
      svg.appendChild(response.getElementsByTagName('svg')[0]);
      document.body.appendChild(svg);
    });
  }
  /**
   * Registra evento para qualquer alteração de localização e
   * faz o request inicial.
   * @param {Object} location Objeto de localização
   */
  function init(location) {
    homeUOL.on('geoloc', request);
    loadSvgs();
    request(null, location);
  }
  function bodyClose(event) {
    if($(event.target).closest('.module.previsao').size() === 0) {
      toggleSearchForm(true);
    }
  }
  /**
   * Exibe / esconde o formulário de busca de cidade.
   */
  function toggleSearchForm(forceCloseOrEvent) {
    var forceClose, event;
    if(forceCloseOrEvent instanceof jQuery.Event) {
      event = forceCloseOrEvent;
    } else {
      forceClose = forceCloseOrEvent;
    }
    if(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    var input = suggestForm.find('input[name="q"]').get(0);
    moduleIconEl.toggleClass('icon-single-arrow-down icon-single-arrow-up');
    if(suggestForm.hasClass('show') === true || forceClose === true) {
      var metricAction = 'fechar';
      // fecha
      suggestForm.stop().slideUp(500);
      input.value = '';
      suggestForm.removeClass('show');
      $body.off('click.closeWeatherSearch');
    } else {
      var metricAction = 'abrir';
      // abre
      suggestForm.stop().slideDown(500, function() {
        // registra evento no body
        $body.on('click.closeWeatherSearch', bodyClose);
      });
      input.focus();
      suggestForm.addClass('show');
    }
    metricsGA({
      'action': 'clique',
      'category': 'bloco-editorial-topo',
      'area': 'topo',
      'label': metricAction + '-previsao-tempo',
      'position': COLUNA_METRIC
    });
  }
  /**
   * Cria instância de suggest para a busca de cidades.
   * @param {jQuery Dom} form
   */
  function applySuggest(form) {
    suggestIntance = new Suggest(form.get(0), {
      'source' : 'https://search.uol.com.br/?format=jsonp&jsonp=%callback&size=%max&fields=municipio-normalizado,municipio,uf,id&repository=city&cd=%query',
      'cache' : true,
      'max_results' : 5,
      'charset' : 'iso-8859-1',
      "class_current" : "bg14",
      'queryURL' : function(query) {
        return Suggest.normalizeString(query, false).replace(/ /g, '+AND+');
      },
      'data' : function(data) {
        return data.docs;
      },
      'item' : function(item) {
        return item.municipio;
      },
      'markup' : function(item) {
        return '<li class="t-bg pointer" data-normalizado="'+item['municipio-normalizado']+'" data-nome="'+item.municipio +'" data-uf="'+item.uf.toLowerCase()+'"><span class="municipio">'+item.municipio+'</span><span class="uf">'+item.uf+'</span></li>';
      },
      'sort' : function(itens) {
        return itens.sort(function(a, b) {
          return a['municipio-normalizado'].length < b['municipio-normalizado'].length ? -1 : 1;
        });
      },
      'onSelect' : function(item) {
        var city = item.getAttribute('data-nome'),
          uf = item.getAttribute('data-uf');
        if(city && uf) {
          // define a cidade para a previsão do tempo
          homeUOL.pub('geoloc.change', [uf, city]);
          var mod = moduleElement.data('metrics');
          var n = mod.replace(/(.*)(mod-)(\d*)(.*)/,'$3');
          metricsGA({
            'action': 'clique',
            'category': 'bloco-editorial-topo',
            'area': mod.replace(/(.*)(;)(.*)/,'$3'),
            'label': 'selecionar-previsao-tempo-'+city+'-'+uf,
            'position': COLUNA_METRIC
          });
          // fecha o formulário
          toggleSearchForm();
        }
      },
      'events' : {
        "mouseover" : function(item) {
          jQuery(item).addClass('bg14');
        },
        "mouseout" : function(item) {
          jQuery(item).removeClass('bg14');
        }
      }
    });
  }
  /**
   * Renderiza o módulo com as informações do tempo.
   *
   * @param {jQuery Event}
   * @param {Json} data Dados do tempo
   */
  function render(_, data) {
    moduleContainer.html(Mustache.render(moduleTemplate, data));
    // ícone de seta de busca aberta/fechada
    moduleIconEl = moduleElement.find('.openSearch').find('i');
    if(/hibrido/.test(moduleElement.data('metrics'))) {
      COLUNA_METRIC = 'coluna-3'
    }
    // click uol
    clickuol(moduleContainer);
    // GA
    GA(moduleContainer.find('a[name="previsao-tempo"]'));
  }
  // incializa o módulo de previsão do tempo
  return function(module, templateContainer, templateMarkup) {
    moduleElement   = module;            // container do módulo
    moduleContainer = templateContainer; // container do template
    moduleTemplate  = templateMarkup;    // string do template
    // elementos que serão usados para filtro
    suggestForm = moduleElement.find('#formTempo');
    // aplica Suggest no formulário
    applySuggest(suggestForm.find('form'));
    // optional, speeds up future uses
    Mustache.parse(moduleTemplate);
    // eventos no formulário
    moduleElement.on('click', '.openSearch', function() {
      toggleSearchForm();
    });
    //moduleElement.on('touchend', '#containerPrevisaoTempo', toggleSearchForm);
    // inicia
    geoloc(init);
  };
});
        /*! @source /camaleao/assets/web/javascript/modules/widget-futebol.js */
        homeUOL.register('widgetFutebol', ['jquery','storage', 'basepath'], function widgetFutebol($, storage, basepath) {
  'use strict';
  /**
   * Serviço do placar
   */
  var servico = basepath('/camaleao/api/agenda-futebol.json?id=');
  /**
   * ID dos clubes
   */
  var idTime = {
    'atletico-mg' : 4,
    'atletico-pr' : 3,
    'bahia' : 30,
    'botafogo' : 5,
    'ceara' : 33,
    'chapecoense' : 695,
    'corinthians' : 6,
    'coritiba' : 7,
    'cruzeiro' : 9,
    'flamengo' : 1,
    'fluminense' : 11,
    'fortaleza' : 35,
    'gremio' : 13,
    'internacional' : 15,
    'parana-clube' : 18,
    'palmeiras' : 17,
    'america-mg' : 26,
    'santos' : 22,
    'sao-paulo' : 24,
    'sport' : 76,
    'vasco' : 25,
    'vitoria' : 21
  };
  /**
   * Url de jogos passados do clube
   */
  var urlResultados;
  /**
   * Url de próximos jogos do clube
   */
  var urlProximo;
  /**
   * Tratamento para retorno da agenda do clube
   *
   * @param {object} resposta da api agenda-futebol
   * @param {function} função de retorno
   */
  function agendaClube(result, callbackAgenda) {
    var agenda = {};
    agenda.ultimo = result.resultado;
    agenda.proximo = result.agenda;
    // tratamento de links
    if( agenda.ultimo.link === '' ) {
      agenda.ultimo.link = urlResultados;
    }
    if( agenda.proximo.link === '' ) {
      agenda.proximo.link = urlProximo;
    }
    // caso a agenda (próximo jogo) estiver vazio, retornar link para todos os jogos
    if( agenda.proximo === '' ) {
      agenda.proximo = false;
      agenda.todos = {
        link : urlResultados
      };
    }
    // retorna agenda
    callbackAgenda(agenda);
  }
  var fnPlacar = function(callbackAgenda) {
    // caso usuário esteja na página de arquivo da home
    if(location.host === "noticias.uol.com.br") {
      callbackAgenda(false);
      return false;
    }
    // url para busca
    var clube = storage.getCookie('meuTime');
    var key = getTimeById(parseInt(clube));
    var url = servico + idTime[key];
    key = key.replace(/parana-clube/,'parana')
    // url's do clube
    urlResultados = 'http://esporte.uol.com.br/futebol/times/'+ key +'/resultados/';
    urlProximo    = 'http://esporte.uol.com.br/futebol/times/'+ key +'/proximos-jogos/';
    // faz a requisição no serviço
    $.ajax({
      url: url,
      dataType: 'json',
      success : function(result){
        if( result.erro === true ) {
          // caso o time não existir, retorna false
          callbackAgenda(false);
        } else {
          // tratamento da agenda
          agendaClube(result, callbackAgenda);
          //Reinicializa seeLater
          window.seeLater && window.seeLater.update();
        }
      },
      error : function() {
        // se falhar requisição, retorna false
        callbackAgenda(false);
      }
    });
  };
  fnPlacar.idTime = idTime;
  function getTimeById( value ) {
    for( var prop in idTime ){
      if( idTime.hasOwnProperty( prop ) ){
        if( idTime[ prop ] === value ){
          return prop;
        }
      }
    }
  }
  fnPlacar.getTimeById = getTimeById;
  return fnPlacar;
});
        /*! @source /camaleao/assets/web/javascript/modules/widget-novela.js */
        homeUOL.register('widgetNovela', ['jquery','storage'], function widgetNovela($, storage) {
  'use strict';
  /**
   * Calcula data dos próximos capítulos
   *
   * @type {Int} dias : quantidade de dias
   */
  function calculaDatas(dias) {
    var dataAtual = new Date(serverDate.year, serverDate.month-1, serverDate.day);
    var dados = [];
    var dia, mes;
    // calcula data dos próximos capítulos
    for(var i=0; i < dias; i++) {
      var data = new Date(dataAtual.getTime() + i*24*60*60*1000);
      // adiciona '0' caso número do dia/mês for somente um digito
      mes = (data.getMonth()+1).toString().length == 1? "0"+(data.getMonth()+1) : data.getMonth()+1;
      dia = data.getDate().toString().length == 1? "0"+data.getDate() : data.getDate();
      dados.push( dia +'/'+ mes +'/'+data.getFullYear() );
    }
    return dados;
  }
  /**
   * Tratamento de dados do monte carlo para
   * retornar capítulo(s) da novela
   *
   * @type {Int} qtd : quantidade de dados para retorno
   * @type {Object} novela : informações da novela
   * @type {Object} json : dados do request
   * @type {Function} callback : função para retorno dos dados
   */
  var fnResumo = function(qtd, novela, json, callback) {
    var dados = [];
    var cont = 0;
    var hideSemana = false;
    // possíveis datas dos próximos capítulos
    var dataCapitulos = calculaDatas(6);
    // varre json procurando capítulo do dia
    $.each(json.docs.reverse(), function(index, value) {
      var resumo = value.descricao;
      var dataResumo = resumo.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g);
      if( dataResumo && dataCapitulos.indexOf(dataResumo.toString()) > -1 ) {
        // tratamento dos dados
        var texto     = resumo.split('): ').pop();
        var diaSemana = resumo.match(/\x28[A-z]{3}\x29/g);
        var data      = resumo.match(/[0-9]{2}\/[0-9]{2}/g).toString().replace('/','.');
        var ano       = resumo.match(/\/[0-9]{4}/g).toString().replace('/','.');
        if (!diaSemana) {
          hideSemana = true;
        } else {
          diaSemana = diaSemana.toString().replace(/\x28|\x29/g,'');
        }
        // dados de retorno
        dados[cont] = {};
        dados[cont].titulo = value.titulo;
        dados[cont].data   = data;
        dados[cont].semana = diaSemana;
        dados[cont].link   = novela.href+'?abre='+data+ano;
        dados[cont].index  = cont;
        dados[cont].indexPlus = cont + 1;
        cont++;
        // stop loop assim que atingir qtd requisitada de capítulos
        if( cont >= qtd ) {
          return false;
        }
      }
    });
    // Caso um dos capítulos não tenha dia da semana
    // remove os outros dias da semana
    if (hideSemana) {
      dados.map(function(capitulo) {capitulo.semana = ''});
    }
    // retorna capítulos
    callback(dados);
    //Reinicializa seeLater
    window.seeLater && window.seeLater.update();
  };
  return fnResumo;
});
        /*! @source /camaleao/assets/web/javascript/modules/widget-horoscopo.js */
        homeUOL.register('widgetHoroscopo', [], function widgetHoroscopo() {
  'use strict';
  var horoscopoSignos;
  var fn = function(signo){
    if(!horoscopoSignos){
      horoscopoSignos = window.horoscopoSignos;
    }
    var horoscopoMessage = horoscopoSignos[signo];
    if(!signo || !horoscopoMessage){
      return;
    }
    horoscopoMessage.previsao = horoscopoMessage.previsao ? horoscopoMessage.previsao : '';
    // retorno dos dados
    var _response = {
      docs : horoscopoMessage.previsao.slice(0,140) + '...'
    }
    homeUOL.pub('horizontal-widget-horoscopo', [{
      message: signo,
      name: horoscopoMessage.label,
      href: signo,
      sigla: horoscopoMessage.icon,
      siglaPt: horoscopoMessage.slug,
      response: horoscopoMessage.previsao.length ? _response : false
    }]);
  }
  return fn;
});
        /*! @source /camaleao/assets/web/javascript/modules/widget-generic.js */
        homeUOL.register('widgetGeneric', [
  'jquery',
  'Mustache',
  'storage',
  'widgetHoroscopo',
  'widgetFutebol',
  'widgetNovela',
  'homelinks',
  'clickuol',
  'ga',
  'metrics-ga',
  'normalizeString',
  'tailtargetreport'
], function widgetGeneric($, Mustache, storage, widgetHoroscopo, widgetFutebol, widgetNovela, homelinks, clickuol, GA, metricsGA, normalizeString, tailtargetreport) {
  'use strict';
  /**
   * Tempo, em milisegundos, que o script deve esperar para o retorno
   * do request do widget. Após o tempo, é disparado evento de fallback.
   * @type {Int}
   */
  var TIMEOUT_TIME = 4000;
  /**
    * Parâmetros que serão enviados para o monte carlo no request
    * @type {Object}
    */
  var _requestParams = {
    sort:'created:desc',
    format:'jsonp',
    size:'7',
    charset:'utf-8',
    jsonp: '',
    fields:'titulo,imagem,imagem-credito,url-uol',
    'tags-id':'',
    repository:'news',
    publisher:'publicadoruol',
    portal:'uol'
  };
  var widgetModules = {};
  /**
    * url's para fazer o redirect caso o monte carlo caia
    * @type {Object} requestData
    */
  var requestData = {
    futebol:{
      urlPlanoB: 'https://esporte.uol.com.br/futebol/times/'
    },
    novela:{
      urlPlanoB: 'https://tvefamosos.uol.com.br/novelas/'
    }
  };
  /**
    * indica se o serviço do monte carlo está funcionando
    * @type {Boolean} serviceAvaliable
    */
  var serviceAvaliable = true;
  /**
    * indica se é para ativar ou desativar módulo de 'próximos jogos' no widget
    * caso for desativado, será exibido 3 notícias do time
    * @type {Boolean}
    */
  var placarWidgetFutebol = true;
  /**
    * indica se é para ativar ou desativar módulo de 'resumo da novela' no widget
    * caso for desativado, será exibido 3 notícias da novela
    * @type {Boolean}
    */
  var resumoWidgetNovela = true;
  /**
    * retorno da agenda do time
    * @type {string}
    */
  var agendaTime;
  /**
    * retorno do resumo da novela
    * @type {string}
    */
  var resumoNovela;
  /**
    * 'widget novelas'
    * indicador se template é de notícias ou capítulos da novela
    * @type {boolean}
    */
  var templateCapitulos = false;
  /**
    * dados da escolha do item
    * obs: utilizada para apoio no widget novela e widget futebol
    * @type {string}
    */
  var dadosModulo = {};
  /**
    * retorno da api
    * @type {object}
    */
  var _response = {};
  /**
    * Faz o request no monte carlo
    * @param {String} moduleName Nome do módulo
    * @param {String} subject Nome da novela, time ou signo em lowercase e sem acentuação
    * @param {String} tags para buscar no monte carlo
    * @param {String} name Nome da novela, time ou signo capitalized e com acentuação
    * @param {String} href link usado no widget de novelas "leia os resumos da nvela"
    * @param {Boolean} isAutomaticRequest flag para indicar se o request é automático (via scroll) ou manual (via click)
    */
  function request(moduleName, subject, tags, name, template, ticket, href, isAutomaticRequest) {
    // define como carregando
    widgetModules[moduleName].$el.find('.widget-horizontal-base').addClass('loading');
    // para o widget de horoscopo não é necessário bater no monte carlo
    if(moduleName === 'horoscopo'){
      //armazena o novo valor no localStorage ou cookie
      storeItem(moduleName, subject);
      widgetHoroscopo(subject, tags, name);
      //Reinicializa seeLater
      window.seeLater && window.seeLater.update();
      return;
    }
    //se não encontrar as tags não faz nada
    if(!tags){
      return;
    }
    if(tags.indexOf('[') > -1){
      tags = tags.split('[')[1].split(']')[0];
    }
    var url = 'https://taghome.uol.com/?'; // serviço do monte carlo
    var requestParams = $.extend({}, _requestParams);
    requestParams.jsonp = 'homeUOL.callbacks.widget' + moduleName.capitalize();
    // guarda os dados para serem acessados quando chegar a resposta do monte carlo
    requestData[moduleName].module = moduleName;
    requestData[moduleName].name = name;
    requestData[moduleName].sigla = subject;
    requestData[moduleName].href = href;
    // seta as tags
    requestParams['tags-id'] = tags;
    // Adiciona id e repository na busca do monte carlo para a feature 'Ver Depois'.
    requestParams.fields += ',id,repository';
    // widget novelas
    // template definido pelo editor
    // se template for 'capitulos', busca somente resumo da novela
    if( moduleName == 'novela' ) {
      var $item = widgetModules[moduleName].$el.find('[data-widget-subject="'+name+'"]');
      var tagsResumo = $item.data('tags-resumo');
      if(tagsResumo && tagsResumo.indexOf('[') > -1){
        tagsResumo = tagsResumo.split('[')[1].split(']')[0];
      }
      // variável de apoio para capítulo da novela
      dadosModulo.href = href.replace('index.htm','');
      dadosModulo.tagsResumo = tagsResumo;
      dadosModulo.tags = tags;
      dadosModulo.name = name;
      if( template == 'capitulos' && tagsResumo.length ) {
        requestParams.size = 20;
        requestParams.repository = 'card';
        requestParams['tags-id'] = dadosModulo.tagsResumo; // tag 60292: capítulo do dia
        requestParams.fields += ',descricao';
        templateCapitulos = true;
      } else {
        templateCapitulos = false;
      }
    }
    // widget futebol
    // link para compra de ingresso
    if( moduleName == 'futebol' ) {
      dadosModulo.ticket = ticket;
    }
    // preenche a query string na url do monte carlo
    $.each(requestParams, function(property, value){
      url += property+'='+value+'&';
    });
    // faz a requisição no serviço
    $.ajax({
        url: url,
        dataType: 'script',
        cache: true,
        timeout: TIMEOUT_TIME
    }).fail(function failWidgetRequest() {
      // seta a variavel de controle do serviço para false,
      // se o usuário clicar em algum time ou novela,
      // ele será redirecionado para a página do time ou novela
      serviceAvaliable = false;
      widgetModules[moduleName].$el.find('.widget-horizontal-base').removeClass('loading');
      if(moduleName !== 'horoscopo' && isAutomaticRequest === false){
        location.href = requestData[moduleName].urlPlanoB + normalizeString(subject);
      }
    });
    // caso o request foi manual (via click)
    // armazena escolha no storage ou cookie
    if(!isAutomaticRequest) {
      storeItem(moduleName, subject);
    }
  }
  /**
    * No retorno do monte carlo, faz tratamento dos capitulos
    * recebidos e rendezina módulo de novelas
    * @param {Int} quantidade de capítulos para retornar
    * @param {Object} retorno dos dados do monte carlo
    */
  function moduleCallback(response, qtd, module) {
    return function(capitulos) {
      // script em 'widget-novela.js'
      widgetNovela(qtd, module, capitulos, function(resumoNovela) {
        if( resumoNovela.length !== 0 ) {
          resumoNovela[0].index = 2;
          resumoNovela[0].indexPlus = 3;
        } else {
          resumoNovela = false;
        }
        _response.resumo = resumoNovela;
        callback(response, 'novela');
      });
    };
  }
  function createModuleCallback(module) {
    return function(response) {
      callback(response, module);
      //Reinicializa seeLater
      window.seeLater && window.seeLater.update();
    };
  }
  /**
  * callback do widget de futebol
    * @param {JSON} response Resposta do monte carlo
    */
  homeUOL.register('callbackWidgetFutebol', createModuleCallback('futebol'));
  /**
  * callback do widget de novela
  * @param {JSON} response Resposta do monte carlo
  */
  homeUOL.register('callbackWidgetNovela', createModuleCallback('novela'));
  /**
  * function chamada pelos callback's de novela e futebol
    * @param {JSON} response Resposta do monte carlo
    * @param {String} nome do widget 'futebol' ou 'novela'
    */
  function callback(response, name) {
    // 'widget futebol'
    // faz requisição da agenda do time
    if(name === 'futebol' && placarWidgetFutebol === true && _response.agenda === undefined ) {
      // define link para compra de ingresso
      dadosModulo.ticket = dadosModulo.ticket ? dadosModulo.ticket : undefined;
      // todo: melhorar aqui
      if( !parseInt(storage.getCookie('meuTime')) ) {
      //if( !getStoredItem('futebol') === null ) {
        //armazena o novo valor no cookie
        storeItem('futebol', requestData[name].sigla);
      }
      // requisição da agenda 'widget-futebol.js'
      widgetFutebol(function(agendaTime) {
        _response.agenda = agendaTime;
        callback(response, 'futebol');
      });
      return;
    }
    // 'widget novela'
    if(name === 'novela' && resumoWidgetNovela === true && _response.resumo === undefined ) {
      if( templateCapitulos ) {
        // template: 3 capítulos
        widgetNovela(3, dadosModulo, response, function(resumoNovela) {
          if( resumoNovela.length >= 3 ) {
            // renderiza módulo com capítulos
            _response.resumo = resumoNovela;
            _response.docs = false;
            callback(false, 'novela');
          } else {
            // falhou: não tem o mínimo de capítulos cadastrados
            // altera template do item para 'notícias'
            var module = $('div.mod-horizontal.module-widget-horizontal.area-entretenimento.module');
            var item = module.find('[data-widget-subject="'+dadosModulo.name+'"]');
            item.attr('data-template', 'noticias');
            // renderiza módulo com notícias
            requestRenderModule(module, 'novela', dadosModulo.name);
          }
        });
        return;
      } else {
        // template: 2 notícias + 1 capítulo
        // função de retorno
        homeUOL.register('callbackWidgetCapituloNovela', moduleCallback(response, 1, dadosModulo));
        // request no monte carlo dos capítulos da novela
        var url = 'https://taghome.uol.com/?'; // serviço do monte carlo
        var requestParams = $.extend({}, _requestParams);
        requestParams.size = 20;
        requestParams.repository = 'card';
        requestParams['tags-id'] = dadosModulo.tagsResumo; // tag 60292: capítulo do dia
        requestParams.fields += ',descricao';
        requestParams.jsonp = 'homeUOL.callbacks.widgetCapituloNovela';
        // preenche a query string na url do monte carlo
        $.each(requestParams, function(property, value) {
          url += property+'='+value+'&';
        });
        // faz a requisição no serviço
        $.ajax({
            url: url,
            dataType: 'script',
            cache: true,
            timeout: TIMEOUT_TIME
        });
        return;
      }
    }
    if( response ) {
      var items = response.docs,
        max = items.length,
        index = 0;
      while(index < max) {
        if(!items[index]){
          break;
        }
        if(homelinks(items[index]['url-uol']) !== undefined) {
          items.splice(index, 1); // remove o item já chamado
          continue;
        }
        items[index].index = index;
        items[index].indexPlus = index + 1;
        var imagem = items[index].imagem;
        if(imagem){
          // pega o crop de 80x80 da imagem
          items[index].imagem = imagem.replace(/\d{2,4}x\d{2,4}\.(jpg|jpeg|png|gif)$/, '80x80.$1');
        }
        index += 1;
      }
      _response.docs = items.slice(0, (name === 'futebol' && placarWidgetFutebol === true && _response.agenda !== false) || (name === 'novela' && resumoWidgetNovela === true && _response.resumo !== false) ? 2 : 3);
    }
    // dispara o evento do widget
    homeUOL.pub('horizontal-widget-'+name, [{
      message: requestData[name].name,
      sigla: requestData[name].sigla,
      response: _response,
      href: requestData[name].href,
      ticket: dadosModulo.ticket,
    }]);
    _response.agenda = undefined;
    _response.resumo = undefined;
    dadosModulo.href = undefined;
    dadosModulo.tags = undefined;
    dadosModulo.name = undefined;
    dadosModulo.ticket = undefined;
  }
  /**
  * adiciona o evento de click no botão de trocar de time, novela, signo e nos itens do widget
    * @param {jQuery Element} module elemento do wdiget
    * @param {String} moduleName nome do módulo 'novela', 'futebol', 'horoscopo'
    * @param {String} templateMarkup string do template
    */
  function addEvents(module, moduleName, templateMarkup){
    // ao clicar para trocar de time, signo ou novela
    module.on('click', '.widget-horizontal-switch-change', function(event){
      event.preventDefault();
      event.stopPropagation();
      // registra o hit
      // deve ser executado antes do render
      hit(moduleName, null, this);
      // renderiza o módulo sem nenhum json para exibir a lista de opções
      render({
        moduleName: moduleName,
        module: module,
        templateMarkup: templateMarkup
      });
      // remove o valor armazenado
      removeStoredItem(moduleName);
      //fecha janela seeLater quando muda o signo
      window.seeLater && window.seeLater.clear();
    });
    // ao clicar em algum time, signo ou novela
    module.on('click', '.widget-horizontal-item-click', function(event){
      event.preventDefault();
      event.stopPropagation();
      var $item = $(this),
        subject = $item.attr('data-widget-subject');
      // registra o hit
      // deve ser executado antes do render
      hit(moduleName, subject, this);
      if(['horoscopo', 'futebol'].indexOf(moduleName) !== -1) {
        tailtargetreport('tt-horoscopo-futebol', moduleName, subject);
      }
      // se o serviço estiver off, vai para a página do time ou novela imediatamente
      if(serviceAvaliable === false && moduleName !== 'horoscopo'){
        var s = normalizeString(subject);
        location.href = requestData[moduleName].urlPlanoB + s;
      } else {
        var isAutomaticRequest = false;
        // manda para a página de horóscopo, se houver problemas em obter a previsão
        if(moduleName === 'horoscopo' && $item.attr('data-widget-message') === 'off'){
          location.href = $item.attr('href');
        }
        // faz o request no serviço
        request(moduleName, subject, $item.attr('data-tags'), $item.attr('data-name'), $item.attr('data-template'), $item.attr('data-ticket'), $item.attr('href'), isAutomaticRequest);
      }
      window.seeLater && window.seeLater.clear();
    });
  }
  function hit(moduleName, value, el) {
    var $el = $(el).closest('.module-widget-horizontal');
    var mod = $el.data('metrics');
    // recuperando índice do item
    var parentList = $(el).closest(".widget-horizontal-fixed-content");
    var index = "";
    if($(el).hasClass('widget-horizontal-item-click') && parentList){
      var i = parentList.find('.widget-horizontal-item-click').index(el);
      index = "-" + (i+1);
    }
    // GA
    var action = false,
        category = false,
        area = false,
        label = false,
        position = false;
    action = 'clique';
    area = mod.replace(/(mod.*)(;)(.*)/,'$3');
    // category = 'bloco-customizado-' + mod.replace(/(mod-)(\d*)(;.*)/,'$2');
    category = 'bloco-customizado-' + area;
    position = 'item' + index;
    if (value == null) {
      label = 'mudar-item-selecionado';
      position = 'titulo';
    }
    if (value != null) {
      label = 'selecionar-' + value;
    }
    metricsGA({
      'action': action,
      'category': category,
      'area': area,
      'label': label,
      'position': position
    });
  }
  /**
  * remove os eventos adicionados no módulo
    * @param {jQuery Element} module elemento do wdiget
    */
  function removeEvents(module){
    return module.off();
  }
  /**
  * renderiza um widget
    * @param {String} moduleName nome do módulo 'novela', 'futebol', 'horoscopo'
    * @param {jQuery Element} module elemento do wdiget
    * @param {String} templateMarkup string do template
    * @param {JSON} json contendo as chamadas do widget
    */
  function render(obj){
    var moduleName = obj.moduleName;
    var module = obj.module;
    var templateMarkup = obj.templateMarkup;
    var json = obj.json;
    if(!json || !json.response){
      json = {
        'message': module.attr('data-text'),
        'name': module.attr('data-text')
      };
    } else {
      // link da novela, time ou signo
      var pageLink, timeUrl;
      switch(moduleName){
        case 'horoscopo':
          pageLink = 'http://universa.uol.com.br/horoscopo/'+json.href+'/horoscopo-do-dia/';
        break;
        case 'futebol':
          json.sigla = json.sigla.replace(/parana-clube/,'parana')
          pageLink = 'http://esporte.uol.com.br/futebol/times/'+json.sigla+'/';
        break;
        case 'novela':
          pageLink = json.href;
        break;
      }
      json.pageLink = pageLink;
    }
    // remove os eventos do módulo e renderiza-o
    removeEvents(module).html( Mustache.render(templateMarkup, json));
    //Reinicializa seeLater
    window.seeLater && window.seeLater.update();
    // registra evento lazyload
    echo.addImages(module);
    // adiciona os eventos novamente
    addEvents(module, moduleName, templateMarkup);
    // adiciona clickuol nos links
    clickuol(module, true);
    GA(module, true);
  }
  /**
  * retorna o nome do widget utilizado no localStorage
    * @param {String} moduleName nome do módulo 'novela', 'futebol', 'horoscopo'
    * @return {String}
    */
  function getWidgetStoreName(moduleName){
    var stringStorage;
    switch(moduleName){
      case 'horoscopo':
        stringStorage = 'widgetHoroscopo';
      break;
      case 'futebol':
        stringStorage = 'widgetTimeFutebol';
      break;
      case 'novela':
        stringStorage = 'widgetNovela';
      break;
    }
    return stringStorage;
  }
  /**
  * Retorna o valor do widget armazenado no localStorage
    * @param {String} moduleName nome do módulo 'novela', 'futebol', 'horoscopo'
    * @return {String}
    */
  function getStoredItem(moduleName) {
    if(moduleName === 'futebol') {
      var meuTime = parseInt(storage.getCookie('meuTime'));
      var meuTimeNome = widgetFutebol.getTimeById(meuTime);
      if(!storage.getItem('_tt_futebol') && meuTimeNome) {
        tailtargetreport('tt-horoscopo-futebol', 'futebol', meuTimeNome);
      }
      return meuTime;
    } else if(moduleName === 'horoscopo') {
      var stringStorage = getWidgetStoreName(moduleName);
      var signoNome = storage.getCookie('meuSigno');
      if (!signoNome) {
        signoNome = storage.getItem(stringStorage);
        if(signoNome){
          storeItem(moduleName, signoNome);
        }
      }
      storage.removeItem(stringStorage);
      if(!storage.getItem('_tt_horoscopo') && signoNome) {
        tailtargetreport('tt-horoscopo-futebol', 'horoscopo', signoNome);
      }
      return signoNome;
    } else {
      var itemValue = storage.getItem(getWidgetStoreName(moduleName));
      return itemValue;
    }
  }
  /**
  * Armazena um time, novela ou signo no localStorage
    * @param {String} moduleName nome do módulo 'novela', 'futebol', 'horoscopo'
    * @param {String} item nome do signo, time ou novela
    */
  function storeItem(moduleName, item){
    if(moduleName === 'futebol') {
      // o widget de esporte passou a ler o cookie meuTime que é definido na home de esporte
      storage.setCookie('meuTime', widgetFutebol.idTime[item], 1000, '.uol.com.br');
    } else if(moduleName === 'horoscopo') {
      storage.setCookie('meuSigno', item, 1000, '.uol.com.br');
    } else {
      storage.setItem(getWidgetStoreName(moduleName), item);
    }
  }
  /**
  * remove um item armazenado
    * @param {String} moduleName nome do módulo 'novela', 'futebol', 'horoscopo'
    */
  function removeStoredItem(moduleName){
    if(moduleName === 'futebol') {
      storage.removeCookie('meuTime', '.uol.com.br');
    } else if(moduleName === 'horoscopo') {
      storage.removeCookie('meuSigno', '.uol.com.br');
    } else {
      storage.removeItem(getWidgetStoreName(moduleName));
    }
  }
  /**
   * Rendezira módulo dependendo da escolha (usuário ou editor)
   *
   * @param {String} nome do módulo 'novela', 'futebol', 'horoscopo'
   * @param {String} item escolhido (pelo usuário ou editor)
   */
  function requestRenderModule(module, moduleName, storedItem) {
    // pega as tags e o nome do módulo
    var $item = module.find('[data-widget-subject="'+storedItem+'"]'),
      tags = $item.attr('data-tags'),
      name = $item.attr('data-name'),
      template = $item.attr('data-template'),
      ticket = $item.attr('data-ticket');
    // se não encontrar o item escolhido pelo usuário, remove
    // a definição, pois a novela acabou, o time caiu, etc...
    if($item.size() === 0) {
      removeStoredItem(moduleName);
      return;
    }
    // se encontrou, faz o request
    if((storedItem && tags && name) || moduleName === 'horoscopo'){
      module.lazyany(function() {
        // link usado no widget de novelas "leia os resumos da nvela"
        var href = module.find('[data-widget-subject="'+name+'"]').attr('href'),
          automaticRequest = true;
        request(moduleName, storedItem, tags, name, template, ticket, href, automaticRequest);
      });
    }
  }
  return function(module, templateContainer, templateMarkup) {
    var moduleName = module.attr('data-target'), //nome do módulo 'novela', 'futebol', 'horoscopo'
      storedItem; // valor que pode estar armazenado para o widget
    // cacheia o DOM do modulo
    widgetModules[moduleName] = {
      $el: module,
      $ct: templateContainer,
      tpl: templateMarkup
    };
    // renderiza o markup do módulo
    render({
      moduleName: moduleName,
      module: module,
      templateMarkup: templateMarkup
    });
    // listener do evento que é disparado quando chega o json do módulo
    homeUOL.on('horizontal-widget-'+moduleName, function(event, json){
      // Renderiza o markup do módulo
      render({
        moduleName: moduleName,
        module: module,
        templateMarkup: templateMarkup,
        json: json
      });
    });
    // pega valor do widget armazenado no localStorage
    storedItem = getStoredItem(moduleName);
    // se for widget de futebol faz o de => para (para pegar o nome do time)
    if(moduleName === 'futebol'){
      storedItem = widgetFutebol.getTimeById(storedItem);
    }
    if(storedItem) {
      // rendezira módulo com escolha do usuário
      requestRenderModule(module, moduleName, storedItem);
    }
  };
});
        /*! @source /camaleao/assets/web/javascript/modules/widget-tailtarget.js */
        homeUOL.register('widgetTailtarget', ['jquery','basepath', 'Mustache', 'clickuol', 'ga'], function widgetFutebol($, basepath, Mustache, clickuol, GA) {
  'use strict';
  /**
   * Serviço de notícias por tag (tailtarget)
   */
  var servico = basepath('/camaleao/api/tt-widget-noticias.json?' + (window.cacheId || 'v1.0'));
  /**
   * ID de interesses e clusters x tags do monteCarlo
   */
  var tagInterests = {
    "educacao": {
      "interest" : "55",
      "tag" : "16614",
      "chapeu" : "Educação"
    },
    "carros": {
      "interest" : "CA6824",
      "tag" : "13014",
      "chapeu" : "Carros"
    },
    "tecnologia": {
      "interest" : "CA7239",
      "tag" : "13703",
      "chapeu" : "Tecnologia"
    },
    "economia": {
      "interest" : "CA7248",
      "tag" : "22373",
      "chapeu" : "Economia"
    },
    "ciencia-e-saude": {
      "interest" : "13",
      "tag" : "76752",
      "chapeu" : "Ciência e Saúde"
    }
  };
  /*
   * Guarda o módulo, container e markup
   */
  var $module, $container, markup;
  /*
   * Guarda os interesses do usuário e as tags por prioridade
   */
  var priority = [];
  var userInterest = [];
  var exceptTags = [];
  var intLabels = {};
  var tagLabels = [];
  for(var item in tagInterests){
    if(tagInterests.hasOwnProperty(item)){
      var interest = tagInterests[item].interest;
      var tagId = tagInterests[item].tag;
      // guarda as prioridades existentes
      priority.push(tagId);
      // guarda label das tags para métricas
      tagLabels.push(item);
      // guarda objeto com dados da tag
      intLabels[tagId] = tagInterests[item];
      if( TTUser && TTUser.hasInterest(interest) == true ) {
        userInterest.push(tagId);
      } else {
        exceptTags.push(tagId);
      }
    }
  }
  /*
   * Constante de itens a serem exibidos
   */
  var widgetItems = 3;
  /*
   * Constante de caracteres a serm visíveis nos títulos
   */
  var limitChars = 70;
  /*
   * Array de itens para não enviar repetidos (blacklist)
   */
	var newsBl = []
  /*
   * Procura notícias dentro do interesse do usuário
   */
  var interestedNews = function(docs){
    // procura uma chamada da tag informada dentro das notícias retornadas pelo serviço
    var findNews = function(tag){
      return docs[tag] && docs[tag].length && docs[tag].shift();
    }
    // controla de qual tag a notícia deve vir
    var findInArr = function(arr){
      // enquanto não preencherem todas as notícias do módulo e ainda existam tags a procurar
      while(news.length < widgetItems && arr.length){
        //procura em todas as tags do array
        for(var i = 0; i < arr.length; i++){
          //sai do loop ao completar a quantidade de itens a serem exibidos
          if(news.length >= widgetItems){
            break;
          }
          var tag = arr[i];
					var headline = findNews(tag);
					//verifica se o item esta na blacklist para não enviar repetido
					var blacklistVerify = function() {
						if(headline && newsBl.indexOf(headline.id) !== -1){
							headline = findNews(tag);
							blacklistVerify()
						}
					}
					blacklistVerify()
          //se encontrar uma notícia, adiciona-a ao módulo
          if(headline){
            //adiciona posição zero-indexed e normal dentro da notícia
            headline.index = news.length;
            headline.indexPlus = headline.index + 1;
            headline.tagLabel = tagLabels[priority.indexOf(tag)];
            headline.chapeu = intLabels[tag].chapeu || "";
            headline.hasInterest = false;
            // indica se o usuário tem interesse na tag desta notícias
            if(userInterest.indexOf(tag)!= -1){
              headline.hasInterest = true;
            }
            if (headline.titulo.length > limitChars && headline.imagem) {
              headline.titulo = headline.titulo.slice(0, limitChars - 1 ) + '…';
            }
            //adiciona chamada ao array de notícias
            news.push(headline);
            //adiciona chamada ao array de blacklist
            newsBl.push(headline.id);
          } else {
            //se não houverem mais notícias, remove tag do array
            arr.splice(i, 1);
            i--;
          }
        }
      }
    }
    // primeiro procura notícias em todas as tags que o usuário tiver interesse, depois nas demais, de acordo com a prioridade
    var orderToLook = [userInterest, exceptTags];
    //console.log(userInterest, exceptTags);
    var news = [];
    for(var arr in orderToLook){
      if( news.length === widgetItems ){
        break;
      }
      findInArr(orderToLook[arr]);
    }
    //retorna as notícias
    return news;
  }
  /*
   * Monta o módulo com as notícias
   */
  var buildModuleTT = function(news){
    if(!news || news.length < widgetItems){
      $module.slideUp('fast');
      return false;
    }
    $module.find('.wait').removeClass('wait');
    $container.html( Mustache.render(markup, {
      chamadas: news
    }));
    // adiciona clickuol nos links
    clickuol($module, false);
    GA($module, false);
    //conta clique da omniture antes de abrir o link
    $module.find('a').on('click', function(evt){
      evt.preventDefault();
      var href = $(this).attr('href');
      var ref = href.replace(/.*rf=homec-([^&]*)&.*/,"$1");
      hit(ref, this);
      window.location.href = href;
    });
    //remove loading
    $module.removeClass('loading');
    //Reinicializa seeLater
    window.seeLater && window.seeLater.update();
  }
  /*
   * Função para registro de métricas
   */
  function hit(ref, el) {
    var $el = $(el).closest('.module-widget-horizontal');
    var mod = $el.data('metrics');
    var value = $(el).data('tag') || [];
    // metrics({
    //   ref    : ref,
    //   action : 'clique',
    //   mod    : mod,
    //   abTest: value
    // });
  }
  /*
   * Inicia o módulo de tailtarget
   */
  var fnTT = function(elem,div,template) {
    $module = elem;
    $container = div;
    markup = template;
    // muda constantes de acordo com o template do módulo
    if($module.hasClass("softnews-container")){
      widgetItems = 4;
      limitChars = 75;
    }
    //se houver o módulo na página
    if($module.length){
      //carrega por lazyload
      $module.lazyany(function() {
        // faz a requisição no serviço
        $.ajax({
          url: servico,
          dataType: 'json',
          success : function(result){
            buildModuleTT( interestedNews(result) );
          },
          error : function() {
            buildModuleTT();
          }
        });
      });
    }
  };
  return fnTT;
});
        /*! @source /camaleao/assets/web/javascript/modules/guia-uol.js */
        /**
 * Faz as setinhas do módulo do guia uol na coluna auxiliar funcionar
 */
homeUOL.register('guiaUOL', [
  'jquery',
  'Mustache',
  'clickuol',
  'homelinks'
], function($, Mustache, clickuol, homelinks) {
  // Production steps of ECMA-262, Edition 5, 15.4.4.14
  // Reference: http://es5.github.io/#x15.4.4.14
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
      var k;
      // 1. Let O be the result of calling ToObject passing
      //    the this value as the argument.
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      var O = Object(this);
      // 2. Let lenValue be the result of calling the Get
      //    internal method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;
      // 4. If len is 0, return -1.
      if (len === 0) {
        return -1;
      }
      // 5. If argument fromIndex was passed let n be
      //    ToInteger(fromIndex); else let n be 0.
      var n = +fromIndex || 0;
      if (Math.abs(n) === Infinity) {
        n = 0;
      }
      // 6. If n >= len, return -1.
      if (n >= len) {
        return -1;
      }
      // 7. If n >= 0, then Let k be n.
      // 8. Else, n<0, Let k be len - abs(n).
      //    If k is less than 0, then let k be 0.
      k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      // 9. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the
        //    HasProperty internal method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        //    i.  Let elementK be the result of calling the Get
        //        internal method of O with the argument ToString(k).
        //   ii.  Let same be the result of applying the
        //        Strict Equality Comparison Algorithm to
        //        searchElement and elementK.
        //  iii.  If same is true, return k.
        if (k in O && O[k] === searchElement) {
          return k;
        }
        k++;
      }
      return -1;
    };
  }
  var states = {
    SP: 59659,  // são paulo
    RJ: 59660, // rio de janeiro
    MG: 59661, // belo horizonte
    DF: 59662, // brasilia
    PR: 59663 //curitiba
  },
  cities = {
    SP: 'sao-paulo',  // são paulo
    RJ: 'rio-de-janeiro', // rio de janeiro
    MG: 'belo-horizonte', // belo horizonte
    DF: 'brasilia', // brasilia
    PR: 'curitiba' //curitiba
  },
  cachedData = {}, // faz cache dos requests feitos para não serem feitos novamente
  activeState = null, // estado geolocalizado
  guiaModule = null, // modulo do guia uol
  guiaModuleContainer = null, // container do template
  guiaModuleTemplate = null; // string do template
  // registra o callback do monte carlo
  homeUOL.register('callbackGuiaUOL', callbackGuiaUOL);
  /**
  * faz a requisição no monte carlo
  * @param state {String} estado selecionado via geoip ou clicando nas setinhas
  */
  function request(state){
    // monta a query string
    var parameters = {
      format: 'jsonp',
      jsonp: 'homeUOL.callbacks.guiaUOL',
      repository: 'mix1',
      charset: 'utf-8',
      size: '5',
      sort: 'created:desc',
      'conteudo-adulto': 'false',
      platform: 'web',
      headline: states[state]+'-prioridade1',
      fields: 'url-uol,imagem,imagem-credito,titulo'
    },
    p = '';
    for (var prop in parameters) {
      if (parameters.hasOwnProperty(prop)) {
        p+= prop+'='+parameters[prop]+'&';
      }
    }
    p = p.substring(0, p.length - 1); // remove o último '&'
    guiaModule.addClass('loading');
    // faz o request do jsonp
    $.ajax({
      url: 'https://taghome.uol.com/?'+p,
      dataType: 'script',
      cache: true
    });
  }
  /**
  * aplica o evento de click nas setinhas
  * @param modole {jQuery Object} container do módulo
  */
  function changeCity(module){
    /**
    * Ao clicar nas setinhas
    * @param event {jQuery Event}
    */
    module.find('.caroussel-prev,.caroussel-next').click(function(event){
      var $itensNav = module.find('.city-picker li'), // itens com os nomes da cidade entre as setinhas
        $target = $(event.target), // setinha que foi clicada
        $activeItem = $itensNav.filter('.active').removeClass('active'), // cidade ativa na lista de cidades
        $nextItem, // próximo item que será ativado
        direction, // direção do clique
        fn; // função jQuery que será chamada caso não exista cidade antes ou depois da cidade atual
      if($target.hasClass('caroussel-prev')){
        direcion = 'prev';
        fn = 'last';
      } else if($target.hasClass('caroussel-next')){
        direcion = 'next';
        fn = 'first';
      }
      // tenta pegar a cidade que vem antes ou depois
      $nextItem = $activeItem[direcion]();
      // se encontrar
      if($nextItem.length){
        $activeItem = $nextItem.addClass('active'); // exibe a cidade
      } else {
        $activeItem = $itensNav[fn]().addClass('active'); //se não encontrar, exibe a primeira ou a última
      }
      activeState = $activeItem.attr('data-state');
      cachedValue = cachedData[activeState];
      if(cachedValue){
        callbackGuiaUOL(cachedValue);
      } else {
        request(activeState);
      }
    });
  }
  /**
  * renderiza o markup
  * @param json {JSON} conteúdo que veio do monte carlo
  */
  function render(json){
    json.city = cities[activeState]; // cidade selecionada pelo estado
    guiaModuleContainer.html(Mustache.render(guiaModuleTemplate, json)); // renderiza o template
    guiaModule.find('.city-picker li').removeClass('active').filter('[data-state="'+activeState+'"]').addClass('active'); // exibe o nome da cidade ativa
    clickuol(guiaModuleContainer, true); // adiciona clickuol
  }
  /**
   * Remove do Array de resposta do taghome as chamadas que já estão sendo
   * usadas editorialmente.
   * @param {Array} docs
   * @return {Array}
   */
  function removeUsedLinks(docs) {
    var arr = [];
    var i = docs.length;
    while( i-- ) {
      if(homelinks(docs[i]['url-uol']) === undefined) {
        // só adiciona no array de retorno os links que não constam na home
        arr.push(docs[i]);
      }
    }
    if(arr.length === 0) {
      // se por algum motivo, todos os links estão sendo usados,
      // retorna o array original e as matérias se repetirão.
      return docs;
    }
    return arr;
  }
  /**
  * callback do monte carlo
  * @param data {Object} conteúdo que veio do monte carlo
  */
  function callbackGuiaUOL(data){
    var doc;
    if(!data.cached) {
      // remove itens que já estão sendo chamados na home
      data.docs = removeUsedLinks(data.docs);
      var min = 0;
      var max = data.docs.length-1;
      // pega um índice aleatório
      doc = data.docs[Math.floor(Math.random() * (max - min + 1)) + min];
      doc.imagem = doc.imagem.replace(/\d+x\d+\.jpg$/, '300x200.jpg');
      doc.cached = true;
      // cacheia
      cachedData[activeState] = doc;
    } else {
      doc = data;
    }
    guiaModule.removeClass('loading');
    // renderiza o conteúdo slecionado
    render(doc);
  }
  /**
  * listener no evento de geolocalização via IP
  * @param event {jQuery Event} evento jquery
  * @param data {Object} geolocalização
  */
  homeUOL.on('geoloc', function(event, data){
    // se veio tudo ok
    if(data && data.state){
      // pega o estado
      activeState = data.state;
      // se não for um dos estados pré definidos, seta o RJ como padrão
      if(['SP', 'RJ', 'MG', 'DF','PR'].indexOf(activeState) === -1){
        activeState = 'RJ';
      }
      // faz o request passando o estado
      setTimeout(function(){
        if(guiaModule){
          guiaModule.lazyany(function() {
            request(activeState);
          });
        }
      }, 0);
    }
  });
  /**
   * @param module {jQuery Object} módulo do guia uol
   * @param templateContainer {jQuery Object} container onde vai ser renderizado o template
   * @param templateMarkup {String} template que será compilado
   */
  return function(module, templateContainer, templateMarkup) {
    // guarda as variáveis do módulo para serem usadas quando o request for feito
    guiaModule = module,
    guiaModuleContainer = templateContainer,
    guiaModuleTemplate = templateMarkup;
    // aplica o evento de clique nas setinhas
    changeCity(guiaModule);
  };
});
        /*! @source /camaleao/assets/web/javascript/modules/widget-profile.js */
        homeUOL.register('widgetProfile', ['jquery'], function($) {
  /**
   * Função para carregar widget de Notificações na home
   */
  function initNotificacao() {
    if (window.serviceStatus && serviceStatus.hasOwnProperty('widgetProfile') && serviceStatus['widgetProfile'] === true ) {
      var params = location.search;
      var params = params?JSON.parse('{"' + params.replace(/([&?][^&\=]*)=?(?=&|\=&|$|\=$)/g,'$1=true').replace(/\?/g,'').replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }):{};
      var widgetSource = 'https://jsuol.com.br/p/perfil/js/';
      if (params.hasOwnProperty('widgetDev')) {
        if (params.widgetDev === 'true') {
          widgetSource += 'widgetNotify.reload.20161109.js​';
        } else {
          widgetSource += params.widgetDev;
        }
      } else {
        widgetSource += 'widgetNotify.v3.js'
      }
      var callbackProfile = function(data, str) {
        var $els = {
          sac: document.querySelector('.link-sac'),
          notificacao: document.querySelector('.bar-notification'),
          profile: document.getElementById('profile-avatar')
        };
        // preview
        if ($els.profile == null && $els.sac == null) {
          return true;
        }
        if ($els.profile)
          $els.profile.style.display = 'none';
        if ($els.sac)
          $els.sac.className = $els.sac.className.replace(/ show/g, '');
        if(data){
          setTimeout(function () {
            if($els.sac && data.auth.isLogged !== true){
              $els.sac.className += ' show';
            }
            if($els.profile)
              $els.profile.style.display = 'block';
            if($els.notificacao && !$els.notificacao.className.match(/ show/))
              $els.notificacao.className += ' show';
          }, 1);
          window.updateNotification && updateNotification(data);
        }
        // exibe os ícones de 'Ver depois' que aguardavam a Lib ser carregada
        window.seeLater && window.seeLater.update();
      }
      $.ajax({
        "url" : widgetSource,
        "dataType": "script",
        "type" : "get",
        "cache" : "true",
        "success" : function( data, textStatus, jqxhr ) {
          if (UOL && UOL.hasOwnProperty('perfil') && UOL.perfil.hasOwnProperty('widgets') && UOL.perfil.widgets.hasOwnProperty('Notify') && typeof UOL.perfil.widgets.Notify === "function") {
            window.widgetProfile = UOL.perfil.widgets.Notify({
              avatarSize: 'full',
              responsive: false,
              target: 'profile-avatar',
              callbacks: {
                onInit: function(data){
                  callbackProfile(data, 'init');
                  // Se tiver parâmetro debug e não tiver editorialProd, carrega objeto do mock
                  if(window.location.search.match(/mock=seeLater/) && window.SeeLaterLib){
                     window.widgetProfile.SeeLater = window.SeeLaterLib;
                  }
                },
                onLogin: function (data){
                  callbackProfile(data, 'login')
                },
                onLogout: function (data){
                  callbackProfile(data, 'logout')
                }
              },
              linkCheckout: {
               sg: "2668383698",
               sa: "uolhome"
              }
            });
          }
        }
      });
    }
  }
  return initNotificacao
});
        /*! @source /camaleao/assets/web/javascript/modules/placar-carnaval.js */
        homeUOL.register('placar-carnaval', ['jquery', 'usocket'], function($, usocket) {
  "use strict";
  var cidade = 'rj';
  var exibe_notas = true;
  var fim_placar = false;
  var usocketConfig = {
    'domain': 'rtevent.uol.com',
    'forcePolling': false,
    'pollingDelay': 1000
  };
  var IS_DEBUG = /debug=true/.test(location.search);
  var log = IS_DEBUG === true ? function() {
    var now = new Date(), hora = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    console.log.apply ?
      console.log.apply(console, [hora].concat(Array.prototype.slice.call(arguments, 0))) : console.dir(arguments);
  } : function() {  };
  var lastModified;
  var callbackQueue = [];
  //window.queue = callbackQueue;
  // troca ponto por virgula
  function formataNota(n, isString) {
    n = n ? parseFloat(n) : '';
    n = typeof n == 'number' ? n : "-";
    n = n.toString();
    if(n == "-" || n == "null")
      return "-";
    if(n == "0.00" || !n)
      return "0";
    return n.replace(".", ",");
  }
  // inArray
  function ifInArrayRemove(arr, item) {
    var t = arr.length;
    while(t--) {
      if(arr[t] == item) {
        arr.splice(t, 1);
        return true
      }
    };
    return false;
  }
  // clona array (apenas um nível)
  function clonarArray(arr) {
    var n_arr = [];
    for(var a in arr) {
      n_arr.push(arr[a]);
    }
    return n_arr;
  }
  // retorna o índice onde a escola está no array
  function escolaInArray(arr, id) {
    var t = arr.length;
    while(t--) {
      if(arr[t].id == id) {
        return t;
      }
    }
    return -1;
  }
  function nextCallback() {
    callbackQueue.shift();
    var c = callbackQueue[0];
    log('removendo item da fila de callback');
    if(typeof c == 'object') {
      log('chamando próximo callback');
      homeUOL.placarCarnaval.callback();
    } else {
      log('sem mais callback');
    }
  }
  // transforma o array com informações da escola em um objeto
  function arrayToObject(arr) {
    var n_arr = [], t = arr.length, item;
    for(var i = 0; i < t; i++) {
      item = arr[i];
      n_arr.push({
        'id'        : item[0],
        'nome'      : item[1],
        'descartes' : item[2] || [],
        'notas'     : item[3],
        'quesito'   : item[4]
      });
    }
    return n_arr;
  }
  function connectWebservice() {
    log('conectando no webservice');
    var socketConnection = usocket.connect('carnaval-2018-home');
    // se a conexão websocket fechar
    socketConnection.on('error', function(err) {
      // estático
      log('errro!!!!');
      socketConnection.close();
      setTimeout(connectWebservice, 5000);
    });
    // quando receber um novo update
    socketConnection.on('message', function(data) {
      log('onmessage event', data);
      homeUOL.placarCarnaval.callback(data);
      //if(data.lastModified != lastModified) {
      //  lastModified = data.lastModified;
      //  log('modificado: ', lastModified);
      //  homeUOL.placarCarnaval.callback(data);
      //} else {
      //  log('json não modificado');
      //}
    });
  }
  var el_placar, originalClass, exibe_notas, websocket;
  var homeUOL = window.homeUOL = window.homeUOL || {};
  homeUOL.placarCarnaval = {
    "id_escola_atual": null,
    // primeira execução da página
    "first_run" : true,
    // tabela de classificação
    "classificacao" : null,
    // dom da tabela de notas
    "notas" : null,
    // lista de escolas com notas
    // guarda até 4 escolas
    "escolas" : [],
    // nome do quesito atual
    "quesito_atual": "",
    // indica se está no fim do quesito
    "fim_quesito" : false,
    // cacheia os elementos e inicia o comet
    "init" : function(d) {
      log('init placar');
      usocket.config(usocketConfig);
      el_placar = d.getElementById("placar-carnaval");
      originalClass = el_placar.className;
      exibe_notas = el_placar.getAttribute("data-notas") == "true" ? true : false;
      websocket = el_placar.getAttribute("data-websocket") == "true" ? true : false;
      // cacheia elementos
      this.classificacao = d.getElementById("classificacao");
      this.quesito       = d.getElementById("quesito");
      this.notas         = d.getElementById("notas");
      this.grade_notas   = d.getElementById("grade-notas");
      if(websocket === true) {
        connectWebservice();
      }
    },
    /*
    "requestStaticJson": function() {
      homeUOL.scripts.load({
        'url': 'https://jsuol.com.br/c/placar/carnaval/web/2014/json/home.js'
      });
      setTimeout(homeUOL.placarCarnaval.requestStaticJson, 5000);
    },
    */
    "callback" : function(json) {
      if(typeof json == 'object') {
        log('callback do request');
        callbackQueue.push(json);
        if(callbackQueue.length > 1) {
          // adicionado à fila
          log('adicionado à fila');
          return false;
        }
      }
      else {
        log('próximo');
        json = callbackQueue[0];
      }
      var self = this;
      fim_placar = json.ultimoQuesito;
      // escreve classificação
      this.escreveClassificacao(json.classificacao);
      // transforma o array de notas em objeto e cacheia
      // as novas informações
      var escolas_recebidas = arrayToObject(json.notas);
      log('escolas_recebidas ', escolas_recebidas.length);
      var fim_quesito = (function() {
        var t = escolas_recebidas.length, first_quesito = self.quesito_atual || escolas_recebidas[0].quesito;
        for(var i = 0; i < t-1; i++) {
          // compara a escola atual com a próxima, para verificar
          // se há mudança de quesito
          if( escolas_recebidas[i].quesito != escolas_recebidas[i+1].quesito ) {
            var proximo_quesito = escolas_recebidas[i+1].quesito;
            // verifica se a mudança do quesito está na última escola do array
            if(i+1 == t-1) {
              // remove a última escola
              escolas_recebidas.pop();
              return false;
            }
            // se for a penúltima escola
            else if( i+1 == t-2 ) {
              // remove as duas últimas escolas
              escolas_recebidas.pop();
              escolas_recebidas.pop();
              // adiciona o próximo quesito
              escolas_recebidas.push({
                'id': 'proximoquesito',
                'muda_quesito': true,
                'quesito': proximo_quesito
              });
              return true;
            }
            // se a escola que muda o quesito for a atual
            else if( i+1 == t-3 ) {
              // remove as tres últimas escolas
              escolas_recebidas.pop();
              escolas_recebidas.pop();
              escolas_recebidas.pop();
              // adiciona o próximo quesito
              escolas_recebidas.push({
                'id': 'proximoquesito',
                'muda_quesito': true,
                'quesito': proximo_quesito
              });
              return true;
            }
            // se a escola que muda o quesito for a primeira ou a segunda
            // indica que está no início de um novo quesito
            else if( i < 3 ) {
              var r = i;
              while( r-- > 1 ) {
                escolas_recebidas.shift();
              }
              break;
            }
          }
        }
        // remove a primeira e a última escola do array
        if(escolas_recebidas.length > 3) {
          if(fim_placar !== true) {
            escolas_recebidas.pop();
          } else if(fim_placar === true && escolas_recebidas.length > 5) {
            escolas_recebidas.pop();
          }
        }
        return false;
      }());
      // se passou para outro quesito
      if(this.fim_quesito == true && fim_quesito == false) {
        // remove todas as escolas anteriores
        this.escolas = [];
      }
      this.fim_quesito = fim_quesito;
      // concatena as novas escolas com as atuais
      this.concatenaEscolas(escolas_recebidas);
      // insere as novas escolas no markup
      if(exibe_notas == true) {
        this.quesito.innerHTML = this.quesito_atual || json.quesito;
        this.escreveNotasEscolas();
        el_placar.className = originalClass;
      }
      else {
        el_placar.className = originalClass + " sem-notas";
      }
      this.first_run = false;
    },
    "concatenaEscolas": function(escolas_recebidas) {
      // se não tem escola cadastrada
      if(this.escolas.length === 0) {
        //escolas_recebidas = escolas_recebidas.slice( (2 - escolas_recebidas.length) - 1 );
      }
      var escolas = this.escolas,
        t = escolas_recebidas.length,
        i = 0,
        ultimo_id = escolas.length ? escolas[escolas.length-1].id : '',
        pass = false,
        escola;
      while( i < t ) {
        escola = escolas_recebidas[i];
        // verifica se essa escola está no array anterior
        var id = escolaInArray(escolas, escola.id);
        if( id > -1 ) {
          // atualiza os dados da escola existente
          escolas[id] = escola;
          pass = true;
        }
        else {
          // adiciona apenas as escolas que estão depois das escolas
          // que já estão no array
          //log(pass+' == false && '+ultimo_id+' != "" && '+escola.id+' != ultimo_id', '\t-\t', pass == false && ultimo_id != "" && escola.id != ultimo_id);
          if(pass == false && ultimo_id != "" && escola.id != ultimo_id) {
            //log('i\t', escola.nome);
            i++;
            continue;
          }
          pass = true;
          this.escolas.push(escola);
        }
        i++;
      }
    },
    "escreveNotasEscolas" : function() {
      var nova_tabela = '<table>',
        escolas = this.escolas,
        tem_notas = false;
      for(var e in escolas) {
        var escola = escolas[e],
          dados  = this.montaNotasEscola(escola);
        nova_tabela += dados.html;
        dados.tem_notas && (tem_notas = true);
      }
      nova_tabela += '</table>';
      this.grade_notas.innerHTML = nova_tabela;
      this.notas = this.grade_notas.getElementsByTagName('table')[0];
      var t = escolas.length, i = 1, funcs = [];
      if(t > 3) {
        while(t > 3) {
          funcs.push(function() {
            if(escolas.length > 3) {
              homeUOL.placarCarnaval.aplicaEfeitoTroca(funcs);
            }
            escolas.shift();
          });
          t -= 1;
          i += 1;
        }
        var exec = funcs.shift();
        if(typeof exec == 'function') exec();
      }
      else {
        var indexTrAtual = tem_notas ? 1 : 0;
        if(fim_placar === true && escolas.length == 3) {
          indexTrAtual = 2;
        }
        var tr_atual = this.notas.getElementsByTagName('tr')[ indexTrAtual ];
        tr_atual.className = "atual";
        self.id_escola_atual = tr_atual.getAttribute('data-escola');
        nextCallback();
      }
    },
    "montaNotasEscola" : function(escola) {
      if(escola.muda_quesito) {
        return {
          'html'      : '<td class="proximo-quesito" colspan="'+(this.escolas[0].notas.length + 1)+'">Próximo quesito: ' + escola.quesito + '</td>',
          'tem_notas' : false
        };
      }
      var notas = escola.notas,
        descartes = clonarArray(escola.descartes),
        markup = '<td class="nome-escola escola">'+escola.nome+'</td>',
        tem_notas = false;
      for(var n in notas) {
        if( !isNaN(notas[n]) ) {
          var nota = notas[n],
            descarte = ifInArrayRemove(descartes, nota) && nota != null;
          nota && (tem_notas = true);
          markup += '<td class="pontos nota'+(descarte && ' nota-descartada' || '')+'"'+(descarte && ' title="Nota descartada"' || '')+'>'+formataNota(nota)+'</td>'
        }
      }
      return {
        'html'      : '<tr data-escola="'+escola.id+'">'+markup+'</tr>',
        'tem_notas' : tem_notas
      };
    },
    "aplicaEfeitoTroca" : function(next) {
      var self = this;
      var table = this.notas,
        $table = $(table),
        tbody = table.getElementsByTagName('tbody')[0];
      // faz a troca da escola atual
      var escolas = table.getElementsByTagName("tr") || [];
      escolas[1] && (escolas[1].className = "");
      // ultima escola
      var last = escolas[escolas.length-1];
      // altura da nova linha adicionada.
      // será usada para subir reposicionar a tabela.
      var height = last.offsetHeight + 10,
        frames = 1000/60, // 60fps
        acres = height / frames;
      $table.animate({
        'top': height/-1
      }, {
        'duration': 500,
        'easing': 'linear',
        'complete': function() {
          var $table = $(self.notas);
          // remove a primeira linha
          $table.find('tr').eq(0).remove();
          // posiciona novamente para o top=0
          $table.css({'top': 0});
          var $trs = $table.find('tr');
          // destaca a nota atual
          $trs.eq(1).addClass('atual cor2');
          self.quesito_atual   = $trs.get(0).getAttribute('data-quesito');
          self.id_escola_atual = $trs.get(1).getAttribute('data-escola');
          // proximo evento de subida de nota
          var ne = next.shift();
          if(typeof ne == 'function') {
            setTimeout(ne, 500);
          } else {
            nextCallback();
          }
        }
      });
      return false;
      var change_top = (function(height, frames, acres, style) {
        return function() {
          var new_top = Math.round( (Math.abs(parseFloat(style.top)) + acres) || acres );
          // fim do efeito
          if(new_top > height + acres) {
            // remove a primeira <tr>
            tbody.removeChild(escolas[0]);
            // coloca a tabela no top 0 novamente
            style.top = "0px";
            // destaca a escola que irá receber a nota
            setTimeout(function() {
              var e = tbody.getElementsByTagName("tr") || [], t = e.length;
              while(t--) {
                e[t] && (e[t].className = t == 1 ? "atual" : "");
              }
              self.quesito_atual   = e[0].getAttribute('data-quesito');
              self.id_escola_atual = e[1].getAttribute('data-escola');
            }, 10);
            // executa callback para a próxima animação
            var ne = next.shift();
            if(typeof ne == 'function') {
              setTimeout(ne, 500);
            }
            return false;
          }
          style.top = (new_top * -1) + "px";
          setTimeout(change_top, frames);
        }
      }(height, frames, acres, table.style));
      change_top();
    },
    "escreveClassificacao" : function(data) {
      if(data.length > 0) {
        this.classificacao.innerHTML = '\
          <ul>\
            <li class="item">\
              <span class="posicao cor2">'+ (cidade === 'sp' ? data[0][0] : data[0][1]) +'º</span>\
              <span class="escola">'+ (cidade === 'sp' ? data[0][2] : data[0][2]) +'</span>\
              <span class="pontos">'+ formataNota(data[0][3], true) +'</span>\
            </li>\
            <li class="item">\
              <span class="posicao cor2">'+ (cidade === 'sp' ? data[1][0] : data[1][1]) +'º</span>\
              <span class="escola">'+ (cidade === 'sp' ? data[1][2] : data[1][2]) +'</span>\
              <span class="pontos">'+ formataNota(data[1][3], true) +'</span>\
            </li>\
            <li class="item">\
              <span class="posicao cor2">'+ (cidade === 'sp' ? data[2][0] : data[2][1]) +'º</span>\
              <span class="escola">'+ (cidade === 'sp' ? data[2][2] : data[2][2]) +'</span>\
              <span class="pontos">'+ formataNota(data[2][3], true) +'</span>\
            </li>\
          </ul>\
        ';
      }
      return '';
    }
  }
  /**
   * Registra o módulo
   * @param {jQuery Selector} module
   */
  function init(module) {
    homeUOL.placarCarnaval.init(document);
  }
  return init;
});
        /*! @source /camaleao/assets/web/javascript/modules/placar-futebol.js */
        homeUOL.register('placarFutebol', ['jquery', 'usocket', 'cssAnimSupport'], function($, usocket, cssAnimSupport) {
  "use strict";
  var WS_PREFIX = 'home-placar-futebol-';
  if(location.search.match(/qa/)) {
    WS_PREFIX = 'qa-' + WS_PREFIX;
  }
  var games = {};
  /**
   * Retorna se uma partida está tendo/teve penaltis.
   * @param {Object} status
   * @return {Boolean}
   */
  function isPenaltis(status) {
    return status.penaltis === "2" // penaltis em andamento
            || status.penaltis === "3"; // penaltis finalizados;
  }
  /**
   * Indica se o jogo está em andamento.
   * @param {Object} status
   * @return {Boolean}
   */
  function isStarted(status) {
    return status.partida === "2" // partida em andamento
            || status.partida === "3";
  }
  /**
   * Indica se o jogo foi encerrado
   * @param {Object} status
   * @return {Boolean}
   */
  function itsOver(status) {
    return status.partida === "3" // partida encerrada;
  }
  /**
   * Indica se algum score possui dois dígitos para aplicação de classe
   * @param {Object} game
   */
  function hasTwoDigits(game) {
    var action = (parseInt(game.data.equipes.e1['saldo-gols'], 10) > 9 || parseInt(game.data.equipes.e2['saldo-gols'], 10) > 9) ? 'add' : 'remove';
    game.$game[action + 'Class']('has-two-digits');
    //console.log(game.$game, action)
  }
  /**
   * Adiciona classes indicando a situação atual do jogo:
   * (jogo-encerrado / jogo-aovivo / jogo-pre)
   * @param {Object} status
   * @return {Boolean}
   */
  function updateMatchStatus(game, status) {
    var classes = ['jogo-encerrado', 'jogo-aovivo', 'jogo-pre'];
    game.$game.removeClass(classes.join(' '));
    if(itsOver(status) == true) {
      return game.$game.addClass('jogo-encerrado');
    }
    if(isStarted(status) == true) {
      return game.$game.addClass('jogo-aovivo');
    }
    return game.$game.addClass('jogo-pre');
  }
  /**
   * Registra um módulo de futebol.
   * @param {jQuery Selector} module
   */
  function init(module) {
    var $jogos = module.find('.jogos').find('.jogo');
    // registra os jogos do módul o
    $jogos.each(registerGame);
    module.on('mouseenter touchend', '.item-carrossel', changeGame(module));
  }
  /**
   * Passa a exibir um outro jogo, conforme o usuário troca
   * através da lista de times.
   * @param {jQuery} module
   */
  function changeGame(module) {
    var $carrosselGames = module.find('.item-carrossel');
    return function onMouseOverGames() {
      $carrosselGames.removeClass('selected');
      $(this).addClass('selected');
      // exibe placar do jogo
      var game = getGameDom(this, this.getAttribute('data-channel'));
      game.$games.removeClass('selected');
      game.$game.addClass('selected');
    };
  }
  function getGameDom(el, id) {
    return $(el).closest('[data-module="placarFutebol"]').find('.jogo[data-channel=' + id + ']').data('placar');
  }
  /**
   * Conecta em um canal websocket para obter os dados
   * de um determinado jogo.
   *
   * @scope {DOM} div do container do jogo
   */
  function registerGame() {
    var $this = $(this),
      $module = $this.closest('[data-module="placarFutebol"]'),
      channelName = WS_PREFIX + $this.data('channel');
    var modData = {
      $module : $module,
      isCopa  : !!$module.attr('data-copa'),
      $link   : $module.find('a'),
      $games  : $module.find('.jogos .jogo'),
      $game   : $this,
      update  : {
        'saldo-gols': $this.find('.saldo-gols'),
        'saldo-penaltis': $this.find('.saldo-penaltis'),
      },
      data : undefined
    };
    // registra o canal
    games[channelName] = games[channelName] || [];
    // adiciona o módulo ao canal
    games[channelName].push(modData);
    // registra no jogo
    $this.data('placar', modData);
    usocket.connect(channelName).on('message', message);
  }
  /**
   * Recebe e trabalha com uma mensagem do websocket
   * @param {Json} message
   */
  function message(message) {
    var channelName = message.channelName;
    if(channelName === undefined) {
      return false;
    }
    for(var g = 0; g < games[message.channelName].length; g++){
      var game = games[message.channelName][g],
        penaltis = isPenaltis(message.status);
      delete game.lastGoal;
      if( JSON.stringify(game.data) === JSON.stringify(message) ) {
        // nada no json foi mudado
        return false;
      }
      // atualiza a classe indicando a situação do jogo
      updateMatchStatus(game, message.status);
      if( isStarted(message.status) === false ) {
        // partida não começou
        return false;
      }
      if( game.data !== undefined && JSON.stringify(game.data.equipes) !== JSON.stringify(message.equipes) ) {
        var time1, time2;
        if(penaltis === false) {
          // define quem fez o gol
          time1 = game.data.equipes.e1['saldo-gols'] !== message.equipes.e1['saldo-gols'];
          time2 = game.data.equipes.e2['saldo-gols'] !== message.equipes.e2['saldo-gols'];
        } else {
          // define quem fez o gol
          time1 = game.data.equipes.e1['saldo-penaltis'] !== message.equipes.e1['saldo-penaltis'];
          time2 = game.data.equipes.e2['saldo-penaltis'] !== message.equipes.e2['saldo-penaltis'];
        }
        game.data = message;
        game.lastGoal = time1 === true ? 'e1' : 'e2';
        // uma das equipes fez um gol
        animate( game, update );
      } else {
        game.data = message;
        // dispara evento de mudança
        update( game );
      }
      // checa se deve ser adicionado classe para score com 2 dígitos
      hasTwoDigits(game);
      //atualiza link do jogo / pós-jogo
      updateLink( game );
      // atualiza os penaltis
      if(penaltis === true) {
        game.$game.addClass('penaltis');
        updatePenaltis(game);
      } else {
        game.$game.removeClass('penaltis');
      }
    }
  }
  function update(game) {
    var saldoGols = game.data.equipes,
      $saldoGols = game.update['saldo-gols'];
    $saldoGols.eq(0).html( saldoGols.e1['saldo-gols'] );
    $saldoGols.eq(1).html( saldoGols.e2['saldo-gols'] );
  }
  function updatePenaltis(game) {
    var saldoPenaltis = game.data.equipes,
      $saldoPenaltis = game.update['saldo-penaltis'];
    $saldoPenaltis.eq(0).html( saldoPenaltis.e1['saldo-penaltis'] );
    $saldoPenaltis.eq(1).html( saldoPenaltis.e2['saldo-penaltis'] );
  }
  // Adiciona/atualiza a URL do placar/pos-jogo
  function updateLink(game) {
    if(game.$link) {
      if(game.data['url-pos-jogo'] && itsOver(game.data.status)) {
        game.$game.find('a').attr('href', game.data['url-pos-jogo'])
        //se não for um label editorial, atualiza
        game.$game.find('.label-pos:not(.pos-editorial)').text('Pós-Jogo');
      } else if(game.data.url) {
        game.$game.find('a').attr('href', game.data.url);
        game.$game.find('.label-pos:not(.pos-editorial)').text('Encerrado');
      }
    }
  }
  function animate(game, then) {
    var equipes = game.data.equipes,
      // dados da equipe que fez gol
      eGol = equipes[game.lastGoal],
      // navegador suporta animacao?
      animSupport = cssAnimSupport() === false ? 'static-anim ' : '';
    var animGolEl = game.$module.find('.anim-gol');
    // só executa animação se possuir o elemento.
    // embora o jquery vá tratar os casos onde o elemento não existe,
    // estaríamos atrasando o resultado do gol para uma animação que não existe
    if(animGolEl.size() > 0) {
      game.$module.find('.anim-gol').addClass(animSupport + 'anim');
      setTimeout(showBrasao(eGol, game, then), 4000);
    } else {
      then(game);
    }
  }
  function showBrasao(eGol, game, then) {
    return function() {
      var $animContainer = game.$module.find('.anim-gol'),
        brasao = game.$game.find('.brasao.'+game.lastGoal).attr('src').replace(/(\d{2}x\d{2})/, '40x40');
      $animContainer.find('.brasao').html( '<img src="'+brasao+'" width="40" height="40" />' );
      $animContainer.addClass('anim-brasao');
      // oculta a animação
      setTimeout(function() {
        $animContainer.removeClass('anim anim-brasao static-anim');
        $animContainer.find('.brasao').empty();
        then(game);
      }, 4500);
    }
  }
  return init;
});
        /*! @source /camaleao/assets/web/javascript/modules/enquete.js */
        homeUOL.register('enquete', ['jquery', 'Mustache', 'uniqueId', 'lightbox', 'checkPlaceholder', 'metrics-ga'], function ($, Mustache, uniqueId, lightbox, checkPlaceholder, metricsGA) {
  'use strict';
  var $window = $(window);
  /**
   * Guarda a última posição do scrollTop do usuário, antes de
   * o lightbox de captcha abrir.
   * @type {Int}
   */
  var userScrollTopBeforeCaptcha = 0;
  // Production steps of ECMA-262, Edition 5, 15.4.4.19
  // Reference: http://es5.github.io/#x15.4.4.19
  if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
      var T, A, k;
      if (this == null) {
        throw new TypeError(' this is null or not defined');
      }
      // 1. Let O be the result of calling ToObject passing the |this|
      //    value as the argument.
      var O = Object(this);
      // 2. Let lenValue be the result of calling the Get internal
      //    method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;
      // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
        T = thisArg;
      }
      // 6. Let A be a new array created as if by the expression new Array(len)
      //    where Array is the standard built-in constructor with that name and
      //    len is the value of len.
      A = new Array(len);
      // 7. Let k be 0
      k = 0;
      // 8. Repeat, while k < len
      while (k < len) {
        var kValue, mappedValue;
        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal
        //    method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {
          // i. Let kValue be the result of calling the Get internal
          //    method of O with argument Pk.
          kValue = O[k];
          // ii. Let mappedValue be the result of calling the Call internal
          //     method of callback with T as the this value and argument
          //     list containing kValue, k, and O.
          mappedValue = callback.call(T, kValue, k, O);
          // iii. Call the DefineOwnProperty internal method of A with arguments
          // Pk, Property Descriptor
          // { Value: mappedValue,
          //   Writable: true,
          //   Enumerable: true,
          //   Configurable: true },
          // and false.
          // In browsers that support Object.defineProperty, use the following:
          // Object.defineProperty(A, k, {
          //   value: mappedValue,
          //   writable: true,
          //   enumerable: true,
          //   configurable: true
          // });
          // For best browser support, use the following:
          A[k] = mappedValue;
        }
        // d. Increase k by 1.
        k++;
      }
      // 9. return A
      return A;
    };
  }
  // Créditos:
  // http://blog.shiguenori.com/2009/03/21/number_format-em-javascript/
  // Editado para que todos os separadores sejam "." como padrão.
  function number_format(number, decimals, dec_point, thousands_sep) {
    // %        nota 1: Para 1000.55 retorna com precisão 1 no FF/Opera é 1,000.5, mas no IE é 1,000.6
    // *     exemplo 1: number_format(1234.56);
    // *     retorno 1: '1,235'
    // *     exemplo 2: number_format(1234.56, 2, ',', ' ');
    // *     retorno 2: '1 234,56'
    // *     exemplo 3: number_format(1234.5678, 2, '.', '');
    // *     retorno 3: '1234.57'
    // *     exemplo 4: number_format(67, 2, ',', '.');
    // *     retorno 4: '67,00'
    // *     exemplo 5: number_format(1000);
    // *     retorno 5: '1,000'
    // *     exemplo 6: number_format(67.311, 2);
    // *     retorno 6: '67.31'
    var n = number, prec = decimals;
    n = !isFinite(+n) ? 0 : +n;
    prec = !isFinite(+prec) ? 0 : Math.abs(prec);
    var sep = (typeof thousands_sep == "undefined") ? '.' : thousands_sep;
    var dec = (typeof dec_point == "undefined") ? '.' : dec_point;
    var s = (prec > 0) ? n.toFixed(prec) : Math.round(n).toFixed(prec); //fix for IE parseFloat(0.55).toFixed(0) = 0;
    var abs = Math.abs(n).toFixed(prec);
    var _, i;
    if (abs >= 1000) {
      _ = abs.split(/\D/);
      i = _[0].length % 3 || 3;
      _[0] = s.slice(0, i + (n < 0)) +
        _[0].slice(i).replace(/(\d{3})/g, sep + '$1');
      s = _.join(dec);
    } else {
      s = s.replace('.', dec);
    }
    return s;
  }
  /**
   * Armazena as informações dos módulos de enquete ativos na home.
   * @type {Object}
   */
  var modules = {};
  /**
   * Instância do lightbox de captcha.
   * @param {jQuery Element} elemento lightbox-content
   */
  var lightboxContainer = undefined;
  /**
   * Constantes que indicam o tipo de request.
   * @type {Int}
   */
  var REQUEST_RESULT = 1;
  var REQUEST_VOTE = 2;
  /**
   * Classes que indicam a situação atual do módulo de enquete
   * @type {String}
   */
  var CLASS_VIEW_RESULT = 'enquete-view-result';
  var CLASS_VIEW_VOTED = 'enquete-view-voted';
  var CLASS_VIEW_CAPTCHA = 'enquete-view-captcha';
  var ALL_VIEW_CLASSES = [CLASS_VIEW_RESULT, CLASS_VIEW_VOTED, CLASS_VIEW_CAPTCHA].join(' ');
  /**
   * Transforma um JSON em formato url.
   * @param {Json}
   * @return {String}
   */
  function serialize(json) {
    var str = '';
    var attr;
    for (attr in json) {
      if (json.hasOwnProperty(attr) === true) {
        str += '&' + attr + '=' + json[attr];
      }
    }
    return str.slice(1);
  }
  /**
   * Inicia um módulo.
   */
  function init(module) {
    var enqueteId = getId(module);
    var moduleId = enqueteId + '-' + uniqueId();
    module.data('moduleId', moduleId);
    // registra o módulo
    modules[moduleId] = {
      $el: module,
      $userAnswer: module.find('input[name="userAnswer"]'),
      $result: module.find('[data-enquete-result="true"]'),
      $vote: module.find('[data-enquete-vote="true"]'),
      $answers: module.find('[data-enquete-answer]'),
      el: module.get(0),
      enqueteId: enqueteId,
      moduleId: moduleId,
      answers: getAnswers(module),
      templates: getTemplates(module)
    };
    // registra eventos
    bind(modules[moduleId]);
  }
  /**
   * Procura pelos templates que serão usados para montar
   * o módulo conforme interação (resultado, voto, captcha)
   * @param {Object} module
   * @return {Object} tempaltes
   */
  function getTemplates(module) {
    var templates = {};
    var eachFunc = function (index, el) {
      var name = el.getAttribute('data-name');
      var $el;
      if (name) {
        $el = $(el);
        templates[name] = $.trim($el.html());
        $el.remove();
      }
    };
    module.find('script[type="text/template"]').each(eachFunc);
    return templates;
  }
  /**
   * Procura pelos elementos de alternativa.
   * @param {Object} module
   * @return {Array} lista com os elementos de cada alterantiva
   */
  function getAnswers(module) {
    var mapFunc = function (el) {
      return {
        id: el.getAttribute('data-enquete-answer'),
        el: el,
        $el: $(el)
      }
    };
    return module.find('[data-enquete-answer]').toArray().map(mapFunc);
  }
  /**
   * Adiciona eventos de votar e ver resultado no
   * markup da enquete.
   * @param {jQuery Element}
   */
  function bind(module) {
    module.$el.on('vote', requestVote);
    module.$el.on('click', '[data-enquete-result="true"]', requestResult);
    module.$el.on('click', '[data-enquete-answer]', setChoice);
    if(module.$el[0].dataset.captcha === 'recaptcha') {
      module.$el.on('click', '[data-enquete-vote="true"]', showCaptcha);
    } else {
      module.$el.on('click', '[data-enquete-vote="true"]', requestVote);
    }
  }
  /**
   * Remove os eventos registrados.
   * @param {jQuery Element}
   */
  function unbind(module) {
    module.$el.off('vote', requestVote);
    module.$el.off('click', '[data-enquete-result="true"]', requestResult);
    module.$el.off('click', '[data-enquete-answer]', setChoice);
    if (module.$el[0].dataset.captcha === 'recaptcha') {
      module.$el.off('click', '[data-enquete-vote="true"]', showCaptcha);
    } else {
      module.$el.off('click', '[data-enquete-vote="true"]', requestVote);
    }
  }
  /**
   * Retorna o ID da enquete do módulo.
   * `el` pode ser tanto o módulo como um elemento dentro dele (ie.: botão).
   *
   * @param {DOM} elemento do módulo.
   * @return {String} id da enquete
   */
  function getId(el) {
    var $el = getModule(el);
    return $el.data('enqueteId');
  }
  /**
   * Retorna o objeto de registro / configuração de um módulo.
   * `el` pode ser tanto o módulo como um elemento dentro dele (ie.: botão).
   *
   * @param {DOM} elemento do módulo.
   * @return {Object}
   */
  function getModuleConfig(el) {
    if (el.jquery === undefined) {
      el = $(el);
    }
    if (el.hasClass('modulo enquete') === false) {
      el = el.closest('.modulo.enquete');
    }
    return modules[el.data('moduleId')];
  }
  /**
   * Recebe um elemento DOM qualquer e retorna o elemento pai
   * do módulo da enquete.
   *
   * @param {DOM} elemento qualquer.
   * @return {DOM} módulo
   */
  function getModule(el) {
    if (el.jquery === undefined) {
      el = $(el);
    }
    if (el.hasClass('modulo enquete') === true) {
      return el;
    }
    return el.closest('.modulo.enquete');
  }
  function setViewClass(module, className) {
    module.$el.removeClass(ALL_VIEW_CLASSES).addClass(className);
  }
  function setChoice() {
    var $this = $(this);
    var module = getModuleConfig(this);
    var userAnswer = $this.data('enqueteAnswer');
    module.$answers.removeClass('enquete-answer-selected');
    $this.addClass('enquete-answer-selected');
    // campo hidden com o id da opção selecionada
    module.$userAnswer.val(userAnswer);
  }
  /**
   * Vota em uma alternativa.
   * @scope {Int} id da enquete
   */
  var requestVote = function() {
    var module = getModuleConfig(this);
    var userAnswer = module.$userAnswer.val();
    var userCaptcha = $('input[name="tt_user_response"]');
    var captchaResp = document.querySelector('#g-recaptcha-response') ? document.querySelector('#g-recaptcha-response').value : '';
    var token = document.querySelector('#recaptcha-token') ? document.querySelector('#recaptcha-token').value : '';
    if (userAnswer === '') {
      return alert('Escolha uma alternativa');
    }
    module.lastRequest = REQUEST_VOTE;
    var data;
    if (module.$el[0].dataset.captcha === 'recaptcha') {
      data = {
        format: 'jsonp',
        jsonp: 'homeUOL.callbacks.enqueteVote',
        'id': module.enqueteId,
        'answers': userAnswer,
        'g-recaptcha-response': captchaResp,
        token: token
      };
    } else {
      data = {
        format: 'jsonp',
        jsonp: 'homeUOL.callbacks.enqueteVote',
        id: module.enqueteId,
        answers: userAnswer
      };
      if(userCaptcha.size() !== 0) {
        data['captcha-id'] = module.capchaId;
        data['captcha-value'] = userCaptcha.val();
      }
      // remove o input do captcha e zera, para o próximo ciclo de votação
      module.capchaId = undefined;
      userCaptcha.remove();
    }
    // http://enquete.uol.com.br:443/vote?format=jsonp&id=40556&answers=630031&jsonp=Lib.Enquete.Callback.request
    $.ajax({
      'cache': true,
      'type': 'GET',
      'url': location.protocol + '//enquete.uol.com.br/vote',
      'dataType': 'jsonp',
      'jsonp': false,
      'data': serialize(data)
    });
  }
  /**
   * Reseta voto ao clicar em resultado parcial.
   */
  function resetVotes(module) {
    if (module.$userAnswer.val() != "") {
      module.$el.find("div[data-enquete-answer]").removeClass('enquete-answer-selected');
      module.$userAnswer.val("");
    }
  }
  /**
   * Faz o request para obter o resultado parcial.
   * @scope {DOM} botão "ver resultado"
   */
  function requestResult() {
    var module = getModuleConfig(this);
    // registra que esse módulo fez um request para resultado
    module.lastRequest = REQUEST_RESULT;
    $.ajax({
      'cache': true,
      'type': 'GET',
      'url': location.protocol + '//enquete.uol.com.br/results',
      'dataType': 'jsonp',
      'jsonp': false,
      'data': serialize({
        format: 'jsonp',
        jsonp: 'homeUOL.callbacks.enqueteResult',
        id: module.enqueteId
      })
    });
    resetVotes(module);
  }
  /**
   * Aplica o resulto parcial no módulo.
   * @param {}
   */
  function showResult(module, json) {
    var answerTemplate = module.templates.result;
    var totalVotesTemplate = module.templates.totalVotes;
    var answers = module.answers;
    var iJson, iModule;
    closeCaptcha();
    // adiciona classe no modulo, indicando o estado da enquete
    setViewClass(module, 'enquete-view-result');
    for (iModule = 0; iModule < answers.length; iModule++) {
      for (iJson = 0; iJson < answers.length; iJson++) {
        if (answers[iModule].id == json.answers[iJson].id) {
          var answer = json.answers[iJson];
          // trata pontuação nos números
          answer.humanVotes = number_format(answer.votes.toString());
          answer.humanPercent = answer.percent.toString().replace('.', ',');
          answers[iModule].$el.find('.tpl-result').html(Mustache.render(answerTemplate, answer));
          break;
        }
      }
    }
    json.humanVotes = number_format(json.votes);
    // total de votos da enquete
    module.$el.find('.tpl-totalVotes').html(Mustache.render(totalVotesTemplate, json));
  }
  /**
   * Exibe lightbox de captcha e binda eventos para nova
   * tentativa de voto.
   * @param {Json} configuração do módulo que pediu o captcha
   * @param {Json} json retorno do serviço solicitando captcha
   */
  var showCaptcha = function(module, json) {
    if(!module.$userAnswer) {
      module = getModuleConfig(this);
    }
    // GA clique do botão VOTAR
    var action = false,
        category = false,
        area = false,
        label = false,
        position = false,
        modMetrics = $(module.el).data('metrics');
    action = 'clique';
    area = 'bbb';
    category = 'bloco-editorial-bbb';
    position = 'coluna-unica';
    label = 'enquete-voto';
    var userAnswer = module.$userAnswer.val();
    if (userAnswer === '') {
      return alert('Escolha uma alternativa');
    }else {
      metricsGA({
        'action': action,
        'category': category,
        'area': area,
        'label': label,
        'position': position
      });
    }
    var userCaptcha, $userCaptcha;
    var VIEW_CAPTCHA;
    if (module.$el[0].dataset.captcha === 'recaptcha') {
      VIEW_CAPTCHA = '<button class="close" title="Fechar"><span class="icon icon-close corw"></span></button>' +
      '<div class="title corw bg2">Confirme Seu Voto</div>' +
      '<form name="captcha">' +
        '<div id="boxCaptcha" class="g-recaptcha" data-sitekey="6LcwbTMUAAAAAH5Due3X8Kpq0QUZBwHYIIeE1bxU" data-callback="resultCaptcha"></div>' +
        '<button class="btSubmit bg2 borda6" type="submit">Votar</button>' +
      '</form>';
    } else {
      VIEW_CAPTCHA = '<button class="close" title="Fechar"><span class="icon icon-close corw"></span></button>' +
      '<div class="title corw bg2">Confirme Seu Voto</div>' +
      '<form name="captcha">' +
        '<div id="boxCaptcha" class="g-recaptcha" data-sitekey="6LcwbTMUAAAAAH5Due3X8Kpq0QUZBwHYIIeE1bxU" data-callback="resultCaptcha"></div>' +
        '<button class="btSubmit bg2 borda6" type="submit">Votar</button>' +
      '</form>';
    }
    lightboxContainer = lightbox('enqueteCaptcha', Mustache.render(VIEW_CAPTCHA, json));
    $userCaptcha = lightboxContainer.find('.inputText');
    userCaptcha = $userCaptcha.get(0);
    var s = document.createElement('script');
     s.setAttribute('src', 'https://www.google.com/recaptcha/api.js');
    document.head.appendChild(s);
    /**
      * quando fechar o lightbox, remove os eventos
      * @bockMetrics {boolean} evita que métricas sejam enviadas corretamente
      **/
    lightboxContainer.on('close', function (argument, bockMetrics) {
      if (!bockMetrics) {
        // GA
        var action = false,
            category = false,
            area = false,
            label = false,
            position = false
        action = 'clique';
        area = 'bbb';
        category = 'bloco-editorial-bbb';
        position = 'coluna-unica';
        label = 'enquete-captcha-clique-fora';
        metricsGA({
          'action': action,
          'category': category,
          'area': area,
          'label': label,
          'position': position
        });
      }
      lightboxContainer.off('click', '[data-enquete-vote="true"]');
      // Quando o lightbox é aberto, no Safari iOS o usuário é
      // scrollado para cima, saindo da área da enquete.
      //
      // Para resolver isso, a posição do scroll antes do captcha é
      // armazenada e, quando o captcha é fechado, o usuário é redirecionado
      // para a posição antiga, permitindo ele ver o resultado de sua interação.
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i) !== null) {
        $window.scrollTop(userScrollTopBeforeCaptcha);
      }
    });
    userScrollTopBeforeCaptcha = Math.max($window.scrollTop(), userScrollTopBeforeCaptcha);
    // placeHolder para ie
    checkPlaceholder(lightboxContainer.get(0));
    if (module.$el[0].dataset.captcha !== 'recaptcha') {
      // foca no input
      userCaptcha.focus();
    }
    lightboxContainer.on('submit', 'form', function revoteCaptcha(ev) {
      ev.preventDefault();
      module.$el.trigger('vote');
    });
    gaModalFecharButtom()
  }
  function gaModalFecharButtom(modal) {
    document.querySelector('.enqueteCaptcha-lightbox-content .close').addEventListener("click", function(e){
      e.stopPropagation()
        lightboxContainer.trigger('close', true)
        // GA
        var action = false,
            category = false,
            area = false,
            label = false,
            position = false
        action = 'clique';
        area = 'bbb';
        category = 'bloco-editorial-bbb';
        position = 'coluna-unica';
        label = 'enquete-captcha-fechar-modal';
        metricsGA({
          'action': action,
          'category': category,
          'area': area,
          'label': label,
          'position': position
        });
      });
  }
  /**
   * Fecha o lightbox do captcha.
   */
  function closeCaptcha() {
    // fecha o lightbox que pode ter sido aberto
    // para a digitação do captcha
    if (lightboxContainer !== undefined) {
      lightboxContainer.trigger('close', true);
      lightboxContainer = undefined;
    }
  }
  /**
   * Callback de um request de resultado parcial.
   * @param {Json} retorno
   */
  function callbackResult(json) {
    var mods = [];
    var m;
    // procura pelos módulos relacionados à enquete do callback
    for (m in modules) {
      if (modules[m].enqueteId == json.id && modules[m].lastRequest === REQUEST_RESULT) {
        var module = modules[m];
        showResult(module, json);
        break;
      }
    }
    // GA
        var action = false,
            category = false,
            area = false,
            label = false,
            position = false,
            modMetrics = $(module.el).data('metrics');
        action = 'clique';
        area = modMetrics.replace(/(mod.*)(;)(.*)/,'$3');
        category = 'bloco-editorial-' + area; /*modMetrics.replace(/(mod.*)(\d)(;bbb)/,'$2');*/
        position = 'coluna-unica';
        label = 'enquete-resultado';
        metricsGA({
          'action': action,
          'category': category,
          'area': area,
          'label': label,
          'position': position
        });
  }
  /**
   * Callback de um request de votação.
   * @param {Json} retorno
   */
  function callbackVote(json) {
    var mods = [];
    var m, module;
    // procura pelos módulos relacionados à enquete do callback
    for (m in modules) {
      if (modules[m].enqueteId == json.id && modules[m].lastRequest === REQUEST_VOTE) {
        module = modules[m];
        // GA
        var action = false,
            category = false,
            area = false,
            label = false,
            position = false,
            modMetrics = $(module.el).data('metrics');
        switch(json.status) {
          // votação ocorreu com sucesso
          case 'enabled':
            showResult(module, json);
            setViewClass(module, 'enquete-view-voted');
            unbind(module);
          break;
          // necessário digitação do captcha
          case 'captcha':
            // guarda o captchaId no config do módulo para ser usado
            // ao tenta fazer o voto novamente.
            module.capchaId = json.captcha.id;
            showCaptcha(module, json);
            action = 'clique';
            area = modMetrics.replace(/(mod.*)(;)(.*)/,'$3');
            category = 'bloco-editorial-' + area; /*modMetrics.replace(/(mod.*)(\d)(;bbb)/,'$2');*/
            position = '4-colunas';
            label = 'enquete-captcha';
            metricsGA({
              'action': action,
              'category': category,
              'area': area,
              'label': label,
              'position': position
            });
          break;
          // enquete desativada ou algum problema
          // apenas exibe o resultado parcial, caso exista.
          default:
            if (json.answers) {
              showResult(module, json);
              setViewClass(module, 'enquete-view-voted');
              unbind(module);
            }
            break;
        }
        break; // sai do for
      }
    }
  }
  // Registra os callbacks
  homeUOL.register('callbackEnqueteResult', callbackResult);
  homeUOL.register('callbackEnqueteVote', callbackVote);
  return init;
});
function resultCaptcha () {
    document.querySelector('.enqueteCaptcha-lightbox-content .btSubmit').click()
     // GA
    var action = false,
        category = false,
        area = false,
        label = false,
        position = false
    action = 'clique';
    area = 'bbb';
    category = 'bloco-editorial-bbb';
    position = 'coluna-unica';
    label = 'enquete-captcha-confirmar';
    metricsGA({
      'action': action,
      'category': category,
      'area': area,
      'label': label,
      'position': position
    });
}
        /*! @source /camaleao/assets/web/javascript/modules/ecommerce.js */
        homeUOL.register('ecommerce', [
  'jquery',
  'Mustache',
  'clickuol',
  'ga',
  'tryit',
  'buscas',
  'checkPlaceholder',
  'basepath'
], function ecommerce($, Mustache, clickuol, GA, Tryit, Buscas, CheckPlaceholder, basepath) {
  'use strict';
  var trataLogoUOL = function(str) {
    return str.replace(/(.*) ?(uol|UOL) ?(.*)/, function(){
      var before = arguments[1] ? '<span class="name">' + arguments[1].trim() + '</span>':'';
      var after = arguments[3] ? '<span class="name">' + arguments[3].trim() + '</span>':'';
      return before + '<span class="icon icon-uol"><em>UOL</em></span>' + after
    });
  }
  /** copyright underscore */
  var underHas = function(obj, key) {
    return obj != null && obj.hasOwnProperty(key);
  }
  var objectKeys = function(obj) {
    var type = typeof obj;
    if (!(type === 'function' || type === 'object' && !!obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (underHas(obj, key)) keys.push(key);
    return keys;
  };
  var jsons = {
    shopping     : 'publicidade-shopping-fixo',
    produtos7mods: 'publicidade-produtos-educacao-7mods',
    produtos5mods: 'publicidade-produtos-educacao-5mods',
    educacao     : 'publicidade-educacao-7mods'
  };
  var configBusca = {
    'cursosonline': {
      'name': 'formBuscaCursosOnline',
      'action': 'http://cursosonline.uol.com.br/fit/resultado-de-busca.aspx',
      'acceptCharset': 'utf-8',
      'inputQuery': 'Titulo',
      'emptyUrl': 'http://cursosonline.uol.com.br/'
    },
    'empregocerto': {
      'name': 'formBuscaEmpregoCerto',
      'action': 'http://empregocerto.uol.com.br/search/jobs.html',
      'acceptCharset': 'ISO-8859-1',
      'inputQuery': 'keyword',
      'emptyUrl': 'http://empregocerto.uol.com.br/'
    }
  };
  var modules = {};
  /**
   * Ativa menu de navegação (somente em produtos)
   *
   */
  function createActionMenu() {
    var modulo = $('.shopping-produtos-uol.produtos'),
      nav = modulo.find('.nav-container');
    nav.find('.btnNav').on('click', function() {
      var item = $(this).index();
      // ativa somente item clicado no menu
      nav.find('.active').removeClass('active');
      $(this).addClass('active');
      // fecha anuncio ativo
      modulo.find('.shopping-produtos-uol-container.active').removeClass('active').addClass('hide');
      // exibe anuncio escolhido
      var anuncio = modulo.find('.shopping-produtos-uol-container')[item];
      $(anuncio).addClass('active').removeClass('hide');
    });
  }
  /**
   * Determina se o horário permite conteúdo adulto
   * Entre 23h e 5h NÃO é restrito
   */
  function checkRestrictedTime() {
    var now = serverDate.hour;
    var timeInit = 23;
    var timeEnd = 5;
    return (now >= timeInit || now < timeEnd) ? false : true;
  }
  function objSum( obj ) {
    var sum = 0;
    for( var el in obj ) {
      if( obj.hasOwnProperty( el ) ) {
        sum += parseFloat( obj[el] );
      }
    }
    return sum;
  }
  function render(module, templateContainer, templateMarkup, json){
    module.html( Mustache.render(templateMarkup, json) );
    homeUOL.rescan(module);
    clickuol(module);
    GA(module);
    CheckPlaceholder(module.get(0));
    return module;
  }
  function request(module, templateContainer, templateMarkup){
    var jsonName = module.attr('data-json');
    var base = '/camaleao/editorial/modulos/ecommerce/';
    if(!jsonName){
      return;
    }
    switch(jsonName) {
      case 'shopping':
        jsonName = jsons['shopping'];
        break;
      case 'produtos-educacao':
        base = '/camaleao/api/';
        jsonName = 'publicidade-7mods';
        break;
      case 'produtos-5mods':
        base = '/camaleao/api/';
        jsonName = jsons['produtos5mods'];
        break;
      default:
        // padrão ecommerce desconhecido
        return false;
    }
    if( jsonName == 'publicidade-7mods' ) {
      var jsonTpl = {};
      jsonTpl.publicidades = [];
      var url;
      if(location.href.indexOf('www.uol.com.br/teste') === -1){
        url = base+jsons.produtos7mods+'.json'; //basepath(base+jsons.produtos7mods+'.json');
      } else {
        url = '/teste'+base+jsons.produtos7mods+'.json'
      }
      // faz requisição de anúncios
      $.ajax({
        url: url,
        dataType: 'json',
        cache: true,
        success: function callbackEcommerceRequest(json) {
          // tratamento dos retornos para template mustache
          jsonTpl.publicidades = $.merge(jsonToArray7Colunas(json.produtos,'produtos-uol'), jsonToArray7Colunas(json.educacao,'uol-cursos-online'));
          // sorteia entre área de produtos ou educação
          var area;
          Tryit('!ecommerce', { 'produtos-uol': 60, 'uol-cursos-online': 40 }, function(randValue) {
            area = randValue;
          });
          var anuncios = jsonTpl.publicidades;
          var pesoAnuncios = {};
          var pesoDistribuido = 0;
          var distribuidoPor = 0;
          var lastItem;
          // menu navegação
          var nav = {};
          nav.itens = [];
          // Exclui conteúdo adulto em horário restrito
          for (var y = 0; y < anuncios.length; y++) {
            var anuncio = anuncios[y];
            if (anuncio.config.adult == true && checkRestrictedTime()) {
              anuncios.splice(y,1);
              y--;
              // caso seja da área sorteada, distribui o peso nos anúncios restantes
              if (area == anuncio.config.classe) {
                pesoDistribuido += parseInt(anuncio.config.peso);
              }
            }
            // conta os anúncios da área sorteada
            if (area == anuncio.config.classe){
              distribuidoPor++;
            }
          }
          // Peso de anúncios excluidos são distribuidos entre os outros anúncios
          if (pesoDistribuido) pesoDistribuido = Math.ceil(pesoDistribuido / distribuidoPor);
          // armazena anuncios da area sorteada
          for(var y = 0; y < anuncios.length; y++) {
            var anuncio = anuncios[y];
            anuncios[y].active = false;
            anuncios[y].modulo = y + 1;
            nav.itens.push({ active : false });
            if( area == anuncio.config.classe ) {
              var peso = Math.ceil(parseInt(anuncio.config.peso) + pesoDistribuido);
              pesoAnuncios[y] = peso;
              lastItem = y;
            }
          }
          // arredonda o último item, caso a soma não dê 100
          var pesoSoma = objSum(pesoAnuncios);
          if (pesoSoma != 100) {
            pesoAnuncios[lastItem] = pesoAnuncios[lastItem] + (100-pesoSoma);
          }
          // sorteia entre anuncios da área
          var anuncioSorteado;
          Tryit('!ecommerce', pesoAnuncios, function(randValue) {
            anuncioSorteado = randValue;
          });
          // ativa menu + anuncio sorteado
          anuncios[anuncioSorteado].active = true;
          nav.itens[anuncioSorteado].active = true;
          // passa menu para template
          jsonTpl.nav = nav;
          render(module, templateContainer, templateMarkup, jsonTpl);
          module.closest('.loading').removeClass('loading');
          createActionMenu();
        }
      });
    } else {
      $.ajax({
        url: basepath(base+jsonName+'.json'),
        dataType: 'json',
        cache: true,
        success: function callbackEcommerceRequest(data) {
          var modName;
          var jsonTpl;
          try {
            modName = data.paths.module.tpl;
          } catch(e) {
            return ;
          }
          switch(modName) {
            case 'publicidade-produtos-5mods.tpl':
              jsonTpl = getJSONPublicidade5Colunas( data );
              break;
            case 'publicidade-produtos-7mods.tpl':
            case 'publicidade-shopping-fixo.tpl':
              jsonTpl = getJSONPublicidade7Colunas( data );
          }
          render(module, templateContainer, templateMarkup, jsonTpl);
          module.closest('.loading').removeClass('loading');
        }
      });
    }
  }
  function getJSONPublicidade5Colunas(data) {
    var json = [];
    var produtoKey;
    for(produtoKey in data) {
      if(data.hasOwnProperty(produtoKey) === true && /^produtoItens/.test(produtoKey) === true) {
        var produtos = data[produtoKey];
        var pesos = {};
        var max = produtos.length;
        var i;
        // obtém os pesos de cada uma das chamadas para a coluna
        for(i = 0; i < max; i++) {
          pesos[i] = parseInt(produtos[i].frequencia);
          produtos[i].tituloTpl = trataLogoUOL(produtos[i].titulo.toLowerCase());
        }
        // faz o random para obter o produto que será exibido
        Tryit('!ecommerce', pesos, function(randValue) {
          // adiciona o produto escolhido no json do tpl
          json.push( produtos[randValue] );
        });
      }
    }
    return json;
  }
  function getJSONPublicidade7Colunas(data) {
    var json;
    var pesos;
    try {
      pesos = data.configuracao.peso;
    } catch(e) {
      var objKeys = objectKeys(data);
      var rotates = objKeys.join(',').match(/shoppingItens\d{1,}/g);
      var totalRotates = rotates ? rotates.length : 0;
      var pesoRotate = parseInt(100 / totalRotates);
      var somaPeso = 0;
      var index = totalRotates;
      pesos = {};
      while(index--) {
        pesos[rotates[index]] = index > 0 ? pesoRotate : (100-somaPeso);
        somaPeso += pesoRotate;
      }
    }
    Tryit('!ecommerce', pesos, function(randValue) {
      var modIndex = randValue.replace(/[^\d]/g, '');
      json = data[randValue];
      json.modIndex = modIndex;
      json.subLinks = data[ 'linksSub' + modIndex ] || [];
      if(json.subLinks.length && !json.subLinks[0].link) {
        json.subLinks = [];
      }
    });
    if(json.config !== undefined) {
      // tem busca
      json.config.busca = configBusca[json.config['site-busca']] || false;
      // coloca selo UOL no lugar do texto
      json.config.tituloTpl = trataLogoUOL(json.config.titulo.toLowerCase());
      // classe para o módulo
      json.config.classe = json.config.titulo.replace(/ /g, '-').toLowerCase();
    }
    // transforma os produtos em array
    var arrProdutos = [];
    var propProdutos = objectKeys(json);
    for(var p = 0; p < propProdutos.length; p++) {
      var prop = propProdutos[p];
      if(prop.match(/^item\d+$/) !== null) {
        json[prop].position = {
          'index': arrProdutos.length + 1
        };
        arrProdutos.push( $.extend({}, json[prop]) );
        json[prop] = undefined;
        delete json[prop];
      }
    }
    json.itens = arrProdutos;
    return json;
  }
  /**
   * Tratamento json -> array dos produtos
   *
   */
  function jsonToArray7Colunas(data, classe) {
    var pesos;
    var produtos = [];
    var json = {};
    var classeProduto = classe;
    json.publicidades = [];
    try {
      pesos = data.configuracao.peso;
    } catch(e) {
      var objKeys = objectKeys(data);
      var rotates = objKeys.join(',').match(/shoppingItens\d{1,}/g);
      var totalRotates = rotates ? rotates.length : 0;
      var pesoRotate = parseInt(100 / totalRotates);
      var somaPeso = 0;
      var index = totalRotates;
      pesos = {};
      while(index--) {
        pesos[rotates[index]] = index > 0 ? pesoRotate : (100-somaPeso);
        somaPeso += pesoRotate;
      }
    }
    // armazena somente produtos (anuncios)
    var totalProdutos = objectKeys(pesos).length;
    for(var i = 0; i < totalProdutos; i++) {
      var name = 'produto' + (i+1);
      var produto = data[name];
      if( produto != undefined ) {
        // registra peso do produto
        produto.peso = data.configuracao.peso[name];
        // modIndex do produto
        produto.modIndex = i + 1;
        produtos.push(produto);
      }
    }
    // varre json e monta array com produtos
    for(var i = 0; i < produtos.length; i++) {
      var arrProdutos = [];
      var propProdutos = objectKeys(produtos[i]);
      var produto = produtos[i];
      var anuncio = {};
      // modIndex
      anuncio.modIndex = produto.modIndex;
      // itens do anúncio
      anuncio.itens = [];
      for(var p = 0; p < propProdutos.length; p++) {
        var prop = propProdutos[p];
        if(prop.match(/^item\d+$/) !== null) {
          produto[prop].position = {
            'index': arrProdutos.length + 1
          };
          arrProdutos.push( $.extend({}, produto[prop]) );
          produto[prop] = undefined;
          delete produto[prop];
        }
      }
      anuncio.itens = arrProdutos;
      // sublink do anúncio
      var sub = 'linksSub' + (i+1);
      // var produto = data[name];
      anuncio.subLinks = data[sub] || [];
      if( anuncio.subLinks.length && !anuncio.subLinks[0].link ) {
        anuncio.subLinks = [];
      }
      // configuração do anúncio
      if(produto.config !== undefined) {
        anuncio.config = produto.config;
        // tem busca
        anuncio.config.busca = configBusca[produto.config['site-busca']] || false;
        // coloca selo UOL no lugar do texto
        anuncio.config.tituloTpl = trataLogoUOL(produto.config.titulo.toLowerCase());
        // classe para o módulo
        anuncio.config.classe = classeProduto;
        // peso
        anuncio.config.peso = produto.peso;
      }
      // armazena anúncio tratado
      json.publicidades.push(anuncio);
    }
    return json.publicidades;
  }
  return function(module, templateContainer, templateMarkup) {
    module.lazyany(function lazyEcommerceModule() {
      request(module, templateContainer, templateMarkup);
    });
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/horizontal-bbb.js */
        homeUOL.register('horizontalBBB', ['jquery', 'storage','metrics-ga'], function($, storage, metricsGA) {
	'use strict';
	var $body = $('body');
	/**
	 * Módulo do bbb
	 * @type {object}
	 */
	var modulo;
	/**
	 * Módulo de votação do paredão
	 */
	function modVotacaoBBB() {
		var modvotacao = modulo.find('.horizontal-votacao');
		if( modvotacao.length != 0 ) {
			var participantes = modvotacao.find('.paredao');
			// hover dos participantes
			participantes.hover(
				function() {
					$(this).find('.btnCheck').removeClass('icon-unselected').addClass('icon-selected');
				}, function() {
					$(this).find('.btnCheck').removeClass('icon-selected').addClass('icon-unselected');
				}
			);
		}
	}
	function horizontalBBB() {
		modulo = $body.find('.horizontal-bbb.mod-horizontal');
		// registra evento no botão abrir/fechar bloco
		modulo.find('.btnCloseNews').on('click', function() {
	      var action;
				if( modulo.hasClass('bbbCloseNews') ) {
	        action = 'abrir';
					// remove classe que oculta noticias
					modulo.removeClass('bbbCloseNews bbbModuloGray bg30');
					// remove storage do módulo
					storage.removeItem('moduloBBB');
				} else {
	        action = 'fechar';
					// adiciona classe que oculta notícias
					modulo.addClass('bbbCloseNews');
					// grava storage do módulo
					storage.setItem('moduloBBB', false);
					// se não existir módulo de votação, adiciona classe para desativar cores do módulo
					if( modulo.find('#horizontal-bbb-votacao').length == 0 ) {
						modulo.addClass('bbbModuloGray bg30');
					}
				}
				// toggle box notícias
				modulo.find('.horizontal-bbb-news').slideToggle();
	      window.echo && echo.throttle();
        // GA
		    var actionMetrics = false,
		        category = false,
		        area = false,
		        label = false,
		        position = false,
		        modMetrics = modulo.data('metrics');
		    actionMetrics = 'clique';
		    area = modMetrics.replace(/(mod.*)(;)(.*)/,'$3');
		    category = 'bloco-editorial-bbb';
		    position = 'topo-modulo';
		    label = action + '-bloco';
		    metricsGA({
		      'action': actionMetrics,
		      'category': category,
		      'area': area,
		      'label': label,
		      'position': position
		    });
		});
		// tratamento para votação do paredão
		modVotacaoBBB();
	}
	return function() {
		horizontalBBB();
	}
});
        /*! @source /camaleao/assets/web/javascript/modules/horizontal-frases.js */
        homeUOL.register('horizontalFrases', ['jquery', 'uniqueId', 'metrics', 'clickuol'],
  function($, uniqueId, metrics, clickuol) {
  var TIMEOUT_SLIDER,         // ID do setTimeout do slider
      SLIDER_PAG = 0,         // Páginação do slider (de 0 a 4)
      SLIDER_STARTED = false, // Flag que indica se o slider foi iniciado
      SLIDES_MAX = 0;
  var $arrowLeftClick,
      $arrowRightClic,
      $scopeSliderContainer,
      $sliderContainer,
      $modules,
      $thumbs,
      $clickThumbs,
      $phrasesContainer;
  /**
   * Executa a animação do slider
   *
   * @param {Number} delay => tempo de atraso até executar a animação
   * @param {String} direction => direção da animação (left ou right)
   * @param {Boolean} singleSlide => se for true apenas um slide é efetuado
   * @param {Boolean} item => false caso o item não seja utilizado e a referência numérica do thumb caso seja utilizado
   * @param {Boolean} autoPlay => se for true ativa o auto play do carrocel
   *
   */
  function move(delay, direction, singleSlide, item, autoPlay) {
    clearTimeout(TIMEOUT_SLIDER);
    TIMEOUT_SLIDER = setTimeout(function() {
      if(!SLIDER_STARTED) {
        return;
      }
      SLIDES_MAX = $thumbs.parent().data('length') - 1 || 0;
      switch (direction) {
        case 'left':
          SLIDER_PAG = $thumbs.parent().data('item') - 1;
          SLIDER_PAG = SLIDER_PAG === -1 ? SLIDES_MAX : SLIDER_PAG;
        break;
        case 'right':
          SLIDER_PAG = $thumbs.parent().data('item') + 1;
          SLIDER_PAG = SLIDER_PAG === (SLIDES_MAX + 1) ? 0 : SLIDER_PAG;
        break;
        case 'thumb':
          SLIDER_PAG = item;
          SLIDER_PAG = SLIDER_PAG === (SLIDES_MAX + 1) ? 0 : SLIDER_PAG;
        break;
      }
      if(autoPlay) {
        $sliderContainer.removeClass('animVisible');
        $sliderContainer.each(function(idx, el) {
          $(el).parents('.mod-frases').find('.thumbs .actual')
            .removeClass('actual bg2').addClass('bg5').end();
        })
      } else {
        $thumbs.parent().data('item', SLIDER_PAG);
        $scopeSliderContainer.removeClass('animVisible');
        $thumbs.filter('.actual').removeClass('actual bg2').addClass('bg5').end();
      }
      var slidePosition;
      setTimeout(function() {
        if(autoPlay) {
          $sliderContainer.each(function(idx, el) {
            var item = $(el).parents('.mod-frases').find('.thumbs').data('item') + 1;
            item = item === (SLIDES_MAX + 1) ? 0 : item;
            slidePosition = -(item * 1190);
            $(el).css('left', slidePosition+'px').addClass('animVisible');
            $(el).parents('.mod-frases')
              .find('.thumb').eq(item).addClass('actual bg2').removeClass('bg5').end();
            $(el).parents('.mod-frases').find('.thumbs').data('item', item);
          })
        } else {
          slidePosition = -(SLIDER_PAG * 1190);
          $scopeSliderContainer.css('left', slidePosition+'px').addClass('animVisible');
          $thumbs.eq(SLIDER_PAG).addClass('actual bg2').removeClass('bg5').end();
        }
      }, 300);
      if(!singleSlide) {
        move(5000, 'right', false, false, true);
      }
    }, delay);
  }
  /**
   * Controla a ação de mover o mouse por cima do slider para interromper a animação
   */
  function sliderListener() {
    $phrasesContainer.on('mouseover', function() {
      clearTimeout(TIMEOUT_SLIDER);
      SLIDER_STARTED = false;
    }).on('mouseout', function(){
      SLIDER_STARTED = true;
      $thumbs = $(this).find('.thumb');
      move(5000, 'right', false, false, true);
    });
    // eventos de click nas setinhas do slider
    $arrowLeftClick.on('click', function(){
      $scopeSliderContainer = $(this).parent().find('.inner-container');
      $thumbs = $(this).parents('.mod-frases').find('.thumb');
      slideLeft();
    });
    $arrowRightClick.on('click', function(){
      $scopeSliderContainer = $(this).parent().find('.inner-container');
      $thumbs = $(this).parents('.mod-frases').find('.thumb');
      slideRight();
    });
    $clickThumbs.on('click', function(){
      $scopeSliderContainer = $(this).parents('.mod-frases').find('.inner-container');
      $thumbs = $(this).parent().find('.thumb');
      slideThumb($(this).index());
    });
  }
  /**
   * Move o slider para a esquerda
   */
  function slideLeft(){
    SLIDER_STARTED = true;
    move(1, 'left', true);
  }
  /**
   * Move o slider para a direita
   */
  function slideRight(){
    SLIDER_STARTED = true;
    move(1, 'right', true);
  }
   /**
   * Move o slider para a esquerda
   */
  function slideThumb(self){
    SLIDER_STARTED = true;
    move(1, 'thumb', true, self);
  }
  return function($module) {
    $modules = $module;
    $arrowLeftClick = $module.find('.icon-single-arrow-left');
    $arrowRightClick = $module.find('.icon-single-arrow-right');
    $sliderContainer = $('.mod-frases').find('.inner-container');
    $clickThumbs = $module.find('.thumbs .thumb');
    $phrasesContainer = $module;
    sliderListener();
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/topo.js */
        homeUOL.register('homeTopo', ['jquery', 'metrics-ga', 'Suggest', 'clickuol', 'ga'], function($, metricsGA, Suggest, clickuol, GA) {
  var $body = $('body');
  /**
   * Elemento onde o módulo será aplicado.
   * @type {DOM}
   */
  var moduleElementSearch;
  /**
   * Elemento onde há template mustache.
   * @type {DOM}
   */
  var moduleContainerSearch;
  /**
   * Template Mustache do módulo.
   * @type {Mustache Parsed Template}
   */
  var moduleTemplateSearch;
  /**
   * Elemento do formulário de busca de cidade.
   * @type {DOM}
   */
  var suggestFormSearch;
  /**
   * Template Mustache dos módulos de notificação de email.
   * @type {Mustache Parsed Template}
   */
  var tplBar, tplForm;
  /**
   * Elemento container dos módulos de notificação de email
   * @type {DOM}
   */
  var $notificationForm, $notificationBar;
  /*
   * Elemento link para criar e-mail
   */
  var $criaEmail;
  /**
   * Contabiliza acessos ao login WebMail.
   * @param {jQuery Element} $topo Elemento onde o formulário está
   */
  function applyEmailMetrics($topo) {
    var $form = $topo.find('form[name="formEmail"]');
    var $button = $form.find('input.buttonSubmit');
    $button.on('click', function(e) {
      e.stopImmediatePropagation();
    });
    $form.on('submit', function(e) {
      //força url action
      $form.attr("action","https://acesso.uol.com.br/login.html?skin=webmail")
      metricsGA({
        'action': $form.attr('action'),
        'category': 'header',
        'area': 'header',
        'label': 'email-entrar',
        'position': 'coluna-unica'
      });
      e.stopImmediatePropagation();
    })
  }
  /**
   * Cria instância de suggest para a busca de cidades.
   * @param {jQuery Dom} form
   */
  function applySuggestSearch($topo) {
      // elementos que serão usados para filtro
      var $form = $topo.find('form[name="formBusca"]');
      var suggestIntance = new Suggest($form.get(0), {
      "source"        : [{txt : 'Web'}, {txt : 'Imagens'}, {txt : 'UOL'}, {txt : 'Dicionários'}, {txt: 'Domínios'}],
      "cache"         : true,
      "max_results"   : 10,
      "normalize"     : false,
      "class_current" : "bg14",
      "item"          : function(item) {
        return item.txt;
      },
      "match" : function(item, query) {
        // sempre exibe os itens de busca
        if(/^(Web|Imagens|UOL|Dicionários|Domínios)$/.test(item) === true) {
          return true;
        }
        var normalize = Suggest.normalizeString;
        item = normalize(item, false);
        query = normalize(query, false);
        return new RegExp(query).test(item);
      },
      "markup" : function(item, query) {
        var txt = item.txt;
        if(/^(Web|Imagens|UOL|Dicionários|Domínios)$/.test(txt) === true) {
          var ob = (function() {
            if(txt == 'Web')
              return {
                p : 'na',
                u : 'https://busca.uol.com.br/result.html#web'
              };
            if(txt == 'Imagens')
              return {
                p : 'em',
                u : 'https://busca.uol.com.br/result.html#imagem'
              };
            if(txt == 'UOL')
              return {
                p : 'no',
                u : 'https://busca.uol.com.br/result.html#uol'
              };
            if(txt == 'Dicionários')
              return {
                p : 'em',
                u : 'https://busca.uol.com.br/#dicionario'
              };
            if(txt == 'Domínios') {
              return {
                a : 'Registrar',
                p : 'em',
                u : 'https://venda.host.uol.com.br/searchDomain.html'
              };
            }
          }());
          return '<li class="pointer t-bg fixo"><a class="action" data-action="'+ob.u+'">'+(ob.a || 'Buscar')+' <strong>'+query+'</strong> '+ob.p+' '+txt+'</a></li>';
        }
        return '';
      },
      "onBlank" : function(i) {
        $form.trigger('submit');
        return true;
      },
      "onSelect" : function(item, event) {
        var action = $(item).find('.action').data('action');
        if(action !== undefined) {
          //console.log(action)
          // troca o action do formulário
          $form.attr('action', action);
          $form.trigger('submit');
        }
        return false;
      },
      'events' : {
        "mouseover" : function(item) {
          jQuery(item).addClass('bg14');
        },
        "mouseout" : function(item) {
          jQuery(item).removeClass('bg14');
        }
      }
    });
  }
  /**
   * Trata os dados da API e os entrega formatados em todos os cenários
   * @param data {Object} JSON respondido pela API
   * @return {Object} JSON tratado
   */
  function handleData(data) {
    data.moreThan = '';
    if(!data.auth.isLogged){
      return data;
    }
    // nomes maiores que 11 caracteres ficam com reticências no final
    if(data.auth.namPerson) {
      data.name = data.auth.namPerson.split(' ')[0];
      data.name = data.name.length > 11 ?  data.name.slice(0,11) + '...' : data.name;
    }
    // trata as mensagens que são apresentadas ao usuário de acordo
    // com o número de emails
    data.count = data.auth.emails.counter;
    if (typeof(data.count) !== 'number'  || !data.auth.isLogged) {
        data.count = 0;
    }
    data.countStr = data.count + '';
    if(data.count === 0) {
      data.hasEmail = 'no-email';
      data.messagePrefix = 'você não tem novos e-mails';
      data.countStr = '';
    } else if(data.count === 1) {
      data.hasEmail = 'has-email';
      data.messagePrefix = 'você tem';
      data.messageSuffix = 'novo e-mail';
    } else {
      if(data.count > 9 && data.count < 100) {
        data.moreThan = 'more-than-10';
      } else if(data.count > 99){
        data.moreThan = 'more-than-100';
        data.countStr = '99+';
      }
      data.hasEmail = 'has-email';
      data.messagePrefix = 'você tem';
      data.messageSuffix = 'novos e-mails';
    }
    return data;
  }
  // sucesso no request na api de notificação
  function notificationSuccess(data) {
    data = handleData(data);
    data.url = data.auth.emails.url || 'https://email.uol.com.br/';
    $notificationBar.addClass('active').html(Mustache.render(tplBar, data));
    clickuol($notificationBar);
    GA($notificationBar);
    if(data.hasOwnProperty('auth') && data.auth.hasOwnProperty('isLogged')){
      try {
        var maxChars = 13;
        data.name = data.name.toLowerCase();
        if(data.name.length > maxChars) {
          data.name = data.name.slice(0,maxChars) + '...';
        }
      } catch(e) { }
      $notificationForm.find('.default').addClass('hide');
      $notificationForm.find('.notification-data').addClass('active').html(Mustache.render(tplForm, data));
      $criaEmail.addClass('hide');
      clickuol($notificationForm);
      GA($notificationForm);
    } else {
      notificationFormReset();
    }
  }
  // mostra o formulário de notificação
  function notificationFormReset() {
    $notificationForm.find('.default').removeClass('hide');
    $criaEmail.removeClass('hide');
    $notificationForm.find('.notification-data').removeClass('active').html("");
    clickuol($notificationForm);
    GA($notificationForm);
  }
  // limpa a notificação de emails da barra
  function notificationBarReset() {
    $notificationBar.addClass('active').html(Mustache.render(tplBar, {url: 'https://email.uol.com.br'}));
    clickuol($notificationBar);
    GA($notificationBar);
  }
  // erro no request na api de notificação
  function notificationError(e) {
    console.log('--- error bar ---', e);
  }
  // incializa o módulo de suggest na busca
  return function(moduleSearch, templateContainerSearch, templateMarkupSearch) {
    moduleElementSearch   = moduleSearch;            // container do módulo
    moduleContainerSearch = templateContainerSearch; // container do template
    moduleTemplateSearch  = templateMarkupSearch;    // string do template
    // aplica Suggest no formulário
    applySuggestSearch(moduleSearch);
    // aplica métricas no login do webmail
    applyEmailMetrics(moduleSearch);
    window.updateNotification = function(data){
      tplBar = $('#tpl-notification-bar').html();
      tplForm = $('#tpl-notification-form').html();
      $notificationForm = moduleSearch.find('[data-module="notificationForm"]');
      $notificationBar = moduleSearch.find('[data-module="notificationBar"]');
      $criaEmail = moduleSearch.find('.header-uolmail-crie');
      if(data){
        // se usuário estiver deslogado
        if(data.auth.isLogged !== true){
          // reseta form de e-mail
          notificationFormReset();
          // reseta notificação de e-mail
          notificationBarReset();
          $(".container-superior .bar-notification").show()
          return false;
        }
        // se estiver logado e não for email do UOL, retorna
        var emailUOL = data.auth.email && data.auth.email.match(/\@uol\.com\.br/)
        if(!emailUOL){
          // se não for email do uol esconde o icone email
          $(".container-superior .bar-notification").hide()
          return false;
        }
        notificationSuccess(data);
      }
    }
    updateNotification();
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/menu-vertical.js */
        homeUOL.register('menuVertical', ['jquery', 'clickuol', 'ga', 'metrics-ga'], function($, clickuol, GA, metricsGA) {
  var $body;
  /**
   * Menu vertical (onde o módulo será aplicado)
   * @type {jQuery Object}
   */
  var $allMenuVertical;
  /**
   * Clona links do menu principal e
   * adiciona no menu vertical
   */
  function clonaMenuPrincipal(menuPrincipal, menuVertical) {
    var clone = menuPrincipal.clone().attr('style','');
    var html  = '<div class="menu-uol-item-content">' + clone.html() + '</div>';
    var metrics = menuVertical.data('metrics');
    var container = menuVertical.parent();
    if(metrics) {
      metrics = metrics.split(';')[0];
    }
    // remove click uol
    html = html.replace(/http:\/\/click\.uol\.com\.br\/\?.+?&amp;?u=/g, '');
    // adiciona a posição do horizontal no metrics
    html = html.replace(/data-metrics="/g, 'data-metrics="'+metrics+';');
    // troca o name para o clickuol
    html = html.replace(/name="([^"]+)"/g, 'name="button-$1"');
    container.append(html);
    clickuol(container, true);
    GA(container, true);
  }
  /*
   * Faz com que todos os .content-block do submenu tenham a mesma altura
   */
  function configBlocksHeight($submenu) {
    var $contentBlocks = $submenu.find('.content-block');
    // aplica a maior altura encontrada a todos .content-block deste $submenu
    $contentBlocks.height(findBlocksMaxHeight($contentBlocks));
  }
  /*
   * Retorna a maior altura da coleção de elementos recebida
   */
  function findBlocksMaxHeight($contentBlocks) {
    var maxHeight = 0;
    // percorre todos os .content-block procurando pela maior altura
    $contentBlocks.each(function(index, el){
      maxHeight = Math.max(maxHeight, $(el).height());
    });
    return maxHeight;
  }
  /**
   * Oculta menu vertical
   */
  function hideMenuVertical() {
    $allMenuVertical.removeClass('show').parent().find('.menu-uol-item-content').removeClass('show');
    $allMenuVertical.parent().removeClass('open');
    // Encerra evento no body para ocultar menu vertical
    $body.off('click.menuVertical');
  }
  /**
   * Exibe/Oculta menu vertical
   */
  function showHideSubmenu(menuVertical) {
    var show = menuVertical.hasClass('show');
    hit(menuVertical, !show);
    hideMenuVertical();
    if(show == false) {
      // Exibe menu vertical
      menuVertical.addClass('show');
      var menuVerticalContainer = menuVertical.parent();
      menuVerticalContainer.addClass('open').find('.menu-uol-item-content').addClass('show');
      echo.addImages(menuVerticalContainer);
      // Registra evento no body
      $body.on('click.menuVertical', bodyCloseMenu);
    }
    // configura todos os .content-block do $submenu para que todos tenham o mesmo height
    configBlocksHeight(menuVertical.parent());
  }
  /**
   * Evento no body para fechar menu vertical
   */
  function bodyCloseMenu(event) {
    if($(event.target).closest('.menu-uol-vertical').size() === 0) {
      hideMenuVertical();
      $body.off('click.menuVertical');
    }
  }
  function openMenu(event) {
    event.preventDefault();
    // Menu atual
    var $menuVertical = $(this);
    // Área clicada (utilizado para saber qual elemento clonar do menu principal)
    var $area = $menuVertical.data("area");
    // Verifica se já existe submenu. Caso não exista, clona do menu principal
    if( $menuVertical.parent().find('.menu-uol-item-content').length ) {
      showHideSubmenu($menuVertical);
    } else {
      // Links do menu principal
      var $menuPrincipal = $('.menu-uol').find("div[data-menu='" + $area + "']");
      // clona submenu do menu principal
      clonaMenuPrincipal($menuPrincipal, $menuVertical);
      // exibe submenu
      showHideSubmenu($menuVertical);
    }
  }
  function hit(menu, show) {
      var mod = menu.data('metrics') || "";
      // GA
      var action = false,
          category = false,
          area = false,
          label = false,
          position = false;
      action = 'clique';
      area = mod.replace(/(mod.*)(;)(.*)/,'$3');
      category = 'menu';
      position = 'topo-modulo';
      label = 'menu-bloco-' + (show ? 'abrir' : 'fechar');
      metricsGA({
        'action': action,
        'category': category,
        'area': area,
        'label': label,
        'position': position
      });
  }
  return function menuVertical() {
    'use strict'
    $body = $('body');
    $('.menu-vertical-cabecalho[data-area=""]').remove();
    $allMenuVertical = $('.menu-vertical-cabecalho');
    // Evento click para menu vertical
    $allMenuVertical.on('click', openMenu);
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/block-anchors.js */
        homeUOL.register('blockAnchors', ['jquery', 'metrics-ga'], function($, metricsGA) {
  var $corpo, $body, $areas, $anchors, $module;
  /** copyright underscore */
  var underHas = function(obj, key) {
    return obj != null && obj.hasOwnProperty(key);
  }
  var objectKeys = function(obj) {
    var type = typeof obj;
    if (!(type === 'function' || type === 'object' && !!obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (underHas(obj, key)) keys.push(key);
    return keys;
  };
  jQuery.extend( jQuery.easing, {
    'easeOutQuint': function (x, t, b, c, d) {
      return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    'easeOutQuart': function (x, t, b, c, d) {
      return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    'easeOutQuad': function (x, t, b, c, d) {
      return -c *(t/=d)*(t-2) + b;
    }
  });
  function onClickAnchor() {
    $anchors.filter(':not(.inactive)').addClass('moving');
    var areaName = $(this).data('area');
    // Se areaName for 'topo', areaContainer = $body.
    var areaContainer = areaName == 'topo' ? $body : $areas.filter('[data-area="'+areaName+'"]');
    if( areaContainer.length == 0 ){
      return;
    }
    // if(areaName == 'topo') {
    //   // redireciona para o header
    //   areaContainer = $body;
    // }
    // faz o scrol
    $('html, body').animate({
      scrollTop: (areaContainer.offset().top - 13) + 'px'
    }, 700, 'easeOutQuart', function () {
      $anchors.filter('.moving').removeClass('moving');
    });
    metricsGA({
      'action': 'clique',
      'category': 'interacao',
      'area': areaName,
      'label': 'anchors',
      'position': 'flutuante'
    });
  }
  function handlerVisibleBlock(el) {
    $anchors.addClass('inactive');
    if(el) {
      var area  = el.getAttribute('data-area');
      if(area) {
        $anchors.filter('[data-active~="'+area+'"]').removeClass('inactive');
      }
    }
  }
  function isBlockVisible(el) {
    var el   = $(this);
    var area = this.getAttribute('data-area');
    var offsetTop = el.offset().top;
    var windowTop = $(window).scrollTop();
    var elHeight = el.height() + parseInt(el.css('paddingTop').replace('px', '')) + parseInt(el.css('paddingBottom').replace('px', ''));
    if ( ( offsetTop - 450 <= windowTop ) && ( offsetTop +  elHeight > windowTop ) ) {
      //handlerVisibleBlock(this);
      return true;
    } else {
      //$anchors.filter('[data-area="'+area+'"]').addClass('inactive');
      return false;
    }
  }
  function objToArray(obj) {
    var arr = [];
    var i;
    for(i in obj) {
      if(obj.hasOwnProperty(i) === true) {
        arr.push(i);
      }
    }
    return arr;
  }
  function init() {
    var scrollTimeout;
    var onScrollEvent = function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(scrollEvent, 50);
    }
    var scrollEvent = function() {
      var scrollTop   = $(window).scrollTop();
      var areasAtivas = {};
      var index       = $areas.size();
      var scrollWay   = scrollTop > lastScrollPos ? 'bottom' : 'top';
      var blockAtivo;
      lastScrollPos = scrollTop;
      while( index-- ) {
        if( isBlockVisible.call($areas.get(index)) === true ) {
          areasAtivas[index] = true;
        }
      }
      var arrAreasAtivas = objToArray(areasAtivas);
      // possuem duas áreas ativas
      if( objectKeys(areasAtivas).length > 1 ) {
        // se o scroll foi para cima (em direção ao header), define a área de
        // cima como ativa, já que o usuário navega para lá
        if(scrollWay == 'top') {
          blockAtivo = arrAreasAtivas[0];
        } else {
          blockAtivo = arrAreasAtivas[1];
        }
      } else {
        blockAtivo = arrAreasAtivas[0];
        if(!blockAtivo && scrollTop < $areas.eq(0).offset().top) {
          // se o scroll está acima do primeiro horizontal, define o primeiro
          // item como ativo.
          blockAtivo = 0;
        }
      }
      handlerVisibleBlock(blockAtivo !== undefined ? $areas.get(blockAtivo) : undefined);
    };
    var lastScrollPos = 0;
    $(window).on('scroll resize', onScrollEvent);
    hevents.on('ready', onScrollEvent);
    // apenas inicia o módulo, o posicionamento agora é por css
    hevents.on('ready', function(){
      $module.addClass('show')
    });
    $module.on('click', 'li', onClickAnchor).addClass('show');
  }
  function checkIfIsVisible() {
    // console.log($module.is(':visible'))
    if($module.is(':visible') === true) {
      init();
      $(window).off('resize', checkIfIsVisible)
      checkIfIsVisible = $.noop;
    }
  }
  return function(module) {
    $module  = module;
    $corpo   = $('#corpo');
    $body    = $('body');
    $areas   = $corpo.find('.mod-horizontal[data-area]');
    $anchors = module.find('li');
    $(window).on('resize', checkIfIsVisible);
    checkIfIsVisible();
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/horizontais-gerais/tab.js */
        homeUOL.register('tab', ['swfobject'], function(swfobject) {
  'use strict';
  function video(module) {
    var media = module.find('.media');
    var swf   = media.data('video') ;
    if(swf && swfobject.hasFlashPlayerVersion('9.0') === true) {
      media.html('<div id="horizontal-tab-media"></div>');
      // adiciona o flash
      swfobject.embedSWF(swf, 'horizontal-tab-media', '100%', '100%', '9.0', null, null, {
        'wmode': 'opaque',
        'allowfullscreen': 'true',
        'allowscriptaccess': 'always',
        'quality': 'best',
        'autoplay': true
      });
    }
  }
  return function(module) {
    module.lazyany(function lazyTabModule() {
      module.find('.like').html( '<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fuoltab&amp;width=55&amp;layout=button&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=35&amp;appId=105376512840036&amp;locale=pt_BR" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:60px; height:35px;" allowTransparency="true"></iframe>' );
      video(module);
    });
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/horizontais-gerais/ao-vivo.js */
        homeUOL.register('aovivo', ['uniqueId'], function(uniqueId) {
  'use strict';
  var TIME_TO_CHANGE = 5000;
  var modules = {};
  function init(module) {
    var $itens = module.find('.item'),
      id = 'mod-' + uniqueId();
    modules[id] = {
      module: module,
      $itens: $itens,
      $navs: module.find('.nav-item'),
      next: next(id),
      show: show(id),
      start: start(id),
      stop: stop(id),
      mouse: 'out'
    };
    module.data('id', id);
    module.on('click', '.nav-item', clickShow);
    module.on('mouseover mouseenter mouseout', mouseEvent);
    modules[id].start();
  }
  function mouseEvent(event) {
    var $item = $(this),
      id = $item.closest('.module').data('id'),
      module = modules[id];
    switch(event.type) {
      case 'mouseover':
      case 'mouseenter':
        module.mouse = 'in';
        module.stop();
        break;
      case 'mouseout':
        module.mouse = 'out';
        module.start();
        break;
    }
  }
  function clickShow() {
    var $item = $(this),
      id = $item.closest('.module').data('id'),
      module = modules[id];
    module.show($item.data('index'));
  }
  function next(id) {
    return function instanceNextItem() {
      var module = modules[id],
        ativo = module.$itens.filter('.ativo'),
        next = ativo.next();
      module.stop();
      next = next.size() === 0 ? 1 : next.data('index');
      module.show(next);
    }
  }
  function show(id) {
    return function instanceShowItem(index) {
      var module = modules[id],
        $itens = module.$itens,
        $navs = module.$navs;
      $itens.removeClass('ativo').eq(index - 1).addClass('ativo');
      // nav
      $navs.removeClass('ativo').eq(index - 1).addClass('ativo')
      module.start();
    }
  }
  function stop(id) {
    return function instanceStop() {
      var module = modules[id];
      clearTimeout(module.timeout);
    }
  }
  function start(id) {
    return function instanceStart() {
      var module = modules[id];
      if(module.mouse == 'in') {
        return;
      }
      module.stop();
      module.timeout = setTimeout(module.next, TIME_TO_CHANGE);
    }
  }
  return init;
});
        /*! @source /camaleao/assets/web/javascript/modules/horizontal-padrao/rotativo.js */
        homeUOL.register('horizontalRotativo',
  ['jquery', 'uniqueId', 'cssAnimSupport', 'clickuol'],
  function($, uniqueId, cssAnimSupport, clickuol) {
  var classVisible = cssAnimSupport() === true ? 'animVisible' : 'visible';
  var classActualThumb = 'actual bg2';
  function loadImage(item) {
    var $imagem = item.find('.imagem');
    if($imagem.hasClass('loaded') === false) {
      $imagem.attr('src', $imagem.attr('data-original') || $imagem.attr('data-src')).addClass('loaded');
    }
  }
  var rotativo = {
    // rotativos instanciados
    instances : {},
    // tempo para trocar as imagens
    time_change : 7000,
    // tempo da animação fade
    time_fade : 300,
    // retorna a instância do rotativo
    getInstance: function(id) {
      return this.instances[id];
    },
    init : function(id) {
      var self = this;
      // registra uma instancia
      if( !this.instances[id] ) {
        var $el = $('#'+id),
          $viewport = $el.find('.viewport'),
          $thumbs = $el.find('.thumbs .thumb'),
          $container = $el.find('.inner-container'),
          $items = $viewport.find('li'),
          $seeLater = $el.find('.uol-see-later');
        if(cssAnimSupport() === true) {
          $el.addClass('cssAnimSupport');
        }
        this.instances[id] = {
          id           : id,
          element      : $el,
          viewport     : $viewport,
          timecontrol  : null,
          items        : $items,
          total_items  : $items.length,
          thumbs       : $thumbs,
          bar_thumb    : $el.find('.thumb-selected'),
          old_thumb    : null,
          actual       : $thumbs.filter('.actual').data('item') || 0,
          ismouseover  : false,
          showed       : 1,
          can_click    : true,
          mouseOnBtn   : false,
          mouseOnImg   : false
        }
        var instance = this.instances[id];
        var itemActual = instance.actual;
        // define primeiro thumb como ativo
        $thumbs.eq(itemActual).addClass(classActualThumb).removeClass('bg5');
        $items.eq(itemActual).addClass(classVisible);
        if(instance.total_items == 1) {
          delete this.instances[id];
          return false;
        }
        loadImage($items.eq(itemActual));
        $container.find('.imagem, .btn-img').on('mouseover mouseout touchend', function(ev) {
          switch(ev.type) {
            case 'mouseover':
            case 'touchend':
              $container.addClass('hover');
              break;
            case 'mouseout':
              $container.removeClass('hover');
              break;
          }
        });
        // aplica evento nos botoes next/prev
        $el.on('click', '.btn-left', function(){
          rotativo.prev(id);
          rotativo.register(id);
        });
        $el.on('click', '.btn-right',function(){
          rotativo.next(id);
          rotativo.register(id);
        });
        // aplica eventos nos thumbs
        $thumbs.on('click', function(ev) {
          var dataItem = parseInt(this.getAttribute('data-item'));
          self.goTo(id, dataItem, false);
          return false;
        });
        // faz a pausa do rotativo quando o mouse ficar em cima
        // da imagem grande
        $el.on('mouseover mouseout', function(ev) {
          // verifica se há a classe indicando um menu contextual do "ver depois" aberto
          var seeLaterOpened = $el.hasClass('seeLaterOpened');
          switch(ev.type) {
            case "mouseover":
              self.pause(id);
              break;
            // só reinicia se o menu não estiver aberto
            case "mouseout":
              !seeLaterOpened && self.register(id);
              break;
          }
        });
        // inicia a troca de imagens se tem mais de um item
        if( instance.total_items > 1 ){
          this.register(id);
        }else{
          $el.addClass('singleItem');
        }
        // escuta evento customizado para saber se o menu contextual do "ver depois" está aberto ou fechado
        $seeLater.on('uol-see-later',function(e){
          var evt = e.originalEvent;
          // se receber os dados da lib seeLater
          if(evt && evt.detail){
            // ao fechar, remove classe no parent do rotativo
            if(evt.detail.action === 'close'){
              $el.removeClass('seeLaterOpened');
              // reinicia o rotativo, caso ainda esteja paradp
              self.register(id);
            } else {
              // ao abrir, adiciona classe no parent do rotativo
              $el.addClass('seeLaterOpened');
            }
          }
        });
      }
    },
    insertItem: function(id, pos, data) {
      var instance = this.instances[id];
      var thumbs = instance.thumbs;
      var items = instance.items;
      var inserAction = 'insertBefore';
      // faz pausa
      this.pause(id);
      switch(pos) {
        case 'center':
        case 'meio':
          pos = Math.ceil(thumbs.size() / 2) + 1;
          break;
        case 'last':
        case 'ultimo':
          pos = thumbs.size();
          inserAction = 'insertAfter';
          break;
        case 'first':
        case 'primeiro':
          pos = 1;
          break;
        default:
          pos = pos;
          break;
      }
      // insere novo item nos thumbs
      var thumbClone = thumbs.eq(0).clone().removeClass(classActualThumb).addClass('bg5');
      thumbClone[inserAction]( thumbs.eq(pos-1) );
      // insere novo item nas imagems
      var itemClone = items.eq(0).clone().removeClass('animVisible item1').removeAttr('data-vr-contentbox');
      itemClone[inserAction]( items.eq(pos-1) );
      //guarda metrics
      var metrics = itemClone.find('a').attr('data-metrics');
      itemClone.find('a noscript').remove();
      itemClone.find('.title').html(data.titulo).removeAttr('data-vr-excerpttitle');
      itemClone.find('.subtitle').html(data.texto);
      itemClone.find('a')
        .removeAttr('data-metrics')
        .attr('href', data.link)
        .attr('name', itemClone.find('a').attr('name').replace(/item\d/, 'item-pub'));
      itemClone.find('.imagem')
        .attr('src', data.imagem)
        .attr('alt', (data.credito || ''))
        .attr('title', (data.credito || ''));
      // remove o span do seeLater
      itemClone.find('span.uol-see-later').remove();
      if(data.selo) {
        itemClone.append('<span class="selo">Oferecido por <a href="'+data.link+'"><img src="'+data.selo+'" /></a></span>');
      }
      if(data.marca) {
        itemClone.append('<span class="marca">Conteúdo de marca</span>');
      }
      // aplica click uol
      // clickuol(itemClone);
      // atualiza a instancia
      thumbs = instance.element.find('.thumbs .thumb');
      items  = instance.viewport.find('li');
      // remove todos os eventos
      instance.element.find('.imagem, .btn-img').off('mouseover mouseout touchend');
      instance.element.off('click mouseover mouseout');
      thumbs.off('click');
      // remove a instancia
      delete this.instances[id];
      var index = items.length;
      while(index--) {
        thumbs.get(index).setAttribute('data-item', index);
        items.get(index).className = items.get(index).className.replace(/item\d+/, '') + ' item'+(index+1);
      }
      // recria a instancia
      rotativo.init(id);
    },
    pause : function(id) {
      var instance = this.instances[id];
      clearTimeout(instance.timecontrol);
      instance.timecontrol = null;
    },
    register : function(id) {
      var instance = this.instances[id],
        self = this;
      // para o que estiver ocorrendo
      this.pause(id);
      // troca da foto
      instance.timecontrol = setTimeout(function() {
        rotativo.next(id);
      }, this.time_change);
    },
    next : function(id) {
      var instance = this.instances[id],
        item = instance.actual + 1;
      if(item > instance.total_items - 1) {
        item = 0;
      }
      this.goTo(id, item, false);
    },
    prev : function(id) {
      var instance = this.instances[id],
        item = instance.actual - 1;
      if(item < 0) {
        item = instance.total_items - 1;
      }
      this.goTo(id, item, false);
    },
    goTo : function(id, n, preview) {
      var instance = this.instances[id],
        $items = instance.items,
        actual = instance.actual,
        $viewport = instance.viewport,
        $thumbs = instance.thumbs;
      if(actual == n) return false;
      this.pause(id);
      // verifica se vai para direita ou esquerda
      // usa o sentido inverso para dar o efeito correto (slide)
      // var way = n < instance.actual ? 'right' : 'left';
        // item que está entrando
      var $input = $items.eq(n),
        // item que está saindo
        $output = $items.eq(actual);
      $thumbs
        .eq(actual).removeClass(classActualThumb).addClass('bg5')
        .end();
      $thumbs.eq(n).addClass(classActualThumb).removeClass('bg5');
      instance.showed += 1;
      // redefine o item atual
      instance.actual = n;
      // aplica efeitos
      this.fade(id, $input, $output, preview);
      // limpa janelas do seeLater
      if(instance.element && window.seeLater && instance.element.hasClass('seeLaterOpened')){
        seeLater.clear();
      }
    },
    fade : function(id, $input, $output, preview) {
      var self = this,
        instance = this.instances[id],
        $thumb = instance.thumbs.eq(instance.actual),
        $bar_thumb = instance.bar_thumb,
        time_fade = preview == true ? instance.time_fade : instance.time_fade / 2;
      // bloqueia o click no thumb
      instance.can_click = false;
      // Troca classes
      $input.addClass(classVisible);
      $output.removeClass(classVisible);
      loadImage($input);
      if(cssAnimSupport() === true) {
        if(preview == false) self.register(id);
        instance.can_click = true;
      } else {
        $output.stop().fadeOut(self.time_fade, function() {
          // fade in no que entra
          $input.fadeIn(self.time_fade, function() {
            // registra novamente para trocar outra foto
            if(preview == false) self.register(id);
            // libera o click no thumb
            instance.can_click = true;
          });
        });
      }
    }
  }
  /**
   * Adiciona um novo item (publicidade) no rotativo.
   * insertBannerRotativoTopo('first/center/last/<number>', {
   *   "titulo": "",
   *   "texto" : "",
   *   "link"  : "",
   *   "imagem": ""
   * });
   */
  window.insertBannerRotativoTopo = function(pos, data) {
    var element = $('#rotativoTopoBannerHibrido').size() > 0 ? $('#rotativoTopoBannerHibrido') : $('#rotativoTopoBanner');
    var id = element.find('[data-module="horizontalRotativo"]').attr('id');
    var instance = rotativo.getInstance(id);
    // Conteúdo de marca exibido apenas no rotativo do topo híbrido
    data.marca = $('#rotativoTopoBannerHibrido').size() > 0;
    rotativo.insertItem(instance.id, pos ? pos : 1, data);
  }
  return function(module) {
    // define id para o rotativo
    if(module.attr('id') === undefined) {
      module.attr('id', 'horizontal-rotativo-i' + uniqueId());
    }
    rotativo.init(module.attr('id'));
  };
});
        /*! @source /camaleao/assets/libs/shim/mutationobserver.js */
        // mutationobserver-shim v0.3.2 (github.com/megawac/MutationObserver.js)
// Authors: Graeme Yeates (github.com/megawac) 
window.MutationObserver=window.MutationObserver||function(w){function v(a){this.i=[];this.m=a}function I(a){(function c(){var d=a.takeRecords();d.length&&a.m(d,a);a.h=setTimeout(c,v._period)})()}function p(a){var b={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null},c;for(c in a)b[c]!==w&&a[c]!==w&&(b[c]=a[c]);return b}function J(a,b){var c=C(a,b);return function(d){var f=d.length,n;b.a&&3===a.nodeType&&
a.nodeValue!==c.a&&d.push(new p({type:"characterData",target:a,oldValue:c.a}));b.b&&c.b&&A(d,a,c.b,b.f);if(b.c||b.g)n=K(d,a,c,b);if(n||d.length!==f)c=C(a,b)}}function L(a,b){return b.value}function M(a,b){return"style"!==b.name?b.value:a.style.cssText}function A(a,b,c,d){for(var f={},n=b.attributes,k,g,x=n.length;x--;)k=n[x],g=k.name,d&&d[g]===w||(D(b,k)!==c[g]&&a.push(p({type:"attributes",target:b,attributeName:g,oldValue:c[g],attributeNamespace:k.namespaceURI})),f[g]=!0);for(g in c)f[g]||a.push(p({target:b,
type:"attributes",attributeName:g,oldValue:c[g]}))}function K(a,b,c,d){function f(b,c,f,k,y){var g=b.length-1;y=-~((g-y)/2);for(var h,l,e;e=b.pop();)h=f[e.j],l=k[e.l],d.c&&y&&Math.abs(e.j-e.l)>=g&&(a.push(p({type:"childList",target:c,addedNodes:[h],removedNodes:[h],nextSibling:h.nextSibling,previousSibling:h.previousSibling})),y--),d.b&&l.b&&A(a,h,l.b,d.f),d.a&&3===h.nodeType&&h.nodeValue!==l.a&&a.push(p({type:"characterData",target:h,oldValue:l.a})),d.g&&n(h,l)}function n(b,c){for(var g=b.childNodes,
q=c.c,x=g.length,v=q?q.length:0,h,l,e,m,t,z=0,u=0,r=0;u<x||r<v;)m=g[u],t=(e=q[r])&&e.node,m===t?(d.b&&e.b&&A(a,m,e.b,d.f),d.a&&e.a!==w&&m.nodeValue!==e.a&&a.push(p({type:"characterData",target:m,oldValue:e.a})),l&&f(l,b,g,q,z),d.g&&(m.childNodes.length||e.c&&e.c.length)&&n(m,e),u++,r++):(k=!0,h||(h={},l=[]),m&&(h[e=E(m)]||(h[e]=!0,-1===(e=F(q,m,r,"node"))?d.c&&(a.push(p({type:"childList",target:b,addedNodes:[m],nextSibling:m.nextSibling,previousSibling:m.previousSibling})),z++):l.push({j:u,l:e})),
u++),t&&t!==g[u]&&(h[e=E(t)]||(h[e]=!0,-1===(e=F(g,t,u))?d.c&&(a.push(p({type:"childList",target:c.node,removedNodes:[t],nextSibling:q[r+1],previousSibling:q[r-1]})),z--):l.push({j:e,l:r})),r++));l&&f(l,b,g,q,z)}var k;n(b,c);return k}function C(a,b){var c=!0;return function f(a){var k={node:a};!b.a||3!==a.nodeType&&8!==a.nodeType?(b.b&&c&&1===a.nodeType&&(k.b=G(a.attributes,function(c,f){if(!b.f||b.f[f.name])c[f.name]=D(a,f);return c})),c&&(b.c||b.a||b.b&&b.g)&&(k.c=N(a.childNodes,f)),c=b.g):k.a=
a.nodeValue;return k}(a)}function E(a){try{return a.id||(a.mo_id=a.mo_id||H++)}catch(b){try{return a.nodeValue}catch(c){return H++}}}function N(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c}function G(a,b){for(var c={},d=0;d<a.length;d++)c=b(c,a[d],d,a);return c}function F(a,b,c,d){for(;c<a.length;c++)if((d?a[c][d]:a[c])===b)return c;return-1}v._period=30;v.prototype={observe:function(a,b){for(var c={b:!!(b.attributes||b.attributeFilter||b.attributeOldValue),c:!!b.childList,g:!!b.subtree,
a:!(!b.characterData&&!b.characterDataOldValue)},d=this.i,f=0;f<d.length;f++)d[f].s===a&&d.splice(f,1);b.attributeFilter&&(c.f=G(b.attributeFilter,function(a,b){a[b]=!0;return a}));d.push({s:a,o:J(a,c)});this.h||I(this)},takeRecords:function(){for(var a=[],b=this.i,c=0;c<b.length;c++)b[c].o(a);return a},disconnect:function(){this.i=[];clearTimeout(this.h);this.h=null}};var B=document.createElement("i");B.style.top=0;var D=(B="null"!=B.attributes.style.value)?L:M,H=1;return v}(void 0);
//# sourceMappingURL=mutationobserver.map
        /*! @source /camaleao/assets/libs/see-later/see-later.js */
        (function(window) {
  'use strict';
  /*
   * Variáveis globais são definidas no init
   */
  var strSelector, selector, contextMenu, strContainer;
  /*
   * Variáveis globais definidas pelos métodos do Ver depois
   */
  var activeButton, article, msgContainer;
  /*
   * Variável global com histórico de link salvo do usuário
   */
  var userSavedSeeLater = null;
  /*
   * Constante que seta a largura do menu
   */
  var MENUWIDTH = 240;
  /*
   * Constante com path dos ícones em SVG
   */
  var PATHSVG = "//hp.imguol.com.br/c/home/layout/camaleao/web/svg/icons-see-later.v6.svg";
  /*
   * Variável para controle de plataforma
   */
  var isMobile = false;
  /*
   * Variável para validações de teste
   */
  var version = "1.0.1";
  /*
   * Variável para validações de teste
   */
  var isDebug = false;
  /*
   * Variável para controlar se está exibindo o modal de login
   */
  var showingModalLogin = false;
  /**
   * Define a data atual e retorna-a formatada (dd/MM/yyyy)
   */
  var dateNow = (function(){
    var d;
    var getFormatDate = function(d){
      return d.day +'/'+ d.month +'/' + d.year;
    }
    var twoDigits = function(num){
      return (num.toString().length == 1 ? "0" : "") + num;
    }
    if(window.serverDate){
      d = serverDate;
    } else {
      var dt = new Date();
      // adiciona '0' caso número do dia/mês for somente um dígito
      var d = {
        day: twoDigits(dt.getDate()),
        month: twoDigits(dt.getMonth()+1),
        year: dt.getFullYear()
      }
    }
    return getFormatDate(d);
  })();
  /**
   * Configurações para compartilhamento em redes sociais
   */
  var socialNetwork = {
    'facebook': {
      'name' : 'Facebook',
      'classe' : 'fb',
      'url': 'https://www.facebook.com/v2.3/dialog/feed?app_id=[appId]&display=popup&redirect_uri=[redirect_uri]&link=[url]&picture=[image]&description=[title]&title=[kicker]',
      'appId' : '190329594333794',
      'props': 'width=626,height=316',
      'redirect_uri' : 'http://tm.uol.com.br/bt/facebook_auth/facebook-track-share.html?group=',
      'caption' : ''
    },
    'twitter': {
      'name' : 'Twitter',
      'url': '//twitter.com/intent/tweet?via=[via]&url=[url]&text=[title]&image=[image]&hashtags=[hashtags]',
      'props' : 'width=550,height=490',
      'via' : location.href.match(/bol\.uol/)?'BOL':'UOL',
      'hashtags' : location.href.match(/bol\.uol/)?'#BOL':'#UOL'
    },
    'pinterest': {
      'name' : 'Pinterest',
      'url': '//br.pinterest.com/pin/create/button/?url=[url]&media=[image]&description=[title]',
      'props' : 'width=700,height=300',
      'image' : 'https://conteudo.imguol.com.br/c/home/interacao/facebook/logo-uol.png'
    },
    'email': {
      'name' : 'E-mail',
      'url': '//www3.uol.com.br/envie/index.jhtm?origem=[station]&texto=[title]&xurl=[url]&data=[date]',
      'props' : 'width=780,height=490',
      'station' : location.href.match(/bol\.uol/)?'BOL':'UOL',
      'date' : dateNow
    },
    'whatsapp': {
      'name' : 'WhatsApp',
      'classe' : 'whats',
      'url': 'whatsapp://send?text=[title] [url]',
      'props' : 'width=550,height=490'
    },
    'messenger': {
      'name' : 'Messenger',
      'url' : 'fb-messenger://share?link=[url]&app_id=[appId]',
      'props' : 'width=550,height=490',
      'appId' : '190329594333794'
    }
  }
  /*
   * Método para verificar se o menu está aberto
   * Verifica se há css inline setado no elemento
   */
  var menuIsOpened = function(){
    return contextMenu.innerHTML.length;
  }
  /*
   * Método para verificar se um elemento corresponde ao seletor
   * @param el {Node} nó HTML que deve ser avaliado
   * @param selector {String} string em formato seletor CSS
   */
  var matches = function(el, selector) {
    var match = (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector);
    return match && typeof match === 'function' && match.call(el, selector);
  };
  /*
   * Método para criar um nó HTML
   * @return {Node} nó HTML criado através da string informada
   */
  var parseHTML = function(str) {
    var tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = str;
    return tmp.body.children[0];
  };
  /*
   * Método para adicionar classe a um elemento HTML
   * @param elems {Node} elemento HTML que receberá a classe
   * @param str {String} string da classe a ser adicionada, pode ser passada uma lista separada por espaço
   */
  var addClass = function(elems, str){
    // se a classe não for uma string, retorna
    if(typeof str !== "string"){
      return false;
    }
    // guarda o array de elementos
    var arr = !elems ? [] : ("length" in elems ? elems : [elems]);
    Array.prototype.forEach.call(arr, function(elem, i){
      // guarda as classes separadas por espaço
      var cls = str.split(" ");
      for(var i=0;i<cls.length;i++){
        // verifica se existe o elemento e a classe no elemento
        var classe = cls[i];
        var re = new RegExp(classe);
        var classes = (elem.getAttribute && elem.getAttribute("class")) || "";
        if(elem && !classes.match(re)){
          // se não houver a classe, adiciona-a
          elem.setAttribute("class", classes + " " + classe);
        }
      }
    });
  }
  /*
   * Método para verificar se classe existe no elemento HTML
   * @param elems {Node} elemento HTML
   * @param cls {String} string da classe a ser verificada se existe ou não
   */
  var hasClass = function(elems, cls){
    var i;
    var classes = elems.className.split(' ');
    for(i = 0; i < classes.length; i++) {
      if(classes[i] == cls) {
        return true;
      }
    }
    return false;
  }
  /*
   * Método para remover classe a um elemento HTML
   * @param elems {Node} elemento HTML que terá a classe removida
   * @param classe {String} string da classe a ser removida
   */
  var removeClass = function(elems, classe){
    // se a classe não for uma string, retorna
    if(typeof classe !== "string"){
      return false;
    }
    var re = new RegExp(" ?"+classe);
    var arr = !elems ? [] : ("length" in elems ? elems : [elems]);
    Array.prototype.forEach.call(arr, function(elem, i){
      var classes = elem.getAttribute("class") || "";
      if(re && classes && classes.match(re)){
        elem.setAttribute("class", classes.replace(re,""));
      }
    });
  }
  /*
   * Método para mesclar dois ou mais objetos
   * @param out {Object} objeto que será retornado com a mescla de dados
   */
  var deepExtend = function(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];
      if (!obj)
        continue;
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object')
            out[key] = deepExtend(out[key], obj[key]);
          else
            out[key] = obj[key];
        }
      }
    }
    return out;
  };
  /**
   * Escapa a string.
   */
  function _escape(str) {
    return encodeURIComponent(_unescape(str));
  }
  /**
   * Retorna a string no estado normal
   */
  function _unescape(str) {
    try {
      return _cleanText(decodeURIComponent(unescape(str)));
    }
    catch(e) {
      if(/URI malformed/.test(e))
        return _cleanText(unescape(str));
      return str;
    }
  }
  /**
   * Transforma o texto com html entities em texto puro
   */
  function _cleanText(str) {
    return str.replace(/&#(\d+);/g, function(str, code) { return String.fromCharCode(code) });
  }
  /**
   * Decoda html entities
   */
  function _decodeHtml(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
  }
  var urlRedeSocial;
  /**
   * Método de compartilhamento em redes sociais
   */
  var socialShare = function(el) {
    var social = el.getAttribute("data-social") || "";
    if(article.url && social in socialNetwork){
      var config = socialNetwork[social];
      var props = config.props || "";
      // faz a substituição das variáveis no serviço
      var service = config.url.replace(/\[([^\]]+)\]/gi, function(mtc, content){
        var value = article[content] || config[content] || "";
        //se for um conteúdo textual, trata a string
        if(content==='title' || content==='kicker'){
          value = social === 'pinterest' ? _decodeHtml(_unescape(value)) : _escape(value);
        }
        return value;
      });
      urlRedeSocial = service;
      //conta o clique
      hit("compartilhar");
      // fechar o menu contextual
      clear();
      if(social.match(/(whatsapp|messenger)/)){
        window.location = service;
      } else {
        // abre link em popup
        window.open(service,'_blank','fullscreen=no,menubar=no,resizable=yes,scrollbars=no,status=no,titlebar=yes,toolbar=no,top=100,left=300'+(props.length?','+props:''));
      }
    }
  };
  /*
   * Método para gerar markup do Compartilhamento de Redes Sociais
   * @return {String} Retorna o markup do share
   */
  var getSocialMarkup = function(){
    if(!article.share)
      return '';
    // seta os itens padrões de cada plataforma
    var defaultSocial = isMobile ? ['facebook','twitter','whatsapp','messenger'] : ['facebook','twitter','pinterest','email'];
    var social = [];
    // retorna o markup dos botões das redes sociais
    var getItem = function(arr){
      var markup = "";
      for(var i = 0;i<arr.length;i++){
        if(arr[i] in socialNetwork){
          var cls = socialNetwork[arr[i]].classe && socialNetwork[arr[i]].classe.length ? socialNetwork[arr[i]].classe : arr[i];
          markup += '<li  class="sltr__share-button sltr__share-'+ arr[i] +'" data-social="'+ arr[i] +'" role="button" aria-label="Compartilhar matéria via ' +
            socialNetwork[arr[i]].name +'">'+
            '<svg class="sltr-icon-'+cls+'">'+
              '<use xlink:href="#svg-'+cls+'" />'+
            '</svg>'+
          '</li>';
        }
      }
      return markup;
    }
    //se houver uma lista específica, separa itens por vírgula OU retorna a lista padrão
    var list = getItem( typeof article.share === "string" ? article.share.split(",") : defaultSocial );
    return (list.length? '<ul class="sltr__share">'+
            '<li>'+
              '<svg class="sltr-icon-share"><use xlink:href="#svg-share" /></svg>'+
              '<span class="sltr-title">Compartilhar</span>'+
            '</li>'+
            list +
          '</ul>' : '');
  }
  /*
   * Método para gerar markup do menu contextual
   * @return {String} Retorna o markup do menu contextual
   * @param el {element node} Elemento clicado para abrir o menu contextual
   */
  var getContextMenuMarkup = function(el){
    // se não encontrar, retorna vazio
    if(!article.url){
      return '';
    }
    // verifica se a lib de profile está carregada
    var hasWidgetProfile = profileLib();
    // verifica se o elemento permite a exibição do Ver Depois
    var showSeeLater = article.service && hasWidgetProfile;
    // recupera a url do módulo
    var url = article.url;
    // checa se a url já foi salva anteriormente
    action('check', article, function(response){
      //se menu contextual estiver aberto e for o que está aguardando a resposta
      if( menuIsOpened() && url === article.url){
        // retorna se a url está salva
        var isSaved = response.success && response.data && response.data.isSaved;
        var actions = contextMenu.querySelector('.sltr__actions');
        if(actions){
          var loading = actions.querySelector('.sltr__actions__loading');
          var markup = '<svg class="sltr-icon-save '+(isSaved?' sltr-icon-saved':'')+'">'+
              '<use xlink:href="#svg-flag2" />'+
            '</svg>'+
            '<strong class="sltr-title">Ver depois</strong>'+
            '<span class="sltr-description">'+(isSaved?'Link salvo':'Quero salvar este link')+'</span>'+
            (isSaved ? '<hr class="sltr-linev"><span role="button" aria-label="salvar matéria" class="sltr-description sltr-action">Remover este link</span>':'');
          //adiciona a classe save ou remove
          addClass(loading, 'sltr__actions__'+(isSaved?'remove':'save'));
          // remove a classe de loading
          removeClass(loading,'sltr__actions__loading');
          // adiciona markup correto
          loading.innerHTML = markup;
        }
      }
    });
    var shareMarkup = getSocialMarkup();
    var showShare = shareMarkup.length;
    // retorna o markup
    return '<div class="sltr__container' + (showSeeLater && showShare?'':(showShare?' onlyShare':' onlyActions')) + '">'+
              '<i class="sltr-arrow-popup">'+
                '<span class="sltr-arrow-popup-inner"></span>'+
              '</i>'+
              (showSeeLater ? '<div class="sltr__actions">'+
                  '<div class="sltr__actions__loading">'+
                    '<svg class="sltr-icon-save">'+
                      '<use xlink:href="#svg-flag2" />'+
                    '</svg>'+
                    '<strong class="sltr-title">Ver depois</strong>'+
                    '<span class="sltr-description loading">Aguardando...</span>'+
                  '</div>'+
                '</div>' + (showShare ? '<hr class="sltr-lineh">' : '')
              : '') + shareMarkup +
            '</div>';
  }
  /*
   * Valida se já existe a lib do widget profile carregado no escopo
   */
  var profileLib = function(){
    // funcionamento no preview
    return (location.href.indexOf('.preview.intranet/')>=0) ? {user: {isLogged: function(){}}} : 'widgetProfile' in window && widgetProfile.SeeLater;
  }
  /*
   * Método para procurar dados (pelo atributo data-) setados no elemento
   * @param el {Node} Elemento html onde procuraremos os dados
   * @return {Object} Se nenhuma str for informada, retorna obejto com todos os atributos e valores encontrados
   * @return {String} Se uma str for informada, retorna string com o valor buscado
   */
  var getData = function(el, str){
    var data = {};
    var searchFor = {
      'url' : 'a',
      'image' : 'img',
      'title' : '',
      'caption' : '',
      'kicker' : ''
    };
    var parent = el.parentNode.parentNode;
    // procura os atributos data- no elemento
    var attr = el.attributes;
    for(var i = attr.length - 1;i>=0;i--){
      var indice = attr[i].name;
      // se for um atributo data com valor
      if(indice.match(/^data-.+/) && attr.value!=""){
        // adiciona valor ao objeto
        data[indice.replace(/^data-/,"")] = (attr[i].value === "true" ? true : (attr[i].value === "false" ? false : attr[i].value));
      }
    }
    // procura por dados setados no módulo
    for(var key in searchFor){
      if(searchFor.hasOwnProperty(key)){
        // se não tiver setado por atributo data- no elemento do clique
        if(!data[key]){
          // procura por atributo específico dentro do módulo
          var item;
          var sel = searchFor[key];
          var attr = sel+'[data-'+strSelector+']';
          var searchElem = parent.querySelectorAll(attr);
          Array.prototype.forEach.call(searchElem, function(elem, i){
            if(key===elem.getAttribute("data-"+strSelector)){
              item = elem;
            }
          });
          // se encontrar um item com o atributo, verifica o elemento HTML para extrair a informação
          if(item){
            // se for um link
            if(sel==='a'){
              var url = item.getAttribute("href");
              data[key] = url.replace(/https?:\/\/.*&u=/,"");
            // se for uma imagem
            } else if(sel==='img'){
              data[key] = item.getAttribute("data-src") || item.getAttribute("src");
            // demais elementos retorna o texto
            } else {
              var content = item.textContent || "";
              data[key] = content.replace(/^[\s|\t]*/,"").replace(/[\s|\t]*$/,"");
            }
          }
        }
      }
    }
    // retorna os dados
    return str ? (data[str] || "") : data;
  }
  /*
   * Método para checar se a url foi salva ou não, salvar ou remover uma url, através da API do widget Profile
   * @param data {Object} objeto contendo a url e demais dados referentes à chamada
   * @param callback {Function} Função para retornar a resposta recebida da API externa
   */
  var action = function(str, data, callback){
    var actions = ['check','save','remove'];
    var hasWidgetProfile = profileLib();
    var article = {};
    // se não tiver url ou não tiver a lib de profile carregada ou nenhum ação conhecida
    if(!str || actions.indexOf(str)==-1 || typeof data != "object" || !data.url || !hasWidgetProfile){
      return false;
    }
    // guarda url
    article.url = data.url;
    // se tiver id e repository, envia-os
    /*
    if(data.id && data.repository){
      article.id = data.id;
      article.repository = data.repository;
    } else */
    if(str==='save') {
      if(data.title) article.title = data.title;
      if(data.image) article.image = data.image;
      // Ajustar dados para save
      article = {
        article: article,
        settings: {
          animateWidgetAvatar: false
        }
      }
    }
    // executa a ação desejada
    window.widgetProfile.SeeLater[str+'Url'](article, function(response){
      if(isDebug){
        console.log("ARTICLE:", article);
        console.log('O fluxo inteiro funcionou (não teve erros internos?)', response.success);
        if(str==='check'){
          console.log('O link já estava salvo na lista do usuário?', response.data && response.data.isSaved);
        } else if(str==='save'){
          console.log('O link foi salvo na lista do usuário?', response.success);
          console.log('É a primeira vez que o usuário utiliza o recurso de salvar itens?', response.data && response.data.isFirstSaved);
        } else if(str === 'remove'){
          console.log('O link foi removido da lista do usuário?', response.success);
        }
        console.log('Retornou algum erro?', response.status);
        console.log(str.toUpperCase(), 'RESPONSE:', response);
      }
      //retorna resposta para a callback informada
      callback && callback(response);
    });
  }
  /*
   * Método para posicionar o menu contextual de acordo com o elemento clicado
   */
  var positionMenu = function(el){
    var el = el && el.getBoundingClientRect ? el : activeButton;
    var align = el && el.className.match(/centered/)? 'center' : 'right';
    if(el){
      // recupera posição do elemento
      var pos = el.getBoundingClientRect();
      var x = window.scrollX || window.pageXOffset;
      var y = window.scrollY || window.pageYOffset;
      // define top e left para o menu contextual
      var top = parseInt(y + pos.top + (pos.height/2),10);
      if(align==='center'){
        var left = parseInt(x + pos.left + (pos.width/2) - MENUWIDTH,10);
      } else {
        var left = parseInt(x + pos.left + (pos.width) - MENUWIDTH - 4,10);
      }
      contextMenu.style.top = top + 'px';
      contextMenu.style.left = left + 'px';
      contextMenu.style.width = MENUWIDTH + 'px';
    }
  }
  var timerToClose = {
    time : 10 * 1000,
    timer : null,
    start : function(){
      this.timer = window.setTimeout(clear, this.time);
    },
    stop : function(){
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }
  /*
   * Método para mostrar/ocultar o menu contextual
   * @param el {Node} elemento pai onde ocorreu o clique
   */
  var menuDisplay = function(el) {
    var triggerElems = [];
    // se houver elemento ativo anteriormente, dispara trigger para fecha-lo
    if(activeButton){
      triggerElems.push({
        elem : activeButton,
        action: 'close'
      });
    }
    // elimina timeout, se houver
    timerToClose.stop();
    //se não houver referência a um elemento
    if(!el || activeButton === el){
      // limpa referência do elemento clicado
      activeButton = null;
      // limpa dados obtidos do elemento
      article = {};
      //oculta o menu contextual e remove seu conteúdo
      contextMenu.style.cssText = '';
      contextMenu.innerHTML = '';
      // remove overlay
      var overlay = document.querySelector('.sltr-overlay');
      overlay && overlay.remove();
      // libera o refresh
      refresh.start();
    } else {
      // pause refresh
      refresh.pause();
      // guarda a referência do elemento
      activeButton = el;
      // dispara trigger no elemento ativo
      triggerElems.push({
        elem : activeButton,
        action: 'open'
      });
      // guarda dados setados pelo elemento
      article = getData(el);
      // posiciona o menu de acordo com o elemento clicado
      positionMenu(el);
      // define o conteúdo do menu contextual e o exibe
      var markup = getContextMenuMarkup(el);
      if(markup.length){
        // se for mobile, adiciona overlay
        if(isMobile && !document.querySelector('.sltr-overlay')){
          var overlay = document.createElement('div');
          overlay.className = "sltr-overlay lightbox-bg";
          overlay.tabindex = "-1";
          document.body.appendChild(overlay);
          overlay.addEventListener('click', clear, false);
        }
        // injeta markup
        contextMenu.innerHTML = markup;
        // anima elemento
        window.setTimeout(function(){
          // exibe janela do menu contextual
          addClass(contextMenu.querySelector('.sltr__container'), 'sltr-show');
          // anima elemento principal do "ver depois"
          var actions = contextMenu.querySelector('.sltr__actions');
          var elem = actions && actions.querySelector('div');
          addClass(elem,'sltr-effect sltr-show');
          // anima o share
          window.setTimeout(function(){
            addClass(contextMenu.querySelectorAll('.sltr-lineh,.sltr__share'),'sltr-effect sltr-show');
          }, elem && elem.length ? 100 : 1);
        }, 10);
        //conta o clique
        hit("abrir");
        //Envia o trigger de abrir para o hotjar
        if(window.hj) window.hj('trigger', 'ver_depois_abrir_drop');
        // inicia timer
        timerToClose.start();
      } else {
        clear();
      }
    }
    // dispara a ação de abrir/fechar nos elementos necessários
    for(var i=0;i<triggerElems.length;i++){
      var item = triggerElems[i];
      triggerEvent(item.elem, strSelector, {
        detail: {
          activeButton : item.elem,
          action: item.action
        }
      });
    }
  }
  /*
   * Método para carregar os ícones em SVG
   */
  var loadSVG = function(method, service, callback){
    var xhr = typeof XDomainRequest !== 'undefined' ? new XDomainRequest() : new XMLHttpRequest();
    xhr.open(method, service, true);
    xhr.onload = function() {
      if (xhr.status && xhr.status >= 200 && xhr.status < 400 || xhr.responseText.length > 0) {
        var response = JSON.parse(JSON.stringify(xhr.responseText));
        callback(response);
      } else {
        isDebug && console.info('erro ao carregar svg..')
      }
    };
    xhr.onerror = function() {
      isDebug && console.info('erro ao carregar svg..')
    };
    xhr.send();
  }
  /*
   * Método para retornar mensagem de erro padronizadas
   */
  var errorCode = function(code, action){
    code = ""+code;
    action = (typeof action === "string" && action) || "";
    // lista de erros conhecidos
    var listError = {
      "400" : "Objeto enviado contém erro.",
      "401" : "Sessão do usuário inválida.",
      "403" : "header X-Request-With inválido.",
      "409" : "O link já estava salvo anteriormente.",
      "410" : "O link não estava na lista do usuário.",
      "500" : "Não foi possível [action] este link. Tente novamente.",
      "default" : "Houve um erro. Tente novamente mais tarde"
    }
    // lista de mensagens que podem ser exibidas ao usuário
    var showUserMsg = [];
    // recupera a mensagem de erro da lista e trata, se necessário
    var msg = listError[code] && showUserMsg.indexOf(code) != -1 ? listError[code] : listError['default'];
    if(action.length){
      msg = msg.replace(/\[action\]/, action);
    }
    // retorna mensagem de erro para debug
    isDebug && console.log(code, listError[code] ? listError[code] : listError['default']);
    // retorna mensagem de erro
    return msg;
  }
  /*
   * Método para exibir mensagens para o usuário
   * @param text {String} Texto a ser exibido na mensagem
   * @param action {String} Ação do botão que disparou a mensagem
   * @param success {Boolean} Se a ação teve sucesso (para a escolha do ícone a adotar)
   * @param firstSaved {Boolean} Se é a primeira vez que salvou algum link
   */
  var message = function(text, action, success, firstSaved){
    isDebug && console.log('MESSAGE ARGUMENTS', arguments);
    // oculta menu contextual
    clear();
    // variável que guarda timeout
    var to = null;
    // cria o elemento
    if(!msgContainer){
      msgContainer = document.createElement("div");
      msgContainer.id = "sltr-msgContainer";
      document.body.appendChild(msgContainer);
    }
    // injeta markup
    msgContainer.innerHTML = '<div class="sltr-alert'+(success?'':' sltr-error')+'">'+
      '<svg class="sltr-icon sltr-icon-'+(success?'ok':'alert')+'"><use xlink:href="#svg-'+(success?'ok':'alert')+'" /></svg>'+
      '<span>'+text+'</span>'+
    '</div>';
    // anima entrada
    window.setTimeout(function(){
      addClass(msgContainer.querySelector('.sltr-alert'), "sltr-show");
    }, 10);
    // função para remover mensagem
    var listener = function(evt){
      evt && evt.preventDefault();
      var remove = function(evt){
        evt && evt.preventDefault();
        msgContainer.remove();
        msgContainer = null;
        removeHandler();
      }
      // altera o texto se for a primeira vez que o usuário salva um item
      if(firstSaved) {
        // fadeout do conteúdo da mensagem
        addClass(msgContainer.querySelectorAll('.sltr-icon, span'), "sltr-effect sltr-hide");
        // anima o formato da caixa de mensagem
        window.setTimeout(function(){
          var alert = msgContainer.querySelector('.sltr-alert');
          addClass(alert,"sltr-firstView");
          // troca o conteúdo para as informações de "primeira vez salvo"
          window.setTimeout(function(){
            alert.innerHTML = '<div class="sltr-close sltr-effect sltr-hide"><svg class="sltr-firstView-close" role="button" aria-label="fechar ver depois"><use xlink:href="#svg-close" /></svg></div>'+
            '<span class="sltr-effect sltr-hide">Os links salvos para ver depois estarão sempre aqui disponíveis em sua lista</span>';
            // adiciona função de fechar para o close
            alert.querySelector('.sltr-close').addEventListener('click', remove, false);
            // anima a entrada do conteúdo
            window.setTimeout(function(){
              addClass(alert,"sltr-firstViewImg");
              removeClass(alert.children, "sltr-hide");
              addClass(alert.children, "sltr-show");
            }, 100)
          }, 600);
        }, 250);
        // zera variável
        firstSaved = false;
      } else if(msgContainer && !msgContainer.querySelector(".sltr-firstView")){
        // se não for a mensagem de "primeira vez salvo"
        remove();
      }
      // zera timeout
      clearTimeout(to);
      to = null;
    }
    // função para remover listener
    var removeHandler = function(){
      document.removeEventListener('click', listener, false);
    }
    // remove mensagem automaticamente após 3 segundos
    to = window.setTimeout(listener, 3000);
    // adiciona evento click para remover a mensagem
    document.addEventListener('click', listener, false);
  }
  function getBodyScrollTop () {
    var el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
  }
  var animaSave = function() {
    if (!widgetProfile.View.hasOwnProperty('seeLaterAnimateWidgetAvatar')){
      return false;
    }
    if(getBodyScrollTop() > 40) {
      if (!document.querySelector('#box-pagina-inicial').classList.contains('hide')) {
        document.querySelector('#box-pagina-inicial').classList.add('hide');
        document.querySelector('#box-pagina-inicial').classList.add('hide-seelater');
      }
      document.querySelector('.container-superior-espaco').classList.add('fixed')
      document.querySelector('.container-superior').classList.add('fixed')
      widgetProfile.View.seeLaterAnimateWidgetAvatar(1000);
      window.setTimeout(function() {
        document.querySelector('.container-superior').classList.add('unfixed')
        window.setTimeout(function() {
          document.querySelector('.container-superior').classList.remove('fixed')
          document.querySelector('.container-superior-espaco').classList.remove('fixed')
          document.querySelector('.container-superior').classList.remove('unfixed')
          if (document.querySelector('#box-pagina-inicial').classList.contains('hide-seelater')) {
            document.querySelector('#box-pagina-inicial').classList.remove('hide');
            document.querySelector('#box-pagina-inicial').classList.remove('hide-seelater');
          }
        }, 1500)
      }, 4300)
    } else {
      widgetProfile.View.seeLaterAnimateWidgetAvatar(0);
    }
  }
  /*
   * Mensagem para primeiro acesso do usuário
   */
  var lightboxSeeLater = function(){
    var libStorage = window.storage || {};
    if(isMobile) {
      libStorage = Utils.storage;
      libStorage.getItem = Utils.storage.get;
      libStorage.setItem = Utils.storage.set;
    }
    if(libStorage.getItem('showSeeLaterLightbox')) {
      animaSave()
      return;
    } else {
      libStorage.setItem('showSeeLaterLightbox', true);
    }
    // cria o elemento
    if(!msgContainer){
      msgContainer = document.createElement("div");
      msgContainer.id = "sltr-msgContainer";
      document.body.appendChild(msgContainer);
    }
    var remove = function(evt){
      evt && evt.preventDefault();
      msgContainer.remove();
      msgContainer = null;
      animaSave()
    }
    // Vídeo tutorial
    var poster = 'http://hp.imguol.com.br/c/geral/gif-animated/bb/2018/02/07/home-uol---ver-depois-web-1518015520337_g2_722x290.jpg';
    var mediaMp4 = 'http://hp.imguol.com.br/c/geral/gif-animated/bb/2018/02/07/home-uol---ver-depois-web-1518015520337_g2_722x290.mp4';
    var mediaWebm = 'http://hp.imguol.com.br/c/geral/gif-animated/bb/2018/02/07/home-uol---ver-depois-web-1518015520337_g2_722x290.webm';
    if(isMobile) {
      poster = 'http://hp.imguol.com.br/c/geral/gif-animated/dc/2018/02/07/home-uol---ver-depois-mobile-1518015493342_g2_320x258.jpg';
      mediaMp4 = 'http://hp.imguol.com.br/c/geral/gif-animated/dc/2018/02/07/home-uol---ver-depois-mobile-1518015493342_g2_320x258.mp4';
      mediaWebm = 'http://hp.imguol.com.br/c/geral/gif-animated/dc/2018/02/07/home-uol---ver-depois-mobile-1518015493342_g2_320x258.webm';
    }
    msgContainer.innerHTML = ' \
      <div class="lightbox-content"> \
        <div class="sltr-lightbox"> \
          <div class="sltr-lightbox-close"> \
            <svg class="sltr-lightbox-close-icon" role="button" aria-label="fechar ver depois"> \
              <use xlink:href="#svg-close" /> \
            </svg> \
          </div> \
          <span class="sltr-lightbox-text">Você encontra os links salvos acessando o seu perfil no topo das páginas do UOL</span> \
          <span class="sltr-lightbox-video"> \
            <div class="sltr-lightbox-play"></div> \
            <video autoplay loop poster="'+poster+'"> \
              <source src="'+mediaMp4+'" type="video/mp4"> \
              <source src="'+mediaWebm+'" type="video/webm"> \
            </video> \
          </span> \
        </div> \
      </div> \
      <div class="lightbox-bg"></div> \
    ';
    // adiciona função de fechar para o close
    msgContainer.querySelector('.sltr-lightbox-close').addEventListener('click', remove, false);
    if(isMobile) {
      var video = msgContainer.querySelector('video');
      var btnPlay = msgContainer.querySelector('.sltr-lightbox-play');
      video.addEventListener('playing', function(){
        addClass(btnPlay, 'hide');
      })
      video.addEventListener('pause', function(){
        removeClass(btnPlay, 'hide');
      })
      btnPlay.addEventListener('click', function() {
        video.play();
      }, false);
    }
  }
  /*
   * Função para registro de métricas
   * param ref {string} Valor a ser concatenado para o campo label do GA
   * param module {Node} Elemento Nó referente ao módulo de onde se extraiu as chamadas
   * param action {string} Valor a ser utilizado para referênciar ação da chamada
   */
  var hit = function(ref, module, action) {
    var gaObj = gaObj || {};
    var parent = module || activeButton && activeButton.parentNode;
    if(parent){
      var searchElem = parent.querySelector('a[data-'+strSelector+']') || null;
      if(searchElem && window.getGA){
        gaObj = window.getGA(searchElem);
      }
      // seta a ação do seeLater
      gaObj.label = 'drop-chamada-'+ref;
      if(action && action != ''){
        gaObj.action = action;
      }else{
        gaObj.action = 'clique';
      }
      window.metricsGA && metricsGA(gaObj);
    } else {
      isDebug && console.log('Não foi possível gerar métrica', gaObj);
    }
  }
  /*
   * Método para executer trigger de eventos
   */
  var triggerEvent = function(el, eventName, options) {
    var event;
    if (window.CustomEvent) {
      event = new CustomEvent(eventName, options);
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, true, options);
    }
    el.dispatchEvent(event);
  }
  /*
   * Método para limpar janelas abertas
   */
  var clear = function(evt){
    menuDisplay(false);
  }
  /*
   * Método para inserir a ação de click do "Ver depois" nos elementos correspondentes
   */
  var update = function(){
    // retorna os elementos que executarão o "Ver depois"
    var elements = document.querySelectorAll(selector);
    // verifica se a lib de profile existe
    var hasWidgetProfile = profileLib();
    // para cada elemento
    Array.prototype.forEach.call(elements, function(el, i){
      // recupera dados setados no elemento
      var data = getData(el);
      // verifica no elemento, se o mesmo pode ser exibido de acordo com a configuração dos serviços
      var canShow = data.url && (data.service && hasWidgetProfile);
      // que ainda não estiver setado e puder exibir
      if(canShow && !el.hasAttribute('data-initiated')){
        // ao clicar
        var savedLink = function(evt){
          evt.preventDefault();
          evt.stopPropagation();
          linkContextActions(el, evt);
        }
        el.addEventListener('click', savedLink, false);
        // caso o usuário tenha salvo anteriormente
        var saved = false;
        if(userSavedSeeLater && userSavedSeeLater.indexOf(data.url) > -1) {
          saved = true;
        }
        //exibe o elemento
        el.innerHTML = '<span class="uol-see-later-icon"> \
          <svg class="sltr-icon-save"> \
            <use xlink:href="#svg-flag2" /> \
          </svg> \
          <p class="uol-see-later-text">'+(saved ? 'LINK SALVO' : 'VER DEPOIS')+'</p> \
        </span>';
        if(isMobile && !saved) {
          el.className += ' show-animation';
        }
        // marca que o elemento já foi setado
        el.className += ' init';
        el.setAttribute("data-initiated",true);
      } else if(canShow && hasWidgetProfile && hasWidgetProfile.user.isLogged()) {
        // verifica se usuário salvou este link
        if(userSavedSeeLater && userSavedSeeLater.indexOf(data.url) > -1) {
          // tratamento visual
          if(isMobile) {
            removeClass(el, 'show-animation');
          }
          el.className += ' saved';
          var text = el.querySelector('.uol-see-later-text');
          text.innerHTML = 'LINK SALVO';
        }
      } else if(hasWidgetProfile && !hasWidgetProfile.user.isLogged()) {
        // caso o usuário faça logout, remove links ativos e limpa lista de links salvos
        userSavedSeeLater = null;
        if(hasClass(el, 'saved') == true) {
          // tratamento visual
          removeClass(el, 'saved');
          if(isMobile) {
            removeClass(el, 'show-animation');
          }
          var text = el.querySelector('.uol-see-later-text');
          text.innerHTML = 'VER DEPOIS';
        }
      }
    });
    // Consulta links salvos do usuário
    if(hasWidgetProfile && hasWidgetProfile.user.isLogged() && userSavedSeeLater == null) {
      window.widgetProfile.SeeLater.list('', function(response) {
        userSavedSeeLater = [];
        // Armazena somente url dos itens salvos
        if(response.success == true) {
          var links = response.data;
          for(var i in links) {
            userSavedSeeLater.push(links[i].url)
          }
          update();
        }
      });
    }
  }
  var linkContextActions = function(el, evt){
    evt.preventDefault();
    var article = getData(el);
    var clickedElem = evt.srcElement || evt.target;
    var type = hasClass(el, 'saved') == true ? 'remove' : 'save';
    var hasWidgetProfile = profileLib();
    if(!el || activeButton === el){
      // limpa referência do elemento clicado
      activeButton = null;
    } else {
      // guarda a referência do elemento
      activeButton = el.parentNode;
    }
    var module = activeButton.parentNode;
    switch(type){
      case 'save':
        //conta o clique
        if(hasWidgetProfile && hasWidgetProfile.user.isLogged()) {
          hit("salvar-link", module, "logged-user-success");
        }
        action('save', article, function(response){
          isDebug && console.log('MESSAGE SAVE', response);
          // exibe mensagem de acordo com o status da resposta
          if(response.success == false && response.status != 409) {
            message(errorCode(response.status,'salvar'), 'save', response.success);
          }
          //conta o clique
          if(response.success) {
            hit("impressao-salvo", module);
            // tratamento visual
            addClass(el, 'show-animation');
            addClass(el, 'saved');
            var text = el.querySelector('.uol-see-later-text');
            text.innerHTML = 'LINK SALVO';
            // Exibe lighbox com instruções para salvar link
            var interval = isMobile ? 2000 : 1000;
            setTimeout(lightboxSeeLater, interval);
          }
          // Cria tag de link salvo no hotjar
          if(window.hj) window.hj('tagRecording', ['ver depois link salvo']);
        });
        //Cria trigger de salvar link no hotjar
        if(window.hj) window.hj('trigger', 'ver_depois_clique_salvar_link');
        // Cria a tag de salvar link no hotjar
        if(window.hj) window.hj('tagRecording', ['ver depois salvar link']);
        //conta o clique
        hit("salvar-link");
        break;
      case 'remove':
        // ao remover
        action('remove', article, function(response){
          // exibe mensagem de acordo com o status da resposta
          // message(response.success ? 'Link removido' : errorCode(response.status,'remover'), 'remove', response.success);
          if(response.success == false) {
            message(errorCode(response.status,'remover'), 'remove', response.success);
          }
        });
        //conta o clique
        hit("remover-link-salvo");
        // tratamento visual
        removeClass(el, 'saved');
        if(isMobile) {
          removeClass(el, 'show-animation');
        }
        var text = el.querySelector('.uol-see-later-text');
        text.innerHTML = 'VER DEPOIS';
        break;
    }
  }
  /*
   * Cria função Element.remove() se não existir
   */
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if(this.parentNode){
        this.parentNode.removeChild(this);
      }
    };
  }
  /*
   * Método para definir as ações de click dos componentes do menu contextual
   */
  var binds = function(){
    // seta ação dos botões de Salvar, Remover URL e botões de Compartilhamento
    var menuContextActions = function(evt){
      evt.preventDefault();
      var clickedElem = evt.srcElement || evt.target;
      var type = "";
      var containers = ['.sltr__share','.sltr__actions__save','.sltr__actions__remove'];
      var container;
      for(var i=0;i<containers.length;i++){
        var wrapper = contextMenu.querySelector(containers[i]);
        if(wrapper && wrapper.contains(clickedElem)){
          container = wrapper;
          type = containers[i].replace(/.sltr__(actions__)?/,'');
        }
      }
      if(type === 'save' || type === 'remove'){
        // ao executar qualquer ação do ver depois, limpa timer para aguardar a resposta do serviço
        timerToClose.stop();
      }
      // função para mostrar loading enquanto aguarda reposta do serviço
      var loading = function(type){
        // aguarda ação
        var actions = contextMenu.querySelector('.sltr__actions');
        var action = actions.querySelector('.sltr__actions__' + type);
        var description = action.querySelector('.sltr-description');
        // adiciona a classe de loading
        addClass(action, 'sltr__actions__loading');
        // remove a classe do save ou remove
        removeClass(action,'sltr__actions__' + type);
        // Adiciona loading
        addClass(description,'loading');
        description.innerHTML = 'Aguardando...';
        if(type === 'remove'){
          container.querySelector('.sltr-linev').remove();
          container.querySelector('.sltr-description.sltr-action').remove();
        }
      }
      // guarda a referência ao módulo
      var module = activeButton.parentNode;
      // ação de compartilhamento das redes sociais
      switch(type){
        case 'share':
          var buttons = container.querySelectorAll('.sltr__share-button');
          Array.prototype.forEach.call(buttons, function(elem, i){
            if(clickedElem === elem || elem.contains(clickedElem)){
              // Cria tag de compartilhar no hotjar
              if(window.hj) window.hj('tagRecording', ['ver depois compartilhar']);
              socialShare(elem);
            }
          });
          break;
        case 'save':
          // aguarda ação
          loading(type);
          // ao salvar
          action('save', article, function(response){
            isDebug && console.log('MESSAGE SAVE', response);
            // exibe mensagem de acordo com o status da resposta
            message(response.success ? 'Link salvo' : errorCode(response.status,'salvar'), 'save', response.success, response.data && response.data.isFirstSaved);
            //conta o clique
            if(response.success){
              hit("impressao-salvo", module);
            }
            // Cria tag de link salvo no hotjar
            if(window.hj) window.hj('tagRecording', ['ver depois link salvo']);
          });
          //Cria trigger de salvar link no hotjar
          if(window.hj) window.hj('trigger', 'ver_depois_clique_salvar_link');
          // Cria a tag de salvar link no hotjar
          if(window.hj) window.hj('tagRecording', ['ver depois salvar link']);
          //conta o clique
          hit("salvar-link");
          break;
        case 'remove':
          if(clickedElem === container.querySelector('.sltr-description.sltr-action')){
            // aguarda ação
            loading(type);
            // ao remover
            action('remove', article, function(response){
              // exibe mensagem de acordo com o status da resposta
              message(response.success ? 'Link removido' : errorCode(response.status,'remover'), 'remove', response.success);
            });
            //conta o clique
            hit("remover-link-salvo");
          }
          break;
      }
    }
    // adiciona a função nos eventos
    contextMenu.addEventListener('click', menuContextActions, false);
    var inOut = function(evt){
      var target = evt.srcElement || evt.target;
      if(target === evt.currentTarget && !showingModalLogin){
        if(evt.type === 'mouseenter'){
          // ao entrar no menu contextual, limpa timer anterior
          timerToClose.stop();
        } else {
          // ao sair do menu contextual, fecha a janela após 10 segundos
          timerToClose.start();
        }
      }
    }
    contextMenu.addEventListener('mouseenter', inOut, true);
    contextMenu.addEventListener('mouseleave', inOut, true);
    // observa se os banners tiveram alteração no conteúdo
    var targets = document.querySelectorAll('.banner');
    if(targets.length && 'MutationObserver' in window){
      Array.prototype.forEach.call(targets, function(target, i){
        var mo = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            // ao alterar o conteúdo da área do banner, reposiciona o menu contextual
            positionMenu();
            setTimeout(function(){
              positionMenu();
            }, 300)
          });
        });
        mo.observe(target, { 'attributes': true, 'subtree': true, 'childList': true });
      });
    }
    //recupera respostas do fluxo do widgetProfile
    document.addEventListener('widgetNotifySeeLater', function(evt){
      var data = evt.detail;
      // se estiver abrindo o modal
      if(data.action==='modal-open'){
        showingModalLogin = true;
        // para o contador para fechamento automático da janela
        timerToClose.stop();
      } else {
        showingModalLogin = false;
        // fecha janelas abertas
        clear();
      }
    }, true);
  }
  /*
   * Método para iniciar e pausar refresh da página
   * Pode ser setada pela configuração do INIT
   */
  var refresh = {
    start : function(){},
    pause : function(){}
  }
  /*
   * Método para iniciar a lib do Ver depois
   * @param cfg {Object} objeto de configuração que permite setar variáveis globais : {
   *      selector : "", {String}
   *      container: "", {String}
   *      pathSVG: "", {String}
   *      refresh: {
   *          start: function(){}, {Function}
   *          pause: function(){}  {Function}
   *      },
   *      menuWidth: 300 {Number}
   *   }
   */
  var init = function(cfg){
    /* Não inicia no IE9 (widget profile não dá suporte a este browser) */
    if(navigator.appVersion.indexOf("MSIE 9")!=-1){
      return false;
    }
    // guarda o seletor que executará o see later
    strSelector = cfg && cfg.selector && cfg.selector.replace(/[\.|#|\s|\t]/,'') || 'uol-see-later';
    selector = '.' + strSelector;
    // Guarda a plataforma onde a lib está sendo executada
    isMobile = Config && Config.plataforma == "mobile";
    // Verifica se mostra logs de debug
    isDebug = window.location.search.match(/debug=true/) && window.console;
    // Guarda o container que conterá o menu contextual
    strContainer = cfg && cfg.container || '.sltr-context-menu';
    contextMenu = document.querySelector(strContainer);
    // define a largura do container do menu contextual
    MENUWIDTH = cfg && cfg.menuWidth || (isMobile ? 228 : MENUWIDTH);
    // define a url com os ícones de svg
    PATHSVG = cfg && cfg.pathSVG || PATHSVG;
    // recebe a função que manipula o refresh da página
    if(cfg && cfg.refresh && cfg.refresh.start && typeof cfg.refresh.start == "function" && cfg.refresh.pause && typeof cfg.refresh.pause == "function"){
      refresh = cfg.refresh;
    } else {
      // Se houver função de refresh da Home UOL
      if(homeUOL && homeUOL.modules && homeUOL.modules.refresh){
        refresh = homeUOL.modules.refresh;
      }
    }
    // carrega os ícones SVG
    loadSVG("GET", PATHSVG, function(response) {
      var svg = document.createElement("div");
      svg.id = "svg-icons";
      svg.innerHTML = response;
      document.body.appendChild(svg);
    });
    // se não houver um elemento, cria um e adiciona ao body
    if(!contextMenu){
      contextMenu = document.createElement("div");
      contextMenu.className = "sltr-context-menu";
      document.body.appendChild(contextMenu);
    }
    // Seta as ações referentes aos links e botões dentro menu contextual
    // binds();
    // Seta os elementos que devem executar o "Ver depois"
    update();
    // se houver configurações de redes sociais, mescla com o default
    if(cfg && "socialNetwork" in cfg){
      socialNetwork = deepExtend(socialNetwork, cfg.socialNetwork);
    }
  }
  /**
   *  {Object} Propriedades públicas do Ver Depois
   */
  window.seeLater = {
    version: version,
    init : init,
    update: update,
    clear: clear,
    action : action,
    reposition : positionMenu
  };
  /* INICIA A LIB */
  onHomeReady && onHomeReady(init);
})(window)
        /*! @source /camaleao/assets/libs/see-later/mock.js */
        // SIMULA funções do serviço do widget Profile
window.SeeLaterLib = {
  regularTS : 1000,
  firstSaved : true,
  savedUrls : ["noticias.uol.com.br/cotidiano/ultimas-noticias/2017/03/21/pela-1-vez-nesta-decada-brasil-deixa-de-avancar-em-ranking-de-qualidade-de-vida.htm","noticias.uol.com.br/politica/ultimas-noticias/2017/05/23/stf-condena-deputado-paulo-maluf-por-lavagem-de-dinheiro.htm"],
  problemUrls : ["blogdojuca.uol.com.br/2017/03/cbf-expoe-o-cpf-dos-atletas/","noticias.uol.com.br/ultimas-noticias/agencia-brasil/2017/05/23/irma-de-aecio-neves-pede-liberdade-ao-supremo.htm"],
  getUrl : function(url) {
    return url ? url.replace(/https?:\/\//,"") : false;
  },
  ids : {
      "publisher-qweqweqweqweqweqwe132456789" : "noticias.uol.com.br/politica/ultimas-noticias/2017/03/21/gilmar-mendes-critica-suposto-vazamento-de-lista-de-janot-pela-procuradoria.htm"
  },
  checkUrl : function(article, callback) {
    var link = this.getUrl(article.url);
    var response = {
      success: true,
      data: false
    }
    if(!link || this.problemUrls.indexOf(link) != -1){
      response.success = false;
      response.data = null;
      response.status = 501;
    } else {
      response.data = {
        isSaved : this.savedUrls.indexOf(link) != -1
      };
    }
    // devolvendo resposta com atraso de 1s para simular serviço
    if(callback){
      var t = window.setTimeout(function(){
        callback(response);
      }, this.regularTS);
    }
  },
  saveUrl : function(article, callback) {
    var link = this.getUrl(article.url);
    var response = {
      success: true,
      data: {}
    }
    if(!link || this.problemUrls.indexOf(link) != -1){
      response.success = false;
      response.status = 500;
    } else {
      if(this.savedUrls.indexOf(link) == -1){
        this.savedUrls.push(link);
        //console.log('SAVING', this.savedUrls);
        response.data.isFirstSaved = this.firstSaved;
        if(this.firstSaved){
          this.firstSaved = false;
        }
      }
    }
    // devolvendo resposta com atraso de 1s para simular serviço
    if(callback){
      var t = window.setTimeout(function(){
        callback(response);
      }, this.regularTS);
    }
  },
  removeUrl : function(article, callback) {
    var link = this.getUrl(article.url);
    //simula erro em chamada
    this.problemUrls.push("noticias.uol.com.br/cotidiano/ultimas-noticias/2017/03/21/pela-1-vez-nesta-decada-brasil-deixa-de-avancar-em-ranking-de-qualidade-de-vida.htm");
    this.problemUrls.push("noticias.uol.com.br/politica/ultimas-noticias/2017/05/23/artigo-janot.htm");
    var response = {
      success: true
    }
    var indice = this.savedUrls.indexOf(link);
    if(!link || indice < 0 || this.problemUrls.indexOf(link) != -1){
      response.success = false;
      response.status = link ? 502 : 500;
    } else {
      this.savedUrls.splice(indice,1);
      //console.log('REMOVING', this.savedUrls);
    }
    //remove erros criados nesta função para não dar problema no check
    this.problemUrls.splice(this.problemUrls.length-1,2);
    // devolvendo resposta com atraso de 1s para simular serviço
    if(callback){
      var t = window.setTimeout(function(){
        callback(response);
      }, this.regularTS);
    }
  }
}
        /*! @source /camaleao/assets/web/javascript/app.js */
        homeUOL.register('app', ['ga', 'clickuol', 'async', 'widgetProfile', 'homelinks', 'refresh', 'contadorComentarios', 'buscas', 'menuVertical', 'checkPlaceholder', 'horizontalBBB', 'storage'], function(GA, clickUOL, Async, widgetProfile, Homelinks, Refresh, insertCommentsCounter, Buscas, menuVertical, checkPlaceholder, horizontalBBB, storage) {
  /**
   * Elemento que engloba todos os blocos editoriais da home.
   * @type {jQuery Element}
   */
  var editorialArea;
  /**
   * Lista de todos os links editorias da home
   * @type {jQuery Element}
   */
  var editorialLinks;
  /**
   * Cacheia a URL e o elemento DOM do link equivalente.
   * @type {Object}
   */
  var hashLinks = {};
  /**
   * Adiciona GA nos links editoriais.
   */
  function insertGA() {
    GA(editorialLinks);
  }
  /**
   * Adiciona click UOL nos links editoriais.
   */
  function insertClickUOL() {
    clickUOL(editorialLinks, function registerEditorialLink() {
      if(this.href) {
        if(hashLinks[this.href] === undefined) {
          hashLinks[this.href] = $(this);
        } else {
          hashLinks[this.href] = hashLinks[this.href].add(this);
        }
      }
    });
  }
  /**
   * Desativa ancoras que existem apenas para
   * disparar outros eventos.
   */
  function disableVoidLinks() {
    var v = function(event) {
      event.preventDefault();
    };
    $('a.void').on('click', v);
  }
  /**
   * Adiciona evento click no links que possuem vr-contentbox -- marcação
   * especial para os blocos da Outbrain.
   */
  function outbrainLinks() {
    editorialArea.find('[data-vr-contentbox]').on('click', 'a', function(event) {
      //console.log('outbrain link');
      var link = this.href;
      if(link.match(/^http:\/\/click\.uol/) !== null) {
        // separa o clickuol da url
        var pureLink = this.href.split('&u=');
        if(pureLink.length == 2 && window._vrtrack) {
          // faz o tracking para a outbrain
          _vrtrack({ track_url: pureLink[1] });
         }
       }
    });
  }
  /**
   * Define cookie mobile para que usuário acesse versão mobile.
   */
  function setMobileView() {
    if(/handheld/.test(document.body.className) === true) {
      $('body').on('click', 'a.btCelular', function(event) {
        event.preventDefault();
        var storage = homeUOL.instance('storage');
        storage.setCookie('x-user-agent-class', 'SMART', 4, '.uol.com.br');
        location.href = "//" + window.location.hostname;
      });
    }
  }
  return function initApp(app) {
    var appData = app.data();
    Refresh.start();
    editorialArea  = $('#topo, #menuHorizontal, #corpo, #rodape');
    editorialLinks = editorialArea.find('a');
    // ativa lightbox 404
    if(appData.lightbox === 404) {
      homeUOL.load('erro404');
    }
    Async(setMobileView);
    // define o objeto com os links da home
    Homelinks(hashLinks);
    // evento do menu vertical nos módulos horizontais
    menuVertical();
    // validação para navegadores que não suportam placeholder
    $(function(){
      Async(checkPlaceholder);
    });
    // desativa links com eventos javascript
    Async(disableVoidLinks);
    // registra evento click para outbrain
    // Async(outbrainLinks);
    // widget de notificação / login
    Async(widgetProfile);
    // Insere referências para GA
    Async(insertGA);
    // roda async a inserção de clickuol e comentários
    Async(insertClickUOL).then(insertCommentsCounter);
    // remove storage de adblock
    storage.removeItem('adblocker');
  }
});
        /*! @source /camaleao/assets/web/javascript/modules/cup-counter.js */
        homeUOL.register('cupCounter', ['metrics-ga'], function(metricsGA) {
    var counter = document.getElementById('counterMain');
    var position = $(counter).closest('.col4') ? 'coluna-4' : 'coluna-3';
    if(counter) {
        counter.addEventListener('click', function() {
            metricsGA({
              'area': 'topo',
              'position': position,
              'action': 'https://copadomundo.uol.com.br/tabela-da-copa/calendario/',
              'category': 'bloco-editorial-topo',
              'label': 'abrir-contador-copa',
            });
            if(!location.search.match(/debugGA=true/)){
              window.location = 'https://copadomundo.uol.com.br/tabela-da-copa/calendario/'
            }
        })
    }
})
if(window.usocket !== undefined) {
  usocket.config(usocketConfig);
}
if(window.hevents !== undefined) {
  hevents.emit('jsReady');
  if(window.sawpf !== undefined) {
    hevents.on('htmlReady', sawpf);
  }
}
