function viewport() {
  var e = window,
    a = "inner";
  return (
    "innerWidth" in window ||
      ((a = "client"), (e = document.documentElement || document.body)),
    {
      width: e[a + "Width"],
      height: e[a + "Height"],
    }
  );
}
!(function () {
  "use strict";
  angular.module("app", ["ui.router", "ngFlatDatepicker", "ngSanitize"]);
})(window),
  (function () {
    "use strict";
  })(window),
  (function () {
    "use strict";
    angular.module("app").config([
      "$stateProvider",
      "$urlRouterProvider",
      function (e, a) {
        a.otherwise("/home"),
          e
            .state("home", {
              url: "/home",
              templateUrl: "/api/pg/trading-main",
            })
            .state("show", {
              url: "/show/:page",
              templateUrl: function (e) {
                return "/api/pg/" + e.page;
              },
            })
            .state("show_add", {
              url: "/show/:page/:add",
              templateUrl: function (e) {
                return "/api/pg/" + e.page;
              },
            })
            .state("show_ng", {
              url: "/show/:page/:add/:ng",
              templateUrl: function (e) {
                return "/api/pg/" + e.page;
              },
            })
            .state("swag", {
              url: "/sw/:page",
              templateUrl: function (e) {
                return "/api/ag/" + e.page;
              },
            })
            .state("listen", {
              url: "/listen/:page/:proc/:id/:uid",
              templateUrl: function (e) {
                return "/api/pg/" + e.page;
              },
            });
      },
    ]);
  })(window),
  (function () {
    "use strict";
    var e = function () {
      var e = {},
        a = [
          {
            name: "amex",
            pattern: /^3[47]/,
            valid_length: [15],
          },
          {
            name: "diners_club_carte_blanche",
            pattern: /^30[0-5]/,
            valid_length: [14],
          },
          {
            name: "diners_club_international",
            pattern: /^36/,
            valid_length: [14],
          },
          {
            name: "jcb",
            pattern: /^35(2[89]|[3-8][0-9])/,
            valid_length: [16],
          },
          {
            name: "laser",
            pattern: /^(6304|670[69]|6771)/,
            valid_length: [16, 17, 18, 19],
          },
          {
            name: "visa_electron",
            pattern: /^(4026|417500|4508|4844|491(3|7))/,
            valid_length: [16],
          },
          {
            name: "visa",
            pattern: /^4/,
            valid_length: [16],
          },
          {
            name: "mastercard",
            pattern: /^5[1-5]/,
            valid_length: [16],
          },
          {
            name: "maestro",
            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
            valid_length: [12, 13, 14, 15, 16, 17, 18, 19],
          },
          {
            name: "discover",
            pattern:
              /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
            valid_length: [16],
          },
        ];
      return (
        (e.CardTypes = a),
        (e.CheckCardNumber = function (t, n) {
          var o = "unknow",
            i = !1,
            r = [16];
          return (
            (t = e.normalize(t)),
            n
              ? $.each(n, function (e, n) {
                  $.each(a, function (e, a) {
                    a.name == n &&
                      t.match(a.pattern) &&
                      ((i = $.inArray(t.length, a.valid_length) != -1),
                      (o = a.name),
                      (r = a.valid_length));
                  });
                })
              : $.each(a, function (e, a) {
                  t.match(a.pattern) &&
                    ((i = $.inArray(t.length, a.valid_length) != -1),
                    (o = a.name),
                    (r = a.valid_length));
                }),
            {
              type: o,
              valid_length: i,
              valid_card_len: r,
            }
          );
        }),
        (e.normalize = function (e) {
          return e.replace(/[ -]/g, "");
        }),
        e
      );
    };
    (e.$inject = []), angular.module("app").factory("Ayden", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      var d = {};
      return (
        (d.cascadeCardType = function (e) {
          if (!window.is_casade_debug)
            switch (e) {
              case "visa":
                break;
              case "mastercard":
                break;
              case "usa_card":
            }
        }),
        (d.execDefaultTriggersAuto = function (e, a, t, n) {
          ("US" !== User.get("country") && "CA" !== User.get("country")) ||
            d.cascadeCardType("usa_card");
        }),
        (d.payStackConfig = function () {
          var e = ["FRAUD", "VLOAD"];
          "US" === Cc.get("GEO") || "CA" === Cc.get("GEO");
          var a = Settings.get("cascade");
          return (
            a && (d.paymant_stack = a.split(",")),
            User.get("cascade") && (e = User.get("cascade").split(",")),
            setTimeout(function () {
              d.asyncPayStackConfig();
            }, 700),
            e
          );
        }),
        (d.asyncPayStackConfig = function () {
          o.card && o.card.card_type && d.cascadeCardType(o.card.card_type);
        }),
        (d.paymant_stack = d.payStackConfig()),
        (d.setStack = function (e) {
          d.paymant_stack = e;
        }),
        (window.debugSetCascade = function (e) {
          (window.is_casade_debug = !0), d.setStack(e);
        }),
        (d.current_calls = ""),
        (d.payment_calls = {
          PFS: function () {
            d.WorkerPFS();
          },
          ORANGE: function () {
            d.WorkerOrange();
          },
          ORANGE_NOT3D: function () {
            d.WorkerOrangeNot3d();
          },
          CONCEPT: function () {
            d.WorkerConcept();
          },
          ZOOM: function () {
            d.WorkerZoom();
          },
          ENTROPAY: function () {
            d.WorkerEntropay();
          },
          UNIVERSE: function () {
            d.WorkerUniverse();
          },
          EZPAY: function () {
            d.WorkerEzpay();
          },
          FRAUD: function () {
            d.WorkerFraud();
          },
          SHAPE: function () {
            d.WorkerShape();
          },
          VLOAD: function () {
            d.WorkerVload();
          },
          SWISH: function () {
            d.WorkerSwish();
          },
          AGNI: function () {
            d.WorkerAgni();
          },
          FINITY: function () {
            d.WorkerFinity();
          },
        }),
        (d.IteratorTimeout = 5e3),
        (d.Iterator = 2),
        (d.whait = !1),
        (d.alt = {
          uid: "-1",
          id: "-1",
          type: "alert",
          stop: !1,
        }),
        (d.config = {
          orange_no_cascade: [
            "Not sufficient funds",
            "Incorrect PIN",
            "No such card",
            "Your card is disabled",
            "Expired card",
          ],
          concept_redirect: !0,
        }),
        (d.IsAllowCascade = function () {
          return !0;
        }),
        (d.countryAllowPFS = function () {
          var e = [
            "GB",
            "ES",
            "DE",
            "IT",
            "NL",
            "SE",
            "FR",
            "CZ",
            "LU",
            "AT",
            "BE",
            "NO",
          ];
          return $.inArray(Cc.get("GEO"), e) == -1;
        }),
        (d.runCascade = function (e) {
          d.setItemCascade(e);
          var a = d.getItemCascade(),
            t = !1;
          return (
            $.each(d.paymant_stack, function (e, n) {
              $.inArray(n, a) == -1 &&
                0 == t &&
                ((t = !0), d.payment_calls[n](), (d.current_calls = n));
            }),
            t
          );
        }),
        (d.getNextCascade = function () {
          var e = d.getItemCascade(),
            a = !1,
            t = "none";
          return (
            $.each(d.paymant_stack, function (n, o) {
              $.inArray(o, e) == -1 && 0 == a && ((a = !0), (t = o));
            }),
            t
          );
        }),
        (d.ListenCallbackOrange = function () {
          var n = "ORANGE",
            o = d.alt.uid,
            i = d.alt.id,
            r = d.alt.stop;
          e.post("/api/card/listen/orange", {
            transaction_id: o,
            id: i,
          }).success(function (e, o, i, s) {
            if (1 == e["return"]) {
              var l = d.getPath(e, "data.data.charge.attributes.status");
              if (l) {
                if ("successful" == l) {
                  var c = Lang.get("cascade_card.founded"),
                    u = Lang.get("cascade_card.msg.orange");
                  d.displayAlert(
                    "Card",
                    '<div class="ui 1b71fa inverted header">' +
                      c +
                      '</div><div class="em2">' +
                      u +
                      "</div>"
                  ),
                    d.HideAllToast(),
                    a.$broadcast("user:update", {});
                } else {
                  var p = d.runCascade(n);
                  if (p) return !0;
                  var m = Lang.get("orange.pay_fail");
                  d.displayAlert(
                    "Card",
                    '<span class="ui red inverted header">' + m + "</span>"
                  ),
                    d.HideAllToast();
                }
                return !1;
              }
              if ("transaction.succeeded" == e.data.event) {
                var f = "orange";
                _.isUndefined(e.data.data.transaction.description) ||
                  ("ORANGEPAY SERVICES, BAKU AZ" ==
                    e.data.data.transaction.description &&
                    (f = "orange_not_3d"));
                var c = Lang.get("cascade_card.founded"),
                  u = Lang.get("cascade_card.msg." + f);
                "alert" == d.alt.type &&
                  (d.displayAlert(
                    "Card",
                    '<div class="ui 1b71fa inverted header">' +
                      c +
                      '</div><div class="em2">' +
                      u +
                      "</div>"
                  ),
                  d.HideAllToast()),
                  a.$broadcast("user:update", {});
              } else {
                var m = Lang.get("orange.pay_fail"),
                  g = e.data.data.transaction.failure_message
                    ? e.data.data.transaction.failure_message
                    : "error";
                if (d.IsAllowCascade())
                  if ($.inArray(g, d.config.orange_no_cascade) != -1)
                    console.log(g, "allow PFS", !d.countryAllowPFS());
                  else {
                    var p = d.runCascade(n);
                    if (p) return !0;
                  }
                "alert" == d.alt.type &&
                  ((m = Lang.get("cascade_card.failed")),
                  d.displayAlert(
                    "Card",
                    '<span class="ui red inverted header">' + m + "</span>"
                  ),
                  d.HideAllToast());
              }
            } else r || t(d.ListenCallbackOrange, d.IteratorTimeout);
          });
        }),
        (d.ListenCallbackPFS = function () {
          var n = "PFS",
            o = d.alt.uid,
            i = d.alt.id,
            r = d.alt.stop;
          e.post("/api/card/listen/pfs", {
            uid: o,
            id: i,
          })
            .success(function (e, o, i, s) {
              if (1 == e["return"])
                if ("0000" == e.data.R1) {
                  var l = Lang.get("cascade_card.founded"),
                    c = Lang.get("cascade_card.msg.pfs");
                  "alert" == d.alt.type &&
                    (d.displayAlert(
                      "Card",
                      '<div class="ui 1b71fa inverted header">' +
                        l +
                        "</div><div>" +
                        c +
                        "</div>"
                    ),
                    d.HideAllToast()),
                    a.$broadcast("user:update", {});
                } else {
                  var u = "";
                  if (
                    ((u += _.isUndefined(e.data.R2) ? "" : e.data.R2),
                    (u += _.isUndefined(e.data.R4) ? "" : "<br>" + e.data.R4),
                    d.IsAllowCascade())
                  ) {
                    var p = d.runCascade(n);
                    if (p) return !0;
                  }
                  "alert" == d.alt.type &&
                    (d.displayAlert(
                      "Card",
                      '<span class="ui red inverted header">' + u + "</span>"
                    ),
                    d.HideAllToast());
                }
              else r || t(d.ListenCallbackPFS, d.IteratorTimeout);
            })
            .error(function (e) {
              r || t(d.ListenCallbackPFS, d.IteratorTimeout);
            });
        }),
        (d.ListenCallbackConcept = function () {
          var a = "CONCEPT",
            n = d.alt.uid,
            o = d.alt.id,
            i = d.alt.stop;
          e.post("/api/payconcept/listen", {
            transaction_id: n,
            id: o,
          }).success(function (e, n, o, r) {
            if (1 == e["return"])
              if ("APPROVED" == e.data.response) {
                alertify.set("notifier", "position", "bottom-left");
                var s = Lang.get("pfs.fast.founded"),
                  l = Lang.get("cascade_card.msg.concept");
                "alert" == d.alt.type
                  ? alertify.alert(
                      "Card",
                      '<h4 class="phone-success p">' +
                        s +
                        '</h4><h4 class="phone-success p">' +
                        l +
                        "</h4>"
                    )
                  : alertify.success(s),
                  d.updateUserDepositTmp();
              } else {
                var c = Lang.get("orange.pay_fail");
                e.data.comment ? e.data.comment : "error";
                if (d.IsAllowCascade() && d.config.concept_redirect) {
                  var u = d.runCascade(a);
                  if (u) return !0;
                }
                "alert" == d.alt.type
                  ? ((c = '<h4 class="phone-error">' + c),
                    (c += "</h4>"),
                    alertify.alert("Card", c))
                  : alertify.error(c, 0);
              }
            else i || t(d.ListenCallbackConcept, d.IteratorTimeout);
          });
        }),
        (d.ListenCallbackSkrill = function () {
          var a = d.alt.uid,
            n = d.alt.id,
            o = d.alt.stop;
          e.post("/api/card/listen/skrill", {
            transaction_id: a,
            id: n,
          }).success(function (e, a, n, i) {
            if (1 == e["return"]) {
              var r = d.getPath(e.data, "status");
              if ("2" == r) {
                var s = Lang.get("cascade_card.founded"),
                  l = Lang.get("cascade_card.msg.skrill");
                d.displayAlert(
                  "Skrill",
                  '<div class="ui 1b71fa inverted header">' +
                    s +
                    "</div><div>" +
                    l +
                    "</div>"
                ),
                  d.HideAllToast();
              } else {
                var c = "Error";
                d.showErrorPayment(c);
              }
            } else o || t(d.ListenCallbackSkrill, d.IteratorTimeout);
          });
        }),
        (d.ListenCallbackEzpay = function () {
          var a = "EZPAY",
            n = d.alt.uid,
            o = d.alt.id,
            i = d.alt.stop;
          d.WorkerTrigger(),
            e
              .post("/api/card/listen/ezpay", {
                transaction_id: n,
                id: o,
              })
              .success(function (e, n, o, r) {
                if (1 == e["return"]) {
                  var s = d.getPath(e.data, "status");
                  if ("APPROVED" == s) {
                    var l = Lang.get("cascade_card.founded"),
                      c = Lang.get("cascade_card.msg.ezpay");
                    d.displayAlert(
                      "Card",
                      '<div class="ui 1b71fa inverted header">' +
                        l +
                        "</div><div>" +
                        c +
                        "</div>"
                    ),
                      d.HideAllToast();
                  } else {
                    var u = d.runCascade(a);
                    if (u) return !0;
                    var p = d.getPath(e.data, "reason"),
                      m = p ? p : s;
                    (m = Lang.get("cascade_card.failed")),
                      d.showErrorPayment(m),
                      d.HideAllToast();
                  }
                } else i || t(d.ListenCallbackEzpay, d.IteratorTimeout);
              });
        }),
        (d.showErrorPayment = function (e) {
          d.displayAlert(
            "Card",
            '<span class="ui red inverted header">' + e + "</span>"
          );
        }),
        (d.ListenCardCallback = function (e, a, t) {
          switch (
            ((d.alt.uid = t),
            (d.alt.id = a),
            (d.alt.type = "alert"),
            (d.alt.stop = !1),
            e)
          ) {
            case "pfs":
              d.ListenToastDisplay(), d.ListenCallbackPFS();
              break;
            case "orange":
              d.ListenToastDisplay(), d.ListenCallbackOrange();
              break;
            case "skrill":
              d.ListenToastDisplay(), d.ListenCallbackSkrill();
              break;
            case "ezpay":
              d.ListenToastDisplay(), d.ListenCallbackEzpay();
              break;
            case "agni":
              d.ListenToastDisplay(), d.ListenCallbackAgni();
              break;
            default:
              console.log("bad prcessor");
          }
        }),
        (d.ListenToastDisplay = function () {
          d.displayToastNew(
            "success",
            "We expect a response from the processor",
            16,
            !0,
            !0,
            !1
          );
        }),
        (d.HideAllToast = function () {
          $.amaran.close();
        }),
        (d.WorkerNull = function () {
          alert("Not isset processors!");
        }),
        (d.displayToast = function (e, a, t) {
          t || (t = 5e3);
        }),
        (d.displayToastNew = function (e, a, t, n, o, i) {
          (t = t ? t : 5e3), (n = !!n && n), (o = !!o && o), (i = !i || i);
          var r = "";
          switch (e) {
            case "success":
              r = "#27ae60";
              break;
            case "error":
              r = "#c0392b";
              break;
            default:
              r = "#1B1E24";
          }
          $.amaran({
            theme: "colorful",
            delay: t,
            closeOnClick: i,
            closeButton: o,
            sticky: n,
            content: {
              bgcolor: r,
              color: "#fff",
              message: a,
            },
            position: "bottom left",
            outEffect: "slideBottom",
          });
        }),
        (d.displayAlert = function (e, a, t) {
          n.showAlert(e, a, t, {
            theme: "small black",
          });
        }),
        (d.getPath = function (e, a) {
          return a.split(".").reduce(function (e, a) {
            return "undefined" == typeof e || null === e ? e : e[a];
          }, e);
        }),
        (d.swapArrayElements = function (e, a, t) {
          var n = e[a];
          (e[a] = e[t]), (e[t] = n);
        }),
        (d.WorkerFraud = function () {
          var t = d.getLastPayment(),
            i = "FRAUD";
          if (!d.WorkerTrigger(i)) {
            var r = t.bonus,
              s = t.fixed,
              c = t.amount;
            d.IsNeedWipeItems(),
              d.setItemCascade(i),
              a.$broadcast("cascade:wait", !0),
              e
                .post("/api/fraud/card", {
                  amount: c,
                  fixed: s,
                  bonus: r,
                })
                .success(function (e, t, r, s) {
                  return e.cascade
                    ? (a.$broadcast("cascade:limit", !0),
                      void d.showErrorPayment(Lang.get("cards.limit")))
                    : e.fail_limit
                    ? (a.$broadcast("cascade:limit", !0),
                      void d.showErrorPayment(Lang.get("cards.limit")))
                    : e.day_limit
                    ? (a.$broadcast("cascade:wait", !1),
                      void n.showConfirm(
                        "Information",
                        "Dear client, due to safety reasons, your daily limit of 3 credit card transactions per day is exceeded. To continue depositing you are welcome to use alternative payment methods, such as bitcoin. Our support team may assist you in all questions regarding alternative funding methods.",
                        function () {
                          n.CloseAll(),
                            n.showDynamic(
                              "/api/ag/modal_bitcoin",
                              {
                                theme: "",
                                close: "bdw-close",
                              },
                              {
                                onHide: function () {
                                  (o.btc_show = !0),
                                    localStorage.setItem(
                                      moment().format("YYMMDD"),
                                      "yes"
                                    );
                                },
                              }
                            );
                        },
                        function () {
                          n.CloseAll(),
                            l.go("show", {
                              page: "funding",
                            }),
                            setTimeout(function () {
                              var e = $('[data-tab="bitcoin"]');
                              e.click(),
                                setTimeout(function () {
                                  $("html, body").animate(
                                    {
                                      scrollTop: e.offset().top,
                                    },
                                    400
                                  );
                                }, 300);
                            }, 300);
                        },
                        {
                          ok: "Why Bitcoin?",
                          cancel: "Deposit by Bitcoin",
                        }
                      ))
                    : e.bad_card
                    ? (a.$broadcast("cascade:wait", !1),
                      void d.showErrorPayment(Lang.get("cards.bad_card")))
                    : e.reason
                    ? (a.$broadcast("cascade:wait", !1),
                      void d.showErrorPayment(e.message))
                    : (e.is_usa_card && d.cascadeCardType("usa_card"),
                      void d.runCascade(i));
                })
                .error(function (e, a, t, n) {
                  d.runCascade(i);
                });
          }
        }),
        (d.ListenCallbackAgni = function () {
          var a = d.alt.uid,
            n = d.alt.id,
            o = "AGNI",
            i = d.alt.stop;
          e.post("/api/fm/agni/listen", {
            transaction_id: a,
            id: n,
          }).success(function (e, a, n, r) {
            if (e["return"] === !0) {
              var s = d.getPath(e.data, "status");
              if ("success" === s || "capturesuccess" === s) {
                var l = Lang.get("cascade_card.founded"),
                  c =
                    'This transaction will be titled as "IFX*+442031298737" in your bank\'s statement.';
                d.displayAlert(
                  "Card",
                  '<div class="ui 1b71fa inverted header">' +
                    l +
                    "</div><div>" +
                    c +
                    "</div><br>"
                );
              } else if ("N" === s || "C" === s) {
                var u = d.runCascade(o);
                if (u) return !0;
                var p =
                  (d.getPath(e.data, "resultCode"),
                  d.getPath(e.data, "resultDescription"));
                d.showErrorPayment(p);
              }
              d.HideAllToast();
            } else i || t(d.ListenCallbackAgni, d.IteratorTimeout);
          });
        }),
        (d.WorkerPFS = function () {
          var t = "PFS";
          if (!d.WorkerTrigger(t)) {
            var n = d.getLastPayment(),
              o = n.bonus,
              i = n.fixed,
              r = n.amount;
            d.IsNeedWipeItems(),
              d.setItemCascade(t),
              a.$broadcast("cascade:wait", !0),
              e
                .post("/api/card/fast/pfs", {
                  amount: r,
                  fixed: i,
                  bonus: o,
                })
                .success(function (e, n, o, i) {
                  if (
                    ((d.alt.uid = e.transaction_id),
                    (d.alt.id = e.type),
                    (d.alt.type = "alert"),
                    (d.alt.stop = !1),
                    "0000" != e.data.R1)
                  )
                    if ("0008" == e.data.R1) d.ListenCallbackPFS();
                    else {
                      var r = d.runCascade(t);
                      if (r) return !0;
                      d.displayAlert(
                        "Card",
                        '<span class="ui red inverted header">' +
                          e.data.R2 +
                          "</span>"
                      );
                    }
                  else d.secure3dRedirectPFS(e.data);
                  a.$broadcast("cascade:wait", !1);
                })
                .error(function (e, t, n, o) {
                  d.displayToastNew("error", "Response error, try again"),
                    a.$broadcast("cascade:wait", !1);
                });
          }
        }),
        (d.WorkerOrange = function () {
          var t = d.getLastPayment(),
            n = "ORANGE";
          if (!d.WorkerTrigger(n)) {
            var o = t.bonus,
              i = t.fixed,
              r = t.amount;
            d.IsNeedWipeItems(),
              d.setItemCascade(n),
              a.$broadcast("cascade:wait", !0),
              e
                .post("/api/card/fast/orange", {
                  amount: r,
                  fixed: i,
                  bonus: o,
                })
                .success(function (e, t, o, i) {
                  var r = d.getPath(e, "data.links.redirect_uri");
                  if (r) return (location.href = r), !1;
                  var s = d.getPath(e, "data.charge.attributes.status");
                  if (s && "failed" == s) {
                    var l = d.runCascade(n);
                    if (l) return !0;
                    var c = "Error",
                      u = d.getPath(
                        e,
                        "data.charge.attributes.failure.message"
                      );
                    return (
                      u && (c = u),
                      (c = Lang.get("cascade_card.failed")),
                      d.displayAlert(
                        "Card",
                        '<span class="ui red inverted header">' + c + "</span>"
                      ),
                      a.$broadcast("cascade:wait", !1),
                      !1
                    );
                  }
                  if (s && "successful" == s) {
                    var p = d.getPath(e, "data.charge.id");
                    return (
                      d.initAlt(p, ""),
                      d.ListenCallbackOrange(),
                      void a.$broadcast("cascade:wait", !1)
                    );
                  }
                  if ("success" == e.status) {
                    if (e.data.hashed_id) {
                      var p = e.data.hashed_id;
                      return (
                        d.initAlt(p, ""),
                        d.ListenCallbackOrange(),
                        void a.$broadcast("cascade:wait", !1)
                      );
                    }
                    e.data.redirect_url
                      ? (location.href = e.data.redirect_url)
                      : d.ListenCallbackOrange();
                  } else {
                    var l = d.runCascade(n);
                    if (l) return !0;
                    var c = "Error";
                    e.message && (c = e.message),
                      (c = Lang.get("cascade_card.failed")),
                      d.displayAlert(
                        "Card",
                        '<span class="ui red inverted header">' + c + "</span>"
                      );
                  }
                  a.$broadcast("cascade:wait", !1);
                })
                .error(function (e, t, n, o) {
                  d.displayToastNew("error", "Response error, try again"),
                    a.$broadcast("cascade:wait", !1);
                });
          }
        }),
        (d.WorkerOrangeNot3d = function () {
          var t = d.getLastPayment(),
            n = "ORANGE_NOT3D";
          if (!d.WorkerTrigger(n)) {
            var o = t.bonus,
              i = t.fixed,
              r = t.amount;
            d.IsNeedWipeItems(),
              d.setItemCascade(n),
              a.$broadcast("cascade:wait", !0),
              setTimeout(function () {
                e.post("/api/card/fast/orange", {
                  amount: r,
                  fixed: i,
                  bonus: o,
                })
                  .success(function (e, t, o, i) {
                    if ("success" == e.status) {
                      if (e.data.hashed_id) {
                        var r = e.data.hashed_id;
                        return (
                          d.initAlt(r, ""),
                          d.ListenCallbackOrange(),
                          void a.$broadcast("cascade:wait", !1)
                        );
                      }
                      e.data.redirect_url
                        ? (location.href = e.data.redirect_url)
                        : d.ListenCallbackOrange();
                    } else {
                      var s = d.runCascade(n);
                      if (s) return !0;
                      var l = "Error";
                      e.message && (l = e.message),
                        d.displayAlert(
                          "Card",
                          '<span class="ui red inverted header">' +
                            l +
                            "</span>"
                        );
                    }
                    a.$broadcast("cascade:wait", !1);
                  })
                  .error(function (e, t, n, o) {
                    d.displayToastNew("error", "Response error, try again"),
                      a.$broadcast("cascade:wait", !1);
                  });
              }, 6e3);
          }
        }),
        (d.WorkerConcept = function (t) {
          var n = d.getLastPayment(),
            o = "CONCEPT";
          if (!d.WorkerTrigger(o)) {
            var i = n.bonus,
              r = n.fixed,
              s = n.amount;
            t && (d.config.concept_redirect = !1),
              d.IsNeedWipeItems(),
              d.setItemCascade(o),
              a.$broadcast("cascade:wait", !0),
              e
                .post("/api/payconcept/pay", {
                  amount: s,
                  fixed: r,
                  bonus: i,
                })
                .success(function (e, t, n, o) {
                  if ((e.txid && d.initAlt(e.txid, "-1"), "OK" == e.status))
                    "" != e.redirect.html
                      ? (location.href = e.redirect.html)
                      : d.ListenCallbackConcept();
                  else {
                    alertify.set("notifier", "position", "bottom-left");
                    var i = "Error";
                    e.error.msg &&
                      (i =
                        "Your transaction was declined due to blacklisting, [customer requested] please contact merchant support." ==
                          e.error.msg || "003" == e.error.code
                          ? "Your transaction was declined. Please contact merchant support."
                          : e.error.msg),
                      alertify.alert(
                        "Card",
                        '<h4 class="phone-error">' + i + "</h4>"
                      );
                  }
                  a.$broadcast("cascade:wait", !1);
                })
                .error(function (e, t, n, o) {
                  a.$broadcast("cascade:wait", !1),
                    alertify.set("notifier", "position", "bottom-left"),
                    alertify.error("Response error, try again", 0);
                });
          }
        }),
        (d.WorkerZoom = function () {
          var e = d.getLastPayment(),
            a = "ZOOM";
          if (!d.WorkerTrigger(a)) {
            var t = e.bonus,
              n = e.fixed,
              o = e.amount;
            d.IsNeedWipeItems(), d.setItemCascade(a), s.fast(o, n, t, d);
          }
        }),
        (d.WorkerEzpay = function () {
          var e = d.getLastPayment(),
            a = "EZPAY";
          if (!d.WorkerTrigger(a)) {
            var t = e.bonus,
              n = e.fixed,
              o = e.amount;
            d.IsNeedWipeItems(),
              d.setItemCascade(a),
              (location.href =
                "/api/card/fast/ezpay?amount=" +
                o +
                "&fixed=" +
                n +
                "&bonus=" +
                t);
          }
        }),
        (d.WorkerEntropay = function () {
          var t = d.getLastPayment(),
            n = "ENTROPAY";
          if (!d.WorkerTrigger(n)) {
            var o = t.bonus,
              i = t.fixed,
              s = t.amount;
            d.IsNeedWipeItems(),
              d.setItemCascade(n),
              a.$broadcast("cascade:wait", !0),
              e
                .post("/api/entro/pay", {
                  amount: s,
                  fixed: i,
                  bonus: o,
                })
                .success(function (e, t, o, i) {
                  if ("true" == e["return"]) r.entroStart(s);
                  else if ("pin" == e["return"]) r.entroPin();
                  else {
                    var l = d.runCascade(n);
                    if (l) return !0;
                    var c = "Your transaction was declined.";
                    d.displayAlert(
                      "Card",
                      '<span class="ui red inverted header">' + c + "</span>"
                    );
                  }
                  d.HideAllToast(), a.$broadcast("cascade:wait", !1);
                })
                .error(function (e, t, n, o) {
                  d.HideAllToast(),
                    d.displayToastNew("error", "Response error, try again"),
                    a.$broadcast("cascade:wait", !1);
                });
          }
        }),
        (d.WorkerShape = function () {
          var t = d.getLastPayment(),
            n = "SHAPE";
          if (!d.WorkerTrigger(n)) {
            var o = t.bonus,
              i = t.fixed,
              r = t.amount;
            d.IsNeedWipeItems(),
              d.setItemCascade(n),
              a.$broadcast("cascade:wait", !0),
              e
                .post("/api/shape/pay", {
                  amount: r,
                  fixed: i,
                  bonus: o,
                })
                .success(function (e, t, o, i) {
                  if ("true" === e["return"])
                    location.href = "/api/shape/invoice/" + e.guid;
                  else {
                    var r = d.runCascade(n);
                    if (r) return !0;
                    var s = "Your transaction was declined.";
                    d.displayAlert(
                      "Card",
                      '<span class="ui red inverted header">' + s + "</span>"
                    );
                  }
                  d.HideAllToast(), a.$broadcast("cascade:wait", !1);
                })
                .error(function (e, t, n, o) {
                  d.HideAllToast(),
                    d.displayToastNew("error", "Response error, try again"),
                    a.$broadcast("cascade:wait", !1);
                });
          }
        }),
        (d.WorkerVload = function () {
          var t = d.getLastPayment(),
            n = "VLOAD";
          if (!d.WorkerTrigger(n)) {
            var o = t.bonus,
              i = t.fixed,
              r = t.amount;
            d.IsNeedWipeItems(),
              d.setItemCascade(n),
              a.$broadcast("cascade:wait", !0),
              e
                .get("/api/vload/prepare", {
                  amount: r,
                  fixed: i,
                  bonus: o,
                })
                .success(function (e, a, t, n) {
                  location.href = "/api/vload/start?amount=" + r;
                })
                .error(function (e, a, t, n) {
                  location.href = "/api/vload/start?amount=" + r;
                });
          }
        }),
        (d.WorkerAgni = function () {
          var e = d.getLastPayment(),
            t = "AGNI";
          if (!d.WorkerTrigger(t)) {
            var n = e.bonus,
              o = (e.fixed, e.amount),
              i = e.currency;
            d.IsNeedWipeItems(),
              d.setItemCascade(t),
              a.$broadcast("cascade:wait", !0),
              d.sendForm(
                {
                  action: "/api/fm/agni/pay",
                  method: "POST",
                },
                {
                  amount: o,
                  bonus: n,
                  currency: i,
                }
              );
          }
        }),
        (d.WorkerFinity = function () {
          var t = d.getLastPayment(),
            n = "FINITY";
          if (!d.WorkerTrigger(n)) {
            var o = t.bonus,
              i = t.fixed,
              r = t.amount,
              s = t.currency;
            d.IsNeedWipeItems(),
              d.setItemCascade(n),
              a.$broadcast("cascade:wait", !0),
              e
                .post("/api/card/fast/finity", {
                  amount: r,
                  fixed: i,
                  bonus: o,
                  currency: s,
                })
                .success(function (e, t, o, i) {
                  if (e.status && "C" === e.status) {
                    var r = Lang.get("cascade_card.founded"),
                      s = e.message ? e.message : "";
                    d.displayAlert(
                      "Card",
                      '<div class="ui 1b71fa inverted header">' +
                        r +
                        "</div><div>" +
                        s +
                        "</div>"
                    );
                  } else {
                    var l = d.runCascade(n);
                    if (l) return !0;
                    var c = Lang.get("cascade_card.failed");
                    e.message && (c = e.message),
                      d.showErrorPayment(c),
                      d.HideAllToast();
                  }
                  a.$broadcast("cascade:wait", !1);
                })
                .error(function (e, t, n, o) {
                  d.displayToastNew("error", "Response error, try again"),
                    a.$broadcast("cascade:wait", !1);
                });
          }
        }),
        (d.sendForm = function (e, a) {
          var t = jQuery("<form>", e);
          $.each(a, function (e, a) {
            var n = {
              name: e,
              value: a,
              type: "hidden",
            };
            t.append(jQuery("<input>", n));
          }),
            t.appendTo("body"),
            t.submit();
        }),
        (d.WorkerSwish = function () {
          var t = d.getLastPayment(),
            n = "SWISH";
          if (!d.WorkerTrigger(n)) {
            var o = t.bonus,
              i = t.fixed,
              r = t.amount;
            d.IsNeedWipeItems(),
              d.setItemCascade(n),
              a.$broadcast("cascade:wait", !0);
            var s = c.currency;
            e.post("/api/vload/prepare", {
              amount: r,
              fixed: i,
              bonus: o,
              currency: s,
            })
              .success(function (e, a, t, n) {
                location.href = "/api/vload/card?amount=" + r;
              })
              .error(function (e, a, t, n) {
                location.href = "/api/vload/card?amount=" + r;
              });
          }
        }),
        (d.entroStart = function (e) {
          r.entroStart(e);
        }),
        (d.entroPin = function () {
          r.entroPin();
        }),
        (d.WorkerTrigger = function (e) {
          return !1;
        }),
        (d.triggerBeforeAuto = function (e, a, t, n) {
          d.cascadeCardType(n), d.execDefaultTriggersAuto(e, a, t, n);
        }),
        (d.WorkerAuto = function (e, a, t, n) {
          var o = {
            bonus: e,
            fixed: a,
            amount: t,
            currency: c.currency,
          };
          d.setLastPayment(o),
            d.wipeItemCascade(),
            d.triggerBeforeAuto(e, a, t, n),
            User.get("cascade") &&
              (d.paymant_stack = User.get("cascade").split(","));
          var i = !!d.paymant_stack[0] && d.paymant_stack[0];
          i && ((d.current_calls = i), d.payment_calls[i]());
        }),
        (d.ReportNoneCascade = function () {
          e.post("/api/rpc", {
            worker: "WorkerAuto",
            cascade: "none",
            cascade_exec: "Concept",
          });
        }),
        (d.secure3dRedirectPFS = function (e) {
          var a = e,
            t = "/api/card/secure/pfs/" + a.R5;
          location.href = t;
        }),
        (d.b64EncodeUnicode = function (e) {
          return btoa(
            encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, a) {
              return String.fromCharCode("0x" + a);
            })
          );
        }),
        (d.getItemCascade = function () {
          var e = "finpari_cascade_stack";
          return localStorage.getItem(e)
            ? localStorage.getItem(e).split(",")
            : [];
        }),
        (d.setItemCascade = function (e) {
          var a = d.getItemCascade(),
            t = "finpari_cascade_stack";
          $.inArray(e, a) == -1 &&
            (a.push(e), localStorage.setItem(t, a.join(",")));
        }),
        (d.wipeItemCascade = function () {
          var e = "finpari_cascade_stack";
          localStorage.removeItem(e);
        }),
        (d.IsNeedWipeItems = function () {
          var e = d.getItemCascade().length,
            a = d.paymant_stack.length;
          e >= a && d.wipeItemCascade();
        }),
        (d.getLastPayment = function () {
          var e = "finpari_last_payment";
          return localStorage.getItem(e)
            ? angular.fromJson(localStorage.getItem(e))
            : {};
        }),
        (d.setLastPayment = function (e) {
          var a = "finpari_last_payment";
          localStorage.setItem(a, angular.toJson(e));
        }),
        (d.initAlt = function (e, a) {
          (d.alt.uid = e), (d.alt.id = a), (d.alt.stop = !1);
        }),
        d
      );
    };
    (e.$inject = [
      "$http",
      "$rootScope",
      "$timeout",
      "ModalService",
      "Store",
      "$stateParams",
      "Entropay",
      "Zoom",
      "$state",
      "Ranger",
    ]),
      angular.module("app").factory("Cascade", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t) {
      var n = {};
      return (
        (n.data = {}),
        (n.tips = function (e, a) {
          return a.value > 40
            ? ((n.data = a),
              void t.showConfirm(
                "Tips confirm",
                'By clicking "yes" you approve, that $50 tip will be deducted from your account balance.',
                function () {
                  $(".ui.modal").modal("hide"), n.sentTips(a);
                },
                !1,
                {
                  ok: "Yes",
                }
              ))
            : void n.sentTips(a);
        }),
        (n.sentTips = function (a) {
          (a = a ? a : n.data),
            n.showAmaran(Lang.get("tips.wait"), "2597c7", 5e3),
            setTimeout(function () {
              e({
                method: "POST",
                url: "/api/triggers/tips",
                data: {
                  value: a.value,
                  host: a.host_id,
                },
              })
                .success(function (e) {
                  e["return"]
                    ? n.showAmaran(Lang.get("tips.success"), "27ae60", 5e3)
                    : n.showAmaran(Lang.get("tips.error"), "e74c3c", 5e3);
                })
                .error(function (e) {
                  n.showAmaran("some error", "e74c3c", 5e3);
                });
            }, 3e3);
        }),
        (n.showAmaran = function (e, a, t) {
          $.amaran({
            theme: "colorful",
            delay: t,
            content: {
              bgcolor: "#" + a,
              color: "#fff",
              message: e,
            },
            position: "bottom left",
            outEffect: "slideTop",
          });
        }),
        a.$on("platform:chat:tips", n.tips),
        n
      );
    };
    (e.$inject = ["$http", "$rootScope", "ModalService"]),
      angular.module("app").factory("ChatService", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      var i = {};
      return (
        (i.queue = []),
        (i.data = {}),
        (i.run = function (e, a, t) {
          (i.data[e] = {
            name: e,
            second: a,
            current: a,
            callback: t,
          }),
            (i.queue[e] = o(function () {
              i.tick(e);
            }, 1e3));
        }),
        (i.die = function (e) {
          o.cancel(i.queue[e]);
        }),
        (i.dieAll = function () {
          $.each(i.queue, function (e, a) {
            i.die(e);
          });
        }),
        (i.is = function (e) {
          return !!i.data[e] && i.data[e];
        }),
        (i.tick = function (e) {
          var t = i.data[e];
          if ((t.current--, t.current < 0)) return i.die(e), void i.fire(e);
          var n = 1,
            o = 60 * n,
            r = 60 * o,
            s = 24 * r,
            l = Math.floor(t.current / s),
            c = Math.floor((t.current % s) / r),
            d = Math.floor((t.current % r) / o),
            u = Math.floor(t.current % o);
          (t.days = l),
            (t.hours = c),
            (t.minutes = d),
            (t.seconds = u),
            (i.data[e] = t),
            a.$broadcast("coundown:tick", t);
        }),
        (i.fire = function (e) {
          "function" != typeof i.data[e].callback ||
            i.data[e].callback_exe ||
            ((i.data[e].callback_exe = !0), i.data[e].callback()),
            a.$broadcast("coundown:callback", {
              name: e,
            });
        }),
        i
      );
    };
    (e.$inject = ["$http", "$rootScope", "$timeout", "Store", "$interval"]),
      angular.module("app").factory("CountDown", e);
  })(window),
  (function () {
    "use strict";
    angular.module("app").directive("forceInteger", function () {
      return {
        link: function (e, a, t, n) {
          a.ForceNumericOnly();
        },
      };
    }),
      angular.module("app").directive("forceFloat", function () {
        return {
          link: function (e, a, t, n) {
            a.ForceFloat();
          },
        };
      }),
      angular.module("app").directive("equals", function () {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function (e, a, t, n) {
            if (n) {
              e.$watch(t.ngModel, function () {
                o();
              }),
                t.$observe("equals", function (e) {
                  o();
                }),
                n.$parsers.unshift(function (e) {
                  return o(), e;
                }),
                n.$formatters.unshift(function (e) {
                  return o(), e;
                });
              var o = function () {
                var e = n.$viewValue,
                  a = t.equals;
                n.$setValidity("equals", !e || !a || e === a);
              };
            }
          },
        };
      });
  })(window),
  (function () {
    "use strict";
    var e = function (e, n, o, i, r, s) {
      var l = {};
      return (
        (l.appendModalWrapper = function () {
          0 == $(".modal-placer-capy").length &&
            $("body").prepend('<div class="modal-placer-capy"></div>');
        }),
        (l.dropModalWrapper = function () {
          $(".modal-placer-capy").remove();
        }),
        (l.entroStart = function (e) {
          (r.amount = e),
            l.appendModalWrapper(),
            $mdDialog.show({
              clickOutsideToClose: !1,
              controller: a,
              templateUrl: "/api/ag/dialog_entro_start",
              parent: $(".modal-placer-capy")[0],
              onRemoving: function () {
                l.dropModalWrapper();
              },
            });
        }),
        (l.entroPin = function () {
          User.get("entro_pin") &&
            (l.appendModalWrapper(),
            $mdDialog.show({
              clickOutsideToClose: !1,
              controller: t,
              templateUrl: "/api/ag/dialog_entro_pin",
              parent: $(".modal-placer-capy")[0],
              onRemoving: function () {
                l.dropModalWrapper();
              },
            }));
        }),
        l
      );
    };
    (e.$inject = [
      "$http",
      "$rootScope",
      "$timeout",
      "ModalService",
      "Store",
      "$stateParams",
    ]),
      angular.module("app").factory("Entropay", e);
    var a = function (e, a, t, n, o, i) {
      (e.amount = n.amount),
        (e.hide = function () {
          a.hide();
        }),
        (e.cancel = function () {
          o({
            method: "POST",
            url: "/api/entro/reject",
          })
            .success(function (e) {
              var a = Lang.get("cascade_card.failed");
              i.displayAlert(
                "Card",
                '<span class="ui red inverted header">' + a + "</span>"
              );
            })
            .error(function (e) {
              i.displayToastNew("error", "Some errors.");
            }),
            a.cancel();
        }),
        (e.go = function () {
          location.href = "/api/entro/redirect?amount=" + e.amount;
        });
    };
    (a.$inject = [
      "$scope",
      "$mdDialog",
      "$rootScope",
      "Store",
      "$http",
      "Cascade",
    ]),
      angular.module("app").controller("EntroStart", a);
    var t = function (e, a, t, n, o, i) {
      (e.data = User.get("entro_pin")
        ? angular.fromJson(User.get("entro_pin"))
        : []),
        (e.cvv = ""),
        (e.amount = !!e.data.amount && e.data.amount),
        (e.hide = function () {
          a.hide();
        }),
        (e.cancel = function () {
          a.cancel();
        }),
        (e.save = function () {
          return e.cvv.length < 3
            ? void i.displayToastNew("error", "Please fill cvv!")
            : (o({
                method: "POST",
                url: "/api/entro/cvv",
                data: {
                  cvv: e.cvv,
                },
              })
                .success(function (a) {
                  e.amount &&
                    (User.set("isEntorpayCard", !0),
                    i.WorkerAuto(0, 0, e.amount, "visa")),
                    t.$broadcast("reload:card", e.data),
                    e.cancel();
                })
                .error(function (e) {
                  i.displayToastNew("error", "Please fill cvv!");
                }),
              void a.cancel());
        });
    };
    (t.$inject = [
      "$scope",
      "$mdDialog",
      "$rootScope",
      "Store",
      "$http",
      "Cascade",
    ]),
      angular.module("app").controller("EntroStart", t);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a) {
      var t = {};
      return (
        (t["catch"] = function (a, t, n, o, i) {
          var r = {
            error: a,
            url: t,
            lineNumber: n,
            column: o,
            object: i,
          };
          return (
            e
              .post("/api/us/handler", r)
              .success(function (e, a, t, n) {})
              .error(function (e, a, t, n) {}),
            !1
          );
        }),
        t
      );
    };
    (e.$inject = ["$http", "$rootScope"]),
      angular.module("app").factory("ErrorHandler", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      return {
        scope: !0,
        link: function (e, o, i) {
          (e.Scans = []),
            (e._deleteScan = function (a, n) {
              return n
                ? void (e.Scans = _.without(e.Scans, a))
                : void t({
                    method: "POST",
                    url:
                      "/api/kayako/upload/" +
                      i.fileUp.split("user.")[1] +
                      "/unshift",
                    data: a,
                  })
                    .success(function (t, n, o, i) {
                      (e.Scans = _.without(e.Scans, a)),
                        (e.$parent.Scans_len = e.Scans.length);
                    })
                    .error(function (e, a, t, n) {
                      alert("Unexpected errors...");
                    });
            });
          var r = function () {
            e.Scans = [];
          };
          a.$on("file-up:drop", r),
            o.find('[type="file"]').on("change", function (t) {
              var o = ($(this), FileAPI.getFiles(t)),
                r = i.fileMax ? parseInt(i.fileMax) : 1;
              e.Scans.length >= r ||
                FileAPI.filterFiles(
                  o,
                  function (e, a) {
                    return (
                      "*" == i.fileAllow ||
                      !(!/^image/.test(e.type) && "application/pdf" != e.type)
                    );
                  },
                  function (t, o) {
                    if (t.length) {
                      var r = _.first(t),
                        s = {
                          name: r.name,
                          progress: 0,
                          status: "loading",
                          cache: "",
                          info: {},
                          error: "",
                        };
                      e.Scans.push(s), (e.$parent.Scans_len = e.Scans.length);
                      var l = _.last(e.Scans);
                      try {
                        e.$digest();
                      } catch (c) {}
                      FileAPI.upload({
                        url:
                          "/api/kayako/upload/" +
                          i.fileUp.split("user.")[1] +
                          "/no",
                        files: {
                          images: t,
                        },
                        prepare: function () {
                          a.$broadcast("file-up:prepare", {});
                        },
                        progress: function (e) {
                          var a = ((e.total / e.loaded) * 100).toFixed(0);
                          l.progress = a;
                        },
                        complete: function (t, o) {
                          if ((console.log(t, o), t)) {
                            (s.status = "error"),
                              a.$broadcast("file-up:complete", {}),
                              n.displayToastAmaran("error", o.response);
                            try {
                              e.$digest();
                            } catch (i) {}
                          } else {
                            try {
                              JSON.parse(o.response);
                            } catch (r) {
                              return (
                                (s.status = "error"),
                                a.$broadcast("file-up:complete", {}),
                                !1
                              );
                            }
                            var c = JSON.parse(o.response);
                            !t && _.isObject(c.data._FILES.images)
                              ? ((l.name = c.data._FILES.images.name),
                                (l.status = "success"))
                              : (l.status = "error");
                            try {
                              e.$digest();
                            } catch (i) {}
                            a.$broadcast("file-up:complete", {});
                          }
                        },
                      });
                    }
                  }
                );
            });
        },
      };
    };
    (e.$inject = ["$parse", "$rootScope", "$http", "ModalService"]),
      angular.module("app").directive("fileUp", e);
  })(window),
  (function () {
    "use strict";
    angular.module("app").filter("lang", function () {
      return function (e, a) {
        return Lang.get(e);
      };
    }),
      angular.module("app").filter("dateFormat", function () {
        return function (e, a) {
          return a ? moment(e).format(a) : moment(e).format("DD.MM.YYYY");
        };
      }),
      angular.module("app").filter("dateFormatUnix", function () {
        return function (e, a) {
          return a
            ? moment.unix(e).format(a)
            : moment.unix(e).format("DD.MM.YYYY");
        };
      }),
      angular.module("app").filter("toFixed", function () {
        return function (e, a) {
          return parseFloat(e).toFixed(a);
        };
      }),
      angular.module("app").filter("Today", function () {
        return function (e, a) {
          return moment().format(e);
        };
      }),
      angular.module("app").filter("CardHider", function () {
        return function (e, a) {
          if (void 0 == e) return "";
          var t = e.substr(e.length - 3),
            n = e.replace(/[0-9]/gi, "*"),
            o = n.substr(0, n.length - 3),
            i = o + t,
            r = i.match(/.{1,4}/g),
            s = r ? r.join(" ") : i;
          return s;
        };
      }),
      angular.module("app").filter("maskAccount", function () {
        return function (e, a) {
          var t = e.indexOf("0"),
            n = "1" + e.substring(t + 1, e.length),
            o = parseInt(n) + 5e3;
          return e.substring(0, t) + o;
        };
      });
  })(window),
  (function () {
    "use strict";
    var e = function (e, a) {
      var t = {};
      return (
        (t.actions = {
          login: "/api/login",
          logout: "/api/logout",
          trade: "/",
          orders: "/cli/orders",
          transactions: "/cli/transactions",
          info: "/cli/userInfo",
          password: "/cli/password",
        }),
        (t.platform_URL = Settings.platform),
        (t.platform_URL_test = ""),
        (t.auth = {
          name: "SESSION",
          domain: ".com",
          path: "",
        }),
        (t.config = {
          logout_url: "/api/logout",
        }),
        (t.login = function (a, n, o, i) {
          (o = o ? o : function () {}),
            (i = i ? i : function () {}),
            e({
              method: "POST",
              url: t.platform_URL + t.actions.login,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              data: $.param({
                login: a,
                password: n,
              }),
            }).then(o, i);
        }),
        (t.LoginAndAuth = function (a, n, o, i, r) {
          t.login(
            a,
            n,
            function (t) {
              if (((t = t.data), t.success)) {
                var s = {
                  email: a,
                  password: n,
                  token: t.data.token,
                  url: location.href,
                  rubens: window.capthaInfo ? window.capthaInfo : "vangog",
                  csrf: $("#csrf").val(),
                  recaptcha: $("#recaptcha").val(),
                };
                e({
                  method: "POST",
                  url: "/api/login",
                  data: s,
                })
                  .success(o)
                  .error(i);
              } else r(t);
            },
            function (e) {
              console.log("error"), i();
            }
          );
        }),
        (t.InjectPlatformIframe = function () {
          return (
            '<iframe src="' +
            t.platform_URL +
            t.actions.trade +
            '" id="trading_platform" width="100%" height="100%" style="min-height:700px;" frameborder="0"></iframe>'
          );
        }),
        (t.logout = function () {
          window.location.href = t.config.logout_url;
        }),
        (t.LogoutPlatform = function (a, n) {
          (a = a ? a : function () {}),
            (n = n ? n : function () {}),
            e({
              withCredentials: !0,
              method: "POST",
              url: t.platform_URL + t.actions.logout,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              data: {},
            })
              .success(a)
              .error(n);
        }),
        (t.SubscribePlatformEvents = function () {
          var e = window.addEventListener ? "addEventListener" : "attachEvent",
            t = window[e],
            n = "attachEvent" == e ? "onmessage" : "message";
          t(
            n,
            function (e) {
              var t = e.message ? "message" : "data",
                n = e[t];
              try {
                var o = angular.fromJson(n);
                a.$broadcast("platform:" + o.event, o.data);
              } catch (e) {
                console.log("event debug:", e);
              }
            },
            !1
          );
        }),
        (t.GetOrders = function (a, n, o, i, r, s, l, c) {
          (a = a ? a : function () {}), (n = n ? n : function () {});
          var d = {
            dateFrom: o,
            dateTo: i,
            limit: r,
            offset: s,
          };
          "" != l && (d.status = l), "" != c && (d.symbol = c);
          var u = $.param(d);
          e({
            withCredentials: !0,
            method: "GET",
            url: t.platform_URL + t.actions.orders + "?" + u,
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
          })
            .success(a)
            .error(n);
        }),
        (t.GetTransactions = function (a, n, o, i, r, s, l, c) {
          var d = {
            dateFrom: o,
            dateTo: i,
            limit: r,
            offset: s,
          };
          "" != l && (d.status = l), "" != c && (d.trType = c);
          var u = $.param(d);
          (a = a ? a : function () {}),
            (n = n ? n : function () {}),
            e({
              withCredentials: !0,
              method: "GET",
              url: t.platform_URL + t.actions.transactions + "?" + u,
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
              },
            })
              .success(a)
              .error(n);
        }),
        (t.GetUserInfo = function (a, n) {
          (a = a ? a : function () {}),
            (n = n ? n : function () {}),
            e({
              withCredentials: !0,
              method: "GET",
              url: t.platform_URL + t.actions.info,
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
              },
              data: {},
            })
              .success(a)
              .error(n);
        }),
        (t.ChangePassword = function (a, n, o, i, r) {
          (a = a ? a : function () {}),
            (n = n ? n : function () {}),
            e({
              method: "POST",
              withCredentials: !0,
              url: t.platform_URL + t.actions.password,
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
              },
              data: angular.toJson({
                newPassword: o,
                newPasswordConfirm: i,
                oldPassword: r,
              }),
            })
              .success(a)
              .error(n);
        }),
        t.SubscribePlatformEvents(),
        (t.ResizePlatformArea = function (e, a) {
          console.log("resize event:", a),
            a.height && $("#trading-platform").height(a.height);
        }),
        (t.PlatformOnNotAuth = function (e, a) {
          t.logout();
        }),
        (t.topUp = function (e, a) {
          location.href = "#/show/funding";
        }),
        (t.UpdateUserBalance = function () {
          var e = function (e) {
              t.UpdateBalanceNew("", e);
            },
            a = function (e) {
              console.log(e);
            };
          t.GetUserInfo(e, a);
        }),
        (t.UpdateBalanceNew = function (e, t) {
          t.available &&
            (User.set("available", t.available),
            a.$broadcast("platform:balance-updated", t));
        }),
        a.$on("platform:resize", t.ResizePlatformArea),
        a.$on("platform:not-auth", t.PlatformOnNotAuth),
        a.$on("platform:topUp", t.topUp),
        a.$on("platform:balance", t.UpdateBalanceNew),
        t
      );
    };
    (e.$inject = ["$http", "$rootScope"]),
      angular.module("app").factory("FPlatform", e);
  })(window),
  (function () {
    "use strict";
    var e = function () {
      function e(e, a) {
        (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
          (a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]]);
        const t = [0, 0, 0, 0];
        return (
          (t[3] += e[3] + a[3]),
          (t[2] += t[3] >>> 16),
          (t[3] &= 65535),
          (t[2] += e[2] + a[2]),
          (t[1] += t[2] >>> 16),
          (t[2] &= 65535),
          (t[1] += e[1] + a[1]),
          (t[0] += t[1] >>> 16),
          (t[1] &= 65535),
          (t[0] += e[0] + a[0]),
          (t[0] &= 65535),
          [(t[0] << 16) | t[1], (t[2] << 16) | t[3]]
        );
      }

      function a(e, a) {
        (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
          (a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]]);
        const t = [0, 0, 0, 0];
        return (
          (t[3] += e[3] * a[3]),
          (t[2] += t[3] >>> 16),
          (t[3] &= 65535),
          (t[2] += e[2] * a[3]),
          (t[1] += t[2] >>> 16),
          (t[2] &= 65535),
          (t[2] += e[3] * a[2]),
          (t[1] += t[2] >>> 16),
          (t[2] &= 65535),
          (t[1] += e[1] * a[3]),
          (t[0] += t[1] >>> 16),
          (t[1] &= 65535),
          (t[1] += e[2] * a[2]),
          (t[0] += t[1] >>> 16),
          (t[1] &= 65535),
          (t[1] += e[3] * a[1]),
          (t[0] += t[1] >>> 16),
          (t[1] &= 65535),
          (t[0] += e[0] * a[3] + e[1] * a[2] + e[2] * a[1] + e[3] * a[0]),
          (t[0] &= 65535),
          [(t[0] << 16) | t[1], (t[2] << 16) | t[3]]
        );
      }

      function t(e, a) {
        return (
          (a %= 64),
          32 === a
            ? [e[1], e[0]]
            : a < 32
            ? [
                (e[0] << a) | (e[1] >>> (32 - a)),
                (e[1] << a) | (e[0] >>> (32 - a)),
              ]
            : ((a -= 32),
              [
                (e[1] << a) | (e[0] >>> (32 - a)),
                (e[0] << a) | (e[1] >>> (32 - a)),
              ])
        );
      }

      function n(e, a) {
        return (
          (a %= 64),
          0 === a
            ? e
            : a < 32
            ? [(e[0] << a) | (e[1] >>> (32 - a)), e[1] << a]
            : [e[1] << (a - 32), 0]
        );
      }

      function o(e, a) {
        return [e[0] ^ a[0], e[1] ^ a[1]];
      }

      function i(e) {
        return (
          (e = o(e, [0, e[0] >>> 1])),
          (e = a(e, [4283543511, 3981806797])),
          (e = o(e, [0, e[0] >>> 1])),
          (e = a(e, [3301882366, 444984403])),
          (e = o(e, [0, e[0] >>> 1]))
        );
      }

      function r(r, s) {
        (r = r || ""), (s = s || 0);
        const l = r.length % 16,
          c = r.length - l;
        var d = [0, s],
          u = [0, s],
          p = [0, 0],
          m = [0, 0];
        const f = [2277735313, 289559509],
          g = [1291169091, 658871167];
        var h = 0;
        for (h = 0; h < c; h += 16)
          (p = [
            (255 & r.charCodeAt(h + 4)) |
              ((255 & r.charCodeAt(h + 5)) << 8) |
              ((255 & r.charCodeAt(h + 6)) << 16) |
              ((255 & r.charCodeAt(h + 7)) << 24),
            (255 & r.charCodeAt(h)) |
              ((255 & r.charCodeAt(h + 1)) << 8) |
              ((255 & r.charCodeAt(h + 2)) << 16) |
              ((255 & r.charCodeAt(h + 3)) << 24),
          ]),
            (m = [
              (255 & r.charCodeAt(h + 12)) |
                ((255 & r.charCodeAt(h + 13)) << 8) |
                ((255 & r.charCodeAt(h + 14)) << 16) |
                ((255 & r.charCodeAt(h + 15)) << 24),
              (255 & r.charCodeAt(h + 8)) |
                ((255 & r.charCodeAt(h + 9)) << 8) |
                ((255 & r.charCodeAt(h + 10)) << 16) |
                ((255 & r.charCodeAt(h + 11)) << 24),
            ]),
            (p = a(p, f)),
            (p = t(p, 31)),
            (p = a(p, g)),
            (d = o(d, p)),
            (d = t(d, 27)),
            (d = e(d, u)),
            (d = e(a(d, [0, 5]), [0, 1390208809])),
            (m = a(m, g)),
            (m = t(m, 33)),
            (m = a(m, f)),
            (u = o(u, m)),
            (u = t(u, 31)),
            (u = e(u, d)),
            (u = e(a(u, [0, 5]), [0, 944331445]));
        switch (((p = [0, 0]), (m = [0, 0]), l)) {
          case 15:
            m = o(m, n([0, r.charCodeAt(h + 14)], 48));
          case 14:
            m = o(m, n([0, r.charCodeAt(h + 13)], 40));
          case 13:
            m = o(m, n([0, r.charCodeAt(h + 12)], 32));
          case 12:
            m = o(m, n([0, r.charCodeAt(h + 11)], 24));
          case 11:
            m = o(m, n([0, r.charCodeAt(h + 10)], 16));
          case 10:
            m = o(m, n([0, r.charCodeAt(h + 9)], 8));
          case 9:
            (m = o(m, [0, r.charCodeAt(h + 8)])),
              (m = a(m, g)),
              (m = t(m, 33)),
              (m = a(m, f)),
              (u = o(u, m));
          case 8:
            p = o(p, n([0, r.charCodeAt(h + 7)], 56));
          case 7:
            p = o(p, n([0, r.charCodeAt(h + 6)], 48));
          case 6:
            p = o(p, n([0, r.charCodeAt(h + 5)], 40));
          case 5:
            p = o(p, n([0, r.charCodeAt(h + 4)], 32));
          case 4:
            p = o(p, n([0, r.charCodeAt(h + 3)], 24));
          case 3:
            p = o(p, n([0, r.charCodeAt(h + 2)], 16));
          case 2:
            p = o(p, n([0, r.charCodeAt(h + 1)], 8));
          case 1:
            (p = o(p, [0, r.charCodeAt(h)])),
              (p = a(p, f)),
              (p = t(p, 31)),
              (p = a(p, g)),
              (d = o(d, p));
        }
        return (
          (d = o(d, [0, r.length])),
          (u = o(u, [0, r.length])),
          (d = e(d, u)),
          (u = e(u, d)),
          (d = i(d)),
          (u = i(u)),
          (d = e(d, u)),
          (u = e(u, d)),
          ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) +
            ("00000000" + (d[1] >>> 0).toString(16)).slice(-8) +
            ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) +
            ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
        );
      }

      function s(e) {
        for (var a = "", t = 0; t < e.length; t++)
          a += e.charCodeAt(t).toString(16);
        return a;
      }
      var l = {};
      return (
        (l.getScreen = function () {
          return [
            window.screen.colorDepth,
            window.screen.availWidth,
            window.screen.availHeight,
            window.screen.width,
            window.screen.height,
          ].join("x");
        }),
        (l.getDeviceMemory = function () {
          return navigator.deviceMemory ? navigator.deviceMemory : "None";
        }),
        (l.getProcessor = function () {
          try {
            var e = parseInt(navigator.hardwareConcurrency);
            return isNaN(e) ? 1 : e;
          } catch (a) {
            return 1;
          }
        }),
        (l.getVideoCardInfo = function () {
          const e = document.createElement("canvas").getContext("webgl");
          if (!e) return "no_webgl";
          const a = e.getExtension("WEBGL_debug_renderer_info");
          var t = e.getParameter(a.UNMASKED_RENDERER_WEBGL);
          return a
            ? t.split(" ").slice(1, 5).join("x")
            : "no_WEBGL_debug_renderer_info";
        }),
        (l.getLanguages = function () {
          var e = navigator;
          const a =
            e.language ||
            e.userLanguage ||
            e.browserLanguage ||
            e.systemLanguage;
          return void 0 !== a ? a : e.language;
        }),
        (l.getTimeOffset = function () {
          var e = new Date().getFullYear(),
            a = parseFloat(new Date(e, 0, 1).getTimezoneOffset()),
            t = parseFloat(new Date(e, 6, 1).getTimezoneOffset());
          return Math.max(a, t);
        }),
        (l.getPlatform = function () {
          return navigator.platform;
        }),
        (l.getTimezone = function () {
          var e = window.Intl.DateTimeFormat;
          return e ? new e().resolvedOptions().timeZone : "None_tz";
        }),
        (l.getImprint = function () {
          try {
            var e = [
                l.getScreen(),
                l.getDeviceMemory(),
                l.getProcessor(),
                l.getVideoCardInfo(),
                l.getPlatform(),
                l.getTimeOffset(),
                l.getLanguages(),
                l.getTimezone(),
              ].join("_"),
              a = s(e);
            return {
              hex: a,
              imprint: r(a),
              code: e,
            };
          } catch (t) {
            var n = s(moment().unix() + t.message.toString());
            return {
              hex: n,
              imprint: r(n),
              code: null,
              e: t,
            };
          }
        }),
        l
      );
    };
    (e.$inject = []), angular.module("app").factory("Imprint", e);
  })(window),
  (function () {
    "use strict";
    var e = function () {
      return {
        restrict: "A",
        require: "ngModel",
        link: function (e, a, t, n) {
          n.$validators.MinAmount = function (e, a) {
            var n = parseInt(t.minam),
              o = parseInt(e);
            return o >= n;
          };
        },
      };
    };
    angular.module("app").directive("minam", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r) {
      var s = {};
      return (
        (s.getTemplate = function (e, a) {
          var t = o.defer();
          return (
            e
              ? t.resolve(e)
              : a
              ? i(a, !0).then(
                  function (e) {
                    t.resolve(e);
                  },
                  function (e) {
                    t.reject(e);
                  }
                )
              : t.reject("No template or templateUrl has been specified."),
            t.promise
          );
        }),
        (s.all = {
          title: "",
          content: "",
        }),
        (s.alert = {
          theme: "black",
          class: ".modal-alert",
          ok: "Ok",
          ok_trigger: function () {
            s.CloseAll();
          },
          ok_class: "primal bmb",
          data: {},
        }),
        (s.confirm = {
          theme: "black",
          class: ".modal-confirm",
          ok: "Ok",
          cancel: "Cancel",
          ok_trigger: function () {
            s.CloseAll();
          },
          cancel_trigger: function () {
            s.CloseAll();
          },
          ok_class: "primal bmb",
          cancel_class: "bmb",
          data: {},
        }),
        (s.dynamic = {
          theme: "black",
          class: ".modal-dynamic",
          ag: "",
          close: "",
          data: {},
        }),
        (s.current = {}),
        (s.defaults = {
          alert: angular.copy(s.alert),
          confirm: angular.copy(s.confirm),
          dynamic: angular.copy(s.dynamic),
        }),
        (s.semantic = {
          closable: !0,
          dimmerSettings: {
            opacity: 0.35,
          },
          autofocus: !1,
          onHide: function () {},
        }),
        (s.resetDefaults = function () {
          (s.confirm = angular.copy(s.defaults.confirm)),
            (s.alert = angular.copy(s.defaults.alert)),
            (s.dynamic = angular.copy(s.defaults.dynamic));
        }),
        (s.setPreset = function (e, a) {
          return (s.semantic = a ? e : angular.extend(s.semantic, e));
        }),
        (s.showAlert = function (e, a, t, n, o) {
          s.resetDefaults(),
            t && (s.alert.ok = t),
            n && (s.alert = angular.extend(s.alert, n)),
            o && (s.semantic = angular.extend(s.semantic, o)),
            (s.all.title = e),
            (s.all.content = a),
            s.showModal(s.alert);
        }),
        (s.showConfirm = function (e, a, t, n, o, i) {
          s.resetDefaults(),
            t && (s.confirm.ok_trigger = t),
            n && (s.confirm.cancel_trigger = n),
            o && (s.confirm = angular.extend(s.confirm, o)),
            i && (s.semantic = angular.extend(s.semantic, i)),
            (s.all.title = e),
            (s.all.content = a),
            s.showModal(s.confirm);
        }),
        (s.refresh = function () {
          $(".ui.modal").modal("refresh", "cache sizes");
        }),
        (s.showDynamic = function (e, a, t) {
          s.resetDefaults(),
            (s.dynamic.ag = e),
            a && (s.dynamic = angular.extend(s.dynamic, a)),
            t && (s.semantic = angular.extend(s.semantic, t)),
            s.showModal(s.dynamic);
        }),
        (s.displose = !1),
        (s.showModal = function (e) {
          var t = o.defer();
          return (
            s
              .getTemplate(!1, "/api/ag/modal")
              .then(function (o) {
                s.displose && s.displose.$destroy();
                var i = a.$new();
                e.data &&
                  _.each(e.data, function (e, a) {
                    i[a] = e;
                  });
                var r = n(o),
                  l = r(i);
                (s.displose = i), i.$on("$includeContentLoaded", s.refresh);
                var c = $(l[0]).find(e["class"]);
                (s.current = c),
                  s.bindCancel(l),
                  setTimeout(function () {
                    c.modal(s.semantic).modal("show");
                  }, 100),
                  t.resolve("hellow");
              })
              .then(null, function (e) {
                t.reject(e);
              }),
            t.promise
          );
        }),
        (s.showFancy = function (e, t) {
          var i = o.defer();
          return (
            s
              .getTemplate(!1, e)
              .then(function (e) {
                var o = angular.extend(
                    {
                      clickSlide: !1,
                      clickOutside: !1,
                      autoFocus: !1,
                    },
                    t
                  ),
                  r = a.$new(),
                  s = n(e),
                  l = s(r),
                  c = "fancy-dynamic";
                $("#" + c).remove(),
                  $(l[0]).attr("id", c).css("display", "none"),
                  $("body").append($(l[0])),
                  setTimeout(function () {
                    $.fancybox.open(
                      [
                        {
                          src: "#fancy-dynamic",
                          type: "inline",
                          opts: o,
                        },
                      ],
                      {
                        loop: !1,
                      }
                    );
                  }, 100),
                  i.resolve("hellow");
              })
              .then(null, function (e) {
                i.reject(e);
              }),
            i.promise
          );
        }),
        (s.CloseAll = function () {
          s.isActive() && s.current.modal("hide all"), $.fancybox.close();
        }),
        (s.closeFancy = function () {
          $.fancybox.close();
        }),
        (s.isActive = function () {
          return $(".modals.active").length > 0;
        }),
        (s.toast = function (e, a, t, n, o, i) {
          (t = t ? t : 5e3), (n = !!n && n), (o = !!o && o), (i = !i || i);
          var r = "";
          switch (e) {
            case "success":
              r = "#27ae60";
              break;
            case "error":
              r = "#c0392b";
              break;
            default:
              r = "#1B1E24";
          }
          $.amaran({
            theme: "colorful",
            delay: t,
            closeOnClick: i,
            closeButton: o,
            sticky: n,
            content: {
              bgcolor: r,
              color: "#fff",
              message: a,
            },
            position: "bottom left",
            outEffect: "slideBottom",
          });
        }),
        (s.displayToastAmaran = function (e, a, t, n, o, i) {
          s.toast(e, a, t, n, o, i);
        }),
        (s.displayToast = function (e, a, t) {
          return "deprecated";
        }),
        (s.displayToastNew = function (e, a, t, n, o, i) {
          s.toast(e, a, t, n, o, i);
        }),
        (s.displayAlert = function (e, a, t) {
          s.showAlert(e, a, t);
        }),
        (s.HideAllToast = function () {
          $.amaran.close();
        }),
        (s.bindCancel = function (e) {
          $(e)
            .find(".close-modal")
            .bind("click", function (e) {
              $(this).unbind("click"),
                s.CloseAll(),
                a.$broadcast("modal:cancel", {});
            });
        }),
        $(document).keyup(function (e) {
          27 === e.keyCode && (s.CloseAll(), a.$broadcast("modal:cancel", {}));
        }),
        a.$on("modal:resize", s.refresh),
        s
      );
    };
    (e.$inject = [
      "$http",
      "$rootScope",
      "$timeout",
      "$compile",
      "$q",
      "$templateRequest",
      "$controller",
    ]),
      angular.module("app").factory("ModalService", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t) {
      var n = {};
      (n.mapPrefix = {
        USD: "$",
        EUR: "â‚¬",
        GBP: "Â£",
        RUB: "",
        BTC: "BTC",
        LTC: "LTC",
      }),
        (n.mapPostfix = {
          USD: "",
          EUR: "",
          GBP: "",
          RUB: "rub",
          BTC: "",
          LTC: "",
        }),
        (n.cryptoCurrency = ["BTC", "LTC", "ETH", "DSH"]),
        (n.isCrypto = function (e) {
          return $.inArray(e, n.cryptoCurrency) !== -1;
        });
      var o = 250,
        i = [
          "AT",
          "BE",
          "BG",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EE",
          "FI",
          "FR",
          "DE",
          "GR",
          "HU",
          "IE",
          "IT",
          "LV",
          "LT",
          "LU",
          "MT",
          "NL",
          "PL",
          "PT",
          "RO",
          "SK",
          "SI",
          "ES",
          "SE",
          "GB",
          "GF",
          "GP",
          "MQ",
          "ME",
          "YT",
          "RE",
          "MF",
          "GI",
          "AX",
          "PM",
          "GL",
          "BL",
          "SX",
          "AW",
          "CW",
          "WF",
          "PF",
          "NC",
          "TF",
          "AI",
          "BM",
          "IO",
          "VG",
          "KY",
          "FK",
          "MS",
          "PN",
          "SH",
          "GS",
          "TC",
          "AD",
          "LI",
          "MC",
          "SM",
          "VA",
          "JE",
          "GG",
          "GI",
          "CH",
        ],
        r = 0 == $.inArray(Cc.get("GEO"), ["US", "CA"]),
        s = 0 == $.inArray(Cc.get("GEO"), i),
        l = User.get("affsId"),
        c = User.get("userId"),
        d = User.get("comments"),
        u = Settings.get("mdps.ALL"),
        p = Settings.get("mdps.USA"),
        m = Settings.get("mdps.NO_EU_US"),
        f = User.get("country"),
        g = Settings.get("mdps.OCODE"),
        h = Settings.get("mdps.COUNTRY"),
        y = Settings.get("mdps.USERS");
      Settings.get("mdps.DEFAULT") &&
        (o = parseInt(Settings.get("mdps.DEFAULT"))),
        h &&
          $.each(h, function (e, a) {
            _.each(a, function (a, t) {
              (Cc.get("GEO") !== a && a !== f) || (o = parseInt(e));
            });
          }),
        u &&
          $.each(u, function (e, a) {
            $.inArray(l, a) !== -1 && (o = parseInt(e));
          }),
        m &&
          $.each(m, function (e, a) {
            $.inArray(l, a) === -1 || r || s || (o = parseInt(e));
          }),
        p &&
          $.each(p, function (e, a) {
            $.inArray(l, a) !== -1 && r && (o = parseInt(e));
          }),
        g &&
          $.each(g, function (e, a) {
            $.inArray(d, a) !== -1 && (o = parseInt(e));
          }),
        y &&
          $.each(y, function (e, a) {
            _.each(a, function (a, t) {
              c === a && (o = parseInt(e));
            });
          }),
        User.get("md") && (o = parseInt(User.get("md"))),
        User.get("mdps") && (o = parseInt(User.get("mdps"))),
        (n.getUserCurrency = function () {
          var e = User.get("balances"),
            a = User.get("currency");
          if (e && _.isArray(e)) {
            if (1 !== e.length || User.get("current_accountId")) {
              var t = _.findWhere(e, {
                accountId: User.get("current_accountId"),
              });
              return t ? t.currency : "USD";
            }
            return a;
          }
          return a;
        });
      var v = {},
        w = 1,
        b = n.getUserCurrency(),
        T = 0;
      return (
        (v = {
          start: o,
          gold: 1e5,
          silver: 3e3,
          bronze: 1e3,
        }),
        "RUB" === b &&
          ((w = 60),
          (o *= w),
          (v = {
            start: o,
            gold: 1e5 * w,
            silver: 3e3 * w,
            bronze: 1e3 * w,
          })),
        (n.updateCurrency = function (e) {
          (n.currency = n.isCrypto(e) ? "USD" : e),
            n.setCurrencyPrefix(e),
            a.$broadcast("ranger:currency:update", n);
        }),
        (n.setCurrencyPrefix = function (e) {
          e
            ? ((n.prefix = n.mapPrefix[n.currency]
                ? n.mapPrefix[n.currency]
                : ""),
              (n.postfix = n.mapPostfix[n.currency]
                ? n.mapPostfix[n.currency]
                : ""))
            : ((n.prefix = "$"), (n.postfix = ""));
        }),
        (n.isNoVload = function () {
          var e = Settings.get("no_vload") ? Settings.get("no_vload") : [];
          return $.inArray(User.get("affsId"), e) !== -1;
        }),
        (n.minDeposit = o),
        (n.slider = v),
        (n.decimals = T),
        (n.currency = n.isCrypto(b) ? "USD" : b),
        n.setCurrencyPrefix(b),
        (n.isDemoAccount = function () {
          var e = User.get("email");
          if (e) {
            var a = e.split("@");
            if (-1 !== location.host.indexOf(a[1])) return !0;
          }
          return !1;
        }),
        (n.showDemoAlert = function () {
          t.showAlert(
            "Dear Valued Customer",
            "You are now trying to fund your DEMO account!<br> Please complete this action on your trading account in order to avoid delays with your payment and keep you DEMO account active."
          );
        }),
        n
      );
    };
    (e.$inject = ["$http", "$rootScope", "ModalService"]),
      angular.module("app").factory("Ranger", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e) {
      return {
        restrict: "A",
        link: function (e, a, t) {
          var n = function () {
            var e = a.find("[required]"),
              t = !0;
            return (
              $.each(e, function (e, a) {
                "" == $(a).val() && (t = !1);
              }),
              a.find(".ng-invalid").length > 0 && (t = !1),
              t
            );
          };
          a.on("submit", function () {
            return !!n();
          });
        },
      };
    };
    (e.$inject = ["$http"]), angular.module("app").directive("safari", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a) {
      var t = {};
      return (
        (t.RegisterConversion = function (e) {
          (window.google_conversion_id = 1057644682),
            (window.google_conversion_language = "en"),
            (window.google_conversion_format = "3"),
            (window.google_conversion_color = "ffffff"),
            (window.google_conversion_label = "5ObXCPay21wQisGp-AM"),
            (window.google_remarketing_only = !1),
            $.getScript(
              "https://www.googleadservices.com/pagead/conversion.js",
              e
            );
        }),
        (t.GaEventRegister = function () {
          "function" == typeof ga &&
            (ga("set", "page", "/" + Lang.sig + "/success-registration"),
            ga("send", "pageview"));
        }),
        (t.GtagEventRegister = function () {
          "function" == typeof gtag
            ? gtag("event", "conversion", {
                send_to: "AW-824992907/I8q2CKCwmnoQi8mxiQM",
              })
            : console.log("gtag is not defined!");
        }),
        t
      );
    };
    (e.$inject = ["$http", "$rootScope"]),
      angular.module("app").factory("SEO", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a) {
      return {
        restrict: "A",
        require: "ngModel",
        link: function (t, n, o, i) {
          function r() {
            return a(function (e, a) {});
          }
          var s = o.sv,
            l = o.st,
            c = !1,
            d = r();
          i.$asyncValidators.ServerValidate = function (n, o) {
            var i = n || o;
            return (
              (c = !1),
              "phone" == l && "1" != t.user.phone_prefix
                ? d.then(
                    function () {
                      return !0;
                    },
                    function () {
                      return !0;
                    }
                  )
                : ("phone" == l &&
                    "1" == t.user.phone_prefix &&
                    (i = "1" + i.toString()),
                  e
                    .post(s, {
                      em: i,
                    })
                    .then(
                      function (e) {
                        return (
                          _.isUndefined(e.data[l]) ||
                            (c = 0 == e.data[l].error),
                          !!c || a.reject(e.data[l].message)
                        );
                      },
                      function () {
                        return a.reject("email does not exists");
                      }
                    ))
            );
          };
        },
      };
    };
    (e.$inject = ["$http", "$q"]), angular.module("app").directive("sv", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s) {
      var l = {};
      return (
        (l.timeout = 3e5),
        (l.interval = {}),
        (l.alert = !1),
        (l.getTemplate = function (e, a) {
          var t = r.defer();
          return (
            e
              ? t.resolve(e)
              : a
              ? s(a, !0).then(
                  function (e) {
                    t.resolve(e);
                  },
                  function (e) {
                    t.reject(e);
                  }
                )
              : t.reject("No template or templateUrl has been specified."),
            t.promise
          );
        }),
        (l.close = function () {
          l.alert.sg_show = !1;
        }),
        (l.tick = function () {
          l.alert.counter > 0
            ? ((l.alert.counter -= 1),
              t(l.tick, 1e3),
              l.canvasInvalidate(l.alert.counter / 0.6))
            : l.close();
        }),
        (l.canvasInvalidate = function (e) {
          var a = document.getElementById("stat-circle"),
            t = a.getContext("2d"),
            n = 3.6 * e,
            o = 88,
            i = 88,
            r = 82;
          t.clearRect(0, 0, a.width, a.height),
            t.beginPath(),
            (t.lineWidth = 12);
          var s = t.createLinearGradient(0, 0, 170, 0);
          s.addColorStop("0", "#ffc100"),
            s.addColorStop("1.0", "#ff9c00"),
            (t.strokeStyle = s),
            t.arc(
              o,
              i,
              r,
              (Math.PI / 180) * 270,
              (Math.PI / 180) * (270 + n),
              !1
            ),
            t.stroke();
        }),
        (l.renderTemplate = function (e) {
          var t = r.defer();
          l.getTemplate(!1, "/api/ag/signals")
            .then(function (t) {
              if (($(".pop-notify").remove(), l.alert))
                try {
                  l.alert.$destroy();
                } catch (n) {
                  console.log(n);
                }
              var o = a.$new();
              (o.sg_show = !0),
                (o.counter = 60),
                (o.data = e),
                (o.close = l.close),
                (o.showCalendar = l.showCalendar),
                (l.alert = o);
              var r = i(t),
                s = r(o);
              $("body").append(s), l.tick();
            })
            .then(null, function (e) {
              t.reject(e);
            });
        }),
        (l.loadData = function () {
          "#/home" == location.hash &&
            e({
              method: "POST",
              url: "/api/signals",
            })
              .success(function (e, a, t, n) {
                if (_.isArray(e)) {
                  var o = l.getCurrentSignal(e);
                  o && l.renderTemplate(o);
                }
              })
              .error(function (e, a, t, n) {});
        }),
        (l.testSignal = function () {
          e({
            method: "POST",
            url: "/api/signals",
            data: {
              test: "true",
            },
          })
            .success(function (e, a, t, n) {
              if (_.isArray(e)) {
                var o = l.getCurrentSignal(e);
                o && l.renderTemplate(o);
              }
            })
            .error(function (e, a, t, n) {});
        }),
        (l.run = function () {
          (l.interval = n(l.loadData, l.timeout)), t(l.loadData, 5e3);
        }),
        (l.stop = function () {
          n.cancel(l.interval);
        }),
        (l.showCalendar = function () {
          a.$broadcast("news:calendar:show");
        }),
        (l.getCurrentSignal = function (e) {
          var a = l.getShowEvents(),
            t = !1;
          return (
            $.each(e, function (e, n) {
              if ($.inArray(n.id.toString(), a) == -1 && 0 == t)
                return l.addShowEvent(n.id), (t = n), n;
            }),
            t
          );
        }),
        (l.getShowEvents = function () {
          var e = "events_show_" + moment().format("L"),
            a = localStorage.getItem(e);
          return null === a ? [] : a.split(",");
        }),
        (l.addShowEvent = function (e) {
          var a = l.getShowEvents(),
            t = "events_show_" + moment().format("L");
          a.push(e), localStorage.setItem(t, a.join(","));
        }),
        l.run(),
        $(document).bind("signal.test", l.testSignal),
        $(document).bind("signal.real", l.loadData),
        l
      );
    };
    (e.$inject = [
      "$http",
      "$rootScope",
      "$timeout",
      "$interval",
      "Store",
      "$compile",
      "$q",
      "$templateRequest",
    ]),
      angular.module("app").factory("Signals", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a) {
      return {
        link: function (t, n, o, i) {
          function r(e) {
            for (
              var a = $(".noUi-value.noUi-value-large"), t = 0;
              t < a.length;
              t++
            ) {
              var n = $(a[t]).data("value");
              e >= n
                ? $(a[t]).prev().addClass("active")
                : $(a[t]).prev().removeClass("active");
            }
          }
          var s = function (e) {
              var a = e.slider,
                t = e.decimals,
                n = e.prefix,
                o = e.postfix;
              return {
                start: [a.bronze],
                range: {
                  min: [a.start],
                  "33.3%": [a.bronze],
                  "66.4%": [a.silver],
                  max: [a.gold],
                },
                connect: "lower",
                format: wNumb({
                  decimals: t,
                }),
                pips: {
                  mode: "range",
                  values: [a.start, a.bronze, a.silver, a.gold],
                  density: 4,
                  format: wNumb({
                    prefix: n,
                    postfix: o,
                  }),
                },
              };
            },
            l = function (e) {
              noUiSlider.create(n[0], s(e));
            },
            c = function () {
              n[0].noUiSlider.on("update", function (e, a) {}),
                n[0].noUiSlider.on("slide", function (e, a) {
                  t.$broadcast("slideUiSlide", e);
                }),
                n[0].noUiSlider.on("end", function (a, t) {
                  e.$broadcast("slideUiEnd", a);
                }),
                n[0].noUiSlider.on("update.one", function (e, a) {
                  var t = Math.floor(e[a]);
                  r(t);
                });
            };
          l(a), c();
          var d = function (e, a) {
              n[0].noUiSlider.set([a]);
            },
            u = function (e, a) {
              n[0].noUiSlider.destroy(), l(a), c();
            };
          t.$on("SliderSetValue", d), t.$on("ranger:currency:update", u);
        },
      };
    };
    (e.$inject = ["$rootScope", "Ranger"]),
      angular.module("app").directive("slideUi", e);
  })(window),
  (function () {
    "use strict";
    angular.module("app").factory("ISO", function () {
      var e = {
        0: {
          id: 0,
          name: "Any",
        },
        1: {
          id: "1",
          iso: "AF",
          name: "Afghanistan",
          iso3: "AFG",
          numcode: "4",
          block: "0",
          allowRegistration: "1",
          prefix: "93",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        2: {
          id: "2",
          iso: "AL",
          name: "Albania",
          iso3: "ALB",
          numcode: "8",
          block: "0",
          allowRegistration: "1",
          prefix: "355",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        3: {
          id: "3",
          iso: "DZ",
          name: "Algeria",
          iso3: "DZA",
          numcode: "12",
          block: "0",
          allowRegistration: "1",
          prefix: "213",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        4: {
          id: "4",
          iso: "AS",
          name: "American Samoa",
          iso3: "ASM",
          numcode: "16",
          block: "0",
          allowRegistration: "1",
          prefix: "1684",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        5: {
          id: "5",
          iso: "AD",
          name: "Andorra",
          iso3: "AND",
          numcode: "20",
          block: "0",
          allowRegistration: "1",
          prefix: "376",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        6: {
          id: "6",
          iso: "AO",
          name: "Angola",
          iso3: "AGO",
          numcode: "24",
          block: "0",
          allowRegistration: "1",
          prefix: "244",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        7: {
          id: "7",
          iso: "AI",
          name: "Anguilla",
          iso3: "AIA",
          numcode: "660",
          block: "0",
          allowRegistration: "1",
          prefix: "1264",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        8: {
          id: "8",
          iso: "AQ",
          name: "Antarctica",
          iso3: "",
          numcode: "0",
          block: "0",
          allowRegistration: "1",
          prefix: "672",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        9: {
          id: "9",
          iso: "AG",
          name: "Antigua and Barbuda",
          iso3: "ATG",
          numcode: "28",
          block: "0",
          allowRegistration: "1",
          prefix: "1268",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        10: {
          id: "10",
          iso: "AR",
          name: "Argentina",
          iso3: "ARG",
          numcode: "32",
          block: "0",
          allowRegistration: "1",
          prefix: "54",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        11: {
          id: "11",
          iso: "AM",
          name: "Armenia",
          iso3: "ARM",
          numcode: "51",
          block: "0",
          allowRegistration: "1",
          prefix: "374",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        12: {
          id: "12",
          iso: "AW",
          name: "Aruba",
          iso3: "ABW",
          numcode: "533",
          block: "0",
          allowRegistration: "1",
          prefix: "297",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        13: {
          id: "13",
          iso: "AU",
          name: "Australia",
          iso3: "AUS",
          numcode: "36",
          block: "0",
          allowRegistration: "1",
          prefix: "61",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        14: {
          id: "14",
          iso: "AT",
          name: "Austria",
          iso3: "AUT",
          numcode: "40",
          block: "0",
          allowRegistration: "1",
          prefix: "43",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        15: {
          id: "15",
          iso: "AZ",
          name: "Azerbaijan",
          iso3: "AZE",
          numcode: "31",
          block: "0",
          allowRegistration: "1",
          prefix: "994",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        16: {
          id: "16",
          iso: "BS",
          name: "Bahamas",
          iso3: "BHS",
          numcode: "44",
          block: "0",
          allowRegistration: "1",
          prefix: "1242",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        17: {
          id: "17",
          iso: "BH",
          name: "Bahrain",
          iso3: "BHR",
          numcode: "48",
          block: "0",
          allowRegistration: "1",
          prefix: "973",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        18: {
          id: "18",
          iso: "BD",
          name: "Bangladesh",
          iso3: "BGD",
          numcode: "50",
          block: "0",
          allowRegistration: "1",
          prefix: "880",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        19: {
          id: "19",
          iso: "BB",
          name: "Barbados",
          iso3: "BRB",
          numcode: "52",
          block: "0",
          allowRegistration: "1",
          prefix: "1246",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        20: {
          id: "20",
          iso: "BY",
          name: "Belarus",
          iso3: "BLR",
          numcode: "112",
          block: "0",
          allowRegistration: "1",
          prefix: "375",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        21: {
          id: "21",
          iso: "BE",
          name: "Belgium",
          iso3: "BEL",
          numcode: "56",
          block: "0",
          allowRegistration: "1",
          prefix: "32",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        22: {
          id: "22",
          iso: "BZ",
          name: "Belize",
          iso3: "BLZ",
          numcode: "84",
          block: "0",
          allowRegistration: "1",
          prefix: "501",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        23: {
          id: "23",
          iso: "BJ",
          name: "Benin",
          iso3: "BEN",
          numcode: "204",
          block: "0",
          allowRegistration: "1",
          prefix: "229",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        24: {
          id: "24",
          iso: "BM",
          name: "Bermuda",
          iso3: "BMU",
          numcode: "60",
          block: "0",
          allowRegistration: "1",
          prefix: "1441",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        25: {
          id: "25",
          iso: "BT",
          name: "Bhutan",
          iso3: "BTN",
          numcode: "64",
          block: "0",
          allowRegistration: "1",
          prefix: "975",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        26: {
          id: "26",
          iso: "BO",
          name: "Bolivia",
          iso3: "BOL",
          numcode: "68",
          block: "0",
          allowRegistration: "1",
          prefix: "591",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        27: {
          id: "27",
          iso: "BA",
          name: "Bosnia and Herzegovina",
          iso3: "BIH",
          numcode: "70",
          block: "0",
          allowRegistration: "1",
          prefix: "387",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        28: {
          id: "28",
          iso: "BW",
          name: "Botswana",
          iso3: "BWA",
          numcode: "72",
          block: "0",
          allowRegistration: "1",
          prefix: "267",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        29: {
          id: "29",
          iso: "BV",
          name: "Bouvet Island",
          iso3: "",
          numcode: "0",
          block: "0",
          allowRegistration: "1",
          prefix: null,
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        30: {
          id: "30",
          iso: "BR",
          name: "Brazil",
          iso3: "BRA",
          numcode: "76",
          block: "0",
          allowRegistration: "1",
          prefix: "55",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        31: {
          id: "31",
          iso: "IO",
          name: "British Indian Ocean Territory",
          iso3: "",
          numcode: "0",
          block: "0",
          allowRegistration: "1",
          prefix: "246",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        32: {
          id: "32",
          iso: "BN",
          name: "Brunei Darussalam",
          iso3: "BRN",
          numcode: "96",
          block: "0",
          allowRegistration: "1",
          prefix: "673",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        33: {
          id: "33",
          iso: "BG",
          name: "Bulgaria",
          iso3: "BGR",
          numcode: "100",
          block: "0",
          allowRegistration: "1",
          prefix: "359",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        34: {
          id: "34",
          iso: "BF",
          name: "Burkina Faso",
          iso3: "BFA",
          numcode: "854",
          block: "0",
          allowRegistration: "1",
          prefix: "226",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        35: {
          id: "35",
          iso: "BI",
          name: "Burundi",
          iso3: "BDI",
          numcode: "108",
          block: "0",
          allowRegistration: "1",
          prefix: "257",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        36: {
          id: "36",
          iso: "KH",
          name: "Cambodia",
          iso3: "KHM",
          numcode: "116",
          block: "0",
          allowRegistration: "1",
          prefix: "855",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        37: {
          id: "37",
          iso: "CM",
          name: "Cameroon",
          iso3: "CMR",
          numcode: "120",
          block: "0",
          allowRegistration: "1",
          prefix: "237",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        38: {
          id: "38",
          iso: "CA",
          name: "Canada",
          iso3: "CAN",
          numcode: "124",
          block: "0",
          allowRegistration: "1",
          prefix: "1",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        39: {
          id: "39",
          iso: "CV",
          name: "Cape Verde",
          iso3: "CPV",
          numcode: "132",
          block: "0",
          allowRegistration: "1",
          prefix: "238",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        40: {
          id: "40",
          iso: "KY",
          name: "Cayman Islands",
          iso3: "CYM",
          numcode: "136",
          block: "0",
          allowRegistration: "1",
          prefix: "1345",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        41: {
          id: "41",
          iso: "CF",
          name: "Central African Republic",
          iso3: "CAF",
          numcode: "140",
          block: "0",
          allowRegistration: "1",
          prefix: "236",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        42: {
          id: "42",
          iso: "TD",
          name: "Chad",
          iso3: "TCD",
          numcode: "148",
          block: "0",
          allowRegistration: "1",
          prefix: "235",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        43: {
          id: "43",
          iso: "CL",
          name: "Chile",
          iso3: "CHL",
          numcode: "152",
          block: "0",
          allowRegistration: "1",
          prefix: "56",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        44: {
          id: "44",
          iso: "CN",
          name: "China",
          iso3: "CHN",
          numcode: "156",
          block: "0",
          allowRegistration: "1",
          prefix: "86",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        45: {
          id: "45",
          iso: "CX",
          name: "Christmas Island",
          iso3: "",
          numcode: "0",
          block: "0",
          allowRegistration: "1",
          prefix: "61",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        46: {
          id: "46",
          iso: "CC",
          name: "Cocos (Keeling) Islands",
          iso3: null,
          numcode: null,
          block: "0",
          allowRegistration: "1",
          prefix: "61",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        47: {
          id: "47",
          iso: "CO",
          name: "Colombia",
          iso3: "COL",
          numcode: "170",
          block: "0",
          allowRegistration: "1",
          prefix: "57",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        48: {
          id: "48",
          iso: "KM",
          name: "Comoros",
          iso3: "COM",
          numcode: "174",
          block: "0",
          allowRegistration: "1",
          prefix: "269",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        49: {
          id: "49",
          iso: "CG",
          name: "Congo",
          iso3: "COG",
          numcode: "178",
          block: "0",
          allowRegistration: "1",
          prefix: "242",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        50: {
          id: "50",
          iso: "CD",
          name: "Congo, the Democratic Republic of the",
          iso3: "COD",
          numcode: "180",
          block: "0",
          allowRegistration: "1",
          prefix: "243",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        51: {
          id: "51",
          iso: "CK",
          name: "Cook Islands",
          iso3: "COK",
          numcode: "184",
          block: "0",
          allowRegistration: "1",
          prefix: "682",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        52: {
          id: "52",
          iso: "CR",
          name: "Costa Rica",
          iso3: "CRI",
          numcode: "188",
          block: "0",
          allowRegistration: "1",
          prefix: "506",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        53: {
          id: "53",
          iso: "CI",
          name: "Cote D'Ivoire",
          iso3: "CIV",
          numcode: "384",
          block: "0",
          allowRegistration: "1",
          prefix: null,
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        54: {
          id: "54",
          iso: "HR",
          name: "Croatia",
          iso3: "HRV",
          numcode: "191",
          block: "0",
          allowRegistration: "1",
          prefix: "385",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        55: {
          id: "55",
          iso: "CU",
          name: "Cuba",
          iso3: "CUB",
          numcode: "192",
          block: "0",
          allowRegistration: "1",
          prefix: "53",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        56: {
          id: "56",
          iso: "CY",
          name: "Cyprus",
          iso3: "CYP",
          numcode: "196",
          block: "0",
          allowRegistration: "1",
          prefix: "357",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        57: {
          id: "57",
          iso: "CZ",
          name: "Czech Republic",
          iso3: "CZE",
          numcode: "203",
          block: "0",
          allowRegistration: "1",
          prefix: "420",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        58: {
          id: "58",
          iso: "DK",
          name: "Denmark",
          iso3: "DNK",
          numcode: "208",
          block: "0",
          allowRegistration: "1",
          prefix: "45",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        59: {
          id: "59",
          iso: "DJ",
          name: "Djibouti",
          iso3: "DJI",
          numcode: "262",
          block: "0",
          allowRegistration: "1",
          prefix: "253",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        60: {
          id: "60",
          iso: "DM",
          name: "Dominica",
          iso3: "DMA",
          numcode: "212",
          block: "0",
          allowRegistration: "1",
          prefix: "1767",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        61: {
          id: "61",
          iso: "DO",
          name: "Dominican Republic",
          iso3: "DOM",
          numcode: "214",
          block: "0",
          allowRegistration: "1",
          prefix: "1809",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        62: {
          id: "62",
          iso: "EC",
          name: "Ecuador",
          iso3: "ECU",
          numcode: "218",
          block: "0",
          allowRegistration: "1",
          prefix: "593",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        63: {
          id: "63",
          iso: "EG",
          name: "Egypt",
          iso3: "EGY",
          numcode: "818",
          block: "0",
          allowRegistration: "1",
          prefix: "20",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        64: {
          id: "64",
          iso: "SV",
          name: "El Salvador",
          iso3: "SLV",
          numcode: "222",
          block: "0",
          allowRegistration: "1",
          prefix: "503",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        65: {
          id: "65",
          iso: "GQ",
          name: "Equatorial Guinea",
          iso3: "GNQ",
          numcode: "226",
          block: "0",
          allowRegistration: "1",
          prefix: "240",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        66: {
          id: "66",
          iso: "ER",
          name: "Eritrea",
          iso3: "ERI",
          numcode: "232",
          block: "0",
          allowRegistration: "1",
          prefix: "291",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        67: {
          id: "67",
          iso: "EE",
          name: "Estonia",
          iso3: "EST",
          numcode: "233",
          block: "0",
          allowRegistration: "1",
          prefix: "372",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        68: {
          id: "68",
          iso: "ET",
          name: "Ethiopia",
          iso3: "ETH",
          numcode: "231",
          block: "0",
          allowRegistration: "1",
          prefix: "251",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        69: {
          id: "69",
          iso: "FK",
          name: "Falkland Islands (Malvinas)",
          iso3: "FLK",
          numcode: "238",
          block: "0",
          allowRegistration: "1",
          prefix: "500",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        70: {
          id: "70",
          iso: "FO",
          name: "Faroe Islands",
          iso3: "FRO",
          numcode: "234",
          block: "0",
          allowRegistration: "1",
          prefix: "298",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        71: {
          id: "71",
          iso: "FJ",
          name: "Fiji",
          iso3: "FJI",
          numcode: "242",
          block: "0",
          allowRegistration: "1",
          prefix: "679",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        72: {
          id: "72",
          iso: "FI",
          name: "Finland",
          iso3: "FIN",
          numcode: "246",
          block: "0",
          allowRegistration: "1",
          prefix: "358",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        73: {
          id: "73",
          iso: "FR",
          name: "France",
          iso3: "FRA",
          numcode: "250",
          block: "0",
          allowRegistration: "1",
          prefix: "33",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        74: {
          id: "74",
          iso: "GF",
          name: "French Guiana",
          iso3: "GUF",
          numcode: "254",
          block: "0",
          allowRegistration: "1",
          prefix: null,
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        75: {
          id: "75",
          iso: "PF",
          name: "French Polynesia",
          iso3: "PYF",
          numcode: "258",
          block: "0",
          allowRegistration: "1",
          prefix: "689",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        76: {
          id: "76",
          iso: "TF",
          name: "French Southern Territories",
          iso3: null,
          numcode: null,
          block: "0",
          allowRegistration: "1",
          prefix: null,
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        77: {
          id: "77",
          iso: "GA",
          name: "Gabon",
          iso3: "GAB",
          numcode: "266",
          block: "0",
          allowRegistration: "1",
          prefix: "241",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        78: {
          id: "78",
          iso: "GM",
          name: "Gambia",
          iso3: "GMB",
          numcode: "270",
          block: "0",
          allowRegistration: "1",
          prefix: "220",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        79: {
          id: "79",
          iso: "GE",
          name: "Georgia",
          iso3: "GEO",
          numcode: "268",
          block: "0",
          allowRegistration: "1",
          prefix: "995",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        80: {
          id: "80",
          iso: "DE",
          name: "Germany",
          iso3: "DEU",
          numcode: "276",
          block: "0",
          allowRegistration: "1",
          prefix: "49",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        81: {
          id: "81",
          iso: "GH",
          name: "Ghana",
          iso3: "GHA",
          numcode: "288",
          block: "0",
          allowRegistration: "1",
          prefix: "233",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        82: {
          id: "82",
          iso: "GI",
          name: "Gibraltar",
          iso3: "GIB",
          numcode: "292",
          block: "0",
          allowRegistration: "1",
          prefix: "350",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        83: {
          id: "83",
          iso: "GR",
          name: "Greece",
          iso3: "GRC",
          numcode: "300",
          block: "0",
          allowRegistration: "1",
          prefix: "30",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        84: {
          id: "84",
          iso: "GL",
          name: "1b71faland",
          iso3: "GRL",
          numcode: "304",
          block: "0",
          allowRegistration: "1",
          prefix: "2991",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        85: {
          id: "85",
          iso: "GD",
          name: "Grenada",
          iso3: "GRD",
          numcode: "308",
          block: "0",
          allowRegistration: "1",
          prefix: "1473",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        86: {
          id: "86",
          iso: "GP",
          name: "Guadeloupe",
          iso3: "GLP",
          numcode: "312",
          block: "0",
          allowRegistration: "1",
          prefix: "590",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        87: {
          id: "87",
          iso: "GU",
          name: "Guam",
          iso3: "GUM",
          numcode: "316",
          block: "0",
          allowRegistration: "1",
          prefix: "1671",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        88: {
          id: "88",
          iso: "GT",
          name: "Guatemala",
          iso3: "GTM",
          numcode: "320",
          block: "0",
          allowRegistration: "1",
          prefix: "502",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        89: {
          id: "89",
          iso: "GN",
          name: "Guinea",
          iso3: "GIN",
          numcode: "324",
          block: "0",
          allowRegistration: "1",
          prefix: "224",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        90: {
          id: "90",
          iso: "GW",
          name: "Guinea-Bissau",
          iso3: "GNB",
          numcode: "624",
          block: "0",
          allowRegistration: "1",
          prefix: "245",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        91: {
          id: "91",
          iso: "GY",
          name: "Guyana",
          iso3: "GUY",
          numcode: "328",
          block: "0",
          allowRegistration: "1",
          prefix: "592",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        92: {
          id: "92",
          iso: "HT",
          name: "Haiti",
          iso3: "HTI",
          numcode: "332",
          block: "0",
          allowRegistration: "1",
          prefix: "509",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        93: {
          id: "93",
          iso: "HM",
          name: "Heard Island and Mcdonald Islands",
          iso3: null,
          numcode: null,
          block: "0",
          allowRegistration: "1",
          prefix: null,
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        94: {
          id: "94",
          iso: "VA",
          name: "Holy See (Vatican City State)",
          iso3: "VAT",
          numcode: "336",
          block: "0",
          allowRegistration: "1",
          prefix: "379",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        95: {
          id: "95",
          iso: "HN",
          name: "Honduras",
          iso3: "HND",
          numcode: "340",
          block: "0",
          allowRegistration: "1",
          prefix: "504",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        96: {
          id: "96",
          iso: "HK",
          name: "Hong Kong",
          iso3: "HKG",
          numcode: "344",
          block: "0",
          allowRegistration: "1",
          prefix: "852",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        97: {
          id: "97",
          iso: "HU",
          name: "Hungary",
          iso3: "HUN",
          numcode: "348",
          block: "0",
          allowRegistration: "1",
          prefix: "36",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        98: {
          id: "98",
          iso: "IS",
          name: "Iceland",
          iso3: "ISL",
          numcode: "352",
          block: "0",
          allowRegistration: "1",
          prefix: "354",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        99: {
          id: "99",
          iso: "IN",
          name: "India",
          iso3: "IND",
          numcode: "356",
          block: "0",
          allowRegistration: "1",
          prefix: "91",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        100: {
          id: "100",
          iso: "ID",
          name: "Indonesia",
          iso3: "IDN",
          numcode: "360",
          block: "0",
          allowRegistration: "1",
          prefix: "62",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        101: {
          id: "101",
          iso: "IR",
          name: "Iran, Islamic Republic of",
          iso3: "IRN",
          numcode: "364",
          block: "0",
          allowRegistration: "1",
          prefix: "98",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        102: {
          id: "102",
          iso: "IQ",
          name: "Iraq",
          iso3: "IRQ",
          numcode: "368",
          block: "0",
          allowRegistration: "1",
          prefix: "964",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        103: {
          id: "103",
          iso: "IE",
          name: "Ireland",
          iso3: "IRL",
          numcode: "372",
          block: "0",
          allowRegistration: "1",
          prefix: "353",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        104: {
          id: "104",
          iso: "IL",
          name: "Israel",
          iso3: "ISR",
          numcode: "376",
          block: "0",
          allowRegistration: "1",
          prefix: "972",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        105: {
          id: "105",
          iso: "IT",
          name: "Italy",
          iso3: "ITA",
          numcode: "380",
          block: "0",
          allowRegistration: "1",
          prefix: "39",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        106: {
          id: "106",
          iso: "JM",
          name: "Jamaica",
          iso3: "JAM",
          numcode: "388",
          block: "0",
          allowRegistration: "1",
          prefix: "1876",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        107: {
          id: "107",
          iso: "JP",
          name: "Japan",
          iso3: "JPN",
          numcode: "392",
          block: "0",
          allowRegistration: "1",
          prefix: "81",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        108: {
          id: "108",
          iso: "JO",
          name: "Jordan",
          iso3: "JOR",
          numcode: "400",
          block: "0",
          allowRegistration: "1",
          prefix: "962",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        109: {
          id: "109",
          iso: "KZ",
          name: "Kazakhstan",
          iso3: "KAZ",
          numcode: "398",
          block: "0",
          allowRegistration: "1",
          prefix: "7",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        110: {
          id: "110",
          iso: "KE",
          name: "Kenya",
          iso3: "KEN",
          numcode: "404",
          block: "0",
          allowRegistration: "1",
          prefix: "254",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        111: {
          id: "111",
          iso: "KI",
          name: "Kiribati",
          iso3: "KIR",
          numcode: "296",
          block: "0",
          allowRegistration: "1",
          prefix: "686",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        112: {
          id: "112",
          iso: "KP",
          name: "Korea, Democratic People's Republic of",
          iso3: "PRK",
          numcode: "408",
          block: "0",
          allowRegistration: "1",
          prefix: "850",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        113: {
          id: "113",
          iso: "KR",
          name: "Korea, Republic of",
          iso3: "KOR",
          numcode: "410",
          block: "0",
          allowRegistration: "1",
          prefix: "82",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        240: {
          id: "240",
          iso: "KV",
          name: "Kosovo",
          iso3: "UNK",
          numcode: "0",
          block: "0",
          allowRegistration: "1",
          prefix: "381",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        114: {
          id: "114",
          iso: "KW",
          name: "Kuwait",
          iso3: "KWT",
          numcode: "414",
          block: "0",
          allowRegistration: "1",
          prefix: "965",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        115: {
          id: "115",
          iso: "KG",
          name: "Kyrgyzstan",
          iso3: "KGZ",
          numcode: "417",
          block: "0",
          allowRegistration: "1",
          prefix: "996",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        116: {
          id: "116",
          iso: "LA",
          name: "Lao People's Democratic Republic",
          iso3: "LAO",
          numcode: "418",
          block: "0",
          allowRegistration: "1",
          prefix: "856",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        117: {
          id: "117",
          iso: "LV",
          name: "Latvia",
          iso3: "LVA",
          numcode: "428",
          block: "0",
          allowRegistration: "1",
          prefix: "371",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        118: {
          id: "118",
          iso: "LB",
          name: "Lebanon",
          iso3: "LBN",
          numcode: "422",
          block: "0",
          allowRegistration: "1",
          prefix: "961",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        119: {
          id: "119",
          iso: "LS",
          name: "Lesotho",
          iso3: "LSO",
          numcode: "426",
          block: "0",
          allowRegistration: "1",
          prefix: "266",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        120: {
          id: "120",
          iso: "LR",
          name: "Liberia",
          iso3: "LBR",
          numcode: "430",
          block: "0",
          allowRegistration: "1",
          prefix: "231",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        121: {
          id: "121",
          iso: "LY",
          name: "Libyan Arab Jamahiriya",
          iso3: "LBY",
          numcode: "434",
          block: "0",
          allowRegistration: "1",
          prefix: "218",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        122: {
          id: "122",
          iso: "LI",
          name: "Liechtenstein",
          iso3: "LIE",
          numcode: "438",
          block: "0",
          allowRegistration: "1",
          prefix: "423",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        123: {
          id: "123",
          iso: "LT",
          name: "Lithuania",
          iso3: "LTU",
          numcode: "440",
          block: "0",
          allowRegistration: "1",
          prefix: "370",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        124: {
          id: "124",
          iso: "LU",
          name: "Luxembourg",
          iso3: "LUX",
          numcode: "442",
          block: "0",
          allowRegistration: "1",
          prefix: "352",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        125: {
          id: "125",
          iso: "MO",
          name: "Macao",
          iso3: "MAC",
          numcode: "446",
          block: "0",
          allowRegistration: "1",
          prefix: "853",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        126: {
          id: "126",
          iso: "MK",
          name: "Macedonia, the Former Yugoslav Republic of",
          iso3: "MKD",
          numcode: "807",
          block: "0",
          allowRegistration: "1",
          prefix: "389",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        127: {
          id: "127",
          iso: "MG",
          name: "Madagascar",
          iso3: "MDG",
          numcode: "450",
          block: "0",
          allowRegistration: "1",
          prefix: "261",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        128: {
          id: "128",
          iso: "MW",
          name: "Malawi",
          iso3: "MWI",
          numcode: "454",
          block: "0",
          allowRegistration: "1",
          prefix: "265",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        129: {
          id: "129",
          iso: "MY",
          name: "Malaysia",
          iso3: "MYS",
          numcode: "458",
          block: "0",
          allowRegistration: "1",
          prefix: "60",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        130: {
          id: "130",
          iso: "MV",
          name: "Maldives",
          iso3: "MDV",
          numcode: "462",
          block: "0",
          allowRegistration: "1",
          prefix: "960",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        131: {
          id: "131",
          iso: "ML",
          name: "Mali",
          iso3: "MLI",
          numcode: "466",
          block: "0",
          allowRegistration: "1",
          prefix: "223",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        132: {
          id: "132",
          iso: "MT",
          name: "Malta",
          iso3: "MLT",
          numcode: "470",
          block: "0",
          allowRegistration: "1",
          prefix: "356",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        133: {
          id: "133",
          iso: "MH",
          name: "Marshall Islands",
          iso3: "MHL",
          numcode: "584",
          block: "0",
          allowRegistration: "1",
          prefix: "692",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        134: {
          id: "134",
          iso: "MQ",
          name: "Martinique",
          iso3: "MTQ",
          numcode: "474",
          block: "0",
          allowRegistration: "1",
          prefix: "596",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        135: {
          id: "135",
          iso: "MR",
          name: "Mauritania",
          iso3: "MRT",
          numcode: "478",
          block: "0",
          allowRegistration: "1",
          prefix: "222",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        136: {
          id: "136",
          iso: "MU",
          name: "Mauritius",
          iso3: "MUS",
          numcode: "480",
          block: "0",
          allowRegistration: "1",
          prefix: "2302",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        137: {
          id: "137",
          iso: "YT",
          name: "Mayotte",
          iso3: null,
          numcode: null,
          block: "0",
          allowRegistration: "1",
          prefix: "262",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        138: {
          id: "138",
          iso: "MX",
          name: "Mexico",
          iso3: "MEX",
          numcode: "484",
          block: "0",
          allowRegistration: "1",
          prefix: "52",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        139: {
          id: "139",
          iso: "FM",
          name: "Micronesia, Federated States of",
          iso3: "FSM",
          numcode: "583",
          block: "0",
          allowRegistration: "1",
          prefix: "691",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        140: {
          id: "140",
          iso: "MD",
          name: "Moldova, Republic of",
          iso3: "MDA",
          numcode: "498",
          block: "0",
          allowRegistration: "1",
          prefix: "373",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        141: {
          id: "141",
          iso: "MC",
          name: "Monaco",
          iso3: "MCO",
          numcode: "492",
          block: "0",
          allowRegistration: "1",
          prefix: "37797",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        142: {
          id: "142",
          iso: "MN",
          name: "Mongolia",
          iso3: "MNG",
          numcode: "496",
          block: "0",
          allowRegistration: "1",
          prefix: "976",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        241: {
          id: "241",
          iso: "ME",
          name: "Montenegro",
          iso3: "MNE",
          numcode: "0",
          block: "0",
          allowRegistration: "1",
          prefix: "382",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        143: {
          id: "143",
          iso: "MS",
          name: "Montserrat",
          iso3: "MSR",
          numcode: "500",
          block: "0",
          allowRegistration: "1",
          prefix: "1664",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        144: {
          id: "144",
          iso: "MA",
          name: "Morocco",
          iso3: "MAR",
          numcode: "504",
          block: "0",
          allowRegistration: "1",
          prefix: "212",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        145: {
          id: "145",
          iso: "MZ",
          name: "Mozambique",
          iso3: "MOZ",
          numcode: "508",
          block: "0",
          allowRegistration: "1",
          prefix: "258",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        146: {
          id: "146",
          iso: "MM",
          name: "Myanmar",
          iso3: "MMR",
          numcode: "104",
          block: "0",
          allowRegistration: "1",
          prefix: "95",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        147: {
          id: "147",
          iso: "NA",
          name: "Namibia",
          iso3: "NAM",
          numcode: "516",
          block: "0",
          allowRegistration: "1",
          prefix: "264",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        148: {
          id: "148",
          iso: "NR",
          name: "Nauru",
          iso3: "NRU",
          numcode: "520",
          block: "0",
          allowRegistration: "1",
          prefix: "674",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        149: {
          id: "149",
          iso: "NP",
          name: "Nepal",
          iso3: "NPL",
          numcode: "524",
          block: "0",
          allowRegistration: "1",
          prefix: "977",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        150: {
          id: "150",
          iso: "NL",
          name: "Netherlands",
          iso3: "NLD",
          numcode: "528",
          block: "0",
          allowRegistration: "1",
          prefix: "31",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        151: {
          id: "151",
          iso: "AN",
          name: "Netherlands Antilles",
          iso3: "ANT",
          numcode: "530",
          block: "0",
          allowRegistration: "1",
          prefix: "599",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        152: {
          id: "152",
          iso: "NC",
          name: "New Caledonia",
          iso3: "NCL",
          numcode: "540",
          block: "0",
          allowRegistration: "1",
          prefix: "687",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        153: {
          id: "153",
          iso: "NZ",
          name: "New Zealand",
          iso3: "NZL",
          numcode: "554",
          block: "0",
          allowRegistration: "1",
          prefix: "64",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        154: {
          id: "154",
          iso: "NI",
          name: "Nicaragua",
          iso3: "NIC",
          numcode: "558",
          block: "0",
          allowRegistration: "1",
          prefix: "505",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        155: {
          id: "155",
          iso: "NE",
          name: "Niger",
          iso3: "NER",
          numcode: "562",
          block: "0",
          allowRegistration: "1",
          prefix: "227",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        156: {
          id: "156",
          iso: "NG",
          name: "Nigeria",
          iso3: "NGA",
          numcode: "566",
          block: "0",
          allowRegistration: "1",
          prefix: "234",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        157: {
          id: "157",
          iso: "NU",
          name: "Niue",
          iso3: "NIU",
          numcode: "570",
          block: "0",
          allowRegistration: "1",
          prefix: "683",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        158: {
          id: "158",
          iso: "NF",
          name: "Norfolk Island",
          iso3: "NFK",
          numcode: "574",
          block: "0",
          allowRegistration: "1",
          prefix: "672",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        159: {
          id: "159",
          iso: "MP",
          name: "Northern Mariana Islands",
          iso3: "MNP",
          numcode: "580",
          block: "0",
          allowRegistration: "1",
          prefix: "1670",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        160: {
          id: "160",
          iso: "NO",
          name: "Norway",
          iso3: "NOR",
          numcode: "578",
          block: "0",
          allowRegistration: "1",
          prefix: "47",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        161: {
          id: "161",
          iso: "OM",
          name: "Oman",
          iso3: "OMN",
          numcode: "512",
          block: "0",
          allowRegistration: "1",
          prefix: "968",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        162: {
          id: "162",
          iso: "PK",
          name: "Pakistan",
          iso3: "PAK",
          numcode: "586",
          block: "0",
          allowRegistration: "1",
          prefix: "92",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        163: {
          id: "163",
          iso: "PW",
          name: "Palau",
          iso3: "PLW",
          numcode: "585",
          block: "0",
          allowRegistration: "1",
          prefix: "680",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        164: {
          id: "164",
          iso: "PS",
          name: "Palestinian Territory",
          iso3: "",
          numcode: "0",
          block: "0",
          allowRegistration: "1",
          prefix: "970",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        165: {
          id: "165",
          iso: "PA",
          name: "Panama",
          iso3: "PAN",
          numcode: "591",
          block: "0",
          allowRegistration: "1",
          prefix: "507",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        166: {
          id: "166",
          iso: "PG",
          name: "Papua New Guinea",
          iso3: "PNG",
          numcode: "598",
          block: "0",
          allowRegistration: "1",
          prefix: "675",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        167: {
          id: "167",
          iso: "PY",
          name: "Paraguay",
          iso3: "PRY",
          numcode: "600",
          block: "0",
          allowRegistration: "1",
          prefix: "595",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        168: {
          id: "168",
          iso: "PE",
          name: "Peru",
          iso3: "PER",
          numcode: "604",
          block: "0",
          allowRegistration: "1",
          prefix: "51",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        169: {
          id: "169",
          iso: "PH",
          name: "Philippines",
          iso3: "PHL",
          numcode: "608",
          block: "0",
          allowRegistration: "1",
          prefix: "63",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        170: {
          id: "170",
          iso: "PN",
          name: "Pitcairn",
          iso3: "PCN",
          numcode: "612",
          block: "0",
          allowRegistration: "1",
          prefix: "870",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        171: {
          id: "171",
          iso: "PL",
          name: "Poland",
          iso3: "POL",
          numcode: "616",
          block: "0",
          allowRegistration: "1",
          prefix: "48",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        172: {
          id: "172",
          iso: "PT",
          name: "Portugal",
          iso3: "PRT",
          numcode: "620",
          block: "0",
          allowRegistration: "1",
          prefix: "351",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        173: {
          id: "173",
          iso: "PR",
          name: "Puerto Rico",
          iso3: "PRI",
          numcode: "630",
          block: "0",
          allowRegistration: "1",
          prefix: "1",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        174: {
          id: "174",
          iso: "QA",
          name: "Qatar",
          iso3: "QAT",
          numcode: "634",
          block: "0",
          allowRegistration: "1",
          prefix: "974",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        175: {
          id: "175",
          iso: "RE",
          name: "Reunion",
          iso3: "REU",
          numcode: "638",
          block: "0",
          allowRegistration: "1",
          prefix: null,
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        176: {
          id: "176",
          iso: "RO",
          name: "Romania",
          iso3: "ROU",
          numcode: "642",
          block: "0",
          allowRegistration: "1",
          prefix: "40",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        177: {
          id: "177",
          iso: "RU",
          name: "Russia",
          iso3: "RUS",
          numcode: "643",
          block: "0",
          allowRegistration: "1",
          prefix: "7",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        178: {
          id: "178",
          iso: "RW",
          name: "Rwanda",
          iso3: "RWA",
          numcode: "646",
          block: "0",
          allowRegistration: "1",
          prefix: "250",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        179: {
          id: "179",
          iso: "SH",
          name: "Saint Helena",
          iso3: "SHN",
          numcode: "654",
          block: "0",
          allowRegistration: "1",
          prefix: "290",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        180: {
          id: "180",
          iso: "KN",
          name: "Saint Kitts and Nevis",
          iso3: "KNA",
          numcode: "659",
          block: "0",
          allowRegistration: "1",
          prefix: "1869",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        181: {
          id: "181",
          iso: "LC",
          name: "Saint Lucia",
          iso3: "LCA",
          numcode: "662",
          block: "0",
          allowRegistration: "1",
          prefix: "1758",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        182: {
          id: "182",
          iso: "PM",
          name: "Saint Pierre and Miquelon",
          iso3: "SPM",
          numcode: "666",
          block: "0",
          allowRegistration: "1",
          prefix: "508",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        183: {
          id: "183",
          iso: "VC",
          name: "Saint Vincent and the Grenadines",
          iso3: "VCT",
          numcode: "670",
          block: "0",
          allowRegistration: "1",
          prefix: "1784",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        184: {
          id: "184",
          iso: "WS",
          name: "Samoa",
          iso3: "WSM",
          numcode: "882",
          block: "0",
          allowRegistration: "1",
          prefix: "685",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        185: {
          id: "185",
          iso: "SM",
          name: "San Marino",
          iso3: "SMR",
          numcode: "674",
          block: "0",
          allowRegistration: "1",
          prefix: "378",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        186: {
          id: "186",
          iso: "ST",
          name: "Sao Tome and Principe",
          iso3: "STP",
          numcode: "678",
          block: "0",
          allowRegistration: "1",
          prefix: "239",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        187: {
          id: "187",
          iso: "SA",
          name: "Saudi Arabia",
          iso3: "SAU",
          numcode: "682",
          block: "0",
          allowRegistration: "1",
          prefix: "966",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        188: {
          id: "188",
          iso: "SN",
          name: "Senegal",
          iso3: "SEN",
          numcode: "686",
          block: "0",
          allowRegistration: "1",
          prefix: "221",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        189: {
          id: "189",
          iso: "CS",
          name: "Serbia",
          iso3: "",
          numcode: "0",
          block: "0",
          allowRegistration: "1",
          prefix: "381",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        190: {
          id: "190",
          iso: "SC",
          name: "Seychelles",
          iso3: "SYC",
          numcode: "690",
          block: "0",
          allowRegistration: "1",
          prefix: "248",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        191: {
          id: "191",
          iso: "SL",
          name: "Sierra Leone",
          iso3: "SLE",
          numcode: "694",
          block: "0",
          allowRegistration: "1",
          prefix: "232",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        192: {
          id: "192",
          iso: "SG",
          name: "Singapore",
          iso3: "SGP",
          numcode: "702",
          block: "0",
          allowRegistration: "1",
          prefix: "65",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        193: {
          id: "193",
          iso: "SK",
          name: "Slovakia",
          iso3: "SVK",
          numcode: "703",
          block: "0",
          allowRegistration: "1",
          prefix: "421",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        194: {
          id: "194",
          iso: "SI",
          name: "Slovenia",
          iso3: "SVN",
          numcode: "705",
          block: "0",
          allowRegistration: "1",
          prefix: "386",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        195: {
          id: "195",
          iso: "SB",
          name: "Solomon Islands",
          iso3: "SLB",
          numcode: "90",
          block: "0",
          allowRegistration: "1",
          prefix: "677",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        196: {
          id: "196",
          iso: "SO",
          name: "Somalia",
          iso3: "SOM",
          numcode: "706",
          block: "0",
          allowRegistration: "1",
          prefix: "252",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        197: {
          id: "197",
          iso: "ZA",
          name: "South Africa",
          iso3: "ZAF",
          numcode: "710",
          block: "0",
          allowRegistration: "1",
          prefix: "27",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        198: {
          id: "198",
          iso: "GS",
          name: "South Georgia and the South Sandwich Islands",
          iso3: null,
          numcode: null,
          block: "0",
          allowRegistration: "1",
          prefix: "500",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        199: {
          id: "199",
          iso: "ES",
          name: "Spain",
          iso3: "ESP",
          numcode: "724",
          block: "0",
          allowRegistration: "1",
          prefix: "34",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        200: {
          id: "200",
          iso: "LK",
          name: "Sri Lanka",
          iso3: "LKA",
          numcode: "144",
          block: "0",
          allowRegistration: "1",
          prefix: "94",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        201: {
          id: "201",
          iso: "SD",
          name: "Sudan",
          iso3: "SDN",
          numcode: "736",
          block: "0",
          allowRegistration: "1",
          prefix: "249",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        202: {
          id: "202",
          iso: "SR",
          name: "Suriname",
          iso3: "SUR",
          numcode: "740",
          block: "0",
          allowRegistration: "1",
          prefix: "597",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        203: {
          id: "203",
          iso: "SJ",
          name: "Svalbard and Jan Mayen",
          iso3: "SJM",
          numcode: "744",
          block: "0",
          allowRegistration: "1",
          prefix: "47",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        204: {
          id: "204",
          iso: "SZ",
          name: "Swaziland",
          iso3: "SWZ",
          numcode: "748",
          block: "0",
          allowRegistration: "1",
          prefix: "268",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        205: {
          id: "205",
          iso: "SE",
          name: "Sweden",
          iso3: "SWE",
          numcode: "752",
          block: "0",
          allowRegistration: "1",
          prefix: "46",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        206: {
          id: "206",
          iso: "CH",
          name: "Switzerland",
          iso3: "CHE",
          numcode: "756",
          block: "0",
          allowRegistration: "1",
          prefix: "41",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        207: {
          id: "207",
          iso: "SY",
          name: "Syrian Arab Republic",
          iso3: "SYR",
          numcode: "760",
          block: "0",
          allowRegistration: "1",
          prefix: "963",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        208: {
          id: "208",
          iso: "TW",
          name: "Taiwan, Province of China",
          iso3: "TWN",
          numcode: "158",
          block: "0",
          allowRegistration: "1",
          prefix: "886",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        209: {
          id: "209",
          iso: "TJ",
          name: "Tajikistan",
          iso3: "TJK",
          numcode: "762",
          block: "0",
          allowRegistration: "1",
          prefix: "992",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        210: {
          id: "210",
          iso: "TZ",
          name: "Tanzania, United Republic of",
          iso3: "TZA",
          numcode: "834",
          block: "0",
          allowRegistration: "1",
          prefix: "255",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        211: {
          id: "211",
          iso: "TH",
          name: "Thailand",
          iso3: "THA",
          numcode: "764",
          block: "0",
          allowRegistration: "1",
          prefix: "66",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        212: {
          id: "212",
          iso: "TL",
          name: "Timor-Leste",
          iso3: null,
          numcode: null,
          block: "0",
          allowRegistration: "1",
          prefix: "670",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        213: {
          id: "213",
          iso: "TG",
          name: "Togo",
          iso3: "TGO",
          numcode: "768",
          block: "0",
          allowRegistration: "1",
          prefix: "228",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        214: {
          id: "214",
          iso: "TK",
          name: "Tokelau",
          iso3: "TKL",
          numcode: "772",
          block: "0",
          allowRegistration: "1",
          prefix: "690",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        215: {
          id: "215",
          iso: "TO",
          name: "Tonga",
          iso3: "TON",
          numcode: "776",
          block: "0",
          allowRegistration: "1",
          prefix: "676",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        216: {
          id: "216",
          iso: "TT",
          name: "Trinidad and Tobago",
          iso3: "TTO",
          numcode: "780",
          block: "0",
          allowRegistration: "1",
          prefix: "1868",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        217: {
          id: "217",
          iso: "TN",
          name: "Tunisia",
          iso3: "TUN",
          numcode: "788",
          block: "0",
          allowRegistration: "1",
          prefix: "216",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        218: {
          id: "218",
          iso: "TR",
          name: "Turkey",
          iso3: "TUR",
          numcode: "792",
          block: "0",
          allowRegistration: "1",
          prefix: "90",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        219: {
          id: "219",
          iso: "TM",
          name: "Turkmenistan",
          iso3: "TKM",
          numcode: "795",
          block: "0",
          allowRegistration: "1",
          prefix: "993",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        220: {
          id: "220",
          iso: "TC",
          name: "Turks and Caicos Islands",
          iso3: "TCA",
          numcode: "796",
          block: "0",
          allowRegistration: "1",
          prefix: "1649",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        221: {
          id: "221",
          iso: "TV",
          name: "Tuvalu",
          iso3: "TUV",
          numcode: "798",
          block: "0",
          allowRegistration: "1",
          prefix: "688",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        222: {
          id: "222",
          iso: "UG",
          name: "Uganda",
          iso3: "UGA",
          numcode: "800",
          block: "0",
          allowRegistration: "1",
          prefix: "256",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        223: {
          id: "223",
          iso: "UA",
          name: "Ukraine",
          iso3: "UKR",
          numcode: "804",
          block: "0",
          allowRegistration: "1",
          prefix: "380",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        224: {
          id: "224",
          iso: "AE",
          name: "United Arab Emirates",
          iso3: "ARE",
          numcode: "784",
          block: "0",
          allowRegistration: "1",
          prefix: "971",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        225: {
          id: "225",
          iso: "GB",
          name: "United Kingdom",
          iso3: "GBR",
          numcode: "826",
          block: "0",
          allowRegistration: "1",
          prefix: "44",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        226: {
          id: "226",
          iso: "US",
          name: "United States",
          iso3: "USA",
          numcode: "840",
          block: "0",
          allowRegistration: "1",
          prefix: "1",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        227: {
          id: "227",
          iso: "UM",
          name: "United States Minor Outlying Islands",
          iso3: "",
          numcode: "0",
          block: "0",
          allowRegistration: "1",
          prefix: null,
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        228: {
          id: "228",
          iso: "UY",
          name: "Uruguay",
          iso3: "URY",
          numcode: "858",
          block: "0",
          allowRegistration: "1",
          prefix: "598",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        229: {
          id: "229",
          iso: "UZ",
          name: "Uzbekistan",
          iso3: "UZB",
          numcode: "860",
          block: "0",
          allowRegistration: "1",
          prefix: "998",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        230: {
          id: "230",
          iso: "VU",
          name: "Vanuatu",
          iso3: "VUT",
          numcode: "548",
          block: "0",
          allowRegistration: "1",
          prefix: "678",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        231: {
          id: "231",
          iso: "VE",
          name: "Venezuela",
          iso3: "VEN",
          numcode: "862",
          block: "0",
          allowRegistration: "1",
          prefix: "58",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        232: {
          id: "232",
          iso: "VN",
          name: "Viet Nam",
          iso3: "VNM",
          numcode: "704",
          block: "0",
          allowRegistration: "1",
          prefix: "84",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        233: {
          id: "233",
          iso: "VG",
          name: "Virgin Islands, British",
          iso3: "VGB",
          numcode: "92",
          block: "0",
          allowRegistration: "1",
          prefix: "1284",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        234: {
          id: "234",
          iso: "VI",
          name: "Virgin Islands, U.s.",
          iso3: "VIR",
          numcode: "850",
          block: "0",
          allowRegistration: "1",
          prefix: "1340",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        235: {
          id: "235",
          iso: "WF",
          name: "Wallis and Futuna",
          iso3: "WLF",
          numcode: "876",
          block: "0",
          allowRegistration: "1",
          prefix: "681",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        236: {
          id: "236",
          iso: "EH",
          name: "Western Sahara",
          iso3: "ESH",
          numcode: "732",
          block: "0",
          allowRegistration: "1",
          prefix: "212",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        237: {
          id: "237",
          iso: "YE",
          name: "Yemen",
          iso3: "YEM",
          numcode: "887",
          block: "0",
          allowRegistration: "1",
          prefix: "967",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        238: {
          id: "238",
          iso: "ZM",
          name: "Zambia",
          iso3: "ZMB",
          numcode: "894",
          block: "0",
          allowRegistration: "1",
          prefix: "260",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
        239: {
          id: "239",
          iso: "ZW",
          name: "Zimbabwe",
          iso3: "ZWE",
          numcode: "716",
          block: "0",
          allowRegistration: "1",
          prefix: "263",
          defaultLang: null,
          assetTypes: null,
          parentId: "0",
          isRegulated: "0",
          nationality: null,
        },
      };
      return e;
    });
  })(window),
  (function () {
    "use strict";
    angular.module("app").factory("Store", function () {
      return {};
    });
  })(window),
  (function () {
    "use strict";
    angular.module("app").filter("to_trusted", [
      "$sce",
      function (e) {
        return function (a) {
          return e.trustAsHtml(a);
        };
      },
    ]),
      angular.module("app").filter("to_trusted_url", [
        "$sce",
        function (e) {
          return function (a) {
            return e.trustAsResourceUrl(a);
          };
        },
      ]);
  })(window),
  (function () {
    "use strict";
    var e = function (e) {
      return {
        link: function (e, a, t, n) {
          var o = t.dropdownSettings
            ? angular.fromJson(t.dropdownSettings)
            : {};
          "" == t.dropdown
            ? a.dropdown(o)
            : setTimeout(function () {
                a.dropdown(o);
              }, parseInt(t.dropdown));
          var i = function () {
            setTimeout(function () {
              a.dropdown("set selected", a.val());
            }, 100);
          };
          e.$on("NeedUpdateUiDropdown", i);
        },
      };
    };
    (e.$inject = ["$rootScope"]),
      angular.module("app").directive("dropdown", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      var r = {};
      return (
        (r.scripts_load = !1),
        (r.session_load = !1),
        (r.amount = 0),
        (r.amount_tr = 0),
        (r.fixed = 0),
        (r.bonus = 0),
        (r.session = {}),
        (r.cascade = {}),
        (r.cascade_name = "ZOOM"),
        (r.fast = function (t, o, i, s) {
          a.$broadcast("cascade:wait", !0),
            (r.amount = t),
            (r.fixed = o),
            (r.bonus = i),
            (r.cascade = s),
            e
              .post("/api/zoom", {
                action: "session",
                amount: t,
              })
              .success(function (e, t, o, i) {
                if ("true" == e["return"]) {
                  if (!e.session) {
                    if (r.cascade.runCascade(r.cascade_name)) return;
                    return (
                      n.displayToastNew("error", "Response error, try again"),
                      void a.$broadcast("cascade:wait", !1)
                    );
                  }
                  (r.session = e.session),
                    (r.session_load = !0),
                    (r.amount_tr = e.session.amount),
                    r.loadScripts();
                }
              })
              .error(function (e) {
                r.cascade.runCascade(r.cascade_name) ||
                  (n.displayToastNew("error", "Response error, try again"),
                  a.$broadcast("cascade:wait", !1));
              });
        }),
        (r.removeZoom = function () {
          $(".ezpay").remove(), $("#zoomform").remove();
        }),
        (r.loadScripts = function () {
          try {
            if (r.scripts_load) r.createFrom();
            else {
              var t =
                "https://pspl.zoom-pay.com/hps/CardToken/ezpay.js?sessionkey=" +
                r.session.session;
              $.getScript(t, function () {
                (r.scripts_load = !0), r.createFrom();
              }).fail(function (a, t, n) {
                e.post("/api/debug/zoom_script", {
                  evt: a,
                  act: "load_script",
                }),
                  r.cascade.runCascade(r.cascade_name);
              });
            }
          } catch (o) {
            if (r.cascade.runCascade(r.cascade_name)) return;
            n.displayToastNew("error", "Response error, try again"),
              a.$broadcast("cascade:wait", !1);
          }
        }),
        (r.createFrom = function () {
          $("body").append(
            '<form id="zoomform" class="hide transperant"></form>'
          );
          var e = $("#zoomform");
          e.append(r.addInput('data-ezpay-token-type="mode"', "MPI")),
            e.append(r.addInput('data-ezpay-token-type="card"', r.session.cnu)),
            e.append(r.addInput('data-ezpay-token-type="cvv"', r.session.cvv)),
            e.append(
              r.addInput('data-ezpay-token-type="expiry"', r.session.exp)
            ),
            e.append(
              r.addInput(
                'data-ezpay-token-type="amount-decimal"',
                parseFloat(r.amount_tr).toFixed(2)
              )
            );
          var a = "USD";
          e.append(r.addInput('data-ezpay-token-type="currency"', a)),
            r.getToken(e);
        }),
        (r.getToken = function (e) {
          EZPAY.API.getOrCreateCurtain(),
            EZPAY.API.tokenizeForm(e)
              .done(function (e) {
                r.successToken(e);
              })
              .fail(r.failToken);
        }),
        (r.successToken = function (t) {
          e
            .post("/api/card/fast/zoom", {
              amount: r.amount,
              fixed: r.fixed,
              bonus: r.bonus,
              token: t.token,
            })
            .success(function (e, t, o, i) {
              if ("true" == e["return"]) {
                var s = r.getPath(e, "data.Error.Message");
                if ((console.log(s), s))
                  return (
                    r.cascade.ZoomFail(),
                    r.cascade.runCascade(r.cascade_name)
                      ? void r.removeZoom()
                      : ((s = Lang.get("cascade_card.failed")),
                        n.displayAlert(
                          "Card",
                          '<span class="ui red inverted header">' +
                            s +
                            "</span>"
                        ),
                        r.removeZoom(),
                        void a.$broadcast("cascade:wait", !1))
                  );
                var l = r.getPath(e, "data.Result.Code"),
                  c = r.getPath(e, "data.Result.HostCode"),
                  d = r.getPath(e, "data.Result.Message");
                if ("05" === c) {
                  a.$broadcast("cascade:wait", !1), r.removeZoom();
                  var u = !0;
                  n.showDynamic(
                    "/api/ag/modal_honor",
                    {
                      theme: "honor wide",
                      close: "bdw-close",
                    },
                    {
                      onHide: function () {
                        if (u) {
                          u = !1;
                          try {
                            ga(
                              "send",
                              "event",
                              "click",
                              "do_not_honor",
                              "close"
                            );
                          } catch (e) {}
                        }
                      },
                    }
                  );
                  try {
                    ga(
                      "send",
                      "event",
                      "show",
                      "do_not_honor",
                      "pop-up-banner"
                    );
                  } catch (p) {}
                  return;
                }
                if (0 == l) {
                  var m = Lang.get("cascade_card.founded"),
                    f = Lang.get("cascade_card.msg.zoom");
                  return (
                    n.displayAlert(
                      "Card",
                      '<div class="ui 1b71fa inverted header">' +
                        m +
                        "</div><div>" +
                        f +
                        "</div>"
                    ),
                    n.HideAllToast(),
                    a.$broadcast("user:update", {}),
                    a.$broadcast("cascade:wait", !1),
                    r.removeZoom(),
                    !1
                  );
                }
                var g = r.getPath(e, "data.Result.HostCode");
                if (
                  (r.cascade.ZoomError(g), r.cascade.runCascade(r.cascade_name))
                )
                  return void r.removeZoom();
                d || (d = Lang.get("orange.pay_fail")),
                  (d = Lang.get("cascade_card.failed")),
                  r.removeZoom(),
                  n.displayAlert(
                    "Card",
                    '<span class="ui red inverted header">' + d + "</span>"
                  );
              } else {
                if (r.cascade.runCascade(r.cascade_name))
                  return void r.removeZoom();
                var h = "Error";
                e.message && (h = e.message),
                  (h = Lang.get("cascade_card.failed")),
                  n.displayAlert(
                    "Card",
                    '<span class="ui red inverted header">' + h + "</span>"
                  );
              }
              a.$broadcast("cascade:wait", !1), r.removeZoom();
            })
            .error(function (e) {
              return r.cascade.runCascade(r.cascade_name)
                ? void r.removeZoom()
                : (n.displayToastNew("error", "Response error, try again"),
                  void a.$broadcast("cascade:wait", !1));
            }),
            console.log(t);
        }),
        (r.failToken = function (t) {
          var o = r.getPath(t, "responseJSON.Error.Message");
          return (
            e.post("/api/debug/zoom_script", {
              evt: t,
              act: "token_fail",
            }),
            r.cascade.runCascade(r.cascade_name)
              ? void r.removeZoom()
              : (r.removeZoom(),
                n.displayAlert(
                  "Card",
                  '<span class="ui red inverted header">' + o + "</span>"
                ),
                a.$broadcast("cascade:wait", !1),
                void console.log(t, "Fail token"))
          );
        }),
        (r.getPath = function (e, a) {
          return a.split(".").reduce(function (e, a) {
            return "undefined" == typeof e || null === e ? e : e[a];
          }, e);
        }),
        (r.addInput = function (e, a) {
          return '<input type="hidden" ' + e + ' value="' + a + '"/>';
        }),
        r
      );
    };
    (e.$inject = [
      "$http",
      "$rootScope",
      "$timeout",
      "ModalService",
      "Store",
      "$stateParams",
    ]),
      angular.module("app").factory("Zoom", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      (e.loading = !1),
        (e.info = User),
        (e.currency = ""),
        (e.ds = {
          USD: "USD",
          EUR: "EUR",
          GBP: "GBP",
          RUB: "RUB",
          BTC: "Bitcoin",
          ETH: "Ethereum",
          LTC: "Litecoin",
          DSH: "Dash",
        }),
        (e.initDs = function () {
          var a = User.balances;
          a &&
            (_.each(a, function (a, t) {
              "DEMO_MANUAL" === a.accountGroup || delete e.ds[a.currency];
            }),
            (e.ds = angular.copy(e.ds)));
        }),
        (e.cancel = function () {
          s.CloseAll();
        }),
        (e.init = function () {
          return "" === e.currency
            ? void s.displayToastAmaran("error", "Please chose currency!")
            : ((e.loading = !0),
              void a({
                method: "POST",
                url: "/api/us/create_account",
                data: {
                  currency: e.currency,
                },
              })
                .success(function (a) {
                  n.$broadcast("add:account", a.data),
                    s.displayToastAmaran(
                      "success",
                      "Account successfully added"
                    ),
                    e.cancel();
                })
                .error(function (a) {
                  s.displayToastAmaran(
                    "error",
                    "Some errors, please try again."
                  ),
                    (e.loading = !1);
                }));
        }),
        e.initDs();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$state",
      "Cascade",
      "Ayden",
      "ModalService",
      "Store",
      "Ranger",
    ]),
      angular.module("app").controller("AccountModal", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      (e.email = Cc.get("INPUT.email") ? Cc.get("INPUT.email") : ""),
        (e.password = Cc.get("INPUT.password") ? Cc.get("INPUT.password") : ""),
        (e.error = ""),
        (e.loading = !1),
        (e.redirect = Cc.get("INPUT.redirect") ? Cc.get("INPUT.redirect") : ""),
        (e.mobile = !!Cc.get("INPUT.mobile") && Cc.get("INPUT.mobile"));
      var o = Lang.get("sig");
      e.login = function () {
        if ("" === e.email || "" === e.password)
          return void (window.location.href = "/" + o + "/login");
        e.loading = !0;
        var t = function (t, n, i, r) {
            if ("false" === t["return"])
              return void (window.location.href = "/" + o + "/login");
            var s = "" !== e.redirect ? "#" + e.redirect : "",
              l = Cc.get("INPUT.sig") ? Cc.get("INPUT.sig") : o;
            e.mobile
              ? a({
                  method: "POST",
                  url: "/api/triggers/mobile",
                })
                  .success(function (e) {
                    window.location.href = "/" + l + "/trading" + s;
                  })
                  .error(function (e) {
                    window.location.href = "/" + l + "/trading" + s;
                  })
              : (window.location.href = "/" + l + "/trading" + s);
          },
          i = function (a) {
            (e.loading = !1),
              (e.error = Lang.get("auth.login_error")),
              (window.location.href = "/" + o + "/login");
          },
          r = function (a, t, n, o) {
            a
              ? (e.error = a.message
                  ? a.message
                  : Lang.get("auth.server_error"))
              : (e.error = Lang.get("auth.server_error")),
              $(".message.em").transition("shake"),
              (e.loading = !1);
          };
        n.LoginAndAuth(e.email, e.password, t, r, i);
      };
      var i = new Promise(function (e, a) {
        var t = [200, 500, 700, 1e3, 1500, 2e3, 2500, 3e3, 4e3];
        t.forEach(function (a) {
          setTimeout(function () {
            window.recaptchaToken && e("yes " + a);
          }, a);
        }),
          setTimeout(function () {
            a("no");
          }, 5e3);
      });
      i.then(
        function (a) {
          (window.capthaInfo = window.capthaInfo
            ? window.capthaInfo + "init after: " + a
            : window.capthaInfo + "init after: " + a),
            e.login();
        },
        function (a) {
          (window.capthaInfo = window.capthaInfo
            ? window.capthaInfo + "Recaptha no after 5k sec: " + a
            : window.capthaInfo + "Recaptha no after 5k sec: " + a),
            e.login();
        }
      );
    };
    (e.$inject = ["$scope", "$http", "$timeout", "FPlatform"]),
      angular.module("app").controller("Autologin", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      (e.info = User),
        (e.userUp = function (a, t) {
          e.info = new Tron(t);
        }),
        n.$on("user:update:success", e.userUp);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope"]),
      angular.module("app").controller("Balance", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.hash = ""),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.is_vload = !1),
        (e.info = User),
        (e.lang = Lang),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          return "su" === e.status || "ex" === e.status
            ? void (
                e.is_vload &&
                "su" === e.status &&
                (location.href = "/api/vload/finish")
              )
            : void a({
                method: "POST",
                url: "/api/bch/check",
                data: {
                  guid: $(".guid").html(),
                },
              })
                .success(function (a) {
                  (e.status = a.status), (e.hash = a.hash);
                })
                .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          o.run("btc", e.dec, e.callback);
        }, 300),
        (e.goToBlckchain = function () {
          var a = "https://blockchair.com/bitcoin-cash/transaction/" + e.hash,
            t = window.open(a, "_blank");
          t.focus();
        }),
        e.getStatus(),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("BCHinvoice", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.hash = ""),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.info = User),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          "su" != e.status &&
            "ex" != e.status &&
            a({
              method: "POST",
              url: "/api/btc/check",
              data: {
                guid: $(".guid").html(),
              },
            })
              .success(function (a) {
                (e.status = a.status), (e.hash = a.hash);
              })
              .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          o.run("btc", e.dec, e.callback);
        }, 300),
        (e.goToBlckchain = function () {
          var a = "https://blockchain.info/tx/" + e.hash,
            t = window.open(a, "_blank");
          t.focus();
        }),
        e.getStatus(),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("BTCinvoice", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l) {
      (e.btcPopupAction = function () {
        $(".ui.modal").modal("hide all"),
          $.fancybox.close(),
          i.go("show", {
            page: "funding",
          }),
          setTimeout(function () {
            var e = $(".nav-tab-list");
            setTimeout(function () {
              e.length &&
                $("html, body").animate(
                  {
                    scrollTop: e.offset().top,
                  },
                  400
                );
            }, 300);
          }, 300);
      }),
        (e.goVerify = function () {
          $(".ui.modal").modal("hide all"),
            $.fancybox.close(),
            i.go("show", {
              page: "personal",
            });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "FPlatform",
      "$state",
      "Cascade",
      "Ranger",
      "Store",
    ]),
      angular.module("app").controller("BtcPopup", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      (e.error = ""),
        (e.success = !1),
        (e.loading = !1),
        (e.phone = ""),
        (e.send = function () {
          (e.loading = !0),
            a({
              method: "POST",
              url: "/api/call",
              data: {
                phone: e.phone,
              },
            })
              .success(function (a) {
                (e.loading = !1),
                  (e.phone = ""),
                  $(".ui.dropdown.dropdown-call").dropdown("hide"),
                  e.showAmaran(Lang.get("calls.server_success"), !0);
              })
              .error(function (a) {
                (e.loading = !1), e.showAmaran(Lang.get("calls.server_error"));
              });
        }),
        (e.showAmaran = function (e, a) {
          var t = a ? "27ae60" : "e74c3c";
          $.amaran({
            theme: "colorful",
            delay: 5e3,
            content: {
              bgcolor: "#" + t,
              color: "#fff",
              message: e,
            },
            position: "top left",
            outEffect: "slideTop",
          });
        }),
        (e.initDropDawn = function () {
          $(".ui.dropdown.dropdown-call").dropdown(
            "setting",
            "action",
            "nothing"
          );
        }),
        (window.testGiveawayFront = function () {
          n.showDynamic(
            "/api/ag/modal_giveaway",
            {
              theme: "giveaway-modal-root",
              close: "bdw-close",
            },
            {
              onHide: function () {
                try {
                  gtag("event", "close", {
                    event_category: "raceoption",
                    event_label: "giveaway",
                  });
                } catch (e) {
                  console.log("error gtag", e);
                }
              },
            }
          );
        }),
        gup("message") &&
          "/" === location.pathname &&
          n.showAlert("Error", decodeURI(gup("message"))),
        e.initDropDawn();
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService"]),
      angular.module("app").controller("Calls", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      o.remove("/api/ag/founding"),
        (e.info = User),
        (e.whait = !1),
        (e.button_loading = !1),
        (e.can_top_up = !1),
        (e.is_risk = !1),
        (e.ranger = c),
        (e.isRiskPartner = function () {
          User.get("cardRisk") &&
            "Full" !== User.get("verification") &&
            (e.is_risk = !0);
        }),
        e.isRiskPartner();
      e.real_currency = User.get("currency");
      var d = [
          {
            name: "Afghanistan",
            code: "AF",
          },
          {
            name: "Ã…land islands",
            code: "AX",
          },
          {
            name: "Albania",
            code: "AL",
          },
          {
            name: "Algeria",
            code: "DZ",
          },
          {
            name: "American samoa",
            code: "AS",
          },
          {
            name: "Andorra",
            code: "AD",
          },
          {
            name: "Angola",
            code: "AO",
          },
          {
            name: "Anguilla",
            code: "AI",
          },
          {
            name: "Antarctica",
            code: "AQ",
          },
          {
            name: "Antigua and Barbuda",
            code: "AG",
          },
          {
            name: "Argentina",
            code: "AR",
          },
          {
            name: "Armenia",
            code: "AM",
          },
          {
            name: "Aruba",
            code: "AW",
          },
          {
            name: "Australia",
            code: "AU",
          },
          {
            name: "Austria",
            code: "AT",
          },
          {
            name: "Azerbaijan",
            code: "AZ",
          },
          {
            name: "Bahamas",
            code: "BS",
          },
          {
            name: "Bahrain",
            code: "BH",
          },
          {
            name: "Bangladesh",
            code: "BD",
          },
          {
            name: "Barbados",
            code: "BB",
          },
          {
            name: "Belarus",
            code: "BY",
          },
          {
            name: "Belgium",
            code: "BE",
          },
          {
            name: "Belize",
            code: "BZ",
          },
          {
            name: "Benin",
            code: "BJ",
          },
          {
            name: "Bermuda",
            code: "BM",
          },
          {
            name: "Bhutan",
            code: "BT",
          },
          {
            name: "Bolivia",
            code: "BO",
          },
          {
            name: "Bosnia and Herzegovina",
            code: "BA",
          },
          {
            name: "Botswana",
            code: "BW",
          },
          {
            name: "Bouvet Island",
            code: "BV",
          },
          {
            name: "Brazil",
            code: "BR",
          },
          {
            name: "British Indian Ocean Territory",
            code: "IO",
          },
          {
            name: "Brunei Darussalam",
            code: "BN",
          },
          {
            name: "Bulgaria",
            code: "BG",
          },
          {
            name: "Burkina Faso",
            code: "BF",
          },
          {
            name: "Burundi",
            code: "BI",
          },
          {
            name: "Cambodia",
            code: "KH",
          },
          {
            name: "Cameroon",
            code: "CM",
          },
          {
            name: "Canada",
            code: "CA",
          },
          {
            name: "Cape verde",
            code: "CV",
          },
          {
            name: "Cayman Islands",
            code: "KY",
          },
          {
            name: "Central African Republic",
            code: "CF",
          },
          {
            name: "Chad",
            code: "TD",
          },
          {
            name: "Chile",
            code: "CL",
          },
          {
            name: "China",
            code: "CN",
          },
          {
            name: "Christmas Island",
            code: "CX",
          },
          {
            name: "Cocos (Keeling) Islands",
            code: "CC",
          },
          {
            name: "Colombia",
            code: "CO",
          },
          {
            name: "Comoros",
            code: "KM",
          },
          {
            name: "Congo",
            code: "CG",
          },
          {
            name: "Congo, the democratic republic of the",
            code: "CD",
          },
          {
            name: "Cook Islands",
            code: "CK",
          },
          {
            name: "Costa Rica",
            code: "CR",
          },
          {
            name: "CÃ´te d'Ivoire",
            code: "CI",
          },
          {
            name: "Croatia",
            code: "HR",
          },
          {
            name: "Cuba",
            code: "CU",
          },
          {
            name: "Cyprus",
            code: "CY",
          },
          {
            name: "Czech Republic",
            code: "CZ",
          },
          {
            name: "Denmark",
            code: "DK",
          },
          {
            name: "Djibouti",
            code: "DJ",
          },
          {
            name: "Dominica",
            code: "DM",
          },
          {
            name: "Dominican Republic",
            code: "DO",
          },
          {
            name: "Ecuador",
            code: "EC",
          },
          {
            name: "Egypt",
            code: "EG",
          },
          {
            name: "El Salvador",
            code: "SV",
          },
          {
            name: "Equatorial Guinea",
            code: "GQ",
          },
          {
            name: "Eritrea",
            code: "ER",
          },
          {
            name: "Estonia",
            code: "EE",
          },
          {
            name: "Ethiopia",
            code: "ET",
          },
          {
            name: "Falkland Islands (Malvinas)",
            code: "FK",
          },
          {
            name: "Faroe Islands",
            code: "FO",
          },
          {
            name: "Fiji",
            code: "FJ",
          },
          {
            name: "Finland",
            code: "FI",
          },
          {
            name: "France",
            code: "FR",
          },
          {
            name: "French Guiana",
            code: "GF",
          },
          {
            name: "French Polynesia",
            code: "PF",
          },
          {
            name: "French Southern Territories",
            code: "TF",
          },
          {
            name: "Gabon",
            code: "GA",
          },
          {
            name: "Gambia",
            code: "GM",
          },
          {
            name: "Georgia",
            code: "GE",
          },
          {
            name: "Germany",
            code: "DE",
          },
          {
            name: "Ghana",
            code: "GH",
          },
          {
            name: "Gibraltar",
            code: "GI",
          },
          {
            name: "Greece",
            code: "GR",
          },
          {
            name: "1b71faland",
            code: "GL",
          },
          {
            name: "Grenada",
            code: "GD",
          },
          {
            name: "Guadeloupe",
            code: "GP",
          },
          {
            name: "Guam",
            code: "GU",
          },
          {
            name: "Guatemala",
            code: "GT",
          },
          {
            name: "Guernsey",
            code: "GG",
          },
          {
            name: "Guinea",
            code: "GN",
          },
          {
            name: "Guinea-bissau",
            code: "GW",
          },
          {
            name: "Guyana",
            code: "GY",
          },
          {
            name: "Haiti",
            code: "HT",
          },
          {
            name: "Heard Island and Mcdonald Islands",
            code: "HM",
          },
          {
            name: "Honduras",
            code: "HN",
          },
          {
            name: "Hong kong",
            code: "HK",
          },
          {
            name: "Hungary",
            code: "HU",
          },
          {
            name: "Iceland",
            code: "IS",
          },
          {
            name: "India",
            code: "IN",
          },
          {
            name: "Indonesia",
            code: "ID",
          },
          {
            name: "Iran, islamic republic of",
            code: "IR",
          },
          {
            name: "Iraq",
            code: "IQ",
          },
          {
            name: "Ireland",
            code: "IE",
          },
          {
            name: "Isle of Man",
            code: "IM",
          },
          {
            name: "Israel",
            code: "IL",
          },
          {
            name: "Italy",
            code: "IT",
          },
          {
            name: "Jamaica",
            code: "JM",
          },
          {
            name: "Japan",
            code: "JP",
          },
          {
            name: "Jersey",
            code: "JE",
          },
          {
            name: "Jordan",
            code: "JO",
          },
          {
            name: "Kazakhstan",
            code: "KZ",
          },
          {
            name: "Kenya",
            code: "KE",
          },
          {
            name: "Kiribati",
            code: "KI",
          },
          {
            name: "Korea, Democratic People's Republic of",
            code: "KP",
          },
          {
            name: "Korea, Republic of",
            code: "KR",
          },
          {
            name: "Kuwait",
            code: "KW",
          },
          {
            name: "Kyrgyzstan",
            code: "KG",
          },
          {
            name: "Lao People's Democratic Republic",
            code: "LA",
          },
          {
            name: "Latvia",
            code: "LV",
          },
          {
            name: "Lebanon",
            code: "LB",
          },
          {
            name: "Lesotho",
            code: "LS",
          },
          {
            name: "Liberia",
            code: "LR",
          },
          {
            name: "Libyan Arab Jamahiriya",
            code: "LY",
          },
          {
            name: "Liechtenstein",
            code: "LI",
          },
          {
            name: "Lithuania",
            code: "LT",
          },
          {
            name: "Luxembourg",
            code: "LU",
          },
          {
            name: "Macao",
            code: "MO",
          },
          {
            name: "Macedonia, the former yugoslav republic of",
            code: "MK",
          },
          {
            name: "Madagascar",
            code: "MG",
          },
          {
            name: "Malawi",
            code: "MW",
          },
          {
            name: "Malaysia",
            code: "MY",
          },
          {
            name: "Maldives",
            code: "MV",
          },
          {
            name: "Mali",
            code: "ML",
          },
          {
            name: "Malta",
            code: "MT",
          },
          {
            name: "Marshall Islands",
            code: "MH",
          },
          {
            name: "Martinique",
            code: "MQ",
          },
          {
            name: "Mauritania",
            code: "MR",
          },
          {
            name: "Mauritius",
            code: "MU",
          },
          {
            name: "Mayotte",
            code: "YT",
          },
          {
            name: "Mexico",
            code: "MX",
          },
          {
            name: "Micronesia, federated states of",
            code: "FM",
          },
          {
            name: "Moldova",
            code: "MD",
          },
          {
            name: "Monaco",
            code: "MC",
          },
          {
            name: "Mongolia",
            code: "MN",
          },
          {
            name: "Montenegro",
            code: "ME",
          },
          {
            name: "Montserrat",
            code: "MS",
          },
          {
            name: "Morocco",
            code: "MA",
          },
          {
            name: "Mozambique",
            code: "MZ",
          },
          {
            name: "Myanmar",
            code: "MM",
          },
          {
            name: "Namibia",
            code: "NA",
          },
          {
            name: "Nauru",
            code: "NR",
          },
          {
            name: "Nepal",
            code: "NP",
          },
          {
            name: "Netherlands",
            code: "NL",
          },
          {
            name: "Netherlands Antilles",
            code: "AN",
          },
          {
            name: "New Caledonia",
            code: "NC",
          },
          {
            name: "New Zealand",
            code: "NZ",
          },
          {
            name: "Nicaragua",
            code: "NI",
          },
          {
            name: "Niger",
            code: "NE",
          },
          {
            name: "Nigeria",
            code: "NG",
          },
          {
            name: "Niue",
            code: "NU",
          },
          {
            name: "Norfolk Island",
            code: "NF",
          },
          {
            name: "Northern Mariana Islands",
            code: "MP",
          },
          {
            name: "Norway",
            code: "NO",
          },
          {
            name: "Oman",
            code: "OM",
          },
          {
            name: "Pakistan",
            code: "PK",
          },
          {
            name: "Palau",
            code: "PW",
          },
          {
            name: "Palestinian territory, occupied",
            code: "PS",
          },
          {
            name: "Panama",
            code: "PA",
          },
          {
            name: "Papua New Guinea",
            code: "PG",
          },
          {
            name: "Paraguay",
            code: "PY",
          },
          {
            name: "Peru",
            code: "PE",
          },
          {
            name: "Philippines",
            code: "PH",
          },
          {
            name: "Pitcairn",
            code: "PN",
          },
          {
            name: "Poland",
            code: "PL",
          },
          {
            name: "Portugal",
            code: "PT",
          },
          {
            name: "Puerto Rico",
            code: "PR",
          },
          {
            name: "Qatar",
            code: "QA",
          },
          {
            name: "RÃ©union",
            code: "RE",
          },
          {
            name: "Romania",
            code: "RO",
          },
          {
            name: "Russian Federation",
            code: "RU",
          },
          {
            name: "Rwanda",
            code: "RW",
          },
          {
            name: "Saint BarthÃ©lemy",
            code: "BL",
          },
          {
            name: "Saint Helena",
            code: "SH",
          },
          {
            name: "Saint Kitts and Nevis",
            code: "KN",
          },
          {
            name: "Saint Lucia",
            code: "LC",
          },
          {
            name: "Saint Martin",
            code: "MF",
          },
          {
            name: "Saint Pierre and Miquelon",
            code: "PM",
          },
          {
            name: "Saint Vincent and the Grenadines",
            code: "VC",
          },
          {
            name: "Samoa",
            code: "WS",
          },
          {
            name: "San Marino",
            code: "SM",
          },
          {
            name: "Sao Tome and Principe",
            code: "ST",
          },
          {
            name: "Saudi Arabia",
            code: "SA",
          },
          {
            name: "Senegal",
            code: "SN",
          },
          {
            name: "Serbia",
            code: "RS",
          },
          {
            name: "Seychelles",
            code: "SC",
          },
          {
            name: "Sierra Leone",
            code: "SL",
          },
          {
            name: "Singapore",
            code: "SG",
          },
          {
            name: "Slovakia",
            code: "SK",
          },
          {
            name: "Slovenia",
            code: "SI",
          },
          {
            name: "Solomon islands",
            code: "SB",
          },
          {
            name: "Somalia",
            code: "SO",
          },
          {
            name: "South Africa",
            code: "ZA",
          },
          {
            name: "South georgia and the south sandwich islands",
            code: "GS",
          },
          {
            name: "Spain",
            code: "ES",
          },
          {
            name: "Sri lanka",
            code: "LK",
          },
          {
            name: "Sudan",
            code: "SD",
          },
          {
            name: "Suriname",
            code: "SR",
          },
          {
            name: "Svalbard and jan mayen",
            code: "SJ",
          },
          {
            name: "Swaziland",
            code: "SZ",
          },
          {
            name: "Sweden",
            code: "SE",
          },
          {
            name: "Switzerland",
            code: "CH",
          },
          {
            name: "Syrian arab republic",
            code: "SY",
          },
          {
            name: "Taiwan, province of china",
            code: "TW",
          },
          {
            name: "Tajikistan",
            code: "TJ",
          },
          {
            name: "Tanzania, united republic of",
            code: "TZ",
          },
          {
            name: "Thailand",
            code: "TH",
          },
          {
            name: "Timor-leste",
            code: "TL",
          },
          {
            name: "Togo",
            code: "TG",
          },
          {
            name: "Tokelau",
            code: "TK",
          },
          {
            name: "Tonga",
            code: "TO",
          },
          {
            name: "Trinidad and tobago",
            code: "TT",
          },
          {
            name: "Tunisia",
            code: "TN",
          },
          {
            name: "Turkey",
            code: "TR",
          },
          {
            name: "Turkmenistan",
            code: "TM",
          },
          {
            name: "Turks and Caicos Islands",
            code: "TC",
          },
          {
            name: "Tuvalu",
            code: "TV",
          },
          {
            name: "Uganda",
            code: "UG",
          },
          {
            name: "Ukraine",
            code: "UA",
          },
          {
            name: "United Arab Emirates",
            code: "AE",
          },
          {
            name: "United Kingdom",
            code: "GB",
          },
          {
            name: "United States",
            code: "US",
          },
          {
            name: "United States Minor Outlying Islands",
            code: "UM",
          },
          {
            name: "Uruguay",
            code: "UY",
          },
          {
            name: "Uzbekistan",
            code: "UZ",
          },
          {
            name: "Vanuatu",
            code: "VU",
          },
          {
            name: "Vatican City State",
            code: "VA",
          },
          {
            name: "Venezuela",
            code: "VE",
          },
          {
            name: "Viet nam",
            code: "VN",
          },
          {
            name: "Virgin Islands, British",
            code: "VG",
          },
          {
            name: "Virgin Islands, US",
            code: "VI",
          },
          {
            name: "Wallis and Futuna",
            code: "WF",
          },
          {
            name: "Western Sahara",
            code: "EH",
          },
          {
            name: "Yemen",
            code: "YE",
          },
          {
            name: "Zambia",
            code: "ZM",
          },
          {
            name: "Zimbabwe",
            code: "ZW",
          },
        ],
        u = _.findWhere(d, {
          code: Cc.get("GEO"),
        }),
        p = u ? u.code : "FR";
      (e.state = {
        AL: "Alabama",
        AK: "Alaska",
        AZ: "Arizona",
        AR: "Arkansas",
        CA: "California",
        CO: "Colorado",
        CT: "Connecticut",
        DE: "Delaware",
        DC: "District of Columbia",
        FL: "Florida",
        GA: "Georgia",
        HI: "Hawaii",
        ID: "Idaho",
        IL: "Illinois",
        IN: "Indiana",
        IA: "Iowa",
        KS: "Kansas",
        KY: "Kentucky",
        LA: "Louisiana",
        ME: "Maine",
        MD: "Maryland",
        MA: "Massachusetts",
        MI: "Michigan",
        MN: "Minnesota",
        MS: "Mississippi",
        MO: "Missouri",
        MT: "Montana",
        NE: "Nebraska",
        NV: "Nevada",
        NH: "New Hampshire",
        NJ: "New Jersey",
        NM: "New Mexico",
        NY: "New York",
        NC: "North Carolina",
        ND: "North Dakota",
        OH: "Ohio",
        OK: "Oklahoma",
        OR: "Oregon",
        PA: "Pennsylvania",
        RI: "Rhode Island",
        SC: "South Carolina",
        SD: "South Dakota",
        TN: "Tennessee",
        TX: "Texas",
        UT: "Utah",
        VT: "Vermont",
        VA: "Virginia",
        WA: "Washington",
        WV: "West Virginia",
        WI: "Wisconsin",
        WY: "Wyoming",
      }),
        (e.tmpHolder = User.get("firstName") + " " + User.get("lastName")),
        (e.user = {
          cu: p,
          cur: User.get("currency"),
          cty: "VSA",
          emm: "01",
          eyy: moment().get("year").toString(),
          fn: User.get("firstName"),
          ln: User.get("lastName"),
          is_fail_limit: "0",
          card_type: "all",
          cascade: {
            limit: !1,
          },
        }),
        (e.amount = c.slider.bronze),
        e.$watch("cd", function () {
          if (!_.isUndefined(e.cd) && !_.isUndefined(e.cd.cty)) {
            if ("" == e.cd.cnu) return void (e.cd = {});
            (e.user = angular.copy(e.cd)), (l.card = angular.copy(e.cd));
          }
        }),
        (e.addNew = function () {
          (e.cd = void 0),
            (e.user = {
              cu: p,
              cur: User.get("currency"),
              cty: "VSA",
              emm: "01",
              eyy: moment().get("year").toString(),
              fn: User.get("firstName"),
              ln: User.get("lastName"),
              card_type: "all",
              cascade: {
                limit: !1,
              },
            }),
            e.$broadcast("NeedUpdateUiDropdown", {});
        }),
        (e.checkMin = function () {
          return !0;
        }),
        (e.checkCardLen = function () {
          return (
            !!e.user.card_length_valid ||
            (i.displayToastNew(
              "error",
              "Valid card length " + e.user.card_length.join(" or ")
            ),
            !1)
          );
        }),
        (e.checkCardType = function () {
          var a = ["visa", "mastercard", "maestro"];
          return (
            $.inArray(e.user.card_type, a) != -1 ||
            (i.displayToastNew("error", "Invalid card type."), !1)
          );
        }),
        (e.checkFormValid = function () {
          return (
            !e.save_card_form.$invalid ||
            (i.displayToastNew("error", "Please fill the required fields"), !1)
          );
        }),
        (e.displayToast = function (e, a, t) {
          t || (t = 5e3), s.displayToastAmaran(e, a);
        }),
        (e.showModal = function (e) {
          s.showAlert(
            "Capy Wow here",
            '<b class="ui red inverted header">Hellow</b>',
            "ÐžÐº"
          );
        }),
        (e.onlySave = function (t) {
          return (
            !!(e.checkFormValid() && e.checkCardType() && e.checkCardLen()) &&
            (e.setUserFL(),
            (e.user.cnu = r.normalize(e.user.cnu)),
            (e.button_loading = !0),
            a
              .post("/api/card/save", e.user)
              .success(function (a, t, n, o) {
                (e.cd = e.user), (e.button_loading = !1);
              })
              .error(function (a, t, n, o) {
                (e.button_loading = !1),
                  i.displayToastNew("error", Lang.get("auth.server_error"));
              }),
            !1)
          );
        }),
        (e.saveCard = function (t) {
          e.checkFormValid() &&
            e.checkCardType() &&
            e.checkCardLen() &&
            e.checkMin() &&
            (e.setUserFL(),
            (e.user.cnu = r.normalize(e.user.cnu)),
            (e.button_loading = !0),
            a
              .post("/api/card/save", e.user)
              .success(function (a, t, n, o) {
                (e.cd = e.user),
                  (e.button_loading = !1),
                  (e.whait = !0),
                  e.SandPay();
              })
              .error(function (a, t, n, o) {
                (e.button_loading = !1),
                  i.displayToastNew("error", Lang.get("auth.server_error"));
              }));
        }),
        (e.setUserFL = function () {
          var a = e.tmpHolder,
            t = " ";
          a.indexOf(",") !== -1 && (t = ","),
            a.indexOf(", ") !== -1 && (t = ", "),
            (e.user.fn = e.tmpHolder.split(t)[0]),
            (e.user.ln = e.tmpHolder.split(t)[1]
              ? e.tmpHolder.split(t).splice(1).join(t)
              : User.get("LastName"));
        }),
        (e.scrollFo = function () {
          var e = $("#input-number");
          $("html, body").animate(
            {
              scrollTop: e.offset().top,
            },
            500
          ),
            e.focus();
        }),
        (e.SandPay = function () {
          if (c.isDemoAccount()) return c.showDemoAlert();
          var a = e.$parent.slider.is_bonus ? 1 : 0,
            t = e.$parent.slider.is_fixed ? 1 : 0,
            n = e.$parent.slider.value,
            o = e.user.card_type;
          e.checkMin() && i.WorkerAuto(a, t, n, o);
        }),
        (e.CheckUserCarType = function () {
          var a = {};
          (a =
            "" == e.user.cnu || void 0 == e.user.cnu
              ? {
                  type: "all",
                  valid_length: !1,
                }
              : r.CheckCardNumber(e.user.cnu)),
            (e.user.card_type = a.type),
            (e.user.card_length_valid = a.valid_length),
            (e.user.card_length = a.valid_card_len);
        }),
        (e.SetAmount = function (a, t) {
          e.amount = parseFloat(t);
        }),
        (e.SetAmountDigest = function (a, t) {
          e.amount = parseFloat(t);
          try {
            e.$digest();
          } catch (n) {
            console.log(n);
          }
        }),
        e.$on("slideUiSlide", e.SetAmountDigest),
        e.$on("SliderSetValue", e.SetAmount),
        n.$on("cascade:wait", function (a, t) {
          e.whait = t;
        }),
        (e.isCanQuickTop = function () {
          return parseInt(User.depositsTotal) > 0 && "1" == User.fillCard;
        }),
        (e.limited = 0),
        (e.amg = 0),
        (e.QuickAdd = function (e) {
          var t = User.currency,
            n = Lang.get("cards.fast.alert_confirm").format(e, t),
            o = Lang.get("cards.fast.alert_header"),
            r = Lang.get("cards.fast.alert_btn_ok"),
            l = Lang.get("cards.fast.alert_btn_cancel"),
            c = "visa";
          s.showConfirm(
            o,
            n,
            function () {
              a.post("/api/report/quick", {
                amount: e,
                fixed: 0,
                bonus: 0,
              }),
                i.WorkerAuto(0, 0, e, c),
                s.CloseAll();
            },
            !1,
            {
              ok: r,
              cancel: l,
              cancel_class: "",
            }
          );
        }),
        (e.ignoreLimited = function () {
          a.post("/api/triggers/limited_ignore"),
            User.set("limited_ignore", "yes");
        }),
        (e.ignoreLimitedAndTop = function () {
          e.ignoreLimited();
          var t = "visa";
          a.post("/api/report/quick", {
            amount: e.amg,
            fixed: 0,
            bonus: 0,
          }),
            i.WorkerAuto(0, 0, e.amg, t);
        }),
        (e.aceptLimited = function () {
          a.post("/api/triggers/limited_yes");
          var t = "visa";
          a.post("/api/report/quick", {
            amount: e.limited,
            fixed: 0,
            bonus: 0,
          }),
            i.WorkerAuto(0, 0, e.limited, t);
        }),
        (e.can_top_up = e.isCanQuickTop()),
        e.$on("limited-offer:accept", e.aceptLimited),
        e.$on("limited-offer:ignore", e.ignoreLimited),
        e.$on("limited-offer:ignoreandtop", e.ignoreLimitedAndTop),
        n.$on("cascade:limit", function (a, t) {
          (e.user.cascade.limit = !0), (e.whait = !1);
        }),
        (e.isNeedBroadcastBTCpopup = function () {
          l.btc_show ||
            $(".ui.dimmer .deposit_and_withdraw").length > 0 ||
            Cc.get("SESSION.register_event") ||
            n.$broadcast("bitcoin:popup:show", {});
        }),
        (e.isBitcoinPopup = function () {
          User.get("btc_deposit") ||
            $(".card_save_form input").focus(e.isNeedBroadcastBTCpopup);
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$templateCache",
      "Cascade",
      "Ayden",
      "ModalService",
      "Store",
      "Ranger",
    ]),
      angular.module("app").controller("Cards", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.hash = ""),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.info = User),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          return "su" === e.status || "ex" === e.status
            ? void (
                e.is_vload &&
                "su" === e.status &&
                (location.href = "/api/vload/finish")
              )
            : void a({
                method: "POST",
                url: "/api/btc/check",
                data: {
                  guid: $(".guid").html(),
                },
              })
                .success(function (a) {
                  (e.status = a.status), (e.hash = a.hash);
                })
                .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          o.run("btc", e.dec, e.callback);
        }, 300),
        (e.goToBlckchain = function () {
          var a = "https://blockchain.info/tx/" + e.hash,
            t = window.open(a, "_blank");
          t.focus();
        }),
        e.getStatus(),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("ChangellyInvoice", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.is_open = !1),
        (e.is_loading = !1),
        (e.chat_url = User.get("userId")
          ? Settings.get("chat_auth")
          : Settings.get("chat")),
        (e.is_first_load = !1),
        (e.chat_need_hide = !0),
        (e.toggle = function () {
          e.is_open = !e.open;
        }),
        (e.close = function () {
          e.is_open = !1;
          try {
            gtag("event", "click", {
              event_category: "video_chat",
              event_label: "close",
            });
          } catch (a) {
            console.log("gtag error", a);
          }
        }),
        (e.addVerification = function () {
          e.chat_url += "&verification=on";
        }),
        (e.chatDisabled = function () {
          return "yes" == Settings.get("chat_disabled");
        }),
        (e.getChatUrl = function () {
          return User.get("userId")
            ? Settings.get("chat_auth")
            : Settings.get("chat");
        }),
        (e.isNeedHide = function () {
          var a = Settings.get("chat_hide") ? Settings.get("chat_hide") : [],
            t =
              location.pathname.split("/").length > 2
                ? location.pathname.split("/").pop()
                : location.pathname;
          return $.inArray(t, a) != -1 || e.chatDisabled();
        }),
        (e.isNeedShowChat = function () {
          var e = Settings.get("chat_show") ? Settings.get("chat_show") : [],
            a =
              location.pathname.split("/").length > 2
                ? location.pathname.split("/").pop()
                : location.pathname;
          return $.inArray(a, e) != -1;
        }),
        (e.setEmployee = function () {
          a({
            method: "POST",
            url: "/api/triggers/last_host",
          }).success(function () {});
        }),
        (e.fixIframe = function () {
          setTimeout(function () {
            var e = $(".fixed-chat").height();
            $(".chat-iframe iframe").attr("height", e + "px");
          }, 300);
        }),
        (e.open = function () {
          e.is_open || (e.is_open = !0),
            e.is_first_load ||
              (setTimeout(function () {
                (e.is_loading = !User.get("userId")),
                  User.get("userId")
                    ? e.getToken()
                    : (e.fixIframe(), e.addLangSig()),
                  e.$digest();
              }, 1e3),
              (e.is_first_load = !0));
          try {
            gtag("event", "click", {
              event_category: "video_chat",
              event_label: "open",
            });
          } catch (a) {
            console.log("gtag error", a);
          }
        }),
        (e.addLangSig = function () {
          e.chat_url += "&language=" + Lang.get("sig").toUpperCase();
        }),
        (e.getToken = function () {
          a({
            method: "POST",
            url: "/api/chat/token",
          })
            .success(function (a) {
              (e.chat_url += a.token),
                e.addLangSig(),
                (e.is_loading = !0),
                e.fixIframe(),
                setTimeout(e.setEmployee, 4e3);
            })
            .error(function (e) {});
        }),
        (e.isMobile = function () {
          Cc.get("SESSION.is_mobile") && $(".fixed-chat").hide(),
            Cc.get("INPUT.mobileapp") && $(".fixed-chat").hide();
        }),
        (e.isNeedShow = function () {
          var a = Settings.get("chat_show") ? Settings.get("chat_show") : [];
          return a.length > 0
            ? void (e.isNeedShowChat() && (e.chat_need_hide = !1))
            : void (e.isNeedHide() || (e.chat_need_hide = !1));
        }),
        (e.SubscribePlatformEvents = function () {
          var e = window.addEventListener ? "addEventListener" : "attachEvent",
            a = window[e],
            t = "attachEvent" == e ? "onmessage" : "message";
          a(
            t,
            function (e) {
              var a = e.message ? "message" : "data",
                t = e[a];
              try {
                var n = angular.fromJson(t);
                o.$broadcast("out:" + n.event, n.data);
              } catch (e) {
                console.log("event debug:", e, t);
              }
            },
            !1
          );
        }),
        (e.chatPromo = function (e, a) {
          var t = a.videoId;
          $.magnificPopup.open({
            items: {
              src: "https://www.youtube.com/watch?v=" + t,
            },
            type: "iframe",
            iframe: {
              markup:
                '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
              patterns: {
                youtube: {
                  index: "youtube.com/",
                  id: "v=",
                  src: "//www.youtube.com/embed/%id%?autoplay=1",
                },
              },
            },
          });
        }),
        (e.chat_progress = !1),
        (e.chatVerify = function () {
          e.chat_progress ||
            ((e.chat_progress = !0),
            a({
              method: "POST",
              url: "/api/chat/token",
            })
              .success(function (a) {
                (e.chat_url = e.getChatUrl()),
                  (e.chat_url += a.token),
                  e.addLangSig(),
                  e.addVerification(),
                  (e.is_open = !0),
                  (e.is_loading = !0),
                  e.fixIframe(),
                  e.triggerLastHost(),
                  (e.chat_progress = !1);
              })
              .error(function (e) {}));
        }),
        o.$on("out:chat:promo", e.chatPromo),
        o.$on("chat:verification", e.chatVerify),
        e.SubscribePlatformEvents(),
        (e.chatOff = function () {
          var a = "yes" === Settings.get("chat_off");
          if (a && e.isNeedShowChat()) {
            var t = Settings.get("jivo_id"),
              n = (document, window, document.createElement("script"));
            (n.type = "text/javascript"),
              (n.async = !0),
              (n.src = "//code.jivosite.com/script/widget/" + t);
            var o = document.getElementsByTagName("script")[0];
            o.parentNode.insertBefore(n, o);
          }
          return a;
        }),
        e.chatOff() ||
          (e.isNeedShow(),
          e.isMobile(),
          (e.chatNeedOpenGet = function () {
            setTimeout(function () {
              Cc.get("INPUT_LOCAL.chat_open") && User.get("userId") && e.open();
            }, 401);
          }),
          (e.getCookie = function (e) {
            var a = document.cookie.match(
              new RegExp(
                "(?:^|; )" +
                  e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                  "=([^;]*)"
              )
            );
            return a ? decodeURIComponent(a[1]) : void 0;
          }),
          e.chatNeedOpenGet(),
          (e.isNeedShowGift = function () {
            setTimeout(function () {
              User.get("userId") ||
                e.getCookie("gift") ||
                $.inArray(location.pathname, ["/", "/en"]) === -1 ||
                window.testEnter();
            }, 15e3);
          }),
          (window.testEnter = function () {
            i.showFancy("/api/ag/modal_enter");
          }),
          e.isNeedShowGift());
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "ChatService",
      "$rootScope",
      "ModalService",
    ]),
      angular.module("app").controller("Chat", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t) {
      (e.error = ""),
        (e.success = !1),
        (e.loading = !1),
        (e.mail = {
          message: "",
          phone: "",
          email: "",
          name: "",
        }),
        (e.send = function () {
          (e.loading = !0),
            a({
              method: "POST",
              url: "/api/contacts",
              data: e.mail,
            })
              .success(function (a, t, n, o) {
                "false" == a["return"]
                  ? ((e.error = a.error),
                    $(".message.em").transition("shake"),
                    (e.loading = !1))
                  : ((e.error = ""), (e.message = a.message), (e.success = !0));
              })
              .error(function (a) {
                (e.loading = !1),
                  (e.error = a.message
                    ? a.message
                    : Lang.get("auth.server_error")),
                  $(".message.em").transition("shake");
              });
        });
    };
    (e.$inject = ["$scope", "$http", "$timeout"]),
      angular.module("app").controller("Contacts", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.hash = ""),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.info = User),
        (e.more = {}),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          "su" !== e.status &&
            "ex" !== e.status &&
            a({
              method: "POST",
              url: "/api/crypto/" + e.more.method + "/check",
              data: {
                guid: $(".guid").html(),
              },
            })
              .success(function (a) {
                (e.status = a.status), (e.hash = a.hash);
              })
              .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        (e.goToBlckchain = function () {
          var a = e.hash,
            t = "";
          switch (e.more.method) {
            case "btc":
              t = "https://blockchair.com/bitcoin/transaction/" + a;
              break;
            case "usdt":
              t = "https://omniexplorer.info/search/" + a;
              break;
            case "bch":
              t = "https://blockchair.com/bitcoin-cash/transaction/" + a;
              break;
            case "eth":
              t = "https://etherscan.io/tx/" + a;
              break;
            case "token":
              t = "https://etherscan.io/tx/" + a;
              break;
            case "ltc":
              t = "https://blockchair.com/litecoin/transaction/" + a;
              break;
            case "dash":
              t = "https://blockchair.com/dash/transaction/" + a;
              break;
            case "zec":
              t = "https://blockchair.com/zcash/transaction/" + a;
          }
          var n = window.open(t, "_blank");
          n.focus();
        }),
        (e.initQR = function () {
          new QRCode("qrcode", {
            text: e.more.address,
            width: 140,
            height: 140,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
          });
        }),
        setTimeout(function () {
          o.run("btc", e.dec, e.callback);
        }, 300),
        setTimeout(function () {
          e.initQR(), e.getStatus();
        }, 100),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("CryptoInvoice", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.hash = ""),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          "su" != e.status &&
            "ex" != e.status &&
            a({
              method: "POST",
              url: "/api/dash/check",
              data: {
                guid: $(".guid").html(),
              },
            })
              .success(function (a) {
                (e.status = a.status), (e.hash = a.hash);
              })
              .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          o.run("btc", e.dec, e.callback);
        }, 300),
        (e.goToBlckchain = function () {
          var a = "https://live.blockcypher.com/dash/tx/" + e.hash,
            t = window.open(a, "_blank");
          t.focus();
        }),
        e.getStatus(),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("DASHinvoice", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.qr = o.qr),
        (e.type = o.type),
        (e.text = o.email_text),
        (e.secret = ""),
        (e.inputs_loading = !1),
        (e.error = !1),
        (e.disabled = !1),
        (e.initInputs = function () {
          var o = $(".code-area"),
            i = o.find(":input"),
            r = !1,
            s = o.find("[name=pincode-1]"),
            l = o.find("[name=pincode-2]"),
            c = o.find("[name=pincode-3]"),
            d = o.find("[name=pincode-4]"),
            u = o.find("[name=pincode-5]");
          o.find("[name=pincode-6]");
          i.on("keyup", function (e) {
            var a = e.keyCode || e.which;
            9 !== a || e.shiftKey || e.preventDefault();
          }).inputmask({
            mask: "9",
            placeholder: "",
            showMaskOnHover: !1,
            showMaskOnFocus: !1,
            clearIncomplete: !0,
            oncomplete: function () {
              p.push($(this).val()), !r || console.log("inputmask incomplete");
            },
            oncleared: function () {
              var e = i.index(this),
                a = e - 1,
                t = e + 1;
              return (
                a >= 0 &&
                (i.eq(a).focus(),
                p.splice(-1, 1),
                void (!r || console.log("[oncleared]", a, e, t)))
              );
            },
            onKeyDown: function (e, a, t, n) {
              if ("Backspace" === e.code) {
                var o = i.index(this),
                  r = o - 1;
                if (!(r >= 0)) return !1;
                i.eq(r).val(""), i.eq(r).focus(), p.splice(-1, 1);
              }
            },
            onKeyValidation: function (e, a) {
              var t = i.index(this),
                n = t - 1,
                o = t + 1;
              n < 6 && i.eq(o).focus(),
                !r || console.log("[onKeyValidation]", t, e, a, p);
            },
            onBeforePaste: function (e, a) {
              return (
                $.each(e.split(""), function (e, a) {
                  i.eq(e).val(a),
                    !r || console.log("[onBeforePaste:each]", e, a);
                }),
                (p = e.split("")),
                m(),
                !1
              );
            },
          });
          var p = [];
          $("[name=pincode-6]")
            .on("focus", function (e) {
              ("" !== s.val().trim() &&
                "" !== l.val().trim() &&
                "" !== c.val().trim() &&
                "" !== d.val().trim() &&
                "" !== u.val().trim()) ||
                (e.preventDefault(),
                (p = []),
                i.each(function () {
                  $(this).val("");
                }),
                s.focus()),
                !r || console.log("[6:focus]", p);
            })
            .inputmask({
              oncomplete: function () {
                p.push($(this).val()),
                  6 !== p.length
                    ? ((p = []),
                      i.each(function () {
                        $(this).val("");
                      }),
                      s.focus())
                    : m(),
                  !r || console.log("[6:oncomplete]", p);
              },
            });
          var m = function () {
            (e.inputs_loading = !0),
              a({
                method: "POST",
                url: "/api/fraud/factors_check",
                data: {
                  type: e.type,
                  code: p.join(""),
                },
              })
                .success(function (a) {
                  a.success
                    ? (n.closeFancy(),
                      setTimeout(function () {
                        t.$broadcast("email:success:factors", {});
                      }, 400))
                    : ((e.error = a.message),
                      i.each(function () {
                        $(this).val("");
                      }),
                      s.focus(),
                      (p = []),
                      (e.disabled = a.disabled)),
                    (e.inputs_loading = a.disabled);
                })
                .error(function (a) {
                  (e.inputs_loading = !1), console.log("error update user!", a);
                });
          };
          setTimeout(function () {
            s.focus();
          }, 300);
        }),
        setTimeout(function () {
          e.initInputs();
        }, 100),
        (e.copySecret = function () {
          e.copyToClipboard($(".copy-text")[0])
            ? n.displayToastAmaran("success", "Copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (a) {
          var t = "string" == typeof a ? document.querySelector(a) : a;
          if (
            ("" === t.value && (t.value = e.secret),
            navigator.userAgent.match(/ipad|ipod|iphone/i))
          ) {
            var n = t.contentEditable,
              o = t.readOnly;
            (t.contentEditable = !0), (t.readOnly = !0);
            var i = document.createRange();
            i.selectNodeContents(t);
            var r = window.getSelection();
            r.removeAllRanges(),
              r.addRange(i),
              t.setSelectionRange(0, 999999),
              (t.contentEditable = n),
              (t.readOnly = o);
          } else t.select();
          return document.execCommand("copy");
        }),
        (e.resendCode = function () {
          a({
            method: "POST",
            url: "/api/fraud/two_factors",
            data: {
              type: "email_resend",
              state: !0,
            },
          })
            .success(function (e) {
              e.success
                ? n.displayToastAmaran("success", "Successfully")
                : n.displayToastAmaran("error", e.message);
            })
            .error(function (e) {});
        });
    };
    (e.$inject = ["$scope", "$http", "$rootScope", "ModalService", "Store"]),
      angular.module("app").controller("EmailValidate", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          "wt" == e.status &&
            a({
              method: "POST",
              url: "/api/eth/check",
              data: {
                guid: $(".guid").html(),
              },
            })
              .success(function (a) {
                e.status = a.status;
              })
              .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          o.run("eth", e.dec, e.callback);
        }, 300),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("ETHinvoice", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.type = User.get("two_factor")),
        (e.inputs_loading = !1),
        (e.error = !1),
        (e.disabled = !1),
        (e.initInputs = function () {
          var t = $(".code-area-max"),
            n = t.find(":input"),
            o = !1,
            i = t.find("[name=pincode-1]"),
            r = t.find("[name=pincode-2]"),
            s = t.find("[name=pincode-3]"),
            l = t.find("[name=pincode-4]"),
            c = t.find("[name=pincode-5]");
          t.find("[name=pincode-6]");
          n.on("keyup", function (e) {
            var a = e.keyCode || e.which;
            9 !== a || e.shiftKey || e.preventDefault();
          }).inputmask({
            mask: "9",
            placeholder: "",
            showMaskOnHover: !1,
            showMaskOnFocus: !1,
            clearIncomplete: !0,
            oncomplete: function () {
              d.push($(this).val()), !o || console.log("inputmask incomplete");
            },
            oncleared: function () {
              var e = n.index(this),
                a = e - 1,
                t = e + 1;
              return (
                a >= 0 &&
                (n.eq(a).focus(),
                d.splice(-1, 1),
                void (!o || console.log("[oncleared]", a, e, t)))
              );
            },
            onKeyDown: function (e) {
              if ("Backspace" === e.code) {
                var a = n.index(this),
                  t = a - 1;
                if (!(t >= 0)) return !1;
                n.eq(t).val(""), n.eq(t).focus(), d.splice(-1, 1);
              }
            },
            onKeyValidation: function (e, a) {
              var t = n.index(this),
                i = t - 1,
                r = t + 1;
              i < 6 && n.eq(r).focus(),
                !o || console.log("[onKeyValidation]", t, e, a, d);
            },
            onBeforePaste: function (e, a) {
              return (
                $.each(e.split(""), function (e, a) {
                  n.eq(e).val(a),
                    !o || console.log("[onBeforePaste:each]", e, a);
                }),
                (d = e.split("")),
                u(),
                !1
              );
            },
          });
          var d = [];
          $("[name=pincode-6]")
            .on("focus", function (e) {
              ("" !== i.val().trim() &&
                "" !== r.val().trim() &&
                "" !== s.val().trim() &&
                "" !== l.val().trim() &&
                "" !== c.val().trim()) ||
                (e.preventDefault(),
                (d = []),
                n.each(function () {
                  $(this).val("");
                }),
                i.focus()),
                !o || console.log("[6:focus]", d);
            })
            .inputmask({
              oncomplete: function () {
                d.push($(this).val()),
                  6 !== d.length
                    ? ((d = []),
                      n.each(function () {
                        $(this).val("");
                      }),
                      i.focus())
                    : u(),
                  !o || console.log("[6:oncomplete]", d);
              },
            }),
            setTimeout(function () {
              i.focus();
            }, 300);
          var u = function () {
            (e.inputs_loading = !0),
              a({
                method: "POST",
                url: "/api/fraud/factors_check",
                data: {
                  type: e.type,
                  code: d.join(""),
                },
              })
                .success(function (a) {
                  a.success
                    ? location.reload()
                    : ((e.error = a.message),
                      n.each(function () {
                        $(this).val("");
                      }),
                      i.focus(),
                      (d = []),
                      (e.disabled = a.disabled)),
                    (e.inputs_loading = a.disabled);
                })
                .error(function (a) {
                  (e.inputs_loading = !1), console.log("error update user!", a);
                });
          };
        }),
        setTimeout(function () {
          e.initInputs();
        }, 100);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope", "ModalService"]),
      angular.module("app").controller("FactorAuth", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t) {
      (e.error = ""),
        (e.email = ""),
        (e.message = ""),
        (e.server = !1),
        (e.loading = !1),
        (e.forget = function () {
          (e.loading = !0),
            a({
              method: "POST",
              url: "/api/forget",
              data: {
                email: e.email,
              },
            })
              .success(function (a, t, n, o) {
                "false" == a["return"]
                  ? ((e.error = a.error),
                    $(".message.em").transition("shake"),
                    (e.loading = !1))
                  : ((e.error = ""), (e.message = a.message), (e.server = !0));
              })
              .error(function (a) {
                (e.loading = !1),
                  (e.error = a.message
                    ? a.message
                    : Lang.get("auth.server_error")),
                  $(".message.em").transition("shake");
              });
        });
    };
    (e.$inject = ["$scope", "$http", "$timeout"]),
      angular.module("app").controller("LoginForget", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      (e.tabs = {
        default: {
          card_moneta: "hide",
          card: "recomended active",
          bitcoin: "",
          vload: "hide",
          litecoin: "",
          eth: "hide",
          ltc: "hide",
          neteller: "hide",
          skrill: "hide",
          perfect: "",
          webmoney: "hide",
          yandex: "hide",
          qiwi: "hide",
          okpay: "hide",
          bank: "",
          mobile: {
            card_moneta: "ng-hide",
            card: "active",
            bitcoin: "",
            ltc: "ng-hide",
            eth: "ng-hide",
            neteller: "ng-hide",
            skrill: "ng-hide",
            perfect: "",
            webmoney: "ng-hide",
            yandex: "ng-hide",
            qiwi: "ng-hide",
            okpay: "ng-hide",
            vload: "ng-hide",
          },
          current_path: "card",
        },
        ru: {
          card_moneta: "recomended active",
          card: "",
          bitcoin: "",
          litecoin: "",
          ltc: "hide",
          eth: "hide",
          neteller: "hide",
          skrill: "hide",
          perfect: "",
          webmoney: "hide",
          yandex: "",
          qiwi: "hide",
          okpay: "hide",
          bank: "hide",
          vload: "hide",
          mobile: {
            card_moneta: "active",
            card: "active",
            bitcoin: "",
            neteller: "ng-hide",
            skrill: "ng-hide",
            perfect: "",
            webmoney: "ng-hide",
            yandex: "",
            qiwi: "ng-hide",
            okpay: "ng-hide",
            vload: "ng-hide",
          },
          current_path: "card_moneta",
        },
        current_path: "card",
      }),
        (e.skrillGeo = function () {
          var a =
            $.inArray(Cc.get("GEO"), [
              "DE",
              "GB",
              "BE",
              "FR",
              "ES",
              "CN",
              "HK",
              "IL",
              "MO",
              "SG",
              "AE",
              "CA",
              "TR",
              "US",
              "JP",
            ]) !== -1;
          (e.tabs["default"].skrill = a ? "hide" : ""),
            (e.tabs["default"].mobile.skrill = a ? "ng-hide" : "");
        }),
        (e.isExDemo = function () {
          return (
            $.inArray(User.userId, ["ROUM00021098", "ROTAM00021228"]) !== -1
          );
        }),
        e.tabs[Lang.get("sig")] &&
          (e.tabs["default"] = e.tabs[Lang.get("sig")]),
        e.tabs[User.get("currency")] &&
          (e.tabs["default"] = e.tabs[User.get("currency")]),
        (e.isRisk = function () {
          return User.get("cardRisk") && "Full" !== User.get("verification");
        }),
        (e.isRiskPartner = function () {
          User.get("cardRisk") &&
            "Full" !== User.get("verification") &&
            ((e.tabs["default"].current_path = "bitcoin"),
            (e.tabs["default"].card = ""),
            (e.tabs["default"].bitcoin = "active"),
            setTimeout(function () {
              $(".pay-tabs").prepend($('.pay-tabs [data-tab="bitcoin"]')),
                $('.pay-tabs [data-tab="bitcoin"]').addClass("active");
            }, 300));
        }),
        e.isRiskPartner(),
        (e.info = User),
        (e.lang = Lang),
        (e.random = {}),
        (e.promo = Cc.get("SESSION.promo") ? Cc.get("SESSION.promo") : ""),
        (e.promo_toggle = "" != e.promo),
        (e.promo_loading = !1),
        (e.promo_error = ""),
        (e.promo_success_show = !1),
        (e.promo_danger_show = !1),
        (e.pm = 1e3),
        (e.bitcoin_rates = {}),
        (e.exchange = {
          BTC: 0,
          ETH: 0,
          LTC: 0,
          DASH: 0,
          BCH: 0,
          XRP: 0,
          ZEC: 0,
          XMR: 0,
          ETC: 0,
          NEO: 0,
          USD: 0,
          EUR: 0,
        }),
        (e.wm = {
          account: "WMZ",
          wallet: "",
          allow: {
            WMZ: "Z397995960768",
            WMR: "R991160500597",
            WME: "E284054825925",
          },
        }),
        (e.bitcoin = {
          wallet: "",
          address: Settings.get("bitcoin")
            ? Settings.get("bitcoin")
            : "comin soon",
        }),
        (e.MinDeposit = s.minDeposit),
        (e.range = s.slider),
        (e.ranger = s),
        (e.slider = {
          value: s.slider.bronze,
          is_bonus: !1,
          is_fixed: !1,
          deposit: "silver",
          procent: 1.5,
          procent_add: 0,
          procent_value: 50,
          procent_value_add: 0,
          dec: s.decimals,
        });
      var d = 0;
      if (
        ((e.maxBonus = Settings.get("max_bonus")
          ? parseInt(Settings.get("max_bonus"))
          : 200),
        (e.maxProc = Settings.get("max_bonus_proc")
          ? parseFloat(Settings.get("max_bonus_proc"))
          : 3.5),
        (e.OnUpdateSlide = function (a, t) {
          if (t[0]) {
            if (
              ((e.slider.value = parseFloat(t[0])),
              e.slider.value >= s.slider.silver
                ? ((e.slider.deposit = "gold"),
                  (e.slider.procent = 2),
                  (e.slider.procent_value = 100))
                : e.slider.value >= s.slider.bronze
                ? ((e.slider.deposit = "silver"),
                  (e.slider.procent = 1.5),
                  (e.slider.procent_value = 50))
                : ((e.slider.deposit = "bronze"),
                  (e.slider.procent = 1.2),
                  (e.slider.procent_value = 20)),
              (e.slider.procent += e.slider.procent_add),
              (e.slider.procent =
                e.slider.procent > e.maxProc ? e.maxProc : e.slider.procent),
              (e.slider.procent_value += e.slider.procent_value_add),
              (e.slider.procent_value =
                e.slider.procent_value > e.maxBonus
                  ? e.maxBonus
                  : e.slider.procent_value),
              (e.pm = e.slider.value),
              d > 2)
            )
              try {
                e.$digest();
              } catch (n) {
                console.log(n);
              }
            d++;
          }
        }),
        (e.DepositBlur = function () {
          return "undefined" != typeof window.binary_debug
            ? void e.setMinToSlider(parseInt(e.slider.value))
            : (e.slider.value < e.MinDeposit && (e.slider.value = e.MinDeposit),
              e.setMinToSlider(parseInt(e.slider.value)),
              (e.pm = e.slider.value),
              n.$broadcast("slideUiEnd", e.slider.value),
              void e.OnUpdateSlide({}, [e.slider.value]));
        }),
        (e.ChangeFix = function (a) {
          a
            ? ((e.slider.is_bonus = !1),
              setTimeout(function () {
                $(".crypto-tabs").find(".item:visible:first").click();
              }, 100),
              e.getExchangeBalances())
            : setTimeout(function () {
                $(".cdf-tabs").find(".item:visible:first").click();
              }, 100),
            (e.slider.is_fixed = a),
            e.setMinToSlider(parseInt(e.slider.value));
        }),
        (e.GetRandomString = function (e) {
          for (var a = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = 0; n < e; n++)
            a += t.charAt(Math.floor(Math.random() * t.length));
          return a;
        }),
        (e.PayReport = function (t) {
          var n = e.bitcoin.wallet;
          (e.random[t] = e.GetRandomString(5)),
            "WebMoney" == t &&
              ((e.wm.wallet = e.wm.allow[e.wm.account]),
              (e.random[t] = "BMATE")),
            a.post("/api/report/" + t, {
              email: e.info.email,
              amount: e.slider.value,
              currency: e.info.currency,
              random: e.random[t],
              bonus: e.slider.is_bonus,
              fixed: e.slider.is_fixed,
              bitcoin: n,
            });
        }),
        (e.devMode = function () {
          window.binary_debug = !0;
        }),
        (e.setMinToSlider = function (a) {
          e.$broadcast("SliderSetValue", a);
        }),
        (e.activatePromo = function () {
          (e.promo_loading = !0),
            a({
              method: "POST",
              url: "/api/promo",
              data: {
                promo: e.promo,
              },
            })
              .success(function (a, t, n, o) {
                if ("false" === a["return"]) {
                  var i = a.message ? a.message : Lang.get("auth.server_error");
                  c.displayAlert(
                    "Promo",
                    '<div class="ui red inverted header text-center">' +
                      i +
                      "</div>"
                  );
                } else c.displayAlert("Promo", '<div class="ui 1b71fa inverted header text-center">' + Lang.get("promo.activated") + "</div>"), (e.promo = "");
                e.promo_loading = !1;
              })
              .error(function (a) {
                (e.promo_loading = !1),
                  (e.promo_error = a.message
                    ? a.message
                    : Lang.get("auth.server_error")),
                  (e.promo_loading = !1),
                  (e.promo_danger_show = !0),
                  (e.promo_success_show = !1);
              });
        }),
        (e.saveBitcoin = function () {
          e.PayReport("bitcoin"),
            a({
              method: "POST",
              url: "/api/bitcoin/save",
              data: {
                email: e.info.email,
                amount: e.slider.value,
                currency: e.info.currency,
                bonus: e.slider.is_bonus,
                fixed: e.slider.is_fixed,
                btc: e.bitcoin.wallet,
              },
            })
              .success(function (e) {})
              .error(function (e) {}),
            a({
              method: "POST",
              url: "/api/bitcoin/currency",
            })
              .success(function (a) {
                e.bitcoin_rates = a;
              })
              .error(function (e) {});
        }),
        (e.getBitcoinRates = function () {
          l.BTCrates ||
            ((l.BTCrates = !0),
            a({
              method: "POST",
              url: "/api/bitcoin/currency",
            })
              .success(function (a) {
                e.bitcoin_rates = a;
              })
              .error(function (e) {}));
        }),
        i.params.add && "entro" === i.params.add && r.entroPin(),
        i.params.add && "promo" === i.params.add)
      ) {
        var u = Cc.get("INPUT_LOCAL.prm");
        if (u) {
          (e.promo = u), (e.promo_toggle = !0);
          var p = $(".promo-form");
          p.addClass("puls-inf"),
            p.one("mouseenter mouseleave", function (e) {
              p.removeClass("puls-inf");
            }),
            setTimeout(function () {
              $("html, body").animate(
                {
                  scrollTop: $(".account-utils__list").offset().top - 200,
                },
                "fast"
              ),
                $(".promo-form").transition("tada", "1000ms");
            }, 400);
        }
      }
      if (i.params.add && "promo" === i.params.add && i.params.ng) {
        var u = i.params.ng;
        if (u) {
          (e.promo = u), (e.promo_toggle = !0);
          var p = $(".promo-form");
          p.addClass("puls-inf"),
            p.one("mouseenter mouseleave", function (e) {
              p.removeClass("puls-inf");
            }),
            setTimeout(function () {
              $("html, body").animate(
                {
                  scrollTop: $(".account-utils__list").offset().top - 200,
                },
                "fast"
              ),
                $(".promo-form").transition("tada", "1000ms");
            }, 400);
        }
      }
      if (
        ((e.promoInit = function (a, t) {
          (e.promo = t.promo), (e.promo_toggle = !0);
          var n = $(".promo-form");
          n.addClass("puls-inf"),
            n.one("mouseenter mouseleave", function (e) {
              n.removeClass("puls-inf");
            }),
            setTimeout(function () {
              $("html, body").animate(
                {
                  scrollTop: $(".account-utils__list").offset().top - 200,
                },
                "fast"
              ),
                $(".promo-form").transition("tada", "1000ms");
            }, 400);
        }),
        e.$on("slideUiSlide", e.OnUpdateSlide),
        "listen" === i.current.name)
      ) {
        var m = i.params.proc,
          f = i.params.id,
          g = i.params.uid;
        r.ListenCardCallback(m, f, g);
      }
      if (
        (i.params.add &&
          "payment_error" === i.params.add &&
          c.displayAlert(
            "Payment error",
            '<span class="ui red inverted header">Payment error, The payment hasn\'t been made</span>'
          ),
        i.params.add &&
          "payment_success" === i.params.add &&
          c.displayAlert(
            "Payment successful",
            '<span class="ui 1b71fa inverted header">Payment successful, The payment has been processed!</span>'
          ),
        i.params.add &&
          "payment_process" === i.params.add &&
          c.displayAlert(
            Lang.get("payment.process.title"),
            '<span class="ui orange inverted header">' +
              Lang.get("payment.process.message") +
              "</span>"
          ),
        i.params.add && "promo" === i.params.add)
      ) {
        var u = Cc.get("INPUT_LOCAL.prm");
        u &&
          ((e.promo = u),
          (e.promo_toggle = !0),
          setTimeout(function () {
            $("html, body").animate(
              {
                scrollTop: $(".deposit-line").offset().top - 200,
              },
              "fast"
            ),
              $(".deposit-line li:last-child").transition("tada", "1000ms");
          }, 400));
      }
      (e.payTabChange = function (a) {
        "card" == a &&
          (e.showBitcoinPopup(), e.isRisk() && e.showPartnerRiskPopup());
      }),
        (e.showPartnerRiskPopup = function () {
          c.showDynamic(
            "/api/ag/modal_risk",
            {
              theme: "",
              close: "bdw-close",
            },
            {
              onHide: function () {},
            }
          );
        }),
        (e.initMobile = function () {
          $(".mob-tabular").dropdown();
          var a = e.tabs["default"].current_path;
          a && $('.tab.segment[data-tab="' + a + '"]').addClass("active"),
            $(".popup-youtube").magnificPopup({
              disableOn: 700,
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: !1,
              fixedContentPos: !1,
            }),
            $(".tabular .item").tab({
              alwaysRefresh: !0,
              cache: !1,
              onVisible: function (a) {
                $(".tabular .item.active").removeClass("active"),
                  $('.item[data-tab="' + a + '"]').addClass("active"),
                  (e.tabs.current_path = a),
                  e.payTabChange(a);
              },
            });
        }),
        (e.isNeedShowBtcPopUp = function () {
          if (User.get("btc_deposit"));
          else {
            if (
              l.btc_show ||
              User.get("btc_deposit") ||
              e.getBtcDay() ||
              Cc.get("SESSION.register_event")
            )
              return;
            a({
              method: "POST",
              url: "/api/bitcoin/deposit",
            })
              .success(function (a) {
                "true" == a["return"]
                  ? User.set("btc_deposit", "yes")
                  : e.showBitcoinPopup();
              })
              .error(function (e) {});
          }
        }),
        (e.getBtcDay = function () {
          return localStorage.getItem(moment().format("YYMMDD"));
        }),
        (e.setBtcDay = function () {
          localStorage.setItem(moment().format("YYMMDD"), "yes");
        }),
        (e.showBitcoinPopup = function () {
          l.btc_show ||
            User.get("btc_deposit") ||
            e.getBtcDay() ||
            Cc.get("SESSION.register_event");
        }),
        (e.btcPopupAction = function () {
          $(".ui.modal").modal("hide all");
          var e = $('[data-tab="bitcoin"]');
          e.click(),
            i.go("show", {
              page: "funding",
            }),
            setTimeout(function () {
              var e = $('[data-tab="bitcoin"]');
              e.click(),
                setTimeout(function () {
                  $("html, body").animate(
                    {
                      scrollTop: e.offset().top,
                    },
                    400
                  );
                }, 300);
            }, 300);
        }),
        e.isNeedShowBtcPopUp(),
        e.initMobile(),
        e.$on("bitcoin:popup:show", e.showBitcoinPopup),
        (e.once = !0),
        (window.honorTest = function () {
          (e.once = !0),
            c.showDynamic(
              "/api/ag/modal_honor",
              {
                theme: "honor wide",
                close: "bdw-close",
              },
              {
                onHide: function () {
                  e.once &&
                    ((e.once = !1),
                    ga("send", "event", "click", "do_not_honor", "close"));
                },
              }
            );
          try {
            ga("send", "event", "show", "do_not_honor", "pop-up-banner");
          } catch (a) {
            console.log(a);
          }
        }),
        (e.fixedCurrency = "BTC"),
        (e.fixedTab = function (a) {
          $(".crypto-tabs .item.active").removeClass("active"),
            $('.crypto-tabs .item[data-tab="' + a + '"]').addClass("active"),
            $(".pay-tabs-content .segment").removeClass("active"),
            (e.fixedCurrency = a),
            "BTC" === a
              ? $('.pay-tabs-content [data-tab="bitcoin"]').addClass("active")
              : "USD" === a || "EUR" === a
              ? $('.pay-tabs-content [data-tab="fiat"]').addClass("active")
              : ($('.pay-tabs-content [data-tab="litecoin"]').addClass(
                  "active"
                ),
                $(".altcoins_drop").hide(),
                setTimeout(function () {
                  "LTC" === a
                    ? $('.dp1 [data-value="ltc"]').click()
                    : "ETH" === a
                    ? $('.dp1 [data-value="eth"]').click()
                    : "DASH" === a
                    ? $('.dp1 [data-value="dash"]').click()
                    : "ZEC" === a
                    ? $('.dp1 [data-value="zcash"]').click()
                    : $('.dp1 [data-value="other"]').click();
                }, 100));
        }),
        (e.getExchangeBalances = function () {
          a.post("/api/triggers/exchange")
            .success(function (a) {
              $.each(a, function (a, t) {
                e.exchange[a] = t;
              });
            })
            .error(function (e) {});
        }),
        (e.initDropDown = function () {
          setTimeout(function () {
            $(".amount-dropdown").dropdown(), e.initCurrentAccount();
          }, 200);
        }),
        (e.addAccount = function () {
          c.showFancy("/api/ag/modal_add_account"),
            $(".amount-dropdown").dropdown("hide");
        }),
        (e.addAccountWallet = function (a, t) {
          var o = User.balances;
          (t.data.amount = 0),
            (t.data.netAmount = 0),
            o.push(t.data),
            User.set("balances", o),
            (e.info = User),
            setTimeout(function () {
              $(".amount-dropdown ." + t.data.accountId).click();
            }, 600),
            setTimeout(function () {
              n.$broadcast("user:update");
            }, 4e3);
        }),
        (e.current_balance = {}),
        (e.initBalance = !1),
        (e.initCurrentAccount = function () {
          var a = User.get("balances");
          if (a && _.isArray(a)) {
            if (1 !== a.length || User.get("current_accountId")) {
              var t = _.findWhere(a, {
                accountId: User.get("current_accountId"),
              });
              e.current_balance = t
                ? t
                : {
                    amount: "Exchange account",
                    type: "exchange",
                  };
            } else
              (e.current_balance = _.first(a)), e.setAccountId(d.accountId);
            e.current_balance.accountId
              ? ($(".amount-dropdown ." + e.current_balance.accountId).click(),
                (e.initBalance = !0))
              : ($(".amount-dropdown .exchange-item").click(), e.ChangeFix(!0));
          }
        }),
        (e.changeCurrentAccount = function (a) {
          if ((e.ChangeFix(!1), e.current_balance.accountId !== a.accountId)) {
            var t = User.get("balances");
            (e.current_balance = _.findWhere(t, {
              accountId: a.accountId,
            })),
              e.setAccountId(a.accountId),
              s.updateCurrency(a.currency);
          }
        }),
        (e.changeAccountExchange = function () {
          e.ChangeFix(!0), e.setAccountIdExchange();
        }),
        (e.setAccountId = function (e) {
          a({
            method: "POST",
            url: "/api/us/set_account",
            data: {
              account: e,
            },
          })
            .success(function (e) {})
            .error(function (e) {
              c.displayToastAmaran(
                "error",
                "Some errors, please try again. Cant set account id."
              );
            });
        }),
        (e.setAccountIdExchange = function () {
          a({
            method: "POST",
            url: "/api/us/set_account_exchange",
            data: {},
          })
            .success(function (e) {})
            .error(function (e) {
              c.displayToastAmaran(
                "error",
                "Some errors, please try again. Cant set account id."
              );
            });
        }),
        (e.updateInfo = function () {
          (e.info = angular.copy(User)),
            setTimeout(function () {
              $(
                ".wallet-drop-func .menu .item." + User.current_accountId
              ).click();
            }, 100);
        }),
        (e.loadPromotionsProcent = function () {
          a({
            method: "POST",
            url: "/api/us/promotions_max",
            data: {},
          }).success(function (a) {
            a.bonus > 0 &&
              ((e.slider.is_bonus = !0),
              (e.slider.procent_add = a.bonus / 100),
              (e.slider.procent_value_add = a.bonus),
              e.OnUpdateSlide(!1, [s.slider.bronze]));
          });
        }),
        e.initDropDown(),
        e.loadPromotionsProcent(),
        e.$on("add:account", e.addAccountWallet),
        e.$on("user:update:success", e.updateInfo),
        (e.testModals = function () {
          (window.testRisk = function () {
            e.showPartnerRiskPopup();
          }),
            (window.testBitcoin = function () {});
        }),
        (e.newTabsInit = function () {
          $(".tabs li a").on("click", function (e) {
            e.preventDefault();
            var a = $(this).closest(".tab-wrap").find(".box-tab-cont")[0];
            $(a).children().addClass("hide"),
              $(this).parent().siblings().removeClass("active");
            var t = $(this).attr("href");
            return (
              $(t).removeClass("hide"), $(this).parent().addClass("active"), !1
            );
          });
        }),
        e.testModals(),
        e.newTabsInit(),
        n.$broadcast("user:update", {});
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "FPlatform",
      "$state",
      "Cascade",
      "Ranger",
      "Store",
      "ModalService",
    ]),
      angular.module("app").controller("Founding", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      (e.qr = l.qr),
        (e.type = l.type),
        (e.text = l.google_text),
        (e.secret = ""),
        (e.initQR = function () {
          if ("" !== e.qr) {
            e.secret = l.qr.split("secret=")[1];
            new QRCode("qrcode", {
              text: e.qr ? e.qr : "",
              width: 200,
              height: 200,
              colorDark: "#000000",
              colorLight: "#ffffff",
              correctLevel: QRCode.CorrectLevel.H,
            });
          }
        }),
        (e.inputs_loading = !1),
        (e.error = !1),
        (e.disabled = !1),
        (e.initInputs = function () {
          var t = $(".code-area"),
            o = t.find(":input"),
            i = !1,
            r = t.find("[name=pincode-1]"),
            l = t.find("[name=pincode-2]"),
            c = t.find("[name=pincode-3]"),
            d = t.find("[name=pincode-4]"),
            u = t.find("[name=pincode-5]");
          t.find("[name=pincode-6]");
          o.on("keyup", function (e) {
            var a = e.keyCode || e.which;
            9 !== a || e.shiftKey || e.preventDefault();
          }).inputmask({
            mask: "9",
            placeholder: "",
            showMaskOnHover: !1,
            showMaskOnFocus: !1,
            clearIncomplete: !0,
            oncomplete: function () {
              p.push($(this).val()), !i || console.log("inputmask incomplete");
            },
            oncleared: function () {
              var e = o.index(this),
                a = e - 1,
                t = e + 1;
              return (
                a >= 0 &&
                (o.eq(a).focus(),
                p.splice(-1, 1),
                void (!i || console.log("[oncleared]", a, e, t)))
              );
            },
            onKeyDown: function (e, a, t, n) {
              if ("Backspace" === e.code) {
                var i = o.index(this),
                  r = i - 1;
                if (!(r >= 0)) return !1;
                o.eq(r).val(""), o.eq(r).focus(), p.splice(-1, 1);
              }
            },
            onKeyValidation: function (e, a) {
              var t = o.index(this),
                n = t - 1,
                r = t + 1;
              n < 6 && o.eq(r).focus(),
                !i || console.log("[onKeyValidation]", t, e, a, p);
            },
            onBeforePaste: function (e, a) {
              return (
                $.each(e.split(""), function (e, a) {
                  o.eq(e).val(a),
                    !i || console.log("[onBeforePaste:each]", e, a);
                }),
                (p = e.split("")),
                m(),
                !1
              );
            },
          });
          var p = [];
          $("[name=pincode-6]")
            .on("focus", function (e) {
              ("" !== r.val().trim() &&
                "" !== l.val().trim() &&
                "" !== c.val().trim() &&
                "" !== d.val().trim() &&
                "" !== u.val().trim()) ||
                (e.preventDefault(),
                (p = []),
                o.each(function () {
                  $(this).val("");
                }),
                r.focus()),
                !i || console.log("[6:focus]", p);
            })
            .inputmask({
              oncomplete: function () {
                p.push($(this).val()),
                  6 !== p.length
                    ? ((p = []),
                      o.each(function () {
                        $(this).val("");
                      }),
                      r.focus())
                    : m(),
                  !i || console.log("[6:oncomplete]", p);
              },
            });
          var m = function () {
            (e.inputs_loading = !0),
              a({
                method: "POST",
                url: "/api/fraud/factors_check",
                data: {
                  type: e.type,
                  code: p.join(""),
                },
              })
                .success(function (a) {
                  a.success
                    ? (s.closeFancy(),
                      n.$broadcast("google:success:factors", {}))
                    : ((e.error = a.message),
                      o.each(function () {
                        $(this).val("");
                      }),
                      r.focus(),
                      (p = []),
                      (e.disabled = a.disabled)),
                    (e.inputs_loading = a.disabled);
                })
                .error(function (a) {
                  (e.inputs_loading = !1), console.log("error update user!", a);
                });
          };
          setTimeout(function () {
            r.focus();
          }, 300);
        }),
        setTimeout(function () {
          e.initQR(), e.initInputs();
        }, 100),
        (e.copySecret = function () {
          e.copyToClipboard($(".copy-text")[0])
            ? s.displayToastAmaran("success", "Copied to clipboard")
            : s.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (a) {
          var t = "string" == typeof a ? document.querySelector(a) : a;
          if (
            ("" === t.value && (t.value = e.secret),
            navigator.userAgent.match(/ipad|ipod|iphone/i))
          ) {
            var n = t.contentEditable,
              o = t.readOnly;
            (t.contentEditable = !0), (t.readOnly = !0);
            var i = document.createRange();
            i.selectNodeContents(t);
            var r = window.getSelection();
            r.removeAllRanges(),
              r.addRange(i),
              t.setSelectionRange(0, 999999),
              (t.contentEditable = n),
              (t.readOnly = o);
          } else t.select();
          return document.execCommand("copy");
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$state",
      "Cascade",
      "Ayden",
      "ModalService",
      "Store",
      "Ranger",
    ]),
      angular.module("app").controller("GoogleValidate", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      (e.info = User),
        (e.fullname = ""),
        (e.turnover = 0),
        (e.balance = 0),
        (e.currency = ""),
        (e.initDefaults = function () {
          (e.currency = User.get("currency")),
            (e.fullname = User.get("firstName") + " " + User.get("lastName")),
            (e.turnover = parseFloat(
              User.get("binaryTurnoverTotal") + User.get("cfdTurnoverTotal")
            ).toFixed(2)),
            (e.balance = parseFloat(User.get("amount")).toFixed(2));
        }),
        e.initDefaults(),
        (e.updateBalance = function (a, t) {
          (e.balance = parseFloat(t.available).toFixed(2)),
            (e.turnover = parseFloat(t.turnover).toFixed(2));
        }),
        (e.updateBalanceDirect = function (a, t) {
          (e.balance = parseFloat(t.amount).toFixed(2)),
            (e.turnover = parseFloat(
              t.binaryTurnoverTotal + t.cfdTurnoverTotal
            ).toFixed(2));
        }),
        n.$on("platform:balance", e.updateBalance),
        n.$on("user:update:success", e.updateBalanceDirect);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope"]),
      angular.module("app").controller("Header", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.info = User),
        (e.history = {
          start: "",
          end: "",
          type: "all",
        }),
        (e.rep = {
          date_from: moment
            .unix(User.get("regTime") / 1e3)
            .format("DD.MM.YYYY"),
          date_to: "",
          status: "",
          trType: "ALL",
          exchange: "ALL",
        }),
        (e.checkTimeImterval = function (e) {
          var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "date_from",
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "date_to";
          if ("" != e.date_to) {
            var n = moment(e[t].split(".").reverse().join("-")).format("X"),
              o = moment(e[a].split(".").reverse().join("-")).format("X");
            return !(o > n);
          }
          return !0;
        }),
        (e.is_loading = !1),
        (e.ResultDefault = {
          hits: [],
          total: 0,
        }),
        (e.result = angular.copy(e.ResultDefault)),
        (e.server = !1),
        (e.send = function () {
          var t = angular.copy(e.rep);
          if (
            ((e.result = angular.copy(e.ResultDefault)),
            !e.checkTimeImterval(t))
          )
            return (e.rep.date_to = ""), $($(".calendar-wrap")[1]).shake(), !1;
          (t.date_from = t.date_from.split(".").reverse().join("-")),
            (t.date_to = t.date_to.split(".").reverse().join("-"));
          var n = 1e3 * moment().hour(0).unix(),
            o = moment.now(),
            i = e.rep.status,
            r = e.rep.trType,
            s = e.rep.exchange,
            l = ["MM/DD/YYYY", "MM-DD-YYYY", "YYYY-MM-DD"];
          moment(t.date_from, l).isValid() &&
            (n = 1e3 * moment.utc(t.date_from).unix()),
            moment(t.date_to, l).isValid() &&
              (o = 1e3 * moment.utc(t.date_to).unix());
          var c = function (a) {
            (e.result = angular.copy(e.ResultDefault)), (e.is_loading = !1);
          };
          (e.is_loading = !0),
            a({
              method: "POST",
              url: "/api/us/history",
              data: {
                DateFrom: n,
                DateTo: o,
                limit: 999,
                offset: 0,
                Status: i,
                trType: r,
                exchange: s,
              },
            })
              .success(function (a) {
                (e.result = a), (e.is_loading = !1);
              })
              .error(c);
        }),
        e.send(),
        (e.OnChengaDate = function () {
          e.send();
        }),
        setTimeout(function () {
          $(".type-select .ui.dropdown").css("min-width", "9em"),
            $(".exchange-select .ui.dropdown").css("min-width", "16em");
        }, 300),
        n.$on("flat-datepicker:date_change", e.OnChengaDate);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope", "FPlatform"]),
      angular.module("app").controller("History", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      (e.resend = function () {
        n.$broadcast("founding:resend", {}), $(".ui.modal").modal("hide");
        try {
          ga("send", "event", "click", "do_not_honor", "try_again");
        } catch (e) {}
      }),
        (e.goBitcoin = function () {
          $(".ui.modal").modal("hide all"),
            o.go("show", {
              page: "funding",
            }),
            setTimeout(function () {
              var e = $('[data-tab="bitcoin"]');
              e.click(),
                setTimeout(function () {
                  $("html, body").animate(
                    {
                      scrollTop: e.offset().top,
                    },
                    400
                  );
                }, 300);
            }, 300);
        }),
        (e.goEntropay = function () {
          $(".ui.modal").modal("hide all"), i.WorkerEntropay();
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$state",
      "Cascade",
      "Ayden",
      "ModalService",
      "Store",
      "Ranger",
    ]),
      angular.module("app").controller("Honor", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      (window.testGiveawayFront = function () {
        n.showDynamic(
          "/api/ag/modal_giveaway",
          {
            theme: "giveaway-modal-root",
            close: "bdw-close",
          },
          {
            onHide: function () {
              try {
                gtag("event", "close", {
                  event_category: "raceoption",
                  event_label: "giveaway",
                });
              } catch (e) {
                console.log("error gtag", e);
              }
            },
          }
        );
      }),
        gup("message") &&
          "/" === location.pathname &&
          n.showAlert("Error", decodeURI(gup("message")));
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService"]),
      angular.module("app").controller("Internal", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      function d(e) {
        var a = $(
          '<form method="post" action="' + e + '" target="_blank"></form>'
        );
        $("body").append(a), a.submit().remove();
      }
      (e.loading = !1),
        (e.info = User),
        (e.password = l.password),
        (e.send = function () {
          s.CloseAll(), d("/api/iq/next");
        }),
        (e.init = function () {
          a({
            method: "POST",
            url: "/api/iq/start",
          })
            .success(function (e) {})
            .error(function (e) {});
        }),
        (e.last = function () {
          var a =
            "https://client.iqmining.com/partner/login?email=" +
            User.get("email") +
            "&password=" +
            e.password +
            "&bonus=162";
          d(a);
        }),
        e.init();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$state",
      "Cascade",
      "Ayden",
      "ModalService",
      "Store",
      "Ranger",
    ]),
      angular.module("app").controller("IQMODAL", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.is_load = !1),
        (e.url = ""),
        (e.getHash = function () {
          a({
            method: "POST",
            url: "/api/us/ladder",
          })
            .success(function (a) {
              (e.url = a.url),
                (e.is_load = !0),
                $(".ui.modal").modal("refresh"),
                setTimeout(function () {
                  $(".ui.modal").modal("refresh");
                }, 600);
            })
            .error(function (e) {
              console.log(e);
            });
        }),
        e.getHash();
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope", "FPlatform"]),
      angular.module("app").controller("Ladder", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l) {
      (e.days = "00"),
        (e.hours = "00"),
        (e.minutes = "00"),
        (e.seconds = "00"),
        (e.limited = l.limited),
        (e.offer = l.offer),
        s.is("limited") ||
          s.run("limited", 180, function () {
            e.ignore();
          });
      var c = function (a, t) {
          "limited" == t.name &&
            ((e.days = t.days < 10 ? "0" + t.days : t.days),
            (e.hours = t.hours < 10 ? "0" + t.hours : t.hours),
            (e.minutes = t.minutes < 10 ? "0" + t.minutes : t.minutes),
            (e.seconds = t.seconds < 10 ? "0" + t.seconds : t.seconds));
        },
        d = function () {};
      (e.accept = function () {
        n.$broadcast("limited-offer:accept"), i.CloseAll();
      }),
        (e.ignore = function () {
          n.$broadcast("limited-offer:ignore"), i.CloseAll();
        }),
        (e.ignoreAndTop = function () {
          n.$broadcast("limited-offer:ignoreandtop"), i.CloseAll();
        }),
        e.$on("modal:cancel", d),
        e.$on("coundown:tick", c);
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$filter",
      "ModalService",
      "$state",
      "CountDown",
      "Store",
    ]),
      angular.module("app").controller("LimitedOffer", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      (e.email = ""),
        (e.password = ""),
        (e.error = ""),
        (e.loading = !1),
        (e.login = function () {
          if (((e.loading = !0), !window.recaptchaOn || window.recaptchaToken))
            (window.capthaInfo = "Token:" + window.recaptchaToken),
              e.loginAfter();
          else
            try {
              var a = new Promise(function (e, a) {
                var t = [200, 500, 700, 1e3, 1500, 2e3, 2500, 3e3, 4e3];
                t.forEach(function (a) {
                  setTimeout(function () {
                    window.recaptchaToken &&
                      (e("yes " + a),
                      (window.capthaInfo = "Recaptha ok after - " + a));
                  }, a);
                }),
                  setTimeout(function () {
                    (window.capthaInfo = window.capthaInfo
                      ? window.capthaInfo + "Recaptha no after 5k sec:"
                      : "Recaptha no after 5k sec:"),
                      a("no");
                  }, 5e3);
              });
              a.then(
                function (a) {
                  e.loginAfter();
                },
                function (a) {
                  e.loginAfter();
                }
              );
            } catch (t) {
              (window.capthaInfo = window.capthaInfo
                ? window.capthaInfo + "error:" + t.toString()
                : "error:" + t.toString()),
                e.loginAfter();
            }
        }),
        (e.loginAfter = function () {
          e.loading = !0;
          var t = function (a, t, n, o) {
              if ((console.log(a), "false" !== a["return"])) {
                var i = Cc.get("INPUT.rd"),
                  r = i ? "#" + i : "",
                  s = Lang.get("sig");
                window.location.href = "/" + s + "/trading" + r;
              } else {
                (e.loading = !1),
                  (e.error = a.message),
                  $(".message.em").transition("shake");
                try {
                  window.recaptchaReset();
                } catch (l) {}
              }
            },
            o = function (t) {
              console.log("fail"),
                "login.password" === t.code &&
                  a({
                    method: "POST",
                    url: "/api/notify/login_fail",
                    data: {
                      email: e.email,
                    },
                  }),
                (e.loading = !1),
                (e.error = Lang.get("auth.login_error")),
                $(".message.em").transition("shake"),
                console.log(t);
            },
            i = function (a, t, n, o) {
              console.log("error"),
                a
                  ? (e.error = a.problem
                      ? a.problem
                      : Lang.get("auth.server_error"))
                  : (e.error = Lang.get("auth.server_error")),
                $(".message.em").transition("shake"),
                (e.loading = !1);
            };
          n.LoginAndAuth(e.email, e.password, t, i, o);
        });
    };
    (e.$inject = ["$scope", "$http", "$timeout", "FPlatform"]),
      angular.module("app").controller("LGN", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.hash = ""),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          "su" != e.status &&
            "ex" != e.status &&
            a({
              method: "POST",
              url: "/api/ltc/check",
              data: {
                guid: $(".guid").html(),
              },
            })
              .success(function (a) {
                (e.status = a.status), (e.hash = a.hash);
              })
              .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          o.run("btc", e.dec, e.callback);
        }, 300),
        (e.goToBlckchain = function () {
          var a = "https://live.blockcypher.com/ltc/tx/" + e.hash,
            t = window.open(a, "_blank");
          t.focus();
        }),
        e.getStatus(),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("LTCinvoice", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t) {
      e.openModalWindow = function () {
        var e =
          '<div class="text-danger promo-error-msg"></div><input type="text" class="promo-input" value="" required/>';
        t.showConfirm(
          Lang.get("promo.enter"),
          e,
          function () {
            var e = $(".promo-input").val();
            "" == e
              ? n(!0, Lang.get("promo.invalid"))
              : a({
                  method: "POST",
                  url: "/api/promo",
                  data: {
                    promo: e,
                  },
                })
                  .success(function (e, a, o, i) {
                    if ("false" == e["return"]) {
                      var r = e.message
                        ? e.message
                        : Lang.get("auth.server_error");
                      n(!0, r);
                    } else t.CloseAll(), t.displayToastAmaran("success", Lang.get("promo.activated"));
                  })
                  .error(function (e) {
                    var a = e.message
                      ? e.message
                      : Lang.get("auth.server_error");
                    n(!0, a);
                  });
          },
          function () {
            t.CloseAll();
          },
          {
            ok: Lang.get("cards.modal.btn_active"),
            cancel: Lang.get("cards.modal.btn_cancel"),
          }
        );
      };
      var n = function () {
        var e =
            (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ""),
          a =
            (arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "",
            $(".promo-error-msg"));
        a.length > 0 && a.text(e);
      };
    };
    (e.$inject = ["$scope", "$http", "ModalService"]),
      angular.module("app").controller("Menu", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a) {
      e.md = a;
    };
    (e.$inject = ["$scope", "ModalService"]),
      angular.module("app").controller("ModalController", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      (e.loading = !1),
        (e.info = User),
        (e.send = function () {
          s.CloseAll();
        }),
        (e.init = function () {
          setTimeout(function () {
            e.initEventsCapy();
          }, 200);
        }),
        (e.is_active = !1),
        (e.initEventsCapy = function () {
          e.getCookie("gift"),
            $(".popup-prize-card").on("click", function () {
              e.is_active ||
                ($(this).addClass("active is-flipped"),
                (e.is_active = !0),
                setTimeout(function () {
                  $(".popup-prize-card").each(function (e, a) {
                    $(a).hasClass("is-flipped") ||
                      setTimeout(function () {
                        $(a).addClass("is-flipped");
                      }, 100 * (e + 1));
                  });
                }, 200));
            });
        }),
        (e.getCookie = function (e) {
          var a = document.cookie.match(
            new RegExp(
              "(?:^|; )" +
                e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
            )
          );
          return a ? decodeURIComponent(a[1]) : void 0;
        }),
        (e.setCookie = function (e, a, t) {
          var n = new Date();
          n.setDate(n.getDate() + t);
          var o = escape(a) + (null == t ? "" : "; expires=" + n.toUTCString());
          (document.cookie = e + "=" + o + "; path=/"),
            console.log(e + "=" + o + "; path=/");
        }),
        (e.redeem = function () {
          e.setCookie(
            "gift",
            $(".popup-prize-card.active").parent().data("value"),
            1
          ),
            $(".ui.modal").modal("hide"),
            (location.href = "/" + Lang.sig + "/register");
        }),
        e.init();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$state",
      "Cascade",
      "Ayden",
      "ModalService",
      "Store",
      "Ranger",
    ]),
      angular.module("app").controller("EnterModal", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      (e.info = User),
        (e.sign_wrapper = !1),
        (e.sign_canvas = !1),
        (e.sign_pad = !1),
        (e.sign_save_load = !1),
        (e.showAmaran = function (e, a) {
          (a = a ? a : "#27ae60"),
            $.amaran({
              theme: "colorful",
              delay: 5e3,
              content: {
                bgcolor: a,
                color: "#fff",
                message: e,
              },
              position: "bottom left",
              outEffect: "slideBottom",
            });
        }),
        (e.showMore = function () {
          $(".popup393__text-block .popup393__text").addClass("one"),
            $(".popup393__btn-more").hide();
        }),
        (e.clearSignature = function () {
          e.sign_pad.clear();
        }),
        (e.saveSignature = function () {
          if (e.sign_pad.isEmpty())
            return void e.showAmaran("Cant save empty sign!", "#c0392b");
          e.sign_save_load = !0;
          var a = $('[name="_token"]').val();
          $.ajax({
            url: "/upload",
            type: "POST",
            headers: {
              "X-CSRF-TOKEN": a,
            },
            data: {
              type: "sign",
              data: e.sign_pad.toDataURL(),
              doc_type: e.type_id,
            },
            dataType: "JSON",
            success: function (a) {
              (e.info.sign = "up"),
                User.set("sign", "up"),
                (e.show_sign = !1),
                (e.sign_save_load = !1),
                (e.close_sign = !0),
                e.showAmaran("Upload successful"),
                s.CloseAll(),
                n.$broadcast("sign:upload:success", {});
            },
            error: function (a) {
              return 401 === a.status
                ? void (location.href = "/api/logout")
                : (e.showAmaran("Some errors try latter", "#c0392b"),
                  (e.sign_save_load = !1),
                  void e.$digest());
            },
          });
        }),
        (e.resizeCanvas = function () {
          if (0 !== $("#signature-pad-new").length && e.sign_canvas) {
            var a = e.sign_canvas,
              t = Math.max(window.devicePixelRatio || 1, 1);
            (a.width = a.offsetWidth * t),
              (a.height = a.offsetHeight * t),
              a.getContext("2d").scale(t, t);
          }
        }),
        (e.initSignature = function () {
          var a = $("#signature-pad-new");
          (e.sign_wrapper = a.length > 0 && a[0]),
            (e.sign_canvas =
              a.find("canvas").length > 0 && a.find("canvas")[0]),
            e.sign_canvas &&
              (e.resizeCanvas(),
              (e.sign_pad = new SignaturePad(e.sign_canvas)),
              (window.onresize = e.resizeCanvas));
        }),
        (e.initCompany = function () {
          $("[data-company]").html(Settings.get("company")),
            $("[data-company-address]").html(Settings.get("company-address"));
        }),
        setTimeout(function () {
          e.initSignature();
        }, 300),
        setTimeout(function () {
          e.initCompany();
        }, 300),
        e.initCompany();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$state",
      "Cascade",
      "Ayden",
      "ModalService",
      "Store",
      "Ranger",
    ]),
      angular.module("app").controller("Sign", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      var o = {
          en: [
            {
              url: "/swiss/english/marketwatch/market_news/Fundamental-Analysis/",
              name: "Fundamental Analysis",
            },
            {
              url: "/swiss/english/marketwatch/market_news/Technical-Analysis/",
              name: "Technical Analysis",
            },
            {
              url: "/swiss/english/marketwatch/market_news/Market-News-and-Research/",
              name: "Market News",
            },
            {
              url: "/swiss/english/marketwatch/market_news/Expert-Commentary/",
              name: "Expert Commentary",
            },
            {
              url: "/swiss/english/marketwatch/market_news/Trade-Pattern-Ideas/",
              name: "Trade pattern ideas",
            },
          ],
          ru: [
            {
              url: "/swiss/russian/marketwatch/market_news/Technical-Analysis/",
              name: "Ð¢ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ ÐÐ½Ð°Ð»Ð¸Ð·",
            },
          ],
        },
        i = {
          fun: {
            url: "/swiss/english/marketwatch/market_news/Fundamental-Analysis/rss/",
            name: "Fundamental Analysis",
          },
          pat: {
            url: "/swiss/english/marketwatch/market_news/Trade-Pattern-Ideas/rss/",
            name: "Trade pattern ideas",
          },
          new: {
            url: "/swiss/english/marketwatch/market_news/Market-News-and-Research/rss/",
            name: "Market News",
          },
          tec: {
            url: "/swiss/english/marketwatch/market_news/Technical-Analysis/rss/",
            name: "Technical Analysis",
          },
        };
      (a.travis = "ru" === Lang.get("locale") ? o.ru : o.en),
        (a.travis_error = ""),
        (a.current = t.current ? t.current : {}),
        (a.rss = t.rss ? t.rss : []),
        (a.html = t.html
          ? t.html
          : {
              html: "Loading please wait...",
            }),
        (a.currentIndex = 0),
        (a.exone = function (e, n) {
          (t.current = e), a.loadRss(e, n);
        }),
        (a.showExoneDialog = function (e) {
          n.showFancy("/api/ag/news_dialog", {
            clickSlide: !0,
            clickOutside: !0,
          });
        }),
        (a.showCalendar = function (e) {
          $.magnificPopup.open({
            items: {
              src: "https://calendar.finrally.com",
            },
            type: "iframe",
            iframe: {
              markup:
                '<style>.mfp-iframe-holder .mfp-content {max-width: 860px;height:610px}</style><div class="mfp-iframe-scaler" ><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div></div>',
            },
          });
        }),
        (a.cancel = function () {
          $mdDialog.cancel();
        }),
        (a.showCopy = function () {
          n.showFancy("/api/ag/ladder", {
            clickSlide: !0,
            clickOutside: !0,
          });
        }),
        (a.extwo = function (e, t) {
          (a.currentIndex = t),
            (a.html = {
              html: "Loading please wait..",
            }),
            a.loadHtml(e);
        }),
        (a.loadRss = function (n, o) {
          var r = i[n];
          e({
            method: "POST",
            url: "/api/news/rss",
            data: r,
          })
            .success(function (e, n, i, s) {
              (a.rss = e), (t.rss = e), (t.current = r), a.showExoneDialog(o);
            })
            .error(function (e) {
              (a.rss = []),
                (a.travis_error = "error load data."),
                a.showExoneDialog(o);
            });
        }),
        (a.loadHtml = function (t) {
          e({
            method: "POST",
            url: "/api/news/html",
            data: t,
          })
            .success(function (e, t, n, o) {
              a.html = e;
            })
            .error(function (e) {
              a.html = {
                html: "error load data.",
              };
            });
        }),
        (a.LoadFirstNews = function () {
          a.rss[0] && a.loadHtml(a.rss[0]);
        }),
        (a.copyNeedOpenGet = function () {
          setTimeout(function () {
            Cc.get("INPUT_LOCAL.copy_open") &&
              User.get("userId") &&
              !t.current &&
              !t.copy_open_show &&
              (a.showCopy(), (t.copy_open_show = "yes"));
          }, 401);
        }),
        a.copyNeedOpenGet(),
        a.$on("news:calendar:show", a.showCalendar);
    };
    (e.$inject = ["$http", "$scope", "Store", "ModalService"]),
      angular.module("app").controller("NewsController", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.initOnce = function () {
        $(".js-notif__link").on("click", function () {
          return $(this).closest(".notif").toggleClass("active"), !1;
        }),
          $(document).mouseup(function (e) {
            var a = $(".notif");
            a.is(e.target) ||
              0 !== a.has(e.target).length ||
              a.removeClass("active");
          });
      }),
        e.initOnce(),
        (e.notifications = {
          list: [],
          new: 0,
        }),
        (e.notifications_list_src = []),
        (e.is_disabled = !0),
        (e.loadNotifications = function () {
          (e.is_disabled = !0),
            a({
              method: "POST",
              url: "/api/us/notifications",
            })
              .success(function (a, t, n, o) {
                var i = a.list;
                (a.list = a.list.slice(0, 3)),
                  (e.notifications_list_src = i.slice(3, 999)),
                  (e.notifications = a),
                  (e.is_disabled = !1);
              })
              .error(function (e) {});
        }),
        (e.showItem = function (t, n) {
          $(n.currentTarget)
            .parent()
            .find(".notif-descr")
            .stop(!0, !0)
            .slideToggle(),
            $(n.currentTarget)
              .parent()
              .find(".notif-text-read-more")
              .toggleClass("hide"),
            0 === t.read &&
              a({
                method: "POST",
                url: "/api/us/notifications_read",
                data: {
                  id: t.id,
                },
              })
                .success(function (a, n, o, i) {
                  (t.read = 1), e.notifications["new"]--;
                })
                .error(function (e) {});
        }),
        (e.readAll = function () {
          0 !== e.notifications["new"] &&
            a({
              method: "POST",
              url: "/api/us/notifications_read_all",
            })
              .success(function (a, t, n, o) {
                _.each(e.notifications.list, function (e) {
                  e.read = 1;
                }),
                  (e.notifications["new"] = 0);
              })
              .error(function (e) {});
        }),
        (e.read_one = !1),
        (e.showAll = function () {
          e.read_one ||
            (_.each(e.notifications_list_src, function (a) {
              e.notifications.list.push(a);
            }),
            (e.read_one = !0));
        }),
        (e.updateNotification = function () {
          e.loadNotifications();
        }),
        e.loadNotifications(),
        n.$on("notifications:update", e.updateNotification);
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("Notifications", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c, d, u) {
      (e.ready_SO = !1),
        (e.customer = User),
        (e.is_fix = !1),
        (e.info = angular.copy(User)),
        (e.lang = angular.copy(Lang)),
        (e.zone = c),
        e.zone.setCurrenecy(User.get("currency")),
        e.zone.setMin(500),
        (e.random = {}),
        (e.CardIteratorTimeout = 5e3),
        (e.alt = {
          uid: "-1",
          id: "-1",
          type: "alert",
          stop: !1,
        }),
        (e.slide = {
          value: e.zone.g("min"),
          procent: 20,
          deposit: "bronze",
          bonus: !1,
          min: e.zone.g("min"),
        }),
        (e.pm = {
          qiwi: "",
          prefect: "",
          wm: "",
          yandex: "",
          moneta: "",
        }),
        (e.accmin = {
          USD: 500,
          EUR: 500,
          RUB_EUR: 500,
          RUB_USD: 500,
          RUB_CUR: 500,
        }),
        (e.locationChangeTrigger = function () {
          e.CheckIfFirst(), e.CheckCardCallback();
        }),
        (e.CheckCardCallback = function () {
          "listen" == r.params &&
            (d.initAlt(r.add, r.add2), d.ListenCallbackPFS()),
            "listen-orange" == r.params &&
              (d.initAlt(r.add, r.add2), d.ListenCallbackOrange()),
            "listen-union" == r.params &&
              ((e.alt.uid = r.add),
              (e.alt.id = r.add2),
              e.ListenCardCallback4()),
            "listen-concept" == r.params &&
              (d.initAlt(r.add, r.add2), d.ListenCallbackConcept());
        }),
        (e.ListenCardCallback4 = function () {
          var t = e.alt.uid,
            o = (e.alt.id, e.alt.stop);
          a.post("/api/unionpay/listen", {
            transaction_id: t,
          }).success(function (a, t, i, r) {
            if (1 == a["return"])
              if ("00" == a.data.RespCode) {
                alertify.set("notifier", "position", "bottom-left");
                var s = Lang.get("pfs.fast.founded");
                "alert" == e.alt.type
                  ? alertify.alert(
                      "Card",
                      '<h4 class="phone-success">' + s + "</h4>"
                    )
                  : alertify.success(s);
              } else {
                var l = Lang.get("orange.pay_fail");
                "alert" == e.alt.type
                  ? ((l = '<h4 class="phone-error">' + l),
                    (l += "</h4>"),
                    alertify.alert("Card", l))
                  : alertify.error(l, 0),
                  (e.whait = !1);
              }
            else o || n(e.ListenCardCallback4, e.CardIteratorTimeout);
          });
        }),
        (e.CheckIfFirst = function () {
          if (
            "trading" == r.pageName &&
            "first" == r.params &&
            parseInt(Cache.get("try")) < 2
          ) {
            var t =
              parseInt(User.get("bonus_summ")) > 0
                ? "modal-register-demo"
                : "modal-register";
            a.post("/api/modal/" + t).success(function (a, t, n, o) {
              var i = Lang.get("modals.heads.after_reg"),
                r = l(a.content)(e);
              alertify.alert(i, r[0]);
            });
          }
        }),
        (e.updateSlides = function () {
          e.slide.value >= e.zone.g("max")
            ? ((e.slide.deposit = "gold"), (e.slide.procent = 100))
            : e.slide.value >= e.zone.g("20")
            ? ((e.slide.deposit = "silver"), (e.slide.procent = 50))
            : ((e.slide.deposit = "bronze"), (e.slide.procent = 20)),
            $("#slider-bonus-2").val(e.slide.value),
            $("#slider-bonus").val(e.slide.value);
        }),
        (e.BlueSlide = function () {
          return !0;
        }),
        (e.LoadSO = function () {
          (e.ready_SO = !1),
            setTimeout(function () {
              (e.ready_SO = !0),
                $("#plat").html(u.InjectPlatformIframe()),
                e.$digest();
            }, 3e3);
        }),
        (e.PayReport = function (t) {
          function n() {
            for (
              var e = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", t = 0;
              t < 5;
              t++
            )
              e += a.charAt(Math.floor(Math.random() * a.length));
            return e;
          }
          "PayPal" == t && (e.random[t] = n());
          var o = e.random.hasOwnProperty(t) ? e.random[t] : "notset";
          a.post("/api/pay/" + t, {
            email: e.info.login,
            amount: e.slide.value,
            currency: e.info.currency,
            random: o,
            bonus: e.slide.bonus,
          })
            .success(function (e, a, t, n) {})
            .error(function (e, a, t, n) {});
        }),
        i.$on("$locationChangeStart", function (e) {}),
        i.$on("$routeChangeSuccess", function (a) {
          e.locationChangeTrigger();
        }),
        (e.CurrencyMinConverter = function () {
          var a = 50,
            t =
              (parseInt(User.get("First.amount")),
              parseInt(User.get("bonus_summ")),
              500),
            n =
              parseInt(User.get("min_deposit")) > 0 &&
              parseInt(User.get("min_deposit"));
          (a = n ? (0 != User.get("deposit") ? t : n) : t),
            (e.accmin = {
              USD: a,
              EUR: a,
              RUB_EUR: a * parseInt(Cache.get("convert.EUR")),
              RUB_USD: a * parseInt(Cache.get("convert.USD")),
              RUB_CUR:
                "RUB" == User.get("currency")
                  ? a * parseInt(Cache.get("convert.EUR"))
                  : a * parseInt(Cache.get("convert." + User.get("currency"))),
            });
        }),
        (e.InitPmSlideMove = function () {
          var a = e.slide.value;
          if ("RUB" == User.get("currency")) {
            if (parseInt(a) < e.accmin.RUB_CUR) return;
          } else if (parseInt(a) < e.accmin.EUR) return;
          var t = a,
            n = a,
            o = a,
            i = a,
            r = a;
          switch (User.get("currency")) {
            case "USD":
              (t = a * parseInt(Cache.get("convert.USD"))),
                (i = a * parseInt(Cache.get("convert.USD"))),
                (r = a * parseInt(Cache.get("convert.USD")));
              break;
            case "EUR":
              (t = a * parseInt(Cache.get("convert.EUR"))),
                (i = a * parseInt(Cache.get("convert.EUR"))),
                (r = a * parseInt(Cache.get("convert.EUR")));
          }
          e.pm = {
            qiwi: t,
            prefect: n,
            wm: o,
            yandex: i,
            moneta: r,
          };
        }),
        i.$on("slideUiMove", function () {
          e.InitPmSlideMove();
        }),
        e.InitPmSlideMove(),
        e.CurrencyMinConverter();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "Spot",
      "$timeout",
      "$location",
      "$rootScope",
      "$routeParams",
      "$parse",
      "$compile",
      "CurrencyZone",
      "Cascade",
      "FPlatform",
    ]),
      angular.module("app").controller("TradingNew", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.info = User),
        (e.checkLimit = function () {
          var e = User.get("agni_" + moment().format("YM"));
          return e && e >= 5;
        }),
        (e.limit = e.checkLimit());
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayAGNI", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.alt = $(".dp1 option:first").val()),
        (e.amount = 1.5),
        (e.send = function () {
          if (o.isDemoAccount()) return o.showDemoAlert();
          var t = parseFloat(e.amount);
          if (
            e.$parent.slider.is_fixed &&
            !_.isNaN(t) &&
            _.isNumber(t) &&
            t <= 0
          )
            return void i.displayToastAmaran("error", "Wrong amount!");
          if ("other" === e.alt) return void $(".other_form").submit();
          e.loading = !0;
          var n = e.$parent.slider.is_bonus ? 1 : 0,
            r = e.$parent.slider.is_fixed ? 1 : 0,
            s = 0 === r ? e.$parent.slider.value : e.amount,
            l = o.currency,
            c = e.alt.indexOf("erc20_") !== -1 ? "token" : e.alt;
          a({
            method: "POST",
            url: "/api/" + c + "/pay",
            data: {
              amount: s,
              bonus: n,
              fixed: r,
              currency: l,
              is_erc20: e.alt,
              token: e.alt.replace("erc20_", "").toUpperCase(),
            },
          })
            .success(function (a, t, n, o) {
              "true" === a["return"]
                ? (location.href = "/api/" + c + "/invoice/" + a.guid)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        }),
        setTimeout(function () {
          $(".altcoins_drop .ui.dropdown").css("width", "30%");
        }, 300),
        (window.testAlt = function (a) {
          e.alt = a;
        }),
        (window.testAlt1 = function () {
          console.log(e.alt);
        }),
        (window.testToken = function (t) {
          a({
            method: "POST",
            url: "/api/token/pay",
            data: {
              amount: 1e3,
              bonus: 0,
              fixed: 0,
              currency: "USD",
              is_erc20: e.alt,
              token: t.toUpperCase(),
            },
          })
            .success(function (a, t, n, o) {
              "true" === a["return"]
                ? (location.href = "/api/token/invoice/" + a.guid)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayAltcoin", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.extend = !1),
        (e.info = User),
        (e.is_eur = !1),
        (e.show = function () {
          var t = e.$parent.slider.is_bonus ? 1 : 0,
            n = e.$parent.slider.is_fixed ? 1 : 0,
            i = e.$parent.slider.value,
            r = o.currency;
          a({
            method: "POST",
            url: "/api/report/bank",
            data: {
              amount: i,
              bonus: t,
              fixed: n,
              currency: r,
              email: User.get("email"),
            },
          })
            .success(function (e, a, t, n) {})
            .error(function (e, a, t, n) {}),
            (e.is_eur = "EUR" === User.get("currency")),
            (e.extend = !0);
        }),
        (e.send = function () {
          e.loading = !0;
          var t = e.$parent.slider.is_bonus ? 1 : 0,
            n = e.$parent.slider.is_fixed ? 1 : 0,
            r = e.$parent.slider.value,
            s = o.currency;
          a({
            method: "POST",
            url: "/api/ltc/pay",
            data: {
              amount: r,
              bonus: t,
              fixed: n,
              currency: s,
            },
          })
            .success(function (a, t, n, o) {
              "true" === a["return"]
                ? (location.href = "/api/ltc/invoice/" + a.guid)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayBank", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.is_vload = !1),
        (e.amount = 0.5),
        (e.send = function () {
          if (o.isDemoAccount()) return o.showDemoAlert();
          if (e.is_vload)
            var t = 0,
              n = 0,
              r = e.amount,
              s = "USD";
          else {
            var l = parseFloat(e.amount);
            if (
              e.$parent.slider.is_fixed &&
              !_.isNaN(l) &&
              _.isNumber(l) &&
              l <= 0
            )
              return void i.displayToastAmaran("error", "Wrong amount!");
            e.loading = !0;
            var t = e.$parent.slider.is_bonus ? 1 : 0,
              n = e.$parent.slider.is_fixed ? 1 : 0,
              r = 0 === n ? e.$parent.slider.value : e.amount,
              s = 0 === n ? o.currency : "BTC";
          }
          a({
            method: "POST",
            url: "/api/btc/pay",
            data: {
              amount: r,
              bonus: t,
              fixed: n,
              currency: s,
            },
          })
            .success(function (a, t, n, o) {
              "true" == a["return"]
                ? (location.href = "/api/btc/invoice/" + a.guid)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayBTC", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.alt = "bch"),
        (e.amount = 500),
        (e.send = function () {
          if (o.isDemoAccount()) return o.showDemoAlert();
          var t = parseFloat(e.amount);
          if (
            e.$parent.slider.is_fixed &&
            !_.isNaN(t) &&
            _.isNumber(t) &&
            t <= 0
          )
            return void i.displayToastAmaran("error", "Wrong amount!");
          if ("other" === e.alt) return void $(".other_form").submit();
          e.loading = !0;
          var n = e.$parent.slider.is_bonus ? 1 : 0,
            r = e.$parent.slider.is_fixed ? 1 : 0,
            s = e.$parent.slider.value,
            l = o.currency,
            c = e.alt.indexOf("erc20_") !== -1 ? "token" : e.alt;
          a({
            method: "POST",
            url: "/api/crypto/" + c + "/pay",
            data: {
              amount: s,
              bonus: n,
              fixed: r,
              currency: l,
              is_erc20: e.alt.indexOf("erc20_") !== -1,
              token: e.alt.replace("erc20_", "").toUpperCase(),
            },
          })
            .success(function (a, t, n, o) {
              "true" === a["return"]
                ? (location.href = a.url)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        }),
        setTimeout(function () {
          $(".altcoins_drop .ui.dropdown").css("width", "30%");
        }, 300);
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayCrypto", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.send = function () {
          if (o.isDemoAccount()) return o.showDemoAlert();
          e.loading = !0;
          var t = e.$parent.slider.is_bonus ? 1 : 0,
            n = e.$parent.slider.is_fixed ? 1 : 0,
            r = e.$parent.slider.value,
            s = o.currency;
          a({
            method: "POST",
            url: "/api/eth/pay",
            data: {
              amount: r,
              bonus: t,
              fixed: n,
              currency: s,
            },
          })
            .success(function (a, t, n, o) {
              return "true" == a["return"]
                ? ((e.loading = !1),
                  void (location.href = "/api/eth/invoice/" + a.guid))
                : (i.displayToastAmaran("error", "some errors, try latter."),
                  void (e.loading = !1));
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayETH", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.alt = $(".dp2 option:first").val()),
        (e.amount = 500),
        (e.send = function () {
          var a = parseFloat(e.amount);
          return e.$parent.slider.is_fixed &&
            !_.isNaN(a) &&
            _.isNumber(a) &&
            a < o.minDeposit
            ? void i.displayToastAmaran(
                "error",
                "Wrong amount! Min deposit " + o.minDeposit
              )
            : ((e.$parent.slider.value = a),
              $(".pay-tabs-content .segment.active").removeClass("active"),
              $(
                '.pay-tabs-content .segment[data-tab="' + e.alt + '"]'
              ).addClass("active"),
              e.$parent.setMinToSlider(parseInt(e.amount)),
              n.$broadcast("slideUiEnd", e.amount),
              void n.$broadcast("fiatCurrency", e.$parent.fixedCurrency));
        }),
        setTimeout(function () {
          $(".fiat_drop .ui.dropdown").css("width", "30%");
        }, 300);
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayFiat", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.send = function () {
          e.loading = !0;
          var t = e.$parent.slider.is_bonus ? 1 : 0,
            n = e.$parent.slider.is_fixed ? 1 : 0,
            r = e.$parent.slider.value,
            s = o.currency;
          a({
            method: "POST",
            url: "/api/ltc/pay",
            data: {
              amount: r,
              bonus: t,
              fixed: n,
              currency: s,
            },
          })
            .success(function (a, t, n, o) {
              "true" === a["return"]
                ? (location.href = "/api/ltc/invoice/" + a.guid)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayLTC", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.pay = {
        neteller: {
          net_account: "",
          secure_id: "",
          amount: angular.copy(e.$parent.slider.value),
          currency: o.currency,
        },
      }),
        (e.neteller_loading = !1),
        (e.server = {
          neteller: {},
        }),
        (e.am = o.minDeposit),
        (e.Neteller = function () {
          "" != e.pay.neteller.net_account &&
            "" != e.pay.neteller.secure_id &&
            "" != e.pay.neteller.amount &&
            (e.neteller_form.$invalid ||
              ((e.neteller_loading = !0),
              a({
                method: "POST",
                url: "/api/neteller",
                data: e.pay.neteller,
              })
                .success(function (a, t, n, o) {
                  (e.server.neteller = a), (e.neteller_loading = !1);
                })
                .error(function (a, t, n, o) {
                  console.log("error"), (e.neteller_loading = !1);
                })));
        }),
        n.$on("slideUiEnd", function (a, t) {
          e.pay.neteller.amount = parseInt(t);
        });
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope", "Ranger"]),
      angular.module("app").controller("PayNeteller", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.button_loading = !1),
        (e.info = User),
        (e.pay = {
          paypal: {
            bonus: 0,
            fixed: 0,
            email: User.get("login"),
            currency: e.info.currency,
            amount: angular.copy(e.$parent.slider.value),
          },
        }),
        (e.server = {}),
        (e.success = !1),
        (e.Pay = function () {
          "" != e.pay.paypal.amount &&
            (e.paypal_form.$invalid ||
              ((e.button_loading = !0),
              (e.pay.paypal.bonus = e.$parent.slider.bonus ? 1 : 0),
              a({
                method: "POST",
                url: "/api/card/fast/orangeppl",
                data: e.pay.paypal,
              })
                .success(function (a, t, n, i) {
                  if ("success" == a.status)
                    a.data.redirect_url &&
                      (location.href = a.data.redirect_url);
                  else {
                    var r = "Error";
                    a.message && (r = a.message),
                      o.displayAlert(
                        "Card",
                        '<span class="ui red inverted header">' + r + "</span>"
                      );
                  }
                  (e.server = a), (e.button_loading = !1);
                })
                .error(function (a, t, n, o) {
                  console.log("error"), (e.button_loading = !1);
                })));
        }),
        e.$on("slideUiSlide", function (a, t) {
          e.pay.paypal.amount = parseInt(t);
        }),
        e.$on("SliderSetValue", function (a, t) {
          e.pay.paypal.amount = parseInt(t);
        });
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope", "Cascade"]),
      angular.module("app").controller("PayPayPal", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.send = function () {
          e.loading = !0;
          var t = e.$parent.slider.is_bonus ? 1 : 0,
            n = e.$parent.slider.is_fixed ? 1 : 0,
            r = e.$parent.slider.value,
            s = o.currency;
          a({
            method: "POST",
            url: "/api/shape/pay",
            data: {
              amount: r,
              bonus: t,
              fixed: n,
              currency: s,
            },
          })
            .success(function (a, t, n, o) {
              "true" === a["return"]
                ? (location.href = "/api/shape/invoice/" + a.guid)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PaySHAPE", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.amount = angular.copy(e.$parent.slider.value)),
        (e.loading = !1),
        (e.error = !1),
        (e.am =
          "RUB" == User.get("currency") ? 60 * o.minDeposit : o.minDeposit),
        (e.send = function () {
          e.loading = !0;
          var t = e.$parent.slider.is_bonus ? 1 : 0,
            n = e.$parent.slider.is_fixed ? 1 : 0,
            o = e.amount;
          a({
            method: "POST",
            url: "/api/card/fast/skrill",
            data: {
              amount: o,
              fixed: n,
              bonus: t,
            },
          })
            .success(function (a, t, n, o) {
              "true" == a["return"]
                ? (location.href = a.redirect)
                : (e.error = a.message),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              console.log("error"), (e.loading = !1);
            });
        }),
        n.$on("slideUiEnd", function (a, t) {
          e.amount = parseInt(t);
        });
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope", "Ranger"]),
      angular.module("app").controller("PaySkrill", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.alt = $(".dp4 option:first").val()),
        (e.amount = 1.5),
        (e.send = function () {
          if (o.isDemoAccount()) return o.showDemoAlert();
          var t = parseFloat(e.amount);
          if (
            e.$parent.slider.is_fixed &&
            !_.isNaN(t) &&
            _.isNumber(t) &&
            t <= 0
          )
            return void i.displayToastAmaran("error", "Wrong amount!");
          if ("other" === e.alt) return void $(".other_form").submit();
          e.loading = !0;
          var n = e.$parent.slider.is_bonus ? 1 : 0,
            r = e.$parent.slider.is_fixed ? 1 : 0,
            s = 0 === r ? e.$parent.slider.value : e.amount,
            l = o.currency,
            c = e.alt.indexOf("erc20_") !== -1 ? "token" : e.alt;
          a({
            method: "POST",
            url: "/api/" + c + "/pay",
            data: {
              amount: s,
              bonus: n,
              fixed: r,
              currency: l,
              is_erc20: e.alt,
              token: e.alt.replace("erc20_", "").toUpperCase(),
            },
          })
            .success(function (a, t, n, o) {
              "true" === a["return"]
                ? (location.href = "/api/" + c + "/invoice/" + a.guid)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        }),
        setTimeout(function () {
          $(".altcoins_drop .ui.dropdown").css("width", "30%");
        }, 300),
        (window.testAlt = function (a) {
          e.alt = a;
        }),
        (window.testAlt1 = function () {
          console.log(e.alt);
        }),
        (window.testToken = function (t) {
          a({
            method: "POST",
            url: "/api/token/pay",
            data: {
              amount: 1e3,
              bonus: 0,
              fixed: 0,
              currency: "USD",
              is_erc20: e.alt,
              token: t.toUpperCase(),
            },
          })
            .success(function (a, t, n, o) {
              "true" === a["return"]
                ? (location.href = "/api/token/invoice/" + a.guid)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayStable", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.alt = "erc20_usdt"),
        (e.amount = 1.5),
        (e.send = function () {
          if (o.isDemoAccount()) return o.showDemoAlert();
          var t = parseFloat(e.amount);
          if (
            e.$parent.slider.is_fixed &&
            !_.isNaN(t) &&
            _.isNumber(t) &&
            t <= 0
          )
            return void i.displayToastAmaran("error", "Wrong amount!");
          if ("other" === e.alt) return void $(".other_form").submit();
          e.loading = !0;
          var n = e.$parent.slider.is_bonus ? 1 : 0,
            r = e.$parent.slider.is_fixed ? 1 : 0,
            s = 0 === r ? e.$parent.slider.value : e.amount,
            l = 0 === r ? o.currency : e.alt.toUpperCase(),
            c = e.alt.indexOf("erc20_") !== -1 ? "token" : e.alt;
          a({
            method: "POST",
            url: "/api/" + c + "/pay",
            data: {
              amount: s,
              bonus: n,
              fixed: r,
              currency: l,
              is_erc20: e.alt,
              token: e.alt.replace("erc20_", "").toUpperCase(),
            },
          })
            .success(function (a, t, n, o) {
              "true" === a["return"]
                ? (location.href = "/api/" + c + "/invoice/" + a.guid)
                : i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "some errors, try latter."),
                (e.loading = !1);
            });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayTether", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r) {
      (e.loading = !1),
        (e.is_card = !1),
        (e.amount = 0.5),
        (e.currency = ""),
        (e.status = "wt"),
        (e.dec = 3600),
        (e.address = ""),
        (e.btc = 0),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.guid = ""),
        (e.is_redirected = !1),
        (e.redirect = function () {
          e.is_redirected = !0;
        }),
        (e.send = function () {
          e.loading = !0;
          var t = e.$parent.slider.is_bonus ? 1 : 0,
            n = e.$parent.slider.is_fixed ? 1 : 0,
            i = 0 === n ? e.$parent.slider.value : e.amount,
            r = o.currency;
          a.post("/api/vload/prepare", {
            amount: i,
            fixed: n,
            bonus: t,
            currency: r,
          })
            .success(function (e, a, t, n) {
              location.href = "/api/vload/card?amount=" + i;
            })
            .error(function (e, a, t, n) {
              location.href = "/api/vload/card?amount=" + i;
            });
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          "su" != e.status &&
            "ex" != e.status &&
            a({
              method: "POST",
              url: "/api/btc/check",
              data: {
                guid: $(".guid").html(),
              },
            })
              .success(function (a) {
                (e.status = a.status), (e.hash = a.hash);
              })
              .error(function (e) {});
        }),
        setInterval(function () {
          e.is_card && e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          r.run("btc", e.dec, e.callback);
        }, 300),
        (e.goToBlckchain = function () {
          var a = "https://blockchain.info/tx/" + e.hash,
            t = window.open(a, "_blank");
          t.focus();
        }),
        setTimeout(function () {
          e.is_card && e.getStatus();
        }, 400),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
      "CountDown",
    ]),
      angular.module("app").controller("PayTrue", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.pin = ""),
        (e.amount = 500),
        (e.is_vload = !1),
        (e.onBlur = function () {
          parseInt(e.amount) < 500 && (e.amount = 500);
        }),
        (e.loading = !1),
        (e.error = !1),
        (e.vhide = o.isNoVload()),
        (e.send = function () {
          e.loading = !0;
          var t = 0,
            n = 0;
          try {
            (t = e.$parent.slider.is_bonus ? 1 : 0),
              (n = e.$parent.slider.is_fixed ? 1 : 0);
          } catch (o) {}
          var r = e.pin;
          a({
            method: "POST",
            url: "/api/card/fast/vload",
            data: {
              amount: r,
              fixed: n,
              bonus: t,
            },
          })
            .success(function (a, t, n, o) {
              if ("true" === a["return"]) {
                if (e.is_vload)
                  return (location.href = "/api/vload/finish"), "";
                e.pin = "";
                var r = e.getPath(a, "debug.result_description"),
                  s = e.getPath(a, "debug.description");
                i.showAlert(
                  "Vload",
                  '<div class="ui 1b71fa inverted header">' +
                    r +
                    '</div><div class="em2">' +
                    s +
                    "</div>",
                  !1,
                  {
                    theme: "small black",
                  }
                );
              } else e.error = a.message;
              e.loading = !1;
            })
            .error(function (a, t, n, o) {
              i.displayToastAmaran("error", "Some errors try again later."),
                (e.loading = !1);
            });
        }),
        User.get("vload") &&
          setTimeout(function () {
            $('.pay-tabs [data-tab="vload"]').removeClass("hide");
          }, 300),
        (e.getPath = function (e, a) {
          return a.split(".").reduce(function (e, a) {
            return "undefined" == typeof e || null === e ? e : e[a];
          }, e);
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Ranger",
      "ModalService",
    ]),
      angular.module("app").controller("PayVload", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      (e.user = {
        email: User.get("email"),
        phone: User.get("phone"),
      }),
        (e.info = User),
        (e.FileLoad = !0),
        (e.server = {}),
        (e.error = ""),
        (e.geo = Cc.GEO),
        (e.loading = !1),
        (e.token = ""),
        (e.ps_loading = !1),
        (e.cd_loading = !1),
        (e.show_sign = !1),
        (e.close_sign = !0),
        (e.sign_wrapper = !1),
        (e.sign_canvas = !1),
        (e.sign_pad = !1),
        (e.sign_save_load = !1),
        (e.card_list = []),
        (e.can_load_card = !1),
        (e.card_list_loading = !1),
        (e.doc_one_loading = !1),
        (e.doc_two_loading = !1),
        (e.doc_three_loading = !1),
        (e.type_id = User.get("verification_type")
          ? User.get("verification_type")
          : "passport"),
        (e.server1 = {}),
        (e.loading1 = !1),
        (e.error1 = ""),
        (e.isUserDepositor = function () {
          var a = !1;
          return (
            e.info.balances &&
              _.each(e.info.balances, function (e, t) {
                e.depositsTotal > 0 && (a = !0);
              }),
            a
          );
        }),
        (e.userCanUpload = function () {
          return (
            (e.info.wd_methods && e.isUserDepositor()) || e.info.can_upload
          );
        }),
        (e.can_upload_docs = e.userCanUpload()),
        (e.can_upload_sign = e.info.sign || e.info.can_upload),
        (e.sendPhone = function () {
          e.user.phone &&
            ((e.loading1 = !0),
            a({
              method: "POST",
              url: "/api/info",
              data: {
                phone: e.user.phone,
              },
            })
              .success(function (a, t, n, o) {
                (e.server1 = a),
                  "true" === a["return"]
                    ? (User.set("phone", e.user.phone), (e.error = ""))
                    : ((e.error1 = a.message),
                      $(".message.em.phone").transition("shake")),
                  (e.loading1 = !1);
              })
              .error(function (a, t, n, o) {
                (e.loading1 = !1),
                  (e.error1 = a.message
                    ? a.message
                    : Lang.get("auth.server_error")),
                  $(".message.em.phone").transition("shake");
              }));
        }),
        (e.downloadURI = function (e, a) {
          var t = document.createElement("a");
          (t.download = a),
            (t.href = e),
            document.body.appendChild(t),
            t.click(),
            document.body.removeChild(t);
        }),
        (e.send = function () {
          (e.loading = !0),
            a({
              method: "POST",
              url: "/api/info",
              data: e.user,
            })
              .success(function (a, t, n, o) {
                (e.server = a),
                  "true" == a["return"]
                    ? User.set("phone", e.user.phone)
                    : ((e.error = a.error),
                      (e.loading = !1),
                      $(".message.em").transition("shake")),
                  (e.loading = !1);
              })
              .error(function (a, t, n, o) {
                (e.loading = !1),
                  (e.error = a.message
                    ? a.message
                    : Lang.get("auth.server_error")),
                  $(".message.em").transition("shake");
              });
        }),
        (e.showAmaran = function (e, a) {
          (a = a ? a : "#27ae60"),
            $.amaran({
              theme: "colorful",
              delay: 5e3,
              content: {
                bgcolor: a,
                color: "#fff",
                message: e,
              },
              position: "bottom left",
              outEffect: "slideBottom",
            });
        }),
        (e.loadDocs = function (a) {
          console.log(!e[a + "_loading"]);
        }),
        $(".verification-new input[type=file]").on("change", function () {
          var a = new FormData(),
            t = $(this).attr("name"),
            n = $(this).prop("files")[0],
            o = $('[name="_token"]').val();
          e.setLoadingAssets(t, !0),
            a.append("type", t),
            a.append("doc_type", e.type_id),
            a.append("file", n),
            $.ajax({
              url: "/upload",
              type: "POST",
              contentType: !1,
              processData: !1,
              headers: {
                "X-CSRF-TOKEN": o,
              },
              data: a,
              dataType: "JSON",
              success: function (a) {
                "true" === a["return"]
                  ? ((e.info[t] = "up"), e.showAmaran("Upload successful"))
                  : e.showAmaran(
                      "File type is not [ PNG, JPG, JPEG, PDF ]!",
                      "#c0392b"
                    ),
                  e.setLoadingAssets(t, !1),
                  e.$digest();
              },
              error: function (a) {
                if (401 === a.status)
                  return void (location.href = "/api/logout");
                var n = "Some errors try latter";
                413 === a.status && (n = "File Too Large, max file size 10Mb"),
                  e.showAmaran(n, "#c0392b"),
                  e.setLoadingAssets(t, !1);
              },
            });
        }),
        (e.setLoadingAssets = function (a, t) {
          "passport" === a && (a = "ps"), (e[a + "_loading"] = t), e.$digest();
        }),
        (e.preview = function (a) {
          e.downloadURI("/upload/" + a, a + ".pdf");
        }),
        (e.previewExt = function (a, t) {
          e.PopupSmallWindow("/upload/" + a + "/" + t);
        }),
        (e.PopupSmallWindow = function (a) {
          var t = screen.width,
            n = screen.height,
            o = (t - 400) / 2,
            i = (n - 300) / 2;
          window.open(
            a,
            "infowindow" + e.GetRandom(),
            "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=400,height=300,left=" +
              o +
              ",top=" +
              i
          );
        }),
        (e.GetRandom = function () {
          var e,
            a = new Date();
          return (e = a.getSeconds()), (e += 1);
        }),
        (e.clearSignature = function () {
          e.sign_pad.clear();
        }),
        (e.saveSignature = function () {
          if (e.sign_pad.isEmpty())
            return void e.showAmaran("Cant save empty sign!", "#c0392b");
          e.sign_save_load = !0;
          var a = $('[name="_token"]').val();
          $.ajax({
            url: "/upload",
            type: "POST",
            headers: {
              "X-CSRF-TOKEN": a,
            },
            data: {
              type: "sign",
              data: e.sign_pad.toDataURL(),
              doc_type: e.type_id,
            },
            dataType: "JSON",
            success: function (a) {
              (e.info.sign = "up"),
                (e.show_sign = !1),
                (e.sign_save_load = !1),
                (e.close_sign = !0),
                e.showAmaran("Upload successful"),
                e.showChat(),
                e.$digest();
            },
            error: function (a) {
              return 401 == a.status
                ? void (location.href = "/api/logout")
                : (e.showAmaran("Some errors try latter", "#c0392b"),
                  (e.sign_save_load = !1),
                  void e.$digest());
            },
          });
        }),
        (e.resizeCanvas = function () {
          if (0 != $("#signature-pad").length && e.sign_canvas) {
            var a = e.sign_canvas,
              t = Math.max(window.devicePixelRatio || 1, 1);
            (a.width = a.offsetWidth * t),
              (a.height = a.offsetHeight * t),
              a.getContext("2d").scale(t, t);
          }
        }),
        (e.initSignature = function () {
          var a = $("#signature-pad");
          (e.sign_wrapper = a.length > 0 && a[0]),
            (e.sign_canvas =
              a.find("canvas").length > 0 && a.find("canvas")[0]),
            e.sign_canvas &&
              (e.resizeCanvas(),
              (e.sign_pad = new SignaturePad(e.sign_canvas)),
              (window.onresize = e.resizeCanvas));
        }),
        (e.initMagnefic = function () {
          $(".image-popup").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            image: {
              verticalFit: !1,
            },
          });
        }),
        (e.showSignBtn = function () {
          (e.show_sign = !0),
            setTimeout(function () {
              e.resizeCanvas();
            }, 400),
            e.hideChat();
        }),
        (e.hideSignBtn = function () {
          (e.show_sign = !1), e.showChat();
        }),
        (e.hideChat = function () {
          $('[ng-controller="Chat"]').hide();
        }),
        (e.showChat = function () {
          $('[ng-controller="Chat"]').show();
        }),
        (e.loadCards = function () {
          a({
            method: "POST",
            url: "/api/triggers/cards",
          })
            .success(function (a, t, n, o) {
              (e.card_list_loading = !0),
                (e.card_list = a.card),
                (e.can_load_card = a.can_load);
            })
            .error(function (a, t, n, o) {
              e.card_list_loading = !0;
            });
        }),
        (e.chatVerificationStart = function () {
          n.$broadcast("chat:verification");
        }),
        e.initSignature(),
        e.initMagnefic();
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope"]),
      angular.module("app").controller("Info", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n) {
      function o() {
        (p = document.getElementById("tablet")),
          (m = p.getContext("2d")),
          $("#clear_canvas").on("click", function () {
            m.clearRect(0, 0, p.width, p.height);
          }),
          document
            .getElementById("save")
            .addEventListener("click", function () {
              if (m) {
                var a = p.toDataURL("image/png"),
                  t = new XMLHttpRequest();
                (t.onreadystatechange = function () {
                  4 == t.readyState &&
                    200 == t.status &&
                    (t.responseText
                      ? ($("#signature_box").hide(),
                        $("#document").hide(),
                        $("#link-to-pdf").text("Show document"),
                        (e.info.sign = "1"),
                        e.$digest())
                      : alert("Sorry, error."));
                }),
                  t.open("POST", "/userdocs/dataurl", !0),
                  t.setRequestHeader("Content-Type", "application/upload"),
                  t.send(a);
              } else alert("No signature!");
            }),
          setInterval(function () {
            i(), r();
          }, 1e3 / 60);
      }

      function i() {}

      function r() {
        u();
      }

      function s(e) {
        var a = d(e);
        g.push({
          x: a.x,
          y: a.y,
        }),
          (f = !0);
      }

      function l(e) {
        var a = d(e);
        f &&
          g.push({
            x: a.x,
            y: a.y,
          });
      }

      function c(e) {
        (f = !1), (g = []), $("#save").show();
      }

      function d(e) {
        var a, t;
        return (
          (a = (e.cleintX || e.pageX) - p.offsetLeft),
          (t = (e.clientY || e.pageY) - p.offsetTop),
          {
            x: a,
            y: t,
          }
        );
      }

      function u() {
        (m.lineCap = "round"),
          (m.lineWidth = 1),
          (m.strokeStyle = "#2F508C"),
          (m.lineJoin = "round");
        for (var e = 1; e < g.length; e++)
          m.beginPath(),
            m.moveTo(g[e - 1].x, g[e - 1].y),
            m.lineTo(g[e].x, g[e].y),
            m.closePath(),
            m.stroke();
      }
      (e.user = {
        email: User.get("login"),
        phone: User.get("phone"),
      }),
        (e.info = User),
        (e.FileLoad = !0),
        (e.server = {}),
        (e.error = ""),
        (e.loading = !1),
        (e.send = function () {
          (e.loading = !0),
            a({
              method: "POST",
              url: "/api/info",
              data: e.user,
            })
              .success(function (a, t, n, o) {
                (e.server = a),
                  "true" == a["return"]
                    ? User.set("phone", e.user.phone)
                    : ((e.error = a.error),
                      (e.loading = !1),
                      $(".message.em").transition("shake")),
                  (e.loading = !1);
              })
              .error(function (a, t, n, o) {
                (e.loading = !1),
                  (e.error = a.message
                    ? a.message
                    : Lang.get("auth.server_error")),
                  $(".message.em").transition("shake");
              });
        }),
        (e.showAmaran = function (e) {
          $.amaran({
            theme: "colorful",
            delay: 5e3,
            content: {
              bgcolor: "#27ae60",
              color: "#fff",
              message: e,
            },
            position: "bottom left",
            outEffect: "slideBottom",
          });
        });
      var p,
        m,
        f = !1,
        g = [];
      document.addEventListener("mousedown", s, !1),
        document.addEventListener("mousemove", l, !1),
        document.addEventListener("mouseup", c, !1),
        o(),
        $(function () {
          $("#show-sign").on("click", function () {
            $("#document").toggle();
          }),
            $("#show_canvas").on("click", function () {
              $("#signature_box").show();
            }),
            $("#close-doc").on("click", function () {
              $("#document").hide();
            }),
            $("#close_canvas").on("click", function () {
              $("#signature_box").hide();
            }),
            $("input[name=passport],input[name=card]").on(
              "change",
              function () {
                var a = new FormData(),
                  t = $(this).prop("files")[0];
                $(this)
                  .next("form")
                  .children("div")
                  .children("span")
                  .text(t.name);
                var n = $(this).attr("name");
                return (
                  a.append("file", t),
                  a.append("type", n),
                  $.ajax({
                    url: "/userdocs/upload",
                    type: "POST",
                    contentType: !1,
                    processData: !1,
                    data: a,
                    dataType: "JSON",
                    success: function (a) {
                      "true" == a.success
                        ? ("passport" == n && (e.info.passport_new = "up"),
                          "card" == n && (e.info.card = "up"),
                          e.showAmaran("Upload successful"),
                          e.$digest())
                        : alert("File type is not [ PNG, JPG, JPEG, PDF ]!");
                    },
                  }),
                  !1
                );
              }
            );
        }),
        (e.preview = function (e) {
          var a = "/userdocs/viewdoc/" + e;
          window.open(a);
        });
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope"]),
      angular.module("app").controller("InfoCurrepted", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.info = angular.copy(User)),
        (e.lang = angular.copy(Lang)),
        (e.promo = ""),
        (e.loading = !1),
        (e.server = {
          AddPromo: {},
        }),
        (e.AddPromo = function () {
          (e.loading = !0),
            a({
              method: "POST",
              url: "/api/promo",
              data: {
                promo: e.promo,
              },
            })
              .success(function (t, n, o, r) {
                (e.server.AddPromo = t),
                  "true" == t["return"] &&
                    a
                      .post("/api/modal/modal-promo")
                      .success(function (a, t, n, o) {
                        var r = i(a.content)(e);
                        alertify.alert("", r[0]);
                      }),
                  (e.loading = !1);
              })
              .error(function (a, t, n, o) {
                (e.server.AddPromo = a), (e.loading = !1);
              });
        });
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Spot",
      "$compile",
    ]),
      angular.module("app").controller("PromoNG", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.loading = !1),
        (e.promotions = []),
        (e.loadPromotions = function () {
          (e.loading = !1),
            (e.promotions = []),
            a({
              method: "POST",
              url: "/api/us/promotions",
              data: {},
            })
              .success(function (a) {
                (e.promotions = a),
                  (e.loading = !0),
                  setTimeout(function () {
                    e.updateClock($(".stock-time"));
                  }, 100);
              })
              .error(function () {
                i.displayToastAmaran("error", "Load data error");
              });
        }),
        (e.timeParseFunction = function (e, a) {
          if (moment().unix() - e >= 0) {
            var t = a - moment().unix(),
              n = Math.floor(t % 60),
              o = Math.floor((t / 60) % 60),
              i = Math.floor(t / 60 / 60);
            return {
              total: t,
              hours: i,
              minutes: o,
              seconds: n,
              now: moment().unix(),
            };
          }
          return {
            total: 0,
          };
        }),
        (e.updateClock = function (a) {
          a &&
            a.each(function (a, t) {
              function n() {
                var a = e.timeParseFunction(
                    $(t).data("start"),
                    $(t).data("end")
                  ),
                  n = $(t).children()[0],
                  i = $(t).children()[1],
                  r = $(t).children()[2];
                a.total <= 0
                  ? clearInterval(o)
                  : ($(n).html(("0" + a.hours).slice(-2)),
                    $(i).html(("0" + a.minutes).slice(-2)),
                    $(r).html(("0" + a.seconds).slice(-2)));
              }
              var o = setInterval(n, 1e3);
            });
        }),
        (e.redeem = function (t) {
          (e.loading = !1),
            (e.promotions = []),
            a({
              method: "POST",
              url: "/api/us/promotions_activate",
              data: {
                name: t.name,
              },
            })
              .success(function (a) {
                e.loadPromotions();
              })
              .error(function () {
                i.displayToastAmaran("error", "Load data error");
              });
        }),
        e.loadPromotions();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "FPlatform",
      "ModalService",
    ]),
      angular.module("app").controller("Promotions", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.info = User),
        (e.size = "ALL"),
        (e.format = "ALL"),
        (e.lang = "en"),
        (e.history = {
          start: "",
          end: "",
          type: "all",
        }),
        (e.rep = {
          date_from: moment
            .unix(User.get("regTime") / 1e3)
            .format("DD.MM.YYYY"),
          date_to: "",
        }),
        (e.loading = !0),
        (e.data = []),
        (e.landing = ""),
        (e.link_name = ""),
        (e.search = ""),
        (e.balance = 0),
        (e.balance_send = 0),
        (e.materials = []),
        (e.bannerSize = []),
        (e.initBannerSize = function () {
          _.each(e.data.material, function (a, t) {
            $.inArray(a.size, e.bannerSize) === -1 && e.bannerSize.push(a.size);
          });
        }),
        (e.filterMaterials = function () {
          var a = {};
          (a.locale = e.lang),
            "ALL" !== e.format && (a.format = e.format),
            "ALL" !== e.size && (a.size = e.size),
            (e.materials = _.where(e.data.material, a));
        }),
        (e.loadInitData = function () {
          e.loading = !0;
          var t = angular.copy(e.rep);
          (t.date_from = t.date_from.split(".").reverse().join("-")),
            (t.date_to = t.date_to.split(".").reverse().join("-"));
          var n = 1e3 * moment().hour(0).unix(),
            o = moment.now(),
            r = ["MM/DD/YYYY", "MM-DD-YYYY", "YYYY-MM-DD"];
          moment(t.date_from, r).isValid() &&
            (n = 1e3 * moment.utc(t.date_from).unix()),
            moment(t.date_to, r).isValid() &&
              (o = 1e3 * moment.utc(t.date_to).unix()),
            a({
              method: "POST",
              url: "/api/us/refferal",
              data: {
                action: "show",
                DateFrom: n,
                DateTo: o,
              },
            })
              .success(function (a) {
                _.each(a.link, function (e, t) {
                  _.each(a.program, function (a, t) {
                    a.link_href === e.link_href && (e.landing = a);
                  });
                }),
                  (e.data = a),
                  (e.loading = !1),
                  (e.balance = a.balance),
                  e.selectLandingPage(),
                  e.filterMaterials(),
                  e.initBannerSize();
              })
              .error(function () {
                i.displayToastAmaran("error", "Load data error");
              });
        }),
        (e.transfer_loading = !1),
        (e.transferBalance = function () {
          return isNaN(parseInt(e.balance_send)) ||
            parseInt(e.balance_send) <= 0
            ? (i.displayToastAmaran("error", "Wrong amount"), !1)
            : ((e.transfer_loading = !0),
              void a({
                method: "POST",
                url: "/api/us/refferal",
                data: {
                  action: "transfer",
                  amount: e.balance_send,
                  account: e.account,
                },
              })
                .success(function (a) {
                  a["return"]
                    ? (i.displayToastAmaran("success", "Successfully"),
                      e.cancelModal(),
                      (e.balance = a.balance))
                    : i.displayToastAmaran("error", a.message),
                    (e.transfer_loading = !1);
                })
                .error(function () {
                  i.displayToastAmaran(
                    "error",
                    "Some error with save, please try later"
                  );
                }));
        }),
        (e.filterLink = function () {
          var t = angular.copy(e.rep);
          (t.date_from = t.date_from.split(".").reverse().join("-")),
            (t.date_to = t.date_to.split(".").reverse().join("-"));
          var n = 1e3 * moment().hour(0).unix(),
            o = moment.now(),
            r = ["MM/DD/YYYY", "MM-DD-YYYY", "YYYY-MM-DD"];
          moment(t.date_from, r).isValid() &&
            (n = 1e3 * moment.utc(t.date_from).unix()),
            moment(t.date_to, r).isValid() &&
              (o = 1e3 * moment.utc(t.date_to).unix()),
            a({
              method: "POST",
              url: "/api/us/refferal",
              data: {
                action: "filter",
                DateFrom: n,
                DateTo: o,
              },
            })
              .success(function (a) {
                e.data.link = a.link;
              })
              .error(function () {
                i.displayToastAmaran("error", "Load data error");
              });
        }),
        (e.selectLandingPage = function (a) {
          e.landing = e.data.program[0].refferal;
        }),
        (e.saveLink = function () {
          return "" === e.link_name || "" === e.landing
            ? (i.displayToastAmaran(
                "error",
                "Please fill Link name and chose Landing page"
              ),
              !1)
            : (e.cancelModal(),
              void a({
                method: "POST",
                url: "/api/us/refferal",
                data: {
                  action: "save",
                  link_name: e.link_name,
                  landing: e.landing,
                },
              })
                .success(function (a) {
                  a["return"]
                    ? (i.displayToastAmaran(
                        "success",
                        "Link successfully created"
                      ),
                      e.data.link.push(a.row),
                      _.each(e.data.link, function (a, t) {
                        _.each(e.data.program, function (e, t) {
                          e.link_href === a.link_href && (a.landing = e);
                        });
                      }),
                      (e.search = ""))
                    : i.displayToastAmaran("error", a.message);
                })
                .error(function () {
                  i.displayToastAmaran(
                    "error",
                    "Some error with save, please try later"
                  );
                }));
        }),
        (e.account = User.get("current_accountId")),
        (e.is_loading = !1),
        (e.server = !1),
        (e.copyText = function (a) {
          e.copyToClipboard(".copy-" + a)
            ? i.displayToastAmaran("success", "Link copied to clipboard")
            : i.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.ch = 0),
        (e.OnChengaDate = function () {
          console.log("ch"), e.ch++, 0 !== e.ch && e.filterLink();
        }),
        (e.cancelModal = function () {
          $(".ui.modal").modal("hide");
        }),
        (e.showImage = function (e) {
          $.magnificPopup.open({
            items: {
              src: e.extend,
            },
            type: "image",
          });
        }),
        (e.changeLang = function (a) {
          (e.lang = a), e.filterMaterials();
        }),
        (e.showTransfer = function () {
          $(".modal.refferal_transfer")
            .modal({
              closable: !1,
            })
            .modal("show");
        }),
        (e.showCreateLink = function () {
          (e.link_name = ""),
            $(".modal.create_affiliate")
              .modal({
                closable: !1,
              })
              .modal("show");
        }),
        (e.clearAllModals = function () {
          $(".ui.dimmer.modals .ui.modal").remove();
        }),
        n.$on("flat-datepicker:date_change", e.OnChengaDate),
        e.loadInitData(),
        e.clearAllModals();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "FPlatform",
      "ModalService",
    ]),
      angular.module("app").controller("Refferal", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      var d = function (e, a) {
          var t = Cc.GEO,
            n = _.findWhere(r, {
              iso: t,
            });
          return n ? n[e] : a;
        },
        u = {
          imprint: "not_init",
          hex: "not_init",
        };
      try {
        u = c.getImprint();
      } catch (p) {}
      (e.user = {
        country: d("name", ""),
        currency: "USD",
        login: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        phone_prefix: d("prefix", ""),
        promo: "",
        csrf: "",
        csprint: u.imprint,
        cshex: u.hex,
      }),
        (e.have_promo = !1),
        (e.us_is = "en" === Lang.get("sig")),
        (e.us_agree = !1),
        (e.agree = !1);
      var m = !!Cc && Cc.get("INPUT");
      m &&
        (m.promo && (e.have_promo = !0),
        $.each(e.user, function (a, t) {
          m[a] && (e.user[a] = m[a]);
        })),
        (e.countrys = r),
        (e.server = {});
      var f = function () {
        var a = _.without(r, r[0]),
          t = o("orderBy"),
          n = t(a, "name", !1);
        e.countrys = _.toArray(n);
      };
      (e.ln = Lang),
        (e.server = {}),
        (e.loading = !1),
        (e.GetCountryName = function () {
          var a = _.findWhere(e.countrys, {
            name: e.user.country,
          });
          a && (e.user.phone_prefix = a.prefix);
        }),
        (e.send = function () {
          if (e.form.$valid) {
            var t = angular.copy(e.user);
            (e.loading = !0),
              a({
                method: "POST",
                url: "/api/register",
                data: t,
              })
                .success(function (a, t, n, o) {
                  if (((e.server = a), console.log(a), "true" == a["return"])) {
                    var r = Lang.get("sig"),
                      c = function (e, a, t, n) {
                        return "false" === e["return"]
                          ? void (parent.window.location.href =
                              "/" + r + "/login")
                          : (i.GaEventRegister(),
                            i.GtagEventRegister(),
                            void setTimeout(function () {
                              parent.window.location.href =
                                "/" + r + "/trading#/home";
                            }, 400));
                      },
                      d = function (e) {
                        console.log(e),
                          (parent.window.location.href = "/" + r + "/login");
                      },
                      u = function (e, a, t, n) {
                        console.log(e),
                          (parent.window.location.href = "/" + r + "/login");
                      };
                    s.LoginAndAuth(e.user.login, e.user.password, c, u, d);
                  } else {
                    if ("true" == getNested(a, "is_usa"))
                      return (
                        l.showAlert(
                          Lang.get("for_us.title"),
                          Lang.get("for_us.text"),
                          !1,
                          {
                            ok_trigger: function () {
                              parent.window.location.reload();
                            },
                          }
                        ),
                        e.$on("modal:cancel", function () {
                          parent.window.location.reload();
                        }),
                        !1
                      );
                    $(".message.em").transition("shake"), (e.loading = !1);
                  }
                })
                .error(function (a, t, n, o) {
                  (e.server = {
                    return: "false",
                    message: Lang.get("auth.server_error"),
                  }),
                    $(".message.em").transition("shake"),
                    (e.loading = !1);
                });
          } else $(".ng-invalid").focus();
        }),
        m.auto &&
          setTimeout(function () {
            e.send();
          }, 1e3),
        f();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$filter",
      "SEO",
      "ISO",
      "FPlatform",
      "ModalService",
      "Imprint",
    ]),
      angular.module("app").controller("RGN", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.rep = {
        date_from: moment().subtract(1, "days").format("DD.MM.YYYY"),
        date_to: "",
        status: "ALL",
        position: "call",
      }),
        (e.checkTimeImterval = function (e) {
          var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "date_from",
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "date_to";
          if ("" != e.date_to) {
            var n = moment(e[t].split(".").reverse().join("-")).format("X"),
              o = moment(e[a].split(".").reverse().join("-")).format("X");
            return !(o > n);
          }
          return !0;
        }),
        (e.server = !1),
        (e.is_loading = !1),
        (e.ResultDefault = {
          hits: [],
          total: 0,
        }),
        (e.result = angular.copy(e.ResultDefault)),
        (e.send = function () {
          var t = angular.copy(e.rep);
          if (
            ((e.result = angular.copy(e.ResultDefault)),
            !e.checkTimeImterval(t))
          )
            return (e.rep.date_to = ""), $($(".calendar-wrap")[1]).shake(), !1;
          var n = moment();
          n.subtract({
            hours: n.get("hours"),
            minutes: n.get("minutes"),
            seconds: 0,
          }),
            (t.date_from = t.date_from.split(".").reverse().join("-")),
            (t.date_to = t.date_to.split(".").reverse().join("-"));
          var o = 1e3 * n.unix(),
            i = moment.now(),
            r = "ALL" == e.rep.status ? "" : e.rep.status,
            s = "",
            l = ["MM/DD/YYYY", "MM-DD-YYYY", "YYYY-MM-DD"];
          moment(t.date_from, l).isValid() &&
            (o = 1e3 * moment.utc(t.date_from).unix()),
            moment(t.date_to, l).isValid() &&
              (i = 1e3 * moment.utc(t.date_to).unix());
          var c = function (a) {
            (e.result = angular.copy(e.ResultDefault)), (e.is_loading = !1);
          };
          (e.is_loading = !0),
            a({
              method: "POST",
              url: "/api/us/reports",
              data: {
                DateFrom: o,
                DateTo: i,
                limit: 100,
                offset: 0,
                Status: r,
                Sumbol: s,
              },
            })
              .success(function (a) {
                (e.result = a), (e.is_loading = !1);
              })
              .error(c);
        }),
        (e.loadMore = function () {
          var t = angular.copy(e.rep),
            n = moment();
          n.subtract({
            hours: n.get("hours"),
            minutes: n.get("minutes"),
            seconds: 0,
          }),
            (t.date_from = t.date_from.split(".").reverse().join("-")),
            (t.date_to = t.date_to.split(".").reverse().join("-"));
          var o = 1e3 * n.unix(),
            i = moment.now(),
            r = "ALL" == e.rep.status ? "" : e.rep.status,
            s = "",
            l = ["MM/DD/YYYY", "MM-DD-YYYY", "YYYY-MM-DD"];
          moment(t.date_from, l).isValid() &&
            (o = 1e3 * moment.utc(t.date_from).unix()),
            moment(t.date_to, l).isValid() &&
              (i = 1e3 * moment.utc(t.date_to).unix());
          var c = function (a) {
            (e.result = angular.copy(e.ResultDefault)), (e.is_loading = !1);
          };
          (e.is_loading_more = !0),
            a({
              method: "POST",
              url: "/api/us/reports",
              data: {
                DateFrom: o,
                DateTo: i,
                skip: e.result.skip,
                Status: r,
                Sumbol: s,
              },
            })
              .success(function (a) {
                (e.result.skip = a.skip),
                  $.each(a.hits, function (a, t) {
                    e.result.hits.push(t);
                  }),
                  (e.is_loading = !1),
                  (e.is_loading_more = !1);
              })
              .error(c);
        }),
        e.send(),
        (e.OnChengaDate = function () {
          e.send();
        }),
        n.$on("flat-datepicker:date_change", e.OnChengaDate);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope", "FPlatform"]),
      angular.module("app").controller("Reports", e);
  })(window),
  (function (e) {
    e.fn.shake = function (a) {
      var t = {
        shakes: 2,
        distance: 10,
        duration: 400,
      };
      a && e.extend(t, a);
      var n;
      return this.each(function () {
        ($this = e(this)),
          (n = $this.css("position")),
          (n && "static" !== n) || $this.css("position", "relative");
        for (var a = 1; a <= t.shakes; a++)
          $this
            .animate(
              {
                left: t.distance * -1,
              },
              t.duration / t.shakes / 4
            )
            .animate(
              {
                left: t.distance,
              },
              t.duration / t.shakes / 2
            )
            .animate(
              {
                left: 0,
              },
              t.duration / t.shakes / 4
            );
      });
    };
  })(jQuery),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l) {
      (e.days = "00"),
        (e.hours = "00"),
        (e.minutes = "00"),
        (e.seconds = "00"),
        (e.limited = l.limited),
        (e.offer = l.offer),
        s.is("risk_free") ||
          s.run("risk_free", 3600, function () {
            e.ignore();
          });
      var c = function (a, t) {
          "risk_free" == t.name &&
            ((e.days = t.days < 10 ? "0" + t.days : t.days),
            (e.hours = t.hours < 10 ? "0" + t.hours : t.hours),
            (e.minutes = t.minutes < 10 ? "0" + t.minutes : t.minutes),
            (e.seconds = t.seconds < 10 ? "0" + t.seconds : t.seconds));
        },
        d = function () {
          s.die("limited"), Cc.set("TRY", 2);
        };
      (e.accept = function () {
        i.CloseAll(),
          setTimeout(function () {
            $("html, body").animate(
              {
                scrollTop: $(".account-utils__list").offset().top - 200,
              },
              "fast"
            );
            var e = $(".promo-form");
            e.addClass("puls-inf"),
              e.one("mouseenter mouseleave", function (a) {
                e.removeClass("puls-inf");
              });
          }, 600);
        var e = $(".risk-promo").html();
        Cc.set("SESSION.promo", e),
          Cc.set("TRY", 2),
          a.post("/api/triggers/promo", {
            promo: e,
          }),
          r.go("show", {
            page: "funding",
          });
      }),
        e.$on("modal:cancel", d),
        e.$on("coundown:tick", c);
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$filter",
      "ModalService",
      "$state",
      "CountDown",
      "Store",
    ]),
      angular.module("app").controller("RiskFree", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r, s, l, c) {
      var d = i.current.name,
        u = i.params.page,
        p = ["funding"];
      (e.isNeedRedirectToValidate = function () {
        var e = User.get("tr_success"),
          a = User.get("tr_validate");
        return "yes" === a && "yes" !== e;
      }),
        (e.checkIsNeedValidate = function (a) {
          return (
            ("home" === d || ("show" === d && $.inArray(u, p) !== -1)) &&
              e.isNeedRedirectToValidate() &&
              i.go("swag", {
                page: "validate",
              }),
            !1
          );
        }),
        (e.needIQpopup = function () {
          l.isActive() ||
            "1" !== User.get("last_count") ||
            User.get("iq_start") ||
            l.showDynamic(
              "/api/ag/modal_iq_one",
              {
                theme: "fund_iq",
                close: "bdw-close",
              },
              {
                onHide: function () {},
              }
            );
        }),
        (e.showGiveAway = function () {
          setTimeout(function () {
            0 === $(".modals.active").length &&
              (localStorage.setItem("giveaway", moment().unix()),
              l.showDynamic(
                "/api/ag/modal_giveaway",
                {
                  theme: "giveaway-modal-root",
                  close: "bdw-close",
                },
                {
                  onHide: function () {
                    try {
                      gtag("event", "close", {
                        event_category: "raceoption",
                        event_label: "giveaway",
                      });
                    } catch (e) {
                      console.log("error gtag", e);
                    }
                  },
                }
              ));
          }, 6e5);
        }),
        (e.isNeedGiveAway = function () {
          var a = localStorage.getItem("giveaway");
          if (a) {
            var t = moment.unix(a).add(24, "hours").unix(),
              n = moment().unix();
            n > parseInt(t) && e.showGiveAway();
          } else e.showGiveAway();
        }),
        (e.needUpdateNotifications = function () {
          e.update_inc > 1 &&
            User.get("trigger_new") &&
            n.$broadcast("notifications:update", {});
        }),
        (e.update_inc = 0),
        (e.updateUser = function () {
          a({
            method: "POST",
            url: "/api/fraud/user",
          })
            .success(function (a) {
              (window.User = new Tron(a)),
                n.$broadcast("user:update:success", a),
                e.update_inc++,
                e.checkIsNeedValidate(),
                e.needIQpopup(),
                e.needUpdateNotifications();
            })
            .error(function (e) {
              console.log("error update user!");
            });
        }),
        t(function () {
          e.updateUser();
        }, 9e3),
        (e.update_last = ""),
        c(function () {
          var a = moment().format("h:mm");
          a !== e.update_last && ((e.update_last = a), e.updateUser());
        }, 3e5),
        (e.Is5RiskFreePopup = function () {
          Cc.get("SESSION.register_event") &&
            1 === Cc.get("TRY") &&
            l.showFancy("/api/ag/modal_5_risk_free");
        }),
        (e.initGlobalsTest = function () {
          (window.testRisk = function () {
            l.showDynamic("/api/ag/modal_5_risk_free", {
              theme: "deposit_and_timer",
              close: "bdw-close",
            });
          }),
            (window.testSign = function () {
              l.showDynamic(
                "/api/ag/modal_sign",
                {
                  theme: "popup393",
                  close: "bdw-close",
                },
                {
                  closable: !1,
                }
              );
            }),
            (window.testIQ = function () {
              l.showDynamic(
                "/api/ag/modal_iq_one",
                {
                  theme: "fund_iq",
                  close: "bdw-close",
                },
                {
                  onHide: function () {},
                }
              );
            }),
            (window.testGiveaway = function () {
              l.showDynamic(
                "/api/ag/modal_giveaway",
                {
                  theme: "giveaway-modal-root",
                  close: "bdw-close",
                },
                {
                  onHide: function () {},
                }
              );
            }),
            (window.testEnter = function () {
              l.showDynamic(
                "/api/ag/modal_enter",
                {
                  theme: "popup345",
                  close: "bdw-close-white",
                },
                {
                  onHide: function () {},
                  closable: !1,
                }
              );
            }),
            (window.testRiskFree = function () {
              l.showFancy("/api/ag/modal_5_risk_free");
            });
        }),
        (e.fixMenu = function () {
          $(".trading-headers .nav__item.drop-open").removeClass("drop-open"),
            $("body").hasClass("menu") && $("body").removeClass("menu");
        }),
        (e.fixNotifications = function () {
          setTimeout(function () {
            var e = $(".notifcation-area");
            $(".hamburger").is(":visible")
              ? $(".trading-headers .header-wrap .nav").after(
                  e.addClass("notifcation-area-moved")
                )
              : e.hasClass("notifcation-area-moved") &&
                $(".trading-headers .header-wrap .nav__info").prepend(
                  e.removeClass("notifcation-area-moved")
                );
          }, 400);
        }),
        e.Is5RiskFreePopup(),
        e.checkIsNeedValidate(),
        e.$on("user:update", e.updateUser),
        e.initGlobalsTest(),
        n.$on("$stateChangeSuccess", e.fixMenu),
        e.fixNotifications(),
        $(window).bind("resize", e.fixNotifications);
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "FPlatform",
      "$state",
      "ErrorHandler",
      "Signals",
      "ModalService",
      "$interval",
    ]),
      angular.module("app").controller("RootController", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e) {
      function a(e, a) {
        return Math.floor(Math.random() * (a - e)) + e;
      }
      var t = function () {
          for (
            var e = "",
              a = "QWERTYUIOPASDFGHJKLZXCVBNM",
              t = a.length - 1,
              n = 0;
            n < 2;
            ++n
          ) {
            var o = Math.floor(Math.random() * t);
            e += a.substring(o, o + 1);
          }
          return e;
        },
        n = function () {
          function e(e) {
            for (
              var a, t, n = e.length;
              n;
              a = Math.floor(Math.random() * n),
                t = e[--n],
                e[n] = e[a],
                e[a] = t
            );
            return e;
          }
          for (
            var n = [],
              o = [
                "ad",
                "ae",
                "af",
                "ag",
                "ai",
                "al",
                "am",
                "an",
                "ao",
                "ar",
                "as",
                "at",
                "au",
                "aw",
                "ax",
                "az",
                "ba",
                "bb",
                "bd",
                "be",
                "bf",
                "bg",
                "bh",
                "bi",
                "bj",
                "bm",
                "bn",
                "bo",
                "br",
                "bs",
                "bt",
                "bv",
                "bw",
                "by",
                "bz",
                "ca",
                "cc",
                "cd",
                "cf",
                "cg",
                "ch",
                "ci",
                "ck",
                "cl",
                "cm",
                "cn",
                "co",
                "cr",
                "cs",
                "cu",
                "cv",
                "cx",
                "cy",
                "cz",
                "de",
                "dj",
                "dk",
                "dm",
                "do",
                "dz",
                "ec",
                "ee",
                "eg",
                "eh",
                "er",
                "es",
                "et",
                "eu",
                "fi",
                "fj",
                "fk",
                "fm",
                "fo",
                "fr",
                "ga",
                "gb",
                "gd",
                "ge",
                "gf",
                "gh",
                "gi",
                "gl",
                "gm",
                "gn",
                "gp",
                "gq",
                "gr",
                "gs",
                "gt",
                "gu",
                "gw",
                "gy",
                "hk",
                "hm",
                "hn",
                "hr",
                "ht",
                "hu",
                "id",
                "ie",
                "il",
                "in",
                "io",
                "iq",
                "ir",
                "is",
                "it",
                "jm",
                "jo",
                "jp",
                "ke",
                "kg",
                "kh",
                "ki",
                "km",
                "kn",
                "kp",
                "kr",
                "kw",
                "ky",
                "kz",
                "la",
                "lb",
                "lc",
                "li",
                "lk",
                "lr",
                "ls",
                "lt",
                "lu",
                "lv",
                "ly",
                "ma",
                "mc",
                "md",
                "me",
                "mg",
                "mh",
                "mk",
                "ml",
                "mm",
                "mn",
                "mo",
                "mp",
                "mq",
                "mr",
                "ms",
                "mt",
                "mu",
                "mv",
                "mw",
                "mx",
                "my",
                "mz",
                "na",
                "nc",
                "ne",
                "nf",
                "ng",
                "ni",
                "nl",
                "no",
                "np",
                "nr",
                "nu",
                "nz",
                "om",
                "pa",
                "pe",
                "pf",
                "pg",
                "ph",
                "pk",
                "pl",
                "pm",
                "pn",
                "pr",
                "ps",
                "pt",
                "pw",
                "py",
                "qa",
                "re",
                "ro",
                "rs",
                "ru",
                "rw",
                "sa",
                "sb",
                "sc",
                "sd",
                "se",
                "sg",
                "sh",
                "si",
                "sj",
                "sk",
                "sl",
                "sm",
                "sn",
                "so",
                "sr",
                "st",
                "sv",
                "sy",
                "sz",
                "tc",
                "td",
                "tf",
                "tg",
                "th",
                "tj",
                "tk",
                "tl",
                "tm",
                "tn",
                "to",
                "tr",
                "tt",
                "tv",
                "tw",
                "tz",
                "ua",
                "ug",
                "um",
                "us",
                "uy",
                "uz",
                "va",
                "vc",
                "ve",
                "vg",
                "vi",
                "vn",
                "vu",
                "wf",
                "ws",
                "ye",
                "yt",
                "za",
                "zm",
                "zw",
              ],
              i = 30,
              r = parseInt(0.7 * i),
              s = 0;
            s < i;
            s++
          ) {
            var l = s >= r ? "Loss" : "Profit";
            n.push({
              name: t().split("").join("."),
              profit: a(10, 1e3),
              flag: o[Math.floor(Math.random() * o.length)],
              derection: l,
            });
          }
          return (
            n.sort(function () {
              return Math.random() - 0.6;
            }),
            e(n)
          );
        };
      e.SandBox = n();
    };
    (e.$inject = ["$scope"]), angular.module("app").controller("Runline", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r) {
      (e.user = {
        oldPassword: "",
        password: "",
        repeatPassword: "",
      }),
        (e.info = User),
        (e.server = {}),
        (e.loading = !1);
      var s = User.get("two_factor");
      (e.factors = {
        email: "email" === s,
        google: "google" === s,
        sms: "sms" === s,
      }),
        (e.send = function () {
          if (e.secure.$valid) {
            e.loading = !0;
            var t = function (a) {
                (e.server = {
                  return: "true",
                }),
                  (e.loading = !1),
                  (e.user = {
                    oldPassword: "",
                    password: "",
                    repeatPassword: "",
                  }),
                  $(".message.su").transition("shake");
              },
              n = function (a) {
                var t = "";
                (t =
                  a.message && a.message
                    ? a.message
                    : Lang.get("messages.500")),
                  (e.server = {
                    return: "false",
                    message: t,
                  }),
                  $(".message.em.change").transition("shake"),
                  (e.loading = !1);
              };
            a({
              method: "POST",
              url: "/api/us/security",
              data: e.user,
            })
              .success(t)
              .error(n);
          } else $(".ng-invalid").focus();
        }),
        (e.change_name = ""),
        (e.change_value = ""),
        (e.showGoogle = function () {
          a({
            method: "POST",
            url: "/api/fraud/two_factors",
            data: {
              type: e.change_name,
              state: e.change_value,
            },
          })
            .success(function (e) {
              e.success
                ? ((r.qr = e.qr),
                  (r.type = "" === e.qr ? "reset" : "factors"),
                  i.showFancy("/api/ag/modal_google"))
                : (console.log(e), i.displayToastAmaran("error", e.message));
            })
            .error(function (e) {
              console.log("error update user!", e);
            });
        }),
        (e.showEmail = function () {
          a({
            method: "POST",
            url: "/api/fraud/two_factors",
            data: {
              type: "email",
              state: !0,
            },
          })
            .success(function (e) {
              e.success
                ? ((r.type = "email"), i.showFancy("/api/ag/modal_email"))
                : (console.log(e), i.displayToastAmaran("error", e.message));
            })
            .error(function (e) {
              console.log("error update user!", e);
            });
        }),
        (e.changeFactors = function (a) {
          (e.change_name = a),
            (e.change_value = e.factors[a]),
            $.each(e.factors, function (t, n) {
              a !== t && (e.factors[t] = !1);
            }),
            (e.factors[a] = !e.factors[a]),
            "google" === a && (e.change_value ? e.showEmail() : e.showGoogle());
        }),
        (e.successChange = function () {
          (e.factors[e.change_name] = e.change_value),
            User.set("two_factor", e.change_name),
            i.displayToastAmaran("success", "Saving Successfully");
        }),
        n.$on("google:success:factors", e.successChange),
        n.$on("email:success:factors", e.showGoogle);
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "FPlatform",
      "ModalService",
      "Store",
    ]),
      angular.module("app").controller("Security", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.info = User),
        (e.state = "list"),
        (e.ticket_loading = !1),
        (e.post_loading = !1),
        (e.can_reply = !1),
        (e.close_loadig = !1),
        (e.form = {
          allow: !1,
          departments: [],
          priority: [],
          error: "",
        }),
        (e.list = {
          allow: !1,
          child: !1,
          show: {},
          show_current: [],
          node: [],
          cache: [],
          filter: 0,
          filter_node: [],
          error: "",
          error_node: "",
          node_prev: 0,
        }),
        (e.ticket = {
          priority: "1",
          departments: "52",
          subject: "",
          content: "",
        }),
        (e.post = {
          content: "",
        }),
        (e.node_order = "activity"),
        (e.node_reverse = !0),
        (e.downloadURI = function (e, a) {
          var t = document.createElement("a");
          (t.download = a),
            (t.href = e),
            document.body.appendChild(t),
            t.click(),
            document.body.removeChild(t);
        }),
        (e.fl = function (a) {
          e.node_order === a && (e.node_reverse = !e.node_reverse),
            (e.node_order = a);
        }),
        (e.applyFilter = function (a) {
          (e.list.filter = a),
            (e.list.filter_node =
              0 === a
                ? e.list.node
                : _.where(e.list.node, {
                    status_id: a,
                  })),
            (e.list.filter_node = _.sortBy(e.list.filter_node, "status_id"));
        }),
        (e.submitPost = function () {
          (e.post.ticket = e.list.show.id),
            (e.post_loading = !0),
            a({
              method: "POST",
              url: "/api/kayako/post",
              data: e.post,
            })
              .success(function (a, t, o, i) {
                (e.post_loading = !1),
                  (e.post.content = ""),
                  (e.can_reply = !1),
                  n.$broadcast("file-up:drop", {}),
                  e.reOpenTicket(),
                  e.showGet(e.list.show);
              })
              .error(function (a, t, n, o) {
                e.post_loading = !1;
              });
        }),
        (e.reOpenTicket = function () {
          if ("Open" !== e.list.show.status) {
            e.list.show.status = "Open";
            var a = e.list.show.id,
              t = _.where(e.list.node, {
                id: a,
              });
            t && ((t.status = "Open"), (t.status_id = 1)), e.loadList();
          }
        }),
        (e.loadList = function () {
          (e.list.allow = !1),
            (e.list.node_prev = e.list.node.length),
            (e.list.node = []),
            (e.list.error = ""),
            a({
              method: "POST",
              url: "/api/kayako/list",
            })
              .success(function (a, t, n, o) {
                (e.list.allow = !0),
                  (e.list.node = a),
                  e.applyFilter(e.list.filter);
              })
              .error(function (a, t, n, o) {
                (e.list.allow = !0),
                  (e.list.error = "yes"),
                  console.log("error");
              });
        }),
        (e.DropAtt = function () {
          a({
            method: "POST",
            url: "/api/kayako/drop",
          });
        }),
        (e.ActionLoadingDeps = function () {
          (e.form.allow = !1),
            (e.form.error = ""),
            a({
              method: "POST",
              url: "/api/kayako/form",
            })
              .success(function (a, t, n, o) {
                (e.form = a), (e.form.error = ""), (e.form.allow = !0);
              })
              .error(function (a, t, n, o) {
                console.log("error"),
                  (e.form.allow = !0),
                  (e.form.error = "yes");
              });
        }),
        (e.LoadDepsCllback = function (a, t) {
          (e.form = t), (e.form.error = ""), (e.form.allow = !0);
        }),
        (e.init_try = 0),
        (e.ActionInit = function () {
          a({
            method: "POST",
            url: "/api/kayako/init",
          })
            .success(function (a, t, n, o) {
              e.loadList();
            })
            .error(function (a, t, n, o) {
              e.init_try < 3 && (e.ActionInit(), e.init_try++);
            });
        }),
        (e.show = function (a) {
          e.state = a;
        }),
        (e.showGet = function (t) {
          e.DropAtt(),
            e.show("get"),
            (e.list.child = !1),
            (e.list.show = t),
            (e.list.show_current = []),
            (e.list.error_node = "");
          var n = _.findWhere(e.list.cache, {
            id: t.id,
          });
          n
            ? (e.list.show_current = n)
            : a({
                method: "POST",
                url: "/api/kayako/show",
                data: {
                  id: t.id,
                },
              })
                .success(function (a, t, n, o) {
                  (e.list.show_current = a), (e.list.child = !0);
                })
                .error(function (a, t, n, o) {
                  console.log("error"),
                    (e.list.child = !0),
                    (e.list.error_node = "yes");
                });
        }),
        (e.showDialog = function (a) {
          (o.form = e.form), i.showFancy("/api/ag/support_dialog_fancy");
        }),
        (e.closeTicketUser = function () {
          (e.close_loadig = !0),
            a({
              method: "POST",
              url: "/api/kayako/close",
              data: {
                id: e.list.show.id,
              },
            })
              .success(function (a, t, n, o) {
                (e.close_loadig = !1), e.loadList(), e.show("list");
              })
              .error(function (a, t, n, o) {
                (e.close_loadig = !1),
                  i.displayToastAmaran(
                    "error",
                    "Server error try again later."
                  );
              });
        }),
        (e.closeTicket = function () {
          i.showConfirm("Close Ticket", "Are you sure?", function () {
            i.CloseAll(), e.closeTicketUser();
          });
        }),
        (e.LoadAttachment = function (a) {
          var t =
            location.origin +
            "/api/kayako/att?id=" +
            e.list.show.id +
            "&pid=" +
            a;
          e.PopupSmallWindow(t);
        }),
        (e.PopupSmallWindow = function (a) {
          var t = screen.width,
            n = screen.height,
            o = (t - 400) / 2,
            i = (n - 300) / 2;
          window.open(
            a,
            "infowindow" + e.GetRandom(),
            "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=400,height=300,left=" +
              o +
              ",top=" +
              i
          );
        }),
        (e.GetRandom = function () {
          var e,
            a = new Date();
          return (e = a.getSeconds()), (e += 1);
        }),
        (e.TicketSubmitCallback = function () {
          var a = e.list.node.length,
            t = e.list.node_prev;
          a == t && e.loadList();
        }),
        (e.replyUpload = function () {
          (e.post_loading = !0), e.$digest();
        }),
        (e.replyUploadSuccess = function () {
          (e.post_loading = !1), e.$digest();
        }),
        e.$on("kayako:update-list", e.loadList),
        e.$on("kayako:update-submit", e.TicketSubmitCallback),
        e.$on("file-up:prepare", e.replyUpload),
        e.$on("file-up:complete", e.replyUploadSuccess),
        e.$on("kayako:deps-load", e.LoadDepsCllback),
        e.ActionInit(),
        e.ActionLoadingDeps();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Store",
      "ModalService",
    ]),
      angular.module("app").controller("Support", e);
    var a = function (e, a, t, n, o, i) {
      (e.form = i.form ? i.form : {}),
        (e.ticket_loading = !1),
        (e.ticket = {
          priority: "1",
          departments: "52",
          subject: "",
          content: "",
        }),
        (e.submitTicket = function () {
          e.ticket_loading = !0;
          var t = e.Scans_len;
          a({
            method: "POST",
            url: "/api/kayako/ticket",
            data: e.ticket,
          })
            .success(function (a, o, i, r) {
              (e.ticket_loading = !1),
                (e.ticket.content = ""),
                (e.ticket.subject = ""),
                0 === t
                  ? n.$broadcast("kayako:update-submit", {})
                  : n.$broadcast("kayako:update-list", {}),
                e.cancel();
            })
            .error(function (a, t, o, i) {
              (e.ticket_loading = !1), n.$broadcast("kayako:update-submit", {});
            });
        }),
        (e.cancel = function () {
          $.fancybox.close();
        }),
        (e.ActionLoadingDeps = function () {
          (e.form.allow = !1),
            (e.form.error = ""),
            a({
              method: "POST",
              url: "/api/kayako/form",
            })
              .success(function (a, t, o, i) {
                (e.form = a),
                  (e.form.error = ""),
                  (e.form.allow = !0),
                  n.$broadcast("kayako:deps-load", a);
              })
              .error(function (a, t, n, o) {
                console.log("error"),
                  (e.form.allow = !0),
                  (e.form.error = "yes");
              });
        }),
        (e.submitUpload = function () {
          (e.ticket_loading = !0), e.$digest();
        }),
        (e.submitUploadSuccess = function () {
          (e.ticket_loading = !1), e.$digest();
        }),
        e.$on("file-up:prepare", e.submitUpload),
        e.$on("file-up:complete", e.submitUploadSuccess),
        console.log("dialog");
    };
    (a.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$compile",
      "Store",
    ]),
      angular.module("app").controller("SupportDialog", a);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.hash = ""),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.is_vload = !1),
        (e.info = User),
        (e.lang = Lang),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          "su" !== e.status &&
            "ex" !== e.status &&
            a({
              method: "POST",
              url: "/api/token/check",
              data: {
                guid: $(".guid").html(),
              },
            })
              .success(function (a) {
                (e.status = a.status), (e.hash = a.hash);
              })
              .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          o.run("btc", e.dec, e.callback);
        }, 300),
        (e.goToBlckchain = function () {
          var a = "https://etherscan.io/tx/" + e.hash,
            t = window.open(a, "_blank");
          t.focus();
        }),
        e.getStatus(),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("TOKENinvoice", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.tab = "first"),
        (e.is_loading = !0),
        (e.list = {
          first: {
            date_start: "-",
            date_end: "-",
          },
          last: {
            date_start: "-",
            date_end: "-",
          },
        }),
        (e.current_list = {}),
        (e.filter_app = ""),
        (e.filter_input = ""),
        (e.filter_count = 40),
        (e.render = []),
        (e.data = []),
        (e.data_filtred = [1, 2]),
        (e.reward = {
          weekly: [
            "10.000$",
            "5.000$",
            "3.000$",
            "2.000$",
            "IPad 3 air",
            "1.000$ bonus",
            "1.000$ bonus",
            "1.000$ bonus",
            "500$ bonus",
            "500$ bonus",
            "500$ bonus",
            "500$ bonus",
            "500$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
          ],
          weekend: [
            "5000 $",
            "3000 $",
            "2000 $",
            "1000 $ bonus",
            "1000 $ bonus",
            "500 $ bonus",
            "500 $ bonus",
            "500 $ bonus",
            "500 $ bonus",
            "500 $ bonus",
          ],
        }),
        (e.applyFilter = function () {
          setTimeout(function () {
            $("html, body").animate(
              {
                scrollTop: $(".c-leaderboard-wrap").offset().top,
              },
              "slow"
            );
          }, 300),
            (e.filter_app = angular.copy(e.filter_input)),
            (e.data_filtred = o("filter")(e.render, e.filter_app));
        }),
        (e.getCurrentReward = function (a) {
          return e.reward[e.current_list.type][a]
            ? e.reward[e.current_list.type][a]
            : "";
        }),
        (e.loadList = function () {
          a.post("/api/tourney/last")
            .success(function (a) {
              a[0] &&
                ((e.list.first = a[0]),
                (e.current_list = e.list.first),
                e.loadData(e.list.first, !0)),
                a[1] && ((e.list.last = a[1]), e.loadData(e.list.last)),
                (e.is_loading = !1);
            })
            .error(function (a) {
              e.showAmaran("Some errors...");
            });
        }),
        (e.fetchReward = function (a) {
          return (
            $.each(a, function (t, n) {
              a[t].reward = e.getCurrentReward(t);
            }),
            a
          );
        }),
        (e.loadData = function (t, n) {
          a.post("/api/tourney/get", {
            id: t.id,
          })
            .success(function (a) {
              (e.data[t.id] = e.fetchReward(a)),
                n &&
                  ((e.current_list = t),
                  (e.render = e.fetchReward(a)),
                  (e.filter_count = "weekly" == t.type ? 40 : 10));
            })
            .error(function (a) {
              e.showAmaran("Some errors...");
            });
        }),
        (e.showTab = function (a) {
          (e.tab = a),
            (e.current_list = e.list[a]),
            (e.filter_count = "weekly" == e.current_list.type ? 40 : 10),
            e.current_list.id
              ? (e.render = e.fetchReward(e.data[e.current_list.id]))
              : (e.render = []);
        }),
        (e.showAmaran = function (e, a) {
          var t = a ? "27ae60" : "e74c3c";
          $.amaran({
            theme: "colorful",
            delay: 5e3,
            content: {
              bgcolor: "#" + t,
              color: "#fff",
              message: e,
            },
            position: "bottom left",
            outEffect: "slideBottom",
          });
        }),
        e.loadList();
    };
    (e.$inject = ["$scope", "$http", "$timeout", "$rootScope", "$filter"]),
      angular.module("app").controller("TourneyInternal", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r) {
      (e.tab = "first"),
        (e.is_loading = !0),
        (e.current_list = {
          date_start: "-",
          date_end: "-",
        }),
        (e.render = []),
        (e.reward = {
          weekly: [
            "10.000$",
            "5.000$",
            "3.000$",
            "2.000$",
            "IPad 3 air",
            "1.000$ bonus",
            "1.000$ bonus",
            "1.000$ bonus",
            "500$ bonus",
            "500$ bonus",
            "500$ bonus",
            "500$ bonus",
            "500$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "300$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
            "100$ bonus",
          ],
          weekend: [
            "5000 $",
            "3000 $",
            "2000 $",
            "1000 $ bonus",
            "1000 $ bonus",
            "500 $ bonus",
            "500 $ bonus",
            "500 $ bonus",
            "500 $ bonus",
            "500 $ bonus",
          ],
        }),
        (e.alg = 10),
        (e.getCurrentReward = function (a) {
          return e.reward[e.current_list.type][a]
            ? e.reward[e.current_list.type][a]
            : "";
        }),
        (e.loadWeekend = function () {
          a.post("/api/tourney/current")
            .success(function (a) {
              console.log(a),
                (e.current_list = a.list),
                (e.all = "weekly" === a.list.type ? 10 : 20),
                (e.render = e.fetchReward(a.data)),
                (e.is_loading = !1),
                setTimeout(function () {
                  n.$broadcast("modal:resize", {});
                }, 300);
            })
            .error(function (a) {
              e.showAmaran("Some errors...");
            });
        }),
        (e.fetchReward = function (a) {
          return (
            $.each(a, function (t, n) {
              a[t].reward = e.getCurrentReward(t);
            }),
            a
          );
        }),
        (e.showMore = function () {
          i.CloseAll(),
            r.go("show", {
              page: "contest",
            });
        }),
        (e.showAmaran = function (e, a) {
          var t = a ? "27ae60" : "e74c3c";
          $.amaran({
            theme: "colorful",
            delay: 5e3,
            content: {
              bgcolor: "#" + t,
              color: "#fff",
              message: e,
            },
            position: "bottom left",
            outEffect: "slideBottom",
          });
        }),
        e.loadWeekend(),
        console.log("init week");
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "$filter",
      "ModalService",
      "$state",
    ]),
      angular.module("app").controller("TourneyWeekend", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i) {
      (e.platform_url = n.platform_URL + n.actions.trade),
        (e.chat_url = User.get("Chat.current")),
        (e.info = User),
        (e.is_block_platform = !1),
        (e.is_block_verify = !1),
        (e.is_block_card = !1),
        (e.weekend_enable = !1),
        (e.chat = {
          open: !0,
          pin: !1,
          max: !1,
        }),
        (e.checkIsWeekendEnable = function () {
          e.weekend_enable = e.isWeekend();
        }),
        (e.isWeekend = function () {
          var e = parseInt(Cc.get("DAY")),
            a = parseInt(Cc.get("HOUR"));
          return (5 == e && a >= 21) || (0 == e && a < 21) || e > 5;
        }),
        (e.showWeekend = function () {
          i.showFancy("/api/ag/tourney_weekend", {
            clickSlide: !0,
            clickOutside: "close",
            closeClickOutside: !0,
            mobile: {
              clickOutside: "close",
            },
          });
        }),
        (e.update_last = ""),
        (e.TradingBalancePlatformUpdate = function (t, n) {
          if (n.available) {
            var o = n.available,
              i = moment().format("h:mm");
            if (i === e.update_last) return;
            (e.update_last = i),
              a({
                method: "POST",
                url: "/api/chat/balance",
                data: {
                  balance: o,
                  all: n,
                },
              }).success(function (e) {});
          }
        }),
        (e.cc = 0),
        (e.clickBlock = function () {
          e.cc < 10 &&
            ($(".ui.modal-dynamic.popup393").remove(),
            i.showDynamic(
              "/api/ag/modal_sign",
              {
                theme: "popup393",
                close: "bdw-close",
              },
              {
                closable: !1,
              }
            ),
            e.cc++);
        }),
        (e.isUserDepositor = function () {
          var a = !1;
          return (
            e.info.balances &&
              _.each(e.info.balances, function (e, t) {
                e.depositsTotal > 0 && (a = !0);
              }),
            !!User.get("last_count") || a
          );
        }),
        (e.unlockTrading = function () {
          (e.is_block_platform = !1), e.$digest(), User.set("sign", "up");
        }),
        (e.isBlock = function () {
          return (
            "Full" !== User.get("verification") &&
            e.isUserDepositor() &&
            !User.get("sign")
          );
        }),
        (e.IsTradingBlock = function () {
          (e.is_block_platform = e.isBlock()),
            e.is_block_platform &&
              ($(".ui.modal-dynamic.popup393").remove(),
              i.showDynamic(
                "/api/ag/modal_sign",
                {
                  theme: "popup393",
                  close: "bdw-close",
                },
                {
                  closable: !1,
                }
              ));
        }),
        (e.TradingResizeInit = function () {}),
        (e.InitDragChat = function () {}),
        (e.CloseChat = function () {
          (e.chat.open = !1),
            $(".chat-platform-wrap").addClass("closed"),
            $(".chat-platform-wrap .theme-wrap").css("width", "100%");
        }),
        (e.OpenChat = function () {
          $(".chat-platform-wrap").removeClass("closed"),
            $(".chat-platform-wrap .theme-wrap").css("width", "");
        }),
        (e.MaxChat = function () {
          $(".min-max").addClass("max-active"),
            $(".chat-platform-wrap")
              .removeClass("minimized")
              .addClass("maximized"),
            $("#trading-chat").css("height", e.GetMaxChatHeight() + "px");
        }),
        (e.MinChat = function () {
          $(".min-max").removeClass("max-active"),
            $(".chat-platform-wrap")
              .removeClass("maximized")
              .addClass("minimized"),
            $("#trading-chat").css("height", "582px");
        }),
        (e.ChangeMax = function () {
          e.chat.max
            ? ((e.chat.max = !e.chat.max), e.MinChat())
            : ((e.chat.max = !e.chat.max), e.MaxChat());
        }),
        (e.GetMaxChatHeight = function () {
          var e = ($(document).width() / 100) * 73;
          return (e / 16) * 9;
        }),
        (e.triggerLastHost = function () {
          var e = User.get("userId") + "host";
          localStorage.getItem(e) ||
            setTimeout(function () {
              $(".video-chat-iframe").length > 0 &&
                (a.post("/api/triggers/last_host"),
                localStorage.setItem(e, "yes"));
            }, 4e3);
        }),
        $(window).resize(function () {
          $(".maximized").length > 0 &&
            $("#trading-chat").css("height", e.GetMaxChatHeight() + "px");
        }),
        e.TradingResizeInit(),
        e.InitDragChat(),
        e.MinChat(),
        e.IsTradingBlock(),
        e.triggerLastHost(),
        e.$on("sign:upload:success", e.unlockTrading),
        o.$on("platform:balance", e.TradingBalancePlatformUpdate);
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "FPlatform",
      "$rootScope",
      "ModalService",
    ]),
      angular.module("app").controller("Trading", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.hash = ""),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.is_vload = !1),
        (e.info = User),
        (e.lang = Lang),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          "su" !== e.status &&
            "ex" !== e.status &&
            a({
              method: "POST",
              url: "/api/usdt/check",
              data: {
                guid: $(".guid").html(),
              },
            })
              .success(function (a) {
                (e.status = a.status), (e.hash = a.hash);
              })
              .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          o.run("btc", e.dec, e.callback);
        }, 300),
        (e.goToBlckchain = function () {
          var a = "https://live.blockcypher.com/btc/tx/" + e.hash,
            t = window.open(a, "_blank");
          t.focus();
        }),
        e.getStatus(),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("USDTinvoice", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, i, r) {
      e.body = Lang.get("validate_transcation.body").format(
        User.get("firstName")
      );
      var s = User.get("tr_attemps");
      (e.btn_disabled = !1),
        (e.is_max_try = !!s && parseInt(s) >= 5),
        (e.tr_value = ""),
        (e.is_error = !1),
        (e.error = ""),
        (e.sendData = function () {
          (e.btn_disabled = !0),
            a({
              method: "POST",
              url: "/api/fraud/attemps",
              data: {
                value: e.tr_value,
              },
            })
              .success(function (a) {
                if ("false" == a["return"]) {
                  if (a.attemps <= 0)
                    return (
                      (e.is_max_try = !0),
                      (e.is_error = !1),
                      void (e.btn_disabled = !1)
                    );
                  (e.tr_value = ""),
                    (e.is_error = !0),
                    (e.error = Lang.get("validate_transcation.error").format(
                      a.attemps
                    ));
                } else User.set("tr_validate", "no"), User.set("tr_success", "yes"), r.go("home");
                e.btn_disabled = !1;
              })
              .error(function (a, t, n, o) {
                e.showAmaran("Some errors, please try latter."),
                  (e.btn_disabled = !1);
              });
        }),
        (e.init = function () {
          User.get("tr_success") && r.go("home");
        }),
        (e.showAmaran = function (e, a) {
          var t = a ? "27ae60" : "e74c3c";
          $.amaran({
            theme: "colorful",
            delay: 5e3,
            content: {
              bgcolor: "#" + t,
              color: "#fff",
              message: e,
            },
            position: "bottom left",
            outEffect: "slideBottom",
          });
        }),
        e.init();
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "Store",
      "$location",
      "$state",
    ]),
      angular.module("app").controller("ValidateTR", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o, r) {
      var s = ["USD", "RUB", "GBP", "EUR"];
      (e.info = User),
        (e.CurrentProcessor = "BTC"),
        (e.wallet = ""),
        (e.amount = 0),
        (e.dig = $.inArray(User.get("currency"), s) == -1 ? 5 : 2),
        (e.disabled = !1),
        (e.loading = !1),
        (e.server = {}),
        (e.error = ""),
        (e.success = ""),
        (e.have_btn = ""),
        (e.can = "Cancel"),
        (e.current_turnover = 0),
        (e.need_turnover = 0),
        (e.bitcoin_rates = {}),
        (e.balance = "loading..."),
        (e.tab_current = "1"),
        (e.wdm = "Credit Card"),
        (e.exchange = {
          BTC: 0,
          ETH: 0,
          LTC: 0,
          DASH: 0,
          BCH: 0,
          XRP: 0,
          ZEC: 0,
          XMR: 0,
          ETC: 0,
          NEO: 0,
          USD: 0,
          EUR: 0,
        }),
        (e.currency = ""),
        (e.alt = "BCH"),
        (e.show_form = !1),
        (e.is_fixed = !1),
        (e.pending = []),
        (e.pending_loading = !1),
        (e.current_amount = 0),
        (e.current_currency = "USD"),
        (e.loadPendings = function () {
          a.post("/api/us/pending", {})
            .success(function (a) {
              (e.pending = a.hits), (e.pending_loading = e.pending.length > 0);
            })
            .error(function () {});
        }),
        (e.rejectPending = function (t) {
          o.showConfirm(
            "Cancel",
            "Do you want to cancel this withdrawal?",
            function () {
              a
                .post("/api/us/reject", {
                  id: t.transactionId,
                })
                .success(function (a) {
                  "true" === a["return"]
                    ? o.displayToastAmaran("success", "Success")
                    : o.displayToastAmaran("error", a.message),
                    e.loadPendings();
                })
                .error(function () {
                  o.displayToastAmaran("error", "Sorry some errors");
                }),
                o.CloseAll();
            },
            !1,
            {
              ok: "Yes",
              cancel: "No",
              cancel_class: "",
            }
          );
        }),
        (e.isFixed = function (a) {
          a && (e.fixedTab("1"), e.getExchangeBalances()), (e.is_fixed = a);
        }),
        (e.fixedTab = function (a) {
          $(".crypto-tabs .item.active").removeClass("active"),
            $('.crypto-tabs .item[data-tab="tab' + a + '"]').addClass("active");
          var t = {
            1: "Bitcoin",
            2: "Litecoin",
            3: "Ethereum",
            4: "Dash",
            5: "Bitcoin_Cash",
            6: "Ripple",
            7: "Zcash",
            8: "Monero",
            9: "EUR",
            10: "USD",
          };
          (e.CurrentProcessor = t[a]),
            (e.tab_current = a),
            "EUR" === t[a] || "USD" === t[a]
              ? ((e.currency = t[a]), e.changeMethodExchange())
              : (e.currency = "none");
        }),
        (e.showGoogle = function (e) {
          (r.qr = ""), (r.type = e.type), o.showFancy("/api/ag/modal_google");
        }),
        (e.changeMethodExchange = function () {
          console.log(e.wdm), (e.CurrentProcessor = e.wdm);
        }),
        (e.agree = function () {
          (e.show_form = !e.show_form),
            e.show_form ? (e.have_btn = e.can) : e.haveBtn();
        }),
        (e.wdTrigger = function () {
          a.post("/api/triggers/wd", {
            method: e.CurrentProcessor,
          }),
            User.set("wd_methods", "yes");
        }),
        (e.agreeReset = function () {
          e.show_form = !1;
        }),
        (e.haveBtn = function () {
          e.have_btn = Lang.get("wd.add").format(e.CurrentProcessor);
        }),
        (e.ap = function (a) {
          (e.CurrentProcessor = a), e.saveStateButton(a);
        }),
        (e.saveStateButton = function (a) {
          var t = User.get("wd_methods")
            ? User.get("wd_methods").split(",")
            : [];
          $.inArray(a, t) == -1
            ? (e.agreeReset(), e.haveBtn())
            : ((e.have_btn = e.can), (e.show_form = !0));
        }),
        e.saveStateButton(e.CurrentProcessor),
        (e.finalSend = function (t) {
          a.post("/api/triggers/wdr", {
            method: e.CurrentProcessor,
          }),
            a
              .post("/api/withdrawal/final", {
                is_bonus: t ? 1 : 0,
                is_fixed: e.is_fixed,
                proc: e.CurrentProcessor,
                amount: e.amount,
                currency: e.is_fixed ? e.currency : e.current_currency,
                wallet: e.wallet,
              })
              .success(function (a) {
                if ("true" == a["return"]) {
                  if (a.is_bonus) {
                    var t = a.message;
                    (e.error = ""),
                      setTimeout(function () {
                        n.$broadcast("user:update");
                      }, 1e3),
                      o.displayAlert(
                        "Bonus",
                        '<span class="ui 1b71fa inverted header">' +
                          t +
                          "</span>"
                      );
                  } else (e.success = "true"), (e.error = "");
                  e.endLoad(), e.loadPendings();
                } else if (a.factor)
                  switch (a.factor) {
                    case "google":
                      e.showGoogle(a);
                  }
                else
                  (e.success = ""),
                    (e.error = a.message
                      ? a.message
                      : Lang.get("auth.server_error"));
                (e.loading = !1), n.$broadcast("notifications:update", a);
              })
              .error(function () {
                e.endLoad(!0), (e.error = Lang.get("auth.server_error"));
              });
        }),
        (e.send = function () {
          var t = parseFloat(e.amount);
          if (isNaN(t) || t <= 0)
            return void o.displayToastNew("error", "Incorrect amount!");
          var n = ["Credit Card", "Ok Pay", "Perfect Money"];
          if ("" === e.wallet && $.inArray(e.CurrentProcessor, n) === -1)
            return void o.displayToastNew(
              "error",
              "Please enter Wallet address!"
            );
          if (t > 0) {
            e.wdTrigger();
            angular.copy(e.amount), angular.copy(e.CurrentProcessor);
            if (((e.loading = !0), e.is_fixed)) return void e.finalSend();
            a.post("/api/withdrawal", {
              amount: t,
              method: e.CurrentProcessor,
              wallet: e.wallet,
              fixed: e.is_fixed,
              alt: e.alt,
              currency: e.current_currency,
            })
              .success(function (a) {
                if (a.need_auth && "true" === a.need_auth)
                  return void (location.href = "/api/logout");
                if ("true" === a["return"]) {
                  var t = ["USD", "RUB", "EUR", "GBP"],
                    n = $.inArray(e.current_currency, t) !== -1 ? 0 : 5;
                  switch (
                    ((e.current_turnover = a.current_turnover
                      ? a.current_turnover.toFixed(n)
                      : 0),
                    (e.need_turnover = a.need_turnover
                      ? a.need_turnover.toFixed(n)
                      : 0),
                    a["case"])
                  ) {
                    case "one":
                      e.showCaseOne();
                      break;
                    case "two":
                      e.showCaseTwo();
                      break;
                    case "three":
                      e.showCaseThree();
                      break;
                    case "four":
                      e.showCaseFour();
                      break;
                    case "five":
                      e.finalSend(!1);
                      break;
                    case "six":
                      e.showCaseSix();
                      break;
                    case "verify":
                      e.showNeedVerify();
                  }
                  e.loading = !1;
                } else (e.success = ""), (e.error = a.error), $(".message.em").transition("shake"), e.endLoad(!0);
              })
              .error(function (a) {
                e.endLoad(),
                  (e.error = a.message
                    ? a.message
                    : Lang.get("auth.server_error")),
                  $(".message.em").transition("shake");
              });
          }
        }),
        (window.testWd = function (a) {
          switch (a) {
            case "one":
              e.showCaseOne();
              break;
            case "two":
              e.showCaseTwo();
              break;
            case "three":
              e.showCaseThree();
              break;
            case "four":
              e.showCaseFour();
              break;
            case "six":
              e.showCaseSix();
          }
        }),
        (e.endLoad = function () {
          (e.amount = 0), (e.wallet = ""), (e.loading = !1);
        }),
        $(".tabular .item").tab({
          alwaysRefresh: !0,
          cache: !1,
          onVisible: function (e) {
            $(".tabular .item.active").removeClass("active"),
              $('.item[data-tab="' + e + '"]').addClass("active");
          },
        }),
        $(".popup-youtube").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: !1,
          fixedContentPos: !1,
        }),
        setTimeout(function () {
          $(".ui.dropdown").dropdown();
        }, 100),
        (e.closeModals = function () {
          (e.amount = 0), $.fancybox.close(), $(".ui.modal").modal("hide all");
        }),
        (e["final"] = function (a) {
          var t = a;
          $(".ui.modal").modal("hide all"), $.fancybox.close(), e.finalSend(t);
        }),
        (e.showCase = function (e) {
          $.fancybox.open(
            [
              {
                src: "#wd-" + e,
                type: "inline",
                opts: {
                  clickSlide: !1,
                  clickOutside: !1,
                  autoFocus: !1,
                },
              },
            ],
            {
              loop: !1,
            }
          );
        }),
        (e.showCaseOne = function () {
          e.showCase("one");
        }),
        (e.showCaseTwo = function () {
          e.showCase("two");
        }),
        (e.showCaseThree = function () {
          e.showCase("three");
        }),
        (e.showCaseFour = function () {
          e.showCase("four");
        }),
        (e.showCaseSix = function () {
          e.showCase("six");
        }),
        (e.showNeedVerify = function () {
          o.showDynamic(
            "/api/ag/modal_need_verify",
            {
              theme: "popup393-confirmation",
              close: "bdw-close",
            },
            {
              onHide: function () {},
            }
          );
        }),
        (e.getRates = function () {
          a({
            method: "POST",
            url: "/api/bitcoin/currency",
          })
            .success(function (a) {
              e.bitcoin_rates = a;
            })
            .error(function (e) {});
        }),
        (e.getExchangeBalances = function () {
          a.post("/api/triggers/exchange")
            .success(function (a) {
              $.each(a, function (a, t) {
                e.exchange[a] = t;
              });
            })
            .error(function (e) {});
        }),
        (e.ChangeFix = function (a) {
          e.isFixed(a);
        }),
        (e.initDropDown = function () {
          setTimeout(function () {
            $(".amount-dropdown").dropdown(), e.initCurrentAccount();
          }, 200);
        }),
        (e.addAccount = function () {
          o.showDynamic("/api/ag/modal_add_account", {
            theme: "add_account mini",
          }),
            $(".amount-dropdown").dropdown("hide");
        }),
        (e.addAccountWallet = function (a, t) {
          console.log(t);
          var o = User.balances;
          (t.data.amount = 0),
            (t.data.netAmount = 0),
            o.push(t.data),
            User.set("balances", o),
            (e.info = User),
            setTimeout(function () {
              $(".amount-dropdown ." + t.data.accountId).click();
            }, 600),
            setTimeout(function () {
              n.$broadcast("user:update");
            }, 4e3);
        }),
        (e.current_balance = {}),
        (e.initBalance = !1),
        (e.initCurrentAccount = function () {
          var a = User.get("balances");
          if (a && _.isArray(a)) {
            if (1 !== a.length || User.get("current_accountId")) {
              var t = _.findWhere(a, {
                accountId: User.get("current_accountId"),
              });
              e.current_balance = t
                ? t
                : {
                    amount: "Exchange account",
                    type: "exchange",
                  };
            } else
              (e.current_balance = _.first(a)), e.setAccountId(i.accountId);
            e.current_balance.accountId
              ? ($(".amount-dropdown ." + e.current_balance.accountId).click(),
                (e.initBalance = !0))
              : $(".amount-dropdown .exchange-item").click();
          }
        }),
        (e.changeCurrentAccount = function (a) {
          if ((e.ChangeFix(!1), e.current_balance.accountId !== a.accountId)) {
            var t = User.get("balances");
            (e.current_balance = _.findWhere(t, {
              accountId: a.accountId,
            })),
              e.setAccountId(a.accountId);
          }
        }),
        (e.changeAccountExchange = function () {
          e.isFixed(!0), e.setAccountIdExchange();
        }),
        (e.setAccountId = function (t) {
          a({
            method: "POST",
            url: "/api/us/set_account",
            data: {
              account: t,
            },
          })
            .success(function (a) {
              User.set("current_accountId", t), e.currentBalanceAvaliable();
            })
            .error(function (e) {
              o.displayToastAmaran(
                "error",
                "Some errors, please try again. Cant set account id."
              );
            });
        }),
        (e.setAccountIdExchange = function () {
          a({
            method: "POST",
            url: "/api/us/set_account_exchange",
            data: {},
          })
            .success(function (e) {})
            .error(function (e) {
              o.displayToastAmaran(
                "error",
                "Some errors, please try again. Cant set account id."
              );
            });
        }),
        (e.updateInfo = function () {
          (e.info = angular.copy(User)),
            setTimeout(function () {
              $(".amount-dropdown ." + e.current_balance.accountId).click();
            }, 300),
            e.currentBalanceAvaliable();
        }),
        (e.currentBalanceAvaliable = function () {
          var a = User.get("balances"),
            t = _.findWhere(a, {
              accountId: User.get("current_accountId"),
            });
          t &&
            ((e.current_amount = t.amount), (e.current_currency = t.currency));
        }),
        e.loadPendings(),
        e.initDropDown(),
        e.currentBalanceAvaliable(),
        e.$on("user:update:success", e.updateInfo),
        $(".top-info").hide(),
        (e.testModals = function () {
          (window.testWD1 = function () {
            e.showCaseOne();
          }),
            (window.testWD2 = function () {
              e.showCaseTwo();
            }),
            (window.testWD3 = function () {
              e.showCaseThree();
            }),
            (window.testWD4 = function () {
              e.showCaseFour();
            });
        }),
        (e.newTabsInit = function () {
          $(".tabs li a").on("click", function (e) {
            e.preventDefault();
            var a = $(this).closest(".tab-wrap").find(".box-tab-cont")[0];
            $(a).children().addClass("hide"),
              $(this).parent().siblings().removeClass("active");
            var t = $(this).attr("href");
            return (
              $(t).removeClass("hide"), $(this).parent().addClass("active"), !1
            );
          });
        }),
        (e.factors = function () {
          e.finalSend(!1);
        }),
        e.newTabsInit(),
        e.testModals(),
        e.$on("google:success:factors", e.factors),
        n.$broadcast("user:update", {});
    };
    (e.$inject = [
      "$scope",
      "$http",
      "$timeout",
      "$rootScope",
      "ModalService",
      "Store",
    ]),
      angular.module("app").controller("Withdrawal", e);
  })(window),
  (function () {
    "use strict";
    var e = function (e, a, t, n, o) {
      (e.dec = 3600),
        (e.guid = ""),
        (e.count = {
          hours: 0,
          minutes: "00",
          seconds: "00",
        }),
        (e.hash = ""),
        (e.status = "wt"),
        (e.count_show = !0),
        (e.copyAddress = function () {
          e.copyToClipboard(".eth-area")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyAmount = function () {
          e.copyToClipboard(".eth-amount")
            ? n.displayToastAmaran("success", "Amount copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyText = function () {
          e.copyToClipboard(".copy-text")
            ? n.displayToastAmaran("success", "Address copied to clipboard")
            : n.displayToastAmaran("error", "Unable to copy!");
        }),
        (e.copyToClipboard = function (e) {
          var a = "string" == typeof e ? document.querySelector(e) : e;
          if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            var t = a.contentEditable,
              n = a.readOnly;
            (a.contentEditable = !0), (a.readOnly = !0);
            var o = document.createRange();
            o.selectNodeContents(a);
            var i = window.getSelection();
            i.removeAllRanges(),
              i.addRange(o),
              a.setSelectionRange(0, 999999),
              (a.contentEditable = t),
              (a.readOnly = n);
          } else a.select();
          return document.execCommand("copy");
        }),
        (e.cd_tick = function (a, t) {
          e.count = t;
        }),
        (e.getStatus = function () {
          "su" != e.status &&
            "ex" != e.status &&
            a({
              method: "POST",
              url: "/api/zcash/check",
              data: {
                guid: $(".guid").html(),
              },
            })
              .success(function (a) {
                (e.status = a.status), (e.hash = a.hash);
              })
              .error(function (e) {});
        }),
        setInterval(function () {
          e.getStatus();
        }, 6e4),
        (e.callback = function () {
          e.getStatus();
        }),
        setTimeout(function () {
          o.run("btc", e.dec, e.callback);
        }, 300),
        (e.goToBlckchain = function () {
          var a = "https://explorer.zcha.in/transactions/" + e.hash,
            t = window.open(a, "_blank");
          t.focus();
        }),
        e.getStatus(),
        e.$on("coundown:tick", e.cd_tick);
    };
    (e.$inject = ["$scope", "$http", "$timeout", "ModalService", "CountDown"]),
      angular.module("app").controller("ZCASHinvoice", e);
  })(window),
  (function () {
    "use strict";

    function e(e) {
      var a = e.attr("data-increment"),
        t = 0 | e.text().replace(/\s/g, "");
      if (a && t)
        for (var n = (t / a) | 0, o = 1; o < n + 1; o++)
          setTimeout(
            (function (o) {
              return function () {
                e.text(o * a), o > n - 1 && e.text(t);
              };
            })(o),
            50 * o
          );
    }

    function a(e, a, t, n) {
      e.hasClass("from-left")
        ? e.delay(a * t).animate(
            {
              opacity: 1,
              left: 0,
            },
            n
          )
        : e.hasClass("from-right")
        ? e.delay(a * t).animate(
            {
              opacity: 1,
              right: 0,
            },
            n
          )
        : e.hasClass("from-down")
        ? e.delay(a * t).animate(
            {
              opacity: 1,
              bottom: 0,
            },
            n
          )
        : e.delay(a * t).animate(
            {
              opacity: 1,
            },
            n
          );
    }
    var t = $("[data-local]");
    setTimeout(function () {
      if (
        t.length > 0 &&
        ($.each(t, function (e, a) {
          var t = $(a).data("local"),
            n = getNested(Cc, t);
          n && $(a).html(n);
        }),
        $.fn.appear)
      ) {
        var n = 800,
          o = 100;
        $(".fade-in").css({
          opacity: 0,
        });
        $(".fade-in.from-left").css({
          position: "relative",
          left: "-100px",
        }),
          $(".fade-in.from-right").css({
            position: "relative",
            right: "-100px",
          }),
          $(".fade-in.from-down").css({
            position: "relative",
            bottom: "-100px",
          }),
          $(".fade-in, .js-count-animate").each(function (t) {
            var i = $(this);
            i.appear(
              function () {
                $(this).hasClass("js-count-animate")
                  ? e($(this))
                  : a($(this), t, o, n);
              },
              {
                accX: 0,
                accY: 0,
              }
            );
          });
      }
    }, 100),
      $("[data-md]").length &&
        setTimeout(function () {
          var e = 10,
            a = Cc.get("INPUT_LOCAL.affusr"),
            t = Cc.get("INPUT_LOCAL.affusr"),
            n = Settings.get("mdps.ALL"),
            o = Settings.get("mdps.USA"),
            i = Settings.get("mdps.GEO"),
            r = Settings.get("mdps.NO_EU_US"),
            s = Settings.get("mdps.OCODE"),
            l = Settings.get("mdps.COUNTRY");
          if (
            (Settings.get("mdps.DEFAULT") &&
              (e = parseInt(Settings.get("mdps.DEFAULT"))),
            l &&
              $.each(l, function (a, t) {
                _.each(t, function (t, n) {
                  Cc.get("GEO") === t && (e = parseInt(a));
                });
              }),
            i)
          )
            try {
              $.each(i, function (t, n) {
                var o = Cc.get("GEO") === t;
                o &&
                  $.each(n, function (t, n) {
                    $.inArray(a, n) !== -1 && (e = parseInt(t));
                  });
              });
            } catch (c) {
              console.log(c);
            }
          n &&
            $.each(n, function (t, n) {
              $.inArray(a, n) !== -1 && (e = parseInt(t));
            }),
            r &&
              $.each(r, function (t, n) {
                $.inArray(a, n) === -1 ||
                  is_usa_ca ||
                  is_eu ||
                  (e = parseInt(t));
              }),
            o &&
              $.each(o, function (t, n) {
                $.inArray(a, n) !== -1 && is_usa_ca && (e = parseInt(t));
              }),
            s &&
              $.each(s, function (a, n) {
                $.inArray(t, n) !== -1 && (e = parseInt(a));
              }),
            $("[data-md]").html(e);
        }, 300);
  })(window),
  (function () {
    "use strict";
  })(window),
  (function (e) {
    (e.fn.appear = function (a, t) {
      var n = e.extend(
        {
          data: void 0,
          one: !0,
          accX: 0,
          accY: 0,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        if (((t.appeared = !1), !a)) return void t.trigger("appear", n.data);
        var o = e(window),
          i = function () {
            if (!t.is(":visible")) return void (t.appeared = !1);
            var e = o.scrollLeft(),
              a = o.scrollTop(),
              i = t.offset(),
              r = i.left,
              s = i.top,
              l = n.accX,
              c = n.accY,
              d = t.height(),
              u = o.height(),
              p = t.width(),
              m = o.width();
            s + d + c >= a && s <= a + u + c && r + p + l >= e && r <= e + m + l
              ? t.appeared || t.trigger("appear", n.data)
              : (t.appeared = !1);
          },
          r = function () {
            if (((t.appeared = !0), n.one)) {
              o.unbind("scroll", i);
              var r = e.inArray(i, e.fn.appear.checks);
              r >= 0 && e.fn.appear.checks.splice(r, 1);
            }
            a.apply(this, arguments);
          };
        n.one ? t.one("appear", n.data, r) : t.bind("appear", n.data, r),
          o.scroll(i),
          e.fn.appear.checks.push(i),
          i();
      });
    }),
      e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function () {
          var a = e.fn.appear.checks.length;
          if (a > 0) for (; a--; ) e.fn.appear.checks[a]();
        },
        run: function () {
          e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout),
            (e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20));
        },
      }),
      e.each(
        [
          "append",
          "prepend",
          "after",
          "before",
          "attr",
          "removeAttr",
          "addClass",
          "removeClass",
          "toggleClass",
          "remove",
          "css",
          "show",
          "hide",
        ],
        function (a, t) {
          var n = e.fn[t];
          n &&
            (e.fn[t] = function () {
              var a = n.apply(this, arguments);
              return e.fn.appear.run(), a;
            });
        }
      );
  })(jQuery),
  (function () {
    "use strict";
    $(document).on("click", ".js-tab", function (e) {
      e.preventDefault(),
        $(this).addClass("active").siblings().removeClass("active");
      var a = $(this).data("tab");
      $(a).addClass("active").siblings(".js-pane").removeClass("active");
    }),
      $(document).on("click", ".js-toggle", function (e) {
        e.preventDefault();
        var a = $(this).parent();
        a.hasClass("opened")
          ? $(this).next(".js-toggle-target").slideUp()
          : $(this).next(".js-toggle-target").slideDown(),
          a.toggleClass("opened");
      });
  })(window),
  (function () {
    "use strict";
    $(function () {
      Cc.get("INPUT.mobileapp") && $(Cc.get("INPUT.mobileapp")).hide(),
        Cc.get("SESSION.is_mobile") && $(".top-nav,.footer").remove();
    });
  })(window),
  (function () {
    function e(e) {
      e.each(function () {
        $(this)
          .prop("Counter", $(this).data("start"))
          .animate(
            {
              Counter: $(this).data("finish"),
            },
            {
              duration: 2e3,
              easing: "swing",
              step: function (e, a) {
                $(this).text(Math.ceil(e));
              },
            }
          );
      });
    }

    function a() {
      $({
        Counter: 141,
      }).animate(
        {
          Counter: 0,
        },
        {
          duration: 5200,
          easing: "linear",
          step: function () {
            $(".main-circle-2").attr(
              "style",
              "stroke-dashoffset : " + Math.ceil(this.Counter)
            );
          },
        }
      );
    }

    function t(e) {
      for (var a = 0; a < accountPips.length; a++) {
        var t = $(accountPips[a]).data("value");
        e >= t
          ? $(accountPips[a]).prev().addClass("active")
          : $(accountPips[a]).prev().removeClass("active");
      }
    }

    function n(e) {
      e >= 500 && e < 1e3
        ? ($(".account-type__list").addClass("bronze"), (s = 1.2))
        : $(".account-type__list").removeClass("bronze"),
        e >= 1e3 && e < 3e3
          ? ((s = 1.5), $(".account-type__list").addClass("silver"))
          : $(".account-type__list").removeClass("silver"),
        e >= 3e3 && e <= 1e5
          ? ((s = 2), $(".account-type__list").addClass("gold"))
          : $(".account-type__list").removeClass("gold");
    }

    function o(e) {
      var a = $(".js-utils-input");
      $(a).val(e),
        $("#bonus-slide-redesing").html((e * s).toFixed(0)),
        $("#bonus-slide-value").html((100 * (s - 1)).toFixed(0));
    }
    if (
      ($(document).mouseup(function (e) {
        var a = $(".drop-open"),
          t = $(".header"),
          n = $(".main-platform-info");
        a.is(e.target) ||
          0 !== a.has(e.target).length ||
          a.removeClass("drop-open"),
          t.is(e.target) ||
            0 !== t.has(e.target).length ||
            $("body").removeClass("menu"),
          n.is(e.target) ||
            0 !== n.has(e.target).length ||
            n.removeClass("active");
      }),
      $(".drop").on("click", function () {
        return (
          $(this)
            .parent()
            .toggleClass("drop-open")
            .siblings()
            .removeClass("drop-open"),
          !1
        );
      }),
      $(".js-hamburger").on("click", function () {
        return $(this).closest("body").toggleClass("menu"), !1;
      }),
      $(document).on("click", ".mob-drop", function (e) {
        $(this).closest(".footer-top__item").toggleClass("active"),
          $(this)
            .closest(".footer-top__item")
            .siblings()
            .removeClass("active")
            .find(".footer-link-list")
            .stop(!0, !0)
            .slideUp(),
          $(this)
            .closest(".footer-top__item")
            .find(".footer-link-list")
            .stop(!0, !0)
            .slideToggle();
      }),
      $(".main-platform-btn").on("click", function () {
        return (
          $(this)
            .closest(".main-platform-info")
            .toggleClass("active")
            .siblings()
            .removeClass("active")
            .closest(".main-platform-box")
            .siblings()
            .find(".main-platform-info")
            .removeClass("active"),
          !1
        );
      }),
      $(".tabs li a").on("click", function () {
        var e = $(this).closest(".tab-wrap").find(".box-tab-cont")[0];
        $(e).children().addClass("hide"),
          $(this).parent().siblings().removeClass("active");
        var a = $(this).attr("href");
        return (
          $(a).removeClass("hide"),
          $(this).parent().addClass("active"),
          $(".js-methods__slider").length &&
            $(".js-methods__slider").slick("refresh"),
          !1
        );
      }),
      $(".accordeon .accordeon-hide:not(.active)").hide(),
      $(".accordeon .accordeon-hide")
        .prev()
        .click(function (e) {
          e.preventDefault(),
            $(this)
              .parents(".accordeon")
              .find(".accordeon-hide")
              .not(this)
              .slideUp()
              .prev()
              .removeClass("active")
              .parent()
              .removeClass("active"),
            $(this)
              .next()
              .not(":visible")
              .slideDown()
              .prev()
              .addClass("active")
              .parent()
              .addClass("active");
        }),
      $(".account-promo-link").on("click", function () {
        return (
          $(this).closest(".account-promo-block").toggleClass("active"), !1
        );
      }),
      $(".choose-item").on("click", function () {
        var e = $(this).closest(".choose").find(".choose-cont .choose-item");
        return (
          $(this).closest(".choose").toggleClass("active"),
          $(e).html($(this).html()),
          !1
        );
      }),
      $(".wow").length)
    ) {
      var i = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: function (a) {
          a.classList.contains("section_main-count") && e($(".js-numbers"));
        },
      });
      i.init();
    }
    if ($(".parallax").length) {
      new Rellax(".p", {
        center: !0,
      });
    }
    var r = document.getElementById("js-nouislider");
    if (null !== r) {
      var s = 1.2,
        l = {
          min: [500],
          "33.33%": [1e3],
          "66.66%": [3e3],
          max: [1e5],
        };
      noUiSlider.create(r, {
        start: 1920,
        step: 10,
        connect: "lower",
        range: l,
        pips: {
          mode: "range",
        },
      }),
        (accountPips = $(".noUi-value.noUi-value-large")),
        r.noUiSlider.on("update.one", function (e, a, i, r, s, l) {
          var c = Math.floor(e[a]);
          t(c), n(c), o(c);
        }),
        $(".js-utils-input").on("change", function (e) {
          r.noUiSlider.set(this.value),
            $("#bonus-slide-redesing").html((this.value * s).toFixed(0)),
            $("#bonus-slide-value").html((100 * (s - 1)).toFixed(0));
        });
    }
    $(".main-slider__list").length &&
      ($(".main-slider__list").on("init afterChange", function (e, t, n, o) {
        $(".main-total-slide").html(t.slideCount),
          $(".main-current-slide").html(t.currentSlide + 1),
          a();
      }),
      $(".main-slider__list").slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: !0,
        autoplay: !0,
        autoplaySpeed: 5e3,
        pauseOnHover: !1,
        fade: !0,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              swipe: !1,
              arrows: !0,
              autoplay: !1,
            },
          },
        ],
      })),
      $(".js-methods__slider").length &&
        $(".js-methods__slider").slick({
          dots: !0,
          customPaging: function (e, a) {
            return '<span class="dot"></span>';
          },
          arrows: !1,
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: !0,
          autoplay: !0,
          autoplaySpeed: 5e3,
          fade: !0,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                swipe: !1,
                dots: !1,
                arrows: !0,
                autoplay: !1,
              },
            },
          ],
        }),
      $(".js-main-slider").length &&
        $(".js-main-slider").slick({
          dots: !0,
          customPaging: function (e, a) {
            return '<span class="dot"></span>';
          },
          arrows: !1,
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: !0,
          autoplaySpeed: 5e3,
        }),
      $(".js-slider-1280").length &&
        $(".js-slider-1280").slick({
          dots: !0,
          customPaging: function (e, a) {
            return '<span class="dot"></span>';
          },
          infinite: !1,
          arrows: !1,
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: !0,
          responsive: [
            {
              breakpoint: 1280,
              settings: "unslick",
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
        }),
      $(".js-slider-991").length &&
        $(".js-slider-991").slick({
          dots: !0,
          customPaging: function (e, a) {
            return '<span class="dot"></span>';
          },
          infinite: !1,
          arrows: !1,
          autoplay: !0,
          autoplaySpeed: 5e3,
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: !0,
          responsive: [
            {
              breakpoint: 991,
              settings: "unslick",
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
        }),
      $(".js-slider-767").length &&
        $(".js-slider-767").slick({
          dots: !0,
          customPaging: function (e, a) {
            return '<span class="dot"></span>';
          },
          infinite: !1,
          arrows: !1,
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: !0,
          responsive: [
            {
              breakpoint: 767,
              settings: "unslick",
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
        }),
      $(".js-styled").length && $(".js-styled").styler();
  })();
var handler = function () {
  var e = viewport().width;
  viewport().height;
  if ($(".js-tilt").length)
    var a = $(".js-tilt").tilt({
      maxTilt: 10,
    });
  if ($(".owl-carousel").length) var t = $(".owl-carousel");
  e > 1280 && $("body").hasClass("menu") && $("body").removeClass("menu"),
    e <= 1280 &&
      $(".js-slider-1280").length &&
      !$(".js-slider-1280").hasClass("slick-initialized") &&
      $(".js-slider-1280").slick("refresh"),
    e <= 991
      ? ($(".js-slider-991").length &&
          !$(".js-slider-991").hasClass("slick-initialized") &&
          $(".js-slider-991").slick("refresh"),
        $(".js-tilt").length && a.tilt.destroy.call(a),
        $(".footer-title").length &&
          $(".footer-title:not(.footer-title_soc)").addClass("mob-drop"),
        $(".owl-carousel").length &&
          t.owlCarousel({
            loop: !1,
            margin: 15,
            nav: !1,
            dots: !0,
            items: 1,
            responsive: {
              768: {
                items: 2,
              },
            },
          }))
      : ($(".js-tilt").length && a.tilt.reset.call(a),
        $(".footer-title").length &&
          $(".footer-title:not(.footer-title_soc)").removeClass("mob-drop"),
        $(".owl-carousel").length && t.trigger("destroy.owl.carousel")),
    e <= 767 &&
      $(".js-slider-767").length &&
      !$(".js-slider-767").hasClass("slick-initialized") &&
      $(".js-slider-767").slick("refresh");
};
$(window).bind("load", handler),
  $(window).bind("resize", handler),
  (function () {
    "use strict";
  })(window),
  (function () {
    "use strict";
  })(window),
  (function () {
    "use strict";
    var e = $("[data-slider]");
    if (e.length > 0) {
      var a = "nWrap",
        t = "nChildSlide";
      e.addClass(a), e.children().addClass(t);
      var n = $("." + t),
        o = n.length;
      e.css("width", 100 * o + "%"),
        e.css("transition", "transform 500ms ease"),
        n.css("width", 100 / o + "%");
      var i = 0,
        r = 5e3,
        s = function () {
          l();
        },
        l = function () {
          clearInterval(f),
            (i = i + 1 > o - 1 ? 0 : i + 1),
            u(i),
            m(),
            (f = setInterval(s, r));
        },
        c = function () {
          clearInterval(f),
            (i = i - 1 < 0 ? o - 1 : i - 1),
            u(i),
            m(),
            (f = setInterval(s, r));
        },
        d = function () {
          var a = "";
          $.each(n, function (e, t) {
            var n = e == i ? "current" : "";
            a +=
              '<div class="bx-pager-item"><a href="" data-slide-index="' +
              e +
              '" class="bx-pager-link ' +
              n +
              '">' +
              (e + 1) +
              "</a></div>";
          }),
            e.parent().prepend('<div class="bx-pager">' + a + "</div>"),
            $("[data-slide-index]").on("click", function () {
              var e = $(this).data("slide-index");
              p(e), u(e);
            });
        },
        u = function (a) {
          var t = (-1 * a * 100) / o;
          e.css(
            "transform",
            Modernizr.csstransforms3d
              ? "translate3d(" + t + "%,0,0)"
              : "translate(" + t + "%)"
          );
        },
        p = function (e) {
          clearInterval(f), (i = e), m(), (f = setInterval(s, r));
        },
        m = function () {
          $(".bx-pager-item a.current").removeClass("current"),
            $('[data-slide-index="' + i + '"]').addClass("current");
        };
      $("[data-slide-next]").on("click", function () {
        l();
      }),
        $("[data-slide-prev]").on("click", function () {
          c();
        }),
        e
          .parent()
          .css({
            opacity: 0,
            visibility: "visible",
          })
          .animate(
            {
              opacity: 1,
            },
            800
          ),
        e.parent().find("*").css({
          visibility: "visible",
        }),
        d();
      var f = setInterval(s, r);
    }
  })(window),
  (function () {
    "use strict";
    $(document).on("click", ".header-trading-cab .bn-sub a", function (e) {
      $(".b-top").click();
    });
  })(window),
  (function () {
    "use strict";
    $(function () {
      $("body").on("click", ".top-drop-in-css .menu .item a", function () {
        var e = $(this).parents(".menu");
        e.hide(),
          $(".pusher").click(),
          setTimeout(function () {
            e.removeAttr("style");
          }, 500);
      });
      var e = $("[data-local]");
      e.length > 0 &&
        $.each(e, function (e, a) {
          var t = $(a).data("local"),
            n = Cc.get(t);
          n && $(a).html(n);
        }),
        $("[data-company]").html(Settings.get("company")),
        $("[data-company-address]").html(Settings.get("company-address"));
    });
  })(window),
  (function () {
    "use strict";
    $(function () {
      try {
        $(".popup-youtube").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: !1,
          fixedContentPos: !1,
        });
      } catch (e) {
        console.log("popup-youtube error");
      }
    });
  })(window);
