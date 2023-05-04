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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtistDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./pages/data.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ArtistDetails() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [follow, setFollow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [followStyle, setFollowStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [totalPLays, setTotalPLays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFollow(\"FOLLOW\");\n    }, []);\n    const boom = ()=>{\n        if (followStyle == false) {\n            setFollow(\"FOLLOWING\");\n            setFollowStyle(true);\n        } else {\n            setFollow(\"FOLLOW\");\n            setFollowStyle(false);\n        }\n    };\n    const randomNumber = ()=>{\n        return Math.floor(Math.random() * (1000, 100000));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen overflow-x-hidden h-[200vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full h-[95vh] flex flex-col items-end bg-[#121212]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[87vw] h-[40vh] bg-cover bg-center flex flex-col\",\n                        style: {\n                            backgroundImage: \"url(\".concat(_data__WEBPACK_IMPORTED_MODULE_2__.data[0].cover, \")\")\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-44 pl-14\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row items-center text-white text-xs\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                src: \"/verified.png\",\n                                                width: 27,\n                                                height: 0\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ml-2\",\n                                                children: \"Verified Artist\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-[600%] mt-[-2vh] font-bold\",\n                                        children: _data__WEBPACK_IMPORTED_MODULE_2__.data[0].singer\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white mt-2\",\n                                        children: \"393,835 monthly listeners\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"songs\", {\n                        className: \"w-[87vw] h-[55vh]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[30%] h-[20%] flex justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"cursor-pointer hover:w-[62px] hover:h-[62px] hover:mr-[-0.55%] relative right-[17.5%]\",\n                                        src: \"/playButton.png\",\n                                        width: 60,\n                                        height: 0\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: boom,\n                                        className: followStyle ? \"w-32 h-8 ml-[-7.3%] flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] border-white text-white text-xs cursor-default\" : \"w-24 h-8 relative right-8 flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] hover:border-white border-gray-600 text-white text-xs cursor-default\",\n                                        children: follow\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-6 h-6 relative left-2 stroke-gray-400 hover:stroke-white\",\n                                        viewBox: \"0 0 24 24\",\n                                        fill: \"none\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                                id: \"SVGRepo_bgCarrier\",\n                                                \"stroke-width\": \"0\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 160\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                                id: \"SVGRepo_tracerCarrier\",\n                                                \"stroke-linecap\": \"round\",\n                                                \"stroke-linejoin\": \"round\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 207\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                                id: \"SVGRepo_iconCarrier\",\n                                                children: [\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 317\n                                                    }, this),\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 519\n                                                    }, this),\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 721\n                                                    }, this),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 288\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative left-14 font-semibold text-2xl text-white mb-2\",\n                                children: \"Popular\"\n                            }, void 0, false, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this),\n                            _data__WEBPACK_IMPORTED_MODULE_2__.data[0].duu.slice(0, 5).map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                    className: \"relative left-20 mt-[-0.8%] flex items-center text-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-400 mr-4 cursor-default\",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"https://i.scdn.co/image/ab67616d00001e0238991276d17ac6315dcd4a92\",\n                                            width: 40,\n                                            height: 0\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"m-6 cursor-pointer hover:underline\",\n                                            children: row\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-white\",\n                                            children: randomNumber()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtistDetails, \"4pYjTfGLG6+9O2JZ4pP48v953Jc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ArtistDetails;\nvar _c;\n$RefreshReg$(_c, \"ArtistDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7c0RBQXFDMEIsUUFBUTs7Ozs7O3NEQUMzRCw4REFBQzVDLG1EQUFLQTs0Q0FBQ3VCLEtBQUk7NENBQW1FQyxPQUFPOzRDQUFJQyxRQUFROzs7Ozs7c0RBQ2pHLDhEQUFDcUI7NENBQUc1QixXQUFVO3NEQUFzQ3lCOzs7Ozs7c0RBQ3BELDhEQUFDRzs0Q0FBRzVCLFdBQVU7c0RBQWNMOzs7Ozs7O21DQUpnRCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc5RixDQUFDO0dBdER1QnhDOztRQUNQRCxrREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BcnRpc3REZXRhaWxzLmpzPzQ3MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnQC9jb21wb25lbnRzL1NpZGViYXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aXN0RGV0YWlscygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2ZvbGxvdywgc2V0Rm9sbG93XSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2ZvbGxvd1N0eWxlLCBzZXRGb2xsb3dTdHlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3RvdGFsUExheXMsIHNldFRvdGFsUExheXNdID0gdXNlU3RhdGUoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvbGxvdyhcIkZPTExPV1wiKVxuICB9LCBbXSlcbiAgY29uc3QgYm9vbSA9ICgpID0+IHtcbiAgICBpZihmb2xsb3dTdHlsZSA9PSBmYWxzZSkge1xuICAgICAgc2V0Rm9sbG93KFwiRk9MTE9XSU5HXCIpXG4gICAgICBzZXRGb2xsb3dTdHlsZSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGb2xsb3coXCJGT0xMT1dcIilcbiAgICAgIHNldEZvbGxvd1N0eWxlKGZhbHNlKVxuICAgIH1cbiAgfVxuICBjb25zdCByYW5kb21OdW1iZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwLCAxMDAwMDApKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIG92ZXJmbG93LXgtaGlkZGVuIGgtWzIwMHZoXSc+XG4gICAgICA8U2lkZWJhciAvPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bOTV2aF0gZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgYmctWyMxMjEyMTJdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bODd2d10gaC1bNDB2aF0gYmctY292ZXIgYmctY2VudGVyIGZsZXggZmxleC1jb2wnIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YVswXS5jb3Zlcn0pYH19PlxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTQ0IHBsLTE0Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQteHMnPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmlmaWVkLnBuZ1wiIHdpZHRoPXsyN30gaGVpZ2h0PXswfS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC0yJz5WZXJpZmllZCBBcnRpc3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC1bNjAwJV0gbXQtWy0ydmhdIGZvbnQtYm9sZCc+e2RhdGFbMF0uc2luZ2VyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtd2hpdGUgbXQtMic+MzkzLDgzNSBtb250aGx5IGxpc3RlbmVyczwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c29uZ3MgY2xhc3NOYW1lPSd3LVs4N3Z3XSBoLVs1NXZoXSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVszMCVdIGgtWzIwJV0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGhvdmVyOnctWzYycHhdIGhvdmVyOmgtWzYycHhdIGhvdmVyOm1yLVstMC41NSVdIHJlbGF0aXZlIHJpZ2h0LVsxNy41JV0nIHNyYz1cIi9wbGF5QnV0dG9uLnBuZ1wiIHdpZHRoPXs2MH0gaGVpZ2h0PXswfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtib29tfSBjbGFzc05hbWU9e2ZvbGxvd1N0eWxlID8gJ3ctMzIgaC04IG1sLVstNy4zJV0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCB0cmFja2luZy13aWRlc3QgZm9udC1zZW1pYm9sZCBib3JkZXItWzFweF0gYm9yZGVyLXdoaXRlIHRleHQtd2hpdGUgdGV4dC14cyBjdXJzb3ItZGVmYXVsdCcgOiAndy0yNCBoLTggcmVsYXRpdmUgcmlnaHQtOCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIHRyYWNraW5nLXdpZGVzdCBmb250LXNlbWlib2xkIGJvcmRlci1bMXB4XSBob3Zlcjpib3JkZXItd2hpdGUgYm9yZGVyLWdyYXktNjAwIHRleHQtd2hpdGUgdGV4dC14cyBjdXJzb3ItZGVmYXVsdCd9Pntmb2xsb3d9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J3ctNiBoLTYgcmVsYXRpdmUgbGVmdC0yIHN0cm9rZS1ncmF5LTQwMCBob3ZlcjpzdHJva2Utd2hpdGUnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPHBhdGggZD1cIk0xMiAxM0MxMi41NTIzIDEzIDEzIDEyLjU1MjMgMTMgMTJDMTMgMTEuNDQ3NyAxMi41NTIzIDExIDEyIDExQzExLjQ0NzcgMTEgMTEgMTEuNDQ3NyAxMSAxMkMxMSAxMi41NTIzIDExLjQ0NzcgMTMgMTIgMTNaXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD4gPHBhdGggZD1cIk0xOSAxM0MxOS41NTIzIDEzIDIwIDEyLjU1MjMgMjAgMTJDMjAgMTEuNDQ3NyAxOS41NTIzIDExIDE5IDExQzE4LjQ0NzcgMTEgMTggMTEuNDQ3NyAxOCAxMkMxOCAxMi41NTIzIDE4LjQ0NzcgMTMgMTkgMTNaXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD4gPHBhdGggZD1cIk01IDEzQzUuNTUyMjggMTMgNiAxMi41NTIzIDYgMTJDNiAxMS40NDc3IDUuNTUyMjggMTEgNSAxMUM0LjQ0NzcyIDExIDQgMTEuNDQ3NyA0IDEyQzQgMTIuNTUyMyA0LjQ0NzcyIDEzIDUgMTNaXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD4gPC9nPjwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGxlZnQtMTQgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bCB0ZXh0LXdoaXRlIG1iLTInPlBvcHVsYXI8L2Rpdj5cbiAgICAgICAgICAgICAge2RhdGFbMF0uZHV1LnNsaWNlKDAsIDUpLm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9J3JlbGF0aXZlIGxlZnQtMjAgbXQtWy0wLjglXSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAgbXItNCBjdXJzb3ItZGVmYXVsdCc+e2luZGV4ICsgMX08L2xpPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDFlMDIzODk5MTI3NmQxN2FjNjMxNWRjZDRhOTJcIiB3aWR0aD17NDB9IGhlaWdodD17MH0gLz5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J20tNiBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUnPntyb3d9PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntyYW5kb21OdW1iZXIoKX08L2xpPlxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zb25ncz5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJTaWRlYmFyIiwiSGVhZGVyIiwidXNlUm91dGVyIiwiQXJ0aXN0RGV0YWlscyIsInJvdXRlciIsImZvbGxvdyIsInNldEZvbGxvdyIsImZvbGxvd1N0eWxlIiwic2V0Rm9sbG93U3R5bGUiLCJ0b3RhbFBMYXlzIiwic2V0VG90YWxQTGF5cyIsImJvb20iLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb3ZlciIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic2luZ2VyIiwic29uZ3MiLCJvbkNsaWNrIiwic3ZnIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImciLCJpZCIsInN0cm9rZS13aWR0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwicGF0aCIsImQiLCJkdXUiLCJzbGljZSIsIm1hcCIsInJvdyIsImluZGV4Iiwib2wiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ArtistDetails.js\n"));

/***/ })

});