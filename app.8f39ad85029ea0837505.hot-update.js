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
        _this.shiftInPixels = 0;
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
        this.draw(function () {
            _this.defineValues();
            _this.renderData();
        });
    };
    BarChart.prototype.renderData = function () {
        this.renderChanks();
        this.renderBars();
    };
    BarChart.prototype.defineValues = function () {
        this.chartWidth = this.canvas.width * this.scale;
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
            _this.ctx.fillRect(i * getChankWidth(i - 1) + _this.shiftInPixels, 0, getChankWidth(i), _this.chartHeight);
        });
    };
    BarChart.prototype.renderBars = function () {
        var _this = this;
        this.allBars.forEach(function (bar, i) {
            var priceChange = bar.Close - bar.Open;
            var volatility = bar.High - bar.Low;
            _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getThemeColor(priceChange > 0 ? 'bar-up-color' : 'bar-down-color');
            _this.ctx.fillRect(i * _this.barWidth + _this.shiftInPixels, _this.chartHeight - (bar.Close - _this.minValue) / (_this.maxValue - _this.minValue) * _this.chartHeight, _this.barWidth, (bar.Close - bar.Open) / (_this.maxValue - _this.minValue) * _this.chartHeight);
        });
    };
    BarChart.prototype.zoom = function (direction, x) {
        var nextValue = this.scale * (direction === 1 ? 1.1 : 0.9);
        var nextScale = Math.min(Math.max(nextValue, 1), 100);
        // const deltaScale = nextScale - this.scale;
        this.scale = nextScale;
        this.chartWidth = this.canvas.width * this.scale;
        this.barWidth = this.chartWidth / this.totalDataLength;
        var cursorRelativePos = this.scale * x;
        console.log(cursorRelativePos);
        // this.shiftChart(-shift);
        this.render();
    };
    BarChart.prototype.shiftChart = function (nextValue) {
        this.shiftInPixels = Math.max(Math.min(nextValue, 0), this.canvas.width - this.chartWidth);
        console.log('current shift', this.shiftInPixels);
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
        this.shiftChart(this.shiftInPixels + e.clientX - this.mouseDownX);
        this.mouseDownX = e.clientX;
    };
    BarChart.prototype.onZoom = function (e) {
        e.preventDefault();
        var delta = e.deltaY;
        var direction = delta > 0 ? -1 : 1;
        this.zoom(direction, e.clientX);
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
/******/ 	__webpack_require__.h = () => ("9b3b25269c620fb284aa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjhmMzlhZDg1MDI5ZWEwODM3NTA1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFO0lBQThCLDRCQUFLO0lBZ0JqQyxrQkFBWSxJQUFxQjtRQUMvQixrQkFBSyxXQUFFLFNBQUM7UUFOQSxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckIsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFLMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDckIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxJQUFvQjtRQUE1QixpQkFZQztRQVhDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJ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YXJ0L0JhckNoYXJ0L0JhckNoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi4vQ2hhcnRcIjtcbmltcG9ydCB7IEJhckR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQmFyLmR0b1wiO1xuaW1wb3J0IHsgQ2hhbmtEYXRhRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9DaGFua0RhdGEuZHRvXCI7XG5pbXBvcnQgeyBDb2xvcnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbG9ycy5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgcHJvdGVjdGVkIGNoYXJ0Q2hhbmtzOiBDaGFua0RhdGFEdG9bXTtcblxuICBwcm90ZWN0ZWQgY2hhcnRXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY2hhcnRIZWlnaHQ6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHRvdGFsRGF0YUxlbmd0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgYWxsQmFyczogQmFyRHRvW107XG4gIHByb3RlY3RlZCBiYXJXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgbWluVmFsdWU6IG51bWJlcjtcbiAgcHJvdGVjdGVkIG1heFZhbHVlOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIG1vdXNlRG93biA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgbW91c2VEb3duWCA9IDA7XG4gIHByb3RlY3RlZCBzY2FsZSA9IDE7IC8vIDEgLSAxMDBcbiAgcHJvdGVjdGVkIHNoaWZ0SW5QaXhlbHMgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBDaGFua0RhdGFEdG9bXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnB1dERhdGEoZGF0YSk7XG4gIH1cblxuICBwdXREYXRhKGRhdGE6IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzID0gZGF0YTtcblxuICAgIHRoaXMuaGlkZVNwaW5uZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxpc3RlbmVycygpO1xuXG4gICAgdGhpcy5kcmF3KCgpID0+IHtcbiAgICAgIHRoaXMuZGVmaW5lVmFsdWVzKCk7XG4gICAgICB0aGlzLnJlbmRlckRhdGEoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckRhdGEoKSB7XG4gICAgdGhpcy5yZW5kZXJDaGFua3MoKTtcbiAgICB0aGlzLnJlbmRlckJhcnMoKTtcbiAgfVxuXG4gIGRlZmluZVZhbHVlcygpIHtcbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy5jaGFydEhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLnRvdGFsRGF0YUxlbmd0aCA9IHRoaXMuY2hhcnRDaGFua3MubWFwKChjaGFua0RhdGEpID0+IGNoYW5rRGF0YS5CYXJzLmxlbmd0aCkucmVkdWNlKChhY2MsIHdpZHRoKSA9PiBhY2MgKyB3aWR0aCwgMCk7XG4gICAgdGhpcy5iYXJXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoO1xuICAgIHRoaXMuYWxsQmFycyA9IHRoaXMuY2hhcnRDaGFua3MucmVkdWNlKChhY2MsIGNoYW5rRGF0YSkgPT4gWy4uLmFjYywgLi4uY2hhbmtEYXRhLkJhcnNdLCBbXSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsQmFycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IHRoaXMuYWxsQmFyc1tpXS5Mb3c7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLmFsbEJhcnNbaV0uSGlnaDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSBNYXRoLm1pbih0aGlzLm1pblZhbHVlLCB0aGlzLmFsbEJhcnNbaV0uTG93KTtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IE1hdGgubWF4KHRoaXMubWF4VmFsdWUsIHRoaXMuYWxsQmFyc1tpXS5IaWdoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJDaGFua3MoKSB7XG4gICAgY29uc3QgZ2V0Q2hhbmtXaWR0aCA9IChpOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpIDwgMCkgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gdGhpcy5jaGFydFdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGggKiB0aGlzLmNoYXJ0Q2hhbmtzW2ldLkJhcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnRDaGFua3MuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRUaGVtZUNvbG9yKGBjaGFuay1iZy1jb2xvci0ke2kgKyAxICUgMn1gKVxuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiBnZXRDaGFua1dpZHRoKGkgLSAxKSArIHRoaXMuc2hpZnRJblBpeGVscyxcbiAgICAgICAgMCxcbiAgICAgICAgZ2V0Q2hhbmtXaWR0aChpKSxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckJhcnMoKSB7XG4gICAgdGhpcy5hbGxCYXJzLmZvckVhY2goKGJhciwgaSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2VDaGFuZ2UgPSBiYXIuQ2xvc2UgLSBiYXIuT3BlbjtcbiAgICAgIGNvbnN0IHZvbGF0aWxpdHkgPSBiYXIuSGlnaCAtIGJhci5Mb3c7XG5cbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihwcmljZUNoYW5nZSA+IDAgPyAnYmFyLXVwLWNvbG9yJyA6ICdiYXItZG93bi1jb2xvcicpO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiB0aGlzLmJhcldpZHRoICsgdGhpcy5zaGlmdEluUGl4ZWxzLFxuICAgICAgICB0aGlzLmNoYXJ0SGVpZ2h0IC0gKGJhci5DbG9zZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHQsXG4gICAgICAgIHRoaXMuYmFyV2lkdGgsXG4gICAgICAgIChiYXIuQ2xvc2UgLSBiYXIuT3BlbikgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpICogdGhpcy5jaGFydEhlaWdodFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHpvb20oZGlyZWN0aW9uOiBudW1iZXIsIHg6IG51bWJlcikge1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuc2NhbGUgKiAoZGlyZWN0aW9uID09PSAxID8gMS4xIDogMC45KTtcbiAgICBjb25zdCBuZXh0U2NhbGUgPSBNYXRoLm1pbihNYXRoLm1heChuZXh0VmFsdWUsIDEpLCAxMDApO1xuICAgIC8vIGNvbnN0IGRlbHRhU2NhbGUgPSBuZXh0U2NhbGUgLSB0aGlzLnNjYWxlO1xuICAgIHRoaXMuc2NhbGUgPSBuZXh0U2NhbGU7XG5cbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy5iYXJXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoO1xuXG4gICAgY29uc3QgY3Vyc29yUmVsYXRpdmVQb3MgPSB0aGlzLnNjYWxlICogeDtcbiAgICBjb25zb2xlLmxvZyhjdXJzb3JSZWxhdGl2ZVBvcyk7XG5cblxuICAgIC8vIHRoaXMuc2hpZnRDaGFydCgtc2hpZnQpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzaGlmdENoYXJ0KG5leHRWYWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zaGlmdEluUGl4ZWxzID0gTWF0aC5tYXgoTWF0aC5taW4obmV4dFZhbHVlLCAwKSwgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLmNoYXJ0V2lkdGgpO1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHNoaWZ0JywgdGhpcy5zaGlmdEluUGl4ZWxzKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRDdXJzb3JUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9IHR5cGU7XG4gIH1cblxuICBkZXN0cm95Q2hhcnQoKTogdGhpcyB7XG4gICAgc3VwZXIuZGVzdHJveUNoYXJ0KCk7XG4gICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIExpc3RlbmVyc1xuXG4gIG9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLnNldEN1cnNvclR5cGUoJ2dyYWInKTtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZTogTW91c2VFdmVudCkge1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiYmluZycpO1xuICB9XG5cbiAgb25Nb3VzZVVwKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gIH1cblxuICBvblB1bGxIb3Jpem9udGFsKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubW91c2VEb3duKSByZXR1cm47XG5cbiAgICB0aGlzLnNoaWZ0Q2hhcnQodGhpcy5zaGlmdEluUGl4ZWxzICsgZS5jbGllbnRYIC0gdGhpcy5tb3VzZURvd25YKTtcbiAgICB0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XG4gIH1cblxuICBvblpvb20oZTogV2hlZWxFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRlbHRhID0gZS5kZWx0YVk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZGVsdGEgPiAwID8gLTEgOiAxO1xuXG4gICAgdGhpcy56b29tKGRpcmVjdGlvbiwgZS5jbGllbnRYKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB0aGlzLm9uWm9vbShlKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgXyA9PiB0aGlzLm9uTW91c2VVcCgpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHRoaXMub25QdWxsSG9yaXpvbnRhbChlKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF8gPT4gdGhpcy5vbk1vdXNlTGVhdmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMub25ab29tKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMub25Nb3VzZURvd24oZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfID0+IHRoaXMub25Nb3VzZVVwKCkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gdGhpcy5vblB1bGxIb3Jpem9udGFsKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgXyA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWIzYjI1MjY5YzYyMGZiMjg0YWFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=