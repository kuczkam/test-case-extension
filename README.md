# Test case by click
> This is chrome extension to create test cases by click.

## General info
Each click on a page item creates a test step. Each clicked element can be converted into a result (pass, fail). Clicking on the "text" field will retrieve its value.

## Setup
Clone this repo to your desktop and change URL in `manifest.json` section `permissions`.
After go to the **chrome://extensions** and enable developer mode.
Click **Load unpacked** and upload cloned repo(folder).

## Generated test case
```
- go to http://localhost
- type (test) in the <input name="filter_search" id="filter_search" type="text">
- click on <span class="icon icon-close icon-close-a size_xs"></span>
- result(pass) visible element: <span class="ic ic-close ic-close-a size_xs"></span>
```
