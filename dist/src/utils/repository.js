"use strict";
/* IMPORT */
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
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var version_1 = require("../providers/version");
var git_1 = require("./git");
/* REPOSITORY */
var Repository = {
    getPath: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, git_1.default.getPath()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    getVersion: function (repoPath) {
        return __awaiter(this, void 0, void 0, function () {
            var version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!repoPath) return [3 /*break*/, 2];
                        return [4 /*yield*/, Repository.getVersionProvidersResult(repoPath, 'getVersion')];
                    case 1:
                        version = _a.sent();
                        if (version)
                            return [2 /*return*/, version];
                        _a.label = 2;
                    case 2: return [2 /*return*/, config_1.default.version.initial];
                }
            });
        });
    },
    getVersionProviders: function (repoPath) {
        return __awaiter(this, void 0, void 0, function () {
            var providers, isSupported, providersSupported;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        providers = version_1.default.map(function (Provider) { return new Provider(repoPath); });
                        return [4 /*yield*/, Promise.all(providers.map(function (provider) { return provider.isSupported(); }))];
                    case 1:
                        isSupported = _a.sent(), providersSupported = providers.filter(function (p, index) { return isSupported[index]; });
                        return [2 /*return*/, providersSupported];
                }
            });
        });
    },
    getVersionProvidersResult: function (repoPath, method) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var providers, _a, providers_1, provider, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Repository.getVersionProviders(repoPath)];
                    case 1:
                        providers = _b.sent();
                        _a = 0, providers_1 = providers;
                        _b.label = 2;
                    case 2:
                        if (!(_a < providers_1.length)) return [3 /*break*/, 5];
                        provider = providers_1[_a];
                        return [4 /*yield*/, provider[method].apply(provider, args)];
                    case 3:
                        result = _b.sent();
                        if (result)
                            return [2 /*return*/, result];
                        _b.label = 4;
                    case 4:
                        _a++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
};
/* EXPORT */
exports.default = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdaLG9DQUErQjtBQUMvQixnREFBb0Q7QUFDcEQsNkJBQXdCO0FBRXhCLGdCQUFnQjtBQUVoQixJQUFNLFVBQVUsR0FBRztJQUVYLE9BQU8sRUFBYjs7Ozs0QkFFUyxxQkFBTSxhQUFHLENBQUMsT0FBTyxFQUFHLEVBQUE7NEJBQTNCLHNCQUFPLFNBQW9CLEVBQUM7Ozs7S0FFN0I7SUFFSyxVQUFVLEVBQWhCLFVBQW1CLFFBQXVCOzs7Ozs7NkJBRW5DLFFBQVEsRUFBUix3QkFBUTt3QkFFSyxxQkFBTSxVQUFVLENBQUMseUJBQXlCLENBQUcsUUFBUSxFQUFFLFlBQVksQ0FBRSxFQUFBOzt3QkFBL0UsT0FBTyxHQUFHLFNBQXFFO3dCQUVyRixJQUFLLE9BQU87NEJBQUcsc0JBQU8sT0FBTyxFQUFDOzs0QkFJaEMsc0JBQU8sZ0JBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFDOzs7O0tBRS9CO0lBRUssbUJBQW1CLEVBQXpCLFVBQTRCLFFBQWdCOzs7Ozs7d0JBRXBDLFNBQVMsR0FBRyxpQkFBZ0IsQ0FBQyxHQUFHLENBQUcsVUFBQSxRQUFRLElBQUksT0FBQSxJQUFJLFFBQVEsQ0FBRyxRQUFRLENBQUUsRUFBekIsQ0FBeUIsQ0FBRTt3QkFDNUQscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBRyxTQUFTLENBQUMsR0FBRyxDQUFHLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLFdBQVcsRUFBRyxFQUF2QixDQUF1QixDQUFFLENBQUUsRUFBQTs7d0JBQXpGLFdBQVcsR0FBRyxTQUEyRSxFQUN6RixrQkFBa0IsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFHLFVBQUUsQ0FBQyxFQUFFLEtBQUssSUFBTSxPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBRTt3QkFFbEYsc0JBQU8sa0JBQWtCLEVBQUM7Ozs7S0FFM0I7SUFFSyx5QkFBeUIsRUFBL0IsVUFBa0MsUUFBZ0IsRUFBRSxNQUFjO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7Ozs7OzRCQUV2RCxxQkFBTSxVQUFVLENBQUMsbUJBQW1CLENBQUcsUUFBUSxDQUFFLEVBQUE7O3dCQUE3RCxTQUFTLEdBQUcsU0FBaUQ7OEJBRXBDLEVBQVQsdUJBQVM7Ozs2QkFBVCxDQUFBLHVCQUFTLENBQUE7d0JBQXJCLFFBQVE7d0JBRUQscUJBQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFoQixRQUFRLEVBQWEsSUFBSSxHQUFFOzt3QkFBMUMsTUFBTSxHQUFHLFNBQWlDO3dCQUVoRCxJQUFLLE1BQU07NEJBQUcsc0JBQU8sTUFBTSxFQUFDOzs7d0JBSlIsSUFBUyxDQUFBOzs7Ozs7S0FRaEM7Q0FFRixDQUFDO0FBRUYsWUFBWTtBQUVaLGtCQUFlLFVBQVUsQ0FBQyJ9