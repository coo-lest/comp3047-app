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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQ0EsK0JBREEsQ0FDQTs7QUFEQTtBQUZBO0FBTUEsS0FYQTtBQWFBO0FBQUE7QUFDQTtBQUNBLDBDQURBO0FBRUEsMkNBRkE7QUFHQSw2QkFIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQTtBQURBLGFBRkE7QUFLQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BdEJBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLE9BYkE7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFJQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFNQSxLQWxEQTtBQW9EQTtBQUNBO0FBRUE7QUFDQTtBQUNBLE9BRkE7QUFJQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFNQSxLQWpFQTtBQW1FQTtBQUFBO0FBQ0E7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFGQTtBQUlBLE9BUEE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFuRUEsR0FEQTtBQThFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQVpBLEdBOUVBOztBQTRGQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQVlBLEdBeEdBOztBQTBHQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGVBRkE7QUFHQSxnQkFIQTtBQUlBLGVBSkE7QUFLQSxpQkFDQTtBQUNBLGVBREE7QUFFQSwyQkFGQTtBQUdBLGtDQUhBO0FBSUEsNkRBSkE7QUFLQSx3RUFMQTtBQU1BLGtCQU5BO0FBT0E7QUFQQSxPQURBLEVBVUE7QUFDQSxlQURBO0FBRUEsNEJBRkE7QUFHQSwyQkFIQTtBQUlBLHdEQUpBO0FBS0Esd0VBTEE7QUFNQSxrQkFOQTtBQU9BO0FBUEEsT0FWQSxFQW1CQTtBQUNBLGVBREE7QUFFQSwyQkFGQTtBQUdBLHNDQUhBO0FBSUEsdUNBSkE7QUFLQSx3RUFMQTtBQU1BLG1CQU5BO0FBT0E7QUFQQSxPQW5CQSxFQTRCQTtBQUNBLGVBREE7QUFFQSw0QkFGQTtBQUdBLCtCQUhBO0FBSUEsa0NBSkE7QUFLQSx3RUFMQTtBQU1BLGtCQU5BO0FBT0E7QUFQQSxPQTVCQSxDQUxBO0FBMkNBLGlCQTNDQTtBQTRDQSxlQUNBLFFBREEsRUFFQSxVQUZBLEVBR0EsVUFIQSxFQUlBLFdBSkEsRUFLQSxZQUxBO0FBNUNBO0FBb0RBOztBQS9KQSxHIiwiZmlsZSI6ImJ1bmRsZS4zOGEzMzU3YTIxYmUwZWU1YzQxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiAvPlxyXG5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPEJvdHRvbU5hdmlnYXRpb24+XHJcbiAgICAgICAgPFRhYlN0cmlwPlxyXG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL2hvbWVcIj48L0ltYWdlPlxyXG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIk1hbGxzXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NldHRpbmdzXCI+PC9JbWFnZT5cclxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDb2luc1wiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxyXG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XHJcbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlVzZXJcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2VhcmNoXCI+PC9JbWFnZT5cclxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxyXG4gICAgICAgIDwvVGFiU3RyaXA+XHJcbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxyXG4gICAgICAgICAgPExpc3RWaWV3IGZvcj1cInFwb24gaW4gcXBvbnNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiPlxyXG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGhlaWdodD1cIjM1MFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJxcG9uLmltYWdlXCIgaGVpZ2h0PVwiMzAwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi50aXRsZVwiIGNsYXNzPVwiaDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi5kZXRhaWxcIiBjbGFzcz1cImJvZHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkNvaW5zOiBcIj48L1NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicXBvbi5jb2luc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwibWFsbCBpbiBtYWxsc1wiIEBpdGVtVGFwPVwib25NYWxsVGFwXCI+XHJcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1hbGwubWFsbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwicmFuZ2UgaW4gcmFuZ2VzXCIgQGl0ZW1UYXA9XCJvblJhbmdlVGFwXCI+XHJcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInJhbmdlWzBdXCI+XHJcbiAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInJhbmdlWzBdXCIgLz5cclxuICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIgfiBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJyYW5nZVsxXVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxyXG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cclxuICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMVwiIGJhY2tncm91bmRDb2xvcj1cIiNFRUVFRUVcIiBmbGV4R3Jvdz1cIjFcIiAvPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMlwiIGJhY2tncm91bmRDb2xvcj1cIiNERERERERcIiBmbGV4R3Jvdz1cIjJcIiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9J2gzJyB0ZXh0PSdMb2dvZmYgLyBMb2dpbicgQHRhcD0nb25Mb2dUYXAnLz5cclxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cclxuICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XHJcbmltcG9ydCBSYWRDYXJ0ZXNpYW5DaGFydCBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L3Z1ZVwiO1xyXG5WdWUudXNlKFJhZENhcnRlc2lhbkNoYXJ0KTtcclxuXHJcbmltcG9ydCBRcG9uRGV0YWlsIGZyb20gXCIuL1Fwb25EZXRhaWxcIjtcclxuaW1wb3J0IFFwb25MaXN0IGZyb20gXCIuL1Fwb25MaXN0XCI7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSBcIi4vTG9naW5QYWdlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCB0YXBwZWQ6IFwiICsgYXJncy5pdGVtLm5hbWUpO1xyXG5cclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uRGV0YWlsLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHRhcHBlZFFwb246IGFyZ3MuaXRlbSwgLy8gdGFwcGVkUHJvZHVjdDogbmFtZSBpbiB0aGUgY2hpbGQgcGFnZVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJ1dHRvblRhcDogYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29uZmlybSh7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybSB0byBwbGFjZSBvcmRlcj9cIixcclxuICAgICAgICBtZXNzYWdlOiBcIlNlbmRpbmcgdG8gaHR0cGJpbi5vcmdcIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdFwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmluQ2FydCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHRoaXMuZmlndXJlcyA9IGRhdGEuanNvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25SYW5nZVRhcDogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgY29uc29sZS5sb2coYXJncy5pdGVtWzBdKTtcclxuICAgICAgY29uc29sZS5sb2coYXJncy5pdGVtWzFdKTtcclxuICAgICAgdmFyIHFwb25zSW5SYW5nZSA9IHRoaXMucXBvbnMuZmlsdGVyKGZ1bmN0aW9uIChxcG9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHFwb24uY29pbnMgPj0gYXJncy5pdGVtWzBdICYmIHFwb24uY29pbnMgPD0gYXJncy5pdGVtWzFdO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUXBvbkxpc3QsIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcXBvbnM6IHFwb25zSW5SYW5nZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25NYWxsVGFwOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICBjb25zb2xlLmxvZyhhcmdzLml0ZW0ubWFsbCk7XHJcblxyXG4gICAgICB2YXIgcXBvbnNJbk1hbGwgPSB0aGlzLnFwb25zLmZpbHRlcihmdW5jdGlvbiAocXBvbikge1xyXG4gICAgICAgIHJldHVybiBxcG9uLm1hbGwgPT0gYXJncy5pdGVtLm1hbGw7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uTGlzdCwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBxcG9uczogcXBvbnNJbk1hbGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9nVGFwOiBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICsgXCIvdXNlci9sb2dvdXRcIik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luUGFnZSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgIHByb3BzOiB7fVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgaW5DYXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIHJldHVybiBwLnF1YW50aXR5ID4gMDtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG90YWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIHN1bSArPSBwLnF1YW50aXR5ICogcC5wcmljZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzdW07XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXN5bmMgbW91bnRlZCgpIHtcclxuICAgIHRoaXMubGFkaWVzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcclxuICAgICAgcmV0dXJuIHAuZGVwYXJ0bWVudCA9PSBcIkxhZGllc1wiO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdlbnRzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcclxuICAgICAgcmV0dXJuIHAuZGVwYXJ0bWVudCA9PSBcIkdlbnRzXCI7XHJcbiAgICB9KTtcclxuICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWwuYmFzZVVybCk7XHJcbiAgICB0aGlzLnFwb25zID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHRoaXMubWFsbHMgPSBnbG9iYWwubWFsbExvYztcclxuICAgIGNvbnNvbGUubG9nKFwicXBvbnNcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnFwb25zKTtcclxuICB9LFxyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcXBvbnM6IFtdLFxyXG4gICAgICBtYWxsczogW10sXHJcbiAgICAgIGxhZGllczogW10sXHJcbiAgICAgIGdlbnRzOiBbXSxcclxuICAgICAgcHJvZHVjdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkdlbnRzXCIsXHJcbiAgICAgICAgICBuYW1lOiBcIkRlbmltIE1lbidzIFNoaXJ0c1wiLFxyXG4gICAgICAgICAgZGVzYzogXCJQYXNzaW9uLCBkZWRpY2F0aW9uLCBoYXJkIHdvcmsgYW5kIGNyZWF0aXZpdHlcIixcclxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvR0FWVlZZQ0dYQy5qcGdcIixcclxuICAgICAgICAgIHByaWNlOiA0NTAsXHJcbiAgICAgICAgICBxdWFudGl0eTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcIjJcIixcclxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiTGFkaWVzXCIsXHJcbiAgICAgICAgICBuYW1lOiBcIlJVTiBIb29kaWVzXCIsXHJcbiAgICAgICAgICBkZXNjOiBcIlRvcC1xdWFsaXR5LCBpbnN0YW50LWZhdm9yaXRlIHN3ZWF0c2hpcnRcIixcclxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvVUhBUURJWVQ2WC5qcGdcIixcclxuICAgICAgICAgIHByaWNlOiA2MDAsXHJcbiAgICAgICAgICBxdWFudGl0eTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcIjNcIixcclxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiR2VudHNcIixcclxuICAgICAgICAgIG5hbWU6IFwiTWVuJ3MgTGlnaHR3ZWlnaHQgQ29hdFwiLFxyXG4gICAgICAgICAgZGVzYzogXCJTaWduYXR1cmUgQnVjayBhcHBsaXF1w6lcIixcclxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvUEpZM1k3MDEwTS5qcGdcIixcclxuICAgICAgICAgIHByaWNlOiAyNTAwLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCI0XCIsXHJcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkxhZGllc1wiLFxyXG4gICAgICAgICAgbmFtZTogXCJTdG9yeSBTdG9yeSBUZWVcIixcclxuICAgICAgICAgIGRlc2M6IFwiVWx0cmEgc29mdCBULXNoaXJ0XCIsXHJcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5zdG9ja3NuYXAuaW8vaW1nLXRodW1icy85NjB3L0dDSjdWVTNQWjAuanBnXCIsXHJcbiAgICAgICAgICBwcmljZTogMzQwLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgZmlndXJlczogW10sXHJcbiAgICAgIHJhbmdlczogW1xyXG4gICAgICAgIFswLCAyOTldLFxyXG4gICAgICAgIFszMDAsIDU5OV0sXHJcbiAgICAgICAgWzYwMCwgODk5XSxcclxuICAgICAgICBbOTAwLCAxMTk5XSxcclxuICAgICAgICBbMTIwMCwgOTk5OV0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmhvbWUtcGFuZWwge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBtYXJnaW46IDE1O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1O1xyXG59XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==