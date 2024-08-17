(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [773], {
        621: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return i
                }
            });
            var l = s(1527),
                n = s(959),
                r = s(7551);

            function o(e) {
                let {
                    setUser: t,
                    setChat: s
                } = e, [o, a] = (0, n.useState)(""), i = async e => {
                    e.preventDefault(), a("")
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: "absolute z-[-1] clipP w-full h-full bg-sky-400"
                    }), (0, l.jsx)(r.E0L, {
                        className: "h-12 w-12 text-white"
                    }), (0, l.jsx)("p", {
                        className: " font-bold px-5 text-center text-white text-xl",
                        children: "Welcome to our support chat"
                    }), (0, l.jsxs)("form", {
                        onSubmit: i,
                        className: "flex flex-col justify-center items-center gap-4",
                        children: [(0, l.jsx)("input", {
                            className: "ring-2 outline-none rounded-md py-2 w-48 pl-2 ring-sky-400 placeholder:text-xs text-xs",
                            placeholder: "enter you email",
                            type: "email",
                            required: !0,
                            autoFocus: !0,
                            value: o,
                            onChange: e => a(e.target.value)
                        }), (0, l.jsx)("p", {
                            className: "font-bold px-6 text-center text-md",
                            children: "Enter your email address to get started"
                        }), (0, l.jsx)("button", {
                            type: "submit",
                            className: " shadow-xl py-[2px] px-3 sm:px-4 sm:py-1  text-base font-semibold text-white  bg-sky-400 rounded-xl cursor-pointer hover:bg-sky-600 transition-colors",
                            children: "Submit"
                        })]
                    })]
                })
            }

            function a(e) {
                let {
                    setShowWindow: t
                } = e, [s, r] = (0, n.useState)(null), [a, i] = (0, n.useState)(null);
                return (0, l.jsxs)("nav", {
                    className: " fixed h-[100vh] w-[100vw] z-50",
                    children: [(0, l.jsx)("div", {
                        className: "fixed h-[100vh] w-[100vw]",
                        onClick: () => t(!1)
                    }), (0, l.jsx)("nav", {
                        className: "right-0 flex flex-col gap-4 justify-center sm:right-5 bottom-20 fixed shadow-2xl items-center  overflow-hidden h-80 sm:h-96 w-60 sm:w-80 z-20 rounded-l-lg sm:rounded-lg bg-zinc-50",
                        children: null === s || null === a ? (0, l.jsx)(o, {
                            setUser: r,
                            setChat: i
                        }) : null
                    })]
                })
            }
            var i = (0, n.memo)(() => {
                let [e, t] = (0, n.useState)(!1), [s, o] = (0, n.useState)(!1);
                return console.log("chat"), (0, l.jsxs)("main", {
                    children: [s && (0, l.jsx)(a, {
                        setShowWindow: o
                    }), (0, l.jsxs)("div", {
                        className: " z-10 shadow-xl flex justify-center items-center text-white right-1 sm:right-5 bottom-5 fixed",
                        children: [(0, l.jsx)("div", {
                            onMouseEnter: () => t(!0),
                            onMouseLeave: () => t(!1),
                            onClick: () => o(!0),
                            className: "cursor-pointer w-12 h-12 bg-sky-400 flex justify-center items-center rounded-full hover:bg-sky-600 py-2 px-2 ",
                            children: (0, l.jsx)(r.wbT, {})
                        }), (0, l.jsx)("div", {
                            className: " ".concat(!1 == e && "opacity-0", "\n      transition-opacity hover:bg-sky-600 shadow-xl\n      duration-500\n      bg-sky-400 absolute left-[-230%] px-3 py-1 rounded-3xl\n      flex items-center justify-center "),
                            children: "Talk Now!"
                        })]
                    })]
                })
            })
        },
        5722: function(e, t, s) {
            "use strict";
            var l = s(1527),
                n = s(1889),
                r = s(959);
            t.Z = (0, r.memo)(e => {
                let {
                    geography: t
                } = e, {
                    isLoaded: s
                } = (0, n.Db)({
                    googleMapsApiKey: "AIzaSyBjNOA4CRXgARyq2DfIg50e2EjuYlAPxWo"
                });
                return s ? (0, l.jsx)(n.b6, {
                    zoom: 17,
                    center: t,
                    mapContainerClassName: "map-container",
                    children: (0, l.jsx)(n.Jx, {
                        position: t
                    })
                }) : (0, l.jsx)("div", {
                    children: "Loading..."
                })
            })
        },
        2929: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return n
                }
            });
            var l = s(1527);

            function n(e) {
                let {
                    title: t
                } = e;
                return (0, l.jsxs)("section", {
                    children: [(0, l.jsx)("h3", {
                        className: " font-bold ",
                        children: "Learn more about this property"
                    }), (0, l.jsxs)("fieldset", {
                        className: " w-full rounded-sm border-2 h-14 border-sky-200  px-1 my-5",
                        children: [(0, l.jsx)("legend", {
                            className: " px-1 text-xs font-bold",
                            children: "Phone"
                        }), (0, l.jsx)("input", {
                            className: " text-gray-700 text-sm w-full placeholder:text-gray-500 placeholder:text-xs outline-none px-5",
                            placeholder: "Phone"
                        })]
                    }), (0, l.jsxs)("fieldset", {
                        className: " w-full overflow-hidden rounded-sm border-2 h-14 border-sky-200  px-1 my-5",
                        children: [(0, l.jsx)("legend", {
                            className: " px-1 text-xs font-bold",
                            children: "Email"
                        }), (0, l.jsx)("input", {
                            className: " text-gray-700 text-sm w-full placeholder:text-gray-500 placeholder:text-xs outline-none px-5",
                            placeholder: "Email"
                        })]
                    }), (0, l.jsxs)("fieldset", {
                        className: " w-full rounded-sm border-2 h-16 border-sky-200  px-1 my-5",
                        children: [(0, l.jsx)("legend", {
                            className: " px-1 text-xs font-bold",
                            children: "Message"
                        }), (0, l.jsx)("textarea", {
                            defaultValue: "I'm interested in ".concat(t),
                            className: " overflow-hidden text-gray-700 text-sm h-full w-full placeholder:text-gray-500 resize-none placeholder:text-xs outline-none px-5",
                            placeholder: "Message"
                        })]
                    }), (0, l.jsx)("div", {
                        className: " text-white font-extrabold cursor-pointer rounded-md hover:bg-sky-500 h-10 my-5 bg-sky-600 flex justify-center items-center ",
                        children: "Request info"
                    }), (0, l.jsxs)("label", {
                        children: [(0, l.jsx)("input", {
                            type: "checkbox"
                        }), (0, l.jsx)("span", {
                            className: " ml-2 text-xs text-gray-500",
                            children: "I want to talk about financing"
                        }), (0, l.jsxs)("p", {
                            className: " text-zinc-500 text-xs mt-3",
                            children: ["By pressing Request Info, you agree that us and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services.", " ", (0, l.jsx)("span", {
                                className: " text-sky-500 underline underline-offset-1",
                                children: "Message/data"
                            }), " ", "rates may apply. You also", " ", (0, l.jsx)("span", {
                                className: " text-sky-500 underline underline-offset-1",
                                children: "agree to our Terms."
                            })]
                        })]
                    })]
                })
            }
        },
        9652: function(e, t, s) {
            "use strict";
            var l = s(1527),
                n = s(7551),
                r = s(1401),
                o = s(6425);

            function a(e) {
                let {
                    children: t
                } = e, s = (0, o.useRouter)(), n = window.location.origin + s.asPath, r = "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent("Check out this home on"), "&url=").concat(encodeURIComponent(n));
                return (0, l.jsx)("button", {
                    onClick: function() {
                        window.open(r, "_blank")
                    },
                    children: t
                })
            }
            t.Z = () => ((0, o.useRouter)(), (0, l.jsxs)("div", {
                children: [(0, l.jsx)("h3", {
                    className: " text-2xl font-extrabold",
                    children: " Share Home "
                }), (0, l.jsxs)("div", {
                    children: [(0, l.jsx)("label", {
                        className: " my-1 block text-sm text-gray-500",
                        children: "Share Home With:"
                    }), (0, l.jsx)("input", {
                        className: " my-2 py-1 sm:py-2 placeholder:text-md sm:placeholder:text-xl w-[100%] font-light pl-4 ring-2 rounded-md ring-sky-200 text-gray-400",
                        placeholder: "Recipients Email Address"
                    }), (0, l.jsxs)("div", {
                        className: " my-3 flex gap-4",
                        children: [(0, l.jsx)("button", {
                            className: " hover:bg-sky-600 fonse py-2 px-4 bg-sky-500 shadow-lg rounded-lg text-white",
                            children: "Share"
                        }), (0, l.jsx)("button", {
                            className: " hover:bg-gray-300 fonse py-2 px-4 border-2 rounded-lg",
                            children: "Cancel"
                        })]
                    })]
                }), (0, l.jsxs)("div", {
                    className: "grid mt-5 gap-y-4",
                    children: [(0, l.jsxs)("div", {
                        onClick: () => {
                            let e = window.location.href;
                            navigator.clipboard.writeText(e)
                        },
                        className: "flex cursor-pointer gap-2 items-center",
                        children: [(0, l.jsx)(n.vlz, {
                            className: " text-4xl text-gray-400"
                        }), (0, l.jsx)("span", {
                            className: " text-lg font-extrabold ",
                            children: " Copy Link "
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex cursor-pointer gap-2 items-center",
                        children: [(0, l.jsx)(n.g_8, {
                            className: " text-4xl text-gray-400"
                        }), (0, l.jsx)("span", {
                            className: " text-lg font-extrabold ",
                            children: " Send SMS "
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex cursor-pointer gap-2 items-center",
                        children: [(0, l.jsx)(r.sAh, {
                            className: " text-4xl text-gray-400"
                        }), (0, l.jsx)("span", {
                            className: " text-lg font-extrabold ",
                            children: " Messenger "
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex cursor-pointer gap-2 items-center",
                        children: [(0, l.jsx)(r.xpo, {
                            className: " text-4xl text-gray-400"
                        }), (0, l.jsx)("span", {
                            className: " text-lg font-extrabold ",
                            children: " WhatsApp "
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex cursor-pointer gap-2 items-center",
                        children: [(0, l.jsx)(r.fWC, {
                            className: " text-4xl text-gray-400"
                        }), (0, l.jsx)("span", {
                            className: " text-lg font-extrabold ",
                            children: (0, l.jsx)(a, {
                                children: " Tweet "
                            })
                        })]
                    })]
                })]
            }))
        },
        4055: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return c
                }
            });
            var l = s(1527),
                n = s(8777),
                r = s.n(n),
                o = s(959);

            function a(e) {
                let {
                    styles: t,
                    text: s
                } = e;
                return (0, l.jsxs)("div", {
                    className: " popup-hold relative",
                    children: [(0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: t,
                        children: (0, l.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                        })
                    }), (0, l.jsx)("div", {
                        className: " popup hidden absolute bg-zinc-50 w-60 text-xs rounded-md tracking-wide bottom-[-150px] z-50 shadow-xl p-5 text-gray-500",
                        children: s
                    })]
                })
            }
            let i = ["2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"];

            function c() {
                let e = [],
                    [t, s] = (0, o.useState)(!0),
                    [n, c] = (0, o.useState)(!1),
                    [d, x] = (0, o.useState)(e[1]),
                    [u, h] = (0, o.useState)(i[0]);
                for (let t = 1; t <= 7; t++) {
                    let s = r()().clone().add(t, "days").format("dd D MMM").split(" "),
                        l = {
                            day: s[0],
                            date: s[1],
                            month: s[2]
                        };
                    e.push(l)
                }(0, o.useEffect)(() => {
                    let e = document.getElementById("marker"),
                        t = document.querySelectorAll("ol li");
                    e.style.left = t[0].offsetLeft + "px", e.style.width = t[0].offsetWidth + "px", t.forEach(t => {
                        t.addEventListener("click", t => {
                            var s;
                            s = t.target, e.style.left = s.offsetLeft + "px", e.style.width = s.offsetWidth + "px"
                        })
                    }), window.addEventListener("resize", () => {
                        e.style.left = t[0].offsetLeft + "px", e.style.width = t[0].offsetWidth + "px"
                    })
                }, []);
                let m = e => {
                    let t = e.target.value;
                    h(t)
                };
                return (0, l.jsxs)("form", {
                    className: " w-full",
                    children: [(0, l.jsx)("h3", {
                        className: " font-bold ",
                        children: "Schedule A Tour"
                    }), (0, l.jsxs)("div", {
                        className: " flex gap-2 items-center text-gray-400",
                        children: [(0, l.jsx)("span", {
                            children: " Tour Type"
                        }), (0, l.jsx)(a, {
                            styles: "h-5 text-gray-600 cursor-pointer",
                            text: "If you'd like to tour this home without leaving\nyour room, select the video chat tour type and discuss\navailable options with the agent you are connected with."
                        })]
                    }), (0, l.jsxs)("ol", {
                        className: " rounded-sm my-4 relative w-full text-zinc-600 bg-gray-100 py-2 font-bold isolate ",
                        children: [(0, l.jsx)("li", {
                            onClick: () => {
                                s(!0), c(!1)
                            },
                            className: " px-5 w-1/2 text-center inline-block cursor-pointer",
                            children: "In-Person"
                        }), (0, l.jsx)("li", {
                            onClick: () => {
                                s(!1), c(!0)
                            },
                            className: " px-5 w-1/2 text-center inline-block cursor-pointer",
                            children: "Video Chat"
                        }), (0, l.jsx)("div", {
                            id: "marker",
                            className: "left-0 transition-all z-[-1] absolute top-0 h-full w-1/2 bg-sky-200 "
                        })]
                    }), (0, l.jsx)("section", {
                        className: " flex justify-center",
                        children: (0, l.jsx)("div", {
                            className: "text-zinc-600 pb-2 flex gap-2 overflow-auto",
                            children: e.map((e, t) => (0, l.jsxs)("div", {
                                onClick: () => x(e),
                                className: " rounded-sm px-5 py-2 flex flex-col items-center\n            justify-center border-2 cursor-pointer\n            ".concat(e.date == (null == d ? void 0 : d.date) && "border-sky-300", "\n            hover:bg-zinc-200 transition"),
                                children: [(0, l.jsxs)("div", {
                                    children: [" ", e.day, " "]
                                }), (0, l.jsxs)("div", {
                                    className: "font-bold",
                                    children: [" ", e.date, " "]
                                }), (0, l.jsxs)("div", {
                                    children: [" ", e.month, " "]
                                })]
                            }, t))
                        })
                    }), (0, l.jsx)("div", {
                        children: (0, l.jsxs)("fieldset", {
                            className: " w-full rounded-sm border-2 h-12 border-sky-200  px-1 my-5",
                            children: [(0, l.jsx)("legend", {
                                className: " px-1 text-xs font-bold",
                                children: "Time"
                            }), (0, l.jsx)("select", {
                                className: " outline-none w-full font-bold text-zinc-600 bg-transparent",
                                defaultValue: "",
                                onChange: e => m(e),
                                children: i.map(e => (0, l.jsxs)("option", {
                                    value: e,
                                    children: [" ", e, " "]
                                }))
                            })]
                        })
                    }), (0, l.jsxs)("fieldset", {
                        className: " w-full rounded-sm border-2 h-12 border-sky-200  px-1 my-5",
                        children: [(0, l.jsx)("legend", {
                            className: " px-1 text-xs font-bold",
                            children: "Phone"
                        }), (0, l.jsx)("input", {
                            className: " text-gray-700 text-sm w-full placeholder:text-gray-500 placeholder:text-xs outline-none px-5",
                            placeholder: "Phone"
                        })]
                    }), (0, l.jsxs)("fieldset", {
                        className: " w-full rounded-sm border-2 h-12 border-sky-200  px-1 my-5",
                        children: [(0, l.jsx)("legend", {
                            className: " px-1 text-xs font-bold",
                            children: "Email"
                        }), (0, l.jsx)("input", {
                            className: " text-gray-700 text-sm w-full placeholder:text-gray-500 placeholder:text-xs outline-none px-5",
                            placeholder: "Email"
                        })]
                    }), (0, l.jsxs)("label", {
                        children: [(0, l.jsx)("input", {
                            type: "checkbox"
                        }), (0, l.jsx)("span", {
                            className: " ml-2 text-xs text-gray-500",
                            children: "I want to talk about financing"
                        })]
                    }), (0, l.jsx)("div", {
                        className: " text-white font-extrabold cursor-pointer rounded-md hover:bg-sky-500 h-10 my-5 bg-sky-600 flex justify-center items-center ",
                        children: "Schedule A Tour"
                    })]
                })
            }
        },
        9822: function(e, t, s) {
            "use strict";
            var l = s(1527),
                n = s(5390),
                r = s.n(n),
                o = s(959),
                a = s(9904),
                i = s.n(a);
            let c = (0, o.memo)(e => {
                let {
                    photos: t
                } = e, s = () => {
                    let e = document.getElementById("auto");
                    e.scrollLeft = (null == e ? void 0 : e.scrollLeft) + 1400
                }, n = () => {
                    let e = document.getElementById("auto");
                    e.scrollLeft = (null == e ? void 0 : e.scrollLeft) - 1400
                };
                return (0, l.jsxs)("div", {
                    className: " relative",
                    children: [(0, l.jsx)("span", {
                        onClick: () => n(),
                        className: "".concat(i().text, "  hidden sm:flex absolute text-6xl font-bold\n      hover:text-sky-200 cursor-pointer  text-white  shadow-2xl\n     mt-auto mb-auto  items-center left-2 md:left-10 top-0 bottom-0 "),
                        children: "❰"
                    }), (0, l.jsx)("span", {
                        onClick: () => s(),
                        className: "".concat(i().text, " hidden sm:flex  absolute text-6xl font-bold\n       hover:text-sky-200 cursor-pointer  text-white shadow-2xl\n       mt-auto mb-auto  items-center right-2 md:right-10 top-0 bottom-0 "),
                        children: "❱"
                    }), (0, l.jsx)("div", {
                        id: "auto",
                        className: " scroll sm:border-x-8 sm:border-t-8  border-sky-100 mb-4 md:rounded-xl overflow-auto scroll-smooth h-[300px] sm:h-[333px] flex",
                        children: t.slice(0, 4).map((e, t) => (0, l.jsx)(r(), {
                            id: t,
                            className: " rounder-xl cursor-grab object-cover",
                            width: "1400",
                            height: "200",
                            src: e.url,
                            alt: "img",
                            quality: 20
                        }, t))
                    })]
                })
            });
            t.Z = c
        },
        1402: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return n
                }
            });
            var l = s(1527);

            function n(e) {
                let {
                    tailwindClasses: t,
                    children: s,
                    isOpen: n,
                    setModel: r
                } = e;
                return n ? (0, l.jsxs)("section", {
                    className: " fixed top-0 left-0 flex z-[1999]  justify-center items-center h-[100vh] w-[100vw]",
                    children: [(0, l.jsx)("div", {
                        onClick: () => r(!1),
                        className: " absolute left-0 top-0  h-[100vh]  w-[100vw] bg-zinc-900 opacity-20 z-[-1] "
                    }), (0, l.jsx)("div", {
                        className: "".concat(t, " w-[100%] h-full \n        md:w-[500px] md:h-auto md:scale-90 p-10 bg-white"),
                        children: s
                    })]
                }) : null
            }
        },
        8219: function(e, t) {
            "use strict";
            t.Z = function() {
                return {
                    addFav: e => {
                        if (localStorage.fav) {
                            if (JSON.parse(localStorage.fav).filter(t => t == e).length >= 1) {
                                let t = JSON.parse(localStorage.fav).filter(t => t !== e);
                                localStorage.setItem("fav", JSON.stringify(t))
                            } else localStorage.setItem("fav", JSON.stringify([...JSON.parse(localStorage.fav), e]))
                        } else localStorage.setItem("fav", JSON.stringify([e]))
                    }
                }
            }
        },
        9904: function(e) {
            e.exports = {
                text: "ImageS_text__qxovY"
            }
        }
    }
]);