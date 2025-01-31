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
        this.showSpinner();
        this.createChart();
    }
    Chart.prototype.createChart = function () {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('Chart__wrapper');
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add('Chart__canvas');
        this.ctx = this.canvas.getContext('2d');
        this.spinner = document.createElement('div');
        this.spinner.classList.add('Chart__spinner');
        this.wrapper.appendChild(this.canvas);
        this.wrapper.appendChild(this.spinner);
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
        this.onResize();
        return this;
    };
    Chart.prototype.showSpinner = function () {
        this.spinner.style.display = 'block';
        return this;
    };
    Chart.prototype.hideSpinner = function () {
        this.spinner.style.display = 'none';
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
    // Listeners
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
/******/ 	__webpack_require__.h = () => ("d71cc72ece55b4cef8ce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQztZQUNSLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO0lBRVosd0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLG9DQUFvQixHQUE1QjtRQUFBLGlCQUVDO1FBREMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxjQUFNLFlBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU8scUNBQXFCLEdBQTdCO1FBQUEsaUJBRUM7UUFEQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztVQzNHRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL0NoYXJ0LnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgQ2hhcnQge1xuICBwcm90ZWN0ZWQgd3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XG4gIHByb3RlY3RlZCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcm90ZWN0ZWQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gIHByb3RlY3RlZCBzcGlubmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJvdGVjdGVkIGVsZW1lbnRzOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hvd1NwaW5uZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KCk7XG4gIH1cblxuICBjcmVhdGVDaGFydCgpIHtcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnQ2hhcnRfX3dyYXBwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZCgnQ2hhcnRfX2NhbnZhcycpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHRoaXMuc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdDaGFydF9fc3Bpbm5lcicpO1xuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5zcGlubmVyKTtcbiAgICB0aGlzLmNyZWF0ZVJlc2l6ZUxpc3RlbmVyKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cblxuICBnZXRXcmFwcGVyKCkge1xuICAgIHJldHVybiB0aGlzLndyYXBwZXI7XG4gIH1cblxuICBkZXN0cm95Q2hhcnQoKSB7XG4gICAgdGhpcy5kZXN0cm95UmVzaXplTGlzdGVuZXIoKTtcbiAgICB0aGlzLndyYXBwZXIucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIERyYXdpbmdzXG4gIGRyYXcoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmVsZW1lbnRzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRE9NRWxlbWVudCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2hvd1NwaW5uZXIoKSB7XG4gICAgdGhpcy5zcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGlkZVNwaW5uZXIoKSB7XG4gICAgdGhpcy5zcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0ZXN0RHJhdygpIHtcbiAgICB0aGlzLmRyYXcoKCkgPT4ge1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5hcmMoMTAwLCA3NSwgNTAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTGlzdGVuZXJzXG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndyYXBwZXIub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodDtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJlc2l6ZUxpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aGlzLm9uUmVzaXplKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95UmVzaXplTGlzdGVuZXIoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMub25SZXNpemUoKSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ3MWNjNzJlY2U1NWI0Y2VmOGNlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9