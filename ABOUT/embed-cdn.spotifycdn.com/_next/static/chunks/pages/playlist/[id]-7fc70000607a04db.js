try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2f8a4e66-52c8-4b66-9438-2100cb775cb5", e._sentryDebugIdIdentifier = "sentry-dbid-2f8a4e66-52c8-4b66-9438-2100cb775cb5")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2712], {
        23425: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: () => a,
                default: () => o
            });
            var n = s(82536),
                r = s(5640),
                l = s(36645),
                d = s(50148),
                i = s(36317),
                u = s(48952),
                _ = s(13081),
                c = s(12292),
                f = s(33933),
                b = s(84434),
                a = !0;
            let o = e => {
                let t = (0, f._)(e) ? e.rtl : e.state.settings.rtl;
                return (d.useEffect(() => {
                    var e;
                    null == (e = document.querySelector("html")) || e.setAttribute("dir", t ? "rtl" : "ltr")
                }, [t]), (0, f._)(e)) ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.mL, {
                        styles: b.E3
                    }), (0, r.jsx)(c.G, {
                        children: (0, r.jsx)(u.A, (0, n._)({}, e))
                    })]
                }) : (0, r.jsx)(i.q, {
                    props: e,
                    children: (0, r.jsx)(_.U, {})
                })
            }
        },
        78053: (e, t, s) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/playlist/[id]", function() {
                return s(23425)
            }])
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [7459, 9727, 8329, 3831, 5454, 3081, 636, 6593, 8792], () => t(78053)), _N_E = e.O()
    }
]);