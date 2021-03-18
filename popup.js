document.getElementById('btn-start').addEventListener('click', () => {
    chrome.tabs.executeScript(null, {file: "content.js"});
})