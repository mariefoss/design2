try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8279ebd8-9f2f-416c-8798-d7a33a1e1f95", e._sentryDebugIdIdentifier = "sentry-dbid-8279ebd8-9f2f-416c-8798-d7a33a1e1f95")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6506], {
        6506: (e, r, t) => {
            t.d(r, {
                checkPlatform: () => s
            });
            var n = t(12204);

            function s() {
                return URL && URL.createObjectURL ? n.X.create({
                    noServerCertificate: !0,
                    transport: {
                        request: (...e) => Promise.reject(TypeError("Unexpected call to mock Transport.request"))
                    }
                }).then(() => !0) : Promise.reject(TypeError("URL.createObjectURL is not supported"))
            }
        }
    }
]);