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
var fs = require("fs");
var mkdirp = require("mkdirp");
var path = require("path");
var pify = require("pify");
var touch = require("touch");
/* FILE */
var File = {
    exists: function (filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, pify(fs.access)(filePath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    make: function (filePath, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pify(mkdirp)(path.dirname(filePath))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, File.write(filePath, content)];
                }
            });
        });
    },
    read: function (filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, pify(fs.readFile)(filePath, { encoding: 'utf8' })];
                    case 1: return [2 /*return*/, (_a.sent()).toString()];
                    case 2:
                        e_2 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    write: function (filePath, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, pify(fs.writeFile)(filePath, content, {})];
                    case 1:
                        _a.sent();
                        touch.sync(filePath); // So that programs will notice the change
                        return [2 /*return*/];
                }
            });
        });
    }
};
/* EXPORT */
exports.default = File;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLHVCQUF5QjtBQUN6QiwrQkFBaUM7QUFDakMsMkJBQTZCO0FBQzdCLDJCQUE2QjtBQUM3Qiw2QkFBK0I7QUFFL0IsVUFBVTtBQUVWLElBQU0sSUFBSSxHQUFHO0lBRUwsTUFBTSxFQUFaLFVBQWUsUUFBZ0I7Ozs7Ozs7d0JBSTNCLHFCQUFNLElBQUksQ0FBRyxFQUFFLENBQUMsTUFBTSxDQUFFLENBQUUsUUFBUSxDQUFFLEVBQUE7O3dCQUFwQyxTQUFvQyxDQUFDO3dCQUVyQyxzQkFBTyxJQUFJLEVBQUM7Ozt3QkFJWixzQkFBTyxLQUFLLEVBQUM7Ozs7O0tBSWhCO0lBRUssSUFBSSxFQUFWLFVBQWEsUUFBZ0IsRUFBRSxPQUFlOzs7OzRCQUU1QyxxQkFBTSxJQUFJLENBQUcsTUFBTSxDQUFFLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRyxRQUFRLENBQUUsQ0FBRSxFQUFBOzt3QkFBbEQsU0FBa0QsQ0FBQzt3QkFFbkQsc0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFFLEVBQUM7Ozs7S0FFekM7SUFFSyxJQUFJLEVBQVYsVUFBYSxRQUFnQjs7Ozs7Ozt3QkFJaEIscUJBQU0sSUFBSSxDQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUUsQ0FBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUUsRUFBQTs0QkFBckUsc0JBQU8sQ0FBRSxTQUE0RCxDQUFFLENBQUMsUUFBUSxFQUFHLEVBQUM7Ozs7Ozs7O0tBSXZGO0lBRUssS0FBSyxFQUFYLFVBQWMsUUFBZ0IsRUFBRSxPQUFlOzs7OzRCQUU3QyxxQkFBTSxJQUFJLENBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBRSxDQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFFLEVBQUE7O3dCQUFwRCxTQUFvRCxDQUFDO3dCQUVyRCxLQUFLLENBQUMsSUFBSSxDQUFHLFFBQVEsQ0FBRSxDQUFDLENBQUMsMENBQTBDOzs7OztLQUVwRTtDQUVGLENBQUM7QUFFRixZQUFZO0FBRVosa0JBQWUsSUFBSSxDQUFDIn0=