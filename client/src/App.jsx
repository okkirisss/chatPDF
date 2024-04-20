import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import UploadButton from './components/UploadButton';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  // Function to add a new message to the chat window
  const handleNewMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleFileUploadSuccess = () => {
    handleNewMessage({ text: "A new PDF has been uploaded and is now set as the context for your questions.", sender: "system" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Chat</h1>
      </header>
      <main>
        <ChatWindow messages={messages} />
        {/* Pass handleNewMessage to ChatInput to allow it to add new messages */}
        <ChatInput onNewMessage={handleNewMessage} />
        <UploadButton onFileUploadSuccess={handleFileUploadSuccess} />
      </main>
    </div>
  );
}

export default App;
