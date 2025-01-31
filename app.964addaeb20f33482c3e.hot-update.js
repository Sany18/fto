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
    Chart.prototype.renderChart = function () {
        document.body.appendChild(this.wrapper);
        return this;
    };
    Chart.prototype.destroyChart = function () {
        this.destroyResizeListener();
        this.wrapper.remove();
        return this;
    };
    Chart.prototype.testDraw = function () {
        var ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke();
    };
    Chart.prototype.onResize = function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
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



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0af6a44101bb3555ec4c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjk2NGFkZGFlYjIwZjMzNDgyYzNlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0I7QUFFdEI7SUFBQTtJQTREQSxDQUFDO0lBeERDLDJCQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQseUJBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsMEJBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw0QkFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUV0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx3QkFBUSxHQUFSO1FBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sb0NBQW9CLEdBQTVCO1FBQ0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVPLHFDQUFxQixHQUE3QjtRQUNFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztVQzlERCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL0NoYXJ0LnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgQ2hhcnQge1xuICBwcml2YXRlIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgY3JlYXRlQ2hhcnQoKSB7XG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ0NoYXJ0X193cmFwcGVyJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5hZGQoJ0NoYXJ0X19jYW52YXMnKTtcblxuICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVSZXNpemVMaXN0ZW5lcigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgZ2V0V3JhcHBlcigpIHtcbiAgICByZXR1cm4gdGhpcy53cmFwcGVyO1xuICB9XG5cbiAgcmVuZGVyQ2hhcnQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95Q2hhcnQoKSB7XG4gICAgdGhpcy5kZXN0cm95UmVzaXplTGlzdGVuZXIoKTtcbiAgICB0aGlzLndyYXBwZXIucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRlc3REcmF3KCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYygxMDAsIDc1LCA1MCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJlc2l6ZUxpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVJlc2l6ZUxpc3RlbmVyKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGFmNmE0NDEwMWJiMzU1NWVjNGNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=