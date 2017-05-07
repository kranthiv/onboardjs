import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  parseURI(url: string): string {
    let _url = new URL(url);
    let unique = "";
    if (_url === undefined) {
      console.error("url is on wrong format", url);
      return "ERROR";
    }
    if (_url.hostname) {
      unique = _url.hostname.replace(/\./g, "_").replace(/\//g, "_")
    }
    if (_url.pathname) {
      let pathName = _url.pathname.replace(/\./g, "_").replace(/\//g, "_");
      unique = unique + "_" + pathName;
    }
    return unique;
  }

}
