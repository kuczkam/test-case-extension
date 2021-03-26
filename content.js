testCaseRun = () => {
    const testCaseContainer = document.createElement("div");
    const ul = document.createElement("ul");
    const goTo = `<li>- go to ${window.location.href}</li>`;
    const copyBtn = document.createElement("BUTTON");
    const newTcBtn = document.createElement("BUTTON");
    const body  = document.getElementsByTagName("body")[0];
    const style  = document.createElement("style");
    const iconDiv = document.createElement("div");
    const itemDiv = document.createElement("div");
    const css = ".tc-container{position:fixed;left:-382px;top:10%;width:382px;min-height:300px;background:#ff4954;z-index:100;transition:1s;border-radius:0 0 5px 0; }.tc-container:hover{left:0;transition:1s;}.tc-list{list-style-type:none;padding-left:10px;margin:0;}.tc-list > li{color:#fff;padding:5px;font-size:14px;display:block;}.tc-list > li > p{margin:0;}.tc-icon{position:absolute;width:40px;height:40px;right:-37px;}.tc-btn{border-radius:20px;border:none;background:#3a2996;padding:5px;width:70px;margin:7px 5px 5px 0;color:#fff;}.tc-btn:hover{background:#fff;color:#ff4954;border:none;}.tc-scroll::-webkit-scrollbar{width:0;}.tc-scroll::-webkit-scrollbar-track{background: transparent;}.tc-scroll{overflow:scroll;height:300px;width:370px;padding-top:15px;}#div_id{width:200px;height:200px;}#tc-copy{margin-left:16px;margin-top:16px}button:focus{none;}.tc-hide{display:none}";
    const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.93 47.93"><defs><style>.cls-1{fill:#ff4954;}.cls-2{fill:none;stroke:#3a2996;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.cls-3{fill:#3a2996;}</style></defs><g id="Warstwa_2" data-name="Warstwa 2"><g id="Warstwa_3" data-name="Warstwa 3"><rect class="cls-1" width="47.93" height="47.93" rx="4.88"/></g><g id="pictogram"><polyline class="cls-2" points="32.93 31.98 37.93 32.98 39.93 38.98"/><polyline class="cls-2" points="16.93 31.98 11.93 32.98 9.93 38.98"/><polyline class="cls-2" points="32.93 22.98 37.93 21.98 39.93 15.97"/><polyline class="cls-2" points="16.93 22.98 11.93 21.98 9.93 15.97"/><polyline class="cls-2" points="28.93 11.97 33.93 7.97 34.93 7.97"/><polyline class="cls-2" points="20.93 11.97 15.93 7.97 14.93 7.97"/><path class="cls-3" d="M16.93,17a7.76,7.76,0,0,1,8-7.5,7.76,7.76,0,0,1,8,7.5"/><path class="cls-3" d="M32.93,19h-7V39.91c5.06-.65,9-6.19,9-12.93A17.71,17.71,0,0,0,33,19"/><path class="cls-3" d="M16.93,19h7V39.91c-5.05-.65-9-6.19-9-12.94a17.58,17.58,0,0,1,1.92-8"/></g></g></svg>';

    style.innerText = css;
    body.appendChild(style);

    testCaseContainer.setAttribute("class", "tc-container");
    copyBtn.setAttribute("id", "tc-copy");
    copyBtn.setAttribute("class", "tc-btn");
    newTcBtn.setAttribute("id", "tc-new");
    newTcBtn.setAttribute("class", "tc-hide");
    copyBtn.innerText = "copy tc";
    newTcBtn.innerText = "new tc";
    iconDiv.setAttribute("class", "tc-icon");
    iconDiv.innerHTML = icon;
    testCaseContainer.appendChild(iconDiv);
    testCaseContainer.appendChild(copyBtn);
    testCaseContainer.appendChild(newTcBtn);
    itemDiv.setAttribute("class", "tc-scroll");
    ul.setAttribute("class", "tc-list");
    ul.innerHTML = goTo;
    testCaseContainer.appendChild(itemDiv);
    itemDiv.appendChild(ul);
    document.body.appendChild(testCaseContainer);

    const _tcResult = (e, tcResult) => {
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

    const _saveInLocalStorage = (items) => {
        localStorage.setItem('tc_items', items.innerHTML);
        if ( localStorage.getItem('tc_items') === "" ) {
            localStorage.removeItem('tc_items');
        }
    }

    const _loadFromLocalStorage = () => {
        let saved = localStorage.getItem('tc_items');
        if (saved) {
            ul.innerHTML = saved;
        }
    }
    
    const _copyTestCase = () => {
        const list = document.querySelectorAll('.tc-list > li');
        const listElem = document.querySelector(".tc-scroll");
        const newBtn = document.querySelector("#tc-new");
        const actionsBtn = document.querySelectorAll('.tc-list > li > div > .tc-btn');
        const listArray = [];

        actionsBtn.forEach((elem) => elem.remove());

        for (let i=0; i < list.length; i++){
            listArray.push(list[i].innerText);
        }

        const area = document.createElement("textarea");
        area.setAttribute("id","tc-area_id");

        let cleanStr = listArray.map(e => e.replace("passfail", ""));
        area.innerHTML = cleanStr.join("&#13;&#10;");
        document.body.appendChild(area);
        document.getElementById(area.id).select();
        document.execCommand("copy");
        document.getElementById("tc-area_id").remove();
        localStorage.removeItem("tc_items");
        listElem.classList.add("tc-hide");
        newBtn.classList.remove("tc-hide");
        newBtn.classList.add("tc-btn");
    }

    const _startNewTestCase = () => {
        const listElem = document.querySelector(".tc-scroll");
        const newBtn = document.querySelector("#tc-new");

        listElem.classList.remove("tc-hide");
        newBtn.classList.add("tc-hide");
        ul.innerHTML = goTo;
        _saveInLocalStorage(ul);
    }

    const _createStepElement = (e, value) => {  

        if (e.target.id != "tc-pass" && e.target.id != "tc-fail" && e.target.id != "tc-copy") {          
            const li = document.createElement("li");
            const btnDiv = document.createElement("div");
            const pass = document.createElement("BUTTON");
            const fail = document.createElement("BUTTON");
            const tcList = document.querySelector(".tc-list");
            
            pass.setAttribute("class", "tc-btn");
            pass.setAttribute("id", "tc-pass");
            fail.setAttribute("class", "tc-btn");
            fail.setAttribute("id", "tc-fail");
            pass.innerText = "pass";
            fail.innerText = "fail";
            if (e.target.type == "text") {
                setTimeout(() => {
                    li.innerText = `- type (${e.target.value}) in the ` + value;
                    _saveInLocalStorage(ul);
                }, 3000)
            } else {
                li.innerText = "- click on " + value;
            }
            li.appendChild(btnDiv);
            btnDiv.appendChild(pass);
            btnDiv.appendChild(fail);
            tcList.appendChild(li);
            _saveInLocalStorage(ul);
        }
    }

    _loadFromLocalStorage();

    document.addEventListener("click", (e) => {
        _createStepElement(e, e.target.outerHTML);
        if (e.target.id == "tc-pass") {
            _tcResult(e, "pass");
            _saveInLocalStorage(ul);
        }
        if (e.target.id == "tc-fail") {
            _tcResult(e, "fail");
            _saveInLocalStorage(ul);
        }
        if (e.target.id == "tc-copy") {
            _copyTestCase();
        }
        if (e.target.id == "tc-new") {
            _startNewTestCase();
        }
    });   
}

testCaseRun();
