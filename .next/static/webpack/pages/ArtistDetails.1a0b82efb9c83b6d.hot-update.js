"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ArtistDetails",{

/***/ "./pages/ArtistDetails.js":
/*!********************************!*\
  !*** ./pages/ArtistDetails.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtistDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./pages/data.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction ArtistDetails() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"top-banner\", {\n                className: \"w-screen h-32 bg-[]\"\n            }, void 0, false, {\n                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            _data__WEBPACK_IMPORTED_MODULE_2__.data.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: row.cover1,\n                        className: \"object-cover h-42\",\n                        width: 1000\n                    }, void 0, false, {\n                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this)\n                }, index, false, {\n                    fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = ArtistDetails;\nvar _c;\n$RefreshReg$(_c, \"ArtistDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BcnRpc3REZXRhaWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNJO0FBQ0c7QUFDRjtBQUVmLFNBQVNJLGdCQUFnQjtJQUN0QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFXRCxXQUFVOzs7Ozs7WUFDckJMLDJDQUFRLENBQUMsQ0FBQ1EsS0FBS0Msc0JBQ1osOERBQUNMOzhCQUNHLDRFQUFDRixtREFBS0E7d0JBQUNRLEtBQUtGLElBQUlHLE1BQU07d0JBQUVOLFdBQVU7d0JBQW9CTyxPQUFPOzs7Ozs7bUJBRHZESDs7Ozs7Ozs7Ozs7QUFNdEIsQ0FBQztLQVh1Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQXJ0aXN0RGV0YWlscy5qcz80NzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGlzdERldGFpbHMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGgtc2NyZWVuJz5cbiAgICAgICAgPHRvcC1iYW5uZXIgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC0zMiBiZy1bXVwiPjwvdG9wLWJhbm5lcj5cbiAgICAgICAge2RhdGEubWFwKChyb3csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Jvdy5jb3ZlcjF9IGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBoLTQyXCIgd2lkdGg9ezEwMDB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJkYXRhIiwidXNlU3RhdGUiLCJJbWFnZSIsIkFydGlzdERldGFpbHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0b3AtYmFubmVyIiwibWFwIiwicm93IiwiaW5kZXgiLCJzcmMiLCJjb3ZlcjEiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ArtistDetails.js\n"));

/***/ })

});