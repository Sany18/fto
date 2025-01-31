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


var BarChart = /** @class */ (function (_super) {
    __extends(BarChart, _super);
    function BarChart(data) {
        var _this = _super.call(this) || this;
        _this.chartChanks = data;
        _this.draw(function () {
            _this.renderData();
        });
        return _this;
    }
    BarChart.prototype.renderData = function () {
        var _this = this;
        var chartWidth = this.canvas.width;
        var chartHeight = this.canvas.height;
        var totalLength = this.chartChanks.map(function (chankData) { return chankData.Bars.length; }).reduce(function (acc, width) { return acc + width; }, 0);
        var getChankWidth = function (i) {
            if (i < 0) {
                return 0;
            }
            return chartWidth / totalLength * _this.chartChanks[i].Bars.length;
        };
        _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getThemeColor('chank-bg-color-1');
        this.chartChanks.forEach(function (chankData, i) {
            _this.draw(function () {
                _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getThemeColor("chank-bg-color-".concat(i + 1 % 2));
                _this.ctx.fillRect(i * getChankWidth(i - 1), 0, getChankWidth(i), chartHeight);
            });
        });
    };
    return BarChart;
}(_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart));



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0303ce8241d8bc75d50c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjMxNjlmYzBjNzA2MDAwN2Y5NGQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBRWdDO0FBRWpFO0lBQThCLDRCQUFLO0lBR2pDLGtCQUFZLElBQW9CO1FBQzlCLGtCQUFLLFdBQUUsU0FBQztRQUVSLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFBQSxpQkFxQkM7UUFwQkMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTLElBQUssZ0JBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssSUFBSyxVQUFHLEdBQUcsS0FBSyxFQUFYLENBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0SCxJQUFNLGFBQWEsR0FBRyxVQUFDLENBQVM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBRUQsT0FBTyxVQUFVLEdBQUcsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwRSxDQUFDO1FBRUQsbUVBQWEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsbUVBQWEsQ0FBQyxhQUFhLENBQUMseUJBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUM7Z0JBQy9FLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEYsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxDQWxDNkIseUNBQUssR0FrQ2xDOzs7Ozs7Ozs7O1VDdENEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQmFyQ2hhcnQvQmFyQ2hhcnQudHMiLCJ3ZWJwYWNrOi8vZnRvL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydCB9IGZyb20gXCIuLi9DaGFydFwiO1xuaW1wb3J0IHsgQ2hhbmtEYXRhRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9DaGFua0RhdGEuZHRvXCI7XG5pbXBvcnQgeyBDb2xvcnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbG9ycy5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgY2hhcnRDaGFua3M6IENoYW5rRGF0YUR0b1tdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IENoYW5rRGF0YUR0b1tdKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2hhcnRDaGFua3MgPSBkYXRhO1xuICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckRhdGEoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckRhdGEoKSB7XG4gICAgY29uc3QgY2hhcnRXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IGNoYXJ0SGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIGNvbnN0IHRvdGFsTGVuZ3RoID0gdGhpcy5jaGFydENoYW5rcy5tYXAoKGNoYW5rRGF0YSkgPT4gY2hhbmtEYXRhLkJhcnMubGVuZ3RoKS5yZWR1Y2UoKGFjYywgd2lkdGgpID0+IGFjYyArIHdpZHRoLCAwKTtcblxuICAgIGNvbnN0IGdldENoYW5rV2lkdGggPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGFydFdpZHRoIC8gdG90YWxMZW5ndGggKiB0aGlzLmNoYXJ0Q2hhbmtzW2ldLkJhcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcignY2hhbmstYmctY29sb3ItMScpO1xuXG4gICAgdGhpcy5jaGFydENoYW5rcy5mb3JFYWNoKChjaGFua0RhdGEsIGkpID0+IHtcbiAgICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yc1NlcnZpY2UuZ2V0VGhlbWVDb2xvcihgY2hhbmstYmctY29sb3ItJHtpICsgMSAlIDJ9YClcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoaSAqIGdldENoYW5rV2lkdGgoaSAtIDEpLCAwLCBnZXRDaGFua1dpZHRoKGkpLCBjaGFydEhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDMwM2NlODI0MWQ4YmM3NWQ1MGNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=