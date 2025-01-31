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
        console.log(rootStyles);
    };
    return ColorsService;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dafb9bb6b9bff90d9573")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJiYTc0NGE4NmIxNDc5OWE5Y2Q1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFZQSxDQUFDO0lBWFEsNEJBQWMsR0FBckI7UUFDRSxPQUFPLFdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7SUFDakUsQ0FBQztJQUVNLDRCQUFjLEdBQXJCO1FBQ0UsZ0NBQWdDO1FBQ2hDLElBQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU5RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7VUNaRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9zZXJ2aWNlcy9Db2xvcnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2xvcnNTZXJ2aWNlIHtcbiAgc3RhdGljIGdldFJhbmRvbUNvbG9yKCkge1xuICAgIHJldHVybiBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gO1xuICB9XG5cbiAgc3RhdGljIGdldFRoZW1lQ29sb3JzKCkge1xuICAgIC8vIHJlYWQgY29sb3JzIGZyb20gOnJvb3Qgc3R5bGVzXG4gICAgY29uc3Qgcm9vdFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgIGNvbnNvbGUubG9nKHJvb3RTdHlsZXMpO1xuXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRhZmI5YmI2YjliZmY5MGQ5NTczXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9