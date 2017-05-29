import { IBase } from "../interfaces/ibase";
import { Step } from "./step";

export class Journey  {
    rev: string;
     id: string;
    _id: string;
    steps: Array<Step>;
    constructor() {
        this.steps = new Array<Step>();
    }
}
