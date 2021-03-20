function runIt() {
    const testCaseContainer = document.createElement('div');
    const ul = document.createElement('ul');
    const h1 = document.createElement('h1');


    var cssId = 'tc-css';
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://gitcdn.link/repo/kuczkam/test-case-extension/main/popup.css';
        link.media = 'all';
        head.appendChild(link);
    }

    testCaseContainer.setAttribute('class', 'tc-container');
    h1.innerText = "go to " + window.location.href;
    testCaseContainer.appendChild(h1);
    ul.setAttribute('class', 'tc-list');
    testCaseContainer.appendChild(ul);
    document.body.appendChild(testCaseContainer);

    const createElement = (e) => {  

        if (e.target.id != "tc-pass") {
            const li = document.createElement('li');
            const tcList = document.querySelector('.tc-list');
            const pass = document.createElement('BUTTON');
            const elem = e.target;
            
            pass.setAttribute("id", "tc-pass");
            pass.setAttribute('style', "padding-left: 5px; cursor: pointer");
            pass.innerText = "pass";
            li.innerText = "- click on " + elem.outerHTML;
            li.appendChild(pass);
            tcList.appendChild(li);
        }

        if (e.target.id == "tc-pass") {
            console.log('juhuuu');
        }

    }

    document.addEventListener('click', createElement);

    
}
runIt();
