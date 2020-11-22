webpackHotUpdate("bundle",{

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
        return qpons.malls == args.item.mall.mall;
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzAwYjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQ0EsK0JBREEsQ0FDQTs7QUFEQTtBQUZBO0FBTUEsS0FYQTtBQWFBO0FBQUE7QUFDQTtBQUNBLDBDQURBO0FBRUEsMkNBRkE7QUFHQSw2QkFIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQTtBQURBLGFBRkE7QUFLQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BdEJBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLE9BYkE7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFJQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFNQSxLQWxEQTtBQW9EQTtBQUNBO0FBRUE7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQTFEQSxHQURBO0FBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBWkEsR0E5REE7O0FBNEVBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBWUEsR0F4RkE7O0FBMEZBO0FBQ0E7QUFDQSxlQURBO0FBRUEsZUFGQTtBQUdBLGdCQUhBO0FB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O0FBQzFFLDhDQUE4QyxTQUFTLGNBQWMsRUFBRTtBQUN2RSw4Q0FBOEMsU0FBUyxpQkFBaUIsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLDhCQUE4QixFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlCQUFpQjtBQUN6RCxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuZTE0MTA3OTlkY2M4NTIzY2M1NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiAvPlxuXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPEJvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgIDxUYWJTdHJpcD5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9ob21lXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJNYWxsc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2V0dGluZ3NcIj48L0ltYWdlPlxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkNvaW5zXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlVzZXJcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NlYXJjaFwiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgIDwvVGFiU3RyaXA+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwicXBvbiBpbiBxcG9uc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCIzNTBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInFwb24uaW1hZ2VcIiBoZWlnaHQ9XCIzMDBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi50aXRsZVwiIGNsYXNzPVwiaDFcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInFwb24uZGV0YWlsXCIgY2xhc3M9XCJib2R5XCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkNvaW5zOiBcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInFwb24uY29pbnNcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJtYWxsIGluIG1hbGxzXCIgQGl0ZW1UYXA9XCJvbk1hbGxUYXBcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtYWxsLm1hbGxcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJyYW5nZSBpbiByYW5nZXNcIiBAaXRlbVRhcD1cIm9uUmFuZ2VUYXBcIj5cbiAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicmFuZ2VbMF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJyYW5nZVswXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIgfiBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInJhbmdlWzFdXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIipcIiBoZWlnaHQ9XCIxMDAwcHhcIj5cbiAgICAgICAgICAgIDxSYWRDYXJ0ZXNpYW5DaGFydCByb3c9XCIwXCIgc3R5bGU9XCJmb250LXNpemU6IDEyXCI+XG4gICAgICAgICAgICAgIDxCYXJTZXJpZXNcbiAgICAgICAgICAgICAgICB2LXRrQ2FydGVzaWFuU2VyaWVzXG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiZmlndXJlc1wiXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlQcm9wZXJ0eT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHk9XCJxdWFudGl0eVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDYXRlZ29yaWNhbEF4aXMgdi10a0NhcnRlc2lhbkhvcml6b250YWxBeGlzIC8+XG4gICAgICAgICAgICAgIDxMaW5lYXJBeGlzIHYtdGtDYXJ0ZXNpYW5WZXJ0aWNhbEF4aXMgLz5cbiAgICAgICAgICAgIDwvUmFkQ2FydGVzaWFuQ2hhcnQ+XG4gICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG5pbXBvcnQgUmFkQ2FydGVzaWFuQ2hhcnQgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC92dWVcIjtcblZ1ZS51c2UoUmFkQ2FydGVzaWFuQ2hhcnQpO1xuXG5pbXBvcnQgUXBvbkRldGFpbCBmcm9tIFwiLi9RcG9uRGV0YWlsXCI7XG5pbXBvcnQgUXBvbkxpc3QgZnJvbSBcIi4vUXBvbkxpc3RcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIG9uSXRlbVRhcDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgdGFwcGVkOiBcIiArIGFyZ3MuaXRlbS5uYW1lKTtcblxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uRGV0YWlsLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHRhcHBlZFFwb246IGFyZ3MuaXRlbSwgLy8gdGFwcGVkUHJvZHVjdDogbmFtZSBpbiB0aGUgY2hpbGQgcGFnZVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uQnV0dG9uVGFwOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29uZmlybSh7XG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gdG8gcGxhY2Ugb3JkZXI/XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2VuZGluZyB0byBodHRwYmluLm9yZ1wiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIiwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmluQ2FydCksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICB0aGlzLmZpZ3VyZXMgPSBkYXRhLmpzb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblJhbmdlVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICBjb25zb2xlLmxvZyhhcmdzLml0ZW1bMF0pO1xuICAgICAgY29uc29sZS5sb2coYXJncy5pdGVtWzFdKTtcbiAgICAgIHZhciBxcG9uc0luUmFuZ2UgPSB0aGlzLnFwb25zLmZpbHRlcihmdW5jdGlvbiAocXBvbikge1xuICAgICAgICByZXR1cm4gcXBvbi5jb2lucyA+PSBhcmdzLml0ZW1bMF0gJiYgcXBvbi5jb2lucyA8PSBhcmdzLml0ZW1bMV07XG4gICAgICB9KTtcblxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uTGlzdCwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBxcG9uczogcXBvbnNJblJhbmdlXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25NYWxsVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICBjb25zb2xlLmxvZyhhcmdzLml0ZW0ubWFsbCk7XG5cbiAgICAgIHZhciBxcG9uc0luTWFsbCA9IHRoaXMucXBvbnMuZmlsdGVyKGZ1bmN0aW9uIChxcG9uKSB7XG4gICAgICAgIHJldHVybiBxcG9ucy5tYWxscyA9PSBhcmdzLml0ZW0ubWFsbC5tYWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgaW5DYXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHAucXVhbnRpdHkgPiAwO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB0b3RhbDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgc3VtICs9IHAucXVhbnRpdHkgKiBwLnByaWNlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3VtO1xuICAgIH0sXG4gIH0sXG4gIGFzeW5jIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5sYWRpZXMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHAuZGVwYXJ0bWVudCA9PSBcIkxhZGllc1wiO1xuICAgIH0pO1xuICAgIHRoaXMuZ2VudHMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHAuZGVwYXJ0bWVudCA9PSBcIkdlbnRzXCI7XG4gICAgfSk7XG4gICAgdmFyIHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsKTtcbiAgICB0aGlzLnFwb25zID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICB0aGlzLm1hbGxzID0gZ2xvYmFsLm1hbGxMb2M7XG4gICAgY29uc29sZS5sb2coXCJxcG9uc1wiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnFwb25zKTtcbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBxcG9uczogW10sXG4gICAgICBtYWxsczogW10sXG4gICAgICBsYWRpZXM6IFtdLFxuICAgICAgZ2VudHM6IFtdLFxuICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkdlbnRzXCIsXG4gICAgICAgICAgbmFtZTogXCJEZW5pbSBNZW4ncyBTaGlydHNcIixcbiAgICAgICAgICBkZXNjOiBcIlBhc3Npb24sIGRlZGljYXRpb24sIGhhcmQgd29yayBhbmQgY3JlYXRpdml0eVwiLFxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvR0FWVlZZQ0dYQy5qcGdcIixcbiAgICAgICAgICBwcmljZTogNDUwLFxuICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiTGFkaWVzXCIsXG4gICAgICAgICAgbmFtZTogXCJSVU4gSG9vZGllc1wiLFxuICAgICAgICAgIGRlc2M6IFwiVG9wLXF1YWxpdHksIGluc3RhbnQtZmF2b3JpdGUgc3dlYXRzaGlydFwiLFxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvVUhBUURJWVQ2WC5qcGdcIixcbiAgICAgICAgICBwcmljZTogNjAwLFxuICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiR2VudHNcIixcbiAgICAgICAgICBuYW1lOiBcIk1lbidzIExpZ2h0d2VpZ2h0IENvYXRcIixcbiAgICAgICAgICBkZXNjOiBcIlNpZ25hdHVyZSBCdWNrIGFwcGxpcXXDqVwiLFxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvUEpZM1k3MDEwTS5qcGdcIixcbiAgICAgICAgICBwcmljZTogMjUwMCxcbiAgICAgICAgICBxdWFudGl0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIjRcIixcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkxhZGllc1wiLFxuICAgICAgICAgIG5hbWU6IFwiU3RvcnkgU3RvcnkgVGVlXCIsXG4gICAgICAgICAgZGVzYzogXCJVbHRyYSBzb2Z0IFQtc2hpcnRcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5zdG9ja3NuYXAuaW8vaW1nLXRodW1icy85NjB3L0dDSjdWVTNQWjAuanBnXCIsXG4gICAgICAgICAgcHJpY2U6IDM0MCxcbiAgICAgICAgICBxdWFudGl0eTogMCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBmaWd1cmVzOiBbXSxcbiAgICAgIHJhbmdlczogW1swLCAyOTldLCBbMzAwLCA1OTldLCBbNjAwLCA4OTldLCBbOTAwLCAxMTk5XSwgWzEyMDAsIDk5OTldXSxcbiAgICB9O1xuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmhvbWUtcGFuZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwO1xuICBtYXJnaW46IDE1O1xufVxuXG4uZGVzY3JpcHRpb24tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAxNTtcbn1cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkhvbWVcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJCb3R0b21OYXZpZ2F0aW9uXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiU3RyaXBcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkhvbWVcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vaG9tZVwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiTWFsbHNcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwgeyBhdHRyczogeyBzcmM6IFwicmVzOi8vc2V0dGluZ3NcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJUYWJTdHJpcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkNvaW5zXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHsgYXR0cnM6IHsgc3JjOiBcInJlczovL3NlYXJjaFwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlRhYlN0cmlwSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiVXNlclwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7IGF0dHJzOiB7IHNyYzogXCJyZXM6Ly9zZWFyY2hcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJUYWJDb250ZW50SXRlbVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLnFwb25zLCBcIithbGlhc1wiOiBcInFwb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXBvbiA9IHJlZi5xcG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHFwb24uaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBxcG9uLnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IHFwb24uZGV0YWlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ29pbnM6IFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogcXBvbi5jb2lucyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5tYWxscywgXCIrYWxpYXNcIjogXCJtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25NYWxsVGFwIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hbGwgPSByZWYubWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBtYWxsLm1hbGwgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiVGFiQ29udGVudEl0ZW1cIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5yYW5nZXMsIFwiK2FsaWFzXCI6IFwicmFuZ2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vblJhbmdlVGFwIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gcmVmLnJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0ZXh0OiByYW5nZVswXSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiByYW5nZVswXSB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiIH4gXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiByYW5nZVsxXSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlRhYkNvbnRlbnRJdGVtXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKlwiLCBoZWlnaHQ6IFwiMTAwMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJhZENhcnRlc2lhbkNoYXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGZvbnRTaXplOiBcIjEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhclNlcmllc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrQ2FydGVzaWFuU2VyaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a0NhcnRlc2lhblNlcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5maWd1cmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlQcm9wZXJ0eTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BlcnR5OiBcInF1YW50aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkNhdGVnb3JpY2FsQXhpc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrQ2FydGVzaWFuSG9yaXpvbnRhbEF4aXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrQ2FydGVzaWFuSG9yaXpvbnRhbEF4aXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGluZWFyQXhpc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrQ2FydGVzaWFuVmVydGljYWxBeGlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a0NhcnRlc2lhblZlcnRpY2FsQXhpc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=