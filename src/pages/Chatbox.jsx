import React, { useState } from 'react';
import './ChatBox.css';  // Link to the CSS fil
import { useLocation } from 'react-router-dom';
function ChatBox() {
    const location=useLocation();
    const alumni=location.state;
  const [messages, setMessages] = useState([
    { sender:"alumni", name:alumni.name, text: 'Hello, how can I help you?' },
    { sender: 'student',name:"you", text: 'I need guidance for job opportunities.' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'Student', name:"you",text: newMessage }]);
      setNewMessage('');  // Clear the input field
    }
  };

  return (
    <div className="chat-box">
      {/* Chat messages display area */}
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <strong>{message.name}: </strong> {message.text}
          </div>
        ))}
      </div>

      {/* Input field and send button */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
