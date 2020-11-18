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
        var result = yield confirm({
          title: "Are you sure",
          message: "To redeem this coupon?",
          okButtonText: "Yes",
          cancelButtonText: "No"
        });

        if (result) {
          console.log("Start fetch");
          console.log("asdf");
          var res = yield fetch(global.baseUrl + "/qpon/" + tappedQpon.id, {
            method: "POST"
          });
          console.log("Fetched");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0EsdUJBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSwyQ0FGQTtBQUdBLDZCQUhBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFtQkEsS0FwQkE7O0FBcUJBLG9CQUVBOztBQXZCQSxHQUhBOztBQTZCQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQWpDQSxHIiwiZmlsZSI6ImJ1bmRsZS44MjU4NGM0MjNiNTYzM2VjN2U4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInRhcHBlZFFwb24uaW1hZ2VcIiBoZWlnaHQ9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgc3RyZXRjaD1cImFzcGVjdEZpbGxcIiAvPlxyXG5cclxuICAgICAgICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDFcIiA6dGV4dD1cInRhcHBlZFFwb24udGl0bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImJvZHlcIiA6dGV4dD1cInRhcHBlZFFwb24uZGV0YWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiTWFsbDogXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJ0YXBwZWRRcG9uLm1hbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiLCBDb2luczogXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJ0YXBwZWRRcG9uLmNvaW5zXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJFeHBpcnkgRGF0ZTogXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJ0YXBwZWRRcG9uLmV4cGlyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiIHRleHQ9XCJSZWRlZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAdGFwPVwib25SZWRlZW1UYXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiIHRleHQ9XCJBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHRhcD1cIm9uQWRkcmVzc1RhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcInRhcHBlZFFwb25cIl0sIC8vIEluc3RhbmNlIHByb3BlcnR5XHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYXN5bmMgb25SZWRlZW1UYXAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUbyByZWRlZW0gdGhpcyBjb3Vwb24/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydCBmZXRjaFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzZGZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICsgXCIvcXBvbi9cIiArIHRhcHBlZFFwb24uaWQsIHttZXRob2Q6IFwiUE9TVFwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlJlZGVlbSBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25BZGRyZXNzVGFwKCkge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRWYWx1ZTogdGhpcy50YXBwZWRRcG9uLnF1YW50aXR5IHx8IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9