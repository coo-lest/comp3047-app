webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _HelloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  methods: {
    onLoginTap: function () {
      var _onLoginTap = _asyncToGenerator(function* () {
        var res = yield fetch(global.baseUrl + "/user/login", {
          method: "POST",
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        console.log(res);

        if (res.ok) {
          alert("Login successful");
          this.$navigateTo(_HelloWorld__WEBPACK_IMPORTED_MODULE_0__["default"], {
            transition: {},
            props: {}
          });
        } else {
          alert(res.body);
        }
      });

      function onLoginTap() {
        return _onLoginTap.apply(this, arguments);
      }

      return onLoginTap;
    }()
  },

  data() {
    return {
      username: "",
      password: ""
    };
  },

  mounted() {}

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0EsV0FEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLG1DQURBO0FBRUE7QUFGQTtBQUZBO0FBUUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUZBO0FBSUEsU0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBLE9BcEJBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBREEsR0FGQTs7QUF5QkE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUlBLEdBOUJBOztBQWdDQTs7QUFoQ0EsRyIsImZpbGUiOiJidW5kbGUuYjc5NzE2ZDZiNGY0Mjg5ODNjMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwidXNlcm5hbWVcIiBoaW50PVwidXNlcm5hbWVcIiAvPlxyXG4gICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJwYXNzd29yZFwiIGhpbnQ9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgIDxCdXR0b24gdGV4dD1cIkxvZ2luXCIgQHRhcD1cIm9uTG9naW5UYXBcIiAvPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgSGVsbG9Xb3JsZCBmcm9tIFwiLi9IZWxsb1dvcmxkXCJcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkxvZ2luVGFwOiBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWwuYmFzZVVybCArIFwiL3VzZXIvbG9naW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIGFsZXJ0KFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhlbGxvV29ybGQsIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgICAgcHJvcHM6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KHJlcy5ib2R5KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==