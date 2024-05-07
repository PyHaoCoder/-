c = n("b85c")
u = n("6821")
l = n.n(u)
d = function (e) {
    e._ts = (new Date).getTime() - 9999;
    var t, n = Object.keys(e), i = "", o = Object(c["a"])(n.sort());
    try {
        for (o.s(); !(t = o.n()).done;) {
            var a = t.value;
            void 0 !== e[a] && null !== e[a] && (i += "".concat(a, "=").concat(e[a], ","))
        }
    } catch (r) {
        o.e(r)
    } finally {
        o.f()
    }
    return console.log("signature:", i),
        l()(i)
}

console.log(d({
    "keyword": "二次元",
    "page": 1,
    "limit": 12,
    "_platform": "web",
    "_versioin": "0.2.5"
}));