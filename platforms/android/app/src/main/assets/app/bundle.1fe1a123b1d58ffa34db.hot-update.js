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
      var qponsInRange = qpons;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFDQSwrQkFEQSxDQUNBOztBQURBO0FBRkE7QUFNQSxLQVhBO0FBYUE7QUFBQTtBQUNBO0FBQ0EsMENBREE7QUFFQSwyQ0FGQTtBQUdBLDZCQUhBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUNBO0FBREEsYUFGQTtBQUtBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0F0QkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FiQTtBQXFDQTtBQUNBO0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUEvQ0EsR0FEQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQVpBLEdBbkRBOztBQWlFQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQVlBLEdBN0VBOztBQStFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGVBRkE7QUFHQSxnQkFIQTtBQUlBLGVBSkE7QUFLQSxpQkFDQTtBQUNBLGVBREE7QUFFQSwyQkFGQTtBQUdBLGtDQUhBO0FBSUEsNkRBSkE7QUFLQSx3RUFMQTtBQU1BLGtCQU5BO0FBT0E7QUFQQSxPQURBLEVBVUE7QUFDQSxlQURBO0FBRUEsNEJBRkE7QUFHQSwyQkFIQTtBQUlBLHdEQUpBO0FBS0Esd0VBTEE7QUFNQSxrQkFOQTtBQU9BO0FBUEEsT0FWQSxFQW1CQTtBQUNBLGVBREE7QUFFQSwyQkFGQTtBQUdBLHNDQUhBO0FBSUEsdUNBSkE7QUFLQSx3RUFMQTtBQU1BLG1CQU5BO0FBT0E7QUFQQSxPQW5CQSxFQTRCQTtBQUNBLGVBREE7QUFFQSw0QkFGQTtBQUdBLCtCQUhBO0FBSUEsa0NBSkE7QUFLQSx3RUFMQTtBQU1BLGtCQU5BO0FBT0E7QUFQQSxPQTVCQSxDQUxBO0FBMkNBLGlCQTNDQTtBQTRDQTtBQTVDQTtBQThDQTs7QUE5SEEsRyIsImZpbGUiOiJidW5kbGUuMWZlMWExMjNiMWQ1OGZmYTM0ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiAvPlxuXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPEJvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgIDxUYWJTdHJpcD5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9ob21lXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJNYWxsc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2V0dGluZ3NcIj48L0ltYWdlPlxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkNvaW5zXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlVzZXJcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NlYXJjaFwiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgIDwvVGFiU3RyaXA+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwicXBvbiBpbiBxcG9uc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBoZWlnaHQ9XCIzNTBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInFwb24uaW1hZ2VcIiBoZWlnaHQ9XCIzMDBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi50aXRsZVwiIGNsYXNzPVwiaDFcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInFwb24uZGV0YWlsXCIgY2xhc3M9XCJib2R5XCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkNvaW5zOiBcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInFwb24uY29pbnNcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJtYWxsIGluIG1hbGxzXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtYWxsLm1hbGxcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJyYW5nZSBpbiByYW5nZXNcIiBAaXRlbVRhcD1cIm9uUmFuZ2VUYXBcIj5cbiAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicmFuZ2VbMF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJyYW5nZVswXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIgfiBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInJhbmdlWzFdXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIipcIiBoZWlnaHQ9XCIxMDAwcHhcIj5cbiAgICAgICAgICAgIDxSYWRDYXJ0ZXNpYW5DaGFydCByb3c9XCIwXCIgc3R5bGU9XCJmb250LXNpemU6IDEyXCI+XG4gICAgICAgICAgICAgIDxCYXJTZXJpZXNcbiAgICAgICAgICAgICAgICB2LXRrQ2FydGVzaWFuU2VyaWVzXG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiZmlndXJlc1wiXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlQcm9wZXJ0eT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHk9XCJxdWFudGl0eVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDYXRlZ29yaWNhbEF4aXMgdi10a0NhcnRlc2lhbkhvcml6b250YWxBeGlzIC8+XG4gICAgICAgICAgICAgIDxMaW5lYXJBeGlzIHYtdGtDYXJ0ZXNpYW5WZXJ0aWNhbEF4aXMgLz5cbiAgICAgICAgICAgIDwvUmFkQ2FydGVzaWFuQ2hhcnQ+XG4gICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG5pbXBvcnQgUmFkQ2FydGVzaWFuQ2hhcnQgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC92dWVcIjtcblZ1ZS51c2UoUmFkQ2FydGVzaWFuQ2hhcnQpO1xuXG5pbXBvcnQgUXBvbkRldGFpbCBmcm9tIFwiLi9RcG9uRGV0YWlsXCI7XG5pbXBvcnQgUXBvbkxpc3QgZnJvbSBcIi4vUXBvbkxpc3RcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIG9uSXRlbVRhcDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgdGFwcGVkOiBcIiArIGFyZ3MuaXRlbS5uYW1lKTtcblxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uRGV0YWlsLCB7XG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHRhcHBlZFFwb246IGFyZ3MuaXRlbSwgLy8gdGFwcGVkUHJvZHVjdDogbmFtZSBpbiB0aGUgY2hpbGQgcGFnZVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uQnV0dG9uVGFwOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29uZmlybSh7XG4gICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gdG8gcGxhY2Ugb3JkZXI/XCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiU2VuZGluZyB0byBodHRwYmluLm9yZ1wiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIiwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmluQ2FydCksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICB0aGlzLmZpZ3VyZXMgPSBkYXRhLmpzb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblJhbmdlVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICB2YXIgcXBvbnNJblJhbmdlID0gcXBvbnM7XG5cbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUXBvbkxpc3QsIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgcXBvbnM6IHFwb25zSW5SYW5nZVxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpbkNhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gcC5xdWFudGl0eSA+IDA7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRvdGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3VtID0gMDtcbiAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICBzdW0gKz0gcC5xdWFudGl0eSAqIHAucHJpY2U7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdW07XG4gICAgfSxcbiAgfSxcbiAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxhZGllcyA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5kZXBhcnRtZW50ID09IFwiTGFkaWVzXCI7XG4gICAgfSk7XG4gICAgdGhpcy5nZW50cyA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5kZXBhcnRtZW50ID09IFwiR2VudHNcIjtcbiAgICB9KTtcbiAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goZ2xvYmFsLmJhc2VVcmwpO1xuICAgIHRoaXMucXBvbnMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHRoaXMubWFsbHMgPSBnbG9iYWwubWFsbExvYztcbiAgICBjb25zb2xlLmxvZyhcInFwb25zXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucXBvbnMpO1xuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHFwb25zOiBbXSxcbiAgICAgIG1hbGxzOiBbXSxcbiAgICAgIGxhZGllczogW10sXG4gICAgICBnZW50czogW10sXG4gICAgICBwcm9kdWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiR2VudHNcIixcbiAgICAgICAgICBuYW1lOiBcIkRlbmltIE1lbidzIFNoaXJ0c1wiLFxuICAgICAgICAgIGRlc2M6IFwiUGFzc2lvbiwgZGVkaWNhdGlvbiwgaGFyZCB3b3JrIGFuZCBjcmVhdGl2aXR5XCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9HQVZWVllDR1hDLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiA0NTAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJMYWRpZXNcIixcbiAgICAgICAgICBuYW1lOiBcIlJVTiBIb29kaWVzXCIsXG4gICAgICAgICAgZGVzYzogXCJUb3AtcXVhbGl0eSwgaW5zdGFudC1mYXZvcml0ZSBzd2VhdHNoaXJ0XCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9VSEFRRElZVDZYLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiA2MDAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJHZW50c1wiLFxuICAgICAgICAgIG5hbWU6IFwiTWVuJ3MgTGlnaHR3ZWlnaHQgQ29hdFwiLFxuICAgICAgICAgIGRlc2M6IFwiU2lnbmF0dXJlIEJ1Y2sgYXBwbGlxdcOpXCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9QSlkzWTcwMTBNLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiAyNTAwLFxuICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiTGFkaWVzXCIsXG4gICAgICAgICAgbmFtZTogXCJTdG9yeSBTdG9yeSBUZWVcIixcbiAgICAgICAgICBkZXNjOiBcIlVsdHJhIHNvZnQgVC1zaGlydFwiLFxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvR0NKN1ZVM1BaMC5qcGdcIixcbiAgICAgICAgICBwcmljZTogMzQwLFxuICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGZpZ3VyZXM6IFtdLFxuICAgICAgcmFuZ2VzOiBbWzAsIDI5OV0sIFszMDAsIDU5OV0sIFs2MDAsIDg5OV0sIFs5MDAsIDExOTldLCBbMTIwMCwgOTk5OV1dLFxuICAgIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9tZS1wYW5lbCB7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjA7XG4gIG1hcmdpbjogMTU7XG59XG5cbi5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE1O1xufVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9