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
var git_1 = require("../providers/commit/git");
var utils_1 = require("../utils");
/* COMMIT */
function commit() {
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
                        return [2 /*return*/, utils_1.default.exit('[commit] Unsupported repository')];
                    return [4 /*yield*/, utils_1.default.script.run('precommit')];
                case 3:
                    _a.sent();
                    utils_1.default.log('Making the commit...');
                    return [4 /*yield*/, git_1.default.do(repoPath, version)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, utils_1.default.script.run('postcommit')];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/* EXPORT */
exports.default = commit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2NvbW1pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWiwrQ0FBNkM7QUFDN0Msa0NBQTZCO0FBRTdCLFlBQVk7QUFFWixTQUFlLE1BQU07Ozs7O3dCQUVGLHFCQUFNLGVBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFHLEVBQUE7O29CQUE1QyxRQUFRLEdBQUcsU0FBaUM7b0JBQ2xDLHFCQUFNLGVBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFHLFFBQVEsQ0FBRSxFQUFBOztvQkFBeEQsT0FBTyxHQUFHLFNBQThDO29CQUU5RCxJQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTzt3QkFBRyxzQkFBTyxlQUFLLENBQUMsSUFBSSxDQUFHLGlDQUFpQyxDQUFFLEVBQUM7b0JBRXJGLHFCQUFNLGVBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFHLFdBQVcsQ0FBRSxFQUFBOztvQkFBdEMsU0FBc0MsQ0FBQztvQkFFdkMsZUFBSyxDQUFDLEdBQUcsQ0FBRyxzQkFBc0IsQ0FBRSxDQUFDO29CQUVyQyxxQkFBTSxhQUFNLENBQUMsRUFBRSxDQUFHLFFBQVEsRUFBRSxPQUFPLENBQUUsRUFBQTs7b0JBQXJDLFNBQXFDLENBQUM7b0JBRXRDLHFCQUFNLGVBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFHLFlBQVksQ0FBRSxFQUFBOztvQkFBdkMsU0FBdUMsQ0FBQzs7Ozs7Q0FFekM7QUFFRCxZQUFZO0FBRVosa0JBQWUsTUFBTSxDQUFDIn0=