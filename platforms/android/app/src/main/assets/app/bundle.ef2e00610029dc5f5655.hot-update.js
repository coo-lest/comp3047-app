webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LoginPage.vue?vue&type=script&lang=js&":
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  methods: {
    onLoginTap: function () {
      var _onLoginTap = _asyncToGenerator(function* () {
        console.log(this.username);
        console.log(this.password);
        var res = yield fetch(global.baseUrl + "/user/login", {
          method: "POST",
          body: {
            username: "martin",
            password: "1234"
          }
        });
        console.log(res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0EsV0FEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0EsT0FSQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURBLEdBRkE7O0FBYUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUlBLEdBbEJBOztBQW9CQTs7QUFwQkEsRyIsImZpbGUiOiJidW5kbGUuZWYyZTAwNjEwMDI5ZGM1ZjU2NTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwidXNlcm5hbWVcIiBoaW50PVwidXNlcm5hbWVcIiAvPlxyXG4gICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJwYXNzd29yZFwiIGhpbnQ9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgIDxCdXR0b24gdGV4dD1cIkxvZ2luXCIgQHRhcD1cIm9uTG9naW5UYXBcIiAvPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtdLFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uTG9naW5UYXA6IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy51c2VybmFtZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFzc3dvcmQpO1xyXG4gICAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goZ2xvYmFsLmJhc2VVcmwgKyBcIi91c2VyL2xvZ2luXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IHsgdXNlcm5hbWU6IFwibWFydGluXCIsIHBhc3N3b3JkOiBcIjEyMzRcIiB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBtb3VudGVkKCkge30sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=