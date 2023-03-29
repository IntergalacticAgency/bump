import { Bump, Commit } from '../../types';
declare abstract class Abstract {
    repoPath: any;
    git: any;
    constructor(repoPath: string);
    abstract isSupported(): Promise<boolean>;
    init(): void;
    bump(increment: string, version?: string | null): Promise<void>;
    getContent(filePath: string): Promise<any>;
    getContentByCommit(commit: Commit, filePath: string): Promise<any>;
    setContent(filePath: string, content: string): Promise<void>;
    getCommitNth(nth: number): Promise<Commit | undefined>;
    getCommitsChunk(nth: number, size: number): Promise<Commit[]>;
    getCommitsBumps(limit?: number): Promise<Bump[] | undefined>;
    getVersion(): Promise<string>;
    abstract getVersionByCommit(commit?: Commit): Promise<string>;
    abstract updateVersion(version: string): any;
}
export default Abstract;
