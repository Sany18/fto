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
            if (value.includes('chank-bg-color-1')) {
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
/******/ 	__webpack_require__.h = () => ("2649e694fd3c7d8236a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmVlNTA3ZDFhY2Q1YmIyMDQyNTIyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFlQSxDQUFDO0lBZFEsNEJBQWMsR0FBckI7UUFDRSxPQUFPLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7SUFDakUsQ0FBQztJQUVNLDRCQUFjLEdBQXJCO1FBQ0UsZ0NBQWdDO1FBQ2hDLElBQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU5RCxLQUEyQixVQUEwQixFQUExQixXQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUExQixjQUEwQixFQUExQixJQUEwQixFQUFFLENBQUM7WUFBN0MsZUFBWSxFQUFYLEdBQUcsVUFBRSxLQUFLO1lBQ3BCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBRyxHQUFHLGVBQUssS0FBSyxDQUFFLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7VUNmRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9zZXJ2aWNlcy9Db2xvcnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2xvcnNTZXJ2aWNlIHtcbiAgc3RhdGljIGdldFJhbmRvbUNvbG9yKCkge1xuICAgIHJldHVybiBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gO1xuICB9XG5cbiAgc3RhdGljIGdldFRoZW1lQ29sb3JzKCkge1xuICAgIC8vIHJlYWQgY29sb3JzIGZyb20gOnJvb3Qgc3R5bGVzXG4gICAgY29uc3Qgcm9vdFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHJvb3RTdHlsZXMpKSB7XG4gICAgICBpZiAodmFsdWUuaW5jbHVkZXMoJ2NoYW5rLWJnLWNvbG9yLTEnKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjY0OWU2OTRmZDNjN2Q4MjM2YThcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=