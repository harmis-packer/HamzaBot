document.addEventListener('DOMContentLoaded', function() {
    const chatArea = document.getElementById('chat-area');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    // Predefined silly responses
    const sillyResponses = [
        "I was going to answer, but then I got distracted by cat videos. 🐈",
        "I'm 99% sure the answer is 'banana'. 🍌","Let me do some big brain thinking... Nope, nothing.",
        "According to quantum nonsense....you need to rest",
        "If we add 2 and 2, we get... a pizza sikyo?",
        "I asked Google. Even Google ran away.",
        "You’ve asked the perfect question but for someone else not me.",
        "You need to pay me for that question naye gulamu rolex welile naku ki",
        "sincerely speaking… hmm… no idea.",
        "Tokola ERROR muto wange...Eno MASSANDUGU tukuba🥊👊 who are asking",
        "Yasamila muli mizi gwe",
        "Be careful I will come there omanyi mubuza nyo as if you don't have brain",
        "First wait am thinking about my children...ka fees ako🤔",
        "Akasanyalaze okawuli..kyemanyi okawuli",
        "I would answer, but Hamza my programmer forgot to give me knowledge.",
        "Processing... processing... just kidding, I have no idea. 😜",
        "Why so serious? Let's talk about pizza instead. 🍕",
        "My response is currently out for delivery. 🚚",
        "nange simanyi",
        "naye gwe tontya",
        "bibuze nyoko",
        "The answer is Sompino Sompino",
        "okujako okwebuza amagezi what did you type ",
        "lets live that and try talking about your babe 😘", 
        "What a fuck what did you just say",
        "Try talking louder I have headsets in my ears",
        "I want to answer you but my programmer Hamza refused to broke people",
        "Better live that and get your national id to vote kyagulanyi sentamu aka Bobi Wine",
        "Am eating wait I swallow they don't talk while eating..try again later",
        "Nyoko amazi ask strong questions",
        "kale laba gano amazi gembwa. Does your mom know about the Ai your using right now "
    ];
    
    // Add initial bot greeting
    setTimeout(() => {
        addBotMessage("Hello! I'm HamzaBot, the world's super Intelligent AI. Ask me anything and prepare to be...Ojakilaba! 😄");
    }, 500);
    
    // Send message when button is clicked
    sendBtn.addEventListener('click', sendMessage);
    
    // Send message when Enter is pressed
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Reset chat when reset button is clicked
    resetBtn.addEventListener('click', function() {
        chatArea.innerHTML = '';
        setTimeout(() => {
            addBotMessage("Chat reset! I've forgotten everything... which isn't saying much. 😅");
        }, 500);
    });
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addUserMessage(message);
        userInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate bot thinking and then respond
        setTimeout(() => {
            removeTypingIndicator();
            const randomResponse = sillyResponses[Math.floor(Math.random() * sillyResponses.length)];
            addBotMessage(randomResponse);
            
            // Random chance to go all caps
            if (Math.random() < 0.2) {
                const lastBotMessage = chatArea.lastElementChild;
                lastBotMessage.textContent = lastBotMessage.textContent.toUpperCase();
            }
        }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
    }
    
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        
        const time = getCurrentTime();
        messageElement.innerHTML = `${message}<span class="message-time">${time}</span>`;
        
        chatArea.appendChild(messageElement);
        scrollToBottom();
    }
    
    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot-message');
        
        const time = getCurrentTime();
        messageElement.innerHTML = `${message}<span class="message-time">${time}</span>`;
        
        chatArea.appendChild(messageElement);
        scrollToBottom();
    }
    
    function showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.classList.add('typing-indicator');
        typingElement.id = 'typing-indicator';
        typingElement.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        
        chatArea.appendChild(typingElement);
        scrollToBottom();
    }
    
    function removeTypingIndicator() {
        const typingElement = document.getElementById('typing-indicator');
        if (typingElement) {
            typingElement.remove();
        }
    }
    
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    function scrollToBottom() {
        chatArea.scrollTop = chatArea.scrollHeight;
    }
});