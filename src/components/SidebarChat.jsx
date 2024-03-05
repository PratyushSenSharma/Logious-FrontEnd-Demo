import React from 'react'
import '../styles/sidebarChat.css';
import { FaUserCircle } from "react-icons/fa";
const SidebarChat = () => {
  return (
    <div className='Sidebar_Chat'>
        <FaUserCircle className="usericon" src=""/>
        <div className="user_info">
            <h2>User Name</h2>
            <p>Last Message....</p>

        </div>
    </div>
  )
}

export default SidebarChat