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
    console.log(data[0].Bars[0]);
    chart.putData(data);
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e93d7a5cbeb259ae3ce8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjZkODZhMjg3MzBkOThmMTFmNGM2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNGO0FBRXhDO0FBRXRCLElBQU0sZUFBZSxHQUFHLElBQUksdUVBQWUsRUFBRSxDQUFDO0FBRTlDLElBQU0sS0FBSyxHQUFHLElBQUkseUVBQVEsRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUV0QixlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7VUNkSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhckNoYXJ0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9DaGFydC9CYXJDaGFydC9CYXJDaGFydFwiO1xuaW1wb3J0IHsgRGVtb0RhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvRGVtb0RhdGEuc2VydmljZVwiO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IGRlbW9EYXRhU2VydmljZSA9IG5ldyBEZW1vRGF0YVNlcnZpY2UoKTtcblxuY29uc3QgY2hhcnQgPSBuZXcgQmFyQ2hhcnQoKTtcbmNoYXJ0LmFkZERPTUVsZW1lbnQoKTtcblxuZGVtb0RhdGFTZXJ2aWNlLmdldERlbW9EYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhWzBdLkJhcnNbMF0pO1xuXG4gIGNoYXJ0LnB1dERhdGEoZGF0YSk7XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU5M2Q3YTVjYmViMjU5YWUzY2U4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9