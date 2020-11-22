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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHNCQURBO0FBRUE7QUFDQSwrQkFEQSxDQUNBOztBQURBO0FBRkE7QUFNQSxLQVhBO0FBYUE7QUFBQTtBQUNBO0FBQ0EsMENBREE7QUFFQSwyQ0FGQTtBQUdBLDZCQUhBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUNBO0FBREEsYUFGQTtBQUtBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0F0QkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FiQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBakRBLEdBREE7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFaQSxHQXJEQTs7QUFtRUE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFZQSxHQS9FQTs7QUFpRkE7QUFDQTtBQUNBLGVBREE7QUFFQSxlQUZBO0FBR0EsZ0JBSEE7QUFJQSxlQUpBO0FBS0EsaUJBQ0E7QUFDQSxlQURBO0FBRUEsMkJBRkE7QUFHQSxrQ0FIQTtBQUlBLDZEQUpBO0FBS0Esd0VBTEE7QUFNQSxrQkFOQTtBQU9BO0FBUEEsT0FEQSxFQVVBO0FBQ0EsZUFEQTtBQUVBLDRCQUZBO0FBR0EsMkJBSEE7QUFJQSx3REFKQTtBQUtBLHdFQUxBO0FBTUEsa0JBTkE7QUFPQTtBQVBBLE9BVkEsRUFtQkE7QUFDQSxlQURBO0FBRUEsMkJBRkE7QUFHQSxzQ0FIQTtBQUlBLHVDQUpBO0FBS0Esd0VBTEE7QUFNQSxtQkFOQTtBQU9BO0FBUEEsT0FuQkEsRUE0QkE7QUFDQSxlQURBO0FBRUEsNEJBRkE7QUFHQSwrQkFIQTtBQUlBLGtDQUpBO0FBS0Esd0VBTEE7QUFNQSxrQkFOQTtBQU9BO0FBUEEsT0E1QkEsQ0FMQTtBQTJDQSxpQkEzQ0E7QUE0Q0E7QUE1Q0E7QUE4Q0E7O0FBaElBLEciLCJmaWxlIjoiYnVuZGxlLmQwMTI2NzgxYzBkMDMyOGQzNGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJIb21lXCIgLz5cblxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICA8VGFiU3RyaXA+XG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSG9tZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vaG9tZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiTWFsbHNcIj48L0xhYmVsPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NldHRpbmdzXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDb2luc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2VhcmNoXCI+PC9JbWFnZT5cbiAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJVc2VyXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxuICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICA8L1RhYlN0cmlwPlxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgPExpc3RWaWV3IGZvcj1cInFwb24gaW4gcXBvbnNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiPlxuICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgaGVpZ2h0PVwiMzUwXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJxcG9uLmltYWdlXCIgaGVpZ2h0PVwiMzAwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInFwb24udGl0bGVcIiBjbGFzcz1cImgxXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJxcG9uLmRldGFpbFwiIGNsYXNzPVwiYm9keVwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJDb2luczogXCI+PC9TcGFuPlxuICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJxcG9uLmNvaW5zXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwibWFsbCBpbiBtYWxsc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCI+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWFsbC5tYWxsXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwicmFuZ2UgaW4gcmFuZ2VzXCIgQGl0ZW1UYXA9XCJvblJhbmdlVGFwXCI+XG4gICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInJhbmdlWzBdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwicmFuZ2VbMF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiIH4gXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJyYW5nZVsxXVwiIC8+XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIqXCIgaGVpZ2h0PVwiMTAwMHB4XCI+XG4gICAgICAgICAgICA8UmFkQ2FydGVzaWFuQ2hhcnQgcm93PVwiMFwiIHN0eWxlPVwiZm9udC1zaXplOiAxMlwiPlxuICAgICAgICAgICAgICA8QmFyU2VyaWVzXG4gICAgICAgICAgICAgICAgdi10a0NhcnRlc2lhblNlcmllc1xuICAgICAgICAgICAgICAgIDppdGVtcz1cImZpZ3VyZXNcIlxuICAgICAgICAgICAgICAgIGNhdGVnb3J5UHJvcGVydHk9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3BlcnR5PVwicXVhbnRpdHlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q2F0ZWdvcmljYWxBeGlzIHYtdGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpcyAvPlxuICAgICAgICAgICAgICA8TGluZWFyQXhpcyB2LXRrQ2FydGVzaWFuVmVydGljYWxBeGlzIC8+XG4gICAgICAgICAgICA8L1JhZENhcnRlc2lhbkNoYXJ0PlxuICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuaW1wb3J0IFJhZENhcnRlc2lhbkNoYXJ0IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlXCI7XG5WdWUudXNlKFJhZENhcnRlc2lhbkNoYXJ0KTtcblxuaW1wb3J0IFFwb25EZXRhaWwgZnJvbSBcIi4vUXBvbkRldGFpbFwiO1xuaW1wb3J0IFFwb25MaXN0IGZyb20gXCIuL1Fwb25MaXN0XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gd2l0aCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgdGFwcGVkXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IHRhcHBlZDogXCIgKyBhcmdzLml0ZW0ubmFtZSk7XG5cbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUXBvbkRldGFpbCwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICB0YXBwZWRRcG9uOiBhcmdzLml0ZW0sIC8vIHRhcHBlZFByb2R1Y3Q6IG5hbWUgaW4gdGhlIGNoaWxkIHBhZ2VcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkJ1dHRvblRhcDogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGNvbmZpcm0oe1xuICAgICAgICB0aXRsZTogXCJDb25maXJtIHRvIHBsYWNlIG9yZGVyP1wiLFxuICAgICAgICBtZXNzYWdlOiBcIlNlbmRpbmcgdG8gaHR0cGJpbi5vcmdcIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9odHRwYmluLm9yZy9wb3N0XCIsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5pbkNhcnQpLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgdGhpcy5maWd1cmVzID0gZGF0YS5qc29uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25SYW5nZVRhcDogZnVuY3Rpb24oYXJncykge1xuICAgICAgY29uc29sZS5sb2coYXJncy5pdGVtWzBdKTtcbiAgICAgIGNvbnNvbGUubG9nKGFyZ3MuaXRlbVsxXSk7XG4gICAgICB2YXIgcXBvbnNJblJhbmdlID0gdGhpcy5xcG9ucztcblxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRcG9uTGlzdCwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7fSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBxcG9uczogcXBvbnNJblJhbmdlXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGluQ2FydDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiBwLnF1YW50aXR5ID4gMDtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdG90YWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHN1bSArPSBwLnF1YW50aXR5ICogcC5wcmljZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9LFxuICB9LFxuICBhc3luYyBtb3VudGVkKCkge1xuICAgIHRoaXMubGFkaWVzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwLmRlcGFydG1lbnQgPT0gXCJMYWRpZXNcIjtcbiAgICB9KTtcbiAgICB0aGlzLmdlbnRzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwLmRlcGFydG1lbnQgPT0gXCJHZW50c1wiO1xuICAgIH0pO1xuICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWwuYmFzZVVybCk7XG4gICAgdGhpcy5xcG9ucyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgdGhpcy5tYWxscyA9IGdsb2JhbC5tYWxsTG9jO1xuICAgIGNvbnNvbGUubG9nKFwicXBvbnNcIik7XG4gICAgY29uc29sZS5sb2codGhpcy5xcG9ucyk7XG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXBvbnM6IFtdLFxuICAgICAgbWFsbHM6IFtdLFxuICAgICAgbGFkaWVzOiBbXSxcbiAgICAgIGdlbnRzOiBbXSxcbiAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJHZW50c1wiLFxuICAgICAgICAgIG5hbWU6IFwiRGVuaW0gTWVuJ3MgU2hpcnRzXCIsXG4gICAgICAgICAgZGVzYzogXCJQYXNzaW9uLCBkZWRpY2F0aW9uLCBoYXJkIHdvcmsgYW5kIGNyZWF0aXZpdHlcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5zdG9ja3NuYXAuaW8vaW1nLXRodW1icy85NjB3L0dBVlZWWUNHWEMuanBnXCIsXG4gICAgICAgICAgcHJpY2U6IDQ1MCxcbiAgICAgICAgICBxdWFudGl0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkxhZGllc1wiLFxuICAgICAgICAgIG5hbWU6IFwiUlVOIEhvb2RpZXNcIixcbiAgICAgICAgICBkZXNjOiBcIlRvcC1xdWFsaXR5LCBpbnN0YW50LWZhdm9yaXRlIHN3ZWF0c2hpcnRcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5zdG9ja3NuYXAuaW8vaW1nLXRodW1icy85NjB3L1VIQVFESVlUNlguanBnXCIsXG4gICAgICAgICAgcHJpY2U6IDYwMCxcbiAgICAgICAgICBxdWFudGl0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgICBkZXBhcnRtZW50OiBcIkdlbnRzXCIsXG4gICAgICAgICAgbmFtZTogXCJNZW4ncyBMaWdodHdlaWdodCBDb2F0XCIsXG4gICAgICAgICAgZGVzYzogXCJTaWduYXR1cmUgQnVjayBhcHBsaXF1w6lcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5zdG9ja3NuYXAuaW8vaW1nLXRodW1icy85NjB3L1BKWTNZNzAxME0uanBnXCIsXG4gICAgICAgICAgcHJpY2U6IDI1MDAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgICAgZGVwYXJ0bWVudDogXCJMYWRpZXNcIixcbiAgICAgICAgICBuYW1lOiBcIlN0b3J5IFN0b3J5IFRlZVwiLFxuICAgICAgICAgIGRlc2M6IFwiVWx0cmEgc29mdCBULXNoaXJ0XCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uc3RvY2tzbmFwLmlvL2ltZy10aHVtYnMvOTYwdy9HQ0o3VlUzUFowLmpwZ1wiLFxuICAgICAgICAgIHByaWNlOiAzNDAsXG4gICAgICAgICAgcXVhbnRpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZmlndXJlczogW10sXG4gICAgICByYW5nZXM6IFtbMCwgMjk5XSwgWzMwMCwgNTk5XSwgWzYwMCwgODk5XSwgWzkwMCwgMTE5OV0sIFsxMjAwLCA5OTk5XV0sXG4gICAgfTtcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ob21lLXBhbmVsIHtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMDtcbiAgbWFyZ2luOiAxNTtcbn1cblxuLmRlc2NyaXB0aW9uLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTU7XG59XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=