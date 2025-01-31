"use strict";
self["webpackHotUpdatefto"]("app",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Chart_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Chart/BarChart/BarChart */ "./src/components/Chart/BarChart/BarChart.ts");
/* harmony import */ var _services_DemoData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/DemoData.service */ "./src/services/DemoData.service.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



var demoDataService = new _services_DemoData_service__WEBPACK_IMPORTED_MODULE_1__.DemoDataService();
var chart = new _components_Chart_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_0__.BarChart();
chart.addDOMElement();
demoDataService.getDemoData().then(function (data) {
    console.log(data[0]);
    console.log(data[0].Bars[100]);
    chart.putData(data);
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("83454d51b693a9d5ab5e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmU0Njk5MmQ5ZGRkOWUyZWY3M2E4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNGO0FBRXhDO0FBRXRCLElBQU0sZUFBZSxHQUFHLElBQUksdUVBQWUsRUFBRSxDQUFDO0FBRTlDLElBQU0sS0FBSyxHQUFHLElBQUkseUVBQVEsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUV0QixlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRS9CLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztVQ2ZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFyQ2hhcnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NoYXJ0L0JhckNoYXJ0L0JhckNoYXJ0XCI7XG5pbXBvcnQgeyBEZW1vRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9EZW1vRGF0YS5zZXJ2aWNlXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgZGVtb0RhdGFTZXJ2aWNlID0gbmV3IERlbW9EYXRhU2VydmljZSgpO1xuXG5jb25zdCBjaGFydCA9IG5ldyBCYXJDaGFydCgpO1xuY2hhcnQuYWRkRE9NRWxlbWVudCgpO1xuXG5kZW1vRGF0YVNlcnZpY2UuZ2V0RGVtb0RhdGEoKS50aGVuKChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGFbMF0pO1xuICBjb25zb2xlLmxvZyhkYXRhWzBdLkJhcnNbMTAwXSk7XG5cbiAgY2hhcnQucHV0RGF0YShkYXRhKTtcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODM0NTRkNTFiNjkzYTlkNWFiNWVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=