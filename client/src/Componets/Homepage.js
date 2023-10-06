import React, { useContext, useState } from 'react';
import { ChatContext } from './ChatContext';
import Chatbox from './Chatbox';
import './home.css';
import HompageSVG from './homepage.svg';
import Services from './Services';
import Book from './book';

function Homepg() {
  const { isChatboxOpen, toggleChatbox } = useContext(ChatContext);

  const toggleMessageBox = () => {
    console.log('Toggling message box')
    toggleChatbox(); // Toggle the chatbox when the button is clicked
  };

  return (
    <div className="homepage">
      <img src={HompageSVG} alt="" />
      <div className='home-container'>
        <p className="h">Your body is a Temple</p>
        <h1 className='h1'>SHUA <br></br> AESTHETICS </h1>
        <p className='little'>The Goal is to Serve</p>
        <a href='#services' className='link'>More Below</a>
      </div>
      <Services />
      <Book />
      <button className="chat-button" onClick={toggleMessageBox}>
        {isChatboxOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      {isChatboxOpen && (
        <div className="chatbox">
          <Chatbox />
        </div>
      )}
    </div>
  )
}

export default Homepg;
