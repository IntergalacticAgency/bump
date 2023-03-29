import { Options } from './types';
declare function bump({ version, changelog, commit, tag, release }?: Options): Promise<void>;
export default bump;
