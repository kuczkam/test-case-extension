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
        const li = document.createElement('li');
        const tcList = document.querySelector('.tc-list');
        const btnPass = document.createElement('BUTTON');
        const btnFail = document.createElement('BUTTON');
        const elem = e.target;
        
        btnPass.setAttribute("id", "tc-pass");
        btnFail.setAttribute("id", "tc-fail");
        li.innerText = "- click on " + elem.outerHTML;
        btnPass.innerText = "pass";
        btnFail.innerText = "fail";
        li.appendChild(btnPass);
        li.appendChild(btnFail);
        tcList.appendChild(li);
    }

    document.addEventListener('click', createElement);

    
}
runIt();
