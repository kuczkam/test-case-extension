chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    if (changeInfo.status == 'complete') {
        if ("test_case" in localStorage) {
            chrome.tabs.executeScript(tabId, {file: "content.js"});
        }
    }
});

