(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [603], {
        5180: function(e, a, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/search", function() {
                return l(7637)
            }])
        },
        4045: function(e, a, l) {
            "use strict";
            l.d(a, {
                Z: function() {
                    return v
                }
            });
            var r = l(1527),
                n = l(8515),
                t = l.n(n),
                s = l(5390),
                i = l.n(s),
                u = l(7551),
                m = l(4381),
                o = {
                    src: "/_next/static/media/house.852de0b3.webp",
                    height: 600,
                    width: 800,
                    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoIAAYAAkA4JYwCdAEO9GlNuAAA/kE90Jb7Wo6Urln1W+k7MyHNVkws89EcfVKVqEEnY5NrX8LdqDBj4YTY7bQIlQAAAA==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                c = l(959),
                d = l(8219),
                v = e => {
                    var a;
                    let {
                        property: n,
                        formSearch: s
                    } = e, [v, h] = (0, c.useState)(0), {
                        addFav: x
                    } = (0, d.Z)(), {
                        coverPhoto: p,
                        price: f,
                        rentFrequency: y,
                        rooms: N,
                        title: g,
                        baths: j,
                        area: b,
                        agency: w,
                        isVerified: A,
                        externalID: S
                    } = n, k = async e => {
                        x(e), h(e => ++e)
                    };
                    return (0, r.jsxs)("div", {
                        className: " rounded-xl group shadow-md hover:shadow-xl hover:shadow-sky-200 shadow-sky-200 transition-shadow overflow-hidden relative drop-shadow-2xl ",
                        children: [(0, r.jsx)("div", {
                            className: " h-full propertyAfter duration-1000 \n      absolute bg-sky-400 w-full z-[-1]"
                        }), (0, r.jsxs)("div", {
                            className: " rounded-t-lg box-border mt-[3px] mr-[3px] ml-[3px] overflow-hidden",
                            children: [(0, r.jsx)(i(), {
                                src: p ? p.url : o,
                                width: 400,
                                height: 260,
                                alt: "img",
                                className: " h-[200px] sm:h-[260px] cursor-text min-w-full group-hover:scale-125  transition-transform sm:rounded-sm duration-1000 object-cover"
                            }), (0, r.jsx)("svg", {
                                className: " transition duration-300 right-4  bottom-[100px]  \n        text-gray-300 absolute h-10 w-10 cursor-pointer hover:stroke-red-600\n        ".concat(l.g.localStorage.fav && JSON.parse(localStorage.fav).filter(e => e == n.externalID).length >= 1 ? " fill-red-600" : "fill-transparent", "\n       "),
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                onClick: () => k(S),
                                children: (0, r.jsx)("path", {
                                    d: "M4.318 6.318a4.5  4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12  7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                })
                            })]
                        }), (0, r.jsx)(t(), {
                            href: "/".concat(s ? "searched" : "property", "/").concat(S),
                            passHref: !0,
                            children: (0, r.jsxs)("div", {
                                className: " cursor-pointer  px-2 py-1 text-sm bg-zinc-100",
                                children: [(0, r.jsxs)("div", {
                                    className: " flex items-center justify-between",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-2 text-zinc-700 ",
                                        children: [(0, r.jsx)("div", {
                                            className: " text-cyan-700",
                                            children: A && (0, r.jsx)(u.vr, {
                                                className: "text-lg"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "font-bold",
                                            children: ["AED", (0, r.jsx)("span", {
                                                className: "  ml-2 text-sky-800 ",
                                                children: (0, m.ZP)(Number(f))
                                            }), " ", y && " /".concat(y)]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: " flex justify-center items-center",
                                        children: (0, r.jsx)(i(), {
                                            className: " h-6 w-6 object-cover rounded-full",
                                            src: null == w ? void 0 : null === (a = w.logo) || void 0 === a ? void 0 : a.url,
                                            width: "100",
                                            height: "100",
                                            alt: "avater",
                                            loading: "lazy"
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    children: (0, r.jsxs)("div", {
                                        className: " flex gap-3 items-center text-cyan-700",
                                        children: [(0, r.jsx)("b", {
                                            children: N
                                        }), (0, r.jsx)("span", {
                                            title: "Bed",
                                            children: (0, r.jsx)(u.woM, {})
                                        }), "| ", (0, r.jsx)("b", {
                                            children: j
                                        }), (0, r.jsx)("span", {
                                            title: "Bathtub",
                                            children: (0, r.jsx)(u.B39, {})
                                        }), "|", (0, r.jsx)("b", {
                                            children: (0, m.ZP)(Number(b))
                                        }), (0, r.jsx)("span", {
                                            title: "Area",
                                            children: (0, r.jsx)(u.waC, {})
                                        })]
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: " text-zinc-700 text-sm my-1 whitespace-nowrap overflow-hidden",
                                    children: [(0, r.jsx)("div", {
                                        className: " lg:hidden",
                                        children: g.length > 30 ? "".concat(g.substring(0, 30), "...") : g
                                    }), (0, r.jsx)("div", {
                                        className: " hidden lg:block",
                                        children: g.length > 40 ? "".concat(g.substring(0, 40), "...") : g
                                    })]
                                })]
                            })
                        })]
                    })
                }
        },
        8219: function(e, a) {
            "use strict";
            a.Z = function() {
                return {
                    addFav: e => {
                        if (localStorage.fav) {
                            if (JSON.parse(localStorage.fav).filter(a => a == e).length >= 1) {
                                let a = JSON.parse(localStorage.fav).filter(a => a !== e);
                                localStorage.setItem("fav", JSON.stringify(a))
                            } else localStorage.setItem("fav", JSON.stringify([...JSON.parse(localStorage.fav), e]))
                        } else localStorage.setItem("fav", JSON.stringify([e]))
                    }
                }
            }
        },
        7637: function(e, a, l) {
            "use strict";
            l.r(a), l.d(a, {
                __N_SSP: function() {
                    return h
                },
                default: function() {
                    return x
                }
            });
            var r = l(1527),
                n = l(5390),
                t = l.n(n),
                s = l(6425),
                i = l(959),
                u = l(4045);
            let m = [{
                    items: [{
                        name: "Buy",
                        value: "for-sale"
                    }, {
                        name: "Rent",
                        value: "for-rent"
                    }],
                    placeholder: "Purpose",
                    queryName: "purpose"
                }, {
                    items: [{
                        name: "Daily",
                        value: "daily"
                    }, {
                        name: "Weekly",
                        value: "weekly"
                    }, {
                        name: "Monthly",
                        value: "monthly"
                    }, {
                        name: "Yearly",
                        value: "yearly"
                    }],
                    placeholder: "Rent Frequency",
                    queryName: "rentFrequency"
                }, {
                    items: [{
                        name: "10,000",
                        value: "10000"
                    }, {
                        name: "20,000",
                        value: "20000"
                    }, {
                        name: "30,000",
                        value: "30000"
                    }, {
                        name: "40,000",
                        value: "40000"
                    }, {
                        name: "50,000",
                        value: "50000"
                    }, {
                        name: "60,000",
                        value: "60000"
                    }, {
                        name: "85,000",
                        value: "85000"
                    }],
                    placeholder: "Min Price(AED)",
                    queryName: "minPrice"
                }, {
                    items: [{
                        name: "50,000",
                        value: "50000"
                    }, {
                        name: "60,000",
                        value: "60000"
                    }, {
                        name: "85,000",
                        value: "85000"
                    }, {
                        name: "110,000",
                        value: "110000"
                    }, {
                        name: "135,000",
                        value: "135000"
                    }, {
                        name: "160,000",
                        value: "160000"
                    }, {
                        name: "185,000",
                        value: "185000"
                    }, {
                        name: "200,000",
                        value: "200000"
                    }, {
                        name: "300,000",
                        value: "300000"
                    }, {
                        name: "400,000",
                        value: "400000"
                    }, {
                        name: "500,000",
                        value: "500000"
                    }, {
                        name: "600,000",
                        value: "600000"
                    }, {
                        name: "700,000",
                        value: "700000"
                    }, {
                        name: "800,000",
                        value: "800000"
                    }, {
                        name: "900,000",
                        value: "900000"
                    }, {
                        name: "1000,000",
                        value: "1000000"
                    }],
                    placeholder: "Max Price(AED)",
                    queryName: "maxPrice"
                }, {
                    items: [{
                        name: "Lowest Price",
                        value: "price-asc"
                    }, {
                        name: "Highest Price",
                        value: "price-des"
                    }, {
                        name: "Newest",
                        value: "date-asc"
                    }, {
                        name: "Oldest",
                        value: "date-desc"
                    }, {
                        name: "Verified",
                        value: "verified-score"
                    }, {
                        name: "City Level Score",
                        value: "city-level-score"
                    }],
                    placeholder: "Sort",
                    queryName: "sort"
                }, {
                    items: [{
                        name: "1000",
                        value: "1000"
                    }, {
                        name: "2000",
                        value: "2000"
                    }, {
                        name: "3000",
                        value: "3000"
                    }, {
                        name: "4000",
                        value: "4000"
                    }, {
                        name: "5000",
                        value: "5000"
                    }, {
                        name: "10000",
                        value: "10000"
                    }, {
                        name: "20000",
                        value: "20000"
                    }],
                    placeholder: "Max Area(sqft)",
                    queryName: "areaMax"
                }, {
                    items: [{
                        name: "1",
                        value: "1"
                    }, {
                        name: "2",
                        value: "2"
                    }, {
                        name: "3",
                        value: "3"
                    }, {
                        name: "4",
                        value: "4"
                    }, {
                        name: "5",
                        value: "5"
                    }, {
                        name: "6",
                        value: "6"
                    }, {
                        name: "7",
                        value: "7"
                    }, {
                        name: "8",
                        value: "8"
                    }, {
                        name: "9",
                        value: "9"
                    }, {
                        name: "10",
                        value: "10"
                    }],
                    placeholder: "Rooms",
                    queryName: "roomsMin"
                }, {
                    items: [{
                        name: "1",
                        value: "1"
                    }, {
                        name: "2",
                        value: "2"
                    }, {
                        name: "3",
                        value: "3"
                    }, {
                        name: "4",
                        value: "4"
                    }, {
                        name: "5",
                        value: "5"
                    }, {
                        name: "6",
                        value: "6"
                    }, {
                        name: "7",
                        value: "7"
                    }, {
                        name: "8",
                        value: "8"
                    }, {
                        name: "9",
                        value: "9"
                    }, {
                        name: "10",
                        value: "10"
                    }],
                    placeholder: "Baths",
                    queryName: "bathsMin"
                }, {
                    items: [{
                        name: "Furnished",
                        value: "furnished"
                    }, {
                        name: "Unfurnished",
                        value: "unfurnished"
                    }],
                    placeholder: "Furnish Type",
                    queryName: "furnishingStatus"
                }, {
                    items: [{
                        name: "Apartment",
                        value: "4"
                    }, {
                        name: "Townhouses",
                        value: "16"
                    }, {
                        name: "Villas",
                        value: "3"
                    }, {
                        name: "Penthouses",
                        value: "18"
                    }, {
                        name: "Hotel Apartments",
                        value: "21"
                    }, {
                        name: "Villa Compound",
                        value: "19"
                    }, {
                        name: "Residential Plot",
                        value: "14"
                    }, {
                        name: "Residential Floor",
                        value: "12"
                    }, {
                        name: "Residential Building",
                        value: "17"
                    }],
                    placeholder: "Property Type",
                    queryName: "categoryExternalID"
                }],
                o = e => {
                    let {
                        purpose: a,
                        rentFrequency: l,
                        categoryExternalID: r,
                        minPrice: n,
                        maxPrice: t,
                        areaMax: s,
                        roomsMin: i,
                        bathsMin: u,
                        sort: m,
                        locationExternalIDs: o
                    } = e;
                    return [{
                        name: "purpose",
                        value: a
                    }, {
                        name: "rentFrequency",
                        value: l
                    }, {
                        name: "minPrice",
                        value: n
                    }, {
                        name: "maxPrice",
                        value: t
                    }, {
                        name: "areaMax",
                        value: s
                    }, {
                        name: "roomsMin",
                        value: i
                    }, {
                        name: "bathsMin",
                        value: u
                    }, {
                        name: "sort",
                        value: m
                    }, {
                        name: "locationExternalIDs",
                        value: o
                    }, {
                        name: "categoryExternalID",
                        value: r
                    }]
                },
                c = () => {
                    let [e, a] = (0, i.useState)(m), l = (0, s.useRouter)(), n = e => {
                        let a = l.pathname,
                            {
                                query: r
                            } = l,
                            n = o(e);
                        n.forEach(e => {
                            r[e.name] = e.value
                        }), l.push({
                            pathname: a,
                            query: r
                        })
                    };
                    return (0, r.jsx)("div", {
                        className: " flex flex-wrap justify-center sm:px-10 py-2 text-zinc-500",
                        children: e.map(e => {
                            var a;
                            return (0, r.jsx)("div", {
                                children: (0, r.jsxs)("select", {
                                    className: " text-sm p-1 m-1 ",
                                    defaultValue: "",
                                    onChange: a => n({
                                        [e.queryName]: a.target.value
                                    }),
                                    children: [(0, r.jsxs)("option", {
                                        disabled: !0,
                                        value: "",
                                        children: [" ", e.placeholder, " "]
                                    }), null == e ? void 0 : null === (a = e.items) || void 0 === a ? void 0 : a.map(e => (0, r.jsx)("option", {
                                        className: " text-gray-900",
                                        value: e.value,
                                        children: e.name
                                    }, e.value))]
                                })
                            }, e.queryName)
                        })
                    })
                };
            var d = l(7551),
                v = {
                    src: "/_next/static/media/noresult.5a42ec99.svg",
                    height: 129,
                    width: 127,
                    blurWidth: 0,
                    blurHeight: 0
                },
                h = !0;

            function x(e) {
                let {
                    properties: a
                } = e, [l, n] = (0, i.useState)(!1), m = (0, s.useRouter)();
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("div", {
                        className: " bg-sky-500 flex border-b-4 border-t-4 border-sky-400 justify-center  items-center gap-4 py-4 cursor-pointer",
                        onClick: () => n(e => !e),
                        children: [(0, r.jsx)("p", {
                            className: " text-xl text-white font-extrabold",
                            children: "Search Property by filters"
                        }), (0, r.jsx)(d.VK0, {
                            className: " text-white text-xl mt-1"
                        })]
                    }), l && (0, r.jsx)(c, {}), (0, r.jsx)("p", {
                        className: " flex items-center text-xl text-sky-600 ml-4 mt-2 font-extrabold  ",
                        children: (0, r.jsxs)("span", {
                            className: " flex gap-2 items-center border-b-8 border-t-2 sm:my-4 border-l-2 border-r-2 border-sky-500 rounded-md px-1 sm:py-2 sm:px-4",
                            children: [(0, r.jsx)(d.Yyz, {}), " Properties ", m.query.purpose]
                        })
                    }), (0, r.jsx)("div", {
                        className: " grid sm:grid-cols-2 sm:mx-20 my-2 sm:my-10 md:grid-cols-3 justify-center gap-8 ",
                        children: a.map(e => (0, r.jsx)(u.Z, {
                            property: e,
                            formSearch: !0
                        }, e.id))
                    }), 0 == a.length && (0, r.jsxs)("div", {
                        className: " flex justify-center relative",
                        children: [(0, r.jsx)(t(), {
                            alt: "no result",
                            height: 400,
                            width: "400",
                            src: v
                        }), (0, r.jsx)("p", {
                            className: " absolute top-40 text-white font-bold ",
                            children: "NO RESULT !"
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [392, 774, 888, 179], function() {
            return e(e.s = 5180)
        }), _N_E = e.O()
    }
]);