try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        d = (new e.Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "df90cc0c-bb07-4ff4-84d9-69065e25b577", e._sentryDebugIdIdentifier = "sentry-dbid-df90cc0c-bb07-4ff4-84d9-69065e25b577")
} catch (e) {}(() => {
    "use strict";
    var e = {},
        d = {};

    function t(r) {
        var c = d[r];
        if (void 0 !== c) return c.exports;
        var a = d[r] = {
                id: r,
                loaded: !1,
                exports: {}
            },
            f = !0;
        try {
            e[r].call(a.exports, a, a.exports, t), f = !1
        } finally {
            f && delete d[r]
        }
        return a.loaded = !0, a.exports
    }
    t.m = e, (() => {
        var e = [];
        t.O = (d, r, c, a) => {
            if (r) {
                a = a || 0;
                for (var f = e.length; f > 0 && e[f - 1][2] > a; f--) e[f] = e[f - 1];
                e[f] = [r, c, a];
                return
            }
            for (var b = 1 / 0, f = 0; f < e.length; f++) {
                for (var [r, c, a] = e[f], o = !0, n = 0; n < r.length; n++)(!1 & a || b >= a) && Object.keys(t.O).every(e => t.O[e](r[n])) ? r.splice(n--, 1) : (o = !1, a < b && (b = a));
                if (o) {
                    e.splice(f--, 1);
                    var i = c();
                    void 0 !== i && (d = i)
                }
            }
            return d
        }
    })(), t.n = e => {
        var d = e && e.__esModule ? () => e.default : () => e;
        return t.d(d, {
            a: d
        }), d
    }, (() => {
        var e, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        t.t = function(r, c) {
            if (1 & c && (r = this(r)), 8 & c || "object" == typeof r && r && (4 & c && r.__esModule || 16 & c && "function" == typeof r.then)) return r;
            var a = Object.create(null);
            t.r(a);
            var f = {};
            e = e || [null, d({}), d([]), d(d)];
            for (var b = 2 & c && r;
                "object" == typeof b && !~e.indexOf(b); b = d(b)) Object.getOwnPropertyNames(b).forEach(e => f[e] = () => r[e]);
            return f.default = () => r, t.d(a, f), a
        }
    })(), t.d = (e, d) => {
        for (var r in d) t.o(d, r) && !t.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: d[r]
        })
    }, t.f = {}, t.e = e => Promise.all(Object.keys(t.f).reduce((d, r) => (t.f[r](e, d), d), [])), t.u = e => "static/chunks/" + (({
        4847: "spotify_player_o",
        5824: "spotify_player_h"
    })[e] || e) + "." + ({
        16: "efc396f727e3aea7",
        94: "fe95f33d52ee7560",
        103: "2b8824e1896d2170",
        464: "8d13b2751059ce6a",
        528: "f596cd7bbe5d3d51",
        1056: "f65ca7ebe52b6a78",
        1139: "f173f7357d55ba24",
        1499: "9d8df342fbdb665e",
        1708: "87e0ea4147dd5a72",
        1735: "d6aac49ece9bbcf7",
        1927: "0e080ddc6e2b5d96",
        2013: "ad7b8db567051fd2",
        2204: "fa3e7ae3cd6a4cb2",
        2340: "1fe78b5635e47c4b",
        2494: "f950f7a08d1334a7",
        2520: "b752a5bd6f018941",
        2579: "d29e81d5adc83c22",
        2618: "7102c0452036c97b",
        2746: "a833509ed820e66a",
        2776: "79c9aeed9ee22adc",
        3014: "d3f7f4a89c3232f9",
        3156: "8b3e2903d9668a4c",
        3161: "b15c900e5475ee3d",
        3277: "f4fce74820f3a135",
        3436: "822c3ab744ccd1ff",
        3507: "bc79e73c25256aed",
        3543: "d26675f010ce5a52",
        3555: "2c506e77f64171d4",
        3768: "9a4f5e17f741bdb3",
        3769: "d50fee963e51ddb8",
        3997: "4403b1401615c50b",
        4028: "79e3a4f7a5a92ab2",
        4094: "1bc36506371c2ed2",
        4313: "03d48990131bfbb5",
        4319: "724896190ec2fdf0",
        4326: "cb2e578fd9623cb7",
        4438: "5921876cc50d0807",
        4607: "d00eb953479dc83d",
        4668: "ec541d10ed7cb2dd",
        4734: "8be90e59776fb84b",
        4768: "d6cc3c8eb2352ab4",
        4769: "97d97a56c446d31e",
        4808: "7f2592ea29a450c3",
        4847: "1bdae67ac822c3e3",
        4894: "4154fd7250a3293a",
        5278: "6841e0c48de26bbe",
        5365: "4c692ad169c38940",
        5737: "59845c246ea294c6",
        5749: "02fe9fb91fa34c8e",
        5824: "22abae918d41d1bb",
        5954: "b850e9b34380b4b3",
        6052: "d22bfe2e123bf42d",
        6140: "7349c299f0bf9055",
        6234: "b4a2b675ce7e17ad",
        6367: "94f325535fac50ae",
        6395: "bf82254d74635553",
        6411: "5f0850e45332810e",
        6506: "63f6bc47f3329372",
        6542: "8f720beaa0209c4d",
        6577: "ab4a852f7c26412b",
        6974: "6ce19bab73cce495",
        8032: "dda88c71bbc298fc",
        8070: "f79e90394ee72062",
        8174: "56d3d86e704667d1",
        8181: "795e6691f1f7ae7a",
        8404: "b00d166c5d44617e",
        8701: "a95b91201c511f3d",
        8811: "c2e7d0a1e2f7adb6",
        8942: "d31b001b6c9be651",
        8949: "adbc325b8825932a",
        8972: "18ad1c791e0d9707",
        9190: "753e3a102ca6bb9e",
        9323: "1cf0f06d9ddd8499",
        9485: "b4220a4b30f26d7f",
        9494: "3893e5c3f5253281",
        9658: "41ef74defae2fd0c",
        9855: "656cbbe02cf3ae69",
        9870: "f544a9631bbdb50a",
        9886: "f9b2b7534c402e27"
    })[e] + ".js", t.miniCssF = e => {}, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), t.o = (e, d) => Object.prototype.hasOwnProperty.call(e, d), (() => {
        var e = {},
            d = "_N_E:";
        t.l = (r, c, a, f) => {
            if (e[r]) return void e[r].push(c);
            if (void 0 !== a)
                for (var b, o, n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                    var l = n[i];
                    if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == d + a) {
                        b = l;
                        break
                    }
                }
            b || (o = !0, (b = document.createElement("script")).charset = "utf-8", b.timeout = 120, t.nc && b.setAttribute("nonce", t.nc), b.setAttribute("data-webpack", d + a), b.src = t.tu(r)), e[r] = [c];
            var u = (d, t) => {
                    b.onerror = b.onload = null, clearTimeout(s);
                    var c = e[r];
                    if (delete e[r], b.parentNode && b.parentNode.removeChild(b), c && c.forEach(e => e(t)), d) return d(t)
                },
                s = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: b
                }), 12e4);
            b.onerror = u.bind(null, b.onerror), b.onload = u.bind(null, b.onload), o && document.head.appendChild(b)
        }
    })(), t.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        t.tt = () => (void 0 === e && (e = {
            createScriptURL: e => e
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))), e)
    })(), t.tu = e => t.tt().createScriptURL(e), t.p = "https://embed-cdn.spotifycdn.com/_next/", (() => {
        var e = {
            8068: 0
        };
        t.f.j = (d, r) => {
            var c = t.o(e, d) ? e[d] : void 0;
            if (0 !== c)
                if (c) r.push(c[2]);
                else if (8068 != d) {
                var a = new Promise((t, r) => c = e[d] = [t, r]);
                r.push(c[2] = a);
                var f = t.p + t.u(d),
                    b = Error();
                t.l(f, r => {
                    if (t.o(e, d) && (0 !== (c = e[d]) && (e[d] = void 0), c)) {
                        var a = r && ("load" === r.type ? "missing" : r.type),
                            f = r && r.target && r.target.src;
                        b.message = "Loading chunk " + d + " failed.\n(" + a + ": " + f + ")", b.name = "ChunkLoadError", b.type = a, b.request = f, c[1](b)
                    }
                }, "chunk-" + d, d)
            } else e[d] = 0
        }, t.O.j = d => 0 === e[d];
        var d = (d, r) => {
                var c, a, [f, b, o] = r,
                    n = 0;
                if (f.some(d => 0 !== e[d])) {
                    for (c in b) t.o(b, c) && (t.m[c] = b[c]);
                    if (o) var i = o(t)
                }
                for (d && d(r); n < f.length; n++) a = f[n], t.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return t.O(i)
            },
            r = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        r.forEach(d.bind(null, 0)), r.push = d.bind(null, r.push.bind(r))
    })(), t.nc = void 0
})();