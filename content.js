function runIt() {
    const testCaseContainer = document.createElement('div');
    const ul = document.createElement('ul');

    var cssId = 'tc-css';
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://gitcdn.link/repo/kuczkam/do/master/style.css';
        link.media = 'all';
        head.appendChild(link);
    }

    testCaseContainer.setAttribute('class', 'tc-container');
    ul.setAttribute('class', 'tc-list');
    testCaseContainer.appendChild(ul);
    document.body.appendChild(testCaseContainer);

    const createElement = (e) => {  
        const li = document.createElement('li');
        const tcList = document.querySelector('.tc-list');
        const elem = e.target;
        
        li.innerText = elem.outerHTML;
        tcList.appendChild(li);
    }

    document.addEventListener('click', createElement)
    
}
runIt();