import { IBase } from "../interfaces/ibase";
import { Step } from "./step";

export class Journey implements IBase {
    _id: string;
    _rev: string;
    readonly id: string;
    steps: Array<Step>;
    constructor(id:string,steps:Array<Step>) {
        this._id = id;
        this.id = id;
        this.steps = steps;
    }
}
