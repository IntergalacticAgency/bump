import { FSWatcher } from 'chokidar';
import { UploaderOptions } from '../types';
declare class Uploader<UploadResult, CancelResult> {
    options: UploaderOptions<UploadResult, CancelResult>;
    watcher: FSWatcher;
    uploading: Record<string, Promise<UploadResult>>;
    reuploading: Record<string, Promise<CancelResult>>;
    uploadedNr: number;
    uploadingNr: number;
    wait: Promise<void> | false;
    exit: Function;
    constructor(options: UploaderOptions<UploadResult, CancelResult>);
    _watchHandler(method: Function): (filePath: string) => void;
    watch(): void;
    unwatch(): void;
    upload(filePath: string): Promise<any>;
    isUploading(filePath: string): boolean;
    reupload(filePath: string): Promise<void>;
    isReuploading(filePath: string): boolean;
    keepalive(timeout?: number): void;
    start(): Promise<void>;
    finish(force?: boolean): void;
}
export default Uploader;
