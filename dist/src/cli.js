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
var Caporal = require("caporal");
var specialist_1 = require("specialist");
var package_json_1 = require("../package.json");
var _1 = require(".");
var caporal = Caporal;
/* CLI */
function CLI() {
    return __awaiter(this, void 0, void 0, function () {
        var app, command, helpLines;
        return __generator(this, function (_a) {
            /* APP */
            specialist_1.updater({ name: package_json_1.name, version: package_json_1.version });
            app = caporal.version(package_json_1.version);
            /* COMMANDS */
            app.option('--config, -c <path|object>', 'Path to configuration file or plain JSON object')
                .option('--force', 'Force the command without prompting the user')
                .option('--silent', 'Minimize the amount of logs')
                .option('--no-scripts', 'Disable scripts')
                .option('--prebump <script>', 'Script to execute before bumping the version')
                .option('--prechangelog <script>', 'Script to execute before updating the changelog')
                .option('--precommit <script>', 'Script to execute before making the commit')
                .option('--pretag <script>', 'Script to execute before tagging the commit')
                .option('--prerelease <script>', 'Script to execute before releasing')
                .option('--postbump <script>', 'Script to execute after bumping the version')
                .option('--postchangelog <script>', 'Script to execute after updating the changelog')
                .option('--postcommit <script>', 'Script to execute after making the commit')
                .option('--posttag <script>', 'Script to execute after tagging the commit')
                .option('--postrelease <script>', 'Script to execute after releasing')
                .argument('[version|increment]', 'Next version or supported increment name')
                .action(function () { return _1.default(); })
                /* VERSION */
                .command('version', 'Only bump the version number')
                .option('--config, -c <path|object>', 'Path to configuration file or plain JSON object')
                .option('--force', 'Force the command without prompting the user')
                .option('--silent', 'Minimize the amount of logs')
                .option('--no-scripts', 'Disable scripts')
                .option('--prebump <script>', 'Script to execute before bumping the version')
                .option('--postbump <script>', 'Script to execute after bumping the version')
                .argument('[version|increment]', 'Next version or supported increment name')
                .action(function () { return _1.default({ version: true }); })
                /* CHANGELOG */
                .command('changelog', 'Only update the changelog')
                .option('--config, -c <path|object>', 'Path to configuration file or plain JSON object')
                .option('--force', 'Force the command without prompting the user')
                .option('--silent', 'Minimize the amount of logs')
                .option('--no-scripts', 'Disable scripts')
                .option('--prechangelog <script>', 'Script to execute before updating the changelog')
                .option('--postchangelog <script>', 'Script to execute after updating the changelog')
                .action(function () { return _1.default({ changelog: true }); })
                /* COMMIT */
                .command('commit', 'Only make the commit')
                .option('--config, -c <path|object>', 'Path to configuration file or plain JSON object')
                .option('--force', 'Force the command without prompting the user')
                .option('--silent', 'Minimize the amount of logs')
                .option('--no-scripts', 'Disable scripts')
                .option('--precommit <script>', 'Script to execute before making the commit')
                .option('--postcommit <script>', 'Script to execute after making the commit')
                .action(function () { return _1.default({ commit: true }); })
                /* TAG */
                .command('tag', 'Only tag the commit')
                .option('--config, -c <path|object>', 'Path to configuration file or plain JSON object')
                .option('--force', 'Force the command without prompting the user')
                .option('--silent', 'Minimize the amount of logs')
                .option('--no-scripts', 'Disable scripts')
                .option('--pretag <script>', 'Script to execute before tagging the commit')
                .option('--posttag <script>', 'Script to execute after tagging the commit')
                .action(function () { return _1.default({ tag: true }); })
                /* RELEASE */
                .command('release', 'Only make the release')
                .option('--config, -c <path|object>', 'Path to configuration file or plain JSON object')
                .option('--force', 'Force the command without prompting the user')
                .option('--silent', 'Minimize the amount of logs')
                .option('--no-scripts', 'Disable scripts')
                .option('--prerelease <script>', 'Script to execute before releasing')
                .option('--postrelease <script>', 'Script to execute after releasing')
                .action(function () { return _1.default({ release: true }); });
            command = app['_defaultCommand'];
            helpLines = [
                "bump " + specialist_1.color.yellow('minor'),
                "bump " + specialist_1.color.yellow('1.0.1'),
                "bump " + specialist_1.color.green('--config') + " " + specialist_1.color.blue('./conf/bump.json') + " " + specialist_1.color.green('--force') + " " + specialist_1.color.green('--silent'),
                "bump " + specialist_1.color.magenta('tag') + " " + specialist_1.color.green('--posttag') + " " + specialist_1.color.blue('"echo Done!"'),
                "bump " + specialist_1.color.magenta('release') + " " + specialist_1.color.green('--prerelease') + " " + specialist_1.color.blue('"npm run build"') + " " + specialist_1.color.green('--postrelease') + " " + specialist_1.color.blue('"npm publish"')
            ];
            command.help(helpLines.join('\n'), { name: 'USAGE - ADVANCED' });
            /* PARSE */
            caporal.parse(process.argv);
            return [2 /*return*/];
        });
    });
}
/* EXPORT */
exports.default = CLI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixpQ0FBbUM7QUFDbkMseUNBQTBDO0FBQzFDLGdEQUE4QztBQUM5QyxzQkFBcUI7QUFFckIsSUFBTSxPQUFPLEdBQUcsT0FBYyxDQUFDO0FBRS9CLFNBQVM7QUFFVCxTQUFlLEdBQUc7Ozs7WUFFaEIsU0FBUztZQUVULG9CQUFPLENBQUUsRUFBRSxJQUFJLHFCQUFBLEVBQUUsT0FBTyx3QkFBQSxFQUFFLENBQUMsQ0FBQztZQUV0QixHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBRyxzQkFBTyxDQUFFLENBQUM7WUFFeEMsY0FBYztZQUVkLEdBQUcsQ0FBQyxNQUFNLENBQUcsNEJBQTRCLEVBQUUsaURBQWlELENBQUU7aUJBQzFGLE1BQU0sQ0FBRyxTQUFTLEVBQUUsOENBQThDLENBQUU7aUJBQ3BFLE1BQU0sQ0FBRyxVQUFVLEVBQUUsNkJBQTZCLENBQUU7aUJBQ3BELE1BQU0sQ0FBRyxjQUFjLEVBQUUsaUJBQWlCLENBQUU7aUJBQzVDLE1BQU0sQ0FBRyxvQkFBb0IsRUFBRSw4Q0FBOEMsQ0FBRTtpQkFDL0UsTUFBTSxDQUFHLHlCQUF5QixFQUFFLGlEQUFpRCxDQUFFO2lCQUN2RixNQUFNLENBQUcsc0JBQXNCLEVBQUUsNENBQTRDLENBQUU7aUJBQy9FLE1BQU0sQ0FBRyxtQkFBbUIsRUFBRSw2Q0FBNkMsQ0FBRTtpQkFDN0UsTUFBTSxDQUFHLHVCQUF1QixFQUFFLG9DQUFvQyxDQUFFO2lCQUN4RSxNQUFNLENBQUcscUJBQXFCLEVBQUUsNkNBQTZDLENBQUU7aUJBQy9FLE1BQU0sQ0FBRywwQkFBMEIsRUFBRSxnREFBZ0QsQ0FBRTtpQkFDdkYsTUFBTSxDQUFHLHVCQUF1QixFQUFFLDJDQUEyQyxDQUFFO2lCQUMvRSxNQUFN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