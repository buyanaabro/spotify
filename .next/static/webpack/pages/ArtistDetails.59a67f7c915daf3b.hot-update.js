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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtistDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./pages/data.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ArtistDetails() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [follow, setFollow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [followStyle, setFollowStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [totalPLays, setTotalPLays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [randomNumber, setRandomNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFollow(\"FOLLOW\");\n    }, []);\n    const boom = ()=>{\n        if (followStyle == false) {\n            setFollow(\"FOLLOWING\");\n            setFollowStyle(true);\n        } else {\n            setFollow(\"FOLLOW\");\n            setFollowStyle(false);\n        }\n    };\n    const rNumber = ()=>{\n        _s1();\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            return Math.floor(Math.random() * (1000, 100000)).toString();\n        });\n    };\n    _s1(rNumber, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen overflow-x-hidden h-[200vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full h-[95vh] flex flex-col items-end bg-[#121212]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[87vw] h-[40vh] bg-cover bg-center flex flex-col\",\n                        style: {\n                            backgroundImage: \"url(\".concat(_data__WEBPACK_IMPORTED_MODULE_2__.data[0].cover, \")\")\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-44 pl-14\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row items-center text-white text-xs\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                src: \"/verified.png\",\n                                                width: 27,\n                                                height: 0\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ml-2\",\n                                                children: \"Verified Artist\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-[600%] mt-[-2vh] font-bold\",\n                                        children: _data__WEBPACK_IMPORTED_MODULE_2__.data[0].singer\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white mt-2\",\n                                        children: \"393,835 monthly listeners\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 38,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"songs\", {\n                        className: \"w-[87vw] h-[55vh]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[30%] h-[20%] flex justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: \"cursor-pointer hover:w-[62px] hover:h-[62px] hover:mr-[-0.55%] relative right-[17.5%]\",\n                                        src: \"/playButton.png\",\n                                        width: 60,\n                                        height: 0\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: boom,\n                                        className: followStyle ? \"w-32 h-8 ml-[-7.3%] flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] border-white text-white text-xs cursor-default\" : \"w-24 h-8 relative right-8 flex justify-center items-center rounded-md tracking-widest font-semibold border-[1px] hover:border-white border-gray-600 text-white text-xs cursor-default\",\n                                        children: follow\n                                    }, void 0, false, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-6 h-6 relative left-2 stroke-gray-400 hover:stroke-white\",\n                                        viewBox: \"0 0 24 24\",\n                                        fill: \"none\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                                id: \"SVGRepo_bgCarrier\",\n                                                \"stroke-width\": \"0\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 160\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                                id: \"SVGRepo_tracerCarrier\",\n                                                \"stroke-linecap\": \"round\",\n                                                \"stroke-linejoin\": \"round\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 207\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                                                id: \"SVGRepo_iconCarrier\",\n                                                children: [\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 317\n                                                    }, this),\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 519\n                                                    }, this),\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 721\n                                                    }, this),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 288\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative left-14 font-semibold text-2xl text-white mb-2\",\n                                children: \"Popular\"\n                            }, void 0, false, {\n                                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this),\n                            _data__WEBPACK_IMPORTED_MODULE_2__.data[0].duu.slice(0, 5).map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                    className: \"relative left-20 mt-[-0.8%] flex items-center text-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-400 mr-4 cursor-default\",\n                                            children: index + 1\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: \"https://i.scdn.co/image/ab67616d00001e0238991276d17ac6315dcd4a92\",\n                                            width: 40,\n                                            height: 0\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"m-6 cursor-pointer hover:underline\",\n                                            children: row\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-white\",\n                                            children: rNumber()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/buyanaa/Desktop/spotify/pages/ArtistDetails.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(ArtistDetails, \"E4nX/Z5a832GdTJPBVQz+rdCuMw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ArtistDetails;\nvar _c;\n$RefreshReg$(_c, \"ArtistDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BcnRpc3REZXRhaWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0k7QUFDYztBQUNiO0FBQ1k7QUFDRjtBQUNEO0FBRXhCLFNBQVNRLGdCQUFnQjs7O0lBQ3RDLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBO0lBQ2hEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLFVBQVU7SUFDWixHQUFHLEVBQUU7SUFDTCxNQUFNTyxPQUFPLElBQU07UUFDakIsSUFBR04sZUFBZSxLQUFLLEVBQUU7WUFDdkJELFVBQVU7WUFDVkUsZUFBZSxJQUFJO1FBQ3JCLE9BQU87WUFDTEYsVUFBVTtZQUNWRSxlQUFlLEtBQUs7UUFDdEIsQ0FBQztJQUNIO0lBQ0EsTUFBTU0sVUFBVSxJQUFNOztRQUNwQmhCLGdEQUFTQSxDQUFDLElBQU07WUFDZCxPQUFPaUIsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQU0sT0FBTSxNQUFNLEdBQUdDLFFBQVE7UUFDOUQ7SUFDQTtRQUpNSjtJQUtOLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3BCLDJEQUFPQTs7Ozs7MEJBQ04sOERBQUNxQjtnQkFBS0QsV0FBVTs7a0NBQ1osOERBQUNEO3dCQUFJQyxXQUFVO3dCQUFxREUsT0FBTzs0QkFBQ0MsaUJBQWlCLE9BQXFCLE9BQWQzQixnREFBYSxFQUFDO3dCQUFFOzswQ0FDbEgsOERBQUNLLDBEQUFNQTs7Ozs7MENBQ0wsOERBQUNrQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ3JCLG1EQUFLQTtnREFBQzBCLEtBQUk7Z0RBQWdCQyxPQUFPO2dEQUFJQyxRQUFROzs7Ozs7MERBQzlDLDhEQUFDUjtnREFBSUMsV0FBVTswREFBTzs7Ozs7Ozs7Ozs7O2tEQUV4Qiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQThDeEIsaURBQWM7Ozs7OztrREFDM0UsOERBQUN1Qjt3Q0FBSUMsV0FBVTtrREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHdkMsOERBQUNTO3dCQUFNVCxXQUFVOzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDckIsbURBQUtBO3dDQUFDcUIsV0FBVTt3Q0FBd0ZLLEtBQUk7d0NBQWtCQyxPQUFPO3dDQUFJQyxRQUFROzs7Ozs7a0RBQ2xKLDhEQUFDUjt3Q0FBSVcsU0FBU2pCO3dDQUFNTyxXQUFXYixjQUFjLDhKQUE4Six1TEFBdUw7a0RBQUdGOzs7Ozs7a0RBQ3JZLDhEQUFDMEI7d0NBQUlYLFdBQVU7d0NBQTZEWSxTQUFRO3dDQUFZQyxNQUFLO3dDQUFPQyxPQUFNOzswREFBNkIsOERBQUNDO2dEQUFFQyxJQUFHO2dEQUFvQkMsZ0JBQWE7Ozs7OzswREFBUSw4REFBQ0Y7Z0RBQUVDLElBQUc7Z0RBQXdCRSxrQkFBZTtnREFBUUMsbUJBQWdCOzs7Ozs7MERBQVksOERBQUNKO2dEQUFFQyxJQUFHOztvREFBc0I7a0VBQUMsOERBQUNJO3dEQUFLQyxHQUFFO3dEQUEwSEosZ0JBQWE7d0RBQUlDLGtCQUFlO3dEQUFRQyxtQkFBZ0I7Ozs7OztvREFBZTtrRUFBQyw4REFBQ0M7d0RBQUtDLEdBQUU7d0RBQTBISixnQkFBYTt3REFBSUMsa0JBQWU7d0RBQVFDLG1CQUFnQjs7Ozs7O29EQUFlO2tFQUFDLDhEQUFDQzt3REFBS0MsR0FBRTt3REFBaUhKLGdCQUFhO3dEQUFJQyxrQkFBZTt3REFBUUMsbUJBQWdCOzs7Ozs7b0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRWw0Qiw4REFBQ3BCO2dDQUFJQyxXQUFVOzBDQUEwRDs7Ozs7OzRCQUN4RXhCLG9EQUFpQixDQUFDLEdBQUcsR0FBR2dELEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDakMsOERBQUNDO29DQUFHM0IsV0FBVTs7c0RBQ1osOERBQUM0Qjs0Q0FBRzVCLFdBQVU7c0RBQXFDMEIsUUFBUTs7Ozs7O3NEQUMzRCw4REFBQy9DLG1EQUFLQTs0Q0FBQzBCLEtBQUk7NENBQW1FQyxPQUFPOzRDQUFJQyxRQUFROzs7Ozs7c0RBQ2pHLDhEQUFDcUI7NENBQUc1QixXQUFVO3NEQUFzQ3lCOzs7Ozs7c0RBQ3BELDhEQUFDRzs0Q0FBRzVCLFdBQVU7c0RBQWNOOzs7Ozs7O21DQUpnRGdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc5RixDQUFDO0dBekR1QjNDOztRQUNQRCxrREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BcnRpc3REZXRhaWxzLmpzPzQ3MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnQC9jb21wb25lbnRzL1NpZGViYXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aXN0RGV0YWlscygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2ZvbGxvdywgc2V0Rm9sbG93XSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2ZvbGxvd1N0eWxlLCBzZXRGb2xsb3dTdHlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3RvdGFsUExheXMsIHNldFRvdGFsUExheXNdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbcmFuZG9tTnVtYmVyLCBzZXRSYW5kb21OdW1iZXJdID0gdXNlU3RhdGUoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvbGxvdyhcIkZPTExPV1wiKVxuICB9LCBbXSlcbiAgY29uc3QgYm9vbSA9ICgpID0+IHtcbiAgICBpZihmb2xsb3dTdHlsZSA9PSBmYWxzZSkge1xuICAgICAgc2V0Rm9sbG93KFwiRk9MTE9XSU5HXCIpXG4gICAgICBzZXRGb2xsb3dTdHlsZSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGb2xsb3coXCJGT0xMT1dcIilcbiAgICAgIHNldEZvbGxvd1N0eWxlKGZhbHNlKVxuICAgIH1cbiAgfVxuICBjb25zdCByTnVtYmVyID0gKCkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAsIDEwMDAwMCkpLnRvU3RyaW5nKClcbiAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LXNjcmVlbiBvdmVyZmxvdy14LWhpZGRlbiBoLVsyMDB2aF0nPlxuICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIGgtWzk1dmhdIGZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGJnLVsjMTIxMjEyXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzg3dnddIGgtWzQwdmhdIGJnLWNvdmVyIGJnLWNlbnRlciBmbGV4IGZsZXgtY29sJyBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2RhdGFbMF0uY292ZXJ9KWB9fT5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC00NCBwbC0xNCc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXhzJz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJpZmllZC5wbmdcIiB3aWR0aD17Mjd9IGhlaWdodD17MH0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtMic+VmVyaWZpZWQgQXJ0aXN0PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHRleHQtWzYwMCVdIG10LVstMnZoXSBmb250LWJvbGQnPntkYXRhWzBdLnNpbmdlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG10LTInPjM5Myw4MzUgbW9udGhseSBsaXN0ZW5lcnM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNvbmdzIGNsYXNzTmFtZT0ndy1bODd2d10gaC1bNTV2aF0nPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bMzAlXSBoLVsyMCVdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3Zlcjp3LVs2MnB4XSBob3ZlcjpoLVs2MnB4XSBob3Zlcjptci1bLTAuNTUlXSByZWxhdGl2ZSByaWdodC1bMTcuNSVdJyBzcmM9XCIvcGxheUJ1dHRvbi5wbmdcIiB3aWR0aD17NjB9IGhlaWdodD17MH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Ym9vbX0gY2xhc3NOYW1lPXtmb2xsb3dTdHlsZSA/ICd3LTMyIGgtOCBtbC1bLTcuMyVdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtbWQgdHJhY2tpbmctd2lkZXN0IGZvbnQtc2VtaWJvbGQgYm9yZGVyLVsxcHhdIGJvcmRlci13aGl0ZSB0ZXh0LXdoaXRlIHRleHQteHMgY3Vyc29yLWRlZmF1bHQnIDogJ3ctMjQgaC04IHJlbGF0aXZlIHJpZ2h0LTggZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCB0cmFja2luZy13aWRlc3QgZm9udC1zZW1pYm9sZCBib3JkZXItWzFweF0gaG92ZXI6Ym9yZGVyLXdoaXRlIGJvcmRlci1ncmF5LTYwMCB0ZXh0LXdoaXRlIHRleHQteHMgY3Vyc29yLWRlZmF1bHQnfT57Zm9sbG93fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSd3LTYgaC02IHJlbGF0aXZlIGxlZnQtMiBzdHJva2UtZ3JheS00MDAgaG92ZXI6c3Ryb2tlLXdoaXRlJyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+PGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+IDxwYXRoIGQ9XCJNMTIgMTNDMTIuNTUyMyAxMyAxMyAxMi41NTIzIDEzIDEyQzEzIDExLjQ0NzcgMTIuNTUyMyAxMSAxMiAxMUMxMS40NDc3IDExIDExIDExLjQ0NzcgMTEgMTJDMTEgMTIuNTUyMyAxMS40NDc3IDEzIDEyIDEzWlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNMTkgMTNDMTkuNTUyMyAxMyAyMCAxMi41NTIzIDIwIDEyQzIwIDExLjQ0NzcgMTkuNTUyMyAxMSAxOSAxMUMxOC40NDc3IDExIDE4IDExLjQ0NzcgMTggMTJDMTggMTIuNTUyMyAxOC40NDc3IDEzIDE5IDEzWlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNNSAxM0M1LjU1MjI4IDEzIDYgMTIuNTUyMyA2IDEyQzYgMTEuNDQ3NyA1LjU1MjI4IDExIDUgMTFDNC40NDc3MiAxMSA0IDExLjQ0NzcgNCAxMkM0IDEyLjU1MjMgNC40NDc3MiAxMyA1IDEzWlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDwvZz48L3N2Zz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBsZWZ0LTE0IGZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgdGV4dC13aGl0ZSBtYi0yJz5Qb3B1bGFyPC9kaXY+XG4gICAgICAgICAgICAgIHtkYXRhWzBdLmR1dS5zbGljZSgwLCA1KS5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPSdyZWxhdGl2ZSBsZWZ0LTIwIG10LVstMC44JV0gZmxleCBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwIG1yLTQgY3Vyc29yLWRlZmF1bHQnPntpbmRleCArIDF9PC9saT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDAxZTAyMzg5OTEyNzZkMTdhYzYzMTVkY2Q0YTkyXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezB9IC8+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtLTYgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lJz57cm93fTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57ck51bWJlcigpfTwvbGk+XG4gICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NvbmdzPlxuICAgICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJkYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIlNpZGViYXIiLCJIZWFkZXIiLCJ1c2VSb3V0ZXIiLCJBcnRpc3REZXRhaWxzIiwicm91dGVyIiwiZm9sbG93Iiwic2V0Rm9sbG93IiwiZm9sbG93U3R5bGUiLCJzZXRGb2xsb3dTdHlsZSIsInRvdGFsUExheXMiLCJzZXRUb3RhbFBMYXlzIiwicmFuZG9tTnVtYmVyIiwic2V0UmFuZG9tTnVtYmVyIiwiYm9vbSIsInJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNvdmVyIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzaW5nZXIiLCJzb25ncyIsIm9uQ2xpY2siLCJzdmciLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwiZyIsImlkIiwic3Ryb2tlLXdpZHRoIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJwYXRoIiwiZCIsImR1dSIsInNsaWNlIiwibWFwIiwicm93IiwiaW5kZXgiLCJvbCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ArtistDetails.js\n"));

/***/ })

});