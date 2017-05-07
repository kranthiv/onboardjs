import { Injectable } from '@angular/core';
import { Journey } from '../models/journey';
import * as pouchDB from 'pouchdb';

@Injectable()
export class PouchDBService {

  private isInstantiated: boolean;
  private database: PouchDB.Database<any>;
  private journey: Journey;
  constructor() {

    if (!this.isInstantiated) {

      this.database = new pouchDB("onboard");
      console.log(this.database);
      this.isInstantiated = true;
    }
  }

  fetch() {
    return this.database.allDocs({ include_docs: true });
  }

  get(id: string): Promise<any> {
    return this.database.get(id);
  }

  put(id: string, document: any): Promise<PouchDB.Core.Response> {
    return this.get(id).then(result => {
      console.log(result);
      this.journey = new Journey();
      this.journey._rev = result._rev;
      this.journey._id = result._id;
      this.journey.steps.push(...result.steps, document);
      return this.database.put(this.journey);
    }, error => {
      if (error.status === 404) {
        this.journey = new Journey();
        this.journey.steps.push(document);
        return this.database.put(this.journey);
      } else {
        return new Promise((resolve, reject) => reject(error));
      }
    });
  }

}
