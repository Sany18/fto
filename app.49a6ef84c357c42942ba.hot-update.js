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
        _this.data = data;
        _this.renderData();
        return _this;
    }
    BarChart.prototype.renderData = function () {
        var _this = this;
        var chartWidth = this.canvas.width;
        var totalLength = this.data.map(function (chankData) { return chankData.Bars.length; }).reduce(function (acc, width) { return acc + width; }, 0);
        this.data.forEach(function (chankData) {
            _this.draw(function () {
                _this.ctx.fillStyle = _services_Colors_service__WEBPACK_IMPORTED_MODULE_1__.ColorsService.getRandomColor();
                _this.ctx.fillRect(0, 0, chartWidth / totalLength * chankData.Bars.length, 100);
            });
        });
    };
    return BarChart;
}(_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart));



/***/ }),

/***/ "./src/services/Colors.service.ts":
/*!****************************************!*\
  !*** ./src/services/Colors.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorsService: () => (/* binding */ ColorsService)
/* harmony export */ });
var ColorsService = /** @class */ (function () {
    function ColorsService() {
    }
    ColorsService.getRandomColor = function () {
        return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
    };
    return ColorsService;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb46f1e9c6da047fdae4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjQ5YTZlZjg0YzM1N2M0Mjk0MmJhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBRWdDO0FBRWpFO0lBQThCLDRCQUFLO0lBR2pDLGtCQUFZLElBQW9CO1FBQzlCLGtCQUFLLFdBQUUsU0FBQztRQUVSLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFBQSxpQkFVQztRQVRDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLGdCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssVUFBRyxHQUFHLEtBQUssRUFBWCxDQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFL0csSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO1lBQzFCLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsbUVBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEdBQUcsV0FBVyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0FyQjZCLHlDQUFLLEdBcUJsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRDtJQUFBO0lBSUEsQ0FBQztJQUhRLDRCQUFjLEdBQXJCO1FBQ0UsT0FBTyxXQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO0lBQ2pFLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7VUNKRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0JhckNoYXJ0L0JhckNoYXJ0LnRzIiwid2VicGFjazovL2Z0by8uL3NyYy9zZXJ2aWNlcy9Db2xvcnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4uL0NoYXJ0XCI7XG5pbXBvcnQgeyBDaGFua0RhdGFEdG8gfSBmcm9tIFwiLi4vLi4vLi4vZHRvL0NoYW5rRGF0YS5kdG9cIjtcbmltcG9ydCB7IENvbG9yc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29sb3JzLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBkYXRhOiBDaGFua0RhdGFEdG9bXTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBDaGFua0RhdGFEdG9bXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucmVuZGVyRGF0YSgpO1xuICB9XG5cbiAgcmVuZGVyRGF0YSgpIHtcbiAgICBjb25zdCBjaGFydFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgY29uc3QgdG90YWxMZW5ndGggPSB0aGlzLmRhdGEubWFwKChjaGFua0RhdGEpID0+IGNoYW5rRGF0YS5CYXJzLmxlbmd0aCkucmVkdWNlKChhY2MsIHdpZHRoKSA9PiBhY2MgKyB3aWR0aCwgMCk7XG5cbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoY2hhbmtEYXRhKSA9PiB7XG4gICAgICB0aGlzLmRyYXcoKCkgPT4ge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcnNTZXJ2aWNlLmdldFJhbmRvbUNvbG9yKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIGNoYXJ0V2lkdGggLyB0b3RhbExlbmd0aCAqIGNoYW5rRGF0YS5CYXJzLmxlbmd0aCwgMTAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29sb3JzU2VydmljZSB7XG4gIHN0YXRpYyBnZXRSYW5kb21Db2xvcigpIHtcbiAgICByZXR1cm4gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmI0NmYxZTljNmRhMDQ3ZmRhZTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=