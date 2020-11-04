(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/prismjs/components/prism-editorconfig.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-editorconfig.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.editorconfig = {
	// https://editorconfig-specification.readthedocs.io/en/latest/
	'comment': /[;#].*/,
	'section': {
		pattern: /(^[ \t]*)\[.+]/m,
		lookbehind: true,
		alias: 'keyword',
		inside: {
			'regex': /\\\\[\[\]{},!?.*]/, // Escape special characters with '\\'
			'operator': /[!?]|\.\.|\*{1,2}/,
			'punctuation': /[\[\]{},]/
		}
	},
	'property': {
		pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
		lookbehind: true
	},
	'value': {
		pattern: /=.*/,
		alias: 'string',
		inside: {
			'punctuation': /^=/
		}
	}
};


/***/ })

}]);