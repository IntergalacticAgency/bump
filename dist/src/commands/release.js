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
var github_1 = require("../providers/release/github");
var utils_1 = require("../utils");
/* RELEASE */
function release() {
    return __awaiter(this, void 0, void 0, function () {
        var repoPath, version;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, utils_1.default.repository.getPath()];
                case 1:
                    repoPath = _a.sent();
                    return [4 /*yield*/, utils_1.default.repository.getVersion(repoPath)];
                case 2:
                    version = _a.sent();
                    if (!repoPath || !version)
                        return [2 /*return*/, utils_1.default.exit('[release] Unsupported repository')];
                    return [4 /*yield*/, utils_1.default.script.run('prerelease')];
                case 3:
                    _a.sent();
                    if (!config_1.default.release.github.enabled) return [3 /*break*/, 5];
                    utils_1.default.log('Releasing to GitHub...');
                    return [4 /*yield*/, github_1.default.do(repoPath, version)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [4 /*yield*/, utils_1.default.script.run('postrelease')];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/* EXPORT */
exports.default = release;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9yZWxlYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLG9DQUErQjtBQUMvQixzREFBaUQ7QUFDakQsa0NBQTZCO0FBRTdCLGFBQWE7QUFFYixTQUFlLE9BQU87Ozs7O3dCQUVILHFCQUFNLGVBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFHLEVBQUE7O29CQUE1QyxRQUFRLEdBQUcsU0FBaUM7b0JBQ2xDLHFCQUFNLGVBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFHLFFBQVEsQ0FBRSxFQUFBOztvQkFBeEQsT0FBTyxHQUFHLFNBQThDO29CQUU5RCxJQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTzt3QkFBRyxzQkFBTyxlQUFLLENBQUMsSUFBSSxDQUFHLGtDQUFrQyxDQUFFLEVBQUM7b0JBRXRGLHFCQUFNLGVBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFHLFlBQVksQ0FBRSxFQUFBOztvQkFBdkMsU0FBdUMsQ0FBQzt5QkFFbkMsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBN0Isd0JBQTZCO29CQUVoQyxlQUFLLENBQUMsR0FBRyxDQUFHLHdCQUF3QixDQUFFLENBQUM7b0JBRXZDLHFCQUFNLGdCQUFNLENBQUMsRUFBRSxDQUFHLFFBQVEsRUFBRSxPQUFPLENBQUUsRUFBQTs7b0JBQXJDLFNBQXFDLENBQUM7O3dCQUl4QyxxQkFBTSxlQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRyxhQUFhLENBQUUsRUFBQTs7b0JBQXhDLFNBQXdDLENBQUM7Ozs7O0NBRTFDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLE9BQU8sQ0FBQyJ9