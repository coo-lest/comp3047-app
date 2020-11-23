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
        var logoutRes = yield fetch(global.baseUrl + "/user/logout");
        console.log(logoutRes);
        var res = yield fetch(global.baseUrl + "/user/login", {
          method: "POST",
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0EsV0FEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFDQSxtQ0FEQTtBQUVBO0FBRkE7QUFGQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBRkE7QUFJQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0EsT0FyQkE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFEQSxHQUZBOztBQTBCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsR0EvQkE7O0FBaUNBOztBQWpDQSxHIiwiZmlsZSI6ImJ1bmRsZS4zNjQ2NGQxMGJiMzkwNzQ2ZDFiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICA8VGV4dEZpZWxkIHYtbW9kZWw9XCJ1c2VybmFtZVwiIGhpbnQ9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInBhc3N3b3JkXCIgaGludD1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9naW5cIiBAdGFwPVwib25Mb2dpblRhcFwiIC8+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gXCIuL0hlbGxvV29ybGRcIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtdLFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uTG9naW5UYXA6IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGxvZ291dFJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbC5iYXNlVXJsICsgXCIvdXNlci9sb2dvdXRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxvZ291dFJlcyk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goZ2xvYmFsLmJhc2VVcmwgKyBcIi91c2VyL2xvZ2luXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIGFsZXJ0KFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhlbGxvV29ybGQsIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgICAgcHJvcHM6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KGF3YWl0IHJlcy5qc29uKCkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCgpIHt9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9