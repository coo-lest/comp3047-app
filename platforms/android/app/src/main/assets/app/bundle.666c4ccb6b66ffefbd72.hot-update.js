webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QponDetail.vue?vue&type=script&lang=js&":
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
      console.log("Button was pressed");
      this.tappedQpon.quantity = parseInt(this.textFieldValue) || 0;
      this.$navigateBack();
    },

    onAddressTap() {}

  },

  data() {
    return {
      textFieldValue: this.tappedQpon.quantity || ""
    };
  }

});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QponDetail.vue?vue&type=template&id=7a5fa24a&":
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
      _c(
        "StackLayout",
        [
          _c("Image", {
            attrs: {
              src: _vm.tappedQpon.image,
              height: "300",
              stretch: "aspectFill"
            }
          }),
          _c(
            "ScrollView",
            [
              _c(
                "StackLayout",
                { staticClass: "m-10" },
                [
                  _c("Label", {
                    staticClass: "h1",
                    attrs: { text: _vm.tappedQpon.title }
                  }),
                  _c("Label", {
                    staticClass: "body",
                    attrs: { text: _vm.tappedQpon.detail }
                  }),
                  _c(
                    "Label",
                    { staticClass: "h2" },
                    [
                      _c("Span", { attrs: { text: "Mall: " } }),
                      _c("Span", { attrs: { text: _vm.tappedQpon.mall } }),
                      _c("Span", { attrs: { text: ", Coins: " } }),
                      _c("Span", { attrs: { text: _vm.tappedQpon.coins } })
                    ],
                    1
                  ),
                  _c(
                    "Label",
                    { staticClass: "h3" },
                    [
                      _c("Span", { attrs: { text: "Expiry Date: " } }),
                      _c("Span", { attrs: { text: _vm.tappedQpon.expire } })
                    ],
                    1
                  ),
                  _c("Button", {
                    staticClass: "h2 -primary -rounded-lg",
                    attrs: { text: "Redeem" },
                    on: { tap: _vm.onRedeemTap }
                  }),
                  _c("Button", {
                    staticClass: "h2 -primary -rounded-lg",
                    attrs: { text: "Address" },
                    on: { tap: _vm.onAddressTap }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RcG9uRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Fwb25EZXRhaWwudnVlPzUzODciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0EsdUJBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBOztBQU1BLG9CQUVBOztBQVJBLEdBSEE7O0FBY0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFsQkEsRzs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBLGtDQUFrQyxTQUFTLGlCQUFpQixFQUFFO0FBQzlELGtDQUFrQyxTQUFTLDRCQUE0QixFQUFFO0FBQ3pFLGtDQUFrQyxTQUFTLG9CQUFvQixFQUFFO0FBQ2pFLGtDQUFrQyxTQUFTLDZCQUE2QixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0Esa0NBQWtDLFNBQVMsd0JBQXdCLEVBQUU7QUFDckUsa0NBQWtDLFNBQVMsOEJBQThCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0MseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5Qyx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuNjY2YzRjY2I2YjY2ZmZlZmJkNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJ0YXBwZWRRcG9uLmltYWdlXCIgaGVpZ2h0PVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImgxXCIgOnRleHQ9XCJ0YXBwZWRRcG9uLnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJib2R5XCIgOnRleHQ9XCJ0YXBwZWRRcG9uLmRldGFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIk1hbGw6IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5tYWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIiwgQ29pbnM6IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5jb2luc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVwiRXhwaXJ5IERhdGU6IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwidGFwcGVkUXBvbi5leHBpcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIiB0ZXh0PVwiUmVkZWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHRhcD1cIm9uUmVkZWVtVGFwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIiB0ZXh0PVwiQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJvbkFkZHJlc3NUYXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbXCJ0YXBwZWRRcG9uXCJdLCAvLyBJbnN0YW5jZSBwcm9wZXJ0eVxyXG5cclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uUmVkZWVtVGFwKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcHBlZFFwb24ucXVhbnRpdHkgPSBwYXJzZUludCh0aGlzLnRleHRGaWVsZFZhbHVlKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVCYWNrKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQWRkcmVzc1RhcCgpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkVmFsdWU6IHRoaXMudGFwcGVkUXBvbi5xdWFudGl0eSB8fCBcIlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IF92bS50YXBwZWRRcG9uLmltYWdlLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibS0xMFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS50YXBwZWRRcG9uLnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnRhcHBlZFFwb24uZGV0YWlsIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIk1hbGw6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLnRhcHBlZFFwb24ubWFsbCB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiLCBDb2luczogXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0udGFwcGVkUXBvbi5jb2lucyB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImgzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRXhwaXJ5IERhdGU6IFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLnRhcHBlZFFwb24uZXhwaXJlIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJSZWRlZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vblJlZGVlbVRhcCB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDIgLXByaW1hcnkgLXJvdW5kZWQtbGdcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBZGRyZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25BZGRyZXNzVGFwIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9