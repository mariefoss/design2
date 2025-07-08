try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8eb51231-0669-4237-9db1-567209ccf91e", e._sentryDebugIdIdentifier = "sentry-dbid-8eb51231-0669-4237-9db1-567209ccf91e")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6052], {
        26052: (e, t, i) => {
            "use strict";
            i.d(t, {
                Pv: () => r,
                jA: () => E,
                xj: () => p,
                KT: () => f
            });
            var r, a = i(28069),
                n = i(58332),
                s = i(42669),
                o = i(8159);
            ! function(e) {
                e.PLAYER_INITIALIZATION_DONE = "PLAYER_INITIALIZATION_DONE", e.PLAYER_INITIALIZATION_FAILED = "PLAYER_INITIALIZATION_FAILED", e.STATE_CHANGED = "STATE_CHANGED", e.AUTOPLAY_FAILED = "AUTOPLAY_FAILED", e.BEFORE_LIST_CHANGE = "BEFORE_LIST_CHANGE", e.BEFORE_NEXT = "BEFORE_NEXT", e.BEFORE_PREVIOUS = "BEFORE_PREVIOUS", e.BEFORE_TRACK_LOAD = "BEFORE_TRACK_LOAD", e.BEFORE_PLAYER_LOAD = "BEFORE_PLAYER_LOAD", e.BUFFER_STALLED = "BUFFER_STALLED", e.BUFFERING_START = "BUFFERING_START", e.BUFFERING_END = "BUFFERING_END", e.REBUFFERING_START = "REBUFFERING_START", e.REBUFFERING_END = "REBUFFERING_END", e.CAPPED = "CAPPED", e.CLEARED = "CLEARED", e.DISPLAYED_CUES_CHANGED = "DISPLAYED_CUES_CHANGED", e.SUBTITLE_LANGUAGES_LOADED = "SUBTITLE_LANGUAGES_LOADED", e.DURATION_CHANGED = "DURATION_CHANGED", e.ERROR = "ERROR", e.ERROR_SYNC = "ERROR_SYNC", e.FIRST_BYTES = "FIRST_BYTES", e.LIST_CHANGED = "LIST_CHANGED", e.LIST_ENDED = "LIST_ENDED", e.LOAD_VIDEO = "LOAD_VIDEO", e.MAX_LIST_ERRORS_REACHED = "MAX_LIST_ERRORS_REACHED", e.PAUSED = "PAUSED", e.PLAYING = "PLAYING", e.PLAYED_THRESHOLD_REACHED = "PLAYED_THRESHOLD_REACHED", e.POSITION_CHANGED = "POSITION_CHANGED", e.PROGRESS = "PROGRESS", e.SEEKING = "SEEKING", e.REPEAT_MODE_CHANGED = "REPEAT_MODE_CHANGED", e.SHUFFLE_CHANGED = "SHUFFLE_CHANGED", e.BEFORE_STOP = "BEFORE_STOP", e.STOPPED = "STOPPED", e.STOPPED_VIDEO = "STOPPED_VIDEO", e.TRACKING_DATA_CREATED = "TRACKING_DATA_CREATED", e.TRACKING_DATA_FINALIZED = "TRACKING_DATA_FINALIZED", e.TRACK_ENDED = "TRACK_ENDED", e.TRACK_LOADED = "TRACK_LOADED", e.TRACK_TIMEOUT = "TRACK_TIMEOUT", e.TRACK_UNPLAYABLE = "TRACK_UNPLAYABLE", e.VOLUME_CHANGED = "VOLUME_CHANGED", e.VIDEO_ELEMENT_APPENDED = "VIDEO_ELEMENT_APPENDED", e.VIDEO_ELEMENT_REMOVED = "VIDEO_ELEMENT_REMOVED", e.SPEED_CHANGED = "SPEED_CHANGED", e.MUTED_CHANGED = "MUTED_CHANGED", e.PLAYING_PROFILE_CHANGED = "PLAYING_PROFILE_CHANGED", e.MEDIA_PLAYBACK_MODE_CHANGED = "MEDIA_PLAYBACK_MODE_CHANGED", e.VISIBILITY_CHANGED = "VISIBILITY_CHANGED", e.VIDEO_VISIBILITY_CHANGED = "VIDEO_VISIBILITY_CHANGED", e.VIDEO_SURFACE_CHANGED = "VIDEO_SURFACE_CHANGED", e.REPORTING_START = "REPORTING_START", e.REPORTING_FIRST_QUARTILE = "REPORTING_FIRST_QUARTILE", e.REPORTING_MIDPOINT = "REPORTING_MIDPOINT", e.REPORTING_THIRD_QUARTILE = "REPORTING_THIRD_QUARTILE", e.REPORTING_COMPLETE = "REPORTING_COMPLETE", e.REPORTING_PAUSE = "REPORTING_PAUSE", e.REPORTING_RESUME = "REPORTING_RESUME", e.REPORTING_CREATIVE_VIEW = "REPORTING_CREATIVE_VIEW", e.REPORTING_ERROR = "REPORTING_ERROR"
            }(r || (r = {}));
            var l = i(91403);
            let d = () => (0, l.$C)(32),
                u = e => e && e.length > 0 ? e : d(),
                _ = {
                    MP3: a.oz.MP3,
                    MP4: a.oz.MP4,
                    MP4_DUAL: a.oz.MP4_DUAL,
                    MP4_CBCS: a.oz.MP4_CBCS,
                    MP4_FLAC: a.oz.MP4_FLAC,
                    MANIFEST_ID: a.oz.MANIFEST_ID,
                    AD_MANIFEST: a.oz.AD_MANIFEST,
                    GENERIC_MEDIA: a.oz.GENERIC_MEDIA
                };
            class h {
                constructor(e) {
                    var t, i, r, n, s, o, l, d;
                    if (this.isAd = !1, !e.uri) throw TypeError("Missing required `uri` option.");
                    if (!e.fileId && !(null != (t = e.url) ? t : e.resolvedURL)) throw TypeError("Missing: provide either fileId or url");
                    this.uri = e.uri, this.playableURI = this.uri, this.fileId = e.fileId || "", this.playable = null == (i = e.playable) || i, this.mediaType = e.mediaType || "audio", this.metadata = e.metadata || {}, this.url = null != (r = e.url) ? r : e.resolvedURL, this.noManifest = null != (n = e.noManifest) ? n : !!this.url, this.noAuth = null != (s = e.noAuth) && s, this.preloadedManifest = e.preloadedManifest, this.licenseEndpoint = e.licenseEndpoint, this.fileFormat = e.fileFormat, this.poster = e.poster, this.options = e.options, this.audioGain = e.audioGain, this.mimeType = e.mimeType, this.contentType = e.contentType;
                    let {
                        format: h
                    } = e;
                    if (h)
                        if (Object.prototype.hasOwnProperty.call(_, h)) this.format = _[h];
                        else throw TypeError("Invalid `format` option.");
                    else this.format = this.url && !this.fileId ? a.oz.GENERIC_MEDIA : a.oz.MP4;
                    this.logData = Object.assign(Object.assign({}, e.logData), {
                        noLog: !1,
                        noTSV: null == (l = null == (o = e.logData) ? void 0 : o.noTSV) || l,
                        noStats: !1,
                        playbackId: u(null == (d = e.logData) ? void 0 : d.playbackId)
                    })
                }
                static create(e) {
                    return new h(e)
                }
            }
            class c {
                constructor(e) {
                    this._index = -1, this._tracks = [], this._tracks = e.tracks
                }
                static create(e) {
                    let t = [];
                    for (let i of e.tracks) i instanceof h ? t.push(i) : t.push(h.create(i));
                    return new c({
                        tracks: t
                    })
                }
                startAt(e) {
                    return e > this._tracks.length || e < 0 ? this._index = -1 : this._index = e - 1, Promise.resolve(a.TG.SUCCESS)
                }
                next(e, t) {
                    let i = this._index + 1;
                    if (i >= this._tracks.length) return Promise.resolve(e.listConstants.LIST_END);
                    let r = this._tracks[i];
                    return (t || (this._index = i), r) ? Promise.resolve(r) : Promise.reject(a.Sn.NULL_VALUE)
                }
                peekNext(e) {
                    return this.next(e, !0)
                }
                allowSeeking() {
                    return !0
                }
                previous(e) {
                    let t = this._index - 1;
                    if (t < 0) return Promise.resolve(e.listConstants.LIST_START);
                    let i = this._tracks[t];
                    return (this._index = t, i) ? Promise.resolve(i) : Promise.reject(a.Sn.NULL_VALUE)
                }
                setShuffle() {
                    return Promise.resolve(a.TG.SUCCESS)
                }
                setRepeatMode() {
                    return Promise.resolve(a.TG.SUCCESS)
                }
            }
            class m extends o.bk {
                constructor(e) {
                    super(), this._playerPromise = e.playerPromise, this._listPlayer = e.listPlayer, this._transport = e.transport, this._autoActivateElement = !!e.autoActivateElement, this._init()
                }
                static create(e) {
                    return new m(e)
                }
                _init() {
                    let e = this._listPlayer;
                    this.proxyEmitAll(e, {
                        [a._8.LIST_PLAYER_AUTOPLAY_FAILED]: r.AUTOPLAY_FAILED,
                        [a._8.LIST_PLAYER_BEFORE_LIST_CHANGE]: r.BEFORE_LIST_CHANGE,
                        [a._8.LIST_PLAYER_BUFFER_STALLED]: r.BUFFER_STALLED,
                        [a._8.LIST_PLAYER_BUFFERING_START]: r.BUFFERING_START,
                        [a._8.LIST_PLAYER_BUFFERING_END]: r.BUFFERING_END,
                        [a._8.LIST_PLAYER_REBUFFERING_START]: r.REBUFFERING_START,
                        [a._8.LIST_PLAYER_REBUFFERING_END]: r.REBUFFERING_END,
                        [a._8.LIST_PLAYER_CLEARED]: r.CLEARED,
                        [a._8.LIST_PLAYER_DURATION_CHANGED]: r.DURATION_CHANGED,
                        [a._8.LIST_PLAYER_ERROR]: r.ERROR,
                        [a._8.LIST_PLAYER_LIST_CHANGED]: r.LIST_CHANGED,
                        [a._8.LIST_PLAYER_LIST_ENDED]: r.LIST_ENDED,
                        [a._8.LIST_PLAYER_MAX_LIST_ERRORS_REACHED]: r.MAX_LIST_ERRORS_REACHED,
                        [a._8.LIST_PLAYER_PAUSED]: r.PAUSED,
                        [a._8.LIST_PLAYER_PLAYING]: r.PLAYING,
                        [a._8.LIST_PLAYER_PLAYED_THRESHOLD_REACHED]: r.PLAYED_THRESHOLD_REACHED,
                        [a._8.LIST_PLAYER_POSITION_CHANGED]: r.POSITION_CHANGED,
                        [a._8.LIST_PLAYER_PROGRESS]: r.PROGRESS,
                        [a._8.LIST_PLAYER_REPEAT_MODE_CHANGED]: r.REPEAT_MODE_CHANGED,
                        [a._8.LIST_PLAYER_SEEKING]: r.SEEKING,
                        [a._8.LIST_PLAYER_SHUFFLE_CHANGED]: r.SHUFFLE_CHANGED,
                        [a._8.LIST_PLAYER_BEFORE_STOP]: r.BEFORE_STOP,
                        [a._8.LIST_PLAYER_STOPPED]: r.STOPPED,
                        [a._8.LIST_PLAYER_TRACKING_DATA_CREATED]: r.TRACKING_DATA_CREATED,
                        [a._8.LIST_PLAYER_TRACKING_DATA_FINALIZED]: r.TRACKING_DATA_FINALIZED,
                        [a._8.LIST_PLAYER_TRACK_ENDED]: r.TRACK_ENDED,
                        [a._8.LIST_PLAYER_TRACK_LOADED]: r.TRACK_LOADED,
                        [a._8.LIST_PLAYER_TRACK_TIMEOUT]: r.TRACK_TIMEOUT,
                        [a._8.LIST_PLAYER_TRACK_UNPLAYABLE]: r.TRACK_UNPLAYABLE,
                        [a._8.LIST_PLAYER_VOLUME_CHANGED]: r.VOLUME_CHANGED,
                        [a._8.LIST_PLAYER_VIDEO_ELEMENT_APPENDED]: r.VIDEO_ELEMENT_APPENDED,
                        [a._8.LIST_PLAYER_VIDEO_ELEMENT_REMOVED]: r.VIDEO_ELEMENT_REMOVED,
                        [a._8.PLAYER_DISPLAYED_CUES_CHANGED]: r.DISPLAYED_CUES_CHANGED,
                        [a._8.PLAYER_SUBTITLE_LANGUAGES_LOADED]: r.SUBTITLE_LANGUAGES_LOADED,
                        [a._8.PLAYER_PLAYBACK_SPEED_CHANGED]: r.SPEED_CHANGED,
                        [a._8.PLAYER_MUTED_CHANGED]: r.MUTED_CHANGED,
                        [a._8.LIST_PLAYER_PLAYING_PROFILE_CHANGED]: r.PLAYING_PROFILE_CHANGED,
                        [a._8.LIST_PLAYER_FIRST_BYTES]: r.FIRST_BYTES,
                        [a._8.LIST_PLAYER_BEFORE_PLAYER_LOAD]: r.BEFORE_PLAYER_LOAD,
                        [a._8.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: r.MEDIA_PLAYBACK_MODE_CHANGED,
                        [a._8.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED]: r.VIDEO_VISIBILITY_CHANGED,
                        [a._8.LIST_PLAYER_VIDEO_SURFACE_CHANGED]: r.VIDEO_SURFACE_CHANGED
                    }), this.proxyEmitAllSync(e, {
                        [a._8.LIST_PLAYER_BEFORE_NEXT]: r.BEFORE_NEXT,
                        [a._8.LIST_PLAYER_BEFORE_PREVIOUS]: r.BEFORE_PREVIOUS,
                        [a._8.LIST_PLAYER_BEFORE_TRACK_LOAD]: r.BEFORE_TRACK_LOAD,
                        [a._8.LIST_PLAYER_ERROR_SYNC]: r.ERROR_SYNC,
                        [a._8.REPORTING_START]: r.REPORTING_START,
                        [a._8.REPORTING_FIRST_QUARTILE]: r.REPORTING_FIRST_QUARTILE,
                        [a._8.REPORTING_MIDPOINT]: r.REPORTING_MIDPOINT,
                        [a._8.REPORTING_THIRD_QUARTILE]: r.REPORTING_THIRD_QUARTILE,
                        [a._8.REPORTING_COMPLETE]: r.REPORTING_COMPLETE,
                        [a._8.REPORTING_PAUSE]: r.REPORTING_PAUSE,
                        [a._8.REPORTING_RESUME]: r.REPORTING_RESUME,
                        [a._8.REPORTING_CREATIVE_VIEW]: r.REPORTING_CREATIVE_VIEW,
                        [a._8.REPORTING_ERROR]: r.REPORTING_ERROR
                    }), this._emitStateChanged = this._emitStateChanged.bind(this), this.on(r.CLEARED, this._emitStateChanged), this.on(r.PAUSED, this._emitStateChanged), this.on(r.PLAYING, this._emitStateChanged), this.on(r.POSITION_CHANGED, this._emitStateChanged), this.on(r.STOPPED, this._emitStateChanged), this.on(r.LIST_CHANGED, this._emitStateChanged), this.on(r.VOLUME_CHANGED, this._emitStateChanged), this.on(r.SPEED_CHANGED, this._emitStateChanged), this.on(r.MUTED_CHANGED, this._emitStateChanged), this.on(r.TRACK_LOADED, this._emitStateChanged), this.on(r.DURATION_CHANGED, this._emitStateChanged), this.on(r.REBUFFERING_START, this._emitStateChanged), this.on(r.REBUFFERING_END, this._emitStateChanged), this._playerPromise.then(() => this.emit(r.PLAYER_INITIALIZATION_DONE, null)).catch(e => this.emit(r.PLAYER_INITIALIZATION_FAILED, {
                        error: e
                    })), this._transport.on(s.TransportEvent.BEFORE_ONLINE_DISCONNECT, e => {
                        e.data.awaitPromise(this._listPlayer.stop(a.By.END_PLAY).catch(e => {}))
                    })
                }
                _emitStateChanged() {
                    this._listPlayer.getState().then(e => {
                        this.emit(r.STATE_CHANGED, {
                            state: e
                        })
                    })
                }
                playTracks(e, t) {
                    return this._autoActivateElement && this._listPlayer.activateElement(), new Promise(t => {
                        t(c.create({
                            tracks: e
                        }))
                    }).then(e => this._listPlayer.play(e, t))
                }
                playList(e, t) {
                    return this._autoActivateElement && this._listPlayer.activateElement(), this._listPlayer.play(e, t)
                }
                getState() {
                    return this.getCurrentState()
                }
                getCurrentState() {
                    return this._listPlayer.getState()
                }
                pause() {
                    return this._listPlayer.pause()
                }
                resume() {
                    return this._listPlayer.resume()
                }
                togglePlay() {
                    return this._listPlayer.togglePlay()
                }
                stop() {
                    return this._listPlayer.stop(a.By.END_PLAY)
                }
                seek(e) {
                    return this._listPlayer.seek(e)
                }
                nextTrack() {
                    return this._listPlayer.next(a.By.FORWARD_BUTTON)
                }
                previousTrack() {
                    return this._listPlayer.previous(a.By.BACK_BUTTON)
                }
                getVolume() {
                    return this._listPlayer.getVolume()
                }
                setVolume(e) {
                    return this._listPlayer.setVolume(e)
                }
                setPlaybackSpeed(e) {
                    return this._listPlayer.setPlaybackSpeed(e)
                }
                setMuted(e) {
                    return this._listPlayer.setMuted(e)
                }
                activateElement() {
                    return this._listPlayer.activateElement()
                }
                preloadTrack(e) {
                    return this._listPlayer.preloadTrack(e)
                }
                hideSubtitles() {
                    return this._listPlayer.hideSubtitles()
                }
                showSubtitles() {
                    return this._listPlayer.showSubtitles()
                }
                getSubtitleLanguages() {
                    return this._listPlayer.getSubtitleLanguages()
                }
                setSubtitleLanguage(e) {
                    return this._listPlayer.setSubtitleLanguage(e)
                }
                areSubtitlesShown() {
                    return this._listPlayer.areSubtitlesShown()
                }
                getActiveSubtitleLanguage() {
                    return this._listPlayer.getActiveSubtitleLanguage()
                }
                getMediaConfig() {
                    return this._listPlayer.getMediaConfig()
                }
                deactivateSubtitleEvents() {
                    return this._listPlayer.deactivateCueEvents()
                }
                activateSubtitleEvents() {
                    return this._listPlayer.activateCueEvents()
                }
                setMediaPlaybackMode(e) {
                    return this._listPlayer.setMediaPlaybackMode(e)
                }
                setPlayerVisibility(e) {
                    return this._listPlayer.setIsVideoVisible(e)
                }
                setIsVideoVisible(e) {
                    return this._listPlayer.setIsVideoVisible(e)
                }
                setVideoSurface(e) {
                    return this._listPlayer.setVideoSurface(e)
                }
                getPlayerVisibility() {
                    return Promise.resolve(!1)
                }
            }
            Object.assign(Object.assign({}, s.TransportErrors), a.I);
            let f = h.create,
                p = c.create;

            function E(e) {
                var t, i, r, s, o, l, d;
                let {
                    transport: u,
                    autoActivateElement: _,
                    config: h
                } = e, c = null == h ? void 0 : h.mux, f = (0, a.o$)(Object.assign(Object.assign({}, h), {
                    loggerOptions: {
                        platform: e.platform_identifier,
                        disableMux: null == (i = null != (t = null == c ? void 0 : c.disable) ? t : null == h ? void 0 : h.disableMux) || i,
                        muxEnvKey: null != (r = null == c ? void 0 : c.envKey) ? r : null == h ? void 0 : h.muxEnvKey,
                        muxCustomDimensions: null == c ? void 0 : c.customDimensions,
                        deviceInfo: null != (s = null == c ? void 0 : c.deviceInfo) ? s : null == (o = null == h ? void 0 : h.loggerOptions) ? void 0 : o.deviceInfo
                    },
                    sdkId: `overture:${n.A.version}`,
                    transport: u.toPublic(),
                    audioProcessorOptions: {
                        disable: null == (d = null == (l = null == h ? void 0 : h.audioProcessorOptions) ? void 0 : l.disable) || d
                    }
                })).then(e => e.player), p = a.is.create({
                    trackPlayer: f
                });
                return m.create({
                    listPlayer: p,
                    playerPromise: f,
                    transport: u,
                    autoActivateElement: _
                })
            }
        },
        28069: (e, t, i) => {
            "use strict";
            i.d(t, {
                UN: () => d,
                I: () => A.I,
                Jc: () => L.J,
                Sn: () => m,
                is: () => t_,
                oz: () => n,
                TG: () => a,
                _8: () => P.J,
                d2: () => p,
                By: () => td.B,
                LW: () => g,
                o$: () => tc
            });
            var r, a, n, s, o, l, d, u, _, h, c, m, f, p, E, g, y = i(96816),
                v = i(13139),
                b = i(8159),
                T = i(42669),
                R = i(29559),
                S = i(59371);
            ! function(e) {
                e.URL = "URL", e.MSE = "MSE"
            }(r || (r = {}));
            var P = i(59490),
                L = i(38859),
                A = i(33985);
            ! function(e) {
                e.SUCCESS = "RESULT_SUCCESS", e.INVALID = "RESULT_INVALID", e.FORBIDDEN = "RESULT_FORBIDDEN", e.OUT_OF_BOUNDS = "RESULT_OUT_OF_BOUNDS", e.NO_LIST = "RESULT_NO_LIST", e.NO_TRACK = "RESULT_NO_TRACK", e.LIST_END = "RESULT_LIST_END", e.INVALID_TRACK = "RESULT_INVALID_TRACK", e.CANCELLED = "CANCELLED", e.NO_TRACK_PLAYER = "NO_TRACK_PLAYER"
            }(a || (a = {})),
            function(e) {
                e.MP3 = "MP3", e.MP4 = "MP4", e.MP4_DUAL = "MP4_DUAL", e.MP4_CBCS = "MP4_CBCS", e.MP4_FLAC = "MP4_FLAC", e.MANIFEST_ID = "MANIFEST_ID", e.AD_MANIFEST = "AD_MANIFEST", e.GENERIC_MEDIA = "GENERIC_MEDIA"
            }(n || (n = {})),
            function(e) {
                e.FRAGMENT_FETCHED = "fragment_fetched", e.FRAGMENT_FETCH_ERROR = "fragment_fetch_error", e.VIDEO_PROFILE_CHANGED = "video_profile"
            }(s || (s = {}));
            class I extends Error {
                constructor(e, t, i = {}) {
                    super(), this.unrecoverable = !1, this.listPlayerIgnore = !1, this.debug = {}, this.name = "PlaybackError", this.code = e, this.message = t, this.debug = i
                }
                static fatal(e, t) {
                    let i = new I(e, t);
                    return i.unrecoverable = !0, i
                }
            }
            var D = i(12204),
                k = i(78970);
            class C {
                constructor(e) {
                    if (this._estimate = 0, this._totalWeight = 0, e < 0) throw TypeError("Halflife must be set to a positive value.");
                    this._weightingDecrease = Math.exp(Math.log(.5) / e)
                }
                sample(e, t) {
                    let i = Math.pow(this._weightingDecrease, e),
                        r = t * (1 - i) + i * this._estimate;
                    isNaN(r) || (this._estimate = r, this._totalWeight += t)
                }
                getEstimate() {
                    return this._estimate / 1 - Math.pow(this._weightingDecrease, this._totalWeight)
                }
            }
            class O {
                constructor(e = 4e5) {
                    this._totalBytes = 0, this._overrideBitrate = 0, this._currentBandwidth = e, this._short = new C(2), this._long = new C(5), this._init()
                }
                _init() {
                    if ("undefined" == typeof navigator) return;
                    let e = navigator;
                    e.connection && e.connection.downlink && (this._currentBandwidth = 1e6 * e.connection.downlink, this._onConnectionChange = this._onConnectionChange.bind(this), e.connection.addEventListener("change", this._onConnectionChange))
                }
                _onConnectionChange(e) {
                    let t = e.target.downlink || 0;
                    this._setBandwidth(t)
                }
                _setBandwidth(e) {
                    this._currentBandwidth = 1e6 * e
                }
                getBandwidthEstimate() {
                    return this._overrideBitrate ? this._overrideBitrate : this._totalBytes < 128e3 ? this._currentBandwidth : Math.min(this._short.getEstimate(), this._long.getEstimate())
                }
                sample(e, t) {
                    if (e < 16e3) return;
                    let i = t / 1e3,
                        r = 8 * e / i;
                    this._totalBytes += e, this._short.sample(i, r), this._long.sample(i, r)
                }
                overrideBitrate(e) {
                    e <= 0 ? this._overrideBitrate = 0 : this._overrideBitrate = e
                }
            }
            var w = i(91952);
            ! function(e) {
                e.SHOWING = "showing", e.HIDDEN = "hidden", e.DISABLED = "disabled"
            }(o || (o = {}));
            let N = Array.prototype.slice,
                M = "function" == typeof Array.from ? e => Array.from(e) : e => N.call(e);

            function U(e, t) {
                for (let i of M(e.getElementsByTagName(t))) e.removeChild(i)
            }
            var F = i(49229);

            function B(e) {
                return {
                    id: e.id,
                    text: e.text
                }
            }
            let x = "visible",
                G = "hidden",
                Y = /^[A-Za-z]{2,4}([_-][A-Za-z]{4})?([_-]([A-Za-z]{2}|[0-9]{3}))?$|[A-Za-z]{2,3}-x-cc/;
            class V extends b.bk {
                constructor(e) {
                    super(), this._isVisible = !1, this._player = null, this._crossOrigin = null, this._currentVideoContent = null, this._unsubscribers = [], this._displayedCues = [], this._deactivateListeners = !1, this._activeLanguage = void 0, this._preferredLanguage = e.language.toLowerCase(), e.deactivateListeners && (this._deactivateListeners = !0), this._onEnter = this._onEnter.bind(this), this._onExit = this._onExit.bind(this), this._onLoadedMetadata = this._onLoadedMetadata.bind(this), this.setPlayer(e.player)
                }
                _subscribeToCueEvents(e) {
                    var t;
                    let {
                        track: i
                    } = e;
                    if (!i) throw Error("No track");
                    if (!(null == (t = i.cues) ? void 0 : t.length)) {
                        let t = () => {
                            this._subscribeToCueEvents(e), e.removeEventListener("load", t)
                        };
                        e.addEventListener("load", t);
                        return
                    }
                    this._displayedCues = i.activeCues ? Array.from(i.activeCues) : [], this._emitDisplayedCues();
                    for (let e = 0; e < i.cues.length; e++) {
                        let t = i.cues[e];
                        t && (t.addEventListener("enter", this._onEnter), t.addEventListener("exit", this._onExit), this._unsubscribers.push(() => {
                            t.removeEventListener("enter", this._onEnter), t.removeEventListener("exit", this._onExit)
                        }))
                    }
                }
                _unsubscribeFromCueEvents() {
                    this._unsubscribers.forEach(e => e()), this._unsubscribers = []
                }
                _onEnter(e) {
                    let t = e.target;
                    this._displayedCues.indexOf(t) > -1 || (this._displayedCues.push(t), this._emitDisplayedCues())
                }
                _onExit(e) {
                    let t = e.target,
                        i = this._displayedCues.indexOf(t);
                    i > -1 && (this._displayedCues.splice(i, 1), this._emitDisplayedCues())
                }
                _emitDisplayedCues() {
                    this.emit(P.J.PLAYER_DISPLAYED_CUES_CHANGED, Object.assign({
                        cues: this._displayedCues.map(B)
                    }, (0, F.P)()))
                }
                _updateVisibleState() {
                    var e, t;
                    if (!this._player) return;
                    let i = this.getActiveLanguage();
                    Array.from(null != (t = null == (e = this._player) ? void 0 : e.querySelectorAll("track")) ? t : []).forEach(e => {
                        e.style.visibility = this._isVisible ? x : G
                    });
                    let r = this._player.textTracks;
                    for (let e = 0, t = r.length; e < t; e++) {
                        let t = r[e];
                        t && (t.language.toLowerCase() === i ? t.mode = this._isVisible ? o.SHOWING : o.HIDDEN : t.mode = o.DISABLED)
                    }
                }
                _updateTextTracks() {
                    let e = this._player;
                    e && (e.readyState >= 1 ? this._switchActiveTextTrack() : this._currentVideoContent && e.addEventListener(P.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata))
                }
                _switchActiveTextTrack() {
                    let e = this._player;
                    if (!e || !this._currentVideoContent) return;
                    let t = this._updateActiveLanguage(),
                        i = null,
                        r = null;
                    M(e.getElementsByTagName("track")).forEach(e => {
                        e.default && (i = e), e.srclang.toLowerCase() === t && (r = e)
                    }), i && (i.default = !1, i.track.mode = o.DISABLED, this._unsubscribeFromCueEvents()), r && (r.default = !0, r.track.mode = this._isVisible ? o.SHOWING : o.HIDDEN, this._deactivateListeners || this._subscribeToCueEvents(r))
                }
                _onLoadedMetadata() {
                    let e = this._player;
                    if (e && (U(e, "track"), this._currentVideoContent)) {
                        for (let {
                                lang: t,
                                url: i
                            } of (e.crossOrigin = "anonymous", this._updateActiveLanguage(), this._currentVideoContent.getSubtitles())) {
                            let r = document.createElement("track");
                            r.label = `${t} subtitles`, r.kind = "subtitles", r.srclang = t, r.src = i, r.style.visibility = this._isVisible ? x : G, e.appendChild(r)
                        }
                        setTimeout(() => this._switchActiveTextTrack())
                    }
                }
                _updateActiveLanguage() {
                    if (!this._player || !this._currentVideoContent) {
                        this._activeLanguage = void 0;
                        return
                    }
                    let e = this._currentVideoContent.getSubtitleLanguages(),
                        t = this._preferredLanguage.split("-")[0],
                        i = null;
                    for (let r of e) {
                        let e = r.toLowerCase();
                        if (e === this._preferredLanguage) return this._activeLanguage = e, this._activeLanguage;
                        e.split("-")[0] === t && null === i && (i = e)
                    }
                    return this._activeLanguage = null != i ? i : "en-us", this._activeLanguage
                }
                getActiveLanguage() {
                    if (this._player && this._currentVideoContent) return this._activeLanguage
                }
                setVideoContent(e) {
                    var t;
                    this._unsubscribeFromCueEvents(), this._displayedCues = [], this._currentVideoContent = e, e ? this.emit(P.J.PLAYER_SUBTITLE_LANGUAGES_LOADED, Object.assign({
                        languages: null != (t = e.getSubtitleLanguages()) ? t : []
                    }, (0, F.P)())) : this.clear(), this._updateTextTracks()
                }
                setPlayer(e) {
                    var t;
                    let i = (null == e ? void 0 : e.tagName) === "VIDEO" ? e : null;
                    this._player !== i && this.clear(), this._player = i || null, this._crossOrigin = null != (t = null == i ? void 0 : i.crossOrigin) ? t : null, this._updateTextTracks()
                }
                getAvailableLanguages() {
                    var e, t;
                    return null != (t = null == (e = this._currentVideoContent) ? void 0 : e.getSubtitleLanguages()) ? t : []
                }
                setLanguage(e) {
                    if (!e.length) throw TypeError("Argument `code` must be a non-empty string. Hide subtitles using `hideSubtitles()`.");
                    if (!Y.test(e)) throw TypeError("Argument `code` must be a valid BCP 47 formatted language code");
                    this._preferredLanguage !== e.toLowerCase() && (this._preferredLanguage = e.toLowerCase(), this._switchActiveTextTrack())
                }
                hide() {
                    this._isVisible = !1, this._updateVisibleState()
                }
                show() {
                    this._isVisible = !0, this._updateVisibleState()
                }
                deactivateListeners() {
                    !this._deactivateListeners && this._player && (this._deactivateListeners = !0, this._unsubscribeFromCueEvents())
                }
                activateListeners() {
                    this._deactivateListeners && (this._deactivateListeners = !1, this._updateTextTracks())
                }
                areListenersActivated() {
                    return !this._deactivateListeners
                }
                clear() {
                    let e = this._player;
                    e && (this._unsubscribeFromCueEvents(), this._currentVideoContent = null, this._displayedCues = [], U(e, "track"), e.removeEventListener(P.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata), e.crossOrigin = this._crossOrigin)
                }
                visible() {
                    return this._isVisible
                }
            }
            class j extends Error {
                constructor(e = A.I.STORAGE_ERROR, t = "File Error") {
                    super(t), this.canPlayNext = !0, this.debug = {}, this.code = e, this.message = t, this.name = "FileError"
                }
            }
            class q {
                constructor(e) {
                    this._mediaType = e.mediaType, this._fileId = e.fileId, this._uri = e.uri, this._audioGain = e.audioGain, this._logData = e.logData, this._hasNonFatalErrors = !!e.hasNonFatalErrors, this._disableCache = e.disableCache, this._keySystemInfo = e.keySystemInfo, this._licenseEndpoint = e.licenseEndpoint, this._mediaFormat = e.mediaFormat, this._mediator = e.mediator, this._noAuth = e.noAuth, this._contentMetadata = e.contentMetadata, this._mediaPlaybackMode = e.mediaPlaybackMode
                }
                getFileId() {
                    return this._fileId
                }
                getAudioGain() {
                    return this._audioGain
                }
                getMediaType() {
                    return this._mediaType
                }
                getLogData() {
                    return this._logData
                }
                setLogData(e) {
                    this._logData = e
                }
                toLogJSON() {
                    return {
                        uri: this._uri,
                        fileId: this._fileId,
                        mediaFormat: this._mediaFormat,
                        mediaURL: this._mediaURL
                    }
                }
                hasNonFatalErrors() {
                    return this._hasNonFatalErrors
                }
                getContentMetadata() {
                    return this._contentMetadata || {}
                }
                getMediaPlaybackMode() {
                    var e;
                    return null != (e = this._mediaPlaybackMode) ? e : null
                }
                setMediaPlaybackMode(e) {
                    this._mediaPlaybackMode = e
                }
                getInitParams() {
                    return this.isProtected() ? {
                        initDataType: this._protection,
                        initData: this._pssh
                    } : null
                }
                getKeySystemInfo() {
                    var e;
                    return null != (e = this._keySystemInfo) ? e : null
                }
                getLicenseEndpoint() {
                    var e;
                    return null != (e = this._licenseEndpoint) ? e : null
                }
            }
            let H = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                J = {},
                K = {};
            ! function() {
                for (let e = 0, t = H.length; e < t; ++e) K[H[e]] = e;
                for (let e = 0; e < 16; ++e) J["0123456789abcdef" [e]] = e;
                for (let e = 0; e < 16; ++e) J["0123456789ABCDEF" [e]] = e
            }();
            let W = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                $ = (() => {
                    let e = [];
                    for (let t = 0; t < 256; ++t) e[t] = 255;
                    for (let t = 0; t < W.length; ++t) e[W.charCodeAt(t)] = t;
                    return String.fromCharCode(...e)
                })(),
                Q = function(e) {
                    let t, i, r = String(e),
                        a = [],
                        n = r.length,
                        s = 0;
                    for (;;) {
                        do t = $.charCodeAt(255 & r.charCodeAt(s++)); while (255 === t && s < n);
                        do i = $.charCodeAt(255 & r.charCodeAt(s++)); while (255 === i && s < n);
                        if (255 === i) break;
                        a.push((t << 2 | i >> 4) & 255);
                        do t = $.charCodeAt(255 & r.charCodeAt(s++)); while (255 === t && s < n);
                        if (255 === t) break;
                        a.push((i << 4 | t >> 2) & 255);
                        do i = $.charCodeAt(255 & r.charCodeAt(s++)); while (255 === i && s < n);
                        if (255 === i) break;
                        a.push((t << 6 | i) & 255)
                    }
                    if (a.length < 4096) return String.fromCharCode(...a);
                    let o = 0,
                        l = [];
                    do l.push(String.fromCharCode(...a.slice(o, o + 4096))), o += 4096; while (o < a.length);
                    return l.join("")
                };

            function z(e) {
                let t = Q(e),
                    i = new Uint8Array(t.length);
                for (let e = 0, r = t.length; e < r; e++) i[e] = t.charCodeAt(e);
                return i
            }
            "undefined" != typeof window && window.btoa && window.atob && (Q = e => window.atob(e));
            let X = /avc1\.(([0-9a-f]{2})[0-9a-f]{2}([0-9a-f]{2}))/;

            function Z(e, t) {
                let i = e.toLowerCase().match(X),
                    r = t.toLowerCase().match(X);
                if (!i || !r) return !1;
                let [, a, n, s] = i, [, o, l, d] = r;
                return a === o || "4d" === n && "4d" === l && parseInt(s, 16) >= parseInt(d, 16)
            }

            function ee(e) {
                let {
                    codec: t,
                    formats: i,
                    profiles: r,
                    encryptionIndex: a,
                    disallowProfile: n,
                    preferredVideoResolution: s,
                    allowMixedAVC1Codecs: o
                } = e;
                for (let e of i) {
                    let i = [],
                        u = "spotify/unknown-mimeType",
                        _ = "unknown-codec";
                    for (let s of r) {
                        var l, d;
                        let r = "audio_codec" in s ? s.audio_codec : s.video_codec;
                        !(!(t in s) || void 0 !== a && Array.isArray(s.encryption_indices) && -1 === s.encryption_indices.indexOf(a) || (l = s, (d = n) && d(Object.assign({
                            mimeType: l.mime_type
                        }, "video_codec" in l ? {
                            type: "video",
                            codec: l.video_codec,
                            bitrate: l.video_bitrate,
                            height: l.video_height,
                            width: l.video_width,
                            resolution: l.video_resolution
                        } : {
                            type: "audio",
                            codec: l.audio_codec,
                            bitrate: l.audio_bitrate
                        })))) && ("unknown-codec" === _ && s.mime_type === e.mimeType && (r === e.codec || Z(e.codec, r)) ? (u = e.mimeType, _ = o ? e.codec : r, i.push(s), s.__effective_codec = e.codec) : s.mime_type === u && (r === _ || o && Z(_, r)) && (i.push(s), s.__effective_codec = _))
                    }
                    if (i.length) return function(e, t) {
                        return e.sort((e, i) => {
                            if ("video_bitrate" in e && "video_bitrate" in i) return t ? e.video_resolution === i.video_resolution ? e.video_bitrate - i.video_bitrate : e.video_resolution - i.video_resolution : e.video_bitrate - i.video_bitrate;
                            return e.max_bitrate - i.max_bitrate
                        })
                    }(i, s)
                }
                return []
            }

            function et(e) {
                if (!e) return;
                let t = e.__effective_codec || ("audio_codec" in e ? e.audio_codec : e.video_codec);
                return `${e.mime_type};codecs="${t}"`
            }
            class ei extends q {
                constructor(e) {
                    var t, i, r, a, n;
                    super(e), this._supportedFormats = {
                        audio: [],
                        video: []
                    }, this._baseURL = "", this._fallbackURLs = [], this._loaded = !1, this._initTemplate = "", this._segmentTemplate = "", this._segmentLength = 0, this._assetID = "", this._segments = [], this._duration = 0, this._videoProfiles = {
                        selected: null,
                        available: [],
                        backgrounded: []
                    }, this._audioProfiles = {
                        selected: null,
                        available: []
                    }, this._subtitleLanguages = [], this._subtitleTemplate = "", this._trackingData = null, this._resolver = e.resolver, this._keySystemInfo = e.keySystemInfo, this._keySystemSettings = e.keySystemSettings, this._supportedFormats = {
                        audio: null != (i = null == (t = this._keySystemInfo) ? void 0 : t.audioFormats) ? i : [],
                        video: null != (a = null == (r = this._keySystemInfo) ? void 0 : r.videoFormats) ? a : []
                    }, this._disallowProfile = e.disallowProfile, this._videoResolution = e.videoResolution, this._enableAbrOnElementSize = e.enableAbrOnElementSize, this._allowMixedAVC1Codecs = e.allowMixedAVC1Codecs, this._trackingData = e.trackingData, this._contentMetadata = e.metadata, this._mediaPlaybackMode = null != (n = e.mediaPlaybackMode) ? n : "video"
                }
                _calculateSegments(e) {
                    this._duration = e.end_time_millis / 1e3;
                    let t = this._segmentLength;
                    this._initSegment = {
                        index: -1,
                        init: !0,
                        cacheBufferSet: !1,
                        timeStart: -1,
                        timeEnd: -1,
                        byteRanges: {}
                    };
                    let i = [];
                    for (let e = 0, r = 0; e < this._duration; r++, e += t) i.push({
                        index: r,
                        cacheBufferSet: !e && !this._disableCache,
                        timeStart: e,
                        timeEnd: e + t,
                        byteRanges: {}
                    });
                    i[i.length - 1].isFinal = !0, this._segments = i
                }
                _parseManifest(e) {
                    var t, i, r;
                    let a, n, s = e.contents[0];
                    if (!s) return (a = new j(A.I.FILE_MALFORMED_SEEKTABLE, "Malformed seektable: no contents.")).track = this.toLogJSON(), Promise.reject(a);
                    if (this._fallbackURLs = e.base_urls.slice(), this._baseURL = null != (t = this._fallbackURLs.shift()) ? t : "", this._initTemplate = e.initialization_template, this._segmentTemplate = e.segment_template, this._segmentLength = s.segment_length, null == (i = s.encryption_infos) ? void 0 : i.length) {
                        let e, t = s.encryption_infos,
                            i = this._keySystemSettings.commonName;
                        for (let r = 0, a = t.length; r < a; r++) {
                            let a = t[r];
                            if (a && a.key_system === i) {
                                n = r, e = a.encryption_data, this._licenseEndpoint || (this._licenseEndpoint = `@webgate${a.license_server_endpoint}`);
                                break
                            }
                        }
                        if (!e) return (a = new j(A.I.FILE_FORMAT_NOT_SUPPORTED, "KeySystem does not support the file format.")).track = this.toLogJSON(), Promise.reject(a);
                        switch (this._keySystemSettings.commonName) {
                            case "widevine":
                            case "playready":
                                this._protection = "cenc";
                                try {
                                    this._pssh = z(e)
                                } catch (e) {
                                    return (a = new j(A.I.FILE_MALFORMED_PSSH, "Invalid PSSH value.")).track = this.toLogJSON(), Promise.reject(a)
                                }
                                break;
                            case "fairplay":
                                this._protection = "cbcs", this._pssh = new Uint8Array(0);
                                try {
                                    this._assetID = s.encoding_id
                                } catch (e) {
                                    return (a = new j(A.I.FILE_MALFORMED_PSSH, "Invalid PSSH value.")).track = this.toLogJSON(), Promise.reject(a)
                                }
                                break;
                            default:
                                return (a = new j(A.I.FILE_FORMAT_NOT_SUPPORTED, "KeySystem does not support the file format.")).track = this.toLogJSON(), Promise.reject(a)
                        }
                    }
                    return this._videoProfiles.available = ee({
                        codec: "video_codec",
                        formats: this._supportedFormats.video,
                        profiles: s.profiles,
                        encryptionIndex: n,
                        disallowProfile: this._disallowProfile,
                        preferredVideoResolution: this._videoResolution,
                        allowMixedAVC1Codecs: this._allowMixedAVC1Codecs
                    }), this._videoProfiles.backgrounded = ee({
                        codec: "video_codec",
                        formats: this._supportedFormats.video,
                        profiles: s.background_profiles,
                        encryptionIndex: n,
                        disallowProfile: this._disallowProfile,
                        preferredVideoResolution: this._videoResolution,
                        allowMixedAVC1Codecs: this._allowMixedAVC1Codecs
                    }), this._audioProfiles.available = ee({
                        codec: "audio_codec",
                        formats: this._supportedFormats.audio,
                        profiles: s.profiles,
                        encryptionIndex: n,
                        disallowProfile: this._disallowProfile
                    }), this._calculateSegments(e), this._subtitleLanguages = e.subtitle_language_codes || [], (null == (r = e.subtitle_base_urls) ? void 0 : r.length) && e.subtitle_template ? this._subtitleTemplate = `${e.subtitle_base_urls[0]}${e.subtitle_template}` : this._subtitleTemplate = "", Promise.resolve()
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    if (this._loaded) return e.resolveLatency = 0, e.manifestLatency = 0, Promise.resolve(this);
                    if (!this._fileId) throw TypeError("Missing: provide either fileId or resolvedURL");
                    let t = (0, S.X)();
                    return this._resolver.getManifest(this._fileId, this._noAuth).then(i => (e.resolveLatency = 0, e.manifestLatency = (0, S.r)(t), this._parseManifest(i))).then(() => (this._loaded = !0, this))
                }
                isProtected() {
                    return !!this._protection && !!this._pssh
                }
                setVideoResolution(e) {
                    this._videoResolution = e
                }
                getMediaProfileInfo() {
                    return {
                        audio: this._audioProfiles,
                        video: this._videoProfiles
                    }
                }
                getSubtitles() {
                    return this._subtitleLanguages.map(e => ({
                        lang: e,
                        url: this._subtitleTemplate.replace("{{language_code}}", e)
                    }))
                }
                getSubtitleLanguages() {
                    return this._subtitleLanguages
                }
                getCurrentBitrates() {
                    var e, t, i, r;
                    return {
                        audio: null != (t = null == (e = this._audioProfiles.selected) ? void 0 : e.audio_bitrate) ? t : 0,
                        video: null != (r = null == (i = this._videoProfiles.selected) ? void 0 : i.video_bitrate) ? r : 0
                    }
                }
                getTrackingEvents() {
                    return this._trackingData
                }
                getTrackingEventData(e) {
                    let t = this._trackingData ? this._trackingData[e] : null;
                    return t ? {
                        tracking_event: e,
                        urls: t.urls
                    } : null
                }
            }

            function er(e) {
                return !!e && "getMediaProfileInfo" in e
            }

            function ea(e) {
                return !!e && "getCurrentBitrates" in e && "canLowerBitrate" in e && "adapt" in e
            }

            function en(e) {
                return !!e && "getTrackingEventData" in e && "getTrackingEvents" in e
            }
            class es {
                constructor(e) {
                    this._bandwidthEstimator = e.bandwidthEstimator
                }
                static create(e) {
                    return new es(e)
                }
                getSample(e, t) {
                    var i, a, n, s, o, l, d;
                    let u = this._bandwidthEstimator.getBandwidthEstimate(),
                        _ = function(e, t) {
                            let i = e.length;
                            for (let r = 0; r < i; r++)
                                if (e.start(r) <= t && t <= e.end(r)) return (e.end(r) - t) * 1e3;
                            return 0
                        }(e.buffered, e.currentTime);
                    if ("audio" === t.getMediaType() && t.strategy === r.MSE) {
                        let e = null == (a = null == (i = t.getSegmentForTime(0)) ? void 0 : i.bufferSet) ? void 0 : a.audio,
                            r = null == e ? void 0 : e.bitrate;
                        return {
                            bandwidth: u,
                            bufferAvailability: _,
                            audio: {
                                mimeType: null == e ? void 0 : e.mimeType,
                                bitrate: r
                            }
                        }
                    }
                    if (er(t)) {
                        let {
                            audio: i,
                            video: r
                        } = t.getMediaProfileInfo(), a = "getVideoPlaybackQuality" in e ? e.getVideoPlaybackQuality() : {
                            creationTime: void 0,
                            droppedVideoFrames: void 0,
                            totalVideoFrames: void 0
                        };
                        return {
                            bandwidth: u,
                            bufferAvailability: _,
                            video: {
                                creationTime: a.creationTime,
                                droppedVideoFrames: a.droppedVideoFrames,
                                totalVideoFrames: a.totalVideoFrames,
                                bitrate: null == (n = r.selected) ? void 0 : n.video_bitrate,
                                availableBitrates: r.available.map(e => e.video_bitrate),
                                height: null == (s = r.selected) ? void 0 : s.video_height,
                                width: null == (o = r.selected) ? void 0 : o.video_width,
                                resolution: null == (l = r.selected) ? void 0 : l.video_resolution,
                                mimeType: et(r.selected)
                            },
                            audio: {
                                bitrate: null == (d = i.selected) ? void 0 : d.audio_bitrate,
                                mimeType: et(i.selected)
                            }
                        }
                    }
                    return null
                }
            }
            let eo = v.m.forTag("playback.audio_processor");
            class el {
                constructor(e) {
                    if (this._audioContext = null, this._mediaElementSource = null, this._gainNode = null, this._nodes = [], null == e ? void 0 : e.disable) return void eo.info("AudioProcessor disabled");
                    if (this._audioContext = (null == e ? void 0 : e.audioContext) || ("undefined" != typeof AudioContext ? new AudioContext : null), !this._audioContext) return void eo.warn("The AudioContext API is not supported. Any future operation related to `AudioProcessor` will be skipped.");
                    this._gainNode = this._audioContext.createGain(), this._buildNodePipeline(null == e ? void 0 : e.nodes)
                }
                static create(e) {
                    return new el(e)
                }
                _setMediaElementSource(e) {
                    var t;
                    this._audioContext && (this._mediaElementSource && (eo.info("Disconnecting previous media element source"), this._mediaElementSource.disconnect()), eo.info("Creating new media element source"), this._mediaElementSource = this._audioContext.createMediaElementSource(e) || null, this._mediaElementSource.connect(null != (t = this._nodes[0]) ? t : this._audioContext.destination))
                }
                _buildNodePipeline(e = []) {
                    var t;
                    if (!this._audioContext) return;
                    for (let e of (eo.info("Disconnecting previous nodes"), this._nodes)) e.disconnect();
                    let i = [this._gainNode, ...e],
                        r = null;
                    for (let e of i) r && r.connect(e), r = e;
                    null == (t = i[i.length - 1]) || t.connect(this._audioContext.destination), eo.info("Node pipeline built"), this._nodes = i
                }
                setPlayer(e) {
                    var t;
                    if (e) {
                        if ((null == (t = this._mediaElementSource) ? void 0 : t.mediaElement) === e) return void eo.info("The new player is the same as the current player");
                        this._setMediaElementSource(e)
                    }
                }
                getPlayer() {
                    var e;
                    return (null == (e = this._mediaElementSource) ? void 0 : e.mediaElement) || null
                }
                setAudioGain(e = 0) {
                    if (!this._gainNode) return eo.info("The default gain node is not available"), !1;
                    let t = Math.pow(10, e / 20);
                    return this._gainNode.gain.value = t, eo.info("Main gain set to", t), !0
                }
                getAudioContext() {
                    return this._audioContext
                }
                resume() {
                    return this._audioContext && "running" !== this._audioContext.state ? this._audioContext.resume() : Promise.resolve()
                }
                suspend() {
                    return this._audioContext && "suspended" !== this._audioContext.state ? this._audioContext.suspend() : Promise.resolve()
                }
                destroy() {
                    var e;
                    this._audioContext && (null == (e = this._mediaElementSource) || e.connect(this._audioContext.destination)), this._nodes = [], this._audioContext = null, this._gainNode = null, this._mediaElementSource = null, eo.info("The AudioProcessor is destroyed")
                }
            }
            var ed = i(17211);
            let eu = v.m.forTag("playback.media_source_manager");

            function e_(e) {
                if (!e) return "";
                let t = [];
                for (let i in e) {
                    if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
                    let r = e[i] ? `="${e[i]}"` : "";
                    t.push(`${i}${r}`)
                }
                return t.length ? `; ${t.join("; ")}` : ""
            }
            class eh extends b.bk {
                constructor(e) {
                    super(), this._mediaSource = null, this._sourceBuffers = {}, this._currentInitSegments = {}, this._updateQueue = [], this._playId = 0, this._lastBufferClearTime = (0, S.X)(), this._customSourceBufferParams = "";
                    let {
                        mimeTypes: t,
                        customSourceBufferParams: i,
                        disableBufferAbort: r
                    } = e;
                    this._mimeTypes = t, this._customSourceBufferParams = e_(i), this._disableBufferAbort = !!r, this._onSourceOpen = this._onSourceOpen.bind(this), this._onSourceClose = this._onSourceClose.bind(this), this._onUpdateEnd = this._onUpdateEnd.bind(this), this.dequeueUpdates = this.dequeueUpdates.bind(this), e.noInit || this._init()
                }
                static create(e) {
                    return new eh(e)
                }
                _init() {
                    this._mediaSource = new MediaSource, this._mediaSource.addEventListener(P.J.MEDIA_SOURCE_OPEN, this._onSourceOpen), this._mediaSource.addEventListener(P.J.MEDIA_SOURCE_CLOSE, this._onSourceClose), this._sourceBuffers = {}, this._currentInitSegments = {}
                }
                _onSourceOpen() {
                    var e;
                    eu.info("MediaSource opened.");
                    let t = this._mediaSource;
                    if ((null == (e = null == t ? void 0 : t.sourceBuffers) ? void 0 : e.length) === 0 && (null == t ? void 0 : t.readyState) === "open") {
                        let e = this._mimeTypes;
                        for (let i of (eu.info("Creating source buffers for MIME types", e), ["video", "audio"])) {
                            let r = e[i];
                            if (r) {
                                let e = r + this._customSourceBufferParams;
                                try {
                                    let i = t.addSourceBuffer(e);
                                    i.addEventListener(P.J.SOURCE_BUFFER_UPDATE_END, this._onUpdateEnd), this._sourceBuffers[r] = i
                                } catch (e) {
                                    if ("QuotaExceededError" === e.name) throw I.fatal(A.I.PLAYER_PLAYBACK_ERROR, "MediaSourceManager: addSourceBuffer() failed. User agent can not handle any more SourceBuffer objects.");
                                    if ("InvalidStateError" === e.name) throw I.fatal(A.I.PLAYER_PLAYBACK_ERROR, 'MediaSourceManager: addSourceBuffer() failed. MediaSource is not in the "open" readyState.');
                                    if ("NotSupportedError" === e.name) throw I.fatal(A.I.PLAYER_PLAYBACK_ERROR, "MediaSourceManager: addSourceBuffer() failed. Given MIME type is not supported/compatible.");
                                    else throw I.fatal(A.I.PLAYER_PLAYBACK_ERROR, "MediaSourceManager: addSourceBuffer() failed.")
                                }
                            }
                        }
                    }
                    this.dequeueUpdates(), this.emit(P.J.BUFFER_SOURCE_OPEN, Object.assign({}, (0, F.P)()))
                }
                _onSourceClose() {
                    eu.info("MediaSource closed."), this._destroySourceBuffers(), this.emit(P.J.BUFFER_SOURCE_CLOSE, Object.assign({}, (0, F.P)()))
                }
                _destroySourceBuffers() {
                    let e = this._mediaSource;
                    if (!e) return;
                    let t = e.sourceBuffers;
                    if (t.length)
                        for (let i = 0, r = t.length; i < r; i++) {
                            let r = t[i];
                            if (r) {
                                r.removeEventListener(P.J.SOURCE_BUFFER_UPDATE_END, this._onUpdateEnd);
                                try {
                                    e.removeSourceBuffer(r), eu.info("Removed source buffer")
                                } catch (e) {
                                    eu.warn("Failed to remove sourcebuffer", e)
                                }
                            }
                        }
                    this._sourceBuffers = {}, this._currentInitSegments = {}
                }
                _onUpdateEnd() {
                    this.dequeueUpdates(), this.emit(P.J.BUFFER_UPDATE_END, Object.assign({}, (0, F.P)()))
                }
                _endUpdate(e) {
                    var t;
                    this._isUpdating() ? this._updateQueue.push(e) : (null == (t = this._mediaSource) ? void 0 : t.readyState) === "open" && (eu.info("Signals end of stream."), this._mediaSource.endOfStream(), e.resolve && e.resolve(!0))
                }
                _durationUpdate(e) {
                    this._isUpdating() ? this._updateQueue.push(e) : (this._mediaSource && (this._mediaSource.duration = e.duration), e.resolve && e.resolve(!0))
                }
                _isUpdating() {
                    if (!this._mediaSource) return !1;
                    let e = this._mediaSource.sourceBuffers;
                    for (let t = 0, i = e.length; t < i; t++) {
                        let i = e[t];
                        if (i && i.updating) return !0
                    }
                    return !1
                }
                _appendUpdate(e) {
                    var t, i;
                    let r = this._sourceBuffers[e.mimeType];
                    if (!r || r.updating) return void this._updateQueue.push(e);
                    let a = e.buffer;
                    if (e.segment.init && this._currentInitSegments[e.mimeType] === e.profileId) {
                        null == (t = e.resolve) || t.call(e, !0), Promise.resolve().then(this.dequeueUpdates);
                        return
                    }
                    if (e.initBuffer && e.buffer && this._currentInitSegments[e.mimeType] !== e.profileId) {
                        let t = new Uint8Array(e.initBuffer.byteLength + e.buffer.byteLength);
                        t.set(new Uint8Array(e.initBuffer), 0), t.set(new Uint8Array(e.buffer), e.initBuffer.byteLength), a = t.buffer
                    }
                    try {
                        r.appendBuffer(a)
                    } catch (i) {
                        let t = !1;
                        "QuotaExceededError" === i.name ? (eu.warn("Failed to append buffer: exceeded quota."), t = !0, this.emitSync(P.J.BUFFER_QUOTA_EXCEEDED, Object.assign({}, (0, F.P)()))) : eu.warn("Failed to append buffer", i), new Promise(e => {
                            t ? setTimeout(e, 1e3) : e()
                        }).then(() => {
                            var t;
                            null == (t = e.reject) || t.call(e, i), this.dequeueUpdates()
                        }).then(() => {
                            e.init && this._updateQueue.push(e)
                        });
                        return
                    }
                    let n = a.byteLength > e.buffer.byteLength;
                    (e.segment.init || n) && (this._currentInitSegments[e.mimeType] = e.profileId), null == (i = e.resolve) || i.call(e, !0), n ? eu.info(`Injected combined init segment and playable segment (${e.mimeType}, ${e.profileId})`) : e.init && eu.info(`Injected individual init segment (${e.mimeType}, ${e.profileId})`)
                }
                _abortUpdate(e) {
                    var t;
                    null == (t = e.resolve) || t.call(e, !1), Promise.resolve().then(this.dequeueUpdates)
                }
                dequeueUpdates() {
                    let e = this._updateQueue.shift();
                    e && this.tryUpdate(e)
                }
                tryUpdate(e) {
                    if (e.playId !== this._playId) {
                        eu.info("Try update dropped: playId has changed"), this._abortUpdate(e);
                        return
                    }
                    if (e.timestamp < this._lastBufferClearTime) {
                        eu.info("Try update dropped: update is older than the last clear"), this._abortUpdate(e);
                        return
                    }
                    let t = this._mediaSource;
                    t && "open" !== t.readyState && "ended" !== t.readyState ? this._updateQueue.push(e) : "end" === e.type ? this._endUpdate(e) : "duration" === e.type ? this._durationUpdate(e) : "append" === e.type && this._appendUpdate(e)
                }
                appendBufferData(e, t, i, r = (0, S.X)()) {
                    let a = [];
                    if (e.audio) {
                        let n = (0, ed.u)();
                        this.tryUpdate({
                            playId: i,
                            timestamp: r,
                            segment: t,
                            type: "append",
                            profileId: e.audio.profileId,
                            buffer: e.audio.buffer,
                            initBuffer: e.audio.initBuffer,
                            mimeType: e.audio.mimeType,
                            init: !!t.init,
                            resolve: n.resolve,
                            reject: n.reject
                        }), a.push(n.promise)
                    }
                    if (e.video) {
                        let n = (0, ed.u)();
                        this.tryUpdate({
                            playId: i,
                            timestamp: r,
                            segment: t,
                            type: "append",
                            profileId: e.video.profileId,
                            buffer: e.video.buffer,
                            initBuffer: e.video.initBuffer,
                            mimeType: e.video.mimeType,
                            init: !!t.init,
                            resolve: n.resolve,
                            reject: n.reject
                        }), a.push(n.promise)
                    }
                    return Promise.all(a)
                }
                endOfStream(e) {
                    this._mediaSource && "ended" !== this._mediaSource.readyState && this.tryUpdate({
                        playId: e,
                        timestamp: (0, S.X)(),
                        type: "end"
                    })
                }
                abort(e = !1) {
                    if (this._lastBufferClearTime = (0, S.X)(), this._disableBufferAbort) return void eu.info("MediaSource abort skipped; action disabled.");
                    let t = this._mediaSource;
                    if (t) {
                        let i = t.sourceBuffers;
                        for (let r = 0, a = i.length; r < a; r++) {
                            let a = i[r];
                            if ("open" === t.readyState && a) try {
                                a.abort();
                                let t = a.buffered;
                                if (e && t.length) {
                                    let e = t.start(0),
                                        i = t.end(t.length - 1);
                                    a.remove(e, i), eu.info("Cleared buffer range", e, i)
                                }
                            } catch (e) {
                                eu.warn("MediaSourceManager: sourceBuffer.abort() failed due to .abort() or .remove() operation.", e)
                            }
                        }
                    }
                    this._currentInitSegments = {}
                }
                destroy() {
                    let e = this._mediaSource;
                    e && (eu.info("Source destroyed"), e.removeEventListener("sourceopen", this._onSourceOpen), e.removeEventListener("sourceclose", this._onSourceClose), this._destroySourceBuffers(), this._mediaSource = null)
                }
                recreate(e) {
                    this.abort(), this.destroy(), this._mimeTypes = e.mimeTypes, e.customSourceBufferParams && (this._customSourceBufferParams = e_(e.customSourceBufferParams)), this._init()
                }
                setDuration(e) {
                    return new Promise(t => {
                        this.tryUpdate({
                            playId: this._playId,
                            timestamp: (0, S.X)(),
                            type: "duration",
                            duration: e,
                            resolve: t
                        })
                    })
                }
                getMediaSource() {
                    return this._mediaSource
                }
                setPlayId(e) {
                    this._playId = e
                }
                getPlayId() {
                    return this._playId
                }
            }
            let ec = v.m.forTag("playback.buffer_fill_operation");
            class em {
                constructor(e) {
                    var t;
                    this._batchSize = 1, this._prioritizeFirst = !1, this._segmentsToAppend = [], this._abortController = (0, T.createAbortControllerLike)(), this.status = "pending", this.timeStart = e.timeStart, this.timeEnd = e.timeEnd, this.done = new Promise(e => {
                        this._resolveDone = e
                    }), this._getBufferedTimeRanges = e.getBufferedTimeRanges, this._getBufferSetForSegment = e.getBufferSetForSegment, this._getSegmentsForRange = e.getSegmentsForRange, this._appendBufferData = e.appendBufferData, this._batchSize = null != (t = e.batchSize) ? t : 1, this._prioritizeFirst = !!e.prioritizeFirst
                }
                _filterBufferedSegments(e) {
                    let t = this._getBufferedTimeRanges(),
                        i = [];
                    if (null == t ? void 0 : t.length) e: for (let r of e) {
                        let e = t.length;
                        for (; e--;) {
                            let i = t.start(e),
                                a = t.end(e);
                            if (i <= r.timeStart && (a >= r.timeEnd || a + 1e-5 > r.timeEnd)) continue e
                        }
                        i.push(r)
                    } else i = e;
                    return i
                }
                _fill(e, t = !1) {
                    var i;
                    if (e.aborted) return;
                    let r = this._segmentsToAppend,
                        a = r.length,
                        n = r.splice(0, t ? 1 : Math.max(1, this._batchSize));
                    if (!n.length) {
                        this.status = "ended", null == (i = this._resolveDone) || i.call(this);
                        return
                    }
                    ec.log(`Segments to download: ${n.length}/${a}`);
                    let s = (0, S.X)();
                    Promise.all(n.map(t => this._getBufferSetForSegment(t, e).then(i => e.aborted ? Promise.resolve([!1]) : this._appendBufferData(i, t, s)))).then(t => {
                        var i, r;
                        if (!e.aborted) {
                            if (-1 !== [].concat(...t).indexOf(!1)) {
                                this.status = "failed", null == (i = this._resolveDone) || i.call(this), ec.warn(`Fill operation ${this.timeStart}-${this.timeEnd} append failed.`), this._clear();
                                return
                            }
                            if (this._segmentsToAppend.length) return void this._fill(e);
                            this.status = "ended", null == (r = this._resolveDone) || r.call(this), this._clear()
                        }
                    }, e => {
                        var t;
                        if (e.code === T.TransportErrors.HTTP_REQUEST_ABORTED) {
                            this.status = "aborted";
                            return
                        }
                        this.status = "failed", null == (t = this._resolveDone) || t.call(this), this._clear(), ec.warn(`Fill operation ${this.timeStart}-${this.timeEnd} failed.`, "QuotaExceededError" === e.name ? "Exceeded buffer quota" : e)
                    })
                }
                _clear() {
                    this._segmentsToAppend = []
                }
                start() {
                    var e;
                    if (this._abortController.signal.aborted || "pending" !== this.status) return this.done;
                    this.status = "started", ec.log("Starting fill operation for range", this.timeStart, this.timeEnd);
                    let t = this._getSegmentsForRange(this.timeStart, this.timeEnd);
                    return (this._segmentsToAppend = this._filterBufferedSegments(t), this._segmentsToAppend.length) ? this._fill(this._abortController.signal, this._prioritizeFirst) : (ec.warn("Fill operation ended early: all segments are buffered."), this.status = "ended", null == (e = this._resolveDone) || e.call(this)), this.done
                }
                abort() {
                    var e;
                    return "aborted" === this.status || ("started" === this.status && ec.info(`Fill operation ${this.timeStart}-${this.timeEnd} aborted.`), this.status = "aborted", null == (e = this._resolveDone) || e.call(this), this._abortController.abort(), this._clear()), this
                }
            }! function(e) {
                e[e.AUDIO = 12] = "AUDIO", e[e.VIDEO = 20] = "VIDEO"
            }(l || (l = {}));
            class ef extends b.bk {
                constructor(e, t = {}, i = {}) {
                    var r, a;
                    super(), this._bufferTarget = {
                        audio: l.AUDIO,
                        video: l.VIDEO
                    }, this._currentFillOperation = null, this._bufferedSegmentInfos = null, this._cachedBufferedSegmentInfo = null, this._tracker = e;
                    let {
                        customSourceBufferParams: n,
                        noInit: s,
                        disableBufferAbort: o
                    } = i;
                    this._bufferTarget.audio = (null == (r = i.bufferTarget) ? void 0 : r.audio) || l.AUDIO, this._bufferTarget.video = (null == (a = i.bufferTarget) ? void 0 : a.video) || l.VIDEO, this._mediaSourceManager = eh.create({
                        mimeTypes: t,
                        noInit: s,
                        customSourceBufferParams: n,
                        disableBufferAbort: o
                    }), this.proxyEmitAll(this._mediaSourceManager, {
                        [P.J.BUFFER_SOURCE_OPEN]: P.J.BUFFER_SOURCE_OPEN,
                        [P.J.BUFFER_SOURCE_CLOSE]: P.J.BUFFER_SOURCE_CLOSE,
                        [P.J.BUFFER_QUOTA_EXCEEDED]: P.J.BUFFER_QUOTA_EXCEEDED,
                        [P.J.BUFFER_UPDATE_END]: P.J.BUFFER_UPDATE_END
                    })
                }
                static create(e, t = {}, i = {}) {
                    return new ef(e, t, i)
                }
                _trackBufferedSegment(e, t, i) {
                    let r = this._bufferedSegmentInfos;
                    r || (r = Array(i), this._bufferedSegmentInfos = r);
                    let a = {
                        timeStart: e.timeStart,
                        timeEnd: e.timeEnd,
                        index: e.index,
                        audio: t.audio ? {
                            profileId: t.audio.profileId,
                            mimeType: t.audio.mimeType,
                            bitrate: t.audio.bitrate
                        } : void 0,
                        video: t.video ? {
                            profileId: t.video.profileId,
                            mimeType: t.video.mimeType,
                            bitrate: t.video.bitrate,
                            width: t.video.videoWidth,
                            height: t.video.videoHeight,
                            resolution: t.video.resolution
                        } : void 0
                    };
                    r[e.index] = a
                }
                _trackBufferingProgress(e) {
                    e.audio && e.audio.buffer && this._tracker.trackBytesDownloaded(e.audio.buffer.byteLength), e.video && e.video.buffer && this._tracker.trackBytesDownloaded(e.video.buffer.byteLength)
                }
                _trackBufferURLs(e) {
                    var t, i, r, a, n, s;
                    (null == (t = e.audio) ? void 0 : t.bandwidth) !== null && this._tracker.trackBufferURL((null == (i = e.audio) ? void 0 : i.bufferURL) || "", {
                        bandwidth: (null == (r = e.audio) ? void 0 : r.bandwidth) || 0
                    }), (null == (a = e.video) ? void 0 : a.bandwidth) !== null && this._tracker.trackBufferURL((null == (n = e.video) ? void 0 : n.bufferURL) || "", {
                        bandwidth: (null == (s = e.video) ? void 0 : s.bandwidth) || 0
                    })
                }
                dequeueUpdates() {
                    this._mediaSourceManager.dequeueUpdates()
                }
                abort(e = !1) {
                    var t;
                    null == (t = this._currentFillOperation) || t.abort(), this._currentFillOperation = null, this._mediaSourceManager.abort(e)
                }
                getMediaSource() {
                    return this._mediaSourceManager.getMediaSource()
                }
                destroy() {
                    this._mediaSourceManager.destroy()
                }
                checkBufferHealth(e, t, i) {
                    var r;
                    let a = this._currentFillOperation;
                    if (!i && (null == a ? void 0 : a.status) === "started") return;
                    let n = this._mediaSourceManager,
                        s = n.getMediaSource();
                    if (!s || "closed" === s.readyState) return;
                    let o = t;
                    if (o >= s.duration) {
                        let t = e.getFinalSegment();
                        t && (o = t.timeStart)
                    }
                    let l = function(e, t) {
                        var i;
                        let r = null == (i = e.sourceBuffers[e.sourceBuffers.length - 1]) ? void 0 : i.buffered;
                        if (r)
                            for (let e = 0; e < r.length; e++) {
                                let i = r.start(e),
                                    a = r.end(e);
                                if (i <= t && t <= a) return {
                                    start: i,
                                    end: a
                                }
                            }
                        return null
                    }(s, o);
                    if (l && !e.getSegmentAfterTime(l.end) && "ended" === s.readyState) return;
                    let d = "video" === e.getMediaType() ? this._bufferTarget.video : this._bufferTarget.audio,
                        u = null != (r = null == l ? void 0 : l.end) ? r : o,
                        _ = u - o;
                    if (_ > d) return;
                    let h = u + (d - _);
                    if (!a || "started" !== a.status || a.timeStart < u || a.timeEnd > h) {
                        null == a || a.abort();
                        let t = n.getPlayId();
                        this._currentFillOperation = new em({
                            timeStart: u,
                            timeEnd: h,
                            getBufferedTimeRanges: () => {
                                var e, t;
                                return null != (t = null == (e = s.sourceBuffers[s.sourceBuffers.length - 1]) ? void 0 : e.buffered) ? t : null
                            },
                            getBufferSetForSegment: (i, r) => e.getBufferSetForSegment(i, r).then(e => (this._trackBufferingProgress(e), this._trackBufferURLs(e), e), i => (t === n.getPlayId() && i.code !== T.TransportErrors.HTTP_REQUEST_ABORTED && this.emit(P.J.BUFFER_APPEND_ERROR, Object.assign({
                                error: i,
                                canPlayNext: !0,
                                track: e.toLogJSON()
                            }, (0, F.P)())), Promise.reject(i))),
                            getSegmentsForRange: (t, i = 1 / 0) => e.getSegmentsForRange(t, i),
                            appendBufferData: (i, r, a) => n.appendBufferData(i, r, t, a).then(a => (this._trackBufferedSegment(r, i, e.getSegmentsCount()), r.isFinal && (null == a ? void 0 : a.indexOf(!1)) === -1 && this._mediaSourceManager.endOfStream(t), a)),
                            prioritizeFirst: !l
                        }), this._currentFillOperation.start()
                    }
                }
                isPositionInCurrentFillRange(e, t) {
                    let i = this._currentFillOperation;
                    if ((null == i ? void 0 : i.status) !== "started") return !1;
                    let r = "video" === e.getMediaType() ? this._bufferTarget.video : this._bufferTarget.audio;
                    return i.timeStart >= t || i.timeEnd >= t + r
                }
                recreate(e) {
                    this._mediaSourceManager.recreate({
                        mimeTypes: e
                    }), this._bufferedSegmentInfos = null, this._cachedBufferedSegmentInfo = null
                }
                injectInitSegment(e) {
                    let t = this._mediaSourceManager,
                        i = t.getMediaSource();
                    if (!i || "closed" === i.readyState) return Promise.resolve(!1);
                    let r = e.getInitSegment();
                    if (!r) return Promise.resolve(!1);
                    let a = (0, S.X)(),
                        n = t.getPlayId();
                    return e.getInitBufferSet().then(e => t.appendBufferData(e, r, n, a)).then(() => !0)
                }
                setDuration(e) {
                    return this._mediaSourceManager.setDuration(e)
                }
                setPlayId(e) {
                    this._mediaSourceManager.setPlayId(e)
                }
                getBufferTarget() {
                    return this._bufferTarget
                }
                getBufferedSegmentInfoForTime(e) {
                    let t = this._bufferedSegmentInfos;
                    if (!(null == t ? void 0 : t.length)) return null;
                    let i = 0,
                        r = this._cachedBufferedSegmentInfo;
                    if (r && r.timeStart <= e) {
                        if (r.timeEnd >= e) return r;
                        let a = t[r.index + 1];
                        if (a && a.timeStart <= e && a.timeEnd >= e) return this._cachedBufferedSegmentInfo = a, a;
                        e >= r.timeEnd && (i = r.index + 1)
                    }
                    for (let r = t.length; i < r; i++) {
                        let r = t[i];
                        if (r && r.timeStart <= e && r.timeEnd >= e) return this._cachedBufferedSegmentInfo = r, r
                    }
                    return this._cachedBufferedSegmentInfo = null, null
                }
            }
            var ep = i(39568);
            class eE extends q {
                constructor(e) {
                    super(e), this.strategy = r.URL, this.contentClassName = "URLContent", this._url = e.url, this._mimeType = e.mimeType
                }
                load() {
                    if (this._mimeType) {
                        var e, t;
                        if (e = this._mimeType, t = this.getMediaType(), "" === document.createElement(t).canPlayType(e)) throw new j(A.I.FILE_FORMAT_NOT_SUPPORTED, "Content is not playable.")
                    }
                    return Promise.resolve(this)
                }
                unload() {}
                isProtected() {
                    return !1
                }
                getMediaTypeMimeTypes() {
                    var e, t;
                    return "video" === this._mediaType ? {
                        video: null != (e = this._mimeType) ? e : "video/mp4"
                    } : {
                        audio: null != (t = this._mimeType) ? t : "audio/mp3"
                    }
                }
                getURL() {
                    return this._url
                }
                getLoadingApproach() {
                    return {
                        approach: "src"
                    }
                }
            }! function(e) {
                e[e.MP3_256 = 3] = "MP3_256", e[e.MP3_320 = 4] = "MP3_320", e[e.MP3_160 = 5] = "MP3_160", e[e.MP3_96 = 6] = "MP3_96", e[e.MP4_128 = 10] = "MP4_128", e[e.MP4_256 = 11] = "MP4_256", e[e.MP4_128_DUAL = 12] = "MP4_128_DUAL", e[e.MP4_256_DUAL = 13] = "MP4_256_DUAL", e[e.MP4_128_CBCS = 14] = "MP4_128_CBCS", e[e.MP4_256_CBCS = 15] = "MP4_256_CBCS", e[e.MP4_FLAC = 17] = "MP4_FLAC"
            }(d || (d = {}));
            let eg = {
                [d.MP3_256]: "audio/mp3",
                [d.MP3_320]: "audio/mp3",
                [d.MP3_160]: "audio/mp3",
                [d.MP3_96]: "audio/mp3",
                [d.MP4_128]: 'audio/mp4; codecs="mp4a.40.2"',
                [d.MP4_256]: 'audio/mp4; codecs="mp4a.40.2"',
                [d.MP4_128_DUAL]: 'audio/mp4; codecs="mp4a.40.2"',
                [d.MP4_256_DUAL]: 'audio/mp4; codecs="mp4a.40.2"',
                [d.MP4_128_CBCS]: 'audio/mp4; codecs="mp4a.40.2"',
                [d.MP4_256_CBCS]: 'audio/mp4; codecs="mp4a.40.2"',
                [d.MP4_FLAC]: 'audio/mp4; codecs="flac"'
            };
            class ey extends q {
                constructor(e) {
                    if (super(e), this._loaded = !1, this._lastResolveToken = 0, this._fallbackURLs = [], this._contentSegments = [], this._duration = 0, this._segmentLength = 0, this._protection = "cenc", this._fileId = e.fileId, this._resolver = e.resolver, this._keySystemInfo = e.keySystemInfo, this._keySystemSettings = ep.v[this._keySystemInfo.keySystem], this._fileFormat = e.fileFormat, this._disableCache = e.disableCache, this._preloadedManifest = e.preloadedManifest, this._preresolvedURL = e.preresolvedURL, this._fileFormat) this._mimeType = eg[this._fileFormat];
                    else switch (this._mediaFormat) {
                        case n.MP3:
                            this._mimeType = eg[d.MP3_160];
                            break;
                        case n.MP4:
                        case n.MP4_DUAL:
                        case n.MP4_CBCS:
                            this._mimeType = eg[d.MP4_128];
                            break;
                        default:
                            throw TypeError(`Unknown audio format ${this._mediaFormat}`)
                    }
                }
                _getCDNURLs(e) {
                    let t;
                    if (this._preresolvedURL) return this._currentURL = this._preresolvedURL, this._fallbackURLs = [], e && (e.resolveLatency = 0), Promise.resolve(!0);
                    let i = this._fileId;
                    clearTimeout(this._lastResolveToken);
                    let r = () => (this._lastResolveTime = (0, S.X)(), this._resolver.getCDNURL(i, this._fileFormat).then(t => (e && this._lastResolveTime && (e.resolveLatency = (0, S.r)(this._lastResolveTime)), t))),
                        a = this._lastResolveTime ? (0, S.r)(this._lastResolveTime) : 1 / 0;
                    return (a < 1001 ? new Promise((e, t) => {
                        this._lastResolveToken = setTimeout(() => {
                            r().then(e, t)
                        }, 1001 - a)
                    }) : r()).then(e => (this._fallbackURLs = e.uris, this._currentURL = this._fallbackURLs.shift(), !0)).catch(e => (e && (e.track = this.toLogJSON()), Promise.reject(e)))
                }
                _getManifest(e) {
                    if (this._preloadedManifest) return e && (e.manifestLatency = 0), Promise.resolve(this._preloadedManifest);
                    let t = (0, S.X)();
                    return this._resolver.getManifest(this._fileId).then(i => (e && (e.manifestLatency = (0, S.r)(t)), i))
                }
                _calculateSegments(e) {
                    let t = e.offset;
                    this._initSegment = {
                        index: -1,
                        init: !0,
                        cacheBufferSet: !this._disableCache,
                        timeStart: 0,
                        timeEnd: 0,
                        byteRanges: {
                            audio: {
                                start: 0,
                                end: t - 1
                            }
                        }
                    };
                    let i = e.segments,
                        r = e.timescale,
                        a = i.length,
                        n = Array(a),
                        s = 0,
                        o = 0;
                    for (let e = 0; e < a; e++) {
                        let a = i[e];
                        if (!(null == a ? void 0 : a.length)) continue;
                        let [l, d] = a, u = d / r, _ = {
                            index: e,
                            init: !1,
                            cacheBufferSet: !e && !this._disableCache,
                            timeStart: s,
                            timeEnd: s + u,
                            byteRanges: {
                                audio: {
                                    start: t,
                                    end: t + (l - 1)
                                }
                            }
                        };
                        n[e] = _, t += l, o += d, s += u, Math.floor(u) > this._segmentLength && (this._segmentLength = Math.floor(u))
                    }
                    n[n.length - 1].isFinal = !0, this._contentSegments = n, this._duration = o / r
                }
                _calculateSegmentsV1(e) {
                    let t = e.offset;
                    this._initSegment = {
                        index: -1,
                        init: !0,
                        cacheBufferSet: !this._disableCache,
                        timeStart: 0,
                        timeEnd: 0,
                        byteRanges: {
                            audio: {
                                start: 0,
                                end: t - 1
                            }
                        }
                    };
                    let i = e.references,
                        r = e.timescale,
                        a = i.length,
                        n = Array(a),
                        s = 0,
                        o = 0;
                    for (let e = 0; e < a; e++) {
                        let a = i[e];
                        if (!a) continue;
                        let l = a.duration / r,
                            d = {
                                index: e,
                                init: !1,
                                cacheBufferSet: !e && !this._disableCache,
                                timeStart: o,
                                timeEnd: o + l,
                                byteRanges: {
                                    audio: {
                                        start: t,
                                        end: t + (a.size - 1)
                                    }
                                }
                            };
                        n[e] = d, t += a.size, s += a.duration, o += l, Math.floor(l) > this._segmentLength && (this._segmentLength = Math.floor(l))
                    }
                    n[n.length - 1].isFinal = !0, this._contentSegments = n, this._duration = s / r
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return this._loaded ? (e.resolveLatency = 0, e.manifestLatency = 0, Promise.resolve(this)) : Promise.all([this._getCDNURLs(e), this._getManifest(e)]).then(([e, t]) => {
                        var i;
                        let r;
                        if (this._loaded = !0, !e || !t) return this;
                        if (this._keySystemInfo.keySystem === L.J.INVALID_SPOTIFY_KEY) return this._pssh = new Uint8Array(0), this;
                        let a = this._keySystemSettings.pssh_field.audio,
                            n = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : null;
                        if (!n && "pssh_widevine" === a && "pssh" in t && (n = null != (i = t.pssh) ? i : null), !n) return (r = new j(A.I.FILE_FORMAT_NOT_SUPPORTED, "KeySystem does not support the file format.")).track = this.toLogJSON(), Promise.reject(r);
                        if (this._protection = t.protection || "cenc", this._pssh = z(n), "segments" in t && t.segments) this._calculateSegments(t);
                        else {
                            if (!("references" in t) || !t.references) return (r = new j(A.I.FILE_MALFORMED_SEEKTABLE, "Malformed seektable.")).track = this.toLogJSON(), Promise.reject(r);
                            this._calculateSegmentsV1(t)
                        }
                        return this
                    })
                }
                isProtected() {
                    return !!this._protection && !!this._pssh
                }
                getMediaTypeMimeTypes() {
                    return {
                        audio: this._mimeType
                    }
                }
            }
            let ev = "application/vnd.apple.mpegurl";

            function eb(e) {
                var t;
                let i = e.segments.map(e => {
                        if (e.byteEnd && void 0 !== e.byteStart) {
                            let t = `${1+e.byteEnd-e.byteStart}`;
                            return t += `@${e.byteStart}`, `#EXTINF:${e.duration},
#EXT-X-BYTERANGE:${t}
${e.url}`
                        }
                        return `#EXTINF:${e.duration},
${e.url}`
                    }).join("\n"),
                    r = e.assetID ? `#EXT-X-KEY:METHOD=SAMPLE-AES,URI="skd://${e.assetID}",KEYFORMATVERSIONS="1",KEYFORMAT="com.apple.streamingkeydelivery"` : "",
                    a = e.map ? `#EXT-X-MAP:URI="${e.map.url}"` : "";
                return (null == (t = e.map) ? void 0 : t.byteEnd) && void 0 !== e.map.byteStart && (a += `,BYTERANGE="${1+e.map.byteEnd}@${e.map.byteStart}"`), `#EXTM3U
#EXT-X-VERSION:6
#EXT-X-TARGETDURATION:${Math.floor(e.targetDuration)}
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
${a?`${r}
${a}`:r}
${i}
#EXT-X-ENDLIST`
            }

            function eT(e) {
                return `data:application/vnd.apple.mpegurl;base64,${btoa(e)}`
            }

            function eR(e) {
                let t = new Blob([e], {
                    type: ev
                });
                return URL.createObjectURL(t)
            }

            function eS(e) {
                return eR(eb(e))
            }

            function eP(e) {
                return eT(eb(e))
            }
            class eL extends ey {
                constructor() {
                    super(...arguments), this._hlsURL = null, this.strategy = r.URL, this.contentClassName = "AudioManifestHLSContent"
                }
                unload() {
                    this._hlsURL && URL.revokeObjectURL(this._hlsURL), this._hlsURL = null
                }
                getURL() {
                    var e, t;
                    let i = this._currentURL,
                        r = this._initSegment;
                    if (!i || !r) throw new j(A.I.FILE_NOT_RESOLVED, "Cannot return HLS Manifest URL: File not resolved.");
                    this.unload();
                    let a = {
                            url: i,
                            byteStart: null == (e = r.byteRanges.audio) ? void 0 : e.start,
                            byteEnd: null == (t = r.byteRanges.audio) ? void 0 : t.end
                        },
                        n = this._contentSegments.map(e => {
                            var t, r;
                            return {
                                url: i,
                                duration: e.timeEnd - e.timeStart,
                                byteStart: null == (t = e.byteRanges.audio) ? void 0 : t.start,
                                byteEnd: null == (r = e.byteRanges.audio) ? void 0 : r.end
                            }
                        }),
                        s = "undefined" == typeof MediaSource ? eS : eP;
                    return this._hlsURL = s({
                        assetID: this._fileId,
                        targetDuration: 10,
                        map: a,
                        segments: n
                    }), this._hlsURL
                }
                getLoadingApproach() {
                    return {
                        approach: "source",
                        type: ev
                    }
                }
            }
            class eA extends Error {
                constructor(e, t, i, r = {}) {
                    super(t), this.code = e, this.message = t, this.status = i, this.debug = r, this.name = "FragmentError"
                }
            }
            class eI extends ey {
                constructor(e) {
                    super(e), this._profileId = `${Date.now()}`, this._lastFetchedBuffer = null, this.strategy = r.MSE, this.contentClassName = "AudioManifestMSEContent", this._transport = e.transport, this._abrManager = e.abrManager, this._parseSegmentResponse = this._parseSegmentResponse.bind(this)
                }
                _parseSegmentResponse(e, t) {
                    let {
                        requestURL: i,
                        segment: r,
                        byteRangeHeader: a,
                        expectedLength: n
                    } = e.metadata, s = `${r.timeStart}-${r.timeEnd}`, [o, l] = a.split("-").map(Number);
                    switch (e.status) {
                        case 0:
                            {
                                if (e.offline) return Promise.reject(new eA(A.I.FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO, "Request failed with status 0.", 0, {
                                    time_range: s,
                                    byte_range: a,
                                    isNetworkRelated: !0,
                                    segmentTimeStart: r.timeStart,
                                    segmentTimeEnd: r.timeEnd,
                                    segmentByteStart: o,
                                    segmentByteEnd: l
                                }));
                                let n = new eA(A.I.FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO, "Request failed with status 0.", 0, {
                                        isNetworkRelated: !0,
                                        segmentTimeStart: r.timeStart,
                                        segmentTimeEnd: r.timeEnd,
                                        segmentByteStart: o,
                                        segmentByteEnd: l
                                    }),
                                    d = !1;
                                if (this._currentURL !== i ? d = !0 : this._fallbackURLs.length && this._currentURL === i && (d = !0, this._currentURL = this._fallbackURLs.shift()), n.debug.has_fallback = d, d) return this.getBufferSetForSegment(r, t);
                                return Promise.reject(n)
                            }
                        case 200:
                        case 206:
                            {
                                let t = e.body;
                                if (!t) return Promise.reject(new eA(A.I.FRAGMENT_REQUEST_EMPTY_RESPONSE, "Empty response for successful buffer.", e.status, {
                                    time_range: s,
                                    byte_range: a,
                                    segmentTimeStart: r.timeStart,
                                    segmentTimeEnd: r.timeEnd,
                                    segmentByteStart: o,
                                    segmentByteEnd: l
                                }));
                                if (t.byteLength !== n) return Promise.reject(new eA(A.I.FRAGMENT_REQUEST_UNEXPECTED_LENGTH, "Received buffer of unexpected length.", e.status, {
                                    time_range: s,
                                    byte_range: a,
                                    received_length: t.byteLength,
                                    expected_length: n,
                                    segmentTimeStart: r.timeStart,
                                    segmentTimeEnd: r.timeEnd,
                                    segmentByteStart: o,
                                    segmentByteEnd: l
                                }));
                                let d = {
                                    audio: {
                                        profileId: this._profileId,
                                        bufferURL: i,
                                        byteStart: r.byteRanges.audio.start,
                                        byteEnd: r.byteRanges.audio.end,
                                        buffer: t,
                                        mimeType: this._mimeType,
                                        bandwidth: 8e3 * t.byteLength / e.timing.completed
                                    }
                                };
                                return r.cacheBufferSet && t && t.byteLength && (r.bufferSet = d),
                                this._abrManager.sample(t.byteLength, e.timing.completed),
                                Promise.resolve(d)
                            }
                        case 403:
                            return this._getCDNURLs().then(() => this.getBufferSetForSegment(r, t));
                        default:
                            {
                                let n = !1;
                                return this._currentURL !== i ? n = !0 : this._fallbackURLs.length && this._currentURL === i && (n = !0, this._currentURL = this._fallbackURLs.shift()),
                                n ? this.getBufferSetForSegment(r, t) : Promise.reject(new eA(A.I.FRAGMENT_REQUEST_FAILED_WITH_STATUS, `Buffer request failed with status ${e.status}`, e.status, {
                                    time_range: s,
                                    byte_range: a,
                                    isNetworkRelated: !0,
                                    segmentTimeStart: r.timeStart,
                                    segmentTimeEnd: r.timeEnd,
                                    segmentByteStart: o,
                                    segmentByteEnd: l
                                }))
                            }
                    }
                }
                unload() {
                    this._lastFetchedBuffer = null, this._disableCache && (this._initSegment && (this._initSegment.bufferSet = null), this._contentSegments[0] && (this._contentSegments[0].bufferSet = null))
                }
                getCalculatedDuration() {
                    return this._duration
                }
                getSegmentLength() {
                    return this._segmentLength
                }
                getSegmentsCount() {
                    return this._contentSegments.length
                }
                getInitSegment() {
                    return this._initSegment
                }
                getSegmentForTime(e) {
                    var t, i;
                    if (!(null == (t = this._contentSegments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return null != (i = this._contentSegments[0]) ? i : null;
                    for (let t of this._contentSegments)
                        if (t.timeStart <= e && t.timeEnd >= e) return t;
                    return null
                }
                getSegmentAfterTime(e) {
                    var t, i;
                    if (!(null == (t = this._contentSegments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return null != (i = this._contentSegments[1]) ? i : null;
                    for (let t of this._contentSegments)
                        if (t.timeStart > e) return t;
                    return null
                }
                getSegmentsForRange(e, t = 1 / 0) {
                    var i;
                    let r = [];
                    if (null == (i = this._contentSegments) ? void 0 : i.length)
                        for (let i of this._contentSegments) i.timeStart <= t && i.timeEnd >= e && r.push(i);
                    return r
                }
                getFinalSegment() {
                    var e, t;
                    return null != (t = null == (e = this._contentSegments) ? void 0 : e[this._contentSegments.length - 1]) ? t : null
                }
                getInitBufferSet(e) {
                    var t, i;
                    if (!this._initSegment) throw new j(A.I.FILE_NOT_RESOLVED, "Cannot return the init bufferset: file not resolved.");
                    return (null == (i = null == (t = this._initSegment.bufferSet) ? void 0 : t.audio) ? void 0 : i.buffer.byteLength) ? Promise.resolve(this._initSegment.bufferSet) : (this._initBufferPromise || (this._initBufferPromise = this.getBufferSetForSegment(this._initSegment, e).then(e => {
                        var t;
                        if (!(null == (t = e.audio) ? void 0 : t.buffer.byteLength)) throw Error("Empty initialization segment buffer");
                        return e
                    })), this._initBufferPromise)
                }
                getBufferSetForSegment(e, t) {
                    var i;
                    if ((null == (i = this._lastFetchedBuffer) ? void 0 : i.segment) === e) return Promise.resolve(this._lastFetchedBuffer.bufferSet);
                    if (e.bufferSet) return Promise.resolve(e.bufferSet);
                    if (!this._currentURL) return Promise.reject(new j(A.I.FILE_NOT_RESOLVED, "Cannot fetch buffer: No resolved URL"));
                    let r = e.byteRanges.audio,
                        a = `${r.start}-${r.end}`,
                        n = r.end + 1 - r.start,
                        s = this._currentURL;
                    return (e.init ? Promise.resolve(null) : this.getInitBufferSet(t)).then(i => Promise.all([i, this._transport.request(s, {
                        method: "GET",
                        responseType: "arraybuffer",
                        headers: {
                            Range: `bytes=${a}`
                        },
                        signal: t,
                        timing: !0,
                        metadata: {
                            requestURL: s,
                            segment: e,
                            byteRangeHeader: a,
                            expectedLength: n
                        },
                        retry: {
                            condition: (e, t) => {
                                if (0 === e.status) return e.offline;
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.CONNECTION_ERROR || i === t.SERVER_ERROR || i === t.SUCCESS && !!e.body && e.body.byteLength !== n
                            }
                        }
                    }).then(e => this._parseSegmentResponse(e, t))])).then(([t, i]) => {
                        var r;
                        return (null == (r = null == t ? void 0 : t.audio) ? void 0 : r.buffer) && i.audio && (i.audio.initBuffer = t.audio.buffer), this._lastFetchedBuffer = {
                            segment: e,
                            bufferSet: i
                        }, i
                    })
                }
            }
            class eD extends ei {
                constructor(e) {
                    super(e), this._hlsURLs = [], this.strategy = r.URL, this.contentClassName = "DirectorManifestHLSContent", this._keySystemInfo.keySystem === L.J.FAIRPLAY && (this._supportedFormats.audio.push({
                        mimeType: "audio/mp2t",
                        codec: "mp4a.40.2"
                    }), this._supportedFormats.video.push({
                        mimeType: "video/mp2t",
                        codec: "avc1.4d402a"
                    }), this._supportedFormats.audio = this._supportedFormats.audio.filter(e => "audio/mp4" !== e.mimeType || "flac" !== e.codec))
                }
                _getHLSURLForProfile(e, t) {
                    let i = this._duration,
                        r = this._segmentLength,
                        a = this._segmentTemplate,
                        n = [];
                    for (let t = 0; t < i; t += r) {
                        let s = t + r > i ? i - t : r,
                            o = a.replace("{{profile_id}}", e.id.toString(10)).replace("{{segment_timestamp}}", t.toString(10)).replace("{{file_type}}", e.file_type);
                        n.push({
                            duration: s,
                            url: `${this._baseURL}${o}`
                        })
                    }
                    let s = ("undefined" == typeof MediaSource ? eS : eP)({
                        assetID: this._assetID,
                        targetDuration: r,
                        map: t ? {
                            url: t
                        } : void 0,
                        segments: n
                    });
                    return this._hlsURLs.push(s), s
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return super.load(e).then(() => {
                        var e, t;
                        return this._audioProfiles.selected = null != (e = this._audioProfiles.available[0]) ? e : null, this._videoProfiles.selected = null != (t = this._videoProfiles.available[0]) ? t : null, this
                    })
                }
                getURL() {
                    var e, t;
                    if (!this._baseURL) throw new j(A.I.FILE_NOT_RESOLVED, "Cannot return HLS Manifest URL: File not resolved.");
                    this.unload();
                    let i = [],
                        r = this._audioProfiles.available[0];
                    if (r) {
                        let e = "ts" !== r.file_type ? this._resolver.getInitSegmentURLs(this._baseURL, this._initTemplate, r, void 0).audio : "";
                        i.push(`#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",LANGUAGE="eng",NAME="English",AUTOSELECT=YES,URI="${this._getHLSURLForProfile(r,e)}"`)
                    }
                    for (let a of this._videoProfiles.available) {
                        let n = (null != (e = null == r ? void 0 : r.max_bitrate) ? e : 0) + a.max_bitrate,
                            s = (null != (t = null == r ? void 0 : r.audio_bitrate) ? t : 0) + a.video_bitrate,
                            o = "ts" !== a.file_type ? this._resolver.getInitSegmentURLs(this._baseURL, this._initTemplate, void 0, a).video : "";
                        i.push(`#EXT-X-STREAM-INF:BANDWIDTH=${n},AVERAGE-BANDWIDTH=${s},RESOLUTION=${a.video_width}x${a.video_height},CODECS="${(null==r?void 0:r.audio_codec)?`${r.audio_codec}, ${a.video_codec}`:a.video_codec}"${(null==r?void 0:r.audio_codec)?',AUDIO="audio"':""}
${this._getHLSURLForProfile(a,o)}`)
                    }
                    let a = ("undefined" == typeof MediaSource ? eR : eT)(`#EXTM3U
${i.join("\n")}`);
                    return this._hlsURLs.push(a), a
                }
                unload() {
                    for (let e of this._hlsURLs) URL.revokeObjectURL(e);
                    this._hlsURLs = []
                }
                getMediaTypeMimeTypes() {
                    var e, t;
                    return {
                        audio: et(null == (e = this._audioProfiles.available) ? void 0 : e[0]),
                        video: et(null == (t = this._videoProfiles.available) ? void 0 : t[0])
                    }
                }
                getLoadingApproach() {
                    return {
                        approach: "source",
                        type: ev
                    }
                }
                adapt() {
                    return Promise.resolve(!1)
                }
                canLowerBitrate() {
                    return !1
                }
            }
            class ek extends ei {
                constructor(e) {
                    super(e), this._initSegmentBuffers = {}, this._backgrounded = !1, this.strategy = r.MSE, this.contentClassName = "DirectorManifestMSEContent", this._transport = e.transport, this._abrManager = e.abrManager, this._parseSegmentResponse = this._parseSegmentResponse.bind(this)
                }
                _isQualityMatchedForPreferredResolution(e, t) {
                    var i, r, a;
                    let n = this._videoResolution;
                    if (n) {
                        let s = null != (i = n.max) ? i : 0x1fffffffffffff,
                            o = null != (r = n.min) ? r : 0;
                        if (t) {
                            let t = null != (a = n.start) ? a : s;
                            return e.video_resolution <= t
                        }
                        return e.video_resolution >= o && e.video_resolution <= s
                    }
                    return !1
                }
                _isQualityMatchedForBandwidth(e, t) {
                    var i;
                    let r = null != (i = null == t ? void 0 : t.audio_bitrate) ? i : 0,
                        a = this._abrManager.getBandwidthEstimate();
                    return e.video_bitrate + r < a - 1e5
                }
                _isQualityMatchedForElementSize(e) {
                    return !!this._currentElementSize && e.video_height <= this._currentElementSize.height
                }
                _selectVideoProfile(e = !1) {
                    let t = this._videoProfiles.available,
                        i = this._audioProfiles.available[0],
                        r = {},
                        a = t.length;
                    if (a) {
                        for (; a--;) {
                            let n = t[a];
                            n && (!r.preferredResolution && this._isQualityMatchedForPreferredResolution(n, !!e) && (r.preferredResolution = n), !r.elementSize && this._isQualityMatchedForElementSize(n) && (r.elementSize = n), !r.bitrate && this._isQualityMatchedForBandwidth(n, i) && (r.bitrate = n))
                        }
                        return (r.backgrounded || (r.backgrounded = t[0]), r.bitrate || (r.bitrate = t[0]), r.preferredResolution) ? r.preferredResolution : this._enableAbrOnElementSize && this._backgrounded && r.backgrounded ? r.backgrounded : this._enableAbrOnElementSize && this._currentElementSize && r.elementSize ? r.bitrate.video_bitrate < r.elementSize.video_bitrate ? r.bitrate : r.elementSize : r.bitrate
                    }
                }
                _updateVariants(e) {
                    var t;
                    let i = this._audioProfiles.available[0];
                    this._audioProfiles.selected = null != i ? i : null;
                    let r = this._videoProfiles.selected,
                        a = this._selectVideoProfile(e);
                    a && (this._videoProfiles.selected = a, (null == r ? void 0 : r.id) !== a.id && (null == (t = this._mediator) || t.emit(s.VIDEO_PROFILE_CHANGED, Object.assign({
                        profile: {
                            type: "video",
                            mimeType: a.mime_type,
                            codec: a.video_codec,
                            bitrate: a.video_bitrate,
                            height: a.video_height,
                            width: a.video_width,
                            resolution: a.video_resolution
                        }
                    }, (0, F.P)()))))
                }
                _constructSegmentURL(e, t, i) {
                    if (!t && !i) throw new I(A.I.DIRECTOR_MANIFEST_NO_AVAILABLE_PROFILES, "Both audioProfile and videoProfile is null");
                    return e.init ? this._resolver.getInitSegmentURLs(this._baseURL, this._initTemplate, t, i) : this._resolver.getSegmentURLs(this._baseURL, this._segmentTemplate, e.timeStart, t, i)
                }
                _parseSegmentResponse(e) {
                    var t, i, r, a;
                    let {
                        segment: n,
                        profile: o,
                        timeStart: l,
                        loggingURL: d
                    } = e.metadata, u = et(o), _ = o ? "audio_bitrate" in o ? o.audio_bitrate : o.video_bitrate : 0, h = "video_resolution" in o ? o.video_resolution : void 0, c = "video_width" in o ? o.video_width : void 0, m = "video_height" in o ? o.video_height : void 0, f = `${n.timeStart}-${n.timeEnd}`, p = "video_resolution" in o ? "video" : "audio";
                    switch (e.status) {
                        case 0:
                            {
                                let e = new eA(A.I.FRAGMENT_REQUEST_FAILED_WITH_ZERO, "Request failed with status 0.", 0, {
                                    time_range: f,
                                    mimeType: u,
                                    resolution: h,
                                    bitrate: _,
                                    isNetworkRelated: !0,
                                    segmentTimeStart: n.timeStart,
                                    segmentTimeEnd: n.timeEnd
                                });
                                return null == (t = this._mediator) || t.emit(s.FRAGMENT_FETCH_ERROR, Object.assign({
                                    media_type: "video",
                                    segment_type: p,
                                    url: d,
                                    start_time: l,
                                    init: n.init,
                                    error: e
                                }, (0, F.P)())),
                                Promise.reject(e)
                            }
                        case 200:
                        case 206:
                            {
                                let t = e.body;
                                if (!(null == t ? void 0 : t.byteLength)) {
                                    let t = new eA(A.I.FRAGMENT_REQUEST_EMPTY_RESPONSE, "Empty response for successful buffer.", e.status, {
                                        time_range: f,
                                        mimeType: u,
                                        resolution: h,
                                        bitrate: _,
                                        segmentTimeStart: n.timeStart,
                                        segmentTimeEnd: n.timeEnd
                                    });
                                    return null == (i = this._mediator) || i.emit(s.FRAGMENT_FETCH_ERROR, Object.assign({
                                        media_type: "video",
                                        segment_type: p,
                                        url: d,
                                        start_time: l,
                                        init: n.init,
                                        error: t
                                    }, (0, F.P)())), Promise.reject(t)
                                }
                                let a = t.byteLength,
                                    E = 8e3 * a / e.timing.completed;
                                return null == (r = this._mediator) || r.emit(s.FRAGMENT_FETCHED, Object.assign({
                                    media_type: "video",
                                    segment_type: p,
                                    url: d,
                                    init: n.init,
                                    byte_length: a,
                                    start_time: l,
                                    end_time: Date.now(),
                                    resolution: h,
                                    bandwidth: E
                                }, (0, F.P)())),
                                Promise.resolve({
                                    profileId: `${this._fileId}-${o.id}`,
                                    bufferURL: d,
                                    byteStart: 0,
                                    byteEnd: a - 1,
                                    buffer: t,
                                    mimeType: u,
                                    bitrate: _,
                                    videoWidth: c,
                                    videoHeight: m,
                                    resolution: h,
                                    bandwidth: E
                                })
                            }
                    }
                    let E = new eA(A.I.FRAGMENT_REQUEST_FAILED_WITH_STATUS, `Buffer request failed with status ${e.status}`, e.status, {
                        time_range: f,
                        mimeType: u,
                        resolution: h,
                        bitrate: _,
                        segmentTimeStart: n.timeStart,
                        segmentTimeEnd: n.timeEnd
                    });
                    return null == (a = this._mediator) || a.emit(s.FRAGMENT_FETCH_ERROR, Object.assign({
                        media_type: "video",
                        segment_type: p,
                        url: d,
                        init: n.init,
                        start_time: l,
                        error: E
                    }, (0, F.P)())), Promise.reject(E)
                }
                _fetchBufferData(e, t, i, r, a) {
                    return this._transport.request(e, {
                        method: "GET",
                        responseType: "arraybuffer",
                        timing: !0,
                        signal: a,
                        retry: {
                            condition: (e, t) => {
                                if (0 === e.status) return !0;
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.CONNECTION_ERROR || i === t.SERVER_ERROR
                            }
                        },
                        metadata: {
                            timeStart: Date.now(),
                            segment: t,
                            profile: i,
                            loggingURL: r
                        }
                    }).then(this._parseSegmentResponse)
                }
                _fetchInitSegmentBuffers(e, t, i) {
                    let r, a = this._initSegment;
                    if (!a) return Promise.reject(new j(A.I.FILE_NOT_RESOLVED, "Cannot fetch Init Segment buffers: File not resolved."));
                    try {
                        r = this._constructSegmentURL(a, e, t)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let n = this._initSegmentBuffers,
                        s = 0,
                        o = 0,
                        l = (0, S.X)(),
                        d = e => {
                            o += e, --s || (this._abrManager.sample(o, (0, S.r)(l)), this._updateVariants())
                        },
                        u = Promise.resolve(null);
                    if (e) {
                        let t = n[e.id];
                        (null == t ? void 0 : t.buffer.byteLength) ? u = Promise.resolve(t): (null == r ? void 0 : r.audio) && (s++, u = this._fetchBufferData(r.audio, a, e, r.audioLogging, i).then(t => (n[e.id] = t, d(t.buffer.byteLength), t)))
                    }
                    let _ = Promise.resolve(null);
                    if (t) {
                        let e = n[t.id];
                        (null == e ? void 0 : e.buffer.byteLength) ? _ = Promise.resolve(e): (null == r ? void 0 : r.video) && (s++, _ = this._fetchBufferData(r.video, a, t, r.videoLogging, i).then(e => (n[t.id] = e, d(e.buffer.byteLength), e)))
                    }
                    return Promise.all([u, _]).then(([e, t]) => ({
                        audio: e,
                        video: t
                    }))
                }
                _fetchBufferSetForSegment(e, t, i, r) {
                    let a;
                    try {
                        a = this._constructSegmentURL(e, t, i)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    return this._fetchInitSegmentBuffers(t, i, r).then(n => {
                        let s = 0,
                            o = 0,
                            l = (0, S.X)(),
                            d = e => {
                                o += e, --s || (this._abrManager.sample(o, (0, S.r)(l)), this._updateVariants())
                            },
                            u = null;
                        !e.init && (null == a ? void 0 : a.audio) && (s++, u = this._fetchBufferData(a.audio, e, t, a.audioLogging, r).then(e => (d(e.buffer.byteLength), e)));
                        let _ = null;
                        return !e.init && (null == a ? void 0 : a.video) && (s++, _ = this._fetchBufferData(a.video, e, i, a.videoLogging, r).then(e => (d(e.buffer.byteLength), e))), Promise.all([n, u, _])
                    }).then(([t, i, r]) => {
                        var a, n;
                        let s;
                        return e.init ? s = {
                            audio: null != (a = t.audio) ? a : void 0,
                            video: null != (n = t.video) ? n : void 0
                        } : (s = {
                            audio: null != i ? i : void 0,
                            video: null != r ? r : void 0
                        }, e.cacheBufferSet && (e.bufferSet = s), s.audio && (null == t ? void 0 : t.audio) && (s.audio.initBuffer = t.audio.buffer), s.video && (null == t ? void 0 : t.video) && (s.video.initBuffer = t.video.buffer)), s
                    }).catch(e => Promise.reject(e))
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return super.load(e).then(() => (this._updateVariants(!0), this))
                }
                adapt(e) {
                    let {
                        backgrounded: t = !1,
                        currentElementSize: i
                    } = null != e ? e : {};
                    return this._currentElementSize = i, this._backgrounded = t, this._updateVariants(), Promise.resolve(!0)
                }
                canLowerBitrate() {
                    var e;
                    let t = this._videoProfiles.available[0];
                    return (null == (e = this._videoProfiles.selected) ? void 0 : e.id) !== (null == t ? void 0 : t.id)
                }
                getMediaTypeMimeTypes() {
                    return {
                        audio: et(this._audioProfiles.selected),
                        video: et(this._videoProfiles.selected)
                    }
                }
                unload() {
                    this._initSegment && (this._initSegmentBuffers = {}), this._segments.forEach(e => {
                        e.bufferSet = null
                    })
                }
                getCalculatedDuration() {
                    return this._duration
                }
                getSegmentLength() {
                    return this._segmentLength
                }
                getSegmentsCount() {
                    return this._segments.length
                }
                getInitSegment() {
                    return this._initSegment
                }
                getInitBufferSet() {
                    var e, t;
                    let i = null != (e = this._audioProfiles.selected) ? e : void 0,
                        r = null != (t = this._videoProfiles.selected) ? t : void 0;
                    return this._fetchInitSegmentBuffers(i, r).then(e => {
                        var t, i;
                        return {
                            audio: null != (t = e.audio) ? t : void 0,
                            video: null != (i = e.video) ? i : void 0
                        }
                    })
                }
                getSegmentForTime(e) {
                    var t;
                    if (!(null == (t = this._segments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return this._segments[0];
                    for (let t of this._segments)
                        if (t.timeStart <= e && t.timeEnd >= e) return t;
                    return null
                }
                getSegmentAfterTime(e) {
                    var t;
                    if (!(null == (t = this._segments) ? void 0 : t.length)) return null;
                    if (0 === e || .01 === e) return this._segments[1];
                    for (let t of this._segments)
                        if (t.timeStart > e) return t;
                    return null
                }
                getSegmentsForRange(e, t) {
                    var i;
                    let r = [];
                    if (null == (i = this._segments) ? void 0 : i.length)
                        for (let i of this._segments) i.timeStart <= t && i.timeEnd >= e && r.push(i);
                    return r
                }
                getFinalSegment() {
                    var e, t;
                    return null != (t = null == (e = this._segments) ? void 0 : e[this._segments.length - 1]) ? t : null
                }
                getBufferSetForSegment(e, t) {
                    var i, r;
                    if (!e) return Promise.reject(TypeError("No segment provided"));
                    let a = this._audioProfiles.selected,
                        n = this._videoProfiles.selected,
                        s = null == (r = null == (i = e.bufferSet) ? void 0 : i.video) ? void 0 : r.resolution;
                    return e.bufferSet && (!n || s && s >= n.video_resolution) ? Promise.resolve(e.bufferSet) : this._fetchBufferSetForSegment(e, null != a ? a : void 0, null != n ? n : void 0, t)
                }
            }
            class eC extends q {
                constructor(e) {
                    super(e), this._url = "", this.strategy = r.URL, this.contentClassName = "StorageURLContent", this._fileId = e.fileId, this._resolver = e.resolver
                }
                _getCDNURLs(e) {
                    let t = this._fileId,
                        i = (0, S.X)();
                    return this._resolver.getCDNURL(t).then(t => (e && (e.resolveLatency = (0, S.r)(i)), t))
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return this._getCDNURLs(e).then(e => (this._url = e.uri, this))
                }
                unload() {}
                isProtected() {
                    return !1
                }
                getMediaTypeMimeTypes() {
                    return {
                        audio: "audio/mp3"
                    }
                }
                getURL() {
                    return this._url
                }
                getLoadingApproach() {
                    return {
                        approach: "source",
                        type: "audio/mp3"
                    }
                }
            }
            class eO extends Error {
                constructor(e, t, i = {}) {
                    super(), this.status = -1, this.debug = {}, this.canPlayNext = !0, this.unrecoverable = !1, this.name = "AdManifestError", this.code = e, this.message = t, this.debug = i
                }
                static fatal(e, t) {
                    let i = new eO(e, t);
                    return i.unrecoverable = !1, i.canPlayNext = !0, i
                }
            }
            let ew = e => {
                let t = {};
                for (let i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = {
                    urls: e[i]
                });
                return t
            };
            class eN extends q {
                constructor(e) {
                    super(e), this._loaded = !1, this._playableContentSorted = [], this._mimeType = "", this._manifestURL = "", this._adURL = "", this._product = "", this._audioFiles = [], this._videoFiles = [], this._trackingData = null, this.strategy = r.URL, this.contentClassName = "AdManifestContent", this._abrManager = e.abrManager, this._transport = e.transport, this._manifestURL = e.manifestURL, this._preloadedManifest = e.preloadedManifest, this._hasNonFatalErrors = !1, this._getManifest = this._getManifest.bind(this), this._parseManifest = this._parseManifest.bind(this), this._getPlayableContent = this._getPlayableContent.bind(this)
                }
                _isPlayable(e, t) {
                    return "" !== document.createElement(t).canPlayType(e)
                }
                _parseManifest(e) {
                    if (!(null == e ? void 0 : e.manifest)) throw new eO(A.I.STORAGE_TRACK_MANIFEST_EMPTY, "Received empty manifest.");
                    let {
                        manifest: t
                    } = e;
                    this._videoFiles = t.video_files, this._audioFiles = t.audio_files, this._contentMetadata = t.metadata, this._videoManifestId = t.video_manifest_id, this._product = t.product, this._trackingData = ew(t.tracking_events)
                }
                _getManifest(e) {
                    if (this._preloadedManifest) return e && (e.manifestLatency = 0), Promise.resolve(this._preloadedManifest);
                    let t = (0, S.X)(),
                        i = this._manifestURL;
                    return this._transport.request(i, {
                        responseType: "json",
                        authorize: !0,
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).then(r => {
                        if (200 !== r.status) {
                            let e = new eO(A.I.AD_MANIFEST_REQUEST_FAILED_WITH_STATUS, `Ad manifest request failed with status code ${r.status}`, {
                                isNetworkRelated: !0
                            });
                            return e.debug.manifestURL = i, e.status = r.status, Promise.reject(e)
                        }
                        if (!r.body) {
                            let e = new eO(A.I.AD_MANIFEST_INVALID, "Received empty manifest.");
                            return e.debug.manifestURL = i, e.status = r.status, Promise.reject(e)
                        }
                        return e && (e.manifestLatency = (0, S.r)(t)), Promise.resolve(r.body)
                    })
                }
                _getPlayableContent() {
                    let e = "video" === this._product;
                    if (e && this._videoManifestId) return;
                    let t = e ? this._videoFiles : this._audioFiles;
                    if (!t.length) throw new j(A.I.FILE_NOT_RESOLVED, `Manifest's ${e?"video_files":"audio_files"} array is empty.`);
                    let i = t.filter(e => this._isPlayable(e.type, this.getMediaType()));
                    if (!i.length) throw new j(A.I.FILE_FORMAT_NOT_SUPPORTED, "No playable content found.");
                    this._playableContentSorted = i.sort((e, t) => t.bitrate - e.bitrate)
                }
                load(e = {
                    resolveLatency: 0,
                    manifestLatency: 0
                }) {
                    return this._loaded ? (e.resolveLatency = 0, e.manifestLatency = 0, Promise.resolve(this)) : this._getManifest(e).then(this._parseManifest).then(this._getPlayableContent).then(() => (this._loaded = !0, Promise.resolve(this)))
                }
                unload() {
                    this._adURL = ""
                }
                isProtected() {
                    return !1
                }
                getMediaTypeMimeTypes() {
                    return {
                        [this._mediaType]: this._mimeType
                    }
                }
                getURL() {
                    if ("" !== this._adURL) return this._adURL;
                    let e = this._abrManager.getBandwidthEstimate(),
                        t = this._playableContentSorted[this._playableContentSorted.length - 1];
                    for (let i of this._playableContentSorted)
                        if (i.bitrate <= e) {
                            t = i;
                            break
                        }
                    return t && (this._adURL = t.url, this._mimeType = t.type), this._adURL
                }
                getLoadingApproach() {
                    return {
                        approach: "src"
                    }
                }
                getManifestId() {
                    return this._videoManifestId
                }
                getTrackingEvents() {
                    if (!this._trackingData) throw new j(A.I.FILE_NOT_RESOLVED, "Cannot return Tracking Events: File not resolved.");
                    return this._trackingData
                }
                getTrackingEventData(e) {
                    let t = this._trackingData ? this._trackingData[e] : null;
                    return t ? {
                        tracking_event: e,
                        urls: t.urls
                    } : null
                }
            }

            function eM(e, t) {
                var i;
                return {
                    mediaType: e.mediaType,
                    logData: e.logData,
                    audioGain: e.audioGain,
                    uri: e.uri,
                    fileId: e.fileId,
                    mediaFormat: e.format,
                    hasNonFatalErrors: null != (i = e.hasNonFatalErrors) ? i : e.isAd,
                    disableCache: t.disableCache,
                    keySystemInfo: t.keySystemInfo,
                    licenseEndpoint: e.licenseEndpoint,
                    mediator: t.mediator,
                    noAuth: e.noAuth,
                    mimeType: e.mimeType
                }
            }

            function eU(e, t, i) {
                if (!e.fileId) return Promise.reject(new I(A.I.INVALID_TRACK, `Invalid ${e.format} Track: No fileId.`));
                let r = Object.assign(Object.assign({}, eM(e, t)), {
                    transport: t.transport,
                    abrManager: t.abrManager,
                    fileId: e.fileId,
                    keySystemSettings: ep.v[t.keySystemInfo.keySystem],
                    resolver: t.videoResolver,
                    disallowProfile: t.disallowProfile,
                    allowMixedAVC1Codecs: t.allowMixedAVC1Codecs,
                    trackingData: (null == i ? void 0 : i.trackingData) || null,
                    metadata: null == i ? void 0 : i.metadata,
                    enableAbrOnElementSize: t.enableAbrOnElementSize,
                    mediaPlaybackMode: t.mediaPlaybackMode
                });
                return t.keySystemInfo.keySystem === L.J.FAIRPLAY ? new eD(r).load(t.measures) : new ek(r).load(t.measures)
            }
            let eF = v.m.forTag("playback.player"),
                eB = /^blob:/,
                ex = {
                    [n.MP4]: !0,
                    [n.MP4_DUAL]: !0,
                    [n.MP4_CBCS]: !0,
                    [n.MP4_FLAC]: !0,
                    [n.MP3]: !1,
                    [n.MANIFEST_ID]: !0,
                    [n.AD_MANIFEST]: !0,
                    [n.GENERIC_MEDIA]: !0
                },
                eG = {
                    start: P.J.REPORTING_START,
                    creative_view: P.J.REPORTING_CREATIVE_VIEW,
                    first_quartile: P.J.REPORTING_FIRST_QUARTILE,
                    midpoint: P.J.REPORTING_MIDPOINT,
                    third_quartile: P.J.REPORTING_THIRD_QUARTILE,
                    complete: P.J.REPORTING_COMPLETE,
                    pause: P.J.REPORTING_PAUSE,
                    resume: P.J.REPORTING_RESUME,
                    error: P.J.REPORTING_ERROR
                },
                eY = {
                    audio: 2,
                    video: 2
                };

            function eV(e) {
                return Math.ceil(1e3 * e)
            }

            function ej(e) {
                return document.createElement(e)
            }
            class eq extends b.bk {
                constructor(e) {
                    var t, i, r, a, n, s, o;
                    super(), this._cubicVolume = !1, this._player = null, this._emeManager = null, this._mediator = new b.bk, this._currentContent = null, this._upcomingContent = null, this._preloadingTracks = {}, this._playId = 0, this._volumeCommandId = null, this._abortController = null, this._loaded = !1, this._licenseRequested = !1, this._playerActivated = !1, this._pauseToken = 0, this._syntheticEndedToken = 0, this._activeMimeTypes = {}, this._playerVolume = 1, this._muted = !1, this._playerSpeed = 1, this._fatalOnNextError = !1, this._canPreloadEmitted = !1, this._lastReportedPosition = null, this._lastReportedPlaybackSpeed = null, this._seeking = !1, this._rebuffering = !1, this._enableAbrOnVisibilityChange = !1, this._enableAbrOnElementSize = !1, this._useResizeObserver = !1, this._preferredBitrate = 0, this._disableLicensePrefetch = !1, this._allowMixedAVC1Codecs = !0, this._disableBufferingBeforeLicense = !1, this._rebufferTarget = eY, this._currentPlayingProfile = null, this._defaultPlayerContainerInjector = (e, t) => {
                        let i = this._getContainerElement("video" === t ? this._videoPlayerContainer : this._audioPlayerContainer);
                        i && e.parentNode !== i && (i.appendChild(e), "video" === t && this.emit(P.J.PLAYER_VIDEO_ELEMENT_APPENDED, Object.assign({}, (0, F.P)())))
                    }, this._defaultPlayerContainerEjector = (e, t, i) => {
                        let r = this._getContainerElement("video" === t ? this._videoPlayerContainer : this._audioPlayerContainer);
                        r && e.parentNode === r && (this._newElementPerTrack || i !== t) && (r.removeChild(e), "video" === t && (this._subtitleManager.setPlayer(null), this.emit(P.J.PLAYER_VIDEO_ELEMENT_REMOVED, Object.assign({}, (0, F.P)()))))
                    }, this._audioResolver = e.audioResolver, this._clearBufferOnSeek = !!e.clearBufferOnSeek, this._createPlayer = e.createPlayer || ej, this._cubicVolume = e.cubicVolume, this._disableCache = !!e.disableCache, this._licenseURLResolver = e.licenseURLResolver, this._newBufferPerTrack = !!e.newBufferPerTrack, this._newElementPerTrack = !!e.newElementPerTrack, this._newMediaKeysPerTrack = e.newMediaKeysPerTrack, this._rebufferOnQuotaExceeded = !!e.rebufferOnQuotaExceeded, this._disableLicensePrefetch = !!e.disableLicensePrefetch, this._synthesizeEnded = !!e.synthesizeEnded, this._tracker = e.tracker, this._transport = e.transport, this._videoPlayerContainer = e.videoPlayerContainer, this._audioPlayerContainer = e.audioPlayerContainer, this._playerContainerManager = e.playerContainerManager || {
                        inject: this._defaultPlayerContainerInjector.bind(this),
                        eject: this._defaultPlayerContainerEjector.bind(this)
                    }, this._allowMixedAVC1Codecs = null == (t = e.allowMixedAVC1Codecs) || t, this._videoResolver = e.videoResolver, this._abrManager = new O, this._emeManager = e.disallowProtectedTracks ? null : e.emeManager || null, this._disallowProfile = e.disallowProfile, this._disableBufferingBeforeLicense = !!e.disableBufferingBeforeLicense, this._cache = new R.q(e.trackCacheSize || 2), this._subtitleManager = new V({
                        language: e.preferredSubtitleLanguage || navigator.language,
                        player: this._player
                    }), this._videoResolution = e.videoResolution, this._enableAbrOnVisibilityChange = !!e.enableAbrOnVisibilityChange, this._enableAbrOnElementSize = null != (i = e.enableAbrOnElementSize) && i, this._useResizeObserver = null != (r = e.useResizeObserver) && r, eF.info("Setting Player track cache to:", e.trackCacheSize || 2), this._bufferManager = ef.create(this._tracker, void 0, {
                        disableBufferAbort: !!e.disableBufferAbort,
                        reinjectInitsOnAbort: !!e.reinjectInitsOnAbort,
                        noInit: !0,
                        customSourceBufferParams: e.customSourceBufferParams,
                        bufferTarget: e.bufferTarget
                    }), this._statistics = es.create({
                        bandwidthEstimator: this._abrManager
                    }), this._newKeySystemAccessPerTrack = e.newKeySystemAccessPerTrack, this._loadingTimeout = e.loadingTimeout, this._videoSurface = e.initialVideoSurface, this._isVideoVisible = e.initialIsVideoVisible;
                    let l = this._bufferManager.getBufferTarget();
                    this._rebufferTarget = {
                        audio: Math.min(null != (n = null == (a = e.rebufferTarget) ? void 0 : a.audio) ? n : eY.audio, l.audio),
                        video: Math.min(null != (o = null == (s = e.rebufferTarget) ? void 0 : s.video) ? o : eY.video, l.video)
                    }, this._audioProcessor = el.create(e.audioProcessorOptions), this._preloadThreshold = e.preloadThreshold || 10, this._onCanPlay = this._onCanPlay.bind(this), this._onCanPlayThrough = this._onCanPlayThrough.bind(this), this._onTimeUpdate = this._onTimeUpdate.bind(this), this._onDurationChange = this._onDurationChange.bind(this), this._onPlay = this._onPlay.bind(this), this._onPlaying = this._onPlaying.bind(this), this._onPause = this._onPause.bind(this), this._onSeeked = this._onSeeked.bind(this), this._onSeeking = this._onSeeking.bind(this), this._onEncrypted = this._onEncrypted.bind(this), this._onEnded = this._onEnded.bind(this), this._onError = this._onError.bind(this), this._onRequiresDuration = this._onRequiresDuration.bind(this), this._onQuotaExceeded = this._onQuotaExceeded.bind(this), this._onLoadedMetadata = this._onLoadedMetadata.bind(this), this._onWaiting = this._onWaiting.bind(this), this._onFragmentFetched = this._onFragmentFetched.bind(this), this._onProfileChanged = this._onProfileChanged.bind(this), this._onPlayedThresholdReached = this._onPlayedThresholdReached.bind(this), this._onSyntheticEnded = this._onSyntheticEnded.bind(this), this._onLicenseRequestCapped = this._onLicenseRequestCapped.bind(this), this._onLicenseRequestError = this._onLicenseRequestError.bind(this), this._onNavigatorOffline = this._onNavigatorOffline.bind(this), this._onBufferError = this._onBufferError.bind(this), this._onBufferUpdateEnd = this._onBufferUpdateEnd.bind(this), this._emitWarning = this._emitWarning.bind(this), this._handleLoadingComplete = this._handleLoadingComplete.bind(this), this._onRateChange = this._onRateChange.bind(this), this._onVideoResize = this._onVideoResize.bind(this), this._setAudioGain = this._setAudioGain.bind(this), this._onVolumeChanged = this._onVolumeChanged.bind(this), this._init(), this._getCacheKey = this._getCacheKey.bind(this)
                }
                static create(e) {
                    let t = Object.assign({}, e);
                    return e.disallowProtectedTracks ? eq.createWithOptions(t) : D.X.create({
                        transport: e.transport,
                        disallowRobustnessValues: e.disallowRobustnessValues,
                        disallowCodecs: e.disallowCodecs,
                        noServerCertificate: e.noServerCertificate,
                        precacheServerCertificate: e.precacheServerCertificate,
                        unauthServerCertificateBase: e.unauthServerCertificateBase,
                        preferredKeySystems: e.preferredKeySystems
                    }).then(e => {
                        t.emeManager = e;
                        let i = new eq(t);
                        return t.preinitMediaElement ? i._preinitMediaElement() : i
                    }).catch(i => {
                        if (e.enableWithoutEME) return eq.createWithOptions(t);
                        throw i
                    })
                }
                static createWithOptions(e) {
                    return new Promise(t => {
                        let i = new eq(e);
                        t(e.preinitMediaElement ? i._preinitMediaElement() : i)
                    })
                }
                _init() {
                    this._disableCache && eF.info("Cache disabled."), this._transport.on(this._transport.EVENT_CONNECTION_OFFLINE, this._onNavigatorOffline), this.proxyEmitAllSync(this._tracker, {
                        [P.J.TRACKER_TRACKING_DATA_CREATED]: P.J.PLAYER_TRACKING_DATA_CREATED,
                        [P.J.TRACKER_TRACKING_DATA_FINALIZED]: P.J.PLAYER_TRACKING_DATA_FINALIZED,
                        [P.J.TRACKER_PLAYBACK_START]: P.J.PLAYER_PLAYBACK_START,
                        [P.J.TRACKER_LOG_CLIENT_EVENT]: P.J.PLAYER_LOG_CLIENT_EVENT
                    }), this._tracker.on(P.J.TRACKER_PLAYED_THRESHOLD_REACHED, this._onPlayedThresholdReached), this._emeManager && this._emeManager.addListeners({
                        [P.J.EME_LICENSE_REQUEST_CAPPED]: this._onLicenseRequestCapped,
                        [P.J.EME_LICENSE_REQUEST_ERROR]: this._onLicenseRequestError
                    }), this._bufferManager.addListeners({
                        [P.J.BUFFER_APPEND_ERROR]: this._onBufferError,
                        [P.J.BUFFER_QUOTA_EXCEEDED]: this._onQuotaExceeded,
                        [P.J.BUFFER_UPDATE_END]: this._onBufferUpdateEnd
                    }), this._mediator.addListeners({
                        [s.FRAGMENT_FETCHED]: this._onFragmentFetched,
                        [s.VIDEO_PROFILE_CHANGED]: this._onProfileChanged
                    }), this.proxyEmitAll(this._mediator, {
                        [s.FRAGMENT_FETCH_ERROR]: P.J.PLAYER_FRAGMENT_FETCH_ERROR
                    }), this.proxyEmitSync(this._subtitleManager, P.J.PLAYER_DISPLAYED_CUES_CHANGED, P.J.PLAYER_DISPLAYED_CUES_CHANGED), this.proxyEmit(this._subtitleManager, P.J.PLAYER_SUBTITLE_LANGUAGES_LOADED, P.J.PLAYER_SUBTITLE_LANGUAGES_LOADED), this.proxyEmitAll(this._videoResolver, {
                        [P.J.VIDEO_MANIFEST_RESOLVED]: P.J.PLAYER_VIDEO_MANIFEST_RESOLVED,
                        [P.J.VIDEO_MANIFEST_RESOLVE_FAILED]: P.J.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED
                    }), this._tracker.addListeners({
                        [P.J.TRACKER_FIRST_QUARTILE]: () => this._emitReporting("first_quartile"),
                        [P.J.TRACKER_MIDPOINT]: () => this._emitReporting("midpoint"),
                        [P.J.TRACKER_THIRD_QUARTILE]: () => this._emitReporting("third_quartile")
                    }), this.addListeners({
                        [P.J.PLAYER_PLAYBACK_START]: () => {
                            this._emitReporting("start"), this._emitReporting("creative_view")
                        },
                        [P.J.PLAYER_ENDED]: () => this._emitReporting("complete"),
                        [P.J.PLAYER_ERROR]: () => this._emitReporting("error")
                    })
                }
                _onRateChange() {
                    if (!this._player) return;
                    let e = this._player.playbackRate;
                    (null === this._lastReportedPlaybackSpeed || this._lastReportedPlaybackSpeed !== e) && (this._lastReportedPlaybackSpeed = e, 0 !== e && this._tracker.trackSpeedChanged(e), this.emit(P.J.PLAYER_PLAYBACK_SPEED_CHANGED, Object.assign({
                        playback_speed: e,
                        playback_speed_selected: this._playerSpeed,
                        rebuffering: this._rebuffering,
                        seeking: this._seeking,
                        position: eV(this._player.currentTime),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, F.P)())))
                }
                _onLicenseRequestError(e) {
                    var t;
                    if (e.data.signal.aborted) return;
                    let i = this._currentContent;
                    if (!i) return;
                    let r = e.data.error,
                        a = null == (t = i.getKeySystemInfo()) ? void 0 : t.keySystem;
                    r.shouldRefreshEndpoint && a && this._licenseURLResolver.remove(a, i.getMediaType());
                    let n = {
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    };
                    this._emitError(r, !r.unrecoverable, n, i.toLogJSON())
                }
                _onFragmentFetched(e) {
                    let {
                        data: t
                    } = e;
                    this._tracker.trackFragment(t), this.emit(P.J.PLAYER_FRAGMENT_FETCHED, t)
                }
                _onProfileChanged(e) {
                    let {
                        data: t
                    } = e;
                    this._tracker.trackProfileChanged(t.profile), this.emit(P.J.PLAYER_VIDEO_PROFILE_CHANGED, t)
                }
                _onLicenseRequestCapped(e) {
                    !e.data.signal.aborted && this._currentContent && (this.pause(), this.emit(P.J.PLAYER_CAPPED, {
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    }))
                }
                _shouldNextErrorBeFatal() {
                    let e = this._currentContent;
                    if (!e || e.hasNonFatalErrors() || !e.isProtected() || !this._player) return !1;
                    let t = this._player.error;
                    if (!t || !(t instanceof MediaError)) return this._fatalOnNextError = !1, !1;
                    switch (t.code) {
                        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        case MediaError.MEDIA_ERR_DECODE:
                            return !0;
                        default:
                            return !1
                    }
                }
                _onNavigatorOffline() {
                    this._tracker.trackNavigatorOffline()
                }
                _onBufferError(e) {
                    let t = {
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    };
                    this._emitError(e.data.error, e.data.canPlayNext, t, e.data.track)
                }
                _onBufferUpdateEnd() {
                    var e;
                    this._setRebufferingState(!0), this._rebuffering && this._player && (null == (e = this._currentContent) ? void 0 : e.strategy) === r.MSE && this._bufferManager.checkBufferHealth(this._currentContent, this._player.currentTime)
                }
                _addPlayerEvents(e) {
                    e.addEventListener(P.J.MEDIA_TIMEUPDATE, this._onTimeUpdate), e.addEventListener(P.J.MEDIA_PLAY, this._onPlay), e.addEventListener(P.J.MEDIA_PLAYING, this._onPlaying), e.addEventListener(P.J.MEDIA_PAUSE, this._onPause), e.addEventListener(P.J.MEDIA_SEEKED, this._onSeeked), e.addEventListener(P.J.MEDIA_SEEKING, this._onSeeking), e.addEventListener(P.J.MEDIA_ENCRYPTED, this._onEncrypted), e.addEventListener(P.J.MEDIA_ENDED, this._onEnded), e.addEventListener(P.J.MEDIA_ERROR, this._onError), e.addEventListener(P.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata), e.addEventListener(P.J.MEDIA_DURATIONCHANGE, this._onDurationChange), e.addEventListener(P.J.MEDIA_WAITING, this._onWaiting), e.addEventListener(P.J.MEDIA_CANPLAY, this._onCanPlay), e.addEventListener(P.J.MEDIA_CANPLAYTHROUGH, this._onCanPlayThrough), e.addEventListener(P.J.MEDIA_RATECHANGE, this._onRateChange), e.addEventListener(P.J.MEDIA_VOLUMECHANGE, this._onVolumeChanged), e.addEventListener(P.J.INTERNAL_MEDIA_REQUIRES_DURATION, this._onRequiresDuration), e.addEventListener(P.J.MEDIA_RESIZE, this._onVideoResize)
                }
                _removePlayerEvents(e) {
                    e.removeEventListener(P.J.MEDIA_TIMEUPDATE, this._onTimeUpdate), e.removeEventListener(P.J.MEDIA_PLAY, this._onPlay), e.removeEventListener(P.J.MEDIA_PLAYING, this._onPlaying), e.removeEventListener(P.J.MEDIA_PAUSE, this._onPause), e.removeEventListener(P.J.MEDIA_SEEKED, this._onSeeked), e.removeEventListener(P.J.MEDIA_SEEKING, this._onSeeking), e.removeEventListener(P.J.MEDIA_ENCRYPTED, this._onEncrypted), e.removeEventListener(P.J.MEDIA_ENDED, this._onEnded), e.removeEventListener(P.J.MEDIA_ERROR, this._onError), e.removeEventListener(P.J.MEDIA_WAITING, this._onWaiting), e.removeEventListener(P.J.MEDIA_CANPLAY, this._onCanPlay), e.removeEventListener(P.J.MEDIA_RATECHANGE, this._onRateChange), e.removeEventListener(P.J.MEDIA_VOLUMECHANGE, this._onVolumeChanged), e.removeEventListener(P.J.MEDIA_CANPLAYTHROUGH, this._onCanPlayThrough), e.removeEventListener(P.J.MEDIA_LOADEDMETADATA, this._onLoadedMetadata), e.removeEventListener(P.J.MEDIA_DURATIONCHANGE, this._onDurationChange), e.removeEventListener(P.J.INTERNAL_MEDIA_REQUIRES_DURATION, this._onRequiresDuration), e.removeEventListener(P.J.MEDIA_RESIZE, this._onVideoResize)
                }
                _recreateMediaElement(e, t, i, a) {
                    var n, s, o, l;
                    if (a.aborted) return eF.info("Recreate player dropped: operation aborted."), Promise.resolve(null);
                    let d = this._player,
                        u = Promise.resolve(null);
                    if (d) {
                        let a;
                        if (!this._newElementPerTrack && ("AUDIO" !== d.tagName || "video" !== t) && !(d === this._audioProcessor.getPlayer() && !(null == (n = this._upcomingContent) ? void 0 : n.isProtected())) && (a = !0, Object.keys(e).forEach(t => {
                                let i = e[t];
                                'audio/mp2t;codecs="mp4a.40.2"' !== i && i && !d.canPlayType(i) && (a = !1)
                            }), a)) return eF.info("Reusing media element."), (e.audio !== this._activeMimeTypes.audio || e.video !== this._activeMimeTypes.video || this._newBufferPerTrack) && i === r.MSE && (eF.info("Recreating buffer."), this._bufferManager.recreate(e), this._activeMimeTypes = e), Promise.resolve({
                            player: d,
                            mediaKeys: d.mediaKeys
                        });
                        this._removePlayerEvents(d), d.pause(), u = this._cleanMediaKeys(d), this._useResizeObserver && this._enableAbrOnElementSize && (null == (s = this._resizeObserver) || s.disconnect()), this._player = null, null == (o = this._playerContainerManager) || o.eject(d, "video"), null == (l = this._playerContainerManager) || l.eject(d, "audio")
                    }
                    eF.info(`Creating new media element for media type ${t}.`);
                    let _ = this._createPlayer(t),
                        h = this._playerVolume;
                    return _.volume = this._cubicVolume ? Math.pow(h, 3) : h, _.autoplay = !1, _.loop = !1, _.muted = this._muted, "playsInline" in _ && (_.playsInline = !0), this._player = _, this._playerActivated = !1, this._addPlayerEvents(_), i === r.MSE && this._bufferManager.recreate(e), this._activeMimeTypes = e, this._useResizeObserver && this._enableAbrOnElementSize && (this._resizeObserver = new ResizeObserver(e => {
                        for (let t of e) {
                            let e = t.contentRect;
                            ea(this._currentContent) && this._currentContent.adapt({
                                currentElementSize: {
                                    height: e.height,
                                    width: e.width
                                }
                            })
                        }
                    }), this._player && this._resizeObserver.observe(this._player)), u.then(e => ({
                        player: _,
                        mediaKeys: e
                    }))
                }
                _getContainerElement(e) {
                    var t;
                    if ("string" == typeof e) {
                        let i = document.querySelector(e);
                        if (i) return i;
                        let r = new I(A.I.PLAYER_CONTAINER_ELEMENT_NOT_FOUND, "Container element was not found in the DOM");
                        return r.listPlayerIgnore = !0, this._emitWarning(r, null == (t = this._currentContent) ? void 0 : t.toLogJSON()), null
                    }
                    return e || null
                }
                _onVideoResize() {
                    if (!(this._player instanceof HTMLVideoElement)) return;
                    let {
                        videoWidth: e,
                        videoHeight: t
                    } = this._player;
                    this.emit(P.J.PLAYER_VIDEO_RESIZED, Object.assign({
                        width: e,
                        height: t
                    }, (0, F.P)()))
                }
                _onDurationChange() {
                    var e;
                    let t = null == (e = this._abortController) ? void 0 : e.signal,
                        i = () => {
                            if (!this._player) return;
                            if (null == t ? void 0 : t.aborted) return void eF.info("Duration changed drop: operation aborted.");
                            let e = eV(this._player.duration),
                                i = eV(this._player.currentTime);
                            this._tracker.setActualDuration(e), this.emit(P.J.PLAYER_DURATION_CHANGED, Object.assign({
                                position: i,
                                duration: e,
                                playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                            }, (0, F.P)()))
                        };
                    this._loaded ? i() : this.once(P.J.PLAYER_LOAD, i)
                }
                _onPlay() {
                    var e;
                    if (!this._player || !this._currentContent) return;
                    let t = eV(this._seeking && this._lastReportedPosition ? this._lastReportedPosition : this._player.currentTime);
                    this._tracker.trackPlay(t, this._player.playbackRate), this.emit(P.J.PLAYER_PLAY, Object.assign({
                        position: t,
                        logData: null != (e = this._currentContent.getLogData()) ? e : null
                    }, (0, F.P)()))
                }
                _onPlaying() {
                    if (!this._player) return;
                    this._playerActivated = !0;
                    let e = this._currentContent,
                        t = eV(this._seeking && this._lastReportedPosition ? this._lastReportedPosition : this._player.currentTime);
                    this._tracker.trackPlaying(t), this.emit(P.J.PLAYER_PLAYING, Object.assign({
                        position: t,
                        logData: e ? e.getLogData() : null,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, F.P)()))
                }
                _onPause() {
                    var e;
                    if (!this._player) return;
                    let t = this._seeking && this._lastReportedPosition ? this._lastReportedPosition : this._player.currentTime,
                        i = eV(t);
                    this._tracker.trackPaused(i), this._lastReportedPosition = t;
                    let a = this._currentContent ? this._currentContent.getLogData() : null;
                    this._pauseToken = setTimeout(() => {
                        clearTimeout(this._syntheticEndedToken), this.emit(P.J.PLAYER_PAUSED, Object.assign({
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                            position: i,
                            logData: a
                        }, (0, F.P)()))
                    }, 10), this._player && (null == (e = this._currentContent) ? void 0 : e.strategy) === r.MSE && this._bufferManager.checkBufferHealth(this._currentContent, this._player.currentTime)
                }
                _onSeeked() {
                    if (this._seeking = !1, !this._player || !this._currentContent) return;
                    let e = eV(this._player.currentTime);
                    this._tracker.trackPositionChanged(e), this.emit(P.J.PLAYER_POSITION_CHANGED, Object.assign({
                        previousPosition: null !== this._lastReportedPosition ? eV(this._lastReportedPosition) : null,
                        position: e,
                        logData: this._currentContent.getLogData(),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, F.P)()))
                }
                _onSeeking() {
                    if (this._seeking = !0, this.emit(P.J.PLAYER_SEEKING, Object.assign({}, (0, F.P)())), this._setRebufferingState(), !this._player) return;
                    let e = this._currentContent;
                    if ((null == e ? void 0 : e.strategy) !== r.MSE) return;
                    if (e.isProtected() && this._disableBufferingBeforeLicense && !this._licenseRequested) return void eF.log("Dropping seek event: buffering before license disabled.");
                    let t = this._player.currentTime;
                    this._bufferManager.isPositionInCurrentFillRange(e, t) || (eF.log("Aborting buffer operations."), this._bufferManager.abort(this._clearBufferOnSeek));
                    let i = this._bufferManager;
                    i.checkBufferHealth(e, t, !1);
                    let a = i.getBufferedSegmentInfoForTime(t);
                    this._checkPlayingProfile(a)
                }
                _onRequiresDuration() {
                    this._currentContent && this._currentContent.isProtected() && this._player && (this._player.duration = this._currentContent.getCalculatedDuration())
                }
                _onQuotaExceeded() {
                    var e;
                    this._player && (null == (e = this._currentContent) ? void 0 : e.strategy) === r.MSE && this._rebufferOnQuotaExceeded && (eF.info("Exceeded quota: rebuffering current track."), this._bufferManager.abort(!0), this._player.currentTime = this._player.currentTime, this._bufferManager.checkBufferHealth(this._currentContent, this._player.currentTime, !0))
                }
                _onEncrypted(e) {
                    eF.info("Got Encrypted event"), this._currentContent && this.emitSync(P.J.INTERNAL_ENCRYPTED, Object.assign({
                        initData: e.initData,
                        fromPolyfill: !!e.fromPolyfill
                    }, (0, F.P)()))
                }
                _onEnded() {
                    !this._currentContent || this._synthesizeEnded && this._currentContent.isProtected() || (eF.info("Native ended emitted."), this._emitEnded())
                }
                _onSyntheticEnded() {
                    this._synthesizeEnded && this._currentContent && this._currentContent.isProtected() && (eF.info("Synthetic ended emitted."), this._emitEnded())
                }
                _onError() {
                    var e, t, i, r;
                    let a, n, s, o, l;
                    if (!this._player) return;
                    let d = this._player.error,
                        u = !1,
                        _ = this._currentContent,
                        h = !1;
                    _ && (u = _.isProtected(), a = _.toLogJSON(), h = _.hasNonFatalErrors(), _.unload());
                    let c = !0,
                        m = !_ || h || !this._fatalOnNextError,
                        f = d && d.msExtendedCode ? `0x${(d.msExtendedCode>>>0).toString(16).toUpperCase()}` : null,
                        p = `data:${(null==a?void 0:a.fileId)||"unknown"}`;
                    if (d instanceof MediaError) {
                        switch (d.code) {
                            case MediaError.MEDIA_ERR_ABORTED:
                                n = A.I.MEDIA_ABORTED, s = "Media aborted.";
                                break;
                            case MediaError.MEDIA_ERR_NETWORK:
                                n = A.I.MEDIA_NETWORK_ERROR, s = "Network error.", o = {
                                    isNetworkRelated: !0
                                };
                                break;
                            case MediaError.MEDIA_ERR_DECODE:
                                n = A.I.MEDIA_DECODING_ERROR, s = "Media decoding error.", c = m;
                                break;
                            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                n = A.I.MEDIA_NOT_SUPPORTED, s = "Media not supported.", c = m;
                                break;
                            default:
                                n = A.I.PLAYER_MEDIA_ERROR, s = "Media error.", l = !0
                        }
                        let e = d.message || f || p || d.toString();
                        s += ` (${e})`
                    } else n = A.I.PLAYER_PLAYBACK_ERROR, s = "Error message undefined", l = !0;
                    this._bufferManager.abort(!0);
                    let E = new I(n, s, o);
                    c || (E.unrecoverable = !0), E.listPlayerIgnore = h, E.debug.src_url = p, E.debug.protected = u, E.debug.extendedCode = f, E.debug.rawExCode = d && d.msExtendedCode || null, E.debug.audio_profile = null == (t = null == (e = this._currentPlayingProfile) ? void 0 : e.audio) ? void 0 : t.id, E.debug.video_profile = null == (r = null == (i = this._currentPlayingProfile) ? void 0 : i.video) ? void 0 : r.id, l && d && (E.debug.nativeCode = d.code || null, E.debug.errorData = d);
                    let g = (0, F.P)();
                    this._emitError(E, c, g, a)
                }
                _onLoadedMetadata() {
                    this.emitSync(P.J.INTERNAL_PLAYER_LOADED_METADATA, Object.assign({}, (0, F.P)()))
                }
                _onCanPlay() {
                    let {
                        timestamp: e,
                        monotonicTimestamp: t
                    } = (0, F.P)();
                    this._setRebufferingState(), this.emitSync(P.J.INTERNAL_PLAYER_CANPLAY, {
                        timestamp: e,
                        monotonicTimestamp: t
                    }), this._tracker.trackFirstBytesLatency(t), this.emit(P.J.PLAYER_FIRST_BYTES, {
                        timestamp: e,
                        monotonicTimestamp: t,
                        position: this._player ? eV(this._player.currentTime) : 0
                    })
                }
                _onCanPlayThrough() {
                    this._setRebufferingState(), this.emitSync(P.J.INTERNAL_PLAYER_CANPLAYTHROUGH, Object.assign({}, (0, F.P)()))
                }
                _onWaiting() {
                    var e;
                    clearTimeout(this._syntheticEndedToken);
                    let t = this._player;
                    if (!t || !this._currentContent) return;
                    let i = t.seeking;
                    this._setRebufferingState();
                    let r = !!ea(this._currentContent) && this._currentContent.canLowerBitrate(),
                        a = this._tracker;
                    this.emit(P.J.PLAYER_BUFFERING_START, Object.assign(Object.assign({
                        position: eV(t.currentTime),
                        msPlayed: this._tracker.getMSPlayed(),
                        canLowerBitrate: r,
                        seeking: i
                    }, a.getStallsInformation()), (0, F.P)()));
                    let n = null == (e = this._abortController) ? void 0 : e.signal;
                    this._getRebufferingLatency().then(e => {
                        null != n && n.aborted || (i || this._tracker.trackMsStalled(e), this.emit(P.J.PLAYER_BUFFERING_END, Object.assign(Object.assign({
                            position: eV(t.currentTime),
                            msPlayed: this._tracker.getMSPlayed(),
                            canLowerBitrate: r,
                            msStalled: e,
                            seeking: i
                        }, a.getStallsInformation()), (0, F.P)())))
                    })
                }
                _onPlayedThresholdReached(e) {
                    this._currentContent && this._player && this.emit(P.J.PLAYER_PLAYED_THRESHOLD_REACHED, Object.assign({
                        played: e.data.played,
                        threshold: e.data.threshold,
                        position: eV(this._player.currentTime)
                    }, (0, F.P)()))
                }
                _emitEnded() {
                    this._currentContent && "video" === this._currentContent.getMediaType() && this.emit(P.J.PLAYER_ENDED_VIDEO, Object.assign({}, (0, F.P)())), clearTimeout(this._pauseToken), this.emit(P.J.PLAYER_ENDED, Object.assign({}, (0, F.P)()))
                }
                _emitError(e, t, i, r) {
                    eF.error("Player Error", e, r, t), this._tracker.setHadError(!0), !this._disableCache && r && r.fileId && this._cache.remove(r.fileId), this.emit(P.J.PLAYER_ERROR, {
                        playId: this._playId,
                        error: e,
                        track: r,
                        canPlayNext: t,
                        position: this._player ? eV(this._player.currentTime) : 0,
                        timestamp: i.timestamp,
                        monotonicTimestamp: i.monotonicTimestamp
                    })
                }
                _emitWarning(e, t) {
                    eF.warn("Player Warning", e, t, !0), this._tracker.trackWarning(), this.emit(P.J.PLAYER_WARNING, Object.assign({
                        playId: this._playId,
                        error: e,
                        track: t,
                        canPlayNext: !0,
                        position: this._player ? eV(this._player.currentTime) : 0
                    }, (0, F.P)()))
                }
                _emitReporting(e) {
                    if (!en(this._currentContent)) return;
                    let t = this._currentContent.getTrackingEventData(e);
                    t && 0 !== t.urls.length && this.emitAndWait(eG[e], t, e => {
                        if (!e.defaultPrevented)
                            for (let e of t.urls) this._transport.request(e, {
                                forget: !0
                            })
                    })
                }
                _prepareMediaElement(e, t) {
                    if (t.aborted || !this._upcomingContent) return eF.info("Loading content dropped: operation aborted."), Promise.resolve(!1);
                    let i = this._upcomingContent.getMediaTypeMimeTypes();
                    return this._recreateMediaElement(i, this._upcomingContent.getMediaType(), this._upcomingContent.strategy, t).then(i => {
                        var r;
                        if (!i || t.aborted) return eF.info("Loading content dropped after recreate: operation aborted."), Promise.resolve(!1);
                        let {
                            player: a,
                            mediaKeys: n
                        } = i;
                        if ("VIDEO" === a.tagName && (e.poster ? a.poster = e.poster : a.removeAttribute("poster")), a.muted = !!e.muted, a.loop = !!e.loop, !this._emeManager || !(null == (r = this._upcomingContent) ? void 0 : r.isProtected())) return Promise.resolve(!0);
                        let s = e => {
                            var t;
                            let i = (0, F.P)();
                            return e.unrecoverable = !0, this._emitError(e, !1, i, null == (t = this._upcomingContent) ? void 0 : t.toLogJSON()), Promise.reject(e)
                        };
                        return !n || this._newMediaKeysPerTrack || void 0 === this._newMediaKeysPerTrack && !a.mediaKeys || (null == n ? void 0 : n.shouldRefreshPerTrack) ? (eF.info("Creating media keys"), this._emeManager.createMediaKeys(a).then(() => !0, s)) : a.mediaKeys !== n ? (eF.info("Reusing previous media keys"), this._emeManager.setMediaKeys(a, n).then(() => !0, s)) : Promise.resolve(!0)
                    })
                }
                _isRebufferingTargetReached() {
                    var e;
                    let t = this._player,
                        i = this._currentContent;
                    if (!t || !i) return !1;
                    if (i.strategy === r.URL) return t.readyState > 2;
                    let a = null != (e = this._rebufferTarget[i.getMediaType()]) ? e : 0;
                    if (!a) return !0;
                    let n = Math.max(t.currentTime, 1),
                        s = Math.min(a, Math.floor(t.duration - n)),
                        o = t.buffered;
                    for (let e = 0, t = o.length; e < t; e++) {
                        let t = o.start(e),
                            i = o.end(e);
                        if (t <= n && n <= i && s <= i - n) return !0
                    }
                    return !1
                }
                _setPlaybackRate() {
                    var e;
                    let t = this._player,
                        i = this._currentContent;
                    if (!t || !i) return;
                    if (i.strategy === r.MSE && this._rebuffering) {
                        t.playbackRate = 0;
                        return
                    }
                    let a = (null == (e = this._loadingOptions) ? void 0 : e.useDefaultPlaybackSpeed) ? 1 : this._playerSpeed;
                    t.playbackRate = a, t.defaultPlaybackRate = a
                }
                _setRebufferingState(e) {
                    let t = this._rebuffering,
                        i = !this._isRebufferingTargetReached();
                    e && i || (this._rebuffering = i, this._setPlaybackRate(), !t && this._rebuffering ? (eF.log("Rebuffering start"), this.emit(P.J.PLAYER_REBUFFERING_START, Object.assign({}, (0, F.P)()))) : t && !this._rebuffering && (eF.log("Rebuffering end"), this._tracker.trackPlayLatency(), this.emit(P.J.PLAYER_REBUFFERING_END, Object.assign({}, (0, F.P)()))))
                }
                _checkPlayingProfile(e, t) {
                    var i, r, a, n;
                    let s = this._currentPlayingProfile,
                        o = !!t;
                    if ((null == (i = null == s ? void 0 : s.audio) ? void 0 : i.id) !== (null == (r = null == e ? void 0 : e.audio) ? void 0 : r.profileId) || (null == (a = null == s ? void 0 : s.video) ? void 0 : a.id) !== (null == (n = null == e ? void 0 : e.video) ? void 0 : n.profileId)) {
                        let t = e ? {
                            audio: e.audio ? {
                                id: e.audio.profileId,
                                mimeType: e.audio.mimeType,
                                bitrate: e.audio.bitrate
                            } : void 0,
                            video: e.video ? {
                                id: e.video.profileId,
                                mimeType: e.video.mimeType,
                                bitrate: e.video.bitrate,
                                width: e.video.width,
                                height: e.video.height,
                                resolution: e.video.resolution
                            } : void 0
                        } : null;
                        this._currentPlayingProfile = t, o = !0
                    }
                    o && this.emit(P.J.PLAYER_PLAYING_PROFILE_CHANGED, Object.assign({
                        profile: this._currentPlayingProfile
                    }, (0, F.P)()))
                }
                _configureLoadingTimeout(e, t, i) {
                    let r = null != i ? i : this._loadingTimeout,
                        a = new I(A.I.PLAYER_TIMEOUT_ERROR, `Timeout: track could not be loaded within ${r} ms.`);
                    return r ? setTimeout(() => {
                        if (e.aborted) return;
                        null == t || t.abort();
                        let i = Object.assign({}, (0, F.P)());
                        this._emitError(a, !0, i)
                    }, r) : void 0
                }
                _handleLoadingComplete(e, t) {
                    var i;
                    clearTimeout(t);
                    let r = this._currentContent && this._currentContent.getMediaType();
                    return this._player && r && (null == (i = this._playerContainerManager) || i.inject(this._player, r)), this._upcomingContent = null, e
                }
                _handleLoadingError(e, t, i, r, a) {
                    if (clearTimeout(r), this._upcomingContent = null, i.aborted) return Promise.resolve(!1);
                    let n = (0, F.P)();
                    if (this._tracker.trackLoadFailed(), this.emit(P.J.PLAYER_LOADING_FAILED, Object.assign({
                            uri: e,
                            logData: t.logData
                        }, n)), a) {
                        let i = a.track || {
                            uri: e,
                            fileId: t.fileId,
                            mediaFormat: t.format,
                            deviceId: t.logData.deviceId
                        };
                        this._emitError(a, "StorageError" !== a.name || !!a.canPlayNext, n, i)
                    }
                    return Promise.reject(a)
                }
                _handleLoadedMetadata(e, t, i) {
                    if (e.aborted) return void eF.info("LoadedMetadata operations dropped: operation aborted.");
                    this._loaded = !0;
                    let r = this._player;
                    if (!r) return;
                    this._setRebufferingState(), this._bufferManager.dequeueUpdates();
                    let a = i.position > r.duration ? 0 : i.position;
                    (isNaN(r.currentTime) || r.currentTime < a) && (eF.info("Resetting initial position after metadata."), r.currentTime = a, this._lastReportedPosition = r.currentTime), this._tracker.trackLoadDone(eV(r.currentTime)), this.emitSync(P.J.PLAYER_LOAD, Object.assign({
                        autoplay: i.autoplay,
                        position: eV(a),
                        logData: t
                    }, (0, F.P)()));
                    let n = () => {
                        r.currentTime < a && (eF.info("Resetting initial position after playable."), r.currentTime = a, this._lastReportedPosition = r.currentTime)
                    };
                    i.autoplay && !r.error && (n = () => {
                        if (r.currentTime < a && (eF.info("Resetting initial position after playable."), r.currentTime = a, this._lastReportedPosition = r.currentTime), e.aborted) return void eF.info("Play trigger dropped: operation aborted");
                        new Promise(e => e(this._player && this._player.play())).then(() => this._audioProcessor.resume()).catch(e => {
                            if (e) {
                                if ("NotSupportedError" === e.name) return Promise.reject(e);
                                else if ("NotAllowedError" === e.name) return this.emit(P.J.PLAYER_AUTOPLAY_FAILED, Object.assign({}, (0, F.P)())), Promise.reject(e)
                            }
                            return this._player ? this._player.play() : Promise.resolve()
                        }).catch(() => {
                            this._onPause()
                        })
                    }), r.readyState > 2 ? (eF.info("Ready to play, triggering play."), n()) : (eF.info("Waiting to be playable."), this.once(P.J.INTERNAL_PLAYER_CANPLAY, n))
                }
                _handleCanPlayThrough(e) {
                    var t;
                    if (e.aborted) return void eF.info("CanPlayThrough operations dropped: operation aborted.");
                    this._tracker.trackCanPlayThrough(), (null == (t = this._currentContent) ? void 0 : t.strategy) !== r.MSE && this._tracker.trackPlayLatency()
                }
                _loadContent(e, t) {
                    if (t.aborted || !this._upcomingContent) return eF.info("Loading content dropped: operation aborted."), Promise.resolve(!1);
                    if (!this._player) throw new I(A.I.PLAYER_INVALID_INTERNAL_STATE, "Cannot load content without an HTMLMediaElement");
                    this._canPreloadEmitted = !1;
                    let i = this._upcomingContent;
                    this._upcomingContent = null, this._currentContent = i, this._setAudioGain(i), this._subtitleManager.setVideoContent(i && "getSubtitles" in i && "getSubtitleLanguages" in i ? i : null);
                    let a = e.callback;
                    a && this.once(P.J.PLAYER_LOAD, () => {
                        if (t.aborted) return void eF.info("Load content event dropped: operation aborted.");
                        a()
                    }), this.once(P.J.INTERNAL_PLAYER_LOADED_METADATA, this._handleLoadedMetadata.bind(this, t, this._currentContent.getLogData(), e)), this.once(P.J.INTERNAL_PLAYER_CANPLAYTHROUGH, this._handleCanPlayThrough.bind(this, t));
                    let n = e.position,
                        s = "getCalculatedDuration" in i ? i.getCalculatedDuration() : 1 / 0;
                    s && n > s && (n = e.position = 0);
                    try {
                        this._player.currentTime = n, this._lastReportedPosition = this._player.currentTime
                    } catch (e) {
                        eF.warn("Cannot set initial position before loading.", e)
                    }
                    this._setRebufferingState();
                    let o = e.playbackSpeed;
                    return (!e.useDefaultPlaybackSpeed && o && this.setPlaybackSpeed(o), this._tracker.setProtected(i.isProtected()), this._tracker.trackStrategy(i.strategy), this._tracker.setContentClass(i.contentClassName), eF.info(`Detecting ${i.strategy} strategy for ${i.contentClassName}.`), i.strategy === r.MSE) ? this._loadMSEContent(i, e, t) : this._loadURLContent(i, e, t)
                }
                _loadURLContent(e, t, i) {
                    var r, a;
                    if (!this._player || !e) return Promise.reject(new I(A.I.PLAYER_INVALID_INTERNAL_STATE, "Invalid playback state."));
                    eF.info("Loading URL content.");
                    let n = e.getURL();
                    if (!n) return Promise.reject(new I(A.I.PLAYER_INVALID_INTERNAL_STATE, "Content not loaded."));
                    let s = this._tracker;
                    if (s.setUrl(n), e.isProtected()) {
                        eF.info("URL content is protected");
                        let e = t => {
                            t.data.fromPolyfill && (this.removeListener(P.J.INTERNAL_ENCRYPTED, e), this._requestLicense(i, {
                                initData: t.data.initData
                            }))
                        };
                        this.on(P.J.INTERNAL_ENCRYPTED, e)
                    }
                    if ("video" === e.getMediaType() && er(e)) {
                        let t = e.getMediaProfileInfo();
                        s.trackVideoLoadStart({
                            audioProfile: null != (r = t.audio.selected) ? r : void 0,
                            videoProfile: null != (a = t.video.selected) ? a : void 0
                        })
                    }
                    s.trackBufferLoadStart(), s.trackBufferURL(n, {
                        bandwidth: 0
                    });
                    let o = e.getLoadingApproach();
                    if ("src" === o.approach) eF.info("URL content loaded using src attribute"), this._player.src = n;
                    else {
                        eF.info("URL content loaded using source element");
                        let e = document.createElement("source");
                        e.src = n, e.type = o.type, this._player.appendChild(e)
                    }
                    return this._player.load(), Promise.resolve(!0)
                }
                _loadMSEContent(e, t, i) {
                    var r, a;
                    if (!this._player || !e) return Promise.reject(new I(A.I.PLAYER_INVALID_INTERNAL_STATE, "Invalid playback state."));
                    if (eF.info(`Loading MSE Content: ${e.getFileId()}`), e.isProtected()) {
                        eF.log("MSE content is protected");
                        let r = () => this._requestLicense(i).then(() => {
                            !i.aborted && (this._licenseRequested = !0, this._disableBufferingBeforeLicense && this._bufferManager.checkBufferHealth(e, t.position, !0))
                        });
                        this._disableLicensePrefetch ? this.once(P.J.INTERNAL_ENCRYPTED, r) : this._bufferManager.once(P.J.BUFFER_SOURCE_OPEN, r)
                    }
                    let n = this._bufferManager,
                        s = n.getMediaSource();
                    if (!s) return Promise.reject(new I(A.I.PLAYER_INVALID_INTERNAL_STATE, "No media source."));
                    if ("video" === e.getMediaType() && er(e)) {
                        let t = e.getMediaProfileInfo();
                        this._tracker.trackVideoLoadStart({
                            audioProfile: null != (r = t.audio.selected) ? r : void 0,
                            videoProfile: null != (a = t.video.selected) ? a : void 0
                        })
                    }
                    return this._player.src = URL.createObjectURL(s), this._setPlaybackRate(), new Promise((r, a) => {
                        n.once(P.J.BUFFER_SOURCE_OPEN, () => {
                            if (i.aborted) return void r(!1);
                            this._tracker.trackBufferLoadStart(), this._getRebufferingLatency().then(e => {
                                i.aborted || this._tracker.trackInitialRebuffering(e)
                            }), ("video" === e.getMediaType() ? n.setDuration(e.getCalculatedDuration()) : Promise.resolve(!0)).then(() => !i.aborted && (e.isProtected() && this._disableBufferingBeforeLicense ? n.injectInitSegment(e) : (this._bufferManager.checkBufferHealth(e, t.position, !0), !0))).then(r, a)
                        })
                    })
                }
                _getRebufferingLatency() {
                    return new Promise(e => {
                        if (!this._player) return void e(0);
                        let t = (0, S.X)();
                        this.once(P.J.PLAYER_REBUFFERING_END, () => {
                            e((0, S.r)(t))
                        })
                    })
                }
                _requestLicense(e, t = {}) {
                    let i;
                    if (e.aborted) return eF.info("Request license dropped: operation aborted."), Promise.resolve(!1);
                    if (!this._player || !this._currentContent || !this._emeManager) return Promise.resolve(!1);
                    let r = (0, S.X)(),
                        a = this._player.mediaKeys,
                        n = this._currentContent,
                        s = n.getFileId(),
                        o = n.getLogData(),
                        l = n.toLogJSON(),
                        d = n.getKeySystemInfo();
                    if (!d) return Promise.resolve(!1);
                    let u = d.keySystem;
                    if (!u) return Promise.resolve(!1);
                    let _ = n.getLicenseEndpoint();
                    if (_) i = Promise.resolve(_);
                    else {
                        if (!s) return Promise.reject(TypeError("Missing: fileId or licenseEndpoint"));
                        i = this._licenseURLResolver.get(u, n.getMediaType()).then(e => e.replace(/\{contentId\}/, s))
                    }
                    let h = this._emeManager,
                        c = this._tracker;
                    return c.setKeySystem(u), c.setKeySystemImpl(d.keySystemImpl), c.setKeySystemLabel(d.keySystemLabel), Promise.all([i, n.getInitParams()]).then(([i, n]) => {
                        if (!n) return Promise.resolve(!1);
                        c.setLicenseSessionLatency((0, S.r)(r));
                        let s = n.initDataType,
                            o = t.initData || n.initData;
                        return a && o && s ? h.createSessionWithParams({
                            keySystem: u,
                            signal: e,
                            initData: o,
                            mediaKeys: a,
                            licenseServer: i,
                            initDataType: s
                        }) : Promise.resolve(!1)
                    }).then(t => {
                        if (e.aborted) return eF.info("License tracking dropped: operation aborted."), Promise.resolve(!1);
                        "boolean" != typeof t && "elapsed" in t && (c.setLicenseGenerationLatency(t.elapsed.generate), c.setLicenseRequestLatency(t.elapsed.request), c.setLicenseUpdateLatency(t.elapsed.update));
                        let i = (0, S.r)(r);
                        return c.setKeyLatency(i), this.emit(P.J.PLAYER_KEY_RECEIVED, Object.assign({
                            requestTime: i,
                            logData: o
                        }, (0, F.P)())), eF.info("License updated."), Promise.resolve(!0)
                    }).catch(t => {
                        if (e.aborted) return Promise.resolve(!1);
                        let i = !t || !("canPlayNext" in t) || t.canPlayNext,
                            r = (0, F.P)();
                        return this._emitError(t, !!i, r, l), Promise.reject(t)
                    })
                }
                _onTimeUpdate() {
                    var e;
                    if (!this._loaded || !(null == (e = this._player) ? void 0 : e.readyState) || !this._currentContent) return;
                    let t = this._currentContent,
                        i = this._player.currentTime,
                        a = this._player.duration;
                    if (!this._seeking) {
                        if (t.isProtected() && this._disableBufferingBeforeLicense && !this._licenseRequested) return void eF.log("Dropping time update event: buffering before license disabled.");
                        if (this._lastReportedPosition = i, t.strategy === r.MSE) {
                            let e = this._bufferManager;
                            e.checkBufferHealth(t, i, !1);
                            let r = e.getBufferedSegmentInfoForTime(i);
                            this._checkPlayingProfile(r)
                        }
                        let e = eV(i),
                            a = t.getLogData();
                        this._tracker.trackProgress(e, ea(t) ? t.getCurrentBitrates().video : 0), this.emit(P.J.PLAYER_PROGRESS, Object.assign({
                            position: e,
                            played: this._tracker.getMSPlayed(),
                            interval: 500,
                            logData: a,
                            playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                        }, (0, F.P)()))
                    }
                    let n = a - i <= this._preloadThreshold;
                    !this._canPreloadEmitted && n ? (this._canPreloadEmitted = !0, this.emit(P.J.PLAYER_CAN_PRELOAD, Object.assign({}, (0, F.P)()))) : this._canPreloadEmitted && !n && (this._canPreloadEmitted = !1), clearTimeout(this._syntheticEndedToken), this._synthesizeEnded && t.isProtected() && this._isPlaying() && (this._syntheticEndedToken = setTimeout(this._onSyntheticEnded, eV(a - i)))
                }
                _onVolumeChanged() {
                    if (!this._player) return;
                    let e = this._playerVolume,
                        t = this._volumeCommandId;
                    this._volumeCommandId = null, this.emit(P.J.PLAYER_VOLUME_CHANGED, Object.assign({
                        volume: e,
                        commandId: null != t ? t : void 0
                    }, (0, F.P)()))
                }
                _isPlaying() {
                    return !!this._player && !this._player.paused
                }
                _cleanMediaKeys(e, t = this._emeManager) {
                    return t ? t.removeMediaKeys(e).catch(e => (eF.warn("Failed to remove current media keys.", e), null)) : Promise.resolve(null)
                }
                _checkKeySystemAccess() {
                    if (!this._newKeySystemAccessPerTrack || !this._player || !this._emeManager) return Promise.resolve();
                    let e = this._player,
                        t = this._emeManager;
                    return this._cleanMediaKeys(e, t).then(() => t.requestMediaKeySystemAccess()).then(() => {}).catch(e => (eF.warn("Failed to request new media key system access.", e), Promise.reject(e)))
                }
                _createContent(e, t = {
                    manifestLatency: 0,
                    resolveLatency: 0
                }, i = !1) {
                    return (this._emeManager ? this._emeManager.getKeySystemInfo() : this.getMediaConfig().then(e => ({
                        keySystem: L.J.INVALID_SPOTIFY_KEY,
                        keySystemImpl: "",
                        keySystemLabel: "",
                        audioFormats: e.formatsInfo.audio,
                        videoFormats: e.formatsInfo.video
                    }))).then(i => {
                        var r;
                        return function(e, t) {
                            var i, r, a, s;
                            let o = eM(e, t);
                            switch (e.format) {
                                case n.MP3:
                                    {
                                        let r = null != (i = e.url) ? i : e.resolvedURL;
                                        if (r) return new eE(Object.assign(Object.assign({}, o), {
                                            url: r
                                        })).load();
                                        if (e.fileId) return new eC(Object.assign(Object.assign({}, o), {
                                            fileId: e.fileId,
                                            resolver: t.audioResolver
                                        })).load();
                                        return Promise.reject(new I(A.I.INVALID_TRACK, `Invalid ${e.format} Track: No url or fileId.`))
                                    }
                                case n.GENERIC_MEDIA:
                                    {
                                        let t = null != (r = e.url) ? r : e.resolvedURL;
                                        if (t) return new eE(Object.assign(Object.assign({}, o), {
                                            url: t
                                        })).load();
                                        return Promise.reject(new I(A.I.INVALID_TRACK, `Invalid ${e.format} Track: No url.`))
                                    }
                                case n.MP4:
                                case n.MP4_DUAL:
                                case n.MP4_CBCS:
                                case n.MP4_FLAC:
                                    {
                                        if (!e.fileId) return Promise.reject(new I(A.I.INVALID_TRACK, `Invalid ${e.format} Track: No fileId.`));
                                        let i = Object.assign(Object.assign({}, o), {
                                            transport: t.transport,
                                            abrManager: t.abrManager,
                                            fileId: e.fileId,
                                            keySystemSettings: ep.v[t.keySystemInfo.keySystem],
                                            resolver: t.audioResolver,
                                            fileFormat: e.fileFormat,
                                            preloadedManifest: e.preloadedManifest,
                                            preresolvedURL: null != (a = e.url) ? a : e.resolvedURL
                                        });
                                        if (t.keySystemInfo.keySystem === L.J.FAIRPLAY) return new eL(i).load(t.measures);
                                        return new eI(i).load(t.measures)
                                    }
                                case n.MANIFEST_ID:
                                    return eU(e, t);
                                case n.AD_MANIFEST:
                                    {
                                        let i = null != (s = e.url) ? s : e.resolvedURL;
                                        if (!i) return Promise.reject(new I(A.I.INVALID_TRACK, `Invalid ${e.format} Track: No url.`));
                                        return new eN(Object.assign(Object.assign({}, o), {
                                            abrManager: t.abrManager,
                                            transport: t.transport,
                                            manifestURL: i,
                                            preloadedManifest: e.preloadedManifest
                                        })).load(t.measures).then(i => {
                                            let r = i.getManifestId();
                                            return r ? eU(Object.assign(Object.assign({}, e), {
                                                fileId: r,
                                                format: n.MANIFEST_ID
                                            }), t, {
                                                trackingData: i.getTrackingEvents(),
                                                metadata: i.getContentMetadata()
                                            }) : i
                                        })
                                    }
                                default:
                                    return Promise.reject(new I(A.I.INVALID_TRACK, "Cannot create PlayableContent: Invalid MediaFormat."))
                            }
                        }(e, {
                            transport: this._transport,
                            abrManager: this._abrManager,
                            mediator: this._mediator,
                            keySystemInfo: i,
                            audioResolver: this._audioResolver,
                            videoResolver: this._videoResolver,
                            enableAbrOnElementSize: this._enableAbrOnElementSize,
                            disableCache: this._disableCache,
                            disallowProfile: this._disallowProfile,
                            allowMixedAVC1Codecs: this._allowMixedAVC1Codecs,
                            measures: t,
                            mediaPlaybackMode: null == (r = e.options) ? void 0 : r.mediaPlaybackMode
                        })
                    }).then(r => {
                        if (i) return r;
                        let a = this._tracker;
                        a.setResolveLatency(t.resolveLatency), a.setManifestLatency(t.manifestLatency);
                        let n = this._getCacheKey(e);
                        return n && this._cache.set(n, r), r
                    })
                }
                _preinitMediaElement() {
                    if (this._player || !this._emeManager) return Promise.resolve(this);
                    let e = (0, T.createAbortControllerLike)();
                    return this._emeManager.getKeySystemInfo().then(t => {
                        var i, a;
                        let n = {
                            audio: null == (i = t.audioFormats[0]) ? void 0 : i.contentType,
                            video: null == (a = t.videoFormats[0]) ? void 0 : a.contentType
                        };
                        return n.audio || n.video ? this._recreateMediaElement(n, n.video ? "video" : "audio", t.keySystem === L.J.FAIRPLAY ? r.URL : r.MSE, e.signal) : null
                    }).then(() => this, e => (eF.warn("Cannot precreate media element:", null == e ? void 0 : e.message), this))
                }
                _setAudioGain(e) {
                    var t;
                    null == (t = this._audioProcessor) || t.setAudioGain(e.getAudioGain())
                }
                _getCacheKey({
                    fileId: e,
                    url: t,
                    format: i
                }) {
                    var r;
                    let a = !this._disableCache && ex[i],
                        n = null != (r = null != e ? e : t) ? r : null;
                    return a ? n : null
                }
                _getContentPromise(e, t) {
                    let i = this._cache,
                        r = this._getCacheKey(e);
                    if (r) {
                        let a = this._preloadingTracks[r],
                            n = i.get(r);
                        if (a) return eF.info("Waiting for preloading track.", r), a.then(e => (eF.info("Preloading succeeded.", r), t.setResolveLatency(e.resolveLatency), t.setManifestLatency(e.manifestLatency), i.get(r))).catch(() => (eF.info("Preloading failed, creating new track", r), this._createContent(e)));
                        if (n) return this._newKeySystemAccessPerTrack && this._emeManager ? this._emeManager.getKeySystemInfo().then(({
                            keySystem: i
                        }) => {
                            var a;
                            return i === (null == (a = n.getKeySystemInfo()) ? void 0 : a.keySystem) ? (eF.info("Using cached track.", r, n), t.setMemoryCached(!0), n) : (eF.info("Mismatched keysystem for cached track. Creating new track", r), this._createContent(e))
                        }) : (eF.info("Using cached track.", r, n), t.setMemoryCached(!0), Promise.resolve(n))
                    }
                    return eF.info("Creating new content", r), this._createContent(e)
                }
                _adaptVideoBitrateBasedOnVisibility() {
                    if (!this._enableAbrOnVisibilityChange || !ea(this._currentContent)) return;
                    let e = void 0 === this._isVideoVisible || this._isVideoVisible,
                        t = e ? this._preferredBitrate : 1e-32;
                    this._abrManager.overrideBitrate(t), this._currentContent.adapt({
                        backgrounded: !e
                    })
                }
                getMediaSource() {
                    return this._bufferManager.getMediaSource()
                }
                load(e, t, i) {
                    var a, n, s, o, l, d, u, _, h;
                    let c = Date.now(),
                        m = (0, S.X)(),
                        f = (h = t.uriProperty, Object.prototype.hasOwnProperty.call(e, h)) ? t.uriProperty : "uri",
                        p = e[f];
                    if (eF.info("load", p), !p) return Promise.reject(new I(A.I.PLAYER_CANNOT_FIND_PLAYABLE_URI, "Cannot find a playable URI."));
                    if (!e.logData) return Promise.reject(Error("Invalid track: logging info not specified"));
                    this.stop(e.logData, e.mediaType);
                    let E = null == (a = this._currentContent) ? void 0 : a.getMediaPlaybackMode();
                    this._loaded = !1, this._licenseRequested = !1, this._rebuffering = !1, this._seeking = !1, this._lastReportedPosition = null, this._currentContent = null, this._checkPlayingProfile(null, !0), this._subtitleManager.setVideoContent(null), t.muted && this.setMuted(!0), this._adaptVideoBitrateBasedOnVisibility(), this._preloadThreshold = t.preloadThreshold || this._preloadThreshold;
                    let g = ++this._playId;
                    this._abortController = (0, T.createAbortControllerLike)();
                    let y = this._abortController.signal,
                        v = this._configureLoadingTimeout(y, this._abortController, t.loadingTimeout);
                    void 0 !== v && y.addEventListener("abort", () => clearTimeout(v)), this.emit(P.J.PLAYER_BEFORE_LOAD, Object.assign({
                        track: e,
                        options: t,
                        logData: e.logData,
                        uri: p
                    }, (0, F.P)())), this._bufferManager.setPlayId(g);
                    let b = (null == (n = e.options) ? void 0 : n.useDefaultPlaybackSpeed) ? 1 : null != (o = null == (s = e.options) ? void 0 : s.playbackSpeed) ? o : this._playerSpeed,
                        R = {
                            position: (t.position || 0) / 1e3,
                            autoplay: null == (l = t.autoplay) || l,
                            poster: e.poster,
                            useDefaultPlaybackSpeed: !!(null == (d = e.options) ? void 0 : d.useDefaultPlaybackSpeed),
                            playbackSpeed: b,
                            callback: i,
                            muted: null != (u = t.muted) && u,
                            loop: null != (_ = t.loop) && _
                        };
                    this._loadingOptions = R;
                    let L = this._tracker;
                    return L.trackLoadStart({
                        loadTime: c,
                        loadStartMonotonic: m,
                        uri: p,
                        fileId: e.fileId,
                        playId: g.toString(),
                        logData: e.logData,
                        mediaType: e.mediaType,
                        contentType: e.contentType,
                        contentMetadata: e.metadata,
                        isVideoVisible: this._isVideoVisible,
                        videoSurface: this._videoSurface,
                        muted: this._muted,
                        startingSpeed: b,
                        playIntended: R.autoplay,
                        playedThreshold: t.playedThreshold
                    }), this._checkKeySystemAccess().then(() => this._getContentPromise(e, L)).then(t => {
                        var i;
                        if (t.isProtected() && !this._emeManager) throw new I(A.I.DISALLOW_PROTECTED_TRACK_ERROR, "Protected tracks not supported");
                        let a = t.getMediaPlaybackMode(),
                            n = null == (i = this._player) ? void 0 : i.currentTime;
                        "video" === t.getMediaType() && E !== a && this.emit(P.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED, Object.assign({
                            playbackMode: null != a ? a : "video",
                            position: eV(n || 0),
                            playbackMetadataStore: L.getPlaybackMetadataStore()
                        }, (0, F.P)())), t.setLogData(e.logData), t.strategy === r.MSE && L.setCalculatedDuration(eV(t.getCalculatedDuration())), this._upcomingContent = t
                    }).then(() => this._prepareMediaElement(R, y)).then(() => {
                        var e;
                        this._subtitleManager.setPlayer(this._player), (null == (e = this._upcomingContent) ? void 0 : e.isProtected()) && (eF.info("Attaching HTMLMediaElement to the audio processor"), this._audioProcessor.setPlayer(this._player))
                    }).then(() => this._loadContent(R, y)).then(e => this._handleLoadingComplete(e, v), this._handleLoadingError.bind(this, p, e, y, v))
                }
                preload(e) {
                    let t = this._getCacheKey(e),
                        i = this._cache;
                    if (!t || i.get(t) || !this._emeManager) return Promise.resolve(null);
                    let a = this._preloadingTracks,
                        n = a[t];
                    if (n) return n;
                    eF.info("Preloading track", t);
                    let s = {
                            manifestLatency: 0,
                            resolveLatency: 0
                        },
                        o = this._createContent(e, s, !0).then(e => {
                            if (e.strategy !== r.MSE) return e;
                            let t = e.getSegmentForTime(0);
                            if (!t) return e;
                            let i = this._tracker;
                            return i.setProtected(e.isProtected()), i.trackStrategy(e.strategy), i.setContentClass(e.contentClassName), eF.info(`Detecting ${e.strategy} strategy for ${e.contentClassName}.`), e.getBufferSetForSegment(t).then(() => e)
                        }).then(e => (i.set(t, e), delete a[t], eF.info("Cached", t), s)).catch(e => (delete a[t], eF.warn("Preloading error", e), this.emit(P.J.PLAYER_PRELOADING_ERROR, Object.assign({
                            error: e,
                            track: e.track || null,
                            canPlayNext: !("canPlayNext" in e) || e.canPlayNext,
                            preloading: !0
                        }, (0, F.P)())), Promise.reject(e)));
                    return a[t] = o, o
                }
                togglePlay() {
                    return this._isPlaying() ? this.pause() : this.resume()
                }
                setSubtitleLanguage(e) {
                    this._subtitleManager.setLanguage(e)
                }
                getSubtitleLanguages() {
                    return this._subtitleManager.getAvailableLanguages()
                }
                getActiveSubtitleLanguage() {
                    return this._subtitleManager.getActiveLanguage()
                }
                deactivateCueEvents() {
                    this._subtitleManager.deactivateListeners()
                }
                activateCueEvents() {
                    this._subtitleManager.activateListeners()
                }
                setVolume(e, t) {
                    var i;
                    if (!this.emitSync(P.J.PLAYER_BEFORE_VOLUME_CHANGE, Object.assign({
                            volume: e,
                            options: t
                        }, (0, F.P)())).defaultPrevented) {
                        if (e < 0 || e > 1) throw new I(A.I.PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE, "Volume should be in range [0, 1]");
                        this._playerVolume = e, this._volumeCommandId = null != (i = null == t ? void 0 : t.commandId) ? i : null, this._player && (this._muted && e > 0 && this.setMuted(!1), this._player.volume = this._cubicVolume ? e * e * e : e)
                    }
                }
                getVolume() {
                    return this._playerVolume
                }
                getPlayerState() {
                    var e, t, i, r, a;
                    let n = this._player,
                        s = this._currentContent,
                        o = {
                            src: (null == n ? void 0 : n.src) ? `data:${(null==s?void 0:s.getFileId())||"unknown"}` : void 0,
                            height: (null == n ? void 0 : n.clientHeight) || 0,
                            width: (null == n ? void 0 : n.clientWidth) || 0
                        },
                        l = {};
                    if (s) {
                        let e = s.getMediaTypeMimeTypes();
                        l.audio_format = e.audio, l.video_format = e.video, "video" === s.getMediaType() && n instanceof HTMLVideoElement && (l.video_height = n.videoHeight, l.video_width = n.videoWidth, o.poster = n.poster)
                    }
                    let d = null;
                    if (en(s)) {
                        let e = s.getTrackingEvents();
                        e && (d = {
                            mute: e.mute,
                            unmute: e.unmute,
                            rewind: e.rewind,
                            fullscreen: e.fullscreen,
                            accept_invitation_linear: e.accept_invitation_linear,
                            close_linear: e.close_linear,
                            exit_fullscreen: e.exit_fullscreen
                        })
                    }
                    let u = null != (e = null == s ? void 0 : s.isProtected()) && e,
                        _ = null != (t = null == s ? void 0 : s.getKeySystemInfo()) ? t : void 0;
                    return {
                        playing: !!n && !n.paused,
                        position: n ? eV(n.currentTime) : 0,
                        duration: n ? eV(n.duration) : 0,
                        volume: null != (i = this._playerVolume) ? i : 1,
                        muted: this._muted,
                        loop: null != (r = null == n ? void 0 : n.loop) && r,
                        playback_speed: null != (a = null == n ? void 0 : n.playbackRate) ? a : 0,
                        playback_speed_selected: this._playerSpeed,
                        buffering: this._rebuffering,
                        media_type: (null == s ? void 0 : s.getMediaType()) || null,
                        media_info: l,
                        protected: u,
                        protection_info: u ? {
                            keysystem: null == _ ? void 0 : _.keySystem,
                            keysystem_impl: null == _ ? void 0 : _.keySystemImpl,
                            keysystem_config: null == _ ? void 0 : _.keySystemLabel
                        } : {},
                        player_element: o,
                        content_metadata: (null == s ? void 0 : s.getContentMetadata()) || {},
                        tracking_data: d
                    }
                }
                getPlayerPosition() {
                    return this._player ? eV(this._player.currentTime) : 0
                }
                seek(e) {
                    var t;
                    if (!this._player) return;
                    let i = null == (t = this._abortController) ? void 0 : t.signal,
                        r = () => {
                            if (!this._player || (null == i ? void 0 : i.aborted)) return void eF.info("Seek dropped: operation aborted.");
                            let t = e / 1e3;
                            t < 0 ? t = 0 : t >= this._player.duration && (t = this._player.duration), this._seeking || (this._lastReportedPosition = this._player.currentTime), this._player.currentTime = t
                        };
                    this._loaded ? r() : this.once(P.J.PLAYER_LOAD, r), this._getRebufferingLatency().then(e => {
                        null != i && i.aborted || this._tracker.trackSeekRebuffering(e)
                    })
                }
                pause() {
                    return this._audioProcessor.suspend().then(() => this._player && this._isPlaying() ? (this._emitReporting("pause"), Promise.resolve(this._player.pause())) : Promise.resolve())
                }
                resume() {
                    return this._audioProcessor.resume().then(() => {
                        if (this._player && !this._isPlaying()) {
                            this._emitReporting("resume");
                            let e = eV(this._player.currentTime);
                            return this._tracker.trackPlay(e, this._player.playbackRate), Promise.resolve(this._player.play())
                        }
                        return Promise.resolve()
                    })
                }
                stop(e, t) {
                    var i, r, a;
                    let n = [],
                        s = e || {};
                    this.emit(P.J.PLAYER_BEFORE_STOP, Object.assign(Object.assign({}, (0, F.P)()), {
                        logData: s
                    })), null == (i = this._abortController) || i.abort();
                    let o = -1;
                    if (this._player) {
                        let e = this._player.currentTime;
                        this._seeking && this._lastReportedPosition && (e = this._lastReportedPosition), o = eV(e)
                    }
                    this._tracker.trackStopped(o, e, this.getStatistics() || void 0), this._bufferManager.abort(!0), this._emeManager && n.push(this._emeManager.destroySessions());
                    let l = this._player;
                    if (l) {
                        this._subtitleManager.clear(), this._fatalOnNextError = this._shouldNextErrorBeFatal(), this._fatalOnNextError && eF.warn("MediaError detected: next immediate media error will be fatal.");
                        let e = l.src;
                        if (e) eB.test(e) && URL.revokeObjectURL(e), l.removeAttribute("src");
                        else {
                            let e = M(l.getElementsByTagName("source"));
                            for (let t of (eF.info(`HTMLSourceElements to removed: ${e.length}`), e)) l.removeChild(t);
                            eF.info("Releasing HLS URLs")
                        }
                        l.load()
                    }
                    null == (r = this._currentContent) || r.unload();
                    let d = this._currentContent && this._currentContent.getMediaType();
                    return l && d && (null == (a = this._playerContainerManager) || a.eject(l, d, t), l.ownerDocument !== document && document.adoptNode(l)), this.emit(P.J.PLAYER_STOPPED, Object.assign({}, (0, F.P)())), Promise.all(n).then(() => !0)
                }
                setMuted(e = !0) {
                    let t = this._player;
                    t && (this._muted = e, t.muted = e, this.emitSync(P.J.PLAYER_MUTED_CHANGED, Object.assign({
                        muted: e,
                        position: eV(t.currentTime),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, F.P)())))
                }
                hideSubtitles() {
                    this._subtitleManager.hide()
                }
                showSubtitles() {
                    this._subtitleManager.show()
                }
                areSubtitlesShown() {
                    return this._subtitleManager.visible()
                }
                getKeySystemInfo() {
                    return this._emeManager ? this._emeManager.getKeySystemInfo() : Promise.resolve(null)
                }
                getVideoVariants() {
                    let e = this._currentContent;
                    if ((null == e ? void 0 : e.getMediaType()) !== "video") return [];
                    let t = [];
                    if (!er(e)) return t;
                    for (let i of e.getMediaProfileInfo().video.available) t.push({
                        width: i.video_width,
                        height: i.video_height,
                        bitrate: i.video_bitrate
                    });
                    return t
                }
                setPreferredBitrate(e) {
                    return "number" != typeof e ? Promise.resolve(a.INVALID) : (this._preferredBitrate = e, this._currentContent && "video" === this._currentContent.getMediaType() && e > 0 && this._bufferManager.abort(!0), this._abrManager.overrideBitrate(e), Promise.resolve(a.SUCCESS))
                }
                getCurrentBandwidth() {
                    return this._abrManager.getBandwidthEstimate()
                }
                setBackgrounded(e) {
                    this.setIsVideoVisible(!e)
                }
                setIsVideoVisible(e) {
                    var t;
                    if (this._isVideoVisible === e) return;
                    let i = null == (t = this._player) ? void 0 : t.currentTime;
                    this._isVideoVisible = e, this._tracker.setIsVideoVisible(e), this.emit(P.J.PLAYER_VIDEO_VISIBILITY_CHANGED, Object.assign({
                        visible: e,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                        position: eV(i || 0)
                    }, (0, F.P)())), this._adaptVideoBitrateBasedOnVisibility()
                }
                setVideoResolution(e) {
                    var t, i, r;
                    this._videoResolution = Object.assign(Object.assign({}, this._videoResolution), e), (r = this._currentContent) && "setVideoResolution" in r && (null == (i = (t = this._currentContent).setVideoResolution) || i.call(t, this._videoResolution))
                }
                adaptToElementSize(e) {
                    ea(this._currentContent) && this._currentContent.adapt({
                        currentElementSize: e
                    })
                }
                activateElement() {
                    var e;
                    return this._playerActivated || !this._player || this._player.src ? (this._audioProcessor.resume(), !1) : (null == (e = this._player) || e.load(), this._playerActivated = !0, !0)
                }
                getMediaConfig() {
                    return void 0 === this._mediaConfig ? (function(e, t) {
                        let i = t || ej("video"),
                            r = e => {
                                i.canPlayType("audio/mp3") && (e.formats.audio.push("audio/mp3"), e.formatsInfo.audio.push({
                                    mimeType: "audio/mp3",
                                    codec: "mp3",
                                    contentType: 'audio/mp3; codecs="mp3"'
                                }), e.supports.unprotected_audio = !0)
                            };
                        if (e) return e.getKeySystemInfo().then(e => {
                            let {
                                audioFormats: t,
                                videoFormats: i
                            } = e, a = {
                                supports: {
                                    protected_audio: !!t.length,
                                    unprotected_audio: !0,
                                    protected_video: !!i.length,
                                    unprotected_video: !0
                                },
                                formats: {
                                    audio: t.map(e => e.contentType),
                                    video: i.map(e => e.contentType)
                                },
                                formatsInfo: {
                                    audio: [...t],
                                    video: [...i]
                                }
                            };
                            return a.keysystem = e.keySystem, a.keysystem_impl = e.keySystemImpl, r(a), a
                        });
                        let a = "undefined" != typeof window && window.MediaSource ? e => MediaSource.isTypeSupported(e) : e => "probably" === i.canPlayType(e) || "probably" === i.canPlayType(e.split(";")[0]),
                            n = (0, w.Z)([k.J[0]], a),
                            s = [],
                            o = [],
                            l = [],
                            d = [];
                        if (n) {
                            let {
                                audioCapabilities: e,
                                videoCapabilities: t
                            } = n;
                            for (let t of e) s.push(t.contentType), l.push((0, w.v)(t.contentType));
                            for (let e of t) o.push(e.contentType), d.push((0, w.v)(e.contentType))
                        }
                        let u = {
                            supports: {
                                protected_audio: !1,
                                unprotected_audio: !!s.length,
                                protected_video: !1,
                                unprotected_video: !!o.length
                            },
                            formats: {
                                audio: s,
                                video: o
                            },
                            formatsInfo: {
                                audio: l,
                                video: d
                            }
                        };
                        return r(u), Promise.resolve(u)
                    })(this._emeManager, this._player).then(e => (this._mediaConfig = e, this._mediaConfig)) : Promise.resolve(this._mediaConfig)
                }
                setPlaybackSpeed(e) {
                    return !!isFinite(e) && !(e <= 0) && (this._playerSpeed = null != e ? e : 1, this._setPlaybackRate(), !0)
                }
                getStatistics() {
                    return this._player && this._currentContent ? this._statistics.getSample(this._player, this._currentContent) : null
                }
                getAudioProcessor() {
                    return this._audioProcessor
                }
                setMediaPlaybackMode(e) {
                    let t = this._player,
                        i = this._currentContent;
                    if (!t || !i || "video" !== i.getMediaType() || i.getMediaPlaybackMode() === e) return !1;
                    let r = t.currentTime;
                    return this.emit(P.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED, Object.assign({
                        playbackMode: e,
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore(),
                        position: eV(r || 0)
                    }, (0, F.P)())), i.setMediaPlaybackMode(e), !0
                }
                setVideoSurface(e) {
                    var t;
                    if (this._videoSurface === e) return;
                    this._videoSurface = e, this._tracker.setVideoSurface(e);
                    let i = null == (t = this._player) ? void 0 : t.currentTime;
                    this.emit(P.J.PLAYER_VIDEO_SURFACE_CHANGED, Object.assign({
                        videoSurface: e,
                        position: eV(i || 0),
                        playbackMetadataStore: this._tracker.getPlaybackMetadataStore()
                    }, (0, F.P)()))
                }
                getVideoSurface() {
                    return this._videoSurface
                }
            }
            var eH = i(82643),
                eJ = i(50319);
            let eK = "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues,
                eW = e => eK ? crypto.getRandomValues(new Uint8Array(e)) : function(e) {
                    let t = [];
                    for (; t.length < e;) t.push(Math.floor(256 * Math.random()));
                    return t
                }(e),
                e$ = e => (function(e) {
                    let t = "";
                    for (let i = 0; i < e.length; i++) {
                        let r = e[i];
                        r < 16 && (t += "0"), t += r.toString(16)
                    }
                    return t
                })(eW(Math.ceil(e / 2)));
            class eQ extends Error {
                constructor(e, t, i = {}) {
                    super(t), this.debug = {}, this.name = "LoggingError", this.message = t, this.code = e, this.debug = i
                }
            }
            var ez = i(58332);
            let eX = v.m.forTag("playback.logger");
            ! function(e) {
                e.FATAL = "Fatal", e.ERROR = "Error", e.WARNING = "Warning"
            }(u || (u = {}));
            class eZ extends b.bk {
                constructor(e) {
                    var t;
                    super(), this._currentTrackingData = null, this._sequenceId = 0, this._sequenceSessionStorage = {}, this._sessionId = "0", this._deviceInfo = {}, this._transport = e.transport, this._logSender = e.logSender, this._player = e.player, this._sdkId = null != (t = e.sdkId) ? t : eJ.Z7.EMPTY, this._init(e)
                }
                static create(e) {
                    return new eZ(e)
                }
                _init(e) {
                    let t = this._player;
                    t.on(P.J.PLAYER_LOAD, this._onPlayerLoad.bind(this)), t.on(P.J.PLAYER_ERROR, this._onError.bind(this, !1)), t.on(P.J.PLAYER_WARNING, this._onError.bind(this, !0)), t.on(P.J.PLAYER_PRELOADING_ERROR, this._onError.bind(this, !1)), t.on(P.J.PLAYER_TRACKING_DATA_CREATED, this._onTrackingDataCreated.bind(this)), t.on(P.J.PLAYER_TRACKING_DATA_FINALIZED, this._onTrackingDataFinalized.bind(this)), t.on(P.J.PLAYER_PLAYBACK_START, this._onPlaybackStart.bind(this)), t.on(P.J.PLAYER_LOG_CLIENT_EVENT, this._logClientEvent.bind(this)), Promise.resolve(e.deviceInfo).then(e => {
                        e && (this._deviceInfo = e)
                    }).catch(() => {})
                }
                _emitError(e, t) {
                    this.emit(P.J.LOGGER_ERROR, Object.assign({
                        error: e,
                        trackingData: t
                    }, (0, F.P)()))
                }
                _onError(e, t) {
                    var i, r, a;
                    let n = t.data,
                        s = this._currentTrackingData;
                    if (!s || s.noLog) return;
                    let o = n.error,
                        l = null != (i = null == o ? void 0 : o.debug) ? i : {};
                    l.position = "position" in n ? n.position : 0;
                    let d = {
                        track: n.track || {},
                        debug: l,
                        preloading: "preloading" in n && !!n.preloading,
                        session_id: this._sessionId,
                        playback_id: s.playbackId || null,
                        player_play_id: "playId" in n ? n.playId : null,
                        http_status_code: null != (r = null == o ? void 0 : o.status) ? r : null,
                        license_server: null != (a = null == o ? void 0 : o.licenseServer) ? a : null
                    };
                    this._logError(o.code || A.I.UNKNOWN, o, d, s, e), this._logPlaybackError(s, o, d, this._deviceInfo, e)
                }
                _onPlayerLoad(e) {
                    let t = e.data.logData;
                    if (t)
                        if (t.impressionURLs)
                            for (let e of t.impressionURLs) this._logImpression(e);
                        else t.impressionURL && this._logImpression(t.impressionURL)
                }
                _onPlaybackStart(e) {
                    let t = e.data.trackingData;
                    t.noLog || t.noStats || this._logPlaybackStart(t)
                }
                _onTrackingDataCreated(e) {
                    let t = e.data.trackingData;
                    if (t.noLog) {
                        this._currentTrackingData = null;
                        return
                    }
                    this._currentTrackingData = t, this._setSessionId(), t.noTSV || this._setSequenceId()
                }
                _setSessionId() {
                    this._sessionId = this._transport.getInitTime().toString()
                }
                _setSequenceId() {
                    this._sessionId && (this._sequenceId = this._getSequenceId(this._sessionId))
                }
                _onTrackingDataFinalized(e) {
                    let t = e.data.trackingData;
                    if (t.noLog) return;
                    let i = this._sessionId !== this._transport.getInitTime().toString();
                    if (i && this._setSessionId(), t.playbackId && !t.noTSV) {
                        if (i && this._setSequenceId(), !t.playIntended && !t.played) return void this._rollbackSequenceId(this._sessionId);
                        this._logTrackStreamVerification(t)
                    }
                    t.noStats || this._logPlaybackStats(t)
                }
                _logTrackStreamVerification(e) {
                    let t = {
                        play_track: e.currentTrackUri,
                        playback_id: e.playbackId,
                        ms_played: e.msPlayed,
                        ms_nominal_played: e.msNominalPlayed,
                        session_id: this._sessionId,
                        sequence_id: this._sequenceId,
                        next_playback_id: e.nextPlaybackId,
                        playback_service: e.playbackService
                    };
                    eX.debug("Logged TrackStreamVerification", t), this._logSender.logTrackStreamVerification(t).catch(i => {
                        var r, a, n;
                        let s = new eQ(A.I.TSV_SENDING_FAILED, i.message || "Unknown reason.", {
                            isNetworkRelated: !0
                        });
                        this._logError(s.code, i, t, e, !1);
                        let o = {
                            track: {},
                            debug: Object.assign(Object.assign({}, null != (r = null == i ? void 0 : i.debug) ? r : {}), {
                                isNetworkRelated: !0,
                                segmentTimeStart: e.segmentTimeStart,
                                segmentTimeEnd: e.segmentTimeEnd,
                                segmentByteStart: e.segmentByteStart,
                                segmentByteEnd: e.segmentByteEnd
                            }),
                            preloading: !1,
                            session_id: this._sessionId,
                            playback_id: e.playbackId,
                            player_play_id: null,
                            http_status_code: null != (a = null == i ? void 0 : i.status) ? a : null,
                            license_server: null != (n = null == i ? void 0 : i.licenseServer) ? n : null
                        };
                        this._logPlaybackError(e, i, o, this._deviceInfo, !1), this._emitError(s, e)
                    })
                }
                _logPlaybackStats(e) {
                    let t = {
                        play_track: e.currentTrackUri,
                        file_id: e.fileId,
                        playback_id: e.playbackId,
                        internal_play_id: e.internalPlayId,
                        memory_cached: e.memoryCached,
                        persistent_cached: e.persistentCached,
                        audio_format: e.audioCodec || "",
                        video_format: e.videoCodec || "",
                        manifest_id: e.fileId,
                        protected: e.isProtected,
                        key_system: e.keySystem,
                        key_system_impl: e.keySystemImpl,
                        urls_json: JSON.stringify(e.urls),
                        start_time: e.loadTime,
                        end_time: e.stopTime,
                        external_start_time: e.externalLoadTime,
                        ms_play_latency: e.msPlayLatency,
                        ms_init_latency: e.msInitLatency,
                        ms_head_latency: e.msHeadLatency,
                        ms_first_bytes_latency: e.msFirstBytesLatency,
                        ms_manifest_latency: e.msManifestLatency,
                        ms_resolve_latency: e.msResolveLatency,
                        ms_license_session_latency: e.msLicenseSessionLatency,
                        ms_license_generation_latency: e.msLicenseGenerationLatency,
                        ms_license_request_latency: e.msLicenseRequestLatency,
                        ms_license_update_latency: e.msLicenseUpdateLatency,
                        ms_played: e.msPlayed,
                        ms_nominal_played: e.msNominalPlayed,
                        ms_file_duration: e.msFileDuration,
                        ms_actual_duration: e.msActualDuration,
                        ms_metadata_duration: e.msMetadataDuration,
                        ms_start_position: e.startPosition,
                        ms_end_position: e.position,
                        ms_initial_rebuffer: e.msInitialRebuffering,
                        ms_seek_rebuffer: e.msSeekRebuffering,
                        ms_seek_rebuffer_longest: e.maxMsSeekRebuffering,
                        ms_stall_rebuffer: e.msStalled,
                        ms_stall_rebuffer_longest: e.maxMsStalled,
                        ms_played_per_surface: e.msPlayedPerSurface,
                        n_stalls: e.nStalls,
                        n_rendition_upgrade: e.nRenditionUpgrade,
                        n_rendition_downgrade: e.nRenditionDowngrade,
                        bps_bandwidth_max: e.bpsBandwidthMax,
                        bps_bandwidth_min: e.bpsBandwidthMin,
                        bps_bandwidth_avg: e.bpsBandwidthAvg,
                        n_seekback: e.nSeeksBackward,
                        n_seekforward: e.nSeeksForward,
                        audio_start_bitrate: e.audioStartBitrate,
                        video_start_bitrate: e.videoStartBitrate,
                        start_bitrate: e.startBitrate || e.bitrate || 0,
                        audio_quality: e.audioQuality,
                        time_weighted_bitrate: e.timeWeightedBitrate,
                        reason_start: e.reasonStart,
                        reason_end: e.reasonEnd,
                        initially_paused: !e.playIntended,
                        had_error: e.hadError,
                        n_warnings: e.nWarnings,
                        n_navigator_offline: e.nOffline,
                        session_id: this._sessionId,
                        sequence_id: this._sequenceId,
                        client_id: e.clientId,
                        correlation_id: e.correlationId,
                        n_dropped_video_frames: e.droppedVideoFrames,
                        n_total_video_frames: e.totalVideoFrames,
                        resolution_max: e.maxResolution || 0,
                        resolution_min: e.minResolution || 0,
                        total_bytes: e.totalBytes,
                        strategy: e.strategy
                    };
                    eX.info("Logging PlaybackStats"), this._logSender.logJSSDKPlaybackStats(t).catch(i => {
                        var r, a, n;
                        let s = new eQ(A.I.PLAYBACK_STATS_SENDING_FAILED, i.message || "Unknown reason.", {
                            isNetworkRelated: !0
                        });
                        this._logError(s.code, i, t, e, !1);
                        let o = {
                            track: {},
                            debug: Object.assign(Object.assign({}, null != (r = null == i ? void 0 : i.debug) ? r : {}), {
                                isNetworkRelated: !0,
                                segmentTimeStart: e.segmentTimeStart,
                                segmentTimeEnd: e.segmentTimeEnd,
                                segmentByteStart: e.segmentByteStart,
                                segmentByteEnd: e.segmentByteEnd
                            }),
                            preloading: !1,
                            session_id: this._sessionId,
                            playback_id: e.playbackId,
                            player_play_id: null,
                            http_status_code: null != (a = null == i ? void 0 : i.status) ? a : null,
                            license_server: null != (n = null == i ? void 0 : i.licenseServer) ? n : null
                        };
                        this._logPlaybackError(e, i, o, this._deviceInfo, !1), this._emitError(s, e)
                    })
                }
                _logPlaybackStart(e) {
                    let t = {
                        play_track: e.currentTrackUri,
                        file_id: e.fileId,
                        playback_id: e.playbackId,
                        session_id: this._sessionId,
                        ms_start_position: e.startPosition,
                        initially_paused: !e.playIntended,
                        client_id: e.clientId,
                        correlation_id: e.correlationId
                    };
                    eX.info("Logging PlaybackStart"), this._logSender.logJSSDKPlaybackStart(t).catch(i => {
                        var r, a, n;
                        let s = new eQ(A.I.PLAYBACK_START_SENDING_FAILED, i.message || "Unknown reason.", {
                            isNetworkRelated: !0
                        });
                        this._logError(s.code, i, t, e, !1);
                        let o = {
                            track: {},
                            debug: Object.assign(Object.assign({}, null != (r = null == i ? void 0 : i.debug) ? r : {}), {
                                isNetworkRelated: !0,
                                segmentTimeStart: e.segmentTimeStart,
                                segmentTimeEnd: e.segmentTimeEnd,
                                segmentByteStart: e.segmentByteStart,
                                segmentByteEnd: e.segmentByteEnd
                            }),
                            preloading: !1,
                            session_id: this._sessionId,
                            playback_id: e.playbackId,
                            player_play_id: null,
                            http_status_code: null != (a = null == i ? void 0 : i.status) ? a : null,
                            license_server: null != (n = null == i ? void 0 : i.licenseServer) ? n : null
                        };
                        this._logPlaybackError(e, i, o, this._deviceInfo, !1), this._emitError(s, e)
                    })
                }
                _getSequenceId(e) {
                    let t = this._sequenceSessionStorage[e];
                    return t || (t = 0), t + 1 >= 0x1fffffffffffff && (t = 0), this._sequenceSessionStorage[e] = t + 1, t
                }
                _rollbackSequenceId(e) {
                    let t = this._sequenceSessionStorage[e];
                    t && (this._sequenceSessionStorage[e] = Math.max(t - 1, 0))
                }
                _logImpression(e) {
                    this._transport.request(e, {
                        forget: !0
                    }).catch(function(e) {
                        eX.warn("Unable to send impression request", e)
                    })
                }
                _logClientEvent(e) {
                    let t = {
                        source: e.data.source || eJ.Z7.EMPTY,
                        source_version: ez.A.tagged || eJ.Z7.UNKNOWN,
                        event: e.data.event || eJ.Z7.EMPTY,
                        json_data: JSON.stringify(e.data.payload || {})
                    };
                    this._logSender.logJSSDKClientEvent(t).catch(e => eX.warn("Failed to log client event", t, e))
                }
                _logError(e, t, i, r, a) {
                    let n = {
                        source: "playback",
                        source_version: ez.A.tagged || eJ.Z7.UNKNOWN,
                        type: e || eJ.Z7.UNKNOWN,
                        message: t && t.message || eJ.Z7.EMPTY,
                        stack: '""',
                        json_data: JSON.stringify(i || {}),
                        json_data_version: "1.0.0",
                        client_id: r.clientId,
                        correlation_id: r.correlationId
                    };
                    a ? this._logSender.logJSSDKWarning(n).catch(e => eX.warn("Failed to log warning", n, e)) : this._logSender.logJSSDKError(n).catch(e => eX.warn("Failed to log error", n, e))
                }
                _logPlaybackError(e, t, i, r, a) {
                    let n = u.ERROR;
                    a && (n = u.WARNING), t.unrecoverable && (n = u.FATAL);
                    let {
                        preloading: s,
                        player_play_id: o
                    } = i, l = i && i.debug ? i.debug : {}, {
                        isNetworkRelated: d = !1,
                        segmentTimeStart: _,
                        segmentTimeEnd: h,
                        segmentByteStart: c,
                        segmentByteEnd: m
                    } = l, f = (0, eH.__rest)(l, ["isNetworkRelated", "segmentTimeStart", "segmentTimeEnd", "segmentByteStart", "segmentByteEnd"]);
                    f.src_url && (f.src_url = void 0);
                    let p = {
                        sdk_id: this._sdkId,
                        playback_id: e.playbackId,
                        session_id: this._sessionId,
                        package_version: ez.A.tagged || eJ.Z7.EMPTY_VERSION,
                        feature_identifier: e.featureIdentifier,
                        device_id: r.id || eJ.Z7.EMPTY,
                        device_model: r.model || eJ.Z7.EMPTY,
                        device_brand: r.brand || eJ.Z7.EMPTY,
                        os_name: r.os_name || eJ.Z7.EMPTY,
                        os_version: r.os_version || eJ.Z7.EMPTY,
                        play_track: e.currentTrackUri,
                        content_id: e.fileId,
                        content_class: e.contentClass,
                        content_type: e.contentType,
                        media_type: e.mediaType,
                        position: e.position,
                        strategy: e.strategy,
                        protected: e.isProtected,
                        url: "data:" === e.url.substring(0, 5) ? `${e.url.slice(0,69)}...` : e.url,
                        preloading: s,
                        player_sequence_index: o || void 0,
                        key_system: e.keySystem,
                        key_system_label: e.keySystemLabel,
                        key_system_impl: e.keySystemImpl,
                        segment_byte_start: c,
                        segment_byte_end: m,
                        segment_time_start: _,
                        segment_time_end: h,
                        trace_id: e$(32),
                        category: t && t.name || eJ.Z7.UNKNOWN,
                        severity: n,
                        code: t && t.code || eJ.Z7.EMPTY,
                        message: t && t.message || eJ.Z7.EMPTY,
                        http_status_code: t && t.status || void 0,
                        license_server: t && t.licenseServer || eJ.Z7.EMPTY,
                        is_network_related: d,
                        debug: Object.keys(f).length > 0 ? f : void 0
                    };
                    this._logSender.logJSSDKPlaybackError(p).catch(t => eX.warn("Failed to log playback error", e, t))
                }
            }
            class e0 extends Error {
                constructor(e = A.I.STORAGE_ERROR, t = "Storage Error", i = {}) {
                    super(t), this.status = -1, this.fileId = "", this.debug = {}, this.canPlayNext = !0, this.code = e, this.message = t, this.name = "StorageError", this.debug = i
                }
            }
            let e1 = v.m.forTag("playback.storage_resolve");
            class e2 {
                constructor(e) {
                    this._transport = e
                }
                _parseResponse(e, t) {
                    var i;
                    let r;
                    if (200 !== t.status) return (r = new e0(A.I.STORAGE_FAILED_WITH_STATUS, `Storage Resolve responded with ${t.status}`, {
                        isNetworkRelated: !0
                    })).status = t.status, r.fileId = e, Promise.reject(r);
                    let a = t.body;
                    return (null == (i = null == a ? void 0 : a.cdnurl) ? void 0 : i.length) ? Promise.resolve({
                        uri: a.cdnurl[0],
                        uris: a.cdnurl,
                        protection: "cenc"
                    }) : ((r = new e0(A.I.STORAGE_RETURNED_NO_TRACKS, `Storage Resolve returned no tracks for fileId ${e}`)).fileId = e, Promise.reject(r))
                }
                getCDNURL(e, t) {
                    e1.info("Requesting CDN URL for ", e);
                    let i = "files/audio/interactive",
                        r = t ? `v2/${i}/${t}/${e}` : `${i}/${e}`,
                        a = `@webgate/storage-resolve/${r}?version=10000000&product=9&platform=39&alt=json`;
                    return this._transport.request(a, {
                        responseType: "json",
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).then(this._parseResponse.bind(this, e))
                }
                getManifest(e) {
                    let t = `https://seektables.scdn.co/seektable/${e}.json`;
                    return e1.info("Requesting JSON manifest for ", e), this._transport.request(t, {
                        responseType: "json",
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        }
                    }).then(t => {
                        let i;
                        return 200 !== t.status ? ((i = new e0(A.I.STORAGE_TRACK_MANIFEST_FAILED, `Track manifest request failed with status code ${t.status}`, {
                            isNetworkRelated: !0
                        })).debug.file_id = e, i.status = t.status, Promise.reject(i)) : t.body ? t.body : ((i = new e0(A.I.STORAGE_TRACK_MANIFEST_EMPTY, "Received empty manifest.")).debug.file_id = e, i.status = t.status, Promise.reject(i))
                    })
                }
            }
            class e4 extends Error {
                constructor(e, t) {
                    super(t), this.debug = {}, this.name = "TrackingError", this.message = t, this.code = e
                }
            }
            class e3 {
                constructor() {
                    this._version = "1.0.0", this._map = {}
                }
                clear() {
                    this._map = {}
                }
                track(e, t) {
                    let i = this._map[e];
                    i || (i = {
                        url: e,
                        segments: 0,
                        bandwidths: [],
                        totalBandwidth: 0
                    }, this._map[e] = i), i.segments += 1, i.bandwidths.push(t.bandwidth), i.totalBandwidth += t.bandwidth
                }
                toJSON() {
                    let e = [];
                    for (let t in this._map) {
                        if (!this._map[t]) continue;
                        let i = this._map[t];
                        i && e.push({
                            url: t,
                            segments: i.segments,
                            avg_bw: parseFloat((i.totalBandwidth / i.bandwidths.length).toFixed(7))
                        })
                    }
                    return {
                        version: this._version,
                        urls: e
                    }
                }
            }
            class e5 {
                constructor() {
                    this._bitrates = {}, this._isFinalized = !1, this._needsEndSegment = !1, this._segments = [], this._cdnURLTracker = new e3, this.currentSpeed = 1, this.audioCodec = null, this.bitrate = 0, this.audioQuality = void 0, this.urls = {}, this.url = "", this.currentTrackUri = "", this.displayTrack = "", this.mediaType = "", this.externalLoadTime = 0, this.fileId = "", this.gaiaDevId = "none", this.hadError = !1, this.internalPlayId = "", this.isProtected = !1, this.keySystem = "", this.keySystemImpl = "", this.keySystemLabel = "", this.lastPlayPosition = -1, this.loadTime = 0, this.localTimeMs = -1, this.maxContinuous = 0, this.msInitialRebuffering = 0, this.maxMsSeekRebuffering = 0, this.maxMsStalled = 0, this.memoryCached = !1, this.msActualDuration = 0, this.msMetadataDuration = 0, this.msFileDuration = 0, this.msHeadLatency = null, this.msInitLatency = null, this.msKeyLatency = null, this.msLicenseGenerationLatency = null, this.msLicenseRequestLatency = null, this.msLicenseSessionLatency = null, this.msLicenseUpdateLatency = null, this.msManifestLatency = null, this.msPlayed = 0, this.msNominalPlayed = 0, this.msPlayedUnion = 0, this.msPlayLatency = null, this.msFirstBytesLatency = null, this.msResolveLatency = null, this.msSeekRebuffering = 0, this.msSeeksBackward = 0, this.msSeeksForward = 0, this.nextPlaybackId = "", this.nOffline = 0, this.noLog = !1, this.noTSV = !1, this.noStats = !1, this.nWarnings = 0, this.msStalled = 0, this.nSeeksBackward = 0, this.nSeeksForward = 0, this.nSpeedChanges = 0, this.nStalls = 0, this.nRenditionUpgrade = 0, this.nRenditionDowngrade = 0, this.bpsBandwidthMax = 0, this.bpsBandwidthMin = 0, this.bpsBandwidthAvg = 0, this.totalBandwidth = 0, this.lastBitrate = 0, this.persistentCached = !1, this.playbackId = "", this.playContext = "", this.played = !1, this.position = 0, this.reasonEnd = "unknown", this.reasonStart = "unknown", this.referrer = "unknown", this.referrerVendor = "unknown", this.referrerVersion = "unknown", this.sourceEnd = "unknown", this.sourceStart = "unknown", this.startPosition = 0, this.stopTime = 0, this.streamingRule = "none", this.timeWeightedBitrate = 0, this.totalBytes = 0, this.playIntended = !1, this.audioStartBitrate = null, this.videoStartBitrate = null, this.videoCodec = null, this.clientId = "unknown", this.correlationId = "unknown", this.droppedVideoFrames = 0, this.totalVideoFrames = 0, this.maxResolution = 0, this.minResolution = 0, this.playbackService = "", this.strategy = "", this.segmentTimeStart = null, this.segmentTimeEnd = null, this.segmentByteStart = null, this.segmentByteEnd = null, this.contentClass = "", this.contentType = "unknown", this.featureIdentifier = "", this.muted = !1, this.logData = {}, this.msPlayedPerSurface = {}, this.deviceInfo = null
                }
                static create() {
                    return new e5
                }
                _calculateUnion() {
                    let e = this._segments.slice(0),
                        t = 0,
                        i = 0,
                        r = 0,
                        a = 0,
                        n = 0,
                        s = 0,
                        o = this.maxContinuous;
                    for (; n < e.length; n++) n % 2 != 0 && void 0 !== e[n - 1] && "start" === e[n - 1].type && (o = (s = e[n].time - e[n - 1].time) > o ? s : o);
                    for (this.maxContinuous = o, e.sort((e, t) => e.time - t.time); a < e.length; a++) "start" === e[a].type && (0 === i && (r = a), ++i), "end" === e[a].type && 0 == --i && (t += e[a].time - e[r].time);
                    return t
                }
                _calculateWeightedBitrate(e) {
                    let t = this._bitrates,
                        i = 0;
                    for (let r in t) r && Object.prototype.hasOwnProperty.call(t, r) && e > 0 && (i += parseInt(r, 10) * t[r] / e);
                    return Math.round(i)
                }
                registerVideoVariant(e) {
                    var t;
                    let i = null == (t = e.videoProfile) ? void 0 : t.video_bitrate;
                    i && (this._bitrates[i] = this._bitrates[i] || 0, this.startBitrate || (this.startBitrate = i)), e.audioProfile && (this.audioCodec = e.audioProfile.audio_codec, this.audioStartBitrate = e.audioProfile.audio_bitrate), e.videoProfile && (this.videoCodec = e.videoProfile.video_codec, this.videoStartBitrate = e.videoProfile.video_bitrate, this.lastBitrate = e.videoProfile.video_bitrate, this.minResolution = e.videoProfile.video_resolution, this.maxResolution = e.videoProfile.video_resolution)
                }
                addStartSegment() {
                    this._segments.push({
                        type: "start",
                        time: this.position
                    }), this._needsEndSegment = !0
                }
                addEndSegment() {
                    this._needsEndSegment && (this._segments.push({
                        type: "end",
                        time: this.position
                    }), this._needsEndSegment = !1)
                }
                addMSPlayed(e) {
                    if (!e) return;
                    if (e < 0) throw TypeError(`Cannot add negative msNominalPlayed value: ${e}`);
                    let t = e / this.currentSpeed;
                    this.msPlayed += t, this.msNominalPlayed += e, this.videoSurface && this.isVideoVisible && "video" === this.mediaType && (this.msPlayedPerSurface[this.videoSurface] = (this.msPlayedPerSurface[this.videoSurface] || 0) + t)
                }
                addSpeedChange(e) {
                    ++this.nSpeedChanges, this.currentSpeed = e
                }
                trackBitrate(e, t) {
                    let i = e || "dummy";
                    this._bitrates[i] = this._bitrates[i] || 0, this._bitrates[i] += t
                }
                trackBufferURL(e, t) {
                    let i = e.substring(0, 5);
                    "data:" !== i && "blob:" !== i && this._cdnURLTracker.track(e, t)
                }
                finalize() {
                    if (this._isFinalized) throw new e4(A.I.TRACK_DATA_ALREADY_FINALIZED, "TrackData already finalized.");
                    this.msPlayedUnion = this._calculateUnion(), this.nSeeksBackward || this.nSeeksForward || this.nSpeedChanges || (this.msNominalPlayed = this.maxContinuous = this.msPlayedUnion, this.msPlayed = this.msNominalPlayed / this.currentSpeed, this.nSpeedChanges = 0);
                    let e = this.msPlayed;
                    return this.timeWeightedBitrate = this._calculateWeightedBitrate(e), this.startBitrate || (this.startBitrate = this.bitrate), this.urls = this._cdnURLTracker.toJSON(), this._isFinalized = !0, !0
                }
                getURLsJSON() {
                    var e, t;
                    return null != (t = null == (e = this._cdnURLTracker.toJSON().urls) ? void 0 : e.map(({
                        url: e
                    }) => e)) ? t : []
                }
                getPlaybackStats() {
                    let e;
                    switch (this.keySystem) {
                        case L.J.WIDEVINE:
                            e = "widevine";
                            break;
                        case L.J.PLAYREADY:
                        case L.J.PLAYREADY_HARDWARE:
                            e = "playready";
                            break;
                        default:
                            e = "none"
                    }
                    return {
                        ms_total_est: this.msActualDuration,
                        ms_metadata_duration: this.msMetadataDuration,
                        ms_manifest_latency: this.msManifestLatency || 0,
                        ms_latency: this.msPlayLatency || 0,
                        ms_first_bytes_latency: this.msFirstBytesLatency || 0,
                        start_offset_ms: this.startPosition,
                        ms_initial_buffering: this.msInitialRebuffering,
                        ms_initial_rebuffer: this.msInitialRebuffering,
                        ms_seek_rebuffering: this.msSeekRebuffering,
                        ms_stalled: this.msStalled,
                        max_ms_seek_rebuffering: this.maxMsSeekRebuffering,
                        max_ms_stalled: this.maxMsStalled,
                        n_stalls: this.nStalls,
                        n_rendition_upgrade: this.nRenditionUpgrade,
                        n_rendition_downgrade: this.nRenditionDowngrade,
                        bps_bandwidth_max: this.bpsBandwidthMax,
                        bps_bandwidth_min: this.bpsBandwidthMin,
                        bps_bandwidth_avg: this.bpsBandwidthAvg,
                        audiocodec: this.audioCodec ? this.audioCodec.toLowerCase() : void 0,
                        videocodec: this.videoCodec ? this.videoCodec.toLowerCase() : void 0,
                        audio_start_bitrate: this.audioStartBitrate,
                        video_start_bitrate: this.videoStartBitrate,
                        start_bitrate: this.startBitrate || this.bitrate || void 0,
                        full_screen: void 0,
                        time_weighted_bitrate: this.timeWeightedBitrate,
                        buffering_percentage: void 0,
                        prefetched_bytes: void 0,
                        prefetched_bytes_loaded: void 0,
                        prefetched_initial_bitrate: void 0,
                        key_system: e,
                        ms_key_latency: this.msKeyLatency || 0,
                        total_bytes: this.totalBytes,
                        local_time_ms: this.localTimeMs,
                        ms_played_background: void 0,
                        n_dropped_video_frames: this.droppedVideoFrames,
                        n_total_video_frames: this.totalVideoFrames,
                        resolution_max: this.maxResolution,
                        resolution_min: this.minResolution,
                        strategy: this.strategy,
                        ms_played_per_surface: this.msPlayedPerSurface
                    }
                }
                isFinalized() {
                    return this._isFinalized
                }
            }
            class e8 {
                constructor() {
                    this._store = {}
                }
                set(e, t) {
                    this._store[e] = t
                }
                get(e) {
                    var t;
                    return null != (t = this._store[e]) ? t : null
                }
            }
            let e6 = v.m.forTag("playback.tracker");
            class e9 extends b.bk {
                constructor(e = {
                    deviceInfo: null
                }) {
                    super(), this._playedThreshold = 31e3, this._playedThresholdReached = !1, this._trackingData = null, this._playbackMetadataStore = null, this._quartileTrackingEvents = {
                        firstEventFired: !1,
                        midEventFired: !1,
                        thirdEventFired: !1
                    }, this._playbackHistory = [], this._deviceInfo = null, this._playedThreshold = e.playerThreshold || 31e3, this._deviceInfo = e.deviceInfo || null
                }
                static create(e) {
                    return new e9(e)
                }
                _checkPlayedThreshold() {
                    let e = this._trackingData;
                    e && this._playedThreshold && !this._playedThresholdReached && !(e.msPlayed < this._playedThreshold) && (this._playedThresholdReached = !0, this.emit(P.J.TRACKER_PLAYED_THRESHOLD_REACHED, {
                        played: e && e.msPlayed || 0,
                        threshold: this._playedThreshold
                    }))
                }
                _checkPercentileThresholds() {
                    let e = this._trackingData;
                    if (!e) return;
                    let t = e.msActualDuration || e.msFileDuration;
                    if (!t) return;
                    let i = Math.ceil(t / 4);
                    !this._quartileTrackingEvents.firstEventFired && e.position >= i && (this._quartileTrackingEvents.firstEventFired = !0, this.emit(P.J.TRACKER_FIRST_QUARTILE, null)), !this._quartileTrackingEvents.midEventFired && e.position >= 2 * i && (this._quartileTrackingEvents.midEventFired = !0, this.emit(P.J.TRACKER_MIDPOINT, null)), !this._quartileTrackingEvents.thirdEventFired && e.position >= 3 * i && (this._quartileTrackingEvents.thirdEventFired = !0, this.emit(P.J.TRACKER_THIRD_QUARTILE, null))
                }
                getMSPlayed() {
                    return this._trackingData ? this._trackingData.msPlayed : 0
                }
                getStallsInformation() {
                    return this._trackingData ? {
                        nStalls: this._trackingData.nStalls,
                        msTotalStalled: this._trackingData.msStalled
                    } : {
                        nStalls: 0,
                        msTotalStalled: 0
                    }
                }
                trackLoadStart(e) {
                    var t;
                    let i = e5.create();
                    this._trackingData = i, this._playbackMetadataStore = new e8, this._playedThresholdReached = !1, this._quartileTrackingEvents = {
                        firstEventFired: !1,
                        midEventFired: !1,
                        thirdEventFired: !1
                    }, i.fileId = null != (t = e.fileId) ? t : "", i.currentTrackUri = e.uri, i.loadTime = e.loadTime, i.loadStartMonotonic = e.loadStartMonotonic, i.internalPlayId = e.playId, i.playIntended = e.playIntended, i.contentType = e.contentType || "unknown", i.currentSpeed = e.startingSpeed || 0, this._playedThreshold = e.playedThreshold;
                    let r = e.logData;
                    i.externalLoadTime = r.externalLoadTime || 0, i.playbackId = r.playbackId || "", i.reasonStart = r.reason || "unknown", i.sourceStart = r.source || "unknown", i.clientId = r.clientId || "", i.correlationId = r.correlationId || "", i.playbackService = r.playbackService || "", i.featureIdentifier = r.featureIdentifier || "";
                    let a = r.referrer || {};
                    i.referrer = void 0 !== a.name ? a.name : "unknown", i.referrerVersion = void 0 !== a.version ? a.version : "unknown", i.referrerVendor = void 0 !== a.vendor ? a.vendor : "unknown";
                    let n = r.format || {};
                    n.codec && (i.audioCodec = n.codec.toLowerCase());
                    let s = e.mediaType;
                    i.mediaType = s, n.bitrate && ("audio" === s ? i.audioStartBitrate = n.bitrate : "video" === s && (i.videoStartBitrate = n.bitrate), i.bitrate = n.bitrate), n.audioQuality && (i.audioQuality = n.audioQuality), i.isVideoVisible = e.isVideoVisible, i.videoSurface = e.videoSurface, i.muted = e.muted, i.currentSpeed = e.startingSpeed, i.gaiaDevId = r.deviceId || "none", i.noLog = r.noLog || !1, i.noTSV = r.noTSV || !1, i.noStats = r.noStats || !1, i.logData = r, i.deviceInfo = this._deviceInfo;
                    let o = e.contentMetadata;
                    i.contentMetadata = o, "number" == typeof(null == o ? void 0 : o.displayDuration) && (i.msMetadataDuration = o.displayDuration), this.emit(P.J.TRACKER_TRACKING_DATA_CREATED, Object.assign({
                        trackingData: i,
                        playbackMetadataStore: this._playbackMetadataStore
                    }, (0, F.P)()))
                }
                trackBufferLoadStart() {
                    let e = this._trackingData;
                    e && (e.bufferLoadStartMonotonic = (0, S.X)())
                }
                trackBytesDownloaded(e) {
                    let t = this._trackingData;
                    t && (t.totalBytes += e)
                }
                trackLoadDone(e) {
                    let t = this._trackingData;
                    t && (t.bufferLoadStartMonotonic && (t.msInitLatency = (0, S.r)(t.bufferLoadStartMonotonic)), t.localTimeMs = Date.now(), t.position = e, t.addStartSegment())
                }
                trackPlay(e, t) {
                    let i = this._trackingData;
                    i && (i.played || this.emit(P.J.TRACKER_PLAYBACK_START, {
                        trackingData: i
                    }), i.played = !0, i.position = e, i.startPosition = e, i.addSpeedChange(t || 1))
                }
                trackCanPlayThrough() {
                    if (!this._trackingData) return;
                    let e = (0, S.X)();
                    this.trackHeadLatency(e)
                }
                trackPlayLatency(e = (0, S.X)()) {
                    let t = this._trackingData;
                    t && !t.nSeeksBackward && !t.nSeeksForward && t.loadStartMonotonic && (t.msPlayLatency = (0, S.r)(t.loadStartMonotonic, e))
                }
                trackHeadLatency(e = (0, S.X)()) {
                    let t = this._trackingData;
                    t && t.bufferLoadStartMonotonic && (t.msHeadLatency = (0, S.r)(t.bufferLoadStartMonotonic, e))
                }
                trackFirstBytesLatency(e = (0, S.X)()) {
                    let t = this._trackingData;
                    t && t.loadStartMonotonic && (t.msFirstBytesLatency = (0, S.r)(t.loadStartMonotonic, e))
                }
                trackBufferURL(e, t) {
                    let i = this._trackingData;
                    i && i.trackBufferURL(e, t)
                }
                trackNavigatorOffline() {
                    let e = this._trackingData;
                    e && (e.nOffline += 1)
                }
                trackInitialRebuffering(e) {
                    let t = this._trackingData;
                    t && (t.msInitialRebuffering = e)
                }
                trackSeekRebuffering(e) {
                    let t = this._trackingData;
                    t && (e > t.maxMsSeekRebuffering && (t.maxMsSeekRebuffering = e), t.msSeekRebuffering += e)
                }
                trackMsStalled(e) {
                    let t = this._trackingData;
                    t && (e > t.maxMsStalled && (t.maxMsStalled = e), t.msStalled += e, t.nStalls++)
                }
                trackLoadFailed() {
                    let e = this._trackingData;
                    e && (this.trackPlayLatency(), e.position = 0, e.addStartSegment())
                }
                trackStopped(e, t, i) {
                    var r, a, n, s;
                    let o = this._trackingData;
                    if (!o || o.isFinalized()) return;
                    if (o.stopTime = Date.now(), o.lastPlayPosition >= 0 && e >= 0 && o.lastPlayPosition < e) {
                        let t = e - o.lastPlayPosition;
                        o.addMSPlayed(t)
                    }
                    o.addEndSegment(), o.sourceEnd = t.source || "unknown", o.reasonEnd = t.reason || "unknown", o.nextPlaybackId = t.playbackId || "", o.droppedVideoFrames = null != (a = null == (r = null == i ? void 0 : i.video) ? void 0 : r.droppedVideoFrames) ? a : 0, o.totalVideoFrames = null != (s = null == (n = null == i ? void 0 : i.video) ? void 0 : n.totalVideoFrames) ? s : 0, o.finalize(), e6.info("Tracker data finalized.");
                    let l = o.getPlaybackStats();
                    this.emit(P.J.TRACKER_TRACKING_DATA_FINALIZED, Object.assign({
                        trackingData: o,
                        playbackStats: l,
                        playbackMetadataStore: this._playbackMetadataStore
                    }, (0, F.P)())), "" !== o.playbackId && -1 !== this._playbackHistory.indexOf(o.playbackId) && this.emit(P.J.TRACKER_LOG_CLIENT_EVENT, {
                        source: "playback:tracker",
                        event: "playback_id_reuse",
                        payload: {
                            playbackId: o.playbackId,
                            playbackHistory: [...this._playbackHistory]
                        }
                    }), 10 === this._playbackHistory.length && (this._playbackHistory = this._playbackHistory.slice(1)), this._playbackHistory.push(o.playbackId)
                }
                trackPositionChanged(e) {
                    let t = this._trackingData;
                    if (!t) return;
                    let i = t.position;
                    e !== i && (t.addEndSegment(), e > i ? (t.nSeeksForward++, t.msSeeksForward += e - i) : e < i && (t.nSeeksBackward++, t.msSeeksBackward += i - e), t.position = e, t.lastPlayPosition = -1, t.addStartSegment())
                }
                trackPlaying(e) {
                    let t = this._trackingData;
                    if (t) {
                        if (t.lastPlayPosition >= 0 && t.lastPlayPosition < e) {
                            let i = e - t.lastPlayPosition;
                            t.addMSPlayed(i)
                        }
                        t.position = e, t.lastPlayPosition = e
                    }
                }
                trackPaused(e) {
                    let t = this._trackingData;
                    if (t) {
                        if (t.lastPlayPosition >= 0 && t.lastPlayPosition < e) {
                            let i = e - t.lastPlayPosition;
                            t.addMSPlayed(i)
                        }
                        t.position = e, t.lastPlayPosition = e
                    }
                }
                trackProgress(e, t) {
                    let i = this._trackingData;
                    if (!(null == i ? void 0 : i.played)) return;
                    let r = 0;
                    if (i.lastPlayPosition >= 0) {
                        if ((r = e - i.lastPlayPosition) < 0) return void e6.warn("Skipping msPlayed calculation: late progress event.");
                        i.addMSPlayed(r)
                    }
                    this._checkPlayedThreshold(), i.position = e, i.lastPlayPosition = e, this._checkPercentileThresholds(), t && i.trackBitrate(t, r)
                }
                trackSpeedChanged(e) {
                    let t = this._trackingData;
                    t && t.addSpeedChange(e)
                }
                trackVideoLoadStart(e) {
                    let t = this._trackingData;
                    t && t.registerVideoVariant(e)
                }
                trackWarning() {
                    let e = this._trackingData;
                    e && e.nWarnings++
                }
                trackOffline() {
                    let e = this._trackingData;
                    e && e.nOffline++
                }
                trackStrategy(e) {
                    let t = this._trackingData;
                    t && (t.strategy = e)
                }
                setActualDuration(e) {
                    let t = this._trackingData;
                    t && (t.msActualDuration = e)
                }
                setKeySystem(e) {
                    let t = this._trackingData;
                    t && (t.keySystem = e)
                }
                setKeySystemImpl(e) {
                    let t = this._trackingData;
                    t && (t.keySystemImpl = e)
                }
                setManifestLatency(e) {
                    let t = this._trackingData;
                    t && (t.msManifestLatency = e)
                }
                setKeyLatency(e) {
                    let t = this._trackingData;
                    t && (t.msKeyLatency = e)
                }
                setMemoryCached(e) {
                    let t = this._trackingData;
                    t && (t.memoryCached = e)
                }
                setPersistentCached(e) {
                    let t = this._trackingData;
                    t && (t.persistentCached = e)
                }
                setProtected(e) {
                    let t = this._trackingData;
                    t && (t.isProtected = e)
                }
                setHadError(e) {
                    let t = this._trackingData;
                    t && (t.hadError = e)
                }
                setLicenseSessionLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseSessionLatency = e)
                }
                setLicenseGenerationLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseGenerationLatency = e)
                }
                setLicenseRequestLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseRequestLatency = e)
                }
                setLicenseUpdateLatency(e) {
                    let t = this._trackingData;
                    t && (t.msLicenseUpdateLatency = e)
                }
                setResolveLatency(e) {
                    let t = this._trackingData;
                    t && (t.msResolveLatency = e)
                }
                setCalculatedDuration(e) {
                    let t = this._trackingData;
                    t && (t.msFileDuration = e)
                }
                setVideoSurface(e) {
                    this._trackingData && (this._trackingData.videoSurface = e)
                }
                setIsVideoVisible(e) {
                    this._trackingData && (this._trackingData.isVideoVisible = e)
                }
                trackFragment(e) {
                    let t = this._trackingData;
                    if (!t) return;
                    let {
                        bandwidth: i,
                        resolution: r
                    } = e;
                    r && ((r < t.minResolution || !t.minResolution) && (t.minResolution = r), r > t.maxResolution && (t.maxResolution = r)), (i < t.bpsBandwidthMin || !t.bpsBandwidthMin) && (t.bpsBandwidthMin = i), i > t.bpsBandwidthMax && (t.bpsBandwidthMax = i), t.bpsBandwidthAvg = t.bpsBandwidthAvg ? (t.bpsBandwidthAvg + i) / 2 : i
                }
                trackProfileChanged(e) {
                    let t = this._trackingData;
                    if (!t) return;
                    let {
                        bitrate: i
                    } = e;
                    i < t.lastBitrate && t.nRenditionDowngrade++, i > t.lastBitrate && t.nRenditionUpgrade++, t.lastBitrate = i
                }
                setContentClass(e) {
                    let t = this._trackingData;
                    t && (t.contentClass = e)
                }
                setKeySystemLabel(e) {
                    let t = this._trackingData;
                    t && (t.keySystemLabel = e)
                }
                setUrl(e) {
                    let t = this._trackingData;
                    t && (t.url = e)
                }
                setMediaType(e) {
                    let t = this._trackingData;
                    t && (t.mediaType = e)
                }
                setContentType(e = "unknown") {
                    let t = this._trackingData;
                    t && (t.contentType = e)
                }
                getPlaybackMetadataStore() {
                    return this._playbackMetadataStore
                }
            }
            class e7 extends b.bk {
                constructor(e) {
                    super(), this._transport = e, this._parseManifestResponse = this._parseManifestResponse.bind(this)
                }
                static create(e) {
                    return new e7(e)
                }
                _parseManifestResponse(e) {
                    var t;
                    let i = e.metadata.startTime;
                    if (200 !== e.status) {
                        let t = new e0(A.I.STORAGE_VIDEO_MANIFEST_FAILED, `Video manifest request failed with status ${e.status}`, {
                            isNetworkRelated: !0
                        });
                        return t.status = e.status, t.debug = e.body, this.emit(P.J.VIDEO_MANIFEST_RESOLVE_FAILED, Object.assign({
                            url: e.url,
                            error: t,
                            start_time: i
                        }, (0, F.P)())), Promise.reject(t)
                    }
                    let r = e.body,
                        a = null == (t = e.headers) ? void 0 : t.get("content-length");
                    return this.emit(P.J.VIDEO_MANIFEST_RESOLVED, Object.assign({
                        url: e.url,
                        manifest_size: a ? parseInt(a, 10) : JSON.stringify(r).length,
                        start_time: i,
                        end_time: Date.now()
                    }, (0, F.P)())), Promise.resolve(r)
                }
                getInitSegmentURLs(e, t, i, r) {
                    let a = "";
                    i && (a = e + t.replace("{{profile_id}}", i.id.toString(10)).replace("{{file_type}}", i.file_type));
                    let n = "";
                    return r && (n = e + t.replace("{{profile_id}}", r.id.toString(10)).replace("{{file_type}}", r.file_type)), {
                        audio: a,
                        video: n,
                        audioLogging: a,
                        videoLogging: n
                    }
                }
                getSegmentURLs(e, t, i, r, a) {
                    let n = "";
                    r && (n = e + t.replace("{{profile_id}}", r.id.toString(10)).replace("{{file_type}}", r.file_type));
                    let s = "";
                    return a && (s = e + t.replace("{{profile_id}}", a.id.toString(10)).replace("{{file_type}}", a.file_type)), {
                        audio: n.replace("{{segment_timestamp}}", i.toString()),
                        video: s.replace("{{segment_timestamp}}", i.toString()),
                        audioLogging: n,
                        videoLogging: s
                    }
                }
                getManifest(e, t = !1) {
                    let i = `${t?"@webgate/manifests/v9/unauth/json/sources":"@webgate/manifests/v9/json/sources"}/${e}/options/supports_drm`;
                    return this._transport.request(i, {
                        authorize: !t,
                        responseType: "json",
                        parseResponseHeaders: !0,
                        retry: {
                            condition: (e, t) => {
                                let i = e.getStatusFamily();
                                return 429 === e.status || i === t.SERVER_ERROR || i === t.CONNECTION_ERROR
                            }
                        },
                        metadata: {
                            startTime: Date.now()
                        }
                    }).then(this._parseManifestResponse)
                }
            }
            var te = i(31191);
            class tt extends Error {
                constructor(e, t, i = {}) {
                    super(), this.status = -1, this.debug = {}, this.canPlayNext = !0, this.unrecoverable = !1, this.name = "LicenseError", this.code = e, this.message = t, this.debug = i
                }
                static fatal(e, t, i = {}) {
                    let r = new tt(e, t, i);
                    return r.unrecoverable = !0, r.canPlayNext = !1, r
                }
            }
            class ti {
                constructor(e) {
                    this._sdk = {
                        name: "",
                        version: ""
                    }, this._securityLevel = null, this._urls = {}, e.sdk && (this._sdk = e.sdk), e.securityLevel && (this._securityLevel = e.securityLevel), this._transport = e.transport, this._useTestLicenseServer = !!e.useTestLicenseServer, this._transport.on(this._transport.EVENT_CONNECTION_ID, () => {
                        this._urls = {}
                    })
                }
                _getFallbackLicenseURL(e, t) {
                    switch (e) {
                        case "com.widevine.alpha":
                            return `@webgate/${this._useTestLicenseServer?"widevine-license-test":"widevine-license"}/v1/${t}/license`;
                        case "com.microsoft.playready":
                            return `@webgate/playready-license/v1/${t}/license/{contentId}`;
                        case "com.apple.fps.1_0":
                            return `@webgate/fairplay-license/v1/${t}/license`;
                        default:
                            return
                    }
                }
                get(e, t) {
                    let i = `${e}:${t}`,
                        r = this._urls[i];
                    if (r && r.expires > Date.now() + 6e4) return Promise.resolve(r.uri);
                    let a = this._useTestLicenseServer ? "&use_test_license_server=true" : "",
                        n = `@webgate/melody/v1/license_url?keysystem=${e}&mediatype=${t}&sdk_name=${this._sdk.name}&sdk_version=${this._sdk.version}${a}`;
                    return this._transport.request(n, {
                        responseType: "json",
                        signal: (0, T.createAbortSignalWithTimeout)(1e3),
                        retry: {
                            condition: e => {
                                let t = e.getStatusFamily();
                                return 429 === e.status || t === te.t.SERVER_ERROR || t === te.t.CONNECTION_ERROR
                            }
                        }
                    }).then(r => {
                        let a, n = r.body;
                        if (n && 200 === r.status) return n.expires *= 1e3, n.uri = `@webgate/${n.uri}`, this._securityLevel && (n.uri += [-1 !== n.uri.indexOf("?") ? "&" : "?", "sl=", this._securityLevel].join("")), this._urls[i] = n, n.uri;
                        if (n)
                            if (400 === r.status && n && "deprecated-version" === n.code) a = tt.fatal(A.I.LICENSE_RESOLVER_DEPRECATED_VERSION, "This version of the SDK is no longer supported. Please upgrade");
                            else if (r.getStatusFamily() === te.t.SERVER_ERROR) {
                            let i = this._getFallbackLicenseURL(e, t);
                            if (i) return i;
                            a = new tt(A.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, `Unsupported keysystem ${e}`, {
                                isNetworkRelated: !0
                            })
                        } else a = new tt(A.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, `License URL endpoint responded with status ${r.status}`, {
                            isNetworkRelated: !0
                        });
                        else a = tt.fatal(A.I.LICENSE_RESOLVE_INVALID_RESPONSE, "License URL endpoint responded with invalid response");
                        return a.status = r.status, Promise.reject(a)
                    }, i => {
                        let r;
                        if (i.code === T.TransportErrors.HTTP_REQUEST_TIMEOUT) {
                            let i = this._getFallbackLicenseURL(e, t);
                            if (i) return i;
                            new tt(A.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, `Unsupported keysystem ${e}`, {
                                isNetworkRelated: !0
                            })
                        }
                        return Promise.reject(new tt(A.I.LICENSE_RESOLVER_CANT_RESOLVE_URL, "License URL endpoint request failed", {
                            isNetworkRelated: !0
                        }))
                    })
                }
                remove(e, t) {
                    this._urls[`${e}:${t}`] = null
                }
            }
            class tr {
                constructor(e) {
                    this._melodyLogger = new eJ.nj(e)
                }
                logTrackStreamVerification(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "track_stream_verification",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKPlaybackStats(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_playback_stats",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKPlaybackStart(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_playback_start",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKError(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_error",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKWarning(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_warning",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKClientEvent(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "client_event",
                        message: e
                    }, {
                        batch: !0
                    })
                }
                logJSSDKPlaybackError(e) {
                    return this._melodyLogger.sendLog("/v1/msg/batch", {
                        type: "jssdk_playback_error",
                        message: e
                    }, {
                        batch: !0
                    })
                }
            }! function(e) {
                e[e.ABORTED = 101] = "ABORTED", e[e.NETWORK = 102] = "NETWORK", e[e.MEDIA_DECODING = 103] = "MEDIA_DECODING", e[e.SRC_NOT_SUPPORTED = 104] = "SRC_NOT_SUPPORTED", e[e.EME = 105] = "EME", e[e.GENERIC = 100] = "GENERIC"
            }(_ || (_ = {}));
            let ta = {
                [A.I.MEDIA_ABORTED]: _.ABORTED,
                [A.I.MEDIA_DECODING_ERROR]: _.MEDIA_DECODING,
                [A.I.MEDIA_NOT_SUPPORTED]: _.SRC_NOT_SUPPORTED,
                [A.I.MEDIA_NETWORK_ERROR]: _.NETWORK
            };

            function tn(e) {
                var t;
                let i = e.match(/^https?:\/\/([^/]+@)?([^/?#]+)/);
                return null != (t = null == i ? void 0 : i[2]) ? t : ""
            }! function(e) {
                e.READY = "playerready", e.VIDEO_CHANGE = "videochange", e.PLAY = "play", e.PLAYING = "playing", e.PAUSE = "pause", e.TIMEUPDATE = "timeupdate", e.SEEKING = "seeking", e.SEEKED = "seeked", e.ERROR = "error", e.ENDED = "ended", e.RENDITION_CHANGE = "renditionchange", e.REBUFFERSTART = "rebufferstart", e.REBUFFEREND = "rebufferend", e.REQUEST_COMPLETED = "requestcompleted", e.REQUEST_FAILED = "requestfailed", e.REQUEST_CANCELED = "requestcanceled"
            }(h || (h = {})),
            function(e) {
                e.MUSIC_VIDEO = "Music Video", e.VODCAST = "Video Podcast", e.AD = "Ad"
            }(c || (c = {}));
            let ts = {
                    episode: c.VODCAST,
                    track: c.MUSIC_VIDEO,
                    ad: c.AD
                },
                to = {
                    player_is_paused: !0,
                    player_width: 0,
                    player_height: 0,
                    video_source_height: 0,
                    video_source_width: 0,
                    player_is_fullscreen: void 0,
                    player_autoplay_on: void 0,
                    player_preload_on: void 0,
                    video_source_url: void 0,
                    video_source_mime_type: void 0,
                    video_source_duration: void 0,
                    video_poster_url: void 0,
                    player_language_code: void 0
                };
            class tl {
                constructor(e) {
                    this._playerId = `spotify-playback-${Date.now()}`, this._currentContentInfo = null, this._readyDeferred = (0, ed.u)(), this._isMuxInitialized = !1, this._muxInitData = null, this._player = e.player, this._mux = e.mux, this._getPlayheadTime = this._getPlayheadTime.bind(this), this._getStateData = this._getStateData.bind(this), this._init(e)
                }
                static create(e) {
                    return new tl(e)
                }
                _init(e) {
                    Promise.all([Promise.resolve(e.deviceInfo)]).then(([t]) => {
                        var i;
                        this._muxInitData = {
                            data: Object.assign({
                                env_key: e.envKey || "2qbjhhcl4u87btjbo7dh8vi2n",
                                player_name: null != (i = null == t ? void 0 : t.platform_name) ? i : null == t ? void 0 : t.platform,
                                player_version: null == t ? void 0 : t.version,
                                viewer_device_manufacturer: null == t ? void 0 : t.brand,
                                viewer_device_category: null == t ? void 0 : t.type,
                                viewer_device_name: null == t ? void 0 : t.model,
                                player_software_name: e.sdk || "spotify-playback",
                                player_software_version: e.sdkVersion || ez.A.version,
                                player_mux_plugin_name: "spotify-playback-mux-reporter",
                                player_mux_plugin_version: ez.A.version
                            }, e.muxCustomDimensions),
                            getPlayheadTime: this._getPlayheadTime,
                            getStateData: this._getStateData,
                            disablePlayheadRebufferTracking: !0
                        }, this._player.addListeners({
                            [P.J.PLAYER_BEFORE_LOAD]: this._onBeforeLoad.bind(this),
                            [P.J.PLAYER_PLAY]: this._onPlay.bind(this),
                            [P.J.PLAYER_PLAYING]: this._onPlaying.bind(this),
                            [P.J.PLAYER_PAUSED]: this._onPause.bind(this),
                            [P.J.PLAYER_PROGRESS]: this._onProgress.bind(this),
                            [P.J.PLAYER_SEEKING]: this._onSeeking.bind(this),
                            [P.J.PLAYER_POSITION_CHANGED]: this._onPositionChanged.bind(this),
                            [P.J.PLAYER_ERROR]: this._onError.bind(this),
                            [P.J.PLAYER_ENDED]: this._onEnded.bind(this),
                            [P.J.PLAYER_DURATION_CHANGED]: this._onDurationChanged.bind(this),
                            [P.J.PLAYER_VIDEO_RESIZED]: this._onVideoResized.bind(this),
                            [P.J.PLAYER_VIDEO_PROFILE_CHANGED]: this._onVideoProfileChanged.bind(this),
                            [P.J.PLAYER_FRAGMENT_FETCHED]: this._onFragmentFetched.bind(this),
                            [P.J.PLAYER_FRAGMENT_FETCH_ERROR]: this._onFragmentFetchError.bind(this),
                            [P.J.PLAYER_VIDEO_MANIFEST_RESOLVED]: this._onVideoManifestResolved.bind(this),
                            [P.J.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED]: this._onVideoManifestResolveFailed.bind(this),
                            [P.J.PLAYER_REBUFFERING_START]: this._onRebufferingStart.bind(this),
                            [P.J.PLAYER_REBUFFERING_END]: this._onRebufferingEnd.bind(this)
                        })
                    }).then(this._readyDeferred.resolve, this._readyDeferred.reject)
                }
                _getPlayheadTime() {
                    return this._player.getPlayerPosition()
                }
                _getStateData() {
                    return this._currentContentInfo ? Object.assign(Object.assign({}, this._currentContentInfo.stateData), {
                        player_language_code: this._player.getActiveSubtitleLanguage()
                    }) : null
                }
                _onDurationChanged(e) {
                    this._currentContentInfo && (this._currentContentInfo.stateData.video_source_duration = e.data.duration)
                }
                _onVideoResized(e) {
                    this._currentContentInfo && (this._currentContentInfo.stateData.player_width = e.data.width, this._currentContentInfo.stateData.player_height = e.data.height)
                }
                _onBeforeLoad(e) {
                    let {
                        track: t,
                        options: i,
                        logData: r
                    } = e.data, a = !!this._currentContentInfo;
                    if ("video" !== t.mediaType || (null == r ? void 0 : r.noLog) || (null == r ? void 0 : r.noMuxEvents)) {
                        a && this._mux.emit(this._playerId, h.VIDEO_CHANGE, {}), this._currentContentInfo = null;
                        return
                    }
                    let n = {
                            video_id: t.fileId,
                            video_title: (null == r ? void 0 : r.displayTitle) || void 0,
                            video_series: (null == r ? void 0 : r.displayGroup) || void 0,
                            video_duration: (null == r ? void 0 : r.displayDuration) || void 0
                        },
                        s = t.logData.uriType;
                    s && s in ts && (n.video_content_type = ts[s] || void 0);
                    let o = Object.assign({}, to);
                    this._currentContentInfo = {
                        track: t,
                        options: i,
                        videoData: n,
                        stateData: o
                    }, !this._isMuxInitialized && this._muxInitData ? (this._mux.init(this._playerId, this._muxInitData), this._mux.emit(this._playerId, h.READY), this._isMuxInitialized = !0) : a && this._mux.emit(this._playerId, h.VIDEO_CHANGE, n)
                }
                _onPlay() {
                    var e, t;
                    if (!this._currentContentInfo) return;
                    let i = this._currentContentInfo.stateData,
                        r = this._player.getPlayerState(),
                        a = r.media_info,
                        n = (null == (t = null == (e = this._currentContentInfo) ? void 0 : e.options) ? void 0 : t.autoplay) || !1,
                        {
                            width: s,
                            height: o,
                            src: l,
                            poster: d
                        } = r.player_element;
                    i.player_is_paused = !r.playing, i.player_width = s || 0, i.player_height = o || 0, i.video_source_height = a.video_height || 0, i.video_source_width = a.video_width || 0, i.player_autoplay_on = n, i.video_source_url = l, i.video_source_mime_type = a.video_format, i.video_source_duration = r.duration, i.video_poster_url = d, this._mux.emit(this._playerId, h.PLAY, this._currentContentInfo.videoData)
                }
                _onPlaying() {
                    if (!this._currentContentInfo) return;
                    this._currentContentInfo.stateData.player_is_paused = !1;
                    let {
                        buffering: e
                    } = this._player.getPlayerState();
                    e || this._mux.emit(this._playerId, h.PLAYING)
                }
                _onPause() {
                    this._currentContentInfo && (this._currentContentInfo.stateData.player_is_paused = !0, this._mux.emit(this._playerId, h.PAUSE))
                }
                _onProgress(e) {
                    this._currentContentInfo && this._mux.emit(this._playerId, h.TIMEUPDATE, {
                        player_playhead_time: e.data.position
                    })
                }
                _onSeeking() {
                    this._currentContentInfo && this._mux.emit(this._playerId, h.SEEKING)
                }
                _onPositionChanged() {
                    this._currentContentInfo && this._mux.emit(this._playerId, h.SEEKED)
                }
                _onError(e) {
                    var t, i;
                    let r = null == (i = null == (t = e.data) ? void 0 : t.error) ? void 0 : i.code;
                    if (this._currentContentInfo && r) {
                        let e;
                        this._mux.emit(this._playerId, h.ERROR, {
                            player_error_code: (e = ta[r], /_REQUEST_|_RESPONSE$/.test(r) ? e = _.NETWORK : e || (e = /^EME_/.test(r) ? _.EME : _.GENERIC), e),
                            player_error_message: r
                        })
                    }
                }
                _onEnded() {
                    this._currentContentInfo && this._mux.emit(this._playerId, h.ENDED)
                }
                _onVideoProfileChanged(e) {
                    if (!this._currentContentInfo) return;
                    let t = e.data.profile,
                        i = this._currentContentInfo.stateData;
                    i.video_source_height = t.height || 0, i.video_source_width = t.width || 0, i.video_source_mime_type = t.mimeType, this._mux.emit(this._playerId, h.RENDITION_CHANGE, {
                        video_source_bitrate: t.bitrate,
                        video_source_width: t.width,
                        video_source_height: t.height
                    })
                }
                _onFragmentFetched(e) {
                    let t = e.data;
                    if (!this._currentContentInfo && "video" !== t.media_type) return;
                    let i = `${t.segment_type}${t.init?"_init":""}`;
                    this._mux.emit(this._playerId, h.REQUEST_COMPLETED, {
                        request_type: i,
                        request_hostname: tn(t.url),
                        request_start: t.start_time,
                        request_response_end: t.end_time,
                        request_bytes_loaded: t.byte_length
                    })
                }
                _onFragmentFetchError(e) {
                    let t = e.data;
                    if (!this._currentContentInfo && "video" !== t.media_type) return;
                    let i = `${t.segment_type}${t.init?"_init":""}`;
                    this._mux.emit(this._playerId, h.REQUEST_FAILED, {
                        request_type: i,
                        request_hostname: tn(t.url),
                        request_start: t.start_time,
                        request_error: t.error.code,
                        request_error_code: t.error.status,
                        request_error_text: ""
                    })
                }
                _onVideoManifestResolved(e) {
                    let t = e.data;
                    this._currentContentInfo && this._mux.emit(this._playerId, h.REQUEST_COMPLETED, {
                        request_type: "manifest",
                        request_hostname: tn(t.url),
                        request_start: t.start_time,
                        request_response_end: t.end_time,
                        request_bytes_loaded: t.manifest_size
                    })
                }
                _onVideoManifestResolveFailed(e) {
                    let t = e.data;
                    this._currentContentInfo && this._mux.emit(this._playerId, h.REQUEST_FAILED, {
                        request_type: "manifest",
                        request_hostname: tn(t.url),
                        request_start: t.start_time,
                        request_error: t.error.code,
                        request_error_code: t.error.status,
                        request_error_text: ""
                    })
                }
                _onRebufferingStart() {
                    this._currentContentInfo && this._mux.emit(this._playerId, h.REBUFFERSTART)
                }
                _onRebufferingEnd() {
                    if (!this._currentContentInfo) return;
                    this._mux.emit(this._playerId, h.REBUFFEREND);
                    let {
                        playing: e
                    } = this._player.getPlayerState();
                    e && this._mux.emit(this._playerId, h.PLAYING)
                }
                ready() {
                    return this._readyDeferred.promise
                }
            }! function(e) {
                e.NULL_VALUE = "NULL_VALUE", e.LIST_START = "LIST_START", e.LIST_END = "LIST_END", e.FORBIDDEN = "FORBIDDEN", e.IGNORE = "IGNORE", e.PAUSE = "PAUSE"
            }(m || (m = {})),
            function(e) {
                e.AAC_LC = "mp4a.40.2", e.AAC_HE = "mp4a.40.5", e.FLAC = "flac", e.OPUS = "opus", e.VP9 = "vp9", e.VP8 = "vp8", e.H264_31 = "avc1.4d401f"
            }(f || (f = {}));
            var td = i(72894);

            function tu(e) {
                return "uri" in e
            }! function(e) {
                e.UNKNOWN = "UNKNOWN", e.DEFAULT = "DEFAULT", e.LOW = "LOW", e.NORMAL = "NORMAL", e.HIGH = "HIGH", e.VERY_HIGH = "VERY_HIGH", e.HIFI = "HIFI"
            }(p || (p = {})),
            function(e) {
                e.NONE = "NONE", e.CONTEXT = "CONTEXT", e.TRACK = "TRACK"
            }(E || (E = {})),
            function(e) {
                e.EMPTY = "EMPTY", e.SW_CRYPTO = "SW_CRYPTO", e.SW_DECODE = "SW_DECODE", e.HW_CRYPTO = "HW_CRYPTO", e.HW_DECODE = "HW_DECODE", e.HW_ALL = "HW_ALL"
            }(g || (g = {}));
            class t_ extends b.bk {
                constructor(e) {
                    if (super(), this._trackPlayerPromise = (0, ed.u)(), this._maxListErrors = 5, this._uid = 0, this._loadedList = null, this._loadedOptions = null, this._currentTrack = null, this._currentTrackOptions = null, this._listPlayCount = 0, this._listErrorCount = 0, this._shuffled = !1, this._repeatMode = E.NONE, this._currentSeqId = 0, !e.trackPlayer) throw TypeError("Argument `options.trackPlayer` not found.");
                    e.maxListErrors && (this._maxListErrors = e.maxListErrors), this._setListOptions = this._setListOptions.bind(this), this._replaceCurrentList = this._replaceCurrentList.bind(this), this._handleCapped = this._handleCapped.bind(this), this._handlePlaying = this._handlePlaying.bind(this), this._handlePaused = this._handlePaused.bind(this), this._handleEnded = this._handleEnded.bind(this), this._handleCanPreload = this._handleCanPreload.bind(this), this._handleError = this._handleError.bind(this), this._handlePositionChanged = this._handlePositionChanged.bind(this), this._handleDurationChanged = this._handleDurationChanged.bind(this), this._handleTimeout = this._handleTimeout.bind(this), this._handlePlayerInitError = this._handlePlayerInitError.bind(this), this._handleProgress = this._handleProgress.bind(this), this._handlePlayedThresholdReached = this._handlePlayedThresholdReached.bind(this), this._handleBeforeLoad = this._handleBeforeLoad.bind(this), this._init(e.trackPlayer)
                }
                static create(e) {
                    return new t_(e)
                }
                _init(e) {
                    this._trackPlayerPromise.promise.catch(() => {}), Promise.resolve(e).then(e => {
                        this._attachPlayerEvents(e), this._trackPlayerPromise.resolve(e)
                    }).catch(this._handlePlayerInitError)
                }
                _attachPlayerEvents(e) {
                    e.addListeners({
                        [P.J.PLAYER_CAN_PRELOAD]: this._handleCanPreload,
                        [P.J.PLAYER_CAPPED]: this._handleCapped,
                        [P.J.PLAYER_ENDED]: this._handleEnded,
                        [P.J.PLAYER_ERROR]: this._handleError,
                        [P.J.PLAYER_PAUSED]: this._handlePaused,
                        [P.J.PLAYER_PLAYING]: this._handlePlaying,
                        [P.J.PLAYER_TIMEOUT]: this._handleTimeout,
                        [P.J.PLAYER_POSITION_CHANGED]: this._handlePositionChanged,
                        [P.J.PLAYER_DURATION_CHANGED]: this._handleDurationChanged,
                        [P.J.PLAYER_PROGRESS]: this._handleProgress,
                        [P.J.PLAYER_BEFORE_LOAD]: this._handleBeforeLoad,
                        [P.J.PLAYER_PLAYED_THRESHOLD_REACHED]: this._handlePlayedThresholdReached
                    }), this.proxyEmitAllSync(e, {
                        [P.J.PLAYER_BEFORE_VOLUME_CHANGE]: P.J.LIST_PLAYER_BEFORE_VOLUME_CHANGE,
                        [P.J.PLAYER_VOLUME_CHANGED]: P.J.LIST_PLAYER_VOLUME_CHANGED,
                        [P.J.PLAYER_LOAD]: P.J.LIST_PLAYER_PLAYER_LOAD,
                        [P.J.REPORTING_START]: P.J.REPORTING_START,
                        [P.J.REPORTING_CREATIVE_VIEW]: P.J.REPORTING_CREATIVE_VIEW,
                        [P.J.REPORTING_FIRST_QUARTILE]: P.J.REPORTING_FIRST_QUARTILE,
                        [P.J.REPORTING_MIDPOINT]: P.J.REPORTING_MIDPOINT,
                        [P.J.REPORTING_THIRD_QUARTILE]: P.J.REPORTING_THIRD_QUARTILE,
                        [P.J.REPORTING_COMPLETE]: P.J.REPORTING_COMPLETE,
                        [P.J.REPORTING_PAUSE]: P.J.REPORTING_PAUSE,
                        [P.J.REPORTING_RESUME]: P.J.REPORTING_RESUME,
                        [P.J.REPORTING_ERROR]: P.J.REPORTING_ERROR
                    }), this.proxyEmitAll(e, {
                        [P.J.PLAYER_AUTOPLAY_FAILED]: P.J.LIST_PLAYER_AUTOPLAY_FAILED,
                        [P.J.PLAYER_TRACKING_DATA_CREATED]: P.J.LIST_PLAYER_TRACKING_DATA_CREATED,
                        [P.J.PLAYER_TRACKING_DATA_FINALIZED]: P.J.LIST_PLAYER_TRACKING_DATA_FINALIZED,
                        [P.J.PLAYER_BUFFER_STALLED]: P.J.LIST_PLAYER_BUFFER_STALLED,
                        [P.J.PLAYER_BUFFERING_START]: P.J.LIST_PLAYER_BUFFERING_START,
                        [P.J.PLAYER_BUFFERING_END]: P.J.LIST_PLAYER_BUFFERING_END,
                        [P.J.PLAYER_REBUFFERING_START]: P.J.LIST_PLAYER_REBUFFERING_START,
                        [P.J.PLAYER_REBUFFERING_END]: P.J.LIST_PLAYER_REBUFFERING_END,
                        [P.J.PLAYER_VIDEO_ELEMENT_APPENDED]: P.J.LIST_PLAYER_VIDEO_ELEMENT_APPENDED,
                        [P.J.PLAYER_VIDEO_ELEMENT_REMOVED]: P.J.LIST_PLAYER_VIDEO_ELEMENT_REMOVED,
                        [P.J.PLAYER_DISPLAYED_CUES_CHANGED]: P.J.LIST_PLAYER_DISPLAYED_CUES_CHANGED,
                        [P.J.PLAYER_VIDEO_PROFILE_CHANGED]: P.J.LIST_PLAYER_VIDEO_PROFILE_CHANGED,
                        [P.J.PLAYER_PLAYBACK_SPEED_CHANGED]: P.J.LIST_PLAYER_PLAYBACK_SPEED_CHANGED,
                        [P.J.PLAYER_MUTED_CHANGED]: P.J.LIST_PLAYER_MUTED_CHANGED,
                        [P.J.PLAYER_SEEKING]: P.J.LIST_PLAYER_SEEKING,
                        [P.J.PLAYER_SUBTITLE_LANGUAGES_LOADED]: P.J.LIST_PLAYER_SUBTITLE_LANGUAGES_LOADED,
                        [P.J.PLAYER_PLAYING_PROFILE_CHANGED]: P.J.LIST_PLAYER_PLAYING_PROFILE_CHANGED,
                        [P.J.PLAYER_FIRST_BYTES]: P.J.LIST_PLAYER_FIRST_BYTES,
                        [P.J.PLAYER_BEFORE_STOP]: P.J.LIST_PLAYER_BEFORE_STOP,
                        [P.J.PLAYER_VIDEO_VISIBILITY_CHANGED]: P.J.LIST_PLAYER_VIDEO_VISIBILITY_CHANGED,
                        [P.J.PLAYER_MEDIA_PLAYBACK_MODE_CHANGED]: P.J.LIST_PLAYER_MEDIA_PLAYBACK_MODE_CHANGED,
                        [P.J.PLAYER_VIDEO_SURFACE_CHANGED]: P.J.LIST_PLAYER_VIDEO_SURFACE_CHANGED
                    })
                }
                _translatePosition(e) {
                    var t, i, r;
                    return null != (r = null == (i = null == (t = this._loadedList) ? void 0 : t.translatePosition) ? void 0 : i.call(t, e)) ? r : e
                }
                _translateDuration(e) {
                    var t, i, r;
                    let a = isNaN(e) ? 0 : e;
                    return null != (r = null == (i = null == (t = this._loadedList) ? void 0 : t.translateDuration) ? void 0 : i.call(t, a)) ? r : a
                }
                _handleProgress(e) {
                    this.emit(P.J.LIST_PLAYER_PROGRESS, Object.assign(Object.assign({}, e.data), {
                        position: this._translatePosition(e.data.position)
                    }))
                }
                _handleBeforeLoad(e) {
                    this.emit(P.J.LIST_PLAYER_BEFORE_PLAYER_LOAD, Object.assign(Object.assign({}, e.data), {
                        options: Object.assign(Object.assign({}, e.data.options), {
                            position: this._translatePosition(e.data.options.position)
                        })
                    }))
                }
                _handlePlayerInitError(e) {
                    this._trackPlayerPromise.reject(new I(A.I.LIST_PLAYER_NO_TRACK_PLAYER, e.message || "Track player promise was rejected."))
                }
                _handleCapped(e) {
                    let t = this._currentTrack;
                    t && this.emit(P.J.LIST_PLAYER_CAPPED, Object.assign({
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, e.data))
                }
                _handlePlaying(e) {
                    let t = this._currentTrack;
                    t && this.emit(P.J.LIST_PLAYER_PLAYING, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        position: this._translatePosition(e.data.position),
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handlePaused(e) {
                    let t = this._currentTrack;
                    t && this.emit(P.J.LIST_PLAYER_PAUSED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        position: this._translatePosition(e.data.position),
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handleCanPreload() {
                    this._preloadUpcomingTrack().catch(() => {})
                }
                _handleEnded(e) {
                    let t = this._currentTrack;
                    t && (this.emit(P.J.LIST_PLAYER_TRACK_ENDED, Object.assign({
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, e.data)), this.next(td.B.TRACK_DONE))
                }
                _handleTimeout(e) {
                    let t = this._currentTrack;
                    t && (this.emit(P.J.LIST_PLAYER_TRACK_TIMEOUT, Object.assign({
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, e.data)), this.next(td.B.TRACK_ERROR))
                }
                _handlePositionChanged(e) {
                    let t = this._currentTrack;
                    t && this.emit(P.J.LIST_PLAYER_POSITION_CHANGED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        previousPosition: null !== e.data.previousPosition ? this._translatePosition(e.data.previousPosition) : e.data.previousPosition,
                        position: this._translatePosition(e.data.position),
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handleDurationChanged(e) {
                    let t = this._currentTrack;
                    t && this.emit(P.J.LIST_PLAYER_DURATION_CHANGED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        position: this._translatePosition(e.data.position),
                        duration: this._translateDuration(e.data.duration),
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp,
                        playbackMetadataStore: e.data.playbackMetadataStore
                    })
                }
                _handlePlayedThresholdReached(e) {
                    let t = this._currentTrack;
                    t && this.emit(P.J.LIST_PLAYER_PLAYED_THRESHOLD_REACHED, {
                        uid: this._uid,
                        track: t,
                        options: this._currentTrackOptions,
                        list: this._loadedList,
                        threshold: e.data.threshold,
                        position: this._translatePosition(e.data.position),
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    })
                }
                _handleError(e) {
                    let t = this._currentTrack,
                        i = e.data;
                    if (!t) return;
                    i.position = this._translatePosition(e.data.position), this.emit(P.J.LIST_PLAYER_ERROR, i), this.emitSync(P.J.LIST_PLAYER_ERROR_SYNC, i);
                    let r = !!i.error && i.error.listPlayerIgnore;
                    !r && this._listErrorCount++, i.canPlayNext && (r || this._listErrorCount <= this._maxListErrors ? this.next(td.B.TRACK_ERROR) : this.emit(P.J.LIST_PLAYER_MAX_LIST_ERRORS_REACHED, {
                        count: this._listErrorCount,
                        threshold: this._maxListErrors,
                        timestamp: e.data.timestamp,
                        monotonicTimestamp: e.data.monotonicTimestamp
                    }))
                }
                _handleTrackLoaded(e) {
                    this.emitSync(P.J.LIST_PLAYER_TRACK_LOADED, e)
                }
                _incrementSeqId() {
                    return this._currentSeqId >= 0x1fffffffffffff ? this._currentSeqId = 0 : this._currentSeqId += 1, this._currentSeqId
                }
                _getTrackPlayer() {
                    return this._trackPlayerPromise.promise
                }
                _setListIndex(e, t) {
                    let i = t.index && -1 !== t.index ? t.index : 0;
                    return Promise.all([e, t, e.startAt(i)])
                }
                _setListOptions([e, t, i]) {
                    return Promise.all([e.setShuffle(!!this._shuffled), e.setRepeatMode(this._repeatMode)]).then(() => [e, t])
                }
                _replaceCurrentList([e, t]) {
                    return this.emitSync(P.J.LIST_PLAYER_BEFORE_LIST_CHANGE, Object.assign({
                        newList: e,
                        newOptions: t,
                        oldList: this._loadedList,
                        oldOptions: this._loadedOptions
                    }, (0, F.P)())), this._loadedList = e, this._loadedOptions = t, this._listPlayCount = 0, this._listErrorCount = 0, this.emit(P.J.LIST_PLAYER_LIST_CHANGED, Object.assign({
                        list: e,
                        options: t
                    }, (0, F.P)())), a.SUCCESS
                }
                _changeTrack(e, t, i) {
                    let r;
                    if (this._currentSeqId !== i) return Promise.resolve(a.CANCELLED);
                    this.emitSync(P.J.LIST_PLAYER_BEFORE_TRACK_LOAD, Object.assign({
                        list: this._loadedList,
                        newTrack: e,
                        oldTrack: this._currentTrack
                    }, (0, F.P)())), this._uid++;
                    let n = ++this._listPlayCount,
                        s = this._loadedOptions,
                        o = !0,
                        l = 0,
                        d = 3e4,
                        u = !1,
                        _ = !1;
                    s && (1 === n ? (o = !s.paused, l = s.initialPosition || s.position || 0) : l = s.position || 0, u = s.muted || !1, _ = s.loop || !1);
                    let h = t === td.B.TRACK_DONE;
                    if (e.options) {
                        let t = e.options;
                        void 0 !== t.paused && (o = !t.paused), void 0 !== t.position && (l = t.position), void 0 !== t.playedThreshold && (d = t.playedThreshold), void 0 !== t.loadingTimeout && (r = t.loadingTimeout), void 0 !== t.muted && (u = t.muted), void 0 !== t.loop && (_ = t.loop)
                    }
                    this._currentTrack = e, this._currentTrackOptions = {
                        reason: t,
                        paused: !o,
                        position: l,
                        playedThreshold: d,
                        muted: u,
                        loop: _
                    };
                    let c = this._handleTrackLoaded.bind(this, Object.assign({
                        uid: this._uid,
                        track: this._currentTrack,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, (0, F.P)()));
                    return this._getTrackPlayer().then(t => this._currentSeqId !== i ? a.CANCELLED : (Promise.resolve(t.load(e, {
                        uriProperty: "playableURI",
                        autoplay: o,
                        position: l,
                        playedThreshold: d,
                        continuePrevious: h,
                        loadingTimeout: r,
                        muted: u,
                        loop: _
                    }, c)).catch(() => {}), a.SUCCESS))
                }
                _preloadUpcomingTrack() {
                    let e = this._loadedList;
                    return e ? e.peekNext({
                        reason: td.B.TRACK_DONE,
                        listConstants: m
                    }).then(e => e === m.FORBIDDEN ? a.FORBIDDEN : e === m.NULL_VALUE ? a.INVALID : e === m.LIST_END ? a.LIST_END : tu(e) && e.playable ? this.preloadTrack(e) : a.INVALID) : Promise.reject(new I(A.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                preloadTrack(e) {
                    return this._getTrackPlayer().then(t => (t.preload(e).catch(() => {}), a.SUCCESS))
                }
                activateElement() {
                    return this._getTrackPlayer().then(e => (e.activateElement(), a.SUCCESS))
                }
                load(e, t) {
                    let i = function(e = {}) {
                        let t = {
                            index: -1,
                            position: 0,
                            initialPosition: 0,
                            playbackSpeed: 1,
                            duration: -1,
                            paused: !1,
                            reason: td.B.UNKNOWN,
                            muted: !1,
                            loop: !1
                        };
                        return void 0 !== e.index && (t.index = e.index), void 0 !== e.position && (t.position = e.position), void 0 !== e.initialPosition && (t.initialPosition = e.initialPosition), void 0 !== e.duration && (t.duration = e.duration), void 0 !== e.paused && (t.paused = e.paused), void 0 !== e.playbackSpeed && (t.playbackSpeed = e.playbackSpeed), void 0 !== e.reason && (t.reason = e.reason), void 0 !== e.muted && (t.muted = e.muted), void 0 !== e.loop && (t.loop = e.loop), t
                    }(t || this._loadedOptions || {});
                    return this._setListIndex(e, i).then(this._setListOptions).then(this._replaceCurrentList)
                }
                play(e, t) {
                    return this.load(e, t).then(() => {
                        if (this._loadedList !== e) return a.CANCELLED;
                        let t = this._loadedOptions ? this._loadedOptions.reason : td.B.UNKNOWN;
                        return this.next(t)
                    })
                }
                canChangeTrack() {
                    return this._loadedList ? this._loadedList.peekNext({
                        reason: td.B.FORWARD_BUTTON,
                        listConstants: m
                    }).then(e => e !== m.FORBIDDEN) : Promise.resolve(!0)
                }
                next(e) {
                    if (!e) return Promise.reject(new I(A.I.LIST_PLAYER_INVALID_ARGUMENT, "The argument `reason` is required."));
                    let t = this._loadedList;
                    if (!t) return Promise.reject(new I(A.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."));
                    this.emitSync(P.J.LIST_PLAYER_BEFORE_NEXT, Object.assign({
                        list: t,
                        reason: e
                    }, (0, F.P)()));
                    let i = this._incrementSeqId(),
                        r = {
                            reason: e,
                            listConstants: m
                        };
                    return t.next(r).then(r => this._currentSeqId !== i ? a.CANCELLED : r === m.FORBIDDEN ? a.FORBIDDEN : r === m.NULL_VALUE ? this.next(e) : r === m.LIST_END ? (this.emit(P.J.LIST_PLAYER_LIST_ENDED, Object.assign({
                        list: t,
                        reason: td.B.END_PLAY
                    }, (0, F.P)())), this.clear(e), a.LIST_END) : tu(r) ? r.playable ? this._changeTrack(r, e, i) : (this.emit(P.J.LIST_PLAYER_TRACK_UNPLAYABLE, Object.assign({
                        track: r,
                        list: t
                    }, (0, F.P)())), this.next(e)) : a.INVALID)
                }
                previous(e) {
                    if (!e) return Promise.reject(new I(A.I.LIST_PLAYER_INVALID_ARGUMENT, "The argument `reason` is required."));
                    let t = this._loadedList;
                    if (!t) return Promise.reject(new I(A.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."));
                    this.emitSync(P.J.LIST_PLAYER_BEFORE_PREVIOUS, Object.assign({
                        list: t,
                        reason: e
                    }, (0, F.P)()));
                    let i = this._incrementSeqId(),
                        r = {
                            reason: e,
                            listConstants: m
                        };
                    return t.previous(r).then(r => this._currentSeqId !== i ? a.CANCELLED : r === m.FORBIDDEN ? a.FORBIDDEN : r === m.NULL_VALUE ? this.previous(e) : r === m.LIST_START ? (this.emit(P.J.LIST_PLAYER_LIST_ENDED, Object.assign({
                        list: t,
                        reason: td.B.END_PLAY
                    }, (0, F.P)())), this.clear(e), a.LIST_END) : tu(r) ? r.playable ? this._changeTrack(r, e, i) : (this.emit(P.J.LIST_PLAYER_TRACK_UNPLAYABLE, Object.assign({
                        track: r,
                        list: t
                    }, (0, F.P)())), this.previous(e)) : a.INVALID)
                }
                pause() {
                    return this._loadedList ? this._currentTrack ? this._getTrackPlayer().then(e => e.pause().then(() => a.SUCCESS).catch(e => (null == e ? void 0 : e.name) === "AbortError" ? a.CANCELLED : a.FORBIDDEN)) : Promise.resolve(a.SUCCESS) : Promise.reject(new I(A.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                resume() {
                    return this._loadedList ? this._currentTrack ? this._getTrackPlayer().then(e => e.resume().then(() => a.SUCCESS).catch(e => (null == e ? void 0 : e.name) === "AbortError" ? a.CANCELLED : a.FORBIDDEN)) : Promise.resolve(a.SUCCESS) : Promise.reject(new I(A.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                togglePlay() {
                    return this._loadedList ? this._currentTrack ? this._getTrackPlayer().then(e => e.togglePlay().then(() => a.SUCCESS).catch(e => (null == e ? void 0 : e.name) === "AbortError" ? a.CANCELLED : a.FORBIDDEN)) : Promise.resolve(a.SUCCESS) : Promise.reject(new I(A.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."))
                }
                stop(e) {
                    let t = {
                            reason: e || td.B.UNKNOWN
                        },
                        i = this._currentTrack;
                    return i && i.logData && (t.source = i.logData.source, t.playbackService = i.logData.playbackService), this._incrementSeqId(), this._getTrackPlayer().then(e => (e.stop(t), this.emit(P.J.LIST_PLAYER_STOPPED, Object.assign({
                        uid: this._uid,
                        options: this._currentTrackOptions,
                        list: this._loadedList
                    }, (0, F.P)())), a.SUCCESS))
                }
                clear(e) {
                    return this.stop(e).then(() => (this._loadedList = null, this._loadedOptions = null, this._currentTrack = null, this._currentTrackOptions = null, this.emit(P.J.LIST_PLAYER_CLEARED, Object.assign({}, (0, F.P)())), a.SUCCESS))
                }
                setShuffle(e) {
                    let t = !!e;
                    if (this._shuffled !== t) {
                        this._shuffled = t, this.emit(P.J.LIST_PLAYER_SHUFFLE_CHANGED, Object.assign({
                            player: this,
                            shuffled: t
                        }, (0, F.P)()));
                        let e = this._loadedList;
                        e && e.setShuffle(this._shuffled)
                    }
                    return Promise.resolve(a.SUCCESS)
                }
                setRepeatMode(e) {
                    if (!(e in E)) return Promise.reject(new I(A.I.LIST_PLAYER_INVALID_ARGUMENT, "The value of repeat mode is not a correct RepeatMode enum value"));
                    if (this._repeatMode !== e) {
                        this._repeatMode = e, this.emit(P.J.LIST_PLAYER_REPEAT_MODE_CHANGED, Object.assign({
                            player: this,
                            repeatMode: e
                        }, (0, F.P)()));
                        let t = this._loadedList;
                        t && t.setRepeatMode(this._repeatMode)
                    }
                    return Promise.resolve(a.SUCCESS)
                }
                getVolume() {
                    return this._getTrackPlayer().then(e => e.getVolume())
                }
                setVolume(e, t = null) {
                    return this._getTrackPlayer().then(i => (i.setVolume(e, {
                        commandId: null != t ? t : void 0
                    }), a.SUCCESS))
                }
                seek(e, t = td.B.SEEK) {
                    var i, r;
                    let n = this._loadedList;
                    if (!n) return Promise.reject(new I(A.I.LIST_PLAYER_NO_LIST, "Cannot perform operation; no list was loaded."));
                    if ("function" == typeof n.allowSeeking && !n.allowSeeking()) return Promise.reject(new I(A.I.LIST_PLAYER_FORBIDDEN, "The operation is not allowed."));
                    let s = null != (r = null == (i = n.handleSeek) ? void 0 : i.call(n, e, {
                        reason: t,
                        listConstants: m
                    })) ? r : e;
                    return s === m.PAUSE ? this.pause().then(t => (this.emit(P.J.LIST_PLAYER_SEEK_HANDLED, Object.assign({
                        position: e,
                        reason: s
                    }, (0, F.P)())), t)) : s === m.IGNORE ? (this.emit(P.J.LIST_PLAYER_SEEK_HANDLED, Object.assign({
                        position: e,
                        reason: s
                    }, (0, F.P)())), Promise.resolve(a.SUCCESS)) : this._currentTrack ? this._getTrackPlayer().then(e => (e.seek(s), a.SUCCESS)) : Promise.resolve(a.SUCCESS)
                }
                getListConstants() {
                    return m
                }
                getLoadedList() {
                    return this._loadedList
                }
                getLoadedOptions() {
                    return this._loadedOptions
                }
                getPlayerState() {
                    return this._getTrackPlayer().then(e => {
                        let t = e.getPlayerState();
                        return Object.assign(Object.assign({}, t), {
                            position: this._translatePosition(t.position),
                            duration: this._translateDuration(t.duration)
                        })
                    })
                }
                getState() {
                    return this.getPlayerState().then(e => ({
                        playbackState: e,
                        track: this._currentTrack,
                        list: this._loadedList,
                        options: this._loadedOptions
                    }))
                }
                getMediaConfig() {
                    return this._getTrackPlayer().then(e => e.getMediaConfig())
                }
                hideSubtitles() {
                    return this._getTrackPlayer().then(e => e.hideSubtitles()).then(() => a.SUCCESS)
                }
                showSubtitles() {
                    return this._getTrackPlayer().then(e => e.showSubtitles()).then(() => a.SUCCESS)
                }
                areSubtitlesShown() {
                    return this._getTrackPlayer().then(e => e.areSubtitlesShown())
                }
                getSubtitleLanguages() {
                    return this._getTrackPlayer().then(e => e.getSubtitleLanguages())
                }
                getActiveSubtitleLanguage() {
                    return this._getTrackPlayer().then(e => {
                        var t;
                        return null != (t = e.getActiveSubtitleLanguage()) ? t : null
                    })
                }
                deactivateCueEvents() {
                    return this._getTrackPlayer().then(e => e.deactivateCueEvents()).then(() => a.SUCCESS)
                }
                activateCueEvents() {
                    return this._getTrackPlayer().then(e => e.activateCueEvents()).then(() => a.SUCCESS)
                }
                getCurrentBandwidth() {
                    return this._getTrackPlayer().then(e => e.getCurrentBandwidth())
                }
                setSubtitleLanguage(e) {
                    return this._getTrackPlayer().then(t => t.setSubtitleLanguage(e)).then(() => a.SUCCESS)
                }
                setPlaybackSpeed(e) {
                    return this._getTrackPlayer().then(t => t.setPlaybackSpeed(e)).then(e => e ? a.SUCCESS : a.FORBIDDEN)
                }
                setMuted(e) {
                    return this._getTrackPlayer().then(t => (t.setMuted(e), a.SUCCESS))
                }
                getStatistics() {
                    return this._getTrackPlayer().then(e => e.getStatistics())
                }
                getAudioProcessor() {
                    return this._getTrackPlayer().then(e => e.getAudioProcessor())
                }
                adaptToElementSize(e) {
                    return this._getTrackPlayer().then(t => (t.adaptToElementSize(e), a.SUCCESS))
                }
                setIsVideoVisible(e) {
                    return this._getTrackPlayer().then(t => (t.setIsVideoVisible(e), a.SUCCESS))
                }
                setMediaPlaybackMode(e) {
                    return this._getTrackPlayer().then(t => t.setMediaPlaybackMode(e)).then(e => e ? a.SUCCESS : a.FORBIDDEN)
                }
                setVideoSurface(e) {
                    return this._getTrackPlayer().then(t => (t.setVideoSurface(e), a.SUCCESS))
                }
                getVideoSurface() {
                    return this._getTrackPlayer().then(e => e.getVideoSurface())
                }
            }
            let th = v.m.forTag("playback.init");

            function tc(e) {
                return new Promise((t, i) => {
                    var r, a, n, s, o, l, d, u, _, h, c, m, f;
                    if (!e.transport) return void i(TypeError("Argument transport is required."));
                    if ("undefined" != typeof window && (("boolean" == typeof window.isSecureContext ? window.isSecureContext : function() {
                            if ("undefined" == typeof window || !window.location) return !1;
                            let e = window.location;
                            if ("https" === e.protocol || "file" === e.protocol) return !0;
                            let t = e.hostname;
                            return !!/^127(\.[0-255]){3}$|^locahost\.?$|\.localhost\.?$/.test(t)
                        }()) || null == (r = window.console) || r.warn("%cDRM might not be available from unsecure contexts", "background: #222; color: #bada55; font-size: 40px")), e.playerContainerManager && ("function" != typeof(null == (a = e.playerContainerManager) ? void 0 : a.eject) || "function" != typeof(null == (n = e.playerContainerManager) ? void 0 : n.inject))) return void i(TypeError("Both inject and eject PlayerContainerManager functions must be present."));
                    let {
                        transport: p
                    } = e, [E = "", g = ""] = (e.sdkId || "").split(":"), v = Object.assign(Object.assign({}, e), {
                        tracker: e9.create({
                            deviceInfo: (null == (s = e.loggerOptions) ? void 0 : s.deviceInfo) ? Promise.resolve(null == (o = e.loggerOptions) ? void 0 : o.deviceInfo) : null
                        }),
                        audioResolver: new e2(p),
                        videoResolver: new e7(p),
                        licenseURLResolver: new ti({
                            transport: p,
                            sdk: {
                                name: E,
                                version: g
                            },
                            securityLevel: e.securityLevel,
                            useTestLicenseServer: e.useTestLicenseServer
                        }),
                        newBufferPerTrack: null == (l = e.newBufferPerTrack) || l,
                        preinitMediaElement: null == (d = e.preinitMediaElement) || d,
                        audioProcessorOptions: Object.assign(Object.assign({}, e.audioProcessorOptions), {
                            disable: null != (_ = null == (u = e.audioProcessorOptions) ? void 0 : u.disable) ? _ : !!e.createPlayer
                        })
                    });
                    !e.unauthenticatedLogs || (null == (h = e.loggerOptions) ? void 0 : h.endpoint) || (e.loggerOptions = Object.assign(Object.assign({}, e.loggerOptions), {
                        endpoint: "https://spclient.wg.spotify.com/melody/unauth"
                    })), (null == (c = null == e ? void 0 : e.loggerOptions) ? void 0 : c.deviceInfo) || Promise.all([null == (m = e.loggerOptions) ? void 0 : m.platform, null == (f = e.loggerOptions) ? void 0 : f.clientVersion]).then(([t, i]) => {
                        e.loggerOptions = Object.assign(Object.assign({}, e.loggerOptions), {
                            deviceInfo: {
                                platform: t,
                                version: i
                            }
                        })
                    }), eq.create(v).then(t => {
                        let i = Object.assign({
                                disableMux: !0
                            }, e.loggerOptions),
                            r = new tr(Object.assign(Object.assign({}, i), {
                                transport: p,
                                sdkId: e.sdkId,
                                platform: Promise.resolve(i.deviceInfo).then(e => {
                                    var t;
                                    return null != (t = null == e ? void 0 : e.platform) ? t : ""
                                }),
                                clientVersion: Promise.resolve(i.deviceInfo).then(e => {
                                    var t;
                                    return null != (t = null == e ? void 0 : e.version) ? t : ""
                                })
                            })),
                            a = eZ.create({
                                transport: p,
                                player: t,
                                logSender: r,
                                sdkId: e.sdkId,
                                deviceInfo: i.deviceInfo
                            });
                        return i.disableMux || tl.create({
                            player: t,
                            mux: y,
                            envKey: null == i ? void 0 : i.muxEnvKey,
                            sdk: E,
                            sdkVersion: g,
                            deviceInfo: i.deviceInfo,
                            muxCustomDimensions: i.muxCustomDimensions
                        }).ready().then(() => th.info("MuxReporter ready"), e => th.error("Failed to instantiate MuxReporter", null == e ? void 0 : e.message)), {
                            player: t,
                            logger: a
                        }
                    }).then(t, i)
                })
            }
        },
        29559: (e, t, i) => {
            "use strict";
            i.d(t, {
                q: () => s
            });
            let r = "Node already exists in another list!";
            class a {
                constructor(e) {
                    this.listId = null, this.key = "", this.prev = null, this.next = null, this.value = null, this.value = e
                }
            }
            class n {
                constructor() {
                    this._id = {}, this.length = 0, this.first = null, this.last = null
                }
                append(e) {
                    if (e.listId) throw Error(r);
                    return e.listId = this._id, this.first ? this.last && (e.prev = this.last, e.next = null, this.last.next = e, this.last = e) : (this.first = e, this.last = e), ++this.length
                }
                insertAfter(e, t) {
                    if (t.listId) throw Error(r);
                    return t.listId = this._id, t.prev = e, t.next = e.next, e.next && (e.next.prev = t), e.next = t, t.prev === this.last && (this.last = t), ++this.length
                }
                remove(e) {
                    return !!this.length && e.listId === this._id && (this.length > 1 ? (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.first ? this.first = e.next : e === this.last && (this.last = e.prev)) : (this.first = null, this.last = null), e.listId = null, e.prev = null, e.next = null, this.length--, !0)
                }
            }
            class s {
                constructor(e) {
                    this._limit = 100, this._list = new n, this._map = {}, this._limit = e
                }
                get(e) {
                    let t = this._map[e];
                    if (!t) return null;
                    let i = this._list;
                    return i.remove(t), i.append(t), t.value
                }
                set(e, t) {
                    if (!e) throw TypeError("Cache key cannot be empty.");
                    let i = this._list,
                        r = this._map;
                    if (i.length >= this._limit) {
                        let e = i.first;
                        r[e.key] = null, i.remove(e)
                    }
                    let n = r[e];
                    n ? (i.remove(n), n.value = t) : (n = new a(t)).key = e, i.append(n), r[e] = n
                }
                remove(e) {
                    let t = this._map,
                        i = t[e];
                    return i ? (this._list.remove(i), t[e] = null, i.value) : null
                }
                keys() {
                    let e = [],
                        t = this._list.first;
                    for (; t;) e.push(t.key), t = t.next;
                    return e.reverse()
                }
                values() {
                    let e = [],
                        t = this._list.first;
                    for (; t;) e.push(t.value), t = t.next;
                    return e.reverse()
                }
                size() {
                    return this._list.length
                }
                clear() {
                    let e = this._list.length;
                    return this._list = new n, this._map = {}, e
                }
            }
        },
        50319: (e, t, i) => {
            "use strict";
            var r;
            i.d(t, {
                Z7: () => n,
                nj: () => l
            });
            let a = "undefined" != typeof globalThis && "function" == typeof globalThis.queueMicrotask ? globalThis.queueMicrotask.bind(globalThis) : function() {
                if ("undefined" == typeof Promise) return e => setTimeout(e, 0);
                let e = Promise.resolve();
                return t => {
                    e.then(t).catch(e => setTimeout(() => {
                        throw e
                    }, 0))
                }
            }();
            ! function(e) {
                e.INVALID_IDENT_DATA = "INVALID_IDENT_DATA", e.LOGGING_REQUEST_FAILED = "LOGGING_REQUEST_FAILED"
            }(r || (r = {}));
            let n = {
                UNKNOWN: "unknown",
                EMPTY: "",
                ZERO: 0,
                EMPTY_VERSION: "0.0.0"
            };
            class s extends Error {
                constructor(e, t, i) {
                    super(t), this.name = "LoggingError", this.code = e, this.status = i || 0
                }
            }

            function o(e, t) {
                let i = e.indexOf(t);
                return -1 === i ? [e, ""] : [e.slice(0, i), e.slice(i + t.length)]
            }
            class l {
                constructor(e) {
                    this._transport = e.transport, this._endpoint = e.endpoint || "@webgate/melody", this._batchQueue = [], this._identData = Promise.all([e.sdkId, e.platform, e.clientVersion]).then(([e, t, i]) => ({
                        sdk_id: e || n.EMPTY,
                        platform: t || n.EMPTY,
                        client_version: i || n.EMPTY_VERSION
                    }))
                }
                _assertValidIdentData(e) {
                    if (!e.sdk_id) throw new s(r.INVALID_IDENT_DATA, "sdkId must be a non-empty string.", 0)
                }
                _sendBatchedLogs() {
                    return this._identData.then(e => {
                        this._assertValidIdentData(e);
                        let t = this._batchQueue.splice(0, this._batchQueue.length);
                        if (t.length) {
                            let i = t.reduce(function(e, t) {
                                var i;
                                let r = t.endpoint;
                                return void 0 === r || (e[r] = null != (i = e[r]) ? i : [], e[r].push(t)), e
                            }, {});
                            return Promise.all(Object.keys(i).map(t => {
                                var a;
                                let n = null == (a = i[t]) ? void 0 : a.map(({
                                    payload: e
                                }) => e);
                                return (null == n ? void 0 : n.length) ? this._transport.request(`${this._endpoint}${t}`, {
                                    method: "POST",
                                    payload: JSON.stringify(Object.assign({
                                        messages: n
                                    }, e)),
                                    retry: {
                                        maxRetries: 5,
                                        condition: e => 202 !== e.status
                                    }
                                }).then(({
                                    status: e
                                }) => 202 === e || Promise.reject(new s(r.LOGGING_REQUEST_FAILED, `Logging service responded with status ${e}`, e))) : Promise.resolve(!0)
                            })).then(() => !0)
                        }
                        return Promise.resolve(!0)
                    })
                }
                _sendLog(e, t) {
                    return this.sendLog(e, t)
                }
                sendLog(e, t, i) {
                    let n = null == i ? void 0 : i.forget;
                    if (null == i ? void 0 : i.batch) {
                        if (n) throw Error("'forget' cannot be used together with 'batch'.");
                        return new Promise(i => {
                            this._batchQueue.push({
                                endpoint: e,
                                payload: t
                            }), a(() => {
                                this._sendBatchedLogs().then(i)
                            })
                        })
                    }
                    return this._identData.then(i => {
                        this._assertValidIdentData(i);
                        let r = this._endpoint + e,
                            a = n ? this._transport.getLastToken() : null;
                        return a && (r = function(e, t, i) {
                            let [r, a] = o(e, "#"), [n, s] = o(r, "?"), l = a ? `#${a}` : "", d = `${t}=${encodeURIComponent(i)}`;
                            for (let e of s.split("&")) e.length > 0 && o(e, "=")[0] !== t && (d += `&${e}`);
                            return `${n}?${d}${l}`
                        }(r, "access_token", a)), this._transport.request(r, {
                            method: "POST",
                            payload: JSON.stringify(Object.assign(Object.assign({}, t), i)),
                            forget: n,
                            retry: {
                                maxRetries: 5,
                                condition: e => 202 !== e.status
                            }
                        })
                    }).then(({
                        status: e
                    }) => !!n || 202 === e || Promise.reject(new s(r.LOGGING_REQUEST_FAILED, `Logging service responded with status ${e}`, e)))
                }
            }
        },
        58332: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => r
            });
            let r = {
                tagged: "4.55.0-face5dfb",
                version: "4.55.0",
                revision: "face5dfb"
            }
        },
        72894: (e, t, i) => {
            "use strict";
            var r;
            i.d(t, {
                    B: () => r
                }),
                function(e) {
                    e.APPLOAD = "appload", e.BACK_BUTTON = "backbtn", e.CAPPED = "capped", e.CLICK_ROW = "clickrow", e.CLICK_SIDE = "clickside", e.END_PLAY = "endplay", e.FORWARD_BUTTON = "fwdbtn", e.LOGOUT = "logout", e.PLAY_BUTTON = "playbtn", e.POPUP = "popup", e.REMOTE = "remote", e.SEEK = "seek", e.TRACK_DONE = "trackdone", e.TRACK_ERROR = "trackerror", e.UNEXPECTED_EXIT = "unexpected-exit", e.UNEXPECTED_EXIT_WHILE_PAUSE = "unexpected-exit-while-pause", e.UNKNOWN = "unknown", e.URI_OPEN = "uriopen"
                }(r || (r = {}))
        },
        91403: (e, t, i) => {
            "use strict";
            i.d(t, {
                $C: () => n
            });
            let r = "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues,
                a = e => r ? crypto.getRandomValues(new Uint8Array(e)) : function(e) {
                    let t = [];
                    for (; t.length < e;) t.push(Math.floor(256 * Math.random()));
                    return t
                }(e),
                n = e => (function(e) {
                    let t = "";
                    for (let i = 0; i < e.length; i++) {
                        let r = e[i];
                        r < 16 && (t += "0"), t += r.toString(16)
                    }
                    return t
                })(a(Math.ceil(e / 2)))
        },
        96816: e => {
            e.exports = function() {
                var e = {
                        80: function(e, t, i) {
                            e.exports = i(728).default
                        },
                        728: function(e, t, i) {
                            "use strict";
                            i.d(t, {
                                default: function() {
                                    return t_
                                }
                            });
                            var r = i(48),
                                a = i.n(r),
                                n = function() {
                                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                                        var t = 16 * Math.random() | 0;
                                        return ("x" === e ? t : 3 & t | 8).toString(16)
                                    })
                                },
                                s = function() {
                                    return ("000000" + (0x81bf1000 * Math.random() | 0).toString(36)).slice(-6)
                                },
                                o = function(e) {
                                    var t, i;
                                    if (e && void 0 !== e.nodeName) return e.muxId || (e.muxId = s()), e.muxId;
                                    try {
                                        i = document.querySelector(e)
                                    } catch (e) {}
                                    return i && !i.muxId && (i.muxId = e), (null == (t = i) ? void 0 : t.muxId) || e
                                },
                                l = function(e) {
                                    e && void 0 !== e.nodeName ? e = o(t = e) : t = document.querySelector(e);
                                    var t, i = t && t.nodeName ? t.nodeName.toLowerCase() : "";
                                    return [t, e, i]
                                },
                                d = i(640),
                                u = i.n(d),
                                _ = u().methodFactory;
                            u().methodFactory = function(e, t, i) {
                                var r = _(e, t, i);
                                return function() {
                                    for (var e = ["[mux]"], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                                    r.apply(void 0, e)
                                }
                            }, u().setLevel(u().getLevel());
                            var h = u();

                            function c() {
                                return "1" === (a().doNotTrack || a().navigator && a().navigator.doNotTrack)
                            }
                            var m = {
                                    now: function() {
                                        var e = a().performance,
                                            t = e && e.timing,
                                            i = t && t.navigationStart;
                                        return Math.round("number" == typeof i && "function" == typeof e.now ? i + e.now() : Date.now())
                                    }
                                },
                                f = function(e) {
                                    return p(e)[0]
                                },
                                p = function(e) {
                                    if ("string" != typeof e || "" === e) return ["localhost"];
                                    var t, i = (e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4];
                                    return i && (t = (i.match(/[^\.]+\.[^\.]+$/) || [])[0]), [i, t]
                                },
                                E = {
                                    exists: function() {
                                        var e = a().performance;
                                        return void 0 !== (e && e.timing)
                                    },
                                    domContentLoadedEventEnd: function() {
                                        var e = a().performance,
                                            t = e && e.timing;
                                        return t && t.domContentLoadedEventEnd
                                    },
                                    navigationStart: function() {
                                        var e = a().performance,
                                            t = e && e.timing;
                                        return t && t.navigationStart
                                    }
                                };

                            function g(e, t, i) {
                                i = void 0 === i ? 1 : i, e[t] = e[t] || 0, e[t] += i
                            }
                            var y = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"],
                                v = ["x-cdn", "content-type"].concat(y);

                            function b(e) {
                                var t = {};
                                return (e = e || "").trim().split(/[\r\n]+/).forEach(function(e) {
                                    if (e) {
                                        var i = e.split(": "),
                                            r = i.shift();
                                        r && (v.indexOf(r.toLowerCase()) >= 0 || 0 === r.toLowerCase().indexOf("x-litix-")) && (t[r] = i.join(": "))
                                    }
                                }), t
                            }

                            function T(e) {
                                if (e) {
                                    var t = y.find(function(t) {
                                        return void 0 !== e[t]
                                    });
                                    return t ? e[t] : void 0
                                }
                            }
                            var R = function(e) {
                                var t = {};
                                for (var i in e) {
                                    var r = e[i]; - 1 !== r["DATA-ID"].search("io.litix.data.") && (t[r["DATA-ID"].replace("io.litix.data.", "")] = r.VALUE)
                                }
                                return t
                            };

                            function S(e, t) {
                                var i = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t && (r = r.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), i.push.apply(i, r)
                                }
                                return i
                            }

                            function P(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var i = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? S(Object(i), !0).forEach(function(t) {
                                        var r, a, n;
                                        r = e, a = t, n = i[t], a in r ? Object.defineProperty(r, a, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : r[a] = n
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : S(Object(i)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                                    })
                                }
                                return e
                            }
                            var L = function(e) {
                                    if (!e) return {};
                                    var t = E.navigationStart(),
                                        i = e.loading,
                                        r = i ? i.start : e.trequest,
                                        a = i ? i.first : e.tfirst,
                                        n = i ? i.end : e.tload;
                                    return {
                                        bytesLoaded: e.total,
                                        requestStart: Math.round(t + r),
                                        responseStart: Math.round(t + a),
                                        responseEnd: Math.round(t + n)
                                    }
                                },
                                A = function(e) {
                                    if (e && "function" == typeof e.getAllResponseHeaders) return b(e.getAllResponseHeaders())
                                };

                            function I(e, t) {
                                var i = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t && (r = r.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), i.push.apply(i, r)
                                }
                                return i
                            }

                            function D(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var i = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? I(Object(i), !0).forEach(function(t) {
                                        var r, a, n;
                                        r = e, a = t, n = i[t], a in r ? Object.defineProperty(r, a, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : r[a] = n
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : I(Object(i)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                                    })
                                }
                                return e
                            }
                            var k = function(e, t) {
                                    if (!e || !e.requestEndDate) return {};
                                    var i, r = f(e.url),
                                        a = e.url,
                                        n = e.bytesLoaded,
                                        s = new Date(e.requestStartDate).getTime(),
                                        o = new Date(e.firstByteDate).getTime(),
                                        l = new Date(e.requestEndDate).getTime(),
                                        d = isNaN(e.duration) ? 0 : e.duration,
                                        u = "function" == typeof t.getMetricsFor ? t.getMetricsFor(e.mediaType).HttpList : t.getDashMetrics().getHttpRequests(e.mediaType);
                                    return u.length > 0 && (i = b(u[u.length - 1]._responseHeaders || "")), {
                                        requestStart: s,
                                        requestResponseStart: o,
                                        requestResponseEnd: l,
                                        requestBytesLoaded: n,
                                        requestResponseHeaders: i,
                                        requestMediaDuration: d,
                                        requestHostname: r,
                                        requestUrl: a,
                                        requestId: i ? T(i) : void 0
                                    }
                                },
                                C = function(e, t) {
                                    var i = t.getQualityFor(e),
                                        r = t.getCurrentTrackFor(e).bitrateList;
                                    return r ? {
                                        currentLevel: i,
                                        renditionWidth: r[i].width || null,
                                        renditionHeight: r[i].height || null,
                                        renditionBitrate: r[i].bandwidth
                                    } : {}
                                },
                                O = function(e) {
                                    var t;
                                    return null == (t = e.match(/.*codecs\*?="(.*)"/)) ? void 0 : t[1]
                                },
                                w = function(e) {
                                    try {
                                        var t, i;
                                        return null == (t = e.getVersion) || null == (i = t.call(e)) ? void 0 : i.split(".").map(function(e) {
                                            return parseInt(e)
                                        })[0]
                                    } catch (e) {
                                        return !1
                                    }
                                };

                            function N(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var M = 0,
                                U = function() {
                                    var e, t;

                                    function i() {
                                        if (!(this instanceof i)) throw TypeError("Cannot call a class as a function")
                                    }
                                    return e = [{
                                        key: "on",
                                        value: function(e, t, i) {
                                            return t._eventEmitterGuid = t._eventEmitterGuid || ++M, this._listeners = this._listeners || {}, this._listeners[e] = this._listeners[e] || [], i && (t = t.bind(i)), this._listeners[e].push(t), t
                                        }
                                    }, {
                                        key: "off",
                                        value: function(e, t) {
                                            var i = this._listeners && this._listeners[e];
                                            i && i.forEach(function(e, r) {
                                                e._eventEmitterGuid === t._eventEmitterGuid && i.splice(r, 1)
                                            })
                                        }
                                    }, {
                                        key: "one",
                                        value: function(e, t, i) {
                                            var r = this;
                                            t._eventEmitterGuid = t._eventEmitterGuid || ++M;
                                            var a = function a() {
                                                r.off(e, a), t.apply(i || this, arguments)
                                            };
                                            a._eventEmitterGuid = t._eventEmitterGuid, this.on(e, a)
                                        }
                                    }, {
                                        key: "emit",
                                        value: function(e, t) {
                                            var i = this;
                                            if (this._listeners) {
                                                t = t || {};
                                                var r = this._listeners["before*"] || [],
                                                    a = this._listeners[e] || [],
                                                    n = this._listeners["after" + e] || [],
                                                    s = function(t, r) {
                                                        (t = t.slice()).forEach(function(t) {
                                                            t.call(i, {
                                                                type: e
                                                            }, r)
                                                        })
                                                    };
                                                s(r, t), s(a, t), s(n, t)
                                            }
                                        }
                                    }], N(i.prototype, e), t && N(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }();

                            function F(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var B = function() {
                                    var e, t;

                                    function i(e) {
                                        var t = this;
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, i), this.pm = e, this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, e.on("playing", function() {
                                            t._playheadShouldBeProgressing = !0
                                        }), e.on("play", this._startPlaybackHeartbeatInterval.bind(this)), e.on("playing", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)), e.on("seeking", this._startPlaybackHeartbeatInterval.bind(this)), e.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)), e.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("error", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("seeked", function() {
                                            e.data.player_is_paused ? t._stopPlaybackHeartbeatInterval() : t._startPlaybackHeartbeatInterval()
                                        }), e.on("timeupdate", function() {
                                            null !== t._playbackHeartbeatInterval && e.emit("playbackheartbeat")
                                        }), e.on("devicesleep", function(i, r) {
                                            null !== t._playbackHeartbeatInterval && (a().clearInterval(t._playbackHeartbeatInterval), e.emit("playbackheartbeatend", {
                                                viewer_time: r.viewer_time
                                            }), t._playbackHeartbeatInterval = null)
                                        })
                                    }
                                    return e = [{
                                        key: "_startPlaybackHeartbeatInterval",
                                        value: function() {
                                            var e = this;
                                            null === this._playbackHeartbeatInterval && (this.pm.emit("playbackheartbeat"), this._playbackHeartbeatInterval = a().setInterval(function() {
                                                e.pm.emit("playbackheartbeat")
                                            }, this.pm.playbackHeartbeatTime))
                                        }
                                    }, {
                                        key: "_stopPlaybackHeartbeatInterval",
                                        value: function() {
                                            this._playheadShouldBeProgressing = !1, null !== this._playbackHeartbeatInterval && (a().clearInterval(this._playbackHeartbeatInterval), this.pm.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null)
                                        }
                                    }], F(i.prototype, e), t && F(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                x = (Object.defineProperty(eQ = function e(t) {
                                    var i = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, e), t.on("viewinit", function() {
                                        i.viewErrored = !1
                                    }), t.on("error", function(e, r) {
                                        try {
                                            var a = t.errorTranslator({
                                                player_error_code: r.player_error_code,
                                                player_error_message: r.player_error_message,
                                                player_error_context: r.player_error_context
                                            });
                                            a ? (t.data.player_error_code = a.player_error_code || r.player_error_code, t.data.player_error_message = a.player_error_message || r.player_error_message, t.data.player_error_context = a.player_error_context || r.player_error_context, i.viewErrored = !0) : (delete t.data.player_error_code, delete t.data.player_error_message, delete t.data.player_error_context)
                                        } catch (e) {
                                            t.mux.log.warn("Exception in error translator callback.", e), i.viewErrored = !0
                                        }
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), eQ);

                            function G(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var Y = function() {
                                var e, t;

                                function i(e) {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, i), this.pm = e, this._watchTimeTrackerLastCheckedTime = null, e.on("playbackheartbeat", this._updateWatchTime.bind(this)), e.on("playbackheartbeatend", this._clearWatchTimeState.bind(this))
                                }
                                return e = [{
                                    key: "_updateWatchTime",
                                    value: function(e, t) {
                                        var i = t.viewer_time;
                                        null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = i), g(this.pm.data, "view_watch_time", i - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = i
                                    }
                                }, {
                                    key: "_clearWatchTimeState",
                                    value: function(e, t) {
                                        this._updateWatchTime(e, t), this._watchTimeTrackerLastCheckedTime = null
                                    }
                                }], G(i.prototype, e), t && G(i, t), Object.defineProperty(i, "prototype", {
                                    writable: !1
                                }), i
                            }();

                            function V(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var j = function() {
                                var e, t;

                                function i(e) {
                                    var t = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, i), this.pm = e, this._playbackTimeTrackerLastPlayheadPosition = -1, this._lastTime = m.now(), this._isAdPlaying = !1, this._callbackUpdatePlaybackTime = null;
                                    var r = this._startPlaybackTimeTracking.bind(this);
                                    e.on("playing", r), e.on("adplaying", r), e.on("seeked", r);
                                    var a = this._stopPlaybackTimeTracking.bind(this);
                                    e.on("playbackheartbeatend", a), e.on("seeking", a), e.on("adplaying", function() {
                                        t._isAdPlaying = !0
                                    }), e.on("adended", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("adpause", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("adbreakstart", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("adbreakend", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("adplay", function() {
                                        t._isAdPlaying = !1
                                    }), e.on("viewinit", function() {
                                        t._playbackTimeTrackerLastPlayheadPosition = -1, t._lastTime = m.now(), t._isAdPlaying = !1, t._callbackUpdatePlaybackTime = null
                                    })
                                }
                                return e = [{
                                    key: "_startPlaybackTimeTracking",
                                    value: function() {
                                        null === this._callbackUpdatePlaybackTime && (this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this), this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time, this.pm.on("playbackheartbeat", this._callbackUpdatePlaybackTime))
                                    }
                                }, {
                                    key: "_stopPlaybackTimeTracking",
                                    value: function() {
                                        this._callbackUpdatePlaybackTime && (this._updatePlaybackTime(), this.pm.off("playbackheartbeat", this._callbackUpdatePlaybackTime), this._callbackUpdatePlaybackTime = null, this._playbackTimeTrackerLastPlayheadPosition = -1)
                                    }
                                }, {
                                    key: "_updatePlaybackTime",
                                    value: function() {
                                        var e = this.pm.data.player_playhead_time,
                                            t = m.now(),
                                            i = -1;
                                        this._playbackTimeTrackerLastPlayheadPosition >= 0 && e > this._playbackTimeTrackerLastPlayheadPosition ? i = e - this._playbackTimeTrackerLastPlayheadPosition : this._isAdPlaying && (i = t - this._lastTime), i > 0 && i <= 1e3 && g(this.pm.data, "view_content_playback_time", i), this._playbackTimeTrackerLastPlayheadPosition = e, this._lastTime = t
                                    }
                                }], V(i.prototype, e), t && V(i, t), Object.defineProperty(i, "prototype", {
                                    writable: !1
                                }), i
                            }();

                            function q(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var H = function() {
                                    var e, t;

                                    function i(e) {
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, i), this.pm = e;
                                        var t = this._updatePlayheadTime.bind(this);
                                        e.on("playbackheartbeat", t), e.on("playbackheartbeatend", t), e.on("timeupdate", t), e.on("destroy", function() {
                                            e.off("timeupdate", t)
                                        })
                                    }
                                    return e = [{
                                        key: "_updateMaxPlayheadPosition",
                                        value: function() {
                                            this.pm.data.view_max_playhead_position = void 0 === this.pm.data.view_max_playhead_position ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time)
                                        }
                                    }, {
                                        key: "_updatePlayheadTime",
                                        value: function(e, t) {
                                            var i = this,
                                                r = function() {
                                                    i.pm.currentFragmentPDT && i.pm.currentFragmentStart && (i.pm.data.player_program_time = i.pm.currentFragmentPDT + i.pm.data.player_playhead_time - i.pm.currentFragmentStart)
                                                };
                                            if (t && t.player_playhead_time) this.pm.data.player_playhead_time = t.player_playhead_time, r(), this._updateMaxPlayheadPosition();
                                            else if (this.pm.getPlayheadTime) {
                                                var a = this.pm.getPlayheadTime();
                                                void 0 !== a && (this.pm.data.player_playhead_time = a, r(), this._updateMaxPlayheadPosition())
                                            }
                                        }
                                    }], q(i.prototype, e), t && q(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                J = (Object.defineProperty(ez = function e(t) {
                                    if (function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, e), !t.disableRebufferTracking) {
                                        var i, r = function(e, t) {
                                                a(t), i = void 0
                                            },
                                            a = function(e) {
                                                if (i) {
                                                    var r = e.viewer_time - i;
                                                    g(t.data, "view_rebuffer_duration", r), i = e.viewer_time, t.data.view_rebuffer_duration > 3e5 && (t.emit("viewend"), t.send("viewend"), t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5, "ms, future events will be ignored unless a programchange or videochange occurs.")))
                                                }
                                                t.data.view_watch_time >= 0 && t.data.view_rebuffer_count > 0 && (t.data.view_rebuffer_frequency = t.data.view_rebuffer_count / t.data.view_watch_time, t.data.view_rebuffer_percentage = t.data.view_rebuffer_duration / t.data.view_watch_time)
                                            };
                                        t.on("playbackheartbeat", function(e, t) {
                                            return a(t)
                                        }), t.on("rebufferstart", function(e, a) {
                                            i || (g(t.data, "view_rebuffer_count", 1), i = a.viewer_time, t.one("rebufferend", r))
                                        }), t.on("viewinit", function() {
                                            i = void 0, t.off("rebufferend", r)
                                        })
                                    }
                                }, "prototype", {
                                    writable: !1
                                }), ez);

                            function K(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var W = function() {
                                var e, t;

                                function i(e) {
                                    var t = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, i), this.pm = e, e.disableRebufferTracking || e.disablePlayheadRebufferTracking || (this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, e.on("playbackheartbeat", this._checkIfRebuffering.bind(this)), e.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)), e.on("seeking", function() {
                                        t._cleanupRebufferTracker(null, {
                                            viewer_time: m.now()
                                        })
                                    }))
                                }
                                return e = [{
                                    key: "_checkIfRebuffering",
                                    value: function(e, t) {
                                        if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing) this._cleanupRebufferTracker(e, t);
                                        else if (null !== this._lastCheckedTime)
                                            if (this._lastPlayheadTime === this.pm.data.player_playhead_time) {
                                                var i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                                                "number" == typeof this.pm.sustainedRebufferThreshold && i >= this.pm.sustainedRebufferThreshold && (this._rebuffering || (this._rebuffering = !0, this.pm.emit("rebufferstart", {
                                                    viewer_time: this._lastPlayheadTimeUpdatedTime
                                                }))), this._lastCheckedTime = t.viewer_time
                                            } else this._cleanupRebufferTracker(e, t, !0);
                                        else this._prepareRebufferTrackerState(t.viewer_time)
                                    }
                                }, {
                                    key: "_clearRebufferTrackerState",
                                    value: function() {
                                        this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null
                                    }
                                }, {
                                    key: "_prepareRebufferTrackerState",
                                    value: function(e) {
                                        this._lastCheckedTime = e, this._lastPlayheadTime = this.pm.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e
                                    }
                                }, {
                                    key: "_cleanupRebufferTracker",
                                    value: function(e, t) {
                                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                        if (this._rebuffering) this._rebuffering = !1, this.pm.emit("rebufferend", {
                                            viewer_time: t.viewer_time
                                        });
                                        else {
                                            if (null === this._lastCheckedTime) return;
                                            var r = this.pm.data.player_playhead_time - this._lastPlayheadTime,
                                                a = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                                            "number" == typeof this.pm.minimumRebufferDuration && r > 0 && a - r > this.pm.minimumRebufferDuration && (this._lastCheckedTime = null, this.pm.emit("rebufferstart", {
                                                viewer_time: this._lastPlayheadTimeUpdatedTime
                                            }), this.pm.emit("rebufferend", {
                                                viewer_time: this._lastPlayheadTimeUpdatedTime + a - r
                                            }))
                                        }
                                        i ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState()
                                    }
                                }], K(i.prototype, e), t && K(i, t), Object.defineProperty(i, "prototype", {
                                    writable: !1
                                }), i
                            }();

                            function $(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var Q = function() {
                                    var e, t;

                                    function i(e) {
                                        var t = this;
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, i), this.pm = e, e.on("viewinit", function() {
                                            var i = e.data,
                                                r = i.view_id;
                                            if (!i.view_program_changed) {
                                                var a = function(i, a) {
                                                    var n = a.viewer_time;
                                                    "playing" === i.type && void 0 === e.data.view_time_to_first_frame ? t.calculateTimeToFirstFrame(n || m.now(), r) : "adplaying" === i.type && (void 0 === e.data.view_time_to_first_frame || t._inPrerollPosition()) && t.calculateTimeToFirstFrame(n || m.now(), r)
                                                };
                                                e.one("playing", a), e.one("adplaying", a), e.one("viewend", function() {
                                                    e.off("playing", a), e.off("adplaying", a)
                                                })
                                            }
                                        })
                                    }
                                    return e = [{
                                        key: "_inPrerollPosition",
                                        value: function() {
                                            return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3
                                        }
                                    }, {
                                        key: "calculateTimeToFirstFrame",
                                        value: function(e, t) {
                                            t === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, {
                                                viewer_time: e
                                            }), this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time, (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.NAVIGATION_START && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.NAVIGATION_START))
                                        }
                                    }], $(i.prototype, e), t && $(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                z = (Object.defineProperty(eX = function e(t) {
                                    var i = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, e), t.on("viewinit", function() {
                                        i._lastPlayheadPosition = -1
                                    }), ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"].forEach(function(e) {
                                        t.on(e, function() {
                                            if (i._lastPlayheadPosition >= 0 && t.data.player_playhead_time >= 0 && i._lastPlayerWidth >= 0 && i._lastSourceWidth > 0 && i._lastPlayerHeight >= 0 && i._lastSourceHeight > 0) {
                                                var e = t.data.player_playhead_time - i._lastPlayheadPosition;
                                                if (e < 0) return void(i._lastPlayheadPosition = -1);
                                                var r = Math.min(i._lastPlayerWidth / i._lastSourceWidth, i._lastPlayerHeight / i._lastSourceHeight),
                                                    a = Math.max(0, r - 1),
                                                    n = Math.max(0, 1 - r);
                                                t.data.view_max_upscale_percentage = Math.max(t.data.view_max_upscale_percentage || 0, a), t.data.view_max_downscale_percentage = Math.max(t.data.view_max_downscale_percentage || 0, n), g(t.data, "view_total_content_playback_time", e), g(t.data, "view_total_upscaling", a * e), g(t.data, "view_total_downscaling", n * e)
                                            }
                                            i._lastPlayheadPosition = -1
                                        })
                                    }), ["playing", "hb"].forEach(function(e) {
                                        t.on(e, function() {
                                            i._lastPlayheadPosition = t.data.player_playhead_time, i._lastPlayerWidth = t.data.player_width, i._lastPlayerHeight = t.data.player_height, i._lastSourceWidth = t.data.video_source_width, i._lastSourceHeight = t.data.video_source_height
                                        })
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), eX),
                                X = (Object.defineProperty(eZ = function e(t) {
                                    var i = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, e), this.isSeeking = !1;
                                    var r = -1,
                                        a = function() {
                                            var e = m.now(),
                                                a = (t.data.viewer_time || e) - (r || e);
                                            g(t.data, "view_seek_duration", a), t.data.view_max_seek_time = Math.max(t.data.view_max_seek_time || 0, a), i.isSeeking = !1, r = -1
                                        };
                                    t.on("seeking", function(e, n) {
                                        Object.assign(t.data, n), i.isSeeking && n.viewer_time - r <= 2e3 ? r = n.viewer_time : (i.isSeeking && a(), i.isSeeking = !0, r = n.viewer_time, g(t.data, "view_seek_count", 1), t.send("seeking"))
                                    }), t.on("seeked", function() {
                                        a()
                                    }), t.on("viewend", function() {
                                        i.isSeeking && (a(), t.send("seeked")), i.isSeeking = !1, r = -1
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), eZ);

                            function Z(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var r, a, n = [],
                                            s = !0,
                                            o = !1;
                                        try {
                                            for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), !t || n.length !== t); s = !0);
                                        } catch (e) {
                                            o = !0, a = e
                                        } finally {
                                            try {
                                                s || null == i.return || i.return()
                                            } finally {
                                                if (o) throw a
                                            }
                                        }
                                        return n
                                    }
                                }(e, t) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return ee(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ee(e, t) : void 0
                                    }
                                }(e, t) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }

                            function ee(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }

                            function et(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            var ei = function(e, t) {
                                    e.push(t), e.sort(function(e, t) {
                                        return e.viewer_time - t.viewer_time
                                    })
                                },
                                er = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror", "adclicked", "adskipped"],
                                ea = function() {
                                    var e, t;

                                    function i(e) {
                                        var t = this;
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, i), this.pm = e, e.on("viewinit", function() {
                                            t.isAdBreak = !1, t._currentAdRequestNumber = 0, t._currentAdResponseNumber = 0, t._adRequests = [], t._adResponses = [], t._adHasPlayed = !1, t._wouldBeNewAdPlay = !0, t._prerollPlayTime = void 0
                                        }), er.forEach(function(i) {
                                            return e.on(i, t._updateAdData.bind(t))
                                        });
                                        var r = function() {
                                            t.isAdBreak = !1
                                        };
                                        e.on("adbreakstart", function() {
                                            t.isAdBreak = !0
                                        }), e.on("play", r), e.on("playing", r), e.on("viewend", r), e.on("adrequest", function(i, r) {
                                            r = Object.assign({
                                                ad_request_id: "generatedAdRequestId" + t._currentAdRequestNumber++
                                            }, r), ei(t._adRequests, r), g(e.data, "view_ad_request_count"), t.inPrerollPosition() && (e.data.view_preroll_requested = !0, t._adHasPlayed || g(e.data, "view_preroll_request_count"))
                                        }), e.on("adresponse", function(i, r) {
                                            r = Object.assign({
                                                ad_request_id: "generatedAdRequestId" + t._currentAdResponseNumber++
                                            }, r), ei(t._adResponses, r);
                                            var a = t.findAdRequest(r.ad_request_id);
                                            a && g(e.data, "view_ad_request_time", Math.max(0, r.viewer_time - a.viewer_time))
                                        }), e.on("adplay", function(i, r) {
                                            t._adHasPlayed = !0, t._wouldBeNewAdPlay && (t._wouldBeNewAdPlay = !1, g(e.data, "view_ad_played_count")), t.inPrerollPosition() && !e.data.view_preroll_played && (e.data.view_preroll_played = !0, t._adRequests.length > 0 && (e.data.view_preroll_request_time = Math.max(0, r.viewer_time - t._adRequests[0].viewer_time)), e.data.view_start && (e.data.view_startup_preroll_request_time = Math.max(0, r.viewer_time - e.data.view_start)), t._prerollPlayTime = r.viewer_time)
                                        }), e.on("adplaying", function(i, r) {
                                            t.inPrerollPosition() && void 0 === e.data.view_preroll_load_time && void 0 !== t._prerollPlayTime && (e.data.view_preroll_load_time = r.viewer_time - t._prerollPlayTime, e.data.view_startup_preroll_load_time = r.viewer_time - t._prerollPlayTime)
                                        }), e.on("adclicked", function(i, r) {
                                            t._wouldBeNewAdPlay || g(e.data, "view_ad_clicked_count")
                                        }), e.on("adskipped", function(i, r) {
                                            t._wouldBeNewAdPlay || g(e.data, "view_ad_skipped_count")
                                        }), e.on("adended", function() {
                                            t._wouldBeNewAdPlay = !0
                                        }), e.on("aderror", function() {
                                            t._wouldBeNewAdPlay = !0
                                        })
                                    }
                                    return e = [{
                                        key: "inPrerollPosition",
                                        value: function() {
                                            return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3
                                        }
                                    }, {
                                        key: "findAdRequest",
                                        value: function(e) {
                                            for (var t = 0; t < this._adRequests.length; t++)
                                                if (this._adRequests[t].ad_request_id === e) return this._adRequests[t]
                                        }
                                    }, {
                                        key: "_updateAdData",
                                        value: function(e, t) {
                                            if (this.inPrerollPosition()) {
                                                if (!this.pm.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
                                                    var i = Z(p(t.ad_tag_url), 2),
                                                        r = i[0],
                                                        a = i[1];
                                                    this.pm.data.view_preroll_ad_tag_domain = a, this.pm.data.view_preroll_ad_tag_hostname = r
                                                }
                                                if (!this.pm.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                                                    var n = Z(p(t.ad_asset_url), 2),
                                                        s = n[0],
                                                        o = n[1];
                                                    this.pm.data.view_preroll_ad_asset_domain = o, this.pm.data.view_preroll_ad_asset_hostname = s
                                                }
                                            }
                                            this.pm.data.ad_asset_url = null == t ? void 0 : t.ad_asset_url, this.pm.data.ad_tag_url = null == t ? void 0 : t.ad_tag_url, this.pm.data.ad_creative_id = null == t ? void 0 : t.ad_creative_id, this.pm.data.ad_id = null == t ? void 0 : t.ad_id, this.pm.data.ad_universal_id = null == t ? void 0 : t.ad_universal_id
                                        }
                                    }], et(i.prototype, e), t && et(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                en = (Object.defineProperty(e0 = function e(t) {
                                    if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                                    var i, r, n = function() {
                                            t.disableRebufferTracking || i && (g(t.data, "view_waiting_rebuffer_duration", m.now() - i), i = !1, a().clearInterval(r))
                                        },
                                        s = !1,
                                        o = function() {
                                            s = !1, n()
                                        };
                                    t.on("waiting", function() {
                                        s && (t.disableRebufferTracking || (g(t.data, "view_waiting_rebuffer_count", 1), i = m.now(), r = a().setInterval(function() {
                                            if (i) {
                                                var e = m.now();
                                                g(t.data, "view_waiting_rebuffer_duration", e - i), i = e
                                            }
                                        }, 250)))
                                    }), t.on("playing", function() {
                                        n(), s = !0
                                    }), t.on("pause", o), t.on("seeking", o)
                                }, "prototype", {
                                    writable: !1
                                }), e0),
                                es = (Object.defineProperty(e1 = function e(t) {
                                    var i = this;
                                    if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                                    var r = function() {
                                            i.lastWallClockTime = m.now(), t.on("before*", a)
                                        },
                                        a = function(e) {
                                            var r = m.now(),
                                                a = i.lastWallClockTime;
                                            i.lastWallClockTime = r, r - a > 3e4 && (t.emit("devicesleep", {
                                                viewer_time: a
                                            }), Object.assign(t.data, {
                                                viewer_time: a
                                            }), t.send("devicesleep"), t.emit("devicewake", {
                                                viewer_time: r
                                            }), Object.assign(t.data, {
                                                viewer_time: r
                                            }), t.send("devicewake"))
                                        };
                                    t.one("playbackheartbeat", r), t.on("playbackheartbeatend", function() {
                                        t.off("before*", a), t.one("playbackheartbeat", r)
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), e1),
                                eo = i(375),
                                el = i(655),
                                ed = i.n(el),
                                eu = "muxData",
                                e_ = function() {
                                    var e;
                                    try {
                                        e = eo.parse(ed().get(eu) || "")
                                    } catch (t) {
                                        e = {}
                                    }
                                    return e
                                },
                                eh = function(e) {
                                    try {
                                        ed().set(eu, eo.stringify(e), {
                                            expires: 365
                                        })
                                    } catch (e) {}
                                },
                                ec = function() {
                                    var e = e_();
                                    return e.mux_viewer_id = e.mux_viewer_id || n(), e.msn = e.msn || Math.random(), eh(e), {
                                        mux_viewer_id: e.mux_viewer_id,
                                        mux_sample_number: e.msn
                                    }
                                },
                                em = function() {
                                    var e;
                                    switch (ef()) {
                                        case "cellular":
                                            e = "cellular";
                                            break;
                                        case "ethernet":
                                            e = "wired";
                                            break;
                                        case "wifi":
                                            e = "wifi";
                                            break;
                                        case void 0:
                                            break;
                                        default:
                                            e = "other"
                                    }
                                    return e
                                },
                                ef = function() {
                                    var e = a().navigator,
                                        t = e && (e.connection || e.mozConnection || e.webkitConnection);
                                    return t && t.type
                                };
                            em.getConnectionFromAPI = ef;
                            var ep = eg({
                                    a: "env",
                                    b: "beacon",
                                    c: "custom",
                                    d: "ad",
                                    e: "event",
                                    f: "experiment",
                                    i: "internal",
                                    m: "mux",
                                    n: "response",
                                    p: "player",
                                    q: "request",
                                    r: "retry",
                                    s: "session",
                                    t: "timestamp",
                                    u: "viewer",
                                    v: "video",
                                    w: "page",
                                    x: "view",
                                    y: "sub"
                                }),
                                eE = eg({
                                    ad: "ad",
                                    ag: "aggregate",
                                    ap: "api",
                                    al: "application",
                                    ar: "architecture",
                                    as: "asset",
                                    au: "autoplay",
                                    av: "average",
                                    bi: "bitrate",
                                    br: "break",
                                    bw: "browser",
                                    by: "bytes",
                                    ca: "cached",
                                    cb: "cancel",
                                    cc: "codec",
                                    cd: "code",
                                    cg: "category",
                                    ch: "changed",
                                    ck: "clicked",
                                    cl: "canceled",
                                    cn: "config",
                                    co: "count",
                                    ce: "counter",
                                    cp: "complete",
                                    cr: "creative",
                                    ct: "content",
                                    cu: "current",
                                    cx: "connection",
                                    cz: "context",
                                    dg: "downscaling",
                                    dm: "domain",
                                    dn: "cdn",
                                    do: "downscale",
                                    dr: "drm",
                                    dp: "dropped",
                                    du: "duration",
                                    dv: "device",
                                    ec: "encoding",
                                    ed: "edge",
                                    en: "end",
                                    eg: "engine",
                                    em: "embed",
                                    er: "error",
                                    es: "errorcode",
                                    et: "errortext",
                                    ee: "event",
                                    ev: "events",
                                    ex: "expires",
                                    ep: "experiments",
                                    fa: "failed",
                                    fi: "first",
                                    fm: "family",
                                    ft: "format",
                                    fp: "fps",
                                    fq: "frequency",
                                    fr: "frame",
                                    fs: "fullscreen",
                                    ha: "has",
                                    hb: "holdback",
                                    he: "headers",
                                    ho: "host",
                                    hn: "hostname",
                                    ht: "height",
                                    id: "id",
                                    ii: "init",
                                    in: "instance",
                                    ip: "ip",
                                    is: "is",
                                    ke: "key",
                                    la: "language",
                                    lb: "labeled",
                                    le: "level",
                                    li: "live",
                                    ld: "loaded",
                                    lo: "load",
                                    ls: "lists",
                                    lt: "latency",
                                    ma: "max",
                                    md: "media",
                                    me: "message",
                                    mf: "manifest",
                                    mi: "mime",
                                    ml: "midroll",
                                    mm: "min",
                                    mn: "manufacturer",
                                    mo: "model",
                                    mx: "mux",
                                    ne: "newest",
                                    nm: "name",
                                    no: "number",
                                    on: "on",
                                    os: "os",
                                    pa: "paused",
                                    pb: "playback",
                                    pd: "producer",
                                    pe: "percentage",
                                    pf: "played",
                                    pg: "program",
                                    ph: "playhead",
                                    pi: "plugin",
                                    pl: "preroll",
                                    pn: "playing",
                                    po: "poster",
                                    pr: "preload",
                                    ps: "position",
                                    pt: "part",
                                    py: "property",
                                    ra: "rate",
                                    rd: "requested",
                                    re: "rebuffer",
                                    rf: "rendition",
                                    rm: "remote",
                                    ro: "ratio",
                                    rp: "response",
                                    rq: "request",
                                    rs: "requests",
                                    sa: "sample",
                                    sd: "skipped",
                                    se: "session",
                                    sk: "seek",
                                    sm: "stream",
                                    so: "source",
                                    sq: "sequence",
                                    sr: "series",
                                    st: "start",
                                    su: "startup",
                                    sv: "server",
                                    sw: "software",
                                    ta: "tag",
                                    tc: "tech",
                                    te: "text",
                                    tg: "target",
                                    th: "throughput",
                                    ti: "time",
                                    tl: "total",
                                    to: "to",
                                    tt: "title",
                                    ty: "type",
                                    ug: "upscaling",
                                    un: "universal",
                                    up: "upscale",
                                    ur: "url",
                                    us: "user",
                                    va: "variant",
                                    vd: "viewed",
                                    vi: "video",
                                    ve: "version",
                                    vw: "view",
                                    vr: "viewer",
                                    wd: "width",
                                    wa: "watch",
                                    wt: "waiting"
                                });

                            function eg(e) {
                                var t = {};
                                for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
                                return t
                            }

                            function ey(e) {
                                var t = {},
                                    i = {};
                                return Object.keys(e).forEach(function(r) {
                                    var a = !1;
                                    if (e.hasOwnProperty(r) && void 0 !== e[r]) {
                                        var n = r.split("_"),
                                            s = n[0],
                                            o = ep[s];
                                        o || (h.info("Data key word `" + n[0] + "` not expected in " + r), o = s + "_"), n.splice(1).forEach(function(e) {
                                            "url" === e && (a = !0), eE[e] ? o += eE[e] : Number(e) && Math.floor(Number(e)) === Number(e) ? o += e : (h.info("Data key word `" + e + "` not expected in " + r), o += "_" + e + "_")
                                        }), a ? i[o] = e[r] : t[o] = e[r]
                                    }
                                }), Object.assign(t, i)
                            }
                            var ev = {
                                    maxBeaconSize: 300,
                                    maxQueueLength: 3600,
                                    baseTimeBetweenBeacons: 1e4,
                                    maxPayloadKBSize: 500
                                },
                                eb = ["hb", "requestcompleted", "requestfailed", "requestcanceled"],
                                eT = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    this._beaconUrl = e || "https://img.litix.io", this._eventQueue = [], this._postInFlight = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = Object.assign({}, ev, t)
                                };
                            eT.prototype.queueEvent = function(e, t) {
                                var i = Object.assign({}, t);
                                return (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) && (this._eventQueue.push(i), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength)
                            }, eT.prototype.flushEvents = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                e && 1 === this._eventQueue.length ? this._eventQueue.pop() : (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending())
                            }, eT.prototype.destroy = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this.destroyed = !0, e ? this._clearBeaconQueue() : this.flushEvents(), a().clearTimeout(this._sendTimeout)
                            }, eT.prototype._clearBeaconQueue = function() {
                                var e = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0,
                                    t = this._eventQueue.slice(e);
                                e > 0 && Object.assign(t[t.length - 1], ey({
                                    mux_view_message: "event queue truncated"
                                }));
                                var i = this._createPayload(t);
                                eR(this._beaconUrl, i, !0, function() {})
                            }, eT.prototype._sendBeaconQueue = function() {
                                var e = this;
                                if (!this._postInFlight) {
                                    var t = this._eventQueue.slice(0, this._options.maxBeaconSize);
                                    this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0;
                                    var i = this._createPayload(t),
                                        r = m.now();
                                    eR(this._beaconUrl, i, !1, function(i, a) {
                                        a ? (e._eventQueue = t.concat(e._eventQueue), e._failureCount += 1, h.info("Error sending beacon: " + a)) : e._failureCount = 0, e._roundTripTime = m.now() - r, e._postInFlight = !1
                                    })
                                }
                            }, eT.prototype._getNextBeaconTime = function() {
                                if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
                                var e = Math.pow(2, this._failureCount - 1);
                                return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons
                            }, eT.prototype._startBeaconSending = function() {
                                var e = this;
                                a().clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = a().setTimeout(function() {
                                    e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending()
                                }, this._getNextBeaconTime()))
                            }, eT.prototype._createPayload = function(e) {
                                var t, i, r, a = this,
                                    n = {
                                        transmission_timestamp: Math.round(m.now())
                                    };
                                this._roundTripTime && (n.rtt_ms = Math.round(this._roundTripTime));
                                var s = function() {
                                        r = (t = JSON.stringify({
                                            metadata: n,
                                            events: i || e
                                        })).length / 1024
                                    },
                                    o = function() {
                                        return r <= a._options.maxPayloadKBSize
                                    };
                                return s(), o() || (h.info("Payload size is too big (" + r + " kb). Removing unnecessary events."), i = e.filter(function(e) {
                                    return -1 === eb.indexOf(e.e)
                                }), s()), o() || (h.info("Payload size still too big (" + r + " kb). Cropping fields.."), i.forEach(function(e) {
                                    for (var t in e) {
                                        var i = e[t];
                                        "string" == typeof i && i.length > 51200 && (e[t] = i.substring(0, 51200))
                                    }
                                }), s()), t
                            };
                            var eR = function(e, t, i, r) {
                                if (i && navigator && navigator.sendBeacon && navigator.sendBeacon(e, t)) r();
                                else if (a().fetch) a().fetch(e, {
                                    method: "POST",
                                    body: t,
                                    headers: {
                                        "Content-Type": "text/plain"
                                    },
                                    keepalive: t.length <= 57344
                                }).then(function(e) {
                                    return r(null, e.ok ? null : "Error")
                                }).catch(function(e) {
                                    return r(null, e)
                                });
                                else {
                                    if (a().XMLHttpRequest) {
                                        var n = new(a()).XMLHttpRequest;
                                        return n.onreadystatechange = function() {
                                            if (4 === n.readyState) return r(null, 200 !== n.status ? "error" : void 0)
                                        }, n.open("POST", e), n.setRequestHeader("Content-Type", "text/plain"), void n.send(t)
                                    }
                                    r()
                                }
                            };

                            function eS(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }

                            function eP(e, t) {
                                var i = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t && (r = r.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), i.push.apply(i, r)
                                }
                                return i
                            }

                            function eL(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var i = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? eP(Object(i), !0).forEach(function(t) {
                                        eD(e, t, i[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : eP(Object(i)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                                    })
                                }
                                return e
                            }

                            function eA(e) {
                                return (eA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function eI(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }

                            function eD(e, t, i) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = i, e
                            }
                            var ek = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id"],
                                eC = ["adplay", "adplaying", "adpause", "adfirstquartile", "admidpoint", "adthirdquartile", "adended", "adresponse", "adrequest"],
                                eO = ["ad_id", "ad_creative_id", "ad_universal_id"],
                                ew = ["viewstart", "error", "ended", "viewend"],
                                eN = function() {
                                    var e, t;

                                    function i(e, t) {
                                        var r, n, s, o, l, d, u, _, h, c, m, f, p, E, g, y, v, b, T, R = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                        (function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        })(this, i), eD(this, "previousBeaconData", null), eD(this, "lastEventTime", 0), eD(this, "rateLimited", !1), this.mux = e, this.envKey = t, this.options = R, this.eventQueue = new eT((r = this.envKey, s = (n = this.options).beaconCollectionDomain, o = n.beaconDomain, s ? "https://" + s : (r = r || "inferred").match(/^[a-z0-9]+$/) ? "https://" + r + "." + (o || "litix.io") : "https://img.litix.io/a.gif")), this.sampleRate = null != (l = this.options.sampleRate) ? l : 1, this.disableCookies = null != (d = this.options.disableCookies) && d, this.respectDoNotTrack = null != (u = this.options.respectDoNotTrack) && u, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = !1, this.pageLevelData = {
                                            mux_api_version: this.mux.API_VERSION,
                                            mux_embed: this.mux.NAME,
                                            mux_embed_version: this.mux.VERSION,
                                            viewer_application_name: null == (_ = this.options.platform) ? void 0 : _.name,
                                            viewer_application_version: null == (h = this.options.platform) ? void 0 : h.version,
                                            viewer_application_engine: null == (c = this.options.platform) ? void 0 : c.layout,
                                            viewer_device_name: null == (m = this.options.platform) ? void 0 : m.product,
                                            viewer_device_category: "",
                                            viewer_device_manufacturer: null == (f = this.options.platform) ? void 0 : f.manufacturer,
                                            viewer_os_family: null == (p = this.options.platform) || null == (E = p.os) ? void 0 : E.family,
                                            viewer_os_architecture: null == (g = this.options.platform) || null == (y = g.os) ? void 0 : y.architecture,
                                            viewer_os_version: null == (v = this.options.platform) || null == (b = v.os) ? void 0 : b.version,
                                            viewer_connection_type: em(),
                                            page_url: null === a() || void 0 === a() || null == (T = a().location) ? void 0 : T.href
                                        }, this.viewerData = this.disableCookies ? {} : ec()
                                    }
                                    return e = [{
                                        key: "send",
                                        value: function(e, t) {
                                            var i;
                                            if (e && null != t && t.view_id) {
                                                if (this.respectDoNotTrack && c()) return h.info("Not sending `" + e + "` because Do Not Track is enabled");
                                                if (!t || "object" !== eA(t)) return h.error("A data object was expected in send() but was not provided");
                                                var r, a, s = this.disableCookies ? {} : (r = e_(), a = m.now(), r.session_start && (r.sst = r.session_start, delete r.session_start), r.session_id && (r.sid = r.session_id, delete r.session_id), r.session_expires && (r.sex = r.session_expires, delete r.session_expires), (!r.sex || r.sex < a) && (r.sid = n(), r.sst = a), r.sex = a + 15e5, eh(r), {
                                                        session_id: r.sid,
                                                        session_start: r.sst,
                                                        session_expires: r.sex
                                                    }),
                                                    o = eL(eL(eL(eL(eL({}, this.pageLevelData), t), s), this.viewerData), {}, {
                                                        event: e,
                                                        env_key: this.envKey
                                                    });
                                                o.user_id && (o.viewer_user_id = o.user_id, delete o.user_id);
                                                var l = (null != (i = o.mux_sample_number) ? i : 0) >= this.sampleRate,
                                                    d = ey(this._deduplicateBeaconData(e, o));
                                                if (this.lastEventTime = this.mux.utils.now(), l) return h.info("Not sending event due to sample rate restriction", e, o, d);
                                                if (this.envKey || h.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", e, o, d), !this.rateLimited) {
                                                    if (h.info("Sending event", e, o, d), this.rateLimited = !this.eventQueue.queueEvent(e, d), this.mux.WINDOW_UNLOADING && "viewend" === e) this.eventQueue.destroy(!0);
                                                    else if (this.mux.WINDOW_HIDDEN && "hb" === e ? this.eventQueue.flushEvents(!0) : ew.indexOf(e) >= 0 && this.eventQueue.flushEvents(), this.rateLimited) return o.event = "eventrateexceeded", d = ey(o), this.eventQueue.queueEvent(o.event, d), h.error("Beaconing disabled due to rate limit.")
                                                }
                                            }
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function() {
                                            this.eventQueue.destroy(!1)
                                        }
                                    }, {
                                        key: "_deduplicateBeaconData",
                                        value: function(e, t) {
                                            var i = this,
                                                r = {},
                                                a = t.view_id;
                                            if ("-1" === a || "viewstart" === e || "viewend" === e || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5) r = eL({}, t), a && (this.previousBeaconData = r), a && "viewend" === e && (this.previousBeaconData = null);
                                            else {
                                                var n = 0 === e.indexOf("request");
                                                Object.entries(t).forEach(function(t) {
                                                    var a = function(e) {
                                                            if (Array.isArray(e)) return e
                                                        }(t) || function(e, t) {
                                                            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                            if (null != i) {
                                                                var r, a, n = [],
                                                                    s = !0,
                                                                    o = !1;
                                                                try {
                                                                    for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), n.length !== t); s = !0);
                                                                } catch (e) {
                                                                    o = !0, a = e
                                                                } finally {
                                                                    try {
                                                                        s || null == i.return || i.return()
                                                                    } finally {
                                                                        if (o) throw a
                                                                    }
                                                                }
                                                                return n
                                                            }
                                                        }(t, 2) || function(e, t) {
                                                            if (e) {
                                                                if ("string" == typeof e) return eS(e, 2);
                                                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? eS(e, t) : void 0
                                                            }
                                                        }(t, 2) || function() {
                                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                        }(),
                                                        s = a[0],
                                                        o = a[1];
                                                    i.previousBeaconData && (o !== i.previousBeaconData[s] || ek.indexOf(s) > -1 || i.objectHasChanged(n, s, o, i.previousBeaconData[s]) || i.eventRequiresKey(e, s)) && (r[s] = o, i.previousBeaconData[s] = o)
                                                })
                                            }
                                            return r
                                        }
                                    }, {
                                        key: "objectHasChanged",
                                        value: function(e, t, i, r) {
                                            return !(!e || 0 !== t.indexOf("request_") || "request_response_headers" !== t && "object" === eA(i) && "object" === eA(r) && Object.keys(i || {}).length === Object.keys(r || {}).length)
                                        }
                                    }, {
                                        key: "eventRequiresKey",
                                        value: function(e, t) {
                                            return "renditionchange" === e && 0 === t.indexOf("video_source_") || !(!eO.includes(t) || !eC.includes(e))
                                        }
                                    }], eI(i.prototype, e), t && eI(i, t), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), i
                                }(),
                                eM = (Object.defineProperty(e2 = function e(t) {
                                    if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                                    var i = 0,
                                        r = 0,
                                        a = 0,
                                        n = 0,
                                        s = 0,
                                        o = 0,
                                        l = 0;
                                    t.on("requestcompleted", function(e, o) {
                                        var l, d, u = o.request_start,
                                            _ = o.request_response_start,
                                            h = o.request_response_end,
                                            c = o.request_bytes_loaded;
                                        if (n++, _ ? (l = _ - (null != u ? u : 0), d = (null != h ? h : 0) - _) : d = (null != h ? h : 0) - (null != u ? u : 0), d > 0 && c && c > 0) {
                                            var m = c / d * 8e3;
                                            s++, r += c, a += d, t.data.view_min_request_throughput = Math.min(t.data.view_min_request_throughput || 1 / 0, m), t.data.view_average_request_throughput = r / a * 8e3, t.data.view_request_count = n, l > 0 && (i += l, t.data.view_max_request_latency = Math.max(t.data.view_max_request_latency || 0, l), t.data.view_average_request_latency = i / s)
                                        }
                                    }), t.on("requestfailed", function(e, i) {
                                        n++, o++, t.data.view_request_count = n, t.data.view_request_failed_count = o
                                    }), t.on("requestcanceled", function(e, i) {
                                        n++, l++, t.data.view_request_count = n, t.data.view_request_canceled_count = l
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), e2),
                                eU = (Object.defineProperty(e4 = function e(t) {
                                    var i = this;
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, e), t.on("before*", function(e, r) {
                                        var a = r.viewer_time,
                                            n = m.now(),
                                            s = i._lastEventTime;
                                        if (i._lastEventTime = n, s && n - s > 36e5) {
                                            var o = Object.keys(t.data).reduce(function(e, i) {
                                                var r, a;
                                                return 0 === i.indexOf("video_") ? Object.assign(e, (r = {}, a = t.data[i], i in r ? Object.defineProperty(r, i, {
                                                    value: a,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : r[i] = a, r)) : e
                                            }, {});
                                            t.mux.log.info("Received event after at least an hour inactivity, creating a new view"), t.emit("viewinit", Object.assign({
                                                viewer_time: a
                                            }, o)), t.playbackHeartbeat._playheadShouldBeProgressing && "play" !== e.type && "adbreakstart" !== e.type && (t.emit("play", {
                                                viewer_time: a
                                            }), "playing" !== e.type && t.emit("playing", {
                                                viewer_time: a
                                            }))
                                        }
                                    })
                                }, "prototype", {
                                    writable: !1
                                }), e4);

                            function eF(e) {
                                return (eF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function eB(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }

                            function ex(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }

                            function eG(e, t) {
                                return (eG = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                    return e.__proto__ = t, e
                                })(e, t)
                            }

                            function eY(e) {
                                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }

                            function eV(e) {
                                return (eV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e)
                                })(e)
                            }
                            var ej = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange"],
                                eq = function(e) {
                                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                                    s.prototype = Object.create(e && e.prototype, {
                                        constructor: {
                                            value: s,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), Object.defineProperty(s, "prototype", {
                                        writable: !1
                                    }), e && eG(s, e);
                                    var t, i, r, a = (t = function() {
                                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                        if ("function" == typeof Proxy) return !0;
                                        try {
                                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                        } catch (e) {
                                            return !1
                                        }
                                    }(), function() {
                                        var e, i = eV(s);
                                        return e = t ? Reflect.construct(i, arguments, eV(this).constructor) : i.apply(this, arguments),
                                            function(e, t) {
                                                if (t && ("object" === eF(t) || "function" == typeof t)) return t;
                                                if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                                                return eY(e)
                                            }(this, e)
                                    });

                                    function s(e, t, i) {
                                        ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, s), (o = a.call(this)).DOM_CONTENT_LOADED_EVENT_END = E.domContentLoadedEventEnd(), o.NAVIGATION_START = E.navigationStart(), o.mux = e, o.id = t, null != (r = i) && r.beaconDomain && o.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."), (i = Object.assign({
                                            debug: !1,
                                            minimumRebufferDuration: 250,
                                            sustainedRebufferThreshold: 1e3,
                                            playbackHeartbeatTime: 25,
                                            beaconDomain: "litix.io",
                                            sampleRate: 1,
                                            disableCookies: !1,
                                            respectDoNotTrack: !1,
                                            disableRebufferTracking: !1,
                                            disablePlayheadRebufferTracking: !1,
                                            errorTranslator: function(e) {
                                                return e
                                            }
                                        }, i)).data = i.data || {}, i.data.property_key && (i.data.env_key = i.data.property_key, delete i.data.property_key), h.setLevel(i.debug ? "debug" : "warn"), o.getPlayheadTime = i.getPlayheadTime, o.getStateData = i.getStateData || function() {
                                            return {}
                                        }, o.getAdData = i.getAdData || function() {}, o.minimumRebufferDuration = i.minimumRebufferDuration, o.sustainedRebufferThreshold = i.sustainedRebufferThreshold, o.playbackHeartbeatTime = i.playbackHeartbeatTime, o.disableRebufferTracking = i.disableRebufferTracking, o.disableRebufferTracking && o.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), o.disablePlayheadRebufferTracking = i.disablePlayheadRebufferTracking, o.errorTranslator = i.errorTranslator, o.playbackEventDispatcher = new eN(e, i.data.env_key, i), o.data = {
                                            player_instance_id: n(),
                                            mux_sample_rate: i.sampleRate,
                                            beacon_domain: i.beaconCollectionDomain || i.beaconDomain
                                        }, o.data.view_sequence_number = 1, o.data.player_sequence_number = 1, o.oldEmit = o.emit, o.emit = function(e, t) {
                                            t = Object.assign({
                                                viewer_time: this.mux.utils.now()
                                            }, t), this.oldEmit(e, t)
                                        };
                                        var r, o, l = (function() {
                                            void 0 === this.data.view_start && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"))
                                        }).bind(eY(o));
                                        o.on("viewinit", function(e, t) {
                                            this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), Object.assign(this.data, t), this._initializeViewData(), this.one("play", l), this.one("adbreakstart", l)
                                        });
                                        var d = (function(e) {
                                            this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e)
                                        }).bind(eY(o));
                                        if (o.on("videochange", function(e, t) {
                                                d(t)
                                            }), o.on("programchange", function(e, t) {
                                                this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), d(Object.assign(t, {
                                                    view_program_changed: !0
                                                })), l(), this.emit("play"), this.emit("playing")
                                            }), o.on("fragmentchange", function(e, t) {
                                                this.currentFragmentPDT = t.currentFragmentPDT, this.currentFragmentStart = t.currentFragmentStart
                                            }), o.on("destroy", o.destroy), "undefined" != typeof window && "function" == typeof window.addEventListener && "function" == typeof window.removeEventListener) {
                                            var u = function() {
                                                var e = void 0 !== o.data.view_start;
                                                o.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState, e && o.mux.WINDOW_HIDDEN && (o.data.player_is_paused || o.emit("hb"))
                                            };
                                            window.addEventListener("visibilitychange", u, !1);
                                            var _ = function(e) {
                                                e.persisted || o.destroy()
                                            };
                                            window.addEventListener("pagehide", _, !1), o.on("destroy", function() {
                                                window.removeEventListener("visibilitychange", u), window.removeEventListener("pagehide", _)
                                            })
                                        }
                                        return o.on("playerready", function(e, t) {
                                            Object.assign(this.data, t)
                                        }), ej.forEach(function(e) {
                                            o.on(e, function(t, i) {
                                                0 !== e.indexOf("ad") && this._updateStateData(), Object.assign(this.data, i), this._sanitizeData()
                                            }), o.on("after" + e, function() {
                                                ("error" !== e || this.errorTracker.viewErrored) && this.send(e)
                                            })
                                        }), o.on("viewend", function(e, t) {
                                            Object.assign(o.data, t)
                                        }), o.one("playerready", function(e) {
                                            var t = this.mux.utils.now();
                                            this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time
                                        }), o.longResumeTracker = new eU(eY(o)), o.errorTracker = new x(eY(o)), new es(eY(o)), o.seekingTracker = new X(eY(o)), o.playheadTime = new H(eY(o)), o.playbackHeartbeat = new B(eY(o)), new z(eY(o)), o.watchTimeTracker = new Y(eY(o)), new j(eY(o)), o.adTracker = new ea(eY(o)), new W(eY(o)), new J(eY(o)), new Q(eY(o)), new en(eY(o)), new eM(eY(o)), i.hlsjs && o.addHLSJS(i), i.dashjs && o.addDashJS(i), o.emit("viewinit", i.data), o
                                    }
                                    return i = [{
                                        key: "destroy",
                                        value: function() {
                                            this._destroyed || (this._destroyed = !0, void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout))
                                        }
                                    }, {
                                        key: "send",
                                        value: function(e) {
                                            if (this.data.view_id) {
                                                var t = Object.assign({}, this.data);
                                                if (void 0 === t.video_source_is_live && (t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0 ? t.video_source_is_live = !0 : (t.player_source_duration > 0 || t.video_source_duration > 0) && (t.video_source_is_live = !1)), t.video_source_is_live || ["player_program_time", "player_manifest_newest_program_time", "player_live_edge_program_time", "player_program_time", "video_holdback", "video_part_holdback", "video_target_duration", "video_part_target_duration"].forEach(function(e) {
                                                        t[e] = void 0
                                                    }), t.video_source_url = t.video_source_url || t.player_source_url, t.video_source_url) {
                                                    var i, r = (i = p(t.video_source_url), function(e) {
                                                            if (Array.isArray(e)) return e
                                                        }(i) || function(e, t) {
                                                            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                            if (null != i) {
                                                                var r, a, n = [],
                                                                    s = !0,
                                                                    o = !1;
                                                                try {
                                                                    for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), n.length !== t); s = !0);
                                                                } catch (e) {
                                                                    o = !0, a = e
                                                                } finally {
                                                                    try {
                                                                        s || null == i.return || i.return()
                                                                    } finally {
                                                                        if (o) throw a
                                                                    }
                                                                }
                                                                return n
                                                            }
                                                        }(i, 2) || function(e, t) {
                                                            if (e) {
                                                                if ("string" == typeof e) return eB(e, 2);
                                                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? eB(e, t) : void 0
                                                            }
                                                        }(i, 2) || function() {
                                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                        }()),
                                                        a = r[0];
                                                    t.video_source_domain = r[1], t.video_source_hostname = a
                                                }
                                                delete t.ad_request_id, this.playbackEventDispatcher.send(e, t), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat(), "viewend" === e && delete this.data.view_id
                                            }
                                        }
                                    }, {
                                        key: "_updateStateData",
                                        value: function() {
                                            Object.assign(this.data, this.getStateData()), this.playheadTime._updatePlayheadTime(), this._sanitizeData()
                                        }
                                    }, {
                                        key: "_sanitizeData",
                                        value: function() {
                                            var e = this;
                                            ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"].forEach(function(t) {
                                                var i = parseInt(e.data[t], 10);
                                                e.data[t] = isNaN(i) ? void 0 : i
                                            }), ["player_source_url", "video_source_url"].forEach(function(t) {
                                                if (e.data[t]) {
                                                    var i = e.data[t].toLowerCase();
                                                    0 !== i.indexOf("data:") && 0 !== i.indexOf("blob:") || (e.data[t] = "MSE style URL")
                                                }
                                            })
                                        }
                                    }, {
                                        key: "_resetVideoData",
                                        value: function(e, t) {
                                            var i = this;
                                            Object.keys(this.data).forEach(function(e) {
                                                0 === e.indexOf("video_") && delete i.data[e]
                                            })
                                        }
                                    }, {
                                        key: "_resetViewData",
                                        value: function() {
                                            var e = this;
                                            Object.keys(this.data).forEach(function(t) {
                                                0 === t.indexOf("view_") && delete e.data[t]
                                            }), this.data.view_sequence_number = 1
                                        }
                                    }, {
                                        key: "_resetErrorData",
                                        value: function(e, t) {
                                            delete this.data.player_error_code, delete this.data.player_error_message
                                        }
                                    }, {
                                        key: "_initializeViewData",
                                        value: function() {
                                            var e = this,
                                                t = this.data.view_id = n(),
                                                i = function() {
                                                    t === e.data.view_id && g(e.data, "player_view_count", 1)
                                                };
                                            this.data.player_is_paused ? this.one("play", i) : i()
                                        }
                                    }, {
                                        key: "_restartHeartBeat",
                                        value: function() {
                                            var e = this;
                                            window.clearTimeout(this._heartBeatTimeout), this.errorTracker.viewErrored || (this._heartBeatTimeout = window.setTimeout(function() {
                                                e.data.player_is_paused || e.emit("hb")
                                            }, 1e4))
                                        }
                                    }, {
                                        key: "addHLSJS",
                                        value: function(e) {
                                            e.hlsjs ? this.hlsjs ? this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e.hlsjs, function(e, t, i) {
                                                var r = arguments.length > 4 ? arguments[4] : void 0,
                                                    a = e.log,
                                                    n = e.utils.secondsToMs,
                                                    s = function(e) {
                                                        var t, i = parseInt(r.version);
                                                        return 1 === i && null !== e.programDateTime && (t = e.programDateTime), 0 === i && null !== e.pdt && (t = e.pdt), t
                                                    };
                                                if (E.exists()) {
                                                    var o = function(i, r) {
                                                            return e.emit(t, i, r)
                                                        },
                                                        l = function(e, t) {
                                                            var i = t.levels,
                                                                r = t.audioTracks,
                                                                a = t.url,
                                                                n = t.stats,
                                                                s = t.networkDetails,
                                                                l = t.sessionData,
                                                                d = {},
                                                                u = {};
                                                            i.forEach(function(e, t) {
                                                                d[t] = {
                                                                    width: e.width,
                                                                    height: e.height,
                                                                    bitrate: e.bitrate,
                                                                    attrs: e.attrs
                                                                }
                                                            }), r.forEach(function(e, t) {
                                                                u[t] = {
                                                                    name: e.name,
                                                                    language: e.lang,
                                                                    bitrate: e.bitrate
                                                                }
                                                            });
                                                            var _ = L(n),
                                                                h = _.bytesLoaded,
                                                                c = _.requestStart,
                                                                m = _.responseStart,
                                                                p = _.responseEnd;
                                                            o("requestcompleted", P(P({}, R(l)), {}, {
                                                                request_event_type: e,
                                                                request_bytes_loaded: h,
                                                                request_start: c,
                                                                request_response_start: m,
                                                                request_response_end: p,
                                                                request_type: "manifest",
                                                                request_hostname: f(a),
                                                                request_response_headers: A(s),
                                                                request_rendition_lists: {
                                                                    media: d,
                                                                    audio: u,
                                                                    video: {}
                                                                }
                                                            }))
                                                        };
                                                    i.on(r.Events.MANIFEST_LOADED, l);
                                                    var d = function(e, t) {
                                                        var i = t.details,
                                                            r = t.level,
                                                            a = t.networkDetails,
                                                            l = L(t.stats),
                                                            d = l.bytesLoaded,
                                                            u = l.requestStart,
                                                            _ = l.responseStart,
                                                            h = l.responseEnd,
                                                            c = i.fragments[i.fragments.length - 1],
                                                            m = s(c) + n(c.duration);
                                                        o("requestcompleted", {
                                                            request_event_type: e,
                                                            request_bytes_loaded: d,
                                                            request_start: u,
                                                            request_response_start: _,
                                                            request_response_end: h,
                                                            request_current_level: r,
                                                            request_type: "manifest",
                                                            request_hostname: f(i.url),
                                                            request_response_headers: A(a),
                                                            video_holdback: i.holdBack && n(i.holdBack),
                                                            video_part_holdback: i.partHoldBack && n(i.partHoldBack),
                                                            video_part_target_duration: i.partTarget && n(i.partTarget),
                                                            video_target_duration: i.targetduration && n(i.targetduration),
                                                            video_source_is_live: i.live,
                                                            player_manifest_newest_program_time: isNaN(m) ? void 0 : m
                                                        })
                                                    };
                                                    i.on(r.Events.LEVEL_LOADED, d);
                                                    var u = function(e, t) {
                                                        var i = t.details,
                                                            r = t.networkDetails,
                                                            a = L(t.stats);
                                                        o("requestcompleted", {
                                                            request_event_type: e,
                                                            request_bytes_loaded: a.bytesLoaded,
                                                            request_start: a.requestStart,
                                                            request_response_start: a.responseStart,
                                                            request_response_end: a.responseEnd,
                                                            request_type: "manifest",
                                                            request_hostname: f(i.url),
                                                            request_response_headers: A(r)
                                                        })
                                                    };
                                                    i.on(r.Events.AUDIO_TRACK_LOADED, u);
                                                    var _ = function(e, t) {
                                                        var r = t.stats,
                                                            a = t.networkDetails,
                                                            n = t.frag,
                                                            s = L(r = r || n.stats),
                                                            l = s.bytesLoaded,
                                                            d = s.requestStart,
                                                            u = s.responseStart,
                                                            _ = s.responseEnd,
                                                            h = a ? A(a) : void 0,
                                                            c = {
                                                                request_event_type: e,
                                                                request_bytes_loaded: l,
                                                                request_start: d,
                                                                request_response_start: u,
                                                                request_response_end: _,
                                                                request_hostname: a ? f(a.responseURL) : void 0,
                                                                request_id: h ? T(h) : void 0,
                                                                request_response_headers: h,
                                                                request_media_duration: n.duration,
                                                                request_url: null == a ? void 0 : a.responseURL
                                                            };
                                                        "main" === n.type ? (c.request_type = "media", c.request_current_level = n.level, c.request_video_width = (i.levels[n.level] || {}).width, c.request_video_height = (i.levels[n.level] || {}).height, c.request_labeled_bitrate = (i.levels[n.level] || {}).bitrate) : c.request_type = n.type, o("requestcompleted", c)
                                                    };
                                                    i.on(r.Events.FRAG_LOADED, _);
                                                    var h = function(e, t) {
                                                        var i = t.frag,
                                                            r = i.start;
                                                        o("fragmentchange", {
                                                            currentFragmentPDT: s(i),
                                                            currentFragmentStart: n(r)
                                                        })
                                                    };
                                                    i.on(r.Events.FRAG_CHANGED, h);
                                                    var c = function(e, t) {
                                                        var i, a = t.type,
                                                            n = t.details,
                                                            s = t.response,
                                                            l = t.fatal,
                                                            d = t.frag,
                                                            u = t.networkDetails,
                                                            _ = (null == d ? void 0 : d.url) || t.url || "",
                                                            h = u ? A(u) : void 0;
                                                        n !== r.ErrorDetails.MANIFEST_LOAD_ERROR && n !== r.ErrorDetails.MANIFEST_LOAD_TIMEOUT && n !== r.ErrorDetails.FRAG_LOAD_ERROR && n !== r.ErrorDetails.FRAG_LOAD_TIMEOUT && n !== r.ErrorDetails.LEVEL_LOAD_ERROR && n !== r.ErrorDetails.LEVEL_LOAD_TIMEOUT && n !== r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && n !== r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT && n !== r.ErrorDetails.SUBTITLE_LOAD_ERROR && n !== r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT && n !== r.ErrorDetails.KEY_LOAD_ERROR && n !== r.ErrorDetails.KEY_LOAD_TIMEOUT || o("requestfailed", {
                                                            request_error: n,
                                                            request_url: _,
                                                            request_hostname: f(_),
                                                            request_id: h ? T(h) : void 0,
                                                            request_type: n === r.ErrorDetails.FRAG_LOAD_ERROR || n === r.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : n === r.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || n === r.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ? "audio" : n === r.ErrorDetails.SUBTITLE_LOAD_ERROR || n === r.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ? "subtitle" : n === r.ErrorDetails.KEY_LOAD_ERROR || n === r.ErrorDetails.KEY_LOAD_TIMEOUT ? "encryption" : "manifest",
                                                            request_error_code: null == s ? void 0 : s.code,
                                                            request_error_text: null == s ? void 0 : s.text
                                                        }), l && o("error", {
                                                            player_error_code: a,
                                                            player_error_message: n,
                                                            player_error_context: "".concat(_ ? "url: ".concat(_, "\n") : "") + "".concat(s && (s.code || s.text) ? "response: ".concat(s.code, ", ").concat(s.text, "\n") : "") + "".concat(t.reason ? "failure reason: ".concat(t.reason, "\n") : "") + "".concat(t.level ? "level: ".concat(t.level, "\n") : "") + "".concat(t.parent ? "parent stream controller: ".concat(t.parent, "\n") : "") + "".concat(t.buffer ? "buffer length: ".concat(t.buffer, "\n") : "") + "".concat(t.error ? "error: ".concat(t.error, "\n") : "") + "".concat(t.event ? "event: ".concat(t.event, "\n") : "") + "".concat(t.err ? "error message: ".concat(null == (i = t.err) ? void 0 : i.message, "\n") : "")
                                                        })
                                                    };
                                                    i.on(r.Events.ERROR, c);
                                                    var m = function(e, t) {
                                                        var i = t.frag,
                                                            r = i && i._url || "";
                                                        o("requestcanceled", {
                                                            request_event_type: e,
                                                            request_url: r,
                                                            request_type: "media",
                                                            request_hostname: f(r)
                                                        })
                                                    };
                                                    i.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, m);
                                                    var p = function(e, t) {
                                                        var r = t.level,
                                                            n = i.levels[r];
                                                        if (n && n.attrs && n.attrs.BANDWIDTH) {
                                                            var s, l = n.attrs.BANDWIDTH,
                                                                d = parseFloat(n.attrs["FRAME-RATE"]);
                                                            isNaN(d) || (s = d), l ? o("renditionchange", {
                                                                video_source_fps: s,
                                                                video_source_bitrate: l,
                                                                video_source_width: n.width,
                                                                video_source_height: n.height,
                                                                video_source_rendition_name: n.name,
                                                                video_source_codec: null == n ? void 0 : n.videoCodec
                                                            }) : a.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")
                                                        }
                                                    };
                                                    i.on(r.Events.LEVEL_SWITCHED, p), i._stopMuxMonitor = function() {
                                                        i.off(r.Events.MANIFEST_LOADED, l), i.off(r.Events.LEVEL_LOADED, d), i.off(r.Events.AUDIO_TRACK_LOADED, u), i.off(r.Events.FRAG_LOADED, _), i.off(r.Events.FRAG_CHANGED, h), i.off(r.Events.ERROR, c), i.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, m), i.off(r.Events.LEVEL_SWITCHED, p), i.off(r.Events.DESTROYING, i._stopMuxMonitor), delete i._stopMuxMonitor
                                                    }, i.on(r.Events.DESTROYING, i._stopMuxMonitor)
                                                } else a.warn("performance timing not supported. Not tracking HLS.js.")
                                            }(this.mux, this.id, e.hlsjs, {}, e.Hls || window.Hls)) : this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")
                                        }
                                    }, {
                                        key: "removeHLSJS",
                                        value: function() {
                                            var e;
                                            this.hlsjs && ((e = this.hlsjs) && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor(), this.hlsjs = void 0)
                                        }
                                    }, {
                                        key: "addDashJS",
                                        value: function(e) {
                                            e.dashjs ? this.dashjs ? this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e.dashjs, function(e, t, i) {
                                                var r = e.log;
                                                if (i && i.on) {
                                                    var a = w(i),
                                                        n = function(i, r) {
                                                            return e.emit(t, i, r)
                                                        },
                                                        s = function(e) {
                                                            var t = e.type,
                                                                i = (e.data || {}).url;
                                                            n("requestcompleted", {
                                                                request_event_type: t,
                                                                request_start: 0,
                                                                request_response_start: 0,
                                                                request_response_end: 0,
                                                                request_bytes_loaded: -1,
                                                                request_type: "manifest",
                                                                request_hostname: f(i),
                                                                request_url: i
                                                            })
                                                        };
                                                    i.on("manifestLoaded", s);
                                                    var o = {},
                                                        l = function(e) {
                                                            if ("function" != typeof e.getRequests) return null;
                                                            var t = e.getRequests({
                                                                state: "executed"
                                                            });
                                                            return 0 === t.length ? null : t[t.length - 1]
                                                        },
                                                        d = function(e) {
                                                            var t = e.type,
                                                                r = e.chunk,
                                                                a = e.request,
                                                                s = (r || {}).mediaInfo || {},
                                                                l = s.type,
                                                                d = s.bitrateList,
                                                                u = {};
                                                            (d = d || []).forEach(function(e, t) {
                                                                u[t] = {}, u[t].width = e.width, u[t].height = e.height, u[t].bitrate = e.bandwidth, u[t].attrs = {}
                                                            }), "video" === l ? o.video = u : "audio" === l ? o.audio = u : o.media = u;
                                                            var _ = k(a, i),
                                                                h = _.requestStart,
                                                                c = _.requestResponseStart,
                                                                m = _.requestResponseEnd,
                                                                f = _.requestResponseHeaders,
                                                                p = _.requestMediaDuration,
                                                                E = _.requestHostname,
                                                                g = _.requestUrl;
                                                            n("requestcompleted", {
                                                                request_event_type: t,
                                                                request_start: h,
                                                                request_response_start: c,
                                                                request_response_end: m,
                                                                request_bytes_loaded: -1,
                                                                request_type: l + "_init",
                                                                request_response_headers: f,
                                                                request_hostname: E,
                                                                request_id: _.requestId,
                                                                request_url: g,
                                                                request_media_duration: p,
                                                                request_rendition_lists: o
                                                            })
                                                        };
                                                    a >= 4 ? i.on("initFragmentLoaded", d) : i.on("initFragmentLoaded", function(e) {
                                                        var t = e.type,
                                                            i = e.fragmentModel,
                                                            r = e.chunk;
                                                        d({
                                                            type: t,
                                                            request: l(i),
                                                            chunk: r
                                                        })
                                                    });
                                                    var u = function(e) {
                                                        var t = e.type,
                                                            r = e.chunk,
                                                            a = e.request,
                                                            s = r || {},
                                                            o = s.mediaInfo,
                                                            l = s.start,
                                                            d = (o || {}).type,
                                                            u = k(a, i),
                                                            _ = u.requestStart,
                                                            h = u.requestResponseStart,
                                                            c = u.requestResponseEnd,
                                                            m = u.requestBytesLoaded,
                                                            f = u.requestResponseHeaders,
                                                            p = u.requestMediaDuration,
                                                            E = u.requestHostname,
                                                            g = u.requestUrl,
                                                            y = u.requestId,
                                                            v = C(d, i),
                                                            b = v.currentLevel,
                                                            T = v.renditionWidth,
                                                            R = v.renditionHeight;
                                                        n("requestcompleted", {
                                                            request_event_type: t,
                                                            request_start: _,
                                                            request_response_start: h,
                                                            request_response_end: c,
                                                            request_bytes_loaded: m,
                                                            request_type: d,
                                                            request_response_headers: f,
                                                            request_hostname: E,
                                                            request_id: y,
                                                            request_url: g,
                                                            request_media_start_time: l,
                                                            request_media_duration: p,
                                                            request_current_level: b,
                                                            request_labeled_bitrate: v.renditionBitrate,
                                                            request_video_width: T,
                                                            request_video_height: R
                                                        })
                                                    };
                                                    a >= 4 ? i.on("mediaFragmentLoaded", u) : i.on("mediaFragmentLoaded", function(e) {
                                                        var t = e.type,
                                                            i = e.fragmentModel,
                                                            r = e.chunk;
                                                        u({
                                                            type: t,
                                                            request: l(i),
                                                            chunk: r
                                                        })
                                                    });
                                                    var _ = {
                                                            video: void 0,
                                                            audio: void 0,
                                                            totalBitrate: void 0
                                                        },
                                                        h = function() {
                                                            if (_.video && "number" == typeof _.video.bitrate) {
                                                                if (_.video.width && _.video.height) {
                                                                    var e = _.video.bitrate;
                                                                    return _.audio && "number" == typeof _.audio.bitrate && (e += _.audio.bitrate), e !== _.totalBitrate ? (_.totalBitrate = e, {
                                                                        video_source_bitrate: e,
                                                                        video_source_height: _.video.height,
                                                                        video_source_width: _.video.width,
                                                                        video_source_codec: O(_.video.codec)
                                                                    }) : void 0
                                                                }
                                                                r.warn("have bitrate info for video but missing width/height")
                                                            }
                                                        },
                                                        c = function(e, t, a) {
                                                            if ("number" == typeof e.newQuality) {
                                                                var s = e.mediaType;
                                                                if ("audio" === s || "video" === s) {
                                                                    var o = i.getBitrateInfoListFor(s).find(function(t) {
                                                                        return t.qualityIndex === e.newQuality
                                                                    });
                                                                    if (o && "number" == typeof o.bitrate) {
                                                                        _[s] = D(D({}, o), {}, {
                                                                            codec: i.getCurrentTrackFor(s).codec
                                                                        });
                                                                        var l = h();
                                                                        l && n("renditionchange", l)
                                                                    } else r.warn("missing bitrate info for ".concat(s))
                                                                }
                                                            } else r.warn("missing evt.newQuality in qualityChangeRendered event", e)
                                                        };
                                                    i.on("qualityChangeRendered", c);
                                                    var m = function(e) {
                                                        var t = e.request,
                                                            i = e.mediaType;
                                                        n("requestcanceled", {
                                                            request_event_type: (t = t || {}).type + "_" + t.action,
                                                            request_url: t.url,
                                                            request_type: i,
                                                            request_hostname: f(t.url)
                                                        })
                                                    };
                                                    i.on("fragmentLoadingAbandoned", m);
                                                    var p = function(e) {
                                                        var t, i, r = e.error,
                                                            a = (null == r || null == (t = r.data) ? void 0 : t.request) || {},
                                                            s = (null == r || null == (i = r.data) ? void 0 : i.response) || {};
                                                        27 === (null == r ? void 0 : r.code) && n("requestfailed", {
                                                            request_error: a.type + "_" + a.action,
                                                            request_url: a.url,
                                                            request_hostname: f(a.url),
                                                            request_type: a.mediaType,
                                                            request_error_code: s.status,
                                                            request_error_text: s.statusText
                                                        });
                                                        var o = "".concat(null != a && a.url ? "url: ".concat(a.url, "\n") : "") + "".concat(null != s && s.status || null != s && s.statusText ? "response: ".concat(null == s ? void 0 : s.status, ", ").concat(null == s ? void 0 : s.statusText, "\n") : "");
                                                        n("error", {
                                                            player_error_code: null == r ? void 0 : r.code,
                                                            player_error_message: null == r ? void 0 : r.message,
                                                            player_error_context: o
                                                        })
                                                    };
                                                    i.on("error", p), i._stopMuxMonitor = function() {
                                                        i.off("manifestLoaded", s), i.off("initFragmentLoaded", d), i.off("mediaFragmentLoaded", u), i.off("qualityChangeRendered", c), i.off("error", p), i.off("fragmentLoadingAbandoned", m), delete i._stopMuxMonitor
                                                    }
                                                } else r.warn("Invalid dash.js player reference. Monitoring blocked.")
                                            }(this.mux, this.id, e.dashjs)) : this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")
                                        }
                                    }, {
                                        key: "removeDashJS",
                                        value: function() {
                                            var e;
                                            this.dashjs && ((e = this.dashjs) && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor(), this.dashjs = void 0)
                                        }
                                    }], ex(s.prototype, i), r && ex(s, r), Object.defineProperty(s, "prototype", {
                                        writable: !1
                                    }), s
                                }(U),
                                eH = i(153),
                                eJ = i.n(eH);

                            function eK(e) {
                                return (eK = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function eW(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var r, a, n = [],
                                            s = !0,
                                            o = !1;
                                        try {
                                            for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), !t || n.length !== t); s = !0);
                                        } catch (e) {
                                            o = !0, a = e
                                        } finally {
                                            try {
                                                s || null == i.return || i.return()
                                            } finally {
                                                if (o) throw a
                                            }
                                        }
                                        return n
                                    }
                                }(e, t) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return e$(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? e$(e, t) : void 0
                                    }
                                }(e, t) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }

                            function e$(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }
                            var eQ, ez, eX, eZ, e0, e1, e2, e4, e3, e5 = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"],
                                e8 = {
                                    1: "MEDIA_ERR_ABORTED",
                                    2: "MEDIA_ERR_NETWORK",
                                    3: "MEDIA_ERR_DECODE",
                                    4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
                                };
                            a() && a().WeakMap && (e3 = new WeakMap);
                            var e6 = function(e) {
                                return this.buffer = "", this.manifest = {
                                    segments: [],
                                    serverControl: {},
                                    sessionData: {}
                                }, this.currentUri = {}, this.process(e), this.manifest
                            };
                            e6.prototype.process = function(e) {
                                var t;
                                for (this.buffer += e, t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n")) this.processLine(this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1)
                            }, e6.prototype.processLine = function(e) {
                                var t = e.indexOf(":"),
                                    i = ta(e, t),
                                    r = i[0],
                                    a = 2 === i.length ? te(i[1]) : void 0;
                                if ("#" !== r[0]) this.currentUri.uri = r, this.manifest.segments.push(this.currentUri), !this.manifest.targetDuration || "duration" in this.currentUri || (this.currentUri.duration = this.manifest.targetDuration), this.currentUri = {};
                                else switch (r) {
                                    case "#EXT-X-TARGETDURATION":
                                        if (!isFinite(a) || a < 0) return;
                                        this.manifest.targetDuration = a, this.setHoldBack();
                                        break;
                                    case "#EXT-X-PART-INF":
                                        e9(this.manifest, i), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
                                        break;
                                    case "#EXT-X-SERVER-CONTROL":
                                        e9(this.manifest, i), this.setHoldBack();
                                        break;
                                    case "#EXTINF":
                                        0 === a ? this.currentUri.duration = .01 : a > 0 && (this.currentUri.duration = a);
                                        break;
                                    case "#EXT-X-PROGRAM-DATE-TIME":
                                        var n = new Date(a);
                                        this.manifest.dateTimeString || (this.manifest.dateTimeString = a, this.manifest.dateTimeObject = n), this.currentUri.dateTimeString = a, this.currentUri.dateTimeObject = n;
                                        break;
                                    case "#EXT-X-VERSION":
                                        e9(this.manifest, i);
                                        break;
                                    case "#EXT-X-SESSION-DATA":
                                        var s = R(tn(i[1]));
                                        Object.assign(this.manifest.sessionData, s)
                                }
                            }, e6.prototype.setHoldBack = function() {
                                var e = this.manifest,
                                    t = e.serverControl,
                                    i = e.targetDuration,
                                    r = e.partTargetDuration;
                                if (t) {
                                    var a = "holdBack",
                                        n = "partHoldBack",
                                        s = i && 3 * i,
                                        o = r && 2 * r;
                                    i && !t.hasOwnProperty(a) && (t[a] = s), s && t[a] < s && (t[a] = s), r && !t.hasOwnProperty(n) && (t[n] = 3 * r), r && t[n] < o && (t[n] = o)
                                }
                            };
                            var e9 = function(e, t) {
                                    var i, r = e7(t[0].replace("#EXT-X-", ""));
                                    tr(t[1]) ? (i = {}, i = Object.assign(ti(t[1]), i)) : i = te(t[1]), e[r] = i
                                },
                                e7 = function(e) {
                                    return e.toLowerCase().replace(/-(\w)/g, function(e) {
                                        return e[1].toUpperCase()
                                    })
                                },
                                te = function(e) {
                                    if ("yes" === e.toLowerCase() || "no" === e.toLowerCase()) return "yes" === e.toLowerCase();
                                    var t = -1 !== e.indexOf(":") ? e : parseFloat(e);
                                    return isNaN(t) ? e : t
                                },
                                tt = function(e) {
                                    var t = {},
                                        i = e.split("=");
                                    return i.length > 1 && (t[e7(i[0])] = te(i[1])), t
                                },
                                ti = function(e) {
                                    for (var t = e.split(","), i = {}, r = 0; t.length > r; r++) i = Object.assign(tt(t[r]), i);
                                    return i
                                },
                                tr = function(e) {
                                    return e.indexOf("=") > -1
                                },
                                ta = function(e, t) {
                                    return -1 === t ? [e] : [e.substring(0, t), e.substring(t + 1)]
                                },
                                tn = function(e) {
                                    var t = {};
                                    if (e) {
                                        var i = e.search(",");
                                        return [e.slice(0, i), e.slice(i + 1)].forEach(function(e, i) {
                                            for (var r = e.replace(/['"]+/g, "").split("="), a = 0; a < r.length; a++) "DATA-ID" === r[a] && (t["DATA-ID"] = r[1 - a]), "VALUE" === r[a] && (t.VALUE = r[1 - a])
                                        }), {
                                            data: t
                                        }
                                    }
                                },
                                ts = {
                                    safeCall: function(e, t, i, r) {
                                        var a = r;
                                        if (e && "function" == typeof e[t]) try {
                                            a = e[t].apply(e, i)
                                        } catch (e) {
                                            h.info("safeCall error", e)
                                        }
                                        return a
                                    },
                                    safeIncrement: g,
                                    getComputedStyle: function(e, t) {
                                        var i;
                                        if (e && t && a() && "function" == typeof a().getComputedStyle) return e3 && e3.has(e) && (i = e3.get(e)), i || (i = a().getComputedStyle(e, null), e3 && e3.set(e, i)), i.getPropertyValue(t)
                                    },
                                    secondsToMs: function(e) {
                                        return Math.floor(1e3 * e)
                                    },
                                    assign: Object.assign,
                                    headersStringToObject: b,
                                    cdnHeadersToRequestId: T,
                                    extractHostnameAndDomain: p,
                                    extractHostname: f,
                                    manifestParser: e6,
                                    generateShortID: s,
                                    generateUUID: n,
                                    now: m.now
                                };

                            function to(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                                return r
                            }
                            var tl = {},
                                td = function e(t) {
                                    var i = arguments;
                                    "string" == typeof t ? e.hasOwnProperty(t) ? a().setTimeout(function() {
                                        i = Array.prototype.splice.call(i, 1), e[t].apply(null, i)
                                    }, 0) : h.warn("`" + t + "` is an unknown task") : "function" == typeof t ? a().setTimeout(function() {
                                        t(e)
                                    }, 0) : h.warn("`" + t + "` is invalid.")
                                },
                                tu = {
                                    loaded: m.now(),
                                    NAME: "mux-embed",
                                    VERSION: "4.30.0",
                                    API_VERSION: "2.1",
                                    PLAYER_TRACKED: !1,
                                    monitor: function(e, t) {
                                        return function(e, t, i) {
                                            var r = eW(l(t), 3),
                                                a = r[0],
                                                n = r[1],
                                                s = r[2],
                                                o = e.log,
                                                d = e.utils.getComputedStyle,
                                                u = e.utils.secondsToMs;
                                            if (!a) return o.error("No element was found with the `" + n + "` query selector.");
                                            if ("video" !== s && "audio" !== s) return o.error("The element of `" + n + "` was not a media element.");
                                            a.mux && (a.mux.destroy(), delete a.mux, o.warn("Already monitoring this video element, replacing existing event listeners")), (i = Object.assign({
                                                automaticErrorTracking: !0
                                            }, i)).data = Object.assign({
                                                player_software: "HTML5 Video Element",
                                                player_mux_plugin_name: "VideoElementMonitor",
                                                player_mux_plugin_version: e.VERSION
                                            }, i.data), i.getPlayheadTime = function() {
                                                return u(a.currentTime)
                                            }, i.getStateData = function() {
                                                var e, t, r = this.hlsjs && this.hlsjs.url,
                                                    n = this.dashjs && eK("function" === this.dashjs.getSource) && this.dashjs.getSource(),
                                                    s = {
                                                        player_is_paused: a.paused,
                                                        player_playhead_time: u(a.currentTime),
                                                        player_width: parseInt(d(a, "width")),
                                                        player_height: parseInt(d(a, "height")),
                                                        player_autoplay_on: a.autoplay,
                                                        player_preload_on: a.preload,
                                                        player_language_code: a.lang,
                                                        player_is_fullscreen: eJ() && !!(eJ().fullscreenElement || eJ().webkitFullscreenElement || eJ().mozFullScreenElement || eJ().msFullscreenElement),
                                                        video_poster_url: a.poster,
                                                        video_source_url: r || n || a.currentSrc,
                                                        video_source_duration: u(a.duration),
                                                        video_source_height: a.videoHeight,
                                                        video_source_width: a.videoWidth,
                                                        view_dropped_frame_count: null == (e = a) || null == (t = e.getVideoPlaybackQuality) ? void 0 : t.call(e).droppedVideoFrames
                                                    },
                                                    o = i.getPlayheadTime();
                                                if (a.getStartDate && o > 0) {
                                                    var l = a.getStartDate();
                                                    if (l && "function" == typeof l.getTime && l.getTime()) {
                                                        var _ = l.getTime();
                                                        s.player_program_time = _ + o, a.seekable.length > 0 && (s.player_live_edge_program_time = _ + a.seekable.end(a.seekable.length - 1))
                                                    }
                                                }
                                                return s
                                            }, a.mux = a.mux || {}, a.mux.deleted = !1, a.mux.emit = function(t, i) {
                                                e.emit(n, t, i)
                                            };
                                            var _ = function() {
                                                o.error("The monitor for this video element has already been destroyed.")
                                            };
                                            a.mux.destroy = function() {
                                                Object.keys(a.mux.listeners).forEach(function(e) {
                                                    a.removeEventListener(e, a.mux.listeners[e], !1)
                                                }), delete a.mux.listeners, a.mux.destroy = _, a.mux.swapElement = _, a.mux.emit = _, a.mux.addHLSJS = _, a.mux.addDashJS = _, a.mux.removeHLSJS = _, a.mux.removeDashJS = _, a.mux.deleted = !0, e.emit(n, "destroy")
                                            }, a.mux.swapElement = function(t) {
                                                var i = eW(l(t), 3),
                                                    r = i[0],
                                                    n = i[1],
                                                    s = i[2];
                                                return r ? "video" !== s && "audio" !== s ? e.log.error("The element of `" + n + "` was not a media element.") : (r.muxId = a.muxId, delete a.muxId, r.mux = r.mux || {}, r.mux.listeners = Object.assign({}, a.mux.listeners), delete a.mux.listeners, Object.keys(r.mux.listeners).forEach(function(e) {
                                                    a.removeEventListener(e, r.mux.listeners[e], !1), r.addEventListener(e, r.mux.listeners[e], !1)
                                                }), r.mux.swapElement = a.mux.swapElement, r.mux.destroy = a.mux.destroy, delete a.mux, void(a = r)) : e.log.error("No element was found with the `" + n + "` query selector.")
                                            }, a.mux.addHLSJS = function(t) {
                                                e.addHLSJS(n, t)
                                            }, a.mux.addDashJS = function(t) {
                                                e.addDashJS(n, t)
                                            }, a.mux.removeHLSJS = function() {
                                                e.removeHLSJS(n)
                                            }, a.mux.removeDashJS = function() {
                                                e.removeDashJS(n)
                                            }, e.init(n, i), e.emit(n, "playerready"), a.paused || (e.emit(n, "play"), a.readyState > 2 && e.emit(n, "playing")), a.mux.listeners = {}, e5.forEach(function(t) {
                                                ("error" !== t || i.automaticErrorTracking) && (a.mux.listeners[t] = function() {
                                                    var i = {};
                                                    if ("error" === t) {
                                                        if (!a.error || 1 === a.error.code) return;
                                                        i.player_error_code = a.error.code, i.player_error_message = e8[a.error.code] || a.error.message
                                                    }
                                                    e.emit(n, t, i)
                                                }, a.addEventListener(t, a.mux.listeners[t], !1))
                                            })
                                        }(td, e, t)
                                    },
                                    destroyMonitor: function(e) {
                                        var t, i = (t = l(e), function(e) {
                                            if (Array.isArray(e)) return e
                                        }(t) || function(e, t) {
                                            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (null != i) {
                                                var r, a, n = [],
                                                    s = !0,
                                                    o = !1;
                                                try {
                                                    for (i = i.call(e); !(s = (r = i.next()).done) && (n.push(r.value), n.length !== t); s = !0);
                                                } catch (e) {
                                                    o = !0, a = e
                                                } finally {
                                                    try {
                                                        s || null == i.return || i.return()
                                                    } finally {
                                                        if (o) throw a
                                                    }
                                                }
                                                return n
                                            }
                                        }(t, 1) || function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return to(e, 1);
                                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? to(e, t) : void 0
                                            }
                                        }(t, 1) || function() {
                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }())[0];
                                        i && i.mux && "function" == typeof i.mux.destroy ? i.mux.destroy() : h.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.")
                                    },
                                    addHLSJS: function(e, t) {
                                        var i = o(e);
                                        tl[i] ? tl[i].addHLSJS(t) : h.error("A monitor for `" + i + "` has not been initialized.")
                                    },
                                    addDashJS: function(e, t) {
                                        var i = o(e);
                                        tl[i] ? tl[i].addDashJS(t) : h.error("A monitor for `" + i + "` has not been initialized.")
                                    },
                                    removeHLSJS: function(e) {
                                        var t = o(e);
                                        tl[t] ? tl[t].removeHLSJS() : h.error("A monitor for `" + t + "` has not been initialized.")
                                    },
                                    removeDashJS: function(e) {
                                        var t = o(e);
                                        tl[t] ? tl[t].removeDashJS() : h.error("A monitor for `" + t + "` has not been initialized.")
                                    },
                                    init: function(e, t) {
                                        c() && t && t.respectDoNotTrack && h.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
                                        var i = o(e);
                                        tl[i] = new eq(td, i, t)
                                    },
                                    emit: function(e, t, i) {
                                        var r = o(e);
                                        tl[r] ? (tl[r].emit(t, i), "destroy" === t && delete tl[r]) : h.error("A monitor for `" + r + "` has not been initialized.")
                                    },
                                    checkDoNotTrack: c,
                                    log: h,
                                    utils: ts,
                                    events: {
                                        PLAYER_READY: "playerready",
                                        VIEW_INIT: "viewinit",
                                        VIDEO_CHANGE: "videochange",
                                        PLAY: "play",
                                        PAUSE: "pause",
                                        PLAYING: "playing",
                                        TIME_UPDATE: "timeupdate",
                                        SEEKING: "seeking",
                                        SEEKED: "seeked",
                                        REBUFFER_START: "rebufferstart",
                                        REBUFFER_END: "rebufferend",
                                        ERROR: "error",
                                        ENDED: "ended",
                                        RENDITION_CHANGE: "renditionchange",
                                        ORIENTATION_CHANGE: "orientationchange",
                                        AD_REQUEST: "adrequest",
                                        AD_RESPONSE: "adresponse",
                                        AD_BREAK_START: "adbreakstart",
                                        AD_PLAY: "adplay",
                                        AD_PLAYING: "adplaying",
                                        AD_PAUSE: "adpause",
                                        AD_FIRST_QUARTILE: "adfirstquartile",
                                        AD_MID_POINT: "admidpoint",
                                        AD_THIRD_QUARTILE: "adthirdquartile",
                                        AD_ENDED: "adended",
                                        AD_BREAK_END: "adbreakend",
                                        AD_ERROR: "aderror",
                                        REQUEST_COMPLETED: "requestcompleted",
                                        REQUEST_FAILED: "requestfailed",
                                        REQUEST_CANCELLED: "requestcanceled"
                                    },
                                    WINDOW_HIDDEN: !1,
                                    WINDOW_UNLOADING: !1
                                };
                            Object.assign(td, tu), void 0 !== a() && "function" == typeof a().addEventListener && a().addEventListener("pagehide", function(e) {
                                e.persisted || (td.WINDOW_UNLOADING = !0)
                            }, !1);
                            var t_ = td
                        },
                        655: function(e, t, i) {
                            var r, a;

                            function n(e) {
                                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }! function(s) {
                                var o = !1;
                                if (void 0 === (a = "function" == typeof(r = s) ? r.call(t, i, t, e) : r) || (e.exports = a), o = !0, "object" === n(t) && (e.exports = s(), o = !0), !o) {
                                    var l = window.Cookies,
                                        d = window.Cookies = s();
                                    d.noConflict = function() {
                                        return window.Cookies = l, d
                                    }
                                }
                            }(function() {
                                var e = function() {
                                    for (var e = 0, t = {}; e < arguments.length; e++) {
                                        var i = arguments[e];
                                        for (var r in i) t[r] = i[r]
                                    }
                                    return t
                                };
                                return function t(i) {
                                    function r(t, a, n) {
                                        var s;
                                        if ("undefined" != typeof document) {
                                            if (arguments.length > 1) {
                                                if ("number" == typeof(n = e({
                                                        path: "/"
                                                    }, r.defaults, n)).expires) {
                                                    var o = new Date;
                                                    o.setMilliseconds(o.getMilliseconds() + 864e5 * n.expires), n.expires = o
                                                }
                                                try {
                                                    s = JSON.stringify(a), /^[\{\[]/.test(s) && (a = s)
                                                } catch (e) {}
                                                return a = i.write ? i.write(a, t) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [t, "=", a, n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
                                            }
                                            t || (s = {});
                                            for (var l = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < l.length; u++) {
                                                var _ = l[u].split("="),
                                                    h = _.slice(1).join("=");
                                                '"' === h.charAt(0) && (h = h.slice(1, -1));
                                                try {
                                                    var c = _[0].replace(d, decodeURIComponent);
                                                    if (h = i.read ? i.read(h, c) : i(h, c) || h.replace(d, decodeURIComponent), this.json) try {
                                                        h = JSON.parse(h)
                                                    } catch (e) {}
                                                    if (t === c) {
                                                        s = h;
                                                        break
                                                    }
                                                    t || (s[c] = h)
                                                } catch (e) {}
                                            }
                                            return s
                                        }
                                    }
                                    return r.set = r, r.get = function(e) {
                                        return r.call(r, e)
                                    }, r.getJSON = function() {
                                        return r.apply({
                                            json: !0
                                        }, [].slice.call(arguments))
                                    }, r.defaults = {}, r.remove = function(t, i) {
                                        r(t, "", e(i, {
                                            expires: -1
                                        }))
                                    }, r.withConverter = t, r
                                }(function() {})
                            })
                        },
                        153: function(e, t, i) {
                            var r, a = void 0 !== i.g ? i.g : "undefined" != typeof window ? window : {},
                                n = i(558);
                            "undefined" != typeof document ? r = document : (r = a["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = a["__GLOBAL_DOCUMENT_CACHE@4"] = n), e.exports = r
                        },
                        48: function(e, t, i) {
                            e.exports = "undefined" != typeof window ? window : void 0 !== i.g ? i.g : "undefined" != typeof self ? self : {}
                        },
                        640: function(e, t, i) {
                            var r, a;
                            ! function(n, s) {
                                "use strict";
                                void 0 === (a = "function" == typeof(r = function() {
                                    var e = function() {},
                                        t = "undefined",
                                        i = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
                                        r = ["trace", "debug", "info", "warn", "error"];

                                    function a(e, t) {
                                        var i = e[t];
                                        if ("function" == typeof i.bind) return i.bind(e);
                                        try {
                                            return Function.prototype.bind.call(i, e)
                                        } catch (t) {
                                            return function() {
                                                return Function.prototype.apply.apply(i, [e, arguments])
                                            }
                                        }
                                    }

                                    function n() {
                                        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
                                    }

                                    function s(t, i) {
                                        for (var a = 0; a < r.length; a++) {
                                            var n = r[a];
                                            this[n] = a < t ? e : this.methodFactory(n, t, i)
                                        }
                                        this.log = this.debug
                                    }

                                    function o(e, i, r) {
                                        return function() {
                                            typeof console !== t && (s.call(this, i, r), this[e].apply(this, arguments))
                                        }
                                    }

                                    function l(r, s, l) {
                                        var d;
                                        return "debug" === (d = r) && (d = "log"), typeof console !== t && ("trace" === d && i ? n : void 0 !== console[d] ? a(console, d) : void 0 !== console.log ? a(console, "log") : e) || o.apply(this, arguments)
                                    }

                                    function d(e, i, a) {
                                        var n, o = this;
                                        i = null == i ? "WARN" : i;
                                        var d = "loglevel";

                                        function u() {
                                            var e;
                                            if (typeof window !== t && d) {
                                                try {
                                                    e = window.localStorage[d]
                                                } catch (e) {}
                                                if (typeof e === t) try {
                                                    var i = window.document.cookie,
                                                        r = i.indexOf(encodeURIComponent(d) + "="); - 1 !== r && (e = /^([^;]+)/.exec(i.slice(r))[1])
                                                } catch (e) {}
                                                return void 0 === o.levels[e] && (e = void 0), e
                                            }
                                        }
                                        "string" == typeof e ? d += ":" + e : "symbol" == typeof e && (d = void 0), o.name = e, o.levels = {
                                            TRACE: 0,
                                            DEBUG: 1,
                                            INFO: 2,
                                            WARN: 3,
                                            ERROR: 4,
                                            SILENT: 5
                                        }, o.methodFactory = a || l, o.getLevel = function() {
                                            return n
                                        }, o.setLevel = function(i, a) {
                                            if ("string" == typeof i && void 0 !== o.levels[i.toUpperCase()] && (i = o.levels[i.toUpperCase()]), !("number" == typeof i && i >= 0 && i <= o.levels.SILENT)) throw "log.setLevel() called with invalid level: " + i;
                                            if (n = i, !1 !== a && function(e) {
                                                    var i = (r[e] || "silent").toUpperCase();
                                                    if (typeof window !== t && d) {
                                                        try {
                                                            return void(window.localStorage[d] = i)
                                                        } catch (e) {}
                                                        try {
                                                            window.document.cookie = encodeURIComponent(d) + "=" + i + ";"
                                                        } catch (e) {}
                                                    }
                                                }(i), s.call(o, i, e), typeof console === t && i < o.levels.SILENT) return "No console available for logging"
                                        }, o.setDefaultLevel = function(e) {
                                            i = e, u() || o.setLevel(e, !1)
                                        }, o.resetLevel = function() {
                                            o.setLevel(i, !1),
                                                function() {
                                                    if (typeof window !== t && d) {
                                                        try {
                                                            return void window.localStorage.removeItem(d)
                                                        } catch (e) {}
                                                        try {
                                                            window.document.cookie = encodeURIComponent(d) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                                                        } catch (e) {}
                                                    }
                                                }()
                                        }, o.enableAll = function(e) {
                                            o.setLevel(o.levels.TRACE, e)
                                        }, o.disableAll = function(e) {
                                            o.setLevel(o.levels.SILENT, e)
                                        };
                                        var _ = u();
                                        null == _ && (_ = i), o.setLevel(_, !1)
                                    }
                                    var u = new d,
                                        _ = {};
                                    u.getLogger = function(e) {
                                        if ("symbol" != typeof e && "string" != typeof e || "" === e) throw TypeError("You must supply a name when creating a logger.");
                                        var t = _[e];
                                        return t || (t = _[e] = new d(e, u.getLevel(), u.methodFactory)), t
                                    };
                                    var h = typeof window !== t ? window.log : void 0;
                                    return u.noConflict = function() {
                                        return typeof window !== t && window.log === u && (window.log = h), u
                                    }, u.getLoggers = function() {
                                        return _
                                    }, u.default = u, u
                                }) ? r.call(t, i, t, e) : r) || (e.exports = a)
                            }()
                        },
                        375: function(e, t) {
                            "use strict";
                            var i = Object.prototype.hasOwnProperty;

                            function r(e) {
                                try {
                                    return decodeURIComponent(e.replace(/\+/g, " "))
                                } catch (e) {
                                    return null
                                }
                            }

                            function a(e) {
                                try {
                                    return encodeURIComponent(e)
                                } catch (e) {
                                    return null
                                }
                            }
                            t.stringify = function(e, t) {
                                var r, n, s = [];
                                for (n in "string" != typeof(t = t || "") && (t = "?"), e)
                                    if (i.call(e, n)) {
                                        if ((r = e[n]) || null != r && !isNaN(r) || (r = ""), n = a(n), r = a(r), null === n || null === r) continue;
                                        s.push(n + "=" + r)
                                    }
                                return s.length ? t + s.join("&") : ""
                            }, t.parse = function(e) {
                                for (var t, i = /([^=?#&]+)=?([^&]*)/g, a = {}; t = i.exec(e);) {
                                    var n = r(t[1]),
                                        s = r(t[2]);
                                    null === n || null === s || n in a || (a[n] = s)
                                }
                                return a
                            }
                        },
                        558: function() {}
                    },
                    t = {};

                function i(r) {
                    var a = t[r];
                    if (void 0 !== a) return a.exports;
                    var n = t[r] = {
                        exports: {}
                    };
                    return e[r].call(n.exports, n, n.exports, i), n.exports
                }
                return i.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return i.d(t, {
                        a: t
                    }), t
                }, i.d = function(e, t) {
                    for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, i.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), i.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, i(80)
            }()
        }
    }
]);