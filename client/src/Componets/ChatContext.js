import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const sendMessage = (name, email, message) => {
    // You can implement the logic to send the message here, such as sending an email
    // For this example, we'll just log the message to the console
    console.log(`Message sent from ${name} (${email}): ${message}`);
  };

  return (
    <ChatContext.Provider value={{ isChatboxOpen, toggleChatbox, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
