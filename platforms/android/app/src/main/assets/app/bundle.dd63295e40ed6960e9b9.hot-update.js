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
      console.log(args);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFDQSwrQkFEQSxDQUNBOztBQURBO0FBRkE7QUFNQSxLQVhBO0FBYUE7QUFBQTtBQUNBO0FBQ0EsMENBREE7QUFFQSwyQ0FGQTtBQUdBLDZCQUhBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUNBO0FBREEsYUFGQTtBQUtBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0F0QkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FiQTtBQXFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFPQTtBQWhEQSxHQURBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBWkEsR0FwREE7O0FBa0VBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBWUEsR0E5RUE7O0FBZ0ZBO0FBQ0E7QUFDQSxlQURBO0FBRUEsZUFGQTtBQUdBLGdCQUhBO0FBSUEsZUFKQTtBQUtBLGlCQUNBO0FBQ0EsZUFEQTtBQUVBLDJCQUZBO0FBR0Esa0NBSEE7QUFJQSw2REFKQTtBQUtBLHdFQUxBO0FBTUEsa0JBTkE7QUFPQTtBQVBBLE9BREEsRUFVQTtBQUNBLGVBREE7QUFFQSw0QkFGQTtBQUdBLDJCQUhBO0FBSUEsd0RBSkE7QUFLQSx3RUFMQTtBQU1BLGtCQU5BO0FBT0E7QUFQQSxPQVZBLEVBbUJBO0FBQ0EsZUFEQTtBQUVBLDJCQUZBO0FBR0Esc0NBSEE7QUFJQSx1Q0FKQTtBQUtBLHdFQUxBO0FBTUEsbUJBTkE7QUFPQTtBQVBBLE9BbkJBLEVBNEJBO0FBQ0EsZUFEQTtBQUVBLDRCQUZBO0FBR0EsK0JBSEE7QUFJQSxrQ0FKQTtBQUtBLHdFQUxBO0FBTUEsa0JBTkE7QUFPQTtBQVBBLE9BNUJBLENBTEE7QUEyQ0EsaUJBM0NBO0FBNENBO0FBNUNBO0FBOENBOztBQS9IQSxHIiwiZmlsZSI6ImJ1bmRsZS5kZDYzMjk1ZTQwZWQ2OTYwZTliOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiSG9tZVwiIC8+XG5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8Qm90dG9tTmF2aWdhdGlvbj5cbiAgICAgICAgPFRhYlN0cmlwPlxuICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkhvbWVcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL2hvbWVcIj48L0ltYWdlPlxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgIDxUYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIk1hbGxzXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZXR0aW5nc1wiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQ29pbnNcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NlYXJjaFwiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiVXNlclwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2VhcmNoXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgPC9UYWJTdHJpcD5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJxcG9uIGluIHFwb25zXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIj5cbiAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGhlaWdodD1cIjM1MFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwicXBvbi5pbWFnZVwiIGhlaWdodD1cIjMwMFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJxcG9uLnRpdGxlXCIgY2xhc3M9XCJoMVwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwicXBvbi5kZXRhaWxcIiBjbGFzcz1cImJvZHlcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgyXCI+XG4gICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiQ29pbnM6IFwiPjwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicXBvbi5jb2luc1wiIC8+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgPExpc3RWaWV3IGZvcj1cIm1hbGwgaW4gbWFsbHNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1hbGwubWFsbFwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cInJhbmdlIGluIHJhbmdlc1wiIEBpdGVtVGFwPVwib25SYW5nZVRhcFwiPlxuICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJyYW5nZVswXVwiPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInJhbmdlWzBdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIiB+IFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicmFuZ2VbMV1cIiAvPlxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGhlaWdodD1cIjEwMDBweFwiPlxuICAgICAgICAgICAgPFJhZENhcnRlc2lhbkNoYXJ0IHJvdz1cIjBcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTJcIj5cbiAgICAgICAgICAgICAgPEJhclNlcmllc1xuICAgICAgICAgICAgICAgIHYtdGtDYXJ0ZXNpYW5TZXJpZXNcbiAgICAgICAgICAgICAgICA6aXRlbXM9XCJmaWd1cmVzXCJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVByb3BlcnR5PVwibmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWVQcm9wZXJ0eT1cInF1YW50aXR5XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENhdGVnb3JpY2FsQXhpcyB2LXRrQ2FydGVzaWFuSG9yaXpvbnRhbEF4aXMgLz5cbiAgICAgICAgICAgICAgPExpbmVhckF4aXMgdi10a0NhcnRlc2lhblZlcnRpY2FsQXhpcyAvPlxuICAgICAgICAgICAgPC9SYWRDYXJ0ZXNpYW5DaGFydD5cbiAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbmltcG9ydCBSYWRDYXJ0ZXNpYW5DaGFydCBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L3Z1ZVwiO1xuVnVlLnVzZShSYWRDYXJ0ZXNpYW5DaGFydCk7XG5cbmltcG9ydCBRcG9uRGV0YWlsIGZyb20gXCIuL1Fwb25EZXRhaWxcIjtcbmltcG9ydCBRcG9uTGlzdCBmcm9tIFwiLi9RcG9uTGlzdFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgb25JdGVtVGFwOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgY29uc29sZS5sb2coXCJJdGVtIHdpdGggaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIHRhcHBlZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCB0YXBwZWQ6IFwiICsgYXJncy5pdGVtLm5hbWUpO1xuXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFFwb25EZXRhaWwsIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdGFwcGVkUXBvbjogYXJncy5pdGVtLCAvLyB0YXBwZWRQcm9kdWN0OiBuYW1lIGluIHRoZSBjaGlsZCBwYWdlXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25CdXR0b25UYXA6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBjb25maXJtKHtcbiAgICAgICAgdGl0bGU6IFwiQ29uZmlybSB0byBwbGFjZSBvcmRlcj9cIixcbiAgICAgICAgbWVzc2FnZTogXCJTZW5kaW5nIHRvIGh0dHBiaW4ub3JnXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdFwiLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuaW5DYXJ0KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHRoaXMuZmlndXJlcyA9IGRhdGEuanNvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uUmFuZ2VUYXA6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xuICAgICAgdmFyIHFwb25zSW5SYW5nZSA9IHRoaXMucXBvbnM7XG5cbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUXBvbkxpc3QsIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgcXBvbnM6IHFwb25zSW5SYW5nZVxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpbkNhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gcC5xdWFudGl0eSA+IDA7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRvdGFsOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3VtID0gMDtcbiAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICBzdW0gKz0gcC5xdWFudGl0eSAqIHAucHJpY2U7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdW07XG4gICAgfSxcbiAgfSxcbiAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxhZGllcyA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5kZXBhcnRtZW50ID09IFwiTGFkaWVzXCI7XG4gICAgfSk7XG4gICAgdGhpcy5nZW50cyA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5kZXBhcnRtZW50ID09IFwiR2VudHNcIjtcbiAgICB9KTtcbiAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goZ2xvYmFsLmJhc2VVcmwpO1xuICAgIHRoaXMucXBvbnMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHRoaXMubWFsbHMgPSBnbG9iYWwubWFsbExvYztcbiAgICBjb25zb2xlLmxvZyhcInFwb25zXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucXBvbnMpO1xuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHFwb25zOiBbXSxcbiAgICAgIG1hbGxzOiBbXSxcbiAgICAgIGxhZGllczogW10sXG4gICAgICBnZW50czogW10sXG4gICAgICBwcm9kdWN0czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiR2VudHNcIixcbiAgICAgICAgICBuYW1lOiBcIkRlbmltIE1lbidzIFNoaXJ0c1wiLFxuICAgICAgICAgIGRlc2M6IFwiUGFzc2lvbiwgZGVkaWNhdGlvbiwgaGFyZCB3b3JrIGFuZCBjcmVhdGl2aXR5XCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9HQVZWVllDR1hDLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiA0NTAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJMYWRpZXNcIixcbiAgICAgICAgICBuYW1lOiBcIlJVTiBIb29kaWVzXCIsXG4gICAgICAgICAgZGVzYzogXCJUb3AtcXVhbGl0eSwgaW5zdGFudC1mYXZvcml0ZSBzd2VhdHNoaXJ0XCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9VSEFRRElZVDZYLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiA2MDAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJHZW50c1wiLFxuICAgICAgICAgIG5hbWU6IFwiTWVuJ3MgTGlnaHR3ZWlnaHQgQ29hdFwiLFxuICAgICAgICAgIGRlc2M6IFwiU2lnbmF0dXJlIEJ1Y2sgYXBwbGlxdcOpXCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9QSlkzWTcwMTBNLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiAyNTAwLFxuICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICAgIGRlcGFydG1lbnQ6IFwiTGFkaWVzXCIsXG4gICAgICAgICAgbmFtZTogXCJTdG9yeSBTdG9yeSBUZWVcIixcbiAgICAgICAgICBkZXNjOiBcIlVsdHJhIHNvZnQgVC1zaGlydFwiLFxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLnN0b2Nrc25hcC5pby9pbWctdGh1bWJzLzk2MHcvR0NKN1ZVM1BaMC5qcGdcIixcbiAgICAgICAgICBwcmljZTogMzQwLFxuICAgICAgICAgIHF1YW50aXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGZpZ3VyZXM6IFtdLFxuICAgICAgcmFuZ2VzOiBbWzAsIDI5OV0sIFszMDAsIDU5OV0sIFs2MDAsIDg5OV0sIFs5MDAsIDExOTldLCBbMTIwMCwgOTk5OV1dLFxuICAgIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9tZS1wYW5lbCB7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjA7XG4gIG1hcmdpbjogMTU7XG59XG5cbi5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE1O1xufVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9