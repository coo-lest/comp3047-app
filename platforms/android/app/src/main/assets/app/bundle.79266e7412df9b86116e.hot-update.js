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

    onAddressTap: function onAddressTap(args) {
      console.log("args.item: ");
      console.log(args.item);
      var mallObj = global.mallLoc.filter(function (m) {
        return m.mall = this.args.item;
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7QUFDQTtBQUNBLHVCQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBLCtCQURBO0FBRUEsMkNBRkE7QUFHQSw2QkFIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBbEJBO0FBbUJBLEtBcEJBOztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxDQUVBLElBRkEsQ0FFQSxJQUZBLEdBRUEsQ0FGQTtBQUdBO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBbENBLEdBSEE7O0FBd0NBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBNUNBLEciLCJmaWxlIjoiYnVuZGxlLjc5MjY2ZTc0MTJkZjliODYxMTZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPFBhZ2U+XHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxJbWFnZSA6c3JjPVwidGFwcGVkUXBvbi5pbWFnZVwiIGhlaWdodD1cIjMwMFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cclxuXHJcbiAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm0tMTBcIj5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgxXCIgOnRleHQ9XCJ0YXBwZWRRcG9uLnRpdGxlXCIgLz5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImJvZHlcIiA6dGV4dD1cInRhcHBlZFFwb24uZGV0YWlsXCIgLz5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgyXCI+XHJcbiAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJNYWxsOiBcIiAvPlxyXG4gICAgICAgICAgICA8U3BhbiA6dGV4dD1cInRhcHBlZFFwb24ubWFsbFwiIC8+XHJcbiAgICAgICAgICAgIDxTcGFuIHRleHQ9XCIsIENvaW5zOiBcIiAvPlxyXG4gICAgICAgICAgICA8U3BhbiA6dGV4dD1cInRhcHBlZFFwb24uY29pbnNcIiAvPlxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgzXCI+XHJcbiAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJFeHBpcnkgRGF0ZTogXCIgLz5cclxuICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJ0YXBwZWRRcG9uLmV4cGlyZVwiIC8+XHJcbiAgICAgICAgICA8L0xhYmVsPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgIHRleHQ9XCJSZWRlZW1cIlxyXG4gICAgICAgICAgICBAdGFwPVwib25SZWRlZW1UYXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJoMiAtcHJpbWFyeSAtcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgIHRleHQ9XCJBZGRyZXNzXCJcclxuICAgICAgICAgICAgQHRhcD1cIm9uQWRkcmVzc1RhcFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IE1hcFBhZ2UgZnJvbSBcIi4vTWFwUGFnZS52dWVcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJ0YXBwZWRRcG9uXCJdLCAvLyBJbnN0YW5jZSBwcm9wZXJ0eVxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyBvblJlZGVlbVRhcCgpIHtcclxuICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGNvbmZpcm0oe1xyXG4gICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZVwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiVG8gcmVkZWVtIHRoaXMgY291cG9uP1wiLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICsgXCIvcXBvbi9cIiArIHRoaXMudGFwcGVkUXBvbi5pZCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICBhbGVydCh7IHRpdGxlOiBcIlJlZGVlbSBzdWNjZXNzZnVsbHlcIiwgb2tCdXR0b25UZXh0OiBcIk9LXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzID09IDQwMykge1xyXG4gICAgICAgICAgYWxlcnQoeyB0aXRsZTogXCJQbGVhc2UgbG9naW5cIiwgb2tCdXR0b25UZXh0OiBcIk9LXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KHsgdGl0bGU6IHJlcy5ib2R5LCBva0J1dHRvblRleHQ6IFwiT0tcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25BZGRyZXNzVGFwOiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYXJncy5pdGVtOiBcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFyZ3MuaXRlbSk7XHJcbiAgICAgIHZhciBtYWxsT2JqID0gZ2xvYmFsLm1hbGxMb2MuZmlsdGVyKGZ1bmN0aW9uKG0pIHtcclxuICAgICAgICAgIHJldHVybiBtLm1hbGwgPSB0aGlzLmFyZ3MuaXRlbTtcclxuICAgICAgfS5iaW5kKHRoaXMpKVswXTtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhNYXBQYWdlLCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoge30sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHFwb25NYWxsOiB0aGlzLnRhcHBlZFFwb24ubWFsbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRleHRGaWVsZFZhbHVlOiB0aGlzLnRhcHBlZFFwb24ucXVhbnRpdHkgfHwgXCJcIixcclxuICAgIH07XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==