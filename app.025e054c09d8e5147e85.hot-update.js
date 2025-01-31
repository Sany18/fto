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
        this.elements = [];
    }
    Chart.prototype.createChart = function () {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('Chart__wrapper');
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add('Chart__canvas');
        this.ctx = this.canvas.getContext('2d');
        this.wrapper.appendChild(this.canvas);
        this.createResizeListener();
        this.onResize();
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
    Chart.prototype.draw = function (callback) {
        this.elements.push(callback);
        requestAnimationFrame(function () {
            callback();
        });
        return this;
    };
    Chart.prototype.render = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.elements.forEach(function (element) {
                element();
            });
        });
    };
    Chart.prototype.addDOMElement = function () {
        document.body.appendChild(this.wrapper);
        return this;
    };
    Chart.prototype.testDraw = function () {
        var _this = this;
        this.draw(function () {
            _this.ctx.beginPath();
            _this.ctx.arc(100, 75, 50, 0, 2 * Math.PI);
            _this.ctx.stroke();
        });
    };
    Chart.prototype.onResize = function () {
        this.canvas.width = this.wrapper.offsetWidth;
        this.canvas.height = this.wrapper.offsetHeight;
        this.render();
        return this;
    };
    Chart.prototype.createResizeListener = function () {
        var _this = this;
        window.addEventListener('resize', function () { return _this.onResize(); });
    };
    Chart.prototype.destroyResizeListener = function () {
        var _this = this;
        window.removeEventListener('resize', function () { return _this.onResize(); });
    };
    return Chart;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f2327a112d895107c4df")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQixHQUE1QjtRQUFBLGlCQUVDO1FBREMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxjQUFNLFlBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU8scUNBQXFCLEdBQTdCO1FBQUEsaUJBRUM7UUFEQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztVQ3RGRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL0NoYXJ0LnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgQ2hhcnQge1xuICBwcml2YXRlIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHByaXZhdGUgZWxlbWVudHM6IGFueVtdID0gW107XG5cbiAgY3JlYXRlQ2hhcnQoKSB7XG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ0NoYXJ0X193cmFwcGVyJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoJ0NoYXJ0X19jYW52YXMnKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlUmVzaXplTGlzdGVuZXIoKTtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cblxuICBnZXRXcmFwcGVyKCkge1xuICAgIHJldHVybiB0aGlzLndyYXBwZXI7XG4gIH1cblxuICBkZXN0cm95Q2hhcnQoKSB7XG4gICAgdGhpcy5kZXN0cm95UmVzaXplTGlzdGVuZXIoKTtcbiAgICB0aGlzLndyYXBwZXIucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIERyYXdpbmdzXG4gIGRyYXcoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmVsZW1lbnRzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRE9NRWxlbWVudCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRlc3REcmF3KCkge1xuICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmFyYygxMDAsIDc1LCA1MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud3JhcHBlci5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmVzaXplTGlzdGVuZXIoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMub25SZXNpemUoKSk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lSZXNpemVMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5vblJlc2l6ZSgpKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjIzMjdhMTEyZDg5NTEwN2M0ZGZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=