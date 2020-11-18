webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QponDetail.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tappedQpon"],
  // Instance property
  methods: {
    onRedeemTap() {
      return _asyncToGenerator(function* () {
        console.log("redeem tapped");
        var result = yield confirm({
          title: "Are you sure",
          message: "To redeem this coupon?",
          okButtonText: "Yes",
          cancelButtonText: "No"
        });
        console.log(result);

        if (result) {
          console.log("YES");
          var res = yield fetch(global.baseUrl + "/qpon/" + tappedQpon.id);
          console.log(res);

          if (res.ok) {
            alert("Redeem successfully");
          } else {
            alert(res.body);
          }
        }
      })();
    },

    onAddressTap() {}

  },

  data() {
    return {
      textFieldValue: this.tappedQpon.quantity || ""
    };
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0EsdUJBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDJDQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBO0FBTUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW1CQSxLQXBCQTs7QUFxQkEsb0JBRUE7O0FBdkJBLEdBSEE7O0FBNkJBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBakNBLEciLCJmaWxlIjoiYnVuZGxlLjEwMzBkNmFkYTFjODc4NTQ1MGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwidGFwcGVkUXBvbi5pbWFnZVwiIGhlaWdodD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0RmlsbFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm0tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMVwiIDp0ZXh0PVwidGFwcGVkUXBvbi50aXRsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYm9keVwiIDp0ZXh0PVwidGFwcGVkUXBvbi5kZXRhaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJNYWxsOiBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInRhcHBlZFFwb24ubWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIsIENvaW5zOiBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInRhcHBlZFFwb24uY29pbnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIkV4cGlyeSBEYXRlOiBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cInRhcHBlZFFwb24uZXhwaXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCIgdGV4dD1cIlJlZGVlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJvblJlZGVlbVRhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImgyIC1wcmltYXJ5IC1yb3VuZGVkLWxnXCIgdGV4dD1cIkFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAdGFwPVwib25BZGRyZXNzVGFwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1widGFwcGVkUXBvblwiXSwgLy8gSW5zdGFuY2UgcHJvcGVydHlcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBhc3luYyBvblJlZGVlbVRhcCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVkZWVtIHRhcHBlZFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBjb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRvIHJlZGVlbSB0aGlzIGNvdXBvbj9cIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZRVNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICsgXCIvcXBvbi9cIiArIHRhcHBlZFFwb24uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlJlZGVlbSBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25BZGRyZXNzVGFwKCkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRWYWx1ZTogdGhpcy50YXBwZWRRcG9uLnF1YW50aXR5IHx8IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9