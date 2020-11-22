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
      var qponsInRange = this.qpons;
      this.$navigateTo(_QponList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        transition: {},
        props: {
          qpons: qponsInRange
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFDQSwrQkFEQSxDQUNBOztBQURBO0FBRkE7QUFNQSxLQVhBO0FBYUE7QUFBQTtBQUNBO0FBQ0EsMENBREE7QUFFQSwyQ0FGQTtBQUdBLDZCQUhBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUNBO0FBREEsYUFGQTtBQUtBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0F0QkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FiQTtBQXFDQTtBQUNBO0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUEvQ0EsR0FEQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQVpBLEdBbkRBOztBQWlFQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQVlBLEdBN0VBOztBQStFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGVBRkE7QUFHQSxnQkFIQTtBQUlBLGVBSkE7QUFLQSxpQkFDQTtBQUNBLGVBREE7QUFFQSwyQkFGQTtBQUdBLGtDQUhBO0FBSUEsNkRBSkE7QUFLQSx3RUFMQTtBQU1BLGtCQU5BO0FBT0E7QUFQQSxPQURBLEVBVUE7QUFDQSxlQURBO0FBRUEsNEJBRkE7QUFHQSwyQkFIQTtBQUlBLHdEQUpBO0FBS0Esd0VBTEE7QUFNQSxrQkFOQTtBQU9BO0FBUEEsT0FWQSxFQW1CQTtBQUNBLGVBREE7QUFFQSwyQkFGQTtBQUdBLHNDQUhBO0FBSUEsdUNBSkE7QUFLQSx3RUFMQTtBQU1BLG1CQU5BO0FBT0E7QUFQQSxPQW5CQSxFQTRCQTtBQUNBLGVBREE7QUFFQSw0QkFGQTtBQUdBLCtCQUhBO0FBSUEsa0NBSkE7QUFLQSx3RUFMQTtBQU1BLGtCQU5BO0FBT0E7QUFQQSxPQTVCQSxDQUxBO0FBMkNBLGlCQTNDQTtBQTRDQTtBQTVDQTtBQThDQTs7QUE5SEEsRyIsImZpbGUiOiJidW5kbGUuMGUzNGM3MDRjYjc5ZDA2NThjNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiAvPlxuXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPEJvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgIDxUYWJTdHJpcD5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9ob21lXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJNYWxsc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2V0dGluZ3NcIj48L0ltYWdlPlxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkNvaW5zXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlVzZXJcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NlYXJjaFwiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgIDwvVGFiU3RyaXA+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwicXBvbiBpbiBxcG9uc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCIzNTBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInFwb24uaW1hZ2VcIiBoZWlnaHQ9XCIzMDBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi50aXRsZVwiIGNsYXNzPVwiaDFcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInFwb24uZGV0YWlsXCIgY2xhc3M9XCJib2R5XCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkNvaW5zOiBcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInFwb24uY29pbnNcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJtYWxsIGluIG1hbGxzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtYWxsLm1hbGxcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJyYW5nZSBpbiByYW5nZXNcIiBAaXRlbVRhcD1cIm9uUmFuZ2VUYXBcIj5cbiAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicmFuZ2VbMF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJyYW5nZVswXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIgfiBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInJhbmdlWzFdXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIipcIiBoZWlnaHQ9XCIxMDAwcHhcIj5cbiAgICAgICAgICAgIDxSYWRDYXJ0ZXNpYW5DaGFydCByb3c9XCIwXCIgc3R5bGU9XCJmb250LXNpemU6IDEyXCI+XG4gICAgICAgICAgICAgIDxCYXJTZXJpZXNcbiAgICAgICAgICAgICAgICB2LXRrQ2FydGVzaWFuU2VyaWVzXG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiZmlndXJlc1wiXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlQcm9wZXJ0eT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHk9XCJxdWFudGl0eVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDYXRlZ29yaWNhbEF4aXMgdi10a0NhcnRlc2lhbkhvcml6b250YWxBeGlzIC8+XG4gICAgICAgICAgICAgIDxMaW5lYXJBeGlzIHYtdGtDYXJ0ZXNpYW5WZXJ0aWNhbEF4aXMgLz5cbiAgICAgICAgICAgIDwvUmFkQ2FydGVzaWFuQ2hhcnQ+XG4gICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG5pbXBvcnQgUmFkQ2FydGVzaWFuQ2hhcnQgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC92dWVcIjtcblZ1ZS51c2UoUmFkQ2FydGVzaWFuQ2hhcnQpO1xuXG5pbXBvcnQgUXBvbkRldGFpbCBmcm9tIFwiLi9RcG9uRGV0YWlsXCI7XG5pbXBvcnQgUXBvbkxpc3QgZnJvbSBcIi4vUXBvbkxpc3RcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIG9uSXRlbVRhcDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgdGFwcGVkOiBcIiArIGFyZ3MuaXRlbS5uYW1lKTtcblxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uRGV0YWlsLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHRhcHBlZFFwb246IGFyZ3MuaXRlbSwgLy8gdGFwcGVkUHJvZHVjdDogbmFtZSBpbiB0aGUgY2hpbGQgcGFnZVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uQnV0dG9uVGFwOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29uZmlybSh7XG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gdG8gcGxhY2Ugb3JkZXI/XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2VuZGluZyB0byBodHRwYmluLm9yZ1wiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIiwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmluQ2FydCksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICB0aGlzLmZpZ3VyZXMgPSBkYXRhLmpzb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblJhbmdlVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICB2YXIgcXBvbnNJblJhbmdlID0gdGhpcy5xcG9ucztcblxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uTGlzdCwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBxcG9uczogcXBvbnNJblJhbmdlXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGluQ2FydDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBwLnF1YW50aXR5ID4gMDtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdG90YWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHN1bSArPSBwLnF1YW50aXR5ICogcC5wcmljZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9LFxuICB9LFxuICBhc3luYyBtb3VudGVkKCkge1xuICAgIHRoaXMubGFkaWVzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwLmRlcGFydG1lbnQgPT0gXCJMYWRpZXNcIjtcbiAgICB9KTtcbiAgICB0aGlzLmdlbnRzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwLmRlcGFydG1lbnQgPT0gXCJHZW50c1wiO1xuICAgIH0pO1xuICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWwuYmFzZVVybCk7XG4gICAgdGhpcy5xcG9ucyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdGhpcy5tYWxscyA9IGdsb2JhbC5tYWxsTG9jO1xuICAgIGNvbnNvbGUubG9nKFwicXBvbnNcIik7XG4gICAgY29uc29sZS5sb2codGhpcy5xcG9ucyk7XG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXBvbnM6IFtdLFxuICAgICAgbWFsbHM6IFtdLFxuICAgICAgbGFkaWVzOiBbXSxcbiAgICAgIGdlbnRzOiBbXSxcbiAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJHZW50c1wiLFxuICAgICAgICAgIG5hbWU6IFwiRGVuaW0gTWVuJ3MgU2hpcnRzXCIsXG4gICAgICAgICAgZGVzYzogXCJQYXNzaW9uLCBkZWRpY2F0aW9uLCBoYXJkIHdvcmsgYW5kIGNyZWF0aXZpdHlcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5zdG9ja3NuYXAuaW8vaW1nLXRodW1icy85NjB3L0dBVlZWWUNHWEMuanBnXCIsXG4gICAgICAgICAgcHJpY2U6IDQ1MCxcbiAgICAgICAgICBxdWFudGl0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkxhZGllc1wiLFxuICAgICAgICAgIG5hbWU6IFwiUlVOIEhvb2RpZXNcIixcbiAgICAgICAgICBkZXNjOiBcIlRvcC1xdWFsaXR5LCBpbnN0YW50LWZhdm9yaXRlIHN3ZWF0c2hpcnRcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5zdG9ja3NuYXAuaW8vaW1nLXRodW1icy85NjB3L1VIQVFESVlUNlguanBnXCIsXG4gICAgICAgICAgcHJpY2U6IDYwMCxcbiAgICAgICAgICBxdWFudGl0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkdlbnRzXCIsXG4gICAgICAgICAgbmFtZTogXCJNZW4ncyBMaWdodHdlaWdodCBDb2F0XCIsXG4gICAgICAgICAgZGVzYzogXCJTaWduYXR1cmUgQnVjayBhcHBsaXF1w6lcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5zdG9ja3NuYXAuaW8vaW1nLXRodW1icy85NjB3L1BKWTNZNzAxME0uanBnXCIsXG4gICAgICAgICAgcHJpY2U6IDI1MDAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJMYWRpZXNcIixcbiAgICAgICAgICBuYW1lOiBcIlN0b3J5IFN0b3J5IFRlZVwiLFxuICAgICAgICAgIGRlc2M6IFwiVWx0cmEgc29mdCBULXNoaXJ0XCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9HQ0o3VlUzUFowLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiAzNDAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZmlndXJlczogW10sXG4gICAgICByYW5nZXM6IFtbMCwgMjk5XSwgWzMwMCwgNTk5XSwgWzYwMCwgODk5XSwgWzkwMCwgMTE5OV0sIFsxMjAwLCA5OTk5XV0sXG4gICAgfTtcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ob21lLXBhbmVsIHtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMDtcbiAgbWFyZ2luOiAxNTtcbn1cblxuLmRlc2NyaXB0aW9uLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTU7XG59XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=