 i = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeiLxP4ZavN8qhI+x+whAiFpGWpY9y1AHSQC86qEMBVnmqC8vdZAfxxuQWeQaeMWG07lXhXegTjZ5wn9pHnjg15wbjRGSTfwuZxSFW6sS3GYlrg40ckqAagzIjkE+5OLPsdjVYQyhLfKxj/79oOfjl/lV3rQnk/SSczHW0PEyUbQIDAQAB",
    a = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            var t = n(772), r = new t.JSEncrypt;
            r.setPublicKey(i);
            var a = r.encrypt(e);
            return a
    }


console.log(a('123123'))