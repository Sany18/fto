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
        this.drawMesh();
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
        var range = (this.maxValue - this.minValue) * 1000;
        console.log(range);
        var stepX = this.chartBarsAreaWidth / range;
        var stepY = this.chartHeight / range;
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
/******/ 	__webpack_require__.h = () => ("47941a598fa0a48d4aaf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjc4YzQxM2U5OTYxNTE3ODRjMDQ5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFLElBQU0sVUFBVSxHQUFHLEVBQUUsRUFBQyxLQUFLO0FBQzNCLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN0QyxJQUFNLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ3hFLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSztBQUVuQztJQUE4Qiw0QkFBSztJQWlCakMsa0JBQVksSUFBcUI7UUFDL0Isa0JBQUssV0FBRSxTQUFDO1FBTkEsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ3JCLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBS3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBQ3JCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBb0I7UUFBNUIsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsVUFB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QUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0F4UDZCLHlDQUFLLEdBd1BsQzs7Ozs7Ozs7OztVQ2xRRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0JhckNoYXJ0L0JhckNoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi4vQ2hhcnRcIjtcbmltcG9ydCB7IEJhckR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQmFyLmR0b1wiO1xuaW1wb3J0IHsgQ2hhbmtEYXRhRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9DaGFua0RhdGEuZHRvXCI7XG5pbXBvcnQgeyBDb2xvcnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbG9ycy5zZXJ2aWNlXCI7XG5cbmNvbnN0IGZvbnRIZWlnaHQgPSAxNiAvLyBweFxuY29uc3QgbGVnZW5kVmVydGljYWxQYWRkaW5nID0gODsgLy8gcHhcbmNvbnN0IGJvdHRvbUxlZ2VuZEhlaWdodCA9IGZvbnRIZWlnaHQgKyBsZWdlbmRWZXJ0aWNhbFBhZGRpbmcgKiAyOyAvLyBweFxuY29uc3QgcmlnaHRMZWdlbmRXaWR0aCA9IDEwMDsgLy8gcHhcblxuZXhwb3J0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBwcm90ZWN0ZWQgY2hhcnRDaGFua3M6IENoYW5rRGF0YUR0b1tdO1xuXG4gIHByb3RlY3RlZCBjaGFydFdpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjaGFydEJhcnNBcmVhV2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGNoYXJ0SGVpZ2h0OiBudW1iZXI7XG4gIHByb3RlY3RlZCB0b3RhbERhdGFMZW5ndGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGFsbEJhcnM6IEJhckR0b1tdO1xuICBwcm90ZWN0ZWQgYmFyV2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIG1pblZhbHVlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtYXhWYWx1ZTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBtb3VzZURvd24gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG1vdXNlRG93blggPSAwO1xuICBwcm90ZWN0ZWQgc2NhbGUgPSAxOyAvLyAxIC0gMTAwXG4gIHByb3RlY3RlZCBzaGlmdCA9IDA7IC8vIHB4XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucHV0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1dERhdGEoZGF0YTogQ2hhbmtEYXRhRHRvW10pIHtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcblxuICAgIHRoaXMuY2hhcnRDaGFua3MgPSBkYXRhO1xuXG4gICAgdGhpcy5oaWRlU3Bpbm5lcigpO1xuICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVTdGF0aWNWYWx1ZXMoKTtcblxuICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUR5bmFtaWNWYWx1ZXMoKTtcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgdGhpcy5kcmF3Q2hhbmtzKCk7XG4gICAgdGhpcy5kcmF3TWVzaCgpO1xuICAgIHRoaXMuZHJhd0JhcnMoKTtcbiAgICB0aGlzLmRyYXdMZWdlbmQoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVN0YXRpY1ZhbHVlcygpIHtcbiAgICB0aGlzLmFsbEJhcnMgPSB0aGlzLmNoYXJ0Q2hhbmtzLnJlZHVjZSgoYWNjLCBjaGFua0RhdGEpID0+IFsuLi5hY2MsIC4uLmNoYW5rRGF0YS5CYXJzXSwgW10pO1xuICAgIHRoaXMudG90YWxEYXRhTGVuZ3RoID0gdGhpcy5hbGxCYXJzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxCYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5hbGxCYXJzW2ldLkxvdztcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYWxsQmFyc1tpXS5IaWdoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IE1hdGgubWluKHRoaXMubWluVmFsdWUsIHRoaXMuYWxsQmFyc1tpXS5Mb3cpO1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gTWF0aC5tYXgodGhpcy5tYXhWYWx1ZSwgdGhpcy5hbGxCYXJzW2ldLkhpZ2gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUR5bmFtaWNWYWx1ZXMoKSB7XG4gICAgdGhpcy5jaGFydFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggKiB0aGlzLnNjYWxlO1xuICAgIHRoaXMuY2hhcnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSBib3R0b21MZWdlbmRIZWlnaHQ7XG4gICAgdGhpcy5jaGFydEJhcnNBcmVhV2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLSByaWdodExlZ2VuZFdpZHRoO1xuICAgIHRoaXMuYmFyV2lkdGggPSB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoO1xuICB9XG5cbiAgem9vbShlOiBXaGVlbEV2ZW50KSB7XG4gICAgY29uc3QgZGVsdGEgPSBlLmRlbHRhWTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkZWx0YSA+IDAgPyAtMSA6IDE7XG4gICAgY29uc3QgbW91c2VYID0gZS5vZmZzZXRYO1xuXG4gICAgY29uc3QgcHJldlNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLnNjYWxlICogKGRpcmVjdGlvbiA9PT0gMSA/IDEuMSA6IDAuOSk7XG4gICAgY29uc3QgbmV4dFNjYWxlID0gTWF0aC5taW4oTWF0aC5tYXgobmV4dFZhbHVlLCAxKSwgMTAwKTtcblxuICAgIC8vIEhlcmUgd2FzIHRoZSBBSSBoZWxwXG4gICAgY29uc3Qgc2NhbGVSYXRpbyA9IG5leHRTY2FsZSAvIHByZXZTY2FsZTtcbiAgICBjb25zdCBtb3VzZVhJbkNoYXJ0U3BhY2UgPSBtb3VzZVggLSB0aGlzLnNoaWZ0O1xuICAgIGNvbnN0IG5ld1NoaWZ0ID0gbW91c2VYIC0gbW91c2VYSW5DaGFydFNwYWNlICogc2NhbGVSYXRpbztcblxuICAgIHRoaXMuc2NhbGUgPSBuZXh0U2NhbGU7XG4gICAgdGhpcy5zaGlmdENoYXJ0KG5ld1NoaWZ0KTtcbiAgfVxuXG4gIHNoaWZ0Q2hhcnQobmV4dFZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNoaWZ0ID0gTWF0aC5tYXgoTWF0aC5taW4obmV4dFZhbHVlLCAwKSwgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLmNoYXJ0V2lkdGgpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldEN1cnNvclR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gdHlwZTtcbiAgfVxuXG4gIGRlc3Ryb3lDaGFydCgpOiB0aGlzIHtcbiAgICBzdXBlci5kZXN0cm95Q2hhcnQoKTtcbiAgICB0aGlzLmRlc3Ryb3lMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gRHJhd2luZ3NcblxuICBkcmF3Q2hhbmtzKCkge1xuICAgIGNvbnN0IGdldENoYW5rV2lkdGggPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaSA8IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGggKiB0aGlzLmNoYXJ0Q2hhbmtzW2ldLkJhcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnRDaGFua3MuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRUaGVtZUNvbG9yKGBjaGFuay1iZy1jb2xvci0ke2kgKyAxICUgMn1gKVxuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiBnZXRDaGFua1dpZHRoKGkgLSAxKSArIHRoaXMuc2hpZnQsXG4gICAgICAgIDAsXG4gICAgICAgIGdldENoYW5rV2lkdGgoaSksXG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3TWVzaCgpIHtcbiAgICAvLyBEcmF3IGEgZ3JheSBtZXNoIHRvIHJlcHJlc2VudCBjb29yZGluYXRlIHN5c3RlbSBmb3IgZGF0YVxuICAgIGNvbnN0IHJhbmdlID0gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIDEwMDA7XG4gICAgY29uc29sZS5sb2cocmFuZ2UpO1xuXG4gICAgY29uc3Qgc3RlcFggPSB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aCAvIHJhbmdlO1xuICAgIGNvbnN0IHN0ZXBZID0gdGhpcy5jaGFydEhlaWdodCAvIHJhbmdlO1xuXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xuXG4gICAgLy8gRHJhdyB2ZXJ0aWNhbCBsaW5lc1xuICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoOyB4ICs9IHN0ZXBYKSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4ICsgdGhpcy5zaGlmdCwgMCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oeCArIHRoaXMuc2hpZnQsIHRoaXMuY2hhcnRIZWlnaHQpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLy8gRHJhdyBob3Jpem9udGFsIGxpbmVzXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPD0gdGhpcy5jaGFydEhlaWdodDsgeSArPSBzdGVwWSkge1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5zaGlmdCwgeSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jaGFydEJhcnNBcmVhV2lkdGggKyB0aGlzLnNoaWZ0LCB5KTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdCYXJzKCkge1xuICAgIHRoaXMuYWxsQmFycy5mb3JFYWNoKChiYXIsIGkpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlQ2hhbmdlID0gYmFyLkNsb3NlIC0gYmFyLk9wZW47XG4gICAgICBjb25zdCB2b2xhdGlsaXR5ID0gYmFyLkhpZ2ggLSBiYXIuTG93OyAvLyBJIGd1ZXNzIGl0J3Mgbm90IHRoZSBwdXJwb3NlIG9mIHRoZSB0YXNrLiBTa2lwIGl0IGZvciBub3cuXG5cbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihwcmljZUNoYW5nZSA+IDAgPyAnYmFyLXVwLWNvbG9yJyA6ICdiYXItZG93bi1jb2xvcicpO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiB0aGlzLmJhcldpZHRoICsgdGhpcy5zaGlmdCxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodCAtIChiYXIuQ2xvc2UgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0LFxuICAgICAgICB0aGlzLmJhcldpZHRoLFxuICAgICAgICAoYmFyLkNsb3NlIC0gYmFyLk9wZW4pIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3U2VwYXJhdG9ycygpIHtcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIC8vIERyYXcgdmVydGljYWwgd2hpdGUgcmVjdGFuZ2xlIHRvIGFsd2F5cyBjb3ZlciB0b3AgcmlnaHQgcGxhY2Ugb24gc2NyZWVuXG4gICAgLy8gV2lkdGggPSByaWdodExlZ2VuZFdpZHRoXG4gICAgLy8gSGVpZ2h0ID0gdGhpcy5jaGFydEhlaWdodCAtIGJvdHRvbUxlZ2VuZEhlaWdodFxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCAtIHJpZ2h0TGVnZW5kV2lkdGgsXG4gICAgICAwLFxuICAgICAgcmlnaHRMZWdlbmRXaWR0aCxcbiAgICAgIHRoaXMuY2hhcnRIZWlnaHQgKyAxXG4gICAgKTtcblxuICAgIC8vIERyYXcgdmVydGljYWwgYmxhY2sgbGluZSBhdCB0aGUgbGVmdCBlZGdlIG9mIHdoaXRlIHJlY3RhbmdsZVxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIHJpZ2h0TGVnZW5kV2lkdGgsIDApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIHJpZ2h0TGVnZW5kV2lkdGgsIHRoaXMuY2hhcnRIZWlnaHQpO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd0JvdHRvbUxhYmVscygpIHtcblxuICB9XG5cbiAgZHJhd0xlZ2VuZCgpIHtcbiAgICB0aGlzLmRyYXdTZXBhcmF0b3JzKCk7XG4gICAgdGhpcy5kcmF3Qm90dG9tTGFiZWxzKCk7XG4gIH1cblxuICAvLyBMaXN0ZW5lcnNcblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGU6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYmJpbmcnKTtcbiAgfVxuXG4gIG9uTW91c2VVcCgpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYicpO1xuICB9XG5cbiAgb25QdWxsSG9yaXpvbnRhbChlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm1vdXNlRG93bikgcmV0dXJuO1xuXG4gICAgdGhpcy5zaGlmdENoYXJ0KHRoaXMuc2hpZnQgKyBlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blgpO1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgfVxuXG4gIG9uWm9vbShlOiBXaGVlbEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy56b29tKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMub25ab29tKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMub25Nb3VzZURvd24oZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfID0+IHRoaXMub25Nb3VzZVVwKCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gdGhpcy5vblB1bGxIb3Jpem9udGFsKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgXyA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8gPT4gdGhpcy5vbk1vdXNlVXAoKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uUHVsbEhvcml6b250YWwoZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0Nzk0MWE1OThmYTBhNDhkNGFhZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==