import React from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import UploadButton from './components/UploadButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Chat</h1>
      </header>
      <main>
        <ChatWindow />
        <ChatInput />
        <UploadButton />
      </main>
    </div>
  );
}

export default App;
