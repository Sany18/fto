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
        var computedStyles = getComputedStyle(document.documentElement);
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
/******/ 	__webpack_require__.h = () => ("e086886635ade25e5541")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmU1MjEyNTUyNjRhNzY2ODBlYWEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFtQkEsQ0FBQztJQWxCUSw0QkFBYyxHQUFyQjtRQUNFLE9BQU8sV0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRU0sNEJBQWMsR0FBckI7UUFDRSxJQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEUsSUFBTSxZQUFZLEdBQVEsRUFBRSxDQUFDO1FBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDL0MsSUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTlCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN6QixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xFLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7O1VDbkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnRvLy4vc3JjL3NlcnZpY2VzL0NvbG9ycy5zZXJ2aWNlLnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbG9yc1NlcnZpY2Uge1xuICBzdGF0aWMgZ2V0UmFuZG9tQ29sb3IoKSB7XG4gICAgcmV0dXJuIGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0VGhlbWVDb2xvcnMoKSB7XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgY29uc3QgY3NzVmFyaWFibGVzOiBhbnkgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZWRTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGNvbXB1dGVkU3R5bGVzW2ldO1xuXG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJy0tJykpIHtcbiAgICAgICAgY3NzVmFyaWFibGVzW2tleV0gPSBjb21wdXRlZFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKGtleSkudHJpbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGNzc1ZhcmlhYmxlcyk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUwODY4ODY2MzVhZGUyNWU1NTQxXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9