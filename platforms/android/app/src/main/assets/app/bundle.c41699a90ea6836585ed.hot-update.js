webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/MapPage.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["mall"],

  // Instance property
  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/MapPage.vue?vue&type=template&id=01c16e00&":
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
      _c("WebView", {
        attrs: {
          src:
            "https://leaflet-api.vercel.app?center=22.34,114.18&zoom=17&marker=AC%20Hall%7C22.341072,114.179645&sensor="
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

global.baseUrl = "https://d02f2a055df7.ngrok.io";
global.mallLoc = [{
  "mall": "IFC Mall",
  "latitude": 22.2849,
  "longitude": 114.158917
}, {
  "mall": "Pacific Place",
  "latitude": 22.2774985,
  "longitude": 114.1663225
}, {
  "mall": "Times Square",
  "latitude": 22.2782079,
  "longitude": 114.1822994
}, {
  "mall": "Elements",
  "latitude": 22.3048708,
  "longitude": 114.1615219
}, {
  "mall": "Harbour City",
  "latitude": 22.2950689,
  "longitude": 114.1668661
}, {
  "mall": "Festival Walk",
  "latitude": 22.3372971,
  "longitude": 114.1745273
}, {
  "mall": "MegaBox",
  "latitude": 22.319857,
  "longitude": 114.208168
}, {
  "mall": "APM",
  "latitude": 22.3121738,
  "longitude": 114.22513219999996
}, {
  "mall": "Tsuen Wan Plaza",
  "latitude": 22.370735,
  "longitude": 114.111309
}, {
  "mall": "New Town Plaza",
  "latitude": 22.3814592,
  "longitude": 114.1889307
}];
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <HelloWorld />\n        </Frame>",
  components: {
    HelloWorld: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9NYXBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcFBhZ2UudnVlPzY1ZDYiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIl0sIm5hbWVzIjpbIkhlbGxvV29ybGQiLCJnbG9iYWwiLCJiYXNlVXJsIiwibWFsbExvYyIsIlZ1ZSIsInRlbXBsYXRlIiwiY29tcG9uZW50cyIsIiRzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7QUFDQSxpQkFEQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQSxHOzs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE9BQU9BLFVBQVAsTUFBdUIsa0VBRXZCO0FBQ0E7O0FBRUFDLG1CQUFPQyxxQ0FBVSxFQUFqQjtBQUNBRCxNQUFNLENBQUNFLEVBQ0w7QUFBQTtBQUVFLFFBRkY7QUFHRSwrQkFBYTtBQUhmLENBRGUsRUFNZjtBQUNFLFVBQVEsRUFEVjtBQUVFLGdCQUFZLEVBRmQ7QUFHRSxlQUFhO0FBSGYsQ0FOZSxFQVdmO0FBQUE7QUFFRSxjQUFZLFVBRmQ7QUFHRSxlQUFhO0FBSGYsQ0FYZSxFQWdCZjtBQUNFLFVBQVEsSUFEVjtBQUFBO0FBR0UsZUFBYTtBQUhmLENBaEJlLEVBcUJmO0FBQ0UsVUFBUSxjQURWO0FBRUUsY0FBWSxVQUZkO0FBR0UsZUFBYTtBQUhmLENBckJlLEVBMEJmO0FBQUE7QUFFRSxjQUFZLFVBRmQ7QUFHRSxlQUFhO0FBSGYsQ0ExQmUsRUErQmY7QUFDRSxRQURGO0FBRUUsY0FBWSxTQUZkO0FBR0UsZUFBYTtBQUhmLENBL0JlLEVBb0NmO0FBQ0UsVUFBUSxLQURWO0FBRUUsY0FBWSxVQUZkO0FBR0UsZUFBYTtBQUhmLENBcENlLEVBeUNmO0FBQ0UsVUFBUSxFQURWO0FBRUUsMkJBQVksdUNBRmQ7QUFHRSxRQUFhO0FBRWY7QUFDRSxVQUFRLGdCQURWO0FBQUE7QUFHRSxlQUFhO0FBSGYsQ0E5Q2UsQ0FBakI7QUFvREEsSUFBSUMsR0FBSixDQUFRO0FBRUpDLFVBQVEsWUFGSjtBQU9KQyxZQUFVLEVBQUU7QUFDUk47QUFEUTtBQVBSLENBQVIsRUFVR08sTUFWSCIsImZpbGUiOiJidW5kbGUuYzQxNjk5YTkwZWE2ODM2NTg1ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxXZWJWaWV3XHJcbiAgICAgIHNyYz1cImh0dHBzOi8vbGVhZmxldC1hcGkudmVyY2VsLmFwcD9jZW50ZXI9MjIuMzQsMTE0LjE4Jnpvb209MTcmbWFya2VyPUFDJTIwSGFsbCU3QzIyLjM0MTA3MiwxMTQuMTc5NjQ1JnNlbnNvcj1cIlxyXG4gICAgLz5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcIm1hbGxcIl0sIC8vIEluc3RhbmNlIHByb3BlcnR5XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiV2ViVmlld1wiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgc3JjOlxuICAgICAgICAgICAgXCJodHRwczovL2xlYWZsZXQtYXBpLnZlcmNlbC5hcHA/Y2VudGVyPTIyLjM0LDExNC4xOCZ6b29tPTE3Jm1hcmtlcj1BQyUyMEhhbGwlN0MyMi4zNDEwNzIsMTE0LjE3OTY0NSZzZW5zb3I9XCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5cbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vY29tcG9uZW50cy9IZWxsb1dvcmxkJztcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuXG5nbG9iYWwuYmFzZVVybCA9IFwiaHR0cHM6Ly9kMDJmMmEwNTVkZjcubmdyb2suaW9cIjtcbmdsb2JhbC5tYWxsTG9jID0gW1xuICB7XG4gICAgXCJtYWxsXCI6IFwiSUZDIE1hbGxcIixcbiAgICBcImxhdGl0dWRlXCI6IDIyLjI4NDksXG4gICAgXCJsb25naXR1ZGVcIjogMTE0LjE1ODkxN1xuICB9LFxuICB7XG4gICAgXCJtYWxsXCI6IFwiUGFjaWZpYyBQbGFjZVwiLFxuICAgIFwibGF0aXR1ZGVcIjogMjIuMjc3NDk4NSxcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTY2MzIyNVxuICB9LFxuICB7XG4gICAgXCJtYWxsXCI6IFwiVGltZXMgU3F1YXJlXCIsXG4gICAgXCJsYXRpdHVkZVwiOiAyMi4yNzgyMDc5LFxuICAgIFwibG9uZ2l0dWRlXCI6IDExNC4xODIyOTk0XG4gIH0sIFxuICB7XG4gICAgXCJtYWxsXCI6IFwiRWxlbWVudHNcIixcbiAgICBcImxhdGl0dWRlXCI6IDIyLjMwNDg3MDgsXG4gICAgXCJsb25naXR1ZGVcIjogMTE0LjE2MTUyMTlcbiAgfSxcbiAge1xuICAgIFwibWFsbFwiOiBcIkhhcmJvdXIgQ2l0eVwiLFxuICAgIFwibGF0aXR1ZGVcIjogMjIuMjk1MDY4OSxcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTY2ODY2MVxuICB9LFxuICB7XG4gICAgXCJtYWxsXCI6IFwiRmVzdGl2YWwgV2Fsa1wiLFxuICAgIFwibGF0aXR1ZGVcIjogMjIuMzM3Mjk3MSxcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMTc0NTI3M1xuICB9LFxuICB7XG4gICAgXCJtYWxsXCI6IFwiTWVnYUJveFwiLFxuICAgIFwibGF0aXR1ZGVcIjogMjIuMzE5ODU3LFxuICAgIFwibG9uZ2l0dWRlXCI6IDExNC4yMDgxNjhcbiAgfSxcbiAge1xuICAgIFwibWFsbFwiOiBcIkFQTVwiLFxuICAgIFwibGF0aXR1ZGVcIjogMjIuMzEyMTczOCxcbiAgICBcImxvbmdpdHVkZVwiOiAxMTQuMjI1MTMyMTk5OTk5OTZcbiAgfSxcbiAge1xuICAgIFwibWFsbFwiOiBcIlRzdWVuIFdhbiBQbGF6YVwiLFxuICAgIFwibGF0aXR1ZGVcIjogMjIuMzcwNzM1LFxuICAgIFwibG9uZ2l0dWRlXCI6IDExNC4xMTEzMDlcbiAgfSxcbiAge1xuICAgIFwibWFsbFwiOiBcIk5ldyBUb3duIFBsYXphXCIsXG4gICAgXCJsYXRpdHVkZVwiOiAyMi4zODE0NTkyLFxuICAgIFwibG9uZ2l0dWRlXCI6IDExNC4xODg5MzA3XG4gIH1cbl1cbm5ldyBWdWUoe1xuXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPEZyYW1lPlxuICAgICAgICAgICAgPEhlbGxvV29ybGQgLz5cbiAgICAgICAgPC9GcmFtZT5gLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBIZWxsb1dvcmxkXG4gICAgfVxufSkuJHN0YXJ0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==