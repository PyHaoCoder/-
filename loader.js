(function(e) {
    var t = {};
    function n(o) {
        var a = t[o];
        if (void 0 !== a)
            return a.exports;
        var r = t[o] = {
            id: o,
            loaded: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n),
        r.loaded = !0,
        r.exports
    }
    n.m = e,
    function() {
        var e = [];
        n.O = function(t, o, a, r) {
            if (!o) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    o = e[u][0],
                    a = e[u][1],
                    r = e[u][2];
                    for (var s = !0, c = 0; c < o.length; c++)
                        (!1 & r || i >= r) && Object.keys(n.O).every((function(e) {
                            return n.O[e](o[c])
                        }
                        )) ? o.splice(c--, 1) : (s = !1,
                        r < i && (i = r));
                    if (s) {
                        e.splice(u--, 1);
                        var l = a();
                        void 0 !== l && (t = l)
                    }
                }
                return t
            }
            r = r || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > r; u--)
                e[u] = e[u - 1];
            e[u] = [o, a, r]
        }
    }(),
    function() {
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return n.d(t, {
                a: t
            }),
            t
        }
    }(),
    function() {
        n.d = function(e, t) {
            for (var o in t)
                n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: t[o]
                })
        }
    }(),
    function() {
        n.f = {},
        n.e = function(e) {
            return Promise.all(Object.keys(n.f).reduce((function(t, o) {
                return n.f[o](e, t),
                t
            }
            ), []))
        }
    }(),
    function() {
        n.u = function(e) {
            return "js/" + ({
                108: "paraphraser",
                333: "NoLogin",
                348: "textTranslate",
                471: "termBank",
                551: "documentUpload",
                637: "DocHistory",
                688: "Person",
                873: "aiTranslateV2"
            }[e] || e) + "." + {
                108: "f7f3bb71",
                189: "1b097f46",
                316: "7dfe60c7",
                333: "dd35b6a1",
                348: "d336598c",
                471: "d7e66b57",
                551: "f013ccc6",
                637: "99056b8a",
                665: "832b6ef2",
                667: "975ebdcd",
                688: "80dee66f",
                762: "dc5f2fd1",
                873: "aaa38288"
            }[e] + ".js"
        }
    }(),
    function() {
        n.miniCssF = function(e) {
            return "css/" + ({
                108: "paraphraser",
                333: "NoLogin",
                348: "textTranslate",
                471: "termBank",
                551: "documentUpload",
                637: "DocHistory",
                688: "Person",
                873: "aiTranslateV2"
            }[e] || e) + "." + {
                108: "874603c4",
                189: "866870da",
                333: "5e783a0d",
                348: "ab99eb3b",
                471: "85b861c6",
                551: "e3a3ba62",
                637: "70e3b24a",
                665: "f75992a6",
                667: "100b0dc3",
                688: "980320bd",
                873: "ecad14a3"
            }[e] + ".css"
        }
    }(),
    function() {
        n.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(),
    function() {
        var e = {}
          , t = "translation-website:";
        n.l = function(o, a, r, i) {
            if (e[o])
                e[o].push(a);
            else {
                var s, c;
                if (void 0 !== r)
                    for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                        var d = l[u];
                        if (d.getAttribute("src") == o || d.getAttribute("data-webpack") == t + r) {
                            s = d;
                            break
                        }
                    }
                s || (c = !0,
                s = document.createElement("script"),
                s.charset = "utf-8",
                s.timeout = 120,
                n.nc && s.setAttribute("nonce", n.nc),
                s.setAttribute("data-webpack", t + r),
                s.src = o),
                e[o] = [a];
                var m = function(t, n) {
                    s.onerror = s.onload = null,
                    clearTimeout(p);
                    var a = e[o];
                    if (delete e[o],
                    s.parentNode && s.parentNode.removeChild(s),
                    a && a.forEach((function(e) {
                        return e(n)
                    }
                    )),
                    t)
                        return t(n)
                }
                  , p = setTimeout(m.bind(null, void 0, {
                    type: "timeout",
                    target: s
                }), 12e4);
                s.onerror = m.bind(null, s.onerror),
                s.onload = m.bind(null, s.onload),
                c && document.head.appendChild(s)
            }
        }
    }(),
    function() {
        n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        n.nmd = function(e) {
            return e.paths = [],
            e.children || (e.children = []),
            e
        }
    }(),
    function() {
        n.p = ""
    }(),
    function() {
        if ("undefined" !== typeof document) {
            var e = function(e, t, n, o, a) {
                var r = document.createElement("link");
                r.rel = "stylesheet",
                r.type = "text/css";
                var i = function(n) {
                    if (r.onerror = r.onload = null,
                    "load" === n.type)
                        o();
                    else {
                        var i = n && n.type
                          , s = n && n.target && n.target.href || t
                          , c = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + s + ")");
                        c.name = "ChunkLoadError",
                        c.code = "CSS_CHUNK_LOAD_FAILED",
                        c.type = i,
                        c.request = s,
                        r.parentNode && r.parentNode.removeChild(r),
                        a(c)
                    }
                };
                return r.onerror = r.onload = i,
                r.href = t,
                n ? n.parentNode.insertBefore(r, n.nextSibling) : document.head.appendChild(r),
                r
            }
              , t = function(e, t) {
                for (var n = document.getElementsByTagName("link"), o = 0; o < n.length; o++) {
                    var a = n[o]
                      , r = a.getAttribute("data-href") || a.getAttribute("href");
                    if ("stylesheet" === a.rel && (r === e || r === t))
                        return a
                }
                var i = document.getElementsByTagName("style");
                for (o = 0; o < i.length; o++) {
                    a = i[o],
                    r = a.getAttribute("data-href");
                    if (r === e || r === t)
                        return a
                }
            }
              , o = function(o) {
                return new Promise((function(a, r) {
                    var i = n.miniCssF(o)
                      , s = n.p + i;
                    if (t(i, s))
                        return a();
                    e(o, s, null, a, r)
                }
                ))
            }
              , a = {
                524: 0
            };
            n.f.miniCss = function(e, t) {
                var n = {
                    108: 1,
                    189: 1,
                    333: 1,
                    348: 1,
                    471: 1,
                    551: 1,
                    637: 1,
                    665: 1,
                    667: 1,
                    688: 1,
                    873: 1
                };
                a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = o(e).then((function() {
                    a[e] = 0
                }
                ), (function(t) {
                    throw delete a[e],
                    t
                }
                )))
            }
        }
    }(),
    function() {
        var e = {
            524: 0
        };
        n.f.j = function(t, o) {
            var a = n.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    o.push(a[2]);
                else {
                    var r = new Promise((function(n, o) {
                        a = e[t] = [n, o]
                    }
                    ));
                    o.push(a[2] = r);
                    var i = n.p + n.u(t)
                      , s = new Error
                      , c = function(o) {
                        if (n.o(e, t) && (a = e[t],
                        0 !== a && (e[t] = void 0),
                        a)) {
                            var r = o && ("load" === o.type ? "missing" : o.type)
                              , i = o && o.target && o.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")",
                            s.name = "ChunkLoadError",
                            s.type = r,
                            s.request = i,
                            a[1](s)
                        }
                    };
                    n.l(i, c, "chunk-" + t, t)
                }
        }
        ,
        n.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, o) {
            var a, r, i = o[0], s = o[1], c = o[2], l = 0;
            if (i.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (a in s)
                    n.o(s, a) && (n.m[a] = s[a]);
                if (c)
                    var u = c(n)
            }
            for (t && t(o); l < i.length; l++)
                r = i[l],
                n.o(e, r) && e[r] && e[r][0](),
                e[r] = 0;
            return n.O(u)
        }
          , o = self["webpackChunktranslation_website"] = self["webpackChunktranslation_website"] || [];
        o.forEach(t.bind(null, 0)),
        o.push = t.bind(null, o.push.bind(o))
    }();
    var o = n.O(void 0, [504], (function() {
        return n(1360)
    }
    ));
    o = n.O(o)
}
)({
        48559: function(e, t, n) {
            n(44114),
            n(27495),
            n(25440),
            n(13611);
            (function(e, t, n, o, a) {
                if (!e.__rl_event) {
                    var r = navigator.userAgent.toLowerCase()
                      , i = /(mobile|iphone|ipod|blackberry)/.test(r)
                      , s = !1
                      , c = "@VERSION@"
                      , l = ""
                      , u = 0
                      , d = ""
                      , m = ""
                      , p = 0
                      , g = "NULL"
                      , f = "NULL"
                      , h = "NULL"
                      , A = ""
                      , v = ""
                      , b = $()
                      , T = ($(!0),
                    N() + "//rlogs.youdao.com")
                      , y = L()
                      , _ = {
                        _default: y
                    }
                      , S = {}
                      , k = e._rlog
                      , I = e._rlog = {};
                    I.push = function(e) {
                        var t = e[0].split(".")
                          , n = t.pop();
                        t = t.join("_"),
                        t || (t = "_default"),
                        y = _[t] || (_[t] = L());
                        var o = S[n];
                        o && o.apply(this, e.slice(1))
                    }
                    ,
                    S._setAccount = function(e) {
                        e && (y.pid = e)
                    }
                    ,
                    S._setAutoPageview = function(e) {
                        y.autopv = e
                    }
                    ,
                    S._setAutoUserId = function(e) {
                        y.autouid = e
                    }
                    ,
                    S._addPost = function(e, t) {
                        S._removePost(e),
                        y.post.push([e, t])
                    }
                    ,
                    S._onPageViewFinished = function(e) {
                        y.pvcb.push(e)
                    }
                    ,
                    S._trackCustom = function(e, t, n) {
                        var a;
                        y.pid && (y.cat = e,
                        a = O(t) ? K(t) : "_nhrf=" + o(t),
                        C(a, n))
                    }
                    ,
                    S._trackEvent = function(e, t) {
                        S._trackCustom("event", e, t)
                    }
                    ,
                    S._trackPageview = function(e) {
                        if (!y.ispvt || "ido" === e) {
                            var t = y;
                            E((function() {
                                var e;
                                while (e = t.pvcb.shift())
                                    try {
                                        e()
                                    } catch (n) {}
                                t.ispvt = 2
                            }
                            ), O(e) && e.length ? "&" + K(e) : "")
                        }
                    }
                    ,
                    S._removePost = function(e) {
                        if (e) {
                            for (var t = y.post, n = 0, o = t.length; n < o; n++)
                                if (t[n] && t[n][0] == e)
                                    return t.splice(n, 1),
                                    n
                        } else
                            y.post = []
                    }
                    ,
                    S._trackUserId = function() {
                        var e = !1
                          , t = B("DICT_LOGIN");
                        if (-1 == t || /^[0|8]\w*/.test(t))
                            M("DICT_USR", "-1");
                        else {
                            if (-1 != B("DICT_USR")) {
                                var n = B("DICT_USR").split("~");
                                2 == n.length ? (__rl_nuid = n[1],
                                t != n[0] && (e = !0)) : e = !0
                            } else
                                e = !0;
                            e && _rl_network.ajax({
                                url: location.protocol + "//dict.youdao.com/login/acc/co/cq?product=DICT&cf=1",
                                success: function(e) {
                                    e.login ? (t = B("DICT_LOGIN"),
                                    M("DICT_USR", t + "~" + e.userid),
                                    __rl_nuid = e.userid) : __rl_nuid = "unknown"
                                },
                                fail: function() {
                                    __rl_nuid = "unknown"
                                }
                            })
                        }
                    }
                    ,
                    e.__rl_event = function(e, t) {
                        I.push(["_trackCustom", "event", e, t])
                    }
                    ,
                    y.pid = e.__rl_npid || "",
                    y.post = e.__rl_post || [],
                    y.autopv = "undefined" == typeof __rl_pageview || !!e.__rl_pageview;
                    var w = function() {
                        var e, t = n.search.replace(/^\?/, "").split("&"), o = {}, r = 0;
                        for (r = 0; r < t.length; r++)
                            e = t[r],
                            e && (e = e.split("="),
                            o[e[0]] = void 0 === e[1] ? null : a(e[1]));
                        return o
                    }();
                    w.vendor && S._addPost("vendor", w.vendor),
                    w.keyfrom && S._addPost("keyfrom", w.keyfrom),
                    function() {
                        var e = n.hash;
                        if (e) {
                            var t, o, r;
                            e = e.replace(/^#/, "").split("&");
                            for (o = 0,
                            r = e.length; o < r; o++)
                                t = e[o],
                                t && (t = t.split("="),
                                S._addPost(t[0], a(t[1] || "NULL")))
                        }
                    }(),
                    function() {
                        try {
                            if (!k)
                                return;
                            for (var e = 1, t = k.length; e < t; e++)
                                if (/_setAccount$/.test(k[e][0])) {
                                    var n = k[e];
                                    k.splice(e, 1),
                                    k.splice(0, 0, n)
                                }
                            for (e = 0,
                            t = k.length; e < t; e++)
                                console.log("Execute: ", k[e]),
                                I.push(k[e]);
                            k = null
                        } catch (o) {}
                    }(),
                    R(_, (function(e, t) {
                        t.autopv && I.push([e + "._trackPageview"]),
                        t.autouid && I.push([e + "._trackUserId"])
                    }
                    )),
                    U("mousedown", x),
                    function() {
                        var e = function(t) {
                            I.push(["_trackEvent", "first-touch"]),
                            H("touchstart", e)
                        };
                        U("touchstart", e)
                    }(),
                    e.__rl_click && U("click", P)
                }
                function E(e, t) {
                    y.pid && 1 != y.ispvt && (y.ispvt = 1,
                    y.cat = "pageview",
                    C(j() + t, e))
                }
                function C(e, t) {
                    console.trace("[" + y.cat + "]", "send ", e);
                    var n = ["_npid=" + y.pid, "_ncat=" + y.cat, V(), e];
                    y.post.length && n.push(K(y.post));
                    var o = T + "/rlog.php?" + n.join("&");
                    D(o, t)
                }
                function D(e, t) {
                    if (s)
                        navigator.sendBeacon(e),
                        t && t();
                    else {
                        var n = new Image;
                        n.onload = n.onerror = function() {
                            t && t()
                        }
                        ,
                        n.src = e,
                        n = null
                    }
                }
                function P(t) {
                    var n = t || e.event
                      , o = n.target || n.srcElement;
                    o.href && I.push(["_trackCustom", "click", o.href])
                }
                function x(n) {
                    n = n || e.event;
                    for (var o = n.target ? n.target : n.srcElement, a = t.body; o != a; o = o.parentNode || a)
                        if (1 === o.nodeType && !0 !== o.disabled) {
                            var r = o.getAttribute("data-rlog");
                            r && I.push(["_trackEvent", r])
                        }
                }
                function L() {
                    return {
                        pid: "",
                        cat: "",
                        post: [],
                        ispvt: 0,
                        pvcb: [],
                        autopv: !0,
                        autouid: !1
                    }
                }
                function O(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                function R(e, t) {
                    var n;
                    for (n in e)
                        e.hasOwnProperty(n) && t(n, e[n])
                }
                function N() {
                    return "https:" == n.protocol ? "https:" : "http:"
                }
                function U(e, n) {
                    i && "mousedown" == e ? t.addEventListener("touchstart", n, !1) : t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n)
                }
                function H(e, n) {
                    i && "mousedown" == e ? t.removeEventListener("touchstart", n, !1) : t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent("on" + e, n)
                }
                function M(e, t) {
                    var n = new Date;
                    n.setTime(n.getTime() + 63072e6),
                    document.cookie = e + "=" + t + ";expires=" + n.toGMTString() + ";path=/;domain=" + b
                }
                function B(e) {
                    var t = document.cookie
                      , n = e + "="
                      , o = t.length
                      , a = 0;
                    while (a < o) {
                        var r = a + n.length;
                        if (t.substring(a, r) == n) {
                            var i = t.indexOf(";", r);
                            return -1 == i && (i = o),
                            unescape(t.substring(r, i))
                        }
                        if (a = t.indexOf(" ", a) + 1,
                        0 == a)
                            break
                    }
                    return -1
                }
                function K(e) {
                    O(e) || (e = []);
                    var t, n, a, r = [];
                    for (t = 0,
                    n = e.length; t < n; ++t)
                        a = e[t],
                        O(a) && r.push(a[0] + "=" + o(a[1]));
                    return r.join("&")
                }
                function V() {
                    var e = (new Date).getTime()
                      , n = [];
                    return t.cookie = "___rl__test__cookies=" + e,
                    h = B("OUTFOX_SEARCH_USER_ID_NCOO"),
                    -1 == h && B("___rl__test__cookies") == e && (h = 2147483647 * Math.random(),
                    M("OUTFOX_SEARCH_USER_ID_NCOO", h)),
                    g = B("P_INFO"),
                    g = -1 == g ? "NULL" : g.substr(0, g.indexOf("|")),
                    f = B("DICT_UT"),
                    -1 == f && (f = "NULL"),
                    n = ["_ncoo=" + h, "_nssn=" + g, "_nver=" + c, "_ntms=" + e, "_dict_ut=" + f],
                    y.autouid && n.push("_rl_nuid=" + __rl_nuid),
                    n.join("&")
                }
                function j() {
                    if (m = "-",
                    self.screen)
                        m = screen.width + "x" + screen.height;
                    else if (self.java) {
                        var a = java.awt.Toolkit.getDefaultToolkit()
                          , r = a.getScreenSize();
                        m = r.width + "x" + r.height
                    }
                    var i = new Date(t.lastModified);
                    p = i.getTime() / 1e3;
                    var s = e.navigator;
                    u = s && s.javaEnabled() ? 1 : 0,
                    l = t.characterSet || t.charset || "-",
                    l = l.toLowerCase(),
                    d = o(t.referrer),
                    v = o(n.href),
                    A = n.hash ? o(n.hash.substring(1)) : "";
                    s = ["_nref=" + d, "_nurl=" + v, "_nres=" + m, "_nlmf=" + p, "_njve=" + u, "_nchr=" + l, "_nfrg=" + A];
                    return s.join("&")
                }
                function $(e) {
                    var o = e ? 4 : 3
                      , a = "res:" === n.protocol ? "" : t.domain
                      , r = a.split(".")
                      , i = r.length
                      , s = /^\d+$/g;
                    if (s.test(r[i - 1]))
                        return a;
                    if (r.length < o)
                        return "." + a;
                    var c, l = ["com", "net", "org", "gov", "co"], u = !1;
                    for (c = 0; c < l.length; c++)
                        r[i - 2] == l[c] && (u = !0);
                    var d = u ? o : o - 1
                      , m = [];
                    while (d)
                        m.push(r[i - d]),
                        d--;
                    return "." + m.join(".")
                }
            }
            )(window, document, location, encodeURIComponent, decodeURIComponent)
        },
        48066: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return g
                }
            });
            var o = n(6301);
            n(62953);
            const a = {
                class: "pop-up-comp mask"
            }
              , r = {
                class: "inner-content"
            }
              , i = {
                class: "title color_text_1"
            }
              , s = {
                class: "btn-ara"
            };
            function c(e, t, n, c, l, u) {
                return (0,
                o.bo)(((0,
                o.uX)(),
                (0,
                o.CE)("div", a, [(0,
                o.Lk)("div", r, [(0,
                o.Lk)("div", i, (0,
                o.v_)(n.config.text), 1), (0,
                o.Lk)("div", s, [(0,
                o.Lk)("div", {
                    class: "cancel btn color_text_1",
                    onClick: t[0] || (t[0] = (...e)=>c.cancel && c.cancel(...e))
                }, (0,
                o.v_)(n.config.cancelButtonText || "取消"), 1), (0,
                o.Lk)("div", {
                    class: "confirm btn",
                    onClick: t[1] || (t[1] = (...e)=>c.confirm && c.confirm(...e))
                }, (0,
                o.v_)(n.config.confirmButtonText || "确认"), 1)])])], 512)), [[o.aG, c.visible && n.config.text]])
            }
            var l = {
                name: "PopUp",
                props: {
                    config: {
                        type: Object
                    }
                },
                setup(e) {
                    const t = (0,
                    o.KR)(!1);
                    (0,
                    o.sV)((()=>{
                        t.value = !0
                    }
                    ));
                    const n = ()=>{
                        e.config.cancel(),
                        t.value = !1
                    }
                      , a = ()=>{
                        e.config.confirm(),
                        t.value = !1
                    }
                    ;
                    return {
                        visible: t,
                        cancel: n,
                        confirm: a
                    }
                }
            }
              , u = n(66262);
            const d = (0,
            u.A)(l, [["render", c], ["__scopeId", "data-v-40db1403"]]);
            var m = d;
            const p = document.createElement("div");
            p.setAttribute("class", "popup"),
            document.body.appendChild(p);
            var g = e=>{
                const t = (0,
                o.bF)(m, {
                    config: e
                });
                (0,
                o.XX)(t, p)
            }
        },
        3745: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return d
                }
            });
            var o = n(6301);
            function a(e, t, n, a, r, i) {
                return (0,
                o.uX)(),
                (0,
                o.Wv)(o.eB, {
                    name: "fade"
                }, {
                    default: (0,
                    o.k6)((()=>[(0,
                    o.bo)((0,
                    o.Lk)("div", {
                        class: "toasts"
                    }, (0,
                    o.v_)(n.text), 513), [[o.aG, a.visible]])])),
                    _: 1
                })
            }
            var r = {
                name: "toast",
                props: {
                    text: {
                        type: String,
                        default: ""
                    }
                },
                setup() {
                    const e = (0,
                    o.KR)(!1);
                    return (0,
                    o.sV)((()=>{
                        e.value = !0
                    }
                    )),
                    {
                        visible: e
                    }
                }
            }
              , i = n(66262);
            const s = (0,
            i.A)(r, [["render", a], ["__scopeId", "data-v-ebee6bee"]]);
            var c = s;
            const l = document.createElement("div");
            l.setAttribute("class", "toast"),
            document.body.appendChild(l);
            let u = null;
            var d = (e,t=1500)=>{
                const n = (0,
                o.bF)(c, {
                    text: e
                });
                (0,
                o.XX)(n, l),
                clearTimeout(u),
                u = setTimeout((()=>{
                    (0,
                    o.XX)(null, l)
                }
                ), t)
            }
        },
        97504: function(e, t) {
            "use strict";
            t.A = [{
                str: "0",
                msg: "通用场景"
            }, {
                str: "2",
                msg: "医学"
            }, {
                str: "1",
                msg: "计算机"
            }, {
                str: "3",
                msg: "金融经济"
            }]
        },
        27950: function(e, t) {
            "use strict";
            t.A = {
                product: "webfanyi",
                signSecretKey: "LqMQV3ZdE2X6DYYyc6TNsVbHgCGk7XzG",
                keyId: "ai-translate-llm",
                keyIdPre: "ai-translate-llm-pre",
                keyfrom: "fanyi.web",
                needSignUrl: ["/translate_llm/userinfo"],
                errorMap: {
                    500: "服务器错误",
                    602: "输出错误",
                    607: "服务异常",
                    603: "对不起，正在学习中"
                }
            }
        },
        42699: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return o
                }
            });
            const o = {
                beforeMount(e, t, n) {
                    function o(n) {
                        if (e.contains(n.target))
                            return !1;
                        t.value && t.value(n)
                    }
                    e.__vueClickOutside__ = o,
                    document.addEventListener("mousedown", o)
                },
                unmounted(e, t) {
                    document.removeEventListener("mousedown", e.__vueClickOutside__),
                    delete e.__vueClickOutside__
                }
            }
        },
        34792: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return i
                }
            });
            n(33110);
            var o = n(75220)
              , a = n(66278)
              , r = n(37282);
            function i() {
                const e = (0,
                o.lq)()
                  , t = (0,
                a.Pj)()
                  , n = ()=>{
                    r.A.$emit("saveTextTranslateContentToLS")
                }
                  , i = ()=>{
                    "/AITranslate" === e.path && localStorage.setItem("afterProcessHistory", JSON.stringify(t.state.text.historyList))
                }
                ;
                return {
                    saveTextTranslateContentToLS: n,
                    saveAITranslateHistoryList: i
                }
            }
        },
        1360: function(e, t, n) {
            "use strict";
            n(23792),
            n(3362),
            n(9391),
            n(39653);
            var o = n(86964)
              , a = n.n(o)
              , r = n(81659)
              , i = n.n(r)
              , s = n(6301)
              , c = n(54727)
              , l = (n(12153),
            n(3745))
              , u = n(48066);
            function d(e, t, n, o, a, r) {
                return (0,
                s.uX)(),
                (0,
                s.Wv)(s.eB, {
                    name: "blankTooltip"
                }, {
                    default: (0,
                    s.k6)((()=>[(0,
                    s.eW)((0,
                    s.v_)(o.text), 1)])),
                    _: 1
                })
            }
            var m = {
                setup() {
                    const e = (0,
                    s.KR)();
                    return {
                        text: e
                    }
                }
            }
              , p = n(66262);
            const g = (0,
            p.A)(m, [["render", d], ["__scopeId", "data-v-13c25996"]]);
            var f = g;
            const h = {
                beforeMount: function(e, t) {
                    var n, o = "yd-tooltip", a = "", r = null, i = "bottom", c = "blank", l = !1;
                    const u = ()=>{
                        if (t.value && "function" === typeof t.value) {
                            var u = t.value();
                            const {component: e, data: o} = u;
                            n = (0,
                            s.Ef)(e, o),
                            l = !0,
                            c = "custom"
                        } else
                            !t.value || "string" !== typeof t.value && "number" !== typeof t.value ? e.dataset.tooltip && (a = e.dataset.tooltip) : a = t.value;
                        if (e.dataset["tooltipStyle"] && (c = e.dataset["tooltipStyle"]),
                        (l || "" != a.trim()) && (!l || n)) {
                            Object.keys(t.modifiers)[0] && (i = Object.keys(t.modifiers)[0]),
                            r = document.createElement("div");
                            var d = [o, c];
                            if (r.setAttribute("class", d.join(" ")),
                            r.style.zIndex = 100,
                            l) {
                                var m = document.body.appendChild(r);
                                n.mount(m)
                            } else {
                                m = document.body.appendChild(r);
                                var p = (0,
                                s.Ef)(f)
                                  , g = p.mount(m);
                                g.text = a
                            }
                            var h = e.getBoundingClientRect();
                            (0,
                            s.dY)((()=>{
                                var e = 0
                                  , t = 0
                                  , n = 8
                                  , o = 8;
                                switch (i) {
                                case "top":
                                    e = h.left - r.offsetWidth / 2 + h.width / 2,
                                    t = h.top - r.offsetHeight - n;
                                    break;
                                case "left":
                                    e = h.left - r.offsetWidth - o,
                                    t = h.top + h.height / 2 - r.offsetHeight / 2;
                                    break;
                                case "right":
                                    e = h.left + h.width + o,
                                    t = h.top + h.height / 2 - r.offsetHeight / 2;
                                    break;
                                case "bottom":
                                    e = h.left - r.offsetWidth / 2 + h.width / 2,
                                    t = h.top + h.height + n;
                                    break;
                                case "left-bottom":
                                    e = h.left - r.offsetWidth - o,
                                    t = h.bottom - r.offsetHeight;
                                    break;
                                case "left-top":
                                    e = h.left - r.offsetWidth - o,
                                    t = h.top;
                                    break;
                                case "right-top":
                                    e = h.left + h.width + o,
                                    t = h.top;
                                    break;
                                case "right-bottom":
                                    e = h.left + h.width + o,
                                    t = h.bottom - r.offsetHeight;
                                    break;
                                case "top-left":
                                    e = h.left,
                                    t = h.top - r.offsetHeight - n;
                                    break;
                                case "top-right":
                                    e = h.left + h.width - r.offsetWidth,
                                    t = h.top - r.offsetHeight - n;
                                    break;
                                case "bottom-left":
                                    e = h.left,
                                    t = h.bottom + n;
                                    break;
                                case "bottom-right":
                                    e = h.left + h.width - r.offsetWidth,
                                    t = h.bottom + n;
                                    break
                                }
                                var a = 20;
                                e < 0 && (e = 0 + a),
                                e + r.offsetWidth > document.body.offsetWidth && (e = document.body.offsetWidth - r.offsetWidth - a),
                                t < 0 && (t = 0 + a),
                                t + r.offsetHeight > document.body.offsetHeight && (t = document.body.offsetHeight - r.offsetHeight - a),
                                r.style.left = e + "px",
                                r.style.top = t + "px",
                                r.style.visibility = "visible"
                            }
                            ))
                        }
                    }
                      , d = ()=>{
                        r && r.parentNode.removeChild(r),
                        n = null,
                        a = "",
                        l = !1,
                        r = null
                    }
                    ;
                    e.addEventListener("mouseenter", u),
                    e.addEventListener("mouseleave", d)
                },
                updated(e, {value: t}) {
                    e.$value = t
                },
                unmounted(e) {
                    e.removeEventListener("mouseenter", e.mouseenterHandler),
                    e.removeEventListener("mouseleave", e.mouseleaveHandler)
                }
            };
            var A = h;
            const v = {
                tooltip: A
            };
            var b = {
                install(e) {
                    Object.keys(v).forEach((t=>{
                        e.directive(t, v[t])
                    }
                    ))
                }
            }
              , T = b
              , y = n(71260)
              , _ = n(68367)
              , S = n(20618)
              , k = n(42699);
            const I = {
                class: "sticky-sidebar"
            };
            function w(e, t, n, o, a, r) {
                const i = (0,
                s.g2)("router-view");
                return (0,
                s.uX)(),
                (0,
                s.CE)(s.FK, null, [o.show ? ((0,
                s.uX)(),
                (0,
                s.Wv)(i, {
                    key: 0,
                    class: (0,
                    s.C4)(["os_" + o.currentOS])
                }, null, 8, ["class"])) : (0,
                s.Q3)("", !0), (0,
                s.Lk)("div", I, [(0,
                s.bF)(o["BackToTop"])])], 64)
            }
            n(27495),
            n(62953);
            function E(e, t, n, o, a, r) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: "backToTopButton",
                    style: (0,
                    s.Tr)({
                        display: o.showButton ? "block" : "none"
                    }),
                    onClick: o.scrollToTop
                }, null, 4)
            }
            var C = {
                __name: "BackToTop",
                setup(e, {expose: t}) {
                    t();
                    const n = (0,
                    s.KR)(!1)
                      , o = window.innerHeight || document.body.clientHeight
                      , a = ()=>{
                        const e = document.documentElement.scrollTop || document.body.scrollTop;
                        n.value = e >= o
                    }
                    ;
                    window.addEventListener("scroll", a),
                    (0,
                    s.xo)((()=>{
                        window.removeEventListener("scroll", a)
                    }
                    ));
                    const r = ()=>{
                        document.documentElement.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                      , i = {
                        showButton: n,
                        winHeight: o,
                        srollListener: a,
                        scrollToTop: r
                    };
                    return Object.defineProperty(i, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    i
                }
            };
            const D = (0,
            p.A)(C, [["render", E], ["__scopeId", "data-v-e6a8c40e"]]);
            var P = D
              , x = n(53007)
              , L = n(18908)
              , O = n(96091)
              , R = n(66278)
              , N = n(83503)
              , U = n.n(N)
              , H = n(37282)
              , M = {
                __name: "App",
                setup(e, {expose: t}) {
                    t();
                    const n = (0,
                    R.Pj)()
                      , o = (0,
                    s.KR)(!1);
                    (0,
                    s.sV)((async()=>{
                        H.A.$on("changeStickySidebarPosition", (()=>{
                            console.log("11")
                        }
                        )),
                        await (0,
                        O.A)(),
                        await n.dispatch("fetchAITranslateSecretKey"),
                        o.value = !0,
                        H.A.$on("buyVipSuccessFromVipCenter", (()=>{
                            f()
                        }
                        ))
                    }
                    ));
                    const a = (0,
                    s.nI)()
                      , r = a.appContext.config.globalProperties
                      , i = (0,
                    s.KR)("")
                      , c = (0,
                    s.KR)("")
                      , l = (0,
                    s.KR)("")
                      , u = (0,
                    s.KR)("https://ydlunacommon-cdn.nosdn.127.net/e5d302ac10bb57dbb7bace5281d5eb6a.png")
                      , d = (0,
                    s.KR)("")
                      , m = e=>{
                        const t = {
                            userid: e
                        };
                        x.A.getBatchUrl(t).then((e=>{
                            c.value = e.values.nickname,
                            n.dispatch("login/setNickName", c.value)
                        }
                        ))
                    }
                      , p = ()=>{
                        x.A.getVipStatus().then((e=>{
                            n.dispatch("login/setSvip", e.svip),
                            n.dispatch("login/setVip", e.vip)
                        }
                        ))
                    }
                      , g = ()=>{
                        const e = "education-certification"
                          , t = "cf41bbc6c60a46ff"
                          , o = +new Date
                          , a = "keyid,mysticTime,product"
                          , r = "webfanyi"
                          , i = U()(`keyid=${e}&mysticTime=${o}&product=${r}&key=${t}`).toString();
                        x.A.getStudentStatus({
                            keyid: e,
                            mysticTime: o,
                            pointParam: a,
                            product: r,
                            sign: i
                        }).then((e=>{
                            0 === e.code && n.dispatch("login/setIsStudent", !(!e.data.educationType || e.data.isGraduate))
                        }
                        ))
                    }
                      , f = async()=>{
                        x.A.getAccountInfos().then((e=>{
                            const t = e.data;
                            0 === e.code ? (n.dispatch("login/setLogin", !0),
                            i.value = t.yduserid,
                            l.value = u.value,
                            n.dispatch("login/setOptionAvatar", l.value),
                            m(i.value),
                            p(),
                            g()) : n.dispatch("login/setLogin", !1)
                        }
                        ))
                    }
                    ;
                    f();
                    const h = ()=>{
                        const e = navigator.userAgent.toLowerCase()
                          , t = /macintosh|mac os x/i.test(e);
                        d.value = t ? "Mac" : "Windows"
                    }
                    ;
                    h(),
                    (0,
                    s.sV)((()=>{
                        H.A.$on("buyVipSuccessFromVipCenter", p)
                    }
                    )),
                    (0,
                    s.hi)((()=>{
                        H.A.$off("buyVipSuccessFromVipCenter", p)
                    }
                    ));
                    const A = {
                        store: n,
                        show: o,
                        internalInstance: a,
                        internalData: r,
                        yduserid: i,
                        nickname: c,
                        optionAvatar: l,
                        avatar: u,
                        currentOS: d,
                        getBatchData: m,
                        getVipInfo: p,
                        getStudentInfo: g,
                        getAccountInfo: f,
                        getOS: h,
                        BackToTop: P,
                        get service() {
                            return x.A
                        },
                        get serviceAI() {
                            return L.A
                        },
                        get getVisitorId() {
                            return O.A
                        },
                        get useStore() {
                            return R.Pj
                        },
                        get md5() {
                            return U()
                        },
                        ref: s.KR,
                        getCurrentInstance: s.nI,
                        onMounted: s.sV,
                        onUnmounted: s.hi,
                        get eventBus() {
                            return H.A
                        }
                    };
                    return Object.defineProperty(A, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    A
                }
            };
            const B = (0,
            p.A)(M, [["render", w]]);
            var K = B
              , V = n(75220);
            const j = {
                class: "index"
            };
            function $(e, t, n, o, a, r) {
                const i = (0,
                s.g2)("dictWebsiteFooter")
                  , c = (0,
                s.g2)("TranslationWebsiteFrame");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", j, [(0,
                s.bF)(c, {
                    testMode: o.testMode,
                    canRouterJump: !0,
                    currentRouteName: "AITranslate" === e.$route.name ? "TextTranslate" : e.$route.name,
                    collapsed: "/AITranslate" === e.$route.path,
                    sidebarTransition: o.canTransition,
                    contentBgClassName: "/AITranslate" == e.$route.path ? "ai-bg" : "",
                    topNavFixedDis: "/AITranslate" == e.$route.path ? o.topNavFixedDisVal : 0,
                    onSaveTextTranslateContentToLS: o.saveTextTranslateContentToLS,
                    onSaveAITranslateHistoryList: o.saveAITranslateHistoryList,
                    onCollapseChange: o.collapseChange,
                    isFullContent: "/AITranslate" == e.$route.path,
                    needBaiduCallback: !0
                }, {
                    footer: (0,
                    s.k6)((()=>["/AITranslate" !== e.$route.path ? ((0,
                    s.uX)(),
                    (0,
                    s.Wv)(i, {
                        key: 0
                    })) : (0,
                    s.Q3)("", !0)])),
                    default: (0,
                    s.k6)((()=>[(0,
                    s.bF)(o["TranslateTab"], {
                        class: (0,
                        s.C4)({
                            "ctrl-icon-nav": "/AITranslate" == e.$route.path
                        })
                    }, null, 8, ["class"]), "/AITranslate" !== e.$route.path ? ((0,
                    s.uX)(),
                    (0,
                    s.Wv)(o["Banner"], {
                        key: 0
                    })) : (0,
                    s.Q3)("", !0), "/" !== e.$route.path || o.isPrerender ? (0,
                    s.Q3)("", !0) : ((0,
                    s.uX)(),
                    (0,
                    s.Wv)(o["AdPopUp"], {
                        key: 1
                    }))])),
                    _: 1
                }, 8, ["testMode", "currentRouteName", "collapsed", "sidebarTransition", "contentBgClassName", "topNavFixedDis", "onSaveTextTranslateContentToLS", "onSaveAITranslateHistoryList", "isFullContent"])])
            }
            var F = n(19358)
              , G = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASYSURBVHgB7Zs9a1RBFIbf9Qf40YrC2hrB2ChJ4wqCWikIWhpEaw3ab9Iraq1oLFUE7QIKro1BGxNQscuaiK0hf2A9L3PG3F2ydz73I3ofOJm9y+zuPe/MnDl3ZgJUVFRUVFT8t9QwBDqdTl2KhthRLfcWzNJWWxZbEWvVarU2diri9F6xpthqJ55VsXsq4EDI3gPkZhtSNGFa2rIptij2VWxNy001ywGxg2JHxKbFJvQ9y4LYfO5ekU0AbaV7Yhf0LTr3DMbxJcQxJXZZ7FLhvQVkFCKLAOL8DSnmYMY0HX+otok8sGdQhFt63YYRYQGJJAvAMSrFTb1kS1OMnxgMFIIi2B5xX0SYRQLRAjDISfFObBKmpe/CtPowuCZ2W2w3zKxxSoTYQARRAvQ4vy52FSawDRP2hpcwgTJahFgBPmPL+YsYXJd30SWCCHAMgexCIDrmx8F59NzDpN5bEEE9QH5gRoonMGP+NEbrfBHmDOwJjAmz0hPu+37QuwfoPN/USwa8cXGeMP7c0dfNkMwxZAjQ+TpMcjOsaB/CI7EPMLmI91DwGgKq6KpeHsd4tX4RBsU3MEOBs0LL9QHfHhDa9T+JfUR3Lh/LwcL3uWBQtL2z6VHfLYC2/oxePoM/xSkqlpjvsCl4Q/OVUnx6gE1z6bxv17dTU4oIxc/a6c4H+xBGbroq+whwXsvn8Kc4P8eIsJ3zIXFnUcsrroqlQbAQ/HgTJxBOjCOpzlu+wwTDugTDH/0quXpAQ8vYPD+0J+RynthecKqskkuASS1jFzSIrwg5nSe20SbLKrkEOKrlF6ThEiG382RNy5NllVwC1LVcRzr9RBiE8+SblqVToSsIdvTlfuSj1+Ea8jtPGAAZCDckCO7rV2kUApDeYTCoR+tf/CMC9PUzeD3gX8MlgF1i2o189A6B1IwxiWELsF3Ay5E29/st0i6r5CvAEaTTL9qnps1lv0faZZVcArzv+bKUmymb6gYhwoSWK2WVXAIsa3kY8fjO87lFmNJyuaySS4CWlucQR2iSk1MEO2xbZZVKBdANSBqD4BTCiM3wcogwrZ9puzZRffKAp1qehT+p6W2qCHbv8LWronNRVJeVfsOstByH344v1/BypLe9QvqsSfAzdv3wUHIP0P22FswwuA5/cqS3Md9hW3/B5wyB77J4A2YzdNx2hHoJan3i9Syg6+uvYHqB97bTCLAHKLxan4Q8DPEgAocDI2zIUBgWvCd2/7bYvO+HvAVQRe0XU+kJjA/25AgJOj8U9Disu64PYIbCY4zg6W0b7EzBe3oQem6oOiCBOLjUvIwRPsdj60zA3yMyiCBKAM0NiiK8xXADI38r+XwQyXFMjnHhhl5yT26QhycoNvf+p/WaY965/1dGroOSM9g6QEEoQshmqgubhV7X12zt+ZCjMP3IfVR2Dt0bkhThBczJjRjY0mdgjsvaZTkmZLNjdVS2SB8hOFtwq2pJy3V0b7bQuT0wgY3dnAsw59C9FtmCafUWdgIUgvGhk35cfs7noEMsw/6HCeYO3G+sYytekI2CcR2SkX1n/8NERUVFRUXF+PMHJygcYfKZSDQAAAAASUVORK5CYII=";
            const W = ["src"];
            function X(e, t, n, o, a, r) {
                return (0,
                s.uX)(),
                (0,
                s.Wv)(o["Overlay"], {
                    visible: o.showAd,
                    modalClosable: !0
                }, {
                    content: (0,
                    s.k6)((()=>[(0,
                    s.Lk)("img", {
                        class: "ad",
                        src: o.picture,
                        onClick: o.goAd
                    }, null, 8, W), (0,
                    s.Lk)("img", {
                        class: "close",
                        src: G,
                        onClick: o.closeAd
                    })])),
                    _: 1
                }, 8, ["visible"])
            }
            n(44114);
            var Q = n(52670)
              , J = n(91588)
              , Y = n(45358)
              , q = {
                __name: "AdPopUp",
                setup(e, {expose: t}) {
                    t();
                    const n = (0,
                    s.KR)(!1)
                      , o = (0,
                    s.KR)("")
                      , a = (0,
                    s.KR)("")
                      , r = (0,
                    s.nI)()
                      , i = r.appContext.config.globalProperties
                      , c = ()=>{
                        n.value = !1
                    }
                      , l = ()=>{
                        window.open(o.value, "_self"),
                        window._rlog.push(["_trackCustom", "event", [["action", "pop-up_windows"]]])
                    }
                    ;
                    (0,
                    s.sV)((()=>{
                        J.A.getPopUpInfos().then((e=>{
                            if (0 !== Object.keys(e.data.value).length) {
                                const t = e.data.value;
                                o.value = t.url,
                                a.value = t.picture,
                                Y.A.isDuringDate(t.startTime, t.endTime) && null === i.$cookies.get("adcookie") ? (n.value = !0,
                                window._rlog.push(["_trackCustom", "event", [["show", "pop-up_windows"]]]),
                                i.$cookies.set("adcookie", !0, 86400)) : n.value = !1
                            }
                        }
                        ))
                    }
                    ));
                    const u = {
                        showAd: n,
                        url: o,
                        picture: a,
                        internalInstance: r,
                        internalData: i,
                        closeAd: c,
                        goAd: l,
                        ref: s.KR,
                        onMounted: s.sV,
                        getCurrentInstance: s.nI,
                        Overlay: Q.A,
                        get service() {
                            return J.A
                        },
                        get util() {
                            return Y.A
                        }
                    };
                    return Object.defineProperty(u, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    u
                }
            };
            const z = (0,
            p.A)(q, [["render", X], ["__scopeId", "data-v-05c25f5a"]]);
            var Z = z
              , ee = n(34792);
            const te = e=>((0,
            s.Qi)("data-v-456af1b4"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , ne = {
                class: "TextTranslateSetting yd-form-container"
            }
              , oe = {
                class: "checkbox"
            }
              , ae = te((()=>(0,
            s.Lk)("span", {
                class: "color_text_1 label-text"
            }, "日语假名（仅译文）", -1)))
              , re = {
                class: "checkbox"
            }
              , ie = te((()=>(0,
            s.Lk)("span", {
                class: "color_text_1 label-text"
            }, "日语罗马音（仅译文）", -1)))
              , se = {
                class: "checkbox"
            }
              , ce = te((()=>(0,
            s.Lk)("span", {
                class: "color_text_1 label-text"
            }, "显示原文字数", -1)));
            function le(e, t, n, o, a, r) {
                return (0,
                s.uX)(),
                (0,
                s.Wv)(o["InterfaceDialog"], {
                    dialogVisible: !0,
                    width: "auto",
                    height: "auto",
                    top: 28,
                    left: -140,
                    onCloseDialog: o.closeDialog
                }, {
                    default: (0,
                    s.k6)((()=>[(0,
                    s.Lk)("div", ne, [(0,
                    s.bF)(o["StrokeSwitch"]), (0,
                    s.Lk)("label", oe, [(0,
                    s.bo)((0,
                    s.Lk)("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[0] || (t[0] = e=>o.showPjm = e)
                    }, null, 512), [[s.lH, o.showPjm]]), ae]), (0,
                    s.Lk)("label", re, [(0,
                    s.bo)((0,
                    s.Lk)("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[1] || (t[1] = e=>o.showRomanPronunciation = e)
                    }, null, 512), [[s.lH, o.showRomanPronunciation]]), ie]), (0,
                    s.Lk)("label", se, [(0,
                    s.bo)((0,
                    s.Lk)("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[2] || (t[2] = e=>o.showWordsNumber = e)
                    }, null, 512), [[s.lH, o.showWordsNumber]]), ce])])])),
                    _: 1
                })
            }
            var ue = n(50953)
              , de = n(20641)
              , me = n(95124);
            const pe = {
                class: "stroke-switch yd-form-container"
            }
              , ge = {
                class: "checkbox"
            };
            function fe(e, t, n, o, a, r) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", pe, [(0,
                s.Lk)("label", ge, [(0,
                s.Lk)("span", {
                    class: "color_text_1 label-text",
                    onClick: t[0] || (t[0] = (...e)=>o.downloadChrome && o.downloadChrome(...e))
                }, "下载划词插件")])])
            }
            var he = {
                name: "StrokeSwitch",
                setup(e, t) {
                    const n = ()=>{
                        window.open("https://chrome.google.com/webstore/detail/%E7%BD%91%E6%98%93%E6%9C%89%E9%81%93%E7%BF%BB%E8%AF%91/eopjamdnofihpioajgfdikhhbobonhbb?hl=en&authuser=1")
                    }
                    ;
                    return {
                        downloadChrome: n
                    }
                }
            };
            const Ae = (0,
            p.A)(he, [["render", fe], ["__scopeId", "data-v-8d65aa18"]]);
            var ve = Ae
              , be = {
                __name: "TextTranslateSetting",
                emits: ["closeDialog"],
                setup(e, {expose: t, emit: n}) {
                    t();
                    const o = (0,
                    R.Pj)()
                      , a = n
                      , r = (0,
                    ue.KR)(!1)
                      , i = (0,
                    ue.KR)(!1)
                      , c = (0,
                    ue.KR)(!0);
                    (0,
                    s.KC)((()=>{
                        o.dispatch("initTextTranslateSettingStore"),
                        r.value = o.state.text.showPjm,
                        i.value = o.state.text.showRomanPronunciation,
                        c.value = o.state.text.showWordsNumber
                    }
                    )),
                    (0,
                    de.wB)(r, ((e,t)=>{
                        e !== t && o.commit("SET_SHOW_PJM", e)
                    }
                    )),
                    (0,
                    de.wB)(i, ((e,t)=>{
                        e !== t && o.commit("SET_SHOW_ROMAN_PRONUNCICATION", e)
                    }
                    )),
                    (0,
                    de.wB)(c, ((e,t)=>{
                        e !== t && o.commit("SET_SHOW_WORDS_NUMBER", e)
                    }
                    ));
                    const l = ()=>{
                        a("closeDialog")
                    }
                      , u = {
                        store: o,
                        emit: a,
                        showPjm: r,
                        showRomanPronunciation: i,
                        showWordsNumber: c,
                        closeDialog: l,
                        get computed() {
                            return de.EW
                        },
                        get ref() {
                            return ue.KR
                        },
                        get watch() {
                            return de.wB
                        },
                        get useStore() {
                            return R.Pj
                        },
                        InterfaceDialog: me.A,
                        StrokeSwitch: ve
                    };
                    return Object.defineProperty(u, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    u
                }
            };
            const Te = (0,
            p.A)(be, [["render", le], ["__scopeId", "data-v-456af1b4"]]);
            var ye = Te
              , _e = n.p + "img/AITranslateTabGuide.d2c8a07b.png";
            const Se = e=>((0,
            s.Qi)("data-v-a9443b36"),
            e = e(),
            (0,
            s.jt)(),
            e)
              , ke = {
                class: "tab-left"
            }
              , Ie = ["onClick", "onMouseenter"]
              , we = {
                key: 1,
                class: "tab-title"
            }
              , Ee = {
                class: "tab-right"
            }
              , Ce = Se((()=>(0,
            s.Lk)("i", {
                class: "icon ic_text_translate_setting"
            }, null, -1)))
              , De = Se((()=>(0,
            s.Lk)("span", {
                class: "text_translate_setting"
            }, "设置", -1)))
              , Pe = Se((()=>(0,
            s.Lk)("i", {
                class: "icon ic_leftbar_document_normal"
            }, null, -1)))
              , xe = Se((()=>(0,
            s.Lk)("span", {
                class: "color_text_1"
            }, "文档翻译记录", -1)))
              , Le = [Pe, xe];
            function Oe(e, t, n, o, a, r) {
                const i = ye
                  , c = (0,
                s.gN)("tooltip");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["tab-header", {
                        "tab-header-ai": "AITranslate" === r.routeName
                    }])
                }, [(0,
                s.Lk)("div", ke, ["TextTranslate" === r.routeName || "AITranslate" === r.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)(s.FK, {
                    key: 0
                }, [((0,
                s.uX)(!0),
                (0,
                s.CE)(s.FK, null, (0,
                s.pI)(a.tabList, ((e,n)=>((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["tab-item", [e.value === a.currentTab ? "active color_text_1" : "color_text_3", e.customStyle]]),
                    key: n,
                    onClick: t=>r.tabItemClickHandler(e),
                    onMouseenter: t=>r.tabItemMouseHoverHandler(e),
                    onMouseleave: t[1] || (t[1] = e=>r.guideMouseHoverHandler(0))
                }, [(0,
                s.Lk)("span", null, (0,
                s.v_)(e.label), 1), a.isPrerender || "AITranslate" !== e.value || !a.showTabAiGuide && !a.isHoverShowAiGuide || "AITranslate" === r.routeName ? (0,
                s.Q3)("", !0) : ((0,
                s.uX)(),
                (0,
                s.CE)("img", {
                    key: 0,
                    class: "ai-guide",
                    src: _e,
                    onClick: t[0] || (t[0] = (0,
                    s.D$)(((...e)=>r.clickTabAIGuide && r.clickTabAIGuide(...e)), ["stop"]))
                }))], 42, Ie)))), 128)), (0,
                s.bo)(((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: "tab-item color_text_3",
                    onClick: t[2] || (t[2] = e=>r.tabItemClickHandler(a.humanTranslateTab))
                }, [(0,
                s.Lk)("span", null, (0,
                s.v_)(a.humanTranslateTab.label), 1)])), [[c, r.HumanTranslateHoverTip, void 0, {
                    "bottom-left": !0
                }]])], 64)) : "DocumentUpload" === r.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", we, [(0,
                s.Lk)("span", null, (0,
                s.v_)(a.documentUploadTab.label), 1)])) : (0,
                s.Q3)("", !0)]), (0,
                s.Lk)("div", Ee, ["TextTranslate" === r.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 0,
                    class: "tool-button",
                    onClick: t[3] || (t[3] = (...e)=>r.textTranslateSettingButtonClickHander && r.textTranslateSettingButtonClickHander(...e))
                }, [Ce, De, (0,
                s.bF)(i, {
                    dialogVisible: a.textTranslateSettingDialogVisible,
                    onCloseDialog: r.textTranslateSettingCloseCallbackHandler
                }, null, 8, ["dialogVisible", "onCloseDialog"])])) : (0,
                s.Q3)("", !0), "DocumentUpload" === r.routeName ? ((0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    key: 1,
                    class: "tool-button",
                    onClick: t[4] || (t[4] = (...e)=>r.docHistoryEntryClickHandler && r.docHistoryEntryClickHandler(...e))
                }, Le)) : (0,
                s.Q3)("", !0)])], 2)
            }
            var Re = n(62512);
            const Ne = {
                class: "hunman-translate-hover-tip"
            }
              , Ue = (0,
            s.Fv)('<h5 class="tip-title" data-v-1674d62e><span class="color_main_1_text" data-v-1674d62e>母语润色</span><span class="color_text_1" data-v-1674d62e>服务全新上线</span></h5><ul class="tip-list" data-v-1674d62e><li class="tip-list-item color_text_2" data-v-1674d62e>专业译员随时待命</li><li class="tip-list-item color_text_2" data-v-1674d62e>最快1分钟返回精准译文</li></ul>', 2)
              , He = [Ue];
            function Me(e, t) {
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", Ne, He)
            }
            const Be = {}
              , Ke = (0,
            p.A)(Be, [["render", Me], ["__scopeId", "data-v-1674d62e"]]);
            var Ve = Ke
              , je = {
                name: "TabHeader",
                data() {
                    var e;
                    return {
                        tabList: [{
                            label: "翻译",
                            value: "TextTranslate"
                        }, {
                            label: "AI 翻译",
                            value: "AITranslate",
                            params: {
                                keyfrom: "fanyiweb_tab"
                            },
                            customStyle: "gradient-item"
                        }, {
                            label: "文档翻译",
                            value: "DocumentUpload"
                        }],
                        humanTranslateTab: {
                            label: "人工翻译",
                            url: "https://f.youdao.com/?vendor=fanyibanner",
                            log: "human_translation"
                        },
                        documentUploadTab: {
                            label: "文档翻译",
                            value: "DocumentUpload"
                        },
                        currentTab: "",
                        textTranslateSettingDialogVisible: !1,
                        showTabAiGuide: !1,
                        isHoverShowAiGuide: !1,
                        isPrerender: (null === (e = window.__PRERENDER_INJECTED) || void 0 === e ? void 0 : e.isPrerender) || !1
                    }
                },
                computed: {
                    routeName() {
                        return this.$route.name
                    },
                    isLogin() {
                        return this.$store.state.login.isLogin
                    }
                },
                components: {
                    TextTranslateSetting: ye
                },
                mounted() {
                    this.checkShowTabAiGuide(),
                    window.addEventListener("click", this.clickHandler)
                },
                methods: {
                    clickTabAIGuide() {
                        this.$router.push({
                            name: "AITranslate",
                            query: {
                                keyfrom: "fanyiweb_tab_guide"
                            }
                        })
                    },
                    clickHandler(e) {
                        const {target: t} = e;
                        "pop-up-comp mask" !== t.className && "close" !== t.className && (this.showTabAiGuide = !1,
                        window.removeEventListener("click", this.clickHandler))
                    },
                    checkShowTabAiGuide() {
                        const e = this.getLocalStorage("isShowTabAiGuide");
                        if (void 0 === e) {
                            const e = new Date
                              , t = `${e.getMonth() + 1}-${e.getDate()}`;
                            this.setLocalStorage("isShowTabAiGuide", t),
                            this.showTabAiGuide = !0
                        } else {
                            const t = new Date
                              , n = `${t.getMonth() + 1}-${t.getDate()}`;
                            e !== n ? (this.setLocalStorage("isShowTabAiGuide", n),
                            this.showTabAiGuide = !0) : this.showTabAiGuide = !1
                        }
                    },
                    getLocalStorage(e) {
                        return Re.A.get(e)
                    },
                    setLocalStorage(e, t) {
                        Re.A.set(e, t)
                    },
                    guideMouseHoverHandler(e) {
                        this.isHoverShowAiGuide = Boolean(e)
                    },
                    tabItemMouseHoverHandler(e) {
                        "AITranslate" === e.value && (this.isHoverShowAiGuide = !0)
                    },
                    HumanTranslateHoverTip() {
                        return {
                            component: Ve
                        }
                    },
                    tabItemClickHandler(e) {
                        H.A.$emit("stopTransition"),
                        e.value ? this.$router.push({
                            name: `${e.value}`,
                            query: e && e.params || {}
                        }) : (e.log && window._rlog.push(["_trackCustom", "event", [["action", e.log]]]),
                        window.open(e.url, "_blank"))
                    },
                    textTranslateSettingButtonClickHander() {
                        this.textTranslateSettingDialogVisible = !0
                    },
                    textTranslateSettingCloseCallbackHandler() {
                        this.textTranslateSettingDialogVisible = !1
                    },
                    docHistoryEntryClickHandler() {
                        if (this.isLogin) {
                            const e = this.$router.resolve({
                                path: "/person/docHistory"
                            });
                            window.open(e.href, "_blank")
                        } else {
                            const e = `${window.location.origin}${window.location.pathname}#/person/docHistory`;
                            window.location.href = `https://c.youdao.com/common-login-web/index.html?redirect_url=${encodeURIComponent(e)}&t=${(new Date).getTime()}`
                        }
                    }
                },
                watch: {
                    $route: {
                        handler() {
                            this.currentTab = decodeURIComponent(this.$route.name)
                        },
                        immediate: !0
                    }
                }
            };
            const $e = (0,
            p.A)(je, [["render", Oe], ["__scopeId", "data-v-a9443b36"]]);
            var Fe = $e;
            const Ge = {
                class: "tab-body color_bg_3"
            };
            function We(e, t, n, o, a, r) {
                const i = Fe
                  , c = (0,
                s.g2)("router-view");
                return (0,
                s.uX)(),
                (0,
                s.CE)("div", {
                    class: (0,
                    s.C4)(["translate-tab-container", {
                        "ai-content": "/AITranslate" === o.route.path,
                        "ai-content ai-content-small-process": "/AITranslateSmallProcess" === o.route.path,
                        changeHeight: "/AITranslate" === o.route.path && o.changeHeight
                    }]),
                    ref: "AIContent",
                    onScroll: o.handleScroll
                }, [(0,
                s.bF)(i), (0,
                s.Lk)("div", null, [(0,
                s.Lk)("div", Ge, [(0,
                s.bF)(c, null, {
                    default: (0,
                    s.k6)((({Component: e})=>[((0,
                    s.uX)(),
                    (0,
                    s.Wv)(s.PR, null, [((0,
                    s.uX)(),
                    (0,
                    s.Wv)((0,
                    s.$y)(e)))], 1024))])),
                    _: 1
                })])])], 34)
            }
            var Xe = n(34917)
              , Qe = {
                __name: "index",
                setup(e, {expose: t}) {
                    t();
                    const n = (0,
                    V.lq)()
                      , o = (0,
                    s.nI)()
                      , a = o.appContext.config.globalProperties
                      , r = (0,
                    R.Pj)()
                      , i = (0,
                    s.KR)(null)
                      , c = (0,
                    s.KR)(0)
                      , l = (0,
                    s.KR)(0)
                      , u = (0,
                    s.KR)(!1)
                      , d = e=>{
                        const t = e.target.scrollHeight - e.target.clientHeight
                          , n = e.target.scrollTop < 0 ? 0 : e.target.scrollTop <= t ? e.target.scrollTop : t;
                        n > l.value && t > 90 && t - n > 90 && (H.A.$emit("AITranslateResultScroll", 1),
                        c.value = 1),
                        n < l.value && (H.A.$emit("AITranslateResultScroll", 0),
                        c.value = 0),
                        l.value = n
                    }
                    ;
                    (0,
                    s.KC)((()=>{
                        r.dispatch("fetchLanguageData"),
                        r.dispatch("fetchDomainData");
                        const e = {
                            keyid: "minor-search-server"
                        }
                          , t = "8XdqRK6tvAQAtRB349Wdmkzxr2A5fqDJ";
                        Xe.A.getAigcEntrance(e, t).then((n=>{
                            r.commit("SET_ISALLOWAIGC", n.data.isAllow),
                            !n.data.isAllow && r.state.login.isLogin || Xe.A.getAigcStyle(e, t).then((e=>{
                                r.commit("SET_AIGCDOMAINMAP", e.data.styleList),
                                null !== a.$cookies.get("participation-aigc-invitation") && r.dispatch("updateDomainMap")
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    (0,
                    s.sV)((()=>{
                        H.A.$on("AITranslateResultScroll", (e=>{
                            u.value = !!e
                        }
                        ))
                    }
                    ));
                    const m = {
                        route: n,
                        internalInstance: o,
                        internalData: a,
                        store: r,
                        AIContent: i,
                        toggleTopBarStatus: c,
                        lastScrollTop: l,
                        changeHeight: u,
                        handleScroll: d,
                        getCurrentInstance: s.nI,
                        onMounted: s.sV,
                        get useRoute() {
                            return V.lq
                        },
                        get useStore() {
                            return R.Pj
                        },
                        get eventBus() {
                            return H.A
                        },
                        get service() {
                            return Xe.A
                        }
                    };
                    return Object.defineProperty(m, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    m
                }
            };
            const Je = (0,
            p.A)(Qe, [["render", We], ["__scopeId", "data-v-3b7ce05b"]]);
            var Ye = Je
              , qe = {
                __name: "Home",
                setup(e, {expose: t}) {
                    var n;
                    t();
                    const {saveTextTranslateContentToLS: o, saveAITranslateHistoryList: a} = (0,
                    ee.A)()
                      , r = (0,
                    s.KR)(!0)
                      , i = (null === (n = window.__PRERENDER_INJECTED) || void 0 === n ? void 0 : n.isPrerender) || !1
                      , c = (0,
                    s.KR)(0)
                      , l = ()=>{
                        const e = window.innerWidth;
                        c.value = e <= 2015 ? 108 : (e - 1800) / 2
                    }
                    ;
                    (0,
                    s.sV)((()=>{
                        document.dispatchEvent(new Event("render-event")),
                        l(),
                        window.addEventListener("resize", l)
                    }
                    )),
                    (0,
                    s.hi)((()=>{
                        window.removeEventListener("resize", l)
                    }
                    ));
                    const u = (0,
                    s.EW)((()=>!1))
                      , d = e=>{
                        H.A.$emit("sidebarCollapseChange", e)
                    }
                    ;
                    (0,
                    s.sV)((()=>{
                        H.A.$on("stopTransition", (()=>{
                            r.value = !1,
                            setTimeout((()=>{
                                r.value = !0
                            }
                            ), 200)
                        }
                        ))
                    }
                    ));
                    const m = {
                        saveTextTranslateContentToLS: o,
                        saveAITranslateHistoryList: a,
                        canTransition: r,
                        isPrerender: i,
                        topNavFixedDisVal: c,
                        getTopNavFixedDisVal: l,
                        testMode: u,
                        collapseChange: d,
                        onMounted: s.sV,
                        onUnmounted: s.hi,
                        get useRoute() {
                            return V.lq
                        },
                        get eventBus() {
                            return H.A
                        },
                        Banner: F.A,
                        AdPopUp: Z,
                        get useTranslationWebsiteFrame() {
                            return ee.A
                        },
                        TranslateTab: Ye
                    };
                    return Object.defineProperty(m, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    m
                }
            };
            const ze = (0,
            p.A)(qe, [["render", $]]);
            var Ze = ze
              , et = n(25507);
            const tt = [{
                path: "/",
                name: "Home",
                component: Ze,
                children: [{
                    path: "",
                    name: "TextTranslate",
                    component: ()=>Promise.all([n.e(667), n.e(762), n.e(665), n.e(348)]).then(n.bind(n, 40719))
                }, {
                    path: "documentUpload",
                    name: "DocumentUpload",
                    component: ()=>Promise.all([n.e(665), n.e(316), n.e(551)]).then(n.bind(n, 94099))
                }, {
                    path: "AITranslate",
                    name: "AITranslate",
                    component: ()=>Promise.all([n.e(667), n.e(762), n.e(873)]).then(n.bind(n, 57293))
                }]
            }, {
                path: "/paraphraser",
                name: "Paraphraser",
                component: ()=>Promise.all([n.e(667), n.e(108)]).then(n.bind(n, 1258))
            }, {
                path: "/person",
                name: "person",
                component: ()=>n.e(688).then(n.bind(n, 99961)),
                beforeEnter(e, t, n) {
                    console.log(et.A.state.login.isLogin);
                    const {isLogin: o} = et.A.state.login;
                    o ? n() : n({
                        name: "Home"
                    })
                },
                children: [{
                    path: "docHistory",
                    name: "docHistory",
                    component: ()=>Promise.all([n.e(189), n.e(637)]).then(n.bind(n, 12488))
                }, {
                    path: "termBank",
                    name: "termBank",
                    component: ()=>Promise.all([n.e(189), n.e(316), n.e(471)]).then(n.bind(n, 63093))
                }]
            }, {
                path: "/login/:redirectUrl?",
                name: "NoLogin",
                component: ()=>n.e(333).then(n.bind(n, 65368))
            }, {
                path: "/AITranslateSmallProcess",
                name: "/AITranslateSmallProcess",
                component: ()=>Promise.all([n.e(667), n.e(762), n.e(873)]).then(n.bind(n, 57293))
            }]
              , nt = (0,
            V.aE)({
                history: (0,
                V.Bt)(),
                routes: tt
            });
            nt.beforeEach(((e,t,n)=>{
                document.body.scrollTop = 0,
                document.documentElement.scrollTop = 0,
                n()
            }
            ));
            var ot = nt;
            n(48559);
            n(86964).polyfill(),
            a().polyfill();
            const at = (0,
            s.Ef)(K);
            at.config.globalProperties.$cookies = i(),
            at.config.globalProperties.$toast = l.A,
            window.$CPopup = u.A,
            at.use(et.A).use(ot).use(i()).use(T).use(c.A).use(y.A).use(_.A).use(S.A).directive("clickoutside", k.K).mount("#app")
        },
        18908: function(e, t, n) {
            "use strict";
            var o = n(58788)
              , a = n(25507)
              , r = n(97815)
              , i = n(27950)
              , s = n(14914)
              , c = n(95457);
            const l = "https://luna-ai.youdao.com"
              , {product: u, keyId: d, keyfrom: m, keyIdPre: p} = i.A
              , g = localStorage.getItem("yduuid")
              , f = async(e,t,n)=>{
                const o = {
                    signSecretKey: a.A.state.text.secretAIKey,
                    keyId: d,
                    product: u,
                    keyfrom: m
                };
                return e.yduuid = localStorage.getItem("yduuid"),
                (0,
                s.a)(`${l}/translate_llm/trans`, e, o, t, n)
            }
              , h = async(e,t,n)=>{
                const o = {
                    signSecretKey: a.A.state.text.secretAIKey,
                    keyId: d,
                    product: u,
                    keyfrom: m
                };
                return e.yduuid = localStorage.getItem("yduuid"),
                (0,
                s.a)(`${l}/translate_llm/afterProcess`, e, o, t, n)
            }
              , A = e=>(0,
            c.bE)(`${l}/translate_llm/like`, r.A.genParamV3FormData(e, a.A.state.text.secretAIKey, d, u, m, localStorage.getItem("yduuid")))
              , v = ()=>(0,
            c.Jt)(`${l}/translate_llm/functionList`, r.A.genParamV3({}, a.A.state.text.secretAIKey, d, u, m, localStorage.getItem("yduuid")))
              , b = (e,t)=>{
                const n = "https://lunafeedback.youdao.com/feedback";
                return (0,
                c.T3)(`${n}/add?${e}`, t)
            }
              , T = e=>(0,
            c.bE)(`${l}/translate_llm/modelfeedback`, r.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), a.A.state.text.secretAIKey, d, u, m, localStorage.getItem("yduuid")))
              , y = e=>(0,
            c.bE)(`${l}/translate_llm/modify`, r.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), a.A.state.text.secretAIKey, d, u, m, localStorage.getItem("yduuid")))
              , _ = e=>(0,
            c.bE)(`${l}/translate_llm/del`, r.A.genParamV3FormData((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), a.A.state.text.secretAIKey, d, u, m, localStorage.getItem("yduuid")))
              , S = e=>(0,
            c.Jt)(`${l}/translate_llm/IntentionRec`, r.A.genParamV3((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), a.A.state.text.secretAIKey, d, u, m, g))
              , k = e=>(0,
            c.Jt)(`${l}/translate_llm/example`, r.A.genParamV3((0,
            o.A)({
                token: localStorage.getItem("ydtoken")
            }, e), a.A.state.text.secretAIKey, d, u, m, g))
              , I = ()=>(0,
            c.Jt)(`${l}/translate_llm/guideInfo`, r.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, a.A.state.text.secretAIKey, d, u, m, g))
              , w = async(e,t,n)=>{
                const o = {
                    signSecretKey: a.A.state.text.secretAIKey,
                    keyId: d,
                    product: u,
                    keyfrom: m
                };
                return e.yduuid = localStorage.getItem("yduuid"),
                (0,
                s.a)(`${l}/translate_llm/v2/chat`, e, o, t, n)
            }
              , E = ()=>(0,
            c.Jt)(`${l}/translate_llm/v2/history/list`, r.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, a.A.state.text.secretAIKey, d, u, m, g))
              , C = e=>(0,
            c.bE)(`${l}/translate_llm/v2/history/del`, r.A.genParamV3FormData({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, a.A.state.text.secretAIKey, d, u, m, g))
              , D = ()=>(0,
            c.Jt)(`${l}/translate_llm/v2/init`, r.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, a.A.state.text.secretAIKey, d, u, m, g))
              , P = e=>(0,
            c.Jt)(`${l}/translate_llm/v2/suggest`, r.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                functionEnglishName: e
            }, a.A.state.text.secretAIKey, d, u, m, g))
              , x = ()=>(0,
            c.Jt)(`${l}/translate_llm/userinfo`, r.A.genParamV3({
                token: localStorage.getItem("ydtoken")
            }, a.A.state.text.secretAIKey, d, u, m, localStorage.getItem("yduuid")))
              , L = e=>(0,
            c.Jt)(`${l}/translate_llm/v2/history/details`, r.A.genParamV3({
                token: localStorage.getItem("ydtoken"),
                id: e
            }, a.A.state.text.secretAIKey, d, u, m, localStorage.getItem("yduuid")));
            t.A = {
                fetchSSEMethod: f,
                getUserRemainTime: x,
                translatellmlike: A,
                getMenu: v,
                fetchAfterProcessSSE: h,
                feedback: b,
                compareModel: T,
                modifyAfterProcess: y,
                delAfterProcess: _,
                getIntentionRec: S,
                getLargeModelGuideExample: k,
                getLargeModelGuideInfo: I,
                getChat: w,
                getDialogList: E,
                delDialog: C,
                getInit: D,
                getProcess: P,
                recoverDialogs: L
            }
        },
        91588: function(e, t, n) {
            "use strict";
            var o = n(95457);
            const a = "https://api-overmind.youdao.com/openapi/get/luna/dict/dict-common-config/prod"
              , r = ()=>(0,
            o.Jt)(`${a}/translateMainPageBanner`)
              , i = ()=>(0,
            o.Jt)(`${a}/translateMainPagePopup`);
            t.A = {
                getBannerInfos: r,
                getPopUpInfos: i
            }
        },
        95457: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return u
                },
                Jt: function() {
                    return s
                },
                T3: function() {
                    return l
                },
                bE: function() {
                    return c
                }
            });
            var o = n(58788)
              , a = n(91250)
              , r = (n(6301),
            n(3745))
              , i = n(48066);
            function s(e, t, n={}) {
                return new Promise(((r,i)=>{
                    a.A.get(e, (0,
                    o.A)({
                        params: t
                    }, n)).then((e=>{
                        r(e.data)
                    }
                    )).catch((e=>{
                        i(e)
                    }
                    ))
                }
                ))
            }
            function c(e, t, n) {
                return new Promise((o=>{
                    n ? a.A.post(e, t, {
                        timeout: n
                    }).then((e=>{
                        o(e.data)
                    }
                    )).catch((e=>{
                        o(e)
                    }
                    )) : a.A.post(e, t).then((e=>{
                        o(e.data)
                    }
                    )).catch((e=>{
                        o(e)
                    }
                    ))
                }
                ))
            }
            function l(e, t, n) {
                const o = t
                  , r = new FormData;
                return Object.keys(o).forEach((e=>{
                    r.append(e, o[e])
                }
                )),
                new Promise(((t,o)=>{
                    const i = {};
                    n && (i.timeout = n),
                    a.A.post(e, r, i).then((e=>{
                        t(e.data)
                    }
                    )).catch((e=>{
                        o(e)
                    }
                    ))
                }
                ))
            }
            function u(e, t, n) {
                return new Promise(((o,r)=>{
                    a.A.post(e, t, n).then((e=>{
                        o(e.data)
                    }
                    )).catch((e=>{
                        r(e)
                    }
                    ))
                }
                ))
            }
            a.A.defaults.withCredentials = !0,
            a.A.defaults.timeout = 6e4,
            a.A.interceptors.response.use((e=>{
                const {headers: t} = e
                  , n = Object.keys(e.headers).find((e=>"exceedmaxdevicecnt" === e.toLowerCase()));
                return t && "true" === t[n] && (0,
                i.A)({
                    confirmButtonText: "重新登录",
                    text: "您同时登录的设备数过多，已被挤下线，登录新账号，可继续使用~",
                    confirm: ()=>{
                        const e = encodeURIComponent(window.location.href);
                        window.location.href = `https://c.youdao.com/common-login-web/index.html?redirect_url=${e}&t=${(new Date).getTime()}`
                    }
                    ,
                    cancel: ()=>{
                        const e = encodeURIComponent(window.location.href);
                        window.location.href = `https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=${e}`
                    }
                }),
                e
            }
            ), (e=>(e.code && "ERR_CANCELED" === e.code || (0,
            r.A)("网络异常，请检查网络"),
            Promise.reject(e))))
        },
        53007: function(e, t, n) {
            "use strict";
            n(33110);
            var o = n(95457);
            const a = "https://dict.youdao.com"
              , r = "https://dict.youdao.com/vip"
              , i = "https://dict.youdao.com/login/acc"
              , s = ["option_avatar", "nickname"]
              , c = "https://backendmarket.youdao.com"
              , l = "https://education-certification.youdao.com/education/pub/get"
              , u = e=>(0,
            o.bE)(`${r}/user/status`, e)
              , d = ()=>(0,
            o.Jt)(`${a}/login/acc/query/accountinfo`)
              , m = e=>(0,
            o.Jt)(`${a}/profile/batch/get?content=${encodeURIComponent(JSON.stringify(s))}`, e)
              , p = e=>(0,
            o.bE)(`${c}/collect/docreport`, e)
              , g = ({keyid: e, mysticTime: t, product: n, pointParam: a, sign: r})=>(0,
            o.Jt)(`${l}?keyid=${e}&mysticTime=${t}&product=${n}&pointParam=${a}&sign=${r}`, {})
              , f = e=>(0,
            o.Jt)(`${i}/device/check`, e);
            t.A = {
                getAccountInfos: d,
                getBatchUrl: m,
                getVipStatus: u,
                baiduCallback: p,
                getStudentStatus: g,
                checkLogin: f
            }
        },
        34917: function(e, t, n) {
            "use strict";
            var o = n(58788)
              , a = n(95457)
              , r = n(91565)
              , i = n(91250)
              , s = (n(97815),
            n(25507),
            n(48287)["Buffer"]);
            const {CancelToken: c} = i.A;
            let l;
            const u = "fanyideskweb"
              , d = "webfanyi"
              , m = "client,mysticTime,product"
              , p = "1.0.0"
              , g = "web"
              , f = "fanyi.web"
              , h = 1
              , A = 1
              , v = 1
              , b = "wifi"
              , T = 0;
            function y(e) {
                return r.createHash("md5").update(e).digest()
            }
            function _(e) {
                return r.createHash("md5").update(e.toString()).digest("hex")
            }
            function S(e, t) {
                return _(`client=${u}&mysticTime=${e}&product=${d}&key=${t}`)
            }
            function k(e, t) {
                const n = (new Date).getTime();
                return {
                    sign: S(n, e),
                    client: u,
                    product: d,
                    appVersion: p,
                    vendor: g,
                    pointParam: m,
                    mysticTime: n,
                    keyfrom: f,
                    mid: h,
                    screen: A,
                    model: v,
                    network: b,
                    abtest: T,
                    yduuid: t || "abcdefg"
                }
            }
            const I = "https://luna-ai.youdao.com"
              , w = (e,t)=>(0,
            a.Jt)("https://dict.youdao.com/webtranslate/key", (0,
            o.A)((0,
            o.A)({}, e), k(t)))
              , E = (e,t,n)=>(0,
            a.Jt)(`${I}/translate_llm/secret`, (0,
            o.A)((0,
            o.A)({}, e), k(t, n)))
              , C = (e,t)=>(0,
            a.H)("https://dict.youdao.com/webtranslate", (0,
            o.A)((0,
            o.A)({}, e), k(t)), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
              , D = ()=>{
                l && l()
            }
              , P = e=>(0,
            a.T3)("https://dict.youdao.com/keyword/key", e)
              , x = (e,t)=>(0,
            a.Jt)(" https://dict-subsidiary.youdao.com/aigc/entrance", (0,
            o.A)((0,
            o.A)({}, e), k(t)))
              , L = (e,t)=>(0,
            a.Jt)(" https://dict-subsidiary.youdao.com/aigc/style", (0,
            o.A)((0,
            o.A)({}, e), k(t)))
              , O = (e,t)=>(0,
            a.Jt)(" https://dict-subsidiary.youdao.com/aigc/tran", (0,
            o.A)((0,
            o.A)({}, e), k(t)), {
                cancelToken: new c((e=>{
                    l = e
                }
                ))
            })
              , R = e=>(0,
            a.T3)("https://fanyi.youdao.com/feedback", e)
              , N = (e,t,n)=>{
                if (!e)
                    return null;
                const o = s.alloc(16, y(t))
                  , a = s.alloc(16, y(n))
                  , i = r.createDecipheriv("aes-128-cbc", o, a);
                let c = i.update(e, "base64", "utf-8");
                return c += i.final("utf-8"),
                c
            }
              , U = "https://lunafeedback.youdao.com/feedback"
              , H = e=>{
                const t = {
                    comments: e
                };
                return (0,
                a.T3)(`${U}/add?product=deskdict_contentCorrection&client=fanyiweb&appVersion=1.0.0`, t)
            }
            ;
            t.A = {
                getTextTranslateSecretKey: w,
                getTextTranslateResult: C,
                getTextTranslateKeyword: P,
                decodeData: N,
                feedback: H,
                getAigcEntrance: x,
                getAigcStyle: L,
                getAigcTran: O,
                fanyiFeedback: R,
                getAITranslateSecretKey: E,
                cancelLastGpt: D
            }
        },
        25507: function(e, t, n) {
            "use strict";
            n(44114),
            n(72712),
            n(27495),
            n(25440),
            n(62953);
            var o = n(66278);
            const a = []
              , r = n(84870)
              , i = r.keys().reduce(((e,t)=>{
                const n = t.replace(/^\.\/(.*)\.\w+$/, "$1");
                a.push(n);
                const o = r(t);
                return e[n] = o.default,
                e
            }
            ), {});
            t.A = (0,
            o.y$)({
                modules: i
            })
        },
        57185: function(e, t, n) {
            "use strict";
            n.r(t);
            n(44114),
            n(33110);
            var o = n(91250)
              , a = n(97504)
              , r = n(62512);
            const i = "DOMAIN"
              , s = "DOMAIN_MAP"
              , c = "TEXTDOMAIN_MAP"
              , l = {
                domainMap: a.A,
                allowDomainLanguageCombineList: ["en2zh-CHS", "zh-CHS2en"],
                isAllowAigc: !1,
                textTransDomainMap: a.A,
                aigcDomainMap: []
            }
              , u = {
                [s](e, t) {
                    e.domainMap = t
                },
                [c](e, t) {
                    e.textTransDomainMap = JSON.parse(JSON.stringify(t))
                },
                SET_ISALLOWAIGC(e, t) {
                    e.isAllowAigc = t
                },
                SET_AIGCDOMAINMAP(e, t) {
                    e.aigcDomainMap = t
                }
            }
              , d = {
                initDictDomainFromLS({commit: e, state: t}, n) {
                    var o = r.A.get(`${n}`);
                    e(i, null !== o ? o : "0")
                },
                async fetchDomainData({commit: e, state: t}, n) {
                    var a = await o.A.get("https://doctrans-service.youdao.com/common/enums/list?key=domain&_=" + +new Date);
                    a.data.data && (e(s, a.data.data),
                    e(c, a.data.data))
                },
                updateDomainMap({commit: e, state: t}) {
                    if (0 !== t.aigcDomainMap.length) {
                        const e = t.textTransDomainMap.length;
                        t.aigcDomainMap.forEach(((n,o)=>{
                            t.textTransDomainMap.push({
                                str: String(e + o),
                                msg: n,
                                from: "aigc"
                            })
                        }
                        ))
                    }
                }
            }
              , m = {
                getDomainLabelByValue: e=>t=>{
                    let n = "";
                    for (var o = 0; o < e.domainMap.length; o += 1)
                        if (t === e.domainMap[o].str) {
                            n = e.domainMap[o].msg;
                            break
                        }
                    return n
                }
                ,
                getTextDomainLabelByValue: e=>t=>{
                    let n = "";
                    for (var o = 0; o < e.textTransDomainMap.length; o += 1)
                        if (t === e.textTransDomainMap[o].str) {
                            n = e.textTransDomainMap[o].msg;
                            break
                        }
                    return n
                }
            };
            t["default"] = {
                state: l,
                mutations: u,
                actions: d,
                getters: m
            }
        },
        36032: function(e, t, n) {
            "use strict";
            n.r(t),
            n.d(t, {
                default: function() {
                    return u
                }
            });
            var o = n(95457);
            const a = "UPDATE_LANGUAGE_MAP";
            var r = {
                UPDATE_LANGUAGE_MAP: a
            };
            const i = {
                languageMap: {},
                rtlLanguageList: ["ar"]
            }
              , s = {
                [r.UPDATE_LANGUAGE_MAP](e, t) {
                    e.languageMap = t
                }
            }
              , c = {
                async fetchLanguageData({commit: e, state: t}, n) {
                    const a = await (0,
                    o.Jt)("https://api-overmind.youdao.com/openapi/get/luna/dict/luna-front/prod/langType");
                    a.data.value && e(r.UPDATE_LANGUAGE_MAP, a.data.value)
                }
            }
              , l = {
                termSpecifyData(e) {
                    return e.languageMap.term ? e.languageMap.term.specify : []
                },
                isTermLanguageSupport(e, t, n) {
                    const o = `${n.transInfo.lanFrom}2${n.transInfo.lanTo}`;
                    return !!t.termSpecifyData.find((e=>e.code === o))
                }
            };
            var u = {
                state: i,
                mutations: s,
                actions: c,
                getters: l
            }
        },
        37180: function(e, t, n) {
            "use strict";
            n.r(t);
            const o = {
                isLogin: !0,
                isSvip: !1,
                isVip: !1,
                optionAvatar: "",
                nickname: "",
                isStudent: !1
            }
              , a = {
                isLogin: e=>e.isLogin,
                optionAvatar: e=>e.optionAvatar,
                nickname: e=>e.nickname,
                isSvip: e=>e.isSvip,
                isVip: e=>e.isVip,
                isStudent: e=>e.isStudent
            }
              , r = {
                setOptionAvatar: ({commit: e},t)=>{
                    e("SET_OPTIONAVATAR", t)
                }
                ,
                setNickName: ({commit: e},t)=>{
                    e("SET_NICKNAME", t)
                }
                ,
                setLogin: ({commit: e},t)=>{
                    e("SET_LOGIN", t)
                }
                ,
                setSvip: ({commit: e},t)=>{
                    e("SET_SVIP", t)
                }
                ,
                setVip: ({commit: e},t)=>{
                    e("SET_VIP", t)
                }
                ,
                setIsStudent: ({commit: e},t)=>{
                    e("SET_IS_STUDENT", t)
                }
            }
              , i = {
                SET_OPTIONAVATAR(e, t) {
                    e.optionAvatar = t
                },
                SET_NICKNAME(e, t) {
                    e.nickname = t
                },
                SET_LOGIN(e, t) {
                    e.isLogin = t
                },
                SET_SVIP(e, t) {
                    e.isSvip = t
                },
                SET_VIP(e, t) {
                    e.isVip = t
                },
                SET_IS_STUDENT(e, t) {
                    e.isStudent = t
                }
            };
            t["default"] = {
                namespaced: !0,
                state: o,
                getters: a,
                mutations: i,
                actions: r
            }
        },
        87087: function(e, t, n) {
            "use strict";
            n.r(t),
            n.d(t, {
                default: function() {
                    return u
                }
            });
            n(44114);
            var o = n(34917)
              , a = n(62512);
            function r(e) {
                window.YoudaoSelector && (window.YoudaoSelector.Config.select = e ? "on" : "off")
            }
            const i = {
                secretKey: "",
                secretAIKey: "",
                dictResult: {},
                decodeKey: "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
                decodeIv: "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4",
                allowStroke: !1,
                showPjm: !1,
                showRomanPronunciation: !1,
                showWordsNumber: !0,
                originResultId: "",
                originResultText: "",
                sourceText: "",
                selectedSourceText: "",
                historyList: [],
                isAfterProcessLoadng: !1,
                keyfrom: "",
                producting: !1,
                guideFreeTimes: 0,
                isInsertFromPaste: !1,
                firstTwoOriginText: "",
                isENandZH: !1,
                homeOriginText: "",
                dialogs: [],
                dialogInfo: {},
                suggPrompts: "",
                guideFromOther: {},
                remainTime: 0
            }
              , s = {
                secretKey: e=>e.secretKey,
                secretAIKey: e=>e.secretAIKey,
                dictResult: e=>e.dictResult,
                suggPrompts: e=>e.suggPrompts,
                originResultId: e=>e.originResultId,
                originResultText: e=>e.originResultText,
                sourceText: e=>e.sourceText,
                guideFreeTimes: e=>e.guideFreeTimes,
                historyList: e=>e.historyList,
                isAfterProcessLoadng: e=>e.isAfterProcessLoadng,
                selectedSourceText: e=>e.selectedSourceText,
                producting: e=>e.producting,
                isInsertFromPaste: e=>e.isInsertFromPaste,
                firstTwoOriginText: e=>e.firstTwoOriginText,
                homeOriginText: e=>e.homeOriginText,
                isENandZH: e=>e.isENandZH
            }
              , c = {
                fetchAITranslateSecretKey: async({commit: e},t)=>{
                    const n = "ai-translate-llm-pre"
                      , a = "EZAmCfVOH2CrBGMtPrtIPUzyv3bheLdk"
                      , r = localStorage.getItem("yduuid")
                      , i = localStorage.getItem("ydtoken") || void 0;
                    return new Promise((t=>{
                        o.A.getAITranslateSecretKey({
                            keyid: n,
                            token: i
                        }, a, r).then((n=>{
                            0 === n.code && (e("UPDATE_SECRET_AI_KEY", n.data.secretKey),
                            n.data.token && localStorage.setItem("ydtoken", n.data.token),
                            t(n.data.secretKey))
                        }
                        )).catch((e=>{}
                        ))
                    }
                    ))
                }
                ,
                fetchTextTranslateSecretKey: async({commit: e},t)=>{
                    const n = "webfanyi-key-getter"
                      , a = "asdjnjfenknafdfsdfsd";
                    return new Promise((t=>{
                        o.A.getTextTranslateSecretKey({
                            keyid: n
                        }, a).then((n=>{
                            0 === n.code && n.data.secretKey && (e("UPDATE_SECRET_KEY", n.data.secretKey),
                            e("UPDATE_DECODE_KEY", n.data.aesKey),
                            e("UPDATE_DECODE_IV", n.data.aesIv),
                            t(n.data.secretKey))
                        }
                        )).catch((e=>{}
                        ))
                    }
                    ))
                }
                ,
                setDictResult: ({commit: e},t)=>{
                    e("SET_DICTRESULT", t)
                }
                ,
                initTextTranslateSettingStore: ({commit: e},t)=>{
                    const n = a.A.get("allowStroke")
                      , o = a.A.get("showPjm")
                      , r = a.A.get("showRomanPronunciation")
                      , i = a.A.get("showWordsNumber");
                    e("SET_ALLOW_STROKE", null !== n && n),
                    e("SET_SHOW_PJM", null !== o && o),
                    e("SET_SHOW_ROMAN_PRONUNCICATION", null !== r && r),
                    e("SET_SHOW_WORDS_NUMBER", null === i || i)
                }
                ,
                setOriginResultId: ({commit: e},t)=>{
                    e("UPDATE_ORIGIN_ID", t)
                }
                ,
                setSource: ({commit: e},t)=>{
                    e("UPDATE_SOURCE", t)
                }
                ,
                setOriginResultText: ({commit: e},t)=>{
                    e("UPDATE_ORIGIN_TEXT", t)
                }
                ,
                addHistoryItem: ({commit: e},t)=>{
                    e("ADD_HISTORY_ITEM", t)
                }
                ,
                delHistoryItem: ({commit: e},t)=>{
                    e("DEL_HISTORY_ITEM", t)
                }
                ,
                removeHistoryList: ({commit: e})=>{
                    e("REMOVE_HISTORY_LIST")
                }
                ,
                updateHistoryList: ({commit: e},t)=>{
                    e("UPDATA_HISTORY_LIST", t)
                }
                ,
                updateDialogs: ({commit: e},t)=>{
                    e("UPDATA_DIALOGS", t)
                }
            }
              , l = {
                ISWNANDZH(e, t) {
                    e.isENandZH = t
                },
                HOMEORIGINTEXT(e, t) {
                    e.homeOriginText = t
                },
                FIRSTTWOORIGINTEXT(e, t) {
                    e.firstTwoOriginText = t
                },
                ISPASTE_ORIGIN_TEXT(e, t) {
                    e.isInsertFromPaste = t
                },
                UPDATE_SECRET_KEY(e, t) {
                    e.secretKey = t
                },
                UPDATE_DECODE_KEY(e, t) {
                    e.decodeKey = t
                },
                UPDATE_DECODE_IV(e, t) {
                    e.decodeIv = t
                },
                UPDATE_SECRET_AI_KEY(e, t) {
                    e.secretAIKey = t
                },
                SET_DICTRESULT(e, t) {
                    e.dictResult = t
                },
                SET_ALLOW_STROKE(e, t) {
                    e.allowStroke = t,
                    a.A.set("allowStroke", t),
                    r(t)
                },
                SET_SHOW_PJM(e, t) {
                    e.showPjm = t,
                    a.A.set("showPjm", t)
                },
                SET_SHOW_ROMAN_PRONUNCICATION(e, t) {
                    e.showRomanPronunciation = t,
                    a.A.set("showRomanPronunciation", t)
                },
                SET_SHOW_WORDS_NUMBER(e, t) {
                    e.showWordsNumber = t,
                    a.A.set("showWordsNumber", t)
                },
                UPDATE_SUGG_PROMPTS(e, t) {
                    e.suggPrompts = t,
                    a.A.set("suggPrompts", t)
                },
                UPDATE_ORIGIN_ID(e, t) {
                    e.originResultId = t
                },
                UPDATE_SOURCE(e, t) {
                    e.sourceText = t
                },
                UPDATE_ORIGIN_TEXT(e, t) {
                    e.originResultText = t
                },
                UPDATE_GUIDEFREETIMES(e, t) {
                    e.guideFreeTimes = t
                },
                ADD_HISTORY_ITEM(e, t) {
                    e.historyList.push(t)
                },
                ADD_HISTORY(e, t) {
                    e.historyList = t
                },
                DEL_HISTORY_ITEM(e, t) {
                    const n = e.historyList.findIndex((e=>e.id == t));
                    -1 !== n && e.historyList.splice(n, 1)
                },
                REMOVE_HISTORY_LIST(e) {
                    e.historyList = []
                },
                UPDATA_HISTORY_LIST(e, t) {
                    const n = e.historyList.findIndex((e=>e.id === t.id));
                    -1 !== n && e.historyList.splice(n, 1, t)
                },
                UPDATE_ISAFTERPROCESS_LOADING(e, t) {
                    e.isAfterProcessLoadng = t
                },
                UPDATA_SELECTED_SOURCE_TEXT(e, t) {
                    e.selectedSourceText = t
                },
                UPDATE_KEYFROM(e, t) {
                    e.keyfrom = t
                },
                UPDATE_PRODUCTING(e, t) {
                    e.producting = t
                },
                UPDATA_DIALOGS(e, t) {
                    const n = e.dialogs.findIndex((e=>e.roundId === t.roundId));
                    -1 !== n && e.dialogs.splice(n, 1, t)
                },
                ADD_DIALOGS(e, t) {
                    e.dialogs.push(t)
                },
                RESET_DIALOGS(e) {
                    e.dialogs = []
                },
                RECOVER_DIALOGS(e, t) {
                    e.dialogs = t
                },
                UPDATA_DIALOGINFO(e, t) {
                    0 !== Object.keys(t).length ? (t.id && (e.dialogInfo.id = t.id),
                    t.functionEnglishName && (e.dialogInfo.functionEnglishName = t.functionEnglishName)) : e.dialogInfo = t
                },
                UPDATA_GUIDEFROMOTHER(e, t) {
                    e.guideFromOther = t
                },
                SET_REMAIN_TIME(e, t) {
                    e.remainTime = t
                }
            };
            var u = {
                state: i,
                getters: s,
                mutations: l,
                actions: c
            }
        },
        37282: function(e, t, n) {
            "use strict";
            var o = n(27380);
            const a = {}
              , r = (0,
            o.A)();
            a.$on = r.on,
            a.$off = r.off,
            a.$emit = r.emit,
            t.A = a
        },
        45358: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return s
                }
            });
            n(84864),
            n(57465),
            n(27495),
            n(25440);
            var o = n(53007);
            const a = ()=>{
                o.A.baiduCallback({
                    loginUrl: window.location.href,
                    type: 49
                })
            }
              , r = (e,t)=>{
                const n = new Date
                  , o = new Date(e)
                  , a = new Date(t);
                return n >= o && n <= a
            }
              , i = (e,t)=>{
                let n;
                return function(...o) {
                    const a = this;
                    clearTimeout(n),
                    n = setTimeout((()=>{
                        e.apply(a, o)
                    }
                    ), t)
                }
            }
              , s = (e,t)=>{
                let n, o = 0;
                return function() {
                    const a = this
                      , r = arguments
                      , i = +Date.now();
                    i - o >= t ? (clearTimeout(n),
                    e.apply(a, r),
                    o = i) : (clearTimeout(n),
                    n = setTimeout((()=>{
                        e.apply(a, r)
                    }
                    ), t))
                }
            }
              , c = (e,t)=>{
                const n = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "H+": t.getHours(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                /(y+)/.test(e) && (e = e.replace(RegExp.$1, `${t.getFullYear()}`.substr(4 - RegExp.$1.length)));
                for (const o in n)
                    new RegExp(`(${o})`).test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? n[o] : `00${n[o]}`.substr(`${n[o]}`.length)));
                return e
            }
              , l = ()=>/macintosh|mac os x/i.test(navigator.userAgent)
              , u = (e,t="")=>{
                const n = document.createElement("a");
                n.download = t,
                n.style.display = "none",
                n.href = e,
                document.body.appendChild(n),
                n.click(),
                document.body.removeChild(n)
            }
              , d = e=>{
                var t = e.split("?")[1]
                  , n = {};
                if (!t)
                    return n;
                t = t.split("&");
                for (var o = 0, a = t.length; o < a; o++) {
                    var r = t[o].split("=");
                    n[r[0]] = decodeURIComponent(r[1])
                }
                return n
            }
              , m = e=>{
                if (navigator.clipboard)
                    navigator.clipboard.writeText(e);
                else {
                    var t = document.createElement("textarea");
                    document.body.appendChild(t),
                    t.style.position = "fixed",
                    t.style.clip = "rect(0 0 0 0)",
                    t.style.top = "10px",
                    t.value = e,
                    t.select(),
                    document.execCommand("copy", !0),
                    document.body.removeChild(t)
                }
            }
              , p = function(e, t) {
                if (!Object.keys(t).length)
                    return e;
                e += "?";
                for (let n in t)
                    e += `${encodeURIComponent(n)}=${encodeURIComponent(t[n])}&`;
                return e.substring(0, e.length - 1)
            }
              , g = e=>{
                const t = new RegExp(`(\\?|#|&)${e}=([^&#]*)(&|#|$)`)
                  , n = window.location.href.match(t);
                return decodeURIComponent(n ? n[2] : "")
            }
            ;
            t.A = {
                isDuringDate: r,
                debounce: i,
                throttle: s,
                dateFormat: c,
                isMac: l,
                downloadFile: u,
                getUrlParams: d,
                getParameter: g,
                baiduCallback: a,
                genUrl: p,
                copy: m
            }
        },
        62512: function(e, t, n) {
            "use strict";
            n(33110);
            let o;
            const a = "fanyiweb"
              , r = window.localStorage;
            function i(e) {
                return `${a}-${e}`
            }
            o = "undefined" !== typeof localStorage && null !== localStorage && {
                set: function(e, t) {
                    var n = JSON.stringify(t);
                    e = i(e);
                    try {
                        return r.setItem(e, n)
                    } catch (o) {
                        "QuotaExceededError" === o.name && (r.clear(),
                        r.setItem(e, n))
                    }
                },
                get: function(e) {
                    var t = JSON.parse(r.getItem(i(e)));
                    return t
                },
                remove: function(e) {
                    r.removeItem(i(e))
                }
            },
            t.A = o
        },
        96091: function(e, t, n) {
            "use strict";
            var o = n(8661);
            function a() {
                return new Promise((e=>{
                    o.Ay.load().then((t=>{
                        t.get().then((t=>{
                            console.log(t.visitorId, "visitorId"),
                            localStorage.setItem("yduuid", t.visitorId),
                            e(t.visitorId)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            t.A = a
        },
        97815: function(e, t, n) {
            "use strict";
            var o = n(58788)
              , a = (n(44114),
            n(26910),
            n(62953),
            n(21396))
              , r = n.n(a);
            const i = "key"
              , s = (e={},t)=>{
                const n = (0,
                o.A)({}, e);
                Object.keys(n).forEach((e=>{
                    "" === n[e] && delete n[e]
                }
                ));
                const a = Object.keys(n).sort().filter((e=>!(void 0 === n[e])));
                a.push(i),
                n[i] = t;
                const s = `${a.map((e=>`${e}=${n[e]}`)).join("&")}`;
                return [r().MD5(s).toString(r().enc.Hex), a.join(",")]
            }
              , c = (e,t,n,a,r,i,c,l)=>{
                const u = (0,
                o.A)({
                    product: a,
                    appVersion: c || 1,
                    client: l || "web",
                    mid: 1,
                    vendor: "web",
                    screen: 1,
                    model: 1,
                    imei: 1,
                    network: "wifi",
                    keyfrom: r || "fanyi.web",
                    keyid: n,
                    mysticTime: Date.now(),
                    yduuid: i || "abcdefg",
                    abtest: 0
                }, e);
                console.log("requestData", u);
                const [d,m] = s(u, t);
                return Object.assign(u, {
                    sign: d,
                    pointParam: m
                }),
                u
            }
              , l = (e,t,n,a,r,i,c,l)=>{
                const u = (0,
                o.A)({
                    product: a,
                    appVersion: c || 1,
                    client: l || "web",
                    mid: 1,
                    vendor: "web",
                    screen: 1,
                    model: 1,
                    imei: 1,
                    network: "wifi",
                    keyfrom: r || "fanyi.web",
                    keyid: n,
                    mysticTime: Date.now(),
                    yduuid: i || "abcdefg",
                    abtest: 0
                }, e)
                  , [d,m] = s(u, t);
                Object.assign(u, {
                    sign: d,
                    pointParam: m
                });
                const p = new FormData
                  , g = Object.keys(u);
                return g.forEach((e=>{
                    p.append(e, u[e])
                }
                )),
                p
            }
            ;
            t.A = {
                genSign: s,
                genParamV3: c,
                genParamV3FormData: l
            }
        },
        19358: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return m
                }
            });
            var o = n(6301)
              , a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQmSURBVHgB7ZrPSxtBFMdffxwEe1C8BEW7hyKCBT0qHgw00IJgK/ijh2IFqznooR78H4p40GPFg96MCjaC0IKFVAj2GKGCoodFjFg8qKiQQ8HO13VkG8lmZvaHJp0PPLKzmdW87743+2Z2iDQajUaj0Wg0Go3mP+QBBU+ZzeycMMswO6QACUKAEmaNzOqYha7bTnARUsxMsoTxDT8FMJiFrz/dYDL7yWyLfMAPAQzyxvFsEAlz5HGKeCkAQjvMrIn8BdGQICtVXOOVABjQ+uj2wOYXiIYZ8mB8eETuwcD2gdkTCg5EGwZVk9k5ucCtAHC+j/KP7H6A//mc2S65EMGNAAj3dxTsnc/mMVki/CLFMUFVAKiPsA8q552ACEgH1A1/SBJVASLMntH9ATcEQuySJA9JHuS93486FfCbDJJERYC3dH8JkySyAiDX7kPe58IgySiQFUA69Gtqakqi0ejT5uZmYeH4NaRGWKazTCUIBz6SJKlUqqehoaHu+Pj4pK2tbXZ9fd2xeoNQKysr78vLy8t2dnbM2traWZLnEwk+FmUiwCAF2N3EoElwCI45RYLdebRLS0tVC6xG0Y4yAgj/UTv9/f0xfsxFQIhn98M5u/NgeHg4TmrUiXaUESBECiwtLR2Oj4/fOAIHWRr8IwKOcc7uPK7BtaSG8G8VFUBkJScno6OjKbsIlZWVodXV1R7exjHO8fb09PQ3XEPq4LcKDbqig6BB1qTHFfPz8+Gurq5W3k4mk1dOtrS03KTX4uJigvX5Qe6ZIWu26IioAPiBb8gDskWw46Hz4AtZ8wNHVCpBV3R3dycWFhZuOemx88IELgC4vLwUOhcEgQsQi8XCLApupQC7+2GWHq0UMKLTYYzQws/WXExNTTX19va+4O2NjY2ts7Oz84qKiqsRu76+3qiurs4sLy+nyT1YPM27ZhhYBIyNjTUODAy85O2Dg4PD9vb2eCQSieGYn2eF0yv0Jfd4Xgorg4kNe66/5m3MC1jZO7u3t5eB4dguAvoODg4apI7wKzbfBejo6AhNTEzcrCHwSREc5+dw3NnZGcN3/Nzk5GQPriU1hCtI3+uAdDod5VVevhlh9mQIUVFVVfWZ5BGqAYDvEXBxcXF1p0Wmw/gOfXgkHB0dqb74MEU7+v4UiMfj28yR9NDQ0PfNzc286/f7+/uZtbW1bSbC75GRkeTp6ansSq9J1hNAiMBL4QDAC1ThN8l3Ugn6CFJG6jV6sQkwJ9m/qARA3ksvoBSLAAj9BClQDALwvQJKL0cLXQA4jbxX3ihRyALA+RlyuWfoMRUmnm2RKUQBPN0kJSqASXePSZbjJnmI6FwAamOGpjo9dYNJ1uwuQT7sGpVJga/Xn16s1jjBFzNQ0qbIo1DPhco+QUSCQd5zYjONRqPRaDQajUbjL38BFOZkzE3BMTIAAAAASUVORK5CYII=";
            const r = ["src"];
            function i(e, t, n, i, s, c) {
                return i.showBanner ? ((0,
                o.uX)(),
                (0,
                o.CE)("div", {
                    key: 0,
                    class: "banner",
                    onClick: i.goBanner
                }, [(0,
                o.Lk)("img", {
                    class: "banner-img",
                    src: i.picture
                }, null, 8, r), (0,
                o.Lk)("img", {
                    class: "close",
                    src: a,
                    onClick: (0,
                    o.D$)(i.closeBanner, ["stop"])
                })])) : (0,
                o.Q3)("", !0)
            }
            var s = n(91588)
              , c = n(45358)
              , l = {
                __name: "Banner",
                setup(e, {expose: t}) {
                    t();
                    const n = (0,
                    o.KR)("")
                      , a = (0,
                    o.KR)("")
                      , r = (0,
                    o.KR)(!0)
                      , i = (0,
                    o.nI)()
                      , l = i.appContext.config.globalProperties;
                    (0,
                    o.sV)((()=>{
                        s.A.getBannerInfos().then((e=>{
                            const t = e.data.value;
                            n.value = t.url,
                            a.value = t.picture,
                            c.A.isDuringDate(t.startTime, t.endTime) && null === l.$cookies.get("bannercookie") ? r.value = !0 : r.value = !1
                        }
                        ))
                    }
                    ));
                    const u = ()=>{
                        l.$cookies.set("bannercookie", !0, 86400),
                        r.value = !1
                    }
                      , d = ()=>{
                        window.open(n.value)
                    }
                      , m = {
                        url: n,
                        picture: a,
                        showBanner: r,
                        internalInstance: i,
                        internalData: l,
                        closeBanner: u,
                        goBanner: d,
                        get service() {
                            return s.A
                        },
                        get util() {
                            return c.A
                        }
                    };
                    return Object.defineProperty(m, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                    m
                }
            }
              , u = n(66262);
            const d = (0,
            u.A)(l, [["render", i], ["__scopeId", "data-v-77236003"]]);
            var m = d
        },
        52670: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return l
                }
            });
            n(62953);
            var o = n(6301);
            const a = {
                class: "inner-content"
            };
            function r(e, t, n, r, i, s) {
                const c = (0,
                o.gN)("fixed");
                return (0,
                o.uX)(),
                (0,
                o.Wv)(o.Im, {
                    to: "body"
                }, [n.visible ? (0,
                o.bo)(((0,
                o.uX)(),
                (0,
                o.CE)("div", {
                    key: 0,
                    class: "pop-up-comp mask",
                    onClick: t[0] || (t[0] = (0,
                    o.D$)(((...e)=>r.close && r.close(...e)), ["self"]))
                }, [(0,
                o.Lk)("div", a, [(0,
                o.RG)(e.$slots, "content", {}, void 0, !0)])])), [[c]]) : (0,
                o.Q3)("", !0)])
            }
            var i = {
                name: "PopUp",
                props: {
                    visible: Boolean,
                    modalClosable: {
                        type: Boolean,
                        default: !0
                    }
                },
                setup(e, t) {
                    function n() {
                        e.modalClosable && t.emit("update:visible", !1)
                    }
                    return {
                        close: n
                    }
                },
                directives: {
                    fixed: {
                        mounted() {
                            const e = document.body.scrollTop || document.documentElement.scrollTop;
                            document.body.style.cssText += `position:fixed;top:-${e}px;width: 100%;`
                        },
                        unmounted() {
                            const {body: e} = document;
                            e.style.position = "static";
                            const {top: t} = e.style;
                            document.body.scrollTop = -parseInt(t, 10),
                            document.documentElement.scrollTop = -parseInt(t, 10),
                            e.style.top = ""
                        }
                    }
                }
            }
              , s = n(66262);
            const c = (0,
            s.A)(i, [["render", r], ["__scopeId", "data-v-909b0550"]]);
            var l = c
        },
        95124: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return u
                }
            });
            var o = n(6301);
            const a = {
                key: 0,
                class: "interfaceDialogMask"
            }
              , r = {
                class: "interfaceDialog-body"
            };
            function i(e, t, n, i, s, c) {
                return n.dialogVisible ? ((0,
                o.uX)(),
                (0,
                o.CE)("div", a, [(0,
                o.Lk)("div", {
                    class: (0,
                    o.C4)(["interfaceDialog", {
                        "interfaceDialog-default-style": n.withDialogStyle
                    }, {
                        isCenter: n.isCenter
                    }]),
                    style: (0,
                    o.Tr)({
                        width: c.pxStyle(n.width),
                        height: c.pxStyle(n.height),
                        top: c.pxStyle(n.top),
                        left: c.pxStyle(n.left)
                    }),
                    ref: "interfaceDialog"
                }, [(0,
                o.Lk)("div", r, [(0,
                o.RG)(e.$slots, "default", {}, void 0, !0)])], 6)])) : (0,
                o.Q3)("", !0)
            }
            var s = {
                name: "InterfaceDialog",
                components: {},
                props: {
                    dialogVisible: {
                        type: Boolean,
                        required: !0,
                        default: !1
                    },
                    width: {
                        type: [Number, String],
                        required: !0,
                        default: "auto"
                    },
                    height: {
                        type: [Number, String],
                        required: !0,
                        default: "auto"
                    },
                    top: {
                        type: [Number, String],
                        required: !0,
                        default: 0
                    },
                    left: {
                        type: [Number, String],
                        required: !0,
                        default: 0
                    },
                    withDialogStyle: {
                        type: Boolean,
                        default: !0
                    },
                    isCenter: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        promiseStatus: {}
                    }
                },
                methods: {
                    pxStyle(e) {
                        return this.isString(e) ? e : e + "px"
                    },
                    isString(e) {
                        return "string" === typeof e
                    },
                    isNumber(e) {
                        return "number" === typeof e
                    },
                    closeinterfaceDialog() {
                        this.$emit("closeDialog")
                    },
                    modalClickEventHandler(e) {
                        this.$refs.interfaceDialog && !this.$refs.interfaceDialog.contains(e.target) && this.closeinterfaceDialog()
                    }
                },
                watch: {
                    dialogVisible: {
                        handler: function(e) {
                            e ? this.$nextTick((()=>{
                                setTimeout((()=>{
                                    document.body.addEventListener("click", this.modalClickEventHandler, !0)
                                }
                                ), 10)
                            }
                            )) : document.body.removeEventListener("click", this.modalClickEventHandler, !0)
                        }
                    }
                }
            }
              , c = n(66262);
            const l = (0,
            c.A)(s, [["render", i], ["__scopeId", "data-v-c8935532"]]);
            var u = l
        },
        84870: function(e, t, n) {
            var o = {
                "./domain.js": 57185,
                "./language.js": 36032,
                "./login.js": 37180,
                "./text.js": 87087
            };
            function a(e) {
                var t = r(e);
                return n(t)
            }
            function r(e) {
                if (!n.o(o, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return o[e]
            }
            a.keys = function() {
                return Object.keys(o)
            }
            ,
            a.resolve = r,
            e.exports = a,
            a.id = 84870
        },
        78982: function() {},
        47790: function() {},
        73776: function() {},
        77965: function() {},
        50477: function() {},
        66089: function() {},
        79368: function() {},
        64688: function() {},
        51069: function() {},
        15340: function() {},
        79838: function() {}
    });
