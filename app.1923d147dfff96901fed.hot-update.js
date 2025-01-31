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
/******/ 	__webpack_require__.h = () => ("cff4ee1ec6a36e10f1a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjE5MjNkMTQ3ZGZmZjk2OTAxZmVkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2E7QUFFOUQsSUFBTSxlQUFlLEdBQUcsSUFBSSx1RUFBZSxFQUFFLENBQUM7QUFFOUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sS0FBSyxHQUFHLElBQUksMERBQUssRUFBRSxDQUFDO0FBRTFCLEtBQUssQ0FBQyxXQUFXLEVBQUU7S0FDaEIsV0FBVyxFQUFFO0tBQ2IsUUFBUSxFQUFFLENBQUM7Ozs7Ozs7OztVQ2JkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0XCI7XG5pbXBvcnQgeyBEZW1vRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9EZW1vRGF0YS5zZXJ2aWNlXCI7XG5cbmNvbnN0IGRlbW9EYXRhU2VydmljZSA9IG5ldyBEZW1vRGF0YVNlcnZpY2UoKTtcblxuZGVtb0RhdGFTZXJ2aWNlLmdldERlbW9EYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5jb25zdCBjaGFydCA9IG5ldyBDaGFydCgpO1xuXG5jaGFydC5jcmVhdGVDaGFydCgpXG4gIC5yZW5kZXJDaGFydCgpXG4gIC50ZXN0RHJhdygpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2ZmNGVlMWVjNmEzNmUxMGYxYTJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=