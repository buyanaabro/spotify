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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtistDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./pages/data.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ArtistDetails() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [follow, setFollow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [followStyle, setFollowStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [totalPLays, setTotalPLays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [randomNumber, setRandomNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFollow(\"FOLLOW\");\n    }, []);\n    const boom = ()=>{\n        if (followStyle == false) {\n            setFollow(\"FOLLOWING\");\n            setFollowStyle(true);\n        } else {\n            setFollow(\"FOLLOW\");\n            setFollowStyle(false);\n        }\n    };\n    const rNumber = async ()=>{\n        setRandomNumber(Math.floor(Math.random() * (1000, 100000)).toString());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        rNumber();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen overflow-x-hidden h-[200vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full h-[95vh] flex flex-col items-end bg-[#121212]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[87vw] h-[40vh] bg-cover bg-center flex flex-col\",\n                        style: {\n                            backgroundImage: \"url(\".concat(_data__WEBPACK_IMPORTED_MODULE_2__.data[0].cover, \")\")\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-44 pl-14\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row items-center text-white text-xs\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                src: \"/verified.png\",\n                                                width: 27,\n                                                height: 0\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ml-2\",\n                                                children: \"Verified Artist\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-[600%] mt-[-2vh] font-bold\",\n                                        children: _data__WEBPACK_IMPORTED_MODULE_2__.data[0].singer\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white mt-2\",\n                                        children: \"393,835 monthly listeners\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 39,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"songs\", {\n                        className: \"w-[87vw] h-[55vh]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[30%] h-[20%] flex justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"cursor-pointer hover:w-[62px] hover:h-[62px] hover:mr-[-0.55%] relative right-[17.5%]\",\n                                        src: \"/playButton.png\",\n                                        width: 60,\n                                        height: 0\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: boom,\n                                        className: followStyle ? \"w-32 h-8 ml-[-7.3%] flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] border-white text-white text-xs cursor-default\" : \"w-24 h-8 relative right-8 flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] hover:border-white border-gray-600 text-white text-xs cursor-default\",\n                                        children: follow\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-6 h-6 relative left-2 stroke-gray-400 hover:stroke-white\",\n                                        viewBox: \"0 0 24 24\",\n                                        fill: \"none\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                                id: \"SVGRepo_bgCarrier\",\n                                                \"stroke-width\": \"0\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 160\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                                id: \"SVGRepo_tracerCarrier\",\n                                                \"stroke-linecap\": \"round\",\n                                                \"stroke-linejoin\": \"round\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 207\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                                id: \"SVGRepo_iconCarrier\",\n                                                children: [\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 317\n                                                    }, this),\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 519\n                                                    }, this),\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 721\n                                                    }, this),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 288\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative left-14 font-semibold text-2xl text-white mb-2\",\n                                children: \"Popular\"\n                            }, void 0, false, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this),\n                            _data__WEBPACK_IMPORTED_MODULE_2__.data[0].duu.slice(0, 5).map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                    className: \"relative left-20 mt-[-0.8%] flex items-center text-white flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-400 mr-4 cursor-default\",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"https://i.scdn.co/image/ab67616d00001e0238991276d17ac6315dcd4a92\",\n                                            width: 40,\n                                            height: 0\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"m-6 cursor-pointer hover:underline\",\n                                            children: row\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-400 font-light text-sm\",\n                                            children: randomNumber\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtistDetails, \"DsWkGfxCN/5SzLDCHhjYJz2zrAw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ArtistDetails;\nvar _c;\n$RefreshReg$(_c, \"ArtistDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hFeEIsb0RBQWlCLENBQUMsR0FBRyxHQUFHZ0QsR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNqQyw4REFBQ0M7b0NBQUczQixXQUFVOztzREFDWiw4REFBQzRCOzRDQUFHNUIsV0FBVTtzREFBcUMwQixRQUFROzs7Ozs7c0RBQzNELDhEQUFDL0MsbURBQUtBOzRDQUFDMEIsS0FBSTs0Q0FBbUVDLE9BQU87NENBQUlDLFFBQVE7Ozs7OztzREFDakcsOERBQUNxQjs0Q0FBRzVCLFdBQVU7c0RBQXNDeUI7Ozs7OztzREFDcEQsOERBQUNHOzRDQUFHNUIsV0FBVTtzREFBb0NUOzs7Ozs7O21DQUorQm1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVduRyxDQUFDO0dBMUR1QjNDOztRQUNQRCxrREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BcnRpc3REZXRhaWxzLmpzPzQ3MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnQC9jb21wb25lbnRzL1NpZGViYXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aXN0RGV0YWlscygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2ZvbGxvdywgc2V0Rm9sbG93XSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2ZvbGxvd1N0eWxlLCBzZXRGb2xsb3dTdHlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3RvdGFsUExheXMsIHNldFRvdGFsUExheXNdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbcmFuZG9tTnVtYmVyLCBzZXRSYW5kb21OdW1iZXJdID0gdXNlU3RhdGUoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvbGxvdyhcIkZPTExPV1wiKVxuICB9LCBbXSlcbiAgY29uc3QgYm9vbSA9ICgpID0+IHtcbiAgICBpZihmb2xsb3dTdHlsZSA9PSBmYWxzZSkge1xuICAgICAgc2V0Rm9sbG93KFwiRk9MTE9XSU5HXCIpXG4gICAgICBzZXRGb2xsb3dTdHlsZSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGb2xsb3coXCJGT0xMT1dcIilcbiAgICAgIHNldEZvbGxvd1N0eWxlKGZhbHNlKVxuICAgIH1cbiAgfVxuICBjb25zdCByTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFJhbmRvbU51bWJlcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCwgMTAwMDAwKSkudG9TdHJpbmcoKSlcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJOdW1iZXIoKVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1zY3JlZW4gb3ZlcmZsb3cteC1oaWRkZW4gaC1bMjAwdmhdJz5cbiAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBoLVs5NXZoXSBmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBiZy1bIzEyMTIxMl1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs4N3Z3XSBoLVs0MHZoXSBiZy1jb3ZlciBiZy1jZW50ZXIgZmxleCBmbGV4LWNvbCcgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkYXRhWzBdLmNvdmVyfSlgfX0+XG4gICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtNDQgcGwtMTQnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC14cyc+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyaWZpZWQucG5nXCIgd2lkdGg9ezI3fSBoZWlnaHQ9ezB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTInPlZlcmlmaWVkIEFydGlzdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LVs2MDAlXSBtdC1bLTJ2aF0gZm9udC1ib2xkJz57ZGF0YVswXS5zaW5nZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBtdC0yJz4zOTMsODM1IG1vbnRobHkgbGlzdGVuZXJzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzb25ncyBjbGFzc05hbWU9J3ctWzg3dnddIGgtWzU1dmhdJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzMwJV0gaC1bMjAlXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgaG92ZXI6dy1bNjJweF0gaG92ZXI6aC1bNjJweF0gaG92ZXI6bXItWy0wLjU1JV0gcmVsYXRpdmUgcmlnaHQtWzE3LjUlXScgc3JjPVwiL3BsYXlCdXR0b24ucG5nXCIgd2lkdGg9ezYwfSBoZWlnaHQ9ezB9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2Jvb219IGNsYXNzTmFtZT17Zm9sbG93U3R5bGUgPyAndy0zMiBoLTggbWwtWy03LjMlXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIHRyYWNraW5nLXdpZGVzdCBmb250LXNlbWlib2xkIGJvcmRlci1bMXB4XSBib3JkZXItd2hpdGUgdGV4dC13aGl0ZSB0ZXh0LXhzIGN1cnNvci1kZWZhdWx0JyA6ICd3LTI0IGgtOCByZWxhdGl2ZSByaWdodC04IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbWQgdHJhY2tpbmctd2lkZXN0IGZvbnQtc2VtaWJvbGQgYm9yZGVyLVsxcHhdIGhvdmVyOmJvcmRlci13aGl0ZSBib3JkZXItZ3JheS02MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGN1cnNvci1kZWZhdWx0J30+e2ZvbGxvd308L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0ndy02IGgtNiByZWxhdGl2ZSBsZWZ0LTIgc3Ryb2tlLWdyYXktNDAwIGhvdmVyOnN0cm9rZS13aGl0ZScgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8cGF0aCBkPVwiTTEyIDEzQzEyLjU1MjMgMTMgMTMgMTIuNTUyMyAxMyAxMkMxMyAxMS40NDc3IDEyLjU1MjMgMTEgMTIgMTFDMTEuNDQ3NyAxMSAxMSAxMS40NDc3IDExIDEyQzExIDEyLjU1MjMgMTEuNDQ3NyAxMyAxMiAxM1pcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTE5IDEzQzE5LjU1MjMgMTMgMjAgMTIuNTUyMyAyMCAxMkMyMCAxMS40NDc3IDE5LjU1MjMgMTEgMTkgMTFDMTguNDQ3NyAxMSAxOCAxMS40NDc3IDE4IDEyQzE4IDEyLjU1MjMgMTguNDQ3NyAxMyAxOSAxM1pcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTUgMTNDNS41NTIyOCAxMyA2IDEyLjU1MjMgNiAxMkM2IDExLjQ0NzcgNS41NTIyOCAxMSA1IDExQzQuNDQ3NzIgMTEgNCAxMS40NDc3IDQgMTJDNCAxMi41NTIzIDQuNDQ3NzIgMTMgNSAxM1pcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPiA8L2c+PC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgbGVmdC0xNCBmb250LXNlbWlib2xkIHRleHQtMnhsIHRleHQtd2hpdGUgbWItMic+UG9wdWxhcjwvZGl2PlxuICAgICAgICAgICAgICB7ZGF0YVswXS5kdXUuc2xpY2UoMCwgNSkubWFwKChyb3csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT0ncmVsYXRpdmUgbGVmdC0yMCBtdC1bLTAuOCVdIGZsZXggaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgZmxleCcga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwIG1yLTQgY3Vyc29yLWRlZmF1bHQnPntpbmRleCArIDF9PC9saT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDAxZTAyMzg5OTEyNzZkMTdhYzYzMTVkY2Q0YTkyXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezB9IC8+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtLTYgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lJz57cm93fTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwIGZvbnQtbGlnaHQgdGV4dC1zbSc+e3JhbmRvbU51bWJlcn08L2xpPlxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zb25ncz5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJTaWRlYmFyIiwiSGVhZGVyIiwidXNlUm91dGVyIiwiQXJ0aXN0RGV0YWlscyIsInJvdXRlciIsImZvbGxvdyIsInNldEZvbGxvdyIsImZvbGxvd1N0eWxlIiwic2V0Rm9sbG93U3R5bGUiLCJ0b3RhbFBMYXlzIiwic2V0VG90YWxQTGF5cyIsInJhbmRvbU51bWJlciIsInNldFJhbmRvbU51bWJlciIsImJvb20iLCJyTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb3ZlciIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic2luZ2VyIiwic29uZ3MiLCJvbkNsaWNrIiwic3ZnIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImciLCJpZCIsInN0cm9rZS13aWR0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwicGF0aCIsImQiLCJkdXUiLCJzbGljZSIsIm1hcCIsInJvdyIsImluZGV4Iiwib2wiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ArtistDetails.js\n"));

/***/ })

});