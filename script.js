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
