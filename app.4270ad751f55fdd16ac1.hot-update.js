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
    BarChart.prototype.zoom = function (e) {
        var delta = e.deltaY;
        var direction = delta > 0 ? -1 : 1;
        var mouseX = e.offsetX;
        var prevScale = this.scale;
        var nextValue = this.scale * (direction === 1 ? 1.1 : 0.9);
        var nextScale = Math.min(Math.max(nextValue, 1), 100);
        this.chartWidth = this.canvas.width * nextScale;
        this.barWidth = this.chartWidth / this.totalDataLength;
        // Here was the AI help
        var scaleRatio = nextScale / prevScale;
        var mouseXInChartSpace = mouseX - this.shift;
        var newShift = mouseX - mouseXInChartSpace * scaleRatio;
        this.scale = nextScale;
        this.shiftChart(newShift);
        this.render();
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
    BarChart.prototype.renderChanks = function () {
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
    BarChart.prototype.renderBars = function () {
        var _this = this;
        this.allBars.forEach(function (bar, i) {
            var priceChange = bar.Close - bar.Open;
            var volatility = bar.High - bar.Low;
            _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getThemeColor(priceChange > 0 ? 'bar-up-color' : 'bar-down-color');
            _this.ctx.fillRect(i * _this.barWidth + _this.shift, _this.chartHeight - (bar.Close - _this.minValue) / (_this.maxValue - _this.minValue) * _this.chartHeight, _this.barWidth, (bar.Close - bar.Open) / (_this.maxValue - _this.minValue) * _this.chartHeight);
        });
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
/******/ 	__webpack_require__.h = () => ("5fd14baf078b355a30a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjQyNzBhZDc1MWY1NWZkZDE2YWMxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFO0lBQThCLDRCQUFLO0lBZ0JqQyxrQkFBWSxJQUFxQjtRQUMvQixrQkFBSyxXQUFFLFNBQUM7UUFOQSxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUtsQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUNyQixDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQW9CO1FBQTVCLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWxCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNSLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUks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Ozs7Ozs7Ozs7O1VDeExEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQmFyQ2hhcnQvQmFyQ2hhcnQudHMiLCJ3ZWJwYWNrOi8vZnRvL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydCB9IGZyb20gXCIuLi9DaGFydFwiO1xuaW1wb3J0IHsgQmFyRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9CYXIuZHRvXCI7XG5pbXBvcnQgeyBDaGFua0RhdGFEdG8gfSBmcm9tIFwiLi4vLi4vLi4vZHRvL0NoYW5rRGF0YS5kdG9cIjtcbmltcG9ydCB7IENvbG9yc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29sb3JzLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBwcm90ZWN0ZWQgY2hhcnRDaGFua3M6IENoYW5rRGF0YUR0b1tdO1xuXG4gIHByb3RlY3RlZCBjaGFydFdpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjaGFydEhlaWdodDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgdG90YWxEYXRhTGVuZ3RoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBhbGxCYXJzOiBCYXJEdG9bXTtcbiAgcHJvdGVjdGVkIGJhcldpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtaW5WYWx1ZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgbWF4VmFsdWU6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgbW91c2VEb3duID0gZmFsc2U7XG4gIHByb3RlY3RlZCBtb3VzZURvd25YID0gMDtcbiAgcHJvdGVjdGVkIHNjYWxlID0gMTsgLy8gMSAtIDEwMFxuICBwcm90ZWN0ZWQgc2hpZnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBDaGFua0RhdGFEdG9bXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnB1dERhdGEoZGF0YSk7XG4gIH1cblxuICBwdXREYXRhKGRhdGE6IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzID0gZGF0YTtcblxuICAgIHRoaXMuaGlkZVNwaW5uZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxpc3RlbmVycygpO1xuXG4gICAgdGhpcy5kcmF3KCgpID0+IHtcbiAgICAgIHRoaXMuZGVmaW5lVmFsdWVzKCk7XG4gICAgICB0aGlzLnJlbmRlckRhdGEoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckRhdGEoKSB7XG4gICAgdGhpcy5yZW5kZXJDaGFua3MoKTtcbiAgICB0aGlzLnJlbmRlckJhcnMoKTtcbiAgfVxuXG4gIGRlZmluZVZhbHVlcygpIHtcbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy5jaGFydEhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLnRvdGFsRGF0YUxlbmd0aCA9IHRoaXMuY2hhcnRDaGFua3MubWFwKChjaGFua0RhdGEpID0+IGNoYW5rRGF0YS5CYXJzLmxlbmd0aCkucmVkdWNlKChhY2MsIHdpZHRoKSA9PiBhY2MgKyB3aWR0aCwgMCk7XG4gICAgdGhpcy5iYXJXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoO1xuICAgIHRoaXMuYWxsQmFycyA9IHRoaXMuY2hhcnRDaGFua3MucmVkdWNlKChhY2MsIGNoYW5rRGF0YSkgPT4gWy4uLmFjYywgLi4uY2hhbmtEYXRhLkJhcnNdLCBbXSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsQmFycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IHRoaXMuYWxsQmFyc1tpXS5Mb3c7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLmFsbEJhcnNbaV0uSGlnaDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSBNYXRoLm1pbih0aGlzLm1pblZhbHVlLCB0aGlzLmFsbEJhcnNbaV0uTG93KTtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IE1hdGgubWF4KHRoaXMubWF4VmFsdWUsIHRoaXMuYWxsQmFyc1tpXS5IaWdoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB6b29tKGU6IFdoZWVsRXZlbnQpIHtcbiAgICBjb25zdCBkZWx0YSA9IGUuZGVsdGFZO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRlbHRhID4gMCA/IC0xIDogMTtcbiAgICBjb25zdCBtb3VzZVggPSBlLm9mZnNldFg7XG5cbiAgICBjb25zdCBwcmV2U2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuc2NhbGUgKiAoZGlyZWN0aW9uID09PSAxID8gMS4xIDogMC45KTtcbiAgICBjb25zdCBuZXh0U2NhbGUgPSBNYXRoLm1pbihNYXRoLm1heChuZXh0VmFsdWUsIDEpLCAxMDApO1xuXG4gICAgdGhpcy5jaGFydFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggKiBuZXh0U2NhbGU7XG4gICAgdGhpcy5iYXJXaWR0aCA9IHRoaXMuY2hhcnRXaWR0aCAvIHRoaXMudG90YWxEYXRhTGVuZ3RoO1xuXG4gICAgLy8gSGVyZSB3YXMgdGhlIEFJIGhlbHBcbiAgICBjb25zdCBzY2FsZVJhdGlvID0gbmV4dFNjYWxlIC8gcHJldlNjYWxlO1xuICAgIGNvbnN0IG1vdXNlWEluQ2hhcnRTcGFjZSA9IG1vdXNlWCAtIHRoaXMuc2hpZnQ7XG4gICAgY29uc3QgbmV3U2hpZnQgPSBtb3VzZVggLSBtb3VzZVhJbkNoYXJ0U3BhY2UgKiBzY2FsZVJhdGlvO1xuXG4gICAgdGhpcy5zY2FsZSA9IG5leHRTY2FsZTtcbiAgICB0aGlzLnNoaWZ0Q2hhcnQobmV3U2hpZnQpXG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2hpZnRDaGFydChuZXh0VmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2hpZnQgPSBNYXRoLm1heChNYXRoLm1pbihuZXh0VmFsdWUsIDApLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMuY2hhcnRXaWR0aCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0Q3Vyc29yVHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSB0eXBlO1xuICB9XG5cbiAgZGVzdHJveUNoYXJ0KCk6IHRoaXMge1xuICAgIHN1cGVyLmRlc3Ryb3lDaGFydCgpO1xuICAgIHRoaXMuZGVzdHJveUxpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBEcmF3aW5nc1xuXG4gIHJlbmRlckNoYW5rcygpIHtcbiAgICBjb25zdCBnZXRDaGFua1dpZHRoID0gKGk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGkgPCAwKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB0aGlzLmNoYXJ0V2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aCAqIHRoaXMuY2hhcnRDaGFua3NbaV0uQmFycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydENoYW5rcy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFRoZW1lQ29sb3IoYGNoYW5rLWJnLWNvbG9yLSR7aSArIDEgJSAyfWApXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgICAgaSAqIGdldENoYW5rV2lkdGgoaSAtIDEpICsgdGhpcy5zaGlmdCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2V0Q2hhbmtXaWR0aChpKSxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckJhcnMoKSB7XG4gICAgdGhpcy5hbGxCYXJzLmZvckVhY2goKGJhciwgaSkgPT4ge1xuICAgICAgY29uc3QgcHJpY2VDaGFuZ2UgPSBiYXIuQ2xvc2UgLSBiYXIuT3BlbjtcbiAgICAgIGNvbnN0IHZvbGF0aWxpdHkgPSBiYXIuSGlnaCAtIGJhci5Mb3c7XG5cbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihwcmljZUNoYW5nZSA+IDAgPyAnYmFyLXVwLWNvbG9yJyA6ICdiYXItZG93bi1jb2xvcicpO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICAgIGkgKiB0aGlzLmJhcldpZHRoICsgdGhpcy5zaGlmdCxcbiAgICAgICAgdGhpcy5jaGFydEhlaWdodCAtIChiYXIuQ2xvc2UgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0LFxuICAgICAgICB0aGlzLmJhcldpZHRoLFxuICAgICAgICAoYmFyLkNsb3NlIC0gYmFyLk9wZW4pIC8gKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKSAqIHRoaXMuY2hhcnRIZWlnaHRcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBMaXN0ZW5lcnNcblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGU6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93blggPSBlLmNsaWVudFg7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYmJpbmcnKTtcbiAgfVxuXG4gIG9uTW91c2VVcCgpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMuc2V0Q3Vyc29yVHlwZSgnZ3JhYicpO1xuICB9XG5cbiAgb25QdWxsSG9yaXpvbnRhbChlOiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm1vdXNlRG93bikgcmV0dXJuO1xuXG4gICAgdGhpcy5zaGlmdENoYXJ0KHRoaXMuc2hpZnQgKyBlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blgpO1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcbiAgfVxuXG4gIG9uWm9vbShlOiBXaGVlbEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy56b29tKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMub25ab29tKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMub25Nb3VzZURvd24oZSkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfID0+IHRoaXMub25Nb3VzZVVwKCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gdGhpcy5vblB1bGxIb3Jpem9udGFsKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgXyA9PiB0aGlzLm9uTW91c2VMZWF2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5vblpvb20oZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF8gPT4gdGhpcy5vbk1vdXNlVXAoKSk7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLm9uUHVsbEhvcml6b250YWwoZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfID0+IHRoaXMub25Nb3VzZUxlYXZlKCkpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZmQxNGJhZjA3OGIzNTVhMzBhMlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==