import { Injectable,Inject } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class DownloadService {

  constructor(@Inject(DOCUMENT) private document:Document) { }
  downloadJSON<T>(data: T, fileName: string): boolean {

    let _data: string = "";
    if (!data) {
      console.error('Console.save: No data')
      return;
    }

    if (!fileName) fileName = 'journey.json'

    if (typeof data === "object") {
      _data = JSON.stringify(data, undefined, 4)
    }
    let blob = new Blob([data], { type: 'text/json' }),
      e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
    console.log("downlod initilized", _data);
    return true;
  }
}
