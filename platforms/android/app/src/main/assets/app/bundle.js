require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-chart/vue");
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QponDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/QponDetail.vue");
/* harmony import */ var _QponList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/QponList.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1___default.a);


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onItemTap: function onItemTap(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("Product tapped: " + args.item.name);
      this.$navigateTo(_QponDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
        transition: {},
        props: {
          tappedQpon: args.item // tappedProduct: name in the child page

        }
      });
    },
    onButtonTap: function () {
      var _onButtonTap = _asyncToGenerator(function* () {
        var result = yield confirm({
          title: "Confirm to place order?",
          message: "Sending to httpbin.org",
          okButtonText: "Yes",
          cancelButtonText: "Cancel"
        });

        if (result) {
          var response = yield fetch("https://httpbin.org/post", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.inCart)
          });

          if (response.ok) {
            var data = yield response.json();
            this.figures = data.json;
          } else {
            console.log(response.status);
          }
        }
      });

      function onButtonTap() {
        return _onButtonTap.apply(this, arguments);
      }

      return onButtonTap;
    }(),
    onRangeTap: function onRangeTap(args) {
      console.log(args.item[0]);
      console.log(args.item[1]);
      var qponsInRange = this.qpons.filter(function (qpon) {
        return qpon.coins >= args.item[0] && qpon.coins <= args.item[1];
      });
      this.$navigateTo(_QponList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        transition: {},
        props: {
          qpons: qponsInRange
        }
      });
    },
    onMallTap: function onMallTap(args) {
      console.log(args.item.mall);
      var qponsInMall = this.qpons.filter(function (qpon) {
        return qpon.mall == args.item.mall;
      });
      this.$navigateTo(_QponList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        transition: {},
        props: {
          qpons: qponsInMall
        }
      });
    }
  },
  computed: {
    inCart: function inCart() {
      return this.products.filter(function (p) {
        return p.quantity > 0;
      });
    },
    total: function total() {
      var sum = 0;
      this.products.forEach(function (p) {
        sum += p.quantity * p.price;
      });
      return sum;
    }
  },

  mounted() {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.ladies = _this.products.filter(function (p) {
        return p.department == "Ladies";
      });
      _this.gents = _this.products.filter(function (p) {
        return p.department == "Gents";
      });
      var res = yield fetch(global.baseUrl);
      _this.qpons = yield res.json();
      _this.malls = global.mallLoc;
      console.log("qpons");
      console.log(_this.qpons);
    })();
  },

  data() {
    return {
      qpons: [],
      malls: [],
      ladies: [],
      gents: [],
      products: [{
        id: "1",
        department: "Gents",
        name: "Denim Men's Shirts",
        desc: "Passion, dedication, hard work and creativity",
        image: "https://cdn.stocksnap.io/img-thumbs/960w/GAVVVYCGXC.jpg",
        price: 450,
        quantity: 0
      }, {
        id: "2",
        department: "Ladies",
        name: "RUN Hoodies",
        desc: "Top-quality, instant-favorite sweatshirt",
        image: "https://cdn.stocksnap.io/img-thumbs/960w/UHAQDIYT6X.jpg",
        price: 600,
        quantity: 0
      }, {
        id: "3",
        department: "Gents",
        name: "Men's Lightweight Coat",
        desc: "Signature Buck appliqué",
        image: "https://cdn.stocksnap.io/img-thumbs/960w/PJY3Y7010M.jpg",
        price: 2500,
        quantity: 0
      }, {
        id: "4",
        department: "Ladies",
        name: "Story Story Tee",
        desc: "Ultra soft T-shirt",
        image: "https://cdn.stocksnap.io/img-thumbs/960w/GCJ7VU3PZ0.jpg",
        price: 340,
        quantity: 0
      }],
      figures: [],
      ranges: [[0, 299], [300, 599], [600, 899], [900, 1199], [1200, 9999]]
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MapPage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["qponMall"],

  // Instance property
  data() {
    return {};
  },

  mounted() {
    console.log(this.qponMall);
    console.log("abc");
    var mallObj = global.mallLoc.filter(function (m) {
      return m.mall = qponMall;
    });
    console.log("def");
    console.log(mallObj);
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QponDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _MapPage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MapPage.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tappedQpon"],
  // Instance property
  methods: {
    onRedeemTap() {
      var _this = this;

      return _asyncToGenerator(function* () {
        var result = yield confirm({
          title: "Are you sure",
          message: "To redeem this coupon?",
          okButtonText: "Yes",
          cancelButtonText: "No"
        });

        if (result) {
          var res = yield fetch(global.baseUrl + "/qpon/" + _this.tappedQpon.id, {
            method: "POST"
          });

          if (res.ok) {
            alert({
              title: "Redeem successfully",
              okButtonText: "OK"
            });
          } else if (res.status == 403) {
            alert({
              title: "Please login",
              okButtonText: "OK"
            });
          } else {
            alert({
              title: res.body,
              okButtonText: "OK"
            });
          }
        }
      })();
    },

    onAddressTap() {
      this.$navigateTo(_MapPage_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        props: {
          qponMall: this.tappedQpon.mall
        }
      });
    }

  },

  data() {
    return {
      textFieldValue: this.tappedQpon.quantity || ""
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QponList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QponDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QponDetail.vue");
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["qpons"],

  data() {
    return {
      qpons: []
    };
  },

  methods: {
    onItemTap: function onItemTap(args) {
      console.log("Item with index: " + args.index + " tapped");
      console.log("Product tapped: " + args.item.name);
      this.$navigateTo(_QponDetail__WEBPACK_IMPORTED_MODULE_0__["default"], {
        transition: {},
        props: {
          tappedQpon: args.item // tappedProduct: name in the child page

        }
      });
    }
  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-763db97b] {\n  vertical-align: center;\n  font-size: 20;\n  margin: 15;\n}\n.description-label[data-v-763db97b] {\n  margin-bottom: 15;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/HelloWorld.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Home" } }),
      _c(
        "StackLayout",
        [
          _c(
            "BottomNavigation",
            [
              _c(
                "TabStrip",
                [
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "Home" } }),
                      _c("Image", { attrs: { src: "res://home" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "Malls" } }),
                      _c("Image", { attrs: { src: "res://settings" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "Coins" } }),
                      _c("Image", { attrs: { src: "res://search" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      _c("Label", { attrs: { text: "User" } }),
                      _c("Image", { attrs: { src: "res://search" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.qpons, "+alias": "qpon" },
                      on: { itemTap: _vm.onItemTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var qpon = ref.qpon
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                {
                                  attrs: {
                                    orientation: "vertical",
                                    height: "350"
                                  }
                                },
                                [
                                  _c("Image", {
                                    attrs: {
                                      src: qpon.image,
                                      height: "300",
                                      stretch: "aspectFill"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "h1",
                                    attrs: { text: qpon.title }
                                  }),
                                  _c("Label", {
                                    staticClass: "body",
                                    attrs: { text: qpon.detail }
                                  }),
                                  _c(
                                    "Label",
                                    { staticClass: "h2" },
                                    [
                                      _c("Span", {
                                        attrs: { text: "Coins: " }
                                      }),
                                      _c("Span", {
                                        attrs: { text: qpon.coins }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.malls, "+alias": "mall" },
                      on: { itemTap: _vm.onMallTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var mall = ref.mall
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c("Label", { attrs: { text: mall.mall } })
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "ListView",
                    {
                      attrs: { items: _vm.ranges, "+alias": "range" },
                      on: { itemTap: _vm.onRangeTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var range = ref.range
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "Label",
                                { attrs: { text: range[0] } },
                                [
                                  _c("Span", { attrs: { text: range[0] } }),
                                  _c("Span", { attrs: { text: " ~ " } }),
                                  _c("Span", { attrs: { text: range[1] } })
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "GridLayout",
                    { attrs: { rows: "*", height: "1000px" } },
                    [
                      _c(
                        "RadCartesianChart",
                        {
                          staticStyle: { fontSize: "12" },
                          attrs: { row: "0" }
                        },
                        [
                          _c("BarSeries", {
                            directives: [
                              {
                                name: "tkCartesianSeries",
                                rawName: "v-tkCartesianSeries"
                              }
                            ],
                            attrs: {
                              items: _vm.figures,
                              categoryProperty: "name",
                              valueProperty: "quantity"
                            }
                          }),
                          _c("CategoricalAxis", {
                            directives: [
                              {
                                name: "tkCartesianHorizontalAxis",
                                rawName: "v-tkCartesianHorizontalAxis"
                              }
                            ]
                          }),
                          _c("LinearAxis", {
                            directives: [
                              {
                                name: "tkCartesianVerticalAxis",
                                rawName: "v-tkCartesianVerticalAxis"
                              }
                            ]
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MapPage.vue?vue&type=template&id=01c16e00&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("WebView", {
        attrs: {
          id: "map",
          src:
            "https://leaflet-api.vercel.app?center=22.34,114.18&zoom=17&marker=AC%20Hall%7C22.341072,114.179645&sensor="
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QponDetail.vue?vue&type=template&id=7a5fa24a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        [
          _c("Image", {
            attrs: {
              src: _vm.tappedQpon.image,
              height: "300",
              stretch: "aspectFill"
            }
          }),
          _c(
            "ScrollView",
            [
              _c(
                "StackLayout",
                { staticClass: "m-10" },
                [
                  _c("Label", {
                    staticClass: "h1",
                    attrs: { text: _vm.tappedQpon.title }
                  }),
                  _c("Label", {
                    staticClass: "body",
                    attrs: { text: _vm.tappedQpon.detail }
                  }),
                  _c(
                    "Label",
                    { staticClass: "h2" },
                    [
                      _c("Span", { attrs: { text: "Mall: " } }),
                      _c("Span", { attrs: { text: _vm.tappedQpon.mall } }),
                      _c("Span", { attrs: { text: ", Coins: " } }),
                      _c("Span", { attrs: { text: _vm.tappedQpon.coins } })
                    ],
                    1
                  ),
                  _c(
                    "Label",
                    { staticClass: "h3" },
                    [
                      _c("Span", { attrs: { text: "Expiry Date: " } }),
                      _c("Span", { attrs: { text: _vm.tappedQpon.expire } })
                    ],
                    1
                  ),
                  _c("Button", {
                    staticClass: "h2 -primary -rounded-lg",
                    attrs: { text: "Redeem" },
                    on: { tap: _vm.onRedeemTap }
                  }),
                  _c("Button", {
                    staticClass: "h2 -primary -rounded-lg",
                    attrs: { text: "Address" },
                    on: { tap: _vm.onAddressTap }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QponList.vue?vue&type=template&id=28a3d057&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ListView",
        {
          attrs: { items: _vm.qpons, "+alias": "qpon" },
          on: { itemTap: _vm.onItemTap }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var qpon = ref.qpon
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c("Label", { attrs: { text: qpon.title } })
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

global.baseUrl = "https://0b763e3b383d.ngrok.io";
global.mallLoc = [{
  "mall": "IFC Mall",
  "latitude": 22.2849,
  "longitude": 114.158917
}, {
  "mall": "Pacific Place",
  "latitude": 22.2774985,
  "longitude": 114.1663225
}, {
  "mall": "Times Square",
  "latitude": 22.2782079,
  "longitude": 114.1822994
}, {
  "mall": "Elements",
  "latitude": 22.3048708,
  "longitude": 114.1615219
}, {
  "mall": "Harbour City",
  "latitude": 22.2950689,
  "longitude": 114.1668661
}, {
  "mall": "Festival Walk",
  "latitude": 22.3372971,
  "longitude": 114.1745273
}, {
  "mall": "MegaBox",
  "latitude": 22.319857,
  "longitude": 114.208168
}, {
  "mall": "APM",
  "latitude": 22.3121738,
  "longitude": 114.22513219999996
}, {
  "mall": "Tsuen Wan Plaza",
  "latitude": 22.370735,
  "longitude": 114.111309
}, {
  "mall": "New Town Plaza",
  "latitude": 22.3814592,
  "longitude": 114.1889307
}];
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <HelloWorld />\n        </Frame>",
  components: {
    HelloWorld: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/HelloWorld.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "763db97b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('763db97b')) {
      api.createRecord('763db97b', component.options)
    } else {
      api.reload('763db97b', component.options)
    }
    module.hot.accept("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
(function () {
      api.rerender('763db97b', {
        render: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/HelloWorld.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/MapPage.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapPage_vue_vue_type_template_id_01c16e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MapPage.vue?vue&type=template&id=01c16e00&");
/* harmony import */ var _MapPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/MapPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MapPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MapPage_vue_vue_type_template_id_01c16e00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MapPage_vue_vue_type_template_id_01c16e00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('01c16e00')) {
      api.createRecord('01c16e00', component.options)
    } else {
      api.reload('01c16e00', component.options)
    }
    module.hot.accept("./components/MapPage.vue?vue&type=template&id=01c16e00&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MapPage_vue_vue_type_template_id_01c16e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/MapPage.vue?vue&type=template&id=01c16e00&");
(function () {
      api.rerender('01c16e00', {
        render: _MapPage_vue_vue_type_template_id_01c16e00___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MapPage_vue_vue_type_template_id_01c16e00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/MapPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/MapPage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MapPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MapPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MapPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/MapPage.vue?vue&type=template&id=01c16e00&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapPage_vue_vue_type_template_id_01c16e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MapPage.vue?vue&type=template&id=01c16e00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapPage_vue_vue_type_template_id_01c16e00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MapPage_vue_vue_type_template_id_01c16e00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/QponDetail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QponDetail_vue_vue_type_template_id_7a5fa24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QponDetail.vue?vue&type=template&id=7a5fa24a&");
/* harmony import */ var _QponDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/QponDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QponDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QponDetail_vue_vue_type_template_id_7a5fa24a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QponDetail_vue_vue_type_template_id_7a5fa24a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7a5fa24a')) {
      api.createRecord('7a5fa24a', component.options)
    } else {
      api.reload('7a5fa24a', component.options)
    }
    module.hot.accept("./components/QponDetail.vue?vue&type=template&id=7a5fa24a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _QponDetail_vue_vue_type_template_id_7a5fa24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QponDetail.vue?vue&type=template&id=7a5fa24a&");
(function () {
      api.rerender('7a5fa24a', {
        render: _QponDetail_vue_vue_type_template_id_7a5fa24a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _QponDetail_vue_vue_type_template_id_7a5fa24a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/QponDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/QponDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QponDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/QponDetail.vue?vue&type=template&id=7a5fa24a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QponDetail_vue_vue_type_template_id_7a5fa24a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QponDetail.vue?vue&type=template&id=7a5fa24a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QponDetail_vue_vue_type_template_id_7a5fa24a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QponDetail_vue_vue_type_template_id_7a5fa24a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/QponList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QponList_vue_vue_type_template_id_28a3d057___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QponList.vue?vue&type=template&id=28a3d057&");
/* harmony import */ var _QponList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/QponList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QponList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QponList_vue_vue_type_template_id_28a3d057___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QponList_vue_vue_type_template_id_28a3d057___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('28a3d057')) {
      api.createRecord('28a3d057', component.options)
    } else {
      api.reload('28a3d057', component.options)
    }
    module.hot.accept("./components/QponList.vue?vue&type=template&id=28a3d057&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _QponList_vue_vue_type_template_id_28a3d057___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QponList.vue?vue&type=template&id=28a3d057&");
(function () {
      api.rerender('28a3d057', {
        render: _QponList_vue_vue_type_template_id_28a3d057___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _QponList_vue_vue_type_template_id_28a3d057___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/QponList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/QponList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QponList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/QponList.vue?vue&type=template&id=28a3d057&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QponList_vue_vue_type_template_id_28a3d057___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QponList.vue?vue&type=template&id=28a3d057&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QponList_vue_vue_type_template_id_28a3d057___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QponList_vue_vue_type_template_id_28a3d057___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "@nativescript/core/application":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/application");

/***/ }),

/***/ "@nativescript/core/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/data/observable-array");

/***/ }),

/***/ "@nativescript/core/platform":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/platform");

/***/ }),

/***/ "@nativescript/core/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/formatted-string");

/***/ }),

/***/ "@nativescript/core/text/span":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/span");

/***/ }),

/***/ "@nativescript/core/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/action-bar");

/***/ }),

/***/ "@nativescript/core/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/activity-indicator");

/***/ }),

/***/ "@nativescript/core/ui/border":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/border");

/***/ }),

/***/ "@nativescript/core/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/bottom-navigation");

/***/ }),

/***/ "@nativescript/core/ui/button":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/button");

/***/ }),

/***/ "@nativescript/core/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/content-view");

/***/ }),

/***/ "@nativescript/core/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/core/view");

/***/ }),

/***/ "@nativescript/core/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/date-picker");

/***/ }),

/***/ "@nativescript/core/ui/frame":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame");

/***/ }),

/***/ "@nativescript/core/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/html-view");

/***/ }),

/***/ "@nativescript/core/ui/image":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/image");

/***/ }),

/***/ "@nativescript/core/ui/label":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/label");

/***/ }),

/***/ "@nativescript/core/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/absolute-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/dock-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/flexbox-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/grid-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/layout-base");

/***/ }),

/***/ "@nativescript/core/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/stack-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/wrap-layout");

/***/ }),

/***/ "@nativescript/core/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-picker");

/***/ }),

/***/ "@nativescript/core/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-view");

/***/ }),

/***/ "@nativescript/core/ui/page":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/page");

/***/ }),

/***/ "@nativescript/core/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/placeholder");

/***/ }),

/***/ "@nativescript/core/ui/progress":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/progress");

/***/ }),

/***/ "@nativescript/core/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/proxy-view-container");

/***/ }),

/***/ "@nativescript/core/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/scroll-view");

/***/ }),

/***/ "@nativescript/core/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/search-bar");

/***/ }),

/***/ "@nativescript/core/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/segmented-bar");

/***/ }),

/***/ "@nativescript/core/ui/slider":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/slider");

/***/ }),

/***/ "@nativescript/core/ui/switch":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/switch");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-view");

/***/ }),

/***/ "@nativescript/core/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tabs");

/***/ }),

/***/ "@nativescript/core/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-field");

/***/ }),

/***/ "@nativescript/core/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-view");

/***/ }),

/***/ "@nativescript/core/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/time-picker");

/***/ }),

/***/ "@nativescript/core/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/web-view");

/***/ }),

/***/ "@nativescript/core/utils/types":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/utils/types");

/***/ }),

/***/ "@nativescript/core/xml":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/xml");

/***/ }),

/***/ "nativescript-ui-chart/vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-chart/vue");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NYXBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT8yZDlhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU/MDBiNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcFBhZ2UudnVlPzY1ZDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZT81Mzg3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXBvbkxpc3QudnVlPzk1MTIiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT8yOGRhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU/NTIzYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzc4MzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcFBhZ2UudnVlPzZmYTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXBQYWdlLnZ1ZT82YjNiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXBvbkRldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZT80MzBlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXBvbkRldGFpbC52dWU/YTJiZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Fwb25MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Fwb25MaXN0LnZ1ZT9hYzM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXBvbkxpc3QudnVlPzE3M2UiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9zcGFuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGlvbi1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvcmRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9ib3R0b20tbmF2aWdhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29udGVudC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2NvcmUvdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9kYXRlLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9odG1sLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvaW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9kb2NrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xpc3QtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xpc3Qtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BsYWNlaG9sZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb3h5LXZpZXctY29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Njcm9sbC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlYXJjaC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VnbWVudGVkLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3dpdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC1maWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGltZS1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvd2ViLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdXRpbHMvdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUveG1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L3Z1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC12dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiXSwibmFtZXMiOlsiSGVsbG9Xb3JsZCIsImdsb2JhbCIsImJhc2VVcmwiLCJtYWxsTG9jIiwiVnVlIiwidGVtcGxhdGUiLCJjb21wb25lbnRzIiwiJHN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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QUM5RyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiwwREFBK0MsRUFBRTtBQUFBO0FBQ3ZFO0FBQ0EsZ0JBQWdCLG1GQUFNO0FBQ3RCLHlCQUF5Qiw0RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXdLLENBQWdCLDRPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBNUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSwwRTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEseUU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSx1RTs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxnRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx1Rjs7Ozs7OztBQ0FBLGdGOzs7Ozs7O0FDQUEscUY7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLDhEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLG1EOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJIb21lXCIgLz5cblxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICA8VGFiU3RyaXA+XG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSG9tZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vaG9tZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiTWFsbHNcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NldHRpbmdzXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDb2luc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2VhcmNoXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJVc2VyXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICA8L1RhYlN0cmlwPlxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgPExpc3RWaWV3IGZvcj1cInFwb24gaW4gcXBvbnNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PVwiMzUwXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJxcG9uLmltYWdlXCIgaGVpZ2h0PVwiMzAwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInFwb24udGl0bGVcIiBjbGFzcz1cImgxXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJxcG9uLmRldGFpbFwiIGNsYXNzPVwiYm9keVwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJDb2luczogXCI+PC9TcGFuPlxuICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJxcG9uLmNvaW5zXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwibWFsbCBpbiBtYWxsc1wiIEBpdGVtVGFwPVwib25NYWxsVGFwXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWFsbC5tYWxsXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwicmFuZ2UgaW4gcmFuZ2VzXCIgQGl0ZW1UYXA9XCJvblJhbmdlVGFwXCI+XG4gICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInJhbmdlWzBdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicmFuZ2VbMF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiIH4gXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJyYW5nZVsxXVwiIC8+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIqXCIgaGVpZ2h0PVwiMTAwMHB4XCI+XG4gICAgICAgICAgICA8UmFkQ2FydGVzaWFuQ2hhcnQgcm93PVwiMFwiIHN0eWxlPVwiZm9udC1zaXplOiAxMlwiPlxuICAgICAgICAgICAgICA8QmFyU2VyaWVzXG4gICAgICAgICAgICAgICAgdi10a0NhcnRlc2lhblNlcmllc1xuICAgICAgICAgICAgICAgIDppdGVtcz1cImZpZ3VyZXNcIlxuICAgICAgICAgICAgICAgIGNhdGVnb3J5UHJvcGVydHk9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3BlcnR5PVwicXVhbnRpdHlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q2F0ZWdvcmljYWxBeGlzIHYtdGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpcyAvPlxuICAgICAgICAgICAgICA8TGluZWFyQXhpcyB2LXRrQ2FydGVzaWFuVmVydGljYWxBeGlzIC8+XG4gICAgICAgICAgICA8L1JhZENhcnRlc2lhbkNoYXJ0PlxuICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuaW1wb3J0IFJhZENhcnRlc2lhbkNoYXJ0IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlXCI7XG5WdWUudXNlKFJhZENhcnRlc2lhbkNoYXJ0KTtcblxuaW1wb3J0IFFwb25EZXRhaWwgZnJvbSBcIi4vUXBvbkRldGFpbFwiO1xuaW1wb3J0IFFwb25MaXN0IGZyb20gXCIuL1Fwb25MaXN0XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IHRhcHBlZDogXCIgKyBhcmdzLml0ZW0ubmFtZSk7XG5cbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUXBvbkRldGFpbCwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICB0YXBwZWRRcG9uOiBhcmdzLml0ZW0sIC8vIHRhcHBlZFByb2R1Y3Q6IG5hbWUgaW4gdGhlIGNoaWxkIHBhZ2VcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkJ1dHRvblRhcDogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGNvbmZpcm0oe1xuICAgICAgICB0aXRsZTogXCJDb25maXJtIHRvIHBsYWNlIG9yZGVyP1wiLFxuICAgICAgICBtZXNzYWdlOiBcIlNlbmRpbmcgdG8gaHR0cGJpbi5vcmdcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9odHRwYmluLm9yZy9wb3N0XCIsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5pbkNhcnQpLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgdGhpcy5maWd1cmVzID0gZGF0YS5qc29uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25SYW5nZVRhcDogZnVuY3Rpb24oYXJncykge1xuICAgICAgY29uc29sZS5sb2coYXJncy5pdGVtWzBdKTtcbiAgICAgIGNvbnNvbGUubG9nKGFyZ3MuaXRlbVsxXSk7XG4gICAgICB2YXIgcXBvbnNJblJhbmdlID0gdGhpcy5xcG9ucy5maWx0ZXIoZnVuY3Rpb24gKHFwb24pIHtcbiAgICAgICAgcmV0dXJuIHFwb24uY29pbnMgPj0gYXJncy5pdGVtWzBdICYmIHFwb24uY29pbnMgPD0gYXJncy5pdGVtWzFdO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUXBvbkxpc3QsIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgcXBvbnM6IHFwb25zSW5SYW5nZVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uTWFsbFRhcDogZnVuY3Rpb24oYXJncykge1xuICAgICAgY29uc29sZS5sb2coYXJncy5pdGVtLm1hbGwpO1xuXG4gICAgICB2YXIgcXBvbnNJbk1hbGwgPSB0aGlzLnFwb25zLmZpbHRlcihmdW5jdGlvbiAocXBvbikge1xuICAgICAgICByZXR1cm4gcXBvbi5tYWxsID09IGFyZ3MuaXRlbS5tYWxsO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUXBvbkxpc3QsIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgcXBvbnM6IHFwb25zSW5NYWxsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpbkNhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gcC5xdWFudGl0eSA+IDA7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRvdGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3VtID0gMDtcbiAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICBzdW0gKz0gcC5xdWFudGl0eSAqIHAucHJpY2U7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdW07XG4gICAgfSxcbiAgfSxcbiAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxhZGllcyA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5kZXBhcnRtZW50ID09IFwiTGFkaWVzXCI7XG4gICAgfSk7XG4gICAgdGhpcy5nZW50cyA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5kZXBhcnRtZW50ID09IFwiR2VudHNcIjtcbiAgICB9KTtcbiAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goZ2xvYmFsLmJhc2VVcmwpO1xuICAgIHRoaXMucXBvbnMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHRoaXMubWFsbHMgPSBnbG9iYWwubWFsbExvYztcbiAgICBjb25zb2xlLmxvZyhcInFwb25zXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucXBvbnMpO1xuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHFwb25zOiBbXSxcbiAgICAgIG1hbGxzOiBbXSxcbiAgICAgIGxhZGllczogW10sXG4gICAgICBnZW50czogW10sXG4gICAgICBwcm9kdWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiR2VudHNcIixcbiAgICAgICAgICBuYW1lOiBcIkRlbmltIE1lbidzIFNoaXJ0c1wiLFxuICAgICAgICAgIGRlc2M6IFwiUGFzc2lvbiwgZGVkaWNhdGlvbiwgaGFyZCB3b3JrIGFuZCBjcmVhdGl2aXR5XCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9HQVZWVllDR1hDLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiA0NTAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJMYWRpZXNcIixcbiAgICAgICAgICBuYW1lOiBcIlJVTiBIb29kaWVzXCIsXG4gICAgICAgICAgZGVzYzogXCJUb3AtcXVhbGl0eSwgaW5zdGFudC1mYXZvcml0ZSBzd2VhdHNoaXJ0XCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9VSEFRRElZVDZYLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiA2MDAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJHZW50c1wiLFxuICAgICAgICAgIG5hbWU6IFwiTWVuJ3MgTGlnaHR3ZWlnaHQgQ29hdFwiLFxuICAgICAgICAgIGRlc2M6IFwiU2lnbmF0dXJlIEJ1Y2sgYXBwbGlxdcOpXCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9QSlkzWTcwMTBNLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiAyNTAwLFxuICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiTGFkaWVzXCIsXG4gICAgICAgICAgbmFtZTogXCJTdG9yeSBTdG9yeSBUZWVcIixcbiAgICAgICAgICBkZXNjOiBcIlVsdHJhIHNvZnQgVC1zaGlydFwiLFxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvR0NKN1ZVM1BaMC5qcGdcIixcbiAgICAgICAgICBwcmljZTogMzQwLFxuICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGZpZ3VyZXM6IFtdLFxuICAgICAgcmFuZ2VzOiBbWzAsIDI5OV0sIFszMDAsIDU5OV0sIFs2MDAsIDg5OV0sIFs5MDAsIDExOTldLCBbMTIwMCwgOTk5OV1dLFxuICAgIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9tZS1wYW5lbCB7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjA7XG4gIG1hcmdpbjogMTU7XG59XG5cbi5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE1O1xufVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFBhZ2U+XHJcbiAgICA8V2ViVmlld1xyXG4gICAgICBpZD1cIm1hcFwiIHNyYz1cImh0dHBzOi8vbGVhZmxldC1hcGkudmVyY2VsLmFwcD9jZW50ZXI9MjIuMzQsMTE0LjE4Jnpvb209MTcmbWFya2VyPUFDJTIwSGFsbCU3QzIyLjM0MTA3MiwxMTQuMTc5NjQ1JnNlbnNvcj1cIlxyXG4gICAgLz5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcInFwb25NYWxsXCJdLCAvLyBJbnN0YW5jZSBwcm9wZXJ0eVxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5xcG9uTWFsbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYWJjXCIpO1xyXG4gICAgICB2YXIgbWFsbE9iaiA9IGdsb2JhbC5tYWxsTG9jLmZpbHRlcihmdW5jdGlvbihtKSB7XHJcbiAgICAgICAgICByZXR1cm4gbS5tYWxsID0gcXBvbk1hbGw7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRlZlwiKTtcclxuICAgICAgY29uc29sZS5sb2cobWFsbE9iaik7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFBhZ2U+XHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxJbWFnZSA6c3JjPVwidGFwcGVkUXBvbi5pbWFnZVwiIGhlaWdodD1cIjMwMFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cclxuXHJcbiAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm0tMTBcIj5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgxXCIgOnRleHQ9XCJ0YXBwZWRRcG9uLnRpdGxlXCIgLz5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImJvZHlcIiA6dGV4dD1cInRhcHBlZFFwb24uZGV0YWlsXCIgLz5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgyXCI+XHJcbiAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJNYWxsOiBcIiAvPlxyXG4gICAgICAgICAgICA8U3BhbiA6dGV4dD1cInRhcHBlZFFwb24ubWFsbFwiIC8+XHJcbiAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIsIENvaW5zOiBcIiAvPlxyXG4gICAgICAgICAgICA8U3BhbiA6dGV4dD1cInRhcHBlZFFwb24uY29pbnNcIiAvPlxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCI+XHJcbiAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJFeHBpcnkgRGF0ZTogXCIgLz5cclxuICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJ0YXBwZWRRcG9uLmV4cGlyZVwiIC8+XHJcbiAgICAgICAgICA8L0xhYmVsPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgIHRleHQ9XCJSZWRlZW1cIlxyXG4gICAgICAgICAgICBAdGFwPVwib25SZWRlZW1UYXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgIHRleHQ9XCJBZGRyZXNzXCJcclxuICAgICAgICAgICAgQHRhcD1cIm9uQWRkcmVzc1RhcFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IE1hcFBhZ2UgZnJvbSBcIi4vTWFwUGFnZS52dWVcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJ0YXBwZWRRcG9uXCJdLCAvLyBJbnN0YW5jZSBwcm9wZXJ0eVxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyBvblJlZGVlbVRhcCgpIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGNvbmZpcm0oe1xyXG4gICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiVG8gcmVkZWVtIHRoaXMgY291cG9uP1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICsgXCIvcXBvbi9cIiArIHRoaXMudGFwcGVkUXBvbi5pZCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICBhbGVydCh7IHRpdGxlOiBcIlJlZGVlbSBzdWNjZXNzZnVsbHlcIiwgb2tCdXR0b25UZXh0OiBcIk9LXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzID09IDQwMykge1xyXG4gICAgICAgICAgYWxlcnQoeyB0aXRsZTogXCJQbGVhc2UgbG9naW5cIiwgb2tCdXR0b25UZXh0OiBcIk9LXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KHsgdGl0bGU6IHJlcy5ib2R5LCBva0J1dHRvblRleHQ6IFwiT0tcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkFkZHJlc3NUYXAoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTWFwUGFnZSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBxcG9uTWFsbDogdGhpcy50YXBwZWRRcG9uLm1hbGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0ZXh0RmllbGRWYWx1ZTogdGhpcy50YXBwZWRRcG9uLnF1YW50aXR5IHx8IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxMaXN0VmlldyBmb3I9XCJxcG9uIGluIHFwb25zXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIj5cclxuICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi50aXRsZVwiIC8+XHJcbiAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgIDwvTGlzdFZpZXc+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFFwb25EZXRhaWwgZnJvbSBcIi4vUXBvbkRldGFpbFwiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1wicXBvbnNcIl0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHFwb25zOiBbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCB0YXBwZWQ6IFwiICsgYXJncy5pdGVtLm5hbWUpO1xyXG5cclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uRGV0YWlsLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHRhcHBlZFFwb246IGFyZ3MuaXRlbSwgLy8gdGFwcGVkUHJvZHVjdDogbmFtZSBpbiB0aGUgY2hpbGQgcGFnZVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi03NjNkYjk3Yl0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTc2M2RiOTdiXSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiSG9tZVwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkJvdHRvbU5hdmlnYXRpb25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJTdHJpcFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiSG9tZVwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogXCJyZXM6Ly9ob21lXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJNYWxsc1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogXCJyZXM6Ly9zZXR0aW5nc1wiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiQ29pbnNcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vc2VhcmNoXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJVc2VyXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHsgYXR0cnM6IHsgc3JjOiBcInJlczovL3NlYXJjaFwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0ucXBvbnMsIFwiK2FsaWFzXCI6IFwicXBvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxcG9uID0gcmVmLnFwb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcXBvbi5pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHFwb24udGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogcXBvbi5kZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDb2luczogXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBxcG9uLmNvaW5zIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLm1hbGxzLCBcIithbGlhc1wiOiBcIm1hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbk1hbGxUYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFsbCA9IHJlZi5tYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IG1hbGwubWFsbCB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLnJhbmdlcywgXCIrYWxpYXNcIjogXCJyYW5nZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uUmFuZ2VUYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZ2UgPSByZWYucmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRleHQ6IHJhbmdlWzBdIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IHJhbmdlWzBdIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCIgfiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IHJhbmdlWzFdIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCIqXCIsIGhlaWdodDogXCIxMDAwcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkQ2FydGVzaWFuQ2hhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZm9udFNpemU6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQmFyU2VyaWVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtDYXJ0ZXNpYW5TZXJpZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrQ2FydGVzaWFuU2VyaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmZpZ3VyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVByb3BlcnR5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHk6IFwicXVhbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcmljYWxBeGlzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMaW5lYXJBeGlzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtDYXJ0ZXNpYW5WZXJ0aWNhbEF4aXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrQ2FydGVzaWFuVmVydGljYWxBeGlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIldlYlZpZXdcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcIm1hcFwiLFxuICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9sZWFmbGV0LWFwaS52ZXJjZWwuYXBwP2NlbnRlcj0yMi4zNCwxMTQuMTgmem9vbT0xNyZtYXJrZXI9QUMlMjBIYWxsJTdDMjIuMzQxMDcyLDExNC4xNzk2NDUmc2Vuc29yPVwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogX3ZtLnRhcHBlZFFwb24uaW1hZ2UsXG4gICAgICAgICAgICAgIGhlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtLTEwXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnRhcHBlZFFwb24udGl0bGUgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0udGFwcGVkUXBvbi5kZXRhaWwgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiTWFsbDogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0udGFwcGVkUXBvbi5tYWxsIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCIsIENvaW5zOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS50YXBwZWRRcG9uLmNvaW5zIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJFeHBpcnkgRGF0ZTogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0udGFwcGVkUXBvbi5leHBpcmUgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlJlZGVlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uUmVkZWVtVGFwIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFkZHJlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkFkZHJlc3NUYXAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0ucXBvbnMsIFwiK2FsaWFzXCI6IFwicXBvblwiIH0sXG4gICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBxcG9uID0gcmVmLnFwb25cbiAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogcXBvbi50aXRsZSB9IH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8a3R8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzcydcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuXG5pbXBvcnQgSGVsbG9Xb3JsZCBmcm9tICcuL2NvbXBvbmVudHMvSGVsbG9Xb3JsZCc7XG5cbi8vIFVuY29tbW1lbnQgdGhlIGZvbGxvd2luZyB0byBzZWUgTmF0aXZlU2NyaXB0LVZ1ZSBvdXRwdXQgbG9nc1xuLy8gVnVlLmNvbmZpZy5zaWxlbnQgPSBmYWxzZTtcblxuZ2xvYmFsLmJhc2VVcmwgPSBcImh0dHBzOi8vMGI3NjNlM2IzODNkLm5ncm9rLmlvXCI7XG5nbG9iYWwubWFsbExvYyA9IFtcbiAge1xuICAgIFwibWFsbFwiOiBcIklGQyBNYWxsXCIsXG4gICAgXCJsYXRpdHVkZVwiOiAyMi4yODQ5LFxuICAgIFwibG9uZ2l0dWRlXCI6IDExNC4xNTg5MTdcbiAgfSxcbiAge1xuICAgIFwibWFsbFwiOiBcIlBhY2lmaWMgUGxhY2VcIixcbiAgICBcImxhdGl0dWRlXCI6IDIyLjI3NzQ5ODUsXG4gICAgXCJsb25naXR1ZGVcIjogMTE0LjE2NjMyMjVcbiAgfSxcbiAge1xuICAgIFwibWFsbFwiOiBcIlRpbWVzIFNxdWFyZVwiLFxuICAgIFwibGF0aXR1ZGVcIjogMjIuMjc4MjA3OSxcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTgyMjk5NFxuICB9LCBcbiAge1xuICAgIFwibWFsbFwiOiBcIkVsZW1lbnRzXCIsXG4gICAgXCJsYXRpdHVkZVwiOiAyMi4zMDQ4NzA4LFxuICAgIFwibG9uZ2l0dWRlXCI6IDExNC4xNjE1MjE5XG4gIH0sXG4gIHtcbiAgICBcIm1hbGxcIjogXCJIYXJib3VyIENpdHlcIixcbiAgICBcImxhdGl0dWRlXCI6IDIyLjI5NTA2ODksXG4gICAgXCJsb25naXR1ZGVcIjogMTE0LjE2Njg2NjFcbiAgfSxcbiAge1xuICAgIFwibWFsbFwiOiBcIkZlc3RpdmFsIFdhbGtcIixcbiAgICBcImxhdGl0dWRlXCI6IDIyLjMzNzI5NzEsXG4gICAgXCJsb25naXR1ZGVcIjogMTE0LjE3NDUyNzNcbiAgfSxcbiAge1xuICAgIFwibWFsbFwiOiBcIk1lZ2FCb3hcIixcbiAgICBcImxhdGl0dWRlXCI6IDIyLjMxOTg1NyxcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMjA4MTY4XG4gIH0sXG4gIHtcbiAgICBcIm1hbGxcIjogXCJBUE1cIixcbiAgICBcImxhdGl0dWRlXCI6IDIyLjMxMjE3MzgsXG4gICAgXCJsb25naXR1ZGVcIjogMTE0LjIyNTEzMjE5OTk5OTk2XG4gIH0sXG4gIHtcbiAgICBcIm1hbGxcIjogXCJUc3VlbiBXYW4gUGxhemFcIixcbiAgICBcImxhdGl0dWRlXCI6IDIyLjM3MDczNSxcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTExMzA5XG4gIH0sXG4gIHtcbiAgICBcIm1hbGxcIjogXCJOZXcgVG93biBQbGF6YVwiLFxuICAgIFwibGF0aXR1ZGVcIjogMjIuMzgxNDU5MixcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTg4OTMwN1xuICB9XG5dXG5uZXcgVnVlKHtcblxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgIDxIZWxsb1dvcmxkIC8+XG4gICAgICAgIDwvRnJhbWU+YCxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVsbG9Xb3JsZFxuICAgIH1cbn0pLiRzdGFydCgpOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2M2RiOTdiXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hlbmRcXFxcRGVza3RvcFxcXFxxcG9uLW1vYmlsZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NjNkYjk3YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NjNkYjk3YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NjNkYjk3YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzYzZGI5N2InLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01hcFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxYzE2ZTAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01hcFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYXBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hlbmRcXFxcRGVza3RvcFxcXFxxcG9uLW1vYmlsZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMWMxNmUwMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMWMxNmUwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMWMxNmUwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFwUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDFjMTZlMDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDFjMTZlMDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTWFwUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMWMxNmUwMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUXBvbkRldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2E1ZmEyNGEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXBvbkRldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Fwb25EZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGVuZFxcXFxEZXNrdG9wXFxcXHFwb24tbW9iaWxlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdhNWZhMjRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdhNWZhMjRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdhNWZhMjRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RcG9uRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTVmYTI0YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YTVmYTI0YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RcG9uRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Fwb25EZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Fwb25EZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhNWZhMjRhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9RcG9uTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjhhM2QwNTcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXBvbkxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9RcG9uTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoZW5kXFxcXERlc2t0b3BcXFxccXBvbi1tb2JpbGVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjhhM2QwNTcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjhhM2QwNTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjhhM2QwNTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Fwb25MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOGEzZDA1NyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyOGEzZDA1NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9RcG9uTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXBvbkxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXBvbkxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Fwb25MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOGEzZDA1NyZcIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L3NwYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGlvbi1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGl2aXR5LWluZGljYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm9yZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9ib3R0b20tbmF2aWdhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb250ZW50LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2NvcmUvdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZGF0ZS1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9odG1sLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9saXN0LXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wbGFjZWhvbGRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb3h5LXZpZXctY29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zY3JvbGwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VhcmNoLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VnbWVudGVkLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LWZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RpbWUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS93ZWItdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdXRpbHMvdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3htbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC12dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=