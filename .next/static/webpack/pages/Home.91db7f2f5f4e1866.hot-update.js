"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Home",{

/***/ "./components/Artists.js":
/*!*******************************!*\
  !*** ./components/Artists.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Card(param) {\n    let { row  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-[#171717] group rounded-lg flex flex-col font-mono items-center hover:bg-[#303030] duration-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-11/12 h-48 bg-white mt-2 drop-shadow-2xl rounded-lg bg-cover flex justify-end items-end\",\n                style: {\n                    backgroundImage: \"url(\".concat(row.cover, \")\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-16 h-16 opacity-0 group-hover:opacity-100 group-hover:mb-1 duration-300 hover:scale-105 bg-contain bg-no-repeat bg-[url(https://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button.png)]\"\n                }, void 0, false, {\n                    fileName: \"/Users/iredui.b/Desktop/spotify/components/Artists.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/iredui.b/Desktop/spotify/components/Artists.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-11/12 h-6 mt-4 flex justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white text-xl font-medium ml-px mt-1\",\n                    children: row.singer\n                }, void 0, false, {\n                    fileName: \"/Users/iredui.b/Desktop/spotify/components/Artists.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/iredui.b/Desktop/spotify/components/Artists.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-11/12 h-12 mt-2 text-gray-400 text-sm flex items-center ml-4 mb-4\",\n                children: \"Artist\"\n            }, void 0, false, {\n                fileName: \"/Users/iredui.b/Desktop/spotify/components/Artists.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/iredui.b/Desktop/spotify/components/Artists.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGlzdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBRVgsU0FBU0MsS0FBSyxLQUFPLEVBQUU7UUFBVCxFQUFFQyxJQUFHLEVBQUUsR0FBUDtJQUMzQixxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFDQ0QsV0FBWTtnQkFDWkUsT0FBTztvQkFBRUMsaUJBQWlCLE9BQWlCLE9BQVZMLElBQUlNLEtBQUssRUFBQztnQkFBRzswQkFFOUMsNEVBQUNIO29CQUFJRCxXQUFVOzs7Ozs7Ozs7OzswQkFFakIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDWkYsSUFBSU8sTUFBTTs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNKO2dCQUFJRCxXQUFVOzBCQUFzRTs7Ozs7Ozs7Ozs7O0FBSzNGLENBQUM7S0FuQnVCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGlzdHMuanM/NjBmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoeyByb3cgfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctWyMxNzE3MTddIGdyb3VwIHJvdW5kZWQtbGcgZmxleCBmbGV4LWNvbCBmb250LW1vbm8gaXRlbXMtY2VudGVyIGhvdmVyOmJnLVsjMzAzMDMwXSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdy0xMS8xMiBoLTQ4IGJnLXdoaXRlIG10LTIgZHJvcC1zaGFkb3ctMnhsIHJvdW5kZWQtbGcgYmctY292ZXIgZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1lbmRgfVxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtyb3cuY292ZXJ9KWAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGdyb3VwLWhvdmVyOm1iLTEgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTEwNSBiZy1jb250YWluIGJnLW5vLXJlcGVhdCBiZy1bdXJsKGh0dHBzOi8vamNjZGFsbGFzLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNi9TcG90aWZ5LVBsYXktQnV0dG9uLnBuZyldXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMS8xMiBoLTYgbXQtNCBmbGV4IGp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1tZWRpdW0gbWwtcHggbXQtMVwiPlxuICAgICAgICAgIHtyb3cuc2luZ2VyfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTExLzEyIGgtMTIgbXQtMiB0ZXh0LWdyYXktNDAwIHRleHQtc20gZmxleCBpdGVtcy1jZW50ZXIgbWwtNCBtYi00XCI+XG4gICAgICAgIEFydGlzdFxuICAgICAgPC9kaXY+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwicm93IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb3ZlciIsInNpbmdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Artists.js\n"));

/***/ })

});