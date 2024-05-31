document.addEventListener('DOMContentLoaded', async function() {
    const serverInfoContainer = document.getElementById('server-info');

    try {
        const response = await fetch('https://cod4mw-serverinfo-api.glitch.me/157.175.22.227:29101');
        const data = await response.json();
        
        const serverInfo = generateServerInfo(data.data);
        renderServerInfo(serverInfoContainer, serverInfo);
    } catch (error) {
        console.error('Error fetching server info:', error);
        renderError(serverInfoContainer);
    }
});

function generateServerInfo(data) {
    const playersHtml = generatePlayersHtml(data.players);

    return `
        <div>
            <div><span>Name:</span> ${data.name}</div>
            <div><span>Map:</span> ${data.map}</div>
            <div><span>Players:</span> ${data.players.length} / ${data.maxplayers}</div>
            ${playersHtml}
        </div>
    `;
}

function generatePlayersHtml(players) {
    if (!players || players.length === 0) {
        return '<div><span>Players:</span> No players online</div>';
    }

    let playersHtml = '<div><span>Player List:</span><ul>';
    players.forEach(player => {
        playersHtml += `<li>Name: ${player.name}   |   Ping: ${player.ping}</li>`;
    });
    playersHtml += '</ul></div>';

    return playersHtml;
}

function renderServerInfo(container, serverInfo) {
    container.innerHTML = serverInfo;
}

function renderError(container) {
    container.innerHTML = `<div>Error fetching server info</div>`;
}
