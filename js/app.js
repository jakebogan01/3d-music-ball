(function(e) {
        function n(n) {
            for (var i, o, r = n[0], c = n[1], l = n[2], u = 0, h = []; u < r.length; u++)
                o = r[u],
                Object.prototype.hasOwnProperty.call(a, o) && a[o] && h.push(a[o][0]),
                    a[o] = 0;
            for (i in c)
                Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
            d && d(n);
            while (h.length)
                h.shift()();
            return s.push.apply(s, l || []),
                t()
        }
        function t() {
            for (var e, n = 0; n < s.length; n++) {
                for (var t = s[n], i = !0, r = 1; r < t.length; r++) {
                    var c = t[r];
                    0 !== a[c] && (i = !1)
                }
                i && (s.splice(n--, 1),
                    e = o(o.s = t[0]))
            }
            return e
        }
        var i = {}
            , a = {
            app: 0
        }
            , s = [];
        function o(n) {
            if (i[n])
                return i[n].exports;
            var t = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(t.exports, t, t.exports, o),
                t.l = !0,
                t.exports
        }
        o.m = e,
            o.c = i,
            o.d = function(e, n, t) {
                o.o(e, n) || Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t
                })
            }
            ,
            o.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            o.t = function(e, n) {
                if (1 & n && (e = o(e)),
                8 & n)
                    return e;
                if (4 & n && "object" === typeof e && e && e.__esModule)
                    return e;
                var t = Object.create(null);
                if (o.r(t),
                    Object.defineProperty(t, "default", {
                        enumerable: !0,
                        value: e
                    }),
                2 & n && "string" != typeof e)
                    for (var i in e)
                        o.d(t, i, function(n) {
                            return e[n]
                        }
                            .bind(null, i));
                return t
            }
            ,
            o.n = function(e) {
                var n = e && e.__esModule ? function() {
                            return e["default"]
                        }
                        : function() {
                            return e
                        }
                ;
                return o.d(n, "a", n),
                    n
            }
            ,
            o.o = function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
            ,
            o.p = "/";
        var r = window["webpackJsonp"] = window["webpackJsonp"] || []
            , c = r.push.bind(r);
        r.push = n,
            r = r.slice();
        for (var l = 0; l < r.length; l++)
            n(r[l]);
        var d = c;
        s.push([0, "chunk-vendors"]),
            t()
    }
)({
    0: function(e, n, t) {
        e.exports = t("56d7")
    },
    "0069": function(e, n, t) {},
    "26a9": function(e, n, t) {
        "use strict";
        t("3af2")
    },
    "3af2": function(e, n, t) {},
    "4d98": function(e, n, t) {},
    "4da0": function(e, n, t) {
        "use strict";
        t("4d98")
    },
    "54d1": function(e, n, t) {},
    "56d7": function(e, n, t) {
        "use strict";
        t.r(n);
        t("e260"),
            t("e6cf"),
            t("cca6"),
            t("a79d");
        var i = t("7a23");
        function a(e, n, t, a, s, o) {
            var r = Object(i["j"])("LoadingScreen")
                , c = Object(i["j"])("TitleCard")
                , l = Object(i["j"])("ThreeScene");
            return Object(i["g"])(),
                Object(i["c"])(i["a"], null, [Object(i["f"])(r), Object(i["f"])(c), Object(i["f"])(l)], 64)
        }
        var s = {
            class: "threeScene"
        }
            , o = {
            class: "container",
            ref: "container"
        };
        function r(e, n, t, a, r, c) {
            return Object(i["g"])(),
                Object(i["c"])("div", s, [Object(i["f"])("div", o, null, 512)])
        }
        var c = t("d4ec")
            , l = t("bee2")
            , d = (t("b0c0"),
            t("5a89"))
            , u = t("4721")
            , h = (t("7db0"),
            t("34ad"))
            , p = new d["G"]
            , v = p
            , m = new d["pb"](v)
            , b = "/course/assets/textures/"
            , f = [{
            url: b + "shiny-black-metal.png",
            name: "shiny-black-metal"
        }, {
            url: b + "satin-black-metal.png",
            name: "satin-black-metal"
        }, {
            url: b + "white-plastic.png",
            name: "white-plastic"
        }]
            , x = [];
        f.forEach((function(e) {
                var n = m.load(e.url);
                x.push({
                    texture: n,
                    name: e.name
                })
            }
        ));
        var y = x
            , w = (t("5cc6"),
            t("9a8c"),
            t("a975"),
            t("735e"),
            t("c1ac"),
            t("d139"),
            t("3a7b"),
            t("d5d6"),
            t("82f8"),
            t("e91f"),
            t("60bd"),
            t("5f96"),
            t("3280"),
            t("3fcc"),
            t("ca91"),
            t("25a1"),
            t("cd26"),
            t("3c5d"),
            t("2954"),
            t("649e"),
            t("219c"),
            t("170b"),
            t("b39a"),
            t("72f7"),
            t("d3b7"),
            t("159b"),
            t("a434"),
            function() {
                function e() {
                    Object(c["a"])(this, e),
                        this.bind(),
                        this.callbacks = [],
                        this.render(),
                        this.dt = 0,
                        this.then = Date.now()
                }
                return Object(l["a"])(e, [{
                    key: "subscribe",
                    value: function(e, n) {
                        this.callbacks.push({
                            name: e,
                            callback: n
                        })
                    }
                }, {
                    key: "unsubscribe",
                    value: function(e) {
                        var n = this;
                        this.callbacks.forEach((function(t, i) {
                                t.name == e && n.callbacks.splice(i, i + 1)
                            }
                        ))
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.dt = Date.now() - this.then,
                            requestAnimationFrame(this.render),
                            this.callbacks.forEach((function(e) {
                                    e.callback()
                                }
                            )),
                            this.then = Date.now()
                    }
                }, {
                    key: "bind",
                    value: function() {
                        this.subscribe = this.subscribe.bind(this),
                            this.unsubscribe = this.unsubscribe.bind(this),
                            this.render = this.render.bind(this)
                    }
                }]),
                    e
            }())
            , g = new w
            , j = g
            , z = function() {
            function e() {
                Object(c["a"])(this, e),
                    this.ctx,
                    this.audio,
                    this.audioSource,
                    this.analyser,
                    this.fdata,
                    this.playFlag = !1,
                    this.bind()
            }
            return Object(l["a"])(e, [{
                key: "init",
                value: function() {
                    this.initFlag || (this.initFlag = !0,
                        this.ctx = new AudioContext,
                        this.audio = new Audio("/course/assets/on-my-side.mp3"),
                        this.audio.currentTime = 45,
                        this.audioSource = this.ctx.createMediaElementSource(this.audio),
                        this.analyser = this.ctx.createAnalyser(),
                        this.analyser.smoothingTimeConstant = .8,
                        this.audioSource.connect(this.analyser),
                        this.audioSource.connect(this.ctx.destination),
                        this.fdata = new Uint8Array(this.analyser.frequencyBinCount))
                }
            }, {
                key: "play",
                value: function() {
                    this.audio.play(),
                        this.playFlag = !0,
                        j.subscribe("fftUpdate", this.update)
                }
            }, {
                key: "pause",
                value: function() {
                    this.audio.pause(),
                        this.playFlag = !1,
                        j.unsubscribe("fftUpdate")
                }
            }, {
                key: "update",
                value: function() {
                    this.analyser.getByteFrequencyData(this.fdata)
                }
            }, {
                key: "bind",
                value: function() {
                    this.update = this.update.bind(this),
                        this.init = this.init.bind(this)
                }
            }]),
                e
        }()
            , O = new z
            , S = O
            , k = t("b9d8")
            , C = new k["a"]({
            width: 400
        })
            , M = C
            , P = function() {
            function e() {
                Object(c["a"])(this, e),
                    this.bind(),
                    this.params = {
                        icoSub: 2,
                        pillardSize: .42,
                        animSpeed: 1
                    },
                    this.pillards = new d["p"]
            }
            return Object(l["a"])(e, [{
                key: "init",
                value: function(e) {
                    var n = this;
                    this.scene = e,
                        this.pillard,
                        this.modelLoader = new h["a"](v),
                        this.bMatCap = new d["N"]({
                            matcap: y.find((function(e) {
                                    return "satin-black-metal" == e.name
                                }
                            )).texture
                        }),
                        this.wMatCap = new d["N"]({
                            matcap: y.find((function(e) {
                                    return "shiny-black-metal" == e.name
                                }
                            )).texture
                        }),
                        this.modelLoader.load("/course/assets/models/soundPillards.glB", (function(e) {
                                e.scene.traverse((function(e) {
                                        e instanceof d["L"] && ("base" == e.name ? n.pillard = e : e.material = n.bMatCap)
                                    }
                                )),
                                    n.pillard.material = n.wMatCap,
                                    n.pillard.children[0].material = n.bMatCap,
                                    n.computePositions();
                                var t = M.addFolder("PillardShere");
                                t.open(),
                                    t.add(n.params, "icoSub", 1, 7).name("Icosphere subdivision").step(1).onChange(n.computePositions),
                                    t.add(n.params, "pillardSize", .1, 1).name("Pillards size").step(.001).onChange(n.computePositions),
                                    t.add(n.params, "animSpeed", 0, 4).name("Animation speed").step(.001)
                            }
                        ))
                }
            }, {
                key: "computePositions",
                value: function() {
                    var e, n = this;
                    this.pillards.clear(),
                        this.scene.traverse((function(n) {
                                n instanceof d["L"] && "ico" == n.geometry.name && (e = n)
                            }
                        )),
                    e && this.scene.remove(e);
                    var t = new d["q"](2,this.params.icoSub);
                    t.name = "ico",
                        this.scene.add(new d["L"](t,this.bMatCap));
                    for (var i = t.attributes.position.array, a = [], s = function(e) {
                        var t = i[e]
                            , s = i[e + 1]
                            , o = i[e + 2]
                            , c = !1;
                        if (a.forEach((function(e) {
                                t != e.x || s != e.y || o != e.z || (c = !0)
                            }
                        )),
                            !c) {
                            var l = new d["tb"](t,s,o);
                            a.push(l);
                            var u = n.pillard.clone();
                            u.position.copy(l),
                                u.scale.multiplyScalar(n.params.pillardSize),
                                r = new d["tb"](0,1,0),
                                u.quaternion.setFromUnitVectors(r, l.clone().normalize()),
                                n.pillards.add(u)
                        }
                    }, o = 0; o < i.length; o += 3) {
                        var r;
                        s(o)
                    }
                    this.scene.add(this.pillards)
                }
            }, {
                key: "update",
                value: function() {
                    if (S.playFlag) {
                        var e = 0;
                        while (e < this.pillards.children.length)
                            this.pillards.children[e].children[0].position.y = S.fdata[e % S.fdata.length] / 255 * 2,
                                e++
                    } else {
                        var n = 0;
                        while (n < this.pillards.children.length)
                            this.pillards.children[n].children[0].position.y = 1 * (Math.sin(.006 * Date.now() * this.params.animSpeed + this.pillards.children[n].position.x) + 1),
                                n++
                    }
                }
            }, {
                key: "bind",
                value: function() {
                    this.update = this.update.bind(this),
                        this.computePositions = this.computePositions.bind(this)
                }
            }]),
                e
        }()
            , L = new P
            , _ = L
            , A = function() {
            function e() {
                Object(c["a"])(this, e)
            }
            return Object(l["a"])(e, [{
                key: "init",
                value: function(e) {
                    var n = this;
                    this.scene = e,
                        this.modelLoader = new h["a"](v),
                        this.base,
                        this.modelLoader.load("/course/assets/models/base.glb", (function(e) {
                                console.log(e.scene),
                                    e.scene.traverse((function(e) {
                                            e instanceof d["L"] && (n.base = e)
                                        }
                                    )),
                                    n.base.position.set(0, -3.5, 0),
                                    n.base.scale.multiplyScalar(2),
                                    n.scene.add(n.base)
                            }
                        ))
                }
            }, {
                key: "update",
                value: function() {}
            }, {
                key: "bind",
                value: function() {}
            }]),
                e
        }()
            , D = new A
            , T = D
            , I = "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvarying vec2 vUv; \nvarying vec3 vPosition;\nvarying vec2 vMatCapUV;\n\nuniform float uTime;\n\nvoid main() {\n    vUv = uv; \n    vPosition = position;\n\n    vec4 p = vec4( position, 1. );\n\n    vec3 e = normalize( vec3( modelViewMatrix * p ) );\n    vec3 n = normalize( normalMatrix * normal );\n\n    vec3 r = reflect( e, n );\n    float m = 2. * sqrt(\n        pow( r.x, 2. ) +\n        pow( r.y, 2. ) +\n        pow( r.z + 1., 2. )\n    );\n    vMatCapUV = r.xy / m + .5;\n\n    float pN = snoise(vec3(vPosition.xz*2.,vPosition.y-uTime*0.008));\n    float displaceIntensity = vPosition.y*0.4-0.5;\n    if(displaceIntensity <= 0.) displaceIntensity = 0.;\n    float displace = pN*displaceIntensity +1.;\n\n    vec3 pos = position;\n    pos.xz*=displace;\n\n    vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);\n    gl_Position = projectionMatrix * modelViewPosition; \n}"
            , F = "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vMatCapUV;\nvarying float vTime;\n\nuniform sampler2D uM1;\nuniform float uTime;\nuniform float uSpeed;\nuniform float uSpecterSize;\nuniform float uBorderSize;\nuniform vec3 uBorderColor;\n\nvoid main() {\n\n    float n3 = snoise(vec3(vPosition.xz*5.,1.))*.5;\n\n    float w = sin(vPosition.y*2.-uTime*0.005*uSpeed);\n\n    float borderMask = step(w,n3-uSpecterSize);\n    borderMask -=step(w,n3-(uSpecterSize+uBorderSize));\n    vec4 borderOut = vec4(uBorderColor*borderMask, borderMask);\n\n    float mc1Mask = step(w,n3-uSpecterSize);\n    vec4 mc1 = texture2D(uM1, vMatCapUV);\n    vec4 mc1Out = vec4(mc1.rgb, mc1Mask);\n\n    float opMask =  1.-vPosition.y;\n    opMask*=.15;\n    opMask+=.5;\n    vec4 opMaskOut = vec4(1., 1., 1., opMask);\n\n    vec4 col = borderOut+mc1Out;\n    col*=opMaskOut;\n    gl_FragColor = vec4(col);\n    // gl_FragColor = vec4(opMask);\n\n    // float ypos = vPosition.y*0.2-0.4;\n    // if(ypos <= 0.) ypos = 0.;\n    // col = vec4(ypos);\n    // gl_FragColor = vec4(col.rbg, 1.);\n\n    // col = vec4(opMask);\n    // gl_FragColor = vec4(col.rbg, 1.);\n\n}"
            , E = function() {
            function e() {
                Object(c["a"])(this, e),
                    this.bind()
            }
            return Object(l["a"])(e, [{
                key: "init",
                value: function(e) {
                    var n = this;
                    this.scene = e,
                        this.texLoader = new d["pb"](v),
                        this.modelLoader = new h["a"](v),
                        this.shell;
                    var t = {
                        uM1: {
                            value: y.find((function(e) {
                                    return "shiny-black-metal" == e.name
                                }
                            )).texture
                        },
                        uTime: {
                            value: 0
                        },
                        uBorderColor: {
                            value: new d["h"]("hsl(287, 80%, 80%)")
                        },
                        uBorderSize: {
                            value: .2
                        },
                        uSpecterSize: {
                            value: .6
                        },
                        uSpeed: {
                            value: 2
                        }
                    }
                        , i = M.addFolder("Outer radiation shader");
                    i.open(),
                        i.add(t.uBorderSize, "value", 0, 1).step(.001).name("Wave border size"),
                        i.add(t.uSpecterSize, "value", -1, 2).step(.001).name("Wave size"),
                        i.add(t.uSpeed, "value", 0, 5).step(.001).name("Speed"),
                        this.shadMat = new d["hb"]({
                            vertexShader: I,
                            fragmentShader: F,
                            uniforms: t,
                            transparent: !0
                        }),
                        this.modelLoader.load("/course/assets/models/outerShell.glb", (function(e) {
                                e.scene.traverse((function(e) {
                                        e instanceof d["L"] && (n.shell = e)
                                    }
                                )),
                                    n.shell.material = n.shadMat,
                                    n.scene.add(n.shell)
                            }
                        ))
                }
            }, {
                key: "update",
                value: function() {
                    this.shadMat.uniforms.uTime.value += j.dt
                }
            }, {
                key: "bind",
                value: function() {
                    this.update = this.update.bind(this)
                }
            }]),
                e
        }()
            , G = new E
            , q = G
            , U = function() {
            function e() {
                Object(c["a"])(this, e),
                    this.bind(),
                    this.active = !0,
                    this.mousePos = {
                        x: 0,
                        y: 0
                    },
                    this.params = {
                        intensity: .008,
                        ease: .08
                    }
            }
            return Object(l["a"])(e, [{
                key: "init",
                value: function(e) {
                    this.camera = e,
                        this.initZ = this.camera.position.z,
                        window.addEventListener("mousemove", this.onMouseMove)
                }
            }, {
                key: "onMouseMove",
                value: function(e) {
                    this.mousePos.x = (e.clientX - window.innerWidth / 2) * this.params.intensity,
                        this.mousePos.y = (e.clientY - window.innerHeight / 2) * this.params.intensity,
                    this.mousePos.y <= -2 && (this.mousePos.y = -2)
                }
            }, {
                key: "update",
                value: function() {
                    this.active && (this.camera.position.x += (this.mousePos.x - this.camera.position.x) * this.params.ease,
                        this.camera.position.y += (this.mousePos.y - this.camera.position.y) * this.params.ease,
                        this.camera.position.z += (this.initZ - this.camera.position.z) * this.params.ease,
                        this.camera.lookAt(0, 0, 0))
                }
            }, {
                key: "bind",
                value: function() {
                    this.onMouseMove = this.onMouseMove.bind(this)
                }
            }]),
                e
        }()
            , N = new U
            , B = N
            , V = function() {
            function e() {
                Object(c["a"])(this, e),
                    this.bind(),
                    this.particleCount = 3e3,
                    this.boxSize = 30
            }
            return Object(l["a"])(e, [{
                key: "init",
                value: function(e) {
                    this.scene = e,
                        this.particlesGeom = new d["e"],
                        this.particlesPos = [];
                    for (var n = 0; n < this.particleCount; n++) {
                        var t = Math.random() * this.boxSize - this.boxSize / 2
                            , i = Math.random() * this.boxSize - this.boxSize / 2
                            , a = Math.random() * this.boxSize - this.boxSize / 2;
                        this.particlesPos.push(t, i, a)
                    }
                    this.particlesGeom.setAttribute("position", new d["m"](this.particlesPos,3)),
                        this.particleMaterial = new d["ab"]({
                            color: 16777215,
                            size: .05,
                            transparent: !0
                        }),
                        this.particleSystem = new d["Z"](this.particlesGeom,this.particleMaterial),
                        this.scene.add(this.particleSystem)
                }
            }, {
                key: "update",
                value: function() {
                    for (var e = 0; e < this.particleCount; e++)
                        this.particlesGeom.attributes.position.array[3 * e + 1] += .03,
                        this.particlesGeom.attributes.position.array[3 * e + 1] >= this.boxSize / 2 && (this.particlesGeom.attributes.position.array[3 * e + 1] = -this.boxSize / 2 - Math.random() * this.boxSize / 2);
                    this.particlesGeom.attributes.position.needsUpdate = !0
                }
            }, {
                key: "bind",
                value: function() {
                    this.init = this.init.bind(this),
                        this.update = this.update.bind(this)
                }
            }]),
                e
        }()
            , W = new V
            , H = W
            , $ = {
            controls: !1,
            myGui: !0
        }
            , J = $
            , Y = function() {
            function e() {
                Object(c["a"])(this, e),
                    this.bind(),
                    this.camera,
                    this.scene,
                    this.renderer,
                    this.controls
            }
            return Object(l["a"])(e, [{
                key: "init",
                value: function(e) {
                    var n = this;
                    this.renderer = new d["vb"]({
                        antialias: !0,
                        alpha: !0
                    }),
                        this.renderer.setSize(window.innerWidth, window.innerHeight),
                        this.renderer.debug.checkShaderErrors = !0,
                        this.renderer.outputEncoding = d["wb"],
                        e.appendChild(this.renderer.domElement),
                        this.scene = new d["gb"];
                    var t = 40
                        , i = 60
                        , a = 1381653;
                    this.scene.fog = new d["n"](a,t,i),
                        this.scene.background = new d["h"](a),
                        this.camera = new d["X"](30,window.innerWidth / window.innerHeight,.1,1e3),
                        this.camera.position.set(0, 0, 25),
                        this.controls = new u["a"](this.camera,document.querySelector("#app")),
                        this.controls.enabled = J.controls,
                        this.controls.maxDistance = 50,
                        this.controls.minDistance = 3,
                        this.controls.maxPolarAngle = Math.PI / 2,
                        H.init(this.scene),
                        T.init(this.scene),
                        _.init(this.scene),
                        q.init(this.scene),
                        B.init(this.camera),
                        M.hide(),
                    J.myGui && M.show();
                    var s = M.addFolder("camera");
                    s.open(),
                        s.add(this.controls, "enabled").name("Orbit cam on").onChange((function() {
                                n.controls.enabled && (B.active = !1)
                            }
                        )).listen(),
                        s.add(B, "active").name("Parallax on").onChange((function() {
                                B.active && (n.controls.enabled = !1)
                            }
                        )).listen(),
                        s.add(B.params, "ease", .001, 1).step(.001).name("Parallax easing"),
                        s.add(B.params, "intensity", 0, .02).step(.001).name("Parallax intensity"),
                        window.addEventListener("resize", this.resizeCanvas),
                        j.subscribe("threeSceneUpdate", this.update)
                }
            }, {
                key: "update",
                value: function() {
                    H.update(),
                        _.update(),
                        q.update(),
                        B.update(),
                        this.scene.rotateY(1e-4 * j.dt),
                        this.renderer.render(this.scene, this.camera)
                }
            }, {
                key: "resizeCanvas",
                value: function() {
                    this.renderer.setSize(window.innerWidth, window.innerHeight),
                        this.camera.aspect = window.innerWidth / window.innerHeight,
                        this.camera.updateProjectionMatrix()
                }
            }, {
                key: "bind",
                value: function() {
                    this.resizeCanvas = this.resizeCanvas.bind(this),
                        this.update = this.update.bind(this),
                        this.init = this.init.bind(this)
                }
            }]),
                e
        }()
            , Z = new Y
            , X = Z
            , Q = {
            name: "ThreeScene",
            props: {
                msg: String
            },
            mounted: function() {
                X.init(this.$refs.container)
            },
            methods: {}
        };
        Q.render = r;
        var R = Q
            , K = Object(i["l"])("data-v-98e0a522");
        Object(i["i"])("data-v-98e0a522");
        var ee = {
            class: "titleCard"
        }
            , ne = Object(i["f"])("div", {
            class: "titleCard_top"
        }, [Object(i["f"])("h1", null, "Sound Pillards."), Object(i["f"])("p", null, "A creative coding example for Awwwards academy")], -1)
            , te = {
            class: "titleCard_bottom"
        }
            , ie = {
            class: "titleCard_bottom_left"
        }
            , ae = Object(i["e"])(" Modeling and coding by ")
            , se = {
            class: "titleCard_bottom_right"
        }
            , oe = Object(i["e"])(" Music by ")
            , re = Object(i["f"])("p", null, "On My side", -1);
        Object(i["h"])();
        var ce = K((function(e, n, t, a, s, o) {
                var r = Object(i["j"])("UILink");
                return Object(i["g"])(),
                    Object(i["c"])("div", ee, [ne, Object(i["f"])("div", te, [Object(i["f"])("div", ie, [Object(i["f"])("p", null, [ae, Object(i["f"])(r, {
                        link: "https://github.com/jakebogan01",
                        text: "Jake Bogan"
                    })])]), Object(i["f"])("div", se, [Object(i["f"])("h3", null, [oe, Object(i["f"])(r, {
                        link: "https://open.spotify.com/artist/2fRT8ojJkJjfr6Z2zNo0WH?si=ldA8M3pbQvqBN6-pOECqaA",
                        text: "Adryiano"
                    })]), re, s.playState ? Object(i["d"])("", !0) : (Object(i["g"])(),
                        Object(i["c"])("button", {
                            key: 0,
                            class: "play",
                            onClick: n[1] || (n[1] = function(e) {
                                    return o.onPlay()
                                }
                            )
                        }, " Play ")), s.playState ? (Object(i["g"])(),
                        Object(i["c"])("button", {
                            key: 1,
                            class: "pause",
                            onClick: n[2] || (n[2] = function(e) {
                                    return o.onPause()
                                }
                            )
                        }, " Pause ")) : Object(i["d"])("", !0)])])])
            }
        ))
            , le = (t("9911"),
            Object(i["l"])("data-v-633b7dda"));
        Object(i["i"])("data-v-633b7dda");
        var de = Object(i["f"])("span", {
            class: "uiLink_fill"
        }, null, -1);
        Object(i["h"])();
        var ue = le((function(e, n, t, a, s, o) {
                return Object(i["g"])(),
                    Object(i["c"])("a", {
                        class: "uiLink",
                        href: t.link,
                        target: "_blank",
                        ref: "link"
                    }, [de, Object(i["e"])(Object(i["k"])(t.text), 1)], 8, ["href"])
            }
        ))
            , he = {
            name: "LoadingScreen",
            props: {
                text: null,
                link: null
            },
            mounted: function() {
                this.$refs.link.addEventListener("mouseenter", this.linkIn),
                    this.$refs.link.addEventListener("mouseleave", this.linkOut)
            },
            methods: {
                linkIn: function() {
                    this.$refs.link.classList.add("on")
                },
                linkOut: function() {
                    this.$refs.link.classList.remove("on")
                }
            }
        };
        t("a83b");
        he.render = ue,
            he.__scopeId = "data-v-633b7dda";
        var pe = he
            , ve = {
            name: "TitleCard",
            components: {
                UILink: pe
            },
            data: function() {
                return {
                    playState: !1
                }
            },
            props: {
                msg: String
            },
            mounted: function() {},
            methods: {
                onPlay: function() {
                    S.init(),
                        S.play(),
                        this.playState = !0
                },
                onPause: function() {
                    S.pause(),
                        this.playState = !1
                }
            }
        };
        t("4da0");
        ve.render = ce,
            ve.__scopeId = "data-v-98e0a522";
        var me = ve
            , be = Object(i["l"])("data-v-9bbb3302");
        Object(i["i"])("data-v-9bbb3302");
        var fe = {
            class: "loadingScreen loading",
            ref: "container"
        }
            , xe = Object(i["f"])("h2", null, "Loading", -1)
            , ye = Object(i["f"])("p", {
            class: "loading_undertitle"
        }, "Loading different textures and models", -1)
            , we = {
            class: "loading_bar"
        }
            , ge = {
            class: "loading_loaded"
        }
            , je = {
            class: "loading_progress"
        };
        Object(i["h"])();
        var ze = be((function(e, n, t, a, s, o) {
                return Object(i["g"])(),
                    Object(i["c"])("div", fe, [xe, ye, Object(i["f"])("div", we, [Object(i["f"])("div", {
                        class: "loading_bar_fill",
                        style: {
                            width: s.progress + "%"
                        }
                    }, null, 4)]), Object(i["f"])("p", ge, Object(i["k"])(s.loaded), 1), Object(i["f"])("p", je, Object(i["k"])(s.progress) + " %", 1)], 512)
            }
        ))
            , Oe = {
            name: "LoadingScreen",
            data: function() {
                return {
                    loaded: null,
                    progress: null
                }
            },
            created: function() {
                M.hide()
            },
            mounted: function() {
                v.onProgress = this.onProgress,
                    v.onLoad = this.onLoad
            },
            methods: {
                onProgress: function(e, n, t) {
                    this.loaded = e,
                        this.progress = n / t * 100
                },
                onLoad: function() {
                    this.$refs.container.classList.add("start"),
                        M.show()
                }
            }
        };
        t("8e5f");
        Oe.render = ze,
            Oe.__scopeId = "data-v-9bbb3302";
        var Se = Oe
            , ke = {
            name: "App",
            components: {
                ThreeScene: R,
                TitleCard: me,
                LoadingScreen: Se
            }
        };
        t("26a9");
        ke.render = a;
        var Ce = ke;
        Object(i["b"])(Ce).mount("#app")
    },
    "8e5f": function(e, n, t) {
        "use strict";
        t("0069")
    },
    a83b: function(e, n, t) {
        "use strict";
        t("54d1")
    }
});
//# sourceMappingURL=app.4c0b6b04.js.map
