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
    return "You can place an order via WhatsApp, call, email, or visiting our office if you want to order via WhatsApp or call you will find both options in our website home section.";
}

if (userText.includes("about bussines") || userText.includes("bussines info")) {
    return "Pak Pipes International Karachi powered by MEMON ONE TRADERS is serving the Karachi for over 2 years trusted by thousands costomers All over in Karachi visit us anytime at Grey Noor Tower!";
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

if (userText.includes("return policy") || userText.includes("can I return")) {
    return "Returns are accepted within 7 days for unopened, undamaged products.";
}



if (userText.includes("installation service") || userText.includes("do you install")) {
    return "We can connect you with trusted installation partners.";
}

if (userText.includes("why choose you") || userText.includes("benefits")) {
    return "We offer high-quality products, competitive pricing, and excellent customer service.";

}

if (userText.includes("website") || userText.includes("official site")) {
    return "Our website is www.pakpipesinternational.com.";
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





