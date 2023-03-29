declare const Config: {
    force: boolean;
    silent: boolean;
    files: {};
    version: {
        enabled: boolean;
        initial: string;
        increments: string[];
    };
    changelog: {
        ask: boolean;
        enabled: boolean;
        create: boolean;
        open: boolean;
        file: string;
        version: string;
        commit: string;
        separator: string;
    };
    commit: {
        enabled: boolean;
        message: string;
    };
    tag: {
        enabled: boolean;
        name: string;
    };
    release: {
        enabled: boolean;
        github: {
            enabled: boolean;
            open: boolean;
            draft: boolean;
            prerelease: boolean;
            files: never[];
            filesNr: number;
            token: string;
            owner: string;
            repo: string;
        };
    };
    tokens: {
        date: {
            format: string;
        };
        version_date: {
            format: string;
        };
    };
    scripts: {
        enabled: boolean;
        prebump: string;
        postbump: string;
        prechangelog: string;
        postchangelog: string;
        precommit: string;
        postcommit: string;
        pretag: string;
        posttag: string;
        prerelease: string;
        postrelease: string;
    };
};
export default Config;
