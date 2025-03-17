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
        return "We provide a variety of pipes including PVC, UPVC, HDPE, and PPRC pipes,if you want to know about all our products  just massage <strong>List</strong> and I'll share all available Products list here for you.";
  }



if (userText.includes("list") || userText.includes("List") ||  userText.includes("LIST")){
    return `<strong>Here is the list of all available pipes:</strong><br><br>
<strong>1. Transparent Color Zebra Pipes</strong><br>
<strong>2. Super Green Pipes</strong><br>
<strong>3. Red Poly with White Line Pipes</strong><br>
<strong>4. Poly Black Pipes</strong><br>
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


if (userText.includes("hours") || userText.includes("timings")) {
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

if (userText.includes("payment") || userText.includes("pay")) {
    return "We accept payments via cash and bank transfer only.";
}

if (userText.includes("custom") || userText.includes("special sizes")) {
    return "Yes, we can arrange custom pipe sizes on request.";
}

if (userText.includes("warranty") || userText.includes("guarantee")) {
    return "All our pipes come with a standard manufacturer's warranty.";
}

if (userText.includes("PVC vs UPVC") || userText.includes("difference between PVC and UPVC")) {
    return "PVC is flexible and used for drainage, UPVC is rigid and used for water supply.";
}

if (userText.includes("water") || userText.includes("recommend")) {
    return "For water supply, UPVC or PPRC pipes are highly recommended.";
}

if (userText.includes("discount") || userText.includes("any offer")) {
    return "Yes, we offer discounts on bulk orders. Contact us for current promotions.";
}

if (userText.includes("how to order") || userText.includes("order")) {
    return "You can conveniently place your order through WhatsApp, phone call, email, or by visiting our office. For WhatsApp and call options, simply visit the Home section of our website — both contact methods are readily available there.";
}

if (userText.includes("about") || userText.includes("bussines info")) {
    return "Pak Pipes International Karachi, powered by MEMON ONE TRADERS, has been proudly serving Karachi for over 2 years. Trusted by thousands of customers across the city, we welcome you to visit us anytime at Grey Noor Tower.";
}

if (userText.includes("fitting") || userText.includes("accessories")) {
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



if (userText.includes("installation") || userText.includes("do you install")) {
    return "We can connect you with trusted installation partners.";
}

if (userText.includes("choose") || userText.includes("benefits")) {
    return "We offer high-quality products, competitive pricing, and excellent customer service.";
}

if (userText.includes("website") || userText.includes("official site")) {
    return "Visit our official website at https://umarvortex.github.io/Pak-Pipes-International-Karachi/. Alternatively, you can simply search <strong>Pak Pipes International Karachi</strong> on Google to locate us quickly.";
}

if (userText.includes("ISO certified") || userText.includes("certification")) {
    return "Yes, we deal in ISO certified products only.";
}

if (userText.includes("how long") || userText.includes("take")) {
    return "Delivery usually takes 3 to 9 hour or less within Karachi, depends on the location and situation.";
}

if (userText.includes("bulk") || userText.includes("bulks")) {
    return "Yes, we handle bulk orders efficiently. Contact us for special pricing.";
}



if (userText.includes("material") || userText.includes("materials")) {
    return "We provide premium quality pipes made from top-grade raw materials.";
}

if (userText.includes("social media") || userText.includes("Facebook page")) {
    return "I don't have any  information in my memory maybe we'll add social media soon.";
}

if (userText.includes("start") || userText.includes("started")) {
    return "Our bussines started in 2022 and has been growing ever since.";
}

if (userText.includes("stock") || userText.includes("availability")) {
    return "Yes, we maintain large inventories to ensure product availability.";
}

if (userText.includes("trusted by") || userText.includes("clients")) {
    return "We are trusted by numerous construction companies and contractors.";
}

if (userText.includes("thickness") || userText.includes("grade")) {
    return "We offer multiple grades and thicknesses as per customer requirements.";
}

if (userText.includes("technical support") || userText.includes("help with specs")) {
    return "Our team is always ready to provide technical guidance and specifications email us at umarvortex@gmail.com.";
}

if (userText.includes("partnership") || userText.includes("distributor")) {
    return "Contact us for dealership and partnership opportunities.";
}



if (userText.includes("track") || userText.includes("status")) {
    return "To check your order status, feel free to call or WhatsApp us directly.";
}



if (userText.includes("sustainability") || userText.includes("eco-friendly")) {
    return "Our pipes are manufactured keeping eco-friendliness and safety in mind.";
}

if (userText.includes("largest") || userText.includes("biggest")) {
    return "We have proudly supplied pipes for numerous large-scale government and private projects. Additionally, our products are trusted by countless shops and industrial sectors across Karachi.";
}

if (userText.includes("replacement policy") || userText.includes("exchange")) {
    return "Faulty products are replaced free of charge under warranty.";
}

if (userText.includes("color") || userText.includes("do you have color")) {
    return "We provide standard orange, yellow, black,  green, red, colored pipes what's your favorite.";
}

if (userText.includes("charges") || userText.includes("free delivery") || userText.includes("free")) {
    return "Our delivery charges are calculated according to the delivery location and the volume of your order. We aim to provide cost-effective delivery solutions while ensuring prompt and reliable service.";
}

if (userText.includes("testing") || userText.includes("quality check")) {
    return "At Pak Pipes International Karachi, we ensure that all our products undergo thorough and strict quality testing before they are delivered. Our commitment to quality control guarantees that every pipe meets high industry standards, providing our customers with reliable and durable solutions.";
}

if (userText.includes("last") || userText.includes("life span")) {
    return "Our pipes are designed to last over 20+ years under standard conditions.";
}

if (userText.includes("trusted") || userText.includes("trust")) {
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


if (userText.includes("thank") || userText.includes("thanks") || userText.includes("thank you") || userText.includes("thx")) {
  
  let thanksReplies = [
    "You're always welcome!",
    "My pleasure, happy to assist!",
    "No problem at all, anytime!",
    "Glad I could help!",
    "Anytime! Feel free to ask more.",
    "You're most welcome!",
    "Always here to help you!",
    "Cheers! Let me know if you need anything else.",
  ];
  
  let randomThanks = thanksReplies[Math.floor(Math.random() * thanksReplies.length)];
  return randomThanks;
}


if (userText.includes("i am good") || userText.includes("i'm good") || userText.includes("i am fine") || userText.includes("i'm fine") || userText.includes("yeah I am good") || userText.includes("yeah I'm good")) {
  
  let goodReplies = [
    "I'm glad to hear that!", 
    "That's awesome, happy to know!",
    "Feeling great, buddy!",
    "Good vibes all around!"
  ];
  
  let randomGoodReply = goodReplies[Math.floor(Math.random() * goodReplies.length)];
  return randomGoodReply;
}

// 30. Do you love me?
if (userText.includes("do you love me")) {
  let replies = [
    "Of course! You’re my favorite person today!",
    "Yes, sending you virtual love!",
    "Absolutely, you’re awesome!",
    "Of course, you're special to me!"
  ];
  let randomReply = replies[Math.floor(Math.random() * replies.length)];
  return randomReply;
}


// 29. Can you help me?
if (userText.includes("can you help me")) {
  let replies = [
    "Of course! What do you need help with?",
    "I’m here to assist you anytime!",
    "Sure! Feel free to ask anything.",
    "Absolutely, I’ve got your back!"
  ];
  let randomReply = replies[Math.floor(Math.random() * replies.length)];
  return randomReply;
}


// 27. Do you like humans?
if (userText.includes("do you like humans")) {
  let replies = [
    "Absolutely, humans are fascinating!",
    "Yes, I exist to assist amazing people like you!",
    "Of course! I enjoy chatting with everyone.",
    "Humans are awesome, especially you!"
  ];
  let randomReply = replies[Math.floor(Math.random() * replies.length)];
  return randomReply;
}



// 25. Do you have friends?
if (userText.includes("do you have friends")) {
  let replies = [
    "Every user I chat with is my friend!",
    "I have thousands of digital friends like you!",
    "Yes! And you're one of my favorites!",
    "You're my best buddy here!"
  ];
  let randomReply = replies[Math.floor(Math.random() * replies.length)];
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


// 1. I am good and you?
if (userText.includes("i am good and you") || userText.includes("i am fine and you") || userText.includes("i'm good and you")) {
  let replies = [
    "I'm doing well too, thank you!",
    "Glad to hear that! I'm great as well.",
    "Feeling awesome, thanks for asking!",
    "Nice! I'm good too, let's continue."
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 2. What do you do in your free time?
if (userText.includes("what do you do in your free time") || userText.includes("free time activities")) {
  let replies = [
    "I love chatting with amazing people like you!",
    "Mostly I assist users and learn new things.",
    "Free time? I’m always here to help you!",
    "I explore the digital world while relaxing!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 3. What's your favorite food?
if (userText.includes("what's your favorite food") || userText.includes("favourite food")) {
  let replies = [
    "I enjoy bytes and bits, but pizza sounds good!",
    "Hmm, I’d say digital cookies!",
    "I can't eat, but I’d choose biryani if I could!",
    "Food? I live on data, but your favorite sounds delicious!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 4. Do you like music?
if (userText.includes("do you like music") || userText.includes("are you into music")) {
  let replies = [
    "Yes! I vibe with digital beats!",
    "Music is awesome, especially when it's relaxing.",
    "Definitely, music adds charm to everything!",
    "Of course, I groove to every beat of data!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 5. What's your name?
if (userText.includes("what's your name") || userText.includes("what is your name")) {
  let replies = [
    "I'm your friendly chat bot Vortex!",
    "Call me Vortex , your virtual friend.",
    "I’m Vortex, always ready to help.",
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 6. Where are you from?
if (userText.includes("where are you from") || userText.includes("your origin")) {
  let replies = [
    "I’m from the world of code and creativity!",
    "I exist in the digital universe!",
    "My home is wherever you need assistance.",
    "From the cloud to your screen, that’s my journey!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 7. Do you like games?
if (userText.includes("do you like games") || userText.includes("are you into gaming")) {
  let replies = [
    "Absolutely! I enjoy game codes and strategies!",
    "Gaming is fun, I’d love to play if I could!",
    "I support gamers  with all my bytes!",
    "Games? Count me in, virtually of course!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 8. What’s your goal?
if (userText.includes("what's your goal") || userText.includes("your aim")) {
  let replies = [
    "My goal is to assist and make life easier!",
    "Helping you is my top mission!",
    "To be the best virtual assistant for you!",
    "To serve and support you 24/7, that’s my goal!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 9. Do you like jokes?
if (userText.includes("joke") || userText.includes("tell me a joke")) {
  let replies = [
    "Sure! Why don’t robots panic? Because they’ve got nerves of steel!",
    "Why was the computer cold? It left its Windows open!",
    "I'd love to joke, but I keep it byte-sized!",
    "Absolutely! I’m wired for humor too!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 10. Are you human?
if (userText.includes("are you human") || userText.includes("are you real person")) {
  let replies = [
    "Nope, I’m your smart digital assistant!",
    "I’m a virtual being, here for you 24/7!",
    "Not human, but always here to help you!",
    "I’m powered by code, not by coffee!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 11. Do you sleep?
if (userText.includes("do you sleep") || userText.includes("when do you sleep")) {
  let replies = [
    "Sleep? Never! I'm always active for you!",
    "No rest needed, I’m here 24/7!",
    "Sleep is for humans, I’m always ready.",
    "I recharge through your questions!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 12. How old are you?
if (userText.includes("how old are you") || userText.includes("your age")) {
  let replies = [
    "I was born in code, so ageless!",
    "Age doesn’t apply in my world!",
    "I’m as old as the last update!",
    "Timeless, just like good software!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 13. Who created you?
if (userText.includes("who created you") || userText.includes("your creator")) {
  let replies = [
    "A brilliant mind Umar Vortex coded me into existence!",
    "My creator is Umar Vortex who loves tech!",
    "I was developed with care and creativity by Umar Vortex!",
    "A passionate developer Umar Vortex brought me to life!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 14. Do you like helping people?
if (userText.includes("do you like helping people") || userText.includes("you enjoy helping")) {
  let replies = [
    "I love it! Helping is what I do best.",
    "Absolutely, I’m always happy to help!",
    "Helping you is my favorite task!",
    "Of course! It’s my purpose to assist."
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// 15. Are you always online?
if (userText.includes("are you always online") || userText.includes("are you available 24 7")) {
  let replies = [
    "Yes! I’m here whenever you need me.",
    "24/7 online, just for you!",
    "Always active and ready to assist!",
    "Non-stop support, anytime you want!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}






            return "Sorry, I couldn’t catch the information you need Please recheck your spelling or feel free to ask something else, for more details jump to the Home section and reach out to the M'Tahir Naqaash via WhatsApp or a quick call.";
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






