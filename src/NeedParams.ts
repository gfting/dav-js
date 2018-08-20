import BasicParams from './BasicParams';
import { ID } from './common-types';

/**
 * @class The abstract Class NeedParams represent common parameters of NeedParams classes.
 */
export default abstract class NeedParams extends BasicParams {
    /**
     * @property The need's topic id (used to send messages and bids to consumer).
     */
    public id: ID;
    constructor(values: Partial<NeedParams>) {
        super(values);
        this.id = values.id;
    }
}
