import { Step } from './step';
export class Journey implements PouchDB.Core.IdMeta, PouchDB.Core.RevisionIdMeta {
    _rev: string;
    readonly id: string;
    _id: string;
    steps: Array<Step>;
    constructor() {
        this.id = this.parseURI(window.location.href);
        this._id = this.id;
        this.steps = new Array<Step>();
    }
    parseURI(url: string): string {
        let _url = new URL(url);
        let unique = "";
        if (_url === undefined) {
            console.error("url is on wrong format", url);
            return "ERROR";
        }
        if (_url.hostname) {
            unique = _url.hostname.replace(/\./g, "_").replace(/\//g, "_")
        }
        if (_url.pathname) {
            let pathName = _url.pathname.replace(/\./g, "_").replace(/\//g, "_");
            unique = unique + "_" + pathName;
        }
        return unique;
    }
}
