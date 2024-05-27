document.addEventListener('DOMContentLoaded', function() {
    const serverInfoContainer = document.getElementById('server-info');

    const fetchServerInfo = async () => {
        try {
            const response = await fetch('https://cod4mw-serverinfo-api.glitch.me/157.175.22.227:29101'); // Assuming your JSON file is named server_info.json
            const data = await response.json();

            const serverInfoHtml = `
                <div class="server-details">
                    <div><span>Host:</span> ${data.host}</div>
                    <div><span>Port:</span> ${data.port}</div>
                    <div><span>Name:</span> ${data.data.name}</div>
                    <div><span>Map:</span> ${data.data.map}</div>
                    <div><span>Password Protected:</span> ${data.data.password}</div>
                    <div><span>Max Players:</span> ${data.data.maxplayers}</div>
                    <div><span>Owners:</span> ${data.data.raw.Owners}</div>
                    <div><span>Email:</span> <a href="${data.data.raw.Email}">${data.data.raw.Email}</a></div>
                    <div><span>Location:</span> ${data.data.raw.Location}</div>
                    <div><span>Discord:</span> ${data.data.raw.Discord}</div>
                </div>
                <div class="raw-details">
                    <h2>Raw Details:</h2>
                    <pre>${JSON.stringify(data.data.raw, null, 2)}</pre>
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
