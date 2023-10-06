import React, { useState, useContext } from 'react';
import { ChatContext } from './ChatContext'; // Create the ChatContext
import './home.css'
const Chatbox = () => {
  const { toggleChatbox, sendMessage } = useContext(ChatContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const data = {
      name: name,
      email: email,
      message: message
    };
  
    fetch('http://127.0.0.1:8888/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
    // Clear the input fields
    setName('');
    setEmail('');
    setMessage('');
  };

  const closeChatbox = () => {
    console.log("Close button clicked")
    toggleChatbox(); // Toggle the chatbox to hide it
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <h2>Chat with us</h2>
        <button className='close-button' onClick={closeChatbox}>Close</button>
      </div>
      <div className="chatbox-body">
        <input
          type="text"
          placeholder="Name"
          value={name}
          className='input'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          className='input'
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='.button' onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
