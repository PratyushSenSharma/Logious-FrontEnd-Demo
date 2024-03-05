import React from 'react'
import Sidebar from './sidebar.jsx';
import "../styles/chat.css";
import ChatScreen from './ChatScreen.jsx';
const chat = () => {
  return (
    <div className='chat'>
        <div className="chat_body">
          <Sidebar />
          <ChatScreen/>

        </div>

    </div>
  )
}

export default chat