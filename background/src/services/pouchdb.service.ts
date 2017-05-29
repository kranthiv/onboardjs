import * as pouchDB from 'pouchdb';

export class PouchdbService {

  private isInstantiated: boolean;
  private database: PouchDB.Database<any>;
  private data: any;
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

  put(document: any): Promise<PouchDB.Core.Response> {
    return this.get(document.id).then(result => {
      document._rev = result._rev;
      document._id = result._id;
      return this.database.put(document);
    }, error => {
      if (error.status === 404) {
        return this.database.post(document);
      } else {
        return new Promise((resolve, reject) => reject(error));
      }
    });
  }

}
