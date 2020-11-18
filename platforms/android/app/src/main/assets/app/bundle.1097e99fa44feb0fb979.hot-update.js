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

        if (result) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0EsdUJBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDJDQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBOztBQU1BO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBaUJBLEtBbEJBOztBQW1CQSxvQkFFQTs7QUFyQkEsR0FIQTs7QUEyQkE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUEvQkEsRyIsImZpbGUiOiJidW5kbGUuMTA5N2U5OWZhNDRmZWIwZmI5NzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJ0YXBwZWRRcG9uLmltYWdlXCIgaGVpZ2h0PVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgxXCIgOnRleHQ9XCJ0YXBwZWRRcG9uLnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJib2R5XCIgOnRleHQ9XCJ0YXBwZWRRcG9uLmRldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIk1hbGw6IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5tYWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIiwgQ29pbnM6IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5jb2luc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiRXhwaXJ5IERhdGU6IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5leHBpcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIiB0ZXh0PVwiUmVkZWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHRhcD1cIm9uUmVkZWVtVGFwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIiB0ZXh0PVwiQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJvbkFkZHJlc3NUYXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJ0YXBwZWRRcG9uXCJdLCAvLyBJbnN0YW5jZSBwcm9wZXJ0eVxyXG5cclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGFzeW5jIG9uUmVkZWVtVGFwKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWRlZW0gdGFwcGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVG8gcmVkZWVtIHRoaXMgY291cG9uP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWwuYmFzZVVybCArIFwiL3Fwb24vXCIgKyB0YXBwZWRRcG9uLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJSZWRlZW0gc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5ib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQWRkcmVzc1RhcCgpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkVmFsdWU6IHRoaXMudGFwcGVkUXBvbi5xdWFudGl0eSB8fCBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==