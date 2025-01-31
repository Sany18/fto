"use strict";
self["webpackHotUpdatefto"]("app",{

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
    ColorsService.getThemeColors = function () {
        // read colors from :root styles
        var rootStyles = getComputedStyle(document.documentElement);
        for (var _i = 0, _a = Object.entries(rootStyles); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            // if (value.includes('chank-bg-color-1')) {
            console.log("".concat(key, ": ").concat(value));
            // }
        }
    };
    return ColorsService;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("53d2fb8eba89f7d49ba0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmUwODY4ODY2MzVhZGUyNWU1NTQxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFlQSxDQUFDO0lBZFEsNEJBQWMsR0FBckI7UUFDRSxPQUFPLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7SUFDakUsQ0FBQztJQUVNLDRCQUFjLEdBQXJCO1FBQ0UsZ0NBQWdDO1FBQ2hDLElBQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU5RCxLQUEyQixVQUEwQixFQUExQixXQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUExQixjQUEwQixFQUExQixJQUEwQixFQUFFLENBQUM7WUFBN0MsZUFBWSxFQUFYLEdBQUcsVUFBRSxLQUFLO1lBQ3BCLDRDQUE0QztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUcsR0FBRyxlQUFLLEtBQUssQ0FBRSxDQUFDLENBQUM7WUFDbEMsSUFBSTtRQUNOLENBQUM7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7O1VDZkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdG8vLi9zcmMvc2VydmljZXMvQ29sb3JzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZnRvL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29sb3JzU2VydmljZSB7XG4gIHN0YXRpYyBnZXRSYW5kb21Db2xvcigpIHtcbiAgICByZXR1cm4gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUaGVtZUNvbG9ycygpIHtcbiAgICAvLyByZWFkIGNvbG9ycyBmcm9tIDpyb290IHN0eWxlc1xuICAgIGNvbnN0IHJvb3RTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyb290U3R5bGVzKSkge1xuICAgICAgLy8gaWYgKHZhbHVlLmluY2x1ZGVzKCdjaGFuay1iZy1jb2xvci0xJykpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUzZDJmYjhlYmE4OWY3ZDQ5YmEwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9