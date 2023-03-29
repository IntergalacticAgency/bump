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
var commands_1 = require("./commands");
var config_1 = require("./config");
/* COMMANDS */
function bump(_a) {
    var _b = _a === void 0 ? { version: config_1.default.version.enabled, changelog: config_1.default.changelog.enabled, commit: config_1.default.commit.enabled, tag: config_1.default.tag.enabled, release: config_1.default.release.enabled } : _a, version = _b.version, changelog = _b.changelog, commit = _b.commit, tag = _b.tag, release = _b.release;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!version) return [3 /*break*/, 2];
                    return [4 /*yield*/, commands_1.default.version()];
                case 1:
                    _c.sent();
                    _c.label = 2;
                case 2:
                    if (!changelog) return [3 /*break*/, 4];
                    return [4 /*yield*/, commands_1.default.changelog()];
                case 3:
                    _c.sent();
                    _c.label = 4;
                case 4:
                    if (!commit) return [3 /*break*/, 6];
                    return [4 /*yield*/, commands_1.default.commit()];
                case 5:
                    _c.sent();
                    _c.label = 6;
                case 6:
                    if (!tag) return [3 /*break*/, 8];
                    return [4 /*yield*/, commands_1.default.tag()];
                case 7:
                    _c.sent();
                    _c.label = 8;
                case 8:
                    if (!release) return [3 /*break*/, 10];
                    return [4 /*yield*/, commands_1.default.release()];
                case 9:
                    _c.sent();
                    _c.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
}
/* EXPORT */
exports.default = bump;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1osdUNBQWtDO0FBQ2xDLG1DQUE4QjtBQUU5QixjQUFjO0FBRWQsU0FBZSxJQUFJLENBQUcsRUFBeU47UUFBek4scUJBQXdELEVBQUUsT0FBTyxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLGdCQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUEsRUFBdk4sT0FBTyxhQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsR0FBRyxTQUFBLEVBQUUsT0FBTyxhQUFBOzs7Ozt5QkFFekQsT0FBTyxFQUFQLHdCQUFPO29CQUFHLHFCQUFNLGtCQUFRLENBQUMsT0FBTyxFQUFHLEVBQUE7O29CQUF6QixTQUF5QixDQUFDOzs7eUJBRXBDLFNBQVMsRUFBVCx3QkFBUztvQkFBRyxxQkFBTSxrQkFBUSxDQUFDLFNBQVMsRUFBRyxFQUFBOztvQkFBM0IsU0FBMkIsQ0FBQzs7O3lCQUV4QyxNQUFNLEVBQU4sd0JBQU07b0JBQUcscUJBQU0sa0JBQVEsQ0FBQyxNQUFNLEVBQUcsRUFBQTs7b0JBQXhCLFNBQXdCLENBQUM7Ozt5QkFFbEMsR0FBRyxFQUFILHdCQUFHO29CQUFHLHFCQUFNLGtCQUFRLENBQUMsR0FBRyxFQUFHLEVBQUE7O29CQUFyQixTQUFxQixDQUFDOzs7eUJBRTVCLE9BQU8sRUFBUCx5QkFBTztvQkFBRyxxQkFBTSxrQkFBUSxDQUFDLE9BQU8sRUFBRyxFQUFBOztvQkFBekIsU0FBeUIsQ0FBQzs7Ozs7O0NBRTFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLElBQUksQ0FBQyJ9