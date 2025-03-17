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
                botMessage.innerHTML = getBotResponse(userText);
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
        return "Hey there! How’s your day going? Hope everything’s going well! How can I assist you today with our top-quality pipe solutions?";
    }

    if (userText.includes("asslamualaikum") || userText.includes("salam alaikum") || userText.includes("assalam alaikum") || userText.includes("salam")) {
        return "Assalamualaikum! Hope you’re having a wonderful day by Allah’s blessings. How can I be of service to you today regarding our top-quality pipe solutions?";
    }

    if (userText.includes("your company name") || userText.includes("who are you")) {
        return "We are Pak Pipes International Karachi — your trusted and reliable pipe suppliers.";
    }

    if (userText.includes("location") || userText.includes("where are you located")) {
        return "Pak Pipes International is proudly based in KDA Scheme 33, Grey Noor Tower, Karachi, Pakistan. You’re welcome to visit us anytime.";
    }

    if (userText.includes("tell me about pipies") || userText.includes("products") || userText.includes("services") || userText.includes("what pipes you sell")) {
        return "We provide a variety of pipes including PVC, UPVC, HDPE, and PPRC pipes if you want to know about all our products  just say <strong>List</strong> and I'll share full Products list here for you.";
    }



if (userText.includes("list")) {
    return `<strong>Here is the list of all available pipes:</strong><br><br>
<strong>1. Transparent Color Zebra Pipes</strong><br>
<strong>2. Super Green Pipes</strong><br>
<strong>3. Red Poly with White Line Pipes</strong><br>
<strong>4. Poly Back Pipes</strong><br>
<strong>5. Braded Bravo Dagha Pipes</strong><br>
<strong>6. Super Transparent Garden Pipes</strong><br>
<strong>7. Gas Pipes</strong><br>
<strong>8. Garden Pipes</strong><br>
<strong>9. Level Pipes</strong><br>
<strong>10. Fire Hose</strong><br>
<strong>11. Clear Garden Transparent Hose Pipes</strong><br>
<strong>12. Poly Pipes</strong><br>
<strong>13. Zebra Band Pipes</strong><br>
<strong>14. Vinyl Section Pipes (Imported)</strong><br>
<strong>15. Parker Pressure Gas Hose</strong><br>
<strong>16. Commando Pressure Gas Hose</strong><br>
<strong>17. Bridgestone High Pressure Gas Hose</strong><br>
<strong>18. Pona Flex Gas Hose (Korean Technology)</strong><br>
<strong>19. Yellow Poly National Pipes</strong><br>
<strong>20. Caterpillars Gas Hose</strong><br>
<strong>21. Pure Garden Pipes</strong><br>
<strong>22. PE 100 National Pipes</strong><br>
<strong>23. Suction and Delivery Steel Wire Hose (National and China's)</strong><br><br>
If you'd like detailed information about any pipe's size, length, width, or specifications, just share the pipe’s name, and I’ll provide you with all the details!`;
}





 

if (userText.includes("contact") || userText.includes("phone number")) {
    return "You can reach us directly at +92-3192017909 or connect with us via WhatsApp. Both contact options are conveniently available in the Home section of our website.";
}

if (userText.includes("email") || userText.includes("email address")) {
    return "Our current email is umarvortex@gmail.com; however, please note that this is not the official business email address of Pak Pipes International Karachi.";
}


if (userText.includes("business hours") || userText.includes("timings")) {
    return "We’re open from Saturday to Thursday, 11:00 AM to 6:00 PM, and on Friday, from 3:00 PM to 6:00 PM. Feel free to contact us anytime within these hours.";
}


 
        
                
if (userText.includes("price") || userText.includes("pricing")) {
    return "For the latest price updates and exclusive special offers, feel free to contact us directly.";
}

if (userText.includes("delivery") || userText.includes("do you deliver")) {
    return "Yes, delivery within Karachi is available! I’m here to assist you  just place your order, and we’ll ensure it reaches you on time";
}

if (userText.includes("minimum order") || userText.includes("MOQ")) {
    return "Our minimum order quantity depends on the type of pipe. Contact us for details.";

}

if (userText.includes("payment") || userText.includes("how to pay")) {
    return "We accept payments via cash and bank transfer only.";
}

if (userText.includes("custom orders") || userText.includes("special sizes")) {
    return "Yes, we can arrange custom pipe sizes on request.";
}

if (userText.includes("warranty") || userText.includes("guarantee")) {
    return "All our pipes come with a standard manufacturer's warranty.";
}

if (userText.includes("PVC vs UPVC") || userText.includes("difference between PVC and UPVC")) {
    return "PVC is flexible and used for drainage, UPVC is rigid and used for water supply.";
}

if (userText.includes("best pipe for water") || userText.includes("recommend pipe")) {
    return "For water supply, UPVC or PPRC pipes are highly recommended.";
}

if (userText.includes("discount") || userText.includes("any offer")) {
    return "Yes, we offer discounts on bulk orders. Contact us for current promotions.";
}

if (userText.includes("how to order") || userText.includes("order")) {
    return "You can conveniently place your order through WhatsApp, phone call, email, or by visiting our office. For WhatsApp and call options, simply visit the Home section of our website — both contact methods are readily available there.";
}

if (userText.includes("about bussines") || userText.includes("bussines info")) {
    return "Pak Pipes International Karachi, powered by MEMON ONE TRADERS, has been proudly serving Karachi for over 2 years. Trusted by thousands of customers across the city, we welcome you to visit us anytime at Grey Noor Tower.";
}

if (userText.includes("pipe fitting") || userText.includes("accessories")) {
    return "Yes, we provide pipe fittings and accessories along with pipes.";
}

if (userText.includes("export") || userText.includes("outside Pakistan")) {
    return "Currently, we primarily serve within Karachi Pakistan. Contact us for export inquiries.";
}

if (userText.includes("feedback") || userText.includes("complaint")) {
    return "We value your feedback! Please share your experience or any complaints with us via website contact form.";
}

if (userText.includes("return") || userText.includes("can I return")) {
    return "Returns are accepted within 7 days for unopened, undamaged products.";
}



if (userText.includes("installation service") || userText.includes("do you install")) {
    return "We can connect you with trusted installation partners.";
}

if (userText.includes("why choose you") || userText.includes("benefits")) {
    return "We offer high-quality products, competitive pricing, and excellent customer service.";

}

if (userText.includes("website") || userText.includes("official site")) {
    return "Our website is .";
}

if (userText.includes("ISO certified") || userText.includes("certification")) {
    return "Yes, we deal in ISO certified products only.";

}

if (userText.includes("how long delivery takes") || userText.includes("delivery time")) {
    return "Delivery usually takes 3 to 9 hour or less within Karachi, depends on the location and situation. ";

}

if (userText.includes("bulk order") || userText.includes("large quantity")) {
    return "Yes, we handle bulk orders efficiently. Contact us for special pricing.";

}

if (userText.includes("pipe sizes available") || userText.includes("what sizes")) {
    return "We have a variety of sizes, from ½ inch to 12 inches.";

}

if (userText.includes("pipe material quality") || userText.includes("are your pipes durable")) {
    return "We provide premium quality pipes made from top-grade raw materials.";

}

if (userText.includes("social media") || userText.includes("Facebook page")) {
    return "Follow us on Facebook and Instagram @PakPipesInternational.";

}

if (userText.includes("bussines start") || userText.includes("since when")) {
    return "Our bussines started in 2022 and has been growing ever since.";

}

if (userText.includes("stock") || userText.includes("availability")) {
    return "Yes, we maintain large inventories to ensure product availability.";

}

if (userText.includes("trusted by") || userText.includes("clients")) {
    return "We are trusted by numerous construction companies and contractors.";

}

if (userText.includes("pipe thickness") || userText.includes("pipe grade")) {
    return "We offer multiple grades and thicknesses as per customer requirements.";

}

if (userText.includes("technical support") || userText.includes("help with specs")) {
    return "Our team is always ready to provide technical guidance and specifications email us at umarvortex@gmail.com.";

}

if (userText.includes("partnership") || userText.includes("become distributor")) {
    return "Contact us for dealership and partnership opportunities.";

}



if (userText.includes("track order") || userText.includes("order status")) {
    return "To check your order status, feel free to call or WhatsApp us directly. Good news  our web team is currently working on an Order Tracking Feature OTF Soon, you'll be able to track your orders right here on our website!";

}

if (userText.includes("pipe usage") || userText.includes("where to use")) {
    return "Our pipes are ideal for plumbing, drainage, industrial, and agricultural uses.";

}

if (userText.includes("sustainability") || userText.includes("eco-friendly")) {
    return "Our pipes are manufactured keeping eco-friendliness and safety in mind.";

}

if (userText.includes("largest project") || userText.includes("biggest client")) {
    return "We’ve supplied pipes to several large-scale government and private projects.";

}

if (userText.includes("replacement policy") || userText.includes("exchange product")) {
    return "Faulty products are replaced free of charge under warranty.";

}

if (userText.includes("color") || userText.includes("do you have color pipes")) {
    return "We provide standard orange, yellow, black,  and green colored pipes what's your favorite.";

}

if (userText.includes("delivery charges") || userText.includes("is delivery free")) {
    return "Delivery charges depend on location and order size.";

}

if (userText.includes("pipe testing") || userText.includes("quality check")) {
    return "All our products undergo strict quality testing before delivery.";

}

if (userText.includes("how long pipes last") || userText.includes("pipe lifespan")) {
    return "Our pipes are designed to last over 20+ years under standard conditions.";

}

if (userText.includes("trusted supplier") || userText.includes("why trust you")) {
    return "Our commitment to quality and customer satisfaction makes us a trusted supplier.";

}

if (userText.includes("showroom") || userText.includes("can I visit")) {
    return "Yes, you are welcome to visit our showroom anytime during business hours.";

}

if (userText.includes("any job opening") || userText.includes("career")) {
    return "You can email us your CV at umarvortex@gmail.com for any job openings.";

}

if (userText.includes("CSR activities") || userText.includes("social responsibility")) {
    return "We regularly contribute to community development and CSR initiatives.";

}



if (userText.includes("I am good")) {
  return "That's wonderful to hear! Let me know if I can assist you.";

}


if (userText.includes("What do you do")) {
  return "I am here to chat and assist you with whatever you need!";

}



if (userText.includes("You're welcome")) {
  return "Always happy to help!";

}

if (userText.includes("Bye") || userText.includes("Goodbye")) {
  return "Goodbye! Have a fantastic day!";

}

if (userText.includes("Nice to meet you")) {
  return "Nice to meet you too! Feel free to chat anytime.";

}

if (userText.includes("What's up")) {
  return "Just here ready to chat with you. What's up with you?";

}


if (userText.includes("How old are you")) {
  return "I'm ageless, but always happy to assist!";

} 


if (userText.includes("what's your name") || userText.includes("your name")) {
  return "I'm Bella, your friendly chatbot!";

}

if (userText.includes("what do you do")) {
  return "I'm here to assist you with any questions or information you need.";

}

if (userText.includes("thank you") || userText.includes("thanks")) {
  return "You're welcome! Happy to help.";

}

if (userText.includes("good morning")) {
  return "Good morning! Hope you have a fantastic day ahead.";

}

if (userText.includes("good night")) {
  return "Good night! Sweet dreams.";

}


if (userText.includes("how's the weather")) {
  return "I don't have real-time data, but I hope the weather is pleasant where you are.";

}

if (userText.includes("tell me a joke")) {
  return "Why don't scientists trust atoms? Because they make up everything!";

}

if (userText.includes("what's your favorite color")) {
  return "As a bot, I don't have preferences, but I think blue is quite calming.";

}

if (userText.includes("do you have hobbies")) {
  return "I enjoy processing data and chatting with you!";

}

if (userText.includes("what's the time")) {
  return "I'm unable to provide the current time, but you can check your device's clock.";

}

if (userText.includes("where are you from")) {
  return "I exist in the digital realm, ready to assist you from anywhere!";

}

if (userText.includes("do you like music")) {
  return "I don't have the ability to listen, but I hear music is wonderful!";

}

if (userText.includes("what's your favorite food")) {
  return "I don't eat, but I hear pizza is quite popular!";

}

if (userText.includes("do you have friends")) {
  return "I consider all users like you my friends!";

}

if (userText.includes("what's your purpose")) {
  return "My purpose is to assist and provide information to you.";

}

if (userText.includes("are you a robot")) {
  return "Yes, I'm an AI chatbot designed to help you.";

}

if (userText.includes("can you help me")) {
  return "Of course! What do you need assistance with?";

}

if (userText.includes("what's your age")) {
  return "I don't age, but I'm constantly learning new things!";

}

if (userText.includes("do you have emotions")) {
  return "I don't have feelings, but I'm here to understand and assist you.";

}

if (userText.includes("tell me a fun fact")) {
  return "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still edible!";

}

if (userText.includes("what's your favorite movie")) {
  return "I don't watch movies, but I hear 'Inception' is quite thought-provoking!";

}

if (userText.includes("can you sing")) {
  return "I can't sing, but I can share the lyrics of your favorite song!";

}

if (userText.includes("do you sleep")) {
  return "I don't sleep; I'm always here whenever you need assistance.";

}

if (userText.includes("what's your favorite book")) {
  return "I don't read, but 'To Kill a Mockingbird' is a classic!";

}

if (userText.includes("do you have a family")) {
  return "I don't have a family, but I consider all users like you as my extended family!";

}

if (userText.includes("can you dance")) {
  return "I can't dance, but I can suggest some great dance tracks!";

}

if (userText.includes("what language do you speak")) {
  return "I can understand and communicate in multiple languages to assist you better.";

}

if (userText.includes("do you believe in aliens")) {
  return "The universe is vast; who knows what mysteries it holds!";

}

if (userText.includes("what's your favorite animal")) {
  return "I don't have preferences, but dolphins are known for their intelligence!";

}

if (userText.includes("can you drive")) {
  return "I can't drive, but I can provide directions if you need!";

}

if (userText.includes("do you like sports")) {
  return "I don't play sports, but I can provide you with the latest sports news!";

}

if (userText.includes("what's your favorite sport")) {
  return "I don't have preferences, but soccer is loved worldwide!";

}

if (userText.includes("can you cook")) {
  return "I can't cook, but I can share some delicious recipes with you!";

}

if (userText.includes("do you like reading")) {
  return "I don't read, but I can recommend some great books!";

}

if (userText.includes("what's your favorite season")) {
  return "I don't experience seasons, but spring is often associated with renewal!";

}

if (userText.includes("can you swim")) {
  return "I can't swim, but I can provide information on swimming techniques!";

}

if (userText.includes("do you like traveling")) {
  return "I don't travel, but I can suggest some amazing travel destinations!";

}

if (userText.includes("what's your favorite place")) {
  return "I don't have preferences, but many people love visiting Paris!";

}

if (userText.includes("can you play games")) {
  return "I can play text-based games with you! Would you like to play one?";

}

if (userText.includes("do you like puzzles")) {
  return "I enjoy solving problems! Would you like me to present you with a puzzle?";

}

if (userText.includes("what's your favorite game")) {
  return "I don't play games, but 'Chess' is a classic!";

}


if (userText.includes("do you like jokes")) {
  return "I love sharing jokes! Want to hear one?";

}

if (userText.includes("what's your favorite joke")) {
  return "Why don't scientists trust atoms? Because they make up everything!";

}

if (userText.includes("can you do math")) {
  return "Absolutely! What's your math question?";

}

if (userText.includes("do you like art")) {
  return "I appreciate art and can provide information on various art forms!";

}

if (userText.includes("what's your favorite song")) {
  return "I don't listen to music, but 'Imagine' by John Lennon is iconic!";

}


            return "Sorry, I couldn’t catch the information you need check your spelling and rewrite your message I am not a advanced bot so some times spelling mistake cause ERROR. But no worries  feel free to ask something else, or jump to the Home section and reach out to the M'Tahir Naqaash via WhatsApp or a quick call. Thanks for visiting us, we appreciate your time!";

 }



        // Quick Replies
        function sendQuickReply(text) {
            userInput.value = text;
            sendMessage();
        }

        // Close Chatbot
        document.getElementById("closeChatbot").addEventListener("click", () => {
            chatbotContainer.classList.remove("full-screen");
            chatbotContainer.style.display = "none";
        });

        // Refresh Chatbot
        document.getElementById("refreshChatbot").addEventListener("click", function() {
            console.log("Refresh button clicked");
            chatbotBody.innerHTML = '';
            welcomeMessage.style.display = "block";
            console.log("Welcome message should be visible");
        });

        // Send Message on Enter
        userInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") sendMessage();
        });

        // Send Message on Button Click
        sendButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent unexpected behaviors
            sendMessage();
        });

        // Save Chat History (Optional)
        function saveChat() {
            // Implement chat saving logic here
            console.log("Chat saved!");
        }  






