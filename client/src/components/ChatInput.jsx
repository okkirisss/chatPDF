import React, { useState } from 'react';

function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Message to send: ${message}`);
    setMessage(''); 
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatInput;
