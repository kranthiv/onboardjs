import {PouchdbService} from './pouchdb.service';
export class MessagingService {
    port: any;
    db:PouchdbService;
    constructor() {
        this.db = new PouchdbService(); 
        this.port = "onboard";
    }

    initilize(): Promise<any> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                this.port = chrome.runtime.connect({ name: "onboard" });
                resolve(this.port);
            } catch (ex) {
                reject(ex);
            }
        });
    }

    receiveMessage(): void {
        chrome.runtime.onConnect.addListener((port) => {
            console.log("connected to port on receive end", port);
            port.onMessage.addListener((msg:any) => {
                console.log('message received',msg);
                this.db.put(msg.data).then(response=>{
                    port.postMessage(response);
                });
                console.log("receive received in background page", msg);
            });
        });
    }
    sendMessage<T>(name: string, data: T): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                console.log("sending message from background",data);
                this.port.postMessage({ type: name, data: data });
                resolve(true);
            } catch (ex) {
                reject(false);
            }
        });
    }
}