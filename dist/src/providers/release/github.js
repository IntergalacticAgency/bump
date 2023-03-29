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
var mime = require("mime-types");
var octokit = require("@octokit/rest");
var opn = require("opn");
var path = require("path");
var username = require("git-username");
var config_1 = require("../../config");
var utils_1 = require("../../utils");
var file_1 = require("../changelog/file");
/* COMMIT */
var GitHub = {
    do: function (repoPath, version) {
        return __awaiter(this, void 0, void 0, function () {
            var cwd, github, owner_1, repo_1, tag, release_1, _a, _b, _c, options, uploader, e_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!config_1.default.release.github.token)
                            return [2 /*return*/, utils_1.default.exit('[release] Missing GitHub token')];
                        cwd = repoPath, github = new octokit({
                            auth: config_1.default.release.github.token
                        });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, , 7]);
                        owner_1 = config_1.default.release.github.owner || username({ cwd: cwd }), repo_1 = config_1.default.release.github.repo || path.basename(cwd), tag = utils_1.default.template.render(config_1.default.tag.name, { version: version });
                        _b = (_a = github.repos).createRelease;
                        _c = {
                            owner: owner_1,
                            repo: repo_1,
                            draft: config_1.default.release.github.draft,
                            prerelease: config_1.default.release.github.prerelease,
                            name: tag,
                            tag_name: tag
                        };
                        return [4 /*yield*/, file_1.default.section.readLast(repoPath)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [(_c.body = _d.sent(),
                                _c)])];
                    case 3:
                        release_1 = _d.sent();
                        if (config_1.default.release.github.open) {
                            opn(release_1.data.html_url, { wait: false });
                        }
                        if (!config_1.default.release.github.files.length) return [3 /*break*/, 5];
                        options = {
                            globs: config_1.default.release.github.files,
                            filesNr: config_1.default.release.github.filesNr,
                            upload: function (filePath) {
                                return github.repos.uploadReleaseAsset({
                                    url: release_1.data.upload_url,
                                    name: path.basename(filePath),
                                    file: fs.createReadStream(filePath),
                                    headers: {
                                        'content-type': mime.lookup(filePath),
                                        'content-length': fs.statSync(filePath).size
                                    }
                                });
                            },
                            cancel: function (filePath, asset) {
                                return github.repos.deleteReleaseAsset({
                                    owner: owner_1,
                                    repo: repo_1,
                                    asset_id: asset.data.id
                                });
                            }
                        };
                        uploader = new utils_1.default.Uploader(options);
                        return [4 /*yield*/, uploader.start()];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _d.sent();
                        utils_1.default.log(e_1);
                        utils_1.default.exit('[release] An error occurred while making the GitHub release');
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
};
/* EXPORT */
exports.default = GitHub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy9yZWxlYXNlL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWix1QkFBeUI7QUFDekIsaUNBQW1DO0FBQ25DLHVDQUF5QztBQUN6Qyx5QkFBMkI7QUFDM0IsMkJBQTZCO0FBQzdCLHVDQUF5QztBQUN6Qyx1Q0FBa0M7QUFDbEMscUNBQWdDO0FBRWhDLDBDQUEwQztBQUUxQyxZQUFZO0FBRVosSUFBTSxNQUFNLEdBQUc7SUFFUCxFQUFFLEVBQVIsVUFBVyxRQUFnQixFQUFFLE9BQWU7Ozs7Ozt3QkFFMUMsSUFBSyxDQUFDLGdCQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLOzRCQUFHLHNCQUFPLGVBQUssQ0FBQyxJQUFJLENBQUcsZ0NBQWdDLENBQUUsRUFBQzt3QkFFckYsR0FBRyxHQUFHLFFBQVEsRUFDZCxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUU7NEJBQ3BCLElBQUksRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSzt5QkFDbEMsQ0FBQyxDQUFDOzs7O3dCQUlELFVBQVEsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLEVBQ3pELFNBQU8sZ0JBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFHLEdBQUcsQ0FBRSxFQUMxRCxHQUFHLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUcsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUMsT0FBTyxTQUFBLEVBQUMsQ0FBRSxDQUFDO3dCQUUzQyxLQUFBLENBQUEsS0FBQSxNQUFNLENBQUMsS0FBSyxDQUFBLENBQUMsYUFBYSxDQUFBOzs0QkFDOUMsS0FBSyxTQUFBOzRCQUNMLElBQUksUUFBQTs0QkFDSixLQUFLLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUs7NEJBQ2xDLFVBQVUsRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVTs0QkFDNUMsSUFBSSxFQUFFLEdBQUc7NEJBQ1QsUUFBUSxFQUFFLEdBQUc7O3dCQUNQLHFCQUFNLGNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFHLFFBQVEsQ0FBRSxFQUFBOzRCQVByQyxxQkFBTSxlQU9wQixPQUFJLEdBQUUsU0FBNkM7cUNBQ25ELEVBQUE7O3dCQVJJLFlBQVUsU0FRZDt3QkFFRixJQUFLLGdCQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUc7NEJBRWhDLEdBQUcsQ0FBRyxTQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBRSxDQUFDO3lCQUVoRDs2QkFFSSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBbEMsd0JBQWtDO3dCQUUvQixPQUFPLEdBQWtKOzRCQUM3SixLQUFLLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUs7NEJBQ2xDLE9BQU8sRUFBRSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTzs0QkFDdEMsTUFBTSxFQUFOLFVBQVMsUUFBZ0I7Z0NBQ3ZCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBRTtvQ0FDdEMsR0FBRyxFQUFFLFNBQU8sQ0FBQyxJQUFJLENBQUMsVUFBVTtvQ0FDNUIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUcsUUFBUSxDQUFFO29DQUNoQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFHLFFBQVEsQ0FBRTtvQ0FDdEMsT0FBTyxFQUFFO3dDQUNQLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFHLFFBQVEsQ0FBRTt3Q0FDeEMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBRyxRQUFRLENBQUUsQ0FBQyxJQUFJO3FDQUNoRDtpQ0FDRixDQUFDLENBQUM7NEJBQ0wsQ0FBQzs0QkFDRCxNQUFNLEVBQU4sVUFBUyxRQUFnQixFQUFFLEtBQXdFO2dDQUNqRyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUU7b0NBQ3RDLEtBQUssU0FBQTtvQ0FDTCxJQUFJLFFBQUE7b0NBQ0osUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtpQ0FDeEIsQ0FBQyxDQUFDOzRCQUNMLENBQUM7eUJBQ0YsQ0FBQTt3QkFFSyxRQUFRLEdBQUcsSUFBSSxlQUFLLENBQUMsUUFBUSxDQUFHLE9BQU8sQ0FBRSxDQUFDO3dCQUVoRCxxQkFBTSxRQUFRLENBQUMsS0FBSyxFQUFHLEVBQUE7O3dCQUF2QixTQUF1QixDQUFDOzs7Ozt3QkFNMUIsZUFBSyxDQUFDLEdBQUcsQ0FBRyxHQUFDLENBQUUsQ0FBQzt3QkFFaEIsZUFBSyxDQUFDLElBQUksQ0FBRyw2REFBNkQsQ0FBRSxDQUFDOzs7Ozs7S0FJaEY7Q0FFRixDQUFDO0FBRUYsWUFBWTtBQUVaLGtCQUFlLE1BQU0sQ0FBQyJ9