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
        _this.chartsChanks = data;
        _this.draw(function () {
            _this.renderData();
        });
        return _this;
    }
    BarChart.prototype.renderData = function () {
        var _this = this;
        var chartWidth = this.canvas.width;
        var chartHeight = this.canvas.height;
        var totalLength = this.chartsChanks.map(function (chankData) { return chankData.Bars.length; }).reduce(function (acc, width) { return acc + width; }, 0);
        this.chartsChanks.forEach(function (chankData) {
            _this.draw(function () {
                _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getRandomColor();
                var chankWidth = chartWidth / totalLength * chankData.Bars.length;
                _this.ctx.fillRect(0, 0, chankWidth, chartHeight);
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
/******/ 	__webpack_require__.h = () => ("0cb5c777425cf364130f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjc3NGEyNTEwNDg5YjYxYzI3Nzg3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBRWdDO0FBRWpFO0lBQThCLDRCQUFLO0lBR2pDLGtCQUFZLElBQW9CO1FBQzlCLGtCQUFLLFdBQUUsU0FBQztRQUVSLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFBQSxpQkFZQztRQVhDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLGdCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssVUFBRyxHQUFHLEtBQUssRUFBWCxDQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkgsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO1lBQ2xDLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsbUVBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEQsSUFBTSxVQUFVLEdBQUcsVUFBVSxHQUFHLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDcEUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxDQXpCNkIseUNBQUssR0F5QmxDOzs7Ozs7Ozs7O1VDN0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQmFyQ2hhcnQvQmFyQ2hhcnQudHMiLCJ3ZWJwYWNrOi8vZnRvL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydCB9IGZyb20gXCIuLi9DaGFydFwiO1xuaW1wb3J0IHsgQ2hhbmtEYXRhRHRvIH0gZnJvbSBcIi4uLy4uLy4uL2R0by9DaGFua0RhdGEuZHRvXCI7XG5pbXBvcnQgeyBDb2xvcnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbG9ycy5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIENoYXJ0IHtcbiAgY2hhcnRzQ2hhbmtzOiBDaGFua0RhdGFEdG9bXTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBDaGFua0RhdGFEdG9bXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNoYXJ0c0NoYW5rcyA9IGRhdGE7XG4gICAgdGhpcy5kcmF3KCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRGF0YSgpIHtcbiAgICBjb25zdCBjaGFydFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgY29uc3QgY2hhcnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgY29uc3QgdG90YWxMZW5ndGggPSB0aGlzLmNoYXJ0c0NoYW5rcy5tYXAoKGNoYW5rRGF0YSkgPT4gY2hhbmtEYXRhLkJhcnMubGVuZ3RoKS5yZWR1Y2UoKGFjYywgd2lkdGgpID0+IGFjYyArIHdpZHRoLCAwKTtcblxuICAgIHRoaXMuY2hhcnRzQ2hhbmtzLmZvckVhY2goKGNoYW5rRGF0YSkgPT4ge1xuICAgICAgdGhpcy5kcmF3KCgpID0+IHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRSYW5kb21Db2xvcigpO1xuICAgICAgICBjb25zdCBjaGFua1dpZHRoID0gY2hhcnRXaWR0aCAvIHRvdGFsTGVuZ3RoICogY2hhbmtEYXRhLkJhcnMubGVuZ3RoO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCBjaGFua1dpZHRoLCBjaGFydEhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGNiNWM3Nzc0MjVjZjM2NDEzMGZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=