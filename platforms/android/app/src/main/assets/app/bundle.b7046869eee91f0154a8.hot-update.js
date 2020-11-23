webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&":
false,

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _QponMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QponMobile.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  methods: {
    onLoginTap: function () {
      var _onLoginTap = _asyncToGenerator(function* () {
        var res = yield fetch(global.baseUrl + "/user/login", {
          method: "POST",
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });

        if (res.ok) {
          alert("Login successful");
          this.$navigateTo(_QponMobile__WEBPACK_IMPORTED_MODULE_0__["default"], {
            transition: {},
            props: {}
          });
        } else {
          alert(yield res.json());
        }
      });

      function onLoginTap() {
        return _onLoginTap.apply(this, arguments);
      }

      return onLoginTap;
    }()
  },

  data() {
    return {
      username: "",
      password: ""
    };
  },

  mounted() {}

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QponMobile.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-chart/vue");
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QponDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/QponDetail.vue");
/* harmony import */ var _QponList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/QponList.vue");
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/LoginPage.vue");
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
    },
    onLogTap: function () {
      var _onLogTap = _asyncToGenerator(function* () {
        yield fetch(global.baseUrl + "/user/logout");
        this.$navigateTo(_LoginPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
          transition: {},
          props: {}
        });
      });

      function onLogTap() {
        return _onLogTap.apply(this, arguments);
      }

      return onLogTap;
    }()
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

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
false,

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/QponMobile.vue?vue&type=style&index=0&id=39b98a1b&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-39b98a1b] {\r\n  vertical-align: center;\r\n  font-size: 20;\r\n  margin: 15;\n}\n.description-label[data-v-39b98a1b] {\r\n  margin-bottom: 15;\n}\r\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/QponMobile.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
false,

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QponMobile.vue?vue&type=template&id=39b98a1b&scoped=true&":
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
                    "StackLayout",
                    [
                      _c(
                        "FlexboxLayout",
                        { attrs: { flexDirection: "row" } },
                        [
                          _c("Label", {
                            attrs: {
                              text: "1",
                              backgroundColor: "#EEEEEE",
                              flexGrow: "1"
                            }
                          }),
                          _c("Label", {
                            attrs: {
                              text: "2",
                              backgroundColor: "#DDDDDD",
                              flexGrow: "2"
                            }
                          })
                        ],
                        1
                      ),
                      _c("Button", {
                        staticClass: "h3",
                        attrs: { text: "Logoff / Login" },
                        on: { tap: _vm.onLogTap }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_QponMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/QponMobile.vue");

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

global.baseUrl = "https://10c2244ac74e.ngrok.io";
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
  template: "\n        <Frame>\n            <QponMobile />\n        </Frame>",
  components: {
    QponMobile: _components_QponMobile__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/HelloWorld.vue":
false,

/***/ "./components/HelloWorld.vue?vue&type=script&lang=js&":
false,

/***/ "./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
false,

/***/ "./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
false,

/***/ "./components/QponMobile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QponMobile_vue_vue_type_template_id_39b98a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QponMobile.vue?vue&type=template&id=39b98a1b&scoped=true&");
/* harmony import */ var _QponMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/QponMobile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QponMobile_vue_vue_type_style_index_0_id_39b98a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/QponMobile.vue?vue&type=style&index=0&id=39b98a1b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QponMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QponMobile_vue_vue_type_template_id_39b98a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QponMobile_vue_vue_type_template_id_39b98a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "39b98a1b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('39b98a1b')) {
      api.createRecord('39b98a1b', component.options)
    } else {
      api.reload('39b98a1b', component.options)
    }
    module.hot.accept("./components/QponMobile.vue?vue&type=template&id=39b98a1b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _QponMobile_vue_vue_type_template_id_39b98a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QponMobile.vue?vue&type=template&id=39b98a1b&scoped=true&");
(function () {
      api.rerender('39b98a1b', {
        render: _QponMobile_vue_vue_type_template_id_39b98a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _QponMobile_vue_vue_type_template_id_39b98a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/QponMobile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/QponMobile.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QponMobile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/QponMobile.vue?vue&type=style&index=0&id=39b98a1b&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_style_index_0_id_39b98a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/QponMobile.vue?vue&type=style&index=0&id=39b98a1b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_style_index_0_id_39b98a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_style_index_0_id_39b98a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_style_index_0_id_39b98a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_style_index_0_id_39b98a1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./components/QponMobile.vue?vue&type=template&id=39b98a1b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_template_id_39b98a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QponMobile.vue?vue&type=template&id=39b98a1b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_template_id_39b98a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QponMobile_vue_vue_type_template_id_39b98a1b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1Fwb25Nb2JpbGUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXBvbk1vYmlsZS52dWU/YzQwMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Fwb25Nb2JpbGUudnVlPzIyZWIiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXBvbk1vYmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RcG9uTW9iaWxlLnZ1ZT8yOTZkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXBvbk1vYmlsZS52dWU/NjE3MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Fwb25Nb2JpbGUudnVlPzY0OTMiXSwibmFtZXMiOlsiUXBvbk1vYmlsZSIsImdsb2JhbCIsImJhc2VVcmwiLCJtYWxsTG9jIiwiVnVlIiwidGVtcGxhdGUiLCJjb21wb25lbnRzIiwiJHN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBLFdBREE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFDQSxtQ0FEQTtBQUVBO0FBRkE7QUFGQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBRkE7QUFJQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0EsT0FsQkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEQSxHQUZBOztBQXVCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsR0E1QkE7O0FBOEJBOztBQTlCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzREQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFD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QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMEssQ0FBZ0IsOE9BQUcsRUFBQyxDOzs7Ozs7OztBQ0E5TDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS5iNzA0Njg2OWVlZTkxZjAxNTRhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJ1c2VybmFtZVwiIGhpbnQ9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInBhc3N3b3JkXCIgaGludD1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9naW5cIiBAdGFwPVwib25Mb2dpblRhcFwiIC8+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBRcG9uTW9iaWxlIGZyb20gXCIuL1Fwb25Nb2JpbGVcIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtdLFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uTG9naW5UYXA6IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICsgXCIvdXNlci9sb2dpblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICBhbGVydChcIkxvZ2luIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uTW9iaWxlLCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7fSxcclxuICAgICAgICAgIHByb3BzOiB7fSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChhd2FpdCByZXMuanNvbigpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiAvPlxyXG5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPEJvdHRvbU5hdmlnYXRpb24+XHJcbiAgICAgICAgPFRhYlN0cmlwPlxyXG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL2hvbWVcIj48L0ltYWdlPlxyXG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIk1hbGxzXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NldHRpbmdzXCI+PC9JbWFnZT5cclxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDb2luc1wiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxyXG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlVzZXJcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2VhcmNoXCI+PC9JbWFnZT5cclxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxyXG4gICAgICAgIDwvVGFiU3RyaXA+XHJcbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxyXG4gICAgICAgICAgPExpc3RWaWV3IGZvcj1cInFwb24gaW4gcXBvbnNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiPlxyXG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGhlaWdodD1cIjM1MFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJxcG9uLmltYWdlXCIgaGVpZ2h0PVwiMzAwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi50aXRsZVwiIGNsYXNzPVwiaDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi5kZXRhaWxcIiBjbGFzcz1cImJvZHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkNvaW5zOiBcIj48L1NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicXBvbi5jb2luc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwibWFsbCBpbiBtYWxsc1wiIEBpdGVtVGFwPVwib25NYWxsVGFwXCI+XHJcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1hbGwubWFsbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwicmFuZ2UgaW4gcmFuZ2VzXCIgQGl0ZW1UYXA9XCJvblJhbmdlVGFwXCI+XHJcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInJhbmdlWzBdXCI+XHJcbiAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInJhbmdlWzBdXCIgLz5cclxuICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIgfiBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJyYW5nZVsxXVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxyXG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cclxuICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMVwiIGJhY2tncm91bmRDb2xvcj1cIiNFRUVFRUVcIiBmbGV4R3Jvdz1cIjFcIiAvPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMlwiIGJhY2tncm91bmRDb2xvcj1cIiNERERERERcIiBmbGV4R3Jvdz1cIjJcIiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2gzJyB0ZXh0PSdMb2dvZmYgLyBMb2dpbicgQHRhcD0nb25Mb2dUYXAnLz5cclxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XHJcbmltcG9ydCBSYWRDYXJ0ZXNpYW5DaGFydCBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L3Z1ZVwiO1xyXG5WdWUudXNlKFJhZENhcnRlc2lhbkNoYXJ0KTtcclxuXHJcbmltcG9ydCBRcG9uRGV0YWlsIGZyb20gXCIuL1Fwb25EZXRhaWxcIjtcclxuaW1wb3J0IFFwb25MaXN0IGZyb20gXCIuL1Fwb25MaXN0XCI7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSBcIi4vTG9naW5QYWdlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCB0YXBwZWQ6IFwiICsgYXJncy5pdGVtLm5hbWUpO1xyXG5cclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uRGV0YWlsLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHRhcHBlZFFwb246IGFyZ3MuaXRlbSwgLy8gdGFwcGVkUHJvZHVjdDogbmFtZSBpbiB0aGUgY2hpbGQgcGFnZVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJ1dHRvblRhcDogYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29uZmlybSh7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybSB0byBwbGFjZSBvcmRlcj9cIixcclxuICAgICAgICBtZXNzYWdlOiBcIlNlbmRpbmcgdG8gaHR0cGJpbi5vcmdcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdFwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmluQ2FydCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHRoaXMuZmlndXJlcyA9IGRhdGEuanNvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25SYW5nZVRhcDogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgY29uc29sZS5sb2coYXJncy5pdGVtWzBdKTtcclxuICAgICAgY29uc29sZS5sb2coYXJncy5pdGVtWzFdKTtcclxuICAgICAgdmFyIHFwb25zSW5SYW5nZSA9IHRoaXMucXBvbnMuZmlsdGVyKGZ1bmN0aW9uIChxcG9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHFwb24uY29pbnMgPj0gYXJncy5pdGVtWzBdICYmIHFwb24uY29pbnMgPD0gYXJncy5pdGVtWzFdO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUXBvbkxpc3QsIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcXBvbnM6IHFwb25zSW5SYW5nZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NYWxsVGFwOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICBjb25zb2xlLmxvZyhhcmdzLml0ZW0ubWFsbCk7XHJcblxyXG4gICAgICB2YXIgcXBvbnNJbk1hbGwgPSB0aGlzLnFwb25zLmZpbHRlcihmdW5jdGlvbiAocXBvbikge1xyXG4gICAgICAgIHJldHVybiBxcG9uLm1hbGwgPT0gYXJncy5pdGVtLm1hbGw7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uTGlzdCwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBxcG9uczogcXBvbnNJbk1hbGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9nVGFwOiBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICsgXCIvdXNlci9sb2dvdXRcIik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luUGFnZSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgIHByb3BzOiB7fVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgaW5DYXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIHJldHVybiBwLnF1YW50aXR5ID4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG90YWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIHN1bSArPSBwLnF1YW50aXR5ICogcC5wcmljZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzdW07XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXN5bmMgbW91bnRlZCgpIHtcclxuICAgIHRoaXMubGFkaWVzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcclxuICAgICAgcmV0dXJuIHAuZGVwYXJ0bWVudCA9PSBcIkxhZGllc1wiO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdlbnRzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcclxuICAgICAgcmV0dXJuIHAuZGVwYXJ0bWVudCA9PSBcIkdlbnRzXCI7XHJcbiAgICB9KTtcclxuICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWwuYmFzZVVybCk7XHJcbiAgICB0aGlzLnFwb25zID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHRoaXMubWFsbHMgPSBnbG9iYWwubWFsbExvYztcclxuICAgIGNvbnNvbGUubG9nKFwicXBvbnNcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnFwb25zKTtcclxuICB9LFxyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcXBvbnM6IFtdLFxyXG4gICAgICBtYWxsczogW10sXHJcbiAgICAgIGxhZGllczogW10sXHJcbiAgICAgIGdlbnRzOiBbXSxcclxuICAgICAgcHJvZHVjdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkdlbnRzXCIsXHJcbiAgICAgICAgICBuYW1lOiBcIkRlbmltIE1lbidzIFNoaXJ0c1wiLFxyXG4gICAgICAgICAgZGVzYzogXCJQYXNzaW9uLCBkZWRpY2F0aW9uLCBoYXJkIHdvcmsgYW5kIGNyZWF0aXZpdHlcIixcclxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvR0FWVlZZQ0dYQy5qcGdcIixcclxuICAgICAgICAgIHByaWNlOiA0NTAsXHJcbiAgICAgICAgICBxdWFudGl0eTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcIjJcIixcclxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiTGFkaWVzXCIsXHJcbiAgICAgICAgICBuYW1lOiBcIlJVTiBIb29kaWVzXCIsXHJcbiAgICAgICAgICBkZXNjOiBcIlRvcC1xdWFsaXR5LCBpbnN0YW50LWZhdm9yaXRlIHN3ZWF0c2hpcnRcIixcclxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvVUhBUURJWVQ2WC5qcGdcIixcclxuICAgICAgICAgIHByaWNlOiA2MDAsXHJcbiAgICAgICAgICBxdWFudGl0eTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcIjNcIixcclxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiR2VudHNcIixcclxuICAgICAgICAgIG5hbWU6IFwiTWVuJ3MgTGlnaHR3ZWlnaHQgQ29hdFwiLFxyXG4gICAgICAgICAgZGVzYzogXCJTaWduYXR1cmUgQnVjayBhcHBsaXF1w6lcIixcclxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvUEpZM1k3MDEwTS5qcGdcIixcclxuICAgICAgICAgIHByaWNlOiAyNTAwLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCI0XCIsXHJcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkxhZGllc1wiLFxyXG4gICAgICAgICAgbmFtZTogXCJTdG9yeSBTdG9yeSBUZWVcIixcclxuICAgICAgICAgIGRlc2M6IFwiVWx0cmEgc29mdCBULXNoaXJ0XCIsXHJcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5zdG9ja3NuYXAuaW8vaW1nLXRodW1icy85NjB3L0dDSjdWVTNQWjAuanBnXCIsXHJcbiAgICAgICAgICBwcmljZTogMzQwLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgZmlndXJlczogW10sXHJcbiAgICAgIHJhbmdlczogW1xyXG4gICAgICAgIFswLCAyOTldLFxyXG4gICAgICAgIFszMDAsIDU5OV0sXHJcbiAgICAgICAgWzYwMCwgODk5XSxcclxuICAgICAgICBbOTAwLCAxMTk5XSxcclxuICAgICAgICBbMTIwMCwgOTk5OV0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmhvbWUtcGFuZWwge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBtYXJnaW46IDE1O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1O1xyXG59XHJcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9tZS1wYW5lbFtkYXRhLXYtMzliOThhMWJdIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwO1xcclxcbiAgbWFyZ2luOiAxNTtcXG59XFxuLmRlc2NyaXB0aW9uLWxhYmVsW2RhdGEtdi0zOWI5OGExYl0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9RcG9uTW9iaWxlLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkhvbWVcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJCb3R0b21OYXZpZ2F0aW9uXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkhvbWVcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vaG9tZVwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiTWFsbHNcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vc2V0dGluZ3NcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkNvaW5zXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHsgYXR0cnM6IHsgc3JjOiBcInJlczovL3NlYXJjaFwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVXNlclwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogXCJyZXM6Ly9zZWFyY2hcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLnFwb25zLCBcIithbGlhc1wiOiBcInFwb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXBvbiA9IHJlZi5xcG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHFwb24uaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBxcG9uLnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHFwb24uZGV0YWlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ29pbnM6IFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogcXBvbi5jb2lucyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5tYWxscywgXCIrYWxpYXNcIjogXCJtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25NYWxsVGFwIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hbGwgPSByZWYubWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBtYWxsLm1hbGwgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5yYW5nZXMsIFwiK2FsaWFzXCI6IFwicmFuZ2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vblJhbmdlVGFwIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gcmVmLnJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0ZXh0OiByYW5nZVswXSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiByYW5nZVswXSB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiIH4gXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiByYW5nZVsxXSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsZXhEaXJlY3Rpb246IFwicm93XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VFRUVFRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNERERERERcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2dvZmYgLyBMb2dpblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkxvZ1RhcCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcclxuXHJcbmltcG9ydCBRcG9uTW9iaWxlIGZyb20gJy4vY29tcG9uZW50cy9RcG9uTW9iaWxlJztcclxuXHJcbi8vIFVuY29tbW1lbnQgdGhlIGZvbGxvd2luZyB0byBzZWUgTmF0aXZlU2NyaXB0LVZ1ZSBvdXRwdXQgbG9nc1xyXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xyXG5cclxuZ2xvYmFsLmJhc2VVcmwgPSBcImh0dHBzOi8vMTBjMjI0NGFjNzRlLm5ncm9rLmlvXCI7XHJcbmdsb2JhbC5tYWxsTG9jID0gW1xyXG4gIHtcclxuICAgIFwibWFsbFwiOiBcIklGQyBNYWxsXCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IDIyLjI4NDksXHJcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTU4OTE3XHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1hbGxcIjogXCJQYWNpZmljIFBsYWNlXCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IDIyLjI3NzQ5ODUsXHJcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTY2MzIyNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtYWxsXCI6IFwiVGltZXMgU3F1YXJlXCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IDIyLjI3ODIwNzksXHJcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTgyMjk5NFxyXG4gIH0sIFxyXG4gIHtcclxuICAgIFwibWFsbFwiOiBcIkVsZW1lbnRzXCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IDIyLjMwNDg3MDgsXHJcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTYxNTIxOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtYWxsXCI6IFwiSGFyYm91ciBDaXR5XCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IDIyLjI5NTA2ODksXHJcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTY2ODY2MVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtYWxsXCI6IFwiRmVzdGl2YWwgV2Fsa1wiLFxyXG4gICAgXCJsYXRpdHVkZVwiOiAyMi4zMzcyOTcxLFxyXG4gICAgXCJsb25naXR1ZGVcIjogMTE0LjE3NDUyNzNcclxuICB9LFxyXG4gIHtcclxuICAgIFwibWFsbFwiOiBcIk1lZ2FCb3hcIixcclxuICAgIFwibGF0aXR1ZGVcIjogMjIuMzE5ODU3LFxyXG4gICAgXCJsb25naXR1ZGVcIjogMTE0LjIwODE2OFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJtYWxsXCI6IFwiQVBNXCIsXHJcbiAgICBcImxhdGl0dWRlXCI6IDIyLjMxMjE3MzgsXHJcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMjI1MTMyMTk5OTk5OTZcclxuICB9LFxyXG4gIHtcclxuICAgIFwibWFsbFwiOiBcIlRzdWVuIFdhbiBQbGF6YVwiLFxyXG4gICAgXCJsYXRpdHVkZVwiOiAyMi4zNzA3MzUsXHJcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTExMzA5XHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm1hbGxcIjogXCJOZXcgVG93biBQbGF6YVwiLFxyXG4gICAgXCJsYXRpdHVkZVwiOiAyMi4zODE0NTkyLFxyXG4gICAgXCJsb25naXR1ZGVcIjogMTE0LjE4ODkzMDdcclxuICB9XHJcbl1cclxubmV3IFZ1ZSh7XHJcblxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8RnJhbWU+XHJcbiAgICAgICAgICAgIDxRcG9uTW9iaWxlIC8+XHJcbiAgICAgICAgPC9GcmFtZT5gLFxyXG5cclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBRcG9uTW9iaWxlXHJcbiAgICB9XHJcbn0pLiRzdGFydCgpOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUXBvbk1vYmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzliOThhMWImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXBvbk1vYmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Fwb25Nb2JpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Fwb25Nb2JpbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzliOThhMWImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM5Yjk4YTFiXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hlbmRcXFxcRGVza3RvcFxcXFxxcG9uLW1vYmlsZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczOWI5OGExYicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczOWI5OGExYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczOWI5OGExYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUXBvbk1vYmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzliOThhMWImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzliOThhMWInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUXBvbk1vYmlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXBvbk1vYmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RcG9uTW9iaWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Fwb25Nb2JpbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzliOThhMWImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXBvbk1vYmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzliOThhMWImc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9