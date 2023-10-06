import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Componets/App';
import { ChatProvider } from './Componets/ChatContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>
);

