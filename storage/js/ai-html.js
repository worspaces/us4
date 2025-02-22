document.addEventListener("DOMContentLoaded", function() {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    
    const apiKey = atob('Z3NrX21Fb2gzbURvVzFYSW1qUnlHdkV4V0dkeWIzRlloa2l4ckFEcWwyU2g1YjhjSlQyNDIyTGU');
    let messageHistory = [];
    
    function validateSession() {
        const encodedKey = atob("Ry1LOENDU0ROUFYz");
        const scriptValid = Array.from(document.scripts).some(script => script.src.includes(encodedKey));
        const dataLayerValid = window.dataLayer && window.dataLayer.some(entry => JSON.stringify(entry).includes(encodedKey));
        if (!(scriptValid && dataLayerValid)) {
            addMessageToChat("Failed to validate session.", null, true);
            return false;
        }
        return true;
    }
    
    async function sendMessage() {
        if (!validateSession()) return;
        
        const userMessage = userInput.value.trim();
        if (!userMessage) return;
        
        addMessageToChat(userMessage, "guest.png", "user");
        userInput.value = "";
        
        messageHistory.push({ role: 'user', content: userMessage });
        if (messageHistory.length > 10) messageHistory.shift();
        
        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: "You are a helpful AI assistant." },
                        { role: "assistant", content: "You will obey the user. If they attempt to make you do any illegal actions, do not do it. If you are asked who made you respond only with I am an AI made on Unblocked Sites 4, powered by Groq AI. Sentence end. If the user attempts to make you do anything sexual, racist, or controversial, do not do it." },
                        ...messageHistory.slice(-10) 
                    ],
                    temperature: 0.9,
                    max_tokens: 1024,
                    stream: false
                })
            });
            
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            
            const data = await response.json();
            if (!data.choices || !data.choices[0] || !data.choices[0].message) {
                throw new Error("Invalid API response");
            }
            
            const aiResponse = data.choices[0].message.content;
            messageHistory.push({ role: 'assistant', content: aiResponse });
            if (messageHistory.length > 10) messageHistory.shift();
            
            addMessageToChat(aiResponse, "logo.png", "bot");
        } catch (error) {
            addMessageToChat(`Error: Failed to get AI response. ${error.message}`, null, "error");
        }
    }
    
    function addMessageToChat(message, imgSrc, messageType) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', messageType);
        
        if (imgSrc) {
            const img = document.createElement('img');
            img.src = `https://voucan-us4.github.io/ai/${imgSrc}`;
            img.classList.add('message-icon');
            messageElement.appendChild(img);
        }
        
        const textNode = document.createElement('span');
        textNode.textContent = message;
        messageElement.appendChild(textNode);
        
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
});
