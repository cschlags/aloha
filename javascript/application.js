
/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
function getLastPart(t) {
    var e = t.split("/");
    return t.lastIndexOf("/") !== t.length - 1 ? e[e.length - 1] : e[e.length - 2]
}

function getLastPart(t) {
        var e = t.split("/");
        return t.lastIndexOf("/") !== t.length - 1 ? e[e.length - 1] : e[e.length - 2]
    }
    /*
     * Swipe 2.0
     *
     * Brad Birdsall
     * Copyright 2013, MIT License
     *
     */
function Swipe(t, e) {
    "use strict";

    function n() {
        g = b.children, y = g.length, g.length < 2 && (e.continuous = !1), f.transitions && e.continuous && g.length < 3 && (b.appendChild(g[0].cloneNode(!0)), b.appendChild(b.children[1].cloneNode(!0)), g = b.children), m = new Array(g.length), v = "undefined" != typeof t.getBoundingClientRect ? t.getBoundingClientRect().width : t.offsetWidth, b.style.width = g.length * v + "px";
        for (var n = g.length; n--;) {
            var i = g[n];
            i.style.width = v + "px", i.setAttribute("data-index", n), f.transitions && (i.style.left = n * -v + "px", a(n, w > n ? -v : n > w ? v : 0, 0))
        }
        e.continuous && f.transitions && (a(s(w - 1), -v, 0), a(s(w + 1), v, 0)), f.transitions || (b.style.left = w * -v + "px"), t.style.visibility = "visible"
    }

    function i() {
        e.continuous ? o(w - 1) : w && o(w - 1)
    }

    function r() {
        e.continuous ? o(w + 1) : w < g.length - 1 && o(w + 1)
    }

    function s(t) {
        return (g.length + t % g.length) % g.length
    }

    function o(t, n) {
        if (w != t) {
            if (f.transitions) {
                var i = Math.abs(w - t) / (w - t);
                if (e.continuous) {
                    var r = i;
                    i = -m[s(t)] / v, i !== r && (t = -i * g.length + t)
                }
                for (var o = Math.abs(w - t) - 1; o--;) a(s((t > w ? t : w) - o - 1), v * i, 0);
                t = s(t), a(w, v * i, n || x), a(t, 0, n || x), e.continuous && a(s(t - i), -(v * i), 0)
            } else t = s(t), u(w * -v, t * -v, n || x);
            w = t, p(e.callback && e.callback(w, g[w]))
        }
    }

    function a(t, e, n) {
        l(t, e, n), m[t] = e
    }

    function l(t, e, n) {
        var i = g[t],
            r = i && i.style;
        r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = n + "ms", r.webkitTransform = "translate(" + e + "px,0)translateZ(0)", r.msTransform = r.MozTransform = r.OTransform = "translateX(" + e + "px)")
    }

    function u(t, n, i) {
        if (!i) return b.style.left = n + "px", void 0;
        var r = +new Date,
            s = setInterval(function() {
                var o = +new Date - r;
                return o > i ? (b.style.left = n + "px", C && c(), e.transitionEnd && e.transitionEnd.call(event, w, g[w]), clearInterval(s), void 0) : (b.style.left = (n - t) * (Math.floor(o / i * 100) / 100) + t + "px", void 0)
            }, 4)
    }

    function c() {
        k = setTimeout(r, C)
    }

    function d() {
        C = 0, clearTimeout(k)
    }
    var h = function() {},
        p = function(t) {
            setTimeout(t || h, 0)
        },
        f = {
            addEventListener: !!window.addEventListener,
            touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            transitions: function(t) {
                var e = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                for (var n in e)
                    if (void 0 !== t.style[e[n]]) return !0;
                return !1
            }(document.createElement("swipe"))
        };
    if (t) {
        var g, m, v, y, b = t.children[0];
        e = e || {};
        var w = parseInt(e.startSlide, 10) || 0,
            x = e.speed || 300;
        e.continuous = void 0 !== e.continuous ? e.continuous : !0;
        var k, T, C = e.auto || 0,
            S = {},
            _ = {},
            D = {
                handleEvent: function(t) {
                    switch (t.type) {
                        case "touchstart":
                            this.start(t);
                            break;
                        case "touchmove":
                            this.move(t);
                            break;
                        case "touchend":
                            p(this.end(t));
                            break;
                        case "webkitTransitionEnd":
                        case "msTransitionEnd":
                        case "oTransitionEnd":
                        case "otransitionend":
                        case "transitionend":
                            p(this.transitionEnd(t));
                            break;
                        case "resize":
                            p(n)
                    }
                    e.stopPropagation && t.stopPropagation()
                },
                start: function(t) {
                    var e = t.touches[0];
                    S = {
                        x: e.pageX,
                        y: e.pageY,
                        time: +new Date
                    }, T = void 0, _ = {}, b.addEventListener("touchmove", this, !1), b.addEventListener("touchend", this, !1)
                },
                move: function(t) {
                    if (!(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                        e.disableScroll && t.preventDefault();
                        var n = t.touches[0];
                        _ = {
                            x: n.pageX - S.x,
                            y: n.pageY - S.y
                        }, "undefined" == typeof T && (T = !!(T || Math.abs(_.x) < Math.abs(_.y))), T || (t.preventDefault(), d(), e.continuous ? (l(s(w - 1), _.x + m[s(w - 1)], 0), l(w, _.x + m[w], 0), l(s(w + 1), _.x + m[s(w + 1)], 0)) : (_.x = _.x / (!w && _.x > 0 || w == g.length - 1 && _.x < 0 ? Math.abs(_.x) / v + 1 : 1), l(w - 1, _.x + m[w - 1], 0), l(w, _.x + m[w], 0), l(w + 1, _.x + m[w + 1], 0)))
                    }
                },
                end: function() {
                    var t = +new Date - S.time,
                        n = Number(t) < 250 && Math.abs(_.x) > 20 || Math.abs(_.x) > v / 2,
                        i = !w && _.x > 0 || w == g.length - 1 && _.x < 0;
                    e.continuous && (i = !1);
                    var r = _.x < 0;
                    T || (n && !i ? (r ? (e.continuous ? (a(s(w - 1), -v, 0), a(s(w + 2), v, 0)) : a(w - 1, -v, 0), a(w, m[w] - v, x), a(s(w + 1), m[s(w + 1)] - v, x), w = s(w + 1)) : (e.continuous ? (a(s(w + 1), v, 0), a(s(w - 2), -v, 0)) : a(w + 1, v, 0), a(w, m[w] + v, x), a(s(w - 1), m[s(w - 1)] + v, x), w = s(w - 1)), e.callback && e.callback(w, g[w])) : e.continuous ? (a(s(w - 1), -v, x), a(w, 0, x), a(s(w + 1), v, x)) : (a(w - 1, -v, x), a(w, 0, x), a(w + 1, v, x))), b.removeEventListener("touchmove", D, !1), b.removeEventListener("touchend", D, !1)
                },
                transitionEnd: function(t) {
                    parseInt(t.target.getAttribute("data-index"), 10) == w && (C && c(), e.transitionEnd && e.transitionEnd.call(t, w, g[w]))
                }
            };
        return n(), C && c(), f.addEventListener ? (f.touch && b.addEventListener("touchstart", D, !1), f.transitions && (b.addEventListener("webkitTransitionEnd", D, !1), b.addEventListener("msTransitionEnd", D, !1), b.addEventListener("oTransitionEnd", D, !1), b.addEventListener("otransitionend", D, !1), b.addEventListener("transitionend", D, !1)), window.addEventListener("resize", D, !1)) : window.onresize = function() {
            n()
        }, {
            setup: function() {
                n()
            },
            slide: function(t, e) {
                d(), o(t, e)
            },
            prev: function() {
                d(), i()
            },
            next: function() {
                d(), r()
            },
            stop: function() {
                d()
            },
            getPos: function() {
                return w
            },
            getNumSlides: function() {
                return y
            },
            kill: function() {
                d(), b.style.width = "", b.style.left = "";
                for (var t = g.length; t--;) {
                    var e = g[t];
                    e.style.width = "", e.style.left = "", f.transitions && l(t, 0, 0)
                }
                f.addEventListener ? (b.removeEventListener("touchstart", D, !1), b.removeEventListener("webkitTransitionEnd", D, !1), b.removeEventListener("msTransitionEnd", D, !1), b.removeEventListener("oTransitionEnd", D, !1), b.removeEventListener("otransitionend", D, !1), b.removeEventListener("transitionend", D, !1), window.removeEventListener("resize", D, !1)) : window.onresize = null
            }
        }
    }
}

function ibmk_first_conversion(t) {
        1 === t && (ck = "ibmgrtst1", ibmgrtst1 = $.cookie(ck), "undefined" != typeof ibmgrtst1 && null !== ibmgrtst1 && (o = JSON.parse(ibmgrtst1), "undefined" == typeof o.fp && (o.fp = !0, $.cookie(ck, JSON.stringify(o), {
            expires: 182
        }))))
    }! function(t, e) {
        function n(t) {
            var e = t.length,
                n = ce.type(t);
            return ce.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function i(t) {
            var e = Se[t] = {};
            return ce.each(t.match(he) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function r(t, n, i, r) {
            if (ce.acceptData(t)) {
                var s, o, a = ce.expando,
                    l = t.nodeType,
                    u = l ? ce.cache : t,
                    c = l ? t[a] : t[a] && a;
                if (c && u[c] && (r || u[c].data) || i !== e || "string" != typeof n) return c || (c = l ? t[a] = ee.pop() || ce.guid++ : a), u[c] || (u[c] = l ? {} : {
                    toJSON: ce.noop
                }), ("object" == typeof n || "function" == typeof n) && (r ? u[c] = ce.extend(u[c], n) : u[c].data = ce.extend(u[c].data, n)), o = u[c], r || (o.data || (o.data = {}), o = o.data), i !== e && (o[ce.camelCase(n)] = i), "string" == typeof n ? (s = o[n], null == s && (s = o[ce.camelCase(n)])) : s = o, s
            }
        }

        function s(t, e, n) {
            if (ce.acceptData(t)) {
                var i, r, s = t.nodeType,
                    o = s ? ce.cache : t,
                    l = s ? t[ce.expando] : ce.expando;
                if (o[l]) {
                    if (e && (i = n ? o[l] : o[l].data)) {
                        ce.isArray(e) ? e = e.concat(ce.map(e, ce.camelCase)) : e in i ? e = [e] : (e = ce.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                        for (; r--;) delete i[e[r]];
                        if (n ? !a(i) : !ce.isEmptyObject(i)) return
                    }(n || (delete o[l].data, a(o[l]))) && (s ? ce.cleanData([t], !0) : ce.support.deleteExpando || o != o.window ? delete o[l] : o[l] = null)
                }
            }
        }

        function o(t, n, i) {
            if (i === e && 1 === t.nodeType) {
                var r = "data-" + n.replace(De, "-$1").toLowerCase();
                if (i = t.getAttribute(r), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : _e.test(i) ? ce.parseJSON(i) : i
                    } catch (s) {}
                    ce.data(t, n, i)
                } else i = e
            }
            return i
        }

        function a(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ce.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function u() {
            return !1
        }

        function c() {
            try {
                return K.activeElement
            } catch (t) {}
        }

        function d(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function h(t, e, n) {
            if (ce.isFunction(e)) return ce.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ce.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (ze.test(e)) return ce.filter(e, t, n);
                e = ce.filter(e, t)
            }
            return ce.grep(t, function(t) {
                return ce.inArray(t, e) >= 0 !== n
            })
        }

        function p(t) {
            var e = Ue.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function f(t, e) {
            return ce.nodeName(t, "table") && ce.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function g(t) {
            return t.type = (null !== ce.find.attr(t, "type")) + "/" + t.type, t
        }

        function m(t) {
            var e = sn.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function v(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) ce._data(n, "globalEval", !e || ce._data(e[i], "globalEval"))
        }

        function y(t, e) {
            if (1 === e.nodeType && ce.hasData(t)) {
                var n, i, r, s = ce._data(t),
                    o = ce._data(e, s),
                    a = s.events;
                if (a) {
                    delete o.handle, o.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; r > i; i++) ce.event.add(e, n, a[n][i])
                }
                o.data && (o.data = ce.extend({}, o.data))
            }
        }

        function b(t, e) {
            var n, i, r;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ce.support.noCloneEvent && e[ce.expando]) {
                    r = ce._data(e);
                    for (i in r.events) ce.removeEvent(e, i, r.handle);
                    e.removeAttribute(ce.expando)
                }
                "script" === n && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ce.support.html5Clone && t.innerHTML && !ce.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && en.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function w(t, n) {
            var i, r, s = 0,
                o = typeof t.getElementsByTagName !== V ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== V ? t.querySelectorAll(n || "*") : e;
            if (!o)
                for (o = [], i = t.childNodes || t; null != (r = i[s]); s++) !n || ce.nodeName(r, n) ? o.push(r) : ce.merge(o, w(r, n));
            return n === e || n && ce.nodeName(t, n) ? ce.merge([t], o) : o
        }

        function x(t) {
            en.test(t.type) && (t.defaultChecked = t.checked)
        }

        function k(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = Sn.length; r--;)
                if (e = Sn[r] + n, e in t) return e;
            return i
        }

        function T(t, e) {
            return t = e || t, "none" === ce.css(t, "display") || !ce.contains(t.ownerDocument, t)
        }

        function C(t, e) {
            for (var n, i, r, s = [], o = 0, a = t.length; a > o; o++) i = t[o], i.style && (s[o] = ce._data(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (s[o] = ce._data(i, "olddisplay", $(i.nodeName)))) : s[o] || (r = T(i), (n && "none" !== n || !r) && ce._data(i, "olddisplay", r ? n : ce.css(i, "display"))));
            for (o = 0; a > o; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none"));
            return t
        }

        function S(t, e, n) {
            var i = yn.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function _(t, e, n, i, r) {
            for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += ce.css(t, n + Cn[s], !0, r)), i ? ("content" === n && (o -= ce.css(t, "padding" + Cn[s], !0, r)), "margin" !== n && (o -= ce.css(t, "border" + Cn[s] + "Width", !0, r))) : (o += ce.css(t, "padding" + Cn[s], !0, r), "padding" !== n && (o += ce.css(t, "border" + Cn[s] + "Width", !0, r)));
            return o
        }

        function D(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = dn(t),
                o = ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, s);
            if (0 >= r || null == r) {
                if (r = hn(t, e, s), (0 > r || null == r) && (r = t.style[e]), bn.test(r)) return r;
                i = o && (ce.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + _(t, e, n || (o ? "border" : "content"), i, s) + "px"
        }

        function $(t) {
            var e = K,
                n = xn[t];
            return n || (n = E(t, e), "none" !== n && n || (cn = (cn || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (cn[0].contentWindow || cn[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = E(t, e), cn.detach()), xn[t] = n), n
        }

        function E(t, e) {
            var n = ce(e.createElement(t)).appendTo(e.body),
                i = ce.css(n[0], "display");
            return n.remove(), i
        }

        function F(t, e, n, i) {
            var r;
            if (ce.isArray(e)) ce.each(e, function(e, r) {
                n || Dn.test(t) ? i(t, r) : F(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== ce.type(e)) i(t, e);
            else
                for (r in e) F(t + "[" + r + "]", e[r], n, i)
        }

        function A(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    s = e.toLowerCase().match(he) || [];
                if (ce.isFunction(n))
                    for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function M(t, e, n, i) {
            function r(a) {
                var l;
                return s[a] = !0, ce.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var s = {},
                o = t === Bn;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function N(t, n) {
            var i, r, s = ce.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== e && ((s[r] ? t : i || (i = {}))[r] = n[r]);
            return i && ce.extend(!0, t, i), t
        }

        function j(t, n, i) {
            for (var r, s, o, a, l = t.contents, u = t.dataTypes;
                "*" === u[0];) u.shift(), s === e && (s = t.mimeType || n.getResponseHeader("Content-Type"));
            if (s)
                for (a in l)
                    if (l[a] && l[a].test(s)) {
                        u.unshift(a);
                        break
                    }
            if (u[0] in i) o = u[0];
            else {
                for (a in i) {
                    if (!u[0] || t.converters[a + " " + u[0]]) {
                        o = a;
                        break
                    }
                    r || (r = a)
                }
                o = o || r
            }
            return o ? (o !== u[0] && u.unshift(o), i[o]) : void 0
        }

        function P(t, e, n, i) {
            var r, s, o, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
            for (s = c.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (o = u[l + " " + s] || u["* " + s], !o)
                    for (r in u)
                        if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                            o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
                            break
                        }
                if (o !== !0)
                    if (o && t["throws"]) e = o(e);
                    else try {
                        e = o(e)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: o ? d : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function I() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function L() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function O() {
            return setTimeout(function() {
                Zn = e
            }), Zn = ce.now()
        }

        function H(t, e, n) {
            for (var i, r = (si[e] || []).concat(si["*"]), s = 0, o = r.length; o > s; s++)
                if (i = r[s].call(n, e, t)) return i
        }

        function R(t, e, n) {
            var i, r, s = 0,
                o = ri.length,
                a = ce.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Zn || O(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, s = 1 - i, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(s);
                    return a.notifyWith(t, [u, s, n]), 1 > s && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: ce.extend({}, e),
                    opts: ce.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Zn || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ce.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (q(c, u.opts.specialEasing); o > s; s++)
                if (i = ri[s].call(u, t, c, u.opts)) return i;
            return ce.map(c, H, u), ce.isFunction(u.opts.start) && u.opts.start.call(t, u), ce.fx.timer(ce.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function q(t, e) {
            var n, i, r, s, o;
            for (n in t)
                if (i = ce.camelCase(n), r = e[i], s = t[n], ce.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = ce.cssHooks[i], o && "expand" in o) {
                    s = o.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = r)
                } else e[i] = r
        }

        function z(t, e, n) {
            var i, r, s, o, a, l, u = this,
                c = {},
                d = t.style,
                h = t.nodeType && T(t),
                p = ce._data(t, "fxshow");
            n.queue || (a = ce._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, ce.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ce.css(t, "display") && "none" === ce.css(t, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== $(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ce.support.shrinkWrapBlocks || u.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], ei.exec(r)) {
                    if (delete e[i], s = s || "toggle" === r, r === (h ? "hide" : "show")) continue;
                    c[i] = p && p[i] || ce.style(t, i)
                }
            if (!ce.isEmptyObject(c)) {
                p ? "hidden" in p && (h = p.hidden) : p = ce._data(t, "fxshow", {}), s && (p.hidden = !h), h ? ce(t).show() : u.done(function() {
                    ce(t).hide()
                }), u.done(function() {
                    var e;
                    ce._removeData(t, "fxshow");
                    for (e in c) ce.style(t, e, c[e])
                });
                for (i in c) o = H(h ? p[i] : 0, i, u), i in p || (p[i] = o.start, h && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function W(t, e, n, i, r) {
            return new W.prototype.init(t, e, n, i, r)
        }

        function B(t, e) {
            var n, i = {
                    height: t
                },
                r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Cn[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function Y(t) {
            return ce.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var U, Q, V = typeof e,
            X = t.location,
            K = t.document,
            G = K.documentElement,
            J = t.jQuery,
            Z = t.$,
            te = {},
            ee = [],
            ne = "1.10.2",
            ie = ee.concat,
            re = ee.push,
            se = ee.slice,
            oe = ee.indexOf,
            ae = te.toString,
            le = te.hasOwnProperty,
            ue = ne.trim,
            ce = function(t, e) {
                return new ce.fn.init(t, e, Q)
            },
            de = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            he = /\S+/g,
            pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            me = /^[\],:{}\s]*$/,
            ve = /(?:^|:|,)(?:\s*\[)+/g,
            ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            we = /^-ms-/,
            xe = /-([\da-z])/gi,
            ke = function(t, e) {
                return e.toUpperCase()
            },
            Te = function(t) {
                (K.addEventListener || "load" === t.type || "complete" === K.readyState) && (Ce(), ce.ready())
            },
            Ce = function() {
                K.addEventListener ? (K.removeEventListener("DOMContentLoaded", Te, !1), t.removeEventListener("load", Te, !1)) : (K.detachEvent("onreadystatechange", Te), t.detachEvent("onload", Te))
            };
        ce.fn = ce.prototype = {
                jquery: ne,
                constructor: ce,
                init: function(t, n, i) {
                    var r, s;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : fe.exec(t), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                        if (r[1]) {
                            if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : K, !0)), ge.test(r[1]) && ce.isPlainObject(n))
                                for (r in n) ce.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                            return this
                        }
                        if (s = K.getElementById(r[2]), s && s.parentNode) {
                            if (s.id !== r[2]) return i.find(t);
                            this.length = 1, this[0] = s
                        }
                        return this.context = K, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ce.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ce.makeArray(t, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return se.call(this)
                },
                get: function(t) {
                    return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
                },
                pushStack: function(t) {
                    var e = ce.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t, e) {
                    return ce.each(this, t, e)
                },
                ready: function(t) {
                    return ce.ready.promise().done(t), this
                },
                slice: function() {
                    return this.pushStack(se.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                },
                map: function(t) {
                    return this.pushStack(ce.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: re,
                sort: [].sort,
                splice: [].splice
            }, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function() {
                var t, n, i, r, s, o, a = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ce.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                    if (null != (s = arguments[l]))
                        for (r in s) t = a[r], i = s[r], a !== i && (c && i && (ce.isPlainObject(i) || (n = ce.isArray(i))) ? (n ? (n = !1, o = t && ce.isArray(t) ? t : []) : o = t && ce.isPlainObject(t) ? t : {}, a[r] = ce.extend(c, o, i)) : i !== e && (a[r] = i));
                return a
            }, ce.extend({
                expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
                noConflict: function(e) {
                    return t.$ === ce && (t.$ = Z), e && t.jQuery === ce && (t.jQuery = J), ce
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? ce.readyWait++ : ce.ready(!0)
                },
                ready: function(t) {
                    if (t === !0 ? !--ce.readyWait : !ce.isReady) {
                        if (!K.body) return setTimeout(ce.ready);
                        ce.isReady = !0, t !== !0 && --ce.readyWait > 0 || (U.resolveWith(K, [ce]), ce.fn.trigger && ce(K).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(t) {
                    return "function" === ce.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === ce.type(t)
                },
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                type: function(t) {
                    return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? te[ae.call(t)] || "object" : typeof t
                },
                isPlainObject: function(t) {
                    var n;
                    if (!t || "object" !== ce.type(t) || t.nodeType || ce.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (i) {
                        return !1
                    }
                    if (ce.support.ownLast)
                        for (n in t) return le.call(t, n);
                    for (n in t);
                    return n === e || le.call(t, n)
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                error: function(t) {
                    throw new Error(t)
                },
                parseHTML: function(t, e, n) {
                    if (!t || "string" != typeof t) return null;
                    "boolean" == typeof e && (n = e, e = !1), e = e || K;
                    var i = ge.exec(t),
                        r = !n && [];
                    return i ? [e.createElement(i[1])] : (i = ce.buildFragment([t], e, r), r && ce(r).remove(), ce.merge([], i.childNodes))
                },
                parseJSON: function(e) {
                    return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ce.trim(e), e && me.test(e.replace(ye, "@").replace(be, "]").replace(ve, ""))) ? new Function("return " + e)() : (ce.error("Invalid JSON: " + e), void 0)
                },
                parseXML: function(n) {
                    var i, r;
                    if (!n || "string" != typeof n) return null;
                    try {
                        t.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (s) {
                        i = e
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(e) {
                    e && ce.trim(e) && (t.execScript || function(e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function(t) {
                    return t.replace(we, "ms-").replace(xe, ke)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e, i) {
                    var r, s = 0,
                        o = t.length,
                        a = n(t);
                    if (i) {
                        if (a)
                            for (; o > s && (r = e.apply(t[s], i), r !== !1); s++);
                        else
                            for (s in t)
                                if (r = e.apply(t[s], i), r === !1) break
                    } else if (a)
                        for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
                    else
                        for (s in t)
                            if (r = e.call(t[s], s, t[s]), r === !1) break; return t
                },
                trim: ue && !ue.call("﻿ ") ? function(t) {
                    return null == t ? "" : ue.call(t)
                } : function(t) {
                    return null == t ? "" : (t + "").replace(pe, "")
                },
                makeArray: function(t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? ce.merge(i, "string" == typeof t ? [t] : t) : re.call(i, t)), i
                },
                inArray: function(t, e, n) {
                    var i;
                    if (e) {
                        if (oe) return oe.call(e, t, n);
                        for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in e && e[n] === t) return n
                    }
                    return -1
                },
                merge: function(t, n) {
                    var i = n.length,
                        r = t.length,
                        s = 0;
                    if ("number" == typeof i)
                        for (; i > s; s++) t[r++] = n[s];
                    else
                        for (; n[s] !== e;) t[r++] = n[s++];
                    return t.length = r, t
                },
                grep: function(t, e, n) {
                    var i, r = [],
                        s = 0,
                        o = t.length;
                    for (n = !!n; o > s; s++) i = !!e(t[s], s), n !== i && r.push(t[s]);
                    return r
                },
                map: function(t, e, i) {
                    var r, s = 0,
                        o = t.length,
                        a = n(t),
                        l = [];
                    if (a)
                        for (; o > s; s++) r = e(t[s], s, i), null != r && (l[l.length] = r);
                    else
                        for (s in t) r = e(t[s], s, i), null != r && (l[l.length] = r);
                    return ie.apply([], l)
                },
                guid: 1,
                proxy: function(t, n) {
                    var i, r, s;
                    return "string" == typeof n && (s = t[n], n = t, t = s), ce.isFunction(t) ? (i = se.call(arguments, 2), r = function() {
                        return t.apply(n || this, i.concat(se.call(arguments)))
                    }, r.guid = t.guid = t.guid || ce.guid++, r) : e
                },
                access: function(t, n, i, r, s, o, a) {
                    var l = 0,
                        u = t.length,
                        c = null == i;
                    if ("object" === ce.type(i)) {
                        s = !0;
                        for (l in i) ce.access(t, n, l, i[l], !0, o, a)
                    } else if (r !== e && (s = !0, ce.isFunction(r) || (a = !0), c && (a ? (n.call(t, r), n = null) : (c = n, n = function(t, e, n) {
                            return c.call(ce(t), n)
                        })), n))
                        for (; u > l; l++) n(t[l], i, a ? r : r.call(t[l], l, n(t[l], i)));
                    return s ? t : c ? n.call(t) : u ? n(t[0], i) : o
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(t, e, n, i) {
                    var r, s, o = {};
                    for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                    r = n.apply(t, i || []);
                    for (s in e) t.style[s] = o[s];
                    return r
                }
            }), ce.ready.promise = function(e) {
                if (!U)
                    if (U = ce.Deferred(), "complete" === K.readyState) setTimeout(ce.ready);
                    else if (K.addEventListener) K.addEventListener("DOMContentLoaded", Te, !1), t.addEventListener("load", Te, !1);
                else {
                    K.attachEvent("onreadystatechange", Te), t.attachEvent("onload", Te);
                    var n = !1;
                    try {
                        n = null == t.frameElement && K.documentElement
                    } catch (i) {}
                    n && n.doScroll && ! function r() {
                        if (!ce.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (t) {
                                return setTimeout(r, 50)
                            }
                            Ce(), ce.ready()
                        }
                    }()
                }
                return U.promise(e)
            }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                te["[object " + e + "]"] = e.toLowerCase()
            }), Q = ce(K),
            /*!
             * Sizzle CSS Selector Engine v1.10.2
             * http://sizzlejs.com/
             *
             * Copyright 2013 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2013-07-03
             */
            function(t, e) {
                function n(t, e, n, i) {
                    var r, s, o, a, l, u, c, d, f, g;
                    if ((e ? e.ownerDocument || e : R) !== M && A(e), e = e || M, n = n || [], !t || "string" != typeof t) return n;
                    if (1 !== (a = e.nodeType) && 9 !== a) return [];
                    if (j && !i) {
                        if (r = be.exec(t))
                            if (o = r[1]) {
                                if (9 === a) {
                                    if (s = e.getElementById(o), !s || !s.parentNode) return n;
                                    if (s.id === o) return n.push(s), n
                                } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && O(e, s) && s.id === o) return n.push(s), n
                            } else {
                                if (r[2]) return te.apply(n, e.getElementsByTagName(t)), n;
                                if ((o = r[3]) && T.getElementsByClassName && e.getElementsByClassName) return te.apply(n, e.getElementsByClassName(o)), n
                            }
                        if (T.qsa && (!P || !P.test(t))) {
                            if (d = c = H, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                for (u = h(t), (c = e.getAttribute("id")) ? d = c.replace(ke, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
                                f = pe.test(t) && e.parentNode || e, g = u.join(",")
                            }
                            if (g) try {
                                return te.apply(n, f.querySelectorAll(g)), n
                            } catch (m) {} finally {
                                c || e.removeAttribute("id")
                            }
                        }
                    }
                    return x(t.replace(ue, "$1"), e, n, i)
                }

                function i() {
                    function t(n, i) {
                        return e.push(n += " ") > S.cacheLength && delete t[e.shift()], t[n] = i
                    }
                    var e = [];
                    return t
                }

                function r(t) {
                    return t[H] = !0, t
                }

                function s(t) {
                    var e = M.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var n = t.split("|"), i = t.length; i--;) S.attrHandle[n[i]] = e
                }

                function a(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function u(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function c(t) {
                    return r(function(e) {
                        return e = +e, r(function(n, i) {
                            for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function d() {}

                function h(t, e) {
                    var i, r, s, o, a, l, u, c = B[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (a = t, l = [], u = S.preFilter; a;) {
                        (!i || (r = de.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = he.exec(a)) && (i = r.shift(), s.push({
                            value: i,
                            type: r[0].replace(ue, " ")
                        }), a = a.slice(i.length));
                        for (o in S.filter) !(r = ve[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({
                            value: i,
                            type: o,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return e ? a.length : a ? n.error(t) : B(t, l).slice(0)
                }

                function p(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                    return i
                }

                function f(t, e, n) {
                    var i = e.dir,
                        r = n && "parentNode" === i,
                        s = z++;
                    return e.first ? function(e, n, s) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) return t(e, n, s)
                    } : function(e, n, o) {
                        var a, l, u, c = q + " " + s;
                        if (o) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || r) && t(e, n, o)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || r)
                                    if (u = e[H] || (e[H] = {}), (l = u[i]) && l[0] === c) {
                                        if ((a = l[1]) === !0 || a === C) return a === !0
                                    } else if (l = u[i] = [c], l[1] = t(e, n, o) || C, l[1] === !0) return !0
                    }
                }

                function g(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function m(t, e, n, i, r) {
                    for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!n || n(s, i, r)) && (o.push(s), u && e.push(a));
                    return o
                }

                function v(t, e, n, i, s, o) {
                    return i && !i[H] && (i = v(i)), s && !s[H] && (s = v(s, o)), r(function(r, o, a, l) {
                        var u, c, d, h = [],
                            p = [],
                            f = o.length,
                            g = r || w(e || "*", a.nodeType ? [a] : a, []),
                            v = !t || !r && e ? g : m(g, h, t, a, l),
                            y = n ? s || (r ? t : f || i) ? [] : o : v;
                        if (n && n(v, y, a, l), i)
                            for (u = m(y, p), i(u, [], a, l), c = u.length; c--;)(d = u[c]) && (y[p[c]] = !(v[p[c]] = d));
                        if (r) {
                            if (s || t) {
                                if (s) {
                                    for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                                    s(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(d = y[c]) && (u = s ? ne.call(r, d) : h[c]) > -1 && (r[u] = !(o[u] = d))
                            }
                        } else y = m(y === o ? y.splice(f, y.length) : y), s ? s(null, o, y, l) : te.apply(o, y)
                    })
                }

                function y(t) {
                    for (var e, n, i, r = t.length, s = S.relative[t[0].type], o = s || S.relative[" "], a = s ? 1 : 0, l = f(function(t) {
                            return t === e
                        }, o, !0), u = f(function(t) {
                            return ne.call(e, t) > -1
                        }, o, !0), c = [function(t, n, i) {
                            return !s && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                        }]; r > a; a++)
                        if (n = S.relative[t[a].type]) c = [f(g(c), n)];
                        else {
                            if (n = S.filter[t[a].type].apply(null, t[a].matches), n[H]) {
                                for (i = ++a; r > i && !S.relative[t[i].type]; i++);
                                return v(a > 1 && g(c), a > 1 && p(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(ue, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                            }
                            c.push(n)
                        }
                    return g(c)
                }

                function b(t, e) {
                    var i = 0,
                        s = e.length > 0,
                        o = t.length > 0,
                        a = function(r, a, l, u, c) {
                            var d, h, p, f = [],
                                g = 0,
                                v = "0",
                                y = r && [],
                                b = null != c,
                                w = E,
                                x = r || o && S.find.TAG("*", c && a.parentNode || a),
                                k = q += null == w ? 1 : Math.random() || .1;
                            for (b && (E = a !== M && a, C = i); null != (d = x[v]); v++) {
                                if (o && d) {
                                    for (h = 0; p = t[h++];)
                                        if (p(d, a, l)) {
                                            u.push(d);
                                            break
                                        }
                                    b && (q = k, C = ++i)
                                }
                                s && ((d = !p && d) && g--, r && y.push(d))
                            }
                            if (g += v, s && v !== g) {
                                for (h = 0; p = e[h++];) p(y, f, a, l);
                                if (r) {
                                    if (g > 0)
                                        for (; v--;) y[v] || f[v] || (f[v] = J.call(u));
                                    f = m(f)
                                }
                                te.apply(u, f), b && !r && f.length > 0 && g + e.length > 1 && n.uniqueSort(u)
                            }
                            return b && (q = k, E = w), y
                        };
                    return s ? r(a) : a
                }

                function w(t, e, i) {
                    for (var r = 0, s = e.length; s > r; r++) n(t, e[r], i);
                    return i
                }

                function x(t, e, n, i) {
                    var r, s, o, a, l, u = h(t);
                    if (!i && 1 === u.length) {
                        if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && T.getById && 9 === e.nodeType && j && S.relative[s[1].type]) {
                            if (e = (S.find.ID(o.matches[0].replace(Te, Ce), e) || [])[0], !e) return n;
                            t = t.slice(s.shift().value.length)
                        }
                        for (r = ve.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !S.relative[a = o.type]);)
                            if ((l = S.find[a]) && (i = l(o.matches[0].replace(Te, Ce), pe.test(s[0].type) && e.parentNode || e))) {
                                if (s.splice(r, 1), t = i.length && p(s), !t) return te.apply(n, i), n;
                                break
                            }
                    }
                    return $(t, u)(i, e, !j, n, pe.test(t)), n
                }
                var k, T, C, S, _, D, $, E, F, A, M, N, j, P, I, L, O, H = "sizzle" + -new Date,
                    R = t.document,
                    q = 0,
                    z = 0,
                    W = i(),
                    B = i(),
                    Y = i(),
                    U = !1,
                    Q = function(t, e) {
                        return t === e ? (U = !0, 0) : 0
                    },
                    V = typeof e,
                    X = 1 << 31,
                    K = {}.hasOwnProperty,
                    G = [],
                    J = G.pop,
                    Z = G.push,
                    te = G.push,
                    ee = G.slice,
                    ne = G.indexOf || function(t) {
                        for (var e = 0, n = this.length; n > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    re = "[\\x20\\t\\r\\n\\f]",
                    se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    oe = se.replace("w", "w#"),
                    ae = "\\[" + re + "*(" + se + ")" + re + "*(?:([*^$|!~]?=)" + re + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + re + "*\\]",
                    le = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
                    ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
                    de = new RegExp("^" + re + "*," + re + "*"),
                    he = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
                    pe = new RegExp(re + "*[+~]"),
                    fe = new RegExp("=" + re + "*([^\\]'\"]*)" + re + "*\\]", "g"),
                    ge = new RegExp(le),
                    me = new RegExp("^" + oe + "$"),
                    ve = {
                        ID: new RegExp("^#(" + se + ")"),
                        CLASS: new RegExp("^\\.(" + se + ")"),
                        TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ae),
                        PSEUDO: new RegExp("^" + le),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ie + ")$", "i"),
                        needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ye = /^[^{]+\{\s*\[native \w/,
                    be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    we = /^(?:input|select|textarea|button)$/i,
                    xe = /^h\d$/i,
                    ke = /'|\\/g,
                    Te = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
                    Ce = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    };
                try {
                    te.apply(G = ee.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
                } catch (Se) {
                    te = {
                        apply: G.length ? function(t, e) {
                            Z.apply(t, ee.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                D = n.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, T = n.support = {}, A = n.setDocument = function(t) {
                    var e = t ? t.ownerDocument || t : R,
                        n = e.defaultView;
                    return e !== M && 9 === e.nodeType && e.documentElement ? (M = e, N = e.documentElement, j = !D(e), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                        A()
                    }), T.attributes = s(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), T.getElementsByTagName = s(function(t) {
                        return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
                    }), T.getElementsByClassName = s(function(t) {
                        return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                    }), T.getById = s(function(t) {
                        return N.appendChild(t).id = H, !e.getElementsByName || !e.getElementsByName(H).length
                    }), T.getById ? (S.find.ID = function(t, e) {
                        if (typeof e.getElementById !== V && j) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, S.filter.ID = function(t) {
                        var e = t.replace(Te, Ce);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete S.find.ID, S.filter.ID = function(t) {
                        var e = t.replace(Te, Ce);
                        return function(t) {
                            var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), S.find.TAG = T.getElementsByTagName ? function(t, e) {
                        return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
                    } : function(t, e) {
                        var n, i = [],
                            r = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return s
                    }, S.find.CLASS = T.getElementsByClassName && function(t, e) {
                        return typeof e.getElementsByClassName !== V && j ? e.getElementsByClassName(t) : void 0
                    }, I = [], P = [], (T.qsa = ye.test(e.querySelectorAll)) && (s(function(t) {
                        t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || P.push("\\[" + re + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || P.push(":checked")
                    }), s(function(t) {
                        var n = e.createElement("input");
                        n.setAttribute("type", "hidden"), t.appendChild(n).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && P.push("[*^$]=" + re + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (T.matchesSelector = ye.test(L = N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function(t) {
                        T.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), I.push("!=", le)
                    }), P = P.length && new RegExp(P.join("|")), I = I.length && new RegExp(I.join("|")), O = ye.test(N.contains) || N.compareDocumentPosition ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, Q = N.compareDocumentPosition ? function(t, n) {
                        if (t === n) return U = !0, 0;
                        var i = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
                        return i ? 1 & i || !T.sortDetached && n.compareDocumentPosition(t) === i ? t === e || O(R, t) ? -1 : n === e || O(R, n) ? 1 : F ? ne.call(F, t) - ne.call(F, n) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                    } : function(t, n) {
                        var i, r = 0,
                            s = t.parentNode,
                            o = n.parentNode,
                            l = [t],
                            u = [n];
                        if (t === n) return U = !0, 0;
                        if (!s || !o) return t === e ? -1 : n === e ? 1 : s ? -1 : o ? 1 : F ? ne.call(F, t) - ne.call(F, n) : 0;
                        if (s === o) return a(t, n);
                        for (i = t; i = i.parentNode;) l.unshift(i);
                        for (i = n; i = i.parentNode;) u.unshift(i);
                        for (; l[r] === u[r];) r++;
                        return r ? a(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
                    }, e) : M
                }, n.matches = function(t, e) {
                    return n(t, null, null, e)
                }, n.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== M && A(t), e = e.replace(fe, "='$1']"), !(!T.matchesSelector || !j || I && I.test(e) || P && P.test(e))) try {
                        var i = L.call(t, e);
                        if (i || T.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (r) {}
                    return n(e, M, null, [t]).length > 0
                }, n.contains = function(t, e) {
                    return (t.ownerDocument || t) !== M && A(t), O(t, e)
                }, n.attr = function(t, n) {
                    (t.ownerDocument || t) !== M && A(t);
                    var i = S.attrHandle[n.toLowerCase()],
                        r = i && K.call(S.attrHandle, n.toLowerCase()) ? i(t, n, !j) : e;
                    return r === e ? T.attributes || !j ? t.getAttribute(n) : (r = t.getAttributeNode(n)) && r.specified ? r.value : null : r
                }, n.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, n.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        r = 0;
                    if (U = !T.detectDuplicates, F = !T.sortStable && t.slice(0), t.sort(Q), U) {
                        for (; e = t[r++];) e === t[r] && (i = n.push(r));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return t
                }, _ = n.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[i]; i++) n += _(e);
                    return n
                }, S = n.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: ve,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(Te, Ce), t[3] = (t[4] || t[5] || "").replace(Te, Ce), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var n, i = !t[5] && t[2];
                            return ve.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && ge.test(i) && (n = h(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(Te, Ce).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = W[t + " "];
                            return e || (e = new RegExp("(^|" + re + ")" + t + "(" + re + "|$)")) && W(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(r) {
                                var s = n.attr(r, t);
                                return null == s ? "!=" === e : e ? (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s + " ").indexOf(i) > -1 : "|=" === e ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, n, i, r) {
                            var s = "nth" !== t.slice(0, 3),
                                o = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === r ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var u, c, d, h, p, f, g = s !== o ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (m) {
                                    if (s) {
                                        for (; g;) {
                                            for (d = e; d = d[g];)
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                        for (c = m[H] || (m[H] = {}), u = c[t] || [], p = u[0] === q && u[1], h = u[0] === q && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (h = p = 0) || f.pop();)
                                            if (1 === d.nodeType && ++h && d === e) {
                                                c[t] = [q, p, h];
                                                break
                                            }
                                    } else if (y && (u = (e[H] || (e[H] = {}))[t]) && u[0] === q) h = u[1];
                                    else
                                        for (;
                                            (d = ++p && d && d[g] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[H] || (d[H] = {}))[t] = [q, h]), d !== e)););
                                    return h -= r, h === i || h % i === 0 && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, s = S.pseudos[t] || S.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                            return s[H] ? s(e) : s.length > 1 ? (i = [t, t, "", e], S.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, n) {
                                for (var i, r = s(t, e), o = r.length; o--;) i = ne.call(t, r[o]), t[i] = !(n[i] = r[o])
                            }) : function(t) {
                                return s(t, 0, i)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: r(function(t) {
                            var e = [],
                                n = [],
                                i = $(t.replace(ue, "$1"));
                            return i[H] ? r(function(t, e, n, r) {
                                for (var s, o = i(t, null, r, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                            }) : function(t, r, s) {
                                return e[0] = t, i(e, null, s, n), !n.pop()
                            }
                        }),
                        has: r(function(t) {
                            return function(e) {
                                return n(t, e).length > 0
                            }
                        }),
                        contains: r(function(t) {
                            return function(e) {
                                return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                            }
                        }),
                        lang: r(function(t) {
                            return me.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(Te, Ce).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === N
                        },
                        focus: function(t) {
                            return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !S.pseudos.empty(t)
                        },
                        header: function(t) {
                            return xe.test(t.nodeName)
                        },
                        input: function(t) {
                            return we.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: c(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, S.pseudos.nth = S.pseudos.eq;
                for (k in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) S.pseudos[k] = l(k);
                for (k in {
                        submit: !0,
                        reset: !0
                    }) S.pseudos[k] = u(k);
                d.prototype = S.filters = S.pseudos, S.setFilters = new d, $ = n.compile = function(t, e) {
                    var n, i = [],
                        r = [],
                        s = Y[t + " "];
                    if (!s) {
                        for (e || (e = h(t)), n = e.length; n--;) s = y(e[n]), s[H] ? i.push(s) : r.push(s);
                        s = Y(t, b(r, i))
                    }
                    return s
                }, T.sortStable = H.split("").sort(Q).join("") === H, T.detectDuplicates = U, A(), T.sortDetached = s(function(t) {
                    return 1 & t.compareDocumentPosition(M.createElement("div"))
                }), s(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), T.attributes && s(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function(t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), s(function(t) {
                    return null == t.getAttribute("disabled")
                }) || o(ie, function(t, e, n) {
                    var i;
                    return n ? void 0 : (i = t.getAttributeNode(e)) && i.specified ? i.value : t[e] === !0 ? e.toLowerCase() : null
                }), ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
            }(t);
        var Se = {};
        ce.Callbacks = function(t) {
            t = "string" == typeof t ? Se[t] || i(t) : ce.extend({}, t);
            var n, r, s, o, a, l, u = [],
                c = !t.once && [],
                d = function(e) {
                    for (r = t.memory && e, s = !0, a = l || 0, l = 0, o = u.length, n = !0; u && o > a; a++)
                        if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                            r = !1;
                            break
                        }
                    n = !1, u && (c ? c.length && d(c.shift()) : r ? u = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (u) {
                            var e = u.length;
                            ! function i(e) {
                                ce.each(e, function(e, n) {
                                    var r = ce.type(n);
                                    "function" === r ? t.unique && h.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }(arguments), n ? o = u.length : r && (l = e, d(r))
                        }
                        return this
                    },
                    remove: function() {
                        return u && ce.each(arguments, function(t, e) {
                            for (var i;
                                (i = ce.inArray(e, u, i)) > -1;) u.splice(i, 1), n && (o >= i && o--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? ce.inArray(t, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], o = 0, this
                    },
                    disable: function() {
                        return u = c = r = e, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = e, r || h.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !u || s && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : d(e)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!s
                    }
                };
            return h
        }, ce.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ce.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ce.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ce.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ce.Deferred(function(n) {
                                ce.each(e, function(e, s) {
                                    var o = s[0],
                                        a = ce.isFunction(t[e]) && t[e];
                                    r[s[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && ce.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ce.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ce.each(e, function(t, s) {
                    var o = s[2],
                        a = s[3];
                    i[s[1]] = o.add, a && o.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                        return r[s[0] + "With"](this === r ? i : this, arguments), this
                    }, r[s[0] + "With"] = o.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, n, i, r = 0,
                    s = se.call(arguments),
                    o = s.length,
                    a = 1 !== o || t && ce.isFunction(t.promise) ? o : 0,
                    l = 1 === a ? t : ce.Deferred(),
                    u = function(t, n, i) {
                        return function(r) {
                            n[t] = this, i[t] = arguments.length > 1 ? se.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (o > 1)
                    for (e = new Array(o), n = new Array(o), i = new Array(o); o > r; r++) s[r] && ce.isFunction(s[r].promise) ? s[r].promise().done(u(r, i, s)).fail(l.reject).progress(u(r, n, e)) : --a;
                return a || l.resolveWith(i, s), l.promise()
            }
        }), ce.support = function(e) {
            var n, i, r, s, o, a, l, u, c, d = K.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length) return e;
            s = K.createElement("select"), a = s.appendChild(K.createElement("option")), r = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== d.className, e.leadingWhitespace = 3 === d.firstChild.nodeType, e.tbody = !d.getElementsByTagName("tbody").length, e.htmlSerialize = !!d.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!r.value, e.optSelected = a.selected, e.enctype = !!K.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, s.disabled = !0, e.optDisabled = !a.disabled;
            try {
                delete d.test
            } catch (h) {
                e.deleteExpando = !1
            }
            r = K.createElement("input"), r.setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), o = K.createDocumentFragment(), o.appendChild(r), e.appendChecked = r.checked, e.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
                e.noCloneEvent = !1
            }), d.cloneNode(!0).click());
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || d.attributes[l].expando === !1;
            d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === d.style.backgroundClip;
            for (c in ce(e)) break;
            return e.ownLast = "0" !== c, ce(function() {
                var n, i, r, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    o = K.getElementsByTagName("body")[0];
                o && (n = K.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(o, null != o.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    e.boxSizing = 4 === d.offsetWidth
                }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(d, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, i = d.appendChild(K.createElement("div")), i.style.cssText = d.style.cssText = s, i.style.marginRight = i.style.width = "0", d.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== V && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== d.offsetWidth, e.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(n), n = d = r = i = null)
            }), n = s = o = a = i = r = null, e
        }({});
        var _e = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            De = /([A-Z])/g;
        ce.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ce.cache[t[ce.expando]] : t[ce.expando], !!t && !a(t)
            },
            data: function(t, e, n) {
                return r(t, e, n)
            },
            removeData: function(t, e) {
                return s(t, e)
            },
            _data: function(t, e, n) {
                return r(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return s(t, e, !0)
            },
            acceptData: function(t) {
                if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
                var e = t.nodeName && ce.noData[t.nodeName.toLowerCase()];
                return !e || e !== !0 && t.getAttribute("classid") === e
            }
        }), ce.fn.extend({
            data: function(t, n) {
                var i, r, s = null,
                    a = 0,
                    l = this[0];
                if (t === e) {
                    if (this.length && (s = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; a < i.length; a++) r = i[a].name, 0 === r.indexOf("data-") && (r = ce.camelCase(r.slice(5)), o(l, r, s[r]));
                        ce._data(l, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    ce.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ce.data(this, t, n)
                }) : l ? o(l, t, ce.data(l, t)) : null
            },
            removeData: function(t) {
                return this.each(function() {
                    ce.removeData(this, t)
                })
            }
        }), ce.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = ce._data(t, e), n && (!i || ce.isArray(n) ? i = ce._data(t, e, ce.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ce.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    s = ce._queueHooks(t, e),
                    o = function() {
                        ce.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return ce._data(t, n) || ce._data(t, n, {
                    empty: ce.Callbacks("once memory").add(function() {
                        ce._removeData(t, e + "queue"), ce._removeData(t, n)
                    })
                })
            }
        }), ce.fn.extend({
            queue: function(t, n) {
                var i = 2;
                return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? ce.queue(this[0], t) : n === e ? this : this.each(function() {
                    var e = ce.queue(this, t, n);
                    ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ce.dequeue(this, t)
                })
            },
            delay: function(t, e) {
                return t = ce.fx ? ce.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, n) {
                var i, r = 1,
                    s = ce.Deferred(),
                    o = this,
                    a = this.length,
                    l = function() {
                        --r || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = ce._data(o[a], t + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
                return l(), s.promise(n)
            }
        });
        var $e, Ee, Fe = /[\t\r\n\f]/g,
            Ae = /\r/g,
            Me = /^(?:input|select|textarea|button|object)$/i,
            Ne = /^(?:a|area)$/i,
            je = /^(?:checked|selected)$/i,
            Pe = ce.support.getSetAttribute,
            Ie = ce.support.input;
        ce.fn.extend({
            attr: function(t, e) {
                return ce.access(this, ce.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ce.removeAttr(this, t)
                })
            },
            prop: function(t, e) {
                return ce.access(this, ce.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = ce.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = e, delete this[t]
                    } catch (n) {}
                })
            },
            addClass: function(t) {
                var e, n, i, r, s, o = 0,
                    a = this.length,
                    l = "string" == typeof t && t;
                if (ce.isFunction(t)) return this.each(function(e) {
                    ce(this).addClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(he) || []; a > o; o++)
                        if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Fe, " ") : " ")) {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            n.className = ce.trim(i)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, s, o = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof t && t;
                if (ce.isFunction(t)) return this.each(function(e) {
                    ce(this).removeClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(he) || []; a > o; o++)
                        if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Fe, " ") : "")) {
                            for (s = 0; r = e[s++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            n.className = t ? ce.trim(i) : ""
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ce.isFunction(t) ? this.each(function(n) {
                    ce(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var e, i = 0, r = ce(this), s = t.match(he) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else(n === V || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ce._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Fe, " ").indexOf(e) >= 0) return !0;
                return !1
            },
            val: function(t) {
                var n, i, r, s = this[0]; {
                    if (arguments.length) return r = ce.isFunction(t), this.each(function(n) {
                        var s;
                        1 === this.nodeType && (s = r ? t.call(this, n, ce(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : ce.isArray(s) && (s = ce.map(s, function(t) {
                            return null == t ? "" : t + ""
                        })), i = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, s, "value") !== e || (this.value = s))
                    });
                    if (s) return i = ce.valHooks[s.type] || ce.valHooks[s.nodeName.toLowerCase()], i && "get" in i && (n = i.get(s, "value")) !== e ? n : (n = s.value, "string" == typeof n ? n.replace(Ae, "") : null == n ? "" : n)
                }
            }
        }), ce.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ce.find.attr(t, "value");
                        return null != e ? e : t.text
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== r || (ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ce(n).val(), s) return e;
                                o.push(e)
                            }
                        return o
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, s = ce.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = ce.inArray(ce(i).val(), s) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), s
                    }
                }
            },
            attr: function(t, n, i) {
                var r, s, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === V ? ce.prop(t, n, i) : (1 === o && ce.isXMLDoc(t) || (n = n.toLowerCase(), r = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Ee : $e)), i === e ? r && "get" in r && null !== (s = r.get(t, n)) ? s : (s = ce.find.attr(t, n), null == s ? e : s) : null !== i ? r && "set" in r && (s = r.set(t, i, n)) !== e ? s : (t.setAttribute(n, i + ""), i) : (ce.removeAttr(t, n), void 0))
            },
            removeAttr: function(t, e) {
                var n, i, r = 0,
                    s = e && e.match(he);
                if (s && 1 === t.nodeType)
                    for (; n = s[r++];) i = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? Ie && Pe || !je.test(n) ? t[i] = !1 : t[ce.camelCase("default-" + n)] = t[i] = !1 : ce.attr(t, n, ""), t.removeAttribute(Pe ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ce.support.radioValue && "radio" === e && ce.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, n, i) {
                var r, s, o, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ce.isXMLDoc(t), o && (n = ce.propFix[n] || n, s = ce.propHooks[n]), i !== e ? s && "set" in s && (r = s.set(t, i, n)) !== e ? r : t[n] = i : s && "get" in s && null !== (r = s.get(t, n)) ? r : t[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ce.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Me.test(t.nodeName) || Ne.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), Ee = {
            set: function(t, e, n) {
                return e === !1 ? ce.removeAttr(t, n) : Ie && Pe || !je.test(n) ? t.setAttribute(!Pe && ce.propFix[n] || n, n) : t[ce.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(t, n) {
            var i = ce.expr.attrHandle[n] || ce.find.attr;
            ce.expr.attrHandle[n] = Ie && Pe || !je.test(n) ? function(t, n, r) {
                var s = ce.expr.attrHandle[n],
                    o = r ? e : (ce.expr.attrHandle[n] = e) != i(t, n, r) ? n.toLowerCase() : null;
                return ce.expr.attrHandle[n] = s, o
            } : function(t, n, i) {
                return i ? e : t[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), Ie && Pe || (ce.attrHooks.value = {
            set: function(t, e, n) {
                return ce.nodeName(t, "input") ? (t.defaultValue = e, void 0) : $e && $e.set(t, e, n)
            }
        }), Pe || ($e = {
            set: function(t, n, i) {
                var r = t.getAttributeNode(i);
                return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
            }
        }, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function(t, n, i) {
            var r;
            return i ? e : (r = t.getAttributeNode(n)) && "" !== r.value ? r.value : null
        }, ce.valHooks.button = {
            get: function(t, n) {
                var i = t.getAttributeNode(n);
                return i && i.specified ? i.value : e
            },
            set: $e.set
        }, ce.attrHooks.contenteditable = {
            set: function(t, e, n) {
                $e.set(t, "" === e ? !1 : e, n)
            }
        }, ce.each(["width", "height"], function(t, e) {
            ce.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), ce.support.hrefNormalized || ce.each(["href", "src"], function(t, e) {
            ce.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ce.support.style || (ce.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || e
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        }), ce.support.optSelected || (ce.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ce.propFix[this.toLowerCase()] = this
        }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function() {
            ce.valHooks[this] = {
                set: function(t, e) {
                    return ce.isArray(e) ? t.checked = ce.inArray(ce(t).val(), e) >= 0 : void 0
                }
            }, ce.support.checkOn || (ce.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Le = /^(?:input|select|textarea)$/i,
            Oe = /^key/,
            He = /^(?:mouse|contextmenu)|click/,
            Re = /^(?:focusinfocus|focusoutblur)$/,
            qe = /^([^.]*)(?:\.(.+)|)$/;
        ce.event = {
            global: {},
            add: function(t, n, i, r, s) {
                var o, a, l, u, c, d, h, p, f, g, m, v = ce._data(t);
                if (v) {
                    for (i.handler && (u = i, i = u.handler, s = u.selector), i.guid || (i.guid = ce.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function(t) {
                            return typeof ce === V || t && ce.event.triggered === t.type ? e : ce.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = t), n = (n || "").match(he) || [""], l = n.length; l--;) o = qe.exec(n[l]) || [], f = m = o[1], g = (o[2] || "").split(".").sort(), f && (c = ce.event.special[f] || {}, f = (s ? c.delegateType : c.bindType) || f, c = ce.event.special[f] || {}, h = ce.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && ce.expr.match.needsContext.test(s),
                        namespace: g.join(".")
                    }, u), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && c.setup.call(t, r, g, d) !== !1 || (t.addEventListener ? t.addEventListener(f, d, !1) : t.attachEvent && t.attachEvent("on" + f, d))), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? p.splice(p.delegateCount++, 0, h) : p.push(h), ce.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, r) {
                var s, o, a, l, u, c, d, h, p, f, g, m = ce.hasData(t) && ce._data(t);
                if (m && (c = m.events)) {
                    for (e = (e || "").match(he) || [""], u = e.length; u--;)
                        if (a = qe.exec(e[u]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = ce.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) o = h[s], !r && g !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, d.remove && d.remove.call(t, o));
                            l && !h.length && (d.teardown && d.teardown.call(t, f, m.handle) !== !1 || ce.removeEvent(t, p, m.handle), delete c[p])
                        } else
                            for (p in c) ce.event.remove(t, p + e[u], n, i, !0);
                    ce.isEmptyObject(c) && (delete m.handle, ce._removeData(t, "events"))
                }
            },
            trigger: function(n, i, r, s) {
                var o, a, l, u, c, d, h, p = [r || K],
                    f = le.call(n, "type") ? n.type : n,
                    g = le.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = d = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !Re.test(f + ce.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = f.indexOf(":") < 0 && "on" + f, n = n[ce.expando] ? n : new ce.Event(f, "object" == typeof n && n), n.isTrigger = s ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = r), i = null == i ? [n] : ce.makeArray(i, [n]), c = ce.event.special[f] || {}, s || !c.trigger || c.trigger.apply(r, i) !== !1)) {
                    if (!s && !c.noBubble && !ce.isWindow(r)) {
                        for (u = c.delegateType || f, Re.test(u + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l), d = l;
                        d === (r.ownerDocument || K) && p.push(d.defaultView || d.parentWindow || t)
                    }
                    for (h = 0;
                        (l = p[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? u : c.bindType || f, o = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle"), o && o.apply(l, i), o = a && l[a], o && ce.acceptData(l) && o.apply && o.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = f, !s && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && ce.acceptData(r) && a && r[f] && !ce.isWindow(r)) {
                        d = r[a], d && (r[a] = null), ce.event.triggered = f;
                        try {
                            r[f]()
                        } catch (m) {}
                        ce.event.triggered = e, d && (r[a] = d)
                    }
                    return n.result
                }
            },
            dispatch: function(t) {
                t = ce.event.fix(t);
                var n, i, r, s, o, a = [],
                    l = se.call(arguments),
                    u = (ce._data(this, "events") || {})[t.type] || [],
                    c = ce.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = ce.event.handlers.call(this, t, u), n = 0;
                        (s = a[n++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, o = 0;
                            (r = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((ce.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, n) {
                var i, r, s, o, a = [],
                    l = n.delegateCount,
                    u = t.target;
                if (l && u.nodeType && (!t.button || "click" !== t.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                            for (s = [], o = 0; l > o; o++) r = n[o], i = r.selector + " ", s[i] === e && (s[i] = r.needsContext ? ce(i, this).index(u) >= 0 : ce.find(i, this, null, [u]).length), s[i] && s.push(r);
                            s.length && a.push({
                                elem: u,
                                handlers: s
                            })
                        }
                return l < n.length && a.push({
                    elem: this,
                    handlers: n.slice(l)
                }), a
            },
            fix: function(t) {
                if (t[ce.expando]) return t;
                var e, n, i, r = t.type,
                    s = t,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = He.test(r) ? this.mouseHooks : Oe.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new ce.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
                return t.target || (t.target = s.srcElement || K), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, n) {
                    var i, r, s, o = n.button,
                        a = n.fromElement;
                    return null == t.pageX && null != n.clientX && (r = t.target.ownerDocument || K, s = r.documentElement, i = r.body, t.pageX = n.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || o === e || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== c() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return ce.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== e && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var r = ce.extend(new ce.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ce.event.trigger(r, null, e) : ce.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ce.removeEvent = K.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === V && (t[i] = null), t.detachEvent(i, n))
        }, ce.Event = function(t, e) {
            return this instanceof ce.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, e && ce.extend(this, e), this.timeStamp = t && t.timeStamp || ce.now(), this[ce.expando] = !0, void 0) : new ce.Event(t, e)
        }, ce.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ce.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, e) {
            ce.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        s = t.handleObj;
                    return (!r || r !== i && !ce.contains(i, r)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ce.support.submitBubbles || (ce.event.special.submit = {
            setup: function() {
                return ce.nodeName(this, "form") ? !1 : (ce.event.add(this, "click._submit keypress._submit", function(t) {
                    var n = t.target,
                        i = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : e;
                    i && !ce._data(i, "submitBubbles") && (ce.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), ce._data(i, "submitBubbles", !0))
                }), void 0)
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ce.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return ce.nodeName(this, "form") ? !1 : (ce.event.remove(this, "._submit"), void 0)
            }
        }), ce.support.changeBubbles || (ce.event.special.change = {
            setup: function() {
                return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ce.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, t, !0)
                })), !1) : (ce.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Le.test(e.nodeName) && !ce._data(e, "changeBubbles") && (ce.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ce.event.simulate("change", this.parentNode, t, !0)
                    }), ce._data(e, "changeBubbles", !0))
                }), void 0)
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ce.event.remove(this, "._change"), !Le.test(this.nodeName)
            }
        }), ce.support.focusinBubbles || ce.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = 0,
                i = function(t) {
                    ce.event.simulate(e, t.target, ce.event.fix(t), !0)
                };
            ce.event.special[e] = {
                setup: function() {
                    0 === n++ && K.addEventListener(t, i, !0)
                },
                teardown: function() {
                    0 === --n && K.removeEventListener(t, i, !0)
                }
            }
        }), ce.fn.extend({
            on: function(t, n, i, r, s) {
                var o, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n, n = e);
                    for (o in t) this.on(o, n, i, t[o], s);
                    return this
                }
                if (null == i && null == r ? (r = n, i = n = e) : null == r && ("string" == typeof n ? (r = i, i = e) : (r = i, i = n, n = e)), r === !1) r = u;
                else if (!r) return this;
                return 1 === s && (a = r, r = function(t) {
                    return ce().off(t), a.apply(this, arguments)
                }, r.guid = a.guid || (a.guid = ce.guid++)), this.each(function() {
                    ce.event.add(this, t, r, i, n)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, n, i) {
                var r, s;
                if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ce(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, n, t[s]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = u), this.each(function() {
                    ce.event.remove(this, t, i, n)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    ce.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? ce.event.trigger(t, e, n, !0) : void 0
            }
        });
        var ze = /^.[^:#\[\.,]*$/,
            We = /^(?:parents|prev(?:Until|All))/,
            Be = ce.expr.match.needsContext,
            Ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ce.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof t) return this.pushStack(ce(t).filter(function() {
                    for (e = 0; r > e; e++)
                        if (ce.contains(i[e], this)) return !0
                }));
                for (e = 0; r > e; e++) ce.find(t, i[e], n);
                return n = this.pushStack(r > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            has: function(t) {
                var e, n = ce(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (ce.contains(this, n[e])) return !0
                })
            },
            not: function(t) {
                return this.pushStack(h(this, t || [], !0))
            },
            filter: function(t) {
                return this.pushStack(h(this, t || [], !1))
            },
            is: function(t) {
                return !!h(this, "string" == typeof t && Be.test(t) ? ce(t) : t || [], !1).length
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, s = [], o = Be.test(t) || "string" != typeof t ? ce(t, e || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, t))) {
                            n = s.push(n);
                            break
                        }
                return this.pushStack(s.length > 1 ? ce.unique(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ce.inArray(this[0], ce(t)) : ce.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                var n = "string" == typeof t ? ce(t, e) : ce.makeArray(t && t.nodeType ? [t] : t),
                    i = ce.merge(this.get(), n);
                return this.pushStack(ce.unique(i))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ce.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ce.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return ce.dir(t, "parentNode", n)
            },
            next: function(t) {
                return d(t, "nextSibling")
            },
            prev: function(t) {
                return d(t, "previousSibling")
            },
            nextAll: function(t) {
                return ce.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return ce.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return ce.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return ce.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return ce.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ce.sibling(t.firstChild)
            },
            contents: function(t) {
                return ce.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ce.merge([], t.childNodes)
            }
        }, function(t, e) {
            ce.fn[t] = function(n, i) {
                var r = ce.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ce.filter(i, r)), this.length > 1 && (Ye[t] || (r = ce.unique(r)), We.test(t) && (r = r.reverse())), this.pushStack(r)
            }
        }), ce.extend({
            filter: function(t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ce.find.matchesSelector(i, t) ? [i] : [] : ce.find.matches(t, ce.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            },
            dir: function(t, n, i) {
                for (var r = [], s = t[n]; s && 9 !== s.nodeType && (i === e || 1 !== s.nodeType || !ce(s).is(i));) 1 === s.nodeType && r.push(s), s = s[n];
                return r
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        });
        var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Qe = / jQuery\d+="(?:null|\d+)"/g,
            Ve = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
            Xe = /^\s+/,
            Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ge = /<([\w:]+)/,
            Je = /<tbody/i,
            Ze = /<|&#?\w+;/,
            tn = /<(?:script|style|link)/i,
            en = /^(?:checkbox|radio)$/i,
            nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rn = /^$|\/(?:java|ecma)script/i,
            sn = /^true\/(.*)/,
            on = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            an = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ln = p(K),
            un = ln.appendChild(K.createElement("div"));
        an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ce.fn.extend({
            text: function(t) {
                return ce.access(this, function(t) {
                    return t === e ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? ce.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || ce.cleanData(w(n)), n.parentNode && (e && ce.contains(n.ownerDocument, n) && v(w(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ce.cleanData(w(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && ce.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return ce.clone(this, t, e)
                })
            },
            html: function(t) {
                return ce.access(this, function(t) {
                    var n = this[0] || {},
                        i = 0,
                        r = this.length;
                    if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Qe, "") : e;
                    if (!("string" != typeof t || tn.test(t) || !ce.support.htmlSerialize && Ve.test(t) || !ce.support.leadingWhitespace && Xe.test(t) || an[(Ge.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Ke, "<$1></$2>");
                        try {
                            for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (ce.cleanData(w(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = ce.map(this, function(t) {
                        return [t.nextSibling, t.parentNode]
                    }),
                    e = 0;
                return this.domManip(arguments, function(n) {
                    var i = t[e++],
                        r = t[e++];
                    r && (i && i.parentNode !== r && (i = this.nextSibling), ce(this).remove(), r.insertBefore(n, i))
                }, !0), e ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e, n) {
                t = ie.apply([], t);
                var i, r, s, o, a, l, u = 0,
                    c = this.length,
                    d = this,
                    h = c - 1,
                    p = t[0],
                    f = ce.isFunction(p);
                if (f || !(1 >= c || "string" != typeof p || ce.support.checkClone) && nn.test(p)) return this.each(function(i) {
                    var r = d.eq(i);
                    f && (t[0] = p.call(this, i, r.html())), r.domManip(t, e, n)
                });
                if (c && (l = ce.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (o = ce.map(w(l, "script"), g), s = o.length; c > u; u++) r = l, u !== h && (r = ce.clone(r, !0, !0), s && ce.merge(o, w(r, "script"))), e.call(this[u], r, u);
                    if (s)
                        for (a = o[o.length - 1].ownerDocument, ce.map(o, m), u = 0; s > u; u++) r = o[u], rn.test(r.type || "") && !ce._data(r, "globalEval") && ce.contains(a, r) && (r.src ? ce._evalUrl(r.src) : ce.globalEval((r.text || r.textContent || r.innerHTML || "").replace(on, "")));
                    l = i = null
                }
                return this
            }
        }), ce.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ce.fn[t] = function(t) {
                for (var n, i = 0, r = [], s = ce(t), o = s.length - 1; o >= i; i++) n = i === o ? this : this.clone(!0), ce(s[i])[e](n), re.apply(r, n.get());
                return this.pushStack(r)
            }
        }), ce.extend({
            clone: function(t, e, n) {
                var i, r, s, o, a, l = ce.contains(t.ownerDocument, t);
                if (ce.support.html5Clone || ce.isXMLDoc(t) || !Ve.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (un.innerHTML = t.outerHTML, un.removeChild(s = un.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ce.isXMLDoc(t)))
                    for (i = w(s), a = w(t), o = 0; null != (r = a[o]); ++o) i[o] && b(r, i[o]);
                if (e)
                    if (n)
                        for (a = a || w(t), i = i || w(s), o = 0; null != (r = a[o]); o++) y(r, i[o]);
                    else y(t, s);
                return i = w(s, "script"), i.length > 0 && v(i, !l && w(t, "script")), i = a = r = null, s
            },
            buildFragment: function(t, e, n, i) {
                for (var r, s, o, a, l, u, c, d = t.length, h = p(e), f = [], g = 0; d > g; g++)
                    if (s = t[g], s || 0 === s)
                        if ("object" === ce.type(s)) ce.merge(f, s.nodeType ? [s] : s);
                        else if (Ze.test(s)) {
                    for (a = a || h.appendChild(e.createElement("div")), l = (Ge.exec(s) || ["", ""])[1].toLowerCase(), c = an[l] || an._default, a.innerHTML = c[1] + s.replace(Ke, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                    if (!ce.support.leadingWhitespace && Xe.test(s) && f.push(e.createTextNode(Xe.exec(s)[0])), !ce.support.tbody)
                        for (s = "table" !== l || Je.test(s) ? "<table>" !== c[1] || Je.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;) ce.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                    for (ce.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = h.lastChild
                } else f.push(e.createTextNode(s));
                for (a && h.removeChild(a), ce.support.appendChecked || ce.grep(w(f, "input"), x), g = 0; s = f[g++];)
                    if ((!i || -1 === ce.inArray(s, i)) && (o = ce.contains(s.ownerDocument, s), a = w(h.appendChild(s), "script"), o && v(a), n))
                        for (r = 0; s = a[r++];) rn.test(s.type || "") && n.push(s);
                return a = null, h
            },
            cleanData: function(t, e) {
                for (var n, i, r, s, o = 0, a = ce.expando, l = ce.cache, u = ce.support.deleteExpando, c = ce.event.special; null != (n = t[o]); o++)
                    if ((e || ce.acceptData(n)) && (r = n[a], s = r && l[r])) {
                        if (s.events)
                            for (i in s.events) c[i] ? ce.event.remove(n, i) : ce.removeEvent(n, i, s.handle);
                        l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== V ? n.removeAttribute(a) : n[a] = null, ee.push(r))
                    }
            },
            _evalUrl: function(t) {
                return ce.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ce.fn.extend({
            wrapAll: function(t) {
                if (ce.isFunction(t)) return this.each(function(e) {
                    ce(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ce(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return ce.isFunction(t) ? this.each(function(e) {
                    ce(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ce(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ce.isFunction(t);
                return this.each(function(n) {
                    ce(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var cn, dn, hn, pn = /alpha\([^)]*\)/i,
            fn = /opacity\s*=\s*([^)]*)/,
            gn = /^(top|right|bottom|left)$/,
            mn = /^(none|table(?!-c[ea]).+)/,
            vn = /^margin/,
            yn = new RegExp("^(" + de + ")(.*)$", "i"),
            bn = new RegExp("^(" + de + ")(?!px)[a-z%]+$", "i"),
            wn = new RegExp("^([+-])=(" + de + ")", "i"),
            xn = {
                BODY: "block"
            },
            kn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Tn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Cn = ["Top", "Right", "Bottom", "Left"],
            Sn = ["Webkit", "O", "Moz", "ms"];
        ce.fn.extend({
            css: function(t, n) {
                return ce.access(this, function(t, n, i) {
                    var r, s, o = {},
                        a = 0;
                    if (ce.isArray(n)) {
                        for (s = dn(t), r = n.length; r > a; a++) o[n[a]] = ce.css(t, n[a], !1, s);
                        return o
                    }
                    return i !== e ? ce.style(t, n, i) : ce.css(t, n)
                }, t, n, arguments.length > 1)
            },
            show: function() {
                return C(this, !0)
            },
            hide: function() {
                return C(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    T(this) ? ce(this).show() : ce(this).hide()
                })
            }
        }), ce.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = hn(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ce.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, n, i, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, a, l = ce.camelCase(n),
                        u = t.style;
                    if (n = ce.cssProps[l] || (ce.cssProps[l] = k(u, l)), a = ce.cssHooks[n] || ce.cssHooks[l], i === e) return a && "get" in a && (s = a.get(t, !1, r)) !== e ? s : u[n];
                    if (o = typeof i, "string" === o && (s = wn.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(ce.css(t, n)), o = "number"), !(null == i || "number" === o && isNaN(i) || ("number" !== o || ce.cssNumber[l] || (i += "px"), ce.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(t, i, r)) === e))) try {
                        u[n] = i
                    } catch (c) {}
                }
            },
            css: function(t, n, i, r) {
                var s, o, a, l = ce.camelCase(n);
                return n = ce.cssProps[l] || (ce.cssProps[l] = k(t.style, l)), a = ce.cssHooks[n] || ce.cssHooks[l], a && "get" in a && (o = a.get(t, !0, i)), o === e && (o = hn(t, n, r)), "normal" === o && n in Tn && (o = Tn[n]), "" === i || i ? (s = parseFloat(o), i === !0 || ce.isNumeric(s) ? s || 0 : o) : o
            }
        }), t.getComputedStyle ? (dn = function(e) {
            return t.getComputedStyle(e, null)
        }, hn = function(t, n, i) {
            var r, s, o, a = i || dn(t),
                l = a ? a.getPropertyValue(n) || a[n] : e,
                u = t.style;
            return a && ("" !== l || ce.contains(t.ownerDocument, t) || (l = ce.style(t, n)), bn.test(l) && vn.test(n) && (r = u.width, s = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = r, u.minWidth = s, u.maxWidth = o)), l
        }) : K.documentElement.currentStyle && (dn = function(t) {
            return t.currentStyle
        }, hn = function(t, n, i) {
            var r, s, o, a = i || dn(t),
                l = a ? a[n] : e,
                u = t.style;
            return null == l && u && u[n] && (l = u[n]), bn.test(l) && !gn.test(n) && (r = u.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = r, o && (s.left = o)), "" === l ? "auto" : l
        }), ce.each(["height", "width"], function(t, e) {
            ce.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? 0 === t.offsetWidth && mn.test(ce.css(t, "display")) ? ce.swap(t, kn, function() {
                        return D(t, e, i)
                    }) : D(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var r = i && dn(t);
                    return S(t, n, i ? _(t, e, i, ce.support.boxSizing && "border-box" === ce.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ce.support.opacity || (ce.cssHooks.opacity = {
            get: function(t, e) {
                return fn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    r = ce.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    s = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ce.trim(s.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = pn.test(s) ? s.replace(pn, r) : s + " " + r)
            }
        }), ce(function() {
            ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
                get: function(t, e) {
                    return e ? ce.swap(t, {
                        display: "inline-block"
                    }, hn, [t, "marginRight"]) : void 0
                }
            }), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function(t, e) {
                ce.cssHooks[e] = {
                    get: function(t, n) {
                        return n ? (n = hn(t, e), bn.test(n) ? ce(t).position()[e] + "px" : n) : void 0
                    }
                }
            })
        }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ce.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ce.css(t, "display"))
        }, ce.expr.filters.visible = function(t) {
            return !ce.expr.filters.hidden(t)
        }), ce.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ce.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Cn[i] + e] = s[i] || s[i - 2] || s[0];
                    return r
                }
            }, vn.test(t) || (ce.cssHooks[t + e].set = S)
        });
        var _n = /%20/g,
            Dn = /\[\]$/,
            $n = /\r?\n/g,
            En = /^(?:submit|button|image|reset|file)$/i,
            Fn = /^(?:input|select|textarea|keygen)/i;
        ce.fn.extend({
            serialize: function() {
                return ce.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ce.prop(this, "elements");
                    return t ? ce.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ce(this).is(":disabled") && Fn.test(this.nodeName) && !En.test(t) && (this.checked || !en.test(t))
                }).map(function(t, e) {
                    var n = ce(this).val();
                    return null == n ? null : ce.isArray(n) ? ce.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace($n, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace($n, "\r\n")
                    }
                }).get()
            }
        }), ce.param = function(t, n) {
            var i, r = [],
                s = function(t, e) {
                    e = ce.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (n === e && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(t) || t.jquery && !ce.isPlainObject(t)) ce.each(t, function() {
                s(this.name, this.value)
            });
            else
                for (i in t) F(i, t[i], n, s);
            return r.join("&").replace(_n, "+")
        }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ce.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ce.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var An, Mn, Nn = ce.now(),
            jn = /\?/,
            Pn = /#.*$/,
            In = /([?&])_=[^&]*/,
            Ln = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Hn = /^(?:GET|HEAD)$/,
            Rn = /^\/\//,
            qn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            zn = ce.fn.load,
            Wn = {},
            Bn = {},
            Yn = "*/".concat("*");
        try {
            Mn = X.href
        } catch (Un) {
            Mn = K.createElement("a"), Mn.href = "", Mn = Mn.href
        }
        An = qn.exec(Mn.toLowerCase()) || [], ce.fn.load = function(t, n, i) {
            if ("string" != typeof t && zn) return zn.apply(this, arguments);
            var r, s, o, a = this,
                l = t.indexOf(" ");
            return l >= 0 && (r = t.slice(l, t.length), t = t.slice(0, l)), ce.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (o = "POST"), a.length > 0 && ce.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: n
            }).done(function(t) {
                s = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(t)).find(r) : t)
            }).complete(i && function(t, e) {
                a.each(i, s || [t.responseText, e, t])
            }), this
        }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ce.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ce.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Mn,
                type: "GET",
                isLocal: On.test(An[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Yn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ce.parseJSON,
                    "text xml": ce.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? N(N(t, ce.ajaxSettings), e) : N(ce.ajaxSettings, t)
            },
            ajaxPrefilter: A(Wn),
            ajaxTransport: A(Bn),
            ajax: function(t, n) {
                function i(t, n, i, r) {
                    var s, d, y, b, x, T = n;
                    2 !== w && (w = 2, l && clearTimeout(l), c = e, a = r || "", k.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (b = j(h, k, i)), b = P(h, b, k, s), s ? (h.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (ce.lastModified[o] = x), x = k.getResponseHeader("etag"), x && (ce.etag[o] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, s = !y)) : (y = T, (t || !T) && (T = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || T) + "", s ? g.resolveWith(p, [d, T, k]) : g.rejectWith(p, [k, T, y]), k.statusCode(v), v = e, u && f.trigger(s ? "ajaxSuccess" : "ajaxError", [k, h, s ? d : y]), m.fireWith(p, [k, T]), u && (f.trigger("ajaxComplete", [k, h]), --ce.active || ce.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = e), n = n || {};
                var r, s, o, a, l, u, c, d, h = ce.ajaxSetup({}, n),
                    p = h.context || h,
                    f = h.context && (p.nodeType || p.jquery) ? ce(p) : ce.event,
                    g = ce.Deferred(),
                    m = ce.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    x = "canceled",
                    k = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!d)
                                    for (d = {}; e = Ln.exec(a);) d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return w || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else k.always(t[k.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return c && c.abort(e), i(0, e), this
                        }
                    };
                if (g.promise(k).complete = m.add, k.success = k.done, k.error = k.fail, h.url = ((t || h.url || Mn) + "").replace(Pn, "").replace(Rn, An[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ce.trim(h.dataType || "*").toLowerCase().match(he) || [""], null == h.crossDomain && (r = qn.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === An[1] && r[2] === An[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (An[3] || ("http:" === An[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ce.param(h.data, h.traditional)), M(Wn, h, n, k), 2 === w) return k;
                u = h.global, u && 0 === ce.active++ && ce.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Hn.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (jn.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = In.test(o) ? o.replace(In, "$1_=" + Nn++) : o + (jn.test(o) ? "&" : "?") + "_=" + Nn++)), h.ifModified && (ce.lastModified[o] && k.setRequestHeader("If-Modified-Since", ce.lastModified[o]), ce.etag[o] && k.setRequestHeader("If-None-Match", ce.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Yn + "; q=0.01" : "") : h.accepts["*"]);
                for (s in h.headers) k.setRequestHeader(s, h.headers[s]);
                if (h.beforeSend && (h.beforeSend.call(p, k, h) === !1 || 2 === w)) return k.abort();
                x = "abort";
                for (s in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) k[s](h[s]);
                if (c = M(Bn, h, n, k)) {
                    k.readyState = 1, u && f.trigger("ajaxSend", [k, h]), h.async && h.timeout > 0 && (l = setTimeout(function() {
                        k.abort("timeout")
                    }, h.timeout));
                    try {
                        w = 1, c.send(y, i)
                    } catch (T) {
                        if (!(2 > w)) throw T;
                        i(-1, T)
                    }
                } else i(-1, "No Transport");
                return k
            },
            getJSON: function(t, e, n) {
                return ce.get(t, e, n, "json")
            },
            getScript: function(t, n) {
                return ce.get(t, e, n, "script")
            }
        }), ce.each(["get", "post"], function(t, n) {
            ce[n] = function(t, i, r, s) {
                return ce.isFunction(i) && (s = s || r, r = i, i = e), ce.ajax({
                    url: t,
                    type: n,
                    dataType: s,
                    data: i,
                    success: r
                })
            }
        }), ce.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return ce.globalEval(t), t
                }
            }
        }), ce.ajaxPrefilter("script", function(t) {
            t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ce.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var n, i = K.head || ce("head")[0] || K.documentElement;
                return {
                    send: function(e, r) {
                        n = K.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(t, e) {
                            (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || r(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(e, !0)
                    }
                }
            }
        });
        var Qn = [],
            Vn = /(=)\?(?=&|$)|\?\?/;
        ce.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Qn.pop() || ce.expando + "_" + Nn++;
                return this[t] = !0, t
            }
        }), ce.ajaxPrefilter("json jsonp", function(n, i, r) {
            var s, o, a, l = n.jsonp !== !1 && (Vn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vn.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vn, "$1" + s) : n.jsonp !== !1 && (n.url += (jn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                return a || ce.error(s + " was not called"), a[0]
            }, n.dataTypes[0] = "json", o = t[s], t[s] = function() {
                a = arguments
            }, r.always(function() {
                t[s] = o, n[s] && (n.jsonpCallback = i.jsonpCallback, Qn.push(s)), a && ce.isFunction(o) && o(a[0]), a = o = e
            }), "script") : void 0
        });
        var Xn, Kn, Gn = 0,
            Jn = t.ActiveXObject && function() {
                var t;
                for (t in Xn) Xn[t](e, !0)
            };
        ce.ajaxSettings.xhr = t.ActiveXObject ? function() {
            return !this.isLocal && I() || L()
        } : I, Kn = ce.ajaxSettings.xhr(), ce.support.cors = !!Kn && "withCredentials" in Kn, Kn = ce.support.ajax = !!Kn, Kn && ce.ajaxTransport(function(n) {
            if (!n.crossDomain || ce.support.cors) {
                var i;
                return {
                    send: function(r, s) {
                        var o, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in r) l.setRequestHeader(a, r[a])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), i = function(t, r) {
                            var a, u, c, d;
                            try {
                                if (i && (r || 4 === l.readyState))
                                    if (i = e, o && (l.onreadystatechange = ce.noop, Jn && delete Xn[o]), r) 4 !== l.readyState && l.abort();
                                    else {
                                        d = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                        try {
                                            c = l.statusText
                                        } catch (h) {
                                            c = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                    }
                            } catch (p) {
                                r || s(-1, p)
                            }
                            d && s(a, c, d, u)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (o = ++Gn, Jn && (Xn || (Xn = {}, ce(t).unload(Jn)), Xn[o] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(e, !0)
                    }
                }
            }
        });
        var Zn, ti, ei = /^(?:toggle|show|hide)$/,
            ni = new RegExp("^(?:([+-])=|)(" + de + ")([a-z%]*)$", "i"),
            ii = /queueHooks$/,
            ri = [z],
            si = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        r = ni.exec(e),
                        s = r && r[3] || (ce.cssNumber[t] ? "" : "px"),
                        o = (ce.cssNumber[t] || "px" !== s && +i) && ni.exec(ce.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], r = r || [], o = +i || 1;
                        do a = a || ".5", o /= a, ce.style(n.elem, t, o + s); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return r && (o = n.start = +o || +i || 0, n.unit = s, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        ce.Animation = ce.extend(R, {
            tweener: function(t, e) {
                ce.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], si[n] = si[n] || [], si[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ri.unshift(t) : ri.push(t)
            }
        }), ce.Tween = W, W.prototype = {
            constructor: W,
            init: function(t, e, n, i, r, s) {
                this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ce.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = W.propHooks[this.prop];
                return t && t.get ? t.get(this) : W.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = W.propHooks[this.prop];
                return this.pos = e = this.options.duration ? ce.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ce.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    ce.fx.step[t.prop] ? ce.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ce.cssProps[t.prop]] || ce.cssHooks[t.prop]) ? ce.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ce.each(["toggle", "show", "hide"], function(t, e) {
            var n = ce.fn[e];
            ce.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, i, r)
            }
        }), ce.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(T).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = ce.isEmptyObject(t),
                    s = ce.speed(e, n, i),
                    o = function() {
                        var e = R(this, ce.extend({}, t), s);
                        (r || ce._data(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(t, n, i) {
                var r = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        n = null != t && t + "queueHooks",
                        s = ce.timers,
                        o = ce._data(this);
                    if (n) o[n] && o[n].stop && r(o[n]);
                    else
                        for (n in o) o[n] && o[n].stop && ii.test(n) && r(o[n]);
                    for (n = s.length; n--;) s[n].elem !== this || null != t && s[n].queue !== t || (s[n].anim.stop(i), e = !1, s.splice(n, 1));
                    (e || !i) && ce.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ce._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        s = ce.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, ce.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; o > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ce.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ce.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ce.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ce.extend({}, t) : {
                complete: n || !n && e || ce.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ce.isFunction(e) && e
            };
            return i.duration = ce.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ce.fx.speeds ? ce.fx.speeds[i.duration] : ce.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ce.isFunction(i.old) && i.old.call(this), i.queue && ce.dequeue(this, i.queue)
            }, i
        }, ce.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ce.timers = [], ce.fx = W.prototype.init, ce.fx.tick = function() {
            var t, n = ce.timers,
                i = 0;
            for (Zn = ce.now(); i < n.length; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
            n.length || ce.fx.stop(), Zn = e
        }, ce.fx.timer = function(t) {
            t() && ce.timers.push(t) && ce.fx.start()
        }, ce.fx.interval = 13, ce.fx.start = function() {
            ti || (ti = setInterval(ce.fx.tick, ce.fx.interval))
        }, ce.fx.stop = function() {
            clearInterval(ti), ti = null
        }, ce.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function(t) {
            return ce.grep(ce.timers, function(e) {
                return t === e.elem
            }).length
        }), ce.fn.offset = function(t) {
            if (arguments.length) return t === e ? this : this.each(function(e) {
                ce.offset.setOffset(this, t, e)
            });
            var n, i, r = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                o = s && s.ownerDocument;
            if (o) return n = o.documentElement, ce.contains(n, s) ? (typeof s.getBoundingClientRect !== V && (r = s.getBoundingClientRect()), i = Y(o), {
                top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : r
        }, ce.offset = {
            setOffset: function(t, e, n) {
                var i = ce.css(t, "position");
                "static" === i && (t.style.position = "relative");
                var r, s, o = ce(t),
                    a = o.offset(),
                    l = ce.css(t, "top"),
                    u = ce.css(t, "left"),
                    c = ("absolute" === i || "fixed" === i) && ce.inArray("auto", [l, u]) > -1,
                    d = {},
                    h = {};
                c ? (h = o.position(), r = h.top, s = h.left) : (r = parseFloat(l) || 0, s = parseFloat(u) || 0), ce.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : o.css(d)
            }
        }, ce.fn.extend({
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ce.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ce.nodeName(t[0], "html") || (n = t.offset()), n.top += ce.css(t[0], "borderTopWidth", !0), n.left += ce.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ce.css(i, "marginTop", !0),
                        left: e.left - n.left - ce.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || G; t && !ce.nodeName(t, "html") && "static" === ce.css(t, "position");) t = t.offsetParent;
                    return t || G
                })
            }
        }), ce.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var i = /Y/.test(n);
            ce.fn[t] = function(r) {
                return ce.access(this, function(t, r, s) {
                    var o = Y(t);
                    return s === e ? o ? n in o ? o[n] : o.document.documentElement[r] : t[r] : (o ? o.scrollTo(i ? ce(o).scrollLeft() : s, i ? s : ce(o).scrollTop()) : t[r] = s, void 0)
                }, t, r, arguments.length, null)
            }
        }), ce.each({
            Height: "height",
            Width: "width"
        }, function(t, n) {
            ce.each({
                padding: "inner" + t,
                content: n,
                "": "outer" + t
            }, function(i, r) {
                ce.fn[r] = function(r, s) {
                    var o = arguments.length && (i || "boolean" != typeof r),
                        a = i || (r === !0 || s === !0 ? "margin" : "border");
                    return ce.access(this, function(n, i, r) {
                        var s;
                        return ce.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + t], s["scroll" + t], n.body["offset" + t], s["offset" + t], s["client" + t])) : r === e ? ce.css(n, i, a) : ce.style(n, i, r, a)
                    }, n, o ? r : e, o, null)
                }
            })
        }), ce.fn.size = function() {
            return this.length
        }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (t.jQuery = t.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ce
        }))
    }(window),
    function(t, e) {
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var n, i = t(document);
        t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
            buttonClickSelector: "button[data-remote]",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
            disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with]",
            CSRFProtection: function(e) {
                var n = t('meta[name="csrf-token"]').attr("content");
                n && e.setRequestHeader("X-CSRF-Token", n)
            },
            fire: function(e, n, i) {
                var r = t.Event(n);
                return e.trigger(r, i), r.result !== !1
            },
            confirm: function(t) {
                return confirm(t)
            },
            ajax: function(e) {
                return t.ajax(e)
            },
            href: function(t) {
                return t.attr("href")
            },
            handleRemote: function(i) {
                var r, s, o, a, l, u, c, d;
                if (n.fire(i, "ajax:before")) {
                    if (a = i.data("cross-domain"), l = a === e ? null : a, u = i.data("with-credentials") || null, c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                        r = i.attr("method"), s = i.attr("action"), o = i.serializeArray();
                        var h = i.data("ujs:submit-button");
                        h && (o.push(h), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), s = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", s = i.data("url"), o = i.serialize(), i.data("params") && (o = o + "&" + i.data("params"))) : (r = i.data("method"), s = n.href(i), o = i.data("params") || null);
                    d = {
                        type: r || "GET",
                        data: o,
                        dataType: c,
                        beforeSend: function(t, r) {
                            return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r])
                        },
                        success: function(t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        },
                        complete: function(t, e) {
                            i.trigger("ajax:complete", [t, e])
                        },
                        error: function(t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        },
                        crossDomain: l
                    }, u && (d.xhrFields = {
                        withCredentials: u
                    }), s && (d.url = s);
                    var p = n.ajax(d);
                    return i.trigger("ajax:send", p), p
                }
                return !1
            },
            handleMethod: function(i) {
                var r = n.href(i),
                    s = i.data("method"),
                    o = i.attr("target"),
                    a = t("meta[name=csrf-token]").attr("content"),
                    l = t("meta[name=csrf-param]").attr("content"),
                    u = t('<form method="post" action="' + r + '"></form>'),
                    c = '<input name="_method" value="' + s + '" type="hidden" />';
                l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(c).appendTo("body"), u.submit()
            },
            disableFormElements: function(e) {
                e.find(n.disableSelector).each(function() {
                    var e = t(this),
                        n = e.is("button") ? "html" : "val";
                    e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
                })
            },
            enableFormElements: function(e) {
                e.find(n.enableSelector).each(function() {
                    var e = t(this),
                        n = e.is("button") ? "html" : "val";
                    e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
                })
            },
            allowAction: function(t) {
                var e, i = t.data("confirm"),
                    r = !1;
                return i ? (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e) : !0
            },
            blankInputs: function(e, n, i) {
                var r, s, o = t(),
                    a = n || "input,textarea",
                    l = e.find(a);
                return l.each(function() {
                    if (r = t(this), s = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !s == !i) {
                        if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                        o = o.add(r)
                    }
                }), o.length ? o : !1
            },
            nonBlankInputs: function(t, e) {
                return n.blankInputs(t, e, !0)
            },
            stopEverything: function(e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function(t) {
                t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function(t) {
                    return n.stopEverything(t)
                })
            },
            enableElement: function(t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
            t.crossDomain || n.CSRFProtection(i)
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(t(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
            var r = t(this),
                s = r.data("method"),
                o = r.data("params");
            if (!n.allowAction(r)) return n.stopEverything(i);
            if (r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
                if (!(!i.metaKey && !i.ctrlKey || s && "GET" !== s || o)) return !0;
                var a = n.handleRemote(r);
                return a === !1 ? n.enableElement(r) : a.error(function() {
                    n.enableElement(r)
                }), !1
            }
            return r.data("method") ? (n.handleMethod(r), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
            var i = t(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
        }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
            var i = t(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var r = t(this),
                s = r.data("remote") !== e,
                o = n.blankInputs(r, n.requiredInputSelector),
                a = n.nonBlankInputs(r, n.fileInputSelector);
            if (!n.allowAction(r)) return n.stopEverything(i);
            if (o && r.attr("novalidate") == e && n.fire(r, "ajax:aborted:required", [o])) return n.stopEverything(i);
            if (s) {
                if (a) {
                    setTimeout(function() {
                        n.disableFormElements(r)
                    }, 13);
                    var l = n.fire(r, "ajax:aborted:file", [a]);
                    return l || setTimeout(function() {
                        n.enableFormElements(r)
                    }, 13), l
                }
                return n.handleRemote(r), !1
            }
            setTimeout(function() {
                n.disableFormElements(r)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
            var i = t(this);
            if (!n.allowAction(i)) return n.stopEverything(e);
            var r = i.attr("name"),
                s = r ? {
                    name: r,
                    value: i.val()
                } : null;
            i.closest("form").data("ujs:submit-button", s)
        }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
            this == e.target && n.disableFormElements(t(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
            this == e.target && n.enableFormElements(t(this))
        }), t(function() {
            var e = t("meta[name=csrf-token]").attr("content"),
                n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        }))
    }(jQuery),
    /*!
     * jQuery Cookie Plugin v1.4.0
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(t) {
            return a.raw ? t : encodeURIComponent(t)
        }

        function n(t) {
            return a.raw ? t : decodeURIComponent(t)
        }

        function i(t) {
            return e(a.json ? JSON.stringify(t) : String(t))
        }

        function r(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(o, " ")), a.json ? JSON.parse(t) : t
            } catch (e) {}
        }

        function s(e, n) {
            var i = a.raw ? e : r(e);
            return t.isFunction(n) ? n(i) : i
        }
        var o = /\+/g,
            a = t.cookie = function(r, o, l) {
                if (void 0 !== o && !t.isFunction(o)) {
                    if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                        var u = l.expires,
                            c = l.expires = new Date;
                        c.setDate(c.getDate() + u)
                    }
                    return document.cookie = [e(r), "=", i(o), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var d = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
                    var g = h[p].split("="),
                        m = n(g.shift()),
                        v = g.join("=");
                    if (r && r === m) {
                        d = s(v, o);
                        break
                    }
                    r || void 0 === (v = s(v)) || (d[m] = v)
                }
                return d
            };
        a.defaults = {}, t.removeCookie = function(e, n) {
            return void 0 === t.cookie(e) ? !1 : (t.cookie(e, "", t.extend({}, n, {
                expires: -1
            })), !t.cookie(e))
        }
    }),
    /*!
     * jQuery Validation Plugin 1.11.1
     *
     * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
     * http://docs.jquery.com/Plugins/Validation
     *
     * Copyright 2013 Jörn Zaefferer
     * Released under the MIT license:
     *   http://www.opensource.org/licenses/mit-license.php
     */
    ! function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
                var n = t.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                    n.settings.submitHandler && (n.submitButton = e.target), t(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.submit(function(e) {
                    function i() {
                        var i;
                        return n.settings.submitHandler ? (n.submitButton && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && i.remove(), !1) : !0
                    }
                    return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function() {
                if (t(this[0]).is("form")) return this.validate().form();
                var e = !0,
                    n = t(this[0].form).validate();
                return this.each(function() {
                    e = e && n.element(this)
                }), e
            },
            removeAttrs: function(e) {
                var n = {},
                    i = this;
                return t.each(e.split(/\s/), function(t, e) {
                    n[e] = i.attr(e), i.removeAttr(e)
                }), n
            },
            rules: function(e, n) {
                var i = this[0];
                if (e) {
                    var r = t.data(i.form, "validator").settings,
                        s = r.rules,
                        o = t.validator.staticRules(i);
                    switch (e) {
                        case "add":
                            t.extend(o, t.validator.normalizeRule(n)), delete o.messages, s[i.name] = o, n.messages && (r.messages[i.name] = t.extend(r.messages[i.name], n.messages));
                            break;
                        case "remove":
                            if (!n) return delete s[i.name], o;
                            var a = {};
                            return t.each(n.split(/\s/), function(t, e) {
                                a[e] = o[e], delete o[e]
                            }), a
                    }
                }
                var l = t.validator.normalizeRules(t.extend({}, t.validator.classRules(i), t.validator.attributeRules(i), t.validator.dataRules(i), t.validator.staticRules(i)), i);
                if (l.required) {
                    var u = l.required;
                    delete l.required, l = t.extend({
                        required: u
                    }, l)
                }
                return l
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                return !!t.trim("" + t(e).val())
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, n) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
        }, t.validator.format = function(e, n) {
            return 1 === arguments.length ? function() {
                var n = t.makeArray(arguments);
                return n.unshift(e), t.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function(t, n) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return n
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(t, e) {
                    (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
                },
                unhighlight: function(e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var n = t.data(this[0].form, "validator"),
                            i = "on" + e.type.replace(/^validate/, "");
                        n.settings[i] && n.settings[i].call(n, this[0], e)
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n = this.groups = {};
                    t.each(this.settings.groups, function(e, i) {
                        "string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) {
                            n[i] = e
                        })
                    });
                    var i = this.settings.rules;
                    t.each(i, function(e, n) {
                        i[e] = t.validator.normalizeRule(n)
                    }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                    var n = this.check(e) !== !1;
                    return n ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
                },
                showErrors: function(e) {
                    if (e) {
                        t.extend(this.errorMap, e), this.errorList = [];
                        for (var n in e) this.errorList.push({
                            message: e[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e = 0;
                    for (var n in t) e++;
                    return e
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        n = {};
                    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !e.objectLength(t(this).rules()) ? !1 : (n[this.name] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.replace(" ", ".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var n = t(e).attr("type"),
                        i = t(e).val();
                    return "radio" === n || "checkbox" === n ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var n, i = t(e).rules(),
                        r = !1,
                        s = this.elementValue(e);
                    for (var o in i) {
                        var a = {
                            method: o,
                            parameters: i[o]
                        };
                        try {
                            if (n = t.validator.methods[o].call(this, s, e, a.parameters), "dependency-mismatch" === n) {
                                r = !0;
                                continue
                            }
                            if (r = !1, "pending" === n) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
                            if (!n) return this.formatAndAdd(e, a), !1
                        } catch (l) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", l), l
                        }
                    }
                    return r ? void 0 : (this.objectLength(i) && this.successList.push(e), !0)
                },
                customDataMessage: function(e, n) {
                    return t(e).data("msg-" + n.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + n.toLowerCase())
                },
                customMessage: function(t, e) {
                    var n = this.settings.messages[t];
                    return n && (n.constructor === String ? n : n[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t];
                    return void 0
                },
                defaultMessage: function(e, n) {
                    return this.findDefined(this.customMessage(e.name, n), this.customDataMessage(e, n), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n], "<strong>Warning: No message defined for " + e.name + "</strong>")
                },
                formatAndAdd: function(e, n) {
                    var i = this.defaultMessage(e, n.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, n.parameters, e) : r.test(i) && (i = t.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
                        message: i,
                        element: e
                    }), this.errorMap[e.name] = i, this.submitted[e.name] = i
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e;
                    for (t = 0; this.errorList[t]; t++) {
                        var n = this.errorList[t];
                        this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, n) {
                    var i = this.errorsFor(e);
                    i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, t(e)) : i.insertAfter(e))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, e)), this.toShow = this.toShow.add(i)
                },
                errorsFor: function(e) {
                    var n = this.idOrName(e);
                    return this.errors().filter(function() {
                        return t(this).attr("for") === n
                    })
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + e + "']")
                },
                getLength: function(e, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
                },
                dependTypes: {
                    "boolean": function(t) {
                        return t
                    },
                    string: function(e, n) {
                        return !!t(e, n.form).length
                    },
                    "function": function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var n = this.elementValue(e);
                    return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(e, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, n) {
                e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var n = {},
                    i = t(e).attr("class");
                return i && t.each(i.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function(e) {
                var n = {},
                    i = t(e),
                    r = i[0].getAttribute("type");
                for (var s in t.validator.methods) {
                    var o;
                    "required" === s ? (o = i.get(0).getAttribute(s), "" === o && (o = !0), o = !!o) : o = i.attr(s), /min|max/.test(s) && (null === r || /number|range|text/.test(r)) && (o = Number(o)), o ? n[s] = o : r === s && "range" !== r && (n[s] = !0)
                }
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            dataRules: function(e) {
                var n, i, r = {},
                    s = t(e);
                for (n in t.validator.methods) i = s.data("rule-" + n.toLowerCase()), void 0 !== i && (r[n] = i);
                return r
            },
            staticRules: function(e) {
                var n = {},
                    i = t.data(e.form, "validator");
                return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
            },
            normalizeRules: function(e, n) {
                return t.each(e, function(i, r) {
                    if (r === !1) return delete e[i], void 0;
                    if (r.param || r.depends) {
                        var s = !0;
                        switch (typeof r.depends) {
                            case "string":
                                s = !!t(r.depends, n.form).length;
                                break;
                            case "function":
                                s = r.depends.call(n, n)
                        }
                        s ? e[i] = void 0 !== r.param ? r.param : !0 : delete e[i]
                    }
                }), t.each(e, function(i, r) {
                    e[i] = t.isFunction(r) ? r(n) : r
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var n;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
                }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var n = {};
                    t.each(e.split(/\s/), function() {
                        n[this] = !0
                    }), e = n
                }
                return e
            },
            addMethod: function(e, n, i) {
                t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var r = t(n).val();
                        return r && r.length > 0
                    }
                    return this.checkable(n) ? this.getLength(e, n) > 0 : t.trim(e).length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var n = 0,
                        i = 0,
                        r = !1;
                    t = t.replace(/\D/g, "");
                    for (var s = t.length - 1; s >= 0; s--) {
                        var o = t.charAt(s);
                        i = parseInt(o, 10), r && (i *= 2) > 9 && (i -= 9), n += i, r = !r
                    }
                    return n % 10 === 0
                },
                minlength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
                    return this.optional(n) || r >= i
                },
                maxlength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
                    return this.optional(n) || i >= r
                },
                rangelength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), n);
                    return this.optional(n) || r >= i[0] && r <= i[1]
                },
                min: function(t, e, n) {
                    return this.optional(e) || t >= n
                },
                max: function(t, e, n) {
                    return this.optional(e) || n >= t
                },
                range: function(t, e, n) {
                    return this.optional(e) || t >= n[0] && t <= n[1]
                },
                equalTo: function(e, n, i) {
                    var r = t(i);
                    return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        t(n).valid()
                    }), e === r.val()
                },
                remote: function(e, n, i) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var r = this.previousValue(n);
                    if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), r.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = r.message, i = "string" == typeof i && {
                            url: i
                        } || i, r.old === e) return r.valid;
                    r.old = e;
                    var s = this;
                    this.startRequest(n);
                    var o = {};
                    return o[n.name] = e, t.ajax(t.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        success: function(i) {
                            s.settings.messages[n.name].remote = r.originalMessage;
                            var o = i === !0 || "true" === i;
                            if (o) {
                                var a = s.formSubmitted;
                                s.prepareElement(n), s.formSubmitted = a, s.successList.push(n), delete s.invalid[n.name], s.showErrors()
                            } else {
                                var l = {},
                                    u = i || s.defaultMessage(n, "remote");
                                l[n.name] = r.message = t.isFunction(u) ? u(e) : u, s.invalid[n.name] = !0, s.showErrors(l)
                            }
                            r.valid = o, s.stopRequest(n, o)
                        }
                    }, i)), "pending"
                }
            }
        }), t.format = t.validator.format
    }(jQuery), ! function(t) {
        var e = {};
        if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, n, i) {
            var r = t.port;
            "abort" === t.mode && (e[r] && e[r].abort(), e[r] = i)
        });
        else {
            var n = t.ajax;
            t.ajax = function(i) {
                var r = ("mode" in i ? i : t.ajaxSettings).mode,
                    s = ("port" in i ? i : t.ajaxSettings).port;
                return "abort" === r ? (e[s] && e[s].abort(), e[s] = n.apply(this, arguments), e[s]) : n.apply(this, arguments)
            }
        }
    }(jQuery), ! function(t) {
        t.extend(t.fn, {
            validateDelegate: function(e, n, i) {
                return this.bind(n, function(n) {
                    var r = t(n.target);
                    return r.is(e) ? i.apply(r, arguments) : void 0
                })
            }
        })
    }(jQuery);
var Query = function(t) {
        "use strict";
        var e = function(t) {
                var e, n, i, r, s = [];
                if ("undefined" == typeof t || null === t || "" === t) return s;
                for (0 === t.indexOf("?") && (t = t.substring(1)), n = t.toString().split(/[&;]/), e = 0; e < n.length; e++) i = n[e], r = i.split("="), s.push([r[0], r[1]]);
                return s
            },
            n = e(t),
            i = function() {
                var t, e, i = "";
                for (t = 0; t < n.length; t++) e = n[t], i.length > 0 && (i += "&"), i += e.join("=");
                return i.length > 0 ? "?" + i : i
            },
            r = function(t) {
                return t = decodeURIComponent(t), t = t.replace("+", " ")
            },
            s = function(t) {
                var e, i;
                for (i = 0; i < n.length; i++)
                    if (e = n[i], r(t) === r(e[0])) return e[1]
            },
            o = function(t) {
                var e, i, s = [];
                for (e = 0; e < n.length; e++) i = n[e], r(t) === r(i[0]) && s.push(i[1]);
                return s
            },
            a = function(t, e) {
                var i, s, o, a, l = [];
                for (i = 0; i < n.length; i++) s = n[i], o = r(s[0]) === r(t), a = r(s[1]) === r(e), (1 === arguments.length && !o || 2 === arguments.length && !o && !a) && l.push(s);
                return n = l, this
            },
            l = function(t, e, i) {
                return 3 === arguments.length && -1 !== i ? (i = Math.min(i, n.length), n.splice(i, 0, [t, e])) : arguments.length > 0 && n.push([t, e]), this
            },
            u = function(t, e, i) {
                var s, o, u = -1;
                if (3 === arguments.length) {
                    for (s = 0; s < n.length; s++)
                        if (o = n[s], r(o[0]) === r(t) && decodeURIComponent(o[1]) === r(i)) {
                            u = s;
                            break
                        }
                    a(t, i).addParam(t, e, u)
                } else {
                    for (s = 0; s < n.length; s++)
                        if (o = n[s], r(o[0]) === r(t)) {
                            u = s;
                            break
                        }
                    a(t), l(t, e, u)
                }
                return this
            };
        return {
            getParamValue: s,
            getParamValues: o,
            deleteParam: a,
            addParam: l,
            replaceParam: u,
            toString: i
        }
    },
    Uri = function(t) {
        "use strict";
        var e = !1,
            n = function(t) {
                for (var n = {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }, i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], r = {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    }, s = n[e ? "strict" : "loose"].exec(t), o = {}, a = 14; a--;) o[i[a]] = s[a] || "";
                return o[r.name] = {}, o[i[12]].replace(r.parser, function(t, e, n) {
                    e && (o[r.name][e] = n)
                }), o
            },
            i = n(t || ""),
            r = new Query(i.query),
            s = function(t) {
                return "undefined" != typeof t && (i.protocol = t), i.protocol
            },
            o = null,
            a = function(t) {
                return "undefined" != typeof t && (o = t), null === o ? -1 !== i.source.indexOf("//") : o
            },
            l = function(t) {
                return "undefined" != typeof t && (i.userInfo = t), i.userInfo
            },
            u = function(t) {
                return "undefined" != typeof t && (i.host = t), i.host
            },
            c = function(t) {
                return "undefined" != typeof t && (i.port = t), i.port
            },
            d = function(t) {
                return "undefined" != typeof t && (i.path = t), i.path
            },
            h = function(t) {
                return "undefined" != typeof t && (r = new Query(t)), r
            },
            p = function(t) {
                return "undefined" != typeof t && (i.anchor = t), i.anchor
            },
            f = function(t) {
                return s(t), this
            },
            g = function(t) {
                return a(t), this
            },
            m = function(t) {
                return l(t), this
            },
            v = function(t) {
                return u(t), this
            },
            y = function(t) {
                return c(t), this
            },
            b = function(t) {
                return d(t), this
            },
            w = function(t) {
                return h(t), this
            },
            x = function(t) {
                return p(t), this
            },
            k = function(t) {
                return h().getParamValue(t)
            },
            T = function(t) {
                return h().getParamValues(t)
            },
            C = function(t, e) {
                return 2 === arguments.length ? h().deleteParam(t, e) : h().deleteParam(t), this
            },
            S = function(t, e, n) {
                return 3 === arguments.length ? h().addParam(t, e, n) : h().addParam(t, e), this
            },
            _ = function(t, e, n) {
                return 3 === arguments.length ? h().replaceParam(t, e, n) : h().replaceParam(t, e), this
            },
            D = function() {
                var t = "",
                    e = function(t) {
                        return null !== t && "" !== t
                    };
                return e(s()) ? (t += s(), s().indexOf(":") !== s().length - 1 && (t += ":"), t += "//") : a() && e(u()) && (t += "//"), e(l()) && e(u()) && (t += l(), l().indexOf("@") !== l().length - 1 && (t += "@")), e(u()) && (t += u(), e(c()) && (t += ":" + c())), e(d()) ? t += d() : e(u()) && (e(h().toString()) || e(p())) && (t += "/"), e(h().toString()) && (0 !== h().toString().indexOf("?") && (t += "?"), t += h().toString()), e(p()) && (0 !== p().indexOf("#") && (t += "#"), t += p()), t
            },
            $ = function() {
                return new Uri(D())
            };
        return {
            protocol: s,
            hasAuthorityPrefix: a,
            userInfo: l,
            host: u,
            port: c,
            path: d,
            query: h,
            anchor: p,
            setProtocol: f,
            setHasAuthorityPrefix: g,
            setUserInfo: m,
            setHost: v,
            setPort: y,
            setPath: b,
            setQuery: w,
            setAnchor: x,
            getQueryParamValue: k,
            getQueryParamValues: T,
            deleteQueryParam: C,
            addQueryParam: S,
            replaceQueryParam: _,
            toString: D,
            clone: $
        }
    },
    jsUri = Uri;
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (function() {
        window.Spree = function() {
            function t() {}
            return t.ready = function(t) {
                return jQuery(document).ready(t)
            }, t.url = function(e, n) {
                return void 0 === e.path && (e = new Uri(e)), n && $.each(n, function(t, n) {
                    return e.addQueryParam(t, n)
                }), t.api_key && e.addQueryParam("token", t.api_key), e
            }, t.uri = function(t, e) {
                return url(t, e)
            }, t.ajax = function(e, n) {
                var i;
                return "string" == typeof e ? $.ajax(t.url(e).toString(), n) : (i = e.url, delete e.url, $.ajax(t.url(i).toString(), e))
            }, t
        }()
    }.call(this), function() {
        Spree.disableSaveOnClick = function() {
            return $("form.edit_order").submit(function() {
                return $(this).find(":submit, :image").attr("disabled", !0).removeClass("primary").addClass("disabled")
            })
        }, Spree.ready(function(t) {
            var e, n, i, r, s;
            return Spree.Checkout = {}, t("#checkout_form_address").is("*") && (t("#checkout_form_address").validate(), n = function(e) {
                return t("p#" + e + "country select").val()
            }, r = function(i) {
                var r;
                return r = n(i), null != r ? null == Spree.Checkout[r] ? t.get(Spree.routes.states_search, {
                    country_id: r
                }, function(t) {
                    return Spree.Checkout[r] = {
                        states: t.states,
                        states_required: t.states_required
                    }, e(Spree.Checkout[r], i)
                }) : e(Spree.Checkout[r], i) : void 0
            }, e = function(e, n) {
                var i, r, s, o, a, l, u, c;
                return u = e.states_required, l = e.states, s = t("p#" + n + "state"), o = s.find("select"), r = s.find("input"), a = s.find("state-required"), l.length > 0 ? (i = parseInt(o.val()), o.html(""), c = [{
                    name: "",
                    id: ""
                }].concat(l), t.each(c, function(e, n) {
                    var r;
                    return r = t(document.createElement("option")).attr("value", n.id).html(n.name), i === n.id && r.prop("selected", !0), o.append(r)
                }), o.prop("disabled", !1).show(), r.hide().prop("disabled", !0), s.show(), a.show(), u && o.addClass("required"), r.removeClass("required")) : (o.hide().prop("disabled", !0), r.show(), u ? (a.show(), r.addClass("required")) : (r.val(""), a.hide(), r.removeClass("required")), s.toggle(!!u), r.prop("disabled", !u), r.removeClass("hidden"), o.removeClass("required"))
            }, t("p#bcountry select").change(function() {
                return r("b")
            }), t("p#scountry select").change(function() {
                return r("s")
            }), r("b"), i = t("input#order_use_billing"), i.change(function() {
                return s(i)
            }), s = function(e) {
                return e.is(":checked") ? (t("#shipping .inner").addClass("disabled"), t("#shipping .inner input, #shipping .inner select").prop("disabled", !0)) : (t("#shipping .inner").removeClass("disabled"), t("#shipping .inner input, #shipping .inner select").prop("disabled", !1), r("s"))
            }, s(i)), t("#checkout_form_payment").is("*") ? (t('input[type="radio"][name="order[payments_attributes][][payment_method_id]"]').click(function() {
                return t("#payment-methods li").hide(), this.checked ? t("#payment_method_" + this.value).show() : void 0
            }), t(document).on("click", "#cvv_link", function(e) {
                var n, i;
                return n = "cvv_info", i = "left=20,top=20,width=500,height=500,toolbar=0,resizable=0,scrollbars=1", window.open(t(this).attr("href"), n, i), e.preventDefault()
            }), t('input[type="radio"]:checked').click()) : void 0
        })
    }.call(this), function() {
        $(function() {
            var t;
            return Spree.addImageHandlers = function() {
                var t;
                return t = $("#product-images ul.thumbnails"), $("#main-image").data("selectedThumb", $("#main-image img").attr("src")), t.find("li").eq(0).addClass("selected"), t.find("a").on("click", function(e) {
                    return $("#main-image").data("selectedThumb", $(e.currentTarget).attr("href")), $("#main-image").data("selectedThumbId", $(e.currentTarget).parent().attr("id")), $(this).mouseout(function() {
                        return t.find("li").removeClass("selected"), $(e.currentTarget).parent("li").addClass("selected")
                    }), !1
                }), t.find("li").on("mouseenter", function(t) {
                    return $("#main-image img").attr("src", $(t.currentTarget).find("a").attr("href"))
                }), t.find("li").on("mouseleave", function() {
                    return $("#main-image img").attr("src", $("#main-image").data("selectedThumb"))
                })
            }, Spree.showVariantImages = function(t) {
                var e, n, i;
                return $("li.vtmb").hide(), $("li.tmb-" + t).show(), e = $("#" + $("#main-image").data("selectedThumbId")), e.hasClass("vtmb-" + t) ? void 0 : (i = $($("#product-images ul.thumbnails li:visible.vtmb").eq(0)), i.length > 0 || (i = $($("#product-images ul.thumbnails li:visible").eq(0))), n = i.find("a").attr("href"), $("#product-images ul.thumbnails li").removeClass("selected"), i.addClass("selected"), $("#main-image img").attr("src", n), $("#main-image").data("selectedThumb", n), $("#main-image").data("selectedThumbId", i.attr("id")))
            }, Spree.updateVariantPrice = function(t) {
                var e;
                return e = t.data("price"), e ? $(".price.selling").text(e) : void 0
            }, t = $('#product-variants input[type="radio"]'), t.length > 0 && (Spree.showVariantImages($('#product-variants input[type="radio"]').eq(0).attr("value")), Spree.updateVariantPrice(t.first())), Spree.addImageHandlers(), t.click(function() {
                return Spree.showVariantImages(this.value), Spree.updateVariantPrice($(this))
            })
        })
    }.call(this), function() {
        Spree.ready(function(t) {
            return t("form#update-cart").is("*") && t("form#update-cart a.delete").show().one("click", function() {
                return t(this).parents(".line-item").first().find("input.line_item_quantity").val(0), t(this).parents("form").first().submit(), !1
            }), t("form#update-cart").submit(function() {
                return t("form#update-cart #update-button").attr("disabled", !0)
            })
        })
    }.call(this),
    /*
     * jQuery Currency v0.5
     * Simple, unobtrusive currency converting and formatting
     *
     * Copyright 2011, Gilbert Pellegrom
     * Free to use and abuse under the MIT license.
     * http://www.opensource.org/licenses/mit-license.php
     *
     * http://dev7studios.com
     */
    function(t) {
        t.fn.currency = function(e) {
            var n = {
                    init: function(e) {
                        var n = t.extend({}, this.currency.defaults, e);
                        return this.each(function() {
                            var e = t(this),
                                r = 0;
                            r = e.is(":input") ? e.val() : e.text(), i.isNumber(r) && ("" != n.convertFrom ? (e.is(":input") ? e.val(r + " " + n.convertLoading) : e.html(r + " " + n.convertLoading), t.post(n.convertLocation, {
                                amount: r,
                                from: n.convertFrom,
                                to: n.region
                            }, function(t) {
                                r = t, e.is(":input") ? e.val(i.format_currency(r, n)) : e.html(i.format_currency(r, n))
                            })) : e.is(":input") ? e.val(i.format_currency(r, n)) : e.html(i.format_currency(r, n)))
                        })
                    }
                },
                i = {
                    format_currency: function(t, e) {
                        var n = e.region,
                            r = "",
                            s = "";
                        "ALL" == n && (r = "Lek"), "ARS" == n && (r = "$"), "AWG" == n && (r = "f"), "AUD" == n && (r = "$"), "BSD" == n && (r = "$"), "BBD" == n && (r = "$"), "BYR" == n && (r = "p."), "BZD" == n && (r = "BZ$"), "BMD" == n && (r = "$"), "BOB" == n && (r = "$b"), "BAM" == n && (r = "KM"), "BWP" == n && (r = "P"), "BRL" == n && (r = "R$"), "BND" == n && (r = "$"), "CAD" == n && (r = "$"), "KYD" == n && (r = "$"), "CLP" == n && (r = "$"), "CNY" == n && (r = "&yen;"), "COP" == n && (r = "$"), "CRC" == n && (r = "c"), "HRK" == n && (r = "kn"), "CZK" == n && (r = "Kc"), "DKK" == n && (r = "kr"), "DOP" == n && (r = "RD$"), "XCD" == n && (r = "$"), "EGP" == n && (r = "&pound;"), "SVC" == n && (r = "$"), "EEK" == n && (r = "kr"), "EUR" == n && (r = "&euro;"), "FKP" == n && (r = "&pound;"), "FJD" == n && (r = "$"), "GBP" == n && (r = "&pound;"), "GHC" == n && (r = "c"), "GIP" == n && (r = "&pound;"), "GTQ" == n && (r = "Q"), "GGP" == n && (r = "&pound;"), "GYD" == n && (r = "$"), "HNL" == n && (r = "L"), "HKD" == n && (r = "$"), "HUF" == n && (r = "Ft"), "ISK" == n && (r = "kr"), "IDR" == n && (r = "Rp"), "IMP" == n && (r = "&pound;"), "JMD" == n && (r = "J$"), "JPY" == n && (r = "&yen;"), "JEP" == n && (r = "&pound;"), "LVL" == n && (r = "Ls"), "LBP" == n && (r = "&pound;"), "LRD" == n && (r = "$"), "LTL" == n && (r = "Lt"), "MYR" == n && (r = "RM"), "MXN" == n && (r = "$"), "MZN" == n && (r = "MT"), "NAD" == n && (r = "$"), "ANG" == n && (r = "f"), "NZD" == n && (r = "$"), "NIO" == n && (r = "C$"), "NOK" == n && (r = "kr"), "PAB" == n && (r = "B/."), "PYG" == n && (r = "Gs"), "PEN" == n && (r = "S/."), "PLN" == n && (r = "zl"), "RON" == n && (r = "lei"), "SHP" == n && (r = "&pound;"), "SGD" == n && (r = "$"), "SBD" == n && (r = "$"), "SOS" == n && (r = "S"), "ZAR" == n && (r = "R"), "SEK" == n && (r = "kr"), "CHF" == n && (r = "CHF"), "SRD" == n && (r = "$"), "SYP" == n && (r = "&pound;"), "TWD" == n && (r = "NT$"), "TTD" == n && (r = "TT$"), "TRY" == n && (r = "TL"), "TRL" == n && (r = "&pound;"), "TVD" == n && (r = "$"), "GBP" == n && (r = "&pound;"), "USD" == n && (r = "$"), "UYU" == n && (r = "$U"), "VEF" == n && (r = "Bs"), "ZWD" == n && (r = "Z$"), "" == r && "" == s && (r = "$");
                        var o = "";
                        return e.hidePrefix || (o += r), o += i.number_format(t, e.decimals, e.decimal, e.thousands), e.hidePostfix || (o += s), o
                    },
                    number_format: function(t, e, n, i) {
                        t = (t + "").replace(/[^0-9+\-Ee.]/g, "");
                        var r = isFinite(+t) ? +t : 0,
                            s = isFinite(+e) ? Math.abs(e) : 0,
                            o = "undefined" == typeof i ? "," : i,
                            a = "undefined" == typeof n ? "." : n,
                            l = "",
                            u = function(t, e) {
                                var n = Math.pow(10, e);
                                return "" + Math.round(t * n) / n
                            };
                        return l = (s ? u(r, s) : "" + Math.round(r)).split("."), l[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, o)), (l[1] || "").length < s && (l[1] = l[1] || "", l[1] += new Array(s - l[1].length + 1).join("0")), l.join(a)
                    },
                    isNumber: function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }
                };
            return n[e] ? n[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error('Method "' + e + '" does not exist in currency plugin!'), void 0) : n.init.apply(this, arguments)
        }, t.fn.currency.defaults = {
            region: "USD",
            thousands: ",",
            decimal: ".",
            decimals: 2,
            hidePrefix: !1,
            hidePostfix: !1,
            convertFrom: "",
            convertLoading: "(Converting...)",
            convertLocation: "convert.php"
        }, t.fn.currency.settings = {}
    }(jQuery),
    /*!
     * jQuery UI Core 1.9.2
     * http://jqueryui.com
     *
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    function(t, e) {
        function n(e, n) {
            var r, s, o, a = e.nodeName.toLowerCase();
            return "area" === a ? (r = e.parentNode, s = r.name, e.href && s && "map" === r.nodeName.toLowerCase() ? (o = t("img[usemap=#" + s + "]")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().andSelf().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        var r = 0,
            s = /^ui-id-\d+$/;
        t.ui = t.ui || {}, t.ui.version || (t.extend(t.ui, {
            version: "1.9.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            _focus: t.fn.focus,
            focus: function(e, n) {
                return "number" == typeof e ? this.each(function() {
                    var i = this;
                    setTimeout(function() {
                        t(i).focus(), n && n.call(i)
                    }, e)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var e;
                return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
            },
            zIndex: function(n) {
                if (n !== e) return this.css("zIndex", n);
                if (this.length)
                    for (var i, r, s = t(this[0]); s.length && s[0] !== document;) {
                        if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(s.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                        s = s.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++r)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    s.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(n) {
                    return !!t.data(n, e)
                }
            }) : function(e, n, i) {
                return !!t.data(e, i[3])
            },
            focusable: function(e) {
                return n(e, !isNaN(t.attr(e, "tabindex")))
            },
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    r = isNaN(i);
                return (r || i >= 0) && n(e, !r)
            }
        }), t(function() {
            var e = document.body,
                n = e.appendChild(n = document.createElement("div"));
            n.offsetHeight, t.extend(n.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), t.support.minHeight = 100 === n.offsetHeight, t.support.selectstart = "onselectstart" in n, e.removeChild(n).style.display = "none"
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(n, i) {
            function r(e, n, i, r) {
                return t.each(s, function() {
                    n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), r && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), n
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(n) {
                return n === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(o, r(this, n) + "px")
                })
            }, t.fn["outer" + i] = function(e, n) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(o, r(this, e, !0, n) + "px")
                })
            }
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(n) {
                return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
            }
        }(t.fn.removeData)), function() {
            var e = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
            t.ui.ie = e.length ? !0 : !1, t.ui.ie6 = 6 === parseFloat(e[1], 10)
        }(), t.fn.extend({
            disableSelection: function() {
                return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), t.extend(t.ui, {
            plugin: {
                add: function(e, n, i) {
                    var r, s = t.ui[e].prototype;
                    for (r in i) s.plugins[r] = s.plugins[r] || [], s.plugins[r].push([n, i[r]])
                },
                call: function(t, e, n) {
                    var i, r = t.plugins[e];
                    if (r && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                        for (i = 0; i < r.length; i++) t.options[r[i][0]] && r[i][1].apply(t.element, n)
                }
            },
            contains: t.contains,
            hasScroll: function(e, n) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                    r = !1;
                return e[i] > 0 ? !0 : (e[i] = 1, r = e[i] > 0, e[i] = 0, r)
            },
            isOverAxis: function(t, e, n) {
                return t > e && e + n > t
            },
            isOver: function(e, n, i, r, s, o) {
                return t.ui.isOverAxis(e, i, s) && t.ui.isOverAxis(n, r, o)
            }
        }))
    }(jQuery),
    /*!
     * jQuery UI Datepicker 1.9.2
     * http://jqueryui.com
     *
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/datepicker/
     *
     * Depends:
     *  jquery.ui.core.js
     */
    function($, undefined) {
        function Datepicker() {
            this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }

        function bindHover(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(e, "mouseout", function() {
                $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
            }).delegate(e, "mouseover", function() {
                $.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function extendRemove(t, e) {
            $.extend(t, e);
            for (var n in e)(null == e[n] || e[n] == undefined) && (t[n] = e[n]);
            return t
        }
        $.extend($.ui, {
            datepicker: {
                version: "1.9.2"
            }
        });
        var PROP_NAME = "datepicker",
            dpuuid = (new Date).getTime(),
            instActive;
        $.extend(Datepicker.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function() {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return extendRemove(this._defaults, t || {}), this
            },
            _attachDatepicker: function(target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("date:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(),
                    inline = "div" == nodeName || "span" == nodeName;
                target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                var inst = this._newInst($(target), inline);
                inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
            },
            _newInst: function(t, e) {
                var n = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return {
                    id: n,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: e,
                    dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, e) {
                var n = $(t);
                e.append = $([]), e.trigger = $([]), n.hasClass(this.markerClassName) || (this._attachments(n, e), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(t, n, i) {
                    e.settings[n] = i
                }).bind("getData.datepicker", function(t, n) {
                    return this._get(e, n)
                }), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, e) {
                var n = this._get(e, "appendText"),
                    i = this._get(e, "isRTL");
                e.append && e.append.remove(), n && (e.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), t[i ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove();
                var r = this._get(e, "showOn");
                if (("focus" == r || "both" == r) && t.focus(this._showDatepicker), "button" == r || "both" == r) {
                    var s = this._get(e, "buttonText"),
                        o = this._get(e, "buttonImage");
                    e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                        src: o,
                        alt: s,
                        title: s
                    }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == o ? s : $("<img/>").attr({
                        src: o,
                        alt: s,
                        title: s
                    }))), t[i ? "before" : "after"](e.trigger), e.trigger.click(function() {
                        return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1
                    })
                }
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e = new Date(2009, 11, 20),
                        n = this._get(t, "dateFormat");
                    if (n.match(/[DM]/)) {
                        var i = function(t) {
                            for (var e = 0, n = 0, i = 0; i < t.length; i++) t[i].length > e && (e = t[i].length, n = i);
                            return n
                        };
                        e.setMonth(i(this._get(t, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(i(this._get(t, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                    }
                    t.input.attr("size", this._formatDate(t, e).length)
                }
            },
            _inlineDatepicker: function(t, e) {
                var n = $(t);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function(t, n, i) {
                    e.settings[n] = i
                }).bind("getData.datepicker", function(t, n) {
                    return this._get(e, n)
                }), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, e, n, i, r) {
                var s = this._dialogInst;
                if (!s) {
                    this.uuid += 1;
                    var o = "dp" + this.uuid;
                    this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
                }
                if (extendRemove(s.settings, i || {}), e = e && e.constructor == Date ? this._formatDate(s, e) : e, this._dialogInput.val(e), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, !this._pos) {
                    var a = document.documentElement.clientWidth,
                        l = document.documentElement.clientHeight,
                        u = document.documentElement.scrollLeft || document.body.scrollLeft,
                        c = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [a / 2 - 100 + u, l / 2 - 150 + c]
                }
                return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
            },
            _destroyDatepicker: function(t) {
                var e = $(t),
                    n = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var i = t.nodeName.toLowerCase();
                    $.removeData(t, PROP_NAME), "input" == i ? (n.append.remove(), n.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == i || "span" == i) && e.removeClass(this.markerClassName).empty()
                }
            },
            _enableDatepicker: function(t) {
                var e = $(t),
                    n = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var i = t.nodeName.toLowerCase();
                    if ("input" == i) t.disabled = !1, n.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                    else if ("div" == i || "span" == i) {
                        var r = e.children("." + this._inlineClass);
                        r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(e) {
                        return e == t ? null : e
                    })
                }
            },
            _disableDatepicker: function(t) {
                var e = $(t),
                    n = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var i = t.nodeName.toLowerCase();
                    if ("input" == i) t.disabled = !0, n.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    else if ("div" == i || "span" == i) {
                        var r = e.children("." + this._inlineClass);
                        r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(e) {
                        return e == t ? null : e
                    }), this._disabledInputs[this._disabledInputs.length] = t
                }
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] == t) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return $.data(t, PROP_NAME)
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(t, e, n) {
                var i = this._getInst(t);
                if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? $.extend({}, $.datepicker._defaults) : i ? "all" == e ? $.extend({}, i.settings) : this._get(i, e) : null;
                var r = e || {};
                if ("string" == typeof e && (r = {}, r[e] = n), i) {
                    this._curInst == i && this._hideDatepicker();
                    var s = this._getDateDatepicker(t, !0),
                        o = this._getMinMaxDate(i, "min"),
                        a = this._getMinMaxDate(i, "max");
                    extendRemove(i.settings, r), null !== o && r.dateFormat !== undefined && r.minDate === undefined && (i.settings.minDate = this._formatDate(i, o)), null !== a && r.dateFormat !== undefined && r.maxDate === undefined && (i.settings.maxDate = this._formatDate(i, a)), this._attachments($(t), i), this._autoSize(i), this._setDate(i, s), this._updateAlternate(i), this._updateDatepicker(i)
                }
            },
            _changeDatepicker: function(t, e, n) {
                this._optionDatepicker(t, e, n)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var n = this._getInst(t);
                n && (this._setDate(n, e), this._updateDatepicker(n), this._updateAlternate(n))
            },
            _getDateDatepicker: function(t, e) {
                var n = this._getInst(t);
                return n && !n.inline && this._setDateFromField(n, e), n ? this._getDate(n) : null
            },
            _doKeyDown: function(t) {
                var e = $.datepicker._getInst(t.target),
                    n = !0,
                    i = e.dpDiv.is(".ui-datepicker-rtl");
                if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), n = !1;
                        break;
                    case 13:
                        var r = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                        r[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, r[0]);
                        var s = $.datepicker._get(e, "onSelect");
                        if (s) {
                            var o = $.datepicker._formatDate(e);
                            s.apply(e.input ? e.input[0] : null, [o, e])
                        } else $.datepicker._hideDatepicker();
                        return !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), n = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), n = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, i ? 1 : -1, "D"), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), n = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, i ? -1 : 1, "D"), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), n = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        n = !1
                } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : n = !1;
                n && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var e = $.datepicker._getInst(t.target);
                if ($.datepicker._get(e, "constrainInput")) {
                    var n = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")),
                        i = String.fromCharCode(t.charCode == undefined ? t.keyCode : t.charCode);
                    return t.ctrlKey || t.metaKey || " " > i || !n || n.indexOf(i) > -1
                }
            },
            _doKeyUp: function(t) {
                var e = $.datepicker._getInst(t.target);
                if (e.input.val() != e.lastVal) try {
                    var n = $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e));
                    n && ($.datepicker._setDateFromField(e), $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e))
                } catch (i) {
                    $.datepicker.log(i)
                }
                return !0
            },
            _showDatepicker: function(t) {
                if (t = t.target || t, "input" != t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                    var e = $.datepicker._getInst(t);
                    $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                    var n = $.datepicker._get(e, "beforeShow"),
                        i = n ? n.apply(t, [t, e]) : {};
                    if (i !== !1) {
                        extendRemove(e.settings, i), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight);
                        var r = !1;
                        $(t).parents().each(function() {
                            return r |= "fixed" == $(this).css("position"), !r
                        });
                        var s = {
                            left: $.datepicker._pos[0],
                            top: $.datepicker._pos[1]
                        };
                        if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }), $.datepicker._updateDatepicker(e), s = $.datepicker._checkOffset(e, s, r), e.dpDiv.css({
                                position: $.datepicker._inDialog && $.blockUI ? "static" : r ? "fixed" : "absolute",
                                display: "none",
                                left: s.left + "px",
                                top: s.top + "px"
                            }), !e.inline) {
                            var o = $.datepicker._get(e, "showAnim"),
                                a = $.datepicker._get(e, "duration"),
                                l = function() {
                                    var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                                    if (t.length) {
                                        var n = $.datepicker._getBorders(e.dpDiv);
                                        t.css({
                                            left: -n[0],
                                            top: -n[1],
                                            width: e.dpDiv.outerWidth(),
                                            height: e.dpDiv.outerHeight()
                                        })
                                    }
                                };
                            e.dpDiv.zIndex($(t).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o] || $.effects[o]) ? e.dpDiv.show(o, $.datepicker._get(e, "showOptions"), a, l) : e.dpDiv[o || "show"](o ? a : null, l), o && a || l(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), $.datepicker._curInst = e
                        }
                    }
                }
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4;
                var e = $.datepicker._getBorders(t.dpDiv);
                instActive = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var n = t.dpDiv.find("iframe.ui-datepicker-cover");
                n.length && n.css({
                    left: -e[0],
                    top: -e[1],
                    width: t.dpDiv.outerWidth(),
                    height: t.dpDiv.outerHeight()
                }), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var i = this._getNumberOfMonths(t),
                    r = i[1],
                    s = 17;
                if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", s * r + "em"), t.dpDiv[(1 != i[0] || 1 != i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                    var o = t.yearshtml;
                    setTimeout(function() {
                        o === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), o = t.yearshtml = null
                    }, 0)
                }
            },
            _getBorders: function(t) {
                var e = function(t) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[t] || t
                };
                return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
            },
            _checkOffset: function(t, e, n) {
                var i = t.dpDiv.outerWidth(),
                    r = t.dpDiv.outerHeight(),
                    s = t.input ? t.input.outerWidth() : 0,
                    o = t.input ? t.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + (n ? 0 : $(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (n ? 0 : $(document).scrollTop());
                return e.left -= this._get(t, "isRTL") ? i - s : 0, e.left -= n && e.left == t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= n && e.top == t.input.offset().top + o ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + i > a && a > i ? Math.abs(e.left + i - a) : 0), e.top -= Math.min(e.top, e.top + r > l && l > r ? Math.abs(r + o) : 0), e
            },
            _findPos: function(t) {
                for (var e = this._getInst(t), n = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
                var i = $(t).offset();
                return [i.left, i.top]
            },
            _hideDatepicker: function(t) {
                var e = this._curInst;
                if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                    var n = this._get(e, "showAnim"),
                        i = this._get(e, "duration"),
                        r = function() {
                            $.datepicker._tidyDialog(e)
                        };
                    $.effects && ($.effects.effect[n] || $.effects[n]) ? e.dpDiv.hide(n, $.datepicker._get(e, "showOptions"), i, r) : e.dpDiv["slideDown" == n ? "slideUp" : "fadeIn" == n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1;
                    var s = this._get(e, "onClose");
                    s && s.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
                }
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if ($.datepicker._curInst) {
                    var e = $(t.target),
                        n = $.datepicker._getInst(e[0]);
                    (e[0].id != $.datepicker._mainDivId && 0 == e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != n) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, e, n) {
                var i = $(t),
                    r = this._getInst(i[0]);
                this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(r, e + ("M" == n ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
            },
            _gotoToday: function(t) {
                var e = $(t),
                    n = this._getInst(e[0]);
                if (this._get(n, "gotoCurrent") && n.currentDay) n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear;
                else {
                    var i = new Date;
                    n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()
                }
                this._notifyChange(n), this._adjustDate(e)
            },
            _selectMonthYear: function(t, e, n) {
                var i = $(t),
                    r = this._getInst(i[0]);
                r["selected" + ("M" == n ? "Month" : "Year")] = r["draw" + ("M" == n ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(i)
            },
            _selectDay: function(t, e, n, i) {
                var r = $(t);
                if (!$(i).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(r[0])) {
                    var s = this._getInst(r[0]);
                    s.selectedDay = s.currentDay = $("a", i).html(), s.selectedMonth = s.currentMonth = e, s.selectedYear = s.currentYear = n, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
                }
            },
            _clearDate: function(t) {
                {
                    var e = $(t);
                    this._getInst(e[0])
                }
                this._selectDate(e, "")
            },
            _selectDate: function(t, e) {
                var n = $(t),
                    i = this._getInst(n[0]);
                e = null != e ? e : this._formatDate(i), i.input && i.input.val(e), this._updateAlternate(i);
                var r = this._get(i, "onSelect");
                r ? r.apply(i.input ? i.input[0] : null, [e, i]) : i.input && i.input.trigger("change"), i.inline ? this._updateDatepicker(i) : (this._hideDatepicker(), this._lastInput = i.input[0], "object" != typeof i.input[0] && i.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var e = this._get(t, "altField");
                if (e) {
                    var n = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                        i = this._getDate(t),
                        r = this.formatDate(n, i, this._getFormatConfig(t));
                    $(e).each(function() {
                        $(this).val(r)
                    })
                }
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function(t) {
                var e = new Date(t.getTime());
                e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var n = e.getTime();
                return e.setMonth(0), e.setDate(1), Math.floor(Math.round((n - e) / 864e5) / 7) + 1
            },
            parseDate: function(t, e, n) {
                if (null == t || null == e) throw "Invalid arguments";
                if (e = "object" == typeof e ? e.toString() : e + "", "" == e) return null;
                var i = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                i = "string" != typeof i ? i : (new Date).getFullYear() % 100 + parseInt(i, 10);
                for (var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, s = (n ? n.dayNames : null) || this._defaults.dayNames, o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, a = (n ? n.monthNames : null) || this._defaults.monthNames, l = -1, u = -1, c = -1, d = -1, h = !1, p = function(e) {
                        var n = y + 1 < t.length && t.charAt(y + 1) == e;
                        return n && y++, n
                    }, f = function(t) {
                        var n = p(t),
                            i = "@" == t ? 14 : "!" == t ? 20 : "y" == t && n ? 4 : "o" == t ? 3 : 2,
                            r = new RegExp("^\\d{1," + i + "}"),
                            s = e.substring(v).match(r);
                        if (!s) throw "Missing number at position " + v;
                        return v += s[0].length, parseInt(s[0], 10)
                    }, g = function(t, n, i) {
                        var r = $.map(p(t) ? i : n, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            }),
                            s = -1;
                        if ($.each(r, function(t, n) {
                                var i = n[1];
                                return e.substr(v, i.length).toLowerCase() == i.toLowerCase() ? (s = n[0], v += i.length, !1) : void 0
                            }), -1 != s) return s + 1;
                        throw "Unknown name at position " + v
                    }, m = function() {
                        if (e.charAt(v) != t.charAt(y)) throw "Unexpected literal at position " + v;
                        v++
                    }, v = 0, y = 0; y < t.length; y++)
                    if (h) "'" != t.charAt(y) || p("'") ? m() : h = !1;
                    else switch (t.charAt(y)) {
                        case "d":
                            c = f("d");
                            break;
                        case "D":
                            g("D", r, s);
                            break;
                        case "o":
                            d = f("o");
                            break;
                        case "m":
                            u = f("m");
                            break;
                        case "M":
                            u = g("M", o, a);
                            break;
                        case "y":
                            l = f("y");
                            break;
                        case "@":
                            var b = new Date(f("@"));
                            l = b.getFullYear(), u = b.getMonth() + 1, c = b.getDate();
                            break;
                        case "!":
                            var b = new Date((f("!") - this._ticksTo1970) / 1e4);
                            l = b.getFullYear(), u = b.getMonth() + 1, c = b.getDate();
                            break;
                        case "'":
                            p("'") ? m() : h = !0;
                            break;
                        default:
                            m()
                    }
                    if (v < e.length) {
                        var w = e.substr(v);
                        if (!/^\s+/.test(w)) throw "Extra/unparsed characters found in date: " + w
                    }
                if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (i >= l ? 0 : -100)), d > -1)
                    for (u = 1, c = d;;) {
                        var x = this._getDaysInMonth(l, u - 1);
                        if (x >= c) break;
                        u++, c -= x
                    }
                var b = this._daylightSavingAdjust(new Date(l, u - 1, c));
                if (b.getFullYear() != l || b.getMonth() + 1 != u || b.getDate() != c) throw "Invalid date";
                return b
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(t, e, n) {
                if (!e) return "";
                var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    r = (n ? n.dayNames : null) || this._defaults.dayNames,
                    s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    o = (n ? n.monthNames : null) || this._defaults.monthNames,
                    a = function(e) {
                        var n = h + 1 < t.length && t.charAt(h + 1) == e;
                        return n && h++, n
                    },
                    l = function(t, e, n) {
                        var i = "" + e;
                        if (a(t))
                            for (; i.length < n;) i = "0" + i;
                        return i
                    },
                    u = function(t, e, n, i) {
                        return a(t) ? i[e] : n[e]
                    },
                    c = "",
                    d = !1;
                if (e)
                    for (var h = 0; h < t.length; h++)
                        if (d) "'" != t.charAt(h) || a("'") ? c += t.charAt(h) : d = !1;
                        else switch (t.charAt(h)) {
                            case "d":
                                c += l("d", e.getDate(), 2);
                                break;
                            case "D":
                                c += u("D", e.getDay(), i, r);
                                break;
                            case "o":
                                c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                c += l("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                c += u("M", e.getMonth(), s, o);
                                break;
                            case "y":
                                c += a("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                break;
                            case "@":
                                c += e.getTime();
                                break;
                            case "!":
                                c += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                a("'") ? c += "'" : d = !0;
                                break;
                            default:
                                c += t.charAt(h)
                        }
                        return c
            },
            _possibleChars: function(t) {
                for (var e = "", n = !1, i = function(e) {
                        var n = r + 1 < t.length && t.charAt(r + 1) == e;
                        return n && r++, n
                    }, r = 0; r < t.length; r++)
                    if (n) "'" != t.charAt(r) || i("'") ? e += t.charAt(r) : n = !1;
                    else switch (t.charAt(r)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            e += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            i("'") ? e += "'" : n = !0;
                            break;
                        default:
                            e += t.charAt(r)
                    }
                    return e
            },
            _get: function(t, e) {
                return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() != t.lastVal) {
                    var n, i, r = this._get(t, "dateFormat"),
                        s = t.lastVal = t.input ? t.input.val() : null;
                    n = i = this._getDefaultDate(t);
                    var o = this._getFormatConfig(t);
                    try {
                        n = this.parseDate(r, s, o) || i
                    } catch (a) {
                        this.log(a), s = e ? "" : s
                    }
                    t.selectedDay = n.getDate(), t.drawMonth = t.selectedMonth = n.getMonth(), t.drawYear = t.selectedYear = n.getFullYear(), t.currentDay = s ? n.getDate() : 0, t.currentMonth = s ? n.getMonth() : 0, t.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(t, e, n) {
                var i = function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    },
                    r = function(e) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                        } catch (n) {}
                        for (var i = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, r = i.getFullYear(), s = i.getMonth(), o = i.getDate(), a = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(e); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    o += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    o += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    s += parseInt(l[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(r, s));
                                    break;
                                case "y":
                                case "Y":
                                    r += parseInt(l[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(r, s))
                            }
                            l = a.exec(e)
                        }
                        return new Date(r, s, o)
                    },
                    s = null == e || "" === e ? n : "string" == typeof e ? r(e) : "number" == typeof e ? isNaN(e) ? n : i(e) : new Date(e.getTime());
                return s = s && "Invalid Date" == s.toString() ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, n) {
                var i = !e,
                    r = t.selectedMonth,
                    s = t.selectedYear,
                    o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), r == t.selectedMonth && s == t.selectedYear || n || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(i ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                var e = !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function(t) {
                var e = this._get(t, "stepMonths"),
                    n = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, -e, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, +e, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(n)
                        },
                        selectDay: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "M"), !1
                        },
                        selectYear: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e = new Date;
                e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
                var n = this._get(t, "isRTL"),
                    i = this._get(t, "showButtonPanel"),
                    r = this._get(t, "hideIfNoPrevNext"),
                    s = this._get(t, "navigationAsDateFormat"),
                    o = this._getNumberOfMonths(t),
                    a = this._get(t, "showCurrentAtPos"),
                    l = this._get(t, "stepMonths"),
                    u = 1 != o[0] || 1 != o[1],
                    c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    d = this._getMinMaxDate(t, "min"),
                    h = this._getMinMaxDate(t, "max"),
                    p = t.drawMonth - a,
                    f = t.drawYear;
                if (0 > p && (p += 12, f--), h) {
                    var g = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
                    for (g = d && d > g ? d : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;) p--, 0 > p && (p = 11, f--)
                }
                t.drawMonth = p, t.drawYear = f;
                var m = this._get(t, "prevText");
                m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(t)) : m;
                var v = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>" : r ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>",
                    y = this._get(t, "nextText");
                y = s ? this.formatDate(y, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(t)) : y;
                var b = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>" : r ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>",
                    w = this._get(t, "currentText"),
                    x = this._get(t, "gotoCurrent") && t.currentDay ? c : e;
                w = s ? this.formatDate(w, x, this._getFormatConfig(t)) : w;
                var k = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "</button>",
                    T = i ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? k : "") + (this._isInRange(t, x) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (n ? "" : k) + "</div>" : "",
                    C = parseInt(this._get(t, "firstDay"), 10);
                C = isNaN(C) ? 0 : C;
                for (var S = this._get(t, "showWeek"), _ = this._get(t, "dayNames"), D = (this._get(t, "dayNamesShort"), this._get(t, "dayNamesMin")), E = this._get(t, "monthNames"), F = this._get(t, "monthNamesShort"), A = this._get(t, "beforeShowDay"), M = this._get(t, "showOtherMonths"), N = this._get(t, "selectOtherMonths"), j = (this._get(t, "calculateWeek") || this.iso8601Week, this._getDefaultDate(t)), P = "", I = 0; I < o[0]; I++) {
                    var L = "";
                    this.maxRows = 4;
                    for (var O = 0; O < o[1]; O++) {
                        var H = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)),
                            R = " ui-corner-all",
                            q = "";
                        if (u) {
                            if (q += '<div class="ui-datepicker-group', o[1] > 1) switch (O) {
                                case 0:
                                    q += " ui-datepicker-group-first", R = " ui-corner-" + (n ? "right" : "left");
                                    break;
                                case o[1] - 1:
                                    q += " ui-datepicker-group-last", R = " ui-corner-" + (n ? "left" : "right");
                                    break;
                                default:
                                    q += " ui-datepicker-group-middle", R = ""
                            }
                            q += '">'
                        }
                        q += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && 0 == I ? n ? b : v : "") + (/all|right/.test(R) && 0 == I ? n ? v : b : "") + this._generateMonthYearHeader(t, p, f, d, h, I > 0 || O > 0, E, F) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                        for (var z = S ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", W = 0; 7 > W; W++) {
                            var B = (W + C) % 7;
                            z += "<th" + ((W + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + _[B] + '">' + D[B] + "</span></th>"
                        }
                        q += z + "</tr></thead><tbody>";
                        var Y = this._getDaysInMonth(f, p);
                        f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, Y));
                        var U = (this._getFirstDayOfMonth(f, p) - C + 7) % 7,
                            Q = Math.ceil((U + Y) / 7),
                            V = u ? this.maxRows > Q ? this.maxRows : Q : Q;
                        this.maxRows = V;
                        for (var X = this._daylightSavingAdjust(new Date(f, p, 1 - U)), K = 0; V > K; K++) {
                            q += "<tr>";
                            for (var G = S ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(X) + "</td>" : "", W = 0; 7 > W; W++) {
                                var J = A ? A.apply(t.input ? t.input[0] : null, [X]) : [!0, ""],
                                    Z = X.getMonth() != p,
                                    te = Z && !N || !J[0] || d && d > X || h && X > h;
                                G += '<td class="' + ((W + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (X.getTime() == H.getTime() && p == t.selectedMonth && t._keyEvent || j.getTime() == X.getTime() && j.getTime() == H.getTime() ? " " + this._dayOverClass : "") + (te ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !M ? "" : " " + J[1] + (X.getTime() == c.getTime() ? " " + this._currentClass : "") + (X.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !M || !J[2] ? "" : ' title="' + J[2] + '"') + (te ? "" : ' data-handler="selectDay" data-event="click" data-month="' + X.getMonth() + '" data-year="' + X.getFullYear() + '"') + ">" + (Z && !M ? "&#xa0;" : te ? '<span class="ui-state-default">' + X.getDate() + "</span>" : '<a class="ui-state-default' + (X.getTime() == e.getTime() ? " ui-state-highlight" : "") + (X.getTime() == c.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + X.getDate() + "</a>") + "</td>", X.setDate(X.getDate() + 1), X = this._daylightSavingAdjust(X)
                            }
                            q += G + "</tr>"
                        }
                        p++, p > 11 && (p = 0, f++), q += "</tbody></table>" + (u ? "</div>" + (o[0] > 0 && O == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), L += q
                    }
                    P += L
                }
                return P += T + ($.ui.ie6 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), t._keyEvent = !1, P
            },
            _generateMonthYearHeader: function(t, e, n, i, r, s, o, a) {
                var l = this._get(t, "changeMonth"),
                    u = this._get(t, "changeYear"),
                    c = this._get(t, "showMonthAfterYear"),
                    d = '<div class="ui-datepicker-title">',
                    h = "";
                if (s || !l) h += '<span class="ui-datepicker-month">' + o[e] + "</span>";
                else {
                    var p = i && i.getFullYear() == n,
                        f = r && r.getFullYear() == n;
                    h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                    for (var g = 0; 12 > g; g++)(!p || g >= i.getMonth()) && (!f || g <= r.getMonth()) && (h += '<option value="' + g + '"' + (g == e ? ' selected="selected"' : "") + ">" + a[g] + "</option>");
                    h += "</select>"
                }
                if (c || (d += h + (!s && l && u ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", s || !u) d += '<span class="ui-datepicker-year">' + n + "</span>";
                    else {
                        var m = this._get(t, "yearRange").split(":"),
                            v = (new Date).getFullYear(),
                            y = function(t) {
                                var e = t.match(/c[+-].*/) ? n + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? v + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? v : e
                            },
                            b = y(m[0]),
                            w = Math.max(b, y(m[1] || ""));
                        for (b = i ? Math.max(b, i.getFullYear()) : b, w = r ? Math.min(w, r.getFullYear()) : w, t.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; w >= b; b++) t.yearshtml += '<option value="' + b + '"' + (b == n ? ' selected="selected"' : "") + ">" + b + "</option>";
                        t.yearshtml += "</select>", d += t.yearshtml, t.yearshtml = null
                    }
                return d += this._get(t, "yearSuffix"), c && (d += (!s && l && u ? "" : "&#xa0;") + h), d += "</div>"
            },
            _adjustInstDate: function(t, e, n) {
                var i = t.drawYear + ("Y" == n ? e : 0),
                    r = t.drawMonth + ("M" == n ? e : 0),
                    s = Math.min(t.selectedDay, this._getDaysInMonth(i, r)) + ("D" == n ? e : 0),
                    o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(i, r, s)));
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), ("M" == n || "Y" == n) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var n = this._getMinMaxDate(t, "min"),
                    i = this._getMinMaxDate(t, "max"),
                    r = n && n > e ? n : e;
                return r = i && r > i ? i : r
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, n, i) {
                var r = this._getNumberOfMonths(t),
                    s = this._daylightSavingAdjust(new Date(n, i + (0 > e ? e : r[0] * r[1]), 1));
                return 0 > e && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(t, s)
            },
            _isInRange: function(t, e) {
                var n = this._getMinMaxDate(t, "min"),
                    i = this._getMinMaxDate(t, "max");
                return (!n || e.getTime() >= n.getTime()) && (!i || e.getTime() <= i.getTime())
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, n, i) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var r = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(i, n, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), r, this._getFormatConfig(t))
            }
        }), $.fn.datepicker = function(t) {
            if (!this.length) return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function() {
                "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
            }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
        }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
    }(jQuery),
    function() {
        var t = this,
            e = t._,
            n = {},
            i = Array.prototype,
            r = Object.prototype,
            s = Function.prototype,
            o = i.push,
            a = i.slice,
            l = i.concat,
            u = r.toString,
            c = r.hasOwnProperty,
            d = i.forEach,
            h = i.map,
            p = i.reduce,
            f = i.reduceRight,
            g = i.filter,
            m = i.every,
            v = i.some,
            y = i.indexOf,
            b = i.lastIndexOf,
            w = Array.isArray,
            x = Object.keys,
            k = s.bind,
            T = function(t) {
                return t instanceof T ? t : this instanceof T ? (this._wrapped = t, void 0) : new T(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : t._ = T, T.VERSION = "1.5.1";
        var C = T.each = T.forEach = function(t, e, i) {
            if (null != t)
                if (d && t.forEach === d) t.forEach(e, i);
                else if (t.length === +t.length) {
                for (var r = 0, s = t.length; s > r; r++)
                    if (e.call(i, t[r], r, t) === n) return
            } else
                for (var o = T.keys(t), r = 0, s = o.length; s > r; r++)
                    if (e.call(i, t[o[r]], o[r], t) === n) return
        };
        T.map = T.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : h && t.map === h ? t.map(e, n) : (C(t, function(t, r, s) {
                i.push(e.call(n, t, r, s))
            }), i)
        };
        var S = "Reduce of empty array with no initial value";
        T.reduce = T.foldl = T.inject = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return i && (e = T.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
            if (C(t, function(t, s, o) {
                    r ? n = e.call(i, n, t, s, o) : (n = t, r = !0)
                }), !r) throw new TypeError(S);
            return n
        }, T.reduceRight = T.foldr = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), f && t.reduceRight === f) return i && (e = T.bind(e, i)), r ? t.reduceRight(e, n) : t.reduceRight(e);
            var s = t.length;
            if (s !== +s) {
                var o = T.keys(t);
                s = o.length
            }
            if (C(t, function(a, l, u) {
                    l = o ? o[--s] : --s, r ? n = e.call(i, n, t[l], l, u) : (n = t[l], r = !0)
                }), !r) throw new TypeError(S);
            return n
        }, T.find = T.detect = function(t, e, n) {
            var i;
            return _(t, function(t, r, s) {
                return e.call(n, t, r, s) ? (i = t, !0) : void 0
            }), i
        }, T.filter = T.select = function(t, e, n) {
            var i = [];
            return null == t ? i : g && t.filter === g ? t.filter(e, n) : (C(t, function(t, r, s) {
                e.call(n, t, r, s) && i.push(t)
            }), i)
        }, T.reject = function(t, e, n) {
            return T.filter(t, function(t, i, r) {
                return !e.call(n, t, i, r)
            }, n)
        }, T.every = T.all = function(t, e, i) {
            e || (e = T.identity);
            var r = !0;
            return null == t ? r : m && t.every === m ? t.every(e, i) : (C(t, function(t, s, o) {
                return (r = r && e.call(i, t, s, o)) ? void 0 : n
            }), !!r)
        };
        var _ = T.some = T.any = function(t, e, i) {
            e || (e = T.identity);
            var r = !1;
            return null == t ? r : v && t.some === v ? t.some(e, i) : (C(t, function(t, s, o) {
                return r || (r = e.call(i, t, s, o)) ? n : void 0
            }), !!r)
        };
        T.contains = T.include = function(t, e) {
            return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : _(t, function(t) {
                return t === e
            })
        }, T.invoke = function(t, e) {
            var n = a.call(arguments, 2),
                i = T.isFunction(e);
            return T.map(t, function(t) {
                return (i ? e : t[e]).apply(t, n)
            })
        }, T.pluck = function(t, e) {
            return T.map(t, function(t) {
                return t[e]
            })
        }, T.where = function(t, e, n) {
            return T.isEmpty(e) ? n ? void 0 : [] : T[n ? "find" : "filter"](t, function(t) {
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            })
        }, T.findWhere = function(t, e) {
            return T.where(t, e, !0)
        }, T.max = function(t, e, n) {
            if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            if (!e && T.isEmpty(t)) return -1 / 0;
            var i = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return C(t, function(t, r, s) {
                var o = e ? e.call(n, t, r, s) : t;
                o > i.computed && (i = {
                    value: t,
                    computed: o
                })
            }), i.value
        }, T.min = function(t, e, n) {
            if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            if (!e && T.isEmpty(t)) return 1 / 0;
            var i = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return C(t, function(t, r, s) {
                var o = e ? e.call(n, t, r, s) : t;
                o < i.computed && (i = {
                    value: t,
                    computed: o
                })
            }), i.value
        }, T.shuffle = function(t) {
            var e, n = 0,
                i = [];
            return C(t, function(t) {
                e = T.random(n++), i[n - 1] = i[e], i[e] = t
            }), i
        };
        var D = function(t) {
            return T.isFunction(t) ? t : function(e) {
                return e[t]
            }
        };
        T.sortBy = function(t, e, n) {
            var i = D(e);
            return T.pluck(T.map(t, function(t, e, r) {
                return {
                    value: t,
                    index: e,
                    criteria: i.call(n, t, e, r)
                }
            }).sort(function(t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return t.index - e.index
            }), "value")
        };
        var $ = function(t) {
            return function(e, n, i) {
                var r = {},
                    s = null == n ? T.identity : D(n);
                return C(e, function(n, o) {
                    var a = s.call(i, n, o, e);
                    t(r, a, n)
                }), r
            }
        };
        T.groupBy = $(function(t, e, n) {
            (T.has(t, e) ? t[e] : t[e] = []).push(n)
        }), T.indexBy = $(function(t, e, n) {
            t[e] = n
        }), T.countBy = $(function(t, e) {
            T.has(t, e) ? t[e] ++ : t[e] = 1
        }), T.sortedIndex = function(t, e, n, i) {
            n = null == n ? T.identity : D(n);
            for (var r = n.call(i, e), s = 0, o = t.length; o > s;) {
                var a = s + o >>> 1;
                n.call(i, t[a]) < r ? s = a + 1 : o = a
            }
            return s
        }, T.toArray = function(t) {
            return t ? T.isArray(t) ? a.call(t) : t.length === +t.length ? T.map(t, T.identity) : T.values(t) : []
        }, T.size = function(t) {
            return null == t ? 0 : t.length === +t.length ? t.length : T.keys(t).length
        }, T.first = T.head = T.take = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : a.call(t, 0, e)
        }, T.initial = function(t, e, n) {
            return a.call(t, 0, t.length - (null == e || n ? 1 : e))
        }, T.last = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
        }, T.rest = T.tail = T.drop = function(t, e, n) {
            return a.call(t, null == e || n ? 1 : e)
        }, T.compact = function(t) {
            return T.filter(t, T.identity)
        };
        var E = function(t, e, n) {
            return e && T.every(t, T.isArray) ? l.apply(n, t) : (C(t, function(t) {
                T.isArray(t) || T.isArguments(t) ? e ? o.apply(n, t) : E(t, e, n) : n.push(t)
            }), n)
        };
        T.flatten = function(t, e) {
            return E(t, e, [])
        }, T.without = function(t) {
            return T.difference(t, a.call(arguments, 1))
        }, T.uniq = T.unique = function(t, e, n, i) {
            T.isFunction(e) && (i = n, n = e, e = !1);
            var r = n ? T.map(t, n, i) : t,
                s = [],
                o = [];
            return C(r, function(n, i) {
                (e ? i && o[o.length - 1] === n : T.contains(o, n)) || (o.push(n), s.push(t[i]))
            }), s
        }, T.union = function() {
            return T.uniq(T.flatten(arguments, !0))
        }, T.intersection = function(t) {
            var e = a.call(arguments, 1);
            return T.filter(T.uniq(t), function(t) {
                return T.every(e, function(e) {
                    return T.indexOf(e, t) >= 0
                })
            })
        }, T.difference = function(t) {
            var e = l.apply(i, a.call(arguments, 1));
            return T.filter(t, function(t) {
                return !T.contains(e, t)
            })
        }, T.zip = function() {
            for (var t = T.max(T.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = T.pluck(arguments, "" + n);
            return e
        }, T.object = function(t, e) {
            if (null == t) return {};
            for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        }, T.indexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = 0,
                r = t.length;
            if (n) {
                if ("number" != typeof n) return i = T.sortedIndex(t, e), t[i] === e ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            if (y && t.indexOf === y) return t.indexOf(e, n);
            for (; r > i; i++)
                if (t[i] === e) return i;
            return -1
        }, T.lastIndexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = null != n;
            if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
            for (var r = i ? n : t.length; r--;)
                if (t[r] === e) return r;
            return -1
        }, T.range = function(t, e, n) {
            arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, s = new Array(i); i > r;) s[r++] = t, t += n;
            return s
        };
        var F = function() {};
        T.bind = function(t, e) {
            var n, i;
            if (k && t.bind === k) return k.apply(t, a.call(arguments, 1));
            if (!T.isFunction(t)) throw new TypeError;
            return n = a.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return t.apply(e, n.concat(a.call(arguments)));
                F.prototype = t.prototype;
                var r = new F;
                F.prototype = null;
                var s = t.apply(r, n.concat(a.call(arguments)));
                return Object(s) === s ? s : r
            }
        }, T.partial = function(t) {
            var e = a.call(arguments, 1);
            return function() {
                return t.apply(this, e.concat(a.call(arguments)))
            }
        }, T.bindAll = function(t) {
            var e = a.call(arguments, 1);
            if (0 === e.length) throw new Error("bindAll must be passed function names");
            return C(e, function(e) {
                t[e] = T.bind(t[e], t)
            }), t
        }, T.memoize = function(t, e) {
            var n = {};
            return e || (e = T.identity),
                function() {
                    var i = e.apply(this, arguments);
                    return T.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
                }
        }, T.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, T.defer = function(t) {
            return T.delay.apply(T, [t, 1].concat(a.call(arguments, 1)))
        }, T.throttle = function(t, e, n) {
            var i, r, s, o = null,
                a = 0;
            n || (n = {});
            var l = function() {
                a = n.leading === !1 ? 0 : new Date, o = null, s = t.apply(i, r)
            };
            return function() {
                var u = new Date;
                a || n.leading !== !1 || (a = u);
                var c = e - (u - a);
                return i = this, r = arguments, 0 >= c ? (clearTimeout(o), o = null, a = u, s = t.apply(i, r)) : o || n.trailing === !1 || (o = setTimeout(l, c)), s
            }
        }, T.debounce = function(t, e, n) {
            var i, r = null;
            return function() {
                var s = this,
                    o = arguments,
                    a = function() {
                        r = null, n || (i = t.apply(s, o))
                    },
                    l = n && !r;
                return clearTimeout(r), r = setTimeout(a, e), l && (i = t.apply(s, o)), i
            }
        }, T.once = function(t) {
            var e, n = !1;
            return function() {
                return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
            }
        }, T.wrap = function(t, e) {
            return function() {
                var n = [t];
                return o.apply(n, arguments), e.apply(this, n)
            }
        }, T.compose = function() {
            var t = arguments;
            return function() {
                for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                return e[0]
            }
        }, T.after = function(t, e) {
            return function() {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, T.keys = x || function(t) {
            if (t !== Object(t)) throw new TypeError("Invalid object");
            var e = [];
            for (var n in t) T.has(t, n) && e.push(n);
            return e
        }, T.values = function(t) {
            for (var e = T.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = t[e[r]];
            return i
        }, T.pairs = function(t) {
            for (var e = T.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = [e[r], t[e[r]]];
            return i
        }, T.invert = function(t) {
            for (var e = {}, n = T.keys(t), i = 0, r = n.length; r > i; i++) e[t[n[i]]] = n[i];
            return e
        }, T.functions = T.methods = function(t) {
            var e = [];
            for (var n in t) T.isFunction(t[n]) && e.push(n);
            return e.sort()
        }, T.extend = function(t) {
            return C(a.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) t[n] = e[n]
            }), t
        }, T.pick = function(t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            return C(n, function(n) {
                n in t && (e[n] = t[n])
            }), e
        }, T.omit = function(t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            for (var r in t) T.contains(n, r) || (e[r] = t[r]);
            return e
        }, T.defaults = function(t) {
            return C(a.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        }, T.clone = function(t) {
            return T.isObject(t) ? T.isArray(t) ? t.slice() : T.extend({}, t) : t
        }, T.tap = function(t, e) {
            return e(t), t
        };
        var A = function(t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof T && (t = t._wrapped), e instanceof T && (e = e._wrapped);
            var r = u.call(t);
            if (r != u.call(e)) return !1;
            switch (r) {
                case "[object String]":
                    return t == String(e);
                case "[object Number]":
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +e;
                case "[object RegExp]":
                    return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var s = n.length; s--;)
                if (n[s] == t) return i[s] == e;
            var o = t.constructor,
                a = e.constructor;
            if (o !== a && !(T.isFunction(o) && o instanceof o && T.isFunction(a) && a instanceof a)) return !1;
            n.push(t), i.push(e);
            var l = 0,
                c = !0;
            if ("[object Array]" == r) {
                if (l = t.length, c = l == e.length)
                    for (; l-- && (c = A(t[l], e[l], n, i)););
            } else {
                for (var d in t)
                    if (T.has(t, d) && (l++, !(c = T.has(e, d) && A(t[d], e[d], n, i)))) break;
                if (c) {
                    for (d in e)
                        if (T.has(e, d) && !l--) break;
                    c = !l
                }
            }
            return n.pop(), i.pop(), c
        };
        T.isEqual = function(t, e) {
            return A(t, e, [], [])
        }, T.isEmpty = function(t) {
            if (null == t) return !0;
            if (T.isArray(t) || T.isString(t)) return 0 === t.length;
            for (var e in t)
                if (T.has(t, e)) return !1;
            return !0
        }, T.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }, T.isArray = w || function(t) {
            return "[object Array]" == u.call(t)
        }, T.isObject = function(t) {
            return t === Object(t)
        }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
            T["is" + t] = function(e) {
                return u.call(e) == "[object " + t + "]"
            }
        }), T.isArguments(arguments) || (T.isArguments = function(t) {
            return !(!t || !T.has(t, "callee"))
        }), "function" != typeof /./ && (T.isFunction = function(t) {
            return "function" == typeof t
        }), T.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, T.isNaN = function(t) {
            return T.isNumber(t) && t != +t
        }, T.isBoolean = function(t) {
            return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
        }, T.isNull = function(t) {
            return null === t
        }, T.isUndefined = function(t) {
            return void 0 === t
        }, T.has = function(t, e) {
            return c.call(t, e)
        }, T.noConflict = function() {
            return t._ = e, this
        }, T.identity = function(t) {
            return t
        }, T.times = function(t, e, n) {
            for (var i = Array(Math.max(0, t)), r = 0; t > r; r++) i[r] = e.call(n, r);
            return i
        }, T.random = function(t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        };
        var M = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        M.unescape = T.invert(M.escape);
        var N = {
            escape: new RegExp("[" + T.keys(M.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + T.keys(M.unescape).join("|") + ")", "g")
        };
        T.each(["escape", "unescape"], function(t) {
            T[t] = function(e) {
                return null == e ? "" : ("" + e).replace(N[t], function(e) {
                    return M[t][e]
                })
            }
        }), T.result = function(t, e) {
            if (null == t) return void 0;
            var n = t[e];
            return T.isFunction(n) ? n.call(t) : n
        }, T.mixin = function(t) {
            C(T.functions(t), function(e) {
                var n = T[e] = t[e];
                T.prototype[e] = function() {
                    var t = [this._wrapped];
                    return o.apply(t, arguments), O.call(this, n.apply(T, t))
                }
            })
        };
        var j = 0;
        T.uniqueId = function(t) {
            var e = ++j + "";
            return t ? t + e : e
        }, T.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var P = /(.)^/,
            I = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                " ": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        T.template = function(t, e, n) {
            var i;
            n = T.defaults({}, n, T.templateSettings);
            var r = new RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"),
                s = 0,
                o = "__p+='";
            t.replace(r, function(e, n, i, r, a) {
                return o += t.slice(s, a).replace(L, function(t) {
                    return "\\" + I[t]
                }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (o += "';\n" + r + "\n__p+='"), s = a + e.length, e
            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", o)
            } catch (a) {
                throw a.source = o, a
            }
            if (e) return i(e, T);
            var l = function(t) {
                return i.call(this, t, T)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", l
        }, T.chain = function(t) {
            return T(t).chain()
        };
        var O = function(t) {
            return this._chain ? T(t).chain() : t
        };
        T.mixin(T), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var e = i[t];
            T.prototype[t] = function() {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], O.call(this, n)
            }
        }), C(["concat", "join", "slice"], function(t) {
            var e = i[t];
            T.prototype[t] = function() {
                return O.call(this, e.apply(this._wrapped, arguments))
            }
        }), T.extend(T.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        })
    }.call(this), $(function() {
        if ($("#product-mobile-select").click(function() {
                $("#product-mobile").toggle(), $("#product-mobile-select .mobile-top-nav-item").toggleClass("activated")
            }), $("#blog-mobile-select").click(function() {
                $("#blog-mobile").toggle(), $("#blog-mobile-select .mobile-top-nav-item").toggleClass("activated")
            }), $("#community-mobile-select").click(function() {
                $("#community-mobile").toggle(), $("#community-mobile-select .mobile-top-nav-item").toggleClass("activated")
            }), $("#myaloha-mobile-select").click(function() {
                $("#myaloha-mobile").toggle(), $("#myaloha-mobile-select .mobile-top-nav-item").toggleClass("activated")
            }), $("#about-mobile-select").click(function() {
                $("#about-mobile").toggle(), $("#about-mobile-select .mobile-top-nav-item").toggleClass("activated")
            }), $("#stick-nav").length) var t = $("#stick-nav").offset();
        $(window).scroll(function() {
            var e = $("#stick-nav");
            if (e.length) {
                var n = $(window).scrollTop();
                n > t.top && $("#stick-nav").addClass("fixed"), t.top > n && $("#stick-nav").removeClass("fixed"), n += parseInt($("#stick-nav").outerHeight()), $(".sticky-section").each(function() {
                    $(this).attr("data-section-name", "#" + $(this).attr("id"));
                    var t = $(this).attr("data-section-name"),
                        e = $(this).attr("data-top-limit"),
                        i = $(this).attr("data-bottom-limit");
                    n > e && i > n ? $('a[data-section-anchor="' + t + '"] li').addClass("active") : $('a[data-section-anchor="' + t + '"] li').removeClass("active")
                }), $("li.active").size() <= 0 && $('a[data-section-anchor="#benefits"] li').addClass("active")
            }
        }), $(".menu_drop > ul").toggleClass("down up"), $(".menu_drop .up ul").hide(), $(".menu_drop .up").click(function(t) {
            $(".menu_drop .up ul").slideToggle(200), $(".menu_drop").toggleClass("dropdownActive"), $(".clicker").toggleClass("active"), t.stopPropagation()
        }), $(this).click(function() {
            $(".menu_drop .up ul").is(":visible") && ($(".menu_drop .up ul", this).slideUp(), $(".menu_drop").removeClass("dropdownActive"), $(".clicker").removeClass("active"))
        })
    }), window.onload = function() {
        var t = ($(".hide"), []);
        $(".hide .brick").each(function() {
            t.push(this)
        });
        var e = $(".append"),
            n = $("#mason");
        e.click(function() {
            return n.imagesLoaded(function() {
                n.append(t).masonry("appended", t)
            }), $(this).parent().hide(), !1
        })
    }, $(function() {
        var t = getLastPart(window.location.href);
        $('nav a.change[href$="/' + t + '"]').addClass("active")
    }), $(function() {
        var t = getLastPart(window.location.href);
        $('#blog-landing-nav a[href$="/' + t + '"]').addClass("active")
    }),
    function() {
        "use strict";

        function t() {}

        function e(t, e) {
            for (var n = t.length; n--;)
                if (t[n].listener === e) return n;
            return -1
        }
        var n = t.prototype;
        n.getListeners = function(t) {
            var e, n, i = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
            } else e = i[t] || (i[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, n = [];
            for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
            return n
        }, n.getListenersAsObject = function(t) {
            var e, n = this.getListeners(t);
            return n instanceof Array && (e = {}, e[t] = n), e || n
        }, n.addListener = function(t, n) {
            var i, r = this.getListenersAsObject(t),
                s = "object" == typeof n;
            for (i in r) r.hasOwnProperty(i) && -1 === e(r[i], n) && r[i].push(s ? n : {
                listener: n,
                once: !1
            });
            return this
        }, n.on = n.addListener, n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = n.addOnceListener, n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, n) {
            var i, r, s = this.getListenersAsObject(t);
            for (r in s) s.hasOwnProperty(r) && (i = e(s[r], n), -1 !== i && s[r].splice(i, 1));
            return this
        }, n.off = n.removeListener, n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, n) {
            var i, r, s = t ? this.removeListener : this.addListener,
                o = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (i = n.length; i--;) s.call(this, e, n[i]);
            else
                for (i in e) e.hasOwnProperty(i) && (r = e[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
            return this
        }, n.removeEvent = function(t) {
            var e, n = typeof t,
                i = this._getEvents();
            if ("string" === n) delete i[t];
            else if ("object" === n)
                for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
            else delete this._events;
            return this
        }, n.emitEvent = function(t, e) {
            var n, i, r, s, o = this.getListenersAsObject(t);
            for (r in o)
                if (o.hasOwnProperty(r))
                    for (i = o[r].length; i--;) n = o[r][i], s = n.listener.apply(this, e || []), (s === this._getOnceReturnValue() || n.once === !0) && this.removeListener(t, o[r][i].listener);
            return this
        }, n.trigger = n.emitEvent, n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, "function" == typeof define && define.amd ? define(function() {
            return t
        }) : "undefined" != typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        "use strict";
        var e = document.documentElement,
            n = function() {};
        e.addEventListener ? n = function(t, e, n) {
            t.addEventListener(e, n, !1)
        } : e.attachEvent && (n = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var e = t.event;
                e.target = e.target || e.srcElement, i.handleEvent.call(i, e)
            } : function() {
                var n = t.event;
                n.target = n.target || n.srcElement, i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var i = function() {};
        e.removeEventListener ? i = function(t, e, n) {
            t.removeEventListener(e, n, !1)
        } : e.detachEvent && (i = function(t, e, n) {
            t.detachEvent("on" + e, t[e + n]);
            try {
                delete t[e + n]
            } catch (i) {
                t[e + n] = void 0
            }
        });
        var r = {
            bind: n,
            unbind: i
        };
        "function" == typeof define && define.amd ? define(r) : t.eventie = r
    }(this),
    function(t) {
        "use strict";

        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            return "[object Array]" === l.call(t)
        }

        function i(t) {
            var e = [];
            if (n(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, r = t.length; r > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function r(t, n) {
            function r(t, n, o) {
                if (!(this instanceof r)) return new r(t, n);
                "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = i(t), this.options = e({}, this.options), "function" == typeof n ? o = n : e(this.options, n), o && this.on("always", o), this.getImages(), s && (this.jqDeferred = new s.Deferred);
                var a = this;
                setTimeout(function() {
                    a.check()
                })
            }

            function l(t) {
                this.img = t
            }
            r.prototype = new t, r.prototype.options = {}, r.prototype.getImages = function() {
                this.images = [];
                for (var t = 0, e = this.elements.length; e > t; t++) {
                    var n = this.elements[t];
                    "IMG" === n.nodeName && this.addImage(n);
                    for (var i = n.querySelectorAll("img"), r = 0, s = i.length; s > r; r++) {
                        var o = i[r];
                        this.addImage(o)
                    }
                }
            }, r.prototype.addImage = function(t) {
                var e = new l(t);
                this.images.push(e)
            }, r.prototype.check = function() {
                function t(t, r) {
                    return e.options.debug && a && o.log("confirm", t, r), e.progress(t), n++, n === i && e.complete(), !0
                }
                var e = this,
                    n = 0,
                    i = this.images.length;
                if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
                for (var r = 0; i > r; r++) {
                    var s = this.images[r];
                    s.on("confirm", t), s.check()
                }
            }, r.prototype.progress = function(t) {
                this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
                var e = this;
                setTimeout(function() {
                    e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify(e, t)
                })
            }, r.prototype.complete = function() {
                var t = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var e = this;
                setTimeout(function() {
                    if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                        var n = e.hasAnyBroken ? "reject" : "resolve";
                        e.jqDeferred[n](e)
                    }
                })
            }, s && (s.fn.imagesLoaded = function(t, e) {
                var n = new r(this, t, e);
                return n.jqDeferred.promise(s(this))
            });
            var u = {};
            return l.prototype = new t, l.prototype.check = function() {
                var t = u[this.img.src];
                if (t) return this.useCached(t), void 0;
                if (u[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
                var e = this.proxyImage = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.img.src
            }, l.prototype.useCached = function(t) {
                if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed");
                else {
                    var e = this;
                    t.on("confirm", function(t) {
                        return e.confirm(t.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, l.prototype.confirm = function(t, e) {
                this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
            }, l.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, l.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, l.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, l.prototype.unbindProxyEvents = function() {
                n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
            }, r
        }
        var s = t.jQuery,
            o = t.console,
            a = void 0 !== o,
            l = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], r) : t.imagesLoaded = r(t.EventEmitter, t.eventie)
    }(window), $.fn.imagesLoaded = function(t) {
        var e = this.filter("img"),
            n = e.length,
            i = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        return e.bind("load.imgloaded", function() {
            --n <= 0 && this.src !== i && (e.unbind("load.imgloaded"), t.call(e, this))
        }).each(function() {
            if (this.complete || void 0 === this.complete) {
                var t = this.src;
                this.src = i, this.src = t
            }
        }), this
    },
    /*
     * jQuery throttle / debounce - v1.1 - 3/7/2010
     * http://benalman.com/projects/jquery-throttle-debounce-plugin/
     *
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    function(t, e) {
        var n, i = t.jQuery || t.Cowboy || (t.Cowboy = {});
        i.throttle = n = function(t, n, r, s) {
            function o() {
                function i() {
                    l = +new Date, r.apply(u, d)
                }

                function o() {
                    a = e
                }
                var u = this,
                    c = +new Date - l,
                    d = arguments;
                s && !a && i(), a && clearTimeout(a), s === e && c > t ? i() : n !== !0 && (a = setTimeout(s ? o : i, s === e ? t - c : t))
            }
            var a, l = 0;
            return "boolean" != typeof n && (s = r, r = n, n = e), i.guid && (o.guid = r.guid = r.guid || i.guid++), o
        }, i.debounce = function(t, i, r) {
            return r === e ? n(t, i, !1) : n(t, r, i !== !1)
        }
    }(this),
    /*
     * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
     *
     * Uses the built in easing capabilities added In jQuery 1.1
     * to offer multiple easing options
     *
     * TERMS OF USE - jQuery Easing
     *
     * Open source under the BSD License.
     *
     * Copyright © 2008 George McGinley Smith
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     * Redistributions of source code must retain the above copyright notice, this list of
     * conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice, this list
     * of conditions and the following disclaimer in the documentation and/or other materials
     * provided with the distribution.
     *
     * Neither the name of the author nor the names of contributors may be used to endorse
     * or promote products derived from this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
     * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
     *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
     *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
     * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     * OF THE POSSIBILITY OF SUCH DAMAGE.
     *
     */
    jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, n, i, r) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
        },
        easeInQuad: function(t, e, n, i, r) {
            return i * (e /= r) * e + n
        },
        easeOutQuad: function(t, e, n, i, r) {
            return -i * (e /= r) * (e - 2) + n
        },
        easeInOutQuad: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function(t, e, n, i, r) {
            return i * (e /= r) * e * e + n
        },
        easeOutCubic: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e + 1) + n
        },
        easeInOutCubic: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e + n
        },
        easeOutQuart: function(t, e, n, i, r) {
            return -i * ((e = e / r - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e * e + n
        },
        easeOutQuint: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function(t, e, n, i, r) {
            return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(t, e, n, i, r) {
            return i * Math.sin(e / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(t, e, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
        },
        easeInExpo: function(t, e, n, i, r) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
        },
        easeOutExpo: function(t, e, n, i, r) {
            return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
        },
        easeInOutExpo: function(t, e, n, i, r) {
            return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
        },
        easeInCirc: function(t, e, n, i, r) {
            return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
        },
        easeOutCirc: function(t, e, n, i, r) {
            return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
        },
        easeInOutCirc: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function(t, e, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (o || (o = .3 * r), a < Math.abs(i)) {
                a = i;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(i / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - s) * Math.PI / o)) + n
        },
        easeOutElastic: function(t, e, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (o || (o = .3 * r), a < Math.abs(i)) {
                a = i;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - s) * Math.PI / o) + i + n
        },
        easeInOutElastic: function(t, e, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == e) return n;
            if (2 == (e /= r / 2)) return n + i;
            if (o || (o = .3 * r * 1.5), a < Math.abs(i)) {
                a = i;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(i / a);
            return 1 > e ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - s) * Math.PI / o) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - s) * Math.PI / o) * .5 + i + n
        },
        easeInBack: function(t, e, n, i, r, s) {
            return void 0 == s && (s = 1.70158), i * (e /= r) * e * ((s + 1) * e - s) + n
        },
        easeOutBack: function(t, e, n, i, r, s) {
            return void 0 == s && (s = 1.70158), i * ((e = e / r - 1) * e * ((s + 1) * e + s) + 1) + n
        },
        easeInOutBack: function(t, e, n, i, r, s) {
            return void 0 == s && (s = 1.70158), (e /= r / 2) < 1 ? i / 2 * e * e * (((s *= 1.525) + 1) * e - s) + n : i / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + n
        },
        easeInBounce: function(t, e, n, i, r) {
            return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
        },
        easeOutBounce: function(t, e, n, i, r) {
            return (e /= r) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, i, r) {
            return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
        }
    }),
    /*
     * touchSwipe - jQuery Plugin
     * https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * http://labs.skinkers.com/touchSwipe/
     * http://plugins.jquery.com/project/touchSwipe
     *
     * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     * $version: 1.3.3
     */
    function(t) {
        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = a), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function() {
                var i = t(this),
                    r = i.data(v);
                r || (r = new n(this, e), i.data(v, r))
            })
        }

        function n(e, n) {
            function y(t) {
                var e, t = t.originalEvent,
                    i = m ? t.touches[0] : t;
                return R = h, m ? q = t.touches.length : t.preventDefault(), I = 0, L = null, O = 0, m && q !== n.fingers && n.fingers !== d ? x(t) : (E = D = i.pageX, F = $ = i.pageY, z = (new Date).getTime(), n.swipeStatus && (e = k(t, R))), !1 === e ? (R = g, k(t, R), e) : (H.bind(N, b), H.bind(j, w), void 0)
            }

            function b(t) {
                if (t = t.originalEvent, R !== f && R !== g) {
                    var e, h = m ? t.touches[0] : t;
                    D = h.pageX, $ = h.pageY, W = (new Date).getTime(), L = S(), m && (q = t.touches.length), R = p;
                    var h = t,
                        v = L;
                    if (n.allowPageScroll === a) h.preventDefault();
                    else {
                        var y = n.allowPageScroll === l;
                        switch (v) {
                            case i:
                                (n.swipeLeft && y || !y && n.allowPageScroll != u) && h.preventDefault();
                                break;
                            case r:
                                (n.swipeRight && y || !y && n.allowPageScroll != u) && h.preventDefault();
                                break;
                            case s:
                                (n.swipeUp && y || !y && n.allowPageScroll != c) && h.preventDefault();
                                break;
                            case o:
                                (n.swipeDown && y || !y && n.allowPageScroll != c) && h.preventDefault()
                        }
                    }
                    q !== n.fingers && n.fingers !== d && m ? (R = g, k(t, R)) : (I = C(), O = W - z, n.swipeStatus && (e = k(t, R, L, I, O)), n.triggerOnTouchEnd || (h = !(n.maxTimeThreshold ? !(O >= n.maxTimeThreshold) : 1), !0 === T() ? (R = f, e = k(t, R)) : h && (R = g, k(t, R)))), !1 === e && (R = g, k(t, R))
                }
            }

            function w(t) {
                if (t = t.originalEvent, t.preventDefault(), W = (new Date).getTime(), I = C(), L = S(), O = W - z, n.triggerOnTouchEnd || !1 === n.triggerOnTouchEnd && R === p)
                    if (R = f, q !== n.fingers && n.fingers !== d && m || 0 === D) R = g, k(t, R);
                    else {
                        var e = !(n.maxTimeThreshold ? !(O >= n.maxTimeThreshold) : 1);
                        !0 !== T() && null !== T() || e ? (e || !1 === T()) && (R = g, k(t, R)) : k(t, R)
                    } else R === p && (R = g, k(t, R));
                H.unbind(N, b, !1), H.unbind(j, w, !1)
            }

            function x() {
                z = W = $ = D = F = E = q = 0
            }

            function k(t, e) {
                var a = void 0;
                if (n.swipeStatus && (a = n.swipeStatus.call(H, t, e, L || null, I || 0, O || 0, q)), e !== g || !n.click || 1 !== q && m || !isNaN(I) && 0 !== I || (a = n.click.call(H, t, t.target)), e == f) switch (n.swipe && (a = n.swipe.call(H, t, L, I, O, q)), L) {
                    case i:
                        n.swipeLeft && (a = n.swipeLeft.call(H, t, L, I, O, q));
                        break;
                    case r:
                        n.swipeRight && (a = n.swipeRight.call(H, t, L, I, O, q));
                        break;
                    case s:
                        n.swipeUp && (a = n.swipeUp.call(H, t, L, I, O, q));
                        break;
                    case o:
                        n.swipeDown && (a = n.swipeDown.call(H, t, L, I, O, q))
                }
                return (e === g || e === f) && x(t), a
            }

            function T() {
                return null !== n.threshold ? I >= n.threshold : null
            }

            function C() {
                return Math.round(Math.sqrt(Math.pow(D - E, 2) + Math.pow($ - F, 2)))
            }

            function S() {
                var t;
                return t = Math.atan2($ - F, E - D), t = Math.round(180 * t / Math.PI), 0 > t && (t = 360 - Math.abs(t)), 45 >= t && t >= 0 ? i : 360 >= t && t >= 315 ? i : t >= 135 && 225 >= t ? r : t > 45 && 135 > t ? o : s
            }

            function _() {
                H.unbind(M, y), H.unbind(P, x), H.unbind(N, b), H.unbind(j, w)
            }
            var D, $, E, F, A = m || !n.fallbackToMouseEvents,
                M = A ? "touchstart" : "mousedown",
                N = A ? "touchmove" : "mousemove",
                j = A ? "touchend" : "mouseup",
                P = "touchcancel",
                I = 0,
                L = null,
                O = 0,
                H = t(e),
                R = "start",
                q = 0,
                z = $ = D = F = E = 0,
                W = 0;
            try {
                H.bind(M, y), H.bind(P, x)
            } catch (B) {
                t.error("events not supported " + M + "," + P + " on jQuery.swipe")
            }
            this.enable = function() {
                return H.bind(M, y), H.bind(P, x), H
            }, this.disable = function() {
                return _(), H
            }, this.destroy = function() {
                return _(), H.data(v, null), H
            }
        }
        var i = "left",
            r = "right",
            s = "up",
            o = "down",
            a = "none",
            l = "auto",
            u = "horizontal",
            c = "vertical",
            d = "all",
            h = "start",
            p = "move",
            f = "end",
            g = "cancel",
            m = "ontouchstart" in window,
            v = "TouchSwipe";
        t.fn.swipe = function(n) {
            var i = t(this),
                r = i.data(v);
            if (r && "string" == typeof n) {
                if (r[n]) return r[n].apply(this, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + n + " does not exist on jQuery.swipe")
            } else if (!(r || "object" != typeof n && n)) return e.apply(this, arguments);
            return i
        }, t.fn.swipe.defaults = {
            fingers: 1,
            threshold: 75,
            maxTimeThreshold: null,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            click: null,
            triggerOnTouchEnd: !0,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0
        }, t.fn.swipe.phases = {
            PHASE_START: h,
            PHASE_MOVE: p,
            PHASE_END: f,
            PHASE_CANCEL: g
        }, t.fn.swipe.directions = {
            LEFT: i,
            RIGHT: r,
            UP: s,
            DOWN: o
        }, t.fn.swipe.pageScroll = {
            NONE: a,
            HORIZONTAL: u,
            VERTICAL: c,
            AUTO: l
        }, t.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: d
        }
    }(jQuery),
    function(t) {
        function e(t) {
            if (t in a.style) return t;
            var e = ["Moz", "Webkit", "O", "ms"],
                n = t.charAt(0).toUpperCase() + t.substr(1);
            if (t in a.style) return t;
            for (t = 0; t < e.length; ++t) {
                var i = e[t] + n;
                if (i in a.style) return i
            }
        }

        function n(t) {
            return "string" == typeof t && this.parse(t), this
        }

        function i(e, n, i, r) {
            var s = [];
            t.each(e, function(e) {
                e = t.camelCase(e), e = t.transit.propertyMap[e] || t.cssProps[e] || e, e = e.replace(/([A-Z])/g, function(t) {
                    return "-" + t.toLowerCase()
                }), -1 === t.inArray(e, s) && s.push(e)
            }), t.cssEase[i] && (i = t.cssEase[i]);
            var a = "" + o(n) + " " + i;
            0 < parseInt(r, 10) && (a += " " + o(r));
            var l = [];
            return t.each(s, function(t, e) {
                l.push(e + " " + a)
            }), l.join(", ")
        }

        function r(e, n) {
            n || (t.cssNumber[e] = !0), t.transit.propertyMap[e] = l.transform, t.cssHooks[e] = {
                get: function(n) {
                    return t(n).css("transit:transform").get(e)
                },
                set: function(n, i) {
                    var r = t(n).css("transit:transform");
                    r.setFromString(e, i), t(n).css({
                        "transit:transform": r
                    })
                }
            }
        }

        function s(t, e) {
            return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t
        }

        function o(e) {
            return t.fx.speeds[e] && (e = t.fx.speeds[e]), s(e, "ms")
        }
        t.transit = {
            version: "0.9.9",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: !0,
            useTransitionEnd: !1
        };
        var a = document.createElement("div"),
            l = {},
            u = -1 < navigator.userAgent.toLowerCase().indexOf("chrome");
        l.transition = e("transition"), l.transitionDelay = e("transitionDelay"), l.transform = e("transform"), l.transformOrigin = e("transformOrigin"), a.style[l.transform] = "", a.style[l.transform] = "rotateY(90deg)", l.transform3d = "" !== a.style[l.transform];
        var c, d = l.transitionEnd = {
            transition: "transitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            WebkitTransition: "webkitTransitionEnd",
            msTransition: "MSTransitionEnd"
        }[l.transition] || null;
        for (c in l) l.hasOwnProperty(c) && "undefined" == typeof t.support[c] && (t.support[c] = l[c]);
        a = null, t.cssEase = {
            _default: "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }, t.cssHooks["transit:transform"] = {
            get: function(e) {
                return t(e).data("transform") || new n
            },
            set: function(e, i) {
                var r = i;
                r instanceof n || (r = new n(r)), e.style[l.transform] = "WebkitTransform" !== l.transform || u ? r.toString() : r.toString(!0), t(e).data("transform", r)
            }
        }, t.cssHooks.transform = {
            set: t.cssHooks["transit:transform"].set
        }, "1.8" > t.fn.jquery && (t.cssHooks.transformOrigin = {
            get: function(t) {
                return t.style[l.transformOrigin]
            },
            set: function(t, e) {
                t.style[l.transformOrigin] = e
            }
        }, t.cssHooks.transition = {
            get: function(t) {
                return t.style[l.transition]
            },
            set: function(t, e) {
                t.style[l.transition] = e
            }
        }), r("scale"), r("translate"), r("rotate"), r("rotateX"), r("rotateY"), r("rotate3d"), r("perspective"), r("skewX"), r("skewY"), r("x", !0), r("y", !0), n.prototype = {
            setFromString: function(t, e) {
                var i = "string" == typeof e ? e.split(",") : e.constructor === Array ? e : [e];
                i.unshift(t), n.prototype.set.apply(this, i)
            },
            set: function(t) {
                var e = Array.prototype.slice.apply(arguments, [1]);
                this.setter[t] ? this.setter[t].apply(this, e) : this[t] = e.join(",")
            },
            get: function(t) {
                return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0
            },
            setter: {
                rotate: function(t) {
                    this.rotate = s(t, "deg")
                },
                rotateX: function(t) {
                    this.rotateX = s(t, "deg")
                },
                rotateY: function(t) {
                    this.rotateY = s(t, "deg")
                },
                scale: function(t, e) {
                    void 0 === e && (e = t), this.scale = t + "," + e
                },
                skewX: function(t) {
                    this.skewX = s(t, "deg")
                },
                skewY: function(t) {
                    this.skewY = s(t, "deg")
                },
                perspective: function(t) {
                    this.perspective = s(t, "px")
                },
                x: function(t) {
                    this.set("translate", t, null)
                },
                y: function(t) {
                    this.set("translate", null, t)
                },
                translate: function(t, e) {
                    void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== t && void 0 !== t && (this._translateX = s(t, "px")), null !== e && void 0 !== e && (this._translateY = s(e, "px")), this.translate = this._translateX + "," + this._translateY
                }
            },
            getter: {
                x: function() {
                    return this._translateX || 0
                },
                y: function() {
                    return this._translateY || 0
                },
                scale: function() {
                    var t = (this.scale || "1,1").split(",");
                    return t[0] && (t[0] = parseFloat(t[0])), t[1] && (t[1] = parseFloat(t[1])), t[0] === t[1] ? t[0] : t
                },
                rotate3d: function() {
                    for (var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0; 3 >= e; ++e) t[e] && (t[e] = parseFloat(t[e]));
                    return t[3] && (t[3] = s(t[3], "deg")), t
                }
            },
            parse: function(t) {
                var e = this;
                t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, n, i) {
                    e.setFromString(n, i)
                })
            },
            toString: function(t) {
                var e, n = [];
                for (e in this) this.hasOwnProperty(e) && (l.transform3d || "rotateX" !== e && "rotateY" !== e && "perspective" !== e && "transformOrigin" !== e) && "_" !== e[0] && (t && "scale" === e ? n.push(e + "3d(" + this[e] + ",1)") : t && "translate" === e ? n.push(e + "3d(" + this[e] + ",0)") : n.push(e + "(" + this[e] + ")"));
                return n.join(" ")
            }
        }, t.fn.transition = t.fn.transit = function(e, n, r, s) {
            var a = this,
                u = 0,
                c = !0;
            "function" == typeof n && (s = n, n = void 0), "function" == typeof r && (s = r, r = void 0), "undefined" != typeof e.easing && (r = e.easing, delete e.easing), "undefined" != typeof e.duration && (n = e.duration, delete e.duration), "undefined" != typeof e.complete && (s = e.complete, delete e.complete), "undefined" != typeof e.queue && (c = e.queue, delete e.queue), "undefined" != typeof e.delay && (u = e.delay, delete e.delay), "undefined" == typeof n && (n = t.fx.speeds._default), "undefined" == typeof r && (r = t.cssEase._default), n = o(n);
            var h = i(e, n, r, u),
                p = t.transit.enabled && l.transition ? parseInt(n, 10) + parseInt(u, 10) : 0;
            if (0 === p) return n = c, r = function(t) {
                a.css(e), s && s.apply(a), t && t()
            }, !0 === n ? a.queue(r) : n ? a.queue(n, r) : r(), a;
            var f = {};
            return n = c, r = function(n) {
                this.offsetWidth;
                var i = !1,
                    r = function() {
                        i && a.unbind(d, r), p > 0 && a.each(function() {
                            this.style[l.transition] = f[this] || null
                        }), "function" == typeof s && s.apply(a), "function" == typeof n && n()
                    };
                p > 0 && d && t.transit.useTransitionEnd ? (i = !0, a.bind(d, r)) : window.setTimeout(r, p), a.each(function() {
                    p > 0 && (this.style[l.transition] = h), t(this).css(e)
                })
            }, !0 === n ? a.queue(r) : n ? a.queue(n, r) : r(), this
        }, t.transit.getTransitionValue = i
    }(jQuery), (window.jQuery || window.Zepto) && ! function(t) {
        t.fn.Swipe = function(e) {
            return this.each(function() {
                t(this).data("Swipe", new Swipe(t(this)[0], e))
            })
        }
    }(window.jQuery || window.Zepto),
    function(t) {
        var e = {},
            n = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "all",
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 16e3,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {}
            };
        t.fn.bxSlider = function(r) {
            if (0 != this.length) {
                if (this.length > 1) return this.each(function() {
                    t(this).bxSlider(r)
                }), this;
                var s = {},
                    o = this;
                e.el = this;
                var a = t(window).width(),
                    l = t(window).height(),
                    u = function() {
                        s.settings = t.extend({}, n, r), s.children = o.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
                            index: s.settings.startSlide
                        }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" == s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" != s.settings.mode && function() {
                            var t = document.createElement("div"),
                                e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                            for (var n in e)
                                if (void 0 !== t.style[e[n]]) return s.cssPrefix = e[n].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
                            return !1
                        }(), "vertical" == s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), c()
                    },
                    c = function() {
                        if (o.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), s.viewport = o.parent(), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), o.css({
                                width: "horizontal" == s.settings.mode ? 215 * s.children.length + "%" : "auto",
                                position: "relative"
                            }), s.usingCSS && s.settings.easing ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), s.viewport.css({
                                width: "100%",
                                overflow: "hidden",
                                position: "relative"
                            }), s.children.css({
                                "float": "horizontal" == s.settings.mode ? "left" : "none",
                                listStyle: "none",
                                position: "relative"
                            }), s.children.width(p()), "horizontal" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" == s.settings.mode && (s.children.css({
                                position: "absolute",
                                zIndex: 0,
                                display: "none"
                            }), s.children.eq(s.settings.startSlide).css({
                                zIndex: 50,
                                display: "block"
                            })), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && T(), s.settings.infiniteLoop && "fade" != s.settings.mode && !s.settings.ticker) {
                            var e = "vertical" == s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
                                n = s.children.slice(0, e).clone().addClass("bx-clone"),
                                i = s.children.slice(-e).clone().addClass("bx-clone");
                            o.append(n).prepend(i)
                        }
                        s.active.last = s.settings.startSlide == g() - 1, s.settings.video && o.fitVids();
                        var r = o.children();
                        s.settings.ticker || (s.settings.pager && w(), s.settings.controls && x(), s.settings.auto && s.settings.autoControls && k(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el), "visible" == s.settings.preloadImages && (r = s.children.slice(s.settings.startSlide, s.settings.startSlide + f()))), r.imagesLoaded(d)
                    },
                    d = function() {
                        s.loader.remove(), v(), "vertical" == s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(h()), s.settings.onSliderLoad(s.active.index), s.initialized = !0, t(window).bind("resize", R), s.settings.auto && s.settings.autoStart && N(), s.settings.ticker && j(), s.settings.pager && E(s.settings.startSlide), s.settings.controls && M(), s.settings.touchEnabled && !s.settings.ticker && I()
                    },
                    h = function() {
                        var e = 0,
                            n = t();
                        if ("vertical" == s.settings.mode || s.settings.adaptiveHeight)
                            if (s.carousel) {
                                var r = 1 == s.settings.moveSlides ? s.active.index : s.active.index * m();
                                for (n = s.children.eq(r), i = 1; i <= s.settings.maxSlides - 1; i++) n = r + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(r + i))
                            } else n = s.children.eq(s.active.index);
                        else n = s.children;
                        return "vertical" == s.settings.mode ? (n.each(function() {
                            e += t(this).outerHeight()
                        }), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                            return t(this).outerHeight(!1)
                        }).get()), e
                    },
                    p = function() {
                        var t = s.settings.slideWidth,
                            e = s.viewport.width();
                        return 0 == s.settings.slideWidth ? t = e : e > s.maxThreshold ? t = (e - s.settings.slideMargin * (s.settings.maxSlides - 1)) / s.settings.maxSlides : e < s.minThreshold && (t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides), t
                    },
                    f = function() {
                        var t = 1;
                        if ("horizontal" == s.settings.mode)
                            if (s.viewport.width() < s.minThreshold) t = s.settings.minSlides;
                            else if (s.viewport.width() > s.maxThreshold) t = s.settings.maxSlides;
                        else {
                            var e = s.children.first().width();
                            t = Math.floor(s.viewport.width() / e)
                        } else "vertical" == s.settings.mode && (t = s.settings.minSlides);
                        return t
                    },
                    g = function() {
                        var t = 0;
                        if (s.settings.moveSlides > 0)
                            if (s.settings.infiniteLoop) t = s.children.length / m();
                            else
                                for (var e = 0, n = 0; e < s.children.length;) ++t, e = n + f(), n += s.settings.moveSlides <= f() ? s.settings.moveSlides : f();
                        else t = Math.ceil(s.children.length / f());
                        return t
                    },
                    m = function() {
                        return s.settings.moveSlides > 0 && s.settings.moveSlides <= f() ? s.settings.moveSlides : f()
                    },
                    v = function() {
                        if (s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop) {
                            if ("horizontal" == s.settings.mode) {
                                var t = s.children.last(),
                                    e = t.position();
                                y(-(e.left - (s.viewport.width() - t.width())), "reset", 0)
                            } else if ("vertical" == s.settings.mode) {
                                var n = s.children.length - s.settings.minSlides,
                                    e = s.children.eq(n).position();
                                y(-e.top, "reset", 0)
                            }
                        } else {
                            var e = s.children.eq(s.active.index * m()).position();
                            s.active.index == g() - 1 && (s.active.last = !0), void 0 != e && ("horizontal" == s.settings.mode ? y(-e.left, "reset", 0) : "vertical" == s.settings.mode && y(-e.top, "reset", 0))
                        }
                    },
                    y = function(t, e, n, i) {
                        if (s.usingCSS) {
                            var r = "vertical" == s.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                            o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" == e ? (o.css(s.animProp, r), o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                                o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F()
                            })) : "reset" == e ? o.css(s.animProp, r) : "ticker" == e && (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), o.css(s.animProp, r), o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                                o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), y(i.resetValue, "reset", 0), P()
                            }))
                        } else {
                            var a = {};
                            a[s.animProp] = t, "slide" == e ? o.animate(a, n, s.settings.easing, function() {
                                F()
                            }) : "reset" == e ? o.css(s.animProp, t) : "ticker" == e && o.animate(a, speed, "linear", function() {
                                y(i.resetValue, "reset", 0), P()
                            })
                        }
                    },
                    b = function() {
                        var e = "";
                        pagerQty = g();
                        for (var n = 0; pagerQty > n; n++) {
                            var i = "";
                            s.settings.buildPager && t.isFunction(s.settings.buildPager) ? (i = s.settings.buildPager(n), s.pagerEl.addClass("bx-custom-pager")) : (i = n + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + n + '" class="bx-pager-link">' + i + "</a></div>"
                        }
                        s.pagerEl.html(e)
                    },
                    w = function() {
                        s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), b()), s.pagerEl.delegate("a", "click", $)
                    },
                    x = function() {
                        s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click", C), s.controls.prev.bind("click", S), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
                    },
                    k = function() {
                        s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.delegate(".bx-start", "click", _), s.controls.autoEl.delegate(".bx-stop", "click", D), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), A(s.settings.autoStart ? "stop" : "start")
                    },
                    T = function() {
                        s.children.each(function() {
                            var e = t(this).find("img:first").attr("title");
                            void 0 != e && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                        })
                    },
                    C = function(t) {
                        s.settings.auto && o.stopAuto(), o.goToNextSlide(), t.preventDefault()
                    },
                    S = function(t) {
                        s.settings.auto && o.stopAuto(), o.goToPrevSlide(), t.preventDefault()
                    },
                    _ = function(t) {
                        o.startAuto(), t.preventDefault()
                    },
                    D = function(t) {
                        o.stopAuto(), t.preventDefault()
                    },
                    $ = function(e) {
                        s.settings.auto && o.stopAuto();
                        var n = t(e.currentTarget),
                            i = parseInt(n.attr("data-slide-index"));
                        i != s.active.index && o.goToSlide(i), e.preventDefault()
                    },
                    E = function(e) {
                        return "short" == s.settings.pagerType ? (s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + s.children.length), void 0) : (s.pagerEl.find("a").removeClass("active"), s.pagerEl.each(function(n, i) {
                            t(i).find("a").eq(e).addClass("active")
                        }), void 0)
                    },
                    F = function() {
                        if (s.settings.infiniteLoop) {
                            var t = "";
                            0 == s.active.index ? t = s.children.eq(0).position() : s.active.index == g() - 1 && s.carousel ? t = s.children.eq((g() - 1) * m()).position() : s.active.index == s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), "horizontal" == s.settings.mode ? y(-t.left, "reset", 0) : "vertical" == s.settings.mode && y(-t.top, "reset", 0)
                        }
                        s.working = !1, s.settings.onSlideAfter(s.children.eq(s.active.index), s.oldIndex, s.active.index)
                    },
                    A = function(t) {
                        s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                    },
                    M = function() {
                        !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 == s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index == g() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
                    },
                    N = function() {
                        if (s.settings.autoDelay > 0) {
                            setTimeout(o.startAuto, s.settings.autoDelay)
                        } else o.startAuto();
                        s.settings.autoHover && o.hover(function() {
                            s.interval && (o.stopAuto(!0), s.autoPaused = !0)
                        }, function() {
                            s.autoPaused && (o.startAuto(!0), s.autoPaused = null)
                        })
                    },
                    j = function() {
                        var e = 0;
                        if ("next" == s.settings.autoDirection) o.append(s.children.clone().addClass("bx-clone"));
                        else {
                            o.prepend(s.children.clone().addClass("bx-clone"));
                            var n = s.children.first().position();
                            e = "horizontal" == s.settings.mode ? -n.left : -n.top
                        }
                        y(e, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && !s.usingCSS && s.viewport.hover(function() {
                            o.stop()
                        }, function() {
                            var e = 0;
                            s.children.each(function() {
                                e += "horizontal" == s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                            });
                            var n = s.settings.speed / e,
                                i = "horizontal" == s.settings.mode ? "left" : "top",
                                r = n * (e - Math.abs(parseInt(o.css(i))));
                            P(r)
                        }), P()
                    },
                    P = function(t) {
                        speed = t ? t : s.settings.speed;
                        var e = {
                                left: 0,
                                top: 0
                            },
                            n = {
                                left: 0,
                                top: 0
                            };
                        "next" == s.settings.autoDirection ? e = o.find(".bx-clone").first().position() : n = s.children.first().position();
                        var i = "horizontal" == s.settings.mode ? -e.left : -e.top,
                            r = "horizontal" == s.settings.mode ? -n.left : -n.top,
                            a = {
                                resetValue: r
                            };
                        y(i, "ticker", speed, a)
                    },
                    I = function() {
                        s.touch = {
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            }
                        }, s.viewport.bind("touchstart", L)
                    },
                    L = function(t) {
                        if (s.working) t.preventDefault();
                        else {
                            s.touch.originalPos = o.position();
                            var e = t.originalEvent;
                            s.touch.start.x = e.changedTouches[0].pageX, s.touch.start.y = e.changedTouches[0].pageY, s.viewport.bind("touchmove", O), s.viewport.bind("touchend", H)
                        }
                    },
                    O = function(t) {
                        var e = t.originalEvent,
                            n = Math.abs(e.changedTouches[0].pageX - s.touch.start.x),
                            i = Math.abs(e.changedTouches[0].pageY - s.touch.start.y);
                        if (3 * n > i && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * i > n && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != s.settings.mode && s.settings.oneToOneTouch) {
                            var r = 0;
                            if ("horizontal" == s.settings.mode) {
                                var o = e.changedTouches[0].pageX - s.touch.start.x;
                                r = s.touch.originalPos.left + o
                            } else {
                                var o = e.changedTouches[0].pageY - s.touch.start.y;
                                r = s.touch.originalPos.top + o
                            }
                            y(r, "reset", 0)
                        }
                    },
                    H = function(t) {
                        s.viewport.unbind("touchmove", O);
                        var e = t.originalEvent,
                            n = 0;
                        if (s.touch.end.x = e.changedTouches[0].pageX, s.touch.end.y = e.changedTouches[0].pageY, "fade" == s.settings.mode) {
                            var i = Math.abs(s.touch.start.x - s.touch.end.x);
                            i >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())
                        } else {
                            var i = 0;
                            "horizontal" == s.settings.mode ? (i = s.touch.end.x - s.touch.start.x, n = s.touch.originalPos.left) : (i = s.touch.end.y - s.touch.start.y, n = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 == s.active.index && i > 0 || s.active.last && 0 > i) ? y(n, "reset", 200) : Math.abs(i) >= s.settings.swipeThreshold ? (0 > i ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : y(n, "reset", 200)
                        }
                        s.viewport.unbind("touchend", H)
                    },
                    R = function() {
                        var e = t(window).width(),
                            n = t(window).height();
                        (a != e || l != n) && (a = e, l = n, s.children.add(o.find(".bx-clone")).width(p()), s.viewport.css("height", h()), s.active.last && (s.active.index = g() - 1), s.active.index >= g() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (b(), E(s.active.index)), s.settings.ticker || v())
                    };
                return o.goToSlide = function(e, n) {
                    if (!s.working && s.active.index != e)
                        if (s.working = !0, s.oldIndex = s.active.index, s.active.index = 0 > e ? g() - 1 : e >= g() ? 0 : e, s.settings.onSlideBefore(s.children.eq(s.active.index), s.oldIndex, s.active.index), "next" == n ? s.settings.onSlideNext(s.children.eq(s.active.index), s.oldIndex, s.active.index) : "prev" == n && s.settings.onSlidePrev(s.children.eq(s.active.index), s.oldIndex, s.active.index), s.active.last = s.active.index >= g() - 1, s.settings.pager && E(s.active.index), s.settings.controls && M(), "fade" == s.settings.mode) s.settings.adaptiveHeight && s.viewport.height() != h() && s.viewport.animate({
                            height: h()
                        }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
                            zIndex: 0
                        }), s.children.eq(s.active.index).css("zIndex", 51).fadeIn(s.settings.speed, function() {
                            t(this).css("zIndex", 50), F()
                        });
                        else {
                            s.settings.adaptiveHeight && s.viewport.height() != h() && s.viewport.animate({
                                height: h()
                            }, s.settings.adaptiveHeightSpeed);
                            var i = 0,
                                r = {
                                    left: 0,
                                    top: 0
                                };
                            if (!s.settings.infiniteLoop && s.carousel && s.active.last)
                                if ("horizontal" == s.settings.mode) {
                                    var a = s.children.eq(s.children.length - 1);
                                    r = a.position(), i = s.viewport.width() - a.width()
                                } else {
                                    var l = s.children.length - s.settings.minSlides;
                                    r = s.children.eq(l).position()
                                } else if (s.carousel && s.active.last && "prev" == n) {
                                var u = 1 == s.settings.moveSlides ? s.settings.maxSlides - m() : (g() - 1) * m() - (s.children.length - s.settings.maxSlides),
                                    a = o.children(".bx-clone").eq(u);
                                r = a.position()
                            } else if ("next" == n && 0 == s.active.index) r = o.find(".bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1;
                            else if (e >= 0) {
                                var c = e * m();
                                r = s.children.eq(c).position()
                            }
                            var d = "horizontal" == s.settings.mode ? -(r.left - i) : -r.top;
                            y(d, "slide", s.settings.speed)
                        }
                }, o.goToNextSlide = function() {
                    if (s.settings.infiniteLoop || !s.active.last) {
                        var t = parseInt(s.active.index) + 1;
                        o.goToSlide(t, "next")
                    }
                }, o.goToPrevSlide = function() {
                    if (s.settings.infiniteLoop || 0 != s.active.index) {
                        var t = parseInt(s.active.index) - 1;
                        o.goToSlide(t, "prev")
                    }
                }, o.startAuto = function(t) {
                    s.interval || (s.interval = setInterval(function() {
                        "next" == s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
                    }, s.settings.pause), s.settings.autoControls && 1 != t && A("stop"))
                }, o.stopAuto = function(t) {
                    s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && 1 != t && A("start"))
                }, o.getCurrentSlide = function() {
                    return s.active.index
                }, o.getSlideCount = function() {
                    return s.children.length
                }, o.destroySlider = function() {
                    s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.removeAttr("style"), this.removeAttr("style").unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), t(window).unbind("resize", R))
                }, o.reloadSlider = function(t) {
                    void 0 != t && (r = t), o.destroySlider(), u()
                }, u(), this
            }
        }
    }(jQuery),
    function(t, e) {
        var n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        t.fn.imagesLoaded = function(i) {
            function r() {
                var e = t(d),
                    n = t(h);
                a && (h.length ? a.reject(u, e, n) : a.resolve(u)), t.isFunction(i) && i.call(o, u, e, n)
            }

            function s(e, i) {
                e.src === n || -1 !== t.inArray(e, c) || (c.push(e), i ? h.push(e) : d.push(e), t.data(e, "imagesLoaded", {
                    isBroken: i,
                    src: e.src
                }), l && a.notifyWith(t(e), [i, u, t(d), t(h)]), u.length === c.length && (setTimeout(r), u.unbind(".imagesLoaded")))
            }
            var o = this,
                a = t.isFunction(t.Deferred) ? t.Deferred() : 0,
                l = t.isFunction(a.notify),
                u = o.find("img").add(o.filter("img")),
                c = [],
                d = [],
                h = [];
            return t.isPlainObject(i) && t.each(i, function(t, e) {
                "callback" === t ? i = e : a && a[t](e)
            }), u.length ? u.bind("load.imagesLoaded error.imagesLoaded", function(t) {
                s(t.target, "error" === t.type)
            }).each(function(i, r) {
                var o = r.src,
                    a = t.data(r, "imagesLoaded");
                a && a.src === o ? s(r, a.isBroken) : r.complete && r.naturalWidth !== e ? s(r, 0 === r.naturalWidth || 0 === r.naturalHeight) : (r.readyState || r.complete) && (r.src = n, r.src = o)
            }) : r(), a ? a.promise(o) : o
        }
    }(jQuery),
    function(t) {
        t(function() {
            t(".bxslider").data() || {};
            t(".bxslider").bxSlider({
                controls: !0,
                pager: !1,
                auto: !0,
                autoStart: !0,
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 320
            })
        })
    }(jQuery),
    function() {
        $(function() {
            var t;
            return t = function() {
                return $(".flash.notice, .flash.success").hide("slow")
            }, setTimeout(t, 5e3)
        })
    }.call(this),
    function() {
        $(function() {
            var t;
            return Spree.updateVariantUnitPrice = function(t) {
                var e, n, i;
                return n = t.data("price"), e = t.data("pouches"), i = (parseFloat(n.slice(1, n.length)) / e).toFixed(2), i && $(".unit-price").text(i), $(".unit-price + span").text("/Packet")
            }, t = $('#product-variants input[type="radio"]'), t.click(function() {
                return Spree.updateVariantUnitPrice($(this))
            }), $('input[type="radio"], label.dg_radio').addClass("js"), $('input[type="radio"]:checked+label').addClass("active"), $("label.dg_radio").on("click", function() {
                var t;
                $("label").removeClass("active"), t = $(this).attr("for"), $("label[for=" + t + "]").each(function() {
                    return $(this).addClass("active")
                }), $("input[id='" + t + "']").each(function() {
                    return $(this).click()
                })
            }), t.length > 0 ? (t[1].click(), t[4].click(), $(".side1").click()) : void 0
        })
    }.call(this),
    function(t, e, n) {
        function i(e, n) {
            this.element = e, this.$element = t(this.element), this.options = t.extend({}, s, n), this._defaults = s, this._name = r, this.init()
        }
        var r = "scrolly",
            s = {
                bgParallax: !1
            };
        i.prototype.init = function() {
            var e = this;
            this.startPosition = this.$element.position().top, this.offsetTop = this.$element.offset().top, this.height = this.$element.outerHeight(!0), this.velocity = this.$element.attr("data-velocity"), this.bgStart = parseInt(this.$element.attr("data-fit"), 10), t(n).scroll(function() {
                e.didScroll = !0
            }), setInterval(function() {
                e.didScroll && (e.didScroll = !1, e.scrolly())
            }, 10)
        }, i.prototype.scrolly = function() {
            var n = t(e).scrollTop(),
                i = t(e).height(),
                r = this.startPosition;
            this.offsetTop >= n + i ? this.$element.addClass("scrolly-invisible") : r = this.$element.hasClass("scrolly-invisible") ? this.startPosition + (n + (i - this.offsetTop)) * this.velocity : this.startPosition + n * this.velocity, this.bgStart && (r += this.bgStart), this.options.bgParallax === !0 ? this.$element.css({
                backgroundPosition: "50% " + r + "px"
            }) : this.$element.css({
                top: r
            })
        }, t.fn[r] = function(e) {
            return this.each(function() {
                t.data(this, "plugin_" + r) || t.data(this, "plugin_" + r, new i(this, e))
            })
        }
    }(jQuery, window, document), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.2.0", i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            r = i.attr("data-target");
        r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = i.hasClass("alert") ? i : i.parent()), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.button"),
                s = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            s = i.data();
        e += "Text", null == s.resetText && i.data("resetText", i[r]()), i[r](null == s[e] ? this.options[e] : s[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.carousel"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : s.slide;
            r || i.data("bs.carousel", r = new n(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, n.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.to = function(e) {
        var n = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, n) {
        var i = this.$element.find(".item.active"),
            r = n || i[e](),
            s = this.interval,
            o = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            l = this;
        if (!r.length) {
            if (!this.options.wrap) return;
            r = this.$element.find(".item")[a]()
        }
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: o
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: o
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, i.addClass(o), r.addClass(o), i.one("bsTransitionEnd", function() {
                r.removeClass([e, o].join(" ")).addClass("active"), i.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
        var i, r = t(this),
            s = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = t.extend({}, s.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), n.preventDefault()
        }
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !r && s.toggle && "show" == e && (e = !e), r || i.data("bs.collapse", r = new n(this, s)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var r = i.data("bs.collapse");
                    if (r && r.transitioning) return;
                    e.call(i, "hide"), r || i.data("bs.collapse", null)
                }
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                var o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return o.call(this);
                var a = t.camelCase(["scroll", s].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][a])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var i, r = t(this),
            s = r.attr("data-target") || n.preventDefault() || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(s),
            a = o.data("bs.collapse"),
            l = a ? "toggle" : r.data(),
            u = r.attr("data-parent"),
            c = u && t(u);
        a && a.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(r).addClass("collapsed"), r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(o, l)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(r).remove(), t(s).each(function() {
            var i = n(t(this)),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", r))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.2.0", o.prototype.toggle = function(i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var s = n(r),
                o = s.hasClass("open");
            if (e(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                r.trigger("focus"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, o.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = n(i),
                    o = r.hasClass("open");
                if (!o || o && 27 == e.keyCode) return 27 == e.which && r.find(s).trigger("focus"), i.trigger("click");
                var a = " li:not(.divider):visible a",
                    l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var r = t(this),
                s = r.data("bs.modal"),
                o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            s || r.data("bs.modal", s = new n(this, o)), "string" == typeof e ? s[e](i) : o.show && s.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var n = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var n = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s()
        } else e && e()
    }, n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            r = i.attr("href"),
            s = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, s.data(), i.data());
        i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(s, o, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (r || "destroy" != e) && (r || i.data("bs.tooltip", r = new n(this, s)), "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
            var o = r[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(o);
            l && (o = o.replace(a, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var u = this.getPosition(),
                c = r[0].offsetWidth,
                d = r[0].offsetHeight;
            if (l) {
                var h = o,
                    p = this.$element.parent(),
                    f = this.getPosition(p);
                o = "bottom" == o && u.top + u.height + d - f.scroll > f.height ? "top" : "top" == o && u.top - f.scroll - d < 0 ? "bottom" : "right" == o && u.right + c > f.width ? "left" : "left" == o && u.left - c < f.left ? "right" : o, r.removeClass(h).addClass(o)
            }
            var g = this.getCalculatedOffset(o, u, c, d);
            this.applyPlacement(g, o);
            var m = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(150) : m()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            s = i[0].offsetHeight,
            o = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top = e.top + o, e.left = e.left + a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != s && (e.top = e.top + s - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var d = c.left ? 2 * c.left - r + l : 2 * c.top - s + u,
            h = c.left ? "left" : "top",
            p = c.left ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][p], h)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            r = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: i ? t(window).width() : e.outerWidth(),
            height: i ? t(window).height() : e.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : e.offset())
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - o.scroll,
                l = e.top + s - o.scroll + i;
            a < o.top ? r.top = o.top - a : l > o.top + o.height && (r.top = o.top + o.height - l)
        } else {
            var u = e.left - s,
                c = e.left + s + n;
            u < o.left ? r.left = o.left - u : c > o.width && (r.left = o.left + o.width - c)
        }
        return r
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.popover"),
                s = "object" == typeof e && e;
            (r || "destroy" != e) && (r || i.data("bs.popover", r = new n(this, s)), "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        var r = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.scrollspy"),
                s = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, s)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = "offset",
            n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var i = t(this),
                r = i.data("target") || i.attr("href"),
                s = /^#./.test(r) && t(r);
            return s && s.length && s.is(":visible") && [
                [s[e]().top + n, r]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            s = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return o != (t = s[s.length - 1]) && this.activate(t);
        if (o && e <= r[0]) return o != (t = s[0]) && this.activate(t);
        for (t = r.length; t--;) o != s[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.2.0", n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a")[0],
                s = t.Event("show.bs.tab", {
                    relatedTarget: r
                });
            if (e.trigger(s), !s.isDefaultPrevented()) {
                var o = t(i);
                this.activate(e.closest("li"), n), this.activate(o, o.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, n, i) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }
        var s = n.find("> .active"),
            o = i && t.support.transition && s.hasClass("fade");
        o ? s.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.affix"),
                s = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this, s)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                i = this.$target.scrollTop(),
                r = this.$element.offset(),
                s = this.options.offset,
                o = s.top,
                a = s.bottom;
            "object" != typeof s && (a = o = s), "function" == typeof o && (o = s.top(this.$element)), "function" == typeof a && (a = s.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= r.top ? !1 : null != a && r.top + this.$element.height() >= e - a ? "bottom" : null != o && o >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = t.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - a
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function() {
    "use strict";
    var t, e;
    t = jQuery, e = function(e, n) {
        var i, r, s, o = this;
        return this.options = t.extend({
            title: null,
            footer: null,
            remote: null
        }, t.fn.ekkoLightbox.defaults, n || {}), this.$element = t(e), i = "", this.modal_id = this.options.modal_id ? this.options.modal_id : "ekkoLightbox-" + Math.floor(1e3 * Math.random() + 1), s = '<div class="modal-header"' + (this.options.title || this.options.always_show_close ? "" : ' style="display:none"') + '><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' + (this.options.title || "&nbsp;") + "</h4></div>", r = '<div class="modal-footer"' + (this.options.footer ? "" : ' style="display:none"') + ">" + this.options.footer + "</div>", t(document.body).append('<div id="' + this.modal_id + '" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">' + s + '<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>' + r + "</div></div></div>"), this.modal = t("#" + this.modal_id), this.modal_dialog = this.modal.find(".modal-dialog").first(), this.modal_content = this.modal.find(".modal-content").first(), this.modal_body = this.modal.find(".modal-body").first(), this.lightbox_container = this.modal_body.find(".ekko-lightbox-container").first(), this.lightbox_body = this.lightbox_container.find("> div:first-child").first(), this.showLoading(), this.modal_arrows = null, this.border = {
            top: parseFloat(this.modal_dialog.css("border-top-width")) + parseFloat(this.modal_content.css("border-top-width")) + parseFloat(this.modal_body.css("border-top-width")),
            right: parseFloat(this.modal_dialog.css("border-right-width")) + parseFloat(this.modal_content.css("border-right-width")) + parseFloat(this.modal_body.css("border-right-width")),
            bottom: parseFloat(this.modal_dialog.css("border-bottom-width")) + parseFloat(this.modal_content.css("border-bottom-width")) + parseFloat(this.modal_body.css("border-bottom-width")),
            left: parseFloat(this.modal_dialog.css("border-left-width")) + parseFloat(this.modal_content.css("border-left-width")) + parseFloat(this.modal_body.css("border-left-width"))
        }, this.padding = {
            top: parseFloat(this.modal_dialog.css("padding-top")) + parseFloat(this.modal_content.css("padding-top")) + parseFloat(this.modal_body.css("padding-top")),
            right: parseFloat(this.modal_dialog.css("padding-right")) + parseFloat(this.modal_content.css("padding-right")) + parseFloat(this.modal_body.css("padding-right")),
            bottom: parseFloat(this.modal_dialog.css("padding-bottom")) + parseFloat(this.modal_content.css("padding-bottom")) + parseFloat(this.modal_body.css("padding-bottom")),
            left: parseFloat(this.modal_dialog.css("padding-left")) + parseFloat(this.modal_content.css("padding-left")) + parseFloat(this.modal_body.css("padding-left"))
        }, this.modal.on("show.bs.modal", this.options.onShow.bind(this)).on("shown.bs.modal", function() {
            return o.modal_shown(), o.options.onShown.call(o)
        }).on("hide.bs.modal", this.options.onHide.bind(this)).on("hidden.bs.modal", function() {
            return o.gallery && t(document).off("keydown.ekkoLightbox"), o.modal.remove(), o.options.onHidden.call(o)
        }).modal("show", n), this.modal
    }, e.prototype = {
        modal_shown: function() {
            var e, n = this;
            return this.options.remote ? (this.gallery = this.$element.data("gallery"), this.gallery && (this.gallery_items = "document.body" === this.options.gallery_parent_selector || "" === this.options.gallery_parent_selector ? t(document.body).find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]') : this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]'), this.gallery_index = this.gallery_items.index(this.$element), t(document).on("keydown.ekkoLightbox", this.navigate.bind(this)), this.options.directional_arrows && this.gallery_items.length > 1 && (this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="' + this.strip_stops(this.options.left_arrow_class) + '"></a><a href="#" class="' + this.strip_stops(this.options.right_arrow_class) + '"></a></div>'), this.modal_arrows = this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(), this.lightbox_container.find("a" + this.strip_spaces(this.options.left_arrow_class)).on("click", function(t) {
                return t.preventDefault(), n.navigate_left()
            }), this.lightbox_container.find("a" + this.strip_spaces(this.options.right_arrow_class)).on("click", function(t) {
                return t.preventDefault(), n.navigate_right()
            }))), this.options.type ? "image" === this.options.type ? this.preloadImage(this.options.remote, !0) : "youtube" === this.options.type && (e = this.getYoutubeId(this.options.remote)) ? this.showYoutubeVideo(e) : "vimeo" === this.options.type ? this.showVimeoVideo(this.options.remote) : "instagram" === this.options.type ? this.showInstagramVideo(this.options.remote) : this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"') : this.detectRemoteType(this.options.remote)) : this.error("No remote target given")
        },
        strip_stops: function(t) {
            return t.replace(/\./g, "")
        },
        strip_spaces: function(t) {
            return t.replace(/\s/g, "")
        },
        isImage: function(t) {
            return t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSwf: function(t) {
            return t.match(/\.(swf)((\?|#).*)?$/i)
        },
        getYoutubeId: function(t) {
            var e;
            return e = t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/), e && 11 === e[2].length ? e[2] : !1
        },
        getVimeoId: function(t) {
            return t.indexOf("vimeo") > 0 ? t : !1
        },
        getInstagramId: function(t) {
            return t.indexOf("instagram") > 0 ? t : !1
        },
        navigate: function(t) {
            if (t = t || window.event, 39 === t.keyCode || 37 === t.keyCode) {
                if (39 === t.keyCode) return this.navigate_right();
                if (37 === t.keyCode) return this.navigate_left()
            }
        },
        navigate_left: function() {
            var e;
            return this.showLoading(), 1 !== this.gallery_items.length ? (0 === this.gallery_index ? this.gallery_index = this.gallery_items.length - 1 : this.gallery_index--, this.$element = t(this.gallery_items.get(this.gallery_index)), this.updateTitleAndFooter(), e = this.$element.attr("data-remote") || this.$element.attr("href"), this.detectRemoteType(e, this.$element.attr("data-type"))) : void 0
        },
        navigate_right: function() {
            var e, n;
            return this.showLoading(), 1 !== this.gallery_items.length ? (this.gallery_index === this.gallery_items.length - 1 ? this.gallery_index = 0 : this.gallery_index++, this.$element = t(this.gallery_items.get(this.gallery_index)), n = this.$element.attr("data-remote") || this.$element.attr("href"), this.updateTitleAndFooter(), this.detectRemoteType(n, this.$element.attr("data-type")), this.gallery_index + 1 < this.gallery_items.length && (e = t(this.gallery_items.get(this.gallery_index + 1), !1), n = e.attr("data-remote") || e.attr("href"), "image" === e.attr("data-type") || this.isImage(n)) ? this.preloadImage(n, !1) : void 0) : void 0
        },
        detectRemoteType: function(t, e) {
            var n;
            return "image" === e || this.isImage(t) ? (this.options.type = "image", this.preloadImage(t, !0)) : "youtube" === e || (n = this.getYoutubeId(t)) ? (this.options.type = "youtube", this.showYoutubeVideo(n)) : "vimeo" === e || (n = this.getVimeoId(t)) ? (this.options.type = "vimeo", this.showVimeoVideo(n)) : "instagram" === e || (n = this.getInstagramId(t)) ? (this.options.type = "instagram", this.showInstagramVideo(n)) : this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"')
        },
        updateTitleAndFooter: function() {
            var t, e, n, i;
            return n = this.modal_content.find(".modal-header"), e = this.modal_content.find(".modal-footer"), i = this.$element.data("title") || "", t = this.$element.data("footer") || "", i || this.options.always_show_close ? n.css("display", "").find(".modal-title").html(i || "&nbsp;") : n.css("display", "none"), t ? e.css("display", "").html(t) : e.css("display", "none"), this
        },
        showLoading: function() {
            return this.lightbox_body.html('<div class="modal-loading">Loading..</div>'), this
        },
        showYoutubeVideo: function(t) {
            var e, n, i;
            return e = 560 / 315, i = this.$element.data("width") || 560, i = this.checkDimensions(i), n = i / e, this.resize(i), this.lightbox_body.html('<iframe width="' + i + '" height="' + n + '" src="//www.youtube.com/embed/' + t + '?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe>'), this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        showVimeoVideo: function(t) {
            var e, n, i;
            return e = 500 / 281, i = this.$element.data("width") || 560, i = this.checkDimensions(i), n = i / e, this.resize(i), this.lightbox_body.html('<iframe width="' + i + '" height="' + n + '" src="' + t + '?autoplay=1" frameborder="0" allowfullscreen></iframe>'), this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        showInstagramVideo: function(t) {
            var e, n;
            return n = this.$element.data("width") || 612, n = this.checkDimensions(n), e = n, this.resize(n), this.lightbox_body.html('<iframe width="' + n + '" height="' + e + '" src="' + this.addTrailingSlash(t) + 'embed/" frameborder="0" allowfullscreen></iframe>'), this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        error: function(t) {
            return this.lightbox_body.html(t), this
        },
        preloadImage: function(e, n) {
            var i, r = this;
            return i = new Image, (null == n || n === !0) && (i.onload = function() {
                var e;
                return e = t("<img />"), e.attr("src", i.src), e.addClass("img-responsive"), r.lightbox_body.html(e), r.modal_arrows && r.modal_arrows.css("display", "block"), r.resize(i.width)
            }, i.onerror = function() {
                return r.error("Failed to load image: " + e)
            }), i.src = e, i
        },
        resize: function(e) {
            var n;
            return n = e + this.border.left + this.padding.left + this.padding.right + this.border.right, this.modal_dialog.css("width", "auto").css("max-width", n), this.lightbox_container.find("a").css("padding-top", function() {
                return t(this).parent().height() / 2
            }), this
        },
        checkDimensions: function(t) {
            var e, n;
            return n = t + this.border.left + this.padding.left + this.padding.right + this.border.right, e = document.body.clientWidth, n > e && (t = this.modal_body.width()), t
        },
        close: function() {
            return this.modal.modal("hide")
        },
        addTrailingSlash: function(t) {
            return "/" !== t.substr(-1) && (t += "/"), t
        }
    }, t.fn.ekkoLightbox = function(n) {
        return this.each(function() {
            var i;
            return i = t(this), n = t.extend({
                remote: i.attr("data-remote") || i.attr("href"),
                gallery_parent_selector: i.attr("data-parent"),
                type: i.attr("data-type")
            }, n, i.data()), new e(this, n), this
        })
    }, t.fn.ekkoLightbox.defaults = {
        gallery_parent_selector: "*:not(.row)",
        left_arrow_class: ".glyphicon .glyphicon-chevron-left",
        right_arrow_class: ".glyphicon .glyphicon-chevron-right",
        directional_arrows: !0,
        type: null,
        always_show_close: !0,
        onShow: function() {},
        onShown: function() {},
        onHide: function() {},
        onHidden: function() {}
    }
}.call(this), ! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, i) {
            var r, s, o = this;
            if (o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, e) {
                        return '<button type="button" data-role="none">' + (e + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    lazyLoad: "ondemand",
                    onBeforeChange: null,
                    onAfterChange: null,
                    onInit: null,
                    onReInit: null,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    responsive: null,
                    rtl: !1,
                    slide: "div",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 300,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    waitForAnimate: !0
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentSlide: 0,
                    currentLeft: null,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1
                }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.paused = !1, o.positionProp = null, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.windowWidth = 0, o.windowTimer = null, o.options = t.extend({}, o.defaults, i), o.originalSettings = o.options, r = o.options.responsive || null, r && r.length > -1) {
                for (s in r) r.hasOwnProperty(s) && (o.breakpoints.push(r[s].breakpoint), o.breakpointSettings[r[s].breakpoint] = r[s].settings);
                o.breakpoints.sort(function(t, e) {
                    return e - t
                })
            }
            o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.changeSlide = t.proxy(o.changeSlide, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.instanceUid = n++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.init()
        }
        var n = 0;
        return e
    }(), e.prototype.addSlide = function(e, n, i) {
        var r = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (0 > n || n >= r.slideCount) return !1;
        r.unload(), "number" == typeof n ? 0 === n && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : i ? t(e).insertBefore(r.$slides.eq(n)) : t(e).insertAfter(r.$slides.eq(n)) : i === !0 ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(e, n) {
            t(n).attr("index", e)
        }), r.$slidesCache = r.$slides, r.reinit()
    }, e.prototype.animateSlide = function(e, n) {
        var i = {},
            r = this;
        if (1 === r.options.slidesToShow && r.options.adaptiveHeight === !0 && r.options.vertical === !1) {
            var s = r.$slides.eq(r.currentSlide).outerHeight(!0);
            r.$list.animate({
                height: s
            }, r.options.speed)
        }
        r.options.rtl === !0 && r.options.vertical === !1 && (e = -e), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: e
        }, r.options.speed, r.options.easing, n) : r.$slideTrack.animate({
            top: e
        }, r.options.speed, r.options.easing, n) : r.cssTransitions === !1 ? t({
            animStart: r.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(t) {
                r.options.vertical === !1 ? (i[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(i)) : (i[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        }) : (r.applyTransition(), i[r.animType] = r.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(i), n && setTimeout(function() {
            r.disableTransition(), n.call()
        }, r.options.speed))
    }, e.prototype.asNavFor = function(e) {
        var n = this,
            i = null != n.options.asNavFor ? t(n.options.asNavFor).getSlick() : null;
        null != i && i.slideHandler(e, !0)
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            n = {};
        n[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this;
        t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (0 === t.currentSlide - 1 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow = t(e.options.prevArrow), e.$nextArrow = t(e.options.nextArrow), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.appendTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled"))
    }, e.prototype.buildDots = function() {
        var e, n, i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (n = '<ul class="' + i.options.dotsClass + '">', e = 0; e <= i.getDotCount(); e += 1) n += "<li>" + i.options.customPaging.call(this, i, e) + "</li>";
            n += "</ul>", i.$dots = t(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, n) {
            t(n).attr("index", e)
        }), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode === !0 && (e.options.slidesToScroll = 1, 0 === e.options.slidesToShow % 2 && (e.options.slidesToShow = 3)), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.options.accessibility === !0 && e.$list.prop("tabIndex", 0), e.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.checkResponsive = function() {
        var e, n, i = this;
        if (i.originalSettings.responsive && i.originalSettings.responsive.length > -1 && null !== i.originalSettings.responsive) {
            n = null;
            for (e in i.breakpoints) i.breakpoints.hasOwnProperty(e) && t(window).width() < i.breakpoints[e] && (n = i.breakpoints[e]);
            null !== n ? null !== i.activeBreakpoint ? n !== i.activeBreakpoint && (i.activeBreakpoint = n, i.options = t.extend({}, i.options, i.breakpointSettings[n]), i.refresh()) : (i.activeBreakpoint = n, i.options = t.extend({}, i.options, i.breakpointSettings[n]), i.refresh()) : null !== i.activeBreakpoint && (i.activeBreakpoint = null, i.options = t.extend({}, i.options, i.originalSettings), i.refresh())
        }
    }, e.prototype.changeSlide = function(e) {
        var n, i, r, s = this,
            o = t(e.target);
        switch (o.is("a") && e.preventDefault(), r = 0 !== s.slideCount % s.options.slidesToScroll, n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
            case "previous":
                i = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - i);
                break;
            case "next":
                i = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + i);
                break;
            case "index":
                var a = 0 === e.data.index ? 0 : e.data.index || t(e.target).parent().index() * s.options.slidesToScroll;
                s.slideHandler(a);
            default:
                return !1
        }
    }, e.prototype.destroy = function() {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && (e.$prevArrow.remove(), e.$nextArrow.remove()), e.$slides.parent().hasClass("slick-track") && e.$slides.unwrap().unwrap(), e.$slides.removeClass("slick-slide slick-active slick-visible").css("width", ""), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$list.off(".slick"), t(window).off(".slick-" + e.instanceUid), t(document).off(".slick-" + e.instanceUid)
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            n = {};
        n[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }, e.prototype.fadeSlide = function(t, e, n) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(e).css({
            zIndex: 1e3
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, n), i.$slides.eq(t).animate({
            opacity: 0
        }, i.options.speed, i.options.easing)) : (i.applyTransition(e), i.applyTransition(t), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: 1e3
        }), i.$slides.eq(t).css({
            opacity: 0
        }), n && setTimeout(function() {
            i.disableTransition(e), i.disableTransition(t), n.call()
        }, i.options.speed))
    }, e.prototype.filterSlides = function(t) {
        var e = this;
        null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.getCurrent = function() {
        var t = this;
        return t.currentSlide
    }, e.prototype.getDotCount = function() {
        var t, e = this,
            n = 0,
            i = 0,
            r = 0;
        for (t = e.options.infinite === !0 ? e.slideCount + e.options.slidesToShow - e.options.slidesToScroll : e.slideCount; t > n;) r++, i += e.options.slidesToScroll, n = i + e.options.slidesToShow;
        return r
    }, e.prototype.getLeft = function(t) {
        var e, n, i, r = this,
            s = 0;
        return r.slideOffset = 0, n = r.$slides.first().outerHeight(), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = -1 * r.slideWidth * r.options.slidesToShow, s = -1 * n * r.options.slidesToShow), 0 !== r.slideCount % r.options.slidesToScroll && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (r.slideOffset = -1 * r.slideCount % r.options.slidesToShow * r.slideWidth, s = -1 * r.slideCount % r.options.slidesToShow * n)) : 0 !== r.slideCount % r.options.slidesToShow && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (r.slideOffset = r.options.slidesToShow * r.slideWidth - r.slideCount % r.options.slidesToShow * r.slideWidth, s = r.slideCount % r.options.slidesToShow * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = r.options.vertical === !1 ? -1 * t * r.slideWidth + r.slideOffset : -1 * t * n + s, r.options.variableWidth === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = i[0] ? -1 * i[0].offsetLeft : 0, r.options.centerMode === !0 && (i = r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = i[0] ? -1 * i[0].offsetLeft : 0, e += (r.$list.width() - i.outerWidth()) / 2)), e
    }, e.prototype.init = function() {
        var e = this;
        t(e.$slider).hasClass("slick-initialized") || (t(e.$slider).addClass("slick-initialized"), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.checkResponsive()), null !== e.options.onInit && e.options.onInit.call(this, e)
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", e.autoPlayClear).on("mouseleave.slick", e.autoPlay)
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.options.pauseOnHover === !0 && e.options.autoplay === !0 && (e.$list.on("mouseenter.slick", e.autoPlayClear), e.$list.on("mouseleave.slick", e.autoPlay)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.options.slide, e.$slideTrack).on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, function() {
            e.checkResponsive(), e.setPosition()
        }), t(window).on("resize.slick.slick-" + e.instanceUid, function() {
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.setPosition()
            }, 50))
        }), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        37 === t.keyCode ? e.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === t.keyCode && e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    n = t(this).attr("data-lazy");
                e.load(function() {
                    e.animate({
                        opacity: 1
                    }, 200)
                }).css({
                    opacity: 0
                }).attr("src", n).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var n, i, r, s, o = this;
        o.options.centerMode === !0 ? o.options.infinite === !0 ? (r = o.currentSlide + (o.options.slidesToShow / 2 + 1), s = r + o.options.slidesToShow + 2) : (r = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) : (r = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, s = r + o.options.slidesToShow, o.options.fade === !0 && (r > 0 && r--, s <= o.slideCount && s++)), n = o.$slider.find(".slick-slide").slice(r, s), e(n), o.slideCount <= o.options.slidesToShow ? (i = o.$slider.find(".slick-slide"), e(i)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (i = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), e(i)) : 0 === o.currentSlide && (i = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), e(i))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.postSlide = function(t) {
        var e = this;
        null !== e.options.onAfterChange && e.options.onAfterChange.call(this, e, t), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay()
    }, e.prototype.progressiveLazyLoad = function() {
        var e, n, i = this;
        e = t("img[data-lazy]").length, e > 0 && (n = t("img[data-lazy]", i.$slider).first(), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function() {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad()
        }).error(function() {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad()
        }))
    }, e.prototype.refresh = function() {
        var e = this,
            n = e.currentSlide;
        e.destroy(), t.extend(e, e.initials), e.currentSlide = n, e.init()
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.options.focusOnSelect === !0 && t(e.options.slide, e.$slideTrack).on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), null !== e.options.onReInit && e.options.onReInit.call(this, e)
    }, e.prototype.removeSlide = function(t, e) {
        var n = this;
        return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, n.slideCount < 1 || 0 > t || t > n.slideCount - 1 ? !1 : (n.unload(), n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit(), void 0)
    }, e.prototype.setCSS = function(t) {
        var e, n, i = this,
            r = {};
        i.options.rtl === !0 && (t = -t), e = "left" == i.positionProp ? t + "px" : "0px", n = "top" == i.positionProp ? t + "px" : "0px", r[i.positionProp] = t, i.transformsEnabled === !1 ? i.$slideTrack.css(r) : (r = {}, i.cssTransitions === !1 ? (r[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(r)))
    }, e.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? (e.slideWidth = 0, e.$slideTrack.children(".slick-slide").each(function() {
            e.slideWidth += Math.ceil(t(this).outerWidth(!0))
        }), e.$slideTrack.width(Math.ceil(e.slideWidth) + 1)) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var n = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - n)
    }, e.prototype.setFade = function() {
        var e, n = this;
        n.$slides.each(function(i, r) {
            e = -1 * n.slideWidth * i, t(r).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade()
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = null !== t.animType && t.animType !== !1
    }, e.prototype.setSlideClasses = function(t) {
        var e, n, i, r, s = this;
        s.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), n = s.$slider.find(".slick-slide"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active") : (i = s.options.slidesToShow + t, n.slice(i - e + 1, i + e + 2).addClass("slick-active")), 0 === t ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active") : n.length <= s.options.slidesToShow ? n.addClass("slick-active") : (r = s.slideCount % s.options.slidesToShow, i = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - r), i + r).addClass("slick-active") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, n, i, r = this;
        if ((r.options.fade === !0 || r.options.vertical === !0) && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (n = null, r.slideCount > r.options.slidesToShow)) {
            for (i = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - i; e -= 1) n = e - 1, t(r.$slides[n]).clone(!0).attr("id", "").attr("index", n - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
            for (e = 0; i > e; e += 1) n = e, t(r.$slides[n]).clone(!0).attr("id", "").attr("index", n + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
            r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.selectHandler = function(e) {
        var n = this,
            i = parseInt(t(e.target).parents(".slick-slide").attr("index"));
        i || (i = 0), n.slideCount <= n.options.slidesToShow || n.slideHandler(i)
    }, e.prototype.slideHandler = function(t, e) {
        var n, i, r, s, o, a = null,
            l = this;
        return e = e || !1, l.animating === !0 && l.options.waitForAnimate === !0 ? !1 : (e === !1 && l.asNavFor(t), n = t, a = l.getLeft(n), s = l.getLeft(l.currentSlide), o = 0 !== l.slideCount % l.options.slidesToScroll ? l.options.slidesToScroll : 0, l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > t || t > l.slideCount - l.options.slidesToShow + o) ? (l.options.fade === !1 && (n = l.currentSlide, l.animateSlide(s, function() {
            l.postSlide(n)
        })), !1) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? (l.options.fade === !1 && (n = l.currentSlide, l.animateSlide(s, function() {
            l.postSlide(n)
        })), !1) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), i = 0 > n ? 0 !== l.slideCount % l.options.slidesToScroll ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? 0 !== l.slideCount % l.options.slidesToScroll ? 0 : n - l.slideCount : n, l.animating = !0, null !== l.options.onBeforeChange && t !== l.currentSlide && l.options.onBeforeChange.call(this, l, l.currentSlide, i), r = l.currentSlide, l.currentSlide = i, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (l.fadeSlide(r, i, function() {
            l.postSlide(i)
        }), !1) : (l.animateSlide(a, function() {
            l.postSlide(i)
        }), void 0)))
    }, e.prototype.startLoad = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, n, i, r = this;
        return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(e, t), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? "left" : 360 >= i && i >= 315 ? "left" : i >= 135 && 225 >= i ? "right" : "vertical"
    }, e.prototype.swipeEnd = function(e) {
        var n, i, r = this;
        if (r.dragging = !1, void 0 === r.touchObject.curX) return !1;
        if (r.touchObject.swipeLength >= r.touchObject.minSwipe) switch (t(e.target).on("click.slick", function(e) {
            e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.slick")
        }), r.options.swipeToSlide === !0 ? (i = Math.round(r.touchObject.swipeLength / r.slideWidth), n = i) : n = r.options.slidesToScroll, r.swipeDirection()) {
            case "left":
                r.slideHandler(r.currentSlide + n), r.touchObject = {};
                break;
            case "right":
                r.slideHandler(r.currentSlide - n), r.touchObject = {}
        } else r.touchObject.startX !== r.touchObject.curX && (r.slideHandler(r.currentSlide), r.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, n, i, r, s = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, e = s.getLeft(s.currentSlide), !s.dragging || r && 1 !== r.length ? !1 : (s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), i = s.touchObject.curX > s.touchObject.startX ? 1 : -1, s.swipeLeft = s.options.vertical === !1 ? e + s.touchObject.swipeLength * i : e + s.touchObject.swipeLength * (s.$list.height() / s.listWidth) * i, s.options.fade === !0 || s.options.touchMove === !1 ? !1 : s.animating === !0 ? (s.swipeLeft = null, !1) : (s.setCSS(s.swipeLeft), void 0)) : void 0)
    }, e.prototype.swipeStart = function(t) {
        var e, n = this;
        return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, n.dragging = !0, void 0)
    }, e.prototype.unfilterSlides = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && (e.$prevArrow.remove(), e.$nextArrow.remove()), e.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
    }, e.prototype.updateArrows = function() {
        var t = this;
        t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, t.fn.slick = function(t) {
        var n = this;
        return n.each(function(n, i) {
            i.slick = new e(i, t)
        })
    }, t.fn.slickAdd = function(t, e, n) {
        var i = this;
        return i.each(function(i, r) {
            r.slick.addSlide(t, e, n)
        })
    }, t.fn.slickCurrentSlide = function() {
        var t = this;
        return t.get(0).slick.getCurrent()
    }, t.fn.slickFilter = function(t) {
        var e = this;
        return e.each(function(e, n) {
            n.slick.filterSlides(t)
        })
    }, t.fn.slickGoTo = function(t) {
        var e = this;
        return e.each(function(e, n) {
            n.slick.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            })
        })
    }, t.fn.slickNext = function() {
        var t = this;
        return t.each(function(t, e) {
            e.slick.changeSlide({
                data: {
                    message: "next"
                }
            })
        })
    }, t.fn.slickPause = function() {
        var t = this;
        return t.each(function(t, e) {
            e.slick.autoPlayClear(), e.slick.paused = !0
        })
    }, t.fn.slickPlay = function() {
        var t = this;
        return t.each(function(t, e) {
            e.slick.paused = !1, e.slick.autoPlay()
        })
    }, t.fn.slickPrev = function() {
        var t = this;
        return t.each(function(t, e) {
            e.slick.changeSlide({
                data: {
                    message: "previous"
                }
            })
        })
    }, t.fn.slickRemove = function(t, e) {
        var n = this;
        return n.each(function(n, i) {
            i.slick.removeSlide(t, e)
        })
    }, t.fn.slickGetOption = function(t) {
        var e = this;
        return e.get(0).slick.options[t]
    }, t.fn.slickSetOption = function(t, e, n) {
        var i = this;
        return i.each(function(i, r) {
            r.slick.options[t] = e, n === !0 && (r.slick.unload(), r.slick.reinit())
        })
    }, t.fn.slickUnfilter = function() {
        var t = this;
        return t.each(function(t, e) {
            e.slick.unfilterSlides()
        })
    }, t.fn.unslick = function() {
        var t = this;
        return t.each(function(t, e) {
            e.slick && e.slick.destroy()
        })
    }, t.fn.getSlick = function() {
        var t = null,
            e = this;
        return e.each(function(e, n) {
            t = n.slick
        }), t
    }
});