try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6a64bb21-51dc-4b31-8d8e-7dd4deb48a8a", e._sentryDebugIdIdentifier = "sentry-dbid-6a64bb21-51dc-4b31-8d8e-7dd4deb48a8a")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5454], {
        221: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            let i = (0, n(50148).createContext)(null)
        },
        859: e => {
            e.exports = {
                text: "UpsellTitle_text__28Mv1"
            }
        },
        1824: e => {
            e.exports = {
                circularContainer: "PreviewPlayButton_circularContainer__IPZte",
                circularInner: "PreviewPlayButton_circularInner___9inH",
                rangeBarRight: "PreviewPlayButton_rangeBarRight__7U2dx",
                rangeBarLeft: "PreviewPlayButton_rangeBarLeft__QqPAO",
                rangeBarProgress: "PreviewPlayButton_rangeBarProgress__m16Uz"
            }
        },
        1837: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => b
            });
            var i = n(5640),
                a = n(45543),
                r = n(61979),
                s = n(46001),
                o = n.n(s),
                l = n(50148),
                d = n(7113),
                u = n(36832),
                c = n(4551),
                p = n(44902),
                m = n(95859),
                _ = n(69136),
                v = n(23740),
                h = n(62909),
                y = n(95322),
                k = n(41124),
                f = n.n(k);
            let b = e => {
                let {
                    showUpsell: t,
                    variant: n
                } = e, s = (0, d.d4)(e => e.data.entity), {
                    metadata: k
                } = (0, l.useMemo)(() => (0, c.O)(s), [s]), {
                    playbackState: b,
                    triggerPlaybackOperation: g
                } = (0, l.useContext)(p.T), T = null == b ? void 0 : b.isPaused, E = (0, v.j)(), w = (0, l.useCallback)(e => E((0, _.d)(e)), [E]), S = (null == k ? void 0 : k.title) || "", N = (0, u.aG)({
                    productName: "embed_player_p"
                }), x = (0, d.d4)(h.BT);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(a.E, {
                        as: "h1",
                        variant: null != n ? n : "bodyMedium",
                        className: o()(f().title, {
                            [f().alignBelowUpsell]: t
                        }),
                        "data-testid": "entity-title",
                        children: (0, i.jsx)(y.r, {
                            title: S,
                            children: (0, i.jsx)(r.Y, {
                                standalone: !0,
                                semanticColor: "textBase",
                                onClick: (e => () => {
                                    ("title" === e || "cover-art" === e) && x && void 0 !== T && g((0, m.v7)()), w({
                                        action_type: "click",
                                        action_intent: "deeplink",
                                        action_item_id: e
                                    })
                                })("title"),
                                href: null == N ? void 0 : N.selectedEntity,
                                children: S
                            })
                        })
                    })
                })
            }
        },
        1926: (e, t, n) => {
            "use strict";
            n.d(t, {
                CU: () => r,
                Hz: () => i,
                IY: () => o,
                NI: () => l,
                WO: () => s,
                Xr: () => h,
                Z4: () => y,
                hM: () => d,
                j5: () => v,
                lQ: () => c,
                oD: () => m,
                r2: () => u,
                rp: () => p,
                tr: () => a,
                zK: () => _
            });
            let i = "PAUSE",
                a = "PLAY",
                r = "TOGGLE_PLAY",
                s = "PLAY_INDEX",
                o = "RESUME",
                l = "SEEK",
                d = "SEEK_BACK",
                u = "SEEK_FORWARD",
                c = "PLAY_NEXT",
                p = "PLAY_PREVIOUS",
                m = "MUTE",
                _ = "UNMUTE",
                v = "SET_CURRENT_PREVIEW_TRACK_INDEX",
                h = {
                    AUDIO: "audio",
                    VIDEO: "video"
                },
                y = {
                    NONE: "NONE",
                    ALLOWED: "ALLOWED",
                    MANDATORY: "MANDATORY"
                }
        },
        2142: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => r
            });
            var i = n(7113),
                a = n(84339);

            function r() {
                let e = (0, i.d4)(e => e.settings.isAudiobookLaunchedInGeoMarket),
                    t = (0, i.d4)(e => e.machineState.playbackMode);
                return n => (0, a.C)(n, t, null != e && e)
            }
        },
        3324: (e, t, n) => {
            "use strict";
            n.d(t, {
                p: () => b
            });
            var i = n(5640),
                a = n(4896),
                r = n(35992),
                s = n(51615),
                o = n(23910),
                l = n(77228),
                d = n(50148),
                u = n(7113),
                c = n(36832),
                p = n(14814),
                m = n(12292),
                _ = n(69136),
                v = n(23740),
                h = n(84434),
                y = n(54692),
                k = n(75194),
                f = n.n(k);
            let b = () => {
                let e = (0, u.d4)(e => {
                        var t;
                        return (null == (t = e.data.entity) ? void 0 : t.type) !== l.NQG.ARTIST
                    }),
                    t = (0, u.d4)(e => e.settings.isMobile),
                    n = (0, v.j)(),
                    k = (0, o.kj)(),
                    b = (0, u.d4)(e => e.settings.session.isAnonymous),
                    g = (0, u.d4)(e => {
                        var t;
                        return (null == (t = e.data.entity) ? void 0 : t.isAudiobook) ? e.data.entity.relatedEntityUri : e.data.entity.uri
                    }),
                    T = (0, u.d4)(e => e.settings.isVideoEmbed),
                    E = (0, c.aG)({
                        productName: "embed_player_p",
                        intent: c.pg.ADD_TO_LIBRARY
                    }),
                    [w, S] = (0, p.A)(g),
                    {
                        width: N
                    } = d.useContext(m.k);
                if (!e || void 0 === w) return null;
                let x = w[g] ? k("embed.saved-on-spotify", "Saved on Spotify", "Button`s text that removes an item to the user`s library") : k("embed.save-on-spotify", "Save on Spotify", "Button`s text that adds an item to the user`s library"),
                    A = async () => {
                        b ? (n((0, _.d)({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: "save-on-spotify-button"
                        })), (0, y.J)({
                            url: E.embeddedEntity,
                            newWindow: !t
                        })) : (n((0, _.d)({
                            action_type: "click",
                            action_intent: w[g] ? "remove-from-spotify" : "save-on-spotify"
                        })), await S(!w[g]))
                    };
                return (0, i.jsx)(a.H, {
                    iconOnly: w[g] ? r.k : s.P,
                    "data-testid": "save-on-spotify-button",
                    condensedAll: !0,
                    title: x,
                    "aria-label": x,
                    onClick: A,
                    semanticColor: "textBase",
                    size: T && N && N > h.OM.mediumVideo ? "large" : "medium",
                    className: f().addToLibraryButton
                })
            }
        },
        4551: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => a
            });
            var i = n(5447);
            let a = e => {
                var t, n, a, r, s, o, l, d;
                let u;
                if (!e) throw Error("Error: Entity Unavailable");
                let c = e.uri,
                    p = {};
                return (p.title = e.title, p.subtitle = e.subtitle, p.duration = null == (t = null != (r = e.duration) ? r : 0) ? void 0 : t.toString(), p.audioPreviewUrl = null != (s = null == (n = e.audioPreview) ? void 0 : n.url) ? s : void 0, p.videoPreviewUrl = null != (o = null == (a = e.videoPreview) ? void 0 : a.url) ? o : void 0, p.explicit = e.isExplicit ? "true" : "false", "relatedEntityUri" in e) ? (p.releaseDate = null == (l = e.releaseDate) ? void 0 : l.isoString, e.trackList && e.trackList.length > 0 && e.trackList.some(e => e.entityType === i.c.CHAPTER && e.isPlayable) && (u = [{
                    items: null == (d = e.trackList) ? void 0 : d.filter(e => e.isPlayable).map(e => ({
                        uid: e.uid,
                        type: function(e) {
                            return e === i.c.EPISODE ? i.c.EPISODE : e === i.c.TRACK ? i.c.TRACK : e === i.c.CHAPTER ? i.c.CHAPTER : i.c.UNKNOWN
                        }(e.entityType),
                        uri: e.uri,
                        provider: null
                    }))
                }])) : p.uid = e.uid, {
                    uri: c,
                    metadata: p,
                    pages: u
                }
            }
        },
        4776: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var i = function(e) {
                return e.AR = "،\xa0", e.FA = "،\xa0", e.EN = ",\xa0", e
            }(i || {});
            let a = e => {
                switch (e) {
                    case "ar":
                    case "fa":
                        return "،\xa0";
                    default:
                        return ",\xa0"
                }
            }
        },
        5131: (e, t, n) => {
            "use strict";
            n.d(t, {
                JO: () => a,
                O: () => i
            }), n(82536), n(93629), n(77228);
            class i extends Error {
                static fromResponse(e, t) {
                    return new i({
                        message: e.statusText,
                        url: e.url,
                        method: t,
                        status: e.status,
                        response: e
                    })
                }
                constructor(e) {
                    let {
                        message: t,
                        url: n,
                        method: i,
                        status: a,
                        response: r
                    } = e;
                    super(t), this.name = "HttpResponseError", this.requestUrl = n, this.requestMethod = i, this.status = a, this.response = r
                }
            }
            class a extends i {
                constructor(e) {
                    let {
                        timeout: t,
                        url: n,
                        method: i
                    } = e;
                    super({
                        message: "".concat(i.toUpperCase(), " ").concat(n, " timed out (").concat(t, "ms)"),
                        url: n,
                        method: i,
                        status: 503
                    }), this.name = "HttpRequestTimeoutError", this.timeout = t
                }
            }
            n(75733)
        },
        5447: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => i
            });
            var i = function(e) {
                return e.ALBUM = "album", e.ARTIST = "artist", e.AUDIOBOOK = "audiobook", e.CHAPTER = "chapter", e.EPISODE = "episode", e.PLAYLIST = "playlist", e.PLAYLISTV2 = "playlist-v2", e.SHOW = "show", e.TRACK = "track", e.UNKNOWN = "unknown", e
            }({})
        },
        6424: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => o
            });
            var i = n(50148),
                a = n(7113),
                r = n(12292),
                s = n(84434);

            function o() {
                let {
                    height: e
                } = i.useContext(r.k), t = (0, a.d4)(e => e.settings.isVideoEmbed);
                return {
                    isCompactLegacy: !!(e && e < s.ht.landscape) && !t,
                    isCompactTracklist: !!(e && e < s.ht.large) && !t
                }
            }
        },
        10262: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => o
            });
            var i = n(50148),
                a = n(7113),
                r = n(44902),
                s = n(97427);
            let o = () => {
                var e, t, n, o, l;
                let d = (0, a.d4)(e => {
                        let {
                            machineState: t
                        } = e;
                        return t.playbackMode
                    }),
                    u = (0, a.d4)(e => {
                        let {
                            data: t
                        } = e;
                        return t.entity
                    }),
                    {
                        playbackState: c
                    } = (0, i.useContext)(r.T);
                if ("artist" === u.type && d === s.L.FULL) {
                    let e = u.trackList;
                    return null == e || null == (o = e.find(e => {
                        var t;
                        return e.uri === (null == c || null == (t = c.item) ? void 0 : t.uri)
                    })) ? void 0 : o.uid
                }
                return null != (l = d === s.L.FULL ? null == c || null == (e = c.item) ? void 0 : e.uid : null == c || null == (n = c.context) || null == (t = n.metadata) ? void 0 : t.uid) ? l : void 0
            }
        },
        10632: e => {
            e.exports = {
                progressBarContainer: "ProgressBar_progressBarContainer__glVHh",
                progressBarLineActive: "ProgressBar_progressBarLineActive__eawR7",
                progressBarLineBackground: "ProgressBar_progressBarLineBackground__S9lxG",
                progressBarLine: "ProgressBar_progressBarLine__a7FZb",
                progressBarSlider: "ProgressBar_progressBarSlider__oFBQJ",
                visible: "ProgressBar_visible__kkOqc",
                tooltip: "ProgressBar_tooltip__E8aUa",
                tooltipContainer: "ProgressBar_tooltipContainer__GjrK3"
            }
        },
        10870: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => k
            });
            var i = n(5640),
                a = n(61979),
                r = n(23910),
                s = n(46001),
                o = n.n(s),
                l = n(38600);
            n(50148);
            var d = n(7113),
                u = n(69136),
                c = n(57223),
                p = n(23740),
                m = n(97427),
                _ = n(78344),
                v = n(77740),
                h = n(56244),
                y = n.n(h);
            let k = e => {
                let {
                    visible: t,
                    showPolicies: n = !0,
                    onClose: s,
                    children: h
                } = e, k = (0, r.kj)(), f = (0, d.d4)(e => e.machineState.playbackMode), b = (0, d.d4)(e => e.settings.isVideoEmbed), g = (0, p.j)(), T = () => {
                    null == s || s(), g((0, c.eL)()), g((0, u.d)({
                        action_type: "click",
                        action_intent: "close-context-menu"
                    }))
                };
                return (0, i.jsx)(i.Fragment, {
                    children: f !== m.L.UNKNOWN && (0, i.jsx)(l.FocusTrap, {
                        active: t,
                        focusTrapOptions: {
                            onDeactivate: T,
                            initialFocus: !1
                        },
                        children: (0, i.jsxs)("div", {
                            className: o()(y().wrapper, {
                                [y().visible]: t
                            }),
                            children: [(0, i.jsxs)("div", {
                                className: o()(y().menuContent, {
                                    [y().visible]: t
                                }),
                                children: [h, n && (0, i.jsxs)("div", {
                                    className: o()(y().policies, {
                                        [y().stickDown]: !b
                                    }),
                                    children: [(0, i.jsx)(a.Y, {
                                        className: y().link,
                                        href: "https://www.spotify.com/legal/privacy-policy/",
                                        target: "_blank",
                                        onClick: () => {
                                            g((0, u.d)({
                                                action_type: "click",
                                                action_intent: "privacypolicy-show"
                                            }))
                                        },
                                        semanticColor: "textSubdued",
                                        standalone: !0,
                                        children: k("spe.privacy_policy", "Privacy Policy", "Button`s text that opens privacy policy Spotify`s page")
                                    }), (0, i.jsx)(v.w, {
                                        className: y().separator
                                    }), (0, i.jsx)(a.Y, {
                                        className: y().link,
                                        href: "https://www.spotify.com/legal",
                                        target: "_blank",
                                        semanticColor: "textSubdued",
                                        onClick: () => {
                                            g((0, u.d)({
                                                action_type: "click",
                                                action_intent: "termsandconditions-show"
                                            }))
                                        },
                                        standalone: !0,
                                        children: k("spe.terms_and_conditions", "Terms & Conditions", "Button`s text that opens a terms and conditions Spotify`s page")
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: y().closeButton,
                                children: (0, i.jsx)(_.J, {
                                    handleClose: T
                                })
                            })]
                        })
                    })
                })
            }
        },
        11710: (e, t, n) => {
            "use strict";
            n.d(t, {
                H: () => o
            });
            var i = n(82536),
                a = n(93629);
            let r = e => e ? "rgba(".concat(e.red, ", ").concat(e.green, ", ").concat(e.blue, ", ").concat(e.alpha, ")") : null,
                s = e => ({
                    "--dynamic-opacity": e.opacity,
                    "--dynamic-background-base": e.backgroundBase,
                    "--dynamic-background-tinted": e.backgroundTinted,
                    "--dynamic-background-tinted-50": e.backgroundTinted50,
                    "--background-base": e.backgroundBase,
                    "--background-tinted": e.backgroundTinted,
                    "--text-base": e.textBase,
                    "--text-bright-accent": e.textBrightAccent,
                    "--text-subdued": e.textSubdued
                }),
                o = e => e ? s({
                    backgroundBase: r(null == e ? void 0 : e.backgroundBase),
                    backgroundTinted: r(null == e ? void 0 : e.backgroundTintedBase),
                    backgroundTinted50: r((null == e ? void 0 : e.backgroundTintedBase) ? (0, a._)((0, i._)({}, e.backgroundTintedBase), {
                        alpha: .5
                    }) : null),
                    textBase: r(null == e ? void 0 : e.textBase),
                    textBrightAccent: r(null == e ? void 0 : e.textBrightAccent),
                    textSubdued: r(null == e ? void 0 : e.textSubdued),
                    opacity: e ? "1" : null
                }) : {}
        },
        12292: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => l,
                k: () => o
            });
            var i = n(82536),
                a = n(5640),
                r = n(50148);
            let s = {
                    width: null,
                    height: null
                },
                o = (0, r.createContext)(s),
                l = e => {
                    let {
                        children: t
                    } = e, [n, l] = (0, r.useState)(s);
                    return (0, r.useEffect)(() => {
                        l({
                            width: window.innerWidth,
                            height: window.innerHeight
                        });
                        let e = () => {
                            l({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, []), (0, a.jsx)(o.Provider, {
                        value: (0, i._)({}, n),
                        children: t
                    })
                }
        },
        14814: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var i = n(82536),
                a = n(93629),
                r = n(50148),
                s = n(7113),
                o = n(221),
                l = n(15171);

            function d(e) {
                let t = (0, r.useContext)(o.Z),
                    n = null == t ? void 0 : t.containsSync(e),
                    d = n ? {
                        [e]: n
                    } : void 0,
                    [u, c] = (0, r.useState)(d),
                    p = (0, s.d4)(e => e.settings.session.isAnonymous),
                    m = u && void 0 !== u[e],
                    _ = (0, r.useCallback)(async n => {
                        n ? await (null == t ? void 0 : t.add(e)) : await (null == t ? void 0 : t.remove(e))
                    }, [e, t]);
                return (0, r.useEffect)(() => {
                    let n;
                    if (t && !p)
                        if (m) {
                            let r = t => {
                                let {
                                    data: n
                                } = t;
                                e === n.uri && c(t => (0, a._)((0, i._)({}, t), {
                                    [e]: n.isInLibrary
                                }))
                            };
                            t.getEvents().addListener(l.U.UPDATE_ITEM, r), n = () => {
                                t.getEvents().removeListener(l.U.UPDATE_ITEM, r)
                            }
                        } else t.contains(e).then(t => {
                            let [n] = t;
                            return c(t => t ? (0, a._)((0, i._)({}, t), {
                                [e]: n
                            }) : {
                                [e]: n
                            })
                        });
                    return p && c(t => (0, a._)((0, i._)({}, t), {
                        [e]: !1
                    })), n
                }, [t, p, e, m]), [u, _]
            }
        },
        15171: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => a,
                b: () => r
            });
            var i = n(8159),
                a = function(e) {
                    return e.UPDATE_ITEM = "update_item", e
                }({});
            class r extends i.bk {}
        },
        19676: e => {
            e.exports = {
                playerControlsWrapper: "PlayerControlsShort_playerControlsWrapper__qdkr5",
                addToLibraryCompactWrapper: "PlayerControlsShort_addToLibraryCompactWrapper__vXwv0",
                overflowMenuButtonWrapper: "PlayerControlsShort_overflowMenuButtonWrapper__qNhz2",
                previewPlayPauseWrapper: "PlayerControlsShort_previewPlayPauseWrapper__39zQA",
                skipButtonsWrapper: "PlayerControlsShort_skipButtonsWrapper__8Nqc6"
            }
        },
        20063: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => _
            });
            var i = n(82536),
                a = n(93629),
                r = n(5640),
                s = n(4896),
                o = n(48148),
                l = n(45543),
                d = n(46001),
                u = n.n(d),
                c = n(6424),
                p = n(98923),
                m = n.n(p);
            let _ = e => {
                let {
                    variant: t = "bodyMedium",
                    icon: n,
                    disabled: d = !1,
                    className: p,
                    href: _,
                    children: v,
                    title: h,
                    ariaLabel: y,
                    clickedAnimation: k = !1,
                    testId: f,
                    onClick: b
                } = e, {
                    isCompactLegacy: g,
                    isCompactTracklist: T
                } = (0, c.o)(), E = g ? s.H : o.$;
                return (0, r.jsx)(E, (0, a._)((0, i._)({
                    colorSet: "base",
                    disabled: d,
                    className: u()(p, m().overflowButton, {
                        [m().clicked]: k
                    }),
                    onClick: e => {
                        e.stopPropagation(), null == b || b()
                    },
                    iconLeading: n,
                    title: h,
                    "aria-label": y,
                    href: _,
                    "data-testid": f,
                    size: T ? "small" : "medium"
                }, g ? {
                    condensedAll: !0
                } : {
                    colorSet: "base",
                    fullWidth: !0
                }), {
                    children: (0, r.jsx)(l.E, {
                        variant: t,
                        className: u()(m().truncator, m().text, {
                            [m().compact]: g
                        }),
                        children: v
                    })
                }))
            }
        },
        20532: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => N
            });
            var i = n(5640),
                a = n(359),
                r = n(41109),
                s = n(76679),
                o = n(23910),
                l = n(46001),
                d = n.n(l),
                u = n(50148),
                c = n(7113),
                p = n(71343),
                m = n(97427);
            let _ = (0, p.Mz)([e => e.settings.session.isAnonymous, e => e.machineState.platformSupportsEncryptedContent, e => e.machineState.playbackMode, e => {
                    var t, n;
                    return null != (n = null == (t = e.data.entity) ? void 0 : t.isAudiobook) && n
                }, e => {
                    var t;
                    return null != (t = e.settings.isAudiobookLaunchedInGeoMarket) && t
                }], (e, t, n, i, a) => ({
                    isAnonymous: e,
                    platformSupportsEncryptedContent: t,
                    playbackMode: n,
                    isAudiobook: i,
                    isAudiobookLaunchedInGeoMarket: a
                })),
                v = () => {
                    let {
                        isAnonymous: e,
                        platformSupportsEncryptedContent: t,
                        playbackMode: n,
                        isAudiobook: i,
                        isAudiobookLaunchedInGeoMarket: a
                    } = (0, c.d4)(_);
                    return n === m.L.UNKNOWN || !e && !t && n === m.L.PREVIEW && i && !a
                };
            var h = n(44902),
                y = n(95859),
                k = n(69136),
                f = n(23740),
                b = n(1926),
                g = n(93980),
                T = n.n(g);
            let E = () => (0, i.jsx)("div", {
                className: T().loadingSpinner
            });
            var w = n(30802),
                S = n.n(w);
            let N = e => {
                var t, n;
                let {
                    maxTimeToNotShowLoading: l
                } = e, p = (0, c.d4)(e => e.data.entity).isPlayable, {
                    playbackState: m,
                    triggerPlaybackOperation: _
                } = (0, u.useContext)(h.T), g = v(), T = (null == m ? void 0 : m.isBuffering) || !1, w = (null == m ? void 0 : m.isDisabled) || g, N = (0, f.j)(), x = !!(null == m ? void 0 : m.hasContext), A = null == m || null == (t = m.item) ? void 0 : t.uri, C = !x || null == (n = null == m ? void 0 : m.isPaused) || n, P = (0, o.kj)(), j = (0, c.d4)(e => e.settings.isVideoEmbed), [L, O] = (0, u.useState)(P("page.loading", "Loading", "Accessibility label for loading spinner")), R = (0, u.useRef)(!1), I = (0, u.useRef)(void 0), D = (0, u.useRef)(void 0), [B, M] = (0, u.useState)(!1);
                (0, u.useEffect)(() => {
                    R.current ? (T ? I.current = setTimeout(() => {
                        I.current = void 0, T && M(!0)
                    }, l || 200) : (I && clearTimeout(I.current), B && !D && setTimeout(() => {
                        M(!1)
                    }, 300)), B && (D.current = setTimeout(() => {
                        D.current = void 0, T || M(!1)
                    }, 300))) : R.current = !0
                });
                let U = (0, u.useRef)(null);
                return (0, u.useEffect)(() => {
                    w || !p ? (O(P("spe.error_heading", "Something went wrong", "Accessibility label for error message")), U.current = (0, i.jsx)(a.x, {
                        className: S().playPauseIcon,
                        title: L,
                        color: (0, r.cl)("textBase")
                    })) : B ? (O(P("page.loading", "Loading", "Accessibility label for loading spinner")), U.current = (0, i.jsx)(E, {})) : C ? (O(P("embed_play", "Play", "Accessibility label for a button that plays preview of a track")), U.current = (0, i.jsx)(a.x, {
                        className: S().playPauseIcon,
                        title: L,
                        color: (0, r.cl)("textBase")
                    })) : (O(P("embed_pause", "Pause", "Accessibility label for a button that pauses preview of a track")), U.current = (0, i.jsx)(s.B, {
                        className: S().playPauseIcon,
                        title: L,
                        color: (0, r.cl)("textBase")
                    }))
                }, [B, C, P, L, w, p]), (0, i.jsx)("button", {
                    "data-testid": "play-pause-button",
                    className: d()(S().buttonWrapper, {
                        [S().disabled]: w || !p,
                        [S().adaptForVideo]: j
                    }),
                    onClick: () => {
                        w || (p ? (_((0, y.d5)(j ? b.Xr.VIDEO : b.Xr.AUDIO)), N((0, k.d)({
                            action_type: "click",
                            action_intent: !1 === C ? "pause" : "play",
                            action_item_id: "now-playing-bar",
                            item_uri: A
                        }))) : N((0, k.d)({
                            action_type: "playback",
                            action_intent: "track-not-available",
                            action_item_id: "now-playing-bar",
                            item_uri: A
                        })))
                    },
                    "aria-label": L,
                    tabIndex: 0,
                    children: U.current
                })
            }
        },
        21521: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => r,
                n: () => a
            });
            var i = n(77258);

            function a() {
                return {
                    type: i.Z
                }
            }

            function r() {
                return {
                    type: i.L
                }
            }
        },
        22076: (e, t, n) => {
            "use strict";
            n.d(t, {
                P: () => j
            });
            var i = n(5640),
                a = n(45543),
                r = n(61979),
                s = n(23910),
                o = n(15297),
                l = n(46001),
                d = n.n(l),
                u = n(50148),
                c = n(7113),
                p = n(36832),
                m = n(4776),
                _ = n(4551),
                v = n(44902),
                h = n(95859),
                y = n(12292),
                k = n(69136),
                f = n(23740),
                b = n(62909),
                g = n(84434),
                T = n(77228),
                E = n(58914),
                w = n(97912);
            let S = e => {
                let {
                    uri: t,
                    name: n,
                    onClick: a
                } = e, s = (0, u.useMemo)(() => {
                    var e;
                    return (0, w.jT)(null != (e = (0, T.o_h)(t)) ? e : void 0, !1).toString()
                }, [t]), o = (0, E.g)();
                return (0, i.jsx)(r.Y, {
                    standalone: !0,
                    semanticColor: o ? "textSubdued" : "textBase",
                    onClick: a,
                    href: s,
                    children: n
                })
            };
            var N = n(95322),
                x = n(77740),
                A = n(41124),
                C = n.n(A);
            let P = (e, t) => e && t ? t < g.ht.landscape ? "marginal" : e < g.OM.medium || t < g.ht.large ? "bodySmall" : "bodyMedium" : "bodyMedium",
                j = e => {
                    let {
                        showUpsell: t
                    } = e, {
                        width: n,
                        height: l
                    } = u.useContext(y.k), g = (0, c.d4)(e => e.data.entity), {
                        metadata: T
                    } = (0, u.useMemo)(() => (0, _.O)(g), [g]), {
                        playbackState: E,
                        triggerPlaybackOperation: w
                    } = (0, u.useContext)(v.T), A = null == E ? void 0 : E.isPaused, j = (0, c.d4)(e => {
                        var t;
                        return !!(null == (t = e.data.entity) ? void 0 : t.isAudiobook)
                    }), L = (0, f.j)(), O = (0, u.useCallback)(e => L((0, k.d)(e)), [L]), R = (null == T ? void 0 : T.title) || "", I = (null == T ? void 0 : T.subtitle) || "", D = g.artists, B = new Date((null == T ? void 0 : T.releaseDate) || ""), M = (0, p.aG)({
                        productName: "embed_player_p"
                    }), U = (0, s.Ym)(), F = (0, c.d4)(b.BT), V = P(n, l), G = e => () => {
                        ("title" === e || "cover-art" === e) && F && void 0 !== A && w((0, h.v7)()), O({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: e
                        })
                    }, [W, q] = (0, u.useState)(!1);
                    return (0, u.useEffect)(() => {
                        q(!0)
                    }, []), (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("h2", {
                            className: d()(C().subtitle, {
                                [C().alignBelowUpsell]: t,
                                [C().isAudiobook]: j
                            }),
                            children: (0, i.jsx)(N.r, {
                                title: R,
                                children: (0, i.jsxs)("span", {
                                    className: C().wrapper,
                                    children: [F && !j && (0, i.jsxs)(i.Fragment, {
                                        children: [W && (0, i.jsx)(a.E, {
                                            semanticColor: "textSubdued",
                                            variant: V,
                                            children: (0, i.jsx)(o.gz, {
                                                options: {
                                                    day: "numeric",
                                                    month: "short"
                                                },
                                                locale: U,
                                                date: B
                                            })
                                        }), (0, i.jsx)(x.w, {
                                            className: C().separator
                                        })]
                                    }), I && (0, i.jsx)(a.E, {
                                        variant: V,
                                        children: (0, i.jsx)(r.Y, {
                                            standalone: !0,
                                            semanticColor: "textSubdued",
                                            dir: "auto",
                                            onClick: G("subtitle"),
                                            href: null == M ? void 0 : M.compositeEntity,
                                            children: I
                                        })
                                    }), (null == D ? void 0 : D.length) && D.map((e, t) => [t > 0 && (0, i.jsx)(a.E, {
                                        semanticColor: "textSubdued",
                                        variant: V,
                                        children: (0, m.A)(U)
                                    }, "separator-".concat(e.uri)), (0, i.jsx)(S, {
                                        uri: e.uri,
                                        name: e.name,
                                        onClick: G("artist")
                                    }, "artist-link-".concat(e.uri))])]
                                })
                            })
                        })
                    })
                }
        },
        23196: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => r
            });
            var i = n(51580),
                a = n.n(i);

            function r() {
                let e = a().getParser(window.navigator.userAgent),
                    t = function(e) {
                        switch (e) {
                            case "macOS":
                                return "osx";
                            case "Chrome OS":
                                return "chrome";
                            default:
                                return e
                        }
                    }(e.getOSName() || "not_applicable"),
                    n = function(e, t) {
                        if ("Windows" === e) switch (t) {
                            case "NT":
                                return "NT";
                            case "XP":
                            case "NT 5.1":
                                return "XP";
                            case "NT 5.0":
                                return "2000";
                            case "NT 5.2":
                                return "2003";
                            case "NT 6.0":
                                return "Vista";
                            case "NT 6.1":
                                return "7";
                            case "NT 6.2":
                                return "8";
                            case "NT 6.3":
                                return "8.1";
                            case "NT 10.0":
                                return "10";
                            default:
                                return ""
                        }
                        return t
                    }(t, e.getOSVersion());
                return {
                    osName: t,
                    osVersion: n,
                    browserName: e.getBrowserName(),
                    browserVersion: e.getBrowserVersion()
                }
            }
        },
        23199: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => i
            });
            let i = "LOG_INTERACTION"
        },
        23332: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => p
            });
            var i = n(5640),
                a = n(4896),
                r = n(78689),
                s = n(23910),
                o = n(69136),
                l = n(57223),
                d = n(23740),
                u = n(67142),
                c = n.n(u);
            let p = () => {
                let e = (0, d.j)(),
                    t = (0, s.kj)()("embed_more", "More", "Accessibility label for an open context menu button");
                return (0, i.jsx)(a.H, {
                    condensedAll: !0,
                    size: "small",
                    className: c().overflowMenuButton,
                    semanticColor: "textBase",
                    title: t,
                    "aria-label": t,
                    onClick: () => {
                        e((0, l.v7)()), e((0, o.d)({
                            action_type: "click",
                            action_intent: "open-context-menu"
                        }))
                    },
                    children: (0, i.jsx)(r.x, {})
                })
            }
        },
        23740: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => i
            });
            let i = n(7113).wA
        },
        24862: (e, t, n) => {
            "use strict";
            n.d(t, {
                Fv: () => r,
                iG: () => i,
                tx: () => a
            });
            let i = "CLOSE_OVERFLOW_MENU",
                a = "SHOW_OVERFLOW_MENU",
                r = "PLAY_ON_SPOTIFY_CLICK"
        },
        25056: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => g
            });
            var i = n(82536),
                a = n(93629),
                r = n(5640),
                s = n(4896),
                o = n(359),
                l = n(28088),
                d = n(23910),
                u = n(50148),
                c = n(7113),
                p = n(2142),
                m = n(44902),
                _ = n(95859),
                v = n(12292),
                h = n(69136),
                y = n(23740),
                k = n(84434),
                f = n(1824),
                b = n.n(f);
            let g = () => {
                var e, t;
                let n = (0, d.kj)(),
                    [f, g] = (0, u.useState)({
                        left: 0,
                        right: 0,
                        animationState: 0
                    }),
                    [T, E] = (0, u.useState)(!0),
                    {
                        playbackState: w,
                        triggerPlaybackOperation: S
                    } = (0, u.useContext)(m.T),
                    N = null == w ? void 0 : w.duration,
                    x = null == w ? void 0 : w.positionAsOfTimestamp,
                    A = (0, c.d4)(e => e.data.entity),
                    C = (0, p.G)(),
                    P = null == A || null == (e = A.trackList) ? void 0 : e.map(e => C(e)).some(Boolean),
                    j = (null == A ? void 0 : A.trackList) ? P : null == A ? void 0 : A.isPlayable,
                    L = null == w || null == (t = w.item) ? void 0 : t.uri,
                    O = (null == A ? void 0 : A.audioPreview) === null || (null == w ? void 0 : w.isDisabled) || !j,
                    R = (0, y.j)(),
                    I = !(null == w ? void 0 : w.hasContext) || (null == w ? void 0 : w.isPaused),
                    D = (0, u.useRef)(!0);
                D.current = f.right < 180;
                let {
                    height: B
                } = u.useContext(v.k);
                (0, u.useEffect)(() => {
                    B && E(B >= k.ht.large)
                }, [B]), (0, u.useEffect)(() => {
                    if (0 === x) {
                        D.current = !0, g(e => (0, a._)((0, i._)({}, e), {
                            left: 0,
                            right: 0,
                            animationState: 2
                        }));
                        return
                    }
                    if (N && x && x > 0) {
                        let e = 360 * x / N,
                            t = e > 180 ? 180 : e,
                            n = e > 180 ? e - 180 : 0,
                            r = D.current;
                        g(e => (0, a._)((0, i._)({}, e), {
                            left: 180 === t && r && 2 === e.animationState ? 0 : n,
                            right: t,
                            animationState: 0 === e.animationState ? 1 : e.animationState
                        }))
                    }
                }, [N, x]), (0, u.useEffect)(() => {
                    1 === f.animationState && g(e => (0, a._)((0, i._)({}, e), {
                        animationState: 2
                    }))
                }, [f.animationState]);
                let M = {
                        zIndex: 1,
                        transform: "rotate(".concat(f.right, "deg)"),
                        transition: 0 === f.right || 2 !== f.animationState ? "none" : "transform 1s ease-in-out"
                    },
                    U = {
                        zIndex: 2,
                        transform: "rotate(".concat(f.left, "deg)"),
                        transition: 0 === f.left || 2 !== f.animationState ? "none" : "transform 1s ease-in-out"
                    },
                    F = () => {
                        !O && (S((0, _.d5)()), R((0, h.d)({
                            action_type: "click",
                            action_intent: (null == w ? void 0 : w.isPaused) === !1 ? "pause" : "play",
                            action_item_id: "now-playing-bar",
                            item_uri: L
                        })), j || R((0, h.d)({
                            action_type: "playback",
                            action_intent: "track-not-available",
                            action_item_id: "now-playing-bar",
                            item_uri: L
                        })))
                    };
                return (0, r.jsx)("div", {
                    className: b().circularContainer,
                    "data-testid": "preview-play-pause",
                    children: I ? (0, r.jsx)(s.H, {
                        disabled: O,
                        "aria-label": n("embed_play", "Play", "Accessibility label for a button that plays preview of a track"),
                        "data-testid": "play-pause-button",
                        onClick: F,
                        semanticColor: "textBase",
                        condensedAll: !0,
                        children: (0, r.jsx)(o.x, {
                            semanticColor: "textBase",
                            size: T ? "xlarge" : "large"
                        })
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: b().rangeBarRight,
                            children: (0, r.jsx)("div", {
                                className: b().rangeBarProgress,
                                style: M,
                                "data-testid": "progress-right"
                            })
                        }), (0, r.jsx)("div", {
                            className: b().rangeBarLeft,
                            children: (0, r.jsx)("div", {
                                className: b().rangeBarProgress,
                                style: U,
                                "data-testid": "progress-left"
                            })
                        }), (0, r.jsx)("div", {
                            className: b().circularInner,
                            children: (0, r.jsx)(s.H, {
                                className: b().iconPlayingButton,
                                "aria-label": n("embed_pause", "Pause", "Accessibility label for a button that pauses preview of a track"),
                                "data-testid": "play-pause-button",
                                onClick: F,
                                semanticColor: "textBase",
                                condensedAll: !0,
                                children: (0, r.jsx)(l._, {
                                    size: T ? "large" : "medium"
                                })
                            })
                        })]
                    })
                })
            }
        },
        26776: e => {
            e.exports = {
                wrapper: "Error_wrapper__rnmqo",
                content: "Error_content__DLtLW",
                title: "Error_title__Itx4f",
                description: "Error_description__wJgFt",
                links: "Error_links__xYnxY",
                primary: "Error_primary__1qg4H",
                icon: "Error_icon__7F4I4",
                secondary: "Error_secondary__pz9N0"
            }
        },
        29153: e => {
            e.exports = {
                coverArt: "CoverArtBase_coverArt__ne0XI"
            }
        },
        30802: e => {
            e.exports = {
                buttonWrapper: "PlayButton_buttonWrapper___CMG4",
                adaptForVideo: "PlayButton_adaptForVideo__bsKjt",
                playPauseIcon: "PlayButton_playPauseIcon__EBXpd",
                disabled: "PlayButton_disabled__F2saR"
            }
        },
        31099: (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => p
            });
            var i = n(5640),
                a = n(46001),
                r = n.n(a),
                s = n(50148),
                o = n(36832),
                l = n(69136),
                d = n(23740),
                u = n(29153),
                c = n.n(u);
            let p = e => {
                let {
                    className: t,
                    onClick: n
                } = e, a = (0, d.j)(), u = (0, s.useCallback)(e => a((0, l.d)(e)), [a]), p = (0, o.aG)({
                    productName: "embed_player_p"
                });
                return (0, i.jsx)("div", {
                    onClick: () => {
                        n && n(), u({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: "cover-art"
                        }), window.open(null == p ? void 0 : p.embeddedEntity, "_blank")
                    },
                    "aria-hidden": !0,
                    className: r()(c().coverArt, t)
                })
            }
        },
        31119: e => {
            e.exports = {
                upsellContentContainer: "Upsell_upsellContentContainer__xjlbk",
                transition_enter: "Upsell_transition_enter__1J8pP",
                transition_enterActive: "Upsell_transition_enterActive__7oD__",
                transition_exit: "Upsell_transition_exit__gTMji",
                transition_exitActive: "Upsell_transition_exitActive__MLvE3"
            }
        },
        32059: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => _
            });
            var i = n(5640),
                a = n(54325),
                r = n(23910),
                s = n(50148),
                o = n(74228),
                l = n(36832),
                d = n(12292),
                u = n(69136),
                c = n(23740),
                p = n(84434);
            let m = (e, t, n, i) => n ? t <= p.OM.smallVideo ? "medium" : t <= p.OM.mediumVideo ? "large" : "xlarge" : e >= p.ht.large && t >= p.OM.medium && !i ? "large" : e >= p.ht.landscape ? "medium" : "small",
                _ = e => {
                    let {
                        trackListLength: t,
                        className: n,
                        isVideoEntity: p
                    } = e, _ = (0, c.j)(), [v, h] = (0, s.useState)("large"), {
                        width: y,
                        height: k
                    } = s.useContext(d.k), f = (0, l.aG)({
                        productName: p ? "embed_player_v" : "embed_player_p"
                    }), b = (0, r.kj)();
                    (0, s.useEffect)(() => {
                        k && y && h(m(k, y, p, t))
                    }, [k, y, t, p]);
                    let g = b("play_on_spotify", "Play on Spotify", "Button that plays the viewed content in the Spotify client");
                    return (0, i.jsx)("a", {
                        className: n,
                        onClick: () => {
                            _((0, u.d)({
                                action_type: "click",
                                action_intent: "deeplink",
                                action_item_id: "spotify-logo"
                            }))
                        },
                        title: g,
                        href: (null == f ? void 0 : f.embeddedEntity) || o.G,
                        role: "button",
                        "aria-label": g,
                        "data-testid": "spotify-logo",
                        children: (0, i.jsx)(a.D, {
                            size: v,
                            semanticColor: "textBase"
                        })
                    })
                }
        },
        33933: (e, t, n) => {
            "use strict";

            function i(e) {
                return void 0 !== e.status
            }
            n.d(t, {
                _: () => i
            })
        },
        35054: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            let i = e => e < 10 ? "0".concat(e) : "".concat(e),
                a = e => {
                    let t = Math.abs(e),
                        n = Math.floor(t / 36e5),
                        a = Math.floor(t % 36e5 / 6e4) || 0,
                        r = Math.floor(t % 6e4 / 1e3) || 0,
                        s = i(a),
                        o = i(r),
                        l = [n ? "".concat(n) : "", s, o].filter(e => e).join(":");
                    return "".concat(e < 0 ? "-" : "").concat(l)
                }
        },
        36317: (e, t, n) => {
            "use strict";
            let i;
            n.d(t, {
                q: () => eF
            });
            var a = n(5640),
                r = n(36645),
                s = n(41097),
                o = n(23910),
                l = n(50148),
                d = n(7113),
                u = function(e) {
                    return e.InvalidURI = "invalid_uri", e.PlaybackError = "playback_error", e
                }({}),
                c = function(e) {
                    return e.READY = "ready", e.PLAYBACK_STARTED = "playback_started", e.PLAYBACK_UPDATE = "playback_update", e.ERROR = "error", e
                }({}),
                p = function(e) {
                    return e.PLAY_FROM_START = "play_from_start", e.PLAY = "play", e.PAUSE = "pause", e.RESUME = "resume", e.TOGGLE_PLAY = "toggle", e.SEEK = "seek", e.LOAD_COMPLETE_ACK = "load_complete_ack", e
                }({}),
                m = n(95859),
                _ = n(69136),
                v = n(81201),
                h = n(88986),
                y = n(1926),
                k = n(83405);
            let f = () => ({
                type: "backend",
                async read(e, t, i) {
                    try {
                        if ("en" === e) return i(null, {});
                        return i(null, await n(50713)("./".concat(e, "/strings.json")))
                    } catch (e) {
                        return i(null, {})
                    }
                }
            });
            var b = n(38015),
                g = n(77228);
            let T = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "addItemsToRootlist"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "newPosition"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "RootlistItemPositionInput"
                                    }
                                }
                            }
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "addItemsToRootlist"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "newPosition"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "newPosition"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "uris"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "uris"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                E = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "removePlaylistFromRootlist"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "removeItemsFromRootlist"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "uris"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "uris"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                };
            var w = function(e) {
                return e.AfterUri = "AFTER_URI", e.BeforeUri = "BEFORE_URI", e.BottomOfRootlist = "BOTTOM_OF_ROOTLIST", e.TopOfRootlist = "TOP_OF_ROOTLIST", e
            }({});
            let S = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "addEntitiesToLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "addLibraryItems"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "uris"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "uris"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "library"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                N = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areAlbumsInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "albums"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Album"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                x = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areArtistsInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "artists"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Artist"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                A = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areTracksInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tracks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Track"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                C = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areShowsInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "podcasts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Audiobook"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Podcast"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                P = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "areEpisodesInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "episodes"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Episode"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "saved"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                j = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "arePlaylistsInLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ID"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "playlistsV2"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "uris"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "uris"
                                        }
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "__typename"
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Playlist"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "following"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                },
                L = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "removeEntitiesFromLibrary"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uris"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "ListType",
                                    type: {
                                        kind: "NonNullType",
                                        type: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "String"
                                            }
                                        }
                                    }
                                }
                            }
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "removeLibraryItems"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "input"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "uris"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "uris"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "library"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                };
            var O = n(15171);

            function R(e) {
                return e === g.NQG.ALBUM || e === g.NQG.ARTIST || e === g.NQG.TRACK || e === g.NQG.SHOW || e === g.NQG.EPISODE || e === g.NQG.PLAYLIST_V2
            }

            function I(e) {
                return e.map(e => {
                    if ("GenericError" === e.__typename || "NotFound" === e.__typename || "RestrictedContent" === e.__typename || "Chapter" === e.__typename) throw Error("The typename: ".concat(e.__typename, " is not supported"));
                    return "Playlist" === e.__typename ? !!(null == e ? void 0 : e.following) : !!(null == e ? void 0 : e.saved)
                })
            }
            class D {
                getEvents() {
                    return this._events
                }
                async add() {
                    let e;
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if (n.length) {
                        n.forEach(t => {
                            if (!(e = (0, g.o_h)(t)) || !R(e.type)) throw Error("Unknown URI type: ".concat(null == e ? void 0 : e.type))
                        });
                        try {
                            let t = (null == e ? void 0 : e.type) === g.NQG.PLAYLIST_V2 ? await this.requestGQL(T, {
                                newPosition: {
                                    fromUri: null,
                                    moveType: w.TopOfRootlist
                                },
                                uris: n
                            }) : await this.requestGQL(S, {
                                uris: n
                            });
                            if (!t || t.errors) throw Error("GraphQL query failed");
                            if (!(null == t ? void 0 : t.errors))
                                for (let e of n) this._cache.set(e, !0), this._events.emit(O.U.UPDATE_ITEM, {
                                    uri: e,
                                    isInLibrary: !0
                                })
                        } catch (e) {
                            throw Error("Error adding ".concat(JSON.stringify(n), " to library: ").concat(e))
                        }
                    }
                }
                async remove() {
                    let e;
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    if (n.length) {
                        n.forEach(t => {
                            if (!(e = (0, g.o_h)(t)) || !R(e.type)) throw Error("Unknown URI type: ".concat(null == e ? void 0 : e.type))
                        });
                        try {
                            let t = (null == e ? void 0 : e.type) === g.NQG.PLAYLIST_V2 ? await this.requestGQL(E, {
                                uris: n
                            }) : await this.requestGQL(L, {
                                uris: n
                            });
                            if (!t || t.errors) throw Error("GraphQL query failed");
                            for (let e of n) this._cache.set(e, !1), this._events.emit(O.U.UPDATE_ITEM, {
                                uri: e,
                                isInLibrary: !1
                            })
                        } catch (e) {
                            throw Error("Error removing ".concat(JSON.stringify(n), " from library: ").concat(e))
                        }
                    }
                }
                async containsEntitiesOfType(e, t) {
                    if (0 === t.length) return [];
                    let n = async e => {
                        let n = await this.requestGQL(e, {
                            uris: t
                        });
                        if (!n || n.errors) throw Error("GraphQL query failed");
                        return n
                    };
                    switch (e) {
                        case g.NQG.ALBUM:
                            return I((await n(N)).data.albums);
                        case g.NQG.ARTIST:
                            return I((await n(x)).data.artists);
                        case g.NQG.TRACK:
                            return I((await n(A)).data.tracks);
                        case g.NQG.SHOW:
                            return I((await n(C)).data.podcasts);
                        case g.NQG.EPISODE:
                            return I((await n(P)).data.episodes);
                        case g.NQG.PLAYLIST_V2:
                            return I((await n(j)).data.playlistsV2);
                        default:
                            throw Error("Unknown URI type: ".concat(e))
                    }
                }
                containsSync(e) {
                    return this._cache.get(e)
                }
                async contains() {
                    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    let a = []; {
                        let e = [];
                        if (n.forEach(t => {
                                let n = this._cache.get(t);
                                void 0 !== n ? e.push(n) : a.push(t)
                            }), e.length === n.length) return e
                    }
                    let r = (e = e => {
                        let t = (0, g.o_h)(e);
                        if (null === t || !R(t.type)) throw Error("Unknown URI type: ".concat(null == t ? void 0 : t.type));
                        return t.type
                    }, a.reduce((t, n) => {
                        let i = e(n);
                        return (t[i] = t[i] || []).push(n), t
                    }, {}));
                    return await Promise.all(Object.entries(r).map(async e => {
                        let t, [n, i] = e,
                            a = i.join(",");
                        this._pendingRequests.has(a) ? t = this._pendingRequests.get(a) : (t = this.containsEntitiesOfType(n, i), this._pendingRequests.set(a, t));
                        let r = await t;
                        i.forEach((e, t) => {
                            this._cache.set(e, r[t]), this._events.emit(O.U.UPDATE_ITEM, {
                                uri: e,
                                isInLibrary: r[t]
                            })
                        }), this._pendingRequests.delete(a)
                    })), n.map(e => this._cache.get(e))
                }
                constructor(e) {
                    this.requestGQL = e, this._events = new O.b, this._cache = new Map, this._pendingRequests = new Map
                }
            }
            var B = n(221),
                M = n(80955),
                U = n(81531),
                F = n(77082),
                V = n(27157);
            let G = V.env.DEBUG_EVENT_SENDER,
                W = (e, t, n) => {
                    let i = (0, U.kE)({
                        transport: e,
                        suppressPersist: !1,
                        context: [(0, F.createClientIdContext)(t), (0, F.createApplicationContext)({
                            version: V.env.__BUILD_VERSION__
                        }), (0, F.createUserAgentContext)(), (0, F.createCorrelationIdContext)(n)],
                        ownerProvider: () => null,
                        storagePrefix: t
                    });
                    return G && (i._send = i.send, i.send = function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                        return console.log("EventSender.send"), console.table(e), i._send(e, ...n)
                    }, i.addListeners({
                        [U.ky.UPLOAD_SUCCEEDED]: e => {
                            console.log("EventSender: uploaded ".concat(e.data.num_events, " events"))
                        },
                        [U.ky.UPLOAD_FAILED]: e => {
                            console.error("EventSender: upload failed", e)
                        }
                    })), i
                };
            var q = n(62909),
                H = n(97427);
            async function Y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
                try {
                    return await e()
                } catch (i) {
                    if (t) return await new Promise(e => setTimeout(e, n)), Y(e, t - 1, n);
                    throw Error("Import failed after retry.", {
                        cause: i
                    })
                }
            }
            async function K(e) {
                let {
                    createHarmonyPlayer: t
                } = await Y(() => Promise.all([n.e(2204), n.e(6052), n.e(6411), n.e(5824)]).then(n.bind(n, 24320)));
                return t(e)
            }
            async function Q(e, t) {
                let {
                    createOverturePlayer: i
                } = await Y(() => Promise.all([n.e(2204), n.e(6052), n.e(4847)]).then(n.bind(n, 95881)));
                return i(e, t)
            }
            let z = async (e, t, n) => {
                let {
                    playbackMode: i,
                    platformSupportsEncryptedContent: a
                } = await n, r = !t.settings.session.isAnonymous, s = t.settings.isMixedPlaylistV2;
                return !(0, q.BT)(t) && i === H.L.FULL || s && (0, q.o2)(t) && r && i === H.L.PREVIEW && a ? K(e) : Q(e, t)
            };
            var X = n(42669),
                J = n(51460);
            let Z = e => {
                if (i) return i;
                let t = (0, X.createBaseTransport)({
                    providers: {
                        endpoints: (0, X.createXResolveProvider)(),
                        token: function(e) {
                            var t;
                            let n;
                            return t = async () => {
                                let t;
                                if (e && !(Date.now() >= e.accessTokenExpirationTimestampMs)) t = e;
                                else {
                                    if (null === (t = (await b.n.getInstance().build().withPath("/embed/api/token").withoutMarket().withoutAuthorization().withEndpointIdentifier("/embed/api/token").send()).body)) throw Error("Token is currently unavailable.");
                                    b.n.setSession(t)
                                }
                                let {
                                    accessToken: n,
                                    accessTokenExpirationTimestampMs: i
                                } = t;
                                return [n, Math.floor(((i || 0) - Date.now()) / 1e3)]
                            }, n = null, async () => {
                                let e;
                                if (n) return n;
                                n = t();
                                try {
                                    e = await n
                                } finally {
                                    n = null
                                }
                                return e
                            }
                        }(e.tokenFromServer)
                    },
                    disconnectBeforeUnload: !0,
                    reconnectionRetries: 3,
                    requestMode: "fetch"
                });
                return e.useDealer && t.addPlugin(J.kJ, {
                    WebSocket: WebSocket
                }), t.on(X.TransportEvent.CONNECTED, () => {
                    t.isAuthenticated() || t.authenticate()
                }), t.on(X.TransportEvent.DISCONNECTED, () => {
                    t.connect()
                }), t.connect(), i = t, t
            };
            var $ = n(44902);
            let ee = (0, l.createContext)(null);
            var et = n(12292),
                en = n(86143),
                ei = n(10895),
                ea = n(82536),
                er = n(93629),
                es = n(8486),
                eo = n(5447),
                el = n(23199),
                ed = n(77258),
                eu = n(44118),
                ec = n(23196);
            let ep = e => t => {
                var n;
                let {
                    data: {
                        entity: i
                    },
                    settings: {
                        session: {
                            isAnonymous: a = !1
                        }
                    }
                } = t.getState(), r = null != (n = null == i ? void 0 : i.uri) ? n : "";

                function s(t) {
                    return e.send((0, es.i)(t))
                }
                let {
                    osName: o,
                    osVersion: l,
                    browserName: d,
                    browserVersion: u
                } = (0, ec.F)(), c = (0, eu.H)();
                return e => n => {
                    var i;
                    let {
                        data: p,
                        settings: m,
                        machineState: _
                    } = t.getState(), v = (0, g.o_h)(p.embeded_entity_uri), h = (null == (i = p.entity) ? void 0 : i.isAudiobook) ? eo.c.AUDIOBOOK : null == v ? void 0 : v.type, y = _.playbackMode === H.L.PREVIEW, k = {
                        device_type: m.isMobile || m.isTablet ? "mobile" : "desktop",
                        view_uri: r,
                        entity_uri: null == v ? void 0 : v.toURI(),
                        entity_type: h,
                        embed_is_video: !!m.isVideoEmbed,
                        page_url: window.location.href,
                        referrer: c,
                        viewport_width: window.innerWidth,
                        viewport_height: window.innerHeight,
                        is_authenticated: !a,
                        browser_name: d,
                        browser_version: u,
                        os_name: o,
                        os_version: l,
                        is_preview: y
                    };
                    switch (n.type) {
                        case ed.L:
                            s((0, er._)((0, ea._)({}, k), {
                                action_type: "pageview",
                                action_intent: null,
                                action_item_id: null,
                                item_uri: null
                            }));
                            break;
                        case el.O:
                            s((0, er._)((0, ea._)({}, k), {
                                action_type: n.interactionData.action_type,
                                action_intent: n.interactionData.action_intent,
                                action_item_id: n.interactionData.action_item_id,
                                item_uri: n.interactionData.item_uri
                            }))
                    }
                    return e(n)
                }
            };
            var em = n(87734),
                e_ = n(24862);
            let ev = {
                    initialized: !1,
                    showOverflowMenu: !1,
                    playbackMode: H.L.UNKNOWN,
                    platformSupportsEncryptedContent: !1,
                    currentPreviewTrackIndex: 0
                },
                eh = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case ed.Z:
                            return (0, er._)((0, ea._)({}, e), {
                                initialized: !0
                            });
                        case e_.tx:
                            return (0, er._)((0, ea._)({}, e), {
                                showOverflowMenu: !0
                            });
                        case e_.iG:
                            return (0, er._)((0, ea._)({}, e), {
                                showOverflowMenu: !1
                            });
                        case H.b:
                            return (0, er._)((0, ea._)({}, e), {
                                playbackMode: t.playbackMode,
                                platformSupportsEncryptedContent: t.platformSupportsEncryptedContent
                            });
                        case y.j5:
                            return (0, er._)((0, ea._)({}, e), {
                                currentPreviewTrackIndex: t.index
                            });
                        default:
                            return e
                    }
                },
                ey = e => (0, en.HY)({
                    data: () => e.data,
                    settings: () => e.settings,
                    machineState: eh
                }),
                ek = () => en.Zz;
            var ef = n(5131);

            function eb(e) {
                if ("undefined" != typeof TextEncoder) return new TextEncoder().encode(e);
                let t = new Uint8Array(e.length);
                for (let n = 0; n < e.length; n += 1) t[n] = e.charCodeAt(n);
                return t
            }
            var eg = n(65953),
                eT = n.n(eg);
            let eE = async function(e) {
                let t = eb(e);
                return eT().createHash("sha256").update(t).digest("hex")
            };
            class ew {}
            ew.encode = eb, ew.hash = eE;
            var eS = n(71135);

            function eN(e) {
                return "OperationDefinition" === e.kind
            }
            let ex = "https://api-partner.spotify.com/pathfinder/v1";
            async function eA(e) {
                return {
                    persistedQuery: {
                        version: 1,
                        sha256Hash: await ew.hash(e.body)
                    }
                }
            }
            async function eC(e, t, n, i, a) {
                let {
                    type: r,
                    name: s
                } = t;
                return e.build().withHost(ex).withMethod("mutation" === r ? "POST" : "GET").withoutMarket().withPath("/query").withJsonContentType().withRetries({
                    retries: 2,
                    retryDelay: 800,
                    retryOn: [503]
                }).withQueryParameters((0, ea._)({
                    operationName: s,
                    variables: JSON.stringify(n),
                    extensions: JSON.stringify(i)
                }, a)).withEndpointIdentifier("/query/".concat(s)).send()
            }
            async function eP(e, t, n, i, a) {
                let {
                    name: r,
                    body: s
                } = t;
                return e.build().withHost(ex).withMethod("POST").withoutMarket().withPath("/query").withJsonContentType().withBody({
                    operationName: r,
                    variables: n,
                    query: s,
                    extensions: i
                }).withQueryParameters((0, ea._)({}, a)).withEndpointIdentifier("/query/".concat(r)).send()
            }
            async function ej(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = await eA(t);
                try {
                    var r, s;
                    let o = await eC(e, t, n, a, i);
                    if (null == (s = o.body) || null == (r = s.errors) ? void 0 : r.some(e => "PersistedQueryNotFound" === e.message)) return eP(e, t, n, a, i);
                    return o
                } catch (r) {
                    if (r instanceof ef.O && 405 === r.status) return eP(e, t, n, a, i);
                    throw r
                }
            }
            var eL = n(84434);
            async function eO() {
                let {
                    checkPlatform: e
                } = await Promise.all([n.e(2204), n.e(6506)]).then(n.bind(n, 6506));
                return e()
            }
            let eR = () => eO().catch(() => !1),
                eI = e => {
                    let {
                        settings: {
                            session: t
                        }
                    } = e;
                    return !!(!t.accessToken || t.isAnonymous)
                },
                eD = e => {
                    let {
                        settings: t
                    } = e;
                    return !!t.isMobile
                },
                eB = e => {
                    let {
                        settings: t
                    } = e;
                    return !!t.isSafari
                },
                eM = (e, t) => {
                    let n = (0, q.BT)(t),
                        i = !(0, q.yY)(t);
                    return n && (e || t.data.defaultAudioFileObject.passthrough !== y.Z4.NONE && t.data.defaultAudioFileObject.passthroughUrl) || !n && e && !eI(t) && !eD(t) && !eB(t) || t.settings.isVideoEmbed && i ? H.L.FULL : H.L.PREVIEW
                },
                eU = e => eR().then(t => ({
                    playbackMode: eM(t, e),
                    platformSupportsEncryptedContent: t
                })),
                eF = e => {
                    let {
                        children: t,
                        props: {
                            config: n,
                            state: i
                        }
                    } = e, [g, T] = (0, l.useState)(function(e) {
                        let t = ey(e);
                        return (0, em.U1)({
                            reducer: t,
                            preloadedState: e
                        })
                    }(i)), [E, w] = (0, l.useState)(null), [S, N] = (0, l.useState)(null), [x, A] = (0, l.useState)(null), [C] = (0, l.useState)(() => (0, o.hU)(n.strings, f()));
                    return (0, M.E)(n), (0, l.useEffect)(() => {
                        var e;
                        b.n.setSession(i.settings.session);
                        let t = Z({
                                useDealer: !i.settings.session.isAnonymous,
                                tokenFromServer: i.settings.session
                            }),
                            a = eU(i);
                        z(t, i, a).then(e => {
                            let {
                                playerAPI: t
                            } = e;
                            N(t)
                        }), A(new D((e = b.n.getInstance(), async function(t, n) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                a = function(e) {
                                    let t = e.definitions.filter(eN);
                                    if (0 === t.length) throw Error("No GraphQL operation definition found in document!");
                                    if (t.length > 1) throw Error("Too many GraphQL operation definitions found in document! Expected exactly one.");
                                    let [n] = t;
                                    if (void 0 === n.name) throw Error("Nameless GraphQL operations are not supported!");
                                    return {
                                        type: n.operation,
                                        name: n.name.value,
                                        body: (0, eS.y)(e)
                                    }
                                }(t);
                            if ("subscription" === a.type) throw Error("GraphQL subscriptions are not supported!");
                            return (await ej(e, a, n, i)).body
                        })));
                        let {
                            correlationId: r,
                            clientId: s
                        } = n, o = W(t, s, r);
                        w(o);
                        let l = function(e, t) {
                            let n = ek(),
                                i = [ep(t), ei.P],
                                a = ey(e);
                            return (0, em.U1)({
                                reducer: a,
                                preloadedState: e,
                                middleware: e => e({
                                    immutableCheck: !1,
                                    composeEnhancer: n
                                }).concat(i),
                                duplicateMiddlewareCheck: !1
                            })
                        }(i, o);
                        a.then(e => {
                            var t;
                            let {
                                playbackMode: n,
                                platformSupportsEncryptedContent: i
                            } = e;
                            return (0, l.dispatch)((t = n || H.L.PREVIEW, {
                                type: H.b,
                                playbackMode: t,
                                platformSupportsEncryptedContent: i
                            })), n
                        }), T(l)
                    }, [i, n]), ! function(e, t) {
                        let {
                            triggerPlaybackOperation: n
                        } = (0, k.N)(e, t), i = (0, l.useRef)(!1);
                        (0, l.useEffect)(() => {
                            if (!e) return () => {};
                            let a = i => {
                                var a, r, s, o, l;
                                let d = t.getState().settings.isVideoEmbed && (null == (r = t.getState().data) || null == (a = r.entity) ? void 0 : a.hasVideo),
                                    u = t.dispatch;
                                switch (null == (s = i.data) ? void 0 : s.command) {
                                    case p.PLAY:
                                    case p.PLAY_FROM_START:
                                        n((0, m.ZH)(d ? y.Xr.VIDEO : y.Xr.AUDIO)), u((0, _.d)({
                                            page: window.location.pathname,
                                            action_intent: "play",
                                            action_type: "iframe-api"
                                        }));
                                        break;
                                    case p.PAUSE:
                                        n((0, m.v7)()), u((0, _.d)({
                                            page: window.location.pathname,
                                            action_intent: "pause",
                                            action_type: "iframe-api"
                                        }));
                                        break;
                                    case p.RESUME:
                                        (null == (o = e.getState()) ? void 0 : o.hasContext) ? n((0, m.U)()): n((0, m.ZH)(d ? y.Xr.VIDEO : y.Xr.AUDIO)), u((0, _.d)({
                                            page: window.location.pathname,
                                            action_intent: "resume",
                                            action_type: "iframe-api"
                                        }));
                                        break;
                                    case p.TOGGLE_PLAY:
                                        n((0, m.d5)(d ? y.Xr.VIDEO : y.Xr.AUDIO)), u((0, _.d)({
                                            page: window.location.pathname,
                                            action_intent: "toggle",
                                            action_type: "iframe-api"
                                        }));
                                        break;
                                    case p.SEEK:
                                        {
                                            let e = parseInt(null == (l = i.data) ? void 0 : l.timestamp, 10);n((0, m.jF)(1e3 * e)),
                                            u((0, _.d)({
                                                page: window.location.pathname,
                                                action_intent: "seek",
                                                action_type: "iframe-api"
                                            }))
                                        }
                                        break;
                                    case p.LOAD_COMPLETE_ACK:
                                        u((0, _.d)({
                                            page: window.location.pathname,
                                            action_intent: "load-episode",
                                            action_type: "iframe-api"
                                        }));
                                        break;
                                    default:
                                        return
                                }
                            };
                            return window.addEventListener("message", a), i.current || (window.parent && window.parent.postMessage({
                                type: c.READY
                            }, "*"), i.current = !0), () => {
                                window.removeEventListener("message", a)
                            }
                        }, [e, t, n, i]), (0, l.useEffect)(() => (function(e) {
                            let t = !1,
                                n = null;
                            if (window.parent && e) {
                                let i = e => {
                                        if (e.data) {
                                            let {
                                                isPaused: i,
                                                isBuffering: a,
                                                duration: r,
                                                positionAsOfTimestamp: s,
                                                hasContext: o,
                                                context: l
                                            } = e.data;
                                            window.parent.postMessage({
                                                type: c.PLAYBACK_UPDATE,
                                                payload: {
                                                    isPaused: i,
                                                    isBuffering: a,
                                                    duration: r,
                                                    position: s,
                                                    playingURI: l.uri
                                                }
                                            }, "*"), o && !t && (window.parent.postMessage({
                                                type: c.PLAYBACK_STARTED,
                                                payload: {
                                                    playingURI: l.uri
                                                }
                                            }, "*"), t = !0, n = l.uri), (o || i) && n === l.uri || (t = !1, n = l.uri)
                                        }
                                    },
                                    a = e => {
                                        var t = e.data;
                                        if (window.parent) {
                                            let e = {
                                                code: u.PlaybackError,
                                                message: "".concat(t.code, ": ").concat(t.message),
                                                recoverable: t.type === v.Yq.TRANSIENT
                                            };
                                            window.parent.postMessage({
                                                type: c.ERROR,
                                                payload: e
                                            }, "*")
                                        }
                                    };
                                return e.getEvents().addListener(h.gd.UPDATE, i).addListener(h.gd.ERROR, a), () => {
                                    e.getEvents().removeListener(h.gd.UPDATE, i).removeListener(h.gd.ERROR, a)
                                }
                            }
                            return () => {}
                        })(e), [e])
                    }(S, g), (0, a.jsx)(d.Kq, {
                        store: g,
                        serverState: g.getState(),
                        children: (0, a.jsx)(B.Z.Provider, {
                            value: x,
                            children: (0, a.jsx)(o.OW.Provider, {
                                value: C,
                                children: (0, a.jsx)(o.YO, {
                                    value: n.locale,
                                    children: (0, a.jsx)(ee.Provider, {
                                        value: E,
                                        children: (0, a.jsx)($.v, {
                                            reduxStore: g,
                                            playerAPI: S,
                                            children: (0, a.jsxs)(s.K, {
                                                children: [(0, a.jsx)("base", {
                                                    target: i.settings.isMobile ? "_top" : "_blank"
                                                }), (0, a.jsx)(r.mL, {
                                                    styles: eL.E3
                                                }), (0, a.jsx)(et.G, {
                                                    children: t
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }
        },
        36766: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => h
            });
            var i = n(5640),
                a = n(83662),
                r = n(23910),
                s = n(46001),
                o = n.n(s);
            n(50148);
            var l = n(7113),
                d = n(97427),
                u = n(86637),
                c = n(93269);
            let p = e => {
                let {
                    className: t,
                    isPreview: n,
                    isAudiobook: a,
                    isTrailer: s
                } = e, o = (0, r.kj)(), l = "";
                return n && !a ? l = o("embed_preview", "Preview", "Text on a preview tag") : s && (l = o("track-trailer", "Trailer", "Text on a trailer tag"), a && (l = o("audiobook.page.sample", "Sample", "Text on a sample tag"))), (0, i.jsx)(c.v, {
                    className: t,
                    text: l
                })
            };
            var m = n(97073),
                _ = n.n(m);
            let v = e => {
                    let {
                        className: t,
                        isPreview: n,
                        isExplicit: s,
                        isAudiobook: l,
                        isTrailer: d
                    } = e, c = (0, r.kj)();
                    return (0, i.jsxs)(a.b, {
                        condensedAll: !0,
                        className: o()(_().tagList, t),
                        "aria-label": c("spe.tags", "Tags", 'Accessibility label for a list of tags such as "Explicit" and "Preview"'),
                        children: [(0, i.jsx)(p, {
                            isAudiobook: l,
                            isTrailer: d,
                            isPreview: n,
                            className: o()(_().tag, {
                                [_().hidden]: !(n || d)
                            })
                        }), (0, i.jsx)(u.f, {
                            className: o()(_().tag, {
                                [_().hidden]: !s
                            })
                        })]
                    })
                },
                h = () => {
                    let e = (0, l.d4)(e => {
                            var t, n;
                            return null != (n = null == (t = e.data.entity) ? void 0 : t.isExplicit) && n
                        }),
                        t = (0, l.d4)(e => e.machineState.playbackMode),
                        n = (0, l.d4)(e => {
                            var t, n;
                            return null != (n = null == (t = e.data.entity) ? void 0 : t.isAudiobook) && n
                        }),
                        a = (0, l.d4)(e => {
                            var t, n;
                            return null != (n = null == (t = e.data.entity) ? void 0 : t.isTrailer) && n
                        }),
                        r = t === d.L.PREVIEW;
                    return e || a || n || r ? (0, i.jsx)(v, {
                        isPreview: r,
                        isExplicit: e,
                        isAudiobook: n,
                        isTrailer: a,
                        className: _().condensedTags
                    }) : null
                }
        },
        36832: (e, t, n) => {
            "use strict";
            n.d(t, {
                pg: () => u,
                O$: () => c,
                aG: () => m
            });
            var i = n(77228),
                a = n(50148),
                r = n(7113),
                s = n(97912),
                o = n(44902),
                l = n(72983);
            let d = e => {
                switch (e) {
                    case "episode":
                    case "track":
                        return !1;
                    default:
                        return !0
                }
            };
            var u = function(e) {
                return e.ADD_TO_LIBRARY = "1", e
            }({});
            let c = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "embed-player-p",
                        i = new URL("undefined" != typeof location && location.href ? location.href : "https://open.spotify.com");
                    e.searchParams.has("utm_source") || e.searchParams.set("utm_source", n), e.searchParams.has("utm_medium") || e.searchParams.set("utm_medium", t ? "mobile" : "desktop");
                    let a = i.searchParams.get("utm_campaign");
                    a && e.searchParams.set("utm_campaign", a);
                    let r = i.searchParams.get("si");
                    return r && e.searchParams.set("si", r), e
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "embed-player-p",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    return (null == i ? void 0 : i.playbackResumeSeconds) && e.searchParams.set("t", i.playbackResumeSeconds.toString()), (null == i ? void 0 : i.intent) && "1" === i.intent && e.searchParams.set("intent", "1"), c(e, n, t)
                };

            function m(e) {
                var t;
                let {
                    productName: n,
                    intent: u
                } = e, {
                    playbackState: c
                } = (0, a.useContext)(o.T), m = (0, r.d4)(e => {
                    let {
                        data: t
                    } = e;
                    return t.entity
                }), _ = (0, r.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return d(t.entityContext)
                }), v = (0, r.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.isMobile
                }), h = Math.floor((null != (t = (0, l.s)(c)) ? t : 0) / 1e3), [y, k] = (0, a.useState)({
                    selectedEntity: "",
                    compositeEntity: "",
                    embeddedEntity: "",
                    cta: ""
                }), f = null == m ? void 0 : m.relatedEntityUri, b = (null == m ? void 0 : m.isAudiobook) ? f : null == m ? void 0 : m.uri;
                return (0, a.useEffect)(() => {
                    let e = e => {
                            var t;
                            return null != (t = e ? (0, i.o_h)(e) : null) ? t : void 0
                        },
                        t = {
                            compositeEntity: {
                                deepLink: p((0, s.jT)(e(f), !1), n, v, {
                                    intent: u
                                }).toString(),
                                storeLink: p((0, s.KY)(e(f), !1), n, v, {
                                    intent: u
                                }).toString()
                            },
                            selectedEntity: {
                                deepLink: p((0, s.jT)(e(b), !1), n, v, {
                                    playbackResumeSeconds: h,
                                    intent: u
                                }).toString(),
                                storeLink: p((0, s.KY)(e(b), !1), n, v, {
                                    playbackResumeSeconds: h,
                                    intent: u
                                }).toString()
                            }
                        },
                        a = _ ? t.compositeEntity : t.selectedEntity;
                    k({
                        selectedEntity: t.selectedEntity.deepLink,
                        compositeEntity: t.compositeEntity.deepLink,
                        embeddedEntity: a.deepLink,
                        cta: a.storeLink
                    })
                }, [n, _, h, v, u, b, f]), y
            }
        },
        38015: (e, t, n) => {
            "use strict";
            let i;
            n.d(t, {
                n: () => k
            });
            var a = n(82536),
                r = n(75733),
                s = n(5131),
                o = n(93629),
                l = n(75410),
                d = n.n(l),
                u = n(83331),
                c = n(57953);
            let p = n.n(c)()(u.fetch);
            async function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4,
                    i = new(d()),
                    r = i.signal,
                    l = setTimeout(() => i.abort(), n);
                return (t && void 0 !== t.retries && t.retries > 0 ? p : (0, u.fetch))(e, (0, o._)((0, a._)({}, t), {
                    signal: r
                })).then(e => (clearTimeout(l), e)).catch(i => {
                    if ("AbortError" === i.name) {
                        var a;
                        throw new s.JO({
                            timeout: n,
                            url: e,
                            method: null != (a = null == t ? void 0 : t.method) ? a : "get"
                        })
                    }
                    throw clearTimeout(l), i
                })
            }
            class _ {
                withQueryParameters(e) {
                    this.queryParameters = e
                }
                withResponseType(e) {
                    this.responseType = e
                }
                withPostData(e) {
                    this.postData = e
                }
                withRetries(e) {
                    let {
                        retries: t,
                        retryOn: n,
                        retryDelay: i
                    } = e;
                    this._retryOptions = {
                        retries: t,
                        retryDelay: i,
                        retryOn: n
                    }
                }
                addHeader(e, t) {
                    return this._headers[e] = t, this
                }
                includeCredentials() {
                    return this._includeCredentials = !0, this
                }
                async send() {
                    let e;
                    if (this.postData) {
                        var t;
                        e = (null == (t = this._headers["Content-Type"]) ? void 0 : t.startsWith("application/json;charset=UTF-8")) ? JSON.stringify(this.postData) : this.postData
                    }
                    let n = new URLSearchParams(this.queryParameters).toString();
                    return m("".concat(this.url).concat(n ? "?".concat(n) : ""), (0, a._)({
                        method: this.method,
                        body: e,
                        credentials: this._includeCredentials ? "include" : void 0,
                        headers: (0, a._)({
                            "Content-Type": "text" === this.responseType ? "text/plain" : "application/json"
                        }, this._headers)
                    }, this._retryOptions)).then(async e => {
                        if (!e.ok) {
                            let t = s.O.fromResponse(e, this.method || "GET");
                            throw (0, r.oy)(t, new URL(this.url).hostname), t
                        }
                        return {
                            body: "text" === this.responseType ? await e.text() : await e.json(),
                            status: e.status
                        }
                    }).catch(e => {
                        throw e
                    })
                }
                constructor(e, t) {
                    return this.method = e, this.url = t, this.postData = null, this.queryParameters = void 0, this.responseType = "json", this._retryOptions = null, this._headers = {}, this._includeCredentials = !1, this
                }
            }
            class v {
                static setRequestImplementation(e) {
                    i = e
                }
                getRequestImplementation() {
                    return i
                }
                set accessToken(e) {
                    this._accessToken = e
                }
                get market() {
                    return this._market
                }
                set market(e) {
                    this._market = e
                }
                get locale() {
                    return this._locale
                }
                set locale(e) {
                    this._locale = e
                }
                get globalRequestHeaders() {
                    return this._globalRequestHeaders
                }
                set globalRequestHeaders(e) {
                    this._globalRequestHeaders = e
                }
                get startTimestamp() {
                    return this._startTimestamp
                }
                get host() {
                    return this._host
                }
                get method() {
                    return this._method
                }
                get endpointIdentifier() {
                    return this._endpointIdentifier
                }
                withHost(e) {
                    return this._host = e, this
                }
                withPath(e) {
                    return this.path = e, this
                }
                withResponseType(e) {
                    return this.responseType = e, this
                }
                withEndpointIdentifier(e) {
                    return this._endpointIdentifier = e, this
                }
                withQueryParameters(e) {
                    return this.queryParameters = e, this
                }
                withBody(e) {
                    return this.body = e, this
                }
                withMethod(e) {
                    return this._method = e, this
                }
                withRetries(e) {
                    let {
                        retries: t,
                        retryOn: n,
                        retryDelay: i
                    } = e;
                    return this._retryCount = t, n && (this._retryStatusCodes = n), i && (this._retryDelay = i), this
                }
                withoutMarket() {
                    return this._shouldSendMarket = !1, this
                }
                withoutGlobalHeaders() {
                    return this._shouldSendGlobalHeaders = !1, this
                }
                withoutAuthorization() {
                    return this._shouldSendAuthorization = !1, this
                }
                withLocale(e) {
                    return this._shouldSendLocale = !0, e && (this._locale = e), this
                }
                withJsonContentType() {
                    return this.jsonContentType = !0, this
                }
                withHeaders(e) {
                    return this._headers = e, this
                }
                withCredentials() {
                    return this._includeCredentials = !0, this
                }
                onBeforeSend(e) {}
                onAfterSend(e) {}
                async send() {
                    let e = new i(this.method, "".concat(this._host).concat(this.path));
                    this._shouldSendMarket && this.market && (this.queryParameters = (0, o._)((0, a._)({}, this.queryParameters), {
                        market: this.market
                    })), this._shouldSendLocale && this.locale && (this.queryParameters = (0, o._)((0, a._)({}, this.queryParameters), {
                        locale: this.locale
                    })), this.locale && e.addHeader("Accept-Language", this.locale), this._retryCount && e.withRetries({
                        retries: this._retryCount,
                        retryOn: this._retryStatusCodes,
                        retryDelay: this._retryDelay
                    }), e.withQueryParameters(this.queryParameters), e.withResponseType(this.responseType), this._shouldSendAuthorization && this._accessToken && e.addHeader("Authorization", "Bearer ".concat(this._accessToken)), e.addHeader("Accept", "application/json"), this._includeCredentials && e.includeCredentials(), this._shouldSendGlobalHeaders && this._globalRequestHeaders.length > 0 && this._globalRequestHeaders.forEach(t => {
                        let [n, i] = t;
                        e.addHeader(n, i)
                    });
                    for (let t = 0; t < this._headers.length; t++) {
                        let n = this._headers[t];
                        e.addHeader(n.key, n.value)
                    }
                    this.jsonContentType && e.addHeader("Content-Type", "application/json;charset=UTF-8"), this.body && e.withPostData(this.body);
                    try {
                        this.onBeforeSend(e)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    return this._startTimestamp = Date.now(), e.send().then(e => (this.onAfterSend(), e)).catch(e => {
                        throw this.onAfterSend(e), e
                    })
                }
                constructor() {
                    this._accessToken = null, this._market = "", this._headers = [], this._globalRequestHeaders = [], this._shouldSendMarket = !0, this._shouldSendGlobalHeaders = !0, this._locale = null, this._retryStatusCodes = [503], this._retryDelay = 1e3, this._shouldSendLocale = !1, this._shouldSendAuthorization = !0, this._host = "", this.path = "", this.responseType = "json", this.queryParameters = void 0, this._method = "GET", this.jsonContentType = !1, this.body = null, this._endpointIdentifier = null, this._startTimestamp = null, this._includeCredentials = !1
                }
            }
            class h {
                get accessToken() {
                    return this._accessToken
                }
                set accessToken(e) {
                    this._accessToken = e
                }
                get globalRequestHeaders() {
                    return this._globalRequestHeaders
                }
                set globalRequestHeaders(e) {
                    this._globalRequestHeaders = e
                }
                get market() {
                    return this._market
                }
                set market(e) {
                    this._market = e
                }
                get locale() {
                    return this._locale
                }
                set locale(e) {
                    this._locale = e
                }
                resetPendingRequests() {}
                build() {
                    v.setRequestImplementation(this._RequestImplementation);
                    let e = new v;
                    return e.accessToken = this._accessToken, e.market = this.market, e.locale = this.locale, e.globalRequestHeaders = this.globalRequestHeaders, e
                }
                constructor(e) {
                    this._accessToken = null, this._market = "", this._locale = "", this._globalRequestHeaders = [], this._RequestImplementation = e
                }
            }
            let y = null;
            class k {
                static setSession(e) {
                    if (!e) return;
                    let {
                        accessToken: t
                    } = e, n = this.getInstance();
                    n.accessToken = t, t || n.resetPendingRequests()
                }
                static setLocale(e) {
                    this.getInstance().locale = e
                }
                static setGlobalRequestHeaders(e) {
                    this.getInstance().globalRequestHeaders = e
                }
                static setMarket(e) {
                    this.getInstance().market = e
                }
                static resetInstance() {
                    y = null
                }
                static getInstance() {
                    return y || (y = this.createNew()), y
                }
                static createNew() {
                    return new h(_)
                }
            }
        },
        39353: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => d
            });
            var i = n(50148),
                a = n(7113),
                r = n(69136),
                s = n(21521),
                o = n(23740),
                l = n(97427);

            function d() {
                let e = (0, o.j)(),
                    t = (0, a.d4)(e => e.machineState.playbackMode),
                    n = (0, i.useCallback)(() => "ontouchstart" in document.documentElement ? "touchstart" : "mouseover", []),
                    d = (0, i.useCallback)(() => {
                        document.removeEventListener(n(), d), e((0, s.n)()), e((0, r.d)({
                            action_type: "interacted",
                            action_intent: n()
                        }))
                    }, [e, n]);
                (0, i.useEffect)(() => (t && t !== l.L.UNKNOWN && (e((0, s.P)()), document.addEventListener(n(), d)), () => {
                    document.removeEventListener(n(), d)
                }), [e, d, t, n])
            }
        },
        41124: e => {
            e.exports = {
                title: "TitleAndSubtitle_title__Nwyku",
                subtitle: "TitleAndSubtitle_subtitle__P1cxq",
                wrapper: "TitleAndSubtitle_wrapper__xndXC",
                separator: "TitleAndSubtitle_separator__4WdMW"
            }
        },
        44902: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => s,
                v: () => o
            });
            var i = n(5640),
                a = n(50148),
                r = n(83405);
            let s = (0, a.createContext)({
                    playbackState: null,
                    triggerPlaybackOperation: () => {}
                }),
                o = e => {
                    let {
                        children: t,
                        reduxStore: n,
                        playerAPI: a
                    } = e, {
                        playbackState: o,
                        triggerPlaybackOperation: l
                    } = (0, r.N)(a, n);
                    return (0, i.jsx)(s.Provider, {
                        value: {
                            playbackState: o,
                            triggerPlaybackOperation: l
                        },
                        children: t
                    })
                }
        },
        45303: e => {
            e.exports = {
                visibleOnlyToScreenReader: "ScreenReaderInput_visibleOnlyToScreenReader__TVvYo"
            }
        },
        48952: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var i = n(5640),
                a = n(54325),
                r = n(50148),
                s = n(12292),
                o = n(26776),
                l = n.n(o);
            let d = e => e > 550 ? "xxlarge" : "medium",
                u = e => {
                    let {
                        title: t,
                        description: n,
                        links: o
                    } = e, [u, c] = (0, r.useState)("large"), {
                        height: p
                    } = (0, r.useContext)(s.k);
                    return (0, r.useEffect)(() => {
                        p && c(d(p))
                    }, [p]), (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)("div", {
                            className: l().wrapper,
                            children: [(0, i.jsx)("div", {
                                className: l().icon,
                                children: (0, i.jsx)(a.D, {
                                    size: u
                                })
                            }), (0, i.jsxs)("div", {
                                className: l().content,
                                children: [(0, i.jsx)("h1", {
                                    className: l().title,
                                    children: t
                                }), (0, i.jsx)("p", {
                                    className: l().description,
                                    children: n
                                }), (0, i.jsx)("div", {
                                    className: l().links,
                                    children: (e => {
                                        let t = e.map(e => (0, i.jsx)("a", {
                                            target: "_blank",
                                            href: e.href,
                                            className: e.isPrimaryStyle ? l().primary : l().secondary,
                                            children: e.title
                                        }, e.href));
                                        return (0, i.jsx)(i.Fragment, {
                                            children: t.map(e => e)
                                        })
                                    })(o)
                                })]
                            })]
                        })
                    })
                }
        },
        50713: (e, t, n) => {
            var i = {
                "./af/strings.json": [48404, 8404],
                "./am/strings.json": [78181, 8181],
                "./ar-EG/strings.json": [91139, 1139],
                "./ar-MA/strings.json": [25749, 5749],
                "./ar-SA/strings.json": [63543, 3543],
                "./ar/strings.json": [23768, 3768],
                "./az/strings.json": [50016, 16],
                "./bg/strings.json": [50464, 464],
                "./bho/strings.json": [89870, 9870],
                "./bn/strings.json": [42579, 2579],
                "./bs/strings.json": [66140, 6140],
                "./ca/strings.json": [51735, 1735],
                "./cs/strings.json": [25365, 5365],
                "./da/strings.json": [8032, 8032],
                "./de/strings.json": [14028, 4028],
                "./el/strings.json": [29886, 9886],
                "./en-GB/strings.json": [34734, 4734],
                "./es-419/strings.json": [63436, 3436],
                "./es-AR/strings.json": [68701, 8701],
                "./es-MX/strings.json": [11499, 1499],
                "./es/strings.json": [99855, 9855],
                "./et/strings.json": [24326, 4326],
                "./eu/strings.json": [86577, 6577],
                "./fa/strings.json": [34438, 4438],
                "./fi/strings.json": [55278, 5278],
                "./fil/strings.json": [3014, 3014],
                "./fr-CA/strings.json": [36542, 6542],
                "./fr/strings.json": [33555, 3555],
                "./gl/strings.json": [54668, 4668],
                "./gu/strings.json": [76367, 6367],
                "./he/strings.json": [71056, 1056],
                "./hi/strings.json": [63156, 3156],
                "./hr/strings.json": [88949, 8949],
                "./hu/strings.json": [64768, 4768],
                "./id/strings.json": [82618, 2618],
                "./is/strings.json": [16395, 6395],
                "./it/strings.json": [12746, 2746],
                "./ja/strings.json": [35954, 5954],
                "./kn/strings.json": [94894, 4894],
                "./ko/strings.json": [64313, 4313],
                "./lt/strings.json": [14607, 4607],
                "./lv/strings.json": [99485, 9485],
                "./mk/strings.json": [74319, 4319],
                "./ml/strings.json": [49190, 9190],
                "./mr/strings.json": [68972, 8972],
                "./ms/strings.json": [61927, 1927],
                "./nb/strings.json": [79323, 9323],
                "./ne/strings.json": [49658, 9658],
                "./nl/strings.json": [33997, 3997],
                "./or/strings.json": [64094, 4094],
                "./pa-IN/strings.json": [92520, 2520],
                "./pa-PK/strings.json": [19494, 9494],
                "./pl/strings.json": [8811, 8811],
                "./pt-BR/strings.json": [6974, 6974],
                "./pt-PT/strings.json": [88174, 8174],
                "./ro/strings.json": [24808, 4808],
                "./ru/strings.json": [58942, 8942],
                "./sk/strings.json": [23277, 3277],
                "./sl/strings.json": [22776, 2776],
                "./sr/strings.json": [96234, 6234],
                "./sv/strings.json": [10094, 94],
                "./sw/strings.json": [63161, 3161],
                "./ta/strings.json": [60528, 528],
                "./te/strings.json": [31708, 1708],
                "./th/strings.json": [33507, 3507],
                "./tr/strings.json": [5737, 5737],
                "./uk/strings.json": [70103, 103],
                "./ur/strings.json": [2340, 2340],
                "./vi/strings.json": [62494, 2494],
                "./zh-CN/strings.json": [82013, 2013],
                "./zh-HK/strings.json": [84769, 4769],
                "./zh-TW/strings.json": [73769, 3769],
                "./zu/strings.json": [78070, 8070]
            };

            function a(e) {
                if (!n.o(i, e)) return Promise.resolve().then(() => {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                });
                var t = i[e],
                    a = t[0];
                return n.e(t[1]).then(() => n.t(a, 19))
            }
            a.keys = () => Object.keys(i), a.id = 50713, e.exports = a
        },
        51128: e => {
            e.exports = {
                closeButton: "CloseButton_closeButton__FDeuo"
            }
        },
        53002: e => {
            e.exports = {
                clicked: "CopyLink_clicked__O9BXe",
                "out-in": "CopyLink_out-in__HDSDy",
                unclicked: "CopyLink_unclicked__dYp_M",
                "in-out": "CopyLink_in-out__3Q56J"
            }
        },
        54692: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => i
            });
            let i = e => {
                let {
                    url: t,
                    newWindow: n = !0
                } = e;
                window.open(t, n ? "_blank" : "_top")
            }
        },
        55610: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => S
            });
            var i = n(5640),
                a = n(4896),
                r = n(65416),
                s = n(23910),
                o = n(46001),
                l = n.n(o),
                d = n(50148),
                u = n(7113),
                c = n(6424),
                p = n(38015),
                m = n(77228);
            let _ = "".concat("https://spclient.wg.spotify.com", "/url-dispenser/v1"),
                v = async (e, t, n) => {
                    let {
                        utmParameters: i,
                        customData: a,
                        linkPreview: r
                    } = n, s = await e.build().withHost(_).withPath("/generate-url").withMethod("POST").withJsonContentType().withoutMarket().withEndpointIdentifier("/v1/generate-url").withBody({
                        spotify_uri: t,
                        custom_data: a,
                        link_preview: r,
                        utm_parameters: i
                    }).send();
                    if (201 === s.status) return s.body;
                    throw Error("Failed to get short link for uri ".concat(t))
                },
                h = async (e, t) => {
                    var n;
                    return null != (n = (await v(e, t, {}).catch(() => {
                        var e;
                        return {
                            shareable_url: null == (e = (0, m.o_h)(t)) ? void 0 : e.toURL()
                        }
                    })).shareable_url) ? n : null
                };
            var y = n(69136),
                k = n(23740),
                f = n(62909);
            async function b(e) {
                if ("clipboard" in navigator && navigator.clipboard) try {
                    if ("string" == typeof e) return await new Promise((t, n) => setTimeout(() => {
                        navigator.clipboard.writeText(e).then(t).catch(n)
                    }, 0));
                    let t = await e;
                    return await navigator.clipboard.writeText(t)
                } catch (t) {
                    let e = t instanceof Error ? t.message : String(t);
                    throw Error("Failed to copy to clipboard using Clipboard API. ".concat(e))
                }
                throw Error("Clipboard API is not available")
            }
            var g = n(53002),
                T = n.n(g),
                E = n(20063);
            let w = (e, t) => t ? e("embed_success_share_link", "Copied to clipboard", "Text on a button when an entity link was copied to a clipboard") : e("spe.copy_link", "Copy link", "Text on a button to copy an entity link to the clipboard"),
                S = e => {
                    let {
                        handleStandaloneCopyItem: t,
                        showFallbackCopy: n = !1
                    } = e, o = (0, u.d4)(f.M0), [m, _] = (0, d.useState)(!1), [v, g] = (0, d.useState)(!1), [S, N] = (0, d.useState)(null), x = (0, k.j)(), {
                        isCompactLegacy: A
                    } = (0, c.o)(), C = (0, s.kj)(), P = (0, u.d4)(e => e.settings.isVideoEmbed), j = w(C, m), L = async e => {
                        if (n) setTimeout(() => {
                            document.execCommand("copy")
                        }, 0), _(!0);
                        else try {
                            await b(e), _(!0)
                        } catch (n) {
                            P && t && t(e)
                        }
                        x((0, y.d)({
                            action_type: "click",
                            action_intent: "clipboard-copy"
                        }))
                    }, O = async () => {
                        if (!m && o)
                            if (S) await L(S);
                            else {
                                let e = await h(p.n.getInstance(), o);
                                e && await L(e), N(e)
                            }
                    };
                    return ((0, d.useEffect)(() => {
                        m && setTimeout(() => {
                            _(!1), g(!0)
                        }, 2e3)
                    }, [m]), (0, d.useEffect)(() => {
                        N(null)
                    }, [o]), n) ? (0, i.jsx)(a.H, {
                        disabled: !o,
                        onClick: O,
                        condensedAll: !0,
                        semanticColor: "textBase",
                        className: l()({
                            [T().clicked]: m,
                            [T().unclicked]: v
                        }),
                        "data-testid": "copy-link-fallback-button",
                        children: j
                    }) : (0, i.jsx)(E.D, {
                        disabled: !o,
                        onClick: O,
                        icon: A ? void 0 : r.y,
                        variant: "bodyMedium",
                        clickedAnimation: m,
                        testId: "copy-link-button",
                        children: j
                    })
                }
        },
        56244: e => {
            e.exports = {
                wrapper: "OverflowMenuBase_wrapper__CyfQs",
                visible: "OverflowMenuBase_visible__bdlfX",
                menuContent: "OverflowMenuBase_menuContent__Kcicz",
                closeButton: "OverflowMenuBase_closeButton__pATy_",
                policies: "OverflowMenuBase_policies__r_Fbu",
                stickDown: "OverflowMenuBase_stickDown__xfZSA",
                link: "OverflowMenuBase_link__8OQFz",
                separator: "OverflowMenuBase_separator__l_I5t",
                adaptToOverflowMenu: "OverflowMenuBase_adaptToOverflowMenu__YeDTC"
            }
        },
        57223: (e, t, n) => {
            "use strict";
            n.d(t, {
                eL: () => r,
                kD: () => s,
                v7: () => a
            });
            var i = n(24862);

            function a() {
                return {
                    type: i.tx
                }
            }

            function r() {
                return {
                    type: i.iG
                }
            }

            function s(e) {
                return {
                    type: i.Fv,
                    productName: e
                }
            }
        },
        58914: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => a
            });
            var i = n(7113);
            let a = () => !!(0, i.d4)(e => {
                var t;
                return null == (t = e.data.entity) ? void 0 : t.visualIdentity
            })
        },
        60746: e => {
            e.exports = {
                followButtonWrapper: "FollowButton_followButtonWrapper__uMaPG",
                hideBorder: "FollowButton_hideBorder__OdJB_",
                transformNone: "FollowButton_transformNone__FHnTJ",
                followButtonText: "FollowButton_followButtonText__axhEd",
                resize: "FollowButton_resize___vYhh"
            }
        },
        62909: (e, t, n) => {
            "use strict";
            n.d(t, {
                BT: () => a,
                M0: () => s,
                o2: () => r,
                yY: () => o
            });
            var i = n(77228);
            let a = e => {
                    let {
                        data: {
                            entity: t
                        },
                        settings: {
                            isMixedPlaylistV2: n = !1
                        }
                    } = e;
                    return n ? (null == t ? void 0 : t.type) === i.NQG.EPISODE && !(null == t ? void 0 : t.isAudiobook) : (null == t ? void 0 : t.type) === i.NQG.EPISODE
                },
                r = e => {
                    let {
                        data: {
                            entity: t
                        }
                    } = e;
                    return (null == t ? void 0 : t.isAudiobook) === !0 && !t.isRestrictedContent
                },
                s = e => e.data.embeded_entity_uri,
                o = e => {
                    var t;
                    let {
                        data: {
                            defaultAudioFileObject: n
                        }
                    } = e;
                    return !!n.video && (null == (t = n.video[0]) ? void 0 : t.requiresDRM)
                }
        },
        64533: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => ea
            });
            var i = n(5640),
                a = n(46001),
                r = n.n(a),
                s = n(38600),
                o = n(50148),
                l = n(7113),
                d = n(80068),
                u = n(10262);
            let c = () => {
                let [e, t] = (0, o.useState)(0);
                return {
                    skipCount: e,
                    incrementSkipCounter: (0, o.useCallback)(() => {
                        t(e + 1)
                    }, [e]),
                    resetSkipCounter: (0, o.useCallback)(() => {
                        t(0)
                    }, [])
                }
            };
            var p = n(97427),
                m = n(44902),
                _ = n(72983),
                v = n(62909);
            let h = () => {
                let e = (0, l.d4)(e => {
                        let {
                            machineState: t
                        } = e;
                        return t.playbackMode
                    }) === p.L.PREVIEW,
                    {
                        playbackState: t
                    } = (0, o.useContext)(m.T),
                    n = (0, _.s)(t),
                    i = null == t ? void 0 : t.isPaused,
                    a = null == t ? void 0 : t.duration,
                    r = null == t ? void 0 : t.hasContext,
                    s = (0, l.d4)(e => {
                        let {
                            machineState: t
                        } = e;
                        return t.currentPreviewTrackIndex
                    }),
                    d = (0, l.d4)(e => {
                        var t;
                        let {
                            data: n
                        } = e;
                        return !!(null == (t = n.entity) ? void 0 : t.isAudiobook)
                    }),
                    h = (0, l.d4)(v.BT),
                    y = (0, u.c)(),
                    [k, f] = (0, o.useState)(!1),
                    [b, g] = (0, o.useState)(!1),
                    [T, E] = (0, o.useState)(s + 1),
                    {
                        skipCount: w,
                        incrementSkipCounter: S,
                        resetSkipCounter: N
                    } = c();
                return (0, o.useEffect)(() => {
                    (s === T || s === T - 2) && (E(() => T + 1), S()), E(() => s + 1)
                }, [s, S, T]), (0, o.useEffect)(() => {
                    d && a && (r && null !== n && (n > 6e4 && w < 1 && (f(!0), S()), n > 0 && i && f(!0)), n === a && (f(!0), N())), r && null !== n && a && (e ? (n > 2 * a / 3 || n > 0 && i || 3 === w) && b !== y && (g(y), f(!0), N()) : h && (n > a / 2 || n > 0 && i) && b !== y && (g(y), f(!0)))
                }, [n, a, e, i, y, r, b, w, N, d, S, h]), {
                    showUpsell: k,
                    setShowUpsell: f
                }
            };
            var y = n(69136),
                k = n(23740),
                f = n(78344),
                b = n(31099),
                g = n(23332),
                T = n(20532),
                E = n(19676),
                w = n.n(E);
            let S = () => (0, i.jsxs)("div", {
                className: w().playerControlsWrapper,
                children: [(0, i.jsx)("div", {
                    className: w().overflowMenuButtonWrapper,
                    children: (0, i.jsx)(g.G, {})
                }), (0, i.jsx)("div", {
                    className: w().previewPlayPauseWrapper,
                    children: (0, i.jsx)(T.D, {})
                })]
            });
            var N = n(79597),
                x = n(36766),
                A = n(22076),
                C = n(1837),
                P = n(70525),
                j = n.n(P);
            let L = () => (0, i.jsx)("div", {
                className: j().backgroundCoverArt
            });
            var O = n(48148),
                R = n(45543),
                I = n(23910),
                D = n(36832),
                B = n(12292),
                M = n(84434);
            let U = (e, t) => e < M.ht.landscape && t < M.OM.small || e < M.ht.large ? "small" : "medium";
            var F = n(54692),
                V = n(69599),
                G = n.n(V);
            let W = () => {
                    let e = (0, D.aG)({
                            productName: "embed_player_p"
                        }),
                        t = (0, I.kj)(),
                        {
                            width: n,
                            height: a
                        } = o.useContext(B.k),
                        r = (0, k.j)(),
                        s = async () => {
                            r((0, y.d)({
                                action_type: "click",
                                action_intent: "deeplink",
                                action_item_id: "get-spotify"
                            })), (0, F.J)({
                                url: e.embeddedEntity
                            })
                        };
                    return (0, i.jsx)("div", {
                        className: G().getSpotifyButton,
                        children: (0, i.jsx)(O.$, {
                            size: U(a, n),
                            colorSet: "invertedLight",
                            onClick: s,
                            children: (0, i.jsx)(R.E, {
                                className: G().buttonText,
                                variant: "titleSmall",
                                children: t("get_spotify", "Get Spotify", "A button the user can press to download / get the Spotify application")
                            })
                        })
                    })
                },
                q = e => {
                    try {
                        let t = new URL(e);
                        return t.searchParams.set("nd", "1"), t.pathname = t.pathname.startsWith("/__noul__") ? t.pathname : "__noul__".concat(t.pathname), t.toString()
                    } catch (e) {
                        throw Error("Invalid URL")
                    }
                },
                H = () => {
                    let e = (0, D.aG)({
                            productName: "embed_player_p"
                        }),
                        t = (0, l.d4)(e => e.settings.isMobile),
                        n = (0, I.kj)(),
                        {
                            width: a,
                            height: r
                        } = o.useContext(B.k),
                        s = (0, k.j)();
                    return (0, i.jsx)("div", {
                        className: G().getSpotifyButton,
                        children: (0, i.jsx)(O.$, {
                            size: U(r, a),
                            colorSet: "invertedLight",
                            onClick: () => {
                                s((0, y.d)({
                                    action_type: "click",
                                    action_intent: "deeplink",
                                    action_item_id: "buy-this-audiobook"
                                })), (0, F.J)({
                                    url: t ? q(e.embeddedEntity) : e.embeddedEntity
                                })
                            },
                            children: (0, i.jsx)(R.E, {
                                className: G().buttonText,
                                variant: "titleSmall",
                                children: n("audiobook.embed.get-this-audiobook", "Get this audiobook", "An upsell button that a user can click to redirect them to the Spotify App and buy the book")
                            })
                        })
                    })
                };
            var Y = n(77228),
                K = n(14814);
            let Q = () => {
                let e = (0, l.d4)(e => e.data.entity),
                    t = (0, l.d4)(e => e.settings.session.isAnonymous),
                    n = (0, D.aG)({
                        productName: "embed_player_p"
                    }),
                    a = (0, I.kj)(),
                    {
                        width: r,
                        height: s
                    } = o.useContext(B.k),
                    d = (0, k.j)(),
                    [u, c] = (0, K.A)(e.relatedEntityUri),
                    p = async () => {
                        t ? (d((0, y.d)({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: "follow"
                        })), (0, F.J)({
                            url: n.compositeEntity
                        })) : (d((0, y.d)({
                            action_type: "click",
                            action_intent: (null == u ? void 0 : u[e.relatedEntityUri]) ? "unfollow" : "follow"
                        })), await c(!(null == u ? void 0 : u[e.relatedEntityUri])))
                    };
                return (0, i.jsx)("div", {
                    className: G().getSpotifyButton,
                    children: (0, i.jsx)(O.$, {
                        size: U(s, r),
                        colorSet: "invertedLight",
                        onClick: p,
                        children: (0, i.jsx)(R.E, {
                            className: G().buttonText,
                            variant: "titleSmall",
                            children: (e.type === Y.NQG.EPISODE || e.type === Y.NQG.SHOW) && (null == u ? void 0 : u[e.relatedEntityUri]) ? a("following", "Following", "Button`s text that adds an item to the user`s library") : a("follow", "Follow", "Button`s text that removes an item to the user`s library")
                        })
                    })
                })
            };
            var z = n(859),
                X = n.n(z);
            let J = (e, t, n, i, a, r) => {
                    switch (e) {
                        case Y.NQG.EPISODE:
                        case Y.NQG.SHOW:
                            if (n) return t("audiobook.embed.upsell_cta", "Hooked? Take this audiobook everywhere you go, on Spotify", "Text displayed on an upsell menu after a user has listened to 60 seconds of an audiobook sample.");
                            if (i && !a) return t("spe.podcast_full_upsell_cta", "Discover even more from {podcastName}", "Text displayed after user has listened to 20 seconds of a 30 sec podcast preview.", {
                                podcastName: r
                            });
                            return t("spe.upsell_cta", "Discover even more podcasts on Spotify", "Text displayed after user has listened to 20 seconds of a 30 sec podcast preview.");
                        case Y.NQG.TRACK:
                            return t("spe.track_upsell_cta", "Listen to the full track and millions more on Spotify", "Text displayed after user has listened to 20 seconds of a 30 sec track preview.");
                        case Y.NQG.PLAYLIST:
                        default:
                            return t("spe.track_list_upsell", "Listen to these tracks & millions more on Spotify", "Text displayed after user has listened to 20 seconds of a 30 sec of track list preview.")
                    }
                },
                Z = () => {
                    let e = (0, I.kj)(),
                        t = (0, l.d4)(e => e.data.entity.type),
                        n = (0, l.d4)(t => {
                            var n;
                            return (null == (n = t.data.entity) ? void 0 : n.subtitle) || e("spe.upsell_cta", "Discover even more podcasts on Spotify", "Text displayed after user has listened to 20 seconds of a 30 sec podcast preview.")
                        }),
                        a = (0, l.d4)(e => e.data.entity.isAudiobook || !1),
                        s = (0, l.d4)(e => e.machineState.playbackMode) === p.L.PREVIEW,
                        o = (0, l.d4)(v.BT);
                    return (0, i.jsx)(R.E, {
                        variant: "titleLarge",
                        className: r()(X().text),
                        id: "dialogUpsellTitle",
                        semanticColor: "textBase",
                        children: J(t, e, a, o, s, n)
                    })
                };
            var $ = n(75403),
                ee = n.n($);
            let et = e => {
                let {
                    showUpsell: t,
                    setShowUpsell: n,
                    onClose: a
                } = e, s = (0, l.d4)(e => {
                    var t;
                    let {
                        data: n
                    } = e;
                    return null == (t = n.entity) ? void 0 : t.isAudiobook
                }), u = (0, l.d4)(e => {
                    let {
                        machineState: t
                    } = e;
                    return t.playbackMode
                }) === p.L.PREVIEW, c = (0, l.d4)(v.BT), m = (0, l.d4)(e => {
                    var t;
                    let {
                        data: n
                    } = e;
                    return !!(null == (t = n.entity) ? void 0 : t.trackList)
                }), _ = (0, o.useRef)(null);
                return (0, i.jsx)(d.A, {
                    nodeRef: _,
                    in: t,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    timeout: 200,
                    classNames: {
                        enter: ee().transition_enter,
                        enterActive: ee().transition_enterActive,
                        exit: ee().transition_exit,
                        exitActive: ee().transition_exitActive
                    },
                    children: (0, i.jsxs)("div", {
                        ref: _,
                        className: r()(ee().fullscreenWrapper, {
                            [ee().playlistContainer]: m
                        }),
                        children: [(0, i.jsxs)("div", {
                            className: ee().ctaWrapper,
                            children: [(0, i.jsx)(L, {}), (0, i.jsxs)("div", {
                                className: ee().content,
                                children: [(0, i.jsx)(Z, {}), s ? (0, i.jsx)(H, {}) : c && !u ? (0, i.jsx)(Q, {}) : (0, i.jsx)(W, {}), (0, i.jsx)("div", {
                                    className: ee().closeButton,
                                    children: (0, i.jsx)(f.J, {
                                        handleClose: () => {
                                            a(), n(!1)
                                        }
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: ee().footerWrapper,
                            children: [(0, i.jsx)("div", {
                                className: ee().coverArtWrapper,
                                children: (0, i.jsx)(b.e, {
                                    className: ee().coverArtUpsell
                                })
                            }), (0, i.jsxs)("div", {
                                className: ee().metadataWrapper,
                                children: [(0, i.jsx)(C.h, {}), (0, i.jsxs)("span", {
                                    className: ee().labelsAndSubtitle,
                                    children: [(0, i.jsx)(x.Y, {}), (0, i.jsx)(A.P, {})]
                                })]
                            }), (0, i.jsx)("div", {
                                className: ee().playerControlsWrapper,
                                children: u && !s ? (0, i.jsx)(N.l, {}) : (0, i.jsx)(S, {})
                            })]
                        })]
                    })
                })
            };
            var en = n(31119),
                ei = n.n(en);
            let ea = () => {
                let e = (0, l.d4)(e => {
                        let {
                            machineState: t
                        } = e;
                        return t.playbackMode
                    }),
                    {
                        showUpsell: t,
                        setShowUpsell: n
                    } = h(),
                    a = (0, k.j)(),
                    u = () => {
                        n(!1), a((0, y.d)({
                            action_type: "click",
                            action_intent: "close-upsell"
                        }))
                    };
                (0, o.useEffect)(() => {
                    t && a((0, y.d)({
                        action_intent: "open-upsell",
                        action_type: "view"
                    }))
                }, [a, t]);
                let c = (0, o.useRef)(null);
                return e === p.L.UNKNOWN ? null : (0, i.jsx)(d.A, {
                    nodeRef: c,
                    in: t,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    timeout: 200,
                    classNames: {
                        enter: ei().transition_enter,
                        enterActive: ei().transition_enterActive,
                        exit: ei().transition_exit,
                        exitActive: ei().transition_exitActive
                    },
                    children: (0, i.jsx)(s.FocusTrap, {
                        focusTrapOptions: {
                            initialFocus: !1,
                            onDeactivate: u,
                            checkCanFocusTrap: () => new Promise(e => {
                                c && Promise.resolve(e)
                            })
                        },
                        children: (0, i.jsx)("div", {
                            ref: c,
                            role: "dialog",
                            "aria-labelledby": "dialogUpsellTitle",
                            className: r()(ei().upsellContentContainer, "encore-layout-themes"),
                            children: (0, i.jsx)(et, {
                                showUpsell: !0,
                                setShowUpsell: n,
                                onClose: u
                            })
                        })
                    })
                })
            }
        },
        65366: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => p
            });
            var i = n(5640),
                a = n(54325),
                r = n(23910),
                s = n(7113),
                o = n(36832),
                l = n(6424),
                d = n(69136),
                u = n(23740),
                c = n(20063);
            let p = () => {
                let e = (0, r.kj)(),
                    {
                        isCompactLegacy: t
                    } = (0, l.o)(),
                    n = (0, s.d4)(e => e.settings.isVideoEmbed),
                    p = (0, u.j)(),
                    m = (0, o.aG)({
                        productName: n ? "embed_player_v" : "embed_player_p"
                    }),
                    _ = e("play_on_spotify", "Play on Spotify", "Button that plays the viewed content in the Spotify client");
                return (0, i.jsx)(c.D, {
                    ariaLabel: _,
                    icon: t ? void 0 : a.D,
                    onClick: () => {
                        p((0, d.d)({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: "play-on-spotify"
                        }))
                    },
                    href: m.embeddedEntity ? m.embeddedEntity : void 0,
                    testId: "play-on-spotify-button",
                    children: _
                })
            }
        },
        66458: e => {
            e.exports = {
                menu: "OverflowMenuAudio_menu__Z7Mj5",
                visible: "OverflowMenuAudio_visible__neisd",
                menuItem: "OverflowMenuAudio_menuItem__hhrIj"
            }
        },
        67142: e => {
            e.exports = {
                overflowMenuButton: "OverflowMenuButton_overflowMenuButton__JPKiT"
            }
        },
        68820: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => C
            });
            var i = n(5640),
                a = n(50148),
                r = n(7113),
                s = n(4551),
                o = n(95859),
                l = n(44902),
                d = n(69136),
                u = n(23740),
                c = n(77228);

            function p(e) {
                return e === c.NQG.TRACK || e === c.NQG.ALBUM || e === c.NQG.PLAYLIST || e === c.NQG.ARTIST ? 5e3 : 15e3
            }
            var m = n(23910),
                _ = n(46001),
                v = n.n(_),
                h = n(51503);
            let y = e => {
                let {
                    onStepForward: t,
                    onStepBackward: n,
                    value: i
                } = e;
                return (0, h.YQ)(e => {
                    parseFloat(e.target.value) > i ? null == t || t() : null == n || n()
                }, 100, {
                    trailing: !1,
                    leading: !0,
                    maxWait: 200
                })
            };
            var k = n(35054),
                f = n(10632),
                b = n.n(f),
                g = n(82536),
                T = n(17459),
                E = n(45303),
                w = n.n(E);

            function S(e) {
                var {
                    children: t
                } = e, n = (0, T._)(e, ["children"]);
                return (0, i.jsxs)("label", {
                    className: w().visibleOnlyToScreenReader,
                    children: [t, (0, i.jsx)("input", (0, g._)({}, n))]
                })
            }

            function N(e, t, n) {
                let i = e.current;
                if (null === i) return 0;
                let a = i.getBoundingClientRect();
                return "vertical" === n ? 1 - Math.max(0, Math.min((t.clientY - a.top) / a.height, 1)) : Math.max(0, Math.min((t.clientX - a.left) / a.width, 1))
            }
            let x = e => {
                    let {
                        progressBarRef: t,
                        onDragStart: n,
                        onDragMove: i,
                        onDragEnd: r,
                        direction: s = "horizontal"
                    } = e, [o, l] = (0, a.useState)(!1), [d, u] = (0, a.useState)(!1), [c, p] = (0, a.useState)(0), m = (0, a.useRef)(n), _ = (0, a.useRef)(i), v = (0, a.useRef)(r);
                    m.current = n, _.current = i, v.current = r;
                    let y = (0, h.YQ)(e => {
                            _.current(N(t, e, s))
                        }, 20, {
                            leading: !0,
                            maxWait: 20
                        }),
                        k = (0, a.useCallback)(e => {
                            0 === e.button && (m.current(N(t, e, s)), l(!0), document.addEventListener("pointermove", y), document.addEventListener("pointerup", e => {
                                l(!1), y.cancel(), v.current(N(t, e, s)), document.removeEventListener("pointermove", y)
                            }, {
                                once: !0
                            }))
                        }, [y, t, s]),
                        f = (0, a.useCallback)(e => {
                            p(N(t, e, s))
                        }, [t, s]);
                    return {
                        isDragging: o,
                        onPointerDown: k,
                        onPointerEnter: (0, a.useCallback)(() => {
                            u(!0), document.addEventListener("pointermove", f)
                        }, [f]),
                        onPointerLeave: (0, a.useCallback)(() => {
                            u(!1), document.removeEventListener("pointermove", f)
                        }, [f]),
                        isHovering: d,
                        hoverPercentage: c
                    }
                },
                A = e => {
                    let {
                        enabled: t,
                        max: n,
                        current: r,
                        entityType: s,
                        onDragStart: o,
                        onDragMove: l,
                        onDragEnd: d,
                        onStepBackward: u,
                        onStepForward: c
                    } = e, _ = (0, m.kj)(), h = (0, a.useRef)(null), {
                        isDragging: f,
                        onPointerDown: g,
                        onPointerEnter: T,
                        onPointerLeave: E,
                        isHovering: w,
                        hoverPercentage: N
                    } = x({
                        progressBarRef: h,
                        onDragStart: o,
                        onDragMove: l,
                        onDragEnd: d
                    }), [A, C] = (0, a.useState)(!1), P = Math.max(0, Math.min(1, (null != r ? r : 0) / (n || 1))), j = w ? null != N ? N : 0 : P, L = w && n ? n * N : 0, O = A && n ? null != r ? r : 0 + p(s) : 0, R = void 0 !== n && n > 0 && (w || A), I = t && w || f, D = y({
                        onStepForward: c,
                        onStepBackward: u,
                        value: null != r ? r : 0
                    });
                    return (0, i.jsxs)("div", {
                        ref: h,
                        onPointerDown: t ? g : void 0,
                        onPointerEnter: t ? T : void 0,
                        onPointerLeave: t ? E : void 0,
                        className: b().progressBarContainer,
                        children: [(0, i.jsx)(S, {
                            disabled: !t,
                            type: "range",
                            min: 0,
                            max: n,
                            value: null != r ? r : 0,
                            step: p(s),
                            onChange: e => (C(!0), D(e)),
                            onKeyDown: e => "Escape" === e.code && C(!1),
                            onFocus: () => C(!0),
                            onBlur: () => C(!1),
                            "aria-valuetext": "\n         ".concat((0, k.A)(null != r ? r : 0), " /\n         ").concat((0, k.A)(null != n ? n : 0), "\n        "),
                            children: _("playback-control.a11y.seek-slider-button", "Change progress", "Text read by accessibility tools explaining what the white dot on the player bar is for")
                        }), R && (0, i.jsx)("div", {
                            className: b().tooltip,
                            style: {
                                left: "".concat(100 * j, "%")
                            },
                            children: w ? (0, k.A)(L) : (0, k.A)(O)
                        }), (0, i.jsxs)("div", {
                            className: b().progressBarLineBackground,
                            children: [(0, i.jsx)("div", {
                                className: b().progressBarLineActive,
                                style: {
                                    transform: "translateX(-".concat(100 - (w ? N : 0) * 100, "%)")
                                }
                            }), (0, i.jsx)("div", {
                                "data-testid": "progress-bar-line",
                                id: "progress-bar-line",
                                style: {
                                    transform: "translateX(-".concat(100 - 100 * P, "%)")
                                },
                                className: b().progressBarLine
                            })]
                        }), (0, i.jsx)("div", {
                            "data-testid": "progress-bar-slider",
                            id: "progress-bar-slider",
                            className: v()(b().progressBarSlider, {
                                [b().visible]: I
                            }),
                            style: {
                                left: "".concat(100 * P, "%")
                            }
                        })]
                    })
                },
                C = () => {
                    var e;
                    let t = (0, r.d4)(e => e.data.entity),
                        {
                            triggerPlaybackOperation: n,
                            playbackState: c
                        } = (0, a.useContext)(l.T),
                        m = t.isPlayable && !!(null == c ? void 0 : c.hasContext),
                        {
                            metadata: _
                        } = (0, a.useMemo)(() => (0, s.O)(t), [t]),
                        v = (null == c ? void 0 : c.duration) || Number(null == _ ? void 0 : _.duration),
                        h = null == c || null == (e = c.item) ? void 0 : e.uri,
                        [y, k] = (0, a.useState)(null),
                        [f, b] = (0, a.useState)((null == c ? void 0 : c.positionAsOfTimestamp) || 0),
                        g = null !== y ? y : f,
                        T = (0, u.j)(),
                        E = e => {
                            T((0, d.d)(e))
                        };
                    (0, a.useEffect)(() => {
                        b((null == c ? void 0 : c.positionAsOfTimestamp) || 0)
                    }, [null == c ? void 0 : c.positionAsOfTimestamp]);
                    let w = e => {
                        k(e * v)
                    };
                    return (0, i.jsx)(A, {
                        onDragStart: w,
                        onDragMove: w,
                        onDragEnd: e => {
                            k(null), E({
                                action_type: "click",
                                action_intent: "seek-click",
                                item_uri: h
                            });
                            let t = e * v;
                            b(t), n((0, o.jF)(t))
                        },
                        max: v,
                        current: g,
                        enabled: m,
                        entityType: t.type,
                        onStepBackward: () => {
                            b(g - p(t.type)), n((0, o.jF)(g - p(t.type)))
                        },
                        onStepForward: () => {
                            b(g + p(t.type)), n((0, o.jF)(g + p(t.type)))
                        }
                    })
                }
        },
        69136: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => a
            });
            var i = n(23199);

            function a(e) {
                return {
                    type: i.O,
                    interactionData: e
                }
            }
        },
        69599: e => {
            e.exports = {
                getSpotifyButton: "UpsellButton_getSpotifyButton__9XE6r",
                buttonText: "UpsellButton_buttonText__L41pW"
            }
        },
        69908: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => y
            });
            var i = n(82536),
                a = n(93629),
                r = n(5640),
                s = n(45543),
                o = n(23910),
                l = n(50148),
                d = n(7113),
                u = n(4551),
                c = n(44902),
                p = n(69136),
                m = n(23740),
                _ = n(35054),
                v = n(92124),
                h = n.n(v);
            let y = () => {
                let e = (0, d.d4)(e => e.data.entity),
                    {
                        playbackState: t
                    } = (0, l.useContext)(c.T),
                    {
                        metadata: n
                    } = (0, l.useMemo)(() => (0, u.O)(e), [e]),
                    v = (null == t ? void 0 : t.duration) || Number(null == n ? void 0 : n.duration),
                    [y, k] = (0, l.useState)({
                        dragPosition: null,
                        showRemainingTime: !0
                    }),
                    f = (0, o.kj)(),
                    {
                        showRemainingTime: b,
                        dragPosition: g
                    } = y,
                    [T, E] = (0, l.useState)(f("spe.playback-control.progress-timestamp", "Progress timestamp", "Accessibility label for a numeric progress display in the currently playing track, in minutes and seconds")),
                    w = 0;
                Number.isFinite(g) ? w = g * v : (null == t ? void 0 : t.positionAsOfTimestamp) && (w = null == t ? void 0 : t.positionAsOfTimestamp);
                let S = "";
                S = (null == t ? void 0 : t.hasContext) || (null == t ? void 0 : t.isPaused) !== void 0 ? b ? (0, _.A)((w || 0) - v) : (0, _.A)(w || 0) : (0, _.A)(v), (0, l.useEffect)(() => {
                    b ? E("".concat(S, " remaining time. Toggle to elapsed.")) : E("".concat(S, " elapsed time. Toggle to remaining."))
                }, [S, b]);
                let N = S.replace(/\d/g, "0").replace(/^\d/, "-0"),
                    x = (0, m.j)();
                return (0, r.jsxs)("button", {
                    className: h().progressTimer,
                    onClick: () => {
                        k((0, a._)((0, i._)({}, y), {
                            showRemainingTime: !y.showRemainingTime
                        })), x((0, p.d)({
                            action_type: "click",
                            action_intent: "change-time-format"
                        }))
                    },
                    "aria-disabled": !(null == t ? void 0 : t.hasContext) && (null == t ? void 0 : t.isPaused) === void 0 || (null == t ? void 0 : t.isPaused),
                    tabIndex: !(null == t ? void 0 : t.hasContext) && (null == t ? void 0 : t.isPaused) === void 0 || (null == t ? void 0 : t.isPaused) ? -1 : 0,
                    "aria-pressed": b,
                    "aria-label": T,
                    children: [(0, r.jsx)("span", {
                        className: h().progressTimeSpacer,
                        "aria-hidden": !0,
                        children: N
                    }), (0, r.jsx)(s.E, {
                        className: h().actualProgressTime,
                        "data-testid": "progress-timestamp",
                        semanticColor: "textBase",
                        variant: "bodySmall",
                        children: S
                    })]
                })
            }
        },
        70525: e => {
            e.exports = {
                backgroundCoverArt: "BackgroundCoverArt_backgroundCoverArt__i5yOP"
            }
        },
        70911: e => {
            e.exports = {
                container: "Tag_container__ju3CN",
                isDarkTheme: "Tag_isDarkTheme__RUhz8",
                bold: "Tag_bold__ALYll"
            }
        },
        72983: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => i
            });
            let i = e => {
                var t;
                let n = null != (t = null == e ? void 0 : e.positionAsOfTimestamp) ? t : null;
                if (null === e || null === n || null === e.duration) return null;
                let {
                    timestamp: i,
                    duration: a,
                    speed: r,
                    hasContext: s,
                    isPaused: o,
                    isBuffering: l
                } = e;
                return !s || o || l ? n : Math.min(n + (Date.now() - i) * (null != r ? r : 0), a)
            }
        },
        74228: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => i
            });
            let i = "https://open.spotify.com"
        },
        75194: e => {
            e.exports = {
                addToLibraryButton: "AddToLibraryCompact_addToLibraryButton__eRbCq"
            }
        },
        75403: e => {
            e.exports = {
                fullscreenWrapper: "UpsellContent_fullscreenWrapper__yafMY",
                transition_enter: "UpsellContent_transition_enter__SPRuw",
                transition_enterActive: "UpsellContent_transition_enterActive__HOboE",
                transition_exit: "UpsellContent_transition_exit__r7VXK",
                transition_exitActive: "UpsellContent_transition_exitActive__dhScU",
                footerWrapper: "UpsellContent_footerWrapper__M_dNe",
                coverArtWrapper: "UpsellContent_coverArtWrapper__O1I7x",
                ctaWrapper: "UpsellContent_ctaWrapper___t9Gy",
                closeButton: "UpsellContent_closeButton__Rxr0B",
                content: "UpsellContent_content__YTOSs",
                metadataWrapper: "UpsellContent_metadataWrapper__iSJfD",
                labelsAndSubtitle: "UpsellContent_labelsAndSubtitle__2mVsp",
                playerControlsWrapper: "UpsellContent_playerControlsWrapper__HdcB9",
                coverArtUpsell: "UpsellContent_coverArtUpsell__bAFhO",
                playlistContainer: "UpsellContent_playlistContainer__ittRM"
            }
        },
        75733: (e, t, n) => {
            "use strict";
            n.d(t, {
                oy: () => s
            }), n(67510);
            var i = n(86727),
                a = n(42891);
            let r = e => void 0 !== e.status,
                s = (e, t) => {
                    var n;
                    let s = e instanceof Error ? e : Error(String(e));
                    (0, a.fE)({
                        metric_type: i.MetricTypes.COUNTER,
                        what: "error",
                        tags: {
                            errorName: null != (n = s.name) ? n : JSON.stringify(s),
                            type: "network",
                            serviceName: t,
                            status: r(s) ? String(s.status) : "UNKNOWN_STATUS"
                        },
                        value: 1
                    })
                }
        },
        76852: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => _
            });
            var i = n(5640),
                a = n(46001),
                r = n.n(a),
                s = n(7113),
                o = n(62909),
                l = n(84336),
                d = n(55610),
                u = n(65366),
                c = n(10870),
                p = n(66458),
                m = n.n(p);
            let _ = () => {
                let e = (0, s.d4)(e => e.machineState.showOverflowMenu),
                    t = (0, s.d4)(e => {
                        var t;
                        return (0, o.BT)(e) || (null == (t = e.data.entity) ? void 0 : t.isAudiobook) ? e.data.entity.relatedEntityUri : e.data.entity.uri
                    });
                return (0, i.jsx)(c.N, {
                    visible: e,
                    children: (0, i.jsxs)("ul", {
                        className: r()(m().menu, {
                            [m().visible]: e
                        }),
                        children: [(0, i.jsx)("li", {
                            className: m().menuItem,
                            children: (0, i.jsx)(u.y, {})
                        }), (0, i.jsx)("li", {
                            className: m().menuItem,
                            children: (0, i.jsx)(l.C, {
                                uri: t
                            })
                        }), (0, i.jsx)("li", {
                            className: m().menuItem,
                            children: (0, i.jsx)(d.M, {})
                        })]
                    })
                })
            }
        },
        77258: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => a,
                Z: () => i
            });
            let i = "INITIALIZE",
                a = "MOUNTED"
        },
        77740: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => r
            });
            var i = n(5640),
                a = n(45543);
            let r = e => {
                let {
                    className: t
                } = e;
                return (0, i.jsx)(a.E, {
                    className: t,
                    "aria-hidden": !0,
                    semanticColor: "textSubdued",
                    variant: "bodySmallBold",
                    children: "\xb7"
                })
            }
        },
        78344: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => d
            });
            var i = n(5640),
                a = n(4896),
                r = n(82434),
                s = n(23910),
                o = n(51128),
                l = n.n(o);
            let d = e => {
                let {
                    handleClose: t
                } = e, n = (0, s.kj)();
                return (0, i.jsx)("div", {
                    className: l().closeButton,
                    children: (0, i.jsx)(a.H, {
                        iconOnly: r.M,
                        "aria-label": n("close_button_action", "Close", "Accessibility label for a close button"),
                        onClick: t,
                        semanticColor: "textBase"
                    })
                })
            }
        },
        79597: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => u
            });
            var i = n(5640),
                a = n(6424),
                r = n(3324),
                s = n(23332),
                o = n(25056),
                l = n(19676),
                d = n.n(l);
            let u = () => {
                let {
                    isCompactLegacy: e
                } = (0, a.o)();
                return (0, i.jsxs)("div", {
                    className: d().playerControlsWrapper,
                    children: [e && (0, i.jsx)("div", {
                        className: d().addToLibraryCompactWrapper,
                        children: (0, i.jsx)(r.p, {})
                    }), (0, i.jsx)("div", {
                        className: d().overflowMenuButtonWrapper,
                        children: (0, i.jsx)(s.G, {})
                    }), (0, i.jsx)(o.n, {})]
                })
            }
        },
        80955: (e, t, n) => {
            "use strict";
            let i;
            n.d(t, {
                E: () => r,
                i: () => a
            });
            let a = () => {
                    if (!i) throw Error("Config data not set");
                    return i
                },
                r = e => {
                    i = e
                }
        },
        81201: (e, t, n) => {
            "use strict";
            n.d(t, {
                Yq: () => i,
                Z9: () => a,
                bt: () => o,
                q3: () => s
            });
            var i = function(e) {
                    return e[e.TRANSIENT = 0] = "TRANSIENT", e[e.PERSISTENT = 1] = "PERSISTENT", e
                }({}),
                a = function(e) {
                    return e.SUCCESS = "success", e.PLAYBACK_STUCK = "playback_stuck", e.PLAYBACK_ERROR = "playback_error", e.LICENSE_CHANGE = "license_change", e.PLAY_RESTRICTED = "play_restricted", e.STOP_RESTRICTED = "stop_restricted", e.UPDATE_RESTRICTED = "update_restricted", e.PAUSE_RESTRICTED = "pause_restricted", e.RESUME_RESTRICTED = "resume_restricted", e.SKIP_TO_PREV_RESTRICTED = "skip_to_prev_restricted", e.SKIP_TO_NEXT_RESTRICTED = "skip_to_next_restricted", e.SKIP_TO_NON_EXISTENT_TRACK = "skip_to_non_existent_track", e.TOGGLE_REPEAT_CONTEXT_RESTRICTED = "toggle_repeat_context_restricted", e.TOGGLE_REPEAT_TRACK_RESTRICTED = "toggle_repeat_track_restricted", e.SET_OPTIONS_RESTRICTED = "set_options_restricted", e.TOGGLE_SHUFFLE_RESTRICTED = "toggle_shuffle_restricted", e.SET_QUEUE_RESTRICTED = "set_queue_restricted", e.INTERRUPT_PLAYBACK_RESTRICTED = "interrupt_playback_restricted", e.SEEK_TO_RESTRICTED = "seek_to_restricted", e.ONE_TRACK_UNPLAYABLE = "one_track_unplayable", e.ONE_TRACK_UNPLAYABLE_AUTO_STOPPED = "one_track_unplayable_auto_stopped", e.ALL_TRACKS_UNPLAYABLE_AUTO_STOPPED = "all_tracks_unplayable_auto_stopped", e.SKIP_TO_NON_EXISTENT_TRACK_AUTO_STOPPED = "skip_to_non_existent_track_auto_stopped", e.QUEUE_REVISION_MISMATCH = "queue_revision_mismatch", e.VIDEO_PLAYBACK_ERROR = "video_playback_error", e.VIDEO_GEORESTRICTED = "video_georestricted", e.VIDEO_UNSUPPORTED_PLATFORM_VERSION = "video_unsupported_platform_version", e.VIDEO_UNSUPPORTED_CLIENT_VERSION = "video_unsupported_client_version", e.VIDEO_UNSUPPORTED_KEY_SYSTEM = "video_unsupported_key_system", e.VIDEO_COUNTRY_RESTRICTED = "video_country_restricted", e.VIDEO_UNAVAILABLE = "video_unavailable", e.VIDEO_CATALOGUE_RESTRICTED = "video_catalogue_restricted", e.VIDEO_MANIFEST_DELETED = "video_manifest_deleted", e.TIMEOUT = "timeout", e.INVALID = "invalid", e.PLAYBACK_REPORTING_ERROR = "playback_reporting_error", e.UNKNOWN = "unknown", e.UNRECOGNIZED = "unrecognized", e
                }({});
            class r extends Error {
                static getMessage(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return t.length > 0 ? "Code '".concat(e, "' with reasons '").concat(t.join(", "), "'") : void 0 !== n ? "Code '".concat(e, "' with cause '").concat(n.name, ": ").concat(n.message, "'") : "Code '".concat(e, "'")
                }
                constructor(e, t, n, i) {
                    super(r.getMessage(t, n, i)), this.type = e, this.code = t, this.reasons = n, this.cause = i
                }
            }
            class s extends r {
                constructor(e, t, n) {
                    super(0, e, t, n)
                }
            }
            class o extends r {
                constructor(e, t, n) {
                    super(1, e, t, n)
                }
            }
        },
        83405: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => T
            });
            var i = n(82536),
                a = n(93629),
                r = n(50148),
                s = n(88986),
                o = n(97427);
            let l = e => {
                let t = new URL(e.href).searchParams.get("t");
                if (t) {
                    let e = parseInt(t, 10);
                    if (e > 0) return e
                }
                return null
            };
            var d = n(80955),
                u = n(4551),
                c = n(1926),
                p = n(84339),
                m = n(95859);
            let _ = () => ({
                    featureIdentifier: "embed",
                    featureVersion: "3",
                    referrerIdentifier: "PlayerStub_UnknownReferrer",
                    restrictionIdentifier: (0, d.i)().restrictionId ? (0, d.i)().restrictionId : void 0
                }),
                v = (e, t, n, r) => {
                    if (t === o.L.PREVIEW) {
                        var s, l;
                        return (0, a._)((0, i._)({}, e), {
                            metadata: (0, a._)((0, i._)({}, e.metadata), {
                                externalResolvedUrl: r === c.Xr.AUDIO ? null == (s = e.metadata) ? void 0 : s.audioPreviewUrl : null == (l = e.metadata) ? void 0 : l.videoPreviewUrl
                            })
                        })
                    }
                    return (0, a._)((0, i._)({}, e), {
                        metadata: (0, a._)((0, i._)({}, e.metadata), {
                            useAuthEndpoint: n ? "yes" : ""
                        })
                    })
                },
                h = (e, t) => t.mediaType !== c.Xr.VIDEO ? e : (0, a._)((0, i._)({}, e), {
                    metadata: (0, a._)((0, i._)({}, e.metadata), {
                        mediaType: c.Xr.VIDEO
                    })
                }),
                y = (e, t, n, i) => {
                    let a = null == e ? void 0 : e.findIndex((e, a) => a > t && (0, p.C)(e, n, i));
                    return null != a ? a : -1
                },
                k = (e, t, n, i) => {
                    for (let a = t - 1; a >= 0; a--)
                        if (e && (0, p.C)(e[a], n, i)) return a;
                    return -1
                },
                f = (e, t, n) => (null == e ? void 0 : e.trackList) && t === o.L.PREVIEW ? (0, u.O)(e.trackList[null != n ? n : 0]) : (0, u.O)(e),
                b = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    return e.slice(0, i + 1).map(e => (0, p.C)(e, t, n)).reduce((e, t) => t ? e + 1 : e, 0) - 1
                };
            async function g(e, t, n) {
                var i, a, r, s, d, u, T, E, w;
                let {
                    settings: S,
                    machineState: N,
                    data: {
                        entity: x,
                        defaultAudioFileObject: A
                    }
                } = t.getState(), C = t.dispatch, P = S.session.isAnonymous, j = N.playbackMode === o.L.PREVIEW, L = f(x, N.playbackMode), O = e.getState();
                switch (n.type) {
                    case c.CU:
                        if ((null == x ? void 0 : x.trackList) && j && !(null == O ? void 0 : O.hasContext)) {
                            let n = N.playbackMode,
                                a = null != (i = S.isAudiobookLaunchedInGeoMarket) && i,
                                r = x.trackList.findIndex(e => (0, p.C)(e, n, a));
                            if (-1 === r) break;
                            await g(e, t, (0, m.h2)(r))
                        } else if ((null == O ? void 0 : O.hasContext) && (null == O ? void 0 : O.isPaused) === !1) await e.pause();
                        else if ((null == O ? void 0 : O.hasContext) && (null == O ? void 0 : O.isPaused) === !0) await e.resume();
                        else {
                            let t = l(window.location),
                                i = v(h(L, n), N.playbackMode, !P, n.mediaType);
                            await e.play(i, _(), {
                                seekTo: t ? 1e3 * t : void 0
                            }, A)
                        }
                        break;
                    case c.tr:
                        {
                            let t = l(window.location),
                                i = v(h(L, n), N.playbackMode, !P, n.mediaType);await e.play(i, _(), {
                                seekTo: t ? 1e3 * t : void 0
                            }, A)
                        }
                        break;
                    case c.WO:
                        if (j) {
                            let t = v(h(f(x, N.playbackMode, n.index), n), N.playbackMode, !P, n.mediaType);
                            await e.play(t, _(), {}, A), C((0, m.TB)(n.index))
                        } else {
                            let t = v(h(L, n), N.playbackMode, !P, n.mediaType),
                                i = (null == (a = t.pages) ? void 0 : a.length) !== (null == x || null == (r = x.trackList) ? void 0 : r.length) && t.pages ? b(null == x ? void 0 : x.trackList, N.playbackMode, null != (s = S.isAudiobookLaunchedInGeoMarket) && s, n.index) : n.index;
                            await e.play(t, _(), {
                                skipTo: {
                                    index: i
                                }
                            }, A)
                        }
                        break;
                    case c.IY:
                        await e.resume();
                        break;
                    case c.Hz:
                        await e.pause();
                        break;
                    case c.NI:
                        if (n.time && Number.isFinite(n.time)) await e.seekTo(n.time);
                        else if (n.percentage && Number.isFinite(n.percentage)) {
                            let t = (null == O ? void 0 : O.duration) || Number(null == (d = L.metadata) ? void 0 : d.duration);
                            await e.seekTo(n.percentage * t)
                        }
                        break;
                    case c.r2:
                        await e.seekForward(15e3);
                        break;
                    case c.hM:
                        await e.seekBackward(15e3);
                        break;
                    case c.lQ:
                        if (j) {
                            let n = y(null == x ? void 0 : x.trackList, N.currentPreviewTrackIndex, N.playbackMode, null != (u = S.isAudiobookLaunchedInGeoMarket) && u);
                            if (n >= 0) await g(e, t, (0, m.h2)(n));
                            else {
                                let n = null != (E = null == x || null == (T = x.trackList) ? void 0 : T.findIndex(e => {
                                    var t;
                                    return (0, p.C)(e, N.playbackMode, null != (t = S.isAudiobookLaunchedInGeoMarket) && t)
                                })) ? E : -1;
                                n >= 0 && await g(e, t, (0, m.h2)(n))
                            }
                        } else await e.skipToNext();
                        break;
                    case c.rp:
                        if (j) {
                            if (O && null !== O.positionAsOfTimestamp && (O.positionAsOfTimestamp > 3e3 || 0 === N.currentPreviewTrackIndex)) await e.seekTo(0);
                            else if (N.currentPreviewTrackIndex > 0) {
                                let n = k(null == x ? void 0 : x.trackList, N.currentPreviewTrackIndex, N.playbackMode, null != (w = S.isAudiobookLaunchedInGeoMarket) && w);
                                n >= 0 && await g(e, t, (0, m.h2)(n))
                            }
                        } else await e.skipToPrevious();
                        break;
                    case c.oD:
                        await e.mute();
                        break;
                    case c.zK:
                        await e.unmute()
                }
            }
            let T = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    [d, u] = (0, r.useState)(n),
                    [c, p] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    let e = l(window.location);
                    e && u((0, a._)((0, i._)({}, n), {
                        positionAsOfTimestamp: 1e3 * e
                    }))
                }, [n]);
                let _ = (0, r.useCallback)(n => e && g(e, t, n), [e, t]),
                    {
                        machineState: {
                            playbackMode: v,
                            currentPreviewTrackIndex: h
                        },
                        settings: {
                            isAudiobookLaunchedInGeoMarket: k
                        },
                        data: {
                            entity: f
                        }
                    } = t.getState();
                return (0, r.useEffect)(() => {
                    if (!c || v !== o.L.PREVIEW || !(null == f ? void 0 : f.trackList)) return;
                    let e = f.trackList.length > h + 1,
                        t = h >= f.trackList.length - 1;
                    if (e) {
                        let e = y(f.trackList, h, v, null != k && k);
                        e >= 0 ? (p(!1), _((0, m.h2)(e))) : (p(!1), _((0, m.TB)(0)))
                    } else t && (p(!1), _((0, m.TB)(0)))
                }, [c, _, v, null == f ? void 0 : f.trackList, h, k]), (0, r.useEffect)(() => {
                    let t = e => {
                            u(t => (0, i._)({}, t, e.data))
                        },
                        n = e => {
                            u(t => (0, a._)((0, i._)({}, t), {
                                isDisabled: !0,
                                error: (0, a._)((0, i._)({}, e.data), {
                                    message: e.data.message
                                })
                            }))
                        },
                        r = () => {
                            p(!0)
                        };
                    if (e) {
                        let o = e.getEvents();
                        o.addListener(s.gd.UPDATE, t), o.addListener(s.gd.ERROR, n), o.addListener(s.gd.TRACK_ENDED, r), u(e => (0, a._)((0, i._)({}, e), {
                            isDisabled: !1
                        }))
                    } else u(e => (0, a._)((0, i._)({}, e), {
                        isDisabled: !0
                    }));
                    return () => {
                        if (e) {
                            let i = e.getEvents();
                            i.removeListener(s.gd.UPDATE, t), i.removeListener(s.gd.ERROR, n), i.removeListener(s.gd.TRACK_ENDED, r)
                        }
                    }
                }, [e]), {
                    playbackState: d,
                    triggerPlaybackOperation: _
                }
            }
        },
        84336: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => E
            });
            var i = n(5640),
                a = n(82434),
                r = n(64029),
                s = n(35992),
                o = n(51615),
                l = n(23910),
                d = n(77228);
            n(50148);
            var u = n(7113),
                c = n(36832),
                p = n(6424),
                m = n(14814),
                _ = n(69136),
                v = n(23740);
            let h = e => {
                var t;
                let {
                    uri: n,
                    isAudiobook: i
                } = e, a = null == (t = (0, d.o_h)(n)) ? void 0 : t.type;
                return a === d.NQG.ARTIST || a === d.NQG.SHOW && !i
            };
            var y = n(54692),
                k = n(20063);
            let f = e => {
                    let {
                        isFollowButton: t,
                        saved: n,
                        t: i
                    } = e;
                    return t ? n ? i("mwp.context.stop.following", "Stop Following", "Button`s text that removes an item to the user`s library") : i("follow_on_spotify", "Follow on Spotify", "Button`s text that adds an item to the user`s library") : n ? i("embed.saved-on-spotify", "Saved on Spotify", "Button`s text that removes an item to the user`s library") : i("embed.save-on-spotify", "Save on Spotify", "Button`s text that adds an item to the user`s library")
                },
                b = (e, t) => e ? t ? "unfollow" : "follow" : t ? "remove-from-spotify" : "save-on-spotify",
                g = (e, t, n) => e ? t ? n.compositeEntity : n.embeddedEntity : n.selectedEntity,
                T = (e, t) => e ? t ? a.M : r.h : t ? s.k : o.P,
                E = e => {
                    let {
                        uri: t,
                        action: n
                    } = e, a = (0, l.kj)(), r = (0, u.d4)(e => {
                        let {
                            settings: t
                        } = e;
                        return t.isMobile
                    }), s = (0, v.j)(), o = (0, u.d4)(e => {
                        var t;
                        let {
                            data: n
                        } = e;
                        return null == (t = n.entity) ? void 0 : t.isAudiobook
                    }), E = (0, u.d4)(e => {
                        var t;
                        let {
                            data: n
                        } = e;
                        return (null == (t = n.entity) ? void 0 : t.type) === d.NQG.EPISODE
                    }), {
                        isCompactLegacy: w
                    } = (0, p.o)(), S = (0, u.d4)(e => e.settings.session.isAnonymous), N = n && "follow" === n || !n && h({
                        uri: t,
                        isAudiobook: o
                    }), x = (0, c.aG)({
                        productName: "embed_player_v",
                        intent: c.pg.ADD_TO_LIBRARY
                    }), [A, C] = (0, m.A)(t);
                    if (void 0 === A) return null;
                    let P = f({
                            isFollowButton: N,
                            saved: A[t],
                            t: a
                        }),
                        j = async () => {
                            S ? (s((0, _.d)({
                                action_type: "click",
                                action_intent: "deeplink",
                                action_item_id: N ? "follow" : "add-to-library"
                            })), (0, y.J)({
                                url: g(N, E, x),
                                newWindow: !r
                            })) : (s((0, _.d)({
                                action_type: "click",
                                action_intent: b(N, A[t])
                            })), await C(!A[t]))
                        };
                    return (0, i.jsx)(k.D, {
                        title: P,
                        onClick: j,
                        icon: w ? void 0 : T(N, A[t]),
                        testId: N ? "follow-button" : "save-on-spotify-button",
                        children: P
                    })
                }
        },
        84339: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => r
            });
            var i = n(5447),
                a = n(97427);

            function r(e, t, n) {
                if (t === a.L.PREVIEW) {
                    var r;
                    if (e.entityType === i.c.CHAPTER) return e.isPlayable && n;
                    if (e.entityType === i.c.EPISODE && !e.isPlayable && (null == (r = e.audioPreview) ? void 0 : r.url)) return !0
                }
                return e.isPlayable
            }
        },
        86637: (e, t, n) => {
            "use strict";
            n.d(t, {
                f: () => s
            });
            var i = n(5640),
                a = n(23910);
            n(50148);
            var r = n(93269);
            let s = e => {
                let {
                    className: t,
                    fullText: n = !1,
                    bold: s = !1
                } = e, o = (0, a.kj)()("card.a11y.explicit", "Explicit", "Label for explicit tagging, only read by accessibility tools");
                return (0, i.jsx)(r.v, {
                    ariaLabel: o,
                    text: n ? o : "E",
                    className: t,
                    bold: s
                })
            }
        },
        87206: e => {
            e.exports = {
                saveOnSpotifyButton: "SaveOnSpotifyButton_saveOnSpotifyButton__QCoJx",
                overflowMenu: "SaveOnSpotifyButton_overflowMenu__RgKhO",
                saveOnSpotifyButtonText: "SaveOnSpotifyButton_saveOnSpotifyButtonText__6Jv6P"
            }
        },
        88986: (e, t, n) => {
            "use strict";
            n.d(t, {
                gd: () => r,
                JW: () => s
            });
            var i = n(8159);
            class a {
                addListener(e, t, n) {
                    return this._emitter.addListener(e, t, n), this
                }
                removeListener(e, t, n) {
                    return this._emitter.removeListener(e, t, n), this
                }
                onAddListener(e, t) {
                    return this._emitter.onAddListener(e, t), this
                }
                onRemoveListener(e, t) {
                    return this._emitter.onRemoveListener(e, t), this
                }
                emit(e, t) {
                    return this._emitter.emit(e, t)
                }
                emitSync(e, t) {
                    return this._emitter.emitSync(e, t)
                }
                constructor(e = new i.bk) {
                    this._emitter = e, this._emitter = e || new i.bk
                }
            }
            var r = function(e) {
                return e.TRACK_LOADED = "track_loaded", e.TRACK_ENDED = "track_ended", e.UPDATE = "update", e.ERROR = "error", e.ACTION = "action", e.QUEUE_ACTION = "queue_action", e.QUEUE_ACTION_COMPLETE = "queue_action_complete", e.QUEUE_UPDATE = "queue_update", e.CONTEXT_WRAPAROUND = "context_wraparound", e
            }({});
            class s extends a {
                emitPlaySync(e, t, n) {
                    let {
                        defaultPrevented: i
                    } = this.emitSync("action", {
                        action: "play",
                        context: e,
                        origin: t,
                        options: n
                    });
                    return i
                }
                emitPauseSync() {
                    let {
                        defaultPrevented: e
                    } = this.emitSync("action", {
                        action: "pause"
                    });
                    return e
                }
                emitResumeSync() {
                    let {
                        defaultPrevented: e
                    } = this.emitSync("action", {
                        action: "resume"
                    });
                    return e
                }
                emitSkipToNextSync() {
                    let {
                        defaultPrevented: e
                    } = this.emitSync("action", {
                        action: "skipToNext"
                    });
                    return e
                }
                emitSkipToPreviousSync() {
                    let {
                        defaultPrevented: e
                    } = this.emitSync("action", {
                        action: "skipToPrevious"
                    });
                    return e
                }
            }
        },
        92088: e => {
            e.exports = {
                container: "Marquee_container__CV7du",
                containerRtl: "Marquee_containerRtl__1Gbu_",
                scrollableContainer: "Marquee_scrollableContainer__mcSox",
                gradient: "Marquee_gradient__dpJhe",
                inner: "Marquee_inner__UKCZf"
            }
        },
        92124: e => {
            e.exports = {
                progressTimeSpacer: "ProgressTimer_progressTimeSpacer__aN1q5",
                actualProgressTime: "ProgressTimer_actualProgressTime__kN3ww",
                progressTimer: "ProgressTimer_progressTimer__EIq8k"
            }
        },
        93269: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => u
            });
            var i = n(5640),
                a = n(45543),
                r = n(46001),
                s = n.n(r),
                o = n(7113),
                l = n(70911),
                d = n.n(l);
            let u = e => {
                let {
                    text: t,
                    ariaLabel: n = t,
                    title: r = n,
                    className: l,
                    bold: u = !1
                } = e, c = (0, o.d4)(e => e.settings.isDarkMode);
                return (0, i.jsx)(a.E, {
                    "aria-label": n,
                    className: s()(d().container, l, {
                        [d().isDarkTheme]: c,
                        [d().bold]: u
                    }),
                    title: r,
                    "data-testid": "tag",
                    children: t
                })
            }
        },
        93980: e => {
            e.exports = {
                loadingSpinner: "LoadingSpinner_loadingSpinner__RhjXu",
                SpinAnimation: "LoadingSpinner_SpinAnimation__yiW4R"
            }
        },
        95322: (e, t, n) => {
            "use strict";
            n.d(t, {
                r: () => _
            });
            var i = n(5640),
                a = n(46001),
                r = n.n(a),
                s = n(50148),
                o = n(7113);
            let l = () => !1,
                d = e => {
                    let t = (0, s.useMemo)(() => l() ? null : window.matchMedia(e), [e]),
                        [n, i] = (0, s.useState)(() => !t || t.matches);
                    return (0, s.useEffect)(() => {
                        if (!t || !t.addEventListener) return () => {};
                        let e = e => {
                            i(e.matches)
                        };
                        return t.addEventListener("change", e), () => {
                            t.removeEventListener("change", e)
                        }
                    }, [t]), n
                },
                u = () => d("(prefers-reduced-motion: reduce)");
            var c = n(51503),
                p = n(92088),
                m = n.n(p);
            let _ = e => {
                let {
                    children: t,
                    title: n
                } = e, a = (0, s.useRef)(null), l = (0, s.useRef)(null), d = (0, s.useRef)(null), p = (0, s.useRef)(0), _ = (0, s.useRef)("scrolling"), v = (0, o.d4)(e => e.settings.rtl) ? "rtl" : "ltr", h = (0, s.useRef)(void 0), y = u(), k = (0, s.useRef)({
                    initialMouseInteraction: null,
                    animationOnMount: null
                }), f = (0, s.useCallback)(() => d.current && a.current ? d.current.clientWidth - a.current.clientWidth : 0, []), b = (0, s.useCallback)(() => h && "rtl" === h.current ? 1 : -1, [h]), g = (0, s.useCallback)(() => {
                    let e = f();
                    return e > 0 && v !== h.current ? 0 + -1 * b() * e : 0
                }, [f, v, b]), T = (0, s.useCallback)(() => {
                    var e;
                    null == (e = d.current) || e.style.setProperty("--trans-x", "".concat(g(), "px"))
                }, [g]), E = (0, s.useCallback)(() => {
                    if (y || p.current) return;
                    let e = !1,
                        t = 0,
                        n = 1,
                        i = !1,
                        a = r => {
                            let s = f();
                            if (s <= 0) return;
                            let o = !0,
                                d = t;
                            e && (i ? r > i + 1200 && (i = !1) : "paused" === _.current || ((d += (r - e) * 60 / 1e3 * n * .2) > s ? (n *= -1, i = r, d = s) : d < 0 && (n *= -1, i = r, d = 0, o = !1)), t = d, l.current.scrollLeft = t), e = r, p.current = 0, o && (p.current = requestAnimationFrame(a))
                        };
                    _.current = "scrolling", a(0)
                }, [.2, 1200, f, y]), w = (0, s.useCallback)(() => p.current, []), S = (0, s.useCallback)(() => {
                    _.current = "paused"
                }, []), N = (0, s.useCallback)(() => {
                    _.current = "scrolling"
                }, []), x = (0, s.useCallback)(() => {
                    cancelAnimationFrame(p.current), _.current = "paused", p.current = 0
                }, []), A = (0, s.useCallback)(() => {
                    Object.values(k.current).forEach(e => e && clearTimeout(e))
                }, []), C = (0, s.useCallback)(e => {
                    w() ? S() : "focus" !== e && (k.current.initialMouseInteraction = setTimeout(E, 200))
                }, [E, S, 200, w]), P = (0, s.useCallback)(() => {
                    k.current.initialMouseInteraction && clearTimeout(k.current.initialMouseInteraction), w() && N()
                }, [N, w]);
                return (0, s.useEffect)(() => {
                    k.current.animationOnMount && clearTimeout(k.current.animationOnMount), k.current.animationOnMount = setTimeout(E, 1e3)
                }, [E, 1e3]), (0, s.useEffect)(() => () => {
                    x(), A(), T()
                }, [x, A, T]), (0, s.useEffect)(() => {
                    var e, t;
                    let n = null == (e = d.current) ? void 0 : e.children[0];
                    n && (h.current = getComputedStyle(n).direction, "rtl" === h.current && (null == (t = a.current) || t.classList.add(m().containerRtl))), T()
                }, [v, g, T]), ! function(e) {
                    let t = (0, c.YQ)(e, 100, {
                        leading: !0
                    });
                    (0, s.useEffect)(() => (window.addEventListener("resize", t), () => {
                        window.removeEventListener("resize", t), t.cancel()
                    }), [t])
                }(() => {
                    x(), T()
                }), (0, i.jsx)("div", {
                    ref: a,
                    className: m().container,
                    onMouseOver: () => C("mouse"),
                    onFocus: () => C("focus"),
                    onMouseOut: P,
                    onBlur: P,
                    title: y && n ? n : void 0,
                    children: (0, i.jsx)("div", {
                        ref: l,
                        className: r()(m().scrollableContainer, {
                            [m().gradient]: f() > 0
                        }),
                        children: (0, i.jsx)("div", {
                            ref: d,
                            className: m().inner,
                            children: t
                        })
                    })
                })
            }
        },
        95859: (e, t, n) => {
            "use strict";
            n.d(t, {
                A4: () => d,
                GT: () => p,
                LY: () => _,
                TB: () => v,
                U: () => o,
                ZH: () => r,
                d5: () => a,
                h2: () => s,
                i2: () => m,
                jF: () => h,
                mb: () => c,
                q3: () => u,
                v7: () => l
            });
            var i = n(1926);

            function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Xr.AUDIO;
                return {
                    type: i.CU,
                    mediaType: e
                }
            }

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Xr.AUDIO;
                return {
                    type: i.tr,
                    mediaType: e
                }
            }

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Xr.AUDIO;
                return {
                    type: i.WO,
                    index: e,
                    mediaType: t
                }
            }

            function o() {
                return {
                    type: i.IY
                }
            }

            function l() {
                return {
                    type: i.Hz
                }
            }

            function d() {
                return {
                    type: i.hM
                }
            }

            function u() {
                return {
                    type: i.r2
                }
            }

            function c() {
                return {
                    type: i.rp
                }
            }

            function p() {
                return {
                    type: i.lQ
                }
            }

            function m() {
                return {
                    type: i.oD
                }
            }

            function _() {
                return {
                    type: i.zK
                }
            }

            function v(e) {
                return {
                    type: i.j5,
                    index: e
                }
            }

            function h(e) {
                return {
                    type: i.NI,
                    time: e
                }
            }
        },
        97073: e => {
            e.exports = {
                tagList: "Tags_tagList__6JpKG",
                tag: "Tags_tag__bbXTA",
                hidden: "Tags_hidden__IArVG",
                condensedTags: "Tags_condensedTags__w_NCJ"
            }
        },
        97427: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => i,
                b: () => a
            });
            var i = function(e) {
                return e.UNKNOWN = "unknown", e.FULL = "full-playback", e.PREVIEW = "preview-playback", e
            }({});
            let a = "SET_PLAYBACK_MODE"
        },
        97912: (e, t, n) => {
            "use strict";
            n.d(t, {
                KY: () => s,
                jT: () => r
            });
            var i = n(74228),
                a = n(80955);

            function r(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = new URL("undefined" != typeof location && location.href ? location.href : i.G),
                    r = null;
                e ? (r = new URL(e.toURL()), t && n.searchParams.forEach((e, t) => {
                    r.searchParams.set(t, e)
                })) : (r = n, t || (r.search = "")), r.searchParams.delete("nd"), r.searchParams.delete("fallback"), r.searchParams.set("go", "1");
                let s = (0, a.i)();
                return "string" == typeof(null == s ? void 0 : s.correlationId) && r.searchParams.append("sp_cid", s.correlationId), r
            }

            function s(e, t) {
                let n = r(e, t);
                return n.searchParams.set("fallback", "getapp"), n
            }
        },
        98766: e => {
            e.exports = {
                wrapper: "AddToLibrary_wrapper__FZKUv"
            }
        },
        98777: (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => C
            });
            var i = n(5640),
                a = n(77228),
                r = n(46001),
                s = n.n(r);
            n(50148);
            var o = n(7113),
                l = n(36832),
                d = n(14814),
                u = n(82434),
                c = n(64029),
                p = n(4896),
                m = n(45543),
                _ = n(23910),
                v = n(6424),
                h = n(69136),
                y = n(23740),
                k = n(54692),
                f = n(60746),
                b = n.n(f);
            let g = e => {
                let {
                    saved: t,
                    links: n,
                    isMobile: a,
                    savedCb: r,
                    mainView: l
                } = e, d = (0, o.d4)(e => e.settings.isVideoEmbed), f = (0, o.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.session.isAnonymous
                }), g = (0, y.j)(), T = (0, _.kj)(), {
                    isCompactLegacy: E
                } = (0, v.o)(), w = t ? T("following", "Following", "Button`s text that adds an item to the user`s library") : T("follow", "Follow", "Button`s text that removes an item to the user`s library"), S = t ? T("mwp.context.stop.following", "Stop Following", "Button`s text that removes an item to the user`s library") : T("follow_on_spotify", "Follow on Spotify", "Button`s text that adds an item to the user`s library"), N = async () => {
                    f ? (g((0, h.d)({
                        action_type: "click",
                        action_intent: "deeplink",
                        action_item_id: "follow"
                    })), (0, k.J)({
                        url: l ? n.embeddedEntity : n.compositeEntity,
                        newWindow: !a
                    })) : (g((0, h.d)({
                        action_type: "click",
                        action_intent: t ? "unfollow" : "follow"
                    })), await r(!t))
                }, x = () => l ? w : S;
                return (0, i.jsx)("div", {
                    className: s()(b().followButtonWrapper, {
                        [b().hideBorder]: !l
                    }),
                    children: (0, i.jsx)(p.H, {
                        "data-testid": "follow-button",
                        condensedAll: !0,
                        title: x(),
                        "aria-label": x(),
                        onClick: N,
                        semanticColor: "textBase",
                        size: "medium",
                        iconLeading: d || !(E || l) ? t ? u.M : c.h : void 0,
                        className: s()(b().followButtonButton, {
                            [b().transformNone]: !l
                        }),
                        children: (0, i.jsx)(m.E, {
                            variant: l ? "bodySmallBold" : E ? "marginal" : "bodySmall",
                            className: s()(b().followButtonText, {
                                [b().resize]: !d
                            }),
                            semanticColor: "textBase",
                            "data-testid": "follow-button-label",
                            children: x()
                        })
                    })
                })
            };
            var T = n(35992),
                E = n(51615),
                w = n(87206),
                S = n.n(w);
            let N = e => {
                let {
                    saved: t,
                    isMobile: n,
                    savedCb: a,
                    mainView: r,
                    links: l
                } = e, d = (0, y.j)(), u = (0, o.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.session.isAnonymous
                }), c = (0, _.kj)(), f = t ? c("embed.saved-on-spotify", "Saved on Spotify", "Button`s text that removes an item to the user`s library") : c("embed.save-on-spotify", "Save on Spotify", "Button`s text that adds an item to the user`s library"), b = async () => {
                    u ? (d((0, h.d)({
                        action_type: "click",
                        action_intent: "deeplink",
                        action_item_id: "save-on-spotify-button"
                    })), (0, k.J)({
                        url: l.selectedEntity,
                        newWindow: !n
                    })) : (d((0, h.d)({
                        action_type: "click",
                        action_intent: t ? "remove-from-spotify" : "save-on-spotify"
                    })), await a(!t))
                };
                return (0, i.jsx)(p.H, {
                    "data-testid": "save-on-spotify-button",
                    condensedAll: !0,
                    title: f,
                    "aria-label": f,
                    iconLeading: (0, v.o)().isCompactLegacy ? void 0 : t ? T.k : E.P,
                    onClick: b,
                    semanticColor: "textBase",
                    size: "medium",
                    className: s()(S().saveOnSpotifyButton, {
                        [S().overflowMenu]: !r
                    }),
                    children: (0, i.jsx)(m.E, {
                        "data-testid": "save-button-label",
                        className: s()(S().saveOnSpotifyButtonText, {
                            [S().overflowMenu]: !r
                        }),
                        children: f
                    })
                })
            };
            var x = n(98766),
                A = n.n(x);
            let C = e => {
                var t;
                let {
                    uri: n,
                    className: r,
                    mainView: u
                } = e, c = (0, o.d4)(e => {
                    let {
                        settings: t
                    } = e;
                    return t.isMobile
                }), p = (0, o.d4)(e => {
                    var t;
                    let {
                        data: n
                    } = e;
                    return null == (t = n.entity) ? void 0 : t.isAudiobook
                }), m = null == (t = (0, a.o_h)(n)) ? void 0 : t.type, _ = m === a.NQG.ARTIST || m === a.NQG.SHOW && !p, v = (0, l.aG)({
                    productName: u ? "embed_player_p" : "embed_player_v",
                    intent: l.pg.ADD_TO_LIBRARY
                }), [h, y] = (0, d.A)(n);
                return void 0 === h ? null : (0, i.jsx)("div", {
                    "data-testid": "save-on-spotify",
                    className: s()(A().wrapper, r),
                    children: _ ? (0, i.jsx)(g, {
                        isMobile: c,
                        links: v,
                        saved: h[n],
                        savedCb: y,
                        mainView: u
                    }) : (0, i.jsx)(N, {
                        isMobile: c,
                        links: v,
                        saved: h[n],
                        savedCb: y,
                        mainView: u
                    })
                })
            }
        },
        98923: e => {
            e.exports = {
                overflowButton: "OverflowButton_overflowButton__KR6lg",
                clicked: "OverflowButton_clicked__xDnu9",
                text: "OverflowButton_text__VM_aj",
                "out-in": "OverflowButton_out-in__Xdrpp",
                compact: "OverflowButton_compact__U_g0C",
                truncator: "OverflowButton_truncator__ldTUs"
            }
        }
    }
]);