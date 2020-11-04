(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[315],{

/***/ "./node_modules/prismjs/components/prism-properties.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-properties.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.properties = {
	'comment': /^[ \t]*[#!].*$/m,
	'attr-value': {
		pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
		lookbehind: true
	},
	'attr-name': /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[=:] *| )/m,
	'punctuation': /[=:]/
};

/***/ })

}]);