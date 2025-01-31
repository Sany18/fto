"use strict";
self["webpackHotUpdatefto"]("app",{

/***/ "./src/components/Chart/BarChart/BarChart.ts":
/*!***************************************************!*\
  !*** ./src/components/Chart/BarChart/BarChart.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChart: () => (/* binding */ BarChart)
/* harmony export */ });
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Chart */ "./src/components/Chart/Chart.ts");
/* harmony import */ var _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/Colors.service */ "./src/services/Colors.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var BarChart = /** @class */ (function (_super) {
    __extends(BarChart, _super);
    function BarChart(data) {
        var _this = _super.call(this) || this;
        _this.mouseDown = false;
        _this.mouseDownX = 0;
        _this.scale = 1; // 1 - 100
        _this.shift = 0;
        _this.putData(data);
        return _this;
    }
    BarChart.prototype.putData = function (data) {
        var _this = this;
        if (!data)
            return;
        this.chartChanks = data;
        this.hideSpinner();
        this.createListeners();
        this.defineValues();
        this.draw(function () {
            _this.renderData();
        });
    };
    BarChart.prototype.renderData = function () {
        this.renderChanks();
        this.renderBars();
    };
    BarChart.prototype.defineValues = function () {
        this.chartWidth = this.canvas.width;
        this.chartHeight = this.canvas.height;
        this.totalDataLength = this.chartChanks.map(function (chankData) { return chankData.Bars.length; }).reduce(function (acc, width) { return acc + width; }, 0);
        this.barWidth = this.chartWidth / this.totalDataLength;
        this.allBars = this.chartChanks.reduce(function (acc, chankData) { return __spreadArray(__spreadArray([], acc, true), chankData.Bars, true); }, []);
        for (var i = 0; i < this.allBars.length; i++) {
            if (i === 0) {
                this.minValue = this.allBars[i].Low;
                this.maxValue = this.allBars[i].High;
            }
            else {
                this.minValue = Math.min(this.minValue, this.allBars[i].Low);
                this.maxValue = Math.max(this.maxValue, this.allBars[i].High);
            }
        }
    };
    BarChart.prototype.renderChanks = function () {
        var _this = this;
        var getChankWidth = function (i) {
            if (i < 0)
                return 0;
            return _this.chartWidth / _this.totalDataLength * _this.chartChanks[i].Bars.length;
        };
        this.chartChanks.forEach(function (_, i) {
            _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getThemeColor("chank-bg-color-".concat(i + 1 % 2));
            _this.ctx.fillRect(i * getChankWidth(i - 1), 0, getChankWidth(i), _this.chartHeight);
        });
    };
    BarChart.prototype.renderBars = function () {
        var _this = this;
        this.allBars.forEach(function (bar, i) {
            var priceChange = bar.Close - bar.Open;
            var volatility = bar.High - bar.Low;
            _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getThemeColor(priceChange > 0 ? 'bar-up-color' : 'bar-down-color');
            _this.ctx.fillRect(i * _this.barWidth, _this.chartHeight - (bar.Close - _this.minValue) / (_this.maxValue - _this.minValue) * _this.chartHeight, _this.barWidth, (bar.Close - bar.Open) / (_this.maxValue - _this.minValue) * _this.chartHeight);
        });
    };
    BarChart.prototype.zoom = function (direction) {
        var nextValue = this.scale * (direction === 1 ? 1.1 : 0.9);
        this.scale = Math.min(Math.max(nextValue, 1), 100);
        this.chartWidth = this.canvas.width * this.scale;
        this.barWidth = this.chartWidth / this.totalDataLength;
    };
    BarChart.prototype.shiftChart = function (shift) {
        var nextValue = this.shift + shift;
        console.log(nextValue, this.wrapper.clientWidth - this.chartWidth);
        this.shift = Math.max(Math.min(nextValue, 0), this.wrapper.clientWidth - this.chartWidth);
    };
    BarChart.prototype.destroyChart = function () {
        _super.prototype.destroyChart.call(this);
        this.destroyListeners();
        return this;
    };
    // Listeners
    BarChart.prototype.onMouseDown = function () {
        this.mouseDownX = 0;
        this.mouseDown = true;
    };
    BarChart.prototype.onMouseUp = function () {
        this.mouseDown = false;
    };
    BarChart.prototype.onPullHorizontal = function (e) {
        if (!this.mouseDown)
            return;
        this.mouseDownX = e.clientX;
        this.shiftChart(e.clientX - this.mouseDownX);
        this.render();
    };
    BarChart.prototype.onZoom = function (e) {
        e.preventDefault();
        var delta = e.deltaY;
        var direction = delta > 0 ? -1 : 1;
        this.zoom(direction);
        this.render();
    };
    BarChart.prototype.createListeners = function () {
        var _this = this;
        this.canvas.addEventListener('wheel', function (e) { return _this.onZoom(e); });
        this.canvas.addEventListener('mousedown', function (_) { return _this.onMouseDown(); });
        this.canvas.addEventListener('mouseup', function (_) { return _this.onMouseUp(); });
        this.canvas.addEventListener('mousemove', function (e) { return _this.onPullHorizontal(e); });
    };
    BarChart.prototype.destroyListeners = function () {
        var _this = this;
        this.canvas.removeEventListener('wheel', function (e) { return _this.onZoom(e); });
        this.canvas.removeEventListener('mousedown', function (_) { return _this.onMouseDown(); });
        this.canvas.removeEventListener('mouseup', function (_) { return _this.onMouseUp(); });
        this.canvas.removeEventListener('mousemove', function (e) { return _this.onPullHorizontal(e); });
    };
    return BarChart;
}(_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart));



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b0c7715389bd49d8be98")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmE5MzI4MWVmMmJkMGViMmNkZGQwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFO0lBQThCLDRCQUFLO0lBZ0JqQyxrQkFBWSxJQUFxQjtRQUMvQixrQkFBSyxXQUFFLFNBQUM7UUFOQSxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUtsQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUNyQixDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQW9CO1FBQTVCLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWxCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcs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QW1CLENBQUMsV0FBVyxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0ExSjZCLHlDQUFLLEdBMEpsQzs7Ozs7Ozs7OztVQy9KRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0JhckNoYXJ0L0JhckNoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi4vQ2hhcnRcIjtcbmltcG9ydCB7IEJhckR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQmFyLmR0b1wiO1xuaW1wb3J0IHsgQ2hhbmtEYXRhRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9DaGFua0RhdGEuZHRvXCI7XG5pbXBvcnQgeyBDb2xvcnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbG9ycy5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgcHJvdGVjdGVkIGNoYXJ0Q2hhbmtzOiBDaGFua0RhdGFEdG9bXTtcblxuICBwcm90ZWN0ZWQgY2hhcnRXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY2hhcnRIZWlnaHQ6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHRvdGFsRGF0YUxlbmd0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgYWxsQmFyczogQmFyRHRvW107XG4gIHByb3RlY3RlZCBiYXJXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgbWluVmFsdWU6IG51bWJlcjtcbiAgcHJvdGVjdGVkIG1heFZhbHVlOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIG1vdXNlRG93biA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgbW91c2VEb3duWCA9IDA7XG4gIHByb3RlY3RlZCBzY2FsZSA9IDE7IC8vIDEgLSAxMDBcbiAgcHJvdGVjdGVkIHNoaWZ0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihkYXRhPzogQ2hhbmtEYXRhRHRvW10pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wdXREYXRhKGRhdGEpO1xuICB9XG5cbiAgcHV0RGF0YShkYXRhOiBDaGFua0RhdGFEdG9bXSkge1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuXG4gICAgdGhpcy5jaGFydENoYW5rcyA9IGRhdGE7XG5cbiAgICB0aGlzLmhpZGVTcGlubmVyKCk7XG4gICAgdGhpcy5jcmVhdGVMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmRlZmluZVZhbHVlcygpO1xuXG4gICAgdGhpcy5kcmF3KCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRGF0YSgpIHtcbiAgICB0aGlzLnJlbmRlckNoYW5rcygpO1xuICAgIHRoaXMucmVuZGVyQmFycygpO1xuICB9XG5cbiAgZGVmaW5lVmFsdWVzKCkge1xuICAgIHRoaXMuY2hhcnRXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgIHRoaXMuY2hhcnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy50b3RhbERhdGFMZW5ndGggPSB0aGlzLmNoYXJ0Q2hhbmtzLm1hcCgoY2hhbmtEYXRhKSA9PiBjaGFua0RhdGEuQmFycy5sZW5ndGgpLnJlZHVjZSgoYWNjLCB3aWR0aCkgPT4gYWNjICsgd2lkdGgsIDApO1xuICAgIHRoaXMuYmFyV2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aDtcbiAgICB0aGlzLmFsbEJhcnMgPSB0aGlzLmNoYXJ0Q2hhbmtzLnJlZHVjZSgoYWNjLCBjaGFua0RhdGEpID0+IFsuLi5hY2MsIC4uLmNoYW5rRGF0YS5CYXJzXSwgW10pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEJhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmFsbEJhcnNbaV0uTG93O1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5hbGxCYXJzW2ldLkhpZ2g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gTWF0aC5taW4odGhpcy5taW5WYWx1ZSwgdGhpcy5hbGxCYXJzW2ldLkxvdyk7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSBNYXRoLm1heCh0aGlzLm1heFZhbHVlLCB0aGlzLmFsbEJhcnNbaV0uSGlnaCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2hhbmtzKCkge1xuICAgIGNvbnN0IGdldENoYW5rV2lkdGggPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaSA8IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcnRXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoICogdGhpcy5jaGFydENoYW5rc1tpXS5CYXJzLmxlbmd0aDtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihgY2hhbmstYmctY29sb3ItJHtpICsgMSAlIDJ9YClcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KGkgKiBnZXRDaGFua1dpZHRoKGkgLSAxKSwgMCwgZ2V0Q2hhbmtXaWR0aChpKSwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJCYXJzKCkge1xuICAgIHRoaXMuYWxsQmFycy5mb3JFYWNoKChiYXIsIGkpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlQ2hhbmdlID0gYmFyLkNsb3NlIC0gYmFyLk9wZW47XG4gICAgICBjb25zdCB2b2xhdGlsaXR5ID0gYmFyLkhpZ2ggLSBiYXIuTG93O1xuXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFRoZW1lQ29sb3IocHJpY2VDaGFuZ2UgPiAwID8gJ2Jhci11cC1jb2xvcicgOiAnYmFyLWRvd24tY29sb3InKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgICBpICogdGhpcy5iYXJXaWR0aCxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodCAtIChiYXIuQ2xvc2UgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0LFxuICAgICAgICB0aGlzLmJhcldpZHRoLFxuICAgICAgICAoYmFyLkNsb3NlIC0gYmFyLk9wZW4pIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICB6b29tKGRpcmVjdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5zY2FsZSAqIChkaXJlY3Rpb24gPT09IDEgPyAxLjEgOiAwLjkpO1xuXG4gICAgdGhpcy5zY2FsZSA9IE1hdGgubWluKE1hdGgubWF4KG5leHRWYWx1ZSwgMSksIDEwMCk7XG5cbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy5iYXJXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoO1xuICB9XG5cbiAgc2hpZnRDaGFydChzaGlmdDogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5zaGlmdCArIHNoaWZ0O1xuXG4gICAgY29uc29sZS5sb2cobmV4dFZhbHVlLCB0aGlzLndyYXBwZXIuY2xpZW50V2lkdGggLSB0aGlzLmNoYXJ0V2lkdGgpO1xuXG5cbiAgICB0aGlzLnNoaWZ0ID0gTWF0aC5tYXgoTWF0aC5taW4obmV4dFZhbHVlLCAwKSwgdGhpcy53cmFwcGVyLmNsaWVudFdpZHRoIC0gdGhpcy5jaGFydFdpZHRoKTtcbiAgfVxuXG4gIGRlc3Ryb3lDaGFydCgpOiB0aGlzIHtcbiAgICBzdXBlci5kZXN0cm95Q2hhcnQoKTtcbiAgICB0aGlzLmRlc3Ryb3lMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gTGlzdGVuZXJzXG5cbiAgb25Nb3VzZURvd24oKSB7XG4gICAgdGhpcy5tb3VzZURvd25YID0gMDtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gIH1cblxuICBvbk1vdXNlVXAoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uUHVsbEhvcml6b250YWwoZTogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5tb3VzZURvd24pIHJldHVybjtcblxuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcblxuICAgIHRoaXMuc2hpZnRDaGFydChlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBvblpvb20oZTogV2hlZWxFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRlbHRhID0gZS5kZWx0YVk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZGVsdGEgPiAwID8gLTEgOiAxO1xuXG4gICAgdGhpcy56b29tKGRpcmVjdGlvbik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB0aGlzLm9uWm9vbShlKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgXyA9PiB0aGlzLm9uTW91c2VEb3duKCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfID0+IHRoaXMub25Nb3VzZVVwKCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gdGhpcy5vblB1bGxIb3Jpem9udGFsKGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIF8gPT4gdGhpcy5vbk1vdXNlRG93bigpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgXyA9PiB0aGlzLm9uTW91c2VVcCgpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHRoaXMub25QdWxsSG9yaXpvbnRhbChlKSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIwYzc3MTUzODliZDQ5ZDhiZTk4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9