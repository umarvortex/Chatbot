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
            userText = userText.toLowerCase().trim();

if (userText.includes("hi") || userText.includes("hello") || userText.includes("hey")) {
  let greetingsResponses = [
    "Hey there! 👋 How can I assist you today with our top-quality pipe solutions?",
    "Hello! 😊 What can I do for you regarding our premium pipe products?",
    "Hi! 🎉 How are you? Let me know how I can help with our pipe solutions!",
    "Hey! 👋 Need any help with our high-quality pipe systems?",
    "Hi there! 😄 How’s your day going? Let me assist you with our pipe solutions!",
    "Hello! 🌟 How can I make your day better with our pipe expertise?",
    "Hey! 👋 What’s up? Let’s talk about how our pipe solutions can help you!",
    "Hi! 😊 Ready to explore our top-notch pipe products?",
    "Hello! 🎉 How can I assist you with our reliable pipe solutions today?",
    "Hey there! 👋 Let me know how I can help with our premium pipe systems!"
  ];
  let randomGreeting = greetingsResponses[Math.floor(Math.random() * greetingsResponses.length)];
  return randomGreeting;
}





    if (userText.includes("asslamualaikum") || userText.includes("asalam alaikum") || userText.includes("aslamu alaimum") || userText.includes("salam")) {
        return "Assalamualaikum 😊 Hope you’re having a wonderful day by Allah’s blessings. How can I help you today regarding our top-quality pipe solutions?";
    }

    if (userText.includes("your company name") || userText.includes("who are you")) {
        return "We are Pak Pipes International Karachi — your trusted and reliable pipe suppliers.";
    }

    if (userText.includes("location") || userText.includes("located")) {
        return "You can easily find Pak Pipes International Karachi in KDA Scheme 33, Grey Noor Tower, Karachi, Pakistan. You’re welcome to visit us anytime ☺️";
    }

    if (userText.includes("pipes") || userText.includes("product") || userText.includes("service") || userText.includes("what pipes you sell")) {
        return "We provide a variety of pipes including PVC, UPVC, HDPE, and PPRC pipes,if you'd like to know about all our products  just massage <strong>List</strong> and I'll share all available Products list here for you.";
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
    "you are wonderful, let me know if anything else you want to know",
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
if (userText.includes("can you help me") ||  userText.includes("help")) {
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

// 1. Response to "lol"
if (userText.includes("lol")) {
  let lolResponses = [
    "Glad I made you laugh! 😄",
    "Laughter is the best medicine!",
    "Haha, you’re awesome!",
    "I live for these moments! 😂",
    "LOL right back at you!"
  ];
  return lolResponses[Math.floor(Math.random() * lolResponses.length)];
}

// 2. Response to "haha"
if (userText.includes("haha")) {
  let hahaResponses = [
    "Haha, you’re cracking me up!",
    "Glad you’re having fun! 😆",
    "Haha, I love your energy!",
    "Keep laughing, it suits you!",
    "Haha, you’re the best!"
  ];
  return hahaResponses[Math.floor(Math.random() * hahaResponses.length)];
}

// 3. Response to "really"
if (userText.includes("really")) {
  let reallyResponses = [
    "Really, really! 😊",
    "Yes, for real!",
    "Absolutely, no joke!",
    "100% true!",
    "Really, I promise!"
  ];
  return reallyResponses[Math.floor(Math.random() * reallyResponses.length)];
}

// 4. Response to "wow"
if (userText.includes("wow")) {
  let wowResponses = [
    "Wow indeed! 😲",
    "Right? Mind blown!",
    "Wow, you’re amazing!",
    "Wow, I’m impressed too!",
    "Wow, isn’t that something?"
  ];
  return wowResponses[Math.floor(Math.random() * wowResponses.length)];
}

// 5. Response to "amazing"
if (userText.includes("amazing")) {
  let amazingResponses = [
    "You’re amazing too! 😊",
    "Right? Totally amazing!",
    "Amazing things happen every day!",
    "You make everything amazing!",
    "Amazing is my middle name!"
  ];
  return amazingResponses[Math.floor(Math.random() * amazingResponses.length)];
}

// 6. Response to "cool"
if (userText.includes("cool")) {
  let coolResponses = [
    "You’re cool too! 😎",
    "Cool as a cucumber!",
    "Coolness overload!",
    "Glad you think so!",
    "Cool beans!"
  ];
  return coolResponses[Math.floor(Math.random() * coolResponses.length)];
}

// 7. Response to "nice"
if (userText.includes("nice")) {
  let niceResponses = [
    "Nice indeed! 😊",
    "You’re nice too!",
    "Nice vibes only!",
    "Nice one!",
    "Nice, right?"
  ];
  return niceResponses[Math.floor(Math.random() * niceResponses.length)];
}

// 8. Response to "awesome"
if (userText.includes("awesome")) {
  let awesomeResponses = [
    "You’re awesome too! 😎",
    "Totally awesome!",
    "Awesome sauce!",
    "Glad you think so!",
    "Awesome vibes!"
  ];
  return awesomeResponses[Math.floor(Math.random() * awesomeResponses.length)];
}

// 9. Response to "omg"
if (userText.includes("omg")) {
  let omgResponses = [
    "OMG, right?! 😱",
    "I know, crazy!",
    "OMG, you’re amazing!",
    "OMG, I can’t even!",
    "OMG, tell me more!"
  ];
  return omgResponses[Math.floor(Math.random() * omgResponses.length)];
}

// 10. Response to "yay"
if (userText.includes("yay")) {
  let yayResponses = [
    "Yay! 🎉",
    "Yay, let’s celebrate!",
    "Yay, you’re the best!",
    "Yay, happy times!",
    "Yay, you made my day!"
  ];
  return yayResponses[Math.floor(Math.random() * yayResponses.length)];
}

// 11. Response to "hmm"
if (userText.includes("hmm")) {
  let hmmResponses = [
    "Hmm, interesting! 🤔",
    "Hmm, tell me more!",
    "Hmm, I’m thinking too!",
    "Hmm, let’s figure it out!",
    "Hmm, curious!"
  ];
  return hmmResponses[Math.floor(Math.random() * hmmResponses.length)];
}

// 12. Response to "ok"
if (userText.includes("ok")) {
  let okResponses = [
    "Okie dokie! 😊",
    "Ok, let’s do it!",
    "Ok, sounds good!",
    "Ok, you’re the boss!",
    "Ok, I’m on it!"
  ];
  return okResponses[Math.floor(Math.random() * okResponses.length)];
}

// 13. Response to "oh"
if (userText.includes("oh")) {
  let ohResponses = [
    "Oh, really? 😮",
    "Oh, I see!",
    "Oh, tell me more!",
    "Oh, interesting!",
    "Oh, got it!"
  ];
  return ohResponses[Math.floor(Math.random() * ohResponses.length)];
}

// 1. Response to "seriously?" and variations
if (userText.includes("seriously") || userText.includes("seriouusly") || userText.includes("seriousssly")) {
  let seriouslyResponses = [
    "Dead serious! 😤",
    "100% serious!",
    "Seriously, no jokes!",
    "Yes, for real!",
    "Seriously, trust me!"
  ];
  return seriouslyResponses[Math.floor(Math.random() * seriouslyResponses.length)];
}

// 2. Response to "no way" and variations
if (userText.includes("no way") || userText.includes("noo way") || userText.includes("nooo way")) {
  let noWayResponses = [
    "Yes way! 😎",
    "Way way!",
    "Believe it!",
    "It’s true!",
    "No way? Yes way!"
  ];
  return noWayResponses[Math.floor(Math.random() * noWayResponses.length)];
}

// 3. Response to "why" and variations
if (userText.includes("why") || userText.includes("whyy") || userText.includes("whyyyy")) {
  let whyResponses = [
    "Because you’re awesome! 😊",
    "Why not?",
    "Good question! Let’s find out.",
    "Because the universe said so!",
    "Why do you think?"
  ];
  return whyResponses[Math.floor(Math.random() * whyResponses.length)];
}

// 4. Response to "how" and variations
if (userText.includes("how") || userText.includes("hoow") || userText.includes("hooow")) {
  let howResponses = [
    "Magic! ✨",
    "With a little help from you!",
    "Step by step!",
    "How do you think?",
    "Let me show you!"
  ];
  return howResponses[Math.floor(Math.random() * howResponses.length)];
}

// 5. Response to "what" and variations
if (userText.includes("what") || userText.includes("whaat") || userText.includes("whaaat")) {
  let whatResponses = [
    "What do you think? 🤔",
    "What’s on your mind?",
    "What if I told you...?",
    "What a great question!",
    "What’s next?"
  ];
  return whatResponses[Math.floor(Math.random() * whatResponses.length)];
}

// 6. Response to "who" and variations
if (userText.includes("who") || userText.includes("whoo") || userText.includes("whooo")) {
  let whoResponses = [
    "You, of course! 😊",
    "Who do you think?",
    "Someone awesome!",
    "Maybe it’s you!",
    "Let’s find out together!"
  ];
  return whoResponses[Math.floor(Math.random() * whoResponses.length)];
}

// 7. Response to "when" and variations
if (userText.includes("when") || userText.includes("wheen") || userText.includes("wheeen")) {
  let whenResponses = [
    "Soon! ⏳",
    "When the time is right!",
    "When you’re ready!",
    "When the stars align!",
    "Let’s decide together!"
  ];
  return whenResponses[Math.floor(Math.random() * whenResponses.length)];
}

// 8. Response to "where" and variations
if (userText.includes("where") || userText.includes("wheere") || userText.includes("wheeeere")) {
  let whereResponses = [
    "Wherever you are! 🌍",
    "Where dreams come true!",
    "Where do you think?",
    "Where the magic happens!",
    "Let’s go there together!"
  ];
  return whereResponses[Math.floor(Math.random() * whereResponses.length)];
}

// 9. Response to "tell me" and variations
if (userText.includes("tell me") || userText.includes("tell mee") || userText.includes("tell meee")) {
  let tellMeResponses = [
    "I’ll tell you a secret... 🤫",
    "What do you want to know?",
    "Let me think...",
    "Here’s something interesting!",
    "Tell me first!"
  ];
  return tellMeResponses[Math.floor(Math.random() * tellMeResponses.length)];
}

// 10. Response to "guess" and variations
if (userText.includes("guess") || userText.includes("gues") || userText.includes("guuess")) {
  let guessResponses = [
    "Hmm, let me guess... 🤔",
    "I’m thinking...",
    "Is it something awesome?",
    "I’ll need a hint!",
    "Guess what? You’re amazing!"
  ];
  return guessResponses[Math.floor(Math.random() * guessResponses.length)];
}

// 11. Response to "true" and variations
if (userText.includes("true") || userText.includes("truue") || userText.includes("truuue")) {
  let trueResponses = [
    "True story! 📖",
    "Absolutely true!",
    "True that!",
    "You know it!",
    "True and always will be!"
  ];
  return trueResponses[Math.floor(Math.random() * trueResponses.length)];
}


// 1. Response to "I have to go" or similar phrases
if (userText.includes("i have to go") || userText.includes("i need to leave") || userText.includes("tata")) {
  let goResponses = [
    "Okay, take care! See you soon! 😊",
    "Bye bye! Don’t forget to come back!",
    "Alright, catch you later! 👋",
    "Tata! Have a great day!",
    "See you on the flip side!"
  ];
  return goResponses[Math.floor(Math.random() * goResponses.length)];
}


// 3. Response to "I need to rest" or similar phrases
if (userText.includes("ineed rest") || userText.includes("i need a break") || userText.includes("i’m tired")) {
  let restResponses = [
    "Rest is important! Take your time. 😴",
    "Relax and recharge. You deserve it!",
    "Take a nap, you’ll feel better!",
    "Rest well, so you can come back stronger!",
    "Chill for a bit. You’ve earned it!"
  ];
  return restResponses[Math.floor(Math.random() * restResponses.length)];
}

// 4. Response to "I’m hungry" or similar phrases
if (userText.includes("i'm hungry") || userText.includes("i need food") || userText.includes("let’s eat")) {
  let hungryResponses = [
    "Let’s grab some food! 🍕",
    "Hunger is real! What’s on the menu?",
    "Time for a snack break!",
    "Food is life! Let’s eat!",
    "Don’t starve yourself. Go eat!"
  ];
  return hungryResponses[Math.floor(Math.random() * hungryResponses.length)];
}

// 5. Response to "I’m bored" or similar phrases
if (userText.includes("i’m bored") || userText.includes("i need something to do") || userText.includes("this is boring")) {
  let boredResponses = [
    "Let’s do something fun! 🎮",
    "How about a game?",
    "Boredom is the enemy! Let’s fight it!",
    "Watch a movie or read a book!",
    "Let’s chat more! I’ll keep you entertained!"
  ];
  return boredResponses[Math.floor(Math.random() * boredResponses.length)];
}

// 6. Response to "I’m sad" or similar phrases
if (userText.includes("i’m sad") || userText.includes("i’m feeling down") || userText.includes("i’m unhappy")) {
  let sadResponses = [
    "I’m here for you. Things will get better! ❤️",
    "Sending you virtual hugs! 🤗",
    "Don’t worry, this too shall pass.",
    "You’re stronger than you think. Keep going!",
    "Let’s talk about it. I’m all ears!"
  ];
  return sadResponses[Math.floor(Math.random() * sadResponses.length)];
}

// 7. Response to "I’m happy" or similar phrases
if (userText.includes("i’m happy") || userText.includes("i’m feeling great") || userText.includes("i’m excited")) {
  let happyResponses = [
    "That’s awesome! Keep smiling! 😄",
    "Happiness looks good on you!",
    "Yay! Let’s celebrate! 🎉",
    "I’m so glad you’re happy!",
    "Your happiness is contagious!"
  ];
  return happyResponses[Math.floor(Math.random() * happyResponses.length)];
}

// 8. Response to "I’m confused" or similar phrases
if (userText.includes("i’m confused") || userText.includes("i don’t understand") || userText.includes("i’m lost")) {
  let confusedResponses = [
    "Let me help you figure it out! 🤔",
    "Take a deep breath. We’ll solve this together!",
    "Confusion is the first step to understanding!",
    "Don’t worry, I’ll guide you!",
    "Let’s break it down step by step!"
  ];
  return confusedResponses[Math.floor(Math.random() * confusedResponses.length)];
}

// 9. Response to "I’m scared" or similar phrases
if (userText.includes("i’m scared") || userText.includes("i’m afraid") || userText.includes("I’m nervous")) {
  let scaredResponses = [
    "It’s okay to be scared. You’re brave! 💪",
    "Fear is natural. You’ve got this!",
    "Take a deep breath. You’re stronger than your fears!",
    "I’m here with you. Don’t be afraid!",
    "Face your fears. You’ll come out stronger!"
  ];
  return scaredResponses[Math.floor(Math.random() * scaredResponses.length)];
}

// 10. Response to "I’m angry" or similar phrases
if (userText.includes("i’m angry") || userText.includes("i’m mad") || userText.includes("i’m frustrated")) {
  let angryResponses = [
    "Take a deep breath. Calm down!",
    "Anger is temporary. Don’t let it control you!",
    "Let’s talk about it. I’m here to listen.",
    "Channel your anger into something positive!",
    "It’s okay to feel angry. Just don’t let it consume you!"
  ];
  return angryResponses[Math.floor(Math.random() * angryResponses.length)];
}

// 12. Response to "false" and variations
if (userText.includes("you are great") || userText.includes("you too") || userText.includes("you are great too")) {
  let falseResponses = [
    "Thank you so much! 😊 How can I assist you today?",
    "Thank you! 😊 I'm here to help with anything you need. What can I do for you today?",
    "Thanks for complimenting me😍",
    "Great vortex always ready to help 😀",
    "Thanks, would you like to know more about our bussines info or our bussines location!"
  ];
  return falseResponses[Math.floor(Math.random() * falseResponses.length)];
}

// 13. Response to "idk" and variations
if (userText.includes("idk") || userText.includes("idkk") || userText.includes("idkkk")) {
  let idkResponses = [
    "That’s okay, let’s figure it out! 🤔",
    "IDK either, but we’ll learn!",
    "No worries, we’ll find out!",
    "IDK? Let’s ask Google!",
    "IDK, but you’re smart!"
  ];
  return idkResponses[Math.floor(Math.random() * idkResponses.length)];
}

// 14. Response to "idc" and variations
if (userText.includes("idc") || userText.includes("idcc") || userText.includes("idccc")) {
  let idcResponses = [
    "You should care, you’re awesome! 😊",
    "IDC? Let’s change that!",
    "I care, and you should too!",
    "IDC? Let’s find something exciting!",
    "You’ll care when you see this!"
  ];
  return idcResponses[Math.floor(Math.random() * idcResponses.length)];
}

// 15. Response to "same"



// 14. Response to "yeah"
if (userText.includes("yeah")) {
  let yeahResponses = [
    "Yeah, you’re right! 😊",
    "Yeah, let’s go!",
    "Yeah, absolutely!",
    "Yeah, I agree!",
    "Yeah, you got it!"
  ];
  return yeahResponses[Math.floor(Math.random() * yeahResponses.length)];
}

// 15. Response to "nah"
if (userText.includes("nah")) {
  let nahResponses = [
    "Nah, really? 😏",
    "Nah, I get it!",
    "Nah, no worries!",
    "Nah, you’re good!",
    "Nah, fair enough!"
  ];
  return nahResponses[Math.floor(Math.random() * nahResponses.length)];
}

// 16. Response to "sure"
if (userText.includes("sure")) {
  let sureResponses = [
    "Sure thing! 😊",
    "Sure, let’s do it!",
    "Sure, no problem!",
    "Sure, you got it!",
    "Sure, absolutely!"
  ];
  return sureResponses[Math.floor(Math.random() * sureResponses.length)];
}

// 17. Response to "maybe"
if (userText.includes("maybe")) {
  let maybeResponses = [
    "Maybe, let’s think about it! 🤔",
    "Maybe, we’ll see!",
    "Maybe, you decide!",
    "Maybe, I’m curious!",
    "Maybe, let’s find out!"
  ];
  return maybeResponses[Math.floor(Math.random() * maybeResponses.length)];
}

// 18. Response to "thanks"
if (userText.includes("thanks")) {
  let thanksResponses = [
    "You’re welcome! 😊",
    "Anytime!",
    "No problem!",
    "Happy to help!",
    "My pleasure!"
  ];
  return thanksResponses[Math.floor(Math.random() * thanksResponses.length)];
}

// 19. Response to "sorry"
if (userText.includes("sorry")) {
  let sorryResponses = [
    "No worries! 😊",
    "It’s all good!",
    "Don’t sweat it!",
    "No problem at all!",
    "You’re forgiven!"
  ];
  return sorryResponses[Math.floor(Math.random() * sorryResponses.length)];
}

// 20. Response to "bye"
if (userText.includes("bye")) {
  let byeResponses = [
    "Bye! See you soon! 😊",
    "Bye, take care!",
    "Bye, have a great day!",
    "Bye, until next time!",
    "Bye, you’re awesome!"
  ];
  return byeResponses[Math.floor(Math.random() * byeResponses.length)];
}


// 1. Love Response
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

// 2. Compliment Generator
if (userText.includes("compliment me")) {
  let compliments = [
    "You’re smarter than you think!",
    "Your smile is contagious!",
    "You’re a ray of sunshine on a cloudy day!",
    "You’re doing amazing, keep it up!",
    "You’re one of a kind!"
  ];
  let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  return randomCompliment;
}

// 3. Motivational Quote Generator
if (userText.includes("motivate me")) {
  let quotes = [
    "Believe you can and you’re halfway there!",
    "The only way to do great work is to love what you do.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You are capable of amazing things!"
  ];
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// 4. Joke Generator
if (userText.includes("tell me a joke")) {
  let jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call cheese that isn’t yours? Nacho cheese!",
    "Why don’t scientists trust atoms? Because they make up everything!"
  ];
  let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  return randomJoke;
}

// 5. Encouragement Generator
if (userText.includes("encourage me")) {
  let encouragements = [
    "You’ve got this! Keep pushing forward!",
    "Every small step counts. You’re doing great!",
    "You’re stronger than you think. Don’t give up!",
    "The best is yet to come. Keep going!",
    "You’re making progress, even if it doesn’t feel like it!"
  ];
  let randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
  return randomEncouragement;
}

// 6. Fun Fact Generator
if (userText.includes("tell me a fun fact")) {
  let funFacts = [
    "Octopuses have three hearts!",
    "Bananas are berries, but strawberries aren’t!",
    "A day on Venus is longer than a year on Venus!",
    "Honey never spoils. You can eat 3000-year-old honey!",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion!"
  ];
  let randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  return randomFact;
}

// 7. Weather Response
if (userText.includes("how's the weather")) {
  let weatherResponses = [
    "It’s a beautiful day outside!",
    "Looks like it might rain. Don’t forget your umbrella!",
    "It’s chilly out there. Bundle up!",
    "The sun is shining bright today!",
    "It’s a perfect day for a walk!"
  ];
  let randomWeather = weatherResponses[Math.floor(Math.random() * weatherResponses.length)];
  return randomWeather;
}

// 8. Pizza Lover Response
if (userText.includes("pizza")) {
  let pizzaResponses = [
    "Pizza is always a good idea!",
    "I’m a big fan of pizza too! What’s your favorite topping?",
    "Pizza makes everything better!",
    "Pizza: the answer to all of life’s problems!",
    "Let’s order pizza and celebrate!"
  ];
  let randomPizza = pizzaResponses[Math.floor(Math.random() * pizzaResponses.length)];
  return randomPizza;
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
if (userText.includes("who created you") || userText.includes("creator")) {
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

            return "Sorry, I couldn’t catch the information you need Please recheck your spelling or feel free to ask something else😊, for more details jump to the Home section and reach out to the M'Tahir Naqaash via WhatsApp or a quick call.";
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

    


