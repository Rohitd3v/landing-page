(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/env.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>s
]);
var i = Object.defineProperty;
var d = (t, e, n)=>e in t ? i(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n;
var r = (t, e, n)=>(d(t, typeof e != "symbol" ? e + "" : e, n), n);
class o {
    set(e) {
        this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
    }
    reset() {
        this.set(this.detect());
    }
    nextId() {
        return ++this.currentId;
    }
    get isServer() {
        return this.current === "server";
    }
    get isClient() {
        return this.current === "client";
    }
    detect() {
        return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
    }
    handoff() {
        this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
        return this.handoffState === "complete";
    }
    constructor(){
        r(this, "current", this.detect());
        r(this, "handoffState", "pending");
        r(this, "currentId", 0);
    }
}
let s = new o;
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsoMorphicEffect",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/env.js [app-client] (ecmascript)");
;
;
let n = (e, t)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isServer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(e, t) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(e, t);
};
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLatestValue",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
;
;
function s(e) {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(e);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        r.current = e;
    }, [
        e
    ]), r;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEvent",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
;
;
let o = function(t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(t);
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "o.useCallback": function() {
            for(var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++){
                r[_key] = arguments[_key];
            }
            return e.current(...r);
        }
    }["o.useCallback"], [
        e
    ]);
};
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "optionalRef",
    ()=>T,
    "useSyncRefs",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
;
;
let u = Symbol();
function T(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return Object.assign(t, {
        [u]: n
    });
}
function y() {
    for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
        t[_key] = arguments[_key];
    }
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        n.current = t;
    }, [
        t
    ]);
    let c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        for (let o of n.current)o != null && (typeof o == "function" ? o(e) : o.current = e);
    });
    return t.every((e)=>e == null || (e == null ? void 0 : e[u])) ? void 0 : c;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DisabledProvider",
    ()=>l,
    "useDisabled",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function a() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(e);
}
function l(param) {
    let { value: t, children: o } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(e.Provider, {
        value: t
    }, o);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/class-names.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "classNames",
    ()=>t
]);
function t() {
    for(var _len = arguments.length, r = new Array(_len), _key = 0; _key < _len; _key++){
        r[_key] = arguments[_key];
    }
    return Array.from(new Set(r.flatMap((n)=>typeof n == "string" ? n.split(" ") : []))).filter(Boolean).join(" ");
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>u
]);
function u(r, n) {
    for(var _len = arguments.length, a = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        a[_key - 2] = arguments[_key];
    }
    if (r in n) {
        let e = n[r];
        return typeof e == "function" ? e(...a) : e;
    }
    let t = new Error('Tried to handle "'.concat(r, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(n).map((e)=>'"'.concat(e, '"')).join(", "), "."));
    throw Error.captureStackTrace && Error.captureStackTrace(t, u), t;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenderFeatures",
    ()=>O,
    "RenderStrategy",
    ()=>A,
    "compact",
    ()=>m,
    "forwardRefWithAs",
    ()=>K,
    "mergeProps",
    ()=>_,
    "useRender",
    ()=>L
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$class$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/class-names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
;
;
;
var O = ((a)=>(a[a.None = 0] = "None", a[a.RenderStrategy = 1] = "RenderStrategy", a[a.Static = 2] = "Static", a))(O || {}), A = ((e)=>(e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(A || {});
function L() {
    let n = U();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((r)=>C({
            mergeRefs: n,
            ...r
        }), [
        n
    ]);
}
function C(param) {
    let { ourProps: n, theirProps: r, slot: e, defaultTag: a, features: s, visible: t = !0, name: l, mergeRefs: i } = param;
    i = i != null ? i : $;
    let o = P(r, n);
    if (t) return F(o, e, a, l, i);
    let y = s != null ? s : 0;
    if (y & 2) {
        let { static: f = !1, ...u } = o;
        if (f) return F(u, e, a, l, i);
    }
    if (y & 1) {
        let { unmount: f = !0, ...u } = o;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(f ? 0 : 1, {
            [0] () {
                return null;
            },
            [1] () {
                return F({
                    ...u,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, e, a, l, i);
            }
        });
    }
    return F(o, e, a, l, i);
}
function F(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    let { as: t = e, children: l, refName: i = "ref", ...o } = h(n, [
        "unmount",
        "static"
    ]), y = n.ref !== void 0 ? {
        [i]: n.ref
    } : {}, f = typeof l == "function" ? l(r) : l;
    "className" in o && o.className && typeof o.className == "function" && (o.className = o.className(r)), o["aria-labelledby"] && o["aria-labelledby"] === o.id && (o["aria-labelledby"] = void 0);
    let u = {};
    if (r) {
        let d = !1, p = [];
        for (let [c, T] of Object.entries(r))typeof T == "boolean" && (d = !0), T === !0 && p.push(c.replace(/([A-Z])/g, (g)=>"-".concat(g.toLowerCase())));
        if (d) {
            u["data-headlessui-state"] = p.join(" ");
            for (let c of p)u["data-".concat(c)] = "";
        }
    }
    if (t === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"] && (Object.keys(m(o)).length > 0 || Object.keys(m(u)).length > 0)) if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(f) || Array.isArray(f) && f.length > 1) {
        if (Object.keys(m(o)).length > 0) throw new Error([
            'Passing props on "Fragment"!',
            "",
            "The current component <".concat(a, ' /> is rendering a "Fragment".'),
            "However we need to passthrough the following props:",
            Object.keys(m(o)).concat(Object.keys(m(u))).map((d)=>"  - ".concat(d)).join("\n"),
            "",
            "You can apply a few solutions:",
            [
                'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                "Render a single element as the child so that we can forward the props onto that element."
            ].map((d)=>"  - ".concat(d)).join("\n")
        ].join("\n"));
    } else {
        let d = f.props, p = d == null ? void 0 : d.className, c = typeof p == "function" ? function() {
            for(var _len = arguments.length, R = new Array(_len), _key = 0; _key < _len; _key++){
                R[_key] = arguments[_key];
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$class$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(p(...R), o.className);
        } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$class$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(p, o.className), T = c ? {
            className: c
        } : {}, g = P(f.props, m(h(o, [
            "ref"
        ])));
        for(let R in u)R in g && delete u[R];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(f, Object.assign({}, g, u, y, {
            ref: s(H(f), y.ref)
        }, T));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(t, Object.assign({}, h(o, [
        "ref"
    ]), t !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"] && y, t !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"] && u), f);
}
function U() {
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        for (let a of n.current)a != null && (typeof a == "function" ? a(e) : a.current = e);
    }, []);
    return function() {
        for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
            e[_key] = arguments[_key];
        }
        if (!e.every((a)=>a == null)) return n.current = e, r;
    };
}
function $() {
    for(var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++){
        n[_key] = arguments[_key];
    }
    return n.every((r)=>r == null) ? void 0 : (r)=>{
        for (let e of n)e != null && (typeof e == "function" ? e(r) : e.current = r);
    };
}
function P() {
    for(var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++){
        n[_key] = arguments[_key];
    }
    var a;
    if (n.length === 0) return {};
    if (n.length === 1) return n[0];
    let r = {}, e = {};
    for (let s of n)for(let t in s)t.startsWith("on") && typeof s[t] == "function" ? ((a = e[t]) != null || (e[t] = []), e[t].push(s[t])) : r[t] = s[t];
    if (r.disabled || r["aria-disabled"]) for(let s in e)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s) && (e[s] = [
        (t)=>{
            var l;
            return (l = t == null ? void 0 : t.preventDefault) == null ? void 0 : l.call(t);
        }
    ]);
    for(let s in e)Object.assign(r, {
        [s] (t) {
            for(var _len = arguments.length, l = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                l[_key - 1] = arguments[_key];
            }
            let i = e[s];
            for (let o of i){
                if ((t instanceof Event || (t == null ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                o(t, ...l);
            }
        }
    });
    return r;
}
function _() {
    for(var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++){
        n[_key] = arguments[_key];
    }
    var a;
    if (n.length === 0) return {};
    if (n.length === 1) return n[0];
    let r = {}, e = {};
    for (let s of n)for(let t in s)t.startsWith("on") && typeof s[t] == "function" ? ((a = e[t]) != null || (e[t] = []), e[t].push(s[t])) : r[t] = s[t];
    for(let s in e)Object.assign(r, {
        [s] () {
            for(var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++){
                t[_key] = arguments[_key];
            }
            let l = e[s];
            for (let i of l)i == null || i(...t);
        }
    });
    return r;
}
function K(n) {
    var r;
    return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(n), {
        displayName: (r = n.displayName) != null ? r : n.name
    });
}
function m(n) {
    let r = Object.assign({}, n);
    for(let e in r)r[e] === void 0 && delete r[e];
    return r;
}
function h(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    let e = Object.assign({}, n);
    for (let a of r)a in e && delete e[a];
    return e;
}
function H(n) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version.split(".")[0] >= "19" ? n.props.ref : n.ref;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Description",
    ()=>H,
    "useDescribedBy",
    ()=>U,
    "useDescriptions",
    ()=>w
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
a.displayName = "DescriptionContext";
function f() {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(a);
    if (r === null) {
        let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(e, f), e;
    }
    return r;
}
function U() {
    var r, e;
    return (e = (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(a)) == null ? void 0 : r.value) != null ? e : void 0;
}
function w() {
    let [r, e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    return [
        r.length > 0 ? r.join(" ") : void 0,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>function(t) {
                let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((n)=>(e((s)=>[
                            ...s,
                            n
                        ]), ()=>e((s)=>{
                            let o = s.slice(), p = o.indexOf(n);
                            return p !== -1 && o.splice(p, 1), o;
                        }))), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                        register: i,
                        slot: t.slot,
                        name: t.name,
                        props: t.props,
                        value: t.value
                    }), [
                    i,
                    t.slot,
                    t.name,
                    t.props,
                    t.value
                ]);
                return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(a.Provider, {
                    value: l
                }, t.children);
            }, [
            e
        ])
    ];
}
let S = "p";
function C(r, e) {
    let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { id: i = "headlessui-description-".concat(d), ...l } = r, n = f(), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(e);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>n.register(i), [
        i,
        n.register
    ]);
    let o = t || !1, p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...n.slot,
            disabled: o
        }), [
        n.slot,
        o
    ]), D = {
        ref: s,
        ...n.props,
        id: i
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: D,
        theirProps: l,
        slot: p,
        defaultTag: S,
        name: n.name || "Description"
    });
}
let _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(C), H = Object.assign(_, {});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdProvider",
    ()=>f,
    "useProvidedId",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function u() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(e);
}
function f(param) {
    let { id: t, children: r } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(e.Provider, {
        value: t
    }, r);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasInlineStyle",
    ()=>r,
    "isElement",
    ()=>t,
    "isHTMLElement",
    ()=>n,
    "isHTMLFieldSetElement",
    ()=>a,
    "isHTMLIframeElement",
    ()=>u,
    "isHTMLInputElement",
    ()=>l,
    "isHTMLLabelElement",
    ()=>m,
    "isHTMLLegendElement",
    ()=>E,
    "isHTMLTextAreaElement",
    ()=>s,
    "isHTMLorSVGElement",
    ()=>i,
    "isInteractiveElement",
    ()=>L,
    "isNode",
    ()=>o
]);
function o(e) {
    return typeof e != "object" || e === null ? !1 : "nodeType" in e;
}
function t(e) {
    return o(e) && "tagName" in e;
}
function n(e) {
    return t(e) && "accessKey" in e;
}
function i(e) {
    return t(e) && "tabIndex" in e;
}
function r(e) {
    return t(e) && "style" in e;
}
function u(e) {
    return n(e) && e.nodeName === "IFRAME";
}
function l(e) {
    return n(e) && e.nodeName === "INPUT";
}
function s(e) {
    return n(e) && e.nodeName === "TEXTAREA";
}
function m(e) {
    return n(e) && e.nodeName === "LABEL";
}
function a(e) {
    return n(e) && e.nodeName === "FIELDSET";
}
function E(e) {
    return n(e) && e.nodeName === "LEGEND";
}
function L(e) {
    return t(e) ? e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : !1;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>V,
    "useLabelContext",
    ()=>C,
    "useLabelledBy",
    ()=>N,
    "useLabels",
    ()=>Q
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
let L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
L.displayName = "LabelContext";
function C() {
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(L);
    if (n === null) {
        let l = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(l, C), l;
    }
    return n;
}
function N(n) {
    var a, e, o;
    let l = (e = (a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(L)) == null ? void 0 : a.value) != null ? e : void 0;
    return ((o = n == null ? void 0 : n.length) != null ? o : 0) > 0 ? [
        l,
        ...n
    ].filter(Boolean).join(" ") : l;
}
function Q() {
    let { inherit: n = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let l = N(), [a, e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), o = n ? [
        l,
        ...a
    ].filter(Boolean) : a;
    return [
        o.length > 0 ? o.join(" ") : void 0,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>function(t) {
                let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>(e((u)=>[
                            ...u,
                            i
                        ]), ()=>e((u)=>{
                            let d = u.slice(), f = d.indexOf(i);
                            return f !== -1 && d.splice(f, 1), d;
                        }))), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                        register: p,
                        slot: t.slot,
                        name: t.name,
                        props: t.props,
                        value: t.value
                    }), [
                    p,
                    t.slot,
                    t.name,
                    t.props,
                    t.value
                ]);
                return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(L.Provider, {
                    value: b
                }, t.children);
            }, [
            e
        ])
    ];
}
let G = "label";
function U(n, l) {
    var E;
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), e = C(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProvidedId"])(), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { id: t = "headlessui-label-".concat(a), htmlFor: p = o != null ? o : (E = e.props) == null ? void 0 : E.htmlFor, passive: b = !1, ...i } = n, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(l);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>e.register(t), [
        t,
        e.register
    ]);
    let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((s)=>{
        let g = s.currentTarget;
        if (!(s.target !== s.currentTarget && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInteractiveElement"](s.target)) && (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLLabelElement"](g) && s.preventDefault(), e.props && "onClick" in e.props && typeof e.props.onClick == "function" && e.props.onClick(s), __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLLabelElement"](g))) {
            let r = document.getElementById(g.htmlFor);
            if (r) {
                let x = r.getAttribute("disabled");
                if (x === "true" || x === "") return;
                let h = r.getAttribute("aria-disabled");
                if (h === "true" || h === "") return;
                (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLInputElement"](r) && (r.type === "file" || r.type === "radio" || r.type === "checkbox") || r.role === "radio" || r.role === "checkbox" || r.role === "switch") && r.click(), r.focus({
                    preventScroll: !0
                });
            }
        }
    }), f = y || !1, R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...e.slot,
            disabled: f
        }), [
        e.slot,
        f
    ]), c = {
        ref: u,
        ...e.props,
        id: t,
        htmlFor: p,
        onClick: d
    };
    return b && ("onClick" in c && (delete c.htmlFor, delete c.onClick), "onClick" in i && delete i.onClick), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: c,
        theirProps: i,
        slot: R,
        defaultTag: p ? G : "div",
        name: e.name || "Label"
    });
}
let j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(U), V = Object.assign(j, {});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/micro-task.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "microTask",
    ()=>t
]);
function t(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o)=>setTimeout(()=>{
            throw o;
        }));
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-unmount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOnUnmount",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/micro-task.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
;
;
;
function c(t) {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(t), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(e.current = !1, ()=>{
            e.current = !0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microTask"])(()=>{
                e.current && r();
            });
        }), [
        r
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOwnerDocument",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/env.js [app-client] (ecmascript)");
;
function o(n) {
    var e, r;
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isServer ? null : n ? "ownerDocument" in n ? n.ownerDocument : "current" in n ? (r = (e = n.current) == null ? void 0 : e.ownerDocument) != null ? r : document : null : document;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-owner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOwnerDocument",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
;
;
function n() {
    for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
        e[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(...e), [
        ...e
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useServerHandoffComplete",
    ()=>l
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/env.js [app-client] (ecmascript)");
;
;
function s() {
    let r = typeof document == "undefined";
    return "useSyncExternalStore" in __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ ? ((o)=>o.useSyncExternalStore)(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__)(()=>()=>{}, ()=>!1, ()=>!r) : !1;
}
function l() {
    let r = s(), [e, n] = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isHandoffComplete);
    return e && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isHandoffComplete === !1 && n(!1), __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "l.useEffect": ()=>{
            e !== !0 && n(!0);
        }
    }["l.useEffect"], [
        e
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "l.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].handoff()
    }["l.useEffect"], []), r ? !1 : e;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/portal-force-root.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForcePortalRoot",
    ()=>l,
    "usePortalRoot",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(!1);
function a() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(e);
}
function l(o) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(e.Provider, {
        value: o.force
    }, o.children);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/portal/portal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>ne,
    "PortalGroup",
    ()=>q,
    "useNestedPortals",
    ()=>oe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-unmount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$server$2d$handoff$2d$complete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$portal$2d$force$2d$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/portal-force-root.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function I(e) {
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$portal$2d$force$2d$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortalRoot"])(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(H), [r, u] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>{
        var i;
        if (!l && o !== null) return (i = o.current) != null ? i : null;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isServer) return null;
        let t = e == null ? void 0 : e.getElementById("headlessui-portal-root");
        if (t) return t;
        if (e === null) return null;
        let a = e.createElement("div");
        return a.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(a);
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        r !== null && (e != null && e.body.contains(r) || e == null || e.body.appendChild(r));
    }, [
        r,
        e
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        l || o !== null && u(o.current);
    }, [
        o,
        u,
        l
    ]), r;
}
let M = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(function(l, o) {
    let { ownerDocument: r = null, ...u } = l, t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalRef"])((s)=>{
        t.current = s;
    }), o), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(t), f = r != null ? r : i, p = I(f), [n] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>{
        var s;
        return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isServer ? null : (s = f == null ? void 0 : f.createElement("div")) != null ? s : null;
    }), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(g), O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$server$2d$handoff$2d$complete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerHandoffComplete"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        !p || !n || p.contains(n) || (n.setAttribute("data-headlessui-portal", ""), p.appendChild(n));
    }, [
        p,
        n
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (n && P) return P.register(n);
    }, [
        P,
        n
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnUnmount"])(()=>{
        var s;
        !p || !n || (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNode"](n) && p.contains(n) && p.removeChild(n), p.childNodes.length <= 0 && ((s = p.parentElement) == null || s.removeChild(p)));
    });
    let b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return O ? !p || !n ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(b({
        ourProps: {
            ref: a
        },
        theirProps: u,
        slot: {},
        defaultTag: M,
        name: "Portal"
    }), n) : null;
});
function J(e, l) {
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(l), { enabled: r = !0, ownerDocument: u, ...t } = e, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return r ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(D, {
        ...t,
        ownerDocument: u,
        ref: o
    }) : a({
        ourProps: {
            ref: o
        },
        theirProps: t,
        slot: {},
        defaultTag: M,
        name: "Portal"
    });
}
let X = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function k(e, l) {
    let { target: o, ...r } = e, t = {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(l)
    }, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(H.Provider, {
        value: o
    }, a({
        ourProps: t,
        theirProps: r,
        defaultTag: X,
        name: "Popover.Group"
    }));
}
let g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function oe() {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(g), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>(l.current.push(t), e && e.register(t), ()=>r(t))), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        let a = l.current.indexOf(t);
        a !== -1 && l.current.splice(a, 1), e && e.unregister(t);
    }), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            register: o,
            unregister: r,
            portals: l
        }), [
        o,
        r,
        l
    ]);
    return [
        l,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>function(param) {
                let { children: a } = param;
                return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(g.Provider, {
                    value: u
                }, a);
            }, [
            u
        ])
    ];
}
let B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(J), q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(k), ne = Object.assign(B, {
    Group: q
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/close-provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseProvider",
    ()=>C,
    "useClose",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(()=>{});
function u() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(e);
}
function C(param) {
    let { value: t, children: o } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(e.Provider, {
        value: t
    }, o);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "disposables",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/micro-task.js [app-client] (ecmascript)");
;
function o() {
    let s = [], r = {
        addEventListener (e, t, n, i) {
            return e.addEventListener(t, n, i), r.add(()=>e.removeEventListener(t, n, i));
        },
        requestAnimationFrame () {
            for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
                e[_key] = arguments[_key];
            }
            let t = requestAnimationFrame(...e);
            return r.add(()=>cancelAnimationFrame(t));
        },
        nextFrame () {
            for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
                e[_key] = arguments[_key];
            }
            return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e));
        },
        setTimeout () {
            for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
                e[_key] = arguments[_key];
            }
            let t = setTimeout(...e);
            return r.add(()=>clearTimeout(t));
        },
        microTask () {
            for(var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++){
                e[_key] = arguments[_key];
            }
            let t = {
                current: !0
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microTask"])(()=>{
                t.current && e[0]();
            }), r.add(()=>{
                t.current = !1;
            });
        },
        style (e, t, n) {
            let i = e.style.getPropertyValue(t);
            return Object.assign(e.style, {
                [t]: n
            }), this.add(()=>{
                Object.assign(e.style, {
                    [t]: i
                });
            });
        },
        group (e) {
            let t = o();
            return e(t), this.add(()=>t.dispose());
        },
        add (e) {
            return s.includes(e) || s.push(e), ()=>{
                let t = s.indexOf(e);
                if (t >= 0) for (let n of s.splice(t, 1))n();
            };
        },
        dispose () {
            for (let e of s.splice(0))e();
        }
    };
    return r;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDisposables",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
;
;
function p() {
    let [e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>e.dispose(), [
        e
    ]), e;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActivePress",
    ()=>w
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
;
;
;
;
function E(e) {
    let t = e.width / 2, n = e.height / 2;
    return {
        top: e.clientY - n,
        right: e.clientX + t,
        bottom: e.clientY + n,
        left: e.clientX - t
    };
}
function P(e, t) {
    return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function w() {
    let { disabled: e = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [n, l] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        t.current = null, l(!1), r.dispose();
    }), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((s)=>{
        if (r.dispose(), t.current === null) {
            t.current = s.currentTarget, l(!0);
            {
                let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(s.currentTarget);
                r.addEventListener(i, "pointerup", o, !1), r.addEventListener(i, "pointermove", (c)=>{
                    if (t.current) {
                        let p = E(c);
                        l(P(p, t.current.getBoundingClientRect()));
                    }
                }, !1), r.addEventListener(i, "pointercancel", o, !1);
            }
        }
    });
    return {
        pressed: n,
        pressProps: e ? {} : {
            onPointerDown: f,
            onPointerUp: o,
            onClick: o
        }
    };
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/button/button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>H
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
let R = "button";
function v(a, u) {
    var p;
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { disabled: e = l || !1, autoFocus: t = !1, ...o } = a, { isFocusVisible: r, focusProps: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: t
    }), { isHovered: s, hoverProps: T } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: e
    }), { pressed: n, pressProps: d } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: e
    }), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: u,
        type: (p = o.type) != null ? p : "button",
        disabled: e || void 0,
        autoFocus: t
    }, i, T, d), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            disabled: e,
            hover: s,
            focus: r,
            active: n,
            autofocus: t
        }), [
        e,
        s,
        r,
        n,
        t
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: f,
        theirProps: o,
        slot: m,
        defaultTag: R,
        name: "Button"
    });
}
let H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(v);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-controllable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useControllable",
    ()=>T
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
;
;
function T(l, r, c) {
    let [i, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(c), e = l !== void 0, t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(e), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    return e && !t.current && !u.current ? (u.current = !0, t.current = e, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e && t.current && !d.current && (d.current = !0, t.current = e, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [
        e ? l : i,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((n)=>(e || s(n), r == null ? void 0 : r(n)))
    ];
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-default-value.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDefaultValue",
    ()=>l
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function l(e) {
    let [t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e);
    return t;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/form.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attemptSubmit",
    ()=>p,
    "objectToFormEntries",
    ()=>e
]);
function e() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    for (let [r, n] of Object.entries(i))o(t, f(s, r), n);
    return t;
}
function f(i, s) {
    return i ? i + "[" + s + "]" : s;
}
function o(i, s, t) {
    if (Array.isArray(t)) for (let [r, n] of t.entries())o(i, f(s, r.toString()), n);
    else t instanceof Date ? i.push([
        s,
        t.toISOString()
    ]) : typeof t == "boolean" ? i.push([
        s,
        t ? "1" : "0"
    ]) : typeof t == "string" ? i.push([
        s,
        t
    ]) : typeof t == "number" ? i.push([
        s,
        "".concat(t)
    ]) : t == null ? i.push([
        s,
        ""
    ]) : e(t, s, i);
}
function p(i) {
    var t, r;
    let s = (t = i == null ? void 0 : i.form) != null ? t : i.closest("form");
    if (s) {
        for (let n of s.elements)if (n !== i && (n.tagName === "INPUT" && n.type === "submit" || n.tagName === "BUTTON" && n.type === "submit" || n.nodeName === "INPUT" && n.type === "image")) {
            n.click();
            return;
        }
        (r = s.requestSubmit) == null || r.call(s);
    }
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/hidden.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hidden",
    ()=>f,
    "HiddenFeatures",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
;
let a = "span";
var s = ((e)=>(e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s || {});
function l(t, r) {
    var n;
    let { features: d = 1, ...e } = t, o = {
        ref: r,
        "aria-hidden": (d & 2) === 2 ? !0 : (n = e["aria-hidden"]) != null ? n : void 0,
        hidden: (d & 4) === 4 ? !0 : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(d & 4) === 4 && (d & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: o,
        theirProps: e,
        slot: {},
        defaultTag: a,
        name: "Hidden"
    });
}
let f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(l);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/form-fields.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormFields",
    ()=>j,
    "FormFieldsProvider",
    ()=>W,
    "HoistFormFields",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/hidden.js [app-client] (ecmascript)");
;
;
;
;
;
;
let f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function W(t) {
    let [e, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(f.Provider, {
        value: {
            target: e
        }
    }, t.children, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Hidden,
        ref: r
    }));
}
function c(param) {
    let { children: t } = param;
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(f);
    if (!e) return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, t);
    let { target: r } = e;
    return r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, t), r) : null;
}
function j(param) {
    let { data: t, form: e, disabled: r, onReset: n, overrides: F } = param;
    let [i, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (n && i) return p.addEventListener(i, "reset", n);
    }, [
        i,
        e,
        n
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(c, null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(C, {
        setForm: a,
        formId: e
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToFormEntries"])(t).map((param)=>{
        let [s, v] = param;
        return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
            features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Hidden,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compact"])({
                key: s,
                as: "input",
                type: "hidden",
                hidden: !0,
                readOnly: !0,
                form: e,
                disabled: r,
                name: s,
                value: v,
                ...F
            })
        });
    }));
}
function C(param) {
    let { setForm: t, formId: e } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (e) {
            let r = document.getElementById(e);
            r && t(r);
        }
    }, [
        t,
        e
    ]), e ? null : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Hidden,
        as: "input",
        type: "hidden",
        hidden: !0,
        readOnly: !0,
        ref: (r)=>{
            if (!r) return;
            let n = r.closest("form");
            n && t(n);
        }
    });
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/bugs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDisabledReactIssue7711",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
;
function s(l) {
    let e = l.parentElement, t = null;
    for(; e && !__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLFieldSetElement"](e);)__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLLegendElement"](e) && (t = e), e = e.parentElement;
    let i = (e == null ? void 0 : e.getAttribute("disabled")) === "";
    return i && r(t) ? !1 : i;
}
function r(l) {
    if (!l) return !1;
    let e = l.previousElementSibling;
    for(; e !== null;){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLLegendElement"](e)) return !1;
        e = e.previousElementSibling;
    }
    return !0;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keys",
    ()=>o
]);
var o = ((r)=>(r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(o || {});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/checkbox/checkbox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Fe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-controllable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-default-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/form-fields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/bugs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let de = "span";
function pe(T, h) {
    let C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProvidedId"])(), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { id: g = k || "headlessui-checkbox-".concat(C), disabled: e = x || !1, autoFocus: s = !1, checked: E, defaultChecked: v, onChange: P, name: d, value: D, form: R, indeterminate: n = !1, tabIndex: A = 0, ...F } = T, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultValue"])(v), [a, t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllable"])(E, P, r != null ? r : !1), K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])(), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescribedBy"])(), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])(), [p, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        c(!0), t == null || t(!a), H.nextFrame(()=>{
            c(!1);
        });
    }), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(o.currentTarget)) return o.preventDefault();
        o.preventDefault(), u();
    }), I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        o.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space ? (o.preventDefault(), u()) : o.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attemptSubmit"])(o.currentTarget);
    }), L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>o.preventDefault()), { isFocusVisible: m, focusProps: M } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: s
    }), { isHovered: b, hoverProps: U } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: e
    }), { pressed: f, pressProps: O } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: e
    }), X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: h,
        id: g,
        role: "checkbox",
        "aria-checked": n ? "mixed" : a ? "true" : "false",
        "aria-labelledby": K,
        "aria-describedby": _,
        "aria-disabled": e ? !0 : void 0,
        indeterminate: n ? "true" : void 0,
        tabIndex: e ? void 0 : A,
        onKeyUp: e ? void 0 : I,
        onKeyPress: e ? void 0 : L,
        onClick: e ? void 0 : B
    }, M, U, O), G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            checked: a,
            disabled: e,
            hover: b,
            focus: m,
            active: f,
            indeterminate: n,
            changing: p,
            autofocus: s
        }), [
        a,
        n,
        e,
        b,
        m,
        f,
        p,
        s
    ]), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (r !== void 0) return t == null ? void 0 : t(r);
    }, [
        t,
        r
    ]), W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, d != null && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], {
        disabled: e,
        data: {
            [d]: D || "on"
        },
        overrides: {
            type: "checkbox",
            checked: a
        },
        form: R,
        onReset: S
    }), W({
        ourProps: X,
        theirProps: F,
        slot: G,
        defaultTag: de,
        name: "Checkbox"
    }));
}
let Fe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(pe);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/close-button/close-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$close$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/close-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/button/button.js [app-client] (ecmascript)");
"use client";
;
;
;
;
let i = "button";
function l(t, e) {
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$close$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClose"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: e,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
            onClick: o
        }, t)
    });
}
let y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(l);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-by-comparator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useByComparator",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function l(e, r) {
    return e !== null && r !== null && typeof e == "object" && typeof r == "object" && "id" in e && "id" in r ? e.id === r.id : e === r;
}
function u() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((r, t)=>{
        if (typeof e == "string") {
            let o = e;
            return (r == null ? void 0 : r[o]) === (t == null ? void 0 : t[o]);
        }
        return e(r, t);
    }, [
        e
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-element-size.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useElementSize",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
;
;
function f(e) {
    if (e === null) return {
        width: 0,
        height: 0
    };
    let { width: t, height: r } = e.getBoundingClientRect();
    return {
        width: t,
        height: r
    };
}
function d(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    let [r, u] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(()=>({}), {}), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>f(e), [
        e,
        r
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (!e) return;
        let n = new ResizeObserver(u);
        return n.observe(e), ()=>{
            n.disconnect();
        };
    }, [
        e
    ]), t ? {
        width: "".concat(i.width, "px"),
        height: "".concat(i.height, "px")
    } : i;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/default-map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultMap",
    ()=>a
]);
class a extends Map {
    get(t) {
        let e = super.get(t);
        return e === void 0 && (e = this.factory(t), this.set(t, e)), e;
    }
    constructor(t){
        super();
        this.factory = t;
    }
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/machine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Machine",
    ()=>x,
    "batch",
    ()=>R,
    "shallowEqual",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$default$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/default-map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/env.js [app-client] (ecmascript)");
var h = Object.defineProperty;
var v = (t, e, r)=>e in t ? h(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r;
var S = (t, e, r)=>(v(t, typeof e != "symbol" ? e + "" : e, r), r), b = (t, e, r)=>{
    if (!e.has(t)) throw TypeError("Cannot " + r);
};
var i = (t, e, r)=>(b(t, e, "read from private field"), r ? r.call(t) : e.get(t)), c = (t, e, r)=>{
    if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, u = (t, e, r, s)=>(b(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r);
var n, a, o;
;
;
;
class x {
    dispose() {
        this.disposables.dispose();
    }
    get state() {
        return i(this, n);
    }
    subscribe(e, r) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isServer) return ()=>{};
        let s = {
            selector: e,
            callback: r,
            current: e(i(this, n))
        };
        return i(this, o).add(s), this.disposables.add(()=>{
            i(this, o).delete(s);
        });
    }
    on(e, r) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isServer ? ()=>{} : (i(this, a).get(e).add(r), this.disposables.add(()=>{
            i(this, a).get(e).delete(r);
        }));
    }
    send(e) {
        let r = this.reduce(i(this, n), e);
        if (r !== i(this, n)) {
            u(this, n, r);
            for (let s of i(this, o)){
                let l = s.selector(i(this, n));
                j(s.current, l) || (s.current = l, s.callback(l));
            }
            for (let s of i(this, a).get(e.type))s(i(this, n), e);
        }
    }
    constructor(e){
        c(this, n, {});
        c(this, a, new __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$default$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultMap"](()=>new Set));
        c(this, o, new Set);
        S(this, "disposables", (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])());
        u(this, n, e), __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isServer && this.disposables.microTask(()=>{
            this.dispose();
        });
    }
}
n = new WeakMap, a = new WeakMap, o = new WeakMap;
function j(t, e) {
    return Object.is(t, e) ? !0 : typeof t != "object" || t === null || typeof e != "object" || e === null ? !1 : Array.isArray(t) && Array.isArray(e) ? t.length !== e.length ? !1 : f(t[Symbol.iterator](), e[Symbol.iterator]()) : t instanceof Map && e instanceof Map || t instanceof Set && e instanceof Set ? t.size !== e.size ? !1 : f(t.entries(), e.entries()) : y(t) && y(e) ? f(Object.entries(t)[Symbol.iterator](), Object.entries(e)[Symbol.iterator]()) : !1;
}
function f(t, e) {
    do {
        let r = t.next(), s = e.next();
        if (r.done && s.done) return !0;
        if (r.done || s.done || !Object.is(r.value, s.value)) return !1;
    }while (!0)
}
function y(t) {
    if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
    let e = Object.getPrototypeOf(t);
    return e === null || Object.getPrototypeOf(e) === null;
}
function R(t) {
    let [e, r] = t(), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])();
    return function() {
        for(var _len = arguments.length, l = new Array(_len), _key = 0; _key < _len; _key++){
            l[_key] = arguments[_key];
        }
        e(...l), s.dispose(), s.microTask(r);
    };
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionTypes",
    ()=>k,
    "stackMachines",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$default$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/default-map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var a = Object.defineProperty;
var r = (e, c, t)=>c in e ? a(e, c, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[c] = t;
var p = (e, c, t)=>(r(e, typeof c != "symbol" ? c + "" : c, t), t);
;
;
;
var k = ((t)=>(t[t.Push = 0] = "Push", t[t.Pop = 1] = "Pop", t))(k || {});
let y = {
    [0] (e, c) {
        let t = c.id, s = e.stack, i = e.stack.indexOf(t);
        if (i !== -1) {
            let n = e.stack.slice();
            return n.splice(i, 1), n.push(t), s = n, {
                ...e,
                stack: s
            };
        }
        return {
            ...e,
            stack: [
                ...e.stack,
                t
            ]
        };
    },
    [1] (e, c) {
        let t = c.id, s = e.stack.indexOf(t);
        if (s === -1) return e;
        let i = e.stack.slice();
        return i.splice(s, 1), {
            ...e,
            stack: i
        };
    }
};
class o extends __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Machine"] {
    static new() {
        return new o({
            stack: []
        });
    }
    reduce(t, s) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(s.type, y, t, s);
    }
    constructor(){
        super(...arguments);
        p(this, "actions", {
            push: (t)=>this.send({
                    type: 0,
                    id: t
                }),
            pop: (t)=>this.send({
                    type: 1,
                    id: t
                })
        });
        p(this, "selectors", {
            isTop: (t, s)=>t.stack[t.stack.length - 1] === s,
            inStack: (t, s)=>t.stack.includes(s)
        });
    }
}
const x = new __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$default$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultMap"](()=>o.new());
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/react-glue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSlice",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/use-sync-external-store/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machine.js [app-client] (ecmascript)");
;
;
;
function S(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>e.subscribe(s, i)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>e.state), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>e.state), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(n), r);
}
function s(e) {
    return e;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsTopLayer",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/react-glue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
;
;
;
;
function I(o, s) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), r = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackMachines"].get(s), [i, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>[
            r.selectors.isTop(e, t),
            r.selectors.inStack(e, t)
        ], [
        r,
        t
    ]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (o) return r.actions.push(t), ()=>r.actions.pop(t);
    }, [
        r,
        o,
        t
    ]), o ? c ? i : !0 : !1;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-inert-others.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInertOthers",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$top$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
;
;
;
;
let f = new Map, u = new Map;
function h(t) {
    var e;
    let r = (e = u.get(t)) != null ? e : 0;
    return u.set(t, r + 1), r !== 0 ? ()=>m(t) : (f.set(t, {
        "aria-hidden": t.getAttribute("aria-hidden"),
        inert: t.inert
    }), t.setAttribute("aria-hidden", "true"), t.inert = !0, ()=>m(t));
}
function m(t) {
    var i;
    let r = (i = u.get(t)) != null ? i : 1;
    if (r === 1 ? u.delete(t) : u.set(t, r - 1), r !== 1) return;
    let e = f.get(t);
    e && (e["aria-hidden"] === null ? t.removeAttribute("aria-hidden") : t.setAttribute("aria-hidden", e["aria-hidden"]), t.inert = e.inert, f.delete(t));
}
function y(t) {
    let { allowed: r, disallowed: e } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$top$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsTopLayer"])(t, "inert-others");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        var d, c;
        if (!i) return;
        let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])();
        for (let n of (d = e == null ? void 0 : e()) != null ? d : [])n && a.add(h(n));
        let s = (c = r == null ? void 0 : r()) != null ? c : [];
        for (let n of s){
            if (!n) continue;
            let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(n);
            if (!l) continue;
            let o = n.parentElement;
            for(; o && o !== l.body;){
                for (let p of o.children)s.some((E)=>p.contains(E)) || a.add(h(p));
                o = o.parentElement;
            }
        }
        return a.dispose;
    }, [
        i,
        r,
        e
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-disappear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOnDisappear",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
;
;
;
;
function p(s, n, o) {
    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])((t)=>{
        let e = t.getBoundingClientRect();
        e.x === 0 && e.y === 0 && e.width === 0 && e.height === 0 && o();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!s) return;
        let t = n === null ? null : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](n) ? n : n.current;
        if (!t) return;
        let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])();
        if (typeof ResizeObserver != "undefined") {
            let r = new ResizeObserver(()=>i.current(t));
            r.observe(t), e.add(()=>r.disconnect());
        }
        if (typeof IntersectionObserver != "undefined") {
            let r = new IntersectionObserver(()=>i.current(t));
            r.observe(t), e.add(()=>r.disconnect());
        }
        return ()=>e.dispose();
    }, [
        n,
        i,
        s
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Focus",
    ()=>T,
    "FocusResult",
    ()=>y,
    "FocusableMode",
    ()=>h,
    "focusElement",
    ()=>I,
    "focusFrom",
    ()=>j,
    "focusIn",
    ()=>g,
    "focusableSelector",
    ()=>f,
    "getAutoFocusableElements",
    ()=>O,
    "getFocusableElements",
    ()=>b,
    "isFocusableElement",
    ()=>A,
    "restoreFocusIfNecessary",
    ()=>V,
    "sortByDomNode",
    ()=>P
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
;
;
;
;
let f = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])"
].map((e)=>"".concat(e, ":not([tabindex='-1'])")).join(","), F = [
    "[data-autofocus]"
].map((e)=>"".concat(e, ":not([tabindex='-1'])")).join(",");
var T = ((n)=>(n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n[n.AutoFocus = 64] = "AutoFocus", n))(T || {}), y = ((o)=>(o[o.Error = 0] = "Error", o[o.Overflow = 1] = "Overflow", o[o.Success = 2] = "Success", o[o.Underflow = 3] = "Underflow", o))(y || {}), S = ((t)=>(t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(S || {});
function b() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.body;
    return e == null ? [] : Array.from(e.querySelectorAll(f)).sort((r, t)=>Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function O() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.body;
    return e == null ? [] : Array.from(e.querySelectorAll(F)).sort((r, t)=>Math.sign((r.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t)=>(t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(h || {});
function A(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var t;
    return e === ((t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e)) == null ? void 0 : t.body) ? !1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(r, {
        [0] () {
            return e.matches(f);
        },
        [1] () {
            let l = e;
            for(; l !== null;){
                if (l.matches(f)) return !0;
                l = l.parentElement;
            }
            return !1;
        }
    });
}
function V(e) {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])().nextFrame(()=>{
        r && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](r.activeElement) && !A(r.activeElement, 0) && I(e);
    });
}
var H = ((t)=>(t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(H || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e)=>{
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e)=>{
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function I(e) {
    e == null || e.focus({
        preventScroll: !0
    });
}
let w = [
    "textarea",
    "input"
].join(",");
function _(e) {
    var r, t;
    return (t = (r = e == null ? void 0 : e.matches) == null ? void 0 : r.call(e, w)) != null ? t : !1;
}
function P(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (t)=>t;
    return e.slice().sort((t, l)=>{
        let o = r(t), c = r(l);
        if (o === null || c === null) return 0;
        let u = o.compareDocumentPosition(c);
        return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
}
function j(e, r) {
    return g(b(), r, {
        relativeTo: e
    });
}
function g(e, r) {
    let { sorted: t = !0, relativeTo: l = null, skipElements: o = [] } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let c = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, u = Array.isArray(e) ? t ? P(e) : e : r & 64 ? O(e) : b(e);
    o.length > 0 && u.length > 1 && (u = u.filter((s)=>!o.some((a)=>a != null && "current" in a ? (a == null ? void 0 : a.current) === s : a === s))), l = l != null ? l : c.activeElement;
    let n = (()=>{
        if (r & 5) return 1;
        if (r & 10) return -1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), x = (()=>{
        if (r & 1) return 0;
        if (r & 2) return Math.max(0, u.indexOf(l)) - 1;
        if (r & 4) return Math.max(0, u.indexOf(l)) + 1;
        if (r & 8) return u.length - 1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), M = r & 32 ? {
        preventScroll: !0
    } : {}, m = 0, d = u.length, i;
    do {
        if (m >= d || m + d <= 0) return 0;
        let s = x + m;
        if (r & 16) s = (s + d) % d;
        else {
            if (s < 0) return 3;
            if (s >= d) return 1;
        }
        i = u[s], i == null || i.focus(M), m += n;
    }while (i !== c.activeElement)
    return r & 6 && _(i) && i.select(), 2;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/platform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAndroid",
    ()=>i,
    "isIOS",
    ()=>t,
    "isMobile",
    ()=>n
]);
function t() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i() {
    return /Android/gi.test(window.navigator.userAgent);
}
function n() {
    return t() || i();
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-document-event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDocumentEvent",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
;
;
function i(t, e, o, n) {
    let u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(o);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!t) return;
        function r(m) {
            u.current(m);
        }
        return document.addEventListener(e, r, n), ()=>document.removeEventListener(e, r, n);
    }, [
        t,
        e,
        n
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-window-event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWindowEvent",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
;
;
function s(t, e, o, n) {
    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(o);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!t) return;
        function r(d) {
            i.current(d);
        }
        return window.addEventListener(e, r, n), ()=>window.removeEventListener(e, r, n);
    }, [
        t,
        e,
        n
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-outside-click.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOutsideClick",
    ()=>k
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$document$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-document-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$window$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-window-event.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const C = 30;
function k(o, f, h) {
    let m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(h), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(e, c) {
        if (e.defaultPrevented) return;
        let r = c(e);
        if (r === null || !r.getRootNode().contains(r) || !r.isConnected) return;
        let M = function u(n) {
            return typeof n == "function" ? u(n()) : Array.isArray(n) || n instanceof Set ? n : [
                n
            ];
        }(f);
        for (let u of M)if (u !== null && (u.contains(r) || e.composed && e.composedPath().includes(u))) return;
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFocusableElement"])(r, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusableMode"].Loose) && r.tabIndex !== -1 && e.preventDefault(), m.current(e, r);
    }, [
        m,
        f
    ]), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$document$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocumentEvent"])(o, "pointerdown", (t)=>{
        var e, c;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (i.current = ((c = (e = t.composedPath) == null ? void 0 : e.call(t)) == null ? void 0 : c[0]) || t.target);
    }, !0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$document$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocumentEvent"])(o, "pointerup", (t)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || !i.current) return;
        let e = i.current;
        return i.current = null, s(t, ()=>e);
    }, !0);
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$document$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocumentEvent"])(o, "touchstart", (t)=>{
        l.current.x = t.touches[0].clientX, l.current.y = t.touches[0].clientY;
    }, !0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$document$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocumentEvent"])(o, "touchend", (t)=>{
        let e = {
            x: t.changedTouches[0].clientX,
            y: t.changedTouches[0].clientY
        };
        if (!(Math.abs(e.x - l.current.x) >= C || Math.abs(e.y - l.current.y) >= C)) return s(t, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](t.target) ? t.target : null);
    }, !0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$window$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWindowEvent"])(o, "blur", (t)=>s(t, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLIframeElement"](window.document.activeElement) ? window.document.activeElement : null), !0);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-quick-release.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Action",
    ()=>S,
    "useQuickRelease",
    ()=>L
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$document$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-document-event.js [app-client] (ecmascript)");
;
;
;
var H = ((e)=>(e[e.Ignore = 0] = "Ignore", e[e.Select = 1] = "Select", e[e.Close = 2] = "Close", e))(H || {});
const S = {
    Ignore: {
        kind: 0
    },
    Select: (r)=>({
            kind: 1,
            target: r
        }),
    Close: {
        kind: 2
    }
}, M = 200, f = 5;
function L(r, param) {
    let { trigger: n, action: T, close: e, select: p } = param;
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$document$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocumentEvent"])(r && n !== null, "pointerdown", (t)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNode"](t == null ? void 0 : t.target) && n != null && n.contains(t.target) && (i.current = t.x, u.current = t.y, l.current = t.timeStamp);
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$document$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocumentEvent"])(r && n !== null, "pointerup", (t)=>{
        var s, m;
        let c = l.current;
        if (c === null || (l.current = null, !__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](t.target)) || Math.abs(t.x - ((s = i.current) != null ? s : t.x)) < f && Math.abs(t.y - ((m = u.current) != null ? m : t.y)) < f) return;
        let a = T(t);
        switch(a.kind){
            case 0:
                return;
            case 1:
                {
                    t.timeStamp - c > M && (p(a.target), e());
                    break;
                }
            case 2:
                {
                    e();
                    break;
                }
        }
    }, {
        capture: !0
    });
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event-listener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEventListener",
    ()=>E
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
;
;
function E(n, e, a, t) {
    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(a);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        n = n != null ? n : window;
        function r(o) {
            i.current(o);
        }
        return n.addEventListener(e, r, t), ()=>n.removeEventListener(e, r, t);
    }, [
        n,
        e,
        t
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRefocusableInput",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event-listener.js [app-client] (ecmascript)");
;
;
;
;
function f(e) {
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        value: "",
        selectionStart: null,
        selectionEnd: null
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventListener"])(e, "blur", (n)=>{
        let t = n.target;
        __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLInputElement"](t) && (l.current = {
            value: t.value,
            selectionStart: t.selectionStart,
            selectionEnd: t.selectionEnd
        });
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        if (document.activeElement !== e && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLInputElement"](e) && e.isConnected) {
            if (e.focus({
                preventScroll: !0
            }), e.value !== l.current.value) e.setSelectionRange(e.value.length, e.value.length);
            else {
                let { selectionStart: n, selectionEnd: t } = l.current;
                n !== null && t !== null && e.setSelectionRange(n, t);
            }
            l.current = {
                value: "",
                selectionStart: null,
                selectionEnd: null
            };
        }
    });
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResolveButtonType",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function e(t, u) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        var n;
        if (t.type) return t.type;
        let r = (n = t.as) != null ? n : "button";
        if (typeof r == "string" && r.toLowerCase() === "button" || (u == null ? void 0 : u.tagName) === "BUTTON" && !u.hasAttribute("type")) return "button";
    }, [
        t.type,
        t.as,
        u
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function o(t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(t.subscribe, t.getSnapshot, t.getSnapshot);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>a
]);
function a(o, r) {
    let t = o(), n = new Set;
    return {
        getSnapshot () {
            return t;
        },
        subscribe (e) {
            return n.add(e), ()=>n.delete(e);
        },
        dispatch (e) {
            for(var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                s[_key - 1] = arguments[_key];
            }
            let i = r[e].call(t, ...s);
            i && (t = i, n.forEach((c)=>c()));
        }
    };
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adjustScrollbarPadding",
    ()=>d
]);
function d() {
    let r;
    return {
        before (param) {
            let { doc: e } = param;
            var l;
            let o = e.documentElement, t = (l = e.defaultView) != null ? l : window;
            r = Math.max(0, t.innerWidth - o.clientWidth);
        },
        after (param) {
            let { doc: e, d: o } = param;
            let t = e.documentElement, l = Math.max(0, t.clientWidth - t.offsetWidth), n = Math.max(0, r - l);
            o.style(t, "paddingRight", "".concat(n, "px"));
        }
    };
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleIOSLocking",
    ()=>w
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/platform.js [app-client] (ecmascript)");
;
;
;
function w() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])() ? {
        before (param) {
            let { doc: n, d: l, meta: f } = param;
            function i(a) {
                return f.containers.flatMap((r)=>r()).some((r)=>r.contains(a));
            }
            l.microTask(()=>{
                var c;
                if (window.getComputedStyle(n.documentElement).scrollBehavior !== "auto") {
                    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])();
                    t.style(n.documentElement, "scrollBehavior", "auto"), l.add(()=>l.microTask(()=>t.dispose()));
                }
                let a = (c = window.scrollY) != null ? c : window.pageYOffset, r = null;
                l.addEventListener(n, "click", (t)=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](t.target)) try {
                        let e = t.target.closest("a");
                        if (!e) return;
                        let { hash: m } = new URL(e.href), s = n.querySelector(m);
                        __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](s) && !i(s) && (r = s);
                    } catch (e) {}
                }, !0), l.addEventListener(n, "touchstart", (t)=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](t.target) && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasInlineStyle"](t.target)) if (i(t.target)) {
                        let e = t.target;
                        for(; e.parentElement && i(e.parentElement);)e = e.parentElement;
                        l.style(e, "overscrollBehavior", "contain");
                    } else l.style(t.target, "touchAction", "none");
                }), l.addEventListener(n, "touchmove", (t)=>{
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](t.target)) {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLInputElement"](t.target)) return;
                        if (i(t.target)) {
                            let e = t.target;
                            for(; e.parentElement && e.dataset.headlessuiPortal !== "" && !(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);)e = e.parentElement;
                            e.dataset.headlessuiPortal === "" && t.preventDefault();
                        } else t.preventDefault();
                    }
                }, {
                    passive: !1
                }), l.add(()=>{
                    var e;
                    let t = (e = window.scrollY) != null ? e : window.pageYOffset;
                    a !== t && window.scrollTo(0, a), r && r.isConnected && (r.scrollIntoView({
                        block: "nearest"
                    }), r = null);
                });
            });
        }
    } : {};
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "preventScroll",
    ()=>r
]);
function r() {
    return {
        before (param) {
            let { doc: e, d: o } = param;
            o.style(e.documentElement, "overflow", "hidden");
        }
    };
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "overflows",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$adjust$2d$scrollbar$2d$padding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$handle$2d$ios$2d$locking$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$prevent$2d$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js [app-client] (ecmascript)");
;
;
;
;
;
function m(e) {
    let n = {};
    for (let t of e)Object.assign(n, t(n));
    return n;
}
let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(()=>new Map, {
    PUSH (e, n) {
        var o;
        let t = (o = this.get(e)) != null ? o : {
            doc: e,
            count: 0,
            d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])(),
            meta: new Set
        };
        return t.count++, t.meta.add(n), this.set(e, t), this;
    },
    POP (e, n) {
        let t = this.get(e);
        return t && (t.count--, t.meta.delete(n)), this;
    },
    SCROLL_PREVENT (param) {
        let { doc: e, d: n, meta: t } = param;
        let o = {
            doc: e,
            d: n,
            meta: m(t)
        }, c = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$handle$2d$ios$2d$locking$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleIOSLocking"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$adjust$2d$scrollbar$2d$padding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adjustScrollbarPadding"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$prevent$2d$scroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preventScroll"])()
        ];
        c.forEach((param)=>{
            let { before: r } = param;
            return r == null ? void 0 : r(o);
        }), c.forEach((param)=>{
            let { after: r } = param;
            return r == null ? void 0 : r(o);
        });
    },
    SCROLL_ALLOW (param) {
        let { d: e } = param;
        e.dispose();
    },
    TEARDOWN (param) {
        let { doc: e } = param;
        this.delete(e);
    }
});
a.subscribe(()=>{
    let e = a.getSnapshot(), n = new Map;
    for (let [t] of e)n.set(t, t.documentElement.style.overflow);
    for (let t of e.values()){
        let o = n.get(t.doc) === "hidden", c = t.count !== 0;
        (c && !o || !c && o) && a.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && a.dispatch("TEARDOWN", t);
    }
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDocumentOverflowLockedEffect",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$overflow$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js [app-client] (ecmascript)");
;
;
;
function a(r, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ()=>({
            containers: []
        });
    let f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$overflow$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["overflows"]), o = e ? f.get(e) : void 0, i = o ? o.count > 0 : !1;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (!(!e || !r)) return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$overflow$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["overflows"].dispatch("PUSH", e, n), ()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$overflow$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["overflows"].dispatch("POP", e, n);
    }, [
        r,
        e
    ]), i;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollLock",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$use$2d$document$2d$overflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$top$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js [app-client] (ecmascript)");
;
;
function f(e, c) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ()=>[
            document.body
        ];
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$top$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsTopLayer"])(e, "scroll-lock");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$document$2d$overflow$2f$use$2d$document$2d$overflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocumentOverflowLockedEffect"])(r, c, (t)=>{
        var o;
        return {
            containers: [
                ...(o = t.containers) != null ? o : [],
                n
            ]
        };
    });
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTrackedPointer",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function t(e) {
    return [
        e.screenX,
        e.screenY
    ];
}
function u() {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        -1,
        -1
    ]);
    return {
        wasMoved (r) {
            let n = t(r);
            return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
        },
        update (r) {
            e.current = t(r);
        }
    };
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-flags.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFlags",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function c() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    let [t, l] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(u), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>l(e), [
        t
    ]), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>l((a)=>a | e), [
        t
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>(t & e) === e, [
        t
    ]), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>l((a)=>a & ~e), [
        l
    ]), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>l((a)=>a ^ e), [
        l
    ]);
    return {
        flags: t,
        setFlag: g,
        addFlag: s,
        hasFlag: m,
        removeFlag: n,
        toggleFlag: F
    };
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-transition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transitionDataAttributes",
    ()=>R,
    "useTransition",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var T, b;
;
;
;
;
;
typeof __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] == null ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) == null ? void 0 : T["NODE_ENV"]) === "test" && typeof ((b = Element == null ? void 0 : Element.prototype) == null ? void 0 : b.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
    return console.warn([
        "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
        "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
        "",
        "Example usage:",
        "```js",
        "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
        "mockAnimationsApi()",
        "```"
    ].join("\n")), [];
});
var L = ((r)=>(r[r.None = 0] = "None", r[r.Closed = 1] = "Closed", r[r.Enter = 2] = "Enter", r[r.Leave = 4] = "Leave", r))(L || {});
function R(t) {
    let n = {};
    for(let e in t)t[e] === !0 && (n["data-".concat(e)] = "");
    return n;
}
function x(t, n, e, i) {
    let [r, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e), { hasFlag: s, addFlag: a, removeFlag: l } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlags"])(t && r ? 3 : 0), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        var d;
        if (t) {
            if (e && o(!0), !n) {
                e && a(3);
                return;
            }
            return (d = i == null ? void 0 : i.start) == null || d.call(i, e), C(n, {
                inFlight: u,
                prepare () {
                    f.current ? f.current = !1 : f.current = u.current, u.current = !0, !f.current && (e ? (a(3), l(4)) : (a(4), l(2)));
                },
                run () {
                    f.current ? e ? (l(3), a(4)) : (l(4), a(3)) : e ? l(1) : a(1);
                },
                done () {
                    var p;
                    f.current && typeof n.getAnimations == "function" && n.getAnimations().length > 0 || (u.current = !1, l(7), e || o(!1), (p = i == null ? void 0 : i.end) == null || p.call(i, e));
                }
            });
        }
    }, [
        t,
        e,
        n,
        E
    ]), t ? [
        r,
        {
            closed: s(1),
            enter: s(2),
            leave: s(4),
            transition: s(2) || s(4)
        }
    ] : [
        e,
        {
            closed: void 0,
            enter: void 0,
            leave: void 0,
            transition: void 0
        }
    ];
}
function C(t, param) {
    let { prepare: n, run: e, done: i, inFlight: r } = param;
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])();
    return j(t, {
        prepare: n,
        inFlight: r
    }), o.nextFrame(()=>{
        e(), o.requestAnimationFrame(()=>{
            o.add(M(t, i));
        });
    }), o.dispose;
}
function M(t, n) {
    var o, s;
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])();
    if (!t) return e.dispose;
    let i = !1;
    e.add(()=>{
        i = !0;
    });
    let r = (s = (o = t.getAnimations) == null ? void 0 : o.call(t).filter((a)=>a instanceof CSSTransition)) != null ? s : [];
    return r.length === 0 ? (n(), e.dispose) : (Promise.allSettled(r.map((a)=>a.finished)).then(()=>{
        i || n();
    }), e.dispose);
}
function j(t, param) {
    let { inFlight: n, prepare: e } = param;
    if (n != null && n.current) {
        e();
        return;
    }
    let i = t.style.transition;
    t.style.transition = "none", e(), t.offsetHeight, t.style.transition = i;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tree-walker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTreeWalker",
    ()=>F
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
;
;
;
function F(c, param) {
    let { container: e, accept: t, walk: r } = param;
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(r);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        o.current = t, l.current = r;
    }, [
        t,
        r
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (!e || !c) return;
        let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e);
        if (!n) return;
        let f = o.current, p = l.current, i = Object.assign((m)=>f(m), {
            acceptNode: f
        }), u = n.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, i, !1);
        for(; u.nextNode();)p(u.currentNode);
    }, [
        e,
        c,
        o,
        l
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-watch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWatch",
    ()=>m
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
;
;
function m(u, t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(u);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let o = [
            ...e.current
        ];
        for (let [a, l] of t.entries())if (e.current[a] !== l) {
            let n = r(t, o);
            return e.current = t, n;
        }
    }, [
        r,
        ...t
    ]);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/floating.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingProvider",
    ()=>Ae,
    "useFloatingPanel",
    ()=>Re,
    "useFloatingPanelProps",
    ()=>Te,
    "useFloatingReference",
    ()=>Fe,
    "useFloatingReferenceProps",
    ()=>be,
    "useResolvedAnchor",
    ()=>ye
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
let y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    styles: void 0,
    setReference: ()=>{},
    setFloating: ()=>{},
    getReferenceProps: ()=>({}),
    getFloatingProps: ()=>({}),
    slot: {}
});
y.displayName = "FloatingContext";
let $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
$.displayName = "PlacementContext";
function ye(e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>e ? typeof e == "string" ? {
            to: e
        } : e : null, [
        e
    ]);
}
function Fe() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(y).setReference;
}
function be() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(y).getReferenceProps;
}
function Te() {
    let { getFloatingProps: e, slot: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(y);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        for(var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++){
            n[_key] = arguments[_key];
        }
        return Object.assign({}, e(...n), {
            "data-anchor": t.anchor
        });
    }, [
        e,
        t
    ]);
}
function Re() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    e === !1 && (e = null), typeof e == "string" && (e = {
        to: e
    });
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>e, [
        JSON.stringify(e, (l, o)=>{
            var u;
            return (u = o == null ? void 0 : o.outerHTML) != null ? u : o;
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        t == null || t(n != null ? n : null);
    }, [
        t,
        n
    ]);
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(y);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            r.setFloating,
            e ? r.styles : {}
        ], [
        r.setFloating,
        e,
        r.styles
    ]);
}
let D = 4;
function Ae(param) {
    let { children: e, enabled: t = !0 } = param;
    let [n, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [l, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), [f, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    ce(f);
    let i = t && n !== null && f !== null, { to: F = "bottom", gap: E = 0, offset: A = 0, padding: c = 0, inner: h } = ge(n, f), [a, p = "center"] = F.split(" ");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        i && o(0);
    }, [
        i
    ]);
    let { refs: b, floatingStyles: S, context: g } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        open: i,
        placement: a === "selection" ? p === "center" ? "bottom" : "bottom-".concat(p) : p === "center" ? "".concat(a) : "".concat(a, "-").concat(p),
        strategy: "absolute",
        transform: !1,
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
                mainAxis: a === "selection" ? 0 : E,
                crossAxis: A
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                padding: c
            }),
            a !== "selection" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                padding: c
            }),
            a === "selection" && h ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inner"])({
                ...h,
                padding: c,
                overflowRef: u,
                offset: l,
                minItemsVisible: D,
                referenceOverflowThreshold: c,
                onFallbackChange (P) {
                    var L, N;
                    if (!P) return;
                    let d = g.elements.floating;
                    if (!d) return;
                    let M = parseFloat(getComputedStyle(d).scrollPaddingBottom) || 0, I = Math.min(D, d.childElementCount), W = 0, B = 0;
                    for (let m of (N = (L = g.elements.floating) == null ? void 0 : L.childNodes) != null ? N : [])if (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](m)) {
                        let x = m.offsetTop, k = x + m.clientHeight + M, H = d.scrollTop, U = H + d.clientHeight;
                        if (x >= H && k <= U) I--;
                        else {
                            B = Math.max(0, Math.min(k, U) - Math.max(x, H)), W = m.clientHeight;
                            break;
                        }
                    }
                    I >= 1 && o((m)=>{
                        let x = W * I - B + M;
                        return m >= x ? m : x;
                    });
                }
            }) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])({
                padding: c,
                apply (param) {
                    let { availableWidth: P, availableHeight: d, elements: M } = param;
                    Object.assign(M.floating.style, {
                        overflow: "auto",
                        maxWidth: "".concat(P, "px"),
                        maxHeight: "min(var(--anchor-max-height, 100vh), ".concat(d, "px)")
                    });
                }
            })
        ].filter(Boolean),
        whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"]
    }), [w = a, V = p] = g.placement.split("-");
    a === "selection" && (w = "selection");
    let G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            anchor: [
                w,
                V
            ].filter(Boolean).join(" ")
        }), [
        w,
        V
    ]), K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useInnerOffset"])(g, {
        overflowRef: u,
        onChange: o
    }), { getReferenceProps: Q, getFloatingProps: X } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useInteractions"])([
        K
    ]), Y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((P)=>{
        s(P), b.setFloating(P);
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]($.Provider, {
        value: r
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](y.Provider, {
        value: {
            setFloating: Y,
            setReference: b.setReference,
            styles: S,
            getReferenceProps: Q,
            getFloatingProps: X,
            slot: G
        }
    }, e));
}
function ce(e) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (!e) return;
        let t = new MutationObserver(()=>{
            let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
            if (isNaN(r)) return;
            let l = parseInt(n);
            isNaN(l) || r !== l && (e.style.maxHeight = "".concat(Math.ceil(r), "px"));
        });
        return t.observe(e, {
            attributes: !0,
            attributeFilter: [
                "style"
            ]
        }), ()=>{
            t.disconnect();
        };
    }, [
        e
    ]);
}
function ge(e, t) {
    var o, u, f;
    let n = O((o = e == null ? void 0 : e.gap) != null ? o : "var(--anchor-gap, 0)", t), r = O((u = e == null ? void 0 : e.offset) != null ? u : "var(--anchor-offset, 0)", t), l = O((f = e == null ? void 0 : e.padding) != null ? f : "var(--anchor-padding, 0)", t);
    return {
        ...e,
        gap: n,
        offset: r,
        padding: l
    };
}
function O(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])(), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((s, i)=>{
        if (s == null) return [
            n,
            null
        ];
        if (typeof s == "number") return [
            s,
            null
        ];
        if (typeof s == "string") {
            if (!i) return [
                n,
                null
            ];
            let F = J(s, i);
            return [
                F,
                (E)=>{
                    let A = q(s);
                    {
                        let c = A.map((h)=>window.getComputedStyle(i).getPropertyValue(h));
                        r.requestAnimationFrame(function h() {
                            r.nextFrame(h);
                            let a = !1;
                            for (let [b, S] of A.entries()){
                                let g = window.getComputedStyle(i).getPropertyValue(S);
                                if (c[b] !== g) {
                                    c[b] = g, a = !0;
                                    break;
                                }
                            }
                            if (!a) return;
                            let p = J(s, i);
                            F !== p && (E(p), F = p);
                        });
                    }
                    return r.dispose;
                }
            ];
        }
        return [
            n,
            null
        ];
    }), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>l(e, t)[0], [
        e,
        t
    ]), [u = o, f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        let [s, i] = l(e, t);
        if (f(s), !!i) return i(f);
    }, [
        e,
        t
    ]), u;
}
function q(e) {
    let t = /var\((.*)\)/.exec(e);
    if (t) {
        let n = t[1].indexOf(",");
        if (n === -1) return [
            t[1]
        ];
        let r = t[1].slice(0, n).trim(), l = t[1].slice(n + 1).trim();
        return l ? [
            r,
            ...q(l)
        ] : [
            r
        ];
    }
    return [];
}
function J(e, t) {
    let n = document.createElement("div");
    t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
    let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
    return t.removeChild(n), r;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/frozen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Frozen",
    ()=>f,
    "useFrozenData",
    ()=>l
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function f(param) {
    let { children: o, freeze: e } = param;
    let n = l(e, o);
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, n);
}
function l(o, e) {
    let [n, t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e);
    return !o && n !== e && t(e), o ? n : e;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/open-closed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpenClosedProvider",
    ()=>c,
    "ResetOpenClosedProvider",
    ()=>s,
    "State",
    ()=>i,
    "useOpenClosed",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
n.displayName = "OpenClosedContext";
var i = ((e)=>(e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(i || {});
function u() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(n);
}
function c(param) {
    let { value: o, children: t } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(n.Provider, {
        value: o
    }, t);
}
function s(param) {
    let { children: o } = param;
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(n.Provider, {
        value: null
    }, o);
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/document-ready.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onDocumentReady",
    ()=>t
]);
function t(n) {
    function e() {
        document.readyState !== "loading" && (n(), document.removeEventListener("DOMContentLoaded", e));
    }
    typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e), e());
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/active-element-history.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "history",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$document$2d$ready$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/document-ready.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
;
;
;
let n = [];
(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$document$2d$ready$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDocumentReady"])(()=>{
    function e(t) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](t.target) || t.target === document.body || n[0] === t.target) return;
        let r = t.target;
        r = r.closest(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusableSelector"]), n.unshift(r != null ? r : t.target), n = n.filter((o)=>o != null && o.isConnected), n.splice(10);
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    });
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/calculate-active-index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Focus",
    ()=>c,
    "calculateActiveIndex",
    ()=>f
]);
function u(l) {
    throw new Error("Unexpected object: " + l);
}
var c = ((i)=>(i[i.First = 0] = "First", i[i.Previous = 1] = "Previous", i[i.Next = 2] = "Next", i[i.Last = 3] = "Last", i[i.Specific = 4] = "Specific", i[i.Nothing = 5] = "Nothing", i))(c || {});
function f(l, n) {
    let t = n.resolveItems();
    if (t.length <= 0) return null;
    let r = n.resolveActiveIndex(), s = r != null ? r : -1;
    switch(l.focus){
        case 0:
            {
                for(let e = 0; e < t.length; ++e)if (!n.resolveDisabled(t[e], e, t)) return e;
                return r;
            }
        case 1:
            {
                s === -1 && (s = t.length);
                for(let e = s - 1; e >= 0; --e)if (!n.resolveDisabled(t[e], e, t)) return e;
                return r;
            }
        case 2:
            {
                for(let e = s + 1; e < t.length; ++e)if (!n.resolveDisabled(t[e], e, t)) return e;
                return r;
            }
        case 3:
            {
                for(let e = t.length - 1; e >= 0; --e)if (!n.resolveDisabled(t[e], e, t)) return e;
                return r;
            }
        case 4:
            {
                for(let e = 0; e < t.length; ++e)if (n.resolveId(t[e], e, t) === l.id) return e;
                return r;
            }
        case 5:
            return null;
        default:
            u(l);
    }
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/mouse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MouseButton",
    ()=>g
]);
var g = ((f)=>(f[f.Left = 0] = "Left", f[f.Right = 2] = "Right", f))(g || {});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/combobox/combobox-machine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionTypes",
    ()=>_,
    "ActivationTrigger",
    ()=>F,
    "ComboboxMachine",
    ()=>O,
    "ComboboxState",
    ()=>C,
    "ValueMode",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/calculate-active-index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var S = Object.defineProperty;
var I = (t, i, e)=>i in t ? S(t, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[i] = e;
var c = (t, i, e)=>(I(t, typeof i != "symbol" ? i + "" : i, e), e);
;
;
;
;
;
var C = ((e)=>(e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(C || {}), M = ((e)=>(e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(M || {}), F = ((n)=>(n[n.Pointer = 0] = "Pointer", n[n.Focus = 1] = "Focus", n[n.Other = 2] = "Other", n))(F || {}), _ = ((l)=>(l[l.OpenCombobox = 0] = "OpenCombobox", l[l.CloseCombobox = 1] = "CloseCombobox", l[l.GoToOption = 2] = "GoToOption", l[l.SetTyping = 3] = "SetTyping", l[l.RegisterOption = 4] = "RegisterOption", l[l.UnregisterOption = 5] = "UnregisterOption", l[l.DefaultToFirstOption = 6] = "DefaultToFirstOption", l[l.SetActivationTrigger = 7] = "SetActivationTrigger", l[l.UpdateVirtualConfiguration = 8] = "UpdateVirtualConfiguration", l[l.SetInputElement = 9] = "SetInputElement", l[l.SetButtonElement = 10] = "SetButtonElement", l[l.SetOptionsElement = 11] = "SetOptionsElement", l))(_ || {});
function T(t) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (e)=>e;
    let e = t.activeOptionIndex !== null ? t.options[t.activeOptionIndex] : null, n = i(t.options.slice()), o = n.length > 0 && n[0].dataRef.current.order !== null ? n.sort((u, a)=>u.dataRef.current.order - a.dataRef.current.order) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(n, (u)=>u.dataRef.current.domRef.current), r = e ? o.indexOf(e) : null;
    return r === -1 && (r = null), {
        options: o,
        activeOptionIndex: r
    };
}
let D = {
    [1] (t) {
        var i;
        return (i = t.dataRef.current) != null && i.disabled || t.comboboxState === 1 ? t : {
            ...t,
            activeOptionIndex: null,
            comboboxState: 1,
            isTyping: !1,
            activationTrigger: 2,
            __demoMode: !1
        };
    },
    [0] (t) {
        var i, e;
        if ((i = t.dataRef.current) != null && i.disabled || t.comboboxState === 0) return t;
        if ((e = t.dataRef.current) != null && e.value) {
            let n = t.dataRef.current.calculateIndex(t.dataRef.current.value);
            if (n !== -1) return {
                ...t,
                activeOptionIndex: n,
                comboboxState: 0,
                __demoMode: !1
            };
        }
        return {
            ...t,
            comboboxState: 0,
            __demoMode: !1
        };
    },
    [3] (t, i) {
        return t.isTyping === i.isTyping ? t : {
            ...t,
            isTyping: i.isTyping
        };
    },
    [2] (t, i) {
        var r, u, a, d;
        if ((r = t.dataRef.current) != null && r.disabled || t.optionsElement && !((u = t.dataRef.current) != null && u.optionsPropsRef.current.static) && t.comboboxState === 1) return t;
        if (t.virtual) {
            let { options: p, disabled: s } = t.virtual, b = i.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific ? i.idx : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(i, {
                resolveItems: ()=>p,
                resolveActiveIndex: ()=>{
                    var v, m;
                    return (m = (v = t.activeOptionIndex) != null ? v : p.findIndex((y)=>!s(y))) != null ? m : null;
                },
                resolveDisabled: s,
                resolveId () {
                    throw new Error("Function not implemented.");
                }
            }), l = (a = i.trigger) != null ? a : 2;
            return t.activeOptionIndex === b && t.activationTrigger === l ? t : {
                ...t,
                activeOptionIndex: b,
                activationTrigger: l,
                isTyping: !1,
                __demoMode: !1
            };
        }
        let e = T(t);
        if (e.activeOptionIndex === null) {
            let p = e.options.findIndex((s)=>!s.dataRef.current.disabled);
            p !== -1 && (e.activeOptionIndex = p);
        }
        let n = i.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific ? i.idx : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(i, {
            resolveItems: ()=>e.options,
            resolveActiveIndex: ()=>e.activeOptionIndex,
            resolveId: (p)=>p.id,
            resolveDisabled: (p)=>p.dataRef.current.disabled
        }), o = (d = i.trigger) != null ? d : 2;
        return t.activeOptionIndex === n && t.activationTrigger === o ? t : {
            ...t,
            ...e,
            isTyping: !1,
            activeOptionIndex: n,
            activationTrigger: o,
            __demoMode: !1
        };
    },
    [4]: (t, i)=>{
        var r, u, a, d;
        if ((r = t.dataRef.current) != null && r.virtual) return {
            ...t,
            options: [
                ...t.options,
                i.payload
            ]
        };
        let e = i.payload, n = T(t, (p)=>(p.push(e), p));
        t.activeOptionIndex === null && (a = (u = t.dataRef.current).isSelected) != null && a.call(u, i.payload.dataRef.current.value) && (n.activeOptionIndex = n.options.indexOf(e));
        let o = {
            ...t,
            ...n,
            activationTrigger: 2
        };
        return (d = t.dataRef.current) != null && d.__demoMode && t.dataRef.current.value === void 0 && (o.activeOptionIndex = 0), o;
    },
    [5]: (t, i)=>{
        var n;
        if ((n = t.dataRef.current) != null && n.virtual) return {
            ...t,
            options: t.options.filter((o)=>o.id !== i.id)
        };
        let e = T(t, (o)=>{
            let r = o.findIndex((u)=>u.id === i.id);
            return r !== -1 && o.splice(r, 1), o;
        });
        return {
            ...t,
            ...e,
            activationTrigger: 2
        };
    },
    [6]: (t, i)=>t.defaultToFirstOption === i.value ? t : {
            ...t,
            defaultToFirstOption: i.value
        },
    [7]: (t, i)=>t.activationTrigger === i.trigger ? t : {
            ...t,
            activationTrigger: i.trigger
        },
    [8]: (t, i)=>{
        var n, o;
        if (t.virtual === null) return {
            ...t,
            virtual: {
                options: i.options,
                disabled: (n = i.disabled) != null ? n : ()=>!1
            }
        };
        if (t.virtual.options === i.options && t.virtual.disabled === i.disabled) return t;
        let e = t.activeOptionIndex;
        if (t.activeOptionIndex !== null) {
            let r = i.options.indexOf(t.virtual.options[t.activeOptionIndex]);
            r !== -1 ? e = r : e = null;
        }
        return {
            ...t,
            activeOptionIndex: e,
            virtual: {
                options: i.options,
                disabled: (o = i.disabled) != null ? o : ()=>!1
            }
        };
    },
    [9]: (t, i)=>t.inputElement === i.element ? t : {
            ...t,
            inputElement: i.element
        },
    [10]: (t, i)=>t.buttonElement === i.element ? t : {
            ...t,
            buttonElement: i.element
        },
    [11]: (t, i)=>t.optionsElement === i.element ? t : {
            ...t,
            optionsElement: i.element
        }
};
class O extends __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Machine"] {
    static new(param) {
        let { id: e, virtual: n = null, __demoMode: o = !1 } = param;
        var r;
        return new O({
            id: e,
            dataRef: {
                current: {}
            },
            comboboxState: o ? 0 : 1,
            isTyping: !1,
            options: [],
            virtual: n ? {
                options: n.options,
                disabled: (r = n.disabled) != null ? r : ()=>!1
            } : null,
            activeOptionIndex: null,
            activationTrigger: 2,
            inputElement: null,
            buttonElement: null,
            optionsElement: null,
            __demoMode: o
        });
    }
    reduce(e, n) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(n.type, D, e, n);
    }
    constructor(e){
        super(e);
        c(this, "actions", {
            onChange: (e)=>{
                let { onChange: n, compare: o, mode: r, value: u } = this.state.dataRef.current;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(r, {
                    [0]: ()=>n == null ? void 0 : n(e),
                    [1]: ()=>{
                        let a = u.slice(), d = a.findIndex((p)=>o(p, e));
                        return d === -1 ? a.push(e) : a.splice(d, 1), n == null ? void 0 : n(a);
                    }
                });
            },
            registerOption: (e, n)=>(this.send({
                    type: 4,
                    payload: {
                        id: e,
                        dataRef: n
                    }
                }), ()=>{
                    this.state.activeOptionIndex === this.state.dataRef.current.calculateIndex(n.current.value) && this.send({
                        type: 6,
                        value: !0
                    }), this.send({
                        type: 5,
                        id: e
                    });
                }),
            goToOption: (e, n)=>(this.send({
                    type: 6,
                    value: !1
                }), this.send({
                    type: 2,
                    ...e,
                    trigger: n
                })),
            setIsTyping: (e)=>{
                this.send({
                    type: 3,
                    isTyping: e
                });
            },
            closeCombobox: ()=>{
                var e, n;
                this.send({
                    type: 1
                }), this.send({
                    type: 6,
                    value: !1
                }), (n = (e = this.state.dataRef.current).onClose) == null || n.call(e);
            },
            openCombobox: ()=>{
                this.send({
                    type: 0
                }), this.send({
                    type: 6,
                    value: !0
                });
            },
            setActivationTrigger: (e)=>{
                this.send({
                    type: 7,
                    trigger: e
                });
            },
            selectActiveOption: ()=>{
                let e = this.selectors.activeOptionIndex(this.state);
                if (e !== null) {
                    if (this.actions.setIsTyping(!1), this.state.virtual) this.actions.onChange(this.state.virtual.options[e]);
                    else {
                        let { dataRef: n } = this.state.options[e];
                        this.actions.onChange(n.current.value);
                    }
                    this.actions.goToOption({
                        focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific,
                        idx: e
                    });
                }
            },
            setInputElement: (e)=>{
                this.send({
                    type: 9,
                    element: e
                });
            },
            setButtonElement: (e)=>{
                this.send({
                    type: 10,
                    element: e
                });
            },
            setOptionsElement: (e)=>{
                this.send({
                    type: 11,
                    element: e
                });
            }
        });
        c(this, "selectors", {
            activeDescendantId: (e)=>{
                var o, r;
                let n = this.selectors.activeOptionIndex(e);
                if (n !== null) return e.virtual ? (r = e.options.find((u)=>!u.dataRef.current.disabled && e.dataRef.current.compare(u.dataRef.current.value, e.virtual.options[n]))) == null ? void 0 : r.id : (o = e.options[n]) == null ? void 0 : o.id;
            },
            activeOptionIndex: (e)=>{
                if (e.defaultToFirstOption && e.activeOptionIndex === null && (e.virtual ? e.virtual.options.length > 0 : e.options.length > 0)) {
                    if (e.virtual) {
                        let { options: o, disabled: r } = e.virtual, u = o.findIndex((a)=>{
                            var d;
                            return !((d = r == null ? void 0 : r(a)) != null && d);
                        });
                        if (u !== -1) return u;
                    }
                    let n = e.options.findIndex((o)=>!o.dataRef.current.disabled);
                    if (n !== -1) return n;
                }
                return e.activeOptionIndex;
            },
            activeOption: (e)=>{
                var o, r;
                let n = this.selectors.activeOptionIndex(e);
                return n === null ? null : e.virtual ? e.virtual.options[n != null ? n : 0] : (r = (o = e.options[n]) == null ? void 0 : o.dataRef.current.value) != null ? r : null;
            },
            isActive: (e, n, o)=>{
                var u;
                let r = this.selectors.activeOptionIndex(e);
                return r === null ? !1 : e.virtual ? r === e.dataRef.current.calculateIndex(n) : ((u = e.options[r]) == null ? void 0 : u.id) === o;
            },
            shouldScrollIntoView: (e, n, o)=>!(e.virtual || e.__demoMode || e.comboboxState !== 0 || e.activationTrigger === 0 || !this.selectors.isActive(e, n, o))
        });
        {
            let n = this.state.id, o = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackMachines"].get(null);
            this.disposables.add(o.on(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].Push, (r)=>{
                !o.selectors.isTop(r, n) && this.state.comboboxState === 0 && this.actions.closeCombobox();
            })), this.on(0, ()=>o.actions.push(n)), this.on(1, ()=>o.actions.pop(n));
        }
    }
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/combobox/combobox-machine-glue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComboboxContext",
    ()=>u,
    "useComboboxMachine",
    ()=>b,
    "useComboboxMachineContext",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-unmount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/combobox/combobox-machine.js [app-client] (ecmascript)");
;
;
;
const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function p(n) {
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(u);
    if (o === null) {
        let e = new Error("<".concat(n, " /> is missing a parent <Combobox /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(e, b), e;
    }
    return o;
}
function b(param) {
    let { id: n, virtual: o = null, __demoMode: e = !1 } = param;
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxMachine"].new({
            id: n,
            virtual: o,
            __demoMode: e
        }), []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnUnmount"])(()=>t.dispose()), t;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/combobox/combobox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Combobox",
    ()=>wt,
    "ComboboxButton",
    ()=>Lo,
    "ComboboxInput",
    ()=>Vo,
    "ComboboxLabel",
    ()=>wo,
    "ComboboxOption",
    ()=>No,
    "ComboboxOptions",
    ()=>Bo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@tanstack/react-virtual/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$by$2d$comparator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-by-comparator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-controllable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-default-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$element$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-element-size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$inert$2d$others$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-inert-others.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-disappear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-outside-click.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-quick-release.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$refocusable$2d$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tracked$2d$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tree$2d$walker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tree-walker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$watch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-watch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/floating.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/form-fields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$frozen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/frozen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/open-closed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/react-glue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$active$2d$element$2d$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/active-element-history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/bugs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/calculate-active-index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$mouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/mouse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/portal/portal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/combobox/combobox-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/combobox/combobox-machine-glue.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let de = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
de.displayName = "ComboboxDataContext";
function ae(C) {
    let h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(de);
    if (h === null) {
        let e = new Error("<".concat(C, " /> is missing a parent <Combobox /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(e, ae), e;
    }
    return h;
}
let Me = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function vo(C) {
    let h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComboboxMachineContext"])("VirtualProvider"), e = ae("VirtualProvider"), { options: o } = e.virtual, A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(h, (a)=>a.optionsElement), [R, v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let a = A;
        if (!a) return [
            0,
            0
        ];
        let u = window.getComputedStyle(a);
        return [
            parseFloat(u.paddingBlockStart || u.paddingTop),
            parseFloat(u.paddingBlockEnd || u.paddingBottom)
        ];
    }, [
        A
    ]), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useVirtualizer"])({
        enabled: o.length !== 0,
        scrollPaddingStart: R,
        scrollPaddingEnd: v,
        count: o.length,
        estimateSize () {
            return 40;
        },
        getScrollElement () {
            return h.state.optionsElement;
        },
        overscan: 12
    }), [I, m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        m((a)=>a + 1);
    }, [
        o
    ]);
    let g = T.getVirtualItems(), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(h, (a)=>a.activationTrigger === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(h, h.selectors.activeOptionIndex);
    return g.length === 0 ? null : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Me.Provider, {
        value: T
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: {
            position: "relative",
            width: "100%",
            height: "".concat(T.getTotalSize(), "px")
        },
        ref: (a)=>{
            a && (n || f !== null && o.length > f && T.scrollToIndex(f));
        }
    }, g.map((a)=>{
        var u;
        return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            key: a.key
        }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement((u = C.children) == null ? void 0 : u.call(C, {
            ...C.slot,
            option: o[a.index]
        }), {
            key: "".concat(I, "-").concat(a.key),
            "data-index": a.index,
            "aria-setsize": o.length,
            "aria-posinset": a.index + 1,
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                transform: "translateY(".concat(a.start, "px)"),
                overflowAnchor: "none"
            }
        }));
    })));
}
let Po = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
function Eo(C, h) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { value: A, defaultValue: R, onChange: v, form: T, name: I, by: m, invalid: g = !1, disabled: n = o || !1, onClose: f, __demoMode: a = !1, multiple: u = !1, immediate: S = !1, virtual: d = null, nullable: k, ...W } = C, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultValue"])(R), [x = u ? [] : void 0, P] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllable"])(A, v, y), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComboboxMachine"])({
        id: e,
        virtual: d,
        __demoMode: a
    }), G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        static: !1,
        hold: !1
    }), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$by$2d$comparator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByComparator"])(m), z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((s)=>d ? m === null ? d.options.indexOf(s) : d.options.findIndex((c)=>_(c, s)) : b.state.options.findIndex((c)=>_(c.dataRef.current.value, s))), U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(r.mode, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Multi]: ()=>x.some((c)=>_(c, s)),
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single]: ()=>_(x, s)
        }), [
        x
    ]), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(b, (s)=>s.virtual), j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>f == null ? void 0 : f()), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            __demoMode: a,
            immediate: S,
            optionsPropsRef: G,
            value: x,
            defaultValue: y,
            disabled: n,
            invalid: g,
            mode: u ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Multi : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single,
            virtual: d ? w : null,
            onChange: P,
            isSelected: U,
            calculateIndex: z,
            compare: _,
            onClose: j
        }), [
        x,
        y,
        n,
        g,
        u,
        P,
        U,
        a,
        b,
        d,
        w,
        j
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        var s;
        d && b.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].UpdateVirtualConfiguration,
            options: d.options,
            disabled: (s = d.disabled) != null ? s : null
        });
    }, [
        d,
        d == null ? void 0 : d.options,
        d == null ? void 0 : d.disabled
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        b.state.dataRef.current = r;
    }, [
        r
    ]);
    let [M, X, i, H] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(b, (s)=>[
            s.comboboxState,
            s.buttonElement,
            s.inputElement,
            s.optionsElement
        ]), q = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackMachines"].get(null), Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s)=>q.selectors.isTop(s, e), [
        q,
        e
    ]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutsideClick"])(Q, [
        X,
        i,
        H
    ], ()=>b.actions.closeCombobox());
    let Y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(b, b.selectors.activeOptionIndex), $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(b, b.selectors.activeOption), be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: M === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open,
            disabled: n,
            invalid: g,
            activeIndex: Y,
            activeOption: $,
            value: x
        }), [
        r,
        n,
        x,
        g,
        $,
        M
    ]), [Z, te] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])(), t = h === null ? {} : {
        ref: h
    }, B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (y !== void 0) return P == null ? void 0 : P(y);
    }, [
        P,
        y
    ]), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(te, {
        value: Z,
        props: {
            htmlFor: i == null ? void 0 : i.id
        },
        slot: {
            open: M === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open,
            disabled: n
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(de.Provider, {
        value: r
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxContext"].Provider, {
        value: b
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenClosedProvider"], {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(M, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open,
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Closed]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Closed
        })
    }, I != null && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], {
        disabled: n,
        data: x != null ? {
            [I]: x
        } : {},
        form: T,
        onReset: B
    }), E({
        ourProps: t,
        theirProps: W,
        slot: be,
        defaultTag: Po,
        name: "Combobox"
    }))))));
}
let Oo = "input";
function ho(C, h) {
    var Z, te;
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComboboxMachineContext"])("Combobox.Input"), o = ae("Combobox.Input"), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProvidedId"])(), { id: v = R || "headlessui-combobox-input-".concat(A), onChange: T, displayValue: I, disabled: m = o.disabled || !1, autoFocus: g = !1, type: n = "text", ...f } = C, [a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(e, (t)=>[
            t.inputElement
        ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(u, h, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingReference"])(), e.actions.setInputElement), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(a), [k, W] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(e, (t)=>[
            t.comboboxState,
            t.isTyping
        ]), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])(), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        e.actions.onChange(null), e.state.optionsElement && (e.state.optionsElement.scrollTop = 0), e.actions.goToOption({
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
        });
    }), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        var t;
        return typeof I == "function" && o.value !== void 0 ? (t = I(o.value)) != null ? t : "" : typeof o.value == "string" ? o.value : "";
    }, [
        o.value,
        I
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$watch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])((param, param1)=>{
        let [t, B] = param, [E, s] = param1;
        if (e.state.isTyping) return;
        let c = u.current;
        c && ((s === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open && B === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Closed || t !== E) && (c.value = t), requestAnimationFrame(()=>{
            if (e.state.isTyping || !c || (d == null ? void 0 : d.activeElement) !== c) return;
            let { selectionStart: p, selectionEnd: ne } = c;
            Math.abs((ne != null ? ne : 0) - (p != null ? p : 0)) === 0 && p === 0 && c.setSelectionRange(c.value.length, c.value.length);
        }));
    }, [
        P,
        k,
        d,
        W
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$watch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])((param, param1)=>{
        let [t] = param, [B] = param1;
        if (t === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open && B === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Closed) {
            if (e.state.isTyping) return;
            let E = u.current;
            if (!E) return;
            let s = E.value, { selectionStart: c, selectionEnd: p, selectionDirection: ne } = E;
            E.value = "", E.value = s, ne !== null ? E.setSelectionRange(c, p, ne) : E.setSelectionRange(c, p);
        }
    }, [
        k
    ]);
    let b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        b.current = !0;
    }), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        y.nextFrame(()=>{
            b.current = !1;
        });
    }), z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        switch(e.actions.setIsTyping(!0), t.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                if (e.state.comboboxState !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open || b.current) return;
                if (t.preventDefault(), t.stopPropagation(), e.selectors.activeOptionIndex(e.state) === null) {
                    e.actions.closeCombobox();
                    return;
                }
                e.actions.selectActiveOption(), o.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single && e.actions.closeCombobox();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowDown:
                return t.preventDefault(), t.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(e.state.comboboxState, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open]: ()=>e.actions.goToOption({
                            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next
                        }),
                    [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Closed]: ()=>e.actions.openCombobox()
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowUp:
                return t.preventDefault(), t.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(e.state.comboboxState, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open]: ()=>e.actions.goToOption({
                            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous
                        }),
                    [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Closed]: ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>e.actions.openCombobox()), o.value || e.actions.goToOption({
                            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last
                        });
                    }
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Home:
                if (t.shiftKey) break;
                return t.preventDefault(), t.stopPropagation(), e.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageUp:
                return t.preventDefault(), t.stopPropagation(), e.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].End:
                if (t.shiftKey) break;
                return t.preventDefault(), t.stopPropagation(), e.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageDown:
                return t.preventDefault(), t.stopPropagation(), e.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Escape:
                return e.state.comboboxState !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open ? void 0 : (t.preventDefault(), e.state.optionsElement && !o.optionsPropsRef.current.static && t.stopPropagation(), o.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single && o.value === null && x(), e.actions.closeCombobox());
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Tab:
                if (e.state.comboboxState !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open) return;
                o.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single && e.state.activationTrigger !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Focus && e.actions.selectActiveOption(), e.actions.closeCombobox();
                break;
        }
    }), U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        T == null || T(t), o.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single && t.target.value === "" && x(), e.actions.openCombobox();
    }), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        var E, s, c;
        let B = (E = t.relatedTarget) != null ? E : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$active$2d$element$2d$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["history"].find((p)=>p !== t.currentTarget);
        if (!((s = e.state.optionsElement) != null && s.contains(B)) && !((c = e.state.buttonElement) != null && c.contains(B)) && e.state.comboboxState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open) return t.preventDefault(), o.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single && o.value === null && x(), e.actions.closeCombobox();
    }), j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        var E, s, c;
        let B = (E = t.relatedTarget) != null ? E : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$active$2d$element$2d$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["history"].find((p)=>p !== t.currentTarget);
        (s = e.state.buttonElement) != null && s.contains(B) || (c = e.state.optionsElement) != null && c.contains(B) || o.disabled || o.immediate && e.state.comboboxState !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open && y.microTask(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>e.actions.openCombobox()), e.actions.setActivationTrigger(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Focus);
        });
    }), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])(), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescribedBy"])(), { isFocused: X, focusProps: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: g
    }), { isHovered: H, hoverProps: q } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: m
    }), Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(e, (t)=>t.optionsElement), Y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: k === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open,
            disabled: m,
            invalid: o.invalid,
            hover: H,
            focus: X,
            autofocus: g
        }), [
        o,
        H,
        X,
        g,
        m,
        o.invalid
    ]), $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: S,
        id: v,
        role: "combobox",
        type: n,
        "aria-controls": Q == null ? void 0 : Q.id,
        "aria-expanded": k === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open,
        "aria-activedescendant": (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(e, e.selectors.activeDescendantId),
        "aria-labelledby": r,
        "aria-describedby": M,
        "aria-autocomplete": "list",
        defaultValue: (te = (Z = C.defaultValue) != null ? Z : o.defaultValue !== void 0 ? I == null ? void 0 : I(o.defaultValue) : null) != null ? te : o.defaultValue,
        disabled: m || void 0,
        autoFocus: g,
        onCompositionStart: G,
        onCompositionEnd: _,
        onKeyDown: z,
        onChange: U,
        onFocus: j,
        onBlur: w
    }, i, q);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: $,
        theirProps: f,
        slot: Y,
        defaultTag: Oo,
        name: "Combobox.Input"
    });
}
let Ao = "button";
function Io(C, h) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComboboxMachineContext"])("Combobox.Button"), o = ae("Combobox.Button"), [A, R] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(h, R, e.actions.setButtonElement), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: I = "headlessui-combobox-button-".concat(T), disabled: m = o.disabled || !1, autoFocus: g = !1, ...n } = C, [f, a, u] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(e, (r)=>[
            r.comboboxState,
            r.inputElement,
            r.optionsElement
        ]), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$refocusable$2d$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefocusableInput"])(a), d = f === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickRelease"])(d, {
        trigger: A,
        action: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((r)=>{
            if (A != null && A.contains(r.target)) return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Ignore;
            if (a != null && a.contains(r.target)) return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Ignore;
            let M = r.target.closest('[role="option"]:not([data-disabled])');
            return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](M) ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Select(M) : u != null && u.contains(r.target) ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Ignore : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Close;
        }, [
            A,
            a,
            u
        ]),
        close: e.actions.closeCombobox,
        select: e.actions.selectActiveOption
    });
    let k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>{
        switch(r.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                r.preventDefault(), r.stopPropagation(), e.state.comboboxState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Closed && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>e.actions.openCombobox()), S();
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowDown:
                r.preventDefault(), r.stopPropagation(), e.state.comboboxState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Closed && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>e.actions.openCombobox()), e.state.dataRef.current.value || e.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First
                })), S();
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowUp:
                r.preventDefault(), r.stopPropagation(), e.state.comboboxState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Closed && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>e.actions.openCombobox()), e.state.dataRef.current.value || e.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last
                })), S();
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Escape:
                if (e.state.comboboxState !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open) return;
                r.preventDefault(), e.state.optionsElement && !o.optionsPropsRef.current.static && r.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>e.actions.closeCombobox()), S();
                return;
            default:
                return;
        }
    }), W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>{
        r.preventDefault(), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(r.currentTarget) && (r.button === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$mouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MouseButton"].Left && (e.state.comboboxState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open ? e.actions.closeCombobox() : e.actions.openCombobox()), S());
    }), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])([
        I
    ]), { isFocusVisible: x, focusProps: P } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: g
    }), { isHovered: b, hoverProps: G } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: m
    }), { pressed: _, pressProps: z } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: m
    }), U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: f === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open,
            active: _ || f === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open,
            disabled: m,
            invalid: o.invalid,
            value: o.value,
            hover: b,
            focus: x
        }), [
        o,
        b,
        x,
        _,
        m,
        f
    ]), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: v,
        id: I,
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveButtonType"])(C, A),
        tabIndex: -1,
        "aria-haspopup": "listbox",
        "aria-controls": u == null ? void 0 : u.id,
        "aria-expanded": f === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open,
        "aria-labelledby": y,
        disabled: m || void 0,
        autoFocus: g,
        onPointerDown: W,
        onKeyDown: k
    }, P, G, z);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: w,
        theirProps: n,
        slot: U,
        defaultTag: Ao,
        name: "Combobox.Button"
    });
}
let Ro = "div", Do = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].Static;
function _o(C, h) {
    var E, s, c;
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: o = "headlessui-combobox-options-".concat(e), hold: A = !1, anchor: R, portal: v = !1, modal: T = !0, transition: I = !1, ...m } = C, g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComboboxMachineContext"])("Combobox.Options"), n = ae("Combobox.Options"), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedAnchor"])(R);
    f && (v = !0);
    let [a, u] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingPanel"])(f), [S, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingPanelProps"])(), W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(h, f ? a : null, g.actions.setOptionsElement, d), [y, x, P, b, G] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(g, (p)=>[
            p.comboboxState,
            p.inputElement,
            p.buttonElement,
            p.optionsElement,
            p.activationTrigger
        ]), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(x || P), z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(b), U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])(), [w, j] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])(I, S, U !== null ? (U & __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open : y === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnDisappear"])(w, x, g.actions.closeCombobox);
    let r = n.__demoMode ? !1 : T && y === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollLock"])(r, z);
    let M = n.__demoMode ? !1 : T && y === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$inert$2d$others$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInertOthers"])(M, {
        allowed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>[
                x,
                P,
                b
            ], [
            x,
            P,
            b
        ])
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        var p;
        n.optionsPropsRef.current.static = (p = C.static) != null ? p : !1;
    }, [
        n.optionsPropsRef,
        C.static
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        n.optionsPropsRef.current.hold = A;
    }, [
        n.optionsPropsRef,
        A
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tree$2d$walker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTreeWalker"])(y === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open, {
        container: b,
        accept (p) {
            return p.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : p.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
        },
        walk (p) {
            p.setAttribute("role", "none");
        }
    });
    let X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])([
        P == null ? void 0 : P.id
    ]), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: y === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Open,
            option: void 0
        }), [
        y
    ]), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        g.actions.setActivationTrigger(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer);
    }), q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((p)=>{
        p.preventDefault(), g.actions.setActivationTrigger(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer);
    }), Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(f ? k() : {}, {
        "aria-labelledby": X,
        role: "listbox",
        "aria-multiselectable": n.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Multi ? !0 : void 0,
        id: o,
        ref: W,
        style: {
            ...m.style,
            ...u,
            "--input-width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$element$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementSize"])(x, !0).width,
            "--button-width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$element$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementSize"])(P, !0).width
        },
        onWheel: G === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer ? void 0 : H,
        onMouseDown: q,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionDataAttributes"])(j)
    }), Y = w && y === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComboboxState"].Closed, $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$frozen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFrozenData"])(Y, (E = n.virtual) == null ? void 0 : E.options), be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$frozen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFrozenData"])(Y, n.value), Z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((p)=>n.compare(be, p)), te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!n.virtual) return n;
        if ($ === void 0) throw new Error("Missing `options` in virtual mode");
        return $ !== n.virtual.options ? {
            ...n,
            virtual: {
                ...n.virtual,
                options: $
            }
        } : n;
    }, [
        n,
        $,
        (s = n.virtual) == null ? void 0 : s.options
    ]);
    n.virtual && Object.assign(m, {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(de.Provider, {
            value: te
        }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(vo, {
            slot: i
        }, m.children))
    });
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])(), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>n.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Multi ? n : {
            ...n,
            isSelected: Z
        }, [
        n,
        Z
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        enabled: v ? C.static || w : !1,
        ownerDocument: _
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(de.Provider, {
        value: B
    }, t({
        ourProps: Q,
        theirProps: {
            ...m,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$frozen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frozen"], {
                freeze: Y
            }, typeof m.children == "function" ? (c = m.children) == null ? void 0 : c.call(m, i) : m.children)
        },
        slot: i,
        defaultTag: Ro,
        features: Do,
        visible: w,
        name: "Combobox.Options"
    })));
}
let Fo = "div";
function So(C, h) {
    var r, M, X;
    let e = ae("Combobox.Option"), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComboboxMachineContext"])("Combobox.Option"), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: R = "headlessui-combobox-option-".concat(A), value: v, disabled: T = (X = (M = (r = e.virtual) == null ? void 0 : r.disabled) == null ? void 0 : M.call(r, v)) != null ? X : !1, order: I = null, ...m } = C, [g] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, (i)=>[
            i.inputElement
        ]), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$refocusable$2d$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefocusableInput"])(g), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((i)=>o.selectors.isActive(i, v, R), [
        v,
        R
    ])), a = e.isSelected(v), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])({
        disabled: T,
        value: v,
        domRef: u,
        order: I
    }), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Me), k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(h, u, d ? d.measureElement : null), W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        o.actions.setIsTyping(!1), o.actions.onChange(v);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>o.actions.registerOption(R, S), [
        S,
        R
    ]);
    let y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((i)=>o.selectors.shouldScrollIntoView(i, v, R), [
        v,
        R
    ]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (y) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])().requestAnimationFrame(()=>{
            var i, H;
            (H = (i = u.current) == null ? void 0 : i.scrollIntoView) == null || H.call(i, {
                block: "nearest"
            });
        });
    }, [
        y,
        u
    ]);
    let x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        i.preventDefault(), i.button === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$mouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MouseButton"].Left && (T || (W(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || requestAnimationFrame(()=>n()), e.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single && o.actions.closeCombobox()));
    }), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        if (T) return o.actions.goToOption({
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
        });
        let i = e.calculateIndex(v);
        o.actions.goToOption({
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific,
            idx: i
        });
    }), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tracked$2d$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrackedPointer"])(), G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>b.update(i)), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        if (!b.wasMoved(i) || T || f && o.state.activationTrigger === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer) return;
        let H = e.calculateIndex(v);
        o.actions.goToOption({
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific,
            idx: H
        }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer);
    }), z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        b.wasMoved(i) && (T || f && (e.optionsPropsRef.current.hold || o.state.activationTrigger === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer && o.actions.goToOption({
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
        })));
    }), U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            active: f,
            focus: f,
            selected: a,
            disabled: T
        }), [
        f,
        a,
        T
    ]), w = {
        id: R,
        ref: k,
        role: "option",
        tabIndex: T === !0 ? void 0 : -1,
        "aria-disabled": T === !0 ? !0 : void 0,
        "aria-selected": a,
        disabled: void 0,
        onMouseDown: x,
        onFocus: P,
        onPointerEnter: G,
        onMouseEnter: G,
        onPointerMove: _,
        onMouseMove: _,
        onPointerLeave: z,
        onMouseLeave: z
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: w,
        theirProps: m,
        slot: U,
        defaultTag: Fo,
        name: "Combobox.Option"
    });
}
let Mo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Eo), Lo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Io), Vo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(ho), wo = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], Bo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(_o), No = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(So), wt = Object.assign(Mo, {
    Input: Vo,
    Button: Lo,
    Label: wo,
    Options: Bo,
    Option: No
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/data-interactive/data-interactive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataInteractive",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
let E = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
function d(o, n) {
    let { ...s } = o, e = !1, { isFocusVisible: t, focusProps: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])(), { isHovered: r, hoverProps: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: e
    }), { pressed: a, pressProps: T } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: e
    }), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: n
    }, p, i, T), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            hover: r,
            focus: t,
            active: a
        }), [
        r,
        t,
        a
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: l,
        theirProps: s,
        slot: c,
        defaultTag: E,
        name: "DataInteractive"
    });
}
let x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(d);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-escape.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEscape",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event-listener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$top$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js [app-client] (ecmascript)");
;
;
;
function a(o) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : typeof document != "undefined" ? document.defaultView : null, t = arguments.length > 2 ? arguments[2] : void 0;
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$top$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsTopLayer"])(o, "escape");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventListener"])(r, "keydown", (e)=>{
        n && (e.defaultPrevented || e.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Escape && t(e));
    });
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsTouchDevice",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
;
;
function f() {
    var t;
    let [e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((t = e == null ? void 0 : e.matches) != null ? t : !1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (!e) return;
        function n(r) {
            c(r.matches);
        }
        return e.addEventListener("change", n), ()=>e.removeEventListener("change", n);
    }, [
        e
    ]), o;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-root-containers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainTreeProvider",
    ()=>P,
    "useMainTreeNode",
    ()=>y,
    "useRootContainers",
    ()=>H
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/hidden.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-owner.js [app-client] (ecmascript)");
;
;
;
;
;
;
function H() {
    let { defaultContainers: r = [], portals: n, mainTreeNode: o } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(o), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        var i, c;
        let t = [];
        for (let e of r)e !== null && (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"](e) ? t.push(e) : "current" in e && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"](e.current) && t.push(e.current));
        if (n != null && n.current) for (let e of n.current)t.push(e);
        for (let e of (i = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? i : [])e !== document.body && e !== document.head && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"](e) && e.id !== "headlessui-portal-root" && (o && (e.contains(o) || e.contains((c = o == null ? void 0 : o.getRootNode()) == null ? void 0 : c.host)) || t.some((d)=>e.contains(d)) || t.push(e));
        return t;
    });
    return {
        resolveContainers: u,
        contains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>u().some((i)=>i.contains(t)))
    };
}
let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function P(param) {
    let { children: r, node: n } = param;
    let [o, l] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), u = y(n != null ? n : o);
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(a.Provider, {
        value: u
    }, r, u === null && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Hidden,
        ref: (t)=>{
            var i, c;
            if (t) {
                for (let e of (c = (i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(t)) == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? c : [])if (e !== document.body && e !== document.head && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"](e) && e != null && e.contains(t)) {
                    l(e);
                    break;
                }
            }
        }
    }));
}
function y() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    var n;
    return (n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(a)) != null ? n : r;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMounted",
    ()=>f
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
;
;
function f() {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>(e.current = !0, ()=>{
            e.current = !1;
        }), []), e;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tab-direction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Direction",
    ()=>a,
    "useTabDirection",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$window$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-window-event.js [app-client] (ecmascript)");
;
;
var a = ((r)=>(r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(a || {});
function u() {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$window$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWindowEvent"])(!0, "keydown", (r)=>{
        r.key === "Tab" && (e.current = r.shiftKey ? 1 : 0);
    }, !0), e;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusTrap",
    ()=>Re,
    "FocusTrapFeatures",
    ()=>G
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event-listener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$top$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-unmount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$server$2d$handoff$2d$complete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tab-direction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$watch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-watch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/hidden.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$active$2d$element$2d$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/active-element-history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/micro-task.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function x(s) {
    if (!s) return new Set;
    if (typeof s == "function") return new Set(s());
    let e = new Set;
    for (let t of s.current)__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"](t.current) && e.add(t.current);
    return e;
}
let $ = "div";
var G = ((n)=>(n[n.None = 0] = "None", n[n.InitialFocus = 1] = "InitialFocus", n[n.TabLock = 2] = "TabLock", n[n.FocusLock = 4] = "FocusLock", n[n.RestoreFocus = 8] = "RestoreFocus", n[n.AutoFocus = 16] = "AutoFocus", n))(G || {});
function D(s, e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(t, e), { initialFocus: o, initialFocusFallback: a, containers: n, features: u = 15, ...f } = s;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$server$2d$handoff$2d$complete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerHandoffComplete"])() || (u = 0);
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(t);
    te(u, {
        ownerDocument: l
    });
    let m = re(u, {
        ownerDocument: l,
        container: t,
        initialFocus: o,
        initialFocusFallback: a
    });
    ne(u, {
        ownerDocument: l,
        container: t,
        containers: n,
        previousActiveElement: m
    });
    let g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabDirection"])(), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((c)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](t.current)) return;
        let E = t.current;
        ((V)=>V())(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(g.current, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Forwards]: ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(E, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First, {
                        skipElements: [
                            c.relatedTarget,
                            a
                        ]
                    });
                },
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Backwards]: ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(E, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last, {
                        skipElements: [
                            c.relatedTarget,
                            a
                        ]
                    });
                }
            });
        });
    }), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$top$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsTopLayer"])(!!(u & 2), "focus-trap#tab-lock"), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])(), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), k = {
        ref: r,
        onKeyDown (c) {
            c.key == "Tab" && (b.current = !0, N.requestAnimationFrame(()=>{
                b.current = !1;
            }));
        },
        onBlur (c) {
            if (!(u & 4)) return;
            let E = x(n);
            __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](t.current) && E.add(t.current);
            let L = c.relatedTarget;
            __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](L) && L.dataset.headlessuiFocusGuard !== "true" && (I(E, L) || (b.current ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(t.current, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(g.current, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Forwards]: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next,
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Backwards]: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous
            }) | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround, {
                relativeTo: c.target
            }) : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](c.target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElement"])(c.target)));
        }
    }, B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, A && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: v,
        features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Focusable
    }), B({
        ourProps: k,
        theirProps: f,
        defaultTag: $,
        name: "FocusTrap"
    }), A && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: v,
        features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Focusable
    }));
}
let w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(D), Re = Object.assign(w, {
    features: G
});
function ee() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$active$2d$element$2d$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["history"].slice());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$watch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])((param, param1)=>{
        let [t] = param, [r] = param1;
        r === !0 && t === !1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microTask"])(()=>{
            e.current.splice(0);
        }), r === !1 && t === !0 && (e.current = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$active$2d$element$2d$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["history"].slice());
    }, [
        s,
        __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$active$2d$element$2d$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["history"],
        e
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        var t;
        return (t = e.current.find((r)=>r != null && r.isConnected)) != null ? t : null;
    });
}
function te(s, param) {
    let { ownerDocument: e } = param;
    let t = !!(s & 8), r = ee(t);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$watch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(()=>{
        t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElement"])(r());
    }, [
        t
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnUnmount"])(()=>{
        t && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElement"])(r());
    });
}
function re(s, param) {
    let { ownerDocument: e, container: t, initialFocus: r, initialFocusFallback: o } = param;
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$top$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsTopLayer"])(!!(s & 1), "focus-trap#initial-focus"), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMounted"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$watch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])(()=>{
        if (s === 0) return;
        if (!n) {
            o != null && o.current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElement"])(o.current);
            return;
        }
        let f = t.current;
        f && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microTask"])(()=>{
            if (!u.current) return;
            let l = e == null ? void 0 : e.activeElement;
            if (r != null && r.current) {
                if ((r == null ? void 0 : r.current) === l) {
                    a.current = l;
                    return;
                }
            } else if (f.contains(l)) {
                a.current = l;
                return;
            }
            if (r != null && r.current) (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElement"])(r.current);
            else {
                if (s & 16) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(f, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].AutoFocus) !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Error) return;
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(f, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First) !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Error) return;
                if (o != null && o.current && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElement"])(o.current), (e == null ? void 0 : e.activeElement) === o.current)) return;
                console.warn("There are no focusable elements inside the <FocusTrap />");
            }
            a.current = e == null ? void 0 : e.activeElement;
        });
    }, [
        o,
        n,
        s
    ]), a;
}
function ne(s, param) {
    let { ownerDocument: e, container: t, containers: r, previousActiveElement: o } = param;
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMounted"])(), n = !!(s & 4);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventListener"])(e == null ? void 0 : e.defaultView, "focus", (u)=>{
        if (!n || !a.current) return;
        let f = x(r);
        __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](t.current) && f.add(t.current);
        let l = o.current;
        if (!l) return;
        let m = u.target;
        __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](m) ? I(f, m) ? (o.current = m, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElement"])(m)) : (u.preventDefault(), u.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElement"])(l)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElement"])(o.current);
    }, !0);
}
function I(s, e) {
    for (let t of s)if (t.contains(e)) return !0;
    return !1;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>ze,
    "TransitionChild",
    ()=>Fe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$server$2d$handoff$2d$complete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/open-closed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$class$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/class-names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function ue(e) {
    var t;
    return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : de) !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"] || __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(e.children) === 1;
}
let w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
w.displayName = "TransitionContext";
var _e = ((n)=>(n.Visible = "visible", n.Hidden = "hidden", n))(_e || {});
function De() {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(w);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e;
}
function He() {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(M);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e;
}
let M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
M.displayName = "NestingContext";
function U(e) {
    return "children" in e ? U(e.children) : e.current.filter((param)=>{
        let { el: t } = param;
        return t.current !== null;
    }).filter((param)=>{
        let { state: t } = param;
        return t === "visible";
    }).length > 0;
}
function Te(e, t) {
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(e), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMounted"])(), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])(), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(function(o) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderStrategy"].Hidden;
        let a = l.current.findIndex((param)=>{
            let { el: s } = param;
            return s === o;
        });
        a !== -1 && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(i, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderStrategy"].Unmount] () {
                l.current.splice(a, 1);
            },
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderStrategy"].Hidden] () {
                l.current[a].state = "hidden";
            }
        }), R.microTask(()=>{
            var s;
            !U(l) && S.current && ((s = n.current) == null || s.call(n));
        }));
    }), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        let i = l.current.find((param)=>{
            let { el: a } = param;
            return a === o;
        });
        return i ? i.state !== "visible" && (i.state = "visible") : l.current.push({
            el: o,
            state: "visible"
        }), ()=>d(o, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderStrategy"].Unmount);
    }), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Promise.resolve()), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        enter: [],
        leave: []
    }), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o, i, a)=>{
        C.current.splice(0), t && (t.chains.current[i] = t.chains.current[i].filter((param)=>{
            let [s] = param;
            return s !== o;
        })), t == null || t.chains.current[i].push([
            o,
            new Promise((s)=>{
                C.current.push(s);
            })
        ]), t == null || t.chains.current[i].push([
            o,
            new Promise((s)=>{
                Promise.all(h.current[i].map((param)=>{
                    let [r, f] = param;
                    return f;
                })).then(()=>s());
            })
        ]), i === "enter" ? p.current = p.current.then(()=>t == null ? void 0 : t.wait.current).then(()=>a(i)) : a(i);
    }), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o, i, a)=>{
        Promise.all(h.current[i].splice(0).map((param)=>{
            let [s, r] = param;
            return r;
        })).then(()=>{
            var s;
            (s = C.current.shift()) == null || s();
        }).then(()=>a(i));
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            children: l,
            register: y,
            unregister: d,
            onStart: g,
            onStop: v,
            wait: p,
            chains: h
        }), [
        y,
        d,
        l,
        g,
        v,
        h,
        p
    ]);
}
let de = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], fe = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy;
function Ae(e, t) {
    var ee, te;
    let { transition: n = !0, beforeEnter: l, afterEnter: S, beforeLeave: R, afterLeave: d, enter: y, enterFrom: C, enterTo: p, entered: h, leave: g, leaveFrom: v, leaveTo: o, ...i } = e, [a, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), f = ue(e), j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(...f ? [
        r,
        t,
        s
    ] : t === null ? [] : [
        t
    ]), H = (ee = i.unmount) == null || ee ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderStrategy"].Unmount : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderStrategy"].Hidden, { show: u, appear: z, initial: K } = De(), [m, G] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(u ? "visible" : "hidden"), Q = He(), { register: A, unregister: I } = Q;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>A(r), [
        A,
        r
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (H === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderStrategy"].Hidden && r.current) {
            if (u && m !== "visible") {
                G("visible");
                return;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(m, {
                ["hidden"]: ()=>I(r),
                ["visible"]: ()=>A(r)
            });
        }
    }, [
        m,
        r,
        A,
        I,
        u,
        H
    ]);
    let B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$server$2d$handoff$2d$complete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerHandoffComplete"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (f && B && m === "visible" && r.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
    }, [
        r,
        m,
        B,
        f
    ]);
    let ce = K && !z, Y = z && u && K, W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), L = Te(()=>{
        W.current || (G("hidden"), I(r));
    }, Q), Z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((k)=>{
        W.current = !0;
        let F = k ? "enter" : "leave";
        L.onStart(r, F, (_)=>{
            _ === "enter" ? l == null || l() : _ === "leave" && (R == null || R());
        });
    }), $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((k)=>{
        let F = k ? "enter" : "leave";
        W.current = !1, L.onStop(r, F, (_)=>{
            _ === "enter" ? S == null || S() : _ === "leave" && (d == null || d());
        }), F === "leave" && !U(L) && (G("hidden"), I(r));
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        f && n || (Z(u), $(u));
    }, [
        u,
        f,
        n
    ]);
    let pe = (()=>!(!n || !f || !B || ce))(), [, T] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])(pe, a, u, {
        start: Z,
        end: $
    }), Ce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compact"])({
        ref: j,
        className: ((te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$class$2d$names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])(i.className, Y && y, Y && C, T.enter && y, T.enter && T.closed && C, T.enter && !T.closed && p, T.leave && g, T.leave && !T.closed && v, T.leave && T.closed && o, !T.transition && u && h)) == null ? void 0 : te.trim()) || void 0,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionDataAttributes"])(T)
    }), N = 0;
    m === "visible" && (N |= __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open), m === "hidden" && (N |= __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Closed), u && m === "hidden" && (N |= __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Opening), !u && m === "visible" && (N |= __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Closing);
    let he = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(M.Provider, {
        value: L
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenClosedProvider"], {
        value: N
    }, he({
        ourProps: Ce,
        theirProps: i,
        defaultTag: de,
        features: fe,
        visible: m === "visible",
        name: "Transition.Child"
    })));
}
function Ie(e, t) {
    let { show: n, appear: l = !1, unmount: S = !0, ...R } = e, d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), y = ue(e), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(...y ? [
        d,
        t
    ] : t === null ? [] : [
        t
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$server$2d$handoff$2d$complete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerHandoffComplete"])();
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])();
    if (n === void 0 && p !== null && (n = (p & __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [h, g] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(n ? "visible" : "hidden"), v = Te(()=>{
        n || g("hidden");
    }), [o, i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        n
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        o !== !1 && a.current[a.current.length - 1] !== n && (a.current.push(n), i(!1));
    }, [
        a,
        n
    ]);
    let s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            show: n,
            appear: l,
            initial: o
        }), [
        n,
        l,
        o
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        n ? g("visible") : !U(v) && d.current !== null && g("hidden");
    }, [
        n,
        v
    ]);
    let r = {
        unmount: S
    }, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        var u;
        o && i(!1), (u = e.beforeEnter) == null || u.call(e);
    }), j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        var u;
        o && i(!1), (u = e.beforeLeave) == null || u.call(e);
    }), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(M.Provider, {
        value: v
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(w.Provider, {
        value: s
    }, H({
        ourProps: {
            ...r,
            as: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
            children: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(me, {
                ref: C,
                ...r,
                ...R,
                beforeEnter: f,
                beforeLeave: j
            })
        },
        theirProps: {},
        defaultTag: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        features: fe,
        visible: h === "visible",
        name: "Transition"
    })));
}
function Le(e, t) {
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(w) !== null, l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])() !== null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, !n && l ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(X, {
        ref: t,
        ...e
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(me, {
        ref: t,
        ...e
    }));
}
let X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ie), me = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ae), Fe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Le), ze = Object.assign(X, {
    Child: Fe,
    Root: X
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Lt,
    "DialogBackdrop",
    ()=>bt,
    "DialogDescription",
    ()=>vt,
    "DialogPanel",
    ()=>qe,
    "DialogTitle",
    ()=>ze
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-escape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$inert$2d$others$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-inert-others.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$touch$2d$device$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-disappear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-outside-click.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-root-containers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$server$2d$handoff$2d$complete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$close$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/close-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/open-closed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$portal$2d$force$2d$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/portal-force-root.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/react-glue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$focus$2d$trap$2f$focus$2d$trap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/portal/portal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Ge = ((o)=>(o[o.Open = 0] = "Open", o[o.Closed = 1] = "Closed", o))(Ge || {}), we = ((t)=>(t[t.SetTitleId = 0] = "SetTitleId", t))(we || {});
let Be = {
    [0] (e, t) {
        return e.titleId === t.id ? e : {
            ...e,
            titleId: t.id
        };
    }
}, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
w.displayName = "DialogContext";
function O(e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(w);
    if (t === null) {
        let o = new Error("<".concat(e, " /> is missing a parent <Dialog /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(o, O), o;
    }
    return t;
}
function Ue(e, t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(t.type, Be, e, t);
}
let z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(function(t, o) {
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: n = "headlessui-dialog-".concat(a), open: i, onClose: s, initialFocus: d, role: p = "dialog", autoFocus: T = !0, __demoMode: u = !1, unmount: y = !1, ...S } = t, F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    p = function() {
        return p === "dialog" || p === "alertdialog" ? p : (F.current || (F.current = !0, console.warn("Invalid role [".concat(p, "] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."))), "dialog");
    }();
    let c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])();
    i === void 0 && c !== null && (i = (c & __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open);
    let f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(f, o), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(f), g = i ? 0 : 1, [v, Q] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(Ue, {
        titleId: null,
        descriptionId: null,
        panelRef: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])()
    }), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>s(!1)), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>Q({
            type: 0,
            id: r
        })), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$server$2d$handoff$2d$complete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerHandoffComplete"])() ? g === 0 : !1, [Z, ee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNestedPortals"])(), te = {
        get current () {
            var r;
            return (r = v.panelRef.current) != null ? r : f.current;
        }
    }, L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainTreeNode"])(), { resolveContainers: M } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContainers"])({
        mainTreeNode: L,
        portals: Z,
        defaultContainers: [
            te
        ]
    }), U = c !== null ? (c & __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Closing) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Closing : !1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$inert$2d$others$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInertOthers"])(u || U ? !1 : D, {
        allowed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
            var r, W;
            return [
                (W = (r = f.current) == null ? void 0 : r.closest("[data-headlessui-portal]")) != null ? W : null
            ];
        }),
        disallowed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
            var r;
            return [
                (r = L == null ? void 0 : L.closest("body > *:not(#headlessui-portal-root)")) != null ? r : null
            ];
        })
    });
    let P = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackMachines"].get(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (D) return P.actions.push(n), ()=>P.actions.pop(n);
    }, [
        P,
        n,
        D
    ]);
    let H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(P, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((r)=>P.selectors.isTop(r, n), [
        P,
        n
    ]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutsideClick"])(H, M, (r)=>{
        r.preventDefault(), m();
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEscape"])(H, b == null ? void 0 : b.defaultView, (r)=>{
        r.preventDefault(), r.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m();
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollLock"])(u || U ? !1 : D, b, M), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnDisappear"])(D, f, m);
    let [oe, ne] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescriptions"])(), re = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                dialogState: g,
                close: m,
                setTitleId: B,
                unmount: y
            },
            v
        ], [
        g,
        v,
        m,
        B,
        y
    ]), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: g === 0
        }), [
        g
    ]), le = {
        ref: I,
        id: n,
        role: p,
        tabIndex: -1,
        "aria-modal": u ? void 0 : g === 0 ? !0 : void 0,
        "aria-labelledby": v.titleId,
        "aria-describedby": oe,
        unmount: y
    }, ae = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$touch$2d$device$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsTouchDevice"])(), E = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$focus$2d$trap$2f$focus$2d$trap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusTrapFeatures"].None;
    D && !u && (E |= __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$focus$2d$trap$2f$focus$2d$trap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusTrapFeatures"].RestoreFocus, E |= __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$focus$2d$trap$2f$focus$2d$trap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusTrapFeatures"].TabLock, T && (E |= __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$focus$2d$trap$2f$focus$2d$trap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusTrapFeatures"].AutoFocus), ae && (E |= __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$focus$2d$trap$2f$focus$2d$trap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusTrapFeatures"].InitialFocus));
    let ie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResetOpenClosedProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$portal$2d$force$2d$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForcePortalRoot"], {
        force: !0
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(w.Provider, {
        value: re
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortalGroup"], {
        target: f
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$portal$2d$force$2d$root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForcePortalRoot"], {
        force: !1
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ne, {
        slot: N
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ee, null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$focus$2d$trap$2f$focus$2d$trap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusTrap"], {
        initialFocus: d,
        initialFocusFallback: f,
        containers: M,
        features: E
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$close$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseProvider"], {
        value: m
    }, ie({
        ourProps: le,
        theirProps: S,
        slot: N,
        defaultTag: He,
        features: Ne,
        visible: g === 0,
        name: "Dialog"
    })))))))))));
}), He = "div", Ne = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].Static;
function We(e, t) {
    let { transition: o = !1, open: a, ...n } = e, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])(), s = e.hasOwnProperty("open") || i !== null, d = e.hasOwnProperty("onClose");
    if (!s && !d) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!d) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (!i && typeof e.open != "boolean") throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(e.open));
    if (typeof e.onClose != "function") throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(e.onClose));
    return (a !== void 0 || o) && !n.static ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainTreeProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        show: a,
        transition: o,
        unmount: n.unmount
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(z, {
        ref: t,
        ...n
    }))) : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainTreeProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(z, {
        ref: t,
        open: a,
        ...n
    }));
}
let $e = "div";
function je(e, t) {
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: a = "headlessui-dialog-panel-".concat(o), transition: n = !1, ...i } = e, [{ dialogState: s, unmount: d }, p] = O("Dialog.Panel"), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(t, p.panelRef), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: s === 0
        }), [
        s
    ]), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((I)=>{
        I.stopPropagation();
    }), S = {
        ref: T,
        id: a,
        onClick: y
    }, F = n ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionChild"] : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], c = n ? {
        unmount: d
    } : {}, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        ...c
    }, f({
        ourProps: S,
        theirProps: i,
        slot: u,
        defaultTag: $e,
        name: "Dialog.Panel"
    }));
}
let Ye = "div";
function Je(e, t) {
    let { transition: o = !1, ...a } = e, [{ dialogState: n, unmount: i }] = O("Dialog.Backdrop"), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: n === 0
        }), [
        n
    ]), d = {
        ref: t,
        "aria-hidden": !0
    }, p = o ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionChild"] : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], T = o ? {
        unmount: i
    } : {}, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(p, {
        ...T
    }, u({
        ourProps: d,
        theirProps: a,
        slot: s,
        defaultTag: Ye,
        name: "Dialog.Backdrop"
    }));
}
let Ke = "h2";
function Xe(e, t) {
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: a = "headlessui-dialog-title-".concat(o), ...n } = e, [{ dialogState: i, setTitleId: s }] = O("Dialog.Title"), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(t);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(s(a), ()=>s(null)), [
        a,
        s
    ]);
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: i === 0
        }), [
        i
    ]), T = {
        ref: d,
        id: a
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: T,
        theirProps: n,
        slot: p,
        defaultTag: Ke,
        name: "Dialog.Title"
    });
}
let Ve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(We), qe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(je), bt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Je), ze = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Xe), vt = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], Lt = Object.assign(Ve, {
    Panel: qe,
    Title: ze,
    Description: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"]
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/start-transition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startTransition",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var t;
;
let a = (t = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].startTransition) != null ? t : function(i) {
    i();
};
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/disclosure/disclosure.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Disclosure",
    ()=>Ve,
    "DisclosureButton",
    ()=>Re,
    "DisclosurePanel",
    ()=>Ie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$close$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/close-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/open-closed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/bugs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$start$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/start-transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var de = ((l)=>(l[l.Open = 0] = "Open", l[l.Closed = 1] = "Closed", l))(de || {}), Te = ((n)=>(n[n.ToggleDisclosure = 0] = "ToggleDisclosure", n[n.CloseDisclosure = 1] = "CloseDisclosure", n[n.SetButtonId = 2] = "SetButtonId", n[n.SetPanelId = 3] = "SetPanelId", n[n.SetButtonElement = 4] = "SetButtonElement", n[n.SetPanelElement = 5] = "SetPanelElement", n))(Te || {});
let me = {
    [0]: (e)=>({
            ...e,
            disclosureState: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(e.disclosureState, {
                [0]: 1,
                [1]: 0
            })
        }),
    [1]: (e)=>e.disclosureState === 1 ? e : {
            ...e,
            disclosureState: 1
        },
    [2] (e, t) {
        return e.buttonId === t.buttonId ? e : {
            ...e,
            buttonId: t.buttonId
        };
    },
    [3] (e, t) {
        return e.panelId === t.panelId ? e : {
            ...e,
            panelId: t.panelId
        };
    },
    [4] (e, t) {
        return e.buttonElement === t.element ? e : {
            ...e,
            buttonElement: t.element
        };
    },
    [5] (e, t) {
        return e.panelElement === t.element ? e : {
            ...e,
            panelElement: t.element
        };
    }
}, _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
_.displayName = "DisclosureContext";
function M(e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(_);
    if (t === null) {
        let l = new Error("<".concat(e, " /> is missing a parent <Disclosure /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(l, M), l;
    }
    return t;
}
let F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
F.displayName = "DisclosureAPIContext";
function J(e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(F);
    if (t === null) {
        let l = new Error("<".concat(e, " /> is missing a parent <Disclosure /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(l, J), l;
    }
    return t;
}
let H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
H.displayName = "DisclosurePanelContext";
function fe() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(H);
}
function De(e, t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(t.type, me, e, t);
}
let ye = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
function Pe(e, t) {
    let { defaultOpen: l = !1, ...p } = e, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalRef"])((u)=>{
        a.current = u;
    }, e.as === void 0 || e.as === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"])), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(De, {
        disclosureState: l ? 0 : 1,
        buttonElement: null,
        panelElement: null,
        buttonId: null,
        panelId: null
    }), [{ disclosureState: o, buttonId: r }, f] = n, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((u)=>{
        f({
            type: 1
        });
        let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(a);
        if (!d || !r) return;
        let T = (()=>u ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](u) ? u : "current" in u && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](u.current) ? u.current : d.getElementById(r) : d.getElementById(r))();
        T == null || T.focus();
    }), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            close: s
        }), [
        s
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: o === 0,
            close: s
        }), [
        o,
        s
    ]), D = {
        ref: c
    }, S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(_.Provider, {
        value: n
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(F.Provider, {
        value: E
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$close$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseProvider"], {
        value: s
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenClosedProvider"], {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(o, {
            [0]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open,
            [1]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Closed
        })
    }, S({
        ourProps: D,
        theirProps: p,
        slot: m,
        defaultTag: ye,
        name: "Disclosure"
    })))));
}
let Ee = "button";
function Se(e, t) {
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: p = "headlessui-disclosure-button-".concat(l), disabled: a = !1, autoFocus: c = !1, ...n } = e, [o, r] = M("Disclosure.Button"), f = fe(), s = f === null ? !1 : f === o.panelId, E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(E, t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        if (!s) return r({
            type: 4,
            element: i
        });
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!s) return r({
            type: 2,
            buttonId: p
        }), ()=>{
            r({
                type: 2,
                buttonId: null
            });
        };
    }, [
        p,
        r,
        s
    ]);
    let D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        var g;
        if (s) {
            if (o.disclosureState === 1) return;
            switch(i.key){
                case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
                case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                    i.preventDefault(), i.stopPropagation(), r({
                        type: 0
                    }), (g = o.buttonElement) == null || g.focus();
                    break;
            }
        } else switch(i.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                i.preventDefault(), i.stopPropagation(), r({
                    type: 0
                });
                break;
        }
    }), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        switch(i.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
                i.preventDefault();
                break;
        }
    }), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        var g;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(i.currentTarget) || a || (s ? (r({
            type: 0
        }), (g = o.buttonElement) == null || g.focus()) : r({
            type: 0
        }));
    }), { isFocusVisible: d, focusProps: T } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: c
    }), { isHovered: b, hoverProps: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: a
    }), { pressed: U, pressProps: G } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: a
    }), X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: o.disclosureState === 0,
            hover: b,
            active: U,
            disabled: a,
            focus: d,
            autofocus: c
        }), [
        o,
        b,
        U,
        d,
        a,
        c
    ]), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveButtonType"])(e, o.buttonElement), q = s ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: m,
        type: N,
        disabled: a || void 0,
        autoFocus: c,
        onKeyDown: D,
        onClick: u
    }, T, h, G) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: m,
        id: p,
        type: N,
        "aria-expanded": o.disclosureState === 0,
        "aria-controls": o.panelElement ? o.panelId : void 0,
        disabled: a || void 0,
        autoFocus: c,
        onKeyDown: D,
        onKeyUp: S,
        onClick: u
    }, T, h, G);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: q,
        theirProps: n,
        slot: X,
        defaultTag: Ee,
        name: "Disclosure.Button"
    });
}
let ge = "div", Ae = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].Static;
function be(e, t) {
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: p = "headlessui-disclosure-panel-".concat(l), transition: a = !1, ...c } = e, [n, o] = M("Disclosure.Panel"), { close: r } = J("Disclosure.Panel"), [f, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((b)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$start$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>o({
                type: 5,
                element: b
            }));
    }), s);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(o({
            type: 3,
            panelId: p
        }), ()=>{
            o({
                type: 3,
                panelId: null
            });
        }), [
        p,
        o
    ]);
    let m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])(), [D, S] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])(a, f, m !== null ? (m & __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open : n.disclosureState === 0), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: n.disclosureState === 0,
            close: r
        }), [
        n.disclosureState,
        r
    ]), d = {
        ref: E,
        id: p,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionDataAttributes"])(S)
    }, T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResetOpenClosedProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(H.Provider, {
        value: n.panelId
    }, T({
        ourProps: d,
        theirProps: c,
        slot: u,
        defaultTag: ge,
        features: Ae,
        visible: D,
        name: "Disclosure.Panel"
    })));
}
let Ce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Pe), Re = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Se), Ie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(be), Ve = Object.assign(Ce, {
    Button: Re,
    Panel: Ie
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/field/field.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>H
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/form-fields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
let _ = "div";
function c(d, l) {
    let t = "headlessui-control-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])()), [s, p] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])(), [n, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescriptions"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { disabled: e = m || !1, ...i } = d, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            disabled: e
        }), [
        e
    ]), F = {
        ref: l,
        disabled: e || void 0,
        "aria-disabled": e || void 0
    }, T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisabledProvider"], {
        value: e
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(p, {
        value: s
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(a, {
        value: n
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdProvider"], {
        id: t
    }, T({
        ourProps: F,
        theirProps: {
            ...i,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFieldsProvider"], null, typeof i.children == "function" ? i.children(o) : i.children)
        },
        slot: o,
        defaultTag: _,
        name: "Field"
    })))));
}
let H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(c);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolved-tag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResolvedTag",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
;
;
function d(t) {
    let e = typeof t == "string" ? t : void 0, [s, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e);
    return [
        e != null ? e : s,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((n)=>{
            e || __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](n) && o(n.tagName.toLowerCase());
        }, [
            e
        ])
    ];
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/fieldset/fieldset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fieldset",
    ()=>G
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolved$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolved-tag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
let d = "fieldset";
function _(t, a) {
    var s;
    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { disabled: e = i || !1, ...p } = t, [n, T] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolved$2d$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedTag"])((s = t.as) != null ? s : d), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(a, T), [r, f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            disabled: e
        }), [
        e
    ]), y = n === "fieldset" ? {
        ref: l,
        "aria-labelledby": r,
        disabled: e || void 0
    } : {
        ref: l,
        role: "group",
        "aria-labelledby": r,
        "aria-disabled": e || void 0
    }, F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisabledProvider"], {
        value: e
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(f, null, F({
        ourProps: y,
        theirProps: p,
        slot: m,
        defaultTag: d,
        name: "Fieldset"
    })));
}
let G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(_);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/input/input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
let x = "input";
function h(p, s) {
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProvidedId"])(), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { id: d = l || "headlessui-input-".concat(a), disabled: e = i || !1, autoFocus: o = !1, invalid: t = !1, ...u } = p, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescribedBy"])(), { isFocused: r, focusProps: T } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: o
    }), { isHovered: n, hoverProps: b } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: e
    }), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: s,
        id: d,
        "aria-labelledby": f,
        "aria-describedby": m,
        "aria-invalid": t ? "true" : void 0,
        disabled: e || void 0,
        autoFocus: o
    }, T, b), I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            disabled: e,
            invalid: t,
            hover: n,
            focus: r,
            autofocus: o
        }), [
        e,
        t,
        n,
        r,
        o
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: y,
        theirProps: u,
        slot: I,
        defaultTag: x,
        name: "Input"
    });
}
let S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(h);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/legend/legend.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Legend",
    ()=>d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
"use client";
;
;
;
let a = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"];
function o(t, n) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        as: "div",
        ref: n,
        ...t
    });
}
let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(o);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-did-element-move.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDidElementMove",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
;
;
function s(n, t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        left: 0,
        top: 0
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (!t) return;
        let r = t.getBoundingClientRect();
        r && (e.current = r);
    }, [
        n,
        t
    ]), t == null || !n || t === document.activeElement) return !1;
    let o = t.getBoundingClientRect();
    return o.top !== e.current.top || o.left !== e.current.left;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/get-text-value.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTextValue",
    ()=>F
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
;
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e) {
    var l, n;
    let i = (l = e.innerText) != null ? l : "", t = e.cloneNode(!0);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](t)) return i;
    let u = !1;
    for (let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(), u = !0;
    let r = u ? (n = t.innerText) != null ? n : "" : i;
    return a.test(r) && (r = r.replace(a, "")), r;
}
function F(e) {
    let i = e.getAttribute("aria-label");
    if (typeof i == "string") return i.trim();
    let t = e.getAttribute("aria-labelledby");
    if (t) {
        let u = t.split(" ").map((r)=>{
            let l = document.getElementById(r);
            if (l) {
                let n = l.getAttribute("aria-label");
                return typeof n == "string" ? n.trim() : o(l).trim();
            }
            return null;
        }).filter(Boolean);
        if (u.length > 0) return u.join(", ");
    }
    return o(e).trim();
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-text-value.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTextValue",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$get$2d$text$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/get-text-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
;
;
;
function s(c) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(""), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        let e = c.current;
        if (!e) return "";
        let u = e.innerText;
        if (t.current === u) return r.current;
        let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$get$2d$text$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextValue"])(e).trim().toLowerCase();
        return t.current = u, r.current = n, n;
    });
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/listbox/listbox-machine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionTypes",
    ()=>M,
    "ActivationTrigger",
    ()=>F,
    "ListboxMachine",
    ()=>h,
    "ListboxStates",
    ()=>E,
    "ValueMode",
    ()=>L
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/calculate-active-index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var T = Object.defineProperty;
var m = (e, o, t)=>o in e ? T(e, o, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[o] = t;
var v = (e, o, t)=>(m(e, typeof o != "symbol" ? o + "" : o, t), t);
;
;
;
;
;
var E = ((t)=>(t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(E || {}), L = ((t)=>(t[t.Single = 0] = "Single", t[t.Multi = 1] = "Multi", t))(L || {}), F = ((t)=>(t[t.Pointer = 0] = "Pointer", t[t.Other = 1] = "Other", t))(F || {}), M = ((r)=>(r[r.OpenListbox = 0] = "OpenListbox", r[r.CloseListbox = 1] = "CloseListbox", r[r.GoToOption = 2] = "GoToOption", r[r.Search = 3] = "Search", r[r.ClearSearch = 4] = "ClearSearch", r[r.RegisterOptions = 5] = "RegisterOptions", r[r.UnregisterOptions = 6] = "UnregisterOptions", r[r.SetButtonElement = 7] = "SetButtonElement", r[r.SetOptionsElement = 8] = "SetOptionsElement", r[r.SortOptions = 9] = "SortOptions", r))(M || {});
function b(e) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (t)=>t;
    let t = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(o(e.options.slice()), (s)=>s.dataRef.current.domRef.current), i = t ? n.indexOf(t) : null;
    return i === -1 && (i = null), {
        options: n,
        activeOptionIndex: i
    };
}
let C = {
    [1] (e) {
        return e.dataRef.current.disabled || e.listboxState === 1 ? e : {
            ...e,
            activeOptionIndex: null,
            pendingFocus: {
                focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
            },
            listboxState: 1,
            __demoMode: !1
        };
    },
    [0] (e, o) {
        if (e.dataRef.current.disabled || e.listboxState === 0) return e;
        let t = e.activeOptionIndex, { isSelected: n } = e.dataRef.current, i = e.options.findIndex((s)=>n(s.dataRef.current.value));
        return i !== -1 && (t = i), {
            ...e,
            pendingFocus: o.focus,
            listboxState: 0,
            activeOptionIndex: t,
            __demoMode: !1
        };
    },
    [2] (e, o) {
        var s, l, u, d, a;
        if (e.dataRef.current.disabled || e.listboxState === 1) return e;
        let t = {
            ...e,
            searchQuery: "",
            activationTrigger: (s = o.trigger) != null ? s : 1,
            __demoMode: !1
        };
        if (o.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing) return {
            ...t,
            activeOptionIndex: null
        };
        if (o.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific) return {
            ...t,
            activeOptionIndex: e.options.findIndex((r)=>r.id === o.id)
        };
        if (o.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous) {
            let r = e.activeOptionIndex;
            if (r !== null) {
                let O = e.options[r].dataRef.current.domRef, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(o, {
                    resolveItems: ()=>e.options,
                    resolveActiveIndex: ()=>e.activeOptionIndex,
                    resolveId: (c)=>c.id,
                    resolveDisabled: (c)=>c.dataRef.current.disabled
                });
                if (f !== null) {
                    let c = e.options[f].dataRef.current.domRef;
                    if (((l = O.current) == null ? void 0 : l.previousElementSibling) === c.current || ((u = c.current) == null ? void 0 : u.previousElementSibling) === null) return {
                        ...t,
                        activeOptionIndex: f
                    };
                }
            }
        } else if (o.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next) {
            let r = e.activeOptionIndex;
            if (r !== null) {
                let O = e.options[r].dataRef.current.domRef, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(o, {
                    resolveItems: ()=>e.options,
                    resolveActiveIndex: ()=>e.activeOptionIndex,
                    resolveId: (c)=>c.id,
                    resolveDisabled: (c)=>c.dataRef.current.disabled
                });
                if (f !== null) {
                    let c = e.options[f].dataRef.current.domRef;
                    if (((d = O.current) == null ? void 0 : d.nextElementSibling) === c.current || ((a = c.current) == null ? void 0 : a.nextElementSibling) === null) return {
                        ...t,
                        activeOptionIndex: f
                    };
                }
            }
        }
        let n = b(e), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(o, {
            resolveItems: ()=>n.options,
            resolveActiveIndex: ()=>n.activeOptionIndex,
            resolveId: (r)=>r.id,
            resolveDisabled: (r)=>r.dataRef.current.disabled
        });
        return {
            ...t,
            ...n,
            activeOptionIndex: i
        };
    },
    [3]: (e, o)=>{
        if (e.dataRef.current.disabled || e.listboxState === 1) return e;
        let n = e.searchQuery !== "" ? 0 : 1, i = e.searchQuery + o.value.toLowerCase(), l = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find((d)=>{
            var a;
            return !d.dataRef.current.disabled && ((a = d.dataRef.current.textValue) == null ? void 0 : a.startsWith(i));
        }), u = l ? e.options.indexOf(l) : -1;
        return u === -1 || u === e.activeOptionIndex ? {
            ...e,
            searchQuery: i
        } : {
            ...e,
            searchQuery: i,
            activeOptionIndex: u,
            activationTrigger: 1
        };
    },
    [4] (e) {
        return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : {
            ...e,
            searchQuery: ""
        };
    },
    [5]: (e, o)=>{
        let t = e.options.concat(o.options), n = e.activeOptionIndex;
        if (e.pendingFocus.focus !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing && (n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(e.pendingFocus, {
            resolveItems: ()=>t,
            resolveActiveIndex: ()=>e.activeOptionIndex,
            resolveId: (i)=>i.id,
            resolveDisabled: (i)=>i.dataRef.current.disabled
        })), e.activeOptionIndex === null) {
            let { isSelected: i } = e.dataRef.current;
            if (i) {
                let s = t.findIndex((l)=>i == null ? void 0 : i(l.dataRef.current.value));
                s !== -1 && (n = s);
            }
        }
        return {
            ...e,
            options: t,
            activeOptionIndex: n,
            pendingFocus: {
                focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
            },
            pendingShouldSort: !0
        };
    },
    [6]: (e, o)=>{
        let t = e.options, n = [], i = new Set(o.options);
        for (let [s, l] of t.entries())if (i.has(l.id) && (n.push(s), i.delete(l.id), i.size === 0)) break;
        if (n.length > 0) {
            t = t.slice();
            for (let s of n.reverse())t.splice(s, 1);
        }
        return {
            ...e,
            options: t,
            activationTrigger: 1
        };
    },
    [7]: (e, o)=>e.buttonElement === o.element ? e : {
            ...e,
            buttonElement: o.element
        },
    [8]: (e, o)=>e.optionsElement === o.element ? e : {
            ...e,
            optionsElement: o.element
        },
    [9]: (e)=>e.pendingShouldSort ? {
            ...e,
            ...b(e),
            pendingShouldSort: !1
        } : e
};
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Machine"] {
    static new(param) {
        let { id: t, __demoMode: n = !1 } = param;
        return new h({
            id: t,
            dataRef: {
                current: {}
            },
            listboxState: n ? 0 : 1,
            options: [],
            searchQuery: "",
            activeOptionIndex: null,
            activationTrigger: 1,
            buttonElement: null,
            optionsElement: null,
            pendingShouldSort: !1,
            pendingFocus: {
                focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
            },
            __demoMode: n
        });
    }
    reduce(t, n) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(n.type, C, t, n);
    }
    constructor(t){
        super(t);
        v(this, "actions", {
            onChange: (t)=>{
                let { onChange: n, compare: i, mode: s, value: l } = this.state.dataRef.current;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(s, {
                    [0]: ()=>n == null ? void 0 : n(t),
                    [1]: ()=>{
                        let u = l.slice(), d = u.findIndex((a)=>i(a, t));
                        return d === -1 ? u.push(t) : u.splice(d, 1), n == null ? void 0 : n(u);
                    }
                });
            },
            registerOption: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                let t = [], n = new Set;
                return [
                    (i, s)=>{
                        n.has(s) || (n.add(s), t.push({
                            id: i,
                            dataRef: s
                        }));
                    },
                    ()=>(n.clear(), this.send({
                            type: 5,
                            options: t.splice(0)
                        }))
                ];
            }),
            unregisterOption: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                let t = [];
                return [
                    (n)=>t.push(n),
                    ()=>{
                        this.send({
                            type: 6,
                            options: t.splice(0)
                        });
                    }
                ];
            }),
            goToOption: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                let t = null;
                return [
                    (n, i)=>{
                        t = {
                            type: 2,
                            ...n,
                            trigger: i
                        };
                    },
                    ()=>t && this.send(t)
                ];
            }),
            closeListbox: ()=>{
                this.send({
                    type: 1
                });
            },
            openListbox: (t)=>{
                this.send({
                    type: 0,
                    focus: t
                });
            },
            selectActiveOption: ()=>{
                if (this.state.activeOptionIndex !== null) {
                    let { dataRef: t, id: n } = this.state.options[this.state.activeOptionIndex];
                    this.actions.onChange(t.current.value), this.send({
                        type: 2,
                        focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific,
                        id: n
                    });
                }
            },
            selectOption: (t)=>{
                let n = this.state.options.find((i)=>i.id === t);
                n && this.actions.onChange(n.dataRef.current.value);
            },
            search: (t)=>{
                this.send({
                    type: 3,
                    value: t
                });
            },
            clearSearch: ()=>{
                this.send({
                    type: 4
                });
            },
            setButtonElement: (t)=>{
                this.send({
                    type: 7,
                    element: t
                });
            },
            setOptionsElement: (t)=>{
                this.send({
                    type: 8,
                    element: t
                });
            }
        });
        v(this, "selectors", {
            activeDescendantId (t) {
                var s;
                let n = t.activeOptionIndex, i = t.options;
                return n === null || (s = i[n]) == null ? void 0 : s.id;
            },
            isActive (t, n) {
                var l;
                let i = t.activeOptionIndex, s = t.options;
                return i !== null ? ((l = s[i]) == null ? void 0 : l.id) === n : !1;
            },
            shouldScrollIntoView (t, n) {
                return t.__demoMode || t.listboxState !== 0 || t.activationTrigger === 0 ? !1 : this.isActive(t, n);
            }
        });
        this.on(5, ()=>{
            requestAnimationFrame(()=>{
                this.send({
                    type: 9
                });
            });
        });
        {
            let n = this.state.id, i = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackMachines"].get(null);
            this.disposables.add(i.on(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].Push, (s)=>{
                !i.selectors.isTop(s, n) && this.state.listboxState === 0 && this.actions.closeListbox();
            })), this.on(0, ()=>i.actions.push(n)), this.on(1, ()=>i.actions.pop(n));
        }
    }
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/listbox/listbox-machine-glue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListboxContext",
    ()=>c,
    "useListboxMachine",
    ()=>u,
    "useListboxMachineContext",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-unmount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/listbox/listbox-machine.js [app-client] (ecmascript)");
;
;
;
const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function p(o) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(c);
    if (e === null) {
        let t = new Error("<".concat(o, " /> is missing a parent <Listbox /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(t, u), t;
    }
    return e;
}
function u(param) {
    let { id: o, __demoMode: e = !1 } = param;
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxMachine"].new({
            id: o,
            __demoMode: e
        }), []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnUnmount"])(()=>t.dispose()), t;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/listbox/listbox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Listbox",
    ()=>Io,
    "ListboxButton",
    ()=>Bt,
    "ListboxLabel",
    ()=>It,
    "ListboxOption",
    ()=>Ut,
    "ListboxOptions",
    ()=>kt,
    "ListboxSelectedOption",
    ()=>Nt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$by$2d$comparator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-by-comparator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-controllable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-default-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$did$2d$element$2d$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-did-element-move.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$element$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-element-size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$inert$2d$others$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-inert-others.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-disappear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-outside-click.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-quick-release.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$text$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-text-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tracked$2d$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/floating.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/form-fields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$frozen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/frozen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/open-closed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/react-glue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/bugs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/calculate-active-index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$mouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/mouse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/portal/portal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/listbox/listbox-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/listbox/listbox-machine-glue.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let se = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
se.displayName = "ListboxDataContext";
function ee(P) {
    let D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(se);
    if (D === null) {
        let O = new Error("<".concat(P, " /> is missing a parent <Listbox /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(O, ee), O;
    }
    return D;
}
let vt = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
function Et(P, D) {
    let O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { value: l, defaultValue: p, form: _, name: i, onChange: T, by: n, invalid: m = !1, disabled: b = u || !1, horizontal: a = !1, multiple: t = !1, __demoMode: s = !1, ...A } = P;
    const g = a ? "horizontal" : "vertical";
    let N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(D), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultValue"])(p), [d = t ? [] : void 0, L] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllable"])(l, T, F), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListboxMachine"])({
        id: O,
        __demoMode: s
    }), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        static: !1,
        hold: !1
    }), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$by$2d$comparator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByComparator"])(n), I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((E)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(r.mode, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Multi]: ()=>d.some((j)=>w(j, E)),
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single]: ()=>w(d, E)
        }), [
        d
    ]), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            value: d,
            disabled: b,
            invalid: m,
            mode: t ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Multi : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single,
            orientation: g,
            onChange: L,
            compare: w,
            isSelected: I,
            optionsPropsRef: B,
            listRef: H
        }), [
        d,
        b,
        m,
        t,
        g,
        L,
        w,
        I,
        B,
        H
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        y.state.dataRef.current = r;
    }, [
        r
    ]);
    let x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(y, (E)=>E.listboxState), G = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackMachines"].get(null), K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(G, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((E)=>G.selectors.isTop(E, O), [
        G,
        O
    ])), [v, z] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(y, (E)=>[
            E.buttonElement,
            E.optionsElement
        ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutsideClick"])(K, [
        v,
        z
    ], (E, j)=>{
        y.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseListbox
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFocusableElement"])(j, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusableMode"].Loose) || (E.preventDefault(), v == null || v.focus());
    });
    let W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: x === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open,
            disabled: b,
            invalid: m,
            value: d
        }), [
        x,
        b,
        m,
        d
    ]), [X, te] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])({
        inherit: !0
    }), o = {
        ref: N
    }, k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (F !== void 0) return L == null ? void 0 : L(F);
    }, [
        L,
        F
    ]), oe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(te, {
        value: X,
        props: {
            htmlFor: v == null ? void 0 : v.id
        },
        slot: {
            open: x === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open,
            disabled: b
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxContext"].Provider, {
        value: y
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(se.Provider, {
        value: r
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenClosedProvider"], {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(x, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open,
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Closed]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Closed
        })
    }, i != null && d != null && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], {
        disabled: b,
        data: {
            [i]: d
        },
        form: _,
        onReset: k
    }), oe({
        ourProps: o,
        theirProps: A,
        slot: W,
        defaultTag: vt,
        name: "Listbox"
    }))))));
}
let ht = "button";
function Rt(P, D) {
    let O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProvidedId"])(), l = ee("Listbox.Button"), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListboxMachineContext"])("Listbox.Button"), { id: _ = u || "headlessui-listbox-button-".concat(O), disabled: i = l.disabled || !1, autoFocus: T = !1, ...n } = P, m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(D, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingReference"])(), p.actions.setButtonElement), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingReferenceProps"])(), [a, t, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(p, (o)=>[
            o.listboxState,
            o.buttonElement,
            o.optionsElement
        ]), A = a === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickRelease"])(A, {
        trigger: t,
        action: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((o)=>{
            if (t != null && t.contains(o.target)) return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Ignore;
            let k = o.target.closest('[role="option"]:not([data-disabled])');
            return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](k) ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Select(k) : s != null && s.contains(o.target) ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Ignore : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Close;
        }, [
            t,
            s
        ]),
        close: p.actions.closeListbox,
        select: p.actions.selectActiveOption
    });
    let g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        switch(o.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attemptSubmit"])(o.currentTarget);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowDown:
                o.preventDefault(), p.actions.openListbox({
                    focus: l.value ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First
                });
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowUp:
                o.preventDefault(), p.actions.openListbox({
                    focus: l.value ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last
                });
                break;
        }
    }), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        switch(o.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
                o.preventDefault();
                break;
        }
    }), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        var k;
        if (o.button === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$mouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MouseButton"].Left) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(o.currentTarget)) return o.preventDefault();
            p.state.listboxState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open ? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>p.actions.closeListbox()), (k = p.state.buttonElement) == null || k.focus({
                preventScroll: !0
            })) : (o.preventDefault(), p.actions.openListbox({
                focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
            }));
        }
    }), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        d.current = o.pointerType, o.pointerType === "mouse" && F(o);
    }), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        d.current !== "mouse" && F(o);
    }), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>o.preventDefault()), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])([
        _
    ]), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescribedBy"])(), { isFocusVisible: I, focusProps: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: T
    }), { isHovered: x, hoverProps: G } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: i
    }), { pressed: K, pressProps: v } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: i
    }), z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: a === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open,
            active: K || a === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open,
            disabled: i,
            invalid: l.invalid,
            value: l.value,
            hover: x,
            focus: I,
            autofocus: T
        }), [
        a,
        l.value,
        i,
        x,
        I,
        K,
        l.invalid,
        T
    ]), W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(p, (o)=>o.listboxState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open), X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(b(), {
        ref: m,
        id: _,
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveButtonType"])(P, t),
        "aria-haspopup": "listbox",
        "aria-controls": s == null ? void 0 : s.id,
        "aria-expanded": W,
        "aria-labelledby": H,
        "aria-describedby": w,
        disabled: i || void 0,
        autoFocus: T,
        onKeyDown: g,
        onKeyUp: N,
        onKeyPress: B,
        onPointerDown: L,
        onClick: y
    }, r, G, v);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: X,
        theirProps: n,
        slot: z,
        defaultTag: ht,
        name: "Listbox.Button"
    });
}
let Le = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(!1), Dt = "div", At = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].Static;
function St(P, D) {
    let O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: u = "headlessui-listbox-options-".concat(O), anchor: l, portal: p = !1, modal: _ = !0, transition: i = !1, ...T } = P, n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedAnchor"])(l), [m, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    n && (p = !0);
    let a = ee("Listbox.Options"), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListboxMachineContext"])("Listbox.Options"), [s, A, g, N] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(t, (e)=>[
            e.listboxState,
            e.buttonElement,
            e.optionsElement,
            e.__demoMode
        ]), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(A), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(g), L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])(), [y, B] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])(i, m, L !== null ? (L & __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open : s === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnDisappear"])(y, A, t.actions.closeListbox);
    let H = N ? !1 : _ && s === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollLock"])(H, d);
    let w = N ? !1 : _ && s === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$inert$2d$others$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInertOthers"])(w, {
        allowed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>[
                A,
                g
            ], [
            A,
            g
        ])
    });
    let I = s !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open, x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$did$2d$element$2d$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDidElementMove"])(I, A) ? !1 : y, G = y && s === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Closed, K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$frozen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFrozenData"])(G, a.value), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>a.compare(K, e)), z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(t, (e)=>{
        var J;
        if (n == null || !((J = n == null ? void 0 : n.to) != null && J.includes("selection"))) return null;
        let S = e.options.findIndex((pe)=>v(pe.dataRef.current.value));
        return S === -1 && (S = 0), S;
    }), W = (()=>{
        if (n == null) return;
        if (z === null) return {
            ...n,
            inner: void 0
        };
        let e = Array.from(a.listRef.current.values());
        return {
            ...n,
            inner: {
                listRef: {
                    current: e
                },
                index: z
            }
        };
    })(), [X, te] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingPanel"])(W), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingPanelProps"])(), k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(D, n ? X : null, t.actions.setOptionsElement, b), oe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var S;
        let e = g;
        e && s === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open && e !== ((S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(e)) == null ? void 0 : S.activeElement) && (e == null || e.focus({
            preventScroll: !0
        }));
    }, [
        s,
        g
    ]);
    let E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        var S, J;
        switch(oe.dispose(), e.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
                if (t.state.searchQuery !== "") return e.preventDefault(), e.stopPropagation(), t.actions.search(e.key);
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                if (e.preventDefault(), e.stopPropagation(), t.state.activeOptionIndex !== null) {
                    let { dataRef: pe } = t.state.options[t.state.activeOptionIndex];
                    t.actions.onChange(pe.current.value);
                }
                a.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>t.actions.closeListbox()), (S = t.state.buttonElement) == null || S.focus({
                    preventScroll: !0
                }));
                break;
            case (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(a.orientation, {
                vertical: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowDown,
                horizontal: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowRight
            }):
                return e.preventDefault(), e.stopPropagation(), t.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next
                });
            case (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(a.orientation, {
                vertical: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowUp,
                horizontal: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowLeft
            }):
                return e.preventDefault(), e.stopPropagation(), t.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Home:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageUp:
                return e.preventDefault(), e.stopPropagation(), t.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].End:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageDown:
                return e.preventDefault(), e.stopPropagation(), t.actions.goToOption({
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Escape:
                e.preventDefault(), e.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>t.actions.closeListbox()), (J = t.state.buttonElement) == null || J.focus({
                    preventScroll: !0
                });
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Tab:
                e.preventDefault(), e.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>t.actions.closeListbox()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusFrom"])(t.state.buttonElement, e.shiftKey ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next);
                break;
            default:
                e.key.length === 1 && (t.actions.search(e.key), oe.setTimeout(()=>t.actions.clearSearch(), 350));
                break;
        }
    }), j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(t, (e)=>{
        var S;
        return (S = e.buttonElement) == null ? void 0 : S.id;
    }), Pe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: s === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open
        }), [
        s
    ]), ge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(n ? o() : {}, {
        id: u,
        ref: k,
        "aria-activedescendant": (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(t, t.selectors.activeDescendantId),
        "aria-multiselectable": a.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Multi ? !0 : void 0,
        "aria-labelledby": j,
        "aria-orientation": a.orientation,
        onKeyDown: E,
        role: "listbox",
        tabIndex: s === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxStates"].Open ? 0 : void 0,
        style: {
            ...T.style,
            ...te,
            "--button-width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$element$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementSize"])(A, !0).width
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionDataAttributes"])(B)
    }), ve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])(), Ee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>a.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Multi ? a : {
            ...a,
            isSelected: v
        }, [
        a,
        v
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        enabled: p ? P.static || y : !1,
        ownerDocument: F
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(se.Provider, {
        value: Ee
    }, ve({
        ourProps: ge,
        theirProps: T,
        slot: Pe,
        defaultTag: Dt,
        features: At,
        visible: x,
        name: "Listbox.Options"
    })));
}
let _t = "div";
function Ft(P, D) {
    let O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: u = "headlessui-listbox-option-".concat(O), disabled: l = !1, value: p, ..._ } = P, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Le) === !0, T = ee("Listbox.Option"), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListboxMachineContext"])("Listbox.Option"), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(n, (r)=>n.selectors.isActive(r, u)), b = T.isSelected(p), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$text$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextValue"])(a), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])({
        disabled: l,
        value: p,
        domRef: a,
        get textValue () {
            return t();
        }
    }), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(D, a, (r)=>{
        r ? T.listRef.current.set(u, r) : T.listRef.current.delete(u);
    }), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(n, (r)=>n.selectors.shouldScrollIntoView(r, u));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (g) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])().requestAnimationFrame(()=>{
            var r, x;
            (x = (r = a.current) == null ? void 0 : r.scrollIntoView) == null || x.call(r, {
                block: "nearest"
            });
        });
    }, [
        g,
        a
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (!i) return n.actions.registerOption(u, s), ()=>n.actions.unregisterOption(u);
    }, [
        s,
        u,
        i
    ]);
    let N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>{
        var x;
        if (l) return r.preventDefault();
        n.actions.onChange(p), T.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Single && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>n.actions.closeListbox()), (x = n.state.buttonElement) == null || x.focus({
            preventScroll: !0
        }));
    }), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        if (l) return n.actions.goToOption({
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
        });
        n.actions.goToOption({
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific,
            id: u
        });
    }), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tracked$2d$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrackedPointer"])(), L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>d.update(r)), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>{
        d.wasMoved(r) && (l || m && n.state.activationTrigger === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer || n.actions.goToOption({
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific,
            id: u
        }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer));
    }), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>{
        d.wasMoved(r) && (l || m && n.state.activationTrigger === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer && n.actions.goToOption({
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
        }));
    }), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            active: m,
            focus: m,
            selected: b,
            disabled: l,
            selectedOption: b && i
        }), [
        m,
        b,
        l,
        i
    ]), w = i ? {} : {
        id: u,
        ref: A,
        role: "option",
        tabIndex: l === !0 ? void 0 : -1,
        "aria-disabled": l === !0 ? !0 : void 0,
        "aria-selected": b,
        disabled: void 0,
        onClick: N,
        onFocus: F,
        onPointerEnter: L,
        onMouseEnter: L,
        onPointerMove: y,
        onMouseMove: y,
        onPointerLeave: B,
        onMouseLeave: B
    }, I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return !b && i ? null : I({
        ourProps: w,
        theirProps: _,
        slot: H,
        defaultTag: _t,
        name: "Listbox.Option"
    });
}
let Ct = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
function Mt(P, D) {
    let { options: O, placeholder: u, ...l } = P, _ = {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(D)
    }, i = ee("ListboxSelectedOption"), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({}), []), n = i.value === void 0 || i.value === null || i.mode === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueMode"].Multi && Array.isArray(i.value) && i.value.length === 0, m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Le.Provider, {
        value: !0
    }, m({
        ourProps: _,
        theirProps: {
            ...l,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, u && n ? u : O)
        },
        slot: T,
        defaultTag: Ct,
        name: "ListboxSelectedOption"
    }));
}
let wt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Et), Bt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Rt), It = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], kt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(St), Ut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ft), Nt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Mt), Io = Object.assign(wt, {
    Button: Bt,
    Label: It,
    Options: kt,
    Option: Ut,
    SelectedOption: Nt
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/menu/menu-machine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionTypes",
    ()=>F,
    "ActivationTrigger",
    ()=>O,
    "MenuMachine",
    ()=>x,
    "MenuState",
    ()=>E
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/calculate-active-index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var h = Object.defineProperty;
var y = (e, i, t)=>i in e ? h(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[i] = t;
var g = (e, i, t)=>(y(e, typeof i != "symbol" ? i + "" : i, t), t);
;
;
;
;
;
var E = ((t)=>(t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(E || {}), O = ((t)=>(t[t.Pointer = 0] = "Pointer", t[t.Other = 1] = "Other", t))(O || {}), F = ((r)=>(r[r.OpenMenu = 0] = "OpenMenu", r[r.CloseMenu = 1] = "CloseMenu", r[r.GoToItem = 2] = "GoToItem", r[r.Search = 3] = "Search", r[r.ClearSearch = 4] = "ClearSearch", r[r.RegisterItems = 5] = "RegisterItems", r[r.UnregisterItems = 6] = "UnregisterItems", r[r.SetButtonElement = 7] = "SetButtonElement", r[r.SetItemsElement = 8] = "SetItemsElement", r[r.SortItems = 9] = "SortItems", r))(F || {});
function S(e) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (t)=>t;
    let t = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(i(e.items.slice()), (l)=>l.dataRef.current.domRef.current), s = t ? n.indexOf(t) : null;
    return s === -1 && (s = null), {
        items: n,
        activeItemIndex: s
    };
}
let D = {
    [1] (e) {
        return e.menuState === 1 ? e : {
            ...e,
            activeItemIndex: null,
            pendingFocus: {
                focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
            },
            menuState: 1
        };
    },
    [0] (e, i) {
        return e.menuState === 0 ? e : {
            ...e,
            __demoMode: !1,
            pendingFocus: i.focus,
            menuState: 0
        };
    },
    [2]: (e, i)=>{
        var l, o, d, a, I;
        if (e.menuState === 1) return e;
        let t = {
            ...e,
            searchQuery: "",
            activationTrigger: (l = i.trigger) != null ? l : 1,
            __demoMode: !1
        };
        if (i.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing) return {
            ...t,
            activeItemIndex: null
        };
        if (i.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific) return {
            ...t,
            activeItemIndex: e.items.findIndex((r)=>r.id === i.id)
        };
        if (i.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous) {
            let r = e.activeItemIndex;
            if (r !== null) {
                let p = e.items[r].dataRef.current.domRef, m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(i, {
                    resolveItems: ()=>e.items,
                    resolveActiveIndex: ()=>e.activeItemIndex,
                    resolveId: (u)=>u.id,
                    resolveDisabled: (u)=>u.dataRef.current.disabled
                });
                if (m !== null) {
                    let u = e.items[m].dataRef.current.domRef;
                    if (((o = p.current) == null ? void 0 : o.previousElementSibling) === u.current || ((d = u.current) == null ? void 0 : d.previousElementSibling) === null) return {
                        ...t,
                        activeItemIndex: m
                    };
                }
            }
        } else if (i.focus === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next) {
            let r = e.activeItemIndex;
            if (r !== null) {
                let p = e.items[r].dataRef.current.domRef, m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(i, {
                    resolveItems: ()=>e.items,
                    resolveActiveIndex: ()=>e.activeItemIndex,
                    resolveId: (u)=>u.id,
                    resolveDisabled: (u)=>u.dataRef.current.disabled
                });
                if (m !== null) {
                    let u = e.items[m].dataRef.current.domRef;
                    if (((a = p.current) == null ? void 0 : a.nextElementSibling) === u.current || ((I = u.current) == null ? void 0 : I.nextElementSibling) === null) return {
                        ...t,
                        activeItemIndex: m
                    };
                }
            }
        }
        let n = S(e), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(i, {
            resolveItems: ()=>n.items,
            resolveActiveIndex: ()=>n.activeItemIndex,
            resolveId: (r)=>r.id,
            resolveDisabled: (r)=>r.dataRef.current.disabled
        });
        return {
            ...t,
            ...n,
            activeItemIndex: s
        };
    },
    [3]: (e, i)=>{
        let n = e.searchQuery !== "" ? 0 : 1, s = e.searchQuery + i.value.toLowerCase(), o = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((a)=>{
            var I;
            return ((I = a.dataRef.current.textValue) == null ? void 0 : I.startsWith(s)) && !a.dataRef.current.disabled;
        }), d = o ? e.items.indexOf(o) : -1;
        return d === -1 || d === e.activeItemIndex ? {
            ...e,
            searchQuery: s
        } : {
            ...e,
            searchQuery: s,
            activeItemIndex: d,
            activationTrigger: 1
        };
    },
    [4] (e) {
        return e.searchQuery === "" ? e : {
            ...e,
            searchQuery: "",
            searchActiveItemIndex: null
        };
    },
    [5]: (e, i)=>{
        let t = e.items.concat(i.items.map((s)=>s)), n = e.activeItemIndex;
        return e.pendingFocus.focus !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing && (n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateActiveIndex"])(e.pendingFocus, {
            resolveItems: ()=>t,
            resolveActiveIndex: ()=>e.activeItemIndex,
            resolveId: (s)=>s.id,
            resolveDisabled: (s)=>s.dataRef.current.disabled
        })), {
            ...e,
            items: t,
            activeItemIndex: n,
            pendingFocus: {
                focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
            },
            pendingShouldSort: !0
        };
    },
    [6]: (e, i)=>{
        let t = e.items, n = [], s = new Set(i.items);
        for (let [l, o] of t.entries())if (s.has(o.id) && (n.push(l), s.delete(o.id), s.size === 0)) break;
        if (n.length > 0) {
            t = t.slice();
            for (let l of n.reverse())t.splice(l, 1);
        }
        return {
            ...e,
            items: t,
            activationTrigger: 1
        };
    },
    [7]: (e, i)=>e.buttonElement === i.element ? e : {
            ...e,
            buttonElement: i.element
        },
    [8]: (e, i)=>e.itemsElement === i.element ? e : {
            ...e,
            itemsElement: i.element
        },
    [9]: (e)=>e.pendingShouldSort ? {
            ...e,
            ...S(e),
            pendingShouldSort: !1
        } : e
};
class x extends __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Machine"] {
    static new(param) {
        let { id: t, __demoMode: n = !1 } = param;
        return new x({
            id: t,
            __demoMode: n,
            menuState: n ? 0 : 1,
            buttonElement: null,
            itemsElement: null,
            items: [],
            searchQuery: "",
            activeItemIndex: null,
            activationTrigger: 1,
            pendingShouldSort: !1,
            pendingFocus: {
                focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
            }
        });
    }
    reduce(t, n) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(n.type, D, t, n);
    }
    constructor(t){
        super(t);
        g(this, "actions", {
            registerItem: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                let t = [], n = new Set;
                return [
                    (s, l)=>{
                        n.has(l) || (n.add(l), t.push({
                            id: s,
                            dataRef: l
                        }));
                    },
                    ()=>(n.clear(), this.send({
                            type: 5,
                            items: t.splice(0)
                        }))
                ];
            }),
            unregisterItem: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batch"])(()=>{
                let t = [];
                return [
                    (n)=>t.push(n),
                    ()=>this.send({
                            type: 6,
                            items: t.splice(0)
                        })
                ];
            })
        });
        g(this, "selectors", {
            activeDescendantId (t) {
                var l;
                let n = t.activeItemIndex, s = t.items;
                return n === null || (l = s[n]) == null ? void 0 : l.id;
            },
            isActive (t, n) {
                var o;
                let s = t.activeItemIndex, l = t.items;
                return s !== null ? ((o = l[s]) == null ? void 0 : o.id) === n : !1;
            },
            shouldScrollIntoView (t, n) {
                return t.__demoMode || t.menuState !== 0 || t.activationTrigger === 0 ? !1 : this.isActive(t, n);
            }
        });
        this.on(5, ()=>{
            this.disposables.requestAnimationFrame(()=>{
                this.send({
                    type: 9
                });
            });
        });
        {
            let n = this.state.id, s = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackMachines"].get(null);
            this.disposables.add(s.on(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].Push, (l)=>{
                !s.selectors.isTop(l, n) && this.state.menuState === 0 && this.send({
                    type: 1
                });
            })), this.on(0, ()=>s.actions.push(n)), this.on(1, ()=>s.actions.pop(n));
        }
    }
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/menu/menu-machine-glue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuContext",
    ()=>a,
    "useMenuMachine",
    ()=>s,
    "useMenuMachineContext",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-unmount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/menu/menu-machine.js [app-client] (ecmascript)");
;
;
;
const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function p(t) {
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(a);
    if (n === null) {
        let e = new Error("<".concat(t, " /> is missing a parent <Menu /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(e, s), e;
    }
    return n;
}
function s(param) {
    let { id: t, __demoMode: n = !1 } = param;
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuMachine"].new({
            id: t,
            __demoMode: n
        }), []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnUnmount"])(()=>e.dispose()), e;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/menu/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>io,
    "MenuButton",
    ()=>Pt,
    "MenuHeading",
    ()=>bt,
    "MenuItem",
    ()=>gt,
    "MenuItems",
    ()=>Et,
    "MenuSection",
    ()=>Mt,
    "MenuSeparator",
    ()=>At
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$did$2d$element$2d$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-did-element-move.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$element$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-element-size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$inert$2d$others$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-inert-others.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-disappear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-outside-click.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-quick-release.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$text$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-text-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tracked$2d$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tree$2d$walker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tree-walker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/floating.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/open-closed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/react-glue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/bugs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/calculate-active-index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$mouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/mouse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/portal/portal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/menu/menu-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/menu/menu-machine-glue.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let tt = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
function ot(f, g) {
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { __demoMode: s = !1, ...l } = f, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuMachine"])({
        id: p,
        __demoMode: s
    }), [n, A, E] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(a, (y)=>[
            y.menuState,
            y.itemsElement,
            y.buttonElement
        ]), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(g), o = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackMachines"].get(null), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((y)=>o.selectors.isTop(y, p), [
        o,
        p
    ]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutsideClick"])(F, [
        E,
        A
    ], (y, u)=>{
        var P;
        a.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFocusableElement"])(u, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusableMode"].Loose) || (y.preventDefault(), (P = a.state.buttonElement) == null || P.focus());
    });
    let _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        a.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
        });
    }), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: n === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open,
            close: _
        }), [
        n,
        _
    ]), m = {
        ref: R
    }, b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContext"].Provider, {
        value: a
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenClosedProvider"], {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(n, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open,
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Closed]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Closed
        })
    }, b({
        ourProps: m,
        theirProps: l,
        slot: M,
        defaultTag: tt,
        name: "Menu"
    }))));
}
let nt = "button";
function rt(f, g) {
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuMachineContext"])("Menu.Button"), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: l = "headlessui-menu-button-".concat(s), disabled: a = !1, autoFocus: n = !1, ...A } = f, E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingReferenceProps"])(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(g, E, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingReference"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>p.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].SetButtonElement,
            element: t
        }))), F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        switch(t.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowDown:
                t.preventDefault(), t.stopPropagation(), p.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].OpenMenu,
                    focus: {
                        focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First
                    }
                });
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowUp:
                t.preventDefault(), t.stopPropagation(), p.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].OpenMenu,
                    focus: {
                        focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last
                    }
                });
                break;
        }
    }), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        switch(t.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
                t.preventDefault();
                break;
        }
    }), [M, m, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(p, (t)=>[
            t.menuState,
            t.buttonElement,
            t.itemsElement
        ]), y = M === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickRelease"])(y, {
        trigger: m,
        action: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>{
            if (m != null && m.contains(t.target)) return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Ignore;
            let C = t.target.closest('[role="menuitem"]:not([data-disabled])');
            return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](C) ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Select(C) : b != null && b.contains(t.target) ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Ignore : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$quick$2d$release$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].Close;
        }, [
            m,
            b
        ]),
        close: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>p.send({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
            }), []),
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((t)=>t.click(), [])
    });
    let u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        var C;
        if (t.button === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$mouse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MouseButton"].Left) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(t.currentTarget)) return t.preventDefault();
            a || (M === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open ? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>p.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
                })), (C = E.current) == null || C.focus({
                preventScroll: !0
            })) : (t.preventDefault(), p.send({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].OpenMenu,
                focus: {
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
                },
                trigger: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer
            })));
        }
    }), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        P.current = t.pointerType, t.pointerType === "mouse" && u(t);
    }), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((t)=>{
        P.current !== "mouse" && u(t);
    }), { isFocusVisible: h, focusProps: x } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: n
    }), { isHovered: U, hoverProps: G } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: a
    }), { pressed: k, pressProps: N } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: a
    }), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: M === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open,
            active: k || M === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open,
            disabled: a,
            hover: U,
            focus: h,
            autofocus: n
        }), [
        M,
        U,
        h,
        k,
        a,
        n
    ]), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(R(), {
        ref: o,
        id: l,
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveButtonType"])(f, E.current),
        "aria-haspopup": "menu",
        "aria-controls": b == null ? void 0 : b.id,
        "aria-expanded": M === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open,
        disabled: a || void 0,
        autoFocus: n,
        onKeyDown: F,
        onKeyUp: _,
        onPointerDown: H,
        onClick: S
    }, x, G, N);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: B,
        theirProps: A,
        slot: i,
        defaultTag: nt,
        name: "Menu.Button"
    });
}
let at = "div", st = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].Static;
function lt(f, g) {
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: s = "headlessui-menu-items-".concat(p), anchor: l, portal: a = !1, modal: n = !0, transition: A = !1, ...E } = f, R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedAnchor"])(l), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuMachineContext"])("Menu.Items"), [F, _] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingPanel"])(R), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingPanelProps"])(), [m, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(g, R ? F : null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>o.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].SetItemsElement,
            element: e
        })), b), [u, P] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, (e)=>[
            e.menuState,
            e.buttonElement
        ]), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(P), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(m);
    R && (a = !0);
    let h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])(), [x, U] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])(A, m, h !== null ? (h & __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open : u === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnDisappear"])(x, P, ()=>{
        o.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
        });
    });
    let G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, (e)=>e.__demoMode), k = G ? !1 : n && u === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollLock"])(k, S);
    let N = G ? !1 : n && u === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$inert$2d$others$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInertOthers"])(N, {
        allowed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>[
                P,
                m
            ], [
            P,
            m
        ])
    });
    let i = u !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open, Z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$did$2d$element$2d$move$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDidElementMove"])(i, P) ? !1 : x;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let e = m;
        e && u === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open && e !== (S == null ? void 0 : S.activeElement) && e.focus({
            preventScroll: !0
        });
    }, [
        u,
        m,
        S
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tree$2d$walker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTreeWalker"])(u === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open, {
        container: m,
        accept (e) {
            return e.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
        },
        walk (e) {
            e.setAttribute("role", "none");
        }
    });
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])(), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        var w, ee, te;
        switch(t.dispose(), e.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
                if (o.state.searchQuery !== "") return e.preventDefault(), e.stopPropagation(), o.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].Search,
                    value: e.key
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                if (e.preventDefault(), e.stopPropagation(), o.state.activeItemIndex !== null) {
                    let { dataRef: ce } = o.state.items[o.state.activeItemIndex];
                    (ee = (w = ce.current) == null ? void 0 : w.domRef.current) == null || ee.click();
                }
                o.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
                }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreFocusIfNecessary"])(o.state.buttonElement);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowDown:
                return e.preventDefault(), e.stopPropagation(), o.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].GoToItem,
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowUp:
                return e.preventDefault(), e.stopPropagation(), o.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].GoToItem,
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Home:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageUp:
                return e.preventDefault(), e.stopPropagation(), o.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].GoToItem,
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].End:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageDown:
                return e.preventDefault(), e.stopPropagation(), o.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].GoToItem,
                    focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last
                });
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Escape:
                e.preventDefault(), e.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>o.send({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
                    })), (te = o.state.buttonElement) == null || te.focus({
                    preventScroll: !0
                });
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Tab:
                e.preventDefault(), e.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>o.send({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
                    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusFrom"])(o.state.buttonElement, e.shiftKey ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next);
                break;
            default:
                e.key.length === 1 && (o.send({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].Search,
                    value: e.key
                }), t.setTimeout(()=>o.send({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].ClearSearch
                    }), 350));
                break;
        }
    }), ie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        switch(e.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
                e.preventDefault();
                break;
        }
    }), ue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: u === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open
        }), [
        u
    ]), me = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(R ? M() : {}, {
        "aria-activedescendant": (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, o.selectors.activeDescendantId),
        "aria-labelledby": (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, (e)=>{
            var w;
            return (w = e.buttonElement) == null ? void 0 : w.id;
        }),
        id: s,
        onKeyDown: C,
        onKeyUp: ie,
        role: "menu",
        tabIndex: u === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuState"].Open ? 0 : void 0,
        ref: y,
        style: {
            ...E.style,
            ..._,
            "--button-width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$element$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementSize"])(P, !0).width
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionDataAttributes"])(U)
    }), de = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        enabled: a ? f.static || x : !1,
        ownerDocument: H
    }, de({
        ourProps: me,
        theirProps: E,
        slot: ue,
        defaultTag: at,
        features: st,
        visible: Z,
        name: "Menu.Items"
    }));
}
let pt = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
function it(f, g) {
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: s = "headlessui-menu-item-".concat(p), disabled: l = !1, ...a } = f, n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuMachineContext"])("Menu.Item"), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(n, (i)=>n.selectors.isActive(i, s)), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(g, E), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(n, (i)=>n.selectors.shouldScrollIntoView(i, s));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (o) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposables"])().requestAnimationFrame(()=>{
            var i, B;
            (B = (i = E.current) == null ? void 0 : i.scrollIntoView) == null || B.call(i, {
                block: "nearest"
            });
        });
    }, [
        o,
        E
    ]);
    let F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$text$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTextValue"])(E), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        disabled: l,
        domRef: E,
        get textValue () {
            return F();
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        _.current.disabled = l;
    }, [
        _,
        l
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>(n.actions.registerItem(s, _), ()=>n.actions.unregisterItem(s)), [
        _,
        s
    ]);
    let M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        n.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
        });
    }), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        if (l) return i.preventDefault();
        n.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].CloseMenu
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreFocusIfNecessary"])(n.state.buttonElement);
    }), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        if (l) return n.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].GoToItem,
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
        });
        n.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].GoToItem,
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific,
            id: s
        });
    }), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tracked$2d$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrackedPointer"])(), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>y.update(i)), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        y.wasMoved(i) && (l || A || n.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].GoToItem,
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Specific,
            id: s,
            trigger: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer
        }));
    }), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        y.wasMoved(i) && (l || A && n.state.activationTrigger === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivationTrigger"].Pointer && n.send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionTypes"].GoToItem,
            focus: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$calculate$2d$active$2d$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Nothing
        }));
    }), [S, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])(), [x, U] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescriptions"])(), G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            active: A,
            focus: A,
            disabled: l,
            close: M
        }), [
        A,
        l,
        M
    ]), k = {
        id: s,
        ref: R,
        role: "menuitem",
        tabIndex: l === !0 ? void 0 : -1,
        "aria-disabled": l === !0 ? !0 : void 0,
        "aria-labelledby": S,
        "aria-describedby": x,
        disabled: void 0,
        onClick: m,
        onFocus: b,
        onPointerEnter: u,
        onMouseEnter: u,
        onPointerMove: P,
        onMouseMove: P,
        onPointerLeave: H,
        onMouseLeave: H
    }, N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(h, null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(U, null, N({
        ourProps: k,
        theirProps: a,
        slot: G,
        defaultTag: pt,
        name: "Menu.Item"
    })));
}
let ut = "div";
function mt(f, g) {
    let [p, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])(), l = f, a = {
        ref: g,
        "aria-labelledby": p,
        role: "group"
    }, n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(s, null, n({
        ourProps: a,
        theirProps: l,
        slot: {},
        defaultTag: ut,
        name: "Menu.Section"
    }));
}
let dt = "header";
function ct(f, g) {
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: s = "headlessui-menu-heading-".concat(p), ...l } = f, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>a.register(s), [
        s,
        a.register
    ]);
    let n = {
        id: s,
        ref: g,
        role: "presentation",
        ...a.props
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: n,
        theirProps: l,
        slot: {},
        defaultTag: dt,
        name: "Menu.Heading"
    });
}
let Tt = "div";
function ft(f, g) {
    let p = f, s = {
        ref: g,
        role: "separator"
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: s,
        theirProps: p,
        slot: {},
        defaultTag: Tt,
        name: "Menu.Separator"
    });
}
let yt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(ot), Pt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(rt), Et = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(lt), gt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(it), Mt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(mt), bt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(ct), At = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(ft), io = Object.assign(yt, {
    Button: Pt,
    Items: Et,
    Item: gt,
    Section: Mt,
    Heading: bt,
    Separator: At
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/popover/popover-machine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionTypes",
    ()=>M,
    "PopoverMachine",
    ()=>i,
    "PopoverStates",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/machines/stack-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var S = Object.defineProperty;
var f = (t, n, e)=>n in t ? S(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : t[n] = e;
var p = (t, n, e)=>(f(t, typeof n != "symbol" ? n + "" : n, e), e);
;
;
;
;
;
var I = ((e)=>(e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(I || {}), M = ((l)=>(l[l.OpenPopover = 0] = "OpenPopover", l[l.ClosePopover = 1] = "ClosePopover", l[l.SetButton = 2] = "SetButton", l[l.SetButtonId = 3] = "SetButtonId", l[l.SetPanel = 4] = "SetPanel", l[l.SetPanelId = 5] = "SetPanelId", l))(M || {});
let T = {
    [0]: (t)=>t.popoverState === 0 ? t : {
            ...t,
            popoverState: 0,
            __demoMode: !1
        },
    [1] (t) {
        return t.popoverState === 1 ? t : {
            ...t,
            popoverState: 1,
            __demoMode: !1
        };
    },
    [2] (t, n) {
        return t.button === n.button ? t : {
            ...t,
            button: n.button
        };
    },
    [3] (t, n) {
        return t.buttonId === n.buttonId ? t : {
            ...t,
            buttonId: n.buttonId
        };
    },
    [4] (t, n) {
        return t.panel === n.panel ? t : {
            ...t,
            panel: n.panel
        };
    },
    [5] (t, n) {
        return t.panelId === n.panelId ? t : {
            ...t,
            panelId: n.panelId
        };
    }
};
class i extends __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Machine"] {
    static new(param) {
        let { id: e, __demoMode: o = !1 } = param;
        return new i({
            id: e,
            __demoMode: o,
            popoverState: o ? 0 : 1,
            buttons: {
                current: []
            },
            button: null,
            buttonId: null,
            panel: null,
            panelId: null,
            beforePanelSentinel: {
                current: null
            },
            afterPanelSentinel: {
                current: null
            },
            afterButtonSentinel: {
                current: null
            }
        });
    }
    reduce(e, o) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(o.type, T, e, o);
    }
    constructor(e){
        super(e);
        p(this, "actions", {
            close: ()=>this.send({
                    type: 1
                }),
            refocusableClose: (e)=>{
                this.actions.close();
                let o = (()=>e ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](e) ? e : "current" in e && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](e.current) ? e.current : this.state.button : this.state.button)();
                o == null || o.focus();
            },
            open: ()=>this.send({
                    type: 0
                }),
            setButtonId: (e)=>this.send({
                    type: 3,
                    buttonId: e
                }),
            setButton: (e)=>this.send({
                    type: 2,
                    button: e
                }),
            setPanelId: (e)=>this.send({
                    type: 5,
                    panelId: e
                }),
            setPanel: (e)=>this.send({
                    type: 4,
                    panel: e
                })
        });
        p(this, "selectors", {
            isPortalled: (e)=>{
                if (!e.button || !e.panel) return !1;
                for (let r of document.querySelectorAll("body > *"))if (Number(r == null ? void 0 : r.contains(e.button)) ^ Number(r == null ? void 0 : r.contains(e.panel))) return !0;
                let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusableElements"])(), u = o.indexOf(e.button), a = (u + o.length - 1) % o.length, l = (u + 1) % o.length, d = o[a], c = o[l];
                return !e.panel.contains(d) && !e.panel.contains(c);
            }
        });
        {
            let o = this.state.id, u = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$machines$2f$stack$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stackMachines"].get(null);
            this.on(0, ()=>u.actions.push(o)), this.on(1, ()=>u.actions.pop(o));
        }
    }
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/popover/popover-machine-glue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopoverContext",
    ()=>a,
    "usePopoverMachine",
    ()=>f,
    "usePopoverMachineContext",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-unmount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/popover/popover-machine.js [app-client] (ecmascript)");
;
;
;
const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function u(r) {
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(a);
    if (o === null) {
        let e = new Error("<".concat(r, " /> is missing a parent <Popover /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(e, u), e;
    }
    return o;
}
function f(param) {
    let { id: r, __demoMode: o = !1 } = param;
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverMachine"].new({
            id: r,
            __demoMode: o
        }), []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$unmount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnUnmount"])(()=>e.dispose()), e;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/popover/popover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>io,
    "PopoverBackdrop",
    ()=>_t,
    "PopoverButton",
    ()=>Ft,
    "PopoverGroup",
    ()=>Ct,
    "PopoverOverlay",
    ()=>Bt,
    "PopoverPanel",
    ()=>At
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$element$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-element-size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event-listener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-on-disappear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-outside-click.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-root-containers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-tab-direction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$close$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/close-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/floating.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/hidden.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/open-closed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/react-glue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/bugs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/portal/portal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/popover/popover-machine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/popover/popover-machine-glue.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let ge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
ge.displayName = "PopoverGroupContext";
function Ge() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ge);
}
let fe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
fe.displayName = "PopoverPanelContext";
function ut() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(fe);
}
let ct = "div";
function dt(b, M) {
    var k;
    let F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { __demoMode: B = !1, ...d } = b, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverMachine"])({
        id: F,
        __demoMode: B
    }), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(M, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optionalRef"])((n)=>{
        g.current = n;
    })), [_, f, o, O, E] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((n)=>[
            n.popoverState,
            n.button,
            n.panel,
            n.buttonId,
            n.panelId
        ], [])), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])((k = g.current) != null ? k : f), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(O), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(E), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            buttonId: A,
            panelId: a,
            close: r.actions.close
        }), [
        A,
        a,
        r
    ]), u = Ge(), l = u == null ? void 0 : u.registerPopover, v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        var n;
        return (n = u == null ? void 0 : u.isFocusWithinPopoverGroup()) != null ? n : (P == null ? void 0 : P.activeElement) && ((f == null ? void 0 : f.contains(P.activeElement)) || (o == null ? void 0 : o.contains(P.activeElement)));
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>l == null ? void 0 : l(i), [
        l,
        i
    ]);
    let [m, j] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNestedPortals"])(), $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMainTreeNode"])(f), J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContainers"])({
        mainTreeNode: $,
        portals: m,
        defaultContainers: [
            {
                get current () {
                    return r.state.button;
                }
            },
            {
                get current () {
                    return r.state.panel;
                }
            }
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2d$listener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventListener"])(P == null ? void 0 : P.defaultView, "focus", (n)=>{
        var D, z, G, U, L, N;
        n.target !== window && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLorSVGElement"](n.target) && r.state.popoverState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open && (v() || r.state.button && r.state.panel && (J.contains(n.target) || (z = (D = r.state.beforePanelSentinel.current) == null ? void 0 : D.contains) != null && z.call(D, n.target) || (U = (G = r.state.afterPanelSentinel.current) == null ? void 0 : G.contains) != null && U.call(G, n.target) || (N = (L = r.state.afterButtonSentinel.current) == null ? void 0 : L.contains) != null && N.call(L, n.target) || r.actions.close()));
    }, !0);
    let x = _ === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$outside$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutsideClick"])(x, J.resolveContainers, (n, D)=>{
        r.actions.close(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFocusableElement"])(D, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusableMode"].Loose) || (n.preventDefault(), f == null || f.focus());
    });
    let X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: _ === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open,
            close: r.actions.refocusableClose
        }), [
        _,
        r
    ]), te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(n.popoverState, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open,
            [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Closed]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Closed
        }), [])), q = {
        ref: t
    }, C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainTreeProvider"], {
        node: $
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(fe.Provider, {
        value: null
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContext"].Provider, {
        value: r
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$close$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseProvider"], {
        value: r.actions.refocusableClose
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenClosedProvider"], {
        value: te
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(j, null, C({
        ourProps: q,
        theirProps: d,
        slot: X,
        defaultTag: ct,
        name: "Popover"
    }))))))));
}
let ft = "button";
function Pt(b, M) {
    let F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: B = "headlessui-popover-button-".concat(F), disabled: d = !1, autoFocus: r = !1, ...g } = b, t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverMachineContext"])("Popover.Button"), [_, f, o, O, E, P, A] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((e)=>[
            e.popoverState,
            t.selectors.isPortalled(e),
            e.button,
            e.buttonId,
            e.panel,
            e.panelId,
            e.afterButtonSentinel
        ], [])), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), i = "headlessui-focus-sentinel-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])()), u = Ge(), l = u == null ? void 0 : u.closeOthers, m = ut() !== null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!m) return t.actions.setButtonId(B), ()=>t.actions.setButtonId(null);
    }, [
        m,
        B,
        t
    ]);
    let [j] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>Symbol()), $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(a, M, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingReference"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        if (!m) {
            if (e) t.state.buttons.current.push(j);
            else {
                let p = t.state.buttons.current.indexOf(j);
                p !== -1 && t.state.buttons.current.splice(p, 1);
            }
            t.state.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e && t.actions.setButton(e);
        }
    })), J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(a, M), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(a), X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        var p, h, S;
        if (m) {
            if (t.state.popoverState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Closed) return;
            switch(e.key){
                case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
                case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                    e.preventDefault(), (h = (p = e.target).click) == null || h.call(p), t.actions.close(), (S = t.state.button) == null || S.focus();
                    break;
            }
        } else switch(e.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                e.preventDefault(), e.stopPropagation(), t.state.popoverState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Closed ? (l == null || l(t.state.buttonId), t.actions.open()) : t.actions.close();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Escape:
                if (t.state.popoverState !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open) return l == null ? void 0 : l(t.state.buttonId);
                if (!a.current || x != null && x.activeElement && !a.current.contains(x.activeElement)) return;
                e.preventDefault(), e.stopPropagation(), t.actions.close();
                break;
        }
    }), te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        m || e.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space && e.preventDefault();
    }), q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        var p, h;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(e.currentTarget) || d || (m ? (t.actions.close(), (p = t.state.button) == null || p.focus()) : (e.preventDefault(), e.stopPropagation(), t.state.popoverState === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Closed ? (l == null || l(t.state.buttonId), t.actions.open()) : t.actions.close(), (h = t.state.button) == null || h.focus()));
    }), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        e.preventDefault(), e.stopPropagation();
    }), { isFocusVisible: k, focusProps: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: r
    }), { isHovered: D, hoverProps: z } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: d
    }), { pressed: G, pressProps: U } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: d
    }), L = _ === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open, N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: L,
            active: G || L,
            disabled: d,
            hover: D,
            focus: k,
            autofocus: r
        }), [
        L,
        D,
        k,
        G,
        d,
        r
    ]), ae = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveButtonType"])(b, o), Pe = m ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: J,
        type: ae,
        onKeyDown: X,
        onClick: q,
        disabled: d || void 0,
        autoFocus: r
    }, n, z, U) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: $,
        id: O,
        type: ae,
        "aria-expanded": _ === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open,
        "aria-controls": E ? P : void 0,
        disabled: d || void 0,
        autoFocus: r,
        onKeyDown: X,
        onKeyUp: te,
        onClick: q,
        onMouseDown: C
    }, n, z, U), se = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabDirection"])(), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](t.state.panel)) return;
        let e = t.state.panel;
        function p() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(se.current, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Forwards]: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(e, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First),
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Backwards]: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(e, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last)
            }) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusableElements"])().filter((S)=>S.dataset.headlessuiFocusGuard !== "true"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(se.current, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Forwards]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next,
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Backwards]: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous
            }), {
                relativeTo: t.state.button
            });
        }
        p();
    }), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, R({
        ourProps: Pe,
        theirProps: g,
        slot: N,
        defaultTag: ft,
        name: "Popover.Button"
    }), L && !m && f && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        id: i,
        ref: A,
        features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: s
    }));
}
let vt = "div", mt = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].Static;
function ke(b, M) {
    let F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: B = "headlessui-popover-backdrop-".concat(F), transition: d = !1, ...r } = b, g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverMachineContext"])("Popover.Backdrop"), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(g, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((l)=>l.popoverState, [])), [_, f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(M, f), O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])(), [E, P] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])(d, _, O !== null ? (O & __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open : t === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((l)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(l.currentTarget)) return l.preventDefault();
        g.actions.close();
    }), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: t === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open
        }), [
        t
    ]), i = {
        ref: o,
        id: B,
        "aria-hidden": !0,
        onClick: A,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionDataAttributes"])(P)
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: i,
        theirProps: r,
        slot: a,
        defaultTag: vt,
        features: mt,
        visible: E,
        name: "Popover.Backdrop"
    });
}
let Tt = "div", Et = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].Static;
function bt(b, M) {
    let F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: B = "headlessui-popover-panel-".concat(F), focus: d = !1, anchor: r, portal: g = !1, modal: t = !1, transition: _ = !1, ...f } = b, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverMachineContext"])("Popover.Panel"), O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, o.selectors.isPortalled), [E, P, A, a, i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$react$2d$glue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlice"])(o, (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((s)=>[
            s.popoverState,
            s.button,
            s.__demoMode,
            s.beforePanelSentinel,
            s.afterPanelSentinel
        ], [])), u = "headlessui-focus-sentinel-before-".concat(F), l = "headlessui-focus-sentinel-after-".concat(F), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedAnchor"])(r), [j, $] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingPanel"])(m), J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$floating$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingPanelProps"])();
    m && (g = !0);
    let [x, X] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(v, M, m ? j : null, o.actions.setPanel, X), q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(P), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOwnerDocument"])(v);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>(o.actions.setPanelId(B), ()=>o.actions.setPanelId(null)), [
        B,
        o
    ]);
    let k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenClosed"])(), [n, D] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])(_, x, k !== null ? (k & __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["State"].Open : E === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$on$2d$disappear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnDisappear"])(n, P, o.actions.close), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$scroll$2d$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollLock"])(A ? !1 : t && n, C);
    let G = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((s)=>{
        var R;
        switch(s.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Escape:
                if (o.state.popoverState !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open || !v.current || C != null && C.activeElement && !v.current.contains(C.activeElement)) return;
                s.preventDefault(), s.stopPropagation(), o.actions.close(), (R = o.state.button) == null || R.focus();
                break;
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var s;
        b.static || E === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Closed && ((s = b.unmount) == null || s) && o.actions.setPanel(null);
    }, [
        E,
        b.unmount,
        b.static,
        o
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (A || !d || E !== __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open || !v.current) return;
        let s = C == null ? void 0 : C.activeElement;
        v.current.contains(s) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(v.current, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First);
    }, [
        A,
        d,
        v.current,
        E
    ]);
    let U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            open: E === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open,
            close: o.actions.refocusableClose
        }), [
        E,
        o
    ]), L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(m ? J() : {}, {
        ref: te,
        id: B,
        onKeyDown: G,
        onBlur: d && E === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$popover$2f$popover$2d$machine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverStates"].Open ? (s)=>{
            var e, p, h, S, w;
            let R = s.relatedTarget;
            R && v.current && ((e = v.current) != null && e.contains(R) || (o.actions.close(), ((h = (p = a.current) == null ? void 0 : p.contains) != null && h.call(p, R) || (w = (S = i.current) == null ? void 0 : S.contains) != null && w.call(S, R)) && R.focus({
                preventScroll: !0
            })));
        } : void 0,
        tabIndex: -1,
        style: {
            ...f.style,
            ...$,
            "--button-width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$element$2d$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementSize"])(P, !0).width
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionDataAttributes"])(D)
    }), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTabDirection"])(), ae = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        let s = v.current;
        if (!s) return;
        function R() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(N.current, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Forwards]: ()=>{
                    var p;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(s, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Error && ((p = o.state.afterPanelSentinel.current) == null || p.focus());
                },
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Backwards]: ()=>{
                    var e;
                    (e = o.state.button) == null || e.focus({
                        preventScroll: !0
                    });
                }
            });
        }
        R();
    }), Pe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        let s = v.current;
        if (!s) return;
        function R() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(N.current, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Forwards]: ()=>{
                    if (!o.state.button) return;
                    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusableElements"])(), p = e.indexOf(o.state.button), h = e.slice(0, p + 1), w = [
                        ...e.slice(p + 1),
                        ...h
                    ];
                    for (let ve of w.slice())if (ve.dataset.headlessuiFocusGuard === "true" || x != null && x.contains(ve)) {
                        let Re = w.indexOf(ve);
                        Re !== -1 && w.splice(Re, 1);
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(w, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First, {
                        sorted: !1
                    });
                },
                [__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$tab$2d$direction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Direction"].Backwards]: ()=>{
                    var p;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(s, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Error && ((p = o.state.button) == null || p.focus());
                }
            });
        }
        R();
    }), se = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$open$2d$closed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResetOpenClosedProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(fe.Provider, {
        value: B
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$close$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseProvider"], {
        value: o.actions.refocusableClose
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$portal$2f$portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        enabled: g ? b.static || n : !1,
        ownerDocument: q
    }, n && O && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        id: u,
        ref: a,
        features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: ae
    }), se({
        ourProps: L,
        theirProps: f,
        slot: U,
        defaultTag: Tt,
        features: Et,
        visible: n,
        name: "Popover.Panel"
    }), n && O && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        id: l,
        ref: i,
        features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: Pe
    })))));
}
let yt = "div";
function gt(b, M) {
    let F = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(F, M), [d, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((a)=>{
        r((i)=>{
            let u = i.indexOf(a);
            if (u !== -1) {
                let l = i.slice();
                return l.splice(u, 1), l;
            }
            return i;
        });
    }), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((a)=>(r((i)=>[
                ...i,
                a
            ]), ()=>g(a))), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        var u;
        let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(F);
        if (!a) return !1;
        let i = a.activeElement;
        return (u = F.current) != null && u.contains(i) ? !0 : d.some((l)=>{
            var v, m;
            return ((v = a.getElementById(l.buttonId.current)) == null ? void 0 : v.contains(i)) || ((m = a.getElementById(l.panelId.current)) == null ? void 0 : m.contains(i));
        });
    }), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((a)=>{
        for (let i of d)i.buttonId.current !== a && i.close();
    }), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            registerPopover: t,
            unregisterPopover: g,
            isFocusWithinPopoverGroup: _,
            closeOthers: f
        }), [
        t,
        g,
        _,
        f
    ]), O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({}), []), E = b, P = {
        ref: B
    }, A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$root$2d$containers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainTreeProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ge.Provider, {
        value: o
    }, A({
        ourProps: P,
        theirProps: E,
        slot: O,
        defaultTag: yt,
        name: "Popover.Group"
    })));
}
let Rt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(dt), Ft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Pt), Bt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(ke), _t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(ke), At = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(bt), Ct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(gt), io = Object.assign(Rt, {
    Button: Ft,
    Backdrop: _t,
    Overlay: Bt,
    Panel: At,
    Group: Ct
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/radio-group/radio-group.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Radio",
    ()=>Ke,
    "RadioGroup",
    ()=>mt,
    "RadioGroupDescription",
    ()=>je,
    "RadioGroupLabel",
    ()=>$e,
    "RadioGroupOption",
    ()=>Ve
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$by$2d$comparator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-by-comparator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-controllable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-default-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/form-fields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/bugs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Ie = ((e)=>(e[e.RegisterOption = 0] = "RegisterOption", e[e.UnregisterOption = 1] = "UnregisterOption", e))(Ie || {});
let Fe = {
    [0] (o, t) {
        let e = [
            ...o.options,
            {
                id: t.id,
                element: t.element,
                propsRef: t.propsRef
            }
        ];
        return {
            ...o,
            options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(e, (i)=>i.element.current)
        };
    },
    [1] (o, t) {
        let e = o.options.slice(), i = o.options.findIndex((v)=>v.id === t.id);
        return i === -1 ? o : (e.splice(i, 1), {
            ...o,
            options: e
        });
    }
}, J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
J.displayName = "RadioGroupDataContext";
function X(o) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(J);
    if (t === null) {
        let e = new Error("<".concat(o, " /> is missing a parent <RadioGroup /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(e, X), e;
    }
    return t;
}
let z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
z.displayName = "RadioGroupActionsContext";
function q(o) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(z);
    if (t === null) {
        let e = new Error("<".concat(o, " /> is missing a parent <RadioGroup /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(e, q), e;
    }
    return t;
}
function Ue(o, t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(t.type, Fe, o, t);
}
let Me = "div";
function Se(o, t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { id: v = "headlessui-radiogroup-".concat(e), value: m, form: D, name: n, onChange: f, by: u, disabled: a = i || !1, defaultValue: M, tabIndex: T = 0, ...S } = o, R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$by$2d$comparator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useByComparator"])(u), [A, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(Ue, {
        options: []
    }), p = A.options, [C, _] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])(), [h, L] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescriptions"])(), k = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(k, t), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultValue"])(M), [l, I] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllable"])(m, f, b), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>p.find((r)=>!r.propsRef.current.disabled), [
        p
    ]), O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>p.some((r)=>R(r.propsRef.current.value, l)), [
        p,
        l
    ]), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>{
        var d;
        if (a || R(r, l)) return !1;
        let F = (d = p.find((w)=>R(w.propsRef.current.value, r))) == null ? void 0 : d.propsRef.current;
        return F != null && F.disabled ? !1 : (I == null || I(r), !0);
    }), ue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>{
        let F = k.current;
        if (!F) return;
        let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(F), w = p.filter((P)=>P.propsRef.current.disabled === !1).map((P)=>P.element.current);
        switch(r.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attemptSubmit"])(r.currentTarget);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowLeft:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowUp:
                if (r.preventDefault(), r.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(w, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Success) {
                    let E = p.find((W)=>W.element.current === (d == null ? void 0 : d.activeElement));
                    E && s(E.propsRef.current.value);
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowRight:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowDown:
                if (r.preventDefault(), r.stopPropagation(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(w, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Success) {
                    let E = p.find((W)=>W.element.current === (d == null ? void 0 : d.activeElement));
                    E && s(E.propsRef.current.value);
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space:
                {
                    r.preventDefault(), r.stopPropagation();
                    let P = p.find((E)=>E.element.current === (d == null ? void 0 : d.activeElement));
                    P && s(P.propsRef.current.value);
                }
                break;
        }
    }), Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((r)=>(y({
            type: 0,
            ...r
        }), ()=>y({
                type: 1,
                id: r.id
            }))), ce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            value: l,
            firstOption: g,
            containsCheckedOption: O,
            disabled: a,
            compare: R,
            tabIndex: T,
            ...A
        }), [
        l,
        g,
        O,
        a,
        R,
        T,
        A
    ]), fe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            registerOption: Q,
            change: s
        }), [
        Q,
        s
    ]), Te = {
        ref: c,
        id: v,
        role: "radiogroup",
        "aria-labelledby": C,
        "aria-describedby": h,
        onKeyDown: ue
    }, Re = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            value: l
        }), [
        l
    ]), me = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (b !== void 0) return s(b);
    }, [
        s,
        b
    ]), ye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(L, {
        name: "RadioGroup.Description"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(_, {
        name: "RadioGroup.Label"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(z.Provider, {
        value: fe
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(J.Provider, {
        value: ce
    }, n != null && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], {
        disabled: a,
        data: {
            [n]: l || "on"
        },
        overrides: {
            type: "radio",
            checked: l != null
        },
        form: D,
        onReset: me
    }), ye({
        ourProps: Te,
        theirProps: S,
        slot: Re,
        defaultTag: Me,
        name: "RadioGroup"
    })))));
}
let He = "div";
function we(o, t) {
    var g;
    let e = X("RadioGroup.Option"), i = q("RadioGroup.Option"), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: m = "headlessui-radiogroup-option-".concat(v), value: D, disabled: n = e.disabled || !1, autoFocus: f = !1, ...u } = o, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(a, t), [T, S] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])(), [R, A] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescriptions"])(), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])({
        value: D,
        disabled: n
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>i.registerOption({
            id: m,
            element: a,
            propsRef: y
        }), [
        m,
        i,
        a,
        y
    ]);
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((O)=>{
        var s;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(O.currentTarget)) return O.preventDefault();
        i.change(D) && ((s = a.current) == null || s.focus());
    }), C = ((g = e.firstOption) == null ? void 0 : g.id) === m, { isFocusVisible: _, focusProps: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: f
    }), { isHovered: L, hoverProps: k } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: n
    }), c = e.compare(e.value, D), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: M,
        id: m,
        role: "radio",
        "aria-checked": c ? "true" : "false",
        "aria-labelledby": T,
        "aria-describedby": R,
        "aria-disabled": n ? !0 : void 0,
        tabIndex: (()=>n ? -1 : c || !e.containsCheckedOption && C ? e.tabIndex : -1)(),
        onClick: n ? void 0 : p,
        autoFocus: f
    }, h, k), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            checked: c,
            disabled: n,
            active: _,
            hover: L,
            focus: _,
            autofocus: f
        }), [
        c,
        n,
        L,
        _,
        f
    ]), I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(A, {
        name: "RadioGroup.Description"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        name: "RadioGroup.Label"
    }, I({
        ourProps: b,
        theirProps: u,
        slot: l,
        defaultTag: He,
        name: "RadioGroup.Option"
    })));
}
let Ne = "span";
function We(o, t) {
    var g;
    let e = X("Radio"), i = q("Radio"), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProvidedId"])(), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { id: n = m || "headlessui-radio-".concat(v), value: f, disabled: u = e.disabled || D || !1, autoFocus: a = !1, ...M } = o, T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(T, t), R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])(), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescribedBy"])(), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])({
        value: f,
        disabled: u
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>i.registerOption({
            id: n,
            element: T,
            propsRef: y
        }), [
        n,
        i,
        T,
        y
    ]);
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((O)=>{
        var s;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(O.currentTarget)) return O.preventDefault();
        i.change(f) && ((s = T.current) == null || s.focus());
    }), { isFocusVisible: C, focusProps: _ } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: a
    }), { isHovered: h, hoverProps: L } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: u
    }), k = ((g = e.firstOption) == null ? void 0 : g.id) === n, c = e.compare(e.value, f), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: S,
        id: n,
        role: "radio",
        "aria-checked": c ? "true" : "false",
        "aria-labelledby": R,
        "aria-describedby": A,
        "aria-disabled": u ? !0 : void 0,
        tabIndex: (()=>u ? -1 : c || !e.containsCheckedOption && k ? e.tabIndex : -1)(),
        autoFocus: a,
        onClick: u ? void 0 : p
    }, _, L), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            checked: c,
            disabled: u,
            hover: h,
            focus: C,
            autofocus: a
        }), [
        c,
        u,
        h,
        C,
        a
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: b,
        theirProps: M,
        slot: l,
        defaultTag: Ne,
        name: "Radio"
    });
}
let Be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Se), Ve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(we), Ke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(We), $e = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], je = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], mt = Object.assign(Be, {
    Option: Ve,
    Radio: Ke,
    Label: $e,
    Description: je
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/select/select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
let H = "select";
function B(a, i) {
    let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProvidedId"])(), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { id: c = d || "headlessui-select-".concat(p), disabled: e = n || !1, invalid: t = !1, autoFocus: o = !1, ...f } = a, m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])(), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescribedBy"])(), { isFocusVisible: r, focusProps: T } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: o
    }), { isHovered: l, hoverProps: b } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: e
    }), { pressed: s, pressProps: y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: e
    }), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: i,
        id: c,
        "aria-labelledby": m,
        "aria-describedby": u,
        "aria-invalid": t ? "true" : void 0,
        disabled: e || void 0,
        autoFocus: o
    }, T, b, y), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            disabled: e,
            invalid: t,
            hover: l,
            focus: r,
            active: s,
            autofocus: o
        }), [
        e,
        t,
        l,
        r,
        s,
        o
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: P,
        theirProps: f,
        slot: S,
        defaultTag: H,
        name: "Select"
    });
}
let j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(B);
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/switch/switch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Ze,
    "SwitchDescription",
    ()=>Ae,
    "SwitchGroup",
    ()=>Re,
    "SwitchLabel",
    ()=>Ge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-controllable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-default-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-disposables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/form-fields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/bugs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
E.displayName = "GroupContext";
let ge = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
function ve(n) {
    var u;
    let [o, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [h, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabels"])(), [T, t] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescriptions"])(), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            switch: o,
            setSwitch: s
        }), [
        o,
        s
    ]), y = {}, S = n, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(t, {
        name: "Switch.Description",
        value: T
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(b, {
        name: "Switch.Label",
        value: h,
        props: {
            htmlFor: (u = p.switch) == null ? void 0 : u.id,
            onClick (d) {
                o && (__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLLabelElement"](d.currentTarget) && d.preventDefault(), o.click(), o.focus({
                    preventScroll: !0
                }));
            }
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(E.Provider, {
        value: p
    }, c({
        ourProps: y,
        theirProps: S,
        slot: {},
        defaultTag: ge,
        name: "Switch.Group"
    }))));
}
let xe = "button";
function Ce(n, o) {
    var L;
    let s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProvidedId"])(), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { id: T = h || "headlessui-switch-".concat(s), disabled: t = b || !1, checked: p, defaultChecked: y, onChange: S, name: c, value: u, form: d, autoFocus: m = !1, ...F } = n, _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(E), [H, k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), U = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(M, o, _ === null ? null : _.setSwitch, k), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$default$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultValue"])(y), [a, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$controllable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllable"])(p, S, l != null ? l : !1), I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$disposables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisposables"])(), [P, D] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        D(!0), r == null || r(!a), I.nextFrame(()=>{
            D(!1);
        });
    }), B = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$bugs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDisabledReactIssue7711"])(e.currentTarget)) return e.preventDefault();
        e.preventDefault(), g();
    }), K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>{
        e.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space ? (e.preventDefault(), g()) : e.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter && (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attemptSubmit"])(e.currentTarget);
    }), O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((e)=>e.preventDefault()), W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])(), N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescribedBy"])(), { isFocusVisible: v, focusProps: J } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: m
    }), { isHovered: x, hoverProps: V } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: t
    }), { pressed: C, pressProps: X } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: t
    }), j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            checked: a,
            disabled: t,
            hover: x,
            focus: v,
            active: C,
            autofocus: m,
            changing: P
        }), [
        a,
        x,
        v,
        C,
        t,
        P,
        m
    ]), $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        id: T,
        ref: U,
        role: "switch",
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveButtonType"])(n, H),
        tabIndex: n.tabIndex === -1 ? 0 : (L = n.tabIndex) != null ? L : 0,
        "aria-checked": a,
        "aria-labelledby": W,
        "aria-describedby": N,
        disabled: t || void 0,
        autoFocus: m,
        onClick: B,
        onKeyUp: K,
        onKeyPress: O
    }, J, V, X), q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (l !== void 0) return r == null ? void 0 : r(l);
    }, [
        r,
        l
    ]), z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, c != null && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$form$2d$fields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormFields"], {
        disabled: t,
        data: {
            [c]: u || "on"
        },
        overrides: {
            type: "checkbox",
            checked: a
        },
        form: d,
        onReset: q
    }), z({
        ourProps: $,
        theirProps: F,
        slot: j,
        defaultTag: xe,
        name: "Switch"
    }));
}
let Le = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ce), Re = ve, Ge = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], Ae = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], Ze = Object.assign(Le, {
    Group: Re,
    Label: Ge,
    Description: Ae
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/internal/focus-sentinel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusSentinel",
    ()=>b
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/hidden.js [app-client] (ecmascript)");
;
;
;
function b(param) {
    let { onFocus: n } = param;
    let [r, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMounted"])();
    return r ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        as: "button",
        type: "button",
        features: __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Focusable,
        onFocus: (a)=>{
            a.preventDefault();
            let e, i = 50;
            function t() {
                if (i-- <= 0) {
                    e && cancelAnimationFrame(e);
                    return;
                }
                if (n()) {
                    if (cancelAnimationFrame(e), !u.current) return;
                    o(!1);
                    return;
                }
                e = requestAnimationFrame(t);
            }
            e = requestAnimationFrame(t);
        }
    }) : null;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/utils/stable-collection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StableCollection",
    ()=>f,
    "useStableCollectionIndex",
    ()=>C
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const s = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function a() {
    return {
        groups: new Map,
        get (o, e) {
            var i;
            let t = this.groups.get(o);
            t || (t = new Map, this.groups.set(o, t));
            let n = (i = t.get(e)) != null ? i : 0;
            t.set(e, n + 1);
            let r = Array.from(t.keys()).indexOf(e);
            function u() {
                let c = t.get(e);
                c > 1 ? t.set(e, c - 1) : t.delete(e);
            }
            return [
                r,
                u
            ];
        }
    };
}
function f(param) {
    let { children: o } = param;
    let e = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](a());
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](s.Provider, {
        value: e
    }, o);
}
function C(o) {
    let e = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](s);
    if (!e) throw new Error("You must wrap your component in a <StableCollection>");
    let t = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"](), [n, r] = e.current.get(o, t);
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "C.useEffect": ()=>r
    }["C.useEffect"], []), n;
}
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/tabs/tabs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tab",
    ()=>Tt,
    "TabGroup",
    ()=>Be,
    "TabList",
    ()=>We,
    "TabPanel",
    ()=>Ke,
    "TabPanels",
    ()=>je
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$focus$2d$sentinel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/focus-sentinel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/hidden.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/micro-task.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$stable$2d$collection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/stable-collection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Le = ((t)=>(t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Le || {}), _e = ((l)=>(l[l.Less = -1] = "Less", l[l.Equal = 0] = "Equal", l[l.Greater = 1] = "Greater", l))(_e || {}), De = ((n)=>(n[n.SetSelectedIndex = 0] = "SetSelectedIndex", n[n.RegisterTab = 1] = "RegisterTab", n[n.UnregisterTab = 2] = "UnregisterTab", n[n.RegisterPanel = 3] = "RegisterPanel", n[n.UnregisterPanel = 4] = "UnregisterPanel", n))(De || {});
let Se = {
    [0] (e, r) {
        var d;
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(e.tabs, (u)=>u.current), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(e.panels, (u)=>u.current), a = t.filter((u)=>{
            var T;
            return !((T = u.current) != null && T.hasAttribute("disabled"));
        }), n = {
            ...e,
            tabs: t,
            panels: l
        };
        if (r.index < 0 || r.index > t.length - 1) {
            let u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(Math.sign(r.index - e.selectedIndex), {
                [-1]: ()=>1,
                [0]: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(Math.sign(r.index), {
                        [-1]: ()=>0,
                        [0]: ()=>0,
                        [1]: ()=>1
                    }),
                [1]: ()=>0
            });
            if (a.length === 0) return n;
            let T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(u, {
                [0]: ()=>t.indexOf(a[0]),
                [1]: ()=>t.indexOf(a[a.length - 1])
            });
            return {
                ...n,
                selectedIndex: T === -1 ? e.selectedIndex : T
            };
        }
        let s = t.slice(0, r.index), b = [
            ...t.slice(r.index),
            ...s
        ].find((u)=>a.includes(u));
        if (!b) return n;
        let f = (d = t.indexOf(b)) != null ? d : e.selectedIndex;
        return f === -1 && (f = e.selectedIndex), {
            ...n,
            selectedIndex: f
        };
    },
    [1] (e, r) {
        if (e.tabs.includes(r.tab)) return e;
        let t = e.tabs[e.selectedIndex], l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])([
            ...e.tabs,
            r.tab
        ], (n)=>n.current), a = e.selectedIndex;
        return e.info.current.isControlled || (a = l.indexOf(t), a === -1 && (a = e.selectedIndex)), {
            ...e,
            tabs: l,
            selectedIndex: a
        };
    },
    [2] (e, r) {
        return {
            ...e,
            tabs: e.tabs.filter((t)=>t !== r.tab)
        };
    },
    [3] (e, r) {
        return e.panels.includes(r.panel) ? e : {
            ...e,
            panels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])([
                ...e.panels,
                r.panel
            ], (t)=>t.current)
        };
    },
    [4] (e, r) {
        return {
            ...e,
            panels: e.panels.filter((t)=>t !== r.panel)
        };
    }
}, V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
V.displayName = "TabsDataContext";
function C(e) {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(V);
    if (r === null) {
        let t = new Error("<".concat(e, " /> is missing a parent <Tab.Group /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(t, C), t;
    }
    return r;
}
let Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
Q.displayName = "TabsActionsContext";
function Y(e) {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Q);
    if (r === null) {
        let t = new Error("<".concat(e, " /> is missing a parent <Tab.Group /> component."));
        throw Error.captureStackTrace && Error.captureStackTrace(t, Y), t;
    }
    return r;
}
function Fe(e, r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(r.type, Se, e, r);
}
let Ie = "div";
function he(e, r) {
    let { defaultIndex: t = 0, vertical: l = !1, manual: a = !1, onChange: n, selectedIndex: s = null, ...g } = e;
    const b = l ? "vertical" : "horizontal", f = a ? "manual" : "auto";
    let d = s !== null, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])({
        isControlled: d
    }), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(r), [p, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(Fe, {
        info: u,
        selectedIndex: s != null ? s : t,
        tabs: [],
        panels: []
    }), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selectedIndex: p.selectedIndex
        }), [
        p.selectedIndex
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(n || (()=>{})), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(p.tabs), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            orientation: b,
            activation: f,
            ...p
        }), [
        b,
        f,
        p
    ]), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>(c({
            type: 1,
            tab: i
        }), ()=>c({
                type: 2,
                tab: i
            }))), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>(c({
            type: 3,
            panel: i
        }), ()=>c({
                type: 4,
                panel: i
            }))), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        _.current !== i && m.current(i), d || c({
            type: 0,
            index: i
        });
    }), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(d ? e.selectedIndex : p.selectedIndex), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            registerTab: P,
            registerPanel: A,
            change: E
        }), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        c({
            type: 0,
            index: s != null ? s : t
        });
    }, [
        s
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (_.current === void 0 || p.tabs.length <= 0) return;
        let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(p.tabs, (R)=>R.current);
        i.some((R, X)=>p.tabs[X] !== R) && E(i.indexOf(p.tabs[_.current]));
    });
    let K = {
        ref: T
    }, J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$stable$2d$collection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StableCollection"], null, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Q.Provider, {
        value: D
    }, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(V.Provider, {
        value: S
    }, S.tabs.length <= 0 && __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$focus$2d$sentinel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusSentinel"], {
        onFocus: ()=>{
            var i, G;
            for (let R of M.current)if (((i = R.current) == null ? void 0 : i.tabIndex) === 0) return (G = R.current) == null || G.focus(), !0;
            return !1;
        }
    }), J({
        ourProps: K,
        theirProps: g,
        slot: h,
        defaultTag: Ie,
        name: "Tabs"
    }))));
}
let ve = "div";
function Ce(e, r) {
    let { orientation: t, selectedIndex: l } = C("Tab.List"), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(r), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selectedIndex: l
        }), [
        l
    ]), s = e, g = {
        ref: a,
        role: "tablist",
        "aria-orientation": t
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: g,
        theirProps: s,
        slot: n,
        defaultTag: ve,
        name: "Tabs.List"
    });
}
let Me = "button";
function Ge(e, r) {
    var ee, te;
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: l = "headlessui-tabs-tab-".concat(t), disabled: a = !1, autoFocus: n = !1, ...s } = e, { orientation: g, activation: b, selectedIndex: f, tabs: d, panels: u } = C("Tab"), T = Y("Tab"), p = C("Tab"), [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(m, r, h);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>T.registerTab(m), [
        T,
        m
    ]);
    let S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$stable$2d$collection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCollectionIndex"])("tabs"), P = d.indexOf(m);
    P === -1 && (P = S);
    let A = P === f, E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        var $;
        let L = o();
        if (L === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Success && b === "auto") {
            let q = ($ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(m)) == null ? void 0 : $.activeElement, re = p.tabs.findIndex((ce)=>ce.current === q);
            re !== -1 && T.change(re);
        }
        return L;
    }), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        let L = d.map((q)=>q.current).filter(Boolean);
        if (o.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space || o.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter) {
            o.preventDefault(), o.stopPropagation(), T.change(P);
            return;
        }
        switch(o.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Home:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageUp:
                return o.preventDefault(), o.stopPropagation(), E(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First));
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].End:
            case __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageDown:
                return o.preventDefault(), o.stopPropagation(), E(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last));
        }
        if (E(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(g, {
                vertical () {
                    return o.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowUp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) : o.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowDown ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Error;
                },
                horizontal () {
                    return o.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowLeft ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) : o.key === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowRight ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) : __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Error;
                }
            })) === __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Success) return o.preventDefault();
    }), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        var o;
        D.current || (D.current = !0, (o = m.current) == null || o.focus({
            preventScroll: !0
        }), T.change(P), (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microTask"])(()=>{
            D.current = !1;
        }));
    }), J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        o.preventDefault();
    }), { isFocusVisible: i, focusProps: G } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: n
    }), { isHovered: R, hoverProps: X } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: a
    }), { pressed: Z, pressProps: ue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: a
    }), Te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selected: A,
            hover: R,
            active: Z,
            focus: i,
            autofocus: n,
            disabled: a
        }), [
        A,
        R,
        i,
        Z,
        n,
        a
    ]), de = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: M,
        onKeyDown: _,
        onMouseDown: J,
        onClick: K,
        id: l,
        role: "tab",
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveButtonType"])(e, c),
        "aria-controls": (te = (ee = u[P]) == null ? void 0 : ee.current) == null ? void 0 : te.id,
        "aria-selected": A,
        tabIndex: A ? 0 : -1,
        disabled: a || void 0,
        autoFocus: n
    }, G, X, ue);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: de,
        theirProps: s,
        slot: Te,
        defaultTag: Me,
        name: "Tabs.Tab"
    });
}
let Ue = "div";
function He(e, r) {
    let { selectedIndex: t } = C("Tab.Panels"), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(r), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selectedIndex: t
        }), [
        t
    ]), n = e, s = {
        ref: l
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: s,
        theirProps: n,
        slot: a,
        defaultTag: Ue,
        name: "Tabs.Panels"
    });
}
let we = "div", Oe = __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy | __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].Static;
function Ne(e, r) {
    var A, E, _, D;
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: l = "headlessui-tabs-panel-".concat(t), tabIndex: a = 0, ...n } = e, { selectedIndex: s, tabs: g, panels: b } = C("Tab.Panel"), f = Y("Tab.Panel"), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(d, r);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>f.registerPanel(d), [
        f,
        d
    ]);
    let T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$stable$2d$collection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCollectionIndex"])("panels"), p = b.indexOf(d);
    p === -1 && (p = T);
    let c = p === s, { isFocusVisible: h, focusProps: m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])(), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selected: c,
            focus: h
        }), [
        c,
        h
    ]), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: u,
        id: l,
        role: "tabpanel",
        "aria-labelledby": (E = (A = g[p]) == null ? void 0 : A.current) == null ? void 0 : E.id,
        tabIndex: c ? a : -1
    }, m), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return !c && ((_ = n.unmount) == null || _) && !((D = n.static) != null && D) ? __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        "aria-hidden": "true",
        ...S
    }) : P({
        ourProps: S,
        theirProps: n,
        slot: M,
        defaultTag: we,
        features: Oe,
        visible: c,
        name: "Tabs.Panel"
    });
}
let ke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ge), Be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(he), We = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ce), je = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(He), Ke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ne), Tt = Object.assign(ke, {
    Group: Be,
    List: We,
    Panels: je,
    Panel: Ke
});
;
}),
"[project]/business-consulting/node_modules/@headlessui/react/dist/components/textarea/textarea.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>J
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/disabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/internal/id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/description/description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/business-consulting/node_modules/@headlessui/react/dist/components/label/label.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
let L = "textarea";
function H(s, l) {
    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProvidedId"])(), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$disabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisabled"])(), { id: p = d || "headlessui-textarea-".concat(i), disabled: e = n || !1, autoFocus: r = !1, invalid: a = !1, ...T } = s, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$label$2f$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelledBy"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$description$2f$description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDescribedBy"])(), { isFocused: o, focusProps: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: r
    }), { isHovered: t, hoverProps: b } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: e
    }), y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: l,
        id: p,
        "aria-labelledby": f,
        "aria-describedby": m,
        "aria-invalid": a ? "true" : void 0,
        disabled: e || void 0,
        autoFocus: r
    }, u, b), x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            disabled: e,
            invalid: a,
            hover: t,
            focus: o,
            autofocus: r
        }), [
        e,
        a,
        t,
        o,
        r
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: y,
        theirProps: T,
        slot: x,
        defaultTag: L,
        name: "Textarea"
    });
}
let J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$business$2d$consulting$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(H);
;
}),
]);

//# sourceMappingURL=dbac0_%40headlessui_react_dist_1e362c17._.js.map