"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var minimist = require("minimist");
var os = require("os");
var path = require("path");
var utils_1 = require("./utils");
/* CONFIG */
var Config = {
    force: false,
    silent: false,
    files: {},
    version: {
        enabled: true,
        initial: '0.0.0',
        increments: ['major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease', 'custom'] // List of available increments to pick from
    },
    changelog: {
        ask: true,
        enabled: true,
        create: false,
        open: true,
        file: 'CHANGELOG.md',
        version: '### Version [version]',
        commit: '- [message]',
        separator: '\n' // Template for the separator between versions sections
    },
    commit: {
        enabled: true,
        message: 'Bumped version to [version]' // Template for the commit message
    },
    tag: {
        enabled: true,
        name: 'v[version]' // Template for the name of the tag
    },
    release: {
        enabled: false,
        github: {
            enabled: false,
            open: true,
            draft: true,
            prerelease: false,
            files: [],
            filesNr: -1,
            token: '',
            owner: '',
            repo: '' // GitHub repository name
        }
    },
    tokens: {
        date: {
            format: 'YYYY-MM-DD' // Moment.js format to use when generating the `[date]` token
        },
        version_date: {
            format: 'YYYY-MM-DD' // Moment.js format to use when generating the `[version_date]` token
        }
    },
    scripts: {
        enabled: true,
        prebump: '',
        postbump: '',
        prechangelog: '',
        postchangelog: '',
        precommit: '',
        postcommit: '',
        pretag: '',
        posttag: '',
        prerelease: '',
        postrelease: '' // Script to execute after releasing
    }
};
/* LOCAL */
function initLocal() {
    var localPath = path.join(os.homedir(), '.bump.json'), localConfig = _.attempt(require, localPath);
    if (_.isError(localConfig))
        return;
    utils_1.default.config.merge(Config, localConfig);
}
initLocal();
/* CWD */
function initCwd() {
    var cwdPath = path.join(process.cwd(), 'bump.json'), cwdConfig = _.attempt(require, cwdPath);
    if (_.isError(cwdConfig))
        return;
    utils_1.default.config.merge(Config, cwdConfig);
}
initCwd();
/* DYNAMIC */
function initDynamic() {
    var argv = minimist(process.argv.slice(2));
    /* CONFIG */
    var dynamicPath = [argv.config, argv.c].find(_.isString), dynamicConfigRequire = _.attempt(require, path.resolve(process.cwd(), dynamicPath || '')), dynamicConfigJSON = _.attempt(JSON.parse, dynamicPath), dynamicConfig = !_.isError(dynamicConfigRequire) ? dynamicConfigRequire : (!_.isError(dynamicConfigJSON) ? dynamicConfigJSON : undefined);
    if (dynamicConfig)
        utils_1.default.config.merge(Config, dynamicConfig);
    /* COMMIT & TAG */
    if (!Config.commit.enabled)
        Config.tag.enabled = false;
    /* SWITCHES */
    var switches = ['silent', 'force'];
    switches.forEach(function (name) {
        Config[name] = [argv[name], Config[name]].find(_.isBoolean);
    });
    /* SCRIPTS */
    Config.scripts.enabled = [argv.scripts, Config.scripts.enabled].find(_.isBoolean);
    var scripts = Object.keys(Config.scripts);
    scripts.forEach(function (name) {
        if (!_.isString(Config.scripts[name]))
            return;
        Config.scripts[name] = [argv[name], Config.scripts[name]].find(_.isString);
    });
}
initDynamic();
/* INIT ENVIRONMENT */
function initEnvironment() {
    if (process.env.GITHUB_TOKEN)
        Config.release.github.token = process.env.GITHUB_TOKEN;
}
initEnvironment();
/* EXPORT */
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7QUFFWiwwQkFBNEI7QUFDNUIsbUNBQXFDO0FBQ3JDLHVCQUF5QjtBQUN6QiwyQkFBNkI7QUFDN0IsaUNBQTRCO0FBRTVCLFlBQVk7QUFFWixJQUFNLE1BQU0sR0FBRztJQUNiLEtBQUssRUFBRSxLQUFLO0lBQ1osTUFBTSxFQUFFLEtBQUs7SUFDYixLQUFLLEVBQUUsRUFBRTtJQUNULE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxJQUFJO1FBQ2IsT0FBTyxFQUFFLE9BQU87UUFDaEIsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLDRDQUE0QztLQUNqSjtJQUNELFNBQVMsRUFBRTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLGNBQWM7UUFDcEIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxNQUFNLEVBQUUsYUFBYTtRQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLHVEQUF1RDtLQUN4RTtJQUNELE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxJQUFJO1FBQ2IsT0FBTyxFQUFFLDZCQUE2QixDQUFDLGtDQUFrQztLQUMxRTtJQUNELEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFLFlBQVksQ0FBQyxtQ0FBbUM7S0FDdkQ7SUFDRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsS0FBSztRQUNkLE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFB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