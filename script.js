// Chatbot Functions
        const chatbotIcon = document.getElementById("chatbotIcon");
        const chatbotContainer = document.getElementById("chatbotContainer");
        const chatbotBody = document.getElementById("chatbotBody");
        const userInput = document.getElementById("userInput");
        const sendButton = document.getElementById("sendButton");
        const refreshChatbot = document.getElementById("refreshChatbot");
        const welcomeMessage = document.getElementById("welcomeMessage");
        const typingIndicator = document.getElementById("typingIndicator");
        const quickReplies = document.getElementById("quickReplies");

        let messageQueue = [];
        let isProcessingMessage = false;

        // Show/Hide Chatbot
        chatbotIcon.addEventListener("click", () => {
            if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
                chatbotContainer.style.display = "flex";
                chatbotContainer.classList.add("full-screen");
            } else {
                chatbotContainer.style.display = "none";
                chatbotContainer.classList.remove("full-screen");
            }
        });

        // Full Screen Toggle
        document.getElementById("fullScreenButton").addEventListener("click", () => {
            chatbotContainer.classList.toggle("full-screen");
        });

        // Send message function
        function sendMessage() {
            const userText = userInput.value.trim();
            if (userText === "") return;

            // Add message to the queue
            messageQueue.push(userText);

            // Process the message queue if not already processing
            if (!isProcessingMessage) {
                processMessageQueue();
            }

            // Clear Input
            userInput.value = "";
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }

        // Process Message Queue
        function processMessageQueue() {
            if (messageQueue.length === 0) {
                isProcessingMessage = false;
                return;
            }

            isProcessingMessage = true;

            // Get the next message from the queue
            const userText = messageQueue.shift();

            // Hide Welcome Message on first message
            if (welcomeMessage.style.display !== "none") {
                welcomeMessage.style.display = "none";
            }

            // User Message
            const userMessage = document.createElement("div");
            userMessage.classList.add("message", "user-message");
            userMessage.textContent = userText;
            chatbotBody.appendChild(userMessage);

            // Show Typing Indicator
            typingIndicator.style.display = "flex";

            // Bot Response
            setTimeout(() => {
                typingIndicator.style.display = "none"; // Hide typing indicator

const botMessage = document.createElement("div");
                botMessage.classList.add("message", "bot-message");
                botMessage.textContent = getBotResponse(userText);
                chatbotBody.appendChild(botMessage);

                chatbotBody.scrollTop = chatbotBody.scrollHeight;
                saveChat(); // Save chat history

                // Process the next message in the queue
                isProcessingMessage = false;
                processMessageQueue(); // Recursively process next message
            }, 1500); // Simulate typing delay
        }




        // Get bot response
        function getBotResponse(userText) {
    userText = userText.toLowerCase().trim(); // Normalize input

    if (userText.includes("hi") || userText.includes("hello") || userText.includes("hey")) {
        return "Hey there! How’s your day treating you? Hope everything’s going well! How can I assist you today with our top-quality pipe solutions?";
    }

    if (userText.includes("asslamualaikum") || userText.includes("salam alaikum") || userText.includes("assalam alaikum") || userText.includes("salam")) {
        return "Assalamualaikum! Hope you’re having a wonderful day by Allah’s blessings. How can I be of service to you today regarding our top-quality pipe solutions?";
    }

    if (userText.includes("your company name") || userText.includes("who are you")) {
        return "We are Pak Pipes International Karachi, trusted pipe suppliers.";
    }

    if (userText.includes("location") || userText.includes("where are you located")) {
        return "We are based in KDA scheme 33 Grey Noor tower Karachi, Pakistan. Visit us anytime!";
    }

    if (userText.includes("pipes") || userText.includes("products") || userText.includes("services") || userText.includes("what pipes you sell")) {
        return "We provide a variety of pipes including PVC, UPVC, HDPE, and PPRC pipes if you want to know about all our products in details just say VORTEX BHAI DETAILS and I'll share full Products list here for you.";
    }









 

if (userText.includes("contact") || userText.includes("phone number")) {
    return "You can contact us at +92-3192017909 or  WhatsApp you will get both options in our website home section.";
}

if (userText.includes("email") || userText.includes("email address")) {
    return "Our email is umarvortex@gmail.com, but This is not a official bussines email address of Pak Pipes International Karachi.";
}


if (userText.includes("business hours") || userText.includes("timings")) {
    return "We’re open from Saturday to Thursday, 11:00 AM to 6:00 PM, and on Friday, from 3:00 PM to 6:00 PM. Feel free to contact us anytime within these hours.";
}
