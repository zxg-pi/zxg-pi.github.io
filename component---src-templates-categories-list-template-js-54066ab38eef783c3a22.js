(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0Mdo":function(t,e,n){var u=n("J+NY");t.exports=function(t){return null==t?"":u(t)}},"1f8j":function(t,e,n){n("nnZh"),n("ndlx");var u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+u+"]",o="\\d+",f="[\\u2700-\\u27bf]",a="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+u+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",d="[A-Z\\xc0-\\xd6\\xd8-\\xde]",x="(?:"+a+"|"+i+")",s="(?:"+d+"|"+i+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,l].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),v="(?:"+[f,c,l].join("|")+")"+b,g=RegExp([d+"?"+a+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,d,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,d+x,"$"].join("|")+")",d+"?"+x+"+(?:['’](?:d|ll|m|re|s|t|ve))?",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,v].join("|"),"g");t.exports=function(t){return t.match(g)||[]}},"5JtN":function(t,e,n){n("9Uio"),n("ndlx");var u=n("KX9d"),r=n("TFCL"),o=n("GUlJ"),f=RegExp("['’]","g");t.exports=function(t){return function(e){return u(o(r(e).replace(f,"")),t,"")}}},ACUj:function(t,e,n){"use strict";n.r(e);var u=n("2w0b"),r=n.n(u),o=n("Wbzz"),f=n("VVUU"),a=n.n(f),i=n("/d1K"),c=n("Zttt"),l=n("RXmK"),d=n("gGy4");e.default=function(){var t=Object(d.b)(),e=t.title,n=t.subtitle,u=Object(d.a)();return r.a.createElement(c.a,{title:"Categories - "+e,description:n},r.a.createElement(i.a,null),r.a.createElement(l.a,{title:"Categories"},r.a.createElement("ul",null,u.map((function(t){return r.a.createElement("li",{key:t.fieldValue},r.a.createElement(o.Link,{to:"/category/"+a()(t.fieldValue)+"/"},t.fieldValue," (",t.totalCount,")"))})))))}},GUlJ:function(t,e,n){n("nnZh");var u=n("IZIx"),r=n("Nd4a"),o=n("0Mdo"),f=n("1f8j");t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?r(t)?f(t):u(t):t.match(e)||[]}},IZIx:function(t,e,n){n("nnZh");var u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(u)||[]}},"J+NY":function(t,e,n){n("K0Wb"),n("ed2Y"),n("CAcD");var u=n("ua8Q"),r=n("OkMX"),o=n("omV8"),f=n("k51J"),a=u?u.prototype:void 0,i=a?a.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return r(e,t)+"";if(f(e))return i?i.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},"J/r1":function(t,e,n){n("K0Wb"),n("ed2Y"),n("CAcD");var u=n("ua8Q"),r=Object.prototype,o=r.hasOwnProperty,f=r.toString,a=u?u.toStringTag:void 0;t.exports=function(t){var e=o.call(t,a),n=t[a];try{t[a]=void 0;var u=!0}catch(i){}var r=f.call(t);return u&&(e?t[a]=n:delete t[a]),r}},KX9d:function(t,e){t.exports=function(t,e,n,u){var r=-1,o=null==t?0:t.length;for(u&&o&&(n=t[++r]);++r<o;)n=e(n,t[r],r,t);return n}},Nd4a:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},OkMX:function(t,e){t.exports=function(t,e){for(var n=-1,u=null==t?0:t.length,r=Array(u);++n<u;)r[n]=e(t[n],n,t);return r}},Rs5c:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},"SLl+":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("0cmD"))},TFCL:function(t,e,n){n("9Uio"),n("ndlx");var u=n("V7Xw"),r=n("0Mdo"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,f=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=r(t))&&t.replace(o,u).replace(f,"")}},V7Xw:function(t,e,n){var u=n("vdul")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=u},VVUU:function(t,e,n){var u=n("5JtN")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=u},gJaa:function(t,e,n){var u=n("SLl+"),r="object"==typeof self&&self&&self.Object===Object&&self,o=u||r||Function("return this")();t.exports=o},k51J:function(t,e,n){var u=n("yaqY"),r=n("Rs5c");t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==u(t)}},ofgi:function(t,e,n){n("K0Wb"),n("ed2Y"),n("CAcD");var u=Object.prototype.toString;t.exports=function(t){return u.call(t)}},omV8:function(t,e,n){n("X7wY");var u=Array.isArray;t.exports=u},ua8Q:function(t,e,n){var u=n("gJaa").Symbol;t.exports=u},vdul:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},yaqY:function(t,e,n){var u=n("ua8Q"),r=n("J/r1"),o=n("ofgi"),f=u?u.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":f&&f in Object(t)?r(t):o(t)}}}]);
//# sourceMappingURL=component---src-templates-categories-list-template-js-54066ab38eef783c3a22.js.map