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
        _this.scale = 1; // 1 - 100
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
        this.defineValues();
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
        var nextValue = Math.pow(this.scale, 1.2 * direction);
        console.log(nextValue);
        if (nextValue > 100)
            this.scale = 100;
        if (nextValue < 1)
            this.scale = 1;
        this.scale = nextValue;
        console.log(this.scale);
    };
    BarChart.prototype.destroyChart = function () {
        _super.prototype.destroyChart.call(this);
        this.destroyListeners();
        return this;
    };
    // Listeners
    BarChart.prototype.onPullHorizontal = function () {
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
    };
    BarChart.prototype.destroyListeners = function () {
    };
    return BarChart;
}(_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart));



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6e3950e02230c5bf1e0c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjdlMzM2NWRiNzNjYTAxMzI5Y2NmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR2dDO0FBRWpFO0lBQThCLDRCQUFLO0lBYWpDLGtCQUFZLElBQXFCO1FBQy9CLGtCQUFLLFdBQUUsU0FBQztRQUhBLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBSzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBQ3JCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBb0I7UUFBNUIsaUJBWUM7UUFYQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFNBQVMsSUFBSyxnQkFBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVB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VUFBTyxDQUFhO1FBQ2xCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVuQixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLElBQU0sU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLGtDQUFlLEdBQXZCO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFDLElBQUksWUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8sbUNBQWdCLEdBQXhCO0lBQ0EsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLENBOUg2Qix5Q0FBSyxHQThIbEM7Ozs7Ozs7Ozs7VUNuSUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdG8vLi9zcmMvY29tcG9uZW50cy9DaGFydC9CYXJDaGFydC9CYXJDaGFydC50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4uL0NoYXJ0XCI7XG5pbXBvcnQgeyBCYXJEdG8gfSBmcm9tIFwiLi4vLi4vLi4vZHRvL0Jhci5kdG9cIjtcbmltcG9ydCB7IENoYW5rRGF0YUR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQ2hhbmtEYXRhLmR0b1wiO1xuaW1wb3J0IHsgQ29sb3JzU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db2xvcnMuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIHByb3RlY3RlZCBjaGFydENoYW5rczogQ2hhbmtEYXRhRHRvW107XG5cbiAgcHJvdGVjdGVkIGNoYXJ0V2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGNoYXJ0SGVpZ2h0OiBudW1iZXI7XG4gIHByb3RlY3RlZCB0b3RhbERhdGFMZW5ndGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIGFsbEJhcnM6IEJhckR0b1tdO1xuICBwcm90ZWN0ZWQgYmFyV2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIG1pblZhbHVlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBtYXhWYWx1ZTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBzY2FsZSA9IDE7IC8vIDEgLSAxMDBcblxuICBjb25zdHJ1Y3RvcihkYXRhPzogQ2hhbmtEYXRhRHRvW10pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wdXREYXRhKGRhdGEpO1xuICB9XG5cbiAgcHV0RGF0YShkYXRhOiBDaGFua0RhdGFEdG9bXSkge1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuXG4gICAgdGhpcy5jaGFydENoYW5rcyA9IGRhdGE7XG5cbiAgICB0aGlzLmhpZGVTcGlubmVyKCk7XG4gICAgdGhpcy5jcmVhdGVMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICB0aGlzLmRlZmluZVZhbHVlcygpO1xuICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJEYXRhKCkge1xuICAgIHRoaXMuZGVmaW5lVmFsdWVzKCk7XG4gICAgdGhpcy5yZW5kZXJDaGFua3MoKTtcbiAgICB0aGlzLnJlbmRlckJhcnMoKTtcbiAgfVxuXG4gIGRlZmluZVZhbHVlcygpIHtcbiAgICB0aGlzLmNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmNoYXJ0SGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMudG90YWxEYXRhTGVuZ3RoID0gdGhpcy5jaGFydENoYW5rcy5tYXAoKGNoYW5rRGF0YSkgPT4gY2hhbmtEYXRhLkJhcnMubGVuZ3RoKS5yZWR1Y2UoKGFjYywgd2lkdGgpID0+IGFjYyArIHdpZHRoLCAwKTtcbiAgICB0aGlzLmJhcldpZHRoID0gdGhpcy5jaGFydFdpZHRoIC8gdGhpcy50b3RhbERhdGFMZW5ndGg7XG4gICAgdGhpcy5hbGxCYXJzID0gdGhpcy5jaGFydENoYW5rcy5yZWR1Y2UoKGFjYywgY2hhbmtEYXRhKSA9PiBbLi4uYWNjLCAuLi5jaGFua0RhdGEuQmFyc10sIFtdKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxCYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5hbGxCYXJzW2ldLkxvdztcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYWxsQmFyc1tpXS5IaWdoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IE1hdGgubWluKHRoaXMubWluVmFsdWUsIHRoaXMuYWxsQmFyc1tpXS5Mb3cpO1xuICAgICAgICB0aGlzLm1heFZhbHVlID0gTWF0aC5tYXgodGhpcy5tYXhWYWx1ZSwgdGhpcy5hbGxCYXJzW2ldLkhpZ2gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNoYW5rcygpIHtcbiAgICBjb25zdCBnZXRDaGFua1dpZHRoID0gKGk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGkgPCAwKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB0aGlzLmNoYXJ0V2lkdGggLyB0aGlzLnRvdGFsRGF0YUxlbmd0aCAqIHRoaXMuY2hhcnRDaGFua3NbaV0uQmFycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydENoYW5rcy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFRoZW1lQ29sb3IoYGNoYW5rLWJnLWNvbG9yLSR7aSArIDEgJSAyfWApXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChpICogZ2V0Q2hhbmtXaWR0aChpIC0gMSksIDAsIGdldENoYW5rV2lkdGgoaSksIHRoaXMuY2hhcnRIZWlnaHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyQmFycygpIHtcbiAgICB0aGlzLmFsbEJhcnMuZm9yRWFjaCgoYmFyLCBpKSA9PiB7XG4gICAgICBjb25zdCBwcmljZUNoYW5nZSA9IGJhci5DbG9zZSAtIGJhci5PcGVuO1xuICAgICAgY29uc3Qgdm9sYXRpbGl0eSA9IGJhci5IaWdoIC0gYmFyLkxvdztcblxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRUaGVtZUNvbG9yKHByaWNlQ2hhbmdlID4gMCA/ICdiYXItdXAtY29sb3InIDogJ2Jhci1kb3duLWNvbG9yJyk7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgICAgaSAqIHRoaXMuYmFyV2lkdGgsXG4gICAgICAgIHRoaXMuY2hhcnRIZWlnaHQgLSAoYmFyLkNsb3NlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpICogdGhpcy5jaGFydEhlaWdodCxcbiAgICAgICAgdGhpcy5iYXJXaWR0aCxcbiAgICAgICAgKGJhci5DbG9zZSAtIGJhci5PcGVuKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgKiB0aGlzLmNoYXJ0SGVpZ2h0XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgem9vbShkaXJlY3Rpb246IG51bWJlcikge1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IE1hdGgucG93KHRoaXMuc2NhbGUsIDEuMiAqIGRpcmVjdGlvbik7XG5cbiAgICBjb25zb2xlLmxvZyhuZXh0VmFsdWUpO1xuXG4gICAgaWYgKG5leHRWYWx1ZSA+IDEwMCkgdGhpcy5zY2FsZSA9IDEwMDtcbiAgICBpZiAobmV4dFZhbHVlIDwgMSkgdGhpcy5zY2FsZSA9IDE7XG5cbiAgICB0aGlzLnNjYWxlID0gbmV4dFZhbHVlO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zY2FsZSk7XG4gIH1cblxuICBkZXN0cm95Q2hhcnQoKTogdGhpcyB7XG4gICAgc3VwZXIuZGVzdHJveUNoYXJ0KCk7XG4gICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIExpc3RlbmVyc1xuXG4gIG9uUHVsbEhvcml6b250YWwoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uWm9vbShlOiBXaGVlbEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGVsdGEgPSBlLmRlbHRhWTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkZWx0YSA+IDAgPyAtMSA6IDE7XG5cbiAgICB0aGlzLnpvb20oZGlyZWN0aW9uKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMub25ab29tKGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUxpc3RlbmVycygpIHtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmUzOTUwZTAyMjMwYzViZjFlMGNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=