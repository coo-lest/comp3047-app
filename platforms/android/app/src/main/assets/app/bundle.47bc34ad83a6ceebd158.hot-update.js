webpackHotUpdate("bundle",{

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

    onAddressTap: function onAddressTap() {
      var mallObj = global.mallLoc.filter(function (m) {
        return m.mall = this.tappedQpon;
      }.bind(this))[0];
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Fwb25EZXRhaWwudnVlPzUzODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDJDQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWxCQTtBQW1CQSxLQXBCQTs7QUFzQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxDQUVBLElBRkEsQ0FFQSxJQUZBLEdBRUEsQ0FGQTtBQUdBO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBaENBLEdBSEE7O0FBc0NBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBMUNBLEc7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0Esa0NBQWtDLFNBQVMsaUJBQWlCLEVBQUU7QUFDOUQsa0NBQWtDLFNBQVMsNEJBQTRCLEVBQUU7QUFDekUsa0NBQWtDLFNBQVMsb0JBQW9CLEVBQUU7QUFDakUsa0NBQWtDLFNBQVMsNkJBQTZCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQSxrQ0FBa0MsU0FBUyx3QkFBd0IsRUFBRTtBQUNyRSxrQ0FBa0MsU0FBUyw4QkFBOEIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3Qyx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS40N2JjMzRhZDgzYTZjZWViZDE1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICA8SW1hZ2UgOnNyYz1cInRhcHBlZFFwb24uaW1hZ2VcIiBoZWlnaHQ9XCIzMDBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XHJcblxyXG4gICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtLTEwXCI+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMVwiIDp0ZXh0PVwidGFwcGVkUXBvbi50aXRsZVwiIC8+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJib2R5XCIgOnRleHQ9XCJ0YXBwZWRRcG9uLmRldGFpbFwiIC8+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiPlxyXG4gICAgICAgICAgICA8U3BhbiB0ZXh0PVwiTWFsbDogXCIgLz5cclxuICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJ0YXBwZWRRcG9uLm1hbGxcIiAvPlxyXG4gICAgICAgICAgICA8U3BhbiB0ZXh0PVwiLCBDb2luczogXCIgLz5cclxuICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJ0YXBwZWRRcG9uLmNvaW5zXCIgLz5cclxuICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiPlxyXG4gICAgICAgICAgICA8U3BhbiB0ZXh0PVwiRXhwaXJ5IERhdGU6IFwiIC8+XHJcbiAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5leHBpcmVcIiAvPlxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICB0ZXh0PVwiUmVkZWVtXCJcclxuICAgICAgICAgICAgQHRhcD1cIm9uUmVkZWVtVGFwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICB0ZXh0PVwiQWRkcmVzc1wiXHJcbiAgICAgICAgICAgIEB0YXA9XCJvbkFkZHJlc3NUYXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBNYXBQYWdlIGZyb20gXCIuL01hcFBhZ2UudnVlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1widGFwcGVkUXBvblwiXSwgLy8gSW5zdGFuY2UgcHJvcGVydHlcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgb25SZWRlZW1UYXAoKSB7XHJcbiAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBjb25maXJtKHtcclxuICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmVcIixcclxuICAgICAgICBtZXNzYWdlOiBcIlRvIHJlZGVlbSB0aGlzIGNvdXBvbj9cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWwuYmFzZVVybCArIFwiL3Fwb24vXCIgKyB0aGlzLnRhcHBlZFFwb24uaWQsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgYWxlcnQoeyB0aXRsZTogXCJSZWRlZW0gc3VjY2Vzc2Z1bGx5XCIsIG9rQnV0dG9uVGV4dDogXCJPS1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzLnN0YXR1cyA9PSA0MDMpIHtcclxuICAgICAgICAgIGFsZXJ0KHsgdGl0bGU6IFwiUGxlYXNlIGxvZ2luXCIsIG9rQnV0dG9uVGV4dDogXCJPS1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCh7IHRpdGxlOiByZXMuYm9keSwgb2tCdXR0b25UZXh0OiBcIk9LXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQWRkcmVzc1RhcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBtYWxsT2JqID0gZ2xvYmFsLm1hbGxMb2MuZmlsdGVyKGZ1bmN0aW9uKG0pIHtcclxuICAgICAgICAgIHJldHVybiBtLm1hbGwgPSB0aGlzLnRhcHBlZFFwb247XHJcbiAgICAgIH0uYmluZCh0aGlzKSlbMF07XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTWFwUGFnZSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBxcG9uTWFsbDogdGhpcy50YXBwZWRRcG9uLm1hbGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0ZXh0RmllbGRWYWx1ZTogdGhpcy50YXBwZWRRcG9uLnF1YW50aXR5IHx8IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBfdm0udGFwcGVkUXBvbi5pbWFnZSxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm0tMTBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0udGFwcGVkUXBvbi50aXRsZSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS50YXBwZWRRcG9uLmRldGFpbCB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaDJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJNYWxsOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS50YXBwZWRRcG9uLm1hbGwgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIiwgQ29pbnM6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLnRhcHBlZFFwb24uY29pbnMgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIkV4cGlyeSBEYXRlOiBcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS50YXBwZWRRcG9uLmV4cGlyZSB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUmVkZWVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25SZWRlZW1UYXAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQWRkcmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uQWRkcmVzc1RhcCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==