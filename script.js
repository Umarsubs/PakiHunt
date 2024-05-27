document.addEventListener('DOMContentLoaded', function() {
    const serverInfoContainer = document.getElementById('server-info');

    const fetchServerInfo = async () => {
        try {
            const response = await fetch('https://cod4mw-serverinfo-api.glitch.me/157.175.22.227:29101');
            const data = await response.json();

            let playersHtml = '';
            if (data.data.players && data.data.players.length > 0) {
                playersHtml = '<div><span>Players:</span><ul>';
                data.data.players.forEach(player => {
                    playersHtml += `<li>Name: ${player.name}, Frags: ${player.frags}, Ping: ${player.ping}</li>`;
                });
                playersHtml += '</ul></div>';
            } else {
                playersHtml = '<div><span>Players:</span> No players online</div>';
            }

            const serverInfoHtml = `
                <div class="server-details">
                    <div><span>Name:</span> ${data.data.name}</div>
                    <div><span>Map:</span> ${data.data.map}</div>
                    <div><span>Players:</span> ${data.data.players.length} / ${data.data.maxplayers}</div>
                    ${playersHtml}
                </div>
            `;

            serverInfoContainer.innerHTML = serverInfoHtml;
        } catch (error) {
            console.error('Error fetching server info:', error);
            serverInfoContainer.innerHTML = `<div>Error fetching server info</div>`;
        }
    };

    fetchServerInfo();
});
