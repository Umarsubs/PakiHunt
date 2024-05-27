document.getElementById('fetchButton').addEventListener('click', async () => {
    const address = document.getElementById('serverAddress').value;

    if (!address) {
        alert('Please enter a server address.');
        return;
    }

    try {
        const response = await fetch(`https://your-gitlab-project-id.gitlab.io/server-info?address=${address}`);
        const data = await response.json();

        const serverDataDiv = document.getElementById('serverData');
        if (data.error) {
            serverDataDiv.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
            serverDataDiv.innerHTML = `
                <h3>Server Info</h3>
                <p><strong>Host:</strong> ${data.host}</p>
                <p><strong>Port:</strong> ${data.port}</p>
                <p><strong>Game:</strong> ${data.data.raw.game}</p>
                <p><strong>Map:</strong> ${data.data.map}</p>
                <p><strong>Players:</strong> ${data.data.raw.numplayers} / ${data.data.maxplayers}</p>
                <p><strong>Server Name:</strong> ${data.data.name}</p>
            `;
        }
    } catch (error) {
        document.getElementById('serverData').innerHTML = `<p>Error fetching server data.</p>`;
        console.error('Error:', error);
    }
});
