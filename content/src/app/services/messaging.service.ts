import { Injectable } from '@angular/core';

declare let chrome: any;
@Injectable()
export class MessagingService {

  port: any;
  constructor() { }

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

  sendMessage<T>(name: string, data: T): Promise<boolean> {
    return this.initilize().then(() => {
      return new Promise<boolean>((resolve, reject) => {
        try {
          this.port.postMessage({ type: name, data: data });
          resolve(true);
        } catch (ex) {
          reject(false);
        }
      });
    });
  }


}
