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


var fontHeight = 16; // px
var legendVerticalPadding = 8; // px
var bottomLegendHeight = fontHeight + legendVerticalPadding * 2; // px
var rightLegendWidth = 100; // px
var BarChart = /** @class */ (function (_super) {
    __extends(BarChart, _super);
    function BarChart(data) {
        var _this = _super.call(this) || this;
        _this.mouseDown = false;
        _this.mouseDownX = 0;
        _this.scale = 1; // 1 - 100
        _this.shift = 0; // px
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
        this.calculateStaticValues();
        this.draw(function () {
            _this.calculateDynamicValues();
            _this.drawChart();
        });
    };
    BarChart.prototype.drawChart = function () {
        this.drawChanks();
        this.drawBars();
        this.drawLegend();
    };
    BarChart.prototype.calculateStaticValues = function () {
        this.allBars = this.chartChanks.reduce(function (acc, chankData) { return __spreadArray(__spreadArray([], acc, true), chankData.Bars, true); }, []);
        this.totalDataLength = this.allBars.length;
        this.chartHeight = this.canvas.height - bottomLegendHeight;
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
    BarChart.prototype.calculateDynamicValues = function () {
        this.chartWidth = this.canvas.width * this.scale;
        this.chartBarsAreaWidth = this.chartWidth - rightLegendWidth;
        this.barWidth = this.chartWidth / this.totalDataLength;
    };
    BarChart.prototype.zoom = function (e) {
        var delta = e.deltaY;
        var direction = delta > 0 ? -1 : 1;
        var mouseX = e.offsetX;
        var prevScale = this.scale;
        var nextValue = this.scale * (direction === 1 ? 1.1 : 0.9);
        var nextScale = Math.min(Math.max(nextValue, 1), 100);
        // Here was the AI help
        var scaleRatio = nextScale / prevScale;
        var mouseXInChartSpace = mouseX - this.shift;
        var newShift = mouseX - mouseXInChartSpace * scaleRatio;
        this.scale = nextScale;
        this.shiftChart(newShift);
    };
    BarChart.prototype.shiftChart = function (nextValue) {
        this.shift = Math.max(Math.min(nextValue, 0), this.canvas.width - chartBarsAreaWidth);
        this.render();
    };
    BarChart.prototype.setCursorType = function (type) {
        this.canvas.style.cursor = type;
    };
    BarChart.prototype.destroyChart = function () {
        _super.prototype.destroyChart.call(this);
        this.destroyListeners();
        return this;
    };
    // Drawings
    BarChart.prototype.drawChanks = function () {
        var _this = this;
        var getChankWidth = function (i) {
            if (i < 0)
                return 0;
            return _this.chartWidth / _this.totalDataLength * _this.chartChanks[i].Bars.length;
        };
        this.chartChanks.forEach(function (_, i) {
            _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getThemeColor("chank-bg-color-".concat(i + 1 % 2));
            _this.ctx.fillRect(i * getChankWidth(i - 1) + _this.shift, 0, getChankWidth(i), _this.chartHeight);
        });
    };
    BarChart.prototype.drawBars = function () {
        var _this = this;
        this.allBars.forEach(function (bar, i) {
            var priceChange = bar.Close - bar.Open;
            var volatility = bar.High - bar.Low; // I guess it's not the purpose of the task. Skip it for now.
            _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getThemeColor(priceChange > 0 ? 'bar-up-color' : 'bar-down-color');
            _this.ctx.fillRect(i * _this.barWidth + _this.shift, _this.chartHeight - (bar.Close - _this.minValue) / (_this.maxValue - _this.minValue) * _this.chartHeight, _this.barWidth, (bar.Close - bar.Open) / (_this.maxValue - _this.minValue) * _this.chartHeight);
        });
    };
    BarChart.prototype.drawSeparators = function () {
        // Horizontal line
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.chartHeight);
        this.ctx.lineTo(this.canvas.width, this.chartHeight);
        this.ctx.stroke();
    };
    BarChart.prototype.drawLegend = function () {
        this.drawSeparators();
    };
    // Listeners
    BarChart.prototype.onMouseLeave = function () {
        this.setCursorType('grab');
        this.mouseDown = false;
    };
    BarChart.prototype.onMouseDown = function (e) {
        this.mouseDownX = e.clientX;
        this.mouseDown = true;
        this.setCursorType('grabbing');
    };
    BarChart.prototype.onMouseUp = function () {
        this.mouseDown = false;
        this.setCursorType('grab');
    };
    BarChart.prototype.onPullHorizontal = function (e) {
        if (!this.mouseDown)
            return;
        this.shiftChart(this.shift + e.clientX - this.mouseDownX);
        this.mouseDownX = e.clientX;
    };
    BarChart.prototype.onZoom = function (e) {
        e.preventDefault();
        this.zoom(e);
    };
    BarChart.prototype.createListeners = function () {
        var _this = this;
        this.canvas.addEventListener('wheel', function (e) { return _this.onZoom(e); });
        this.canvas.addEventListener('mousedown', function (e) { return _this.onMouseDown(e); });
        this.canvas.addEventListener('mouseup', function (_) { return _this.onMouseUp(); });
        this.canvas.addEventListener('mousemove', function (e) { return _this.onPullHorizontal(e); });
        this.canvas.addEventListener('mouseleave', function (_) { return _this.onMouseLeave(); });
    };
    BarChart.prototype.destroyListeners = function () {
        var _this = this;
        this.canvas.removeEventListener('wheel', function (e) { return _this.onZoom(e); });
        this.canvas.removeEventListener('mousedown', function (e) { return _this.onMouseDown(e); });
        this.canvas.removeEventListener('mouseup', function (_) { return _this.onMouseUp(); });
        this.canvas.removeEventListener('mousemove', function (e) { return _this.onPullHorizontal(e); });
        this.canvas.removeEventListener('mouseleave', function (_) { return _this.onMouseLeave(); });
    };
    return BarChart;
}(_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart));



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6fca2466926c277e3076")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjUzYjRlMDk1Yzg3MDU2ZmFlMTJjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFLElBQU0sVUFBVSxHQUFHLEVBQUUsRUFBQyxLQUFLO0FBQzNCLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN0QyxJQUFNLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ3hFLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSztBQUVuQztJQUE4Qiw0QkFBSztJQWlCakMsa0JBQVksSUFBcUI7UUFDL0Isa0JBQUssV0FBRSxTQUFDO1FBTkEsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ3JCLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBS3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBQ3JCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBb0I7UUFBNUIsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsVUFB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QUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLENBcE02Qix5Q0FBSyxHQW9NbEM7Ozs7Ozs7Ozs7VUM5TUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdG8vLi9zcmMvY29tcG9uZW50cy9DaGFydC9CYXJDaGFydC9CYXJDaGFydC50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4uL0NoYXJ0XCI7XG5pbXBvcnQgeyBCYXJEdG8gfSBmcm9tIFwiLi4vLi4vLi4vZHRvL0Jhci5kdG9cIjtcbmltcG9ydCB7IENoYW5rRGF0YUR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQ2hhbmtEYXRhLmR0b1wiO1xuaW1wb3J0IHsgQ29sb3JzU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db2xvcnMuc2VydmljZVwiO1xuXG5jb25zdCBmb250SGVpZ2h0ID0gMTYgLy8gcHhcbmNvbnN0IGxlZ2VuZFZlcnRpY2FsUGFkZGluZyA9IDg7IC8vIHB4XG5jb25zdCBib3R0b21MZWdlbmRIZWlnaHQgPSBmb250SGVpZ2h0ICsgbGVnZW5kVmVydGljYWxQYWRkaW5nICogMjsgLy8gcHhcbmNvbnN0IHJpZ2h0TGVnZW5kV2lkdGggPSAxMDA7IC8vIHB4XG5cbmV4cG9ydCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgcHJvdGVjdGVkIGNoYXJ0Q2hhbmtzOiBDaGFua0RhdGFEdG9bXTtcblxuICBwcm90ZWN0ZWQgY2hhcnRXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY2hhcnRCYXJzQXJlYVdpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjaGFydEhlaWdodDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgdG90YWxEYXRhTGVuZ3RoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBhbGxCYXJzOiBCYXJEdG9bXTtcbiAgcHJvdGVjdGVkIGJhcldpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtaW5WYWx1ZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgbWF4VmFsdWU6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgbW91c2VEb3duID0gZmFsc2U7XG4gIHByb3RlY3RlZCBtb3VzZURvd25YID0gMDtcbiAgcHJvdGVjdGVkIHNjYWxlID0gMTsgLy8gMSAtIDEwMFxuICBwcm90ZWN0ZWQgc2hpZnQgPSAwOyAvLyBweFxuXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBDaGFua0RhdGFEdG9bXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnB1dERhdGEoZGF0YSk7XG4gIH1cblxuICBwdXREYXRhKGRhdGE6IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzID0gZGF0YTtcblxuICAgIHRoaXMuaGlkZVNwaW5uZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxpc3RlbmVycygpO1xuICAgIHRoaXMuY2FsY3VsYXRlU3RhdGljVmFsdWVzKCk7XG5cbiAgICB0aGlzLmRyYXcoKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjdWxhdGVEeW5hbWljVmFsdWVzKCk7XG4gICAgICB0aGlzLmRyYXdDaGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIHRoaXMuZHJhd0NoYW5rcygpO1xuICAgIHRoaXMuZHJhd0JhcnMoKTtcbiAgICB0aGlzLmRyYXdMZWdlbmQoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVN0YXRpY1ZhbHVlcygpIHtcbiAgICB0aGlzLmFsbEJhcnMgPSB0aGlzLmNoYXJ0Q2hhbmtzLnJlZHVjZSgoYWNjLCBjaGFua0RhdGEpID0+IFsuLi5hY2MsIC4uLmNoYW5rRGF0YS5CYXJzXSwgW10pO1xuICAgIHRoaXMudG90YWxEYXRhTGVuZ3RoID0gdGhpcy5hbGxCYXJzLmxlbmd0aDtcbiAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gYm90dG9tTGVnZW5kSGVpZ2h0O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEJhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmFsbEJhcnNbaV0uTG93O1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5hbGxCYXJzW2ldLkhpZ2g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gTWF0aC5taW4odGhpcy5taW5WYWx1ZSwgdGhpcy5hbGxCYXJzW2ldLkxvdyk7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSBNYXRoLm1heCh0aGlzLm1heFZhbHVlLCB0aGlzLmFsbEJhcnNbaV0uSGlnaCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlRHluYW1pY1ZhbHVlcygpIHtcbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy5jaGFydEJhcnNBcmVhV2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLSByaWdodExlZ2VuZFdpZHRoO1xuICAgIHRoaXMuYmFyV2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aDtcbiAgfVxuXG4gIHpvb20oZTogV2hlZWxFdmVudCkge1xuICAgIGNvbnN0IGRlbHRhID0gZS5kZWx0YVk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZGVsdGEgPiAwID8gLTEgOiAxO1xuICAgIGNvbnN0IG1vdXNlWCA9IGUub2Zmc2V0WDtcblxuICAgIGNvbnN0IHByZXZTY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5zY2FsZSAqIChkaXJlY3Rpb24gPT09IDEgPyAxLjEgOiAwLjkpO1xuICAgIGNvbnN0IG5leHRTY2FsZSA9IE1hdGgubWluKE1hdGgubWF4KG5leHRWYWx1ZSwgMSksIDEwMCk7XG5cbiAgICAvLyBIZXJlIHdhcyB0aGUgQUkgaGVscFxuICAgIGNvbnN0IHNjYWxlUmF0aW8gPSBuZXh0U2NhbGUgLyBwcmV2U2NhbGU7XG4gICAgY29uc3QgbW91c2VYSW5DaGFydFNwYWNlID0gbW91c2VYIC0gdGhpcy5zaGlmdDtcbiAgICBjb25zdCBuZXdTaGlmdCA9IG1vdXNlWCAtIG1vdXNlWEluQ2hhcnRTcGFjZSAqIHNjYWxlUmF0aW87XG5cbiAgICB0aGlzLnNjYWxlID0gbmV4dFNjYWxlO1xuICAgIHRoaXMuc2hpZnRDaGFydChuZXdTaGlmdCk7XG4gIH1cblxuICBzaGlmdENoYXJ0KG5leHRWYWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zaGlmdCA9IE1hdGgubWF4KE1hdGgubWluKG5leHRWYWx1ZSwgMCksIHRoaXMuY2FudmFzLndpZHRoIC0gY2hhcnRCYXJzQXJlYVdpZHRoKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRDdXJzb3JUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9IHR5cGU7XG4gIH1cblxuICBkZXN0cm95Q2hhcnQoKTogdGhpcyB7XG4gICAgc3VwZXIuZGVzdHJveUNoYXJ0KCk7XG4gICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIERyYXdpbmdzXG5cbiAgZHJhd0NoYW5rcygpIHtcbiAgICBjb25zdCBnZXRDaGFua1dpZHRoID0gKGk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGkgPCAwKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB0aGlzLmNoYXJ0V2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aCAqIHRoaXMuY2hhcnRDaGFua3NbaV0uQmFycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydENoYW5rcy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFRoZW1lQ29sb3IoYGNoYW5rLWJnLWNvbG9yLSR7aSArIDEgJSAyfWApXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgICAgaSAqIGdldENoYW5rV2lkdGgoaSAtIDEpICsgdGhpcy5zaGlmdCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2V0Q2hhbmtXaWR0aChpKSxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdCYXJzKCkge1xuICAgIHRoaXMuYWxsQmFycy5mb3JFYWNoKChiYXIsIGkpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlQ2hhbmdlID0gYmFyLkNsb3NlIC0gYmFyLk9wZW47XG4gICAgICBjb25zdCB2b2xhdGlsaXR5ID0gYmFyLkhpZ2ggLSBiYXIuTG93OyAvLyBJIGd1ZXNzIGl0J3Mgbm90IHRoZSBwdXJwb3NlIG9mIHRoZSB0YXNrLiBTa2lwIGl0IGZvciBub3cuXG5cbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihwcmljZUNoYW5nZSA+IDAgPyAnYmFyLXVwLWNvbG9yJyA6ICdiYXItZG93bi1jb2xvcicpO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiB0aGlzLmJhcldpZHRoICsgdGhpcy5zaGlmdCxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodCAtIChiYXIuQ2xvc2UgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0LFxuICAgICAgICB0aGlzLmJhcldpZHRoLFxuICAgICAgICAoYmFyLkNsb3NlIC0gYmFyLk9wZW4pIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3U2VwYXJhdG9ycygpIHtcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICB9XG5cbiAgZHJhd0xlZ2VuZCgpIHtcbiAgICB0aGlzLmRyYXdTZXBhcmF0b3JzKCk7XG4gIH1cblxuICAvLyBMaXN0ZW5lcnNcblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGU6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYmJpbmcnKTtcbiAgfVxuXG4gIG9uTW91c2VVcCgpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYicpO1xuICB9XG5cbiAgb25QdWxsSG9yaXpvbnRhbChlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm1vdXNlRG93bikgcmV0dXJuO1xuXG4gICAgdGhpcy5zaGlmdENoYXJ0KHRoaXMuc2hpZnQgKyBlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blgpO1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgfVxuXG4gIG9uWm9vbShlOiBXaGVlbEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy56b29tKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMub25ab29tKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMub25Nb3VzZURvd24oZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfID0+IHRoaXMub25Nb3VzZVVwKCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gdGhpcy5vblB1bGxIb3Jpem9udGFsKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgXyA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8gPT4gdGhpcy5vbk1vdXNlVXAoKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uUHVsbEhvcml6b250YWwoZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZmNhMjQ2NjkyNmMyNzdlMzA3NlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==