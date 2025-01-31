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
        this.defineValues();
        this.draw(function () {
            _this.renderData();
        });
    };
    BarChart.prototype.renderData = function () {
        this.renderChanks();
        this.renderBars();
    };
    BarChart.prototype.defineValues = function () {
        this.chartWidth = this.canvas.width;
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
        console.log(shift);
        this.shift = Math.max(Math.min(nextValue, 0), this.wrapper.clientWidth - this.chartWidth);
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
    BarChart.prototype.setDefaultCursor = function () {
        this.setCursorType('grab');
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
    };
    BarChart.prototype.destroyListeners = function () {
        var _this = this;
        this.canvas.removeEventListener('wheel', function (e) { return _this.onZoom(e); });
        this.canvas.removeEventListener('mousedown', function (e) { return _this.onMouseDown(e); });
        this.canvas.removeEventListener('mouseup', function (_) { return _this.onMouseUp(); });
        this.canvas.removeEventListener('mousemove', function (e) { return _this.onPullHorizontal(e); });
    };
    return BarChart;
}(_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart));



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f7c10bd079ceec2884dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjE2ZGYyOGM5Mzc0Yjk5MDZiZDc4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFO0lBQThCLDRCQUFLO0lBZ0JqQyxrQkFBWSxJQUFxQjtRQUMvQixrQkFBSyxXQUFFLFNBQUM7UUFOQSxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUtsQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUNyQixDQUFDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLElBQW9CO1FBQTVCLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRWxCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcs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RCxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLENBcEs2Qix5Q0FBSyxHQW9LbEM7Ozs7Ozs7Ozs7VUN6S0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdG8vLi9zcmMvY29tcG9uZW50cy9DaGFydC9CYXJDaGFydC9CYXJDaGFydC50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4uL0NoYXJ0XCI7XG5pbXBvcnQgeyBCYXJEdG8gfSBmcm9tIFwiLi4vLi4vLi4vZHRvL0Jhci5kdG9cIjtcbmltcG9ydCB7IENoYW5rRGF0YUR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQ2hhbmtEYXRhLmR0b1wiO1xuaW1wb3J0IHsgQ29sb3JzU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db2xvcnMuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIHByb3RlY3RlZCBjaGFydENoYW5rczogQ2hhbmtEYXRhRHRvW107XG5cbiAgcHJvdGVjdGVkIGNoYXJ0V2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGNoYXJ0SGVpZ2h0OiBudW1iZXI7XG4gIHByb3RlY3RlZCB0b3RhbERhdGFMZW5ndGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGFsbEJhcnM6IEJhckR0b1tdO1xuICBwcm90ZWN0ZWQgYmFyV2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIG1pblZhbHVlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtYXhWYWx1ZTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBtb3VzZURvd24gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG1vdXNlRG93blggPSAwO1xuICBwcm90ZWN0ZWQgc2NhbGUgPSAxOyAvLyAxIC0gMTAwXG4gIHByb3RlY3RlZCBzaGlmdCA9IDA7XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucHV0RGF0YShkYXRhKTtcbiAgfVxuXG4gIHB1dERhdGEoZGF0YTogQ2hhbmtEYXRhRHRvW10pIHtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcblxuICAgIHRoaXMuY2hhcnRDaGFua3MgPSBkYXRhO1xuXG4gICAgdGhpcy5oaWRlU3Bpbm5lcigpO1xuICAgIHRoaXMuY3JlYXRlTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5kZWZpbmVWYWx1ZXMoKTtcblxuICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckRhdGEoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckRhdGEoKSB7XG4gICAgdGhpcy5yZW5kZXJDaGFua3MoKTtcbiAgICB0aGlzLnJlbmRlckJhcnMoKTtcbiAgfVxuXG4gIGRlZmluZVZhbHVlcygpIHtcbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMudG90YWxEYXRhTGVuZ3RoID0gdGhpcy5jaGFydENoYW5rcy5tYXAoKGNoYW5rRGF0YSkgPT4gY2hhbmtEYXRhLkJhcnMubGVuZ3RoKS5yZWR1Y2UoKGFjYywgd2lkdGgpID0+IGFjYyArIHdpZHRoLCAwKTtcbiAgICB0aGlzLmJhcldpZHRoID0gdGhpcy5jaGFydFdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGg7XG4gICAgdGhpcy5hbGxCYXJzID0gdGhpcy5jaGFydENoYW5rcy5yZWR1Y2UoKGFjYywgY2hhbmtEYXRhKSA9PiBbLi4uYWNjLCAuLi5jaGFua0RhdGEuQmFyc10sIFtdKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxCYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5hbGxCYXJzW2ldLkxvdztcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYWxsQmFyc1tpXS5IaWdoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IE1hdGgubWluKHRoaXMubWluVmFsdWUsIHRoaXMuYWxsQmFyc1tpXS5Mb3cpO1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gTWF0aC5tYXgodGhpcy5tYXhWYWx1ZSwgdGhpcy5hbGxCYXJzW2ldLkhpZ2gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNoYW5rcygpIHtcbiAgICBjb25zdCBnZXRDaGFua1dpZHRoID0gKGk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGkgPCAwKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB0aGlzLmNoYXJ0V2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aCAqIHRoaXMuY2hhcnRDaGFua3NbaV0uQmFycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydENoYW5rcy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFRoZW1lQ29sb3IoYGNoYW5rLWJnLWNvbG9yLSR7aSArIDEgJSAyfWApXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChpICogZ2V0Q2hhbmtXaWR0aChpIC0gMSksIDAsIGdldENoYW5rV2lkdGgoaSksIHRoaXMuY2hhcnRIZWlnaHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyQmFycygpIHtcbiAgICB0aGlzLmFsbEJhcnMuZm9yRWFjaCgoYmFyLCBpKSA9PiB7XG4gICAgICBjb25zdCBwcmljZUNoYW5nZSA9IGJhci5DbG9zZSAtIGJhci5PcGVuO1xuICAgICAgY29uc3Qgdm9sYXRpbGl0eSA9IGJhci5IaWdoIC0gYmFyLkxvdztcblxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRUaGVtZUNvbG9yKHByaWNlQ2hhbmdlID4gMCA/ICdiYXItdXAtY29sb3InIDogJ2Jhci1kb3duLWNvbG9yJyk7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgICAgaSAqIHRoaXMuYmFyV2lkdGgsXG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHQgLSAoYmFyLkNsb3NlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpICogdGhpcy5jaGFydEhlaWdodCxcbiAgICAgICAgdGhpcy5iYXJXaWR0aCxcbiAgICAgICAgKGJhci5DbG9zZSAtIGJhci5PcGVuKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgem9vbShkaXJlY3Rpb246IG51bWJlcikge1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuc2NhbGUgKiAoZGlyZWN0aW9uID09PSAxID8gMS4xIDogMC45KTtcblxuICAgIHRoaXMuc2NhbGUgPSBNYXRoLm1pbihNYXRoLm1heChuZXh0VmFsdWUsIDEpLCAxMDApO1xuXG4gICAgdGhpcy5jaGFydFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggKiB0aGlzLnNjYWxlO1xuICAgIHRoaXMuYmFyV2lkdGggPSB0aGlzLmNoYXJ0V2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aDtcbiAgfVxuXG4gIHNoaWZ0Q2hhcnQoc2hpZnQ6IG51bWJlcikge1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuc2hpZnQgKyBzaGlmdDtcblxuICAgIGNvbnNvbGUubG9nKHNoaWZ0KTtcblxuXG4gICAgdGhpcy5zaGlmdCA9IE1hdGgubWF4KE1hdGgubWluKG5leHRWYWx1ZSwgMCksIHRoaXMud3JhcHBlci5jbGllbnRXaWR0aCAtIHRoaXMuY2hhcnRXaWR0aCk7XG4gIH1cblxuICBzZXRDdXJzb3JUeXBlKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmN1cnNvciA9IHR5cGU7XG4gIH1cblxuICBkZXN0cm95Q2hhcnQoKTogdGhpcyB7XG4gICAgc3VwZXIuZGVzdHJveUNoYXJ0KCk7XG4gICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIExpc3RlbmVyc1xuXG4gIHNldERlZmF1bHRDdXJzb3IoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3JUeXBlKCdncmFiJyk7XG4gIH1cblxuICBvbk1vdXNlRG93bihlOiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd25YID0gZS5jbGllbnRYO1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLnNldEN1cnNvclR5cGUoJ2dyYWJiaW5nJyk7XG4gIH1cblxuICBvbk1vdXNlVXAoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnNldEN1cnNvclR5cGUoJ2dyYWInKTtcbiAgfVxuXG4gIG9uUHVsbEhvcml6b250YWwoZTogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5tb3VzZURvd24pIHJldHVybjtcblxuICAgIHRoaXMuc2hpZnRDaGFydChlLmNsaWVudFggLSB0aGlzLm1vdXNlRG93blgpO1xuICAgIHRoaXMubW91c2VEb3duWCA9IGUuY2xpZW50WDtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBvblpvb20oZTogV2hlZWxFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRlbHRhID0gZS5kZWx0YVk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZGVsdGEgPiAwID8gLTEgOiAxO1xuXG4gICAgdGhpcy56b29tKGRpcmVjdGlvbik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB0aGlzLm9uWm9vbShlKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgXyA9PiB0aGlzLm9uTW91c2VVcCgpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHRoaXMub25QdWxsSG9yaXpvbnRhbChlKSk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMub25ab29tKGUpKTtcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMub25Nb3VzZURvd24oZSkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfID0+IHRoaXMub25Nb3VzZVVwKCkpO1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gdGhpcy5vblB1bGxIb3Jpem9udGFsKGUpKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjdjMTBiZDA3OWNlZWMyODg0ZGRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=