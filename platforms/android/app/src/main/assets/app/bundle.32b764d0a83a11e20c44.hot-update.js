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
        yield fetch(global.baseUrl + "/user/logout");
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
          alert(yield res.json());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0EsV0FEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBO0FBQ0EsbUNBREE7QUFFQTtBQUZBO0FBRkE7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBRkE7QUFJQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0EsT0FyQkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEQSxHQUZBOztBQTBCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsR0EvQkE7O0FBaUNBOztBQWpDQSxHIiwiZmlsZSI6ImJ1bmRsZS4zMmI3NjRkMGE4M2ExMWUyMGM0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJ1c2VybmFtZVwiIGhpbnQ9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInBhc3N3b3JkXCIgaGludD1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9naW5cIiBAdGFwPVwib25Mb2dpblRhcFwiIC8+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gXCIuL0hlbGxvV29ybGRcIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtdLFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uTG9naW5UYXA6IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXdhaXQgZmV0Y2goZ2xvYmFsLmJhc2VVcmwgKyBcIi91c2VyL2xvZ291dFwiKTtcclxuICAgICAgdmFyIHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICsgXCIvdXNlci9sb2dpblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgYWxlcnQoXCJMb2dpbiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSGVsbG9Xb3JsZCwge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge30sXHJcbiAgICAgICAgICBwcm9wczoge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoYXdhaXQgcmVzLmpzb24oKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBtb3VudGVkKCkge30sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=