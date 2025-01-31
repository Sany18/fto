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
        var root = document.documentElement;
        var computedStyles = getComputedStyle(root);
        var cssVariables = {};
        for (var i = 0; i < computedStyles.length; i++) {
            var key = computedStyles[i];
            if (key.startsWith('--')) {
                cssVariables[key] = computedStyles.getPropertyValue(key).trim();
            }
        }
        console.log(cssVariables);
    };
    return ColorsService;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3958a84091310815189b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjI2NDllNjk0ZmQzYzdkODIzNmE4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFxQkEsQ0FBQztJQXBCUSw0QkFBYyxHQUFyQjtRQUNFLE9BQU8sV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRU0sNEJBQWMsR0FBckI7UUFDRSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ3RDLElBQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQU0sWUFBWSxHQUFRLEVBQUUsQ0FBQztRQUU3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9DLElBQU0sR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDekIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsRSxDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztVQ3JCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9zZXJ2aWNlcy9Db2xvcnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9mdG8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2xvcnNTZXJ2aWNlIHtcbiAgc3RhdGljIGdldFJhbmRvbUNvbG9yKCkge1xuICAgIHJldHVybiBgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gO1xuICB9XG5cbiAgc3RhdGljIGdldFRoZW1lQ29sb3JzKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpO1xuICAgIGNvbnN0IGNzc1ZhcmlhYmxlczogYW55ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVkU3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBjb21wdXRlZFN0eWxlc1tpXTtcblxuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCctLScpKSB7XG4gICAgICAgIGNzc1ZhcmlhYmxlc1trZXldID0gY29tcHV0ZWRTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShrZXkpLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhjc3NWYXJpYWJsZXMpO1xuXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM5NThhODQwOTEzMTA4MTUxODliXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9