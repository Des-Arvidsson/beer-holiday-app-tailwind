module.exports = [
"[project]/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const CERVEZAS = [
    'IPA',
    'Lager',
    'Stout',
    'Pilsner',
    'Wheat Beer',
    'Pale Ale'
];
const CERVEZAS_IMAGES = {
    "IPA": "/images/ipa.png",
    "Lager": "/images/lager.png",
    "Stout": "/images/stout.png",
    "Pilsner": "/images/pilsner.png",
    "Wheat Beer": "/images/wheat.png",
    "Pale Ale": "/images/paleale.png"
};
function Home({ employees }) {
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const handleBeerChange = (id, beer)=>{
        setFavorites((prev)=>({
                ...prev,
                [id]: {
                    beer,
                    lastUpdated: new Date().toLocaleString()
                }
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "🍺 Employees & Favorite Beers"
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: emp.name
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 41,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: emp.title
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 42,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1",
                                        children: "Favorite Beer"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 45,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        className: "w-full rounded border px-3 py-2",
                                        value: favorites[emp.id]?.beer || "",
                                        onChange: (e)=>handleBeerChange(emp.id, e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                children: "Select a beer"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.tsx",
                                                lineNumber: 51,
                                                columnNumber: 7
                                            }, this),
                                            CERVEZAS.map((beer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: beer,
                                                    children: beer
                                                }, beer, false, {
                                                    fileName: "[project]/pages/index.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 9
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 46,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 44,
                                columnNumber: 3
                            }, this),
                            favorites[emp.id]?.beer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: CERVEZAS_IMAGES[favorites[emp.id].beer],
                                        alt: favorites[emp.id].beer,
                                        className: "w-16 h-16 object-contain rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 61,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: favorites[emp.id].beer
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 66,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 60,
                                columnNumber: 5
                            }, this),
                            favorites[emp.id]?.lastUpdated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-xs text-gray-500",
                                children: [
                                    "Last updated: ",
                                    favorites[emp.id].lastUpdated
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 71,
                                columnNumber: 5
                            }, this)
                        ]
                    }, emp.id, true, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
const getServerSideProps = async ()=>{
    const res = await fetch('https://dummyjson.com/users?limit=50');
    const data = await res.json();
    const employees = data.users.map((user)=>({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            title: `${user.company.title}`
        }));
    return {
        props: {
            employees
        }
    };
};
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1c9c29bd._.js.map