chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ 'url': chrome.runtime.getURL('background/dist/index.html') }, function (tab) {
        console.log("tab opened", tab);
    });
});