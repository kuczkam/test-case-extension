document.getElementById('btn-start').addEventListener('click', () => {
    localStorage.setItem("test_case", "");
    chrome.tabs.executeScript(null, {file: "content.js"});
});

document.getElementById('btn-stop').addEventListener('click', () => {
    localStorage.removeItem("test_case");
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
        chrome.tabs.reload(arrayOfTabs[0].id);
    });
});