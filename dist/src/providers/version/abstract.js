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
var _ = require("lodash");
var path = require("path");
var pify = require("pify");
var semver = require("semver");
var simpleGit = require("simple-git");
var utils_1 = require("../../utils");
/* ABSTRACT */
var Abstract = /** @class */ (function () {
    function Abstract(repoPath) {
        this.repoPath = repoPath;
        this.git = pify(_.bindAll(simpleGit(this.repoPath), ['log', 'silent', 'show']));
        this.git.silent(true);
        this.init();
    }
    Abstract.prototype.init = function () { };
    Abstract.prototype.bump = function (increment, version) {
        if (version === void 0) { version = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!version) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getVersion()];
                    case 1:
                        version = _a.sent();
                        version = semver.inc(version, increment);
                        if (!version)
                            return [2 /*return*/];
                        _a.label = 2;
                    case 2: 
                    /* BUMP */
                    return [4 /*yield*/, this.updateVersion(version)];
                    case 3:
                        /* BUMP */
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Abstract.prototype.getContent = function (filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var repoFilePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repoFilePath = path.join(this.repoPath, filePath);
                        return [4 /*yield*/, utils_1.default.file.read(repoFilePath)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Abstract.prototype.getContentByCommit = function (commit, filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.git.show(commit.hash + ":" + filePath)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Abstract.prototype.setContent = function (filePath, content) {
        return __awaiter(this, void 0, void 0, function () {
            var repoFilePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repoFilePath = path.join(this.repoPath, filePath);
                        return [4 /*yield*/, utils_1.default.file.write(repoFilePath, content)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Abstract.prototype.getCommitNth = function (nth) {
        return __awaiter(this, void 0, void 0, function () {
            var commits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCommitsChunk(nth, 1)];
                    case 1:
                        commits = _a.sent();
                        return [2 /*return*/, commits[0]];
                }
            });
        });
    };
    Abstract.prototype.getCommitsChunk = function (nth, size) {
        return __awaiter(this, void 0, void 0, function () {
            var log, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.git.log(['-n', size, '--skip', size * nth])];
                    case 1:
                        log = _a.sent();
                        return [2 /*return*/, log.all];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Abstract.prototype.getCommitsBumps = function (limit) {
        if (limit === void 0) { limit = Infinity; }
        return __awaiter(this, void 0, void 0, function () {
            var bumps, bump, chunkNth, prevVersion, commits, _i, commits_1, commit, version, commitLast, commits_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bumps = [], bump = { version: '', commits: [] }, chunkNth = 0;
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getCommitsChunk(chunkNth, 50)];
                    case 2:
                        commits = _a.sent();
                        if (!commits.length)
                            return [3 /*break*/, 7];
                        _i = 0, commits_1 = commits;
                        _a.label = 3;
                    case 3:
                        if (!(_i < commits_1.length)) return [3 /*break*/, 6];
                        commit = commits_1[_i];
                        return [4 /*yield*/, this.getVersionByCommit(commit)];
                    case 4:
                        version = _a.sent();
                        if (!semver.valid(version))
                            return [2 /*return*/];
                        if (version !== prevVersion) {
                            commitLast = bump.commits.pop();
                            if (bumps.length >= limit)
                                return [3 /*break*/, 7];
                            commits_2 = [commit];
                            if (commitLast) {
                                commits_2.unshift(commitLast);
                                commitLast.isBump = true;
                            }
                            if (!bump.commits.length) {
                                bumps.pop();
                            }
                            bump = { version: version || prevVersion, commits: commits_2 };
                            bumps.push(bump);
                        }
                        else {
                            if (!bump.version)
                                bump.version = version;
                            bump.commits.push(commit);
                        }
                        prevVersion = version;
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        chunkNth++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, bumps];
                }
            });
        });
    };
    Abstract.prototype.getVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var commit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCommitNth(0)];
                    case 1:
                        commit = _a.sent();
                        return [4 /*yield*/, this.getVersionByCommit(commit)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Abstract;
}());
/* EXPORT */
exports.default = Abstract;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3ZlcnNpb24vYWJzdHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosMEJBQTRCO0FBQzVCLDJCQUE2QjtBQUM3QiwyQkFBNkI7QUFDN0IsK0JBQWlDO0FBQ2pDLHNDQUF3QztBQUV4QyxxQ0FBZ0M7QUFFaEMsY0FBYztBQUVkO0lBSUUsa0JBQWMsUUFBZ0I7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBRyxTQUFTLENBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBRSxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBRSxDQUFFLENBQUM7UUFDekYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUcsSUFBSSxDQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLElBQUksRUFBRyxDQUFDO0lBRWYsQ0FBQztJQUlELHVCQUFJLEdBQUosY0FBUyxDQUFDO0lBRUosdUJBQUksR0FBVixVQUFhLFNBQWlCLEVBQUUsT0FBNkI7UUFBN0Isd0JBQUEsRUFBQSxjQUE2Qjs7Ozs7NkJBSXRELENBQUMsT0FBTyxFQUFSLHdCQUFRO3dCQUVELHFCQUFNLElBQUksQ0FBQyxVQUFVLEVBQUcsRUFBQTs7d0JBQWxDLE9BQU8sR0FBRyxTQUF3QixDQUFDO3dCQUVuQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBRyxPQUFPLEVBQUUsU0FBUyxDQUFFLENBQUM7d0JBRTVDLElBQUssQ0FBQyxPQUFPOzRCQUFHLHNCQUFPOzs7b0JBSXpCLFVBQVU7b0JBRVYscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBRyxPQUFPLENBQUUsRUFB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