try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5bca3a69-0142-413f-92e1-58c4a9827e04", e._sentryDebugIdIdentifier = "sentry-dbid-5bca3a69-0142-413f-92e1-58c4a9827e04")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4847], {
        26321: (e, t, a) => {
            a.d(t, {
                Yn: () => s,
                DD: () => o,
                pM: () => l,
                Wf: () => i
            });
            var n = a(5447);
            let i = {
                type: n.c.UNKNOWN,
                uri: "",
                uid: "",
                name: "",
                images: [],
                mediaType: "audio",
                duration: {
                    milliseconds: -1
                },
                album: {
                    type: n.c.ALBUM,
                    uri: "",
                    name: "",
                    images: []
                },
                artists: [{
                    type: n.c.ARTIST,
                    uri: "",
                    name: ""
                }],
                provider: null
            };
            var l = function(e) {
                return e[e.REPEAT_NONE = 0] = "REPEAT_NONE", e[e.REPEAT_CONTEXT = 1] = "REPEAT_CONTEXT", e[e.REPEAT_TRACK = 2] = "REPEAT_TRACK", e
            }({});
            let o = ["not_playing_track", "not_playing_context", "protocol_limitations", "already_playing", "already_paused", "unknown"];
            var s = function(e) {
                return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.HIGH = 3] = "HIGH", e[e.VERY_HIGH = 4] = "VERY_HIGH", e[e.HIFI = 5] = "HIFI", e
            }({})
        },
        95881: (e, t, a) => {
            a.r(t), a.d(t, {
                createOverturePlayer: () => A,
                createPlayerState: () => S,
                resolveRestrictions: () => k,
                resolveSeekRestrictions: () => E
            });
            var n = a(82536),
                i = a(93629),
                l = a(28069),
                o = a(26052),
                s = a(77228),
                r = a(5447),
                u = a(80955),
                d = a(26321),
                c = a(75733);
            let p = async (e, t, a) => (null != a || (a = "com.apple.fps.1_0"), (await e.build().withMethod("GET").withHost("https://spclient.wg.spotify.com").withPath("/soundfinder/v1/unauth/episode/".concat(t, "/").concat(a)).withEndpointIdentifier("/unauth/episode/{episodeId}/{keysystem}").send()).body);
            var g = a(38015);
            async function m(e, t, a) {
                let n = (0, s.o_h)(e.uri);
                return y(await p(g.n.getInstance(), null == n ? void 0 : n.id, t).catch(e => {
                    throw (0, c.oy)(e, "soundfinder"), e
                }), a)
            }

            function y(e, t) {
                var a, n;
                if ("video" === t) return {
                    format: "MANIFEST_ID",
                    mediaType: t,
                    noManifest: !1,
                    fileId: null == (n = e.video) ? void 0 : n[0].manifestId
                };
                let i = "NONE" !== e.passthrough && e.passthroughUrl,
                    l = i ? e.passthroughUrl : e.url[0];
                return {
                    format: i ? "MP3" : null == (a = e.format) ? void 0 : a.replace(/_(128|256)/, ""),
                    mediaType: null != t ? t : "audio",
                    noManifest: !!i,
                    url: l,
                    fileId: i ? "" : e.fileId
                }
            }
            var f = a(81201),
                _ = a(88986);
            let w = {
                    "com.apple.fps.1_0": "fairplay",
                    "com.widevine.alpha": "widevine",
                    "com.microsoft.playready": "playready"
                },
                h = e => {
                    var t, a;
                    return (null == (t = e.pages) ? void 0 : t.length) && (null == (a = e.pages[0].items) ? void 0 : a.length) ? e.pages[0].items[0] : e
                },
                R = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "audio";
                    return t ? "@webgate/".concat(w[e], "-license/v1/").concat(a, "/license") : "".concat("https://spclient.wg.spotify.com", "/").concat(w[e], "-license/v1/unauth/").concat(a, "/license")
                },
                v = async function(e, t, a) {
                    var l, r, u;
                    let d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "com.widevine.alpha",
                        c = arguments.length > 4 ? arguments[4] : void 0,
                        p = arguments.length > 5 ? arguments[5] : void 0,
                        g = (0, i._)((0, n._)({}, t.metadata), {
                            contextURI: t !== e ? e.uri : null
                        }),
                        w = g.mediaType;
                    if (null == (l = t.metadata) ? void 0 : l.externalResolvedUrl) return (0, o.KT)({
                        uri: t.uri,
                        url: null == (u = t.metadata) ? void 0 : u.externalResolvedUrl,
                        fileId: "",
                        metadata: g,
                        logData: c,
                        mediaType: w
                    });
                    if ((null == (r = (0, s.o_h)(t.uri)) ? void 0 : r.type) === "episode") {
                        let e = "yes" === g.useAuthEndpoint,
                            a = R(d, e, w),
                            i = "com.apple.fps.1_0" === d && p ? y(p, w) : await m(t, d, w),
                            l = (0, n._)({
                                uri: t.uri,
                                licenseEndpoint: a,
                                metadata: g,
                                logData: c,
                                fileId: "",
                                noAuth: !e
                            }, i);
                        return (0, o.KT)(l)
                    }
                    let h = Error("No valid solution has been found to play this item (".concat(null == t ? void 0 : t.uri, ")"));
                    throw a.emitSync(_.gd.ERROR, new f.bt(f.Z9.ONE_TRACK_UNPLAYABLE, [], h)), h
                };

            function T(e) {
                return function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    return t.filter(e => {
                        let {
                            url: t,
                            height: a,
                            width: n
                        } = e;
                        return !!t && !!a && !!n
                    }).map(e => {
                        let {
                            url: t,
                            width: a,
                            height: n
                        } = e;
                        return {
                            url: t,
                            height: parseInt(null != n ? n : "0", 10),
                            width: parseInt(null != a ? a : "0", 10)
                        }
                    })
                }({
                    url: e.image_url,
                    height: e.image_height,
                    width: e.image_width
                }, {
                    url: e.image_url_small,
                    height: e.image_height_small,
                    width: e.image_width_small
                }, {
                    url: e.image_url_large,
                    height: e.image_height_large,
                    width: e.image_width_large
                }, {
                    url: e.image_url_xlarge,
                    height: e.image_height_xlarge,
                    width: e.image_width_xlarge
                })
            }

            function k(e) {
                let {
                    playbackState: t
                } = e;
                return {
                    canPause: !!t.playing,
                    canResume: !t.playing,
                    canSeek: !0,
                    canSkipPrevious: !1,
                    canSkipNext: !1,
                    canToggleRepeatContext: !1,
                    canToggleRepeatTrack: !1,
                    canToggleShuffle: !1,
                    disallowPausingReasons: t.playing ? [] : ["already_paused"],
                    disallowResumingReasons: t.playing ? ["already_playing"] : [],
                    disallowSeekingReasons: [],
                    disallowSkippingPreviousReasons: ["unknown"],
                    disallowSkippingNextReasons: ["unknown"],
                    disallowTogglingRepeatContextReasons: ["unknown"],
                    disallowTogglingRepeatTrackReasons: ["unknown"],
                    disallowTogglingShuffleReasons: ["unknown"],
                    disallowTransferringPlaybackReasons: []
                }
            }

            function E(e) {
                let t = e.hasContext || e.isPaused || e.isBuffering;
                return {
                    canSeek: null != t && t,
                    disallowSeekingReasons: t ? [] : ["not_playing_track"]
                }
            }
            let P = e => (0, o.jA)({
                    transport: e,
                    platform_identifier: "Partner spotify embed",
                    config: {
                        preinitMediaElement: !0,
                        enableWithoutEME: !0,
                        unauthenticatedLogs: !0,
                        videoPlayerContainer: ".VideoPlayer__container",
                        audioPlayerContainer: ".VideoPlayer__container",
                        disallowRobustnessValues: [l.LW.EMPTY]
                    },
                    autoActivateElement: !0
                }),
                A = (e, t) => {
                    var a;
                    let l = P(e);
                    (null == (a = t.data.entity) ? void 0 : a.hasVideo) && l.on(o.Pv.VIDEO_ELEMENT_APPENDED, () => {
                        var e;
                        null == (e = document.getElementsByTagName("video")[0]) || e.setAttribute("poster", "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")
                    });
                    let {
                        clientId: s,
                        correlationId: r
                    } = (0, u.i)();
                    return {
                        playerAPI: function(e, t) {
                            let a, l = function(e) {
                                    let t, a, l = new _.JW,
                                        s = {
                                            sessionId: "",
                                            timestamp: 0,
                                            context: {
                                                uri: ""
                                            },
                                            index: {
                                                pageURI: null,
                                                pageIndex: null,
                                                itemIndex: null
                                            },
                                            item: null,
                                            shuffle: !1,
                                            repeat: d.pM.REPEAT_NONE,
                                            speed: 1,
                                            playbackQuality: {
                                                bitrateLevel: d.Yn.UNKNOWN
                                            },
                                            playbackId: null,
                                            positionAsOfTimestamp: 0,
                                            duration: 0,
                                            restrictions: {
                                                canPause: !1,
                                                canResume: !1,
                                                canSeek: !1,
                                                canSkipNext: !1,
                                                canSkipPrevious: !1,
                                                canToggleRepeatContext: !1,
                                                canToggleRepeatTrack: !1,
                                                canToggleShuffle: !1,
                                                disallowPausingReasons: ["not_playing_track"],
                                                disallowResumingReasons: ["not_playing_track"],
                                                disallowSeekingReasons: ["not_playing_track"],
                                                disallowSkippingPreviousReasons: ["not_playing_context"],
                                                disallowSkippingNextReasons: ["not_playing_context"],
                                                disallowTogglingRepeatContextReasons: ["not_playing_context"],
                                                disallowTogglingRepeatTrackReasons: ["not_playing_context"],
                                                disallowTogglingShuffleReasons: ["not_playing_context"],
                                                disallowTransferringPlaybackReasons: []
                                            },
                                            hasContext: !1,
                                            isPaused: !1,
                                            isBuffering: !1,
                                            previousItems: [],
                                            nextItems: [],
                                            volume: 1
                                        };

                                    function r(e) {
                                        return (0, i._)((0, n._)({}, s, e), {
                                            context: (0, n._)({}, s.context, null == e ? void 0 : e.context)
                                        })
                                    }

                                    function u(e) {
                                        s = r(e), l.emit(_.gd.UPDATE, s)
                                    }
                                    async function c() {
                                        u(S(await e.getCurrentState()))
                                    }
                                    async function p(e) {
                                        e ? t || (t = setTimeout(() => {
                                            t = null, u({
                                                isBuffering: e
                                            })
                                        }, 200)) : t ? (clearTimeout(t), t = null, u({
                                            isBuffering: e
                                        })) : a || (a = setTimeout(() => {
                                            a = null, u({
                                                isBuffering: e
                                            })
                                        }, 400))
                                    }
                                    async function g() {
                                        c(), l.emit(_.gd.TRACK_LOADED, s)
                                    }
                                    async function m() {
                                        let t = await e.getCurrentState(),
                                            a = S(t),
                                            o = a ? (0, i._)((0, n._)({}, a), {
                                                isBuffering: !1,
                                                hasContext: !1,
                                                isPaused: !1,
                                                positionAsOfTimestamp: s.duration
                                            }) : {
                                                positionAsOfTimestamp: s.duration,
                                                position: s.duration,
                                                isBuffering: !1,
                                                hasContext: !1,
                                                isPaused: !1,
                                                restrictions: k(t)
                                            },
                                            d = r(o),
                                            c = E(o);
                                        u((0, i._)((0, n._)({}, d), {
                                            restrictions: (0, n._)({}, o.restrictions, c)
                                        })), l.emit(_.gd.TRACK_ENDED, s)
                                    }
                                    return e.on(o.Pv.ERROR, e => {
                                        let {
                                            error: t
                                        } = e.data;
                                        t.unrecoverable ? l.emit(_.gd.ERROR, new f.bt(f.Z9.PLAYBACK_ERROR, [], t)) : l.emit(_.gd.ERROR, new f.q3(f.Z9.PLAYBACK_ERROR, [], t))
                                    }), e.on(o.Pv.PAUSED, c), e.on(o.Pv.PROGRESS, async () => {
                                        Date.now() - s.timestamp >= 1e3 && c(), (s.isBuffering || t) && ((await e.getCurrentState()).playbackState.buffering || p(!1))
                                    }), e.on(o.Pv.TRACK_LOADED, g), e.on(o.Pv.TRACK_ENDED, m), e.on(o.Pv.LIST_ENDED, m), e.on(o.Pv.BUFFERING_START, async () => {
                                        await p(!0)
                                    }), e.on(o.Pv.BUFFERING_END, async () => {
                                        await p(!1)
                                    }), e.on(o.Pv.AUTOPLAY_FAILED, async () => {
                                        await p(!1)
                                    }), e.on(o.Pv.BEFORE_TRACK_LOAD, async () => {
                                        await p(!0)
                                    }), e.on(o.Pv.POSITION_CHANGED, async () => {
                                        (await e.getCurrentState()).playbackState.playing && await p(!0)
                                    }), l
                                }(e),
                                s = null,
                                r = "PlayerOverture_UnknownReferrer",
                                u = {
                                    unloadedSeekPosition: 0,
                                    playArgs: null
                                },
                                c = async () => (void 0 === a && (a = (await e.getMediaConfig()).keysystem), a);
                            return l.addListener(_.gd.UPDATE, e => {
                                let {
                                    data: t
                                } = e;
                                s = t
                            }), c(), {
                                getCapabilities: () => ({
                                    canChangeSpeed: !1,
                                    canChangeVolume: !0,
                                    canPlayMultipleContextPages: !1,
                                    maxNextTracks: 0,
                                    hasDecoratedQueue: !1
                                }),
                                canPlayEncryptedContent: async () => await c() !== void 0,
                                getEvents: () => l,
                                getState: () => s,
                                getReferrer: () => r,
                                setReferrer(e) {
                                    r = e
                                },
                                async play(n, i, s, r) {
                                    var d, c, p;
                                    if (l.emitPlaySync(n, i, null != s ? s : {})) return;
                                    let g = h(n),
                                        m = await v(n, g, l, a, t, r),
                                        y = (0, o.xj)({
                                            tracks: [m]
                                        }),
                                        f = {
                                            index: null != (c = null == s || null == (d = s.skipTo) ? void 0 : d.index) ? c : void 0,
                                            initialPosition: null != (p = null == s ? void 0 : s.seekTo) ? p : 0
                                        };
                                    await e.playList(y, f), u = {
                                        playArgs: [n, i, s],
                                        unloadedSeekPosition: 0
                                    }
                                },
                                async pause() {
                                    l.emitPauseSync() || await e.pause()
                                },
                                async resume() {
                                    if ((await e.getCurrentState()).track) {
                                        if (l.emitResumeSync()) return;
                                        await e.resume();
                                        return
                                    }
                                    if (u.playArgs) {
                                        let [e, t, a] = u.playArgs;
                                        await this.play(e, t, (0, i._)((0, n._)({}, a), {
                                            seekTo: u.unloadedSeekPosition
                                        }));
                                        return
                                    }
                                },
                                async skipToNext() {
                                    l.emitSkipToNextSync() || await e.nextTrack()
                                },
                                async skipTo() {
                                    throw Error("Not implemented")
                                },
                                async skipToPrevious() {
                                    l.emitSkipToPreviousSync() || await e.previousTrack()
                                },
                                async seekTo(t) {
                                    if (!(await e.getCurrentState()).track) {
                                        u.unloadedSeekPosition = t;
                                        return
                                    }
                                    await e.seek(t)
                                },
                                async seekForward(t) {
                                    let a = (await e.getCurrentState()).playbackState.position;
                                    await e.seek(a + t)
                                },
                                async seekBackward(t) {
                                    let a = (await e.getCurrentState()).playbackState.position;
                                    await e.seek(a - t)
                                },
                                async setShuffle() {
                                    throw Error("setShuffle is not supported in Overture")
                                },
                                async setSpeed() {
                                    throw Error("setSpeed is not supported in Overture")
                                },
                                async setVolume(t) {
                                    await e.setVolume(t)
                                },
                                async mute() {
                                    await e.setMuted(!0)
                                },
                                async unmute() {
                                    await e.setMuted(!1)
                                },
                                async refreshCurrentContext() {},
                                async updateContext() {
                                    throw Error("Updating context not possible with Overture.")
                                }
                            }
                        }(l, {
                            clientId: s,
                            correlationId: r
                        })
                    }
                };

            function S(e) {
                if (null === e) return null;
                let t = e.playbackState,
                    a = e.track,
                    l = null == a ? void 0 : a.metadata,
                    o = function(e) {
                        let t = e.track,
                            a = null == t ? void 0 : t.metadata;
                        return (null == a ? void 0 : a.contextURI) || (null == t ? void 0 : t.uri) || null
                    }(e);
                return o ? {
                    sessionId: "",
                    timestamp: Date.now(),
                    context: {
                        uri: null != o ? o : "",
                        metadata: l
                    },
                    index: {
                        pageURI: null,
                        pageIndex: null,
                        itemIndex: null
                    },
                    item: a ? function(e, t) {
                        if (null === e) return null;
                        if ((0, s.U_m)(e.uri) || (0, s.PkR)(e.uri)) return function(e, t) {
                            var a, n, i, l, o;
                            let u = e.metadata;
                            return {
                                type: r.c.TRACK,
                                uri: e.uri,
                                uid: null,
                                name: null != (a = u.title) ? a : "",
                                mediaType: e.mediaType,
                                duration: {
                                    milliseconds: t
                                },
                                album: {
                                    type: r.c.ALBUM,
                                    uri: null != (n = u.album_uri) ? n : "",
                                    name: null != (i = u.album_title) ? i : "",
                                    images: T(u)
                                },
                                artists: [{
                                    type: r.c.ARTIST,
                                    uri: null != (l = u.artist_uri) ? l : "",
                                    name: null != (o = u.artist_name) ? o : ""
                                }],
                                isLocal: (0, s.PkR)(e.uri),
                                isExplicit: !1,
                                is19PlusOnly: !1,
                                provider: null,
                                get images() {
                                    return this.album.images
                                }
                            }
                        }(e, t);
                        if ((0, s.gHQ)(e.uri)) {
                            var a, l, o;
                            let n = e.metadata;
                            return {
                                type: r.c.EPISODE,
                                uri: e.uri,
                                uid: null,
                                name: null != (a = n.title) ? a : "",
                                mediaType: e.mediaType,
                                duration: {
                                    milliseconds: t
                                },
                                show: {
                                    type: r.c.SHOW,
                                    uri: null != (l = n.album_uri) ? l : "",
                                    name: null != (o = n.album_title) ? o : "",
                                    images: T(n)
                                },
                                provider: null,
                                get images() {
                                    return this.show.images
                                }
                            }
                        }
                        return (0, i._)((0, n._)({}, d.Wf), {
                            uri: e.uri,
                            metadata: e.metadata || null
                        })
                    }(a, t.duration) : null,
                    shuffle: !1,
                    repeat: null,
                    speed: 1,
                    playbackQuality: {
                        bitrateLevel: d.Yn.UNKNOWN
                    },
                    playbackId: null,
                    positionAsOfTimestamp: t.position,
                    duration: t.duration,
                    restrictions: (0, n._)({}, k(e), E({
                        hasContext: !!a && !!o,
                        isPaused: !t.playing,
                        isBuffering: !1
                    })),
                    hasContext: !!a && !!o,
                    isPaused: !t.playing,
                    volume: t.volume,
                    previousItems: [],
                    nextItems: []
                } : null
            }
        }
    }
]);