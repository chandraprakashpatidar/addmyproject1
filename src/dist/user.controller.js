"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.__esModule = true;
exports.Usercontroller = void 0;
var common_1 = require("@nestjs/common");
//import { UsersService } from './user.service';
var swagger_1 = require("@nestjs/swagger");
var Usercontroller = /** @class */ (function () {
    function Usercontroller(myService) {
        this.myService = myService;
    }
    Usercontroller.prototype.getMyData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var responseData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.myService.myserver()];
                    case 1:
                        responseData = _a.sent();
                        return [2 /*return*/, { message: 'data found succefully!', data: responseData }];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Usercontroller.prototype.getDeviceById = function (id, apikey) {
        return __awaiter(this, void 0, void 0, function () {
            var responseData, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(id);
                        return [4 /*yield*/, this.myService.deviceid(id)];
                    case 1:
                        responseData = _a.sent();
                        return [2 /*return*/, { message: 'data found succefully!', data: responseData }];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Usercontroller.prototype.getDeviceByName = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var responseData, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(id);
                        return [4 /*yield*/, this.myService.getDeviceByName(id)];
                    case 1:
                        responseData = _a.sent();
                        return [2 /*return*/, { message: 'data found succefully!', data: responseData }];
                    case 2:
                        error_3 = _a.sent();
                        console.error(error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Usercontroller.prototype.getDeviceid = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var responseData, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(id);
                        return [4 /*yield*/, this.myService.getDeviceid(id)];
                    case 1:
                        responseData = _a.sent();
                        return [2 /*return*/, { message: 'data found succefully!', data: responseData }];
                    case 2:
                        error_4 = _a.sent();
                        console.error(error_4);
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Usercontroller.prototype.getdevicelocationByordid = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var responseData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(id);
                        return [4 /*yield*/, this.myService.getdevicelocationByordid(id)];
                    case 1:
                        responseData = _a.sent();
                        return [2 /*return*/, { message: 'data found succefully!', data: responseData }];
                    case 2:
                        error_5 = _a.sent();
                        console.error(error_5);
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Usercontroller.prototype.Devicepauseandunpause = function (id, 
    //@Query('limist') limits:string,
    datadetails) {
        return __awaiter(this, void 0, Promise, function () {
            var device, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(id, 'deviceid');
                        console.log(datadetails, "data");
                        return [4 /*yield*/, this.myService.Devicepauseandunpause(id, datadetails)];
                    case 1:
                        device = _a.sent();
                        return [2 /*return*/, {
                                message: 'Device state updated successfully',
                                data: device
                            }];
                    case 2:
                        error_6 = _a.sent();
                        console.error(error_6);
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        common_1.Get(),
        swagger_1.ApiOperation({ summary: 'Get my data' }),
        swagger_1.ApiResponse({ status: 200, description: 'Success', type: Object })
    ], Usercontroller.prototype, "getMyData");
    __decorate([
        common_1.Get(':id'),
        swagger_1.ApiOperation({ summary: 'Get device by ID' }),
        swagger_1.ApiParam({ name: 'id', description: 'Device ID' }),
        swagger_1.ApiResponse({ status: 200, description: 'Success' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad Request' }),
        __param(0, common_1.Param('id')), __param(1, common_1.Query('apikey'))
    ], Usercontroller.prototype, "getDeviceById");
    __decorate([
        common_1.Get(':id/name'),
        swagger_1.ApiOperation({ summary: 'Get device by ID' }),
        swagger_1.ApiParam({ name: 'id', description: 'Device ID' }),
        swagger_1.ApiResponse({ status: 200, description: 'Success' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad Request' }),
        __param(0, common_1.Param('id'))
    ], Usercontroller.prototype, "getDeviceByName");
    __decorate([
        common_1.Get(':id/deivceid'),
        swagger_1.ApiOperation({ summary: 'Get device by ID' }),
        swagger_1.ApiParam({ name: 'id', description: 'Device ID' }),
        swagger_1.ApiResponse({ status: 200, description: 'Success' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad Request' }),
        __param(0, common_1.Param('id'))
    ], Usercontroller.prototype, "getDeviceid");
    __decorate([
        common_1.Get(':id/deviceLoction'),
        swagger_1.ApiOperation({ summary: 'Get device by ID' }),
        swagger_1.ApiParam({ name: 'id', description: 'Device ID' }),
        swagger_1.ApiResponse({ status: 200, description: 'Success' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad Request' }),
        __param(0, common_1.Param('id'))
    ], Usercontroller.prototype, "getdevicelocationByordid");
    __decorate([
        common_1.Post(':id/state'),
        swagger_1.ApiOperation({ summary: 'Pause or Unpause Device Data by device id' }),
        swagger_1.ApiResponse({ status: 200, description: 'Device state updated successfully' }),
        swagger_1.ApiResponse({ status: 400, description: 'Bad request' }),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], Usercontroller.prototype, "Devicepauseandunpause");
    Usercontroller = __decorate([
        common_1.Controller("mycontroller"),
        swagger_1.ApiTags('extra')
    ], Usercontroller);
    return Usercontroller;
}());
exports.Usercontroller = Usercontroller;
