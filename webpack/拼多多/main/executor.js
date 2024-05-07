p = {
    "publicKey": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJpaLPONg3qWfi2kdwauqOT3L7AEK6lrMZqKYZv0ikWPZtzTqnVLMeolsE7x3Sc4UxS6ews+WS0ijwIEU8GAbhr2aJh0F+o6bpYQgWosHBts4lMW/IdtKg45DSGgBWg8gWDTK7K+T+zWfTjEQGwEgNHsZ2NbQBtTEZ35CDWUP7iQIDAQAB",
    "version": "1"
}

g = o(1519)

i = function (A, e) {
    var o = new g.a;
    return o.setPublicKey(e.publicKey),
        o.encrypt(A)
}

console.log(i('123123', p))