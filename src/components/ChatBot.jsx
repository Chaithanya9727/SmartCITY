import { useState } from "react";
import '../styles/ChatbotPopup.css'; // Import the custom styles for the chatbot

const ChatbotPopup = () => {
const [isOpen, setIsOpen] = useState(false); // This state controls if the chat popup is open or not

return (
<div className="chatbot-container">
    {/* Chat Popup - Visible when isOpen is true */}
    {isOpen && (
    <div className="chat-popup animate-fadeInUp">
        <div className="chat-popup-header">
        
        </div>
        <div className="chat-popup-body">
        <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/02/14/19/20250214190226-MS9L5NC7.json"
            className="chatbot-iframe"
            title="CityPulse Chatbot"
        />
        </div>
    </div>
    )}

    {/* Floating Chatbot Button */}
    <button
    onClick={() => setIsOpen(!isOpen)} // Toggle popup visibility
    className="chatbot-button animate-bounce hover:scale-120"
    >
    💬
    </button>
</div>
);
};

export default ChatbotPopup;
