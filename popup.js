document.getElementById('btn-start').addEventListener('click', () => {
    localStorage.setItem("test_case", "");
    chrome.tabs.executeScript(null, {file: "content.js"});
});

document.getElementById('btn-stop').addEventListener('click', () => {
    localStorage.removeItem("test_case");
});