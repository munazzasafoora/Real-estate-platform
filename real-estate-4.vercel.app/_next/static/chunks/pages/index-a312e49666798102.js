(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8393: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(5107)
            }])
        },
        4045: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return h
                }
            });
            var a = t(1527),
                l = t(8515),
                r = t.n(l),
                n = t(5390),
                i = t.n(n),
                o = t(7551),
                c = t(4381),
                d = {
                    src: "/_next/static/media/house.852de0b3.webp",
                    height: 600,
                    width: 800,
                    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoIAAYAAkA4JYwCdAEO9GlNuAAA/kE90Jb7Wo6Urln1W+k7MyHNVkws89EcfVKVqEEnY5NrX8LdqDBj4YTY7bQIlQAAAA==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                x = t(959),
                m = t(8219),
                h = e => {
                    var s;
                    let {
                        property: l,
                        formSearch: n
                    } = e, [h, u] = (0, x.useState)(0), {
                        addFav: f
                    } = (0, m.Z)(), {
                        coverPhoto: p,
                        price: g,
                        rentFrequency: j,
                        rooms: N,
                        title: y,
                        baths: v,
                        area: b,
                        agency: w,
                        isVerified: k,
                        externalID: S
                    } = l, E = async e => {
                        f(e), u(e => ++e)
                    };
                    return (0, a.jsxs)("div", {
                        className: " rounded-xl group shadow-md hover:shadow-xl hover:shadow-sky-200 shadow-sky-200 transition-shadow overflow-hidden relative drop-shadow-2xl ",
                        children: [(0, a.jsx)("div", {
                            className: " h-full propertyAfter duration-1000 \n      absolute bg-sky-400 w-full z-[-1]"
                        }), (0, a.jsxs)("div", {
                            className: " rounded-t-lg box-border mt-[3px] mr-[3px] ml-[3px] overflow-hidden",
                            children: [(0, a.jsx)(i(), {
                                src: p ? p.url : d,
                                width: 400,
                                height: 260,
                                alt: "img",
                                className: " h-[200px] sm:h-[260px] cursor-text min-w-full group-hover:scale-125  transition-transform sm:rounded-sm duration-1000 object-cover"
                            }), (0, a.jsx)("svg", {
                                className: " transition duration-300 right-4  bottom-[100px]  \n        text-gray-300 absolute h-10 w-10 cursor-pointer hover:stroke-red-600\n        ".concat(t.g.localStorage.fav && JSON.parse(localStorage.fav).filter(e => e == l.externalID).length >= 1 ? " fill-red-600" : "fill-transparent", "\n       "),
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                onClick: () => E(S),
                                children: (0, a.jsx)("path", {
                                    d: "M4.318 6.318a4.5  4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12  7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                })
                            })]
                        }), (0, a.jsx)(r(), {
                            href: "/".concat(n ? "searched" : "property", "/").concat(S),
                            passHref: !0,
                            children: (0, a.jsxs)("div", {
                                className: " cursor-pointer  px-2 py-1 text-sm bg-zinc-100",
                                children: [(0, a.jsxs)("div", {
                                    className: " flex items-center justify-between",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex items-center gap-2 text-zinc-700 ",
                                        children: [(0, a.jsx)("div", {
                                            className: " text-cyan-700",
                                            children: k && (0, a.jsx)(o.vr, {
                                                className: "text-lg"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "font-bold",
                                            children: ["AED", (0, a.jsx)("span", {
                                                className: "  ml-2 text-sky-800 ",
                                                children: (0, c.ZP)(Number(g))
                                            }), " ", j && " /".concat(j)]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: " flex justify-center items-center",
                                        children: (0, a.jsx)(i(), {
                                            className: " h-6 w-6 object-cover rounded-full",
                                            src: null == w ? void 0 : null === (s = w.logo) || void 0 === s ? void 0 : s.url,
                                            width: "100",
                                            height: "100",
                                            alt: "avater",
                                            loading: "lazy"
                                        })
                                    })]
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsxs)("div", {
                                        className: " flex gap-3 items-center text-cyan-700",
                                        children: [(0, a.jsx)("b", {
                                            children: N
                                        }), (0, a.jsx)("span", {
                                            title: "Bed",
                                            children: (0, a.jsx)(o.woM, {})
                                        }), "| ", (0, a.jsx)("b", {
                                            children: v
                                        }), (0, a.jsx)("span", {
                                            title: "Bathtub",
                                            children: (0, a.jsx)(o.B39, {})
                                        }), "|", (0, a.jsx)("b", {
                                            children: (0, c.ZP)(Number(b))
                                        }), (0, a.jsx)("span", {
                                            title: "Area",
                                            children: (0, a.jsx)(o.waC, {})
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: " text-zinc-700 text-sm my-1 whitespace-nowrap overflow-hidden",
                                    children: [(0, a.jsx)("div", {
                                        className: " lg:hidden",
                                        children: y.length > 30 ? "".concat(y.substring(0, 30), "...") : y
                                    }), (0, a.jsx)("div", {
                                        className: " hidden lg:block",
                                        children: y.length > 40 ? "".concat(y.substring(0, 40), "...") : y
                                    })]
                                })]
                            })
                        })]
                    })
                }
        },
        1402: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return l
                }
            });
            var a = t(1527);

            function l(e) {
                let {
                    tailwindClasses: s,
                    children: t,
                    isOpen: l,
                    setModel: r
                } = e;
                return l ? (0, a.jsxs)("section", {
                    className: " fixed top-0 left-0 flex z-[1999]  justify-center items-center h-[100vh] w-[100vw]",
                    children: [(0, a.jsx)("div", {
                        onClick: () => r(!1),
                        className: " absolute left-0 top-0  h-[100vh]  w-[100vw] bg-zinc-900 opacity-20 z-[-1] "
                    }), (0, a.jsx)("div", {
                        className: "".concat(s, " w-[100%] h-full \n        md:w-[500px] md:h-auto md:scale-90 p-10 bg-white"),
                        children: t
                    })]
                }) : null
            }
        },
        8219: function(e, s) {
            "use strict";
            s.Z = function() {
                return {
                    addFav: e => {
                        if (localStorage.fav) {
                            if (JSON.parse(localStorage.fav).filter(s => s == e).length >= 1) {
                                let s = JSON.parse(localStorage.fav).filter(s => s !== e);
                                localStorage.setItem("fav", JSON.stringify(s))
                            } else localStorage.setItem("fav", JSON.stringify([...JSON.parse(localStorage.fav), e]))
                        } else localStorage.setItem("fav", JSON.stringify([e]))
                    }
                }
            }
        },
        5107: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                __N_SSG: function() {
                    return N
                },
                default: function() {
                    return y
                }
            });
            var a = t(1527),
                l = t(959),
                r = t(7551),
                n = t(5390),
                i = t.n(n);

            function o(e) {
                let {
                    agent: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: " flex flex-col items-center justify-center",
                    children: [(0, a.jsx)(i(), {
                        src: s.img,
                        alt: "img",
                        height: "100",
                        width: "100",
                        className: "ring-4  ring-sky-100 rounded-full"
                    }), (0, a.jsx)("h2", {
                        className: " my-2 text-sky-700 text-xl font-bold",
                        children: " Ask a question "
                    }), (0, a.jsxs)("h3", {
                        className: " text-zinc-700 text-base font-semibold",
                        children: [" ", s.name, " "]
                    }), (0, a.jsxs)("form", {
                        onSubmit: e => {
                            e.preventDefault()
                        },
                        className: " flex mt-4 flex-col items-center",
                        children: [(0, a.jsx)("input", {
                            autoFocus: !0,
                            required: !0,
                            type: "text",
                            name: "name",
                            placeholder: "Your Name",
                            className: " ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4  focus:outline-none bg-zinc-100 shadow-md"
                        }), (0, a.jsx)("input", {
                            required: !0,
                            type: "email",
                            name: "email",
                            placeholder: "Email",
                            className: " ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4  focus:outline-none bg-zinc-100 shadow-md"
                        }), (0, a.jsx)("input", {
                            required: !0,
                            type: "number",
                            name: "Phone",
                            placeholder: "Phone",
                            className: " ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4  focus:outline-none bg-zinc-100 shadow-md"
                        }), (0, a.jsx)("input", {
                            required: !0,
                            type: "number",
                            name: "Zip",
                            placeholder: "Zip Code",
                            className: " ring-4 ring-sky-100 rounded-sm my-2 py-2 pl-4  focus:outline-none bg-zinc-100 shadow-md"
                        }), (0, a.jsxs)("button", {
                            className: " py-2 w-2/3 mt-4 bg-sky-600 text-white hover:bg-sky-800 rounded-xl shadow-xl  shadow-sky-300 font-semibold ",
                            children: ["Ask ", s.name.split(" ")[0]]
                        })]
                    })]
                })
            }
            var c = t(1402);
            let d = [{
                id: 1,
                img: "/courtney.jpeg",
                name: "Courtney \n      Geissinger",
                rating: 4.8
            }, {
                id: 2,
                img: "/michael.jpeg",
                name: "Micheal \n      Fadeeff",
                rating: 4.8
            }, {
                id: 3,
                img: "/raul.jpeg",
                name: "Roul \n      Alcaraz",
                rating: 4.8
            }, {
                id: 4,
                img: "/francisco.jpeg",
                name: "Francisco \n      Gonzalez",
                rating: 4.8
            }];
            var x = () => {
                    let [e, s] = (0, l.useState)(!1), [t, n] = (0, l.useState)(), x = e => (0, a.jsxs)("div", {
                        className: "flex text-sky-600",
                        children: [(0, a.jsx)(r.MVI, {}), (0, a.jsx)(r.MVI, {}), (0, a.jsx)(r.MVI, {}), (0, a.jsx)(r.MVI, {}), (0, a.jsx)(r.Mzw, {})]
                    });
                    return (0, a.jsxs)("section", {
                        className: " flex flex-col min-w-full items-center",
                        children: [(0, a.jsx)("h3", {
                            className: " text-center text-md font-bold font-OpenSans",
                            children: "OJO NETWORK AGENTS"
                        }), (0, a.jsxs)("h2", {
                            className: " font-OpenSans font-bold text-center text-2xl",
                            children: [(0, a.jsx)("span", {
                                children: " Agents in "
                            }), (0, a.jsx)("span", {
                                className: " ml-1 text-sky-600",
                                children: "San Francisco"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-wrap justify-center overflow-auto py-4 px-4 w-full gap-5",
                            children: [d.map(e => (0, a.jsxs)("div", {
                                className: " cursor-pointer hover:shadow-xl shadow-lg shadow-sky-100 ring-1 ring-sky-300 flex-col flex justify-center bg-zinc-100 min-w-[100%] sm:min-w-[260px] h-44 rounded-xl",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex justify-center gap-x-3 items-center",
                                    children: [(0, a.jsx)("div", {
                                        children: (0, a.jsx)(i(), {
                                            src: e.img,
                                            height: "100",
                                            width: "100",
                                            alt: "img",
                                            className: " rounded-full"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: " grid gap-1",
                                        children: [(0, a.jsxs)("div", {
                                            className: " tracking-wide text-sky-600 flex items-center gap-2",
                                            children: [(0, a.jsx)(r.J0U, {}), (0, a.jsx)("p", {
                                                className: " text-[0.6rem] text-zinc-600",
                                                children: "Pro. Broker"
                                            })]
                                        }), (0, a.jsx)("h3", {
                                            className: " tracking-wider leading-5 font-OpenSans text-md font-semibold break-words whitespace-pre-line",
                                            children: e.name
                                        }), (0, a.jsxs)("div", {
                                            className: "flex gap-x-1 items-center",
                                            children: [(0, a.jsxs)("span", {
                                                className: " text-[0.7rem] text-sky-600",
                                                children: [e.rating, "/5"]
                                            }), (0, a.jsx)("span", {
                                                className: " text-xs",
                                                children: x(e)
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: " flex justify-center items-center mt-2",
                                    children: (0, a.jsx)("button", {
                                        onClick: () => {
                                            s(!0), n(e)
                                        },
                                        className: " bg-sky-500  cursor-pointer hover:bg-sky-900 font-OpenSans font-semibold text-white rounded-2xl px-4 py-1 text-md",
                                        children: "Ask a Question"
                                    })
                                })]
                            }, e.id)), (0, a.jsx)("div", {
                                className: "relative block w-full text-sky-600",
                                children: (0, a.jsxs)(c.Z, {
                                    isOpen: e,
                                    tailwindClasses: " rounded-md",
                                    setModel: s,
                                    children: [t && (0, a.jsx)(o, {
                                        agent: t
                                    }), (0, a.jsx)(r.FU5, {
                                        onClick: () => s(!1),
                                        className: " absolute top-10 right-10 cursor-pointer  hover:opacity-70 w-8 h-8 font-extrabold"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                m = () => (0, a.jsx)(i(), {
                    src: "/real3.webp",
                    alt: "img",
                    height: "500",
                    width: "1200",
                    className: " object-cover overflow-hidden w-full h-[300px] sm:h-[400px] gap-5",
                    priority: !0
                });
            let h = [{
                id: "1",
                title: "Real Estate Markets",
                arr: ["Alaska Real Estate", "Alabama Real Estate", "Arkansas Real Estate", "Arizona Real Estate", "California Real Estate", "Colorado Real Estate", "Connecticut Real Estate", "District Of Columbia Real Estate", "Delaware Real Estate", "Florida Real Estate", "Georgia Real Estate", "Hawaii Real Estate", "Iowa Real Estate", "Idaho Real Estate", "Illinois Real Estate", "Indiana Real Estate", "Kansas Real Estate", "Kentucky Real Estate", "Louisiana Real Estate", "Massachusetts Real Estate", "Maryland Real Estate", "Maine Real Estate", "Michigan Real Estate", "Minnesota Real Estate", "Missouri Real Estate", "Mississippi Real Estate", "Montana Real Estate", "North Carolina Real Estate"]
            }, {
                id: "2",
                title: "Popular Searches",
                arr: ["Houses for Sale Near Me by Owner", "Cheap Apartments for Rent Near Me", "Townhomes for Rent Near Me", "Condos for Sale Near Me", "Apartments for Rent Near Me", "Houses for Rent Near Me", "Houses for Sale Near Me", "Pet Friendly Apartments Near Me", "Land for Sale Near Me", "Open Houses Near Me", "Townhomes for Sale Near Me", "San Antonio Homes For Sale", "Chicago Homes For Sale", "Philadelphia Homes For Sale", "Sacramento Homes For Sale", "Bakersfield Homes For Sale", "New York Homes For Sale", "San Francisco Homes For Sale"]
            }, {
                id: "3",
                title: "For Professionals",
                arr: ["Popular Counties", "Rental Communities", "Real Estate Leads"]
            }];
            var u = () => {
                    let [e, s] = (0, l.useState)(5);
                    return (0, a.jsx)("div", {
                        className: " border-t-2 gap-y-5 border-gray-100 pt-5 mt-10 w-full flex flex-col md:flex-row justify-evenly",
                        children: h.map(s => (0, a.jsxs)("div", {
                            className: "",
                            children: [(0, a.jsxs)("h2", {
                                className: " md:text-left text-center text-gray-800 text-sm font-bold",
                                children: [" ", s.title, " "]
                            }), s.arr.slice(0, e).map((e, s) => (0, a.jsx)("div", {
                                className: " hover:text-cyan-600 flex flex-col items-center md:block  cursor-pointer hover:underline text-[0.7rem] text-gray-600",
                                children: (0, a.jsxs)("p", {
                                    children: [" ", e]
                                })
                            }, s))]
                        }, s.id))
                    })
                },
                f = t(8515),
                p = t.n(f),
                g = () => (0, a.jsxs)("section", {
                    children: [(0, a.jsxs)("div", {
                        className: " mt-5 flex flex-col items-center",
                        children: [(0, a.jsx)("h2", {
                            className: " text-xl font-OpenSans tracking-wider  font-semibold text-gray-900",
                            children: "Check out a neighborhood"
                        }), (0, a.jsxs)("div", {
                            className: " flex mt-5 ring-1 ring-sky-200 bg-gray-100 shadow-lg shadow-sky-100 overflow-hidden sm:w-[430px] rounded-xl h-12 sm:h-14",
                            children: [(0, a.jsx)("input", {
                                type: "text",
                                placeholder: " Serach for City, Zip...",
                                className: " sm:placeholder:text-lg pl-4 w-full bg-transparent"
                            }), (0, a.jsx)(p(), {
                                href: "/search",
                                className: "bg-sky-600 cursor-pointer flex justify-center  items-center hover:bg-blue-600 text-white text-3xl px-4",
                                children: (0, a.jsx)(r.vU7, {})
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: " flex items-center md:text-2xl font-bold  mt-20 justify-center text-sky-900",
                        children: ["discover", (0, a.jsx)("span", {
                            className: " mx-1",
                            children: (0, a.jsx)(r.$0r, {
                                className: " text-2xl md:text-4xl text-blue-400 opacity-70"
                            })
                        }), "a place", (0, a.jsx)("span", {
                            className: " mx-1",
                            children: (0, a.jsx)(r.XVK, {
                                className: " text-2xl md:text-4xl text-cyan-600 opacity-70"
                            })
                        }), "you'll love", (0, a.jsx)("span", {
                            className: " mx-1",
                            children: (0, a.jsx)(r.Yqy, {
                                className: " text-2xl md:text-4xl text-red-600 opacity-70"
                            })
                        }), "to live"]
                    })]
                }),
                j = t(4045),
                N = !0;

            function y(e) {
                let {
                    propertyForSale: s,
                    propertyForRent: t
                } = e, [n, i] = (0, l.useState)(!1);
                (0, l.useEffect)(() => {
                    localStorage.fav || localStorage.setItem("fav", ""), i(!0)
                }, []);
                let o = e => {
                    let {
                        text: s
                    } = e;
                    return (0, a.jsx)("h2", {
                        className: " block  sm:inline-block self-start mx-1 sm:mx-10 text-xl font-extrabold text-sky-500 border-t-2 border-sky-300 sm:border-t-0 sm:border-b-4 ring-sky-400 sm:border-sky-400 my-1 sm:my-5 sm:ring-2 px-4 rounded-xl sm:rounded-sm",
                        children: (0, a.jsxs)("span", {
                            className: "flex items-center gap-2",
                            children: [(0, a.jsx)(r.Yyz, {}), " ", s]
                        })
                    })
                };
                return (0, a.jsxs)("div", {
                    className: " flex flex-col items-center ",
                    children: [(0, a.jsx)(m, {}), (0, a.jsxs)("div", {
                        className: " rounded-t-2 border-t-4 border-cyan-400 bg-white z-50 flex flex-col items-center ",
                        children: [(0, a.jsx)("h1", {
                            className: " font-OpenSans text-lg sm:text-4xl my-5 sm:my-10 font-extrabold animate-pulse text-sky-400 border-l-8 border-sky-200 px-8 drop-shadow-2xl",
                            children: "Explore homes with us ..."
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(o, {
                                text: "For Rent"
                            }), (0, a.jsx)("div", {
                                className: "grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 lg:mx-10 mb-10",
                                children: n && s.slice(1, 7).map(e => (0, a.jsx)(j.Z, {
                                    property: e
                                }, e.id))
                            })]
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(o, {
                                text: "For Sell"
                            }), (0, a.jsx)("div", {
                                className: " grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 lg:mx-10 mb-10",
                                children: n && t.slice(0, 6).map(e => (0, a.jsx)(j.Z, {
                                    property: e
                                }, e.id))
                            })]
                        }), (0, a.jsx)(x, {}), (0, a.jsx)(g, {}), (0, a.jsx)(u, {})]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [392, 774, 888, 179], function() {
            return e(e.s = 8393)
        }), _N_E = e.O()
    }
]);