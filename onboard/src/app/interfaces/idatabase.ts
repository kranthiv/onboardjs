
import { IBase } from "../interfaces/ibase";
import { Journey } from "../models/journey";

export interface IDatabase<T extends Journey> {
    Insert<U extends PouchDB.Core.Response>(data:T,id?:string):U|Promise<U>;
    Update(data:T):Promise<PouchDB.Core.Response>;
    Delete(id:string):Promise<PouchDB.Core.Response>;
    Get(id:string):Promise<T>;
    Fetch():Promise<PouchDB.Core.AllDocsResponse<T>>
}
