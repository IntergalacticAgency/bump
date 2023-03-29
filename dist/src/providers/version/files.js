"use strict";
/* IMPORT */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var _ = require("lodash");
var stringMatches = require("string-matches");
var config_1 = require("../../config");
var abstract_1 = require("./abstract");
/* FILES */
var Files = /** @class */ (function (_super) {
    __extends(Files, _super);
    function Files() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Files.prototype.isSupported = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, l;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0, l = this.basePaths.length;
                        _a.label = 1;
                    case 1:
                        if (!(i < l)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getContent(this.basePaths[i])];
                    case 2:
                        if (!!(_a.sent()))
                            return [2 /*return*/, true];
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    Files.prototype.init = function () {
        var _this = this;
        this.files = this.getFiles();
        this.basePaths = Object.keys(this.files);
        this.regexes = {};
        this.replacements = {};
        /* POPULATING REGEXES / REPLACEMENTS */
        _.forOwn(this.files, function (data, basePath) {
            var datas = _.isArray(data[0]) ? data : [data], _a = _.zip.apply(_, datas), regexes = _a[0], replacements = _a[1], flags = _a[2];
            _this.regexes[basePath] = regexes.map(function (regex, i) { return new RegExp(regex, _.get(flags, i, 'gmi')); });
            _this.replacements[basePath] = replacements;
        });
    };
    Files.prototype.getFiles = function () {
        return config_1.default.files;
    };
    Files.prototype.getVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getVersionByFiles()];
                    case 1:
                        _a = (_b.sent());
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, _super.prototype.getVersion.call(this)];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    Files.prototype.getVersionByFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVersionByContentProvider(function (basePath) { return _this.getContent(basePath); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Files.prototype.getVersionByCommit = function (commit) {
        return __awaiter(this, void 0, void 0, function () {
            var version;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!commit)
                            return [2 /*return*/, config_1.default.version.initial];
                        return [4 /*yield*/, this.getVersionByContentProvider(function (basePath) { return _this.getContentByCommit(commit, basePath); })];
                    case 1:
                        version = _a.sent();
                        if (version)
                            return [2 /*return*/, version];
                        return [2 /*return*/, config_1.default.version.initial];
                }
            });
        });
    };
    Files.prototype.getVersionByContentProvider = function (contentProvider) {
        return __awaiter(this, void 0, void 0, function () {
            var i, l, basePath, content, ri, rl, re, matches, _i, matches_1, match;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0, l = this.basePaths.length;
                        _a.label = 1;
                    case 1:
                        if (!(i < l)) return [3 /*break*/, 4];
                        basePath = this.basePaths[i];
                        return [4 /*yield*/, contentProvider(basePath)];
                    case 2:
                        content = _a.sent();
                        if (!content)
                            return [3 /*break*/, 3];
                        for (ri = 0, rl = this.regexes[basePath].length; ri < rl; ri++) {
                            re = this.regexes[basePath][ri], matches = stringMatches(content, re);
                            for (_i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                                match = matches_1[_i];
                                if (match && match[1])
                                    return [2 /*return*/, match[1]];
                            }
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Files.prototype.updateVersion = function (version) {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, _i, _a, basePath, state_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _loop_1 = function (basePath) {
                            var content, newContent;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.getContent(basePath)];
                                    case 1:
                                        content = _a.sent();
                                        if (!content)
                                            return [2 /*return*/, { value: void 0 }];
                                        newContent = content;
                                        this_1.regexes[basePath].forEach(function (regex, ri) {
                                            var replacement = _this.replacements[basePath][ri];
                                            newContent = newContent.replace(regex, replacement.replace(/\[version\]/g, version));
                                        });
                                        return [4 /*yield*/, this_1.setContent(basePath, newContent)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = this.basePaths;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        basePath = _a[_i];
                        return [5 /*yield**/, _loop_1(basePath)];
                    case 2:
                        state_1 = _b.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Files;
}(abstract_1.default));
/* EXPORT */
exports.default = Files;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3ZlcnNpb24vZmlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLDBCQUE0QjtBQUM1Qiw4Q0FBZ0Q7QUFFaEQsdUNBQWtDO0FBQ2xDLHVDQUFrQztBQUVsQyxXQUFXO0FBRVg7SUFBb0IseUJBQVE7SUFBNUI7O0lBcUhBLENBQUM7SUFqSE8sMkJBQVcsR0FBakI7Ozs7Ozt3QkFFWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs2QkFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBRXhDLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUFBOzt3QkFBbEQsSUFBSyxDQUFDLENBQUMsQ0FBQSxTQUEyQyxDQUFBOzRCQUFHLHNCQUFPLElBQUksRUFBQzs7O3dCQUZoQixDQUFDLEVBQUUsQ0FBQTs7NEJBTXRELHNCQUFPLEtBQUssRUFBQzs7OztLQUVkO0lBRUQsb0JBQUksR0FBSjtRQUFBLGlCQW1CQztRQWpCQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLHVDQUF1QztRQUV2QyxDQUFDLENBQUMsTUFBTSxDQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBRSxJQUFJLEVBQUUsUUFBUTtZQUUvQixJQUFBLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQzdDLEtBQWlDLENBQUMsQ0FBQyxHQUFHLE9BQUwsQ0FBQyxFQUFVLEtBQUssQ0FBZ0IsRUFBaEUsT0FBTyxRQUFBLEVBQUUsWUFBWSxRQUFBLEVBQUUsS0FBSyxRQUFvQyxDQUFDO1lBRXhFLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBRyxVQUFFLEtBQUssRUFBRSxDQUFDLElBQU0sT0FBQSxJQUFJLE1BQU0sQ0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBRSxDQUFFLEVBQS9DLENBQStDLENBQUUsQ0FBQztZQUN6RyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUU3QyxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCx3QkFBUSxHQUFSO1FBRUUsT0FBTyxnQkFBTSxDQUFDLEtBQUssQ0FBQztJQUV0QixDQUFDO0lBRUssMEJBQVUsR0FBaEI7Ozs7OzRCQUVTLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRyxFQUFBOzs4QkFBL0IsU0FBK0I7O3dCQUFJLHFCQUFNLGlCQUFNLFVBQVUsV0FBRyxFQUFBOzs4QkFBekIsU0FBeUI7OzRCQUFuRSwwQkFBb0U7Ozs7S0FFckU7SUFFSyxpQ0FBaUIsR0FBdkI7Ozs7OzRCQUVTLHFCQUFNLElBQUksQ0FBQywyQkFBMkIsQ0FBRyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUcsUUFBUSxDQUFFLEVBQTVCLENBQTRCLENBQUUsRUFBQTs0QkFBMUYsc0JBQU8sU0FBbUYsRUFBQzs7OztLQUU1RjtJQUVLLGtDQUFrQixHQUF4QixVQUEyQixNQUFlOzs7Ozs7O3dCQUV4QyxJQUFLLENBQUMsTUFBTTs0QkFBRyxzQkFBTyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUM7d0JBRTdCLHFCQUFNLElBQUksQ0FBQywyQkFBMkIsQ0FBRyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBRyxNQUFNLEVBQUUsUUFBUSxDQUFFLEVBQTVDLENBQTRDLENBQUUsRUFBQTs7d0JBQTdHLE9BQU8sR0FBRyxTQUFtRzt3QkFFbkgsSUFBSyxPQUFPOzRCQUFHLHNCQUFPLE9BQU8sRUFBQzt3QkFFOUIsc0JBQU8sZ0JBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFDOzs7O0tBRS9CO0lBRUssMkNBQTJCLEdBQWpDLFVBQW9DLGVBQXlCOzs7Ozs7d0JBRWpELENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OzZCQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFFekMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixxQkFBTSxlQUFlLENBQUcsUUFBUSxDQUFFLEVBQUE7O3dCQUE1QyxPQUFPLEdBQUcsU0FBa0M7d0JBRWxELElBQUssQ0FBQyxPQUFPOzRCQUFHLHdCQUFTO3dCQUV6QixLQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7NEJBRTlELEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUMvQixPQUFPLEdBQUcsYUFBYSxDQUFHLE9BQU8sRUFBRSxFQUFFLENBQUUsQ0FBQzs0QkFFOUMsV0FBMEIsRUFBUCxtQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTyxFQUFHO2dDQUFuQixLQUFLO2dDQUViLElBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7b0NBQUcsc0JBQU8sS0FBSyxDQUFDLENBQUMsQ0FBVyxFQUFDOzZCQUVwRDt5QkFFRjs7O3dCQWxCZ0QsQ0FBQyxFQUFFLENBQUE7Ozs7OztLQXNCdkQ7SUFFSyw2QkFBYSxHQUFuQixVQUFzQixPQUFlOzs7Ozs7OzRDQUV6QixRQUFROzs7OzRDQUVBLHFCQUFNLE9BQUssVUFBVSxDQUFHLFFBQVEsQ0FBRSxFQUFBOzt3Q0FBNUMsT0FBTyxHQUFHLFNBQWtDO3dDQUVsRCxJQUFLLENBQUMsT0FBTztxRkFBVTt3Q0FFbkIsVUFBVSxHQUFHLE9BQU8sQ0FBQzt3Q0FFekIsT0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFHLFVBQUUsS0FBSyxFQUFFLEVBQUU7NENBRTFDLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7NENBRXBELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFHLEtBQUssRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFHLGNBQWMsRUFBRSxPQUFPLENBQUUsQ0FBRSxDQUFDO3dDQUU3RixDQUFDLENBQUMsQ0FBQzt3Q0FFSCxxQkFBTSxPQUFLLFVBQVUsQ0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFFLEVBQUE7O3dDQUE5QyxTQUE4QyxDQUFDOzs7Ozs7OEJBaEJiLEVBQWQsS0FBQSxJQUFJLENBQUMsU0FBUzs7OzZCQUFkLENBQUEsY0FBYyxDQUFBO3dCQUExQixRQUFRO3NEQUFSLFFBQVE7Ozs7Ozs7d0JBQUksSUFBYyxDQUFBOzs7Ozs7S0FvQnJDO0lBRUgsWUFBQztBQUFELENBQUMsQUFySEQsQ0FBb0Isa0JBQVEsR0FxSDNCO0FBRUQsWUFBWTtBQUVaLGtCQUFlLEtBQUssQ0FBQyJ9