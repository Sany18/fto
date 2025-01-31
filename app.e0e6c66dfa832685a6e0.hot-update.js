"use strict";
self["webpackHotUpdatefto"]("app",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Chart_Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Chart/Chart */ "./src/components/Chart/Chart.ts");
/* harmony import */ var _services_DemoData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/DemoData.service */ "./src/services/DemoData.service.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



var demoDataService = new _services_DemoData_service__WEBPACK_IMPORTED_MODULE_1__.DemoDataService();
demoDataService.getDemoData().then(function (data) {
    console.log(data);
});
var chart = new _components_Chart_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart();
chart.createChart()
    .renderChart()
    .testDraw();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ba9e9e7ddeaad8af4e39")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmUwZTZjNjZkZmE4MzI2ODVhNmUwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNhO0FBRXhDO0FBRXRCLElBQU0sZUFBZSxHQUFHLElBQUksdUVBQWUsRUFBRSxDQUFDO0FBRTlDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFNLEtBQUssR0FBRyxJQUFJLDBEQUFLLEVBQUUsQ0FBQztBQUUxQixLQUFLLENBQUMsV0FBVyxFQUFFO0tBQ2hCLFdBQVcsRUFBRTtLQUNiLFFBQVEsRUFBRSxDQUFDOzs7Ozs7Ozs7VUNmZCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9DaGFydC9DaGFydFwiO1xuaW1wb3J0IHsgRGVtb0RhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvRGVtb0RhdGEuc2VydmljZVwiO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IGRlbW9EYXRhU2VydmljZSA9IG5ldyBEZW1vRGF0YVNlcnZpY2UoKTtcblxuZGVtb0RhdGFTZXJ2aWNlLmdldERlbW9EYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5jb25zdCBjaGFydCA9IG5ldyBDaGFydCgpO1xuXG5jaGFydC5jcmVhdGVDaGFydCgpXG4gIC5yZW5kZXJDaGFydCgpXG4gIC50ZXN0RHJhdygpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmE5ZTllN2RkZWFhZDhhZjRlMzlcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=