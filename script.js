document.getElementById('fetchButton').addEventListener('click', async () => {
    const address = document.getElementById('serverAddress').value;

    if (!address) {
        alert('Please enter a server address.');
        return;
    }

    try {
        const response = await fetch(`https://cod4mw-serverinfo-api.glitch.me/${address}`);
        const data = await response.json();

        const serverDataDiv = document.getElementById('serverData');
        if (data.error) {
            serverDataDiv.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
            serverDataDiv.innerHTML = `
                <h3>Server Info</h3>
                <p><strong>Server:</strong> ${data.name}</p>
                <p><strong>Map:</strong> ${data.map}</p>
                <p><strong>Players:</strong> ${players} / ${maxplayers}</p>
            `;
        }
    } catch (error) {
        document.getElementById('serverData').innerHTML = `<p>Error fetching server data.</p>`;
        console.error('Error:', error);
    }
});
