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
/******/ 	__webpack_require__.h = () => ("cd2955ba7ae3292e88f0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjAzMDNjZTgyNDFkOGJjNzVkNTBjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBRWdDO0FBRWpFO0lBQThCLDRCQUFLO0lBR2pDLGtCQUFZLElBQW9CO1FBQzlCLGtCQUFLLFdBQUUsU0FBQztRQUVSLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFBQSxpQkFtQkM7UUFsQkMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTLElBQUssZ0JBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssSUFBSyxVQUFHLEdBQUcsS0FBSyxFQUFYLENBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0SCxJQUFNLGFBQWEsR0FBRyxVQUFDLENBQVM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBRUQsT0FBTyxVQUFVLEdBQUcsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwRSxDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTLEVBQUUsQ0FBQztZQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLG1FQUFhLENBQUMsYUFBYSxDQUFDLHlCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDO2dCQUMvRSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQ0FoQzZCLHlDQUFLLEdBZ0NsQzs7Ozs7Ozs7OztVQ3BDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0JhckNoYXJ0L0JhckNoYXJ0LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi4vQ2hhcnRcIjtcbmltcG9ydCB7IENoYW5rRGF0YUR0byB9IGZyb20gXCIuLi8uLi8uLi9kdG8vQ2hhbmtEYXRhLmR0b1wiO1xuaW1wb3J0IHsgQ29sb3JzU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db2xvcnMuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG4gIGNoYXJ0Q2hhbmtzOiBDaGFua0RhdGFEdG9bXTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBDaGFua0RhdGFEdG9bXSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzID0gZGF0YTtcbiAgICB0aGlzLmRyYXcoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJEYXRhKCkge1xuICAgIGNvbnN0IGNoYXJ0V2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBjaGFydEhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCB0b3RhbExlbmd0aCA9IHRoaXMuY2hhcnRDaGFua3MubWFwKChjaGFua0RhdGEpID0+IGNoYW5rRGF0YS5CYXJzLmxlbmd0aCkucmVkdWNlKChhY2MsIHdpZHRoKSA9PiBhY2MgKyB3aWR0aCwgMCk7XG5cbiAgICBjb25zdCBnZXRDaGFua1dpZHRoID0gKGk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hhcnRXaWR0aCAvIHRvdGFsTGVuZ3RoICogdGhpcy5jaGFydENoYW5rc1tpXS5CYXJzLmxlbmd0aDtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0Q2hhbmtzLmZvckVhY2goKGNoYW5rRGF0YSwgaSkgPT4ge1xuICAgICAgdGhpcy5kcmF3KCgpID0+IHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3JzU2VydmljZS5nZXRUaGVtZUNvbG9yKGBjaGFuay1iZy1jb2xvci0ke2kgKyAxICUgMn1gKVxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChpICogZ2V0Q2hhbmtXaWR0aChpIC0gMSksIDAsIGdldENoYW5rV2lkdGgoaSksIGNoYXJ0SGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZDI5NTViYTdhZTMyOTJlODhmMFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==