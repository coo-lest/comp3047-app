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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpblBhZ2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0EsV0FEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUNBLG1DQURBO0FBRUE7QUFGQTtBQUZBOztBQVFBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFGQTtBQUlBLFNBTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQSxPQWxCQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURBLEdBRkE7O0FBdUJBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQSxHQTVCQTs7QUE4QkE7O0FBOUJBLEciLCJmaWxlIjoiYnVuZGxlLjE0OGViOTcxNmRkNDBmMDQzZTgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPFBhZ2U+XHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxUZXh0RmllbGQgdi1tb2RlbD1cInVzZXJuYW1lXCIgaGludD1cInVzZXJuYW1lXCIgLz5cclxuICAgICAgPFRleHRGaWVsZCB2LW1vZGVsPVwicGFzc3dvcmRcIiBoaW50PVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICA8QnV0dG9uIHRleHQ9XCJMb2dpblwiIEB0YXA9XCJvbkxvZ2luVGFwXCIgLz5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEhlbGxvV29ybGQgZnJvbSBcIi4vSGVsbG9Xb3JsZFwiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW10sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25Mb2dpblRhcDogYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgcmVzID0gYXdhaXQgZmV0Y2goZ2xvYmFsLmJhc2VVcmwgKyBcIi91c2VyL2xvZ2luXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIGFsZXJ0KFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhlbGxvV29ybGQsIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHt9LFxyXG4gICAgICAgICAgcHJvcHM6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KHJlcy5ib2R5KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==