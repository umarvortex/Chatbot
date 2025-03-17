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

    if (userText.includes("pipes") || userText.includes("product") || userText.includes("service") || userText.includes("what pipes you sell")) {
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
    return "Visit our official website at https://umarvortex.github.io/Pak-Pipes-International-Karachi/. Alternatively, you can simply search <strong>Pak Pipes International Karachi</strong> on Google to locate us quickly.";
}

if (userText.includes("ISO certified") || userText.includes("certification")) {
    return "Yes, we deal in ISO certified products only.";
}

if (userText.includes("how long delivery takes") || userText.includes("delivery time")) {
    return "Delivery usually takes 3 to 9 hour or less within Karachi, depends on the location and situation.";
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
    return "I don't have any  information in my memory maybe we'll add social media later.";
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



if (userText.includes("order track") || userText.includes("order status")) {
    return "To check your order status, feel free to call or WhatsApp us directly. Good news  our web team is currently working on an Order Tracking Feature OTF Soon, you'll be able to track your orders right here on our website!";
}



if (userText.includes("sustainability") || userText.includes("eco-friendly")) {
    return "Our pipes are manufactured keeping eco-friendliness and safety in mind.";
}

if (userText.includes("largest project") || userText.includes("biggest client")) {
    return "We have proudly supplied pipes for numerous large-scale government and private projects. Additionally, our products are trusted by countless shops and industrial sectors across Karachi.";
}

if (userText.includes("replacement policy") || userText.includes("exchange")) {
    return "Faulty products are replaced free of charge under warranty.";
}

if (userText.includes("color") || userText.includes("do you have color pipes")) {
    return "We provide standard orange, yellow, black,  green, red, colored pipes what's your favorite.";
}

if (userText.includes("delivery charges") || userText.includes("free delivery") || userText.includes("free")) {
    return "Our delivery charges are calculated according to the delivery location and the volume of your order. We aim to provide cost-effective delivery solutions while ensuring prompt and reliable service.";
}

if (userText.includes("pipe testing") || userText.includes("quality check")) {
    return "At Pak Pipes International Karachi, we ensure that all our products undergo thorough and strict quality testing before they are delivered. Our commitment to quality control guarantees that every pipe meets high industry standards, providing our customers with reliable and durable solutions.";
}

if (userText.includes("how long pipes last") || userText.includes("pipe lifespan")) {
    return "Our pipes are designed to last over 20+ years under standard conditions.";
}

if (userText.includes("trusted supplier") || userText.includes("why trust you")) {
    return "Our commitment to quality and customer satisfaction makes us a trusted supplier.";
}

if (userText.includes("showroom") || userText.includes("visit")) {
    return "Yes, you are welcome to visit our showroom anytime during business hours.";
}

if (userText.includes("job") || userText.includes("career")) {
    return "If you are interested in joining our team, you can email your CV to umarvortex@gmail.com.  we actively review all applications and will contact you if any suitable job openings are available.";
}




if (userText.includes("okay") || userText.includes("ok") || userText.includes("oki") || userText.includes("okk") || userText.includes("okay") || userText.includes("theek") || userText.includes("ook") || userText.includes("i will")) {

  let okReplies = [
    "Hmm nice, you are great!",
    "Alright, noted!",
    "Okay, you are wonderful!",
    "Perfect! Let me know if you need anything else.",
    "Cool, I appreciate that!",
    "You are really cool, thank you!"
  ];

  let randomReply = okReplies[Math.floor(Math.random() * okReplies.length)];
  return randomReply;
}





if (userText.includes("how are you") || userText.includes("how r u") || userText.includes("how's it going")) {

  let howAreYouReplies = [
    "I'm doing great, thanks for asking! How about you?",
    "Feeling awesome! Hope you're having a fantastic day!",
    "I'm fine and ready to assist you anytime!",
    "All good here! How can I help you today?",
    "Doing well! Thanks for checking in.",
    "I'm always at your service, feeling excellent!"
  ];

  let randomReply = howAreYouReplies[Math.floor(Math.random() * howAreYouReplies.length)];
  return randomReply;
}








            return "Sorry, I couldn’t catch the information you need. Please check your spelling and rewrite your message. I am not an advanced bot, so sometimes spelling mistakes cause errors. But no worries feel free to ask something else, or jump to the Home section and reach out to the M'Tahir Naqaash via WhatsApp or a quick call. Thanks for visiting us.";
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






