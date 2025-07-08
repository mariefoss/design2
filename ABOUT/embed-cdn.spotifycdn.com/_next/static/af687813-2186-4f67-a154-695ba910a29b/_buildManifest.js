self.__BUILD_MANIFEST = function(s, e, i, t, a, c, d, r, o, u, n, b, p, h, f, k, l, y, _, m, j) {
    return {
        __rewrites: {
            afterFiles: [{
                has: d,
                source: "/embed/:path*",
                destination: r
            }, {
                has: d,
                source: "/embed-podcast/:path*",
                destination: r
            }, {
                has: d,
                source: "/embed-legacy/:path*",
                destination: r
            }, {
                has: d,
                source: "/oembed",
                destination: "/api/oembed"
            }, {
                has: d,
                source: "/iframe-api/:version*",
                destination: "/api/iframe-api/:version*"
            }, {
                has: d,
                source: "/user/:userid/:type/:id*",
                destination: "/:type/:id*"
            }],
            beforeFiles: [{
                has: [{
                    type: u,
                    key: "uri",
                    value: "spotify:user:(?<userid>.*):(?<type>.*):(?<id>.*)"
                }],
                source: r,
                destination: b
            }, {
                has: [{
                    type: u,
                    key: "uri",
                    value: "spotify:(?<type>.*):(?<id>.*)"
                }],
                source: r,
                destination: b
            }, {
                has: [{
                    type: u,
                    key: n,
                    value: "(?<protocol>.*)://(?<domain>.*)/(?<type>.*)/(?<id>.*)"
                }],
                source: r,
                destination: b
            }],
            fallback: []
        },
        __routerFilterStatic: {
            numItems: 0,
            errorRate: 1e-4,
            numBits: 0,
            numHashes: k,
            bitArray: []
        },
        __routerFilterDynamic: {
            numItems: o,
            errorRate: 1e-4,
            numBits: o,
            numHashes: k,
            bitArray: []
        },
        "/": [s, e, "static/chunks/pages/index-96b80cc9d271a117.js"],
        "/_error": ["static/chunks/pages/_error-de32449324a082cf.js"],
        "/album/[id]": [s, i, e, t, a, c, p, h, "static/chunks/pages/album/[id]-d4cd3dac447ac289.js"],
        "/artist/[id]": [s, i, e, t, a, c, p, h, "static/chunks/pages/artist/[id]-bd914c4c9126b0e5.js"],
        "/episode/[id]": [s, i, e, t, a, c, l, y, "static/chunks/pages/episode/[id]-638470287ece9e72.js"],
        "/episode/[id]/video": [s, i, e, t, _, a, c, m, j, "static/chunks/pages/episode/[id]/video-481ee4083d75a33c.js"],
        "/playlist/[id]": [s, i, e, t, a, c, p, h, "static/chunks/pages/playlist/[id]-7fc70000607a04db.js"],
        "/show/[id]": [s, i, e, t, a, c, l, y, "static/css/bb43857cd319fbaf.css", "static/chunks/pages/show/[id]-7f57e96413863964.js"],
        "/show/[id]/video": [s, i, e, t, _, a, c, m, j, "static/chunks/pages/show/[id]/video-79586e8c739cefa5.js"],
        "/track/[id]": [s, i, e, t, a, c, "static/css/81299151dacafab9.css", "static/chunks/pages/track/[id]-a8882b3abe4aacb5.js"],
        sortedPages: ["/", "/_app", "/_error", "/album/[id]", "/artist/[id]", "/episode/[id]", "/episode/[id]/video", "/playlist/[id]", "/show/[id]", "/show/[id]/video", "/track/[id]"]
    }
}("static/chunks/bb8a7b42-32213fab08684de9.js", "static/chunks/8329-a21563d55710e691.js", "static/chunks/4bcef400-81185752c0a092b0.js", "static/chunks/3831-6b8a5a5e6d73d0ef.js", "static/css/8346a4bd1c697a93.css", "static/chunks/5454-fc5595000be6706a.js", void 0, "/:path*", 0, "query", "uri", "/:type/:id", "static/chunks/3081-73df27f8e855c6d8.js", "static/css/43fad9ac86f20eb1.css", 1e-4, NaN, "static/css/dfe506e4354a31c5.css", "static/chunks/4986-7003567a4459fe9f.js", "static/chunks/1396-e399fd51bf0f153b.js", "static/css/8a1c9cd517aacb02.css", "static/chunks/6138-42c88578864ff295.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();