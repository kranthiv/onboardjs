import { JourneyService } from './journey.service';
export class MessagingService {
    port: any;
    journeySVC: JourneyService;
    constructor() {
        this.journeySVC = new JourneyService();
    }

    initilize(): Promise<any> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                this.port = chrome.runtime.connect({ name: "onboard-background" });
                resolve(this.port);
            } catch (ex) {
                reject(ex);
            }
        });
    }

    receiveMessage(): void {
        chrome.runtime.onConnect.addListener((port) => {
            console.log("connected to port on receive end", port);
            if (port.name === 'onboard') {
                port.onMessage.addListener((msg: any) => {
                    if (msg.type === "NEW_JOURNEY") {
                        this.journeySVC.saveStep(msg.data)
                            .then((response) => {
                                console.log('saved to db successfully', response)
                                port.postMessage(response);
                            })
                            .catch(error => console.error(error));
                    }
                    else if (msg.type === 'GET_JOURNEY') {
                        let journey = this.journeySVC.getJourney(msg.data as string);
                        journey.then((response) => {
                            port.postMessage({type:"DOWNLOAD_JOURNEY", data: response});
                        }).catch(error => console.log(error));
                    }
                });
            }
        });
    }
    sendMessage<T>(name: string, data: T): Promise<boolean> {
        return this.initilize().then(() => {
            return new Promise<boolean>((resolve, reject) => {
                try {
                    console.log("sending message from background", data);
                    this.port.postMessage({ type: name, data: data });
                    resolve(true);
                } catch (ex) {
                    reject(false);
                }
            });
        });
    }
}