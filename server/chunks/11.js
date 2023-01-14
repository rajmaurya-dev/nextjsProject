"use strict";
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 7011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Homepage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(3576);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/HeroSection.js




const HeroSection = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "flex w-full py-10 flex-col lg:flex-row bg-gradient-to-r from-violet-300 to-violet-400",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex-1 flex flex-col justify-center items-start",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "text-lg font-semibold mx-3 ml-[50px]",
                            children: [
                                "Want to learn coding but don't know where to start? ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                " Look no further than",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-white text-3xl font-bold",
                                    children: "Resourcify!"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                " We provide a vast collection of high-quality coding resources for all skill levels."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://discord.com/api/oauth2/authorize?client_id=1033435229744013413&permissions=534723951680&scope=bot",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                btn: "Add to your Server",
                                className: "ml-7",
                                custom: `ml-10 mt-5`
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-1 flex justify-center items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "../hero1.svg",
                        alt: "hero",
                        className: "h-[370px]"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_HeroSection = (HeroSection);

;// CONCATENATED MODULE: ./components/CodeCard.js


const CodeCard = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " m-5 flex items-center justify-center h-[100px] w-[100px] shadow-xl bg-blue-50 rounded-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "../lang/js.png",
                    alt: "lang",
                    className: "h-[30%] lg:h-[70%]"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " m-5 flex items-center justify-center h-[100px] w-[100px] shadow-xl bg-blue-50 rounded-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "../lang/cpp.png",
                    alt: "lang",
                    className: "h-[30%] lg:h-[70%]"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " m-5 flex items-center justify-center h-[100px] w-[100px] shadow-xl bg-blue-50 rounded-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "../lang/java.png",
                    alt: "lang",
                    className: "h-[30%] lg:h-[70%]"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " m-5 flex items-center justify-center h-[100px] w-[100px] shadow-xl bg-blue-50 rounded-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "../lang/py.png",
                    alt: "lang",
                    className: "h-[30%] lg:h-[70%]"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " m-5 flex items-center justify-center h-[100px] w-[100px] shadow-xl bg-blue-50 rounded-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "../lang/kotlin.png",
                    alt: "lang",
                    className: "h-[30%] lg:h-[70%]"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " m-5 flex items-center justify-center h-[100px] w-[100px] shadow-xl bg-blue-50 rounded-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "../lang/ruby.png",
                    alt: "lang",
                    className: "h-[30%] lg:h-[70%]"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " m-5 flex items-center justify-center h-[100px] w-[100px] shadow-xl bg-blue-50 rounded-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "../lang/swfit.png",
                    alt: "lang",
                    className: "h-[30%] lg:h-[70%]"
                })
            })
        ]
    });
};
/* harmony default export */ const components_CodeCard = (CodeCard);

;// CONCATENATED MODULE: ./components/LanguageSection.js



const LanguageSection = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "py-5 bg-gradient-to-r from-violet-300 to-violet-400",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "font-semibold ml-4",
                    children: "Popular programming languages "
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-wrap justify-center gap-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_CodeCard, {})
                })
            ]
        })
    });
};
/* harmony default export */ const components_LanguageSection = (LanguageSection);

;// CONCATENATED MODULE: ./components/Features.js


const Features = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "flex flex-col w-full md:flex-row justify-around p-10 bg-gradient-to-r from-violet-300 to-violet-400",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "../coding.svg",
                        alt: "coding",
                        className: "w-[300px]"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "drop-shadow-xl flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "font-bold text-white",
                            children: "Your One-Stop-Shop for Coding Resources"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "mt-6 text-blue-700 p-3 bg-blue-50 rounded-md shadow-lg shadow-blue-500/50 font-semibold",
                            children: "Comprehensive collection of coding resources"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "p-3 text-blue-700 bg-blue-50 rounded-md shadow-lg shadow-blue-500/50 font-semibold",
                            children: "Resources for all skill levels, from beginner to advanced"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "p-3 text-blue-700 bg-blue-50 rounded-md shadow-lg shadow-blue-500/50 font-semibold",
                            children: "Interactive tutorials, video lessons, and coding challenges"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Features = (Features);

;// CONCATENATED MODULE: ./components/Community.js



const Community = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-5 flex-col text-gray-900 items-center justify-center h-[400px] w-full relative bg-gradient-to-r from-violet-300 to-violet-400",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: "text-center font-bold text-3xl z-10",
                    children: [
                        "170+ Programmers ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "already connected with us"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mx-5 text-lg z-10",
                    children: "We understand that learning to code can be challenging, that's why our platform is designed to be as accessible and inclusive as possible."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    btn: "Join Now",
                    custom: `mt-5 font-semibold`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "../discord.png",
                    alt: "discord",
                    className: "w-[250px] absolute top-0 left-[20%] -rotate-12 z-0"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Community = (Community);

;// CONCATENATED MODULE: ./components/WhyChooseUs.js


const WhyChooseUs = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center py-10 gap-3 bg-gradient-to-r from-violet-300 to-violet-400",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "w-[50%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-lg font-bold text-white bg-black p-3 rounded-lg",
                    children: "Why Choose Us"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "bg-green-100 text-center text-black p-2 rounded-md w-[50%]",
                    children: "Wide range of programming languages and technologies covered"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "bg-green-100 text-center text-black p-2 rounded-md w-[50%]",
                    children: "Accessible and inclusive platform"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "bg-green-100 text-center text-black p-2 rounded-md w-[50%]",
                    children: "Connect with other learners and get help from experienced developers"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "bg-green-100 text-center text-black p-2 rounded-md w-[50%]",
                    children: "Resources for all skill levels, from beginner to advanced"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "bg-green-100 text-center text-black p-2 rounded-md w-[50%]",
                    children: "Free to access"
                })
            ]
        })
    });
};
/* harmony default export */ const components_WhyChooseUs = (WhyChooseUs);

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(723);
;// CONCATENATED MODULE: ./pages/Homepage.js








const Homepage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_HeroSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_LanguageSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Features, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Community, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_WhyChooseUs, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const pages_Homepage = (Homepage);


/***/ })

};
;