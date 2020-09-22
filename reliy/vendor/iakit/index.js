/*!
 * iakit.js v2.2.0
 * (c) 2016-2017 xiaoyann<0x0886@gmail.com>
 * Released under the MIT License.
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.iakit = t())
    : (e.iakit = t());
})(this, function () {
  return (function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;
      var o = (n[i] = { i: i, l: !1, exports: {} });
      return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, i) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 2))
    );
  })([
    function (e, t, n) {
      "use strict";
      function i(e) {
        return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
      }
      function o(e) {
        return f.projectName + "-" + e;
      }
      function r(e, t) {
        var n = [];
        e.className && (n = e.className.split(/\s+/)),
          t.split(/\s+/).forEach(function (e) {
            (e = o(e)), -1 === n.indexOf(e) && n.push(e);
          }),
          (e.className = n.join(" "));
      }
      function a(e, t) {
        var n = e.className;
        n &&
          (t.split(/\s+/).forEach(function (e) {
            e = o(e);
            var t = new RegExp("(^|\\s+)" + e + "(\\s+|$)", "g");
            n = n.replace(t, " ");
          }),
          (e.className = n.trim()));
      }
      function c(e) {
        r(e, "hidden");
      }
      function s(e) {
        a(e, "hidden");
      }
      function u(e) {
        return function (t) {
          r(t, e),
            setTimeout(function () {
              return a(t, e);
            }, 0);
        };
      }
      function l(e) {
        return function (t, n) {
          r(t, e),
            setTimeout(function () {
              a(t, e), n && n();
            }, f.duration);
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fastclick = t.bottomLeave = t.bottomEnter = t.scaleLeave = t.scaleEnter = t.fadeLeave = t.fadeEnter = void 0),
        (t.getType = i),
        (t.classPrefix = o),
        (t.addClass = r),
        (t.removeClass = a),
        (t.hideNode = c),
        (t.showNode = s);
      var d = n(4),
        f = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(d);
      (t.fadeEnter = u("fade-enter")),
        (t.fadeLeave = l("fade-leave")),
        (t.scaleEnter = u("scale-enter")),
        (t.scaleLeave = l("scale-leave")),
        (t.bottomEnter = u("bottom-enter")),
        (t.bottomLeave = l("bottom-leave")),
        (t.fastclick = (function () {
          function e(e) {
            var t = e.touches;
            1 === t.length && ((n = t[0].pageX), (i = t[0].pageY));
          }
          function t(e) {
            var t = e.touches[0].pageX,
              r = e.touches[0].pageY;
            (Math.abs(t - n) > 10 || Math.abs(r - i) > 10) && (o = !0);
          }
          var n = 0,
            i = 0,
            o = !1;
          return function (r, a) {
            r.addEventListener("touchstart", e, !1),
              r.addEventListener("touchmove", t, !1),
              r.addEventListener(
                "touchend",
                function (e) {
                  !1 === o
                    ? (a(e), e.preventDefault())
                    : ((o = !1), (n = i = 0));
                },
                !1
              ),
              navigator.userAgent.toLowerCase().match("mobile") ||
                r.addEventListener("click", a, !1);
          };
        })());
    },
    function (e, t, n) {
      "use strict";
      function i(e) {
        f.appendChild(e);
      }
      function o() {
        (l += 1), u.showNode(f);
      }
      function r() {
        0 === (l -= 1) && u.hideNode(f);
      }
      function a() {
        (d += 1), u.showNode(h), o(), u.fadeEnter(h);
      }
      function c() {
        0 === (d -= 1) &&
          u.fadeLeave(h, function () {
            u.hideNode(h), r();
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mask = void 0),
        (t.append = i),
        (t.show = o),
        (t.hide = r),
        (t.showWithMask = a),
        (t.hideWithMask = c);
      var s = n(0),
        u = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(s);
      n(5);
      var l = 0,
        d = 0,
        f = document.createElement("div");
      u.addClass(f, "container");
      var h = document.createElement("div");
      u.addClass(h, "mask"),
        i(h),
        u.hideNode(f),
        u.hideNode(h),
        document.body.appendChild(f);
      var p = (t.mask = {
        el: h,
        callbacks: [],
        onclick: function (e) {
          this.callbacks.push(e);
        },
        offclick: function (e) {
          this.callbacks = this.callbacks.filter(function (t) {
            return t !== e;
          });
        },
      });
      u.fastclick(p.el, function (e) {
        p.callbacks.forEach(function (t) {
          return t(e);
        });
      });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(3);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return i[e];
            },
          });
      });
      var o = n(7);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return o[e];
            },
          });
      });
      var r = n(9);
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return r[e];
            },
          });
      });
      var a = n(11);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
              return a[e];
            },
          });
      });
      t.version = "2.2.0";
    },
    function (e, t, n) {
      "use strict";
      function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e) {
        var t = document.createElement("h3");
        return (t.innerHTML = e), h.addClass(t, "alert-title"), t;
      }
      function a(e) {
        var t = document.createElement("div");
        return (t.innerHTML = e), h.addClass(t, "alert-content"), t;
      }
      function c(e, t) {
        var n = s(e),
          i = document.createElement("div");
        return (
          h.addClass(i, "alert-btns"),
          2 === n.length && h.addClass(i, "alert-separate"),
          n.forEach(function (e, n) {
            var o = document.createElement("div");
            (o.innerHTML = e.text),
              h.addClass(o, "alert-btn bd-1px"),
              o.setAttribute(m, n),
              i.appendChild(o),
              (t[n] = e.onClick);
          }),
          i
        );
      }
      function s(e) {
        var t = h.getType(e);
        return "function" === t
          ? [{ text: b.btnText, onClick: e }]
          : "array" === t
          ? e
          : [{ text: b.btnText }];
      }
      function u() {
        setTimeout(function () {
          if (!w && $.length > 0) {
            var e = $.shift();
            (w = new y(v)), w.render.apply(w, e);
          }
        }, 20);
      }
      function l(e, t, n) {
        $.push(arguments), u();
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var d = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
      t.alert = l;
      var f = n(0),
        h = i(f),
        p = n(1),
        v = i(p);
      n(6);
      var b = { zIndex: 1001, btnText: "确定" },
        m = "btn-idx",
        y = (function () {
          function e(t) {
            var n = this;
            o(this, e),
              (this.handlers = []),
              (this.$container = t),
              (this.$wrapper = document.createElement("div")),
              (this.$el = document.createElement("div")),
              this.$wrapper.appendChild(this.$el),
              (this.$wrapper.style.zIndex = b.zIndex),
              h.addClass(this.$wrapper, "alert"),
              h.addClass(this.$el, "alert-main"),
              h.fastclick(this.$wrapper, function (e) {
                var t = e.srcElement,
                  i = t.getAttribute(m);
                if (null !== i) {
                  var o = n.handlers[i];
                  "function" == typeof o && o(e), n.hide();
                }
              });
          }
          return (
            d(e, [
              {
                key: "show",
                value: function () {
                  this.$container.append(this.$wrapper),
                    h.showNode(this.$wrapper),
                    this.$container.showWithMask(),
                    h.scaleEnter(this.$el);
                },
              },
              {
                key: "hide",
                value: function () {
                  var e = this;
                  this.$container.hideWithMask(),
                    h.scaleLeave(this.$el, function () {
                      return e.destroy();
                    });
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.$wrapper.parentNode.removeChild(this.$wrapper),
                    (this.$wrapper = null),
                    (this.$el = null),
                    (this.handlers = []);
                },
              },
              {
                key: "render",
                value: function (e, t, n) {
                  var i = h.getType(t);
                  "undefined" === i
                    ? ((t = e), (e = void 0))
                    : ("function" !== i && "array" !== i) ||
                      ((n = t), (t = e), (e = void 0)),
                    e || (e = "提示"),
                    this.$el.appendChild(r(e)),
                    this.$el.appendChild(a(t)),
                    this.$el.appendChild(c(n, this.handlers)),
                    this.show();
                },
              },
            ]),
            e
          );
        })(),
        $ = [],
        w = null,
        k = y.prototype.destroy;
      (y.prototype.destroy = function () {
        k.call(this), (w = null), u();
      }),
        (l.config = function (e) {
          Object.keys(b).forEach(function (t) {
            void 0 !== e[t] && (b[t] = e[t]);
          });
        });
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      (t.projectName = "iakit"), (t.duration = 300);
    },
    function (e, t) {},
    function (e, t) {},
    function (e, t, n) {
      "use strict";
      function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.loading = void 0);
      var o = n(0),
        r = i(o),
        a = n(1),
        c = i(a);
      n(8),
        (t.loading = {
          $el: null,
          $container: null,
          inited: !1,
          init: function () {
            if (this.inited) return this;
            (this.$container = c),
              (this.$el = document.createElement("div")),
              r.addClass(this.$el, "loading");
            var e = document.createElement("div");
            r.addClass(e, "loading-spinner"),
              this.$el.appendChild(e),
              this.$container.append(this.$el),
              r.hideNode(this.$el),
              (this.inited = !0);
          },
          show: function () {
            this.$container.show(), r.showNode(this.$el);
          },
          hide: function () {
            this.$container.hide(), r.hideNode(this.$el);
          },
        }).init();
    },
    function (e, t) {},
    function (e, t, n) {
      "use strict";
      function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.toast = void 0);
      var o = n(0),
        r = i(o),
        a = n(1),
        c = i(a);
      n(10),
        (t.toast = {
          $el: null,
          $container: null,
          inited: !1,
          init: function () {
            if (!this.inited) {
              var e = document.createElement("div");
              r.addClass(e, "toast");
              var t = document.createElement("div");
              r.addClass(t, "toast-main"),
                e.appendChild(t),
                c.append(e),
                r.hideNode(e),
                (this.$el = t),
                (this.$wrapper = e),
                (this.$container = c),
                (this.inited = !0);
            }
          },
          hide: function (e) {
            var t = this;
            r.scaleLeave(this.$el, function () {
              (t.$el.innerHTML = ""),
                r.hideNode(t.$wrapper),
                t.$container.hide(),
                e && e();
            });
          },
          show: function (e, t, n, i) {
            var o = this;
            (this.$el.innerHTML = e),
              (this.$wrapper.style.top = i),
              r.showNode(this.$wrapper),
              "function" == typeof t && ((n = t), (t = void 0)),
              setTimeout(function () {
                o.hide(n);
              }, t || 1500),
              this.$container.show(),
              r.scaleEnter(this.$el);
          },
          showTop: function (e, t, n) {
            this.show(e, t, n, "10%");
          },
          showCenter: function (e, t, n) {
            this.show(e, t, n, "50%");
          },
          showBottom: function (e, t, n) {
            this.show(e, t, n, "90%");
          },
        }).init();
    },
    function (e, t) {},
    function (e, t, n) {
      "use strict";
      function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e) {
        var t = document.createElement("div");
        return (t.innerHTML = e), d.addClass(t, "actionsheet-title"), t;
      }
      function a(e, t) {
        var n = document.createElement("div");
        return (
          d.addClass(n, "actionsheet-btns"),
          e.forEach(function (e, i) {
            var o = document.createElement("div"),
              r = ["actionsheet-btn bd-1px"];
            o.setAttribute(p, i),
              (o.innerHTML = "string" == typeof e ? e : e.text),
              !0 === e.disable
                ? r.push("actionsheet-disable")
                : t === i && r.push("actionsheet-destructive"),
              d.addClass(o, r.join(" ")),
              n.appendChild(o);
          }),
          n
        );
      }
      function c() {
        var e = document.createElement("div");
        return (
          (e.innerHTML = "取消"),
          e.setAttribute(p, v),
          d.addClass(e, "actionsheet-btn actionsheet-cancel"),
          e
        );
      }
      function s(e) {
        m.render(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
      t.actionsheet = s;
      var l = n(0),
        d = i(l),
        f = n(1),
        h = i(f);
      n(12);
      var p = "btn-index",
        v = "cancel",
        b = (function () {
          function e(t) {
            var n = this;
            o(this, e);
            var i = document.createElement("div");
            d.addClass(i, "actionsheet"),
              d.fastclick(i, function (e) {
                var t = n.config,
                  i = e.srcElement,
                  o = i.getAttribute(p);
                if (null !== o)
                  if (o === v) n.cancel();
                  else {
                    var r = t.buttons[o];
                    if (!0 === r.disable) return;
                    "function" == typeof r.onClick
                      ? r.onClick(o, r.text)
                      : "function" == typeof t.onClick && t.onClick(o, r.text),
                      n.hide(!1);
                  }
              }),
              t.append(i),
              (this.showed = !1),
              (this.$el = i),
              (this.$container = t),
              (this.cancel = this.cancel.bind(this));
          }
          return (
            u(e, [
              {
                key: "hide",
                value: function (e) {
                  var t = this;
                  e &&
                    "function" == typeof this.config.onCancel &&
                    this.config.onCancel(),
                    this.$container.hideWithMask(),
                    d.bottomLeave(this.$el, function () {
                      d.hideNode(t.$el),
                        (t.$el.innerHTML = ""),
                        (t.config = {}),
                        (t.showed = !1),
                        t.$container.mask.offclick(t.cancel);
                    });
                },
              },
              {
                key: "show",
                value: function () {
                  d.showNode(this.$el),
                    this.$container.showWithMask(),
                    d.bottomEnter(this.$el),
                    this.$container.mask.onclick(this.cancel);
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.hide(!0);
                },
              },
              {
                key: "render",
                value: function (e) {
                  if (!this.showed) {
                    var t = {};
                    for (var n in e) t[n] = e[n];
                    (t.buttons = t.options.map(function (e) {
                      return "string" == typeof e
                        ? { text: e, disable: !1, onClick: void 0 }
                        : e;
                    })),
                      (t.options = void 0),
                      (this.config = t),
                      t.title && this.$el.appendChild(r(t.title)),
                      t.buttons.length > 0 &&
                        this.$el.appendChild(a(t.buttons, t.destructiveIndex)),
                      this.$el.appendChild(c()),
                      this.show();
                  }
                },
              },
            ]),
            e
          );
        })(),
        m = new b(h);
    },
    function (e, t) {},
  ]);
});
