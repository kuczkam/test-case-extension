function testCaseRun() {
    const testCaseContainer = document.createElement("div");
    const ul = document.createElement("ul");
    const h1 = document.createElement("h1");
    const css = ".tc-container{position:fixed;left:-343px;top:10%;width:382px;min-height:300px;background:#d80348;z-index:100;transition:1s;}.tc-container:hover{left:0;transition:1s;}.tc-list > li{color:#fff;padding:5px;font-size:12px;}";

    const body  = document.getElementsByTagName("body")[0];
    const style  = document.createElement("style");
    style.innerText = css;
    body.appendChild(style);

    testCaseContainer.setAttribute("class", "tc-container");
    h1.innerText = "go to " + window.location.href;
    testCaseContainer.appendChild(h1);
    ul.setAttribute("class", "tc-list");
    testCaseContainer.appendChild(ul);
    document.body.appendChild(testCaseContainer);

    const tcResult = (e, tcResult) => {
        const item = e.target.closest("li");
        const mapObj = {
            click: `result(${tcResult}) visible element:`,
            on: "",
            pass: "",
            fail: ""
        };
        const result = item.innerText.replace(/click|on|pass|fail/gi, (matched) => {
            return mapObj[matched];
        });

        item.innerText = result;
    }

    const createElement = (e, value) => {  

        if (e.target.id != "tc-pass" && e.target.id != "tc-fail") {
            const li = document.createElement("li");
            const tcList = document.querySelector(".tc-list");
            const pass = document.createElement("BUTTON");
            const fail = document.createElement("BUTTON");
            
            pass.setAttribute("id", "tc-pass");
            fail.setAttribute("id", "tc-fail");
            pass.setAttribute("style", "padding-left: 5px; cursor: pointer");
            fail.setAttribute("style", "padding-left: 5px; cursor: pointer");
            pass.innerText = "pass";
            fail.innerText = "fail";
            if (e.target.type == "text") {
                setTimeout(() => {
                    li.innerText = `- type (${e.target.value}) in the ` + value;
                }, 3000)
            } else {
                li.innerText = "- click on " + value;
            }
            li.appendChild(pass);
            li.appendChild(fail);
            tcList.appendChild(li);
        }
    }

    document.addEventListener("click", (e) => {
        createElement(e, e.target.outerHTML);
        if (e.target.id == "tc-pass") {
            tcResult(e, "pass");
        }
        if (e.target.id == "tc-fail") {
            tcResult(e, "fail");
        }
    });   
}
testCaseRun();
