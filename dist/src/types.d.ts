declare type Bump = {
    commits: Commit[];
    version: string;
};
declare type Commit = {
    author_email: string;
    author_name: string;
    date: string;
    hash: string;
    message: string;
    isBump?: boolean;
};
declare type Options = {
    version?: boolean;
    changelog?: boolean;
    commit?: boolean;
    tag?: boolean;
    release?: boolean;
};
declare type UploaderOptions<UploadResult, CancelResult> = {
    globs: string[];
    filesNr: number;
    upload: (filePath: string) => Promise<UploadResult>;
    cancel: (filePath: string, asset: UploadResult) => Promise<CancelResult>;
};
export { Bump, Commit, Options, UploaderOptions };
