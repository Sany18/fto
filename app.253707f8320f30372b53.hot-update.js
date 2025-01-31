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
        this.showSpinner();
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
        // @ts-ignore
        console.log(this.chartWidth);
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
/******/ 	__webpack_require__.h = () => ("542d9ce13338b279ec87")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUNkLENBQUM7SUFFRCx3QkFBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7SUFFWix3QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sb0NBQW9CLEdBQTVCO1FBQUEsaUJBRUM7UUFEQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLGNBQU0sWUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTyxxQ0FBcUIsR0FBN0I7UUFBQSxpQkFFQztRQURDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsY0FBTSxZQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7O1VDOUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudHMiLCJ3ZWJwYWNrOi8vZnRvL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vQ2hhcnQuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBDaGFydCB7XG4gIHByb3RlY3RlZCB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJvdGVjdGVkIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgcHJvdGVjdGVkIHNwaW5uZXI6IEhUTUxEaXZFbGVtZW50O1xuICBwcm90ZWN0ZWQgZWxlbWVudHM6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICB9XG5cbiAgY3JlYXRlQ2hhcnQoKSB7XG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ0NoYXJ0X193cmFwcGVyJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoJ0NoYXJ0X19jYW52YXMnKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICB0aGlzLnNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnQ2hhcnRfX3NwaW5uZXInKTtcblxuICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuc3Bpbm5lcik7XG4gICAgdGhpcy5jcmVhdGVSZXNpemVMaXN0ZW5lcigpO1xuICAgIHRoaXMuc2hvd1NwaW5uZXIoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuXG4gIGdldFdyYXBwZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMud3JhcHBlcjtcbiAgfVxuXG4gIGRlc3Ryb3lDaGFydCgpIHtcbiAgICB0aGlzLmRlc3Ryb3lSZXNpemVMaXN0ZW5lcigpO1xuICAgIHRoaXMud3JhcHBlci5yZW1vdmUoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gRHJhd2luZ3NcbiAgZHJhdyhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuZWxlbWVudHMucHVzaChjYWxsYmFjayk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4vLyBAdHMtaWdub3JlXG4gICAgY29uc29sZS5sb2codGhpcy5jaGFydFdpZHRoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQoKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRET01FbGVtZW50KCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzaG93U3Bpbm5lcigpIHtcbiAgICB0aGlzLnNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBoaWRlU3Bpbm5lcigpIHtcbiAgICB0aGlzLnNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRlc3REcmF3KCkge1xuICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmFyYygxMDAsIDc1LCA1MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBMaXN0ZW5lcnNcblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud3JhcHBlci5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmVzaXplTGlzdGVuZXIoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMub25SZXNpemUoKSk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lSZXNpemVMaXN0ZW5lcigpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5vblJlc2l6ZSgpKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTQyZDljZTEzMzM4YjI3OWVjODdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=