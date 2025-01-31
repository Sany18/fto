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
var meshStep = 20; // px
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
        var stepX = this.chartBarsAreaWidth / 10;
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
/******/ 	__webpack_require__.h = () => ("774e87c8e34cdfe79cb3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjkwMjJkZjI0ODlhZTRmNDVhMWNlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFLElBQU0sVUFBVSxHQUFHLEVBQUUsRUFBQyxLQUFLO0FBQzNCLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN0QyxJQUFNLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ3hFLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSztBQUNuQyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBRTFCO0lBQThCLDRCQUFLO0lBaUJqQyxrQkFBWSxJQUFxQjtRQUMvQixrQkFBSyxXQUFFLFNBQUM7UUFOQSxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckIsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFLeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDckIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFvQjtRQUE1QixpQkFhQztRQVpDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFD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LFlBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0FyUDZCLHlDQUFLLEdBcVBsQzs7Ozs7Ozs7OztVQ2hRRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0JhckNoYXJ0L0JhckNoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi4vQ2hhcnRcIjtcbmltcG9ydCB7IEJhckR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQmFyLmR0b1wiO1xuaW1wb3J0IHsgQ2hhbmtEYXRhRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9DaGFua0RhdGEuZHRvXCI7XG5pbXBvcnQgeyBDb2xvcnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbG9ycy5zZXJ2aWNlXCI7XG5cbmNvbnN0IGZvbnRIZWlnaHQgPSAxNiAvLyBweFxuY29uc3QgbGVnZW5kVmVydGljYWxQYWRkaW5nID0gODsgLy8gcHhcbmNvbnN0IGJvdHRvbUxlZ2VuZEhlaWdodCA9IGZvbnRIZWlnaHQgKyBsZWdlbmRWZXJ0aWNhbFBhZGRpbmcgKiAyOyAvLyBweFxuY29uc3QgcmlnaHRMZWdlbmRXaWR0aCA9IDEwMDsgLy8gcHhcbmNvbnN0IG1lc2hTdGVwID0gMjA7IC8vIHB4XG5cbmV4cG9ydCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgcHJvdGVjdGVkIGNoYXJ0Q2hhbmtzOiBDaGFua0RhdGFEdG9bXTtcblxuICBwcm90ZWN0ZWQgY2hhcnRXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY2hhcnRCYXJzQXJlYVdpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjaGFydEhlaWdodDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgdG90YWxEYXRhTGVuZ3RoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBhbGxCYXJzOiBCYXJEdG9bXTtcbiAgcHJvdGVjdGVkIGJhcldpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtaW5WYWx1ZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgbWF4VmFsdWU6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgbW91c2VEb3duID0gZmFsc2U7XG4gIHByb3RlY3RlZCBtb3VzZURvd25YID0gMDtcbiAgcHJvdGVjdGVkIHNjYWxlID0gMTsgLy8gMSAtIDEwMFxuICBwcm90ZWN0ZWQgc2hpZnQgPSAwOyAvLyBweFxuXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBDaGFua0RhdGFEdG9bXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnB1dERhdGEoZGF0YSk7XG4gIH1cblxuICBwdXREYXRhKGRhdGE6IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzID0gZGF0YTtcblxuICAgIHRoaXMuaGlkZVNwaW5uZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxpc3RlbmVycygpO1xuICAgIHRoaXMuY2FsY3VsYXRlU3RhdGljVmFsdWVzKCk7XG5cbiAgICB0aGlzLmRyYXcoKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjdWxhdGVEeW5hbWljVmFsdWVzKCk7XG4gICAgICB0aGlzLmRyYXdDaGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIHRoaXMuZHJhd0NoYW5rcygpO1xuICAgIHRoaXMuZHJhd01lc2goKTtcbiAgICB0aGlzLmRyYXdCYXJzKCk7XG4gICAgdGhpcy5kcmF3TGVnZW5kKCk7XG4gIH1cblxuICBjYWxjdWxhdGVTdGF0aWNWYWx1ZXMoKSB7XG4gICAgdGhpcy5hbGxCYXJzID0gdGhpcy5jaGFydENoYW5rcy5yZWR1Y2UoKGFjYywgY2hhbmtEYXRhKSA9PiBbLi4uYWNjLCAuLi5jaGFua0RhdGEuQmFyc10sIFtdKTtcbiAgICB0aGlzLnRvdGFsRGF0YUxlbmd0aCA9IHRoaXMuYWxsQmFycy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsQmFycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IHRoaXMuYWxsQmFyc1tpXS5Mb3c7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLmFsbEJhcnNbaV0uSGlnaDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSBNYXRoLm1pbih0aGlzLm1pblZhbHVlLCB0aGlzLmFsbEJhcnNbaV0uTG93KTtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IE1hdGgubWF4KHRoaXMubWF4VmFsdWUsIHRoaXMuYWxsQmFyc1tpXS5IaWdoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVEeW5hbWljVmFsdWVzKCkge1xuICAgIHRoaXMuY2hhcnRXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoICogdGhpcy5zY2FsZTtcbiAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gYm90dG9tTGVnZW5kSGVpZ2h0O1xuICAgIHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoID0gdGhpcy5jaGFydFdpZHRoIC0gcmlnaHRMZWdlbmRXaWR0aDtcbiAgICB0aGlzLmJhcldpZHRoID0gdGhpcy5jaGFydEJhcnNBcmVhV2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aDtcbiAgfVxuXG4gIHpvb20oZTogV2hlZWxFdmVudCkge1xuICAgIGNvbnN0IGRlbHRhID0gZS5kZWx0YVk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZGVsdGEgPiAwID8gLTEgOiAxO1xuICAgIGNvbnN0IG1vdXNlWCA9IGUub2Zmc2V0WDtcblxuICAgIGNvbnN0IHByZXZTY2FsZSA9IHRoaXMuc2NhbGU7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5zY2FsZSAqIChkaXJlY3Rpb24gPT09IDEgPyAxLjEgOiAwLjkpO1xuICAgIGNvbnN0IG5leHRTY2FsZSA9IE1hdGgubWluKE1hdGgubWF4KG5leHRWYWx1ZSwgMSksIDEwMCk7XG5cbiAgICAvLyBIZXJlIHdhcyB0aGUgQUkgaGVscFxuICAgIGNvbnN0IHNjYWxlUmF0aW8gPSBuZXh0U2NhbGUgLyBwcmV2U2NhbGU7XG4gICAgY29uc3QgbW91c2VYSW5DaGFydFNwYWNlID0gbW91c2VYIC0gdGhpcy5zaGlmdDtcbiAgICBjb25zdCBuZXdTaGlmdCA9IG1vdXNlWCAtIG1vdXNlWEluQ2hhcnRTcGFjZSAqIHNjYWxlUmF0aW87XG5cbiAgICB0aGlzLnNjYWxlID0gbmV4dFNjYWxlO1xuICAgIHRoaXMuc2hpZnRDaGFydChuZXdTaGlmdCk7XG4gIH1cblxuICBzaGlmdENoYXJ0KG5leHRWYWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zaGlmdCA9IE1hdGgubWF4KE1hdGgubWluKG5leHRWYWx1ZSwgMCksIHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy5jaGFydFdpZHRoKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRDdXJzb3JUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9IHR5cGU7XG4gIH1cblxuICBkZXN0cm95Q2hhcnQoKTogdGhpcyB7XG4gICAgc3VwZXIuZGVzdHJveUNoYXJ0KCk7XG4gICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIERyYXdpbmdzXG5cbiAgZHJhd0NoYW5rcygpIHtcbiAgICBjb25zdCBnZXRDaGFua1dpZHRoID0gKGk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGkgPCAwKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoICogdGhpcy5jaGFydENoYW5rc1tpXS5CYXJzLmxlbmd0aDtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihgY2hhbmstYmctY29sb3ItJHtpICsgMSAlIDJ9YClcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgICBpICogZ2V0Q2hhbmtXaWR0aChpIC0gMSkgKyB0aGlzLnNoaWZ0LFxuICAgICAgICAwLFxuICAgICAgICBnZXRDaGFua1dpZHRoKGkpLFxuICAgICAgICB0aGlzLmNoYXJ0SGVpZ2h0XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZHJhd01lc2goKSB7XG4gICAgLy8gRHJhdyBhIGdyYXkgbWVzaCB0byByZXByZXNlbnQgY29vcmRpbmF0ZSBzeXN0ZW0gZm9yIGRhdGFcbiAgICBjb25zdCBzdGVwWCA9IHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoIC8gMTA7XG4gICAgY29uc3Qgc3RlcFkgPSB0aGlzLmNoYXJ0SGVpZ2h0IC8gMTA7XG5cbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdncmF5JztcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAwLjU7XG5cbiAgICAvLyBEcmF3IHZlcnRpY2FsIGxpbmVzXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPD0gdGhpcy5jaGFydEJhcnNBcmVhV2lkdGg7IHggKz0gc3RlcFgpIHtcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHggKyB0aGlzLnNoaWZ0LCAwKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh4ICsgdGhpcy5zaGlmdCwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvLyBEcmF3IGhvcml6b250YWwgbGluZXNcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSB0aGlzLmNoYXJ0SGVpZ2h0OyB5ICs9IHN0ZXBZKSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnNoaWZ0LCB5KTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aCArIHRoaXMuc2hpZnQsIHkpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0JhcnMoKSB7XG4gICAgdGhpcy5hbGxCYXJzLmZvckVhY2goKGJhciwgaSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2VDaGFuZ2UgPSBiYXIuQ2xvc2UgLSBiYXIuT3BlbjtcbiAgICAgIGNvbnN0IHZvbGF0aWxpdHkgPSBiYXIuSGlnaCAtIGJhci5Mb3c7IC8vIEkgZ3Vlc3MgaXQncyBub3QgdGhlIHB1cnBvc2Ugb2YgdGhlIHRhc2suIFNraXAgaXQgZm9yIG5vdy5cblxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRUaGVtZUNvbG9yKHByaWNlQ2hhbmdlID4gMCA/ICdiYXItdXAtY29sb3InIDogJ2Jhci1kb3duLWNvbG9yJyk7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgICAgaSAqIHRoaXMuYmFyV2lkdGggKyB0aGlzLnNoaWZ0LFxuICAgICAgICB0aGlzLmNoYXJ0SGVpZ2h0IC0gKGJhci5DbG9zZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHQsXG4gICAgICAgIHRoaXMuYmFyV2lkdGgsXG4gICAgICAgIChiYXIuQ2xvc2UgLSBiYXIuT3BlbikgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpICogdGhpcy5jaGFydEhlaWdodFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdTZXBhcmF0b3JzKCkge1xuICAgIC8vIEhvcml6b250YWwgbGluZVxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2hhcnRIZWlnaHQpO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgLy8gRHJhdyB2ZXJ0aWNhbCB3aGl0ZSByZWN0YW5nbGUgdG8gYWx3YXlzIGNvdmVyIHRvcCByaWdodCBwbGFjZSBvbiBzY3JlZW5cbiAgICAvLyBXaWR0aCA9IHJpZ2h0TGVnZW5kV2lkdGhcbiAgICAvLyBIZWlnaHQgPSB0aGlzLmNoYXJ0SGVpZ2h0IC0gYm90dG9tTGVnZW5kSGVpZ2h0XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoIC0gcmlnaHRMZWdlbmRXaWR0aCxcbiAgICAgIDAsXG4gICAgICByaWdodExlZ2VuZFdpZHRoLFxuICAgICAgdGhpcy5jaGFydEhlaWdodCArIDFcbiAgICApO1xuXG4gICAgLy8gRHJhdyB2ZXJ0aWNhbCBibGFjayBsaW5lIGF0IHRoZSBsZWZ0IGVkZ2Ugb2Ygd2hpdGUgcmVjdGFuZ2xlXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gcmlnaHRMZWdlbmRXaWR0aCwgMCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gcmlnaHRMZWdlbmRXaWR0aCwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3Qm90dG9tTGFiZWxzKCkge1xuXG4gIH1cblxuICBkcmF3TGVnZW5kKCkge1xuICAgIHRoaXMuZHJhd1NlcGFyYXRvcnMoKTtcbiAgICB0aGlzLmRyYXdCb3R0b21MYWJlbHMoKTtcbiAgfVxuXG4gIC8vIExpc3RlbmVyc1xuXG4gIG9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLnNldEN1cnNvclR5cGUoJ2dyYWInKTtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZTogTW91c2VFdmVudCkge1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiYmluZycpO1xuICB9XG5cbiAgb25Nb3VzZVVwKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gIH1cblxuICBvblB1bGxIb3Jpem9udGFsKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubW91c2VEb3duKSByZXR1cm47XG5cbiAgICB0aGlzLnNoaWZ0Q2hhcnQodGhpcy5zaGlmdCArIGUuY2xpZW50WCAtIHRoaXMubW91c2VEb3duWCk7XG4gICAgdGhpcy5tb3VzZURvd25YID0gZS5jbGllbnRYO1xuICB9XG5cbiAgb25ab29tKGU6IFdoZWVsRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnpvb20oZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8gPT4gdGhpcy5vbk1vdXNlVXAoKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uUHVsbEhvcml6b250YWwoZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB0aGlzLm9uWm9vbShlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgXyA9PiB0aGlzLm9uTW91c2VVcCgpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHRoaXMub25QdWxsSG9yaXpvbnRhbChlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF8gPT4gdGhpcy5vbk1vdXNlTGVhdmUoKSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc3NGU4N2M4ZTM0Y2RmZTc5Y2IzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9