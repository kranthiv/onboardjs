import * as pouchDB from 'pouchdb';
import { Step } from "../models/step.model";
import { Journey } from "../models/journey.model";

export class PouchdbService {

  private isInstantiated: boolean;
  private database: PouchDB.Database<any>;
  private data: any;
  private journey:Journey;
  constructor() {
    if (!this.isInstantiated) {
      this.database = new pouchDB("onboard");
      console.log("database created",this.database);
      this.isInstantiated = true;
    }
  }

  fetch() {
    return this.database.allDocs({ include_docs: true });
  }

  get(id: string): Promise<any> {
    return this.database.get(id);
  }

  put(document: Step): Promise<PouchDB.Core.Response> {
    return this.get(document.journeyId).then(result => {
      console.log(result);
      this.journey = new Journey();
      this.journey._rev = result._rev;
      this.journey._id = result._id;
      this.journey.id = result._id;
      this.journey.steps.push(...result.steps, document);
      return this.database.put(this.journey);
    }, error => {
      if (error.status === 404) {
        this.journey = new Journey();
        this.journey.steps.push(document);
        this.journey.id = document.journeyId;
        this.journey._id = document.journeyId;
        return this.database.put(this.journey);
      } else {
        return new Promise((resolve, reject) => reject(error));
      }
    });
  }

}
