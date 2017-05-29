import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { DownloadService } from './download.service';

declare let chrome: any;
@Injectable()
export class MessagingService {

  port: any;
  constructor(private _downloadSVC: DownloadService) { }

  initilize(): Promise<any> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        this.port = chrome.runtime.connect({ name: "onboard" });
        this.receiveMessage();
        resolve(this.port);
      } catch (ex) {
        reject(ex);
      }
    });
  }

  receiveMessage() {
    try {
      this.port.onMessage.addListener((msg) => {
        console.log("receied msg for downloading", msg);
        if (msg.type === 'DOWNLOAD_JOURNEY') {
          this._downloadSVC.downloadJSON<any>(msg.data);
        }
      });
    } catch (ex) {
    }
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
