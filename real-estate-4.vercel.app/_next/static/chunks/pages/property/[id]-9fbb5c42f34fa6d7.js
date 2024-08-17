(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [547], {
        7120: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/property/[id]", function() {
                return t(2167)
            }])
        },
        2167: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                __N_SSG: function() {
                    return g
                }
            });
            var l = t(1527),
                n = t(7551),
                a = t(4381),
                r = t(8777),
                i = t.n(r),
                c = t(9822),
                o = t(5722),
                d = t(4055),
                x = t(1402),
                m = t(959),
                h = t(2929),
                p = t(8458),
                u = t(8219),
                j = t(9652),
                f = t(621),
                b = [];
            for (let e = 1; e <= 7; e++) {
                let s = i()().clone().add(e, "days").format("dd D MMM").split(" "),
                    t = {
                        day: s[0],
                        date: s[1],
                        month: s[2]
                    };
                b.push(t)
            }
            var g = !0;
            s.default = e => {
                var s, r;
                let {
                    property: i
                } = e, {
                    price: b,
                    rentFrequency: g,
                    rooms: v,
                    title: N,
                    baths: y,
                    area: w,
                    description: k,
                    photos: S,
                    geography: _,
                    location: Z
                } = i, [C, M] = (0, m.useState)(!1), [E, O] = (0, m.useState)(!1), [D, T] = (0, m.useState)(!1), [z, I] = (0, m.useState)("300px"), {
                    addFav: A
                } = (0, u.Z)(), [B, F] = (0, m.useState)(0);
                return (0, l.jsxs)("div", {
                    className: " md:px-20 text-sky-700 relative",
                    children: [(0, l.jsx)(f.Z, {}), S && (0, l.jsx)(c.Z, {
                        photos: S
                    }), (0, l.jsxs)("div", {
                        className: " md:flex px-2 sm:px-0 justify-between",
                        children: [(0, l.jsx)("div", {
                            className: "  md:order-2 sm:mx-0 gap-3",
                            children: (0, l.jsxs)("div", {
                                className: "  font-bold",
                                children: ["AED", (0, l.jsx)("span", {
                                    className: " ml-2 text-xl text-sky-800 ",
                                    children: (0, a.ZP)(Number(b))
                                }), g && " /".concat(g)]
                            })
                        }), (0, l.jsxs)("h1", {
                            className: " my-2 text-md sm:text-xl font-bold",
                            children: [" ", N]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: " mx-2 sm:mx-0 my-2",
                        children: [(0, l.jsxs)("div", {
                            className: " grid sm:grid-cols-2 gap-y-2 grid-rows-2 justify-between ",
                            children: [(0, l.jsxs)("div", {
                                className: " flex gap-3 items-center text-cyan-700",
                                children: [(0, l.jsx)("b", {
                                    children: v
                                }), (0, l.jsx)("span", {
                                    title: "Bed",
                                    children: (0, l.jsx)(n.woM, {})
                                }), "| ", (0, l.jsx)("b", {
                                    children: y
                                }), (0, l.jsx)("span", {
                                    title: "Bathtub",
                                    children: (0, l.jsx)(n.B39, {})
                                }), "|", (0, l.jsx)("b", {
                                    children: (0, a.ZP)(Number(w))
                                }), (0, l.jsx)("span", {
                                    title: "Area",
                                    children: (0, l.jsx)(n.waC, {})
                                })]
                            }), (0, l.jsxs)("div", {
                                className: " flex sm:justify-end gap-4 ",
                                children: [(0, l.jsxs)("div", {
                                    onClick: () => {
                                        A(i.externalID), F(e => ++e)
                                    },
                                    className: " cursor-pointer  text-white \n            items-center flex gap-1 ring-2 px-2 p-[2px] rounded-sm\n              ".concat((null === (s = t.g.localStorage) || void 0 === s ? void 0 : s.fav) && JSON.parse(localStorage.fav).filter(e => e == i.externalID).length >= 1 ? " bg-red-500 hover:bg-red-600" : " bg-sky-500 hover:bg-sky-700", "\n            "),
                                    children: [(0, l.jsx)("span", {
                                        className: " hidden sm:block text-white",
                                        children: (0, l.jsx)(p.Z, {
                                            noBorder: !0
                                        })
                                    }), (null === (r = t.g.localStorage) || void 0 === r ? void 0 : r.fav) && JSON.parse(localStorage.fav).filter(e => e == i.externalID).length >= 1 ? "Saved" : "Save"]
                                }), (0, l.jsx)("button", {
                                    onClick: () => T(!0),
                                    className: " hover:bg-sky-500 hover:text-white ring-2 px-3 p-[2px] rounded-sm",
                                    children: "Share"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "row-start-2 flex gap-2 items-center",
                                children: [(0, l.jsx)(n.Ys1, {
                                    className: " h-5 text-zinc-400"
                                }), (0, l.jsxs)("span", {
                                    className: " text-zinc-600 text-xs",
                                    children: [Z[2].name, ", ", Z[1].name]
                                })]
                            })]
                        }), (0, l.jsx)("hr", {
                            className: "mt-5"
                        }), (0, l.jsxs)("section", {
                            className: "lg:flex my-5 gap-8",
                            children: [(0, l.jsxs)("div", {
                                className: "lg:w-4/6",
                                children: [(0, l.jsx)(o.Z, {
                                    geography: _
                                }), (0, l.jsx)("h4", {
                                    className: "border-b-2 text-xl font-bold font-FiraMono my-5 ",
                                    children: "Description"
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col items-center overflow-hidden",
                                    children: [(0, l.jsx)("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: k
                                        },
                                        className: "divText h-[".concat(z, "] pb-8 overflow-hidden relative leading-6 text-zinc-900 whitespace-pre-line")
                                    }), (0, l.jsx)("button", {
                                        className: " inline h-10 rounded-md text-sky-700 font-semibold px-3 bg-zinc-200 ",
                                        onClick: () => I("300px" === z ? "100%" : "300px"),
                                        children: "300px" === z ? "Expand" : "Collapse"
                                    })]
                                })]
                            }), (0, l.jsxs)("nav", {
                                className: " mt-20 pt-2 gap-3 md:pt-0 relative bottom-0 left-0 h-auto md:h-52  md:w-2/6 w-[100vw] flex flex-col  md:gap-5 md:my-5 justify-center bg-white items-center",
                                children: [(0, l.jsxs)("p", {
                                    className: " pb-2 md:pb-0 order-3 md:order-0 text-xs text-zinc-600 text-center font-medium",
                                    children: ["Request a tour as early as", (0, l.jsx)("span", {
                                        className: " md:block font-bold text-center",
                                        children: "Today at 11:00AM"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: " flex justify-evenly w-2/3 md:w-full gap-5 pb-2 sm:pb-0 flex-col",
                                    children: [(0, l.jsx)("button", {
                                        onClick: () => M(!0),
                                        className: " bg-sky-200 cursor-pointer ring-4 ring-sky-200 hover:text-sky-900  text-sky-700  text-sm sm:text-lg font-extrabold w-full rounded-sm py-2 ",
                                        children: "Schedule A Tour"
                                    }), (0, l.jsx)("button", {
                                        onClick: () => O(!0),
                                        className: " ring-4 ring-sky-200 rounded-sm py-2 w-full  cursor-pointer hover:text-sky-900 bg-white text-sky-700 text-sm sm:text-lg font-extrabold",
                                        children: "Request Info"
                                    })]
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: " block w-full",
                            children: (0, l.jsxs)(x.Z, {
                                isOpen: C,
                                setModel: M,
                                children: [(0, l.jsx)(n.FU5, {
                                    onClick: () => M(!1),
                                    className: " absolute right-10 cursor-pointer  hover:opacity-70 w-8 h-8 font-extrabold"
                                }), (0, l.jsx)(d.Z, {})]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "block w-full",
                            children: [(0, l.jsxs)(x.Z, {
                                isOpen: E,
                                setModel: O,
                                children: [(0, l.jsx)(n.FU5, {
                                    onClick: () => O(!1),
                                    className: "absolute right-10 cursor-pointer  hover:opacity-70 w-8 h-8 font-extrabold"
                                }), (0, l.jsx)(h.Z, {
                                    title: N
                                })]
                            }), (0, l.jsxs)(x.Z, {
                                isOpen: D,
                                setModel: T,
                                children: [(0, l.jsx)(n.FU5, {
                                    onClick: () => T(!1),
                                    className: "absolute right-10 cursor-pointer  hover:opacity-70 w-8 h-8 font-extrabold"
                                }), (0, l.jsx)(j.Z, {})]
                            })]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [242, 19, 964, 392, 773, 774, 888, 179], function() {
            return e(e.s = 7120)
        }), _N_E = e.O()
    }
]);