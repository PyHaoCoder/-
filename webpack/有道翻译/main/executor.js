function y(e) {
    let i = n(88276)
    return (new i).update(e).digest()
}


N = (e, t, n) => {
    var createDecipheriv = n(30125).createDecipheriv
    const o = Buffer.alloc(16, y(t))
        , a = Buffer.alloc(16, y(n))
        , i = createDecipheriv("aes-128-cbc", o, a);
    let c = i.update(e, "base64", "utf-8");
    return c += i.final("utf-8"),
        c
}

ee = "Z21kD9ZK1ke6ugku2ccWu-MeDWh3z252xRTQv-wZ6jddVo3tJLe7gIXz4PyxGl73208BccOnhyTq3_8LBeYxv2Ygj6JzlmmVOdtvpEa37Z1qbHKNfpSgXb9SV8LMJlWaSqXrwfC_WHd9Dc9q1bzVJMDdrEGPYts59qYchVlhqCFgvR9h9Y4w0M6NcXjOiLXegYPuAOYrrj4pMfjnwuUPVCXUu3KWgmTVKmcGImDFHwJf2AcUvQ46rK9c4vh8oxwYQQnO9D0jLU_i66lh9cEy3E-WW7N0IwSfdbx6B1jo26c0x5GZWt-MGQETlTsqbbs7wBLBowUL3JQJjhFPiawXYQwLNCI8QmPAGlz0ioVICIYd7G0ZEzqpCh7HNg1H9ajAB0J7HjmFueIse7Kc9ak1MuHWX2zqBpzTYHMuN9dZYXEDTohqI8XZInKtC5KgWhPswkjv2gY26BT0tmnQWwDqE6aNGLS779z4hg5eiGKRJyJ8FGoGXRzw0_Zx_2GRttmJ0cD8yB2RqfkoeESPuFibgmW5jJ4N-oFvT-eJAOV_ILaXg9s6K5oplXUX8MPIs1nyKJt4gA8FDn4zYtlmA3W8kSWQaHfErx89y2H3hnVzdGPLFuO7vh6IsGdt4jkjDAhkb8QdAj1JYh4HJCtYI5zljBvVd-xKxftclvZuOrge2kGdx2HaYBHTOPvQwO443oamOGn6-GdAtUvFaS2Hob0gGffLnn_lMjmrkURN-pBu9-eWW91UQrpIuMHzxw565VW_JlsLIryLQ-XyijNFKaUJkny9zfZT7qcVOXLIg1VwP7AdigiHwNCP0Mn6M6SL-V4zpZiAGwkcQJ3_Gv2FJBW049BvI6NgAhsFEvN5Dl3Fw9tRU2aklOgIYaX6NQIVwOJxGSIR9V-bxehj3F5v8WfkvM-TMwtzQKq56kbsYgIPSHT9iM6M4bzLAvbIjqbaNYApOen20xsTvBufX7HMJ9dN7TkLo-sUZBRcgf1bawUIUShMNbcQkjciKc7e8aOc0JNNYNx7eT4Ve9FdMBN0K6f2pO3dsNblYc-WMG6MDrpT3qAsRCHaL8YPmqHMHG3IlS--mFIwJwkh4-4 UhavcKfQW2NioOCWipKjV7MXb_f33BBKn5ixg8Lk7j8T9ozDnRj3IHhTSZHARXShreO3JDpLHGTBXTZ-V4F7RByu5nylHNsM="
data = {
    "secretKey": "fsdsogkndfokasodnaso",
    "aesKey": "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
    "aesIv": "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4"
}
console.log(N(ee, data.aesKey, data.aesIv))