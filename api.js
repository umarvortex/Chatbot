async function getAIResponse(userText) {
    const response = await fetch('https://vortex.uma/rvortex.workers.dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userText })
    });

    const data = await response.json();
    return data.reply;
}