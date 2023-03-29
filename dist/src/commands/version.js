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
var inquirer_helpers_1 = require("inquirer-helpers");
var minimist = require("minimist");
var semver = require("semver");
var specialist_1 = require("specialist");
var config_1 = require("../config");
var utils_1 = require("../utils");
/* VERSION */
function version() {
    return __awaiter(this, void 0, void 0, function () {
        var repoPath, providers, argv, commands, increments, next, increment, version, increments_1, original, bumps;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, utils_1.default.repository.getPath()];
                case 1:
                    repoPath = _a.sent();
                    if (!repoPath)
                        return [2 /*return*/, utils_1.default.exit('[version] Unsupported repository')];
                    return [4 /*yield*/, utils_1.default.repository.getVersionProviders(repoPath)];
                case 2:
                    providers = _a.sent();
                    if (!providers.length)
                        return [2 /*return*/, utils_1.default.exit('[version] Unsupported repository')];
                    argv = minimist(process.argv.slice(2)), commands = ['version', 'changelog', 'commit', 'tag', 'release'], increments = ['major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease', 'custom'];
                    next = argv._[1] || argv._[0];
                    if (next && !commands.includes(next)) {
                        if (increments.includes(next)) {
                            increment = next;
                        }
                        else if (/^(\d|v\d)/.test(next)) {
                            increment = 'custom';
                            version = next;
                        }
                        else {
                            return [2 /*return*/, utils_1.default.exit("[version] Invalid version number or version increment: \"" + specialist_1.color.bold(next) + "\"")];
                        }
                    }
                    if (!!version) return [3 /*break*/, 6];
                    if (!!increment) return [3 /*break*/, 4];
                    increments_1 = config_1.default.version.increments;
                    if (!increments_1.length)
                        return [2 /*return*/, utils_1.default.exit('[version] You have to explicitly provide a version number when no increments are enabled')];
                    return [4 /*yield*/, inquirer_helpers_1.default.list('Select an increment:', increments_1)];
                case 3:
                    increment = _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(increment === 'custom')) return [3 /*break*/, 6];
                    return [4 /*yield*/, inquirer_helpers_1.default.input('Enter a version:')];
                case 5:
                    version = _a.sent();
                    _a.label = 6;
                case 6:
                    if (version) {
                        original = version;
                        version = _.trimStart(version, 'v'); // In order to support things like `v2`
                        if (!semver.valid(version)) {
                            version = semver.coerce(version);
                            if (!version)
                                return [2 /*return*/, utils_1.default.exit("[version] Invalid version number: \"" + specialist_1.color.bold(original) + "\"")];
                            version = version.version;
                        }
                    }
                    return [4 /*yield*/, utils_1.default.repository.getVersionProvidersResult(repoPath, 'getCommitsBumps', 1)];
                case 7:
                    bumps = _a.sent();
                    if (!((!bumps || !bumps.length || (bumps.length === 1 && !bumps[0].commits.length)) && !config_1.default.force)) return [3 /*break*/, 9];
                    return [4 /*yield*/, inquirer_helpers_1.default.noYes('No changes detected, bump anyway?')];
                case 8:
                    if (!(_a.sent()))
                        return [2 /*return*/, process.exit()];
                    _a.label = 9;
                case 9:
                    /* BUMP */
                    utils_1.default.log('Bumping the version...');
                    return [4 /*yield*/, utils_1.default.script.run('prebump')];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, Promise.all(providers.map(function (provider) { return provider.bump(increment, version); }))];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, utils_1.default.script.run('postbump')];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/* EXPORT */
exports.default = version;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy92ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLDBCQUE0QjtBQUM1QixxREFBc0M7QUFDdEMsbUNBQXFDO0FBQ3JDLCtCQUFpQztBQUNqQyx5Q0FBaUM7QUFDakMsb0NBQStCO0FBQy9CLGtDQUE2QjtBQUU3QixhQUFhO0FBRWIsU0FBZSxPQUFPOzs7Ozt3QkFJSCxxQkFBTSxlQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRyxFQUFBOztvQkFBNUMsUUFBUSxHQUFHLFNBQWlDO29CQUVsRCxJQUFLLENBQUMsUUFBUTt3QkFBRyxzQkFBTyxlQUFLLENBQUMsSUFBSSxDQUFHLGtDQUFrQyxDQUFFLEVBQUM7b0JBRXhELHFCQUFNLGVBQUssQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUcsUUFBUSxDQUFFLEVBQUE7O29CQUFuRSxTQUFTLEdBQUcsU0FBdUQ7b0JBRXpFLElBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFBRyxzQkFBTyxlQUFLLENBQUMsSUFBSSxDQUFHLGtDQUFrQyxDQUFFLEVBQUM7b0JBSTVFLElBQUksR0FBRyxRQUFRLENBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUcsQ0FBQyxDQUFFLENBQUUsRUFDNUMsUUFBUSxHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUMvRCxVQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBRXZHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBRXJCO29CQUVaLElBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBRyxJQUFJLENBQUUsRUFBRzt3QkFFekMsSUFBSyxVQUFVLENBQUMsUUFBUSxDQUFHLElBQUksQ0FBRSxFQUFHOzRCQUVsQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3lCQUVsQjs2QkFBTSxJQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUcsSUFBSSxDQUFFLEVBQUc7NEJBRXRDLFNBQVMsR0FBRyxRQUFRLENBQUM7NEJBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUM7eUJBRWhCOzZCQUFNOzRCQUVMLHNCQUFPLGVBQUssQ0FBQyxJQUFJLENBQUcsOERBQTJELGtCQUFLLENBQUMsSUFBSSxDQUFHLElBQUksQ0FBRSxPQUFHLENBQUUsRUFBQzt5QkFFekc7cUJBRUY7eUJBRUksQ0FBQyxPQUFPLEVBQVIsd0JBQVE7eUJBRU4sQ0FBQyxTQUFTLEVBQVYsd0JBQVU7b0JBRVAsZUFBYSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBRTdDLElBQUssQ0FBQyxZQUFVLENBQUMsTUFBTTt3QkFBRyxzQkFBTyxlQUFLLENBQUMsSUFBSSxDQUFHLDBGQUEwRixDQUFFLEVBQUM7b0JBRS9ILHFCQUFNLDBCQUFNLENBQUMsSUFBSSxDQUFHLHNCQUFzQixFQUFFLFlBQVUsQ0FBRSxFQUFBOztvQkFBcEUsU0FBUyxHQUFHLFNBQXdELENBQUM7Ozt5QkFJbEUsQ0FBQSxTQUFTLEtBQUssUUFBUSxDQUFBLEVBQXRCLHdCQUFzQjtvQkFFZixxQkFBTSwwQkFBTSxDQUFDLEtBQUssQ0FBRyxrQkFBa0IsQ0FBRSxFQUFBOztvQkFBbkQsT0FBTyxHQUFHLFNBQXlDLENBQUM7OztvQkFNeEQsSUFBSyxPQUFPLEVBQUc7d0JBRVAsUUFBUSxHQUFHLE9BQU8sQ0FBQzt3QkFFekIsT0FBTyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsdUNBQXVDO3dCQUUvRSxJQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRyxPQUFPLENBQUUsRUFBRzs0QkFFL0IsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUcsT0FBTyxDQUFFLENBQUM7NEJBRXBDLElBQUssQ0FBQyxPQUFPO2dDQUFHLHNCQUFPLGVBQUssQ0FBQyxJQUFJLENBQUcseUNBQXNDLGtCQUFLLENBQUMsSUFBSSxDQUFHLFFBQVEsQ0FBRSxPQUFHLENBQUUsRUFBQzs0QkFFdkcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBRTNCO3FCQUVGO29CQUlhLHFCQUFNLGVBQUssQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUcsUUFBUSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBRSxFQUFBOztvQkFBM0YsS0FBSyxHQUFHLFNBQW1GO3lCQUU1RixDQUFBLENBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFFLElBQUksQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQSxFQUFsRyx3QkFBa0c7b0JBRS9GLHFCQUFNLDBCQUFNLENBQUMsS0FBSyxDQUFHLG1DQUFtQyxDQUFFLEVBQUE7O29CQUFoRSxJQUFLLENBQUMsQ0FBQSxTQUEwRCxDQUFBO3dCQUFHLHNCQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUcsRUFBQzs7O29CQUk1RixVQUFVO29CQUVWLGVBQUssQ0FBQyxHQUFHLENBQUcsd0JBQXdCLENBQUUsQ0FBQztvQkFFdkMscUJBQU0sZUFBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUcsU0FBUyxDQUFFLEVBQUE7O29CQUFwQyxTQUFvQyxDQUFDO29CQUVyQyxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUcsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFHLFNBQVMsRUFBRSxPQUFPLENBQUUsRUFBcEMsQ0FBb0MsQ0FBRSxDQUFFLEVBQUE7O29CQUF4RixTQUF3RixDQUFDO29CQUV6RixxQkFBTSxlQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRyxVQUFVLENBQUUsRUFBQTs7b0JBQXJDLFNBQXFDLENBQUM7Ozs7O0NBRXZDO0FBRUQsWUFBWTtBQUVaLGtCQUFlLE9BQU8sQ0FBQyJ9