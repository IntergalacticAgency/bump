/// <reference types="lodash" />
import exit from './exit';
import log from './log';
import Uploader from './uploader';
declare const Utils: {
    config: {
        merge(object: any, ...sources: any[]): any;
    };
    exit: typeof exit;
    file: {
        exists(filePath: string): Promise<boolean>;
        make(filePath: string, content: string): Promise<void>;
        read(filePath: string): Promise<any>;
        write(filePath: string, content: string): Promise<void>;
    };
    git: {
        getPath(): Promise<string | null>;
    };
    log: typeof log;
    repository: {
        getPath(): Promise<string | null>;
        getVersion(repoPath: string | null): Promise<string>;
        getVersionProviders(repoPath: string): Promise<import("../providers/version/files").default[]>;
        getVersionProvidersResult(repoPath: string, method: string, ...args: any[]): Promise<any>;
    };
    script: {
        run(name: string): Promise<void>;
    };
    template: {
        getRegex: ((token: string) => RegExp) & import("lodash").MemoizedFunction;
        render(template: string, tokens?: {}): string;
    };
    Uploader: typeof Uploader;
};
export default Utils;
