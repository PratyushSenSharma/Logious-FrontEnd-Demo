import React from 'react'
import Sidebar from '../components/sidebar.jsx';
import "../styles/chat.css";
import ChatScreen from '../components/ChatScreen.jsx';
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