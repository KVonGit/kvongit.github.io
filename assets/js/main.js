const init = () => {
    const loadingDiv = document.querySelector('#loading-div');
    loadingDiv.style.display = 'none';
    const contentDiv = document.querySelector('#content-div');
    contentDiv.innerHTML = `
        <h1>KVonGit</h1>
        <h2>About Me</h2>
        <p>Hi, I'm KV! I'm usually messing around with Quest code.</p><hr/>
        <h2>Links</h2>
        <table>
          <tbody>
            <tr>
                <td><button onclick="window.open('https://github.com/KVonGit/quest5-stuff');">Quest 5 Stuff</button></td>
            </tr>
            <tr>
                <td><button onclick="window.open('https://github.com/textadventures/quest');">textadventures/quest</button> <button onclick="window.open('https://github.com/textadventures/quest/discussions');">/Discussions</button> <button onclick="window.open('https://github.com/textadventures/quest/issues/');">/Issues</button></td>
            </tr>
            <tr>
                <td><button onclick="window.open('http://docs.textadventures.co.uk/quest/');">Quest Documentation</button></td>
            </tr>
            <tr>
                <td><button onclick="window.open('http://docs.textadventures.co.uk/quest/tutorial/');">Quest Tutorial</button></td>
            </tr>
            <tr>
                <td><button onclick="window.open('https://github.com/ThePix/quest/wiki');">Pixie's Wiki</button></td>
            </tr>
            <tr>
                <td><button onclick="window.open('https://archive.textadventures.co.uk/forum');">textadventures Forum Archive (2003-2024)</button></td>
            </tr>
            <tr>
                <td><button onclick="window.open('https://www.axeuk.com/ubb/');">Axe Forum Archive (2000-2003)</button></td>
            </tr>
            <tr>
                <td><button onclick="window.open('https://discord.com/channels/1278365322054996018/1314620834467545200');">#quest channel on Discord</button> <= <button onclick="window.open('https://discord.gg/vME4fcdrEp');">Non-expiring invite</button></td>
            </tr>
        </tbody>
    </table>`;
    contentDiv.style.display = 'block';

    //const button = document.querySelector('.button');
    //button.addEventListener('click', (event) => {
        //handleClick(event);
    //});
};

(() => {
    setTimeout(() => {
      init();
    }, 3000);
}
)();