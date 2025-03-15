async function getAIResponse(userText) {
    const response = await fetch('https://your-serverless-function-url.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userText })
    });

    const data = await response.json();
    return data.reply;
}