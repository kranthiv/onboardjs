export class ChromeService {
    initilizeApp() {
        chrome.browserAction.onClicked.addListener(() => {
            chrome.tabs.create({ 'url': chrome.runtime.getURL('onboard/dist/index.html') }, function (tab) {
                console.log("tab opened", tab);
            });
        });
    }
}