console.log('Test');

const init = () => {
    const loadPage = () => {
        const loadingDiv = document.querySelector('#loading-div');
        loadingDiv.style.display = 'none';
        const contentDiv = document.querySelector('#content-div');
        contentDiv.innerHTML = `
            <h1>KVonGit</h1>
            <h2>About Me</h2>
            <p>Hi, I'm KV! I'm usually messing around with Quest code.</p>
            <br/>
            <h2>Links</h2>
            <ul>
            <li><a href="https://github.com/KVonGit/quest5-stuff">Quest 5 Stuff</a></li>
            <li><a href="https://github.com/textadventures/quest">textadventures/quest</a></li>`;
        contentDiv.style.display = 'block';
    };
    //const button = document.querySelector('.button');
    //button.addEventListener('click', (event) => {
        //handleClick(event);
    //});
    
    loadPage();
}
(() => {
    setTimeout(() => {
      init();
    }, 3000);
}
)();