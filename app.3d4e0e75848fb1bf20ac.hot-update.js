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
        this.ctx.fillRect(this.canvas.width - rightLegendWidth, 0, rightLegendWidth, this.chartHeight);
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
/******/ 	__webpack_require__.h = () => ("0e936a5b08636164e6f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjNkNGUwZTc1ODQ4ZmIxYmYyMGFjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFLElBQU0sVUFBVSxHQUFHLEVBQUUsRUFBQyxLQUFLO0FBQzNCLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN0QyxJQUFNLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ3hFLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSztBQUVuQztJQUE4Qiw0QkFBSztJQWlCakMsa0JBQVksSUFBcUI7UUFDL0Isa0JBQUssV0FBRSxTQUFDO1FBTkEsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ3JCLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBS3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBQ3JCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBb0I7UUFBNUIsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsVUFB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Q0FBQztRQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVPLG1DQUFnQixHQUF4QjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0E5TTZCLHlDQUFLLEdBOE1sQzs7Ozs7Ozs7OztVQ3hORCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0JhckNoYXJ0L0JhckNoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi4vQ2hhcnRcIjtcbmltcG9ydCB7IEJhckR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQmFyLmR0b1wiO1xuaW1wb3J0IHsgQ2hhbmtEYXRhRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9DaGFua0RhdGEuZHRvXCI7XG5pbXBvcnQgeyBDb2xvcnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbG9ycy5zZXJ2aWNlXCI7XG5cbmNvbnN0IGZvbnRIZWlnaHQgPSAxNiAvLyBweFxuY29uc3QgbGVnZW5kVmVydGljYWxQYWRkaW5nID0gODsgLy8gcHhcbmNvbnN0IGJvdHRvbUxlZ2VuZEhlaWdodCA9IGZvbnRIZWlnaHQgKyBsZWdlbmRWZXJ0aWNhbFBhZGRpbmcgKiAyOyAvLyBweFxuY29uc3QgcmlnaHRMZWdlbmRXaWR0aCA9IDEwMDsgLy8gcHhcblxuZXhwb3J0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBwcm90ZWN0ZWQgY2hhcnRDaGFua3M6IENoYW5rRGF0YUR0b1tdO1xuXG4gIHByb3RlY3RlZCBjaGFydFdpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjaGFydEJhcnNBcmVhV2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGNoYXJ0SGVpZ2h0OiBudW1iZXI7XG4gIHByb3RlY3RlZCB0b3RhbERhdGFMZW5ndGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGFsbEJhcnM6IEJhckR0b1tdO1xuICBwcm90ZWN0ZWQgYmFyV2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIG1pblZhbHVlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtYXhWYWx1ZTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBtb3VzZURvd24gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG1vdXNlRG93blggPSAwO1xuICBwcm90ZWN0ZWQgc2NhbGUgPSAxOyAvLyAxIC0gMTAwXG4gIHByb3RlY3RlZCBzaGlmdCA9IDA7IC8vIHB4XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucHV0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1dERhdGEoZGF0YTogQ2hhbmtEYXRhRHRvW10pIHtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcblxuICAgIHRoaXMuY2hhcnRDaGFua3MgPSBkYXRhO1xuXG4gICAgdGhpcy5oaWRlU3Bpbm5lcigpO1xuICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVTdGF0aWNWYWx1ZXMoKTtcblxuICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUR5bmFtaWNWYWx1ZXMoKTtcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3Q2hhcnQoKSB7XG4gICAgdGhpcy5kcmF3Q2hhbmtzKCk7XG4gICAgdGhpcy5kcmF3QmFycygpO1xuICAgIHRoaXMuZHJhd0xlZ2VuZCgpO1xuICB9XG5cbiAgY2FsY3VsYXRlU3RhdGljVmFsdWVzKCkge1xuICAgIHRoaXMuYWxsQmFycyA9IHRoaXMuY2hhcnRDaGFua3MucmVkdWNlKChhY2MsIGNoYW5rRGF0YSkgPT4gWy4uLmFjYywgLi4uY2hhbmtEYXRhLkJhcnNdLCBbXSk7XG4gICAgdGhpcy50b3RhbERhdGFMZW5ndGggPSB0aGlzLmFsbEJhcnMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEJhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmFsbEJhcnNbaV0uTG93O1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5hbGxCYXJzW2ldLkhpZ2g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gTWF0aC5taW4odGhpcy5taW5WYWx1ZSwgdGhpcy5hbGxCYXJzW2ldLkxvdyk7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSBNYXRoLm1heCh0aGlzLm1heFZhbHVlLCB0aGlzLmFsbEJhcnNbaV0uSGlnaCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlRHluYW1pY1ZhbHVlcygpIHtcbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy5jaGFydEhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCAtIGJvdHRvbUxlZ2VuZEhlaWdodDtcbiAgICB0aGlzLmNoYXJ0QmFyc0FyZWFXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAtIHJpZ2h0TGVnZW5kV2lkdGg7XG4gICAgdGhpcy5iYXJXaWR0aCA9IHRoaXMuY2hhcnRCYXJzQXJlYVdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGg7XG4gIH1cblxuICB6b29tKGU6IFdoZWVsRXZlbnQpIHtcbiAgICBjb25zdCBkZWx0YSA9IGUuZGVsdGFZO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRlbHRhID4gMCA/IC0xIDogMTtcbiAgICBjb25zdCBtb3VzZVggPSBlLm9mZnNldFg7XG5cbiAgICBjb25zdCBwcmV2U2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuc2NhbGUgKiAoZGlyZWN0aW9uID09PSAxID8gMS4xIDogMC45KTtcbiAgICBjb25zdCBuZXh0U2NhbGUgPSBNYXRoLm1pbihNYXRoLm1heChuZXh0VmFsdWUsIDEpLCAxMDApO1xuXG4gICAgLy8gSGVyZSB3YXMgdGhlIEFJIGhlbHBcbiAgICBjb25zdCBzY2FsZVJhdGlvID0gbmV4dFNjYWxlIC8gcHJldlNjYWxlO1xuICAgIGNvbnN0IG1vdXNlWEluQ2hhcnRTcGFjZSA9IG1vdXNlWCAtIHRoaXMuc2hpZnQ7XG4gICAgY29uc3QgbmV3U2hpZnQgPSBtb3VzZVggLSBtb3VzZVhJbkNoYXJ0U3BhY2UgKiBzY2FsZVJhdGlvO1xuXG4gICAgdGhpcy5zY2FsZSA9IG5leHRTY2FsZTtcbiAgICB0aGlzLnNoaWZ0Q2hhcnQobmV3U2hpZnQpO1xuICB9XG5cbiAgc2hpZnRDaGFydChuZXh0VmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2hpZnQgPSBNYXRoLm1heChNYXRoLm1pbihuZXh0VmFsdWUsIDApLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMuY2hhcnRXaWR0aCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0Q3Vyc29yVHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSB0eXBlO1xuICB9XG5cbiAgZGVzdHJveUNoYXJ0KCk6IHRoaXMge1xuICAgIHN1cGVyLmRlc3Ryb3lDaGFydCgpO1xuICAgIHRoaXMuZGVzdHJveUxpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBEcmF3aW5nc1xuXG4gIGRyYXdDaGFua3MoKSB7XG4gICAgY29uc3QgZ2V0Q2hhbmtXaWR0aCA9IChpOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpIDwgMCkgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gdGhpcy5jaGFydEJhcnNBcmVhV2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aCAqIHRoaXMuY2hhcnRDaGFua3NbaV0uQmFycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydENoYW5rcy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFRoZW1lQ29sb3IoYGNoYW5rLWJnLWNvbG9yLSR7aSArIDEgJSAyfWApXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgICAgaSAqIGdldENoYW5rV2lkdGgoaSAtIDEpICsgdGhpcy5zaGlmdCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2V0Q2hhbmtXaWR0aChpKSxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRyYXdCYXJzKCkge1xuICAgIHRoaXMuYWxsQmFycy5mb3JFYWNoKChiYXIsIGkpID0+IHtcbiAgICAgIGNvbnN0IHByaWNlQ2hhbmdlID0gYmFyLkNsb3NlIC0gYmFyLk9wZW47XG4gICAgICBjb25zdCB2b2xhdGlsaXR5ID0gYmFyLkhpZ2ggLSBiYXIuTG93OyAvLyBJIGd1ZXNzIGl0J3Mgbm90IHRoZSBwdXJwb3NlIG9mIHRoZSB0YXNrLiBTa2lwIGl0IGZvciBub3cuXG5cbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihwcmljZUNoYW5nZSA+IDAgPyAnYmFyLXVwLWNvbG9yJyA6ICdiYXItZG93bi1jb2xvcicpO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiB0aGlzLmJhcldpZHRoICsgdGhpcy5zaGlmdCxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodCAtIChiYXIuQ2xvc2UgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0LFxuICAgICAgICB0aGlzLmJhcldpZHRoLFxuICAgICAgICAoYmFyLkNsb3NlIC0gYmFyLk9wZW4pIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkcmF3U2VwYXJhdG9ycygpIHtcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgdGhpcy5jaGFydEhlaWdodCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIC8vIERyYXcgdmVydGljYWwgd2hpdGUgcmVjdGFuZ2xlIHRvIGFsd2F5cyBjb3ZlciB0b3AgcmlnaHQgcGxhY2Ugb24gc2NyZWVuXG4gICAgLy8gV2lkdGggPSByaWdodExlZ2VuZFdpZHRoXG4gICAgLy8gSGVpZ2h0ID0gdGhpcy5jaGFydEhlaWdodCAtIGJvdHRvbUxlZ2VuZEhlaWdodFxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCAtIHJpZ2h0TGVnZW5kV2lkdGgsXG4gICAgICAwLFxuICAgICAgcmlnaHRMZWdlbmRXaWR0aCxcbiAgICAgIHRoaXMuY2hhcnRIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhd0xlZ2VuZCgpIHtcbiAgICB0aGlzLmRyYXdTZXBhcmF0b3JzKCk7XG4gIH1cblxuICAvLyBMaXN0ZW5lcnNcblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGU6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYmJpbmcnKTtcbiAgfVxuXG4gIG9uTW91c2VVcCgpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYicpO1xuICB9XG5cbiAgb25QdWxsSG9yaXpvbnRhbChlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm1vdXNlRG93bikgcmV0dXJuO1xuXG4gICAgdGhpcy5zaGlmdENoYXJ0KHRoaXMuc2hpZnQgKyBlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blgpO1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgfVxuXG4gIG9uWm9vbShlOiBXaGVlbEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy56b29tKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMub25ab29tKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMub25Nb3VzZURvd24oZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfID0+IHRoaXMub25Nb3VzZVVwKCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gdGhpcy5vblB1bGxIb3Jpem9udGFsKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgXyA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8gPT4gdGhpcy5vbk1vdXNlVXAoKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uUHVsbEhvcml6b250YWwoZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZTkzNmE1YjA4NjM2MTY0ZTZmNFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==