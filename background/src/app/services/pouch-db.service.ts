import { Injectable } from '@angular/core';
import { IDatabase } from '../interfaces/idatabase';
import * as PouchDB from 'pouchdb';
import { IBase } from "../interfaces/ibase";
import { Journey } from "../models/journey";
@Injectable()
export class PouchDbService<T extends Journey> implements IDatabase<T> {

  private db: PouchDB.Database<any>;
  private isInstantiated: boolean;
  private journey: Journey;
  constructor() {
    if (!this.isInstantiated) {
      this.db = new PouchDB<T>("onboard");
      this.isInstantiated = true;
    }
  }

  Fetch(): Promise<PouchDB.Core.AllDocsResponse<T>> {
    return this.db.allDocs({ include_docs: true });
  }

  Insert<U extends PouchDB.Core.Response>(data: T, id?: string): U | Promise<U> {
    return this.Get(id).then(result => {
      console.log(result);
      this.journey = new Journey(data.id, data.steps);
      this.journey._rev = result._rev;
      this.journey._id = result._id;
      this.journey.steps.push(...result.steps, document);
      return this.db.put(this.journey);
    }, error => {
      if (error.status === 404) {
        this.journey = new Journey(data.id, data.steps);
        this.journey.steps.push(document);
        return this.db.put(this.journey);
      } else {
        return new Promise((resolve, reject) => reject(error));
      }
    });
  }

  Update(data: T): Promise<PouchDB.Core.Response> {
    return this.Get(data.id).then(result => {
      this.journey = new Journey(data.id, data.steps);
      this.journey._rev = result._rev;
      this.journey._id = result._id;
      this.journey.steps.push(...result.steps, document);
      return this.db.put(this.journey);
    }, error => {
      return new Promise((resolve, reject) => reject(error));
    });
  }

  Delete(id: string): Promise<PouchDB.Core.Response> {
    let doc = this.Get(id);
    return doc.then(result => {
      return this.db.remove(result.id, result._rev);
    }, error => {
      return new Promise((resolve, reject) => reject(error));
    });
  }
  Get(id: string): Promise<T> {
    return this.db.get(id);
  }

}
