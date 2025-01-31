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
        this.chartHeight = this.canvas.height - bottomLegendHeight;
        this.chartBarsAreaWidth = this.chartWidth - rightLegendWidth;
        this.barWidth = this.chartBarsAreaWidth / this.totalDataLength;
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
        this.shift = Math.max(Math.min(nextValue, 0), this.canvas.width - this.chartWidth);
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
            return _this.chartBarsAreaWidth / _this.totalDataLength * _this.chartChanks[i].Bars.length;
        };
        this.chartChanks.forEach(function (_, i) {
            _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getThemeColor("chank-bg-color-".concat(i + 1 % 2));
            _this.ctx.fillRect(i * getChankWidth(i - 1) + _this.shift, 0, getChankWidth(i), _this.chartHeight);
        });
    };
    BarChart.prototype.drawMesh = function () {
        // Draw a gray mesh to represent coordinate system for data
        var stepX = this.chartBarsAreaWidth / 20;
        var stepY = this.chartHeight / 10;
        this.ctx.strokeStyle = 'gray';
        this.ctx.lineWidth = 0.5;
        // Draw vertical lines
        for (var x = 0; x <= this.chartBarsAreaWidth; x += stepX) {
            this.ctx.beginPath();
            this.ctx.moveTo(x + this.shift, 0);
            this.ctx.lineTo(x + this.shift, this.chartHeight);
            this.ctx.stroke();
        }
        // Draw horizontal lines
        for (var y = 0; y <= this.chartHeight; y += stepY) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.shift, y);
            this.ctx.lineTo(this.chartBarsAreaWidth + this.shift, y);
            this.ctx.stroke();
        }
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
        // Draw vertical white rectangle to always cover top right place on screen
        // Width = rightLegendWidth
        // Height = this.chartHeight - bottomLegendHeight
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.canvas.width - rightLegendWidth, 0, rightLegendWidth, this.chartHeight + 1);
        // Draw vertical black line at the left edge of white rectangle
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width - rightLegendWidth, 0);
        this.ctx.lineTo(this.canvas.width - rightLegendWidth, this.chartHeight);
        this.ctx.stroke();
    };
    BarChart.prototype.drawBottomLabels = function () {
    };
    BarChart.prototype.drawLegend = function () {
        this.drawMesh();
        this.drawSeparators();
        this.drawBottomLabels();
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
/******/ 	__webpack_require__.h = () => ("e46992d9ddd9e2ef73a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjM3YjQ5NjhlYzFjNDJmMmIxMjZjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFLElBQU0sVUFBVSxHQUFHLEVBQUUsRUFBQyxLQUFLO0FBQzNCLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN0QyxJQUFNLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ3hFLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSztBQUVuQztJQUE4Qiw0QkFBSztJQWlCakMsa0JBQVksSUFBcUI7UUFDL0Isa0JBQUssV0FBRSxTQUFDO1FBTkEsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ3JCLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBS3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBQ3JCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBb0I7UUFBNUIsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsVUFB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QixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLENBclA2Qix5Q0FBSyxHQXFQbEM7Ozs7Ozs7Ozs7VUMvUEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdG8vLi9zcmMvY29tcG9uZW50cy9DaGFydC9CYXJDaGFydC9CYXJDaGFydC50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4uL0NoYXJ0XCI7XG5pbXBvcnQgeyBCYXJEdG8gfSBmcm9tIFwiLi4vLi4vLi4vZHRvL0Jhci5kdG9cIjtcbmltcG9ydCB7IENoYW5rRGF0YUR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQ2hhbmtEYXRhLmR0b1wiO1xuaW1wb3J0IHsgQ29sb3JzU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db2xvcnMuc2VydmljZVwiO1xuXG5jb25zdCBmb250SGVpZ2h0ID0gMTYgLy8gcHhcbmNvbnN0IGxlZ2VuZFZlcnRpY2FsUGFkZGluZyA9IDg7IC8vIHB4XG5jb25zdCBib3R0b21MZWdlbmRIZWlnaHQgPSBmb250SGVpZ2h0ICsgbGVnZW5kVmVydGljYWxQYWRkaW5nICogMjsgLy8gcHhcbmNvbnN0IHJpZ2h0TGVnZW5kV2lkdGggPSAxMDA7IC8vIHB4XG5cbmV4cG9ydCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgcHJvdGVjdGVkIGNoYXJ0Q2hhbmtzOiBDaGFua0RhdGFEdG9bXTtcblxuICBwcm90ZWN0ZWQgY2hhcnRXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY2hhcnRCYXJzQXJlYVdpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjaGFydEhlaWdodDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgdG90YWxEYXRhTGVuZ3RoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBhbGxCYXJzOiBCYXJEdG9bXTtcbiAgcHJvdGVjdGVkIGJhcldpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtaW5WYWx1ZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgbWF4VmFsdWU6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgbW91c2VEb3duID0gZmFsc2U7XG4gIHByb3RlY3RlZCBtb3VzZURvd25YID0gMDtcbiAgcHJvdGVjdGVkIHNjYWxlID0gMTsgLy8gMSAtIDEwMFxuICBwcm90ZWN0ZWQgc2hpZnQgPSAwOyAvLyBweFxuXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBDaGFua0RhdGFEdG9bXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnB1dERhdGEoZGF0YSk7XG4gIH1cblxuICBwdXREYXRhKGRhdGE6IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzID0gZGF0YTtcblxuICAgIHRoaXMuaGlkZVNwaW5uZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxpc3RlbmVycygpO1xuICAgIHRoaXMuY2FsY3VsYXRlU3RhdGljVmFsdWVzKCk7XG5cbiAgICB0aGlzLmRyYXcoKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjdWxhdGVEeW5hbWljVmFsdWVzKCk7XG4gICAgICB0aGlzLmRyYXdDaGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIHRoaXMuZHJhd0NoYW5rcygpO1xuICAgIHRoaXMuZHJhd0JhcnMoKTtcbiAgICB0aGlzLmRyYXdMZWdlbmQoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVN0YXRpY1ZhbHVlcygpIHtcbiAgICB0aGlzLmFsbEJhcnMgPSB0aGlzLmNoYXJ0Q2hhbmtzLnJlZHVjZSgoYWNjLCBjaGFua0RhdGEpID0+IFsuLi5hY2MsIC4uLmNoYW5rRGF0YS5CYXJzXSwgW10pO1xuICAgIHRoaXMudG90YWxEYXRhTGVuZ3RoID0gdGhpcy5hbGxCYXJzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxCYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5hbGxCYXJzW2ldLkxvdztcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYWxsQmFyc1tpXS5IaWdoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IE1hdGgubWluKHRoaXMubWluVmFsdWUsIHRoaXMuYWxsQmFyc1tpXS5Mb3cpO1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gTWF0aC5tYXgodGhpcy5tYXhWYWx1ZSwgdGhpcy5hbGxCYXJzW2ldLkhpZ2gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUR5bmFtaWNWYWx1ZXMoKSB7XG4gICAgdGhpcy5jaGFydFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggKiB0aGlzLnNjYWxlO1xuICAgIHRoaXMuY2hhcnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSBib3R0b21MZWdlbmRIZWlnaHQ7XG4gICAgdGhpcy5jaGFydEJhcnNBcmVhV2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLSByaWdodExlZ2VuZFdpZHRoO1xuICAgIHRoaXMuYmFyV2lkdGggPSB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoO1xuICB9XG5cbiAgem9vbShlOiBXaGVlbEV2ZW50KSB7XG4gICAgY29uc3QgZGVsdGEgPSBlLmRlbHRhWTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkZWx0YSA+IDAgPyAtMSA6IDE7XG4gICAgY29uc3QgbW91c2VYID0gZS5vZmZzZXRYO1xuXG4gICAgY29uc3QgcHJldlNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLnNjYWxlICogKGRpcmVjdGlvbiA9PT0gMSA/IDEuMSA6IDAuOSk7XG4gICAgY29uc3QgbmV4dFNjYWxlID0gTWF0aC5taW4oTWF0aC5tYXgobmV4dFZhbHVlLCAxKSwgMTAwKTtcblxuICAgIC8vIEhlcmUgd2FzIHRoZSBBSSBoZWxwXG4gICAgY29uc3Qgc2NhbGVSYXRpbyA9IG5leHRTY2FsZSAvIHByZXZTY2FsZTtcbiAgICBjb25zdCBtb3VzZVhJbkNoYXJ0U3BhY2UgPSBtb3VzZVggLSB0aGlzLnNoaWZ0O1xuICAgIGNvbnN0IG5ld1NoaWZ0ID0gbW91c2VYIC0gbW91c2VYSW5DaGFydFNwYWNlICogc2NhbGVSYXRpbztcblxuICAgIHRoaXMuc2NhbGUgPSBuZXh0U2NhbGU7XG4gICAgdGhpcy5zaGlmdENoYXJ0KG5ld1NoaWZ0KTtcbiAgfVxuXG4gIHNoaWZ0Q2hhcnQobmV4dFZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNoaWZ0ID0gTWF0aC5tYXgoTWF0aC5taW4obmV4dFZhbHVlLCAwKSwgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLmNoYXJ0V2lkdGgpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldEN1cnNvclR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gdHlwZTtcbiAgfVxuXG4gIGRlc3Ryb3lDaGFydCgpOiB0aGlzIHtcbiAgICBzdXBlci5kZXN0cm95Q2hhcnQoKTtcbiAgICB0aGlzLmRlc3Ryb3lMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gRHJhd2luZ3NcblxuICBkcmF3Q2hhbmtzKCkge1xuICAgIGNvbnN0IGdldENoYW5rV2lkdGggPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaSA8IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGggKiB0aGlzLmNoYXJ0Q2hhbmtzW2ldLkJhcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnRDaGFua3MuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRUaGVtZUNvbG9yKGBjaGFuay1iZy1jb2xvci0ke2kgKyAxICUgMn1gKVxuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiBnZXRDaGFua1dpZHRoKGkgLSAxKSArIHRoaXMuc2hpZnQsXG4gICAgICAgIDAsXG4gICAgICAgIGdldENoYW5rV2lkdGgoaSksXG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3TWVzaCgpIHtcbiAgICAvLyBEcmF3IGEgZ3JheSBtZXNoIHRvIHJlcHJlc2VudCBjb29yZGluYXRlIHN5c3RlbSBmb3IgZGF0YVxuICAgIGNvbnN0IHN0ZXBYID0gdGhpcy5jaGFydEJhcnNBcmVhV2lkdGggLyAyMDtcbiAgICBjb25zdCBzdGVwWSA9IHRoaXMuY2hhcnRIZWlnaHQgLyAxMDtcblxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDAuNTtcblxuICAgIC8vIERyYXcgdmVydGljYWwgbGluZXNcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aDsgeCArPSBzdGVwWCkge1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8oeCArIHRoaXMuc2hpZnQsIDApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHggKyB0aGlzLnNoaWZ0LCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8vIERyYXcgaG9yaXpvbnRhbCBsaW5lc1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDw9IHRoaXMuY2hhcnRIZWlnaHQ7IHkgKz0gc3RlcFkpIHtcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuc2hpZnQsIHkpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoICsgdGhpcy5zaGlmdCwgeSk7XG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBkcmF3QmFycygpIHtcbiAgICB0aGlzLmFsbEJhcnMuZm9yRWFjaCgoYmFyLCBpKSA9PiB7XG4gICAgICBjb25zdCBwcmljZUNoYW5nZSA9IGJhci5DbG9zZSAtIGJhci5PcGVuO1xuICAgICAgY29uc3Qgdm9sYXRpbGl0eSA9IGJhci5IaWdoIC0gYmFyLkxvdzsgLy8gSSBndWVzcyBpdCdzIG5vdCB0aGUgcHVycG9zZSBvZiB0aGUgdGFzay4gU2tpcCBpdCBmb3Igbm93LlxuXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFRoZW1lQ29sb3IocHJpY2VDaGFuZ2UgPiAwID8gJ2Jhci11cC1jb2xvcicgOiAnYmFyLWRvd24tY29sb3InKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgICBpICogdGhpcy5iYXJXaWR0aCArIHRoaXMuc2hpZnQsXG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHQgLSAoYmFyLkNsb3NlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpICogdGhpcy5jaGFydEhlaWdodCxcbiAgICAgICAgdGhpcy5iYXJXaWR0aCxcbiAgICAgICAgKGJhci5DbG9zZSAtIGJhci5PcGVuKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZHJhd1NlcGFyYXRvcnMoKSB7XG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKDAsIHRoaXMuY2hhcnRIZWlnaHQpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBEcmF3IHZlcnRpY2FsIHdoaXRlIHJlY3RhbmdsZSB0byBhbHdheXMgY292ZXIgdG9wIHJpZ2h0IHBsYWNlIG9uIHNjcmVlblxuICAgIC8vIFdpZHRoID0gcmlnaHRMZWdlbmRXaWR0aFxuICAgIC8vIEhlaWdodCA9IHRoaXMuY2hhcnRIZWlnaHQgLSBib3R0b21MZWdlbmRIZWlnaHRcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5jYW52YXMud2lkdGggLSByaWdodExlZ2VuZFdpZHRoLFxuICAgICAgMCxcbiAgICAgIHJpZ2h0TGVnZW5kV2lkdGgsXG4gICAgICB0aGlzLmNoYXJ0SGVpZ2h0ICsgMVxuICAgICk7XG5cbiAgICAvLyBEcmF3IHZlcnRpY2FsIGJsYWNrIGxpbmUgYXQgdGhlIGxlZnQgZWRnZSBvZiB3aGl0ZSByZWN0YW5nbGVcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLSByaWdodExlZ2VuZFdpZHRoLCAwKTtcbiAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLSByaWdodExlZ2VuZFdpZHRoLCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdCb3R0b21MYWJlbHMoKSB7XG5cbiAgfVxuXG4gIGRyYXdMZWdlbmQoKSB7XG4gICAgdGhpcy5kcmF3TWVzaCgpO1xuICAgIHRoaXMuZHJhd1NlcGFyYXRvcnMoKTtcbiAgICB0aGlzLmRyYXdCb3R0b21MYWJlbHMoKTtcbiAgfVxuXG4gIC8vIExpc3RlbmVyc1xuXG4gIG9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLnNldEN1cnNvclR5cGUoJ2dyYWInKTtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZTogTW91c2VFdmVudCkge1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiYmluZycpO1xuICB9XG5cbiAgb25Nb3VzZVVwKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gIH1cblxuICBvblB1bGxIb3Jpem9udGFsKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubW91c2VEb3duKSByZXR1cm47XG5cbiAgICB0aGlzLnNoaWZ0Q2hhcnQodGhpcy5zaGlmdCArIGUuY2xpZW50WCAtIHRoaXMubW91c2VEb3duWCk7XG4gICAgdGhpcy5tb3VzZURvd25YID0gZS5jbGllbnRYO1xuICB9XG5cbiAgb25ab29tKGU6IFdoZWVsRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnpvb20oZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8gPT4gdGhpcy5vbk1vdXNlVXAoKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uUHVsbEhvcml6b250YWwoZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB0aGlzLm9uWm9vbShlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgXyA9PiB0aGlzLm9uTW91c2VVcCgpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHRoaXMub25QdWxsSG9yaXpvbnRhbChlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF8gPT4gdGhpcy5vbk1vdXNlTGVhdmUoKSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU0Njk5MmQ5ZGRkOWUyZWY3M2E4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9