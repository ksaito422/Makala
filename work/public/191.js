(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[191],{

/***/ "./node_modules/prismjs/components/prism-javadoclike.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javadoclike.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(p){var a=p.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,e){"string"==typeof a&&(a=[a]),a.forEach(function(a){!function(a,e){var n="doc-comment",t=p.languages[a];if(t){var r=t[n];if(!r){var o={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};r=(t=p.languages.insertBefore(a,"comment",o))[n]}if(r instanceof RegExp&&(r=t[n]={pattern:r}),Array.isArray(r))for(var i=0,s=r.length;i<s;i++)r[i]instanceof RegExp&&(r[i]={pattern:r[i]}),e(r[i]);else e(r)}}(a,function(a){a.inside||(a.inside={}),a.inside.rest=e})})}}),a.addSupport(["java","javascript","php"],a)}(Prism);

/***/ })

}]);