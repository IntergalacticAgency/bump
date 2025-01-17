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
var file_1 = require("../providers/changelog/file");
var utils_1 = require("../utils");
/* CHANGELOG */
function changelog() {
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
                        return [2 /*return*/, utils_1.default.exit('[changelog] Unsupported repository')];
                    return [4 /*yield*/, utils_1.default.script.run('prechangelog')];
                case 3:
                    _a.sent();
                    utils_1.default.log('Updating the changelog...');
                    return [4 /*yield*/, file_1.default.update(repoPath, version)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, utils_1.default.script.run('postchangelog')];
                case 5:
                    _a.sent();
                    if (!config_1.default.changelog.open) return [3 /*break*/, 7];
                    return [4 /*yield*/, file_1.default.open(repoPath)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
/* EXPORT */
exports.default = changelog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2NoYW5nZWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixvQ0FBK0I7QUFDL0Isb0RBQW9EO0FBQ3BELGtDQUE2QjtBQUU3QixlQUFlO0FBRWYsU0FBZSxTQUFTOzs7Ozt3QkFFTCxxQkFBTSxlQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRyxFQUFBOztvQkFBNUMsUUFBUSxHQUFHLFNBQWlDO29CQUNsQyxxQkFBTSxlQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRyxRQUFRLENBQUUsRUFBQTs7b0JBQXhELE9BQU8sR0FBRyxTQUE4QztvQkFFOUQsSUFBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU87d0JBQUcsc0JBQU8sZUFBSyxDQUFDLElBQUksQ0FBRyxvQ0FBb0MsQ0FBRSxFQUFDO29CQUV4RixxQkFBTSxlQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRyxjQUFjLENBQUUsRUFBQTs7b0JBQXpDLFNBQXlDLENBQUM7b0JBRTFDLGVBQUssQ0FBQyxHQUFHLENBQUcsMkJBQTJCLENBQUUsQ0FBQztvQkFFMUMscUJBQU0sY0FBUyxDQUFDLE1BQU0sQ0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFFLEVBQUE7O29CQUE1QyxTQUE0QyxDQUFDO29CQUU3QyxxQkFBTSxlQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRyxlQUFlLENBQUUsRUFBQTs7b0JBQTFDLFNBQTBDLENBQUM7eUJBRXRDLGdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBckIsd0JBQXFCO29CQUV4QixxQkFBTSxjQUFTLENBQUMsSUFBSSxDQUFHLFFBQVEsQ0FBRSxFQUFBOztvQkFBakMsU0FBaUMsQ0FBQzs7Ozs7O0NBSXJDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLFNBQVMsQ0FBQyJ9