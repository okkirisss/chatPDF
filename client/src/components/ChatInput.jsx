import React, { useState } from 'react';
import axios from 'axios';

function ChatInput({ onNewMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message.trim()) return; // Prevent sending empty messages

    // Send the message to the server and get the answer
    try {
      const { data } = await axios.post('http://localhost:8000/ask', { question: message });
      onNewMessage({ text: message, sender: "user" }); // Show the user's question
      onNewMessage({ text: data.answer, sender: "ai" }); // Show the AI's answer
    } catch (error) {
      console.error('Error submitting question:', error);
      alert('Failed to get an answer');
    }

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
