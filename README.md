# Test case by click
> This is chrome extension to create test cases by click.

## General info
Each click on a page item creates a test step. Each clicked element can be converted into a result (pass, fail). Clicking(or TAB) on the "text" field will retrieve its value.

## Setup
Clone this repo to your desktop and change URL in `manifest.json` section `permissions`.
After go to the **chrome://extensions** and enable developer mode.
Click **Load unpacked** and upload cloned repo(folder).

## How to use it
Click **start** in the test case extension to inject `content.js` into the page. <br/>
Create test case and click **copy** button to copy to clipboard. <br/>
To create new TC click **clear** button. <br/>
To close extension click **stop** button. 

## Generated test case
```
- go to http://127.0.0.1:5500/index.html
- type (test) in the <input type="text" name="test1">
- type (test2) in the <input type="text" name="test2">
- type (test3) in the <input type="text" name="test3">
- click on <p>Test text</p>
- click on <button>Test button</button>
- result(pass) visible element: <div class="flash-messenger__ctent">Success msg</div>
```
