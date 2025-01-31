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
            if (key.includes("--")) {
                console.log("".concat(key, ": ").concat(value));
            }
        }
    };
    return ColorsService;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("84352d008e23dd7de685")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjcwNDkxY2MxNDRiZGEwNmVmM2NmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFlQSxDQUFDO0lBZFEsNEJBQWMsR0FBckI7UUFDRSxPQUFPLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7SUFDakUsQ0FBQztJQUVNLDRCQUFjLEdBQXJCO1FBQ0UsZ0NBQWdDO1FBQ2hDLElBQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU5RCxLQUEyQixVQUEwQixFQUExQixXQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUExQixjQUEwQixFQUExQixJQUEwQixFQUFFLENBQUM7WUFBN0MsZUFBWSxFQUFYLEdBQUcsVUFBRSxLQUFLO1lBQ3BCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUcsR0FBRyxlQUFLLEtBQUssQ0FBRSxDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7O1VDZkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdG8vLi9zcmMvc2VydmljZXMvQ29sb3JzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZnRvL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29sb3JzU2VydmljZSB7XG4gIHN0YXRpYyBnZXRSYW5kb21Db2xvcigpIHtcbiAgICByZXR1cm4gYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRUaGVtZUNvbG9ycygpIHtcbiAgICAvLyByZWFkIGNvbG9ycyBmcm9tIDpyb290IHN0eWxlc1xuICAgIGNvbnN0IHJvb3RTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyb290U3R5bGVzKSkge1xuICAgICAgaWYgKGtleS5pbmNsdWRlcyhcIi0tXCIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NDM1MmQwMDhlMjNkZDdkZTY4NVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==