crypto = require('crypto')

function get_uuid() {
    "use strict";
    var r, i = new Uint8Array(16);

    function a() {
        return crypto.webcrypto.getRandomValues(i)
    }

    var s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (var o = function (e) {
        return "string" == typeof e && s.test(e)
    }, l = [], c = 0; c < 256; ++c)
        l.push((c + 256).toString(16).substr(1));
    var u = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            ,
            n = (l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]).toLowerCase();
        if (!o(n))
            throw TypeError("Stringified UUID is invalid");
        return n
    };
    return function (e, t, n) {
        var r = (e = e || {}).random || (e.rng || a)();
        if (r[6] = 15 & r[6] | 64,
            r[8] = 63 & r[8] | 128,
            t) {
            n = n || 0;
            for (var i = 0; i < 16; ++i)
                t[n + i] = r[i];
            return t
        }
        return u(r)
    }()
}

Fo = n(37), Bo = n.n(Fo)
encrypt = function (t) {
    var e = Bo.a.enc.Utf8.parse(t)
        , n = Bo.a.enc.Utf8.parse("6tPQNmNQn9nymhsb")
        , o = Bo.a.enc.Utf8.parse("ovlJ3M7tQR8P7Gc7")
        , i = Bo.a.AES.encrypt(e, n, {
        iv: o,
        mode: Bo.a.mode.CBC,
        padding: Bo.a.pad.Pkcs7
    });
    return Bo.a.enc.Base64.stringify(i.ciphertext)
}

var C = get_uuid()
    , x = {
    timestamp: Date.now(),
    token: C.replace(/-/g, "")
};

console.log(encrypt(JSON.stringify(x)))