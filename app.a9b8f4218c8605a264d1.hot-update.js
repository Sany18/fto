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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
        var _this = this;
        this.allBars = [];
        this.chartChanks.forEach(function (chankData) {
            var startTime = chankData.ChunkStart;
            chankData.Bars.forEach(function (bar) {
                _this.allBars.push(__assign(__assign({}, bar), { Time: startTime + bar.Time }));
            });
        });
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
        // Draw hirizontal white rectangle to always cover bottom right place on screen
        // Width = this.chartWidth
        // Height = bottomLegendHeight
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.shift, this.chartHeight, this.chartWidth, bottomLegendHeight);
        // Draw vertical black line at the left edge of white rectangle
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width - rightLegendWidth, 0);
        this.ctx.lineTo(this.canvas.width - rightLegendWidth, this.chartHeight);
        this.ctx.stroke();
    };
    BarChart.prototype.drawBottomLabels = function () {
        var labelCount = 10;
        var step = Math.floor(this.totalDataLength / labelCount);
        this.ctx.fillStyle = 'black';
        this.ctx.font = "".concat(fontHeight, "px Arial");
        this.ctx.textAlign = 'center';
        for (var i = 1; i < labelCount; i++) { // Start from 1 to avoid the first label
            var barIndex = Math.min(i * step, this.totalDataLength - 1);
            var bar = this.allBars[barIndex];
            var label = new Date(bar === null || bar === void 0 ? void 0 : bar.Time).toLocaleTimeString();
            var x = barIndex * this.barWidth + this.barWidth / 2 + this.shift;
            var y = this.chartHeight + fontHeight + legendVerticalPadding;
            this.ctx.fillText(label, x, y);
        }
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
/******/ 	__webpack_require__.h = () => ("63a304020624cf37edb8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmE5YjhmNDIxOGM4NjA1YTI2NGQxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFHZ0M7QUFFakUsSUFBTSxVQUFVLEdBQUcsRUFBRSxFQUFDLEtBQUs7QUFDM0IsSUFBTSxxQkFBcUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ3RDLElBQU0sa0JBQWtCLEdBQUcsVUFBVSxHQUFHLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUs7QUFDeEUsSUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLO0FBRW5DO0lBQThCLDRCQUFLO0lBaUJqQyxrQkFBWSxJQUFxQjtRQUMvQixrQkFBSyxXQUFFLFNBQUM7UUFOQSxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckIsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFLeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDckIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFvQjtRQUE1QixpQkFhQztRQVpDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxV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QUFDLFlBQVksRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVPLG1DQUFnQixHQUF4QjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0EzUjZCLHlDQUFLLEdBMlJsQzs7Ozs7Ozs7OztVQ3JTRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0JhckNoYXJ0L0JhckNoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi4vQ2hhcnRcIjtcbmltcG9ydCB7IEJhckR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQmFyLmR0b1wiO1xuaW1wb3J0IHsgQ2hhbmtEYXRhRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9DaGFua0RhdGEuZHRvXCI7XG5pbXBvcnQgeyBDb2xvcnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbG9ycy5zZXJ2aWNlXCI7XG5cbmNvbnN0IGZvbnRIZWlnaHQgPSAxNiAvLyBweFxuY29uc3QgbGVnZW5kVmVydGljYWxQYWRkaW5nID0gODsgLy8gcHhcbmNvbnN0IGJvdHRvbUxlZ2VuZEhlaWdodCA9IGZvbnRIZWlnaHQgKyBsZWdlbmRWZXJ0aWNhbFBhZGRpbmcgKiAyOyAvLyBweFxuY29uc3QgcmlnaHRMZWdlbmRXaWR0aCA9IDEwMDsgLy8gcHhcblxuZXhwb3J0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBwcm90ZWN0ZWQgY2hhcnRDaGFua3M6IENoYW5rRGF0YUR0b1tdO1xuXG4gIHByb3RlY3RlZCBjaGFydFdpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjaGFydEJhcnNBcmVhV2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGNoYXJ0SGVpZ2h0OiBudW1iZXI7XG4gIHByb3RlY3RlZCB0b3RhbERhdGFMZW5ndGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGFsbEJhcnM6IEJhckR0b1tdO1xuICBwcm90ZWN0ZWQgYmFyV2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIG1pblZhbHVlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtYXhWYWx1ZTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBtb3VzZURvd24gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG1vdXNlRG93blggPSAwO1xuICBwcm90ZWN0ZWQgc2NhbGUgPSAxOyAvLyAxIC0gMTAwXG4gIHByb3RlY3RlZCBzaGlmdCA9IDA7IC8vIHB4XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucHV0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1dERhdGEoZGF0YTogQ2hhbmtEYXRhRHRvW10pIHtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcblxuICAgIHRoaXMuY2hhcnRDaGFua3MgPSBkYXRhO1xuXG4gICAgdGhpcy5oaWRlU3Bpbm5lcigpO1xuICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVTdGF0aWNWYWx1ZXMoKTtcblxuICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUR5bmFtaWNWYWx1ZXMoKTtcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgdGhpcy5kcmF3Q2hhbmtzKCk7XG4gICAgdGhpcy5kcmF3QmFycygpO1xuICAgIHRoaXMuZHJhd0xlZ2VuZCgpO1xuICB9XG5cbiAgY2FsY3VsYXRlU3RhdGljVmFsdWVzKCkge1xuICAgIHRoaXMuYWxsQmFycyA9IFtdO1xuICAgIHRoaXMuY2hhcnRDaGFua3MuZm9yRWFjaCgoY2hhbmtEYXRhKSA9PiB7XG4gICAgICBjb25zdCBzdGFydFRpbWUgPSBjaGFua0RhdGEuQ2h1bmtTdGFydDtcblxuICAgICAgY2hhbmtEYXRhLkJhcnMuZm9yRWFjaCgoYmFyKSA9PiB7XG4gICAgICAgIHRoaXMuYWxsQmFycy5wdXNoKHtcbiAgICAgICAgICAuLi5iYXIsXG4gICAgICAgICAgVGltZTogc3RhcnRUaW1lICsgYmFyLlRpbWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMudG90YWxEYXRhTGVuZ3RoID0gdGhpcy5hbGxCYXJzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxCYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5hbGxCYXJzW2ldLkxvdztcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYWxsQmFyc1tpXS5IaWdoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IE1hdGgubWluKHRoaXMubWluVmFsdWUsIHRoaXMuYWxsQmFyc1tpXS5Mb3cpO1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gTWF0aC5tYXgodGhpcy5tYXhWYWx1ZSwgdGhpcy5hbGxCYXJzW2ldLkhpZ2gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUR5bmFtaWNWYWx1ZXMoKSB7XG4gICAgdGhpcy5jaGFydFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggKiB0aGlzLnNjYWxlO1xuICAgIHRoaXMuY2hhcnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSBib3R0b21MZWdlbmRIZWlnaHQ7XG4gICAgdGhpcy5jaGFydEJhcnNBcmVhV2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLSByaWdodExlZ2VuZFdpZHRoO1xuICAgIHRoaXMuYmFyV2lkdGggPSB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoO1xuICB9XG5cbiAgem9vbShlOiBXaGVlbEV2ZW50KSB7XG4gICAgY29uc3QgZGVsdGEgPSBlLmRlbHRhWTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkZWx0YSA+IDAgPyAtMSA6IDE7XG4gICAgY29uc3QgbW91c2VYID0gZS5vZmZzZXRYO1xuXG4gICAgY29uc3QgcHJldlNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLnNjYWxlICogKGRpcmVjdGlvbiA9PT0gMSA/IDEuMSA6IDAuOSk7XG4gICAgY29uc3QgbmV4dFNjYWxlID0gTWF0aC5taW4oTWF0aC5tYXgobmV4dFZhbHVlLCAxKSwgMTAwKTtcblxuICAgIC8vIEhlcmUgd2FzIHRoZSBBSSBoZWxwXG4gICAgY29uc3Qgc2NhbGVSYXRpbyA9IG5leHRTY2FsZSAvIHByZXZTY2FsZTtcbiAgICBjb25zdCBtb3VzZVhJbkNoYXJ0U3BhY2UgPSBtb3VzZVggLSB0aGlzLnNoaWZ0O1xuICAgIGNvbnN0IG5ld1NoaWZ0ID0gbW91c2VYIC0gbW91c2VYSW5DaGFydFNwYWNlICogc2NhbGVSYXRpbztcblxuICAgIHRoaXMuc2NhbGUgPSBuZXh0U2NhbGU7XG4gICAgdGhpcy5zaGlmdENoYXJ0KG5ld1NoaWZ0KTtcbiAgfVxuXG4gIHNoaWZ0Q2hhcnQobmV4dFZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNoaWZ0ID0gTWF0aC5tYXgoTWF0aC5taW4obmV4dFZhbHVlLCAwKSwgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLmNoYXJ0V2lkdGgpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldEN1cnNvclR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gdHlwZTtcbiAgfVxuXG4gIGRlc3Ryb3lDaGFydCgpOiB0aGlzIHtcbiAgICBzdXBlci5kZXN0cm95Q2hhcnQoKTtcbiAgICB0aGlzLmRlc3Ryb3lMaXN0ZW5lcnMoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gRHJhd2luZ3NcblxuICBkcmF3Q2hhbmtzKCkge1xuICAgIGNvbnN0IGdldENoYW5rV2lkdGggPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaSA8IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGggKiB0aGlzLmNoYXJ0Q2hhbmtzW2ldLkJhcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnRDaGFua3MuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRUaGVtZUNvbG9yKGBjaGFuay1iZy1jb2xvci0ke2kgKyAxICUgMn1gKVxuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiBnZXRDaGFua1dpZHRoKGkgLSAxKSArIHRoaXMuc2hpZnQsXG4gICAgICAgIDAsXG4gICAgICAgIGdldENoYW5rV2lkdGgoaSksXG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3TWVzaCgpIHtcbiAgICAvLyBEcmF3IGEgZ3JheSBtZXNoIHRvIHJlcHJlc2VudCBjb29yZGluYXRlIHN5c3RlbSBmb3IgZGF0YVxuICAgIGNvbnN0IHN0ZXBYID0gdGhpcy5jaGFydEJhcnNBcmVhV2lkdGggLyAyMDtcbiAgICBjb25zdCBzdGVwWSA9IHRoaXMuY2hhcnRIZWlnaHQgLyAxMDtcblxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDAuNTtcblxuICAgIC8vIERyYXcgdmVydGljYWwgbGluZXNcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aDsgeCArPSBzdGVwWCkge1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8oeCArIHRoaXMuc2hpZnQsIDApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHggKyB0aGlzLnNoaWZ0LCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8vIERyYXcgaG9yaXpvbnRhbCBsaW5lc1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDw9IHRoaXMuY2hhcnRIZWlnaHQ7IHkgKz0gc3RlcFkpIHtcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuc2hpZnQsIHkpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoICsgdGhpcy5zaGlmdCwgeSk7XG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBkcmF3QmFycygpIHtcbiAgICB0aGlzLmFsbEJhcnMuZm9yRWFjaCgoYmFyLCBpKSA9PiB7XG4gICAgICBjb25zdCBwcmljZUNoYW5nZSA9IGJhci5DbG9zZSAtIGJhci5PcGVuO1xuICAgICAgY29uc3Qgdm9sYXRpbGl0eSA9IGJhci5IaWdoIC0gYmFyLkxvdzsgLy8gSSBndWVzcyBpdCdzIG5vdCB0aGUgcHVycG9zZSBvZiB0aGUgdGFzay4gU2tpcCBpdCBmb3Igbm93LlxuXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFRoZW1lQ29sb3IocHJpY2VDaGFuZ2UgPiAwID8gJ2Jhci11cC1jb2xvcicgOiAnYmFyLWRvd24tY29sb3InKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgICBpICogdGhpcy5iYXJXaWR0aCArIHRoaXMuc2hpZnQsXG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHQgLSAoYmFyLkNsb3NlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpICogdGhpcy5jaGFydEhlaWdodCxcbiAgICAgICAgdGhpcy5iYXJXaWR0aCxcbiAgICAgICAgKGJhci5DbG9zZSAtIGJhci5PcGVuKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZHJhd1NlcGFyYXRvcnMoKSB7XG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKDAsIHRoaXMuY2hhcnRIZWlnaHQpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBEcmF3IHZlcnRpY2FsIHdoaXRlIHJlY3RhbmdsZSB0byBhbHdheXMgY292ZXIgdG9wIHJpZ2h0IHBsYWNlIG9uIHNjcmVlblxuICAgIC8vIFdpZHRoID0gcmlnaHRMZWdlbmRXaWR0aFxuICAgIC8vIEhlaWdodCA9IHRoaXMuY2hhcnRIZWlnaHQgLSBib3R0b21MZWdlbmRIZWlnaHRcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5jYW52YXMud2lkdGggLSByaWdodExlZ2VuZFdpZHRoLFxuICAgICAgMCxcbiAgICAgIHJpZ2h0TGVnZW5kV2lkdGgsXG4gICAgICB0aGlzLmNoYXJ0SGVpZ2h0ICsgMVxuICAgICk7XG5cbiAgICAvLyBEcmF3IGhpcml6b250YWwgd2hpdGUgcmVjdGFuZ2xlIHRvIGFsd2F5cyBjb3ZlciBib3R0b20gcmlnaHQgcGxhY2Ugb24gc2NyZWVuXG4gICAgLy8gV2lkdGggPSB0aGlzLmNoYXJ0V2lkdGhcbiAgICAvLyBIZWlnaHQgPSBib3R0b21MZWdlbmRIZWlnaHRcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5zaGlmdCxcbiAgICAgIHRoaXMuY2hhcnRIZWlnaHQsXG4gICAgICB0aGlzLmNoYXJ0V2lkdGgsXG4gICAgICBib3R0b21MZWdlbmRIZWlnaHRcbiAgICApO1xuXG4gICAgLy8gRHJhdyB2ZXJ0aWNhbCBibGFjayBsaW5lIGF0IHRoZSBsZWZ0IGVkZ2Ugb2Ygd2hpdGUgcmVjdGFuZ2xlXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gcmlnaHRMZWdlbmRXaWR0aCwgMCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gcmlnaHRMZWdlbmRXaWR0aCwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3Qm90dG9tTGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsQ291bnQgPSAxMDtcbiAgICBjb25zdCBzdGVwID0gTWF0aC5mbG9vcih0aGlzLnRvdGFsRGF0YUxlbmd0aCAvIGxhYmVsQ291bnQpO1xuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udEhlaWdodH1weCBBcmlhbGA7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxhYmVsQ291bnQ7IGkrKykgeyAvLyBTdGFydCBmcm9tIDEgdG8gYXZvaWQgdGhlIGZpcnN0IGxhYmVsXG4gICAgICBjb25zdCBiYXJJbmRleCA9IE1hdGgubWluKGkgKiBzdGVwLCB0aGlzLnRvdGFsRGF0YUxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgYmFyID0gdGhpcy5hbGxCYXJzW2JhckluZGV4XTtcbiAgICAgIGNvbnN0IGxhYmVsID0gbmV3IERhdGUoYmFyPy5UaW1lKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcblxuICAgICAgY29uc3QgeCA9IGJhckluZGV4ICogdGhpcy5iYXJXaWR0aCArIHRoaXMuYmFyV2lkdGggLyAyICsgdGhpcy5zaGlmdDtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLmNoYXJ0SGVpZ2h0ICsgZm9udEhlaWdodCArIGxlZ2VuZFZlcnRpY2FsUGFkZGluZztcblxuICAgICAgdGhpcy5jdHguZmlsbFRleHQobGFiZWwsIHgsIHkpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdMZWdlbmQoKSB7XG4gICAgdGhpcy5kcmF3TWVzaCgpO1xuICAgIHRoaXMuZHJhd1NlcGFyYXRvcnMoKTtcbiAgICB0aGlzLmRyYXdCb3R0b21MYWJlbHMoKTtcbiAgfVxuXG4gIC8vIExpc3RlbmVyc1xuXG4gIG9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLnNldEN1cnNvclR5cGUoJ2dyYWInKTtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZTogTW91c2VFdmVudCkge1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiYmluZycpO1xuICB9XG5cbiAgb25Nb3VzZVVwKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gIH1cblxuICBvblB1bGxIb3Jpem9udGFsKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubW91c2VEb3duKSByZXR1cm47XG5cbiAgICB0aGlzLnNoaWZ0Q2hhcnQodGhpcy5zaGlmdCArIGUuY2xpZW50WCAtIHRoaXMubW91c2VEb3duWCk7XG4gICAgdGhpcy5tb3VzZURvd25YID0gZS5jbGllbnRYO1xuICB9XG5cbiAgb25ab29tKGU6IFdoZWVsRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnpvb20oZSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8gPT4gdGhpcy5vbk1vdXNlVXAoKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uUHVsbEhvcml6b250YWwoZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB0aGlzLm9uWm9vbShlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgXyA9PiB0aGlzLm9uTW91c2VVcCgpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHRoaXMub25QdWxsSG9yaXpvbnRhbChlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF8gPT4gdGhpcy5vbk1vdXNlTGVhdmUoKSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYzYTMwNDAyMDYyNGNmMzdlZGI4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9