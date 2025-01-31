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
    BarChart.prototype.drawRightLabels = function () {
        var labelCount = 10;
        var step = (this.maxValue - this.minValue) / labelCount;
        var minLabelSpacing = fontHeight + 5; // Minimum spacing between labels
        this.ctx.fillStyle = 'black';
        this.ctx.font = "".concat(fontHeight, "px Arial");
        this.ctx.textAlign = 'right';
        var lastLabelY = -Infinity;
        for (var i = 0; i <= labelCount; i++) {
            var value = this.minValue + i * step;
            var label = value.toFixed(2);
            var x = this.canvas.width - 5; // Adjusted to draw inside the right legend area
            var y = this.chartHeight - (value - this.minValue) / (this.maxValue - this.minValue) * this.chartHeight;
            if (y >= fontHeight && y <= this.chartHeight - fontHeight && Math.abs(y - lastLabelY) >= minLabelSpacing) {
                this.ctx.fillText(label, x, y);
                lastLabelY = y;
            }
        }
    };
    BarChart.prototype.drawLegend = function () {
        this.drawMesh();
        this.drawSeparators();
        this.drawBottomLabels();
        this.drawRightLabels();
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
/******/ 	__webpack_require__.h = () => ("bf626bd114643796675e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjRmMmNlMDlkZjAxYWEwYzNmMmZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFHZ0M7QUFFakUsSUFBTSxVQUFVLEdBQUcsRUFBRSxFQUFDLEtBQUs7QUFDM0IsSUFBTSxxQkFBcUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ3RDLElBQU0sa0JBQWtCLEdBQUcsVUFBVSxHQUFHLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUs7QUFDeEUsSUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLO0FBRW5DO0lBQThCLDRCQUFLO0lBaUJqQyxrQkFBWSxJQUFxQjtRQUMvQixrQkFBSyxXQUFFLFNBQUM7UUFOQSxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckIsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFLeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDckIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFvQjtRQUE1QixpQkFhQztRQVpDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxV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Ly4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQmFyQ2hhcnQvQmFyQ2hhcnQudHMiLCJ3ZWJwYWNrOi8vZnRvL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydCB9IGZyb20gXCIuLi9DaGFydFwiO1xuaW1wb3J0IHsgQmFyRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9CYXIuZHRvXCI7XG5pbXBvcnQgeyBDaGFua0RhdGFEdG8gfSBmcm9tIFwiLi4vLi4vLi4vZHRvL0NoYW5rRGF0YS5kdG9cIjtcbmltcG9ydCB7IENvbG9yc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29sb3JzLnNlcnZpY2VcIjtcblxuY29uc3QgZm9udEhlaWdodCA9IDE2IC8vIHB4XG5jb25zdCBsZWdlbmRWZXJ0aWNhbFBhZGRpbmcgPSA4OyAvLyBweFxuY29uc3QgYm90dG9tTGVnZW5kSGVpZ2h0ID0gZm9udEhlaWdodCArIGxlZ2VuZFZlcnRpY2FsUGFkZGluZyAqIDI7IC8vIHB4XG5jb25zdCByaWdodExlZ2VuZFdpZHRoID0gMTAwOyAvLyBweFxuXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIHByb3RlY3RlZCBjaGFydENoYW5rczogQ2hhbmtEYXRhRHRvW107XG5cbiAgcHJvdGVjdGVkIGNoYXJ0V2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGNoYXJ0QmFyc0FyZWFXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY2hhcnRIZWlnaHQ6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHRvdGFsRGF0YUxlbmd0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgYWxsQmFyczogQmFyRHRvW107XG4gIHByb3RlY3RlZCBiYXJXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgbWluVmFsdWU6IG51bWJlcjtcbiAgcHJvdGVjdGVkIG1heFZhbHVlOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIG1vdXNlRG93biA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgbW91c2VEb3duWCA9IDA7XG4gIHByb3RlY3RlZCBzY2FsZSA9IDE7IC8vIDEgLSAxMDBcbiAgcHJvdGVjdGVkIHNoaWZ0ID0gMDsgLy8gcHhcblxuICBjb25zdHJ1Y3RvcihkYXRhPzogQ2hhbmtEYXRhRHRvW10pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wdXREYXRhKGRhdGEpO1xuICB9XG5cbiAgcHV0RGF0YShkYXRhOiBDaGFua0RhdGFEdG9bXSkge1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuXG4gICAgdGhpcy5jaGFydENoYW5rcyA9IGRhdGE7XG5cbiAgICB0aGlzLmhpZGVTcGlubmVyKCk7XG4gICAgdGhpcy5jcmVhdGVMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVN0YXRpY1ZhbHVlcygpO1xuXG4gICAgdGhpcy5kcmF3KCgpID0+IHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlRHluYW1pY1ZhbHVlcygpO1xuICAgICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdDaGFydCgpIHtcbiAgICB0aGlzLmRyYXdDaGFua3MoKTtcbiAgICB0aGlzLmRyYXdCYXJzKCk7XG4gICAgdGhpcy5kcmF3TGVnZW5kKCk7XG4gIH1cblxuICBjYWxjdWxhdGVTdGF0aWNWYWx1ZXMoKSB7XG4gICAgdGhpcy5hbGxCYXJzID0gW107XG4gICAgdGhpcy5jaGFydENoYW5rcy5mb3JFYWNoKChjaGFua0RhdGEpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGNoYW5rRGF0YS5DaHVua1N0YXJ0O1xuXG4gICAgICBjaGFua0RhdGEuQmFycy5mb3JFYWNoKChiYXIpID0+IHtcbiAgICAgICAgdGhpcy5hbGxCYXJzLnB1c2goe1xuICAgICAgICAgIC4uLmJhcixcbiAgICAgICAgICBUaW1lOiBzdGFydFRpbWUgKyBiYXIuVGltZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy50b3RhbERhdGFMZW5ndGggPSB0aGlzLmFsbEJhcnMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEJhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmFsbEJhcnNbaV0uTG93O1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5hbGxCYXJzW2ldLkhpZ2g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gTWF0aC5taW4odGhpcy5taW5WYWx1ZSwgdGhpcy5hbGxCYXJzW2ldLkxvdyk7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSBNYXRoLm1heCh0aGlzLm1heFZhbHVlLCB0aGlzLmFsbEJhcnNbaV0uSGlnaCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlRHluYW1pY1ZhbHVlcygpIHtcbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy5jaGFydEhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCAtIGJvdHRvbUxlZ2VuZEhlaWdodDtcbiAgICB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAtIHJpZ2h0TGVnZW5kV2lkdGg7XG4gICAgdGhpcy5iYXJXaWR0aCA9IHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGg7XG4gIH1cblxuICB6b29tKGU6IFdoZWVsRXZlbnQpIHtcbiAgICBjb25zdCBkZWx0YSA9IGUuZGVsdGFZO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRlbHRhID4gMCA/IC0xIDogMTtcbiAgICBjb25zdCBtb3VzZVggPSBlLm9mZnNldFg7XG5cbiAgICBjb25zdCBwcmV2U2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuc2NhbGUgKiAoZGlyZWN0aW9uID09PSAxID8gMS4xIDogMC45KTtcbiAgICBjb25zdCBuZXh0U2NhbGUgPSBNYXRoLm1pbihNYXRoLm1heChuZXh0VmFsdWUsIDEpLCAxMDApO1xuXG4gICAgLy8gSGVyZSB3YXMgdGhlIEFJIGhlbHBcbiAgICBjb25zdCBzY2FsZVJhdGlvID0gbmV4dFNjYWxlIC8gcHJldlNjYWxlO1xuICAgIGNvbnN0IG1vdXNlWEluQ2hhcnRTcGFjZSA9IG1vdXNlWCAtIHRoaXMuc2hpZnQ7XG4gICAgY29uc3QgbmV3U2hpZnQgPSBtb3VzZVggLSBtb3VzZVhJbkNoYXJ0U3BhY2UgKiBzY2FsZVJhdGlvO1xuXG4gICAgdGhpcy5zY2FsZSA9IG5leHRTY2FsZTtcbiAgICB0aGlzLnNoaWZ0Q2hhcnQobmV3U2hpZnQpO1xuICB9XG5cbiAgc2hpZnRDaGFydChuZXh0VmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2hpZnQgPSBNYXRoLm1heChNYXRoLm1pbihuZXh0VmFsdWUsIDApLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMuY2hhcnRXaWR0aCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0Q3Vyc29yVHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSB0eXBlO1xuICB9XG5cbiAgZGVzdHJveUNoYXJ0KCk6IHRoaXMge1xuICAgIHN1cGVyLmRlc3Ryb3lDaGFydCgpO1xuICAgIHRoaXMuZGVzdHJveUxpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBEcmF3aW5nc1xuXG4gIGRyYXdDaGFua3MoKSB7XG4gICAgY29uc3QgZ2V0Q2hhbmtXaWR0aCA9IChpOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpIDwgMCkgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gdGhpcy5jaGFydEJhcnNBcmVhV2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aCAqIHRoaXMuY2hhcnRDaGFua3NbaV0uQmFycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydENoYW5rcy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFRoZW1lQ29sb3IoYGNoYW5rLWJnLWNvbG9yLSR7aSArIDEgJSAyfWApXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgICAgaSAqIGdldENoYW5rV2lkdGgoaSAtIDEpICsgdGhpcy5zaGlmdCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2V0Q2hhbmtXaWR0aChpKSxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdNZXNoKCkge1xuICAgIC8vIERyYXcgYSBncmF5IG1lc2ggdG8gcmVwcmVzZW50IGNvb3JkaW5hdGUgc3lzdGVtIGZvciBkYXRhXG4gICAgY29uc3Qgc3RlcFggPSB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aCAvIDIwO1xuICAgIGNvbnN0IHN0ZXBZID0gdGhpcy5jaGFydEhlaWdodCAvIDEwO1xuXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xuXG4gICAgLy8gRHJhdyB2ZXJ0aWNhbCBsaW5lc1xuICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoOyB4ICs9IHN0ZXBYKSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4ICsgdGhpcy5zaGlmdCwgMCk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oeCArIHRoaXMuc2hpZnQsIHRoaXMuY2hhcnRIZWlnaHQpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLy8gRHJhdyBob3Jpem9udGFsIGxpbmVzXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPD0gdGhpcy5jaGFydEhlaWdodDsgeSArPSBzdGVwWSkge1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5zaGlmdCwgeSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jaGFydEJhcnNBcmVhV2lkdGggKyB0aGlzLnNoaWZ0LCB5KTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdCYXJzKCkge1xuICAgIHRoaXMuYWxsQmFycy5mb3JFYWNoKChiYXIsIGkpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlQ2hhbmdlID0gYmFyLkNsb3NlIC0gYmFyLk9wZW47XG4gICAgICBjb25zdCB2b2xhdGlsaXR5ID0gYmFyLkhpZ2ggLSBiYXIuTG93OyAvLyBJIGd1ZXNzIGl0J3Mgbm90IHRoZSBwdXJwb3NlIG9mIHRoZSB0YXNrLiBTa2lwIGl0IGZvciBub3cuXG5cbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihwcmljZUNoYW5nZSA+IDAgPyAnYmFyLXVwLWNvbG9yJyA6ICdiYXItZG93bi1jb2xvcicpO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiB0aGlzLmJhcldpZHRoICsgdGhpcy5zaGlmdCxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodCAtIChiYXIuQ2xvc2UgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0LFxuICAgICAgICB0aGlzLmJhcldpZHRoLFxuICAgICAgICAoYmFyLkNsb3NlIC0gYmFyLk9wZW4pIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3U2VwYXJhdG9ycygpIHtcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIC8vIERyYXcgdmVydGljYWwgd2hpdGUgcmVjdGFuZ2xlIHRvIGFsd2F5cyBjb3ZlciB0b3AgcmlnaHQgcGxhY2Ugb24gc2NyZWVuXG4gICAgLy8gV2lkdGggPSByaWdodExlZ2VuZFdpZHRoXG4gICAgLy8gSGVpZ2h0ID0gdGhpcy5jaGFydEhlaWdodCAtIGJvdHRvbUxlZ2VuZEhlaWdodFxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCAtIHJpZ2h0TGVnZW5kV2lkdGgsXG4gICAgICAwLFxuICAgICAgcmlnaHRMZWdlbmRXaWR0aCxcbiAgICAgIHRoaXMuY2hhcnRIZWlnaHQgKyAxXG4gICAgKTtcblxuICAgIC8vIERyYXcgaGlyaXpvbnRhbCB3aGl0ZSByZWN0YW5nbGUgdG8gYWx3YXlzIGNvdmVyIGJvdHRvbSByaWdodCBwbGFjZSBvbiBzY3JlZW5cbiAgICAvLyBXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aFxuICAgIC8vIEhlaWdodCA9IGJvdHRvbUxlZ2VuZEhlaWdodFxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICB0aGlzLnNoaWZ0LFxuICAgICAgdGhpcy5jaGFydEhlaWdodCxcbiAgICAgIHRoaXMuY2hhcnRXaWR0aCxcbiAgICAgIGJvdHRvbUxlZ2VuZEhlaWdodFxuICAgICk7XG5cbiAgICAvLyBEcmF3IHZlcnRpY2FsIGJsYWNrIGxpbmUgYXQgdGhlIGxlZnQgZWRnZSBvZiB3aGl0ZSByZWN0YW5nbGVcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLSByaWdodExlZ2VuZFdpZHRoLCAwKTtcbiAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLSByaWdodExlZ2VuZFdpZHRoLCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdCb3R0b21MYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxDb3VudCA9IDEwO1xuICAgIGNvbnN0IHN0ZXAgPSBNYXRoLmZsb29yKHRoaXMudG90YWxEYXRhTGVuZ3RoIC8gbGFiZWxDb3VudCk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtmb250SGVpZ2h0fXB4IEFyaWFsYDtcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGFiZWxDb3VudDsgaSsrKSB7IC8vIFN0YXJ0IGZyb20gMSB0byBhdm9pZCB0aGUgZmlyc3QgbGFiZWxcbiAgICAgIGNvbnN0IGJhckluZGV4ID0gTWF0aC5taW4oaSAqIHN0ZXAsIHRoaXMudG90YWxEYXRhTGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCBiYXIgPSB0aGlzLmFsbEJhcnNbYmFySW5kZXhdO1xuICAgICAgY29uc3QgbGFiZWwgPSBuZXcgRGF0ZShiYXI/LlRpbWUpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuXG4gICAgICBjb25zdCB4ID0gYmFySW5kZXggKiB0aGlzLmJhcldpZHRoICsgdGhpcy5iYXJXaWR0aCAvIDIgKyB0aGlzLnNoaWZ0O1xuICAgICAgY29uc3QgeSA9IHRoaXMuY2hhcnRIZWlnaHQgKyBmb250SGVpZ2h0ICsgbGVnZW5kVmVydGljYWxQYWRkaW5nO1xuXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChsYWJlbCwgeCwgeSk7XG4gICAgfVxuICB9XG5cbiAgZHJhd1JpZ2h0TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsQ291bnQgPSAxMDtcbiAgICBjb25zdCBzdGVwID0gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvIGxhYmVsQ291bnQ7XG4gICAgY29uc3QgbWluTGFiZWxTcGFjaW5nID0gZm9udEhlaWdodCArIDU7IC8vIE1pbmltdW0gc3BhY2luZyBiZXR3ZWVuIGxhYmVsc1xuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmN0eC5mb250ID0gYCR7Zm9udEhlaWdodH1weCBBcmlhbGA7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ3JpZ2h0JztcblxuICAgIGxldCBsYXN0TGFiZWxZID0gLUluZmluaXR5O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubWluVmFsdWUgKyBpICogc3RlcDtcbiAgICAgIGNvbnN0IGxhYmVsID0gdmFsdWUudG9GaXhlZCgyKTtcblxuICAgICAgY29uc3QgeCA9IHRoaXMuY2FudmFzLndpZHRoIC0gNTsgLy8gQWRqdXN0ZWQgdG8gZHJhdyBpbnNpZGUgdGhlIHJpZ2h0IGxlZ2VuZCBhcmVhXG4gICAgICBjb25zdCB5ID0gdGhpcy5jaGFydEhlaWdodCAtICh2YWx1ZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHQ7XG5cbiAgICAgIGlmICh5ID49IGZvbnRIZWlnaHQgJiYgeSA8PSB0aGlzLmNoYXJ0SGVpZ2h0IC0gZm9udEhlaWdodCAmJiBNYXRoLmFicyh5IC0gbGFzdExhYmVsWSkgPj0gbWluTGFiZWxTcGFjaW5nKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGxhYmVsLCB4LCB5KTtcbiAgICAgICAgbGFzdExhYmVsWSA9IHk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0xlZ2VuZCgpIHtcbiAgICB0aGlzLmRyYXdNZXNoKCk7XG4gICAgdGhpcy5kcmF3U2VwYXJhdG9ycygpO1xuICAgIHRoaXMuZHJhd0JvdHRvbUxhYmVscygpO1xuICAgIHRoaXMuZHJhd1JpZ2h0TGFiZWxzKCk7XG4gIH1cblxuICAvLyBMaXN0ZW5lcnNcblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGU6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYmJpbmcnKTtcbiAgfVxuXG4gIG9uTW91c2VVcCgpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYicpO1xuICB9XG5cbiAgb25QdWxsSG9yaXpvbnRhbChlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm1vdXNlRG93bikgcmV0dXJuO1xuXG4gICAgdGhpcy5zaGlmdENoYXJ0KHRoaXMuc2hpZnQgKyBlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blgpO1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgfVxuXG4gIG9uWm9vbShlOiBXaGVlbEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy56b29tKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMub25ab29tKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMub25Nb3VzZURvd24oZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfID0+IHRoaXMub25Nb3VzZVVwKCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gdGhpcy5vblB1bGxIb3Jpem9udGFsKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgXyA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8gPT4gdGhpcy5vbk1vdXNlVXAoKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uUHVsbEhvcml6b250YWwoZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiZjYyNmJkMTE0NjQzNzk2Njc1ZVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==