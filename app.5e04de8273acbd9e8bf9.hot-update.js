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
demoDataService.getDemoData().then(function (data) {
    console.log(data);
    var chart = new _components_Chart_BarChart_BarChart__WEBPACK_IMPORTED_MODULE_0__.BarChart(data);
    chart.addDOMElement();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb716269a66ea711c46b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjVlMDRkZTgyNzNhY2JkOWU4YmY5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNGO0FBRXhDO0FBRXRCLElBQU0sZUFBZSxHQUFHLElBQUksdUVBQWUsRUFBRSxDQUFDO0FBRTlDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBTSxLQUFLLEdBQUcsSUFBSSx5RUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O1VDWkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdG8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnRvL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXJDaGFydCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2hhcnQvQmFyQ2hhcnQvQmFyQ2hhcnRcIjtcbmltcG9ydCB7IERlbW9EYXRhU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL0RlbW9EYXRhLnNlcnZpY2VcIjtcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBkZW1vRGF0YVNlcnZpY2UgPSBuZXcgRGVtb0RhdGFTZXJ2aWNlKCk7XG5cbmRlbW9EYXRhU2VydmljZS5nZXREZW1vRGF0YSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IGNoYXJ0ID0gbmV3IEJhckNoYXJ0KGRhdGEpO1xuXG4gIGNoYXJ0LmFkZERPTUVsZW1lbnQoKTtcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmI3MTYyNjlhNjZlYTcxMWM0NmJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=