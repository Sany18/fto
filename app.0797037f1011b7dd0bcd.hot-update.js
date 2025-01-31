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
        this.shift = nextValue;
        console.log(this.shift);
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
        this.shiftChart(e.clientX - this.mouseDownX);
        this.mouseDownX = e.clientX;
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
/******/ 	__webpack_require__.h = () => ("e0c27241c1df6bc00ded")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjA3OTcwMzdmMTAxMWI3ZGQwYmNkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFO0lBQThCLDRCQUFLO0lBZ0JqQyxrQkFBWSxJQUFxQjtRQUMvQixrQkFBSyxXQUFFLFNBQUM7UUFOQSxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUtsQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUNyQixDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQW9CO1FBQTVCLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWxCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNSLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUks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WUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxDQXRLNkIseUNBQUssR0FzS2xDOzs7Ozs7Ozs7O1VDM0tEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQmFyQ2hhcnQvQmFyQ2hhcnQudHMiLCJ3ZWJwYWNrOi8vZnRvL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydCB9IGZyb20gXCIuLi9DaGFydFwiO1xuaW1wb3J0IHsgQmFyRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9CYXIuZHRvXCI7XG5pbXBvcnQgeyBDaGFua0RhdGFEdG8gfSBmcm9tIFwiLi4vLi4vLi4vZHRvL0NoYW5rRGF0YS5kdG9cIjtcbmltcG9ydCB7IENvbG9yc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29sb3JzLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBwcm90ZWN0ZWQgY2hhcnRDaGFua3M6IENoYW5rRGF0YUR0b1tdO1xuXG4gIHByb3RlY3RlZCBjaGFydFdpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjaGFydEhlaWdodDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgdG90YWxEYXRhTGVuZ3RoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBhbGxCYXJzOiBCYXJEdG9bXTtcbiAgcHJvdGVjdGVkIGJhcldpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtaW5WYWx1ZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgbWF4VmFsdWU6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgbW91c2VEb3duID0gZmFsc2U7XG4gIHByb3RlY3RlZCBtb3VzZURvd25YID0gMDtcbiAgcHJvdGVjdGVkIHNjYWxlID0gMTsgLy8gMSAtIDEwMFxuICBwcm90ZWN0ZWQgc2hpZnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBDaGFua0RhdGFEdG9bXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnB1dERhdGEoZGF0YSk7XG4gIH1cblxuICBwdXREYXRhKGRhdGE6IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzID0gZGF0YTtcblxuICAgIHRoaXMuaGlkZVNwaW5uZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxpc3RlbmVycygpO1xuXG4gICAgdGhpcy5kcmF3KCgpID0+IHtcbiAgICAgIHRoaXMuZGVmaW5lVmFsdWVzKCk7XG4gICAgICB0aGlzLnJlbmRlckRhdGEoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckRhdGEoKSB7XG4gICAgdGhpcy5yZW5kZXJDaGFua3MoKTtcbiAgICB0aGlzLnJlbmRlckJhcnMoKTtcbiAgfVxuXG4gIGRlZmluZVZhbHVlcygpIHtcbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy5jaGFydEhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLnRvdGFsRGF0YUxlbmd0aCA9IHRoaXMuY2hhcnRDaGFua3MubWFwKChjaGFua0RhdGEpID0+IGNoYW5rRGF0YS5CYXJzLmxlbmd0aCkucmVkdWNlKChhY2MsIHdpZHRoKSA9PiBhY2MgKyB3aWR0aCwgMCk7XG4gICAgdGhpcy5iYXJXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoO1xuICAgIHRoaXMuYWxsQmFycyA9IHRoaXMuY2hhcnRDaGFua3MucmVkdWNlKChhY2MsIGNoYW5rRGF0YSkgPT4gWy4uLmFjYywgLi4uY2hhbmtEYXRhLkJhcnNdLCBbXSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsQmFycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IHRoaXMuYWxsQmFyc1tpXS5Mb3c7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLmFsbEJhcnNbaV0uSGlnaDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSBNYXRoLm1pbih0aGlzLm1pblZhbHVlLCB0aGlzLmFsbEJhcnNbaV0uTG93KTtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IE1hdGgubWF4KHRoaXMubWF4VmFsdWUsIHRoaXMuYWxsQmFyc1tpXS5IaWdoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJDaGFua3MoKSB7XG4gICAgY29uc3QgZ2V0Q2hhbmtXaWR0aCA9IChpOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpIDwgMCkgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gdGhpcy5jaGFydFdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGggKiB0aGlzLmNoYXJ0Q2hhbmtzW2ldLkJhcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnRDaGFua3MuZm9yRWFjaCgoXywgaSkgPT4ge1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRUaGVtZUNvbG9yKGBjaGFuay1iZy1jb2xvci0ke2kgKyAxICUgMn1gKVxuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoaSAqIGdldENoYW5rV2lkdGgoaSAtIDEpLCAwLCBnZXRDaGFua1dpZHRoKGkpLCB0aGlzLmNoYXJ0SGVpZ2h0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckJhcnMoKSB7XG4gICAgdGhpcy5hbGxCYXJzLmZvckVhY2goKGJhciwgaSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2VDaGFuZ2UgPSBiYXIuQ2xvc2UgLSBiYXIuT3BlbjtcbiAgICAgIGNvbnN0IHZvbGF0aWxpdHkgPSBiYXIuSGlnaCAtIGJhci5Mb3c7XG5cbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihwcmljZUNoYW5nZSA+IDAgPyAnYmFyLXVwLWNvbG9yJyA6ICdiYXItZG93bi1jb2xvcicpO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiB0aGlzLmJhcldpZHRoLFxuICAgICAgICB0aGlzLmNoYXJ0SGVpZ2h0IC0gKGJhci5DbG9zZSAtIHRoaXMubWluVmFsdWUpIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHQsXG4gICAgICAgIHRoaXMuYmFyV2lkdGgsXG4gICAgICAgIChiYXIuQ2xvc2UgLSBiYXIuT3BlbikgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpICogdGhpcy5jaGFydEhlaWdodFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHpvb20oZGlyZWN0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLnNjYWxlICogKGRpcmVjdGlvbiA9PT0gMSA/IDEuMSA6IDAuOSk7XG5cbiAgICB0aGlzLnNjYWxlID0gTWF0aC5taW4oTWF0aC5tYXgobmV4dFZhbHVlLCAxKSwgMTAwKTtcblxuICAgIHRoaXMuY2hhcnRXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoICogdGhpcy5zY2FsZTtcbiAgICB0aGlzLmJhcldpZHRoID0gdGhpcy5jaGFydFdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGg7XG4gIH1cblxuICBzaGlmdENoYXJ0KHNoaWZ0OiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLnNoaWZ0ICsgc2hpZnQ7XG5cbiAgICB0aGlzLnNoaWZ0ID0gbmV4dFZhbHVlO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zaGlmdCk7XG4gIH1cblxuICBzZXRDdXJzb3JUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9IHR5cGU7XG4gIH1cblxuICBkZXN0cm95Q2hhcnQoKTogdGhpcyB7XG4gICAgc3VwZXIuZGVzdHJveUNoYXJ0KCk7XG4gICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIExpc3RlbmVyc1xuXG4gIG9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLnNldEN1cnNvclR5cGUoJ2dyYWInKTtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZTogTW91c2VFdmVudCkge1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiYmluZycpO1xuICB9XG5cbiAgb25Nb3VzZVVwKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gIH1cblxuICBvblB1bGxIb3Jpem9udGFsKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubW91c2VEb3duKSByZXR1cm47XG5cbiAgICB0aGlzLnNoaWZ0Q2hhcnQoZS5jbGllbnRYIC0gdGhpcy5tb3VzZURvd25YKTtcbiAgICB0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25ab29tKGU6IFdoZWVsRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkZWx0YSA9IGUuZGVsdGFZO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRlbHRhID4gMCA/IC0xIDogMTtcblxuICAgIHRoaXMuem9vbShkaXJlY3Rpb24pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8gPT4gdGhpcy5vbk1vdXNlVXAoKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uUHVsbEhvcml6b250YWwoZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB0aGlzLm9uWm9vbShlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgXyA9PiB0aGlzLm9uTW91c2VVcCgpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHRoaXMub25QdWxsSG9yaXpvbnRhbChlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF8gPT4gdGhpcy5vbk1vdXNlTGVhdmUoKSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUwYzI3MjQxYzFkZjZiYzAwZGVkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9