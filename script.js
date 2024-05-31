document.addEventListener('DOMContentLoaded', function() {
    const serverInfoContainer = document.getElementById('server-info');

    // Function to fetch server info
    const fetchServerInfo = async () => {
        try {
            const response = await fetch('https://cod4mw-serverinfo-api.glitch.me/157.175.22.227:29101');
            const data = await response.json();

            if (response.ok) {
                let serverInfoHtml = '';

                // Populate server details
                serverInfoHtml += `<div class="server-details">`;
                serverInfoHtml += `<img src="logo.webp">`;
                serverInfoHtml += `<div><span>Map:</span><h4> ${data.data.map}</h4></div>`;
                serverInfoHtml += `<div><span>Players:</span><h4> ${data.data.players.length} / ${data.data.maxplayers}</h4></div>`;

                // Check if there are players
                if (data.data.players && data.data.players.length > 0) {
                    serverInfoHtml += `<div class="player-list">`;
                    serverInfoHtml += `<table>`;
                    serverInfoHtml += `<tr class="table-header">`;
                    serverInfoHtml += `<th class="centered">Player Name</th><th class="centered">Ping</th>`;
                    serverInfoHtml += `</tr>`;
                    data.data.players.forEach(player => {
                        serverInfoHtml += `<tr class="table-row">`;
                        serverInfoHtml += `<td class="centered">${player.name}</td><td class="centered">${player.ping}</td>`;
                        serverInfoHtml += `</tr>`;
                    });
                    serverInfoHtml += `</table>`;
                    serverInfoHtml += `</div>`;
                } else {
                    serverInfoHtml += `<div><span>Players:</span> No players online</div>`;
                }

                serverInfoHtml += `</div>`;

                // Update HTML content
                serverInfoContainer.innerHTML = serverInfoHtml;
            } else {
                throw new Error(`Server returned an error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error fetching server info:', error);
            serverInfoContainer.innerHTML = `<div class="error-message">Error fetching server info: ${error.message}</div>`;
        }
    };

    // Fetch server info or display an error message if the fetch fails
    fetchServerInfo().catch(error => {
        console.error('Error fetching server info:', error);
        serverInfoContainer.innerHTML = `<div class="error-message">Failed to fetch server information. Please try again later.</div>`;
    });
});
