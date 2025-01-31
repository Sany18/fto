"use strict";
self["webpackHotUpdatefto"]("app",{

/***/ "./src/services/DemoData.service.ts":
/*!******************************************!*\
  !*** ./src/services/DemoData.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoDataService: () => (/* binding */ DemoDataService)
/* harmony export */ });
/* harmony import */ var _dto_ChankData_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dto/ChankData.dto */ "./src/dto/ChankData.dto.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var DemoDataService = /** @class */ (function () {
    function DemoDataService() {
        this.cache = {};
        this.setupHttp();
    }
    DemoDataService.prototype.setupHttp = function () {
        var _this = this;
        this.http = {
            get: function (url) { return __awaiter(_this, void 0, void 0, function () {
                var response, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.cache[url]) {
                                return [2 /*return*/, this.cache[url]];
                            }
                            return [4 /*yield*/, fetch(url)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            this.cache[url] = data;
                            return [2 /*return*/, data];
                    }
                });
            }); },
        };
    };
    DemoDataService.prototype.get = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(url)];
            });
        });
    };
    DemoDataService.prototype.getDemoData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = 'https://beta.forextester.com/data/api/Metadata/bars/chunked?Broker=Advanced&Symbol=EURUSD&Timeframe=1&Start=57674&End=59113&UseMessagePack=false';
                return [2 /*return*/, this.get(url)
                        .then(function (data) {
                        return data.map(function (cd) { return new _dto_ChankData_dto__WEBPACK_IMPORTED_MODULE_0__.ChankDataDto(cd); });
                    })];
            });
        });
    };
    return DemoDataService;
}());



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6a711aa2461494a2ae68")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjEyZGNjZDFhM2QyNGI5Y2IzMTQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFFcEQ7SUFJRTtRQUZRLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBR3RDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLElBQUksR0FBRztZQUNWLEdBQUcsRUFBRSxVQUFPLEdBQVc7Ozs7OzRCQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQ0FDcEIsc0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQzs0QkFDekIsQ0FBQzs0QkFFZ0IscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQzs7NEJBQTNCLFFBQVEsR0FBRyxTQUFnQjs0QkFDcEIscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRTs7NEJBQTVCLElBQUksR0FBRyxTQUFxQjs0QkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7NEJBQ3ZCLHNCQUFPLElBQUksRUFBQzs7O2lCQUNiO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFSyw2QkFBRyxHQUFULFVBQVUsR0FBVzs7O2dCQUNuQixzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQzs7O0tBQzNCO0lBRUsscUNBQVcsR0FBakI7Ozs7Z0JBQ1EsR0FBRyxHQUFHLGtKQUFrSixDQUFDO2dCQUUvSixzQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt5QkFDakIsSUFBSSxDQUFDLFVBQUMsSUFBUzt3QkFDZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFPLElBQUssV0FBSSw0REFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7b0JBQ3JELENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQUNILHNCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztVQ3JDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z0by8uL3NyYy9zZXJ2aWNlcy9EZW1vRGF0YS5zZXJ2aWNlLnRzIiwid2VicGFjazovL2Z0by93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmtEYXRhRHRvIH0gZnJvbSBcIi4uL2R0by9DaGFua0RhdGEuZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBEZW1vRGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIGh0dHA6IGFueTtcbiAgcHJpdmF0ZSBjYWNoZTogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0dXBIdHRwKCk7XG4gIH1cblxuICBzZXR1cEh0dHAoKSB7XG4gICAgdGhpcy5odHRwID0ge1xuICAgICAgZ2V0OiBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVbdXJsXSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3VybF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHRoaXMuY2FjaGVbdXJsXSA9IGRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZ2V0KHVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcbiAgfVxuXG4gIGFzeW5jIGdldERlbW9EYXRhKCk6IFByb21pc2U8Q2hhbmtEYXRhRHRvW10+IHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9iZXRhLmZvcmV4dGVzdGVyLmNvbS9kYXRhL2FwaS9NZXRhZGF0YS9iYXJzL2NodW5rZWQ/QnJva2VyPUFkdmFuY2VkJlN5bWJvbD1FVVJVU0QmVGltZWZyYW1lPTEmU3RhcnQ9NTc2NzQmRW5kPTU5MTEzJlVzZU1lc3NhZ2VQYWNrPWZhbHNlJztcblxuICAgIHJldHVybiB0aGlzLmdldCh1cmwpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLm1hcCgoY2Q6IGFueSkgPT4gbmV3IENoYW5rRGF0YUR0byhjZCkpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZhNzExYWEyNDYxNDk0YTJhZTY4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9