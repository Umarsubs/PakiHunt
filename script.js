document.addEventListener('DOMContentLoaded', function() {
    const serverInfoContainer = document.getElementById('server-info');

    const fetchServerInfo = async () => {
        try {
            const response = await fetch('https://cod4mw-serverinfo-api.glitch.me/157.175.22.227:29101'); // Assuming your JSON file is named server_info.json
            const data = await response.json();

            const serverInfoHtml = `
                <div class="server-details">
                    <div><span>Host:</span> ${data.host}</div>
                    <div><span>Name:</span> ${data.data.name}</div>
                    <div><span>Map:</span> ${data.data.map}</div>
                    <div><span>Players:</span>  ${data.data.players} / ${data.data.maxplayers}</div>
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
