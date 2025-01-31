"use strict";
self["webpackHotUpdatefto"]("app",{

/***/ "./src/components/Chart/Chart.ts":
/*!***************************************!*\
  !*** ./src/components/Chart/Chart.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chart: () => (/* binding */ Chart)
/* harmony export */ });
/* harmony import */ var _Chart_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart.scss */ "./src/components/Chart/Chart.scss");

var Chart = /** @class */ (function () {
    function Chart() {
    }
    Chart.prototype.createChart = function () {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('Chart__wrapper');
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add('Chart__canvas');
        this.wrapper.appendChild(this.canvas);
        this.createResizeListener();
        return this;
    };
    Chart.prototype.getCanvas = function () {
        return this.canvas;
    };
    Chart.prototype.getWrapper = function () {
        return this.wrapper;
    };
    Chart.prototype.destroyChart = function () {
        this.destroyResizeListener();
        this.wrapper.remove();
        return this;
    };
    // Drawings
    Chart.prototype.addDOMElement = function () {
        document.body.appendChild(this.wrapper);
        return this;
    };
    Chart.prototype.testDraw = function () {
        var ctx = this.canvas.getContext('2d');
        requestAnimationFrame(function () {
            ctx.beginPath();
            ctx.arc(100, 75, 50, 0, 2 * Math.PI);
            ctx.stroke();
        });
    };
    Chart.prototype.onResize = function () {
        this.canvas.width = this.wrapper.offsetWidth;
        this.canvas.height = this.wrapper.offsetHeight;
        render();
        return this;
    };
    Chart.prototype.createResizeListener = function () {
        window.addEventListener('resize', this.onResize);
    };
    Chart.prototype.destroyResizeListener = function () {
        window.removeEventListener('resize', this.onResize);
    };
    return Chart;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Chart_Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Chart/Chart */ "./src/components/Chart/Chart.ts");
/* harmony import */ var _services_DemoData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/DemoData.service */ "./src/services/DemoData.service.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



var demoDataService = new _services_DemoData_service__WEBPACK_IMPORTED_MODULE_1__.DemoDataService();
demoDataService.getDemoData().then(function (data) {
    console.log(data);
});
var chart = new _components_Chart_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart();
chart.createChart()
    .addDOMElement()
    .testDraw();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7226688a97522ea9d4b8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FDaEIsYUFBYSxFQUFFO0tBQ2YsUUFBUSxFQUFFLENBQUM7Ozs7Ozs7OztVQ2ZkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudHMiLCJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL0NoYXJ0LnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgQ2hhcnQge1xuICBwcml2YXRlIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgY3JlYXRlQ2hhcnQoKSB7XG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ0NoYXJ0X193cmFwcGVyJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoJ0NoYXJ0X19jYW52YXMnKTtcblxuICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVSZXNpemVMaXN0ZW5lcigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgZ2V0V3JhcHBlcigpIHtcbiAgICByZXR1cm4gdGhpcy53cmFwcGVyO1xuICB9XG5cbiAgZGVzdHJveUNoYXJ0KCkge1xuICAgIHRoaXMuZGVzdHJveVJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgdGhpcy53cmFwcGVyLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBEcmF3aW5nc1xuICBhZGRET01FbGVtZW50KCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGVzdERyYXcoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKDEwMCwgNzUsIDUwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud3JhcHBlci5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuICAgIHJlbmRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJlc2l6ZUxpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVJlc2l6ZUxpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0XCI7XG5pbXBvcnQgeyBEZW1vRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9EZW1vRGF0YS5zZXJ2aWNlXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgZGVtb0RhdGFTZXJ2aWNlID0gbmV3IERlbW9EYXRhU2VydmljZSgpO1xuXG5kZW1vRGF0YVNlcnZpY2UuZ2V0RGVtb0RhdGEoKS50aGVuKChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSk7XG5cbmNvbnN0IGNoYXJ0ID0gbmV3IENoYXJ0KCk7XG5cbmNoYXJ0LmNyZWF0ZUNoYXJ0KClcbiAgLmFkZERPTUVsZW1lbnQoKVxuICAudGVzdERyYXcoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjcyMjY2ODhhOTc1MjJlYTlkNGI4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9