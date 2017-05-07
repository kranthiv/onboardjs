import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare let chrome: any;
@Injectable()
export class ChromeService {

  constructor(private _router: Router) { }

  registerBrowserClick() {
    const _self = this;
    chrome.browserAction.onClicked.addListener(() => {
      chrome.tabs.create({ 'url': chrome.runtime.getURL('background/dist/index.html') }, function (tab) {
        console.log("tab opened",tab);
      })

    });
  }

}
