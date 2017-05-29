import { UniqueIdService } from './uniqueId.service';
import { PouchdbService } from './pouchdb.service';
import { Journey } from "../models/journey.model";
export class JourneyService {
    private uniqueIdSVC: UniqueIdService;
    private dbSVC: PouchdbService;
    constructor() {
        this.uniqueIdSVC = new UniqueIdService();
        this.dbSVC = new PouchdbService();
    }
    saveStep(step: any): Promise<any> {
        return new Promise<boolean>((resolve, reject) => {
            let uid = this.uniqueIdSVC.generateUniqueId();
            uid.then((response) => {
                step.id = response;
                return this.dbSVC.put(step);
            }).catch(error=>console.log(error));
        });
    }
    getJourney(journeyId:string):Promise<Journey>{
        return new Promise<Journey>((resolve,reject)=>{
            let j =  this.dbSVC.get(journeyId);
            j.then((response)=>{
                resolve(response as Journey);
            }).catch(error=>reject(error));
        });
    }
}