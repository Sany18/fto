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
    var chart = new _components_Chart_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart(data);
    chart.addDOMElement()
        .testDraw();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e2a3179b572800f2177f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNiYTFkOTBjNzk1MjFhNTlmNWFiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNhO0FBRXhDO0FBRXRCLElBQU0sZUFBZSxHQUFHLElBQUksdUVBQWUsRUFBRSxDQUFDO0FBRTlDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBTSxLQUFLLEdBQUcsSUFBSSwwREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLEtBQUssQ0FBQyxhQUFhLEVBQUU7U0FDbEIsUUFBUSxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztVQ2JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0XCI7XG5pbXBvcnQgeyBEZW1vRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9EZW1vRGF0YS5zZXJ2aWNlXCI7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgZGVtb0RhdGFTZXJ2aWNlID0gbmV3IERlbW9EYXRhU2VydmljZSgpO1xuXG5kZW1vRGF0YVNlcnZpY2UuZ2V0RGVtb0RhdGEoKS50aGVuKChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zdCBjaGFydCA9IG5ldyBDaGFydChkYXRhKTtcblxuICBjaGFydC5hZGRET01FbGVtZW50KClcbiAgICAudGVzdERyYXcoKTtcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTJhMzE3OWI1NzI4MDBmMjE3N2ZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=