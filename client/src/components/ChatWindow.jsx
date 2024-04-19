import React from 'react';

function ChatWindow() {
  const messages = [
    { id: 1, text: "Hello! How can I help you?", sender: "ai" },
    { id: 2, text: "Tell me more about the INSIGHT program.", sender: "user" },
    // Add more messages here
  ];

  return (
    <div className="chat-window">
      {messages.map(message => (
        <div key={message.id} className={`message ${message.sender}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
