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
            <li><a href="https://github.com/textadventures/quest">textadventures/quest</a></li>
            <li><a href="http://docs.textadventures.co.uk/quest/">Quest Documentation</a></li>
            <li><a href="http://docs.textadventures.co.uk/quest/tutorial/">Quest Tutorial</a></li>
            <li><a href="https://github.com/ThePix/quest/wiki">Pixie's Wiki</a></li>
            <li><a href="https://archive.textadventures.co.uk/forum">textadventures Forum Archive (2003-2024)</a></li>
            <li><a href="https://www.axeuk.com/ubb/">Axe Forum Archive (2000-2003)</a></li>
            <li><a href="https://discord.com/channels/1278365322054996018/1314620834467545200">#quest channel on Discord</a></li>
            </ul>`;
        contentDiv.style.display = 'block';
    };
    //const button = document.querySelector('.button');
    //button.addEventListener('click', (event) => {
        //handleClick(event);
    //});
    
    loadPage();
};

(() => {
    setTimeout(() => {
      init();
    }, 3000);
}
)();