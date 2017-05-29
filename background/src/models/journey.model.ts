import { Step } from './step.model';
export class Journey implements PouchDB.Core.IdMeta, PouchDB.Core.RevisionIdMeta {
    _rev: string;
     id: string;
    _id: string;
    steps: Array<Step>;
    constructor() {
        this.steps = new Array<Step>();
    }
}
