try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2975024a-fb58-4bab-a9c6-9b683f9ffe2f", e._sentryDebugIdIdentifier = "sentry-dbid-2975024a-fb58-4bab-a9c6-9b683f9ffe2f")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
        [636], {
            35: e => {
                e.exports = function(e, t, n, r) {
                    var i = n ? n.call(r, e, t) : void 0;
                    if (void 0 !== i) return !!i;
                    if (e === t) return !0;
                    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                    var s = Object.keys(e),
                        o = Object.keys(t);
                    if (s.length !== o.length) return !1;
                    for (var a = Object.prototype.hasOwnProperty.bind(t), l = 0; l < s.length; l++) {
                        var c = s[l];
                        if (!a(c)) return !1;
                        var u = e[c],
                            d = t[c];
                        if (!1 === (i = n ? n.call(r, u, d, c) : void 0) || void 0 === i && u !== d) return !1
                    }
                    return !0
                }
            },
            56: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createClientIdContext = void 0;
                var r = n(9423);
                t.createClientIdContext = function(e) {
                    var t = r.hexToBase64(e);
                    return function() {
                        return {
                            name: "context_client_id",
                            data: {
                                value: t
                            }
                        }
                    }
                }
            },
            1092: (e, t) => {
                "use strict";
                var n, r = Symbol.for("react.element"),
                    i = Symbol.for("react.portal"),
                    s = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    a = Symbol.for("react.profiler"),
                    l = Symbol.for("react.provider"),
                    c = Symbol.for("react.context"),
                    u = Symbol.for("react.server_context"),
                    d = Symbol.for("react.forward_ref"),
                    h = Symbol.for("react.suspense"),
                    f = Symbol.for("react.suspense_list"),
                    p = Symbol.for("react.memo"),
                    m = Symbol.for("react.lazy"),
                    g = Symbol.for("react.offscreen");
                n = Symbol.for("react.module.reference"), t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === s || e === a || e === o || e === h || e === f || e === g || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === l || e.$$typeof === c || e.$$typeof === d || e.$$typeof === n || void 0 !== e.getModuleId) || !1
                }, t.typeOf = function(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case r:
                                switch (e = e.type) {
                                    case s:
                                    case a:
                                    case o:
                                    case h:
                                    case f:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case u:
                                            case c:
                                            case d:
                                            case m:
                                            case p:
                                            case l:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case i:
                                return t
                        }
                    }
                }
            },
            1229: (e, t, n) => {
                "use strict";
                n.d(t, {
                    BY: () => a,
                    EU: () => s,
                    Se: () => o
                });
                var r = n(91011),
                    i = n(13980);

                function s() {
                    return o(i.O), i.O
                }

                function o(e) {
                    let t = e.__SENTRY__ = e.__SENTRY__ || {};
                    return t.version = t.version || r.M, t[r.M] = t[r.M] || {}
                }

                function a(e, t, n = i.O) {
                    let s = n.__SENTRY__ = n.__SENTRY__ || {},
                        o = s[r.M] = s[r.M] || {};
                    return o[e] || (o[e] = t())
                }
            },
            1342: (e, t, n) => {
                "use strict";

                function r(e) {
                    var t = Object.create(null);
                    return function(n) {
                        return void 0 === t[n] && (t[n] = e(n)), t[n]
                    }
                }
                n.d(t, {
                    A: () => r
                })
            },
            3079: (e, t, n) => {
                "use strict";
                var r;
                n.d(t, {
                        L: () => r
                    }),
                    function(e) {
                        e.HTTP_REQUEST_ABORTED = "HTTP_REQUEST_ABORTED", e.HTTP_REQUEST_FAILED = "HTTP_REQUEST_FAILED", e.HTTP_REQUEST_TIMEOUT = "HTTP_REQUEST_TIMEOUT", e.LOGGING_REQUEST_FAILED = "LOGGING_REQUEST_FAILED", e.TRANSPORT_ENDPOINTS_PROVIDER_ERROR = "TRANSPORT_ENDPOINTS_PROVIDER_ERROR", e.TRANSPORT_INVALID_STATE = "TRANSPORT_INVALID_STATE", e.TRANSPORT_INVALID_TOKEN = "TRANSPORT_INVALID_TOKEN", e.TRANSPORT_STALE_TOKEN = "TRANSPORT_STALE_TOKEN ", e.TRANSPORT_TOKEN_PROVIDER_ERROR = "TRANSPORT_TOKEN_PROVIDER_ERROR", e.TRANSPORT_LIFECYCLE_DISABLED = "TRANSPORT_LIFECYCLE_DISABLED", e.TRANSPORT_UNSUPPORTED_OPTION = "TRANSPORT_UNSUPPORTED_OPTION", e.XRESOLVE_INCOMPLETE_RESPONSE = "XRESOLVE_INCOMPLETE_RESPONSE", e.XRESOLVE_INVALID_RESPONSE = "XRESOLVE_INVALID_RESPONSE", e.XRESOLVE_REQUEST_FAILED_WITH_STATUS = "XRESOLVE_REQUEST_FAILED_WITH_STATUS"
                    }(r || (r = {}))
            },
            3148: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createApplicationDesktopContext = void 0, t.createApplicationDesktopContext = function(e) {
                    return function() {
                        return {
                            name: "context_application_desktop",
                            data: e
                        }
                    }
                }
            },
            3444: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WEBAPI_URL = t.INTERNAL_WEBGATE_URL = void 0, t.INTERNAL_WEBGATE_URL = "https://wgint.spotify.net", t.WEBAPI_URL = "https://api.spotify.com"
            },
            4073: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createUniversalReporter = void 0;
                let r = n(82149),
                    i = n(56026);
                t.createUniversalReporter = function(e = {}) {
                    let t = e.context ? [i.createUserAgentContext(), ...e.context] : [i.createUserAgentContext()];
                    return r.EventSenderReporter.create(Object.assign(Object.assign({
                        environment: "browser"
                    }, e), {
                        context: t
                    }))
                }
            },
            4982: (e, t, n) => {
                "use strict";
                n.d(t, {
                    GS: () => l,
                    HF: () => m,
                    W4: () => h,
                    my: () => c,
                    pO: () => u,
                    sp: () => d
                });
                var r = n(8875),
                    i = n(50271),
                    s = n(15677),
                    o = n(97025),
                    a = n(9228);

                function l(e, t, n) {
                    if (!(t in e)) return;
                    let i = e[t];
                    if ("function" != typeof i) return;
                    let s = n(i);
                    "function" == typeof s && u(s, i);
                    try {
                        e[t] = s
                    } catch {
                        r.T && o.vF.log(`Failed to replace method "${t}" in object`, e)
                    }
                }

                function c(e, t, n) {
                    try {
                        Object.defineProperty(e, t, {
                            value: n,
                            writable: !0,
                            configurable: !0
                        })
                    } catch (n) {
                        r.T && o.vF.log(`Failed to add non-enumerable property "${t}" to object`, e)
                    }
                }

                function u(e, t) {
                    try {
                        let n = t.prototype || {};
                        e.prototype = t.prototype = n, c(e, "__sentry_original__", t)
                    } catch (e) {}
                }

                function d(e) {
                    return e.__sentry_original__
                }

                function h(e) {
                    if ((0, s.bJ)(e)) return {
                        message: e.message,
                        name: e.name,
                        stack: e.stack,
                        ...p(e)
                    };
                    if (!(0, s.xH)(e)) return e; {
                        let t = {
                            type: e.type,
                            target: f(e.target),
                            currentTarget: f(e.currentTarget),
                            ...p(e)
                        };
                        return "undefined" != typeof CustomEvent && (0, s.tH)(e, CustomEvent) && (t.detail = e.detail), t
                    }
                }

                function f(e) {
                    try {
                        return (0, s.vq)(e) ? (0, i.Hd)(e) : Object.prototype.toString.call(e)
                    } catch (e) {
                        return "<unknown>"
                    }
                }

                function p(e) {
                    if ("object" != typeof e || null === e) return {}; {
                        let t = {};
                        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t
                    }
                }

                function m(e, t = 40) {
                    let n = Object.keys(h(e));
                    n.sort();
                    let r = n[0];
                    if (!r) return "[object has no keys]";
                    if (r.length >= t) return (0, a.xv)(r, t);
                    for (let e = n.length; e > 0; e--) {
                        let r = n.slice(0, e).join(", ");
                        if (!(r.length > t)) {
                            if (e === n.length) return r;
                            return (0, a.xv)(r, t)
                        }
                    }
                    return ""
                }
            },
            7996: (e, t, n) => {
                "use strict";
                n.d(t, {
                    h: () => d
                });
                var r = n(1229),
                    i = n(72961),
                    s = n(15677);
                class o {
                    constructor(e, t) {
                        let n, r;
                        n = e || new i.H, r = t || new i.H, this._stack = [{
                            scope: n
                        }], this._isolationScope = r
                    }
                    withScope(e) {
                        let t, n = this._pushScope();
                        try {
                            t = e(n)
                        } catch (e) {
                            throw this._popScope(), e
                        }
                        return (0, s.Qg)(t) ? t.then(e => (this._popScope(), e), e => {
                            throw this._popScope(), e
                        }) : (this._popScope(), t)
                    }
                    getClient() {
                        return this.getStackTop().client
                    }
                    getScope() {
                        return this.getStackTop().scope
                    }
                    getIsolationScope() {
                        return this._isolationScope
                    }
                    getStackTop() {
                        return this._stack[this._stack.length - 1]
                    }
                    _pushScope() {
                        let e = this.getScope().clone();
                        return this._stack.push({
                            client: this.getClient(),
                            scope: e
                        }), e
                    }
                    _popScope() {
                        return !(this._stack.length <= 1) && !!this._stack.pop()
                    }
                }

                function a() {
                    let e = (0, r.EU)(),
                        t = (0, r.Se)(e);
                    return t.stack = t.stack || new o((0, r.BY)("defaultCurrentScope", () => new i.H), (0, r.BY)("defaultIsolationScope", () => new i.H))
                }

                function l(e) {
                    return a().withScope(e)
                }

                function c(e, t) {
                    let n = a();
                    return n.withScope(() => (n.getStackTop().scope = e, t(e)))
                }

                function u(e) {
                    return a().withScope(() => e(a().getIsolationScope()))
                }

                function d(e) {
                    let t = (0, r.Se)(e);
                    return t.acs ? t.acs : {
                        withIsolationScope: u,
                        withScope: l,
                        withSetScope: c,
                        withSetIsolationScope: (e, t) => u(t),
                        getCurrentScope: () => a().getScope(),
                        getIsolationScope: () => a().getIsolationScope()
                    }
                }
            },
            8159: (e, t, n) => {
                "use strict";
                let r;
                n.d(t, {
                    Vk: () => i,
                    bk: () => h
                });
                class i {
                    constructor(e, t) {
                        this.defaultPrevented = !1, this.immediateStopped = !1, this.stopped = !1, this.type = e, this.data = t
                    }
                    preventDefault() {
                        this.defaultPrevented = !0
                    }
                    stopPropagation() {
                        this.stopped = !0
                    }
                    stopImmediatePropagation() {
                        this.immediateStopped = !0
                    }
                }
                let s = "undefined" != typeof window,
                    o = [];

                function a() {
                    var e;
                    let t = o.splice(0);
                    if (t.length)
                        for (let n = 0, r = t.length; n < r; n++) null == (e = t[n]) || e.call(t)
                }! function() {
                    if (s && "function" == typeof window.postMessage) {
                        let e = window.location.origin || `${window.location.protocol}//${window.location.hostname}`;
                        if (r = window.postMessage.bind(window, "@execute_deferreds", e), !window.__hasDeferredHandler) {
                            "function" == typeof Object.defineProperty ? Object.defineProperty(window, "__hasDeferredHandler", {
                                value: !0
                            }) : window.__hasDeferredHandler = !0;
                            let t = function(t) {
                                (t.origin === e || "@execute_deferreds" === t.data) && a()
                            };
                            window.addEventListener ? window.addEventListener("message", t) : window.attachEvent && window.attachEvent("onmessage", t)
                        }
                    } else r = "function" == typeof queueMicrotask ? queueMicrotask.bind(null, a) : "function" == typeof setImmediate ? setImmediate.bind(null, a) : setTimeout.bind(null, a, 10)
                }();
                let l = e => {
                    let t = !o.length;
                    o.push(e), t && r()
                };

                function c(e, t, n) {
                    for (let r = 0, i = e.length; r < i; r++) {
                        let i = e[r];
                        if ((null == i ? void 0 : i.listener) === t && i.options.once === n.once) return r
                    }
                    return -1
                }

                function u(e, t, n, r = {}) {
                    if (!n) return !1;
                    let i = e[t];
                    return !i || !i.length || -1 === c(i, n, r)
                }

                function d(e, t, n, r = {}) {
                    if (!t || !n) return;
                    let i = e[t],
                        s = {
                            listener: n,
                            options: r
                        };
                    if (!i) {
                        e[t] = [s];
                        return
                    }
                    i.push(s)
                }
                s && ("function" == typeof window.__modDefFn ? l = window.__modDefFn : "function" == typeof Object.defineProperty ? Object.defineProperty(window, "__modDefFn", {
                    value: l
                }) : window.__modDefFn = l);
                class h {
                    constructor() {
                        this._listeners = {}, this._metaListeners = {
                            add: {},
                            remove: {}
                        }
                    }
                    _dispatchFromStore(e, t) {
                        let n = t.type,
                            r = e[n];
                        if (r) {
                            for (let e of r = r.slice(0))
                                if (e.listener.call(this, t), e.options.once && this.removeListener(n, e.listener, e.options), t.immediateStopped) break
                        }
                    }
                    createEvent(e, t) {
                        return new i(e, t)
                    }
                    on(e, t, n = {}) {
                        if (!e) throw TypeError("Argument `eventType` is required.");
                        if (!t) return this;
                        let r = this._listeners;
                        if (u(r, e, t, n)) {
                            let s = this._metaListeners.add,
                                o = s[e];
                            if (o && o.length) {
                                let r = new i(e, {
                                    listener: t,
                                    options: n
                                });
                                if (this._dispatchFromStore(s, r), r.defaultPrevented) return this
                            }
                            d(r, e, t, n)
                        }
                        return this
                    }
                    addListener(e, t, n = {}) {
                        return this.on(e, t, n)
                    }
                    addListeners(e) {
                        for (let t in e) e.hasOwnProperty(t) && this.on(t, e[t]);
                        return this
                    }
                    once(e, t) {
                        return this.on(e, t, {
                            once: !0
                        })
                    }
                    removeListener(e, t, n = {}) {
                        if (!e) throw TypeError("Argument `eventType` is required.");
                        if (!t) return this;
                        let r = this._listeners[e];
                        if (!r) return this;
                        let s = c(r, t, n);
                        if (-1 === s) return this;
                        let o = this._metaListeners.remove[e];
                        if (o && o.length) {
                            let r = new i(e, {
                                listener: t,
                                options: n
                            });
                            if (this._dispatchFromStore(this._metaListeners.remove, r), r.defaultPrevented) return this
                        }
                        return r.splice(s, 1), this
                    }
                    removeListeners(e) {
                        for (let t in e) e.hasOwnProperty(t) && this.removeListener(t, e[t]);
                        return this
                    }
                    removeAllListeners(e) {
                        return e ? this._listeners[e] = [] : this._listeners = {}, this
                    }
                    emit(e, t) {
                        if (!e) throw TypeError("Argument `eventType` is required.");
                        let n = this.createEvent(e, t);
                        return l(() => this._dispatchFromStore(this._listeners, n)), n
                    }
                    emitSync(e, t) {
                        if (!e) throw TypeError("Argument `eventType` is required.");
                        let n = this.createEvent(e, t);
                        return this._dispatchFromStore(this._listeners, n), n
                    }
                    emitEvent(e) {
                        return l(() => this._dispatchFromStore(this._listeners, e)), e
                    }
                    emitEventSync(e) {
                        return this._dispatchFromStore(this._listeners, e), e
                    }
                    emitAndWait(e, t, n) {
                        if (!e) throw TypeError("Argument `eventType` is required.");
                        let r = this.createEvent(e, t);
                        return l(() => {
                            this._dispatchFromStore(this._listeners, r), n.call(this, r)
                        }), r
                    }
                    emitEventAndWait(e, t) {
                        return l(() => {
                            this._dispatchFromStore(this._listeners, e), t.call(this, e)
                        }), e
                    }
                    proxyEmit(e, t, n) {
                        if (!e || "function" != typeof e.on) throw TypeError("Proxy source must be an EventEmitter");
                        if (e === this) throw ReferenceError("Cannot create recursive proxy.");
                        if (!t || !n) throw TypeError("Parameter sourceType and targetType are required.");
                        let r = e => {
                            e.stopped || this.emitAndWait(n, e.data, t => {
                                t.defaultPrevented && e.preventDefault()
                            })
                        };
                        return e.on(t, r), r
                    }
                    proxyEmitSync(e, t, n) {
                        if (!e || "function" != typeof e.on) throw TypeError("Proxy source must be an EventEmitter");
                        if (e === this) throw ReferenceError("Cannot create recursive proxy.");
                        if (!t || !n) throw TypeError("Parameter sourceType and targetType are required.");
                        let r = e => {
                            if (e.stopped) return;
                            let t = this.createEvent(n, e.data);
                            this.emitEventSync(t), t.defaultPrevented && e.preventDefault()
                        };
                        return e.on(t, r), r
                    }
                    proxyEmitAll(e, t) {
                        for (let n in t) t.hasOwnProperty(n) && this.proxyEmit(e, n, t[n])
                    }
                    proxyEmitAllSync(e, t) {
                        for (let n in t) t.hasOwnProperty(n) && this.proxyEmitSync(e, n, t[n])
                    }
                    onAddListener(e, t, n = {}) {
                        let r = this._metaListeners.add;
                        return u(r, e, t, n) && d(r, e, t, n), this
                    }
                    onRemoveListener(e, t, n = {}) {
                        let r = this._metaListeners.remove;
                        return u(r, e, t, n) && d(r, e, t, n), this
                    }
                }
            },
            8433: (e, t, n) => {
                "use strict";
                n.d(t, {
                    DU: () => eA,
                    AH: () => ev,
                    Ay: () => eP,
                    i7: () => ex
                });
                var r = n(9456),
                    i = n(50148),
                    s = n(35),
                    o = n.n(s);
                let a = function(e) {
                        function t(e, t, r) {
                            var i = t.trim().split(p);
                            t = i;
                            var s = i.length,
                                o = e.length;
                            switch (o) {
                                case 0:
                                case 1:
                                    var a = 0;
                                    for (e = 0 === o ? "" : e[0] + " "; a < s; ++a) t[a] = n(e, t[a], r).trim();
                                    break;
                                default:
                                    var l = a = 0;
                                    for (t = []; a < s; ++a)
                                        for (var c = 0; c < o; ++c) t[l++] = n(e[c] + " ", i[a], r).trim()
                            }
                            return t
                        }

                        function n(e, t, n) {
                            var r = t.charCodeAt(0);
                            switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
                                case 38:
                                    return t.replace(m, "$1" + e.trim());
                                case 58:
                                    return e.trim() + t.replace(m, "$1" + e.trim());
                                default:
                                    if (0 < +n && 0 < t.indexOf("\f")) return t.replace(m, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                            }
                            return e + t
                        }

                        function r(e, t, n, s) {
                            var o = e + ";",
                                a = 2 * t + 3 * n + 4 * s;
                            if (944 === a) {
                                e = o.indexOf(":", 9) + 1;
                                var l = o.substring(e, o.length - 1).trim();
                                return l = o.substring(0, e).trim() + l + ";", 1 === I || 2 === I && i(l, 1) ? "-webkit-" + l + l : l
                            }
                            if (0 === I || 2 === I && !i(o, 1)) return o;
                            switch (a) {
                                case 1015:
                                    return 97 === o.charCodeAt(10) ? "-webkit-" + o + o : o;
                                case 951:
                                    return 116 === o.charCodeAt(3) ? "-webkit-" + o + o : o;
                                case 963:
                                    return 110 === o.charCodeAt(5) ? "-webkit-" + o + o : o;
                                case 1009:
                                    if (100 !== o.charCodeAt(4)) break;
                                case 969:
                                case 942:
                                    return "-webkit-" + o + o;
                                case 978:
                                    return "-webkit-" + o + "-moz-" + o + o;
                                case 1019:
                                case 983:
                                    return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
                                case 883:
                                    if (45 === o.charCodeAt(8)) return "-webkit-" + o + o;
                                    if (0 < o.indexOf("image-set(", 11)) return o.replace(O, "$1-webkit-$2") + o;
                                    break;
                                case 932:
                                    if (45 === o.charCodeAt(4)) switch (o.charCodeAt(5)) {
                                        case 103:
                                            return "-webkit-box-" + o.replace("-grow", "") + "-webkit-" + o + "-ms-" + o.replace("grow", "positive") + o;
                                        case 115:
                                            return "-webkit-" + o + "-ms-" + o.replace("shrink", "negative") + o;
                                        case 98:
                                            return "-webkit-" + o + "-ms-" + o.replace("basis", "preferred-size") + o
                                    }
                                    return "-webkit-" + o + "-ms-" + o + o;
                                case 964:
                                    return "-webkit-" + o + "-ms-flex-" + o + o;
                                case 1023:
                                    if (99 !== o.charCodeAt(8)) break;
                                    return "-webkit-box-pack" + (l = o.substring(o.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + o + "-ms-flex-pack" + l + o;
                                case 1005:
                                    return h.test(o) ? o.replace(d, ":-webkit-") + o.replace(d, ":-moz-") + o : o;
                                case 1e3:
                                    switch (t = (l = o.substring(13).trim()).indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(t)) {
                                        case 226:
                                            l = o.replace(v, "tb");
                                            break;
                                        case 232:
                                            l = o.replace(v, "tb-rl");
                                            break;
                                        case 220:
                                            l = o.replace(v, "lr");
                                            break;
                                        default:
                                            return o
                                    }
                                    return "-webkit-" + o + "-ms-" + l + o;
                                case 1017:
                                    if (-1 === o.indexOf("sticky", 9)) break;
                                case 975:
                                    switch (t = (o = e).length - 10, a = (l = (33 === o.charCodeAt(t) ? o.substring(0, t) : o).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
                                        case 203:
                                            if (111 > l.charCodeAt(8)) break;
                                        case 115:
                                            o = o.replace(l, "-webkit-" + l) + ";" + o;
                                            break;
                                        case 207:
                                        case 102:
                                            o = o.replace(l, "-webkit-" + (102 < a ? "inline-" : "") + "box") + ";" + o.replace(l, "-webkit-" + l) + ";" + o.replace(l, "-ms-" + l + "box") + ";" + o
                                    }
                                    return o + ";";
                                case 938:
                                    if (45 === o.charCodeAt(5)) switch (o.charCodeAt(6)) {
                                        case 105:
                                            return l = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + l + "-ms-flex-" + l + o;
                                        case 115:
                                            return "-webkit-" + o + "-ms-flex-item-" + o.replace(S, "") + o;
                                        default:
                                            return "-webkit-" + o + "-ms-flex-line-pack" + o.replace("align-content", "").replace(S, "") + o
                                    }
                                    break;
                                case 973:
                                case 989:
                                    if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4)) break;
                                case 931:
                                case 953:
                                    if (!0 === w.test(e)) return 115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? r(e.replace("stretch", "fill-available"), t, n, s).replace(":fill-available", ":stretch") : o.replace(l, "-webkit-" + l) + o.replace(l, "-moz-" + l.replace("fill-", "")) + o;
                                    break;
                                case 962:
                                    if (o = "-webkit-" + o + (102 === o.charCodeAt(5) ? "-ms-" + o : "") + o, 211 === n + s && 105 === o.charCodeAt(13) && 0 < o.indexOf("transform", 10)) return o.substring(0, o.indexOf(";", 27) + 1).replace(f, "$1-webkit-$2") + o
                            }
                            return o
                        }

                        function i(e, t) {
                            var n = e.indexOf(1 === t ? ":" : "{"),
                                r = e.substring(0, 3 !== t ? n : 10);
                            return n = e.substring(n + 1, e.length - 1), P(2 !== t ? r : r.replace(T, "$1"), n, t)
                        }

                        function s(e, t) {
                            var n = r(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                            return n !== t + ";" ? n.replace(E, " or ($1)").substring(4) : "(" + t + ")"
                        }

                        function o(e, t, n, r, i, s, o, a, c, u) {
                            for (var d, h = 0, f = t; h < x; ++h) switch (d = A[h].call(l, e, f, n, r, i, s, o, a, c, u)) {
                                case void 0:
                                case !1:
                                case !0:
                                case null:
                                    break;
                                default:
                                    f = d
                            }
                            if (f !== t) return f
                        }

                        function a(e) {
                            return void 0 !== (e = e.prefix) && (P = null, e ? "function" != typeof e ? I = 1 : (I = 2, P = e) : I = 0), a
                        }

                        function l(e, n) {
                            var a = e;
                            if (33 > a.charCodeAt(0) && (a = a.trim()), a = [a], 0 < x) {
                                var l = o(-1, n, a, a, k, C, 0, 0, 0, 0);
                                void 0 !== l && "string" == typeof l && (n = l)
                            }
                            var d = function e(n, a, l, d, h) {
                                for (var f, p, m, v, E, S = 0, T = 0, w = 0, O = 0, A = 0, P = 0, M = m = f = 0, L = 0, U = 0, j = 0, F = 0, $ = l.length, B = $ - 1, q = "", z = "", H = "", W = ""; L < $;) {
                                    if (p = l.charCodeAt(L), L === B && 0 !== T + O + w + S && (0 !== T && (p = 47 === T ? 10 : 47), O = w = S = 0, $++, B++), 0 === T + O + w + S) {
                                        if (L === B && (0 < U && (q = q.replace(u, "")), 0 < q.trim().length)) {
                                            switch (p) {
                                                case 32:
                                                case 9:
                                                case 59:
                                                case 13:
                                                case 10:
                                                    break;
                                                default:
                                                    q += l.charAt(L)
                                            }
                                            p = 59
                                        }
                                        switch (p) {
                                            case 123:
                                                for (f = (q = q.trim()).charCodeAt(0), m = 1, F = ++L; L < $;) {
                                                    switch (p = l.charCodeAt(L)) {
                                                        case 123:
                                                            m++;
                                                            break;
                                                        case 125:
                                                            m--;
                                                            break;
                                                        case 47:
                                                            switch (p = l.charCodeAt(L + 1)) {
                                                                case 42:
                                                                case 47:
                                                                    e: {
                                                                        for (M = L + 1; M < B; ++M) switch (l.charCodeAt(M)) {
                                                                            case 47:
                                                                                if (42 === p && 42 === l.charCodeAt(M - 1) && L + 2 !== M) {
                                                                                    L = M + 1;
                                                                                    break e
                                                                                }
                                                                                break;
                                                                            case 10:
                                                                                if (47 === p) {
                                                                                    L = M + 1;
                                                                                    break e
                                                                                }
                                                                        }
                                                                        L = M
                                                                    }
                                                            }
                                                            break;
                                                        case 91:
                                                            p++;
                                                        case 40:
                                                            p++;
                                                        case 34:
                                                        case 39:
                                                            for (; L++ < B && l.charCodeAt(L) !== p;);
                                                    }
                                                    if (0 === m) break;
                                                    L++
                                                }
                                                if (m = l.substring(F, L), 0 === f && (f = (q = q.replace(c, "").trim()).charCodeAt(0)), 64 === f) {
                                                    switch (0 < U && (q = q.replace(u, "")), p = q.charCodeAt(1)) {
                                                        case 100:
                                                        case 109:
                                                        case 115:
                                                        case 45:
                                                            U = a;
                                                            break;
                                                        default:
                                                            U = N
                                                    }
                                                    if (F = (m = e(a, U, m, p, h + 1)).length, 0 < x && (E = o(3, m, U = t(N, q, j), a, k, C, F, p, h, d), q = U.join(""), void 0 !== E && 0 === (F = (m = E.trim()).length) && (p = 0, m = "")), 0 < F) switch (p) {
                                                        case 115:
                                                            q = q.replace(b, s);
                                                        case 100:
                                                        case 109:
                                                        case 45:
                                                            m = q + "{" + m + "}";
                                                            break;
                                                        case 107:
                                                            m = (q = q.replace(g, "$1 $2")) + "{" + m + "}", m = 1 === I || 2 === I && i("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                                            break;
                                                        default:
                                                            m = q + m, 112 === d && (z += m, m = "")
                                                    } else m = ""
                                                } else m = e(a, t(a, q, j), m, d, h + 1);
                                                H += m, m = j = U = M = f = 0, q = "", p = l.charCodeAt(++L);
                                                break;
                                            case 125:
                                            case 59:
                                                if (1 < (F = (q = (0 < U ? q.replace(u, "") : q).trim()).length)) switch (0 === M && (45 === (f = q.charCodeAt(0)) || 96 < f && 123 > f) && (F = (q = q.replace(" ", ":")).length), 0 < x && void 0 !== (E = o(1, q, a, n, k, C, z.length, d, h, d)) && 0 === (F = (q = E.trim()).length) && (q = "\0\0"), f = q.charCodeAt(0), p = q.charCodeAt(1), f) {
                                                    case 0:
                                                        break;
                                                    case 64:
                                                        if (105 === p || 99 === p) {
                                                            W += q + l.charAt(L);
                                                            break
                                                        }
                                                    default:
                                                        58 !== q.charCodeAt(F - 1) && (z += r(q, f, p, q.charCodeAt(2)))
                                                }
                                                j = U = M = f = 0, q = "", p = l.charCodeAt(++L)
                                        }
                                    }
                                    switch (p) {
                                        case 13:
                                        case 10:
                                            47 === T ? T = 0 : 0 === 1 + f && 107 !== d && 0 < q.length && (U = 1, q += "\0"), 0 < x * D && o(0, q, a, n, k, C, z.length, d, h, d), C = 1, k++;
                                            break;
                                        case 59:
                                        case 125:
                                            if (0 === T + O + w + S) {
                                                C++;
                                                break
                                            }
                                        default:
                                            switch (C++, v = l.charAt(L), p) {
                                                case 9:
                                                case 32:
                                                    if (0 === O + S + T) switch (A) {
                                                        case 44:
                                                        case 58:
                                                        case 9:
                                                        case 32:
                                                            v = "";
                                                            break;
                                                        default:
                                                            32 !== p && (v = " ")
                                                    }
                                                    break;
                                                case 0:
                                                    v = "\\0";
                                                    break;
                                                case 12:
                                                    v = "\\f";
                                                    break;
                                                case 11:
                                                    v = "\\v";
                                                    break;
                                                case 38:
                                                    0 === O + T + S && (U = j = 1, v = "\f" + v);
                                                    break;
                                                case 108:
                                                    if (0 === O + T + S + R && 0 < M) switch (L - M) {
                                                        case 2:
                                                            112 === A && 58 === l.charCodeAt(L - 3) && (R = A);
                                                        case 8:
                                                            111 === P && (R = P)
                                                    }
                                                    break;
                                                case 58:
                                                    0 === O + T + S && (M = L);
                                                    break;
                                                case 44:
                                                    0 === T + w + O + S && (U = 1, v += "\r");
                                                    break;
                                                case 34:
                                                case 39:
                                                    0 === T && (O = O === p ? 0 : 0 === O ? p : O);
                                                    break;
                                                case 91:
                                                    0 === O + T + w && S++;
                                                    break;
                                                case 93:
                                                    0 === O + T + w && S--;
                                                    break;
                                                case 41:
                                                    0 === O + T + S && w--;
                                                    break;
                                                case 40:
                                                    0 === O + T + S && (0 === f && (2 * A + 3 * P == 533 || (f = 1)), w++);
                                                    break;
                                                case 64:
                                                    0 === T + w + O + S + M + m && (m = 1);
                                                    break;
                                                case 42:
                                                case 47:
                                                    if (!(0 < O + S + w)) switch (T) {
                                                        case 0:
                                                            switch (2 * p + 3 * l.charCodeAt(L + 1)) {
                                                                case 235:
                                                                    T = 47;
                                                                    break;
                                                                case 220:
                                                                    F = L, T = 42
                                                            }
                                                            break;
                                                        case 42:
                                                            47 === p && 42 === A && F + 2 !== L && (33 === l.charCodeAt(F + 2) && (z += l.substring(F, L + 1)), v = "", T = 0)
                                                    }
                                            }
                                            0 === T && (q += v)
                                    }
                                    P = A, A = p, L++
                                }
                                if (0 < (F = z.length)) {
                                    if (U = a, 0 < x && void 0 !== (E = o(2, z, U, n, k, C, F, d, h, d)) && 0 === (z = E).length) return W + z + H;
                                    if (z = U.join(",") + "{" + z + "}", 0 != I * R) {
                                        switch (2 !== I || i(z, 2) || (R = 0), R) {
                                            case 111:
                                                z = z.replace(y, ":-moz-$1") + z;
                                                break;
                                            case 112:
                                                z = z.replace(_, "::-webkit-input-$1") + z.replace(_, "::-moz-$1") + z.replace(_, ":-ms-input-$1") + z
                                        }
                                        R = 0
                                    }
                                }
                                return W + z + H
                            }(N, a, n, 0, 0);
                            return 0 < x && void 0 !== (l = o(-2, d, a, a, k, C, d.length, 0, 0, 0)) && (d = l), R = 0, C = k = 1, d
                        }
                        var c = /^\0+/g,
                            u = /[\0\r\f]/g,
                            d = /: */g,
                            h = /zoo|gra/,
                            f = /([,: ])(transform)/g,
                            p = /,\r+?/g,
                            m = /([\t\r\n ])*\f?&/g,
                            g = /@(k\w+)\s*(\S*)\s*/,
                            _ = /::(place)/g,
                            y = /:(read-only)/g,
                            v = /[svh]\w+-[tblr]{2}/,
                            b = /\(\s*(.*)\s*\)/g,
                            E = /([\s\S]*?);/g,
                            S = /-self|flex-/g,
                            T = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                            w = /stretch|:\s*\w+\-(?:conte|avail)/,
                            O = /([^-])(image-set\()/,
                            C = 1,
                            k = 1,
                            R = 0,
                            I = 1,
                            N = [],
                            A = [],
                            x = 0,
                            P = null,
                            D = 0,
                            M = "";
                        return l.use = function e(t) {
                            switch (t) {
                                case void 0:
                                case null:
                                    x = A.length = 0;
                                    break;
                                default:
                                    if ("function" == typeof t) A[x++] = t;
                                    else if ("object" == typeof t)
                                        for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                                    else D = 0 | !!t
                            }
                            return e
                        }, l.set = a, void 0 !== e && a(e), l
                    },
                    l = {
                        animationIterationCount: 1,
                        borderImageOutset: 1,
                        borderImageSlice: 1,
                        borderImageWidth: 1,
                        boxFlex: 1,
                        boxFlexGroup: 1,
                        boxOrdinalGroup: 1,
                        columnCount: 1,
                        columns: 1,
                        flex: 1,
                        flexGrow: 1,
                        flexPositive: 1,
                        flexShrink: 1,
                        flexNegative: 1,
                        flexOrder: 1,
                        gridRow: 1,
                        gridRowEnd: 1,
                        gridRowSpan: 1,
                        gridRowStart: 1,
                        gridColumn: 1,
                        gridColumnEnd: 1,
                        gridColumnSpan: 1,
                        gridColumnStart: 1,
                        msGridRow: 1,
                        msGridRowSpan: 1,
                        msGridColumn: 1,
                        msGridColumnSpan: 1,
                        fontWeight: 1,
                        lineHeight: 1,
                        opacity: 1,
                        order: 1,
                        orphans: 1,
                        tabSize: 1,
                        widows: 1,
                        zIndex: 1,
                        zoom: 1,
                        WebkitLineClamp: 1,
                        fillOpacity: 1,
                        floodOpacity: 1,
                        stopOpacity: 1,
                        strokeDasharray: 1,
                        strokeDashoffset: 1,
                        strokeMiterlimit: 1,
                        strokeOpacity: 1,
                        strokeWidth: 1
                    };
                var c = n(1342),
                    u = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                    d = (0, c.A)(function(e) {
                        return u.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
                    }),
                    h = n(13027),
                    f = n.n(h),
                    p = n(27157);

                function m() {
                    return (m = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }).apply(this, arguments)
                }
                var g = function(e, t) {
                        for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
                        return n
                    },
                    _ = function(e) {
                        return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0, r.typeOf)(e)
                    },
                    y = Object.freeze([]),
                    v = Object.freeze({});

                function b(e) {
                    return "function" == typeof e
                }

                function E(e) {
                    return e.displayName || e.name || "Component"
                }

                function S(e) {
                    return e && "string" == typeof e.styledComponentId
                }
                var T = void 0 !== p && void 0 !== p.env && (p.env.REACT_APP_SC_ATTR || p.env.SC_ATTR) || "data-styled",
                    w = "undefined" != typeof window && "HTMLElement" in window,
                    O = !!("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : void 0 !== p && void 0 !== p.env && (void 0 !== p.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== p.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== p.env.REACT_APP_SC_DISABLE_SPEEDY && p.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== p.env.SC_DISABLE_SPEEDY && "" !== p.env.SC_DISABLE_SPEEDY && "false" !== p.env.SC_DISABLE_SPEEDY && p.env.SC_DISABLE_SPEEDY)),
                    C = {};

                function k(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    throw Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
                }
                var R = function() {
                        function e(e) {
                            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
                        }
                        var t = e.prototype;
                        return t.indexOfGroup = function(e) {
                            for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                            return t
                        }, t.insertRules = function(e, t) {
                            if (e >= this.groupSizes.length) {
                                for (var n = this.groupSizes, r = n.length, i = r; e >= i;)(i <<= 1) < 0 && k(16, "" + e);
                                this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
                                for (var s = r; s < i; s++) this.groupSizes[s] = 0
                            }
                            for (var o = this.indexOfGroup(e + 1), a = 0, l = t.length; a < l; a++) this.tag.insertRule(o, t[a]) && (this.groupSizes[e]++, o++)
                        }, t.clearGroup = function(e) {
                            if (e < this.length) {
                                var t = this.groupSizes[e],
                                    n = this.indexOfGroup(e),
                                    r = n + t;
                                this.groupSizes[e] = 0;
                                for (var i = n; i < r; i++) this.tag.deleteRule(n)
                            }
                        }, t.getGroup = function(e) {
                            var t = "";
                            if (e >= this.length || 0 === this.groupSizes[e]) return t;
                            for (var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n, s = r; s < i; s++) t += this.tag.getRule(s) + "/*!sc*/\n";
                            return t
                        }, e
                    }(),
                    I = new Map,
                    N = new Map,
                    A = 1,
                    x = function(e) {
                        if (I.has(e)) return I.get(e);
                        for (; N.has(A);) A++;
                        var t = A++;
                        return I.set(e, t), N.set(t, e), t
                    },
                    P = function(e, t) {
                        t >= A && (A = t + 1), I.set(e, t), N.set(t, e)
                    },
                    D = "style[" + T + '][data-styled-version="5.3.11"]',
                    M = RegExp("^" + T + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
                    L = function(e, t, n) {
                        for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)(r = i[s]) && e.registerName(t, r)
                    },
                    U = function(e, t) {
                        for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], i = 0, s = n.length; i < s; i++) {
                            var o = n[i].trim();
                            if (o) {
                                var a = o.match(M);
                                if (a) {
                                    var l = 0 | parseInt(a[1], 10),
                                        c = a[2];
                                    0 !== l && (P(c, l), L(e, c, a[3]), e.getTag().insertRules(l, r)), r.length = 0
                                } else r.push(o)
                            }
                        }
                    },
                    j = function() {
                        return n.nc
                    },
                    F = function(e) {
                        var t = document.head,
                            n = e || t,
                            r = document.createElement("style"),
                            i = function(e) {
                                for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                                    var r = t[n];
                                    if (r && 1 === r.nodeType && r.hasAttribute(T)) return r
                                }
                            }(n),
                            s = void 0 !== i ? i.nextSibling : null;
                        r.setAttribute(T, "active"), r.setAttribute("data-styled-version", "5.3.11");
                        var o = j();
                        return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r
                    },
                    $ = function() {
                        function e(e) {
                            var t = this.element = F(e);
                            t.appendChild(document.createTextNode("")), this.sheet = function(e) {
                                if (e.sheet) return e.sheet;
                                for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                                    var i = t[n];
                                    if (i.ownerNode === e) return i
                                }
                                k(17)
                            }(t), this.length = 0
                        }
                        var t = e.prototype;
                        return t.insertRule = function(e, t) {
                            try {
                                return this.sheet.insertRule(t, e), this.length++, !0
                            } catch (e) {
                                return !1
                            }
                        }, t.deleteRule = function(e) {
                            this.sheet.deleteRule(e), this.length--
                        }, t.getRule = function(e) {
                            var t = this.sheet.cssRules[e];
                            return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
                        }, e
                    }(),
                    B = function() {
                        function e(e) {
                            var t = this.element = F(e);
                            this.nodes = t.childNodes, this.length = 0
                        }
                        var t = e.prototype;
                        return t.insertRule = function(e, t) {
                            if (e <= this.length && e >= 0) {
                                var n = document.createTextNode(t),
                                    r = this.nodes[e];
                                return this.element.insertBefore(n, r || null), this.length++, !0
                            }
                            return !1
                        }, t.deleteRule = function(e) {
                            this.element.removeChild(this.nodes[e]), this.length--
                        }, t.getRule = function(e) {
                            return e < this.length ? this.nodes[e].textContent : ""
                        }, e
                    }(),
                    q = function() {
                        function e(e) {
                            this.rules = [], this.length = 0
                        }
                        var t = e.prototype;
                        return t.insertRule = function(e, t) {
                            return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
                        }, t.deleteRule = function(e) {
                            this.rules.splice(e, 1), this.length--
                        }, t.getRule = function(e) {
                            return e < this.length ? this.rules[e] : ""
                        }, e
                    }(),
                    z = w,
                    H = {
                        isServer: !w,
                        useCSSOMInjection: !O
                    },
                    W = function() {
                        function e(e, t, n) {
                            void 0 === e && (e = v), void 0 === t && (t = {}), this.options = m({}, H, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && w && z && (z = !1, function(e) {
                                for (var t = document.querySelectorAll(D), n = 0, r = t.length; n < r; n++) {
                                    var i = t[n];
                                    i && "active" !== i.getAttribute(T) && (U(e, i), i.parentNode && i.parentNode.removeChild(i))
                                }
                            }(this))
                        }
                        e.registerId = function(e) {
                            return x(e)
                        };
                        var t = e.prototype;
                        return t.reconstructWithOptions = function(t, n) {
                            return void 0 === n && (n = !0), new e(m({}, this.options, {}, t), this.gs, n && this.names || void 0)
                        }, t.allocateGSInstance = function(e) {
                            return this.gs[e] = (this.gs[e] || 0) + 1
                        }, t.getTag = function() {
                            var e, t, n, r;
                            return this.tag || (this.tag = (t = (e = this.options).isServer, n = e.useCSSOMInjection, r = e.target, new R(t ? new q(r) : n ? new $(r) : new B(r))))
                        }, t.hasNameForId = function(e, t) {
                            return this.names.has(e) && this.names.get(e).has(t)
                        }, t.registerName = function(e, t) {
                            if (x(e), this.names.has(e)) this.names.get(e).add(t);
                            else {
                                var n = new Set;
                                n.add(t), this.names.set(e, n)
                            }
                        }, t.insertRules = function(e, t, n) {
                            this.registerName(e, t), this.getTag().insertRules(x(e), n)
                        }, t.clearNames = function(e) {
                            this.names.has(e) && this.names.get(e).clear()
                        }, t.clearRules = function(e) {
                            this.getTag().clearGroup(x(e)), this.clearNames(e)
                        }, t.clearTag = function() {
                            this.tag = void 0
                        }, t.toString = function() {
                            return function(e) {
                                for (var t = e.getTag(), n = t.length, r = "", i = 0; i < n; i++) {
                                    var s, o = (s = i, N.get(s));
                                    if (void 0 !== o) {
                                        var a = e.names.get(o),
                                            l = t.getGroup(i);
                                        if (a && l && a.size) {
                                            var c = T + ".g" + i + '[id="' + o + '"]',
                                                u = "";
                                            void 0 !== a && a.forEach(function(e) {
                                                e.length > 0 && (u += e + ",")
                                            }), r += "" + l + c + '{content:"' + u + '"}/*!sc*/\n'
                                        }
                                    }
                                }
                                return r
                            }(this)
                        }, e
                    }(),
                    G = /(a)(d)/gi,
                    J = function(e) {
                        return String.fromCharCode(e + (e > 25 ? 39 : 97))
                    };

                function V(e) {
                    var t, n = "";
                    for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = J(t % 52) + n;
                    return (J(t % 52) + n).replace(G, "$1-$2")
                }
                var K = function(e, t) {
                        for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
                        return e
                    },
                    X = function(e) {
                        return K(5381, e)
                    };

                function Q(e) {
                    for (var t = 0; t < e.length; t += 1) {
                        var n = e[t];
                        if (b(n) && !S(n)) return !1
                    }
                    return !0
                }
                var Y = X("5.3.11"),
                    Z = function() {
                        function e(e, t, n) {
                            this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && Q(e), this.componentId = t, this.baseHash = K(Y, t), this.baseStyle = n, W.registerId(t)
                        }
                        return e.prototype.generateAndInjectStyles = function(e, t, n) {
                            var r = this.componentId,
                                i = [];
                            if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash)
                                if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) i.push(this.staticRulesId);
                                else {
                                    var s = e_(this.rules, e, t, n).join(""),
                                        o = V(K(this.baseHash, s) >>> 0);
                                    if (!t.hasNameForId(r, o)) {
                                        var a = n(s, "." + o, void 0, r);
                                        t.insertRules(r, o, a)
                                    }
                                    i.push(o), this.staticRulesId = o
                                }
                            else {
                                for (var l = this.rules.length, c = K(this.baseHash, n.hash), u = "", d = 0; d < l; d++) {
                                    var h = this.rules[d];
                                    if ("string" == typeof h) u += h;
                                    else if (h) {
                                        var f = e_(h, e, t, n),
                                            p = Array.isArray(f) ? f.join("") : f;
                                        c = K(c, p + d), u += p
                                    }
                                }
                                if (u) {
                                    var m = V(c >>> 0);
                                    if (!t.hasNameForId(r, m)) {
                                        var g = n(u, "." + m, void 0, r);
                                        t.insertRules(r, m, g)
                                    }
                                    i.push(m)
                                }
                            }
                            return i.join(" ")
                        }, e
                    }(),
                    ee = /^\s*\/\/.*$/gm,
                    et = [":", "[", ".", "#"];

                function en(e) {
                    var t, n, r, i, s = void 0 === e ? v : e,
                        o = s.options,
                        l = void 0 === o ? v : o,
                        c = s.plugins,
                        u = void 0 === c ? y : c,
                        d = new a(l),
                        h = [],
                        f = function(e) {
                            function t(t) {
                                if (t) try {
                                    e(t + "}")
                                } catch (e) {}
                            }
                            return function(n, r, i, s, o, a, l, c, u, d) {
                                switch (n) {
                                    case 1:
                                        if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                                        break;
                                    case 2:
                                        if (0 === c) return r + "/*|*/";
                                        break;
                                    case 3:
                                        switch (c) {
                                            case 102:
                                            case 112:
                                                return e(i[0] + r), "";
                                            default:
                                                return r + (0 === d ? "/*|*/" : "")
                                        }
                                    case -2:
                                        r.split("/*|*/}").forEach(t)
                                }
                            }
                        }(function(e) {
                            h.push(e)
                        }),
                        p = function(e, r, s) {
                            return 0 === r && -1 !== et.indexOf(s[n.length]) || s.match(i) ? e : "." + t
                        };

                    function m(e, s, o, a) {
                        void 0 === a && (a = "&");
                        var l = e.replace(ee, ""),
                            c = s && o ? o + " " + s + " { " + l + " }" : l;
                        return t = a, r = RegExp("\\" + (n = s) + "\\b", "g"), i = RegExp("(\\" + n + "\\b){2,}"), d(o || !s ? "" : s, c)
                    }
                    return d.use([].concat(u, [function(e, t, i) {
                        2 === e && i.length && i[0].lastIndexOf(n) > 0 && (i[0] = i[0].replace(r, p))
                    }, f, function(e) {
                        if (-2 === e) {
                            var t = h;
                            return h = [], t
                        }
                    }])), m.hash = u.length ? u.reduce(function(e, t) {
                        return t.name || k(15), K(e, t.name)
                    }, 5381).toString() : "", m
                }
                var er = i.createContext(),
                    ei = (er.Consumer, i.createContext()),
                    es = (ei.Consumer, new W),
                    eo = en();

                function ea() {
                    return (0, i.useContext)(er) || es
                }

                function el() {
                    return (0, i.useContext)(ei) || eo
                }

                function ec(e) {
                    var t = (0, i.useState)(e.stylisPlugins),
                        n = t[0],
                        r = t[1],
                        s = ea(),
                        a = (0, i.useMemo)(function() {
                            var t = s;
                            return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                                target: e.target
                            }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                                useCSSOMInjection: !1
                            })), t
                        }, [e.disableCSSOMInjection, e.sheet, e.target]),
                        l = (0, i.useMemo)(function() {
                            return en({
                                options: {
                                    prefix: !e.disableVendorPrefixes
                                },
                                plugins: n
                            })
                        }, [e.disableVendorPrefixes, n]);
                    return (0, i.useEffect)(function() {
                        o()(n, e.stylisPlugins) || r(e.stylisPlugins)
                    }, [e.stylisPlugins]), i.createElement(er.Provider, {
                        value: a
                    }, i.createElement(ei.Provider, {
                        value: l
                    }, e.children))
                }
                var eu = function() {
                        function e(e, t) {
                            var n = this;
                            this.inject = function(e, t) {
                                void 0 === t && (t = eo);
                                var r = n.name + t.hash;
                                e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
                            }, this.toString = function() {
                                return k(12, String(n.name))
                            }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t
                        }
                        return e.prototype.getName = function(e) {
                            return void 0 === e && (e = eo), this.name + e.hash
                        }, e
                    }(),
                    ed = /([A-Z])/,
                    eh = /([A-Z])/g,
                    ef = /^ms-/,
                    ep = function(e) {
                        return "-" + e.toLowerCase()
                    };

                function em(e) {
                    return ed.test(e) ? e.replace(eh, ep).replace(ef, "-ms-") : e
                }
                var eg = function(e) {
                    return null == e || !1 === e || "" === e
                };

                function e_(e, t, n, r) {
                    if (Array.isArray(e)) {
                        for (var i, s = [], o = 0, a = e.length; o < a; o += 1) "" !== (i = e_(e[o], t, n, r)) && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
                        return s
                    }
                    return eg(e) ? "" : S(e) ? "." + e.styledComponentId : b(e) ? "function" != typeof e || e.prototype && e.prototype.isReactComponent || !t ? e : e_(e(t), t, n, r) : e instanceof eu ? n ? (e.inject(n, r), e.getName(r)) : e : _(e) ? function e(t, n) {
                        var r, i = [];
                        for (var s in t) t.hasOwnProperty(s) && !eg(t[s]) && (Array.isArray(t[s]) && t[s].isCss || b(t[s]) ? i.push(em(s) + ":", t[s], ";") : _(t[s]) ? i.push.apply(i, e(t[s], s)) : i.push(em(s) + ": " + (null == (r = t[s]) || "boolean" == typeof r || "" === r ? "" : "number" != typeof r || 0 === r || s in l || s.startsWith("--") ? String(r).trim() : r + "px") + ";"));
                        return n ? [n + " {"].concat(i, ["}"]) : i
                    }(e) : e.toString()
                }
                var ey = function(e) {
                    return Array.isArray(e) && (e.isCss = !0), e
                };

                function ev(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return b(e) || _(e) ? ey(e_(g(y, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : ey(e_(g(e, n)))
                }
                var eb = function(e, t, n) {
                        return void 0 === n && (n = v), e.theme !== n.theme && e.theme || t || n.theme
                    },
                    eE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                    eS = /(^-|-$)/g;

                function eT(e) {
                    return e.replace(eE, "-").replace(eS, "")
                }
                var ew = function(e) {
                    return V(X(e) >>> 0)
                };

                function eO(e) {
                    return "string" == typeof e
                }
                var eC = function(e) {
                        return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
                    },
                    ek = i.createContext();
                ek.Consumer;
                var eR = {},
                    eI = function(e) {
                        return function e(t, n, i) {
                            if (void 0 === i && (i = v), !(0, r.isValidElementType)(n)) return k(1, String(n));
                            var s = function() {
                                return t(n, i, ev.apply(void 0, arguments))
                            };
                            return s.withConfig = function(r) {
                                return e(t, n, m({}, i, {}, r))
                            }, s.attrs = function(r) {
                                return e(t, n, m({}, i, {
                                    attrs: Array.prototype.concat(i.attrs, r).filter(Boolean)
                                }))
                            }, s
                        }(function e(t, n, r) {
                            var s = S(t),
                                o = !eO(t),
                                a = n.attrs,
                                l = void 0 === a ? y : a,
                                c = n.componentId,
                                u = void 0 === c ? (w = n.displayName, O = n.parentComponentId, eR[C = "string" != typeof w ? "sc" : eT(w)] = (eR[C] || 0) + 1, k = C + "-" + ew("5.3.11" + C + eR[C]), O ? O + "-" + k : k) : c,
                                h = n.displayName,
                                p = void 0 === h ? eO(t) ? "styled." + t : "Styled(" + E(t) + ")" : h,
                                g = n.displayName && n.componentId ? eT(n.displayName) + "-" + n.componentId : n.componentId || u,
                                _ = s && t.attrs ? Array.prototype.concat(t.attrs, l).filter(Boolean) : l,
                                T = n.shouldForwardProp;
                            s && t.shouldForwardProp && (T = n.shouldForwardProp ? function(e, r, i) {
                                return t.shouldForwardProp(e, r, i) && n.shouldForwardProp(e, r, i)
                            } : t.shouldForwardProp);
                            var w, O, C, k, R, I = new Z(r, g, s ? t.componentStyle : void 0),
                                N = I.isStatic && 0 === l.length,
                                A = function(e, t) {
                                    return function(e, t, n, r) {
                                        var s, o, a, l, c, u = e.attrs,
                                            h = e.componentStyle,
                                            f = e.defaultProps,
                                            p = e.foldedComponentIds,
                                            g = e.shouldForwardProp,
                                            _ = e.styledComponentId,
                                            y = e.target,
                                            E = (s = eb(t, (0, i.useContext)(ek), f) || v, void 0 === s && (s = v), o = m({}, t, {
                                                theme: s
                                            }), a = {}, u.forEach(function(e) {
                                                var t, n, r, i = e;
                                                for (t in b(i) && (i = i(o)), i) o[t] = a[t] = "className" === t ? (n = a[t], r = i[t], n && r ? n + " " + r : n || r) : i[t]
                                            }), [o, a]),
                                            S = E[0],
                                            T = E[1],
                                            w = (l = ea(), c = el(), r ? h.generateAndInjectStyles(v, l, c) : h.generateAndInjectStyles(S, l, c)),
                                            O = T.$as || t.$as || T.as || t.as || y,
                                            C = eO(O),
                                            k = T !== t ? m({}, t, {}, T) : t,
                                            R = {};
                                        for (var I in k) "$" !== I[0] && "as" !== I && ("forwardedAs" === I ? R.as = k[I] : (g ? g(I, d, O) : !C || d(I)) && (R[I] = k[I]));
                                        return t.style && T.style !== t.style && (R.style = m({}, t.style, {}, T.style)), R.className = Array.prototype.concat(p, _, w !== _ ? w : null, t.className, T.className).filter(Boolean).join(" "), R.ref = n, (0, i.createElement)(O, R)
                                    }(R, e, t, N)
                                };
                            return A.displayName = p, (R = i.forwardRef(A)).attrs = _, R.componentStyle = I, R.displayName = p, R.shouldForwardProp = T, R.foldedComponentIds = s ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : y, R.styledComponentId = g, R.target = s ? t.target : t, R.withComponent = function(t) {
                                var i = n.componentId,
                                    s = function(e, t) {
                                        if (null == e) return {};
                                        var n, r, i = {},
                                            s = Object.keys(e);
                                        for (r = 0; r < s.length; r++) t.indexOf(n = s[r]) >= 0 || (i[n] = e[n]);
                                        return i
                                    }(n, ["componentId"]),
                                    o = i && i + "-" + (eO(t) ? t : eT(E(t)));
                                return e(t, m({}, s, {
                                    attrs: _,
                                    componentId: o
                                }), r)
                            }, Object.defineProperty(R, "defaultProps", {
                                get: function() {
                                    return this._foldedDefaultProps
                                },
                                set: function(e) {
                                    this._foldedDefaultProps = s ? function e(t) {
                                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                                        for (var s = 0; s < r.length; s++) {
                                            var o = r[s];
                                            if (eC(o))
                                                for (var a in o) "__proto__" !== a && "constructor" !== a && "prototype" !== a && function(t, n, r) {
                                                    var i = t[r];
                                                    eC(n) && eC(i) ? e(i, n) : t[r] = n
                                                }(t, o[a], a)
                                        }
                                        return t
                                    }({}, t.defaultProps, e) : e
                                }
                            }), Object.defineProperty(R, "toString", {
                                value: function() {
                                    return "." + R.styledComponentId
                                }
                            }), o && f()(R, t, {
                                attrs: !0,
                                componentStyle: !0,
                                displayName: !0,
                                foldedComponentIds: !0,
                                shouldForwardProp: !0,
                                styledComponentId: !0,
                                target: !0,
                                withComponent: !0
                            }), R
                        }, e)
                    };
                ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
                    eI[e] = eI(e)
                });
                var eN = function() {
                    function e(e, t) {
                        this.rules = e, this.componentId = t, this.isStatic = Q(e), W.registerId(this.componentId + 1)
                    }
                    var t = e.prototype;
                    return t.createStyles = function(e, t, n, r) {
                        var i = r(e_(this.rules, t, n, r).join(""), ""),
                            s = this.componentId + e;
                        n.insertRules(s, s, i)
                    }, t.removeStyles = function(e, t) {
                        t.clearRules(this.componentId + e)
                    }, t.renderStyles = function(e, t, n, r) {
                        e > 2 && W.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
                    }, e
                }();

                function eA(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var s = ev.apply(void 0, [e].concat(n)),
                        o = "sc-global-" + ew(JSON.stringify(s)),
                        a = new eN(s, o);

                    function l(e) {
                        var t = ea(),
                            n = el(),
                            r = (0, i.useContext)(ek),
                            s = (0, i.useRef)(t.allocateGSInstance(o)).current;
                        return t.server && c(s, e, t, r, n), (0, i.useLayoutEffect)(function() {
                            if (!t.server) return c(s, e, t, r, n),
                                function() {
                                    return a.removeStyles(s, t)
                                }
                        }, [s, e, t, r, n]), null
                    }

                    function c(e, t, n, r, i) {
                        if (a.isStatic) a.renderStyles(e, C, n, i);
                        else {
                            var s = m({}, t, {
                                theme: eb(t, r, l.defaultProps)
                            });
                            a.renderStyles(e, s, n, i)
                        }
                    }
                    return i.memo(l)
                }

                function ex(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = ev.apply(void 0, [e].concat(n)).join("");
                    return new eu(ew(i), i)
                }! function() {
                    var e = (function() {
                        var e = this;
                        this._emitSheetCSS = function() {
                            var t = e.instance.toString();
                            if (!t) return "";
                            var n = j();
                            return "<style " + [n && 'nonce="' + n + '"', T + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean).join(" ") + ">" + t + "</style>"
                        }, this.getStyleTags = function() {
                            return e.sealed ? k(2) : e._emitSheetCSS()
                        }, this.getStyleElement = function() {
                            if (e.sealed) return k(2);
                            var t, n = ((t = {})[T] = "", t["data-styled-version"] = "5.3.11", t.dangerouslySetInnerHTML = {
                                    __html: e.instance.toString()
                                }, t),
                                r = j();
                            return r && (n.nonce = r), [i.createElement("style", m({}, n, {
                                key: "sc-0-0"
                            }))]
                        }, this.seal = function() {
                            e.sealed = !0
                        }, this.instance = new W({
                            isServer: !0
                        }), this.sealed = !1
                    }).prototype;
                    e.collectStyles = function(e) {
                        return this.sealed ? k(2) : i.createElement(ec, {
                            sheet: this.instance
                        }, e)
                    }, e.interleaveWithNodeStream = function(e) {
                        return k(3)
                    }
                }();
                let eP = eI
            },
            8875: (e, t, n) => {
                "use strict";
                n.d(t, {
                    T: () => r
                });
                let r = !1
            },
            9228: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Xr: () => o,
                    gt: () => s,
                    xv: () => i
                });
                var r = n(15677);

                function i(e, t = 0) {
                    return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0,t)}...`
                }

                function s(e, t) {
                    if (!Array.isArray(e)) return "";
                    let n = [];
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t];
                        try {
                            (0, r.L2)(i) ? n.push("[VueViewModel]"): n.push(String(i))
                        } catch (e) {
                            n.push("[value cannot be serialized]")
                        }
                    }
                    return n.join(t)
                }

                function o(e, t = [], n = !1) {
                    return t.some(t => (function(e, t, n = !1) {
                        return !!(0, r.Kg)(e) && ((0, r.gd)(t) ? t.test(e) : !!(0, r.Kg)(t) && (n ? e === t : e.includes(t)))
                    })(e, t, n))
                }
            },
            9423: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.hexToBase64 = void 0;
                var r = n(26915);
                t.hexToBase64 = function(e) {
                    if (!e || e.length % 2 != 0) throw TypeError("Invalid hexString value.");
                    var t = e.split("").reduce(function(e, t, n) {
                            return n % 2 == 0 ? e.push(t) : e[e.length - 1] = "" + e[e.length - 1] + t, e
                        }, []),
                        n = String.fromCharCode.apply(null, t.map(function(e) {
                            var t = parseInt(e, 16);
                            if (isNaN(t)) throw TypeError("Invalid hexString value.");
                            return t
                        }));
                    return r.Base64.encode(n)
                }
            },
            9456: (e, t, n) => {
                "use strict";
                e.exports = n(1092)
            },
            10620: (e, t, n) => {
                "use strict";
                n.d(t, {
                    f: () => o,
                    r: () => s
                });
                var r = n(4982);
                let i = "_sentrySpan";

                function s(e, t) {
                    t ? (0, r.my)(e, i, t) : delete e[i]
                }

                function o(e) {
                    return e[i]
                }
            },
            12213: (e, t, n) => {
                "use strict";
                n.d(t, {
                    n: () => a
                });
                var r = n(82643);
                let i = {
                    baseTime: 200,
                    ceiling: 0,
                    curve: "linear",
                    jitter: !0
                };
                class s {
                    constructor(e = {}) {
                        this._curve = e.curve || i.curve, this._baseTime = e.baseTime || i.baseTime, this._ceiling = e.ceiling || i.ceiling, this._jitter = "jitter" in e ? !!e.jitter : i.jitter
                    }
                    getTime(e) {
                        let t;
                        switch (this._curve) {
                            case "static":
                                t = 1;
                                break;
                            case "logarithmic":
                                t = Math.log(e);
                                break;
                            case "exponential":
                                t = Math.pow(Math.E, e);
                                break;
                            default:
                                t = e + 1
                        }
                        let n = Math.min(0x100000000, Math.floor(t * this._baseTime));
                        return this._ceiling && (n = Math.min(n, this._ceiling)), this._jitter ? function(e) {
                            let t = e / 5;
                            return Math.floor(e - t / 2 + Math.random() * t)
                        }(n) : n
                    }
                }
                let o = {
                    backoffInitial: !1,
                    baseTime: 200,
                    ceiling: 0,
                    curve: "linear",
                    jitter: !0,
                    maxDuration: 1 / 0,
                    maxRetries: 1 / 0,
                    maxTime: 1 / 0,
                    retryPredicate: () => !0
                };
                class a {
                    constructor(e, t) {
                        this._resolver = function() {
                            let e, t;
                            return {
                                promise: new Promise((n, r) => {
                                    e = n, t = r
                                }),
                                resolve: e,
                                reject: t
                            }
                        }(), this._ts = 0, this._callCount = 0, this._tickInterval = 0, this._isRunning = !1, this._isDestroyed = !1;
                        let n = Object.assign(Object.assign({}, o), t),
                            {
                                backoffInitial: i,
                                maxDuration: a,
                                maxRetries: l,
                                maxTime: c,
                                retryPredicate: u
                            } = n,
                            d = (0, r.__rest)(n, ["backoffInitial", "maxDuration", "maxRetries", "maxTime", "retryPredicate"]);
                        this._fn = e, this._backoffInitial = i, this._maxDuration = a, this._maxRetries = l, this._maxTime = c, this._retryPredicate = u, this._backoffInitial = i, this._counter = new s(d), this._backoffInitial && (this._maxRetries += 1)
                    }
                    static init(e, t = {}) {
                        return new a(e, t).start()
                    }
                    _destroy() {
                        this._isRunning = !1, this._isDestroyed = !0
                    }
                    _failure(e) {
                        if (!this._isDestroyed)
                            if (e && "retryAfter" in e) this._retryAfter(e);
                            else {
                                let t = this._counter.getTime(this._callCount);
                                this._shouldRetry(t, e) ? (this._callCount++, this._tickInterval = setTimeout(() => this._tick(), t)) : (this._resolver.reject(e), this._destroy())
                            }
                    }
                    _retryAfter(e) {
                        this._callCount++, this._tickInterval = setTimeout(() => this._tick(), e.retryAfter)
                    }
                    _success(...e) {
                        this._isDestroyed || (this._resolver.resolve(...e), this._destroy())
                    }
                    _shouldRetry(e, t) {
                        let n = Date.now() - this._ts + e;
                        return this._callCount < this._maxRetries && e < this._maxTime && n < this._maxDuration && this._retryPredicate(t)
                    }
                    _tick() {
                        this._fn().then((...e) => this._success(...e)).catch(e => this._failure(e))
                    }
                    getResolver() {
                        return this._resolver.promise
                    }
                    start() {
                        return this._isDestroyed ? Promise.reject(Error("Backoff already consumed")) : (this._isRunning || (this._ts = Date.now(), this._isRunning = !0, this._backoffInitial ? (this._callCount = 1, this._tickInterval = setTimeout(() => this._tick(), this._counter.getTime(0))) : this._tick()), this._resolver.promise)
                    }
                    stop() {
                        clearTimeout(this._tickInterval), this._destroy()
                    }
                    getRetryCount() {
                        return this._callCount
                    }
                }
            },
            12584: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(t)
                        }
                    }))
                }
                n.d(t, {
                    _: () => r
                })
            },
            13027: (e, t, n) => {
                "use strict";
                var r = n(28153),
                    i = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    s = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    o = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    a = {};

                function l(e) {
                    return r.isMemo(e) ? o : a[e.$$typeof] || i
                }
                a[r.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, a[r.Memo] = o;
                var c = Object.defineProperty,
                    u = Object.getOwnPropertyNames,
                    d = Object.getOwnPropertySymbols,
                    h = Object.getOwnPropertyDescriptor,
                    f = Object.getPrototypeOf,
                    p = Object.prototype;
                e.exports = function e(t, n, r) {
                    if ("string" != typeof n) {
                        if (p) {
                            var i = f(n);
                            i && i !== p && e(t, i, r)
                        }
                        var o = u(n);
                        d && (o = o.concat(d(n)));
                        for (var a = l(t), m = l(n), g = 0; g < o.length; ++g) {
                            var _ = o[g];
                            if (!s[_] && !(r && r[_]) && !(m && m[_]) && !(a && a[_])) {
                                var y = h(n, _);
                                try {
                                    c(t, _, y)
                                } catch (e) {}
                            }
                        }
                    }
                    return t
                }
            },
            13139: (e, t, n) => {
                "use strict";
                n.d(t, {
                    m: () => i
                });
                var r, i = {};
                n.r(i), n.d(i, {
                        disable: () => v,
                        disableAll: () => S,
                        enable: () => y,
                        enableAll: () => E,
                        forTag: () => T,
                        intercept: () => m,
                        list: () => _,
                        remove: () => w,
                        setLevel: () => b,
                        unintercept: () => g
                    }),
                    function(e) {
                        e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.DEBUG = 2] = "DEBUG", e[e.INFO = 4] = "INFO", e[e.WARN = 8] = "WARN", e[e.ERROR = 16] = "ERROR"
                    }(r || (r = {}));
                class s {
                    constructor() {
                        this.tag = "", this.description = ""
                    }
                    matchesTag() {
                        return !1
                    }
                    setLevel() {}
                    enable() {}
                    disable() {}
                    log() {}
                    debug() {}
                    info() {}
                    warn() {}
                    error() {}
                }
                var o = n(27157);
                class a {
                    constructor(e, t = "", n = () => !1) {
                        this._tagParts = [], this._tagText = "", this._enabled = !0, this._level = r.NONE, this.tag = "", this.description = "", this._predicate = function() {
                            return !1
                        }, this.tag = e, this.description = t, this._predicate = n, this._tagParts = e.split("."), this._tagText = `[${e}]`
                    }
                    _print(e, t, n) {
                        if (!this._enabled && !(this._level & t)) return;
                        let r = {
                            args: n,
                            type: e,
                            tag: this.tag
                        };
                        this._predicate(r) || console[e](this._tagText, ...n)
                    }
                    matchesTag(e) {
                        let t = Array.isArray(e) ? e : e.split("."),
                            n = this._tagParts;
                        if (t.length > n.length) return !1;
                        for (let e = 0, r = t.length; e < r; e++)
                            if (("*" !== t[e] || !n[e]) && t[e] !== n[e]) return !1;
                        return !0
                    }
                    setLevel(e) {
                        let t = 0;
                        switch (e) {
                            case "error":
                                t = r.ERROR;
                                break;
                            case "warn":
                                t = r.WARN | r.ERROR;
                                break;
                            case "info":
                                t = r.INFO | r.WARN | r.ERROR;
                                break;
                            case "debug":
                                t = r.DEBUG | r.INFO | r.WARN | r.ERROR;
                                break;
                            default:
                                t = r.LOG | r.DEBUG | r.INFO | r.WARN | r.ERROR
                        }
                        this._level = t
                    }
                    enable() {
                        this._enabled = !0
                    }
                    disable() {
                        this._enabled = !1
                    }
                    log(...e) {
                        this._print("log", r.LOG, e)
                    }
                    debug(...e) {
                        this._print("debug", r.DEBUG, e)
                    }
                    info(...e) {
                        this._print("info", r.INFO, e)
                    }
                    warn(...e) {
                        this._print("warn", r.WARN, e)
                    }
                    error(...e) {
                        this._print("error", r.ERROR, e)
                    }
                }
                let l = s;
                try {
                    "true" === o.env.DEBUG && (l = a)
                } catch (e) {}
                let c = "__dbgLoggerRegistry",
                    u = n.g[c];
                u || (u = {
                    map: {},
                    list: [],
                    loggingPredicate: function() {}
                }, Object.defineProperty ? Object.defineProperty(n.g, c, {
                    value: u
                }) : n.g[c] = u);
                let d = u.map,
                    h = u.list;

                function f(e) {
                    return !!(u.loggingPredicate && u.loggingPredicate(e))
                }
                let p = "log";

                function m(e) {
                    if ("function" != typeof e) throw TypeError("Logging.intercept requires a function predicate.");
                    u.loggingPredicate = e
                }

                function g() {
                    u.loggingPredicate = () => {}
                }

                function _(e) {
                    let t = Object.keys(d).filter(e => d[e]).sort();
                    return e ? t.map(e => ({
                        tag: e,
                        description: d[e].description || "No description."
                    })) : t.reduce((e, t) => (e[t] = d[t].description || "No description", e), {})
                }

                function y(e) {
                    var t;
                    let n = Array.isArray(e) ? e : [e],
                        r = n.length;
                    for (; r--;) {
                        let e = null == (t = n[r]) ? void 0 : t.toLowerCase(),
                            i = h.length;
                        for (; i--;) {
                            let t = h[i];
                            t.matchesTag(e) && t.enable()
                        }
                    }
                }

                function v(e) {
                    var t;
                    let n = Array.isArray(e) ? e : [e],
                        r = n.length;
                    for (; r--;) {
                        let e = null == (t = n[r]) ? void 0 : t.toLowerCase(),
                            i = h.length;
                        for (; i--;) {
                            let t = h[i];
                            t.matchesTag(e) && t.disable()
                        }
                    }
                }

                function b(e) {
                    p = e;
                    let t = h.length;
                    for (; t--;) {
                        let n = h[t];
                        n && n.setLevel(e)
                    }
                }

                function E() {
                    let e = h.length;
                    for (; e--;) h[e] && h[e].enable()
                }

                function S() {
                    let e = h.length;
                    for (; e--;) h[e] && h[e].disable()
                }

                function T(e, t) {
                    let n, r;
                    if ("string" == typeof e ? (n = e.toLowerCase(), r = t) : (n = e.tag, r = e.description), Object.prototype.hasOwnProperty.call(d, n) && d[n]) return d[n];
                    let i = new l(n, r, f);
                    return i.setLevel(p), d[n] = i, h.push(i), i
                }

                function w(e) {
                    let t = e.toLowerCase();
                    if (!Object.prototype.hasOwnProperty.call(d, t) || !d[t]) return;
                    let n = d[t];
                    d[t] = null;
                    let r = h.indexOf(n); - 1 !== r && h.splice(r, 1)
                }
            },
            13980: (e, t, n) => {
                "use strict";
                n.d(t, {
                    O: () => r
                });
                let r = globalThis
            },
            15567: () => {},
            15597: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Vu: () => a,
                    fj: () => s,
                    qO: () => o
                });
                var r = n(48141),
                    i = n(59392);

                function s(e) {
                    let t = (0, i.zf)(),
                        n = {
                            sid: (0, r.eJ)(),
                            init: !0,
                            timestamp: t,
                            started: t,
                            duration: 0,
                            status: "ok",
                            errors: 0,
                            ignoreDuration: !1,
                            toJSON: () => {
                                var e;
                                return e = n, {
                                    sid: `${e.sid}`,
                                    init: e.init,
                                    started: new Date(1e3 * e.started).toISOString(),
                                    timestamp: new Date(1e3 * e.timestamp).toISOString(),
                                    status: e.status,
                                    errors: e.errors,
                                    did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                                    duration: e.duration,
                                    abnormal_mechanism: e.abnormal_mechanism,
                                    attrs: {
                                        release: e.release,
                                        environment: e.environment,
                                        ip_address: e.ipAddress,
                                        user_agent: e.userAgent
                                    }
                                }
                            }
                        };
                    return e && o(n, e), n
                }

                function o(e, t = {}) {
                    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || (0, i.zf)(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, r.eJ)()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
                    else if ("number" == typeof t.duration) e.duration = t.duration;
                    else {
                        let t = e.timestamp - e.started;
                        e.duration = t >= 0 ? t : 0
                    }
                    t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status)
                }

                function a(e, t) {
                    let n = {};
                    t ? n = {
                        status: t
                    } : "ok" === e.status && (n = {
                        status: "exited"
                    }), o(e, n)
                }
            },
            15677: (e, t, n) => {
                "use strict";
                n.d(t, {
                    BD: () => a,
                    Kg: () => c,
                    L2: () => v,
                    NF: () => u,
                    Qd: () => h,
                    Qg: () => g,
                    T2: () => o,
                    W6: () => l,
                    bJ: () => i,
                    gd: () => m,
                    ks: () => b,
                    mE: () => _,
                    sO: () => d,
                    tH: () => y,
                    vq: () => p,
                    xH: () => f
                });
                let r = Object.prototype.toString;

                function i(e) {
                    switch (r.call(e)) {
                        case "[object Error]":
                        case "[object Exception]":
                        case "[object DOMException]":
                        case "[object WebAssembly.Exception]":
                            return !0;
                        default:
                            return y(e, Error)
                    }
                }

                function s(e, t) {
                    return r.call(e) === `[object ${t}]`
                }

                function o(e) {
                    return s(e, "ErrorEvent")
                }

                function a(e) {
                    return s(e, "DOMError")
                }

                function l(e) {
                    return s(e, "DOMException")
                }

                function c(e) {
                    return s(e, "String")
                }

                function u(e) {
                    return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e
                }

                function d(e) {
                    return null === e || u(e) || "object" != typeof e && "function" != typeof e
                }

                function h(e) {
                    return s(e, "Object")
                }

                function f(e) {
                    return "undefined" != typeof Event && y(e, Event)
                }

                function p(e) {
                    return "undefined" != typeof Element && y(e, Element)
                }

                function m(e) {
                    return s(e, "RegExp")
                }

                function g(e) {
                    return !!(e ? .then && "function" == typeof e.then)
                }

                function _(e) {
                    return h(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
                }

                function y(e, t) {
                    try {
                        return e instanceof t
                    } catch (e) {
                        return !1
                    }
                }

                function v(e) {
                    return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue))
                }

                function b(e) {
                    return "undefined" != typeof Request && y(e, Request)
                }
            },
            15993: (e, t, n) => {
                "use strict";
                n.d(t, {
                    MI: () => o,
                    TC: () => l,
                    kM: () => a
                });
                var r = n(98213),
                    i = n(26940),
                    s = n(64940);
                let o = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

                function a(e, t) {
                    let n = function(e) {
                            let t;
                            if (!e) return;
                            let n = e.match(o);
                            if (n) return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1), {
                                traceId: n[1],
                                parentSampled: t,
                                parentSpanId: n[2]
                            }
                        }(e),
                        a = (0, r.yD)(t);
                    if (!n ? .traceId) return {
                        traceId: (0, s.e)(),
                        sampleRand: Math.random()
                    };
                    let l = function(e, t) {
                        let n = (0, i.i)(t ? .sample_rand);
                        if (void 0 !== n) return n;
                        let r = (0, i.i)(t ? .sample_rate);
                        return r && e ? .parentSampled !== void 0 ? e.parentSampled ? Math.random() * r : r + Math.random() * (1 - r) : Math.random()
                    }(n, a);
                    a && (a.sample_rand = l.toString());
                    let {
                        traceId: c,
                        parentSpanId: u,
                        parentSampled: d
                    } = n;
                    return {
                        traceId: c,
                        parentSpanId: u,
                        sampled: d,
                        dsc: a || {},
                        sampleRand: l
                    }
                }

                function l(e = (0, s.e)(), t = (0, s.Z)(), n) {
                    let r = "";
                    return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`
                }
            },
            17211: (e, t, n) => {
                "use strict";

                function r() {
                    let e, t;
                    return {
                        promise: new Promise((n, r) => {
                            e = n, t = r
                        }),
                        resolve: e,
                        reject: t
                    }
                }
                n.d(t, {
                    u: () => r
                })
            },
            18640: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createOsContext = void 0, t.createOsContext = function(e) {
                    return function() {
                        return {
                            name: "context_os",
                            data: e
                        }
                    }
                }
            },
            20446: (e, t) => {
                "use strict";
                t.I = void 0, t.I = function(e) {
                    return {
                        name: "EventSenderStats2NonAuth",
                        environments: ["devicenonauth", "browsernonauth", "desktopnonauth"],
                        data: e
                    }
                }
            },
            22551: (e, t, n) => {
                "use strict";
                n.d(t, {
                    h: () => function e(t, n, r = 2) {
                        if (!n || "object" != typeof n || r <= 0) return n;
                        if (t && 0 === Object.keys(n).length) return t;
                        let i = { ...t
                        };
                        for (let t in n) Object.prototype.hasOwnProperty.call(n, t) && (i[t] = e(i[t], n[t], r - 1));
                        return i
                    }
                })
            },
            24489: (e, t, n) => {
                "use strict";
                var r;
                n.d(t, {
                        I: () => r
                    }),
                    function(e) {
                        e.DELETE = "DELETE", e.GET = "GET", e.HEAD = "HEAD", e.OPTIONS = "OPTIONS", e.PATCH = "PATCH", e.POST = "POST", e.PUT = "PUT", e.TRACE = "TRACE"
                    }(r || (r = {}))
            },
            24623: (e, t, n) => {
                "use strict";
                n.d(t, {
                    m: () => i
                });
                var r, i = {};
                n.r(i), n.d(i, {
                    disable: () => v,
                    disableAll: () => S,
                    enable: () => y,
                    enableAll: () => E,
                    forTag: () => T,
                    intercept: () => m,
                    list: () => _,
                    remove: () => w,
                    setLevel: () => b,
                    unintercept: () => g
                }), n(27157), ! function(e) {
                    e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.DEBUG = 2] = "DEBUG", e[e.INFO = 4] = "INFO", e[e.WARN = 8] = "WARN", e[e.ERROR = 16] = "ERROR"
                }(r || (r = {}));
                class s {
                    constructor() {
                        this.tag = "", this.description = ""
                    }
                    matchesTag() {
                        return !1
                    }
                    setLevel() {}
                    enable() {}
                    disable() {}
                    log() {}
                    debug() {}
                    info() {}
                    warn() {}
                    error() {}
                }
                var o = n(27157);
                class a {
                    constructor(e, t = "", n = () => !1) {
                        this._tagParts = [], this._tagText = "", this._enabled = !0, this._level = r.NONE, this.tag = "", this.description = "", this._predicate = function() {
                            return !1
                        }, this.tag = e, this.description = t, this._predicate = n, this._tagParts = e.split("."), this._tagText = `[${e}]`
                    }
                    _print(e, t, n) {
                        if (!this._enabled && !(this._level & t)) return;
                        let r = {
                            args: n,
                            type: e,
                            tag: this.tag
                        };
                        this._predicate(r) || console[e](this._tagText, ...n)
                    }
                    matchesTag(e) {
                        let t = Array.isArray(e) ? e : e.split("."),
                            n = this._tagParts;
                        if (t.length > n.length) return !1;
                        for (let e = 0, r = t.length; e < r; e++)
                            if (("*" !== t[e] || !n[e]) && t[e] !== n[e]) return !1;
                        return !0
                    }
                    setLevel(e) {
                        let t = 0;
                        switch (e) {
                            case "error":
                                t = r.ERROR;
                                break;
                            case "warn":
                                t = r.WARN | r.ERROR;
                                break;
                            case "info":
                                t = r.INFO | r.WARN | r.ERROR;
                                break;
                            case "debug":
                                t = r.DEBUG | r.INFO | r.WARN | r.ERROR;
                                break;
                            default:
                                t = r.LOG | r.DEBUG | r.INFO | r.WARN | r.ERROR
                        }
                        this._level = t
                    }
                    enable() {
                        this._enabled = !0
                    }
                    disable() {
                        this._enabled = !1
                    }
                    log(...e) {
                        this._print("log", r.LOG, e)
                    }
                    debug(...e) {
                        this._print("debug", r.DEBUG, e)
                    }
                    info(...e) {
                        this._print("info", r.INFO, e)
                    }
                    warn(...e) {
                        this._print("warn", r.WARN, e)
                    }
                    error(...e) {
                        this._print("error", r.ERROR, e)
                    }
                }
                let l = void 0 !== o && "true" === o.env.DEBUG ? a : s,
                    c = "__dbgLoggerRegistry",
                    u = n.g[c];
                u || (u = {
                    map: {},
                    list: [],
                    loggingPredicate: function() {}
                }, Object.defineProperty ? Object.defineProperty(n.g, c, {
                    value: u
                }) : n.g[c] = u);
                let d = u.map,
                    h = u.list;

                function f(e) {
                    return !!(u.loggingPredicate && u.loggingPredicate(e))
                }
                let p = "log";

                function m(e) {
                    if ("function" != typeof e) throw TypeError("Logging.intercept requires a function predicate.");
                    u.loggingPredicate = e
                }

                function g() {
                    u.loggingPredicate = () => {}
                }

                function _(e) {
                    let t = Object.keys(d).filter(e => d[e]).sort();
                    return e ? t.map(e => ({
                        tag: e,
                        description: d[e].description || "No description."
                    })) : t.reduce((e, t) => (e[t] = d[t].description || "No description", e), {})
                }

                function y(e) {
                    var t;
                    let n = Array.isArray(e) ? e : [e],
                        r = n.length;
                    for (; r--;) {
                        let e = null == (t = n[r]) ? void 0 : t.toLowerCase(),
                            i = h.length;
                        for (; i--;) {
                            let t = h[i];
                            t.matchesTag(e) && t.enable()
                        }
                    }
                }

                function v(e) {
                    var t;
                    let n = Array.isArray(e) ? e : [e],
                        r = n.length;
                    for (; r--;) {
                        let e = null == (t = n[r]) ? void 0 : t.toLowerCase(),
                            i = h.length;
                        for (; i--;) {
                            let t = h[i];
                            t.matchesTag(e) && t.disable()
                        }
                    }
                }

                function b(e) {
                    p = e;
                    let t = h.length;
                    for (; t--;) {
                        let n = h[t];
                        n && n.setLevel(e)
                    }
                }

                function E() {
                    let e = h.length;
                    for (; e--;) h[e] && h[e].enable()
                }

                function S() {
                    let e = h.length;
                    for (; e--;) h[e] && h[e].disable()
                }

                function T(e, t) {
                    let n, r;
                    if ("string" == typeof e ? (n = e.toLowerCase(), r = t) : (n = e.tag, r = e.description), d.hasOwnProperty(n) && d[n]) return d[n];
                    let i = new l(n, r, f);
                    return i.setLevel(p), d[n] = i, h.push(i), i
                }

                function w(e) {
                    let t = e.toLowerCase();
                    if (!d.hasOwnProperty(t) || !d[t]) return;
                    let n = d[t];
                    d[t] = null;
                    let r = h.indexOf(n); - 1 !== r && h.splice(r, 1)
                }
            },
            26044: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    CustomApp: () => b,
                    default: () => S,
                    reportWebVitals: () => E
                });
                var r, i = n(82536),
                    s = n(5640),
                    o = n(50148);
                let a = (0, n(8433).DU)(r || (r = function(e, t) {
                    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(t)
                        }
                    }))
                }(["\n  /*\n    Reset the box-sizing\n\n    Heads up! This reset may cause conflicts with some third-party widgets.\n    For recommendations on resolving such conflicts, see\n    http://getbootstrap.com/getting-started/#third-box-sizing\n  */\n\n  * {\n    box-sizing: border-box;\n  }\n\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  /* Body reset */\n\n  body {\n    margin: 0;\n  }\n\n  body, input, textarea, button {\n    font-family: var(--encore-body-font-stack);\n  }\n\n  html,\n  body {\n    height: 100%;\n  }\n"])));
                var l = function() {
                    return o.createElement(o.Fragment, null, o.createElement(a, null))
                };
                n(80884), n(31542), n(29270), n(52364), n(15567);
                var c = n(86727),
                    u = n(82145),
                    d = n.n(u),
                    h = n(75162),
                    f = n.n(h);
                let p = (0, o.createContext)(void 0);
                class m extends o.Component {
                    static getDerivedStateFromError(e) {
                        return {
                            error: e
                        }
                    }
                    render() {
                        return (0, s.jsx)(p.Provider, {
                            value: this.state.error,
                            children: this.props.children
                        })
                    }
                    constructor(...e) {
                        super(...e), this.state = {
                            error: void 0
                        }
                    }
                }
                n(90041);
                var g = n(42891);
                n(43276);
                var _ = n(84434);
                let y = e => {
                    if (!e || e.length <= 0) return;
                    if (1 === e.length) return e[0];
                    let t = _.Ub.largeScreen.small,
                        n = _.Ub.largeScreen.small,
                        [r] = e.map(e => {
                            let r = [(e.width || e.maxWidth || 0) * (e.height || e.maxHeight || 0), t * n];
                            return {
                                ratio: Math.max(...r) / Math.min(...r),
                                image: e
                            }
                        }).sort((e, t) => e.ratio - t.ratio);
                    return r.image
                };
                var v = n(44118);
                let b = e => {
                    var t, n, r, a, u, h, f, p, _, b, E, S, T, w, O, C;
                    let {
                        Component: k,
                        pageProps: R
                    } = e, I = null == R || null == (r = R.state) || null == (n = r.data) || null == (t = n.entity) ? void 0 : t.visualIdentity, N = (null == I || null == (a = I.image) ? void 0 : a.length) ? I.image : null, A = null != (C = null == (u = y(null != N ? N : null == R || null == (_ = R.state) || null == (p = _.data) || null == (f = p.entity) || null == (h = f.coverArt) ? void 0 : h.sources)) ? void 0 : u.url) ? C : "";
                    (0, o.useEffect)(() => {
                        let e = (0, v.H)();
                        e && "discord.com" !== e && (e = "other referrers"), (0, g.fE)({
                            metric_type: c.MetricTypes.COUNTER,
                            what: "embed_rendered_referrer",
                            tags: {
                                referrer: e
                            },
                            value: 1
                        })
                    }, []);
                    let x = null == R || null == (S = R.state) || null == (E = S.data) || null == (b = E.entity) ? void 0 : b.name,
                        P = null == R || null == (O = R.state) || null == (w = O.data) || null == (T = w.entity) ? void 0 : T.artists,
                        D = null == P ? void 0 : P.map(e => e.name).join(", ");
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(d(), {
                            children: [(0, s.jsxs)("title", {
                                children: [x, " - ", (() => {
                                    var e, t, n, r, i, s, o;
                                    return (null == R || null == (n = R.state) || null == (t = n.data) || null == (e = t.entity) ? void 0 : e.type) === "track" ? D || "" : (null == R || null == (i = R.state) || null == (r = i.data.entity) ? void 0 : r.subtitle) ? null == R || null == (o = R.state) || null == (s = o.data.entity) ? void 0 : s.subtitle : ""
                                })(), " | Spotify"]
                            }), (0, s.jsx)("link", {
                                rel: "icon",
                                href: "/favicon.ico"
                            })]
                        }), (0, s.jsx)(l, {}), (0, s.jsx)(m, {
                            children: (0, s.jsx)("div", {
                                style: {
                                    "--image-src": "url('".concat(A, "')")
                                },
                                "data-testid": "main-page",
                                children: (0, s.jsx)(k, (0, i._)({}, R))
                            })
                        })]
                    })
                };

                function E(e) {
                    var t, n;
                    (0, g.q6)(), (0, g.fE)(c.BrowserMetrics.getWebVitalsMetric(e, {
                        route: null != (n = null == (t = f().router) ? void 0 : t.route) ? n : "unknown"
                    }))
                }
                let S = b
            },
            26557: function(e, t, n) {
                "use strict";
                var r = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))(function(i, s) {
                            function o(e) {
                                try {
                                    l(r.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function a(e) {
                                try {
                                    l(r.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(o, a)
                            }
                            l((r = r.apply(e, t || [])).next())
                        })
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ConsoleReporter = void 0;
                let s = i(n(67510));
                class o {
                    constructor(e = 2, t = "info") {
                        this.spacingLevel = e, this.logLevel = t
                    }
                    send(e) {
                        return r(this, void 0, void 0, function*() {
                            s.default.log(this.logLevel, `[semantic-metrics] ${JSON.stringify(e,null,this.spacingLevel)}`)
                        })
                    }
                }
                t.ConsoleReporter = o
            },
            26588: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createSemanticMetricClientNonAuth = void 0, t.createSemanticMetricClientNonAuth = function(e) {
                    return {
                        name: "SemanticMetricClientNonAuth",
                        environments: ["browsernonauth", "devicenonauth"],
                        data: e
                    }
                }
            },
            26915: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    Base62: () => r,
                    Base64: () => i
                });
                var r = {};
                n.r(r), n.d(r, {
                    fromBytes: () => d,
                    fromHex: () => p,
                    toBytes: () => h,
                    toHex: () => f
                });
                var i = {};
                n.r(i), n.d(i, {
                    decode: () => y,
                    encode: () => _
                });
                let s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    o = {},
                    a = {};

                function l(e, t, n) {
                    let r = [0],
                        i = [1];
                    for (let s of e) ! function(e, t, n, r) {
                            let i, s, o = 0;
                            for (s = 0; s < t.length; ++s) i = ~~e[s] + t[s] * n + o, e[s] = i % r, o = ~~(i / r);
                            for (; o;) i = ~~e[s] + o, e[s] = i % r, o = ~~(i / r), ++s
                        }(r, i, s, n),
                        function(e, t, n) {
                            let r = 0;
                            for (let i = 0; i < e.length; ++i) {
                                let s = e[i] * t + r;
                                e[i] = s % n, r = ~~(s / n)
                            }
                            for (; r;) e.push(r % n), r = ~~(r / n)
                        }(i, t, n);
                    return r
                }

                function c(e, t) {
                    let n = [];
                    for (let r of e) n.push(t[r]);
                    return n.reverse()
                }

                function u(e, t = 0) {
                    for (; e.length < t;) e.push(0);
                    return e
                }

                function d(e, t) {
                    return c(u(l(e.slice(0).reverse(), 256, 62), t), s).join("")
                }

                function h(e, t) {
                    return u(l(c(e.split(""), a), 62, 256), t).reverse()
                }

                function f(e, t) {
                    let n = l(c(e.split(""), a), 62, 16);
                    return c(u(n, t), s).join("")
                }

                function p(e, t) {
                    let n = l(c(e.split(""), o), 16, 62);
                    return c(u(n, t), s).join("")
                }! function() {
                    for (let e = 0, t = s.length; e < t; ++e) a[s[e]] = e;
                    for (let e = 0; e < 16; ++e) o["0123456789abcdef" [e]] = e;
                    for (let e = 0; e < 16; ++e) o["0123456789ABCDEF" [e]] = e
                }();
                let m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    g = (() => {
                        let e = [];
                        for (let t = 0; t < 256; ++t) e[t] = 255;
                        for (let t = 0; t < m.length; ++t) e[m.charCodeAt(t)] = t;
                        return String.fromCharCode(...e)
                    })(),
                    _ = function(e) {
                        let t = String(e),
                            n = [],
                            r = t.length,
                            i = 0;
                        for (; i < r;) {
                            let e = 255 & t.charCodeAt(i++);
                            if (i === r) {
                                n.push(m.charAt(e >> 2), m.charAt((3 & e) << 4), "==");
                                break
                            }
                            let s = t.charCodeAt(i++);
                            if (i === r) {
                                n.push(m.charAt(e >> 2), m.charAt((3 & e) << 4 | (240 & s) >> 4), m.charAt((15 & s) << 2), "=");
                                break
                            }
                            let o = t.charCodeAt(i++);
                            n.push(m.charAt(e >> 2), m.charAt((3 & e) << 4 | (240 & s) >> 4), m.charAt((15 & s) << 2 | (192 & o) >> 6), m.charAt(63 & o))
                        }
                        return n.join("")
                    },
                    y = function(e) {
                        let t, n, r = String(e),
                            i = [],
                            s = r.length,
                            o = 0;
                        for (;;) {
                            do t = g.charCodeAt(255 & r.charCodeAt(o++)); while (255 === t && o < s);
                            do n = g.charCodeAt(255 & r.charCodeAt(o++)); while (255 === n && o < s);
                            if (255 === n) break;
                            i.push((t << 2 | n >> 4) & 255);
                            do t = g.charCodeAt(255 & r.charCodeAt(o++)); while (255 === t && o < s);
                            if (255 === t) break;
                            i.push((n << 4 | t >> 2) & 255);
                            do n = g.charCodeAt(255 & r.charCodeAt(o++)); while (255 === n && o < s);
                            if (255 === n) break;
                            i.push((t << 6 | n) & 255)
                        }
                        if (i.length < 4096) return String.fromCharCode(...i);
                        let a = 0,
                            l = [];
                        do l.push(String.fromCharCode(...i.slice(a, a + 4096))), a += 4096; while (a < i.length);
                        return l.join("")
                    };
                "undefined" != typeof window && window.btoa && window.atob && (_ = e => window.btoa(e), y = e => window.atob(e))
            },
            26940: (e, t, n) => {
                "use strict";

                function r(e) {
                    if ("boolean" == typeof e) return Number(e);
                    let t = "string" == typeof e ? parseFloat(e) : e;
                    if (!("number" != typeof t || isNaN(t)) && !(t < 0) && !(t > 1)) return t
                }
                n.d(t, {
                    i: () => r
                })
            },
            28153: (e, t, n) => {
                "use strict";
                e.exports = n(68053)
            },
            28304: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createDeviceContext = void 0, t.createDeviceContext = function(e) {
                    return function() {
                        return {
                            name: "context_device",
                            data: e
                        }
                    }
                }
            },
            29270: () => {},
            29994: (e, t, n) => {
                "use strict";
                var r;
                n.d(t, {
                        s: () => r
                    }),
                    function(e) {
                        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OK = 200] = "OK", e[e.CREATED = 201] = "CREATED", e[e.ACCEPTED = 202] = "ACCEPTED", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", e[e.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", e[e.TIMED_OUT = 408] = "TIMED_OUT", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.CONFLICT = 409] = "CONFLICT", e[e.GONE = 410] = "GONE", e[e.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", e[e.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", e[e.REQUEST_ENTITY_TOO_LARGE = 413] = "REQUEST_ENTITY_TOO_LARGE", e[e.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", e[e.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", e[e.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", e[e.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED"
                    }(r || (r = {}))
            },
            30201: (e, t, n) => {
                (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                    return n(26044)
                }])
            },
            30884: function(e, t, n) {
                "use strict";
                var r = n(27157),
                    i = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))(function(i, s) {
                            function o(e) {
                                try {
                                    l(r.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function a(e) {
                                try {
                                    l(r.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                                    e(t)
                                })).then(o, a)
                            }
                            l((r = r.apply(e, t || [])).next())
                        })
                    },
                    s = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sendMetric = t.reportMetrics = t.createSemanticMetrics = t.asNanoseconds = t.MetricTypes = void 0;
                let o = s(n(67510)),
                    a = n(60008);
                t.MetricTypes = {
                    COUNTER: "counter",
                    GAUGE: "gauge",
                    TIMER: "timer"
                }, t.asNanoseconds = function(e) {
                    return e
                };
                let l = (e, t) => i(void 0, void 0, void 0, function*() {
                    if (Array.isArray(t.reporter)) {
                        let n = t.reporter.map(t => t.send(e));
                        yield Promise.all(n)
                    } else yield t.reporter.send(e)
                });
                t.reportMetrics = l;
                let c = e => {
                    (void 0 !== e.dev ? e.dev : r.env && !1) && (e.reporter = new a.NoopReporter);
                    let t = {
                            queue: [],
                            timeout: void 0,
                            flush() {
                                return i(this, void 0, void 0, function*() {
                                    yield l(this.queue, e), this.queue = [], this.timeout = void 0
                                })
                            }
                        },
                        n = !1;
                    return void 0 === e.batching && (e.batching = {
                        delay: 4e3
                    }), e.batching && "object" == typeof window && "function" == typeof window.addEventListener && window.addEventListener("beforeunload", () => {
                        n = !0, t.flush()
                    }), {
                        sendMetric: r => i(void 0, void 0, void 0, function*() {
                            var i, s;
                            let o = Object.assign({}, r);
                            if (r.tags && (o.tags = Object.assign({}, r.tags)), o.key = o.key || e.key, !o.key) throw Error(`metric.key is required. Got: "${o.key}". Set it in createSemanticMetrics(...) or pass it to sendMetric(...).`);
                            o.tags = Object.assign({
                                app: null != (i = e.app) ? i : o.key,
                                application: null != (s = e.app) ? s : o.key
                            }, o.tags), e.component_id ? o.component_id = o.component_id || e.component_id : o.component_id = e.key, e.batching && !n ? (t.queue.push(o), t.timeout || (t.timeout = setTimeout(() => t.flush(), e.batching.delay))) : yield l([o], e)
                        }),
                        config: e,
                        isWindowUnloading: n,
                        flush: () => e.batching ? t.flush() : (o.default.warn("Manual flushing only supported in batch mode. Set config.batching: true"), Promise.resolve())
                    }
                };
                t.createSemanticMetrics = c;
                class u {
                    static init(e) {
                        u.config && o.default.error("SemanticMetrics has already been initialized. This may lead to dangerous side effects such as your metrics disappearing from Grafana due to the `key` value being overwritten by something else"), o.default.warn("The singleton usage of SemanticMetrics will be deprecated. Please use createSemanticMetrics()"), u.config = e;
                        let {
                            sendMetric: t,
                            isWindowUnloading: n
                        } = c(e);
                        u.sendMetric = t, u.isWindowUnloading = n
                    }
                }
                t.default = u, t.sendMetric = e => i(void 0, void 0, void 0, function*() {
                    if (!u.config) throw Error("SemanticMetrics has not been initialized. Call SemanticMetrics.init()");
                    return u.sendMetric(e)
                })
            },
            31191: (e, t, n) => {
                "use strict";
                var r;
                n.d(t, {
                        t: () => r
                    }),
                    function(e) {
                        e[e.CONNECTION_ERROR = 0] = "CONNECTION_ERROR", e[e.INFORMATIONAL = 1] = "INFORMATIONAL", e[e.SUCCESS = 2] = "SUCCESS", e[e.REDIRECTION = 3] = "REDIRECTION", e[e.CLIENT_ERROR = 4] = "CLIENT_ERROR", e[e.SERVER_ERROR = 5] = "SERVER_ERROR"
                    }(r || (r = {}))
            },
            31542: () => {},
            33685: (e, t) => {
                t.read = function(e, t, n, r, i) {
                    var s, o, a = 8 * i - r - 1,
                        l = (1 << a) - 1,
                        c = l >> 1,
                        u = -7,
                        d = n ? i - 1 : 0,
                        h = n ? -1 : 1,
                        f = e[t + d];
                    for (d += h, s = f & (1 << -u) - 1, f >>= -u, u += a; u > 0; s = 256 * s + e[t + d], d += h, u -= 8);
                    for (o = s & (1 << -u) - 1, s >>= -u, u += r; u > 0; o = 256 * o + e[t + d], d += h, u -= 8);
                    if (0 === s) s = 1 - c;
                    else {
                        if (s === l) return o ? NaN : 1 / 0 * (f ? -1 : 1);
                        o += Math.pow(2, r), s -= c
                    }
                    return (f ? -1 : 1) * o * Math.pow(2, s - r)
                }, t.write = function(e, t, n, r, i, s) {
                    var o, a, l, c = 8 * s - i - 1,
                        u = (1 << c) - 1,
                        d = u >> 1,
                        h = 5960464477539062e-23 * (23 === i),
                        f = r ? 0 : s - 1,
                        p = r ? 1 : -1,
                        m = +(t < 0 || 0 === t && 1 / t < 0);
                    for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), o + d >= 1 ? t += h / l : t += h * Math.pow(2, 1 - d), t * l >= 2 && (o++, l /= 2), o + d >= u ? (a = 0, o = u) : o + d >= 1 ? (a = (t * l - 1) * Math.pow(2, i), o += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + f] = 255 & a, f += p, a /= 256, i -= 8);
                    for (o = o << i | a, c += i; c > 0; e[n + f] = 255 & o, f += p, o /= 256, c -= 8);
                    e[n + f - p] |= 128 * m
                }
            },
            34200: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BrowserMetrics = void 0;
                let r = n(30884),
                    i = n(74244);

                function s() {
                    let [e] = window.performance.getEntriesByType("navigation");
                    return e
                }

                function o(e) {
                    return new Promise((t, n) => window.performance && "function" == typeof performance.getEntriesByType ? window.addEventListener("load", () => {
                        let r = performance.getEntriesByType("paint"),
                            i = r.find(({
                                name: t
                            }) => t === e);
                        return void 0 !== r && i ? t(i.startTime) : n("Time to paint api is not supported on this browser")
                    }) : n("window.performance api is not supported in this browser"))
                }

                function a({
                    name: e,
                    label: t,
                    value: n
                }, r) {
                    let s;
                    return s = "cls" === e.toLowerCase() ? {
                        metric_type: "gauge",
                        value: n
                    } : {
                        metric_type: "timer",
                        value: i.Time.fromMillis(Math.round(n)).asNanos()
                    }, Object.assign(Object.assign({
                        what: `web_vitals_${e.toLowerCase()}`
                    }, s), {
                        tags: Object.assign({
                            name: e,
                            label: t
                        }, r)
                    })
                }
                t.BrowserMetrics = {
                    getPageLoadTime: function() {
                        return new Promise((e, t) => {
                            if (!window.performance || "function" != typeof performance.getEntriesByType) return t("window.performance api is not supported in this browser");
                            if (void 0 === s()) return t("navigationTiming api is not supported in this browser");
                            let {
                                loadEventEnd: n
                            } = s();
                            return n > 0 ? e(n) : window.addEventListener("load", () => {
                                setTimeout(() => {
                                    let {
                                        loadEventEnd: t
                                    } = s();
                                    return e(t)
                                }, 0)
                            })
                        })
                    },
                    getResourceTiming: function() {
                        return window.performance.getEntriesByType("resource")
                    },
                    getTimeToFirstPaint: function() {
                        return o("first-paint")
                    },
                    getTimeToFirstContentfulPaint: function() {
                        return o("first-contentful-paint")
                    },
                    sendWebVitalsMetric: function(e, t) {
                        return r.sendMetric(a(e, t))
                    },
                    getWebVitalsMetric: a
                }
            },
            36645: (e, t, n) => {
                "use strict";
                n.d(t, {
                    mL: () => ey,
                    AH: () => ev
                });
                var r, i = n(50148),
                    s = n.t(i, 2),
                    o = function() {
                        function e(e) {
                            var t = this;
                            this._insertTag = function(e) {
                                var n;
                                n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
                            }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
                        }
                        var t = e.prototype;
                        return t.hydrate = function(e) {
                            e.forEach(this._insertTag)
                        }, t.insert = function(e) {
                            this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(((t = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t.setAttribute("nonce", this.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t));
                            var t, n = this.tags[this.tags.length - 1];
                            if (this.isSpeedy) {
                                var r = function(e) {
                                    if (e.sheet) return e.sheet;
                                    for (var t = 0; t < document.styleSheets.length; t++)
                                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                                }(n);
                                try {
                                    r.insertRule(e, r.cssRules.length)
                                } catch (e) {}
                            } else n.appendChild(document.createTextNode(e));
                            this.ctr++
                        }, t.flush = function() {
                            this.tags.forEach(function(e) {
                                var t;
                                return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                            }), this.tags = [], this.ctr = 0
                        }, e
                    }(),
                    a = Math.abs,
                    l = String.fromCharCode,
                    c = Object.assign;

                function u(e, t, n) {
                    return e.replace(t, n)
                }

                function d(e, t) {
                    return e.indexOf(t)
                }

                function h(e, t) {
                    return 0 | e.charCodeAt(t)
                }

                function f(e, t, n) {
                    return e.slice(t, n)
                }

                function p(e) {
                    return e.length
                }

                function m(e, t) {
                    return t.push(e), e
                }
                var g = 1,
                    _ = 1,
                    y = 0,
                    v = 0,
                    b = 0,
                    E = "";

                function S(e, t, n, r, i, s, o) {
                    return {
                        value: e,
                        root: t,
                        parent: n,
                        type: r,
                        props: i,
                        children: s,
                        line: g,
                        column: _,
                        length: o,
                        return: ""
                    }
                }

                function T(e, t) {
                    return c(S("", null, null, "", null, null, 0), e, {
                        length: -e.length
                    }, t)
                }

                function w() {
                    return b = v < y ? h(E, v++) : 0, _++, 10 === b && (_ = 1, g++), b
                }

                function O() {
                    return h(E, v)
                }

                function C(e) {
                    switch (e) {
                        case 0:
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            return 5;
                        case 33:
                        case 43:
                        case 44:
                        case 47:
                        case 62:
                        case 64:
                        case 126:
                        case 59:
                        case 123:
                        case 125:
                            return 4;
                        case 58:
                            return 3;
                        case 34:
                        case 39:
                        case 40:
                        case 91:
                            return 2;
                        case 41:
                        case 93:
                            return 1
                    }
                    return 0
                }

                function k(e) {
                    return g = _ = 1, y = p(E = e), v = 0, []
                }

                function R(e) {
                    var t, n;
                    return (t = v - 1, n = function e(t) {
                        for (; w();) switch (b) {
                            case t:
                                return v;
                            case 34:
                            case 39:
                                34 !== t && 39 !== t && e(b);
                                break;
                            case 40:
                                41 === t && e(t);
                                break;
                            case 92:
                                w()
                        }
                        return v
                    }(91 === e ? e + 2 : 40 === e ? e + 1 : e), f(E, t, n)).trim()
                }
                var I = "-ms-",
                    N = "-moz-",
                    A = "-webkit-",
                    x = "comm",
                    P = "rule",
                    D = "decl",
                    M = "@keyframes";

                function L(e, t) {
                    for (var n = "", r = e.length, i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
                    return n
                }

                function U(e, t, n, r) {
                    switch (e.type) {
                        case "@layer":
                            if (e.children.length) break;
                        case "@import":
                        case D:
                            return e.return = e.return || e.value;
                        case x:
                            return "";
                        case M:
                            return e.return = e.value + "{" + L(e.children, r) + "}";
                        case P:
                            e.value = e.props.join(",")
                    }
                    return p(n = L(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
                }

                function j(e, t, n, r, i, s, o, l, c, d, h) {
                    for (var p = i - 1, m = 0 === i ? s : [""], g = m.length, _ = 0, y = 0, v = 0; _ < r; ++_)
                        for (var b = 0, E = f(e, p + 1, p = a(y = o[_])), T = e; b < g; ++b)(T = (y > 0 ? m[b] + " " + E : u(E, /&\f/g, m[b])).trim()) && (c[v++] = T);
                    return S(e, t, n, 0 === i ? P : l, c, d, h)
                }

                function F(e, t, n, r) {
                    return S(e, t, n, D, f(e, 0, r), f(e, r + 1, -1), r)
                }
                var $ = function(e, t, n) {
                        for (var r = 0, i = 0; r = i, i = O(), 38 === r && 12 === i && (t[n] = 1), !C(i);) w();
                        return f(E, e, v)
                    },
                    B = function(e, t) {
                        var n = -1,
                            r = 44;
                        do switch (C(r)) {
                            case 0:
                                38 === r && 12 === O() && (t[n] = 1), e[n] += $(v - 1, t, n);
                                break;
                            case 2:
                                e[n] += R(r);
                                break;
                            case 4:
                                if (44 === r) {
                                    e[++n] = 58 === O() ? "&\f" : "", t[n] = e[n].length;
                                    break
                                }
                            default:
                                e[n] += l(r)
                        }
                        while (r = w());
                        return e
                    },
                    q = function(e, t) {
                        var n;
                        return n = B(k(e), t), E = "", n
                    },
                    z = new WeakMap,
                    H = function(e) {
                        if ("rule" === e.type && e.parent && !(e.length < 1)) {
                            for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
                                "rule" !== n.type;)
                                if (!(n = n.parent)) return;
                            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || z.get(n)) && !r) {
                                z.set(e, !0);
                                for (var i = [], s = q(t, i), o = n.props, a = 0, l = 0; a < s.length; a++)
                                    for (var c = 0; c < o.length; c++, l++) e.props[l] = i[a] ? s[a].replace(/&\f/g, o[c]) : o[c] + " " + s[a]
                            }
                        }
                    },
                    W = function(e) {
                        if ("decl" === e.type) {
                            var t = e.value;
                            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                        }
                    },
                    G = [function(e, t, n, r) {
                        if (e.length > -1 && !e.return) switch (e.type) {
                            case D:
                                e.return = function e(t, n) {
                                    switch (45 ^ h(t, 0) ? (((n << 2 ^ h(t, 0)) << 2 ^ h(t, 1)) << 2 ^ h(t, 2)) << 2 ^ h(t, 3) : 0) {
                                        case 5103:
                                            return A + "print-" + t + t;
                                        case 5737:
                                        case 4201:
                                        case 3177:
                                        case 3433:
                                        case 1641:
                                        case 4457:
                                        case 2921:
                                        case 5572:
                                        case 6356:
                                        case 5844:
                                        case 3191:
                                        case 6645:
                                        case 3005:
                                        case 6391:
                                        case 5879:
                                        case 5623:
                                        case 6135:
                                        case 4599:
                                        case 4855:
                                        case 4215:
                                        case 6389:
                                        case 5109:
                                        case 5365:
                                        case 5621:
                                        case 3829:
                                            return A + t + t;
                                        case 5349:
                                        case 4246:
                                        case 4810:
                                        case 6968:
                                        case 2756:
                                            return A + t + N + t + I + t + t;
                                        case 6828:
                                        case 4268:
                                            return A + t + I + t + t;
                                        case 6165:
                                            return A + t + I + "flex-" + t + t;
                                        case 5187:
                                            return A + t + u(t, /(\w+).+(:[^]+)/, A + "box-$1$2" + I + "flex-$1$2") + t;
                                        case 5443:
                                            return A + t + I + "flex-item-" + u(t, /flex-|-self/, "") + t;
                                        case 4675:
                                            return A + t + I + "flex-line-pack" + u(t, /align-content|flex-|-self/, "") + t;
                                        case 5548:
                                            return A + t + I + u(t, "shrink", "negative") + t;
                                        case 5292:
                                            return A + t + I + u(t, "basis", "preferred-size") + t;
                                        case 6060:
                                            return A + "box-" + u(t, "-grow", "") + A + t + I + u(t, "grow", "positive") + t;
                                        case 4554:
                                            return A + u(t, /([^-])(transform)/g, "$1" + A + "$2") + t;
                                        case 6187:
                                            return u(u(u(t, /(zoom-|grab)/, A + "$1"), /(image-set)/, A + "$1"), t, "") + t;
                                        case 5495:
                                        case 3959:
                                            return u(t, /(image-set\([^]*)/, A + "$1$`$1");
                                        case 4968:
                                            return u(u(t, /(.+:)(flex-)?(.*)/, A + "box-pack:$3" + I + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + A + t + t;
                                        case 4095:
                                        case 3583:
                                        case 4068:
                                        case 2532:
                                            return u(t, /(.+)-inline(.+)/, A + "$1$2") + t;
                                        case 8116:
                                        case 7059:
                                        case 5753:
                                        case 5535:
                                        case 5445:
                                        case 5701:
                                        case 4933:
                                        case 4677:
                                        case 5533:
                                        case 5789:
                                        case 5021:
                                        case 4765:
                                            if (p(t) - 1 - n > 6) switch (h(t, n + 1)) {
                                                case 109:
                                                    if (45 !== h(t, n + 4)) break;
                                                case 102:
                                                    return u(t, /(.+:)(.+)-([^]+)/, "$1" + A + "$2-$3$1" + N + (108 == h(t, n + 3) ? "$3" : "$2-$3")) + t;
                                                case 115:
                                                    return ~d(t, "stretch") ? e(u(t, "stretch", "fill-available"), n) + t : t
                                            }
                                            break;
                                        case 4949:
                                            if (115 !== h(t, n + 1)) break;
                                        case 6444:
                                            switch (h(t, p(t) - 3 - (~d(t, "!important") && 10))) {
                                                case 107:
                                                    return u(t, ":", ":" + A) + t;
                                                case 101:
                                                    return u(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + A + (45 === h(t, 14) ? "inline-" : "") + "box$3$1" + A + "$2$3$1" + I + "$2box$3") + t
                                            }
                                            break;
                                        case 5936:
                                            switch (h(t, n + 11)) {
                                                case 114:
                                                    return A + t + I + u(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                                                case 108:
                                                    return A + t + I + u(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                                                case 45:
                                                    return A + t + I + u(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                                            }
                                            return A + t + I + t + t
                                    }
                                    return t
                                }(e.value, e.length);
                                break;
                            case M:
                                return L([T(e, {
                                    value: u(e.value, "@", "@" + A)
                                })], r);
                            case P:
                                if (e.length) {
                                    var i, s;
                                    return i = e.props, s = function(t) {
                                        var n;
                                        switch (n = t, (n = /(::plac\w+|:read-\w+)/.exec(n)) ? n[0] : n) {
                                            case ":read-only":
                                            case ":read-write":
                                                return L([T(e, {
                                                    props: [u(t, /:(read-\w+)/, ":" + N + "$1")]
                                                })], r);
                                            case "::placeholder":
                                                return L([T(e, {
                                                    props: [u(t, /:(plac\w+)/, ":" + A + "input-$1")]
                                                }), T(e, {
                                                    props: [u(t, /:(plac\w+)/, ":" + N + "$1")]
                                                }), T(e, {
                                                    props: [u(t, /:(plac\w+)/, I + "input-$1")]
                                                })], r)
                                        }
                                        return ""
                                    }, i.map(s).join("")
                                }
                        }
                    }],
                    J = function(e, t, n) {
                        var r = e.key + "-" + t.name;
                        !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
                    },
                    V = function(e, t, n) {
                        J(e, t, n);
                        var r = e.key + "-" + t.name;
                        if (void 0 === e.inserted[t.name]) {
                            var i = t;
                            do e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next; while (void 0 !== i)
                        }
                    },
                    K = {
                        animationIterationCount: 1,
                        aspectRatio: 1,
                        borderImageOutset: 1,
                        borderImageSlice: 1,
                        borderImageWidth: 1,
                        boxFlex: 1,
                        boxFlexGroup: 1,
                        boxOrdinalGroup: 1,
                        columnCount: 1,
                        columns: 1,
                        flex: 1,
                        flexGrow: 1,
                        flexPositive: 1,
                        flexShrink: 1,
                        flexNegative: 1,
                        flexOrder: 1,
                        gridRow: 1,
                        gridRowEnd: 1,
                        gridRowSpan: 1,
                        gridRowStart: 1,
                        gridColumn: 1,
                        gridColumnEnd: 1,
                        gridColumnSpan: 1,
                        gridColumnStart: 1,
                        msGridRow: 1,
                        msGridRowSpan: 1,
                        msGridColumn: 1,
                        msGridColumnSpan: 1,
                        fontWeight: 1,
                        lineHeight: 1,
                        opacity: 1,
                        order: 1,
                        orphans: 1,
                        scale: 1,
                        tabSize: 1,
                        widows: 1,
                        zIndex: 1,
                        zoom: 1,
                        WebkitLineClamp: 1,
                        fillOpacity: 1,
                        floodOpacity: 1,
                        stopOpacity: 1,
                        strokeDasharray: 1,
                        strokeDashoffset: 1,
                        strokeMiterlimit: 1,
                        strokeOpacity: 1,
                        strokeWidth: 1
                    },
                    X = n(1342),
                    Q = /[A-Z]|^ms/g,
                    Y = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                    Z = function(e) {
                        return 45 === e.charCodeAt(1)
                    },
                    ee = function(e) {
                        return null != e && "boolean" != typeof e
                    },
                    et = (0, X.A)(function(e) {
                        return Z(e) ? e : e.replace(Q, "-$&").toLowerCase()
                    }),
                    en = function(e, t) {
                        switch (e) {
                            case "animation":
                            case "animationName":
                                if ("string" == typeof t) return t.replace(Y, function(e, t, n) {
                                    return r = {
                                        name: t,
                                        styles: n,
                                        next: r
                                    }, t
                                })
                        }
                        return 1 === K[e] || Z(e) || "number" != typeof t || 0 === t ? t : t + "px"
                    };

                function er(e, t, n) {
                    if (null == n) return "";
                    if (void 0 !== n.__emotion_styles) return n;
                    switch (typeof n) {
                        case "boolean":
                            return "";
                        case "object":
                            if (1 === n.anim) return r = {
                                name: n.name,
                                styles: n.styles,
                                next: r
                            }, n.name;
                            if (void 0 !== n.styles) {
                                var i = n.next;
                                if (void 0 !== i)
                                    for (; void 0 !== i;) r = {
                                        name: i.name,
                                        styles: i.styles,
                                        next: r
                                    }, i = i.next;
                                return n.styles + ";"
                            }
                            return function(e, t, n) {
                                var r = "";
                                if (Array.isArray(n))
                                    for (var i = 0; i < n.length; i++) r += er(e, t, n[i]) + ";";
                                else
                                    for (var s in n) {
                                        var o = n[s];
                                        if ("object" != typeof o) null != t && void 0 !== t[o] ? r += s + "{" + t[o] + "}" : ee(o) && (r += et(s) + ":" + en(s, o) + ";");
                                        else if (Array.isArray(o) && "string" == typeof o[0] && (null == t || void 0 === t[o[0]]))
                                            for (var a = 0; a < o.length; a++) ee(o[a]) && (r += et(s) + ":" + en(s, o[a]) + ";");
                                        else {
                                            var l = er(e, t, o);
                                            switch (s) {
                                                case "animation":
                                                case "animationName":
                                                    r += et(s) + ":" + l + ";";
                                                    break;
                                                default:
                                                    r += s + "{" + l + "}"
                                            }
                                        }
                                    }
                                return r
                            }(e, t, n);
                        case "function":
                            if (void 0 !== e) {
                                var s = r,
                                    o = n(e);
                                return r = s, er(e, t, o)
                            }
                    }
                    if (null == t) return n;
                    var a = t[n];
                    return void 0 !== a ? a : n
                }
                var ei = /label:\s*([^\s;{]+)\s*(;|$)/g;

                function es(e, t, n) {
                    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                    var i, s = !0,
                        o = "";
                    r = void 0;
                    var a = e[0];
                    null == a || void 0 === a.raw ? (s = !1, o += er(n, t, a)) : o += a[0];
                    for (var l = 1; l < e.length; l++) o += er(n, t, e[l]), s && (o += a[l]);
                    ei.lastIndex = 0;
                    for (var c = ""; null !== (i = ei.exec(o));) c += "-" + i[1];
                    return {
                        name: function(e) {
                            for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4) t = (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) * 0x5bd1e995 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, n = (65535 & t) * 0x5bd1e995 + ((t >>> 16) * 59797 << 16) ^ (65535 & n) * 0x5bd1e995 + ((n >>> 16) * 59797 << 16);
                            switch (i) {
                                case 3:
                                    n ^= (255 & e.charCodeAt(r + 2)) << 16;
                                case 2:
                                    n ^= (255 & e.charCodeAt(r + 1)) << 8;
                                case 1:
                                    n ^= 255 & e.charCodeAt(r), n = (65535 & n) * 0x5bd1e995 + ((n >>> 16) * 59797 << 16)
                            }
                            return n ^= n >>> 13, (((n = (65535 & n) * 0x5bd1e995 + ((n >>> 16) * 59797 << 16)) ^ n >>> 15) >>> 0).toString(36)
                        }(o) + c,
                        styles: o,
                        next: r
                    }
                }
                var eo = !!s.useInsertionEffect && s.useInsertionEffect,
                    ea = eo || function(e) {
                        return e()
                    },
                    el = eo || i.useLayoutEffect,
                    ec = i.createContext("undefined" != typeof HTMLElement ? function(e) {
                        var t, n, r, i, s, a = e.key;
                        if ("css" === a) {
                            var c = document.querySelectorAll("style[data-emotion]:not([data-s])");
                            Array.prototype.forEach.call(c, function(e) {
                                -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                            })
                        }
                        var y = e.stylisPlugins || G,
                            T = {},
                            I = [];
                        i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + a + ' "]'), function(e) {
                            for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) T[t[n]] = !0;
                            I.push(e)
                        });
                        var N = (n = (t = [H, W].concat(y, [U, (r = function(e) {
                                s.insert(e)
                            }, function(e) {
                                !e.root && (e = e.return) && r(e)
                            })])).length, function(e, r, i, s) {
                                for (var o = "", a = 0; a < n; a++) o += t[a](e, r, i, s) || "";
                                return o
                            }),
                            A = function(e) {
                                var t, n;
                                return L((n = function e(t, n, r, i, s, o, a, c, y) {
                                    for (var T, k = 0, I = 0, N = a, A = 0, P = 0, D = 0, M = 1, L = 1, U = 1, $ = 0, B = "", q = s, z = o, H = i, W = B; L;) switch (D = $, $ = w()) {
                                        case 40:
                                            if (108 != D && 58 == h(W, N - 1)) {
                                                -1 != d(W += u(R($), "&", "&\f"), "&\f") && (U = -1);
                                                break
                                            }
                                        case 34:
                                        case 39:
                                        case 91:
                                            W += R($);
                                            break;
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            W += function(e) {
                                                for (; b = O();)
                                                    if (b < 33) w();
                                                    else break;
                                                return C(e) > 2 || C(b) > 3 ? "" : " "
                                            }(D);
                                            break;
                                        case 92:
                                            W += function(e, t) {
                                                for (var n; --t && w() && !(b < 48) && !(b > 102) && (!(b > 57) || !(b < 65)) && (!(b > 70) || !(b < 97)););
                                                return n = v + (t < 6 && 32 == O() && 32 == w()), f(E, e, n)
                                            }(v - 1, 7);
                                            continue;
                                        case 47:
                                            switch (O()) {
                                                case 42:
                                                case 47:
                                                    m((T = function(e, t) {
                                                        for (; w();)
                                                            if (e + b === 57) break;
                                                            else if (e + b === 84 && 47 === O()) break;
                                                        return "/*" + f(E, t, v - 1) + "*" + l(47 === e ? e : w())
                                                    }(w(), v), S(T, n, r, x, l(b), f(T, 2, -2), 0)), y);
                                                    break;
                                                default:
                                                    W += "/"
                                            }
                                            break;
                                        case 123 * M:
                                            c[k++] = p(W) * U;
                                        case 125 * M:
                                        case 59:
                                        case 0:
                                            switch ($) {
                                                case 0:
                                                case 125:
                                                    L = 0;
                                                case 59 + I:
                                                    -1 == U && (W = u(W, /\f/g, "")), P > 0 && p(W) - N && m(P > 32 ? F(W + ";", i, r, N - 1) : F(u(W, " ", "") + ";", i, r, N - 2), y);
                                                    break;
                                                case 59:
                                                    W += ";";
                                                default:
                                                    if (m(H = j(W, n, r, k, I, s, c, B, q = [], z = [], N), o), 123 === $)
                                                        if (0 === I) e(W, n, H, H, q, o, N, c, z);
                                                        else switch (99 === A && 110 === h(W, 3) ? 100 : A) {
                                                            case 100:
                                                            case 108:
                                                            case 109:
                                                            case 115:
                                                                e(t, H, H, i && m(j(t, H, H, 0, 0, s, c, B, s, q = [], N), z), s, z, N, c, i ? q : z);
                                                                break;
                                                            default:
                                                                e(W, H, H, H, [""], z, 0, c, z)
                                                        }
                                            }
                                            k = I = P = 0, M = U = 1, B = W = "", N = a;
                                            break;
                                        case 58:
                                            N = 1 + p(W), P = D;
                                        default:
                                            if (M < 1) {
                                                if (123 == $) --M;
                                                else if (125 == $ && 0 == M++ && 125 == (b = v > 0 ? h(E, --v) : 0, _--, 10 === b && (_ = 1, g--), b)) continue
                                            }
                                            switch (W += l($), $ * M) {
                                                case 38:
                                                    U = I > 0 ? 1 : (W += "\f", -1);
                                                    break;
                                                case 44:
                                                    c[k++] = (p(W) - 1) * U, U = 1;
                                                    break;
                                                case 64:
                                                    45 === O() && (W += R(w())), A = O(), I = N = p(B = W += function(e) {
                                                        for (; !C(O());) w();
                                                        return f(E, e, v)
                                                    }(v)), $++;
                                                    break;
                                                case 45:
                                                    45 === D && 2 == p(W) && (M = 0)
                                            }
                                    }
                                    return o
                                }("", null, null, null, [""], t = k(t = e), 0, [0], t), E = "", n), N)
                            },
                            P = {
                                key: a,
                                sheet: new o({
                                    key: a,
                                    container: i,
                                    nonce: e.nonce,
                                    speedy: e.speedy,
                                    prepend: e.prepend,
                                    insertionPoint: e.insertionPoint
                                }),
                                nonce: e.nonce,
                                inserted: T,
                                registered: {},
                                insert: function(e, t, n, r) {
                                    s = n, A(e ? e + "{" + t.styles + "}" : t.styles), r && (P.inserted[t.name] = !0)
                                }
                            };
                        return P.sheet.hydrate(I), P
                    }({
                        key: "css"
                    }) : null);
                ec.Provider;
                var eu = function(e) {
                        return (0, i.forwardRef)(function(t, n) {
                            return e(t, (0, i.useContext)(ec), n)
                        })
                    },
                    ed = i.createContext({}),
                    eh = {}.hasOwnProperty,
                    ef = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
                    ep = function(e, t) {
                        var n = {};
                        for (var r in t) eh.call(t, r) && (n[r] = t[r]);
                        return n[ef] = e, n
                    },
                    em = function(e) {
                        var t = e.cache,
                            n = e.serialized,
                            r = e.isStringTag;
                        return J(t, n, r), ea(function() {
                            return V(t, n, r)
                        }), null
                    },
                    eg = eu(function(e, t, n) {
                        var r, s, o, a = e.css;
                        "string" == typeof a && void 0 !== t.registered[a] && (a = t.registered[a]);
                        var l = e[ef],
                            c = [a],
                            u = "";
                        "string" == typeof e.className ? (r = t.registered, s = e.className, o = "", s.split(" ").forEach(function(e) {
                            void 0 !== r[e] ? c.push(r[e] + ";") : e && (o += e + " ")
                        }), u = o) : null != e.className && (u = e.className + " ");
                        var d = es(c, void 0, i.useContext(ed));
                        u += t.key + "-" + d.name;
                        var h = {};
                        for (var f in e) eh.call(e, f) && "css" !== f && f !== ef && (h[f] = e[f]);
                        return h.className = u, n && (h.ref = n), i.createElement(i.Fragment, null, i.createElement(em, {
                            cache: t,
                            serialized: d,
                            isStringTag: "string" == typeof l
                        }), i.createElement(l, h))
                    });
                n(13027);
                var e_ = function(e, t) {
                    var n = arguments;
                    if (null == t || !eh.call(t, "css")) return i.createElement.apply(void 0, n);
                    var r = n.length,
                        s = Array(r);
                    s[0] = eg, s[1] = ep(e, t);
                    for (var o = 2; o < r; o++) s[o] = n[o];
                    return i.createElement.apply(null, s)
                };
                ! function(e) {
                    var t;
                    t || (t = e.JSX || (e.JSX = {}))
                }(e_ || (e_ = {}));
                var ey = eu(function(e, t) {
                    var n = es([e.styles], void 0, i.useContext(ed)),
                        r = i.useRef();
                    return el(function() {
                        var e = t.key + "-global",
                            i = new t.sheet.constructor({
                                key: e,
                                nonce: t.sheet.nonce,
                                container: t.sheet.container,
                                speedy: t.sheet.isSpeedy
                            }),
                            s = !1,
                            o = document.querySelector('style[data-emotion="' + e + " " + n.name + '"]');
                        return t.sheet.tags.length && (i.before = t.sheet.tags[0]), null !== o && (s = !0, o.setAttribute("data-emotion", e), i.hydrate([o])), r.current = [i, s],
                            function() {
                                i.flush()
                            }
                    }, [t]), el(function() {
                        var e = r.current,
                            i = e[0];
                        if (e[1]) {
                            e[1] = !1;
                            return
                        }
                        if (void 0 !== n.next && V(t, n.next, !0), i.tags.length) {
                            var s = i.tags[i.tags.length - 1].nextElementSibling;
                            i.before = s, i.flush()
                        }
                        t.insert("", n, i, !1)
                    }, [t, n.name]), null
                });

                function ev() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return es(t)
                }
            },
            39325: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createCacheIdContext = void 0;
                var r = n(9423);
                t.createCacheIdContext = function(e) {
                    var t = r.hexToBase64(e);
                    return function() {
                        return {
                            name: "context_cache_id",
                            data: {
                                value: t
                            }
                        }
                    }
                }
            },
            42669: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    ConnectionObserver: () => _,
                    DEALER_PLUGIN_NAME: () => U,
                    DealerErrors: () => a,
                    DisconnectionReason: () => i,
                    Method: () => m.I,
                    PluginEvent: () => r,
                    REQUEST_TRANSFORMER_PLUGIN_NAME: () => ek,
                    TransportErrors: () => f.L,
                    TransportEvent: () => p.J,
                    createAbortControllerLike: () => k,
                    createAbortSignalWithTimeout: () => R,
                    createBaseTransport: () => eN,
                    createSpotifyComEndpointsProvider: () => ew,
                    createSpotifyComProviders: () => eC,
                    createSpotifyComTokenProvider: () => eO,
                    createTransport: () => eA,
                    createXResolveProvider: () => eT.Q,
                    dealerCreator: () => F,
                    requestTransformerCreator: () => eI
                });
                var r, i, s, o, a, l, c, u, d = {};
                n.r(d), n.d(d, {
                    isSupported: () => V,
                    request: () => K
                });
                var h = {};
                n.r(h), n.d(h, {
                    request: () => eS
                });
                var f = n(3079),
                    p = n(75408),
                    m = n(24489);
                ! function(e) {
                    e.TRANSPORT_AUTHENTICATE = "transport_authenticate", e.TRANSPORT_AUTHENTICATE_FAILED = "transport_authenticate_failed", e.TRANSPORT_CONNECT = "transport_connect", e.TRANSPORT_DISCONNECT = "transport_disconnect", e.TRANSPORT_ENDPOINTS_RESOLVED = "transport_endpoints_resolved", e.TRANSPORT_BEFORE_PROCESS_REQUEST = "transport_before_process_request", e.TRANSPORT_BEFORE_SEND_REQUEST = "transport_before_send_request", e.TRANSPORT_BEFORE_RETURN_RESPONSE = "transport_before_return_response", e.TRANSPORT_REQUEST = "transport_request", e.PLUGIN_CONNECTION_INFO = "plugin_connection_info", e.PLUGIN_DISCONNECTED = "plugin_disconnected", e.PLUGIN_MESSAGE = "plugin_message", e.PLUGIN_REQUEST = "plugin_request", e.PLUGIN_ERROR = "plugin_error"
                }(r || (r = {})),
                function(e) {
                    e.RECONNECTION_FAILED = "reconnection_failed", e.EXPLICIT = "explicit", e.LOG_OUT = "log_out", e.WINDOW_BEFORE_UNLOAD = "window_before_unload"
                }(i || (i = {}));
                var g = n(8159);
                class _ extends g.bk {}
                class y extends _ {
                    constructor(e) {
                        super();
                        let t = "undefined" != typeof window,
                            n = e && e.notifyBeforeUnload;
                        this._navigator = t && window.navigator || null, t && "function" == typeof window.addEventListener && (window.addEventListener("online", this.emitSync.bind(this, p.J.CONNECTION_ONLINE, null)), window.addEventListener("offline", this.emitSync.bind(this, p.J.CONNECTION_OFFLINE, null)), n && window.addEventListener(p.J.WINDOW_BEFORE_UNLOAD, this.emitSync.bind(this, p.J.WINDOW_BEFORE_UNLOAD, null)))
                    }
                    static create(e) {
                        return new y(e)
                    }
                    isOnline() {
                        let e = this._navigator;
                        return !e || !("onLine" in e) || e.onLine
                    }
                }
                class v extends Error {
                    constructor(e, t, n, r) {
                        super(e), this.name = "RequestError", this.message = e, this.code = t, this.status = n || 0, this.url = r
                    }
                }
                class b extends v {
                    constructor(e, t) {
                        super("Request aborted by signal.", f.L.HTTP_REQUEST_ABORTED, 0, e), this.name = "RequestAbortedError", this.reason = t
                    }
                }
                class E extends v {
                    constructor(e, t) {
                        super("Request aborted by timeout.", f.L.HTTP_REQUEST_TIMEOUT, 0, e), this.name = "RequestTimeoutError", this.reason = t
                    }
                }
                let S = "Signal is aborted without reason";

                function T(e, t) {
                    let n = Error(t);
                    return n.name = e, n
                }
                class w extends g.bk {
                    constructor() {
                        super(), this._aborted = !1, this._reason = void 0, this.onabort = null, this.on("abort", () => {
                            var e;
                            return null == (e = this.onabort) ? void 0 : e.call(this)
                        })
                    }
                    static abort(e) {
                        let t = new w;
                        return t._aborted = !0, t._reason = T("AbortError", null != e ? e : S), t
                    }
                    static signalAbort(e, t) {
                        "_aborted" in e && !e._aborted && (e._aborted = !0, "_reason" in e && (e._reason = t || T("AbortError", S)), e.emit("abort", null))
                    }
                    static timeout(e) {
                        if (!isFinite(e)) throw TypeError('Value of "delay" is not supported.');
                        let t = new w;
                        return setTimeout(() => {
                            w.signalAbort(t, T("TimeoutError", "Signal timed out"))
                        }, e), t
                    }
                    get aborted() {
                        return this._aborted
                    }
                    set aborted(e) {}
                    get reason() {
                        return this._reason
                    }
                    addEventListener(e, t) {
                        this.addListener(e, t)
                    }
                    removeEventListener(e, t) {
                        this.removeListener(e, t)
                    }
                    dispatchEvent() {}
                }
                class O {
                    constructor() {
                        this.signal = new w
                    }
                    abort(e) {
                        let t = this.signal;
                        w.signalAbort(t, e)
                    }
                }

                function C() {
                    return "undefined" != typeof window && "function" == typeof window.AbortController
                }
                let k = C() ? () => new AbortController : () => new O;
                "undefined" != typeof window && "function" == typeof(null == (s = window.AbortSignal) ? void 0 : s.any) && window.AbortSignal.any;
                let R = "undefined" != typeof window && "function" == typeof(null == (o = window.AbortSignal) ? void 0 : o.timeout) ? window.AbortSignal.timeout : w.timeout;

                function I(e, t) {
                    var n;
                    return (null == (n = t.reason) ? void 0 : n.name) === "TimeoutError" ? new E(e, t.reason) : new b(e, t.reason)
                }! function(e) {
                    e.DEALER_CONNECTION_ERROR = "DEALER_CONNECTION_ERROR", e.DEALER_AUTHENTICATION_FAILED = "DEALER_AUTHENTICATION_FAILED", e.DEALER_ERROR = "DEALER_ERROR", e.DEALER_DISCONNECTED_BEFORE_EVENTS = "DEALER_DISCONNECTED_BEFORE_EVENTS", e.ENDPOINT_NOT_DEFINED = "ENDPOINT_NOT_DEFINED", e.INVALID_ENDPOINT = "INVALID_ENDPOINT"
                }(a || (a = {}));
                class N extends Error {
                    constructor(e = a.DEALER_ERROR, t, n = {}) {
                        super(t), this.name = "DealerError", this.message = t, this.code = e, this.raw = n, this.wsCode = n.code || null, this.wsReason = n.reason || null
                    }
                }! function(e) {
                    e.AUTHENTICATED = "authenticated", e.AUTHENTICATION_FAILED = "authentication_failed", e.CONNECTED = "connected", e.CONNECTION_ID = "connection_id", e.ERROR = "error", e.DISCONNECTED = "disconnected", e.MESSAGE = "message", e.REQUEST = "request"
                }(l || (l = {}));
                var A = n(17211);
                ! function(e) {
                    e[e.CLOSE = 4e3] = "CLOSE", e[e.TIMEOUT = 4001] = "TIMEOUT"
                }(c || (c = {}));
                var x = n(64254).Buffer;
                let P = function() {},
                    D = /hm:\/\/pusher\/(?:[^]+)?\/connections\/([^]+)/,
                    M = "undefined" != typeof window;
                class L extends g.bk {
                    constructor(e) {
                        super(), this._socket = null, this._lastPingDeferred = null, this._waitingForConnectionId = !0, this._connectionId = null, this._connectionURI = null, this._heartbeatToken = 0, this._heartbeatTimeoutToken = 0, this._connected = !1, this._endpoint = null, this._closeBeforeEventsRejector = null, this._WebSocket = e.WebSocket || WebSocket, this._heartbeatTimeout = e.heartbeatTimeout || 1e4
                    }
                    static create(e) {
                        return new L(e)
                    }
                    _startHeartbeat(e) {
                        let t = () => {
                            this.ping().then(() => this._onHeartbeatSuccess(), () => this._onHeartbeatError()), this._heartbeatTimeoutToken = setTimeout(() => this._onHeartbeatError(), this._heartbeatTimeout)
                        };
                        e ? t() : this._heartbeatToken = setTimeout(() => t(), 3e4)
                    }
                    _onHeartbeatError() {
                        this._stopHeartbeat(), this._socket && this._socket.close(c.TIMEOUT, "internal-timeout")
                    }
                    _onHeartbeatSuccess() {
                        this._stopHeartbeat(), this._startHeartbeat()
                    }
                    _stopHeartbeat() {
                        null !== this._heartbeatToken && clearTimeout(this._heartbeatToken), null !== this._heartbeatTimeoutToken && clearTimeout(this._heartbeatTimeoutToken)
                    }
                    _prepareConnectionId(e) {
                        var t;
                        let n;
                        if (!e.uri) return !1;
                        let [, r] = null != (t = e.uri.match(D)) ? t : [];
                        return !!r && (n = e.headers && e.headers["Spotify-Connection-Id"] ? e.headers["Spotify-Connection-Id"] : decodeURIComponent(r), this._connectionId = n, this._connectionURI = e.uri, this.emit(l.CONNECTION_ID, {
                            id: n,
                            uri: e.uri
                        }), !0)
                    }
                    _reply(e, t) {
                        if (!e) throw TypeError("Invalid key.");
                        let n = this._socket;
                        n && 1 === n.readyState && n.send(JSON.stringify({
                            type: "reply",
                            key: e,
                            payload: t
                        }))
                    }
                    _parseMessage(e) {
                        let t;
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            return
                        }
                        if ("message" === t.type) this._waitingForConnectionId && this._prepareConnectionId(t) ? (this._waitingForConnectionId = !1, this._startHeartbeat(!0)) : this.emit(l.MESSAGE, {
                            message: t
                        });
                        else if ("pong" === t.type && this._lastPingDeferred) this._lastPingDeferred.resolve(!0), this._lastPingDeferred = null;
                        else if ("request" === t.type) {
                            let e = t.key;
                            e && this.emit(l.REQUEST, {
                                request: t,
                                reply: this._reply.bind(this, e)
                            })
                        }
                    }
                    _handleOpen(e) {
                        e.resolve(!0), this._connected = !0, this.emit(l.AUTHENTICATED, null)
                    }
                    _handleMessage(e) {
                        let t = this,
                            n = e.data;
                        if (M && window.Blob && n instanceof window.Blob) {
                            let e = new FileReader;
                            e.onloadend = function() {
                                let e;
                                if (this.result) {
                                    if (this.result instanceof ArrayBuffer) {
                                        e = "";
                                        let t = new Uint8Array(this.result);
                                        for (let n = 0; n < t.length; n++) e += String.fromCharCode(t[n])
                                    } else e = this.result;
                                    t._parseMessage(e)
                                }
                            }, e.readAsText(n)
                        } else void 0 !== x && "undefined" != typeof ArrayBuffer && n instanceof ArrayBuffer ? this._parseMessage(new x(n).toString("ascii")) : this._parseMessage(n)
                    }
                    _handleClose(e) {
                        let t = this._connected;
                        if (this._connected = !1, !t) {
                            let t = new N(a.DEALER_AUTHENTICATION_FAILED, "Dealer connection error", e);
                            this.emit(l.AUTHENTICATION_FAILED, {
                                error: t
                            });
                            return
                        }
                        this.emitSync(l.DISCONNECTED, {
                            wsCode: e.code,
                            reason: e.reason
                        })
                    }
                    _handleError(e) {
                        let t = new N(a.DEALER_CONNECTION_ERROR, "Cannot connect to dealer");
                        e.reject(t), this._connected = !1, this.emit(l.ERROR, {
                            error: t
                        })
                    }
                    _handleDisconnectBeforeEvents(e) {
                        e.reject(new N(a.DEALER_DISCONNECTED_BEFORE_EVENTS, "Dealer disconnected before events"))
                    }
                    connect(e) {
                        return this._endpoint = e, this._waitingForConnectionId = !0, this.emit(l.CONNECTED, null), Promise.resolve(!0)
                    }
                    authenticate(e) {
                        let t = (0, A.u)(),
                            n = `${this._endpoint}?access_token=${e}`,
                            r = this._socket = new this._WebSocket(n);
                        return r.onopen = this._handleOpen.bind(this, t), r.onclose = this._handleClose.bind(this), r.onerror = this._handleError.bind(this, t), r.onmessage = this._handleMessage.bind(this), this._closeBeforeEventsRejector = this._handleDisconnectBeforeEvents.bind(this, t), t.promise
                    }
                    disconnect() {
                        var e;
                        this._socket && (this._stopHeartbeat(), this._waitingForConnectionId = !0, this._connected = !1, this._socket.close(c.CLOSE, "internal-close"), this._socket.onopen = P, this._socket.onerror = P, this._socket.onmessage = P, this._socket.onclose = P, this._socket = null, null == (e = this._closeBeforeEventsRejector) || e.call(this), this.emitSync(l.DISCONNECTED, {
                            wsCode: c.CLOSE,
                            reason: "internal-close"
                        }))
                    }
                    ping() {
                        return this._socket && 1 === this._socket.readyState ? (this._lastPingDeferred = (0, A.u)(), this._socket.send('{"type":"ping"}'), this._lastPingDeferred.promise) : Promise.reject(new N(a.DEALER_CONNECTION_ERROR, "Dealer connection error"))
                    }
                    getConnectionId() {
                        return this._waitingForConnectionId ? new Promise(e => {
                            this.once(l.CONNECTION_ID, t => {
                                e(t.data.id)
                            })
                        }) : Promise.resolve(this._connectionId)
                    }
                    getConnectionInfo() {
                        return this._waitingForConnectionId ? new Promise(e => {
                            this.once(l.CONNECTION_ID, t => {
                                e({
                                    id: t.data.id,
                                    uri: t.data.uri
                                })
                            })
                        }) : Promise.resolve({
                            id: this._connectionId,
                            uri: this._connectionURI
                        })
                    }
                    hasConnectionId() {
                        return !this._waitingForConnectionId && !!this._connectionId
                    }
                }
                let U = "dealer";
                class j {
                    constructor(e) {
                        this.name = U, this._dealer = new L(e), this.api = {
                            hasConnectionInfo: () => this._dealer.hasConnectionId(),
                            getConnectionInfo: () => this._dealer.getConnectionInfo().then(e => Object.assign({
                                plugin: this.name
                            }, e))
                        }, this._onDealerConnectionId = this._onDealerConnectionId.bind(this), this._onDealerDisconnected = this._onDealerDisconnected.bind(this), this._onDealerMessage = this._onDealerMessage.bind(this), this._onDealerRequest = this._onDealerRequest.bind(this), this._onTransportConnect = this._onTransportConnect.bind(this), this._onTransportAuthenticate = this._onTransportAuthenticate.bind(this), this._onTransportDisconnect = this._onTransportDisconnect.bind(this)
                    }
                    _onDealerConnectionId(e) {
                        this._mediator && this._mediator.emit(r.PLUGIN_CONNECTION_INFO, Object.assign({
                            plugin: this.name
                        }, e.data))
                    }
                    _onDealerDisconnected(e) {
                        if (!this._mediator) return;
                        let t = e.data;
                        this._mediator.emit(r.PLUGIN_DISCONNECTED, {
                            plugin: this.name,
                            code: t.wsCode,
                            reason: t.reason
                        })
                    }
                    _onDealerMessage(e) {
                        this._mediator && this._mediator.emit(r.PLUGIN_MESSAGE, Object.assign({
                            plugin: this.name
                        }, e.data))
                    }
                    _onDealerRequest(e) {
                        this._mediator && this._mediator.emit(r.PLUGIN_REQUEST, Object.assign({
                            plugin: this.name
                        }, e.data))
                    }
                    _onTransportConnect(e) {
                        let t = e.data.endpoints,
                            n = e.data.awaitPromise;
                        return t.dealer ? /^wss:/.test(t.dealer) ? void n(this._dealer.connect(t.dealer)) : void n(Promise.reject(new N(a.INVALID_ENDPOINT, "Dealer endpoint needs to be wss://"))) : void n(Promise.reject(new N(a.ENDPOINT_NOT_DEFINED, 'No "dealer" endpoint defined.')))
                    }
                    _onTransportAuthenticate(e) {
                        let t = e.data;
                        t.awaitPromise(this._dealer.authenticate(t.token))
                    }
                    _onTransportDisconnect() {
                        this._dealer.disconnect()
                    }
                    _onDealerError(e) {
                        var t;
                        null == (t = this._mediator) || t.emit(r.PLUGIN_ERROR, {
                            plugin: this.name,
                            error: e.data.error
                        })
                    }
                    attach(e, t) {
                        this._mediator = t, t.addListeners({
                            [r.TRANSPORT_CONNECT]: this._onTransportConnect,
                            [r.TRANSPORT_AUTHENTICATE]: this._onTransportAuthenticate,
                            [r.TRANSPORT_DISCONNECT]: this._onTransportDisconnect
                        }), this._dealer.addListeners({
                            [l.DISCONNECTED]: this._onDealerDisconnected,
                            [l.CONNECTION_ID]: this._onDealerConnectionId,
                            [l.MESSAGE]: this._onDealerMessage,
                            [l.REQUEST]: this._onDealerRequest,
                            [l.ERROR]: this._onDealerError
                        })
                    }
                    detach(e, t) {
                        this._mediator = void 0, t.removeListeners({
                            [r.TRANSPORT_CONNECT]: this._onTransportConnect,
                            [r.TRANSPORT_AUTHENTICATE]: this._onTransportAuthenticate,
                            [r.TRANSPORT_DISCONNECT]: this._onTransportDisconnect
                        }), this._dealer.removeListeners({
                            [l.DISCONNECTED]: this._onDealerDisconnected,
                            [l.CONNECTION_ID]: this._onDealerConnectionId,
                            [l.MESSAGE]: this._onDealerMessage,
                            [l.REQUEST]: this._onDealerRequest,
                            [l.ERROR]: this._onDealerError
                        })
                    }
                }

                function F(e, t) {
                    return new j(t)
                }
                var $ = n(13139),
                    B = n(59371);
                let q = {
                    POST: !0,
                    PUT: !0,
                    PATCH: !0,
                    DELETE: !0
                };
                var z = n(29994);
                class H {
                    constructor(e) {
                        this.get = e.get.bind(e), this.has = e.has.bind(e)
                    }
                    get(e) {
                        return null
                    }
                    has(e) {
                        return !1
                    }
                }
                class W {
                    constructor(e, t = 0) {
                        this.url = "", this.status = 0, this.headers = null, this.body = null, this.offline = !1, this.timing = null, this.metadata = null, this.retries = {
                            count: 0
                        }, this.url = e, this.status = t, this.ok = t >= 200 && t <= 299
                    }
                    getStatusFamily() {
                        return 0 | this.status / 100
                    }
                }
                let G = $.m.forTag("transport.http.fetch"),
                    J = {
                        json: !0,
                        text: !0,
                        arraybuffer: !0,
                        blob: !0
                    };

                function V() {
                    return "function" == typeof fetch
                }

                function K(e) {
                    if (!V()) return Promise.reject(TypeError("Fetch is not supported"));
                    let t = e.options.signal;
                    if (null == t ? void 0 : t.aborted) return Promise.reject(I(e.url, t));
                    if (!e.url) return Promise.reject(TypeError("Request URL cannot be blank."));
                    let n = e.method || "GET",
                        r = e.url,
                        i = null;
                    if (n in q && !0 === q[n] && e.payload ? i = e.payload : e.payload && (r += `?${e.payload}`), e.options.responseType && !(e.options.responseType in J)) return Promise.reject(TypeError("Cannot set responseType: not supported in browser."));
                    let s = {
                        mode: e.options.mode || "cors",
                        credentials: e.options.credentials || "same-origin",
                        redirect: e.options.redirect || "follow",
                        signal: t,
                        method: n
                    };
                    e.headers.count() && (s.headers = e.headers.toJSON()), i && (s.body = i);
                    let o = (0, B.X)();
                    return fetch(r, s).then(function(t) {
                        let n;
                        n = e.options.ignoreResponseBody || t.status === z.s.NO_CONTENT ? null : "json" === e.options.responseType ? t.json().catch(function(e) {
                            return G.warn("Could not parse response as JSON:", e), null
                        }) : "arraybuffer" === e.options.responseType ? t.arrayBuffer() : "blob" === e.options.responseType ? t.blob() : t.text();
                        let r = e.options.parseResponseHeaders || t.status > 299 ? new H(t.headers) : null;
                        return Promise.all([t.url, t.status, r, n])
                    }).then(function([t, n, r, i]) {
                        let s = (0, B.X)(),
                            a = new W(t, n);
                        return a.body = i, a.headers = r, e.options.timing && (a.timing = {
                            completed: (0, B.r)(o, s)
                        }), a
                    }).catch(function(t) {
                        let n = (0, B.X)();
                        if ((null == t ? void 0 : t.name) === "AbortError") throw new b(r);
                        if ((null == t ? void 0 : t.name) === "TimeoutError") throw new E(r);
                        let i = new W(r);
                        return e.options.timing && (i.timing = {
                            completed: (0, B.r)(o, n)
                        }), i
                    }).then(function(t) {
                        return e.options.connectionObserver && (t.offline = !e.options.connectionObserver.isOnline()), t
                    })
                }
                var X = n(82643);
                let Q = {
                    baseTime: 200,
                    ceiling: 0,
                    curve: "linear",
                    jitter: !0
                };
                class Y {
                    constructor(e = {}) {
                        this._curve = e.curve || Q.curve, this._baseTime = e.baseTime || Q.baseTime, this._ceiling = e.ceiling || Q.ceiling, this._jitter = "jitter" in e ? !!e.jitter : Q.jitter
                    }
                    getTime(e) {
                        let t;
                        switch (this._curve) {
                            case "static":
                                t = 1;
                                break;
                            case "logarithmic":
                                t = Math.log(e);
                                break;
                            case "exponential":
                                t = Math.pow(Math.E, e);
                                break;
                            default:
                                t = e + 1
                        }
                        let n = Math.min(0x100000000, Math.floor(t * this._baseTime));
                        return this._ceiling && (n = Math.min(n, this._ceiling)), this._jitter ? function(e) {
                            let t = e / 5;
                            return Math.floor(e - t / 2 + Math.random() * t)
                        }(n) : n
                    }
                }
                let Z = {
                    backoffInitial: !1,
                    baseTime: 200,
                    ceiling: 0,
                    curve: "linear",
                    jitter: !0,
                    maxDuration: 1 / 0,
                    maxRetries: 1 / 0,
                    maxTime: 1 / 0,
                    retryPredicate: () => !0
                };
                class ee {
                    constructor(e, t) {
                        this._resolver = (0, A.u)(), this._ts = 0, this._callCount = 0, this._tickInterval = 0, this._isRunning = !1, this._isDestroyed = !1;
                        let n = Object.assign(Object.assign({}, Z), t),
                            {
                                backoffInitial: r,
                                maxDuration: i,
                                maxRetries: s,
                                maxTime: o,
                                retryPredicate: a
                            } = n,
                            l = (0, X.__rest)(n, ["backoffInitial", "maxDuration", "maxRetries", "maxTime", "retryPredicate"]);
                        this._fn = e, this._backoffInitial = r, this._maxDuration = i, this._maxRetries = s, this._maxTime = o, this._retryPredicate = a, this._backoffInitial = r, this._counter = new Y(l), this._backoffInitial && (this._maxRetries += 1)
                    }
                    static init(e, t = {}) {
                        return new ee(e, t).start()
                    }
                    _destroy() {
                        this._isRunning = !1, this._isDestroyed = !0
                    }
                    _failure(e) {
                        if (!this._isDestroyed)
                            if (e && "retryAfter" in e) this._retryAfter(e);
                            else {
                                let t = this._counter.getTime(this._callCount);
                                this._shouldRetry(t, e) ? (this._callCount++, this._tickInterval = setTimeout(() => this._tick(), t)) : (this._resolver.reject(e), this._destroy())
                            }
                    }
                    _retryAfter(e) {
                        this._callCount++, this._tickInterval = setTimeout(() => this._tick(), e.retryAfter)
                    }
                    _success(...e) {
                        this._isDestroyed || (this._resolver.resolve(...e), this._destroy())
                    }
                    _shouldRetry(e, t) {
                        let n = Date.now() - this._ts + e;
                        return this._callCount < this._maxRetries && e < this._maxTime && n < this._maxDuration && this._retryPredicate(t)
                    }
                    _tick() {
                        this._fn().then((...e) => this._success(...e)).catch(e => this._failure(e))
                    }
                    getResolver() {
                        return this._resolver.promise
                    }
                    start() {
                        return this._isDestroyed ? Promise.reject(Error("Backoff already consumed")) : (this._isRunning || (this._ts = Date.now(), this._isRunning = !0, this._backoffInitial ? (this._callCount = 1, this._tickInterval = setTimeout(() => this._tick(), this._counter.getTime(0))) : this._tick()), this._resolver.promise)
                    }
                    stop() {
                        clearTimeout(this._tickInterval), this._destroy()
                    }
                    getRetryCount() {
                        return this._callCount
                    }
                }
                var et = n(31191);
                class en extends Error {
                    constructor(e, t, n = null) {
                        super(t), this.name = "TransportError", this.message = t, this.code = e, this.origin = n
                    }
                }
                class er {
                    constructor(e) {
                        this._headers = {}, this._count = 0, this._setAll(e)
                    }
                    _setAll(e) {
                        let t = 0;
                        for (let n in e) e.hasOwnProperty(n) && e[n] && (this._headers[n.toLowerCase()] = e[n], t++);
                        this._count = t
                    }
                    get(e) {
                        return this._headers[e.toLowerCase()] || null
                    }
                    has(e) {
                        return !!this._headers[e.toLowerCase()]
                    }
                    set(e, t) {
                        this._headers[e.toLowerCase()] = t, this._count++
                    }
                    delete(e) {
                        let t = e.toLowerCase();
                        this._headers[t] && this._count--, delete this._headers[e.toLowerCase()]
                    }
                    count() {
                        return this._count
                    }
                    toJSON() {
                        return Object.assign({}, this._headers)
                    }
                }
                class ei {
                    constructor(e, t) {
                        this.url = e, this.method = (null == t ? void 0 : t.method) || "GET", this.headers = new er(null == t ? void 0 : t.headers), this.options = (null == t ? void 0 : t.options) || {}, this.payload = null == t ? void 0 : t.payload, this.urlExpanded = (null == t ? void 0 : t.urlExpanded) || !1, this.retryOptions = (null == t ? void 0 : t.retryOptions) || {}
                    }
                    static create(e, t) {
                        return new ei(e, t)
                    }
                    clone() {
                        let e = new ei(this.url);
                        return e.method = this.method, e.headers = new er(this.headers.toJSON()), e.options = this.options, e.payload = this.payload, e.urlExpanded = this.urlExpanded, e.retryOptions = this.retryOptions, e
                    }
                }! function(e) {
                    e.EVENT_ACCESS_TOKEN = "access_token", e.EVENT_CONNECTION_ID = "connection_id", e.EVENT_CONNECTION_OFFLINE = "connection_offline", e.EVENT_CONNECTION_ONLINE = "connection_online", e.EVENT_ENDPOINTS_RESOLVED = "endpoints_resolved"
                }(u || (u = {}));
                class es extends g.bk {
                    constructor(e, t) {
                        super(), this.EVENT_ACCESS_TOKEN = u.EVENT_ACCESS_TOKEN, this.EVENT_CONNECTION_ID = u.EVENT_CONNECTION_ID, this.EVENT_CONNECTION_OFFLINE = u.EVENT_CONNECTION_OFFLINE, this.EVENT_CONNECTION_ONLINE = u.EVENT_CONNECTION_ONLINE, this.EVENT_ENDPOINTS_RESOLVED = u.EVENT_ENDPOINTS_RESOLVED, this.StatusCode = z.s, this.StatusFamily = et.t, this.getConnectionId = e.getConnectionId.bind(e), this.getEndpoints = e.getEndpoints.bind(e), this.getInitTime = e.getInitTime.bind(e), this.getLastToken = e.getLastToken.bind(e), this.matchMessages = e.matchMessages.bind(e), this.unmatchMessages = e.unmatchMessages.bind(e), this.handlePushRequests = e.handlePushRequests.bind(e), this.unhandlePushRequests = e.unhandlePushRequests.bind(e), this.hasPlugin = e.hasPlugin.bind(e), this.getPluginAPI = e.getPluginAPI.bind(e);
                        let n = e.request.bind(e);
                        (null == t ? void 0 : t.requestOptions) ? this.request = (e, r) => r ? n(e, Object.assign(Object.assign(Object.assign({}, null == t ? void 0 : t.requestOptions), r), {
                            metadata: Object.assign(Object.assign({}, t.requestOptions.metadata), null == r ? void 0 : r.metadata),
                            retry: Object.assign(Object.assign({}, t.requestOptions.retry), null == r ? void 0 : r.retry)
                        })) : n(e, t.requestOptions): this.request = n, this.proxyEmit(e, p.J.ACCESS_TOKEN, u.EVENT_ACCESS_TOKEN), this.proxyEmit(e, p.J.CONNECTION_OFFLINE, u.EVENT_CONNECTION_OFFLINE), this.proxyEmit(e, p.J.CONNECTION_ONLINE, u.EVENT_CONNECTION_ONLINE), this.proxyEmit(e, p.J.ENDPOINTS_RESOLVED, u.EVENT_ENDPOINTS_RESOLVED), this.onAddListener(u.EVENT_CONNECTION_ID, this._onAddConnectionIdListener.bind(this, e.on.bind(e))), this.onRemoveListener(u.EVENT_CONNECTION_ID, this._onRemoveConnectionIdListener.bind(this, e.removeListener.bind(e)))
                    }
                    _onAddConnectionIdListener(e, t) {
                        t.preventDefault();
                        let n = t.data.listener,
                            r = e => {
                                let t = this.createEvent(u.EVENT_CONNECTION_ID, e.data);
                                n.call(this, t)
                            };
                        n.$proxy_wrapper = r, e(p.J.CONNECTION_ID, r, t.data.options)
                    }
                    _onRemoveConnectionIdListener(e, t) {
                        t.preventDefault();
                        let n = t.data.listener;
                        n.$proxy_wrapper && e(p.J.CONNECTION_ID, n.$proxy_wrapper, t.data.options)
                    }
                    removeAllListeners() {
                        return this
                    }
                }
                class eo {
                    constructor() {
                        this._startTime = null, this._endTime = null
                    }
                    static create() {
                        return new eo
                    }
                    start() {
                        if (null !== this._startTime) throw Error("Measurement is already in progress.");
                        this._startTime = Date.now()
                    }
                    end() {
                        if (null === this._startTime || null !== this._endTime) throw Error("Measurement is not in progress.");
                        this._endTime = Date.now()
                    }
                    getMetrics() {
                        if (null === this._startTime || null === this._endTime) throw Error("Measurement is not done.");
                        return {
                            start_time: this._startTime,
                            end_time: this._endTime
                        }
                    }
                }
                let ea = $.m.forTag("transport.transport"),
                    el = /^(?:https?:\/\/)?@([^/]+)\//,
                    ec = /^(ws|http)s?:\/\/.*[^/]$/,
                    eu = /^([a-zA-Z]{3}, \d{1,2} [a-zA-Z]{3} (\d{1,2}.){3})/,
                    ed = {
                        xhr: !0,
                        fetch: !0
                    },
                    eh = {
                        CONNECTED: 1,
                        AUTHENTICATED: 4
                    };

                function ef(e, t) {
                    let n = `access_token=${encodeURIComponent(t)}`,
                        [r, i] = e.split("?");
                    if (!i) return `${r}?${n}`;
                    let s = i.replace(/access_token=[^&]*(&|$)/, `${n}$1`);
                    return s !== i ? `${r}?${s}` : `${r}?${n}&${i}`
                }
                class ep extends g.bk {
                    constructor(e) {
                        if (super(), this._plugins = {}, this._pluginMediator = new g.bk, this._connectCalled = !1, this._authenticateCalled = !1, this._endpoints = null, this._lastToken = null, this._lastTokenExpiry = 0, this._refreshTokenPromise = null, this._authenticationPromise = null, this._reconnectTimeout = 0, this._isReconnecting = !1, this._initTime = 0, this._lastDisconnect = 0, this._stateMask = 0, this._quickDisconnectCount = 0, this._counter = new Y({
                                curve: "exponential",
                                baseTime: 5e3,
                                ceiling: 15e3
                            }), this._stateAwareListeners = {
                                connected: [],
                                authenticated: [],
                                connection_id: [],
                                transport_connect: [],
                                transport_authenticate: []
                            }, this._stateAwareOperationMetrics = {
                                authenticated: null
                            }, this._stateAwareRunners = {
                                connected: null,
                                authenticated: null,
                                connection_id: null,
                                transport_connect: null,
                                transport_authenticate: null
                            }, !e) throw TypeError("Argument `options` for Transport cannot be null.");
                        if (!e.providers) throw TypeError("Argument `options.providers` for Transport cannot be null.");
                        this._ownerRef = "ownerRef" in e ? Object(e.ownerRef) : {}, this._tokenProvider = e.providers.token, this._endpointsProvider = e.providers.endpoints, this._XHR = e.XHR, this._Fetch = e.Fetch, this._reconnectionRetries = e.reconnectionRetries >= 0 ? e.reconnectionRetries : 3, this._requestMode = e.requestMode in ed ? e.requestMode : "xhr", this._forcePolyfillTypes = e.forcePolyfillTypes || {}, this._disableAutoLogout = "disableAutoLogout" in e && !!e.disableAutoLogout, this._disconnectBeforeUnload = e.disconnectBeforeUnload || !1;
                        let t = e.createConnectionObserver || y.create;
                        this._connectionObserver = t({
                            notifyBeforeUnload: this._disconnectBeforeUnload
                        }), this.authenticate = this.authenticate.bind(this), this._authenticateWithToken = this._authenticateWithToken.bind(this), this._connectToEndpoints = this._connectToEndpoints.bind(this), this._parseProvidedToken = this._parseProvidedToken.bind(this), this._onConnected = this._onConnected.bind(this), this._onAuthenticated = this._onAuthenticated.bind(this), this._onAuthenticationFailed = this._onAuthenticationFailed.bind(this), this._init()
                    }
                    static create(e) {
                        return new ep(e)
                    }
                    _init() {
                        this.onAddListener(p.J.CONNECTED, this._onAddListener.bind(this, "connected")), this.onAddListener(p.J.AUTHENTICATED, this._onAddListener.bind(this, "authenticated")), this.onAddListener(p.J.CONNECTION_ID, this._onAddListener.bind(this, "connection_id")), this.onRemoveListener(p.J.CONNECTED, this._onRemoveListener.bind(this, "connected")), this.onRemoveListener(p.J.AUTHENTICATED, this._onRemoveListener.bind(this, "authenticated")), this.onRemoveListener(p.J.CONNECTION_ID, this._onRemoveListener.bind(this, "connection_id")), this._pluginMediator.onAddListener(r.TRANSPORT_CONNECT, this._onAddListener.bind(this, "transport_connect")), this._pluginMediator.onAddListener(r.TRANSPORT_AUTHENTICATE, this._onAddListener.bind(this, "transport_authenticate")), this._pluginMediator.onRemoveListener(r.TRANSPORT_CONNECT, this._onRemoveListener.bind(this, "transport_connect")), this._pluginMediator.onRemoveListener(r.TRANSPORT_AUTHENTICATE, this._onRemoveListener.bind(this, "transport_authenticate")), "fetch" !== this._requestMode || this._Fetch && this._Fetch.isSupported() || (ea.warn('Default "fetch" request mode unavailable; Fallback to "xhr"'), this._requestMode = "xhr");
                        let e = this._pluginMediator;
                        e.addListeners({
                            [r.PLUGIN_DISCONNECTED]: this._onPluginDisconnected.bind(this)
                        }), this.proxyEmit(e, r.PLUGIN_CONNECTION_INFO, p.J.CONNECTION_ID), this._disableAutoLogout || this.matchMessages("client:logout", () => this._onLogout()), this._connectionObserver.on(p.J.CONNECTION_ONLINE, () => this._onOnline()), this._connectionObserver.on(p.J.CONNECTION_OFFLINE, () => this._onOffline()), this._connectionObserver.on(p.J.WINDOW_BEFORE_UNLOAD, () => this._disconnect(i.WINDOW_BEFORE_UNLOAD))
                    }
                    _runStateAwareQueues(e, t) {
                        let n = this._stateAwareListeners[e].splice(0);
                        try {
                            for (let e of n) e.call(this, t)
                        } finally {
                            this._stateAwareRunners[e] = null
                        }
                    }
                    _connect() {
                        return this._stateMask & eh.CONNECTED ? Promise.resolve(!1) : this._connectionObserver.isOnline() ? this._performConnect() : new Promise((e, t) => {
                            ea.info("Waiting to go online before connecting"), this._connectionObserver.once(p.J.CONNECTION_ONLINE, () => {
                                this._performConnect().then(e, t)
                            })
                        })
                    }
                    _performConnect() {
                        return new Promise(e => {
                            ea.info("Resolving endpoints"), e(this._endpointsProvider(this.toPublic()))
                        }).catch(e => {
                            let t = (null == e ? void 0 : e.code) ? e : new en(f.L.TRANSPORT_ENDPOINTS_PROVIDER_ERROR, (null == e ? void 0 : e.message) || "Endpoints provider error", null != e ? e : null);
                            return ea.error("Endpoints resolution failed", t), Promise.reject(t)
                        }).then(this._connectToEndpoints).then(this._onConnected).catch(e => {
                            let t = e && e.error ? e.error : e;
                            return this.emit(p.J.CONNECTION_FAILED, {
                                error: t
                            }), ea.error("Connection failed", t), Promise.reject(t)
                        })
                    }
                    _connectToEndpoints(e) {
                        let t = {
                            webgate: "",
                            webapi: ""
                        };
                        for (let n in e) {
                            if (!e.hasOwnProperty(n)) continue;
                            let r = e[n];
                            r && (ec.test(r) && (r += "/"), t[n] = r)
                        }
                        this._endpoints = t, this.emit(p.J.ENDPOINTS_RESOLVED, {
                            endpoints: Object.assign({}, t)
                        }), ea.info("Endpoints resolved");
                        let n = [],
                            i = e => {
                                n.push(e)
                            };
                        return ea.info("Waiting for plugins to connect"), new Promise((e, s) => {
                            this._pluginMediator.emitAndWait(r.TRANSPORT_CONNECT, {
                                endpoints: Object.assign({}, t),
                                awaitPromise: i
                            }, () => {
                                Promise.all(n).then(() => e(!0), s)
                            })
                        })
                    }
                    _refreshToken(e = !1) {
                        if (this._refreshTokenPromise) return this._refreshTokenPromise;
                        if (!e && this._lastToken && this._lastTokenExpiry > Date.now()) return Promise.resolve(this._lastToken);
                        this._refreshTokenPromise = new Promise(e => {
                            ea.info("Requesting token from provider"), e(this._tokenProvider())
                        }).then(this._parseProvidedToken);
                        let t = () => {
                            this._refreshTokenPromise = null
                        };
                        return this._refreshTokenPromise.then(t, t), this._refreshTokenPromise.catch(e => {
                            let t = (null == e ? void 0 : e.code) ? e : new en(f.L.TRANSPORT_TOKEN_PROVIDER_ERROR, (null == e ? void 0 : e.message) || "Token provider error", e);
                            return this.emit(p.J.TOKEN_PROVIDER_ERROR, {
                                error: t
                            }), ea.error("Token provider error", t), Promise.reject(t)
                        })
                    }
                    _parseProvidedToken(e) {
                        let t, n = 3540;
                        if (Array.isArray(e) ? (t = e[0], "number" == typeof(n = "string" == typeof e[1] ? parseInt(e[1], 10) : e[1]) && isFinite(n) || (n = 3540)) : t = e, !t) throw this._lastToken = null, this._lastTokenExpiry = 0, ea.error("No token was provided"), new en(f.L.TRANSPORT_INVALID_TOKEN, `Token provider returned an invalid token, "${t}"`);
                        if (this._lastToken === t) {
                            ea.error("TokenProvider returned same token twice.");
                            let e = new en(f.L.TRANSPORT_STALE_TOKEN, "Token provider returned the same token twice.");
                            throw this._lastToken = null, this._lastTokenExpiry = 0, e
                        }
                        return this._lastToken = t, this._lastTokenExpiry = Date.now() + 1e3 * n, this.emit(p.J.ACCESS_TOKEN, {
                            token: t
                        }), ea.info("Access token set"), t
                    }
                    _authenticateWithToken(e) {
                        if (!this._endpoints) return Promise.resolve(!0);
                        let t = [],
                            n = e => {
                                t.push(e)
                            };
                        return ea.info("Waiting for plugins to authenticate"), new Promise((i, s) => {
                            this._pluginMediator.emitAndWait(r.TRANSPORT_AUTHENTICATE, {
                                token: e,
                                awaitPromise: n
                            }, () => {
                                Promise.all(t).then(() => i(!0), s)
                            })
                        })
                    }
                    _authenticate(e) {
                        if (!(this._stateMask & eh.CONNECTED)) return Promise.reject(new en(f.L.TRANSPORT_INVALID_STATE, "Cannot authenticate disconnected transport."));
                        if (this._authenticationPromise) return this._authenticationPromise;
                        let t = eo.create();
                        return t.start(), this._authenticationPromise = ee.init(() => (ea.info("Authenticating"), this._refreshToken(e).then(this._authenticateWithToken)), {
                            curve: "exponential",
                            maxRetries: 2,
                            baseTime: 500,
                            retryPredicate: e => (ea.warn("Retrying authentication due to failure", e), !0)
                        }).then(() => this._onAuthenticated(t)).catch(e => this._onAuthenticationFailed(e, t)), this._authenticationPromise
                    }
                    _performDisconnect(e) {
                        return this._stateMask = 0, e && (this.emit(p.J.DISCONNECTED, {
                            reason: e
                        }), ea.info("Disconnected")), ea.info("Waiting for plugins to disconnect."), this._pluginMediator.emitSync(r.TRANSPORT_DISCONNECT, {
                            supressed: !e
                        }), !0
                    }
                    _createReconnector() {
                        let e = !1;
                        return () => (this._isReconnecting = !0, this.emit(p.J.RECONNECTING, null), ea.info("Reconnecting"), this._performDisconnect(), this._connect().then(() => !!this._authenticateCalled && this._authenticate(e).then(t => (e = !1, t), t => (e = !0, Promise.reject(t)))).then(() => (this._isReconnecting = !1, this.emit(p.J.RECONNECTED, null), ea.info("Reconnected"), !0)))
                    }
                    _tryToReconnect() {
                        if (this._isReconnecting) return void ea.warn("Reconnection triggered while already reconnecting");
                        this._stateMask = 0, ee.init(this._createReconnector(), {
                            baseTime: 1e3,
                            maxTime: 15e3,
                            maxRetries: this._reconnectionRetries,
                            retryPredicate: e => (ea.warn("Retrying reconnection due to failure", e), !0)
                        }).catch(() => {
                            this._stateMask = 0, this._isReconnecting = !1, this.emit(p.J.DISCONNECTED, {
                                reason: i.RECONNECTION_FAILED
                            }), ea.info("Disconnected: reconnection failed")
                        })
                    }
                    _sendRequest(e, t = {}, n = {}) {
                        let r = t.signal;
                        return (null == r ? void 0 : r.aborted) ? Promise.reject(I(e, r)) : this._processRequestArgs(e, t).then(t => (null == r ? void 0 : r.aborted) ? Promise.reject(I(e, r)) : t.options.forget ? this._sendFireAndForgetRequest(t) : this._sendRetriedRequest(t, n))
                    }
                    _processRequestArgs(e, t = {}) {
                        var n, r;
                        if (null == (n = t.signal) ? void 0 : n.aborted) return Promise.reject(I(e, t.signal));
                        let i = e,
                            s = !1,
                            o = Object.assign(Object.assign({}, t), {
                                forcePolyfill: !!(t.responseType && t.responseType in this._forcePolyfillTypes),
                                requestMode: null != (r = null == t ? void 0 : t.requestMode) ? r : this._requestMode,
                                connectionObserver: this._connectionObserver,
                                metadata: (null == t ? void 0 : t.metadata) || null
                            });
                        if ((null == t ? void 0 : t.signal) && !C() && ("fetch" === t.requestMode ? ea.warn("Request with `{requestMode: fetch}` but no native AbortController.") : o.requestMode = "xhr"), el.test(i)) {
                            s = !0;
                            try {
                                i = this._tryExpandSpecialURL(i)
                            } catch (e) {
                                return Promise.reject(e)
                            }
                            "authorize" in o || (o.authorize = !0, o.autoAuthorized = !0)
                        }
                        let a = Object.assign(Object.assign({
                            maxRetries: 2,
                            curve: "exponential"
                        }, t.retry), {
                            retryPredicate: e => !(e instanceof b)
                        });
                        return Promise.resolve(ei.create(i, {
                            method: t.method,
                            headers: t.headers,
                            payload: t.payload,
                            options: o,
                            urlExpanded: s,
                            retryOptions: a
                        }))
                    }
                    _tryExpandSpecialURL(e) {
                        let t = this._endpoints;
                        return e.replace(el, (e, n) => {
                            if (!t.hasOwnProperty(n)) throw TypeError(`Cannot replace endpoint @${n}: endpoint not defined.`);
                            return t[n]
                        })
                    }
                    _sendFireAndForgetRequest(e) {
                        var t;
                        let {
                            url: n,
                            method: r,
                            options: i
                        } = e;
                        if (null == (t = i.signal) ? void 0 : t.aborted) return Promise.reject(I(n, i.signal));
                        if ("GET" !== r && "POST" !== r) return Promise.reject(new en(f.L.TRANSPORT_UNSUPPORTED_OPTION, `Option 'forget' cannot be used for ${r} request.`));
                        if (!i.autoAuthorized && i.authorize) return Promise.reject(new en(f.L.TRANSPORT_UNSUPPORTED_OPTION, "Option 'forget' cannot be used for authorized request."));
                        if (i.requestMode = "xhr", i.authorize = !1, i.ignoreResponseBody = !0, "GET" === r)
                            if ("function" == typeof Image) new Image().src = n;
                            else if ("function" == typeof fetch) {
                            let e = {
                                mode: "no-cors"
                            };
                            i.signal && C() && (e.signal = i.signal), fetch(n, e).catch(() => {})
                        } else this._sendRetriedRequest(e, {}).catch(() => {});
                        else if ("POST" === r)
                            if ("undefined" != typeof navigator && (null == navigator ? void 0 : navigator.sendBeacon)) {
                                let t = e.headers.get("content-type");
                                navigator.sendBeacon(e.url, "string" == typeof e.payload && t ? new Blob([e.payload], {
                                    type: t
                                }) : e.payload)
                            } else if ("function" == typeof fetch) {
                            let t = e.headers.get("content-type"),
                                r = {
                                    method: "POST",
                                    body: e.payload,
                                    headers: t ? {
                                        "content-type": t
                                    } : void 0
                                };
                            i.signal && C() && (r.signal = i.signal), fetch(n, r).catch(() => {})
                        } else this._sendRetriedRequest(e, {}).catch(() => {});
                        return Promise.resolve(new W(n, 0))
                    }
                    _sendRetriedRequest(e, t) {
                        let n = e.retryOptions,
                            i = e.options.signal,
                            s = !1,
                            o = () => (null == i ? void 0 : i.aborted) ? Promise.reject(I(e.url, i)) : this._setAuthHeader(e, s),
                            a = this._connectionObserver,
                            l = new ee(() => {
                                let l;
                                return (a.isOnline() || e.options.allowOffline ? o() : new Promise((e, t) => {
                                    a.once(p.J.CONNECTION_ONLINE, () => {
                                        o().then(e, t)
                                    })
                                })).then(() => {
                                    let n;
                                    if (null == i ? void 0 : i.aborted) return Promise.reject(I(e.url, i));
                                    if (this._pluginMediator.emitSync(r.TRANSPORT_BEFORE_SEND_REQUEST, {
                                            request: e,
                                            context: t
                                        }), "fetch" === e.options.requestMode && this._Fetch && this._Fetch.isSupported()) n = this._Fetch.request(e);
                                    else if (this._XHR) n = this._XHR.request(e);
                                    else throw Error("No available request mechanisms.");
                                    return n
                                }).then(t => {
                                    if (null == i ? void 0 : i.aborted) return Promise.reject(I(e.url, i));
                                    let r = null;
                                    if (t.headers && (r = t.headers.get("Retry-After")), t.status === z.s.UNAUTHORIZED && !e.options.ignoreUnauthorized) return s = !0, Promise.reject(t);
                                    if ("function" == typeof(null == n ? void 0 : n.condition) && (n.condition(t, et.t) || r)) {
                                        if (null !== r)
                                            if (eu.test(r)) t.retryAfter = new Date(r).getTime() - Date.now();
                                            else {
                                                let e = parseInt(r, 10);
                                                e > 0 && (t.retryAfter = 1e3 * e)
                                            }
                                        return Promise.reject(t)
                                    }
                                    return Promise.resolve(t)
                                })
                            }, n);
                        return l.start().catch(this._handleRetriedRequestError).then(n => (null == i ? void 0 : i.aborted) ? Promise.reject(I(e.url, i)) : (n.metadata = e.options.metadata, n.retries = n.retries || {
                            count: 0
                        }, n.retries.count = l.getRetryCount(), this._pluginMediator.emitSync(r.TRANSPORT_BEFORE_RETURN_RESPONSE, {
                            context: t,
                            response: n,
                            request: e
                        }), e.options.rejectNotOk && !n.ok) ? Promise.reject(n) : n)
                    }
                    _setAuthHeader(e, t) {
                        if (!e.options.authorize) return Promise.resolve(e);
                        let n = () => this._refreshToken(t).then(t => (e.headers.set("Authorization", `Bearer ${t}`), e));
                        return this._stateMask & eh.AUTHENTICATED ? n() : new Promise((e, t) => {
                            ea.info("Auth header setting awaiting authentication."), this.once(p.J.AUTHENTICATED, () => {
                                ea.info("Auth header set after authentication."), n().then(e, t)
                            })
                        })
                    }
                    _handleRetriedRequestError(e) {
                        return e instanceof W ? Promise.resolve(e) : Promise.reject(e)
                    }
                    _onAddListener(e, t) {
                        let n, i = t.data.options;
                        if (i.ignoreCurrentState) return;
                        switch (e) {
                            case "connected":
                                if (!this.isConnected()) return;
                                n = Promise.resolve(this.createEvent(p.J.CONNECTED, null));
                                break;
                            case "authenticated":
                                {
                                    if (!this.isAuthenticated()) return;
                                    let e = this._stateAwareOperationMetrics.authenticated;n = Promise.resolve(this.createEvent(p.J.AUTHENTICATED, {
                                        timing: e
                                    }));
                                    break
                                }
                            case "connection_id":
                                {
                                    let e = this.getPluginAPI("dealer");
                                    if (!e || !e.hasConnectionInfo()) return;n = e.getConnectionInfo().then(e => this.createEvent(p.J.CONNECTION_ID, e));
                                    break
                                }
                            case "transport_connect":
                                if (!this.isConnected() || !this._endpoints) return;
                                n = Promise.resolve(this._pluginMediator.createEvent(r.TRANSPORT_CONNECT, {
                                    endpoints: Object.assign({}, this._endpoints),
                                    awaitPromise: e => {}
                                }));
                                break;
                            case "transport_authenticate":
                                if (!this.isAuthenticated()) return;
                                n = this._refreshToken().then(e => this._pluginMediator.createEvent(r.TRANSPORT_AUTHENTICATE, {
                                    token: e,
                                    awaitPromise: e => {}
                                }));
                                break;
                            default:
                                return
                        }
                        let s = t.data.listener;
                        this._stateAwareListeners[e].push(s);
                        let o = this._stateAwareRunners;
                        !o[e] && (o[e] = n.then(this._runStateAwareQueues.bind(this, e)), i.once && t.preventDefault())
                    }
                    _onRemoveListener(e, t) {
                        let n = t.data.options;
                        if (n.ignoreCurrentState || n.once) return;
                        let r = t.data.listener,
                            i = this._stateAwareListeners[e].indexOf(r); - 1 !== i && this._stateAwareListeners[e].splice(i, 1)
                    }
                    _getQuickDisconnectTimeout() {
                        return this._counter.getTime(this._quickDisconnectCount)
                    }
                    _onPluginDisconnected(e) {
                        let t = Date.now(),
                            n = t - this._lastDisconnect;
                        if (this._performDisconnect(), e.data.code === c.CLOSE) {
                            ea.info(`Plugin "${e.data.plugin}" explicitly disconnected`), this._quickDisconnectCount = 0;
                            return
                        }
                        this._connectionObserver.isOnline() && (ea.info(`Plugin "${e.data.plugin}" unexpectedly disconnect; trying to reconnect`), n < 5e3 ? (this._reconnectTimeout && clearTimeout(this._reconnectTimeout), this._quickDisconnectCount++, this.emit(p.J.SHORT_SESSION_DISCONNECTED, {
                            disconnectCount: this._quickDisconnectCount,
                            sessionLength: n
                        }), this._reconnectTimeout = setTimeout(this._tryToReconnect.bind(this), this._getQuickDisconnectTimeout())) : (this._quickDisconnectCount = 0, this._lastDisconnect = t, this._tryToReconnect()))
                    }
                    _onOnline() {
                        this.emit(p.J.CONNECTION_ONLINE, null), ea.info("ConnectionObserver online"), this._connectCalled && this._tryToReconnect()
                    }
                    _onOffline() {
                        this.emit(p.J.CONNECTION_OFFLINE, null), ea.info("ConnectioObserver offline"), this._performDisconnect()
                    }
                    _onConnected() {
                        return this._stateMask |= eh.CONNECTED, this.emit(p.J.CONNECTED, null), ea.info("Connected"), Promise.resolve(!0)
                    }
                    _onAuthenticated(e) {
                        e.end(), clearTimeout(this._reconnectTimeout), this._authenticationPromise = null, this._stateMask |= eh.AUTHENTICATED, this._initTime = Date.now();
                        let t = e.getMetrics();
                        return this.emit(p.J.AUTHENTICATED, {
                            timing: t
                        }), this._stateAwareOperationMetrics.authenticated = t, ea.info("Authenticated"), Promise.resolve(!0)
                    }
                    _onAuthenticationFailed(e, t) {
                        t.end();
                        let n = e && e.error ? e.error : e;
                        this._authenticationPromise = null, this._stateMask &= ~eh.AUTHENTICATED;
                        let i = {
                            error: n,
                            timing: t.getMetrics()
                        };
                        return this.emit(p.J.AUTHENTICATION_FAILED, i), this._pluginMediator.emit(r.TRANSPORT_AUTHENTICATE_FAILED, i), ea.info("Authentication failed", n), Promise.reject(n)
                    }
                    _onLogout() {
                        let e = () => {
                            this._lastToken = null, this._lastTokenExpiry = 0, this.emit(p.J.LOGGED_OUT, null)
                        };
                        this._disconnect(i.LOG_OUT).then(e, e)
                    }
                    _disconnect(e) {
                        if (!this._connectCalled) return Promise.resolve(!1);
                        this._connectCalled = !1, this._authenticateCalled = !1;
                        let t = this.isConnected() ? p.J.BEFORE_ONLINE_DISCONNECT : p.J.BEFORE_OFFLINE_DISCONNECT,
                            n = [];
                        return this.emitSync(t, {
                            awaitPromise: e => {
                                n.push(e.catch(() => {}))
                            }
                        }), Promise.all(n).then(() => this._performDisconnect(e))
                    }
                    isConnected() {
                        return !!(this._stateMask & eh.CONNECTED)
                    }
                    isAuthenticated() {
                        return !!(this._stateMask & eh.AUTHENTICATED)
                    }
                    isReconnecting() {
                        return this._isReconnecting
                    }
                    isOnline() {
                        return this._connectionObserver.isOnline()
                    }
                    connect() {
                        return this._connectCalled = !0, this._connect()
                    }
                    authenticate() {
                        return this._authenticateCalled = !0, this._authenticate(!0)
                    }
                    disconnect() {
                        return this._disconnect(i.EXPLICIT)
                    }
                    forceDisconnect() {
                        return this._connectCalled ? (this._connectCalled = !1, this._authenticateCalled = !1, this._performDisconnect(i.EXPLICIT), Promise.resolve(!0)) : Promise.resolve(!1)
                    }
                    forceTokenRefresh() {
                        return this._refreshToken(!0).then(() => !0)
                    }
                    getInitTime() {
                        return this._initTime
                    }
                    getEndpoints() {
                        return this._endpoints ? Object.assign({}, this._endpoints) : null
                    }
                    getLastToken() {
                        return this._lastToken
                    }
                    toPublic(e) {
                        return new es(this, e)
                    }
                    hasOwnerRef(e) {
                        return this._ownerRef === e
                    }
                    appendTokenQuery(e) {
                        return this._refreshToken().then(t => ef(e, t))
                    }
                    appendLastTokenQuery(e) {
                        return this._lastToken ? ef(e, this._lastToken) : e
                    }
                    matchMessages(e, t, n) {
                        if (!e) throw TypeError('Message "matcher" cannot be null.');
                        if ("function" != typeof t) throw TypeError("Message callback cannot be null.");
                        let i = r => {
                            let i = r.data.message;
                            i.uri && i.uri.match(e) && (!n || n === r.data.plugin) && t(i)
                        };
                        i.__matchMessagesExp = e, i.__matchMessagesPlugin = n, t.__matchMessagesWrapper = i, this._pluginMediator.on(r.PLUGIN_MESSAGE, i)
                    }
                    unmatchMessages(e, t, n) {
                        if ("function" != typeof t) throw TypeError("Message callback cannot be null.");
                        let i = t.__matchMessagesWrapper;
                        return !!i && i.__matchMessagesExp === e && i.__matchMessagesPlugin === n && (this._pluginMediator.removeListener(r.PLUGIN_MESSAGE, i), !0)
                    }
                    handlePushRequests(e, t, n) {
                        if (!e) throw TypeError('Push request "matcher" cannot be null.');
                        if ("function" != typeof t) throw TypeError("Push request callback cannot be null.");
                        let i = r => {
                            let i = r.data.request;
                            i.message_ident && i.message_ident.match(e) && (!n || n === r.data.plugin) && Promise.resolve(t(i)).then(r.data.reply)
                        };
                        i.__matchRequestExp = e, i.__matchRequestPlugin = n, t.__matchRequestWrapper = i, this._pluginMediator.on(r.PLUGIN_REQUEST, i)
                    }
                    unhandlePushRequests(e, t, n) {
                        if ("function" != typeof t) throw TypeError("Push request callback cannot be null.");
                        let i = t.__matchRequestWrapper;
                        return !!i && i.__matchRequestExp === e && i.__matchRequestPlugin === n && (this._pluginMediator.removeListener(r.PLUGIN_REQUEST, i), !0)
                    }
                    request(e, t) {
                        var n;
                        let i = {
                            uri: e,
                            options: t,
                            context: {}
                        };
                        this._pluginMediator.emitSync(r.TRANSPORT_BEFORE_PROCESS_REQUEST, i);
                        let s = this._sendRequest.bind(this, i.uri, i.options, i.context);
                        return !this._endpoints && el.test(i.uri) ? (ea.info("Request queued until endpoints resolved", i.uri), new Promise((e, t) => {
                            this.once(p.J.ENDPOINTS_RESOLVED, () => {
                                ea.info("Sending endpoints-queued request", i.uri), s().then(e, t)
                            })
                        })) : this._connectionObserver.isOnline() || (null == (n = i.options) ? void 0 : n.allowOffline) ? s() : (ea.info("Request queued until online", i.uri), new Promise((e, t) => {
                            this.once(p.J.CONNECTION_ONLINE, () => {
                                ea.info("Sending offline-queued request", i.uri), s().then(e, t)
                            })
                        }))
                    }
                    addPlugin(e, t) {
                        let n = e(this, t),
                            r = n.name;
                        if (this._plugins[r]) throw TypeError("Plugin is already added.");
                        return n.attach(this, this._pluginMediator), this._plugins[r] = n, r
                    }
                    removePlugin(e) {
                        let t = this._plugins[e];
                        return !!t && (t.detach(this, this._pluginMediator), this._plugins[e] = void 0, !0)
                    }
                    hasPlugin(e) {
                        return !!this._plugins[e]
                    }
                    getPluginAPI(e) {
                        let t = this._plugins[e];
                        return t && t.api ? t.api : null
                    }
                    getConnectionId(e = "dealer") {
                        let t = this._plugins[e];
                        return t ? t.api && "getConnectionInfo" in t.api ? t.api.getConnectionInfo().then(e => e.id) : Promise.reject(TypeError(`Plugin ${t} is not a socket plugin.`)) : Promise.reject(TypeError(`Cannot retrieve connection id for plugin ${t}.`))
                    }
                    removeAllListeners() {
                        return this
                    }
                }
                class em {
                    constructor(e) {
                        this._headers = {}, this._init(e)
                    }
                    _init(e) {
                        if (e)
                            for (let t of e.split("\r\n")) {
                                let e = t.indexOf(": ");
                                if (e > 0) {
                                    let n = t.substring(0, e).toLowerCase(),
                                        r = t.substring(e + 2);
                                    this._headers[n] = r
                                }
                            }
                    }
                    get(e) {
                        return this._headers[e.toLowerCase()] || null
                    }
                    has(e) {
                        return this._headers.hasOwnProperty(e.toLowerCase())
                    }
                }
                let eg = $.m.forTag("transport.http.xhr"),
                    e_ = function() {},
                    ey = {
                        json: !0,
                        text: !0,
                        document: !0
                    };

                function ev() {
                    this.onabort = e_, this.onerror = e_, this.onload = e_, this.onloadend = e_
                }

                function eb(e, t, n) {
                    var r, i;
                    if (null == (r = e.options.signal) ? void 0 : r.aborted) return;
                    let s = (0, B.X)(),
                        o = this.status,
                        a = new W(this.responseURL || e.url, o);
                    a.body = null;
                    let l = e.options;
                    if (l.timing && (a.timing = {
                            completed: (0, B.r)(t, s)
                        }), (null == (i = l.connectionObserver) ? void 0 : i.isOnline) && (a.offline = !l.connectionObserver.isOnline()), (l.parseResponseHeaders || o > 299) && (a.headers = new em(this.getAllResponseHeaders())), !l.ignoreResponseBody && o !== z.s.NO_CONTENT) {
                        let e = l.responseType || "";
                        if (!l.forcePolyfill && "response" in this && e === this.responseType) a.body = this.response;
                        else if ("document" === e) a.body = this.responseXML;
                        else if ("json" === e) try {
                            a.body = JSON.parse(this.responseText)
                        } catch (e) {
                            eg.warn("Could not parse response as JSON:", e), a.body = null
                        } else("text" === e || "" === e) && (a.body = this.responseText)
                    }
                    n(a)
                }

                function eE(e, t, n) {
                    4 === this.readyState ? t(new W(this.responseURL || e, this.status)) : n(new v("Request cannot be completed.", f.L.HTTP_REQUEST_FAILED, this.status, e))
                }

                function eS(e) {
                    let t = e.options.signal;
                    return new Promise((n, r) => {
                        if (null == t ? void 0 : t.aborted) return void r(I(e.url, t));
                        let i = new XMLHttpRequest,
                            s = e.url;
                        if (!s) return void r(TypeError("Request URL cannot be blank."));
                        let o = null,
                            a = e.method || "GET",
                            l = e.payload || "";
                        if (l && "[object ReadableStream]" === Object.prototype.toString.call(l)) return void r(TypeError("payload is a ReadableStream, which is not supported"));
                        a in q && !0 === q[a] && l ? o = l : l && (s += `?${l}`), i.open(a, s, !0), i.onerror = eE.bind(i, s, n, r), i.onabort = ev, i.onloadend = ev, i.onprogress = e_;
                        let c = e.options;
                        "include" === c.credentials && (i.withCredentials = !0);
                        let u = c.responseType;
                        if (u)
                            if (c.forcePolyfill) {
                                if (!(u in ey)) return void r(TypeError(`Cannot polyfill responseType "${u}"`))
                            } else {
                                if (!("responseType" in i) && !(u in ey)) return void r(TypeError("Cannot set responseType: not supported in browser."));
                                try {
                                    i.responseType = u
                                } catch (e) {
                                    r(TypeError(`Unknown responseType "${u}".`));
                                    return
                                }
                                if (i && u !== i.responseType && !(u in ey)) return void r(TypeError(`Unknown responseType "${u}".`))
                            }
                        let d = e.headers.count() ? e.headers.toJSON() : null;
                        if (d) {
                            for (let e in d)
                                if (d.hasOwnProperty(e) && d[e]) try {
                                    i.setRequestHeader(e, d[e])
                                } catch (e) {
                                    r(e);
                                    return
                                }
                        }
                        t && t.addEventListener("abort", function e() {
                            t.removeEventListener("abort", e), i.abort(), r(I(s, t))
                        }), i.onload = eb.bind(i, e, (0, B.X)(), n);
                        try {
                            i.send(o)
                        } catch (e) {
                            r(e);
                            return
                        }
                    })
                }
                var eT = n(60813);

                function ew() {
                    return () => Promise.resolve({
                        webgate: "https://www.spotify.com/api/",
                        webapi: "https://api.spotify.com"
                    })
                }

                function eO() {
                    return () => Promise.resolve("NOT_A_TOKEN")
                }

                function eC() {
                    return {
                        endpoints: ew(),
                        token: eO()
                    }
                }
                let ek = "request-transformer";
                class eR {
                    constructor(e) {
                        this.name = ek, this._uriTransformer = e.uriTransformer, this._optionsOverrides = e.optionsOverrides, this._include = e.include, this._processRequest = this._processRequest.bind(this)
                    }
                    _processRequest(e) {
                        var t, n;
                        let r = e.data;
                        if ((null == (n = null == (t = r.options) ? void 0 : t.metadata) ? void 0 : n.noRequestTransform) || this._include && !this._include(r.uri, r.options)) return;
                        this._uriTransformer && (r.uri = this._uriTransformer(r.uri));
                        let i = this._optionsOverrides;
                        if (i)
                            if (r.options) {
                                let e = Object.assign(Object.assign(Object.assign({}, r.options), i), {
                                    metadata: Object.assign(Object.assign({}, r.options.metadata), i.metadata),
                                    retry: Object.assign(Object.assign({}, r.options.retry), i.retry),
                                    headers: Object.assign(Object.assign({}, r.options.headers), i.headers)
                                });
                                r.options = e
                            } else r.options = i
                    }
                    attach(e, t) {
                        t.on(r.TRANSPORT_BEFORE_PROCESS_REQUEST, this._processRequest)
                    }
                    detach(e, t) {
                        t.removeListener(r.TRANSPORT_BEFORE_PROCESS_REQUEST, this._processRequest)
                    }
                }

                function eI(e, t) {
                    return new eR(t)
                }

                function eN(e) {
                    let t = Object.assign({}, e);
                    return t.XHR || (t.XHR = h), t.Fetch = d, ep.create(t)
                }

                function eA(e) {
                    let t = eN(e);
                    return t.addPlugin(F, {
                        WebSocket: WebSocket
                    }), t
                }
            },
            42891: (e, t, n) => {
                "use strict";
                let r;
                n.d(t, {
                    fE: () => a,
                    q6: () => o
                });
                var i = n(86727),
                    s = n(27157);

                function o() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "embed-standalone-prod";
                    if (!r) {
                        let {
                            sendMetric: t
                        } = (0, i.createSemanticMetrics)({
                            key: e,
                            dev: !"production".startsWith("prod") && ! function() {
                                let e = s.env.DEBUG_SEMANTIC_METRICS;
                                return "1" === e || "2" === e
                            }(),
                            reporter: function() {
                                let {
                                    DEBUG_SEMANTIC_METRICS: e
                                } = s.env;
                                return "1" === e ? [new i.ConsoleReporter] : [(0, i.createUniversalReporter)(), ..."2" === e ? [new i.ConsoleReporter] : []]
                            }(),
                            component_id: "embed-standalone-prod"
                        });
                        r = t
                    }
                }
                async function a(e) {
                    if (!r) throw Error("Invalid call to sendMetric before initSemanticMetrics.");
                    return e.tags || (e.tags = {}), "slingshot" in e.tags || (e.tags.slingshot = "1" === s.env.IS_SLINGSHOT ? "true" : "false"), r(e)
                }
            },
            43276: () => {},
            43378: (e, t, n) => {
                "use strict";
                n.d(t, {
                    AD: () => d,
                    SB: () => a,
                    ay: () => u,
                    hH: () => l
                });
                var r = n(8875),
                    i = n(97025);
                let s = /^o(\d+)\./,
                    o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

                function a(e, t = !1) {
                    let {
                        host: n,
                        path: r,
                        pass: i,
                        port: s,
                        projectId: o,
                        protocol: l,
                        publicKey: c
                    } = e;
                    return `${l}://${c}${t&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${o}`
                }

                function l(e) {
                    let t = o.exec(e);
                    if (!t) return void(0, i.pq)(() => {
                        console.error(`Invalid Sentry Dsn: ${e}`)
                    });
                    let [n, r, s = "", a = "", l = "", u = ""] = t.slice(1), d = "", h = u, f = h.split("/");
                    if (f.length > 1 && (d = f.slice(0, -1).join("/"), h = f.pop()), h) {
                        let e = h.match(/^\d+/);
                        e && (h = e[0])
                    }
                    return c({
                        host: a,
                        pass: s,
                        path: d,
                        projectId: h,
                        port: l,
                        protocol: n,
                        publicKey: r
                    })
                }

                function c(e) {
                    return {
                        protocol: e.protocol,
                        publicKey: e.publicKey || "",
                        pass: e.pass || "",
                        host: e.host,
                        port: e.port || "",
                        path: e.path || "",
                        projectId: e.projectId
                    }
                }

                function u(e) {
                    let t = e.match(s);
                    return t ? .[1]
                }

                function d(e) {
                    let t = "string" == typeof e ? l(e) : c(e);
                    if (t && function(e) {
                            if (!r.T) return !0;
                            let {
                                port: t,
                                projectId: n,
                                protocol: s
                            } = e;
                            return !["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (i.vF.error(`Invalid Sentry Dsn: ${t} missing`), !0)) && (n.match(/^\d+$/) ? "http" !== s && "https" !== s ? (i.vF.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), !1) : !(t && isNaN(parseInt(t, 10))) || (i.vF.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : (i.vF.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
                        }(t)) return t
                }
            },
            44118: (e, t, n) => {
                "use strict";
                n.d(t, {
                    H: () => i
                });
                let r = e => e ? new URL(e).hostname : "",
                    i = () => {
                        let e = document.referrer;
                        if (!e || e.includes("open.spotify.com")) {
                            let e = new URL(window.location.href).searchParams.get("referrer");
                            if (e) return r(e)
                        }
                        return r(e)
                    }
            },
            45060: (e, t, n) => {
                "use strict";
                n.d(t, {
                    S8: () => o,
                    cd: () => function e(t, n = 3, r = 102400) {
                        let i = o(t, n);
                        return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i
                    }
                });
                var r = n(15677),
                    i = n(4982),
                    s = n(47060);

                function o(e, t = 100, n = Infinity) {
                    try {
                        return function e(t, n, o = Infinity, a = Infinity, l = function() {
                            let e = new WeakSet;
                            return [function(t) {
                                return !!e.has(t) || (e.add(t), !1)
                            }, function(t) {
                                e.delete(t)
                            }]
                        }()) {
                            let [c, u] = l;
                            if (null == n || ["boolean", "string"].includes(typeof n) || "number" == typeof n && Number.isFinite(n)) return n;
                            let d = function(e, t) {
                                try {
                                    if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                                    if ("domainEmitter" === e) return "[DomainEmitter]";
                                    if ("undefined" != typeof global && t === global) return "[Global]";
                                    if ("undefined" != typeof window && t === window) return "[Window]";
                                    if ("undefined" != typeof document && t === document) return "[Document]";
                                    if ((0, r.L2)(t)) return "[VueViewModel]";
                                    if ((0, r.mE)(t)) return "[SyntheticEvent]";
                                    if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
                                    if ("function" == typeof t) return `[Function: ${(0,s.qQ)(t)}]`;
                                    if ("symbol" == typeof t) return `[${String(t)}]`;
                                    if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                                    let n = function(e) {
                                        let t = Object.getPrototypeOf(e);
                                        return t ? .constructor ? t.constructor.name : "null prototype"
                                    }(t);
                                    if (/^HTML(\w*)Element$/.test(n)) return `[HTMLElement: ${n}]`;
                                    return `[object ${n}]`
                                } catch (e) {
                                    return `**non-serializable** (${e})`
                                }
                            }(t, n);
                            if (!d.startsWith("[object ")) return d;
                            if (n.__sentry_skip_normalization__) return n;
                            let h = "number" == typeof n.__sentry_override_normalization_depth__ ? n.__sentry_override_normalization_depth__ : o;
                            if (0 === h) return d.replace("object ", "");
                            if (c(n)) return "[Circular ~]";
                            if (n && "function" == typeof n.toJSON) try {
                                let t = n.toJSON();
                                return e("", t, h - 1, a, l)
                            } catch (e) {}
                            let f = Array.isArray(n) ? [] : {},
                                p = 0,
                                m = (0, i.W4)(n);
                            for (let t in m) {
                                if (!Object.prototype.hasOwnProperty.call(m, t)) continue;
                                if (p >= a) {
                                    f[t] = "[MaxProperties ~]";
                                    break
                                }
                                let n = m[t];
                                f[t] = e(t, n, h - 1, a, l), p++
                            }
                            return u(n), f
                        }("", e, t, n)
                    } catch (e) {
                        return {
                            ERROR: `**non-serializable** (${e})`
                        }
                    }
                }
            },
            45564: (e, t) => {
                "use strict";
                t.byteLength = function(e) {
                    var t = l(e),
                        n = t[0],
                        r = t[1];
                    return (n + r) * 3 / 4 - r
                }, t.toByteArray = function(e) {
                    var t, n, s = l(e),
                        o = s[0],
                        a = s[1],
                        c = new i((o + a) * 3 / 4 - a),
                        u = 0,
                        d = a > 0 ? o - 4 : o;
                    for (n = 0; n < d; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = 255 & t;
                    return 2 === a && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, c[u++] = 255 & t), 1 === a && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = 255 & t), c
                }, t.fromByteArray = function(e) {
                    for (var t, r = e.length, i = r % 3, s = [], o = 0, a = r - i; o < a; o += 16383) s.push(function(e, t, r) {
                        for (var i, s = [], o = t; o < r; o += 3) i = (e[o] << 16 & 0xff0000) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), s.push(n[i >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
                        return s.join("")
                    }(e, o, o + 16383 > a ? a : o + 16383));
                    return 1 === i ? s.push(n[(t = e[r - 1]) >> 2] + n[t << 4 & 63] + "==") : 2 === i && s.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="), s.join("")
                };
                for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = s.length; o < a; ++o) n[o] = s[o], r[s.charCodeAt(o)] = o;

                function l(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                    var n = e.indexOf("="); - 1 === n && (n = t);
                    var r = n === t ? 0 : 4 - n % 4;
                    return [n, r]
                }
                r[45] = 62, r[95] = 63
            },
            45790: (e, t, n) => {
                "use strict";
                let r, i, s, o, a, l, c, u, d, h, f, p, m, g, _, y, v, b, E;
                var S, T = n(13980),
                    w = n(97025),
                    O = n(91011);

                function C(e, t, n = [t], r = "npm") {
                    let i = e._metadata || {};
                    i.sdk || (i.sdk = {
                        name: `sentry.javascript.${t}`,
                        packages: n.map(e => ({
                            name: `${r}:@sentry/${e}`,
                            version: O.M
                        })),
                        version: O.M
                    }), e._metadata = i
                }
                var k = n(72638),
                    R = n(8875);
                let I = [];

                function N(e, t) {
                    for (let n of t) n ? .afterAllSetup && n.afterAllSetup(e)
                }

                function A(e, t, n) {
                    if (n[t.name]) {
                        R.T && w.vF.log(`Integration skipped because it was already installed: ${t.name}`);
                        return
                    }
                    if (n[t.name] = t, -1 === I.indexOf(t.name) && "function" == typeof t.setupOnce && (t.setupOnce(), I.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), "function" == typeof t.preprocessEvent) {
                        let n = t.preprocessEvent.bind(t);
                        e.on("preprocessEvent", (t, r) => n(t, r, e))
                    }
                    if ("function" == typeof t.processEvent) {
                        let n = t.processEvent.bind(t),
                            r = Object.assign((t, r) => n(t, r, e), {
                                id: t.name
                            });
                        e.addEventProcessor(r)
                    }
                    R.T && w.vF.log(`Integration installed: ${t.name}`)
                }

                function x(e) {
                    let t = [];
                    e.message && t.push(e.message);
                    try {
                        let n = e.exception.values[e.exception.values.length - 1];
                        n ? .value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
                    } catch (e) {}
                    return t
                }
                var P = n(48141),
                    D = n(9228);
                let M = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/],
                    L = (e = {}) => {
                        let t;
                        return {
                            name: "EventFilters",
                            setup(n) {
                                t = j(e, n.getOptions())
                            },
                            processEvent: (n, r, i) => (t || (t = j(e, i.getOptions())), ! function(e, t) {
                                if (e.type) {
                                    if ("transaction" === e.type && function(e, t) {
                                            if (!t ? .length) return !1;
                                            let n = e.transaction;
                                            return !!n && (0, D.Xr)(n, t)
                                        }(e, t.ignoreTransactions)) return R.T && w.vF.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0,P.$X)(e)}`), !0
                                } else {
                                    var n, r, i;
                                    if (n = e, r = t.ignoreErrors, r ? .length && x(n).some(e => (0, D.Xr)(e, r))) return R.T && w.vF.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,P.$X)(e)}`), !0;
                                    if (i = e, i.exception ? .values ? .length && !i.message && !i.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value)) return R.T && w.vF.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0,P.$X)(e)}`), !0;
                                    if (function(e, t) {
                                            if (!t ? .length) return !1;
                                            let n = F(e);
                                            return !!n && (0, D.Xr)(n, t)
                                        }(e, t.denyUrls)) return R.T && w.vF.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,P.$X)(e)}.
Url: ${F(e)}`), !0;
                                    if (! function(e, t) {
                                            if (!t ? .length) return !0;
                                            let n = F(e);
                                            return !n || (0, D.Xr)(n, t)
                                        }(e, t.allowUrls)) return R.T && w.vF.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,P.$X)(e)}.
Url: ${F(e)}`), !0
                                }
                                return !1
                            }(n, t) ? n : null)
                        }
                    },
                    U = (e = {}) => ({ ...L(e),
                        name: "InboundFilters"
                    });

                function j(e = {}, t = {}) {
                    return {
                        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : M],
                        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []]
                    }
                }

                function F(e) {
                    try {
                        let t = [...e.exception ? .values ? ? []].reverse().find(e => e.mechanism ? .parent_id === void 0 && e.stacktrace ? .frames ? .length),
                            n = t ? .stacktrace ? .frames;
                        return n ? function(e = []) {
                            for (let t = e.length - 1; t >= 0; t--) {
                                let n = e[t];
                                if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                            }
                            return null
                        }(n) : null
                    } catch (t) {
                        return R.T && w.vF.error(`Cannot extract url for event ${(0,P.$X)(e)}`), null
                    }
                }
                var $ = n(73757),
                    B = n(4982);
                let q = new WeakMap,
                    z = () => ({
                        name: "FunctionToString",
                        setupOnce() {
                            r = Function.prototype.toString;
                            try {
                                Function.prototype.toString = function(...e) {
                                    let t = (0, B.sp)(this),
                                        n = q.has((0, $.KU)()) && void 0 !== t ? t : this;
                                    return r.apply(n, e)
                                }
                            } catch {}
                        },
                        setup(e) {
                            q.set(e, !0)
                        }
                    });
                var H = n(47060);
                let W = () => {
                    let e;
                    return {
                        name: "Dedupe",
                        processEvent(t) {
                            if (t.type) return t;
                            try {
                                var n, r;
                                if (n = t, (r = e) && (function(e, t) {
                                        let n = e.message,
                                            r = t.message;
                                        return (!!n || !!r) && (!n || !!r) && (!!n || !r) && n === r && !!J(e, t) && !!G(e, t) && !0
                                    }(n, r) || function(e, t) {
                                        let n = V(t),
                                            r = V(e);
                                        return !!n && !!r && n.type === r.type && n.value === r.value && !!J(e, t) && !!G(e, t)
                                    }(n, r))) return R.T && w.vF.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (e) {}
                            return e = t
                        }
                    }
                };

                function G(e, t) {
                    let n = (0, H.RV)(e),
                        r = (0, H.RV)(t);
                    if (!n && !r) return !0;
                    if (n && !r || !n && r || r.length !== n.length) return !1;
                    for (let e = 0; e < r.length; e++) {
                        let t = r[e],
                            i = n[e];
                        if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1
                    }
                    return !0
                }

                function J(e, t) {
                    let n = e.fingerprint,
                        r = t.fingerprint;
                    if (!n && !r) return !0;
                    if (n && !r || !n && r) return !1;
                    try {
                        return n.join("") === r.join("")
                    } catch (e) {
                        return !1
                    }
                }

                function V(e) {
                    return e.exception ? .values && e.exception.values[0]
                }
                var K = n(98696),
                    X = n(72359),
                    Q = n(43378),
                    Y = n(1229),
                    Z = n(45060);

                function ee(e, t = []) {
                    return [e, t]
                }

                function et(e, t) {
                    for (let n of e[1]) {
                        let e = n[0].type;
                        if (t(n, e)) return !0
                    }
                    return !1
                }

                function en(e) {
                    let t = (0, Y.Se)(T.O);
                    return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e)
                }
                let er = {
                    session: "session",
                    sessions: "session",
                    attachment: "attachment",
                    transaction: "transaction",
                    event: "error",
                    client_report: "internal",
                    user_report: "default",
                    profile: "profile",
                    profile_chunk: "profile",
                    replay_event: "replay",
                    replay_recording: "replay",
                    check_in: "monitor",
                    feedback: "feedback",
                    span: "span",
                    raw_security: "security",
                    log: "log_item"
                };

                function ei(e) {
                    if (!e ? .sdk) return;
                    let {
                        name: t,
                        version: n
                    } = e.sdk;
                    return {
                        name: t,
                        version: n
                    }
                }

                function es(e, t, n, r) {
                    let i = e.sdkProcessingMetadata ? .dynamicSamplingContext;
                    return {
                        event_id: e.event_id,
                        sent_at: new Date().toISOString(),
                        ...t && {
                            sdk: t
                        },
                        ...!!n && r && {
                            dsn: (0, Q.SB)(r)
                        },
                        ...i && {
                            trace: i
                        }
                    }
                }
                var eo = n(68510),
                    ea = n(15597),
                    el = n(59392),
                    ec = n(15677),
                    eu = n(22551),
                    ed = n(26940),
                    eh = n(71552),
                    ef = n(89411),
                    ep = n(92486);
                let em = "Not capturing exception because it's already been captured.",
                    eg = "Discarded session because of missing or non-string release",
                    e_ = Symbol.for("SentryInternalError"),
                    ey = Symbol.for("SentryDoNotSendEventError");

                function ev(e) {
                    return {
                        message: e,
                        [e_]: !0
                    }
                }

                function eb(e) {
                    return {
                        message: e,
                        [ey]: !0
                    }
                }

                function eE(e) {
                    return !!e && "object" == typeof e && e_ in e
                }

                function eS(e) {
                    return !!e && "object" == typeof e && ey in e
                }
                class eT {
                    constructor(e) {
                        if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = (0, Q.AD)(e.dsn) : R.T && w.vF.warn("No DSN provided, client will not send events."), this._dsn) {
                            let t = function(e, t, n) {
                                return t || `${function(e){let t=e.protocol?`${e.protocol}:`:"",n=e.port?`:${e.port}`:"";return`${t}//${e.host}${n}${e.path?`/${e.path}`:""}/api/`}(e)}${e.projectId}/envelope/?${function(e,t){let n={sentry_version:"7"};return e.publicKey&&(n.sentry_key=e.publicKey),t&&(n.sentry_client=`
                                $ {
                                    t.name
                                }
                                /${t.version}`),new URLSearchParams(n).toString()}(e,n)}`}(this._dsn,e.tunnel,e._metadata?e._metadata.sdk:void 0);this._transport=e.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:t})}}captureException(e,t,n){let r=(0,P.eJ)();if((0,P.GR)(e))return R.T&&w.vF.log(em),r;let i={event_id:r,...t};return this._process(this.eventFromException(e,i).then(e=>this._captureEvent(e,i,n))),i.event_id}captureMessage(e,t,n,r){let i={event_id:(0,P.eJ)(),...n},s=(0,ec.NF)(e)?e:String(e),o=(0,ec.sO)(e)?this.eventFromMessage(s,t,i):this.eventFromException(e,i);return this._process(o.then(e=>this._captureEvent(e,i,r))),i.event_id}captureEvent(e,t,n){let r=(0,P.eJ)();if(t?.originalException&&(0,P.GR)(t.originalException))return R.T&&w.vF.log(em),r;let i={event_id:r,...t},s=e.sdkProcessingMetadata||{},o=s.capturedSpanScope,a=s.capturedSpanIsolationScope;return this._process(this._captureEvent(e,i,o||n,a)),i.event_id}captureSession(e){this.sendSession(e),(0,ea.qO)(e,{init:!1})}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(e){let t=this._transport;return t?(this.emit("flush"),this._isClientDoneProcessing(e).then(n=>t.flush(e).then(e=>n&&e))):(0,ef.XW)(!0)}close(e){return this.flush(e).then(e=>(this.getOptions().enabled=!1,this.emit("close"),e))}getEventProcessors(){return this._eventProcessors}addEventProcessor(e){this._eventProcessors.push(e)}init(){(this._isEnabled()||this._options.integrations.some(({name:e})=>e.startsWith("Spotlight")))&&this._setupIntegrations()}getIntegrationByName(e){return this._integrations[e]}addIntegration(e){let t=this._integrations[e.name];A(this,e,this._integrations),t||N(this,[e])}sendEvent(e,t={}){this.emit("beforeSendEvent",e,t);let n=function(e,t,n,r){var i;let s=ei(n),o=e.type&&"replay_event"!==e.type?e.type:"event";(i=n?.sdk)&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||i.name,e.sdk.version=e.sdk.version||i.version,e.sdk.integrations=[...e.sdk.integrations||[],...i.integrations||[]],e.sdk.packages=[...e.sdk.packages||[],...i.packages||[]]);let a=es(e,s,r,t);return delete e.sdkProcessingMetadata,ee(a,[[{type:o},e]])}(e,this._dsn,this._options._metadata,this._options.tunnel);for(let e of t.attachments||[])n=function(e,t){let[n,r]=e;return[n,[...r,t]]}(n,function(e){let t="string"==typeof e.data?en(e.data):e.data;return[{type:"attachment",length:t.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType},t]}(e));let r=this.sendEnvelope(n);r&&r.then(t=>this.emit("afterSendEvent",e,t),null)}sendSession(e){let{release:t,environment:n=K.U}=this._options;if("aggregates"in e){let r=e.attrs||{};if(!r.release&&!t){R.T&&w.vF.warn(eg);return}r.release=r.release||t,r.environment=r.environment||n,e.attrs=r}else{if(!e.release&&!t){R.T&&w.vF.warn(eg);return}e.release=e.release||t,e.environment=e.environment||n}this.emit("beforeSendSession",e);let r=function(e,t,n,r){let i=ei(n);return ee({sent_at:new Date().toISOString(),...i&&{sdk:i},...!!r&&t&&{dsn:(0,Q.SB)(t)}},["aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()]])}(e,this._dsn,this._options._metadata,this._options.tunnel);this.sendEnvelope(r)}recordDroppedEvent(e,t,n=1){if(this._options.sendClientReports){let r=`${e}:${t}`;R.T&&w.vF.log(`Recording outcome: "${r}"${n>1?` (${n} times)`:""}`),this._outcomes[r]=(this._outcomes[r]||0)+n}}on(e,t){let n=this._hooks[e]=this._hooks[e]||[];return n.push(t),()=>{let e=n.indexOf(t);e>-1&&n.splice(e,1)}}emit(e,...t){let n=this._hooks[e];n&&n.forEach(e=>e(...t))}sendEnvelope(e){return(this.emit("beforeEnvelope",e),this._isEnabled()&&this._transport)?this._transport.send(e).then(null,e=>(R.T&&w.vF.error("Error while sending envelope:",e),e)):(R.T&&w.vF.error("Transport disabled"),(0,ef.XW)({}))}_setupIntegrations(){let{integrations:e}=this._options;this._integrations=function(e,t){let n={};return t.forEach(t=>{t&&A(e,t,n)}),n}(this,e),N(this,e)}_updateSessionFromEvent(e,t){let n="fatal"===t.level,r=!1,i=t.exception?.values;if(i)for(let e of(r=!0,i)){let t=e.mechanism;if(t?.handled===!1){n=!0;break}}let s="ok"===e.status;(s&&0===e.errors||s&&n)&&((0,ea.qO)(e,{...n&&{status:"crashed"},errors:e.errors||Number(r||n)}),this.captureSession(e))}_isClientDoneProcessing(e){return new ef.T2(t=>{let n=0,r=setInterval(()=>{0==this._numProcessing?(clearInterval(r),t(!0)):(n+=1,e&&n>=e&&(clearInterval(r),t(!1)))},1)})}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(e,t,n,r){let i=this.getOptions(),s=Object.keys(this._integrations);return!t.integrations&&s?.length&&(t.integrations=s),this.emit("preprocessEvent",e,t),e.type||r.setLastEventId(e.event_id||t.event_id),(0,eh.mG)(i,e,t,n,this,r).then(e=>(null===e||(this.emit("postprocessEvent",e,t),e.contexts={trace:(0,$.vn)(n),...e.contexts},e.sdkProcessingMetadata={dynamicSamplingContext:(0,X.ao)(this,n),...e.sdkProcessingMetadata}),e))}_captureEvent(e,t={},n=(0,$.o5)(),r=(0,$.rm)()){return R.T&&ew(e)&&w.vF.log(`Captured error event \`${x(e)[0]||"<unknown>"}\``),this._processEvent(e,t,n,r).then(e=>e.event_id,e=>{R.T&&(eS(e)?w.vF.log(e.message):eE(e)?w.vF.warn(e.message):w.vF.warn(e))})}_processEvent(e,t,n,r){let i=this.getOptions(),{sampleRate:s}=i,o=eO(e),a=ew(e),l=e.type||"error",c=`before send for type \`${l}\``,u=void 0===s?void 0:(0,ed.i)(s);if(a&&"number"==typeof u&&Math.random()>u)return this.recordDroppedEvent("sample_rate","error"),(0,ef.xg)(eb(`Discarding event because it's not included in the random sample (sampling rate = ${s})`));let d="replay_event"===l?"replay":l;return this._prepareEvent(e,t,n,r).then(e=>{if(null===e)throw this.recordDroppedEvent("event_processor",d),eb("An event processor returned `null`, will not send event.");return t.data&&!0===t.data.__sentry__?e:function(e,t){let n=`${t} must return \`null\` or a valid event.`;if((0,ec.Qg)(e))return e.then(e=>{if(!(0,ec.Qd)(e)&&null!==e)throw ev(n);return e},e=>{throw ev(`${t} rejected with ${e}`)});if(!(0,ec.Qd)(e)&&null!==e)throw ev(n);return e}(function(e,t,n,r){let{beforeSend:i,beforeSendTransaction:s,beforeSendSpan:o}=t,a=n;if(ew(a)&&i)return i(a,r);if(eO(a)){if(o){let e=o(function(e){let{trace_id:t,parent_span_id:n,span_id:r,status:i,origin:s,data:o,op:a}=e.contexts?.trace??{};return{data:o??{},description:e.transaction,op:a,parent_span_id:n,span_id:r??"",start_timestamp:e.start_timestamp??0,status:i,timestamp:e.timestamp,trace_id:t??"",origin:s,profile_id:o?.[ep.E1],exclusive_time:o?.[ep.jG],measurements:e.measurements,is_segment:!0}}(a));if(e)a=(0,eu.h)(n,{type:"transaction",timestamp:e.timestamp,start_timestamp:e.start_timestamp,transaction:e.description,contexts:{trace:{trace_id:e.trace_id,span_id:e.span_id,parent_span_id:e.parent_span_id,op:e.op,status:e.status,origin:e.origin,data:{...e.data,...e.profile_id&&{[ep.E1]:e.profile_id},...e.exclusive_time&&{[ep.jG]:e.exclusive_time}}}},measurements:e.measurements});else(0,eo.xl)();if(a.spans){let e=[];for(let t of a.spans){let n=o(t);n?e.push(n):((0,eo.xl)(),e.push(t))}a.spans=e}}if(s){if(a.spans){let e=a.spans.length;a.sdkProcessingMetadata={...n.sdkProcessingMetadata,spanCountBeforeProcessing:e}}return s(a,r)}}return a}(0,i,e,t),c)}).then(i=>{if(null===i){if(this.recordDroppedEvent("before_send",d),o){let t=1+(e.spans||[]).length;this.recordDroppedEvent("before_send","span",t)}throw eb(`${c} returned \`null\`, will not send event.`)}let s=n.getSession()||r.getSession();if(a&&s&&this._updateSessionFromEvent(s,i),o){let e=(i.sdkProcessingMetadata?.spanCountBeforeProcessing||0)-(i.spans?i.spans.length:0);e>0&&this.recordDroppedEvent("before_send","span",e)}let l=i.transaction_info;return o&&l&&i.transaction!==e.transaction&&(i.transaction_info={...l,source:"custom"}),this.sendEvent(i,t),i}).then(null,e=>{if(eS(e)||eE(e))throw e;throw this.captureException(e,{data:{__sentry__:!0},originalException:e}),ev(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
                                Reason: $ {
                                    e
                                }
                                `)})}_process(e){this._numProcessing++,e.then(e=>(this._numProcessing--,e),e=>(this._numProcessing--,e))}_clearOutcomes(){let e=this._outcomes;return this._outcomes={},Object.entries(e).map(([e,t])=>{let[n,r]=e.split(":");return{reason:n,category:r,quantity:t}})}_flushOutcomes(){var e;R.T&&w.vF.log("Flushing outcomes...");let t=this._clearOutcomes();if(0===t.length){R.T&&w.vF.log("No outcomes to send");return}if(!this._dsn){R.T&&w.vF.log("No dsn provided, will not send outcomes");return}R.T&&w.vF.log("Sending outcomes:",t);let n=ee((e=this._options.tunnel&&(0,Q.SB)(this._dsn))?{dsn:e}:{},[[{type:"client_report"},{timestamp:(0,el.lu)(),discarded_events:t}]]);this.sendEnvelope(n)}}function ew(e){return void 0===e.type}function eO(e){return"transaction"===e.type}T.O._sentryClientToLogBufferMap=new WeakMap;function eC(e,t){let n=t??ek(e)??[];if(0===n.length)return;let r=e.getOptions(),i=function(e,t,n,r){let i={};return t?.sdk&&(i.sdk={name:t.sdk.name,version:t.sdk.version}),n&&r&&(i.dsn=(0,Q.SB)(r)),ee(i,[[{type:"log",item_count:e.length,content_type:"application/vnd.sentry.items.log+json"},{items:e}]])}(n,r._metadata,r.tunnel,e.getDsn());T.O._sentryClientToLogBufferMap?.set(e,[]),e.emit("flushLogs"),e.sendEnvelope(i)}function ek(e){return T.O._sentryClientToLogBufferMap?.get(e)}function eR(e){e.user?.ip_address===void 0&&(e.user={...e.user,ip_address:"{{auto}}"})}function eI(e){"aggregates"in e?e.attrs?.ip_address===void 0&&(e.attrs={...e.attrs,ip_address:"{{auto}}"}):void 0===e.ipAddress&&(e.ipAddress="{{auto}}")}function eN(e,t){let n=ex(e,t),r={type:function(e){let t=e?.name;return!t&&eD(e)?e.message&&Array.isArray(e.message)&&2==e.message.length?e.message[0]:"WebAssembly.Exception":t}(t),value:function(e){let t=e?.message;return eD(e)?Array.isArray(e.message)&&2==e.message.length?e.message[1]:"wasm exception":t?t.error&&"string"==typeof t.error.message?t.error.message:t:"No error message"}(t)};return n.length&&(r.stacktrace={frames:n}),void 0===r.type&&""===r.value&&(r.value="Unrecoverable error caught"),r}function eA(e,t){return{exception:{values:[eN(e,t)]}}}function ex(e,t){var n,r;let i=t.stacktrace||t.stack||"",s=(n=t)&&eP.test(n.message)?1:0,o="number"==typeof(r=t).framesToPop?r.framesToPop:0;try{return e(i,s,o)}catch(e){}return[]}let eP=/Minified React error #\d+;/i;function eD(e){return"undefined"!=typeof WebAssembly&&void 0!==WebAssembly.Exception&&e instanceof WebAssembly.Exception}function eM(e,t,n,r,i){let s;if((0,ec.T2)(t)&&t.error)return eA(e,t.error);if((0,ec.BD)(t)||(0,ec.W6)(t)){if("stack"in t)s=eA(e,t);else{let i=t.name||((0,ec.BD)(t)?"DOMError":"DOMException"),o=t.message?`
                                $ {
                                    i
                                }: $ {
                                    t.message
                                }
                                `:i;s=eL(e,o,n,r),(0,P.gO)(s,o)}return"code"in t&&(s.tags={...s.tags,"DOMException.code":`
                                $ {
                                    t.code
                                }
                                `}),s}return(0,ec.bJ)(t)?eA(e,t):((0,ec.Qd)(t)||(0,ec.xH)(t)?s=function(e,t,n,r){let i=(0,$.KU)(),s=i?.getOptions().normalizeDepth,o=function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){let n=e[t];if(n instanceof Error)return n}}(t),a={__serialized__:(0,Z.cd)(t,s)};if(o)return{exception:{values:[eN(e,o)]},extra:a};let l={exception:{values:[{type:(0,ec.xH)(t)?t.constructor.name:r?"UnhandledRejection":"Error",value:function(e,{isUnhandledRejection:t}){let n=(0,B.HF)(e),r=t?"promise rejection":"exception";if((0,ec.T2)(e))return`
                                Event\ `ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                                if ((0, ec.xH)(e)) {
                                    let t = function(e) {
                                        try {
                                            let t = Object.getPrototypeOf(e);
                                            return t ? t.constructor.name : void 0
                                        } catch (e) {}
                                    }(e);
                                    return `Event \`${t}\` (type=${e.type}) captured as ${r}`
                                }
                                return `Object captured as ${r} with keys: ${n}`
                            }(t, {
                                isUnhandledRejection: r
                            })
                        }]
                }, extra: a
            };
            if (n) {
                let t = ex(e, n);
                t.length && (l.exception.values[0].stacktrace = {
                    frames: t
                })
            }
            return l
        }(e, t, n, i): (s = eL(e, t, n, r), (0, P.gO)(s, `${t}`, void 0)), (0, P.M6)(s, {
            synthetic: !0
        }), s)
}

function eL(e, t, n, r) {
    let i = {};
    if (r && n) {
        let r = ex(e, n);
        r.length && (i.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: r
                }
            }]
        }), (0, P.M6)(i, {
            synthetic: !0
        })
    }
    if ((0, ec.NF)(t)) {
        let {
            __sentry_template_string__: e,
            __sentry_template_values__: n
        } = t;
        return i.logentry = {
            message: e,
            params: n
        }, i
    }
    return i.message = t, i
}
var eU = n(50271);
let ej = T.O,
    eF = 0;

function e$(e, t = {}) {
    if ("function" != typeof e) return e;
    try {
        let t = e.__sentry_wrapped__;
        if (t)
            if ("function" == typeof t) return t;
            else return e;
        if ((0, B.sp)(e)) return e
    } catch (t) {
        return e
    }
    let n = function(...n) {
        try {
            let r = n.map(e => e$(e, t));
            return e.apply(this, r)
        } catch (e) {
            throw eF++, setTimeout(() => {
                eF--
            }), (0, $.v4)(r => {
                r.addEventProcessor(e => (t.mechanism && ((0, P.gO)(e, void 0, void 0), (0, P.M6)(e, t.mechanism)), e.extra = { ...e.extra,
                    arguments: n
                }, e)), (0, k.Cp)(e)
            }), e
        }
    };
    try {
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
    } catch {}(0, B.pO)(n, e), (0, B.my)(e, "__sentry_wrapped__", n);
    try {
        Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
            get: () => e.name
        })
    } catch {}
    return n
}

function eB() {
    let e = (0, eU.$N)(),
        {
            referrer: t
        } = ej.document || {},
        {
            userAgent: n
        } = ej.navigator || {};
    return {
        url: e,
        headers: { ...t && {
                Referer: t
            },
            ...n && {
                "User-Agent": n
            }
        }
    }
}
class eq extends eT {
    constructor(e) {
        var t;
        let n = (t = e, {
            release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : ej.SENTRY_RELEASE ? .id,
            sendClientReports: !0,
            parentSpanIsAlwaysRootSpan: !0,
            ...t
        });
        C(n, "browser", ["browser"], ej.SENTRY_SDK_SOURCE || "npm"), super(n);
        let {
            sendDefaultPii: r,
            sendClientReports: i,
            _experiments: s
        } = this._options, o = s ? .enableLogs;
        ej.document && (i || o) && ej.document.addEventListener("visibilitychange", () => {
            "hidden" === ej.document.visibilityState && (i && this._flushOutcomes(), o && eC(this))
        }), o && (this.on("flush", () => {
            eC(this)
        }), this.on("afterCaptureLog", () => {
            this._logFlushIdleTimeout && clearTimeout(this._logFlushIdleTimeout), this._logFlushIdleTimeout = setTimeout(() => {
                eC(this)
            }, 5e3)
        })), r && (this.on("postprocessEvent", eR), this.on("beforeSendSession", eI))
    }
    eventFromException(e, t) {
        return function(e, t, n, r) {
            let i = eM(e, t, n ? .syntheticException || void 0, r);
            return (0, P.M6)(i), i.level = "error", n ? .event_id && (i.event_id = n.event_id), (0, ef.XW)(i)
        }(this._options.stackParser, e, t, this._options.attachStacktrace)
    }
    eventFromMessage(e, t = "info", n) {
        return function(e, t, n = "info", r, i) {
            let s = eL(e, t, r ? .syntheticException || void 0, i);
            return s.level = n, r ? .event_id && (s.event_id = r.event_id), (0, ef.XW)(s)
        }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
    }
    _prepareEvent(e, t, n, r) {
        return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
    }
}
let ez = {},
    eH = {};

function eW(e, t) {
    ez[e] = ez[e] || [], ez[e].push(t)
}

function eG(e, t) {
    if (!eH[e]) {
        eH[e] = !0;
        try {
            t()
        } catch (t) {
            R.T && w.vF.error(`Error while instrumenting ${e}`, t)
        }
    }
}

function eJ(e, t) {
    let n = e && ez[e];
    if (n)
        for (let r of n) try {
            r(t)
        } catch (t) {
            R.T && w.vF.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0,H.qQ)(r)}
Error:`, t)
        }
}

function eV() {
    "console" in T.O && w.Ow.forEach(function(e) {
        e in T.O.console && (0, B.GS)(T.O.console, e, function(t) {
            return w.Z9[e] = t,
                function(...t) {
                    eJ("console", {
                        args: t,
                        level: e
                    });
                    let n = w.Z9[e];
                    n ? .apply(T.O.console, t)
                }
        })
    })
}
let eK = T.O;

function eX(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}

function eQ(e, t) {
    let n = "fetch";
    eW(n, e), eG(n, () => eY(void 0, t))
}

function eY(e, t = !1) {
    (!t || function() {
        if ("string" == typeof EdgeRuntime) return !0;
        if (! function() {
                if (!("fetch" in eK)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (e) {
                    return !1
                }
            }()) return !1;
        if (eX(eK.fetch)) return !0;
        let e = !1,
            t = eK.document;
        if (t && "function" == typeof t.createElement) try {
            let n = t.createElement("iframe");
            n.hidden = !0, t.head.appendChild(n), n.contentWindow ? .fetch && (e = eX(n.contentWindow.fetch)), t.head.removeChild(n)
        } catch (e) {
            R.T && w.vF.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
        }
        return e
    }()) && (0, B.GS)(T.O, "fetch", function(t) {
        return function(...n) {
            let r = Error(),
                {
                    method: i,
                    url: s
                } = function(e) {
                    if (0 === e.length) return {
                        method: "GET",
                        url: ""
                    };
                    if (2 === e.length) {
                        let [t, n] = e;
                        return {
                            url: e2(t),
                            method: e1(n, "method") ? String(n.method).toUpperCase() : "GET"
                        }
                    }
                    let t = e[0];
                    return {
                        url: e2(t),
                        method: e1(t, "method") ? String(t.method).toUpperCase() : "GET"
                    }
                }(n),
                o = {
                    args: n,
                    fetchData: {
                        method: i,
                        url: s
                    },
                    startTimestamp: 1e3 * (0, el.zf)(),
                    virtualError: r,
                    headers: function(e) {
                        let [t, n] = e;
                        try {
                            if ("object" == typeof n && null !== n && "headers" in n && n.headers) return new Headers(n.headers);
                            if ((0, ec.ks)(t)) return new Headers(t.headers)
                        } catch {}
                    }(n)
                };
            return e || eJ("fetch", { ...o
            }), t.apply(T.O, n).then(async t => (e ? e(t) : eJ("fetch", { ...o,
                endTimestamp: 1e3 * (0, el.zf)(),
                response: t
            }), t), e => {
                if (eJ("fetch", { ...o,
                        endTimestamp: 1e3 * (0, el.zf)(),
                        error: e
                    }), (0, ec.bJ)(e) && void 0 === e.stack && (e.stack = r.stack, (0, B.my)(e, "framesToPop", 1)), e instanceof TypeError && ("Failed to fetch" === e.message || "Load failed" === e.message || "NetworkError when attempting to fetch resource." === e.message)) try {
                    let t = new URL(o.fetchData.url);
                    e.message = `${e.message} (${t.host})`
                } catch {}
                throw e
            })
        }
    })
}
async function eZ(e, t) {
    if (e ? .body) {
        let n = e.body,
            r = n.getReader(),
            i = setTimeout(() => {
                n.cancel().then(null, () => {})
            }, 9e4),
            s = !0;
        for (; s;) {
            let e;
            try {
                e = setTimeout(() => {
                    n.cancel().then(null, () => {})
                }, 5e3);
                let {
                    done: i
                } = await r.read();
                clearTimeout(e), i && (t(), s = !1)
            } catch (e) {
                s = !1
            } finally {
                clearTimeout(e)
            }
        }
        clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {})
    }
}

function e0(e) {
    let t;
    try {
        t = e.clone()
    } catch {
        return
    }
    eZ(t, () => {
        eJ("fetch-body-resolved", {
            endTimestamp: 1e3 * (0, el.zf)(),
            response: e
        })
    })
}

function e1(e, t) {
    return !!e && "object" == typeof e && !!e[t]
}

function e2(e) {
    return "string" == typeof e ? e : e ? e1(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
}

function e5(e, t) {
    let n = (0, $.KU)(),
        r = (0, $.rm)();
    if (!n) return;
    let {
        beforeBreadcrumb: i = null,
        maxBreadcrumbs: s = 100
    } = n.getOptions();
    if (s <= 0) return;
    let o = {
            timestamp: (0, el.lu)(),
            ...e
        },
        a = i ? (0, w.pq)(() => i(o, t)) : o;
    null !== a && (n.emit && n.emit("beforeAddBreadcrumb", a, t), r.addBreadcrumb(a, s))
}

function e3(e) {
    if (void 0 !== e) return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0
}

function e4(e) {
    return "isRelative" in e
}

function e6(e, t) {
    let n = 0 >= e.indexOf("://") && 0 !== e.indexOf("//"),
        r = t ? ? (n ? "thismessage:/" : void 0);
    try {
        if ("canParse" in URL && !URL.canParse(e, r)) return;
        let t = new URL(e, r);
        if (n) return {
            isRelative: n,
            pathname: t.pathname,
            search: t.search,
            hash: t.hash
        };
        return t
    } catch {}
}

function e8(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let n = t[6] || "",
        r = t[8] || "";
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    }
}

function e9(e) {
    return e.split(/[?#]/, 1)[0]
}
let e7 = T.O;

function te(e) {
    eW("dom", e), eG("dom", tt)
}

function tt() {
    if (!e7.document) return;
    let e = eJ.bind(null, "dom"),
        t = tn(e, !0);
    e7.document.addEventListener("click", t, !1), e7.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
        let n = e7[t] ? .prototype;
        n ? .hasOwnProperty ? .("addEventListener") && ((0, B.GS)(n, "addEventListener", function(t) {
            return function(n, r, i) {
                if ("click" === n || "keypress" == n) try {
                    let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                        s = r[n] = r[n] || {
                            refCount: 0
                        };
                    if (!s.handler) {
                        let r = tn(e);
                        s.handler = r, t.call(this, n, r, i)
                    }
                    s.refCount++
                } catch (e) {}
                return t.call(this, n, r, i)
            }
        }), (0, B.GS)(n, "removeEventListener", function(e) {
            return function(t, n, r) {
                if ("click" === t || "keypress" == t) try {
                    let n = this.__sentry_instrumentation_handlers__ || {},
                        i = n[t];
                    i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                } catch (e) {}
                return e.call(this, t, n, r)
            }
        }))
    })
}

function tn(e, t = !1) {
    return n => {
        var r;
        if (!n || n._sentryCaptured) return;
        let a = function(e) {
            try {
                return e.target
            } catch (e) {
                return null
            }
        }(n);
        if (r = n.type, "keypress" === r && (!a ? .tagName || "INPUT" !== a.tagName && "TEXTAREA" !== a.tagName && !a.isContentEditable && 1)) return;
        (0, B.my)(n, "_sentryCaptured", !0), a && !a._sentryId && (0, B.my)(a, "_sentryId", (0, P.eJ)());
        let l = "keypress" === n.type ? "input" : n.type;
        ! function(e) {
            if (e.type !== s) return !1;
            try {
                if (!e.target || e.target._sentryId !== o) return !1
            } catch (e) {}
            return !0
        }(n) && (e({
            event: n,
            name: l,
            global: t
        }), s = n.type, o = a ? a._sentryId : void 0), clearTimeout(i), i = e7.setTimeout(() => {
            o = void 0, s = void 0
        }, 1e3)
    }
}
let tr = "__sentry_xhr_v3__";

function ti(e) {
    eW("xhr", e), eG("xhr", ts)
}

function ts() {
    if (!e7.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open, {
        apply(e, t, n) {
            let r = Error(),
                i = 1e3 * (0, el.zf)(),
                s = (0, ec.Kg)(n[0]) ? n[0].toUpperCase() : void 0,
                o = function(e) {
                    if ((0, ec.Kg)(e)) return e;
                    try {
                        return e.toString()
                    } catch {}
                }(n[1]);
            if (!s || !o) return e.apply(t, n);
            t[tr] = {
                method: s,
                url: o,
                request_headers: {}
            }, "POST" === s && o.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
            let a = () => {
                let e = t[tr];
                if (e && 4 === t.readyState) {
                    try {
                        e.status_code = t.status
                    } catch (e) {}
                    eJ("xhr", {
                        endTimestamp: 1e3 * (0, el.zf)(),
                        startTimestamp: i,
                        xhr: t,
                        virtualError: r
                    })
                }
            };
            return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                apply: (e, t, n) => (a(), e.apply(t, n))
            }) : t.addEventListener("readystatechange", a), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                apply(e, t, n) {
                    let [r, i] = n, s = t[tr];
                    return s && (0, ec.Kg)(r) && (0, ec.Kg)(i) && (s.request_headers[r.toLowerCase()] = i), e.apply(t, n)
                }
            }), e.apply(t, n)
        }
    }), e.send = new Proxy(e.send, {
        apply(e, t, n) {
            let r = t[tr];
            return r && (void 0 !== n[0] && (r.body = n[0]), eJ("xhr", {
                startTimestamp: 1e3 * (0, el.zf)(),
                xhr: t
            })), e.apply(t, n)
        }
    })
}

function to(e) {
    let t = "history";
    eW(t, e), eG(t, ta)
}

function ta() {
    function e(e) {
        return function(...t) {
            let n = t.length > 2 ? t[2] : void 0;
            if (n) {
                let r = a,
                    i = function(e) {
                        try {
                            return new URL(e, e7.location.origin).toString()
                        } catch {
                            return e
                        }
                    }(String(n));
                if (a = i, r === i) return e.apply(this, t);
                eJ("history", {
                    from: r,
                    to: i
                })
            }
            return e.apply(this, t)
        }
    }
    e7.addEventListener("popstate", () => {
        let e = e7.location.href,
            t = a;
        a = e, t !== e && eJ("history", {
            from: t,
            to: e
        })
    }), "history" in eK && eK.history && ((0, B.GS)(e7.history, "pushState", e), (0, B.GS)(e7.history, "replaceState", e))
}
let tl = (e = {}) => {
        let t = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e
        };
        return {
            name: "Breadcrumbs",
            setup(e) {
                var n, r, i, s, o, a, l;
                t.console && function(e) {
                    let t = "console";
                    eW(t, e), eG(t, eV)
                }((n = e, function(e) {
                    var t;
                    if ((0, $.KU)() !== n) return;
                    let r = {
                        category: "console",
                        data: {
                            arguments: e.args,
                            logger: "console"
                        },
                        level: "warn" === (t = e.level) ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t) ? t : "log",
                        message: (0, D.gt)(e.args, " ")
                    };
                    if ("assert" === e.level)
                        if (!1 !== e.args[0]) return;
                        else r.message = `Assertion failed: ${(0,D.gt)(e.args.slice(1)," ")||"console.assert"}`, r.data.arguments = e.args.slice(1);
                    e5(r, {
                        input: e.args,
                        level: e.level
                    })
                })), t.dom && te((r = e, i = t.dom, function(e) {
                    let t, n;
                    if ((0, $.KU)() !== r) return;
                    let s = "object" == typeof i ? i.serializeAttribute : void 0,
                        o = "object" == typeof i && "number" == typeof i.maxStringLength ? i.maxStringLength : void 0;
                    o && o > 1024 && (o = 1024), "string" == typeof s && (s = [s]);
                    try {
                        var a;
                        let r = e.event,
                            i = (a = r) && a.target ? r.target : r;
                        t = (0, eU.Hd)(i, {
                            keyAttrs: s,
                            maxStringLength: o
                        }), n = (0, eU.xE)(i)
                    } catch (e) {
                        t = "<unknown>"
                    }
                    if (0 === t.length) return;
                    let l = {
                        category: `ui.${e.name}`,
                        message: t
                    };
                    n && (l.data = {
                        "ui.component_name": n
                    }), e5(l, {
                        event: e.event,
                        name: e.name,
                        global: e.global
                    })
                })), t.xhr && ti((s = e, function(e) {
                    if ((0, $.KU)() !== s) return;
                    let {
                        startTimestamp: t,
                        endTimestamp: n
                    } = e, r = e.xhr[tr];
                    if (!t || !n || !r) return;
                    let {
                        method: i,
                        url: o,
                        status_code: a,
                        body: l
                    } = r, c = {
                        xhr: e.xhr,
                        input: l,
                        startTimestamp: t,
                        endTimestamp: n
                    }, u = {
                        category: "xhr",
                        data: {
                            method: i,
                            url: o,
                            status_code: a
                        },
                        type: "http",
                        level: e3(a)
                    };
                    s.emit("beforeOutgoingRequestBreadcrumb", u, c), e5(u, c)
                })), t.fetch && eQ((o = e, function(e) {
                    if ((0, $.KU)() !== o) return;
                    let {
                        startTimestamp: t,
                        endTimestamp: n
                    } = e;
                    if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                        if (e.fetchData.method, e.fetchData.url, e.error) {
                            let r = e.fetchData,
                                i = {
                                    data: e.error,
                                    input: e.args,
                                    startTimestamp: t,
                                    endTimestamp: n
                                },
                                s = {
                                    category: "fetch",
                                    data: r,
                                    level: "error",
                                    type: "http"
                                };
                            o.emit("beforeOutgoingRequestBreadcrumb", s, i), e5(s, i)
                        } else {
                            let r = e.response,
                                i = { ...e.fetchData,
                                    status_code: r ? .status
                                };
                            e.fetchData.request_body_size, e.fetchData.response_body_size, r ? .status;
                            let s = {
                                    input: e.args,
                                    response: r,
                                    startTimestamp: t,
                                    endTimestamp: n
                                },
                                a = {
                                    category: "fetch",
                                    data: i,
                                    type: "http",
                                    level: e3(i.status_code)
                                };
                            o.emit("beforeOutgoingRequestBreadcrumb", a, s), e5(a, s)
                        }
                })), t.history && to((a = e, function(e) {
                    if ((0, $.KU)() !== a) return;
                    let t = e.from,
                        n = e.to,
                        r = e8(ej.location.href),
                        i = t ? e8(t) : void 0,
                        s = e8(n);
                    i ? .path || (i = r), r.protocol === s.protocol && r.host === s.host && (n = s.relative), r.protocol === i.protocol && r.host === i.host && (t = i.relative), e5({
                        category: "navigation",
                        data: {
                            from: t,
                            to: n
                        }
                    })
                })), t.sentry && e.on("beforeSendEvent", (l = e, function(e) {
                    (0, $.KU)() === l && e5({
                        category: `sentry.${"transaction"===e.type?"transaction":"event"}`,
                        event_id: e.event_id,
                        level: e.level,
                        message: (0, P.$X)(e)
                    }, {
                        event: e
                    })
                }))
            }
        }
    },
    tc = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
    tu = (e = {}) => {
        let t = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            unregisterOriginalCallbacks: !1,
            ...e
        };
        return {
            name: "BrowserApiErrors",
            setupOnce() {
                t.setTimeout && (0, B.GS)(ej, "setTimeout", td), t.setInterval && (0, B.GS)(ej, "setInterval", td), t.requestAnimationFrame && (0, B.GS)(ej, "requestAnimationFrame", th), t.XMLHttpRequest && "XMLHttpRequest" in ej && (0, B.GS)(XMLHttpRequest.prototype, "send", tf);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : tc).forEach(e => (function(e, t) {
                    let n = ej[e] ? .prototype;
                    n ? .hasOwnProperty ? .("addEventListener") && ((0, B.GS)(n, "addEventListener", function(n) {
                        return function(r, i, s) {
                            var o, a, l, c;
                            try {
                                o = i, "function" == typeof o.handleEvent && (i.handleEvent = e$(i.handleEvent, {
                                    mechanism: {
                                        data: {
                                            function: "handleEvent",
                                            handler: (0, H.qQ)(i),
                                            target: e
                                        },
                                        handled: !1,
                                        type: "instrument"
                                    }
                                }))
                            } catch {}
                            return t.unregisterOriginalCallbacks && (a = this, l = r, c = i, a && "object" == typeof a && "removeEventListener" in a && "function" == typeof a.removeEventListener && a.removeEventListener(l, c)), n.apply(this, [r, e$(i, {
                                mechanism: {
                                    data: {
                                        function: "addEventListener",
                                        handler: (0, H.qQ)(i),
                                        target: e
                                    },
                                    handled: !1,
                                    type: "instrument"
                                }
                            }), s])
                        }
                    }), (0, B.GS)(n, "removeEventListener", function(e) {
                        return function(t, n, r) {
                            try {
                                let i = n.__sentry_wrapped__;
                                i && e.call(this, t, i, r)
                            } catch (e) {}
                            return e.call(this, t, n, r)
                        }
                    }))
                })(e, t))
            }
        }
    };

function td(e) {
    return function(...t) {
        let n = t[0];
        return t[0] = e$(n, {
            mechanism: {
                data: {
                    function: (0, H.qQ)(e)
                },
                handled: !1,
                type: "instrument"
            }
        }), e.apply(this, t)
    }
}

function th(e) {
    return function(t) {
        return e.apply(this, [e$(t, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: (0, H.qQ)(e)
                },
                handled: !1,
                type: "instrument"
            }
        })])
    }
}

function tf(e) {
    return function(...t) {
        let n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
            e in n && "function" == typeof n[e] && (0, B.GS)(n, e, function(t) {
                let n = {
                        mechanism: {
                            data: {
                                function: e,
                                handler: (0, H.qQ)(t)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    },
                    r = (0, B.sp)(t);
                return r && (n.mechanism.data.handler = (0, H.qQ)(r)), e$(t, n)
            })
        }), e.apply(this, t)
    }
}
let tp = () => ({
        name: "BrowserSession",
        setupOnce() {
            void 0 !== ej.document && ((0, k.J0)({
                ignoreDuration: !0
            }), (0, k.J5)(), to(({
                from: e,
                to: t
            }) => {
                void 0 !== e && e !== t && ((0, k.J0)({
                    ignoreDuration: !0
                }), (0, k.J5)())
            }))
        }
    }),
    tm = null;

function tg(e) {
    let t = "error";
    eW(t, e), eG(t, t_)
}

function t_() {
    tm = T.O.onerror, T.O.onerror = function(e, t, n, r, i) {
        return eJ("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
        }), !!tm && tm.apply(this, arguments)
    }, T.O.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let ty = null;

function tv(e) {
    let t = "unhandledrejection";
    eW(t, e), eG(t, tb)
}

function tb() {
    ty = T.O.onunhandledrejection, T.O.onunhandledrejection = function(e) {
        return eJ("unhandledrejection", e), !ty || ty.apply(this, arguments)
    }, T.O.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
let tE = (e = {}) => {
    let t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
    };
    return {
        name: "GlobalHandlers",
        setupOnce() {
            Error.stackTraceLimit = 50
        },
        setup(e) {
            var n, r;
            t.onerror && (n = e, tg(e => {
                let {
                    stackParser: t,
                    attachStacktrace: r
                } = tT();
                if ((0, $.KU)() !== n || eF > 0) return;
                let {
                    msg: i,
                    url: s,
                    line: o,
                    column: a,
                    error: l
                } = e, c = function(e, t, n, r) {
                    let i = e.exception = e.exception || {},
                        s = i.values = i.values || [],
                        o = s[0] = s[0] || {},
                        a = o.stacktrace = o.stacktrace || {},
                        l = a.frames = a.frames || [],
                        c = (0, ec.Kg)(t) && t.length > 0 ? t : (0, eU.$N)();
                    return 0 === l.length && l.push({
                        colno: r,
                        filename: c,
                        function: H.yF,
                        in_app: !0,
                        lineno: n
                    }), e
                }(eM(t, l || i, void 0, r, !1), s, o, a);
                c.level = "error", (0, k.r)(c, {
                    originalException: l,
                    mechanism: {
                        handled: !1,
                        type: "onerror"
                    }
                })
            })), t.onunhandledrejection && (r = e, tv(e => {
                var t;
                let {
                    stackParser: n,
                    attachStacktrace: i
                } = tT();
                if ((0, $.KU)() !== r || eF > 0) return;
                let s = function(e) {
                        if ((0, ec.sO)(e)) return e;
                        try {
                            if ("reason" in e) return e.reason;
                            if ("detail" in e && "reason" in e.detail) return e.detail.reason
                        } catch {}
                        return e
                    }(e),
                    o = (0, ec.sO)(s) ? (t = s, {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: `Non-Error promise rejection captured with value: ${String(t)}`
                            }]
                        }
                    }) : eM(n, s, void 0, i, !0);
                o.level = "error", (0, k.r)(o, {
                    originalException: s,
                    mechanism: {
                        handled: !1,
                        type: "onunhandledrejection"
                    }
                })
            }))
        }
    }
};

function tS(e) {}

function tT() {
    let e = (0, $.KU)();
    return e ? .getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
let tw = () => ({
    name: "HttpContext",
    preprocessEvent(e) {
        if (!ej.navigator && !ej.location && !ej.document) return;
        let t = eB(),
            n = { ...t.headers,
                ...e.request ? .headers
            };
        e.request = { ...t,
            ...e.request,
            headers: n
        }
    }
});

function tO(e, t) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    }, e.mechanism = { ...e.mechanism,
        ..."AggregateError" === e.type && {
            is_exception_group: !0
        },
        exception_id: t
    }
}

function tC(e, t, n, r) {
    e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
    }, e.mechanism = { ...e.mechanism,
        type: "chained",
        source: t,
        exception_id: n,
        parent_id: r
    }
}
let tk = (e = {}) => {
    let t = e.limit || 5,
        n = e.key || "cause";
    return {
        name: "LinkedErrors",
        preprocessEvent(e, r, i) {
            ! function(e, t, n, r, i, s) {
                if (!i.exception ? .values || !s || !(0, ec.tH)(s.originalException, Error)) return;
                let o = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
                o && (i.exception.values = function e(t, n, r, i, s, o, a, l) {
                    if (o.length >= r + 1) return o;
                    let c = [...o];
                    if ((0, ec.tH)(i[s], Error)) {
                        tO(a, l);
                        let o = t(n, i[s]),
                            u = c.length;
                        tC(o, s, u, l), c = e(t, n, r, i[s], s, [o, ...c], o, u)
                    }
                    return Array.isArray(i.errors) && i.errors.forEach((i, o) => {
                        if ((0, ec.tH)(i, Error)) {
                            tO(a, l);
                            let u = t(n, i),
                                d = c.length;
                            tC(u, `errors[${o}]`, d, l), c = e(t, n, r, i, s, [u, ...c], u, d)
                        }
                    }), c
                }(e, t, r, s.originalException, n, i.exception.values, o, 0))
            }(eN, i.getOptions().stackParser, n, t, e, r)
        }
    }
};

function tR(e, t, n, r) {
    let i = {
        filename: e,
        function: "<anonymous>" === t ? H.yF : t,
        in_app: !0
    };
    return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
}
let tI = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    tN = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    tA = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    tx = [30, e => {
        let t = tI.exec(e);
        if (t) {
            let [, e, n, r] = t;
            return tR(e, H.yF, +n, +r)
        }
        let n = tN.exec(e);
        if (n) {
            if (n[2] && 0 === n[2].indexOf("eval")) {
                let e = tA.exec(n[2]);
                e && (n[2] = e[1], n[3] = e[2], n[4] = e[3])
            }
            let [e, t] = tU(n[1] || H.yF, n[2]);
            return tR(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
        }
    }],
    tP = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    tD = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    tM = [50, e => {
        let t = tP.exec(e);
        if (t) {
            if (t[3] && t[3].indexOf(" > eval") > -1) {
                let e = tD.exec(t[3]);
                e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
            }
            let e = t[3],
                n = t[1] || H.yF;
            return [n, e] = tU(n, e), tR(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        }
    }],
    tL = (0, H.gd)(tx, tM),
    tU = (e, t) => {
        let n = -1 !== e.indexOf("safari-extension"),
            r = -1 !== e.indexOf("safari-web-extension");
        return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : H.yF, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
    },
    tj = Symbol.for("SentryBufferFullError");

function tF(e, t, n = Date.now()) {
    return (e[t] || e.all || 0) > n
}

function t$(e, {
    statusCode: t,
    headers: n
}, r = Date.now()) {
    let i = { ...e
        },
        s = n ? .["x-sentry-rate-limits"],
        o = n ? .["retry-after"];
    if (s)
        for (let e of s.trim().split(",")) {
            let [t, n, , , s] = e.split(":", 5), o = parseInt(t, 10), a = (isNaN(o) ? 60 : o) * 1e3;
            if (n)
                for (let e of n.split(";")) "metric_bucket" === e ? (!s || s.split(";").includes("custom")) && (i[e] = r + a) : i[e] = r + a;
            else i.all = r + a
        } else o ? i.all = r + function(e, t = Date.now()) {
            let n = parseInt(`${e}`, 10);
            if (!isNaN(n)) return 1e3 * n;
            let r = Date.parse(`${e}`);
            return isNaN(r) ? 6e4 : r - t
        }(o, r) : 429 === t && (i.all = r + 6e4);
    return i
}
let tB = {};

function tq(e) {
    let t = tB[e];
    if (t) return t;
    let n = e7[e];
    if (eX(n)) return tB[e] = n.bind(e7);
    let r = e7.document;
    if (r && "function" == typeof r.createElement) try {
        let t = r.createElement("iframe");
        t.hidden = !0, r.head.appendChild(t);
        let i = t.contentWindow;
        i ? .[e] && (n = i[e]), r.head.removeChild(t)
    } catch (e) {}
    return n ? tB[e] = n.bind(e7) : n
}

function tz(...e) {
    return tq("setTimeout")(...e)
}

function tH(e, t = tq("fetch")) {
    let n = 0,
        r = 0;
    return function(e, t, n = function(e) {
        let t = [];

        function n(e) {
            return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0)
        }
        return {
            $: t,
            add: function(r) {
                if (!(void 0 === e || t.length < e)) return (0, ef.xg)(tj);
                let i = r();
                return -1 === t.indexOf(i) && t.push(i), i.then(() => n(i)).then(null, () => n(i).then(null, () => {})), i
            },
            drain: function(e) {
                return new ef.T2((n, r) => {
                    let i = t.length;
                    if (!i) return n(!0);
                    let s = setTimeout(() => {
                        e && e > 0 && n(!1)
                    }, e);
                    t.forEach(e => {
                        (0, ef.XW)(e).then(() => {
                            --i || (clearTimeout(s), n(!0))
                        }, r)
                    })
                })
            }
        }
    }(e.bufferSize || 64)) {
        let r = {};
        return {
            send: function(i) {
                let s = [];
                if (et(i, (t, n) => {
                        let i = er[n];
                        tF(r, i) ? e.recordDroppedEvent("ratelimit_backoff", i) : s.push(t)
                    }), 0 === s.length) return (0, ef.XW)({});
                let o = ee(i[0], s),
                    a = t => {
                        et(o, (n, r) => {
                            e.recordDroppedEvent(t, er[r])
                        })
                    };
                return n.add(() => t({
                    body: function(e) {
                        let [t, n] = e, r = JSON.stringify(t);

                        function i(e) {
                            "string" == typeof r ? r = "string" == typeof e ? r + e : [en(r), e] : r.push("string" == typeof e ? en(e) : e)
                        }
                        for (let e of n) {
                            let [t, n] = e;
                            if (i(`
${JSON.stringify(t)}
`), "string" == typeof n || n instanceof Uint8Array) i(n);
                            else {
                                let e;
                                try {
                                    e = JSON.stringify(n)
                                } catch (t) {
                                    e = JSON.stringify((0, Z.S8)(n))
                                }
                                i(e)
                            }
                        }
                        return "string" == typeof r ? r : function(e) {
                            let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                                n = 0;
                            for (let r of e) t.set(r, n), n += r.length;
                            return t
                        }(r)
                    }(o)
                }).then(e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && R.T && w.vF.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = t$(r, e), e), e => {
                    throw a("network_error"), R.T && w.vF.error("Encountered error running transport request:", e), e
                })).then(e => e, e => {
                    if (e === tj) return R.T && w.vF.error("Skipped sending event because buffer is full."), a("queue_overflow"), (0, ef.XW)({});
                    throw e
                })
            },
            flush: e => n.drain(e)
        }
    }(e, function(i) {
        let s = i.body.length;
        n += s, r++;
        let o = {
            body: i.body,
            method: "POST",
            referrerPolicy: "strict-origin",
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions
        };
        if (!t) return tB.fetch = void 0, (0, ef.xg)("No fetch implementation available");
        try {
            return t(e.url, o).then(e => (n -= s, r--, {
                statusCode: e.status,
                headers: {
                    "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": e.headers.get("Retry-After")
                }
            }))
        } catch (e) {
            return tB.fetch = void 0, n -= s, r--, (0, ef.xg)(e)
        }
    })
}

function tW(e) {
    return [U(), z(), tu(), tl(), tE(), tk(), W(), tw(), tp()]
}
var tG = n(50148),
    tJ = n(27157),
    tV = n(97405),
    tK = n(10620),
    tX = n(64940);
class tQ {
    constructor(e = {}) {
        this._traceId = e.traceId || (0, tX.e)(), this._spanId = e.spanId || (0, tX.Z)()
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: eo.CC
        }
    }
    end(e) {}
    setAttribute(e, t) {
        return this
    }
    setAttributes(e) {
        return this
    }
    setStatus(e) {
        return this
    }
    updateName(e) {
        return this
    }
    isRecording() {
        return !1
    }
    addEvent(e, t, n) {
        return this
    }
    addLink(e) {
        return this
    }
    addLinks(e) {
        return this
    }
    recordException(e, t) {}
}
var tY = n(71002),
    tZ = n(7996);

function t0(e) {
    if (!e || 0 === e.length) return;
    let t = {};
    return e.forEach(e => {
        let n = e.attributes || {},
            r = n[ep.Sn],
            i = n[ep.xc];
        "string" == typeof r && "number" == typeof i && (t[e.name] = {
            value: i,
            unit: r
        })
    }), t
}
var t1 = n(89045);
class t2 {
    constructor(e = {}) {
        this._traceId = e.traceId || (0, tX.e)(), this._spanId = e.spanId || (0, tX.Z)(), this._startTime = e.startTimestamp || (0, el.zf)(), this._links = e.links, this._attributes = {}, this.setAttributes({
            [ep.JD]: "manual",
            [ep.uT]: e.op,
            ...e.attributes
        }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
    }
    addLink(e) {
        return this._links ? this._links.push(e) : this._links = [e], this
    }
    addLinks(e) {
        return this._links ? this._links.push(...e) : this._links = e, this
    }
    recordException(e, t) {}
    spanContext() {
        let {
            _spanId: e,
            _traceId: t,
            _sampled: n
        } = this;
        return {
            spanId: e,
            traceId: t,
            traceFlags: n ? eo.aO : eo.CC
        }
    }
    setAttribute(e, t) {
        return void 0 === t ? delete this._attributes[e] : this._attributes[e] = t, this
    }
    setAttributes(e) {
        return Object.keys(e).forEach(t => this.setAttribute(t, e[t])), this
    }
    updateStartTime(e) {
        this._startTime = (0, eo.cI)(e)
    }
    setStatus(e) {
        return this._status = e, this
    }
    updateName(e) {
        return this._name = e, this.setAttribute(ep.i_, "custom"), this
    }
    end(e) {
        this._endTime || (this._endTime = (0, eo.cI)(e), function(e) {
            if (!R.T) return;
            let {
                description: t = "< unknown name >",
                op: n = "< unknown op >"
            } = (0, eo.et)(e), {
                spanId: r
            } = e.spanContext(), i = (0, eo.zU)(e) === e, s = `[Tracing] Finishing "${n}" ${i?"root ":""}span "${t}" with ID ${r}`;
            w.vF.log(s)
        }(this), this._onSpanEnded())
    }
    getSpanJSON() {
        return {
            data: this._attributes,
            description: this._name,
            op: this._attributes[ep.uT],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: (0, eo.yW)(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[ep.JD],
            profile_id: this._attributes[ep.E1],
            exclusive_time: this._attributes[ep.jG],
            measurements: t0(this._events),
            is_segment: this._isStandaloneSpan && (0, eo.zU)(this) === this || void 0,
            segment_id: this._isStandaloneSpan ? (0, eo.zU)(this).spanContext().spanId : void 0,
            links: (0, eo.uU)(this._links)
        }
    }
    isRecording() {
        return !this._endTime && !!this._sampled
    }
    addEvent(e, t, n) {
        R.T && w.vF.log("[Tracing] Adding an event to span:", e);
        let r = t5(t) ? t : n || (0, el.zf)(),
            i = t5(t) ? {} : t || {},
            s = {
                name: e,
                time: (0, eo.cI)(r),
                attributes: i
            };
        return this._events.push(s), this
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan
    }
    _onSpanEnded() {
        let e = (0, $.KU)();
        if (e && e.emit("spanEnd", this), !(this._isStandaloneSpan || this === (0, eo.zU)(this))) return;
        if (this._isStandaloneSpan) return void(this._sampled ? function(e) {
            let t = (0, $.KU)();
            if (!t) return;
            let n = e[1];
            if (!n || 0 === n.length) return t.recordDroppedEvent("before_send", "span");
            t.sendEnvelope(e)
        }(function(e, t) {
            let n = (0, X.k1)(e[0]),
                r = t ? .getDsn(),
                i = t ? .getOptions().tunnel,
                s = {
                    sent_at: new Date().toISOString(),
                    ...!!n.trace_id && !!n.public_key && {
                        trace: n
                    },
                    ...!!i && r && {
                        dsn: (0, Q.SB)(r)
                    }
                },
                o = t ? .getOptions().beforeSendSpan,
                a = o ? e => {
                    let t = (0, eo.et)(e),
                        n = o(t);
                    return n || ((0, eo.xl)(), t)
                } : eo.et,
                l = [];
            for (let t of e) {
                let e = a(t);
                e && l.push([{
                    type: "span"
                }, e])
            }
            return ee(s, l)
        }([this], e)) : (R.T && w.vF.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span")));
        let t = this._convertSpanToTransaction();
        t && ((0, t1.L)(this).scope || (0, $.o5)()).captureEvent(t)
    }
    _convertSpanToTransaction() {
        if (!t3((0, eo.et)(this))) return;
        this._name || (R.T && w.vF.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
        let {
            scope: e,
            isolationScope: t
        } = (0, t1.L)(this), n = e ? .getScopeData().sdkProcessingMetadata ? .normalizedRequest;
        if (!0 !== this._sampled) return;
        let r = (0, eo.xO)(this).filter(e => {
                var t;
                return e !== this && !((t = e) instanceof t2 && t.isStandaloneSpan())
            }).map(e => (0, eo.et)(e)).filter(t3),
            i = this._attributes[ep.i_];
        delete this._attributes[ep.Le], r.forEach(e => {
            delete e.data[ep.Le]
        });
        let s = {
                contexts: {
                    trace: (0, eo.Ck)(this)
                },
                spans: r.length > 1e3 ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3) : r,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                    capturedSpanScope: e,
                    capturedSpanIsolationScope: t,
                    dynamicSamplingContext: (0, X.k1)(this)
                },
                request: n,
                ...i && {
                    transaction_info: {
                        source: i
                    }
                }
            },
            o = t0(this._events);
        return o && Object.keys(o).length && (R.T && w.vF.log("[Measurements] Adding measurements to transaction event", JSON.stringify(o, void 0, 2)), s.measurements = o), s
    }
}

function t5(e) {
    return e && "number" == typeof e || e instanceof Date || Array.isArray(e)
}

function t3(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}
let t4 = "__SENTRY_SUPPRESS_TRACING__";

function t6(e) {
    let t = ne();
    if (t.startInactiveSpan) return t.startInactiveSpan(e);
    let n = t7(e),
        {
            forceTransaction: r,
            parentSpan: i
        } = e;
    return (e.scope ? t => (0, $.v4)(e.scope, t) : void 0 !== i ? e => t8(i, e) : e => e())(() => {
        let t = (0, $.o5)(),
            s = nn(t, i);
        return e.onlyIfParent && !s ? new tQ : t9({
            parentSpan: s,
            spanArguments: n,
            forceTransaction: r,
            scope: t
        })
    })
}

function t8(e, t) {
    let n = ne();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : (0, $.v4)(n => ((0, tK.r)(n, e || void 0), t(n)))
}

function t9({
    parentSpan: e,
    spanArguments: t,
    forceTransaction: n,
    scope: r
}) {
    let i;
    if (!(0, tV.f)()) {
        let r = new tQ;
        if (n || !e) {
            let e = {
                sampled: "false",
                sample_rate: "0",
                transaction: t.name,
                ...(0, X.k1)(r)
            };
            (0, X.LZ)(r, e)
        }
        return r
    }
    let s = (0, $.rm)();
    if (e && !n) i = function(e, t, n) {
        let {
            spanId: r,
            traceId: i
        } = e.spanContext(), s = !t.getScopeData().sdkProcessingMetadata[t4] && (0, eo.pK)(e), o = s ? new t2({ ...n,
            parentSpanId: r,
            traceId: i,
            sampled: s
        }) : new tQ({
            traceId: i
        });
        (0, eo.Hu)(e, o);
        let a = (0, $.KU)();
        return a && (a.emit("spanStart", o), n.endTimestamp && a.emit("spanEnd", o)), o
    }(e, r, t), (0, eo.Hu)(e, i);
    else if (e) {
        let n = (0, X.k1)(e),
            {
                traceId: s,
                spanId: o
            } = e.spanContext(),
            a = (0, eo.pK)(e);
        i = nt({
            traceId: s,
            parentSpanId: o,
            ...t
        }, r, a), (0, X.LZ)(i, n)
    } else {
        let {
            traceId: e,
            dsc: n,
            parentSpanId: o,
            sampled: a
        } = { ...s.getPropagationContext(),
            ...r.getPropagationContext()
        };
        i = nt({
            traceId: e,
            parentSpanId: o,
            ...t
        }, r, a), n && (0, X.LZ)(i, n)
    }
    return ! function(e) {
        if (!R.T) return;
        let {
            description: t = "< unknown name >",
            op: n = "< unknown op >",
            parent_span_id: r
        } = (0, eo.et)(e), {
            spanId: i
        } = e.spanContext(), s = (0, eo.pK)(e), o = (0, eo.zU)(e), a = o === e, l = `[Tracing] Starting ${s?"sampled":"unsampled"} ${a?"root ":""}span`, c = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
        if (r && c.push(`parent ID: ${r}`), !a) {
            let {
                op: e,
                description: t
            } = (0, eo.et)(o);
            c.push(`root ID: ${o.spanContext().spanId}`), e && c.push(`root op: ${e}`), t && c.push(`root description: ${t}`)
        }
        w.vF.log(`${l}
  ${c.join("\n  ")}`)
    }(i), (0, t1.d)(i, r, s), i
}

function t7(e) {
    let t = {
        isStandalone: (e.experimental || {}).standalone,
        ...e
    };
    if (e.startTime) {
        let n = { ...t
        };
        return n.startTimestamp = (0, eo.cI)(e.startTime), delete n.startTime, n
    }
    return t
}

function ne() {
    let e = (0, Y.EU)();
    return (0, tZ.h)(e)
}

function nt(e, t, n) {
    let r = (0, $.KU)(),
        i = r ? .getOptions() || {},
        {
            name: s = ""
        } = e,
        o = {
            spanAttributes: { ...e.attributes
            },
            spanName: s,
            parentSampled: n
        };
    r ? .emit("beforeSampling", o, {
        decision: !1
    });
    let a = o.parentSampled ? ? n,
        l = o.spanAttributes,
        c = t.getPropagationContext(),
        [u, d, h] = t.getScopeData().sdkProcessingMetadata[t4] ? [!1] : function(e, t, n) {
            let r, i;
            if (!(0, tV.f)(e)) return [!1];
            "function" == typeof e.tracesSampler ? (r = e.tracesSampler({ ...t,
                inheritOrSampleWith: e => "number" == typeof t.parentSampleRate ? t.parentSampleRate : "boolean" == typeof t.parentSampled ? Number(t.parentSampled) : e
            }), i = !0) : void 0 !== t.parentSampled ? r = t.parentSampled : void 0 !== e.tracesSampleRate && (r = e.tracesSampleRate, i = !0);
            let s = (0, ed.i)(r);
            if (void 0 === s) return R.T && w.vF.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`), [!1];
            if (!s) return R.T && w.vF.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, s, i];
            let o = n < s;
            return !o && R.T && w.vF.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), [o, s, i]
        }(i, {
            name: s,
            parentSampled: a,
            attributes: l,
            parentSampleRate: (0, ed.i)(c.dsc ? .sample_rate)
        }, c.sampleRand),
        f = new t2({ ...e,
            attributes: {
                [ep.i_]: "custom",
                [ep.sy]: void 0 !== d && h ? d : void 0,
                ...l
            },
            sampled: u
        });
    return !u && r && (R.T && w.vF.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), r.recordDroppedEvent("sample_rate", "transaction")), r && r.emit("spanStart", f), f
}

function nn(e, t) {
    if (t) return t;
    if (null === t) return;
    let n = (0, tK.f)(e);
    if (!n) return;
    let r = (0, $.KU)();
    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, eo.zU)(n) : n
}
let nr = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    childSpanTimeout: 15e3
};

function ni(e, t = {}) {
    let n, r = new Map,
        i = !1,
        s = "externalFinish",
        o = !t.disableAutoFinish,
        a = [],
        {
            idleTimeout: l = nr.idleTimeout,
            finalTimeout: c = nr.finalTimeout,
            childSpanTimeout: u = nr.childSpanTimeout,
            beforeSpanEnd: d
        } = t,
        h = (0, $.KU)();
    if (!h || !(0, tV.f)()) {
        let e = new tQ,
            t = {
                sample_rate: "0",
                sampled: "false",
                ...(0, X.k1)(e)
            };
        return (0, X.LZ)(e, t), e
    }
    let f = (0, $.o5)(),
        p = (0, eo.Bk)(),
        m = function(e) {
            let t = t6(e);
            return (0, tK.r)((0, $.o5)(), t), R.T && w.vF.log("[Tracing] Started span is an idle span"), t
        }(e);

    function g() {
        n && (clearTimeout(n), n = void 0)
    }

    function _(e) {
        g(), n = setTimeout(() => {
            !i && 0 === r.size && o && (s = "idleTimeout", m.end(e))
        }, l)
    }

    function y(e) {
        n = setTimeout(() => {
            !i && o && (s = "heartbeatFailed", m.end(e))
        }, u)
    }

    function v(e) {
        i = !0, r.clear(), a.forEach(e => e()), (0, tK.r)(f, p);
        let t = (0, eo.et)(m),
            {
                start_timestamp: n
            } = t;
        if (!n) return;
        t.data[ep.fs] || m.setAttribute(ep.fs, s), w.vF.log(`[Tracing] Idle span "${t.op}" finished`);
        let o = (0, eo.xO)(m).filter(e => e !== m),
            u = 0;
        o.forEach(t => {
            t.isRecording() && (t.setStatus({
                code: tY.TJ,
                message: "cancelled"
            }), t.end(e), R.T && w.vF.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
            let {
                timestamp: n = 0,
                start_timestamp: r = 0
            } = (0, eo.et)(t), i = r <= e, s = n - r <= (c + l) / 1e3;
            if (R.T) {
                let e = JSON.stringify(t, void 0, 2);
                i ? s || w.vF.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : w.vF.log("[Tracing] Discarding span since it happened after idle span was finished", e)
            }(!s || !i) && ((0, eo.VS)(m, t), u++)
        }), u > 0 && m.setAttribute("sentry.idle_span_discarded_spans", u)
    }
    return m.end = new Proxy(m.end, {
        apply(e, t, n) {
            if (d && d(m), t instanceof tQ) return;
            let [r, ...i] = n, s = r || (0, el.zf)(), o = (0, eo.cI)(s), a = (0, eo.xO)(m).filter(e => e !== m);
            if (!a.length) return v(o), Reflect.apply(e, t, [o, ...i]);
            let l = a.map(e => (0, eo.et)(e).timestamp).filter(e => !!e),
                u = l.length ? Math.max(...l) : void 0,
                h = (0, eo.et)(m).start_timestamp,
                f = Math.min(h ? h + c / 1e3 : 1 / 0, Math.max(h || -1 / 0, Math.min(o, u || 1 / 0)));
            return v(f), Reflect.apply(e, t, [f, ...i])
        }
    }), a.push(h.on("spanStart", e => {
        var t;
        i || e === m || (0, eo.et)(e).timestamp || (0, eo.xO)(m).includes(e) && (t = e.spanContext().spanId, g(), r.set(t, !0), y((0, el.zf)() + u / 1e3))
    })), a.push(h.on("spanEnd", e => {
        if (!i) {
            var t;
            t = e.spanContext().spanId, r.has(t) && r.delete(t), 0 === r.size && _((0, el.zf)() + l / 1e3)
        }
    })), a.push(h.on("idleSpanEnableAutoFinish", e => {
        e === m && (o = !0, _(), r.size && y())
    })), t.disableAutoFinish || _(), setTimeout(() => {
        i || (m.setStatus({
            code: tY.TJ,
            message: "deadline_exceeded"
        }), s = "finalTimeout", m.end())
    }, c), m
}
let ns = !1;

function no() {
    let e = (0, eo.Bk)(),
        t = e && (0, eo.zU)(e);
    if (t) {
        let e = "internal_error";
        R.T && w.vF.log(`[Tracing] Root span: ${e} -> Global error occurred`), t.setStatus({
            code: tY.TJ,
            message: e
        })
    }
}
no.tag = "sentry_tracingErrorCallback";
var na = n(15993);
let nl = (e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good",
    nc = (e, t, n, r) => {
        let i, s;
        return o => {
            t.value >= 0 && (o || r) && ((s = t.value - (i ? ? 0)) || void 0 === i) && (i = t.value, t.delta = s, t.rating = nl(t.value, n), e(t))
        }
    },
    nu = () => `v5-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,
    nd = (e = !0) => {
        let t = e7.performance ? .getEntriesByType ? .("navigation")[0];
        if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
    },
    nh = () => {
        let e = nd();
        return e ? .activationStart ? ? 0
    },
    nf = (e, t = -1) => {
        let n = nd(),
            r = "navigate";
        return n && (e7.document ? .prerendering || nh() > 0 ? r = "prerender" : e7.document ? .wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
            name: e,
            value: t,
            rating: "good",
            delta: 0,
            entries: [],
            id: nu(),
            navigationType: r
        }
    },
    np = new WeakMap;

function nm(e, t) {
    return np.get(e) || np.set(e, new t), np.get(e)
}
class ng {
    constructor() {
        ng.prototype.__init.call(this), ng.prototype.__init2.call(this)
    }
    __init() {
        this._sessionValue = 0
    }
    __init2() {
        this._sessionEntries = []
    }
    _processEntry(e) {
        if (e.hadRecentInput) return;
        let t = this._sessionEntries[0],
            n = this._sessionEntries[this._sessionEntries.length - 1];
        this._sessionValue && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), this._onAfterProcessingUnexpectedShift ? .(e)
    }
}
let n_ = (e, t, n = {}) => {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                let r = new PerformanceObserver(e => {
                    Promise.resolve().then(() => {
                        t(e.getEntries())
                    })
                });
                return r.observe({
                    type: e,
                    buffered: !0,
                    ...n
                }), r
            }
        } catch {}
    },
    ny = e => {
        let t = !1;
        return () => {
            t || (e(), t = !0)
        }
    },
    nv = -1,
    nb = () => e7.document ? .visibilityState !== "hidden" || e7.document ? .prerendering ? 1 / 0 : 0,
    nE = e => {
        "hidden" === e7.document.visibilityState && nv > -1 && (nv = "visibilitychange" === e.type ? e.timeStamp : 0, nT())
    },
    nS = () => {
        addEventListener("visibilitychange", nE, !0), addEventListener("prerenderingchange", nE, !0)
    },
    nT = () => {
        removeEventListener("visibilitychange", nE, !0), removeEventListener("prerenderingchange", nE, !0)
    },
    nw = () => {
        if (e7.document && nv < 0) {
            let e = nh();
            nv = (e7.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(t => "hidden" === t.name && t.startTime > e)[0] ? .startTime) ? ? nb(), nS()
        }
        return {
            get firstHiddenTime() {
                return nv
            }
        }
    },
    nO = e => {
        e7.document ? .prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
    },
    nC = [1800, 3e3],
    nk = (e, t = {}) => {
        nO(() => {
            let n, r = nw(),
                i = nf("FCP"),
                s = n_("paint", e => {
                    for (let t of e) "first-contentful-paint" === t.name && (s.disconnect(), t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - nh(), 0), i.entries.push(t), n(!0)))
                });
            s && (n = nc(e, i, nC, t.reportAllChanges))
        })
    },
    nR = [.1, .25],
    nI = (e, t = {}) => {
        nk(ny(() => {
            let n, r = nf("CLS", 0),
                i = nm(t, ng),
                s = e => {
                    for (let t of e) i._processEntry(t);
                    i._sessionValue > r.value && (r.value = i._sessionValue, r.entries = i._sessionEntries, n())
                },
                o = n_("layout-shift", s);
            o && (n = nc(e, r, nR, t.reportAllChanges), e7.document ? .addEventListener("visibilitychange", () => {
                e7.document ? .visibilityState === "hidden" && (s(o.takeRecords()), n(!0))
            }), e7 ? .setTimeout ? .(n))
        }))
    },
    nN = e => {
        let t = t => {
            ("pagehide" === t.type || e7.document ? .visibilityState === "hidden") && e(t)
        };
        e7.document && (addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0))
    },
    nA = [100, 300],
    nx = (e, t = {}) => {
        nO(() => {
            let n, r = nw(),
                i = nf("FID"),
                s = e => {
                    e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), n(!0))
                },
                o = e => {
                    e.forEach(s)
                },
                a = n_("first-input", o);
            n = nc(e, i, nA, t.reportAllChanges), a && nN(ny(() => {
                o(a.takeRecords()), a.disconnect()
            }))
        })
    },
    nP = 0,
    nD = 1 / 0,
    nM = 0,
    nL = e => {
        e.forEach(e => {
            e.interactionId && (nD = Math.min(nD, e.interactionId), nP = (nM = Math.max(nM, e.interactionId)) ? (nM - nD) / 7 + 1 : 0)
        })
    },
    nU = () => l ? nP : performance.interactionCount || 0,
    nj = () => {
        "interactionCount" in performance || l || (l = n_("event", nL, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }))
    },
    nF = 0,
    n$ = () => nU() - nF;
class nB {
    constructor() {
        nB.prototype.__init.call(this), nB.prototype.__init2.call(this)
    }
    __init() {
        this._longestInteractionList = []
    }
    __init2() {
        this._longestInteractionMap = new Map
    }
    _resetInteractions() {
        nF = nU(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear()
    }
    _estimateP98LongestInteraction() {
        let e = Math.min(this._longestInteractionList.length - 1, Math.floor(n$() / 50));
        return this._longestInteractionList[e]
    }
    _processEntry(e) {
        if (this._onBeforeProcessingEntry ? .(e), !(e.interactionId || "first-input" === e.entryType)) return;
        let t = this._longestInteractionList.at(-1),
            n = this._longestInteractionMap.get(e.interactionId);
        if (n || this._longestInteractionList.length < 10 || e.duration > t._latency) {
            if (n ? e.duration > n._latency ? (n.entries = [e], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                    id: e.interactionId,
                    entries: [e],
                    _latency: e.duration
                }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort((e, t) => t._latency - e._latency), this._longestInteractionList.length > 10)
                for (let e of this._longestInteractionList.splice(10)) this._longestInteractionMap.delete(e.id);
            this._onAfterProcessingINPCandidate ? .(n)
        }
    }
}
let nq = e => {
        let t = e7.requestIdleCallback || e7.setTimeout;
        e7.document ? .visibilityState === "hidden" ? e() : (t(e = ny(e)), nN(e))
    },
    nz = [200, 500],
    nH = (e, t = {}) => {
        globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && nO(() => {
            let n;
            nj();
            let r = nf("INP"),
                i = nm(t, nB),
                s = e => {
                    nq(() => {
                        for (let t of e) i._processEntry(t);
                        let t = i._estimateP98LongestInteraction();
                        t && t._latency !== r.value && (r.value = t._latency, r.entries = t.entries, n())
                    })
                },
                o = n_("event", s, {
                    durationThreshold: t.durationThreshold ? ? 40
                });
            n = nc(e, r, nz, t.reportAllChanges), o && (o.observe({
                type: "first-input",
                buffered: !0
            }), nN(() => {
                s(o.takeRecords()), n(!0)
            }))
        })
    };
class nW {
    _processEntry(e) {
        this._onBeforeProcessingEntry ? .(e)
    }
}
let nG = [2500, 4e3],
    nJ = (e, t = {}) => {
        nO(() => {
            let n, r = nw(),
                i = nf("LCP"),
                s = nm(t, nW),
                o = e => {
                    for (let o of (t.reportAllChanges || (e = e.slice(-1)), e)) s._processEntry(o), o.startTime < r.firstHiddenTime && (i.value = Math.max(o.startTime - nh(), 0), i.entries = [o], n())
                },
                a = n_("largest-contentful-paint", o);
            if (a) {
                n = nc(e, i, nG, t.reportAllChanges);
                let r = ny(() => {
                    o(a.takeRecords()), a.disconnect(), n(!0)
                });
                for (let e of ["keydown", "click", "visibilitychange"]) e7.document && addEventListener(e, () => nq(r), {
                    capture: !0,
                    once: !0
                })
            }
        })
    },
    nV = [800, 1800],
    nK = e => {
        e7.document ? .prerendering ? nO(() => nK(e)) : e7.document ? .readyState !== "complete" ? addEventListener("load", () => nK(e), !0) : setTimeout(e)
    },
    nX = (e, t = {}) => {
        let n = nf("TTFB"),
            r = nc(e, n, nV, t.reportAllChanges);
        nK(() => {
            let e = nd();
            e && (n.value = Math.max(e.responseStart - nh(), 0), n.entries = [e], r(!0))
        })
    },
    nQ = {},
    nY = {};

function nZ(e, t = !1) {
    return re("cls", e, n4, c, t)
}

function n0(e, t = !1) {
    return re("lcp", e, n8, d, t)
}

function n1(e) {
    return re("fid", e, n6, u)
}

function n2(e) {
    return re("inp", e, n7, f)
}

function n5(e, t) {
    return rt(e, t), nY[e] || (function(e) {
        let t = {};
        "event" === e && (t.durationThreshold = 0), n_(e, t => {
            n3(e, {
                entries: t
            })
        }, t)
    }(e), nY[e] = !0), rn(e, t)
}

function n3(e, t) {
    let n = nQ[e];
    if (n ? .length)
        for (let e of n) try {
            e(t)
        } catch (e) {}
}

function n4() {
    return nI(e => {
        n3("cls", {
            metric: e
        }), c = e
    }, {
        reportAllChanges: !0
    })
}

function n6() {
    return nx(e => {
        n3("fid", {
            metric: e
        }), u = e
    })
}

function n8() {
    return nJ(e => {
        n3("lcp", {
            metric: e
        }), d = e
    }, {
        reportAllChanges: !0
    })
}

function n9() {
    return nX(e => {
        n3("ttfb", {
            metric: e
        }), h = e
    })
}

function n7() {
    return nH(e => {
        n3("inp", {
            metric: e
        }), f = e
    })
}

function re(e, t, n, r, i = !1) {
    let s;
    return rt(e, t), nY[e] || (s = n(), nY[e] = !0), r && t({
        metric: r
    }), rn(e, t, i ? s : void 0)
}

function rt(e, t) {
    nQ[e] = nQ[e] || [], nQ[e].push(t)
}

function rn(e, t, n) {
    return () => {
        n && n();
        let r = nQ[e];
        if (!r) return;
        let i = r.indexOf(t); - 1 !== i && r.splice(i, 1)
    }
}

function rr(e) {
    return "number" == typeof e && isFinite(e)
}

function ri(e, t, n, { ...r
}) {
    let i = (0, eo.et)(e).start_timestamp;
    return i && i > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), t8(e, () => {
        let e = t6({
            startTime: t,
            ...r
        });
        return e && e.end(n), e
    })
}

function rs(e) {
    let t, n = (0, $.KU)();
    if (!n) return;
    let {
        name: r,
        transaction: i,
        attributes: s,
        startTime: o
    } = e, {
        release: a,
        environment: l,
        sendDefaultPii: c
    } = n.getOptions(), u = n.getIntegrationByName("Replay"), d = u ? .getReplayId(), h = (0, $.o5)(), f = h.getUser(), p = void 0 !== f ? f.email || f.id || f.ip_address : void 0;
    try {
        t = h.getScopeData().contexts.profile.profile_id
    } catch {}
    return t6({
        name: r,
        attributes: {
            release: a,
            environment: l,
            user: p || void 0,
            profile_id: t || void 0,
            replay_id: d || void 0,
            transaction: i,
            "user_agent.original": e7.navigator ? .userAgent,
            "client.address": c ? "{{auto}}" : void 0,
            ...s
        },
        startTime: o,
        experimental: {
            standalone: !0
        }
    })
}

function ro() {
    return e7.addEventListener && e7.performance
}

function ra(e) {
    return e / 1e3
}

function rl(e) {
    let t = "unknown",
        n = "unknown",
        r = "";
    for (let i of e) {
        if ("/" === i) {
            [t, n] = e.split("/");
            break
        }
        if (!isNaN(Number(i))) {
            t = "h" === r ? "http" : r, n = e.split(r)[1];
            break
        }
        r += i
    }
    return r === e && (t = r), {
        name: t,
        version: n
    }
}
let rc = 0,
    ru = {};

function rd(e, t, n, r, i = n) {
    var s;
    let o = t["secureConnection" === (s = n) ? "connectEnd" : "fetch" === s ? "domainLookupStart" : `${s}End`],
        a = t[`${n}Start`];
    a && o && ri(e, r + ra(a), r + ra(o), {
        op: `browser.${i}`,
        name: t.name,
        attributes: {
            [ep.JD]: "auto.ui.browser.metrics",
            ..."redirect" === n && null != t.redirectCount ? {
                "http.redirect_count": t.redirectCount
            } : {}
        }
    })
}

function rh(e, t, n, r) {
    let i = t[n];
    null != i && i < 0x7fffffff && (e[r] = i)
}
let rf = [],
    rp = new Map,
    rm = {
        click: "click",
        pointerdown: "click",
        pointerup: "click",
        mousedown: "click",
        mouseup: "click",
        touchstart: "click",
        touchend: "click",
        mouseover: "hover",
        mouseout: "hover",
        mouseenter: "hover",
        mouseleave: "hover",
        pointerover: "hover",
        pointerout: "hover",
        pointerenter: "hover",
        pointerleave: "hover",
        dragstart: "drag",
        dragend: "drag",
        drag: "drag",
        dragenter: "drag",
        dragleave: "drag",
        dragover: "drag",
        drop: "drag",
        keydown: "press",
        keyup: "press",
        keypress: "press",
        input: "press"
    },
    rg = ({
        metric: e
    }) => {
        if (void 0 == e.value) return;
        let t = ra(e.value);
        if (t > 60) return;
        let n = e.entries.find(t => t.duration === e.value && rm[t.name]);
        if (!n) return;
        let {
            interactionId: r
        } = n, i = rm[n.name], s = ra((0, el.k3)() + n.startTime), o = (0, eo.Bk)(), a = o ? (0, eo.zU)(o) : void 0, l = (null != r ? rp.get(r) : void 0) || a, c = l ? (0, eo.et)(l).description : (0, $.o5)().getScopeData().transactionName, u = rs({
            name: (0, eU.Hd)(n.target),
            transaction: c,
            attributes: {
                [ep.JD]: "auto.http.browser.inp",
                [ep.uT]: `ui.interaction.${i}`,
                [ep.jG]: n.duration
            },
            startTime: s
        });
        u && (u.addEvent("inp", {
            [ep.Sn]: "millisecond",
            [ep.xc]: e.value
        }), u.end(s + t))
    },
    r_ = ({
        entries: e
    }) => {
        let t = (0, eo.Bk)(),
            n = t ? (0, eo.zU)(t) : void 0,
            r = n ? (0, eo.et)(n).description : (0, $.o5)().getScopeData().transactionName;
        e.forEach(e => {
            if (!e.identifier) return;
            let t = e.name,
                n = e.renderTime,
                i = e.loadTime,
                [s, o] = i ? [ra(i), "load-time"] : n ? [ra(n), "render-time"] : [(0, el.zf)(), "entry-emission"],
                a = "image-paint" === t ? ra(Math.max(0, (n ? ? 0) - (i ? ? 0))) : 0,
                l = {
                    [ep.JD]: "auto.ui.browser.elementtiming",
                    [ep.uT]: "ui.elementtiming",
                    [ep.i_]: "component",
                    "sentry.span_start_time_source": o,
                    "sentry.transaction_name": r,
                    "element.id": e.id,
                    "element.type": e.element ? .tagName ? .toLowerCase() || "unknown",
                    "element.size": e.naturalWidth && e.naturalHeight ? `${e.naturalWidth}x${e.naturalHeight}` : void 0,
                    "element.render_time": n,
                    "element.load_time": i,
                    "element.url": e.url || void 0,
                    "element.identifier": e.identifier,
                    "element.paint_type": t
                };
            ! function(e, t) {
                let n = ne();
                if (n.startSpan) return n.startSpan(e, t);
                let r = t7(e),
                    {
                        forceTransaction: i,
                        parentSpan: s,
                        scope: o
                    } = e,
                    a = o ? .clone();
                (0, $.v4)(a, () => {
                    var n;
                    return (void 0 !== (n = s) ? e => t8(n, e) : e => e())(() => {
                        let n = (0, $.o5)(),
                            o = nn(n, s),
                            a = e.onlyIfParent && !o ? new tQ : t9({
                                parentSpan: o,
                                spanArguments: r,
                                forceTransaction: i,
                                scope: n
                            });
                        return (0, tK.r)(n, a),
                            function(e, t, n = () => {}) {
                                var r, i, s;
                                let o;
                                try {
                                    o = e()
                                } catch (e) {
                                    throw t(e), n(), e
                                }
                                return r = o, i = t, s = n, (0, ec.Qg)(r) ? r.then(e => (s(), e), e => {
                                    throw i(e), s(), e
                                }) : (s(), r)
                            }(() => t(a), () => {
                                let {
                                    status: e
                                } = (0, eo.et)(a);
                                a.isRecording() && (!e || "ok" === e) && a.setStatus({
                                    code: tY.TJ,
                                    message: "internal_error"
                                })
                            }, () => {
                                a.end()
                            })
                    })
                })
            }({
                name: `element[${e.identifier}]`,
                attributes: l,
                startTime: s,
                onlyIfParent: !0
            }, e => {
                e.end(s + a)
            })
        })
    },
    ry = "sentry_previous_trace";

function rv(e) {
    return 1 === e.traceFlags
}
var rb = n(98213);

function rE(e = {}) {
    let t = e.client || (0, $.KU)();
    if (!(0, k.Ol)() || !t) return {};
    let n = (0, Y.EU)(),
        r = (0, tZ.h)(n);
    if (r.getTraceData) return r.getTraceData(e);
    let i = e.scope || (0, $.o5)(),
        s = e.span || (0, eo.Bk)(),
        o = s ? (0, eo.Qh)(s) : function(e) {
            let {
                traceId: t,
                sampled: n,
                propagationSpanId: r
            } = e.getPropagationContext();
            return (0, na.TC)(t, r, n)
        }(i),
        a = s ? (0, X.k1)(s) : (0, X.ao)(t, i),
        l = (0, rb.De)(a);
    return na.MI.test(o) ? {
        "sentry-trace": o,
        baggage: l
    } : (w.vF.warn("Invalid sentry-trace data. Cannot generate trace data"), {})
}

function rS(e) {
    return e.split(",").some(e => e.trim().startsWith(rb.sv))
}
let rT = new WeakMap,
    rw = new Map,
    rO = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
        trackFetchStreamPerformance: !1
    };

function rC(e) {
    let {
        url: t
    } = (0, eo.et)(e).data;
    if (!t || "string" != typeof t) return;
    let n = n5("resource", ({
        entries: r
    }) => {
        r.forEach(r => {
            "resource" === r.entryType && "initiatorType" in r && "string" == typeof r.nextHopProtocol && ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(t) && ((function(e) {
                let {
                    name: t,
                    version: n
                } = rl(e.nextHopProtocol), r = [];
                return (r.push(["network.protocol.version", n], ["network.protocol.name", t]), (0, el.k3)()) ? [...r, ["http.request.redirect_start", rk(e.redirectStart)],
                    ["http.request.fetch_start", rk(e.fetchStart)],
                    ["http.request.domain_lookup_start", rk(e.domainLookupStart)],
                    ["http.request.domain_lookup_end", rk(e.domainLookupEnd)],
                    ["http.request.connect_start", rk(e.connectStart)],
                    ["http.request.secure_connection_start", rk(e.secureConnectionStart)],
                    ["http.request.connection_end", rk(e.connectEnd)],
                    ["http.request.request_start", rk(e.requestStart)],
                    ["http.request.response_start", rk(e.responseStart)],
                    ["http.request.response_end", rk(e.responseEnd)]
                ] : r
            })(r).forEach(t => e.setAttribute(...t)), setTimeout(n))
        })
    })
}

function rk(e = 0) {
    return (((0, el.k3)() || performance.timeOrigin) + e) / 1e3
}

function rR(e) {
    try {
        return new URL(e, ej.location.origin).href
    } catch {
        return
    }
}
let rI = { ...nr,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        enableElementTiming: !0,
        ignoreResourceSpans: [],
        ignorePerformanceApiSpans: [],
        linkPreviousTrace: "in-memory",
        consistentTraceSampling: !1,
        _experiments: {},
        ...rO
    },
    rN = (e = {}) => {
        let t, n = {
                name: void 0,
                source: void 0
            },
            r = ej.document,
            {
                enableInp: i,
                enableElementTiming: s,
                enableLongTask: o,
                enableLongAnimationFrame: a,
                _experiments: {
                    enableInteractions: l,
                    enableStandaloneClsSpans: c,
                    enableStandaloneLcpSpans: u
                },
                beforeStartSpan: d,
                idleTimeout: f,
                finalTimeout: g,
                childSpanTimeout: _,
                markBackgroundSpan: y,
                traceFetch: v,
                traceXHR: b,
                trackFetchStreamPerformance: E,
                shouldCreateSpanForRequest: S,
                enableHTTPTimings: O,
                ignoreResourceSpans: C,
                ignorePerformanceApiSpans: k,
                instrumentPageLoad: I,
                instrumentNavigation: N,
                linkPreviousTrace: A,
                consistentTraceSampling: x,
                onRequestSpanStart: P
            } = { ...rI,
                ...e
            };

        function M(e, i) {
            var s, o;
            let a = "pageload" === i.op,
                l = d ? d(i) : i,
                h = l.attributes || {};
            i.name !== l.name && (h[ep.i_] = "custom", l.attributes = h), n.name = l.name, n.source = h[ep.i_];
            let y = ni(l, {
                idleTimeout: f,
                finalTimeout: g,
                childSpanTimeout: _,
                disableAutoFinish: a,
                beforeSpanEnd: n => {
                    var r, i;
                    t ? .(),
                        function(e, t) {
                            let n = ro(),
                                r = (0, el.k3)();
                            if (!n ? .getEntries || !r) return;
                            let i = ra(r),
                                s = n.getEntries(),
                                {
                                    op: o,
                                    start_timestamp: a
                                } = (0, eo.et)(e);
                            if (s.slice(rc).forEach(n => {
                                    let r = ra(n.startTime),
                                        s = ra(Math.max(0, n.duration));
                                    if ("navigation" !== o || !a || !(i + r < a)) switch (n.entryType) {
                                        case "navigation":
                                            var l, c, u;
                                            l = e, c = n, u = i, ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(e => {
                                                    rd(l, c, e, u)
                                                }), rd(l, c, "secureConnection", u, "TLS/SSL"), rd(l, c, "fetch", u, "cache"), rd(l, c, "domainLookup", u, "DNS"),
                                                function(e, t, n) {
                                                    let r = n + ra(t.requestStart),
                                                        i = n + ra(t.responseEnd),
                                                        s = n + ra(t.responseStart);
                                                    t.responseEnd && (ri(e, r, i, {
                                                        op: "browser.request",
                                                        name: t.name,
                                                        attributes: {
                                                            [ep.JD]: "auto.ui.browser.metrics"
                                                        }
                                                    }), ri(e, s, i, {
                                                        op: "browser.response",
                                                        name: t.name,
                                                        attributes: {
                                                            [ep.JD]: "auto.ui.browser.metrics"
                                                        }
                                                    }))
                                                }(l, c, u);
                                            break;
                                        case "mark":
                                        case "paint":
                                        case "measure":
                                            {! function(e, t, n, r, i, s) {
                                                    if (["mark", "measure"].includes(t.entryType) && (0, D.Xr)(t.name, s)) return;
                                                    let o = nd(!1),
                                                        a = i + Math.max(n, ra(o ? o.requestStart : 0)),
                                                        l = i + n,
                                                        c = l + r,
                                                        u = {
                                                            [ep.JD]: "auto.resource.browser.metrics"
                                                        };
                                                    a !== l && (u["sentry.browser.measure_happened_before_request"] = !0, u["sentry.browser.measure_start_time"] = a),
                                                        function(e, t) {
                                                            try {
                                                                let n = t.detail;
                                                                if (!n) return;
                                                                if ("object" == typeof n) {
                                                                    for (let [t, r] of Object.entries(n))
                                                                        if (r && (0, ec.sO)(r)) e[`sentry.browser.measure.detail.${t}`] = r;
                                                                        else if (void 0 !== r) try {
                                                                        e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r)
                                                                    } catch {}
                                                                    return
                                                                }
                                                                if ((0, ec.sO)(n)) {
                                                                    e["sentry.browser.measure.detail"] = n;
                                                                    return
                                                                }
                                                                try {
                                                                    e["sentry.browser.measure.detail"] = JSON.stringify(n)
                                                                } catch {}
                                                            } catch {}
                                                        }(u, t), a <= c && ri(e, a, c, {
                                                            name: t.name,
                                                            op: t.entryType,
                                                            attributes: u
                                                        })
                                                }(e, n, r, s, i, t.ignorePerformanceApiSpans);
                                                let o = nw(),
                                                    a = n.startTime < o.firstHiddenTime;
                                                "first-paint" === n.name && a && (ru.fp = {
                                                    value: n.startTime,
                                                    unit: "millisecond"
                                                }),
                                                "first-contentful-paint" === n.name && a && (ru.fcp = {
                                                    value: n.startTime,
                                                    unit: "millisecond"
                                                });
                                                break
                                            }
                                        case "resource":
                                            ! function(e, t, n, r, i, s, o) {
                                                if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                                                let a = t.initiatorType ? `resource.${t.initiatorType}` : "resource.other";
                                                if (o ? .includes(a)) return;
                                                let l = e8(n),
                                                    c = {
                                                        [ep.JD]: "auto.resource.browser.metrics"
                                                    };
                                                rh(c, t, "transferSize", "http.response_transfer_size"), rh(c, t, "encodedBodySize", "http.response_content_length"), rh(c, t, "decodedBodySize", "http.decoded_response_content_length");
                                                let u = t.deliveryType;
                                                null != u && (c["http.response_delivery_type"] = u);
                                                let d = t.renderBlockingStatus;
                                                d && (c["resource.render_blocking_status"] = d), l.protocol && (c["url.scheme"] = l.protocol.split(":").pop()), l.host && (c["server.address"] = l.host), c["url.same_origin"] = n.includes(e7.location.origin);
                                                let {
                                                    name: h,
                                                    version: f
                                                } = rl(t.nextHopProtocol);
                                                c["network.protocol.name"] = h, c["network.protocol.version"] = f;
                                                let p = s + r;
                                                ri(e, p, p + i, {
                                                    name: n.replace(e7.location.origin, ""),
                                                    op: a,
                                                    attributes: c
                                                })
                                            }(e, n, n.name, r, s, i, t.ignoreResourceSpans)
                                    }
                                }), rc = Math.max(s.length - 1, 0), function(e) {
                                    let t = e7.navigator;
                                    if (!t) return;
                                    let n = t.connection;
                                    n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType), n.type && e.setAttribute("connectionType", n.type), rr(n.rtt) && (ru["connection.rtt"] = {
                                        value: n.rtt,
                                        unit: "millisecond"
                                    })), rr(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`), rr(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
                                }(e), "pageload" === o) {
                                var l, c;
                                ! function(e) {
                                    let t = nd(!1);
                                    if (!t) return;
                                    let {
                                        responseStart: n,
                                        requestStart: r
                                    } = t;
                                    r <= n && (e["ttfb.requestTime"] = {
                                        value: n - r,
                                        unit: "millisecond"
                                    })
                                }(ru);
                                let n = ru["mark.fid"];
                                n && ru.fid && (ri(e, n.value, n.value + ra(ru.fid.value), {
                                    name: "first input delay",
                                    op: "ui.action",
                                    attributes: {
                                        [ep.JD]: "auto.ui.browser.metrics"
                                    }
                                }), delete ru["mark.fid"]), "fcp" in ru && t.recordClsOnPageloadSpan || delete ru.cls, t.recordLcpOnPageloadSpan || delete ru.lcp, Object.entries(ru).forEach(([e, t]) => {
                                    ! function(e, t, n, r = (0, eo.Bk)()) {
                                        let i = r && (0, eo.zU)(r);
                                        i && (R.T && w.vF.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), i.addEvent(e, {
                                            [ep.xc]: t,
                                            [ep.Sn]: n
                                        }))
                                    }(e, t.value, t.unit)
                                }), e.setAttribute("performance.timeOrigin", i), e.setAttribute("performance.activationStart", nh()), l = e, c = t, p && c.recordLcpOnPageloadSpan && (p.element && l.setAttribute("lcp.element", (0, eU.Hd)(p.element)), p.id && l.setAttribute("lcp.id", p.id), p.url && l.setAttribute("lcp.url", p.url.trim().slice(0, 200)), null != p.loadTime && l.setAttribute("lcp.loadTime", p.loadTime), null != p.renderTime && l.setAttribute("lcp.renderTime", p.renderTime), l.setAttribute("lcp.size", p.size)), m ? .sources && c.recordClsOnPageloadSpan && m.sources.forEach((e, t) => l.setAttribute(`cls.source.${t+1}`, (0, eU.Hd)(e.node)))
                            }
                            p = void 0, m = void 0, ru = {}
                        }(n, {
                            recordClsOnPageloadSpan: !c,
                            recordLcpOnPageloadSpan: !u,
                            ignoreResourceSpans: C,
                            ignorePerformanceApiSpans: k
                        }), r = e, i = void 0, (0, B.my)(r, rD, i);
                    let s = (0, $.o5)(),
                        o = s.getPropagationContext();
                    s.setPropagationContext({ ...o,
                        traceId: y.spanContext().traceId,
                        sampled: (0, eo.pK)(y),
                        dsc: (0, X.k1)(n)
                    })
                }
            });

            function v() {
                r && ["interactive", "complete"].includes(r.readyState) && e.emit("idleSpanEnableAutoFinish", y)
            }
            s = e, o = y, (0, B.my)(s, rD, o), a && r && (r.addEventListener("readystatechange", () => {
                v()
            }), v())
        }
        return {
            name: "BrowserTracing",
            setup(e) {
                function n() {
                    let t = e[rD];
                    t && !(0, eo.et)(t).timestamp && (t.setAttribute(ep.fs, "cancelled"), t.end())
                }
                ns || (ns = !0, tg(no), tv(no)), t = function({
                    recordClsStandaloneSpans: e,
                    recordLcpStandaloneSpans: t
                }) {
                    let n = ro();
                    if (n && (0, el.k3)()) {
                        n.mark && e7.performance.mark("sentry-tracing-init");
                        let r = n1(({
                                metric: e
                            }) => {
                                let t = e.entries[e.entries.length - 1];
                                if (!t) return;
                                let n = ra((0, el.k3)()),
                                    r = ra(t.startTime);
                                ru.fid = {
                                    value: e.value,
                                    unit: "millisecond"
                                }, ru["mark.fid"] = {
                                    value: n + r,
                                    unit: "second"
                                }
                            }),
                            i = t ? function() {
                                let e, t, n = 0;
                                if (! function() {
                                        try {
                                            return PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint")
                                        } catch {
                                            return !1
                                        }
                                    }()) return;
                                let r = !1;

                                function i() {
                                    r || (r = !0, t && function(e, t, n) {
                                        let r = ra(((0, el.k3)() || 0) + (t ? .startTime || 0)),
                                            i = (0, $.o5)().getScopeData().transactionName,
                                            s = t ? (0, eU.Hd)(t.element) : "Largest contentful paint",
                                            o = {
                                                [ep.JD]: "auto.http.browser.lcp",
                                                [ep.uT]: "ui.webvital.lcp",
                                                [ep.jG]: 0,
                                                "sentry.pageload.span_id": n
                                            };
                                        t && (o["lcp.element"] = (0, eU.Hd)(t.element), o["lcp.id"] = t.id, o["lcp.url"] = t.url, o["lcp.loadTime"] = t.loadTime, o["lcp.renderTime"] = t.renderTime, o["lcp.size"] = t.size);
                                        let a = rs({
                                            name: s,
                                            transaction: i,
                                            attributes: o,
                                            startTime: r
                                        });
                                        a && (a.addEvent("lcp", {
                                            [ep.Sn]: "millisecond",
                                            [ep.xc]: e
                                        }), a.end(r))
                                    }(n, e, t), s())
                                }
                                let s = n0(({
                                    metric: t
                                }) => {
                                    let r = t.entries[t.entries.length - 1];
                                    r && (n = t.value, e = r)
                                }, !0);
                                nN(() => {
                                    i()
                                }), setTimeout(() => {
                                    let e = (0, $.KU)();
                                    if (!e) return;
                                    let n = e.on("startNavigationSpan", () => {
                                            i(), n ? .()
                                        }),
                                        r = (0, eo.Bk)();
                                    if (r) {
                                        let e = (0, eo.zU)(r);
                                        "pageload" === (0, eo.et)(e).op && (t = e.spanContext().spanId)
                                    }
                                }, 0)
                            }() : n0(({
                                metric: e
                            }) => {
                                let t = e.entries[e.entries.length - 1];
                                t && (ru.lcp = {
                                    value: e.value,
                                    unit: "millisecond"
                                }, p = t)
                            }, !0),
                            s = re("ttfb", ({
                                metric: e
                            }) => {
                                e.entries[e.entries.length - 1] && (ru.ttfb = {
                                    value: e.value,
                                    unit: "millisecond"
                                })
                            }, n9, h),
                            o = e ? function() {
                                let e, t, n = 0;
                                if (! function() {
                                        try {
                                            return PerformanceObserver.supportedEntryTypes.includes("layout-shift")
                                        } catch {
                                            return !1
                                        }
                                    }()) return;
                                let r = !1;

                                function i() {
                                    r || (r = !0, t && function(e, t, n) {
                                        let r = ra(((0, el.k3)() || 0) + (t ? .startTime || 0)),
                                            i = (0, $.o5)().getScopeData().transactionName,
                                            s = t ? (0, eU.Hd)(t.sources[0] ? .node) : "Layout shift",
                                            o = {
                                                [ep.JD]: "auto.http.browser.cls",
                                                [ep.uT]: "ui.webvital.cls",
                                                [ep.jG]: t ? .duration || 0,
                                                "sentry.pageload.span_id": n
                                            };
                                        t ? .sources && t.sources.forEach((e, t) => {
                                            o[`cls.source.${t+1}`] = (0, eU.Hd)(e.node)
                                        });
                                        let a = rs({
                                            name: s,
                                            transaction: i,
                                            attributes: o,
                                            startTime: r
                                        });
                                        a && (a.addEvent("cls", {
                                            [ep.Sn]: "",
                                            [ep.xc]: e
                                        }), a.end(r))
                                    }(n, e, t), s())
                                }
                                let s = nZ(({
                                    metric: t
                                }) => {
                                    let r = t.entries[t.entries.length - 1];
                                    r && (n = t.value, e = r)
                                }, !0);
                                nN(() => {
                                    i()
                                }), setTimeout(() => {
                                    let e = (0, $.KU)();
                                    if (!e) return;
                                    let n = e.on("startNavigationSpan", () => {
                                            i(), n ? .()
                                        }),
                                        r = (0, eo.Bk)();
                                    if (r) {
                                        let e = (0, eo.zU)(r);
                                        "pageload" === (0, eo.et)(e).op && (t = e.spanContext().spanId)
                                    }
                                }, 0)
                            }() : nZ(({
                                metric: e
                            }) => {
                                let t = e.entries[e.entries.length - 1];
                                t && (ru.cls = {
                                    value: e.value,
                                    unit: ""
                                }, m = t)
                            }, !0);
                        return () => {
                            r(), i ? .(), s(), o ? .()
                        }
                    }
                    return () => void 0
                }({
                    recordClsStandaloneSpans: c || !1,
                    recordLcpStandaloneSpans: u || !1
                }), i && function() {
                    if (ro() && (0, el.k3)()) {
                        let e = n2(rg);
                        () => {
                            e()
                        }
                    }
                }(), s && ro() && (0, el.k3)() && n5("element", r_), a && T.O.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? new PerformanceObserver(e => {
                    let t = (0, eo.Bk)();
                    if (t)
                        for (let n of e.getEntries()) {
                            if (!n.scripts[0]) continue;
                            let e = ra((0, el.k3)() + n.startTime),
                                {
                                    start_timestamp: r,
                                    op: i
                                } = (0, eo.et)(t);
                            if ("navigation" === i && r && e < r) continue;
                            let s = ra(n.duration),
                                o = {
                                    [ep.JD]: "auto.ui.browser.metrics"
                                },
                                {
                                    invoker: a,
                                    invokerType: l,
                                    sourceURL: c,
                                    sourceFunctionName: u,
                                    sourceCharPosition: d
                                } = n.scripts[0];
                            o["browser.script.invoker"] = a, o["browser.script.invoker_type"] = l, c && (o["code.filepath"] = c), u && (o["code.function"] = u), -1 !== d && (o["browser.script.source_char_position"] = d), ri(t, e, e + s, {
                                name: "Main UI thread blocked",
                                op: "ui.long-animation-frame",
                                attributes: o
                            })
                        }
                }).observe({
                    type: "long-animation-frame",
                    buffered: !0
                }) : o && n5("longtask", ({
                    entries: e
                }) => {
                    let t = (0, eo.Bk)();
                    if (!t) return;
                    let {
                        op: n,
                        start_timestamp: r
                    } = (0, eo.et)(t);
                    for (let i of e) {
                        let e = ra((0, el.k3)() + i.startTime),
                            s = ra(i.duration);
                        "navigation" === n && r && e < r || ri(t, e, e + s, {
                            name: "Main UI thread blocked",
                            op: "ui.long-task",
                            attributes: {
                                [ep.JD]: "auto.ui.browser.metrics"
                            }
                        })
                    }
                }), l && n5("event", ({
                    entries: e
                }) => {
                    let t = (0, eo.Bk)();
                    if (t) {
                        for (let n of e)
                            if ("click" === n.name) {
                                let e = ra((0, el.k3)() + n.startTime),
                                    r = ra(n.duration),
                                    i = {
                                        name: (0, eU.Hd)(n.target),
                                        op: `ui.interaction.${n.name}`,
                                        startTime: e,
                                        attributes: {
                                            [ep.JD]: "auto.ui.browser.metrics"
                                        }
                                    },
                                    s = (0, eU.xE)(n.target);
                                s && (i.attributes["ui.component_name"] = s), ri(t, e, e + r, i)
                            }
                    }
                }), e.on("startNavigationSpan", t => {
                    if ((0, $.KU)() !== e) return;
                    n(), (0, $.rm)().setPropagationContext({
                        traceId: (0, tX.e)(),
                        sampleRand: Math.random()
                    });
                    let r = (0, $.o5)();
                    r.setPropagationContext({
                        traceId: (0, tX.e)(),
                        sampleRand: Math.random()
                    }), r.setSDKProcessingMetadata({
                        normalizedRequest: void 0
                    }), M(e, {
                        op: "navigation",
                        ...t
                    })
                }), e.on("startPageLoadSpan", (t, r = {}) => {
                    if ((0, $.KU)() !== e) return;
                    n();
                    let i = r.sentryTrace || rP("sentry-trace"),
                        s = r.baggage || rP("baggage"),
                        o = (0, na.kM)(i, s),
                        a = (0, $.o5)();
                    a.setPropagationContext(o), a.setSDKProcessingMetadata({
                        normalizedRequest: eB()
                    }), M(e, {
                        op: "pageload",
                        ...t
                    })
                })
            },
            afterAllSetup(e) {
                var t, r, s, o, a;
                let c, u = (0, eU.$N)();
                if ("off" !== A && function(e, {
                        linkPreviousTrace: t,
                        consistentTraceSampling: n
                    }) {
                        let r = "session-storage" === t,
                            i = r ? function() {
                                try {
                                    let e = ej.sessionStorage ? .getItem(ry);
                                    return JSON.parse(e)
                                } catch (e) {
                                    return
                                }
                            }() : void 0;
                        e.on("spanStart", e => {
                            if ((0, eo.zU)(e) !== e) return;
                            let t = (0, $.o5)().getPropagationContext();
                            i = function(e, t, n) {
                                let r = (0, eo.et)(t),
                                    i = {
                                        spanContext: t.spanContext(),
                                        startTimestamp: r.start_timestamp,
                                        sampleRate: function() {
                                            try {
                                                return Number(n.dsc ? .sample_rate) ? ? Number(r.data ? .[ep.sy])
                                            } catch {
                                                return 0
                                            }
                                        }(),
                                        sampleRand: n.sampleRand
                                    };
                                if (!e) return i;
                                let s = e.spanContext;
                                return s.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (t.addLink({
                                    context: s,
                                    attributes: {
                                        [ep.Lc]: "previous_trace"
                                    }
                                }), t.setAttribute("sentry.previous_trace", `${s.traceId}-${s.spanId}-${+!!rv(s)}`)), i)
                            }(i, e, t), r && function(e) {
                                try {
                                    ej.sessionStorage.setItem(ry, JSON.stringify(e))
                                } catch (e) {}
                            }(i)
                        });
                        let s = !0;
                        n && e.on("beforeSampling", e => {
                            if (!i) return;
                            let t = (0, $.o5)(),
                                n = t.getPropagationContext();
                            if (s && n.parentSpanId) {
                                s = !1;
                                return
                            }
                            t.setPropagationContext({ ...n,
                                dsc: { ...n.dsc,
                                    sample_rate: String(i.sampleRate),
                                    sampled: String(rv(i.spanContext))
                                },
                                sampleRand: i.sampleRand
                            }), e.parentSampled = rv(i.spanContext), e.parentSampleRate = i.sampleRate, e.spanAttributes = { ...e.spanAttributes,
                                [ep.Ef]: i.sampleRate
                            }
                        })
                    }(e, {
                        linkPreviousTrace: A,
                        consistentTraceSampling: x
                    }), ej.location) {
                    if (I) {
                        let t = (0, el.k3)();
                        rA(e, {
                            name: ej.location.pathname,
                            startTime: t ? t / 1e3 : void 0,
                            attributes: {
                                [ep.i_]: "url",
                                [ep.JD]: "auto.pageload.browser"
                            }
                        })
                    }
                    N && to(({
                        to: t,
                        from: n
                    }) => {
                        if (void 0 === n && u ? .indexOf(t) !== -1) {
                            u = void 0;
                            return
                        }
                        u = void 0;
                        let r = e6(t);
                        rx(e, {
                            name: r ? .pathname || ej.location.pathname,
                            attributes: {
                                [ep.i_]: "url",
                                [ep.JD]: "auto.navigation.browser"
                            }
                        }), (0, $.o5)().setSDKProcessingMetadata({
                            normalizedRequest: { ...eB(),
                                url: t
                            }
                        })
                    })
                }
                y && ej.document && ej.document.addEventListener("visibilitychange", () => {
                        let e = (0, eo.Bk)();
                        if (!e) return;
                        let t = (0, eo.zU)(e);
                        if (ej.document.hidden && t) {
                            let {
                                op: e,
                                status: n
                            } = (0, eo.et)(t);
                            n || t.setStatus({
                                code: tY.TJ,
                                message: "cancelled"
                            }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                        }
                    }), l && (t = e, r = f, s = g, o = _, a = n, ej.document && addEventListener("click", () => {
                        let e = function(e) {
                            return e[rD]
                        }(t);
                        if (!(e && ["navigation", "pageload"].includes((0, eo.et)(e).op))) c && (c.setAttribute(ep.fs, "interactionInterrupted"), c.end(), c = void 0), a.name && (c = ni({
                            name: a.name,
                            op: "ui.action.click",
                            attributes: {
                                [ep.i_]: a.source || "url"
                            }
                        }, {
                            idleTimeout: r,
                            finalTimeout: s,
                            childSpanTimeout: o
                        }))
                    }, {
                        once: !1,
                        capture: !0
                    })), i && function() {
                        let e = ({
                            entries: e
                        }) => {
                            let t = (0, eo.Bk)(),
                                n = t && (0, eo.zU)(t);
                            e.forEach(e => {
                                if (!("duration" in e) || !n) return;
                                let t = e.interactionId;
                                if (null != t && !rp.has(t)) {
                                    if (rf.length > 10) {
                                        let e = rf.shift();
                                        rp.delete(e)
                                    }
                                    rf.push(t), rp.set(t, n)
                                }
                            })
                        };
                        n5("event", e), n5("first-input", e)
                    }(),
                    function(e, t) {
                        let {
                            traceFetch: n,
                            traceXHR: r,
                            trackFetchStreamPerformance: i,
                            shouldCreateSpanForRequest: s,
                            enableHTTPTimings: o,
                            tracePropagationTargets: a,
                            onRequestSpanStart: l
                        } = { ...rO,
                            ...t
                        }, c = "function" == typeof s ? s : e => !0, u = e => (function(e, t) {
                            let n = (0, eU.$N)();
                            if (n) {
                                let r, i;
                                try {
                                    r = new URL(e, n), i = new URL(n).origin
                                } catch (e) {
                                    return !1
                                }
                                let s = r.origin === i;
                                return t ? (0, D.Xr)(r.toString(), t) || s && (0, D.Xr)(r.pathname, t) : s
                            } {
                                let n = !!e.match(/^\/(?!\/)/);
                                return t ? (0, D.Xr)(e, t) : n
                            }
                        })(e, a), d = {};
                        n && (e.addEventProcessor(e => ("transaction" === e.type && e.spans && e.spans.forEach(e => {
                            if ("http.client" === e.op) {
                                let t = rw.get(e.span_id);
                                t && (e.timestamp = t / 1e3, rw.delete(e.span_id))
                            }
                        }), e)), i && function(e) {
                            let t = "fetch-body-resolved";
                            eW(t, e), eG(t, () => eY(e0))
                        }(e => {
                            if (e.response) {
                                let t = rT.get(e.response);
                                t && e.endTimestamp && rw.set(t, e.endTimestamp)
                            }
                        }), eQ(e => {
                            let t = function(e, t, n, r, i = "auto.http.browser") {
                                if (!e.fetchData) return;
                                let {
                                    method: s,
                                    url: o
                                } = e.fetchData, a = (0, tV.f)() && t(o);
                                if (e.endTimestamp && a) {
                                    let t = e.fetchData.__span;
                                    if (!t) return;
                                    let n = r[t];
                                    n && (function(e, t) {
                                        if (t.response) {
                                            (0, tY.N8)(e, t.response.status);
                                            let n = t.response ? .headers && t.response.headers.get("content-length");
                                            if (n) {
                                                let t = parseInt(n);
                                                t > 0 && e.setAttribute("http.response_content_length", t)
                                            }
                                        } else t.error && e.setStatus({
                                            code: tY.TJ,
                                            message: "internal_error"
                                        });
                                        e.end()
                                    }(n, e), delete r[t]);
                                    return
                                }
                                let l = !!(0, eo.Bk)(),
                                    c = a && l ? t6(function(e, t, n) {
                                        let r = e6(e);
                                        return {
                                            name: r ? `${t} ${function(e){if(e4(e))return e.pathname;let t=new URL(e);return t.search="",t.hash="",["80","443"].includes(t.port)&&(t.port=""),t.password&&(t.password="%filtered%"),t.username&&(t.username="%filtered%"),t.toString()}(r)}` : t,
                                            attributes: function(e, t, n, r) {
                                                let i = {
                                                    url: e,
                                                    type: "fetch",
                                                    "http.method": n,
                                                    [ep.JD]: r,
                                                    [ep.uT]: "http.client"
                                                };
                                                return t && (e4(t) || (i["http.url"] = t.href, i["server.address"] = t.host), t.search && (i["http.query"] = t.search), t.hash && (i["http.fragment"] = t.hash)), i
                                            }(e, r, t, n)
                                        }
                                    }(o, s, i)) : new tQ;
                                if (e.fetchData.__span = c.spanContext().spanId, r[c.spanContext().spanId] = c, n(e.fetchData.url)) {
                                    let t = e.args[0],
                                        n = e.args[1] || {},
                                        r = function(e, t, n) {
                                            var r;
                                            let i = rE({
                                                    span: n
                                                }),
                                                s = i["sentry-trace"],
                                                o = i.baggage;
                                            if (!s) return;
                                            let a = t.headers || ((0, ec.ks)(e) ? e.headers : void 0);
                                            if (!a) return { ...i
                                            };
                                            if (r = a, "undefined" != typeof Headers && (0, ec.tH)(r, Headers)) {
                                                let e = new Headers(a);
                                                if (e.get("sentry-trace") || e.set("sentry-trace", s), o) {
                                                    let t = e.get("baggage");
                                                    t ? rS(t) || e.set("baggage", `${t},${o}`) : e.set("baggage", o)
                                                }
                                                return e
                                            }
                                            if (Array.isArray(a)) {
                                                let e = [...a];
                                                a.find(e => "sentry-trace" === e[0]) || e.push(["sentry-trace", s]);
                                                let t = a.find(e => "baggage" === e[0] && rS(e[1]));
                                                return o && !t && e.push(["baggage", o]), e
                                            } {
                                                let e = "sentry-trace" in a ? a["sentry-trace"] : void 0,
                                                    t = "baggage" in a ? a.baggage : void 0,
                                                    n = t ? Array.isArray(t) ? [...t] : [t] : [],
                                                    r = t && (Array.isArray(t) ? t.find(e => rS(e)) : rS(t));
                                                return o && !r && n.push(o), { ...a,
                                                    "sentry-trace": e ? ? s,
                                                    baggage: n.length > 0 ? n.join(",") : void 0
                                                }
                                            }
                                        }(t, n, (0, tV.f)() && l ? c : void 0);
                                    r && (e.args[1] = n, n.headers = r)
                                }
                                let u = (0, $.KU)();
                                if (u) {
                                    let t = {
                                        input: e.args,
                                        response: e.response,
                                        startTimestamp: e.startTimestamp,
                                        endTimestamp: e.endTimestamp
                                    };
                                    u.emit("beforeOutgoingRequestSpan", c, t)
                                }
                                return c
                            }(e, c, u, d);
                            if (e.response && e.fetchData.__span && rT.set(e.response, e.fetchData.__span), t) {
                                let n = rR(e.fetchData.url),
                                    r = n ? e8(n).host : void 0;
                                t.setAttributes({
                                    "http.url": n,
                                    "server.address": r
                                }), o && rC(t), l ? .(t, {
                                    headers: e.headers
                                })
                            }
                        })), r && ti(e => {
                            let t = function(e, t, n, r) {
                                let i = e.xhr,
                                    s = i ? .[tr];
                                if (!i || i.__sentry_own_request__ || !s) return;
                                let {
                                    url: o,
                                    method: a
                                } = s, l = (0, tV.f)() && t(o);
                                if (e.endTimestamp && l) {
                                    let e = i.__sentry_xhr_span_id__;
                                    if (!e) return;
                                    let t = r[e];
                                    t && void 0 !== s.status_code && ((0, tY.N8)(t, s.status_code), t.end(), delete r[e]);
                                    return
                                }
                                let c = rR(o),
                                    u = c ? e8(c) : e8(o),
                                    d = e9(o),
                                    h = !!(0, eo.Bk)(),
                                    f = l && h ? t6({
                                        name: `${a} ${d}`,
                                        attributes: {
                                            url: o,
                                            type: "xhr",
                                            "http.method": a,
                                            "http.url": c,
                                            "server.address": u ? .host,
                                            [ep.JD]: "auto.http.browser",
                                            [ep.uT]: "http.client",
                                            ...u ? .search && {
                                                "http.query": u ? .search
                                            },
                                            ...u ? .hash && {
                                                "http.fragment": u ? .hash
                                            }
                                        }
                                    }) : new tQ;
                                i.__sentry_xhr_span_id__ = f.spanContext().spanId, r[i.__sentry_xhr_span_id__] = f, n(o) && function(e, t) {
                                    let {
                                        "sentry-trace": n,
                                        baggage: r
                                    } = rE({
                                        span: t
                                    });
                                    n && function(e, t, n) {
                                        let r = e.__sentry_xhr_v3__ ? .request_headers;
                                        if (!r ? .["sentry-trace"]) try {
                                            if (e.setRequestHeader("sentry-trace", t), n) {
                                                let t = r ? .baggage;
                                                t && t.split(",").some(e => e.trim().startsWith("sentry-")) || e.setRequestHeader("baggage", n)
                                            }
                                        } catch (e) {}
                                    }(e, n, r)
                                }(i, (0, tV.f)() && h ? f : void 0);
                                let p = (0, $.KU)();
                                return p && p.emit("beforeOutgoingRequestSpan", f, e), f
                            }(e, c, u, d);
                            if (t) {
                                let n;
                                o && rC(t);
                                try {
                                    n = new Headers(e.xhr.__sentry_xhr_v3__ ? .request_headers)
                                } catch {}
                                l ? .(t, {
                                    headers: n
                                })
                            }
                        })
                    }(e, {
                        traceFetch: v,
                        traceXHR: b,
                        trackFetchStreamPerformance: E,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: S,
                        enableHTTPTimings: O,
                        onRequestSpanStart: P
                    })
            }
        }
    };

function rA(e, t, n) {
    return e.emit("startPageLoadSpan", t, n), (0, $.o5)().setTransactionName(t.name), e[rD]
}

function rx(e, t) {
    return e.emit("startNavigationSpan", t), (0, $.o5)().setTransactionName(t.name), e[rD]
}

function rP(e) {
    let t = ej.document,
        n = t ? .querySelector(`meta[name=${e}]`);
    return n ? .getAttribute("content") || void 0
}
let rD = "_sentry_idleSpan",
    rM = "incomplete-app-router-transaction",
    rL = "router-patch",
    rU = {
        current: void 0
    },
    rj = T.O;

function rF(e) {
    try {
        return new URL(e, "http://example.com/").pathname
    } catch {
        return "/"
    }
}
let r$ = new WeakSet;

function rB(e, t, n) {
    r$.has(t) || (r$.add(t), ["back", "forward", "push", "replace"].forEach(r => {
        t ? .[r] && (t[r] = new Proxy(t[r], {
            apply(t, i, s) {
                if ("router-patch" !== rL) return t.apply(i, s);
                let o = rM,
                    a = {
                        [ep.uT]: "navigation",
                        [ep.JD]: "auto.navigation.nextjs.app_router_instrumentation",
                        [ep.i_]: "url"
                    };
                return "push" === r ? (o = rF(s[0]), a["navigation.type"] = "router.push") : "replace" === r ? (o = rF(s[0]), a["navigation.type"] = "router.replace") : "back" === r ? a["navigation.type"] = "router.back" : "forward" === r && (a["navigation.type"] = "router.forward"), n.current = rx(e, {
                    name: o,
                    attributes: a
                }), t.apply(i, s)
            }
        }))
    }))
}
let rq = null;
var rz = n(75162),
    rH = n(91426);
let rW = rz.events ? rz : rz.default,
    rG = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

function rJ(...e) {
    let t = "",
        n = !1;
    for (let r = e.length - 1; r >= -1 && !n; r--) {
        let i = r >= 0 ? e[r] : "/";
        i && (t = `${i}/${t}`, n = "/" === i.charAt(0))
    }
    return t = (function(e, t) {
        let n = 0;
        for (let t = e.length - 1; t >= 0; t--) {
            let r = e[t];
            "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--)
        }
        if (t)
            for (; n--;) e.unshift("..");
        return e
    })(t.split("/").filter(e => !!e), !n).join("/"), (n ? "/" : "") + t || "."
}

function rV(e) {
    let t = 0;
    for (; t < e.length && "" === e[t]; t++);
    let n = e.length - 1;
    for (; n >= 0 && "" === e[n]; n--);
    return t > n ? [] : e.slice(t, n - t + 1)
}
let rK = (e = {}) => {
        let t = e.root,
            n = e.prefix || "app:///",
            r = "window" in T.O && !!T.O.window,
            i = e.iteratee || function({
                isBrowser: e,
                root: t,
                prefix: n
            }) {
                return r => {
                    if (!r.filename) return r;
                    let i = /^[a-zA-Z]:\\/.test(r.filename) || r.filename.includes("\\") && !r.filename.includes("/"),
                        s = /^\//.test(r.filename);
                    if (e) {
                        if (t) {
                            let e = r.filename;
                            0 === e.indexOf(t) && (r.filename = e.replace(t, n))
                        }
                    } else if (i || s) {
                        let e = i ? r.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r.filename,
                            s = t ? function(e, t) {
                                e = rJ(e).slice(1), t = rJ(t).slice(1);
                                let n = rV(e.split("/")),
                                    r = rV(t.split("/")),
                                    i = Math.min(n.length, r.length),
                                    s = i;
                                for (let e = 0; e < i; e++)
                                    if (n[e] !== r[e]) {
                                        s = e;
                                        break
                                    }
                                let o = [];
                                for (let e = s; e < n.length; e++) o.push("..");
                                return (o = o.concat(r.slice(s))).join("/")
                            }(t, e) : function(e) {
                                let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                                    n = rG.exec(t);
                                return n ? n.slice(1) : []
                            }(e)[2] || "";
                        r.filename = `${n}${s}`
                    }
                    return r
                }
            }({
                isBrowser: r,
                root: t,
                prefix: n
            });
        return {
            name: "RewriteFrames",
            processEvent(e) {
                let t = e;
                return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                    try {
                        return { ...e,
                            exception: { ...e.exception,
                                values: e.exception.values.map(e => {
                                    var t;
                                    return { ...e,
                                        ...e.stacktrace && {
                                            stacktrace: { ...t = e.stacktrace,
                                                frames: t ? .frames && t.frames.map(e => i(e))
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    } catch (t) {
                        return e
                    }
                }(t)), t
            }
        }
    },
    rX = ({
        assetPrefix: e,
        basePath: t,
        rewriteFramesAssetPrefixPath: n,
        experimentalThirdPartyOriginStackFrames: r
    }) => ({ ...rK({
            iteratee: i => {
                if (r) {
                    let n = "undefined" != typeof window && window.location ? window.location.origin : "";
                    if (i.filename ? .startsWith(n) && !i.filename.endsWith(".js")) return i;
                    if (e) i.filename ? .startsWith(e) && (i.filename = i.filename.replace(e, "app://"));
                    else if (t) try {
                        let {
                            origin: e
                        } = new URL(i.filename);
                        e === n && (i.filename = i.filename ? .replace(e, "app://").replace(t, ""))
                    } catch (e) {}
                } else try {
                    let {
                        origin: e
                    } = new URL(i.filename);
                    i.filename = i.filename ? .replace(e, "app://").replace(n, "")
                } catch (e) {}
                return r ? (i.filename ? .includes("/_next") && (i.filename = decodeURI(i.filename)), i.filename ? .match(/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (i.in_app = !1)) : (i.filename ? .startsWith("app:///_next") && (i.filename = decodeURI(i.filename)), i.filename ? .match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (i.in_app = !1)), i
            }
        }),
        name: "NextjsClientStackFrameNormalization"
    });
var rQ = n(27157);
let rY = T.O;
var rZ = n(27157);
let r0 = !1,
    r1 = T.O;

function r2(e) {
    return "/" === e[e.length - 1] ? e.slice(0, -1) : e
}
var r5 = n(27157);

function r3() {
    return "undefined" != typeof window && (!(!("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== r5 ? r5 : 0)) || function() {
        let e = T.O.process;
        return e ? .type === "renderer"
    }())
}

function r4(e) {
    return new URLSearchParams(e).toString()
}

function r6(e, t = w.vF) {
    try {
        if ("string" == typeof e) return [e];
        if (e instanceof URLSearchParams) return [e.toString()];
        if (e instanceof FormData) return [r4(e)];
        if (!e) return [void 0]
    } catch (e) {
        return [void 0, "BODY_PARSE_ERROR"]
    }
    return [void 0, "UNPARSEABLE_BODY_TYPE"]
}

function r8(e = []) {
    if (2 === e.length && "object" == typeof e[1]) return e[1].body
}
let r9 = T.O,
    r7 = "sentryReplaySession",
    ie = "Unable to send Replay";
var it = Object.defineProperty,
    ir = (e, t, n) => t in e ? it(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    ii = (e, t, n) => ir(e, "symbol" != typeof t ? t + "" : t, n),
    is = (e => (e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(is || {});

function io(e) {
    let t = e ? .host;
    return t ? .shadowRoot === e
}

function ia(e) {
    return "[object ShadowRoot]" === Object.prototype.toString.call(e)
}

function il(e) {
    try {
        var t;
        let n = e.rules || e.cssRules;
        return n ? ((t = Array.from(n, ic).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t) : null
    } catch (e) {
        return null
    }
}

function ic(e) {
    let t;
    if ("styleSheet" in e) try {
        t = il(e.styleSheet) || function(e) {
            let {
                cssText: t
            } = e;
            if (t.split('"').length < 3) return t;
            let n = ["@import", `url(${JSON.stringify(e.href)})`];
            return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), n.join(" ") + ";"
        }(e)
    } catch (e) {} else if ("selectorText" in e) {
        let t = e.cssText,
            n = e.selectorText.includes(":"),
            r = "string" == typeof e.style.all && e.style.all;
        if (r && (t = function(e) {
                let t = "";
                for (let n = 0; n < e.style.length; n++) {
                    let r = e.style,
                        i = r[n],
                        s = r.getPropertyPriority(i);
                    t += `${i}:${r.getPropertyValue(i)}${s?" !important":""};`
                }
                return `${e.selectorText} { ${t} }`
            }(e)), n && (t = t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")), n || r) return t
    }
    return t || e.cssText
}
class iu {
    constructor() {
        ii(this, "idNodeMap", new Map), ii(this, "nodeMetaMap", new WeakMap)
    }
    getId(e) {
        return e ? this.getMeta(e) ? .id ? ? -1 : -1
    }
    getNode(e) {
        return this.idNodeMap.get(e) || null
    }
    getIds() {
        return Array.from(this.idNodeMap.keys())
    }
    getMeta(e) {
        return this.nodeMetaMap.get(e) || null
    }
    removeNodeFromMap(e) {
        let t = this.getId(e);
        this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
    }
    has(e) {
        return this.idNodeMap.has(e)
    }
    hasNode(e) {
        return this.nodeMetaMap.has(e)
    }
    add(e, t) {
        let n = t.id;
        this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t)
    }
    replace(e, t) {
        let n = this.getNode(e);
        if (n) {
            let e = this.nodeMetaMap.get(n);
            e && this.nodeMetaMap.set(t, e)
        }
        this.idNodeMap.set(e, t)
    }
    reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
    }
}

function id({
    maskInputOptions: e,
    tagName: t,
    type: n
}) {
    return "OPTION" === t && (t = "SELECT"), !!(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text)
}

function ih({
    isMasked: e,
    element: t,
    value: n,
    maskInputFn: r
}) {
    let i = n || "";
    return e ? (r && (i = r(i, t)), "*".repeat(i.length)) : i
}

function ip(e) {
    return e.toLowerCase()
}

function im(e) {
    return e.toUpperCase()
}
let ig = "__rrweb_original__";

function i_(e) {
    let t = e.type;
    return e.hasAttribute("data-rr-is-password") ? "password" : t ? ip(t) : null
}

function iy(e, t, n) {
    return "INPUT" === t && ("radio" === n || "checkbox" === n) ? e.getAttribute("value") || "" : e.value
}

function iv(e, t) {
    let n;
    try {
        n = new URL(e, t ? ? window.location.href)
    } catch (e) {
        return null
    }
    let r = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
    return r ? .[1] ? ? null
}
let ib = {};

function iE(e) {
    let t = ib[e];
    if (t) return t;
    let n = window.document,
        r = window[e];
    if (n && "function" == typeof n.createElement) try {
        let t = n.createElement("iframe");
        t.hidden = !0, n.head.appendChild(t);
        let i = t.contentWindow;
        i && i[e] && (r = i[e]), n.head.removeChild(t)
    } catch (e) {}
    return ib[e] = r.bind(window)
}

function iS(...e) {
    return iE("setTimeout")(...e)
}

function iT(...e) {
    return iE("clearTimeout")(...e)
}

function iw(e) {
    try {
        return e.contentDocument
    } catch (e) {}
}
let iO = 1,
    iC = RegExp("[^a-z0-9-_:]");

function ik() {
    return iO++
}
let iR = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    iI = /^(?:[a-z+]+:)?\/\//i,
    iN = /^www\..*/i,
    iA = /^(data:)([^,]*),(.*)/i;

function ix(e, t) {
    return (e || "").replace(iR, (e, n, r, i, s, o) => {
        let a = r || s || o,
            l = n || i || "";
        if (!a) return e;
        if (iI.test(a) || iN.test(a) || iA.test(a)) return `url(${l}${a}${l})`;
        if ("/" === a[0]) {
            let e;
            return `url(${l}${(t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0]).split("?")[0]+a}${l})`
        }
        let c = t.split("/"),
            u = a.split("/");
        for (let e of (c.pop(), u))
            if ("." === e) continue;
            else ".." === e ? c.pop() : c.push(e);
        return `url(${l}${c.join("/")}${l})`
    })
}
let iP = /^[^ \t\n\r\u000c]+/,
    iD = /^[, \t\n\r\u000c]+/,
    iM = new WeakMap;

function iL(e, t) {
    return t && "" !== t.trim() ? iU(e, t) : t
}

function iU(e, t) {
    let n = iM.get(e);
    if (n || (n = e.createElement("a"), iM.set(e, n)), t) {
        if (t.startsWith("blob:") || t.startsWith("data:")) return t
    } else t = "";
    return n.setAttribute("href", t), n.href
}

function ij(e, t, n, r, i, s) {
    if (!r) return r;
    if ("src" === n || "href" === n && ("use" !== t || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0]) return iL(e, r);
    if ("background" === n && ("table" === t || "td" === t || "th" === t)) return iL(e, r);
    if ("srcset" === n) return function(e, t) {
        if ("" === t.trim()) return t;
        let n = 0;

        function r(e) {
            let r, i = e.exec(t.substring(n));
            return i ? (r = i[0], n += r.length, r) : ""
        }
        let i = [];
        for (; r(iD), !(n >= t.length);) {
            let s = r(iP);
            if ("," === s.slice(-1)) s = iL(e, s.substring(0, s.length - 1)), i.push(s);
            else {
                let r = "";
                s = iL(e, s);
                let o = !1;
                for (;;) {
                    let e = t.charAt(n);
                    if ("" === e) {
                        i.push((s + r).trim());
                        break
                    }
                    if (o) ")" === e && (o = !1);
                    else if ("," === e) {
                        n += 1, i.push((s + r).trim());
                        break
                    } else "(" === e && (o = !0);
                    r += e, n += 1
                }
            }
        }
        return i.join(", ")
    }(e, r);
    if ("style" === n) return ix(r, iU(e));
    else if ("object" === t && "data" === n) return iL(e, r);
    return "function" == typeof s ? s(n, r, i) : r
}

function iF(e, t, n) {
    return ("video" === e || "audio" === e) && "autoplay" === t
}

function i$(e, t, n, r) {
    try {
        if (r && e.matches(r)) return !1;
        if ("string" == typeof t) {
            if (e.classList.contains(t)) return !0
        } else
            for (let n = e.classList.length; n--;) {
                let r = e.classList[n];
                if (t.test(r)) return !0
            }
        if (n) return e.matches(n)
    } catch (e) {}
    return !1
}

function iB(e, t, n = 1 / 0, r = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : iB(e.parentNode, t, n, r + 1)
}

function iq(e, t) {
    return n => {
        if (null === n) return !1;
        try {
            if (e) {
                if ("string" == typeof e) {
                    if (n.matches(`.${e}`)) return !0
                } else if (function(e, t) {
                        for (let n = e.classList.length; n--;) {
                            let r = e.classList[n];
                            if (t.test(r)) return !0
                        }
                        return !1
                    }(n, e)) return !0
            }
            if (t && n.matches(t)) return !0;
            return !1
        } catch {
            return !1
        }
    }
}

function iz(e, t, n, r, i, s) {
    try {
        let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
        if (null === o) return !1;
        if ("INPUT" === o.tagName) {
            let e = o.getAttribute("autocomplete");
            if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
        }
        let a = -1,
            l = -1;
        if (s) {
            if ((l = iB(o, iq(r, i))) < 0) return !0;
            a = iB(o, iq(t, n), l >= 0 ? l : 1 / 0)
        } else {
            if ((a = iB(o, iq(t, n))) < 0) return !1;
            l = iB(o, iq(r, i), a >= 0 ? a : 1 / 0)
        }
        return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!s
    } catch (e) {}
    return !!s
}

function iH(e) {
    return null == e ? "" : e.toLowerCase()
}

function iW(e, t) {
    let n, {
            doc: r,
            mirror: i,
            blockClass: s,
            blockSelector: o,
            unblockSelector: a,
            maskAllText: l,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: h,
            skipChild: f = !1,
            inlineStylesheet: p = !0,
            maskInputOptions: m = {},
            maskAttributeFn: y,
            maskTextFn: v,
            maskInputFn: b,
            slimDOMOptions: E,
            dataURLOptions: S = {},
            inlineImages: T = !1,
            recordCanvas: w = !1,
            onSerialize: O,
            onIframeLoad: C,
            iframeLoadTimeout: k = 5e3,
            onStylesheetLoad: R,
            stylesheetLoadTimeout: I = 5e3,
            keepIframeSrcFn: N = () => !1,
            newlyAddedElement: A = !1
        } = t,
        {
            preserveWhiteSpace: x = !0
        } = t,
        P = function(e, t) {
            let {
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: s,
                unblockSelector: o,
                maskAllText: a,
                maskAttributeFn: l,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: d,
                unmaskTextSelector: h,
                inlineStylesheet: f,
                maskInputOptions: p = {},
                maskTextFn: m,
                maskInputFn: y,
                dataURLOptions: v = {},
                inlineImages: b,
                recordCanvas: E,
                keepIframeSrcFn: S,
                newlyAddedElement: T = !1
            } = t, w = function(e, t) {
                if (!t.hasNode(e)) return;
                let n = t.getId(e);
                return 1 === n ? void 0 : n
            }(n, r);
            switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    if ("CSS1Compat" !== e.compatMode) return {
                        type: is.Document,
                        childNodes: [],
                        compatMode: e.compatMode
                    };
                    return {
                        type: is.Document,
                        childNodes: []
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: is.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: w
                    };
                case e.ELEMENT_NODE:
                    return function(e, t) {
                        let n, {
                                doc: r,
                                blockClass: i,
                                blockSelector: s,
                                unblockSelector: o,
                                inlineStylesheet: a,
                                maskInputOptions: l = {},
                                maskAttributeFn: c,
                                maskInputFn: u,
                                dataURLOptions: d = {},
                                inlineImages: h,
                                recordCanvas: f,
                                keepIframeSrcFn: p,
                                newlyAddedElement: m = !1,
                                rootId: y,
                                maskTextClass: v,
                                unmaskTextClass: b,
                                maskTextSelector: E,
                                unmaskTextSelector: S
                            } = t,
                            T = i$(e, i, s, o),
                            w = function(e) {
                                if (e instanceof HTMLFormElement) return "form";
                                let t = ip(e.tagName);
                                return iC.test(t) ? "div" : t
                            }(e),
                            O = {},
                            C = e.attributes.length;
                        for (let t = 0; t < C; t++) {
                            let n = e.attributes[t];
                            n.name && !iF(w, n.name, n.value) && (O[n.name] = ij(r, w, ip(n.name), n.value, e, c))
                        }
                        if ("link" === w && a) {
                            let t = Array.from(r.styleSheets).find(t => t.href === e.href),
                                n = null;
                            t && (n = il(t)), n && (O.rel = null, O.href = null, O.crossorigin = null, O._cssText = ix(n, t.href))
                        }
                        if ("style" === w && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            let t = il(e.sheet);
                            t && (O._cssText = ix(t, iU(r)))
                        }
                        if ("input" === w || "textarea" === w || "select" === w || "option" === w) {
                            let t = i_(e),
                                n = iy(e, im(w), t),
                                r = e.checked;
                            if ("submit" !== t && "button" !== t && n) {
                                let r = iz(e, v, E, b, S, id({
                                    type: t,
                                    tagName: im(w),
                                    maskInputOptions: l
                                }));
                                O.value = ih({
                                    isMasked: r,
                                    element: e,
                                    value: n,
                                    maskInputFn: u
                                })
                            }
                            r && (O.checked = r)
                        }
                        if ("option" === w && (e.selected && !l.select ? O.selected = !0 : delete O.selected), "canvas" === w && f) {
                            if ("2d" === e.__context) ! function(e) {
                                let t = e.getContext("2d");
                                if (!t) return !0;
                                for (let n = 0; n < e.width; n += 50)
                                    for (let r = 0; r < e.height; r += 50) {
                                        let i = t.getImageData;
                                        if (new Uint32Array((ig in i ? i[ig] : i).call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(e => 0 !== e)) return !1
                                    }
                                return !0
                            }(e) && (O.rr_dataURL = e.toDataURL(d.type, d.quality));
                            else if (!("__context" in e)) {
                                let t = e.toDataURL(d.type, d.quality),
                                    n = r.createElement("canvas");
                                n.width = e.width, n.height = e.height, t !== n.toDataURL(d.type, d.quality) && (O.rr_dataURL = t)
                            }
                        }
                        if ("img" === w && h) {
                            g || (_ = (g = r.createElement("canvas")).getContext("2d"));
                            let t = e.currentSrc || e.getAttribute("src") || "<unknown-src>",
                                n = e.crossOrigin,
                                i = () => {
                                    e.removeEventListener("load", i);
                                    try {
                                        g.width = e.naturalWidth, g.height = e.naturalHeight, _.drawImage(e, 0, 0), O.rr_dataURL = g.toDataURL(d.type, d.quality)
                                    } catch (n) {
                                        if ("anonymous" !== e.crossOrigin) {
                                            e.crossOrigin = "anonymous", e.complete && 0 !== e.naturalWidth ? i() : e.addEventListener("load", i);
                                            return
                                        }
                                        console.warn(`Cannot inline img src=${t}! Error: ${n}`)
                                    }
                                    "anonymous" === e.crossOrigin && (n ? O.crossOrigin = n : e.removeAttribute("crossorigin"))
                                };
                            e.complete && 0 !== e.naturalWidth ? i() : e.addEventListener("load", i)
                        }
                        if (("audio" === w || "video" === w) && (O.rr_mediaState = e.paused ? "paused" : "played", O.rr_mediaCurrentTime = e.currentTime), !m && (e.scrollLeft && (O.rr_scrollLeft = e.scrollLeft), e.scrollTop && (O.rr_scrollTop = e.scrollTop)), T) {
                            let {
                                width: t,
                                height: n
                            } = e.getBoundingClientRect();
                            O = {
                                class: O.class,
                                rr_width: `${t}px`,
                                rr_height: `${n}px`
                            }
                        }
                        "iframe" !== w || p(O.src) || (T || iw(e) || (O.rr_src = O.src), delete O.src);
                        try {
                            customElements.get(w) && (n = !0)
                        } catch (e) {}
                        return {
                            type: is.Element,
                            tagName: w,
                            attributes: O,
                            childNodes: [],
                            isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                            needBlock: T,
                            rootId: y,
                            isCustom: n
                        }
                    }(e, {
                        doc: n,
                        blockClass: i,
                        blockSelector: s,
                        unblockSelector: o,
                        inlineStylesheet: f,
                        maskAttributeFn: l,
                        maskInputOptions: p,
                        maskInputFn: y,
                        dataURLOptions: v,
                        inlineImages: b,
                        recordCanvas: E,
                        keepIframeSrcFn: S,
                        newlyAddedElement: T,
                        rootId: w,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: d,
                        unmaskTextSelector: h
                    });
                case e.TEXT_NODE:
                    return function(e, t) {
                        let {
                            maskAllText: n,
                            maskTextClass: r,
                            unmaskTextClass: i,
                            maskTextSelector: s,
                            unmaskTextSelector: o,
                            maskTextFn: a,
                            maskInputOptions: l,
                            maskInputFn: c,
                            rootId: u
                        } = t, d = e.parentNode && e.parentNode.tagName, h = e.textContent, f = "STYLE" === d || void 0, p = "SCRIPT" === d || void 0, m = "TEXTAREA" === d || void 0;
                        if (f && h) {
                            try {
                                e.nextSibling || e.previousSibling || e.parentNode.sheet ? .cssRules && (h = il(e.parentNode.sheet))
                            } catch (t) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                            }
                            h = ix(h, iU(t.doc))
                        }
                        p && (h = "SCRIPT_PLACEHOLDER");
                        let g = iz(e, r, s, i, o, n);
                        return f || p || m || !h || !g || (h = a ? a(h, e.parentElement) : h.replace(/[\S]/g, "*")), m && h && (l.textarea || g) && (h = c ? c(h, e.parentNode) : h.replace(/[\S]/g, "*")), "OPTION" === d && h && (h = ih({
                            isMasked: iz(e, r, s, i, o, id({
                                type: null,
                                tagName: d,
                                maskInputOptions: l
                            })),
                            element: e,
                            value: h,
                            maskInputFn: c
                        })), {
                            type: is.Text,
                            textContent: h || "",
                            isStyle: f,
                            rootId: u
                        }
                    }(e, {
                        doc: n,
                        maskAllText: a,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: d,
                        unmaskTextSelector: h,
                        maskTextFn: m,
                        maskInputOptions: p,
                        maskInputFn: y,
                        rootId: w
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: is.CDATA,
                        textContent: "",
                        rootId: w
                    };
                case e.COMMENT_NODE:
                    return {
                        type: is.Comment,
                        textContent: e.textContent || "",
                        rootId: w
                    };
                default:
                    return !1
            }
        }(e, {
            doc: r,
            mirror: i,
            blockClass: s,
            blockSelector: o,
            maskAllText: l,
            unblockSelector: a,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: h,
            inlineStylesheet: p,
            maskInputOptions: m,
            maskAttributeFn: y,
            maskTextFn: v,
            maskInputFn: b,
            dataURLOptions: S,
            inlineImages: T,
            recordCanvas: w,
            keepIframeSrcFn: N,
            newlyAddedElement: A
        });
    if (!P) return console.warn(e, "not serialized"), null;
    n = i.hasNode(e) ? i.getId(e) : ! function(e, t) {
        if (t.comment && e.type === is.Comment) return !0;
        if (e.type === is.Element) {
            if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === iv(e.attributes.href))) return !0;
            else if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (iH(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === iH(e.attributes.name) || "icon" === iH(e.attributes.rel) || "apple-touch-icon" === iH(e.attributes.rel) || "shortcut icon" === iH(e.attributes.rel)))) return !0;
            else if ("meta" === e.tagName) {
                if (t.headMetaDescKeywords && iH(e.attributes.name).match(/^description|keywords$/)) return !0;
                else if (t.headMetaSocial && (iH(e.attributes.property).match(/^(og|twitter|fb):/) || iH(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === iH(e.attributes.name))) return !0;
                else if (t.headMetaRobots && ("robots" === iH(e.attributes.name) || "googlebot" === iH(e.attributes.name) || "bingbot" === iH(e.attributes.name))) return !0;
                else if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                else if (t.headMetaAuthorship && ("author" === iH(e.attributes.name) || "generator" === iH(e.attributes.name) || "framework" === iH(e.attributes.name) || "publisher" === iH(e.attributes.name) || "progid" === iH(e.attributes.name) || iH(e.attributes.property).match(/^article:/) || iH(e.attributes.property).match(/^product:/))) return !0;
                else if (t.headMetaVerification && ("google-site-verification" === iH(e.attributes.name) || "yandex-verification" === iH(e.attributes.name) || "csrf-token" === iH(e.attributes.name) || "p:domain_verify" === iH(e.attributes.name) || "verify-v1" === iH(e.attributes.name) || "verification" === iH(e.attributes.name) || "shopify-checkout-api-token" === iH(e.attributes.name))) return !0
            }
        }
        return !1
    }(P, E) && (x || P.type !== is.Text || P.isStyle || P.textContent.replace(/^\s+|\s+$/gm, "").length) ? ik() : -2;
    let D = Object.assign(P, {
        id: n
    });
    if (i.add(e, D), -2 === n) return null;
    O && O(e);
    let M = !f;
    if (D.type === is.Element) {
        M = M && !D.needBlock, delete D.needBlock;
        let t = e.shadowRoot;
        t && ia(t) && (D.isShadowHost = !0)
    }
    if ((D.type === is.Document || D.type === is.Element) && M) {
        E.headWhitespace && D.type === is.Element && "head" === D.tagName && (x = !1);
        let t = {
            doc: r,
            mirror: i,
            blockClass: s,
            blockSelector: o,
            maskAllText: l,
            unblockSelector: a,
            maskTextClass: c,
            unmaskTextClass: u,
            maskTextSelector: d,
            unmaskTextSelector: h,
            skipChild: f,
            inlineStylesheet: p,
            maskInputOptions: m,
            maskAttributeFn: y,
            maskTextFn: v,
            maskInputFn: b,
            slimDOMOptions: E,
            dataURLOptions: S,
            inlineImages: T,
            recordCanvas: w,
            preserveWhiteSpace: x,
            onSerialize: O,
            onIframeLoad: C,
            iframeLoadTimeout: k,
            onStylesheetLoad: R,
            stylesheetLoadTimeout: I,
            keepIframeSrcFn: N
        };
        for (let n of Array.from(e.childNodes)) {
            let e = iW(n, t);
            e && D.childNodes.push(e)
        }
        if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
            for (let n of Array.from(e.shadowRoot.childNodes)) {
                let r = iW(n, t);
                r && (ia(e.shadowRoot) && (r.isShadow = !0), D.childNodes.push(r))
            }
    }
    return e.parentNode && io(e.parentNode) && ia(e.parentNode) && (D.isShadow = !0), D.type !== is.Element || "iframe" !== D.tagName || i$(e, s, o, a) || function(e, t, n) {
        let r, i = e.contentWindow;
        if (!i) return;
        let s = !1;
        try {
            r = i.document.readyState
        } catch (e) {
            return
        }
        if ("complete" !== r) {
            let r = iS(() => {
                s || (t(), s = !0)
            }, n);
            e.addEventListener("load", () => {
                iT(r), s = !0, t()
            });
            return
        }
        let o = "about:blank";
        if (i.location.href !== o || e.src === o || "" === e.src) return iS(t, 0), e.addEventListener("load", t);
        e.addEventListener("load", t)
    }(e, () => {
        let t = iw(e);
        if (t && C) {
            let n = iW(t, {
                doc: t,
                mirror: i,
                blockClass: s,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: l,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: d,
                unmaskTextSelector: h,
                skipChild: !1,
                inlineStylesheet: p,
                maskInputOptions: m,
                maskAttributeFn: y,
                maskTextFn: v,
                maskInputFn: b,
                slimDOMOptions: E,
                dataURLOptions: S,
                inlineImages: T,
                recordCanvas: w,
                preserveWhiteSpace: x,
                onSerialize: O,
                onIframeLoad: C,
                iframeLoadTimeout: k,
                onStylesheetLoad: R,
                stylesheetLoadTimeout: I,
                keepIframeSrcFn: N
            });
            n && C(e, n)
        }
    }, k), D.type === is.Element && "link" === D.tagName && "string" == typeof D.attributes.rel && ("stylesheet" === D.attributes.rel || "preload" === D.attributes.rel && "string" == typeof D.attributes.href && "css" === iv(D.attributes.href)) && function(e, t, n) {
        let r, i = !1;
        try {
            r = e.sheet
        } catch (e) {
            return
        }
        if (r) return;
        let s = iS(() => {
            i || (t(), i = !0)
        }, n);
        e.addEventListener("load", () => {
            iT(s), i = !0, t()
        })
    }(e, () => {
        if (R) {
            let t = iW(e, {
                doc: r,
                mirror: i,
                blockClass: s,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: l,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: d,
                unmaskTextSelector: h,
                skipChild: !1,
                inlineStylesheet: p,
                maskInputOptions: m,
                maskAttributeFn: y,
                maskTextFn: v,
                maskInputFn: b,
                slimDOMOptions: E,
                dataURLOptions: S,
                inlineImages: T,
                recordCanvas: w,
                preserveWhiteSpace: x,
                onSerialize: O,
                onIframeLoad: C,
                iframeLoadTimeout: k,
                onStylesheetLoad: R,
                stylesheetLoadTimeout: I,
                keepIframeSrcFn: N
            });
            t && R(e, t)
        }
    }, I), D
}

function iG(e, t, n = document) {
    let r = {
        capture: !0,
        passive: !0
    };
    return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
}
let iJ = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    iV = {
        map: {},
        getId: () => (console.error(iJ), -1),
        getNode: () => (console.error(iJ), null),
        removeNodeFromMap() {
            console.error(iJ)
        },
        has: () => (console.error(iJ), !1),
        reset() {
            console.error(iJ)
        }
    };

function iK(e, t, n = {}) {
    let r = null,
        i = 0;
    return function(...s) {
        let o = Date.now();
        i || !1 !== n.leading || (i = o);
        let a = t - (o - i),
            l = this;
        a <= 0 || a > t ? (r && (function(...e) {
            sn("clearTimeout")(...e)
        }(r), r = null), i = o, e.apply(l, s)) : r || !1 === n.trailing || (r = sr(() => {
            i = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(l, s)
        }, a))
    }
}

function iX(e, t, n) {
    try {
        if (!(t in e)) return () => {};
        let r = e[t],
            i = n(r);
        return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
            __rrweb_original__: {
                enumerable: !1,
                value: r
            }
        })), e[t] = i, () => {
            e[t] = r
        }
    } catch {
        return () => {}
    }
}
"undefined" != typeof window && window.Proxy && window.Reflect && (iV = new Proxy(iV, {
    get: (e, t, n) => ("map" === t && console.error(iJ), Reflect.get(e, t, n))
}));
let iQ = Date.now;

function iY(e) {
    let t = e.document;
    return {
        left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : t ? .documentElement.scrollLeft || t ? .body ? .parentElement ? .scrollLeft || t ? .body ? .scrollLeft || 0,
        top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : t ? .documentElement.scrollTop || t ? .body ? .parentElement ? .scrollTop || t ? .body ? .scrollTop || 0
    }
}

function iZ() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
}

function i0() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
}

function i1(e) {
    if (!e) return null;
    try {
        return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
    } catch (e) {
        return null
    }
}

function i2(e, t, n, r, i) {
    if (!e) return !1;
    let s = i1(e);
    if (!s) return !1;
    let o = iq(t, n);
    if (!i) {
        let e = r && s.matches(r);
        return o(s) && !e
    }
    let a = iB(s, o),
        l = -1;
    return !(a < 0) && (r && (l = iB(s, iq(null, r))), a > -1 && l < 0 || a < l)
}

function i5(e, t) {
    return -2 === t.getId(e)
}

function i3(e) {
    return !!e.changedTouches
}

function i4(e, t) {
    return !!("IFRAME" === e.nodeName && t.getMeta(e))
}

function i6(e, t) {
    return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
}

function i8(e) {
    return !!e ? .shadowRoot
}
/[1-9][0-9]{12}/.test(Date.now().toString()) || (iQ = () => new Date().getTime());
class i9 {
    constructor() {
        this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
    }
    getId(e) {
        return this.styleIDMap.get(e) ? ? -1
    }
    has(e) {
        return this.styleIDMap.has(e)
    }
    add(e, t) {
        let n;
        return this.has(e) ? this.getId(e) : (n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), n)
    }
    getStyle(e) {
        return this.idStyleMap.get(e) || null
    }
    reset() {
        this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
    }
    generateId() {
        return this.id++
    }
}

function i7(e) {
    let t = null;
    return e.getRootNode ? .() ? .nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
}

function se(e) {
    let t = e.ownerDocument;
    return !!t && (t.contains(e) || function(e) {
        let t = e.ownerDocument;
        if (!t) return !1;
        let n = function(e) {
            let t, n = e;
            for (; t = i7(n);) n = t;
            return n
        }(e);
        return t.contains(n)
    }(e))
}
let st = {};

function sn(e) {
    let t = st[e];
    if (t) return t;
    let n = window.document,
        r = window[e];
    if (n && "function" == typeof n.createElement) try {
        let t = n.createElement("iframe");
        t.hidden = !0, n.head.appendChild(t);
        let i = t.contentWindow;
        i && i[e] && (r = i[e]), n.head.removeChild(t)
    } catch (e) {}
    return st[e] = r.bind(window)
}

function sr(...e) {
    return sn("setTimeout")(...e)
}
var si = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(si || {}),
    ss = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(ss || {}),
    so = (e => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(so || {}),
    sa = (e => (e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(sa || {}),
    sl = (e => (e[e.Play = 0] = "Play", e[e.Pause = 1] = "Pause", e[e.Seeked = 2] = "Seeked", e[e.VolumeChange = 3] = "VolumeChange", e[e.RateChange = 4] = "RateChange", e))(sl || {});

function sc(e) {
    try {
        return e.contentDocument
    } catch (e) {}
}
class su {
    constructor() {
        this.length = 0, this.head = null, this.tail = null
    }
    get(e) {
        if (e >= this.length) throw Error("Position outside of list range");
        let t = this.head;
        for (let n = 0; n < e; n++) t = t ? .next || null;
        return t
    }
    addNode(e) {
        let t = {
            value: e,
            previous: null,
            next: null
        };
        if (e.__ln = t, e.previousSibling && "__ln" in e.previousSibling) {
            let n = e.previousSibling.__ln.next;
            t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && (n.previous = t)
        } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
            let n = e.nextSibling.__ln.previous;
            t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t)
        } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
        null === t.next && (this.tail = t), this.length++
    }
    removeNode(e) {
        let t = e.__ln;
        this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
    }
}
let sd = (e, t) => `${e}@${t}`;
class sh {
    constructor() {
        this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
            e.forEach(this.processMutation), this.emit()
        }, this.emit = () => {
            if (this.frozen || this.locked) return;
            let e = [],
                t = new Set,
                n = new su,
                r = e => {
                    let t = e,
                        n = -2;
                    for (; - 2 === n;) n = (t = t && t.nextSibling) && this.mirror.getId(t);
                    return n
                },
                i = i => {
                    if (!i.parentNode || !se(i)) return;
                    let s = io(i.parentNode) ? this.mirror.getId(i7(i)) : this.mirror.getId(i.parentNode),
                        o = r(i);
                    if (-1 === s || -1 === o) return n.addNode(i);
                    let a = iW(i, {
                        doc: this.doc,
                        mirror: this.mirror,
                        blockClass: this.blockClass,
                        blockSelector: this.blockSelector,
                        maskAllText: this.maskAllText,
                        unblockSelector: this.unblockSelector,
                        maskTextClass: this.maskTextClass,
                        unmaskTextClass: this.unmaskTextClass,
                        maskTextSelector: this.maskTextSelector,
                        unmaskTextSelector: this.unmaskTextSelector,
                        skipChild: !0,
                        newlyAddedElement: !0,
                        inlineStylesheet: this.inlineStylesheet,
                        maskInputOptions: this.maskInputOptions,
                        maskAttributeFn: this.maskAttributeFn,
                        maskTextFn: this.maskTextFn,
                        maskInputFn: this.maskInputFn,
                        slimDOMOptions: this.slimDOMOptions,
                        dataURLOptions: this.dataURLOptions,
                        recordCanvas: this.recordCanvas,
                        inlineImages: this.inlineImages,
                        onSerialize: e => {
                            i4(e, this.mirror) && !i2(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e), i6(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), i8(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                        },
                        onIframeLoad: (e, t) => {
                            i2(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(e, t), e.contentWindow && this.canvasManager.addWindow(e.contentWindow), this.shadowDomManager.observeAttachShadow(e))
                        },
                        onStylesheetLoad: (e, t) => {
                            this.stylesheetManager.attachLinkElement(e, t)
                        }
                    });
                    a && (e.push({
                        parentId: s,
                        nextId: o,
                        node: a
                    }), t.add(a.id))
                };
            for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            for (let e of this.movedSet)(!sp(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
            for (let e of this.addedSet) sm(this.droppedSet, e) || sp(this.removes, e, this.mirror) ? sm(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
            let s = null;
            for (; n.length;) {
                let e = null;
                if (s) {
                    let t = this.mirror.getId(s.value.parentNode),
                        n = r(s.value); - 1 !== t && -1 !== n && (e = s)
                }
                if (!e) {
                    let t = n.tail;
                    for (; t;) {
                        let n = t;
                        if (t = t.previous, n) {
                            let t = this.mirror.getId(n.value.parentNode);
                            if (-1 === r(n.value)) continue;
                            if (-1 !== t) {
                                e = n;
                                break
                            } {
                                let t = n.value;
                                if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                    let r = t.parentNode.host;
                                    if (-1 !== this.mirror.getId(r)) {
                                        e = n;
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                if (!e) {
                    for (; n.head;) n.removeNode(n.head.value);
                    break
                }
                s = e.previous, n.removeNode(e.value), i(e.value)
            }
            let o = {
                texts: this.texts.map(e => ({
                    id: this.mirror.getId(e.node),
                    value: e.value
                })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                attributes: this.attributes.map(e => {
                    let {
                        attributes: t
                    } = e;
                    if ("string" == typeof t.style) {
                        let n = JSON.stringify(e.styleDiff),
                            r = JSON.stringify(e._unchangedStyles);
                        n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                    }
                    return {
                        id: this.mirror.getId(e.node),
                        attributes: t
                    }
                }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                removes: this.removes,
                adds: e
            };
            (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(o))
        }, this.processMutation = e => {
            if (!i5(e.target, this.mirror)) switch (e.type) {
                case "characterData":
                    {
                        let t = e.target.textContent;i2(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                            value: iz(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, i1(e.target)) : t.replace(/[\S]/g, "*") : t,
                            node: e.target
                        });
                        break
                    }
                case "attributes":
                    {
                        let t = e.target,
                            n = e.attributeName,
                            r = e.target.getAttribute(n);
                        if ("value" === n) {
                            let n = i_(t),
                                i = t.tagName;
                            r = iy(t, i, n);
                            let s = id({
                                maskInputOptions: this.maskInputOptions,
                                tagName: i,
                                type: n
                            });
                            r = ih({
                                isMasked: iz(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                                element: t,
                                value: r,
                                maskInputFn: this.maskInputFn
                            })
                        }
                        if (i2(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue) return;
                        let i = this.attributeMap.get(e.target);
                        if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                            if (sc(t)) return;
                            n = "rr_src"
                        }
                        if (i || (i = {
                                node: e.target,
                                attributes: {},
                                styleDiff: {},
                                _unchangedStyles: {}
                            }, this.attributes.push(i), this.attributeMap.set(e.target, i)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !iF(t.tagName, n) && (i.attributes[n] = ij(this.doc, ip(t.tagName), ip(n), r, t, this.maskAttributeFn), "style" === n)) {
                            if (!this.unattachedDoc) try {
                                this.unattachedDoc = document.implementation.createHTMLDocument()
                            } catch (e) {
                                this.unattachedDoc = this.doc
                            }
                            let n = this.unattachedDoc.createElement("span");
                            for (let r of (e.oldValue && n.setAttribute("style", e.oldValue), Array.from(t.style))) {
                                let e = t.style.getPropertyValue(r),
                                    s = t.style.getPropertyPriority(r);
                                e !== n.style.getPropertyValue(r) || s !== n.style.getPropertyPriority(r) ? "" === s ? i.styleDiff[r] = e : i.styleDiff[r] = [e, s] : i._unchangedStyles[r] = [e, s]
                            }
                            for (let e of Array.from(n.style)) "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                        }
                        break
                    }
                case "childList":
                    if (i2(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                    e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                        let n = this.mirror.getId(t),
                            r = io(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                        i2(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || i5(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (sf(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || function e(t, n) {
                            if (io(t)) return !1;
                            let r = n.getId(t);
                            return !n.has(r) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, n))
                        }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[sd(n, r)] ? sf(this.movedSet, t) : this.removes.push({
                            parentId: r,
                            id: n,
                            isShadow: !!(io(e.target) && ia(e.target)) || void 0
                        })), this.mapRemoves.push(t))
                    })
            }
        }, this.genAdds = (e, t) => {
            if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                if (this.mirror.hasNode(e)) {
                    if (i5(e, this.mirror)) return;
                    this.movedSet.add(e);
                    let n = null;
                    t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[sd(this.mirror.getId(e), n)] = !0)
                } else this.addedSet.add(e), this.droppedSet.delete(e);
                !i2(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)), i8(e) && e.shadowRoot.childNodes.forEach(t => {
                    this.processedNodeManager.add(t, this), this.genAdds(t, e)
                }))
            }
        }
    }
    init(e) {
        ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
            this[t] = e[t]
        })
    }
    freeze() {
        this.frozen = !0, this.canvasManager.freeze()
    }
    unfreeze() {
        this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
    }
    isFrozen() {
        return this.frozen
    }
    lock() {
        this.locked = !0, this.canvasManager.lock()
    }
    unlock() {
        this.locked = !1, this.canvasManager.unlock(), this.emit()
    }
    reset() {
        this.shadowDomManager.reset(), this.canvasManager.reset()
    }
}

function sf(e, t) {
    e.delete(t), t.childNodes.forEach(t => sf(e, t))
}

function sp(e, t, n) {
    return 0 !== e.length && function(e, t, n) {
        let r = t.parentNode;
        for (; r;) {
            let t = n.getId(r);
            if (e.some(e => e.id === t)) return !0;
            r = r.parentNode
        }
        return !1
    }(e, t, n)
}

function sm(e, t) {
    return 0 !== e.size && function e(t, n) {
        let {
            parentNode: r
        } = n;
        return !!r && (!!t.has(r) || e(t, r))
    }(e, t)
}
let sg = e => y ? (...t) => {
        try {
            return e(...t)
        } catch (e) {
            if (y && !0 === y(e)) return () => {};
            throw e
        }
    } : e,
    s_ = [];

function sy(e) {
    try {
        if ("composedPath" in e) {
            let t = e.composedPath();
            if (t.length) return t[0]
        } else if ("path" in e && e.path.length) return e.path[0]
    } catch {}
    return e && e.target
}

function sv(e, t) {
    let n = new sh;
    s_.push(n), n.init(e);
    let r = window.MutationObserver || window.__rrMutationObserver,
        i = window ? .Zone ? .__symbol__ ? .("MutationObserver");
    i && window[i] && (r = window[i]);
    let s = new r(sg(t => {
        e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t)
    }));
    return s.observe(t, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
    }), s
}

function sb({
    scrollCb: e,
    doc: t,
    mirror: n,
    blockClass: r,
    blockSelector: i,
    unblockSelector: s,
    sampling: o
}) {
    return iG("scroll", sg(iK(sg(o => {
        let a = sy(o);
        if (!a || i2(a, r, i, s, !0)) return;
        let l = n.getId(a);
        if (a === t && t.defaultView) {
            let n = iY(t.defaultView);
            e({
                id: l,
                x: n.left,
                y: n.top
            })
        } else e({
            id: l,
            x: a.scrollLeft,
            y: a.scrollTop
        })
    }), o.scroll || 100)), t)
}
let sE = ["INPUT", "TEXTAREA", "SELECT"],
    sS = new WeakMap;

function sT(e) {
    var t = [];
    if (sk("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || sk("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || sk("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || sk("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
        let n = Array.from(e.parentRule.cssRules).indexOf(e);
        t.unshift(n)
    } else if (e.parentStyleSheet) {
        let n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
        t.unshift(n)
    }
    return t
}

function sw(e, t, n) {
    let r, i;
    return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e), {
        styleId: i,
        id: r
    }) : {}
}

function sO({
    mirror: e,
    stylesheetManager: t
}, n) {
    let r = null;
    r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
    let i = "#document" === n.nodeName ? n.defaultView ? .Document : n.ownerDocument ? .defaultView ? .ShadowRoot,
        s = i ? .prototype ? Object.getOwnPropertyDescriptor(i ? .prototype, "adoptedStyleSheets") : void 0;
    return null !== r && -1 !== r && i && s ? (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: s.configurable,
        enumerable: s.enumerable,
        get() {
            return s.get ? .call(this)
        },
        set(e) {
            let n = s.set ? .call(this, e);
            if (null !== r && -1 !== r) try {
                t.adoptStyleSheets(e, r)
            } catch (e) {}
            return n
        }
    }), sg(() => {
        Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: s.configurable,
            enumerable: s.enumerable,
            get: s.get,
            set: s.set
        })
    })) : () => {}
}

function sC(e, t = {}) {
    let n, r = e.doc.defaultView;
    if (!r) return () => {};
    e.recordDOM && (n = sv(e, e.doc));
    let i = function({
            mousemoveCb: e,
            sampling: t,
            doc: n,
            mirror: r
        }) {
            let i;
            if (!1 === t.mousemove) return () => {};
            let s = "number" == typeof t.mousemove ? t.mousemove : 50,
                o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                a = [],
                l = iK(sg(t => {
                    let n = Date.now() - i;
                    e(a.map(e => (e.timeOffset -= n, e)), t), a = [], i = null
                }), o),
                c = sg(iK(sg(e => {
                    let t = sy(e),
                        {
                            clientX: n,
                            clientY: s
                        } = i3(e) ? e.changedTouches[0] : e;
                    i || (i = iQ()), a.push({
                        x: n,
                        y: s,
                        id: r.getId(t),
                        timeOffset: iQ() - i
                    }), l("undefined" != typeof DragEvent && e instanceof DragEvent ? ss.Drag : e instanceof MouseEvent ? ss.MouseMove : ss.TouchMove)
                }), s, {
                    trailing: !1
                })),
                u = [iG("mousemove", c, n), iG("touchmove", c, n), iG("drag", c, n)];
            return sg(() => {
                u.forEach(e => e())
            })
        }(e),
        s = function({
            mouseInteractionCb: e,
            doc: t,
            mirror: n,
            blockClass: r,
            blockSelector: i,
            unblockSelector: s,
            sampling: o
        }) {
            if (!1 === o.mouseInteraction) return () => {};
            let a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                l = [],
                c = null,
                u = t => o => {
                    let a = sy(o);
                    if (i2(a, r, i, s, !0)) return;
                    let l = null,
                        u = t;
                    if ("pointerType" in o) {
                        switch (o.pointerType) {
                            case "mouse":
                                l = sa.Mouse;
                                break;
                            case "touch":
                                l = sa.Touch;
                                break;
                            case "pen":
                                l = sa.Pen
                        }
                        l === sa.Touch ? so[t] === so.MouseDown ? u = "TouchStart" : so[t] === so.MouseUp && (u = "TouchEnd") : sa.Pen
                    } else i3(o) && (l = sa.Touch);
                    null !== l ? (c = l, (u.startsWith("Touch") && l === sa.Touch || u.startsWith("Mouse") && l === sa.Mouse) && (l = null)) : so[t] === so.Click && (l = c, c = null);
                    let d = i3(o) ? o.changedTouches[0] : o;
                    if (!d) return;
                    let h = n.getId(a),
                        {
                            clientX: f,
                            clientY: p
                        } = d;
                    sg(e)({
                        type: so[u],
                        id: h,
                        x: f,
                        y: p,
                        ...null !== l && {
                            pointerType: l
                        }
                    })
                };
            return Object.keys(so).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e]).forEach(e => {
                let n = ip(e),
                    r = u(e);
                if (window.PointerEvent) switch (so[e]) {
                    case so.MouseDown:
                    case so.MouseUp:
                        n = n.replace("mouse", "pointer");
                        break;
                    case so.TouchStart:
                    case so.TouchEnd:
                        return
                }
                l.push(iG(n, r, t))
            }), sg(() => {
                l.forEach(e => e())
            })
        }(e),
        o = sb(e),
        a = function({
            viewportResizeCb: e
        }, {
            win: t
        }) {
            let n = -1,
                r = -1;
            return iG("resize", sg(iK(sg(() => {
                let t = iZ(),
                    i = i0();
                (n !== t || r !== i) && (e({
                    width: Number(i),
                    height: Number(t)
                }), n = t, r = i)
            }), 200)), t)
        }(e, {
            win: r
        }),
        l = function({
            inputCb: e,
            doc: t,
            mirror: n,
            blockClass: r,
            blockSelector: i,
            unblockSelector: s,
            ignoreClass: o,
            ignoreSelector: a,
            maskInputOptions: l,
            maskInputFn: c,
            sampling: u,
            userTriggeredOnInput: d,
            maskTextClass: h,
            unmaskTextClass: f,
            maskTextSelector: p,
            unmaskTextSelector: m
        }) {
            function g(e) {
                let n = sy(e),
                    u = e.isTrusted,
                    g = n && im(n.tagName);
                if ("OPTION" === g && (n = n.parentElement), !n || !g || 0 > sE.indexOf(g) || i2(n, r, i, s, !0)) return;
                let y = n;
                if (y.classList.contains(o) || a && y.matches(a)) return;
                let v = i_(n),
                    b = iy(y, g, v),
                    E = !1,
                    S = id({
                        maskInputOptions: l,
                        tagName: g,
                        type: v
                    }),
                    T = iz(n, h, p, f, m, S);
                ("radio" === v || "checkbox" === v) && (E = n.checked), b = ih({
                    isMasked: T,
                    element: n,
                    value: b,
                    maskInputFn: c
                }), _(n, d ? {
                    text: b,
                    isChecked: E,
                    userTriggered: u
                } : {
                    text: b,
                    isChecked: E
                });
                let w = n.name;
                "radio" === v && w && E && t.querySelectorAll(`input[type="radio"][name="${w}"]`).forEach(e => {
                    if (e !== n) {
                        let t = ih({
                            isMasked: T,
                            element: e,
                            value: iy(e, g, v),
                            maskInputFn: c
                        });
                        _(e, d ? {
                            text: t,
                            isChecked: !E,
                            userTriggered: !1
                        } : {
                            text: t,
                            isChecked: !E
                        })
                    }
                })
            }

            function _(t, r) {
                let i = sS.get(t);
                if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                    sS.set(t, r);
                    let i = n.getId(t);
                    sg(e)({ ...r,
                        id: i
                    })
                }
            }
            let y = ("last" === u.input ? ["change"] : ["input", "change"]).map(e => iG(e, sg(g), t)),
                v = t.defaultView;
            if (!v) return () => {
                y.forEach(e => e())
            };
            let b = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value"),
                E = [
                    [v.HTMLInputElement.prototype, "value"],
                    [v.HTMLInputElement.prototype, "checked"],
                    [v.HTMLSelectElement.prototype, "value"],
                    [v.HTMLTextAreaElement.prototype, "value"],
                    [v.HTMLSelectElement.prototype, "selectedIndex"],
                    [v.HTMLOptionElement.prototype, "selected"]
                ];
            return b && b.set && y.push(...E.map(e => (function e(t, n, r, i, s = window) {
                let o = s.Object.getOwnPropertyDescriptor(t, n);
                return s.Object.defineProperty(t, n, i ? r : {
                    set(e) {
                        sr(() => {
                            r.set.call(this, e)
                        }, 0), o && o.set && o.set.call(this, e)
                    }
                }), () => e(t, n, o || {}, !0)
            })(e[0], e[1], {
                set() {
                    sg(g)({
                        target: this,
                        isTrusted: !1
                    })
                }
            }, !1, v))), sg(() => {
                y.forEach(e => e())
            })
        }(e),
        c = function({
            mediaInteractionCb: e,
            blockClass: t,
            blockSelector: n,
            unblockSelector: r,
            mirror: i,
            sampling: s,
            doc: o
        }) {
            let a = sg(o => iK(sg(s => {
                    let a = sy(s);
                    if (!a || i2(a, t, n, r, !0)) return;
                    let {
                        currentTime: l,
                        volume: c,
                        muted: u,
                        playbackRate: d
                    } = a;
                    e({
                        type: o,
                        id: i.getId(a),
                        currentTime: l,
                        volume: c,
                        muted: u,
                        playbackRate: d
                    })
                }), s.media || 500)),
                l = [iG("play", a(sl.Play), o), iG("pause", a(sl.Pause), o), iG("seeked", a(sl.Seeked), o), iG("volumechange", a(sl.VolumeChange), o), iG("ratechange", a(sl.RateChange), o)];
            return sg(() => {
                l.forEach(e => e())
            })
        }(e),
        u = () => {},
        d = () => {},
        h = () => {},
        f = () => {};
    e.recordDOM && (u = function({
        styleSheetRuleCb: e,
        mirror: t,
        stylesheetManager: n
    }, {
        win: r
    }) {
        let i, s;
        if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
        let o = r.CSSStyleSheet.prototype.insertRule;
        r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
            apply: sg((r, i, s) => {
                let [o, a] = s, {
                    id: l,
                    styleId: c
                } = sw(i, t, n.styleMirror);
                return (l && -1 !== l || c && -1 !== c) && e({
                    id: l,
                    styleId: c,
                    adds: [{
                        rule: o,
                        index: a
                    }]
                }), r.apply(i, s)
            })
        });
        let a = r.CSSStyleSheet.prototype.deleteRule;
        r.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
            apply: sg((r, i, s) => {
                let [o] = s, {
                    id: a,
                    styleId: l
                } = sw(i, t, n.styleMirror);
                return (a && -1 !== a || l && -1 !== l) && e({
                    id: a,
                    styleId: l,
                    removes: [{
                        index: o
                    }]
                }), r.apply(i, s)
            })
        }), r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(i, {
            apply: sg((r, i, s) => {
                let [o] = s, {
                    id: a,
                    styleId: l
                } = sw(i, t, n.styleMirror);
                return (a && -1 !== a || l && -1 !== l) && e({
                    id: a,
                    styleId: l,
                    replace: o
                }), r.apply(i, s)
            })
        })), r.CSSStyleSheet.prototype.replaceSync && (s = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(s, {
            apply: sg((r, i, s) => {
                let [o] = s, {
                    id: a,
                    styleId: l
                } = sw(i, t, n.styleMirror);
                return (a && -1 !== a || l && -1 !== l) && e({
                    id: a,
                    styleId: l,
                    replaceSync: o
                }), r.apply(i, s)
            })
        }));
        let l = {};
        sR("CSSGroupingRule") ? l.CSSGroupingRule = r.CSSGroupingRule : (sR("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule), sR("CSSConditionRule") && (l.CSSConditionRule = r.CSSConditionRule), sR("CSSSupportsRule") && (l.CSSSupportsRule = r.CSSSupportsRule));
        let c = {};
        return Object.entries(l).forEach(([r, i]) => {
            c[r] = {
                insertRule: i.prototype.insertRule,
                deleteRule: i.prototype.deleteRule
            }, i.prototype.insertRule = new Proxy(c[r].insertRule, {
                apply: sg((r, i, s) => {
                    let [o, a] = s, {
                        id: l,
                        styleId: c
                    } = sw(i.parentStyleSheet, t, n.styleMirror);
                    return (l && -1 !== l || c && -1 !== c) && e({
                        id: l,
                        styleId: c,
                        adds: [{
                            rule: o,
                            index: [...sT(i), a || 0]
                        }]
                    }), r.apply(i, s)
                })
            }), i.prototype.deleteRule = new Proxy(c[r].deleteRule, {
                apply: sg((r, i, s) => {
                    let [o] = s, {
                        id: a,
                        styleId: l
                    } = sw(i.parentStyleSheet, t, n.styleMirror);
                    return (a && -1 !== a || l && -1 !== l) && e({
                        id: a,
                        styleId: l,
                        removes: [{
                            index: [...sT(i), o]
                        }]
                    }), r.apply(i, s)
                })
            })
        }), sg(() => {
            r.CSSStyleSheet.prototype.insertRule = o, r.CSSStyleSheet.prototype.deleteRule = a, i && (r.CSSStyleSheet.prototype.replace = i), s && (r.CSSStyleSheet.prototype.replaceSync = s), Object.entries(l).forEach(([e, t]) => {
                t.prototype.insertRule = c[e].insertRule, t.prototype.deleteRule = c[e].deleteRule
            })
        })
    }(e, {
        win: r
    }), d = sO(e, e.doc), h = function({
        styleDeclarationCb: e,
        mirror: t,
        ignoreCSSAttributes: n,
        stylesheetManager: r
    }, {
        win: i
    }) {
        let s = i.CSSStyleDeclaration.prototype.setProperty;
        i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
            apply: sg((i, o, a) => {
                let [l, c, u] = a;
                if (n.has(l)) return s.apply(o, [l, c, u]);
                let {
                    id: d,
                    styleId: h
                } = sw(o.parentRule ? .parentStyleSheet, t, r.styleMirror);
                return (d && -1 !== d || h && -1 !== h) && e({
                    id: d,
                    styleId: h,
                    set: {
                        property: l,
                        value: c,
                        priority: u
                    },
                    index: sT(o.parentRule)
                }), i.apply(o, a)
            })
        });
        let o = i.CSSStyleDeclaration.prototype.removeProperty;
        return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
            apply: sg((i, s, a) => {
                let [l] = a;
                if (n.has(l)) return o.apply(s, [l]);
                let {
                    id: c,
                    styleId: u
                } = sw(s.parentRule ? .parentStyleSheet, t, r.styleMirror);
                return (c && -1 !== c || u && -1 !== u) && e({
                    id: c,
                    styleId: u,
                    remove: {
                        property: l
                    },
                    index: sT(s.parentRule)
                }), i.apply(s, a)
            })
        }), sg(() => {
            i.CSSStyleDeclaration.prototype.setProperty = s, i.CSSStyleDeclaration.prototype.removeProperty = o
        })
    }(e, {
        win: r
    }), e.collectFonts && (f = function({
        fontCb: e,
        doc: t
    }) {
        let n = t.defaultView;
        if (!n) return () => {};
        let r = [],
            i = new WeakMap,
            s = n.FontFace;
        n.FontFace = function(e, t, n) {
            let r = new s(e, t, n);
            return i.set(r, {
                family: e,
                buffer: "string" != typeof t,
                descriptors: n,
                fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
            }), r
        };
        let o = iX(t.fonts, "add", function(t) {
            return function(n) {
                return sr(sg(() => {
                    let t = i.get(n);
                    t && (e(t), i.delete(n))
                }), 0), t.apply(this, [n])
            }
        });
        return r.push(() => {
            n.FontFace = s
        }), r.push(o), sg(() => {
            r.forEach(e => e())
        })
    }(e)));
    let p = function(e) {
            let {
                doc: t,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: s,
                selectionCb: o
            } = e, a = !0, l = sg(() => {
                let e = t.getSelection();
                if (!e || a && e ? .isCollapsed) return;
                a = e.isCollapsed || !1;
                let l = [],
                    c = e.rangeCount || 0;
                for (let t = 0; t < c; t++) {
                    let {
                        startContainer: o,
                        startOffset: a,
                        endContainer: c,
                        endOffset: u
                    } = e.getRangeAt(t);
                    i2(o, r, i, s, !0) || i2(c, r, i, s, !0) || l.push({
                        start: n.getId(o),
                        startOffset: a,
                        end: n.getId(c),
                        endOffset: u
                    })
                }
                o({
                    ranges: l
                })
            });
            return l(), iG("selectionchange", l)
        }(e),
        m = function({
            doc: e,
            customElementCb: t
        }) {
            let n = e.defaultView;
            return n && n.customElements ? iX(n.customElements, "define", function(e) {
                return function(n, r, i) {
                    try {
                        t({
                            define: {
                                name: n
                            }
                        })
                    } catch (e) {}
                    return e.apply(this, [n, r, i])
                }
            }) : () => {}
        }(e),
        g = [];
    for (let t of e.plugins) g.push(t.observer(t.callback, r, t.options));
    return sg(() => {
        s_.forEach(e => e.reset()), n ? .disconnect(), i(), s(), o(), a(), l(), c(), u(), d(), h(), f(), p(), m(), g.forEach(e => e())
    })
}

function sk(e) {
    return void 0 !== window[e]
}

function sR(e) {
    return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
}
class sI {
    constructor(e) {
        this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
    }
    getId(e, t, n, r) {
        let i = n || this.getIdToRemoteIdMap(e),
            s = r || this.getRemoteIdToIdMap(e),
            o = i.get(t);
        return o || (o = this.generateIdFn(), i.set(t, o), s.set(o, t)), o
    }
    getIds(e, t) {
        let n = this.getIdToRemoteIdMap(e),
            r = this.getRemoteIdToIdMap(e);
        return t.map(t => this.getId(e, t, n, r))
    }
    getRemoteId(e, t, n) {
        let r = n || this.getRemoteIdToIdMap(e);
        if ("number" != typeof t) return t;
        let i = r.get(t);
        return i || -1
    }
    getRemoteIds(e, t) {
        let n = this.getRemoteIdToIdMap(e);
        return t.map(t => this.getRemoteId(e, t, n))
    }
    reset(e) {
        if (!e) {
            this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
            return
        }
        this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
    }
    getIdToRemoteIdMap(e) {
        let t = this.iframeIdToRemoteIdMap.get(e);
        return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
    }
    getRemoteIdToIdMap(e) {
        let t = this.iframeRemoteIdToIdMap.get(e);
        return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
    }
}
class sN {
    constructor() {
        this.crossOriginIframeMirror = new sI(ik), this.crossOriginIframeRootIdMap = new WeakMap
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
}
class sA {
    constructor(e) {
        this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new sI(ik), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new sI(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
    }
    addIframe(e) {
        this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
    }
    addLoadListener(e) {
        this.loadListener = e
    }
    attachIframe(e, t) {
        this.mutationCb({
            adds: [{
                parentId: this.mirror.getId(e),
                nextId: null,
                node: t
            }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0
        }), this.recordCrossOriginIframes && e.contentWindow ? .addEventListener("message", this.handleMessage.bind(this)), this.loadListener ? .(e);
        let n = sc(e);
        n && n.adoptedStyleSheets && n.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(n.adoptedStyleSheets, this.mirror.getId(n))
    }
    handleMessage(e) {
        if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
        let t = this.crossOriginIframeMap.get(e.source);
        if (!t) return;
        let n = this.transformCrossOriginEvent(t, e.data.event);
        n && this.wrappedEmit(n, e.data.isCheckout)
    }
    transformCrossOriginEvent(e, t) {
        switch (t.type) {
            case si.FullSnapshot:
                {
                    this.crossOriginIframeMirror.reset(e),
                    this.crossOriginIframeStyleMirror.reset(e),
                    this.replaceIdOnNode(t.data.node, e);
                    let n = t.data.node.id;
                    return this.crossOriginIframeRootIdMap.set(e, n),
                    this.patchRootIdOnNode(t.data.node, n),
                    {
                        timestamp: t.timestamp,
                        type: si.IncrementalSnapshot,
                        data: {
                            source: ss.Mutation,
                            adds: [{
                                parentId: this.mirror.getId(e),
                                nextId: null,
                                node: t.data.node
                            }],
                            removes: [],
                            texts: [],
                            attributes: [],
                            isAttachIframe: !0
                        }
                    }
                }
            case si.Meta:
            case si.Load:
            case si.DomContentLoaded:
                break;
            case si.Plugin:
                return t;
            case si.Custom:
                return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
            case si.IncrementalSnapshot:
                switch (t.data.source) {
                    case ss.Mutation:
                        return t.data.adds.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                            let n = this.crossOriginIframeRootIdMap.get(e);
                            n && this.patchRootIdOnNode(t.node, n)
                        }), t.data.removes.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "id"])
                        }), t.data.attributes.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }), t.data.texts.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }), t;
                    case ss.Drag:
                    case ss.TouchMove:
                    case ss.MouseMove:
                        return t.data.positions.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }), t;
                    case ss.ViewportResize:
                        return !1;
                    case ss.MediaInteraction:
                    case ss.MouseInteraction:
                    case ss.Scroll:
                    case ss.CanvasMutation:
                    case ss.Input:
                        return this.replaceIds(t.data, e, ["id"]), t;
                    case ss.StyleSheetRule:
                    case ss.StyleDeclaration:
                        return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                    case ss.Font:
                        return t;
                    case ss.Selection:
                        return t.data.ranges.forEach(t => {
                            this.replaceIds(t, e, ["start", "end"])
                        }), t;
                    case ss.AdoptedStyleSheet:
                        return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), t.data.styles ? .forEach(t => {
                            this.replaceStyleIds(t, e, ["styleId"])
                        }), t
                }
        }
        return !1
    }
    replace(e, t, n, r) {
        for (let i of r)(Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(n, t[i]) : t[i] = e.getId(n, t[i]));
        return t
    }
    replaceIds(e, t, n) {
        return this.replace(this.crossOriginIframeMirror, e, t, n)
    }
    replaceStyleIds(e, t, n) {
        return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
    }
    replaceIdOnNode(e, t) {
        this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
            this.replaceIdOnNode(e, t)
        })
    }
    patchRootIdOnNode(e, t) {
        e.type === is.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
            this.patchRootIdOnNode(e, t)
        })
    }
}
class sx {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
}
class sP {
    constructor(e) {
        this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
    }
    init() {
        this.reset(), this.patchAttachShadow(Element, document)
    }
    addShadowRoot(e, t) {
        if (!ia(e) || this.shadowDoms.has(e)) return;
        this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
        let n = sv({ ...this.bypassOptions,
            doc: t,
            mutationCb: this.mutationCb,
            mirror: this.mirror,
            shadowDomManager: this
        }, e);
        this.restoreHandlers.push(() => n.disconnect()), this.restoreHandlers.push(sb({ ...this.bypassOptions,
            scrollCb: this.scrollCb,
            doc: e,
            mirror: this.mirror
        })), sr(() => {
            e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(sO({
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager
            }, e))
        }, 0)
    }
    observeAttachShadow(e) {
        let t = sc(e),
            n = function(e) {
                try {
                    return e.contentWindow
                } catch (e) {}
            }(e);
        t && n && this.patchAttachShadow(n.Element, t)
    }
    patchAttachShadow(e, t) {
        let n = this;
        this.restoreHandlers.push(iX(e.prototype, "attachShadow", function(e) {
            return function(r) {
                let i = e.call(this, r);
                return this.shadowRoot && se(this) && n.addShadowRoot(this.shadowRoot, t), i
            }
        }))
    }
    reset() {
        this.restoreHandlers.forEach(e => {
            try {
                e()
            } catch (e) {}
        }), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots()
    }
}
for (var sD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sM = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), sL = 0; sL < sD.length; sL++) sM[sD.charCodeAt(sL)] = sL;
class sU {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
    snapshot() {}
    addWindow() {}
    addShadowRoot() {}
    resetShadowRoots() {}
}
class sj {
    constructor(e) {
        this.trackedLinkElements = new WeakSet, this.styleMirror = new i9, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
    }
    attachLinkElement(e, t) {
        "_cssText" in t.attributes && this.mutationCb({
            adds: [],
            removes: [],
            texts: [],
            attributes: [{
                id: t.id,
                attributes: t.attributes
            }]
        }), this.trackLinkElement(e)
    }
    trackLinkElement(e) {
        this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
    }
    adoptStyleSheets(e, t) {
        if (0 === e.length) return;
        let n = {
                id: t,
                styleIds: []
            },
            r = [];
        for (let t of e) {
            let e;
            this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), r.push({
                styleId: e,
                rules: Array.from(t.rules || CSSRule, (e, t) => ({
                    rule: ic(e),
                    index: t
                }))
            })), n.styleIds.push(e)
        }
        r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
    }
    reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
    }
    trackStylesheetInLinkElement(e) {}
}
class sF {
    constructor() {
        this.nodeMap = new WeakMap, this.active = !1
    }
    inOtherBuffer(e, t) {
        let n = this.nodeMap.get(e);
        return n && Array.from(n).some(e => e !== t)
    }
    add(e, t) {
        this.active || (this.active = !0, function(...e) {
            sn("requestAnimationFrame")(...e)
        }(() => {
            this.nodeMap = new WeakMap, this.active = !1
        })), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
    }
    destroy() {}
}
try {
    if (2 !== Array.from([1], e => 2 * e)[0]) {
        let e = document.createElement("iframe");
        document.body.appendChild(e), Array.from = e.contentWindow ? .Array.from || Array.from, document.body.removeChild(e)
    }
} catch (e) {
    console.debug("Unable to override Array.from", e)
}
let s$ = new iu;

function sB(e = {}) {
    let t, {
        emit: n,
        checkoutEveryNms: r,
        checkoutEveryNth: i,
        blockClass: s = "rr-block",
        blockSelector: o = null,
        unblockSelector: a = null,
        ignoreClass: l = "rr-ignore",
        ignoreSelector: c = null,
        maskAllText: u = !1,
        maskTextClass: d = "rr-mask",
        unmaskTextClass: h = null,
        maskTextSelector: f = null,
        unmaskTextSelector: p = null,
        inlineStylesheet: m = !0,
        maskAllInputs: g,
        maskInputOptions: _,
        slimDOMOptions: E,
        maskAttributeFn: S,
        maskInputFn: T,
        maskTextFn: w,
        maxCanvasSize: O = null,
        packFn: C,
        sampling: k = {},
        dataURLOptions: R = {},
        mousemoveWait: I,
        recordDOM: N = !0,
        recordCanvas: A = !1,
        recordCrossOriginIframes: x = !1,
        recordAfter: P = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
        userTriggeredOnInput: D = !1,
        collectFonts: M = !1,
        inlineImages: L = !1,
        plugins: U,
        keepIframeSrcFn: j = () => !1,
        ignoreCSSAttributes: F = new Set([]),
        errorHandler: $,
        onMutation: B,
        getCanvasManager: q
    } = e;
    y = $;
    let z = !x || window.parent === window,
        H = !1;
    if (!z) try {
        window.parent.document && (H = !1)
    } catch (e) {
        H = !0
    }
    if (z && !n) throw Error("emit function is required");
    if (!z && !H) return () => {};
    void 0 !== I && void 0 === k.mousemove && (k.mousemove = I), s$.reset();
    let W = !0 === g ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0
        } : void 0 !== _ ? _ : {},
        G = !0 === E || "all" === E ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === E,
            headMetaDescKeywords: "all" === E
        } : E || {};
    ! function(e = window) {
        "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
            let t = e[0];
            if (!(0 in e)) throw TypeError("1 argument is required");
            do
                if (this === t) return !0; while (t = t && t.parentNode);
            return !1
        })
    }();
    let J = 0,
        V = e => {
            for (let t of U || []) t.eventProcessor && (e = t.eventProcessor(e));
            return C && !H && (e = C(e)), e
        };
    v = (e, s) => {
        if (e.timestamp = iQ(), s_[0] ? .isFrozen() && e.type !== si.FullSnapshot && (e.type !== si.IncrementalSnapshot || e.data.source !== ss.Mutation) && s_.forEach(e => e.unfreeze()), z) n ? .(V(e), s);
        else if (H) {
            let t = {
                type: "rrweb",
                event: V(e),
                origin: window.location.origin,
                isCheckout: s
            };
            window.parent.postMessage(t, "*")
        }
        if (e.type === si.FullSnapshot) t = e, J = 0;
        else if (e.type === si.IncrementalSnapshot) {
            if (e.data.source === ss.Mutation && e.data.isAttachIframe) return;
            J++;
            let n = i && J >= i,
                s = r && t && e.timestamp - t.timestamp > r;
            (n || s) && er(!0)
        }
    };
    let K = e => {
            v({
                type: si.IncrementalSnapshot,
                data: {
                    source: ss.Mutation,
                    ...e
                }
            })
        },
        X = e => v({
            type: si.IncrementalSnapshot,
            data: {
                source: ss.Scroll,
                ...e
            }
        }),
        Q = e => v({
            type: si.IncrementalSnapshot,
            data: {
                source: ss.CanvasMutation,
                ...e
            }
        }),
        Y = new sj({
            mutationCb: K,
            adoptedStyleSheetCb: e => v({
                type: si.IncrementalSnapshot,
                data: {
                    source: ss.AdoptedStyleSheet,
                    ...e
                }
            })
        }),
        Z = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new sN : new sA({
            mirror: s$,
            mutationCb: K,
            stylesheetManager: Y,
            recordCrossOriginIframes: x,
            wrappedEmit: v
        });
    for (let e of U || []) e.getMirror && e.getMirror({
        nodeMirror: s$,
        crossOriginIframeMirror: Z.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Z.crossOriginIframeStyleMirror
    });
    let ee = new sF,
        et = function(e, t) {
            try {
                return e ? e(t) : new sU
            } catch {
                return console.warn("Unable to initialize CanvasManager"), new sU
            }
        }(q, {
            mirror: s$,
            win: window,
            mutationCb: e => v({
                type: si.IncrementalSnapshot,
                data: {
                    source: ss.CanvasMutation,
                    ...e
                }
            }),
            recordCanvas: A,
            blockClass: s,
            blockSelector: o,
            unblockSelector: a,
            maxCanvasSize: O,
            sampling: k.canvas,
            dataURLOptions: R,
            errorHandler: $
        }),
        en = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new sx : new sP({
            mutationCb: K,
            scrollCb: X,
            bypassOptions: {
                onMutation: B,
                blockClass: s,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: u,
                maskTextClass: d,
                unmaskTextClass: h,
                maskTextSelector: f,
                unmaskTextSelector: p,
                inlineStylesheet: m,
                maskInputOptions: W,
                dataURLOptions: R,
                maskAttributeFn: S,
                maskTextFn: w,
                maskInputFn: T,
                recordCanvas: A,
                inlineImages: L,
                sampling: k,
                slimDOMOptions: G,
                iframeManager: Z,
                stylesheetManager: Y,
                canvasManager: et,
                keepIframeSrcFn: j,
                processedNodeManager: ee
            },
            mirror: s$
        }),
        er = (e = !1) => {
            if (!N) return;
            v({
                type: si.Meta,
                data: {
                    href: window.location.href,
                    width: i0(),
                    height: iZ()
                }
            }, e), Y.reset(), en.init(), s_.forEach(e => e.lock());
            let t = function(e, t) {
                let {
                    mirror: n = new iu,
                    blockClass: r = "rr-block",
                    blockSelector: i = null,
                    unblockSelector: s = null,
                    maskAllText: o = !1,
                    maskTextClass: a = "rr-mask",
                    unmaskTextClass: l = null,
                    maskTextSelector: c = null,
                    unmaskTextSelector: u = null,
                    inlineStylesheet: d = !0,
                    inlineImages: h = !1,
                    recordCanvas: f = !1,
                    maskAllInputs: p = !1,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: _,
                    slimDOM: y = !1,
                    dataURLOptions: v,
                    preserveWhiteSpace: b,
                    onSerialize: E,
                    onIframeLoad: S,
                    iframeLoadTimeout: T,
                    onStylesheetLoad: w,
                    stylesheetLoadTimeout: O,
                    keepIframeSrcFn: C = () => !1
                } = t || {};
                return iW(e, {
                    doc: e,
                    mirror: n,
                    blockClass: r,
                    blockSelector: i,
                    unblockSelector: s,
                    maskAllText: o,
                    maskTextClass: a,
                    unmaskTextClass: l,
                    maskTextSelector: c,
                    unmaskTextSelector: u,
                    skipChild: !1,
                    inlineStylesheet: d,
                    maskInputOptions: !0 === p ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0
                    } : !1 === p ? {} : p,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: _,
                    slimDOMOptions: !0 === y || "all" === y ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaDescKeywords: "all" === y,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaAuthorship: !0,
                        headMetaVerification: !0
                    } : !1 === y ? {} : y,
                    dataURLOptions: v,
                    inlineImages: h,
                    recordCanvas: f,
                    preserveWhiteSpace: b,
                    onSerialize: E,
                    onIframeLoad: S,
                    iframeLoadTimeout: T,
                    onStylesheetLoad: w,
                    stylesheetLoadTimeout: O,
                    keepIframeSrcFn: C,
                    newlyAddedElement: !1
                })
            }(document, {
                mirror: s$,
                blockClass: s,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: u,
                maskTextClass: d,
                unmaskTextClass: h,
                maskTextSelector: f,
                unmaskTextSelector: p,
                inlineStylesheet: m,
                maskAllInputs: W,
                maskAttributeFn: S,
                maskInputFn: T,
                maskTextFn: w,
                slimDOM: G,
                dataURLOptions: R,
                recordCanvas: A,
                inlineImages: L,
                onSerialize: e => {
                    i4(e, s$) && Z.addIframe(e), i6(e, s$) && Y.trackLinkElement(e), i8(e) && en.addShadowRoot(e.shadowRoot, document)
                },
                onIframeLoad: (e, t) => {
                    Z.attachIframe(e, t), e.contentWindow && et.addWindow(e.contentWindow), en.observeAttachShadow(e)
                },
                onStylesheetLoad: (e, t) => {
                    Y.attachLinkElement(e, t)
                },
                keepIframeSrcFn: j
            });
            if (!t) return console.warn("Failed to snapshot the document");
            v({
                type: si.FullSnapshot,
                data: {
                    node: t,
                    initialOffset: iY(window)
                }
            }), s_.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Y.adoptStyleSheets(document.adoptedStyleSheets, s$.getId(document))
        };
    b = er;
    try {
        let e = [],
            t = e => sg(sC)({
                onMutation: B,
                mutationCb: K,
                mousemoveCb: (e, t) => v({
                    type: si.IncrementalSnapshot,
                    data: {
                        source: t,
                        positions: e
                    }
                }),
                mouseInteractionCb: e => v({
                    type: si.IncrementalSnapshot,
                    data: {
                        source: ss.MouseInteraction,
                        ...e
                    }
                }),
                scrollCb: X,
                viewportResizeCb: e => v({
                    type: si.IncrementalSnapshot,
                    data: {
                        source: ss.ViewportResize,
                        ...e
                    }
                }),
                inputCb: e => v({
                    type: si.IncrementalSnapshot,
                    data: {
                        source: ss.Input,
                        ...e
                    }
                }),
                mediaInteractionCb: e => v({
                    type: si.IncrementalSnapshot,
                    data: {
                        source: ss.MediaInteraction,
                        ...e
                    }
                }),
                styleSheetRuleCb: e => v({
                    type: si.IncrementalSnapshot,
                    data: {
                        source: ss.StyleSheetRule,
                        ...e
                    }
                }),
                styleDeclarationCb: e => v({
                    type: si.IncrementalSnapshot,
                    data: {
                        source: ss.StyleDeclaration,
                        ...e
                    }
                }),
                canvasMutationCb: Q,
                fontCb: e => v({
                    type: si.IncrementalSnapshot,
                    data: {
                        source: ss.Font,
                        ...e
                    }
                }),
                selectionCb: e => {
                    v({
                        type: si.IncrementalSnapshot,
                        data: {
                            source: ss.Selection,
                            ...e
                        }
                    })
                },
                customElementCb: e => {
                    v({
                        type: si.IncrementalSnapshot,
                        data: {
                            source: ss.CustomElement,
                            ...e
                        }
                    })
                },
                blockClass: s,
                ignoreClass: l,
                ignoreSelector: c,
                maskAllText: u,
                maskTextClass: d,
                unmaskTextClass: h,
                maskTextSelector: f,
                unmaskTextSelector: p,
                maskInputOptions: W,
                inlineStylesheet: m,
                sampling: k,
                recordDOM: N,
                recordCanvas: A,
                inlineImages: L,
                userTriggeredOnInput: D,
                collectFonts: M,
                doc: e,
                maskAttributeFn: S,
                maskInputFn: T,
                maskTextFn: w,
                keepIframeSrcFn: j,
                blockSelector: o,
                unblockSelector: a,
                slimDOMOptions: G,
                dataURLOptions: R,
                mirror: s$,
                iframeManager: Z,
                stylesheetManager: Y,
                shadowDomManager: en,
                processedNodeManager: ee,
                canvasManager: et,
                ignoreCSSAttributes: F,
                plugins: U ? .filter(e => e.observer) ? .map(e => ({
                    observer: e.observer,
                    options: e.options,
                    callback: t => v({
                        type: si.Plugin,
                        data: {
                            plugin: e.name,
                            payload: t
                        }
                    })
                })) || []
            }, {});
        Z.addLoadListener(n => {
            try {
                e.push(t(n.contentDocument))
            } catch (e) {
                console.warn(e)
            }
        });
        let n = () => {
            er(), e.push(t(document))
        };
        return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(iG("DOMContentLoaded", () => {
            v({
                type: si.DomContentLoaded,
                data: {}
            }), "DOMContentLoaded" === P && n()
        })), e.push(iG("load", () => {
            v({
                type: si.Load,
                data: {}
            }), "load" === P && n()
        }, window))), () => {
            e.forEach(e => e()), ee.destroy(), b = void 0, y = void 0
        }
    } catch (e) {
        console.warn(e)
    }
}

function sq(e) {
    return e > 0x2540be3ff ? e : 1e3 * e
}

function sz(e) {
    return e > 0x2540be3ff ? e / 1e3 : e
}

function sH(e, t) {
    "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
        type: si.Custom,
        timestamp: 1e3 * (t.timestamp || 0),
        data: {
            tag: "breadcrumb",
            payload: (0, Z.S8)(t, 10, 1e3)
        }
    }), "console" === t.category)))
}

function sW(e) {
    return e.closest("button,a") || e
}

function sG(e) {
    let t = sJ(e);
    return t && t instanceof Element ? sW(t) : t
}

function sJ(e) {
    var t;
    return "object" == typeof(t = e) && t && "target" in t ? e.target : e
}
sB.mirror = s$, sB.takeFullSnapshot = function(e) {
    if (!b) throw Error("please take full snapshot after start recording");
    b(e)
}, ! function(e) {
    e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped"
}(S || (S = {}));
let sV = new Set([ss.Mutation, ss.StyleSheetRule, ss.StyleDeclaration, ss.AdoptedStyleSheet, ss.CanvasMutation, ss.Selection, ss.MediaInteraction]);
class sK {
    constructor(e, t, n = sH) {
        this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scrollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n
    }
    addListeners() {
        var e;
        let t = (e = () => {
            this._lastMutation = sQ()
        }, E || (E = [], (0, B.GS)(r9, "open", function(e) {
            return function(...t) {
                if (E) try {
                    E.forEach(e => e())
                } catch (e) {}
                return e.apply(r9, t)
            }
        })), E.push(e), () => {
            let t = E ? E.indexOf(e) : -1;
            t > -1 && E.splice(t, 1)
        });
        this._teardown = () => {
            t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
        }
    }
    removeListeners() {
        this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
    }
    handleClick(e, t) {
        var n, r, i;
        if (n = t, r = this._ignoreSelector, !sX.includes(n.tagName) || "INPUT" === n.tagName && !["submit", "button"].includes(n.getAttribute("type") || "") || "A" === n.tagName && (n.hasAttribute("download") || n.hasAttribute("target") && "_self" !== n.getAttribute("target")) || r && n.matches(r) || !((i = e).data && "number" == typeof i.data.nodeId && i.timestamp)) return;
        let s = {
            timestamp: sz(e.timestamp),
            clickBreadcrumb: e,
            clickCount: 0,
            node: t
        };
        this._clicks.some(e => e.node === s.node && 1 > Math.abs(e.timestamp - s.timestamp)) || (this._clicks.push(s), 1 === this._clicks.length && this._scheduleCheckClicks())
    }
    registerMutation(e = Date.now()) {
        this._lastMutation = sz(e)
    }
    registerScroll(e = Date.now()) {
        this._lastScroll = sz(e)
    }
    registerClick(e) {
        let t = sW(e);
        this._handleMultiClick(t)
    }
    _handleMultiClick(e) {
        this._getClicks(e).forEach(e => {
            e.clickCount++
        })
    }
    _getClicks(e) {
        return this._clicks.filter(t => t.node === e)
    }
    _checkClicks() {
        let e = [],
            t = sQ();
        for (let n of (this._clicks.forEach(n => {
                !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= t && e.push(n)
            }), e)) {
            let e = this._clicks.indexOf(n);
            e > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(e, 1))
        }
        this._clicks.length && this._scheduleCheckClicks()
    }
    _generateBreadcrumbs(e) {
        let t = this._replay,
            n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout,
            r = e.mutationAfter && e.mutationAfter <= this._threshold,
            {
                clickCount: i,
                clickBreadcrumb: s
            } = e;
        if (!n && !r) {
            let n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                o = {
                    type: "default",
                    message: s.message,
                    timestamp: s.timestamp,
                    category: "ui.slowClickDetected",
                    data: { ...s.data,
                        url: r9.location.href,
                        route: t.getCurrentRoute(),
                        timeAfterClickMs: n,
                        endReason: r,
                        clickCount: i || 1
                    }
                };
            this._addBreadcrumbEvent(t, o);
            return
        }
        if (i > 1) {
            let e = {
                type: "default",
                message: s.message,
                timestamp: s.timestamp,
                category: "ui.multiClick",
                data: { ...s.data,
                    url: r9.location.href,
                    route: t.getCurrentRoute(),
                    clickCount: i,
                    metric: !0
                }
            };
            this._addBreadcrumbEvent(t, e)
        }
    }
    _scheduleCheckClicks() {
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = tz(() => this._checkClicks(), 1e3)
    }
}
let sX = ["A", "BUTTON", "INPUT"];

function sQ() {
    return Date.now() / 1e3
}

function sY(e) {
    return {
        timestamp: Date.now() / 1e3,
        type: "default",
        ...e
    }
}
var sZ = (e => (e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment", e))(sZ || {});
let s0 = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]),
    s1 = e => t => {
        var n, r;
        if (!e.isEnabled()) return;
        let i = function(e) {
            let {
                target: t,
                message: n
            } = function(e) {
                let t, n = "click" === e.name,
                    r = null;
                try {
                    r = n ? sG(e.event) : sJ(e.event), t = (0, eU.Hd)(r, {
                        maxStringLength: 200
                    }) || "<unknown>"
                } catch (e) {
                    t = "<unknown>"
                }
                return {
                    target: r,
                    message: t
                }
            }(e);
            return sY({
                category: `ui.${e.name}`,
                ...s2(t, n)
            })
        }(t);
        if (!i) return;
        let s = "click" === t.name,
            o = s ? t.event : void 0;
        s && e.clickDetector && o && o.target && !o.altKey && !o.metaKey && !o.ctrlKey && !o.shiftKey && (n = e.clickDetector, r = sG(t.event), n.handleClick(i, r)), sH(e, i)
    };

function s2(e, t) {
    let n = sB.mirror.getId(e),
        r = n && sB.mirror.getNode(n),
        i = r && sB.mirror.getMeta(r),
        s = i && i.type === sZ.Element ? i : null;
    return {
        message: t,
        data: s ? {
            nodeId: n,
            node: {
                id: n,
                tagName: s.tagName,
                textContent: Array.from(s.childNodes).map(e => e.type === sZ.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                attributes: function(e) {
                    let t = {};
                    for (let n in !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]), e)
                        if (s0.has(n)) {
                            let r = n;
                            ("data-testid" === n || "data-test-id" === n) && (r = "testId"), t[r] = e[n]
                        }
                    return t
                }(s.attributes)
            }
        } : {}
    }
}
let s5 = {
    resource: function(e) {
        let {
            entryType: t,
            initiatorType: n,
            name: r,
            responseEnd: i,
            startTime: s,
            decodedBodySize: o,
            encodedBodySize: a,
            responseStatus: l,
            transferSize: c
        } = e;
        return ["fetch", "xmlhttprequest"].includes(n) ? null : {
            type: `${t}.${n}`,
            start: s6(s),
            end: s6(i),
            name: r,
            data: {
                size: c,
                statusCode: l,
                decodedBodySize: o,
                encodedBodySize: a
            }
        }
    },
    paint: function(e) {
        let {
            duration: t,
            entryType: n,
            name: r,
            startTime: i
        } = e, s = s6(i);
        return {
            type: n,
            name: r,
            start: s,
            end: s + t,
            data: void 0
        }
    },
    navigation: function(e) {
        let {
            entryType: t,
            name: n,
            decodedBodySize: r,
            duration: i,
            domComplete: s,
            encodedBodySize: o,
            domContentLoadedEventStart: a,
            domContentLoadedEventEnd: l,
            domInteractive: c,
            loadEventStart: u,
            loadEventEnd: d,
            redirectCount: h,
            startTime: f,
            transferSize: p,
            type: m
        } = e;
        return 0 === i ? null : {
            type: `${t}.${m}`,
            start: s6(f),
            end: s6(s),
            name: n,
            data: {
                size: p,
                decodedBodySize: r,
                encodedBodySize: o,
                duration: i,
                domInteractive: c,
                domContentLoadedEventStart: a,
                domContentLoadedEventEnd: l,
                loadEventStart: u,
                loadEventEnd: d,
                domComplete: s,
                redirectCount: h
            }
        }
    }
};

function s3(e, t) {
    return ({
        metric: n
    }) => void t.replayPerformanceEntries.push(e(n))
}

function s4(e) {
    let t = s5[e.entryType];
    return t ? t(e) : null
}

function s6(e) {
    return (((0, el.k3)() || r9.performance.timeOrigin) + e) / 1e3
}

function s8(e) {
    let t = e.entries[e.entries.length - 1];
    return ot(e, "largest-contentful-paint", t ? .element ? [t.element] : void 0)
}

function s9(e) {
    let t = [],
        n = [];
    for (let r of e.entries)
        if (void 0 !== r.sources) {
            let e = [];
            for (let t of r.sources)
                if (t.node) {
                    n.push(t.node);
                    let r = sB.mirror.getId(t.node);
                    r && e.push(r)
                }
            t.push({
                value: r.value,
                nodeIds: e.length ? e : void 0
            })
        }
    return ot(e, "cumulative-layout-shift", n, t)
}

function s7(e) {
    let t = e.entries[e.entries.length - 1];
    return ot(e, "first-input-delay", t ? .target ? [t.target] : void 0)
}

function oe(e) {
    let t = e.entries[e.entries.length - 1];
    return ot(e, "interaction-to-next-paint", t ? .target ? [t.target] : void 0)
}

function ot(e, t, n, r) {
    let i = e.value,
        s = e.rating,
        o = s6(i);
    return {
        type: "web-vital",
        name: t,
        start: o,
        end: o,
        data: {
            value: i,
            size: i,
            rating: s,
            nodeIds: n ? n.map(e => sB.mirror.getId(e)) : void 0,
            attributions: r
        }
    }
}
let on = ["info", "warn", "error", "log"],
    or = function() {
        let e = !1,
            t = !1,
            n = {
                exception: () => void 0,
                infoTick: () => void 0,
                setConfig: e => {
                    e.captureExceptions, e.traceInternals
                }
            };
        return on.forEach(e => {
            n[e] = () => void 0
        }), n
    }();
class oi extends Error {
    constructor() {
        super("Event buffer exceeded maximum size of 20000000.")
    }
}
class os {
    constructor() {
        this.events = [], this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
    }
    get hasEvents() {
        return this.events.length > 0
    }
    get type() {
        return "sync"
    }
    destroy() {
        this.events = []
    }
    async addEvent(e) {
        let t = JSON.stringify(e).length;
        if (this._totalSize += t, this._totalSize > 2e7) throw new oi;
        this.events.push(e)
    }
    finish() {
        return new Promise(e => {
            let t = this.events;
            this.clear(), e(JSON.stringify(t))
        })
    }
    clear() {
        this.events = [], this._totalSize = 0, this.hasCheckout = !1
    }
    getEarliestTimestamp() {
        let e = this.events.map(e => e.timestamp).sort()[0];
        return e ? sq(e) : null
    }
}
class oo {
    constructor(e) {
        this._worker = e, this._id = 0
    }
    ensureReady() {
        return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((e, t) => {
            this._worker.addEventListener("message", ({
                data: n
            }) => {
                n.success ? e() : t()
            }, {
                once: !0
            }), this._worker.addEventListener("error", e => {
                t(e)
            }, {
                once: !0
            })
        })), this._ensureReadyPromise
    }
    destroy() {
        this._worker.terminate()
    }
    postMessage(e, t) {
        let n = this._getAndIncrementId();
        return new Promise((r, i) => {
            let s = ({
                data: t
            }) => {
                if (t.method === e && t.id === n) {
                    if (this._worker.removeEventListener("message", s), !t.success) return void i(Error("Error in compression worker"));
                    r(t.response)
                }
            };
            this._worker.addEventListener("message", s), this._worker.postMessage({
                id: n,
                method: e,
                arg: t
            })
        })
    }
    _getAndIncrementId() {
        return this._id++
    }
}
class oa {
    constructor(e) {
        this._worker = new oo(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this.waitForCheckout = !1
    }
    get hasEvents() {
        return !!this._earliestTimestamp
    }
    get type() {
        return "worker"
    }
    ensureReady() {
        return this._worker.ensureReady()
    }
    destroy() {
        this._worker.destroy()
    }
    addEvent(e) {
        let t = sq(e.timestamp);
        (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
        let n = JSON.stringify(e);
        return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new oi) : this._sendEventToWorker(n)
    }
    finish() {
        return this._finishRequest()
    }
    clear() {
        this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, e => {})
    }
    getEarliestTimestamp() {
        return this._earliestTimestamp
    }
    _sendEventToWorker(e) {
        return this._worker.postMessage("addEvent", e)
    }
    async _finishRequest() {
        let e = await this._worker.postMessage("finish");
        return this._earliestTimestamp = null, this._totalSize = 0, e
    }
}
class ol {
    constructor(e) {
        this._fallback = new os, this._compression = new oa(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
    }
    get waitForCheckout() {
        return this._used.waitForCheckout
    }
    get type() {
        return this._used.type
    }
    get hasEvents() {
        return this._used.hasEvents
    }
    get hasCheckout() {
        return this._used.hasCheckout
    }
    set hasCheckout(e) {
        this._used.hasCheckout = e
    }
    set waitForCheckout(e) {
        this._used.waitForCheckout = e
    }
    destroy() {
        this._fallback.destroy(), this._compression.destroy()
    }
    clear() {
        return this._used.clear()
    }
    getEarliestTimestamp() {
        return this._used.getEarliestTimestamp()
    }
    addEvent(e) {
        return this._used.addEvent(e)
    }
    async finish() {
        return await this.ensureWorkerIsLoaded(), this._used.finish()
    }
    ensureWorkerIsLoaded() {
        return this._ensureWorkerIsLoadedPromise
    }
    async _ensureWorkerIsLoaded() {
        try {
            await this._compression.ensureReady()
        } catch (e) {
            return
        }
        await this._switchToCompressionWorker()
    }
    async _switchToCompressionWorker() {
        let {
            events: e,
            hasCheckout: t,
            waitForCheckout: n
        } = this._fallback, r = [];
        for (let t of e) r.push(this._compression.addEvent(t));
        this._compression.hasCheckout = t, this._compression.waitForCheckout = n, this._used = this._compression;
        try {
            await Promise.all(r), this._fallback.clear()
        } catch (e) {}
    }
}

function oc() {
    try {
        return "sessionStorage" in r9 && !!r9.sessionStorage
    } catch {
        return !1
    }
}

function ou(e) {
    return void 0 !== e && Math.random() < e
}

function od(e) {
    if (oc()) try {
        r9.sessionStorage.setItem(r7, JSON.stringify(e))
    } catch {}
}

function oh(e) {
    let t = Date.now(),
        n = e.id || (0, P.eJ)(),
        r = e.started || t,
        i = e.lastActivity || t,
        s = e.segmentId || 0;
    return {
        id: n,
        started: r,
        lastActivity: i,
        segmentId: s,
        sampled: e.sampled,
        previousSessionId: e.previousSessionId
    }
}

function of ({
    sessionSampleRate: e,
    allowBuffering: t,
    stickySession: n = !1
}, {
    previousSessionId: r
} = {}) {
    let i = oh({
        sampled: ou(e) ? "session" : !!t && "buffer",
        previousSessionId: r
    });
    return n && od(i), i
}

function op(e, t, n = +new Date) {
    return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n
}

function om(e, {
    maxReplayDuration: t,
    sessionIdleExpire: n,
    targetTime: r = Date.now()
}) {
    return op(e.started, t, r) || op(e.lastActivity, n, r)
}

function og(e, {
    sessionIdleExpire: t,
    maxReplayDuration: n
}) {
    return !!om(e, {
        sessionIdleExpire: t,
        maxReplayDuration: n
    }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
}

function o_({
    sessionIdleExpire: e,
    maxReplayDuration: t,
    previousSessionId: n
}, r) {
    let i = r.stickySession && function() {
        if (!oc()) return null;
        try {
            let e = r9.sessionStorage.getItem(r7);
            if (!e) return null;
            let t = JSON.parse(e);
            return oh(t)
        } catch {
            return null
        }
    }();
    return i ? og(i, {
        sessionIdleExpire: e,
        maxReplayDuration: t
    }) ? of (r, {
        previousSessionId: i.id
    }) : i : of (r, {
        previousSessionId: n
    })
}

function oy(e, t, n) {
    return !!ob(e, t) && (ov(e, t, n), !0)
}
async function ov(e, t, n) {
    let {
        eventBuffer: r
    } = e;
    if (!r || r.waitForCheckout && !n) return null;
    let i = "buffer" === e.recordingMode;
    try {
        n && i && r.clear(), n && (r.hasCheckout = !0, r.waitForCheckout = !1);
        let s = e.getOptions(),
            o = function(e, t) {
                try {
                    if ("function" == typeof t && e.type === si.Custom) return t(e)
                } catch (e) {
                    return null
                }
                return e
            }(t, s.beforeAddRecordingEvent);
        if (!o) return;
        return await r.addEvent(o)
    } catch (s) {
        let t = s && s instanceof oi;
        if (t && i) return r.clear(), r.waitForCheckout = !0, null;
        e.handleException(s), await e.stop({
            reason: t ? "addEventSizeExceeded" : "addEvent"
        });
        let n = (0, $.KU)();
        n && n.recordDroppedEvent("internal_sdk_error", "replay")
    }
}

function ob(e, t) {
    if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
    let n = sq(t.timestamp);
    return !(n + e.timeouts.sessionIdlePause < Date.now()) && !(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration)
}

function oE(e) {
    return "transaction" === e.type
}

function oS(e) {
    return "feedback" === e.type
}

function oT(e) {
    return !!e.category
}

function ow() {
    let e = (0, $.o5)().getPropagationContext().dsc;
    e && delete e.replay_id;
    let t = (0, eo.Bk)();
    if (t) {
        let e = (0, X.k1)(t);
        delete e.replay_id
    }
}

function oO(e, t) {
    return t.map(({
        type: t,
        start: n,
        end: r,
        name: i,
        data: s
    }) => {
        let o = e.throttledAddEvent({
            type: si.Custom,
            timestamp: n,
            data: {
                tag: "performanceSpan",
                payload: {
                    op: t,
                    description: i,
                    startTimestamp: n,
                    endTimestamp: r,
                    data: s
                }
            }
        });
        return "string" == typeof o ? Promise.resolve(null) : o
    })
}

function oC(e, t) {
    e.isEnabled() && null !== t && ! function(e, t) {
        var n, r, i, s, o = (0, $.KU)();
        let a = o ? .getDsn(),
            l = o ? .getOptions().tunnel;
        return n = t, !!(r = a) && n.includes(r.host) || (i = t, !!(s = l) && r2(i) === r2(s))
    }(0, t.name) && e.addUpdate(() => (oO(e, [t]), !0))
}

function ok(e) {
    if (!e) return;
    let t = new TextEncoder;
    try {
        if ("string" == typeof e) return t.encode(e).length;
        if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
        if (e instanceof FormData) {
            let n = r4(e);
            return t.encode(n).length
        }
        if (e instanceof Blob) return e.size;
        if (e instanceof ArrayBuffer) return e.byteLength
    } catch {}
}

function oR(e) {
    if (!e) return;
    let t = parseInt(e, 10);
    return isNaN(t) ? void 0 : t
}

function oI(e, t) {
    if (!e) return {
        headers: {},
        size: void 0,
        _meta: {
            warnings: [t]
        }
    };
    let n = { ...e._meta
        },
        r = n.warnings || [];
    return n.warnings = [...r, t], e._meta = n, e
}

function oN(e, t) {
    if (!t) return null;
    let {
        startTimestamp: n,
        endTimestamp: r,
        url: i,
        method: s,
        statusCode: o,
        request: a,
        response: l
    } = t;
    return {
        type: e,
        start: n / 1e3,
        end: r / 1e3,
        name: i,
        data: {
            method: s,
            statusCode: o,
            request: a,
            response: l
        }
    }
}

function oA(e) {
    return {
        headers: {},
        size: e,
        _meta: {
            warnings: ["URL_SKIPPED"]
        }
    }
}

function ox(e, t, n) {
    if (!t && 0 === Object.keys(e).length) return;
    if (!t) return {
        headers: e
    };
    if (!n) return {
        headers: e,
        size: t
    };
    let r = {
            headers: e,
            size: t
        },
        {
            body: i,
            warnings: s
        } = function(e) {
            if (!e || "string" != typeof e) return {
                body: e
            };
            let t = e.length > 15e4,
                n = function(e) {
                    let t = e[0],
                        n = e[e.length - 1];
                    return "[" === t && "]" === n || "{" === t && "}" === n
                }(e);
            if (t) {
                let t = e.slice(0, 15e4);
                return n ? {
                    body: t,
                    warnings: ["MAYBE_JSON_TRUNCATED"]
                } : {
                    body: `${t}…`,
                    warnings: ["TEXT_TRUNCATED"]
                }
            }
            if (n) try {
                return {
                    body: JSON.parse(e)
                }
            } catch {}
            return {
                body: e
            }
        }(n);
    return r.body = i, s ? .length && (r._meta = {
        warnings: s
    }), r
}

function oP(e, t) {
    return Object.entries(e).reduce((n, [r, i]) => {
        let s = r.toLowerCase();
        return t.includes(s) && e[r] && (n[s] = i), n
    }, {})
}

function oD(e, t) {
    let n = function(e, t = r9.document.baseURI) {
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(r9.location.origin)) return e;
        let n = new URL(e, t);
        if (n.origin !== new URL(t).origin) return e;
        let r = n.href;
        return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
    }(e);
    return (0, D.Xr)(n, t)
}
async function oM(e, t, n) {
    try {
        let r = await oL(e, t, n),
            i = oN("resource.fetch", r);
        oC(n.replay, i)
    } catch (e) {}
}
async function oL(e, t, n) {
    let r = Date.now(),
        {
            startTimestamp: i = r,
            endTimestamp: s = r
        } = t,
        {
            url: o,
            method: a,
            status_code: l = 0,
            request_body_size: c,
            response_body_size: u
        } = e.data,
        d = oD(o, n.networkDetailAllowUrls) && !oD(o, n.networkDetailDenyUrls);
    return {
        startTimestamp: i,
        endTimestamp: s,
        url: o,
        method: a,
        statusCode: l,
        request: d ? function({
            networkCaptureBodies: e,
            networkRequestHeaders: t
        }, n, r) {
            var i, s;
            let o = n ? (i = n, s = t, 1 === i.length && "string" != typeof i[0] ? o$(i[0], s) : 2 === i.length ? o$(i[1], s) : {}) : {};
            if (!e) return ox(o, r, void 0);
            let [a, l] = r6(r8(n), or), c = ox(o, r, a);
            return l ? oI(c, l) : c
        }(n, t.input, c) : oA(c),
        response: await oU(d, n, t.response, u)
    }
}
async function oU(e, {
    networkCaptureBodies: t,
    networkResponseHeaders: n
}, r, i) {
    if (!e && void 0 !== i) return oA(i);
    let s = r ? oF(r.headers, n) : {};
    if (!r || !t && void 0 !== i) return ox(s, i, void 0);
    let [o, a] = await oj(r), l = function(e, {
        networkCaptureBodies: t,
        responseBodySize: n,
        captureDetails: r,
        headers: i
    }) {
        try {
            let s = e ? .length && void 0 === n ? ok(e) : n;
            if (!r) return oA(s);
            if (t) return ox(i, s, e);
            return ox(i, s, void 0)
        } catch (e) {
            return ox(i, n, void 0)
        }
    }(o, {
        networkCaptureBodies: t,
        responseBodySize: i,
        captureDetails: e,
        headers: s
    });
    return a ? oI(l, a) : l
}
async function oj(e) {
    let t = function(e) {
        try {
            return e.clone()
        } catch (e) {}
    }(e);
    if (!t) return [void 0, "BODY_PARSE_ERROR"];
    try {
        var n;
        return [await (n = t, new Promise((e, t) => {
            let r = tz(() => t(Error("Timeout while trying to read response body")), 500);
            oB(n).then(t => e(t), e => t(e)).finally(() => clearTimeout(r))
        }))]
    } catch (e) {
        if (e instanceof Error && e.message.indexOf("Timeout") > -1) return [void 0, "BODY_PARSE_TIMEOUT"];
        return [void 0, "BODY_PARSE_ERROR"]
    }
}

function oF(e, t) {
    let n = {};
    return t.forEach(t => {
        e.get(t) && (n[t] = e.get(t))
    }), n
}

function o$(e, t) {
    if (!e) return {};
    let n = e.headers;
    return n ? n instanceof Headers ? oF(n, t) : Array.isArray(n) ? {} : oP(n, t) : {}
}
async function oB(e) {
    return await e.text()
}
async function oq(e, t, n) {
    try {
        let r = function(e, t, n) {
                let r = Date.now(),
                    {
                        startTimestamp: i = r,
                        endTimestamp: s = r,
                        input: o,
                        xhr: a
                    } = t,
                    {
                        url: l,
                        method: c,
                        status_code: u = 0,
                        request_body_size: d,
                        response_body_size: h
                    } = e.data;
                if (!l) return null;
                if (!a || !oD(l, n.networkDetailAllowUrls) || oD(l, n.networkDetailDenyUrls)) {
                    let e = oA(d);
                    return {
                        startTimestamp: i,
                        endTimestamp: s,
                        url: l,
                        method: c,
                        statusCode: u,
                        request: e,
                        response: oA(h)
                    }
                }
                let f = a[tr],
                    p = f ? oP(f.request_headers, n.networkRequestHeaders) : {},
                    m = oP(function(e) {
                        let t = e.getAllResponseHeaders();
                        return t ? t.split("\r\n").reduce((e, t) => {
                            let [n, r] = t.split(": ");
                            return r && (e[n.toLowerCase()] = r), e
                        }, {}) : {}
                    }(a), n.networkResponseHeaders),
                    [g, _] = n.networkCaptureBodies ? r6(o, or) : [void 0],
                    [y, v] = n.networkCaptureBodies ? function(e) {
                        let t = [];
                        try {
                            return [e.responseText]
                        } catch (e) {
                            t.push(e)
                        }
                        try {
                            var n = e.response,
                                r = e.responseType;
                            try {
                                if ("string" == typeof n) return [n];
                                if (n instanceof Document) return [n.body.outerHTML];
                                if ("json" === r && n && "object" == typeof n) return [JSON.stringify(n)];
                                if (!n) return [void 0]
                            } catch (e) {
                                return [void 0, "BODY_PARSE_ERROR"]
                            }
                            return [void 0, "UNPARSEABLE_BODY_TYPE"]
                        } catch (e) {
                            t.push(e)
                        }
                        return [void 0]
                    }(a) : [void 0],
                    b = ox(p, d, g),
                    E = ox(m, h, y);
                return {
                    startTimestamp: i,
                    endTimestamp: s,
                    url: l,
                    method: c,
                    statusCode: u,
                    request: _ ? oI(b, _) : b,
                    response: v ? oI(E, v) : E
                }
            }(e, t, n),
            i = oN("resource.xhr", r);
        oC(n.replay, i)
    } catch (e) {}
}
async function oz(e) {
    try {
        return Promise.all(oO(e, [function(e) {
            let {
                jsHeapSizeLimit: t,
                totalJSHeapSize: n,
                usedJSHeapSize: r
            } = e, i = Date.now() / 1e3;
            return {
                type: "memory",
                name: "memory",
                start: i,
                end: i,
                data: {
                    memory: {
                        jsHeapSizeLimit: t,
                        totalJSHeapSize: n,
                        usedJSHeapSize: r
                    }
                }
            }
        }(r9.performance.memory)]))
    } catch (e) {
        return []
    }
}
let oH = T.O.navigator;
async function oW({
    client: e,
    scope: t,
    replayId: n,
    event: r
}) {
    let i = {
        event_id: n,
        integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
    };
    e.emit("preprocessEvent", r, i);
    let s = await (0, eh.mG)(e.getOptions(), r, i, t, e, (0, $.rm)());
    if (!s) return null;
    e.emit("postprocessEvent", s, i), s.platform = s.platform || "javascript";
    let o = e.getSdkMetadata(),
        {
            name: a,
            version: l
        } = o ? .sdk || {};
    return s.sdk = { ...s.sdk,
        name: a || "sentry.javascript.unknown",
        version: l || "0.0.0"
    }, s
}
async function oG({
    recordingData: e,
    replayId: t,
    segmentId: n,
    eventContext: r,
    timestamp: i,
    session: s
}) {
    var o;
    let a, l = function({
            recordingData: e,
            headers: t
        }) {
            let n, r = `${JSON.stringify(t)}
`;
            if ("string" == typeof e) n = `${r}${e}`;
            else {
                let t = new TextEncoder().encode(r);
                (n = new Uint8Array(t.length + e.length)).set(t), n.set(e, t.length)
            }
            return n
        }({
            recordingData: e,
            headers: {
                segment_id: n
            }
        }),
        {
            urls: c,
            errorIds: u,
            traceIds: d,
            initialTimestamp: h
        } = r,
        f = (0, $.KU)(),
        p = (0, $.o5)(),
        m = f ? .getTransport(),
        g = f ? .getDsn();
    if (!f || !m || !g || !s.sampled) return (0, ef.XW)({});
    let _ = {
            type: "replay_event",
            replay_start_timestamp: h / 1e3,
            timestamp: i / 1e3,
            error_ids: u,
            trace_ids: d,
            urls: c,
            replay_id: t,
            segment_id: n,
            replay_type: s.sampled
        },
        y = await oW({
            scope: p,
            client: f,
            replayId: t,
            event: _
        });
    if (!y) return f.recordDroppedEvent("event_processor", "replay"), (0, ef.XW)({});
    delete y.sdkProcessingMetadata;
    let v = (o = f.getOptions().tunnel, ee(es(y, ei(y), o, g), [
        [{
            type: "replay_event"
        }, y],
        [{
            type: "replay_recording",
            length: "string" == typeof l ? new TextEncoder().encode(l).length : l.length
        }, l]
    ]));
    try {
        a = await m.send(v)
    } catch (t) {
        let e = Error(ie);
        try {
            e.cause = t
        } catch {}
        throw e
    }
    if ("number" == typeof a.statusCode && (a.statusCode < 200 || a.statusCode >= 300)) throw new oJ(a.statusCode);
    let b = t$({}, a);
    if (tF(b, "replay")) throw new oV(b);
    return a
}
class oJ extends Error {
    constructor(e) {
        super(`Transport returned status code ${e}`)
    }
}
class oV extends Error {
    constructor(e) {
        super("Rate limit hit"), this.rateLimits = e
    }
}
async function oK(e, t = {
    count: 0,
    interval: 5e3
}) {
    let {
        recordingData: n,
        onError: r
    } = e;
    if (n.length) try {
        return await oG(e), !0
    } catch (n) {
        if (n instanceof oJ || n instanceof oV) throw n;
        if ((0, k.o)("Replays", {
                _retryCount: t.count
            }), r && r(n), t.count >= 3) {
            let e = Error(`${ie} - max retries exceeded`);
            try {
                e.cause = n
            } catch {}
            throw e
        }
        return t.interval *= ++t.count, new Promise((n, r) => {
            tz(async () => {
                try {
                    await oK(e, t), n(!0)
                } catch (e) {
                    r(e)
                }
            }, t.interval)
        })
    }
}
let oX = "__THROTTLED";
class oQ {
    constructor({
        options: e,
        recordingOptions: t
    }) {
        this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
            sessionIdlePause: 3e5,
            sessionIdleExpire: 9e5
        }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
            errorIds: new Set,
            traceIds: new Set,
            urls: [],
            initialTimestamp: Date.now(),
            initialUrl: ""
        }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, n) {
            let r, i, s, o = n ? .maxWait ? Math.max(n.maxWait, t) : 0,
                a = n ? .setTimeoutImpl || setTimeout;

            function l() {
                return c(), r = e()
            }

            function c() {
                void 0 !== i && clearTimeout(i), void 0 !== s && clearTimeout(s), i = s = void 0
            }

            function u() {
                return i && clearTimeout(i), i = a(l, t), o && void 0 === s && (s = a(l, o)), r
            }
            return u.cancel = c, u.flush = function() {
                return void 0 !== i || void 0 !== s ? l() : r
            }, u
        }(() => this._flush(), this._options.flushMinDelay, { ...{
                maxWait: this._options.flushMaxDelay
            },
            setTimeoutImpl: tz
        }), this._throttledAddEvent = function(e, t, n) {
            let r = new Map,
                i = e => {
                    let t = e - 5;
                    r.forEach((e, n) => {
                        n < t && r.delete(n)
                    })
                },
                s = () => [...r.values()].reduce((e, t) => e + t, 0),
                o = !1;
            return (...t) => {
                let n = Math.floor(Date.now() / 1e3);
                if (i(n), s() >= 300) {
                    let e = o;
                    return o = !0, e ? "__SKIPPED" : oX
                }
                o = !1;
                let a = r.get(n) || 0;
                return r.set(n, a + 1), e(...t)
            }
        }((e, t) => (function(e, t, n) {
            return ob(e, t) ? ov(e, t, n) : Promise.resolve(null)
        })(this, e, t), 0, 0);
        let {
            slowClickTimeout: n,
            slowClickIgnoreSelectors: r
        } = this.getOptions(), i = n ? {
            threshold: Math.min(3e3, n),
            timeout: n,
            scrollTimeout: 300,
            ignoreSelector: r ? r.join(",") : ""
        } : void 0;
        i && (this.clickDetector = new sK(this, i)), this._handleVisibilityChange = () => {
            "visible" === r9.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
        }, this._handleWindowBlur = () => {
            let e = sY({
                category: "ui.blur"
            });
            this._doChangeToBackgroundTasks(e)
        }, this._handleWindowFocus = () => {
            let e = sY({
                category: "ui.focus"
            });
            this._doChangeToForegroundTasks(e)
        }, this._handleKeyboardEvent = e => {
            ! function(e, t) {
                if (!e.isEnabled()) return;
                e.updateUserActivity();
                let n = function(e) {
                    var t;
                    let {
                        metaKey: n,
                        shiftKey: r,
                        ctrlKey: i,
                        altKey: s,
                        key: o,
                        target: a
                    } = e;
                    if (!a || "INPUT" === (t = a).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !o) return null;
                    let l = n || i || s,
                        c = 1 === o.length;
                    if (!l && c) return null;
                    let u = (0, eU.Hd)(a, {
                            maxStringLength: 200
                        }) || "<unknown>",
                        d = s2(a, u);
                    return sY({
                        category: "ui.keyDown",
                        message: u,
                        data: { ...d.data,
                            metaKey: n,
                            shiftKey: r,
                            ctrlKey: i,
                            altKey: s,
                            key: o
                        }
                    })
                }(t);
                n && sH(e, n)
            }(this, e)
        }
    }
    getContext() {
        return this._context
    }
    isEnabled() {
        return this._isEnabled
    }
    isPaused() {
        return this._isPaused
    }
    isRecordingCanvas() {
        return !!this._canvas
    }
    getOptions() {
        return this._options
    }
    handleException(e) {
        this._options.onError && this._options.onError(e)
    }
    initializeSampling(e) {
        let {
            errorSampleRate: t,
            sessionSampleRate: n
        } = this._options, r = t <= 0 && n <= 0;
        if (this._requiresManualStart = r, !r) this._initializeSessionForSampling(e), this.session && !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", this._initializeRecording())
    }
    start() {
        if (this._isEnabled && "session" === this.recordingMode || this._isEnabled && "buffer" === this.recordingMode) return;
        this._updateUserActivity();
        let e = o_({
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 1,
            allowBuffering: !1
        });
        this.session = e, this._initializeRecording()
    }
    startBuffering() {
        if (this._isEnabled) return;
        let e = o_({
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }, {
            stickySession: this._options.stickySession,
            sessionSampleRate: 0,
            allowBuffering: !0
        });
        this.session = e, this.recordingMode = "buffer", this._initializeRecording()
    }
    startRecording() {
        try {
            var e;
            let t, n = this._canvas;
            this._stopRecording = sB({ ...this._recordingOptions,
                ..."buffer" === this.recordingMode ? {
                    checkoutEveryNms: 6e4
                } : this._options._experiments.continuousCheckout && {
                    checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                },
                emit: (e = this, t = !1, (n, r) => {
                    if (!e.checkAndHandleExpiredSession()) return;
                    let i = r || !t;
                    t = !0, e.clickDetector && function(e, t) {
                        try {
                            var n;
                            if (n = t, 3 !== n.type) return;
                            let {
                                source: r
                            } = t.data;
                            if (sV.has(r) && e.registerMutation(t.timestamp), r === ss.Scroll && e.registerScroll(t.timestamp), t.data.source === ss.MouseInteraction) {
                                let {
                                    type: n,
                                    id: r
                                } = t.data, i = sB.mirror.getNode(r);
                                i instanceof HTMLElement && n === so.Click && e.registerClick(i)
                            }
                        } catch {}
                    }(e.clickDetector, n), e.addUpdate(() => {
                        var t;
                        if ("buffer" === e.recordingMode && i && e.setInitialState(), !oy(e, n, i)) return !0;
                        if (!i) return !1;
                        let r = e.session;
                        if (t = e, i && t.session && 0 === t.session.segmentId && oy(t, function(e) {
                                let t = e.getOptions();
                                return {
                                    type: si.Custom,
                                    timestamp: Date.now(),
                                    data: {
                                        tag: "options",
                                        payload: {
                                            shouldRecordCanvas: e.isRecordingCanvas(),
                                            sessionSampleRate: t.sessionSampleRate,
                                            errorSampleRate: t.errorSampleRate,
                                            useCompressionOption: t.useCompression,
                                            blockAllMedia: t.blockAllMedia,
                                            maskAllText: t.maskAllText,
                                            maskAllInputs: t.maskAllInputs,
                                            useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                            networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                            networkCaptureBodies: t.networkCaptureBodies,
                                            networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                            networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                        }
                                    }
                                }
                            }(t), !1), "buffer" === e.recordingMode && r && e.eventBuffer) {
                            let t = e.eventBuffer.getEarliestTimestamp();
                            t && (r.started = t, e.getOptions().stickySession && od(r))
                        }
                        return !!r ? .previousSessionId || ("session" === e.recordingMode && e.flush(), !0)
                    })
                }),
                .../iPhone|iPad|iPod/i.test(oH ? .userAgent ? ? "") || /Macintosh/i.test(oH ? .userAgent ? ? "") && oH ? .maxTouchPoints && oH ? .maxTouchPoints > 1 ? {
                    sampling: {
                        mousemove: !1
                    }
                } : {},
                onMutation : this._onMutationHandler.bind(this),
                ...n ? {
                    recordCanvas: n.recordCanvas,
                    getCanvasManager: n.getCanvasManager,
                    sampling: n.sampling,
                    dataURLOptions: n.dataURLOptions
                } : {}
            })
        } catch (e) {
            this.handleException(e)
        }
    }
    stopRecording() {
        try {
            return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
        } catch (e) {
            return this.handleException(e), !1
        }
    }
    async stop({
        forceFlush: e = !1,
        reason: t
    } = {}) {
        if (this._isEnabled) {
            this._isEnabled = !1;
            try {
                ow(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                        force: !0
                    }), this.eventBuffer ? .destroy(), this.eventBuffer = null,
                    function() {
                        if (oc()) try {
                            r9.sessionStorage.removeItem(r7)
                        } catch {}
                    }(), this.session = void 0
            } catch (e) {
                this.handleException(e)
            }
        }
    }
    pause() {
        this._isPaused || (this._isPaused = !0, this.stopRecording())
    }
    resume() {
        this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording())
    }
    async sendBufferedReplayOrFlush({
        continueRecording: e = !0
    } = {}) {
        if ("session" === this.recordingMode) return this.flushImmediate();
        let t = Date.now();
        await this.flushImmediate();
        let n = this.stopRecording();
        e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording())
    }
    addUpdate(e) {
        let t = e();
        "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
    }
    triggerUserActivity() {
        if (this._updateUserActivity(), !this._stopRecording) {
            if (!this._checkSession()) return;
            this.resume();
            return
        }
        this.checkAndHandleExpiredSession(), this._updateSessionActivity()
    }
    updateUserActivity() {
        this._updateUserActivity(), this._updateSessionActivity()
    }
    conditionalFlush() {
        return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
    }
    flush() {
        return this._debouncedFlush()
    }
    flushImmediate() {
        return this._debouncedFlush(), this._debouncedFlush.flush()
    }
    cancelFlush() {
        this._debouncedFlush.cancel()
    }
    getSessionId() {
        return this.session ? .id
    }
    checkAndHandleExpiredSession() {
        return this._lastActivity && op(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled ? void this.pause() : !!this._checkSession()
    }
    setInitialState() {
        let e = `${r9.location.pathname}${r9.location.hash}${r9.location.search}`,
            t = `${r9.location.origin}${e}`;
        this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
    }
    throttledAddEvent(e, t) {
        let n = this._throttledAddEvent(e, t);
        if (n === oX) {
            let e = sY({
                category: "replay.throttled"
            });
            this.addUpdate(() => !oy(this, {
                type: 5,
                timestamp: e.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: e,
                    metric: !0
                }
            }))
        }
        return n
    }
    getCurrentRoute() {
        let e = this.lastActiveSpan || (0, eo.Bk)(),
            t = e && (0, eo.zU)(e),
            n = (t && (0, eo.et)(t).data || {})[ep.i_];
        if (t && n && ["route", "custom"].includes(n)) return (0, eo.et)(t).description
    }
    _initializeRecording() {
        this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
            useCompression: e,
            workerUrl: t
        }) {
            if (e && window.Worker) {
                let e = function(e) {
                    try {
                        let t = e || function() {
                            if ("undefined" == typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ || !__SENTRY_EXCLUDE_REPLAY_WORKER__) {
                                let e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(t,e){for(var i=new n(31),s=0;s<31;++s)i[s]=e+=1<<t[s-1];var a=new r(i[30]);for(s=1;s<30;++s)for(var o=i[s];o<i[s+1];++o)a[o]=o-i[s]<<5|s;return{b:i,r:a}},o=a(e,2),h=o.b,f=o.r;h[28]=258,f[258]=28;for(var l=a(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,s=0,a=new n(r);s<i;++s)t[s]&&++a[t[s]-1];var o,h=new n(r);for(s=1;s<r;++s)h[s]=h[s-1]+a[s-1]<<1;if(e){o=new n(1<<r);var f=15-r;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],c=r-t[s],v=h[t[s]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>f]=l}else for(o=new n(i),s=0;s<i;++s)t[s]&&(o[s]=u[h[t[s]-1]++]>>15-t[s]);return o},p=new t(288);for(c=0;c<144;++c)p[c]=8;for(c=144;c<256;++c)p[c]=9;for(c=256;c<280;++c)p[c]=7;for(c=280;c<288;++c)p[c]=8;var g=new t(32);for(c=0;c<32;++c)g[c]=5;var w=d(p,9,0),y=d(g,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s:s,f:r[s]});var a=i.length,o=i.slice();if(!a)return{t:F,l:0};if(1==a){var h=new t(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var f=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:f.f+l.f,l:f,r:l};c!=a-1;)f=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:f.f+l.f,l:f,r:l};var d=o[0].s;for(s=1;s<a;++s)o[s].s>d&&(d=o[s].s);var p=new n(d+1),g=A(i[c-1],p,0);if(g>e){s=0;var w=0,y=g-e,m=1<<y;for(o.sort((function(t,n){return p[n.s]-p[t.s]||t.f-n.f}));s<a;++s){var b=o[s].s;if(!(p[b]>e))break;w+=m-(1<<g-p[b]),p[b]=e}for(w>>=y;w>0;){var M=o[s].s;p[M]<e?w-=1<<e-p[M]++-1:++s}for(;s>=0&&w;--s){var E=o[s].s;p[E]==e&&(--p[E],++w)}g=e}return{t:new t(p),l:g}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,s=t[0],a=1,o=function(t){e[i++]=t},h=1;h<=r;++h)if(t[h]==s&&h!=r)++a;else{if(!s&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(s),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(s);a=1,s=t[h]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var s=0;s<e;++s)t[i+s+4]=r[s];return 8*(i+4+e)},U=function(t,r,a,o,h,f,l,u,c,v,m){z(r,m++,a),++h[256];for(var b=x(h,15),M=b.t,E=b.l,A=x(f,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[s[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(h,p)+T(f,g)+l,X=T(h,M)+T(f,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[s[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=w,P=p,Q=y,R=g;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,s=0|r.length,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)i+=e+=r[a];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(s,a,o,h,u){if(!u&&(u={l:1},a.dictionary)){var c=a.dictionary.subarray(-32768),v=new t(c.length+s.length);v.set(c),v.set(s,c.length),s=v,u.w=c.length}return function(s,a,o,h,u,c){var v=c.z||s.length,d=new t(h+v+5*(1+Math.ceil(v/7e3))+u),p=d.subarray(h,d.length-u),g=c.l,w=7&(c.r||0);if(a){w&&(p[0]=c.r>>3);for(var y=C[a-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(s[t]^s[t+1]<<A^s[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!g)){w=U(s,p,0,F,I,S,O,q,G,j-G,w),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(s[j+Q]==s[j+Q-W]){for(var $=0;$<Z&&s[j+$]==s[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|f[Q]<<18|l[R];var it=31&f[Q],st=31&l[R];O+=e[it]+i[st],++I[257+it],++S[st],B=j+Q,++L}else F[q++]=s[j],++I[s[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=s[j],++I[s[j]];w=U(s,p,g,F,I,S,O,q,G,j-G,w),g||(c.r=7&w|p[w/8|0]<<3,w-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+g;j+=65535){var at=j+65535;at>=v&&(p[w/8|0]=g,at=v),w=k(p,w+1,s.subarray(j,at))}c.i=v}return b(d,0,h+m(w)+u)}(s,null==a.level?6:a.level,null==a.mem?u.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(s.length)))):20:12+a.mem,o,h,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var s=this.b.length-this.s.z;this.b.set(n.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(s),32768),this.s.z=n.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n.prototype.flush=function(){this.ondata||E(5),this.s.l&&E(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t.prototype.flush=function(){G.prototype.flush.call(this)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),s=0,a=function(t){i[s++]=t},o=0;o<e;++o){if(s+5>i.length){var h=new t(s+8+(e-o<<1));h.set(i),i=h}var f=n.charCodeAt(o);f<128||r?a(f):f<2048?(a(192|f>>6),a(128|63&f)):f>55295&&f<57344?(a(240|(f=65536+(1047552&f)|1023&n.charCodeAt(++o))>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|63&f)):(a(224|f>>12),a(128|f>>6&63),a(128|63&f))}return b(i,0,s)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),s=i.length;return q(i,n),j(i,s-8,r.d()),j(i,s-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                return URL.createObjectURL(e)
                            }
                            return ""
                        }();
                        if (!t) return;
                        let n = new Worker(t);
                        return new ol(n)
                    } catch (e) {}
                }(t);
                if (e) return e
            }
            return new os
        }({
            useCompression: this._options.useCompression,
            workerUrl: this._options.workerUrl
        }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
    }
    _initializeSessionForSampling(e) {
        let t = this._options.errorSampleRate > 0,
            n = o_({
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
                previousSessionId: e
            }, {
                stickySession: this._options.stickySession,
                sessionSampleRate: this._options.sessionSampleRate,
                allowBuffering: t
            });
        this.session = n
    }
    _checkSession() {
        if (!this.session) return !1;
        let e = this.session;
        return !og(e, {
            sessionIdleExpire: this.timeouts.sessionIdleExpire,
            maxReplayDuration: this._options.maxReplayDuration
        }) || (this._refreshSession(e), !1)
    }
    async _refreshSession(e) {
        this._isEnabled && (await this.stop({
            reason: "refresh session"
        }), this.initializeSampling(e.id))
    }
    _addListeners() {
        try {
            r9.document.addEventListener("visibilitychange", this._handleVisibilityChange), r9.addEventListener("blur", this._handleWindowBlur), r9.addEventListener("focus", this._handleWindowFocus), r9.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (! function(e, {
                autoFlushOnFeedback: t
            }) {
                let n = (0, $.KU)();
                te(s1(e)), to(t => {
                    if (!e.isEnabled()) return;
                    let n = function(e) {
                        let {
                            from: t,
                            to: n
                        } = e, r = Date.now() / 1e3;
                        return {
                            type: "navigation.push",
                            start: r,
                            end: r,
                            name: n,
                            data: {
                                previous: t
                            }
                        }
                    }(t);
                    null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (oO(e, [n]), !1)))
                });
                let r = (0, $.KU)();
                r && r.on("beforeAddBreadcrumb", t => (function(e, t) {
                    var n;
                    if (!e.isEnabled() || !oT(t)) return;
                    let r = (n = t, !oT(n) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(n.category) || n.category.startsWith("ui.") ? null : "console" === n.category ? function(e) {
                        let t = e.data ? .arguments;
                        if (!Array.isArray(t) || 0 === t.length) return sY(e);
                        let n = !1,
                            r = t.map(e => {
                                if (!e) return e;
                                if ("string" == typeof e) return e.length > 5e3 ? (n = !0, `${e.slice(0,5e3)}…`) : e;
                                if ("object" == typeof e) try {
                                    let t = (0, Z.S8)(e, 7);
                                    if (JSON.stringify(t).length > 5e3) return n = !0, `${JSON.stringify(t,null,2).slice(0,5e3)}…`;
                                    return t
                                } catch {}
                                return e
                            });
                        return sY({ ...e,
                            data: { ...e.data,
                                arguments: r,
                                ...n ? {
                                    _meta: {
                                        warnings: ["CONSOLE_ARG_TRUNCATED"]
                                    }
                                } : {}
                            }
                        })
                    }(n) : sY(n));
                    r && sH(e, r)
                })(e, t));
                let i = (0, $.KU)();
                try {
                    let {
                        networkDetailAllowUrls: t,
                        networkDetailDenyUrls: n,
                        networkCaptureBodies: r,
                        networkRequestHeaders: s,
                        networkResponseHeaders: o
                    } = e.getOptions(), a = {
                        replay: e,
                        networkDetailAllowUrls: t,
                        networkDetailDenyUrls: n,
                        networkCaptureBodies: r,
                        networkRequestHeaders: s,
                        networkResponseHeaders: o
                    };
                    i && i.on("beforeAddBreadcrumb", (e, t) => (function(e, t, n) {
                        if (t.data) try {
                            var r, i, s, o;
                            if (r = t, "xhr" === r.category && (i = n, i ? .xhr) && (! function(e, t) {
                                    let {
                                        xhr: n,
                                        input: r
                                    } = t;
                                    if (!n) return;
                                    let i = ok(r),
                                        s = n.getResponseHeader("content-length") ? oR(n.getResponseHeader("content-length")) : function(e, t) {
                                            try {
                                                let n = "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e;
                                                return ok(n)
                                            } catch {
                                                return
                                            }
                                        }(n.response, n.responseType);
                                    void 0 !== i && (e.data.request_body_size = i), void 0 !== s && (e.data.response_body_size = s)
                                }(t, n), oq(t, n, e)), s = t, "fetch" === s.category && (o = n, o ? .response)) {
                                let {
                                    input: r,
                                    response: i
                                } = n, s = ok(r ? r8(r) : void 0), o = i ? oR(i.headers.get("content-length")) : void 0;
                                void 0 !== s && (t.data.request_body_size = s), void 0 !== o && (t.data.response_body_size = o), oM(t, n, e)
                            }
                        } catch (e) {}
                    })(a, e, t))
                } catch {}
                let s = Object.assign((t, n) => !e.isEnabled() || e.isPaused() ? t : "replay_event" === t.type ? (delete t.breadcrumbs, t) : !t.type || oE(t) || oS(t) ? e.checkAndHandleExpiredSession() ? oS(t) ? (e.flush(), t.contexts.feedback.replay_id = e.getSessionId(), e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                    type: si.Custom,
                    timestamp: 1e3 * t.timestamp,
                    data: {
                        tag: "breadcrumb",
                        payload: {
                            timestamp: t.timestamp,
                            type: "default",
                            category: "sentry.feedback",
                            data: {
                                feedbackId: t.event_id
                            }
                        }
                    }
                }), !1)), t) : !t.type && t.exception && t.exception.values && t.exception.values.length && n.originalException ? .__rrweb__ && !e.getOptions()._experiments.captureExceptions ? null : (("buffer" === e.recordingMode && t.message !== ie && t.exception && !t.type && ou(e.getOptions().errorSampleRate) || "session" === e.recordingMode) && (t.tags = { ...t.tags,
                    replayId: e.getSessionId()
                }), t) : (ow(), t) : t, {
                    id: "Replay"
                });
                (0, k.SA)(s), n && (n.on("beforeSendEvent", t => {
                    e.isEnabled() && !t.type && function(e, t) {
                        let n = t.exception ? .values ? .[0] ? .value;
                        "string" == typeof n && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && sH(e, sY({
                            category: "replay.hydrate-error",
                            data: {
                                url: (0, eU.$N)()
                            }
                        }))
                    }(e, t)
                }), n.on("afterSendEvent", (t, n) => {
                    if (!e.isEnabled() || t.type && !oE(t)) return;
                    let r = n ? .statusCode;
                    if (r && !(r < 200) && !(r >= 300)) {
                        if (oE(t)) return void
                        function(e, t) {
                            let n = e.getContext();
                            t.contexts ? .trace ? .trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
                        }(e, t);
                        ! function(e, t) {
                            let n = e.getContext();
                            if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId) return;
                            let {
                                beforeErrorSampling: r
                            } = e.getOptions();
                            ("function" != typeof r || r(t)) && tz(async () => {
                                try {
                                    await e.sendBufferedReplayOrFlush()
                                } catch (t) {
                                    e.handleException(t)
                                }
                            })
                        }(e, t)
                    }
                }), n.on("createDsc", t => {
                    let n = e.getSessionId();
                    n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
                }), n.on("spanStart", t => {
                    e.lastActiveSpan = t
                }), n.on("spanEnd", t => {
                    e.lastActiveSpan = t
                }), n.on("beforeSendFeedback", async (n, r) => {
                    let i = e.getSessionId();
                    r ? .includeReplay && e.isEnabled() && i && n.contexts ? .feedback && ("api" === n.contexts.feedback.source && t && await e.flush(), n.contexts.feedback.replay_id = i)
                }), t && n.on("openFeedbackWidget", async () => {
                    await e.flush()
                }))
            }(this, {
                autoFlushOnFeedback: this._options._experiments.autoFlushOnFeedback
            }), this._hasInitializedCoreListeners = !0)
        } catch (e) {
            this.handleException(e)
        }
        this._performanceCleanupCallback = function(e) {
            function t(t) {
                e.performanceEntries.includes(t) || e.performanceEntries.push(t)
            }

            function n({
                entries: e
            }) {
                e.forEach(t)
            }
            let r = [];
            return ["navigation", "paint", "resource"].forEach(e => {
                r.push(n5(e, n))
            }), r.push(n0(s3(s8, e)), nZ(s3(s9, e)), n1(s3(s7, e)), n2(s3(oe, e))), () => {
                r.forEach(e => e())
            }
        }(this)
    }
    _removeListeners() {
        try {
            r9.document.removeEventListener("visibilitychange", this._handleVisibilityChange), r9.removeEventListener("blur", this._handleWindowBlur), r9.removeEventListener("focus", this._handleWindowFocus), r9.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
        } catch (e) {
            this.handleException(e)
        }
    }
    _doChangeToBackgroundTasks(e) {
        this.session && (om(this.session, {
            maxReplayDuration: this._options.maxReplayDuration,
            sessionIdleExpire: this.timeouts.sessionIdleExpire
        }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush()))
    }
    _doChangeToForegroundTasks(e) {
        if (this.session) this.checkAndHandleExpiredSession() && e && this._createCustomBreadcrumb(e)
    }
    _updateUserActivity(e = Date.now()) {
        this._lastActivity = e
    }
    _updateSessionActivity(e = Date.now()) {
        this.session && (this.session.lastActivity = e, this._maybeSaveSession())
    }
    _createCustomBreadcrumb(e) {
        this.addUpdate(() => {
            this.throttledAddEvent({
                type: si.Custom,
                timestamp: e.timestamp || 0,
                data: {
                    tag: "breadcrumb",
                    payload: e
                }
            })
        })
    }
    _addPerformanceEntries() {
        let e = this.performanceEntries.map(s4).filter(Boolean).concat(this.replayPerformanceEntries);
        if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
            let t = this._context.initialTimestamp / 1e3;
            e = e.filter(e => e.start >= t)
        }
        return Promise.all(oO(this, e))
    }
    _clearContext() {
        this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
    }
    _updateInitialTimestampFromEventBuffer() {
        let {
            session: e,
            eventBuffer: t
        } = this;
        if (!e || !t || this._requiresManualStart || e.segmentId) return;
        let n = t.getEarliestTimestamp();
        n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
    }
    _popEventContext() {
        let e = {
            initialTimestamp: this._context.initialTimestamp,
            initialUrl: this._context.initialUrl,
            errorIds: Array.from(this._context.errorIds),
            traceIds: Array.from(this._context.traceIds),
            urls: this._context.urls
        };
        return this._clearContext(), e
    }
    async _runFlush() {
        let e = this.getSessionId();
        if (this.session && this.eventBuffer && e && (await this._addPerformanceEntries(), this.eventBuffer ? .hasEvents)) {
            if ((await oz(this), this.eventBuffer) && e === this.getSessionId()) try {
                this._updateInitialTimestampFromEventBuffer();
                let t = Date.now();
                if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw Error("Session is too long, not sending replay");
                let n = this._popEventContext(),
                    r = this.session.segmentId++;
                this._maybeSaveSession();
                let i = await this.eventBuffer.finish();
                await oK({
                    replayId: e,
                    recordingData: i,
                    segmentId: r,
                    eventContext: n,
                    session: this.session,
                    timestamp: t,
                    onError: e => this.handleException(e)
                })
            } catch (t) {
                this.handleException(t), this.stop({
                    reason: "sendReplay"
                });
                let e = (0, $.KU)();
                e && e.recordDroppedEvent(t instanceof oV ? "ratelimit_backoff" : "send_error", "replay")
            }
        }
    }
    async _flush({
        force: e = !1
    } = {}) {
        if (!this._isEnabled && !e || !this.checkAndHandleExpiredSession() || !this.session) return;
        let t = this.session.started,
            n = Date.now() - t;
        this._debouncedFlush.cancel();
        let r = n < this._options.minReplayDuration,
            i = n > this._options.maxReplayDuration + 5e3;
        if (r || i) {
            r && this._debouncedFlush();
            return
        }
        let s = this.eventBuffer;
        s && 0 === this.session.segmentId && s.hasCheckout;
        let o = !!this._flushLock;
        this._flushLock || (this._flushLock = this._runFlush());
        try {
            await this._flushLock
        } catch (e) {
            this.handleException(e)
        } finally {
            this._flushLock = void 0, o && this._debouncedFlush()
        }
    }
    _maybeSaveSession() {
        this.session && this._options.stickySession && od(this.session)
    }
    _onMutationHandler(e) {
        let t = e.length,
            n = this._options.mutationLimit,
            r = this._options.mutationBreadcrumbLimit,
            i = n && t > n;
        if (t > r || i) {
            let e = sY({
                category: "replay.mutations",
                data: {
                    count: t,
                    limit: i
                }
            });
            this._createCustomBreadcrumb(e)
        }
        return !i || (this.stop({
            reason: "mutationLimit",
            forceFlush: "session" === this.recordingMode
        }), !1)
    }
}

function oY(e, t) {
    return [...e, ...t].join(",")
}
let oZ = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
    o0 = ["content-length", "content-type", "accept"],
    o1 = !1;
class o2 {
    constructor({
        flushMinDelay: e = 5e3,
        flushMaxDelay: t = 5500,
        minReplayDuration: n = 4999,
        maxReplayDuration: r = 36e5,
        stickySession: i = !0,
        useCompression: s = !0,
        workerUrl: o,
        _experiments: a = {},
        maskAllText: l = !0,
        maskAllInputs: c = !0,
        blockAllMedia: u = !0,
        mutationBreadcrumbLimit: d = 750,
        mutationLimit: h = 1e4,
        slowClickTimeout: f = 7e3,
        slowClickIgnoreSelectors: p = [],
        networkDetailAllowUrls: m = [],
        networkDetailDenyUrls: g = [],
        networkCaptureBodies: _ = !0,
        networkRequestHeaders: y = [],
        networkResponseHeaders: v = [],
        mask: b = [],
        maskAttributes: E = ["title", "placeholder", "aria-label"],
        unmask: S = [],
        block: T = [],
        unblock: w = [],
        ignore: O = [],
        maskFn: C,
        beforeAddRecordingEvent: k,
        beforeErrorSampling: R,
        onError: I
    } = {}) {
        this.name = "Replay";
        let N = function({
            mask: e,
            unmask: t,
            block: n,
            unblock: r,
            ignore: i
        }) {
            return {
                maskTextSelector: oY(e, [".sentry-mask", "[data-sentry-mask]"]),
                unmaskTextSelector: oY(t, []),
                blockSelector: oY(n, [".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]),
                unblockSelector: oY(r, []),
                ignoreSelector: oY(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
            }
        }({
            mask: b,
            unmask: S,
            block: T,
            unblock: w,
            ignore: O
        });
        if (this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: l,
                maskInputOptions: {
                    password: !0
                },
                maskTextFn: C,
                maskInputFn: C,
                maskAttributeFn: (e, t, n) => (function({
                    el: e,
                    key: t,
                    maskAttributes: n,
                    maskAllText: r,
                    privacyOptions: i,
                    value: s
                }) {
                    return !r || i.unmaskTextSelector && e.matches(i.unmaskTextSelector) ? s : n.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? s.replace(/[\S]/g, "*") : s
                })({
                    maskAttributes: E,
                    maskAllText: l,
                    privacyOptions: N,
                    key: e,
                    value: t,
                    el: n
                }),
                ...N,
                slimDOMOptions: "all",
                inlineStylesheet: !0,
                inlineImages: !1,
                collectFonts: !0,
                errorHandler: e => {
                    try {
                        e.__rrweb__ = !0
                    } catch (e) {}
                },
                recordCrossOriginIframes: !!a.recordCrossOriginIframes
            }, this._initialOptions = {
                flushMinDelay: e,
                flushMaxDelay: t,
                minReplayDuration: Math.min(n, 15e3),
                maxReplayDuration: Math.min(r, 36e5),
                stickySession: i,
                useCompression: s,
                workerUrl: o,
                blockAllMedia: u,
                maskAllInputs: c,
                maskAllText: l,
                mutationBreadcrumbLimit: d,
                mutationLimit: h,
                slowClickTimeout: f,
                slowClickIgnoreSelectors: p,
                networkDetailAllowUrls: m,
                networkDetailDenyUrls: g,
                networkCaptureBodies: _,
                networkRequestHeaders: o5(y),
                networkResponseHeaders: o5(v),
                beforeAddRecordingEvent: k,
                beforeErrorSampling: R,
                onError: I,
                _experiments: a
            }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${oZ}` : oZ), this._isInitialized && r3()) throw Error("Multiple Sentry Session Replay instances are not supported");
        this._isInitialized = !0
    }
    get _isInitialized() {
        return o1
    }
    set _isInitialized(e) {
        o1 = e
    }
    afterAllSetup(e) {
        r3() && !this._replay && (this._setup(e), this._initialize(e))
    }
    start() {
        this._replay && this._replay.start()
    }
    startBuffering() {
        this._replay && this._replay.startBuffering()
    }
    stop() {
        return this._replay ? this._replay.stop({
            forceFlush: "session" === this._replay.recordingMode
        }) : Promise.resolve()
    }
    flush(e) {
        return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve()
    }
    getReplayId() {
        if (this._replay ? .isEnabled()) return this._replay.getSessionId()
    }
    getRecordingMode() {
        if (this._replay ? .isEnabled()) return this._replay.recordingMode
    }
    _initialize(e) {
        this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling())
    }
    _setup(e) {
        let t = function(e, t) {
            let n = t.getOptions(),
                r = {
                    sessionSampleRate: 0,
                    errorSampleRate: 0,
                    ...e
                },
                i = (0, ed.i)(n.replaysSessionSampleRate),
                s = (0, ed.i)(n.replaysOnErrorSampleRate);
            return null == i && null == s && (0, w.pq)(() => {
                console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
            }), null != i && (r.sessionSampleRate = i), null != s && (r.errorSampleRate = s), r
        }(this._initialOptions, e);
        this._replay = new oQ({
            options: t,
            recordingOptions: this._recordingOptions
        })
    }
    _maybeLoadFromReplayCanvasIntegration(e) {
        try {
            let t = e.getIntegrationByName("ReplayCanvas");
            if (!t) return;
            this._replay._canvas = t.getOptions()
        } catch {}
    }
}

function o5(e) {
    return [...o0, ...e.map(e => e.toLowerCase())]
}
globalThis._sentryRewritesTunnelPath = void 0, globalThis.SENTRY_RELEASE = {
    id: "b652a4e3ad8e7e6e5e959a631eeea25ca6f5b334"
}, globalThis._sentryBasePath = void 0, globalThis._sentryRewriteFramesAssetPrefixPath = "", globalThis._sentryAssetPrefix = "https://embed-cdn.spotifycdn.com", globalThis._sentryExperimentalThirdPartyOriginStackFrames = void 0, ! function(e) {
    r0 && (0, w.pq)(() => {
        console.warn("[@sentry/nextjs] You are calling `Sentry.init()` more than once on the client. This can happen if you have both a `sentry.client.config.ts` and a `instrumentation-client.ts` file with `Sentry.init()` calls. It is recommended to call `Sentry.init()` once in `instrumentation-client.ts`.")
    }), r0 = !0;
    let t = {
        environment: function(e) {
            let t = e ? tJ.env.NEXT_PUBLIC_VERCEL_ENV : tJ.env.VERCEL_ENV;
            return t ? `vercel-${t}` : void 0
        }(!0) || "production",
        defaultIntegrations: function(e) {
            let t = tW(e);
            ("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && t.push(function(e = {}) {
                let t = rN({ ...e,
                        instrumentNavigation: !1,
                        instrumentPageLoad: !1,
                        onRequestSpanStart(...t) {
                            let [n, {
                                headers: r
                            }] = t;
                            return r ? .get("next-router-prefetch") && n ? .setAttribute("http.request.prefetch", !0), e.onRequestSpanStart ? .(...t)
                        }
                    }),
                    {
                        instrumentPageLoad: n = !0,
                        instrumentNavigation: r = !0
                    } = e;
                return { ...t,
                    afterAllSetup(e) {
                        r && function(e) {
                            if (ej.document.getElementById("__NEXT_DATA__")) rW.events.on("routeChangeStart", t => {
                                let n, r, i = e9(t),
                                    s = function(e) {
                                        let t = ej.__BUILD_MANIFEST ? .sortedPages;
                                        if (t) return t.find(t => {
                                            let n = function(e) {
                                                let t = e.split("/"),
                                                    n = "";
                                                t[t.length - 1] ? .match(/^\[\[\.\.\..+\]\]$/) && (t.pop(), n = "(?:/(.+?))?");
                                                let r = t.map(e => e.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)")).join("/");
                                                return RegExp(`^${r}${n}(?:/)?$`)
                                            }(t);
                                            return e.match(n)
                                        })
                                    }(i);
                                s ? (n = s, r = "route") : (n = i, r = "url"), rx(e, {
                                    name: n,
                                    attributes: {
                                        [ep.uT]: "navigation",
                                        [ep.JD]: "auto.navigation.nextjs.pages_router_instrumentation",
                                        [ep.i_]: r
                                    }
                                })
                            });
                            else {
                                (t, n) => {
                                    let r = new URL(t, ej.location.href).pathname;
                                    "router-patch" === rL && (rL = "transition-start-hook");
                                    let i = rU.current;
                                    i ? (i.updateName(r), i.setAttributes({
                                        "navigation.type": `router.${n}`
                                    }), rU.current = void 0) : rx(e, {
                                        name: r,
                                        attributes: {
                                            [ep.uT]: "navigation",
                                            [ep.JD]: "auto.navigation.nextjs.app_router_instrumentation",
                                            [ep.i_]: "url",
                                            "navigation.type": `router.${n}`
                                        }
                                    })
                                }, ej.addEventListener("popstate", () => {
                                    rU.current ? .isRecording() ? (rU.current.updateName(ej.location.pathname), rU.current.setAttribute(ep.i_, "url")) : rU.current = rx(e, {
                                        name: ej.location.pathname,
                                        attributes: {
                                            [ep.JD]: "auto.navigation.nextjs.app_router_instrumentation",
                                            [ep.i_]: "url",
                                            "navigation.type": "browser.popstate"
                                        }
                                    })
                                });
                                let t = !1,
                                    n = 0,
                                    r = setInterval(() => {
                                        n++;
                                        let i = rj ? .next ? .router ? ? rj ? .nd ? .router;
                                        t || n > 500 ? clearInterval(r) : i && (clearInterval(r), t = !0, rB(e, i, rU), ["nd", "next"].forEach(t => {
                                            let n = rj[t];
                                            n && (rj[t] = new Proxy(n, {
                                                set: (t, n, r) => ("router" === n && "object" == typeof r && null !== r && rB(e, r, rU), t[n] = r, !0)
                                            }))
                                        }))
                                    }, 20)
                            }
                        }(e), t.afterAllSetup(e), n && function(e) {
                            if (ej.document.getElementById("__NEXT_DATA__")) {
                                let {
                                    route: t,
                                    params: n,
                                    sentryTrace: r,
                                    baggage: i
                                } = function() {
                                    let e, t = ej.document.getElementById("__NEXT_DATA__");
                                    if (t ? .innerHTML) try {
                                        e = JSON.parse(t.innerHTML)
                                    } catch (e) {
                                        rH.T && w.vF.warn("Could not extract __NEXT_DATA__")
                                    }
                                    if (!e) return {};
                                    let n = {},
                                        {
                                            page: r,
                                            query: i,
                                            props: s
                                        } = e;
                                    return n.route = r, n.params = i, s ? .pageProps && (n.sentryTrace = s.pageProps._sentryTraceData, n.baggage = s.pageProps._sentryBaggage), n
                                }(), s = (0, rb.D0)(i), o = t || ej.location.pathname;
                                s ? .["sentry-transaction"] && "/_error" === o && (o = (o = s["sentry-transaction"]).replace(/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|TRACE|CONNECT)\s+/i, ""));
                                let a = (0, el.k3)();
                                rA(e, {
                                    name: o,
                                    startTime: a ? a / 1e3 : void 0,
                                    attributes: {
                                        [ep.uT]: "pageload",
                                        [ep.JD]: "auto.pageload.nextjs.pages_router_instrumentation",
                                        [ep.i_]: t ? "route" : "url",
                                        ...n && e.getOptions().sendDefaultPii && { ...n
                                        }
                                    }
                                }, {
                                    sentryTrace: r,
                                    baggage: i
                                })
                            } else {
                                let t = (0, el.k3)();
                                rA(e, {
                                    name: ej.location.pathname,
                                    startTime: t ? t / 1e3 : void 0,
                                    attributes: {
                                        [ep.uT]: "pageload",
                                        [ep.JD]: "auto.pageload.nextjs.app_router_instrumentation",
                                        [ep.i_]: "url"
                                    }
                                })
                            }
                        }(e)
                    }
                }
            }());
            let n = r1._sentryRewriteFramesAssetPrefixPath || "",
                r = rZ.env._sentryBasePath || r1._sentryBasePath,
                i = "true" === rZ.env._experimentalThirdPartyOriginStackFrames || "true" === r1._experimentalThirdPartyOriginStackFrames;
            return t.push(rX({
                assetPrefix: "https://embed-cdn.spotifycdn.com",
                basePath: r,
                rewriteFramesAssetPrefixPath: n,
                experimentalThirdPartyOriginStackFrames: i
            })), t
        }(e),
        release: "b652a4e3ad8e7e6e5e959a631eeea25ca6f5b334",
        ...e
    };
    ! function(e) {
        let t = rQ.env._sentryRewritesTunnelPath || rY._sentryRewritesTunnelPath;
        if (t && e.dsn) {
            let n = (0, Q.hH)(e.dsn);
            if (!n) return;
            let r = n.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
            if (r) {
                let i = r[1],
                    s = r[2],
                    o = `${t}?o=${i}&p=${n.projectId}`;
                s && (o += `&r=${s}`), e.tunnel = o, rH.T && w.vF.info(`Tunneling events to "${o}"`)
            } else rH.T && w.vF.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.")
        }
    }(t), C(t, "nextjs", ["nextjs", "react"]),
        function(e) {
            let t = { ...e
            };
            C(t, "react"), (0, k.o)("react", {
                    version: tG.version
                }),
                function(e = {}) {
                    var t;
                    let n = !e.skipBrowserExtensionCheck && !! function() {
                            if (void 0 === ej.window || ej.nw) return !1;
                            let e = ej.chrome || ej.browser;
                            if (!e ? .runtime ? .id) return !1;
                            let t = (0, eU.$N)();
                            return !(ej === ej.top && ["chrome-extension", "moz-extension", "ms-browser-extension", "safari-web-extension"].some(e => t.startsWith(`${e}://`)))
                        }(),
                        r = { ...e,
                            enabled: !n && e.enabled,
                            stackParser: (0, H.vk)(e.stackParser || tL),
                            integrations: function(e) {
                                let t, n = e.defaultIntegrations || [],
                                    r = e.integrations;
                                if (n.forEach(e => {
                                        e.isDefaultInstance = !0
                                    }), Array.isArray(r)) t = [...n, ...r];
                                else if ("function" == typeof r) {
                                    let e = r(n);
                                    t = Array.isArray(e) ? e : [e]
                                } else t = n;
                                let i = {};
                                return t.forEach(e => {
                                    let {
                                        name: t
                                    } = e, n = i[t];
                                    n && !n.isDefaultInstance && e.isDefaultInstance || (i[t] = e)
                                }), Object.values(i)
                            }({
                                integrations: e.integrations,
                                defaultIntegrations: null == e.defaultIntegrations ? tW() : e.defaultIntegrations
                            }),
                            transport: e.transport || tH
                        };
                    !0 === r.debug && (R.T ? w.vF.enable() : (0, w.pq)(() => {
                        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                    })), (0, $.o5)().update(r.initialScope);
                    let i = new eq(r);
                    t = i, (0, $.o5)().setClient(t), i.init()
                }(t)
        }(t);
    let n = e => "transaction" === e.type && "/404" === e.transaction ? null : e;
    n.id = "NextClient404Filter", (0, k.SA)(n);
    let r = e => "transaction" === e.type && e.transaction === rM ? null : e;
    r.id = "IncompleteTransactionFilter", (0, k.SA)(r);
    let i = (e, t) => {
        var n;
        return (n = t ? .originalException, (0, ec.bJ)(n) && "string" == typeof n.digest && n.digest.startsWith("NEXT_REDIRECT;") || e.exception ? .values ? .[0] ? .value === "NEXT_REDIRECT") ? null : e
    };
    i.id = "NextRedirectErrorFilter", (0, k.SA)(i)
}({
    dsn: "https://4cc707ab12ea4779b417479c0550a5cb@o22381.ingest.us.sentry.io/4505164808585216",
    ignoreErrors: [/Extension context invalidated./, /querySelectorAll/, "Object Not Found Matching Id"],
    tracesSampleRate: 0,
    debug: !1,
    sampleRate: .2,
    release: "b652a4e3ad8e7e6e5e959a631eeea25ca6f5b334",
    replaysOnErrorSampleRate: 1,
    replaysSessionSampleRate: 0,
    integrations: [new o2({
        maskAllText: !0,
        blockAllMedia: !0
    })]
})
}, 47060: (e, t, n) => {
    "use strict";
    n.d(t, {
        RV: () => d,
        gd: () => o,
        qQ: () => u,
        vk: () => a,
        yF: () => r
    });
    let r = "?",
        i = /\(error: (.*)\)/,
        s = /captureMessage|captureException/;

    function o(...e) {
        let t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
        return (e, n = 0, o = 0) => {
            let a = [],
                c = e.split("\n");
            for (let e = n; e < c.length; e++) {
                let n = c[e];
                if (n.length > 1024) continue;
                let r = i.test(n) ? n.replace(i, "$1") : n;
                if (!r.match(/\S*Error: /)) {
                    for (let e of t) {
                        let t = e(r);
                        if (t) {
                            a.push(t);
                            break
                        }
                    }
                    if (a.length >= 50 + o) break
                }
            }
            var u = a.slice(o);
            if (!u.length) return [];
            let d = Array.from(u);
            return /sentryWrapped/.test(l(d).function || "") && d.pop(), d.reverse(), s.test(l(d).function || "") && (d.pop(), s.test(l(d).function || "") && d.pop()), d.slice(0, 50).map(e => ({ ...e,
                filename: e.filename || l(d).filename,
                function: e.function || r
            }))
        }
    }

    function a(e) {
        return Array.isArray(e) ? o(...e) : e
    }

    function l(e) {
        return e[e.length - 1] || {}
    }
    let c = "<anonymous>";

    function u(e) {
        try {
            if (!e || "function" != typeof e) return c;
            return e.name || c
        } catch (e) {
            return c
        }
    }

    function d(e) {
        let t = e.exception;
        if (t) {
            let e = [];
            try {
                return t.values.forEach(t => {
                    t.stacktrace.frames && e.push(...t.stacktrace.frames)
                }), e
            } catch (e) {}
        }
    }
}, 47984: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createDeviceDesktopContext = void 0, t.createDeviceDesktopContext = function(e) {
        return function() {
            return {
                name: "context_device_desktop",
                data: e
            }
        }
    }
}, 48141: (e, t, n) => {
    "use strict";
    n.d(t, {
        $X: () => a,
        GR: () => u,
        M6: () => c,
        eJ: () => s,
        gO: () => l
    });
    var r = n(4982),
        i = n(13980);

    function s(e = function() {
        let e = i.O;
        return e.crypto || e.msCrypto
    }()) {
        let t = () => 16 * Math.random();
        try {
            if (e ? .randomUUID) return e.randomUUID().replace(/-/g, "");
            e ? .getRandomValues && (t = () => {
                let t = new Uint8Array(1);
                return e.getRandomValues(t), t[0]
            })
        } catch (e) {}
        return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & t()) >> e / 4).toString(16))
    }

    function o(e) {
        return e.exception ? .values ? .[0]
    }

    function a(e) {
        let {
            message: t,
            event_id: n
        } = e;
        if (t) return t;
        let r = o(e);
        return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }

    function l(e, t, n) {
        let r = e.exception = e.exception || {},
            i = r.values = r.values || [],
            s = i[0] = i[0] || {};
        s.value || (s.value = t || ""), s.type || (s.type = n || "Error")
    }

    function c(e, t) {
        let n = o(e);
        if (!n) return;
        let r = n.mechanism;
        if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...t
            }, t && "data" in t) {
            let e = { ...r ? .data,
                ...t.data
            };
            n.mechanism.data = e
        }
    }

    function u(e) {
        if (function(e) {
                try {
                    return e.__sentry_captured__
                } catch {}
            }(e)) return !0;
        try {
            (0, r.my)(e, "__sentry_captured__", !0)
        } catch (e) {}
        return !1
    }
}, 49566: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createUserAgentContext = void 0, t.createUserAgentContext = function(e) {
        if (!e && "undefined" == typeof navigator) throw Error("userAgent is not provided and navigator.UserAgent is not available");
        return function() {
            return {
                name: "context_user_agent",
                data: {
                    value: e || navigator.userAgent
                }
            }
        }
    }
}, 50001: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, 50271: (e, t, n) => {
    "use strict";
    n.d(t, {
        $N: () => o,
        Hd: () => s,
        xE: () => a
    });
    var r = n(15677);
    let i = n(13980).O;

    function s(e, t = {}) {
        if (!e) return "<unknown>";
        try {
            let n, s = e,
                o = [],
                a = 0,
                l = 0,
                c = Array.isArray(t) ? t : t.keyAttrs,
                u = !Array.isArray(t) && t.maxStringLength || 80;
            for (; s && a++ < 5 && (n = function(e, t) {
                    let n = [];
                    if (!e ? .tagName) return "";
                    if (i.HTMLElement && e instanceof HTMLElement && e.dataset) {
                        if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
                        if (e.dataset.sentryElement) return e.dataset.sentryElement
                    }
                    n.push(e.tagName.toLowerCase());
                    let s = t ? .length ? t.filter(t => e.getAttribute(t)).map(t => [t, e.getAttribute(t)]) : null;
                    if (s ? .length) s.forEach(e => {
                        n.push(`[${e[0]}="${e[1]}"]`)
                    });
                    else {
                        e.id && n.push(`#${e.id}`);
                        let t = e.className;
                        if (t && (0, r.Kg)(t))
                            for (let e of t.split(/\s+/)) n.push(`.${e}`)
                    }
                    for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                        let r = e.getAttribute(t);
                        r && n.push(`[${t}="${r}"]`)
                    }
                    return n.join("")
                }(s, c), "html" !== n && (!(a > 1) || !(l + 3 * o.length + n.length >= u)));) o.push(n), l += n.length, s = s.parentNode;
            return o.reverse().join(" > ")
        } catch (e) {
            return "<unknown>"
        }
    }

    function o() {
        try {
            return i.document.location.href
        } catch (e) {
            return ""
        }
    }

    function a(e) {
        if (!i.HTMLElement) return null;
        let t = e;
        for (let e = 0; e < 5 && t; e++) {
            if (t instanceof HTMLElement) {
                if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                if (t.dataset.sentryElement) return t.dataset.sentryElement
            }
            t = t.parentNode
        }
        return null
    }
}, 50334: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.silly = t.verbose = t.debug = t.info = t.warn = t.error = t.log = t.logger = void 0, t.logger = {
        log: (...e) => console.log(...e),
        error: (...e) => console.error(...e),
        warn: (...e) => console.warn(...e),
        info: (...e) => console.info(...e),
        debug: (...e) => console.debug(...e),
        verbose: (...e) => console.log("verbose:", ...e),
        silly: (...e) => console.log("silly:", ...e)
    }, t.default = t.logger, t.log = t.logger.log.bind(t.logger), t.error = t.logger.error.bind(t.logger), t.warn = t.logger.warn.bind(t.logger), t.info = t.logger.info.bind(t.logger), t.debug = t.logger.debug.bind(t.logger), t.verbose = t.logger.verbose.bind(t.logger), t.silly = t.logger.silly.bind(t.logger)
}, 52364: () => {}, 54832: function(e, t, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        i = this && this.__exportStar || function(e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Time = t.Timer = void 0, i(n(30884), t), i(n(50001), t), i(n(82149), t), i(n(26557), t);
    var s = n(55586);
    Object.defineProperty(t, "Timer", {
        enumerable: !0,
        get: function() {
            return s.Timer
        }
    });
    var o = n(74244);
    Object.defineProperty(t, "Time", {
        enumerable: !0,
        get: function() {
            return o.Time
        }
    })
}, 55586: (e, t, n) => {
    "use strict";
    var r = n(27157);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Timer = t.getHighResolutionTime = t.getLowResolutionTime = t.getTime = t.getBrowserTime = t.supportsHighResolutionTime = void 0;
    let i = n(74244),
        s = n(30884);
    t.supportsHighResolutionTime = () => "undefined" == typeof window && "function" == typeof r.hrtime, t.getBrowserTime = () => "undefined" != typeof performance ? performance.now() : Date.now(), t.getTime = () => t.supportsHighResolutionTime() ? r.hrtime() : t.getBrowserTime(), t.getLowResolutionTime = e => {
        let n = t.getTime() - e,
            r = i.Time.fromMillis(n);
        return {
            nanoseconds: s.asNanoseconds(r.asNanos()),
            milliseconds: r.asMillis(),
            seconds: r.asSeconds()
        }
    }, t.getHighResolutionTime = e => {
        let [t, n] = r.hrtime(e), i = 1e9 * t + n, o = i / 1e6, a = i / 1e9;
        return {
            nanoseconds: s.asNanoseconds(i),
            milliseconds: o,
            seconds: a
        }
    };
    class o {
        constructor(e) {
            this.startTime = e
        }
        static start() {
            return new o(t.getTime())
        }
        end() {
            return t.supportsHighResolutionTime() ? t.getHighResolutionTime(this.startTime) : t.getLowResolutionTime(this.startTime)
        }
    }
    t.Timer = o
}, 56026: (e, t, n) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(82643);
    r.__exportStar(n(57284), t), r.__exportStar(n(3148), t), r.__exportStar(n(39325), t), r.__exportStar(n(56), t), r.__exportStar(n(87148), t), r.__exportStar(n(90991), t), r.__exportStar(n(28304), t), r.__exportStar(n(47984), t), r.__exportStar(n(98587), t), r.__exportStar(n(18640), t), r.__exportStar(n(49566), t)
}, 57284: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createApplicationContext = void 0, t.createApplicationContext = function(e) {
        return function() {
            return {
                name: "context_application",
                data: e
            }
        }
    }
}, 58913: (e, t) => {
    "use strict";
    t.R = void 0, t.R = function(e) {
        return {
            name: "RejectedClientEventNonAuth",
            environments: ["browsernonauth", "desktopnonauth", "devicenonauth"],
            data: e
        }
    }
}, 59371: (e, t, n) => {
    "use strict";
    n.d(t, {
        r: () => i,
        X: () => r
    });
    let r = function(e, t) {
            try {
                if ("number" == typeof e()) return e
            } catch (e) {}
            let n = t(),
                r = 0;
            return () => r = Math.max(r, t() - n)
        }(() => performance.now(), Date.now),
        i = (e, t = r()) => Math.round(Math.abs(t - e))
}, 59392: (e, t, n) => {
    "use strict";
    let r;
    n.d(t, {
        k3: () => a,
        lu: () => s,
        zf: () => o
    });
    var i = n(13980);

    function s() {
        return Date.now() / 1e3
    }
    let o = function() {
        let {
            performance: e
        } = i.O;
        if (!e ? .now) return s;
        let t = Date.now() - e.now(),
            n = void 0 == e.timeOrigin ? t : e.timeOrigin;
        return () => (n + e.now()) / 1e3
    }();

    function a() {
        return r || (r = function() {
            let {
                performance: e
            } = i.O;
            if (!e ? .now) return [void 0, "none"];
            let t = e.now(),
                n = Date.now(),
                r = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
                s = e.timing ? .navigationStart,
                o = "number" == typeof s ? Math.abs(s + t - n) : 36e5;
            if (r < 36e5 || o < 36e5)
                if (r <= o) return [e.timeOrigin, "timeOrigin"];
                else return [s, "navigationStart"];
            return [n, "dateNow"]
        }()), r[0]
    }
}, 60008: function(e, t) {
    "use strict";
    var n = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))(function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function l(e) {
                var t;
                e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NoopReporter = void 0;
    class r {
        send(e) {
            return n(this, void 0, void 0, function*() {})
        }
    }
    t.NoopReporter = r
}, 60813: (e, t, n) => {
    "use strict";
    n.d(t, {
        Q: () => a
    });
    var r = n(3079);
    class i extends Error {
        constructor(e, t, n = -1) {
            super(t), this.name = "XResolveError", this.message = t, this.code = e, this.status = n
        }
    }
    let s = {
            DEALER: "dealer-g2",
            WEBGATE: "spclient"
        },
        o = {
            spclient: "spclient.wg.spotify.com",
            exp: "exp.wg.spotify.com",
            partners: "partners.wg.spotify.com"
        };

    function a(e = {}) {
        let t = {
                dealer: e.dealer || s.DEALER,
                webgate: e.webgate || s.WEBGATE
            },
            n = `https://apresolve.spotify.com/?type=${t.dealer}&type=${t.webgate}`;
        return function(e) {
            return e.request(n, {
                forcePolyfill: !0,
                responseType: "json",
                retry: {
                    maxRetries: 3,
                    curve: "exponential",
                    condition: function(e, t) {
                        return e.getStatusFamily() !== t.SUCCESS
                    }
                },
                metadata: {
                    noRequestTransform: !0
                }
            }).then(e => {
                var n, s, a, l, c;
                let u = e.body,
                    d = {
                        dealer: null != (s = null == (n = null == u ? void 0 : u[t.dealer]) ? void 0 : n[0]) ? s : "dealer.g2.spotify.com",
                        webgate: null != (c = null != (l = null == (a = null == u ? void 0 : u[t.webgate]) ? void 0 : a[0]) ? l : o[t.webgate]) ? c : o.spclient,
                        webapi: "https://api.spotify.com/"
                    };
                if (!d.dealer || !d.webgate) throw new i(r.L.XRESOLVE_INCOMPLETE_RESPONSE, "X-Resolve responded with incomplete results.", e.status);
                return d
            }).then(e => (e.dealer = `wss://${e.dealer.replace(/:443$/,"")}`, e.webgate = `https://${e.webgate.replace(/:443$/,"")}`, e))
        }
    }
}, 64254: (e, t, n) => {
    "use strict";
    var r = n(45564),
        i = n(33685),
        s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

    function o(e) {
        if (e > 0x7fffffff) throw RangeError('The value "' + e + '" is invalid for option "size"');
        var t = new Uint8Array(e);
        return Object.setPrototypeOf(t, a.prototype), t
    }

    function a(e, t, n) {
        if ("number" == typeof e) {
            if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
            return u(e)
        }
        return l(e, t, n)
    }

    function l(e, t, n) {
        if ("string" == typeof e) {
            var r = e,
                i = t;
            if (("string" != typeof i || "" === i) && (i = "utf8"), !a.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
            var s = 0 | p(r, i),
                l = o(s),
                c = l.write(r, i);
            return c !== s && (l = l.slice(0, c)), l
        }
        if (ArrayBuffer.isView(e)) {
            var u = e;
            if (I(u, Uint8Array)) {
                var m = new Uint8Array(u);
                return h(m.buffer, m.byteOffset, m.byteLength)
            }
            return d(u)
        }
        if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (I(e, ArrayBuffer) || e && I(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (I(e, SharedArrayBuffer) || e && I(e.buffer, SharedArrayBuffer))) return h(e, t, n);
        if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
        var g = e.valueOf && e.valueOf();
        if (null != g && g !== e) return a.from(g, t, n);
        var _ = function(e) {
            if (a.isBuffer(e)) {
                var t = 0 | f(e.length),
                    n = o(t);
                return 0 === n.length || e.copy(n, 0, 0, t), n
            }
            return void 0 !== e.length ? "number" != typeof e.length || function(e) {
                return e != e
            }(e.length) ? o(0) : d(e) : "Buffer" === e.type && Array.isArray(e.data) ? d(e.data) : void 0
        }(e);
        if (_) return _;
        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]("string"), t, n);
        throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
    }

    function c(e) {
        if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
        if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
    }

    function u(e) {
        return c(e), o(e < 0 ? 0 : 0 | f(e))
    }

    function d(e) {
        for (var t = e.length < 0 ? 0 : 0 | f(e.length), n = o(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
        return n
    }

    function h(e, t, n) {
        var r;
        if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
        return Object.setPrototypeOf(r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), a.prototype), r
    }

    function f(e) {
        if (e >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
        return 0 | e
    }

    function p(e, t) {
        if (a.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || I(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        var n = e.length,
            r = arguments.length > 2 && !0 === arguments[2];
        if (!r && 0 === n) return 0;
        for (var i = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return n;
            case "utf8":
            case "utf-8":
                return C(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * n;
            case "hex":
                return n >>> 1;
            case "base64":
                return k(e).length;
            default:
                if (i) return r ? -1 : C(e).length;
                t = ("" + t).toLowerCase(), i = !0
        }
    }

    function m(e, t, n) {
        var i, s, o, a = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0))) return "";
        for (e || (e = "utf8");;) switch (e) {
            case "hex":
                return function(e, t, n) {
                    var r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var i = "", s = t; s < n; ++s) i += N[e[s]];
                    return i
                }(this, t, n);
            case "utf8":
            case "utf-8":
                return v(this, t, n);
            case "ascii":
                return function(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                    return r
                }(this, t, n);
            case "latin1":
            case "binary":
                return function(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                    return r
                }(this, t, n);
            case "base64":
                return i = this, s = t, o = n, 0 === s && o === i.length ? r.fromByteArray(i) : r.fromByteArray(i.slice(s, o));
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return function(e, t, n) {
                    for (var r = e.slice(t, n), i = "", s = 0; s < r.length - 1; s += 2) i += String.fromCharCode(r[s] + 256 * r[s + 1]);
                    return i
                }(this, t, n);
            default:
                if (a) throw TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), a = !0
        }
    }

    function g(e, t, n) {
        var r = e[t];
        e[t] = e[n], e[n] = r
    }

    function _(e, t, n, r, i) {
        var s;
        if (0 === e.length) return -1;
        if ("string" == typeof n ? (r = n, n = 0) : n > 0x7fffffff ? n = 0x7fffffff : n < -0x80000000 && (n = -0x80000000), (s = n *= 1) != s && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length)
            if (i) return -1;
            else n = e.length - 1;
        else if (n < 0)
            if (!i) return -1;
            else n = 0;
        if ("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, i);
        if ("number" == typeof t) {
            if (t &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                if (i) return Uint8Array.prototype.indexOf.call(e, t, n);
                else return Uint8Array.prototype.lastIndexOf.call(e, t, n);
            return y(e, [t], n, r, i)
        }
        throw TypeError("val must be string, number or Buffer")
    }

    function y(e, t, n, r, i) {
        var s, o = 1,
            a = e.length,
            l = t.length;
        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (e.length < 2 || t.length < 2) return -1;
            o = 2, a /= 2, l /= 2, n /= 2
        }

        function c(e, t) {
            return 1 === o ? e[t] : e.readUInt16BE(t * o)
        }
        if (i) {
            var u = -1;
            for (s = n; s < a; s++)
                if (c(e, s) === c(t, -1 === u ? 0 : s - u)) {
                    if (-1 === u && (u = s), s - u + 1 === l) return u * o
                } else -1 !== u && (s -= s - u), u = -1
        } else
            for (n + l > a && (n = a - l), s = n; s >= 0; s--) {
                for (var d = !0, h = 0; h < l; h++)
                    if (c(e, s + h) !== c(t, h)) {
                        d = !1;
                        break
                    }
                if (d) return s
            }
        return -1
    }

    function v(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], i = t; i < n;) {
            var s, o, a, l, c = e[i],
                u = null,
                d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (i + d <= n) switch (d) {
                case 1:
                    c < 128 && (u = c);
                    break;
                case 2:
                    (192 & (s = e[i + 1])) == 128 && (l = (31 & c) << 6 | 63 & s) > 127 && (u = l);
                    break;
                case 3:
                    s = e[i + 1], o = e[i + 2], (192 & s) == 128 && (192 & o) == 128 && (l = (15 & c) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (u = l);
                    break;
                case 4:
                    s = e[i + 1], o = e[i + 2], a = e[i + 3], (192 & s) == 128 && (192 & o) == 128 && (192 & a) == 128 && (l = (15 & c) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && l < 1114112 && (u = l)
            }
            null === u ? (u = 65533, d = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), i += d
        }
        var h = r,
            f = h.length;
        if (f <= 4096) return String.fromCharCode.apply(String, h);
        for (var p = "", m = 0; m < f;) p += String.fromCharCode.apply(String, h.slice(m, m += 4096));
        return p
    }

    function b(e, t, n) {
        if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
        if (e + t > n) throw RangeError("Trying to access beyond buffer length")
    }

    function E(e, t, n, r, i, s) {
        if (!a.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < s) throw RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw RangeError("Index out of range")
    }

    function S(e, t, n, r, i, s) {
        if (n + r > e.length || n < 0) throw RangeError("Index out of range")
    }

    function T(e, t, n, r, s) {
        return t *= 1, n >>>= 0, s || S(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), i.write(e, t, n, r, 23, 4), n + 4
    }

    function w(e, t, n, r, s) {
        return t *= 1, n >>>= 0, s || S(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), i.write(e, t, n, r, 52, 8), n + 8
    }
    t.Buffer = a, t.SlowBuffer = function(e) {
        return +e != e && (e = 0), a.alloc(+e)
    }, t.INSPECT_MAX_BYTES = 50, t.kMaxLength = 0x7fffffff, a.TYPED_ARRAY_SUPPORT = function() {
        try {
            var e = new Uint8Array(1),
                t = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
        } catch (e) {
            return !1
        }
    }(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (a.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(a.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (a.isBuffer(this)) return this.byteOffset
        }
    }), a.poolSize = 8192, a.from = function(e, t, n) {
        return l(e, t, n)
    }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(e, t, n) {
        return (c(e), e <= 0) ? o(e) : void 0 !== t ? "string" == typeof n ? o(e).fill(t, n) : o(e).fill(t) : o(e)
    }, a.allocUnsafe = function(e) {
        return u(e)
    }, a.allocUnsafeSlow = function(e) {
        return u(e)
    }, a.isBuffer = function(e) {
        return null != e && !0 === e._isBuffer && e !== a.prototype
    }, a.compare = function(e, t) {
        if (I(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), I(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        for (var n = e.length, r = t.length, i = 0, s = Math.min(n, r); i < s; ++i)
            if (e[i] !== t[i]) {
                n = e[i], r = t[i];
                break
            }
        return n < r ? -1 : +(r < n)
    }, a.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    }, a.concat = function(e, t) {
        if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return a.alloc(0);
        if (void 0 === t)
            for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
        var n, r = a.allocUnsafe(t),
            i = 0;
        for (n = 0; n < e.length; ++n) {
            var s = e[n];
            if (I(s, Uint8Array)) i + s.length > r.length ? a.from(s).copy(r, i) : Uint8Array.prototype.set.call(r, s, i);
            else if (a.isBuffer(s)) s.copy(r, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += s.length
        }
        return r
    }, a.byteLength = p, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2) g(this, t, t + 1);
        return this
    }, a.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
        return this
    }, a.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
        return this
    }, a.prototype.toString = function() {
        var e = this.length;
        return 0 === e ? "" : 0 == arguments.length ? v(this, 0, e) : m.apply(this, arguments)
    }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(e) {
        if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
        return this === e || 0 === a.compare(this, e)
    }, a.prototype.inspect = function() {
        var e = "",
            n = t.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
    }, s && (a.prototype[s] = a.prototype.inspect), a.prototype.compare = function(e, t, n, r, i) {
        if (I(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw RangeError("out of range index");
        if (r >= i && t >= n) return 0;
        if (r >= i) return -1;
        if (t >= n) return 1;
        if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
        for (var s = i - r, o = n - t, l = Math.min(s, o), c = this.slice(r, i), u = e.slice(t, n), d = 0; d < l; ++d)
            if (c[d] !== u[d]) {
                s = c[d], o = u[d];
                break
            }
        return s < o ? -1 : +(o < s)
    }, a.prototype.includes = function(e, t, n) {
        return -1 !== this.indexOf(e, t, n)
    }, a.prototype.indexOf = function(e, t, n) {
        return _(this, e, t, n, !0)
    }, a.prototype.lastIndexOf = function(e, t, n) {
        return _(this, e, t, n, !1)
    }, a.prototype.write = function(e, t, n, r) {
        if (void 0 === t) r = "utf8", n = this.length, t = 0;
        else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
        else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
        else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var i, s, o, a, l, c, u, d, h = this.length - t;
        if ((void 0 === n || n > h) && (n = h), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        for (var f = !1;;) switch (r) {
            case "hex":
                return function(e, t, n, r) {
                    n = Number(n) || 0;
                    var i = e.length - n;
                    r ? (r = Number(r)) > i && (r = i) : r = i;
                    var s = t.length;
                    r > s / 2 && (r = s / 2);
                    for (var o = 0; o < r; ++o) {
                        var a, l = parseInt(t.substr(2 * o, 2), 16);
                        if ((a = l) != a) break;
                        e[n + o] = l
                    }
                    return o
                }(this, e, t, n);
            case "utf8":
            case "utf-8":
                return i = t, s = n, R(C(e, this.length - i), this, i, s);
            case "ascii":
            case "latin1":
            case "binary":
                return o = t, a = n, R(function(e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }(e), this, o, a);
            case "base64":
                return l = t, c = n, R(k(e), this, l, c);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return u = t, d = n, R(function(e, t) {
                    for (var n, r, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = (n = e.charCodeAt(s)) >> 8, i.push(n % 256), i.push(r);
                    return i
                }(e, this.length - u), this, u, d);
            default:
                if (f) throw TypeError("Unknown encoding: " + r);
                r = ("" + r).toLowerCase(), f = !0
        }
    }, a.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }, a.prototype.slice = function(e, t) {
        var n = this.length;
        e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
        var r = this.subarray(e, t);
        return Object.setPrototypeOf(r, a.prototype), r
    }, a.prototype.readUintLE = a.prototype.readUIntLE = function(e, t, n) {
        e >>>= 0, t >>>= 0, n || b(e, t, this.length);
        for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256);) r += this[e + s] * i;
        return r
    }, a.prototype.readUintBE = a.prototype.readUIntBE = function(e, t, n) {
        e >>>= 0, t >>>= 0, n || b(e, t, this.length);
        for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
        return r
    }, a.prototype.readUint8 = a.prototype.readUInt8 = function(e, t) {
        return e >>>= 0, t || b(e, 1, this.length), this[e]
    }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(e, t) {
        return e >>>= 0, t || b(e, 2, this.length), this[e] | this[e + 1] << 8
    }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(e, t) {
        return e >>>= 0, t || b(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(e, t) {
        return e >>>= 0, t || b(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 0x1000000 * this[e + 3]
    }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(e, t) {
        return e >>>= 0, t || b(e, 4, this.length), 0x1000000 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, a.prototype.readIntLE = function(e, t, n) {
        e >>>= 0, t >>>= 0, n || b(e, t, this.length);
        for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256);) r += this[e + s] * i;
        return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
    }, a.prototype.readIntBE = function(e, t, n) {
        e >>>= 0, t >>>= 0, n || b(e, t, this.length);
        for (var r = t, i = 1, s = this[e + --r]; r > 0 && (i *= 256);) s += this[e + --r] * i;
        return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s
    }, a.prototype.readInt8 = function(e, t) {
        return (e >>>= 0, t || b(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
    }, a.prototype.readInt16LE = function(e, t) {
        e >>>= 0, t || b(e, 2, this.length);
        var n = this[e] | this[e + 1] << 8;
        return 32768 & n ? 0xffff0000 | n : n
    }, a.prototype.readInt16BE = function(e, t) {
        e >>>= 0, t || b(e, 2, this.length);
        var n = this[e + 1] | this[e] << 8;
        return 32768 & n ? 0xffff0000 | n : n
    }, a.prototype.readInt32LE = function(e, t) {
        return e >>>= 0, t || b(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, a.prototype.readInt32BE = function(e, t) {
        return e >>>= 0, t || b(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, a.prototype.readFloatLE = function(e, t) {
        return e >>>= 0, t || b(e, 4, this.length), i.read(this, e, !0, 23, 4)
    }, a.prototype.readFloatBE = function(e, t) {
        return e >>>= 0, t || b(e, 4, this.length), i.read(this, e, !1, 23, 4)
    }, a.prototype.readDoubleLE = function(e, t) {
        return e >>>= 0, t || b(e, 8, this.length), i.read(this, e, !0, 52, 8)
    }, a.prototype.readDoubleBE = function(e, t) {
        return e >>>= 0, t || b(e, 8, this.length), i.read(this, e, !1, 52, 8)
    }, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(e, t, n, r) {
        if (e *= 1, t >>>= 0, n >>>= 0, !r) {
            var i = Math.pow(2, 8 * n) - 1;
            E(this, e, t, n, i, 0)
        }
        var s = 1,
            o = 0;
        for (this[t] = 255 & e; ++o < n && (s *= 256);) this[t + o] = e / s & 255;
        return t + n
    }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(e, t, n, r) {
        if (e *= 1, t >>>= 0, n >>>= 0, !r) {
            var i = Math.pow(2, 8 * n) - 1;
            E(this, e, t, n, i, 0)
        }
        var s = n - 1,
            o = 1;
        for (this[t + s] = 255 & e; --s >= 0 && (o *= 256);) this[t + s] = e / o & 255;
        return t + n
    }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
    }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
    }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
    }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 4, 0xffffffff, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
    }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 4, 0xffffffff, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
    }, a.prototype.writeIntLE = function(e, t, n, r) {
        if (e *= 1, t >>>= 0, !r) {
            var i = Math.pow(2, 8 * n - 1);
            E(this, e, t, n, i - 1, -i)
        }
        var s = 0,
            o = 1,
            a = 0;
        for (this[t] = 255 & e; ++s < n && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / o | 0) - a & 255;
        return t + n
    }, a.prototype.writeIntBE = function(e, t, n, r) {
        if (e *= 1, t >>>= 0, !r) {
            var i = Math.pow(2, 8 * n - 1);
            E(this, e, t, n, i - 1, -i)
        }
        var s = n - 1,
            o = 1,
            a = 0;
        for (this[t + s] = 255 & e; --s >= 0 && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / o | 0) - a & 255;
        return t + n
    }, a.prototype.writeInt8 = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
    }, a.prototype.writeInt16LE = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
    }, a.prototype.writeInt16BE = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
    }, a.prototype.writeInt32LE = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 4, 0x7fffffff, -0x80000000), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
    }, a.prototype.writeInt32BE = function(e, t, n) {
        return e *= 1, t >>>= 0, n || E(this, e, t, 4, 0x7fffffff, -0x80000000), e < 0 && (e = 0xffffffff + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
    }, a.prototype.writeFloatLE = function(e, t, n) {
        return T(this, e, t, !0, n)
    }, a.prototype.writeFloatBE = function(e, t, n) {
        return T(this, e, t, !1, n)
    }, a.prototype.writeDoubleLE = function(e, t, n) {
        return w(this, e, t, !0, n)
    }, a.prototype.writeDoubleBE = function(e, t, n) {
        return w(this, e, t, !1, n)
    }, a.prototype.copy = function(e, t, n, r) {
        if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
        if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n || 0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw RangeError("Index out of range");
        if (r < 0) throw RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
        var i = r - n;
        return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i
    }, a.prototype.fill = function(e, t, n, r) {
        if ("string" == typeof e) {
            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw TypeError("encoding must be a string");
            if ("string" == typeof r && !a.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
            if (1 === e.length) {
                var i, s = e.charCodeAt(0);
                ("utf8" === r && s < 128 || "latin1" === r) && (e = s)
            }
        } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
        if (n <= t) return this;
        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
            for (i = t; i < n; ++i) this[i] = e;
        else {
            var o = a.isBuffer(e) ? e : a.from(e, r),
                l = o.length;
            if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for (i = 0; i < n - t; ++i) this[i + t] = o[i % l]
        }
        return this
    };
    var O = /[^+/0-9A-Za-z-_]/g;

    function C(e, t) {
        t = t || 1 / 0;
        for (var n, r = e.length, i = null, s = [], o = 0; o < r; ++o) {
            if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                if (!i) {
                    if (n > 56319 || o + 1 === r) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue
                    }
                    i = n;
                    continue
                }
                if (n < 56320) {
                    (t -= 3) > -1 && s.push(239, 191, 189), i = n;
                    continue
                }
                n = (i - 55296 << 10 | n - 56320) + 65536
            } else i && (t -= 3) > -1 && s.push(239, 191, 189);
            if (i = null, n < 128) {
                if ((t -= 1) < 0) break;
                s.push(n)
            } else if (n < 2048) {
                if ((t -= 2) < 0) break;
                s.push(n >> 6 | 192, 63 & n | 128)
            } else if (n < 65536) {
                if ((t -= 3) < 0) break;
                s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
            } else if (n < 1114112) {
                if ((t -= 4) < 0) break;
                s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
            } else throw Error("Invalid code point")
        }
        return s
    }

    function k(e) {
        return r.toByteArray(function(e) {
            if ((e = (e = e.split("=")[0]).trim().replace(O, "")).length < 2) return "";
            for (; e.length % 4 != 0;) e += "=";
            return e
        }(e))
    }

    function R(e, t, n, r) {
        for (var i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) t[i + n] = e[i];
        return i
    }

    function I(e, t) {
        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
    }
    var N = function() {
        for (var e = "0123456789abcdef", t = Array(256), n = 0; n < 16; ++n)
            for (var r = 16 * n, i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
        return t
    }()
}, 64940: (e, t, n) => {
    "use strict";
    n.d(t, {
        Z: () => s,
        e: () => i
    });
    var r = n(48141);

    function i() {
        return (0, r.eJ)()
    }

    function s() {
        return (0, r.eJ)().substring(16)
    }
}, 67510: function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.silly = t.verbose = t.debug = t.info = t.warn = t.error = t.log = t.logger = t.default = void 0;
    var i = n(50334);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return r(i).default
        }
    }), Object.defineProperty(t, "logger", {
        enumerable: !0,
        get: function() {
            return i.logger
        }
    }), Object.defineProperty(t, "log", {
        enumerable: !0,
        get: function() {
            return i.log
        }
    }), Object.defineProperty(t, "error", {
        enumerable: !0,
        get: function() {
            return i.error
        }
    }), Object.defineProperty(t, "warn", {
        enumerable: !0,
        get: function() {
            return i.warn
        }
    }), Object.defineProperty(t, "info", {
        enumerable: !0,
        get: function() {
            return i.info
        }
    }), Object.defineProperty(t, "debug", {
        enumerable: !0,
        get: function() {
            return i.debug
        }
    }), Object.defineProperty(t, "verbose", {
        enumerable: !0,
        get: function() {
            return i.verbose
        }
    }), Object.defineProperty(t, "silly", {
        enumerable: !0,
        get: function() {
            return i.silly
        }
    })
}, 68053: (e, t) => {
    "use strict";
    var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        s = n ? Symbol.for("react.fragment") : 60107,
        o = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        h = n ? Symbol.for("react.forward_ref") : 60112,
        f = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        _ = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        v = n ? Symbol.for("react.responder") : 60118,
        b = n ? Symbol.for("react.scope") : 60119;

    function E(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case r:
                    switch (e = e.type) {
                        case u:
                        case d:
                        case s:
                        case a:
                        case o:
                        case f:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case c:
                                case h:
                                case g:
                                case m:
                                case l:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case i:
                    return t
            }
        }
    }

    function S(e) {
        return E(e) === d
    }
    t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = h, t.Fragment = s, t.Lazy = g, t.Memo = m, t.Portal = i, t.Profiler = a, t.StrictMode = o, t.Suspense = f, t.isAsyncMode = function(e) {
        return S(e) || E(e) === u
    }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return E(e) === c
    }, t.isContextProvider = function(e) {
        return E(e) === l
    }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
    }, t.isForwardRef = function(e) {
        return E(e) === h
    }, t.isFragment = function(e) {
        return E(e) === s
    }, t.isLazy = function(e) {
        return E(e) === g
    }, t.isMemo = function(e) {
        return E(e) === m
    }, t.isPortal = function(e) {
        return E(e) === i
    }, t.isProfiler = function(e) {
        return E(e) === a
    }, t.isStrictMode = function(e) {
        return E(e) === o
    }, t.isSuspense = function(e) {
        return E(e) === f
    }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === s || e === d || e === a || e === o || e === f || e === p || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === h || e.$$typeof === y || e.$$typeof === v || e.$$typeof === b || e.$$typeof === _)
    }, t.typeOf = E
}, 68510: (e, t, n) => {
    "use strict";
    n.d(t, {
        Bk: () => P,
        CC: () => m,
        Ck: () => y,
        Hu: () => I,
        Qh: () => b,
        VS: () => N,
        aO: () => g,
        cI: () => S,
        et: () => w,
        kX: () => v,
        pK: () => O,
        uU: () => E,
        xO: () => A,
        xl: () => D,
        yW: () => C,
        zU: () => x
    });
    var r = n(7996),
        i = n(1229),
        s = n(73757),
        o = n(92486),
        a = n(71002),
        l = n(89045),
        c = n(97025),
        u = n(4982),
        d = n(64940),
        h = n(59392),
        f = n(15993),
        p = n(10620);
    let m = 0,
        g = 1,
        _ = !1;

    function y(e) {
        let {
            spanId: t,
            traceId: n
        } = e.spanContext(), {
            data: r,
            op: i,
            parent_span_id: s,
            status: o,
            origin: a,
            links: l
        } = w(e);
        return {
            parent_span_id: s,
            span_id: t,
            trace_id: n,
            data: r,
            op: i,
            status: o,
            origin: a,
            links: l
        }
    }

    function v(e) {
        let {
            spanId: t,
            traceId: n,
            isRemote: r
        } = e.spanContext(), i = r ? t : w(e).parent_span_id, s = (0, l.L)(e).scope;
        return {
            parent_span_id: i,
            span_id: r ? s ? .getPropagationContext().propagationSpanId || (0, d.Z)() : t,
            trace_id: n
        }
    }

    function b(e) {
        let {
            traceId: t,
            spanId: n
        } = e.spanContext(), r = O(e);
        return (0, f.TC)(t, n, r)
    }

    function E(e) {
        return e && e.length > 0 ? e.map(({
            context: {
                spanId: e,
                traceId: t,
                traceFlags: n,
                ...r
            },
            attributes: i
        }) => ({
            span_id: e,
            trace_id: t,
            sampled: n === g,
            attributes: i,
            ...r
        })) : void 0
    }

    function S(e) {
        return "number" == typeof e ? T(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? T(e.getTime()) : (0, h.zf)()
    }

    function T(e) {
        return e > 0x2540be3ff ? e / 1e3 : e
    }

    function w(e) {
        var t;
        if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
        let {
            spanId: n,
            traceId: r
        } = e.spanContext();
        if ((t = e).attributes && t.startTime && t.name && t.endTime && t.status) {
            let {
                attributes: t,
                startTime: i,
                name: s,
                endTime: a,
                status: l,
                links: c
            } = e;
            return {
                span_id: n,
                trace_id: r,
                data: t,
                description: s,
                parent_span_id: "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext ? .spanId : void 0,
                start_timestamp: S(i),
                timestamp: S(a) || void 0,
                status: C(l),
                op: t[o.uT],
                origin: t[o.JD],
                links: E(c)
            }
        }
        return {
            span_id: n,
            trace_id: r,
            start_timestamp: 0,
            data: {}
        }
    }

    function O(e) {
        let {
            traceFlags: t
        } = e.spanContext();
        return t === g
    }

    function C(e) {
        if (e && e.code !== a.a3) return e.code === a.F3 ? "ok" : e.message || "unknown_error"
    }
    let k = "_sentryChildSpans",
        R = "_sentryRootSpan";

    function I(e, t) {
        let n = e[R] || e;
        (0, u.my)(t, R, n), e[k] ? e[k].add(t) : (0, u.my)(e, k, new Set([t]))
    }

    function N(e, t) {
        e[k] && e[k].delete(t)
    }

    function A(e) {
        let t = new Set;
        return ! function e(n) {
            if (!t.has(n) && O(n))
                for (let r of (t.add(n), n[k] ? Array.from(n[k]) : [])) e(r)
        }(e), Array.from(t)
    }

    function x(e) {
        return e[R] || e
    }

    function P() {
        let e = (0, i.EU)(),
            t = (0, r.h)(e);
        return t.getActiveSpan ? t.getActiveSpan() : (0, p.f)((0, s.o5)())
    }

    function D() {
        _ || ((0, c.pq)(() => {
            console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.")
        }), _ = !0)
    }
}, 69815: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createSemanticMetricClient = void 0, t.createSemanticMetricClient = function(e) {
        return {
            name: "SemanticMetricClient",
            environments: ["browser", "device"],
            data: e
        }
    }
}, 71002: (e, t, n) => {
    "use strict";
    n.d(t, {
        F3: () => i,
        N8: () => o,
        TJ: () => s,
        a3: () => r
    });
    let r = 0,
        i = 1,
        s = 2;

    function o(e, t) {
        e.setAttribute("http.response.status_code", t);
        let n = function(e) {
            if (e < 400 && e >= 100) return {
                code: i
            };
            if (e >= 400 && e < 500) switch (e) {
                case 401:
                    return {
                        code: s,
                        message: "unauthenticated"
                    };
                case 403:
                    return {
                        code: s,
                        message: "permission_denied"
                    };
                case 404:
                    return {
                        code: s,
                        message: "not_found"
                    };
                case 409:
                    return {
                        code: s,
                        message: "already_exists"
                    };
                case 413:
                    return {
                        code: s,
                        message: "failed_precondition"
                    };
                case 429:
                    return {
                        code: s,
                        message: "resource_exhausted"
                    };
                case 499:
                    return {
                        code: s,
                        message: "cancelled"
                    };
                default:
                    return {
                        code: s,
                        message: "invalid_argument"
                    }
            }
            if (e >= 500 && e < 600) switch (e) {
                case 501:
                    return {
                        code: s,
                        message: "unimplemented"
                    };
                case 503:
                    return {
                        code: s,
                        message: "unavailable"
                    };
                case 504:
                    return {
                        code: s,
                        message: "deadline_exceeded"
                    };
                default:
                    return {
                        code: s,
                        message: "internal_error"
                    }
            }
            return {
                code: s,
                message: "unknown_error"
            }
        }(t);
        "unknown_error" !== n.message && e.setStatus(n)
    }
}, 71552: (e, t, n) => {
    "use strict";
    let r, i, s;
    n.d(t, {
        li: () => w,
        mG: () => T
    });
    var o = n(98696),
        a = n(73757),
        l = n(8875),
        c = n(15677),
        u = n(97025),
        d = n(89411),
        h = n(72961),
        f = n(72359),
        p = n(22551),
        m = n(68510);

    function g(e, t) {
        let {
            extra: n,
            tags: r,
            user: i,
            contexts: s,
            level: o,
            sdkProcessingMetadata: a,
            breadcrumbs: l,
            fingerprint: c,
            eventProcessors: u,
            attachments: d,
            propagationContext: h,
            transactionName: f,
            span: m
        } = t;
        _(e, "extra", n), _(e, "tags", r), _(e, "user", i), _(e, "contexts", s), e.sdkProcessingMetadata = (0, p.h)(e.sdkProcessingMetadata, a, 2), o && (e.level = o), f && (e.transactionName = f), m && (e.span = m), l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]), c.length && (e.fingerprint = [...e.fingerprint, ...c]), u.length && (e.eventProcessors = [...e.eventProcessors, ...u]), d.length && (e.attachments = [...e.attachments, ...d]), e.propagationContext = { ...e.propagationContext,
            ...h
        }
    }

    function _(e, t, n) {
        e[t] = (0, p.h)(e[t], n, 1)
    }
    var y = n(13980),
        v = n(48141),
        b = n(45060),
        E = n(9228),
        S = n(59392);

    function T(e, t, n, p, _, T) {
        var w, O, C, k, R, I;
        let {
            normalizeDepth: N = 3,
            normalizeMaxBreadth: A = 1e3
        } = e, x = { ...t,
            event_id: t.event_id || n.event_id || (0, v.eJ)(),
            timestamp: t.timestamp || (0, S.lu)()
        }, P = n.integrations || e.integrations.map(e => e.name);
        (function(e, t) {
            let {
                environment: n,
                release: r,
                dist: i,
                maxValueLength: s = 250
            } = t;
            e.environment = e.environment || n || o.U, !e.release && r && (e.release = r), !e.dist && i && (e.dist = i);
            let a = e.request;
            a ? .url && (a.url = (0, E.xv)(a.url, s))
        })(x, e), w = x, (O = P).length > 0 && (w.sdk = w.sdk || {}, w.sdk.integrations = [...w.sdk.integrations || [], ...O]), _ && _.emit("applyFrameMetadata", t), void 0 === t.type && function(e, t) {
            let n = function(e) {
                let t = y.O._sentryDebugIds;
                if (!t) return {};
                let n = Object.keys(t);
                return s && n.length === i ? s : (i = n.length, s = n.reduce((n, i) => {
                    r || (r = {});
                    let s = r[i];
                    if (s) n[s[0]] = s[1];
                    else {
                        let s = e(i);
                        for (let e = s.length - 1; e >= 0; e--) {
                            let o = s[e],
                                a = o ? .filename,
                                l = t[i];
                            if (a && l) {
                                n[a] = l, r[i] = [a, l];
                                break
                            }
                        }
                    }
                    return n
                }, {}))
            }(t);
            e.exception ? .values ? .forEach(e => {
                e.stacktrace ? .frames ? .forEach(e => {
                    e.filename && (e.debug_id = n[e.filename])
                })
            })
        }(x, e.stackParser);
        let D = function(e, t) {
            if (!t) return e;
            let n = e ? e.clone() : new h.H;
            return n.update(t), n
        }(p, n.captureContext);
        n.mechanism && (0, v.M6)(x, n.mechanism);
        let M = _ ? _.getEventProcessors() : [],
            L = (0, a.m6)().getScopeData();
        T && g(L, T.getScopeData()), D && g(L, D.getScopeData());
        let U = [...n.attachments || [], ...L.attachments];
        U.length && (n.attachments = U);
        let {
            fingerprint: j,
            span: F,
            breadcrumbs: $,
            sdkProcessingMetadata: B
        } = L;
        return function(e, t) {
                let {
                    extra: n,
                    tags: r,
                    user: i,
                    contexts: s,
                    level: o,
                    transactionName: a
                } = t;
                Object.keys(n).length && (e.extra = { ...n,
                    ...e.extra
                }), Object.keys(r).length && (e.tags = { ...r,
                    ...e.tags
                }), Object.keys(i).length && (e.user = { ...i,
                    ...e.user
                }), Object.keys(s).length && (e.contexts = { ...s,
                    ...e.contexts
                }), o && (e.level = o), a && "transaction" !== e.type && (e.transaction = a)
            }(x, L), F && function(e, t) {
                e.contexts = {
                    trace: (0, m.kX)(t),
                    ...e.contexts
                }, e.sdkProcessingMetadata = {
                    dynamicSamplingContext: (0, f.k1)(t),
                    ...e.sdkProcessingMetadata
                };
                let n = (0, m.zU)(t),
                    r = (0, m.et)(n).description;
                r && !e.transaction && "transaction" === e.type && (e.transaction = r)
            }(x, F), C = x, k = j, C.fingerprint = C.fingerprint ? Array.isArray(C.fingerprint) ? C.fingerprint : [C.fingerprint] : [], k && (C.fingerprint = C.fingerprint.concat(k)), C.fingerprint.length || delete C.fingerprint,
            function(e, t) {
                let n = [...e.breadcrumbs || [], ...t];
                e.breadcrumbs = n.length ? n : void 0
            }(x, $), R = x, I = B, R.sdkProcessingMetadata = { ...R.sdkProcessingMetadata,
                ...I
            }, (function e(t, n, r, i = 0) {
                return new d.T2((s, o) => {
                    let a = t[i];
                    if (null === n || "function" != typeof a) s(n);
                    else {
                        let d = a({ ...n
                        }, r);
                        l.T && a.id && null === d && u.vF.log(`Event processor "${a.id}" dropped event`), (0, c.Qg)(d) ? d.then(n => e(t, n, r, i + 1).then(s)).then(null, o) : e(t, d, r, i + 1).then(s).then(null, o)
                    }
                })
            })([...M, ...L.eventProcessors], x, n).then(e => (e && function(e) {
                let t = {};
                if (e.exception ? .values ? .forEach(e => {
                        e.stacktrace ? .frames ? .forEach(e => {
                            e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
                        })
                    }), 0 === Object.keys(t).length) return;
                e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                let n = e.debug_meta.images;
                Object.entries(t).forEach(([e, t]) => {
                    n.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: t
                    })
                })
            }(e), "number" == typeof N && N > 0) ? function(e, t, n) {
                if (!e) return null;
                let r = { ...e,
                    ...e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map(e => ({ ...e,
                            ...e.data && {
                                data: (0, b.S8)(e.data, t, n)
                            }
                        }))
                    },
                    ...e.user && {
                        user: (0, b.S8)(e.user, t, n)
                    },
                    ...e.contexts && {
                        contexts: (0, b.S8)(e.contexts, t, n)
                    },
                    ...e.extra && {
                        extra: (0, b.S8)(e.extra, t, n)
                    }
                };
                return e.contexts ? .trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = (0, b.S8)(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(e => ({ ...e,
                    ...e.data && {
                        data: (0, b.S8)(e.data, t, n)
                    }
                }))), e.contexts ? .flags && r.contexts && (r.contexts.flags = (0, b.S8)(e.contexts.flags, 3, n)), r
            }(e, N, A) : e)
    }

    function w(e) {
        if (e) {
            var t;
            return (t = e) instanceof h.H || "function" == typeof t || Object.keys(e).some(e => O.includes(e)) ? {
                captureContext: e
            } : e
        }
    }
    let O = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"]
}, 72359: (e, t, n) => {
    "use strict";
    n.d(t, {
        LZ: () => f,
        ao: () => m,
        k1: () => g
    });
    var r = n(98696),
        i = n(73757),
        s = n(92486),
        o = n(98213),
        a = n(43378),
        l = n(97405),
        c = n(4982),
        u = n(68510),
        d = n(89045);
    let h = "_frozenDsc";

    function f(e, t) {
        (0, c.my)(e, h, t)
    }

    function p(e, t) {
        let n, i = t.getOptions(),
            {
                publicKey: s,
                host: o
            } = t.getDsn() || {};
        i.orgId ? n = String(i.orgId) : o && (n = (0, a.ay)(o));
        let l = {
            environment: i.environment || r.U,
            release: i.release,
            public_key: s,
            trace_id: e,
            org_id: n
        };
        return t.emit("createDsc", l), l
    }

    function m(e, t) {
        let n = t.getPropagationContext();
        return n.dsc || p(n.traceId, e)
    }

    function g(e) {
        let t = (0, i.KU)();
        if (!t) return {};
        let n = (0, u.zU)(e),
            r = (0, u.et)(n),
            a = r.data,
            c = n.spanContext().traceState,
            f = c ? .get("sentry.sample_rate") ? ? a[s.sy] ? ? a[s.Ef];

        function m(e) {
            return ("number" == typeof f || "string" == typeof f) && (e.sample_rate = `${f}`), e
        }
        let g = n[h];
        if (g) return m(g);
        let _ = c ? .get("sentry.dsc"),
            y = _ && (0, o.yD)(_);
        if (y) return m(y);
        let v = p(e.spanContext().traceId, t),
            b = a[s.i_],
            E = r.description;
        return "url" !== b && E && (v.transaction = E), (0, l.f)() && (v.sampled = String((0, u.pK)(n)), v.sample_rand = c ? .get("sentry.sample_rand") ? ? (0, d.L)(n).scope ? .getPropagationContext().sampleRand.toString()), m(v), t.emit("createDsc", v, n), v
    }
}, 72638: (e, t, n) => {
    "use strict";
    n.d(t, {
        Cp: () => c,
        J0: () => m,
        J5: () => y,
        Ol: () => f,
        SA: () => p,
        bX: () => h,
        o: () => d,
        r: () => u
    });
    var r = n(73757),
        i = n(8875),
        s = n(15597),
        o = n(97025),
        a = n(71552),
        l = n(13980);

    function c(e, t) {
        return (0, r.o5)().captureException(e, (0, a.li)(t))
    }

    function u(e, t) {
        return (0, r.o5)().captureEvent(e, t)
    }

    function d(e, t) {
        (0, r.rm)().setContext(e, t)
    }
    async function h(e) {
        let t = (0, r.KU)();
        return t ? t.flush(e) : (i.T && o.vF.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
    }

    function f() {
        let e = (0, r.KU)();
        return e ? .getOptions().enabled !== !1 && !!e ? .getTransport()
    }

    function p(e) {
        (0, r.rm)().addEventProcessor(e)
    }

    function m(e) {
        let t = (0, r.rm)(),
            n = (0, r.o5)(),
            {
                userAgent: i
            } = l.O.navigator || {},
            o = (0, s.fj)({
                user: n.getUser() || t.getUser(),
                ...i && {
                    userAgent: i
                },
                ...e
            }),
            a = t.getSession();
        return a ? .status === "ok" && (0, s.qO)(a, {
            status: "exited"
        }), g(), t.setSession(o), o
    }

    function g() {
        let e = (0, r.rm)(),
            t = (0, r.o5)().getSession() || e.getSession();
        t && (0, s.Vu)(t), _(), e.setSession()
    }

    function _() {
        let e = (0, r.rm)(),
            t = (0, r.KU)(),
            n = e.getSession();
        n && t && t.captureSession(n)
    }

    function y(e = !1) {
        if (e) return void g();
        _()
    }
}, 72961: (e, t, n) => {
    "use strict";
    n.d(t, {
        H: () => h
    });
    var r = n(15597),
        i = n(15677),
        s = n(97025),
        o = n(22551),
        a = n(48141),
        l = n(64940),
        c = n(10620),
        u = n(9228),
        d = n(59392);
    class h {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                traceId: (0, l.e)(),
                sampleRand: Math.random()
            }
        }
        clone() {
            let e = new h;
            return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags
            }, e._extra = { ...this._extra
            }, e._contexts = { ...this._contexts
            }, this._contexts.flags && (e._contexts.flags = {
                values: [...this._contexts.flags.values]
            }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
            }, e._propagationContext = { ...this._propagationContext
            }, e._client = this._client, e._lastEventId = this._lastEventId, (0, c.r)(e, (0, c.f)(this)), e
        }
        setClient(e) {
            this._client = e
        }
        setLastEventId(e) {
            this._lastEventId = e
        }
        getClient() {
            return this._client
        }
        lastEventId() {
            return this._lastEventId
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e), this
        }
        setUser(e) {
            return this._user = e || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }, this._session && (0, r.qO)(this._session, {
                user: e
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        setTags(e) {
            return this._tags = { ...this._tags,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setTag(e, t) {
            return this._tags = { ...this._tags,
                [e]: t
            }, this._notifyScopeListeners(), this
        }
        setExtras(e) {
            return this._extra = { ...this._extra,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setExtra(e, t) {
            return this._extra = { ...this._extra,
                [e]: t
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(e) {
            return this._fingerprint = e, this._notifyScopeListeners(), this
        }
        setLevel(e) {
            return this._level = e, this._notifyScopeListeners(), this
        }
        setTransactionName(e) {
            return this._transactionName = e, this._notifyScopeListeners(), this
        }
        setContext(e, t) {
            return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this
        }
        setSession(e) {
            return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(e) {
            if (!e) return this;
            let t = "function" == typeof e ? e(this) : e,
                {
                    tags: n,
                    extra: r,
                    user: s,
                    contexts: o,
                    level: a,
                    fingerprint: l = [],
                    propagationContext: c
                } = (t instanceof h ? t.getScopeData() : (0, i.Qd)(t) ? e : void 0) || {};
            return this._tags = { ...this._tags,
                ...n
            }, this._extra = { ...this._extra,
                ...r
            }, this._contexts = { ...this._contexts,
                ...o
            }, s && Object.keys(s).length && (this._user = s), a && (this._level = a), l.length && (this._fingerprint = l), c && (this._propagationContext = c), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, (0, c.r)(this, void 0), this._attachments = [], this.setPropagationContext({
                traceId: (0, l.e)(),
                sampleRand: Math.random()
            }), this._notifyScopeListeners(), this
        }
        addBreadcrumb(e, t) {
            let n = "number" == typeof t ? t : 100;
            if (n <= 0) return this;
            let r = {
                timestamp: (0, d.lu)(),
                ...e,
                message: e.message ? (0, u.xv)(e.message, 2048) : e.message
            };
            return this._breadcrumbs.push(r), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client ? .recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(e) {
            return this._attachments.push(e), this
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        getScopeData() {
            return {
                breadcrumbs: this._breadcrumbs,
                attachments: this._attachments,
                contexts: this._contexts,
                tags: this._tags,
                extra: this._extra,
                user: this._user,
                level: this._level,
                fingerprint: this._fingerprint || [],
                eventProcessors: this._eventProcessors,
                propagationContext: this._propagationContext,
                sdkProcessingMetadata: this._sdkProcessingMetadata,
                transactionName: this._transactionName,
                span: (0, c.f)(this)
            }
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = (0, o.h)(this._sdkProcessingMetadata, e, 2), this
        }
        setPropagationContext(e) {
            return this._propagationContext = e, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(e, t) {
            let n = t ? .event_id || (0, a.eJ)();
            if (!this._client) return s.vF.warn("No client configured on scope - will not capture exception!"), n;
            let r = Error("Sentry syntheticException");
            return this._client.captureException(e, {
                originalException: e,
                syntheticException: r,
                ...t,
                event_id: n
            }, this), n
        }
        captureMessage(e, t, n) {
            let r = n ? .event_id || (0, a.eJ)();
            if (!this._client) return s.vF.warn("No client configured on scope - will not capture message!"), r;
            let i = Error(e);
            return this._client.captureMessage(e, t, {
                originalException: e,
                syntheticException: i,
                ...n,
                event_id: r
            }, this), r
        }
        captureEvent(e, t) {
            let n = t ? .event_id || (0, a.eJ)();
            return this._client ? this._client.captureEvent(e, { ...t,
                event_id: n
            }, this) : s.vF.warn("No client configured on scope - will not capture event!"), n
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
    }
}, 73757: (e, t, n) => {
    "use strict";
    n.d(t, {
        KU: () => d,
        m6: () => c,
        o5: () => a,
        rm: () => l,
        v4: () => u,
        vn: () => h
    });
    var r = n(7996),
        i = n(1229),
        s = n(72961),
        o = n(64940);

    function a() {
        let e = (0, i.EU)();
        return (0, r.h)(e).getCurrentScope()
    }

    function l() {
        let e = (0, i.EU)();
        return (0, r.h)(e).getIsolationScope()
    }

    function c() {
        return (0, i.BY)("globalScope", () => new s.H)
    }

    function u(...e) {
        let t = (0, i.EU)(),
            n = (0, r.h)(t);
        if (2 === e.length) {
            let [t, r] = e;
            return t ? n.withSetScope(t, r) : n.withScope(r)
        }
        return n.withScope(e[0])
    }

    function d() {
        return a().getClient()
    }

    function h(e) {
        let {
            traceId: t,
            parentSpanId: n,
            propagationSpanId: r
        } = e.getPropagationContext(), i = {
            trace_id: t,
            span_id: r || (0, o.Z)()
        };
        return n && (i.parent_span_id = n), i
    }
}, 74244: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Time = void 0;
    class n {
        constructor(e = 0) {
            this.nanos = e
        }
        static fromNanos(e) {
            return new n(e)
        }
        static fromMicros(e) {
            return new n(1e3 * e)
        }
        static fromMillis(e) {
            return new n(1e6 * e)
        }
        static fromSeconds(e) {
            return new n(1e9 * e)
        }
        static from(e) {
            return new n(e.asNanos())
        }
        asSeconds() {
            return this.nanos / 1e9
        }
        asMillis() {
            return this.nanos / 1e6
        }
        asMicros() {
            return this.nanos / 1e3
        }
        asNanos() {
            return Math.round(this.nanos)
        }
    }
    t.Time = n, n.ZERO = new n(0)
}, 75162: (e, t, n) => {
    e.exports = n(103)
}, 75408: (e, t, n) => {
    "use strict";
    var r;
    n.d(t, {
            J: () => r
        }),
        function(e) {
            e.CONNECTION_ONLINE = "online", e.CONNECTION_OFFLINE = "offline", e.PRODUCT_STATE_CHANGED = "product_state_changed", e.ACCESS_TOKEN = "access_token", e.AUTHENTICATED = "authenticated", e.AUTHENTICATION_FAILED = "authentication_failed", e.BEFORE_OFFLINE_DISCONNECT = "before_offline_disconnect", e.BEFORE_ONLINE_DISCONNECT = "before_online_disconnect", e.CONNECTED = "connected", e.CONNECTION_FAILED = "connection_failed", e.CONNECTION_ID = "connection_id", e.DISCONNECTED = "disconnected", e.ENDPOINTS_RESOLVED = "endpoints_resolved", e.LOGGED_OUT = "logged_out", e.SHORT_SESSION_DISCONNECTED = "short_session_disconnected", e.TOKEN_PROVIDER_ERROR = "token_provider_error", e.RECONNECTED = "reconnected", e.RECONNECTING = "reconnecting", e.WINDOW_BEFORE_UNLOAD = "beforeunload"
        }(r || (r = {}))
}, 80884: () => {}, 82145: (e, t, n) => {
    e.exports = n(31834)
}, 82149: function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))(function(i, s) {
                function o(e) {
                    try {
                        l(r.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function a(e) {
                    try {
                        l(r.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                        e(t)
                    })).then(o, a)
                }
                l((r = r.apply(e, t || [])).next())
            })
        },
        i = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EventSenderReporter = void 0;
    let s = n(95833),
        o = n(69815),
        a = n(26588),
        l = i(n(67510)),
        c = n(42669),
        u = n(3444);

    function d(e) {
        return t => e.isAuthenticated() ? o.createSemanticMetricClient(t) : a.createSemanticMetricClientNonAuth(t)
    }
    class h {
        constructor(e, t, n = "browser", r) {
            this.eventSender = e, this.createEvent = t, this.environment = n, this.transport = r
        }
        static create(e) {
            let t = "getToken" in e ? e.getToken : null,
                n = "ownerProvider" in e ? e.ownerProvider : null,
                i = e.context ? [...e.context] : void 0,
                o = e.environment,
                a = c.createBaseTransport({
                    providers: {
                        endpoints: (() => {
                            let t = c.createXResolveProvider();
                            return n => r(this, void 0, void 0, function*() {
                                return Object.assign(Object.assign({}, (yield t(n))), e.internal && {
                                    webgate: u.INTERNAL_WEBGATE_URL
                                })
                            })
                        })(),
                        token: () => new Promise(e => {
                            if (!t) return void e("");
                            t((t, n) => {
                                if (void 0 !== n) return void e([t, n]);
                                e(t)
                            })
                        })
                    }
                });
            return t && (a.on(c.TransportEvent.CONNECTED, () => {
                a.authenticate().catch(e => {
                    var t, n;
                    l.default.debug("authentication fail.", null != (n = null != (t = null == e ? void 0 : e.message) ? t : null == e ? void 0 : e.code) ? n : "")
                })
            }), a.on(c.TransportEvent.AUTHENTICATED, () => {
                l.default.debug("created authenticated browser transport")
            }), a.on(c.TransportEvent.TOKEN_PROVIDER_ERROR, () => {
                l.default.debug("the token provided isn't working.")
            })), a.connect(), new h(s.createEventSender(Object.assign({
                transport: a,
                context: i
            }, n && {
                ownerProvider: n
            })), d(a), o, a)
        }
        static createWithCustomTransport(e) {
            let t = "ownerProvider" in e ? e.ownerProvider : null,
                n = e.context ? [...e.context] : void 0;
            return new h(s.createEventSender(Object.assign({
                transport: e.transport,
                context: n
            }, t && {
                ownerProvider: t
            })), d(e.transport), e.environment, e.transport)
        }
        send(e) {
            return r(this, void 0, void 0, function*() {
                for (let t of e) {
                    let e = Object.assign({}, t);
                    e.tags = Object.assign({}, e.tags), e.tags.environment && l.default.error("`tags.environment` must not be set. It is a reserved tag and will be overwritten."), e.tags.environment = this.environment;
                    let n = this.createEvent(Object.assign({}, e));
                    this.eventSender.send(n, {
                        flush: !1
                    })
                }
                return this.eventSender.flush(this.transport.isAuthenticated())
            })
        }
    }
    t.EventSenderReporter = h
}, 82643: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, {
        __addDisposableResource: () => M,
        __assign: () => s,
        __asyncDelegator: () => O,
        __asyncGenerator: () => w,
        __asyncValues: () => C,
        __await: () => T,
        __awaiter: () => p,
        __classPrivateFieldGet: () => x,
        __classPrivateFieldIn: () => D,
        __classPrivateFieldSet: () => P,
        __createBinding: () => g,
        __decorate: () => a,
        __disposeResources: () => U,
        __esDecorate: () => c,
        __exportStar: () => _,
        __extends: () => i,
        __generator: () => m,
        __importDefault: () => A,
        __importStar: () => N,
        __makeTemplateObject: () => k,
        __metadata: () => f,
        __param: () => l,
        __propKey: () => d,
        __read: () => v,
        __rest: () => o,
        __rewriteRelativeImportExtension: () => j,
        __runInitializers: () => u,
        __setFunctionName: () => h,
        __spread: () => b,
        __spreadArray: () => S,
        __spreadArrays: () => E,
        __values: () => y,
        default: () => F
    });
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })(e, t)
    };

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var s = function() {
        return (s = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function o(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    }

    function a(e, t, n, r) {
        var i, s = arguments.length,
            o = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
        else
            for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
        return s > 3 && o && Object.defineProperty(t, n, o), o
    }

    function l(e, t) {
        return function(n, r) {
            t(n, r, e)
        }
    }

    function c(e, t, n, r, i, s) {
        function o(e) {
            if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected");
            return e
        }
        for (var a, l = r.kind, c = "getter" === l ? "get" : "setter" === l ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), h = !1, f = n.length - 1; f >= 0; f--) {
            var p = {};
            for (var m in r) p[m] = "access" === m ? {} : r[m];
            for (var m in r.access) p.access[m] = r.access[m];
            p.addInitializer = function(e) {
                if (h) throw TypeError("Cannot add initializers after decoration has completed");
                s.push(o(e || null))
            };
            var g = (0, n[f])("accessor" === l ? {
                get: d.get,
                set: d.set
            } : d[c], p);
            if ("accessor" === l) {
                if (void 0 === g) continue;
                if (null === g || "object" != typeof g) throw TypeError("Object expected");
                (a = o(g.get)) && (d.get = a), (a = o(g.set)) && (d.set = a), (a = o(g.init)) && i.unshift(a)
            } else(a = o(g)) && ("field" === l ? i.unshift(a) : d[c] = a)
        }
        u && Object.defineProperty(u, r.name, d), h = !0
    }

    function u(e, t, n) {
        for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
        return r ? n : void 0
    }

    function d(e) {
        return "symbol" == typeof e ? e : "".concat(e)
    }

    function h(e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t
        })
    }

    function f(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }

    function p(e, t, n, r) {
        return new(n || (n = Promise))(function(i, s) {
            function o(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function l(e) {
                var t;
                e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(o, a)
            }
            l((r = r.apply(e, t || [])).next())
        })
    }

    function m(e, t) {
        var n, r, i, s = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            },
            o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = a(0), o.throw = a(1), o.return = a(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(a) {
            return function(l) {
                var c = [a, l];
                if (n) throw TypeError("Generator is already executing.");
                for (; o && (o = 0, c[0] && (s = 0)), s;) try {
                    if (n = 1, r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
                    switch (r = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                        case 0:
                        case 1:
                            i = c;
                            break;
                        case 4:
                            return s.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            s.label++, r = c[1], c = [0];
                            continue;
                        case 7:
                            c = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                s.label = c[1];
                                break
                            }
                            if (6 === c[0] && s.label < i[1]) {
                                s.label = i[1], i = c;
                                break
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2], s.ops.push(c);
                                break
                            }
                            i[2] && s.ops.pop(), s.trys.pop();
                            continue
                    }
                    c = t.call(e, s)
                } catch (e) {
                    c = [6, e], r = 0
                } finally {
                    n = i = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                }
            }
        }
    }
    var g = Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var i = Object.getOwnPropertyDescriptor(t, n);
        (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        }), Object.defineProperty(e, r, i)
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
    };

    function _(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || g(t, e, n)
    }

    function y(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function v(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, s = n.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = s.next()).done;) o.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = s.return) && n.call(s)
            } finally {
                if (i) throw i.error
            }
        }
        return o
    }

    function b() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
        return e
    }

    function E() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
            for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) r[i] = s[o];
        return r
    }

    function S(e, t, n) {
        if (n || 2 == arguments.length)
            for (var r, i = 0, s = t.length; i < s; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t))
    }

    function T(e) {
        return this instanceof T ? (this.v = e, this) : new T(e)
    }

    function w(e, t, n) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var r, i = n.apply(e, t || []),
            s = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, c)
            }
        }), r[Symbol.asyncIterator] = function() {
            return this
        }, r;

        function o(e, t) {
            i[e] && (r[e] = function(t) {
                return new Promise(function(n, r) {
                    s.push([e, t, n, r]) > 1 || a(e, t)
                })
            }, t && (r[e] = t(r[e])))
        }

        function a(e, t) {
            try {
                var n;
                (n = i[e](t)).value instanceof T ? Promise.resolve(n.value.v).then(l, c) : u(s[0][2], n)
            } catch (e) {
                u(s[0][3], e)
            }
        }

        function l(e) {
            a("next", e)
        }

        function c(e) {
            a("throw", e)
        }

        function u(e, t) {
            e(t), s.shift(), s.length && a(s[0][0], s[0][1])
        }
    }

    function O(e) {
        var t, n;
        return t = {}, r("next"), r("throw", function(e) {
            throw e
        }), r("return"), t[Symbol.iterator] = function() {
            return this
        }, t;

        function r(r, i) {
            t[r] = e[r] ? function(t) {
                return (n = !n) ? {
                    value: T(e[r](t)),
                    done: !1
                } : i ? i(t) : t
            } : i
        }
    }

    function C(e) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = y(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function r(n) {
            t[n] = e[n] && function(t) {
                return new Promise(function(r, i) {
                    var s, o, a;
                    s = r, o = i, a = (t = e[n](t)).done, Promise.resolve(t.value).then(function(e) {
                        s({
                            value: e,
                            done: a
                        })
                    }, o)
                })
            }
        }
    }

    function k(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t, e
    }
    var R = Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        },
        I = function(e) {
            return (I = Object.getOwnPropertyNames || function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
                return t
            })(e)
        };

    function N(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n = I(e), r = 0; r < n.length; r++) "default" !== n[r] && g(t, e, n[r]);
        return R(t, e), t
    }

    function A(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function x(e, t, n, r) {
        if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
    }

    function P(e, t, n, r, i) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !i) throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
    }

    function D(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
    }

    function M(e, t, n) {
        if (null != t) {
            var r, i;
            if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.");
            if (n) {
                if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                r = t[Symbol.asyncDispose]
            }
            if (void 0 === r) {
                if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                r = t[Symbol.dispose], n && (i = r)
            }
            if ("function" != typeof r) throw TypeError("Object not disposable.");
            i && (r = function() {
                try {
                    i.call(this)
                } catch (e) {
                    return Promise.reject(e)
                }
            }), e.stack.push({
                value: t,
                dispose: r,
                async: n
            })
        } else n && e.stack.push({
            async: !0
        });
        return t
    }
    var L = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
    };

    function U(e) {
        function t(t) {
            e.error = e.hasError ? new L(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var n, r = 0;
        return function i() {
            for (; n = e.stack.pop();) try {
                if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(i);
                if (n.dispose) {
                    var s = n.dispose.call(n.value);
                    if (n.async) return r |= 2, Promise.resolve(s).then(i, function(e) {
                        return t(e), i()
                    })
                } else r |= 1
            } catch (e) {
                t(e)
            }
            if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError) throw e.error
        }()
    }

    function j(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, s) {
            return n ? t ? ".jsx" : ".js" : !r || i && s ? r + i + "." + s.toLowerCase() + "js" : e
        }) : e
    }
    let F = {
        __extends: i,
        __assign: s,
        __rest: o,
        __decorate: a,
        __param: l,
        __esDecorate: c,
        __runInitializers: u,
        __propKey: d,
        __setFunctionName: h,
        __metadata: f,
        __awaiter: p,
        __generator: m,
        __createBinding: g,
        __exportStar: _,
        __values: y,
        __read: v,
        __spread: b,
        __spreadArrays: E,
        __spreadArray: S,
        __await: T,
        __asyncGenerator: w,
        __asyncDelegator: O,
        __asyncValues: C,
        __makeTemplateObject: k,
        __importStar: N,
        __importDefault: A,
        __classPrivateFieldGet: x,
        __classPrivateFieldSet: P,
        __classPrivateFieldIn: D,
        __addDisposableResource: M,
        __disposeResources: U,
        __rewriteRelativeImportExtension: j
    }
}, 84434: (e, t, n) => {
    "use strict";
    n.d(t, {
        E3: () => u,
        OM: () => h,
        Ub: () => f,
        ht: () => d
    });
    var r = n(12584),
        i = n(36645);

    function s() {
        let e = (0, r._)(["\n  color: ", ";\n"]);
        return s = function() {
            return e
        }, e
    }

    function o() {
        let e = (0, r._)(["\n  h1,\n  h2 {\n    margin: 0;\n    font-size: initial;\n    font-weight: normal;\n  }\n\n  .no-focus-outline {\n    *:focus {\n      outline: 0;\n    }\n  }\n\n  button {\n    margin: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n    background-color: transparent;\n    cursor: pointer;\n\n    &:focus-visible {\n      outline: #3673d4 auto 5px !important;\n      border-bottom: none !important;\n    }\n\n    &::after {\n      border-bottom: none !important;\n    }\n  }\n\n  a {\n    ", ";\n    text-decoration: none;\n\n    &:focus-visible {\n      text-decoration: underline !important;\n    }\n  }\n\n  button {\n    user-select: none;\n  }\n"]);
        return o = function() {
            return e
        }, e
    }

    function a() {
        let e = (0, r._)(["\n  body {\n    ", ";\n  }\n\n  ", ";\n"]);
        return a = function() {
            return e
        }, e
    }
    let l = (0, i.AH)(s(), "rgb(255, 255, 255)"),
        c = (0, i.AH)(o(), l),
        u = (0, i.AH)(a(), l, c),
        d = {
            compactLegacy: 80,
            landscape: 152,
            landscapeLegacy: 232,
            large: 352
        },
        h = {
            small: 360,
            medium: 510,
            smallVideo: 374,
            mediumVideo: 666
        },
        f = {
            landscape: {
                small: 90,
                large: 120
            },
            landscapeLegacy: {
                small: 152,
                medium: 160,
                large: 200
            },
            portrait: 176,
            largeScreen: {
                small: 216,
                large: 272
            }
        }
}, 86727: function(e, t, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n), Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        } : function(e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }),
        i = this && this.__exportStar || function(e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        },
        s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, i(n(54832), t), i(n(4073), t), i(n(34200), t);
    var o = n(30884);
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return s(o).default
        }
    })
}, 87148: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createClientIpContext = void 0, t.createClientIpContext = function(e) {
        return function() {
            return {
                name: "context_client_ip",
                data: {
                    value: e
                }
            }
        }
    }
}, 89045: (e, t, n) => {
    "use strict";
    n.d(t, {
        L: () => a,
        d: () => o
    });
    var r = n(4982);
    let i = "_sentryScope",
        s = "_sentryIsolationScope";

    function o(e, t, n) {
        e && ((0, r.my)(e, s, n), (0, r.my)(e, i, t))
    }

    function a(e) {
        return {
            scope: e[i],
            isolationScope: e[s]
        }
    }
}, 89411: (e, t, n) => {
    "use strict";
    n.d(t, {
        T2: () => a,
        XW: () => s,
        xg: () => o
    });
    var r, i = n(15677);

    function s(e) {
        return new a(t => {
            t(e)
        })
    }

    function o(e) {
        return new a((t, n) => {
            n(e)
        })
    }! function(e) {
        e[e.PENDING = 0] = "PENDING", e[e.RESOLVED = 1] = "RESOLVED", e[e.REJECTED = 2] = "REJECTED"
    }(r || (r = {}));
    class a {
        constructor(e) {
            this._state = r.PENDING, this._handlers = [], this._runExecutor(e)
        }
        then(e, t) {
            return new a((n, r) => {
                this._handlers.push([!1, t => {
                    if (e) try {
                        n(e(t))
                    } catch (e) {
                        r(e)
                    } else n(t)
                }, e => {
                    if (t) try {
                        n(t(e))
                    } catch (e) {
                        r(e)
                    } else r(e)
                }]), this._executeHandlers()
            })
        } catch (e) {
            return this.then(e => e, e)
        } finally(e) {
            return new a((t, n) => {
                let r, i;
                return this.then(t => {
                    i = !1, r = t, e && e()
                }, t => {
                    i = !0, r = t, e && e()
                }).then(() => {
                    if (i) return void n(r);
                    t(r)
                })
            })
        }
        _executeHandlers() {
            if (this._state === r.PENDING) return;
            let e = this._handlers.slice();
            this._handlers = [], e.forEach(e => {
                e[0] || (this._state === r.RESOLVED && e[1](this._value), this._state === r.REJECTED && e[2](this._value), e[0] = !0)
            })
        }
        _runExecutor(e) {
            let t = (e, t) => {
                    if (this._state === r.PENDING) {
                        if ((0, i.Qg)(t)) return void t.then(n, s);
                        this._state = e, this._value = t, this._executeHandlers()
                    }
                },
                n = e => {
                    t(r.RESOLVED, e)
                },
                s = e => {
                    t(r.REJECTED, e)
                };
            try {
                e(n, s)
            } catch (e) {
                s(e)
            }
        }
    }
}, 90041: () => {
    ! function() {
        "use strict";
        try {
            if ("localStorage" in window && null !== window.localStorage) {
                let e = "swxTest_".concat(Math.round(1e7 * Math.random()));
                window.localStorage.setItem(e, "test"), window.localStorage.removeItem(e)
            }
        } catch (t) {
            let e = {};
            Object.defineProperty(window, "localStorage", {
                setItem: (t, n) => (e[t] = n, e[t]),
                getItem: t => t in e ? e[t] : void 0,
                removeItem: t => {
                    delete e[t]
                },
                clear: () => e = {}
            })
        }
    }()
}, 90991: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createCorrelationIdContext = void 0, t.createCorrelationIdContext = function(e) {
        return function() {
            return {
                name: "context_correlation_id",
                data: {
                    value: e
                }
            }
        }
    }
}, 91011: (e, t, n) => {
    "use strict";
    n.d(t, {
        M: () => r
    });
    let r = "9.35.0"
}, 91426: (e, t, n) => {
    "use strict";
    n.d(t, {
        T: () => r
    });
    let r = !1
}, 92486: (e, t, n) => {
    "use strict";
    n.d(t, {
        E1: () => h,
        Ef: () => s,
        JD: () => a,
        Lc: () => p,
        Le: () => d,
        Sn: () => c,
        fs: () => l,
        i_: () => r,
        jG: () => f,
        sy: () => i,
        uT: () => o,
        xc: () => u
    });
    let r = "sentry.source",
        i = "sentry.sample_rate",
        s = "sentry.previous_trace_sample_rate",
        o = "sentry.op",
        a = "sentry.origin",
        l = "sentry.idle_span_finish_reason",
        c = "sentry.measurement_unit",
        u = "sentry.measurement_value",
        d = "sentry.custom_span_name",
        h = "sentry.profile_id",
        f = "sentry.exclusive_time",
        p = "sentry.link.type"
}, 95833: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, {
            Environment: () => r,
            EventSenderEvent: () => i,
            createEventSender: () => T
        }),
        function(e) {
            e.BACKEND = "BACKEND", e.BROWSER = "BROWSER", e.BROWSER_NON_AUTH = "BROWSER_NON_AUTH", e.DESKTOP = "DESKTOP", e.DESKTOP_NON_AUTH = "DESKTOP_NON_AUTH", e.DEVICE = "DEVICE", e.DEVICE_NON_AUTH = "DEVICE_NON_AUTH"
        }(r || (r = {}));
    var r, i, s, o = n(82643),
        a = n(42669),
        l = n(24623),
        c = n(8159);
    ! function(e) {
        e.UPLOAD_SUCCEEDED = "upload_succeeded", e.UPLOAD_FAILED = "upload_failed", e.UPLOAD_REQUEST_FAILED = "upload_request_failed"
    }(i || (i = {}));
    let u = l.m.forTag("Uploader");
    class d extends c.bk {
        constructor(e) {
            var t;
            super(), this._suppressPersist = !1, this._backoff = !1, this._authorize = null == (t = e.authorize) || t, this._transport = e.transport, this._suppressPersist = !!e.suppressPersist, this._endpoint = this._authorize ? "@webgate/gabo-receiver-service/v3/events" : "@webgate/gabo-receiver-service/public/v3/events"
        }
        _uploadBatch(e, t = !1) {
            let n = this._transport,
                r = t && this._authorize ? n.appendLastTokenQuery(this._endpoint) : this._endpoint;
            return this._transport.request(r, {
                method: a.Method.POST,
                metadata: {
                    eventSenderEventNames: e.map(e => e.event_name)
                },
                headers: {
                    "content-type": "application/json"
                },
                responseType: "json",
                parseResponseHeaders: !0,
                payload: JSON.stringify({
                    suppress_persist: this._suppressPersist,
                    events: e
                }),
                forget: t,
                authorize: !t && this._authorize
            }).then(this._parseUploadResponse.bind(this, e, t))
        }
        _parseUploadResponse(e, t, n) {
            if (t) return Promise.resolve([]);
            let {
                body: r,
                headers: s,
                status: a
            } = n, l = this._authorize;
            if (200 !== a || !r) return u.warn("Upload request failed", n), this.emit(i.UPLOAD_REQUEST_FAILED, {
                authorize: l,
                status: a
            }), this._backoff = !0, Promise.resolve(e);
            let c = [],
                d = [],
                h = [];
            if (r.error && r.error.length) {
                u.info("response errors", e, r.error);
                for (let t = 0, n = r.error.length; t < n; t++) {
                    let {
                        transient: n,
                        index: i,
                        reason: s
                    } = r.error[t], a = function(e, t) {
                        let {
                            event_name: n,
                            fragments: r
                        } = e, {
                            message: i
                        } = r;
                        return {
                            reason: t,
                            contexts: (0, o.__rest)(r, ["message"]),
                            event_data: {
                                name: n,
                                data: i
                            }
                        }
                    }(e[i], s);
                    n ? (c.push(e[i]), d.push(a)) : h.push(a)
                }
            }
            this._backoff = (null == s ? void 0 : s.get("backoff")) === "true";
            let f = d.length + h.length,
                p = e.length - f;
            return f > 0 && this.emit(i.UPLOAD_FAILED, {
                authorize: l,
                rejected: h,
                will_retry: d
            }), p > 0 && this.emit(i.UPLOAD_SUCCEEDED, {
                authorize: this._authorize,
                num_events: p
            }), Promise.resolve(c)
        }
        upload(e, t = []) {
            let n = t;
            if (!e.length) return Promise.resolve({
                nack: n,
                backoff: this._backoff
            });
            let r = [...e];
            return this._uploadBatch(r.splice(0, 20)).then(e => {
                if (n = [...n, ...e], this._backoff) n = [...n, ...r];
                else if (r.length) return this.upload(r, n);
                return {
                    nack: n,
                    backoff: this._backoff
                }
            })
        }
        lastUpload(e) {
            return e.length ? this._uploadBatch(e.splice(0, 100), !0).then(e => 0 === e.length, () => !1) : Promise.resolve(!0)
        }
        shouldBackoff() {
            return this._backoff
        }
    }
    var h = n(12213),
        f = n(58913);
    ! function(e) {
        e.INVALID_PAYLOAD = "INVALID_PAYLOAD", e.INVALID_NAME = "INVALID_NAME", e.UNKNOWN_OWNER = "UNKNOWN_OWNER", e.PAYLOAD_SIZE_LIMIT_EXCEEDED = "PAYLOAD_SIZE_LIMIT_EXCEEDED"
    }(s || (s = {}));
    let p = {
        version: "4.0.3"
    };
    var m = n(20446);
    class g {
        static pushToArrIfMissing(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        static isMissingFromArray(e, t) {
            return -1 === e.indexOf(t)
        }
    }
    class _ {
        _addEventsToEventSenderStatsData(e, t) {
            Object.keys(t).map(n => {
                for (let r = 0; r < t[n].length; r++) {
                    let i = t[n][r];
                    i.sequence_number < e[i.sequence_id][i.event_name].sequence_number_min && (e[i.sequence_id][i.event_name].sequence_number_min = i.sequence_number), e[i.sequence_id][i.event_name].storage_size++
                }
            })
        }
        _initializeESSEventData(e, t, n) {
            for (let [r, i] of (Object.keys(e).includes(n) || (e[n] = {}), Object.entries(t))) e[n][r] = {
                sequence_number_min: i + 1,
                sequence_number_next: i + 1,
                storage_size: 0
            }
        }
        _formatESS2UnauthEventData(e) {
            let t = {
                sequence_ids: [],
                event_names: [],
                loss_stats_num_entries_per_sequence_id: [],
                loss_stats_event_name_index: [],
                loss_stats_storage_sizes: [],
                loss_stats_sequence_number_mins: [],
                loss_stats_sequence_number_nexts: []
            };
            return Object.entries(e).map(([e, n]) => {
                if (g.isMissingFromArray(t.sequence_ids, e)) t.sequence_ids.push(e), t.loss_stats_num_entries_per_sequence_id.push(Object.keys(n).length);
                else {
                    let r = t.sequence_ids.indexOf(e);
                    t.loss_stats_num_entries_per_sequence_id[r] += Object.keys(n).length
                }
                Object.entries(n).map(([e, n]) => {
                    g.pushToArrIfMissing(t.event_names, e);
                    let r = t.event_names.indexOf(e);
                    t.loss_stats_event_name_index.push(r);
                    let i = Object.keys(n);
                    for (let e = 0; e < i.length; e++) t[`loss_stats_${i[e]}s`].push(n[i[e]])
                })
            }), t
        }
        createESSEvent(e, t, n) {
            let r = {};
            return this._initializeESSEventData(r, t, n), this._addEventsToEventSenderStatsData(r, e), (0, m.I)(this._formatESS2UnauthEventData(r))
        }
    }
    var y = n(26915);
    let v = {
        generateBase64: function(e) {
            return y.Base64.encode(function(e) {
                let t = "";
                for (let n = 0; n < e; n++) t += String.fromCharCode(256 * Math.random() | 0);
                return t
            }(e))
        }
    };
    class b {
        constructor() {
            this._sequenceId = v.generateBase64(16), this._sequenceNumbers = {}
        }
        static create() {
            return new b
        }
        getSequenceId() {
            return this._sequenceId
        }
        nextSequenceNumber(e) {
            return this._sequenceNumbers[e] || (this._sequenceNumbers[e] = 0), ++this._sequenceNumbers[e]
        }
        getAllSequenceNumberCounters() {
            return this._sequenceNumbers
        }
    }
    let E = {
        baseTime: 200,
        ceiling: 3e5,
        maxDuration: 18e5
    };
    class S extends c.bk {
        constructor(e) {
            var t;
            super(), this._sequenceIdGenerator = b.create(), this._statsSender = new _, this._instanceContexts = {}, this._sdkVersion = `${p.version}${null!=(t=e._experimentSuffix)?t:""}`, this._transport = e.transport, this._ownerProvider = e.ownerProvider, this._events = {
                authorized: [],
                unauthorized: []
            }, this._uploaders = e.uploaders, this._ongoingUploads = {
                authorized: !1,
                unauthorized: !1
            }, this._uploadWaiting = {
                authorized: !1,
                unauthorized: !1
            }, this._backoffTimeSettings = Object.assign(Object.assign({}, E), e.backoffTimeOverrides), this.upload = this.upload.bind(this), this._essLastSent = null, "undefined" == typeof window || "function" != typeof window.addEventListener || e.disableBeforeUnloadListener || window.addEventListener("beforeunload", this.onBeforeDisconnect.bind(this)), this.initializeContexts(e.context);
            let n = {
                [i.UPLOAD_SUCCEEDED]: i.UPLOAD_SUCCEEDED,
                [i.UPLOAD_FAILED]: i.UPLOAD_FAILED,
                [i.UPLOAD_REQUEST_FAILED]: i.UPLOAD_REQUEST_FAILED
            };
            this.proxyEmitAll(this._uploaders.authorized, n), this.proxyEmitAll(this._uploaders.unauthorized, n)
        }
        onBeforeDisconnect() {
            this.uploadFlush()
        }
        uploadFlush() {
            return Promise.all([this._uploaders.authorized.lastUpload(this._events.authorized.splice(0)), this._uploaders.unauthorized.lastUpload(this._events.unauthorized.splice(0))]).then(([e, t]) => e && t).catch(() => !1)
        }
        initializeContexts(e) {
            if (!(null == e ? void 0 : e.length)) return;
            let t = this._instanceContexts;
            for (let n of e) {
                let e = n();
                (null == e ? void 0 : e.name) && (t[e.name] = e.data)
            }
        }
        initFlush(e) {
            let t = this._uploaders[e].shouldBackoff(),
                {
                    ceiling: n,
                    maxDuration: r,
                    baseTime: i
                } = this._backoffTimeSettings;
            return h.n.init(() => this.upload(e), {
                curve: "exponential",
                backoffInitial: t,
                retryPredicate: () => this._transport.isOnline(),
                ceiling: n,
                baseTime: t ? n : i,
                maxDuration: r
            })
        }
        waitForConnection() {
            return new Promise(e => {
                this._transport.once(a.TransportEvent.CONNECTION_ONLINE, () => e())
            })
        }
        upload(e) {
            return this._uploaders[e].upload(this._events[e].splice(0)).then(t => {
                if (t.nack.length) throw this._events[e] = t.nack.concat(this._events[e]), Error("Backoff requested");
                return t
            })
        }
        sendToGabito(e) {
            let t = e ? "authorized" : "unauthorized";
            this._transport.isOnline() || this._ongoingUploads[t] || (this._ongoingUploads[t] = this.waitForConnection());
            let n = this._ongoingUploads[t];
            if (n) return this._uploadWaiting[t] || (this._uploadWaiting[t] = !0, this._ongoingUploads[t] = n.then(() => (this._ongoingUploads[t] = !1, this._uploadWaiting[t] = !1, this.sendToGabito(e)))), this._ongoingUploads[t];
            if (!this._events[t].length) return Promise.resolve({
                nack: this._events[t],
                backoff: this._uploaders[t].shouldBackoff()
            });
            if (!this._essLastSent || Date.now() - this._essLastSent.getTime() > 3e5) {
                let e = [this.makeEvent(this._statsSender.createESSEvent(this._events, this._sequenceIdGenerator.getAllSequenceNumberCounters(), this._sequenceIdGenerator.getSequenceId()))];
                this._uploaders.unauthorized.upload(e).finally(() => {
                    this._essLastSent = new Date
                })
            }
            let r = this.initFlush(t).then(e => (this._ongoingUploads[t] = !1, e)).catch(() => (this._ongoingUploads[t] = !1, this._transport.isOnline()) ? (S.consoleLogger.warn(`The events in the queue could not be uploaded. Throwing away ${this._events[t].length} ${t} events.`), this._events[t] = [], {
                nack: this._events[t],
                backoff: this._uploaders[t].shouldBackoff()
            }) : this.sendToGabito(e));
            return this._ongoingUploads[t] = r, r
        }
        storeEvent(e, t) {
            let n = this.makeEvent(t);
            this._events[e ? "authorized" : "unauthorized"].push(n)
        }
        makeEvent(e) {
            let t = this._sequenceIdGenerator;
            return {
                sequence_id: t.getSequenceId(),
                sequence_number: t.nextSequenceNumber(e.name),
                event_name: e.name,
                fragments: Object.assign(Object.assign({
                    context_sdk: {
                        version_name: this._sdkVersion,
                        type: "javascript"
                    },
                    context_time: {
                        timestamp: Date.now()
                    }
                }, this._instanceContexts), {
                    message: e.data
                })
            }
        }
        validateEventData(e, t, n) {
            return e.name ? function(e) {
                let t = e.length,
                    n = t;
                for (; n--;) {
                    let r = e.charCodeAt(n);
                    r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2), r >= 56320 && r <= 57343 && n--
                }
                return t
            }(JSON.stringify(e.data)) > 5e3 ? s.PAYLOAD_SIZE_LIMIT_EXCEEDED : t && n && !n() ? s.UNKNOWN_OWNER : null : s.INVALID_NAME
        }
        checkIsEventAuthorized(e) {
            return !e.endsWith("NonAuth")
        }
        flush(e = !0) {
            return this.sendToGabito(e).then(() => void 0).catch(() => void 0)
        }
        flushAll() {
            return Promise.all([this.sendToGabito(!0), this.sendToGabito(!1)]).then(() => void 0).catch(() => void 0)
        }
        finalFlush() {
            return this.uploadFlush()
        }
        log(e, t = {}) {
            this.send(e, t)
        }
        send(e, {
            flush: t = !0
        } = {}) {
            let n = this.checkIsEventAuthorized(e.name),
                r = this.validateEventData(e, n, this._ownerProvider);
            if (r === s.UNKNOWN_OWNER && (S.consoleLogger.warn(`Trying to send an authenticated event without a current owner: ${e.name}`), r = null), r) {
                let t = (0, f.R)({
                    event_name: e.name,
                    reject_reason: r
                });
                return this.storeEvent(!1, t), Promise.reject(TypeError(`The event is invalid and has been rejected for reason: ${r}`))
            }
            return (this.storeEvent(n, e), t) ? this.flush(n) : Promise.resolve()
        }
        hasContext(...e) {
            return e.every(e => !!this._instanceContexts[e])
        }
    }

    function T(e) {
        let t = {
            suppressPersist: e.suppressPersist,
            transport: e.transport
        };
        return new S(Object.assign(Object.assign({}, e), {
            uploaders: {
                authorized: new d(t),
                unauthorized: new d(Object.assign(Object.assign({}, t), {
                    authorize: !1
                }))
            }
        }))
    }
    S.consoleLogger = l.m.forTag("EventSender")
}, 97025: (e, t, n) => {
    "use strict";
    n.d(t, {
        Ow: () => o,
        Z9: () => a,
        pq: () => l,
        vF: () => c
    });
    var r = n(1229),
        i = n(8875),
        s = n(13980);
    let o = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        a = {};

    function l(e) {
        if (!("console" in s.O)) return e();
        let t = s.O.console,
            n = {},
            r = Object.keys(a);
        r.forEach(e => {
            let r = a[e];
            n[e] = t[e], t[e] = r
        });
        try {
            return e()
        } finally {
            r.forEach(e => {
                t[e] = n[e]
            })
        }
    }
    let c = (0, r.BY)("logger", function() {
        let e = !1,
            t = {
                enable: () => {
                    e = !0
                },
                disable: () => {
                    e = !1
                },
                isEnabled: () => e
            };
        return i.T ? o.forEach(n => {
            t[n] = (...t) => {
                e && l(() => {
                    s.O.console[n](`Sentry Logger [${n}]:`, ...t)
                })
            }
        }) : o.forEach(e => {
            t[e] = () => void 0
        }), t
    })
}, 97405: (e, t, n) => {
    "use strict";
    n.d(t, {
        f: () => i
    });
    var r = n(73757);

    function i(e) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
        let t = e || (0, r.KU)() ? .getOptions();
        return !!t && (null != t.tracesSampleRate || !!t.tracesSampler)
    }
}, 98213: (e, t, n) => {
    "use strict";
    n.d(t, {
        D0: () => u,
        De: () => c,
        sv: () => o,
        yD: () => l
    });
    var r = n(8875),
        i = n(15677),
        s = n(97025);
    let o = "sentry-",
        a = /^sentry-/;

    function l(e) {
        let t = u(e);
        if (!t) return;
        let n = Object.entries(t).reduce((e, [t, n]) => (t.match(a) && (e[t.slice(o.length)] = n), e), {});
        return Object.keys(n).length > 0 ? n : void 0
    }

    function c(e) {
        if (e) {
            var t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${o}${t}`] = n), e), {});
            return 0 !== Object.keys(t).length ? Object.entries(t).reduce((e, [t, n], i) => {
                let o = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                    a = 0 === i ? o : `${e},${o}`;
                return a.length > 8192 ? (r.T && s.vF.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : a
            }, "") : void 0
        }
    }

    function u(e) {
        if (e && ((0, i.Kg)(e) || Array.isArray(e))) return Array.isArray(e) ? e.reduce((e, t) => (Object.entries(d(t)).forEach(([t, n]) => {
            e[t] = n
        }), e), {}) : d(e)
    }

    function d(e) {
        return e.split(",").map(e => e.split("=").map(e => {
            try {
                return decodeURIComponent(e.trim())
            } catch {
                return
            }
        })).reduce((e, [t, n]) => (t && n && (e[t] = n), e), {})
    }
}, 98587: (e, t, n) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createInstallationIdContext = void 0;
    var r = n(9423);
    t.createInstallationIdContext = function(e) {
        var t = r.hexToBase64(e);
        return function() {
            return {
                name: "context_installation_id",
                data: {
                    value: t
                }
            }
        }
    }
}, 98696: (e, t, n) => {
    "use strict";
    n.d(t, {
        U: () => r
    });
    let r = "production"
}
}, e => {
var t = t => e(e.s = t);
e.O(0, [6593, 8792], () => (t(45790), t(30201), t(103))), _N_E = e.O()
}]);