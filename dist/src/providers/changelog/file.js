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
var moment = require("moment");
var opn = require("opn");
var path = require("path");
var inquirer_helpers_1 = require("inquirer-helpers");
var stringMatches = require("string-matches");
var config_1 = require("../../config");
var utils_1 = require("../../utils");
/* CHANGELOG */
var Changelog = {
    open: function (repoPath) {
        return __awaiter(this, void 0, void 0, function () {
            var changelogPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        changelogPath = path.join(repoPath, config_1.default.changelog.file);
                        return [4 /*yield*/, utils_1.default.file.exists(changelogPath)];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        opn(changelogPath, { wait: false });
                        return [2 /*return*/];
                }
            });
        });
    },
    init: function (repoPath) {
        return __awaiter(this, void 0, void 0, function () {
            var bumps, sections, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.default.repository.getVersionProvidersResult(repoPath, 'getCommitsBumps')];
                    case 1:
                        bumps = _a.sent();
                        if (!bumps || !bumps.length)
                            return [2 /*return*/, utils_1.default.exit('[changelog] No commits found')];
                        sections = bumps.map(function (bump) { return Changelog.section.render(bump.version, bump.commits); }), content = sections.join('');
                        return [4 /*yield*/, Changelog.write(repoPath, content)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    read: function (repoPath) {
        return __awaiter(this, void 0, void 0, function () {
            var changelogPath, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        changelogPath = path.join(repoPath, config_1.default.changelog.file);
                        return [4 /*yield*/, utils_1.default.file.read(changelogPath)];
                    case 1:
                        content = _a.sent();
                        return [2 /*return*/, content];
                }
            });
        });
    },
    update: function (repoPath, version) {
        return __awaiter(this, void 0, void 0, function () {
            var changelogPath, _a, _b, bumps, section;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        changelogPath = path.join(repoPath, config_1.default.changelog.file);
                        return [4 /*yield*/, utils_1.default.file.exists(changelogPath)];
                    case 1:
                        if (!!(_c.sent())) return [3 /*break*/, 7];
                        if (!config_1.default.changelog.create && config_1.default.force)
                            return [2 /*return*/];
                        _a = config_1.default.changelog.create;
                        if (_a) return [3 /*break*/, 4];
                        _b = config_1.default.changelog.ask;
                        if (!_b) return [3 /*break*/, 3];
                        return [4 /*yield*/, inquirer_helpers_1.default.noYes('No changelog found, do you want to create it?')];
                    case 2:
                        _b = (_c.sent());
                        _c.label = 3;
                    case 3:
                        _a = (_b);
                        _c.label = 4;
                    case 4:
                        if (!_a) return [3 /*break*/, 6];
                        return [4 /*yield*/, Changelog.init(repoPath)];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, utils_1.default.repository.getVersionProvidersResult(repoPath, 'getCommitsBumps', 1)];
                    case 8:
                        bumps = _c.sent();
                        if (!bumps || !bumps.length)
                            return [2 /*return*/];
                        section = Changelog.section.render(version, bumps[0].commits);
                        return [2 /*return*/, Changelog.section.add(repoPath, section)];
                    case 9: return [2 /*return*/];
                }
            });
        });
    },
    write: function (repoPath, content) {
        return __awaiter(this, void 0, void 0, function () {
            var changelogPath, contentCleaned;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        changelogPath = path.join(repoPath, config_1.default.changelog.file), contentCleaned = content.replace(/^(\s*\r?\n){2,}/gm, '\n').replace(/(\s*\r?\n){2,}$/gm, '\n');
                        return [4 /*yield*/, utils_1.default.file.make(changelogPath, contentCleaned)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    section: {
        readLast: function (repoPath) {
            return __awaiter(this, void 0, void 0, function () {
                var content, headerRe, matches;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Changelog.read(repoPath)];
                        case 1:
                            content = _a.sent();
                            if (!content)
                                return [2 /*return*/];
                            headerRe = new RegExp("^" + _.escapeRegExp(config_1.default.changelog.version).replace(/\\\[[^\]]+\\\]/gi, '(.*)') + "$", 'gmi'), matches = stringMatches(content, headerRe, 2);
                            if (matches.length < 2)
                                return [2 /*return*/];
                            return [2 /*return*/, _.trim(content.slice(matches[0].index + matches[0][0].length, matches[1].index))];
                    }
                });
            });
        },
        render: function (version, commits) {
            /* VARIABLES */
            var lines = [];
            /* TOKENS */
            var tokens = {
                version: version,
                version_date: moment().format(config_1.default.tokens.version_date.format)
            };
            /* VERSION */
            if (config_1.default.changelog.version) {
                lines.push(utils_1.default.template.render(config_1.default.changelog.version, tokens));
            }
            /* COMMITS */
            if (config_1.default.changelog.commit) {
                commits.reverse().forEach(function (commit) {
                    if (commit.isBump)
                        return;
                    var mergeRe = /^(Merge PR|Merge pull request|Merge branch) /gi;
                    if (mergeRe.test(commit.message))
                        return;
                    var hash = commit.hash, date = commit.date, message = commit.message, author_name = commit.author_name, author_email = commit.author_email, messageCleaned = message.replace(/ \(HEAD\)$/i, '').replace(/ \(HEAD -> [^)]+\)$/i, '').replace(/ \(tag: [^)]+\)$/i, '');
                    var commitTokens = _.extend({}, tokens, {
                        date: moment(new Date(date)).format(config_1.default.tokens.date.format),
                        message: messageCleaned,
                        hash: hash,
                        hash4: hash.slice(0, 4),
                        hash7: hash.slice(0, 7),
                        hash8: hash.slice(0, 8),
                        author_name: author_name,
                        author_email: author_email
                    });
                    lines.push(utils_1.default.template.render(config_1.default.changelog.commit, commitTokens));
                });
            }
            /* SECTION */
            var section = lines.join('\n') + '\n';
            /* SEPARATOR */
            if (config_1.default.changelog.separator) {
                section += utils_1.default.template.render(config_1.default.changelog.separator, tokens);
            }
            /* RETURN */
            return section;
        },
        add: function (repoPath, section) {
            return __awaiter(this, void 0, void 0, function () {
                var content;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Changelog.read(repoPath)];
                        case 1:
                            content = _a.sent();
                            if (!content)
                                return [2 /*return*/, utils_1.default.exit('[changelog] Changelog missing')];
                            if (content.startsWith(section))
                                return [2 /*return*/]; // Duplicate section
                            content = section + content;
                            return [4 /*yield*/, Changelog.write(repoPath, content)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
    }
};
/* EXPORT */
exports.default = Changelog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcm92aWRlcnMvY2hhbmdlbG9nL2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosMEJBQTRCO0FBQzVCLCtCQUFpQztBQUNqQyx5QkFBMkI7QUFDM0IsMkJBQTZCO0FBQzdCLHFEQUFzQztBQUN0Qyw4Q0FBZ0Q7QUFFaEQsdUNBQWtDO0FBQ2xDLHFDQUFnQztBQUVoQyxlQUFlO0FBRWYsSUFBTSxTQUFTLEdBQUc7SUFFVixJQUFJLEVBQVYsVUFBYSxRQUFnQjs7Ozs7O3dCQUVyQixhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBRyxRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLENBQUM7d0JBRTlELHFCQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFHLGFBQWEsQ0FBRSxFQUFBOzt3QkFBL0MsSUFBSyxDQUFDLENBQUEsU0FBeUMsQ0FBQTs0QkFBRyxzQkFBTzt3QkFFekQsR0FBRyxDQUFHLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBRSxDQUFDOzs7OztLQUV4QztJQUVLLElBQUksRUFBVixVQUFhLFFBQWdCOzs7Ozs0QkFFYixxQkFBTSxlQUFLLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFHLFFBQVEsRUFBRSxpQkFBaUIsQ0FBRSxFQUFBOzt3QkFBeEYsS0FBSyxHQUFHLFNBQWdGO3dCQUU5RixJQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07NEJBQUcsc0JBQU8sZUFBSyxDQUFDLElBQUksQ0FBRyw4QkFBOEIsQ0FBRSxFQUFDO3dCQUU5RSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBRyxVQUFBLElBQUksSUFBSSxPQUFBLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFB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